import type { Drawings, Stroke } from '~/data/art/stroke'

// shortcut: neutral records placeholders; replace with finished drawings in #917.
const PERSON: Stroke[] = [
  {
    d: 'M80 34 C64 34 58 46 58 61 C58 77 67 88 80 88 C93 88 102 77 102 61 C102 46 96 34 80 34 Z',
  },
  { d: 'M38 127 Q42 98 68 93 M122 127 Q118 98 92 93' },
  { d: 'M38 127 Q80 137 122 127', role: 'soft' },
  { d: 'M69 96 Q80 105 91 96', role: 'accent' },
]

// shortcut: neutral place placeholder, a hull on the water; finished drawing in #917.
const SHIP: Stroke[] = [
  { d: 'M24 96 Q80 120 136 96 L126 76 L34 76 Z' },
  { d: 'M48 76 L48 54 L112 54 L112 76' },
  { d: 'M20 112 Q50 104 80 112 Q110 120 140 112', role: 'soft' },
  { d: 'M60 64 L100 64', role: 'accent' },
]

export const KAKIN_PHASE_TWO_DRAWINGS = {
  'black-whale': SHIP,
  'tokarine': PERSON,
  'vincent': PERSON,
  'barrigen': PERSON,
  'belerainte': PERSON,
  'danjin': PERSON,
  'furykov': PERSON,
  'illardia': PERSON,
  'ladiolus': PERSON,
  'loberry': PERSON,
  'longhi': PERSON,
  'maor': PERSON,
  'mushaho': PERSON,
  'myuhan': PERSON,
  'satobi': PERSON,
  'shedule': PERSON,
  'tenftory': PERSON,
  'yuhirai': PERSON,
  'yuri': PERSON,
  'slakka': PERSON,
} satisfies Drawings
