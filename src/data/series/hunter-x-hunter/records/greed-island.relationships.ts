import type { Relationship, Timeline } from '~/data/types'

/** Recruitment scenes in the pinned chapters 121/125/126 and episodes 59/60. */
const links = {
  biscuitGon: {
    character: 'gon-freecss',
    type: { it: 'Allievo a cui offre aiuto', en: 'Boy she offers to teach' },
    summary: {
      it: 'Biscuit osserva le difficoltà di Gon contro i mostri e gli offre di insegnare il Nen.',
      en: 'Biscuit watches Gon struggle against the monsters and offers to teach him Nen.',
    },
  },
  biscuitKillua: {
    character: 'killua',
    type: { it: 'Allievo a cui offre aiuto', en: 'Boy she offers to teach' },
    summary: {
      it: 'Biscuit corregge il modo in cui Killua usa Gyo e gli offre di allenarlo.',
      en: 'Biscuit corrects Killua’s use of Gyo and offers to train him.',
    },
  },
  biscuitWing: {
    character: 'wing',
    type: { it: 'Ex allievo', en: 'Former pupil' },
    summary: {
      it: 'Quando Gon nomina Wing, Biscuit spiega che era un suo allievo.',
      en: 'When Gon mentions Wing, Biscuit explains that he was her pupil.',
    },
  },
  binoltBiscuit: {
    character: 'biscuit-krueger',
    type: { it: 'Hunter che lo sconfigge', en: 'Hunter who defeats him' },
    summary: {
      it: 'Biscuit sconfigge Binolt senza Nen e gli impone di affrontare Gon e Killua.',
      en: 'Biscuit defeats Binolt without Nen and makes him face Gon and Killua.',
    },
  },
  binoltGon: {
    character: 'gon-freecss',
    type: { it: 'Avversario nell’allenamento', en: 'Training opponent' },
    summary: {
      it: 'Biscuit obbliga Binolt a difendersi dagli attacchi di Gon in una conca di roccia.',
      en: 'Biscuit makes Binolt defend against Gon’s attacks in a rocky hollow.',
    },
  },
  binoltKillua: {
    character: 'killua',
    type: { it: 'Avversario nell’allenamento', en: 'Training opponent' },
    summary: {
      it: 'Biscuit obbliga Binolt ad affrontare Killua; le forbici gli permettono di tenere il ragazzo a distanza.',
      en: 'Biscuit makes Binolt fight Killua; his scissors let him keep the boy at a distance.',
    },
  },
  binoltGonFree: {
    character: 'gon-freecss',
    type: { it: 'Avversario che lo risparmia', en: 'Opponent who spares him' },
    summary: {
      it: 'Gon ferma il colpo decisivo e ringrazia Binolt per averli aiutati a migliorare.',
      en: 'Gon stops his finishing blow and thanks Binolt for helping them improve.',
    },
  },
  binoltKilluaFree: {
    character: 'killua',
    type: { it: 'Avversario che lo supera', en: 'Opponent who surpasses him' },
    summary: {
      it: 'Killua si allena combattendo contro Binolt fino a riuscire ad affrontarlo da solo.',
      en: 'Killua trains by fighting Binolt until he can face him alone.',
    },
  },
  binoltBiscuitFree: {
    character: 'biscuit-krueger',
    type: { it: 'Hunter che lo lascia andare', en: 'Hunter who releases him' },
    summary: {
      it: 'Biscuit permette a Binolt di andarsene dopo che promette di costituirsi.',
      en: 'Biscuit lets Binolt leave after he promises to turn himself in.',
    },
  },

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
  genthruPuhat: {
    character: 'puhat',
    type: {
      it: 'Vittima durante le trattative',
      en: 'Victim during negotiations',
    },
    summary: {
      it: 'Gensul uccide Puhat quando cerca di negoziare per l’alleanza.',
      en: 'Genthru kills Puhat when he tries to negotiate for the alliance.',
    },
  },
  genthruJispa: {
    character: 'jispa',
    type: { it: 'Avversario che ferisce', en: 'Opponent he injures' },
    summary: {
      it: 'Gensul ferisce il volto di Jispa con un’esplosione quando cerca di attaccarlo alle spalle. In seguito viene informato della sua morte.',
      en: 'Genthru injures Jispa’s face with an explosion when he tries to attack from behind. He is later told of his death.',
    },
  },
  jispaGenthru: {
    character: 'genthru',
    type: { it: 'Avversario che lo ferisce', en: 'Opponent who injures him' },
    summary: {
      it: 'Jispa cerca di fermare Gensul dopo che si rivela come il Boomer. Gensul gli ferisce il volto con un’esplosione.',
      en: 'Jispa tries to stop Genthru after he reveals himself as the Bomber. Genthru injures his face with an explosion.',
    },
  },
  razorPhinks: {
    character: 'phinks',
    type: { it: 'Intruso che allontana', en: 'Intruder he removes' },
    summary: {
      it: 'Razer spiega a Phinks che la Brigata deve entrare nel gioco attraverso una console, poi allontana il gruppo con una carta.',
      en: 'Razor explains to Phinks that the Troupe must enter the game through a console, then removes the group with a card.',
    },
  },
  biscuitHisoka: {
    character: 'hisoka',
    type: { it: 'Alleato che recluta', en: 'Ally she recruits' },
    summary: {
      it: 'Biscuit chiede a Hisoka di aiutarli a ottenere una carta. Lo tiene nel gruppo pur avvertendo Gon e Killua che nasconde qualcosa.',
      en: 'Biscuit asks Hisoka to help them obtain a card. She keeps him in the group while warning Gon and Killua that he is hiding something.',
    },
  },
} satisfies Record<string, Relationship>

