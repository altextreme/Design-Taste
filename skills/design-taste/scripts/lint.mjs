#!/usr/bin/env node
// design-taste lint: a no-model scan of HTML, CSS and JSX-style files for the
// measurable subset of the dealbreakers and accessibility floors.
// It finds evidence of a default nobody chose; it does not judge taste.
// Zero dependencies. Usage: node lint.mjs [--json] [--warn-only] <file|dir> ...
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const EXT = new Set(['.html', '.htm', '.css', '.jsx', '.tsx', '.vue', '.svelte']);
const SKIP = new Set(['node_modules', '.git', 'dist', 'build']);

// severity: blocker = a dealbreaker; a11y-floor = an accessibility floor (both
//           fail the scan; neither is a critique BLOCK by itself); warn = a default
// source:   where the rule lives in the skill
const RULES = {
  'pure-black-on-white': { severity: 'blocker', source: 'principles/color.md (R083)', message: 'Pure black text on a pure white ground vibrates. Use a warm off-black ink on an off-white ground.' },
  'justified-text': { severity: 'blocker', source: 'SKILL.md dealbreakers', message: 'Justified text creates rivers. Set flush left, ragged right.' },
  'italic-heading': { severity: 'blocker', source: 'SKILL.md dealbreakers', message: 'Italic emphasis in headings (especially display serifs) is a dealbreaker. Emphasize with weight.' },
  'tracked-lowercase': { severity: 'blocker', source: 'SKILL.md dealbreakers', message: 'Letterspaced lowercase. Tracking belongs to small all-caps metadata only.' },
  'focus-outline-removed': { severity: 'a11y-floor', source: 'SKILL.md interface floor and non-negotiable 1 (focus-ring contrast)', message: 'Focus outline removed with no replacement. Keyboard focus must stay visible.' },
  'img-missing-alt': { severity: 'a11y-floor', source: 'SKILL.md interface floor; ui-craft.md accessibility baseline', message: 'Image has no alt attribute. Use descriptive alt, or alt="" if decorative.' },
  'positive-tabindex': { severity: 'a11y-floor', source: 'SKILL.md interface floor (reading order equals DOM order)', message: 'Positive tabindex reorders keyboard focus. Match DOM order to reading order.' },
  'placeholder-content': { severity: 'blocker', source: 'SKILL.md interface floor', message: 'Placeholder or invented content (lorem ipsum, a stock person name). Use real content or a labelled placeholder.' },
  'transition-all': { severity: 'warn', source: 'process-and-critique.md review passes', message: '`transition: all` animates properties nobody chose. Name the properties.' },
  'no-reduced-motion': { severity: 'warn', source: 'ui-craft.md accessibility baseline', message: 'Animation or transition with no prefers-reduced-motion variant.' },
  'glass-blur': { severity: 'warn', source: 'SKILL.md explicit-request list', message: 'backdrop-filter (glassmorphism) is explicit-request only. If requested, ship an opaque fallback and check contrast.' },
  'gradient-text': { severity: 'warn', source: 'SKILL.md explicit-request list', message: 'Gradient headline text is explicit-request only.' },
  'glow-shadow': { severity: 'warn', source: 'principles/material-texture-surface.md', message: 'Zero-offset glow. Shadows should establish depth: subtle, neutral, offset.' },
  'pills-everywhere': { severity: 'warn', source: 'principles/negative-constraints.md (R085)', message: 'Pill radius on many rules. When everything is a pill, shape stops carrying meaning.' },
  'emoji-as-icon': { severity: 'warn', source: 'SKILL.md dealbreakers', message: 'Emoji inside a control or heading where an icon belongs.' },
  'placeholder-as-label': { severity: 'warn', source: 'ui-craft.md forms', message: 'Input with a placeholder and no label element. A placeholder is an example, not a label.' },
  'missing-lang': { severity: 'warn', source: 'ui-craft.md accessibility baseline', message: '<html> has no lang attribute.' },
};

const HEX = (v) => {
  v = v.trim().toLowerCase();
  if (v === 'white') return '#ffffff';
  if (v === 'black') return '#000000';
  const m = v.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/);
  if (!m) return null;
  return m[1].length === 3 ? '#' + m[1].split('').map((c) => c + c).join('') : v;
};

function lineOf(text, index) {
  let n = 1;
  for (let i = 0; i < index && i < text.length; i++) if (text.charCodeAt(i) === 10) n++;
  return n;
}

// Pull CSS out of a file: whole .css files, <style> blocks, and style="" attributes.
function cssChunks(file, text) {
  const chunks = [];
  if (extname(file) === '.css') chunks.push({ css: text, offset: 0 });
  for (const m of text.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)) chunks.push({ css: m[1], offset: m.index + m[0].indexOf(m[1]) });
  for (const m of text.matchAll(/style=("([^"]*)"|'([^']*)')/gi)) {
    const body = m[2] ?? m[3] ?? '';
    chunks.push({ css: `x{${body}}`, offset: m.index, inline: true });
  }
  return chunks;
}

