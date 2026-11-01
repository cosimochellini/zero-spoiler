import { type Drawings, moved, type Redrawings } from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'
import type { Stroke } from '~/lib/view/records'

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
 * What every other person shows until #854 draws them: a bust with a blank
 * head and no face, the collar in the record's tint. It stands for nobody,
 * so it tells a reader nothing.
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
 * What the six direwolves show until #854 draws them: one wolf's head in
 * profile, ears up, with no eye or mouth, the ruff in the record's tint.
 */
const WOLF: Stroke[] = [
  {
    d: 'M34 98 L54 88 Q64 72 78 66 L84 42 L96 60 L104 44 L110 66 Q124 78 124 102',
  },
  { d: 'M34 98 Q36 106 50 108 Q68 112 84 120' },
  { d: 'M88 50 L92 62 M104 52 L104 64', role: 'soft' },
  {
    d: 'M124 102 Q134 116 124 126 Q130 140 116 148 Q106 140 96 150 Q88 138 78 144 Q82 130 84 120',
    role: 'accent',
  },
  { d: 'M96 84 Q104 96 100 110 M110 92 Q116 104 112 118', role: 'soft' },
  { d: 'M30 154 H130', role: 'ambient' },
]

/**
 * Game of Thrones' drawings, keyed by the id of the record each was drawn
 * for. Four leads have their own; every other record shows `PERSON` or
 * `WOLF` until #854 draws it (owner, #856). `satisfies` rather than an
 * annotation, so `ArtId` below stays the literal keys.
 */
export const DRAWINGS = {
  'eddard-stark': ICE_STANDING,
  'catelyn-stark': PERSON,
  'robb-stark': PERSON,
  'sansa-stark': PERSON,
  'arya-stark': PERSON,
  'bran-stark': PERSON,
  'rickon-stark': PERSON,
  'jon-snow': RUNT,
  'benjen-stark': PERSON,
  'grey-wind': WOLF,
  'lady-direwolf': WOLF,
  'nymeria': WOLF,
  'summer-direwolf': WOLF,
  'shaggydog': WOLF,
  'ghost-direwolf': WOLF,
  'theon-greyjoy': PERSON,
  'luwin': PERSON,
  'rodrik-cassel': PERSON,
  'old-nan': PERSON,
  'hodor': PERSON,
  'osha': PERSON,
  'mordane': PERSON,
  'jory-cassel': PERSON,
  'jeor-mormont': PERSON,
  'aemon': PERSON,
  'samwell-tarly': PERSON,
  'alliser-thorne': PERSON,
  'yoren': PERSON,
  'cersei-lannister': PERSON,
  'jaime-lannister': PERSON,
  'tyrion-lannister': GOBLET,
  'tywin-lannister': PERSON,
  'joffrey-baratheon': PERSON,
  'myrcella-baratheon': PERSON,
  'tommen-baratheon': PERSON,
  'robert-baratheon': PERSON,
  'renly-baratheon': PERSON,
  'lysa-arryn': PERSON,
  'robin-arryn': PERSON,
  'bronn': PERSON,
  'shae': PERSON,
  'walder-frey': PERSON,
  'ros': PERSON,
  'ilyn-payne': PERSON,
  'barristan-selmy': PERSON,
  'syrio-forel': PERSON,
  'petyr-baelish': PERSON,
  'varys': PERSON,
  'pycelle': PERSON,
  'sandor-clegane': PERSON,
  'janos-slynt': PERSON,
  'gendry': PERSON,
  'gregor-clegane': PERSON,
  'loras-tyrell': PERSON,
  'daenerys-targaryen': BATH,
  'viserys-targaryen': PERSON,
  'drogo': PERSON,
  'jorah-mormont': PERSON,
  'illyrio-mopatis': PERSON,
  'irri': PERSON,
  'doreah': PERSON,
  'rakharo': PERSON,
  'mirri-maz-duur': PERSON,
} satisfies Drawings

/** The drawing a record names, by its own id. */
export type ArtId = keyof typeof DRAWINGS

/**
 * The records drawn again later in the story. Eddard Stark is beheaded with
 * Ice in "Baelor" (episode 9) and in Arya V (chapter 66): from there the
 * blade lies flat on the ground, with nobody to hold it.
 */
export const REDRAWINGS: Redrawings = {
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
