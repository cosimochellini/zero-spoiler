import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'
import type { Stroke } from '~/lib/view/records'

import { BROTHERHOOD_DRAWINGS, brotherhoodRedrawn } from './brotherhood'
import { COURT_DRAWINGS, courtRedrawn } from './court'
import { DRAGON_SIGIL, ESSOS_DRAWINGS, essosRedrawn } from './essos'
import { IRONBORN_DRAWINGS, ironbornRedrawn } from './ironborn'
import { NORTH_DRAWINGS, northRedrawn } from './north'
import { PLACE_DRAWINGS, placesRedrawn } from './places'
import { RIVERLANDS_DRAWINGS, riverlandsRedrawn } from './riverlands'
import { SEASON_DRAWINGS } from './seasons'
import { SOUTH_DRAWINGS, southRedrawn } from './south'
import { REFORGED, STORMLANDS_DRAWINGS, stormlandsRedrawn } from './stormlands'
import { VALE_DRAWINGS, valeRedrawn } from './vale'
import { WALL_DRAWINGS, wallRedrawn } from './wall'
import { WILDLING_DRAWINGS, wildlingsRedrawn } from './wildlings'
import { WINTERFELL_DRAWINGS, winterfellRedrawn } from './winterfell'

/**
 * Ice, Eddard Stark's greatsword: the round pommel, the long two-hand grip
 * with its wrap, the crossguard with its under face, and the blade in 3/4,
 * its far face hatched because the steel is dark. The accent is the ripple
 * down the near face. His first drawing and his death share it.
 */
const ICE: Stroke[] = [
  { d: circle(80, 22, 6) },
  { d: 'M76 28 H84 V56 H76 Z' },
  { d: 'M76 34 L84 39 M76 41 L84 46 M76 48 L84 53', role: 'soft' },
  { d: 'M48 58 Q80 52 112 58 L112 62 Q80 56 48 62 Z' },
  { d: 'M48 62 Q80 62 112 62', role: 'soft' },
  { d: 'M68 62 V130 L80 150 L92 130 V62' },
  { d: 'M80 62 V148', role: 'soft' },
  { d: 'M73 70 q3 6 0 12 t0 12 t0 12 t0 12 t0 12 t0 12', role: 'accent' },
  {
    d: 'M83 72 l5 -4 M83 84 l5 -4 M83 96 l5 -4 M83 108 l5 -4 M83 120 l5 -4 M83 132 l4 -3',
    role: 'ambient',
  },
]

/**
 * Eddard Stark: Ice stood on its point, the sword he beheads a deserter
 * with in episode 1 and in Bran I (chapter 2).
 */
const ICE_STANDING: Stroke[] = [...ICE, shadow(80, 153, 24)]

/**
 * Jon Snow: the albino runt of the direwolf litter, sitting, side on and
 * with no face. He finds it after the other five in episode 1 and in Bran I
 * (chapter 2), before it has a name. The accent is the ruff on its chest,
 * with a second line of fur beside it; the pup is white, so only the
 * shadow under its belly, between the legs, is hatched. His return and his
 * true name keep it.
 */
const RUNT: Stroke[] = [
  {
    d: 'M34 86 Q36 79 46 77 Q56 75 61 67 Q63 58 66 52 L73 60 Q79 58 85 60 L92 51 Q96 61 94 72 Q100 82 96 94 Q116 102 120 126 Q122 142 112 150',
  },
  { d: 'M34 86 Q38 92 52 92 Q64 92 70 98' },
  { d: 'M70 98 Q63 104 68 110 Q62 116 68 122 Q63 128 70 132', role: 'accent' },
  { d: 'M70 132 V145 Q70 150 76 150 Q82 150 82 145 V130' },
  { d: 'M86 132 V145 Q86 150 92 150 Q98 150 98 145 V136', role: 'soft' },
  { d: 'M112 150 Q106 128 95 132 M98 150 H112', role: 'soft' },
  { d: 'M116 142 Q130 142 140 150 Q128 154 114 150', role: 'soft' },
  { d: 'M68 58 L72 64 M90 58 L90 66', role: 'soft' },
  { d: 'M80 78 Q76 88 82 96 Q78 104 84 112', role: 'soft' },
  { d: 'M101 138 l5 -4 M102 146 l5 -4', role: 'ambient' },
  shadow(88, 153, 38),
]

