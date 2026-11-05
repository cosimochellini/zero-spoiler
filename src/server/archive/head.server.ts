import type { Entity } from '~/data/types'
import type { SeriesSlug, TranslationKey } from '~/i18n/types'
import {
  describeThreshold,
  type ThresholdSentence,
} from '~/lib/progress/threshold'
import { recordImages } from '~/lib/seo/socialImage'
import type { DocumentHead } from '~/lib/view/records'
import { translatorOf } from '~/server/copy.server'

import type { Reader } from './reader.server'

/**
 * The document title and description of a record's own page.
 *
 * A title is set before any component runs, so this is the one place a
 * covered name could leak into a page that is otherwise clean. Every page
 * that gives a record a page of its own goes through here, rather than
 * writing the same four lines again with its own dictionary keys — one of
 * those copies would be the one that forgets the fogged branch.
 */

/** What a record's page calls itself, with its record and without it. */
export interface HeadKeys {
  foggedDescription: ThresholdSentence<SeriesSlug>
  foggedTitle: TranslationKey<SeriesSlug>
  pageTitle: TranslationKey<SeriesSlug>
}

/**
 * Under fog both lines are generic and the page keeps the site's card; open,
 * they are the record's own, and so are its pictures.
 */
export function headFor(
  entity: Entity,
  keys: HeadKeys,
  r: Reader,
): DocumentHead {
  const t = translatorOf(r.archive.series, r.locale)

  if (!r.sees(entity)) {
    return {
      title: t(keys.foggedTitle),
      description: describeThreshold({
        gated: entity,
        mode: r.mode,
        series: r.archive.series,
        sentence: keys.foggedDescription,
        t,
      }),
    }
  }

  const name = entity.name[r.locale]

  return {
    title: t(keys.pageTitle, { name }),
    description: entity.summary[r.locale],
    image: {
      ...recordImages(r.archive.series.slug, r.locale, entity.id),
      alt: name,
    },
  }
}
