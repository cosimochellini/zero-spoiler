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

**Where:** `/<series>/<locale>/filler`, reached from the home's warning, the
home's welcome block and its address, not from the bar; `/<series>/<locale>/ranks`, in the bar.

**Holds today:**

- With an episode or season bookmark the filler page leads with one sentence
  over six cells: the reader's episode and the five after it. A chapter reader
  and a visitor with no bookmark get no countdown. Then the runs to skip, a
  strip of the whole series and the catalogue, the last two grouped by canon
  arc.
- A cell of pure filler is filled with the accent, a recap with Ink 2, a mixed
  episode half with the accent; a canon one is not filled.
- Owner-ruled and not a leak (2026-10-10, confirmed 2026-11-17): at every
  bookmark the page shows the runs, the strip, the names of the canon arcs
  that hold a filler entry and of every filler arc, a count per group that
  includes covered rows, and each row's number, kind and thresholds. Titles,
  summaries and release data are under fog past the bookmark. `PRODUCT.md`
  has the ruling; it opens arc names on this page only.
- The ranks page is a row of seats per group (`PowerBoard`). A seat is dashed
  and unlit while its holder is under fog, solid and empty when vacant, and in
  its holder's tint with their drawing once held.
- Its colour roles: names in Ink, seat titles in Muted uppercase, a seat's
  state (vacant, under fog) in Muted, the "ended" label of a group in Ink 2. The light under a seat is decorative and carries no text.
- Groups met with every seat under fog are one line at the end, with no name,
  count or place.
