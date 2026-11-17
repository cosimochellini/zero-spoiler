---
version: 1
slug: "src-routes-series-locale-index-tsx"
primary_target: "src/routes/$series/$locale/index.tsx"
related_targets: ["src/routes/$series/$locale/-landing.tsx","src/components/HomeFold.tsx","src/components/HomeStories.tsx","src/components/HomeCast.tsx","src/components/HomeFillerAhead.tsx","src/components/SeriesHub.tsx","src/routes/$locale/index.tsx"]
---

# Home, landing and series hub

**Mode:** Read for a series' home with a bookmark; Persuade for the hub.

**For:** the home answers three questions for a reader picking a series back
up, in order: where am I, what just happened, who matters now
(`docs/homepage.md`). The hub lets a visitor pick a series.

**Where:** `/<series>/<locale>` with a bookmark (`-landing.tsx`, `HomeFold`,
`HomeStories`, `HomeCast`, `HomeFillerAhead`) and `/<locale>` (`SeriesHub`).
Without a bookmark the same address shows the landing page, which the bookmark
brief covers.

**Must not break:**

- With a bookmark the home has no fog, and the one thing it says about the
  future is the filler warning (`docs/homepage.md`).
- The hub names no record (`SeriesHub.tsx`).

**Open points:** none recorded.
