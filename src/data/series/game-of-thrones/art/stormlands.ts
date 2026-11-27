import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import {
  circle,
  dots,
  ellipse,
  polygon,
  SEA,
  shadow,
} from '~/lib/svg/primitives'

/**
 * One of the two shorter swords Ice is forged into, lying flat: the
 * pommel, the wrapped grip, the crossguard and the blade, the ripple down
 * its near face in the accent and its far face hatched. Eddard's stage
 * after Ice is melted lays two of them side by side; Brienne's lays down
 * the one Jaime gives her.
 */
export const REFORGED: Stroke[] = [
  { d: circle(30, 0, 4) },
  { d: 'M34 -3 H50 V3 H34 Z' },
  { d: 'M38 -3 L41 3 M43 -3 L46 3', role: 'soft' },
  { d: 'M50 -11 H55 V11 H50 Z' },
  { d: 'M55 -5 H118 L130 0 L118 5 H55' },
  { d: 'M57 0 H126', role: 'soft' },
  { d: 'M60 -3 q4 2 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0', role: 'accent' },
  {
    d: 'M64 2 l3 3 M76 2 l3 3 M88 2 l3 3 M100 2 l3 3 M112 2 l3 3',
    role: 'ambient',
  },
]

/**
 * Stannis's sword stood on its point: the round pommel, the wrapped grip,
 * the crossguard in 3/4 and the blade with its fuller, the far face
 * hatched. Shared by his first drawing and his crown.
 */
const STANNIS_SWORD: Stroke[] = [
  { d: circle(80, 22, 6) },
  { d: 'M76 28 H84 V54 H76 Z' },
  { d: 'M76 35 L84 39 M76 42 L84 46 M76 49 L84 53', role: 'soft' },
  { d: 'M50 56 Q80 52 110 56 L108 62 Q80 58 52 62 Z' },
  { d: 'M72 61 V132 L80 150 L88 132 V61' },
  {
    d: 'M83 72 l4 -3 M83 88 l4 -3 M83 104 l4 -3 M83 120 l4 -3',
    role: 'ambient',
  },
]

/** The blade's fuller, the accent once the fire on it is gone. */
const FULLER = 'M80 64 V144'

/**
 * Stannis Baratheon: the sword he pulls burning from the statue of the
 * Mother as the Seven burn on Dragonstone, the sword Melisandre names
 * Lightbringer, in "The North Remembers" (episode 11) and in Davos I
 * (chapter 84). The accent is the fire running up both edges of the blade;
 * sparks hang round it.
 */
const LIGHTBRINGER: Stroke[] = [
  ...STANNIS_SWORD,
  { d: FULLER, role: 'soft' },
  {
    d: 'M72 136 Q60 128 64 116 Q68 122 72 120 Q58 108 64 96 Q68 104 72 102 Q60 88 68 76 Q70 84 72 84 M88 128 Q100 118 96 106 Q92 112 88 110 Q102 98 94 86 Q92 94 88 92 Q98 80 90 70',
    role: 'accent',
  },
  {
    d: dots([
      [52, 104],
      [108, 80],
      [56, 74],
      [112, 116],
    ]),
    role: 'ambient',
  },
  shadow(80, 153, 26),
]

/**
 * A crown of red gold whose points are shaped as flames, the crown of
 * Stannis and his queen, in 3/4 with its far rim lighter, set on the
 * ground at the origin.
 */
const FLAME_CROWN: Stroke[] = [
  {
    d: 'M-22 -6 Q-25 -16 -16 -26 Q-18 -16 -9 -4 Q-9 -20 0 -30 Q0 -18 9 -4 Q18 -16 16 -26 Q25 -16 22 -6',
  },
  { d: 'M-22 -6 Q0 2 22 -6 V2 Q0 10 -22 2 Z' },
  { d: 'M-22 -6 Q0 -12 22 -6', role: 'soft' },
  { d: 'M12 0 l4 -3 M4 2 l4 -3', role: 'ambient' },
]

/**
 * Melisandre's choker of red gold, a deep stiff band in 3/4, its far side
 * hidden by the throat it closes round, a groove along its middle, and the
 * great oval ruby set at its front, its flat top facet drawn inside it.
 */
const CHOKER: Stroke[] = [
  { d: 'M52 82 A28 10 0 0 0 108 82 V94 A28 10 0 0 1 52 94 Z' },
  { d: 'M52 88 A28 10 0 0 0 108 88', role: 'soft' },
  { d: ellipse(80, 117, 11, 14), role: 'accent' },
  { d: polygon(80, 117, 7, 8), role: 'soft' },
  { d: 'M98 98 l4 -5 M104 95 l3 -4', role: 'ambient' },
]

/**
 * A jeweller's stand at the height of a throat: a neck drawn in at the
 * middle and cut flat at the top, the shoulders flaring to a flat base,
 * its far side hatched.
 */
const THROAT_STAND: Stroke[] = [
  { d: 'M58 82 Q65 62 60 44 M102 82 Q95 62 100 44' },
  { d: ellipse(80, 44, 20, 5), role: 'soft' },
  {
    d: 'M58 100 Q56 112 44 118 Q28 124 24 140 H136 Q132 124 116 118 Q104 112 102 100',
  },
  { d: 'M96 52 l4 -3 M96 66 l4 -3 M118 126 l5 -3', role: 'ambient' },
]

/**
 * Melisandre: her choker, the great ruby at her throat she is never seen
 * without, from "The North Remembers" (episode 11) and the prologue
 * (chapter 74), closed round a stand at a throat's height. The ruby is the
 * accent.
 */
const MELISANDRE_CHOKER: Stroke[] = [
  ...THROAT_STAND,
  ...CHOKER,
  shadow(80, 148, 58),
]

/**
 * The choker taken off and laid flat, the band seen almost edge on, the
 * ruby at its front in the accent. Her two show stages lay it down.
 */
