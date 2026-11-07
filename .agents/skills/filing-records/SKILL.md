---
name: filing-records
description: Checklist for filing a record set, an arc's new characters and places, with the hidden tests, scripts and docs each addition touches. Load it before you file records, add dated steps to returning characters, or review such a pull request.
---

# Filing records

A record set is one arc's new characters and places, plus the dated steps it adds to characters filed earlier. Its models are PRs #829, #839, #926 and #943. The paths are Hunter x Hunter's; `<hxh>` is `src/data/series/hunter-x-hunter`. Drawings follow the `line-drawings` skill and prose the `tone-of-voice` skill. Chronicles and relationships are authored in issues of their own, but every new character still enters the relationship registry here (step 6).

Every record has a **gate**: the episode and chapter at which it opens.

## 1. Records and dossiers

- File the records in the arc's module, `<hxh>/records/<arc>.ts`: `entries` for the records, `dossiers` for the characters' facts. A new module loads only once `<hxh>/sagas.ts` lists it, as an arc of its own or merged into its arc's entry, as `zoldyck` is into the Hunter Exam.
- A returning character gets new dated steps in the dossier that already holds him, in the module that first filed him. The test `files each dossier once, and only for a character` in `src/data/archive.test.ts` fails on a second dossier.
- Export the arc's places from the same module as `<ARC>_PLACES` and spread them in `<hxh>/places.ts`, as `trick-tower.ts` and `heavens-arena.ts` do. Prose under `records/` is in the archive gate's prose check; a place file anywhere else needs its own line in `EXTRA` in `scripts/archive-gate.mjs`.
- A new place type goes in the `form` union in `<hxh>/records/saga.ts` and in `forms` in `<hxh>/placeWords.ts`, with both labels.
- Every record gets its own drawing, keyed by its id, in `<hxh>/art/<arc>.ts` and spread in `<hxh>/art/index.ts`. The test `gives every record the drawing made for it` in `src/data/series/index.test.ts` holds `visual.art === id`.

Done when every new character has an entry and a dossier, every place an entry and a place dossier, every record a drawing, and `./node_modules/.bin/vitest run src/data` passes.

## 2. Gates

These are the owner's rulings, so Claude and Codex file the same record at the same gate.

A phase issue gives a work window of chapters and an inventory of candidates. Every candidate ends in the phase's **inventory**, `docs/content-provenance/<series>-<arc>-phase-N.md` (`hunter-x-hunter-chimera-ant-phase-3.md` is the model), as filed with its gates, pending with its naming scene, or omitted with its reason.

A record's gate in each medium is the first chapter or episode whose English-wiki synopsis gives an **explicit naming signal**: an introduction, "named", the name in someone's quoted or reported speech or printed thought, or a caption. An episode title card counts as a caption. Narration alone never counts; that medium waits for its next explicit naming signal. Cite the chapter and the episode. The PR lists the lower narration-only points as owner checks.

### Candidates

- Wiki first appearances and cast lists only name candidates. An unnamed appearance is a floor, never a gate.
- A candidate from an earlier phase whose name is first said inside the window is filed in this phase.
- Characters only mentioned and never seen are omitted, with the reason in the inventory. So are wiki descriptors, collectives and species labels.
- A place is filed only when the story visits it; regions and countries only mentioned are omitted. Its gate is the first explicit naming signal in the window, even before the visit (Mandai City, named as the rendezvous at chapter 243 / episode 102, visited at 256 / 108). A place named in an earlier arc opens at its first visit (Meteor City, named at 102 / 24, opens at 224 / 96).
- Pending means the name is first said after the window, and the inventory cites that scene. A candidate left unchecked is not pending. (This is not the relationship registry's `pending` of §6.)

### Names in two media

- A name only one medium gives makes a source-only record: `source: 'chapter'` or `'episode'` (`Source` in `src/lib/progress/spoiler.ts`). Its other number only orders it.
- A character renamed after the window is filed under the name and id they have inside it. The id is in the URL, so it never carries the later name.
- A record the anime introduces under another name, never saying the manga's, stays one record filed under the manga's name: `episodeName: { name, chapter }`, with the chapter where the manga says the anime's name too (Hagya, introduced in the episodes as Leol, a name the manga gives him at chapter 240). `Entity` in `src/data/types.ts` documents it.
- A record whose two gates are too far out of step to say how far a chapter reaches into the anime gets `unanchored: true`. That is a pair whose episode adapts a chapter far from the record's own: Komugi, episode 103 / chapter 257, where episode 103 adapts chapter 244; Hagya, 106 / 192, where episode 106 adapts chapters 251–252. A timeline takes one entry per episode, so when one episode tells what the manga splits across chapters (episode 101 tells Ikalgo's chapters 238 and 241), each medium gets its own dated entry in the dossier, with its `source`. Neither a `source` entry nor an `unanchored` record vouches for a pair in the chapter table (`vouches` in `src/data/chapterTable.ts`).
- A record whose name is an ordinary word gets `commonWord: true`; one whose name is said before its record opens gets `nameSaidAt`. Records that share a name, such as a place named like its arc, share both facts. A fact no text needs fails too. Both rules are tests in `src/data/leaks.test.ts`: `give records that share a name the same name facts` and `need every name fact for some text to pass`.

### Facts

