import type { PlaceDossier } from '~/data/types'

import type { ThronesSaga, ThronesVocabulary } from './saga'

/**
 * Season 3 of the show and the first part of *A Storm of Swords*: the third
 * stage (#1626), episodes 21 to 30 and site chapters 144 to 196 (the book's
 * prologue to Arya XI). No records filed yet; each cast group's filing child
 * adds its new characters here. A character an earlier season filed keeps
 * its dossier and its new dated steps in the module that filed it. Chapters
 * are site chapters: A Storm of Swords' prologue is chapter 144, so its
 * chapter N (prologue 0) is 144 + N.
 *
 * The heading opens with the season's first record in each medium, so its
 * summary names only the season and the book, as the earlier seasons' do.
 * Its `visual.art` names the season's own drawing, which the home page's
 * frame draws (#1601); it goes in `../art/seasons.ts` with the season's first
 * records, since a drawing no record uses fails the drawing tests.
 */
export const season3: ThronesSaga = {
  name: { it: 'Stagione 3', en: 'Season 3' },
  heading: {
    id: 'season-3',
    summary: {
      it: 'La terza stagione della serie e la prima parte del terzo libro, A Storm of Swords.',
      en: 'The show’s third season and the first part of the third book, A Storm of Swords.',
    },
    visual: { art: 'season-3', tint: 'ocher' },
  },
  dossiers: {
    // #1637: Jaime, Brienne and Harrenhal.
    'qyburn': {
      role: { it: 'Guaritore a Harrenhal', en: 'Healer at Harrenhal' },
      log: {
        it: 'Si è formato come maestro e sa curare le ferite. Si trova a Harrenhal mentre il castello è in mano agli uomini del Nord.',
        en: 'He trained as a maester and knows how to treat wounds. He is at Harrenhal while the northmen hold the castle.',
      },
      status: [{ episode: 21, chapter: 175, value: 'alive' }],
      affiliation: [
        // Show only: the northmen find him alive among the prisoners Ser
        // Gregor's men put to the sword, and he names himself to Robb, in
        // "Valar Dohaeris" (episode 21).
        {
          episode: 21,
          chapter: 175,
          source: 'episode',
          value: { it: 'Nessuna fedeltà', en: 'No allegiance' },
        },
        // Books only: one of Vargo Hoat's sellswords, who serve Roose Bolton
        // at Harrenhal when the Goat brings Jaime in, in Jaime IV (chapter
        // 175). Episode 21 only orders it.
        {
          episode: 21,
          chapter: 175,
          source: 'chapter',
          value: {
            it: 'Bravi Camerati, al servizio di Roose Bolton',
            en: 'Brave Companions, in Roose Bolton’s service',
          },
        },
        // Show only: he stays at Harrenhal when Robb leaves Roose Bolton in
        // command there, and Lord Bolton has him treat Jaime's stump, in
        // "Kissed by Fire" (episode 25).
        {
          episode: 25,
          chapter: 175,
          source: 'episode',
          value: {
            it: 'Al servizio di Roose Bolton',
            en: 'In Roose Bolton’s service',
          },
        },
      ],
    },
    'steelshanks-walton': {
      role: {
        it: 'Capitano al servizio di Roose Bolton',
        en: 'Captain in Roose Bolton’s service',
      },
      log: {
        it: 'Guida i duecento uomini di Forte Terrore che scortano Jaime Lannister ad Approdo del Re. Quando Jaime lo costringe a tornare a Harrenhal per Brienne, i suoi uomini abbattono l’orso con le balestre.',
        en: 'He leads the two hundred Dreadfort men who escort Jaime Lannister to King’s Landing. When Jaime makes him turn back to Harrenhal for Brienne, his men bring down the bear with their crossbows.',
      },
      status: [
        { episode: 27, chapter: 188, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 27,
          chapter: 188,
          source: 'chapter',
          value: { it: 'Casa Bolton', en: 'House Bolton' },
        },
      ],
    },
  },
  entries: [
    // #1637: Jaime, Brienne and Harrenhal.
    //
    // Show: "Valar Dohaeris" (episode 21), the northmen find him alive at
    // Harrenhal and he names himself to Robb. Books: Jaime IV (site chapter
    // 175), Roose Bolton has Qyburn clean and bind Jaime's stump.
    {
      id: 'qyburn',
      kind: 'character',
      revealedAtEpisode: 21,
      revealedAtChapter: 175,
      name: { it: 'Qyburn', en: 'Qyburn' },
      summary: {
        it: 'Un guaritore formatosi come maestro, a Harrenhal.',
        en: 'A healer trained as a maester, at Harrenhal.',
      },
      visual: { art: 'qyburn', tint: 'ivory' },
    },
    // Books only: Jaime VI (site chapter 188), he leads Jaime's escort out
    // of Harrenhal. Jaime IV (175) lists him in the hall without naming him
    // in its synopsis. The show's Steelshanks is named only in narration in
    // the pages read, so episode 27 only orders him, as Rorge's record does.
    {
      id: 'steelshanks-walton',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 27,
      revealedAtChapter: 188,
      name: { it: 'Steelshanks Walton', en: 'Steelshanks Walton' },
      summary: {
        it: 'Un capitano al servizio di Roose Bolton.',
        en: 'A captain in Roose Bolton’s service.',
      },
      visual: { art: 'steelshanks-walton', tint: 'red' },
    },
  ],
}

/**
 * The log entry of every season-3 place, by the place's id, in its own words
 * (`../placeWords`), as `SEASON_2_PLACES` has season 2's. Empty until the
 * stage's places are filed.
 */
export const SEASON_3_PLACES: Record<
  string,
  PlaceDossier<ThronesVocabulary>
> = {}
