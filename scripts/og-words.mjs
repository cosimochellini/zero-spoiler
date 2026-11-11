// What a record's social card prints: its name, and the line its page prints
// under it, read through the server's own projections so a card says exactly
// what the page says. Only what a reader standing at the record's own
// threshold reads, in every source the record is told in: a shared link
// reaches people at any point of the story. Used by `og-pictures.mjs`.
import { importArchive } from './archive-loader.mjs'

/** @typedef {import('../src/data/types.ts').Entity} Entity */
/** @typedef {import('../src/data/features.ts').ReaderArchive} ReaderArchive */
/** @typedef {import('../src/server/archive/reader.server.ts').Reader} Reader */
/** @typedef {import('../src/lib/progress/episode.ts').Bookmark} Bookmark */
/** @typedef {{ name: string, line?: string, epithet?: string, role?: string }} Seen */
/** @typedef {(entity: Entity, r: Reader) => Seen} Reading */

const [{ characterPage }, { portOf }, { translatorOf }] = await Promise.all(
  [
    'server/archive/pages.server.ts',
    'server/archive/places.server.ts',
    'server/copy.server.ts',
  ].map((module) => importArchive(module)),
)

/**
 * The one value every reader agrees on, or nothing: a line two sources tell
 * differently at the record's threshold is not one a shared link may print.
 * @param {(string | undefined)[]} values One value per reader.
 * @returns {string | undefined} The shared value.
 */
export function agreed(values) {
  const [first] = values
  return first !== undefined && values.every((value) => value === first) ?
      first
    : undefined
}

/**
 * The readers standing exactly at a record's threshold, one per source the
 * record is told in.
 * @param {Entity} entity The record.
 * @param {(bookmark: Bookmark) => Reader} readerAt A reader at a bookmark.
 * @returns {Reader[]} The readers, the episode one first.
 */
export function readersAt(entity, readerAt) {
  return [
    ...(entity.source === 'chapter' ?
      []
    : [readerAt({ mode: 'episode', episode: entity.revealedAtEpisode })]),
    ...(entity.source === 'episode' ?
      []
    : [readerAt({ mode: 'chapter', chapter: entity.revealedAtChapter })]),
  ]
}

/**
 * A record's name as the reader's own copy of the archive gives it: a record
 * the anime names differently carries that name only in the episode copy.
 * @param {Entity} entity The record.
 * @param {Reader} r The reader.
 * @returns {string} The name.
 */
function nameOf(entity, r) {
  return (r.archive.getEntity(entity.id) ?? entity).name[r.locale]
}

/** @type {Reading} */
function character(entity, r) {
  const page = characterPage(entity.id, r)
  if (page?.detail.slot.open !== true) {
    throw new Error(`${entity.id} is not open at its own threshold`)
  }
  return {
    name: page.detail.slot.record.name,
    epithet: page.detail.facts.epithet,
    role: page.detail.slot.record.role,
  }
}

/**
 * A record's name, and the line its series' copy words under one key.
 * @param {Entity} entity The record.
 * @param {Reader} r The reader.
 * @param {string | undefined} key The line's key, or none for no line.
 * @returns {{ name: string, line?: string }} The words.
 */
function worded(entity, r, key) {
  return {
    name: nameOf(entity, r),
    ...(key !== undefined && {
      line: translatorOf(r.archive.series, r.locale)(key),
    }),
  }
}

/** @type {Reading} */
function fruit(entity, r) {
  const form = r.archive.fruitFormOf(entity)
  return worded(entity, r, form === undefined ? undefined : `fruitForm.${form}`)
}

/** @type {Reading} */
function ability(entity, r) {
  const nen = r.archive.abilityNenOf(entity)
  return worded(entity, r, nen === undefined ? 'kind.ability' : `nen.${nen}`)
}

/** @type {Reading} */
function place(entity, r) {
  const { dossier } = portOf(entity, r)
  if (dossier === null) {
    return { name: nameOf(entity, r) }
  }
  const t = translatorOf(r.archive.series, r.locale)
  const words =
    dossier.words === undefined ?
      [t(`form.${dossier.form}`), dossier.seaName]
    : [dossier.words.forms[dossier.form], dossier.words.regions[dossier.sea]]
  return {
    name: nameOf(entity, r),
    line: words.filter((word) => word !== undefined).join(' · '),
  }
}

/** @type {Reading} */
function ship(entity, r) {
  return worded(entity, r, 'form.ship')
}

/**
 * How each kind of record is read: a character's epithet, else its role; a
 * fruit's type; an ability's Nen type, else its kind; a place's form and
 * region; a ship's kind.
 * @type {Record<string, Reading>}
 */
const READINGS = { ability, character, fruit, place, ship }

/**
 * What one record's card prints in one locale: the name the first reader is
 * given (the episode one, whose name a crawler's page title prints), and the
 * line every reader at the threshold agrees on.
 * @param {Entity} entity The record.
 * @param {Reader[]} readers The readers at its threshold.
 * @returns {{ name: string, line?: string }} The words.
 */
export function wordsOf(entity, readers) {
  const read = READINGS[entity.kind]
  if (read === undefined) {
    throw new Error(`${entity.id} is a ${entity.kind}, which has no page`)
  }
  const seen = readers.map((r) => read(entity, r))
  const line =
    entity.kind === 'character' ?
      (agreed(seen.map((words) => words.epithet))
      ?? agreed(seen.map((words) => words.role)))
    : agreed(seen.map((words) => words.line))
  return {
    name: seen[0].name,
    ...(line !== undefined && line !== '' && { line }),
  }
}

/**
 * The records of a series that have a page of their own, of both sources: a
 * reader of either may share its page.
 * @param {ReaderArchive} archive The series' archive, every record in it.
 * @param {(series: ReaderArchive['series'], page: string) => boolean} hasPage Whether the series declares a page.
 * @returns {Entity[]} The records.
 */
export function pagedRecords(archive, hasPage) {
  const { series } = archive
  return [
    ...(hasPage(series, 'characters') ? archive.characters : []),
    ...(hasPage(series, 'fruits') ? archive.fruits : []),
    ...(hasPage(series, 'places') ? [...archive.places, ...archive.ships] : []),
    ...(hasPage(series, 'abilities') ? archive.abilities : []),
  ]
}
