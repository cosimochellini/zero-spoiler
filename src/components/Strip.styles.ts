import * as stylex from '@stylexjs/stylex'

import { color, leading, rule, space, text } from '~/styles/tokens.stylex'

/**
 * The line under the site bar that speaks about the bookmark: the trial
 * strip, and the status after a save. Two accent hairlines on the second
 * paper, a sentence and its buttons.
 *
 * The sentence is the Body role (Instrument Sans at 1rem, line height 1.6, so
 * a wrap on a phone reads as running text) at weight 600, the weight a button
 * has, which sets it apart from the page's text. It was mono uppercase on the
 * trial strip; the Mono Rule keeps that face for numerals, counts and short
 * labels, and a sentence is none of them (#1375).
 */
export const stripStyles = stylex.create({
  strip: {
    borderBlockStyle: 'solid',
    gap: space.sm,
    paddingBlock: space.sm,
    paddingInline: space.md,
    alignItems: 'center',
    backgroundColor: color.paper2,
    borderBlockColor: color.accent,
    borderBlockWidth: rule.hair,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  words: {
    color: color.ink,
    fontSize: text.base,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 600,
    lineHeight: leading.body,
    textWrap: 'balance',
  },
})
