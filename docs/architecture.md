# Architecture

Zero Spoiler is a React / TanStack Start app with StyleX, built by Vite for
Cloudflare Workers. The old Netlify address only redirects to the new domain
(`netlify.toml`). Versions and commands live in `package.json`.

The Worker runs on Workers Free, where Cloudflare kills a request over 10 ms of
CPU. `.github/workflows/worker-cpu.yml` opens an issue on any day it does
(#775).

## Code map

| Path                                     | Responsibility                                                                       |
| ---------------------------------------- | ------------------------------------------------------------------------------------ |
| `src/data/`                              | Server-only archive types, reveal rules, ordering and dated facts.                   |
| `src/data/series/index.ts`               | Registry and lazy archive loading; the only boundary that imports individual series. |
| `src/data/series/<series>/`              | Each series' records, dossiers, drawings and editorial rules.                        |
| `src/server/api.ts`                      | Request-facing server functions.                                                     |
| `src/server/archive/`                    | Filter and project archives into reader payloads.                                    |
| `src/lib/progress/`                      | Public series metadata, bookmark validation and conversions.                         |
| `src/lib/view/`                          | Client-safe payload types and view helpers.                                          |
| `src/routes/`, `src/components/`         | File routes and React UI.                                                            |
| `src/i18n/`, `src/server/copy.server.ts` | Shared translations and server-loaded series copy.                                   |
| `src/styles/`                            | StyleX tokens, series themes and global CSS.                                         |
| `scripts/`                               | Verification, generated documentation and quality gates.                             |

## Spoiler contract

Requests read the selected series' bookmark cookie, load its archive, then use
`readerFor` (`src/server/archive/reader.server.ts`) to keep the archive,
bookmark, source and locale together. `reveal` and dated-field gates decide what
opens. The server returns localized text and drawing strokes only after their
gates.

- Covered records contain only an opaque handle, kind and episode/chapter
  thresholds. Hidden ids, names, prose, links and drawings stay out of payloads,
  HTML, metadata and client chunks. A blurred real record is still a leak.
- Handles belong to a series and its source-filtered archive. Preserve deployed
  One Piece ordinals; other series use their own prefixes.
- Episode and season bookmarks read anime thresholds; chapter bookmarks read
  manga thresholds. Records exclusive to the other source are absent, including
  from counts and handles. Facts exclusive to it stay closed
  (`src/data/source.ts`).
- Without a bookmark, `reveal` opens no records. Onboarding alone receives the
  series' bounded demo, with every record and dated fact inside both limits.
  Trial cookies are restricted to that demo and yield to a saved bookmark.
- Drawings, search aliases, relationships, place labels and source credits use
  the same gates as prose. Later information belongs in dated entries.
- A record's social pictures (`public/og/`, [Social pictures](#social-pictures))
  are the one exception: static files at addresses built from its slug, so
  anyone who asks for one gets it. The sitemap lists the square of every record
  both sources tell; a record of one source only is not listed. They hold the
  first drawing and the line every source's reader has at the record's own
  threshold. The name is the one its first source's reader is given (the anime's
  for a record both tell, which is what a crawler's title prints), so a chapter
  reader may meet an anime name early: Hagya's card says Leol. No page under fog
  names them. The fog is an editorial promise kept by the pages, not access
  control (`src/lib/crawler.ts`).
- Personalized HTML and archive responses stay out of shared caches. Deferred
  drawings and lists are filtered server-side too; results belong to the
  bookmark they were fetched for.

## Relationship selections

`CharacterDossier.relationships` uses complete dated snapshots of at most five
people in editorial order. The server chooses the latest reached snapshot in the
reader’s source/unit and carries it forward without saga-based resets. Only its
selected people are projected; each retains their earlier reached history,
deduplicating unchanged consecutive wording. Removed people and future
selections contribute no cards, counts or placeholders. A later re-selection
restores the pair’s reached history. Both endpoints and each snapshot are gated
before names or text reach the client; perspectives remain directed.

Character pages in every series show reached relationships or omit the section
entirely, including while it loads. The cohort inventories account for every One
Piece and every archived Hunter x Hunter character through authored selections
or documented deliberate omissions; Hunter x Hunter characters filed later wait
under `pending` with the issue that will author them
(`docs/content-provenance/hunter-x-hunter-relationships.json`). No relationships
are inferred. Character archive-order navigation and nearby recommendations have
been retired, and so has the place page's previous and next stop; a place's map
names the reached stops around it instead. The fruit rails remain.

The authoring contract and provenance requirements are in
[Contributing](../CONTRIBUTING.md#authoring-relationship-selections). Selection
and wording share the existing timeline; no separate client selection API
exists.

## Security

SSR security headers, including the per-request nonce CSP, are set in
`src/security-headers.ts`; static asset headers cannot protect SSR documents.
Server functions use the CSRF middleware in `src/start.ts` and read progress
from request cookies, never a client-supplied bookmark.

Fog prevents accidental spoilers, not deliberate access: “Show anyway” reveals a
record by handle. Recognized crawlers without a valid saved/trial bookmark
receive an end-of-anime bookmark; source filtering still applies. See
`src/lib/progress/requestBookmark.ts`.

## Series and routing

All three series are open to readers. Hunter x Hunter files the verified Hunter
Exam coverage through episode 26 / chapter 43, including the manga's chapter-one
characters introduced later by the anime, the Heavens Arena characters and place
up to episode 34 / chapter 59 (#896), and Yorknew City through episode 58 /
chapter 119 (#900): the Nostrade household and bodyguards, the twelve Phantom
Troupe members, five Shadow Beasts, Zepile, Zenji and five places. Greed Island
recruitment (#1016) and arrival/training through chapter 141 (#1017) add
verified named characters and visited places, with source-only records where the
naming evidence reaches only one medium. Alliances and the Bomber revelations
through chapter 159 (#1018) add source-verified names and visited places; the
finale and the full candidate audit (#1019) close the arc. Of the 31 candidates
the audit left unnamed, #1032 files Michael, named at the intercom in chapter
148 (manga-only), and records an owner-ruled exclusion with the missing evidence
for the other 30. Greed Island chronicles cover every character filed through
#1019 and returning characters’ events through episode 75 / chapter 185 (#906),
preserving the records’ source restrictions. Chimera Ant phase 1 (#1020) adds
the opening survey team records, a Royal Guard and NGL. Phase 2 (#1021), through
episode 95 / chapter 222, adds the extermination team and its students, the rest
of the survey team, the NGL villagers, the King, the other Royal Guards and the
Squadron Leaders named so far, and eight visited places, each at the first
chapter and episode whose synopsis names it, with source-only records where only
one medium does. Phase 3 (#1022), through episode 109 / chapter 260, adds the
Squadron Leaders, captains and soldiers named on the road to the palace (Ikalgo,
Meleoron, Welfin, Bloster, Flutter, Remora, Pell, Bihorn), Komugi, Bizeff and
Tsukuma, and four visited places, Meteor City at the Troupe's visit in chapter
224 / episode 96 rather than at its earlier mentions. Hagya keeps one record:
the anime, which never says his manga name, opens it as Leol at episode 106
(`Entity.episodeName`), and the manga gives the name in his role at chapter 240.
Phase 4 (#1023) covers the palace assault through chapter 298, adds Taragetter
in the manga, and opens Peijin in the anime at episode 116. Phase 5 (#1024)
files the finale through chapter 318 and episode 136, with the full cast
reconciliation in the phase 5 inventory. Chimera Ant chronicles (#910) cover all
46 newly filed characters and 17 returning characters through episode 136 /
chapter 318, with 255 bilingual timeline entries and source-specific versions.
Election (#912) files named characters and visited places through chapter 339
and episode 148, drawn in #913 with five stages (three deaths, two ability
reveals). Election chronicles (#914) add 91 bilingual stories for all 28 new
characters and 15 returning characters, with separate source restrictions for
anime-only records and scenes, and a manga-only item trade. Kakin (#916) is
manga-only and files in five phases; phase 1 (#1134) covers chapters 340–357 and
phase 2 (#1135) chapters 358–370 and phase 3 (#1136) chapters 371–383, phase 4
(#1137) chapters 384–400 and phase 5 (#1138) chapters 401–420, the last
published. Phases 1 and 2 are drawn in #1154, with 22 manga-only stages through
chapter 370 (eleven princes' Guardian Spirit Beasts, four deaths, four returning
records' reveals, Hisoka's return, and Chrollo's disguise and its end); phases 3
and 4 are drawn in #1156, with 14 more stages through chapter 400 (eight
abilities first shown, five deaths or presumed deaths, Kacho's with her beast
taking her form, and Salé-salé's lost beast); phase 5 is drawn in #1158, with 9
more stages through chapter 420 (four reveals of identity or allegiance, two
abilities first shown, and three deaths). Kakin chronicles for chapters 340–370
(#1155) add 99 manga-only stories for the 45 characters filed there and 20
returning characters; all sit at episode 148, so the home ledger and the
uniqueness test key a story by its chapter as well. Chapters 371–400 (#1157) add
120 more for the 40 characters filed there and 44 returning ones, and chapters
401–420 (#1159) 84 for the 22 filed there and 37 returning ones. Candidates
whose naming stays unverified are deferred to #1141–#1145. Gyro is unanchored at
78 / 203. Silva, Killua's father, is named in episode 24 but in chapter 95 in
the manga, so his record is unanchored at 24 / 95 (#834), as is Chrollo, shown
from chapter 71 but named in the episodes only from 53 and filed at 54 / 71
(#900); Kikyo is named only in credits and supplements, and Hishita only in
chapter 329 (#912). Every Hunter Exam character has a chronicle (#762); the
Heavens Arena characters get theirs in #898. Records are not added from unnamed
appearances or supplemental names.

A Hunter x Hunter character's Nen type is a dated field of its own (`nen`,
`Series.features.nen`, #922), shown as a row of the character's facts in the
series' words. It opens only for a character the story has shown using Nen, as
"not yet known", and every entry is pinned to its true chapter, the first one
included, because it does not open at the record's gate. The Heavens Arena cast
is filed: Water Divination and Wing's lesson tell Gon's, Killua's, Zushi's,
Wing's, Hisoka's, Gido's and Kastro's types at chapter 60 / episode 35; Sadaso
and Riehlvelt stay "not yet known". Later arcs' types are filed with their arcs.

Hunter x Hunter files the named personal Nen abilities shown in Heavens Arena
and Yorknew City at their own gates (#924).

A Nen ability is a record kind of its own (`ability`, #923), Hunter x Hunter's
answer to the devil fruits. It opens at its own threshold, where the story first
shows it, and keeps the Nen type the story has told by then
(`Features.abilities`, `abilityNenOf`); a type told later is not filed, and an
ability with none has no type row. Its users are read off the characters' dated
`ability` entries, like a fruit's eaters: each opens at the later of its entry
and the character, and a covered user is dropped rather than slotted, so no tile
or page counts one. Every entry is pinned to a chapter and opens no earlier than
its ability (`src/data/abilities.test.ts`), and a character's page links only
the abilities the reader has reached. The abilities page has a plate per Nen
type of the open abilities, a plate of the open ones with no type told, and one
fog band for every covered ability, so a band never says a covered ability's
type; an ability's own page is its stage and its reached users.
`hasPage(series, 'abilities')` follows `kinds.includes('ability')`, and Hunter x
Hunter declares the kind for its Heavens Arena and Yorknew City abilities
(#924). The synthetic records in `src/test/abilities.ts` also exercise the
ability pages and their user gates.

Game of Thrones is open to readers (#856), filed in #849: its description (the
show's seasons, the five books, the season 1 / first-book demo), its copy, its
red theme and its hub crown (#850). It files no arcs: each season module is
headed by its own `heading`, and a season with no record is left out of the
engine's sagas until its records land. Season 1 files the main cast of the
season and of _A Game of Thrones_ (#852): 63 characters, the six direwolves
among them, each gated where it appears and is named in each medium, with every
dated step pinned to both an episode and an absolute chapter; Ros, whom only the
show has, is `source: 'episode'`. #1006 adds the 60 recurring characters of
Winterfell, King's Landing, the Vale and the Riverlands, bit parts left out:
those only one medium names in the stage are `source`-only, and those the other
medium meets in a later season or book keep that later gate. #1007 adds 16 of
the Night's Watch and #1008 nine of Daenerys's storyline, by the same rules. The
series opened before its drawings: Eddard, Jon, Daenerys and Tyrion have their
own, Eddard's with a death stage, the Winterfell household's are in
`art/winterfell.ts` (#854), with four stages, the southern cast's are in
`art/south.ts` (#1051), with three, and the Night's Watch's and Essos cast's are
in `art/wall.ts` and `art/essos.ts` (#1052), with six, and the King's Landing
cast's are in `art/court.ts` (#1056), with one. Every other record maps to a
shared placeholder in `art/index.ts`, `PERSON` for a character and `PLACE` for a
place, until its own issue draws it, so the drawing tests hold it like any
series. Its 23 places (#853) are the ones a scene of the season or the book is
set in, each filed in one of the realms, beyond the Wall or Essos, with no arc:
`PlaceDossier.arc` is optional, and an arcless series prints no arc row. Darry
is the book's alone and the Kingswood the show's. The demo shows the places the
first ten episodes reach, and covers in its tail the four the show first visits
in later seasons.

Public metadata in `src/lib/progress/series.ts` holds cookies, ranges, seasons,
demo bounds, features and themes, without archive records. Pass the series to
bookmark conversions; shared code must not assume One Piece.

The registry separates all filed series (`SERIES` / `filedArchiveOf`, for tests,
gates and scripts) from reader-accessible ones (`OPEN_SERIES` / `archiveOf`). A
filed but closed series is announced by name, serves no archive and has no
sitemap entries. Shared engine and server modules use the registry rather than
importing a series directly. Optional slices are declared through features;
`hasPage` governs page availability, navigation and sitemap membership.

Content routes are `/<series>/<locale>/…`; `/<locale>` is the hub and hosts
legal/privacy pages. Unknown series and locales return 404. Legacy locale-first
content routes redirect under `/one-piece` before bookmark parameters are read.
`src/start.ts` handles shared-link bookmarks, legacy cookie migration and the
`/` redirect (cookie, then country, then `Accept-Language`) before loaders. Use
a content URL such as `/one-piece/en?ep=650` to set progress. `src/server.ts` is
the Worker entry: it adds a `Link` header for the stylesheet and the fonts the
root route preloads, which Cloudflare replays as a `103 Early Hints`.

## Social pictures

An open record page's head points `og:image` at a wide card
(`/og/<series>/<locale>/<id>.png`, 1200×630: drawing, name, one line, site
name). Its JSON-LD and its sitemap entry point at a square icon
(`/og/<series>/<id>.png`, 600×600). A covered page and every other page keep
`/og-card.png`. `npm run og:images` draws both pictures in Chrome, on the
developer's machine. They are committed under `public/og/` and served as static
assets, so the Worker never draws one. Each picture uses the record's first
drawing, never a redrawing, and prints only what a reader standing at the
record's own threshold reads in every source it is told in: a character's
epithet, else its role; a fruit's type; an ability's Nen type, else its kind; a
place's form and region; a ship's kind. The name is the one its first source's
reader is given: the episode reader's for a record both sources tell, which is
what a crawler's page title prints (a link preview is fetched as a crawler), and
the chapter reader's for a record only the manga tells. Re-run the script after
changing a record, a first drawing or the card layout. It draws only what
changed. `scripts/og-images.test.mjs` fails while a picture is missing, stale or
orphaned.

## Localization

Use `useT()` for shared dictionary keys and `useSeriesT()` for common series
keys. Feature-specific keys use `useSeriesT('<series>')`, guarded against
`undefined`, or `useSeriesOnlyT('<series>')` in components exclusive to that
series. Shared dictionaries contain no series-specific prose. Series
dictionaries stay server-side and reach only the relevant pages; Italian keys
are typed against English. A series' copy goes to every page at every bookmark,
so gated names do not belong in it: One Piece's faction labels live in
`src/i18n/dictionaries/one-piece/factions.ts` and reach a page only with the
fruit album group an open eater stands in, or, once a body of power is met and
one of its seats is held or vacant, as that body's name on the ranks page and on
the seat links of a character who holds one of its seats (`seatsHeldBy`); its
seas' names live in `src/i18n/dictionaries/one-piece/seas.ts` and reach the
places page only for the regions its open stops open on the chart (`regionsFor`,
`src/lib/view/chart.ts`), and a place's page or peek for its own sea. The shared
dictionary is one chunk per locale: the locale routes await `loadDictionary` in
`beforeLoad` and the router awaits it before hydrating, so a page downloads its
own language only. A chunk that fails to load reloads the page once per tab and
address (a `sessionStorage` flag; without storage, no reload). If it fails
again, a page that is hydrating deliberately stays as the server rendered it,
while a client-side navigation shows the route error. The privacy notice
(`src/i18n/dictionaries/privacy.ts`) ships with the legal page alone. Copy rules
live in the [tone-of-voice skill](../.claude/skills/tone-of-voice/SKILL.md).

## Extending the archive boundary

- Register new server functions in `PAYLOADS` in
  `src/server/archive/payloads.server.ts`, including ids/handles they accept.
  For `plain()` responses, extend the JSON round-trip checks there too. New
  payload names go at the end of its `order`, after the deployed ones, so One
  Piece's sweep and dump stay byte for byte: `loadAbilities`, `loadAbility` and
  `liftAbility` (#923) are the last.
- Register new prose outside a series' `records/` in its `EXTRA.prose` entry in
  `scripts/archive-gate.mjs` and in `textsOf` in `src/data/leaks.test.ts`, using
  the page's actual gate.
- The ranks page (`/{series}/{locale}/ranks`, `/power` until #1194, which
  `movedPageRedirect` in `src/lib/legacyRedirect.ts` answers with a 301 that
  keeps the query) draws the bodies of power. They live one per module in
  `src/data/series/<folder>/power/`. Seat titles are a word or two, so
  `scripts/archive-gate.power.mjs` looks for each module by its longest
  hyphenated holder id of 9 or more characters, or, when it seats none, by its
  longest English seat title of 12 or more; a module with neither is refused.
  `descriptionCanaries` adds a second canary per module, its longest quoted
  sentence of 60 or more characters, so every body needs a description of that
  length; `power/` is therefore left out of the prose-module test in
  `archive-gate.test.mjs`, which asks every other prose module to be an extra.
  `leaks.test.ts` scans each title as kind `seat` at the later of its body's
  gate and its seat's `told`, and each version of a body's `description` (one to
  three, a turning point each, shown under the body's name) as kind `about` at
  the later of the body's gate and its own; the page sends the latest one the
  bookmark reaches, in its medium, and no version names a record at all. A
  character's page lists the seats they hold now (`seatsHeldBy` in
  `src/server/archive/power.server.ts`), read through the same `holderOf` as the
  ranks page, less a body that has ended; each links to its body's section
  (`powerAnchor`, `#ranks-{body}`). The page lists a body only once a seat of it
  is held or vacant at the bookmark; a body met with every seat under fog sends
  nothing, and `fogged: true` alone puts one line at the end of the page, with
  no count and no place in the order. `powerSweep.test.ts` runs the leak sweep
  over both, and holds the two equal, at both sides of every dated change of
  every body.
- New series need a registry entry and coverage floors/text kinds in
  `src/test/series.ts`. Follow an existing series for archive and copy wiring.
- Client code consumes `src/lib/view` types, never archive modules. ESLint,
  payload sweeps and `gate:archive` protect this boundary; keep all three.

For verification commands and delivery rules, use
[CONTRIBUTING.md](../CONTRIBUTING.md#checks).

## The archive in numbers

Regenerate with `npm run docs:counts` after changing archive counts. `gate:docs`
checks this block.

<!-- Generated by `npm run docs:counts` from the archive. Do not edit by hand. -->

### `one-piece`

| Thing               | Count                                                   |
| ------------------- | ------------------------------------------------------- |
| Records             | 742                                                     |
| Characters          | 539                                                     |
| Devil fruits        | 128                                                     |
| Bodies of power     | 15, with 119 seats                                      |
| Arcs, places, ships | 34 · 39 · 2                                             |
| Saga modules        | 12, plus one for the devil fruits                       |
| Line drawings       | 742, one per record, plus 346 redrawings of 192 records |
| Chronicle stories   | 792, for 189 characters                                 |

### `hunter-x-hunter`

| Thing             | Count                                                 |
| ----------------- | ----------------------------------------------------- |
| Records           | 368                                                   |
| Characters        | 290                                                   |
| Nen abilities     | 28                                                    |
| Arcs, places      | 7 · 43                                                |
| Saga modules      | 7                                                     |
| Line drawings     | 368, one per record, plus 94 redrawings of 81 records |
| Chronicle stories | 1001, for 289 characters                              |

### `game-of-thrones`

| Thing             | Count                                                 |
| ----------------- | ----------------------------------------------------- |
| Records           | 171                                                   |
| Characters        | 148                                                   |
| Places            | 23                                                    |
| Saga modules      | 1                                                     |
| Line drawings     | 171, one per record, plus 15 redrawings of 14 records |
| Chronicle stories | 0, for 0 characters                                   |

<!-- End of the generated counts. -->
