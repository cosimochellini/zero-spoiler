# Coding standards

Use existing patterns and the smallest complete change. Mechanical rules live in
the compiler, ESLint, Prettier, tests and quality gates (`npm run check`).

## Review rules

- Preserve the [spoiler contract](docs/architecture.md#spoiler-contract): hidden
  content stays server-side, including ids, drawings, search terms and metadata.
- Read owner decisions in the issue/PR before reporting a defect. A deferred
  epic child is not missing work. Report new correctness or spoiler bugs on
  impact.
- Keep docs, counts and PR claims consistent with the actual change.
- Preserve accessible keyboard interaction, focus, covered-content semantics and
  theme contrast when changing UI.

## Only when relevant

- **User-facing copy and README:** follow
  [tone-of-voice](.claude/skills/tone-of-voice/SKILL.md).
- **Drawings:** follow [line-drawings](.claude/skills/line-drawings/SKILL.md)
  and its file for the series. A C grade (unrecognisable, invented, a face or
  lettering, a reveal before its stage), a wrong episode/chapter pair, a missing
  required stage, a regression and an untested house-style break are defects. A
  B the PR declares is P3 at most.
- **Archive text, research or artwork:** follow
  [Sources and rights](CONTRIBUTING.md#sources-and-rights).