const CHOKER_LAID: Stroke[] = [
  { d: ellipse(66, 136, 40, 10) },
  { d: 'M30 136 A36 7 0 0 1 102 136', role: 'soft' },
  { d: 'M60 146 L66 142 L72 146 L66 150 Z', role: 'accent' },
  { d: 'M88 142 l5 -3 M96 139 l5 -3', role: 'ambient' },
]

/**
 * Davos Seaworth: the leather pouch on its cord that holds the finger
 * bones Stannis took from him, open on the table with two of the bones
 * fallen out in the accent. He wears it from the prologue (chapter 74),
 * and tells Melisandre what is in it in "Garden of Bones" (episode 14).
 */
const BONE_POUCH: Stroke[] = [
  { d: 'M58 88 Q42 116 50 140 Q76 154 104 142 Q114 116 102 88' },
  { d: 'M58 88 Q60 76 68 80 Q72 72 80 78 Q88 72 92 80 Q100 76 102 88' },
  { d: 'M60 90 Q80 98 100 90', role: 'soft' },
  {
    d: 'M66 94 Q36 96 30 120 Q26 140 44 150 M94 94 Q120 92 128 112',
    role: 'soft',
  },
  { d: 'M64 112 Q70 128 66 140 M84 104 Q90 124 86 146', role: 'soft' },
  {
    d: 'M112 144 Q114 140 118 142 L128 138 Q132 134 134 138 Q138 140 134 143 L124 147 Q122 151 118 149 Q114 148 116 146 M120 128 Q120 124 124 125 L130 130 Q134 128 135 132 Q134 136 130 135 L124 130 Q120 132 120 128',
    role: 'accent',
  },
  { d: 'M98 112 l6 -3 M100 124 l6 -3 M98 136 l6 -3', role: 'ambient' },
  shadow(84, 154, 50),
]

/** A chain link as `[x, y, angle]`: its centre, and its turn in degrees. */
type Link = [number, number, number]

/** One decimal, as the helpers in `~/lib/svg/primitives` write them. */
const tenth = (value: number): string => String(Math.round(value * 10) / 10)

/** Each link as an ellipse of these radii, turned along the chain. */
function links(at: Link[], rx: number, ry: number): string {
  return at
    .map(([x, y, angle]) => {
      const dx = rx * Math.cos((angle * Math.PI) / 180)
      const dy = rx * Math.sin((angle * Math.PI) / 180)
      const from = `${tenth(x - dx)} ${tenth(y - dy)}`
      const arc = `A${tenth(rx)} ${tenth(ry)} ${String(angle)} 1 0`
      return `M${from} ${arc} ${tenth(x + dx)} ${tenth(y + dy)} ${arc} ${from}`
    })
    .join(' ')
}

/** Cressen's chain lying slack: the links turned flat, every other one. */
const CHAIN_FLAT: Link[] = [
  [20, 146, 15],
  [41, 151, 8],
  [62, 152, 1],
  [83, 151, -6],
  [104, 148, -15],
  [124, 140, -37],
  [130, 122, 69],
  [93, 108, -3],
  [72, 111, -13],
  [53, 119, -52],
  [58, 135, 21],
  [79, 134, -11],
]

/** The links between them, seen edge on. */
const CHAIN_ON_EDGE: Link[] = [
  [30, 149, 13],
  [51, 152, 4],
  [73, 152, -3],
  [94, 150, -10],
  [115, 144, -21],
  [131, 132, -71],
  [124, 114, 37],
  [104, 108, 3],
  [83, 109, -7],
  [62, 114, -24],
  [50, 129, 72],
  [69, 136, -4],
]

/** The one flat link at the top of the heap that takes the accent. */
const CHAIN_LINK: Link = [114, 109, 16]

/**
 * Cressen: the maester's chain he leaves on the stone floor of the
 * Painted Table's chamber, slack in a heap, its links of mixed metals and
 * the dark iron ones hatched. He dies there of his own poison in "The
 * North Remembers" (episode 11) and in the prologue (chapter 74), the
 * scenes his record opens on. The links lie as a chain's do, each one
 * turned flat between two seen edge on; the accent is one link.
 */
const FALLEN_CHAIN: Stroke[] = [
  { d: links(CHAIN_FLAT, 7.5, 4.5) },
  { d: links([...CHAIN_FLAT, CHAIN_LINK], 4, 1.6), role: 'soft' },
  { d: links(CHAIN_ON_EDGE, 7, 1.4) },
  { d: links([CHAIN_LINK], 7.5, 4.5), role: 'accent' },
  {
    d: 'M37 154 l3 -5 M42 154 l3 -5 M100 151 l3 -5 M105 151 l3 -5 M49 122 l3 -5 M54 122 l3 -5',
    role: 'ambient',
  },
  shadow(78, 162, 64),
]

/**
 * Stannis's letter as his scribe reads it out: a sheet curling at both
 * ends, the lines of writing left as soft rules, and a round wax seal
 * hanging from it on a ribbon.
 */
const LETTER_SHEET: Stroke[] = [
  { d: 'M42 40 H118 V134 H42 Z' },
  {
    d: 'M42 40 Q34 34 42 28 Q50 30 50 40 M118 134 Q126 140 118 146 Q110 144 110 134',
  },
  {
    d: 'M54 56 H106 M54 68 H100 M54 80 H106 M54 92 H96 M54 104 H104',
    role: 'soft',
  },
  { d: 'M100 112 l6 -3 M100 122 l6 -3', role: 'ambient' },
]

/**
 * Matthos Seaworth: the letter he has written for Stannis, naming
 * Joffrey a bastard, which he reads out at the Painted Table in "The North
 * Remembers" (episode 11). The accent is the seal hanging from it.
 */
