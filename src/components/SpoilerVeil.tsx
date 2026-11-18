import * as stylex from '@stylexjs/stylex'
import type { ReactElement, ReactNode } from 'react'

import { Words } from '~/components/FogTile'
import {
  followFocus,
  type Lift,
  type LiftState,
  SAYS,
} from '~/components/useLift'
import { useVeilPeek, type VeilSlot } from '~/components/useVeilPeek'
import { useT } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { Gated } from '~/lib/progress/spoiler'
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

/** Everything the curtain needs to decide what it covers and how thickly. */
export interface SpoilerVeilProps<T extends Gated> {
  /**
   * Whether this place on the page shows a record or fog, and — when it is
   * fog — the two thresholds and the opaque handle that stand in for it.
   *
   * One field rather than a `revealed` flag beside a record, because the two
   * cannot be told apart by a type: a covered slot has no record to pass. The
   * decision is the server's, taken once for every record on the page, and
   * never retaken here.
   *
   * Any covered shape with a handle and the two thresholds will do: a record
   * slot from `~/lib/view/records` is one, a filler row is another.
   */
  slot: VeilSlot<T>
  /**
   * Trades a covered record's handle for the record.
   *
   * A prop rather than a hook, for a reason that is not style: under Vitest
   * the Start plugin is deliberately absent, so a server function called from
   * a component throws out of `getStartContext()`. A closure needs no mock.
   */
  peek: (handle: string) => Promise<T>
  /**
   * `block` is the default: the curtain stacks its notice above its action and
   * covers a paragraph or more. `inline` puts both on one line for a table
   * cell, where a two-line curtain would set the row height. `compact` is for
   * a small card: the verb alone, centred, with the threshold left to the
   * card's own meta line and to the control's accessible name.
   *
   * It also decides how the fog lifts (#1376). `inline` and `compact` sit in
   * lists, where a tap can be a slip of the thumb while scrolling, so they
   * ask first, as a fog tile does: "Show it anyway? Yes, show". `block` is
   * a record's own page or a panel the reader opened, and its control says
   * "Show anyway" in full, so one press lifts it.
   */
  density?: 'block' | 'compact' | 'inline'
  /**
   * How hard to blur. `text` is enough for a line of words; a photograph
   * needs `media`, because a face survives a half-rem blur and a fogged
   * waypoint must not give its subject away.
   */
  strength?: 'media' | 'text'
  /**
   * The page's own record rather than a neighbour of it. A lead veil names
   * its covered record to the intro a reader with no bookmark gets, and
   * lifts when that intro's "Show anyway" is pressed (#864). Only the first
   * band of a record page sets it: the neighbours stay under fog.
   */
  lead?: boolean
  /**
   * The uncovered content, built from the record once there is one.
   *
   * A function rather than a node. Given a node, the caller has already read
   * the record's name and drawing to build the JSX, and this component then
   * throws it away — which is fine when the record is in the bundle anyway,
   * and impossible when it is not.
   */
  children: (record: T) => ReactNode
  /**
   * What stands under the fog. Required, where it used to be optional: with
   * no record there is nothing else to draw. That is also what closes the
   * limit this component used to admit to — the covered words are no longer
   * in the DOM for find-in-page to turn up, because they are no longer in the
   * browser at all.
   */
  placeholder: ReactNode
}

/**
 * Covers content the reader has not reached yet.
 *
 * The curtain stays mounted after a reveal instead of unmounting, because a
 * node that disappears cannot fade. It transitions `opacity` and `visibility`
 * only: blurring is a `filter`, animating a filter is banned, so the blur is
 * dropped instantly underneath a curtain that fades out over it. The eye reads
 * a curtain lifting, and the compositor never touches layout.
 *
 * `visibility: hidden` is what takes the revealed curtain out of the tab order
 * and the accessibility tree; `inert` plus `aria-hidden` does the same for the
 * covered content, so a screen reader or a Tab press can never walk into a
 * spoiler that the eye cannot see.
 *
 * Lifting the fog by hand is a request now rather than a state flip: the
 * record is on the server. The curtain says so while the request is in flight
 * and stays put, so nothing of the record is in the DOM until it arrives —
 * the same guarantee the covered state gives. Once it arrives, focus follows
 * the reader from the spent control into what was lifted (`followFocus`).
 */
export function SpoilerVeil<T extends Gated>({
  slot,
  peek,
  density = 'block',
  strength = 'text',
  lead,
  placeholder,
  children,
}: SpoilerVeilProps<T>): ReactElement {
  const threshold = useThreshold()
  const { button, shown, state } = useVeilPeek(slot, peek, {
    lead,
    twoStep: density !== 'block',
  })
  const visible = shown !== null

  return (
    <div {...stylex.props(styles.frame)}>
      <Covered
        // An open slot was never covered: no control, and no focus to move.
        control={slot.open ? undefined : button.ref}
        density={density}
        strength={strength}
        visible={visible}
      >
        {shown === null ? placeholder : children(shown)}
      </Covered>

      {slot.open ? null : (
        <Curtain
          button={button}
          density={density}
          lifted={visible}
          notice={threshold('veil.locked', slot.covered)}
          state={state}
        />
      )}
    </div>
  )
}

