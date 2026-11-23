---
version: 1
slug: "src-routes-series-locale-characters-index-tsx"
primary_target: "src/routes/$series/$locale/characters/index.tsx"
related_targets: ["src/routes/$series/$locale/characters/$id.tsx","src/routes/$series/$locale/characters/-$id.chronicle.tsx","src/components/CharacterGrid.tsx","src/components/CharacterTile.tsx","src/components/CharacterCard.tsx","src/components/CharacterCrest.tsx","src/components/CharacterFacts.tsx","src/components/CharacterChronicle.tsx","src/components/ArchivePage.tsx"]
---

# Characters

**Mode:** Read.

**For:** finding a character the reader has met, and reading what the story
has told about them so far.

**Where:** `/<series>/<locale>/characters` (`CharacterGrid`, `CharacterShelves`,
`CharacterCard`, `CharacterTile`) and `/<series>/<locale>/characters/<id>`
(the dossier, `CharacterChronicle`, the relationships).

**Must not break:**

- Typing in the search filters the open characters only; covered cards and
  tiles do not move while a query has matches; with none, the groups fold
  away behind one line and a Clear search button (`CharacterGrid.tsx`,
  `CharacterShelves.tsx`).
- A covered shelf puts no arc id in the markup (`CharacterShelves.tsx`).
- The fog starts at the first shelf whose arc is covered or, where every
  heading is sent open (Game of Thrones' seasons), at the first shelf with
  nothing open. That shelf keeps its covered tiles; every later shelf with
  nothing open is its head alone: name, count and threshold. The search pins
  in the listing's `ControlBar`, and a query typed deep in the list scrolls
  back to the top of the results (#1379).
- With no story reached the chronicle draws nothing, not a heading over an
  empty list (`characters/-$id.chronicle.tsx`).
- Relationships show only when one is reached; otherwise the section is
  absent, also while it loads (`characters/$id.tsx`).
- A drawing and a name travel to a record's page only for an open record
  (`src/styles/morph.ts`).

**Open points:** none recorded.