const MATTHOS_LETTER: Stroke[] = [
  ...LETTER_SHEET,
  { d: 'M80 134 V148', role: 'soft' },
  { d: circle(80, 154, 7), role: 'accent' },
  shadow(80, 172, 40),
]

/**
 * Salladhor Saan: one of his Lysene war galleys under sail, the hull
 * side on with its beak at the bow, the far side of the hull hatched, its
 * banks of oars in the water. He lends Stannis thirty of them in "The
 * Night Lands" (episode 12) and in Davos I (chapter 84). The accent is the
 * sail.
 */
const GALLEY: Stroke[] = [
  { d: 'M20 132 L30 146 H124 Q138 140 146 124 L130 128 H34 Z' },
  { d: 'M30 146 L14 150', role: 'soft' },
  { d: 'M78 128 V30 M60 40 H96' },
  { d: 'M60 40 Q54 80 60 112 H96 Q102 80 96 40', role: 'accent' },
  { d: 'M78 30 L94 24 L78 20', role: 'soft' },
  {
    d: 'M40 140 L32 160 M54 142 L46 162 M68 142 L60 162 M82 142 L74 162 M96 142 L88 162 M110 140 L102 160',
    role: 'soft',
  },
  { d: 'M50 136 l5 -4 M80 136 l5 -4 M110 136 l5 -4', role: 'ambient' },
  { d: 'M130 128 Q138 118 132 108', role: 'soft' },
  ...SEA,
]

/**
 * Three glass jars on a shelf, each with its lid and the murky line of
 * what it holds; the far side of each is hatched. The middle jar's line is
 * the accent.
 */
const JAR_SHELF: Stroke = { d: 'M14 146 H146 M14 152 H146', role: 'ambient' }
const JARS: Stroke[] = [
  { d: 'M28 146 V104 Q28 98 34 98 H56 Q62 98 62 104 V146' },
  { d: 'M30 98 V92 H60 V98', role: 'soft' },
  { d: 'M64 146 V82 Q64 74 72 74 H96 Q104 74 104 82 V146' },
  { d: 'M66 74 V66 H102 V74' },
  { d: 'M106 146 V112 Q106 106 112 106 H128 Q134 106 134 112 V146' },
  { d: 'M108 106 V100 H132 V106', role: 'soft' },
  { d: 'M64 96 Q74 92 84 96 Q94 100 104 96', role: 'accent' },
  { d: 'M28 116 Q45 112 62 116 M106 122 Q120 118 134 122', role: 'soft' },
  {
    d: 'M54 110 l5 -4 M96 92 l5 -4 M96 112 l5 -4 M126 120 l5 -4',
    role: 'ambient',
  },
  JAR_SHELF,
]

/**
 * Selyse Baratheon: the glass jars in her chamber that keep her three
 * stillborn sons, which she shows Stannis in "Kissed by Fire" (episode 25),
 * the show's alone; the drawing serves both media, as the show is its
 * reference.
 */
const SELYSE_JARS: Stroke[] = [...JARS, shadow(80, 160, 60)]

/**
 * An open book in 3/4: the two pages curving up from the spine, the
 * lines of text left as soft rules, the boards beneath and their far edge
 * hatched, and a ribbon marker hanging from the spine.
 */
const OPEN_BOOK: Stroke[] = [
  {
    d: 'M80 96 Q56 84 24 92 L20 130 Q52 124 80 136 Q108 124 140 130 L136 92 Q104 84 80 96 Z',
  },
  { d: 'M80 96 V136', role: 'soft' },
  { d: 'M20 130 L18 136 Q52 130 80 142 Q108 130 142 136 L140 130' },
  {
    d: 'M32 102 Q50 98 70 104 M32 112 Q50 108 70 114 M90 104 Q110 98 128 102 M90 114 Q110 108 128 112',
    role: 'soft',
  },
  { d: 'M80 142 Q84 152 80 162 L84 158 L86 164', role: 'accent' },
  { d: 'M110 136 l5 -3 M124 136 l5 -3', role: 'ambient' },
]

/**
 * Shireen Baratheon: the book of Aegon the Conqueror's wars that she
 * brings Davos in the dungeon, and teaches him to read from, in "Kissed by
 * Fire" (episode 25). The accent is its ribbon.
 */
const SHIREEN_BOOK: Stroke[] = [...OPEN_BOOK, shadow(80, 160, 58)]

/**
 * A breastplate of plate in 3/4 on an armour stand: the gorget, the two
 * pauldrons, the ridge down its front and the lames of the fauld, the far
 * side hatched. The accent is the breastplate itself.
 */
const BREASTPLATE: Stroke[] = [
  { d: 'M62 40 Q80 48 98 40 L98 34 Q80 42 62 34 Z' },
  {
    d: 'M60 44 Q80 56 100 44 L114 50 Q106 60 108 74 Q112 94 104 112 Q100 120 102 128 Q80 136 58 128 Q60 120 56 112 Q48 94 52 74 Q54 60 46 50 Z',
    role: 'accent',
  },
  { d: 'M80 54 Q84 92 80 132', role: 'soft' },
  {
    d: 'M46 50 Q32 52 28 68 Q38 72 48 64 M114 50 Q128 52 132 68 Q122 72 112 64',
  },
  { d: 'M32 60 Q38 62 44 58 M128 60 Q122 62 116 58', role: 'soft' },
  { d: 'M58 128 Q80 136 102 128 L104 136 Q80 144 56 136 Z' },
  { d: 'M100 72 l6 -4 M102 90 l6 -4 M98 108 l6 -4', role: 'ambient' },
  { d: 'M80 142 V150 M66 150 H94', role: 'soft' },
  shadow(80, 154, 30),
]

/**
 * Brienne of Tarth: her plate, the deep blue armour she wins Renly's
 * tourney in and takes off her helm in, in "What Is Dead May Never Die"
 * (episode 13) and in Catelyn II (chapter 96).
 */
