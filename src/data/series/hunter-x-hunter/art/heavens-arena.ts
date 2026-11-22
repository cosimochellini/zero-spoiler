import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

/** The outline of Kastro's cloak, in tint. */
const KASTRO_CLOAK_EDGE: Stroke = {
  d: 'M64 32 C46 36 30 44 24 58 L12 166 C30 172 48 172 60 166 L62 40 M96 32 C114 36 130 44 136 58 L148 166 C130 172 112 172 100 166 L98 40',
  role: 'accent',
}
/** The long folds of Kastro's cloak. */
const KASTRO_CLOAK_FOLDS: Stroke = {
  d: 'M36 72 C34 104 30 136 26 166 M124 72 C126 104 130 136 134 166',
  role: 'soft',
}
/**
 * Kastro's yellow cloak, hoodless and open down the front, falling from
 * both shoulders to below the knee: the outline in tint, its long folds,
 * and the inside of the far half hatched. His death lays this same cloak
 * on the floor of the ring.
 */
const KASTRO_CLOAK: Stroke[] = [
  KASTRO_CLOAK_EDGE,
  KASTRO_CLOAK_FOLDS,
  {
    d: 'M104 60 l-4 6 M106 88 l-5 7 M107 116 l-5 7 M108 144 l-5 7',
    role: 'ambient',
  },
]

/**
 * The neck of Kastro's white robe under the cloak: the collar, and the left
 * side crossing over the right. Both his drawings keep it.
 */
const KASTRO_COLLAR: Stroke[] = [
  { d: 'M64 32 Q80 40 96 32' },
  { d: 'M64 32 L92 98 M96 32 L80 66', role: 'soft' },
]

/**
 * Kastro as he stands in the ring: the collar, the robe's black edging
 * hatched down its front and its hem, under the cloak.
 */
const KASTRO: Stroke[] = [
  ...KASTRO_COLLAR,
  {
    d: 'M70 32 L95 90 M72 40 l2 -2 M78 54 l2 -2 M84 68 l2 -2 M90 82 l2 -2',
    role: 'ambient',
  },
  { d: 'M62 160 H98 M80 98 L84 160', role: 'soft' },
  ...KASTRO_CLOAK,
]

/**
 * Kastro's Double: the same cloak and collar again, whole in the muted ink
 * and with no hatching, since the Double is made from the image in his mind
 * and never takes the stains of the fight.
 */
const KASTRO_DOUBLE: Stroke = {
  d: [KASTRO_CLOAK_EDGE, KASTRO_CLOAK_FOLDS, ...KASTRO_COLLAR]
    .map((stroke) => stroke.d)
    .join(' '),
  role: 'ambient',
}

/**
 * One of Kastro's hands set as a tiger's upper jaw, side on and facing
 * right: the white sleeve, its cuff seen open with the black edging in
 * tint, the back of the hand and the fingers curled down like fangs, the
 * palm and thumb beneath, and the knuckles.
 */
const TIGER_JAW: Stroke[] = [
  {
    d: 'M2 50 Q14 47 27 50 M2 86 Q14 86 27 84 M36 52 C56 44 84 44 112 62 Q126 70 124 86 L118 102 L114 88 M36 82 C50 84 60 82 70 80 M56 82 Q60 98 76 98 L84 92',
  },
  { d: ellipse(30, 67, 6, 17), role: 'accent' },
  {
    d: 'M100 56 Q114 66 110 84 L104 98 L102 86 M88 52 Q102 62 98 80 L92 94 L90 82 M76 50 Q90 60 86 76 L80 88 L78 78',
    role: 'soft',
  },
]

/**
 * Tiger Bite Fist: Kastro's two hands as a tiger's jaws, the lower one the
 * upper turned over, with the open lines of the bite closing between them.
 * The ability's drawing and his own share it.
 */
export const TIGER_BITE_HANDS: Stroke[] = [
  ...TIGER_JAW,
  ...moved(softened(TIGER_JAW), 'translate(0 236) scale(1 -1)'),
  { d: 'M122 108 l14 -4 M124 118 h16 M122 128 l14 4', role: 'ambient' },
]

/**
 * Riehlvelt's wheelchair side on, facing right: the big wheel with its hand
 * rim in tint, spokes and hub, the frame, seat and small front wheel, and
 * the handles of his two whips standing in their holder at the back with
 * the lashes coiled. His drawing and Aura Burst's share it.
 */
