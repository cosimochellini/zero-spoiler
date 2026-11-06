import type { Drawings, Stroke } from '~/data/art/stroke'

// shortcut: neutral placeholders, replace with the finished drawings in #917.
const PERSON: Stroke[] = [
  {
    d: 'M80 34 C64 34 58 46 58 61 C58 77 67 88 80 88 C93 88 102 77 102 61 C102 46 96 34 80 34 Z',
  },
  { d: 'M38 127 Q42 98 68 93 M122 127 Q118 98 92 93' },
  { d: 'M38 127 Q80 137 122 127', role: 'soft' },
  { d: 'M69 96 Q80 105 91 96', role: 'accent' },
]

export const KAKIN_PHASE_ONE_DRAWINGS = {
  'beyond-netero': PERSON,
  'golem': PERSON,
  'benjamin-hui-guo-rou': PERSON,
  'camilla-hui-guo-rou': PERSON,
  'zhang-lei-hui-guo-rou': PERSON,
  'tserriednich-hui-guo-rou': PERSON,
  'tubeppa-hui-guo-rou': PERSON,
  'tyson-hui-guo-rou': PERSON,
  'luzurus-hui-guo-rou': PERSON,
  'sale-sale-hui-guo-rou': PERSON,
  'halkenburg-hui-guo-rou': PERSON,
  'kacho-hui-guo-rou': PERSON,
  'fugetsu-hui-guo-rou': PERSON,
  'momoze-hui-guo-rou': PERSON,
  'marayam-hui-guo-rou': PERSON,
  'woble-hui-guo-rou': PERSON,
  'izunavi': PERSON,
  'unma-hui-guo-rou': PERSON,
  'duazul-hui-guo-rou': PERSON,
  'tang-zhao-li-hui-guo-rou': PERSON,
  'katrono-hui-guo-rou': PERSON,
  'swinko-swinko-hui-guo-rou': PERSON,
  'seiko-hui-guo-rou': PERSON,
  'zigg-zoldyck': PERSON,
  'curly': PERSON,
  'mark': PERSON,
} satisfies Drawings
