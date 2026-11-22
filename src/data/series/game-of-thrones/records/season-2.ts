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
    // #1466: Winterfell and the Iron Islands.
    //
    // Show: "The Night Lands" (episode 12), Theon calls himself "the only
    // living son of Balon Greyjoy" and meets his father at Pyke; Catelyn
    // names him in episode 11. Books: Theon I (site chapter 85), Aeron
    // brings Theon to Balon's castle and Balon receives him.
    {
      id: 'balon-greyjoy',
      kind: 'character',
      // Tyrion names him to Theon in "Cripples, Bastards, and Broken
      // Things" (episode 4), which Theon's season-1 story tells.
      nameSaidAt: 4,
      revealedAtEpisode: 12,
      revealedAtChapter: 85,
      name: { it: 'Balon Greyjoy', en: 'Balon Greyjoy' },
      summary: {
        it: 'Il lord delle Isole di Ferro, padre di Theon Greyjoy.',
        en: 'The lord of the Iron Islands, Theon Greyjoy’s father.',
      },
      visual: { art: 'balon-greyjoy', tint: 'ocher' },
    },
    // Show: "The Night Lands" (episode 12), Balon greets her as his
    // daughter and speaks of Yara by name. Books: Theon II (site chapter
    // 98), the woman Theon took for Esgred is his sister Asha. The show
    // calls her Yara and never Asha, and the books never say Yara, so an
    // episode reader gets the show's name (`episodeName`, past the last
    // chapter).
    {
      id: 'asha-greyjoy',
      kind: 'character',
      episodeName: {
        name: { it: 'Yara Greyjoy', en: 'Yara Greyjoy' },
        chapter: 345,
      },
      revealedAtEpisode: 12,
      revealedAtChapter: 98,
      name: { it: 'Asha Greyjoy', en: 'Asha Greyjoy' },
      summary: {
        it: 'La figlia di Balon Greyjoy, sorella maggiore di Theon.',
        en: 'Balon Greyjoy’s daughter, Theon’s elder sister.',
      },
      visual: { art: 'asha-greyjoy', tint: 'teal' },
    },
    // Books: Theon I (site chapter 85), the priest who meets Theon at
    // Lordsport is his uncle Aeron. The priest who baptises Theon in the
    // show's episode 13 is unnamed; the show's Aeron comes at the
    // kingsmoot of "The Door" (episode 55), the safe later pin ("Home",
    // episode 52, is likely).
    {
      id: 'aeron-greyjoy',
      kind: 'character',
      revealedAtEpisode: 55,
      revealedAtChapter: 85,
      name: { it: 'Aeron Greyjoy', en: 'Aeron Greyjoy' },
      summary: {
        it: 'Un sacerdote del Dio Abissale, fratello di Balon Greyjoy.',
        en: 'A priest of the Drowned God, a brother of Balon Greyjoy.',
      },
      visual: { art: 'aeron-greyjoy', tint: 'azure' },
    },
    // Books: Theon II (site chapter 98), he sits in Balon's solar when
    // Balon reveals his plan. The show never has him; episode 13 only
    // orders him.
    {
      id: 'victarion-greyjoy',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 13,
      revealedAtChapter: 98,
      name: { it: 'Victarion Greyjoy', en: 'Victarion Greyjoy' },
      summary: {
        it: 'Il fratello minore di Balon Greyjoy, un capitano degli uomini di ferro.',
        en: 'Balon Greyjoy’s younger brother, a captain of the ironborn.',
      },
      visual: { art: 'victarion-greyjoy', tint: 'blue' },
    },
    // Show: "The Ghost of Harrenhal" (episode 15), Theon asks who he is and
    // he introduces himself as the first mate. Books: Theon III (site
    // chapter 111), Theon lays out his plan to him aboard Foamdrinker.
    {
      id: 'dagmer',
      kind: 'character',
      revealedAtEpisode: 15,
      revealedAtChapter: 111,
      name: { it: 'Dagmer', en: 'Dagmer' },
      summary: {
        it: 'Un predone degli uomini di ferro che naviga con Theon Greyjoy.',
        en: 'An ironborn raider who sails with Theon Greyjoy.',
      },
      visual: { art: 'dagmer', tint: 'sand' },
    },
    // Books: Theon IV (site chapter 124), he and Urzen show Theon the
    // guards killed in the escape, the safe pin; Bran VI (120) has him in
    // the castle, an owner check. The show has him from episode 15, but no
    // line read says his name: the credits only, so he is the books' alone
    // (an owner check). Episode 17 only orders him.
    {
      id: 'black-lorren',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 17,
      revealedAtChapter: 124,
      name: { it: 'Black Lorren', en: 'Black Lorren' },
      summary: {
        it: 'Uno degli uomini di ferro che prendono Grande Inverno con Theon Greyjoy.',
        en: 'One of the ironborn who take Winterfell with Theon Greyjoy.',
      },
      visual: { art: 'black-lorren', tint: 'wine' },
    },
    // Books: Theon II (site chapter 98), Theon takes him as his squire in a
    // bargain for a horse. The show has a Wex at the speech of episode 20,
    // never named aloud; episode 13 only orders him.
    {
      id: 'wex-pyke',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 13,
      revealedAtChapter: 98,
      name: { it: 'Wex Pyke', en: 'Wex Pyke' },
      summary: {
        it: 'Un giovane degli uomini di ferro che diventa lo scudiero di Theon Greyjoy.',
        en: 'A young ironborn who becomes Theon Greyjoy’s squire.',
      },
      visual: { art: 'wex-pyke', tint: 'cyan' },
    },
    // Books: Theon IV (site chapter 124), Theon asks him whether the dogs
    // could be on the wrong wolves; Bran III (95) and Bran VI (120) have
    // him at Winterfell, owner checks. The show has him defy Theon in "The
    // Old Gods and the New" (episode 16), but no source read quotes his
    // name said: an owner check, so he is the books' alone, as Hallyne is.
    {
      id: 'farlen',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 16,
      revealedAtChapter: 124,
      name: { it: 'Farlen', en: 'Farlen' },
      summary: {
        it: 'Il maestro dei canili di Grande Inverno.',
        en: 'The kennelmaster of Winterfell.',
      },
      visual: { art: 'farlen', tint: 'orange' },
    },
    // Books: Bran III (site chapter 95), she and Jojen are greeted at the
    // harvest feast in their father's name. Show: "Dark Wings, Dark Words"
    // (episode 22), she and Jojen find Bran in the woods.
    {
      id: 'meera-reed',
      kind: 'character',
      revealedAtEpisode: 22,
      revealedAtChapter: 95,
      name: { it: 'Meera Reed', en: 'Meera Reed' },
      summary: {
        it: 'La figlia di Howland Reed, dei crannogmen dell’Incollatura.',
        en: 'Howland Reed’s daughter, of the crannogmen of the Neck.',
      },
      visual: { art: 'meera-reed', tint: 'green' },
    },
    // Books: Bran III (site chapter 95), he and Meera are greeted at the
    // harvest feast in their father's name. Show: "Dark Wings, Dark Words"
    // (episode 22), he comes to Bran in a dream, then in the woods.
    {
      id: 'jojen-reed',
      kind: 'character',
      revealedAtEpisode: 22,
      revealedAtChapter: 95,
      name: { it: 'Jojen Reed', en: 'Jojen Reed' },
      summary: {
        it: 'Il figlio di Howland Reed, dei crannogmen dell’Incollatura.',
        en: 'Howland Reed’s son, of the crannogmen of the Neck.',
      },
      visual: { art: 'jojen-reed', tint: 'acid' },
    },
    // Books: Theon VI (site chapter 140), the leader of the Dreadfort men
    // takes off his helm and names himself Ramsay Snow. From Bran V (109)
    // he is at Winterfell as the captive called Reek, an owner check.
    // Show: unnamed from episode 22; "The Lion and the Rose" (episode 32)
    // is the first episode the Game of Thrones Wiki cites for his name.
    {
      id: 'ramsay-snow',
      kind: 'character',
      revealedAtEpisode: 32,
      revealedAtChapter: 140,
      name: { it: 'Ramsay Snow', en: 'Ramsay Snow' },
      summary: {
        it: 'Il figlio bastardo di Roose Bolton.',
        en: 'Roose Bolton’s bastard son.',
      },
      visual: { art: 'ramsay-snow', tint: 'vermilion' },
    },
    // Books: Bran II (site chapter 90), he and Little Walder are at Bran's
    // audiences; Bran I (78) only tells of their coming. The show has no
    // Frey wards; episode 13 only orders him.
    {
      id: 'big-walder-frey',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 13,
      revealedAtChapter: 90,
      name: { it: 'Big Walder Frey', en: 'Big Walder Frey' },
      summary: {
        it: 'Un nipote di Walder Frey, mandato a Grande Inverno come pupillo.',
        en: 'A grandson of Walder Frey, sent to Winterfell as a ward.',
      },
      visual: { art: 'big-walder-frey', tint: 'lavender' },
    },
    // Books: Bran II (site chapter 90), as Big Walder.
    {
      id: 'little-walder-frey',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 13,
      revealedAtChapter: 90,
      name: { it: 'Little Walder Frey', en: 'Little Walder Frey' },
      summary: {
        it: 'Un altro nipote di Walder Frey, mandato a Grande Inverno come pupillo.',
        en: 'Another grandson of Walder Frey, sent to Winterfell as a ward.',
      },
      visual: { art: 'little-walder-frey', tint: 'violet' },
    },
    // Books: Bran II (site chapter 90), he comes to Winterfell for the
    // harvest feast with business for Bran. Show: "The Winds of Winter"
    // (episode 60), at Winterfell with the northern lords.
    {
      id: 'wyman-manderly',
      kind: 'character',
      // Wendel Manderly's season-1 story names his father: the books say
      // the name from Catelyn's landing at White Harbor (chapter 56), a
      // story the show never tells and orders at episode 29.
      nameSaidAt: 29,
      revealedAtEpisode: 60,
      revealedAtChapter: 90,
      name: { it: 'Wyman Manderly', en: 'Wyman Manderly' },
      summary: {
        it: 'Il lord di Porto Bianco, a capo di Casa Manderly.',
        en: 'The lord of White Harbor, head of House Manderly.',
      },
      visual: { art: 'wyman-manderly', tint: 'ice' },
    },
    // Books: Bran II (site chapter 90), widowed, she comes to Winterfell
    // for the harvest feast and fears for her lands. The show never has
    // her; episode 13 only orders her.
    {
      id: 'donella-hornwood',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 13,
      revealedAtChapter: 90,
      name: { it: 'Donella Hornwood', en: 'Donella Hornwood' },
      summary: {
        it: 'La signora di Hornwood, che ha perso in guerra il marito e il figlio.',
        en: 'The lady of the Hornwood, whose husband and son have died in the war.',
      },
      visual: { art: 'donella-hornwood', tint: 'ivory' },
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
    // #1466: Winterfell and the Iron Islands.
    'balon-greyjoy': {
      role: [
        {
          episode: 12,
          chapter: 85,
          value: {
            it: 'Lord delle Isole di Ferro',
            en: 'Lord of the Iron Islands',
          },
        },
        // He has crowned himself and claims the North: Theon tells the
        // people of Winterfell in "The Old Gods and the New" (episode 16);
        // the books' pin takes Bran VI (chapter 120), where Theon calls
        // himself a prince. Earlier chapters are an open check.
        {
          episode: 16,
          chapter: 120,
          value: {
            it: 'Re delle Isole di Ferro',
            en: 'King of the Iron Islands',
          },
        },
      ],
      log: {
        it: 'Theon torna a Pyke con l’offerta di alleanza di Robb Stark. Balon la rifiuta: vuole prendersi la corona con la forza.',
        en: 'Theon comes home to Pyke with Robb Stark’s offer of an alliance. Balon refuses it: he means to take his crown by force.',
      },
      status: [{ episode: 12, chapter: 85, value: 'alive' }],
      affiliation: [
        {
          episode: 12,
          chapter: 85,
          value: { it: 'Casa Greyjoy', en: 'House Greyjoy' },
        },
      ],
    },
    'asha-greyjoy': {
      role: { it: 'Capitana degli uomini di ferro', en: 'Ironborn captain' },
      log: {
        it: 'Incontra Theon al suo ritorno senza dirgli chi è, e cavalca con lui fino a Pyke. Lì il padre mostra di fidarsi più di lei che del figlio.',
        en: 'She meets Theon when he comes home without telling him who she is, and rides with him to Pyke. There their father shows he trusts her more than his son.',
      },
      status: [{ episode: 12, chapter: 98, value: 'alive' }],
      affiliation: [
        {
          episode: 12,
          chapter: 98,
          value: { it: 'Casa Greyjoy', en: 'House Greyjoy' },
        },
      ],
    },
    'aeron-greyjoy': {
      role: {
        it: 'Sacerdote del Dio Abissale',
        en: 'Priest of the Drowned God',
      },
      log: {
        it: 'Guida gli uomini di ferro nella fede del Dio Abissale.',
        en: 'He leads the ironborn in the faith of the Drowned God.',
      },
      status: [{ episode: 55, chapter: 85, value: 'alive' }],
      affiliation: [
        {
          episode: 55,
          chapter: 85,
          value: { it: 'Casa Greyjoy', en: 'House Greyjoy' },
        },
      ],
    },
    'victarion-greyjoy': {
      role: { it: 'Capitano degli uomini di ferro', en: 'Ironborn captain' },
      log: {
        it: 'È a Pyke quando Balon espone a Theon e ad Asha il suo piano per attaccare il Nord.',
        en: 'He is at Pyke when Balon lays out to Theon and Asha his plan to attack the North.',
      },
      status: [{ episode: 13, chapter: 98, source: 'chapter', value: 'alive' }],
      affiliation: [
        {
          episode: 13,
          chapter: 98,
          source: 'chapter',
          value: { it: 'Casa Greyjoy', en: 'House Greyjoy' },
        },
      ],
    },
    'dagmer': {
      role: { it: 'Predone degli uomini di ferro', en: 'Ironborn raider' },
      log: {
        it: 'Theon gli spiega il suo piano: colpire Piazza di Torrhen per attirare lontano dal castello i difensori di Grande Inverno.',
        en: 'Theon tells him his plan: to strike at Torrhen’s Square and draw the defenders of Winterfell away from the castle.',
      },
      status: [{ episode: 15, chapter: 111, value: 'alive' }],
      affiliation: [
        {
          episode: 15,
          chapter: 111,
          value: { it: 'Casa Greyjoy', en: 'House Greyjoy' },
        },
      ],
    },
    'black-lorren': {
      role: { it: 'Predone degli uomini di ferro', en: 'Ironborn raider' },
      log: {
        it: 'È tra gli uomini di Theon a Grande Inverno. Quando Bran e Rickon fuggono, trova i corpi delle guardie uccise.',
        en: 'He is among Theon’s men at Winterfell. When Bran and Rickon escape, he finds the guards killed in their flight.',
      },
      status: [
        { episode: 17, chapter: 124, source: 'chapter', value: 'alive' },
        // Killed in the sack of Winterfell: Bran finds his body among the
        // ironborn dead in Bran VII (chapter 143). Episode 20 only orders
        // it.
        { episode: 20, chapter: 143, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 17,
          chapter: 124,
          source: 'chapter',
          value: { it: 'Casa Greyjoy', en: 'House Greyjoy' },
        },
      ],
    },
    'wex-pyke': {
      role: { it: 'Scudiero di Theon Greyjoy', en: 'Squire of Theon Greyjoy' },
      log: {
        it: 'Theon lo prende come scudiero a Pyke, come parte del prezzo di un cavallo.',
        en: 'Theon takes him as his squire on Pyke, as part of the price of a horse.',
      },
      status: [{ episode: 13, chapter: 98, source: 'chapter', value: 'alive' }],
      affiliation: [
        {
          episode: 13,
          chapter: 98,
          source: 'chapter',
          value: { it: 'Casa Greyjoy', en: 'House Greyjoy' },
        },
      ],
    },
    'farlen': {
      role: {
        it: 'Maestro dei canili di Grande Inverno',
        en: 'Kennelmaster of Winterfell',
      },
      log: {
        it: 'Si occupa dei cani degli Stark. Quando Bran e Rickon fuggono, Theon gli fa guidare la caccia con i suoi cani.',
        en: 'He keeps the Starks’ hounds. When Bran and Rickon escape, Theon makes him lead the hunt with his dogs.',
      },
      status: [
        { episode: 16, chapter: 124, source: 'chapter', value: 'alive' },
        // Theon beheads him, blaming him for three deaths among the
        // ironborn: told in Theon V (chapter 130). Episode 18 only orders
        // it.
        { episode: 18, chapter: 130, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 16,
          chapter: 124,
          source: 'chapter',
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'meera-reed': {
      role: { it: 'Figlia di Howland Reed', en: 'Daughter of Howland Reed' },
      log: {
        it: 'Con il fratello Jojen raggiunge Bran Stark e resta al suo fianco.',
        en: 'With her brother Jojen she comes to Bran Stark and stays at his side.',
      },
      status: [{ episode: 22, chapter: 95, value: 'alive' }],
      affiliation: [
        {
          episode: 22,
          chapter: 95,
          value: { it: 'Casa Reed', en: 'House Reed' },
        },
      ],
    },
    'jojen-reed': {
      role: { it: 'Figlio di Howland Reed', en: 'Son of Howland Reed' },
      log: {
        it: 'Con la sorella Meera raggiunge Bran Stark e resta al suo fianco.',
        en: 'With his sister Meera he comes to Bran Stark and stays at his side.',
      },
      status: [{ episode: 22, chapter: 95, value: 'alive' }],
      affiliation: [
        {
          episode: 22,
          chapter: 95,
          value: { it: 'Casa Reed', en: 'House Reed' },
        },
      ],
    },
    'ramsay-snow': {
      role: { it: 'Bastardo di Roose Bolton', en: 'Bastard of Roose Bolton' },
      log: {
        it: 'I suoi uomini tolgono Grande Inverno agli uomini di ferro e la danno alle fiamme.',
        en: 'His men take Winterfell from the ironborn and set it on fire.',
      },
      status: [{ episode: 32, chapter: 140, value: 'alive' }],
      affiliation: [
        {
          episode: 32,
          chapter: 140,
          value: { it: 'Casa Bolton', en: 'House Bolton' },
        },
      ],
    },
    'big-walder-frey': {
      role: { it: 'Pupillo a Grande Inverno', en: 'Ward at Winterfell' },
      log: {
        it: 'Lui e il cugino Little Walder sono pupilli a Grande Inverno, secondo il patto tra Robb Stark e lord Walder Frey.',
        en: 'He and his cousin Little Walder are wards at Winterfell, under the pact between Robb Stark and Lord Walder Frey.',
      },
      status: [{ episode: 13, chapter: 90, source: 'chapter', value: 'alive' }],
      affiliation: [
        {
          episode: 13,
          chapter: 90,
          source: 'chapter',
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
    },
    'little-walder-frey': {
      role: { it: 'Pupillo a Grande Inverno', en: 'Ward at Winterfell' },
      log: {
        it: 'Lui e il cugino Big Walder sono pupilli a Grande Inverno, secondo il patto tra Robb Stark e lord Walder Frey.',
        en: 'He and his cousin Big Walder are wards at Winterfell, under the pact between Robb Stark and Lord Walder Frey.',
      },
      status: [{ episode: 13, chapter: 90, source: 'chapter', value: 'alive' }],
      affiliation: [
        {
          episode: 13,
          chapter: 90,
          source: 'chapter',
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
    },
    'wyman-manderly': {
      role: { it: 'Lord di Porto Bianco', en: 'Lord of White Harbor' },
      log: {
        it: 'Va a Grande Inverno per incontrare lo Stark che la tiene, e gli offre il suo sostegno.',
        en: 'He travels to Winterfell to meet the Stark who holds it, and offers his support.',
      },
      status: [{ episode: 60, chapter: 90, value: 'alive' }],
      affiliation: [
        {
          episode: 60,
          chapter: 90,
          value: { it: 'Casa Manderly', en: 'House Manderly' },
        },
      ],
    },
    'donella-hornwood': {
      role: { it: 'Signora di Hornwood', en: 'Lady of the Hornwood' },
      log: {
        it: 'Alla festa del raccolto di Grande Inverno dice a Bran che teme che il bastardo di Roose Bolton voglia prendersi le sue terre.',
        en: 'At the harvest feast in Winterfell she tells Bran she fears that Roose Bolton’s bastard means to seize her lands.',
      },
      status: [
        { episode: 13, chapter: 90, source: 'chapter', value: 'alive' },
        // The Bolton bastard takes her by force as his wife: told in Bran IV
        // (chapter 102). Episode 14 only orders it.
        { episode: 14, chapter: 102, source: 'chapter', value: 'captured' },
        // Ser Rodrik comes back with a prisoner held for her murder: Bran V
        // (chapter 109). Episode 15 only orders it.
        { episode: 15, chapter: 109, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 13,
          chapter: 90,
          source: 'chapter',
          value: { it: 'Casa Hornwood', en: 'House Hornwood' },
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
