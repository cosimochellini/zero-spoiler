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
    // #1635: Robb's war and the Riverlands.
    'jeyne-westerling': {
      role: { it: 'Moglie di Robb Stark', en: 'Robb Stark’s wife' },
      log: {
        it: 'Ha curato Robb Stark dalla ferita che lui ha preso espugnando il Crag, il castello della sua famiglia, e lo ha consolato la notte in cui lui ha saputo della morte dei fratelli. Robb l’ha sposata il mattino dopo, rompendo la promessa di sposare una Frey.',
        en: 'She nursed Robb Stark through the wound he took storming the Crag, her family’s castle, and comforted him the night he heard his brothers were dead. Robb married her the next morning, breaking his promise to marry a Frey.',
      },
      status: [
        { episode: 23, chapter: 158, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 23,
          chapter: 158,
          source: 'chapter',
          value: { it: 'Casa Westerling', en: 'House Westerling' },
        },
      ],
    },
    'rolph-spicer': {
      role: { it: 'Zio di Jeyne Westerling', en: 'Jeyne Westerling’s uncle' },
      log: {
        it: 'Arriva a Delta delle Acque al seguito di Robb Stark, con la sorella lady Sybell e i figli di lei. Vento Grigio ringhia ogni volta che lui si avvicina, e Catelyn Stark convince Robb ad allontanarlo con un incarico.',
        en: 'He comes to Riverrun in Robb Stark’s company with his sister, Lady Sybell, and her children. Grey Wind growls whenever he comes near, and Catelyn Stark persuades Robb to send him away on an errand.',
      },
      status: [
        { episode: 23, chapter: 158, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 23,
          chapter: 158,
          source: 'chapter',
          value: { it: 'Casa Spicer', en: 'House Spicer' },
        },
      ],
    },
    'raynald-westerling': {
      role: [
        {
          episode: 23,
          chapter: 158,
          source: 'chapter',
          value: {
            it: 'Fratello di Jeyne Westerling',
            en: 'Jeyne Westerling’s brother',
          },
        },
        // He alone of the Westerlings rides to the Twins with Robb, and
        // bears his banner there, in Catelyn VI (chapter 193).
        {
          episode: 29,
          chapter: 193,
          source: 'chapter',
          value: {
            it: 'Portastendardo di Robb Stark',
            en: 'Robb Stark’s banner-bearer',
          },
        },
      ],
      log: {
        it: 'Cavalca con Robb Stark, che ha sposato sua sorella Jeyne, e arriva con lui a Delta delle Acque insieme alla madre e alle sorelle.',
        en: 'He rides with Robb Stark, who has married his sister Jeyne, and comes with him to Riverrun with his mother and sisters.',
      },
      status: [
        { episode: 23, chapter: 158, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 23,
          chapter: 158,
          source: 'chapter',
          value: { it: 'Casa Westerling', en: 'House Westerling' },
        },
      ],
    },
    'willem-lannister': {
      role: {
        it: 'Scudiero di Casa Lannister',
        en: 'Squire of House Lannister',
      },
      log: {
        it: 'È prigioniero nelle celle di Delta delle Acque, insieme a un altro ragazzo della sua famiglia.',
        en: 'He is a prisoner in the cells of Riverrun, together with another boy of his family.',
      },
      status: [
        // Show only: Edmure's men took him at the fords, and he is a
        // hostage at Riverrun when his record opens. The books' record opens
        // on his body; chapter 164 only orders the entry.
        { episode: 23, chapter: 164, source: 'episode', value: 'captured' },
        // Rickard Karstark and his men kill him in his cell, in "Kissed by
        // Fire" (episode 25) and Catelyn III (chapter 164), the chapter that
        // first names him, so the books' record opens dead.
        { episode: 25, chapter: 164, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 23,
          chapter: 164,
          value: { it: 'Casa Lannister', en: 'House Lannister' },
        },
      ],
    },
    'martyn-lannister': {
      role: {
        it: 'Scudiero di Casa Lannister',
        en: 'Squire of House Lannister',
      },
      log: {
        it: 'Lui e il fratello Willem sono stati catturati quando gli uomini di Edmure Tully hanno respinto i Lannister ai guadi. Talisa gli medica la mano nella sua cella a Delta delle Acque.',
        en: 'He and his brother Willem were taken prisoner when Edmure Tully’s men drove back the Lannisters at the fords. Talisa tends his hand in his cell at Riverrun.',
      },
      status: [
        { episode: 23, chapter: 164, source: 'episode', value: 'captured' },
        // Rickard Karstark stabs him in his cell, in "Kissed by Fire"
        // (episode 25). The books' Martyn lives; chapter 164 only orders it.
        { episode: 25, chapter: 164, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 23,
          chapter: 164,
          source: 'episode',
          value: { it: 'Casa Lannister', en: 'House Lannister' },
        },
      ],
    },
    'lothar-frey': {
      role: { it: 'Figlio di lord Walder Frey', en: 'Son of Lord Walder Frey' },
      log: {
        it: 'Lui e il fratellastro Walder Rivers portano a Delta delle Acque le condizioni del padre per una nuova alleanza con Robb Stark: delle scuse, e le nozze tra Edmure Tully e una delle figlie di lord Walder.',
        en: 'He and his half-brother Walder Rivers bring his father’s terms for a new alliance with Robb Stark to Riverrun: an apology, and a marriage between Edmure Tully and one of Lord Walder’s daughters.',
      },
      status: [
        { episode: 60, chapter: 179, source: 'chapter', value: 'alive' },
        // Arya kills him and bakes him into a pie, in "The Winds of Winter"
        // (episode 60), the episode that first names him, so the show record
        // opens dead. The books leave him alive; chapter 344, their last,
        // only orders it.
        { episode: 60, chapter: 344, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 60,
          chapter: 179,
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
    },
    'walder-rivers': {
      role: { it: 'Figlio di lord Walder Frey', en: 'Son of Lord Walder Frey' },
      log: {
        it: 'Arriva a Delta delle Acque con il fratellastro Lothar per portare a Robb Stark le condizioni di lord Walder Frey, e le espone senza giri di parole.',
        en: 'He comes to Riverrun with his half-brother Lothar to carry Lord Walder Frey’s terms to Robb Stark, and states them bluntly.',
      },
      status: [
        { episode: 60, chapter: 179, source: 'chapter', value: 'alive' },
        // Arya kills him with Lothar, in "The Winds of Winter" (episode 60),
        // the episode that first names him, so the show record opens dead.
        // The books leave him alive; chapter 344 only orders it.
        { episode: 60, chapter: 344, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 60,
          chapter: 179,
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
    },
    'roslin-frey': {
      role: {
        it: 'Figlia di lord Walder Frey',
        en: 'Daughter of Lord Walder Frey',
      },
      log: {
        it: 'Il padre la dà in sposa a Edmure Tully per ricucire l’alleanza con Robb Stark. Non ha mai visto lo sposo prima che lui arrivi alle Torri Gemelle per le nozze.',
        en: 'Her father gives her in marriage to Edmure Tully to restore his alliance with Robb Stark. She has never seen her bridegroom before he comes to the Twins for the wedding.',
      },
      status: [{ episode: 29, chapter: 193, value: 'alive' }],
      affiliation: [
        {
          episode: 29,
          chapter: 193,
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
    },
    'ryman-frey': {
      role: {
        it: 'Nipote di lord Walder Frey',
        en: 'Lord Walder Frey’s grandson',
      },
      log: {
        it: 'Esce dalle Torri Gemelle con tre dei suoi figli per accogliere l’esercito di Robb Stark, che arriva per le nozze di Edmure Tully.',
        en: 'He rides out from the Twins with three of his sons to meet Robb Stark’s host as it arrives for Edmure Tully’s wedding.',
      },
      status: [
        { episode: 29, chapter: 193, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 29,
          chapter: 193,
          source: 'chapter',
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
    },
    'aegon-frey': {
      role: {
        it: 'Nipote di lord Walder Frey',
        en: 'Lord Walder Frey’s grandson',
      },
      log: {
        it: 'È nella sala del nonno quando Robb Stark arriva alle Torri Gemelle per chiedere perdono a lord Walder.',
        en: 'He is in his grandfather’s hall when Robb Stark comes to the Twins to beg Lord Walder’s pardon.',
      },
      status: [
        { episode: 29, chapter: 193, source: 'chapter', value: 'alive' },
        // Catelyn holds a knife to his throat to bargain for Robb's life,
        // and cuts it when Robb is killed, in Catelyn VII (chapter 195).
        { episode: 29, chapter: 195, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 29,
          chapter: 193,
          source: 'chapter',
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
    },
  },
  entries: [
    // #1635: Robb's war and the Riverlands.
    //
    // Books only: Catelyn II (site chapter 158), Robb introduces her at
    // Riverrun as his lady wife. The show gives Robb Talisa instead;
    // episode 23, where he comes to Riverrun with his wife, only orders her.
    {
      id: 'jeyne-westerling',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 23,
      revealedAtChapter: 158,
      name: { it: 'Jeyne Westerling', en: 'Jeyne Westerling' },
      summary: {
        it: 'Una giovane nobile di Casa Westerling, la moglie di Robb Stark.',
        en: 'A young lady of House Westerling, Robb Stark’s wife.',
      },
      visual: { art: 'jeyne-westerling', tint: 'flamingo' },
    },
    // Books only: Catelyn II (site chapter 158), Robb introduces him to his
    // mother with Lady Sybell and her children. The show has no Westerlings;
    // episode 23 only orders him.
    {
      id: 'rolph-spicer',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 23,
      revealedAtChapter: 158,
      name: { it: 'Rolph Spicer', en: 'Rolph Spicer' },
      summary: {
        it: 'Un cavaliere di Casa Spicer, zio di Jeyne Westerling.',
        en: 'A knight of House Spicer, Jeyne Westerling’s uncle.',
      },
      visual: { art: 'rolph-spicer', tint: 'sand' },
    },
    // Books only: Catelyn II (site chapter 158), in the same introduction as
    // his sister Jeyne. Episode 23 only orders him.
    {
      id: 'raynald-westerling',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 23,
      revealedAtChapter: 158,
      name: { it: 'Raynald Westerling', en: 'Raynald Westerling' },
      summary: {
        it: 'Un cavaliere di Casa Westerling, fratello di Jeyne Westerling.',
        en: 'A knight of House Westerling, Jeyne Westerling’s brother.',
      },
      visual: { art: 'raynald-westerling', tint: 'azure' },
    },
    // Show: "Walk of Punishment" (episode 23), Edmure names the hostages he
    // took, "Willem Lannister, Martyn Lannister". Books: Catelyn III (site
    // chapter 164), his body and Tion Frey's are laid before Robb; earlier
    // books only mention him, so the books' record opens dead.
    {
      id: 'willem-lannister',
      kind: 'character',
      revealedAtEpisode: 23,
      revealedAtChapter: 164,
      name: { it: 'Willem Lannister', en: 'Willem Lannister' },
      summary: {
        it: 'Un giovane scudiero di Casa Lannister, prigioniero a Delta delle Acque.',
        en: 'A young squire of House Lannister, held prisoner at Riverrun.',
      },
      visual: { art: 'willem-lannister', tint: 'ivory' },
    },
    // Show only: "Walk of Punishment" (episode 23), in the same line as his
    // brother Willem. The books' Martyn is only mentioned, a captive at
    // Riverrun who is exchanged and never seen; chapter 164 only orders him.
    {
      id: 'martyn-lannister',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 23,
      revealedAtChapter: 164,
      name: { it: 'Martyn Lannister', en: 'Martyn Lannister' },
      summary: {
        it: 'Un giovane scudiero di Casa Lannister, prigioniero a Delta delle Acque con il fratello Willem.',
        en: 'A young squire of House Lannister, held prisoner at Riverrun with his brother Willem.',
      },
      visual: { art: 'martyn-lannister', tint: 'yellow' },
    },
    // Books: Catelyn IV (site chapter 179), he and Walder Rivers come to
    // Riverrun with Lord Walder's terms, and Robb asks him to help launch
    // Lord Hoster's funeral boat. Show: "The Winds of Winter" (episode 60),
    // Lord Walder asks where "Black Walder and Lothar" are; "The Climb"
    // (episode 26) and "The Rains of Castamere" name him only in narration
    // (owner check). He dies in episode 60, so the show record opens dead.
    {
      id: 'lothar-frey',
      kind: 'character',
      revealedAtEpisode: 60,
      revealedAtChapter: 179,
      name: { it: 'Lothar Frey', en: 'Lothar Frey' },
      summary: {
        it: 'Uno dei figli di lord Walder Frey, che parla a nome del padre nelle trattative con Robb Stark.',
        en: 'One of Lord Walder Frey’s sons, who speaks for his father in his dealings with Robb Stark.',
      },
      visual: { art: 'lothar-frey', tint: 'teal' },
    },
    // Books: Catelyn IV (site chapter 179), he comes to Riverrun with his
    // half-brother Lothar. Show: "The Winds of Winter" (episode 60), in the
    // same line, as "Black Walder", the show's name for him (it joins him
    // with the books' Black Walder Frey, a grandson of Lord Walder);
    // episodes 26 and 29 name him only in narration (owner check). He dies
    // in episode 60, so the show record opens dead.
    {
      id: 'walder-rivers',
      kind: 'character',
      revealedAtEpisode: 60,
      revealedAtChapter: 179,
      name: { it: 'Walder Rivers', en: 'Walder Rivers' },
      summary: {
        it: 'Uno dei figli di lord Walder Frey, mandato a Delta delle Acque con il fratellastro Lothar.',
        en: 'One of Lord Walder Frey’s sons, sent to Riverrun with his half-brother Lothar.',
      },
      visual: { art: 'walder-rivers', tint: 'violet' },
    },
    // Show: "The Rains of Castamere" (episode 29), Edmure is introduced to
    // his bride at the wedding; Lothar names her in "The Climb" (episode
    // 26), before she is seen (owner check). Books: Catelyn VI (site chapter
    // 193), Lord Walder has her brought out to meet Edmure; Catelyn IV (179)
    // names her in Lord Walder's terms (owner check).
    {
      id: 'roslin-frey',
      kind: 'character',
      revealedAtEpisode: 29,
      revealedAtChapter: 193,
      name: { it: 'Roslin Frey', en: 'Roslin Frey' },
      summary: {
        it: 'Una figlia di lord Walder Frey, promessa in sposa a Edmure Tully.',
        en: 'A daughter of Lord Walder Frey, promised in marriage to Edmure Tully.',
      },
      visual: { art: 'roslin-frey', tint: 'lavender' },
    },
    // Books only: Catelyn VI (site chapter 193), he leads the party that
    // rides out from the Twins to meet Robb's host. A Clash of Kings only
    // mentions him. The show has no Ryman; episode 29 only orders him.
    {
      id: 'ryman-frey',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 29,
      revealedAtChapter: 193,
      name: { it: 'Ryman Frey', en: 'Ryman Frey' },
      summary: {
        it: 'Un nipote di lord Walder Frey, il figlio maggiore di ser Stevron.',
        en: 'A grandson of Lord Walder Frey, Ser Stevron’s eldest son.',
      },
      visual: { art: 'ryman-frey', tint: 'orange' },
    },
    // Books only: Catelyn VI (site chapter 193), he is in Lord Walder's
    // hall when Robb comes to apologise. A Clash of Kings only mentions him.
    // The show gives his part at the wedding to Lord Walder's wife;
    // episode 29 only orders him.
    {
      id: 'aegon-frey',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 29,
      revealedAtChapter: 193,
      name: { it: 'Aegon Frey', en: 'Aegon Frey' },
      summary: {
        it: 'Un nipote di lord Walder Frey, detto Campanello, che fa da giullare alle Torri Gemelle.',
        en: 'A grandson of Lord Walder Frey, called Jinglebell, who plays the fool at the Twins.',
      },
      visual: { art: 'aegon-frey', tint: 'acid' },
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
