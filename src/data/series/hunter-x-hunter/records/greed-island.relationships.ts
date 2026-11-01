import type { Relationship, Timeline } from '~/data/types'

/** Recruitment scenes in the pinned chapters 121/125/126 and episodes 59/60. */
const links = {
  batteraTsezguerra: {
    character: 'tsezguerra',
    type: { it: 'Esaminatore al suo servizio', en: 'Examiner in his service' },
    summary: {
      it: 'Battera chiede a Tsezugera di valutare il Ren di Gon e Killua prima di ammetterli a Greed Island.',
      en: 'Battera asks Tsezguerra to assess Gon and Killua’s Ren before letting them play Greed Island.',
    },
  },
  tsezguerraBattera: {
    character: 'battera',
    type: { it: 'Committente', en: 'Employer' },
    summary: {
      it: 'Tsezugera accompagna Battera all’asta ed esamina per lui chi si offre di giocare a Greed Island.',
      en: 'Tsezguerra accompanies Battera to the auction and assesses the people who offer to play Greed Island for him.',
    },
  },
  tsezguerraGon: {
    character: 'gon-freecss',
    type: { it: 'Candidato respinto', en: 'Applicant he rejects' },
    summary: {
      it: 'Tsezugera osserva il Ren di Gon e lo respinge perché ritiene che morirebbe nel gioco.',
      en: 'Tsezguerra watches Gon’s Ren and rejects him because he thinks he would die in the game.',
    },
  },
  tsezguerraKillua: {
    character: 'killua',
    type: { it: 'Candidato respinto', en: 'Applicant he rejects' },
    summary: {
      it: 'Tsezugera esamina il Ren di Killua insieme a quello di Gon e non li ammette al gioco.',
      en: 'Tsezguerra assesses Killua’s Ren alongside Gon’s and refuses to let them play.',
    },
  },
  tsezguerraGonPasses: {
    character: 'gon-freecss',
    type: { it: 'Giocatore selezionato', en: 'Player he selects' },
    summary: {
      it: 'Dopo quattro giorni Gon torna alla selezione e rompe il muro con un pugno. Tsezugera lo ammette tra i giocatori e si preoccupa per quanto potrebbe diventare forte.',
      en: 'Gon returns to the tryouts after four days and cracks the wall with a punch. Tsezguerra selects him as a player and worries about how strong he could become.',
    },
  },
  tsezguerraKilluaPasses: {
    character: 'killua',
    type: { it: 'Giocatore selezionato', en: 'Player he selects' },
    summary: {
      it: 'Killua torna alla selezione e mostra di saper trasformare l’aura in elettricità. Tsezugera lo ammette, sorpreso che abbia imparato in quattro giorni.',
      en: 'Killua returns to the tryouts and shows that he can turn his aura into electricity. Tsezguerra selects him, surprised that he learned it in four days.',
    },
  },
  puhatGon: {
    character: 'gon-freecss',
    type: { it: 'Candidato conosciuto alla selezione', en: 'Fellow applicant' },
    summary: {
      it: 'Puhat parla con Gon mentre aspettano la prova. Apprezza il suo ragionamento sulla selezione e si presenta prima di andare a sostenerla.',
      en: 'Puhat talks with Gon while they wait for the test. He approves of Gon’s reasoning about the selection and introduces himself before taking it.',
    },
  },
  puhatKillua: {
    character: 'killua',
    type: { it: 'Candidato conosciuto alla selezione', en: 'Fellow applicant' },
    summary: {
      it: 'Puhat spiega a Killua perché mettersi subito in fila non garantisce un posto. Killua riconosce che ha ragione e decide di affrontare la prova.',
      en: 'Puhat explains to Killua why joining the line immediately does not guarantee a place. Killua accepts his reasoning and decides to take the test.',
    },
  },
} satisfies Record<string, Relationship>

export const greedIslandRelationships = {
  battera: [{ episode: 59, chapter: 121, value: [links.batteraTsezguerra] }],
  tsezguerra: [
    {
      episode: 59,
      chapter: 121,
      value: [
        links.tsezguerraBattera,
        links.tsezguerraGon,
        links.tsezguerraKillua,
      ],
    },
    {
      episode: 60,
      chapter: 126,
      value: [
        links.tsezguerraBattera,
        links.tsezguerraGonPasses,
        links.tsezguerraKilluaPasses,
      ],
    },
  ],
  puhat: [
    { episode: 60, chapter: 125, value: [links.puhatGon, links.puhatKillua] },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
