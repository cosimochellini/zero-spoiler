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
    // #1465: Robb's war, the Riverlands and Harrenhal.
    //
    // Show only: Robb sends him to King's Landing with his terms in "The
    // North Remembers" (episode 11), "You'll ride at daybreak, Ser Alton"
    // (a transcript; the Game of Thrones Wiki names him only in narration).
    // The books give his part to Cleos Frey; chapter 81 only orders him.
    {
      id: 'alton-lannister',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 11,
      revealedAtChapter: 81,
      name: { it: 'Alton Lannister', en: 'Alton Lannister' },
      summary: {
        it: 'Un giovane cavaliere di Casa Lannister, prigioniero dell’esercito di Robb Stark.',
        en: 'A young knight of House Lannister, a prisoner of Robb Stark’s army.',
      },
      visual: { art: 'alton-lannister', tint: 'red' },
    },
    // Books only: Catelyn I (site chapter 81), Robb sends him from Riverrun
    // to King's Landing with his peace terms. The show gives his part to
    // Alton Lannister; episode 11 only orders him.
    {
      id: 'cleos-frey',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 11,
      revealedAtChapter: 81,
      name: { it: 'Cleos Frey', en: 'Cleos Frey' },
      summary: {
        it: 'Un cavaliere di Casa Frey, cugino di Jaime Lannister e prigioniero di Robb Stark.',
        en: 'A knight of House Frey, Jaime Lannister’s cousin and Robb Stark’s prisoner.',
      },
      visual: { art: 'cleos-frey', tint: 'azure' },
    },
    // Show: "Garden of Bones" (episode 14), she introduces herself to Robb as
    // Talisa of Volantis after the battle at Oxcross; her family name,
    // Maegyr, follows in episode 16. The books have no such character (Robb
    // marries Jeyne Westerling, past the stage); chapter 100 only orders her.
    {
      id: 'talisa-maegyr',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 14,
      revealedAtChapter: 100,
      name: { it: 'Talisa Maegyr', en: 'Talisa Maegyr' },
      summary: {
        it: 'Una guaritrice di Volantis che cura i feriti dopo le battaglie di Robb Stark.',
        en: 'A healer from Volantis who tends the wounded after Robb Stark’s battles.',
      },
      visual: { art: 'talisa-maegyr', tint: 'teal' },
    },
    // Show: "The Old Gods and the New" (episode 16), Arya gives Jaqen his name
    // as her second death; earlier episodes name him only in narration.
    // Books: Arya IV (site chapter 88), he rides up to the holdfast and
    // introduces himself.
    {
      id: 'amory-lorch',
      kind: 'character',
      revealedAtEpisode: 16,
      revealedAtChapter: 88,
      name: { it: 'Amory Lorch', en: 'Amory Lorch' },
      summary: {
        it: 'Un cavaliere al servizio dei Lannister che guida una banda di predoni nelle Terre dei Fiumi.',
        en: 'A knight in the Lannisters’ service who leads a band of raiders in the riverlands.',
      },
      visual: { art: 'amory-lorch', tint: 'vermilion' },
    },
    // Show: "Garden of Bones" (episode 14), Arya adds him to the names she
    // recites each night. Books: Arya VI (site chapter 100), a man called
    // Polliver wears her sword, and she hates him for taking it.
    {
      id: 'polliver',
      kind: 'character',
      revealedAtEpisode: 14,
      revealedAtChapter: 100,
      name: { it: 'Polliver', en: 'Polliver' },
      summary: {
        it: 'Un soldato dell’esercito Lannister che prende la spada di Arya Stark.',
        en: 'A soldier of the Lannister army who takes Arya Stark’s sword.',
      },
      visual: { art: 'polliver', tint: 'ocher' },
    },
    // Show: "The Ghost of Harrenhal" (episode 15), he is the first name Arya
    // gives Jaqen; "Garden of Bones" names him only in narration. Books:
    // Arya VI (site chapter 100), the prisoners call the man who questions
    // them the Tickler.
    {
      id: 'tickler',
      kind: 'character',
      revealedAtEpisode: 15,
      revealedAtChapter: 100,
      name: { it: 'Tickler', en: 'Tickler' },
      summary: {
        it: 'Uno degli uomini di Gregor Clegane, che interroga i prigionieri sotto tortura.',
        en: 'One of Gregor Clegane’s men, who questions prisoners under torture.',
      },
      visual: { art: 'tickler', tint: 'sand' },
    },
    // Books only: Arya VI (site chapter 100), he helps the Tickler question
    // the prisoners, and Arya hates him for his jokes. The show has no
    // Chiswyck; episode 14 only orders him.
    {
      id: 'chiswyck',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 14,
      revealedAtChapter: 100,
      name: { it: 'Chiswyck', en: 'Chiswyck' },
      summary: {
        it: 'Un vecchio uomo d’arme di Gregor Clegane, curvo nelle spalle.',
        en: 'An old, stoop-shouldered man-at-arms of Gregor Clegane’s.',
      },
      visual: { art: 'chiswyck', tint: 'wine' },
    },
    // Books only: Arya VI (site chapter 100), the understeward who puts Arya
    // to work at Harrenhal. The show has no Weese; episode 14 only orders
    // him.
    {
      id: 'weese',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 14,
      revealedAtChapter: 100,
      name: { it: 'Weese', en: 'Weese' },
      summary: {
        it: 'Un sottointendente di Harrenhal, che fa lavorare i servi a bastonate.',
        en: 'An understeward at Harrenhal, who keeps the servants working with beatings.',
      },
      visual: { art: 'weese', tint: 'orange' },
    },
    // Books only: Arya VII (site chapter 104), Arya sees him at Harrenhal
    // among the captains serving Lord Tywin. The show gives his later part to
    // Locke; episode 15 only orders him.
    {
      id: 'vargo-hoat',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 15,
      revealedAtChapter: 104,
      name: { it: 'Vargo Hoat', en: 'Vargo Hoat' },
      summary: {
        it: 'Il capo dei Bravi Camerati, una compagnia di mercenari al soldo dei Lannister.',
        en: 'The leader of the Brave Companions, a sellsword company in the Lannisters’ pay.',
      },
      visual: { art: 'vargo-hoat', tint: 'acid' },
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
    // #1465: Robb's war, the Riverlands and Harrenhal.
    'alton-lannister': {
      role: { it: 'Prigioniero di Robb Stark', en: 'Robb Stark’s prisoner' },
      log: {
        it: 'È un giovane cavaliere di Casa Lannister, prigioniero nel campo di Robb Stark. Robb lo manda ad Approdo del Re a portare le sue condizioni di pace.',
        en: 'He is a young knight of House Lannister, held prisoner in Robb Stark’s camp. Robb sends him to King’s Landing with his terms for peace.',
      },
      status: [
        { episode: 11, chapter: 81, source: 'episode', value: 'captured' },
        // Jaime Lannister kills him in their cell to escape, in "A Man
        // Without Honor" (episode 17); chapter 113, where the books' Jaime
        // tries to escape, only orders it.
        { episode: 17, chapter: 113, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 11,
          chapter: 81,
          source: 'episode',
          value: { it: 'Casa Lannister', en: 'House Lannister' },
        },
      ],
    },
    'cleos-frey': {
      role: { it: 'Prigioniero di Robb Stark', en: 'Robb Stark’s prisoner' },
      log: {
        it: 'È stato preso prigioniero insieme al cugino Jaime Lannister al Bosco dei Sussurri. Robb Stark lo manda ad Approdo del Re con le sue condizioni di pace, e lui promette di tornare a Delta delle Acque.',
        en: 'He was taken prisoner with his cousin Jaime Lannister in the Whispering Wood. Robb Stark sends him to King’s Landing with his peace terms, and he promises to return to Riverrun.',
      },
      status: [
        { episode: 11, chapter: 81, source: 'chapter', value: 'captured' },
      ],
      affiliation: [
        {
          episode: 11,
          chapter: 81,
          source: 'chapter',
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
    },
    'talisa-maegyr': {
      role: [
        {
          episode: 14,
          chapter: 100,
          source: 'episode',
          value: { it: 'Guaritrice di Volantis', en: 'Healer from Volantis' },
        },
        // She and Robb marry in secret before a septon in "Valar Morghulis"
        // (episode 20); chapter 141 only orders it.
        {
          episode: 20,
          chapter: 141,
          source: 'episode',
          value: { it: 'Moglie di Robb Stark', en: 'Robb Stark’s wife' },
        },
      ],
      log: {
        it: 'Dopo la battaglia di Oxcross amputa la gamba di un soldato Lannister ferito, e Robb Stark la aiuta a tenerlo fermo. Gli fa notare che i suoi nemici erano ragazzi arruolati a forza.',
        en: 'After the battle at Oxcross she takes off a wounded Lannister soldier’s leg, and Robb Stark helps hold him down. She points out to Robb that the men he beat were conscripted boys.',
      },
      status: [
        { episode: 14, chapter: 100, source: 'episode', value: 'alive' },
      ],
      // She tends Lannister and Stark wounded alike and tells Robb she takes
      // no side in his war ("Garden of Bones").
      affiliation: [
        {
          episode: 14,
          chapter: 100,
          source: 'episode',
          value: { it: 'Nessuna fedeltà', en: 'No allegiance' },
        },
      ],
    },
    'amory-lorch': {
      role: [
        {
          episode: 16,
          chapter: 88,
          value: {
            it: 'Cavaliere al servizio dei Lannister',
            en: 'Knight in the Lannisters’ service',
          },
        },
        // Books only: Tywin leaves him castellan when his host marches out,
        // in Arya VIII (chapter 112). The show's Amory is dead by then;
        // episode 18 only orders the step.
        {
          episode: 18,
          chapter: 112,
          source: 'chapter',
          value: {
            it: 'Castellano di Harrenhal',
            en: 'Castellan of Harrenhal',
          },
        },
      ],
      log: {
        it: 'Guida una banda di soldati Lannister nelle Terre dei Fiumi. I suoi uomini attaccano le reclute dei Guardiani della notte guidate da Yoren, che muore nello scontro.',
        en: 'He leads a band of Lannister soldiers in the riverlands. His men attack the Night’s Watch recruits led by Yoren, who dies in the fight.',
      },
      status: [
        { episode: 16, chapter: 88, source: 'chapter', value: 'alive' },
        // Jaqen H'ghar kills him with a poisoned dart in "The Old Gods and the
        // New" (episode 16), the episode that first names him, so the show
        // record opens dead. The books throw him into Harrenhal's bear pit
        // after the castle falls, in Arya IX (chapter 121).
        { episode: 16, chapter: 121, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 16,
          chapter: 88,
          value: { it: 'Esercito Lannister', en: 'Lannister army' },
        },
      ],
    },
    'polliver': {
      role: {
        it: 'Uomo d’arme dell’esercito Lannister',
        en: 'Man-at-arms of the Lannister army',
      },
      log: {
        it: 'È tra i soldati che catturano Arya Stark e i suoi compagni, e tiene per sé Ago, la spada di lei. Arya aggiunge il suo nome a quelli che ripete ogni notte.',
        en: 'He is one of the soldiers who capture Arya Stark and her companions, and he keeps her sword, Needle, for himself. Arya adds his name to the ones she repeats each night.',
      },
      status: [{ episode: 14, chapter: 100, value: 'alive' }],
      affiliation: [
        {
          episode: 14,
          chapter: 100,
          value: { it: 'Esercito Lannister', en: 'Lannister army' },
        },
      ],
    },
    'tickler': {
      role: {
        it: 'Torturatore di Gregor Clegane',
        en: 'Gregor Clegane’s torturer',
      },
      log: {
        it: 'Ogni giorno sceglie un prigioniero e lo tortura finché muore, chiedendo dove sono nascosti cibo e oggetti di valore e dove si trovano i ribelli.',
        en: 'Each day he picks a prisoner and tortures him until he dies, asking where food and valuables are hidden and where the rebels are.',
      },
      status: [
        { episode: 15, chapter: 100, source: 'chapter', value: 'alive' },
        // Show only: Jaqen H'ghar breaks his neck in "The Ghost of Harrenhal"
        // (episode 15), the episode that first names him, so the show record
        // opens dead. The books keep him alive past the stage; chapter 104
        // only orders it.
        { episode: 15, chapter: 104, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 15,
          chapter: 100,
          value: { it: 'Uomini di Gregor Clegane', en: 'Gregor Clegane’s men' },
        },
      ],
    },
    'chiswyck': {
      role: {
        it: 'Uomo d’arme di Gregor Clegane',
        en: 'Man-at-arms of Gregor Clegane',
      },
      log: {
        it: 'Aiuta il Tickler a interrogare i prigionieri durante la marcia verso Harrenhal. Arya lo odia perché si crede spiritoso.',
        en: 'He helps the Tickler question the prisoners on the march to Harrenhal. Arya hates him for thinking he is funny.',
      },
      status: [
        { episode: 14, chapter: 100, source: 'chapter', value: 'alive' },
        // Arya gives Jaqen H'ghar his name, and a few days later he falls
        // from a wall to his death, in Arya VII (chapter 104).
        { episode: 15, chapter: 104, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 14,
          chapter: 100,
          source: 'chapter',
          value: { it: 'Uomini di Gregor Clegane', en: 'Gregor Clegane’s men' },
        },
      ],
    },
    'weese': {
      role: {
        it: 'Sottointendente di Harrenhal',
        en: 'Understeward at Harrenhal',
      },
      log: {
        it: 'Mette Arya a lavorare nella torre di cui si occupa, a Harrenhal. Picchia chi non obbedisce e tiene con sé un cane maculato.',
        en: 'He puts Arya to work in the tower he keeps at Harrenhal. He beats anyone who does not obey, and keeps a spotted dog.',
      },
      status: [
        { episode: 14, chapter: 100, source: 'chapter', value: 'alive' },
        // Arya gives Jaqen H'ghar his name, and he is found dead with his own
        // dog on his chest, in Arya VIII (chapter 112).
        { episode: 16, chapter: 112, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 14,
          chapter: 100,
          source: 'chapter',
          value: { it: 'Servitù di Harrenhal', en: 'Harrenhal’s servants' },
        },
      ],
    },
    'vargo-hoat': {
      role: {
        it: 'Capo dei Bravi Camerati',
        en: 'Leader of the Brave Companions',
      },
      log: {
        it: 'I suoi mercenari saccheggiano le terre intorno a Harrenhal per lord Tywin Lannister, e si scontrano spesso con i soldati Lannister.',
        en: 'His sellswords forage and raid around Harrenhal for Lord Tywin Lannister, and often clash with the Lannister soldiers.',
      },
      status: [
        { episode: 15, chapter: 104, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 15,
          chapter: 104,
          source: 'chapter',
          value: {
            it: 'Bravi Camerati, al soldo dei Lannister',
            en: 'Brave Companions, in the Lannisters’ pay',
          },
        },
        // He changes sides and hands Harrenhal to Roose Bolton, in Arya IX
        // (chapter 121).
        {
          episode: 18,
          chapter: 121,
          source: 'chapter',
          value: {
            it: 'Bravi Camerati, al servizio di Roose Bolton',
            en: 'Brave Companions, in Roose Bolton’s service',
          },
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
