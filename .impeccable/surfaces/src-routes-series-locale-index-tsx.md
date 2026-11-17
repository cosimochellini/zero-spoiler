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

**Where:** `/<series>/<locale>` with a bookmark, and `/<locale>`. Without a
bookmark the same address shows the landing, whose dial and preview are in the
bookmark brief.

**Holds today:**

- The fold is the arc the reader is in and nothing else: the arc's drawing
  large on a wash of its tint, the reader's point in mono, the arc's name as
  the one headline, its sentence, and the control that moves the bookmark.
- Under it: the latest stories, a row of the characters at the centre of them,
  then the older stories closed under their titles.
- With a bookmark the home has no fog. The one thing it says about the future
  is the filler warning: numbers and types of episodes only.
- On the hub each series is a card in its own theme, with its name, its count
  of entries and where the reader's bookmark stands. It names no record.
