import * as stylex from '@stylexjs/stylex'

/**
 * Design tokens for "Sea Chart": a One Piece wiki drawn as a night-time sea
 * route, now one series among several, so its colours are a theme
 * (`src/styles/themes.ts`) and the defaults below are the site's own. The
 * names are the usual token set (paper / ink / rule / muted / accent /
 * accentInk / focus, a 4pt space scale, named easings and durations).
 *
 * There is no `tokens.css` holding `:root { --color-ink: … }`, and no second
 * source of truth: `stylex.defineVars` compiles to exactly those CSS custom
 * properties. Keeping the values here means the StyleX compiler can inline
 * them and the fallow gate can see them.
 *
 * The `.stylex.ts` suffix is mandatory rather than decorative: the compiler
 * only evaluates `defineVars` inside a `*.stylex.{js,ts}` module.
 *
 * No heading is set in italics.
 */

/**
 * The site's own colours, "Blackout": house lights down and one white
 * spotlight. Pages that belong to no series (the legal notices, the hub) are
 * painted in these. A series paints its pages with its own theme, a complete
 * override of this set in `src/styles/themes.ts` that its description names,
 * so no series colour is the site's colour. Owner, 2026-10-24.
 *
 * Every colour is OKLCH, tinted a trace toward violet (hue 285) so no grey is
 * flat. The accent is the brightest white on the page and nothing else is
 * chromatic: on the hub, each series brings the only colour. No `#000`, no
 * `#fff`.
 *
 * Contrast against `paper`, computed from the OKLCH values (WCAG 2.1):
 *
 *   ink   16.5:1   ink2  11.6:1   muted  8.2:1   accent  19.7:1   focus  19.7:1
 *   rule2  3.7:1 (control boundaries)   rule  1.5:1 (decorative hairlines only)
 *
 * On `paper3`, the lightest surface, the same values read 14.4 / 10.2 / 7.1 /
 * 17.2 / 17.2 / 3.2, so body text clears 7:1 and a control boundary clears
 * 3:1 on every surface. `accentInk` on `accent` is 19.5:1.
 *
 * Links here are told apart by their underline, not their colour: `accent`
 * is only 1.2:1 against `ink` (1.7:1 against `ink2`), under the 3:1 a colour
 * alone needs. A link painted `accent` keeps `textDecorationLine: underline`;
 * `src/styles/themes.test.tsx` fails the shared pages when one does not.
 */
export const NEUTRAL = stylex.defineConsts({
  paper: 'oklch(12% 0.005 285)',
  paper2: 'oklch(16% 0.006 285)',
  paper3: 'oklch(21% 0.007 285)',
  // Decorative hairlines only. A control boundary needs 3:1 and must use
  // `rule2` or `ink` instead.
  rule: 'oklch(30% 0.006 285)',
  rule2: 'oklch(52% 0.008 285)',
  muted: 'oklch(72% 0.006 285)',
  ink2: 'oklch(82% 0.005 285)',
  ink: 'oklch(93% 0.005 285)',
  // The spotlight. It marks links, the active locale and focus rings; it is
  // never a large fill.
  accent: 'oklch(99% 0.005 285)',
  // A hard contract. Any surface painted `accent` that carries text sets its
  // colour to this, never to a hardcoded dark.
  accentInk: 'oklch(13% 0.005 285)',
  focus: 'oklch(99% 0.005 285)',
  // The three overlays, and the only tokens with an alpha channel. All are
  // modifiers laid over `paper`, not colours anything is painted in: the
  // bloom at the top of the page, the dark behind a dialog, and the glass of
  // the pinned site bar.
  glow: 'oklch(92% 0.01 285 / 0.12)',
  scrim: 'oklch(12% 0.005 285 / 0.72)',
  veil: 'oklch(12% 0.005 285 / 0.88)',
})

export const color = stylex.defineVars(NEUTRAL)

/**
 * The one colour each drawing is allowed. Nineteen hues, all light enough
 * (L 66-92%) to clear 5:1 against `paper2`, the card surface, as a 2px line.
 * A drawing takes exactly one of these for its main stroke and leaves every
 * other line in `ink2`, so thirty-five illustrations read as one set rather
 * than as thirty-five palettes. They are not text colours and are never used
 * outside `ChartArt` and the hero chart.
 */
