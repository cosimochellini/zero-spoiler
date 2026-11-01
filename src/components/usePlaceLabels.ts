import { onlyUnder, useSeriesT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import type { PlaceForm, PlaceWordsView } from '~/lib/view/records'

/** A page's place words, as its locale prints them. */
export interface PlaceLabels {
  /** The region picker's first option: "All seas" in One Piece. */
  allRegions: string
  /** A form's name: "Island". */
  formOf: (form: string) => string
  /** What a region is called: "Sea" in One Piece. */
  region: string
  /** A region's name: "East Blue". */
  regionOf: (region: string) => string
}

// One Piece's forms, labelled by its copy, which its pages are sent. Keyed by
// every member of the union, so a form added to it does not compile until it
// is labelled here too. Its seas' names come with the page (`seas`, #993).
const FORMS: Record<PlaceForm, TranslationKey<'one-piece'>> = {
  archipelago: 'form.archipelago',
  city: 'form.city',
  fortress: 'form.fortress',
  island: 'form.island',
  prison: 'form.prison',
  region: 'form.region',
  restaurant: 'form.restaurant',
  sea: 'form.sea',
  ship: 'form.ship',
  town: 'form.town',
  train: 'form.train',
  village: 'form.village',
}

/** A word's label from a table, or the bare word: only ever a bug shown. */
function lookUp<T>(
  table: Partial<Record<string, T>>,
  word: string,
  print: (label: T) => string,
): string {
  const label = Object.hasOwn(table, word) ? table[word] : undefined
  return label === undefined ? word : print(label)
}

/** A label the server sent, printed as it came. */
function own(label: string): string {
  return label
}

/**
 * The labels of a page's place words: the ones the server sent with it, for
 * a series that labels its words itself (`PlaceWordsView`), or One Piece's,
 * from its copy and the seas' names the page came with, when it sent none.
 */
export function usePlaceLabels(
  words?: PlaceWordsView,
  seas: Partial<Record<string, string>> = {},
): PlaceLabels {
  const onePiece = useSeriesT('one-piece')
  if (words !== undefined) {
    return {
      allRegions: words.allRegions,
      formOf: (form) => lookUp(words.forms, form, own),
      region: words.region,
      regionOf: (region) => lookUp(words.regions, region, own),
    }
  }

  // A series that sends no words of its own is One Piece, whose forms its
  // copy labels, and whose seas the page names.
  const t = onlyUnder(onePiece, 'one-piece')
  return {
    allRegions: t('places.allSeas'),
    formOf: (form) => lookUp<TranslationKey<'one-piece'>>(FORMS, form, t),
    region: t('places.sea'),
    regionOf: (region) => lookUp(seas, region, own),
  }
}
