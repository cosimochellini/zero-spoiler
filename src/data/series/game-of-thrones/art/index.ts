import { type Drawings, moved, type Redrawings } from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'
import type { Stroke } from '~/lib/view/records'

import { COURT_DRAWINGS, courtRedrawn } from './court'
import { ESSOS_DRAWINGS, essosRedrawn } from './essos'
import { SOUTH_DRAWINGS, southRedrawn } from './south'
import { WALL_DRAWINGS, wallRedrawn } from './wall'
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
 * (chapter 2), before it has a name. The accent is the ruff on its chest;
 * the pup is white, so nothing is hatched.
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
  shadow(88, 153, 38),
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
 * Daenerys Targaryen: the bath her maid thinks will scald her, which she
 * steps into without noticing, in Pentos, in episode 1 and in Daenerys I
 * (chapter 4). A round tub in 3/4, the rim with its thickness and the far
 * side hatched; the accent is the steam.
 */
const BATH: Stroke[] = [
  { d: ellipse(80, 100, 46, 11) },
  { d: ellipse(80, 101, 41, 8), role: 'soft' },
  { d: 'M34 100 Q36 126 44 146 Q80 156 116 146 Q124 126 126 100' },
  { d: 'M44 124 Q80 134 116 124', role: 'soft' },
  { d: 'M110 116 l6 -3 M112 126 l6 -3 M112 136 l5 -3', role: 'ambient' },
  { d: 'M62 92 q-6 -10 0 -20 t0 -20', role: 'accent' },
  { d: 'M80 88 q-6 -10 0 -20 t0 -20 t0 -18', role: 'accent' },
  { d: 'M98 92 q-6 -10 0 -20 t0 -20', role: 'accent' },
  shadow(80, 152, 44),
]

/**
 * What every other person shows until their issue draws them (#1054,
 * #1055, #1057): a bust with a blank head and no face, the collar
 * in the record's tint. It stands for nobody, so it tells a reader nothing.
 */
const PERSON: Stroke[] = [
  { d: circle(80, 58, 19) },
  { d: 'M72 76 V88 M88 76 V88', role: 'soft' },
  { d: 'M72 88 Q44 92 38 118 L36 150 M88 88 Q116 92 122 118 L124 150' },
  { d: 'M64 90 Q80 104 96 90', role: 'accent' },
  { d: 'M56 112 Q60 130 58 148 M104 112 Q100 130 102 148', role: 'soft' },
  { d: 'M30 150 H130', role: 'ambient' },
  shadow(80, 154, 46),
]

/**
 * What every place shows until #1053 draws it: a plain square keep on a
 * horizon, its battlements and an arched door, with no banner or mark. It
 * stands for no place in particular, so it tells a reader nothing; the
 * accent is the door.
 */
const PLACE: Stroke[] = [
  { d: 'M24 150 H136', role: 'ambient', dashed: true },
  { d: 'M56 150 V78 H104 V150' },
  {
    d: 'M56 78 V68 H62 V78 M70 78 V68 H76 V78 M84 78 V68 H90 V78 M98 78 V68 H104 V78',
    role: 'soft',
  },
  { d: 'M72 150 V126 Q80 114 88 126 V150', role: 'accent' },
  { d: 'M68 96 V104 M92 96 V104', role: 'soft' },
  {
    d: 'M98 84 l4 -3 M98 96 l4 -3 M98 108 l4 -3 M98 120 l4 -3',
    role: 'ambient',
  },
  shadow(80, 154, 40),
]

/**
 * Game of Thrones' drawings, keyed by the id of the record each was drawn
 * for. The Winterfell household's are in `winterfell.ts` (#854), the
 * southern cast's in `south.ts` (#1051), the Night's Watch's in `wall.ts`
 * and the Essos cast's in `essos.ts` (#1052), and the King's Landing
 * cast's in `court.ts` (#1056), with the four leads drawn for
 * the launch here (owner, #856); every other record
 * shows `PERSON` or `PLACE` until its own issue draws it. `satisfies`
 * rather than an annotation, so `ArtId` below stays the literal keys.
 */
