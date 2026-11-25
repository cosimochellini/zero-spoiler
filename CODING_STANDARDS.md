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
- A spoiler test takes its expected gate, medium and drawing from a table of
  pins written in the test from the naming scenes, and asks `src/test/gates.ts`
  (`sidesOf`, `gateCases`, `shownIn`, `unlisted`, `stageMissedAt`) for the
  bookmarks and stages. An expectation read from the data under test
  (`REDRAWINGS`, a record's `source` or `revealedAt*`, relationships, chronicle
  stories), or worked out by the engine's own rule (`gateOf`), agrees with any
  mistake in that data: a stage that loses its `source` leaks to the other
  medium and the suite stays green. Report it as a P2, and the same for a table
  whose rows are chosen by reading the data. A sweep over every record that
  reads the data's gates (`relationshipBoundaries.test.ts`) checks the engine,
  and is allowed when a pin table for those records sits beside it.
- Preserve accessible keyboard interaction, focus, covered-content semantics and
  theme contrast when changing UI.

## Only when relevant

- **User-facing copy and README:** follow
  [tone-of-voice](.claude/skills/tone-of-voice/SKILL.md).
- **Drawings:** follow [line-drawings](.claude/skills/line-drawings/SKILL.md)
  and its file for the series. A C grade (unrecognisable, invented, a face or
  lettering, a reveal before its stage), a wrong episode/chapter pair, a missing
  required stage, a regression and an untested house-style break are defects. A
  true, recognisable B is P3 at most, and the PR says it is a B.
- **Archive text, research or artwork:** follow
  [Sources and rights](CONTRIBUTING.md#sources-and-rights).

## Stories and cards dated in two media

Game of Thrones stories and relationship cards are defects when:

- after a death or a change of role, the text keeps the present ("Hand", "Robert
  wants her dead") where the past belongs ("was", "the late king");
- a story or card dated in both media tells a fact only one medium tells, or
  tells differently (actor, order, wording); split it by medium;
- a card's type disagrees with its text;
- the Italian leaves a "gli" or "che" open to two people instead of naming the
  person, or changes a record name's capitals.
