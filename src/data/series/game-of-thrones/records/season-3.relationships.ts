import type { Relationship, Timeline } from '~/data/types'

/**
 * The relationships of the characters season 3 files (#1632), one cast group
 * per child, Essos first (#1650). Chapters are the site's absolute ones:
 * A Storm of Swords' chapter N (prologue 0) is 144 + N. An entry without
 * `source` reads in both media; a fact one medium alone tells sits in an
 * entry of its own. A returning character's stage-3 snapshots stay in the
 * relationships file of the module that first filed it
 * (`season-1.relationships.ts`, `season-2.relationships.ts`). The pages read
 * are in docs/content-provenance/game-of-thrones-relationships.json.
 */
const essos = {
  // Missandei, the show
  misDaenerysDeal: {
    character: 'daenerys-targaryen',
    type: { en: 'New mistress', it: 'Nuova padrona' },
    summary: {
      en: 'The woman who strikes a deal with her master for the Unsullied and asks for her too, as a gift to seal it. She asks her name and warns her that serving her means war.',
      it: 'La donna che si accorda con il suo padrone per gli Immacolati e chiede in dono anche lei, a suggello del patto. Le chiede il nome e la avverte che servirla vorrà dire la guerra.',
    },
  },
  misDaenerysAide: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen she serves on the march to Yunkai. At her order she gathers the Unsullied officers to choose a leader.',
      it: 'La regina che serve durante la marcia verso Yunkai. Per suo ordine raduna gli ufficiali degli Immacolati perché scelgano un capo.',
    },
  },
  misGreyWorm: {
    character: 'grey-worm',
    type: { en: 'Unsullied commander', it: 'Comandante degli Immacolati' },
    summary: {
      en: 'The leader the Unsullied choose. She explains to Daenerys that the masters gave every Unsullied a demeaning name, a colour and a vermin.',
      it: 'Il capo scelto dagli Immacolati. Spiega a Daenerys che i padroni davano a ogni Immacolato un nome umiliante, un colore e un parassita.',
    },
  },
  misDaenerysBath: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen she serves. In the tent outside Yunkai she tells her she speaks nineteen languages, and corrects her Dothraki.',
      it: 'La regina che serve. Nella tenda fuori Yunkai le dice che parla diciannove lingue, e le corregge il dothraki.',
    },
  },
  misMero: {
    character: 'mero',
    type: { en: 'Sellsword', it: 'Mercenario' },
    summary: {
      en: 'The captain of the Second Sons, who gropes her at the parley with Daenerys. That night Daario brings his head.',
      it: 'Il capitano dei Secondi Figli, che alla trattativa con Daenerys allunga le mani su di lei. Quella notte Daario ne porta la testa.',
    },
  },
  misDaario: {
    character: 'daario-naharis',
    type: { en: 'Intruder', it: 'Intruso' },
    summary: {
      en: 'A sellsword who slips into the tent dressed as an Unsullied and holds a knife to her throat, then lets her go and swears himself to Daenerys.',
      it: 'Un mercenario che entra nella tenda vestito da Immacolato e le punta un coltello alla gola, poi la lascia andare e giura fedeltà a Daenerys.',
    },
  },
  // Missandei, the books
  misDaenerysFreed: {
    character: 'daenerys-targaryen',
    type: { en: 'Liberator', it: 'Liberatrice' },
    summary: {
      en: 'The queen who buys the Unsullied from her master. She has understood every word of his Valyrian, and she frees her and takes her into her service.',
      it: 'La regina che compra gli Immacolati dal suo padrone. Ha capito ogni parola del suo valyriano, e la libera e la prende al suo servizio.',
    },
  },
  misKraznys: {
    character: 'kraznys-mo-nakloz',
    type: { en: 'Former master', it: 'Ex padrone' },
    summary: {
      en: 'The slaver she interpreted for, who insulted Daenerys through her. At the plaza Daenerys turns her dragon on him and he burns.',
      it: 'Lo schiavista per cui faceva da interprete, che tramite lei insultava Daenerys. Nella piazza Daenerys gli scatena contro il suo drago, e lui brucia.',
    },
  },

  // Kraznys mo Nakloz (books only)
  kraDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Buyer', it: 'Acquirente' },
    summary: {
      en: 'The young queen he insults in Valyrian, sure she cannot follow. She buys every Unsullied for one of her dragons, then sets it on him at the plaza.',
      it: 'La giovane regina che insulta in valyriano, convinto che non capisca. Compra tutti gli Immacolati in cambio di uno dei suoi draghi, poi nella piazza glielo scatena contro.',
    },
  },
  kraMissandei: {
    character: 'missandei',
    type: { en: 'Slave interpreter', it: 'Schiava interprete' },
    summary: {
      en: 'The slave girl who puts his words into the Common Tongue for Daenerys. Daenerys frees her and takes her into her service.',
      it: 'La giovane schiava che traduce le sue parole nella lingua comune per Daenerys. Daenerys la libera e la prende al suo servizio.',
    },
  },
  kraDrogon: {
    character: 'drogon',
    type: { en: 'Dragon he is sold', it: 'Drago ricevuto' },
    summary: {
      en: 'The black dragon Daenerys gives him for the Unsullied. It will not obey him, and at her word it burns him.',
      it: 'Il drago nero che Daenerys gli cede per gli Immacolati. Non gli obbedisce e, a un ordine di lei, lo brucia.',
    },
  },

  // Grey Worm, the show
  greDaenerysName: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen who freed the Unsullied and asks them to choose a leader: him. She lets them take new names, and he keeps his own, the one he had the day she set him free.',
      it: 'La regina che ha liberato gli Immacolati e chiede loro di scegliersi un capo: lui. Lascia che prendano nomi nuovi, e lui tiene il suo, quello che aveva il giorno in cui lei lo ha liberato.',
    },
  },
  greMissandei: {
    character: 'missandei',
    type: { en: 'Interpreter', it: 'Interprete' },
    summary: {
      en: 'Daenerys’s interpreter, who gathers the officers for her and explains to her where the Unsullied’s names come from.',
      it: 'L’interprete di Daenerys, che raduna gli ufficiali per lei e le spiega da dove vengono i nomi degli Immacolati.',
    },
  },
  greDaenerysTrust: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen he serves. Before the attack on Yunkai she asks what he thinks of Daario, telling him he is a leader now.',
      it: 'La regina che serve. Prima dell’attacco a Yunkai gli chiede cosa pensa di Daario, ricordandogli che ora è un capo.',
    },
  },
  greDaario: {
    character: 'daario-naharis',
    type: { en: 'Comrade in arms', it: 'Compagno d’armi' },
    summary: {
      en: 'The sellsword who has come over to Daenerys. Asked, Grey Worm says he trusts him, and the two go into Yunkai with Jorah by night.',
      it: 'Il mercenario passato dalla parte di Daenerys. Interpellato, Verme Grigio dice di fidarsi di lui, e i due entrano di notte a Yunkai con Jorah.',
    },
  },
  greJorah: {
    character: 'jorah-mormont',
    type: { en: 'Comrade in arms', it: 'Compagno d’armi' },
    summary: {
      en: 'The queen’s knight, who goes into Yunkai with him and Daario and comes back with him to tell her the city has fallen.',
      it: 'Il cavaliere della regina, che entra a Yunkai con lui e Daario e torna con lui ad annunciarle che la città è caduta.',
    },
  },
  // Grey Worm, the books
  greDaenerysFreed: {
    character: 'daenerys-targaryen',
    type: { en: 'Liberator', it: 'Liberatrice' },
    summary: {
      en: 'The queen who freed the Unsullied. They choose him as one of their officers, and when she ends the masters’ custom of a new slave name every day, he keeps the one he had the day she freed him.',
      it: 'La regina che ha liberato gli Immacolati. Loro lo scelgono come uno dei loro ufficiali, e quando lei abolisce l’usanza dei padroni di un nuovo nome da schiavo ogni giorno, lui tiene quello che aveva il giorno in cui lei lo ha liberato.',
    },
  },
  greJorahTeacher: {
    character: 'jorah-mormont',
    type: { en: 'Teacher', it: 'Maestro' },
    summary: {
      en: 'The queen’s knight, who teaches him how to command.',
      it: 'Il cavaliere della regina, che gli insegna a comandare.',
    },
  },

  // Grazdan mo Eraz, the show (as Razdal mo Eraz)
  graDaenerysShow: {
    character: 'daenerys-targaryen',
    type: { en: 'Invader', it: 'Invasora' },
    summary: {
      en: 'The queen camped outside Yunkai. He offers her gold and ships to leave the city alone, and she demands every slave freed. When he threatens that Yunkai’s friends will enslave her, her dragons drive him off and she keeps the gold.',
      it: 'La regina accampata fuori Yunkai. Lui le offre oro e navi perché lasci in pace la città, e lei pretende che ogni schiavo sia liberato. Quando lui minaccia che gli amici di Yunkai la renderanno schiava, i draghi di lei lo cacciano e lei si tiene l’oro.',
    },
  },
  graMissandei: {
    character: 'missandei',
    type: { en: 'Interpreter', it: 'Interprete' },
    summary: {
      en: 'Daenerys’s interpreter, who announces him in the queen’s camp.',
      it: 'L’interprete di Daenerys, che lo annuncia nell’accampamento della regina.',
    },
  },
  // Grazdan mo Eraz, the books
  graDaenerysBooks: {
    character: 'daenerys-targaryen',
    type: { en: 'Invader', it: 'Invasora' },
    summary: {
      en: 'The queen camped outside Yunkai. He brings her gold to spare the city and threatens to sell her as a bedslave. She sends him back with his gold and a warning that she will attack in three days.',
      it: 'La regina accampata fuori Yunkai. Lui le porta oro perché risparmi la città e minaccia di venderla come schiava di letto. Lei lo rimanda indietro con il suo oro e con l’avvertimento che attaccherà fra tre giorni.',
    },
  },
  graDrogon: {
    character: 'drogon',
    type: { en: 'Dragon', it: 'Drago' },
    summary: {
      en: 'The black dragon that sets his tokar alight at the queen’s word.',
      it: 'Il drago nero che, a un ordine della regina, gli dà fuoco al tokar.',
    },
  },

  // Mero, the show
  merDaenerysShow: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen he is paid to fight', it: 'Regina da combattere' },
    summary: {
      en: 'The queen Yunkai hired his company to fight. At the parley he mocks her, refuses to change sides and leaves with her wine. Back in camp he plans to have her killed.',
      it: 'La regina che Yunkai ha pagato la sua compagnia per combattere. Alla trattativa la deride, rifiuta di cambiare parte e se ne va con il suo vino. Tornato al campo, progetta di farla uccidere.',
    },
  },
  merDaario: {
    character: 'daario-naharis',
    type: { en: 'Lieutenant', it: 'Luogotenente' },
    summary: {
      en: 'His lieutenant, who draws the coin that sends him to kill Daenerys. Instead he kills Mero and takes his head to her.',
      it: 'Il suo luogotenente, che pesca la moneta che lo manda a uccidere Daenerys. Invece uccide Mero e porta a lei la sua testa.',
    },
  },
  merMissandei: {
    character: 'missandei',
    type: { en: 'Interpreter', it: 'Interprete' },
    summary: {
      en: 'Daenerys’s interpreter, whom he gropes at the parley.',
      it: 'L’interprete di Daenerys, su cui allunga le mani alla trattativa.',
    },
  },
  merGreyWorm: {
    character: 'grey-worm',
    type: { en: 'Unsullied commander', it: 'Comandante degli Immacolati' },
    summary: {
      en: 'The commander of the Unsullied, who offers to cut out his tongue for his insults.',
      it: 'Il comandante degli Immacolati, che per i suoi insulti si offre di tagliargli la lingua.',
    },
  },
  // Mero, the books
  merDaenerysBooks: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen he is paid to fight', it: 'Regina da combattere' },
    summary: {
      en: 'The queen Yunkai hired his company to fight. He laughs at her offer to change sides but takes a wagonload of wine for his men, who are too drunk to fight when she attacks that night.',
      it: 'La regina che Yunkai ha pagato la sua compagnia per combattere. Lui ride della sua offerta di cambiare parte ma accetta un carro di vino per i suoi uomini, che sono troppo ubriachi per combattere quando lei attacca quella notte.',
    },
  },

  // Daario Naharis, the show
  daaDaenerysOath: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen his company was hired to fight. At the parley he sees through her bluff about her numbers. Sent to kill her, he brings her his captains’ heads and swears her his sword and his heart.',
      it: 'La regina che la sua compagnia è stata pagata per combattere. Alla trattativa smaschera il suo bluff sul numero dei soldati. Mandato a ucciderla, le porta le teste dei suoi capitani e le giura la sua spada e il suo cuore.',
    },
  },
  daaMero: {
    character: 'mero',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'The captain of the Second Sons, who has him draw the coin to kill Daenerys. Daario kills him and takes his head to her.',
      it: 'Il capitano dei Secondi Figli, che gli fa pescare la moneta per uccidere Daenerys. Daario lo uccide e porta a lei la sua testa.',
    },
  },
  daaMissandei: {
    character: 'missandei',
    type: { en: 'Hostage', it: 'Ostaggio' },
    summary: {
      en: 'Daenerys’s interpreter. When he slips into the queen’s tent he holds a knife to her throat, then lets her go.',
      it: 'L’interprete di Daenerys. Quando entra di nascosto nella tenda della regina le punta un coltello alla gola, poi la lascia andare.',
    },
  },
  daaDaenerysYunkai: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen he now serves. He shows her a back gate into Yunkai, goes in by night, and brings her the city’s flag.',
      it: 'La regina che ora serve. Le indica una porta secondaria per entrare a Yunkai, ci entra di notte e le porta la bandiera della città.',
    },
  },
  daaJorah: {
    character: 'jorah-mormont',
    type: { en: 'Wary ally', it: 'Alleato diffidente' },
    summary: {
      en: 'The queen’s knight, who doubts his plan and his loyalty, and goes into Yunkai with him.',
      it: 'Il cavaliere della regina, che dubita del suo piano e della sua lealtà, ed entra a Yunkai con lui.',
    },
  },
  daaGreyWorm: {
    character: 'grey-worm',
    type: { en: 'Comrade in arms', it: 'Compagno d’armi' },
    summary: {
      en: 'The Unsullied commander, who tells Daenerys he trusts him and fights his way into Yunkai at his side.',
      it: 'Il comandante degli Immacolati, che dice a Daenerys di fidarsi di lui e si apre la strada dentro Yunkai al suo fianco.',
    },
  },
  daaMeroDead: {
    character: 'mero',
    type: { en: 'Captain', it: 'Capitano' },
    summary: {
      en: 'The captain of the Second Sons, who sent him to kill Daenerys. Daario killed him and took his head to her.',
      it: 'Il capitano dei Secondi Figli, che lo aveva mandato a uccidere Daenerys. Daario lo ha ucciso e ha portato a lei la sua testa.',
    },
  },
  // Daario Naharis, the books
  daaDaenerysStormcrows: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen his company was hired to fight. He smiles at her as the captains leave the parley, then brings her the other two captains’ heads and swears his company to her.',
      it: 'La regina che la sua compagnia è stata pagata per combattere. Le sorride mentre i capitani lasciano la trattativa, poi le porta le teste degli altri due capitani e le giura la fedeltà della sua compagnia.',
    },
  },
  daaPrendahl: {
    character: 'prendahl-na-ghezn',
    type: { en: 'Fellow captain', it: 'Altro capitano' },
    summary: {
      en: 'Another captain of the Stormcrows, who turns down Daenerys’s offer. Daario kills him and takes his head to her.',
      it: 'Un altro capitano dei Corvi della Tempesta, che respinge l’offerta di Daenerys. Daario lo uccide e porta a lei la sua testa.',
    },
  },
  daaJorahWary: {
    character: 'jorah-mormont',
    type: { en: 'Wary knight', it: 'Cavaliere diffidente' },
    summary: {
      en: 'The queen’s knight, who warns her not to trust him.',
      it: 'Il cavaliere della regina, che la avverte di non fidarsi di lui.',
    },
  },

  // Prendahl na Ghezn (books only)
  preDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen he is paid to fight', it: 'Regina da combattere' },
    summary: {
      en: 'The queen Yunkai hired the Stormcrows to fight. At the parley he turns down her offer to change sides.',
      it: 'La regina che Yunkai ha pagato i Corvi della Tempesta per combattere. Alla trattativa respinge la sua offerta di cambiare parte.',
    },
  },
  preDaario: {
    character: 'daario-naharis',
    type: { en: 'Fellow captain', it: 'Altro capitano' },
    summary: {
      en: 'Another captain of the Stormcrows, who kills him and takes his head to Daenerys.',
      it: 'Un altro capitano dei Corvi della Tempesta, che lo uccide e porta la sua testa a Daenerys.',
    },
  },
} satisfies Record<string, Relationship>

