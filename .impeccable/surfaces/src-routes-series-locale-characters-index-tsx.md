---
version: 1
slug: "src-routes-series-locale-characters-index-tsx"
primary_target: "src/routes/$series/$locale/characters/index.tsx"
related_targets: ["src/routes/$series/$locale/characters/$id.tsx","src/components/CharacterGrid.tsx","src/components/CharacterTile.tsx","src/components/CharacterCard.tsx","src/components/CharacterCrest.tsx","src/components/CharacterFacts.tsx","src/components/CharacterChronicle.tsx","src/components/ArchivePage.tsx"]
---

# Characters

**Mode:** Read.

**For:** finding a character the reader has met, and reading what the story
has told about them so far.

**Where:** `/<series>/<locale>/characters`, a searchable catalogue, and
`/<series>/<locale>/characters/<id>`: the drawing in its round seal beside the
facts, then the chronicle, then the relationships reached.

**Holds today:**

- Search finds only open entries. The covered featured characters are a fog
  band under the featured grid, and covered tiles stay on their arc's shelf;
  neither moves when the reader types.
- A covered card keeps its episode legible; its seal, name and role are
  covered together. On a covered character's page the seal is drawn empty and
  the kind and threshold stay outside the veil.
- The chronicle lists the stories reached, latest first. With none reached it
  draws nothing, not a heading over an empty list.
- A character's drawing and name travel between the list and their page, for
  the one record the reader clicked. A featured character's shelf tile does
  not travel: its card higher up carries the names.
- Facts, stories and relationships are dated: the page shows what the
  bookmark has reached.
- Relationships show only when at least one is reached; otherwise the section
  is absent, also while it loads.