/**
 * The runt howling with its muzzle to the sky, sitting in the snow, no
 * face: Jon's stage from the night he is killed. The ruff is still the
 * accent; the lines by the muzzle are the howl.
 */
const HOWL: Stroke[] = [
  {
    d: 'M42 26 L60 36 Q66 32 72 34 L74 46 Q82 58 92 80 Q116 96 120 126 Q122 142 112 150',
  },
  { d: 'M42 26 Q46 36 54 44 Q56 58 58 70' },
  { d: 'M58 70 Q52 76 58 82 Q52 88 58 94 Q53 100 60 104', role: 'accent' },
  { d: 'M60 104 V145 Q60 150 66 150 Q72 150 72 145 V110' },
  { d: 'M76 112 V145 Q76 150 82 150 Q88 150 88 145 V118', role: 'soft' },
  { d: 'M112 150 Q106 126 92 128 M88 150 H112', role: 'soft' },
  { d: 'M116 142 Q130 142 140 150 Q128 154 114 150', role: 'soft' },
  { d: 'M66 34 L66 42 M70 74 Q66 84 72 94', role: 'soft' },
  { d: 'M36 16 q-4 6 0 12 M28 10 q-6 10 0 20', role: 'ambient' },
  { d: 'M16 150 H144', role: 'ambient', dashed: true },
  {
    d: dots([
      [24, 120],
      [130, 60],
      [140, 100],
      [30, 70],
      [118, 30],
    ]),
    role: 'ambient',
  },
]

/**
 * Daenerys Targaryen: one dragon egg on a folded cushion, the egg in 3/4
 * with its scales soft and its far side hatched, the accent on the one seam
 * between its scales. Illyrio gives her three at the wedding, in episode 1
 * and in Daenerys II (chapter 12). One egg, so it is not Illyrio's chest.
 */
const DRAGON_EGG: Stroke[] = [
  { d: 'M80 44 Q106 46 110 92 Q110 126 80 128 Q50 126 50 92 Q54 46 80 44 Z' },
  {
    d: 'M66 58 q4 4 7 0 t7 0 t7 0 M60 72 q5 5 10 0 t10 0 t10 0 t10 0 M54 90 q5 5 10 0 t10 0 t10 0 t10 0 t10 0 M56 108 q5 5 10 0 t10 0 t10 0 t10 0 t8 0',
    role: 'soft',
  },
  { d: 'M74 50 Q70 62 76 74 Q82 86 76 98 Q72 108 76 118', role: 'accent' },
  {
    d: 'M100 66 l5 -3 M104 82 l5 -3 M104 100 l5 -3 M98 116 l5 -3',
    role: 'ambient',
  },
  {
    d: 'M22 134 Q80 118 138 134 Q142 142 138 150 Q80 166 22 150 Q18 142 22 134 Z',
  },
  { d: 'M22 142 Q80 158 138 142 M22 134 l-6 -4 M138 134 l6 -4', role: 'soft' },
  {
    d: 'M40 154 l5 -4 M60 157 l5 -4 M100 157 l5 -4 M120 154 l5 -4',
    role: 'ambient',
  },
  shadow(80, 166, 56),
]

/** A dragon hatchling sitting up, wings raised, no face, on a base at y 0. */
const HATCHLING: Stroke[] = [
  {
    d: 'M-8 0 Q-12 -20 -4 -32 Q0 -44 10 -48 L20 -46 L12 -41 Q6 -36 6 -26 Q8 -12 12 0',
  },
  { d: 'M12 0 Q22 2 24 -8 Q26 -14 20 -14 M-8 0 H12', role: 'soft' },
  { d: 'M-4 -26 L-20 -52 L-18 -38 L-30 -42 L-22 -28 L-32 -26 L-8 -14' },
]

