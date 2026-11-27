import * as stylex from '@stylexjs/stylex'

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

// Below this a stage is a row; from it, a tall stage with the words at its foot.
const TALL = '@media (min-width: 40rem)'
// The stages sit side by side once two fit at a readable width.
const WIDE = '@media (min-width: 48rem)'
// The opening row holds every series and the request card on one line.
const ROW = '@media (min-width: 64rem)'
// Two to a line between a phone and the full row.
const PAIRS = '@media (min-width: 40rem) and (max-width: 63.99rem)'
// One column that never grows past its box.
const ONE_COLUMN = 'minmax(0, 1fr)'

/** The hub's page, its opening row and its stages (`SeriesHub`, `HubCards`). */
export const styles = stylex.create({
  page: {
    paddingBlock: { [TALL]: space.xl, default: space.lg },
    paddingInline: space.md,
    alignContent: 'start',
    display: 'grid',
    rowGap: { [TALL]: space.xl3, default: space.xl2 },
  },
  opening: { display: 'grid', rowGap: { [TALL]: space.xl, default: space.lg } },
  head: { display: 'grid', rowGap: space.sm, maxWidth: '44rem' },
  headline: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.display,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.display,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  lede: {
    color: color.ink2,
    fontSize: text.lg,
    lineHeight: leading.body,
    maxWidth: '40rem',
  },
  row: {
    gap: space.sm,
    listStyle: 'none',
    display: 'grid',
    gridAutoRows: '1fr',
    gridTemplateColumns: {
      [PAIRS]: 'repeat(2, minmax(0, 1fr))',
      [ROW]: 'repeat(4, minmax(0, 1fr))',
      default: ONE_COLUMN,
    },
    paddingInlineStart: 0,
  },
  stages: {
    gap: space.md,
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: {
      [WIDE]: 'repeat(2, minmax(0, 1fr))',
      default: ONE_COLUMN,
    },
    paddingInlineStart: 0,
  },
  item: { display: 'grid', minWidth: 0 },

  // The opening row's card: the drawing at the start, the words beside it.
  ticket: {
    padding: space.md,
    borderColor: { 'default': color.rule, ':hover': color.rule2 },
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    alignItems: 'center',
    backgroundColor: color.paper,
    color: color.ink,
    columnGap: space.md,
    display: 'grid',
    gridTemplateColumns: '4.5rem minmax(0, 1fr)',
    position: 'relative',
    transitionDuration: dur.short,
    transitionProperty: 'border-color',
    transitionTimingFunction: ease.out,
    minHeight: '7rem',
  },
  wordsOnly: { gridTemplateColumns: ONE_COLUMN },
  ticketArt: { display: 'block', height: '4.5rem' },
  ticketName: {
    gridRow: '2',
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.xl,
    fontStretch: 'semi-condensed',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    textWrap: 'balance',
    minWidth: 0,
  },
  // The request card is drawn, not lit: a dashed edge, as a card still to
  // come, and a plus in the ambient ink.
  request: {
    borderColor: { 'default': color.rule2, ':hover': color.ink2 },
    borderStyle: 'dashed',
    backgroundColor: 'transparent',
  },
  plus: {
    fill: 'none',
    stroke: color.ink2,
    strokeLinecap: 'round',
    strokeWidth: 2,
    justifySelf: 'center',
    height: '3rem',
    width: '3rem',
  },
  how: {
    gap: space.xs,
    alignItems: 'center',
    color: color.ink,
    display: 'inline-flex',
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 700,
    justifySelf: 'start',
    letterSpacing: '0.12em',
    textDecorationLine: 'none',
    textTransform: 'uppercase',
    minHeight: '2.75rem',
  },
  howArrow: {
    fill: 'none',
    stroke: color.accent,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.5,
    height: '1rem',
    width: '1rem',
  },

  choose: { display: 'grid', rowGap: { [TALL]: space.xl, default: space.lg } },
  chooseTitle: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.display,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.display,
  },
  requestLine: {
    color: color.ink2,
    fontSize: text.base,
    justifySelf: 'start',
    textDecorationLine: 'underline',
    textUnderlineOffset: '0.2em',
    minHeight: '2.75rem',
  },

  // One box for a lit stage and a dark one: the words sit at the foot, under
  // the drawing, or on a phone beside it.
  stage: {
    padding: { [TALL]: space.lg, default: space.md },
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    overflow: 'clip',
    alignContent: { [TALL]: 'end', default: 'center' },
    alignItems: 'center',
    backgroundColor: color.paper,
    color: color.ink,
    columnGap: space.md,
    display: 'grid',
    // On a phone the drawing takes the row's start, and the words the rest.
    gridTemplateColumns: { [TALL]: ONE_COLUMN, default: '34% minmax(0, 1fr)' },
    position: 'relative',
    minHeight: { [TALL]: '28rem', [WIDE]: '36rem', default: '10rem' },
  },
  lit: {
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
  },
  dark: { backgroundColor: color.paper2, gridTemplateColumns: ONE_COLUMN },

  art: {
    insetInline: { [TALL]: '12%', default: 'auto' },
    insetBlockStart: { [TALL]: '4%', default: 'auto' },
    position: { [TALL]: 'absolute', default: 'relative' },
    height: { [TALL]: '60%', default: '8.5rem' },
  },
  // A dark stage holds only the fog drifting in it.
  fog: {
    inset: 0,
    backgroundImage: `radial-gradient(60% 40% at 30% 40%, ${color.paper3}, transparent 70%), radial-gradient(50% 45% at 75% 60%, ${color.paper3}, transparent 70%)`,
    filter: 'blur(20px)',
    position: 'absolute',
  },

  copy: {
    gridColumn: { [TALL]: '1', default: '2' },
    display: 'grid',
    position: 'relative',
    rowGap: space.xs,
  },
  // A dark stage has no drawing, so on a phone its words take the whole row.
  wholeRow: { gridColumn: '1' },
  // A ticket keeps its drawing beside the words at every width.
  besideArt: { gridColumn: '2' },
  name: {
    gridRow: '2',
    color: color.ink,
    fontFamily: font.display,
    fontSize: { [TALL]: text.hero, default: text.display },
    fontStretch: 'semi-condensed',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.display,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  unlitName: { color: color.muted },
  mono: {
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.12em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  // Above the name, as the fold of a series page sets the reader's point.
  point: { gridRow: '1', color: color.accent },
  unset: { color: color.muted },
  count: { gridRow: '3', color: color.muted },
})
