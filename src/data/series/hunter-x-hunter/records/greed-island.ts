import type { PlaceDossier } from '~/data/types'

import { greedIslandRelationships } from './greed-island.relationships'
import type { HunterSaga, HunterVocabulary } from './saga'

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
    // Episode 62 explicitly ends with her naming herself; chapter 137
    // introduces her as Biscuit Krueger. Episode 63 repeats the introduction.
    {
      id: 'biscuit-krueger',
      kind: 'character',
      revealedAtEpisode: 62,
      revealedAtChapter: 137,
      name: { it: 'Biscuit Krueger', en: 'Biscuit Krueger' },
      summary: {
        it: 'Una giocatrice che offre a Gon e Killua di insegnare loro a usare meglio il Nen.',
        en: 'A player who offers to teach Gon and Killua to use Nen more effectively.',
      },
      visual: { art: 'biscuit-krueger', tint: 'pink' },
    },
    {
      id: 'binolt',
      kind: 'character',
      revealedAtEpisode: 63,
      revealedAtChapter: 138,
      name: { it: 'Binolt', en: 'Binolt' },
      summary: {
        it: 'Un cacciatore di taglie ricercato che Biscuit costringe a combattere contro Gon e Killua.',
        en: 'A wanted Bounty Hunter whom Biscuit makes fight Gon and Killua.',
      },
      visual: { art: 'binolt', tint: 'wine' },
    },
    // He introduces himself in chapter 132 and is absent from the 2011 anime.
    {
      id: 'kosofftro',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 62,
      revealedAtChapter: 132,
      name: { it: 'Kosofftro', en: 'Kosofftro' },
      summary: {
        it: 'Un giocatore che accoglie le nuove reclute di un’alleanza di Greed Island.',
        en: 'A player who welcomes new recruits to a Greed Island alliance.',
      },
      visual: { art: 'kosofftro', tint: 'ocher' },
    },
    // Named on the episode's tournament schedule and, later than the
    // manga visit, on the chapter 134 map alongside Shiso Tree.
    {
      id: 'antokiba',
      kind: 'place',
      revealedAtEpisode: 61,
      revealedAtChapter: 134,
      name: { it: 'Antokiba', en: 'Antokiba' },
      summary: {
        it: 'La città di Greed Island dove Gon e Killua scoprono un torneo mensile.',
        en: 'The Greed Island town where Gon and Killua find a monthly tournament.',
      },
      visual: { art: 'antokiba', tint: 'orange' },
    },
    {
      id: 'masadora',
      kind: 'place',
      revealedAtEpisode: 63,
      revealedAtChapter: 140,
      name: { it: 'Masadora', en: 'Masadora' },
      summary: {
        it: 'La città dove i giocatori di Greed Island comprano carte incantesimo.',
        en: 'The town where Greed Island players buy spell cards.',
      },
      visual: { art: 'masadora', tint: 'violet' },
    },
    // The starting structure has already been visited in chapter 127;
    // chapter 134's map supplies its proper name. No anime naming scene is verified.
    {
      id: 'shiso-tree',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 62,
      revealedAtChapter: 134,
      name: { it: 'Albero Shiso', en: 'Shiso Tree' },
      summary: {
        it: 'L’albero che segna il punto d’arrivo dei giocatori a Greed Island.',
        en: 'The tree marking the arrival point for players entering Greed Island.',
      },
      visual: { art: 'shiso-tree', tint: 'sand' },
    },
    // Named and pictured in the manga's auction introduction; the anime
    // names no owner in the corresponding scene.
    {
      id: 'jeitsari',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 59,
      revealedAtChapter: 121,
      name: { it: 'Jeitsari', en: 'Jeitsari' },
      summary: {
        it: 'Un Hunter le cui sette copie di Greed Island vengono messe all’asta.',
        en: 'A Hunter whose seven copies of Greed Island are put up for auction.',
      },
      visual: { art: 'jeitsari', tint: 'azure' },
    },
  ],
  dossiers: {
    'jeitsari': {
      role: { it: 'Hunter', en: 'Hunter' },
      log: {
        it: 'Possedeva sette copie di Greed Island. Aveva stabilito che fossero affidate all’asta se nessuno avesse completato il gioco entro la data indicata nel suo contratto.',
        en: 'He owned seven copies of Greed Island. He arranged for them to be entrusted to the auction if nobody completed the game by the date specified in his contract.',
      },
      // No in-scope scene establishes his current whereabouts or fate.
      affiliation: [
        {
          episode: 59,
          chapter: 121,
          source: 'chapter',
          value: { it: 'Associazione Hunter', en: 'Hunter Association' },
        },
      ],
    },

    'biscuit-krueger': {
      relationships: greedIslandRelationships['biscuit-krueger'],
      role: { it: 'Maestra di Nen', en: 'Nen teacher' },
      log: {
        it: 'Segue Gon e Killua nel gioco e osserva le loro difficoltà contro i mostri. Interviene per mostrare come usare Gyo e offre di allenarli. Studia il Nen da quarant’anni.',
        en: 'She follows Gon and Killua through the game and watches them struggle against its monsters. She intervenes to demonstrate Gyo and offers to train them. She has studied Nen for forty years.',
      },
      status: [{ episode: 62, chapter: 137, value: 'alive' }],
      affiliation: [
        {
          episode: 62,
          chapter: 137,
          value: {
            it: 'Greed Island; propone di allenare Gon e Killua',
            en: 'Greed Island; offers to train Gon and Killua',
          },
        },
        // The boys explicitly accept after she defeats their attacker.
        {
          episode: 63,
          chapter: 138,
          value: {
            it: 'Associazione Hunter; maestra di Gon e Killua',
            en: 'Hunter Association; Gon and Killua’s teacher',
          },
        },
        {
          episode: 64,
          chapter: 141,
          value: {
            it: 'Associazione Hunter; insegna a Gon e Killua a studiare i mostri e a difendersi con Ken',
            en: 'Hunter Association; teaches Gon and Killua to study monsters and defend with Ken',
          },
        },
      ],
    },
    'binolt': {
      relationships: greedIslandRelationships.binolt,
      role: {
        it: 'Cacciatore di taglie ricercato',
        en: 'Wanted Bounty Hunter',
      },
      log: {
        it: 'Segue Gon e Killua, poi prende di mira Biscuit quando si separa da loro. Dopo averle tagliato e mangiato una ciocca di capelli, scopre quanto è forte e le chiede un combattimento senza Nen. Lei lo sconfigge e lo costringe a restare in una conca per affrontare i due ragazzi.',
        en: 'He follows Gon and Killua, then targets Biscuit when she separates from them. After cutting and eating a lock of her hair, he learns how strong she is and asks for a fight without Nen. She defeats him and makes him stay in a hollow to fight the two boys.',
      },
      // The entire capture and release occur in episode 63; its end state
      // is free. Manga readers can stop between the two scenes.
      status: [
        { episode: 63, chapter: 138, source: 'chapter', value: 'captured' },
        { episode: 63, chapter: 138, source: 'episode', value: 'alive' },
        { episode: 64, chapter: 139, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 63,
          chapter: 138,
          value: { it: 'Greed Island, giocatore', en: 'Greed Island player' },
        },
      ],
    },
    'kosofftro': {
      role: { it: 'Giocatore di Greed Island', en: 'Greed Island player' },
      log: {
        it: 'Accoglie le nuove reclute trasportate con un incantesimo. Chiede loro di ricordare il suo nome, necessario per raggiungerlo con le carte di viaggio senza rivelare il nascondiglio del gruppo.',
        en: 'He welcomes the new recruits brought by a spell. He asks them to remember his name, which lets travel cards reach him without revealing the group’s hideout.',
      },
      status: [
        { episode: 62, chapter: 132, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 62,
          chapter: 132,
          source: 'chapter',
          value: {
            it: 'Greed Island, alleanza di giocatori',
            en: 'Greed Island player alliance',
          },
        },
      ],
    },

    'battera': {
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
    'tsezguerra': {
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
    'puhat': {
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

/** Named visited locations; their records carry the medium restrictions. */
export const GREED_ISLAND_PLACES: Record<
  string,
  PlaceDossier<HunterVocabulary>
> = {
  'antokiba': {
    form: 'city',
    region: 'islands',
    arc: 'greed-island-arc',
    landmark: {
      it: 'La piazza dove si annuncia il torneo mensile',
      en: 'The square advertising the monthly tournament',
    },
    log: {
      it: 'Gon e Killua raggiungono la città dopo essere entrati nel gioco. Scoprono che il torneo del mese è una gara di morra cinese.',
      en: 'Gon and Killua reach the town after entering the game. They learn that the month’s tournament is a rock-paper-scissors contest.',
    },
    filedHere: [],
  },
  'masadora': {
    form: 'city',
    region: 'islands',
    arc: 'greed-island-arc',
    landmark: {
      it: 'Il negozio che vende le carte incantesimo',
      en: 'The shop selling spell cards',
    },
    log: {
      it: 'Biscuit accompagna Gon e Killua in città. Invece di comprare gli incantesimi che i ragazzi vogliono, acquista attrezzi e li riporta tra le rocce per continuare l’allenamento.',
      en: 'Biscuit takes Gon and Killua into town. Instead of buying the spells the boys want, she buys tools and takes them back to the rocks to continue their training.',
    },
    filedHere: [],
  },
  'shiso-tree': {
    form: 'building',
    region: 'islands',
    arc: 'greed-island-arc',
    landmark: {
      it: 'La struttura tra le radici dell’albero',
      en: 'The structure among the tree’s roots',
    },
    log: {
      it: 'Gon arriva qui entrando a Greed Island e attende Killua. Una donna gli spiega le regole del gioco prima che esca sull’isola. La mappa indica il luogo come Albero Shiso.',
      en: 'Gon arrives here on entering Greed Island and waits for Killua. A woman explains the game’s rules before he steps out onto the island. The map labels the location Shiso Tree.',
    },
    filedHere: [],
  },
}
