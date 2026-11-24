---
version: 1
slug: "src-routes-series-locale-fruits-index-tsx"
primary_target: "src/routes/$series/$locale/fruits/index.tsx"
related_targets: ["src/routes/$series/$locale/fruits/$id.tsx","src/routes/$series/$locale/abilities/index.tsx","src/routes/$series/$locale/abilities/$id.tsx","src/components/FruitsAlbum.tsx","src/components/FruitTile.tsx","src/components/SagaMarquee.tsx","src/components/AlbumTile.tsx","src/components/AbilityAlbum.tsx"]
---

# Fruits and abilities

**Mode:** Read.

**For:** browsing the devil fruits (One Piece) or the Nen abilities (Hunter x
Hunter) the reader has reached, and reading one in full.

**Where:** `/<series>/<locale>/fruits` and `/fruits/<id>` (`SagaMarquee`,
`FruitsAlbum`, `AlbumGroups`, `AlbumTile`); `/<series>/<locale>/abilities` and
`/abilities/<id>` (`AbilityAlbum`).

**Must not break:**

- The view, the kind and the query live in the address (`fruits/index.tsx`).
- The search filters the open tiles only (`AlbumGroups.tsx`,
  `AbilityAlbum.tsx`).
- No saga past the bookmark is named or counted
  (`src/server/archive/fruits.server.ts`).
- A covered ability sits in no plate, so the page does not say its Nen type
  (`AbilityAlbum.tsx`).
- A fruit's eater has its own fog: knowing the fruit is not knowing who ate it
  (`fruits/$id.tsx`).
- Below 40rem each group's fog tiles fold to their first row; the fold hides
  tiles already on the page and says only how many (`FoldedFog.tsx`). Back and
  Forward bring each fold back as it was left (`foldMemory.ts`), so the page
  keeps its height and Back lands on the same tile.

**Open points:** none recorded.
