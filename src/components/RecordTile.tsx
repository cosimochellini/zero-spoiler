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
          return (
            <span {...stylex.props(styles.card)}>
              <Plate record={record} />
              <Name entry={record} />
            </span>
          )
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
 * The name, and where it leads. A character, a place, a ship, a devil fruit
 * and a Nen ability each have a page to point at; an arc does not, so its
 * name is plain text rather than a link that would go nowhere. A ship's page
 * is served from a place's address.
 *
 * No tile is handed a fruit or an ability today: the two callers are a
 * port's `filedHere` and the two records beside one on the landing chart,
 * and the chart draws neither. The kinds are here because `filedHere` is a
 * list of record ids and takes any id the day somebody writes one — it is
 * the data that decides, not another edit here, and a tile that met one
 * would otherwise print a name it had a page for and no way to reach it.
 */
function Name({ entry }: { entry: RecordView }): ReactElement {
  const { series, locale } = useSeriesParams()

  if (entry.kind === 'arc') {
    return <span {...stylex.props(styles.name)}>{entry.name}</span>
  }

  return (
    <Link
      params={{ series, locale, id: entry.id }}
      to={RECORD_PAGE[entry.kind]}
      {...stylex.props(styles.name, bandStyles.link)}
    >
      {entry.name}
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
})
