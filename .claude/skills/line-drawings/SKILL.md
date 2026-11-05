---
name: line-drawings
description: How Zero Spoiler's line drawings are made, checked and audited, so every icon on the site reads as one set. Load it before drawing, redrawing, reviewing or auditing any drawing in src/data/series/<series>/art (One Piece's characters, redrawings, devil fruits, places, arcs and ships; Hunter x Hunter's arcs, characters and places; Game of Thrones' characters and places), and before writing an issue that asks for one.
---

# Zero Spoiler line drawings

Every record on the site has a line drawing made for this project: an object
that stands for a character, the place itself for a place, a fruit for a
fruit. They are data (`src/data/series/<series>/art/`), and one component
draws all of them, in every series (`src/components/ChartArt.tsx`). The point of
this skill is that a drawing made today sits next to one made a year ago and
the two read as the same hand.

The rules here hold for every series. Each series adds its own in a file
beside this one; read it before you draw, review or audit that series:

- One Piece (places, ships, devil fruits, its stage mechanics and tools):
  [`one-piece.md`](one-piece.md).
- Hunter x Hunter (palette, motifs, Nen, manga-only stages):
  [`hunter-x-hunter.md`](hunter-x-hunter.md).
- Game of Thrones (palette, the show as the reference, one-medium stages):
  [`game-of-thrones.md`](game-of-thrones.md).

