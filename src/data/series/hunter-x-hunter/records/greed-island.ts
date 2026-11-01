import { greedIslandRelationships } from './greed-island.relationships'
import type { HunterSaga } from './saga'

/**
 * Greed Island: episodes 59–75 of the 2011 anime and chapters 120–185, as the
 * English Hunter x Hunter Wiki's arc page gives them.
 * Recruitment cast (#1016); the remaining cast and places stay in #904.
 * Battera is interviewed by name in chapter 120; he calls Tsezguerra in
 * chapter 121. Puhat introduces himself in chapter 125. The 2011 anime
 * puts the first two in episode 59 and Puhat in episode 60.
 */
export const greedIsland: HunterSaga = {
  name: { it: 'Greed Island', en: 'Greed Island' },
  entries: [
    {
      id: 'greed-island-arc',
      kind: 'arc',
      revealedAtEpisode: 59,
      revealedAtChapter: 120,
      name: { it: 'Greed Island', en: 'Greed Island' },
      summary: {
        it: 'Un videogioco rarissimo, messo all’asta a York Shin City, che contiene un indizio per trovare Ging.',
        en: 'A very rare video game, up for sale at the Yorknew auction, that holds a lead to Ging.',
      },
      visual: { art: 'greed-island-arc', tint: 'orange' },
    },
    {
      id: 'battera',
      kind: 'character',
      revealedAtEpisode: 59,
      revealedAtChapter: 120,
      name: { it: 'Battera', en: 'Battera' },
      summary: {
        it: 'Un miliardario interessato alle copie di Greed Island vendute all’asta.',
        en: 'A billionaire interested in the copies of Greed Island being sold at auction.',
      },
      visual: { art: 'battera', tint: 'pink' },
    },
    {
      id: 'tsezguerra',
      kind: 'character',
      revealedAtEpisode: 59,
      revealedAtChapter: 121,
      name: { it: 'Tsezugera', en: 'Tsezguerra' },
      summary: {
        it: 'L’uomo che Battera incarica di esaminare il Ren di Gon e Killua prima di ammetterli al gioco.',
        en: 'The man Battera asks to assess Gon and Killua’s Ren before letting them play the game.',
      },
      visual: { art: 'tsezguerra', tint: 'green' },
    },
    {
      id: 'puhat',
      kind: 'character',
      revealedAtEpisode: 60,
      revealedAtChapter: 125,
      name: { it: 'Puhat', en: 'Puhat' },
      summary: {
        it: 'Un candidato alla selezione per Greed Island che spiega a Gon e Killua perché non serve mettersi subito in fila.',
        en: 'An applicant at the Greed Island tryouts who explains to Gon and Killua why they need not rush to line up.',
      },
      visual: { art: 'puhat', tint: 'violet' },
    },
  ],
  dossiers: {
    battera: {
      relationships: greedIslandRelationships.battera,
      role: { it: 'Miliardario', en: 'Billionaire' },
      log: {
        it: 'Arriva all’asta dove vengono vendute le copie di Greed Island. Vuole raccogliere questo raro videogioco.',
        en: 'He arrives at the auction where copies of Greed Island are being sold. He wants to collect this rare video game.',
      },
      status: [{ episode: 59, chapter: 120, value: 'alive' }],
      affiliation: [
        {
          episode: 59,
          chapter: 120,
          value: {
            it: 'Collezionista di Greed Island',
            en: 'Greed Island collector',
          },
        },
      ],
    },
    tsezguerra: {
      relationships: greedIslandRelationships.tsezguerra,
      role: { it: 'Esaminatore per Greed Island', en: 'Greed Island examiner' },
      log: {
        it: 'Accompagna Battera all’asta. Quando Gon e Killua si offrono di completare Greed Island, Battera lo chiama per valutarli. Gli basta osservare il loro Ren per rifiutarli: ritiene che nel gioco morirebbero.',
        en: 'He accompanies Battera to the auction. When Gon and Killua offer to clear Greed Island, Battera calls him to assess them. Watching their Ren is enough for him to reject them: he thinks they would die in the game.',
      },
      status: [{ episode: 59, chapter: 121, value: 'alive' }],
      affiliation: [
        {
          episode: 59,
          chapter: 121,
          value: { it: 'Al servizio di Battera', en: 'Working for Battera' },
        },
      ],
    },
    puhat: {
      relationships: greedIslandRelationships.puhat,
      role: [
        {
          episode: 60,
          chapter: 125,
          value: {
            it: 'Candidato per Greed Island',
            en: 'Greed Island applicant',
          },
        },
        {
          episode: 60,
          chapter: 126,
          source: 'chapter',
          value: { it: 'Giocatore di Greed Island', en: 'Greed Island player' },
        },
        {
          // Naming and hiring both occur in episode 60, but roles cannot
          // share an episode. Delay the anime role by one without moving
          // the manga pin or creating an episode/chapter anchor.
          episode: 61,
          chapter: 126,
          source: 'episode',
          value: { it: 'Giocatore di Greed Island', en: 'Greed Island player' },
        },
      ],
      log: {
        it: 'Resta seduto dietro Gon e Killua mentre gli altri candidati fanno la fila. Spiega che Battera non riempirà tutti i posti se non trova giocatori abbastanza capaci. Apprezza il ragionamento di Gon, poi si presenta e va a sostenere la prova.',
        en: 'He stays seated behind Gon and Killua while other applicants line up. He explains that Battera will leave places open if he cannot find capable enough players. He approves of Gon’s reasoning, then introduces himself and goes to take the test.',
      },
      status: [
        { episode: 60, chapter: 125, value: 'alive' },
        // Episode 64 shows the killing; 65 only recalls it.
        { episode: 64, chapter: 143, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 60,
          chapter: 126,
          value: { it: 'Al servizio di Battera', en: 'Working for Battera' },
        },
        // The group's leader is not named by this phase of #904.
        {
          episode: 61,
          chapter: 131,
          value: {
            it: 'Al servizio di Battera, in un’alleanza di giocatori',
            en: 'Working for Battera, in an alliance of players',
          },
        },
      ],
    },
  },
}
