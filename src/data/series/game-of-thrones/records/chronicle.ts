import type { Dated, LocalizedText, Story } from '~/data/types'

/** Where a story sits: the episode, then the site chapter. */
export type At = [episode: number, chapter: number]

/**
 * A story both media tell the same way: the episode and the chapter each
 * complete it, and both vouch for the pair.
 */
export function inBoth(
  [episode, chapter]: At,
  title: LocalizedText,
  body: LocalizedText,
): Dated<Story> {
  return { episode, chapter, value: { title, body } }
}

/** A story the show alone tells, or tells its own way; the chapter only orders it. */
export function onScreen(
  [episode, chapter]: At,
  title: LocalizedText,
  body: LocalizedText,
): Dated<Story> {
  return { episode, chapter, source: 'episode', value: { title, body } }
}

/** A story the books alone tell, or tell their own way; the episode only orders it. */
export function inBooks(
  [episode, chapter]: At,
  title: LocalizedText,
  body: LocalizedText,
): Dated<Story> {
  return { episode, chapter, source: 'chapter', value: { title, body } }
}
