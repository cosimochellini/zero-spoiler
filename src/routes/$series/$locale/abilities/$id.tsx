/* Hallmark · pre-emit critique: P4 H4 E4 S5 R4 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Stage · theme: the
 *   series' own (locked) · enrichment: Tier B hand-built SVG (the ability's
 *   own drawing, large, in a glow of its tint) · nav: N9 (shared)
 *   · footer: Ft4 (shared)
 * · structure: the stage, then who uses it
 * · idea: "one ability under the lights, and the users the reader has met" */
import * as stylex from '@stylexjs/stylex'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { useSeriesT } from '~/i18n/LocaleContext'
import { recordHead } from '~/routes/$locale/-head'
import { RecordBackLink, SectionNotFound } from '~/routes/$series/$locale/-back'
import {
  orNotFound,
  recordArgs,
  requirePage,
} from '~/routes/$series/$locale/-found'
import { usePeek } from '~/routes/$series/$locale/-peek'
import { recordStyles } from '~/routes/$series/$locale/-record.styles'
import { liftAbility, loadAbility } from '~/server/api'
import { settleStyles } from '~/styles/settle'

import { AbilityStage, UsersBand } from './-$id.stage'

export const Route = createFileRoute('/$series/$locale/abilities/$id')({
  beforeLoad: ({ context }) => {
    requirePage(context.series, 'abilities')
  },
  // Decided on the server, from the bookmark in the request: the document
  // title must not carry a name the reader has not reached.
  loader: async (match) => orNotFound(await loadAbility(recordArgs(match))),
  head: (match) => recordHead(match, 'abilities') ?? {},
  component: AbilityPage,
  notFoundComponent: AbilityNotFound,
})

/**
 * A Nen ability's page (Hallmark macrostructure: Stage): the drawing large,
 * the name, its Nen type and the sentence, then the users the reader has
 * reached, each a link to their page. Nothing past the stage under fog.
 */
function AbilityPage(): ReactElement {
  const { detail } = Route.useLoaderData()
  const peek = usePeek(liftAbility)

  return (
    <main
      id="content"
      {...stylex.props(recordStyles.page)}
    >
      <p {...stylex.props(recordStyles.back)}>
        <RecordBackLink section="abilities" />
      </p>

      <div>
        <AbilityStage
          peek={peek}
          slot={detail.slot}
        />
      </div>

      <div {...stylex.props(settleStyles.band, settleStyles.at(0))}>
        <UsersBand slot={detail.slot} />
      </div>
    </main>
  )
}

/** `/abilities/<not-an-ability>`: says so, and points at the index. */
function AbilityNotFound(): ReactElement {
  const t = useSeriesT('hunter-x-hunter')

  return (
    <SectionNotFound
      body={t?.('ability.notFoundBody')}
      section="abilities"
      title={t?.('ability.notFoundTitle')}
    />
  )
}
