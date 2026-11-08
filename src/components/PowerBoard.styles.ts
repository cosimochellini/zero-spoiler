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
} from '~/styles/tokens.stylex'

const light = stylex.keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })

// Far enough apart to read as one throne after another, close enough that a
// body of seven has lit inside two seconds.
const LIGHT_STEP_MS = 160
const LIGHT_AFTER_MS = 240

/**
 * The power page's declarations, beside the component rather than inside it
 * for length, as `FillerCatalogue.styles` is.
 */
export const styles = stylex.create({
  page: {
    gap: space.xl2,
    paddingInline: space.md,
    display: 'grid',
    paddingBlockEnd: space.xl3,
    paddingBlockStart: space.xl,
  },
  head: { gap: space.md, display: 'grid' },
  // The page's one display line, and its largest paint: it never settles.
  title: {
    margin: 0,
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.hero,
    fontStretch: 'semi-condensed',
    fontWeight: 800,
    letterSpacing: '-0.03em',
    lineHeight: leading.display,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  lede: {
    margin: 0,
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },
  notice: { gap: space.md, display: 'grid', justifyItems: 'start' },
  // Linked to from a character's seats: it lands below the sticky bar.
  body: { gap: space.lg, display: 'grid', scrollMarginBlockStart: pin.bar },
  bodyHead: {
    gap: space.xs,
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    display: 'grid',
    justifyItems: 'start',
    paddingBlockStart: space.md,
  },
  numeral: {
    color: color.accent,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    lineHeight: leading.heading,
  },
  name: {
    margin: 0,
    color: color.ink,
    fontFamily: font.display,
    fontSize: { 'default': text.xl, '@media (min-width: 40rem)': text.display },
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  ended: {
    margin: 0,
    borderColor: color.rule2,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    paddingBlock: space.xs2,
    paddingInline: space.xs,
    color: color.ink2,
    fontSize: text.xs,
    letterSpacing: '0.08em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
  // Centred, so a body reads as a dais with its seats either side.
  hall: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    columnGap: space.sm,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: space.xl,
  },
  seat: {
    gap: space.xs2,
    display: 'grid',
    justifyItems: 'center',
    textAlign: 'center',
    width: `min(10rem, calc(50% - ${space.sm} / 2))`,
  },
  lead: { width: '100%' },
  figure: { aspectRatio: '4 / 5', position: 'relative', width: '100%' },
  leadFigure: { width: 'min(15rem, 80%)' },
  /** The holder's colour, for the glow to take as `currentColor`. */
  hue: (hue: string) => ({ color: hue }),
  // A pool of the holder's colour on the dais, under the seat.
  glow: {
    inset: 0,
    animationDuration: dur.long,
    animationFillMode: 'backwards',
    animationName: {
      'default': 'none',
      '@media (prefers-reduced-motion: no-preference)': light,
    },
    animationTimingFunction: ease.out,
    backgroundImage:
      'radial-gradient(ellipse 72% 42% at 50% 92%, color-mix(in oklch, currentColor 42%, transparent), transparent 72%)',
    position: 'absolute',
  },
  lightAt: (index: number) => ({
    animationDelay: `${String(LIGHT_AFTER_MS + index * LIGHT_STEP_MS)}ms`,
  }),
  art: { position: 'relative' },
  seatTitle: {
    margin: 0,
    color: color.muted,
    fontSize: text.xs,
    letterSpacing: '0.08em',
    lineHeight: leading.heading,
    textTransform: 'uppercase',
  },
  holder: {
    margin: 0,
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  dark: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 400,
  },
  link: { color: 'inherit', textDecorationLine: 'underline' },
})