export const RIEHLVELT_CHAIR: Stroke[] = [
  { d: ellipse(62, 112, 34, 36) },
  { d: ellipse(62, 112, 27, 29), role: 'accent' },
  {
    d: `M62 83 V141 M35 112 H89 M43 92 L81 132 M81 92 L43 132 ${circle(62, 112, 4)}`,
    role: 'soft',
  },
  { d: 'M92 94 A34 36 0 0 1 102 136', role: 'soft' },
  { d: 'M40 94 H112 L124 86 H56 M40 94 L36 38 H24 M112 94 L124 132 H138' },
  { d: 'M38 66 H98 V94 M52 66 L50 40', role: 'soft' },
  { d: `${circle(128, 143, 7)} M128 136 L124 130`, role: 'soft' },
  {
    d: 'M26 96 V70 H34 V96 M27 70 L20 36 M33 70 L36 34 M21.5 44 l4 -1 M34 44 l4 1',
  },
  { d: `${ellipse(20, 34, 6, 3)} ${ellipse(36, 32, 6, 3)}`, role: 'soft' },
  { d: 'M41 50 l7 3 M42 60 l7 3 M44 80 l7 3', role: 'ambient' },
]

/**
 * Aura Burst: open lines of aura streaming back from the back of
 * Riehlvelt's chair, behind the whip holder.
 */
export const AURA_JET: Stroke = {
  d: 'M18 74 L2 68 M18 84 L-2 84 M18 94 L2 100 M20 64 L8 56',
  role: 'ambient',
}

/**
 * One of Gido's dancing tops on its point, seen a little from above: the
 * rim of its top face and its body narrowing to the point, the band round
 * its widest part in tint, the stem and the light along its near side. His
 * drawing and the drawings of his three abilities share it.
 */
export const GIDO_TOP: Stroke[] = [
  {
    d: 'M54 72 C54 60 106 60 106 72 C106 84 54 84 54 72 Z M54 72 C54 92 64 112 76 130 L80 140 L84 130 C96 112 106 92 106 72',
  },
  {
    d: 'M55 88 C70 96 90 96 105 88 M58 96 C72 104 88 104 102 96',
    role: 'accent',
  },
  {
    d: `${ellipse(80, 66, 6, 2)} M74 66 V56 H86 V66 M62 80 Q62 96 70 112`,
    role: 'soft',
  },
]

/**
 * Gido spinning as a top, Tornado Top: the conical hat in tint, his robe
 * flared into a bell below it and his metal peg leg as the point. No face.
 */
export const GIDO_SPINNING: Stroke[] = [
  { d: `M44 60 L80 20 L116 60 ${ellipse(80, 60, 36, 9)}`, role: 'accent' },
  {
    d: `M58 68 C60 96 44 114 24 126 M102 68 C100 96 116 114 136 126 ${ellipse(80, 126, 56, 12)}`,
  },
  { d: 'M72 138 L77 168 L80 176 L83 168 L88 138' },
]

/** The open lines of Gido's turn round the bell of his robe and his peg. */
export const SPIN_ARCS: Stroke = {
  d: 'M14 98 Q6 118 18 136 M146 98 Q154 118 142 136 M56 156 Q80 168 104 156',
  role: 'ambient',
}

/**
 * One of Gido's spinning tops on its point, its far side hatched and its
 * turn drawn as open lines; his wooden cane lies behind it and a second top
 * has fallen on its side: the tops he spins along his cane in Gon's first
 * 200th-floor match, episode 29 / chapter 49. His Tornado Top stage keeps it.
 */
const GIDO: Stroke[] = [
  ...GIDO_TOP,
  { d: 'M96 106 l6 -6 M90 118 l6 -6 M100 92 l5 -5', role: 'ambient' },
  { d: 'M40 70 Q34 88 42 104 M120 70 Q126 88 118 104', role: 'ambient' },
  {
    d: 'M14 156 L146 128 M16 162 L148 134 M14 156 Q10 160 16 162 M146 128 C152 124 156 132 148 134',
  },
  {
    d: 'M112 150 C112 142 126 138 130 144 L142 160 L124 160 C118 160 112 156 112 150 Z M130 144 C134 150 128 158 124 160',
    role: 'soft',
  },
  shadow(80, 172, 50),
]

/**
 * The Heavens Arena records (#896), each at its named scene, graded and
 * redrawn in #897.
 */
