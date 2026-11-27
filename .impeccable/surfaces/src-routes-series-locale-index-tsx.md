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
(`docs/homepage.md`), and under the last a row of the characters just met in
the arc (owner, 2026-11-27). The hub shows every wiki at a glance, offers a GitHub
form to request a new one, and walks a visitor through the features in a scroll
tour before they pick a series (#1703).

**Where:** `/<series>/<locale>` with a bookmark (`-landing.tsx`, `HomeFold`,
`HomeStories`, `HomeCast`, `HomeFillerAhead`) and `/<locale>` (`SeriesHub`, `HubCards`, `HubTour`, `TourScreen`,
`TourViews`).
Without a bookmark the same address shows the landing page, which the bookmark
brief covers.

**Must not break:**

- With a bookmark the home has no fog, and the one thing it says about the
  future is the filler warning (`docs/homepage.md`).
- The hub names no record outside the tour, and the tour shows only each
  series' demo stretch and covered records past it (`tour.server.ts`, owner
  2026-11-26).
- The tour's words are in the server's HTML; its screen and records load
  apart, so the hub's first load does not grow with them.

**Open points:** none recorded.