/**
 * What is under the fog. While it is covered it is `inert` and `aria-hidden`,
 * so neither a Tab press nor a screen reader can walk into a spoiler the eye
 * cannot see — and what is mounted there is the placeholder, because the
 * record itself is not in the browser to mount.
 */
function Covered({
  control,
  density,
  strength,
  visible,
  children,
}: {
  children: ReactNode
  /** The control that lifts this content, when it was sent covered. */
  control: Lift<unknown>['button']['ref'] | undefined
  density: Density
  strength: Strength
  visible: boolean
}): ReactElement {
  return (
    <div
      // `undefined` rather than `false`: an explicit `aria-hidden="false"`
      // is legal but it is noise in the accessibility tree, and it reads as
      // if the covered state were still being managed once it is not.
      aria-hidden={!visible || undefined}
      inert={!visible}
      ref={
        control === undefined || !visible ?
          undefined
        : (node) => {
            followFocus(node, control)
          }
      }
      {...stylex.props(styles.content, !visible && fogFor(density, strength))}
    >
      {children}
    </div>
  )
}

/**
 * The curtain over it, and the control that lifts it. It stays mounted after
 * the lift instead of unmounting, because a node that disappears cannot fade;
 * `visibility: hidden` is what then takes it out of the tab order and the
 * accessibility tree once the fade is over.
 *
 * A record the server sent open gets no curtain at all: it was never covered,
 * so there is nothing to fade, and a hidden button on every open card was a
 * fifth of a list page's HTML and of the time spent rendering it (#621).
 */
function Curtain({
  button,
  density,
  lifted,
  notice,
  state,
}: {
  button: Lift<unknown>['button']
  density: Density
  lifted: boolean
  notice: string
  state: LiftState
}): ReactElement {
  const t = useT()
  const verbOnly = density !== 'block'
  const asking = state === 'asking'

  return (
    <button
      aria-busy={asking}
      // `aria-disabled` rather than `disabled`: a disabled button loses focus,
      // and with it the announcement of what just happened.
      aria-disabled={asking || undefined}
      // Block density reads its name off the visible notice. The verb-only
      // densities show the verb alone — the threshold already sits in its
      // own line beside them — so the sentence has to be supplied here.
      // From the first press on, the words they show are their name.
      aria-label={
        verbOnly && state === 'resting' ?
          `${notice}. ${t('veil.reveal')}`
        : undefined
      }
      type="button"
      {...button}
      {...stylex.props(
        styles.curtain,
        curtainFor(density),
        lifted && styles.curtainLifted,
      )}
    >
      {verbOnly ?
        <Verb
          inline={density === 'inline'}
          state={state}
        />
      : <Sign
          notice={notice}
          state={state}
        />
      }
    </button>
  )
}

/** What a block curtain says: the threshold, then the verb or the state. */
function Sign({
  notice,
  state,
}: {
  notice: string
  state: LiftState
}): ReactElement {
  const t = useT()

  return (
    <>
      <span {...stylex.props(styles.notice)}>{notice}</span>
      <span {...stylex.props(styles.action)}>
        {t(state === 'resting' ? 'veil.reveal' : SAYS[state])}
      </span>
    </>
  )
}

/**
 * What a verb-only curtain says: the verb at rest, and from the first press
 * the words a fog tile says, the question and its answer or the state.
 */
function Verb({
  inline,
  state,
}: {
  inline: boolean
  state: LiftState
}): ReactElement {
  const t = useT()

  if (state !== 'resting') {
    return (
      <Words
        line={inline}
        state={state}
      />
    )
  }

  return (
    <span {...stylex.props(styles.action, inline && styles.actionInline)}>
      {t('veil.revealShort')}
    </span>
  )
}

type Density = NonNullable<SpoilerVeilProps<Gated>['density']>
type Strength = NonNullable<SpoilerVeilProps<Gated>['strength']>

/**
 * How thick the fog is. A table cell is one line tall, so its blur is the
 * smallest; a card is a drawing and a name at once, so its blur is a
 * drawing's; a block follows the strength its caller asked for.
 */
function fogFor(density: Density, strength: Strength): stylex.StyleXStyles {
  if (density === 'inline') {
    return styles.coveredTight
  }
  if (density === 'compact') {
    return styles.coveredCompact
  }
  return strength === 'media' ? styles.coveredMedia : styles.covered
}

/** The curtain's layout per density; `block` adds nothing to the base. */
function curtainFor(density: Density): stylex.StyleXStyles {
  if (density === 'inline') {
    return styles.curtainInline
  }
  if (density === 'compact') {
    return styles.curtainCompact
  }
  return null
}

const styles = stylex.create({
  frame: { display: 'grid', position: 'relative' },

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
      ':is(button:active) > &': color.ink,
      ':is(button:hover) > &': color.ink,
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
