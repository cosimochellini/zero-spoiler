import type { Drawings, Redrawings, Stroke } from '~/data/art/stroke'
import { circle, dot, dots, ellipse, shadow } from '~/lib/svg/primitives'

/**
 * Pekuba's scarf knot and its two fringed ends. Both his drawings show them,
 * so his death changes only the loop that held them.
 */
const PEKUBA_KNOT: Stroke = { d: ellipse(72, 104, 8, 6), role: 'accent' }

/**
 * Original objects for the Chimera Ant records of #1020, each at its gate.
 * The scenes behind them are in the arc's provenance note; no frame, panel
 * or reference image was copied.
 */
export const CHIMERA_ANT_DRAWINGS = {
  // The survey camera the team photographs new species with, in 3/4 with
  // the lens in tint and its strap hanging: Kite explains the job in chapter
  // 186, the scene where Lin and the others meet Gon and Killua (episode
  // 77). No lettering.
  'lin-koshi': [
    { d: 'M36 96 H110 V146 H36 Z' },
    { d: 'M36 96 L50 84 H124 L110 96 M110 146 L124 134 V84' },
    { d: 'M114 106 l6 -5 M114 118 l6 -5 M114 130 l6 -5', role: 'ambient' },
    { d: circle(70, 121, 17), role: 'accent' },
    { d: circle(70, 121, 9), role: 'soft' },
    { d: 'M88 104 H102 V112 H88 Z', role: 'soft' },
    { d: dot(56, 90) },
    { d: 'M36 104 C20 110 18 138 32 152', role: 'soft' },
    shadow(80, 160, 48),
  ],
  // The Camp Tiger's horn, the one it skewers its prey on to cook it, the
  // tip in tint and the ridges round it: the survey's latest find in
  // chapter 186 and episode 77, when Podungo and the others meet Gon and
  // Killua. No tiger.
  'podungo-lapoy': [
    { d: 'M56 150 C50 118 62 78 102 40 C94 76 92 114 104 150' },
    { d: ellipse(80, 150, 24, 6) },
    {
      d: 'M102 40 C97 50 92 57 86 63 Q93 64 99 60 C100 52 101 46 102 40 Z',
      role: 'accent',
    },
    {
      d: 'M61 128 Q78 134 98 126 M64 108 Q80 113 96 106 M72 88 Q84 92 96 86',
      role: 'soft',
    },
    { d: 'M96 138 l6 -4 M95 120 l6 -4 M96 102 l5 -4', role: 'ambient' },
    shadow(80, 162, 40),
  ],
  // The survey contract on a desk with a pen across it, the pen in tint:
  // Wong hires the team and tells them of the creature in chapter 187 and
  // episode 77. Ruled lines and a scrawl, no lettering.
  'wong': [
    { d: 'M24 132 L54 82 H136 L106 132 Z' },
    { d: 'M24 132 V137 H106 L136 87', role: 'soft' },
    { d: 'M56 92 H116 M50 102 H110 M44 112 H98', role: 'soft' },
    { d: 'M66 122 C72 114 78 126 84 118 C88 113 92 122 98 117', role: 'soft' },
    { d: 'M92 140 L138 72 L144 76 L98 144 Z', role: 'accent' },
    { d: 'M92 140 L88 150 L98 144' },
    { d: 'M118 120 l7 -4 M112 129 l7 -4', role: 'ambient' },
    shadow(80, 158, 56),
  ],
  // Kurt's sleeveless vest seen from the back, the cross on it in tint and
  // the far side hatched: the boy of the journal in chapter 187 and of
  // episode 77. No figure.
  'kurt': [
    { d: 'M52 48 L30 60 V150 H130 V60 L108 48 Q80 62 52 48 Z' },
    { d: 'M58 51 Q80 66 102 51', role: 'soft' },
    { d: 'M30 60 Q46 82 42 104 M130 60 Q114 82 118 104', role: 'soft' },
    { d: 'M38 72 Q80 80 122 72', role: 'soft' },
    { d: 'M80 86 V130 M64 102 H96', role: 'accent' },
    { d: 'M30 142 H130', role: 'soft' },
    { d: 'M120 114 l7 -5 M120 126 l7 -5 M120 138 l6 -4', role: 'ambient' },
    shadow(80, 160, 54),
  ],
  // Reina's hair bow, its knot in tint and its two tails hanging: the
  // little sister of the journal in chapter 187 and of episode 77. No hair.
  'reina': [
    { d: 'M74 94 C56 70 26 70 28 94 C30 116 58 114 74 102' },
    { d: 'M86 94 C104 70 134 70 132 94 C130 116 102 114 86 102' },
    { d: ellipse(80, 98, 8, 9), role: 'accent' },
    { d: 'M76 106 L60 146 L70 141 L75 150 L82 107' },
    { d: 'M84 106 L102 142 L93 139 L90 148 L80 108' },
    { d: 'M40 86 Q52 84 66 96 M120 86 Q108 84 94 96', role: 'soft' },
    { d: 'M112 104 l6 -4 M118 94 l6 -4', role: 'ambient' },
    shadow(80, 162, 40),
  ],
  // A bowl of soup on the table, its rim in tint and the steam rising: the
  // dinner Haruna shares with Kurt and Reina in episode 77. The manga never
  // names her.
  'haruna': [
    { d: ellipse(80, 106, 42, 11), role: 'accent' },
    { d: 'M38 106 C40 140 120 140 122 106' },
    { d: 'M64 136 L62 146 H98 L96 136' },
    { d: 'M46 108 C58 114 102 114 114 108', role: 'soft' },
    {
      d: 'M66 90 C60 80 72 74 66 62 M84 90 C78 78 92 72 86 58 M100 90 C96 82 104 78 100 70',
      role: 'ambient',
    },
    { d: 'M108 124 l6 -4 M112 114 l6 -4', role: 'ambient' },
    shadow(80, 154, 46),
  ],
  // Pekuba's scarf as he wears it, a loop with its knot in tint and two
  // fringed ends: one of Pokkle's companions, named in episode 79. The manga
  // never names him.
  'pekuba': [
    { d: ellipse(80, 72, 34, 12) },
    { d: 'M46 72 C44 92 56 104 64 104 M114 72 C116 92 102 104 80 105' },
    { d: 'M46 80 Q80 96 114 80', role: 'soft' },
    PEKUBA_KNOT,
    { d: 'M66 109 L56 152 L64 150 L68 156 L74 110' },
    { d: 'M78 109 L94 148 L86 146 L84 154 L74 111' },
    { d: 'M100 64 l6 -3 M106 70 l6 -3', role: 'ambient' },
    shadow(80, 168, 40),
  ],
  // Balda's white shirt over long light sleeves, the sleeves in tint: one
  // of Pokkle's companions, named as Pokkle tells him to run in chapter 190
  // and episode 80, the scene he dies in. No figure.
  'balda': [
    {
      d: 'M58 52 L40 60 L34 100 L46 102 L50 82 V150 H110 V82 L114 102 L126 100 L120 60 L102 52 Q80 64 58 52 Z',
    },
    {
      d: 'M34 100 L26 142 L38 144 L46 102 M126 100 L134 142 L122 144 L114 102',
      role: 'accent',
    },
    { d: 'M58 52 L70 70 L80 62 L90 70 L102 52', role: 'soft' },
    { d: 'M80 64 V150', role: 'soft' },
    {
      d: dots([
        [85, 84],
        [85, 104],
        [85, 124],
      ]),
    },
    { d: 'M100 112 l6 -4 M100 126 l6 -4 M100 140 l6 -4', role: 'ambient' },
    shadow(80, 160, 54),
  ],
  // A spider's web strung between two branches, the sticky line shot from
  // it in tint: Pike catches Balda in it in chapter 190 and episode 80. No
  // spider.
  'pike': [
    { d: 'M8 34 Q60 24 152 40 M14 162 Q70 152 146 158', role: 'ambient' },
    {
      d: 'M80 92 L80 30 M80 92 L124 34 M80 92 L144 96 M80 92 L118 157 M80 92 L64 155 M80 92 L18 120 M80 92 L30 32',
    },
    {
      d: 'M80 52 L104 58 L120 94 L104 126 L76 132 L52 118 L42 70 Z',
      role: 'soft',
    },
    {
      d: 'M80 72 L92 74 L100 93 L92 110 L78 113 L65 106 L60 81 Z',
      role: 'soft',
    },
    { d: 'M104 126 C116 146 128 164 144 180', role: 'accent' },
    { d: 'M100 48 l6 -3 M112 52 l6 -3', role: 'ambient' },
  ],
  // A scorpion's tail raised in an arc, its stinger in tint and the far
  // side hatched: Zazan paralyses Pokkle with it in chapter 190 and episode
  // 80. No body.
  'zazan': [
    { d: 'M46 150 C30 116 34 72 70 50 C96 34 124 44 126 72' },
    { d: 'M64 150 C50 120 54 84 78 66 C96 54 112 60 112 74' },
    {
      d: 'M38 128 L57 126 M36 104 L56 108 M46 80 L65 90 M62 60 L77 74 M86 46 L92 62 M108 46 L104 62',
      role: 'soft',
    },
    { d: 'M126 72 C128 88 120 100 106 104 Q112 92 112 74 Z', role: 'accent' },
    { d: 'M58 140 l6 -3 M55 118 l6 -3 M62 96 l6 -3', role: 'ambient' },
    shadow(56, 158, 30),
  ],
  // A spent bullet on a cloth beside a pair of tweezers, the bullet in tint:
  // Peggy finds one still inside a shot soldier in chapter 189; episode 80
  // adapts the scene.
  'peggy': [
    { d: 'M20 134 L48 104 H140 L112 134 Z' },
    {
      d: 'M58 112 L92 108 C108 108 118 114 120 117 C116 122 106 126 94 126 L60 128',
      role: 'accent',
    },
    { d: ellipse(59, 120, 4, 8) },
    { d: 'M72 111 L73 127 M82 110 L83 127', role: 'soft' },
    { d: 'M60 146 L134 130 M60 146 L132 138', role: 'soft' },
    { d: 'M118 128 l6 -5 M124 120 l6 -5', role: 'ambient' },
    shadow(80, 150, 56),
  ],
  // A cheetah's tail sweeping up, its spots in tint and speed lines behind
  // it: Cheetu, whose squad hunts for sport in chapter 192 and episode 81.
  // No body.
  'cheetu': [
    {
      d: 'M30 150 C60 150 70 120 66 96 C62 70 84 50 112 54 C128 57 134 70 128 80',
    },
    {
      d: 'M44 150 C70 146 82 122 80 98 C78 78 94 66 110 68 C118 69 122 74 120 80',
    },
    { d: 'M128 80 Q124 86 120 80', role: 'soft' },
    {
      d: dots([
        [50, 146],
        [66, 132],
        [73, 114],
        [73, 94],
        [80, 76],
        [96, 63],
        [114, 61],
      ]),
      role: 'accent',
    },
    { d: 'M8 100 H40 M12 116 H44 M18 84 H48', role: 'ambient' },
    shadow(70, 160, 44),
  ],
  // Two feathers from a shrike's wing, the larger one's shaft in tint:
  // Rammot's arms are covered in them when he attacks Gon and Killua in
  // chapter 191, and he is named back at the nest in chapter 192 and
  // episode 81.
  'rammot': [
    { d: 'M74 150 C56 120 52 80 86 34 C110 70 104 118 78 146' },
    { d: 'M72 162 L76 146 Q84 96 86 34', role: 'accent' },
    {
      d: 'M77 130 L64 120 M79 112 L62 100 M81 94 L64 80 M83 76 L70 62 M79 128 L94 118 M81 110 L98 98 M83 92 L98 80',
      role: 'soft',
    },
    { d: 'M102 150 C98 128 106 102 128 86 C132 108 122 134 106 148' },
    { d: 'M100 158 Q108 120 128 86', role: 'soft' },
    { d: 'M96 74 l5 -3 M98 90 l5 -3', role: 'ambient' },
    shadow(86, 164, 36),
  ],
  // A horse's foreleg from the knee down, the hoof in tint: Yunju, the
  // centaur who keeps humans as dogs, is named as Kite shoots him in
  // chapter 193 and episode 82. No body.
  'yunju': [
    { d: 'M66 30 C64 56 68 84 70 104 C70 116 64 124 62 132' },
    { d: 'M92 30 C94 58 96 86 94 104 C96 116 100 122 102 132' },
    { d: 'M64 44 Q80 52 94 44', role: 'soft' },
    { d: 'M70 104 Q82 112 94 104', role: 'soft' },
    { d: 'M60 132 H104 L112 150 H52 Z', role: 'accent' },
    { d: 'M62 132 Q82 126 102 132', role: 'soft' },
    { d: 'M90 60 l5 -3 M91 76 l5 -3 M92 92 l5 -3', role: 'ambient' },
    shadow(82, 158, 40),
  ],
  // An armadillo's banded shell rolled into a ball, one band in tint, the
  // tail curled along it and dust behind: Baro charges Gon this way in
  // chapter 195 and episode 83. No head.
  'baro': [
    { d: circle(84, 108, 40) },
    {
      d: 'M58 78 Q70 108 58 140 M72 70 Q86 108 72 146 M102 70 Q116 108 102 146',
      role: 'soft',
    },
    { d: 'M87 68 Q101 108 87 148', role: 'accent' },
    { d: 'M118 128 Q132 138 124 150 Q116 156 108 150' },
    { d: 'M110 92 l6 -4 M114 106 l6 -4 M112 120 l6 -4', role: 'ambient' },
    { d: 'M20 140 Q30 132 40 140 M12 126 Q22 120 30 126', role: 'ambient' },
    shadow(84, 156, 40),
  ],
} satisfies Drawings

export const chimeraAntRedrawn: Redrawings = {
  pekuba: [
    // The same knot in tint, the loop and one fringed end fallen flat on the
    // ground: an ant tunnels up behind Pekuba and kills him, episode 80. The
    // manga's chapter 190 tells the same scene but never names him.
    {
      episode: 80,
      chapter: 190,
      source: 'episode',
      value: [
        { d: 'M24 146 C40 136 66 140 80 136 C98 131 120 138 140 132' },
        { d: 'M24 146 C42 152 70 152 84 149 C104 146 124 148 140 142 V132' },
        { ...PEKUBA_KNOT, transform: 'translate(12 40)' },
        { d: 'M90 149 L112 156 L110 151 L118 152 L96 146', role: 'soft' },
        { d: 'M46 142 Q64 146 80 142', role: 'soft' },
        { d: 'M128 138 l5 -3 M134 140 l5 -3', role: 'ambient' },
        { d: 'M4 160 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
}
