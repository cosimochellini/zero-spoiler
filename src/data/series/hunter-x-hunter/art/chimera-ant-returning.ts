import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'

import { CHAPTER_ONE_DRAWINGS } from './chapter-one'
import { zevilArt } from './zevil'

/** Records filed in earlier arcs whose drawing changes in Chimera Ant phase 2 (#1021): their stages only. */
export const CHIMERA_ANT_RETURNING_DRAWINGS = {} satisfies Drawings

/** Each first drawing without its shadow, to be laid on the ground. */
const KITE_CAP = CHAPTER_ONE_DRAWINGS.kite.slice(0, -1)
const POKKLE_BOW = zevilArt.pokkle.slice(0, 5)
const POKKLE_QUIVER = zevilArt.pokkle.slice(5, -1)
const PONZU_HAT = zevilArt.ponzu.slice(0, -1)

const GROUND: Stroke = { d: 'M4 150 H156', role: 'ambient', dashed: true }

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
    // The same bow lying on its tips and the quiver on its side beside it,
    // its arrows spilled: the Ants butcher him for the Queen in chapter
    // 198. The 2011 anime leaves the scene out; episode 84, his last, only
    // orders the stage.
    {
      episode: 84,
      chapter: 198,
      source: 'chapter',
      value: [
        ...moved(
          POKKLE_BOW,
          'translate(52 150) rotate(-90) scale(0.66) translate(-40 -100)',
        ),
        ...moved(
          POKKLE_QUIVER,
          'translate(122 143) rotate(80) scale(0.54) translate(-110 -110)',
        ),
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
