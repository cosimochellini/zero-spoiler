import type { HunterSaga } from './saga'

type Dossier = HunterSaga['dossiers'][string]

const SURVEY_TEAM = { it: 'Squadra di ricerca', en: 'Survey team' }

const kiteTeammate = {
  character: 'kite',
  type: { it: 'Compagno di ricerca', en: 'Survey teammate' },
  summary: {
    it: 'Lavora con Kaito alla ricerca di nuove specie.',
    en: 'Works with Kite to find new species.',
  },
}

/** Lin's and Podungo's facts, the shape of `surveyDossier` in `./chimera-ant`. */
function surveyor(log: Dossier['log']): Dossier {
  return {
    relationships: [{ episode: 77, chapter: 186, value: [kiteTeammate] }],
    role: { it: 'Ricerca sul campo', en: 'Field surveyor' },
    log,
    status: [{ episode: 77, chapter: 186, value: 'alive' }],
    affiliation: [{ episode: 77, chapter: 186, value: SURVEY_TEAM }],
  }
}

const HIS_FAMILY = { it: 'La sua famiglia', en: 'His family' }
const HER_FAMILY = { it: 'La sua famiglia', en: 'Her family' }

const links = {
  kurtHaruna: {
    character: 'haruna',
    type: { it: 'Madre', en: 'Mother' },
    summary: {
      it: 'Promette a Haruna di proteggere lei e la sorella.',
      en: 'Promises Haruna to keep her and his sister safe.',
    },
  },
  kurtReina: {
    character: 'reina',
    type: { it: 'Sorella minore', en: 'Younger sister' },
    summary: {
      it: 'Prova a difendere Reina dalla formica soldato.',
      en: 'Tries to defend Reina from the ant soldier.',
    },
  },
  reinaKurt: {
    character: 'kurt',
    type: { it: 'Fratello maggiore', en: 'Older brother' },
    summary: {
      it: 'Kurt la difende da un serpente e poi dalla formica soldato.',
      en: 'Kurt defends her from a snake, then from the ant soldier.',
    },
  },
  reinaHaruna: {
    character: 'haruna',
    type: { it: 'Madre', en: 'Mother' },
    summary: {
      it: 'Con Kurt pesca per fare una sorpresa a Haruna.',
      en: 'Goes fishing with Kurt to surprise Haruna.',
    },
  },
  harunaKurt: {
    character: 'kurt',
    type: { it: 'Figlio', en: 'Son' },
    summary: {
      it: 'Kurt promette di proteggere lei e la sorella.',
      en: 'Kurt promises to keep her and his sister safe.',
    },
  },
  harunaReina: {
    character: 'reina',
    type: { it: 'Figlia', en: 'Daughter' },
    summary: {
      it: 'Reina esce a pescare con il fratello e non torna a casa.',
      en: 'Reina goes fishing with her brother and does not come home.',
    },
  },
  pekubaPokkle: {
    character: 'pokkle',
    type: { it: 'Capo della spedizione', en: 'Expedition leader' },
    summary: {
      it: 'Segue Pockul in NGL alla ricerca degli insetti giganti.',
      en: 'Follows Pokkle into NGL to look for the giant insects.',
    },
  },
  pekubaPonzu: {
    character: 'ponzu',
    type: { it: 'Compagna di spedizione', en: 'Expedition teammate' },
    summary: {
      it: 'Attraversa NGL a cavallo con Ponzu e Pockul.',
      en: 'Rides through NGL with Ponzu and Pokkle.',
    },
  },
}

/**
 * The people of NGL and Kite’s survey team in Chimera Ant phase 2 (#1021).
 * Spread into the Chimera Ant saga in `./chimera-ant`. Every gate is the
 * first chapter and episode whose English-wiki synopsis names the record
 * explicitly (owner ruling, #1021).
 */
