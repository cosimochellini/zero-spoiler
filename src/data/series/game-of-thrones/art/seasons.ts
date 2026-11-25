import type { Drawings } from '~/data/art/stroke'
import { circle, dots, shadow } from '~/lib/svg/primitives'

/**
 * Game of Thrones' seasons, drawn for the home page's frame (#1601). A
 * season files no arc record: its heading (`Saga.heading`) stands for it,
 * keyed by `season-N`, and the home draws the one the reader is in.
 */
export const SEASON_DRAWINGS = {
  /**
   * The Iron Throne, empty on its dais: the fan of blades rising behind the
   * seat, tallest in the middle, a sword's hilt jutting from each arm, and
   * two steps with their side receding. Ned meets Jaime beside it in "Lord
   * Snow" (episode 3) and sits it to hear petitioners in "A Golden Crown"
   * (episode 6); he sits it as Hand in A Game of Thrones too. The accent is
   * the fan of blades; the steel is hatched where it turns away.
   */
  'season-1': [
    {
      d: 'M77.4 98 L80 12 L82.6 98 M70.4 98.2 L67 22 L75.6 97.8 M84.4 97.8 L93 22 L89.6 98.2 M64.4 98.5 L55 34 L69.6 97.5 M90.4 97.5 L105 34 L95.6 98.5 M59.6 99 L43 50 L64.4 97 M95.6 97 L117 50 L100.4 99 M56 99.7 L33 68 L60 96.3 M100 96.3 L127 68 L104 99.7',
      role: 'accent',
    },
    {
      d: 'M74 86 H86 M66.2 86.5 L78.2 85.6 M81.8 85.6 L93.8 86.5',
      role: 'soft',
    },
    { d: 'M56 132 V98 H104 V132 M56 112 H104' },
    { d: 'M44 132 V100 H56 M116 132 V100 H104' },
    {
      d: 'M44 104 L30 100 M44 114 L28 112 M116 104 L130 100 M116 114 L132 112',
    },
    {
      d: 'M30 100 l-1 4 M28 112 l-1 4 M130 100 l1 4 M132 112 l1 4',
      role: 'soft',
    },
    { d: 'M106 108 l6 -3 M106 118 l6 -3 M106 128 l6 -3', role: 'ambient' },
    { d: 'M24 152 H136 V142 H24 Z M34 142 V132 H126 V142' },
    {
      d: 'M136 142 L144 136 V146 L136 152 M126 132 L134 126 V136',
      role: 'soft',
    },
    { d: 'M138 148 l4 -3 M128 138 l4 -3', role: 'ambient' },
    shadow(82, 156, 62),
  ],
  /**
   * The red comet streaming across the sky over the godswood's crowns and a
   * pine, as Bran, Osha and Hodor watch it from Winterfell in "The North
   * Remembers" (episode 11). A Clash of Kings opens on its tail in the
   * Prologue (chapter 74). The accent is the tail.
   */
  'season-2': [
    { d: circle(116, 46, 5) },
    { d: circle(116, 46, 9), role: 'soft' },
    {
      d: 'M111 44 Q70 30 12 26 M112 49 Q74 42 20 44 M112 41 Q82 22 38 10',
      role: 'accent',
    },
    { d: 'M108 46 Q86 38 58 36', role: 'soft' },
    {
      d: 'M10 150 V128 Q12 116 24 118 Q28 106 40 110 Q48 100 58 108 Q66 104 72 114 Q76 112 80 120 M104 120 Q104 110 116 112 Q122 102 134 108 Q146 108 150 120 V150',
    },
    { d: 'M92 88 L82 108 H87 L78 126 H106 L97 108 H102 Z M92 126 V150' },
    {
      d: 'M18 130 Q30 124 42 128 M46 116 Q56 112 66 118 M108 124 Q120 118 132 124 M84 108 Q92 112 100 108',
      role: 'soft',
    },
    {
      d: 'M66 124 l6 -3 M68 136 l6 -3 M140 120 l6 -3 M142 132 l6 -3 M96 120 l4 -3',
      role: 'ambient',
    },
    { d: 'M10 150 H150', role: 'ambient', dashed: true },
  ],
  /**
   * The Fist of the First Men under falling snow: the ring wall of piled
   * stones on its hilltop, seen from below, with a pine at the foot of the
   * slope. "Valar Dohaeris" (episode 21) opens there in a blizzard, after the
   * fight off screen, and the Prologue of A Storm of Swords (chapter 144) is
   * set in the Night's Watch's camp on the hill as the snow begins. Nothing
   * on the hill shows who fights there. The accent is the ring wall's face.
   */
  'season-3': [
    {
      d: 'M36 104 Q28 114 22 128 Q16 142 4 150 M124 104 Q132 114 138 128 Q144 142 156 150',
    },
    {
      d: 'M36 95 Q42 101 48 101 Q53 105 60 104 Q66 107 73 106 Q80 108 87 106 Q94 107 100 104 Q107 105 112 101 Q118 101 124 95 M36 95 V104 Q80 124 124 104 V95',
      role: 'accent',
    },
    {
      d: 'M36 95 Q39 89 45 90 Q50 85 58 86 Q68 81 80 82 Q92 81 102 86 Q110 85 115 90 Q121 89 124 95',
    },
    { d: 'M46 95 Q80 86 114 95', role: 'soft' },
    {
      d: 'M48 103 V110 M62 107 V114 M80 109 V116 M98 107 V114 M112 103 V110 M54 108 H68 M88 111 H104',
      role: 'soft',
    },
    {
      d: 'M128 118 l6 -3 M132 128 l6 -3 M136 138 l6 -3 M140 148 l6 -3',
      role: 'ambient',
    },
    { d: 'M26 122 Q36 127 46 124', role: 'soft' },
    { d: 'M16 124 L10 136 H13 L7 148 H25 L19 136 H22 Z' },
    {
      d: dots([
        [30, 30],
        [52, 18],
        [74, 40],
        [96, 22],
        [118, 36],
        [140, 20],
        [20, 58],
        [44, 52],
        [66, 64],
        [90, 54],
        [112, 66],
        [134, 54],
        [150, 80],
        [14, 90],
        [60, 70],
        [102, 68],
      ]),
      role: 'ambient',
    },
    { d: 'M4 150 H156', role: 'ambient', dashed: true },
  ],
} satisfies Drawings
