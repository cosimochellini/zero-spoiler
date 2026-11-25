import type { PlaceDossier } from '~/data/types'

import type { ThronesSaga, ThronesVocabulary } from './saga'

/**
 * Season 3 of the show and the first part of *A Storm of Swords*: the third
 * stage (#1626), episodes 21 to 30 and site chapters 144 to 196 (the book's
 * prologue to Arya XI). Each cast group's filing child adds its new
 * characters here (Arya, the Brotherhood and the Hound: #1636). A character
 * an earlier season filed keeps its dossier and its new dated steps in the
 * module that filed it. Chapters are site chapters: A Storm of Swords'
 * prologue is chapter 144, so its chapter N (prologue 0) is 144 + N.
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
  entries: [
    // #1636: Arya, the Brotherhood Without Banners and the Hound. Every
    // record here is the books' alone: the show's outlaws are Thoros, Beric
    // and Anguy, and no quote read has Anguy's name said on screen (owner
    // check). Each one's episode only orders it.
    //
    // Books: Arya II (site chapter 157), three outlaws come upon Arya,
    // Gendry and Hot Pie by the Trident, and Hot Pie gives his name while
    // the other two give false ones. Anguy wins the archery at the Hand's
    // tourney in Eddard VII of A Game of Thrones (chapter 31), where Alyn's
    // chronicle names him (`nameSaidAt`); the record opens where he is next
    // seen, later and so safe (owner check: 31). The show's Anguy rides with
    // Thoros from "Dark Wings, Dark Words" (episode 22), which orders him.
    {
      id: 'anguy',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 157,
      nameSaidAt: 5,
      name: { it: 'Anguy', en: 'Anguy' },
      summary: {
        it: 'Un arciere della Fratellanza senza vessilli, i fuorilegge che combattono in nome del defunto re Robert.',
        en: 'An archer of the Brotherhood Without Banners, outlaws who fight in the name of the late King Robert.',
      },
      visual: { art: 'anguy', tint: 'wine' },
    },
    // Books: Arya II (site chapter 157), the same scene; he sings on the
    // road to the inn and gives Arya a paper for their horses.
    {
      id: 'tom-of-sevenstreams',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 157,
      name: { it: 'Tom di Settecorrenti', en: 'Tom of Sevenstreams' },
      summary: {
        it: 'Un cantante, uno dei fuorilegge della Fratellanza senza vessilli.',
        en: 'A singer, one of the outlaws of the Brotherhood Without Banners.',
      },
      visual: { art: 'tom-of-sevenstreams', tint: 'ocher' },
    },
    // Books: Arya II (site chapter 157), the same scene; Arya hits him in
    // the face with a tankard at the inn. The show's Lem appears only in
    // season 6, where no line says his name; episode 22 orders him.
    {
      id: 'lem',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 157,
      name: { it: 'Lem', en: 'Lem' },
      summary: {
        it: 'Un fuorilegge grande e grosso dal mantello giallo, uno della Fratellanza senza vessilli.',
        en: 'A big outlaw in a yellow cloak, one of the Brotherhood Without Banners.',
      },
      visual: { art: 'lem', tint: 'yellow' },
    },
    // Books: Arya III (site chapter 161), he blows his horn at a village
    // that looks abandoned, and its people come out to greet the outlaws.
    // Arya II (157) lists him among the men who come into the inn, with no
    // line read that names him (owner check).
    {
      id: 'jack-be-lucky',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 161,
      name: { it: 'Jack Fortunello', en: 'Jack-Be-Lucky' },
      summary: {
        it: 'Un fuorilegge della Fratellanza senza vessilli, quello che suona il corno della banda.',
        en: 'An outlaw of the Brotherhood Without Banners, the one who blows the band’s horn.',
      },
      visual: { art: 'jack-be-lucky', tint: 'sand' },
    },
    // Books: Arya IV (site chapter 166), an old dwarf woman speaks in
    // private to Lem, Tom and Greenbeard. Arya II and III (157, 161) list
    // him among the outlaws, with no line read that names him (owner
    // check).
    {
      id: 'greenbeard',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 166,
      name: { it: 'Barbaverde', en: 'Greenbeard' },
      summary: {
        it: 'Un mercenario di Tyrosh dalla barba verde, uno dei fuorilegge della Fratellanza senza vessilli.',
        en: 'A sellsword from Tyrosh with a green beard, one of the outlaws of the Brotherhood Without Banners.',
      },
      visual: { art: 'greenbeard', tint: 'green' },
    },
    // Books: Arya V (site chapter 173), the northmen starving in cages were
    // caught by the Mad Huntsman, and in the night he brings Sandor Clegane
    // into the town in chains. Episode 24 orders him.
    {
      id: 'mad-huntsman',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 24,
      revealedAtChapter: 173,
      name: { it: 'Cacciatore Pazzo', en: 'Mad Huntsman' },
      summary: {
        it: 'Un cacciatore delle Terre dei Fiumi che dà la caccia agli uomini e li lascia nelle gabbie.',
        en: 'A huntsman of the riverlands who hunts down men and leaves them in cages.',
      },
      visual: { art: 'mad-huntsman', tint: 'orange' },
    },
    // Books: Arya VIII (site chapter 187), Arya talks with Edric Dayne,
    // called Ned, the young Lord of Starfall. Arya VI and VII (178, 183)
    // list him at the hollow hill, with no line read that gives his name
    // (owner check). Episode 27 orders him.
    {
      id: 'edric-dayne',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 27,
      revealedAtChapter: 187,
      name: { it: 'Edric Dayne', en: 'Edric Dayne' },
      summary: {
        it: 'Il giovane lord di Stelle al Tramonto, scudiero di lord Beric Dondarrion tra i fuorilegge.',
        en: 'The young Lord of Starfall, Lord Beric Dondarrion’s squire among the outlaws.',
      },
      visual: { art: 'edric-dayne', tint: 'lavender' },
    },
    // Books: Arya VIII (site chapter 187), the outlaws come back to High
    // Heart and the ghost of High Heart tells Lord Beric her dreams. Arya
    // IV (166) has her as an old dwarf woman, with no line read that calls
    // her by the name (owner check). Episode 27 orders her.
    {
      id: 'ghost-of-high-heart',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 27,
      revealedAtChapter: 187,
      name: { it: 'Fantasma di Cuore Alto', en: 'Ghost of High Heart' },
      summary: {
        it: 'Una minuscola vecchia che vive tra i ceppi degli alberi del cuore di Cuore Alto e sogna quello che verrà.',
        en: 'A tiny old woman who lives among the weirwood stumps of High Heart and dreams of what is to come.',
      },
      visual: { art: 'ghost-of-high-heart', tint: 'ivory' },
    },
  ],
  dossiers: {
    // #1636: Arya, the Brotherhood Without Banners and the Hound.
    'anguy': {
      role: {
        it: 'Arciere della Fratellanza senza vessilli',
        en: 'Archer of the Brotherhood Without Banners',
      },
      log: {
        it: 'Con Tom di Settecorrenti e Lem trova Arya Stark, Gendry e Frittella vicino al fiume. Un tiro con l’arco li convince a seguire i fuorilegge fino a una locanda.',
        en: 'With Tom of Sevenstreams and Lem he comes upon Arya Stark, Gendry and Hot Pie by the river. One shot of his bow convinces them to go with the outlaws to an inn.',
      },
      status: [
        { episode: 22, chapter: 157, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 22,
          chapter: 157,
          source: 'chapter',
          value: {
            it: 'Fratellanza senza vessilli',
            en: 'Brotherhood Without Banners',
          },
        },
      ],
    },
    'tom-of-sevenstreams': {
      role: {
        it: 'Cantante della Fratellanza senza vessilli',
        en: 'Singer of the Brotherhood Without Banners',
      },
      log: {
        it: 'Con Lem e Anguy trova Arya Stark, Gendry e Frittella vicino al fiume e li porta a una locanda, cantando lungo la strada. Lì dà ad Arya un foglio che promette di pagare i loro cavalli dopo la guerra.',
        en: 'With Lem and Anguy he comes upon Arya Stark, Gendry and Hot Pie by the river and takes them to an inn, singing on the way. There he gives Arya a paper that promises to pay for their horses after the war.',
      },
      status: [
        { episode: 22, chapter: 157, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 22,
          chapter: 157,
          source: 'chapter',
          value: {
            it: 'Fratellanza senza vessilli',
            en: 'Brotherhood Without Banners',
          },
        },
      ],
    },
    'lem': {
      role: {
        it: 'Fuorilegge della Fratellanza senza vessilli',
        en: 'Outlaw of the Brotherhood Without Banners',
      },
      log: {
        it: 'Con Tom di Settecorrenti e Anguy trova Arya Stark, Gendry e Frittella vicino al fiume. Alla locanda Arya prova a scappare e lo colpisce in faccia con un boccale.',
        en: 'With Tom of Sevenstreams and Anguy he comes upon Arya Stark, Gendry and Hot Pie by the river. At the inn Arya tries to run and hits him in the face with a tankard.',
      },
      status: [
        { episode: 22, chapter: 157, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 22,
          chapter: 157,
          source: 'chapter',
          value: {
            it: 'Fratellanza senza vessilli',
            en: 'Brotherhood Without Banners',
          },
        },
      ],
    },
    'jack-be-lucky': {
      role: {
        it: 'Fuorilegge della Fratellanza senza vessilli',
        en: 'Outlaw of the Brotherhood Without Banners',
      },
      log: {
        it: 'Cavalca con i fuorilegge che portano Arya Stark da lord Beric. In un villaggio che sembra abbandonato suona il corno, e gli abitanti escono ad accogliere la banda.',
        en: 'He rides with the outlaws who are taking Arya Stark to Lord Beric. At a village that looks abandoned he blows his horn, and its people come out to greet the band.',
      },
      status: [
        { episode: 22, chapter: 161, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 22,
          chapter: 161,
          source: 'chapter',
          value: {
            it: 'Fratellanza senza vessilli',
            en: 'Brotherhood Without Banners',
          },
        },
      ],
    },
    'greenbeard': {
      role: {
        it: 'Mercenario della Fratellanza senza vessilli',
        en: 'Sellsword of the Brotherhood Without Banners',
      },
      log: {
        it: 'Cavalca con i fuorilegge che portano Arya Stark da lord Beric. Con Tom e Lem ascolta in disparte i sogni di una vecchia nana.',
        en: 'He rides with the outlaws who are taking Arya Stark to Lord Beric. With Tom and Lem he listens in private to the dreams of an old dwarf woman.',
      },
      status: [
        { episode: 22, chapter: 166, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 22,
          chapter: 166,
          source: 'chapter',
          value: {
            it: 'Fratellanza senza vessilli',
            en: 'Brotherhood Without Banners',
          },
        },
      ],
    },
    'mad-huntsman': {
      role: { it: 'Cacciatore', en: 'Huntsman' },
      log: {
        it: 'Cattura gli uomini del nord che hanno saccheggiato le terre intorno e li lascia morire di fame nelle gabbie. Una notte porta in città in catene un nuovo prigioniero, Sandor Clegane.',
        en: 'He catches the northmen who have plundered the lands around and leaves them to starve in cages. One night he brings a new prisoner into the town in chains: Sandor Clegane.',
      },
      status: [
        { episode: 24, chapter: 173, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 24,
          chapter: 173,
          source: 'chapter',
          value: {
            it: 'Fratellanza senza vessilli',
            en: 'Brotherhood Without Banners',
          },
        },
      ],
    },
    'edric-dayne': {
      role: {
        it: 'Lord di Stelle al Tramonto, scudiero di Beric Dondarrion',
        en: 'Lord of Starfall, squire to Beric Dondarrion',
      },
      log: {
        it: 'È lo scudiero di lord Beric e lo chiamano Ned, come il padre di Arya. Le racconta di aver visto Eddard Stark al torneo del Primo Cavaliere, e che suo padre amava sua zia Ashara. Harwin non lo smentisce.',
        en: 'He is Lord Beric’s squire, and he is called Ned, like Arya’s father. He tells Arya he saw Eddard Stark at the Hand’s tourney, and that her father loved his aunt Ashara. Harwin does not deny it.',
      },
      status: [
        { episode: 27, chapter: 187, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 27,
          chapter: 187,
          source: 'chapter',
          value: {
            it: 'Fratellanza senza vessilli',
            en: 'Brotherhood Without Banners',
          },
        },
      ],
    },
    'ghost-of-high-heart': {
      role: { it: 'Veggente di Cuore Alto', en: 'Seer of High Heart' },
      log: {
        it: 'Quando i fuorilegge tornano a Cuore Alto, racconta i suoi sogni a lord Beric e chiede una canzone in cambio. Caccia via Arya, poi dice loro di cercare sua madre alle Torri Gemelle, dove ci sarà un matrimonio.',
        en: 'When the outlaws come back to High Heart, she tells Lord Beric her dreams and asks for a song in payment. She sends Arya away, then tells them to seek her mother at the Twins, where there is to be a wedding.',
      },
      status: [
        { episode: 27, chapter: 187, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 27,
          chapter: 187,
          source: 'chapter',
          value: { it: 'Nessuna fedeltà', en: 'No allegiance' },
        },
      ],
    },
  },
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
