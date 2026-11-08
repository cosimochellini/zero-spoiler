/* Hallmark · pre-emit critique: P5 H4 E4 S5 R4 V4 */
/* Hallmark · route: custom (bespoke) · genre: atmospheric · macrostructure: Marquee Hero
 *   (a hero title over a hall of thrones; the last build was Map / Diagram)
 * · idea: "thrones lit one by one" — every seat the reader has met is a throne,
 *   and a throne lights in its holder's colour only once the bookmark reaches
 *   who sits in it. A fogged seat is a dashed, unlit throne; a vacant one a
 *   solid, empty throne. The spoiler contract is the picture: the dark is what
 *   is not yet known. Mocked against a tiered monument and a ladder of ranks.
 * · theme: Sea Chart (locked) · display: Bricolage Grotesque 800 at `hero`
 * · hierarchy: a council's seats stand level; a chain's or a crew's first seat
 *   (the top rank, the captain) stands alone above the rest, larger
 * · motion: each lit throne's glow fades up in seat order, opacity only, and
 *   not at all under reduced motion; the title never animates (#929)
 * · contrast: names ink, titles muted, states ink2/muted on paper (40-41);
 *   the glow is decorative and carries no text */
import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArtStrokes } from '~/components/ChartArt'
import {
  THRONE_ART_BOX,
  THRONE_BACK,
  THRONE_DAIS,
  THRONE_VIEWBOX,
} from '~/components/chrome/throne'
import { ART_VIEWBOX, tintOf } from '~/components/drawing'
import { emblemStyles } from '~/components/emblem.styles'
import { EpisodeMark } from '~/components/EpisodeMark'
import { styles } from '~/components/PowerBoard.styles'
import { useSeriesOnlyT } from '~/i18n/LocaleContext'
import { useBookmark, useSeriesParams } from '~/lib/progress/BookmarkContext'
import {
  type BodyView,
  powerAnchor,
  type PowerPageView,
  type SeatView,
} from '~/lib/view/power'
import { settleStyles } from '~/styles/settle'

/**
 * The ranks page (#1086, the power page until #1194): a hall of thrones,
 * one row of them for each body the reader has met and sees a held or vacant
 * seat of. Only a held seat has a drawing and a colour, and the server sends
 * them only for a holder the reader has reached, so the hall is as dark as
 * the reader's bookmark leaves it. Bodies met with every seat under fog are
 * one line at the end, never named, counted or placed.
 */
export function PowerBoard({ page }: { page: PowerPageView }): ReactElement {
  const t = useSeriesOnlyT('one-piece')
  const { bookmark } = useBookmark()

  return (
    <main
      id="content"
      {...stylex.props(styles.page)}
    >
      <header {...stylex.props(styles.head)}>
        <h1 {...stylex.props(styles.title)}>{t('ranks.title')}</h1>
        <p {...stylex.props(styles.lede)}>{t('ranks.lede')}</p>
      </header>
      {bookmark === null ?
        <div {...stylex.props(styles.notice)}>
          <p {...stylex.props(styles.lede)}>{t('ranks.noBookmark')}</p>
          <EpisodeMark placement="fold" />
        </div>
      : page.bodies.length === 0 && (
          <p {...stylex.props(styles.lede)}>{t('ranks.none')}</p>
        )
      }
      {page.bodies.map((body, at) => (
        <Body
          key={body.id}
          at={at}
          body={body}
        />
      ))}
      {page.fogged && (
        <p {...stylex.props(styles.fogged)}>{t('ranks.fogged')}</p>
      )}
    </main>
  )
}

/** A body's number, `01` on: two digits hold every body the epic lists. */
const NUMERAL_DIGITS = 2

function Body({ body, at }: { at: number; body: BodyView }): ReactElement {
  const t = useSeriesOnlyT('one-piece')
  // The section is what a seat on a character's page links to; its heading
  // names it.
  const anchor = powerAnchor(body.id)
  const heading = `${anchor}-name`
  // A chain's top rank and a crew's captain stand alone above the rest.
  const ranked = body.kind !== 'council'
  let lit = 0

  return (
    <section
      aria-labelledby={heading}
      id={anchor}
      {...stylex.props(styles.body, settleStyles.band, settleStyles.at(at))}
    >
      <header {...stylex.props(styles.bodyHead)}>
        <span
          aria-hidden="true"
          {...stylex.props(styles.numeral)}
        >
          {String(at + 1).padStart(NUMERAL_DIGITS, '0')}
        </span>
        <h2
          id={heading}
          {...stylex.props(styles.name)}
        >
          {body.name}
        </h2>
        {body.ended && (
          <p {...stylex.props(styles.ended)}>{t('ranks.ended')}</p>
        )}
      </header>
      <ol {...stylex.props(styles.hall)}>
        {body.seats.map((seat, place) => (
          <Throne
            // eslint-disable-next-line @eslint-react/no-array-index-key -- a seat has no id, and the list is never reordered
            key={place}
            lead={ranked && place === 0}
            // Each lit throne waits for the one before it; the dark ones do
            // not count.
            lights={seat.state === 'held' && !body.ended ? lit++ : null}
            seat={seat}
          />
        ))}
      </ol>
    </section>
  )
}

interface ThroneProps {
  lead: boolean
  /** Its place among the lit thrones, or `null` when it is not lit. */
  lights: null | number
  seat: SeatView
}

function Throne({ seat, lead, lights }: ThroneProps): ReactElement {
  return (
    <li {...stylex.props(styles.seat, lead && styles.lead)}>
      <div
        aria-hidden="true"
        {...stylex.props(
          styles.figure,
          lead && styles.leadFigure,
          seat.state === 'held' && styles.hue(tintOf(seat.holder.visual.tint)),
        )}
      >
        {lights !== null && (
          <div {...stylex.props(styles.glow, styles.lightAt(lights))} />
        )}
        <ThroneArt seat={seat} />
      </div>
      <p {...stylex.props(styles.seatTitle)}>{seat.title}</p>
      <p {...stylex.props(styles.holder, seat.state !== 'held' && styles.dark)}>
        <Holder seat={seat} />
      </p>
    </li>
  )
}

/**
 * The throne itself: dashed and unlit while its holder is under fog, solid
 * and empty once vacated, in the holder's colour with their drawing once
 * held. Only the held throne has a colour to give.
 */
function ThroneArt({ seat }: { seat: SeatView }): ReactElement {
  return (
    <svg
      viewBox={THRONE_VIEWBOX}
      {...stylex.props(emblemStyles.svg, styles.art)}
    >
      <path
        d={THRONE_BACK}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(
          emblemStyles.line,
          seat.state === 'held' ?
            emblemStyles.tinted(tintOf(seat.holder.visual.tint))
          : emblemStyles.ambient,
          seat.state === 'unknown' && emblemStyles.dashed,
        )}
      />
      <path
        d={THRONE_DAIS}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(emblemStyles.line, emblemStyles.ambient)}
      />
      {seat.state === 'held' && (
        <svg
          height={THRONE_ART_BOX.height}
          viewBox={ART_VIEWBOX}
          width={THRONE_ART_BOX.width}
          x={THRONE_ART_BOX.x}
          y={THRONE_ART_BOX.y}
        >
          <ArtStrokes
            strokes={seat.holder.visual.strokes}
            tint={seat.holder.visual.tint}
          />
        </svg>
      )}
    </svg>
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

  return t(seat.state === 'vacant' ? 'ranks.vacant' : 'ranks.unknown')
}
