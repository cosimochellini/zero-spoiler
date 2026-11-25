import * as stylex from '@stylexjs/stylex'

import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

const ONE_COLUMN = 'minmax(0, 1fr)'

/**
 * The declarations a place's or a ship's entry paints its facts and the
 * records found there with. Kept beside the components rather than inside
 * them, so the facts and the list of records share one sheet.
 */
export const styles = stylex.create({
  facts: {
    borderBlockStyle: 'solid',
    paddingBlock: space.md,
    borderBlockColor: color.rule,
    borderBlockWidth: rule.hair,
    columnGap: space.lg,
    display: 'grid',
    gridTemplateColumns: {
      'default': ONE_COLUMN,
      '@media (min-width: 40rem)': 'repeat(2, minmax(0, 1fr))',
    },
    rowGap: space.sm,
  },
  fact: { gap: space.xs3, display: 'grid', minWidth: 0 },
  factLabel: {
    color: color.muted,
    fontSize: text.xs,
    fontWeight: 600,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  factValue: {
    color: color.ink,
    fontSize: text.base,
    fontWeight: 600,
    lineHeight: leading.body,
    marginInlineStart: 0,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },

  // The records found at a place, a band of their own under the entry: the
  // title is the one the page's other bands take.
  band: { gap: space.md, display: 'grid', minWidth: 0 },
  bandTitle: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  // The later visits, a list inside the map band.
  filed: { gap: space.sm, display: 'grid' },
  filedTitle: {
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    lineHeight: leading.body,
  },
  crew: {
    gap: space.md,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 14rem), 1fr))',
    listStyleType: 'none',
    paddingInlineStart: 0,
  },
  crewItem: { minWidth: 0 },
})