export const tint = stylex.defineVars({
  red: 'oklch(68% 0.2 25)',
  vermilion: 'oklch(70% 0.19 38)',
  orange: 'oklch(76% 0.17 58)',
  ocher: 'oklch(78% 0.13 82)',
  yellow: 'oklch(88% 0.16 98)',
  acid: 'oklch(86% 0.2 128)',
  green: 'oklch(76% 0.17 148)',
  teal: 'oklch(80% 0.13 188)',
  cyan: 'oklch(83% 0.13 212)',
  azure: 'oklch(80% 0.11 236)',
  blue: 'oklch(74% 0.12 262)',
  ice: 'oklch(92% 0.04 220)',
  lavender: 'oklch(80% 0.1 296)',
  violet: 'oklch(74% 0.15 306)',
  magenta: 'oklch(74% 0.19 346)',
  pink: 'oklch(82% 0.11 352)',
  flamingo: 'oklch(78% 0.14 6)',
  sand: 'oklch(86% 0.08 82)',
  wine: 'oklch(66% 0.17 14)',
})

/**
 * A 4pt scale, ten steps, named by role. The keys are camelCase because a
 * `defineVars` key has to be a valid identifier, so the usual
 * `3xs … 4xl` names shift one character:
 *
 *   xs3 = 3xs (2px)    xs2 = 2xs (4px)    xs = 8px     sm = 12px   md = 16px
 *   lg  = 24px         xl  = 40px         xl2 = 64px   xl3 = 96px  xl4 = 144px
 *
 * Sibling spacing is `gap`. `margin` is for optical adjustment only.
 */
export const space = stylex.defineVars({
  xs3: '0.125rem',
  xs2: '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2.5rem',
  xl2: '4rem',
  xl3: '6rem',
  xl4: '9rem',
})

/**
 * Two families plus one outlier, and never a fourth: the 2+1 ceiling. The
 * outlier is confined to two slots: episode numerals wherever they appear,
 * and the horizon label on the route.
 *
 * `Bricolage Grotesque` is a display grotesque with an optical-size axis. It
 * is set at 800 on the headline, the wordmark, waypoint names and legend
 * figures, at normal or semi-condensed width; the three lighter weights it
 * ships at are listed beside their `@font-face` rules in `global.css`. Body
 * copy is `Instrument Sans`, a variable text sans (weight 400-700). All three
 * are self-hosted from `public/fonts`, which keeps the CSP at
 * `default-src 'self'`.
 */
export const font = stylex.defineVars({
  display:
    "'Bricolage Grotesque', 'Bricolage Grotesque Fallback', Arial, sans-serif",
  body: "'Instrument Sans', 'Instrument Sans Fallback', Arial, sans-serif",
  mono: "'JetBrains Mono', 'JetBrains Mono Fallback', ui-monospace, SFMono-Regular, Menlo, monospace",
})

/**
 * A 1.25 major third on a 16px base, plus two fluid sizes.
 *
 * `display` is sized for a two-line headline in a column that is at most half
 * the page: 2.5rem on a phone, 4rem at 96rem and above. The headline is 32
 * characters, inside the 21-50 bracket that gets the full display size.
 *
 * `hero` is the one step above it, and it exists for exactly one place: the
 * fold, where the headline is set over a drawing rather than beside body copy
 * and has the whole width of the page to fall through. At that size the
 * display face is set semi-condensed on its width axis, which is what keeps
 * two lines of it inside 16 characters a line.
 *
 * `xs2` is below the scale on purpose and for one use: the kind written
 * inside a countdown cell, six of which share a 320px row.
 */
export const text = stylex.defineVars({
  xs2: '0.625rem',
  xs: '0.75rem',
  base: '1rem',
  lg: '1.25rem',
  xl: '1.5625rem',
  display: 'clamp(2.5rem, 1.6vw + 1.6rem, 4rem)',
  hero: 'clamp(3rem, 4.2vw + 1.2rem, 5.5rem)',
})

/**
 * `display` sits at 1.0: the headline is sentence case in a face with short
 * descenders, and the lines are meant to sit close.
 */
export const leading = stylex.defineVars({
  display: '1',
  heading: '1.15',
  body: '1.6',
})