const BRIENNE_PLATE: Stroke[] = BREASTPLATE

/**
 * The gown Brienne is made to wear at Harrenhal, on the same stand as her
 * plate: broad at the shoulders, long sleeves, a full skirt to the floor,
 * the far side hatched. The accent is the fur along its neckline.
 */
const HARRENHAL_GOWN: Stroke[] = [
  { d: `${ellipse(80, 36, 8, 4)} M80 40 V48`, role: 'soft' },
  {
    d: 'M54 54 Q80 46 106 54 L122 62 Q128 82 124 100 L116 98 Q116 84 110 72 Q106 86 100 100 Q120 124 128 150 Q80 162 32 150 Q40 124 60 100 Q54 86 50 72 Q44 84 44 98 L36 100 Q32 82 38 62 Z',
  },
  { d: 'M54 54 q4 5 8 1 t8 2 t10 1 t10 -1 t8 -2 t8 -1', role: 'accent' },
  { d: 'M60 100 Q80 108 100 100', role: 'soft' },
  {
    d: 'M70 106 Q62 128 58 154 M80 108 V158 M90 106 Q98 128 102 154',
    role: 'soft',
  },
  { d: 'M36 100 q4 3 8 -2 M116 98 q4 3 8 -2', role: 'soft' },
  {
    d: 'M108 122 l6 -3 M114 136 l6 -3 M118 64 l5 -3 M120 78 l5 -3',
    role: 'ambient',
  },
  shadow(80, 160, 50),
]

/**
 * A folded cloak of many colours, the stripes of King Renly's Rainbow
 * Guard across its folds, lying on the ground; the stripes are the accent.
 */
const RAINBOW_CLOAK: Stroke[] = [
  { d: 'M22 126 L100 112 L138 128 L60 144 Z' },
  { d: 'M22 126 V134 L60 152 L138 136 V128', role: 'soft' },
  { d: 'M60 144 V152', role: 'soft' },
  { d: 'M60 144 Q74 132 100 112', role: 'soft' },
  {
    d: 'M38 123 L76 141 M54 120 L92 138 M70 117 L108 135 M86 114 L122 131',
    role: 'accent',
  },
  { d: 'M104 142 l5 -3 M118 139 l5 -3', role: 'ambient' },
  shadow(80, 162, 60),
]

/**
 * A gown on a dressmaker's form: the round neck of the form, the
 * bodice cut low between bare shoulders, the waist drawn in and the skirt
 * falling to the floor in folds, its far side hatched.
 */
const GOWN: Stroke[] = [
  { d: `${ellipse(80, 34, 8, 4)} M80 38 V48`, role: 'soft' },
  { d: 'M58 56 Q80 48 102 56', role: 'soft' },
  { d: 'M58 56 L64 66 Q70 90 72 96 Q80 104 88 96 Q90 90 96 66 L102 56' },
  { d: 'M64 66 L80 96 L96 66', role: 'accent' },
  { d: 'M72 96 Q56 120 40 150 Q80 160 120 150 Q104 120 88 96' },
  {
    d: 'M74 104 Q64 128 58 152 M80 106 V156 M86 104 Q96 128 102 152',
    role: 'soft',
  },
  { d: 'M104 128 l6 -3 M110 140 l6 -3', role: 'ambient' },
  shadow(80, 160, 46),
]

/**
 * Margaery Tyrell: her gown, cut low and bare at the shoulders, the dress
 * she is shown to the court in as Renly's young queen in "What Is Dead May
 * Never Die" (episode 13) and in Catelyn II (chapter 96). The neckline is
 * the accent.
 */
const MARGAERY_GOWN: Stroke[] = GOWN

/**
 * A queen's small crown of antlers with roses wound through them, at the
 * origin: the band in 3/4, its far rim lighter.
 */
const ROSES = `${circle(-6, -6, 2.5)} ${circle(6, -6, 2.5)}`
const ROSES_SOFT: Stroke = { d: ROSES, role: 'soft' }
const ROSE_CROWN: Stroke[] = [
  { d: 'M-16 -2 Q0 4 16 -2 V4 Q0 10 -16 4 Z' },
  { d: 'M-16 -2 Q0 -8 16 -2', role: 'soft' },
  {
    d: 'M-12 -4 L-16 -16 L-12 -12 L-12 -20 M0 -6 L0 -22 L-4 -16 M0 -18 L4 -14 M12 -4 L16 -16 L12 -12 L12 -20',
  },
  ROSES_SOFT,
]

/**
 * A golden chalice with seven faces, the bowl deep and faceted, a jewel
 * set in each face, the knop on its stem and its broad foot; the far faces
 * hatched. The accent is the rim.
 */
const CHALICE: Stroke[] = [
  { d: ellipse(80, 40, 34, 8), role: 'accent' },
  { d: 'M46 40 Q48 84 70 100 H90 Q112 84 114 40' },
  { d: 'M60 46 Q62 80 72 98 M80 48 V100 M100 46 Q98 80 88 98', role: 'soft' },
  {
    d: dots([
      [56, 60],
      [70, 64],
      [90, 64],
      [104, 60],
    ]),
    role: 'soft',
  },
  { d: 'M74 100 V132 M86 100 V132' },
  { d: ellipse(80, 114, 9, 4) },
  { d: 'M74 132 Q54 136 48 144 Q80 154 112 144 Q106 136 86 132' },
  { d: 'M104 54 l6 -3 M104 70 l5 -3 M98 86 l5 -3', role: 'ambient' },
]

/**
 * Mace Tyrell: the seven-faced golden chalice he gives Joffrey at the
 * wedding, in "The Lion and the Rose" (episode 32) and in Sansa IV of A
 * Storm of Swords (chapter 203).
 */
const MACE_CHALICE: Stroke[] = [...CHALICE, shadow(80, 152, 34)]

