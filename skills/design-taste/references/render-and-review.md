# Render and Review
> **Status: default guidance. Not yet validated by Anthony's comparison rounds.** Wherever this conflicts with a validated rule, a dealbreaker, or a non-negotiable, the validated rule wins.
> **Read when:** you are about to build or show any visual (poster, page, slide, chart, email, interface, motion frame). Always, before the final pass.

## Assume you can see
Assume you have vision and can render what you build. A design you have not looked at is a draft. Spacing, line breaks, collisions and wrong fonts are invisible in code and obvious in a picture, so the loop below is part of the work, not an extra. `L1` · default

## The loop
1. **Build** the piece.
2. **Render** it to an image at its real pixel size.
3. **Measure**, then **look** (both below). "Look carefully" is not a procedure: eyes miss margin drift, near-touching lines and same-color text, and a script does not.
4. **Fix** what you found, starting with anything that breaks a non-negotiable. **Every typography item gets fixed**; typography is never a "quick win" to leave for later.
5. **Re-render, measure and look again.** At least two looks (the first fixes layout, the second checks labels against lines and the typography tests); stop when a full pass finds nothing; four passes at most.

## How to render (any harness)
- Use headless Chrome or Chromium, Playwright, Puppeteer, or your harness's browser tool. Capture the **exact canvas at its real size**, not a scaled page. One image per slide; for an interface, one per state; for email, at about 600 and about 400 px wide.
- Wait for fonts before capturing, then check that the intended face actually loaded (look at the letterforms). A fallback font changes every metric, so do not judge type until you are sure.
- If `file:` URLs are blocked, serve the folder (`python3 -m http.server`) or load the markup with `page.setContent`.
- A minimal Playwright script:
```js
import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
await p.goto('file:///absolute/path/to/file.html');
await p.evaluate(() => document.fonts.ready);
await (await p.$('.canvas')).screenshot({ path: 'out.png' });
await b.close();
```
Render at 2x so you can crop and zoom without blur.

