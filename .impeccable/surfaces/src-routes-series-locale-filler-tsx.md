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

**Where:** `/<series>/<locale>/filler` (`FillerGuide`, `FillerCountdown`,
`FillerRanges`, `FillerStrip`, `FillerCatalogue`), which is not in the bar
but is linked from the footer of every One Piece page (`SiteFooter`);
`/<series>/<locale>/ranks` (`PowerBoard`).

**Must not break:**

- The filler page's group names, ranges, strip and counts are public by
  design; its titles are under fog past the bookmark (`PRODUCT.md`,
  `src/server/archive/filler.server.ts`).
- The countdown is for an episode or season bookmark within the aired
  episodes; a chapter reader and a visitor with no bookmark get none
  (`src/server/archive/fillerCountdown.server.ts`).
- On the ranks page only a held seat has a drawing and a colour
  (`PowerBoard.tsx`).
- Groups met with every seat under fog are one line at the end, with no name,
  count or place (`PowerBoard.tsx`).

**Open points:** none recorded.
