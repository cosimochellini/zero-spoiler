import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { CharacterCard } from '~/components/CharacterCard'
import { useT } from '~/i18n/LocaleContext'
import type { CharacterView } from '~/lib/view/records'
import { settleStyles } from '~/styles/settle'
import { color, font, leading, space, text } from '~/styles/tokens.stylex'

/** A row of crests under one of the home's two character headings. */
export interface HomeCastProps {
  /** The step it settles in on, as the home's other bands. */
  band: number
  cast: CharacterView[]
  /** The heading's id, which labels the section. */
  id: 'home-cast' | 'home-met'
  title: 'home.cast' | 'home.met'
  /** The crests are the previous arc's, because this one has none yet. */
  before?: boolean
}

/**
 * Every character here is one the server has already decided the reader has
 * reached, so no card on the home page is ever under fog and nothing is ever
 * lifted by hand. The card takes a peek all the same; this one is never called.
 */
// eslint-disable-next-line @typescript-eslint/require-await -- the promise is the card's contract; this one only ever rejects, and there is nothing to wait for on the way.
async function neverPeeked(): Promise<CharacterView> {
  throw new Error('Nothing on the home page is under fog')
}

/**
 * A row of the same crests the characters page puts in evidence: who matters
 * now (the arc's leads the stories name most, most named first) or who was
 * just met (the arc's newcomers, latest first). A row taken from the arc
 * before says so beside its heading, which stays the same.
 */
export function HomeCast({
  band,
  cast,
  id,
  title,
  before = false,
}: HomeCastProps): null | ReactElement {
  const t = useT()

  if (cast.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby={id}
      {...stylex.props(
        settleStyles.band,
        settleStyles.at(band),
        styles.section,
      )}
    >
      <div {...stylex.props(styles.head)}>
        <h2
          id={id}
          {...stylex.props(styles.heading)}
        >
          {t(title)}
        </h2>
        {before && <p {...stylex.props(styles.before)}>{t('home.before')}</p>}
      </div>
      <ul {...stylex.props(styles.grid)}>
        {cast.map((record) => {
          return (
            <CharacterCard
              key={record.id}
              peek={neverPeeked}
              slot={{ open: true, record }}
            />
          )
        })}
      </ul>
    </section>
  )
}

const styles = stylex.create({
  section: { gap: space.lg, display: 'grid', minWidth: 0 },
  head: {
    alignItems: 'baseline',
    columnGap: space.md,
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: space.xs,
  },
  heading: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  // Said in the voice of the ledger's episode marks, but quiet: it qualifies
  // the heading rather than competing with it.
  before: {
    margin: 0,
    color: color.ink2,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 700,
    letterSpacing: '0.1em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  // Six to a row on a wide screen, which is the most the section shows.
  grid: {
    margin: 0,
    padding: 0,
    columnGap: space.md,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'repeat(2, minmax(0, 1fr))',
      '@media (min-width: 40rem)': 'repeat(3, minmax(0, 1fr))',
      '@media (min-width: 60rem)': 'repeat(6, minmax(0, 1fr))',
    },
    listStyleType: 'none',
    rowGap: space.lg,
  },
})