/**
 * Tyrion Lannister: a goblet of wine in 3/4, the rim with its thickness,
 * the bowl's far side hatched, the knop on the stem and a wide foot. The
 * accent is the wine. He drinks from his first scene in episode 1.
 */
const GOBLET: Stroke[] = [
  { d: ellipse(80, 62, 26, 7) },
  { d: ellipse(80, 62, 23, 5.5), role: 'soft' },
  { d: 'M54 62 Q56 100 76 112 M106 62 Q104 100 84 112' },
  { d: 'M56 74 Q80 82 104 74', role: 'accent' },
  { d: 'M76 112 V134 M84 112 V134' },
  { d: ellipse(80, 122, 6, 3), role: 'soft' },
  { d: 'M76 134 Q60 138 56 144 Q80 152 104 144 Q100 138 84 134' },
  { d: 'M96 84 l6 -3 M95 94 l6 -3 M91 103 l5 -3', role: 'ambient' },
  shadow(80, 152, 30),
]

/**
 * Game of Thrones' drawings, keyed by the id of the record each was drawn
 * for. The Winterfell household's are in `winterfell.ts` (#854), the
 * southern cast's in `south.ts` (#1051), the Night's Watch's in `wall.ts`
 * and the Essos cast's in `essos.ts` (#1052), the places' in `places.ts`
 * (#1053), the northern household's in `north.ts` (#1054), the Vale cast's
 * in `vale.ts` (#1055), the King's Landing cast's in `court.ts` (#1056) and
 * the Riverlands cast's in `riverlands.ts` (#1057), with the four leads
 * drawn for the launch here (owner, #856). Every season-1 character has its
 * own drawing, and so have the season-2 King's Landing cast, in `court.ts`
 * (#1470), stormlands cast, in `stormlands.ts` (#1471), Riverlands and
 * Harrenhal cast, in `riverlands.ts` (#1472), Winterfell and Iron Islands
 * cast, in `north.ts` and `ironborn.ts` (#1473), Wall cast, the rangers in
 * `wall.ts` and the wildlings in `wildlings.ts` (#1474), and Essos and Qarth
 * cast, in `essos.ts` (#1475). The seasons' own, which the home page's
 * frame draws, are in `seasons.ts` (#1601). The third stage's King's
 * Landing cast is drawn in `court.ts` (#1642), its Robb's war and Riverlands
 * cast in `riverlands.ts` (#1643), its Essos cast in `essos.ts` (#1647),
 * Arya's group, the Brotherhood Without Banners, in `brotherhood.ts` (#1644),
 * its Jaime, Brienne and Harrenhal cast in `riverlands.ts` (#1645), its
 * Wall and beyond cast, the brothers of Chett's plot in `wall.ts` and the
 * wildlings in `wildlings.ts` (#1646), its Dragonstone cast in `stormlands.ts`
 * (#1648) and its Bran's road and Theon cast, Myranda, in `north.ts` (#1649).
 * `satisfies` rather than an annotation, so `ArtId` below stays the literal
 * keys.
 */
export const DRAWINGS = {
  ...WINTERFELL_DRAWINGS,
  ...SOUTH_DRAWINGS,
  ...WALL_DRAWINGS,
  ...ESSOS_DRAWINGS,
  ...NORTH_DRAWINGS,
  ...PLACE_DRAWINGS,
  ...VALE_DRAWINGS,
  ...COURT_DRAWINGS,
  ...RIVERLANDS_DRAWINGS,
  ...STORMLANDS_DRAWINGS,
  ...IRONBORN_DRAWINGS,
  ...WILDLING_DRAWINGS,
  ...SEASON_DRAWINGS,
  ...BROTHERHOOD_DRAWINGS,
  'eddard-stark': ICE_STANDING,
  'jon-snow': RUNT,
  'tyrion-lannister': GOBLET,
  'daenerys-targaryen': DRAGON_EGG,
} satisfies Drawings

/** The drawing a record names, by its own id. */
export type ArtId = keyof typeof DRAWINGS

