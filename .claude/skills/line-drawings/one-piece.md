# One Piece drawings

What One Piece adds to the [line-drawings](SKILL.md) rules. Its drawings are
filed by saga in `src/data/series/one-piece/art/<saga>.ts`, the devil fruits in
`art/fruits/`.

## The arc and the canon

- **The arc** of [Recognisable first](SKILL.md#recognisable-first) is the
  story arc the record opens in (Arlong Park, Enies Lobby, Dressrosa), not the
  whole saga.
- **Canon is the manga and the episodes that adapt it.** A cover story counts
  only where an episode adapts it as story; anime-only looks and filler stay
  out (no chapter to pair).

## Places, arcs and ships

- **Places and arcs** are the place itself, seen from the sea: the landmark
  the arc shows, the ground at y 150, `...SEA` (or `SEA.slice(1|2)`) below.
- **Ships** are the ship side on, with a figurehead, and its flag when the
  flag helps the reader know it.
- The whole place counts even when the landmark survives: a ruin brings the
  damage into the frame. A rebuilt place shows only what is truly new, or
  keeps its stage. A landmark leaving is not a stage (owner, PR #655).

## Devil fruits

A fruit is a fruit and its power (#461). The fruit is a body from the kit in
`src/data/series/one-piece/art/fruits/kit.ts`: one of six (`round`, `pear`,
`gourd`, `heart`, `oblong`, `segmented`), shared radii, seen a little from
above. `crown()` draws the rim of the dimple the stalk sits in, `shine()` the
highlight on the near shoulder, `hatching()` the far side turning away,
`skin()` a few `soft` curls, and `sprout()` the stalk and leaf. Pick the body
by hand. The power is the **only accent**, and it acts **on the fruit's own
body**, as the owner picked in #462:

- **Logia**: the fruit sunk in its element where the shadow would be (smoke
  in a bank of cloud, ice in a cluster of shards).
- **Paramecia**: the power breaking out of the fruit or done to it (a blast
  out of an open side, a bite out of the shoulder, the stalk wound into a
  spring). Cut the outline where the power has it, with `outline(body,
  keep)`, so the skin is open there rather than drawn under it.
- **Zoan**: the animal's attribute grown out of the fruit, both ends on the
  rim (`onRim()`): bison horns, falcon wings. Never a head, never a face.
- **The power as the fruit's record opens on it**: a fruit is itself a power,
  so its drawing shows no later technique, form or awakening. Redraw a fruit
  later only on an identity turn (its true name, its true model, a declared
  awakening), never for a new technique.
- **The real fruit** is a redrawing at the episode the show first shows it,
  with a true chapter pair, and it is the pure real fruit with no power (the
  flame-flame and op-op entries in `fruitRedrawn`). The owner ruled that
  Gum-Gum is the real fruit from episode 1, with no redrawing.
- **10–14 strokes**; `drawings.test.ts` fails a kit fruit under ten. Watch
  for faces: two curls over a row of points reads as eyes and teeth, so keep
  curls off a level line and away from a jagged edge (the first ice drawing
  failed on this).
- Every fruit drawing, kit or not, obeys what `drawings.test.ts` holds:
  absolute commands only (so `shadowUnder()`, never `shadow()`, whose `q` is
  relative), one decimal, no `transform`, inside the box, **exactly one**
  accent. Fruit compositions go in `fruitArt` in `index.ts`, keyed by the
  fruit's id, and later stages in `fruitRedrawn`. `ivory` resolves to the
  second ink, so an ivory accent is pale by design.

The eater's character drawing follows the general rule: the first time the
story shows the power, the character's drawing gains it as a stage. A fruit's
own drawing keeps it when its eater dies.

## Its own stage rulings

- **A Zoan form is a permanent stage** with no exit entry (King, Ulti,
  Queen), drawn as a part of the animal's body (a shell, a foreleg).
- **A zombie's purification is a stage** (owner, 2026-10-12, #554): the
  episode it loses its borrowed shadow, to salt or to the shadow going home,
  and goes still (Kumashi at 360, the Shadow's Asgard at 373). Only the first
  time counts.
- **Stages past the anime wait.** A change the manga tells in a chapter no
  episode adapts yet is filed once that episode airs, as an issue with an
  `Unblocks at: ch. N` line (#612, #652).

## Filing a stage

- The entry goes in the `<saga>Redrawn` timeline of the saga that first drew
  the record. A saga's first redrawing is also spread into `REDRAWINGS` and
  added to `src/data/series/one-piece/art/index.test.ts`.
- `src/server/archive/slices.test.ts` walks every stage from the data
  (episode − 1, episode, no bookmark, chapter − 1, chapter), so a stage needs
  no test of its own; a stage that is an earlier drawing again gets a row in
  the "redraws %s at stage %i" table there.
- A pin below the record's chapter is pinned at the record's: the Shinobu
  entry in `wano.ts`, Pekoms in `fish-man-island.ts`. The gate is the later of
  the record's chapter and the entry's `chapter:`, or without one the first
  chapter that reaches its episode, which can be many chapters late.

## Research and verification

- On the One Piece Wiki, `{{Qref|chap=N|ep=M|…}}` gives the episode and
  chapter of a fact; the `Episode_N` page confirms it, and N − 1 should still
  show the old look.
- **Chapter readers.** A stage reaches them through its `chapter:`; check
  `chapterAtEpisode(episode)` against the manga debut, so no chapter reaches
  the stage before the manga shows it.
- `npm run wiki:pairs -- 129 157` (ranges work too: `1050-1056`) reads the
  rendered chapter infobox, caches it in `.gate/wiki/`, and gives each
  chapter's episode and page range; use them to locate the scene.
- **Mappings.** Save `npm run --silent archive:table` dumps from the PR base
  and head, plus `npm run --silent archive:table -- --dated-only` dumps.
  Compare chapter and episode mappings separately; count added and removed
  dated entries as occurrences, preserving duplicate lines. Follow the
  duplicate-aware comparison in `CONTRIBUTING.md` under "Archive and drawing
  verification". The PR body includes the mapping diff, with an explicit "no
  changes" when empty, and the separate counts.
- **Stage screenshots.** For characters with redrawings, run `npm run build`
  then `npm run art:shots -- <id> [<id>…]`. It needs installed Chrome
  (`CHROME_PATH` overrides its executable) and manages its own preview server.
  Read `.gate/shots/<ids-joined-with-+>.png`: each redrawing has four crest
  cells then four tile cells, at episode − 1, episode, chapter − 1 and
  chapter. Missing chapters use the app's derived opening threshold, labelled
  "derived"; covered records have placeholders. Confirm every boundary shows
  the intended drawing. For first drawings and non-character records, check
  the crest and tile on `npm run build && npm start`. Screenshots stay out of
  the repo.
- **Audits.** `npm run art:sheet -- --saga <file>` (for example
  `water-seven`) or `--kind fruit|place|arc|ship|character` writes the
  contact sheets.