/**
 * A leather riding glove stood on its flared cuff, fingers up, the thumb
 * out to one side, the seams soft and the far side hatched. The accent is
 * the cuff.
 */
const GLOVE: Stroke[] = [
  {
    d: 'M58 104 L56 58 Q56 50 62 50 Q68 50 68 58 L69 46 Q70 38 76 38 Q82 38 82 46 L83 44 Q84 36 90 36 Q96 38 95 46 L96 56 Q98 50 103 52 Q108 54 106 62 L104 104',
  },
  { d: 'M58 104 Q44 90 36 94 Q32 100 40 108 Q50 116 58 116' },
  { d: 'M68 58 V82 M82 46 V82 M95 46 V82', role: 'soft' },
  {
    d: 'M58 104 L52 138 Q80 148 110 138 L104 104 Q80 112 58 104 Z',
    role: 'accent',
  },
  { d: 'M56 124 Q80 132 106 124', role: 'soft' },
  { d: 'M96 70 l5 -3 M98 88 l5 -3 M100 118 l5 -3', role: 'ambient' },
  shadow(80, 148, 34),
]

/**
 * Cortnay Penrose: the glove he throws down at Stannis at the parley
 * under Storm's End, challenging him to single combat, in Davos II
 * (chapter 116), the record the books' alone.
 */
const CORTNAY_GLOVE: Stroke[] = GLOVE

/** Ground, as a dashed line. */
const GROUND: Stroke = { d: 'M14 156 H146', role: 'ambient', dashed: true }

/**
 * A torch stood upright: the haft, its grain soft and its far side
 * hatched, the head wrapped in two bands, and the flame in the accent with
 * a smaller tongue inside it and sparks above.
 */
const TORCH_UPRIGHT: Stroke[] = [
  { d: 'M74 74 L77 148 Q80 152 83 148 L86 74' },
  { d: 'M79 84 Q81 110 79 140', role: 'soft' },
  { d: 'M68 56 Q80 51 92 56 V74 Q80 79 68 74 Z' },
  { d: 'M68 62 Q80 67 92 62 M68 68 Q80 73 92 68', role: 'soft' },
  {
    d: 'M70 54 Q58 42 66 26 Q69 35 73 34 Q70 18 80 6 Q88 20 86 30 Q90 26 93 20 Q104 38 90 54',
    role: 'accent',
  },
  { d: 'M77 52 Q71 44 78 34 Q86 44 83 52', role: 'soft' },
  {
    d: 'M88 60 l3 -2 M87 92 l3 -2 M86 110 l3 -2 M85 128 l3 -2',
    role: 'ambient',
  },
  {
    d: dots([
      [56, 22],
      [104, 14],
      [100, 46],
    ]),
    role: 'ambient',
  },
]

/**
 * Axell Florent: the torch he carries down to the cells of Dragonstone and
 * takes away again, leaving his brother Alester in the dark, when he brings
 * Davos before the king in Davos IV (chapter 180); the same chapter has him
 * claim to see Stannis's victory in the flames. The record is the books'
 * alone. The torch leans as he carries it; the flame is the accent.
 */
const AXELL_TORCH: Stroke[] = [
  ...moved(TORCH_UPRIGHT, 'rotate(16 80 100)'),
  shadow(80, 176, 24),
]

/** A leech, fat with blood, at the origin: its body and its rings. */
const LEECH_BODY =
  'M-26 4 Q-22 -3 -10 -7 Q4 -12 16 -8 Q26 -4 26 2 Q24 9 10 9 Q-6 10 -18 7 Q-24 6 -26 4 Z'
const LEECH_RINGS: Stroke = {
  d: 'M-14 -5 Q-16 1 -13 8 M-5 -8 Q-7 1 -4 9 M4 -10 Q2 0 5 9 M13 -9 Q11 0 14 9',
  role: 'soft',
}
const LEECH: Stroke[] = [{ d: LEECH_BODY }, LEECH_RINGS]

/**
 * A brazier on three legs: the bowl in 3/4 with its rim, the coals heaped
 * in it, two flames rising, and the far side hatched.
 */
const BRAZIER: Stroke[] = [
  { d: ellipse(122, 92, 22, 6) },
  { d: 'M100 92 Q102 110 122 115 Q142 110 144 92' },
  { d: 'M108 110 L102 150 M136 110 L142 150 M122 115 V152' },
  { d: 'M104 90 q4 -5 7 0 t7 0 t7 0 t7 0 t7 0', role: 'soft' },
  {
    d: 'M112 88 q-5 -10 1 -20 q2 6 5 4 q5 9 -1 16 M128 88 q-5 -14 3 -26 q3 9 6 5 q6 12 -2 21',
    role: 'soft',
  },
  { d: 'M136 100 l4 -3 M132 107 l4 -3', role: 'ambient' },
]

/**
 * Edric Storm: the three leeches fat with his blood that Stannis throws
 * into the brazier one at a time, naming the three false kings, in Davos IV
 * (chapter 180), the chapter where Melisandre asks for the boy himself to
 * burn. The record is the books' alone (the show gives the leeches to
 * Gendry). The leeches lie by the brazier; the nearest is the accent.
 */
const EDRIC_LEECHES: Stroke[] = [
  ...BRAZIER,
  ...moved(
    [{ d: LEECH_BODY, role: 'accent' }, LEECH_RINGS],
    'translate(26 145) scale(0.78)',
  ),
  ...moved(LEECH, 'translate(66 145) scale(-0.78 0.78)'),
  ...moved(LEECH, 'translate(46 126) rotate(-8) scale(0.78)'),
  { d: 'M8 152 H152', role: 'ambient', dashed: true },
]

/**
 * The circle of flowers round the fox's head, one flower left out where
 * its chin pokes through.
 */
