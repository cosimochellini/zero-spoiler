import * as stylex from '@stylexjs/stylex'
import type { ReactElement, ReactNode } from 'react'

import { HomeCast } from '~/components/HomeCast'
import { HomeFillerAhead } from '~/components/HomeFillerAhead'
import { HomeFold } from '~/components/HomeFold'
import { HomeMoreStories, HomeStories } from '~/components/HomeStories'
import { HomeWelcome } from '~/components/HomeWelcome'
import { modeOf } from '~/lib/progress/episode'
import type { HomeView } from '~/lib/view/records'
import { settleStyles } from '~/styles/settle'
import { color, rule, space } from '~/styles/tokens.stylex'

// The bands in DOM order. The fold is there from the first frame but for its
// control, which takes the first step. The filler warning, when there is one,
// takes the stories' step and moves the rest on.
const BAND = { fold: 0, stories: 1, cast: 2, met: 3, more: 4 } as const

/**
 * The home page, a marquee hero.
 *
 * Three questions, in order, for a reader picking the series back up: where
 * am I, what just happened, who matters now. The fold answers the first with
 * the arc's own drawing and nothing else; a thick rule ends it, and under it
 * the page becomes a ledger of the latest stories, a row of crests, the
 * characters just met, and the rest of the stories closed under their titles.
 * Filler close ahead of an episode reader is warned of first. A new
 * bookmark re-runs the loader, so saving one from the fold or the bar moves
 * the whole page to the new point.
 */
export function HomeLanding({
  before,
  cast,
  filler,
  met,
  metBefore,
  point,
  saga,
  stories,
}: HomeView): ReactElement {
  const shift = filler === null ? 0 : 1
  const at = (band: number): number => band + shift

  return (
    <main
      id="content"
      {...stylex.props(styles.page)}
    >
      <HomeFold
        band={BAND.fold}
        point={point}
        saga={saga}
      />

      <div {...stylex.props(styles.below)}>
        <HomeWelcome />
        {filler !== null && (
          <Band index={BAND.stories}>
            <HomeFillerAhead
              ahead={filler}
              mode={modeOf(point)}
            />
          </Band>
        )}
        <Band index={at(BAND.stories)}>
          <HomeStories
            before={before}
            stories={stories}
          />
        </Band>
        <HomeCast
          band={at(BAND.cast)}
          cast={cast}
          row="cast"
        />
        <HomeCast
          band={at(BAND.met)}
          before={metBefore}
          cast={met}
          row="met"
        />
        <Band index={at(BAND.more)}>
          <HomeMoreStories stories={stories} />
        </Band>
      </div>
    </main>
  )
}

/** A band of the page under the fold, and the step it settles on. */
interface BandProps {
  children: ReactNode
  index: number
}

/** One band under the fold, settling in on its own step. */
function Band({ children, index }: BandProps): ReactElement {
  return (
    <div {...stylex.props(settleStyles.band, settleStyles.at(index))}>
      {children}
    </div>
  )
}

const styles = stylex.create({
  page: { paddingInline: space.md, display: 'grid', rowGap: space.xl2 },
  // The thick rule that ends the fold, as the macrostructure asks: below it
  // the page is something else.
  below: {
    borderBlockStartColor: color.rule2,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.fine,
    display: 'grid',
    paddingBlockEnd: space.xl2,
    paddingBlockStart: space.xl,
    rowGap: space.xl3,
  },
})
