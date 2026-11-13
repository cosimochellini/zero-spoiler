import type { PlaceDossier } from '~/data/types'

import type { ThronesSaga, ThronesVocabulary } from './saga'

/**
 * Season 1 of the show and *A Game of Thrones*: the main cast (#852), the
 * recurring characters of Winterfell, King’s Landing, the Vale and the
 * Riverlands (#1006), the Night’s Watch (#1007), Daenerys’s storyline in Essos (#1008) and the places its scenes are set in (#853), each filed where they appear and are named, in each medium. Chapters are the
 * site's absolute ones: the book's prologue is chapter 1, so its chapter N
 * is N + 1. Every dated step pins its chapter, because the two media gate
 * the same fact at unrelated numbers. Gates and steps are taken from the
 * Game of Thrones Wiki and A Wiki of Ice and Fire; the checks still open
 * are in `docs/content-provenance/game-of-thrones.json`.
 */
export const season1: ThronesSaga = {
  name: { it: 'Stagione 1', en: 'Season 1' },
  heading: {
    id: 'season-1',
    summary: {
      it: 'La prima stagione della serie e il primo libro, *A Game of Thrones*.',
      en: 'The show’s first season and the first book, *A Game of Thrones*.',
    },
    visual: { art: 'season-1', tint: 'red' },
  },
  entries: [
    // Show: "Winter Is Coming", he rides out to behead a deserter and is called
    // Lord Stark and Ned. Books: Bran I (site chapter 2), the same execution.
    {
      id: 'eddard-stark',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 2,
      name: { it: 'Eddard Stark', en: 'Eddard Stark' },
      summary: {
        it: 'Il lord di Grande Inverno, che governa il Nord e fa giustizia di persona.',
        en: 'The lord of Winterfell, who rules the North and carries out his own sentences.',
      },
      visual: { art: 'eddard-stark', tint: 'ice' },
    },
    // Show: "Winter Is Coming", she brings her husband the news of the Hand's
    // death. Books: Catelyn I (site chapter 3), the same scene in the godswood.
    {
      id: 'catelyn-stark',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 3,
      name: { it: 'Catelyn Stark', en: 'Catelyn Stark' },
      summary: {
        it: 'La moglie di Eddard Stark e la signora di Grande Inverno.',
        en: 'Eddard Stark’s wife and the lady of Winterfell.',
      },
      visual: { art: 'catelyn-stark', tint: 'blue' },
    },
    // Show: "Winter Is Coming", at the archery practice and the execution.
    // Books: Bran I (site chapter 2), he rides to the execution and finds the pups.
    {
      id: 'robb-stark',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 2,
      name: { it: 'Robb Stark', en: 'Robb Stark' },
      summary: {
        it: 'Il figlio maggiore di Eddard Stark ed erede di Grande Inverno.',
        en: 'Eddard Stark’s eldest son and the heir to Winterfell.',
      },
      visual: { art: 'robb-stark', tint: 'ocher' },
    },
    // Show: "Winter Is Coming", at her needlework and in the yard for the king.
    // Books: Eddard I (site chapter 5), in the yard when the king arrives, and
    // named in the betrothal talk.
    {
      id: 'sansa-stark',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 5,
      name: { it: 'Sansa Stark', en: 'Sansa Stark' },
      summary: {
        it: 'La figlia maggiore di Eddard e Catelyn Stark.',
        en: 'The elder daughter of Eddard and Catelyn Stark.',
      },
      visual: { art: 'sansa-stark', tint: 'lavender' },
    },
    // Show: "Winter Is Coming", she shoots the arrow past Bran and greets the
    // king in a helmet. Books: Eddard I (site chapter 5), in the yard when the
    // king arrives.
    {
      id: 'arya-stark',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 5,
      name: { it: 'Arya Stark', en: 'Arya Stark' },
      summary: {
        it: 'La figlia minore di Eddard e Catelyn Stark.',
        en: 'The younger daughter of Eddard and Catelyn Stark.',
      },
      visual: { art: 'arya-stark', tint: 'sand' },
    },
    // Show: "Winter Is Coming", at the archery practice and the execution.
    // Books: Bran I (site chapter 2), his own chapter.
    {
      id: 'bran-stark',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 2,
      name: { it: 'Bran Stark', en: 'Bran Stark' },
      summary: {
        it: 'Uno dei figli più piccoli di Eddard Stark.',
        en: 'One of Eddard Stark’s younger sons.',
      },
      visual: { art: 'bran-stark', tint: 'green' },
    },
    // Show: "Winter Is Coming", in the yard when the king arrives. Books:
    // Eddard I (site chapter 5), in the same welcome.
    {
      id: 'rickon-stark',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 5,
      name: { it: 'Rickon Stark', en: 'Rickon Stark' },
      summary: {
        it: 'Il figlio più piccolo di Eddard e Catelyn Stark.',
        en: 'The youngest son of Eddard and Catelyn Stark.',
      },
      visual: { art: 'rickon-stark', tint: 'acid' },
    },
    // Show: "Winter Is Coming", at the archery practice and the execution.
    // Books: Bran I (site chapter 2), he tells Bran not to look away.
    {
      id: 'jon-snow',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 2,
      name: { it: 'Jon Snow', en: 'Jon Snow' },
      summary: {
        it: 'Il figlio bastardo di Eddard Stark, cresciuto a Grande Inverno con i fratellastri.',
        en: 'Eddard Stark’s bastard son, raised at Winterfell with his half-siblings.',
      },
      visual: { art: 'jon-snow', tint: 'blue' },
    },
    // Show: "Winter Is Coming", he arrives for the feast and talks with Jon.
    // Books: Jon I (site chapter 6), the same talk at the feast.
    {
      id: 'benjen-stark',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 6,
      name: { it: 'Benjen Stark', en: 'Benjen Stark' },
      summary: {
        it: 'Il fratello minore di Eddard Stark, ranger dei Guardiani della notte.',
        en: 'Eddard Stark’s younger brother, a ranger of the Night’s Watch.',
      },
      visual: { art: 'benjen-stark', tint: 'cyan' },
    },
    // Show: found as a pup in episode 1, first called by name in "The Pointy
    // End" (episode 8), the first synopsis that names him.
    // Books: Jon II (site chapter 11), in the yard at Robb's farewell to Jon.
    {
      id: 'grey-wind',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 11,
      name: { it: 'Vento Grigio', en: 'Grey Wind' },
      summary: {
        it: 'Il meta-lupo di Robb Stark.',
        en: 'Robb Stark’s direwolf.',
      },
      visual: { art: 'grey-wind', tint: 'azure' },
    },
    // Show: "Winter Is Coming", found as a pup; Sansa names her. Books: Sansa I
    // (site chapter 16), Sansa feeds her under the table at the inn.
    {
      id: 'lady-direwolf',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 16,
      commonWord: true,
      name: { it: 'Lady', en: 'Lady' },
      summary: {
        it: 'La meta-lupa di Sansa Stark.',
        en: 'Sansa Stark’s direwolf.',
      },
      visual: { art: 'lady-direwolf', tint: 'pink' },
    },
    // Show: found as a pup in episode 1, first called by name in "The
    // Kingsroad" (episode 2). Books: Arya I
    // (site chapter 8), she waits for Arya after the needlework lesson.
    {
      id: 'nymeria',
      kind: 'character',
      revealedAtEpisode: 2,
      revealedAtChapter: 8,
      name: { it: 'Nymeria', en: 'Nymeria' },
      summary: {
        it: 'La meta-lupa di Arya Stark.',
        en: 'Arya Stark’s direwolf.',
      },
      visual: { art: 'nymeria', tint: 'orange' },
    },
    // Show: found as a pup in episode 1, first called by name in "Cripples,
    // Bastards, and Broken Things" (episode 4). Books: Bran III
    // (site chapter 18), Bran wakes and gives his name.
    {
      id: 'summer-direwolf',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 18,
      name: { it: 'Estate', en: 'Summer' },
      summary: {
        it: 'Il meta-lupo di Bran Stark.',
        en: 'Bran Stark’s direwolf.',
      },
      visual: { art: 'summer-direwolf', tint: 'yellow' },
    },
    // Show: found as a pup in episode 1, first called by name in "Fire and
    // Blood" (episode 10). Books: Bran IV
    // (site chapter 25), playing with Rickon in the yard.
    {
      id: 'shaggydog',
      kind: 'character',
      revealedAtEpisode: 10,
      revealedAtChapter: 25,
      name: { it: 'Cagnaccio', en: 'Shaggydog' },
      summary: {
        it: 'Il meta-lupo di Rickon Stark.',
        en: 'Rickon Stark’s direwolf.',
      },
      visual: { art: 'shaggydog', tint: 'violet' },
    },
    // Show: the runt Jon claims in episode 1, first called by name in
    // "Cripples, Bastards, and Broken Things" (episode 4). Books: Jon I
    // (site chapter 6), Jon feeds him at the feast and explains the name.
    {
      id: 'ghost-direwolf',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 6,
      name: { it: 'Spettro', en: 'Ghost' },
      summary: {
        it: 'Il meta-lupo bianco di Jon Snow.',
        en: 'Jon Snow’s white direwolf.',
      },
      visual: { art: 'ghost-direwolf', tint: 'ivory' },
    },
    // Show: rides out to the deserter’s execution and finds the direwolf pups,
    // "Winter Is Coming" (episode 1; spoken name unverified). Books: Bran I,
    // named as Lord Eddard’s ward bringing Ice to the execution (chapter 2).
    {
      id: 'theon-greyjoy',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 2,
      name: { it: 'Theon Greyjoy', en: 'Theon Greyjoy' },
      summary: {
        it: 'Il pupillo di Eddard Stark, cresciuto a Grande Inverno insieme ai suoi figli.',
        en: 'Eddard Stark’s ward, raised at Winterfell alongside his sons.',
      },
      visual: { art: 'theon-greyjoy', tint: 'ocher' },
    },
    // Show: brings the hidden letter to Lord and Lady Stark, "Winter Is Coming"
    // (episode 1; spoken name unverified). Books: Catelyn II, announced as
    // Maester Luwin with the letter hidden in a box (chapter 7).
    {
      id: 'luwin',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 7,
      name: { it: 'Luwin', en: 'Luwin' },
      summary: {
        it: 'Il maestro di Grande Inverno, che consiglia gli Stark e cura i malati del castello.',
        en: 'The maester of Winterfell, who advises the Starks and tends the castle’s sick.',
      },
      visual: { art: 'luwin', tint: 'sand' },
    },
    // Show: tells Lord Stark the deserter has been caught, "Winter Is Coming"
    // (episode 1; spoken name unverified). Books: Arya I, watching Bran and
    // Tommen spar in the yard as master-at-arms (chapter 8).
    {
      id: 'rodrik-cassel',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 8,
      name: { it: 'Rodrik Cassel', en: 'Rodrik Cassel' },
      summary: {
        it: 'Il maestro d’armi di Grande Inverno, un cavaliere anziano al servizio degli Stark.',
        en: 'The master-at-arms of Winterfell, an old knight in the Starks’ service.',
      },
      visual: { art: 'rodrik-cassel', tint: 'ivory' },
    },
    // Show: sits by Bran’s bed and tells him of the Long Night, "Lord Snow"
    // (episode 3; spoken name unverified). Books: Catelyn III, bathes Catelyn
    // after the attack on Bran (chapter 15).
    {
      id: 'old-nan',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 15,
      name: { it: 'Vecchia Nan', en: 'Old Nan' },
      summary: {
        it: 'Un’anziana della servitù di Grande Inverno che racconta storie ai figli degli Stark.',
        en: 'An old servant at Winterfell who tells stories to the Stark children.',
      },
      visual: { art: 'old-nan', tint: 'lavender' },
    },
    // Show: seen unnamed among the household in episode 1; Theon calls him by
    // name to carry Bran to the hall, "Cripples, Bastards, and Broken Things"
    // (episode 4). Books: Bran IV, carries Bran down to the hall (chapter 25);
    // his earlier chapters are mentions and Bran’s dream in Bran III.
    {
      id: 'hodor',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 25,
      name: { it: 'Hodor', en: 'Hodor' },
      summary: {
        it: 'Un servitore di Grande Inverno, enorme e semplice, che dice una sola parola: il suo nome.',
        en: 'A huge, simple servant at Winterfell who says only one word: his own name.',
      },
      visual: { art: 'hodor', tint: 'green' },
    },
    // Show: one of the outlaws who waylay Bran in the wolfswood, "A Golden
    // Crown" (episode 6; spoken name unverified). Books: Bran V, the tall woman
    // named in the same ambush (chapter 38).
    {
      id: 'osha',
      kind: 'character',
      revealedAtEpisode: 6,
      revealedAtChapter: 38,
      name: { it: 'Osha', en: 'Osha' },
      summary: {
        it: 'Una donna dei Bruti che tende un agguato a Bran nel bosco e si arrende a suo fratello.',
        en: 'A wildling woman who waylays Bran in the woods and surrenders to his brother.',
      },
      visual: { art: 'osha', tint: 'teal' },
    },
    // Show: teaches Sansa and Arya needlework, "Winter Is Coming" (episode 1;
    // spoken name unverified). Books: Arya I, Septa Mordane at the needlework
    // lesson (chapter 8).
    {
      id: 'mordane',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 8,
      name: { it: 'Mordane', en: 'Mordane' },
      summary: {
        it: 'La septa che educa le figlie di Eddard Stark.',
        en: 'The septa who teaches Eddard Stark’s daughters.',
      },
      visual: { art: 'mordane', tint: 'ice' },
    },
    // Show: rides with Lord Stark to the execution, "Winter Is Coming" (episode
    // 1; spoken name unverified). Books: Bran I, among the riders who find the
    // direwolf (chapter 2).
    {
      id: 'jory-cassel',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 2,
      name: { it: 'Jory Cassel', en: 'Jory Cassel' },
      summary: {
        it: 'Il capitano della guardia di Eddard Stark.',
        en: 'The captain of Eddard Stark’s guard.',
      },
      visual: { art: 'jory-cassel', tint: 'blue' },
    },
    // Show: Lord Commander Mormont with Tyrion at Castle Black, "Lord Snow"
    // (episode 3; spoken name unverified). Books: Jon III, gives Jon his
    // brother’s letter (chapter 20).
    {
      id: 'jeor-mormont',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 20,
      name: { it: 'Jeor Mormont', en: 'Jeor Mormont' },
      summary: {
        it: 'Il lord comandante dei Guardiani della notte, a Castello Nero.',
        en: 'The Lord Commander of the Night’s Watch, at Castle Black.',
      },
      visual: { art: 'jeor-mormont', tint: 'azure' },
    },
    // Show: Maester Aemon with the Lord Commander and Tyrion, "Lord Snow"
    // (episode 3; spoken name unverified). Books: Tyrion III, at the officers’
    // supper, calls Tyrion a giant (chapter 22).
    {
      id: 'aemon',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 22,
      name: { it: 'Aemon', en: 'Aemon' },
      summary: {
        it: 'Il maestro di Castello Nero, cieco e molto anziano.',
        en: 'The maester of Castle Black, blind and very old.',
      },
      visual: { art: 'aemon', tint: 'violet' },
    },
    // Show: arrives in the yard and gives his name, "Cripples, Bastards, and
    // Broken Things" (episode 4). Books: Jon IV, enters the yard and introduces
    // himself (chapter 27).
    {
      id: 'samwell-tarly',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 27,
      name: { it: 'Samwell Tarly', en: 'Samwell Tarly' },
      summary: {
        it: 'Un ragazzo di nobile famiglia mandato alla Barriera, che si dichiara un codardo.',
        en: 'A boy of a noble family sent to the Wall, who calls himself a coward.',
      },
      visual: { art: 'samwell-tarly', tint: 'yellow' },
    },
    // Show: trains Jon and the recruits, "Lord Snow" (episode 3; spoken name
    // unverified). Books: Jon III, Ser Alliser at sword training (chapter 20).
    {
      id: 'alliser-thorne',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 20,
      name: { it: 'Alliser Thorne', en: 'Alliser Thorne' },
      summary: {
        it: 'Il maestro d’armi di Castello Nero, che addestra le reclute e deride Jon chiamandolo “Lord Snow”.',
        en: 'The master-at-arms of Castle Black, who trains the recruits and mocks Jon as “Lord Snow”.',
      },
      visual: { art: 'alliser-thorne', tint: 'sand' },
    },
    // Show: joins the party bound for the Wall with two convicts, "Lord Snow"
    // (episode 3; spoken name unverified). Books: Tyrion II, met at the edge of
    // the wolfswood (chapter 14).
    {
      id: 'yoren',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 14,
      name: { it: 'Yoren', en: 'Yoren' },
      summary: {
        it: 'Un confratello dei Guardiani della notte che gira il regno in cerca di reclute.',
        en: 'A brother of the Night’s Watch who travels the realm looking for recruits.',
      },
      visual: { art: 'yoren', tint: 'cyan' },
    },
    // Show: arrives at Winterfell with the king and is named as the queen in
    // "Winter Is Coming". Books: Eddard I, Ned bows as Queen Cersei steps down
    // from the wheelhouse.
    {
      id: 'cersei-lannister',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 5,
      name: { it: 'Cersei Lannister', en: 'Cersei Lannister' },
      summary: {
        it: 'La regina dei Sette Regni, moglie di re Robert, che arriva a Grande Inverno con la corte.',
        en: 'The queen of the Seven Kingdoms, King Robert’s wife, who comes to Winterfell with the court.',
      },
      visual: { art: 'cersei-lannister', tint: 'ocher' },
    },
    // Show: rides into Winterfell in the white cloak of the king’s guard and is
    // named in "Winter Is Coming". Books: Eddard I, Ned picks out Ser Jaime
    // among the riders.
    {
      id: 'jaime-lannister',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 5,
      name: { it: 'Jaime Lannister', en: 'Jaime Lannister' },
      summary: {
        it: 'Un cavaliere della Guardia reale e fratello della regina, al seguito del re fino a Grande Inverno.',
        en: 'A knight of the Kingsguard and the queen’s brother, who rides north with the king.',
      },
      visual: { art: 'jaime-lannister', tint: 'yellow' },
    },
    // Show: named in "Winter Is Coming" ("You’re Tyrion Lannister? The Queen’s
    // brother?"). Books: Eddard I, Ned recognises him among the king’s party.
    {
      id: 'tyrion-lannister',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 5,
      name: { it: 'Tyrion Lannister', en: 'Tyrion Lannister' },
      summary: {
        it: 'Il fratello minore della regina, un nano che viaggia verso nord con la corte.',
        en: 'The queen’s younger brother, a dwarf who travels north with the court.',
      },
      visual: { art: 'tyrion-lannister', tint: 'wine' },
    },
    // Show: skins a stag in his camp and talks with Jaime in "You Win or You
    // Die". Books: Tyrion VII, Tyrion finds Lord Tywin at the inn at the
    // crossroads with his army.
    {
      id: 'tywin-lannister',
      kind: 'character',
      revealedAtEpisode: 7,
      revealedAtChapter: 57,
      name: { it: 'Tywin Lannister', en: 'Tywin Lannister' },
      summary: {
        it: 'Il signore di Castel Granito, padre della regina e dei suoi fratelli, alla testa dell’esercito dei Lannister.',
        en: 'The lord of Casterly Rock, father of the queen and her brothers, at the head of the Lannister army.',
      },
      visual: { art: 'tywin-lannister', tint: 'ocher' },
    },
    // Show: named as the prince at the arrival in "Winter Is Coming". Books:
    // Eddard I, Ned recognises Prince Joffrey among the riders.
    {
      id: 'joffrey-baratheon',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 5,
      name: { it: 'Joffrey Baratheon', en: 'Joffrey Baratheon' },
      summary: {
        it: 'Il figlio maggiore del re e suo erede, arrivato a nord con i genitori.',
        en: 'The king’s eldest son and heir, who comes north with his parents.',
      },
      visual: { art: 'joffrey-baratheon', tint: 'ocher' },
    },
    // Show: steps out of the wheelhouse at Winterfell in "Winter Is Coming".
    // Books: Jon I, Jon watches Princess Myrcella enter the feast on Robb’s arm.
    {
      id: 'myrcella-baratheon',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 6,
      name: { it: 'Myrcella Baratheon', en: 'Myrcella Baratheon' },
      summary: {
        it: 'La figlia del re e della regina, in viaggio con la famiglia reale.',
        en: 'The daughter of the king and queen, travelling with the royal family.',
      },
      visual: { art: 'myrcella-baratheon', tint: 'pink' },
    },
    // Show: steps out of the wheelhouse at Winterfell in "Winter Is Coming".
    // Books: Jon I, Prince Tommen escorts Arya into the feast.
    {
      id: 'tommen-baratheon',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 6,
      name: { it: 'Tommen Baratheon', en: 'Tommen Baratheon' },
      summary: {
        it: 'Il figlio minore del re e della regina, in viaggio con la famiglia reale.',
        en: 'The younger son of the king and queen, travelling with the royal family.',
      },
      visual: { art: 'tommen-baratheon', tint: 'flamingo' },
    },
    // Show: rides into Winterfell and greets Ned in "Winter Is Coming". Books:
    // Eddard I, King Robert calls out to Ned at the gate.
    {
      id: 'robert-baratheon',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 5,
      name: { it: 'Robert Baratheon', en: 'Robert Baratheon' },
      summary: {
        it: 'Il re dei Sette Regni, che viene a Grande Inverno a trovare il vecchio amico che ne è signore.',
        en: 'The king of the Seven Kingdoms, who comes to Winterfell to see his old friend, its lord.',
      },
      visual: { art: 'robert-baratheon', tint: 'orange' },
    },
    // Show: greets Ned at the small council in "Lord Snow". Books: Sansa I,
    // Sansa guesses the green knight is Renly, the king’s youngest brother.
    {
      id: 'renly-baratheon',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 16,
      name: { it: 'Renly Baratheon', en: 'Renly Baratheon' },
      summary: {
        it: 'Il fratello minore del re, un lord che segue la corte.',
        en: 'The king’s younger brother, a lord who keeps to the court.',
      },
      visual: { art: 'renly-baratheon', tint: 'green' },
    },
    // Show: receives Catelyn and Tyrion at the Eyrie in "The Wolf and the
    // Lion". Books: Catelyn VI, Catelyn reaches her sister at the Eyrie.
    {
      id: 'lysa-arryn',
      kind: 'character',
      revealedAtEpisode: 5,
      revealedAtChapter: 35,
      name: { it: 'Lysa Arryn', en: 'Lysa Arryn' },
      summary: {
        it: 'La sorella di Catelyn, vedova del Primo Cavaliere del Re, chiusa con il figlio nel Nido dell’Aquila.',
        en: 'Catelyn’s sister, widow of the Hand of the King, shut away with her son in the Eyrie.',
      },
      visual: { art: 'lysa-arryn', tint: 'azure' },
    },
    // The books call him Robert Arryn; the show renames him Robin, and the
    // record takes the show’s name. Show: on his mother’s lap at the Eyrie in
    // "The Wolf and the Lion". Books: Catelyn VI, at Lysa’s side in the Eyrie.
    {
      id: 'robin-arryn',
      kind: 'character',
      revealedAtEpisode: 5,
      revealedAtChapter: 35,
      name: { it: 'Robin Arryn', en: 'Robin Arryn' },
      summary: {
        it: 'Il figlio piccolo e malaticcio di Lysa, lord del Nido dell’Aquila.',
        en: 'Lysa’s small and sickly son, lord of the Eyrie.',
      },
      visual: { art: 'robin-arryn', tint: 'ice' },
    },
    // Show: offers Tyrion his room at the inn at the crossroads in "Cripples,
    // Bastards, and Broken Things". Books: present unnamed at the inn in
    // Catelyn V; Tyrion IV names him on the high road.
    {
      id: 'bronn',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 32,
      name: { it: 'Bronn', en: 'Bronn' },
      summary: {
        it: 'Un mercenario che si trova alla locanda all’incrocio la notte in cui Tyrion viene fatto prigioniero.',
        en: 'A sellsword who is at the inn at the crossroads the night Tyrion is taken prisoner.',
      },
      visual: { art: 'bronn', tint: 'sand' },
    },
    // Show: Bronn brings her to Tyrion’s tent and she gives her name in
    // "Baelor". Books: Tyrion VIII, Bronn has found Tyrion a girl named Shae.
    {
      id: 'shae',
      kind: 'character',
      revealedAtEpisode: 9,
      revealedAtChapter: 63,
      name: { it: 'Shae', en: 'Shae' },
      summary: {
        it: 'Una giovane al seguito dell’esercito che Bronn porta a Tyrion la sera prima di una battaglia.',
        en: 'A young camp follower whom Bronn brings to Tyrion on the eve of a battle.',
      },
      visual: { art: 'shae', tint: 'magenta' },
    },
    // Show: bargains with Catelyn at the Twins in "Baelor". Books: Catelyn IX,
    // Catelyn meets him in his castle at the Twins.
    {
      id: 'walder-frey',
      kind: 'character',
      revealedAtEpisode: 9,
      revealedAtChapter: 60,
      name: { it: 'Walder Frey', en: 'Walder Frey' },
      summary: {
        it: 'Il vecchio signore delle Torri Gemelle, dove l’esercito di Robb deve attraversare il fiume.',
        en: 'The old lord of the Twins, where Robb’s army needs to cross the river.',
      },
      visual: { art: 'walder-frey', tint: 'teal' },
    },
    // Show only. Seen with Tyrion in "Winter Is Coming" but not named there; Theon
    // and Jon name her in "Cripples, Bastards, and Broken Things". The chapter
    // orders her at Bran IV, where Tyrion stops at Winterfell on his way back.
    {
      id: 'ros',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 4,
      revealedAtChapter: 25,
      name: { it: 'Ros', en: 'Ros' },
      summary: {
        it: 'Una prostituta del borgo fuori Grande Inverno.',
        en: 'A prostitute in the town outside Winterfell.',
      },
      visual: { art: 'ros', tint: 'lavender' },
    },
    // Show: the Hound brings Sansa to him at the Inn at the Crossroads and says
    // who he is, "The Kingsroad" (episode 2; spoken name unverified). Books:
    // Sansa I, Joffrey names him to Sansa as the King's Justice (chapter 16).
    {
      id: 'ilyn-payne',
      kind: 'character',
      revealedAtEpisode: 2,
      revealedAtChapter: 16,
      name: { it: 'Ilyn Payne', en: 'Ilyn Payne' },
      summary: {
        it: 'Il boia del re, un cavaliere che non può parlare.',
        en: 'The king’s headsman, a knight who cannot speak.',
      },
      visual: { art: 'ilyn-payne', tint: 'sand' },
    },
    // Show: trades war stories with the king and Jaime Lannister in the Red
    // Keep, "Lord Snow" (episode 3; spoken name unverified). Books: Sansa I,
    // introduces himself to Sansa as Lord Commander of the Kingsguard (chapter 16).
    {
      id: 'barristan-selmy',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 16,
      name: { it: 'Barristan Selmy', en: 'Barristan Selmy' },
      summary: {
        it: 'Il lord comandante della Guardia Reale, un vecchio cavaliere al servizio del re.',
        en: 'The Lord Commander of the Kingsguard, an old knight in the king’s service.',
      },
      visual: { art: 'barristan-selmy', tint: 'ice' },
    },
    // Show: brought before Eddard to teach Arya, "Lord Snow" (episode 3).
    // Books: Arya II, meets Arya in the Small Hall as her new dancing master
    // (chapter 23).
    {
      id: 'syrio-forel',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 23,
      name: { it: 'Syrio Forel', en: 'Syrio Forel' },
      summary: {
        it: 'Uno spadaccino di Braavos, un tempo primo spadaccino della città, assunto per insegnare la spada ad Arya Stark.',
        en: 'A swordsman from Braavos, once the city’s First Sword, hired to teach Arya Stark the sword.',
      },
      visual: { art: 'syrio-forel', tint: 'azure' },
    },
    // Show: greets Eddard on his arrival and sits at the small council,
    // "Lord Snow" (episode 3). Books: Catelyn IV, receives Catelyn in secret
    // in King's Landing (chapter 19).
    {
      id: 'petyr-baelish',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 19,
      name: { it: 'Petyr Baelish', en: 'Petyr Baelish' },
      summary: {
        it: 'Il maestro del conio del Concilio ristretto, che conosce Catelyn Stark fin da quando erano ragazzi.',
        en: 'The master of coin on the small council, who has known Catelyn Stark since they were young.',
      },
      visual: { art: 'petyr-baelish', tint: 'teal' },
    },
    // Show: greets Eddard at his first small council, "Lord Snow" (episode 3).
    // Books: Catelyn IV, joins Littlefinger and Catelyn to look at the dagger
    // (chapter 19).
    {
      id: 'varys',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 19,
      name: { it: 'Varys', en: 'Varys' },
      summary: {
        it: 'Il maestro dei sussurri del Concilio ristretto, che raccoglie tutto ciò che si dice in città.',
        en: 'The master of whisperers on the small council, who gathers what is said in the city.',
      },
      visual: { art: 'varys', tint: 'lavender' },
    },
    // Show: calls the small council to greet the new Hand, "Lord Snow"
    // (episode 3). Books: Eddard IV, waits for Eddard with the council and is
    // greeted as Grand Maester (chapter 21).
    {
      id: 'pycelle',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 21,
      name: { it: 'Pycelle', en: 'Pycelle' },
      summary: {
        it: 'Il gran maestro, un uomo molto anziano che siede nel Concilio ristretto del re.',
        en: 'The Grand Maester, a very old man who sits on the king’s small council.',
      },
      visual: { art: 'pycelle', tint: 'ivory' },
    },
    // Show: Littlefinger names the Hound, Sandor, while telling Sansa about his
    // scars at the tourney, "Cripples, Bastards, and Broken Things" (episode 4);
    // he is on screen from episode 1, his name aloud there unverified. Books:
    // Eddard I, Eddard recognizes him in the king's party at Winterfell (chapter 5).
    {
      id: 'sandor-clegane',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 5,
      name: { it: 'Sandor Clegane', en: 'Sandor Clegane' },
      summary: {
        it: 'Un uomo enorme che viaggia con il seguito del re e fa da guardia al principe Joffrey.',
        en: 'A huge man who travels with the king’s party and guards Prince Joffrey.',
      },
      visual: { art: 'sandor-clegane', tint: 'ocher' },
    },
    // Show: reports to the small council on the tourney crowds,
    // "Cripples, Bastards, and Broken Things" (episode 4). Books: Eddard VI,
    // the same report to the council (chapter 28).
    {
      id: 'janos-slynt',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 28,
      name: { it: 'Janos Slynt', en: 'Janos Slynt' },
      summary: {
        it: 'Il comandante della Guardia cittadina di Approdo del Re.',
        en: 'The commander of the City Watch of King’s Landing.',
      },
      visual: { art: 'janos-slynt', tint: 'yellow' },
    },
    // Show: the armorer introduces his apprentice to Eddard at the forge,
    // "Cripples, Bastards, and Broken Things" (episode 4). Books: Eddard VI,
    // the same visit to the forge (chapter 28).
    {
      id: 'gendry',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 28,
      name: { it: 'Gendry', en: 'Gendry' },
      summary: {
        it: 'Un apprendista armaiolo di Approdo del Re, che il precedente Primo Cavaliere era andato a trovare.',
        en: 'An armorer’s apprentice in King’s Landing whom the previous Hand went to see.',
      },
      visual: { art: 'gendry', tint: 'orange' },
    },
    // Show: kills Ser Hugh in a joust, and Littlefinger names him to Sansa as
    // the Mountain That Rides, "Cripples, Bastards, and Broken Things"
    // (episode 4). Books: Sansa II, thunders past Sansa at the Hand's tourney,
    // named in her account (chapter 30); the Hound himself tells her of the
    // burning that night.
    {
      id: 'gregor-clegane',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 30,
      name: { it: 'Gregor Clegane', en: 'Gregor Clegane' },
      summary: {
        it: 'Un cavaliere di statura enorme, detto la Montagna, fratello maggiore di Sandor Clegane.',
        en: 'A knight of enormous size, called the Mountain, Sandor Clegane’s elder brother.',
      },
      visual: { art: 'gregor-clegane', tint: 'sand' },
    },
    // Show: called to the lists and gives Sansa a rose, "The Wolf and the Lion"
    // (episode 5); named in episode 3 without appearing. Books: Sansa II, rides
    // in the Hand's tourney and gives Sansa a red rose (chapter 30).
    {
      id: 'loras-tyrell',
      kind: 'character',
      revealedAtEpisode: 5,
      revealedAtChapter: 30,
      name: { it: 'Loras Tyrell', en: 'Loras Tyrell' },
      summary: {
        it: 'Un giovane cavaliere di Casa Tyrell, detto il Cavaliere dei Fiori, che giostra al torneo in onore del nuovo Primo Cavaliere.',
        en: 'A young knight of House Tyrell, called the Knight of Flowers, who jousts in the tourney for the new Hand.',
      },
      visual: { art: 'loras-tyrell', tint: 'green' },
    },
    // Show: named in Pentos in "Winter Is Coming" (episode 1). Books: POV of
    // Daenerys I (AGOT chapter 3, site chapter 4), in Illyrio's manse.
    {
      id: 'daenerys-targaryen',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 4,
      name: { it: 'Daenerys Targaryen', en: 'Daenerys Targaryen' },
      summary: {
        it: 'Una principessa Targaryen in esilio, che il fratello vuole dare in sposa a un khal dothraki in cambio di un esercito.',
        en: 'An exiled Targaryen princess whose brother means to marry her to a Dothraki khal in exchange for an army.',
      },
      visual: { art: 'daenerys-targaryen', tint: 'ivory' },
    },
    // Show: named in Pentos in "Winter Is Coming" (episode 1). Books: opens
    // Daenerys I (AGOT chapter 3, site chapter 4), giving his sister a dress.
    {
      id: 'viserys-targaryen',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 4,
      name: { it: 'Viserys Targaryen', en: 'Viserys Targaryen' },
      summary: {
        it: 'Il figlio in esilio dell’ultimo re Targaryen, che rivendica il Trono di Spade e offre la sorella in sposa per avere un esercito dothraki.',
        en: 'The exiled son of the last Targaryen king, who claims the Iron Throne and offers his sister in marriage for a Dothraki army.',
      },
      visual: { art: 'viserys-targaryen', tint: 'lavender' },
    },
    // Show: comes to look at Daenerys outside Illyrio's manse, "Winter Is
    // Coming" (episode 1). Books: Illyrio points him out at the feast in his
    // manse, Daenerys I (AGOT chapter 3, site chapter 4).
    {
      id: 'drogo',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 4,
      name: { it: 'Drogo', en: 'Drogo' },
      summary: {
        it: 'Un khal dothraki a capo di un grande khalasar, al quale Daenerys viene promessa in sposa.',
        en: 'A Dothraki khal at the head of a great khalasar, to whom Daenerys is promised in marriage.',
      },
      visual: { art: 'drogo', tint: 'ocher' },
    },
    // Show: Illyrio introduces him at the wedding, "Winter Is Coming"
    // (episode 1). Books: Illyrio points him out at Drogo's feast, Daenerys I
    // (AGOT chapter 3, site chapter 4).
    {
      id: 'jorah-mormont',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 4,
      name: { it: 'Jorah Mormont', en: 'Jorah Mormont' },
      summary: {
        it: 'Un cavaliere in esilio dai Sette Regni che conosce bene i Dothraki.',
        en: 'A knight exiled from the Seven Kingdoms who knows the Dothraki well.',
      },
      visual: { art: 'jorah-mormont', tint: 'green' },
    },
    // Show: hosts the Targaryens in "Winter Is Coming" (episode 1). Books:
    // their host in Daenerys I (AGOT chapter 3, site chapter 4).
    {
      id: 'illyrio-mopatis',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 4,
      name: { it: 'Illyrio Mopatis', en: 'Illyrio Mopatis' },
      summary: {
        it: 'Un ricco magistro di Pentos che ospita i Targaryen in esilio e combina le nozze di Daenerys con Drogo.',
        en: 'A wealthy magister of Pentos who hosts the exiled Targaryens and arranges Daenerys’s marriage to Drogo.',
      },
      visual: { art: 'illyrio-mopatis', tint: 'yellow' },
    },
    // Show: one of Daenerys's handmaidens in the tent, "The Kingsroad"
    // (episode 2). Books: a wedding gift, named in Daenerys II (AGOT
    // chapter 11, site chapter 12).
    {
      id: 'irri',
      kind: 'character',
      revealedAtEpisode: 2,
      revealedAtChapter: 12,
      name: { it: 'Irri', en: 'Irri' },
      summary: {
        it: 'Un’ancella dothraki al servizio di Daenerys nel khalasar di Drogo.',
        en: 'A Dothraki handmaiden who serves Daenerys in Drogo’s khalasar.',
      },
      visual: { art: 'irri', tint: 'orange' },
    },
    // Show: tells the story of the second moon and teaches Daenerys, "The
    // Kingsroad" (episode 2). Books: a wedding gift, named in Daenerys II
    // (AGOT chapter 11, site chapter 12).
    {
      id: 'doreah',
      kind: 'character',
      revealedAtEpisode: 2,
      revealedAtChapter: 12,
      name: { it: 'Doreah', en: 'Doreah' },
      summary: {
        it: 'Un’ancella di Daenerys che le insegna come dare piacere al marito.',
        en: 'A handmaiden of Daenerys who teaches her how to please her husband.',
      },
      visual: { art: 'doreah', tint: 'pink' },
    },
    // Show: stops Viserys with his whip and talks with Jorah, "Lord Snow"
    // (episode 3). Books: listed among those appearing in Daenerys III (AGOT
    // chapter 23, site chapter 24), on the Dothraki sea.
    {
      id: 'rakharo',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 24,
      name: { it: 'Rakharo', en: 'Rakharo' },
      summary: {
        it: 'Un guerriero dothraki incaricato di proteggere Daenerys durante il viaggio del khalasar.',
        en: 'A Dothraki warrior charged with guarding Daenerys as the khalasar travels.',
      },
      visual: { art: 'rakharo', tint: 'teal' },
    },
    // Show: offers to treat Drogo's wound after the raid, "The Pointy End"
    // (episode 8). Books: rescued in the city of the Lamb Men, Daenerys VII
    // (AGOT chapter 61, site chapter 62).
    {
      id: 'mirri-maz-duur',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 62,
      name: { it: 'Mirri Maz Duur', en: 'Mirri Maz Duur' },
      summary: {
        it: 'Una sacerdotessa e guaritrice lhazareen, fatta prigioniera quando il khalasar di Drogo attacca il suo villaggio.',
        en: 'A Lhazareen godswife and healer, taken captive when Drogo’s khalasar attacks her town.',
      },
      visual: { art: 'mirri-maz-duur', tint: 'green' },
    },
    // Book only. Bran I (site chapter 2), he rides in Lord Eddard’s party that finds the direwolf pups. The show never casts him; episode 1, where the pups are found, orders him.
    {
      id: 'hullen',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 1,
      revealedAtChapter: 2,
      name: { it: 'Hullen', en: 'Hullen' },
      summary: {
        it: 'Il mastro dei cavalli di Grande Inverno, al servizio degli Stark.',
        en: 'The master of horse at Winterfell, in the Starks’ service.',
      },
      visual: { art: 'hullen', tint: 'sand' },
    },
    // Book only. Arya I (site chapter 8), at Septa Mordane’s needlework lesson with Sansa. In the show she is an extra no episode names on screen; episode 1 orders her.
    {
      id: 'jeyne-poole',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 1,
      revealedAtChapter: 8,
      name: { it: 'Jeyne Poole', en: 'Jeyne Poole' },
      summary: {
        it: 'La figlia dell’intendente di Grande Inverno e la migliore amica di Sansa Stark.',
        en: 'The daughter of Winterfell’s steward and Sansa Stark’s closest friend.',
      },
      visual: { art: 'jeyne-poole', tint: 'pink' },
    },
    // Show: “The Kingsroad” (episode 2), named as the smith who forged Arya’s sword for Jon; seen unnamed in episode 1. Books: Bran VI (site chapter 54), the first chapter he appears in, after mentions from Bran II on.
    {
      id: 'mikken',
      kind: 'character',
      revealedAtEpisode: 2,
      revealedAtChapter: 54,
      name: { it: 'Mikken', en: 'Mikken' },
      summary: {
        it: 'Il fabbro di Grande Inverno, che forgia le armi per la casa degli Stark.',
        en: 'The blacksmith of Winterfell, who forges arms for the Stark household.',
      },
      visual: { art: 'mikken', tint: 'ocher' },
    },
    // Book only. Catelyn III (site chapter 15), he reports to Catelyn as the new captain of the guard after the attack on Bran. The show has no such character; episode 2, which tells the same attack, orders him.
    {
      id: 'hallis-mollen',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 2,
      revealedAtChapter: 15,
      name: { it: 'Hallis Mollen', en: 'Hallis Mollen' },
      summary: {
        it: 'Il capitano della guardia di Grande Inverno dopo la partenza di lord Stark verso sud.',
        en: 'The captain of the guard at Winterfell after Lord Stark leaves for the south.',
      },
      visual: { art: 'hallis-mollen', tint: 'ice' },
    },
    // Show: “The Kingsroad” (episode 2), sparring with Arya by the river when Joffrey interferes. Books: Sansa I (site chapter 16), Arya rides off with him and the same quarrel follows.
    {
      id: 'mycah',
      kind: 'character',
      revealedAtEpisode: 2,
      revealedAtChapter: 16,
      name: { it: 'Mycah', en: 'Mycah' },
      summary: {
        it: 'Il figlio di un macellaio che viaggia verso sud al seguito del re e si allena con la spada insieme ad Arya Stark.',
        en: 'A butcher’s boy who travels south with the king’s party and practises swordplay with Arya Stark.',
      },
      visual: { art: 'mycah', tint: 'wine' },
    },
    // Show: “A Golden Crown” (episode 6), one of the deserters who waylay Bran in the wolfswood. Books: Bran V (site chapter 38), the same ambush. He dies in the scene that opens him, so the log tells it.
    {
      id: 'stiv',
      kind: 'character',
      revealedAtEpisode: 6,
      revealedAtChapter: 38,
      name: { it: 'Stiv', en: 'Stiv' },
      summary: {
        it: 'Un disertore dei Guardiani della notte che con Osha tende un agguato a Bran Stark nella Foresta del Lupo.',
        en: 'A deserter of the Night’s Watch who waylays Bran Stark in the wolfswood with Osha.',
      },
      visual: { art: 'stiv', tint: 'acid' },
    },
    // Show: “A Golden Crown” (episode 6), one of the deserters who waylay Bran in the wolfswood. Books: Bran V (site chapter 38), the gaunt man of the same ambush. He dies in the scene that opens him: Robb kills him in the show, Grey Wind in the book, so the log says neither.
    {
      id: 'wallen',
      kind: 'character',
      revealedAtEpisode: 6,
      revealedAtChapter: 38,
      name: { it: 'Wellen', en: 'Wallen' },
      summary: {
        it: 'Un disertore dei Guardiani della notte che con Stiv e Osha tende un agguato a Bran Stark nella Foresta del Lupo.',
        en: 'A deserter of the Night’s Watch who waylays Bran Stark in the wolfswood with Stiv and Osha.',
      },
      visual: { art: 'wallen', tint: 'teal' },
    },
    // Show: “The Pointy End” (episode 8), at Robb’s war council, demanding the vanguard. Books: Bran VI (site chapter 54), the same quarrel, where Grey Wind bites off two of his fingers.
    {
      id: 'greatjon-umber',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 54,
      name: { it: 'Greatjon Umber', en: 'Greatjon Umber' },
      summary: {
        it: 'Un enorme lord del Nord, a capo di Casa Umber, che risponde alla chiamata alle armi di Robb Stark.',
        en: 'A huge northern lord, the head of House Umber, who answers Robb Stark’s call to arms.',
      },
      visual: { art: 'greatjon-umber', tint: 'orange' },
    },
    // Show: “Oathbreaker” (episode 53), his first appearance, when he comes to Winterfell to treat with Ramsay. Books: Catelyn X (site chapter 64), in Robb’s guard at the Whispering Wood. The two media share little at either gate, so the text keeps to who he is.
    {
      id: 'smalljon-umber',
      kind: 'character',
      revealedAtEpisode: 53,
      revealedAtChapter: 64,
      name: { it: 'Smalljon Umber', en: 'Smalljon Umber' },
      summary: {
        it: 'Il figlio di Greatjon Umber, della casata che tiene l’Ultimo Focolare.',
        en: 'Greatjon Umber’s son, of the house that holds Last Hearth.',
      },
      visual: { art: 'smalljon-umber', tint: 'ice' },
    },
    // Show: “A Man Without Honor” (episode 17), the first episode that names him; an unnamed figure stands for him in episode 10. Books: Bran VI (site chapter 54), he arrives at Winterfell with his sons, the last of Robb’s bannermen.
    {
      id: 'rickard-karstark',
      kind: 'character',
      revealedAtEpisode: 17,
      revealedAtChapter: 54,
      name: { it: 'Rickard Karstark', en: 'Rickard Karstark' },
      summary: {
        it: 'Il lord di Karhold, uno dei signori del Nord che combattono nell’esercito di Robb Stark.',
        en: 'The lord of Karhold, one of the northern lords who fight in Robb Stark’s host.',
      },
      visual: { art: 'rickard-karstark', tint: 'cyan' },
    },
    // Show: “Garden of Bones” (episode 14), his first appearance, reporting to Robb after the battle at Oxcross. Books: Bran VI (site chapter 54), among Robb’s bannermen at Winterfell.
    {
      id: 'roose-bolton',
      kind: 'character',
      revealedAtEpisode: 14,
      revealedAtChapter: 54,
      name: { it: 'Roose Bolton', en: 'Roose Bolton' },
      summary: {
        it: 'Il lord di Forte Terrore, un signore del Nord silenzioso che combatte nell’esercito di Robb Stark.',
        en: 'The lord of the Dreadfort, a quiet northern lord who fights in Robb Stark’s host.',
      },
      visual: { art: 'roose-bolton', tint: 'lavender' },
    },
    // Show: “The Pointy End” (episode 8), among the lords at Robb’s war council. Books: Catelyn VIII (site chapter 56), at Robb’s war council at Moat Cailin, the first chapter he appears in.
    {
      id: 'galbart-glover',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 56,
      name: { it: 'Galbart Glover', en: 'Galbart Glover' },
      summary: {
        it: 'Il lord di Deepwood Motte, uno dei signori del Nord nell’esercito di Robb Stark.',
        en: 'The lord of Deepwood Motte, one of the northern lords in Robb Stark’s host.',
      },
      visual: { art: 'galbart-glover', tint: 'green' },
    },
    // Show: “The Broken Man” (episode 57), his first appearance, when Jon, Sansa and Davos ask him for men. Books: Bran VI (site chapter 54), at Winterfell, asking Robb for a command. The two media share little at either gate, so the text keeps to who he is.
    {
      id: 'robett-glover',
      kind: 'character',
      revealedAtEpisode: 57,
      revealedAtChapter: 54,
      name: { it: 'Robett Glover', en: 'Robett Glover' },
      summary: {
        it: 'Un membro di Casa Glover, la casata del Nord che ha sede a Deepwood Motte.',
        en: 'A member of House Glover, the northern house whose seat is Deepwood Motte.',
      },
      visual: { art: 'robett-glover', tint: 'blue' },
    },
    // Show: “The Pointy End” (episode 8), among the lords at Robb’s war council. Books: Bran VI (site chapter 54), she leads her people to Winterfell.
    {
      id: 'maege-mormont',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 54,
      name: { it: 'Maege Mormont', en: 'Maege Mormont' },
      summary: {
        it: 'La lady dell’Isola dell’Orso, a capo di Casa Mormont, che porta i suoi combattenti nell’esercito di Robb Stark.',
        en: 'The lady of Bear Island, the head of House Mormont, who brings her fighters to Robb Stark’s host.',
      },
      visual: { art: 'maege-mormont', tint: 'azure' },
    },
    // Book only. Catelyn X (site chapter 64), in Robb’s guard at the Whispering Wood. The show has no such character; episode 9, where Robb takes Jaime, orders her.
    {
      id: 'dacey-mormont',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 9,
      revealedAtChapter: 64,
      name: { it: 'Dacey Mormont', en: 'Dacey Mormont' },
      summary: {
        it: 'La figlia maggiore di lady Maege Mormont, che combatte nella guardia di Robb Stark.',
        en: 'Lady Maege Mormont’s eldest daughter, who fights in Robb Stark’s guard.',
      },
      visual: { art: 'dacey-mormont', tint: 'magenta' },
    },
    // Show: “The Rains of Castamere” (episode 29), his only appearance, at the wedding feast at the Twins. Books: Catelyn VIII (site chapter 56), he rides with Catelyn to Moat Cailin.
    {
      id: 'wendel-manderly',
      kind: 'character',
      revealedAtEpisode: 29,
      revealedAtChapter: 56,
      name: { it: 'Wendel Manderly', en: 'Wendel Manderly' },
      summary: {
        it: 'Un cavaliere di Casa Manderly, figlio del lord di Porto Bianco.',
        en: 'A knight of House Manderly, a son of the lord of White Harbor.',
      },
      visual: { art: 'wendel-manderly', tint: 'teal' },
    },
    // Show: “Cripples, Bastards, and Broken Things” (episode 4), fawning on Catelyn at the inn at the crossroads. Books: Catelyn V (site chapter 29), the same scene at the inn.
    {
      id: 'marillion',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 29,
      name: { it: 'Marillion', en: 'Marillion' },
      summary: {
        it: 'Un giovane cantastorie che si trova alla Locanda all’Incrocio quando Catelyn Stark fa prigioniero Tyrion Lannister.',
        en: 'A young singer who is at the Inn at the Crossroads when Catelyn Stark takes Tyrion Lannister prisoner.',
      },
      visual: { art: 'marillion', tint: 'lavender' },
    },
    // Show: “Cripples, Bastards, and Broken Things” (episode 4), he draws his sword on Tyrion for Catelyn at the inn. Books: Catelyn V (site chapter 29), the first knight to stand with her.
    {
      id: 'willis-wode',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 29,
      name: { it: 'Willis Wode', en: 'Willis Wode' },
      summary: {
        it: 'Un cavaliere al servizio di Casa Whent di Harrenhal che si schiera con Catelyn Stark alla Locanda all’Incrocio.',
        en: 'A knight sworn to House Whent of Harrenhal who backs Catelyn Stark at the Inn at the Crossroads.',
      },
      visual: { art: 'willis-wode', tint: 'sand' },
    },
    // Show: “First of His Name” (episode 35), his first appearance, letting Littlefinger and his companion through the Bloody Gate. Books: Catelyn VI (site chapter 35), he meets Catelyn’s party on the road to the Bloody Gate.
    {
      id: 'donnel-waynwood',
      kind: 'character',
      revealedAtEpisode: 35,
      revealedAtChapter: 35,
      name: { it: 'Donnel Waynwood', en: 'Donnel Waynwood' },
      summary: {
        it: 'Un cavaliere di Casa Waynwood che custodisce la Porta Insanguinata, l’accesso alla Valle.',
        en: 'A knight of House Waynwood who keeps the Bloody Gate, the way into the Vale.',
      },
      visual: { art: 'donnel-waynwood', tint: 'ocher' },
    },
    // Book only. Catelyn VI (site chapter 35), he receives Catelyn at the Gates of the Moon. The show has no such character; episode 5, where Catelyn reaches the Eyrie, orders him.
    {
      id: 'nestor-royce',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 5,
      revealedAtChapter: 35,
      name: { it: 'Nestor Royce', en: 'Nestor Royce' },
      summary: {
        it: 'L’alto attendente della Valle, che custodisce le Porte della Luna ai piedi del monte del Nido dell’Aquila.',
        en: 'The High Steward of the Vale, who keeps the Gates of the Moon at the foot of the Eyrie’s mountain.',
      },
      visual: { art: 'nestor-royce', tint: 'azure' },
    },
    // Book only. Catelyn VI (site chapter 35), she guides Catelyn up the mountain to the Eyrie by night. The show has no such character; episode 5, where Catelyn reaches the Eyrie, orders her.
    {
      id: 'mya-stone',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 5,
      revealedAtChapter: 35,
      name: { it: 'Mya Stone', en: 'Mya Stone' },
      summary: {
        it: 'Una giovane che guida i viaggiatori lungo il sentiero di montagna fino al Nido dell’Aquila.',
        en: 'A young woman who guides travellers up the mountain path to the Eyrie.',
      },
      visual: { art: 'mya-stone', tint: 'cyan' },
    },
    // Show: “A Golden Crown” (episode 6), named as Lysa’s champion; seen unnamed in episode 5. Books: Catelyn VI (site chapter 35), leaving Lysa’s chamber with her maester.
    {
      id: 'vardis-egen',
      kind: 'character',
      revealedAtEpisode: 6,
      revealedAtChapter: 35,
      name: { it: 'Vardis Egen', en: 'Vardis Egen' },
      summary: {
        it: 'Il capitano della guardia di Casa Arryn al Nido dell’Aquila.',
        en: 'The captain of House Arryn’s guard at the Eyrie.',
      },
      visual: { art: 'vardis-egen', tint: 'blue' },
    },
    // Show: “A Golden Crown” (episode 6), named as the gaoler Tyrion bargains with; seen unnamed in episode 5. Books: Tyrion V (site chapter 39), the gaoler of the sky cells.
    {
      id: 'mord',
      kind: 'character',
      revealedAtEpisode: 6,
      revealedAtChapter: 39,
      name: { it: 'Mord', en: 'Mord' },
      summary: {
        it: 'Il rozzo carceriere delle celle del cielo del Nido dell’Aquila.',
        en: 'The brutish gaoler of the Eyrie’s sky cells.',
      },
      visual: { art: 'mord', tint: 'yellow' },
    },
    // Book only. Tyrion V (site chapter 39), at the hearing where Tyrion demands a trial by combat. The show has no such character; episode 6, which tells the same hearing, orders him.
    {
      id: 'lyn-corbray',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 6,
      revealedAtChapter: 39,
      name: { it: 'Lyn Corbray', en: 'Lyn Corbray' },
      summary: {
        it: 'Un cavaliere della Valle alla corte di lady Lysa, pronto a battersi per lei.',
        en: 'A knight of the Vale at Lady Lysa’s court, eager to fight for her.',
      },
      visual: { art: 'lyn-corbray', tint: 'violet' },
    },
    // Show: “The Mountain and the Viper” (episode 38), her only appearance, at the inquiry at the Eyrie. Books: Tyrion V (site chapter 39), in the hall with her sons when Tyrion demands a trial.
    {
      id: 'anya-waynwood',
      kind: 'character',
      revealedAtEpisode: 38,
      revealedAtChapter: 39,
      name: { it: 'Anya Waynwood', en: 'Anya Waynwood' },
      summary: {
        it: 'La lady di Ironoaks e capo di Casa Waynwood, una delle grandi casate della Valle.',
        en: 'The lady of Ironoaks and the head of House Waynwood, one of the great houses of the Vale.',
      },
      visual: { art: 'anya-waynwood', tint: 'ice' },
    },
    // Show: “The Pointy End” (episode 8), leading the hill tribesmen who surround Tyrion and Bronn. Books: Tyrion VI (site chapter 43), Shagga son of Dolf, whose clansmen do the same.
    {
      id: 'shagga',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 43,
      name: { it: 'Shagga', en: 'Shagga' },
      summary: {
        it: 'Un enorme guerriero dei Corvi di Pietra, uno dei clan delle montagne della Valle.',
        en: 'A huge warrior of the Stone Crows, one of the clans of the mountains of the Vale.',
      },
      visual: { art: 'shagga', tint: 'pink' },
    },
    // Show: “The Pointy End” (episode 8), he agrees to Tyrion’s alliance and goes with him to Tywin’s camp. Books: Tyrion VII (site chapter 57), Timett son of Timett of the Burned Men, at Lord Tywin’s inn.
    {
      id: 'timett',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 57,
      name: { it: 'Timmet', en: 'Timett' },
      summary: {
        it: 'Il capo orbo degli Uomini Bruciati, uno dei clan delle montagne della Valle.',
        en: 'The one-eyed leader of the Burned Men, one of the clans of the mountains of the Vale.',
      },
      visual: { art: 'timett', tint: 'orange' },
    },
    // Show: “The Pointy End” (episode 8), she goes with Tyrion, Shagga and Timett to Tywin’s camp. Books: Tyrion VII (site chapter 57), Chella daughter of Cheyk of the Black Ears.
    {
      id: 'chella',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 57,
      name: { it: 'Chella', en: 'Chella' },
      summary: {
        it: 'La guerriera a capo delle Orecchie Nere, uno dei clan delle montagne della Valle.',
        en: 'The leader of the Black Ears, one of the clans of the mountains of the Vale.',
      },
      visual: { art: 'chella', tint: 'acid' },
    },
    // Show: "The Pointy End", he leads the Lannister guards who break up Arya's
    // lesson with Syrio. Books: Sansa II (site chapter 30), he rides in the
    // Hand's tourney.
    {
      id: 'meryn-trant',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 30,
      name: { it: 'Meryn Trant', en: 'Meryn Trant' },
      summary: {
        it: 'Un cavaliere della Guardia reale, al servizio del re ad Approdo del Re.',
        en: 'A knight of the Kingsguard, in the king’s service in King’s Landing.',
      },
      visual: { art: 'meryn-trant', tint: 'ice' },
    },
    // Show: "Blackwater" (episode 19), Joffrey leaves him and Ser Mandon to fight
    // beside Tyrion. Books: Eddard VIII (site chapter 34), at the small council in
    // his white cloak.
    {
      id: 'boros-blount',
      kind: 'character',
      revealedAtEpisode: 19,
      revealedAtChapter: 34,
      name: { it: 'Boros Blount', en: 'Boros Blount' },
      summary: {
        it: 'Un cavaliere della Guardia reale, uno dei sette giurati a difendere il re.',
        en: 'A knight of the Kingsguard, one of the seven sworn to guard the king.',
      },
      visual: { art: 'boros-blount', tint: 'sand' },
    },
    // Show: "Blackwater" (episode 19), he reports to Cersei and is sent to fight
    // beside Tyrion. Books: Sansa IV (site chapter 52), he guards the council
    // chamber doors and walks Sansa back.
    {
      id: 'mandon-moore',
      kind: 'character',
      revealedAtEpisode: 19,
      revealedAtChapter: 52,
      name: { it: 'Mandon Moore', en: 'Mandon Moore' },
      summary: {
        it: 'Un cavaliere della Guardia reale di guardia alla famiglia reale ad Approdo del Re.',
        en: 'A knight of the Kingsguard who guards the royal family in King’s Landing.',
      },
      visual: { art: 'mandon-moore', tint: 'lavender' },
    },
    // Book only. The show never names him; the episode orders him at "The Pointy
    // End", where Barristan is dismissed. Books: Sansa V (site chapter 58), in the
    // throne room when Barristan is dismissed.
    {
      id: 'arys-oakheart',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 8,
      revealedAtChapter: 58,
      name: { it: 'Arys Oakheart', en: 'Arys Oakheart' },
      summary: {
        it: 'Un cavaliere della Guardia reale alla corte di Approdo del Re.',
        en: 'A knight of the Kingsguard at the court in King’s Landing.',
      },
      visual: { art: 'arys-oakheart', tint: 'azure' },
    },
    // Show: "Lord Snow", he pours Robert's wine and the king mocks his name.
    // Books: Eddard VII (site chapter 31), one of the squires Robert rages at in
    // his pavilion.
    {
      id: 'lancel-lannister',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 31,
      name: { it: 'Lancel Lannister', en: 'Lancel Lannister' },
      summary: {
        it: 'Un giovane della casata Lannister, scudiero di re Robert.',
        en: 'A young Lannister who serves King Robert as a squire.',
      },
      visual: { art: 'lancel-lannister', tint: 'red' },
    },
    // Show: "The North Remembers" (episode 11), he turns up drunk at Joffrey's
    // nameday tourney and Sansa saves him. Books: Sansa V (site chapter 58), drunk
    // at court; Sansa saves him and Joffrey makes him a fool.
    {
      id: 'dontos-hollard',
      kind: 'character',
      revealedAtEpisode: 11,
      revealedAtChapter: 58,
      name: { it: 'Dontos Hollard', en: 'Dontos Hollard' },
      summary: {
        it: 'Un cavaliere ubriacone che Sansa Stark salva dall’ira di re Joffrey.',
        en: 'A drunken knight whom Sansa Stark saves from King Joffrey’s anger.',
      },
      visual: { art: 'dontos-hollard', tint: 'wine' },
    },
    // Show: "Cripples, Bastards, and Broken Things", he refuses to talk to Jory and
    // is killed by Gregor in the joust. Books: Sansa II (site chapter 30), killed
    // by Gregor Clegane in the Hand's tourney.
    {
      id: 'hugh-of-the-vale',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 30,
      name: { it: 'Hugh della Valle', en: 'Hugh of the Vale' },
      summary: {
        it: 'Un giovane cavaliere, un tempo scudiero di Jon Arryn, il defunto Primo Cavaliere del Re.',
        en: 'A young knight, once squire to Jon Arryn, the late Hand of the King.',
      },
      visual: { art: 'hugh-of-the-vale', tint: 'pink' },
    },
    // Show: "Cripples, Bastards, and Broken Things", Eddard visits his smithy and
    // meets Gendry. Books: Eddard VI (site chapter 28), Eddard visits his shop on
    // the Street of Steel.
    {
      id: 'tobho-mott',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 28,
      name: { it: 'Tobho Mott', en: 'Tobho Mott' },
      summary: {
        it: 'Un mastro armaiolo di Approdo del Re, che ha Gendry come apprendista.',
        en: 'A master armorer in King’s Landing, who has Gendry as his apprentice.',
      },
      visual: { art: 'tobho-mott', tint: 'orange' },
    },
    // Show only. Show: "The Wolf and the Lion", she shows Eddard her baby by Robert
    // in Littlefinger's brothel. The books never name the mother; the chapter
    // orders her at Eddard IX (site chapter 36), where Eddard meets her.
    {
      id: 'mhaegen',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 5,
      revealedAtChapter: 36,
      name: { it: 'Mhaegen', en: 'Mhaegen' },
      summary: {
        it: 'Una donna di un bordello di Ditocorto, madre di una figlia di re Robert.',
        en: 'A woman in one of Littlefinger’s brothels, the mother of a daughter by King Robert.',
      },
      visual: { art: 'mhaegen', tint: 'magenta' },
    },
    // Show: "The Pointy End", killed while packing in the purge of Eddard's
    // household. Books: Eddard III (site chapter 17), he brings Eddard word that
    // Arya has been found.
    {
      id: 'vayon-poole',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 17,
      name: { it: 'Vayon Poole', en: 'Vayon Poole' },
      summary: {
        it: 'L’intendente di Grande Inverno, che segue Eddard Stark a sud.',
        en: 'The steward of Winterfell, who goes south with Eddard Stark.',
      },
      visual: { art: 'vayon-poole', tint: 'teal' },
    },
    // Show: "You Win or You Die", Eddard hands him the letter for Stannis.
    // Books: Arya II (site chapter 23), one of Eddard's guards, called Fat Tom.
    {
      id: 'tomard',
      kind: 'character',
      revealedAtEpisode: 7,
      revealedAtChapter: 23,
      name: { it: 'Tomard', en: 'Tomard' },
      summary: {
        it: 'Una delle guardie di Eddard Stark, che lo segue a sud.',
        en: 'One of Eddard Stark’s household guards, who goes south with him.',
      },
      visual: { art: 'tomard', tint: 'cyan' },
    },
    // Book only. Never in the show; the episode orders him at "Winter Is Coming".
    // Books: Bran I (site chapter 2), he rides with Eddard's party and says the
    // direwolf pups cannot be kept.
    {
      id: 'harwin',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 1,
      revealedAtChapter: 2,
      name: { it: 'Harwin', en: 'Harwin' },
      summary: {
        it: 'Una delle guardie di Eddard Stark, figlio di Hullen, il mastro dei cavalli.',
        en: 'One of Eddard Stark’s guards, the son of Hullen, the master of horse.',
      },
      visual: { art: 'harwin', tint: 'green' },
    },
    // Book only. Never in the show; the episode orders him at "Winter Is Coming".
    // Books: Eddard II (site chapter 13), he wakes Eddard for the king's ride on
    // the kingsroad.
    {
      id: 'alyn',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 1,
      revealedAtChapter: 13,
      name: { it: 'Alyn', en: 'Alyn' },
      summary: {
        it: 'Una delle guardie di Eddard Stark, che lo segue nel viaggio verso sud.',
        en: 'One of Eddard Stark’s guards, who rides south with him.',
      },
      visual: { art: 'alyn', tint: 'acid' },
    },
    // Show: "A Golden Crown", Eddard sends Lord Beric with a hundred men to bring
    // Gregor Clegane to justice. Books: Eddard VI (site chapter 28), in the city
    // for the Hand's tourney.
    {
      id: 'beric-dondarrion',
      kind: 'character',
      revealedAtEpisode: 6,
      revealedAtChapter: 28,
      name: { it: 'Beric Dondarrion', en: 'Beric Dondarrion' },
      summary: {
        it: 'Il giovane lord di Blackhaven, nelle Terre della Tempesta.',
        en: 'The young lord of Blackhaven, in the stormlands.',
      },
      visual: { art: 'beric-dondarrion', tint: 'orange' },
    },
    // Show: "Dark Wings, Dark Words" (episode 22), with the outlaws who meet Arya,
    // Gendry and Hot Pie. Books: Sansa II (site chapter 30), the red priest with
    // the flaming sword at the Hand's tourney.
    {
      id: 'thoros-of-myr',
      kind: 'character',
      revealedAtEpisode: 22,
      revealedAtChapter: 30,
      name: { it: 'Thoros di Myr', en: 'Thoros of Myr' },
      summary: {
        it: 'Un prete rosso venuto dalla città libera di Myr.',
        en: 'A red priest from the free city of Myr.',
      },
      visual: { art: 'thoros-of-myr', tint: 'red' },
    },
    // Book only. The show never names him; the episode orders him at "Cripples,
    // Bastards, and Broken Things", the Hand's tourney. Books: Sansa II (site
    // chapter 30), he jousts in the tourney.
    {
      id: 'balon-swann',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 4,
      revealedAtChapter: 30,
      name: { it: 'Balon Swann', en: 'Balon Swann' },
      summary: {
        it: 'Un cavaliere delle Terre della Tempesta che giostra nel torneo del Primo Cavaliere.',
        en: 'A knight from the stormlands who rides in the Hand’s tourney.',
      },
      visual: { art: 'balon-swann', tint: 'blue' },
    },
    // Book only. Never in the show; the episode orders him at "Cripples, Bastards,
    // and Broken Things", the Hand's tourney. Books: Sansa II (site chapter 30),
    // he jousts in the tourney.
    {
      id: 'robar-royce',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 4,
      revealedAtChapter: 30,
      name: { it: 'Robar Royce', en: 'Robar Royce' },
      summary: {
        it: 'Un cavaliere della Valle, figlio del lord di Runestone.',
        en: 'A knight of the Vale, a son of the lord of Runestone.',
      },
      visual: { art: 'robar-royce', tint: 'ocher' },
    },
    // Show: "The Mountain and the Viper" (episode 38), on the Vale lords' tribunal
    // that questions Littlefinger. Books: Sansa II (site chapter 30), Bronze Yohn
    // at the Hand's tourney.
    {
      id: 'yohn-royce',
      kind: 'character',
      revealedAtEpisode: 38,
      revealedAtChapter: 30,
      name: { it: 'Yohn Royce', en: 'Yohn Royce' },
      summary: {
        it: 'Il lord di Runestone, uno dei lord più potenti della Valle.',
        en: 'The lord of Runestone, one of the most powerful lords of the Vale.',
      },
      visual: { art: 'yohn-royce', tint: 'sand' },
    },
    // Book only. Never on screen in the show; the episode orders him at "Cripples,
    // Bastards, and Broken Things", the crossroads inn. Books: Catelyn V (site
    // chapter 29), he rides past the inn with his men.
    {
      id: 'jason-mallister',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 4,
      revealedAtChapter: 29,
      name: { it: 'Jason Mallister', en: 'Jason Mallister' },
      summary: {
        it: 'Il lord di Seagard, un vassallo di Casa Tully nelle Terre dei Fiumi.',
        en: 'The lord of Seagard, a riverlands lord sworn to House Tully.',
      },
      visual: { art: 'jason-mallister', tint: 'lavender' },
    },
    // Show: "Cripples, Bastards, and Broken Things", she tells Tyrion the inn has no
    // rooms. Books: Catelyn V (site chapter 29), she gives Catelyn rooms at the
    // crossroads.
    {
      id: 'masha-heddle',
      kind: 'character',
      revealedAtEpisode: 4,
      revealedAtChapter: 29,
      name: { it: 'Masha Heddle', en: 'Masha Heddle' },
      summary: {
        it: 'La locandiera della locanda all’incrocio.',
        en: 'The innkeeper of the inn at the crossroads.',
      },
      visual: { art: 'masha-heddle', tint: 'pink' },
    },
    // Show: "The Pointy End", with Tywin when Tyrion and the clansmen arrive.
    // Books: Tyrion VII (site chapter 57), with Tywin at the inn at the crossroads.
    {
      id: 'kevan-lannister',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 57,
      name: { it: 'Kevan Lannister', en: 'Kevan Lannister' },
      summary: {
        it: 'Il fratello minore di lord Tywin Lannister, al suo fianco in guerra.',
        en: 'Lord Tywin Lannister’s younger brother, at his side in the war.',
      },
      visual: { art: 'kevan-lannister', tint: 'wine' },
    },
    // Show: "Fire and Blood", at Tywin's council after the Whispering Wood, he
    // argues against a truce. Books: Tyrion VIII (site chapter 63), he commands
    // Tywin's outriders.
    {
      id: 'addam-marbrand',
      kind: 'character',
      revealedAtEpisode: 10,
      revealedAtChapter: 63,
      name: { it: 'Addam Marbrand', en: 'Addam Marbrand' },
      summary: {
        it: 'Un cavaliere delle Terre dell’Ovest nell’esercito di lord Tywin Lannister.',
        en: 'A westerlands knight in Lord Tywin Lannister’s army.',
      },
      visual: { art: 'addam-marbrand', tint: 'ocher' },
    },
    // Show: "The Night Lands" (episode 12), Tyrion's squire, he spills wine on
    // Janos Slynt. Books: Tyrion VIII (site chapter 63), the squire Kevan gives
    // Tyrion before the battle.
    {
      id: 'podrick-payne',
      kind: 'character',
      revealedAtEpisode: 12,
      revealedAtChapter: 63,
      name: { it: 'Podrick Payne', en: 'Podrick Payne' },
      summary: {
        it: 'Un giovane scudiero timido al servizio di Tyrion Lannister.',
        en: 'A shy young squire in Tyrion Lannister’s service.',
      },
      visual: { art: 'podrick-payne', tint: 'cyan' },
    },
    // Show: "Baelor", at the Twins he chides his father, who reminds him he is not
    // lord yet. Books: Catelyn IX (site chapter 60), Walder's heir at the Twins.
    {
      id: 'stevron-frey',
      kind: 'character',
      revealedAtEpisode: 9,
      revealedAtChapter: 60,
      name: { it: 'Stevron Frey', en: 'Stevron Frey' },
      summary: {
        it: 'Il figlio maggiore di lord Walder Frey ed erede delle Torri Gemelle.',
        en: 'Lord Walder Frey’s eldest son and the heir to the Twins.',
      },
      visual: { art: 'stevron-frey', tint: 'teal' },
    },
    // Show: "Walk of Punishment" (episode 23), he leads his father's funeral at
    // Riverrun. Books: Catelyn XI (site chapter 72), at Riverrun in Robb's
    // council.
    {
      id: 'edmure-tully',
      kind: 'character',
      revealedAtEpisode: 23,
      revealedAtChapter: 72,
      name: { it: 'Edmure Tully', en: 'Edmure Tully' },
      summary: {
        it: 'Il fratello minore di Catelyn Stark, figlio di lord Hoster Tully.',
        en: 'Catelyn Stark’s younger brother, the son of Lord Hoster Tully.',
      },
      visual: { art: 'edmure-tully', tint: 'azure' },
    },
    // Show: "Walk of Punishment" (episode 23), his body at his funeral. Books:
    // Catelyn XI (site chapter 72), Catelyn visits him on his sickbed at
    // Riverrun.
    {
      id: 'hoster-tully',
      kind: 'character',
      revealedAtEpisode: 23,
      revealedAtChapter: 72,
      name: { it: 'Hoster Tully', en: 'Hoster Tully' },
      summary: {
        it: 'Il lord di Delta delle Acque e padre di Catelyn Stark.',
        en: 'The lord of Riverrun and Catelyn Stark’s father.',
      },
      visual: { art: 'hoster-tully', tint: 'blue' },
    },
    // Show: "Walk of Punishment" (episode 23), at Hoster's funeral he takes the
    // bow after Edmure misses. Books: Catelyn VI (site chapter 35), he meets
    // Catelyn at the Bloody Gate.
    {
      id: 'brynden-tully',
      kind: 'character',
      revealedAtEpisode: 23,
      revealedAtChapter: 35,
      name: { it: 'Brynden Tully', en: 'Brynden Tully' },
      summary: {
        it: 'Lo zio di Catelyn Stark, chiamato il Pesce Nero.',
        en: 'Catelyn Stark’s uncle, known as the Blackfish.',
      },
      visual: { art: 'brynden-tully', tint: 'ice' },
    },
    // Show: "Fire and Blood", one of Yoren's recruits who bully Arry. Books: A Clash
    // of Kings, Arya I (site chapter 75), he tries to take Needle and Arya beats
    // him.
    {
      id: 'hot-pie',
      kind: 'character',
      revealedAtEpisode: 10,
      revealedAtChapter: 75,
      name: { it: 'Frittella', en: 'Hot Pie' },
      summary: {
        it: 'Un garzone di fornaio di Approdo del Re, in viaggio verso nord con le reclute di Yoren.',
        en: 'A baker’s boy from King’s Landing, going north with Yoren’s recruits.',
      },
      visual: { art: 'hot-pie', tint: 'sand' },
    },
    // Show: "Fire and Blood", one of Yoren's recruits who bully Arry. Books: A Clash
    // of Kings, Arya I (site chapter 75), he calls Arya Lumpyhead and eggs Hot Pie
    // on.
    {
      id: 'lommy',
      kind: 'character',
      revealedAtEpisode: 10,
      revealedAtChapter: 75,
      name: { it: 'Lommy Maniverdi', en: 'Lommy Greenhands' },
      summary: {
        it: 'Un apprendista tintore dalle mani macchiate di verde, in viaggio verso nord con Yoren.',
        en: 'A dyer’s apprentice with green-stained hands, going north with Yoren.',
      },
      visual: { art: 'lommy', tint: 'green' },
    },
    // Show: "The Night Lands" (episode 12), he asks Arry for water and introduces
    // himself. Books: A Clash of Kings, Arya II (site chapter 79), he introduces
    // himself at the inn.
    {
      id: 'jaqen-hghar',
      kind: 'character',
      revealedAtEpisode: 12,
      revealedAtChapter: 79,
      name: { it: "Jaqen H'ghar", en: "Jaqen H'ghar" },
      summary: {
        it: 'Un prigioniero di Lorath, in catene nella gabbia sul carro di Yoren.',
        en: 'A prisoner from Lorath, chained in the cage on Yoren’s wagon.',
      },
      visual: { art: 'jaqen-hghar', tint: 'magenta' },
    },
    // Show: "The Night Lands" (episode 12), he demands beer and threatens Arry
    // from the cage. Books: A Clash of Kings, Arya II (site chapter 79), Jaqen
    // introduces the noseless man.
    {
      id: 'rorge',
      kind: 'character',
      revealedAtEpisode: 12,
      revealedAtChapter: 79,
      name: { it: 'Rorge', en: 'Rorge' },
      summary: {
        it: 'Un criminale senza naso, in catene nella gabbia sul carro di Yoren.',
        en: 'A noseless criminal chained in the cage on Yoren’s wagon.',
      },
      visual: { art: 'rorge', tint: 'acid' },
    },
    // Show: "The Night Lands" (episode 12), he hisses behind Rorge in the cage.
    // Books: A Clash of Kings, Arya II (site chapter 79), Jaqen explains the name
    // by his filed teeth.
    {
      id: 'biter',
      kind: 'character',
      revealedAtEpisode: 12,
      revealedAtChapter: 79,
      name: { it: 'Mordente', en: 'Biter' },
      summary: {
        it: 'Un criminale muto e massiccio dai denti limati, in catene nella gabbia di Yoren.',
        en: 'A mute, hulking criminal with filed teeth, chained in Yoren’s cage.',
      },
      visual: { art: 'biter', tint: 'orange' },
    },
    // Show: “Winter Is Coming” (episode 1), the cold open, he scouts for the patrol. Books: the Prologue (site chapter 1), his own point of view. He dies in the part that opens him in each medium, by different hands, so the texts say neither.
    {
      id: 'will',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 1,
      name: { it: 'Will', en: 'Will' },
      summary: {
        it: 'Un ranger dei Guardiani della notte, in ricognizione nella Foresta Stregata.',
        en: 'A ranger of the Night’s Watch, scouting in the Haunted Forest.',
      },
      visual: { art: 'will', tint: 'teal' },
    },
    // Show: “Winter Is Coming” (episode 1), the cold open, killed in the forest. Books: the Prologue (site chapter 1), he survives it, and he is the deserter beheaded in Bran I (site chapter 2). The show gives that death to Will, so the texts say neither.
    {
      id: 'gared',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 1,
      name: { it: 'Gared', en: 'Gared' },
      summary: {
        it: 'Il più anziano dei tre ranger dei Guardiani della notte di pattuglia nella Foresta Stregata.',
        en: 'The oldest of three rangers of the Night’s Watch on patrol in the Haunted Forest.',
      },
      visual: { art: 'gared', tint: 'sand' },
    },
    // Show: “Winter Is Coming” (episode 1), the cold open. Books: the Prologue (site chapter 1). He dies in the scene that opens him in both, so the log tells it.
    {
      id: 'waymar-royce',
      kind: 'character',
      revealedAtEpisode: 1,
      revealedAtChapter: 1,
      name: { it: 'Waymar Royce', en: 'Waymar Royce' },
      summary: {
        it: 'Un giovane cavaliere dei Guardiani della notte, al comando di una pattuglia nella Foresta Stregata.',
        en: 'A young knight of the Night’s Watch, in command of a patrol in the Haunted Forest.',
      },
      visual: { art: 'waymar-royce', tint: 'violet' },
    },
    // Show: “Lord Snow” (episode 3), the yard at Castle Black (spoken name unverified). Books: Jon III (site chapter 20), the same training.
    {
      id: 'grenn',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 20,
      name: { it: 'Grenn', en: 'Grenn' },
      summary: {
        it: 'Una recluta dei Guardiani della notte, forte ma lenta di comprendonio.',
        en: 'A recruit of the Night’s Watch, strong and slow-witted.',
      },
      visual: { art: 'grenn', tint: 'ocher' },
    },
    // Show: “Lord Snow” (episode 3), the yard at Castle Black (spoken name unverified). Books: Jon III (site chapter 20), on the Appearing list. He goes to the rangers in the book and the stewards in the show, so his sworn role says neither.
    {
      id: 'pypar',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 20,
      name: { it: 'Pyp', en: 'Pypar' },
      summary: {
        it: 'Una recluta dei Guardiani della notte che si addestra a Castello Nero.',
        en: 'A recruit of the Night’s Watch training at Castle Black.',
      },
      visual: { art: 'pypar', tint: 'acid' },
    },
    // Show: “Lord Snow” (episode 3), the yard at Castle Black (spoken name unverified; he rides north unnamed in episode 2, owner). Books: Jon IV (site chapter 27), sent against Jon in the yard. Only the show swears him in within the stage.
    {
      id: 'rast',
      kind: 'character',
      revealedAtEpisode: 3,
      revealedAtChapter: 27,
      name: { it: 'Rast', en: 'Rast' },
      summary: {
        it: 'Una recluta dei Guardiani della notte a Castello Nero.',
        en: 'A recruit of the Night’s Watch at Castle Black.',
      },
      visual: { art: 'rast', tint: 'wine' },
    },
    // Show: “You Win or You Die” (episode 7), present when the assignments are read (no credited actor). Books: Jon III (site chapter 20), on the Appearing list. He is sworn at his show gate, so the step goes to the next episode, as Eddard’s Hand does.
    {
      id: 'dareon',
      kind: 'character',
      revealedAtEpisode: 7,
      revealedAtChapter: 20,
      name: { it: 'Dareon', en: 'Dareon' },
      summary: {
        it: 'Uno del gruppo di reclute di Jon Snow a Castello Nero.',
        en: 'One of Jon Snow’s group of recruits at Castle Black.',
      },
      visual: { art: 'dareon', tint: 'lavender' },
    },
    // Show: “You Win or You Die” (episode 7), present when the assignments are read (no credited actor). Books: Jon III (site chapter 20), on the Appearing list. He is sworn at his show gate, so the step goes to the next episode, as Eddard’s Hand does.
    {
      id: 'halder',
      kind: 'character',
      revealedAtEpisode: 7,
      revealedAtChapter: 20,
      name: { it: 'Halder', en: 'Halder' },
      summary: {
        it: 'Uno del gruppo di reclute di Jon Snow a Castello Nero.',
        en: 'One of Jon Snow’s group of recruits at Castle Black.',
      },
      visual: { art: 'halder', tint: 'ice' },
    },
    // Show: “Mhysa” (episode 30), his first time on screen; episode 7 only names him (owner). Books: Jon III (site chapter 20), among the recruits who confront Jon. He goes to the rangers in the book and the builders in the show, so his sworn role says neither, and the show already has him sworn at his gate, so the step goes to the next episode.
    {
      id: 'todder',
      kind: 'character',
      revealedAtEpisode: 30,
      revealedAtChapter: 20,
      name: { it: 'Todder', en: 'Todder' },
      summary: {
        it: 'Un membro dei Guardiani della notte a Castello Nero.',
        en: 'A member of the Night’s Watch at Castle Black.',
      },
      visual: { art: 'todder', tint: 'green' },
    },
    // Show: “You Win or You Die” (episode 7), at the swearing of the new brothers. Books: Jon VI (site chapter 49), on the Appearing list at the same ceremony.
    {
      id: 'othell-yarwyck',
      kind: 'character',
      revealedAtEpisode: 7,
      revealedAtChapter: 49,
      name: { it: 'Othell Yarwyck', en: 'Othell Yarwyck' },
      summary: {
        it: 'Il Primo Costruttore dei Guardiani della notte.',
        en: 'The First Builder of the Night’s Watch.',
      },
      visual: { art: 'othell-yarwyck', tint: 'ivory' },
    },
    // Show: “The Wars To Come” (episode 41), his first time on screen; episode 7 only names him. Books: Tyrion III (site chapter 22), at the Lord Commander’s table. The book calls him Lord Steward and the show First Steward, so his texts say neither.
    {
      id: 'bowen-marsh',
      kind: 'character',
      revealedAtEpisode: 41,
      revealedAtChapter: 22,
      name: { it: 'Bowen Marsh', en: 'Bowen Marsh' },
      summary: {
        it: 'Il capo degli attendenti dei Guardiani della notte.',
        en: 'The head of the stewards of the Night’s Watch.',
      },
      visual: { art: 'bowen-marsh', tint: 'blue' },
    },
    // Show: “You Win or You Die” (episode 7), at the assignments. Books: Tyrion III (site chapter 22), at the Lord Commander’s table. Only the book kills him in the stage, told in Jon VIII (site chapter 61).
    {
      id: 'jaremy-rykker',
      kind: 'character',
      revealedAtEpisode: 7,
      revealedAtChapter: 22,
      name: { it: 'Jaremy Rykker', en: 'Jaremy Rykker' },
      summary: {
        it: 'Un cavaliere e ufficiale dei ranger dei Guardiani della notte.',
        en: 'A knight and officer of the rangers of the Night’s Watch.',
      },
      visual: { art: 'jaremy-rykker', tint: 'cyan' },
    },
    // Show: “The Pointy End” (episode 8), his body is found and identified. Books: Jon III (site chapter 20), he rides out with Benjen Stark’s party, and his body is identified in Jon VII (site chapter 53).
    {
      id: 'othor',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 20,
      name: { it: 'Othor', en: 'Othor' },
      summary: {
        it: 'Un ranger dei Guardiani della notte, del gruppo di Benjen Stark.',
        en: 'A ranger of the Night’s Watch, in Benjen Stark’s party.',
      },
      visual: { art: 'othor', tint: 'pink' },
    },
    // Show: “The Pointy End” (episode 8), his body is found and identified. Books: Jon VII (site chapter 53), the same. He is already dead when he opens, so the log tells it.
    {
      id: 'jafer-flowers',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 53,
      name: { it: 'Jafer Flowers', en: 'Jafer Flowers' },
      summary: {
        it: 'Un ranger dei Guardiani della notte, del gruppo di Benjen Stark.',
        en: 'A ranger of the Night’s Watch, in Benjen Stark’s party.',
      },
      visual: { art: 'jafer-flowers', tint: 'yellow' },
    },
    // Books only: Jon III (site chapter 20), he stops the fight in the armory. The show has no such character.
    {
      id: 'donal-noye',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 3,
      revealedAtChapter: 20,
      name: { it: 'Donal Noye', en: 'Donal Noye' },
      summary: {
        it: 'L’armaiolo di Castello Nero, un fabbro con un braccio solo.',
        en: 'The armorer of Castle Black, a one-armed smith.',
      },
      visual: { art: 'donal-noye', tint: 'ocher' },
    },
    // Books only: Jon V (site chapter 42), he answers Maester Aemon’s door. The show has no such character.
    {
      id: 'chett',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 5,
      revealedAtChapter: 42,
      name: { it: 'Chett', en: 'Chett' },
      summary: {
        it: 'Un attendente dei Guardiani della notte al servizio di maestro Aemon.',
        en: 'A steward of the Night’s Watch who serves Maester Aemon.',
      },
      visual: { art: 'chett', tint: 'sand' },
    },
    // Daenerys’s storyline in Essos (#1008).
    // Show: “A Golden Crown” (episode 6), the synopsis names him when he breaks Viserys’s arm; his earlier scenes are narration. Books: Daenerys VII (site chapter 62), the first synopsis to name him. The two media give that arm to different men, so the texts say neither.
    {
      id: 'qotho',
      kind: 'character',
      revealedAtEpisode: 6,
      revealedAtChapter: 62,
      name: { it: 'Qotho', en: 'Qotho' },
      summary: {
        it: 'Un cavaliere di sangue di khal Drogo.',
        en: 'One of Khal Drogo’s bloodriders.',
      },
      visual: { art: 'qotho', tint: 'wine' },
    },
    // Books only: Daenerys IV (site chapter 37), he meets Daenerys. The show’s rider has the name only by wiki conjecture; episode 4 orders him.
    {
      id: 'cohollo',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 4,
      revealedAtChapter: 37,
      name: { it: 'Cohollo', en: 'Cohollo' },
      summary: {
        it: 'Un cavaliere di sangue di khal Drogo.',
        en: 'One of Khal Drogo’s bloodriders.',
      },
      visual: { art: 'cohollo', tint: 'ocher' },
    },
    // Books only: Daenerys VII (site chapter 62), he offers Drogo his help. The show’s rider has the name only by wiki conjecture; episode 8 orders him.
    {
      id: 'haggo',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 8,
      revealedAtChapter: 62,
      name: { it: 'Haggo', en: 'Haggo' },
      summary: {
        it: 'Un cavaliere di sangue di khal Drogo, enorme e silenzioso.',
        en: 'One of Khal Drogo’s bloodriders, huge and silent.',
      },
      visual: { art: 'haggo', tint: 'sand' },
    },
    // Show: dismisses Daenerys’s story with Irri, “The Kingsroad” (episode 2). Books: a wedding gift, named in Daenerys II (site chapter 12).
    {
      id: 'jhiqui',
      kind: 'character',
      revealedAtEpisode: 2,
      revealedAtChapter: 12,
      name: { it: 'Jhiqui', en: 'Jhiqui' },
      summary: {
        it: 'Un’ancella dothraki al servizio di Daenerys nel khalasar di Drogo.',
        en: 'A Dothraki handmaiden who serves Daenerys in Drogo’s khalasar.',
      },
      visual: { art: 'jhiqui', tint: 'pink' },
    },
    // Show: Daenerys sends him out by name, “The North Remembers” (episode 11). Books: Daenerys VII (site chapter 62), the first synopsis to name him.
    {
      id: 'aggo',
      kind: 'character',
      revealedAtEpisode: 11,
      revealedAtChapter: 62,
      name: { it: 'Aggo', en: 'Aggo' },
      summary: {
        it: 'Un guerriero dothraki incaricato di proteggere Daenerys.',
        en: 'A Dothraki warrior charged with guarding Daenerys.',
      },
      visual: { art: 'aggo', tint: 'acid' },
    },
    // Books only: Daenerys III (site chapter 24), his whip brings Viserys down. The show gives that scene to Rakharo and has no Jhogo; its Kovarro, who opens at episode 11, is not filed yet. Episode 3 orders him.
    {
      id: 'jhogo',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 3,
      revealedAtChapter: 24,
      name: { it: 'Jhogo', en: 'Jhogo' },
      summary: {
        it: 'Un guerriero dothraki incaricato di proteggere Daenerys durante il viaggio del khalasar.',
        en: 'A Dothraki warrior charged with guarding Daenerys as the khalasar travels.',
      },
      visual: { art: 'jhogo', tint: 'teal' },
    },
    // Books only: Daenerys VII (site chapter 62), he rides as her bodyguard. The show has no such character; episode 8 orders him.
    {
      id: 'quaro',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 8,
      revealedAtChapter: 62,
      name: { it: 'Quaro', en: 'Quaro' },
      summary: {
        it: 'Un guerriero dothraki incaricato di proteggere Daenerys.',
        en: 'A Dothraki warrior charged with guarding Daenerys.',
      },
      visual: { art: 'quaro', tint: 'orange' },
    },
    // Show: “The Pointy End” (episode 8), Drogo kills him; his earlier scene is narration. Books: Daenerys VII (site chapter 62), he complains and lives. The two media part over who wounds Drogo, so the texts leave the wound out.
    {
      id: 'mago',
      kind: 'character',
      revealedAtEpisode: 8,
      revealedAtChapter: 62,
      name: { it: 'Mago', en: 'Mago' },
      summary: {
        it: 'Un guerriero del khalasar di Drogo che protesta quando Daenerys reclama i prigionieri.',
        en: 'A rider of Drogo’s khalasar who objects when Daenerys claims the captives.',
      },
      visual: { art: 'mago', tint: 'vermilion' },
    },
    // Books only: Daenerys IX (site chapter 69), first named when her death is told, so she opens `deceased`. The show has no such character; episode 10 orders her.
    {
      id: 'eroeh',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 10,
      revealedAtChapter: 69,
      name: { it: 'Eroeh', en: 'Eroeh' },
      summary: {
        it: 'Una ragazza lhazareen presa sotto la protezione di Daenerys.',
        en: 'A Lhazareen girl taken under Daenerys’s protection.',
      },
      visual: { art: 'eroeh', tint: 'violet' },
    },
    // The season’s places (#853): every place a scene is set in, in either
    // medium, gated at its first scene there. Drawn in `art/places.ts` (#1053).
    // Show: "Winter Is Coming", the cold open, the rangers find the dead
    // wildlings. Books: Prologue (Will), site chapter 1.
    {
      id: 'haunted-forest',
      kind: 'place',
      revealedAtEpisode: 1,
      revealedAtChapter: 1,
      name: { it: 'Foresta Stregata', en: 'the Haunted Forest' },
      summary: {
        it: 'Una foresta sterminata oltre il confine settentrionale del regno, dove i Guardiani della Notte mandano i loro ranger.',
        en: 'A vast forest beyond the northern border of the realm, where the Night’s Watch sends its rangers.',
      },
      visual: { art: 'haunted-forest', tint: 'teal' },
    },
    // Show: "Winter Is Coming", Bran's archery practice in the yard. Books:
    // Bran I (site chapter 2), the ride out from the castle to the execution,
    // where the Starks are first named as of Winterfell; Catelyn I (site 3),
    // in the godswood, is the first scene inside its walls.
    {
      id: 'winterfell',
      kind: 'place',
      revealedAtEpisode: 1,
      revealedAtChapter: 2,
      name: { it: 'Grande Inverno', en: 'Winterfell' },
      summary: {
        it: 'La sede della Casa Stark, un castello grigio del Nord con un antico parco degli dèi al centro.',
        en: 'The seat of House Stark, a grey castle in the North with an old godswood at its heart.',
      },
      visual: { art: 'winterfell', tint: 'ice' },
    },
    // Show: "Winter Is Coming", Viserys presents Daenerys at Illyrio's manse.
    // Books: Daenerys I (site chapter 4), the same, in Illyrio's manse.
    {
      id: 'pentos',
      kind: 'place',
      revealedAtEpisode: 1,
      revealedAtChapter: 4,
      name: { it: 'Pentos', en: 'Pentos' },
      summary: {
        it: 'Una Città Libera al di là del Mare Stretto, dove un ricco magistro ospita due esuli.',
        en: 'A Free City across the Narrow Sea, where a rich magister keeps two exiles under his roof.',
      },
      visual: { art: 'pentos', tint: 'sand' },
    },
    // Show: "Winter Is Coming", the bells ring for Jon Arryn and Cersei and
    // Jaime talk over his body. Books: Catelyn IV (site chapter 19), Catelyn
    // lands from the Storm Dancer.
    {
      id: 'kings-landing',
      kind: 'place',
      revealedAtEpisode: 1,
      revealedAtChapter: 19,
      name: { it: 'Approdo del Re', en: 'King’s Landing' },
      summary: {
        it: 'La capitale dei Sette Regni, una città affollata sulla costa dove il re tiene corte.',
        en: 'The capital of the Seven Kingdoms, a crowded city on the coast where the king holds court.',
      },
      visual: { art: 'kings-landing', tint: 'ocher' },
    },
    // Show: "Winter Is Coming", the cold open, the rangers ride out through the
    // gate tunnel. Books: Tyrion III (site chapter 22), the first scene on top
    // of the Wall.
    {
      id: 'the-wall',
      kind: 'place',
      revealedAtEpisode: 1,
      revealedAtChapter: 22,
      commonWord: true,
      name: { it: 'la Barriera', en: 'the Wall' },
      summary: {
        it: 'Un muro di ghiaccio alto più di duecento metri lungo il confine settentrionale del regno, presidiato dai Guardiani della Notte.',
        en: 'A wall of ice seven hundred feet high along the northern border of the realm, held by the Night’s Watch.',
      },
      visual: { art: 'the-wall', tint: 'ice' },
    },
    // Show: "Winter Is Coming", Tyrion at the brothel in the town outside
    // Winterfell (Fandom, Winter town). Books: Bran V (site chapter 38), Bran
    // rides through the winter town.
    {
      id: 'winter-town',
      kind: 'place',
      revealedAtEpisode: 1,
      revealedAtChapter: 38,
      name: { it: 'Città d’Inverno', en: 'Winter town' },
      summary: {
        it: 'Il borgo sotto le mura di Grande Inverno, mezzo vuoto finché non arriva il freddo.',
        en: 'The town below the walls of Winterfell, half empty until the cold comes.',
      },
      visual: { art: 'winter-town', tint: 'ice' },
    },
    // Show: "The Kingsroad", the royal party stops at the inn and the quarrel
    // on the riverbank. Books: Sansa I (site chapter 16), breakfast at the inn
    // and the quarrel on the banks of the Trident.
    {
      id: 'inn-at-the-crossroads',
      kind: 'place',
      revealedAtEpisode: 2,
      revealedAtChapter: 16,
      name: { it: 'Locanda all’Incrocio', en: 'the Inn at the Crossroads' },
      summary: {
        it: 'Una locanda dove si incontrano le grandi strade del regno, vicino alle rive del Tridente.',
        en: 'An inn where the great roads of the realm meet, near the banks of the Trident.',
      },
      visual: { art: 'inn-at-the-crossroads', tint: 'azure' },
    },
    // Show: never visited (the show moves these events to the Inn at the
    // Crossroads, ep 2, which is the ordering estimate). Books: Eddard III
    // (site chapter 17), the judgment in Castle Darry's audience chamber.
    {
      id: 'darry',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 2,
      revealedAtChapter: 17,
      name: { it: 'Darry', en: 'Darry' },
      summary: {
        it: 'Un piccolo castello vicino al Tridente, il cui signore è rimasto fedele ai Targaryen.',
        en: 'A small castle near the Trident whose lord stayed loyal to the Targaryens.',
      },
      visual: { art: 'darry', tint: 'azure' },
    },
    // Show: "The Kingsroad", the party reaches the Wall and Benjen welcomes
    // them. Books: Jon III (site chapter 20), Jon trains in the yard.
    {
      id: 'castle-black',
      kind: 'place',
      revealedAtEpisode: 2,
      revealedAtChapter: 20,
      name: { it: 'Castello Nero', en: 'Castle Black' },
      summary: {
        it: 'Il castello principale dei Guardiani della Notte, ai piedi della Barriera.',
        en: 'The chief castle of the Night’s Watch, at the foot of the Wall.',
      },
      visual: { art: 'castle-black', tint: 'ice' },
    },
    // Show: "The Kingsroad", the khalasar rides into the Dothraki Sea. Books:
    // Daenerys III (site chapter 24), on the Dothraki sea.
    {
      id: 'dothraki-sea',
      kind: 'place',
      revealedAtEpisode: 2,
      revealedAtChapter: 24,
      name: { it: 'Mare Dothraki', en: 'the Dothraki Sea' },
      summary: {
        it: 'Le sterminate pianure d’erba a est delle Città Libere, dove cavalcano i Dothraki.',
        en: 'The endless grass plains east of the Free Cities, where the Dothraki ride.',
      },
      visual: { art: 'dothraki-sea', tint: 'sand' },
    },
    // Show: "Lord Snow", Ned meets Jaime in the throne room and sits his first
    // small council. Books: Eddard IV (site chapter 21), the same council.
    {
      id: 'red-keep',
      kind: 'place',
      revealedAtEpisode: 3,
      revealedAtChapter: 21,
      name: { it: 'Fortezza Rossa', en: 'the Red Keep' },
      summary: {
        it: 'Il castello del re ad Approdo del Re, dove si trova il Trono di Spade.',
        en: 'The king’s castle in King’s Landing, where the Iron Throne stands.',
      },
      visual: { art: 'red-keep', tint: 'red' },
    },
    // Show: "Cripples, Bastards, and Broken Things", the khalasar arrives under
    // the horse gate. Books: Daenerys IV (site chapter 37), the khalasar
    // reaches the city.
    {
      id: 'vaes-dothrak',
      kind: 'place',
      revealedAtEpisode: 4,
      revealedAtChapter: 37,
      nameSaidAt: 3,
      name: { it: 'Vaes Dothrak', en: 'Vaes Dothrak' },
      summary: {
        it: 'La città sacra dei Dothraki, in mezzo alle pianure d’erba.',
        en: 'The sacred city of the Dothraki, far out on the grass plains.',
      },
      visual: { art: 'vaes-dothrak', tint: 'sand' },
    },
    // Show: "The Wolf and the Lion", Lysa holds court in the High Hall. Books:
    // Catelyn VI (site chapter 35), Catelyn climbs from the Bloody Gate to the
    // Eyrie.
    {
      id: 'the-eyrie',
      kind: 'place',
      revealedAtEpisode: 5,
      revealedAtChapter: 35,
      name: { it: 'Nido dell’Aquila', en: 'the Eyrie' },
      summary: {
        it: 'Il castello della Casa Arryn, costruito in cima a una montagna e ritenuto inespugnabile.',
        en: 'The castle of House Arryn, built high on a mountain peak and held to be impregnable.',
      },
      visual: { art: 'the-eyrie', tint: 'blue' },
    },
    // Show: "A Golden Crown", wildlings waylay Bran (Fandom, Wolfswood). Books:
    // Bran V (site chapter 38), the same ambush.
    {
      id: 'wolfswood',
      kind: 'place',
      revealedAtEpisode: 6,
      revealedAtChapter: 38,
      name: { it: 'Foresta del Lupo', en: 'the wolfswood' },
      summary: {
        it: 'La grande foresta a ovest di Grande Inverno.',
        en: 'The great forest west of Winterfell.',
      },
      visual: { art: 'wolfswood', tint: 'ice' },
    },
    // Show: "A Golden Crown", Robert hunts with Renly, Barristan and Lancel.
    // Books: no chapter is set there (the hunt is off the page in AGOT); 44 is
    // an ordering estimate, between Robert leaving to hunt and his return
    // (sites 40-48).
    {
      id: 'kingswood',
      kind: 'place',
      source: 'episode',
      revealedAtEpisode: 6,
      revealedAtChapter: 44,
      name: { it: 'Bosco del Re', en: 'the Kingswood' },
      summary: {
        it: 'Una grande foresta reale a sud di Approdo del Re, dove il re va a caccia.',
        en: 'A wide royal forest south of King’s Landing, where the king goes to hunt.',
      },
      visual: { art: 'kingswood', tint: 'green' },
    },
    // Show: "You Win or You Die", Tywin skins a stag in his tent and talks with
    // Jaime. Books: Tyrion VIII (site chapter 63), the camp on the eve of the
    // battle, where Bronn brings Shae.
    {
      id: 'lannister-camp',
      kind: 'place',
      revealedAtEpisode: 7,
      revealedAtChapter: 63,
      name: { it: 'Accampamento Lannister', en: 'Lannister camp' },
      summary: {
        it: 'L’accampamento dell’esercito di lord Tywin Lannister in campagna.',
        en: 'The camp of Lord Tywin Lannister’s army in the field.',
      },
      visual: { art: 'lannister-camp', tint: 'azure' },
    },
    // Show: "The Pointy End", the raid on a Lhazareen village. Books: Daenerys
    // VII (site chapter 62), the sack of the town of the Lamb Men.
    {
      id: 'lhazar',
      kind: 'place',
      revealedAtEpisode: 8,
      revealedAtChapter: 62,
      name: { it: 'Lhazar', en: 'Lhazar' },
      summary: {
        it: 'Una terra di villaggi di pastori a sud-est di Vaes Dothrak.',
        en: 'A land of shepherd villages south-east of Vaes Dothrak.',
      },
      visual: { art: 'lhazar', tint: 'sand' },
    },
    // Show: "Baelor", Catelyn goes in to bargain with Walder Frey. Books:
    // Catelyn IX (site chapter 60), the same.
    {
      id: 'the-twins',
      kind: 'place',
      revealedAtEpisode: 9,
      revealedAtChapter: 60,
      name: { it: 'Torri Gemelle', en: 'the Twins' },
      summary: {
        it: 'Due castelli uno di fronte all’altro sulle rive della Forca Verde, uniti da un ponte: la sede della Casa Frey.',
        en: 'Two castles facing each other across the Green Fork, joined by a bridge: the seat of House Frey.',
      },
      visual: { art: 'the-twins', tint: 'azure' },
    },
    // Show: "Baelor", Ned's confession on the steps. Books: Arya V (site
    // chapter 66), the same.
    {
      id: 'great-sept-of-baelor',
      kind: 'place',
      revealedAtEpisode: 9,
      revealedAtChapter: 66,
      name: { it: 'Grande Tempio di Baelor', en: 'the Great Sept of Baelor' },
      summary: {
        it: 'Il tempio più grande di Approdo del Re, dove officia l’Alto Septon.',
        en: 'The largest sept in King’s Landing, where the High Septon presides.',
      },
      visual: { art: 'great-sept-of-baelor', tint: 'ivory' },
    },
    // Show: "Walk of Punishment" (season 3 episode 3, absolute 23), Hoster
    // Tully's funeral. Books: Catelyn XI (site chapter 72), Catelyn returns by
    // boat.
    {
      id: 'riverrun',
      kind: 'place',
      revealedAtEpisode: 23,
      revealedAtChapter: 72,
      name: { it: 'Delta delle Acque', en: 'Riverrun' },
      summary: {
        it: 'La sede della Casa Tully, un castello alla confluenza di due fiumi.',
        en: 'The seat of House Tully, a castle where two rivers meet.',
      },
      visual: { art: 'riverrun', tint: 'azure' },
    },
    // Show: "Breaker of Chains" (season 4 episode 3, absolute 33), Sam brings
    // Gilly to the village. Books: Jon IX (site chapter 71), Jon rides south
    // through it.
    {
      id: 'moles-town',
      kind: 'place',
      revealedAtEpisode: 33,
      revealedAtChapter: 71,
      name: { it: 'Città della Talpa', en: 'Mole’s Town' },
      summary: {
        it: 'Il villaggio più vicino al Castello Nero, poco più a sud lungo la strada.',
        en: 'The nearest village to Castle Black, a short ride south along the road.',
      },
      visual: { art: 'moles-town', tint: 'ice' },
    },
    // Show: "First of His Name" (season 4 episode 5, absolute 35), Littlefinger
    // and Sansa arrive at the gate. Books: Catelyn VI (site chapter 35),
    // Catelyn's party reaches the gate.
    {
      id: 'bloody-gate',
      kind: 'place',
      revealedAtEpisode: 35,
      revealedAtChapter: 35,
      name: { it: 'Porta Insanguinata', en: 'the Bloody Gate' },
      summary: {
        it: 'La porta fortificata che sbarra l’accesso alla Valle.',
        en: 'The fortified gate that bars the way into the Vale.',
      },
      visual: { art: 'bloody-gate', tint: 'blue' },
    },
    // Show: "The Mountain and the Viper" (season 4 episode 8, absolute 38),
    // Ramsay sends Reek to the ironborn garrison. Books: Catelyn VIII (site
    // chapter 56), Catelyn joins Robb's host at Moat Cailin.
    {
      id: 'moat-cailin',
      kind: 'place',
      revealedAtEpisode: 38,
      revealedAtChapter: 56,
      name: { it: 'Moat Cailin', en: 'Moat Cailin' },
      summary: {
        it: 'Un’antica roccaforte in rovina tra le paludi, a guardia della strada tra il Nord e il sud.',
        en: 'An ancient ruined stronghold in the marshes, guarding the road between the North and the south.',
      },
      visual: { art: 'moat-cailin', tint: 'ice' },
    },
  ],
  dossiers: {
    'eddard-stark': {
      role: [
        {
          episode: 1,
          chapter: 2,
          value: { it: 'Lord di Grande Inverno', en: 'Lord of Winterfell' },
        },
        {
          episode: 2,
          chapter: 7,
          value: { it: 'Primo Cavaliere del Re', en: 'Hand of the King' },
        },
      ],
      log: {
        it: 'Decapita con la sua spada un disertore dei Guardiani della notte, davanti ai figli. Sulla via del ritorno i ragazzi trovano una meta-lupa morta e i suoi cuccioli, e lui permette loro di tenerli.',
        en: 'He beheads a deserter of the Night’s Watch with his own sword while his sons watch. On the way home the boys find a dead direwolf and her pups, and he lets them keep the pups.',
      },
      status: [
        { episode: 1, chapter: 2, value: 'alive' },
        { episode: 7, chapter: 50, value: 'captured' },
        { episode: 9, chapter: 66, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 1,
          chapter: 2,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
        {
          episode: 3,
          chapter: 21,
          value: {
            it: 'Casa Stark, Concilio ristretto',
            en: 'House Stark, small council',
          },
        },
      ],
    },
    'catelyn-stark': {
      role: { it: 'Signora di Grande Inverno', en: 'Lady of Winterfell' },
      log: {
        it: 'Raggiunge il marito nel parco degli dei con una notizia. Il Primo Cavaliere del Re è morto e il re sta venendo a Grande Inverno.',
        en: 'She finds her husband in the godswood with news. The Hand of the King is dead, and the king is riding to Winterfell.',
      },
      status: [{ episode: 1, chapter: 3, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 3,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'robb-stark': {
      role: [
        {
          episode: 1,
          chapter: 2,
          value: { it: 'Erede di Grande Inverno', en: 'Heir to Winterfell' },
        },
        {
          episode: 10,
          chapter: 72,
          value: { it: 'Re del Nord', en: 'King in the North' },
        },
      ],
      log: {
        it: 'Accompagna il padre all’esecuzione di un disertore. Al ritorno lui e Jon trovano una meta-lupa morta con i suoi cuccioli, e lui ne prende uno.',
        en: 'He rides with his father to the execution of a deserter. On the way back he and Jon find a dead direwolf with her pups, and he takes one.',
      },
      status: [{ episode: 1, chapter: 2, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 2,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'sansa-stark': {
      role: {
        it: 'Figlia di lord Eddard Stark',
        en: 'Daughter of Lord Eddard Stark',
      },
      log: {
        it: 'Accoglie il re nel cortile di Grande Inverno con il resto della famiglia. Il re propone a suo padre di darla in sposa al principe ereditario.',
        en: 'She greets the king in the yard of Winterfell with the rest of her family. The king proposes to her father that she marry the crown prince.',
      },
      status: [
        { episode: 1, chapter: 5, value: 'alive' },
        { episode: 8, chapter: 52, value: 'captured' },
      ],
      affiliation: [
        {
          episode: 1,
          chapter: 5,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'arya-stark': {
      role: {
        it: 'Figlia di lord Eddard Stark',
        en: 'Daughter of Lord Eddard Stark',
      },
      log: {
        it: 'Accoglie il re nel cortile di Grande Inverno con il resto della famiglia. Come i suoi fratelli, tiene uno dei cuccioli di meta-lupo.',
        en: 'She greets the king in the yard of Winterfell with the rest of her family. Like her brothers and sister, she keeps one of the direwolf pups.',
      },
      status: [{ episode: 1, chapter: 5, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 5,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'bran-stark': {
      role: {
        it: 'Figlio di lord Eddard Stark',
        en: 'Son of Lord Eddard Stark',
      },
      log: {
        it: 'Per la prima volta il padre lo porta a vedere un’esecuzione, quella di un disertore. Sulla via del ritorno prende uno dei cuccioli di meta-lupo trovati dai fratelli.',
        en: 'For the first time his father takes him to see an execution, that of a deserter. On the way home he takes one of the direwolf pups his brothers find.',
      },
      status: [{ episode: 1, chapter: 2, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 2,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'rickon-stark': {
      role: {
        it: 'Figlio di lord Eddard Stark',
        en: 'Son of Lord Eddard Stark',
      },
      log: {
        it: 'È il più piccolo dei figli Stark e tiene uno dei cuccioli di meta-lupo. Accoglie il re nel cortile di Grande Inverno con il resto della famiglia.',
        en: 'He is the youngest of the Stark children and keeps one of the direwolf pups. He greets the king in the yard of Winterfell with the rest of his family.',
      },
      status: [{ episode: 1, chapter: 5, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 5,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'jon-snow': {
      role: [
        {
          episode: 1,
          chapter: 2,
          value: {
            it: 'Figlio bastardo di lord Eddard Stark',
            en: 'Lord Eddard Stark’s bastard son',
          },
        },
        {
          episode: 3,
          chapter: 20,
          value: {
            it: 'Recluta dei Guardiani della notte',
            en: 'Recruit of the Night’s Watch',
          },
        },
        {
          episode: 7,
          chapter: 49,
          value: {
            it: 'Confratello giurato dei Guardiani della notte, attendente del Lord Comandante',
            en: 'Sworn brother of the Night’s Watch, steward to the Lord Commander',
          },
        },
      ],
      log: {
        it: 'All’esecuzione di un disertore dice a Bran di non distogliere lo sguardo. Quando trovano i cuccioli di meta-lupo convince il padre a risparmiarli, uno per ciascuno dei figli legittimi. Poi trova un sesto cucciolo, bianco, e lo tiene per sé.',
        en: 'At a deserter’s execution he tells Bran not to look away. When the direwolf pups are found he talks his father into sparing them, one for each trueborn child. Then he finds a sixth pup, a white one, and keeps it for himself.',
      },
      status: [{ episode: 1, chapter: 2, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 2,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
        {
          episode: 3,
          chapter: 20,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'benjen-stark': {
      role: {
        it: 'Ranger dei Guardiani della notte',
        en: 'Ranger of the Night’s Watch',
      },
      log: {
        it: 'Scende dalla Barriera a Grande Inverno durante la visita del re. Al banchetto parla con Jon, che gli chiede di portarlo con sé sulla Barriera.',
        en: 'He comes down from the Wall to Winterfell during the king’s visit. At the feast he talks with Jon, who asks to go back to the Wall with him.',
      },
      status: [{ episode: 1, chapter: 6, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 6,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'grey-wind': {
      role: { it: 'Meta-lupo di Robb Stark', en: 'Robb Stark’s direwolf' },
      log: {
        it: 'È uno dei cuccioli trovati accanto alla madre morta, sulla via del ritorno a Grande Inverno. Lo prende Robb.',
        en: 'He is one of the pups found beside their dead mother on the way back to Winterfell. Robb takes him.',
      },
      status: [{ episode: 8, chapter: 11, value: 'alive' }],
      affiliation: [
        {
          episode: 8,
          chapter: 11,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'lady-direwolf': {
      role: { it: 'Meta-lupa di Sansa Stark', en: 'Sansa Stark’s direwolf' },
      log: {
        it: 'È una dei cuccioli trovati accanto alla madre morta, sulla via del ritorno a Grande Inverno. La prende Sansa.',
        en: 'She is one of the pups found beside their dead mother on the way back to Winterfell. Sansa takes her.',
      },
      status: [
        { episode: 1, chapter: 16, value: 'alive' },
        { episode: 2, chapter: 17, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 1,
          chapter: 16,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'nymeria': {
      role: { it: 'Meta-lupa di Arya Stark', en: 'Arya Stark’s direwolf' },
      log: {
        it: 'È una dei cuccioli trovati accanto alla madre morta, sulla via del ritorno a Grande Inverno. La prende Arya.',
        en: 'She is one of the pups found beside their dead mother on the way back to Winterfell. Arya takes her.',
      },
      status: [{ episode: 2, chapter: 8, value: 'alive' }],
      affiliation: [
        {
          episode: 2,
          chapter: 8,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'summer-direwolf': {
      role: { it: 'Meta-lupo di Bran Stark', en: 'Bran Stark’s direwolf' },
      log: {
        it: 'È uno dei cuccioli trovati accanto alla madre morta, sulla via del ritorno a Grande Inverno. Lo prende Bran.',
        en: 'He is one of the pups found beside their dead mother on the way back to Winterfell. Bran takes him.',
      },
      status: [{ episode: 4, chapter: 18, value: 'alive' }],
      affiliation: [
        {
          episode: 4,
          chapter: 18,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'shaggydog': {
      role: { it: 'Meta-lupo di Rickon Stark', en: 'Rickon Stark’s direwolf' },
      log: {
        it: 'È uno dei cuccioli trovati accanto alla madre morta, sulla via del ritorno a Grande Inverno. Va a Rickon, il più piccolo dei fratelli.',
        en: 'He is one of the pups found beside their dead mother on the way back to Winterfell. He goes to Rickon, the youngest of the children.',
      },
      status: [{ episode: 10, chapter: 25, value: 'alive' }],
      affiliation: [
        {
          episode: 10,
          chapter: 25,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'ghost-direwolf': {
      role: { it: 'Meta-lupo di Jon Snow', en: 'Jon Snow’s direwolf' },
      log: {
        it: 'È il sesto cucciolo della cucciolata, tutto bianco, trovato da Jon in disparte dagli altri. Jon lo tiene per sé.',
        en: 'He is the sixth pup of the litter, all white, found by Jon apart from the others. Jon keeps him for himself.',
      },
      status: [{ episode: 4, chapter: 6, value: 'alive' }],
      affiliation: [
        {
          episode: 4,
          chapter: 6,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'theon-greyjoy': {
      role: { it: 'Pupillo di Eddard Stark', en: 'Eddard Stark’s ward' },
      log: {
        it: 'Accompagna Lord Stark all’esecuzione di un disertore dei Guardiani della notte. Al ritorno è con i ragazzi quando trovano una lupa morta e i suoi cuccioli, e vorrebbe ucciderli.',
        en: 'He rides with Lord Stark to the execution of a deserter from the Night’s Watch. On the way back he is with the boys when they find a dead direwolf and her pups, and he wants to kill the pups.',
      },
      status: [{ episode: 1, chapter: 2, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 2,
          value: {
            it: 'Casa Greyjoy, pupillo di Casa Stark',
            en: 'House Greyjoy, ward of House Stark',
          },
        },
      ],
    },
    'luwin': {
      role: { it: 'Maestro di Grande Inverno', en: 'Maester of Winterfell' },
      log: {
        it: 'Serve la Casa Stark come consigliere e guaritore. Porta a Lord Stark e alla moglie una lettera segreta della sorella di lei. Consiglia a Lord Stark di accettare l’offerta del re.',
        en: 'He serves House Stark as counsellor and healer. He brings Lord Stark and his wife a secret letter from her sister. He advises Lord Stark to accept the king’s offer.',
      },
      status: [{ episode: 1, chapter: 7, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 7,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'rodrik-cassel': {
      role: [
        {
          episode: 1,
          chapter: 8,
          value: {
            it: 'Maestro d’armi di Grande Inverno',
            en: 'Master-at-arms of Winterfell',
          },
        },
        {
          episode: 8,
          chapter: 56,
          source: 'chapter',
          value: {
            it: 'Castellano di Grande Inverno',
            en: 'Castellan of Winterfell',
          },
        },
      ],
      log: {
        it: 'Addestra alle armi i ragazzi di Grande Inverno. È uno dei cavalieri al servizio di Lord Stark.',
        en: 'He trains the boys of Winterfell at arms. He is one of the knights who serve Lord Stark.',
      },
      status: [{ episode: 1, chapter: 8, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 8,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'old-nan': {
      role: { it: 'Servitrice di Grande Inverno', en: 'Servant at Winterfell' },
      log: {
        it: 'Fa parte della servitù degli Stark da molto tempo. I ragazzi di Grande Inverno conoscono le sue storie sull’inverno e su ciò che vive oltre la Barriera.',
        en: 'She has served in the Stark household for a long time. The children of Winterfell know her stories of winter and of what lives beyond the Wall.',
      },
      status: [{ episode: 3, chapter: 15, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 15,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'hodor': {
      role: { it: 'Servitore di Grande Inverno', en: 'Servant at Winterfell' },
      log: {
        it: 'È altissimo e forte, ma semplice, e l’unica parola che dice è “Hodor”. Porta in braccio Bran, che non può camminare, fino alla sala grande per incontrare Tyrion Lannister.',
        en: 'He is very tall and strong but simple, and the only word he says is “Hodor”. He carries Bran, who cannot walk, down to the great hall to meet Tyrion Lannister.',
      },
      status: [{ episode: 4, chapter: 25, value: 'alive' }],
      affiliation: [
        {
          episode: 4,
          chapter: 25,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'osha': {
      role: [
        {
          episode: 6,
          chapter: 38,
          value: { it: 'Donna dei Bruti', en: 'Wildling' },
        },
        {
          episode: 7,
          chapter: 54,
          value: {
            it: 'Prigioniera al lavoro a Grande Inverno',
            en: 'Captive servant at Winterfell',
          },
        },
      ],
      log: {
        it: 'Con un gruppo di fuorilegge assale Bran mentre cavalca fuori da Grande Inverno. Quando i suoi compagni vengono uccisi, si arrende a Robb. Robb la porta al castello come prigioniera.',
        en: 'With a band of outlaws she attacks Bran while he rides outside Winterfell. When her companions are killed, she surrenders to Robb. Robb takes her back to the castle as a prisoner.',
      },
      status: [{ episode: 6, chapter: 38, value: 'alive' }],
      affiliation: [
        { episode: 6, chapter: 38, value: { it: 'Bruti', en: 'Wildlings' } },
        {
          episode: 7,
          chapter: 54,
          value: {
            it: 'Grande Inverno, prigioniera',
            en: 'Winterfell, captive',
          },
        },
      ],
    },
    'mordane': {
      role: {
        it: 'Septa e istitutrice delle figlie degli Stark',
        en: 'Septa and tutor to the Stark girls',
      },
      log: {
        it: 'Insegna a Sansa e ad Arya il cucito e le buone maniere. Le segue nelle lezioni a Grande Inverno.',
        en: 'She teaches Sansa and Arya needlework and manners. She oversees their lessons at Winterfell.',
      },
      status: [
        { episode: 1, chapter: 8, value: 'alive' },
        { episode: 10, chapter: 68, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 1,
          chapter: 8,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'jory-cassel': {
      role: {
        it: 'Capitano della guardia di Casa Stark',
        en: 'Captain of the House Stark guard',
      },
      log: {
        it: 'Cavalca con Lord Stark all’esecuzione di un disertore. Al ritorno è con il gruppo che trova i cuccioli di metalupo nella neve.',
        en: 'He rides with Lord Stark to the execution of a deserter. On the way back he is with the party that finds the direwolf pups in the snow.',
      },
      status: [
        { episode: 1, chapter: 2, value: 'alive' },
        { episode: 5, chapter: 36, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 1,
          chapter: 2,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'jeor-mormont': {
      role: {
        it: 'Lord comandante dei Guardiani della notte',
        en: 'Lord Commander of the Night’s Watch',
      },
      log: {
        it: 'Guida i Guardiani della notte da Castello Nero. È un uomo anziano e burbero. Jon Snow è tra le reclute che si addestrano sotto il suo comando.',
        en: 'He leads the Night’s Watch from Castle Black. He is a gruff old man. Jon Snow is among the recruits training under his command.',
      },
      status: [{ episode: 3, chapter: 20, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 20,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'aemon': {
      role: { it: 'Maestro di Castello Nero', en: 'Maester of Castle Black' },
      log: {
        it: 'È molto anziano e cieco. Siede con il lord comandante quando a Tyrion Lannister viene chiesto di far sapere a corte che la Barriera ha bisogno di uomini.',
        en: 'He is very old and blind. He sits with the Lord Commander when Tyrion Lannister is asked to tell the court that the Wall needs men.',
      },
      status: [{ episode: 3, chapter: 22, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 22,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'samwell-tarly': {
      role: [
        {
          episode: 4,
          chapter: 27,
          value: {
            it: 'Recluta dei Guardiani della notte',
            en: 'Recruit of the Night’s Watch',
          },
        },
        {
          episode: 7,
          chapter: 49,
          value: {
            it: 'Attendente di maestro Aemon',
            en: 'Steward to Maester Aemon',
          },
        },
      ],
      log: {
        it: 'Arriva a Castello Nero grasso, impacciato e incapace di combattere. Alliser Thorne lo umilia nel cortile, e Jon prende le sue difese. Racconta che è stato suo padre a mandarlo alla Barriera.',
        en: 'He arrives at Castle Black fat, clumsy and unable to fight. Alliser Thorne humiliates him in the yard, and Jon stands up for him. He says it was his father who sent him to the Wall.',
      },
      status: [{ episode: 4, chapter: 27, value: 'alive' }],
      affiliation: [
        {
          episode: 4,
          chapter: 27,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'alliser-thorne': {
      role: {
        it: 'Maestro d’armi di Castello Nero',
        en: 'Master-at-arms of Castle Black',
      },
      log: {
        it: 'Addestra le reclute dei Guardiani della notte con disprezzo. Jon è il più abile di loro, e lui lo chiama “Lord Snow” per deriderlo.',
        en: 'He trains the recruits of the Night’s Watch with contempt. Jon is the most skilled of them, and he calls him “Lord Snow” to mock him.',
      },
      status: [{ episode: 3, chapter: 20, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 20,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'yoren': {
      role: {
        it: 'Reclutatore dei Guardiani della notte',
        en: 'Recruiter for the Night’s Watch',
      },
      log: {
        it: 'Si unisce al gruppo diretto alla Barriera con Jon e suo zio. Porta con sé due condannati come nuove reclute.',
        en: 'He joins the party riding to the Wall with Jon and his uncle. He brings two convicts with him as new recruits.',
      },
      status: [{ episode: 3, chapter: 14, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 14,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'cersei-lannister': {
      affiliation: [
        {
          episode: 1,
          chapter: 5,
          value: { it: 'Casa Lannister', en: 'House Lannister' },
        },
      ],
      log: {
        it: 'È la moglie di re Robert e viaggia verso nord con lui e con i loro figli. I suoi fratelli Jaime e Tyrion sono al seguito.',
        en: 'She is King Robert’s wife and travels north with him and their children. Her brothers Jaime and Tyrion ride with them.',
      },
      role: [
        {
          episode: 1,
          chapter: 5,
          value: {
            it: 'Regina dei Sette Regni',
            en: 'Queen of the Seven Kingdoms',
          },
        },
        {
          episode: 7,
          chapter: 50,
          value: {
            it: 'Regina, madre del nuovo re',
            en: 'Queen, mother of the new king',
          },
        },
      ],
      status: [{ episode: 1, chapter: 5, value: 'alive' }],
    },
    'jaime-lannister': {
      affiliation: [
        {
          episode: 1,
          chapter: 5,
          value: { it: 'Guardia reale', en: 'Kingsguard' },
        },
      ],
      log: {
        it: 'È un cavaliere della Guardia reale, al servizio del re. Arriva a Grande Inverno con la corte, accanto alla sorella, la regina.',
        en: 'He is a knight of the Kingsguard, in the king’s service. He arrives at Winterfell with the court, beside his sister the queen.',
      },
      role: [
        {
          episode: 1,
          chapter: 5,
          value: {
            it: 'Cavaliere della Guardia reale',
            en: 'Knight of the Kingsguard',
          },
        },
        {
          episode: 8,
          chapter: 58,
          value: {
            it: 'Lord Comandante della Guardia reale',
            en: 'Lord Commander of the Kingsguard',
          },
        },
      ],
      status: [
        { episode: 1, chapter: 5, value: 'alive' },
        { episode: 9, chapter: 64, value: 'captured' },
      ],
    },
    'tyrion-lannister': {
      affiliation: [
        {
          episode: 1,
          chapter: 5,
          value: { it: 'Casa Lannister', en: 'House Lannister' },
        },
      ],
      log: {
        it: 'È un nano, il più giovane dei fratelli della regina. Viaggia verso Grande Inverno con la corte.',
        en: 'He is a dwarf, the youngest of the queen’s brothers. He travels to Winterfell with the court.',
      },
      role: [
        {
          episode: 1,
          chapter: 5,
          value: {
            it: 'Fratello minore della regina',
            en: 'The queen’s younger brother',
          },
        },
        {
          episode: 10,
          chapter: 70,
          value: {
            it: 'Primo Cavaliere in vece del padre',
            en: 'Acting Hand of the King',
          },
        },
      ],
      status: [
        { episode: 1, chapter: 5, value: 'alive' },
        { episode: 4, chapter: 29, value: 'captured' },
        { episode: 6, chapter: 41, value: 'alive' },
      ],
    },
    'tywin-lannister': {
      affiliation: [
        {
          episode: 7,
          chapter: 57,
          value: { it: 'Casa Lannister', en: 'House Lannister' },
        },
      ],
      log: {
        it: 'È il signore di Castel Granito e capo della sua casata. Ha radunato un esercito dopo che suo figlio Tyrion è stato preso prigioniero.',
        en: 'He is the lord of Casterly Rock and the head of his house. He has raised an army after his son Tyrion was taken prisoner.',
      },
      role: [
        {
          episode: 7,
          chapter: 57,
          value: {
            it: 'Signore di Castel Granito',
            en: 'Lord of Casterly Rock',
          },
        },
        {
          episode: 10,
          chapter: 58,
          value: { it: 'Primo Cavaliere del Re', en: 'Hand of the King' },
        },
      ],
      status: [{ episode: 7, chapter: 57, value: 'alive' }],
    },
    'joffrey-baratheon': {
      affiliation: [
        {
          episode: 1,
          chapter: 5,
          value: { it: 'Casa Baratheon', en: 'House Baratheon' },
        },
      ],
      log: {
        it: 'È il primogenito del re e della regina, e l’erede al trono. Arriva a Grande Inverno con la corte.',
        en: 'He is the eldest child of the king and queen, and heir to the throne. He arrives at Winterfell with the court.',
      },
      role: [
        {
          episode: 1,
          chapter: 5,
          value: { it: 'Principe ereditario', en: 'Crown prince' },
        },
        {
          episode: 7,
          chapter: 50,
          value: { it: 'Re dei Sette Regni', en: 'King of the Seven Kingdoms' },
        },
      ],
      status: [{ episode: 1, chapter: 5, value: 'alive' }],
    },
    'myrcella-baratheon': {
      affiliation: [
        {
          episode: 1,
          chapter: 6,
          value: { it: 'Casa Baratheon', en: 'House Baratheon' },
        },
      ],
      log: {
        it: 'È la figlia del re e della regina, ancora bambina. Viaggia verso nord con i genitori e i fratelli.',
        en: 'She is the young daughter of the king and queen. She travels north with her parents and brothers.',
      },
      role: { it: 'Principessa', en: 'Princess' },
      status: [{ episode: 1, chapter: 6, value: 'alive' }],
    },
    'tommen-baratheon': {
      affiliation: [
        {
          episode: 1,
          chapter: 6,
          value: { it: 'Casa Baratheon', en: 'House Baratheon' },
        },
      ],
      log: {
        it: 'È il figlio più piccolo del re e della regina. Viaggia verso nord con i genitori, il fratello e la sorella.',
        en: 'He is the youngest child of the king and queen. He travels north with his parents, his brother and his sister.',
      },
      role: { it: 'Principe', en: 'Prince' },
      status: [{ episode: 1, chapter: 6, value: 'alive' }],
    },
    'robert-baratheon': {
      affiliation: [
        {
          episode: 1,
          chapter: 5,
          value: { it: 'Casa Baratheon', en: 'House Baratheon' },
        },
      ],
      log: {
        it: 'È il re dei Sette Regni. Viene a Grande Inverno con la regina e la corte e chiede al signore del castello, suo vecchio amico, di diventare il suo Primo Cavaliere.',
        en: 'He is the king of the Seven Kingdoms. He comes to Winterfell with the queen and the court and asks the castle’s lord, his old friend, to become his Hand.',
      },
      role: { it: 'Re dei Sette Regni', en: 'King of the Seven Kingdoms' },
      status: [
        { episode: 1, chapter: 5, value: 'alive' },
        { episode: 7, chapter: 50, value: 'deceased' },
      ],
    },
    'renly-baratheon': {
      affiliation: [
        {
          episode: 3,
          chapter: 16,
          value: { it: 'Casa Baratheon', en: 'House Baratheon' },
        },
      ],
      log: {
        it: 'È il più giovane dei fratelli del re. Segue la corte ed è cordiale con i nuovi arrivati.',
        en: 'He is the youngest of the king’s brothers. He keeps to the court and is friendly to newcomers.',
      },
      role: [
        {
          episode: 3,
          chapter: 16,
          value: {
            it: 'Fratello minore del re',
            en: 'The king’s younger brother',
          },
        },
        {
          episode: 7,
          chapter: 50,
          value: {
            it: 'Fratello del re defunto, fuggito da Approdo del Re',
            en: 'The late king’s brother, fled from King’s Landing',
          },
        },
        {
          episode: 10,
          chapter: 70,
          value: {
            it: 'Pretendente al Trono di Spade',
            en: 'Claimant to the Iron Throne',
          },
        },
      ],
      status: [{ episode: 3, chapter: 16, value: 'alive' }],
    },
    'lysa-arryn': {
      affiliation: [
        {
          episode: 5,
          chapter: 35,
          value: { it: 'Casa Arryn', en: 'House Arryn' },
        },
      ],
      log: {
        it: 'È la sorella di Catelyn e la vedova dell’ultimo Primo Cavaliere del Re. Vive nel Nido dell’Aquila con il figlio e lo protegge da tutto.',
        en: 'She is Catelyn’s sister and the widow of the last Hand of the King. She lives in the Eyrie with her son and shields him from everything.',
      },
      role: { it: 'Lady del Nido dell’Aquila', en: 'Lady of the Eyrie' },
      status: [{ episode: 5, chapter: 35, value: 'alive' }],
    },
    'robin-arryn': {
      affiliation: [
        {
          episode: 5,
          chapter: 35,
          value: { it: 'Casa Arryn', en: 'House Arryn' },
        },
      ],
      log: {
        it: 'È l’unico figlio di Lysa, un bambino gracile che lei allatta ancora. Chiede alla madre di far volare un prigioniero.',
        en: 'He is Lysa’s only son, a frail child she still nurses. He asks his mother to make a prisoner fly.',
      },
      role: { it: 'Lord del Nido dell’Aquila', en: 'Lord of the Eyrie' },
      status: [{ episode: 5, chapter: 35, value: 'alive' }],
    },
    'bronn': {
      affiliation: [
        {
          episode: 4,
          chapter: 32,
          value: { it: 'Nessuna casata', en: 'No house' },
        },
        {
          episode: 6,
          chapter: 41,
          value: { it: 'Casa Lannister', en: 'House Lannister' },
        },
      ],
      log: {
        it: 'È un mercenario che si vende a chi paga. Si trova alla locanda all’incrocio quando Catelyn chiede aiuto per arrestare Tyrion.',
        en: 'He is a sellsword who fights for whoever pays. He is at the inn at the crossroads when Catelyn calls for help to arrest Tyrion.',
      },
      role: [
        {
          episode: 4,
          chapter: 32,
          value: { it: 'Mercenario', en: 'Sellsword' },
        },
        {
          episode: 6,
          chapter: 41,
          value: { it: 'Il mercenario di Tyrion', en: 'Tyrion’s sellsword' },
        },
      ],
      status: [{ episode: 4, chapter: 32, value: 'alive' }],
    },
    'shae': {
      affiliation: [
        {
          episode: 9,
          chapter: 63,
          value: { it: 'Esercito dei Lannister', en: 'Lannister host' },
        },
      ],
      log: {
        it: 'È una giovane che segue l’accampamento dei Lannister. Bronn la trova per Tyrion e lei passa con lui la notte prima della battaglia.',
        en: 'She is a young woman who follows the Lannister camp. Bronn finds her for Tyrion, and she spends the night before the battle with him.',
      },
      role: { it: 'Prostituta al seguito dell’esercito', en: 'Camp follower' },
      status: [{ episode: 9, chapter: 63, value: 'alive' }],
    },
    'walder-frey': {
      affiliation: [
        {
          episode: 9,
          chapter: 60,
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
      log: {
        it: 'È un lord molto anziano, con una prole numerosissima, che tiene il ponte delle Torri Gemelle. Lascia passare l’esercito di Robb in cambio di matrimoni con la sua famiglia.',
        en: 'He is a very old lord with a great many children, and he holds the bridge at the Twins. He lets Robb’s army cross in exchange for marriages into his family.',
      },
      role: { it: 'Signore del Guado', en: 'Lord of the Crossing' },
      status: [{ episode: 9, chapter: 60, value: 'alive' }],
    },
    'ros': {
      affiliation: [
        {
          episode: 4,
          chapter: 25,
          value: { it: 'Bordello di Grande Inverno', en: 'Winterfell brothel' },
        },
        {
          episode: 7,
          chapter: 48,
          source: 'episode',
          value: { it: 'Bordello di Ditocorto', en: 'Littlefinger’s brothel' },
        },
      ],
      log: {
        it: 'Lavora nel bordello del borgo fuori Grande Inverno. Tra i suoi clienti ci sono Theon e Tyrion.',
        en: 'She works in the brothel of the town outside Winterfell. Theon and Tyrion are among her clients.',
      },
      role: { it: 'Prostituta', en: 'Prostitute' },
      status: [{ episode: 4, chapter: 25, value: 'alive' }],
    },
    'ilyn-payne': {
      role: { it: 'Boia del re', en: 'King’s headsman' },
      log: {
        it: 'È il cavaliere che esegue le condanne a morte del re. Il Re Folle gli fece strappare la lingua, e da allora non parla più. Quando Sansa Stark lo incontra, il suo aspetto la spaventa.',
        en: 'He is the knight who carries out the king’s death sentences. The Mad King had his tongue torn out, and he has not spoken since. When Sansa Stark meets him, his looks frighten her.',
      },
      status: [{ episode: 2, chapter: 16, value: 'alive' }],
      affiliation: [
        {
          episode: 2,
          chapter: 16,
          value: { it: 'Corte del re', en: 'The king’s court' },
        },
      ],
    },
    'barristan-selmy': {
      role: [
        {
          episode: 3,
          chapter: 16,
          value: {
            it: 'Lord comandante della Guardia Reale',
            en: 'Lord Commander of the Kingsguard',
          },
        },
        {
          episode: 8,
          chapter: 58,
          value: {
            it: 'Cavaliere congedato dalla Guardia Reale',
            en: 'Knight dismissed from the Kingsguard',
          },
        },
      ],
      log: {
        it: 'Guida la Guardia Reale, i cavalieri che hanno giurato di proteggere il re. È anziano ma ancora forte, e veste di bianco come tutti i suoi confratelli.',
        en: 'He leads the Kingsguard, the knights sworn to protect the king. He is old but still strong, and wears white like the rest of his brothers.',
      },
      status: [{ episode: 3, chapter: 16, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 16,
          value: { it: 'Guardia Reale', en: 'Kingsguard' },
        },
        {
          episode: 8,
          chapter: 58,
          value: { it: 'Ex Guardia Reale', en: 'Formerly of the Kingsguard' },
        },
      ],
    },
    'syrio-forel': {
      role: {
        it: 'Maestro di spada di Arya Stark',
        en: 'Arya Stark’s sword master',
      },
      log: {
        it: 'Eddard Stark lo assume perché insegni a sua figlia Arya a usare la spada. Le insegna il modo di combattere di Braavos, partendo da una spada di legno. Per tutti gli altri, le loro sono lezioni di danza.',
        en: 'Eddard Stark hires him to teach his daughter Arya to use a sword. He teaches her the Braavosi way of fighting, starting with a wooden sword. To everyone else, these are dancing lessons.',
      },
      status: [
        { episode: 3, chapter: 23, value: 'alive' },
        { episode: 8, chapter: 51, value: 'presumed-dead' },
      ],
      affiliation: [
        {
          episode: 3,
          chapter: 23,
          value: {
            it: 'Al servizio di Casa Stark',
            en: 'In House Stark’s service',
          },
        },
      ],
    },
    'petyr-baelish': {
      role: { it: 'Maestro del conio', en: 'Master of coin' },
      log: {
        it: 'Siede nel Concilio ristretto come maestro del conio, ed è chiamato Ditocorto. Quando Catelyn arriva in segreto ad Approdo del Re, i suoi uomini la portano da lui. Le dice che il pugnale usato contro suo figlio era suo e che lo perse in una scommessa con Tyrion Lannister, poi le offre il suo aiuto.',
        en: 'He sits on the small council as master of coin, and is called Littlefinger. When Catelyn comes to King’s Landing in secret, his men bring her to him. He tells her the dagger used against her son was his, lost in a wager to Tyrion Lannister, and offers her his help.',
      },
      status: [{ episode: 3, chapter: 19, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 19,
          value: { it: 'Concilio ristretto', en: 'Small council' },
        },
      ],
    },
    'varys': {
      role: { it: 'Maestro dei sussurri', en: 'Master of whisperers' },
      log: {
        it: 'Siede nel Concilio ristretto come maestro dei sussurri, e i suoi informatori gli riferiscono ciò che accade in città. Sa che Catelyn è arrivata in segreto e si unisce al suo incontro con Ditocorto per esaminare il pugnale.',
        en: 'He sits on the small council as master of whisperers, and his informers tell him what happens in the city. He knows Catelyn has arrived in secret and joins her meeting with Littlefinger to look at the dagger.',
      },
      status: [{ episode: 3, chapter: 19, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 19,
          value: { it: 'Concilio ristretto', en: 'Small council' },
        },
      ],
    },
    'pycelle': {
      role: { it: 'Gran maestro', en: 'Grand Maester' },
      log: {
        it: 'È il gran maestro e siede da molti anni nel Concilio ristretto. Quando Eddard Stark arriva ad Approdo del Re come nuovo Primo Cavaliere, lo accoglie insieme al resto del Concilio.',
        en: 'He is the Grand Maester and has sat on the small council for many years. When Eddard Stark arrives in King’s Landing as the new Hand, he receives him with the rest of the council.',
      },
      status: [{ episode: 3, chapter: 21, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 21,
          value: { it: 'Concilio ristretto', en: 'Small council' },
        },
      ],
    },
    'sandor-clegane': {
      role: [
        {
          episode: 4,
          chapter: 5,
          value: {
            it: 'Guardia del corpo del principe Joffrey',
            en: 'Prince Joffrey’s bodyguard',
          },
        },
        {
          episode: 8,
          chapter: 58,
          value: {
            it: 'Membro della Guardia Reale',
            en: 'Member of the Kingsguard',
          },
        },
      ],
      log: {
        it: 'Arriva a Grande Inverno con il seguito del re. È un uomo enorme, al servizio del principe Joffrey.',
        en: 'He comes to Winterfell with the king’s party. He is a huge man in the service of Prince Joffrey.',
      },
      status: [{ episode: 4, chapter: 5, value: 'alive' }],
      affiliation: [
        {
          episode: 4,
          chapter: 5,
          value: { it: 'Casa Lannister', en: 'House Lannister' },
        },
        {
          episode: 8,
          chapter: 58,
          value: { it: 'Guardia Reale', en: 'Kingsguard' },
        },
      ],
    },
    'janos-slynt': {
      role: [
        {
          episode: 4,
          chapter: 28,
          value: {
            it: 'Comandante della Guardia cittadina',
            en: 'Commander of the City Watch',
          },
        },
        {
          episode: 8,
          chapter: 58,
          value: {
            it: 'Lord di Harrenhal, comandante della Guardia cittadina',
            en: 'Lord of Harrenhal, commander of the City Watch',
          },
        },
      ],
      log: {
        it: 'Comanda la Guardia cittadina di Approdo del Re. Con la città piena di gente venuta per il torneo, dice al Concilio ristretto che i suoi uomini non bastano. Eddard Stark gli presta venti guardie della sua casa e ordina di assumere altre cinquanta guardie cittadine.',
        en: 'He commands the City Watch of King’s Landing. With the city full of people come for the tourney, he tells the small council he has too few men. Eddard Stark lends him twenty of his own household guards and orders fifty more watchmen hired.',
      },
      status: [{ episode: 4, chapter: 28, value: 'alive' }],
      affiliation: [
        {
          episode: 4,
          chapter: 28,
          value: { it: 'Guardia cittadina', en: 'City Watch' },
        },
      ],
    },
    'gendry': {
      role: [
        {
          episode: 4,
          chapter: 28,
          value: { it: 'Apprendista armaiolo', en: 'Armorer’s apprentice' },
        },
        {
          episode: 10,
          chapter: 66,
          source: 'episode',
          value: {
            it: 'Recluta dei Guardiani della notte',
            en: 'Night’s Watch recruit',
          },
        },
      ],
      log: {
        it: 'Lavora nella bottega di un armaiolo di Approdo del Re. Eddard Stark va a trovarlo seguendo le tracce del precedente Primo Cavaliere e ammira un elmo che il ragazzo si è forgiato da solo. Guardandolo in viso, ci riconosce i tratti del re.',
        en: 'He works at an armorer’s forge in King’s Landing. Eddard Stark comes to see him, following the trail of the previous Hand, and admires a helm the boy made for himself. Looking at his face, he sees the king’s features in it.',
      },
      status: [{ episode: 4, chapter: 28, value: 'alive' }],
      affiliation: [
        {
          episode: 4,
          chapter: 28,
          value: {
            it: 'Bottega di un armaiolo, Approdo del Re',
            en: 'An armorer’s forge, King’s Landing',
          },
        },
        {
          episode: 10,
          chapter: 66,
          source: 'episode',
          value: {
            it: 'Reclute dei Guardiani della notte',
            en: 'Night’s Watch recruits',
          },
        },
      ],
    },
    'gregor-clegane': {
      role: [
        { episode: 4, chapter: 30, value: { it: 'Cavaliere', en: 'Knight' } },
        {
          episode: 6,
          chapter: 44,
          value: {
            it: 'Cavaliere privato di terre e titoli dal Primo Cavaliere',
            en: 'Knight stripped of his lands and titles by the Hand',
          },
        },
      ],
      log: {
        it: 'Giostra al torneo in onore del nuovo Primo Cavaliere e uccide con la lancia un giovane cavaliere. Da ragazzi, spinse il viso del fratello minore nel fuoco per un giocattolo, e le cicatrici si vedono ancora.',
        en: 'He jousts in the tourney for the new Hand and kills a young knight with his lance. When they were boys, he pushed his younger brother’s face into a fire over a toy, and the scars still show.',
      },
      status: [{ episode: 4, chapter: 30, value: 'alive' }],
      affiliation: [
        {
          episode: 4,
          chapter: 30,
          value: { it: 'Casa Clegane', en: 'House Clegane' },
        },
      ],
    },
    'loras-tyrell': {
      role: { it: 'Cavaliere', en: 'Knight' },
      log: {
        it: 'È un giovane giostratore molto ammirato, detto il Cavaliere dei Fiori. Al torneo in onore del nuovo Primo Cavaliere regala una rosa a Sansa Stark davanti alla folla.',
        en: 'He is a young and much admired jouster, called the Knight of Flowers. At the tourney for the new Hand, he gives Sansa Stark a rose in front of the crowd.',
      },
      status: [{ episode: 5, chapter: 30, value: 'alive' }],
      affiliation: [
        {
          episode: 5,
          chapter: 30,
          value: { it: 'Casa Tyrell', en: 'House Tyrell' },
        },
      ],
    },
    'daenerys-targaryen': {
      role: [
        {
          episode: 1,
          chapter: 4,
          value: {
            it: 'Principessa della Casa Targaryen, in esilio',
            en: 'Princess of House Targaryen, in exile',
          },
        },
        // The show weds her in episode 1, its own gate: the step opens one
        // episode late because episodes must strictly increase.
        {
          episode: 2,
          chapter: 12,
          value: {
            it: 'Khaleesi, moglie di Drogo',
            en: 'Khaleesi, Drogo’s wife',
          },
        },
        {
          episode: 10,
          chapter: 73,
          value: {
            it: 'Khaleesi a capo del proprio khalasar',
            en: 'Khaleesi at the head of her own khalasar',
          },
        },
      ],
      log: {
        it: 'Vive a Pentos con il fratello Viserys, ospite del magistro Illyrio. Viserys vuole darla in sposa a khal Drogo per avere l’esercito con cui riprendersi il Trono di Spade. Lei gli dice che vuole tornare a casa, e lui non la ascolta.',
        en: 'She lives in Pentos with her brother Viserys, a guest of Magister Illyrio. Viserys means to marry her to Khal Drogo for the army he needs to take back the Iron Throne. She tells him she wants to go home, and he does not listen.',
      },
      status: [{ episode: 1, chapter: 4, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 4,
          value: { it: 'Casa Targaryen', en: 'House Targaryen' },
        },
        {
          episode: 2,
          chapter: 12,
          value: {
            it: 'Casa Targaryen, khalasar di Drogo',
            en: 'House Targaryen, Drogo’s khalasar',
          },
        },
        {
          episode: 10,
          chapter: 73,
          value: {
            it: 'Casa Targaryen, il suo khalasar',
            en: 'House Targaryen, her own khalasar',
          },
        },
      ],
    },
    'viserys-targaryen': {
      role: {
        it: 'Pretendente in esilio al Trono di Spade',
        en: 'Exiled claimant to the Iron Throne',
      },
      log: {
        it: 'Si considera il legittimo re dei Sette Regni e vive in esilio con la sorella Daenerys. A Pentos, tramite il magistro Illyrio, combina le nozze di lei con khal Drogo. Quando la sorella si mostra riluttante, la minaccia.',
        en: 'He considers himself the rightful king of the Seven Kingdoms and lives in exile with his sister Daenerys. In Pentos, through Magister Illyrio, he arranges her marriage to Khal Drogo. When his sister holds back, he threatens her.',
      },
      status: [
        { episode: 1, chapter: 4, value: 'alive' },
        { episode: 6, chapter: 47, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 1,
          chapter: 4,
          value: { it: 'Casa Targaryen', en: 'House Targaryen' },
        },
      ],
    },
    'drogo': {
      role: {
        it: 'Khal, a capo di un khalasar dothraki',
        en: 'Khal, leader of a Dothraki khalasar',
      },
      log: {
        it: 'Guida uno dei grandi khalasar dothraki ed è arrivato a Pentos. Il magistro Illyrio combina le sue nozze con Daenerys. In cambio, il fratello di lei si aspetta un esercito.',
        en: 'He leads one of the great Dothraki khalasars and has come to Pentos. Magister Illyrio arranges his marriage to Daenerys. In return, her brother expects an army.',
      },
      status: [
        { episode: 1, chapter: 4, value: 'alive' },
        { episode: 10, chapter: 69, value: 'deceased' },
      ],
      affiliation: [
        { episode: 1, chapter: 4, value: { it: 'Dothraki', en: 'Dothraki' } },
      ],
    },
    'jorah-mormont': {
      role: { it: 'Cavaliere in esilio', en: 'Exiled knight' },
      log: {
        it: 'Ha lasciato i Sette Regni e vive in esilio a Essos. Conosce i Dothraki e le loro usanze. A Pentos è tra gli ospiti riuniti intorno a khal Drogo e ai Targaryen.',
        en: 'He has left the Seven Kingdoms and lives in exile in Essos. He knows the Dothraki and their customs. In Pentos he is among the guests gathered around Khal Drogo and the Targaryens.',
      },
      status: [{ episode: 1, chapter: 4, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 4,
          value: {
            it: 'Casa Mormont, in esilio',
            en: 'House Mormont, in exile',
          },
        },
      ],
    },
    'illyrio-mopatis': {
      role: { it: 'Magistro di Pentos', en: 'Magister of Pentos' },
      log: {
        it: 'Accoglie Viserys e Daenerys nella sua dimora a Pentos. Combina le nozze di Daenerys con khal Drogo. È presente quando Drogo vede Daenerys per la prima volta.',
        en: 'He takes Viserys and Daenerys into his manse in Pentos. He arranges Daenerys’s marriage to Khal Drogo. He is there when Drogo first sees Daenerys.',
      },
      status: [{ episode: 1, chapter: 4, value: 'alive' }],
      affiliation: [
        { episode: 1, chapter: 4, value: { it: 'Pentos', en: 'Pentos' } },
      ],
    },
    'irri': {
      role: { it: 'Ancella di Daenerys', en: 'Handmaiden to Daenerys' },
      log: {
        it: 'È una delle ancelle che servono Daenerys dopo le nozze con Drogo. È dothraki, come il popolo tra cui ora vive la sua khaleesi.',
        en: 'She is one of the handmaidens who serve Daenerys after her marriage to Drogo. She is Dothraki, like the people her khaleesi now lives among.',
      },
      status: [{ episode: 2, chapter: 12, value: 'alive' }],
      affiliation: [
        {
          episode: 2,
          chapter: 12,
          value: { it: 'Khalasar di Drogo', en: 'Drogo’s khalasar' },
        },
      ],
    },
    'doreah': {
      role: { it: 'Ancella di Daenerys', en: 'Handmaiden to Daenerys' },
      log: {
        it: 'È una delle ancelle che servono Daenerys dopo le nozze con Drogo. A differenza delle altre non è dothraki. Insegna a Daenerys come dare piacere al marito.',
        en: 'She is one of the handmaidens who serve Daenerys after her marriage to Drogo. Unlike the others, she is not Dothraki. She teaches Daenerys how to please her husband.',
      },
      status: [{ episode: 2, chapter: 12, value: 'alive' }],
      affiliation: [
        {
          episode: 2,
          chapter: 12,
          value: { it: 'Khalasar di Drogo', en: 'Drogo’s khalasar' },
        },
      ],
    },
    'rakharo': {
      role: [
        {
          episode: 3,
          chapter: 24,
          value: { it: 'Guardia di Daenerys', en: 'Daenerys’s guard' },
        },
        // The books alone name him her bloodrider before the pyre.
        {
          episode: 10,
          chapter: 73,
          source: 'chapter',
          value: {
            it: 'Cavaliere di sangue di Daenerys',
            en: 'Daenerys’s bloodrider',
          },
        },
      ],
      log: {
        it: 'È uno dei guerrieri dothraki incaricati di proteggere Daenerys. Cavalca con lei mentre il khalasar di Drogo viaggia verso est, in direzione di Vaes Dothrak.',
        en: 'He is one of the Dothraki warriors charged with protecting Daenerys. He rides with her as Drogo’s khalasar travels east toward Vaes Dothrak.',
      },
      status: [{ episode: 3, chapter: 24, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 24,
          value: { it: 'Khalasar di Drogo', en: 'Drogo’s khalasar' },
        },
        {
          episode: 10,
          chapter: 73,
          value: { it: 'Khalasar di Daenerys', en: 'Daenerys’s khalasar' },
        },
      ],
    },
    'mirri-maz-duur': {
      role: { it: 'Sacerdotessa e guaritrice', en: 'Godswife and healer' },
      log: {
        it: 'Daenerys la sottrae ai guerrieri che attaccano la sua gente. Dice di essere una sacerdotessa e una guaritrice, e Drogo le permette di curargli una ferita. Chi è vicino al khal la chiama maegi.',
        en: 'Daenerys takes her away from the riders attacking her people. She says she is a godswife and a healer, and Drogo lets her treat his wound. The khal’s men call her a maegi.',
      },
      status: [
        { episode: 8, chapter: 62, value: 'alive' },
        { episode: 10, chapter: 73, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 8,
          chapter: 62,
          value: { it: 'Lhazareen', en: 'Lhazareen' },
        },
      ],
    },
    'hullen': {
      role: {
        it: 'Mastro dei cavalli di Grande Inverno',
        en: 'Master of horse at Winterfell',
      },
      log: {
        it: 'Si occupa dei cavalli di Grande Inverno. Cavalca con lord Stark all’esecuzione di un disertore ed è con il gruppo che al ritorno trova i cuccioli di meta-lupo.',
        en: 'He looks after the horses of Winterfell. He rides with Lord Stark to the execution of a deserter and is with the party that finds the direwolf pups on the way back.',
      },
      status: [
        { episode: 1, chapter: 2, value: 'alive' },
        { episode: 8, chapter: 51, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 1,
          chapter: 2,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'jeyne-poole': {
      role: {
        it: 'Figlia dell’intendente di Grande Inverno',
        en: 'Daughter of the steward of Winterfell',
      },
      log: {
        it: 'Cuce accanto a Sansa alla lezione di ricamo della septa Mordane e chiacchiera con lei mentre lavorano. È la sua amica più cara.',
        en: 'She sews beside Sansa at Septa Mordane’s needlework lesson and talks with her while they work. She is Sansa’s closest friend.',
      },
      status: [{ episode: 1, chapter: 8, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 8,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'mikken': {
      role: { it: 'Fabbro di Grande Inverno', en: 'Blacksmith of Winterfell' },
      log: {
        it: 'Lavora alla forgia di Grande Inverno. Prima di partire per la Barriera, Jon gli fa forgiare per Arya una spada sottile e leggera.',
        en: 'He works the forge at Winterfell. Before Jon leaves for the Wall, he has Mikken make a slender, light sword for Arya.',
      },
      status: [{ episode: 2, chapter: 54, value: 'alive' }],
      affiliation: [
        {
          episode: 2,
          chapter: 54,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'hallis-mollen': {
      role: {
        it: 'Capitano della guardia di Grande Inverno',
        en: 'Captain of the guard at Winterfell',
      },
      log: {
        it: 'Comanda la guardia di Grande Inverno ora che Jory è partito verso sud con lord Stark. Dopo che un uomo tenta di uccidere Bran nel suo letto, si presenta da Catelyn con Robb, Theon e ser Rodrik per riferire sulle ricerche.',
        en: 'He commands the guard at Winterfell now that Jory has gone south with Lord Stark. After a man tries to kill Bran in his bed, he comes to Catelyn with Robb, Theon and Ser Rodrik to report on the search.',
      },
      status: [{ episode: 2, chapter: 15, value: 'alive' }],
      affiliation: [
        {
          episode: 2,
          chapter: 15,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'mycah': {
      role: {
        it: 'Garzone di macellaio al seguito del re',
        en: 'Butcher’s boy in the king’s party',
      },
      log: {
        it: 'Viaggia verso sud con il seguito del re. Vicino al fiume si allena con Arya usando dei bastoni come spade, finché il principe Joffrey non sguaina la spada contro di lui. Arya colpisce il principe per difenderlo, e lui scappa.',
        en: 'He travels south with the king’s party. Near the river he practises swordplay with Arya, with sticks for swords, until Prince Joffrey draws his sword on him. Arya strikes the prince to defend him, and he runs off.',
      },
      status: [
        { episode: 2, chapter: 16, source: 'chapter', value: 'alive' },
        { episode: 2, chapter: 17, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 2,
          chapter: 16,
          value: { it: 'Nessuna casata', en: 'No house' },
        },
      ],
    },
    'stiv': {
      role: {
        it: 'Disertore dei Guardiani della notte',
        en: 'Deserter of the Night’s Watch',
      },
      log: {
        it: 'È tra i fuorilegge che circondano Bran nella Foresta del Lupo e cercano di prendergli il cavallo. Robb accorre in aiuto del fratello, e Theon uccide Stiv con una freccia.',
        en: 'He is among the outlaws who surround Bran in the wolfswood and try to take his horse. Robb comes to his brother’s aid, and Theon kills Stiv with an arrow.',
      },
      status: [{ episode: 6, chapter: 38, value: 'deceased' }],
      affiliation: [
        {
          episode: 6,
          chapter: 38,
          value: {
            it: 'Disertori dei Guardiani della notte',
            en: 'Deserters of the Night’s Watch',
          },
        },
      ],
    },
    'wallen': {
      role: {
        it: 'Disertore dei Guardiani della notte',
        en: 'Deserter of the Night’s Watch',
      },
      log: {
        it: 'È tra i fuorilegge che circondano Bran nella Foresta del Lupo e cercano di prendergli il cavallo. Muore nello scontro quando Robb accorre in aiuto del fratello.',
        en: 'He is among the outlaws who surround Bran in the wolfswood and try to take his horse. He dies in the fight when Robb comes to his brother’s aid.',
      },
      status: [{ episode: 6, chapter: 38, value: 'deceased' }],
      affiliation: [
        {
          episode: 6,
          chapter: 38,
          value: {
            it: 'Disertori dei Guardiani della notte',
            en: 'Deserters of the Night’s Watch',
          },
        },
      ],
    },
    'greatjon-umber': {
      role: { it: 'Lord dell’Ultimo Focolare', en: 'Lord of Last Hearth' },
      log: {
        it: 'Porta i suoi uomini nell’esercito di Robb e pretende di guidare l’avanguardia, minacciando di tornarsene a casa. Quando sguaina la spada a tavola, Vento Grigio gli stacca due dita con un morso, e lui ci ride sopra.',
        en: 'He brings his men to Robb’s host and demands to lead the vanguard, threatening to go home if he does not. When he draws his sword at the table, Grey Wind bites off two of his fingers, and he laughs it off.',
      },
      status: [{ episode: 8, chapter: 54, value: 'alive' }],
      affiliation: [
        {
          episode: 8,
          chapter: 54,
          value: {
            it: 'Casa Umber, vassalla di Casa Stark',
            en: 'House Umber, sworn to House Stark',
          },
        },
        {
          episode: 10,
          chapter: 72,
          value: {
            it: 'Casa Umber, vassalla di Robb Stark, Re del Nord',
            en: 'House Umber, sworn to Robb Stark, King in the North',
          },
        },
      ],
    },
    'smalljon-umber': {
      role: { it: 'Figlio di Greatjon Umber', en: 'Son of Greatjon Umber' },
      log: {
        it: 'È il figlio di Greatjon Umber e un guerriero di Casa Umber. La sua casata tiene l’Ultimo Focolare, nell’estremo nord del Nord.',
        en: 'He is Greatjon Umber’s son and a fighter of House Umber. His house holds Last Hearth, in the far north of the North.',
      },
      status: [{ episode: 53, chapter: 64, value: 'alive' }],
      affiliation: [
        {
          episode: 53,
          chapter: 64,
          value: { it: 'Casa Umber', en: 'House Umber' },
        },
      ],
    },
    'rickard-karstark': {
      role: { it: 'Lord di Karhold', en: 'Lord of Karhold' },
      log: {
        it: 'È a capo di Casa Karstark, che ha sede a Karhold. Marcia nell’esercito di Robb con i suoi uomini.',
        en: 'He is the head of House Karstark, whose seat is Karhold. He marches in Robb’s host with his men.',
      },
      status: [{ episode: 17, chapter: 54, value: 'alive' }],
      affiliation: [
        {
          episode: 17,
          chapter: 54,
          value: {
            it: 'Casa Karstark, vassalla di Casa Stark',
            en: 'House Karstark, sworn to House Stark',
          },
        },
        {
          episode: 17,
          chapter: 72,
          source: 'chapter',
          value: {
            it: 'Casa Karstark, vassalla di Robb Stark, Re del Nord',
            en: 'House Karstark, sworn to Robb Stark, King in the North',
          },
        },
      ],
    },
    'roose-bolton': {
      role: [
        {
          episode: 14,
          chapter: 54,
          value: { it: 'Lord di Forte Terrore', en: 'Lord of the Dreadfort' },
        },
        {
          episode: 14,
          chapter: 56,
          source: 'chapter',
          value: {
            it: 'Comandante della fanteria del Nord',
            en: 'Commander of the northern foot',
          },
        },
      ],
      log: {
        it: 'È a capo di Casa Bolton, che ha sede a Forte Terrore. Parla poco e a voce bassa, e ha portato i suoi uomini nell’esercito di Robb.',
        en: 'He is the head of House Bolton, whose seat is the Dreadfort. He speaks little and softly, and he has brought his men to Robb’s host.',
      },
      status: [{ episode: 14, chapter: 54, value: 'alive' }],
      affiliation: [
        {
          episode: 14,
          chapter: 54,
          value: {
            it: 'Casa Bolton, vassalla di Casa Stark',
            en: 'House Bolton, sworn to House Stark',
          },
        },
      ],
    },
    'galbart-glover': {
      role: { it: 'Lord di Deepwood Motte', en: 'Lord of Deepwood Motte' },
      log: {
        it: 'È a capo di Casa Glover, che ha sede a Deepwood Motte. Risponde alla chiamata alle armi di Robb insieme agli altri signori del Nord e siede al suo consiglio di guerra.',
        en: 'He is the head of House Glover, whose seat is Deepwood Motte. He answers Robb’s call to arms with the other northern lords and sits at his war council.',
      },
      status: [{ episode: 8, chapter: 56, value: 'alive' }],
      affiliation: [
        {
          episode: 8,
          chapter: 56,
          value: {
            it: 'Casa Glover, vassalla di Casa Stark',
            en: 'House Glover, sworn to House Stark',
          },
        },
        {
          episode: 10,
          chapter: 72,
          value: {
            it: 'Casa Glover, vassalla di Robb Stark, Re del Nord',
            en: 'House Glover, sworn to Robb Stark, King in the North',
          },
        },
      ],
    },
    'robett-glover': {
      role: { it: 'Membro di Casa Glover', en: 'Member of House Glover' },
      log: {
        it: 'Appartiene a Casa Glover, una casata del Nord. La sua sede è Deepwood Motte.',
        en: 'He belongs to House Glover, a house of the North. Its seat is Deepwood Motte.',
      },
      status: [{ episode: 57, chapter: 54, value: 'alive' }],
      affiliation: [
        {
          episode: 57,
          chapter: 54,
          value: { it: 'Casa Glover', en: 'House Glover' },
        },
      ],
    },
    'maege-mormont': {
      role: { it: 'Lady dell’Isola dell’Orso', en: 'Lady of Bear Island' },
      log: {
        it: 'Governa Casa Mormont dall’Isola dell’Orso. Risponde alla chiamata alle armi di Robb e si unisce al suo esercito con la sua gente.',
        en: 'She rules House Mormont from Bear Island. She answers Robb’s call to arms and joins his host with her people.',
      },
      status: [{ episode: 8, chapter: 54, value: 'alive' }],
      affiliation: [
        {
          episode: 8,
          chapter: 54,
          value: {
            it: 'Casa Mormont, vassalla di Casa Stark',
            en: 'House Mormont, sworn to House Stark',
          },
        },
        {
          episode: 10,
          chapter: 72,
          value: {
            it: 'Casa Mormont, vassalla di Robb Stark, Re del Nord',
            en: 'House Mormont, sworn to Robb Stark, King in the North',
          },
        },
      ],
    },
    'dacey-mormont': {
      role: {
        it: 'Erede dell’Isola dell’Orso, nella guardia di Robb Stark',
        en: 'Heir to Bear Island, in Robb Stark’s guard',
      },
      log: {
        it: 'È la figlia maggiore di lady Maege ed erede dell’Isola dell’Orso. Cavalca nella guardia personale di Robb durante la battaglia nel Bosco dei Sussurri.',
        en: 'She is Lady Maege’s eldest daughter and the heir to Bear Island. She rides in Robb’s personal guard in the battle in the Whispering Wood.',
      },
      status: [{ episode: 9, chapter: 64, value: 'alive' }],
      affiliation: [
        {
          episode: 9,
          chapter: 64,
          value: { it: 'Casa Mormont', en: 'House Mormont' },
        },
      ],
    },
    'wendel-manderly': {
      role: { it: 'Cavaliere di Porto Bianco', en: 'Knight of White Harbor' },
      log: {
        it: 'È figlio del lord di Porto Bianco ed è cavaliere. Combatte per Robb insieme agli uomini di Casa Manderly.',
        en: 'He is a son of the lord of White Harbor and a knight. He fights for Robb with the men of House Manderly.',
      },
      status: [{ episode: 29, chapter: 56, value: 'alive' }],
      affiliation: [
        {
          episode: 29,
          chapter: 56,
          value: {
            it: 'Casa Manderly, nell’esercito di Robb Stark',
            en: 'House Manderly, in Robb Stark’s host',
          },
        },
      ],
    },
    'marillion': {
      role: { it: 'Cantastorie', en: 'Singer' },
      log: {
        it: 'Canta alla locanda e cerca di ingraziarsi Catelyn. Quando lei fa prigioniero Tyrion, segue il suo gruppo sperando di ricavarne una canzone.',
        en: 'He sings at the inn and tries to win Catelyn’s favour. When she takes Tyrion prisoner, he follows her party in the hope of making a song of it.',
      },
      status: [{ episode: 4, chapter: 29, value: 'alive' }],
      affiliation: [
        {
          episode: 4,
          chapter: 29,
          value: { it: 'Nessuna casata', en: 'No house' },
        },
      ],
    },
    'willis-wode': {
      role: {
        it: 'Cavaliere al servizio di Casa Whent',
        en: 'Knight sworn to House Whent',
      },
      log: {
        it: 'Si trova alla locanda quando Catelyn chiede agli uomini presenti di aiutarla a catturare Tyrion. Sguaina la spada per lei e parte con il suo gruppo.',
        en: 'He is at the inn when Catelyn calls on the men there to help her seize Tyrion. He draws his sword for her and rides with her party.',
      },
      status: [
        { episode: 4, chapter: 29, value: 'alive' },
        { episode: 5, chapter: 35, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 4,
          chapter: 29,
          value: { it: 'Casa Whent', en: 'House Whent' },
        },
      ],
    },
    'donnel-waynwood': {
      role: {
        it: 'Custode della Porta Insanguinata',
        en: 'Keeper of the Bloody Gate',
      },
      log: {
        it: 'Comanda la Porta Insanguinata, dove la strada entra nella Valle. Interroga i viaggiatori prima di lasciarli salire verso il Nido dell’Aquila.',
        en: 'He commands the Bloody Gate, where the road enters the Vale. He questions travellers before he lets them ride on toward the Eyrie.',
      },
      status: [{ episode: 35, chapter: 35, value: 'alive' }],
      affiliation: [
        {
          episode: 35,
          chapter: 35,
          value: { it: 'Casa Waynwood', en: 'House Waynwood' },
        },
      ],
    },
    'nestor-royce': {
      role: {
        it: 'Alto attendente della Valle',
        en: 'High Steward of the Vale',
      },
      log: {
        it: 'Tiene per lady Lysa le Porte della Luna, il castello ai piedi della montagna. È lui ad accogliere Catelyn quando arriva con il suo prigioniero.',
        en: 'He holds the Gates of the Moon, the castle at the foot of the mountain, for Lady Lysa. He receives Catelyn there when she arrives with her prisoner.',
      },
      status: [{ episode: 5, chapter: 35, value: 'alive' }],
      affiliation: [
        {
          episode: 5,
          chapter: 35,
          value: { it: 'Casa Royce', en: 'House Royce' },
        },
      ],
    },
    'mya-stone': {
      role: {
        it: 'Guida sul sentiero per il Nido dell’Aquila',
        en: 'Guide on the path to the Eyrie',
      },
      log: {
        it: 'Porta le provviste al Nido dell’Aquila con i suoi muli e conosce ogni passo del sentiero. Guida Catelyn su per la montagna di notte.',
        en: 'She takes supplies up to the Eyrie with her mules and knows every step of the path. She leads Catelyn up the mountain by night.',
      },
      status: [{ episode: 5, chapter: 35, value: 'alive' }],
      affiliation: [
        {
          episode: 5,
          chapter: 35,
          value: {
            it: 'Servitù del Nido dell’Aquila',
            en: 'Household of the Eyrie',
          },
        },
      ],
    },
    'vardis-egen': {
      role: {
        it: 'Capitano della guardia del Nido dell’Aquila',
        en: 'Captain of the guard at the Eyrie',
      },
      log: {
        it: 'Comanda la guardia di Casa Arryn al Nido dell’Aquila ed è al servizio di lady Lysa.',
        en: 'He commands House Arryn’s guard at the Eyrie and serves Lady Lysa.',
      },
      status: [
        { episode: 6, chapter: 35, source: 'chapter', value: 'alive' },
        { episode: 6, chapter: 41, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 6,
          chapter: 35,
          value: { it: 'Casa Arryn', en: 'House Arryn' },
        },
      ],
    },
    'mord': {
      role: {
        it: 'Carceriere delle celle del cielo',
        en: 'Gaoler of the sky cells',
      },
      log: {
        it: 'Sorveglia Tyrion in una cella aperta sul vuoto e lo tratta con brutalità. Tyrion gli promette dell’oro se porterà un messaggio a lady Lysa: è pronto a confessare.',
        en: 'He guards Tyrion in a cell open to the drop and treats him roughly. Tyrion promises him gold to carry a message to Lady Lysa: he is ready to confess.',
      },
      status: [{ episode: 6, chapter: 39, value: 'alive' }],
      affiliation: [
        {
          episode: 6,
          chapter: 39,
          value: { it: 'Casa Arryn', en: 'House Arryn' },
        },
      ],
    },
    'lyn-corbray': {
      role: { it: 'Cavaliere della Valle', en: 'Knight of the Vale' },
      log: {
        it: 'Assiste all’udienza in cui Tyrion chiede un processo per combattimento. È tra i cavalieri che si offrono di battersi come campioni di lady Lysa.',
        en: 'He attends the hearing at which Tyrion demands a trial by combat. He is among the knights who offer to fight as Lady Lysa’s champion.',
      },
      status: [{ episode: 6, chapter: 39, value: 'alive' }],
      affiliation: [
        {
          episode: 6,
          chapter: 39,
          value: { it: 'Casa Corbray', en: 'House Corbray' },
        },
      ],
    },
    'anya-waynwood': {
      role: { it: 'Lady di Ironoaks', en: 'Lady of Ironoaks' },
      log: {
        it: 'Guida Casa Waynwood da Ironoaks. Siede tra i signori della Valle al Nido dell’Aquila.',
        en: 'She heads House Waynwood from Ironoaks. She sits among the lords of the Vale at the Eyrie.',
      },
      status: [{ episode: 38, chapter: 39, value: 'alive' }],
      affiliation: [
        {
          episode: 38,
          chapter: 39,
          value: { it: 'Casa Waynwood', en: 'House Waynwood' },
        },
      ],
    },
    'shagga': {
      role: {
        it: 'Guerriero dei Corvi di Pietra',
        en: 'Warrior of the Stone Crows',
      },
      log: {
        it: 'Il suo clan circonda Tyrion e Bronn sulla strada tra le montagne. Tyrion lo convince a risparmiarli promettendo armi e ricchezze, e il clan accetta di seguirlo.',
        en: 'His clan surrounds Tyrion and Bronn on the road through the mountains. Tyrion talks him out of killing them with promises of weapons and wealth, and the clan agrees to follow him.',
      },
      status: [{ episode: 8, chapter: 43, value: 'alive' }],
      affiliation: [
        {
          episode: 8,
          chapter: 43,
          value: { it: 'Corvi di Pietra', en: 'Stone Crows' },
        },
      ],
    },
    'timett': {
      role: {
        it: 'Capo degli Uomini Bruciati',
        en: 'Leader of the Burned Men',
      },
      log: {
        it: 'Guida gli Uomini Bruciati, che insieme ai Corvi di Pietra di Shagga seguono Tyrion. Accompagna Tyrion all’esercito di suo padre, lord Tywin.',
        en: 'He leads the Burned Men, who follow Tyrion along with Shagga’s Stone Crows. He goes with Tyrion to the army of his father, Lord Tywin.',
      },
      status: [{ episode: 8, chapter: 57, value: 'alive' }],
      affiliation: [
        {
          episode: 8,
          chapter: 57,
          value: {
            it: 'Uomini Bruciati, alleati di Tyrion',
            en: 'Burned Men, allied to Tyrion',
          },
        },
      ],
    },
    'chella': {
      role: { it: 'Capo delle Orecchie Nere', en: 'Leader of the Black Ears' },
      log: {
        it: 'Guida le Orecchie Nere, che con gli altri clan delle montagne seguono Tyrion. Lo accompagna all’esercito di suo padre, lord Tywin.',
        en: 'She leads the Black Ears, who follow Tyrion with the other mountain clans. She goes with him to the army of his father, Lord Tywin.',
      },
      status: [{ episode: 8, chapter: 57, value: 'alive' }],
      affiliation: [
        {
          episode: 8,
          chapter: 57,
          value: {
            it: 'Orecchie Nere, alleate di Tyrion',
            en: 'Black Ears, allied to Tyrion',
          },
        },
      ],
    },
    'meryn-trant': {
      role: {
        it: 'Cavaliere della Guardia reale',
        en: 'Knight of the Kingsguard',
      },
      log: {
        it: 'Porta il mantello bianco della Guardia reale, i cavalieri giurati a proteggere il re. Presta servizio alla corte di Approdo del Re.',
        en: 'He wears the white cloak of the Kingsguard, the knights sworn to protect the king. He serves at the court in King’s Landing.',
      },
      status: [{ episode: 8, chapter: 30, value: 'alive' }],
      affiliation: [
        {
          episode: 8,
          chapter: 30,
          value: { it: 'Guardia reale', en: 'Kingsguard' },
        },
      ],
    },
    'boros-blount': {
      role: {
        it: 'Cavaliere della Guardia reale',
        en: 'Knight of the Kingsguard',
      },
      log: {
        it: 'Fa parte della Guardia reale e veste il mantello bianco dei suoi confratelli. Presta servizio nella Fortezza Rossa, accanto al re.',
        en: 'He belongs to the Kingsguard and wears the white cloak of his sworn brothers. He serves in the Red Keep, at the king’s side.',
      },
      status: [{ episode: 19, chapter: 34, value: 'alive' }],
      affiliation: [
        {
          episode: 19,
          chapter: 34,
          value: { it: 'Guardia reale', en: 'Kingsguard' },
        },
      ],
    },
    'mandon-moore': {
      role: {
        it: 'Cavaliere della Guardia reale',
        en: 'Knight of the Kingsguard',
      },
      log: {
        it: 'Veste il mantello bianco della Guardia reale. Sorveglia la famiglia reale nella Fortezza Rossa.',
        en: 'He wears the white cloak of the Kingsguard. He stands guard over the royal family in the Red Keep.',
      },
      status: [{ episode: 19, chapter: 52, value: 'alive' }],
      affiliation: [
        {
          episode: 19,
          chapter: 52,
          value: { it: 'Guardia reale', en: 'Kingsguard' },
        },
      ],
    },
    'arys-oakheart': {
      role: {
        it: 'Cavaliere della Guardia reale',
        en: 'Knight of the Kingsguard',
      },
      log: {
        it: 'È uno dei cavalieri della Guardia reale. È presente nella sala del trono quando Barristan Selmy viene congedato dalla Guardia reale.',
        en: 'He is one of the knights of the Kingsguard. He is in the throne room when Barristan Selmy is dismissed from the Kingsguard.',
      },
      status: [{ episode: 8, chapter: 58, value: 'alive' }],
      affiliation: [
        {
          episode: 8,
          chapter: 58,
          value: { it: 'Guardia reale', en: 'Kingsguard' },
        },
      ],
    },
    'lancel-lannister': {
      role: { it: 'Scudiero di re Robert', en: 'Squire to King Robert' },
      log: {
        it: 'È uno degli scudieri di re Robert Baratheon e lo serve da vicino. Il re lo tratta con poca pazienza.',
        en: 'He is one of King Robert Baratheon’s squires and waits on him closely. The king has little patience with him.',
      },
      status: [{ episode: 3, chapter: 31, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 31,
          value: { it: 'Casa Lannister', en: 'House Lannister' },
        },
      ],
    },
    'dontos-hollard': {
      role: {
        it: 'Cavaliere e giullare di corte',
        en: 'Knight and court fool',
      },
      log: {
        it: 'Si presenta ubriaco davanti a re Joffrey, che vuole farlo uccidere. Sansa convince il re a risparmiarlo, e Joffrey ne fa il suo giullare.',
        en: 'He comes before King Joffrey drunk, and the king wants him killed. Sansa talks the king into sparing him, and Joffrey makes him his fool.',
      },
      status: [{ episode: 11, chapter: 58, value: 'alive' }],
      affiliation: [
        {
          episode: 11,
          chapter: 58,
          value: { it: 'Corte reale', en: 'Royal court' },
        },
      ],
    },
    'hugh-of-the-vale': {
      role: {
        it: 'Cavaliere, ex scudiero di Jon Arryn',
        en: 'Knight, Jon Arryn’s former squire',
      },
      log: {
        it: 'Era lo scudiero di Jon Arryn, e ora è cavaliere. Nel torneo del Primo Cavaliere affronta Gregor Clegane, che lo uccide con la lancia.',
        en: 'He was Jon Arryn’s squire and is now a knight. In the Hand’s tourney he rides against Gregor Clegane, who kills him with his lance.',
      },
      status: [{ episode: 4, chapter: 30, value: 'deceased' }],
      affiliation: [
        {
          episode: 4,
          chapter: 30,
          value: { it: 'Corte reale', en: 'Royal court' },
        },
      ],
    },
    'tobho-mott': {
      role: { it: 'Mastro armaiolo', en: 'Master armorer' },
      log: {
        it: 'Ha la sua bottega in una via di fabbri di Approdo del Re. Eddard Stark va da lui per vedere il ragazzo che Jon Arryn era venuto a cercare, il suo apprendista Gendry.',
        en: 'He keeps his shop on a street of smiths in King’s Landing. Eddard Stark comes to see the boy Jon Arryn had come looking for, his apprentice Gendry.',
      },
      status: [{ episode: 4, chapter: 28, value: 'alive' }],
      affiliation: [
        {
          episode: 4,
          chapter: 28,
          value: {
            it: 'Popolo di Approdo del Re',
            en: 'Smallfolk of King’s Landing',
          },
        },
      ],
    },
    'mhaegen': {
      role: { it: 'Prostituta', en: 'Prostitute' },
      log: {
        it: 'Lavora in uno dei bordelli di Ditocorto. Mostra a Eddard Stark la sua bambina, figlia di re Robert.',
        en: 'She works in one of Littlefinger’s brothels. She shows Eddard Stark her baby daughter, King Robert’s child.',
      },
      status: [{ episode: 5, chapter: 36, value: 'alive' }],
      affiliation: [
        {
          episode: 5,
          chapter: 36,
          value: { it: 'Bordello di Ditocorto', en: 'Littlefinger’s brothel' },
        },
      ],
    },
    'vayon-poole': {
      role: { it: 'Intendente di Casa Stark', en: 'Steward of House Stark' },
      log: {
        it: 'Gestisce la casa di Eddard Stark. Lo segue a sud quando diventa Primo Cavaliere del Re.',
        en: 'He runs Eddard Stark’s household. He follows him south when he becomes Hand of the King.',
      },
      status: [
        { episode: 8, chapter: 17, source: 'chapter', value: 'alive' },
        // Killed in the purge of Eddard's household: on screen in "The Pointy
        // End" (episode 8), his threshold, and told in Sansa IV (chapter 52).
        { episode: 8, chapter: 52, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 8,
          chapter: 17,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'tomard': {
      role: { it: 'Guardia di Casa Stark', en: 'Guard of House Stark' },
      log: {
        it: 'È uno degli uomini della guardia di Eddard Stark ad Approdo del Re.',
        en: 'He is one of the men of Eddard Stark’s guard in King’s Landing.',
      },
      status: [
        { episode: 7, chapter: 23, value: 'alive' },
        { episode: 7, chapter: 50, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 7,
          chapter: 23,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
      ],
    },
    'harwin': {
      role: { it: 'Guardia di Casa Stark', en: 'Guard of House Stark' },
      log: {
        it: 'Cavalca con il seguito di Eddard Stark all’esecuzione del disertore. Quando i ragazzi trovano i cuccioli di meta-lupo, dice che non si possono tenere.',
        en: 'He rides with Eddard Stark’s party to the deserter’s execution. When the boys find the direwolf pups, he says they cannot be kept.',
      },
      status: [{ episode: 1, chapter: 2, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 2,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
        {
          episode: 6,
          chapter: 45,
          source: 'chapter',
          value: {
            it: 'Casa Stark, uomini di Beric Dondarrion',
            en: 'House Stark, Beric Dondarrion’s company',
          },
        },
      ],
    },
    'alyn': {
      role: [
        {
          episode: 1,
          chapter: 13,
          value: { it: 'Guardia di Casa Stark', en: 'Guard of House Stark' },
        },
        {
          episode: 6,
          chapter: 46,
          source: 'chapter',
          value: {
            it: 'Capitano della guardia del Primo Cavaliere',
            en: 'Captain of the Hand’s guard',
          },
        },
      ],
      log: {
        it: 'È una delle guardie di Eddard Stark sulla strada del Re. Una mattina lo sveglia perché il re vuole cavalcare con lui.',
        en: 'He is one of Eddard Stark’s guards on the kingsroad. One morning he wakes him because the king wants to ride with him.',
      },
      status: [{ episode: 1, chapter: 13, value: 'alive' }],
      affiliation: [
        {
          episode: 1,
          chapter: 13,
          value: { it: 'Casa Stark', en: 'House Stark' },
        },
        {
          episode: 6,
          chapter: 44,
          source: 'chapter',
          value: {
            it: 'Casa Stark, uomini di Beric Dondarrion',
            en: 'House Stark, Beric Dondarrion’s company',
          },
        },
      ],
    },
    'beric-dondarrion': {
      role: [
        {
          episode: 6,
          chapter: 28,
          value: { it: 'Lord di Blackhaven', en: 'Lord of Blackhaven' },
        },
        {
          episode: 6,
          chapter: 44,
          source: 'chapter',
          value: {
            it: 'A capo degli uomini mandati contro Gregor Clegane',
            en: 'Leader of the riders sent against Gregor Clegane',
          },
        },
      ],
      log: {
        it: 'È un lord delle Terre della Tempesta. Si trova ad Approdo del Re, alla corte del re.',
        en: 'He is a lord of the stormlands. He is in King’s Landing, at the king’s court.',
      },
      status: [{ episode: 6, chapter: 28, value: 'alive' }],
      affiliation: [
        {
          episode: 6,
          chapter: 28,
          value: { it: 'Casa Dondarrion', en: 'House Dondarrion' },
        },
      ],
    },
    'thoros-of-myr': {
      role: { it: 'Prete rosso', en: 'Red priest' },
      log: {
        it: 'È un prete rosso, arrivato nei Sette Regni da Myr, una delle città libere.',
        en: 'He is a red priest, come to the Seven Kingdoms from Myr, one of the free cities.',
      },
      status: [{ episode: 22, chapter: 30, value: 'alive' }],
      affiliation: [
        {
          episode: 22,
          chapter: 30,
          value: { it: 'Preti rossi', en: 'Red priests' },
        },
        {
          episode: 22,
          chapter: 44,
          source: 'chapter',
          value: {
            it: 'Uomini di Beric Dondarrion',
            en: 'Beric Dondarrion’s company',
          },
        },
      ],
    },
    'balon-swann': {
      role: { it: 'Cavaliere', en: 'Knight' },
      log: {
        it: 'È un cavaliere di Casa Swann, nelle Terre della Tempesta. Partecipa alla giostra nel torneo del Primo Cavaliere ad Approdo del Re.',
        en: 'He is a knight of House Swann, in the stormlands. He rides in the joust at the Hand’s tourney in King’s Landing.',
      },
      status: [{ episode: 4, chapter: 30, value: 'alive' }],
      affiliation: [
        {
          episode: 4,
          chapter: 30,
          value: { it: 'Casa Swann', en: 'House Swann' },
        },
      ],
    },
    'robar-royce': {
      role: { it: 'Cavaliere', en: 'Knight' },
      log: {
        it: 'È uno dei figli del lord di Runestone, nella Valle di Arryn. Giostra nel torneo del Primo Cavaliere ad Approdo del Re.',
        en: 'He is one of the sons of the lord of Runestone, in the Vale of Arryn. He rides in the Hand’s tourney in King’s Landing.',
      },
      status: [{ episode: 4, chapter: 30, value: 'alive' }],
      affiliation: [
        {
          episode: 4,
          chapter: 30,
          value: { it: 'Casa Royce', en: 'House Royce' },
        },
      ],
    },
    'yohn-royce': {
      role: { it: 'Lord di Runestone', en: 'Lord of Runestone' },
      log: {
        it: 'È il capo di Casa Royce. È uno dei grandi lord della Valle di Arryn, vassalli di Casa Arryn.',
        en: 'He heads House Royce. He is one of the great lords of the Vale, sworn to House Arryn.',
      },
      status: [{ episode: 38, chapter: 30, value: 'alive' }],
      affiliation: [
        {
          episode: 38,
          chapter: 30,
          value: { it: 'Casa Royce', en: 'House Royce' },
        },
      ],
    },
    'jason-mallister': {
      role: { it: 'Lord di Seagard', en: 'Lord of Seagard' },
      log: {
        it: 'Passa con i suoi uomini davanti alla locanda all’incrocio, diretto al torneo del Primo Cavaliere. Catelyn Stark lo vede passare.',
        en: 'He rides past the inn at the crossroads with his men, on his way to the Hand’s tourney. Catelyn Stark sees him go by.',
      },
      status: [{ episode: 4, chapter: 29, value: 'alive' }],
      affiliation: [
        {
          episode: 4,
          chapter: 29,
          value: { it: 'Casa Mallister', en: 'House Mallister' },
        },
      ],
    },
    'masha-heddle': {
      role: { it: 'Locandiera', en: 'Innkeeper' },
      log: {
        it: 'Gestisce la locanda all’incrocio, sulla strada del Re. Sotto il suo tetto Catelyn Stark fa arrestare Tyrion Lannister.',
        en: 'She runs the inn at the crossroads, on the kingsroad. Under her roof Catelyn Stark has Tyrion Lannister seized.',
      },
      status: [
        { episode: 4, chapter: 29, value: 'alive' },
        { episode: 8, chapter: 57, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 4,
          chapter: 29,
          value: {
            it: 'Popolo delle Terre dei Fiumi',
            en: 'Smallfolk of the riverlands',
          },
        },
      ],
    },
    'kevan-lannister': {
      role: {
        it: 'Fratello e capitano di lord Tywin',
        en: 'Lord Tywin’s brother and captain',
      },
      log: {
        it: 'Combatte al fianco del fratello Tywin nell’esercito Lannister. È con lui quando Tyrion raggiunge l’esercito con i clan delle Montagne della Luna.',
        en: 'He fights beside his brother Tywin in the Lannister army. He is with him when Tyrion reaches the army with the clans of the Mountains of the Moon.',
      },
      status: [{ episode: 8, chapter: 57, value: 'alive' }],
      affiliation: [
        {
          episode: 8,
          chapter: 57,
          value: { it: 'Casa Lannister', en: 'House Lannister' },
        },
      ],
    },
    'addam-marbrand': {
      role: {
        it: 'Cavaliere, comandante degli esploratori',
        en: 'Knight, commander of outriders',
      },
      log: {
        it: 'Serve nell’esercito di Tywin Lannister, dove guida gli esploratori a cavallo. È tra i comandanti che lord Tywin ascolta in consiglio.',
        en: 'He serves in Tywin Lannister’s army, where he leads the outriders. He is among the captains Lord Tywin hears in council.',
      },
      status: [{ episode: 10, chapter: 63, value: 'alive' }],
      affiliation: [
        {
          episode: 10,
          chapter: 63,
          value: { it: 'Casa Marbrand', en: 'House Marbrand' },
        },
      ],
    },
    'podrick-payne': {
      role: {
        it: 'Scudiero di Tyrion Lannister',
        en: 'Squire to Tyrion Lannister',
      },
      log: {
        it: 'È un ragazzo timido e di poche parole, assegnato a Tyrion Lannister come scudiero.',
        en: 'He is a shy boy of few words, given to Tyrion Lannister as his squire.',
      },
      status: [{ episode: 12, chapter: 63, value: 'alive' }],
      affiliation: [
        {
          episode: 12,
          chapter: 63,
          value: {
            it: 'Casa Payne, al servizio di Casa Lannister',
            en: 'House Payne, in House Lannister’s service',
          },
        },
      ],
    },
    'stevron-frey': {
      role: { it: 'Erede delle Torri Gemelle', en: 'Heir to the Twins' },
      log: {
        it: 'È accanto al padre alle Torri Gemelle quando Catelyn Stark viene a trattare il passaggio del fiume per l’esercito di Robb.',
        en: 'He is at his father’s side at the Twins when Catelyn Stark comes to bargain for Robb’s army to cross the river.',
      },
      status: [{ episode: 9, chapter: 60, value: 'alive' }],
      affiliation: [
        {
          episode: 9,
          chapter: 60,
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
    },
    'edmure-tully': {
      role: {
        it: 'Figlio di lord Hoster Tully',
        en: 'Son of Lord Hoster Tully',
      },
      log: {
        it: 'È il figlio di Hoster Tully e il fratello di Catelyn Stark e Lysa Arryn. Si trova a Delta delle Acque, il seggio della sua famiglia, insieme a Robb Stark e ai suoi alleati.',
        en: 'He is Hoster Tully’s son and the brother of Catelyn Stark and Lysa Arryn. He is at Riverrun, his family’s seat, together with Robb Stark and his allies.',
      },
      status: [{ episode: 23, chapter: 72, value: 'alive' }],
      affiliation: [
        {
          episode: 23,
          chapter: 72,
          value: { it: 'Casa Tully', en: 'House Tully' },
        },
      ],
    },
    'hoster-tully': {
      role: { it: 'Lord di Delta delle Acque', en: 'Lord of Riverrun' },
      log: {
        it: 'È il padre di Catelyn Stark, Lysa Arryn ed Edmure Tully. La sua casata, i Tully, governa le Terre dei Fiumi da Delta delle Acque.',
        en: 'He is the father of Catelyn Stark, Lysa Arryn and Edmure Tully. His house, the Tullys, rules the riverlands from Riverrun.',
      },
      status: [
        { episode: 23, chapter: 72, source: 'chapter', value: 'alive' },
        { episode: 23, chapter: 72, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 23,
          chapter: 72,
          value: { it: 'Casa Tully', en: 'House Tully' },
        },
      ],
    },
    'brynden-tully': {
      role: { it: 'Cavaliere di Casa Tully', en: 'Knight of House Tully' },
      log: {
        it: 'È il fratello del padre di Catelyn Stark e un cavaliere di Casa Tully. Lo chiamano il Pesce Nero.',
        en: 'He is the brother of Catelyn Stark’s father and a knight of House Tully. He is known as the Blackfish.',
      },
      status: [{ episode: 23, chapter: 35, value: 'alive' }],
      affiliation: [
        {
          episode: 23,
          chapter: 35,
          value: { it: 'Casa Tully', en: 'House Tully' },
        },
        {
          episode: 23,
          chapter: 56,
          source: 'chapter',
          value: {
            it: 'Casa Tully, esercito di Robb Stark',
            en: 'House Tully, Robb Stark’s host',
          },
        },
      ],
    },
    'hot-pie': {
      role: {
        it: 'Garzone di fornaio, recluta dei Guardiani della notte',
        en: 'Baker’s boy, Night’s Watch recruit',
      },
      log: {
        it: 'Viaggia verso la Barriera con le reclute che Yoren porta ai Guardiani della notte. Lui e Lommy prendono di mira Arya, che viaggia travestita da ragazzo.',
        en: 'He travels to the Wall with the recruits Yoren is taking to the Night’s Watch. He and Lommy pick on Arya, who is travelling disguised as a boy.',
      },
      status: [{ episode: 10, chapter: 75, value: 'alive' }],
      affiliation: [
        {
          episode: 10,
          chapter: 75,
          value: { it: 'Reclute di Yoren', en: 'Yoren’s recruits' },
        },
      ],
    },
    'lommy': {
      role: {
        it: 'Apprendista tintore, recluta dei Guardiani della notte',
        en: 'Dyer’s apprentice, Night’s Watch recruit',
      },
      log: {
        it: 'Viaggia verso la Barriera con le reclute di Yoren. Lui e Frittella prendono in giro Arya, che si fa passare per un ragazzo.',
        en: 'He travels to the Wall with Yoren’s recruits. He and Hot Pie mock Arya, who is passing as a boy.',
      },
      status: [{ episode: 10, chapter: 75, value: 'alive' }],
      affiliation: [
        {
          episode: 10,
          chapter: 75,
          value: { it: 'Reclute di Yoren', en: 'Yoren’s recruits' },
        },
      ],
    },
    'jaqen-hghar': {
      role: {
        it: 'Prigioniero, recluta dei Guardiani della notte',
        en: 'Prisoner, Night’s Watch recruit',
      },
      log: {
        it: 'Viaggia verso nord in catene con altri due prigionieri, destinati ai Guardiani della notte. Parla di sé come di “un uomo”.',
        en: 'He travels north in chains with two other prisoners, bound for the Night’s Watch. He speaks of himself as “a man”.',
      },
      status: [{ episode: 12, chapter: 79, value: 'alive' }],
      affiliation: [
        {
          episode: 12,
          chapter: 79,
          value: { it: 'Reclute di Yoren', en: 'Yoren’s recruits' },
        },
      ],
    },
    'rorge': {
      role: {
        it: 'Prigioniero, recluta dei Guardiani della notte',
        en: 'Prisoner, Night’s Watch recruit',
      },
      log: {
        it: 'Viaggia verso nord in catene con altri due prigionieri, destinati ai Guardiani della notte. Minaccia Arya dalla gabbia.',
        en: 'He travels north in chains with two other prisoners, bound for the Night’s Watch. He threatens Arya from the cage.',
      },
      status: [{ episode: 12, chapter: 79, value: 'alive' }],
      affiliation: [
        {
          episode: 12,
          chapter: 79,
          value: { it: 'Reclute di Yoren', en: 'Yoren’s recruits' },
        },
      ],
    },
    'biter': {
      role: {
        it: 'Prigioniero, recluta dei Guardiani della notte',
        en: 'Prisoner, Night’s Watch recruit',
      },
      log: {
        it: 'Viaggia verso nord in catene con altri due prigionieri, destinati ai Guardiani della notte. Non parla, e sibila contro chi si avvicina alla gabbia.',
        en: 'He travels north in chains with two other prisoners, bound for the Night’s Watch. He does not speak, and hisses at anyone who comes near the cage.',
      },
      status: [{ episode: 12, chapter: 79, value: 'alive' }],
      affiliation: [
        {
          episode: 12,
          chapter: 79,
          value: { it: 'Reclute di Yoren', en: 'Yoren’s recruits' },
        },
      ],
    },
    'will': {
      role: {
        it: 'Ranger dei Guardiani della notte',
        en: 'Ranger of the Night’s Watch',
      },
      log: {
        it: 'Segue le tracce dei bruti con ser Waymar Royce e Gared. Va avanti da solo e riferisce di un accampamento di uomini morti, ma quando i tre ci arrivano i corpi sono spariti.',
        en: 'He follows the trail of the wildlings with Ser Waymar Royce and Gared. He scouts ahead and reports a camp of dead men, but when the three reach it the bodies are gone.',
      },
      status: [{ episode: 1, chapter: 1, value: 'deceased' }],
      affiliation: [
        {
          episode: 1,
          chapter: 1,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'gared': {
      role: {
        it: 'Ranger dei Guardiani della notte',
        en: 'Ranger of the Night’s Watch',
      },
      log: {
        it: 'Segue le tracce dei bruti con ser Waymar Royce e Will. Consiglia di tornare indietro, ma ser Waymar non lo ascolta.',
        en: 'He follows the trail of the wildlings with Ser Waymar Royce and Will. He advises turning back, and Ser Waymar overrules him.',
      },
      status: [
        { episode: 1, chapter: 1, source: 'chapter', value: 'alive' },
        { episode: 1, chapter: 2, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 1,
          chapter: 1,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'waymar-royce': {
      role: {
        it: 'Ranger dei Guardiani della notte',
        en: 'Ranger of the Night’s Watch',
      },
      log: {
        it: 'Guida Will e Gared sulle tracce dei bruti. Rifiuta di tornare indietro e muore nella foresta.',
        en: 'He leads Will and Gared on the trail of the wildlings. He refuses to turn back, and he dies in the forest.',
      },
      status: [{ episode: 1, chapter: 1, value: 'deceased' }],
      affiliation: [
        {
          episode: 1,
          chapter: 1,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'grenn': {
      role: [
        {
          episode: 3,
          chapter: 20,
          value: {
            it: 'Recluta dei Guardiani della notte',
            en: 'Recruit of the Night’s Watch',
          },
        },
        {
          episode: 7,
          chapter: 49,
          value: {
            it: 'Confratello giurato dei Guardiani della notte, ranger',
            en: 'Sworn brother of the Night’s Watch, ranger',
          },
        },
      ],
      log: {
        it: 'Si addestra a Castello Nero, dove Jon Snow lo batte nel cortile. Con altre reclute affronta Jon nell’armeria.',
        en: 'He trains at Castle Black, where Jon Snow beats him in the yard. He and other recruits confront Jon in the armory.',
      },
      status: [{ episode: 3, chapter: 20, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 20,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'pypar': {
      role: [
        {
          episode: 3,
          chapter: 20,
          value: {
            it: 'Recluta dei Guardiani della notte',
            en: 'Recruit of the Night’s Watch',
          },
        },
        {
          episode: 7,
          chapter: 49,
          value: {
            it: 'Confratello giurato dei Guardiani della notte',
            en: 'Sworn brother of the Night’s Watch',
          },
        },
      ],
      log: {
        it: 'Si addestra a Castello Nero con Jon Snow.',
        en: 'He trains at Castle Black with Jon Snow.',
      },
      status: [{ episode: 3, chapter: 20, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 20,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'rast': {
      role: [
        {
          episode: 3,
          chapter: 27,
          value: {
            it: 'Recluta dei Guardiani della notte',
            en: 'Recruit of the Night’s Watch',
          },
        },
        {
          episode: 7,
          chapter: 49,
          source: 'episode',
          value: {
            it: 'Confratello giurato dei Guardiani della notte, ranger',
            en: 'Sworn brother of the Night’s Watch, ranger',
          },
        },
      ],
      log: {
        it: 'Si addestra a Castello Nero, dove combatte contro Jon Snow nel cortile.',
        en: 'He trains at Castle Black, where he fights Jon Snow in the yard.',
      },
      status: [{ episode: 3, chapter: 27, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 27,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'dareon': {
      role: [
        {
          episode: 7,
          chapter: 20,
          value: {
            it: 'Recluta dei Guardiani della notte',
            en: 'Recruit of the Night’s Watch',
          },
        },
        {
          episode: 8,
          chapter: 49,
          value: {
            it: 'Confratello giurato dei Guardiani della notte, attendente',
            en: 'Sworn brother of the Night’s Watch, steward',
          },
        },
      ],
      log: {
        it: 'Fa parte dello stesso gruppo di reclute di Jon Snow a Castello Nero.',
        en: 'He is in the same group of recruits as Jon Snow at Castle Black.',
      },
      status: [{ episode: 7, chapter: 20, value: 'alive' }],
      affiliation: [
        {
          episode: 7,
          chapter: 20,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'halder': {
      role: [
        {
          episode: 7,
          chapter: 20,
          value: {
            it: 'Recluta dei Guardiani della notte',
            en: 'Recruit of the Night’s Watch',
          },
        },
        {
          episode: 8,
          chapter: 49,
          value: {
            it: 'Confratello giurato dei Guardiani della notte, costruttore',
            en: 'Sworn brother of the Night’s Watch, builder',
          },
        },
      ],
      log: {
        it: 'Fa parte dello stesso gruppo di reclute di Jon Snow a Castello Nero.',
        en: 'He is in the same group of recruits as Jon Snow at Castle Black.',
      },
      status: [{ episode: 7, chapter: 20, value: 'alive' }],
      affiliation: [
        {
          episode: 7,
          chapter: 20,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'todder': {
      role: [
        {
          episode: 30,
          chapter: 20,
          value: {
            it: 'Membro dei Guardiani della notte',
            en: 'Member of the Night’s Watch',
          },
        },
        {
          episode: 31,
          chapter: 49,
          value: {
            it: 'Confratello giurato dei Guardiani della notte',
            en: 'Sworn brother of the Night’s Watch',
          },
        },
      ],
      log: {
        it: 'È a Castello Nero con Jon Snow.',
        en: 'He is at Castle Black with Jon Snow.',
      },
      status: [{ episode: 30, chapter: 20, value: 'alive' }],
      affiliation: [
        {
          episode: 30,
          chapter: 20,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'othell-yarwyck': {
      role: {
        it: 'Primo Costruttore dei Guardiani della notte',
        en: 'First Builder of the Night’s Watch',
      },
      log: {
        it: 'Comanda i costruttori, che tengono in piedi la Barriera e i suoi castelli. È presente quando i nuovi confratelli pronunciano il giuramento.',
        en: 'He commands the builders, who maintain the Wall and its castles. He is present when the new brothers swear their oath.',
      },
      status: [{ episode: 7, chapter: 49, value: 'alive' }],
      affiliation: [
        {
          episode: 7,
          chapter: 49,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'bowen-marsh': {
      role: {
        it: 'Capo degli attendenti dei Guardiani della notte',
        en: 'Head of the stewards of the Night’s Watch',
      },
      log: {
        it: 'Comanda gli attendenti dei Guardiani della notte a Castello Nero.',
        en: 'He commands the stewards of the Night’s Watch at Castle Black.',
      },
      status: [{ episode: 41, chapter: 22, value: 'alive' }],
      affiliation: [
        {
          episode: 41,
          chapter: 22,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'jaremy-rykker': {
      role: {
        it: 'Ufficiale dei ranger dei Guardiani della notte',
        en: 'Officer of the rangers of the Night’s Watch',
      },
      log: {
        it: 'È un cavaliere e uno degli ufficiali dei ranger a Castello Nero.',
        en: 'He is a knight and one of the officers of the rangers at Castle Black.',
      },
      status: [
        { episode: 7, chapter: 22, value: 'alive' },
        { episode: 8, chapter: 61, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 7,
          chapter: 22,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'othor': {
      role: {
        it: 'Ranger dei Guardiani della notte',
        en: 'Ranger of the Night’s Watch',
      },
      log: {
        it: 'È uno degli uomini che partono con Benjen Stark.',
        en: 'He is one of the men who ride out with Benjen Stark.',
      },
      status: [
        { episode: 8, chapter: 20, source: 'chapter', value: 'alive' },
        { episode: 8, chapter: 53, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 8,
          chapter: 20,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'jafer-flowers': {
      role: {
        it: 'Ranger dei Guardiani della notte',
        en: 'Ranger of the Night’s Watch',
      },
      log: {
        it: 'Il suo corpo viene trovato nella Foresta Stregata insieme a quello di Othor.',
        en: 'His body is found in the Haunted Forest together with Othor’s.',
      },
      status: [{ episode: 8, chapter: 53, value: 'deceased' }],
      affiliation: [
        {
          episode: 8,
          chapter: 53,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'donal-noye': {
      role: { it: 'Armaiolo di Castello Nero', en: 'Armorer of Castle Black' },
      log: {
        it: 'Ferma le reclute che vogliono picchiare Jon Snow nell’armeria. Poi spiega a Jon che lui è stato addestrato e loro no.',
        en: 'He stops the recruits who mean to beat Jon Snow in the armory. Then he tells Jon that he has had training and they have not.',
      },
      status: [{ episode: 3, chapter: 20, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 20,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'chett': {
      role: [
        {
          episode: 5,
          chapter: 42,
          value: {
            it: 'Attendente di maestro Aemon',
            en: 'Steward to Maester Aemon',
          },
        },
        {
          episode: 7,
          chapter: 49,
          value: {
            it: 'Addetto ai canili di Castello Nero',
            en: 'Kennel hand at Castle Black',
          },
        },
      ],
      log: {
        it: 'Si occupa di maestro Aemon e dei corvi a Castello Nero. Dice a Jon Snow che il lavoro degli attendenti non è adatto ai vigliacchi.',
        en: 'He looks after Maester Aemon and the ravens at Castle Black. He tells Jon Snow that a steward’s work is not fit for cowards.',
      },
      status: [{ episode: 5, chapter: 42, value: 'alive' }],
      affiliation: [
        {
          episode: 5,
          chapter: 42,
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'qotho': {
      role: { it: 'Cavaliere di sangue di Drogo', en: 'Drogo’s bloodrider' },
      log: {
        it: 'È uno dei cavalieri di sangue di khal Drogo, i guerrieri che cavalcano al suo fianco.',
        en: 'He is one of Khal Drogo’s bloodriders, the warriors who ride at his side.',
      },
      status: [
        { episode: 6, chapter: 62, value: 'alive' },
        { episode: 9, chapter: 65, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 6,
          chapter: 62,
          value: { it: 'Khalasar di Drogo', en: 'Drogo’s khalasar' },
        },
      ],
    },
    'cohollo': {
      role: { it: 'Cavaliere di sangue di Drogo', en: 'Drogo’s bloodrider' },
      log: {
        it: 'È uno dei cavalieri di sangue di khal Drogo, i guerrieri che cavalcano al suo fianco.',
        en: 'He is one of Khal Drogo’s bloodriders, the warriors who ride at his side.',
      },
      status: [
        { episode: 4, chapter: 37, value: 'alive' },
        { episode: 9, chapter: 65, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 4,
          chapter: 37,
          value: { it: 'Khalasar di Drogo', en: 'Drogo’s khalasar' },
        },
      ],
    },
    'haggo': {
      role: { it: 'Cavaliere di sangue di Drogo', en: 'Drogo’s bloodrider' },
      log: {
        it: 'È uno dei cavalieri di sangue di khal Drogo, i guerrieri che cavalcano al suo fianco. È lui a spezzare il braccio a Viserys. Offre il suo aiuto a Drogo, che lo rifiuta.',
        en: 'He is one of Khal Drogo’s bloodriders, the warriors who ride at his side. He is the one who breaks Viserys’s arm. He offers Drogo his help, and Drogo refuses it.',
      },
      status: [
        { episode: 8, chapter: 62, value: 'alive' },
        { episode: 9, chapter: 65, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 8,
          chapter: 62,
          value: { it: 'Khalasar di Drogo', en: 'Drogo’s khalasar' },
        },
      ],
    },
    'jhiqui': {
      role: { it: 'Ancella di Daenerys', en: 'Handmaiden to Daenerys' },
      log: {
        it: 'È una delle ancelle che servono Daenerys dopo le nozze con Drogo. È dothraki, come il popolo tra cui ora vive la sua khaleesi.',
        en: 'She is one of the handmaidens who serve Daenerys after her marriage to Drogo. She is Dothraki, like the people her khaleesi now lives among.',
      },
      status: [{ episode: 2, chapter: 12, value: 'alive' }],
      affiliation: [
        {
          episode: 2,
          chapter: 12,
          value: { it: 'Khalasar di Drogo', en: 'Drogo’s khalasar' },
        },
      ],
    },
    // His opening step and the show’s gate share episode 11, so the bloodrider step takes the next one, as Dareon’s does.
    'aggo': {
      role: [
        {
          episode: 11,
          chapter: 62,
          value: { it: 'Guardia di Daenerys', en: 'Daenerys’s guard' },
        },
        {
          episode: 12,
          chapter: 73,
          source: 'chapter',
          value: {
            it: 'Cavaliere di sangue di Daenerys',
            en: 'Daenerys’s bloodrider',
          },
        },
      ],
      log: {
        it: 'È uno dei guerrieri dothraki incaricati di proteggere Daenerys.',
        en: 'He is one of the Dothraki warriors charged with protecting Daenerys.',
      },
      status: [{ episode: 11, chapter: 62, value: 'alive' }],
      affiliation: [
        {
          episode: 11,
          chapter: 62,
          source: 'chapter',
          value: { it: 'Khalasar di Drogo', en: 'Drogo’s khalasar' },
        },
        {
          episode: 11,
          chapter: 73,
          value: { it: 'Khalasar di Daenerys', en: 'Daenerys’s khalasar' },
        },
      ],
    },
    'jhogo': {
      role: [
        {
          episode: 3,
          chapter: 24,
          value: { it: 'Guardia di Daenerys', en: 'Daenerys’s guard' },
        },
        {
          episode: 10,
          chapter: 73,
          value: {
            it: 'Cavaliere di sangue di Daenerys',
            en: 'Daenerys’s bloodrider',
          },
        },
      ],
      log: {
        it: 'È uno dei guerrieri dothraki incaricati di proteggere Daenerys. Quando Viserys la minaccia, gli getta la frusta al collo e lo trascina a terra.',
        en: 'He is one of the Dothraki warriors charged with protecting Daenerys. When Viserys threatens her, his whip catches Viserys around the neck and pulls him to the ground.',
      },
      status: [{ episode: 3, chapter: 24, value: 'alive' }],
      affiliation: [
        {
          episode: 3,
          chapter: 24,
          value: { it: 'Khalasar di Drogo', en: 'Drogo’s khalasar' },
        },
        {
          episode: 10,
          chapter: 73,
          value: { it: 'Khalasar di Daenerys', en: 'Daenerys’s khalasar' },
        },
      ],
    },
    'quaro': {
      role: { it: 'Guardia di Daenerys', en: 'Daenerys’s guard' },
      log: {
        it: 'È uno dei guerrieri dothraki incaricati di proteggere Daenerys. La accompagna nella città lhazareen messa a sacco dal khalasar.',
        en: 'He is one of the Dothraki warriors charged with protecting Daenerys. He rides with her through the Lhazareen town the khalasar has sacked.',
      },
      status: [
        { episode: 8, chapter: 62, value: 'alive' },
        { episode: 9, chapter: 65, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 8,
          chapter: 62,
          value: { it: 'Khalasar di Drogo', en: 'Drogo’s khalasar' },
        },
      ],
    },
    // The show kills him at his gate and the book keeps him alive, the reverse of Gared. Chapter 63 only orders the death.
    'mago': {
      role: [
        {
          episode: 8,
          chapter: 62,
          value: {
            it: 'Guerriero del khalasar di Drogo',
            en: 'Rider of Drogo’s khalasar',
          },
        },
        {
          episode: 10,
          chapter: 69,
          source: 'chapter',
          value: {
            it: 'Cavaliere di sangue di Jhaqo',
            en: 'Jhaqo’s bloodrider',
          },
        },
      ],
      log: {
        it: 'Cavalca nel khalasar di Drogo. Protesta quando Daenerys gli toglie una prigioniera lhazareen.',
        en: 'He rides in Drogo’s khalasar. He objects when Daenerys takes a Lhazareen captive away from him.',
      },
      status: [
        { episode: 8, chapter: 62, source: 'chapter', value: 'alive' },
        { episode: 8, chapter: 63, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 8,
          chapter: 62,
          value: { it: 'Khalasar di Drogo', en: 'Drogo’s khalasar' },
        },
        {
          episode: 10,
          chapter: 69,
          source: 'chapter',
          value: { it: 'Khalasar di Jhaqo', en: 'Jhaqo’s khalasar' },
        },
      ],
    },
    'eroeh': {
      role: { it: 'Ragazza lhazareen', en: 'Lhazareen girl' },
      log: {
        it: 'Daenerys la sottrae a Mago durante l’attacco alla sua città. Quando il khalasar si divide, Mago la violenta e la uccide.',
        en: 'Daenerys takes her from Mago during the attack on her town. When the khalasar breaks apart, Mago rapes and kills her.',
      },
      status: [{ episode: 10, chapter: 69, value: 'deceased' }],
      affiliation: [
        {
          episode: 10,
          chapter: 69,
          value: { it: 'Lhazareen', en: 'Lhazareen' },
        },
      ],
    },
  },
}

/**
 * The log entry of every season-1 place, by the place's id, in its own words
 * (`../placeWords`). `filedHere` names the characters first met there; where
 * the two media meet one at different places, the show's place has them
 * (owner, #853). Yoren, met on the Kingsroad, has none: roads are not filed.
 */
export const SEASON_1_PLACES: Record<
  string,
  PlaceDossier<ThronesVocabulary>
> = {
  'haunted-forest': {
    form: 'forest',
    region: 'beyond-the-wall',
    landmark: {
      it: 'Alti alberi sentinella sulla neve fresca',
      en: 'Tall sentinel trees over fresh snow',
    },
    log: {
      it: 'Tre ranger dei Guardiani della Notte seguono le tracce di un gruppo di bruti tra gli alberi. I bruti che trovano giacciono morti nella neve, e quando i ranger tornano a guardare i corpi sono spariti.',
      en: 'Three rangers of the Night’s Watch track a band of wildlings through the trees. The wildlings they find lie dead in the snow, and when the rangers come back to look, the bodies are gone.',
    },
    filedHere: [],
  },
  'winterfell': {
    form: 'castle',
    region: 'the-north',
    landmark: {
      it: 'L’albero del cuore, pallido e con un volto scolpito, nel parco degli dèi',
      en: 'The pale heart tree with a carved face in the godswood',
    },
    log: {
      it: 'Gli Stark governano il Nord da questo castello. Dentro le mura c’è il parco degli dèi, un antico bosco sacro agli antichi dèi, con un albero del cuore al centro.',
      en: 'The Starks rule the North from this castle. Inside its walls lies the godswood, an old grove sacred to the old gods, with a heart tree at its centre.',
    },
    filedHere: [
      'eddard-stark',
      'catelyn-stark',
      'robb-stark',
      'sansa-stark',
      'arya-stark',
      'bran-stark',
      'rickon-stark',
      'jon-snow',
      'benjen-stark',
      'grey-wind',
      'lady-direwolf',
      'nymeria',
      'summer-direwolf',
      'shaggydog',
      'ghost-direwolf',
      'theon-greyjoy',
      'luwin',
      'rodrik-cassel',
      'old-nan',
      'hodor',
      'mordane',
      'jory-cassel',
      'cersei-lannister',
      'jaime-lannister',
      'tyrion-lannister',
      'joffrey-baratheon',
      'myrcella-baratheon',
      'tommen-baratheon',
      'robert-baratheon',
      'sandor-clegane',
    ],
  },
  'pentos': {
    form: 'city',
    region: 'essos',
    landmark: {
      it: 'La villa del magistro sopra il mare',
      en: 'The magister’s manse above the sea',
    },
    log: {
      it: 'Due esuli di Westeros vivono qui, ospiti di un ricco magistro. Il magistro ha combinato le nozze della sorella con un signore della guerra dothraki, che in cambio darà un esercito al fratello.',
      en: 'Two exiles from Westeros live here as guests of a rich magister. He has arranged for the sister to marry a Dothraki warlord, whose horde is to win the brother an army.',
    },
    filedHere: [
      'daenerys-targaryen',
      'viserys-targaryen',
      'drogo',
      'jorah-mormont',
      'illyrio-mopatis',
    ],
  },
  'kings-landing': {
    form: 'city',
    region: 'the-crownlands',
    landmark: {
      it: 'La città sulle sue colline sopra la baia',
      en: 'The city on its hills above the bay',
    },
    log: {
      it: 'Le campane della città suonano per la morte del Primo Cavaliere del Re. Qui risiede la corte, e da qui si governa il regno.',
      en: 'The bells of the city ring for the death of the Hand of the King. The king’s court sits here, and the realm is governed from here.',
    },
    filedHere: ['gendry', 'gregor-clegane', 'loras-tyrell'],
  },
  'the-wall': {
    form: 'fortress',
    region: 'the-north',
    landmark: {
      it: 'Una parete di ghiaccio bianco e azzurro che riempie metà del cielo',
      en: 'A cliff of blue-white ice filling half the sky',
    },
    log: {
      it: 'I Guardiani della Notte sorvegliano questo muro di ghiaccio contro ciò che sta a nord, e i loro ranger escono a cavallo oltre la Barriera. Chi prende il nero giura di servire sulla Barriera per il resto della vita.',
      en: 'The Night’s Watch guards this wall of ice against what lies to the north, and its rangers ride out beyond it. A man who takes the black swears to serve on the Wall for the rest of his life.',
    },
    filedHere: [],
  },
  'winter-town': {
    form: 'town',
    region: 'the-north',
    landmark: {
      it: 'Case di legno lungo la strada sotto il castello',
      en: 'Timber houses along the road below the castle',
    },
    log: {
      it: 'Gran parte delle sue case resta vuota d’estate e si riempie quando la gente delle campagne arriva per l’inverno. Chi preferisce non dormire al castello trova qui un letto.',
      en: 'Most of its houses stand empty in summer and fill when the smallfolk come in from the countryside for the winter. Visitors who would rather not sleep in the castle find a bed here.',
    },
    filedHere: ['ros'],
  },
  'inn-at-the-crossroads': {
    form: 'inn',
    region: 'the-riverlands',
    landmark: {
      it: 'Una grande locanda di pietra a lato della strada',
      en: 'A large stone inn beside the road',
    },
    log: {
      it: 'Il corteo del re si ferma qui nel viaggio verso sud. Sulla riva del fiume, una lite tra il principe Joffrey e Arya Stark finisce con il metalupo di lei che gli morde il braccio.',
      en: 'The king’s party stops here on its way south. On the riverbank nearby, a quarrel between Prince Joffrey and Arya Stark ends with her direwolf biting his arm.',
    },
    filedHere: ['ilyn-payne', 'bronn'],
  },
  'darry': {
    form: 'castle',
    region: 'the-riverlands',
    landmark: {
      it: 'Un piccolo mastio sopra i campi lungo il fiume',
      en: 'A modest keep above the river fields',
    },
    log: {
      it: 'Il corteo del re si ferma qui mentre si cerca Arya Stark. Nella sala delle udienze il re ascolta la lite tra suo figlio e la ragazza, e pronuncia il suo giudizio.',
      en: 'The king’s party stays here while the search for Arya Stark goes on. In the audience chamber the king hears the quarrel between his son and her, and gives his judgment.',
    },
    filedHere: [],
  },
  'castle-black': {
    form: 'castle',
    region: 'the-north',
    landmark: {
      it: 'Edifici di legno e pietra raccolti sotto il ghiaccio',
      en: 'Timber and stone buildings huddled under the ice',
    },
    log: {
      it: 'Da qui si comandano i Guardiani della Notte, e qui arrivano da tutto il regno le reclute da addestrare. Molti sono ladri e condannati che hanno scelto il nero invece della pena.',
      en: 'The Night’s Watch is commanded from here, and recruits from all over the realm are brought here to be trained. Many of them are thieves and convicts who chose the black over their punishment.',
    },
    filedHere: ['jeor-mormont', 'aemon', 'samwell-tarly', 'alliser-thorne'],
  },
  'dothraki-sea': {
    form: 'plain',
    region: 'essos',
    landmark: {
      it: 'Erba alta fino all’orizzonte sotto un cielo aperto',
      en: 'Tall grass to the horizon under a wide sky',
    },
    log: {
      it: 'Il khalasar attraversa queste pianure diretto a est e la notte si accampa nelle tende. L’erba cresce tanto alta da nascondere un uomo a cavallo.',
      en: 'The khalasar crosses these plains on its way east and camps in tents at night. The grass grows tall enough to hide a rider.',
    },
    filedHere: ['irri', 'doreah', 'rakharo'],
  },
  'red-keep': {
    form: 'castle',
    region: 'the-crownlands',
    landmark: {
      it: 'Il Trono di Spade in fondo alla sala del trono',
      en: 'The Iron Throne at the end of the throne room',
    },
    log: {
      it: 'Il nuovo Primo Cavaliere del Re viene convocato al concilio ristretto appena arrivato. Lì scopre quanto la Corona sia indebitata.',
      en: 'The new Hand of the King is called to the small council as soon as he arrives. There he learns how deep in debt the crown is.',
    },
    filedHere: [
      'renly-baratheon',
      'barristan-selmy',
      'syrio-forel',
      'petyr-baelish',
      'varys',
      'pycelle',
      'janos-slynt',
    ],
  },
  'vaes-dothrak': {
    form: 'city',
    region: 'essos',
    landmark: {
      it: 'La porta formata da due enormi cavalli impennati',
      en: 'The gate of two giant rearing horses',
    },
    log: {
      it: 'La città non ha mura. Il khalasar entra da una porta formata da due enormi cavalli impennati e si accampa tra i suoi palazzi.',
      en: 'The city has no walls. The khalasar rides in under a gate made of two giant rearing horses and camps among its halls.',
    },
    filedHere: [],
  },
  'the-eyrie': {
    form: 'castle',
    region: 'the-vale',
    landmark: {
      it: 'Torri bianche su una vetta sopra le nuvole',
      en: 'White towers on a mountain peak above the clouds',
    },
    log: {
      it: 'Nessun esercito l’ha mai presa. Da qui la signora del castello governa la Valle in nome del figlio ancora bambino.',
      en: 'No army has ever taken it. The lady of the castle rules the Vale from here in the name of her young son.',
    },
    filedHere: ['lysa-arryn', 'robin-arryn'],
  },
  'wolfswood': {
    form: 'forest',
    region: 'the-north',
    landmark: {
      it: 'Pini scuri al margine della foresta',
      en: 'Dark pines at the edge of the forest',
    },
    log: {
      it: 'Bran Stark viene a cavalcare qui per la prima volta dopo la caduta, su una sella fatta apposta per lui. Tra gli alberi lo fermano dei fuorilegge che cercano di prendergli il cavallo.',
      en: 'Bran Stark rides out here for the first time since his fall, in a saddle made for him. Outlaws hiding among the trees stop him and try to take his horse.',
    },
    filedHere: ['osha'],
  },
  'kingswood': {
    form: 'forest',
    region: 'the-crownlands',
    landmark: {
      it: 'Un fitto bosco reale al di là del fiume rispetto alla città',
      en: 'Dense royal woods across the river from the city',
    },
    log: {
      it: 'Il re viene qui a caccia con il fratello e il Lord Comandante della Guardia Reale, e continua a bere mentre cavalcano.',
      en: 'The king rides here to hunt with his brother and the Lord Commander of the Kingsguard, and keeps drinking as they ride.',
    },
    filedHere: [],
  },
  'lannister-camp': {
    form: 'camp',
    region: 'the-riverlands',
    landmark: {
      it: 'Una grande tenda con il leone dei Lannister al centro dell’accampamento',
      en: 'A great tent with the Lannister lion at the heart of the camp',
    },
    log: {
      it: 'L’esercito di lord Tywin pianta le tende nelle terre dei fiumi, con la sua al centro dell’accampamento. Mercenari e gente al seguito dell’esercito vanno dietro alle truppe.',
      en: 'Lord Tywin’s army pitches its tents in the riverlands, with his own at the heart of the camp. Sellswords and camp followers trail behind the host.',
    },
    filedHere: ['tywin-lannister', 'shae'],
  },
  'lhazar': {
    form: 'town',
    region: 'essos',
    landmark: {
      it: 'Basse case di fango attorno al tempio del villaggio',
      en: 'Low mud houses around a village temple',
    },
    log: {
      it: 'Il khalasar saccheggia un villaggio della zona per prendere schiavi da vendere. Daenerys ordina ai guerrieri di smettere di violentare le prigioniere e le prende sotto la sua protezione.',
      en: 'The khalasar raids a village here for slaves to sell. Daenerys orders the warriors to stop raping the captive women and claims the women as her own.',
    },
    filedHere: ['mirri-maz-duur'],
  },
  'the-twins': {
    form: 'castle',
    region: 'the-riverlands',
    landmark: {
      it: 'Due torri identiche unite da un ponte sul fiume',
      en: 'Two identical towers joined by a bridge over the river',
    },
    log: {
      it: 'Il ponte è l’unico passaggio sul fiume per molte leghe, e il suo signore fa pagare chiunque lo voglia usare. Un esercito diretto a sud deve trattare con lui per passare.',
      en: 'The bridge is the only crossing of the river for many leagues, and its lord makes everyone pay to use it. An army marching south must bargain with him to get across.',
    },
    filedHere: ['walder-frey'],
  },
  'great-sept-of-baelor': {
    form: 'sept',
    region: 'the-crownlands',
    landmark: {
      it: 'La scalinata di marmo e la statua di Baelor davanti al tempio',
      en: 'The marble steps and the statue of Baelor before the sept',
    },
    log: {
      it: 'La folla riempie la piazza davanti al tempio quando un prigioniero viene portato a confessare sulla scalinata. Nella piazza si trova la statua di re Baelor.',
      en: 'A crowd fills the plaza before the sept when a prisoner is brought out to confess on its steps. A statue of King Baelor stands in the plaza.',
    },
    filedHere: [],
  },
  'riverrun': {
    form: 'castle',
    region: 'the-riverlands',
    landmark: {
      it: 'Un castello che sorge dall’acqua alla confluenza di due fiumi',
      en: 'A castle rising from the water where two rivers meet',
    },
    log: {
      it: 'Quando i fiumi sono in piena, il castello si trova su un’isola. Le barche entrano da una porta d’acqua sotto le mura.',
      en: 'When the rivers run high, the castle stands on an island. Boats come in through a water gate under the walls.',
    },
    filedHere: [],
  },
  'moles-town': {
    form: 'town',
    region: 'the-north',
    landmark: {
      it: 'Un gruppo di capanne lungo la strada, nella neve',
      en: 'A cluster of huts by the road in the snow',
    },
    log: {
      it: 'Il villaggio ha un bordello che gli uomini dei Guardiani della Notte frequentano nonostante i voti. La strada che scende a sud dal Castello Nero lo attraversa.',
      en: 'The village keeps a brothel that men of the Night’s Watch visit despite their vows. The road south from Castle Black runs through it.',
    },
    filedHere: [],
  },
  'bloody-gate': {
    form: 'fortress',
    region: 'the-vale',
    landmark: {
      it: 'Due torri unite da un ponte sopra uno stretto passo',
      en: 'Two towers bridged across a narrow pass',
    },
    log: {
      it: 'La strada per la Valle ci passa sotto, in una gola così stretta che pochi uomini bastano a difenderla. Il cavaliere che la custodisce interroga ogni viaggiatore prima di lasciarlo passare.',
      en: 'The road into the Vale passes beneath it, through a pass so narrow that a few men can hold it. The knight who keeps it questions every traveller before letting them through.',
    },
    filedHere: [],
  },
  'moat-cailin': {
    form: 'fortress',
    region: 'the-north',
    landmark: {
      it: 'Tre torri storte che emergono dalla palude',
      en: 'Three crooked towers rising from the swamp',
    },
    log: {
      it: 'Delle antiche fortificazioni restano in piedi solo poche torri, ma chi le tiene controlla la strada rialzata attraverso le paludi. Un esercito che sale da sud non può passare finché sono tenute contro di lui.',
      en: 'Only a few towers of the old fortress still stand, but whoever holds them commands the causeway through the swamps. An army coming up from the south cannot pass while they are held against it.',
    },
    filedHere: [],
  },
}
