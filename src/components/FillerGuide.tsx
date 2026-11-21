import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { CatalogueSection } from '~/components/CatalogueSection'
import { FillerCatalogue } from '~/components/FillerCatalogue'
import { FillerCountdown } from '~/components/FillerCountdown'
import { FillerRanges } from '~/components/FillerRanges'
import { FillerLegend, FillerStrip } from '~/components/FillerStrip'
import { VisitorBanner } from '~/components/VisitorBanner'
import { useSeriesOnlyT } from '~/i18n/LocaleContext'
import { useBookmark, useBookmarkSeries } from '~/lib/progress/BookmarkContext'
import { absoluteEpisodeOf, modeOf } from '~/lib/progress/episode'
import type { FillerPageView, FillerRowView } from '~/lib/view/filler'
import { space } from '~/styles/tokens.stylex'

/**
 * The filler guide, a map of the whole series. It is not in the bar; the
 * footer of every One Piece page links it.
 *
 * It leads with the countdown, the answer the page is for: how far the next
 * filler is from the reader's episode. The runs to skip come next, by saga,
 * then the strip of the whole series, then the catalogue, one row per entry,
 * under fog past the bookmark like every other page. With no bookmark the
 * server draws it at the end of the demo, under the visitor banner (#1432).
 */
export function FillerGuide({
  page,
  peek,
}: {
  page: FillerPageView
  peek: (handle: string) => Promise<FillerRowView>
}): ReactElement {
  const t = useSeriesOnlyT('one-piece')
  const { bookmark } = useBookmark()
  const { aired, countdown, groups, marks, skipGroups, unnumbered } = page
  const mode = modeOf(bookmark)

  return (
    <ArchivePage
      count={t('filler.count', { episodes: marks.length, unnumbered })}
      title={t('filler.title')}
    >
      <VisitorBanner />
      <div {...stylex.props(styles.stack)}>
        {countdown !== null && (
          <FillerCountdown
            aired={aired}
            countdown={countdown}
            mode={mode}
            peek={peek}
          />
        )}
        <CatalogueSection
          headingId="filler-skip"
          lede={t('filler.skipLede')}
          title={t('filler.skipTitle')}
        >
          <FillerRanges
            groups={skipGroups}
            mode={mode}
          />
        </CatalogueSection>
        <Overview
          aired={aired}
          marks={marks}
        />
        <CatalogueSection
          headingId="filler-catalogue"
          lede={t('filler.catalogueLede')}
          title={t('filler.catalogueTitle')}
        >
          <FillerCatalogue
            groups={groups}
            mode={mode}
            peek={peek}
          />
        </CatalogueSection>
      </div>
    </ArchivePage>
  )
}

/** The whole series as one strip, lower on the page, with its key. */
function Overview({
  aired,
  marks,
}: {
  aired: number
  marks: FillerPageView['marks']
}): ReactElement {
  const t = useSeriesOnlyT('one-piece')
  const { bookmark } = useBookmark()
  const series = useBookmarkSeries()

  return (
    <CatalogueSection
      headingId="filler-strip"
      lede={t('filler.stripLede', { aired })}
      title={t('filler.stripTitle')}
    >
      <FillerStrip
        aired={aired}
        here={bookmark === null ? null : absoluteEpisodeOf(bookmark, series)}
        marks={marks}
      />
      <FillerLegend
        hasBookmark={bookmark !== null && bookmark.mode !== 'chapter'}
      />
    </CatalogueSection>
  )
}

const styles = stylex.create({
  stack: {
    gap: { 'default': space.xl, '@media (min-width: 40rem)': space.xl2 },
    display: 'grid',
  },
})
