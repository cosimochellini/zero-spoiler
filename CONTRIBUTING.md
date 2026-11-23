# Contributing

## Setup

Use Node from `.nvmrc` and npm from `package.json`, then `npm ci` and
`npm run dev`. Keep optional dependencies: fallow and impeccable's detector each
arrive as the optional package of your platform.

## Scope and implementation

Keep spoilers out of issue/PR titles. Follow owner decisions and existing code
and tests. Hidden content stays server-side until its episode/chapter gate;
round uncertain thresholds up. Later facts belong in dated entries.

Read only what the change needs:

- Code structure and spoiler boundaries: [architecture](docs/architecture.md).
- Review criteria: [coding standards](CODING_STANDARDS.md).
- Issue workflow: [issues](.agents/skills/issues/SKILL.md).
- User-facing text: [tone-of-voice](.claude/skills/tone-of-voice/SKILL.md).
- Artwork: [line-drawings](.claude/skills/line-drawings/SKILL.md).

## Checks

Run `npm run check` before pushing: typecheck, lint, format, generated counts,
tests, build and quality gates. Report failed or unexecuted checks. For changed
content, run the relevant `verify:*` scripts in `package.json`; network checks
are outside `check`. Regenerate counts with `docs:counts` and chronicle evidence
with `docs:chronicle` when their inputs change. CI client JavaScript growth over
2,048 bytes needs a standalone `client-budget: <reason>` in the PR body; leak
checks remain blocking.

`gate:design` serves the build and scans its pages with impeccable's detector at
390 and 1440 px wide. It needs Chrome, Chromium or Edge; set
`IMPECCABLE_BROWSER` to the executable when the detector does not find one. Fix
a finding in the page. A rule the house style contradicts is waived in the
shared `.impeccable/config.json` with a reason and a glob of page addresses,
since a scan of rendered pages has no source files:

```sh
npx impeccable ignores add-value skipped-heading "*" \
  --file "http://127.0.0.1:*/*/*/places/*" --reason "…"
```

`**` as the glob waives the rule on every page. The gate fails on a waiver with
no reason, on a `"*"` with no glob (the detector never applies one), on a
wildcard inside `{}`, and on one that matches no finding any more, so remove a
waiver in the change that fixes its page. A waiver that states the house style
is kept for good: start its reason with `Permanent: ` and the gate lets it match
nothing. The gate prints `no sample for …` for a series or page type it scans
with no entry in `SAMPLES` (`scripts/design-gate.mjs`), and fails when a page
type named there leaves the sitemap. The detector loads `DESIGN.md` only for a
local file, never for a page address, so the gate also saves each page's server
markup beside a copy of `DESIGN.md` and scans the copies at 1440 px for the
`design-system-*` rules. It fails on a font outside the tokens on a text
element, and on a text, background, border or outline colour outside them; a
canary page in an off-token font and colour must be flagged or the gate cannot
vouch for the scan. It does not see `box-shadow`, SVG `fill` and `stroke`,
gradients, text-decoration, accent or caret colours, pseudo-elements, or the
font of an `input` or `select`. The radius rule is advisory, and the type-size
rule never fires on a rendered page. What the browser builds after hydration,
most of the characters, places, fruits and abilities indexes, is outside this
scan; the gate prints those pages. Keep each `fontFamily` in `DESIGN.md` on one
line, or the detector does not read it. A browser default counts: style a
control's `color`, `borderColor` or `outlineColor` from the tokens even when it
is invisible. The gate reads neither `.impeccable/config.local.json` nor ignore
comments, and it refuses a page that carries `data-impeccable-ignore`.
`.gate/design.json` lists every raw finding, waived or not.

## Archive and drawing verification

- **One Piece data:** compare base/head `npm run --silent archive:table` dumps;
  compare mappings separately. For dated additions/removals, dump with
  `-- --dated-only`, sort both with `LC_ALL=C`, then use `comm -13` /
  `comm -23`, preserving duplicates. Report intentional changes.
