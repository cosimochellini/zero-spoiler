import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import { Fragment, type ReactElement, type ReactNode } from 'react'

import { formatBounty } from '~/i18n/bounty'
import { useLocale, useSeriesT, useT } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'
import type { SeriesTranslate, Translate } from '~/i18n/types'
import { useSeriesParams } from '~/lib/progress/BookmarkContext'
import type { CharacterFacts as Facts, RecordLink } from '~/lib/view/facts'
import { powerAnchor, type SeatLink } from '~/lib/view/power'
import type { CharacterStatus } from '~/lib/view/records'
import {
  color,
  dur,
  ease,
  font,
  leading,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/** The facts as they stand at the reader's bookmark. */
export interface CharacterFactsProps {
  facts: Facts
}

/**
 * The dossier's facts as a definition list, each as it stands at the
 * reader's episode.
 *
 * Every fact is a timeline in the archive, and the row shows the latest entry
 * the reader has reached, so Robin's affiliation changes when she changes it
 * and a bounty is the one on the poster the reader has seen. A fact with no
 * entry yet is not a row: an empty "Bounty" line would say that a bounty is
 * coming, which is itself a spoiler. The timelines are resolved on the
 * server, so an entry above the reader's episode is not in the payload — not
 * merely absent from the DOM.
 *
 * What stays here is what belongs to the reader's language rather than the
 * archive: the labels, and the digit grouping of a bounty.
 */
export function CharacterFacts({
  facts,
}: CharacterFactsProps): null | ReactElement {
  const { locale } = useLocale()
  const t = useT()
  // The devil fruit and the bounty are One Piece's facts, in its words: on
  // another series' page there is no such row.
  const onePiece = useSeriesT('one-piece')
  // So are the Nen type and the abilities Hunter x Hunter's.
  const hunter = useSeriesT('hunter-x-hunter')

  const rows: [string, ReactNode][] = [
    [t('character.status'), statusRow(facts.status, t)],
    [t('character.epithet'), facts.epithet],
    [t('character.affiliation'), facts.affiliation],
    [t('character.origin'), facts.origin],
    ...(onePiece === undefined ? [] : onePieceRows(facts, locale, onePiece)),
    ...(hunter === undefined ? [] : hunterRows(facts, hunter)),
  ]
  const shown = rows.filter(([, value]) => value !== undefined)

  if (shown.length === 0) {
    return null
  }

  return (
    <dl
      aria-label={t('character.factsLabel')}
      {...stylex.props(styles.facts)}
    >
      {shown.map(([label, value]) => {
        return (
          <div
            key={label}
            {...stylex.props(styles.fact)}
          >
            <dt {...stylex.props(styles.label)}>{label}</dt>
            <dd {...stylex.props(styles.value)}>{value}</dd>
          </div>
        )
      })}
    </dl>
  )
}

/** The facts only One Piece files: seats of power, a devil fruit, a bounty. */
function onePieceRows(
  facts: Facts,
  locale: Locale,
  t: SeriesTranslate<'one-piece'>,
): [string, ReactNode][] {
  return [
    [t('character.ranks'), seatRow(facts.seats)],
    [t('character.devilFruit'), linkRow(facts.devilFruit, FRUIT_PAGE)],
    [t('character.bounty'), formatBounty(facts.bounty, locale, t)],
  ]
}

/**
 * The Nen type row and the abilities row, Hunter x Hunter's own. The type's
 * key is built from the value, like the status's, so a type with no label
 * fails `typecheck`.
 */
function hunterRows(
  facts: Facts,
  t: SeriesTranslate<'hunter-x-hunter'>,
): [string, ReactNode][] {
  return [
    [
      t('character.nen'),
      facts.nen === undefined ? undefined : t(`nen.${facts.nen}`),
    ],
    [t('character.abilities'), linkRow(facts.abilities, ABILITY_PAGE)],
  ]
}

/**
 * What became of the character, in the reader's language, or nothing when the
 * archive has not said.
 *
 * The key is built from the value the way a port's sea and form are built
 * (`~/components/PortFacts`), which makes it exhaustive by construction: a
 * status with no label is not a key the dictionary carries, so it fails
 * `typecheck` rather than printing its own id on the page.
 */
function statusRow(
  status: CharacterStatus | undefined,
  t: Translate,
): string | undefined {
  return status === undefined ? undefined : t(`status.${status}`)
}

/** The page a row's records lead to: a fruit's, or an ability's. */
type RecordPage =
  '/$series/$locale/abilities/$id' | '/$series/$locale/fruits/$id'

const FRUIT_PAGE: RecordPage = '/$series/$locale/fruits/$id'
const ABILITY_PAGE: RecordPage = '/$series/$locale/abilities/$id'

/**
 * The devil fruit row or the abilities row, or nothing when the reader has
 * not been told of one.
 *
 * Each is a link because the record has a page of its own, and the link is
 * always safe to print: the row is only built from a timeline entry the
 * reader has reached, and the record opens no later than the entry that
 * names it, which a data test holds.
 */
function linkRow(links: RecordLink[] | undefined, to: RecordPage): ReactNode {
  return links === undefined ? undefined : (
      <RecordLinks
        links={links}
        to={to}
      />
    )
}

/** One link per record, comma-separated: an entry may name more than one. */
function RecordLinks({
  links,
  to,
}: {
  links: RecordLink[]
  to: RecordPage
}): ReactElement {
  const { series, locale } = useSeriesParams()

  return (
    <>
      {links.map((link, at) => {
        return (
          <Fragment key={link.id}>
            {at === 0 ? null : ', '}
            <Link
              params={{ series, locale, id: link.id }}
              to={to}
              {...stylex.props(styles.link)}
            >
              {link.name}
            </Link>
          </Fragment>
        )
      })}
    </>
  )
}

/** The seats row, or nothing when the character holds none the reader has met. */
function seatRow(seats: SeatLink[] | undefined): ReactNode {
  return seats === undefined ? undefined : <SeatLinks seats={seats} />
}

/**
 * One line per seat, each leading to its body on the ranks page. The server
 * sends only the seats that page shows the character in, so a link here
 * opens nothing the reader has not reached.
 */
function SeatLinks({ seats }: { seats: SeatLink[] }): ReactElement {
  const { series, locale } = useSeriesParams()

  return (
    <ul {...stylex.props(styles.seats)}>
      {seats.map((seat) => {
        const label =
          seat.body === undefined ? seat.title : `${seat.title}, ${seat.body}`

        return (
          <li key={`${seat.id} ${label}`}>
            <Link
              hash={powerAnchor(seat.id)}
              params={{ series, locale }}
              to="/$series/$locale/ranks"
              {...stylex.props(styles.link)}
            >
              {label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

const styles = stylex.create({
  // The same ledger as a port's facts: a label in small caps, the value in
  // body type, a hairline between rows.
  facts: {
    marginBlock: 0,
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    marginBlockStart: space.xs,
    minWidth: 0,
  },
  fact: {
    paddingBlock: space.xs,
    alignItems: 'baseline',
    borderBlockEndColor: color.rule,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
    columnGap: space.md,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
      '@media (min-width: 30rem)': 'minmax(7rem, 9rem) minmax(0, 1fr)',
    },
    rowGap: space.xs3,
    minWidth: 0,
  },
  label: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.xs,
    fontWeight: 600,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  value: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    marginInlineStart: 0,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  seats: { margin: 0, padding: 0, listStyle: 'none' },
  // The same link voice as a record tile: colour on hover, the rule under it
  // reserved at rest so nothing shifts when the pointer arrives.
  link: {
    color: {
      'default': color.ink2,
      ':hover': color.accent,
      ':active': color.ink2,
    },
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: { 'default': color.rule, ':hover': color.accent },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.hair,
    textUnderlineOffset: '3px',
    transitionDuration: dur.micro,
    transitionProperty: 'color, text-decoration-color',
    transitionTimingFunction: ease.out,
  },
})