export const greedIslandRelationships = {
  'genthru': [
    {
      episode: 65,
      chapter: 144,
      source: 'chapter',
      value: [links.genthruPuhat, links.genthruJispa],
    },
  ],
  'jispa': [
    {
      episode: 65,
      chapter: 144,
      source: 'chapter',
      value: [links.jispaGenthru],
    },
  ],
  'razor': [{ episode: 67, chapter: 145, value: [links.razorPhinks] }],
  'biscuit-krueger': [
    // Episode 62's naming scene precedes the discussion of Wing in episode 63.
    {
      episode: 62,
      chapter: 137,
      source: 'episode',
      value: [links.biscuitGon, links.biscuitKillua],
    },
    {
      episode: 63,
      chapter: 137,
      source: 'chapter',
      value: [links.biscuitGon, links.biscuitKillua, links.biscuitWing],
    },
    {
      episode: 63,
      chapter: 137,
      source: 'episode',
      value: [links.biscuitGon, links.biscuitKillua, links.biscuitWing],
    },
    {
      episode: 68,
      chapter: 158,
      value: [
        links.biscuitGon,
        links.biscuitKillua,
        links.biscuitWing,
        links.biscuitHisoka,
      ],
    },
  ],
  'binolt': [
    // Anime readers finish the entire training encounter in his opening episode.
    {
      episode: 63,
      chapter: 138,
      source: 'chapter',
      value: [links.binoltBiscuit, links.binoltGon, links.binoltKillua],
    },
    {
      episode: 63,
      chapter: 139,
      source: 'episode',
      value: [
        links.binoltBiscuitFree,
        links.binoltGonFree,
        links.binoltKilluaFree,
      ],
    },
    {
      episode: 64,
      chapter: 139,
      source: 'chapter',
      value: [
        links.binoltBiscuitFree,
        links.binoltGonFree,
        links.binoltKilluaFree,
      ],
    },
  ],

  'battera': [{ episode: 59, chapter: 121, value: [links.batteraTsezguerra] }],
  'tsezguerra': [
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
  'puhat': [
    { episode: 60, chapter: 125, value: [links.puhatGon, links.puhatKillua] },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
