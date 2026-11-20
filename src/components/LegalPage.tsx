import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/LegalNotice.styles'
import { PrivacyNotice } from '~/components/PrivacyNotice'
import { InSeries, SourceCredits } from '~/components/SourceCredits'
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

/** Every notice on one page, so the footer carries a single link. */
export function LegalPage({
  series,
}: {
  series: SeriesCredits[]
}): ReactElement {
  const t = useT()

  return (
    <main
      id="content"
      {...stylex.props(styles.page)}
    >
      <h1 {...stylex.props(styles.title)}>{t('legal.title')}</h1>
      <Contents />
      <section id="project">
        <h2 {...stylex.props(styles.heading)}>{t('legal.projectTitle')}</h2>
        <p {...stylex.props(styles.paragraph)}>{t('legal.unofficial')}</p>
        {series.map(({ copy, sources }) => (
          <InSeries
            key={copy.slug}
            copy={copy}
          >
            <Rights url={sources.rights} />
          </InSeries>
        ))}
        <p {...stylex.props(styles.paragraph)}>
          <a
            href="https://github.com/cosimochellini/zero-spoiler/issues/new?template=blank.md"
            {...stylex.props(styles.link)}
          >
            {t('legal.contact')}
          </a>{' '}
          {t('legal.contactHelp')}
        </p>
      </section>
      <PrivacyNotice />
      <SourceCredits series={series} />
    </main>
  )
}

/** Links to the sections, and from a wide window to their parts. */
function Contents(): ReactElement {
  const t = useT()
  const notice = PRIVACY[useLocale().locale]
  const title = (key: Parameters<typeof t>[0] | PrivacyKey): string =>
    isPrivacyKey(key) ? translate(notice, key) : t(key)

  return (
    <nav aria-label={t('legal.contents')}>
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

/** A series' rights holders, in its own words, and where they say so. */
function Rights({ url }: { url: string }): ReactElement {
  const t = useSeriesT()

  return (
    <p {...stylex.props(styles.paragraph)}>
      {t('legal.credits')}{' '}
      <a
        href={url}
        {...stylex.props(styles.link)}
      >
        {t('legal.creditSource')}
      </a>
    </p>
  )
}