export const HEAVENS_ARENA_DRAWINGS = {
  // Zushi's karate gi from the front, the black turtleneck hatched in the
  // V of its crossed lapels, the cuffs seen open, and the red belt with its
  // knot in tint: the Shingen-ryu pupil who bows and gives his name on the
  // 50th floor, episode 27 / chapter 45.
  'zushi': [
    {
      d: 'M62 40 L30 54 L14 102 M34 110 L46 80 L46 158 H114 L114 80 L126 110 M146 102 L130 54 L98 40',
    },
    { d: 'M14 102 A10.8 4 20 1 0 34 110 A10.8 4 20 1 0 14 102' },
    { d: 'M146 102 A10.8 4 -20 1 1 126 110 A10.8 4 -20 1 1 146 102' },
    { d: `${ellipse(80, 38, 14, 4)} M66 38 V44 M94 38 V44`, role: 'soft' },
    { d: 'M62 40 L94 116 M98 40 L82 78 M70 40 L98 106', role: 'soft' },
    {
      d: 'M71 48 L76 44 M73 56 L82 48 M77 64 L86 56 M81 72 L89 64 M70 44 l3 -3 M88 46 l4 -3',
      role: 'ambient',
    },
    { d: 'M46 116 H114 V126 H46 Z', role: 'accent' },
    {
      d: 'M74 114 L86 114 L88 128 L72 128 Z M76 128 L68 150 M84 128 L94 150',
      role: 'accent',
    },
    { d: 'M100 126 L102 158 M36 76 l4 10 M124 76 l-4 10', role: 'soft' },
    {
      d: 'M104 134 l7 -5 M104 146 l7 -5 M104 92 l7 -5 M104 104 l7 -5',
      role: 'ambient',
    },
    shadow(80, 176, 46),
  ],
  // Wing's light shirt in a 3/4 view, cropped at the hips: the far sleeve
  // turning away and hatched, the near cuff seen open, the belt buckle a
  // small block, and on the near side the shirttail hanging out over the
  // belt in tint while the far side is tucked in. Zushi points the shirttail
  // out as his teacher arrives and gives his name, episode 27 / chapter 45.
  // No glasses or face.
  'wing': [
    { d: 'M60 34 L68 50 L84 42 L92 50 L102 32 Q82 40 60 34' },
    {
      d: 'M60 34 L30 46 L18 112 M34 118 L42 74 L44 122 M102 32 L122 42 L132 106 M120 110 L116 74 L114 120',
    },
    { d: 'M18 112 A9 4 20 1 0 34 118 A9 4 20 1 0 18 112', role: 'soft' },
    {
      d: 'M84 42 Q86 84 86 124 M85 58 h0.01 M85.6 74 h0.01 M86 90 h0.01 M86 106 h0.01',
      role: 'soft',
    },
    {
      d: 'M120 110 L132 106 L133 112 L121 116 Z M122 50 l6 4 M124 62 l7 4 M126 74 l7 4 M128 86 l6 4 M129 98 l5 3',
      role: 'ambient',
    },
    {
      d: 'M86 126 L114 122 M86 136 L114 132 M90 122 h10 v15 h-10 Z M100 122 l3 -2 v15 l-3 2',
    },
    {
      d: 'M44 120 C40 134 36 148 38 160 C54 154 72 158 88 164 V126',
      role: 'accent',
    },
    {
      d: 'M56 128 l-4 26 M70 128 l-1 28 M48 60 l4 10 M98 60 l3 14',
      role: 'soft',
    },
    { d: 'M42 160 L43 170 M88 164 V170 M114 132 L115 170', role: 'soft' },
  ],
  // One of Gido's spinning tops on its point, seen a little from above, the
  // band round its widest part in tint and the turn drawn as open lines; his
  // wooden cane lies behind it and a second top has fallen on its side: the
  // tops he spins along his cane in Gon's first 200th-floor match, episode
  // 29 / chapter 49.
  'gido': GIDO,
  // Sadaso's tunic from the front, his right sleeve round an arm, its cuff
  // seen open, and his empty left sleeve hanging flat beside it in tint;
  // out of that sleeve grows the enormous arm of aura he makes to replace
  // the one he lost, its open hand reaching across, in open lines: he seizes
  // Zushi with it before his match with Killua, episode 33 / chapter 57.
  'sadaso': [
    ...moved(
      [
        { d: `${ellipse(80, 30, 14, 4)} M66 30 V36 M94 30 V36` },
        { d: 'M66 34 L40 44 L26 118 M42 122 L48 74 L48 172 H114 V62' },
        {
          d: 'M26 118 A8 3.5 12 1 0 42 122 A8 3.5 12 1 0 26 118',
          role: 'soft',
        },
        {
          d: 'M94 34 L116 42 C122 70 124 104 120 140 L131 143 C134 108 132 74 124 46',
          role: 'accent',
        },
        {
          d: 'M122 64 C126 92 126 118 124 141 M118 136 L124 141',
          role: 'soft',
        },
        { d: 'M80 36 V172 M56 90 Q60 120 58 166 M38 66 l6 8', role: 'soft' },
        {
          d: 'M94 70 l8 -5 M94 94 l8 -5 M94 118 l8 -5 M94 142 l8 -5 M94 164 l8 -5',
          role: 'ambient',
        },
      ],
      'translate(50 114) scale(0.72) translate(-80 -100)',
    ),
    {
      d: 'M80 144 C94 170 136 150 138 98 M88 140 C100 146 124 136 124 98 M124 98 C116 88 112 80 110 72 L92 58 Q86 52 94 48 L108 56 L104 18 Q108 10 114 16 L118 44 L122 10 Q128 4 132 10 L130 44 L140 16 Q146 12 148 20 L140 48 L150 34 Q156 30 156 38 L144 66 C140 78 138 88 138 98',
      role: 'ambient',
    },
    shadow(52, 182, 36),
  ],
  // Riehlvelt's wheelchair side on, facing right, the hand rim of its big
  // wheel in tint and his two whips in their holder at the back, with the
  // jet of Aura Burst streaming from the back of the chair: the chair he
  // fights from and the dash he dodges Killua with, episode 34 / chapter 59.
  // No switch is shown thrown.
  'riehlvelt': [
    ...moved([...RIEHLVELT_CHAIR, AURA_JET], 'translate(14 0)'),
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(94, 158, 56),
  ],
  // Kastro in his yellow cloak, its edge in tint, and his Double half a
  // step behind him, whole in the muted ink; before them, his two hands
  // set as a tiger's jaws for Tiger Bite Fist. He shows both against
  // Hisoka in his opening episode, episode 31 / chapter 53, a chapter after
  // he is named, chapter 52.
  'kastro': [
    ...moved(
      [KASTRO_DOUBLE],
      'translate(46 76) scale(0.6) translate(-80 -100)',
    ),
    ...moved(KASTRO, 'translate(110 84) scale(0.62) translate(-80 -100)'),
    ...moved(
      softened(TIGER_BITE_HANDS),
      'translate(58 156) scale(0.44) translate(-70 -118)',
    ),
    shadow(92, 186, 56),
  ],
  // The ring of the 200th floor seen from a corner, its rim in tint, its
  // platform paved with stone tiles, its far side hatched, on the floor of
  // the hall: the ring of Gon's, Killua's and Hisoka's 200th-floor matches,
  // from Gon's first, against Gido, episode 29 / chapter 49, to the tiles
  // Gon tears up against Gido, Riehlvelt and Hisoka. No crowd.
  'heavens-arena': [
    { d: 'M8 104 L80 76 L152 104 L80 132 Z', role: 'accent' },
    {
      d: 'M26 111 L98 83 M44 118 L116 90 M62 125 L134 97 M26 97 L98 125 M44 90 L116 118 M62 83 L134 111',
      role: 'soft',
    },
    { d: 'M8 104 V118 L80 146 L152 118 V104 M80 132 V146' },
    {
      d: 'M92 141 l6 -7 M106 136 l6 -7 M120 130 l6 -7 M134 125 l6 -7',
      role: 'ambient',
    },
    shadow(80, 152, 70),
  ],
} satisfies Drawings

