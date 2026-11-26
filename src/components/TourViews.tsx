import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { CharacterCrest } from '~/components/CharacterCrest'
import { type DialPoint, dialSees, latestStep } from '~/components/dial'
import { styles } from '~/components/TourScreen.styles'
import { useT } from '~/i18n/LocaleContext'
import type { CoveredRecord, Drawing } from '~/lib/view/records'
import type { TourCard, TourView } from '~/lib/view/tour'
import type { TourStep } from '~/lib/view/tourSteps'
import { settleStyles } from '~/styles/settle'

import { groupsAt, linksAt } from './tourGroups'

/** A threshold as the site bar says a bookmark: "EP 20". */
const EPISODE = 'mark.episode'

/** How many abilities under fog stand for the rest: one row of chips. */
const NEN_SHOWN = 3

/** What every view of the screen is handed. */
export interface ViewProps {
  at: DialPoint
  onOpen: (id: string) => void
  /** The card the reader opened with Show anyway, if any. */
  opened: null | string
  step: TourStep
  tour: TourView
}

/**
 * The cards of the demo at the point: the bookmark step opens them as it
 * scrolls, the fog step sets the covered ones forward, and the Show anyway
 * step offers to open the first covered one by hand.
 */
export function GridView({
  at,
  onOpen,
  opened,
  step,
  tour,
}: ViewProps): ReactElement {
  const t = useT()
  // Show anyway offers the first card the point has not reached, once.
  const offered =
    opened === null && step.key === 'anyway' ?
      tour.cast.find((card) => !dialSees(at, card))?.id
    : undefined

  return (
    <>
      <ul {...stylex.props(styles.grid)}>
        {tour.cast.map((card) => (
          <li key={card.id}>
            <GridCard
              at={at}
              card={card}
              dim={step.key === 'fog'}
              onOpen={
                card.id === offered ?
                  () => {
                    onOpen(card.id)
                  }
                : null
              }
              opened={step.key === 'anyway' && card.id === opened}
            />
          </li>
        ))}
      </ul>
      {step.key === 'fog' && (
        <p {...stylex.props(styles.note)}>
          {t('hub.tour.past', { count: tour.fogged, last: tour.lastEpisode })}
        </p>
      )}
    </>
  )
}

/** A card in the grid: open with its drawing and name, or under fog. */
function GridCard({
  at,
  card,
  dim,
  onOpen,
  opened,
}: {
  at: DialPoint
  card: TourCard
  dim: boolean
  onOpen: (() => void) | null
  opened: boolean
}): ReactElement {
  const t = useT()
  if (opened || dialSees(at, card)) {
    return (
      <div
        {...stylex.props(
          styles.card,
          settleStyles.band,
          dim && styles.quiet,
          opened && styles.lifted,
        )}
      >
        <span {...stylex.props(styles.crest)}>
          <Crest visual={latestStep(card.drawings, at)} />
        </span>
        <span {...stylex.props(styles.cardName)}>{card.name}</span>
        {opened && (
          <span {...stylex.props(styles.mono, styles.accent)}>
            {t('hub.tour.anywayDone')}
          </span>
        )}
      </div>
    )
  }
  return (
    <div {...stylex.props(styles.card, styles.fogged)}>
      <span {...stylex.props(styles.crest)}>
        <CharacterCrest />
        {onOpen !== null && (
          <button
            onClick={onOpen}
            type="button"
            {...stylex.props(styles.reveal)}
          >
            {t('veil.revealShort')}
          </button>
        )}
      </span>
      <span {...stylex.props(styles.mono, styles.threshold)}>
        {t(EPISODE, { threshold: card.revealedAtEpisode })}
      </span>
    </div>
  )
}

