import type { ReaderArchive } from '~/data/features'
import { orderByMode } from '~/data/order'
import type { Entity, SeriesArchive } from '~/data/types'
import type { Source } from '~/lib/progress/spoiler'

const RADIX = 36
const HANDLE_SHAPE = /^[\da-z]{1,4}$/u
interface HandleTable {
  canonical: Entity[]
  index: Map<string, number>
}
const tables = new WeakMap<object, HandleTable>()

/** Build one canonical episode order for each loaded archive. */
function tableOf(
  archive: Pick<SeriesArchive, 'entities' | 'series'>,
): HandleTable {
  let table = tables.get(archive)
  if (table === undefined) {
    const canonical = orderByMode(archive.entities, 'episode')
    table = {
      canonical,
      index: new Map(canonical.map((entity, at) => [entity.id, at])),
    }
    tables.set(archive, table)
  }
  return table
}

/** The letter a marked copy's handles carry after the series' namespace. */
const MARKS: Record<Source, string> = { chapter: 'c:', episode: 'e:' }

/** Each marked copy's source, and each copy's marked twin. */
const marks = new WeakMap<object, Source>()
const twins = new WeakMap<ReaderArchive, ReaderArchive>()

/**
 * The copy of one source a page with no bookmark is drawn from when it is
 * about a record of that source alone (#1431), its handles marked with the
 * source: `c:1a` rather than `1a`. A null-bookmark "Show anyway" reads the
 * mark to resolve the handle in the copy that minted it, not in the copy
 * with no record of one source only, where the same ordinal stands for
 * another record. A plain handle never resolves in a marked copy, nor a
 * marked one in a plain copy: the colon is not an ordinal, and the prefix
 * differs. Same records, same order, so the same ordinals as that source's
 * reader is handed.
 */
export function markedCopy(copy: ReaderArchive, source: Source): ReaderArchive {
  const known = twins.get(copy)
  if (known !== undefined) {
    return known
  }

  const twin = { ...copy }
  marks.set(twin, source)
  twins.set(copy, twin)
  return twin
}

/** The source a handle's mark names, if it is marked. */
export function markOf(
  handle: string,
  archive: Pick<SeriesArchive, 'series'>,
): Source | undefined {
  const series = seriesPrefixOf(archive)
  const sources: Source[] = ['chapter', 'episode']
  return sources.find((source) =>
    handle.startsWith(`${series}${MARKS[source]}`),
  )
}

/** One Piece retains its deployed ordinals; every other series has a namespace. */
function seriesPrefixOf(archive: Pick<SeriesArchive, 'series'>): string {
  return archive.series.slug === 'one-piece' ? '' : `${archive.series.slug}:`
}

/** The series' namespace, and the mark of a marked copy. */
function prefixOf(archive: Pick<SeriesArchive, 'entities' | 'series'>): string {
  const mark = marks.get(archive)
  return `${seriesPrefixOf(archive)}${mark === undefined ? '' : MARKS[mark]}`
}

/** A handle names an ordinal only inside the archive that minted it. */
export function indexHandle(
  index: number,
  archive: Pick<SeriesArchive, 'entities' | 'series'>,
): string {
  return `${prefixOf(archive)}${index.toString(RADIX)}`
}

/** A foreign, malformed or out-of-range token fails closed. */
export function handleIndex(
  handle: string,
  archive: Pick<SeriesArchive, 'entities' | 'series'>,
): number | undefined {
  const prefix = prefixOf(archive)
  if (!handle.startsWith(prefix)) {
    return undefined
  }
  const ordinal = handle.slice(prefix.length)
  return HANDLE_SHAPE.test(ordinal) ?
      Number.parseInt(ordinal, RADIX)
    : undefined
}

/**
 * The stable handle of a filed record in this archive, the same in either
 * unit. A reader is handed the copy their source tells (`~/data/source`), so
 * once a record of one source only is filed, a handle is numbered within
 * that copy and may stand for another record in the other source's.
 */
export function handleOf(
  id: string,
  archive: Pick<SeriesArchive, 'entities' | 'series'>,
): string {
  const at = tableOf(archive).index.get(id)
  if (at === undefined) {
    throw new Error(`No record is filed under ${id}, so it has no handle`)
  }
  return indexHandle(at, archive)
}

/** Only this archive's handles can resolve through its table. */
export function entityForHandle(
  handle: string,
  archive: Pick<SeriesArchive, 'entities' | 'series'>,
): Entity | undefined {
  const at = handleIndex(handle, archive)
  return at === undefined ? undefined : tableOf(archive).canonical.at(at)
}
