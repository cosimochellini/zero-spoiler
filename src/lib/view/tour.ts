import type { Gated } from '~/lib/progress/spoiler'
import type {
  CoveredRecord,
  DemoEntry,
  Drawing,
  Step,
} from '~/lib/view/records'

/**
 * The hub's tour (#1703): a few records of one series' demo stretch, with
 * every dated fact the tour's slider can reach inside it. Owner ruling
 * 2026-11-26: the tour may show the demo stretch, which no other page past
 * the landing copies, and nothing past it but covered records.
 */
export interface TourCard extends Omit<DemoEntry, 'bounty' | 'role'> {
  /** The bounty, already said in the series' words. */
  bounty: Step<string>[]
  drawings: Step<Drawing>[]
  role: Step<string>[]
}

/** One link in the list a character keeps, at one point of the demo. */
export interface TourLink {
  id: string
  type: string
}

/** A person the list names: a name, and where the person opens. */
export interface TourPerson extends Gated {
  id: string
  name: string
}

/** How one character's list of people changes across the demo. */
export interface TourBonds {
  /** The character whose list it is: one of the tour's cards. */
  of: string
  people: TourPerson[]
  snapshots: Step<TourLink[]>[]
}

export interface TourView {
  bonds?: TourBonds
  cast: TourCard[]
  /** Records past the demo, as the fog shows them: handle, kind, thresholds. */
  covered: CoveredRecord[]
  /** How many records are past the demo. */
  fogged: number
  lastEpisode: number
  total: number
}
