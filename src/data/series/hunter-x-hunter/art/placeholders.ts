import type { Stroke } from '~/data/art/stroke'

// shortcut: neutral placeholders for records still waiting for their
// drawings; Kakin phase 5 uses it until #1158.
export const PERSON: Stroke[] = [
  {
    d: 'M80 34 C64 34 58 46 58 61 C58 77 67 88 80 88 C93 88 102 77 102 61 C102 46 96 34 80 34 Z',
  },
  { d: 'M38 127 Q42 98 68 93 M122 127 Q118 98 92 93' },
  { d: 'M38 127 Q80 137 122 127', role: 'soft' },
  { d: 'M69 96 Q80 105 91 96', role: 'accent' },
]
