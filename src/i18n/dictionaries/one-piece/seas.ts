import type { Locale } from '~/i18n/locales'
import type { Region } from '~/lib/view/chart'

/**
 * The name of every sea the chart writes, in both locales. Server-only, and
 * not part of One Piece's copy, which goes to every page at every bookmark:
 * most are named well after the first episode ("New World", "Calm Belt"),
 * so a page is sent only the names of the seas its reader has opened
 * (`seasOf`, `~/server/archive/printed.server`), and the gate is the chart's
 * own (`regionsFor`, `~/lib/view/chart`), and nowhere else (#993). East Blue
 * is here too, so a page reads every sea's name from one place. The New
 * World's Calm Belt is drawn but not named.
 */
export const SEA_LABELS: Record<
  Locale,
  Record<Exclude<Region, 'new-world-calm-belt'>, string>
> = {
  en: {
    'east-blue': 'East Blue',
    'grand-line': 'Grand Line',
    'new-world': 'New World',
    'calm-belt': 'Calm Belt',
    'red-line': 'Red Line',
    'north-blue': 'North Blue',
    'west-blue': 'West Blue',
    'south-blue': 'South Blue',
  },
  it: {
    'east-blue': 'East Blue',
    'grand-line': 'Rotta Maggiore',
    'new-world': 'Nuovo Mondo',
    'calm-belt': 'Fascia di Bonaccia',
    'red-line': 'Red Line',
    'north-blue': 'North Blue',
    'west-blue': 'West Blue',
    'south-blue': 'South Blue',
  },
}
