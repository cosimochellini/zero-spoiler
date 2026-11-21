import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

import { eggheadRelationshipOmissions } from '~/data/series/one-piece/records/egghead.relationships'
import { thrillerBarkRelationshipOmissions } from '~/data/series/one-piece/records/thriller-bark.relationships'
import { loadedSeries } from '~/test/series'

// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import elbafEvidence from '../../docs/content-provenance/elbaf-relationships.json' with { type: 'json' }
// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import thronesRelationshipEvidence from '../../docs/content-provenance/game-of-thrones-relationships.json' with { type: 'json' }
// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import thronesEvidence from '../../docs/content-provenance/game-of-thrones.json' with { type: 'json' }
// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import hunterRelationshipEvidence from '../../docs/content-provenance/hunter-x-hunter-relationships.json' with { type: 'json' }
// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import hunterEvidence from '../../docs/content-provenance/hunter-x-hunter.json' with { type: 'json' }
// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import relationshipEvidence from '../../docs/content-provenance/relationships.json' with { type: 'json' }
// eslint-disable-next-line no-restricted-imports -- The evidence lives in docs, beside the audit manifest.
import manifest from '../../docs/content-provenance/sources.json' with { type: 'json' }

/** What an authored character cites: `sources.json` keys, and URLs it cannot pin. */
interface Authored {
  sources: string[]
  unpinned?: { reason: string; urls: string[] }
}

/** One record's research: the pages read and the checks still open. */
interface Research {
  pending?: boolean
  sources?: string[]
  unverified?: string[]
}

/** Every character of a series, once: authored, omitted with a reason, or pending an issue. */
interface Ledger {
  authored: Record<string, Authored>
  omitted: Record<string, string>
  pending: Record<string, string>
}

/** What the checks below read of one series. */
interface Provenance {
  name: string
  relationships: Ledger
  slug: string
  /** The wiki each `sources.json` key prefix is pinned from. */
  wikis: Record<string, string>
  /** Whether an authored character may cite no key at all. */
  uncited?: true
  /** The one host an authored character may cite by bare URL, unpinned. */
  unpinnable?: string
  /** How the series' wiki titles an episode's page; chapters are `Chapter N`. */
  episodePage?: (episode: number) => string
  /** The per-record research ledger and the hosts it may cite. */
  records?: { hosts: string[]; ledger: Record<string, Research> }
}

const byId = (a: string, b: string): number => a.localeCompare(b)

function hostOf(url: string): string {
  const parsed = new URL(url)
  return parsed.host
}

const sources: Partial<Record<string, { title: string; url: string }>> =
  manifest.sources

/** The page titles pinned from these hosts: a same-titled page elsewhere is no evidence. */
function titlesOn(hosts: string[]): Set<string> {
  return new Set(
    Object.values(manifest.sources)
      .filter(({ url }) => hosts.includes(hostOf(url)))
      .map(({ title }) => title),
  )
}

/** The provenance folder: every ledger and research note beside `sources.json`. */
const LEDGERS = path.join(import.meta.dirname, '../../docs/content-provenance')

