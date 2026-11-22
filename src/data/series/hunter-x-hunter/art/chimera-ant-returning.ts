import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle } from '~/lib/svg/primitives'

import { CHAPTER_ONE_DRAWINGS } from './chapter-one'
import { zevilArt } from './zevil'

/** Records filed in earlier arcs whose drawing changes in Chimera Ant phase 2 (#1021): their stages only. */
export const CHIMERA_ANT_RETURNING_DRAWINGS = {} satisfies Drawings

/** Each first drawing without its shadow, to be laid on the ground. */
const KITE_CAP = CHAPTER_ONE_DRAWINGS.kite.slice(0, -1)
const PONZU_HAT = zevilArt.ponzu.slice(0, -1)

const GROUND: Stroke = { d: 'M4 150 H156', role: 'ambient', dashed: true }

/**
 * The head of one of Pokkle's Rainbow arrows, point to the upper right:
 * the blade in tint and its rib. Both his Nen stages draw this same head.
 */
const RAINBOW_HEAD: Stroke[] = [
  { d: 'M101.4 85 L133.2 68.8 L117 100.6 Z', role: 'accent' },
  { d: 'M109.2 92.8 L133.2 68.8', role: 'soft' },
]

/** Their later stages, each with its true chapter pin. */
export const chimeraAntReturningRedrawn: Redrawings = {
  kite: [
    // The same cap tipped over on the ground, empty, its peak in the air:
    // Neferpitou kills him and holds his head, episode 85 / chapter 199.
    // No body and no wound are drawn.
    {
      episode: 85,
      chapter: 199,
      value: [
        ...moved(
          KITE_CAP,
          'translate(84 120) rotate(26) scale(0.8) translate(-76 -100)',
        ),
        GROUND,
      ],
    },
  ],
  pokkle: [
    // Rainbow: one arrow of aura nocked on a sling of aura, both in open
    // muted lines and no hand drawn, the arrow's head in tint flaring as
    // the Red Arrow does. The bow and quiver are gone: he gave them up for
    // this ability. He shoots the Ants that chase Ponzu in episode 79; the
    // manga first shows it when he burns the Ant that kills Pekuba, chapter
    // 190.
    {
      episode: 79,
      chapter: 190,
      value: [
        {
          d: 'M31.1 167.4 L52.3 146.2 M34.6 170.9 L55.8 149.7 M57.9 140.5 L79.1 119.3 M61.5 144.1 L82.7 122.9 M84.8 113.7 L104.6 93.9 M88.3 117.2 L108.1 97.4',
          role: 'ambient',
        },
        ...RAINBOW_HEAD,
        {
          d: 'M102.1 82.9 Q88 82.9 76.7 88.6 M111.3 78 Q100.7 73 86.6 73 M119.1 99.9 Q119.1 114 113.4 125.3 M124 90.7 Q129 101.3 129 115.4',
          role: 'ambient',
        },
        {
          d: `M42.7 122.5 Q27.2 155 30 172 M79.5 159.3 Q47 174.8 30 172 ${circle(42.7, 122.5, 3)} ${circle(79.5, 159.3, 3)}`,
          role: 'ambient',
        },
      ],
    },
    // The same arrowhead on the ground and the rest of the arrow broken
    // into pieces beside it, the sling of aura gone slack, no one there:
    // the Ants butcher him for the Queen in chapter 198. The 2011 anime
    // leaves the scene out, so it is the manga's alone.
    {
      episode: 148,
      chapter: 198,
      source: 'chapter',
      value: [
        ...moved(
          RAINBOW_HEAD,
          'translate(124 138) rotate(36) scale(1.1) translate(-117.2 -84.8)',
        ),
        {
          d: 'M62 146 L80 140 M61 141 L79 135 M86 147 L104 146 M86 142 L104 141 M44 136 L54 147 M48 133 L58 144',
          role: 'ambient',
        },
        {
          d: `M12 147 C20 138 28 152 36 144 C40 140 44 142 46 146 ${circle(9, 147, 3)} ${circle(49, 147, 3)}`,
          role: 'ambient',
        },
        GROUND,
      ],
    },
  ],
  ponzu: [
    // The same hat fallen on its brim and tipped to one side, no one under
    // it: an Ant shoots her as she flees, episode 80 / chapter 190.
    {
      episode: 80,
      chapter: 190,
      value: [
        ...moved(
          PONZU_HAT,
          'translate(80 108) rotate(-16) scale(0.8) translate(-80 -112)',
        ),
        GROUND,
      ],
    },
  ],
}
