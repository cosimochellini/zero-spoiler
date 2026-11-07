# Hunter x Hunter drawings

What Hunter x Hunter adds to the [line-drawings](SKILL.md) rules. Its drawings
are `DRAWINGS` in `src/data/series/hunter-x-hunter/art/index.ts`, spread from
one module per arc, and its stages are `REDRAWINGS` in the same file, which
`hunter-x-hunter/archive.ts` reads. Render them with `npm run art:sheet --
--series hunter-x-hunter <id>` (or `--kind arc|character|place`), on the
series' own paper.

## The arc and the canon

- **The arc** of [Recognisable first](SKILL.md#recognisable-first) is the
  story arc the record opens in (the Hunter Exam, Yorknew City, Chimera Ant).
- **Canon** is the manga and the 2011 anime. The anime ends at episode 148,
  and the last chapter it adapts is `lastAdaptedChapter` in
  `src/data/series/index.ts` (339 today).

## Palette

The `HUNTER_X_HUNTER` theme in `src/styles/themes.ts`: papers and inks tinted
forest green (hue 160), and Gon's leaf green, `oklch(82% 0.2 145)`, as the
page's `accent`. A record still takes one of the shared tints. `green` and
`acid` go only to a record, character, place or arc alike, whose accent mark
is itself green in the 2011 anime (or the manga colour page), settled by the
frame check; the site's leaf accent is never a reason (owner, #797). Every
other record takes another tint, which is why the Greed Island arc is
`orange`.

## Motifs

- **A character** is the object the reader names first in the record's arc:
  Gon's fishing rod, Killua's skateboard, Leorio's briefcase, Kurapika's two
  wooden swords, as the 2011 anime and its chapters show them. The accent is
  the role of a stroke on a real part the show shows (the rod's reel, the
  board's deck, the case's handle), never a mark added to carry it.
- **Arcs and places** are a landmark or an object from the arc: on land, a
  ground line at y 150 or an object standing on its own base, with `shadow()`
  at y 150–160 (the tower on its ground, the gavel on its block, the console
  on its table); at sea, on `...SEA` with no shadow (the exam ship in a
  storm). An object that is itself the map or the ground needs no shadow (the
  Kakin map, over a wave).

## Nen

Nen abilities are powers, so they follow the reveal rule: none appears in a
drawing before the story shows it, and each one is a stage from the episode
and chapter that first show it (owner, 2026-11-05; this replaces #797's "no
redrawing for Nen alone").

- An ability with an object (Kurapika's chains, a card, a fishing line) is
  drawn as that object, and the accent may sit on it.
- An ability with no object of its own is drawn as open `ambient` lines on or
  around the record's object: never a glow or a fill, and never the accent,
  which always sits on a real object.
- Kurapika is the worked case: the wooden swords from the Hunter Exam, the
  chains as a stage from Yorknew City.

## Manga-only stages

A stage the anime never shows is filed at episode 148 with
`source: 'chapter'` and its true chapter, as the Kakin arc is filed, so an
anime viewer who has finished never sees it.

- **The test enforces:** a record or fact past `lastAdaptedChapter` is
  `source: 'chapter'` at episode 148; anything the manga alone tells declares
  its chapter wherever it is filed; at episode 148 only an anime-only fact
  goes without one.
- **The test walks manga-only stages in chapters** (#1154): they need
  distinct, ascending chapters above the record's own, as every other
  manga-only entry does. So a record may have several, and a record filed at
  episode 148 (all of Kakin) is redrawn like any other.
- **Review checks by hand:** anything the 2011 anime omits at or below
  `lastAdaptedChapter` also takes `source: 'chapter'`. A manga-only fact on
  an anime-only record, and anything else outside these rules, waits for an
  owner ruling.

## Research and verification

- The Hunter x Hunter Wiki API (`https://hunterxhunter.fandom.com/api.php`):
  `|manga debut` and `|anime debut` (the `Episode N (2011)` entry) give a
  record's pair, the `Chapter N` and `Episode N (2011)` pages its scene.
- `wiki:pairs`, `archive:table` and `art:shots` read One Piece only. Check each
  stage's episode and chapter pair by hand against the wiki and the series'
  chapter table, and say so in the PR; never report "no changes" from One
  Piece's dump. `src/data/archive.test.ts` holds the pin within the record's
  chapter and the dial.
