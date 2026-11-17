# Agents

## Issues

Agents take their work from GitHub issues by label. Load the `issues` skill
(`.agents/skills/issues/SKILL.md`) before you open, split, pick up, triage or
relabel an issue.

- Every issue carries one `type:`, `area:`, `status:`, `priority:` and `size:`
  label; an epic has no `size:`. The labels live in `.github/labels.json`; after
  editing that file, run `npm run labels:sync`.
- A loop that picks up issues starts with `npm run issues:unblock`.

## Pull requests

Load the `landing-prs` skill (`.agents/skills/landing-prs/SKILL.md`) before you
review, fix review findings on, or merge a pull request.

## Design

Load the `impeccable` skill (`.agents/skills/impeccable/SKILL.md`; Claude Code
reads its own copy in `.claude/skills/impeccable/`) before you change the UI.

- The house style wins over the skill's defaults: the tokens in
  `src/styles/tokens.stylex.ts` and the themes in `src/styles/themes.ts` are
  fixed.
- A live-mode variant is plain CSS; port the one you keep to `stylex.create`.
- Live mode (`/impeccable live`) is for the dev server only. While it runs it
  patches `src/routes/__root.tsx` and creates `src/impeccable/`; run
  `impeccable live-server stop`, which reverts both, before you commit or build.
- Keep `IMPECCABLE_LIVE_COPY_AGENT=chat` in `.claude/settings.json` and
  `.codex/config.toml`: without it "Apply" starts a `codex` or `claude` CLI with
  approvals bypassed.
