import * as stylex from '@stylexjs/stylex'

import {
  color,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/** "More devices?" in the bookmark dialog (#1560). */
export const syncStyles = stylex.create({
  // Set apart from Save and its forget line by a hairline: it changes where
  // the bookmark lives, not the bookmark.
  devices: {
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    paddingBlockStart: space.md,
  },
  // A quiet line, like the forget line above it: syncing is occasional.
  summary: {
    borderRadius: radius.input,
    alignItems: 'center',
    color: { 'default': color.muted, ':hover': color.ink },
    cursor: 'pointer',
    display: 'flex',
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    justifyContent: 'center',
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    minHeight: '44px',
  },
  panel: {
    gap: space.md,
    display: 'grid',
    justifyItems: 'center',
    paddingBlockStart: space.md,
  },
  text: {
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    textAlign: 'center',
    maxWidth: '44ch',
  },
  warning: { color: color.muted },
  // Big enough for a camera across a desk, small enough to leave the
  // actions on a phone's screen.
  code: {
    shapeRendering: 'crispEdges',
    borderRadius: radius.card,
    aspectRatio: '1',
    display: 'block',
    width: 'min(14rem, 70vw)',
  },
  // Dark on light, as scanners expect: the inks of the set, inverted.
  ground: { fill: color.ink },
  modules: { fill: color.paper },
  actions: {
    gap: space.xs,
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  disconnect: {
    borderColor: 'transparent',
    color: { 'default': color.muted, ':hover:not(:disabled)': color.ink },
    fontWeight: 500,
    textDecorationColor: { 'default': color.rule2, ':hover': color.ink },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.hair,
    textUnderlineOffset: '0.25em',
  },
})
