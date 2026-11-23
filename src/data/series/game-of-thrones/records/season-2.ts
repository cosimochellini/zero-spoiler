import type { PlaceDossier } from '~/data/types'

import type { ThronesSaga, ThronesVocabulary } from './saga'
import { season2Relationships } from './season-2.relationships'

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
    // battle he asks the king to wed his sister. That he wore Renly's armour
    // is told only in Jaime VIII of A Storm of Swords (211), his drawing's
    // stage. The show gives the request to Loras and has no Garlan; episode
    // 20 only orders him.
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
      // Not wine: her drawing's accent, the jars, is not red (#1471).
      visual: { art: 'selyse-baratheon', tint: 'azure' },
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
      visual: { art: 'alton-lannister', tint: 'ivory' },
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
    // Show: "The Old Gods and the New" (episode 16), Talisa tells Robb her
    // family's name is Maegyr. "Garden of Bones" (episode 14) has her
    // introduce herself only as Talisa of Volantis, so the record, filed
    // under the full name and its id, opens where the full name is said
    // (owner check: 14). The books have no such character (Robb
    // marries Jeyne Westerling, past the stage); chapter 100 only orders her.
    {
      id: 'talisa-maegyr',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 16,
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
      visual: { art: 'amory-lorch', tint: 'violet' },
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
      visual: { art: 'chiswyck', tint: 'yellow' },
    },
    // Books only: Arya VII (site chapter 104), where he is the understeward
    // of the Wailing Tower who works Arya at Harrenhal. Arya VI (100) names
    // him first, before that title is told (owner check). The show has no
    // Weese; episode 14 only orders him.
    {
      id: 'weese',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 14,
      revealedAtChapter: 104,
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
    // #1468: Essos and Qarth, Daenerys's road through the Red Waste to Qarth.
    // Show only: in "The North Remembers" (episode 11) Daenerys sends out
    // her three bloodriders by name, "Rakharo, Aggo, Kovarro". No book has
    // the name (its rider is Jhogo); Daenerys I (chapter 86), the chapter
    // the episode adapts, only orders him.
    {
      id: 'kovarro',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 11,
      revealedAtChapter: 86,
      name: { it: 'Kovarro', en: 'Kovarro' },
      summary: {
        it: 'Un cavaliere di sangue dothraki al servizio di Daenerys.',
        en: 'A Dothraki bloodrider in Daenerys’s service.',
      },
      visual: { art: 'kovarro', tint: 'ocher' },
    },
    // Show: in "The Ghost of Harrenhal" (episode 15) Pyat Pree invites
    // Daenerys to the House of the Undying, "should you grow weary of Xaro's
    // baubles". "Garden of Bones" (episode 14), where he vouches for her at
    // the gates, names him in narration only (an owner check). Books:
    // Daenerys III (chapter 114), Daenerys asks him to come with her to the
    // Arbor, "Come with me to the Arbor, Xaro", and he answers that "Xaro
    // Xhoan Daxos is a man of peace" (quoted on A Wiki of Ice and Fire's
    // Xaro page). Jhogo's line bringing him from Qarth in Daenerys I
    // (chapter 86) counts as narration (owner, 2026-11-22), and Daenerys II
    // (chapter 101) names him in narration only.
    {
      id: 'xaro-xhoan-daxos',
      kind: 'character',
      revealedAtEpisode: 15,
      revealedAtChapter: 114,
      name: { it: 'Xaro Xhoan Daxos', en: 'Xaro Xhoan Daxos' },
      summary: {
        it: 'Un ricco principe mercante di Qarth, membro dei Tredici.',
        en: 'A wealthy merchant prince of Qarth, one of the Thirteen.',
      },
      visual: { art: 'xaro-xhoan-daxos', tint: 'yellow' },
    },
    // Books: Daenerys III (chapter 114), Jorah urges Daenerys to go to Pyat
    // Pree for help (reported speech in A Wiki of Ice and Fire's synopsis).
    // Jhogo's line bringing "the great warlock Pyat Pree" from Qarth in
    // Daenerys I (chapter 86) counts as narration (owner, 2026-11-22), and
    // Daenerys II (chapter 101) names him in narration only. The show has
    // him from "Garden of Bones" (episode 14), but no synopsis or quote on
    // the Game of Thrones Wiki has his name said: narration and the credits
    // only, so he is the books' alone (an owner check). Episode 14 only
    // orders him.
    {
      id: 'pyat-pree',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 14,
      revealedAtChapter: 114,
      name: { it: 'Pyat Pree', en: 'Pyat Pree' },
      summary: { it: 'Uno stregone di Qarth.', en: 'A warlock of Qarth.' },
      visual: { art: 'pyat-pree', tint: 'blue' },
    },
    // Books: Daenerys I (chapter 86), she introduces herself to Daenerys at
    // Vaes Tolorro (A Wiki of Ice and Fire's Quaithe page, citing Chapter
    // 12), an explicit signal of her own beside Jhogo's narration-level line
    // (owner, 2026-11-22). The show has her in "The Ghost of Harrenhal"
    // (episode 15) and "A Man Without Honor", where she tells Jorah "I am no
    // one"; no synopsis or quote has her name said, so she is the books'
    // alone (an owner check). Episode 15 only orders her.
    {
      id: 'quaithe',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 15,
      revealedAtChapter: 86,
      name: { it: 'Quaithe', en: 'Quaithe' },
      summary: {
        it: 'Una donna dell’Ombra che raggiunge Daenerys da Qarth.',
        en: 'A woman of the Shadow who comes to Daenerys from Qarth.',
      },
      visual: { art: 'quaithe', tint: 'sand' },
    },
    // Show only: in "The Ghost of Harrenhal" (episode 15) Jorah tells
    // Daenerys what her riders say at Xaro's feast, "Malakho says the statue
    // is too heavy to carry". His earlier scenes are unnamed. The books have
    // no such character; Daenerys II (chapter 101), the chapter the episode
    // adapts, only orders him.
    {
      id: 'malakho',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 15,
      revealedAtChapter: 101,
      name: { it: 'Malakho', en: 'Malakho' },
      summary: {
        it: 'Un anziano guerriero dothraki del khalasar di Daenerys.',
        en: 'An old Dothraki warrior in Daenerys’s khalasar.',
      },
      visual: { art: 'malakho', tint: 'sand' },
    },
    // Books: Daenerys I (chapter 86), Daenerys names her three dragons.
    // The show first says the names in "The Children" (episode 40, Drogon)
    // and "The Wars to Come" (episode 41, Rhaegal and Viserion); its
    // season-2 synopses name them in narration only. The later show gates
    // stand past the stage (#852).
    {
      id: 'drogon',
      kind: 'character',
      revealedAtEpisode: 40,
      revealedAtChapter: 86,
      name: { it: 'Drogon', en: 'Drogon' },
      summary: {
        it: 'Il drago nero e rosso, uno dei tre che Daenerys ha fatto schiudere nella pira di Drogo.',
        en: 'The black and red dragon, one of the three Daenerys hatched in Drogo’s pyre.',
      },
      visual: { art: 'drogon', tint: 'red' },
    },
    {
      id: 'rhaegal',
      kind: 'character',
      revealedAtEpisode: 41,
      revealedAtChapter: 86,
      name: { it: 'Rhaegal', en: 'Rhaegal' },
      summary: {
        it: 'Il drago verde e bronzo, uno dei tre che Daenerys ha fatto schiudere nella pira di Drogo.',
        en: 'The green and bronze dragon, one of the three Daenerys hatched in Drogo’s pyre.',
      },
      visual: { art: 'rhaegal', tint: 'green' },
    },
    {
      id: 'viserion',
      kind: 'character',
      revealedAtEpisode: 41,
      revealedAtChapter: 86,
      name: { it: 'Viserion', en: 'Viserion' },
      summary: {
        it: 'Il drago color crema e oro, uno dei tre che Daenerys ha fatto schiudere nella pira di Drogo.',
        en: 'The cream and gold dragon, one of the three Daenerys hatched in Drogo’s pyre.',
      },
      visual: { art: 'viserion', tint: 'ivory' },
    },
    // Books only: Daenerys V (chapter 137), at the port of Qarth Daenerys
    // learns that the huge, scarred eunuch who saved her is the pit fighter
    // Strong Belwas, sent by Illyrio. The show has no such character;
    // episode 20 only orders him.
    {
      id: 'strong-belwas',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 20,
      revealedAtChapter: 137,
      name: { it: 'Belwas il Forte', en: 'Strong Belwas' },
      summary: {
        it: 'Un eunuco, ex combattente delle arene, mandato a Qarth dal magistro Illyrio.',
        en: 'A eunuch and former pit fighter, sent to Qarth by Magister Illyrio.',
      },
      visual: { art: 'strong-belwas', tint: 'orange' },
    },
    // Books only: Daenerys V (chapter 137), at the port of Qarth the old man
    // who knocked the manticore from Daenerys's hands introduces himself
    // as Arstan Whitebeard, Strong Belwas's squire (A Wiki of Ice and Fire,
    // Chapter 63 and the Belwas page). Filed under the name he has in the
    // stage (owner, 2026-11-22); the stage that reaches the books' later
    // reveal of who he is folds this record into that character's. The
    // show has no such character; episode 20 only orders him.
    {
      id: 'arstan-whitebeard',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 20,
      revealedAtChapter: 137,
      name: { it: 'Arstan Barbabianca', en: 'Arstan Whitebeard' },
      summary: {
        it: 'Un vecchio dei Sette Regni, scudiero di Belwas il Forte.',
        en: 'An old man from the Seven Kingdoms, squire to Strong Belwas.',
      },
      visual: { art: 'arstan-whitebeard', tint: 'ivory' },
    },
    // The places a scene of the stage is set in (#1469), each at its first
    // scene in each medium, as `game-of-thrones-season-2-places.md` lists
    // them. Show: "The North Remembers", the ranging arrives at the keep.
    // Books: Jon III (site chapter 97), the same arrival.
    {
      id: 'crasters-keep',
      kind: 'place',
      revealedAtEpisode: 11,
      revealedAtChapter: 97,
      name: { it: 'Fortezza di Craster', en: 'Craster’s Keep' },
      summary: {
        it: 'La dimora di un bruto oltre la Barriera, dove i Guardiani della Notte fanno sosta.',
        en: 'A wildling’s hall beyond the Wall, where the Night’s Watch stops on its way.',
      },
      visual: { art: 'crasters-keep', tint: 'ocher' },
    },
    // Show: "The North Remembers", Daenerys leads her people into the desert
    // and Jorah names it. Books: Daenerys I (site chapter 86), the crossing.
    {
      id: 'red-waste',
      kind: 'place',
      revealedAtEpisode: 11,
      revealedAtChapter: 86,
      name: { it: 'Desolazione Rossa', en: 'the Red Waste' },
      summary: {
        it: 'Un vasto deserto rosso nell’est di Essos.',
        en: 'A vast red desert in the east of Essos.',
      },
      visual: { art: 'red-waste', tint: 'orange' },
    },
    // Book only. Jon II (site chapter 87), the ranging finds the village
    // empty. The show's ranging passes empty villages in episode 11 and names
    // none; episode 11 orders it.
    {
      id: 'whitetree',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 11,
      revealedAtChapter: 87,
      name: { it: 'Albero Bianco', en: 'Whitetree' },
      summary: {
        it: 'Un villaggio di bruti abbandonato oltre la Barriera, sotto un grande albero del cuore.',
        en: 'An empty wildling village beyond the Wall, under a great heart tree.',
      },
      visual: { art: 'whitetree', tint: 'ivory' },
    },
    // Book only. Daenerys I (site chapter 86), her people find the ruined
    // city and call it the City of Bones. The show has no ruined city;
    // episode 11 orders it.
    {
      id: 'vaes-tolorro',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 11,
      revealedAtChapter: 86,
      name: { it: 'Vaes Tolorro', en: 'Vaes Tolorro' },
      summary: {
        it: 'Una città in rovina nella Desolazione Rossa.',
        en: 'A ruined city in the Red Waste.',
      },
      visual: { art: 'vaes-tolorro', tint: 'sand' },
    },
    // Show: "The Night Lands", Theon disembarks at Lordsport. Books: Theon I
    // (site chapter 85), the same landing.
    {
      id: 'lordsport',
      kind: 'place',
      revealedAtEpisode: 12,
      revealedAtChapter: 85,
      name: { it: 'Lordsport', en: 'Lordsport' },
      summary: {
        it: 'Un porto sull’isola di Pyke, nelle Isole di Ferro.',
        en: 'A harbour town on the island of Pyke, in the Iron Islands.',
      },
      visual: { art: 'lordsport', tint: 'teal' },
    },
    // Show: "What Is Dead May Never Die", Balon gives Theon a ship to raid its
    // fishing villages; the show sets no scene there (#1252). Books: Theon III
    // (site chapter 111), Theon's raid.
    {
      id: 'stony-shore',
      kind: 'place',
      revealedAtEpisode: 13,
      revealedAtChapter: 111,
      name: { it: 'Costa Pietrosa', en: 'the Stony Shore' },
      summary: {
        it: 'Una costa del Nord sul mare occidentale, con villaggi di pescatori.',
        en: 'A coast of the North on the western sea, with fishing villages.',
      },
      visual: { art: 'stony-shore', tint: 'blue' },
    },
    // Book only. Catelyn II (site chapter 96), Renly's host and tourney at
    // Bitterbridge. The show's camp in episode 13 is never named; episode 13
    // orders it.
    {
      id: 'bitterbridge',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 13,
      revealedAtChapter: 96,
      name: { it: 'Ponte Amaro', en: 'Bitterbridge' },
      summary: {
        it: 'Un castello presso un ponte, nell’Altopiano.',
        en: 'A castle by a bridge, in the Reach.',
      },
      visual: { art: 'bitterbridge', tint: 'green' },
    },
    // Show: "Garden of Bones" opens on the field after Robb's night attack.
    // Books: never visited; Sansa III (site chapter 106) names the battle
    // when Joffrey learns of it (#1252).
    {
      id: 'oxcross',
      kind: 'place',
      revealedAtEpisode: 14,
      revealedAtChapter: 106,
      name: { it: 'Oxcross', en: 'Oxcross' },
      summary: {
        it: 'Un villaggio nelle Terre dell’Ovest.',
        en: 'A village in the Westerlands.',
      },
      visual: { art: 'oxcross', tint: 'ocher' },
    },
    // Show only. "Garden of Bones", Jorah names the desert before Qarth's
    // walls, where the khalasar waits. The books have no such place; chapter
    // 101, where Daenerys II lets her into the city, orders it.
    {
      id: 'garden-of-bones',
      kind: 'place',
      source: 'episode',
      revealedAtEpisode: 14,
      revealedAtChapter: 101,
      name: { it: 'Giardino delle Ossa', en: 'the Garden of Bones' },
      summary: {
        it: 'Il deserto fuori dalle mura di Qarth.',
        en: 'The desert outside the walls of Qarth.',
      },
      visual: { art: 'garden-of-bones', tint: 'sand' },
    },
    // Show: "The Ghost of Harrenhal", Tyrion visits Hallyne at the
    // Guildhall. Books: Tyrion V (site chapter 94), the same visit.
    {
      id: 'guildhall-of-the-alchemists',
      kind: 'place',
      revealedAtEpisode: 15,
      revealedAtChapter: 94,
      name: {
        it: 'Palazzo dell’Ordine degli Alchimisti',
        en: 'the Guildhall of the Alchemists',
      },
      summary: {
        it: 'La sede della Gilda degli Alchimisti ad Approdo del Re.',
        en: 'The hall of the Alchemists’ Guild in King’s Landing.',
      },
      visual: { art: 'guildhall-of-the-alchemists', tint: 'acid' },
    },
    // Show: "The Ghost of Harrenhal", the ranging arrives at the Fist. Books:
    // Jon IV (site chapter 108), the same arrival.
    {
      id: 'fist-of-the-first-men',
      kind: 'place',
      revealedAtEpisode: 15,
      revealedAtChapter: 108,
      name: { it: 'Pugno dei Primi Uomini', en: 'the Fist of the First Men' },
      summary: {
        it: 'Un’antica collina oltre la Barriera, dove un tempo i Primi Uomini avevano un forte.',
        en: 'An old hill beyond the Wall, where the First Men once had a fort.',
      },
      visual: { art: 'fist-of-the-first-men', tint: 'ice' },
    },
    // Show: "The Old Gods and the New", Qhorin's party rides through the pass
    // Jeor names in episode 15. Books: Jon VI (site chapter 125), Jon and
    // Stonesnake climb to the watchers in the pass.
    {
      id: 'skirling-pass',
      kind: 'place',
      revealedAtEpisode: 16,
      revealedAtChapter: 125,
      name: { it: 'Passo Skirling', en: 'the Skirling Pass' },
      summary: {
        it: 'Un alto passo di montagna oltre la Barriera.',
        en: 'A high mountain pass beyond the Wall.',
      },
      visual: { art: 'skirling-pass', tint: 'cyan' },
    },
    // Show: "The Prince of Winterfell", Stannis tells Davos of his siege
    // in the castle; the show sets no scene there (#1252). Books: Catelyn III
    // (site chapter 105), Renly's camp below the castle Stannis besieges.
    {
      id: 'storms-end',
      kind: 'place',
      revealedAtEpisode: 18,
      revealedAtChapter: 105,
      name: { it: 'Capo Tempesta', en: 'Storm’s End' },
      summary: {
        it: 'Il grande castello di Casa Baratheon, sulla costa delle Terre della Tempesta.',
        en: 'The great castle of House Baratheon, on the coast of the Stormlands.',
      },
      visual: { art: 'storms-end', tint: 'yellow' },
    },
    // Show: "The Prince of Winterfell", Stannis's fleet in the bay Salladhor
    // names in episode 12. Books: Davos III (site chapter 132), the fleet
    // sails in.
    {
      id: 'blackwater-bay',
      kind: 'place',
      revealedAtEpisode: 18,
      revealedAtChapter: 132,
      name: { it: 'Baia delle Acque Nere', en: 'Blackwater Bay' },
      summary: {
        it: 'La baia sotto Approdo del Re, dove le Rapide Nere sfociano in mare.',
        en: 'The bay below King’s Landing, where the Blackwater Rush meets the sea.',
      },
      visual: { art: 'blackwater-bay', tint: 'azure' },
    },
    // Show: "Valar Morghulis", Daenerys enters the house Pyat Pree names in
    // episode 15. Books: Daenerys IV (site chapter 122), the same visit,
    // named in Daenerys II (101), where Pyat Pree invites her.
    {
      id: 'house-of-the-undying',
      kind: 'place',
      revealedAtEpisode: 20,
      revealedAtChapter: 122,
      // Named before its first scene in both media: Pyat Pree invites
      // Daenerys in Daenerys II (chapter 101), which orders at episode 14 as
      // Qarth's visit does, and in "The Ghost of Harrenhal" (episode 15). The
      // leak scan reads one episode axis, so it takes the earlier naming.
      nameSaidAt: 14,
      name: { it: 'Casa degli Eterni', en: 'the House of the Undying' },
      summary: {
        it: 'La dimora degli stregoni di Qarth.',
        en: 'The house of the warlocks of Qarth.',
      },
      visual: { art: 'house-of-the-undying', tint: 'violet' },
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
      status: [
        { episode: 12, chapter: 82, source: 'chapter', value: 'alive' },
        // Bronn tells Tyrion that the gold cloaks killed him on the walls
        // when the king left them, in Tyrion I of A Storm of Swords (site
        // chapter 148). The books' alone; episode 20, where Tyrion wakes
        // after the battle, orders it.
        { episode: 20, chapter: 148, source: 'chapter', value: 'deceased' },
      ],
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
      // Tywin has her whipped and thrown out of the Red Keep, as Bronn tells
      // Tyrion in Tyrion I of A Storm of Swords (site chapter 148); her
      // release is left to a status issue of a later stage.
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
        it: 'A corte, dopo la vittoria sulle Acque Nere, chiede al re di sposare sua sorella Margaery.',
        en: 'At court, after the victory on the Blackwater, he asks the king to marry his sister Margaery.',
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
      status: [
        { episode: 11, chapter: 74, value: 'alive' },
        // The show alone: Brienne executes him after the battle at
        // Winterfell in "Mother's Mercy" (episode 50); the books leave him
        // alive, so chapter 344, the last, only orders it (#1471, #1238).
        { episode: 50, chapter: 344, source: 'episode', value: 'deceased' },
      ],
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
      status: [
        { episode: 11, chapter: 74, value: 'alive' },
        // The show alone: she takes off her choker outside Winterfell and
        // dies before dawn in "The Long Night" (episode 70); the books leave
        // her alive, so chapter 344 only orders it (#1471).
        { episode: 70, chapter: 344, source: 'episode', value: 'deceased' },
      ],
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
        it: 'Figlio di Davos Seaworth, al servizio di re Stannis.',
        en: 'The son of Davos Seaworth, in King Stannis’s service.',
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
      status: [
        { episode: 25, chapter: 74, value: 'alive' },
        // The show alone: she hangs herself in "Mother's Mercy" (episode
        // 50); the books leave her alive, so chapter 344 only orders it
        // (#1471).
        { episode: 50, chapter: 344, source: 'episode', value: 'deceased' },
      ],
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
      status: [
        { episode: 25, chapter: 74, value: 'alive' },
        // The show alone: she is burned as an offering in "The Dance of
        // Dragons" (episode 49); the books leave her alive, so chapter 344
        // only orders it (#1471).
        { episode: 49, chapter: 344, source: 'episode', value: 'deceased' },
      ],
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
        // Books only: Renly is killed in Catelyn IV (chapter 107), and she
        // flees with Catelyn without swearing anything yet. The show has her
        // swear in the same episode, 15, which only orders this step.
        {
          episode: 15,
          chapter: 107,
          source: 'chapter',
          value: {
            it: 'Ex guardia di re Renly',
            en: 'Former guard of King Renly',
          },
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
      status: [
        { episode: 13, chapter: 96, value: 'alive' },
        // The show alone: she dies in the wildfire under the Great Sept in
        // "The Winds of Winter" (episode 60); the books leave her alive, so
        // chapter 344 only orders it (#1471).
        { episode: 60, chapter: 344, source: 'episode', value: 'deceased' },
      ],
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
      status: [
        { episode: 32, chapter: 139, value: 'alive' },
        // The show alone: he dies in the wildfire under the Great Sept in
        // "The Winds of Winter" (episode 60); the books leave him alive, so
        // chapter 344 only orders it (#1471).
        { episode: 60, chapter: 344, source: 'episode', value: 'deceased' },
      ],
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
        // Outlaws ambush him on the road to King's Landing and he dies, in
        // Jaime III of A Storm of Swords (chapter 165); episode 22, where the
        // show's Jaime and Brienne are taken on that road, only orders it.
        { episode: 22, chapter: 165, source: 'chapter', value: 'deceased' },
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
          episode: 16,
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
        { episode: 16, chapter: 100, source: 'episode', value: 'alive' },
        // She is killed at the Red Wedding in "The Rains of Castamere"
        // (episode 29); chapter 195, the books' wedding, only orders it.
        { episode: 29, chapter: 195, source: 'episode', value: 'deceased' },
      ],
      // She tends Lannister and Stark wounded alike and tells Robb she takes
      // no side in his war ("Garden of Bones").
      affiliation: [
        {
          episode: 16,
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
      status: [
        { episode: 14, chapter: 100, value: 'alive' },
        // He dies at the inn at the crossroads, where Arya takes Needle back,
        // in "Two Swords" (episode 31) and in Arya XIII of A Storm of Swords
        // (chapter 218).
        { episode: 31, chapter: 218, value: 'deceased' },
      ],
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
        // Arya kills him at the inn at the crossroads, in Arya XIII of A Storm
        // of Swords (chapter 218); episode 31, the show's inn, only orders it.
        { episode: 31, chapter: 218, source: 'chapter', value: 'deceased' },
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
        it: 'Mette Arya a lavorare nella Torre del Lamento, a Harrenhal. Picchia chi non obbedisce.',
        en: 'He puts Arya to work in the Wailing Tower at Harrenhal. He beats anyone who does not obey.',
      },
      status: [
        { episode: 14, chapter: 104, source: 'chapter', value: 'alive' },
        // Arya gives Jaqen H'ghar his name, and he is found dead with his own
        // dog on his chest, in Arya VIII (chapter 112).
        { episode: 16, chapter: 112, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 14,
          chapter: 104,
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
        // Gregor Clegane takes Harrenhal back and kills him, as Raff and
        // Shitmouth tell Jaime in Jaime III of A Feast for Crows (chapter
        // 253); episode 38 only orders it.
        { episode: 38, chapter: 253, source: 'chapter', value: 'deceased' },
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
    // #1468: Essos and Qarth.
    'kovarro': {
      relationships: season2Relationships.kovarro,
      role: {
        it: 'Cavaliere di sangue di Daenerys',
        en: 'Daenerys’s bloodrider',
      },
      log: {
        it: 'È uno dei tre cavalieri di sangue rimasti con Daenerys. Nel Deserto Rosso lei lo manda in esplorazione insieme a Rakharo e Aggo, ognuno in una direzione diversa.',
        en: 'He is one of the three bloodriders who stayed with Daenerys. In the Red Waste she sends him out to scout with Rakharo and Aggo, each in a different direction.',
      },
      status: [{ episode: 11, chapter: 86, source: 'episode', value: 'alive' }],
      affiliation: [
        {
          episode: 11,
          chapter: 86,
          source: 'episode',
          value: { it: 'Khalasar di Daenerys', en: 'Daenerys’s khalasar' },
        },
      ],
    },
    'xaro-xhoan-daxos': {
      relationships: season2Relationships['xaro-xhoan-daxos'],
      role: [
        {
          episode: 15,
          chapter: 114,
          value: {
            it: 'Principe mercante dei Tredici',
            en: 'Merchant prince of the Thirteen',
          },
        },
        // "A Man Without Honor" (episode 17): Pyat Pree proclaims him King
        // of Qarth, then kills the rest of the Thirteen; the step reads
        // "Self-proclaimed", as the Game of Thrones Wiki's infobox has it. The show's alone;
        // Daenerys III (chapter 114), the chapter the episode adapts, orders
        // it.
        {
          episode: 17,
          chapter: 114,
          source: 'episode',
          value: {
            it: 'Sedicente re di Qarth',
            en: 'Self-proclaimed King of Qarth',
          },
        },
      ],
      log: {
        it: 'È uno dei Tredici, i principi mercanti di Qarth. Vuole vedere i draghi di Daenerys e le offre l’accoglienza della sua città.',
        en: 'He is one of the Thirteen, the merchant princes of Qarth. He wants to see Daenerys’s dragons, and offers her the welcome of his city.',
      },
      status: [
        { episode: 15, chapter: 114, value: 'alive' },
        // "Valar Morghulis" (episode 20): Daenerys has him locked in his
        // empty vault with Doreah, and the Game of Thrones Wiki counts him
        // among the episode's deaths. The books keep him alive; Daenerys V
        // (chapter 137), the chapter the episode adapts, orders it.
        { episode: 20, chapter: 137, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 15,
          chapter: 114,
          value: { it: 'I Tredici', en: 'The Thirteen' },
        },
      ],
    },
    'pyat-pree': {
      relationships: season2Relationships['pyat-pree'],
      role: { it: 'Stregone di Qarth', en: 'Warlock of Qarth' },
      log: {
        it: 'È venuto da Qarth con Xaro Xhoan Daxos e Quaithe per vedere i draghi di Daenerys. Jorah le consiglia di chiedere aiuto a lui.',
        en: 'He came from Qarth with Xaro Xhoan Daxos and Quaithe to see Daenerys’s dragons. Jorah urges her to go to him for help.',
      },
      status: [
        { episode: 14, chapter: 114, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 14,
          chapter: 114,
          source: 'chapter',
          value: { it: 'Stregoni di Qarth', en: 'Warlocks of Qarth' },
        },
      ],
    },
    'quaithe': {
      relationships: season2Relationships.quaithe,
      role: { it: 'Donna dell’Ombra', en: 'Woman of the Shadow' },
      log: {
        it: 'Arriva da Qarth insieme ad altri due stranieri, attraverso il Deserto Rosso, in cerca di draghi. Jhogo li porta da Daenerys nella città in rovina dove il khalasar si è fermato.',
        en: 'She comes from Qarth with two other strangers, across the Red Waste, looking for dragons. Jhogo brings them to Daenerys in the ruined city where her khalasar has stopped.',
      },
      status: [{ episode: 15, chapter: 86, source: 'chapter', value: 'alive' }],
      affiliation: [
        {
          episode: 15,
          chapter: 86,
          source: 'chapter',
          value: { it: 'Nessuna fedeltà', en: 'No allegiance' },
        },
      ],
    },
    'malakho': {
      relationships: season2Relationships.malakho,
      role: { it: 'Guerriero dothraki', en: 'Dothraki warrior' },
      log: {
        it: 'Segue Daenerys a Qarth. Alla festa di Xaro Xhoan Daxos, lui e Kovarro discutono se rubare una statua d’oro, e Daenerys glielo vieta.',
        en: 'He follows Daenerys to Qarth. At Xaro Xhoan Daxos’s feast he and Kovarro talk of stealing a golden statue, and Daenerys forbids it.',
      },
      status: [
        { episode: 15, chapter: 101, source: 'episode', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 15,
          chapter: 101,
          source: 'episode',
          value: { it: 'Khalasar di Daenerys', en: 'Daenerys’s khalasar' },
        },
      ],
    },
    'drogon': {
      relationships: season2Relationships.drogon,
      role: { it: 'Drago di Daenerys', en: 'Daenerys’s dragon' },
      log: {
        it: 'È uno dei tre draghi nati dalle uova di Daenerys nella pira funeraria di Drogo.',
        en: 'He is one of the three dragons hatched from Daenerys’s eggs in Drogo’s funeral pyre.',
      },
      status: [{ episode: 40, chapter: 86, value: 'alive' }],
      affiliation: [
        {
          episode: 40,
          chapter: 86,
          value: { it: 'Casa Targaryen', en: 'House Targaryen' },
        },
      ],
    },
    'rhaegal': {
      relationships: season2Relationships.rhaegal,
      role: { it: 'Drago di Daenerys', en: 'Daenerys’s dragon' },
      log: {
        it: 'È uno dei tre draghi nati dalle uova di Daenerys nella pira funeraria di Drogo.',
        en: 'He is one of the three dragons hatched from Daenerys’s eggs in Drogo’s funeral pyre.',
      },
      status: [
        { episode: 41, chapter: 86, value: 'alive' },
        // Shot down into the sea off Dragonstone in "The Last of the
        // Starks" (episode 71), the show's alone, filed with his drawing's
        // stage (#1475). The books leave him alive; chapter 344, their
        // last, orders it.
        { episode: 71, chapter: 344, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 41,
          chapter: 86,
          value: { it: 'Casa Targaryen', en: 'House Targaryen' },
        },
      ],
    },
    'viserion': {
      relationships: season2Relationships.viserion,
      role: { it: 'Drago di Daenerys', en: 'Daenerys’s dragon' },
      log: {
        it: 'È uno dei tre draghi nati dalle uova di Daenerys nella pira funeraria di Drogo.',
        en: 'He is one of the three dragons hatched from Daenerys’s eggs in Drogo’s funeral pyre.',
      },
      status: [
        { episode: 41, chapter: 86, value: 'alive' },
        // Killed by the Night King beyond the Wall in "Beyond the Wall"
        // (episode 66), the show's alone, and raised as a wight the same
        // night, filed with his drawing's stages (#1475). The books leave
        // him alive; chapter 344, their last, orders it.
        { episode: 66, chapter: 344, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 41,
          chapter: 86,
          value: { it: 'Casa Targaryen', en: 'House Targaryen' },
        },
      ],
    },
    'strong-belwas': {
      relationships: season2Relationships['strong-belwas'],
      role: { it: 'Ex combattente delle arene', en: 'Former pit fighter' },
      log: {
        it: 'Al porto di Qarth, lui e il suo scudiero salvano Daenerys da un assassino. Dice che li manda il magistro Illyrio, per riportarla a Pentos.',
        en: 'At the port of Qarth he and his squire save Daenerys from an assassin. He says Magister Illyrio has sent them to bring her back to Pentos.',
      },
      status: [
        { episode: 20, chapter: 137, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 20,
          chapter: 137,
          source: 'chapter',
          value: { it: 'Al servizio di Illyrio', en: 'Illyrio’s service' },
        },
      ],
    },
    'arstan-whitebeard': {
      relationships: season2Relationships['arstan-whitebeard'],
      role: { it: 'Scudiero di Belwas il Forte', en: 'Strong Belwas’s squire' },
      log: {
        it: 'Al porto di Qarth fa cadere dalle mani di Daenerys la scatola con la manticora. Dice di venire dai Sette Regni e che il magistro Illyrio ha mandato lui e Belwas a riportarla a Pentos.',
        en: 'At the port of Qarth he knocks the box with the manticore out of Daenerys’s hands. He says he comes from the Seven Kingdoms, and that Magister Illyrio has sent him and Belwas to bring her back to Pentos.',
      },
      status: [
        { episode: 20, chapter: 137, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 20,
          chapter: 137,
          source: 'chapter',
          value: { it: 'Al servizio di Illyrio', en: 'Illyrio’s service' },
        },
      ],
    },
  },
}

/**
 * The log entry of every season-2 place, by the place's id, in its own words
 * (`../placeWords`), as `SEASON_1_PLACES` has season 1's (#1469).
 * `filedHere` names the characters first met there; where the two media
 * meet one at different places, the show's place has them, and the book's
 * when the show's is not filed (an unnamed camp).
 */
export const SEASON_2_PLACES: Record<
  string,
  PlaceDossier<ThronesVocabulary>
> = {
  'crasters-keep': {
    form: 'fortress',
    region: 'beyond-the-wall',
    landmark: {
      it: 'Una bassa sala di tronchi dentro un muro di terra',
      en: 'A low hall of logs inside an earthen wall',
    },
    log: {
      it: 'Craster vive qui oltre la Barriera con le sue molte mogli, che sono anche sue figlie. I Guardiani della Notte vi fanno sosta durante la spedizione, e lui racconta che i bruti si stanno radunando.',
      en: 'Craster lives here beyond the Wall with his many wives, who are also his daughters. The Night’s Watch stops here on its ranging, and he tells them the wildlings are gathering.',
    },
    filedHere: ['craster', 'gilly', 'eddison-tollett'],
  },
  'red-waste': {
    form: 'desert',
    region: 'essos',
    landmark: {
      it: 'Terra rossa e screpolata sotto un cielo vuoto',
      en: 'Cracked red earth under an empty sky',
    },
    log: {
      it: 'Daenerys guida ciò che resta del suo khalasar in questo deserto, dove l’acqua scarseggia. Manda dei cavalieri in direzioni diverse a cercare una via per attraversarlo.',
      en: 'Daenerys leads what is left of her khalasar into this desert, where water is scarce. She sends riders out in different directions to find a way across.',
    },
    filedHere: ['kovarro'],
  },
  'whitetree': {
    form: 'town',
    region: 'beyond-the-wall',
    landmark: {
      it: 'Un enorme albero del cuore sopra poche capanne di pietra',
      en: 'A huge heart tree over a few stone huts',
    },
    log: {
      it: 'I Guardiani della Notte trovano il villaggio vuoto durante la spedizione oltre la Barriera. La gente se n’è andata, e nulla fa pensare a un attacco.',
      en: 'The Night’s Watch finds the village empty on its ranging beyond the Wall. Its people have gone, and nothing shows that they were attacked.',
    },
    filedHere: ['jarman-buckwell', 'mallador-locke'],
  },
  'vaes-tolorro': {
    form: 'ruin',
    region: 'essos',
    landmark: {
      it: 'Mura bianche e crepate attorno a una città vuota',
      en: 'Cracked white walls around an empty city',
    },
    log: {
      it: 'La gente di Daenerys trova questa città abbandonata nel deserto, con un pozzo d’acqua pulita e alberi da frutto tra le rovine. La chiamano la Città delle Ossa, e lei vi si ferma mentre i suoi cavalieri esplorano le terre intorno.',
      en: 'Daenerys’s people find this empty city in the desert, with a well of clean water and fruit trees among the ruins. They call it the City of Bones, and she rests there while her riders search the land around it.',
    },
    filedHere: ['quaithe'],
  },
  'lordsport': {
    form: 'town',
    region: 'the-iron-islands',
    landmark: {
      it: 'Navi lunghe ormeggiate in un piccolo porto di pietra',
      en: 'Longships moored in a small stone harbour',
    },
    log: {
      it: 'Theon Greyjoy sbarca qui dopo anni lontano dalle isole, aspettandosi un’accoglienza che non riceve. Dal porto prosegue verso il castello di suo padre.',
      en: 'Theon Greyjoy lands here after years away from the islands, expecting a welcome he does not get. From the harbour he rides on to his father’s castle.',
    },
    filedHere: ['aeron-greyjoy', 'dagmer'],
  },
  'stony-shore': {
    form: 'coast',
    region: 'the-north',
    landmark: {
      it: 'Capanne di pescatori su una spiaggia di sassi',
      en: 'Fishing huts on a beach of stones',
    },
    log: {
      it: 'Balon Greyjoy manda suo figlio Theon a razziare i villaggi di pescatori lungo questa costa.',
      en: 'Balon Greyjoy sends his son Theon to raid the fishing villages along this coast.',
    },
    filedHere: [],
  },
  'bitterbridge': {
    form: 'castle',
    region: 'the-reach',
    landmark: {
      it: 'Un ponte di pietra su un fiume, sotto un castello',
      en: 'A stone bridge over a river, below a castle',
    },
    log: {
      it: 'Il grande esercito di Renly Baratheon è accampato qui, e lui tiene un torneo nei campi. Catelyn Stark viene a cercare un’alleanza con lui per suo figlio.',
      en: 'Renly Baratheon’s great host camps here, and he holds a tourney in its fields. Catelyn Stark comes to seek an alliance with him for her son.',
    },
    filedHere: ['brienne-of-tarth', 'margaery-tyrell'],
  },
  'storms-end': {
    form: 'castle',
    region: 'the-stormlands',
    landmark: {
      it: 'Un unico enorme torrione rotondo dietro un’alta cinta di mura',
      en: 'One huge round tower behind a high curtain wall',
    },
    log: {
      it: 'È la sede di Casa Baratheon. Durante la ribellione di Robert, Stannis Baratheon lo tenne per un lungo assedio, finché un contrabbandiere non portò dentro cipolle e pesce salato.',
      en: 'It is the seat of House Baratheon. In Robert’s Rebellion, Stannis Baratheon held it through a long siege, until a smuggler brought in onions and salt fish.',
    },
    filedHere: ['cortnay-penrose'],
  },
  'oxcross': {
    form: 'town',
    region: 'the-westerlands',
    landmark: {
      it: 'Un guado sul fiume accanto a un villaggio',
      en: 'A river ford beside a village',
    },
    log: {
      it: 'L’esercito di Robb Stark distrugge qui un esercito dei Lannister.',
      en: 'Robb Stark’s army destroys a Lannister army here.',
    },
    filedHere: ['talisa-maegyr'],
  },
  'garden-of-bones': {
    form: 'desert',
    region: 'essos',
    landmark: {
      it: 'Ossa sbiancate nella sabbia davanti alle mura di una città',
      en: 'Bleached bones in the sand before a city’s walls',
    },
    log: {
      it: 'I viaggiatori che Qarth respinge muoiono di sete in questo deserto davanti alle sue mura, e le loro ossa restano nella sabbia. Daenerys e la sua gente aspettano qui la risposta della città.',
      en: 'The travellers Qarth turns away die of thirst in this desert before its walls, and their bones stay in the sand. Daenerys and her people wait here for the city’s answer.',
    },
    filedHere: [],
  },
  'guildhall-of-the-alchemists': {
    form: 'order',
    region: 'the-crownlands',
    landmark: {
      it: 'Giare di altofuoco verde nei sotterranei',
      en: 'Jars of green wildfire in its vaults',
    },
    log: {
      it: 'I piromanti della gilda producono qui l’altofuoco, un fuoco verde che l’acqua non spegne. Tyrion Lannister viene a sapere quanto ne sta producendo la gilda.',
      en: 'The guild’s pyromancers make wildfire here, a green fire that water cannot put out. Tyrion Lannister comes to learn how much of it the guild is making.',
    },
    filedHere: ['hallyne'],
  },
  'fist-of-the-first-men': {
    form: 'hill',
    region: 'beyond-the-wall',
    landmark: {
      it: 'Una ripida collina rocciosa con antiche pietre sulla cima',
      en: 'A steep rocky hill with old stones on its crown',
    },
    log: {
      it: 'I Guardiani della Notte si accampano su questa collina durante la spedizione oltre la Barriera, in attesa di altri ranger.',
      en: 'The Night’s Watch makes camp on this hill on its ranging beyond the Wall, to wait for more rangers.',
    },
    filedHere: ['qhorin-halfhand', 'stonesnake'],
  },
  'skirling-pass': {
    form: 'pass',
    region: 'beyond-the-wall',
    landmark: {
      it: 'Uno stretto passaggio tra picchi innevati',
      en: 'A narrow way between snowy peaks',
    },
    log: {
      it: 'Un piccolo gruppo dei Guardiani della Notte incontra delle vedette dei bruti nel passo. Jon Snow prende viva l’ultima di loro, una giovane donna di nome Ygritte.',
      en: 'A small party of the Night’s Watch meets wildling scouts in the pass. Jon Snow takes the last of them alive, a young woman named Ygritte.',
    },
    filedHere: ['ygritte', 'ebben', 'dalbridge', 'lord-of-bones'],
  },
  'blackwater-bay': {
    form: 'bay',
    region: 'the-crownlands',
    landmark: {
      it: 'La foce del fiume sotto la collina della città',
      en: 'The river’s mouth below the city’s hill',
    },
    log: {
      it: 'La flotta di Stannis Baratheon entra nella baia per attaccare Approdo del Re.',
      en: 'Stannis Baratheon’s fleet sails into the bay to attack King’s Landing.',
    },
    filedHere: [],
  },
  'house-of-the-undying': {
    form: 'order',
    region: 'essos',
    landmark: {
      it: 'Un’alta torre di pietra senza porte',
      en: 'A tall stone tower with no door',
    },
    log: {
      it: 'Gli stregoni di Qarth vivono in questa dimora. Daenerys vi entra, e loro le mostrano visioni e cercano di trattenerla. Il fuoco di drago la libera.',
      en: 'The warlocks of Qarth live in this house. Daenerys goes in, and they show her visions and try to keep her. Dragon fire sets her free.',
    },
    filedHere: [],
  },
}