/** Every wiki revision a ledger or note cites, with the file citing it. */
const cited = readdirSync(LEDGERS)
  .filter((file) => /\.(?:json|md)$/u.test(file) && file !== 'sources.json')
  .flatMap((file) => {
    // eslint-disable-next-line security/detect-non-literal-fs-filename -- a file listed in the folder above.
    const text = readFileSync(path.join(LEDGERS, file), 'utf8')
    return Array.from(
      text.matchAll(/https:\/\/[^\s"<>]*?[?&]oldid=\d+/gu),
      ([url]) => ({ file, url: new URL(url) }),
    )
  })

/** The pinned revisions' titles, by `<host><path> <revision>`. */
const revisions = new Map(
  Object.values(manifest.sources).map(({ revision, revisionUrl, title }) => {
    const { host, pathname } = new URL(revisionUrl)
    return [`${host}${pathname} ${String(revision)}`, title]
  }),
)

/** The page a revision URL names, when it names one: `/wiki/<Title>?oldid=` or `?title=`. */
function titleIn({ pathname, searchParams }: URL): string | undefined {
  const page =
    pathname.startsWith('/wiki/') ?
      decodeURIComponent(pathname.slice('/wiki/'.length))
    : searchParams.get('title')
  return page?.replaceAll('_', ' ')
}

const PROVENANCE: Provenance[] = [
  {
    name: 'One Piece',
    slug: 'one-piece',
    // Its ledger keeps its own files: `relationships.json` maps a character
    // to the key of their character revision or `null`, and the omissions
    // are spread over Elbaf's evidence and two arc modules. Nothing pends.
    relationships: {
      authored: Object.fromEntries(
        Object.entries(relationshipEvidence).map(([id, key]) => [
          id,
          { sources: key === null ? [] : [key] },
        ]),
      ),
      omitted: {
        ...elbafEvidence.omitted,
        ...eggheadRelationshipOmissions,
        ...thrillerBarkRelationshipOmissions,
      },
      pending: {},
    },
    // Every key, `en-` or issue-scoped (`issue815-en-`), names this wiki.
    wikis: { '': 'onepiece.fandom.com' },
    // `null` in `relationships.json`: the timeline's episode and chapter
    // pages are its evidence, and they are pinned like everyone else's.
    uncited: true,
    episodePage: (episode) => `Episode ${String(episode)}`,
  },
  {
    name: 'Hunter x Hunter',
    slug: 'hunter-x-hunter',
    // An authored entry is its list of keys.
    relationships: {
      ...hunterRelationshipEvidence,
      authored: Object.fromEntries(
        Object.entries(hunterRelationshipEvidence.authored).map(
          ([id, keys]) => [id, { sources: keys }],
        ),
      ),
    },
    wikis: { 'hxh-': 'hunterxhunter.fandom.com' },
    episodePage: (episode) => `Episode ${String(episode)} (2011)`,
    records: {
      ledger: hunterEvidence,
      // The lawful sources of #725: the series wiki, Italian Wikipedia and
      // the 2011 anime broadcaster's official page (owner, 2026-11-21).
      hosts: ['hunterxhunter.fandom.com', 'it.wikipedia.org', 'www.ntv.co.jp'],
    },
  },
  {
    name: 'Game of Thrones',
    slug: 'game-of-thrones',
    relationships: thronesRelationshipEvidence,
    // The Game of Thrones Wiki for the show, the Ice and Fire Wiki for the
    // books (#1344, #1348).
    wikis: {
      'got-': 'gameofthrones.fandom.com',
      'iaf-': 'iceandfire.fandom.com',
    },
    // A Wiki of Ice and Fire refuses scripted requests, so its pages cannot
    // be pinned by revision until #1009 unblocks: they stay URLs, with why.
    unpinnable: 'awoiaf.westeros.org',
    // No episode pages: the wiki titles them by name ("Winter Is Coming"),
    // and the book chapters live on A Wiki of Ice and Fire.
    records: {
      ledger: thronesEvidence,
      // The lawful sources of #725: the two wikis and Italian Wikipedia, and
      // the Ice and Fire Wiki for the books where A Wiki of Ice and Fire
      // cannot be read (owner, 2026-11-16).
      hosts: [
        'awoiaf.westeros.org',
        'gameofthrones.fandom.com',
        'iceandfire.fandom.com',
        'it.wikipedia.org',
      ],
    },
  },
]

describe.each(PROVENANCE)(
  '$name relationship provenance',
  ({ slug, relationships, wikis, uncited, unpinnable, episodePage }) => {
    const { authored, omitted, pending } = relationships
    const archive = loadedSeries(slug).archive
    const characters = archive.entities.filter(
      ({ kind }) => kind === 'character',
    )
    const owners = characters
      .map((entity) => ({
        id: entity.id,
        relationships: archive.datedOf(entity, 'relationships'),
      }))
      .filter((owner) => owner.relationships.length > 0)
    const ownerIds = owners.map(({ id }) => id)
    const wikiOf = (key: string): string | undefined =>
      Object.entries(wikis).find(([prefix]) => key.startsWith(prefix))?.[1]

    it('accounts for every archived character exactly once', () => {
      const listed = [
        ...Object.keys(authored),
        ...Object.keys(omitted),
        ...Object.keys(pending),
      ]

      const distinct = new Set(listed)

      expect(distinct.size).toBe(listed.length)
      expect(listed.toSorted(byId)).toStrictEqual(
        characters.map(({ id }) => id).toSorted(byId),
      )
    })

    it('lists as authored exactly the characters that have relationships', () => {
      expect(Object.keys(authored).toSorted(byId)).toStrictEqual(
        ownerIds.toSorted(byId),
      )

      for (const owner of owners) {
        expect(
          owner.relationships.some(({ value }) => value.length > 0),
          owner.id,
        ).toBe(true)
      }
    })

    // Filed after the cohort that authored the rest: no deliberate omission.
    it.each(Object.entries(pending))(
      'names the issue that will author %s',
      (id, issue) => {
        expect(ownerIds).not.toContain(id)
        expect(issue).toMatch(/^#\d+$/u)
      },
    )

    it.each(Object.entries(omitted))(
      'gives a reason to omit %s',
      (id, reason) => {
        expect(ownerIds).not.toContain(id)
        expect(reason.trim().length).toBeGreaterThan(0)
      },
    )

    it.each(Object.entries(authored))(
      'pins the wiki revisions read for %s on the wiki its key names',
      (id, { sources: keys, unpinned }) => {
        expect(
          keys.length + (unpinned?.urls.length ?? 0),
          id,
        ).toBeGreaterThanOrEqual(uncited === true ? 0 : 1)

        for (const key of keys) {
          expect(
            hostOf(sources[key]?.url ?? 'missing:'),
            `${key}: pinned in sources.json from the wiki its prefix names`,
          ).toBe(wikiOf(key))
        }
      },
    )

    it.each(
      Object.entries(authored).flatMap(([id, { unpinned }]) =>
        unpinned === undefined ? [] : [[id, unpinned] as const],
      ),
    )(
      'keeps only the unpinnable wiki unpinned for %s, with why',
      (_, unpinned) => {
        expect(unpinned.reason.trim().length).toBeGreaterThan(0)
        expect(unpinned.urls.length).toBeGreaterThan(0)
        expect(
          unpinned.urls
            .map((url) => hostOf(url))
            .filter((host) => host !== unpinnable),
        ).toStrictEqual([])
      },
    )

    // `npm run provenance:pin` pins only a wiki's English root: a language
    // path (`/it/wiki/…`) stays a plain URL, as Italian Wikipedia does.
    it('pins every revision the ledgers and notes cite from its wikis', () => {
      const hosts = Object.values(wikis)
      const unpinned = cited
        .filter(
          ({ url }) =>
            hosts.includes(url.host)
            && /^\/(?:wiki\/|index\.php$)/u.test(url.pathname),
        )
        .filter(({ url }) => {
          const title = revisions.get(
            `${url.host}/index.php ${url.searchParams.get('oldid') ?? ''}`,
          )
          const named = titleIn(url)
          return title === undefined || (named !== undefined && named !== title)
        })
        .map(({ file, url }) => `${file}: ${url.href}`)

      expect(unpinned).toStrictEqual([])
    })

    const titles = titlesOn(Object.values(wikis))

    it.each(
      episodePage === undefined ?
        []
      : owners.map((owner) => ({ ...owner, episodePage })),
    )(
      'pins every episode and chapter gate of $id on the series wiki',
      ({ relationships: timeline, episodePage: titleOf }) => {
        // A one-source entry's other number only orders it: nothing to cite.
        const pages = timeline.flatMap(({ episode, chapter, source }) => [
          ...(source === 'chapter' ? [] : [titleOf(episode)]),
          ...(source === 'episode' ? [] : [`Chapter ${String(chapter)}`]),
        ])

        expect(pages.filter((page) => !titles.has(page))).toStrictEqual([])
      },
    )
  },
)

describe.each(
  PROVENANCE.flatMap(({ name, slug, records }) =>
    records === undefined ? [] : { name, slug, ...records },
  ),
)('$name provenance', ({ slug, ledger, hosts }) => {
  const ids = loadedSeries(slug).archive.entities.map(({ id }) => id)
  const filed = Object.entries(ledger).filter(
    ([, { pending }]) => pending !== true,
  )

  it('keeps research for exactly the records filed', () => {
    expect(filed.map(([id]) => id).toSorted(byId)).toStrictEqual(
      ids.toSorted(byId),
    )
  })

  it.each(Object.entries(ledger))(
    'records what was read or is still open for %s',
    (id, { sources: read = [], unverified = [] }) => {
      expect(read.length + unverified.length, id).toBeGreaterThan(0)
      expect(
        read.map((url) => hostOf(url)).filter((host) => !hosts.includes(host)),
      ).toStrictEqual([])
    },
  )

  it.each(filed)(
    'keeps filed research attached to the archive for %s',
    (id) => {
      expect(ids).toContain(id)
    },
  )

  it.each(Object.entries(ledger).filter(([, { pending }]) => pending === true))(
    'keeps pending research outside the archive with open checks for %s',
    (id, { unverified = [] }) => {
      expect(ids).not.toContain(id)
      expect(unverified.length).toBeGreaterThan(0)
    },
  )
})