export const CHIMERA_ANT_NGL: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  dossiers: {
    'lin-koshi': surveyor({
      it: 'Cerca nuove specie sul campo con Kaito e altri cinque Hunter dilettanti.',
      en: 'He surveys new species in the field with Kite and five other amateur Hunters.',
    }),
    'podungo-lapoy': {
      ...surveyor({
        it: 'È una dei sei Hunter dilettanti che cercano nuove specie con Kaito.',
        en: 'She is one of the six amateur Hunters who survey new species with Kite.',
      }),
      relationships: [
        { episode: 77, chapter: 186, value: [kiteTeammate] },
        // Manga-only: chapter 187 has Monta stay behind to help her analyse
        // the specimen, and the two phone Kite with the result. The episode
        // 77 and 78 pages tell no such scene; the episode only orders it.
        {
          episode: 77,
          chapter: 187,
          source: 'chapter',
          value: [
            kiteTeammate,
            {
              character: 'monta-yuras',
              type: { it: 'Compagno di ricerca', en: 'Survey teammate' },
              summary: {
                it: 'Monta Yuras resta con lei ad analizzare il campione dell’insetto, e insieme comunicano il risultato a Kaito.',
                en: 'Monta Yuras stays behind to help her analyse the insect sample, and together they phone Kite with the result.',
              },
            },
          ],
        },
      ],
    },
    // Anime-only record: every dated entry repeats its source.
    'wong': {
      relationships: [
        {
          episode: 77,
          chapter: 187,
          source: 'episode',
          value: [
            {
              character: 'kite',
              type: { it: 'Hunter che ingaggia', en: 'Hunter he hires' },
              summary: {
                it: 'Incarica Kaito e la sua squadra di scoprire di più sulla nuova specie di formica.',
                en: 'Hires Kite and his team to find out more about the new ant species.',
              },
            },
          ],
        },
      ],
      role: { it: 'Ricercatore', en: 'Researcher' },
      log: {
        it: 'Parla ai ricercatori di una nuova specie di formica e li incarica di scoprirne di più, perché serve un Hunter per identificarla.',
        en: 'He tells the surveyors about a new ant species and hires them to find out more, since it takes a Hunter to identify it.',
      },
      status: [
        { episode: 77, chapter: 187, source: 'episode', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 77,
          chapter: 187,
          source: 'episode',
          value: { it: 'Committente della ricerca', en: 'Survey client' },
        },
      ],
    },
    // Anime-only record. His sister's record opens at episode 80, so the
    // texts frozen at 77 leave her unnamed.
    'kurt': {
      relationships: [
        {
          episode: 77,
          chapter: 187,
          source: 'episode',
          value: [links.kurtHaruna],
        },
        {
          episode: 80,
          chapter: 189,
          source: 'episode',
          value: [links.kurtHaruna, links.kurtReina],
        },
      ],
      role: { it: 'Fratello maggiore', en: 'Older brother' },
      log: {
        it: 'Allontana un serpente dalla sorellina e promette di proteggere lei e la madre. Mentre tornano dal fiume con i pesci che hanno preso, i due incontrano una formica soldato. Lui prova ad affrontarla, e la regina li mangia entrambi.',
        en: 'He drives a snake away from his little sister and promises to keep her and their mother safe. Coming home from the river with the fish they caught, the two meet an ant soldier. He tries to fight it, and the Queen eats them both.',
      },
      status: [
        { episode: 77, chapter: 187, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        { episode: 77, chapter: 187, source: 'episode', value: HIS_FAMILY },
      ],
    },
    // Both media, but her brother and mother are named in the anime alone,
    // so her own texts name neither and both rows are anime-only.
    'reina': {
      relationships: [
        {
          episode: 80,
          chapter: 189,
          source: 'episode',
          value: [links.reinaKurt, links.reinaHaruna],
        },
      ],
      role: [
        {
          episode: 80,
          chapter: 189,
          value: { it: 'Sorella minore', en: 'Younger sister' },
        },
        {
          episode: 136,
          chapter: 315,
          source: 'chapter',
          value: {
            it: 'Rinata come formichimera, chiamata Shidore',
            en: 'Reborn as a Chimera Ant called Shidore',
          },
        },
        {
          episode: 136,
          chapter: 315,
          source: 'episode',
          value: {
            it: 'Rinata come formichimera',
            en: 'Reborn as a Chimera Ant',
          },
        },
      ],
      log: {
        it: 'Torna a casa dal fiume con il fratello maggiore quando li trova una formica soldato. Lui prova a trattenerla perché lei possa scappare, ma la formica li porta entrambi alla regina.',
        en: 'She is coming home from the river with her older brother when an ant soldier finds them. He tries to hold it off so she can run, but it takes them both to the Queen.',
      },
      status: [
        { episode: 80, chapter: 189, value: 'deceased' },
        { episode: 136, chapter: 315, value: 'alive' },
      ],
      affiliation: [{ episode: 80, chapter: 189, value: HER_FAMILY }],
    },
    // Anime-only record: the manga never gives the mother's name.
    'haruna': {
      relationships: [
        {
          episode: 77,
          chapter: 187,
          source: 'episode',
          value: [links.harunaKurt],
        },
        {
          episode: 80,
          chapter: 189,
          source: 'episode',
          value: [links.harunaKurt, links.harunaReina],
        },
      ],
      role: { it: 'Madre', en: 'Mother' },
      log: {
        it: 'Cena a casa con i due figli, e il figlio promette di proteggere lei e la sorellina.',
        en: 'She has dinner at home with her two children, and her son promises to keep her and his little sister safe.',
      },
      status: [
        { episode: 77, chapter: 187, source: 'episode', value: 'alive' },
      ],
      affiliation: [
        { episode: 77, chapter: 187, source: 'episode', value: HER_FAMILY },
      ],
    },
    // Anime-only record: the manga never names him. The ant that kills him
    // in chapter 190 is the same scene as episode 80.
    'pekuba': {
      relationships: [
        {
          episode: 79,
          chapter: 189,
          source: 'episode',
          value: [links.pekubaPokkle, links.pekubaPonzu],
        },
      ],
      role: {
        it: 'Membro della spedizione di Pockul',
        en: 'Member of Pokkle’s expedition',
      },
      log: {
        it: 'Racconta a Pockul che un giornalista entrato in NGL portava un microfono nascosto, e che nel suo ultimo messaggio il giornalista grida di mostri e insetti giganti. In NGL, quando una squadra di formiche affronta il gruppo, Pockul gli dice di scappare.',
        en: 'He tells Pokkle that a reporter who went into NGL wore a hidden wire, and that in its last message the reporter screams about monsters and giant bugs. In NGL, when a squadron of ants confronts the party, Pokkle tells him to run.',
      },
      status: [
        { episode: 79, chapter: 189, source: 'episode', value: 'alive' },
        { episode: 80, chapter: 190, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 79,
          chapter: 189,
          source: 'episode',
          value: { it: 'Spedizione di Pockul', en: 'Pokkle’s expedition' },
        },
      ],
    },
    // From #1046: Pokkle tells him and Ponzu to run, chapter 190 and episode
    // 80, the scene he dies in, so he opens deceased. The ant that kills him
    // is filed for the manga alone, so no text names it.
    'balda': {
      relationships: [
        {
          episode: 80,
          chapter: 190,
          value: [
            {
              character: 'pokkle',
              type: { it: 'Capo della spedizione', en: 'Expedition leader' },
              summary: {
                it: 'Balda segue Pockul in NGL. Quando le formiche attaccano, Pockul dice a lui e a Ponzu di scappare.',
                en: 'Balda follows Pokkle in NGL. When the ants attack, Pokkle tells him and Ponzu to run.',
              },
            },
          ],
        },
      ],
      role: {
        it: 'Membro della spedizione di Pockul',
        en: 'Member of Pokkle’s expedition',
      },
      log: {
        it: 'Esplora NGL con Pockul e Ponzu. Una formica lo cattura nella sua ragnatela e lo uccide.',
        en: 'He searches NGL with Pokkle and Ponzu. An ant catches him in its web and kills him.',
      },
      status: [{ episode: 80, chapter: 190, value: 'deceased' }],
      affiliation: [
        {
          episode: 80,
          chapter: 190,
          value: { it: 'Spedizione di Pockul', en: 'Pokkle’s expedition' },
        },
      ],
    },
  },
  entries: [
    {
      id: 'lin-koshi',
      kind: 'character',
      revealedAtEpisode: 77,
      revealedAtChapter: 186,
      name: { it: 'Lin Koshi', en: 'Lin Koshi' },
      summary: {
        it: 'Un Hunter dilettante che cerca nuove specie con Kaito.',
        en: 'An amateur Hunter who surveys new species with Kite.',
      },
      visual: { art: 'lin-koshi', tint: 'ocher' },
    },
    {
      id: 'podungo-lapoy',
      kind: 'character',
      revealedAtEpisode: 77,
      revealedAtChapter: 186,
      name: { it: 'Podungo Lapoy', en: 'Podungo Lapoy' },
      summary: {
        it: 'Una Hunter dilettante della squadra di ricerca di Kaito.',
        en: 'An amateur Hunter on Kite’s survey team.',
      },
      visual: { art: 'podungo-lapoy', tint: 'ice' },
    },
    // Named in episode 77 alone: chapter 187 gives his name only in the
    // wiki's narration. The chapter only orders him.
    {
      id: 'wong',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 77,
      revealedAtChapter: 187,
      name: { it: 'Wong', en: 'Wong' },
      summary: {
        it: 'Un ricercatore che incarica la squadra di Kaito di studiare una nuova specie di formica.',
        en: 'A researcher who hires Kite’s team to study a new ant species.',
      },
      visual: { art: 'wong', tint: 'sand' },
    },
    // Named in episode 77 alone, and killed in the same episode: one
    // drawing, no death redrawing.
    {
      id: 'kurt',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 77,
      revealedAtChapter: 187,
      name: { it: 'Kurt', en: 'Kurt' },
      summary: {
        it: 'Un bambino che protegge la sorellina e la madre.',
        en: 'A boy who looks after his little sister and their mother.',
      },
      visual: { art: 'kurt', tint: 'blue' },
    },
    // Named when an ant swears to protect "Reina" (chapter 189, episode 80),
    // after her death in 187 / 77: already dead when she opens, so one
    // drawing.
    {
      id: 'reina',
      kind: 'character',
      revealedAtEpisode: 80,
      revealedAtChapter: 189,
      name: { it: 'Reina', en: 'Reina' },
      summary: {
        it: 'Una bambina che una formica soldato cattura insieme al fratello maggiore e porta in pasto alla regina.',
        en: 'A little girl whom an ant soldier takes with her older brother and feeds to the Queen.',
      },
      visual: { art: 'reina', tint: 'yellow' },
    },
    {
      id: 'haruna',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 77,
      revealedAtChapter: 187,
      name: { it: 'Haruna', en: 'Haruna' },
      summary: {
        it: 'La madre di Kurt e della sua sorellina.',
        en: 'The mother of Kurt and his little sister.',
      },
      visual: { art: 'haruna', tint: 'flamingo' },
    },
    // Named in episode 79 alone; chapter 189 only orders him.
    {
      id: 'pekuba',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 79,
      revealedAtChapter: 189,
      name: { it: 'Pekuba', en: 'Pekuba' },
      summary: {
        it: 'Un membro del gruppo di Pockul che cerca insetti giganti in NGL.',
        en: 'A member of Pokkle’s party searching NGL for giant insects.',
      },
      visual: { art: 'pekuba', tint: 'magenta' },
    },
    {
      id: 'balda',
      kind: 'character',
      revealedAtEpisode: 80,
      revealedAtChapter: 190,
      name: { it: 'Balda', en: 'Balda' },
      summary: {
        it: 'Un membro della squadra di Pockul in NGL.',
        en: 'A member of Pokkle’s team in NGL.',
      },
      visual: { art: 'balda', tint: 'ice' },
    },
  ],
}
