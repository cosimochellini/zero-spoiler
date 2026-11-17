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
map (`SeaChart*`) over an index of plates; the other series have the index
only.

**Holds today:**

- The map fills in as the reader goes: reached islands are drawn in their
  saga's tint and named, and a sea is drawn and named only once the reader has
  a stop in it.
- The accent draws the route travelled, the ship, the reader's stop and the
  compass's north.
  Past the ship the route goes on dashed into fog, one unnamed dot per stop.
- The map is drawn upright on a phone, where it does not move, and across on a
  wider window, where it zooms and pans.
- Every stop and ship opens a peek: a popover, or a bottom sheet below 40rem.
  A peek has no disabled control; a stop under fog shows a veil in it.