/**
 * The Heavens Arena drawings that change with the story: Gido's Tornado Top
 * and Kastro's death.
 */
export const heavensArenaRedrawn: Redrawings = {
  gido: [
    // The same top and cane, and behind them Gido himself spinning on his
    // peg leg, the drawing of Tornado Top made small: he throws Gon out of
    // the ring with it, episode 30 / chapter 50. No face.
    {
      episode: 30,
      chapter: 50,
      value: [
        ...GIDO,
        ...moved(
          softened([...GIDO_SPINNING, SPIN_ARCS]),
          'translate(128 34) scale(0.3) translate(-80 -100)',
        ),
      ],
    },
  ],
  kastro: [
    // The same cloak and collar laid open on the floor of the ring,
    // empty: Hisoka's cards kill him at the end of their match, episode 32 /
    // chapter 54. No cards and no body are drawn.
    {
      episode: 32,
      chapter: 54,
      value: [
        ...moved(
          KASTRO_CLOAK,
          'translate(80 142) rotate(-6) scale(0.95 0.4) translate(-80 -100)',
        ),
        ...moved(
          KASTRO_COLLAR,
          'translate(80 142) rotate(-6) scale(0.95 0.4) translate(-80 -100)',
        ),
        { d: 'M4 140 L20 112 M140 112 L156 140', role: 'ambient' },
        { d: 'M4 112 H156', role: 'ambient', dashed: true },
        shadow(80, 182, 64),
      ],
    },
  ],
}
