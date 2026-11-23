import * as stylex from '@stylexjs/stylex'

import {
  color,
  dur,
  ease,
  font,
  leading,
  pin,
  radius,
  rule,
  space,
  text,
  z,
} from '~/styles/tokens.stylex'

// The height of each of the dial's two lines that fold away when it pins,
// at one line of text. A unit that wraps, as "Book 1, chapter" can on a
// narrow phone with large text, makes its line taller: the dial then keeps a
// little more on screen when pinned, and nothing overprints.
const FOLD_LINE = '1rem'

// Where the numeral, a range of at least 9rem and the button fit on one
// line: about 3rem of numeral, 6.5rem of button and two gaps. The page is
// the container, so the line scales with the reader's text size, and the
// range takes what is left (a little under 9rem for One Piece's three-digit
// chapters at 360px).
const ONE_ROW = '@container (min-width: 20rem)'

/**
 * The onboarding, a control and its playground: the dial is the hero, and the page under it is its live preview.
 */
export const styles = stylex.create({
  // The container the dial measures itself against. One column that never
  // grows past the page, so a wide control below cannot widen the dial.
  page: {
    paddingInline: space.md,
    containerType: 'inline-size',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',
  },

  // The promise, then the dial. No drawing above them: what moves under the
  // dial is the picture.
  intro: {
    gap: space.md,
    display: 'grid',
    paddingBlockEnd: space.lg,
    paddingBlockStart: {
      'default': space.xl,
      '@media (min-width: 40rem)': space.xl2,
    },
    maxWidth: '46rem',
  },
  headline: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.hero,
    fontWeight: 800,
    letterSpacing: '-0.035em',
    lineHeight: leading.display,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  lede: {
    color: color.ink2,
    fontSize: text.lg,
    lineHeight: leading.body,
    maxWidth: '44ch',
  },

  // Above the dial and scrolling away with the page: what the range is, and
  // the arc its point is in.
  dialHead: { gap: space.xs2, display: 'grid', paddingBlockEnd: space.sm },
  // Pinned while the preview scrolls under it, so moving the dial and seeing
  // what it opened happen on one screen. The unit, the scale, then the
  // numeral, the range and the button on one line. The first two lines are
  // one line of text each, so the offset that tucks them under the site bar
  // is known here, and pinned the dial is its last line alone, about 64px on a
  // phone. Below `ONE_ROW` the dial is a wrapping row instead: the range has
  // that line to itself, and the numeral and the button share the next, or
  // take one each when the text is large.
  dial: {
    marginInline: `calc(-1 * ${space.md})`,
    paddingInline: space.md,
    alignItems: 'center',
    backgroundColor: color.paper,
    borderBlockEndColor: color.accent,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.fine,
    columnGap: space.sm,
    display: { [ONE_ROW]: 'grid', default: 'flex' },
    flexWrap: 'wrap',
    gridTemplateColumns: 'auto minmax(0, 1fr) auto',
    gridTemplateRows: 'auto auto',
    insetBlockStart: `calc(${pin.bar} - 2 * ${FOLD_LINE} - ${space.xs})`,
    paddingBlockEnd: space.sm,
    position: 'sticky',
    rowGap: space.xs,
    zIndex: z.sticky,
  },
  unit: {
    flexBasis: '100%',
    gridColumnEnd: '-1',
    gridColumnStart: '1',
    lineHeight: FOLD_LINE,
    minHeight: FOLD_LINE,
  },
  // The scale over the range, across the dial where the range is.
  scale: {
    gridColumn: '2',
    gridRow: '2',
    color: color.muted,
    display: 'flex',
    flexBasis: '100%',
    fontFamily: font.mono,
    fontSize: text.xs,
    justifyContent: 'space-between',
    lineHeight: FOLD_LINE,
    minHeight: FOLD_LINE,
  },
  // The numeral and the button: beside the range, or on the line under it.
  beside: { gridRow: '3' },
  hereCell: { gridColumn: '3', marginInlineStart: 'auto' },
  // The numeral as wide as the widest point, so the range does not shift
  // under the thumb as the numeral gains a digit.
  digits: (count: number) => ({ minWidth: `${String(count)}ch` }),
  unitLabel: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  },
  numeral: {
    color: color.accent,
    fontFamily: font.display,
    fontSize: text.display,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 800,
    letterSpacing: '-0.03em',
    lineHeight: leading.display,
  },
  arcName: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.01em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
  },
  range: {
    gridColumn: '2',
    gridRow: '3',
    accentColor: color.accent,
    cursor: 'pointer',
    flexBasis: '100%',
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    height: '44px',
    minWidth: 0,
    width: '100%',
  },

  // Under the pinned dial and scrolling with the page: the unit, and the
  // ways to save a point.
  controls: {
    gap: space.md,
    paddingBlock: space.lg,
    display: 'grid',
    justifyItems: 'start',
  },
  units: { gap: space.xs, display: 'flex', flexWrap: 'wrap' },
  unitOn: { borderColor: color.accent, color: color.accent },
  // Room for the pinned dial, so a control or a card below it reached with
  // the keyboard scrolls into view below the dial rather than under it, on
  // top of the room the document's scroll padding keeps under the bar for a
  // sticky head. On one line the pinned dial is at most 2.25rem taller than
  // that room; wrapped, with the range on a line of its own and the button
  // on another, about 7rem.
  clearsDial: {
    scrollMarginBlockStart: { [ONE_ROW]: space.xl, default: '8rem' },
  },
  actions: { gap: space.sm, display: 'flex', flexWrap: 'wrap' },
  primary: {
    borderColor: {
      'default': color.accent,
      ':hover:not(:disabled)': color.ink,
    },
    backgroundColor: {
      'default': color.accent,
      ':hover:not(:disabled)': color.ink,
    },
    color: {
      'default': color.accentInk,
      ':hover:not(:disabled)': color.accentInk,
    },
    fontWeight: 700,
  },
  hint: {
    color: color.muted,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },
  form: {
    padding: space.md,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    gap: space.md,
    backgroundColor: color.paper2,
    display: 'grid',
    maxWidth: '28rem',
    width: '100%',
  },

  // The preview: three shelves, each a grid of cards.
  shelves: {
    gap: space.xl2,
    display: 'grid',
    paddingBlockEnd: space.xl2,
    paddingBlockStart: space.lg,
  },
  shelf: { gap: space.md, display: 'grid' },
  shelfTitle: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
  },
  grid: {
    margin: 0,
    padding: 0,
    gap: space.md,
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: {
      'default': 'repeat(2, minmax(0, 1fr))',
      '@media (min-width: 40rem)': 'repeat(4, minmax(0, 1fr))',
      '@media (min-width: 64rem)': 'repeat(6, minmax(0, 1fr))',
    },
  },
  // Six arcs: three to a row on a tablet, all six in one row on a desktop.
  wideGrid: {
    gridTemplateColumns: {
      'default': 'repeat(2, minmax(0, 1fr))',
      '@media (min-width: 40rem)': 'repeat(3, minmax(0, 1fr))',
      '@media (min-width: 64rem)': 'repeat(6, minmax(0, 1fr))',
    },
  },

  card: {
    padding: space.sm,
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    gap: space.xs,
    textDecoration: 'none',
    alignContent: 'start',
    backgroundColor: color.paper2,
    color: 'inherit',
    display: 'grid',
    height: '100%',
    minWidth: 0,
  },
  cardLink: {
    borderColor: { 'default': color.rule2, ':hover': color.accent },
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    transform: { 'default': 'none', ':active': 'translateY(1px)' },
    transitionDuration: dur.micro,
    transitionProperty: 'border-color, transform',
    transitionTimingFunction: ease.out,
  },
  here: { borderColor: color.accent, borderWidth: rule.fine },
  // Dimmed by the dashed border and the bare frame, not by opacity: the
  // threshold under it is text the visitor needs to read.
  fogged: { borderStyle: 'dashed', backgroundColor: 'transparent' },
  frame: { aspectRatio: '1', width: '100%' },
  arcFrame: { aspectRatio: '4 / 5', width: '100%' },
  name: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.base,
    fontWeight: 800,
    letterSpacing: '-0.01em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
  },
  fogName: { color: color.muted },
  fact: {
    color: color.ink2,
    fontSize: text.xs,
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
  },
  epithet: {
    color: color.accent,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 700,
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
  },
  threshold: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    lineHeight: leading.heading,
  },

  tail: {
    gap: space.md,
    borderBlockStartColor: color.rule2,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.fine,
    display: 'grid',
    paddingBlockStart: space.xl,
  },
})
