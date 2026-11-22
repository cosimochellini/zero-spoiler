import type { Drawings } from '~/data/art/stroke'
import { shadow } from '~/lib/svg/primitives'

/** First objects, with direct frame/page checks still required before merge. */
export const CHAPTER_ONE_DRAWINGS = {
  // Kite's peaked cap, the soft crown slouching over the band like a beret
  // and the peak in the record's tint: what he wears when he saves Gon in
  // chapter 1, which the 2011 anime first shows in episode 76's flashback.
  // No sword, card or later ability. Reference not viewed.
  kite: [
    {
      d: 'M50 116 C36 108 34 90 46 78 C60 62 96 56 118 66 C134 74 138 96 128 114',
    },
    { d: 'M50 116 C74 122 104 120 128 114' },
    {
      d: 'M50 116 L48 124 M128 114 V122 M48 124 C74 130 104 128 128 122',
      role: 'soft',
    },
    {
      d: 'M50 122 C34 120 16 124 10 134 C22 144 48 142 66 128',
      role: 'accent',
    },
    { d: 'M10 134 L11 138 C24 148 50 145 66 131', role: 'soft' },
    { d: 'M84 60 C76 76 70 96 72 118', role: 'soft' },
    { d: 'M46 78 C58 90 84 94 112 86', role: 'soft' },
    { d: 'M124 84 l6 4 M126 96 l6 4 M122 106 l6 4', role: 'ambient' },
    shadow(76, 150, 54),
  ],
  // The foxbear cub sitting, seen from behind: the stocky bear body with a
  // few tufts of fur, the pointed fox ears on its head and the claws of its
  // hind paws in the record's tint. Gon takes him in after Kite kills his
  // mother in chapter 1, which the 2011 anime first shows in episode 76's
  // flashback. No face.
  kon: [
    {
      d: 'M66 68 C46 66 32 84 32 112 C32 134 40 148 52 152 H108 C120 148 128 134 128 112 C128 84 114 66 94 68',
    },
    {
      d: 'M64 74 C60 62 62 52 66 46 L64 24 L77 38 Q80 37 83 38 L96 24 L94 46 C98 52 100 62 96 74 C88 80 72 80 64 74 Z',
    },
    { d: 'M68 42 L67 31 L73 38 M92 42 L93 31 L87 38', role: 'soft' },
    {
      d: 'M50 150 C38 148 28 152 26 160 H56 M110 150 C122 148 132 152 134 160 H104',
    },
    {
      d: 'M26 160 l-4 3 M31 160 l-3 4 M36 160 l-2 4 M134 160 l4 3 M129 160 l3 4 M124 160 l2 4',
      role: 'accent',
    },
    {
      d: 'M36 96 l-4 3 M34 120 l-4 2 M62 84 Q70 90 80 90 Q90 90 98 84',
      role: 'soft',
    },
    {
      d: 'M112 90 l6 -4 M116 106 l6 -4 M118 122 l6 -4 M116 138 l5 -4',
      role: 'ambient',
    },
    shadow(80, 170, 58),
  ],
} satisfies Drawings