## Measure first (run this in the page before you look)
Run this in the rendered page (for example with Playwright's `page.evaluate`). It checks every `.canvas` or `.slide` (or the page body), and lists text outside the canvas, clipped text, text whose color is almost its background, a short last line, overlapping text, and the distance from the text to each edge. It ignores images and gradients, so still look. Every finding gets zoomed on and fixed or explained.
```js
() => {
  const check = (root) => {
  const rb = root.getBoundingClientRect(), found = [], num = (c) => c.match(/[\d.]+/g).map(Number);
  const lum = ([r, g, b]) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
  const bgOf = (e) => { for (let n = e; n; n = n.parentElement) { const c = num(getComputedStyle(n).backgroundColor); if (c.length < 4 || c[3] > 0.95) return c.slice(0, 3); } return [255, 255, 255]; };
  const own = [...root.querySelectorAll('*')].filter((e) => [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim()) && e.getClientRects().length);
  const boxes = [];
  own.forEach((e) => {
    const r = e.getBoundingClientRect(), cs = getComputedStyle(e), t = e.textContent.trim().slice(0, 28);
    boxes.push({ e, r, t });
    if (r.left < rb.left - 1 || r.right > rb.right + 1 || r.top < rb.top - 1 || r.bottom > rb.bottom + 1) found.push(`OUTSIDE canvas: "${t}"`);
    if (cs.overflow !== 'visible' && (e.scrollWidth > e.clientWidth + 1 || e.scrollHeight > e.clientHeight + 1)) found.push(`CLIPPED: "${t}"`);
    const L1 = lum(num(cs.color).slice(0, 3)), L2 = lum(bgOf(e)), ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
    if (ratio < 3) found.push(`TEXT COLOUR ~ BACKGROUND ${ratio.toFixed(1)}:1 (ignores images and gradients): "${t}"`);
    const tn = [...e.childNodes].find((n) => n.nodeType === 3 && n.textContent.trim());
    if (tn) { const rg = document.createRange(); rg.selectNodeContents(tn); const rs = [...rg.getClientRects()].filter((x) => x.width > 1);
      const lines = [...new Set(rs.map((x) => Math.round(x.top)))].length;
      if (lines > 1) { const last = rs[rs.length - 1].width, widest = Math.max(...rs.map((x) => x.width)); if (last < widest * 0.2) found.push(`SHORT LAST LINE (widow?): "${t}"`); } }
  });
  for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
    const a = boxes[i], b = boxes[j]; if (a.e.contains(b.e) || b.e.contains(a.e)) continue;
    const w = Math.min(a.r.right, b.r.right) - Math.max(a.r.left, b.r.left), h = Math.min(a.r.bottom, b.r.bottom) - Math.max(a.r.top, b.r.top);
    if (w > 2 && h > 2) found.push(`OVERLAP: "${a.t}" and "${b.t}"`);
  }
  const m = boxes.length ? { left: Math.min(...boxes.map((x) => x.r.left)) - rb.left, right: rb.right - Math.max(...boxes.map((x) => x.r.right)), top: Math.min(...boxes.map((x) => x.r.top)) - rb.top, bottom: rb.bottom - Math.max(...boxes.map((x) => x.r.bottom)) } : {};
  return { margins: Object.fromEntries(Object.entries(m).map(([k, v]) => [k, Math.round(v)])), findings: found };
  };
  const roots = [...document.querySelectorAll('.canvas, .slide')];
  return (roots.length ? roots : [document.body]).map((r, i) => ({ piece: i + 1, ...check(r) }));
}
```
Then recompute any figure that appears in more than one place (totals, percentages, KPIs) and check they agree.

## How to look
1. **Squint first.** View the whole image small. What do you see first, second, third? Does that match the order you intended and the purpose of the piece?
2. **Then zoom.** Crop to 100% or 2x and view **crops** (top third, middle, bottom, and each corner), not only the whole image; view every text block, the headline, every number, every label that touches a line or an image, and each corner and edge. Do not skip this step: it is where the errors are.
3. **Compare** against the pre-flight checklist in SKILL.md, not against your memory of what you wrote.

## Typography check (the errors weaker models miss most)
- **Is it the right face?** The real glyphs, not a fallback.
- **Line breaks.** The headline breaks by phrase; lines are of similar length; no single word on the last line; no widow or orphan ("pm" or "of" alone).
- **Descender clearance.** Descenders hang about a quarter to a third of the font size below the baseline. A "g", "y" or "Q" must not touch a rule, a line below, or an image edge.
- **Leading.** Lines read as one thought and nothing collides.
- **Size relationships.** A dramatic jump from headline to the rest, moderate steps below. The smallest text is readable at the real viewing size (a thumbnail, a room, a phone).
- **Optical alignment.** Edges of different sizes line up by eye; a big figure and its label are centered on the figure's height, not its baseline.
- **Measure.** No line over about 75 characters.
- **Tracking.** Tracked caps for small metadata; display type close.
- **Numbers.** Tabular figures where they stack; a figure never overflows its column.
- **Color on the real surface.** Judge text color against the pixels directly behind it (split panels, image halves, gradients), not against the page background in your CSS.

## Operational typography tests (apply each; do not rely on a general impression)
- If a headline line ends on a preposition, article or conjunction, or splits a number from its unit or a time from "am/pm", re-break it by phrase.
- If any line is a single short word, rebreak it or widen the measure.
- If two gaps in a stack look almost equal, make them equal; if the gap between the image and the headline is smaller than the gaps inside the text, enlarge it.
- If a figure and its unit sit in different sizes, check they share an optical baseline or center.
- If you used a weight split or emphasis, say which one phrase carries the claim.

## Spatial check
- Margins match on all sides, and equal gaps are really equal (two nearly equal but different gaps read as an accident).
- Nothing sits within about a letter-height of another element unless it is meant to touch.
- Nothing is clipped at an edge, and no box overflows.
- No pooled voids, and the surplus space is absorbed by the image or headline.
- In a chart, every annotation is checked against the data line at the x-positions it spans.
- Footers and page numbers do not overlap content, and are visible.
- The thing the brief calls primary is the largest or loudest thing.
- The screenshot is the size the brief asked for.
- **Interfaces:** no dead band above a footer or between regions; badges, buttons and chips share one size per kind; figures in a column share precision and align on the right; the identifying field of a row (a name, an order number) is never truncated; the first screen looks finished.
- **Email:** the first screen (about 600 by 800) looks finished; at most one image slot, under about a third of it, with its placeholder label printed on the block, not only in alt text; the primary action is inside the first screen.

## Hunt list: failures seen in tests
A headline descender running into a rule · absolutely positioned labels landing on top of lines or numbers · a large figure colliding with a chart · text the same color as its panel (a figure that vanishes) · a page number nobody can see · a placeholder photo box taking half a slide · a lone word or "pm" on its own line · sans type where a display face was needed · invented customer names and statistics.

## In the delivery note
A note without a **Looked at** line is incomplete. List what you looked at ("rendered at 1080 x 1350, three passes; found and fixed the descender collision and the widow") and anything you could not verify. Never claim a look you did not take.

## If you cannot render
Say so, and use no-render mode:
- Use flow and grid layout, not absolute coordinates.
- Compute chart label positions from the data in code, and check each against the line values at its x-range.
- Estimate a large numeral's width as its character count times about 0.6 of its size, and confirm it fits its column with a clear gap.
- Bind the last two words of every headline, and every time or date range, with a non-breaking space.
- Take every text color from the surface directly beneath it. Compute contrast from the CSS values and list the ratios.
- List each geometry check you could not verify.
`L1` · default