/**
 * The records drawn again later in the story, the Winterfell household's
 * from `winterfell.ts`, the southern cast's from `south.ts`, the Night's
 * Watch's from `wall.ts`, the Essos cast's of three seasons from `essos.ts`
 * (#1052, #1475, #1647), the northern household's from `north.ts`, the Vale
 * cast's from `vale.ts`, the King's Landing cast's from `court.ts`, the
 * Riverlands cast's from `riverlands.ts`, the stormlands cast's from
 * `stormlands.ts`, the second stage's Iron Islands cast's from `ironborn.ts`,
 * the wildlings' from `wildlings.ts` and the third stage's Brotherhood cast's
 * from `brotherhood.ts` (#1644). Eddard Stark is beheaded with Ice in
 * "Baelor" (episode 9) and in Arya V (chapter 66): from there the blade lies
 * flat on the ground, with nobody to hold it.
 */
export const REDRAWINGS: Redrawings = {
  ...winterfellRedrawn,
  ...southRedrawn,
  ...wallRedrawn,
  ...essosRedrawn,
  ...northRedrawn,
  ...valeRedrawn,
  ...courtRedrawn,
  ...riverlandsRedrawn,
  ...stormlandsRedrawn,
  ...ironbornRedrawn,
  ...wildlingsRedrawn,
  ...placesRedrawn,
  ...brotherhoodRedrawn,
  'eddard-stark': [
    {
      episode: 9,
      chapter: 66,
      value: [
        ...moved(ICE, 'translate(0 54) rotate(-90 80 85)'),
        shadow(80, 152, 64),
      ],
    },
    // Ice is gone, and two shorter swords lie where it lay: Tywin has it
    // melted down in "Two Swords" (episode 31). The book has Tobho Mott
    // forge the blades in Tyrion IV, but has Tyrion realise they are Ice
    // only at Joffrey's wedding feast, Tyrion VIII of A Storm of Swords
    // (chapter 204); the pin takes the later chapter, the one sure telling.
    {
      episode: 31,
      chapter: 204,
      value: [
        ...moved(REFORGED, 'translate(-2 112)'),
        ...moved(softened(REFORGED), 'translate(6 136)'),
        shadow(80, 154, 62),
      ],
    },
  ],
  'jon-snow': [
    // The runt beside a spear with a black cloak hung from a crossbar on
    // it, the cloak hatched: on Qhorin Halfhand's orders Jon kills him so
    // that the wildlings will take him for a deserter, and rides with them
    // still sworn to the Watch, in "Valar Morghulis" (episode 20) and in
    // Jon VIII (chapter 142).
    {
      episode: 20,
      chapter: 142,
      value: [
        ...moved(RUNT, 'translate(-26 0)'),
        { d: 'M134 150 V28 M130 28 L134 12 L138 28 Z M116 42 H152' },
        {
          d: 'M118 42 Q114 84 116 124 Q126 118 134 126 Q142 118 152 124 Q154 84 150 42',
        },
        { d: 'M126 46 Q124 84 126 120 M142 46 Q144 84 142 120', role: 'soft' },
        {
          d: 'M118 62 l5 -3 M118 78 l5 -3 M118 94 l5 -3 M118 110 l5 -3 M144 66 l5 -3 M145 82 l5 -3 M145 98 l5 -3',
          role: 'ambient',
        },
      ],
    },
    // The runt alone again: Jon turns on the wildlings and escapes them
    // back to the Wall in "The Rains of Castamere" (episode 29). In A Storm
    // of Swords he breaks away at Queenscrown in Jon V (chapter 185) and is
    // back at Castle Black in Jon VI (chapter 192, #1628).
    { episode: 29, chapter: 192, value: RUNT },
    // The runt howling in the snow: Jon is killed at Castle Black in
    // "Mother's Mercy" (episode 50) and left for dead in Jon XIII of A
    // Dance with Dragons (chapter 341). Ghost howls for him in the show.
    { episode: 50, chapter: 341, value: HOWL },
    // The runt up again beside a black cloak with five rents in it:
    // Melisandre brings him back in "Home" (episode 52), the show's alone.
    // The books have not reached it, so chapter 344, their last, orders it.
    {
      episode: 52,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(RUNT, 'translate(-26 0)'),
        {
          d: 'M100 150 Q100 124 116 112 Q122 108 128 112 Q134 108 140 112 Q156 124 156 150 Z',
        },
        { d: 'M116 112 Q120 122 128 120 Q136 122 140 112', role: 'soft' },
        {
          d: 'M106 136 h5 M104 144 h5 M148 140 h5 M146 132 h5',
          role: 'ambient',
        },
        {
          d: 'M114 146 L122 128 M120 148 L128 130 M126 148 L134 130 M132 148 L140 130 M138 146 L146 128',
        },
      ],
    },
    // The runt before a banner of the three-headed dragon: Bran and Sam
    // tell that he is Rhaegar's son, Aegon Targaryen, in "The Dragon and
    // the Wolf" (episode 67), the show's alone. The books only hint at it,
    // so chapter 344, their last, orders it.
    {
      episode: 67,
      chapter: 344,
      source: 'episode',
      value: [
        { d: `${circle(150, 12, 4)} M150 16 V150` },
        { d: 'M98 22 H150' },
        { d: 'M102 22 V98 L124 86 L146 98 V22' },
        ...moved(
          softened(DRAGON_SIGIL),
          'translate(124 54) scale(0.66) translate(-80 -92)',
        ),
        ...moved(RUNT, 'translate(-24 0)'),
      ],
    },
  ],
  'daenerys-targaryen': [
    // Drogo's pyre burning with three hatchlings on its logs, the fire in
    // the accent: she walks into it and comes out unburnt with her dragons
    // in "Fire and Blood" (episode 10) and in Daenerys X (chapter 73).
    {
      episode: 10,
      chapter: 73,
      value: [
        { d: 'M22 130 H138 M22 142 H138 M22 154 H138' },
        {
          d: `${ellipse(22, 136, 3, 6)} ${ellipse(22, 148, 3, 6)}`,
          role: 'soft',
        },
        { d: 'M52 140 l4 -4 M92 152 l4 -4 M122 140 l4 -4', role: 'ambient' },
        {
          d: 'M24 128 q-4 -8 2 -14 q3 5 6 2 q3 6 -2 12 M62 128 q-4 -8 2 -14 q3 5 6 2 q3 6 -2 12 M106 128 q-4 -8 2 -14 q3 5 6 2 q3 6 -2 12 M144 128 q-4 -8 2 -14 q3 5 6 2 q3 6 -2 12',
          role: 'accent',
        },
        ...moved(HATCHLING, 'translate(38 128)'),
        ...moved(HATCHLING, 'translate(84 128)'),
        ...moved(HATCHLING, 'translate(130 128)'),
        shadow(80, 162, 60),
      ],
    },
    // The egg fallen from its cushion and broken in two on the ground,
    // empty: she dies in "The Iron Throne" (episode 73), the show's alone.
    // The books leave her alive, so chapter 344, their last, orders it.
    {
      episode: 73,
      chapter: 344,
      source: 'episode',
      value: [
        { d: 'M74 104 Q40 104 38 128 Q40 152 74 150' },
        {
          d: 'M74 104 L68 112 L76 118 L68 126 L76 134 L68 142 L74 150',
          role: 'accent',
        },
        { d: 'M98 140 Q104 112 128 108 Q146 110 144 132' },
        {
          d: 'M98 140 L106 136 L110 144 L120 138 L126 146 L136 138 L144 132',
          role: 'soft',
        },
        {
          d: 'M46 116 q4 4 8 0 t8 0 M42 130 q4 4 8 0 t8 0 t8 0 M112 120 q4 4 8 0 t8 0',
          role: 'soft',
        },
        { d: 'M46 142 l5 -3 M54 147 l5 -3 M132 120 l5 -3', role: 'ambient' },
        { d: 'M16 152 H144', role: 'ambient', dashed: true },
      ],
    },
  ],
}
