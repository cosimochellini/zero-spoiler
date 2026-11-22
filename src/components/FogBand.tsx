import * as stylex from '@stylexjs/stylex'
import type { ReactElement, ReactNode } from 'react'

import { EpisodeMark } from '~/components/EpisodeMark'
import { fogHint, fogTitle } from '~/components/fogWords'
import type { SeriesSlug, Translate, TranslationKey } from '~/i18n/types'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

/**
 * The band of covered records at the foot of a listing.
 *
 * It is on the page even with nothing under fog, because a band that appeared
 * the moment a reader fell behind would itself be news; empty, it says so and
 * shows nothing. What it calls itself is three different sentences and not one
 * with a count wedged into it, because none, one and many read differently in
 * both languages the site publishes in.
 *
 * Its hint tells the reader how to see what it covers. A reader with no
 * bookmark has none to move forward, so they are told to set one and handed
 * the control that does it (#1376).
 */

/**
 * What a band calls itself at each of the three counts: shared keys, or the
 * keys of the series `S` whose page it is on.
 */
export interface FogTitles<S extends SeriesSlug = never> {
  allOpen: TranslationKey<S>
  hint: TranslationKey<S>
  /** The hint for a reader with no bookmark: there is none to move. */
  hintUnset: TranslationKey<S>
  many: TranslationKey<S>
  one: TranslationKey<S>
}

/** The band, its heading, and whatever list of covered records it holds. */
export interface FogBandProps<S extends SeriesSlug = never> {
  children: ReactNode
  count: number
  headingId: string
  /**
   * The heading's level: `h3` under a section of its own, `h2` for a band
   * that stands beside the page's sections rather than inside one.
   */
  level?: 'h2' | 'h3'
  /** The page's translate, typed by the keys `words` names. */
  t: Translate<S>
  words: FogTitles<S>
}

/** A listing's fog band: a dashed rule, a heading, and the covered records. */
export function FogBand<S extends SeriesSlug = never>({
  children,
  count,
  headingId,
  level: Heading = 'h3',
  t,
  words,
}: FogBandProps<S>): ReactElement {
  const { bookmark } = useBookmark()

  return (
    <section
      aria-labelledby={headingId}
      {...stylex.props(styles.fog)}
    >
      <Heading
        id={headingId}
        {...stylex.props(styles.fogTitle)}
      >
        {fogTitle(t, count, words)}
      </Heading>
      {count === 0 ? null : (
        <>
          <p {...stylex.props(styles.fogHint)}>{fogHint(t, words, bookmark)}</p>
          {bookmark === null ?
            <div {...stylex.props(styles.fogSet)}>
              <EpisodeMark placement="fold" />
            </div>
          : null}
          {children}
        </>
      )}
    </section>
  )
}

const styles = stylex.create({
  // Set apart by a dashed rule, the same mark the route uses for the stretch
  // the reader has not sailed.
  fog: {
    gap: space.md,
    borderBlockStartColor: color.rule2,
    borderBlockStartStyle: 'dashed',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    paddingBlockStart: space.lg,
  },
  fogTitle: {
    color: color.muted,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  fogHint: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    marginBlockStart: `calc(-1 * ${space.xs})`,
    maxWidth: '58ch',
  },
  // A row, so the chip keeps its own width in the band's one-column grid.
  fogSet: { display: 'flex' },
})