/** Elements entering decelerate; elements leaving accelerate away. */
export const ease = stylex.defineVars({
  out: 'cubic-bezier(0.16, 1, 0.3, 1)',
  in: 'cubic-bezier(0.7, 0, 0.84, 0)',
  inOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
})

/** Three buckets. An exit runs at roughly 75% of its enter. */
export const dur = stylex.defineVars({
  micro: '120ms',
  short: '220ms',
  long: '420ms',
})

/**
 * A chart is drawn with a ruler, so the radii are small. `pill` is kept for
 * the locale switch, which is the one control that reads as a toggle rather
 * than as a mark on the chart.
 */
export const radius = stylex.defineVars({
  card: '4px',
  input: '3px',
  pill: '999px',
})

/** Two widths. `fine` is the interactive boundary, `hair` is the hairline. */
export const rule = stylex.defineVars({ hair: '1px', fine: '2px' })

/**
 * Six named levels, plus `skip`.
 *
 * `sticky` and `stickyNav` are separate so a banner pinned under the bar
 * cannot climb over it, and `bar` is the site bar over both. `skip` sits
 * above everything by definition: a skip link that any other layer can cover
 * is a skip link that does not work.
 */
export const z = stylex.defineVars({
  base: '1',
  raised: '10',
  dropdown: '100',
  sticky: '200',
  stickyNav: '210',
  // The site bar, pinned at every width: a listing's control bar opens under it.
  bar: '220',
  tooltip: '600',
  skip: '700',
})

/**
 * The site bar's heights, rows of 2.75rem with `space.xs2` above and below
 * them, and the widths its rows fold at. A series bar carries the series'
 * name and pages besides the wordmark, so it folds them under below
 * `seriesWide`, where the site's own bar, the wordmark and the language, is
 * one row. On a window only a few rems wide (large text on a phone) the
 * wordmark no longer fits beside the controls and takes a row of its own:
 * below `seriesCrowded` on a series page, where the bookmark sits beside the
 * language, and below `siteCrowded` on the site's own pages, where only the
 * language does. Below `seriesCramped` the bookmark and the language no
 * longer fit side by side either, and each takes its row. The widths are in
 * rem, so they follow the reader's text size, and hold the widest bookmark at
 * the default text size but Game of Thrones' book chapter ("IN PROVA / EP
 * 37" in Italian; "B1 · CH 72" is wider, #1558). Each height is its rows of
 * `TAP` (src/components/SiteBar.styles.ts) and the padding, which
 * src/styles/bar.test.ts checks. `SiteBar` lays out from these, and `pin` and
 * `seriesBarPin` in src/styles/sticky.ts set `pin.bar` to match.
 */
export const BAR = stylex.defineConsts({
  seriesWide: '@media (min-width: 56rem)',
  seriesCrowded: '@media (min-width: 12rem) and (max-width: 19.99rem)',
  seriesCramped: '@media (max-width: 11.99rem)',
  siteCrowded: '@media (max-width: 12.99rem)',
  fourRows: '11.5rem',
  threeRows: '8.75rem',
  twoRows: '6rem',
  oneRow: '3.25rem',
})

/**
 * How much of the window the site bar keeps, pinned at every width. The
 * site's own bar, on the hub and the legal page, is one row, the wordmark
 * and the language, until the wordmark needs a row of its own
 * (`BAR.siteCrowded`). A series page overrides it with `seriesBarPin`
 * (src/styles/sticky.ts), which keeps two rows, where the pages fold under,
 * up to `BAR.seriesWide`. The bar takes this as its height, and everything
 * else that pins pins under it, so the two cannot drift apart.
 */
export const pin = stylex.defineVars({
  bar: { default: BAR.oneRow, [BAR.siteCrowded]: BAR.twoRows },
})

/**
 * The window in which a listing's control bar pins whole: wide and tall
 * enough to spare it. In a narrower or shorter one it pins only its folded
 * row (`ControlBar`), and a places index's group heads do not pin at all,
 * because that row names the group in view (`stickyStyles.wideOnly`).
 */
export const CONTROLS = stylex.defineConsts({
  whole: '@media (min-width: 40rem) and (min-height: 32rem)',
})