function blocks(chunk) {
  const out = [];
  const css = chunk.css.replace(/\/\*[\s\S]*?\*\//g, (c) => ' '.repeat(c.length));
  for (const m of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const decls = {};
    for (const d of m[2].split(';')) {
      const i = d.indexOf(':');
      if (i > 0) decls[d.slice(0, i).trim().toLowerCase()] = d.slice(i + 1).trim().toLowerCase();
    }
    out.push({ selector: m[1].trim().toLowerCase(), decls, raw: m[2].toLowerCase(), index: chunk.offset + m.index });
  }
  return out;
}

export function lintText(file, text) {
  const findings = [];
  const add = (rule, index, detail) => findings.push({ rule, ...RULES[rule], file, line: lineOf(text, index), detail });
  let pills = 0;
  let pillAt = 0;
  let hasMotion = false;
  let motionAt = 0;

  const all = cssChunks(file, text).flatMap(blocks);
  for (const b of all) {
    const d = b.decls;
    const color = d['color'] ? HEX(d['color']) : null;
    const bg = HEX(d['background-color'] ?? d['background'] ?? '');
    if (color === '#000000' && bg === '#ffffff') add('pure-black-on-white', b.index, b.selector);
    if (d['text-align'] === 'justify') add('justified-text', b.index, b.selector);
    if (/(^|[\s,>])h[1-4]\b/.test(b.selector) && d['font-style'] === 'italic') add('italic-heading', b.index, b.selector);
    const ls = d['letter-spacing']?.match(/^(-?[\d.]+)(em|px|rem)$/);
    if (ls && parseFloat(ls[1]) >= (ls[2] === 'px' ? 1 : 0.05) && !/uppercase|small-caps/.test(`${d['text-transform'] ?? ''} ${d['font-variant'] ?? ''} ${d['font-variant-caps'] ?? ''}`)) {
      add('tracked-lowercase', b.index, `${b.selector} letter-spacing:${d['letter-spacing']}`);
    }
    if (/:focus(?!-visible)/.test(b.selector) && /^(none|0)\b/.test(d['outline'] ?? '') && !d['box-shadow'] && !d['border'] && !d['border-color']) {
      add('focus-outline-removed', b.index, b.selector);
    }
    if (/transition(-property)?\s*:\s*all\b/.test(b.raw)) add('transition-all', b.index, b.selector);
    if (/(^|[;\s])(animation(-name)?|transition)\s*:/.test(' ' + b.raw) && !hasMotion) { hasMotion = true; motionAt = b.index; }
    if (d['backdrop-filter'] || d['-webkit-backdrop-filter']) add('glass-blur', b.index, b.selector);
    if (d['background-clip'] === 'text' || d['-webkit-background-clip'] === 'text') add('gradient-text', b.index, b.selector);
    if (/box-shadow\s*:\s*0\s+0\s+\d+/.test(b.raw)) add('glow-shadow', b.index, b.selector);
    if (/border-radius\s*:\s*(9999|999|50)\w*/.test(b.raw) && !/%/.test(d['border-radius'] ?? '')) { pills++; pillAt ||= b.index; }
  }
  if (/@keyframes/i.test(text) && !hasMotion) { hasMotion = true; motionAt = text.search(/@keyframes/i); }
  if (hasMotion && !/prefers-reduced-motion/i.test(text)) add('no-reduced-motion', motionAt, 'animation or transition present');
  if (pills >= 3) add('pills-everywhere', pillAt, `${pills} rules with pill radius`);

  if (/\.(html?|jsx|tsx|vue|svelte)$/.test(file)) {
    for (const m of text.matchAll(/<img\b(?![^>]*\balt\s*=)[^>]*>/gi)) add('img-missing-alt', m.index, m[0].slice(0, 60));
    for (const m of text.matchAll(/tabindex\s*=\s*["']?([1-9]\d*)/gi)) add('positive-tabindex', m.index, `tabindex=${m[1]}`);
    for (const m of text.matchAll(/lorem ipsum|\b(jane|john) doe\b|\bacme (corp|inc)\b/gi)) add('placeholder-content', m.index, m[0]);
    for (const m of text.matchAll(/<(button|h[1-4]|li)\b[^>]*>\s*(\p{Extended_Pictographic})/gu)) add('emoji-as-icon', m.index, m[0].slice(0, 40));
    if (/<input\b[^>]*placeholder=/i.test(text) && !/<label\b|aria-label=|aria-labelledby=/i.test(text)) add('placeholder-as-label', text.search(/<input\b[^>]*placeholder=/i), '<input placeholder> with no label');
    if (/<html\b(?![^>]*\blang=)/i.test(text)) add('missing-lang', text.search(/<html\b/i), '<html>');
  }
  return findings;
}

function walk(p, out = []) {
  const s = statSync(p);
  if (s.isDirectory()) {
    for (const f of readdirSync(p)) if (!SKIP.has(f)) walk(join(p, f), out);
  } else if (EXT.has(extname(p).toLowerCase())) out.push(p);
  return out;
}

export function lintPaths(paths) {
  return paths.flatMap((p) => walk(p)).flatMap((f) => lintText(f, readFileSync(f, 'utf8')));
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const args = process.argv.slice(2);
  const json = args.includes('--json');
  const warnOnly = args.includes('--warn-only');
  const paths = args.filter((a) => !a.startsWith('--'));
  if (!paths.length) {
    console.error('usage: node lint.mjs [--json] [--warn-only] <file|dir> ...');
    process.exit(2);
  }
  const findings = lintPaths(paths);
  const blockers = findings.filter((f) => f.severity === 'blocker');
  const floors = findings.filter((f) => f.severity === 'a11y-floor');
  const warnings = findings.length - blockers.length - floors.length;
  if (json) console.log(JSON.stringify({ blockers: blockers.length, a11yFloor: floors.length, warnings, findings }, null, 2));
  else {
    for (const f of findings) console.log(`${f.severity.toUpperCase().padEnd(10)} ${f.file}:${f.line}  ${f.rule}  ${f.message}${f.detail ? `  [${f.detail}]` : ''}`);
    console.log(`\n${blockers.length} blocker(s), ${floors.length} a11y-floor hit(s), ${warnings} warning(s). A clean scan means no measurable tell, not a good design: still render and look.`);
  }
  process.exit((blockers.length || floors.length) && !warnOnly ? 1 : 0);
}
