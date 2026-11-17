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

- Search finds only open entries. The covered ones are a fog band at the foot,
  and the fog does not answer a search.
- A character's drawing and name travel between the list and their page, for
  the one record the reader clicked.
- Facts, stories and relationships are dated: the page shows what the
  bookmark has reached.
- Relationships show only when at least one is reached; otherwise the section
  is absent, also while it loads.
