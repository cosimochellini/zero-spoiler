# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Readers partway through One Piece, Hunter x Hunter or Game of Thrones who want
to look something up without learning what comes later. They watch or read, and
count their progress in that medium's units. The repository writes down three
situations:

- A reader picking a series back up after a pause: the home page with a bookmark
  is built for them (`docs/homepage.md`).
- A visitor with no bookmark, midway through or not started: the landing page
  lets them try the site before saving anything.
- A reader arriving on a series page from a search result with no bookmark: they
  get a one-time intro with the bookmark form in it (#864).

The site is in English and Italian. There is no user research and no analytics.
Do not invent personas, quotes or usage figures.

## Product Purpose

Zero Spoiler is a set of wikis, one per series. The reader sets a bookmark at
the last episode or chapter they reached, and every entry after it stays under
fog: its name, drawing and text are left out. No success metric is recorded. The
one stated bar: an entry that opens too early is a spoiler, the one bug the
project cannot ship (`README.md`).

## Positioning

The fog is applied on the server. An entry under fog is not blurred in the
browser; it is left out of the page the reader receives
(`docs/architecture.md#spoiler-contract`). Every entry has a line drawing made
for this project, and no official artwork is used.

## Operating Context

- **The bookmark.** One per series, counted by episode, season and episode, or
  chapter; Game of Thrones also counts by book. It is saved in a first-party
  cookie on the device. There are no accounts.
- **Where it is set.** The mark in the site bar of every series page opens the
  bookmark dialog. The landing page's dial saves a point. A shared link
  (`?ep=650`, `?ch=1044`) sets the bookmark too.
- **The trial.** From the landing page a visitor can follow an open card on a
  temporary point that ends with the browser session.
- **Show anyway.** A reader can lift the fog from one entry by hand.
- **Routes.** `/<locale>` is the hub and holds the legal page.
  `/<series>/<locale>/…` holds a series: home, characters, places and, where the
  series has them, devil fruits or Nen abilities, ranks and filler episodes.

## Capabilities and Constraints

- **Zero spoilers is the product** (owner, 2026-11-17): nothing past the
  reader's bookmark is shown, named or hinted, in text, drawings, counts or
  metadata. `docs/architecture.md#spoiler-contract` is the authority on what
  that means in the code; where this file and it differ, it wins.
  - _Never revealed (the contract, quoted):_ "Covered records contain only an
    opaque handle, kind and episode/chapter thresholds. Hidden ids, names,
    prose, links and drawings stay out of payloads, HTML, metadata and client
    chunks. A blurred real record is still a leak."
  - _What a page may say about covered entries (a reading of the contract and
    the code):_ that an entry of a kind exists, when it opens, and how many
    there are. A fog band's title counts the covered entries of its listing. The
    fruits page with no bookmark gives the number of fruits and a count for each
    kind. A series' card on the hub counts every entry the reader's medium
    tells, covered ones included. No count tells one covered entry from another.
  - _Counts the contract withholds:_ records only the other medium tells are
    absent, "including from counts and handles"; a group on the ranks page with
    every seat under fog is one line "with no count"; a covered user of an
    ability is dropped, "so no tile or page counts one".
- **Deliberate limits**, each ruled by the owner and written in the contract or
  the code. A pass treats them as intended, not as leaks.
  - _Filler_ (2026-10-10, `src/server/archive/filler.server.ts`). The filler
    page sends, whatever the bookmark, the runs to skip, the strip of every
    aired episode's kind, and the names of the sagas, canon and filler. They are
    "numbers and kinds only", and "the titles and plots under them still wait
    for the bookmark": the catalogue's rows are under fog past it. The home's
    filler warning (2026-10-12, `docs/homepage.md`) gives the same numbers and
    kinds for the reader's episode and the five after it.
  - _Saga names_ are not gated (2026-10-17, `src/data/types.ts`).
  - _Social pictures_ (`public/og/`) are static files anyone can fetch: a
    record's first drawing, its name and one line.
  - _Crawlers_ with no bookmark are given an end-of-anime bookmark.
  - _"The fog is an editorial promise, not access control"_: Show anyway and a
    shared link from someone further ahead can open an entry early.
- **Without a bookmark** no record is open. The landing page alone receives the
  series' opening stretch, as a demo.
- **Terms.** One word per concept: bookmark, under fog, open, entry, arc. The
  glossary is in the `tone-of-voice` skill. In One Piece an arc is one stretch
  of the story and a saga is a group of arcs; the English copy uses both, and
  the fruits, places and filler pages group by saga. Italian says "saga" for an
  arc. Game of Thrones has no arcs.
- **Styling.** StyleX only. Colours, type sizes, spacing and motion come from
  `src/styles/tokens.stylex.ts`.

## Brand Commitments

Owner decisions, 2026-11-17. They bind every later design pass.

- **The identity is fixed.** `DESIGN.md` holds it. Later passes refine
  hierarchy, spacing, states, motion, copy, responsive behaviour and
  accessibility. They add no font, colour or theme, and no light scheme.
- **Bold over restrained.** The owner prefers bold, dramatic, eye-catching UI
  with one central idea over restrained layouts.
- **Priorities for the refinement, in order.**
  1. The bookmark and progress: where the reader sets their episode or chapter,
     what changes when they move it, the onboarding and the bookmark dialog.
  2. Mobile.
  3. Fog and covered content: what is hidden and why, how much is left, and
     empty states.
- **Voice.** Neutral and dry, like good documentation. It says "you" ("tu" in
  Italian) in short declarative sentences. The site is not a character, and the
  fog is the one image in the copy (`.claude/skills/tone-of-voice/SKILL.md`).
- **Legal notices live on one page**, `/<locale>/legal`. The footer carries one
  line of notice and one link to it.

## Evidence on Hand

- The archive's counts: `docs/architecture.md#the-archive-in-numbers`. Quote
  that block and no other figure.
- A line drawing for every record: `src/data/series/<series>/art/`.
- Screenshots: `docs/media/`.

There are no testimonials, press, usage numbers or benchmarks. Do not fabricate
any.

## Product Principles

1. **A leak is the worst bug.** An uncertain threshold is rounded up, so an
   entry is more likely to open late than early.
2. **The bookmark is the one control.** Every page of a series reads it, and
   moving it changes what those pages show.
3. **Show, do not describe.** The landing page is the wiki in miniature.
4. **Say what is hidden without saying what it is.** A covered entry gives its
   threshold and nothing else.
5. **The text explains and gets out of the way.**

## Accessibility & Inclusion

No conformance level is declared. Review preserves keyboard interaction, focus,
covered-content semantics and theme contrast (`CODING_STANDARDS.md`). The
contrast floors a test enforces are in `DESIGN.md`.