const FLOWER_RING = `${circle(120, 72, 3)} ${circle(113, 91.3, 3)} ${circle(67, 91.3, 3)} ${circle(60, 72, 3)} ${circle(62.8, 59.3, 3)} ${circle(90, 42, 3)} ${circle(117.2, 59.3, 3)}`

/**
 * A banner of House Florent as the books blazon it: the fox's head, with
 * no face, its chin poking through a circle of flowers. The far fold is
 * hatched; the flowers are the accent.
 */
const FLORENT_CLOTH: Stroke[] = [
  {
    d: 'M44 30 Q70 22 96 30 Q118 36 136 30 L134 118 Q114 124 94 118 Q70 110 44 118',
  },
  { d: 'M124 36 Q120 76 124 120', role: 'soft' },
  { d: 'M127 50 l5 -3 M127 72 l5 -3 M127 94 l5 -3', role: 'ambient' },
  { d: FLOWER_RING, role: 'accent' },
  {
    d: 'M90 104 L78 88 L64 84 L71 74 L68 46 L83 60 H97 L112 46 L109 74 L116 84 L102 88 Z',
  },
  {
    d: 'M72 54 L80 62 M108 54 L100 62 M71 74 L80 80 M109 74 L100 80',
    role: 'soft',
  },
]

/**
 * Alester Florent: the banner of his house flying from its staff, the
 * red-gold fox whose snout pokes through a circle of lapis lazuli flowers,
 * for the lord of Brightwater and Stannis's Hand, whose letter offering
 * peace to Tywin to win the castle back sends him to the cells in Davos III
 * (chapter 169); his record opens in Davos IV (chapter 180). The books'
 * alone. Nothing in either chapter is his own, so his house's arms stand
 * in.
 */
const FLORENT_BANNER: Stroke[] = [
  { d: `${circle(40, 16, 4)} M40 20 V150` },
  ...FLORENT_CLOTH,
  shadow(40, 156, 18),
]

/**
 * The banner of House Seaworth flying from its staff, swallow-tailed: a
 * ship whose sail bears an onion, the onion in the accent and the far
 * fold hatched.
 */
const SEAWORTH_BANNER: Stroke[] = [
  { d: `${circle(120, 16, 4)} M120 20 V150` },
  {
    d: 'M116 30 Q96 24 76 30 Q56 36 30 30 L42 68 L30 106 Q54 112 76 106 Q96 100 116 106',
  },
  { d: 'M50 36 Q46 70 50 108', role: 'soft' },
  { d: 'M36 46 l5 -3 M40 64 l5 -3 M36 88 l5 -3', role: 'ambient' },
  { d: 'M50 84 Q56 94 64 94 H96 Q104 94 108 84 Z' },
  { d: 'M80 84 V38' },
  { d: 'M64 44 H96 Q98 62 96 80 H64 Q62 62 64 44 Z', role: 'soft' },
  {
    d: 'M80 46 Q80 54 72 58 Q64 64 68 72 Q74 80 86 78 Q96 74 92 64 Q88 56 80 54 M80 46 l-3 -4 M80 46 l3 -5 M76 79 l-2 4 M80 80 v4 M84 79 l2 4',
    role: 'accent',
  },
  shadow(120, 156, 18),
]

/**
 * The stormlands cast of the second season (#1464), keyed by record id:
 * Stannis's court on Dragonstone, Renly's at Bitterbridge and Storm's End;
 * and the third stage's Dragonstone cast (#1648).
 */
export const STORMLANDS_DRAWINGS = {
  'stannis-baratheon': LIGHTBRINGER,
  'melisandre': MELISANDRE_CHOKER,
  'davos-seaworth': BONE_POUCH,
  'cressen': FALLEN_CHAIN,
  'matthos-seaworth': MATTHOS_LETTER,
  'salladhor-saan': GALLEY,
  'selyse-baratheon': SELYSE_JARS,
  'shireen-baratheon': SHIREEN_BOOK,
  'brienne-of-tarth': BRIENNE_PLATE,
  'margaery-tyrell': MARGAERY_GOWN,
  'mace-tyrell': MACE_CHALICE,
  'cortnay-penrose': CORTNAY_GLOVE,
  'axell-florent': AXELL_TORCH,
  'alester-florent': FLORENT_BANNER,
  'edric-storm': EDRIC_LEECHES,
} satisfies Drawings

