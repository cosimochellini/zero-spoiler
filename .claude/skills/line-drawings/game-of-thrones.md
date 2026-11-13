# Game of Thrones drawings

What Game of Thrones adds to the [line-drawings](SKILL.md) rules. Its two
media are the HBO show and the five books. Its records are filed by show
season in `src/data/series/game-of-thrones/records/season-N.ts` (no arcs), and
its drawings are `DRAWINGS` in `src/data/series/game-of-thrones/art/index.ts`,
spread from `winterfell.ts`, `south.ts`, `wall.ts`, `essos.ts` and `places.ts`.
Characters not drawn yet show the `PERSON` placeholder until their issue draws
them. Render them with
`npm run art:sheet -- --series game-of-thrones <id>` (or `--kind
character|place`), on the series' own paper.

## The show is the reference

One drawing serves a show viewer and a book reader. It is a reference the
reader recognises, and most readers know the characters from the show, so the
show is its visual reference (owner, 2026-11-05):

- **The arc** of [Recognisable first](SKILL.md#recognisable-first) is the show
  season the record opens in. The first drawing is the object a viewer knows
  the character by in that season, even when it first appears later in it:
  Arya's Needle (episode 2, chapter 11), Daenerys's dragon eggs (episode 1,
  chapter 12).
- **Where the show and the books differ** (a colour, a shape, who carries
  it), draw the show's.
- **Reveals are checked in both media.** A death, a true identity, a power or
  a secret allegiance stays out of the first drawing in both, and becomes a
  stage at its true pair. A reveal only one medium has is a one-medium stage
  (see [Stages](#stages)).

## Palette

The `GAME_OF_THRONES` theme in `src/styles/themes.ts`, "Ember": papers and
inks tinted a dark ember (hue 20), and the red `oklch(70% 0.19 25)` as the
page's `accent`. A record still takes one of the shared tints. `red`,
`vermilion` and `wine` sit next to the accent, so they go only to a record
whose accent mark is itself red in the show; the site's ember accent is never
a reason (owner, #851). Every other record takes another tint.

## Motifs

- **A character** is the object a viewer would name first in the record's
  season: Ned's greatsword Ice, Arya's Needle, Sansa's embroidery hoop. The
  accent is the role of a stroke on a real part the show shows, never a mark
  added to carry it.
- **A house's sigil** may stand in when nothing of the character's own reads
  at 56 px (Joffrey's stag, Theon's kraken): the animal posed as an animal,
  with no face, or the sigil on a banner or a shield.
- **Places** are the place itself as the show shows it: the landmark (a keep,
  a gate, a wall of ice), a ground line at y 150 and `shadow()` at y 150–160,
  as Hunter x Hunter's are. A place on the coast may stand on `...SEA` with no
  shadow. A banner may fly on it.

## Later looks

The stories kill, maim, crown and disguise their characters often, and the two
media do it at different points. The rules in
[Redrawings](SKILL.md#redrawings) hold as written; each medium is canon for
itself here:

- a death is a stage, with a pin in each medium, or with `source` when only
  one medium kills the character;
- a wound or a lost limb keeps the drawing as it is, unless the lost part is
  the object itself: a sword hand that becomes a golden hand is a new object,
  so it is a stage;
- a costume change counts when it touches the object.

## Stages

- Every stage is a whole drawing, `{ episode, chapter, value }`, with the true
  episode and the true chapter. A stage the show tells is strictly after
  `revealedAtEpisode`; a books-only one strictly after `revealedAtChapter`
  and at or after `revealedAtEpisode` (the rules below).
- **A change only one medium has** carries `source: 'chapter'` (the books
  alone) or `source: 'episode'` (the show alone). Its other number is the
  point where the other medium reaches the same moment in the story: it only
  orders the stage, as a record's other threshold does (`Entity.source`), and
  never opens it (owner, #851). When the other medium never reaches that
  moment, the other number is the next point it does reach, or else its last
  (`chapterCeiling` 344, `episodeCeiling` 73).
- A books-only stage is walked in chapters alone (#1154): it needs a chapter
  of its own above the record's, and its episode, its other number, takes no
  part in the episode checks, so it may share one with any other stage. Two changes the media tell in a different
  order, when no matching point keeps both in order, wait for an owner
  ruling under `status:needs-decision`.
- The series has no `lastAdaptedChapter` (the show ran past the books), so
  nothing is filed at its last episode the way Hunter x Hunter's manga-only
  stages are.
- `src/data/series/index.test.ts` holds every stage to a `chapter:` and
  non-decreasing chapters, and reads each stage's medium as the engine does
  (`chapterTable.gateOf`): the record's `source` when it has one, else the
  stage's own (`entity.source ?? stage.source`). A stage that medium makes
  the books' alone (`'chapter'`) needs a distinct chapter above the
  record's and an episode at or after the record's, and its episode is left
  out of the episode checks. Every other stage needs a distinct, ascending
  episode strictly after the record's. `src/server/archive/thronesSeason1.test.ts`
  walks the stages in its `STAGES` table and holds that a one-medium stage
  never reaches the other medium's reader. `REDRAWINGS` in `art/index.ts` is
  already passed to `sagaArchive` in `game-of-thrones/archive.ts`, so a stage
  needs only its entry there and its row in `STAGES`.

## Research and verification

- **A Wiki of Ice and Fire** (`https://awoiaf.westeros.org/api.php`,
  `wiki.en` in `src/data/series/index.ts`) for the books. `{{Ref|AGOT|N}}`
  cites a book (`AGOT`, `ACOK`, `ASOS`, `AFFC`, `ADWD`) and its own chapter N,
  the page `A_Game_of_Thrones-Chapter_N` (`-Prologue`, `-Epilogue`). The
  absolute chapter the site files is the book's `first` in `books`
  (`src/lib/progress/series.ts`) plus N: a prologue is the book's first
  chapter, an epilogue its last. Ice's beheading, `{{Ref|AGOT|1}}`, is
  chapter 2.
- **The Game of Thrones Wiki** (`https://gameofthrones.fandom.com/api.php`)
  for the show. `|First =` gives a character's first episode by title, and
  `{{Ref|GOT101}}` cites season 1, episode 1. The absolute episode is the
  season's `first` in `seasons` in the same file, plus the episode, minus
  one.
- `wiki:pairs`, `archive:table` and `art:shots` read One Piece only. Check
  every pair by hand against both wikis and the owner's own copies of the
  books and the show, or mark it "not viewed" in the PR.
