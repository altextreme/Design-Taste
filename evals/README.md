# Evals: does the skill actually improve the work?

Design Taste validates its rules by Anthony's side-by-side picks. That says each rule is his, not that the skill, as a whole, improves what an agent produces. This folder is the harness for that second question. It is a protocol plus fixed briefs; it has not been run yet.

## What is compared

For each brief in `briefs.json`, generate the piece three ways with the same model and settings:

| Arm | What is loaded |
|---|---|
| **A: baseline** | Nothing. |
| **B: reference** | Anthropic's `frontend-design` skill (or the nearest equivalent house guidance). |
| **C: design-taste** | This skill. |

Name the arms with random letters and keep the mapping hidden until scoring is done.

## Scoring

1. **Mechanical first.** Run `skills/design-taste/scripts/lint.mjs --json` on web output. Record blockers and warnings per arm. A blocker is not a verdict by itself, but it is evidence.
2. **Assertions.** Each brief lists checkable assertions drawn from validated rules. Mark each pass or fail from the render. Count passes.
3. **Blind judgment.** Anthony picks the best and worst of the three renders per brief, without knowing the arms, and says why in one line. This is the only judgment that counts.
4. **Hard blockers.** An arm that fails a non-negotiable (contrast, collisions, hierarchy, reading order, paragraph links) fails that brief whatever else it scores.

## Promotion and stopping rules

- The skill is working if arm C is picked best on more briefs than either other arm and has no more blockers than arm B.
- If arm B beats C on a brief, record what B did that C did not; that is a candidate rule, not a fix to apply blindly.
- A rule is promoted from `default` to validated only by Anthony's comparison round (`validation-queue.md`), never by an eval score.
- Keep a **negative control**: one brief with a deliberately weak register fit (for example a trust-critical brief phrased playfully). The skill should name the contradiction, not obey blindly.
- Log each run in `evals/log.md`: date, model, skill commit, arm mapping (revealed after scoring), per-brief picks, blockers, and what changed as a result.

## Description testing

The skill's `description` decides whether it triggers. Test it with realistic prompts that should and should not trigger it (a one-line "make this look better", a backend-only task, a data-only request). The `skill-creator` tooling has a description optimizer for this. Do not change the description without running it.
