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

// The screen stands beside the words once both fit at a readable width.
// The same width as `SIDE_BY_SIDE_QUERY` in `useTourScroll`, which reads it.
const SIDE_BY_SIDE = '@media (min-width: 56rem)'
const TALL = '@media (min-width: 40rem)'
// On a phone the screen keeps the top of the window under the bar.
const PHONE_SCREEN = '54svh'

export const styles = stylex.create({
  tour: {
    display: 'grid',
    rowGap: { [TALL]: space.xl, default: space.lg },
    scrollMarginTop: pin.bar,
  },
  head: { display: 'grid', rowGap: space.sm, maxWidth: '44rem' },
  title: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.display,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.display,
  },
  lede: {
    color: color.ink2,
    fontSize: text.lg,
    lineHeight: leading.body,
    maxWidth: '40rem',
  },
  stage: {
    alignItems: 'start',
    columnGap: space.xl,
    display: 'grid',
    gridTemplateColumns: {
      [SIDE_BY_SIDE]: 'minmax(0, 5fr) minmax(0, 6fr)',
      default: 'minmax(0, 1fr)',
    },
  },
  // The screen: in view while its steps scroll, in the colours of the series
  // it shows. Its paper changes with the series, as a page's would.
  screen: {
    borderColor: color.rule,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    gridColumn: { [SIDE_BY_SIDE]: '2', default: '1' },
    gridRow: '1',
    overflow: 'clip',
    backgroundColor: color.paper,
    color: color.ink,
    position: 'sticky',
    transitionDuration: dur.long,
    transitionProperty: 'background-color, border-color',
    transitionTimingFunction: ease.out,
    zIndex: z.sticky,
    height: {
      [SIDE_BY_SIDE]: `calc(100svh - ${pin.bar} - ${space.xl2})`,
      default: PHONE_SCREEN,
    },
    top: { [SIDE_BY_SIDE]: `calc(${pin.bar} + ${space.lg})`, default: pin.bar },
  },
  steps: {
    gridColumn: '1',
    gridRow: { [SIDE_BY_SIDE]: '1', default: '2' },
    listStyle: 'none',
    display: 'grid',
    paddingInlineStart: 0,
  },
  block: {
    alignItems: 'start',
    display: 'grid',
    minHeight: { [SIDE_BY_SIDE]: '90svh', default: '80svh' },
  },
  // A step that scrolls the bookmark gets the room to do it.
  long: { minHeight: { [SIDE_BY_SIDE]: '170svh', default: '150svh' } },
  // The words stay in view while their step scrolls: mid-window beside the
  // screen, under it on a phone.
  words: {
    paddingBlock: space.lg,
    display: 'grid',
    position: 'sticky',
    rowGap: space.sm,
    maxWidth: '32rem',
    top: {
      [SIDE_BY_SIDE]: '38svh',
      default: `calc(${pin.bar} + ${PHONE_SCREEN} + ${space.md})`,
    },
  },
  // A step not in view yet, or passed: quieter, and still above the floor.
  resting: { color: color.muted },
  stepTitle: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: { [TALL]: text.display, default: text.xl },
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.display,
    textWrap: 'balance',
    transitionDuration: dur.short,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
  },
  stepBody: {
    color: color.ink2,
    fontSize: { [TALL]: text.lg, default: text.base },
    lineHeight: leading.body,
    transitionDuration: dur.short,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
    maxWidth: '30rem',
  },
})
