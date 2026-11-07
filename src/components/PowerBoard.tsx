import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { EpisodeMark } from '~/components/EpisodeMark'
import { useSeriesOnlyT } from '~/i18n/LocaleContext'
import { useBookmark, useSeriesParams } from '~/lib/progress/BookmarkContext'
import type { BodyView, PowerPageView, SeatView } from '~/lib/view/power'
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

/**
 * The power page's frame (#1085): each body the reader has met, its seats in
 * order and who holds each. Plain on purpose; its look is #1086's.
 */
export function PowerBoard({ page }: { page: PowerPageView }): ReactElement {
  const t = useSeriesOnlyT('one-piece')
  const { bookmark } = useBookmark()

  return (
    <ArchivePage title={t('power.title')}>
      <div {...stylex.props(styles.stack)}>
        {bookmark === null ?
          <div {...stylex.props(styles.notice)}>
            <p {...stylex.props(styles.lede)}>{t('power.noBookmark')}</p>
            <EpisodeMark placement="fold" />
          </div>
        : page.bodies.length === 0 && (
            <p {...stylex.props(styles.lede)}>{t('power.none')}</p>
          )
        }
        {page.bodies.map((body) => (
          <Body
            key={body.id}
            body={body}
          />
        ))}
      </div>
    </ArchivePage>
  )
}

function Body({ body }: { body: BodyView }): ReactElement {
  const t = useSeriesOnlyT('one-piece')
  const heading = `power-${body.id}`

  return (
    <section aria-labelledby={heading}>
      <h2
        id={heading}
        {...stylex.props(styles.name)}
      >
        {body.name}
      </h2>
      {body.ended && <p {...stylex.props(styles.lede)}>{t('power.ended')}</p>}
      <dl {...stylex.props(styles.seats)}>
        {body.seats.map((seat, at) => (
          <div
            // eslint-disable-next-line @eslint-react/no-array-index-key -- a seat has no id, and the list is never reordered
            key={at}
            {...stylex.props(styles.seat)}
          >
            <dt {...stylex.props(styles.title)}>{seat.title}</dt>
            <dd {...stylex.props(styles.holder)}>
              <Holder seat={seat} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function Holder({ seat }: { seat: SeatView }): ReactElement | string {
  const t = useSeriesOnlyT('one-piece')
  const { series, locale } = useSeriesParams()

  if (seat.state === 'held') {
    return (
      <Link
        params={{ series, locale, id: seat.holder.id }}
        to="/$series/$locale/characters/$id"
        {...stylex.props(styles.link)}
      >
        {seat.holder.name}
      </Link>
    )
  }

  return t(seat.state === 'vacant' ? 'power.vacant' : 'power.unknown')
}

const styles = stylex.create({
  stack: { gap: space.xl, display: 'grid' },
  notice: { gap: space.md, display: 'grid', justifyItems: 'start' },
  lede: {
    margin: 0,
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },
  name: {
    margin: 0,
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    lineHeight: leading.heading,
  },
  seats: { margin: 0, display: 'grid', marginBlockStart: space.sm },
  seat: {
    paddingBlock: space.xs,
    borderBlockEndColor: color.rule,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
    columnGap: space.md,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
      '@media (min-width: 30rem)': 'minmax(7rem, 12rem) minmax(0, 1fr)',
    },
  },
  title: { color: color.muted, fontSize: text.xs, lineHeight: leading.body },
  holder: {
    margin: 0,
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
  },
  link: { color: color.ink2, textDecorationLine: 'underline' },
})