- **Behavior-preserving archive/server refactors:** run
  `npm run --silent archive:dump` in head and an isolated worktree at the exact
  base SHA, with dependencies installed; save outside the checkout and `cmp`.
  Pass `-- --series <slug>` for another series, `--skip <payload>` to leave out
  a payload the change alters and `--bookmarks <file.json>` to hold both to the
  base's bookmarks. `archive:table` covers One Piece only.
- **Site changes:** build, `npm start` on a free port, then check the affected
  flow in Chrome with local `puppeteer-core`, running inside the worktree. Set
  the series cookie; check before/at changed episode and chapter gates. Capture
  visual evidence and close browser/preview. Docs/tooling need no browser flow
  or dumps; `npm run check` itself still needs Chrome, for `gate:design`.
- **Drawings:** inspect `npm run art:sheet -- <id>` output. For One Piece
  character redrawings, build and run `npm run art:shots -- <id>`; inspect the
  gate screenshots. Keep generated evidence out of commits.

## Sources and rights

Fill the PR template's sources/rights and AI-help fields, using “none” where
inapplicable. Follow [license scope](LICENSE-SCOPE.md) and, for adapted text,
[source terms](LICENSE-SCOPE.md#source-terms-and-adaptations) and
[public credits](docs/source-credits.md); required credit opens with the text.
Check facts on lawful sources, write independently and record wiki URLs or
chapter/page or episode/timestamp. Commit no series scans, frames, dialogue,
subtitles or reference images; use no unofficial manga/anime links. Research
quotations: at most two, each at most 12 words and 80 characters. Draw original
paths by eye, never trace; mark unviewed references for human verification. What
a drawing may show follows the line-drawings skill. Send rights claims/deadlines
to the owner through the legal page's contact process.

## Delivery and agents

Use Conventional Commit titles, at most 100 characters. Fill
`.github/pull_request_template.md` with verification evidence. Issue PRs are
**drafts** with `Closes #N`; leave merging to the owner, or to the orchestrator
the owner asked to land them (`.agents/skills/landing-prs/SKILL.md`).

Codex: invoke `$issue-implementer` with the issue number. Claude: delegate to
the `issue-implementer` subagent. Both use the
[shared workflow](.agents/skills/issue-implementer/SKILL.md); referenced
Markdown skills can be read directly in either tool.

## Authoring relationship selections

A dossier’s `relationships` timeline contains complete editorial selections of
at most five distinct character ids, in the order the cards should appear. A
reached entry replaces the whole list; it is not a patch or a ranking inferred
from appearances. An empty list explicitly clears the selection. An absent field
means no relationship content has been authored.

Author a new selection only when a verified story event justifies changing the
people, their order or their wording. Carry the latest selection forward across
sagas indefinitely when nothing changes. Repeat unchanged entries when retaining
a person in a new selection; their identical consecutive wording does not add a
history stage. Earlier reached stages remain available for selected people,
including someone removed and later selected again. Unselected people have no
cards or history in the response.

Pin each selection to verified episode/chapter thresholds, behind the owner,
every selected person and the relationship fact itself. An entry without
`source` reaches both media, so both the episode and the chapter must show its
wording; a `source: 'episode'` or `source: 'chapter'` entry needs only its own
medium. For each medium the entry reaches, the evidence is its episode or
chapter page, or a character page citing it. When the media tell a bond
differently, give each medium its own link inside its own `source` entry
(`kiteGon` in the chapter entry, `kiteGonEpisode` in the episode one). Each
source resolves its own latest applicable selection. Keep directed perspectives
independent and write original IT/EN type and explanation text. Four or five
people is a target, never a quota. Self-links, duplicate ids, non-character
targets and invalid dates fail the data checks.

Entries without `source` are episode↔chapter anchors: `cmp` base and head
`archive:dump -- --series <slug> --skip loadRelationships --bookmarks base.json`.

## Recording provenance

Evidence is data, not prose files. `docs/content-provenance/sources.json` pins
every wiki revision read: append entries, never rewrite earlier ones.

`npm run provenance:pin -- --series <slug> "Title" ["Title" …]` does the
appending. A title already pinned from that wiki, or one that redirects to a
pinned page, keeps its key and revision; any other title is read at its latest
revision and appended. A title pinned under several keys reuses the plainest
(`en-Chapter_433.json` over `issue815-en-Chapter_433.json`). The file is re-read
just before writing, so another session's appends survive. Each title prints its
key and the cached wikitext under `.gate/wiki/<slug>/revisions/` to read;
`--dry-run` writes nothing to `sources.json`. New keys are `en-<Title>.json` for
One Piece (with `-<revision>` when another title already holds that key) and
`hxh-en-<Title>-<revision>.json` for Hunter x Hunter. Game of Thrones pins from
two wikis: the Game of Thrones Wiki (the show, the default) as
`got-en-<Title>-<revision>.json`, and with `--wiki books` the Ice and Fire Wiki
as `iaf-en-<Title>-<revision>.json`; a title pinned from one is never reused for
the other. The script never reads A Wiki of Ice and Fire, which refuses scripted
requests (#1009). The latest revision a title was read at is cached under
`.gate/wiki/<slug>/latest/`; delete that file to read it afresh. Game of Thrones
keeps both cache folders one level deeper, per wiki:
`.gate/wiki/game-of-thrones/episodes/` for the show and
`.gate/wiki/game-of-thrones/books/` for the books. The archive gate test holds a
floor on the source count, so nothing else needs bumping. Beside it, each ledger
below is checked by `src/data/provenance.test.ts`, which describes every series
once and runs the same checks over all of them:

- `relationships.json` maps each One Piece character with a `relationships`
  timeline to the `sources.json` key of their character revision, or `null`. A
  test fails when a timeline has no key, a key is stale, or an entry's episode
  or chapter page is not pinned. A one-source entry's other number only orders
  it and needs no page.
- `hunter-x-hunter.json` and `game-of-thrones.json` list, per record id, the
  pages read (`sources`) and the checks nobody has made yet (`unverified`).
  Every archived record has an entry; one marked `pending: true` is research for
  a record not filed yet. Episode and chapter pages follow from the record's
  gates and are not listed. Each series' allowed hosts sit in
  `src/data/provenance.test.ts`, beside the rulings that allow them.
- `hunter-x-hunter-relationships.json` lists every archived Hunter x Hunter
  character once: under `authored`, with the `hxh-` keys of the wiki revisions
  read, under `omitted`, with the reason, or under `pending`, with the issue
  that will author it (filed later, not deliberately omitted). Each entry's
  `Episode N (2011)` and `Chapter N` page must be pinned from the Hunter x
  Hunter wiki; a One Piece page of the same title is no evidence, and the
  reverse holds too.
- `game-of-thrones-relationships.json` lists every archived Game of Thrones
  character once: under `authored`, under `omitted`, with the reason, or under
  `pending`, with the issue that will author it. An authored entry's `sources`
  holds the `got-` and `iaf-` keys of the revisions read; each key must be
  pinned from the wiki its prefix names, so a page of the same title on the
  other wiki is no evidence. The A Wiki of Ice and Fire pages read stay URLs in
  the entry's `unpinned`, with its `reason`, until #1009 unblocks: that host
  alone may appear there.

The same test reads every other file in `docs/content-provenance/` and fails on
a `?oldid=` URL from a series' wiki that `sources.json` does not pin at that
revision, under that title when the URL names a page; a language path such as
`/it/wiki/` stays a plain URL, as Italian Wikipedia does.
`npm run provenance:pin` pins only a page's latest revision, or keeps one
already pinned, so an older revision you read needs its `sources.json` entry
added by hand in the same shape; cite the pinned revision instead only if you
read that one.

The wiki is read for facts only; no passages, dialogue, frames or scans enter
the repository. A decision the data cannot show, such as a gate delayed behind
an endpoint, a source-only entry or a deliberate omission, is a short comment
beside the entry. A removed card does not claim the bond ended, and no romance
or reciprocity is inferred.
