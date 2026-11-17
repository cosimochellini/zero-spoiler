---
version: 1
slug: "src-components-spoilerveil-tsx"
primary_target: "src/components/SpoilerVeil.tsx"
related_targets: ["src/components/FogTile.tsx","src/components/FogBand.tsx"]
---

# Fog and covered content

**Mode:** Operate. **Owner priority:** 3 of 3.

**For:** the reader sees that something is hidden and until when, and can lift
it on purpose.

**Where:** the listings and record pages of a series, in three components:
`SpoilerVeil`, `FogTile` and `FogBand`.

**Must not break:**

- A covered record is not in the page until the reader asks for it
  (`SpoilerVeil.tsx`, `FogTile.tsx`).
- Covered content is `inert` and hidden from assistive technology
  (`SpoilerVeil.tsx`).
- A fog tile is the same for every record, with no tint and no outline of what
  it covers (`FogTile.tsx`).
- A fog band stays on the page when nothing is covered, and says so
  (`FogBand.tsx`).
- The blur under a veil is not animated (`SpoilerVeil.tsx`).

**Open points:**

- Empty states have no shared component; each page writes its own line.
- Dashes mark some things the reader has not reached and are also plain
  drawing on reached content. This pass judges whether that blurs "what is
  hidden".
