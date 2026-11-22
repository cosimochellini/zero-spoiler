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
    // #1464: Stannis, Renly and the stormlands.
    //
    // Show: "The North Remembers" (episode 11), Jaime tells Robb that if
    // Joffrey is a bastard, "Stannis is the rightful King", in the episode
    // that opens on Stannis's Dragonstone. Books: the prologue (site chapter
    // 74), Selyse tells him Renly's army would join him if Renly died. The
    // show says his name from "You Win or You Die" (episode 7), where
    // Eddard sends him a letter, so season 1's texts may name him there.
    {
      id: 'stannis-baratheon',
      kind: 'character',
      revealedAtEpisode: 11,
      revealedAtChapter: 74,
      nameSaidAt: 7,
      name: { it: 'Stannis Baratheon', en: 'Stannis Baratheon' },
      summary: {
        it: 'Il maggiore dei fratelli di re Robert, signore di Roccia del Drago.',
        en: 'The elder of King Robert’s brothers, lord of Dragonstone.',
      },
      visual: { art: 'stannis-baratheon', tint: 'yellow' },
    },
    // Show: "The North Remembers" (episode 11), she burns the Seven on
    // Dragonstone; no quote on the wiki has her name said (an open check).
    // Books: the prologue (site chapter 74), Selyse says that Melisandre has
    // seen Renly dead in the flames.
    {
      id: 'melisandre',
      kind: 'character',
      revealedAtEpisode: 11,
      revealedAtChapter: 74,
      name: { it: 'Melisandre', en: 'Melisandre' },
      summary: {
        it: 'Una sacerdotessa rossa del Signore della Luce, al fianco di Stannis Baratheon.',
        en: 'A red priestess of the Lord of Light, at Stannis Baratheon’s side.',
      },
      visual: { art: 'melisandre', tint: 'red' },
    },
    // Show: "The North Remembers" (episode 11), Cressen asks him to help
    // turn Stannis from the red priestess. Books: the prologue (site chapter
    // 74), Pylos tells Cressen that Ser Davos Seaworth came back in the night.
    {
      id: 'davos-seaworth',
      kind: 'character',
      revealedAtEpisode: 11,
      revealedAtChapter: 74,
      name: { it: 'Davos Seaworth', en: 'Davos Seaworth' },
      summary: {
        it: 'Un cavaliere di umili origini al servizio di Stannis Baratheon.',
        en: 'A knight of humble birth in Stannis Baratheon’s service.',
      },
      visual: { art: 'davos-seaworth', tint: 'sand' },
    },
    // Show: "The North Remembers" (episode 11), he interrupts the burning of
    // the Seven and dies of the poison he meant for Melisandre. Books: the
    // prologue (site chapter 74), his own chapter, where Stannis hands his
    // duties to Pylos. Both open on his death, as Will's does.
    {
      id: 'cressen',
      kind: 'character',
      revealedAtEpisode: 11,
      revealedAtChapter: 74,
      name: { it: 'Cressen', en: 'Cressen' },
      summary: {
        it: 'Il vecchio maestro di Roccia del Drago.',
        en: 'The old maester of Dragonstone.',
      },
      visual: { art: 'cressen', tint: 'ivory' },
    },
    // Show: "The North Remembers" (episode 11), he reads Stannis's letter at
    // the Painted Table; no quote has his name said (an owner check). Books:
    // Davos I only mentions him; he is on the Black Betha in Davos III (site
    // chapter 132), the chapter that tells his death.
    {
      id: 'matthos-seaworth',
      kind: 'character',
      revealedAtEpisode: 11,
      revealedAtChapter: 132,
      name: { it: 'Matthos Seaworth', en: 'Matthos Seaworth' },
      summary: {
        it: 'Un figlio di Davos Seaworth.',
        en: 'A son of Davos Seaworth.',
      },
      visual: { art: 'matthos-seaworth', tint: 'teal' },
    },
    // Show: "The Night Lands" (episode 12), Davos tells Stannis he has won
    // Salladhor's ships. Books: Davos I (site chapter 84), Davos finds him
    // at an inn in the port; the prologue lists him at the feast in
    // narration only (an owner check).
    {
      id: 'salladhor-saan',
      kind: 'character',
      revealedAtEpisode: 12,
      revealedAtChapter: 84,
      name: { it: 'Salladhor Saan', en: 'Salladhor Saan' },
      summary: {
        it: 'Un pirata di Lys, vecchio amico di Davos Seaworth.',
        en: 'A pirate from Lys, an old friend of Davos Seaworth.',
      },
      visual: { art: 'salladhor-saan', tint: 'orange' },
    },
    // Books: the prologue (site chapter 74), she comes to argue with Stannis
    // in front of Cressen. The show has her silent and unnamed in episode 11
    // and first names her in "Kissed by Fire" (episode 25), when Stannis
    // visits her: that later threshold stands (#852).
    {
      id: 'selyse-baratheon',
      kind: 'character',
      revealedAtEpisode: 25,
      revealedAtChapter: 74,
      name: { it: 'Selyse Baratheon', en: 'Selyse Baratheon' },
      summary: {
        it: 'La moglie di Stannis Baratheon.',
        en: 'Stannis Baratheon’s wife.',
      },
      visual: { art: 'selyse-baratheon', tint: 'wine' },
    },
    // Books: the prologue (site chapter 74), Pylos tells Cressen that
    // Princess Shireen wants to see the white raven. The show first has her
    // in "Kissed by Fire" (episode 25), when her father visits her.
    {
      id: 'shireen-baratheon',
      kind: 'character',
      revealedAtEpisode: 25,
      revealedAtChapter: 74,
      name: { it: 'Shireen Baratheon', en: 'Shireen Baratheon' },
      summary: {
        it: 'L’unica figlia di Stannis Baratheon.',
        en: 'Stannis Baratheon’s only daughter.',
      },
      visual: { art: 'shireen-baratheon', tint: 'lavender' },
    },
    // Show: "What Is Dead May Never Die" (episode 13), she tells Catelyn to
    // call her just "Brienne". Books: Catelyn II (site chapter 96), Ser
    // Colen tells Catelyn the champion is Brienne of Tarth.
    {
      id: 'brienne-of-tarth',
      kind: 'character',
      revealedAtEpisode: 13,
      revealedAtChapter: 96,
      name: { it: 'Brienne di Tarth', en: 'Brienne of Tarth' },
      summary: {
        it: 'Una donna guerriero, figlia del lord di Tarth.',
        en: 'A woman warrior, the daughter of the lord of Tarth.',
      },
      visual: { art: 'brienne-of-tarth', tint: 'blue' },
    },
    // Show: "What Is Dead May Never Die" (episode 13), Renly introduces his
    // new wife to Catelyn. Books: Catelyn II (site chapter 96), the same
    // introduction at Bitterbridge.
    {
      id: 'margaery-tyrell',
      kind: 'character',
      revealedAtEpisode: 13,
      revealedAtChapter: 96,
      name: { it: 'Margaery Tyrell', en: 'Margaery Tyrell' },
      summary: {
        it: 'Una giovane nobildonna di Casa Tyrell, sorella di Loras Tyrell.',
        en: 'A young noblewoman of House Tyrell, Loras Tyrell’s sister.',
      },
      visual: { art: 'margaery-tyrell', tint: 'green' },
    },
    // Books: Sansa VIII (site chapter 139), he is presented to Joffrey with
    // his sons among the heroes of the Blackwater; earlier chapters only
    // mention him. The show first has him in "The Lion and the Rose"
    // (episode 32), at Joffrey's wedding: that later threshold stands.
    {
      id: 'mace-tyrell',
      kind: 'character',
      revealedAtEpisode: 32,
      revealedAtChapter: 139,
      name: { it: 'Mace Tyrell', en: 'Mace Tyrell' },
      summary: {
        it: 'Il lord di Alto Giardino, a capo di Casa Tyrell.',
        en: 'The lord of Highgarden and head of House Tyrell.',
      },
      visual: { art: 'mace-tyrell', tint: 'acid' },
    },
    // Books only: Davos II (site chapter 116), he rides out of Storm's End
    // to parley with Stannis; Catelyn II and III only mention him. The show
    // skips the siege; episode 14 only orders him.
    {
      id: 'cortnay-penrose',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 14,
      revealedAtChapter: 116,
      name: { it: 'Cortnay Penrose', en: 'Cortnay Penrose' },
      summary: {
        it: 'Il castellano di Capo Tempesta.',
        en: 'The castellan of Storm’s End.',
      },
      visual: { art: 'cortnay-penrose', tint: 'ocher' },
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
    // #1464: Stannis, Renly and the stormlands.
    'stannis-baratheon': {
      role: {
        it: 'Pretendente al Trono di Spade',
        en: 'Claimant to the Iron Throne',
      },
      log: {
        it: 'Da Roccia del Drago rivendica il Trono di Spade come erede di Robert, ma pochi lord si schierano con lui. La sacerdotessa rossa Melisandre ha la sua fiducia.',
        en: 'From Dragonstone he claims the Iron Throne as Robert’s heir, but few lords stand with him. The red priestess Melisandre has his ear.',
      },
      status: [{ episode: 11, chapter: 74, value: 'alive' }],
      affiliation: [
        {
          episode: 11,
          chapter: 74,
          value: { it: 'Casa Baratheon', en: 'House Baratheon' },
        },
      ],
    },
    'melisandre': {
      role: { it: 'Sacerdotessa rossa', en: 'Red priestess' },
      log: {
        it: 'Viene dall’oriente e serve il Signore della Luce. A Roccia del Drago si è guadagnata un posto accanto a Stannis Baratheon.',
        en: 'She comes from the east and serves the Lord of Light. On Dragonstone she has won a place at Stannis Baratheon’s side.',
      },
      status: [{ episode: 11, chapter: 74, value: 'alive' }],
      affiliation: [
        {
          episode: 11,
          chapter: 74,
          value: { it: 'Preti rossi', en: 'Red priests' },
        },
      ],
    },
    'davos-seaworth': {
      role: [
        {
          episode: 11,
          chapter: 74,
          value: {
            it: 'Cavaliere al servizio di re Stannis',
            en: 'Knight in King Stannis’s service',
          },
        },
        // Show only: in "The Ghost of Harrenhal" (episode 15) Stannis gives
        // him command of the fleet. The books give it to Imry Florent, so
        // chapter 107 only orders it.
        {
          episode: 15,
          chapter: 107,
          source: 'episode',
          value: {
            it: 'Comandante della flotta di re Stannis',
            en: 'Commander of King Stannis’s fleet',
          },
        },
      ],
      log: {
        it: 'È tra gli uomini più fidati di Stannis Baratheon, e uno dei pochi che gli parlano con franchezza.',
        en: 'He is one of Stannis Baratheon’s most trusted men, and one of the few who speak plainly to him.',
      },
      status: [
        { episode: 11, chapter: 74, value: 'alive' },
        // His ship burns in the wildfire on the Blackwater and he goes into
        // the water: "Blackwater" (episode 19) and Davos III (chapter 132).
        // Neither stage tells whether he lives.
        { episode: 19, chapter: 132, value: 'missing' },
      ],
      affiliation: [
        {
          episode: 11,
          chapter: 74,
          value: { it: 'Casa Seaworth', en: 'House Seaworth' },
        },
      ],
    },
    'cressen': {
      role: { it: 'Maestro di Roccia del Drago', en: 'Maester of Dragonstone' },
      log: {
        it: 'Teme l’influenza della sacerdotessa rossa su Stannis Baratheon. Cerca di avvelenarla, ma muore lui del veleno.',
        en: 'He fears the red priestess’s hold over Stannis Baratheon. He tries to poison her, and dies of the poison himself.',
      },
      status: [{ episode: 11, chapter: 74, value: 'deceased' }],
      affiliation: [
        {
          episode: 11,
          chapter: 74,
          value: { it: 'Casa Baratheon', en: 'House Baratheon' },
        },
      ],
    },
    'matthos-seaworth': {
      role: { it: 'Figlio di Davos Seaworth', en: 'Son of Davos Seaworth' },
      log: {
        it: 'Serve re Stannis accanto al padre, Davos Seaworth.',
        en: 'He serves King Stannis alongside his father, Davos Seaworth.',
      },
      status: [
        { episode: 11, chapter: 132, value: 'alive' },
        // Killed on his father's ship by the wildfire on the Blackwater:
        // "Blackwater" (episode 19), and Davos III (chapter 132), the
        // chapter his book record opens in.
        { episode: 19, chapter: 132, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 11,
          chapter: 132,
          value: { it: 'Casa Seaworth', en: 'House Seaworth' },
        },
      ],
    },
    'salladhor-saan': {
      role: { it: 'Pirata di Lys', en: 'Pirate from Lys' },
      log: {
        it: 'Vecchio amico di Davos Seaworth, presta le sue navi a re Stannis in cambio della promessa di oro.',
        en: 'An old friend of Davos Seaworth, he lends his ships to King Stannis for the promise of gold.',
      },
      status: [{ episode: 12, chapter: 84, value: 'alive' }],
      affiliation: [
        {
          episode: 12,
          chapter: 84,
          value: {
            it: 'Flotta di Stannis Baratheon',
            en: 'Stannis Baratheon’s fleet',
          },
        },
      ],
    },
    'selyse-baratheon': {
      role: {
        it: 'Regina, moglie di Stannis Baratheon',
        en: 'Queen, wife of Stannis Baratheon',
      },
      log: {
        it: 'È una fervente seguace del Signore della Luce.',
        en: 'She is a fervent follower of the Lord of Light.',
      },
      status: [{ episode: 25, chapter: 74, value: 'alive' }],
      affiliation: [
        {
          episode: 25,
          chapter: 74,
          value: { it: 'Casa Baratheon', en: 'House Baratheon' },
        },
      ],
    },
    'shireen-baratheon': {
      role: {
        it: 'Principessa, figlia di Stannis Baratheon',
        en: 'Princess, daughter of Stannis Baratheon',
      },
      log: {
        it: 'Il morbo grigio le ha segnato il viso quando era piccola. Vive a Roccia del Drago.',
        en: 'Greyscale scarred her face when she was small. She lives on Dragonstone.',
      },
      status: [{ episode: 25, chapter: 74, value: 'alive' }],
      affiliation: [
        {
          episode: 25,
          chapter: 74,
          value: { it: 'Casa Baratheon', en: 'House Baratheon' },
        },
      ],
    },
    'brienne-of-tarth': {
      role: [
        {
          episode: 13,
          chapter: 96,
          value: { it: 'Guardia di re Renly', en: 'Guard of King Renly' },
        },
        // After Renly's death she swears herself to Catelyn: "The Ghost of
        // Harrenhal" (episode 15), and Catelyn V (chapter 113), where
        // Catelyn takes her as her sworn sword.
        {
          episode: 15,
          chapter: 113,
          value: {
            it: 'Spada giurata di Catelyn Stark',
            en: 'Sworn sword of Catelyn Stark',
          },
        },
      ],
      log: {
        it: 'Vince il torneo di re Renly battendo Loras Tyrell, e come ricompensa chiede un posto nella sua guardia.',
        en: 'She wins King Renly’s tourney by defeating Loras Tyrell, and asks for a place in his guard as her reward.',
      },
      status: [{ episode: 13, chapter: 96, value: 'alive' }],
      affiliation: [
        {
          episode: 13,
          chapter: 96,
          value: { it: 'Casa Tarth', en: 'House Tarth' },
        },
      ],
    },
    'margaery-tyrell': {
      role: [
        {
          episode: 13,
          chapter: 96,
          value: {
            it: 'Regina, moglie di re Renly',
            en: 'Queen, wife of King Renly',
          },
        },
        // Widowed when Renly is killed: "The Ghost of Harrenhal" (episode
        // 15) and Catelyn IV (chapter 107).
        {
          episode: 15,
          chapter: 107,
          value: { it: 'Vedova di re Renly', en: 'Widow of King Renly' },
        },
        // Joffrey agrees to marry her at his court after the battle:
        // "Valar Morghulis" (episode 20), and Sansa VIII (chapter 139),
        // where Garlan asks it of the king.
        {
          episode: 20,
          chapter: 139,
          value: {
            it: 'Promessa sposa di re Joffrey',
            en: 'Betrothed to King Joffrey',
          },
        },
      ],
      log: {
        it: 'È la giovane moglie di re Renly, e il loro matrimonio lega Casa Tyrell alla sua causa. Renly la presenta a Catelyn Stark.',
        en: 'She is King Renly’s young wife, and their marriage binds House Tyrell to his cause. Renly introduces her to Catelyn Stark.',
      },
      status: [{ episode: 13, chapter: 96, value: 'alive' }],
      affiliation: [
        {
          episode: 13,
          chapter: 96,
          value: { it: 'Casa Tyrell', en: 'House Tyrell' },
        },
      ],
    },
    'mace-tyrell': {
      role: { it: 'Lord di Alto Giardino', en: 'Lord of Highgarden' },
      log: {
        it: 'È il padre di Margaery e Loras Tyrell, e ha portato la sua casata dalla parte di re Joffrey.',
        en: 'He is the father of Margaery and Loras Tyrell, and has brought his house over to King Joffrey’s side.',
      },
      status: [{ episode: 32, chapter: 139, value: 'alive' }],
      affiliation: [
        {
          episode: 32,
          chapter: 139,
          value: { it: 'Casa Tyrell', en: 'House Tyrell' },
        },
      ],
    },
    'cortnay-penrose': {
      role: {
        it: 'Castellano di Capo Tempesta',
        en: 'Castellan of Storm’s End',
      },
      log: {
        it: 'Tiene Capo Tempesta dopo la morte di Renly Baratheon. Si rifiuta di consegnare il castello a Stannis e lo sfida a duello.',
        en: 'He holds Storm’s End after Renly Baratheon’s death. He refuses to yield the castle to Stannis and challenges him to single combat.',
      },
      status: [
        { episode: 14, chapter: 116, source: 'chapter', value: 'alive' },
        // A Wiki of Ice and Fire cites Tyrion X (chapter 118) for his death
        // the night after the parley; episode 16 only orders it.
        { episode: 16, chapter: 118, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 14,
          chapter: 116,
          source: 'chapter',
          value: { it: 'Casa Baratheon', en: 'House Baratheon' },
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
