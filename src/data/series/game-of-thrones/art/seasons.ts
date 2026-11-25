import type { Drawings } from '~/data/art/stroke'
import { circle, shadow } from '~/lib/svg/primitives'

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
    { d: 'M66 118 V130 M80 116 V130 M94 118 V130', role: 'soft' },
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
} satisfies Drawings
