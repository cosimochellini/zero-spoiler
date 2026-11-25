// What a record's social card prints: its name, and the line its page prints
// under it, read through the server's own projections so a card says exactly
// what the page says. The page is the one a link preview fetches with no
// bookmark (`pageReader`): the record at its first appearance, as an anime
// viewer and a manga reader both see it, since a shared link reaches people at
// any point of the story; a record of one source only as that source's reader
// sees it at its own threshold (#1431). Used by `og-pictures.mjs`.
import { importArchive } from './archive-loader.mjs'

/** @typedef {import('../src/data/types.ts').Entity} Entity */
/** @typedef {import('../src/data/features.ts').ReaderArchive} ReaderArchive */
/** @typedef {import('../src/server/archive/reader.server.ts').Reader} Reader */
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
 * What one record's card prints in one locale: the name and the line its
 * page with no bookmark (`pageReader`) is given.
 * @param {Entity} entity The record.
 * @param {Reader} r Its reader.
 * @returns {{ name: string, line?: string }} The words.
 */
export function wordsOf(entity, r) {
  const read = READINGS[entity.kind]
  if (read === undefined) {
    throw new Error(`${entity.id} is a ${entity.kind}, which has no page`)
  }
  const { name, line, epithet, role } = read(entity, r)
  const printed = entity.kind === 'character' ? (epithet ?? role) : line
  return {
    name,
    ...(printed !== undefined && printed !== '' && { line: printed }),
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
