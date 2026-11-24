import * as stylex from '@stylexjs/stylex'

import {
  color,
  dur,
  ease,
  font,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

/**
 * The veil's sheet: the fog over covered content and the curtain's control.
 * Apart from the component so the stage veil (`useStageVeil`) draws the same
 * fog and the same control.
 */
export const veilStyles = stylex.create({
  frame: { display: 'grid', position: 'relative' },
  stage: { position: 'relative' },
  stageFrame: { display: 'grid' },
  stageCell: { gridColumnStart: '1', gridRowStart: '1' },

  content: {
    // The blur is dropped in one frame. It is never transitioned: `filter` is
    // not a compositor-only property and animating it drops frames on a large
    // block of text.
    filter: 'none',
    // Lifted content that holds no link takes the focus itself. It is not a
    // control: no ring around it.
    outlineStyle: 'none',
    userSelect: 'auto',
  },
  covered: {
    filter: 'blur(0.55rem)',
    // Without this the covered words can still be swept up by a drag-select
    // and pasted somewhere legible.
    userSelect: 'none',
  },
  // A block with a photograph in it. The radius is set by what it takes to
  // make a face unreadable at card size, and the content is clipped by the
  // frame so the blur cannot bleed a halo past the card edge.
  coveredMedia: { filter: 'blur(1.4rem)', userSelect: 'none' },
  // A table cell is one line tall, so the blur radius drops with it: 0.55rem
  // on a single line smears into the rows above and below.
  coveredTight: { filter: 'blur(0.3rem)', userSelect: 'none' },
  // A crest on a card is a drawing and a name at once, so the fog is thick
  // enough for a drawing, and the card is clipped by its own frame.
  coveredCompact: { filter: 'blur(1rem)', userSelect: 'none' },

  curtain: {
    inset: 0,
    padding: space.md,
    borderRadius: radius.card,
    borderStyle: 'none',
    gap: space.xs,
    alignContent: 'center',
    backgroundColor: 'transparent',
    color: color.ink2,
    cursor: 'pointer',
    display: 'grid',
    // Explicit rather than the implicit `minmax(auto, 1fr)`, whose floor is
    // the notice's min-content and can push the curtain past its frame.
    gridTemplateColumns: 'minmax(0, 1fr)',
    justifyItems: 'start',
    opacity: 1,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    pointerEvents: 'auto',
    position: 'absolute',
    textAlign: 'start',
    transitionDuration: dur.short,
    transitionProperty: 'opacity, visibility',
    transitionTimingFunction: ease.out,
    visibility: 'visible',
    width: '100%',
  },
  curtainInline: {
    gap: space.xs,
    paddingBlock: 0,
    paddingInline: 0,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'start',
  },
  curtainCompact: {
    padding: space.xs,
    alignContent: 'center',
    justifyItems: 'center',
    // A question that wraps on a narrow card stays centred over it.
    textAlign: 'center',
  },
  // The control sits in the drawing's cell and is not positioned, so its
  // stretched `::after` takes the section (`stage`) as its containing block
  // and a tap anywhere on the covered record lifts it. `z-index` applies to
  // a grid item without positioning it: the blurred halves each form a
  // stacking context (`filter`) and would otherwise paint over the control.
  // Lifted, `visibility` and `pointer-events` are inherited by the stretch.
  curtainStage: {
    'inset': 'auto',
    'alignSelf': 'center',
    'gridColumnStart': '1',
    'gridRowStart': '1',
    'justifyItems': 'center',
    'justifySelf': 'center',
    'position': 'static',
    'zIndex': 1,
    'width': 'auto',
    '::after': { inset: 0, content: '""', position: 'absolute' },
  },
  curtainLifted: {
    opacity: 0,
    pointerEvents: 'none',
    // Hidden rather than `display: none` so the fade can run, and unlike
    // opacity alone it removes the button from the tab order and from the
    // accessibility tree once the fade is over.
    visibility: 'hidden',
  },

  notice: {
    borderColor: color.rule2,
    borderStyle: 'solid',
    borderWidth: rule.hair,
    paddingBlock: space.xs3,
    paddingInline: space.xs,
    backgroundColor: color.paper,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontWeight: 500,
    letterSpacing: '0.08em',
    overflowWrap: 'anywhere',
    textTransform: 'uppercase',
    minWidth: 0,
  },
  actionInline: { overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 },
  action: {
    paddingInline: space.xs2,
    backgroundColor: color.paper,
    color: {
      'default': color.accent,
      ':is(button:active *)': color.ink,
      ':is(button:hover *)': color.ink,
    },
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 700,
    textDecorationLine: 'underline',
    textUnderlineOffset: '2px',
    // A verb in a table cell is one line or it is broken.
    whiteSpace: 'nowrap',
  },
})
