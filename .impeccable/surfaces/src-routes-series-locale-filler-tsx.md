---
version: 1
slug: "src-routes-series-locale-filler-tsx"
primary_target: "src/routes/$series/$locale/filler.tsx"
related_targets: ["src/routes/$series/$locale/ranks.tsx","src/components/FillerGuide.tsx","src/components/FillerCountdown.tsx","src/components/FillerRanges.tsx","src/components/FillerStrip.tsx","src/components/FillerCatalogue.tsx","src/components/PowerBoard.tsx"]
---

# Filler and ranks

**Mode:** Read.

**For:** the filler page says how far the next filler episode is and which runs
to skip. The ranks page shows who holds each seat of the groups the reader has
met. Both are One Piece's only.

**Where:** `/<series>/<locale>/filler`, reached from the home's warning and by
its address, not from the bar; `/<series>/<locale>/ranks`, in the bar.

**Holds today:**

- The filler page leads with one sentence over six cells: the reader's episode
  and the five after it. Then the runs to skip by saga, a strip of the whole
  series, and the catalogue.
- Owner-ruled and not a leak (2026-10-10, `filler.server.ts`): the runs, the
  strip of every aired episode's kind and the names of the sagas are on the
  page at every bookmark. Only the catalogue's rows, with their titles, are
  under fog past the bookmark.
- The ranks page is a row of seats per group (`PowerBoard`). A seat is dashed
  and unlit while its holder is under fog, solid and empty when vacant, and in
  its holder's tint with their drawing once held.
- Its colour roles: names in Ink, seat titles in Muted uppercase, states in
  Ink 2 or Muted. The light under a seat is decorative and carries no text.
- Groups met with every seat under fog are one line at the end, with no name,
  count or place.
