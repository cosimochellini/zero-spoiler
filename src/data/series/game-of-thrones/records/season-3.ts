import type { PlaceDossier } from '~/data/types'

import type { ThronesSaga, ThronesVocabulary } from './saga'

/**
 * Season 3 of the show and the first part of *A Storm of Swords*: the third
 * stage (#1626), episodes 21 to 30 and site chapters 144 to 196 (the book's
 * prologue to Arya XI). Each cast group's filing child adds its new
 * characters here (the Wall and beyond: #1638). A character an earlier
 * season filed keeps its dossier and its new dated steps in the module that
 * filed it. Chapters are site chapters: A Storm of Swords' prologue is
 * chapter 144, so its chapter N (prologue 0) is 144 + N.
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
    // #1638: the Wall and beyond. Mance Rayder's host and its chiefs, the
    // Fist of the First Men and the mutiny at Craster's Keep.
    //
    // Show: "Valar Dohaeris" (episode 21), Jon Snow is brought into his tent
    // and Mance introduces himself. Books: Jon I (site chapter 151), the man
    // singing in the tent is the king, and he introduces his companions. The
    // show says his name from "Cripples, Bastards, and Broken Things"
    // (episode 4), where Alliser Thorne speaks of the wildlings under him.
    {
      id: 'mance-rayder',
      kind: 'character',
      revealedAtEpisode: 21,
      revealedAtChapter: 151,
      nameSaidAt: 4,
      name: { it: 'Mance Rayder', en: 'Mance Rayder' },
      summary: {
        it: 'Il Re oltre la Barriera, un disertore dei Guardiani della notte che guida i bruti.',
        en: 'The King-Beyond-the-Wall, a deserter of the Night’s Watch who leads the wildlings.',
      },
      visual: { art: 'mance-rayder', tint: 'red' },
    },
    // Show: "Walk of Punishment" (episode 23), Mance orders Tormund to take
    // twenty men and Jon over the Wall. Episodes 21 and 22 name him only in
    // narration (an owner check). Books: Jon I (site chapter 151), Mance
    // introduces him to Jon as Tormund Giantsbane.
    {
      id: 'tormund',
      kind: 'character',
      revealedAtEpisode: 23,
      revealedAtChapter: 151,
      name: { it: 'Tormund', en: 'Tormund' },
      summary: {
        it: 'Un capo dei bruti, uno dei condottieri di Mance Rayder.',
        en: 'A wildling chief, one of Mance Rayder’s war leaders.',
      },
      visual: { art: 'tormund', tint: 'orange' },
    },
    // Show: "Dark Wings, Dark Words" (episode 22), Mance explains to Jon that
    // Orell is a warg and asks him what he has seen, as the Game of Thrones
    // Wiki's Mance Rayder page reports it; no page read quotes the name said
    // in season 3 (an owner check). Books: Jon I (site chapter 151) names him
    // (A Wiki of Ice and Fire lists him as mentioned; the line is
    // unverified). In the books he is the watcher Jon killed in the Skirling
    // Pass (A Clash of Kings, Jon VI, chapter 125), so he opens dead there:
    // his summary and log say only what holds in both media.
    {
      id: 'orell',
      kind: 'character',
      revealedAtEpisode: 22,
      revealedAtChapter: 151,
      name: { it: 'Orell', en: 'Orell' },
      summary: {
        it: 'Un warg dei bruti, legato a un’aquila.',
        en: 'A wildling warg, bound to an eagle.',
      },
      visual: { art: 'orell', tint: 'sand' },
    },
    // Books: Jon I (site chapter 151), Mance introduces him as Styr, the
    // Magnar of Thenn, whom Jon has taken for the king. The show's Styr
    // comes in season 4, and no page read has his name said there (an owner
    // check), so the record is the books'; episode 21 only orders it.
    {
      id: 'styr',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 21,
      revealedAtChapter: 151,
      name: { it: 'Styr', en: 'Styr' },
      summary: {
        it: 'Il Magnar di Thenn, signore di uno dei popoli dei bruti.',
        en: 'The Magnar of Thenn, lord of one of the wildling peoples.',
      },
      visual: { art: 'styr', tint: 'ice' },
    },
    // Books: Jon I (site chapter 151), Mance introduces the pregnant Dalla.
    // The show has no Dalla: episode 21 only orders her. Her name is an
    // Italian word ("dalla", from the), so plain text is not scanned for it.
    {
      id: 'dalla',
      kind: 'character',
      source: 'chapter',
      commonWord: true,
      revealedAtEpisode: 21,
      revealedAtChapter: 151,
      name: { it: 'Dalla', en: 'Dalla' },
      summary: {
        it: 'La moglie di Mance Rayder, che aspetta un figlio da lui.',
        en: 'Mance Rayder’s wife, who is carrying his child.',
      },
      visual: { art: 'dalla', tint: 'lavender' },
    },
    // Books: Jon I (site chapter 151), Mance introduces Dalla's sister Val.
    // The show has no Val: episode 21 only orders her.
    {
      id: 'val',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 21,
      revealedAtChapter: 151,
      name: { it: 'Val', en: 'Val' },
      summary: {
        it: 'La sorella di Dalla, nella tenda di Mance Rayder.',
        en: 'Dalla’s sister, in Mance Rayder’s tent.',
      },
      visual: { art: 'val', tint: 'yellow' },
    },
    // Books: Jon I (site chapter 151), Mance introduces him as Val's lover.
    // The show has no Jarl: episode 21 only orders him.
    {
      id: 'jarl',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 21,
      revealedAtChapter: 151,
      name: { it: 'Jarl', en: 'Jarl' },
      summary: {
        it: 'Un giovane razziatore dei bruti, l’amante di Val.',
        en: 'A young wildling raider, Val’s lover.',
      },
      visual: { art: 'jarl', tint: 'teal' },
    },
    // Books: the prologue (site chapter 144), he hunts with Chett near the
    // Fist and is one of the brothers in Chett's plot. The show has no
    // Small Paul: episode 21 only orders him.
    {
      id: 'small-paul',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 21,
      revealedAtChapter: 144,
      name: { it: 'Small Paul', en: 'Small Paul' },
      summary: {
        it: 'Un confratello enorme dei Guardiani della notte, nella spedizione oltre la Barriera.',
        en: 'A huge brother of the Night’s Watch, on the ranging beyond the Wall.',
      },
      visual: { art: 'small-paul', tint: 'azure' },
    },
    // Books: the prologue (site chapter 144), he is one of the brothers in
    // Chett's plot to desert. The show gives his deed at Craster's Keep to
    // Karl Tanner: episode 21 only orders him.
    {
      id: 'dirk',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 21,
      revealedAtChapter: 144,
      name: { it: 'Dirk', en: 'Dirk' },
      summary: {
        it: 'Un ranger dei Guardiani della notte, nella spedizione oltre la Barriera.',
        en: 'A ranger of the Night’s Watch, on the ranging beyond the Wall.',
      },
      visual: { art: 'dirk', tint: 'cyan' },
    },
    // Books: the prologue (site chapter 144), he is one of the brothers in
    // Chett's plot to desert. The show gives his deed at Craster's Keep to
    // Rast: episode 21 only orders him.
    {
      id: 'ollo-lophand',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 21,
      revealedAtChapter: 144,
      name: { it: 'Ollo Lophand', en: 'Ollo Lophand' },
      summary: {
        it: 'Un confratello dei Guardiani della notte, nella spedizione oltre la Barriera.',
        en: 'A brother of the Night’s Watch, on the ranging beyond the Wall.',
      },
      visual: { art: 'ollo-lophand', tint: 'acid' },
    },
    // Books: the prologue (site chapter 144), Chett counts him among the
    // brothers of his plot. The show's Karl Tanner is a character of its
    // own, named only in season 4: episode 21 only orders this record.
    {
      id: 'clubfoot-karl',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 21,
      revealedAtChapter: 144,
      name: { it: 'Karl Piededuro', en: 'Clubfoot Karl' },
      summary: {
        it: 'Un attendente dei Guardiani della notte con un piede deforme.',
        en: 'A steward of the Night’s Watch with a club foot.',
      },
      visual: { art: 'clubfoot-karl', tint: 'violet' },
    },
  ],
  dossiers: {
    // #1638: the Wall and beyond.
    'mance-rayder': {
      role: { it: 'Re oltre la Barriera', en: 'King-Beyond-the-Wall' },
      log: {
        it: 'Jon Snow viene portato nella sua tenda e all’inizio scambia un altro uomo per il re. Mance sa che Jon ha ucciso Qhorin il Monco, e gli chiede perché vuole lasciare i Guardiani della notte.',
        en: 'Jon Snow is brought into his tent and at first takes another man for the king. Mance knows that Jon killed Qhorin Halfhand, and asks him why he wants to leave the Night’s Watch.',
      },
      status: [{ episode: 21, chapter: 151, value: 'alive' }],
      affiliation: [
        { episode: 21, chapter: 151, value: { it: 'Bruti', en: 'Wildlings' } },
      ],
    },
    'tormund': {
      role: {
        it: 'Capo dei bruti nell’esercito di Mance Rayder',
        en: 'Wildling chief in Mance Rayder’s host',
      },
      log: {
        it: 'È nella tenda di Mance Rayder quando Jon Snow viene portato davanti al Re oltre la Barriera.',
        en: 'He is in Mance Rayder’s tent when Jon Snow is brought before the King-Beyond-the-Wall.',
      },
      status: [{ episode: 23, chapter: 151, value: 'alive' }],
      affiliation: [
        { episode: 23, chapter: 151, value: { it: 'Bruti', en: 'Wildlings' } },
      ],
    },
    'orell': {
      role: { it: 'Warg dei bruti', en: 'Wildling warg' },
      log: {
        it: 'La sua aquila esplora il terreno davanti all’esercito di Mance Rayder.',
        en: 'His eagle scouts ahead of Mance Rayder’s host.',
      },
      status: [
        // The show's alone: alive at his gate, "Dark Wings, Dark Words"
        // (episode 22). The books open on him dead, killed by Jon in the
        // Skirling Pass before they name him.
        { episode: 22, chapter: 151, source: 'episode', value: 'alive' },
        // Jon kills him at Queenscrown in "The Rains of Castamere" (episode
        // 29). In the books he is dead from his gate, chapter 151.
        { episode: 29, chapter: 151, value: 'deceased' },
      ],
      affiliation: [
        { episode: 22, chapter: 151, value: { it: 'Bruti', en: 'Wildlings' } },
      ],
    },
    'styr': {
      role: { it: 'Magnar di Thenn', en: 'Magnar of Thenn' },
      log: {
        it: 'È nella tenda di Mance Rayder quando vi viene portato Jon Snow, che all’inizio lo scambia per il re.',
        en: 'He is in Mance Rayder’s tent when Jon Snow is brought in, and Jon at first takes him for the king.',
      },
      status: [
        { episode: 21, chapter: 151, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 151,
          source: 'chapter',
          value: { it: 'Bruti', en: 'Wildlings' },
        },
      ],
    },
    'dalla': {
      role: { it: 'Moglie di Mance Rayder', en: 'Mance Rayder’s wife' },
      log: {
        it: 'È nella tenda di Mance Rayder, incinta, quando Jon Snow viene portato davanti al re.',
        en: 'She is in Mance Rayder’s tent, with child, when Jon Snow is brought before the king.',
      },
      status: [
        { episode: 21, chapter: 151, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 151,
          source: 'chapter',
          value: { it: 'Bruti', en: 'Wildlings' },
        },
      ],
    },
    'val': {
      role: { it: 'Sorella di Dalla', en: 'Dalla’s sister' },
      log: {
        it: 'È nella tenda di Mance Rayder con la sorella Dalla e con Jarl, il suo amante, quando Jon Snow viene portato davanti al re.',
        en: 'She is in Mance Rayder’s tent with her sister Dalla and Jarl, her lover, when Jon Snow is brought before the king.',
      },
      status: [
        { episode: 21, chapter: 151, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 151,
          source: 'chapter',
          value: { it: 'Bruti', en: 'Wildlings' },
        },
      ],
    },
    'jarl': {
      role: { it: 'Razziatore dei bruti', en: 'Wildling raider' },
      log: {
        it: 'È nella tenda di Mance Rayder quando Jon Snow viene portato davanti al re, e Mance lo presenta come l’amante di Val.',
        en: 'He is in Mance Rayder’s tent when Jon Snow is brought before the king, and Mance names him as Val’s lover.',
      },
      status: [
        { episode: 21, chapter: 151, source: 'chapter', value: 'alive' },
        // He falls to his death as his band climbs the Wall, in Jon IV
        // (chapter 174). Episode 26, where the show's climb is, only
        // orders it.
        { episode: 26, chapter: 174, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 151,
          source: 'chapter',
          value: { it: 'Bruti', en: 'Wildlings' },
        },
      ],
    },
    'small-paul': {
      role: {
        it: 'Confratello dei Guardiani della notte',
        en: 'Brother of the Night’s Watch',
      },
      log: {
        it: 'Va a caccia con Chett vicino al Pugno dei Primi Uomini ed è tra i confratelli che tramano con lui di disertare. Vuole per sé il corvo del lord comandante.',
        en: 'He hunts with Chett near the Fist of the First Men and is one of the brothers plotting with him to desert. He wants the Lord Commander’s raven for himself.',
      },
      status: [
        { episode: 21, chapter: 144, source: 'chapter', value: 'alive' },
        // An Other kills him in the snow as he carries Samwell Tarly, in
        // Samwell I (chapter 162). Episode 21 only orders it.
        { episode: 21, chapter: 162, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 144,
          source: 'chapter',
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'dirk': {
      role: [
        {
          episode: 21,
          chapter: 144,
          source: 'chapter',
          value: {
            it: 'Ranger dei Guardiani della notte',
            en: 'Ranger of the Night’s Watch',
          },
        },
        // He slits Craster's throat when the mutiny breaks out, in Samwell
        // II (chapter 177). Episode 24, where the show's mutiny is, only
        // orders it.
        {
          episode: 24,
          chapter: 177,
          source: 'chapter',
          value: {
            it: 'Ammutinato alla Fortezza di Craster',
            en: 'Mutineer at Craster’s Keep',
          },
        },
      ],
      log: {
        it: 'È tra i confratelli che tramano con Chett di uccidere il lord comandante e disertare.',
        en: 'He is one of the brothers plotting with Chett to kill the Lord Commander and desert.',
      },
      status: [
        { episode: 21, chapter: 144, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 144,
          source: 'chapter',
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'ollo-lophand': {
      role: [
        {
          episode: 21,
          chapter: 144,
          source: 'chapter',
          value: {
            it: 'Confratello dei Guardiani della notte',
            en: 'Brother of the Night’s Watch',
          },
        },
        // He stabs the Lord Commander when the mutiny breaks out, in Samwell
        // II (chapter 177). Episode 24 only orders it.
        {
          episode: 24,
          chapter: 177,
          source: 'chapter',
          value: {
            it: 'Ammutinato alla Fortezza di Craster',
            en: 'Mutineer at Craster’s Keep',
          },
        },
      ],
      log: {
        it: 'È tra i confratelli che tramano con Chett di disertare durante la spedizione oltre la Barriera.',
        en: 'He is one of the brothers plotting with Chett to desert on the ranging beyond the Wall.',
      },
      status: [
        { episode: 21, chapter: 144, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 144,
          source: 'chapter',
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'clubfoot-karl': {
      role: [
        {
          episode: 21,
          chapter: 144,
          source: 'chapter',
          value: {
            it: 'Attendente dei Guardiani della notte',
            en: 'Steward of the Night’s Watch',
          },
        },
        // Craster goes for him first when the mutiny breaks out, in Samwell
        // II (chapter 177). Episode 24 only orders it.
        {
          episode: 24,
          chapter: 177,
          source: 'chapter',
          value: {
            it: 'Ammutinato alla Fortezza di Craster',
            en: 'Mutineer at Craster’s Keep',
          },
        },
      ],
      log: {
        it: 'Chett lo conta tra i confratelli che diserteranno con lui.',
        en: 'Chett counts him among the brothers who will desert with him.',
      },
      status: [
        { episode: 21, chapter: 144, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 144,
          source: 'chapter',
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
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
