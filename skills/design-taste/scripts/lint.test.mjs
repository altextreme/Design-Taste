import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { lintText } from './lint.mjs';

const read = (f) => readFileSync(new URL(`./fixtures/${f}`, import.meta.url), 'utf8');

test('bad fixture trips every rule', () => {
  const rules = new Set(lintText('bad.html', read('bad.html')).map((f) => f.rule));
  for (const r of ['pure-black-on-white', 'justified-text', 'italic-heading', 'tracked-lowercase', 'focus-outline-removed', 'img-missing-alt', 'positive-tabindex', 'placeholder-content', 'transition-all', 'no-reduced-motion', 'glass-blur', 'gradient-text', 'glow-shadow', 'pills-everywhere', 'emoji-as-icon', 'placeholder-as-label', 'missing-lang']) {
    assert.ok(rules.has(r), `expected ${r}`);
  }
});

test('good fixture is clean', () => {
  assert.deepEqual(lintText('good.html', read('good.html')), []);
});

test('tracked caps are allowed, tracked lowercase is not', () => {
  assert.equal(lintText('a.css', '.a{letter-spacing:.15em;text-transform:uppercase}').length, 0);
  assert.equal(lintText('a.css', '.a{letter-spacing:.15em}').length, 1);
});
