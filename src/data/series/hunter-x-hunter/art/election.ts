import type { Drawings, Stroke } from '~/data/art/stroke'

// Neutral placeholders for the records PR. Finished drawings belong to #913.
// Kakin phase 4 reuses both until #917.
export const PERSON: Stroke[] = [
  {
    d: 'M80 34 C64 34 58 46 58 61 C58 77 67 88 80 88 C93 88 102 77 102 61 C102 46 96 34 80 34 Z',
  },
  { d: 'M38 127 Q42 98 68 93 M122 127 Q118 98 92 93' },
  { d: 'M38 127 Q80 137 122 127', role: 'soft' },
  { d: 'M69 96 Q80 105 91 96', role: 'accent' },
]

export const PLACE: Stroke[] = [
  { d: 'M34 47 L63 38 L98 48 L126 39 V111 L98 122 L63 111 L34 121 Z' },
  { d: 'M63 38 V111 M98 48 V122', role: 'soft' },
  { d: 'M46 100 L59 86 L75 90 L91 71 L112 74', role: 'accent' },
  { d: 'M46 65 L54 60 M108 99 L116 96', role: 'ambient' },
]

export const ELECTION_DRAWINGS = {
  'alluka-zoldyck': PERSON,
  'amane': PERSON,
  'beans': PERSON,
  'botobai-gigante': PERSON,
  'bushidora-ambitious': PERSON,
  'cheadle-yorkshire': PERSON,
  'cluck': PERSON,
  'cutie-beauty': PERSON,
  'gel': PERSON,
  'ginta': PERSON,
  'hishita': PERSON,
  'ickshonpe-katocha': PERSON,
  'kanzai': PERSON,
  'kasuga': PERSON,
  'linne-horsdoeuvre': PERSON,
  'loupe-highland': PERSON,
  'mitsuba': PERSON,
  'mizaistom-nana': PERSON,
  'muna': PERSON,
  'nanika': PERSON,
  'pariston-hill': PERSON,
  'pyon': PERSON,
  'saccho-kobayakawa': PERSON,
  'saiyu': PERSON,
  'sanbica-norton': PERSON,
  'teradein-neutral': PERSON,
  'tsubone': PERSON,
  'parasta-airport': PLACE,
  'swardani-city': PLACE,
  'world-tree': PLACE,
  'yasuha': PERSON,
} satisfies Drawings