The worked example for the pen, the volume and the shared geometry is One
Piece's Franky, both stages, in `src/data/series/one-piece/art/water-seven.ts`:
the forearm of the first years (ep 235) and the forearm of the two years
(ep 517, PR #192), drawn over the same wrench and bolt. Render them with
`npm run art:sheet -- franky` and keep the sheet open while you draw. The
first forearm predates [Recognisable first](#recognisable-first): under it, the
weapon his arc shows belongs in that first drawing.

## Recognisable first

A drawing is the reader's reference for the record: they should look at it and
know who it is. A clear drawing of the character's real object beats a safe
one nobody recognises (owner, 2026-11-05, #1097).

- **The first drawing is the object the reader recognises the character by
  within the arc the record opens in**, even when that object first appears
  later in the arc: Franky's forearm with its weapon, Usopp's slingshot.
  Places and arcs show the landmark the arc shows. Each series says what its
  arc is.
- **Reveals stay out of it.** A first drawing never shows, before the story
  does:
  - a death or a fate (a grave, a broken object, a ruin);
  - a hidden identity (what a disguise hides, who a character really is);
  - a power not yet shown (a devil fruit's technique, a Nen ability, a Zoan
    form, a transformation);
  - a secret affiliation (the crew or agency a character secretly serves).
- **Every reveal is a stage.** From the episode and chapter that show it, the
  drawing changes to show it: the death, the true identity, the power, the
  affiliation's symbol. These stages are required, like the ones in
  [Redrawings](#redrawings).
- **Nothing invented.** The object and every detail on it are ones the story
  shows. Check the object against the wiki's Appearance section, not memory or
  an issue's wording (Chopper's cap and Brook's guitar were both described
  wrong in their issues; the early Egghead drawings had a volcano and a
  bulb-headed Vegapunk the show never has, #180).

## The house style

These rules hold for every drawing. **(test)** marks the ones a test fails on;
the rest are left to review, so check them yourself.

- **The box.** 160×200, x to the right, y down (`ART_VIEWBOX`). The object
  centred near x 80; ground or a base at y 150; `shadow()` at y 180–190 (each
  series' file says where its places and arcs differ); `SEA` waves at
  y 158/172/186. A drawing may run past the box (a wave does); One Piece's
  fruits may not **(test)**.
- **The pen.** One 2 px line, round caps and joins, kept at 2 px at every size
  (`non-scaling-stroke`) **(test)**. No fills, anywhere. A dot is a zero-length
  line (`dot()`), a circle two arcs (`circle()`).
- **Four strokes or more, at least one `accent`** **(test)**. Fewer than four
  is an icon, not a drawing.
- **Roles.** No role is the second ink (`ink2`). `accent` is the record's tint.
  `ambient` is the muted rule colour, for hatching, ground, water and things
  that are merely there. `dashed: true` is for shadows, ground and water.
  `soft` renders exactly like no role: it is a label for the person drawing
  (folds, knuckles, seams), not a style.
- **One colour.** The tint (`visual.tint` on the record) is the record's colour,
  not the object's: one of the nineteen `tint` tokens every series shares
  (`src/styles/tokens.stylex.ts`), never the series' UI `accent`. A redrawing
  never changes it. Put the accent on the one mark that identifies the record
  (Franky's star, Luffy's hat band), never on everything.
- **No face and no lettering.** No eyes, no mouth, no "BF-37", no ship's name.
  A silhouette lion has a mane, not a muzzle.
- **Symbols are welcome** wherever they help the reader recognise the record:
  a Jolly Roger, an emblem, a house sigil, a flag (owner, 2026-11-05). A Jolly
  Roger's skull is a symbol, drawn as the flag draws it.
- **Shade is hatched, never filled**, and only where the object is really dark
  or turns away from the viewer: Teach's brim, Shusui's black scabbard, the far
  face of Franky's forearm. Enma's sheath is lilac, so it is not hatched.
- **No repeated stroke** **(test)**: the renderer keys a path by
  `d|transform`, so the same shape may repeat only under another `transform`
  (a windmill's blades, a flower's petals).
- **Coordinates to one decimal**, as the helpers in `src/lib/svg/primitives.ts`
  write them (`circle`, `ellipse`, `dot`, `dots`, `polygon`, `star`, `wave`,
  `SEA`, `shadow`, `sheath`, `BLADE`, `house`, `cell`). Use them
  before writing a path by hand.
- **A comment above every drawing** says what the object is and where the
  reader first sees it, in the dry voice of the `tone-of-voice` skill.

## The quality bar

Grade every drawing you make or review. A is the target. A true, recognisable
B may ship when the pull request says it is a B, and review rates it P3 at most
(owner rulings, #457, #593, #761). A C never ships.

- **A, the standard.** Franky's two forearms are the model of the craft:
  - **One hero object, with volume.** A 3/4 view, a second face, a cuff seen
    from below: something that says the object is solid. A flat outline is B.
  - **The accent on the identity mark only.**
  - **Supporting objects beneath or beside it**, smaller and plain, when they
    add something true (Franky's tools). Never a crowd.
  - **Detail lines in `soft`** (knuckles, folds), **hatching in `ambient`** on
    the side that turns away, **a `shadow()`** under anything that stands on a
    table.
  - **Usually 10–16 strokes.** Fewer is fine if the drawing is still rich.
    More starts to blur at tile size.
  - **Reads at 56 px.** At tile size the silhouette alone must still say who
    it is, and the hatching must stay open lines rather than a grey patch.
  - **True to the source**, with every reveal at its stage.
  - **Shared geometry is shared**: two stages that keep the same object reuse
    one `const` (`FRANKY_TOOLS`), so the only thing that changes is what the
    story changed. The fallow duplicate gate fails on repeated blocks anyway.
- **B, correct but poor.** True, recognisable and on style, but flat, sparse
  (often 5–7 strokes) or off the set: no volume, the accent smeared over
  everything, no ground or shadow.
- **C, wrong.** Any of:
  - **unrecognisable**: a generic object the reader would not link to the
    record, or one that does not read at tile size;
  - **misleading** or **invented** (an object or detail the story never shows);
  - **a face or lettering**;
  - **a reveal before its stage**.

## Redrawings

A redrawing is a later stage of a record's drawing. It is a whole drawing,
`{ episode, chapter, value }`, filed in the series' `REDRAWINGS` (One Piece
spreads its sagas' timelines into it; see its file).

**When the drawing changes.** Each of these is a stage, and each is required:

- **A reveal** from [Recognisable first](#recognisable-first): a death, a
  true identity, a power, a secret affiliation. A power counts the first time
  the story shows it, whatever kind it is (a late Paramecia and a Nen ability
  included; this replaces the earlier rulings in #474 and #797). Draw the power
  as its object or its effect on the record's object; a later technique of a
  power already drawn keeps the drawing.
- **A new visible feature, for good or only for a while** (#74, #468): headwear,
  a weapon that becomes part of the object, a scar that stands for something,
  a transformation, an arc-long disguise. Temporary costumes are always drawn
  (owner, 2026-11-05): the change, then the drawing before it again (the same
  `const`, so the return is the first drawing itself) from the episode it is
  gone. Luffy's hat is the worked example (One Piece's `east-blue.ts`,
  `LUFFY_HAT`). When the object is hidden under the costume (Luffy's knight
  helm), the accent moves to the costume's own mark (the plume).
- **A death, almost always** (owner, 2026-10-10). When the story kills a
  character after their record opens, or leaves them for dead (`deceased`,
  `presumed-dead` in the status timeline), the drawing changes from the
  episode that tells it, with the most honest composition for that character,
  chosen case by case: Ace's hat losing its flame, Jorul's grave. A death told
  in a flashback dates from the episode that tells it. An audit that finds a
  death missing from the status timeline adds the status entry (true pair) and
  the drawing in the same PR.
- **Back from the dead is a new drawing** that shows what the return leaves
  (Kanjuro, Orochi, Sabo).
- **A destroyed or badly damaged place or ship**, even for a while (the Going
  Merry burning, Enies Lobby after the Buster Call), and its rebuilding is a
  new drawing again.

A stage is never skipped because it is hard to draw: find a composition that
reads at 56 px. The one exception is a change in the episode the record opens
in, which belongs in the first drawing. A stage a series' own rules cap or
defer (a chapter the anime has not reached, a second manga-only stage, a
medium's last point) waits as an issue or an owner ruling, as that series'
file says; it is not a missing stage.

**What keeps the drawing as it is:**

- a state of the body: frozen, chained, petrified, wounded, a lost limb
  (unless the lost part is the object itself);
- a death told before the record opens (a record already dead when it opens
  draws what it left);
- a weapon held beside the object, a one-fight weapon, a later technique;
- an outfit that never touches the object, a one-scene moment, anything the
  canon does not show (each series' file says what its canon is).

**Dating a stage.**

- A stage dates from its true episode and chapter: the first episode that
  shows it, and the chapter that same scene is in, or chapter readers see it
  early. Stages keep this true pair; only the first drawing gets the
  arc-wide latitude.
- Strictly after `revealedAtEpisode`, in ascending order. A redrawing at the
  record's threshold fails a test: that is the first drawing.
- **A stage whose true chapter is below its record's chapter is pinned at the
  record's chapter**, as the status entries are (#459). The pin adds nothing
  to the chapter table.
- **A frame check on the pages or the episode decides** the start, the end,
  and what is really on the object. The wiki's prose is a lead: Jack's sails,
  Leo's goggles and Tamago's teacup were all wrong or missing in it.
- `src/data/series/index.test.ts` holds every series' redrawings to the house
  style, a `chapter:` pin, an episode after the threshold and ascending order;
  that the pin is the true chapter is a review check.

## Workflow

1. **Research.** Read the record (threshold, summary, dossier, status
   timeline) and the wiki page through the series' API (`wiki.en` in
   `src/data/series/index.ts`), which works with curl when the HTML is blocked:
   `https://<wiki>/api.php?action=parse&page=<Page>&prop=wikitext&format=json&redirects=1`.
   List the record's arc, the object it is known by there, and every reveal,
   death and costume after its threshold, each with its true pair. Check the
   scene itself in a source you can lawfully access: a licensed manga edition,
   a book, or a licensed stream. Note each reference as chapter and page, or
   episode and timestamp, for the pull request's Sources and rights section;
   when you cannot view it, write what the wiki establishes, marked "not
   viewed", for the human author to check. The wiki's gallery and image search
   results are leads, not permission. Reference images stay on your machine:
   commit, upload and paste none. Draw by eye; a trace is not a
   drawing.
2. **Render the before.** `npm run art:sheet -- <id>` writes every stage of
   the record to `.gate/art/<id>.png` (`--out` to move it; `--series <slug>`
   for a series other than One Piece). Read the PNG.
3. **Draft.** Write candidates in a scratch `.ts` file that default-exports
   `Record<string, Stroke[]>` (it may import `~/lib/svg/primitives`), and render
   them beside the record: `npm run art:sheet -- <id> --draft <file.ts>`.
   When the user chooses, give three candidates that differ in structure (a
   pose, a view, a composition), not in parameters: three sizes of the same
   shape read as "all the same".
4. **Look at it at both sizes** on the sheet, then fix what fails the bar.
   Iterate toward an A.
5. **Write it in the art module** as literal paths and helper calls, with the
   comment above it. Run `npm run art:sheet -- <id>` again. A changed first
   drawing changes the record's OG picture: run `npm run og:images`.
6. **Verify the stage gates** as the series' file sets out.
7. **Run `npm run check`.** The PR body states What (where the entry goes,
   what each stroke is), Why (a table of sources with supporting quotations),
   the grade of each drawing, and How to verify (check, tests and the
   generated stage grid).

## Auditing the archive

To bring a whole arc or kind up to the bar:

1. `npm run art:sheet -- --kind <kind>` (any series, with `--series`) or One
   Piece's `--saga <file>` writes contact sheets of 24 cells, each at crest and
   tile size with its id, threshold and stroke count. They show first drawings
   only; name a record's id to see its stages.
2. Grade every cell A, B or C against the bar above. For each record, also
   list the stages it is missing (reveals, deaths, costumes, destroyed places)
   with their true pairs. For each B or C, read the comment in the art file and
   the record's arc, and propose the object the reader recognises it by. Say
   why in a few words.
3. File the work as an epic plus child issues, labelled `type:content` and
   `area:art`. Each child says "Part of #<epic>" and lists, C first:
   `- [ ] \`<id>\` · C — <current object> → <proposed object> (<why>)`, then
   the missing stages, the rules (this skill) and How to verify (`art:sheet`
   before and after, `npm run check`, crest and tile screenshots).
4. One PR per child issue.

## Pitfalls

- librsvg paints every `oklch()` black; `art:sheet` converts the tokens to hex.
  Write hex if you render an SVG by hand.
- Prettier sets `quoteProps: "consistent"`: in a module with one quoted key,
  every key is quoted.
- `scripts/archive-gate.mjs` reads the art modules' quoted two-space keys, so
  keys are written out one by one, never built from a table.
- An issue's candidate episode or object is a lead, not a fact. Several redraw
  PRs filed a later episode or corrected the object.
