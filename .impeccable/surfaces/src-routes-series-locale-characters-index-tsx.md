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
- The first shelf with nothing open keeps its covered tiles; every shelf with
  nothing open after it is its head alone: name, count and threshold. The
  search pins in the listing's `ControlBar` (#1379).
- With no story reached the chronicle draws nothing, not a heading over an
  empty list (`characters/-$id.chronicle.tsx`).
- Relationships show only when one is reached; otherwise the section is
  absent, also while it loads (`characters/$id.tsx`).
- A drawing and a name travel to a record's page only for an open record
  (`src/styles/morph.ts`).

**Open points:** none recorded.
