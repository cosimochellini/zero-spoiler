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

**Where:** the listings and record pages of a series. Three forms: the veil
(`SpoilerVeil`), a curtain over a placeholder with the threshold and one verb;
the fog tile (`FogTile`), a covered record at the size of an open tile; the fog
band (`FogBand`), the covered records at the foot of a listing.

**Holds today:**

- The record is not in the page until the reader asks. Covered content is
  `inert` and hidden from assistive technology.
- A fog tile's fog is the same for every record, with no tint and no outline:
  a drawing can spoil.
- A fog tile lifts in two presses: the first asks, the second fetches. A failed
  fetch can be retried.
- A fog band is on the page even with nothing covered, and then says so. Its
  title is a different sentence for none, one and many.
- The blur under a veil is never animated; the curtain fades over it.

**Unresolved:**

- Empty states have no shared component; each page writes its own line.
- Dashes mark what is not reached (a fog band's rule, an unknown seat, the
  route past the reader) and are also plain drawing on reached content (a
  seal's inner ring, a plate's inner rule, ground and water strokes).
  `DESIGN.md`, Shapes, lists both. This pass judges whether the mixed use
  blurs "what is hidden".