/** The stormlands cast drawn again later in the story. */
export const stormlandsRedrawn: Redrawings = {
  'stannis-baratheon': [
    // The crown of red gold with its flame-shaped points set at the
    // sword's foot: the book's king wears it at the parley, Catelyn III
    // (chapter 105). The show's Stannis never wears a crown, so the stage
    // is the book's alone and episode 14, the show's parley, only orders
    // it (owner, 2026-11-15: a crown is a costume).
    {
      episode: 14,
      chapter: 105,
      source: 'chapter',
      value: [
        ...LIGHTBRINGER,
        ...moved(FLAME_CROWN, 'translate(126 150)'),
        shadow(126, 156, 26),
      ],
    },
    // The sword fallen flat, the fire gone from it and the fuller taking
    // the accent: Brienne executes him in the woods after the battle at
    // Winterfell in "Mother's Mercy" (episode 50). The show's alone (the
    // books leave him alive); chapter 344, the last, orders it.
    {
      episode: 50,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(
          [...STANNIS_SWORD, { d: FULLER, role: 'accent' }],
          'translate(0 54) rotate(-90 80 85)',
        ),
        GROUND,
      ],
    },
  ],
  'melisandre': [
    // A shadow in a man's shape rising behind the choker, hatched through,
    // the ruby glowing: Davos rows her under Storm's End and watches her
    // give birth to it in "Garden of Bones" (episode 14) and in Davos II
    // (chapter 116), the first time either medium shows her power.
    {
      episode: 14,
      chapter: 116,
      value: [
        {
          d: 'M80 16 Q98 16 102 38 Q104 52 98 60 Q120 72 126 108 L130 150 M80 16 Q62 16 58 38 Q56 52 62 60 Q40 72 34 108 L30 150',
        },
        {
          d: 'M64 46 L84 22 M60 72 L96 34 M46 100 L102 52 M38 126 L72 98 M110 92 L120 84',
          role: 'ambient',
        },
        ...moved(CHOKER, 'translate(32 64) scale(0.6)'),
        {
          d: 'M80 104 V96 M66 110 l-6 -4 M94 110 l6 -4 M62 124 h-8 M98 124 h8',
          role: 'ambient',
        },
        shadow(80, 152, 50),
      ],
    },
    // The choker laid down by a standing mirror: she takes it off at Castle
    // Black and shows her true age in "The Red Woman" (episode 51). The
    // show's alone; the books never show it, so chapter 344 orders it.
    {
      episode: 51,
      chapter: 344,
      source: 'episode',
      value: [
        ...CHOKER_LAID,
        { d: `${ellipse(120, 92, 16, 22)} M120 114 V150 M108 150 H132` },
        { d: 'M110 84 l8 -8 M112 96 l14 -14', role: 'soft' },
        { d: 'M18 150 H146', role: 'ambient' },
      ],
    },
    // The choker lying alone in the snow: she takes it off outside the
    // gates of Winterfell and dies before dawn in "The Long Night" (episode
    // 70). The show's alone (the books leave her alive); chapter 344 orders
    // it.
    {
      episode: 70,
      chapter: 344,
      source: 'episode',
      value: [
        ...CHOKER_LAID,
        { d: 'M14 150 H146', role: 'ambient', dashed: true },
        {
          d: dots([
            [24, 96],
            [52, 70],
            [92, 60],
            [128, 84],
            [116, 116],
            [40, 118],
            [140, 130],
          ]),
          role: 'ambient',
        },
      ],
    },
  ],
  'davos-seaworth': [
    // The pouch drawn shut, lying on its side alone on a wet rock at the
    // waterline, its cord trailing down the stone: his ship burns in the
    // wildfire on the Blackwater and he goes into the water, in
    // "Blackwater" (episode 19) and in Davos III (chapter 132). Neither
    // tells whether he lives, so he is drawn missing, as Benjen is. The
    // cord is the accent.
    {
      episode: 19,
      chapter: 132,
      value: [
        {
          d: 'M12 152 L20 140 L40 134 L62 137 L84 130 L112 134 L134 140 L148 152',
        },
        { d: 'M84 130 L92 142 L88 152 M40 134 L44 144', role: 'soft' },
        { d: 'M120 142 l5 -3 M130 147 l5 -3 M98 146 l4 -2.4', role: 'ambient' },
        {
          d: 'M60 136 Q52 126 60 118 Q74 108 96 112 Q112 116 112 128 Q110 138 96 140 Q76 142 60 136 Z',
        },
        {
          d: 'M60 120 Q52 117 46 121 Q51 127 46 133 Q52 137 60 134',
          role: 'soft',
        },
        { d: 'M72 116 Q78 126 74 138 M90 113 Q96 126 92 140', role: 'soft' },
        {
          d: 'M61 118 Q56 127 61 136 Q48 140 42 147 Q38 153 28 156',
          role: 'accent',
        },
        ...SEA,
      ],
    },
    // The pouch again, as he first wore it: a Lysene galley of Salladhor's
    // picks him up off his rock in "Valar Dohaeris" (episode 21), and the
    // show's Davos keeps his finger bones (#1648). The books part here (the
    // next stage), so the stage is the show's alone and Davos I of A Storm
    // of Swords (chapter 149), the same rescue, only orders it.
    { episode: 21, chapter: 149, source: 'episode', value: BONE_POUCH },
    // The banner of his house, the onion on the sail of a ship: alive on his
    // rock in Davos I of A Storm of Swords (chapter 149), he reaches for the
    // pouch of finger bones and finds it gone, lost in the battle, before
    // the galley picks him up. With the pouch gone, his arms stand in. The
    // books' alone; episode 21, the show's rescue, only orders it (#1648).
    { episode: 21, chapter: 149, source: 'chapter', value: SEAWORTH_BANNER },
  ],
  'matthos-seaworth': [
    // The letter rolled up and fallen on the floor, the seal on its ribbon
    // beside it: he dies on his father's ship in the wildfire on the
    // Blackwater, in "Blackwater" (episode 19) and in Davos III (chapter
    // 132), the chapter his book record opens in.
    {
      episode: 19,
      chapter: 132,
      value: [
        { d: `${ellipse(36, 136, 6, 12)} M36 124 L118 120 M36 148 L118 144` },
        { d: ellipse(118, 132, 6, 12), role: 'soft' },
        { d: ellipse(36, 136, 2, 5), role: 'soft' },
        { d: 'M80 146 Q90 152 96 150', role: 'soft' },
        { d: circle(102, 150, 6), role: 'accent' },
        { d: 'M60 128 l5 -3 M84 127 l5 -3', role: 'ambient' },
        GROUND,
      ],
    },
  ],
  'selyse-baratheon': [
    // The crown of red gold with flame-shaped points set on the shelf by
    // the jars: Selyse wears the twin of her husband's crown at Castle
    // Black in Jon IX of A Dance with Dragons (chapter 316). The show's
    // Selyse never wears one, so the stage is the book's alone; episode 41,
    // where the show's Selyse is at Castle Black, only orders it.
    {
      episode: 41,
      chapter: 316,
      source: 'chapter',
      value: [
        ...moved(JARS.slice(0, 9), 'translate(-20 0)'),
        ...moved(FLAME_CROWN, 'translate(134 144) scale(0.8)'),
        JAR_SHELF,
        shadow(80, 160, 60),
      ],
    },
    // The middle jar fallen on its side on the shelf: she hangs herself
    // after Stannis marches on Winterfell, in "Mother's Mercy" (episode
    // 50). The show's alone (the books leave her alive); chapter 344
    // orders it.
    {
      episode: 50,
      chapter: 344,
      source: 'episode',
      value: [
        ...JARS.slice(4, 6),
        {
          d: 'M28 146 H92 Q100 146 100 138 V114 Q100 106 92 106 H28 Q20 106 20 114 V138 Q20 146 28 146',
        },
        { d: 'M20 110 H12 V142 H20', role: 'soft' },
        { d: 'M24 128 Q44 124 62 128 Q80 132 98 128', role: 'accent' },
        { d: 'M106 122 Q120 118 134 122', role: 'soft' },
        { d: 'M86 112 l5 -4 M126 120 l5 -4', role: 'ambient' },
        JAR_SHELF,
        shadow(80, 160, 60),
      ],
    },
  ],
  'shireen-baratheon': [
    // The book shut and fallen on its face, its ribbon trailing out: she is
    // burned as an offering on Stannis's march in "The Dance of Dragons"
    // (episode 49). The show's alone (the books leave her alive); chapter
    // 344 orders it.
    {
      episode: 49,
      chapter: 344,
      source: 'episode',
      value: [
        { d: 'M30 132 L96 118 L132 134 L66 150 Z' },
        { d: 'M30 132 V140 L66 158 L132 142 V134', role: 'soft' },
        { d: 'M66 150 V158', role: 'soft' },
        { d: 'M110 140 Q122 146 132 156 L126 156 L130 162', role: 'accent' },
        { d: 'M80 152 l5 -3 M96 148 l5 -3', role: 'ambient' },
        GROUND,
      ],
    },
  ],
  'brienne-of-tarth': [
    // Renly's rainbow cloak folded on the ground, the plate gone: she flees
    // Renly's camp with Catelyn the night he dies, with no time to fetch her
    // own armour and horse, in Catelyn IV (chapter 107). The show's Brienne
    // keeps her plate, so the stage is the book's alone and episode 15,
    // where she flees, only orders it.
    { episode: 15, chapter: 107, source: 'chapter', value: RAINBOW_CLOAK },
    // A gown on the stand where the plate was: her captors take her armour
    // at Harrenhal and give her an old pink dress to wear, which she sups
    // with Roose Bolton in, in "The Climb" (episode 26), and fights the bear
    // in, in "The Bear and the Maiden Fair" (episode 27). In the books
    // Qyburn brings her a pink gown for the same supper, in Jaime V
    // (chapter 181). A costume that takes the place of her object (#1645).
    // Neither medium gives her plate back before Jaime arms her, so it
    // holds until the next stage.
    { episode: 26, chapter: 181, value: HARRENHAL_GOWN },
    // Oathkeeper, one of the two swords forged from Ice, which Jaime gives
    // her when he sends her after Sansa, in "Oathkeeper" (episode 34) and in
    // Jaime IX of A Storm of Swords (chapter 216). The ripple of its steel
    // is the accent, as on Eddard's stage.
    {
      episode: 34,
      chapter: 216,
      value: [
        ...moved(REFORGED, 'translate(0 128) rotate(-12 80 0)'),
        shadow(80, 154, 54),
      ],
    },
  ],
  'margaery-tyrell': [
    // The queen's crown of antlers and roses set on the form above the
    // gown: she is crowned when she marries Joffrey in "The Lion and the
    // Rose" (episode 32). The books give her no crown at the wedding, so
    // the stage is the show's alone and Tyrion VIII of A Storm of Swords
    // (chapter 204), the wedding, only orders it.
    {
      episode: 32,
      chapter: 204,
      source: 'episode',
      value: [...GOWN, ...moved(ROSE_CROWN, 'translate(80 28)')],
    },
    // The crown fallen on its side on the floor, the gown gone: she dies in
    // the wildfire under the Great Sept in "The Winds of Winter" (episode
    // 60). The show's alone (the books leave her alive); chapter 344
    // orders it.
    {
      episode: 60,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(
          [...ROSE_CROWN.slice(0, 3), { d: ROSES, role: 'accent' }],
          'translate(80 142) scale(2.2) rotate(-24)',
        ),
        GROUND,
      ],
    },
  ],
  'mace-tyrell': [
    // The chalice fallen on its side, the rim taking the floor: he dies in
    // the wildfire under the Great Sept in "The Winds of Winter" (episode
    // 60). The show's alone (the books leave him alive); chapter 344
    // orders it.
    {
      episode: 60,
      chapter: 344,
      source: 'episode',
      value: [...moved(CHALICE, 'translate(0 20) rotate(-90 80 100)'), GROUND],
    },
  ],
  'cortnay-penrose': [
    // The glove fallen flat on its back: he is found dead at the foot of a
    // tower of Storm's End the night after the parley, told in Tyrion X
    // (chapter 118). The record is the books' alone; episode 16 orders it.
    {
      episode: 16,
      chapter: 118,
      value: [
        ...moved(GLOVE.slice(0, 6), 'translate(0 18) rotate(-90 80 90)'),
        GROUND,
      ],
    },
  ],
  'alester-florent': [
    // The staff down on the ground and the banner laid flat behind it: Davos
    // remembers that Melisandre burned him alive for a fair wind when
    // Stannis sailed north, in Davos I of A Dance with Dragons (chapter
    // 281). How he died is not drawn. The record is the books' alone;
    // episode 41, when the show's Stannis is at the Wall, only orders it
    // (#1648).
    {
      episode: 41,
      chapter: 281,
      source: 'chapter',
      value: [
        ...moved(
          FLORENT_CLOTH,
          'translate(0 142) scale(1 0.4) translate(0 -120)',
        ),
        { d: `${circle(16, 152, 4)} M20 152 L146 149` },
        { d: 'M8 160 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
}