/** The first card large, each of its facts at the step the point reached. */
export function FocusView({ at, tour }: ViewProps): null | ReactElement {
  const card = tour.cast[0]
  if (card === undefined) {
    return null
  }
  const facts = [
    { loud: true, slot: 'epithet', value: latestStep(card.epithet, at) },
    { loud: false, slot: 'role', value: latestStep(card.role, at) },
    { loud: false, slot: 'side', value: latestStep(card.affiliation, at) },
    { loud: true, slot: 'bounty', value: latestStep(card.bounty, at) },
  ].filter((fact) => fact.value !== undefined)

  return (
    <div {...stylex.props(styles.focus)}>
      <span {...stylex.props(styles.focusCrest)}>
        <Crest visual={latestStep(card.drawings, at)} />
      </span>
      <div {...stylex.props(styles.facts)}>
        <p {...stylex.props(styles.focusName)}>{card.name}</p>
        {facts.map(({ loud, slot, value }) => (
          <p
            // A changed fact mounts anew and settles in: the change shows.
            key={`${slot}:${String(value)}`}
            {...stylex.props(
              loud ? styles.loud : styles.fact,
              settleStyles.band,
            )}
          >
            {value}
          </p>
        ))}
      </div>
    </div>
  )
}

/** The open cards, sorted by the group their affiliation names at the point. */
export function GroupsView({ at, tour }: ViewProps): ReactElement {
  return (
    <div {...stylex.props(styles.groups)}>
      {groupsAt(tour.cast, at).map(([group, cards]) => (
        <section
          key={group}
          {...stylex.props(styles.group)}
        >
          <h4 {...stylex.props(styles.mono, styles.groupName)}>{group}</h4>
          <ul {...stylex.props(styles.members)}>
            {cards.map((card) => (
              <li
                key={card.id}
                {...stylex.props(styles.member, settleStyles.band)}
              >
                <span {...stylex.props(styles.memberCrest)}>
                  <Crest visual={latestStep(card.drawings, at)} />
                </span>
                <span {...stylex.props(styles.memberWords)}>
                  <span {...stylex.props(styles.cardName)}>{card.name}</span>
                  <span {...stylex.props(styles.fact)}>
                    {latestStep(card.role, at)}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

/** One character's people at the point, and the Nen abilities under fog. */
export function BondsView({ at, tour }: ViewProps): ReactElement {
  const t = useT()
  const owner = tour.cast.find(({ id }) => id === tour.bonds?.of)
  const links = tour.bonds === undefined ? [] : linksAt(tour.bonds, at)

  return (
    <div {...stylex.props(styles.bonds)}>
      {owner !== undefined && (
        <Owner
          at={at}
          card={owner}
        />
      )}
      <ul {...stylex.props(styles.links)}>
        {links.map((link) => (
          <li
            key={`${link.id}:${link.type}`}
            {...stylex.props(styles.link, settleStyles.band)}
          >
            <span {...stylex.props(styles.cardName)}>{link.name}</span>
            <span {...stylex.props(styles.fact)}>{link.type}</span>
          </li>
        ))}
      </ul>
      <h4 {...stylex.props(styles.mono, styles.groupName)}>
        {t('hub.tour.nen')}
      </h4>
      <ul {...stylex.props(styles.covered)}>
        {tour.covered.slice(0, NEN_SHOWN).map((covered) => (
          <li key={covered.handle}>
            <CoveredChip covered={covered} />
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Whose list it is: named once the point reaches them, under fog before. */
function Owner({ at, card }: { at: DialPoint; card: TourCard }): ReactElement {
  const t = useT()
  const open = dialSees(at, card)

  return (
    <div {...stylex.props(styles.owner)}>
      <span {...stylex.props(styles.memberCrest)}>
        <Crest visual={open ? latestStep(card.drawings, at) : undefined} />
      </span>
      <p {...stylex.props(styles.focusName)}>
        {open ?
          t('hub.tour.bondsOf', { name: card.name })
        : t(EPISODE, { threshold: card.revealedAtEpisode })}
      </p>
    </div>
  )
}

/** A record past the demo: "Entry under fog" and where it opens. */
function CoveredChip({ covered }: { covered: CoveredRecord }): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.chip)}>
      <span {...stylex.props(styles.fact)}>{t('veil.entry')}</span>
      <span {...stylex.props(styles.mono, styles.threshold)}>
        {t(EPISODE, { threshold: covered.revealedAtEpisode })}
      </span>
    </div>
  )
}

/** A record's drawing in its seal, or the bare seal with none to draw. */
function Crest({ visual }: { visual: Drawing | undefined }): ReactElement {
  return visual === undefined ?
      <CharacterCrest />
    : <CharacterCrest visual={visual} />
}
