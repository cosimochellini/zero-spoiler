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
   * The Fist of the First Men under falling snow: the ring wall on its
   * hilltop, seen from below as separate piled stones, a top course with a
   * second beneath it on the near side and the far side's stones behind, and
   * a pine on the ground beside the hill. "Valar Dohaeris" (episode 21) opens
   * there in a blizzard, after the fight off screen, and the Prologue of A
   * Storm of Swords (chapter 144) is set in the Night's Watch's camp on the
   * hill as the snow begins. Nothing on the hill shows who fights there. The
   * accent is the near side's top course.
   */
  'season-3': [
    {
      d: 'M32 110 Q24 120 20 132 Q14 144 4 150 M128 110 Q136 120 140 132 Q144 142 150 150',
    },
    {
      d: 'M29.5 96.6 Q29.5 91.5 34.8 91.9 Q42.5 91.1 42.5 96 Q42.8 100.5 37.2 100.5 Q29.5 100.9 29.5 96.6 M33.7 100.4 Q33.7 96.3 41.2 96 Q47 96.5 47 100.8 Q46.8 105.3 39.6 105.3 Q33.7 105 33.7 100.4 M45.5 105.4 Q45.5 100.1 51 100.6 Q59.6 99.6 59.6 104.6 Q60 109.1 54.2 109.1 Q45.5 109.6 45.5 105.4 M62.5 106.1 Q62.5 102.2 71.4 101.8 Q77.9 102.6 77.9 106.7 Q77.6 111.2 69 111.2 Q62.5 110.8 62.5 106.1 M82.1 107 Q82.1 102.2 89.2 102.4 Q97.5 102 97.5 106.7 Q97.6 111.2 90.4 111.2 Q82.1 111.4 82.1 107 M100.4 103.9 Q100.4 100.1 108.8 99.6 Q114.5 100.6 114.5 104.6 Q114.1 109.1 106 109.1 Q100.4 108.6 100.4 103.9 M113 101.3 Q113 96.3 118.6 96.6 Q126.3 95.9 126.3 100.8 Q126.5 105.3 120.6 105.3 Q113 105.6 113 101.3 M117.5 95.7 Q117.5 91.5 124.6 91.3 Q130.5 91.7 130.5 96 Q130.3 100.5 123.4 100.5 Q117.5 100.3 117.5 95.7',
      role: 'accent',
    },
    {
      d: 'M30.8 105.8 Q30.8 102.4 38.3 102 Q43.4 102.8 43.4 106.4 Q43.1 110.4 35.9 110.4 Q30.8 110 30.8 105.8 M39 111.2 Q39 106.9 45 107.1 Q52.2 106.7 52.2 110.9 Q52.3 114.9 46.2 114.9 Q39 115.1 39 111.2 M53.8 113.2 Q53.8 109.9 62.3 109.4 Q68 110.4 68 113.9 Q67.7 117.9 59.5 117.9 Q53.8 117.4 53.8 113.2 M72.2 115.5 Q72.2 111 79 111.3 Q87.8 110.7 87.8 115 Q88 119 81 119 Q72.2 119.3 72.2 115.5 M92 113.6 Q92 109.9 99.7 109.7 Q106.2 110.1 106.2 113.9 Q106 117.9 98.5 117.9 Q92 117.7 92 113.6 M107.8 111.6 Q107.8 106.9 113 107.3 Q121 106.4 121 110.9 Q121.3 114.9 115.8 114.9 Q107.8 115.3 107.8 111.6 M116.6 105.9 Q116.6 102.4 123.9 102.1 Q129.2 102.8 129.2 106.4 Q128.9 110.4 121.9 110.4 Q116.6 110.1 116.6 105.9',
      role: 'soft',
    },
    {
      d: 'M32.8 91.1 Q32.8 88.3 40.7 87.8 Q45.8 88.8 45.8 91.8 Q45.5 95.3 37.9 95.3 Q32.8 94.8 32.8 91.1 M42.4 88.7 Q42.4 84.7 47.9 85.1 Q55.4 84.4 55.4 88.2 Q55.6 91.7 49.9 91.7 Q42.4 92.1 42.4 88.7 M56.7 85.5 Q56.7 82.3 63.8 82.1 Q69.7 82.5 69.7 85.8 Q69.5 89.3 62.6 89.3 Q56.7 89.1 56.7 85.5 M73.5 85.7 Q73.5 81.5 78.6 82 Q86.5 81 86.5 85 Q86.8 88.5 81.4 88.5 Q73.5 89 73.5 85.7 M90.3 85.3 Q90.3 82.3 97.8 82 Q103.3 82.7 103.3 85.8 Q103.1 89.3 95.8 89.3 Q90.3 89 90.3 85.3 M104.6 88.8 Q104.6 84.7 109.9 85.1 Q117.6 84.3 117.6 88.2 Q117.9 91.7 112.3 91.7 Q104.6 92.1 104.6 88.8 M114.2 91.4 Q114.2 88.3 121.5 88 Q127.2 88.6 127.2 91.8 Q127 95.3 119.9 95.3 Q114.2 95 114.2 91.4',
    },
    { d: 'M120 122 l6 -3 M124 132 l6 -3 M128 142 l6 -3', role: 'ambient' },
    { d: 'M28 128 Q38 132 48 129', role: 'soft' },
    { d: 'M151 124 L145 136 H148 L142 148 H160 L154 136 H157 Z' },
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
