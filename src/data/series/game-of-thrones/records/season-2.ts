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
    // #1467: the Wall and beyond. The great ranging, Craster's Keep, the
    // Fist of the First Men and Qhorin Halfhand's scouting party.
    //
    // Books: Jon I (site chapter 80), the Lord Commander complains that
    // Smallwood called him too old for the ranging. The show never has him:
    // episode 11 only orders him.
    {
      id: 'thoren-smallwood',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 11,
      revealedAtChapter: 80,
      name: { it: 'Thoren Smallwood', en: 'Thoren Smallwood' },
      summary: {
        it: 'Un ranger dei Guardiani della notte, a capo dei ranger mentre il Primo Ranger è disperso.',
        en: 'A ranger of the Night’s Watch, in command of the rangers while the First Ranger is missing.',
      },
      visual: { art: 'thoren-smallwood', tint: 'sand' },
    },
    // Books: Jon II (site chapter 87), at Whitetree Jon is paired with
    // Eddison Tollett, "nicknamed Dolorous Edd". Show: "Valar Morghulis"
    // (episode 20), where Sam says what he finds interesting about Edd.
    // Episodes 11 to 18 name him only in narration and the credits (an
    // owner check).
    {
      id: 'eddison-tollett',
      kind: 'character',
      revealedAtEpisode: 20,
      revealedAtChapter: 87,
      name: { it: 'Eddison Tollett', en: 'Eddison Tollett' },
      summary: {
        it: 'Un confratello dei Guardiani della notte, nella spedizione del lord comandante oltre la Barriera.',
        en: 'A brother of the Night’s Watch, on the Lord Commander’s ranging beyond the Wall.',
      },
      visual: { art: 'eddison-tollett', tint: 'ice' },
    },
    // Books: Jon II (site chapter 87), he answers Thoren Smallwood at
    // Whitetree and his scouts ride out first. The show never has him:
    // episode 11 only orders him.
    {
      id: 'jarman-buckwell',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 11,
      revealedAtChapter: 87,
      name: { it: 'Jarman Buckwell', en: 'Jarman Buckwell' },
      summary: {
        it: 'Un ranger dei Guardiani della notte, a capo degli esploratori della spedizione oltre la Barriera.',
        en: 'A ranger of the Night’s Watch who leads the scouts of the ranging beyond the Wall.',
      },
      visual: { art: 'jarman-buckwell', tint: 'ocher' },
    },
    // Books: Jon II (site chapter 87), he speaks at Whitetree and leads the
    // baggage train. The show never has him: episode 11 only orders him.
    {
      id: 'mallador-locke',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 11,
      revealedAtChapter: 87,
      name: { it: 'Mallador Locke', en: 'Mallador Locke' },
      summary: {
        it: 'Un cavaliere dei Guardiani della notte, nella spedizione del lord comandante oltre la Barriera.',
        en: 'A knight of the Night’s Watch, on the Lord Commander’s ranging beyond the Wall.',
      },
      visual: { art: 'mallador-locke', tint: 'azure' },
    },
    // Show: "The North Remembers" (episode 11), Edd and Grenn talk of
    // Craster's daughters and say Craster is still here. Books: Jon III
    // (site chapter 97), the ranging reaches Craster's Keep.
    {
      id: 'craster',
      kind: 'character',
      revealedAtEpisode: 11,
      revealedAtChapter: 97,
      name: { it: 'Craster', en: 'Craster' },
      summary: {
        it: 'Un bruto che vive in un fortino oltre la Barriera e dà riparo ai Guardiani della notte.',
        en: 'A wildling who lives in a holdfast beyond the Wall and gives the Night’s Watch shelter.',
      },
      visual: { art: 'craster', tint: 'orange' },
    },
    // Books: Jon III (site chapter 97), Jon meets her at Craster's Keep.
    // Show: "The Ghost of Harrenhal" (episode 15), Sam says Gilly would love
    // the Fist. Episodes 11 to 13 name her only in narration (an owner
    // check).
    {
      id: 'gilly',
      kind: 'character',
      revealedAtEpisode: 15,
      revealedAtChapter: 97,
      name: { it: 'Gilly', en: 'Gilly' },
      summary: {
        it: 'Una delle figlie di Craster, e una delle sue mogli.',
        en: 'One of Craster’s daughters, and one of his wives.',
      },
      visual: { art: 'gilly', tint: 'lavender' },
    },
    // Show: "The Ghost of Harrenhal" (episode 15), Jon says it is the
    // Halfhand coming up to the Fist. Books: Jon V (site chapter 117), he
    // arrives at the Fist from the Shadow Tower.
    {
      id: 'qhorin-halfhand',
      kind: 'character',
      revealedAtEpisode: 15,
      revealedAtChapter: 117,
      name: { it: 'Qhorin il Monco', en: 'Qhorin Halfhand' },
      summary: {
        it: 'Un ranger famoso dei Guardiani della notte, della Torre delle Ombre.',
        en: 'A famous ranger of the Night’s Watch, from the Shadow Tower.',
      },
      visual: { art: 'qhorin-halfhand', tint: 'teal' },
    },
    // Books: Jon VI (site chapter 125), he climbs to the wildling watchers
    // with Jon. The show names him only in narration: "The Ghost of
    // Harrenhal" (episode 15) reports Qhorin picking him for his party, with
    // no line that says his name (an owner check). Episode 15 only orders
    // him.
    {
      id: 'stonesnake',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 15,
      revealedAtChapter: 125,
      name: { it: 'Stonesnake', en: 'Stonesnake' },
      summary: {
        it: 'Un ranger dei Guardiani della notte al seguito di Qhorin il Monco.',
        en: 'A ranger of the Night’s Watch who rides with Qhorin Halfhand.',
      },
      visual: { art: 'stonesnake', tint: 'green' },
    },
    // Show: "The Old Gods and the New" (episode 16), the wildling scout "a
    // red-haired young woman named Ygritte". Books: Jon VI (site chapter
    // 125), the sleeping watcher turns out to be a spearwife, Ygritte.
    {
      id: 'ygritte',
      kind: 'character',
      revealedAtEpisode: 16,
      revealedAtChapter: 125,
      name: { it: 'Ygritte', en: 'Ygritte' },
      summary: {
        it: 'Una giovane donna dei Bruti, dai capelli rossi.',
        en: 'A young wildling woman with red hair.',
      },
      visual: { art: 'ygritte', tint: 'red' },
    },
    // Books: Jon VII (site chapter 127), Qhorin says he would have had Ebben
    // kill the wildling girl. Jon VI (125) has him in the party, unnamed in
    // the synopsis. The show never has him: episode 17 only orders him.
    {
      id: 'ebben',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 17,
      revealedAtChapter: 127,
      name: { it: 'Ebben', en: 'Ebben' },
      summary: {
        it: 'Un ranger dei Guardiani della notte al seguito di Qhorin il Monco.',
        en: 'A ranger of the Night’s Watch who rides with Qhorin Halfhand.',
      },
      visual: { art: 'ebben', tint: 'yellow' },
    },
    // Books: Jon VII (site chapter 127), Squire Dalbridge stays behind in the
    // pass. Jon VI (125) has him in the party, unnamed in the synopsis. The
    // show never has him: episode 17 only orders him.
    {
      id: 'dalbridge',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 17,
      revealedAtChapter: 127,
      name: { it: 'Dalbridge', en: 'Dalbridge' },
      summary: {
        it: 'Un ranger dei Guardiani della notte al seguito di Qhorin il Monco.',
        en: 'A ranger of the Night’s Watch who rides with Qhorin Halfhand.',
      },
      visual: { art: 'dalbridge', tint: 'blue' },
    },
    // Books: Jon VIII (site chapter 142), his band overtakes Jon and Qhorin,
    // "the Lord of Bones their leader"; the Watch calls him Rattleshirt. The
    // show names him only in narration: in "The Prince of Winterfell"
    // (episode 18) Ygritte brings Jon to him as "a present", with no line
    // that says his name (an owner check). Episode 18 only orders him.
    {
      id: 'lord-of-bones',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 18,
      revealedAtChapter: 142,
      name: { it: 'Lord delle Ossa', en: 'Lord of Bones' },
      summary: {
        it: 'Un razziatore dei Bruti che porta un’armatura fatta di ossa.',
        en: 'A wildling raider who wears armour made of bones.',
      },
      visual: { art: 'lord-of-bones', tint: 'ivory' },
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
    // #1467: the Wall and beyond.
    'thoren-smallwood': {
      role: {
        it: 'Comandante dei ranger in assenza del Primo Ranger',
        en: 'Acting commander of the rangers',
      },
      log: {
        it: 'Sostiene che il lord comandante dovrebbe restare a Castello Nero e lasciare a lui la spedizione oltre la Barriera. Jeor Mormont rifiuta.',
        en: 'He argues that the Lord Commander should stay at Castle Black and leave the ranging beyond the Wall to him. Jeor Mormont refuses.',
      },
      status: [{ episode: 11, chapter: 80, source: 'chapter', value: 'alive' }],
      affiliation: [
        {
          episode: 11,
          chapter: 80,
          source: 'chapter',
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'eddison-tollett': {
      role: {
        it: 'Confratello dei Guardiani della notte',
        en: 'Brother of the Night’s Watch',
      },
      log: {
        it: 'Cavalca con i Guardiani della notte oltre la Barriera, insieme a Jon Snow e ai suoi amici, e accoglie ogni disagio con una battuta cupa.',
        en: 'He rides beyond the Wall with the Night’s Watch, alongside Jon Snow and his friends, and meets every hardship with a gloomy joke.',
      },
      status: [{ episode: 20, chapter: 87, value: 'alive' }],
      affiliation: [
        {
          episode: 20,
          chapter: 87,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'jarman-buckwell': {
      role: {
        it: 'Ranger a capo degli esploratori',
        en: 'Ranger in command of the scouts',
      },
      log: {
        it: 'I suoi esploratori cavalcano davanti alla colonna del lord comandante, nella foresta oltre la Barriera.',
        en: 'His scouts ride ahead of the Lord Commander’s column, in the forest beyond the Wall.',
      },
      status: [{ episode: 11, chapter: 87, source: 'chapter', value: 'alive' }],
      affiliation: [
        {
          episode: 11,
          chapter: 87,
          source: 'chapter',
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'mallador-locke': {
      role: {
        it: 'Cavaliere dei Guardiani della notte',
        en: 'Knight of the Night’s Watch',
      },
      log: {
        it: 'Cavalca con la spedizione del lord comandante e ne guida le salmerie.',
        en: 'He rides with the Lord Commander’s ranging and leads its baggage train.',
      },
      status: [{ episode: 11, chapter: 87, source: 'chapter', value: 'alive' }],
      affiliation: [
        {
          episode: 11,
          chapter: 87,
          source: 'chapter',
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'craster': {
      role: {
        it: 'Padrone di un fortino oltre la Barriera',
        en: 'Master of a holdfast beyond the Wall',
      },
      log: {
        it: 'La spedizione del lord comandante si ferma al suo fortino. Ha sposato le sue stesse figlie, e dice ai Guardiani della notte che i bruti si radunano attorno a Mance Rayder.',
        en: 'The Lord Commander’s ranging stops at his keep. He has married his own daughters, and he tells the Night’s Watch that the wildlings are gathering around Mance Rayder.',
      },
      status: [{ episode: 11, chapter: 97, value: 'alive' }],
      affiliation: [
        { episode: 11, chapter: 97, value: { it: 'Bruti', en: 'Wildlings' } },
      ],
    },
    'gilly': {
      role: {
        it: 'Figlia e moglie di Craster',
        en: 'Craster’s daughter and wife',
      },
      log: {
        it: 'È incinta e ha paura di cosa farà Craster se nascerà un maschio. Chiede ai Guardiani della notte di portarla via, ma la spedizione riparte senza di lei.',
        en: 'She is pregnant and afraid of what Craster will do if the child is a boy. She asks the Night’s Watch to take her away, but the ranging leaves without her.',
      },
      status: [{ episode: 15, chapter: 97, value: 'alive' }],
      affiliation: [
        { episode: 15, chapter: 97, value: { it: 'Bruti', en: 'Wildlings' } },
      ],
    },
    'qhorin-halfhand': {
      role: {
        it: 'Ranger della Torre delle Ombre',
        en: 'Ranger of the Shadow Tower',
      },
      log: {
        it: 'Raggiunge la spedizione del lord comandante al Pugno dei Primi Uomini. Lo avverte che i bruti si stanno radunando, e porta Jon Snow con sé in un piccolo gruppo che va in avanscoperta tra le montagne.',
        en: 'He joins the Lord Commander’s ranging at the Fist of the First Men. He warns him that the wildlings are gathering, and takes Jon Snow with him in a small party that scouts the mountains.',
      },
      status: [
        { episode: 15, chapter: 117, value: 'alive' },
        // The show's alone: the Lord of Bones holds him captive in "The
        // Prince of Winterfell" (episode 18). The books have no capture:
        // chapter 142 only orders it.
        { episode: 18, chapter: 142, source: 'episode', value: 'captured' },
        // Jon kills him on his own orders, so the wildlings will take Jon
        // for a deserter: "Valar Morghulis" (episode 20) and Jon VIII
        // (chapter 142).
        { episode: 20, chapter: 142, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 15,
          chapter: 117,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'stonesnake': {
      role: {
        it: 'Ranger dei Guardiani della notte',
        en: 'Ranger of the Night’s Watch',
      },
      log: {
        it: 'Qhorin il Monco lo sceglie per il piccolo gruppo che va in avanscoperta tra le montagne.',
        en: 'Qhorin Halfhand picks him for the small party that scouts the mountains.',
      },
      // The show's death at episode 18 ("The Prince of Winterfell") is not
      // filed: the record is the books', where Qhorin sends him on alone, on
      // foot, and his fate is not told in the stage.
      status: [
        { episode: 15, chapter: 125, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 15,
          chapter: 125,
          source: 'chapter',
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'ygritte': {
      role: { it: 'Vedetta dei Bruti', en: 'Wildling lookout' },
      log: {
        it: 'È tra le vedette dei bruti sulle montagne. I ranger di Qhorin il Monco uccidono i suoi compagni, e Jon Snow resta solo con lei per giustiziarla, ma non ci riesce.',
        en: 'She is one of the wildling lookouts in the mountains. Qhorin Halfhand’s rangers kill her companions, and Jon Snow is left to put her to death, but he cannot do it.',
      },
      status: [{ episode: 16, chapter: 125, value: 'alive' }],
      affiliation: [
        { episode: 16, chapter: 125, value: { it: 'Bruti', en: 'Wildlings' } },
      ],
    },
    'ebben': {
      role: {
        it: 'Ranger dei Guardiani della notte',
        en: 'Ranger of the Night’s Watch',
      },
      log: {
        it: 'Va con Qhorin il Monco e Jon Snow tra le montagne, in avanscoperta oltre la Barriera.',
        en: 'He scouts the mountains beyond the Wall with Qhorin Halfhand and Jon Snow.',
      },
      status: [
        { episode: 17, chapter: 127, source: 'chapter', value: 'alive' },
        // Sent ahead to warn the Lord Commander, he is caught: the wildlings
        // who overtake Qhorin carry his head, in Jon VIII (chapter 142).
        // Episode 20 only orders it.
        { episode: 20, chapter: 142, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 17,
          chapter: 127,
          source: 'chapter',
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'dalbridge': {
      role: {
        it: 'Ranger dei Guardiani della notte',
        en: 'Ranger of the Night’s Watch',
      },
      log: {
        it: 'Quando i bruti inseguono il gruppo di Qhorin il Monco, resta indietro con tutte le frecce per sbarrare loro il passo.',
        en: 'When the wildlings give chase to Qhorin Halfhand’s party, he stays behind with all the arrows to hold the pass against them.',
      },
      // He is not seen again in the stage; A Clash of Kings does not tell
      // his death, so his status stays as it opens.
      status: [
        { episode: 17, chapter: 127, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 17,
          chapter: 127,
          source: 'chapter',
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'lord-of-bones': {
      role: {
        it: 'Capo di una banda di Bruti',
        en: 'Leader of a wildling war band',
      },
      log: {
        it: 'La sua banda raggiunge Jon Snow e Qhorin il Monco sulle montagne. Quando Jon si arrende, gli ordina di uccidere Qhorin per dimostrare da che parte sta.',
        en: 'His war band overtakes Jon Snow and Qhorin Halfhand in the mountains. When Jon yields, he orders him to kill Qhorin to prove himself.',
      },
      status: [
        { episode: 18, chapter: 142, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 18,
          chapter: 142,
          source: 'chapter',
          value: { it: 'Bruti', en: 'Wildlings' },
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