export const DRAWINGS = {
  ...WINTERFELL_DRAWINGS,
  ...SOUTH_DRAWINGS,
  ...WALL_DRAWINGS,
  ...ESSOS_DRAWINGS,
  ...COURT_DRAWINGS,
  'eddard-stark': ICE_STANDING,
  'jon-snow': RUNT,
  'tyrion-lannister': GOBLET,
  'daenerys-targaryen': BATH,
  'hullen': PERSON,
  'jeyne-poole': PERSON,
  'mikken': PERSON,
  'hallis-mollen': PERSON,
  'stiv': PERSON,
  'wallen': PERSON,
  'greatjon-umber': PERSON,
  'smalljon-umber': PERSON,
  'rickard-karstark': PERSON,
  'roose-bolton': PERSON,
  'galbart-glover': PERSON,
  'robett-glover': PERSON,
  'maege-mormont': PERSON,
  'dacey-mormont': PERSON,
  'wendel-manderly': PERSON,
  'marillion': PERSON,
  'willis-wode': PERSON,
  'donnel-waynwood': PERSON,
  'nestor-royce': PERSON,
  'mya-stone': PERSON,
  'vardis-egen': PERSON,
  'mord': PERSON,
  'lyn-corbray': PERSON,
  'anya-waynwood': PERSON,
  'shagga': PERSON,
  'timett': PERSON,
  'chella': PERSON,
  'vayon-poole': PERSON,
  'tomard': PERSON,
  'harwin': PERSON,
  'alyn': PERSON,
  'jason-mallister': PERSON,
  'masha-heddle': PERSON,
  'kevan-lannister': PERSON,
  'addam-marbrand': PERSON,
  'podrick-payne': PERSON,
  'stevron-frey': PERSON,
  'edmure-tully': PERSON,
  'hoster-tully': PERSON,
  'brynden-tully': PERSON,
  'hot-pie': PERSON,
  'lommy': PERSON,
  'jaqen-hghar': PERSON,
  'rorge': PERSON,
  'biter': PERSON,
  'will': PERSON,
  'gared': PERSON,
  'waymar-royce': PERSON,
  'grenn': PERSON,
  'pypar': PERSON,
  'rast': PERSON,
  'dareon': PERSON,
  'halder': PERSON,
  'todder': PERSON,
  'othell-yarwyck': PERSON,
  'bowen-marsh': PERSON,
  'jaremy-rykker': PERSON,
  'othor': PERSON,
  'jafer-flowers': PERSON,
  'donal-noye': PERSON,
  'chett': PERSON,
  'qotho': PERSON,
  'cohollo': PERSON,
  'haggo': PERSON,
  'jhiqui': PERSON,
  'aggo': PERSON,
  'jhogo': PERSON,
  'quaro': PERSON,
  'mago': PERSON,
  'eroeh': PERSON,
  'haunted-forest': PLACE,
  'winterfell': PLACE,
  'pentos': PLACE,
  'kings-landing': PLACE,
  'the-wall': PLACE,
  'winter-town': PLACE,
  'inn-at-the-crossroads': PLACE,
  'darry': PLACE,
  'castle-black': PLACE,
  'dothraki-sea': PLACE,
  'red-keep': PLACE,
  'vaes-dothrak': PLACE,
  'the-eyrie': PLACE,
  'wolfswood': PLACE,
  'kingswood': PLACE,
  'lannister-camp': PLACE,
  'lhazar': PLACE,
  'the-twins': PLACE,
  'great-sept-of-baelor': PLACE,
  'riverrun': PLACE,
  'moles-town': PLACE,
  'bloody-gate': PLACE,
  'moat-cailin': PLACE,
} satisfies Drawings

/** The drawing a record names, by its own id. */
export type ArtId = keyof typeof DRAWINGS

/**
 * The records drawn again later in the story, the Winterfell household's
 * from `winterfell.ts`, the southern cast's from `south.ts`, the Night's
 * Watch's from `wall.ts`, the Essos cast's from `essos.ts` and the King's
 * Landing cast's from `court.ts`. Eddard Stark is beheaded with Ice in "Baelor"
 * (episode 9) and in Arya V (chapter 66): from there the blade lies flat on
 * the ground, with nobody to hold it.
 */
export const REDRAWINGS: Redrawings = {
  ...winterfellRedrawn,
  ...southRedrawn,
  ...wallRedrawn,
  ...essosRedrawn,
  ...courtRedrawn,
  'eddard-stark': [
    {
      episode: 9,
      chapter: 66,
      value: [
        ...moved(ICE, 'translate(0 54) rotate(-90 80 85)'),
        shadow(80, 152, 64),
      ],
    },
  ],
}
