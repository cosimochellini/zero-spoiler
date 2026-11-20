import * as stylex from '@stylexjs/stylex'

import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

/** Running text: 60 to 75 characters a line in this face (a `ch` is wider than its average letter). */
const MEASURE = '48ch'
const WIDE = '@media (min-width: 48rem)'

export const styles = stylex.create({
  page: {
    padding: space.md,
    marginBlock: space.lg,
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    overflowWrap: 'anywhere',
  },
  title: { color: color.ink, fontFamily: font.display, fontSize: text.display },
  heading: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    lineHeight: leading.heading,
    marginBlockEnd: space.sm,
    marginBlockStart: space.lg,
  },
  subheading: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    lineHeight: leading.heading,
    marginBlockEnd: space.xs,
    marginBlockStart: space.md,
  },
  paragraph: { marginBlockEnd: space.sm, maxWidth: MEASURE },
  list: {
    marginBlockEnd: space.sm,
    paddingInlineStart: space.lg,
    maxWidth: MEASURE,
  },
  // The list of the page's sections: the three sections everywhere, their
  // parts beside them from a wide window.
  contents: {
    marginBlock: space.md,
    paddingInline: 0,
    borderBlockEndColor: color.rule,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
    columnGap: space.md,
    display: 'grid',
    gridTemplateColumns: {
      [WIDE]: 'repeat(3, minmax(0, 1fr))',
      default: 'minmax(0, 1fr)',
    },
    listStyleType: 'none',
    paddingBlockEnd: space.md,
    paddingBlockStart: 0,
    rowGap: space.xs,
  },
  parts: {
    margin: 0,
    padding: 0,
    display: { [WIDE]: 'block', default: 'none' },
    listStyleType: 'none',
  },
  contentsLink: {
    alignItems: 'center',
    display: 'inline-flex',
    minHeight: '44px',
  },
  section: { fontWeight: 700 },
  link: {
    color: color.accent,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'underline',
    textUnderlineOffset: '3px',
  },
})

/** The props of a part's `<h3>`: its id is what the list of sections links to. */
export function part(
  id: string,
): ReturnType<typeof stylex.props> & { id: string } {
  return { id, ...stylex.props(styles.subheading) }
}
