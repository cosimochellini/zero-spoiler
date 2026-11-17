---
version: 1
slug: "src-routes-series-locale-fruits-index-tsx"
primary_target: "src/routes/$series/$locale/fruits/index.tsx"
related_targets: ["src/routes/$series/$locale/fruits/$id.tsx","src/routes/$series/$locale/abilities/index.tsx","src/routes/$series/$locale/abilities/$id.tsx","src/components/FruitWall.tsx","src/components/FruitTile.tsx","src/components/SagaMarquee.tsx","src/components/AlbumTile.tsx","src/components/AbilityAlbum.tsx"]
---

# Fruits and abilities

**Mode:** Read.

**For:** browsing the devil fruits (One Piece) or the Nen abilities (Hunter x
Hunter) the reader has reached, and reading one in full.

**Where:** `/<series>/<locale>/fruits` and `/fruits/<id>`;
`/<series>/<locale>/abilities` and `/abilities/<id>`.

**Holds today:**

- The fruits page leads with the saga the reader is in: its name, a rail of
  its fruits so far and the latest one large. Under it an album with a pinned
  control bar: search, a view switch and kind chips, all kept in the address.
- The abilities page is an album with a plate per Nen type. Covered abilities
  are one fog band, so no plate gives a covered ability's type.
- A record's page is a stage: the drawing large in a soft light of its tint,
  then its history and who uses it. A covered user is left out, not counted.
- Covered fruits are fog tiles or one fog band, depending on the view. With no
  bookmark the page is one bank of fog with the count of fruits, the question
  and the control that sets a bookmark.
