import type { ThronesSaga } from './saga'

/**
 * Season 1 of the show and *A Game of Thrones*: the main cast (#852), each
 * filed where they appear and are named, in each medium. Chapters are the
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
      visual: { art: 'catelyn-stark', tint: 'wine' },
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
      visual: { art: 'jeor-mormont', tint: 'wine' },
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
      visual: { art: 'alliser-thorne', tint: 'red' },
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
      visual: { art: 'cersei-lannister', tint: 'red' },
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
      visual: { art: 'tywin-lannister', tint: 'vermilion' },
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
      visual: { art: 'gregor-clegane', tint: 'wine' },
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
      visual: { art: 'rakharo', tint: 'vermilion' },
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
      visual: { art: 'mirri-maz-duur', tint: 'wine' },
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
      status: [{ episode: 3, chapter: 23, value: 'alive' }],
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
  },
}
