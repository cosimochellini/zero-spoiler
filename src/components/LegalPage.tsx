import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/LegalNotice.styles'
import { PrivacyNotice } from '~/components/PrivacyNotice'
import { InSeries, SourceCredits } from '~/components/SourceCredits'
import { type LegalKey, legalTranslator } from '~/i18n/dictionaries/legal'
import { PRIVACY, type PrivacyKey } from '~/i18n/dictionaries/privacy'
import { useLocale, useSeriesT, useT } from '~/i18n/LocaleContext'
import { translate } from '~/i18n/translate'
import type { SeriesCredits } from '~/lib/view/credits'

/**
 * The page's headings, in order: each section by the id of its `<section>`,
 * each part by the id of its `<h3>`. A test holds this list to the page.
 */
const SECTIONS = [
  { id: 'project', title: 'legal.projectTitle', parts: [] },
  {
    id: 'privacy',
    title: 'privacy.title',
    parts: [
      ['privacy-controller', 'privacy.controllerTitle'],
      ['privacy-service', 'privacy.serviceTitle'],
      ['privacy-cookies', 'privacy.cookiesTitle'],
      ['privacy-control', 'privacy.controlTitle'],
      ['privacy-hosting', 'privacy.hostingTitle'],
      ['privacy-bases', 'privacy.basesTitle'],
      ['privacy-rights', 'privacy.rightsTitle'],
      ['privacy-sources', 'privacy.sourcesTitle'],
    ],
  },
  {
    id: 'sources',
    title: 'credits.title',
    parts: [
      ['credits-licenses', 'credits.licensesTitle'],
      ['credits-sources', 'credits.sourcesTitle'],
      ['credits-references', 'credits.referencesTitle'],
    ],
  },
] as const

function isPrivacyKey(key: string): key is PrivacyKey {
  return key.startsWith('privacy.')
}

export interface LegalPageProps {
  series: SeriesCredits[]
}

/** Every notice on one page, so the footer carries a single link. */
export function LegalPage({ series }: LegalPageProps): ReactElement {
  const t = useT()
  const legal = legalTranslator(useLocale().locale)

  return (
    <main
      id="content"
      {...stylex.props(styles.page)}
    >
      <h1 {...stylex.props(styles.title)}>{t('legal.title')}</h1>
      <Contents />
      <section id="project">
        <h2 {...stylex.props(styles.heading)}>{legal('legal.projectTitle')}</h2>
        <p {...stylex.props(styles.paragraph)}>{legal('legal.unofficial')}</p>
        {series.map(({ copy, sources }) => (
          <InSeries
            key={copy.slug}
            copy={copy}
          >
            <Rights
              name={copy.name}
              url={sources.rights}
            />
          </InSeries>
        ))}
        <p {...stylex.props(styles.paragraph)}>
          <a
            href="https://github.com/cosimochellini/zero-spoiler/issues/new?template=blank.md"
            {...stylex.props(styles.link)}
          >
            {legal('legal.contact')}
          </a>{' '}
          {legal('legal.contactHelp')}
        </p>
      </section>
      <PrivacyNotice />
      <SourceCredits series={series} />
    </main>
  )
}

/** Links to the sections, and from a wide window to their parts. */
function Contents(): ReactElement {
  const { locale } = useLocale()
  const legal = legalTranslator(locale)
  const notice = PRIVACY[locale]
  const title = (key: LegalKey | PrivacyKey): string =>
    isPrivacyKey(key) ? translate(notice, key) : legal(key)

  return (
    <nav aria-label={legal('legal.contents')}>
      <ul {...stylex.props(styles.contents)}>
        {SECTIONS.map(({ id, title: key, parts }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              {...stylex.props(
                styles.link,
                styles.contentsLink,
                styles.section,
              )}
            >
              {title(key)}
            </a>
            {parts.length === 0 ? null : (
              <ul {...stylex.props(styles.parts)}>
                {parts.map(([partId, partKey]) => (
                  <li key={partId}>
                    <a
                      href={`#${partId}`}
                      {...stylex.props(styles.link, styles.contentsLink)}
                    >
                      {title(partKey)}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

interface RightsProps {
  name: string
  url: string
}

/** A series' rights holders, in its own words, and where they say so. */
function Rights({ name, url }: RightsProps): ReactElement {
  const t = useSeriesT()
  const legal = legalTranslator(useLocale().locale)

  return (
    <p {...stylex.props(styles.paragraph)}>
      {t('legal.credits')}{' '}
      <a
        href={url}
        {...stylex.props(styles.link)}
      >
        {legal('legal.creditSource', { series: name })}
      </a>
    </p>
  )
}
