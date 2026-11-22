import type { PlaceDossier } from '~/data/types'

import type { ThronesSaga, ThronesVocabulary } from './saga'

/**
 * Season 2 of the show and *A Clash of Kings*: the second stage (#1455),
 * episodes 11 to 20 and site chapters 74 to 143. Each cast group's filing
 * child adds its new characters here, King's Landing and the Blackwater
 * first (#1463). A character season 1 filed keeps its dossier and its new
 * dated steps in `season-1.ts`. Chapters are site chapters: A Clash of
 * Kings' prologue is chapter 74, so its chapter N (prologue 0) is 74 + N,
 * in the order of the Ice and Fire Wiki's chapter navigation. The research
 * and every check still open are in
 * `docs/content-provenance/game-of-thrones-season-2-characters.md` and
 * `docs/content-provenance/game-of-thrones.json`.
 *
 * The heading opens with the season's first record in each medium, so its
 * summary names only the season and the book, as season 1's does. Like
 * season 1's, its `visual.art` names no drawing: a heading is not among the
 * archive's records, and the page draws it with no strokes.
 */
export const season2: ThronesSaga = {
  name: { it: 'Stagione 2', en: 'Season 2' },
  heading: {
    id: 'season-2',
    summary: {
      it: 'La seconda stagione della serie e il secondo libro, A Clash of Kings.',
      en: 'The show’s second season and the second book, A Clash of Kings.',
    },
    visual: { art: 'season-2', tint: 'red' },
  },
  entries: [
    // Show only: Ros names her in "The North Remembers" (episode 11), "We do
    // things differently here, Daisy", as she shows her round the brothel.
    // The books have no such character; chapter 77 only orders her.
    {
      id: 'daisy',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 11,
      revealedAtChapter: 77,
      name: { it: 'Daisy', en: 'Daisy' },
      summary: {
        it: 'Una giovane prostituta appena arrivata nel bordello di Ditocorto.',
        en: 'A young prostitute who has just come to Littlefinger’s brothel.',
      },
      visual: { art: 'daisy', tint: 'pink' },
    },
    // Books: Tyrion II (site chapter 82), Tyrion gives him the City Watch in
    // Janos Slynt's place. The show never has him: it gives the command to
    // Bronn, so episode 12 only orders him.
    {
      id: 'jacelyn-bywater',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 12,
      revealedAtChapter: 82,
      name: { it: 'Jacelyn Bywater', en: 'Jacelyn Bywater' },
      summary: {
        it: 'Un cavaliere della Guardia cittadina di Approdo del Re.',
        en: 'A knight of the City Watch of King’s Landing.',
      },
      visual: { art: 'jacelyn-bywater', tint: 'ocher' },
    },
    // Books: Tyrion V (site chapter 94), he shows Tyrion the guild's
    // wildfire. The show has him in "The Ghost of Harrenhal" (episode 15) and
    // "Blackwater", but no synopsis or quote has his name said: narration
    // and the credits only, so he is the books' alone (an owner check).
    {
      id: 'hallyne',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 15,
      revealedAtChapter: 94,
      name: { it: 'Hallyne', en: 'Hallyne' },
      summary: {
        it: 'Un piromante della Gilda degli alchimisti di Approdo del Re.',
        en: 'A pyromancer of the Alchemists’ Guild in King’s Landing.',
      },
      visual: { art: 'hallyne', tint: 'green' },
    },
    // Books: Tyrion X (site chapter 118), Varys proposes Shae as her maid.
    // Earlier chapters have her at court (Sansa I, the riot of Tyrion IX);
    // whether they say her name is an open check. The show never has her in
    // the stage; episode 13 only orders her.
    {
      id: 'lollys-stokeworth',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 13,
      revealedAtChapter: 118,
      name: { it: 'Lollys Stokeworth', en: 'Lollys Stokeworth' },
      summary: {
        it: 'La figlia minore di lady Tanda Stokeworth, alla corte di Approdo del Re.',
        en: 'Lady Tanda Stokeworth’s younger daughter, at court in King’s Landing.',
      },
      visual: { art: 'lollys-stokeworth', tint: 'flamingo' },
    },
    // Books: Tyrion XI (site chapter 123), the queen names him and Balon
    // Swann to the Kingsguard. Earlier chapters with the Kettleblacks are an
    // open check, so the pin takes this one. The show's Osmund is an unnamed
    // Kingsguard of season 5; episode 18 only orders him.
    {
      id: 'osmund-kettleblack',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 18,
      revealedAtChapter: 123,
      name: { it: 'Osmund Kettleblack', en: 'Osmund Kettleblack' },
      summary: {
        it: 'Un cavaliere al servizio della regina Cersei ad Approdo del Re.',
        en: 'A knight in Queen Cersei’s service in King’s Landing.',
      },
      visual: { art: 'osmund-kettleblack', tint: 'ivory' },
    },
    // Books: Tyrion XII (site chapter 128), the queen holds her as a captive,
    // taking her for Tyrion's lover. Earlier chapters at Chataya's are an
    // open check, so the pin takes this one. The show gives the scene to
    // Ros; episode 18 only orders her.
    {
      id: 'alayaya',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 18,
      revealedAtChapter: 128,
      name: { it: 'Alayaya', en: 'Alayaya' },
      summary: {
        it: 'Una giovane del bordello di Chataya, ad Approdo del Re.',
        en: 'A young woman of Chataya’s brothel in King’s Landing.',
      },
      visual: { art: 'alayaya', tint: 'magenta' },
    },
    // Books: Sansa VIII (site chapter 139), at Joffrey's court after the
    // battle he is the knight who wore Renly's armour, and asks the king to
    // wed his sister. The show gives both to Loras and has no Garlan;
    // episode 20 only orders him.
    {
      id: 'garlan-tyrell',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 20,
      revealedAtChapter: 139,
      name: { it: 'Garlan Tyrell', en: 'Garlan Tyrell' },
      summary: {
        it: 'Un cavaliere di Casa Tyrell, fratello maggiore di Loras Tyrell.',
        en: 'A knight of House Tyrell, Loras Tyrell’s elder brother.',
      },
      visual: { art: 'garlan-tyrell', tint: 'green' },
    },
  ],
  dossiers: {
    'daisy': {
      role: { it: 'Prostituta', en: 'Prostitute' },
      log: {
        it: 'È appena arrivata nel bordello di Ditocorto, e Ros le mostra la casa.',
        en: 'She has just arrived at Littlefinger’s brothel, and Ros shows her around.',
      },
      status: [{ episode: 11, chapter: 77, source: 'episode', value: 'alive' }],
      affiliation: [
        {
          episode: 11,
          chapter: 77,
          source: 'episode',
          value: { it: 'Bordello di Ditocorto', en: 'Littlefinger’s brothel' },
        },
      ],
    },
    'jacelyn-bywater': {
      role: {
        it: 'Comandante della Guardia cittadina',
        en: 'Commander of the City Watch',
      },
      log: {
        it: 'Tyrion Lannister lo mette a capo della Guardia cittadina al posto di Janos Slynt.',
        en: 'Tyrion Lannister gives him command of the City Watch in Janos Slynt’s place.',
      },
      status: [{ episode: 12, chapter: 82, source: 'chapter', value: 'alive' }],
      affiliation: [
        {
          episode: 12,
          chapter: 82,
          source: 'chapter',
          value: { it: 'Guardia cittadina', en: 'City Watch' },
        },
      ],
    },
    'hallyne': {
      role: {
        it: 'Piromante della Gilda degli alchimisti',
        en: 'Pyromancer of the Alchemists’ Guild',
      },
      log: {
        it: 'Mostra a Tyrion Lannister le scorte di altofuoco della gilda.',
        en: 'He shows Tyrion Lannister the guild’s stores of wildfire.',
      },
      status: [{ episode: 15, chapter: 94, source: 'chapter', value: 'alive' }],
      affiliation: [
        {
          episode: 15,
          chapter: 94,
          source: 'chapter',
          value: { it: 'Gilda degli alchimisti', en: 'Alchemists’ Guild' },
        },
      ],
    },
    'lollys-stokeworth': {
      role: {
        it: 'Figlia di lady Tanda Stokeworth',
        en: 'Daughter of Lady Tanda Stokeworth',
      },
      log: {
        it: 'Vive a corte con la madre. Varys dice a Tyrion Lannister che la sua cameriera le ruba dei gioielli, e propone che sia Shae a prenderne il posto.',
        en: 'She lives at court with her mother. Varys tells Tyrion Lannister that her maid has been stealing her jewels, and suggests Shae take the place.',
      },
      status: [
        { episode: 13, chapter: 118, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 13,
          chapter: 118,
          source: 'chapter',
          value: { it: 'Casa Stokeworth', en: 'House Stokeworth' },
        },
      ],
    },
    'osmund-kettleblack': {
      role: {
        it: 'Cavaliere della Guardia reale',
        en: 'Knight of the Kingsguard',
      },
      log: {
        it: 'Lui e i suoi fratelli servono la regina, che lo nomina nella Guardia reale insieme a Balon Swann.',
        en: 'He and his brothers serve the queen, who names him to the Kingsguard alongside Balon Swann.',
      },
      status: [
        { episode: 18, chapter: 123, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 18,
          chapter: 123,
          source: 'chapter',
          value: { it: 'Guardia reale', en: 'Kingsguard' },
        },
      ],
    },
    'alayaya': {
      role: { it: 'Prostituta', en: 'Prostitute' },
      log: {
        it: 'Tyrion Lannister va da lei al bordello per coprire le sue visite a Shae. La regina la fa prendere, credendola la sua amante.',
        en: 'Tyrion Lannister visits her at the brothel to cover his visits to Shae. The queen has her seized, taking her for his lover.',
      },
      // Tywin has her flogged and sent away while Tyrion recovers from the
      // battle; whether A Clash of Kings tells it is unconfirmed, so her
      // release waits for the next stage.
      status: [
        { episode: 18, chapter: 128, source: 'chapter', value: 'captured' },
      ],
      affiliation: [
        {
          episode: 18,
          chapter: 128,
          source: 'chapter',
          value: { it: 'Bordello di Chataya', en: 'Chataya’s brothel' },
        },
      ],
    },
    'garlan-tyrell': {
      role: { it: 'Cavaliere di Casa Tyrell', en: 'Knight of House Tyrell' },
      log: {
        it: 'Entra nella battaglia delle Acque Nere con l’armatura di Renly Baratheon. A corte, dopo la vittoria, chiede al re di sposare sua sorella Margaery.',
        en: 'He rides into the battle on the Blackwater wearing Renly Baratheon’s armour. At court, after the victory, he asks the king to marry his sister Margaery.',
      },
      status: [
        { episode: 20, chapter: 139, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 20,
          chapter: 139,
          source: 'chapter',
          value: { it: 'Casa Tyrell', en: 'House Tyrell' },
        },
      ],
    },
  },
}

/**
 * The log entry of every season-2 place, by the place's id, in its own words
 * (`../placeWords`), as `SEASON_1_PLACES` has season 1's. Empty until the
 * stage's places are filed.
 */
export const SEASON_2_PLACES: Record<
  string,
  PlaceDossier<ThronesVocabulary>
> = {}
