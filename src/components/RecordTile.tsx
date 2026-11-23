import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ChartArt } from '~/components/ChartArt'
import { styles as bandStyles } from '~/components/SpecimenBands.styles'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useKindLabel } from '~/components/useKindLabel'
import { useT } from '~/i18n/LocaleContext'
import { useSeriesParams, useThreshold } from '~/lib/progress/BookmarkContext'
import { useDrawing } from '~/lib/view/drawings'
import type { EntityKind, RecordView, Slot } from '~/lib/view/records'
import {
  color,
  dur,
  ease,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/** The slot to file, and how to ask for what fills it. */
export interface RecordTileProps {
  peek: (handle: string) => Promise<RecordView>
  slot: Slot<RecordView>
}

/**
 * One record of any kind, small: its kind and episode on a line, then a
 * plate and a name. A character's or a place's name links to its page, and
 * a ship's to her entry on the places page; an arc is a name. Under fog the plate
 * and the name go together behind a placeholder, so neither the drawing nor
 * the slug is in the served HTML, and the episode stays.
 *
 * Used wherever a page points at the records filed beside the one it is
 * about: the crew a port files.
 */
export function RecordTile({ slot, peek }: RecordTileProps): ReactElement {
  const t = useT()
  const threshold = useThreshold()
  const kindLabel = useKindLabel()
  const filed = slot.open ? slot.record : slot.covered

  return (
    <span {...stylex.props(styles.tile)}>
      <span {...stylex.props(bandStyles.meta)}>
        <span {...stylex.props(styles.kind)}>{kindLabel(filed.kind)}</span>
        <span {...stylex.props(bandStyles.episode)}>
          {threshold('chart.opensAt', filed)}
        </span>
      </span>
      <SpoilerVeil
        density="inline"
        peek={peek}
        placeholder={
          <span {...stylex.props(styles.card)}>
            <span {...stylex.props(styles.frame)} />
            <span {...stylex.props(styles.name)}>{t('veil.placeholder')}</span>
          </span>
        }
        slot={slot}
      >
        {(record) => {
          return <Card record={record} />
        }}
      </SpoilerVeil>
    </span>
  )
}

/** The record's drawing in its frame, asked for once near the screen. */
function Plate({ record }: { record: RecordView }): ReactElement {
  const { ref, strokes } = useDrawing(record.id, record.visual)

  return (
    <span
      ref={ref}
      {...stylex.props(styles.frame)}
    >
      <ChartArt
        strokes={strokes}
        tint={record.visual.tint}
      />
    </span>
  )
}

/** The page each kind of record leads to; an arc has none. */
const RECORD_PAGE = {
  ability: '/$series/$locale/abilities/$id',
  character: '/$series/$locale/characters/$id',
  fruit: '/$series/$locale/fruits/$id',
  place: '/$series/$locale/places/$id',
  ship: '/$series/$locale/places/$id',
} as const satisfies Record<Exclude<EntityKind, 'arc'>, string>

/**
 * The plate and the name, and where they lead. A character, a place, a ship,
 * a devil fruit and a Nen ability each have a page to point at, and the whole
 * card is the link, so its target is the plate's height rather than a line of
 * text (#1379); an arc has no page, so its card is no link at all. A ship's
 * page is served from a place's address.
 *
 * No tile is handed a fruit or an ability today: the two callers are a
 * port's `filedHere` and the two records beside one on the landing chart,
 * and the chart draws neither. The kinds are here because `filedHere` is a
 * list of record ids and takes any id the day somebody writes one — it is
 * the data that decides, not another edit here, and a tile that met one
 * would otherwise print a name it had a page for and no way to reach it.
 */
function Card({ record }: { record: RecordView }): ReactElement {
  const { series, locale } = useSeriesParams()
  const body = (
    <>
      <Plate record={record} />
      <span {...stylex.props(styles.name, styles.linkedName)}>
        {record.name}
      </span>
    </>
  )

  if (record.kind === 'arc') {
    return <span {...stylex.props(styles.card)}>{body}</span>
  }

  return (
    <Link
      params={{ series, locale, id: record.id }}
      to={RECORD_PAGE[record.kind]}
      {...stylex.props(styles.card, styles.link)}
    >
      {body}
    </Link>
  )
}

const styles = stylex.create({
  // Skipped until near the screen, like a character tile (#621): the crew a
  // port files is most of the ship's log. 6.1375rem is the tile's height at
  // every width; the padding keeps the focus ring whole, as there.
  tile: {
    margin: `calc(-1 * ${space.xs})`,
    padding: space.xs,
    containIntrinsicSize: 'auto 6.1375rem',
    gap: space.xs,
    contentVisibility: 'auto',
    display: 'grid',
    minWidth: 0,
  },
  kind: { fontFamily: font.body, fontWeight: 600 },
  card: {
    alignItems: 'center',
    columnGap: space.sm,
    display: 'grid',
    gridTemplateColumns: '3.5rem minmax(0, 1fr)',
  },
  frame: {
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    overflow: 'hidden',
    aspectRatio: '4 / 5',
    backgroundColor: color.paper2,
    display: 'block',
  },
  name: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  // The card as a link: the focus ring goes round the plate and the name.
  link: {
    borderRadius: radius.card,
    color: color.ink,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
  },
  // The name answers the pointer on the card as it did on its own: the
  // accent, and the rule under it, reserved at rest.
  linkedName: {
    color: {
      'default': color.ink,
      ':is(a:active *)': color.ink2,
      ':is(a:hover *)': color.accent,
    },
    textDecorationColor: {
      'default': 'transparent',
      ':is(a:hover *)': color.accent,
    },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.fine,
    textUnderlineOffset: '4px',
    transitionDuration: dur.micro,
    transitionProperty: 'color, text-decoration-color',
    transitionTimingFunction: ease.out,
  },
})
