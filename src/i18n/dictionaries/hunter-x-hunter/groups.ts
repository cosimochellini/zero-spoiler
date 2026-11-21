import type { Locale } from '~/i18n/locales'

/** Hunter x Hunter's groups: the bodies of the ranks page (#1441). */
export type HunterGroup =
  | 'chimera-ants'
  | 'hunter-association'
  | 'phantom-troupe'
  | 'ten-dons'
  | 'zoldyck-family'

/**
 * The name of every Hunter x Hunter group the ranks page lists (#1441), in
 * both locales. Server-only, and not part of the series' copy, which every
 * page ships: some name a group the reader meets late ("Chimera Ants"), so
 * the ranks page sends a body's name only once the body is met and a seat of
 * it is held or vacant (`powerPage`), and a character's page only with a seat
 * they hold. The Italian follows the 2011 dub, as the records' own prose
 * does (#452).
 */
export const HUNTER_X_HUNTER_GROUPS: Record<
  Locale,
  Record<HunterGroup, string>
> = {
  en: {
    'hunter-association': 'Hunter Association',
    'zoldyck-family': 'Zoldyck family',
    'phantom-troupe': 'Phantom Troupe',
    'ten-dons': 'Ten Dons',
    'chimera-ants': 'Chimera Ants',
  },
  it: {
    'hunter-association': 'Associazione Hunter',
    'zoldyck-family': 'Famiglia Zoldick',
    'phantom-troupe': 'Brigata Fantasma',
    'ten-dons': 'Dieci Anziani',
    'chimera-ants': 'Formichimere',
  },
}
