import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { Marked } from '~/components/CharacterCard'
import { FogTile } from '~/components/FogTile'
import { OpenArt } from '~/components/FruitArt'
import { FruitEater } from '~/components/FruitEater'
import type { EaterMatch } from '~/components/recordMatches'
import { useSeriesParams } from '~/lib/progress/BookmarkContext'
import type { CoveredRecord, EaterView, RecordView } from '~/lib/view/records'
import { morphPart, travelWith, useTravels } from '~/styles/morph'
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

/**
 * The tiles of an album of records with users: the devil fruits' and the
 * Nen abilities'. Open, a tile is the drawing and the name as one link, the
 * user the search or the archive picked, and a foot line; covered, the same
 * drifting fog for every record (`FogTile`).
 */

/** What a tile draws of its record: a name, a drawing, an id to link by. */
type TileRecord = Pick<RecordView, 'id' | 'name' | 'visual'>

/** The kinds of record an album tile is, and the page each leads to. */
const TILE_PAGE = {
  ability: '/$series/$locale/abilities/$id',
  fruit: '/$series/$locale/fruits/$id',
} as const

/** The kind of record an album tile is: a devil fruit, or a Nen ability. */
export type TileKind = keyof typeof TILE_PAGE

/**
 * A covered album tile: a `FogTile`, the same drifting fog for every record,
 * and under it only the `lines` already public. Lifted by hand, the fog
 * clears and the record's link draws itself in.
 */
export function CoveredTile<T extends TileRecord>({
  covered,
  kind,
  lines,
  peek,
  phase,
}: {
  covered: CoveredRecord
  kind: TileKind
  lines: string[]
  peek: (handle: string) => Promise<T>
  phase: number
}): ReactElement {
  return (
    <li {...stylex.props(styles.tile)}>
      <FogTile
        covered={covered}
        lines={lines}
        peek={peek}
        phase={phase}
      >
        {(record) => {
          return (
            <TileLink
              highlight={null}
              kind={kind}
              morph
              record={record}
            />
          )
        }}
      </FogTile>
    </li>
  )
}

/** What an open album tile shows: its record, who uses it, and its foot. */
export interface UsedTileProps {
  /** Which user the tile shows, and what of their name a search matched. */
  eater: EaterMatch
  /** The line at the tile's foot: the fruit's kind, the ability's type. */
  foot: string
  highlight: [number, number] | null
  kind: TileKind
  morph: boolean
  record: TileRecord
  /** The count of the users not shown, said in full. */
  said: (count: number) => string
  /** The users the reader has reached, earliest first. */
  users: EaterView[]
}

/**
 * An open album tile: the link to the record, the user the search or the
 * archive picked, and the foot line.
 */
export function UsedTile({
  eater,
  foot,
  highlight,
  kind,
  morph,
  record,
  said,
  users,
}: UsedTileProps): ReactElement {
  const shown = users[eater.at]
  const more = users.length - 1

  return (
    <li {...stylex.props(styles.tile, styles.openTile)}>
      <TileLink
        highlight={highlight}
        kind={kind}
        morph={morph}
        record={record}
      />
      {shown === undefined ? null : (
        <FruitEater
          eater={shown}
          highlight={eater.highlight}
          more={more}
          said={said(more)}
        />
      )}
      <p {...stylex.props(styles.kind, styles.foot)}>{foot}</p>
    </li>
  )
}

/**
 * An open tile's link: the drawing and the name, which lead to the record's
 * page, and travel there for a fruit. The kind is printed under the tile
 * rather than in the link, so a covered tile lifted by hand reads the same.
 */
function TileLink({
  highlight,
  kind,
  morph: asked,
  record,
}: {
  highlight: [number, number] | null
  kind: TileKind
  morph: boolean
  record: TileRecord
}): ReactElement {
  const { series, locale } = useSeriesParams()
  // Only a fruit travels to its page; an ability's page has no morph.
  const morph = asked && kind === 'fruit'
  const travels = useTravels('fruit', record.id) && morph

  return (
    <Link
      onClick={() => {
        if (morph) {
          travelWith('fruit', record.id)
        }
      }}
      params={{ series, locale, id: record.id }}
      to={TILE_PAGE[kind]}
      {...stylex.props(styles.face, styles.link)}
    >
      <div {...stylex.props(styles.art)}>
        <OpenArt
          always={false}
          morph={morph}
          record={record}
        />
      </div>
      <span
        {...stylex.props(
          styles.name,
          travels && morphPart('fruit', record.id, 'name'),
        )}
      >
        <Marked
          span={highlight}
          text={record.name}
        />
      </span>
    </Link>
  )
}

// The small-caps tracking the mono lines under a tile are set in.
const META_TRACKING = '0.08em'

const styles = stylex.create({
  tile: { gap: space.xs2, alignContent: 'start', display: 'grid', minWidth: 0 },
  // The kind sits at the foot of the row, so it lines up across a row whose
  // names and eaters wrap to different heights.
  openTile: { gridTemplateRows: 'auto auto 1fr' },
  foot: { alignSelf: 'end', gridRowStart: 3 },
  face: { gap: space.xs, display: 'grid', minWidth: 0 },
  link: {
    borderRadius: radius.card,
    color: color.ink,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
  },
  // The drawing is most of a tile's layout and paint, so the browser skips it
  // until it nears the screen (#621). Its size is exact without its strokes:
  // the column sets the width and the frame is 4:5 at every width, so the
  // album keeps its height and Back lands on the same tile.
  art: { aspectRatio: '4 / 5', contentVisibility: 'auto' },
  name: {
    color: {
      'default': color.ink,
      ':is(a:active) > &': color.ink2,
      ':is(a:focus-visible) > &': color.accent,
      ':is(a:hover) > &': color.accent,
    },
    display: 'block',
    fontFamily: font.display,
    fontSize: { 'default': text.base, '@media (min-width: 40rem)': text.lg },
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
    minWidth: 0,
  },
  kind: {
    color: color.muted,
    display: 'block',
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
    letterSpacing: META_TRACKING,
    lineHeight: leading.body,
    overflowWrap: 'anywhere',
    textTransform: 'uppercase',
    minWidth: 0,
  },
})
