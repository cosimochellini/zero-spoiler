import * as stylex from '@stylexjs/stylex'
import type { ReactElement, ReactNode } from 'react'

import { part, styles } from '~/components/LegalNotice.styles'
import { legalTranslator } from '~/i18n/dictionaries/legal'
import { onlyUnder, useLocale, useSeriesT } from '~/i18n/LocaleContext'
import { LocaleProvider } from '~/i18n/LocaleProvider'
import type { SeriesCopy } from '~/i18n/types'
import type {
  SeriesCredits,
  SeriesSources,
  SourceCredit,
} from '~/lib/view/credits'

export interface InSeriesProps {
  children: ReactNode
  copy: SeriesCopy
}

/** A part of the page in one series' own words. */
export function InSeries({ copy, children }: InSeriesProps): ReactElement {
  const { locale } = useLocale()

  return (
    <LocaleProvider
      copy={copy}
      locale={locale}
    >
      {children}
    </LocaleProvider>
  )
}

export interface SourceCreditsProps {
  series: SeriesCredits[]
}

/** Only the server-filtered references reach this component. */
export function SourceCredits({ series }: SourceCreditsProps): ReactElement {
  const t = legalTranslator(useLocale().locale)
  return (
    <section id="sources">
      <h2 {...stylex.props(styles.heading)}>{t('credits.title')}</h2>
      <p {...stylex.props(styles.paragraph)}>{t('credits.intro')}</p>
      <LicenseNotices series={series} />
      <h3 {...part('credits-references')}>{t('credits.referencesTitle')}</h3>
      {series.map(({ copy }) => (
        <InSeries
          key={copy.slug}
          copy={copy}
        >
          <Coverage />
        </InSeries>
      ))}
      <p {...stylex.props(styles.paragraph)}>{t('credits.factCheck')}</p>
      <p {...stylex.props(styles.paragraph)}>{t('credits.bookmark')}</p>
      {series.every(({ credits }) => credits.length === 0) ?
        <p {...stylex.props(styles.paragraph)}>{t('credits.empty')}</p>
      : <ul {...stylex.props(styles.list)}>
          {series.map(({ copy, credits, sources }) => (
            <InSeries
              key={copy.slug}
              copy={copy}
            >
              {credits.map((credit) => (
                <CreditEntry
                  key={`${credit.name}-${String(credit.episode)}-${credit.scope}`}
                  credit={credit}
                  licenses={sources.licenses}
                />
              ))}
            </InSeries>
          ))}
        </ul>
      }
    </section>
  )
}

/** Which of a series' entries the references below cover. */
function Coverage(): ReactElement {
  const t = useSeriesT()
  return <p {...stylex.props(styles.paragraph)}>{t('credits.coverage')}</p>
}

interface CreditEntryProps {
  credit: SourceCredit
  licenses: SeriesSources['licenses']
}

function CreditEntry({ credit, licenses }: CreditEntryProps): ReactElement {
  const t = useSeriesT()
  const legal = legalTranslator(useLocale().locale)
  const onePiece = useSeriesT('one-piece')
  // A filler entry and the official synopsis are One Piece's: only its
  // sample files them, so their words are One Piece's.
  const filler = (): string =>
    onlyUnder(onePiece, 'one-piece')('credits.scope.filler')
  const official = (): string =>
    onlyUnder(onePiece, 'one-piece')('credits.source.official')
  const label = (kind: SourceCredit['sources'][number]['kind']): string =>
    kind === 'official' ? official() : t(`credits.source.${kind}`)
  const title =
    credit.episode === undefined ?
      credit.name
    : `${credit.name} · ${legal('credits.episode', { episode: credit.episode })}`
  return (
    <li>
      <h4>{title}</h4>
      <p>
        {credit.scope === 'filler' ?
          filler()
        : legal(`credits.scope.${credit.scope}`)}
      </p>
      {credit.scope === 'summary' ?
        <p>{legal('credits.replacement')}</p>
      : null}
      <ul {...stylex.props(styles.list)}>
        {credit.sources.map(({ kind, url }) => (
          <li key={url}>
            {/* The entry's title is in the name, so a list of links tells its revisions apart. */}
            <a
              aria-label={`${label(kind)}. ${title}`}
              href={url}
              {...stylex.props(styles.link)}
            >
              {label(kind)}
            </a>{' '}
            {kind === 'official' ?
              legal('credits.noOpenLicense')
            : <a
                href={licenses[kind][1]}
                {...stylex.props(styles.link)}
              >
                {licenses[kind][0]}
              </a>
            }
          </li>
        ))}
      </ul>
    </li>
  )
}

interface LicenseNoticesProps {
  series: SeriesCredits[]
}

function LicenseNotices({ series }: LicenseNoticesProps): ReactElement {
  const t = legalTranslator(useLocale().locale)
  return (
    <>
      <h3 {...part('credits-licenses')}>{t('credits.licensesTitle')}</h3>
      <p {...stylex.props(styles.paragraph)}>{t('credits.software')}</p>
      <ul {...stylex.props(styles.list)}>
        <li>
          <a
            href="https://github.com/cosimochellini/zero-spoiler/blob/main/LICENSE"
            {...stylex.props(styles.link)}
          >
            MIT
          </a>
        </li>
        <li>
          <a
            href="https://github.com/cosimochellini/zero-spoiler/blob/main/LICENSE-SCOPE.md"
            {...stylex.props(styles.link)}
          >
            {t('credits.scopeNotice')}
          </a>
        </li>
      </ul>
      <p {...stylex.props(styles.paragraph)}>{t('credits.content')}</p>
      <h3 {...part('credits-sources')}>{t('credits.sourcesTitle')}</h3>
      <p {...stylex.props(styles.paragraph)}>{t('credits.external')}</p>
      {series.map(({ copy, sources }) => (
        <InSeries
          key={copy.slug}
          copy={copy}
        >
          <SourceTerms sources={sources} />
        </InSeries>
      ))}
    </>
  )
}

interface SourceTermsProps {
  sources: SeriesSources
}

/** A series' sources: their terms, their licenses and where they are. */
function SourceTerms({ sources }: SourceTermsProps): ReactElement {
  const t = useSeriesT()
  const { licenses, links } = sources
  // One paragraph per license, though both wikis may share one.
  const shown = Object.values(licenses).filter(
    ([, href], index, all) =>
      all.findIndex((other) => other[1] === href) === index,
  )
  return (
    <>
      <p {...stylex.props(styles.paragraph)}>{t('credits.wikiTerms')}</p>
      {shown.map(([name, href]) => (
        <p
          key={href}
          {...stylex.props(styles.paragraph)}
        >
          <a
            href={href}
            {...stylex.props(styles.link)}
          >
            {name}
          </a>
        </p>
      ))}
      <p {...stylex.props(styles.paragraph)}>{t('credits.otherTerms')}</p>
      <ul {...stylex.props(styles.list)}>
        {links.map(([label, href]) => (
          <li key={href}>
            <a
              href={href}
              {...stylex.props(styles.link)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