export const season3Relationships = {
  // Essos (#1650). The show: "Walk of Punishment" (episode 23), "Kissed by
  // Fire" (25) and "Second Sons" (28). The books: Daenerys III (chapter
  // 171).
  'missandei': [
    {
      episode: 23,
      chapter: 171,
      source: 'episode',
      value: [essos.misDaenerysDeal],
    },
    {
      episode: 25,
      chapter: 186,
      source: 'episode',
      value: [essos.misDaenerysAide, essos.misGreyWorm],
    },
    {
      episode: 28,
      chapter: 186,
      source: 'episode',
      value: [
        essos.misDaenerysBath,
        essos.misDaario,
        essos.misMero,
        essos.misGreyWorm,
      ],
    },
    {
      episode: 23,
      chapter: 171,
      source: 'chapter',
      value: [essos.misDaenerysFreed, essos.misKraznys],
    },
  ],
  // Books only: Daenerys II and III (chapters 167 and 171), told at his
  // gate, where he dies.
  'kraznys-mo-nakloz': [
    {
      episode: 24,
      chapter: 171,
      source: 'chapter',
      value: [essos.kraDaenerys, essos.kraMissandei, essos.kraDrogon],
    },
  ],
  // The show: "Kissed by Fire" (25) and "The Rains of Castamere" (29). The
  // books: Daenerys IV (186).
  'grey-worm': [
    {
      episode: 25,
      chapter: 186,
      source: 'episode',
      value: [essos.greDaenerysName, essos.greMissandei],
    },
    {
      episode: 29,
      chapter: 186,
      source: 'episode',
      value: [
        essos.greDaenerysTrust,
        essos.greDaario,
        essos.greJorah,
        essos.greMissandei,
      ],
    },
    {
      episode: 25,
      chapter: 186,
      source: 'chapter',
      value: [essos.greDaenerysFreed, essos.greJorahTeacher],
    },
  ],
  // The show keeps the gold and gives Drogon no name in this stage; the
  // books' envoy takes his gold back after Drogon burns his tokar (Game of
  // Thrones Wiki, Razdal mo Eraz, "In the books").
  'grazdan-mo-eraz': [
    {
      episode: 27,
      chapter: 186,
      source: 'episode',
      value: [essos.graDaenerysShow, essos.graMissandei],
    },
    {
      episode: 27,
      chapter: 186,
      source: 'chapter',
      value: [essos.graDaenerysBooks, essos.graDrogon],
    },
  ],
  // The show's Daario kills him in "Second Sons" (28), the episode that
  // names him; the books' Mero lives through the stage.
  'mero': [
    {
      episode: 28,
      chapter: 186,
      source: 'episode',
      value: [
        essos.merDaenerysShow,
        essos.merDaario,
        essos.merMissandei,
        essos.merGreyWorm,
      ],
    },
    {
      episode: 28,
      chapter: 186,
      source: 'chapter',
      value: [essos.merDaenerysBooks],
    },
  ],
  // The show: an officer of the Second Sons, "Second Sons" (28) and "The
  // Rains of Castamere" (29). The books: a captain of the Stormcrows,
  // Daenerys IV (186).
  'daario-naharis': [
    {
      episode: 28,
      chapter: 186,
      source: 'episode',
      value: [essos.daaDaenerysOath, essos.daaMero, essos.daaMissandei],
    },
    {
      episode: 29,
      chapter: 186,
      source: 'episode',
      value: [
        essos.daaDaenerysYunkai,
        essos.daaJorah,
        essos.daaGreyWorm,
        essos.daaMeroDead,
      ],
    },
    {
      episode: 28,
      chapter: 186,
      source: 'chapter',
      value: [
        essos.daaDaenerysStormcrows,
        essos.daaPrendahl,
        essos.daaJorahWary,
      ],
    },
  ],
  // Books only: Daenerys IV (186), told at his gate, where he dies.
  'prendahl-na-ghezn': [
    {
      episode: 28,
      chapter: 186,
      source: 'chapter',
      value: [essos.preDaenerys, essos.preDaario],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