- Write the summary, role, log and first facts for the gate: what a reader knows there. Anything later is a dated step. Facts whose manga chapter is past the window wait for the next phase.
- A status timeline opens at the record's gate. Every later change is its own entry with its `chapter:` pinned (`pins every change of status to the chapter that tells it` in `src/data/archive.test.ts`).
- A role the story changes (an applicant who becomes a Hunter) is filed as dated steps instead of one text: `role: [{ episode, chapter, value }, …]`, the first step at the record's gate, every later one with its `chapter:` pinned (`opens a dated role on its record and pins every change to a chapter`). `passedExam` in `<hxh>/records/saga.ts` builds an exam passer's two steps.

Done when every gate cites its explicit naming signal in each medium, every candidate is in the inventory, and `src/data/leaks.test.ts` and `src/data/archive.test.ts` pass.

## 3. Hidden tests

- `src/test/fog.test.ts`, `the place words of a series that labels its own`:
  - the `Terraferma` row lists every mainland place by id; add each new one;
  - add an English and an Italian row for each new form label, as `its tower label` does.
- `src/test/series.ts`: raise each `least` floor of `'hunter-x-hunter'` to the new count and update the dated comment above it. `files at least what the series is known to file` in `src/data/archive.test.ts` fails a floor above its count or below nine tenths of it, and prints every count to copy in.
- `scripts/archive-gate.test.mjs`, `reads the shipped dictionaries, keeping only the words they do not hold`: the exact list of HxH place-word canaries. A new region or form id or label goes in, in table order, when it holds a space or a hyphen or has 8+ characters (`DISTINCT_WORD` in `scripts/archive-gate.mjs`) and no shipped dictionary contains it.

Done when `./node_modules/.bin/vitest run src/test scripts/archive-gate.test.mjs` passes.

## 4. Name scripts

Both scripts read the wikis over the network and are not part of `npm run check`.

- `scripts/verify-names.mjs` (its tables in `scripts/verify-names.tables.mjs`): add each new character to `ITALIAN_TITLES`, as `Page#Section` for a section of an Italian Wikipedia list page. A name kept after a hand check found no page goes in `NAMES_KEPT`.
- `scripts/verify-chapters.mjs`: add to `TITLES` only a record whose English name is not its wiki page title.

Done when `npm run verify:chapters -- --series hunter-x-hunter` reports nothing too low and nothing unresolved, and `npm run verify:names -- --series hunter-x-hunter` passes every new name. Failures already on main are named as such in the PR.

## 5. Archive

In `<hxh>/archive.ts`:

- `leads['<arc>-arc']`: the arc's cast row.
- The `sweepOf` lists: both sides, gate−1 and gate, of every new gate and dated step, in the episode list and in the chapter list. The payload sweep asks every page at these bookmarks.

The home page ranks the arc's leads by chronicle mentions and falls back to `newcomersOf` in `src/server/archive/home.server.ts`, the leads first shelved in this arc. Returning leads show there only once the arc's chronicles exist; state that in the PR.

Done when the leads list and both sides of every new gate are in the file.

## 6. Provenance

Add one key per new record to `docs/content-provenance/hunter-x-hunter.json`: `sources` for the pages read, `unverified` for every page, timestamp or Italian dub form not viewed. A record already there with `pending: true` (researched but unfiled) loses the flag when it is filed. A returning character's key gains the pages of each new step.

Add every new character to `docs/content-provenance/hunter-x-hunter-relationships.json` under `pending`, keyed to the issue that will author its relationships (`"zushi": "#947"`), or under `omitted` with a reason when it has none to author. `CONTRIBUTING.md`, "Recording provenance", has the rules.

Done when `src/data/provenance.test.ts` and `src/server/archive/hunterRelationships.test.ts` pass and every new character is in both files.

## 7. The arc's server test

Write `src/server/archive/<arc>.test.ts` on the model of `heavensArena.test.ts` and `zoldyck.test.ts` in the same folder:

- each record closed, with no drawing, at gate−1 and open at the gate, for both units and both locales;
- each dated step, status, affiliation or role, before and at its pin;
- the arc's leads.

Done when the test passes, and moving one gate or pin down by one makes it fail.

## 8. Docs

- `npm run docs:counts` rewrites the counts block of `docs/architecture.md`; `gate:docs` fails without it.
- Update the Hunter x Hunter coverage paragraph under `## Series and routing` in `docs/architecture.md`.
- Update the rounded line in `README.md` ("Hunter x Hunter currently covers …").

Done when `npm run check` passes.

**Loaded machine** (other sessions keep the load average above the core count and the full check times out on unrelated tests): a pure content PR, touching no shared code, may run `npm run check:content` instead. It skips the build, coverage, the archive, react-doctor and fallow gates and the route and component tests outside its selection; the ready PR's CI `validation` run is the full gate.

## 9. Probe a built page

Run `npm run build && npm start` and take the port it prints. A `?ep=N` or `?ch=N` link answers 302 and sets the bookmark cookie (`src/lib/progress/linkBookmark.ts`), so follow it with a cookie jar and quote the URL:

```sh
curl -sL -c jar.txt -b jar.txt "http://localhost:$PORT/hunter-x-hunter/en/characters/zushi?ep=26"
```

Done when each new record is closed at gate−1 and open at the gate, in both units, and the PR's Evidence lists the pages probed.

## 10. Review

A reviewer of a record set checks:

- every new gate cites an explicit naming signal in each medium, and the PR lists each lower narration-only point as an owner check;
- `source`, `episodeName` and `unanchored` follow §2;
- every inventory candidate is filed, pending with its naming scene, or omitted with its reason;
- the "Done when" of §1–§9 holds.

Done when every finding names the rule it breaks.
