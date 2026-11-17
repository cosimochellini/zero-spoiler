---
version: 1
slug: "src-routes-series-locale-places-index-tsx"
primary_target: "src/routes/$series/$locale/places/index.tsx"
related_targets: ["src/routes/$series/$locale/places/$id.tsx","src/components/SeaChart.tsx","src/components/SeaChartPeek.tsx","src/components/SeaChartStops.tsx","src/components/PlaceMap.tsx","src/components/PortPlate.tsx"]
---

# Places and the map

**Mode:** Read. The map leads the page.

**For:** seeing where the story has been, and opening a place the reader has
reached.

**Where:** `/<series>/<locale>/places` and `/<series>/<locale>/places/<id>`,
which also serves a ship's page. One Piece's places page opens with the world
map (`SeaChart*`) over an index; the other series have the index only.

**Must not break:**

- A region's name reaches a page no earlier than the map draws that region;
  one table decides both, and one stop can open several regions (owner, #674).
  A place lifted with Show anyway names its own region
  (`src/lib/view/chart.ts`).
- A stop under fog is labelled with a generic name and its threshold, and its
  peek is veiled (`SeaChartStops.tsx`, `SeaChartPeek.tsx`).
- The index names a saga only once the reader has a stop in it
  (`src/server/archive/places.server.ts`).

**Open points:** none recorded.
