import * as stylex from '@stylexjs/stylex'

import {
  BAR,
  color,
  CONTROLS,
  pin,
  rule,
  space,
  z,
} from '~/styles/tokens.stylex'

/**
 * The custom property a pinned control bar (`ControlBar`) writes on the
 * document: how much of the bar stays on screen once it is pinned. A sticky
 * head below the bar pins under it by reading this, and the scroll padding
 * adds it; with no bar it is unset and both are as they were.
 */
export const STACK_PROPERTY = '--sticky-stack'

/**
 * A series page's bar keeps two rows up to `BAR.seriesWide`, where the site's
 * own bar is one row, and three or four where the wordmark, then the
 * language, take a row of their own (`BAR.seriesCrowded`,
 * `BAR.seriesCramped`). Set on `<html>` on a series page, so everything that
 * pins under the bar reads the same height.
 */
export const seriesBarPin = stylex.createTheme(pin, {
  bar: {
    default: BAR.twoRows,
    [BAR.seriesWide]: BAR.oneRow,
    [BAR.seriesCrowded]: BAR.threeRows,
    [BAR.seriesCramped]: BAR.fourRows,
  },
})

// The room the document keeps under the bar for one sticky head: its least
// height and a little air.
const HEAD_ROOM = `2.75rem + ${space.xs}`

/** One compact group line, plus breathing room for anchors and focus. */
export const stickyStyles = stylex.create({
  bar: {
    paddingBlock: space.xs,
    backgroundColor: color.paper,
    borderBlockEndColor: color.rule,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
    insetBlockStart: pin.bar,
    position: 'sticky',
    zIndex: z.sticky,
    minHeight: '2.75rem',
  },
  // A head that pins under a control bar rather than under the site bar.
  underBar: {
    insetBlockStart: `calc(${pin.bar} + var(${STACK_PROPERTY}, 0px))`,
  },
  whileOpen: { position: { 'default': 'static', ':is([open] > *)': 'sticky' } },
  // A head that pins only where the whole control bar does. On a phone the
  // bar keeps its folded row pinned, which names the group in view, so the
  // head scrolls away with its group (#1380).
  wideOnly: { position: { default: 'static', [CONTROLS.whole]: 'sticky' } },
  document: {
    scrollPaddingBlockStart: `calc(${pin.bar} + var(${STACK_PROPERTY}, 0px) + ${HEAD_ROOM})`,
  },
  // A control pinned inside that room, as the landing's folded dial is:
  // focusing it gives the room back, rather than scrolling the page until
  // the control is below it and no longer pinned.
  insideRoom: { scrollMarginBlockStart: `calc(-1 * (${HEAD_ROOM}))` },
})
