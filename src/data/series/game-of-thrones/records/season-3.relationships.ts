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
      en: 'The queen she serves on the march from Astapor. At her order she gathers the Unsullied officers to choose a leader.',
      it: 'La regina che serve durante la marcia da Astapor. Per suo ordine raduna gli ufficiali degli Immacolati perché scelgano un capo.',
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
      en: 'The captain of the Second Sons, who groped her at the parley with Daenerys. That night Daario brought his head.',
      it: 'Il capitano dei Secondi Figli, che alla trattativa con Daenerys ha allungato le mani su Missandei. Quella notte Daario ne ha portato la testa.',
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
      en: 'The slaver she interpreted for, who insulted Daenerys through her. At the plaza Daenerys turned her dragon on him and he burned.',
      it: 'Lo schiavista per cui faceva da interprete, che tramite lei insultava Daenerys. Nella piazza Daenerys gli ha scatenato contro il suo drago, e lui è bruciato.',
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
      en: 'The captain of the Second Sons, who had him draw the coin to kill Daenerys. Daario killed him and took his head to her.',
      it: 'Il capitano dei Secondi Figli, che gli ha fatto pescare la moneta per uccidere Daenerys. Daario lo ha ucciso e ha portato a lei la sua testa.',
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
      en: 'Another captain of the Stormcrows, who turned down Daenerys’s offer. Daario killed him and took his head to her.',
      it: 'Un altro capitano dei Corvi della Tempesta, che ha respinto l’offerta di Daenerys. Daario lo ha ucciso e ha portato a lei la sua testa.',
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

/**
 * Robb's war and the Riverlands (#1653): the cards of the group's new
 * characters. The show: "Walk of Punishment" (episode 23), "Kissed by Fire"
 * (25), "The Climb" (26) and "The Rains of Castamere" (29). The books:
 * Catelyn II to VII (chapters 158, 164, 179, 189, 193 and 195).
 */
const riverlands = {
  // Jeyne Westerling (books only)
  jeyRobb: {
    character: 'robb-stark',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'The king she nursed at the Crag after he was wounded storming it. The night he heard his brothers had been killed she comforted him, and he married her the next morning.',
      it: 'Il re che ha curato al Crag, dopo che era stato ferito nell’assalto al castello. La notte in cui lui ha saputo della morte dei fratelli lei lo ha consolato, e la mattina dopo Robb l’ha sposata.',
    },
  },
  jeyCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Mother-in-law', it: 'Suocera' },
    summary: {
      en: 'Robb’s mother. At Riverrun Robb presents Jeyne to her as his lady wife.',
      it: 'La madre di Robb. A Delta delle Acque Robb le presenta Jeyne come sua moglie.',
    },
  },
  jeyGreyWind: {
    character: 'grey-wind',
    type: { en: 'Wolf she fears', it: 'Lupo che teme' },
    summary: {
      en: 'Robb’s direwolf. She is afraid of him, so Robb keeps him away from her side.',
      it: 'Il metalupo di Robb. Lei ne ha paura, e per questo Robb lo tiene lontano da lei.',
    },
  },
  jeyRolph: {
    character: 'rolph-spicer',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'Her mother’s brother, who came over to Robb with the family to escape the Lannisters’ revenge.',
      it: 'Il fratello di sua madre, passato con la famiglia dalla parte di Robb per sfuggire alla vendetta dei Lannister.',
    },
  },
  jeyRaynald: {
    character: 'raynald-westerling',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who came to Riverrun with the family when she married Robb.',
      it: 'Suo fratello, venuto a Delta delle Acque con la famiglia quando lei ha sposato Robb.',
    },
  },
  jeyCatelynAdvice: {
    character: 'catelyn-stark',
    type: { en: 'Mother-in-law', it: 'Suocera' },
    summary: {
      en: 'Robb’s mother. The night Robb beheads Lord Karstark, Jeyne goes to her to ask how to comfort him, and promises she will give him children soon.',
      it: 'La madre di Robb. La notte in cui Robb decapita lord Karstark, Jeyne va da lei a chiederle come consolarlo, e le promette che presto gli darà dei figli.',
    },
  },
  jeyRobbLeaves: {
    character: 'robb-stark',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'The king she married. He leaves her at Riverrun when he rides to the Twins for Edmure’s wedding.',
      it: 'Il re che ha sposato. La lascia a Delta delle Acque quando parte per le Torri Gemelle, alle nozze di Edmure.',
    },
  },
  jeyRaynaldBanner: {
    character: 'raynald-westerling',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, the one of her family who rides with Robb to the Twins.',
      it: 'Suo fratello, l’unico della famiglia che segue Robb alle Torri Gemelle.',
    },
  },
  jeyRolphErrand: {
    character: 'rolph-spicer',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'Her uncle, whom Robb sends to the Golden Tooth to hand over a Lannister prisoner in an exchange of captives.',
      it: 'Suo zio, che Robb manda al Dente d’Oro a consegnare un prigioniero Lannister in uno scambio di ostaggi.',
    },
  },
  jeyGreyWindPast: {
    character: 'grey-wind',
    type: { en: 'Wolf she fears', it: 'Lupo che teme' },
    summary: {
      en: 'Robb’s direwolf. She was afraid of him, so Robb kept him away from her side.',
      it: 'Il metalupo di Robb. Lei ne aveva paura, e per questo Robb lo teneva lontano da lei.',
    },
  },
  jeyRaynaldPast: {
    character: 'raynald-westerling',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, the one of her family who rode with Robb to the Twins.',
      it: 'Suo fratello, l’unico della famiglia che ha seguito Robb alle Torri Gemelle.',
    },
  },
  jeyRolphPast: {
    character: 'rolph-spicer',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'Her uncle, whom Robb sent to the Golden Tooth to hand over a Lannister prisoner in an exchange of captives.',
      it: 'Suo zio, che Robb ha mandato al Dente d’Oro a consegnare un prigioniero Lannister in uno scambio di ostaggi.',
    },
  },
  rolJeynePast: {
    character: 'jeyne-westerling',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His sister’s daughter, whom Robb married. The family left the Lannisters’ side with her.',
      it: 'La figlia di sua sorella, che Robb aveva sposato. La famiglia ha lasciato i Lannister insieme a lei.',
    },
  },
  rayGreyWindPast: {
    character: 'grey-wind',
    type: { en: 'Wolf in his keeping', it: 'Lupo affidato a lui' },
    summary: {
      en: 'Robb’s direwolf, which would not go through the gatehouse of the Twins. Robb left Raynald outside with him.',
      it: 'Il metalupo di Robb, che non voleva passare dal corpo di guardia delle Torri Gemelle. Robb aveva lasciato Raynald fuori con lui.',
    },
  },
  lotGreyWindPast: {
    character: 'grey-wind',
    type: { en: 'Wolf at the gate', it: 'Lupo alla porta' },
    summary: {
      en: 'Robb’s direwolf, which would not go through the gatehouse. Lothar offered to hand him to the master of hounds; Robb left him outside with Ser Raynald.',
      it: 'Il metalupo di Robb, che non voleva passare dal corpo di guardia. Lothar si era offerto di affidarlo al maestro dei cani; Robb lo aveva lasciato fuori con ser Raynald.',
    },
  },
  jeyRobbDead: {
    character: 'robb-stark',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'The king she married, who left her at Riverrun to ride to the Twins for Edmure’s wedding. He was killed at the wedding feast.',
      it: 'Il re che aveva sposato, che l’aveva lasciata a Delta delle Acque per andare alle nozze di Edmure alle Torri Gemelle. Alla festa nuziale è stato ucciso.',
    },
  },
  jeyCatelynDead: {
    character: 'catelyn-stark',
    type: { en: 'Mother-in-law', it: 'Suocera' },
    summary: {
      en: 'Robb’s mother, to whom Jeyne went for advice and promised children. She was killed with Robb at the Twins.',
      it: 'La madre di Robb, a cui Jeyne aveva chiesto consiglio promettendole dei nipoti. È stata uccisa con Robb alle Torri Gemelle.',
    },
  },

  // Rolph Spicer (books only)
  rolJeyne: {
    character: 'jeyne-westerling',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His sister’s daughter, whom Robb has married. The family left the Lannisters’ side with her.',
      it: 'La figlia di sua sorella, che Robb ha sposato. La famiglia ha lasciato i Lannister insieme a lei.',
    },
  },
  rolRobb: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who married his niece. At his mother’s urging Robb finds him an errand that takes him away from court.',
      it: 'Il re che ha sposato sua nipote. Su richiesta della madre, Robb gli trova un incarico che lo allontani dalla corte.',
    },
  },
  rolGreyWind: {
    character: 'grey-wind',
    type: { en: 'Wolf that growls at him', it: 'Lupo che gli ringhia contro' },
    summary: {
      en: 'Robb’s direwolf, which growls whenever Rolph comes near.',
      it: 'Il metalupo di Robb, che ringhia ogni volta che Rolph gli si avvicina.',
    },
  },
  rolCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'King’s mother', it: 'Madre del re' },
    summary: {
      en: 'Robb’s mother. She dislikes the way the wolf growls at Rolph, and persuades Robb to send him away.',
      it: 'La madre di Robb. Non le piace che il lupo ringhi a Rolph, e convince Robb a mandarlo via.',
    },
  },
  rolRobbErrand: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who married his niece. He sends Rolph to the Golden Tooth to hand over a Lannister prisoner in an exchange of captives.',
      it: 'Il re che ha sposato sua nipote. Manda Rolph al Dente d’Oro a consegnare un prigioniero Lannister in uno scambio di ostaggi.',
    },
  },
  rolRobbDead: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who married his niece and sent Rolph to the Golden Tooth with a Lannister prisoner. He was killed at the Twins.',
      it: 'Il re che aveva sposato sua nipote e mandato Rolph al Dente d’Oro con un prigioniero Lannister. È stato ucciso alle Torri Gemelle.',
    },
  },
  rolCatelynDead: {
    character: 'catelyn-stark',
    type: { en: 'King’s mother', it: 'Madre del re' },
    summary: {
      en: 'Robb’s mother, who had Robb send Rolph away from court. She was killed with her son at the Twins.',
      it: 'La madre di Robb, che aveva fatto allontanare Rolph dalla corte. È stata uccisa con il figlio alle Torri Gemelle.',
    },
  },

  // Raynald Westerling (books only)
  rayJeyne: {
    character: 'jeyne-westerling',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, whom Robb has married. Robb introduces the family to his mother at Riverrun.',
      it: 'Sua sorella, che Robb ha sposato. A Delta delle Acque Robb presenta la famiglia a sua madre.',
    },
  },
  rayRobb: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king his sister has married.',
      it: 'Il re che ha sposato sua sorella.',
    },
  },
  rayCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'King’s mother', it: 'Madre del re' },
    summary: {
      en: 'Robb’s mother, to whom the king introduces the family.',
      it: 'La madre di Robb, a cui il re presenta la famiglia.',
    },
  },
  rayRobbBanner: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'His sister’s husband. Raynald bears his banner on the road to the Twins.',
      it: 'Il marito di sua sorella. Raynald ne porta lo stendardo sulla strada per le Torri Gemelle.',
    },
  },
  rayGreyWind: {
    character: 'grey-wind',
    type: { en: 'Wolf in his keeping', it: 'Lupo affidato a lui' },
    summary: {
      en: 'Robb’s direwolf, which will not go through the gatehouse of the Twins. Robb leaves Raynald outside with him.',
      it: 'Il metalupo di Robb, che non vuole passare dal corpo di guardia delle Torri Gemelle. Robb lascia Raynald fuori con lui.',
    },
  },
  rayJeyneHome: {
    character: 'jeyne-westerling',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, left behind at Riverrun. The Freys are angry that she has not come.',
      it: 'Sua sorella, rimasta a Delta delle Acque. I Frey sono offesi perché non è venuta.',
    },
  },
  rayRobbDead: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'His sister’s husband, whose banner Raynald bore to the Twins. He was killed at the wedding feast.',
      it: 'Il marito di sua sorella, di cui Raynald aveva portato lo stendardo alle Torri Gemelle. È stato ucciso alla festa nuziale.',
    },
  },
  rayCatelynDead: {
    character: 'catelyn-stark',
    type: { en: 'King’s mother', it: 'Madre del re' },
    summary: {
      en: 'Robb’s mother, who rode beside him to the Twins. She was killed with him there.',
      it: 'La madre di Robb, che aveva cavalcato al suo fianco fino alle Torri Gemelle. È stata uccisa lì insieme a lui.',
    },
  },

  // Willem Lannister, the show
  wilTalisa: {
    character: 'talisa-maegyr',
    type: { en: 'Healer', it: 'Guaritrice' },
    summary: {
      en: 'Robb’s queen, who comes down to the cells to dress the prisoners’ wounds. Asked if Robb eats his enemies, she teases that he spares children except at the full moon.',
      it: 'La regina di Robb, che scende nelle celle a medicare i prigionieri. Quando le chiedono se Robb divori i nemici, scherza che risparmia i bambini, tranne con la luna piena.',
    },
  },
  wilEdmure: {
    character: 'edmure-tully',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The lord whose men took him prisoner in battle. Edmure holds him at Riverrun as a hostage.',
      it: 'Il lord i cui uomini lo hanno fatto prigioniero in battaglia. Edmure lo tiene a Delta delle Acque come ostaggio.',
    },
  },
  wilMartyn: {
    character: 'martyn-lannister',
    type: { en: 'Fellow prisoner', it: 'Compagno di prigionia' },
    summary: {
      en: 'The other Lannister squire held in the cell with him. Martyn is the one who asks about Robb and the wolf.',
      it: 'L’altro scudiero Lannister rinchiuso nella cella con lui. È Martyn a chiedere di Robb e del lupo.',
    },
  },
  wilRobb: {
    character: 'robb-stark',
    type: { en: 'Enemy king', it: 'Re nemico' },
    summary: {
      en: 'The king in the North, of whom the Lannister men tell tales: that he turns into a wolf and eats his enemies.',
      it: 'Il re del Nord, di cui gli uomini dei Lannister raccontano che si trasforma in lupo e divora i nemici.',
    },
  },
  wilRickard: {
    character: 'rickard-karstark',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'The northern lord who broke into the cell with his men. Willem asked whether it was a rescue, and the Karstark men killed him.',
      it: 'Il lord del Nord che ha fatto irruzione nella cella con i suoi uomini. Willem ha chiesto se fosse un salvataggio, e gli uomini di Karstark lo hanno ucciso.',
    },
  },
  wilMartynDead: {
    character: 'martyn-lannister',
    type: { en: 'Fellow prisoner', it: 'Compagno di prigionia' },
    summary: {
      en: 'The other Lannister squire in his cell. He begged for his life, and Lord Karstark stabbed him.',
      it: 'L’altro scudiero Lannister della sua cella. Ha implorato di avere salva la vita, e lord Karstark lo ha pugnalato.',
    },
  },
  wilTalisaPast: {
    character: 'talisa-maegyr',
    type: { en: 'Healer', it: 'Guaritrice' },
    summary: {
      en: 'Robb’s queen, who dressed the prisoners’ wounds in the cells and teased them about the tales of Robb the wolf.',
      it: 'La regina di Robb, che medicava i prigionieri nelle celle e li prendeva in giro per le storie su Robb il lupo.',
    },
  },
  wilEdmurePast: {
    character: 'edmure-tully',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The lord who held him at Riverrun as a hostage.',
      it: 'Il lord che lo teneva in ostaggio a Delta delle Acque.',
    },
  },
  // Willem Lannister, the books: Catelyn III, where his body is laid
  // before Robb.
  wilRickardBook: {
    character: 'rickard-karstark',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'The northern lord who wanted vengeance on Jaime for his sons. He and his men murdered Willem in his cell at Riverrun.',
      it: 'Il lord del Nord che voleva vendicarsi di Jaime per i suoi figli. Lui e i suoi uomini hanno ucciso Willem nella sua cella a Delta delle Acque.',
    },
  },
  wilRobbBook: {
    character: 'robb-stark',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The king who held him prisoner at Riverrun. Willem’s body was laid before him in the great hall.',
      it: 'Il re che lo teneva prigioniero a Delta delle Acque. Il corpo di Willem è stato deposto davanti a lui nella sala grande.',
    },
  },

  // Martyn Lannister (show only)
  marTalisa: {
    character: 'talisa-maegyr',
    type: { en: 'Healer', it: 'Guaritrice' },
    summary: {
      en: 'Robb’s queen, who dresses his wounded hand in the cell. When he asks if Robb eats his enemies, she teases that he spares children except at the full moon.',
      it: 'La regina di Robb, che gli medica la mano ferita nella cella. Quando lui le chiede se Robb divori i nemici, scherza che risparmia i bambini, tranne con la luna piena.',
    },
  },
  marEdmure: {
    character: 'edmure-tully',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The lord whose men took him prisoner in battle. Edmure holds him at Riverrun as a hostage.',
      it: 'Il lord i cui uomini lo hanno fatto prigioniero in battaglia. Edmure lo tiene a Delta delle Acque come ostaggio.',
    },
  },
  marWillem: {
    character: 'willem-lannister',
    type: { en: 'Fellow prisoner', it: 'Compagno di prigionia' },
    summary: {
      en: 'The other Lannister squire held in the cell with him, who watches in silence.',
      it: 'L’altro scudiero Lannister rinchiuso nella cella con lui, che osserva in silenzio.',
    },
  },
  marRobb: {
    character: 'robb-stark',
    type: { en: 'Enemy king', it: 'Re nemico' },
    summary: {
      en: 'The king in the North. Martyn asks the queen if it is true that he turns into a wolf and eats his enemies.',
      it: 'Il re del Nord. Martyn chiede alla regina se sia vero che si trasforma in lupo e divora i nemici.',
    },
  },
  marRickard: {
    character: 'rickard-karstark',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'The northern lord who broke into the cell with his men. Martyn begged, saying he was only a squire, and Lord Karstark stabbed him.',
      it: 'Il lord del Nord che ha fatto irruzione nella cella con i suoi uomini. Martyn lo ha implorato, dicendo di essere solo uno scudiero, e lord Karstark lo ha pugnalato.',
    },
  },
  marWillemDead: {
    character: 'willem-lannister',
    type: { en: 'Fellow prisoner', it: 'Compagno di prigionia' },
    summary: {
      en: 'The other Lannister squire in his cell, who asked whether the men were a rescue. The Karstark men killed him first.',
      it: 'L’altro scudiero Lannister della sua cella, che ha chiesto se quegli uomini fossero venuti a salvarli. Gli uomini di Karstark lo hanno ucciso per primo.',
    },
  },
  marTalisaPast: {
    character: 'talisa-maegyr',
    type: { en: 'Healer', it: 'Guaritrice' },
    summary: {
      en: 'Robb’s queen, who dressed his wounded hand in the cell and teased him about the tales of Robb the wolf.',
      it: 'La regina di Robb, che gli aveva medicato la mano ferita nella cella e lo aveva preso in giro per le storie su Robb il lupo.',
    },
  },

  // Lothar Frey (the books; the show names him only past the stage)
  lotWalder: {
    character: 'walder-frey',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the lord of the Twins, whose terms he carries to Riverrun: Robb must come and apologise in person, and Edmure must marry Roslin.',
      it: 'Suo padre, il signore delle Torri Gemelle, di cui porta le condizioni a Delta delle Acque: Robb deve andare a scusarsi di persona, ed Edmure deve sposare Roslin.',
    },
  },
  lotRobb: {
    character: 'robb-stark',
    type: {
      en: 'King who broke his word',
      it: 'Re che ha mancato alla parola',
    },
    summary: {
      en: 'The king who broke his vow to marry a Frey. He asks Lothar to help launch Lord Hoster’s funeral boat as a gesture to his house.',
      it: 'Il re che ha mancato alla promessa di sposare una Frey. Chiede a Lothar di aiutarlo a varare la barca funebre di lord Hoster, come gesto verso la sua casata.',
    },
  },
  lotEdmure: {
    character: 'edmure-tully',
    type: { en: 'Bridegroom', it: 'Sposo' },
    summary: {
      en: 'The new lord of Riverrun, whom his father demands as a husband for Roslin. Edmure balks at not choosing his own wife.',
      it: 'Il nuovo signore di Delta delle Acque, che suo padre pretende come marito per Roslin. Edmure recalcitra all’idea di non scegliersi la moglie.',
    },
  },
  lotCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'King’s mother', it: 'Madre del re' },
    summary: {
      en: 'Robb’s mother. At dinner Lothar tells her that Winterfell has burned, and that the Bastard of Bolton saved the survivors.',
      it: 'La madre di Robb. A cena Lothar le racconta che Grande Inverno è bruciata, e che il Bastardo di Bolton ha salvato i superstiti.',
    },
  },
  lotWalderRivers: {
    character: 'walder-rivers',
    type: { en: 'Fellow envoy', it: 'Compagno di ambasceria' },
    summary: {
      en: 'His father’s bastard son, who rides to Riverrun with him to bring the terms.',
      it: 'Il figlio bastardo di suo padre, che va con lui a Delta delle Acque a portare le condizioni.',
    },
  },
  lotGreyWind: {
    character: 'grey-wind',
    type: { en: 'Wolf at the gate', it: 'Lupo alla porta' },
    summary: {
      en: 'Robb’s direwolf, which will not go through the gatehouse. Lothar offers to hand him to the master of hounds; Robb leaves him outside with Ser Raynald.',
      it: 'Il metalupo di Robb, che non vuole passare dal corpo di guardia. Lothar si offre di affidarlo al maestro dei cani; Robb lo lascia fuori con ser Raynald.',
    },
  },
  lotRobbGuest: {
    character: 'robb-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The king who comes to the Twins for Edmure’s wedding, to apologise to Lord Walder for his broken vow.',
      it: 'Il re che arriva alle Torri Gemelle per le nozze di Edmure, a scusarsi con lord Walder per la promessa mancata.',
    },
  },
  lotEdmureWed: {
    character: 'edmure-tully',
    type: { en: 'Bridegroom', it: 'Sposo' },
    summary: {
      en: 'The lord of Riverrun, who comes to the Twins to marry Roslin.',
      it: 'Il signore di Delta delle Acque, venuto alle Torri Gemelle a sposare Roslin.',
    },
  },
  lotRobbDead: {
    character: 'robb-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The king who came to the Twins to apologise for his broken vow. He was killed at the wedding feast.',
      it: 'Il re venuto alle Torri Gemelle a scusarsi per la promessa mancata. È stato ucciso alla festa nuziale.',
    },
  },
  lotCatelynDead: {
    character: 'catelyn-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'Robb’s mother, to whom Lothar brought the news of Winterfell at Riverrun. She was killed at the wedding feast.',
      it: 'La madre di Robb, a cui Lothar aveva portato le notizie di Grande Inverno a Delta delle Acque. È stata uccisa alla festa nuziale.',
    },
  },
  lotEdmureFeast: {
    character: 'edmure-tully',
    type: { en: 'Bridegroom', it: 'Sposo' },
    summary: {
      en: 'The lord of Riverrun, who married Roslin at the Twins and was carried off to the bedding.',
      it: 'Il signore di Delta delle Acque, che ha sposato Roslin alle Torri Gemelle ed è stato portato via per la cerimonia della consumazione.',
    },
  },
  lotWalderFeast: {
    character: 'walder-frey',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who welcomed Robb with bread and salt and called for the bedding at the wedding feast.',
      it: 'Suo padre, che ha accolto Robb con pane e sale e alla festa nuziale ha chiamato la cerimonia della consumazione.',
    },
  },

  // Walder Rivers (the books; the show names him only past the stage)
  wriWalder: {
    character: 'walder-frey',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the lord of the Twins, whose terms he and Lothar bring to Riverrun.',
      it: 'Suo padre, il signore delle Torri Gemelle, di cui lui e Lothar portano le condizioni a Delta delle Acque.',
    },
  },
  wriLothar: {
    character: 'lothar-frey',
    type: { en: 'Fellow envoy', it: 'Compagno di ambasceria' },
    summary: {
      en: 'His father’s son, who speaks for Lord Walder at Riverrun.',
      it: 'Il figlio di suo padre, che parla per lord Walder a Delta delle Acque.',
    },
  },
  wriRobb: {
    character: 'robb-stark',
    type: {
      en: 'King who broke his word',
      it: 'Re che ha mancato alla parola',
    },
    summary: {
      en: 'The king who broke his vow to marry a Frey. He hears the terms and dismisses the two envoys.',
      it: 'Il re che ha mancato alla promessa di sposare una Frey. Ascolta le condizioni e congeda i due inviati.',
    },
  },
  wriRobbDead: {
    character: 'robb-stark',
    type: {
      en: 'King who broke his word',
      it: 'Re che ha mancato alla parola',
    },
    summary: {
      en: 'The king who broke his vow to marry a Frey and heard the envoys’ terms at Riverrun. He was killed at the Twins.',
      it: 'Il re che aveva mancato alla promessa di sposare una Frey e ascoltato le condizioni degli inviati a Delta delle Acque. È stato ucciso alle Torri Gemelle.',
    },
  },

  // Roslin Frey: both media at her gate, then each medium's wedding
  rosWalder: {
    character: 'walder-frey',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, who demands that Edmure Tully marry her as the price of renewing his alliance with Robb.',
      it: 'Suo padre, che pretende che Edmure Tully la sposi come prezzo per rinnovare l’alleanza con Robb.',
    },
  },
  rosEdmure: {
    character: 'edmure-tully',
    type: { en: 'Promised husband', it: 'Promesso sposo' },
    summary: {
      en: 'The lord of Riverrun her father means her to marry.',
      it: 'Il signore di Delta delle Acque che suo padre vuole farle sposare.',
    },
  },
  rosEdmureShow: {
    character: 'edmure-tully',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'The lord she married at the Twins. He was relieved to find her beautiful, and only had eyes for her until the bedding.',
      it: 'Il lord che ha sposato alle Torri Gemelle. È stato sollevato nel trovarla bella, e fino alla cerimonia della consumazione ha avuto occhi solo per lei.',
    },
  },
  rosWalderShow: {
    character: 'walder-frey',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, who gave her to Edmure and called for the bedding at the end of the feast.',
      it: 'Suo padre, che l’ha data in sposa a Edmure e a fine banchetto ha chiamato la cerimonia della consumazione.',
    },
  },
  rosRobbShow: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who broke his promise to marry one of her sisters, and apologised to them at the Twins. He was killed there after the wedding.',
      it: 'Il re che aveva mancato alla promessa di sposare una delle sue sorelle, e a loro si era scusato alle Torri Gemelle. È stato ucciso lì dopo le nozze.',
    },
  },
  rosCatelynShow: {
    character: 'catelyn-stark',
    type: { en: 'Husband’s sister', it: 'Sorella del marito' },
    summary: {
      en: 'Edmure’s sister, who came to the Twins for the wedding. She was killed there that night.',
      it: 'La sorella di Edmure, venuta alle Torri Gemelle per le nozze. È stata uccisa lì quella notte.',
    },
  },
  rosTalisa: {
    character: 'talisa-maegyr',
    type: { en: 'King’s wife', it: 'Moglie del re' },
    summary: {
      en: 'The woman Robb married instead of a Frey. She was killed at the wedding feast.',
      it: 'La donna che Robb aveva sposato al posto di una Frey. È stata uccisa alla festa nuziale.',
    },
  },
  rosEdmureBook: {
    character: 'edmure-tully',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'The lord she married at the Twins. At the feast he doted on her, and she wept as she was carried off to the bedding.',
      it: 'Il lord che ha sposato alle Torri Gemelle. Al banchetto era tutto attenzioni per lei, e lei piangeva mentre la portavano via per la cerimonia della consumazione.',
    },
  },
  rosWalderBook: {
    character: 'walder-frey',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, who had her brought out to meet Edmure and called for the bedding at the end of the feast.',
      it: 'Suo padre, che l’ha fatta presentare a Edmure e a fine banchetto ha chiamato la cerimonia della consumazione.',
    },
  },
  rosLothar: {
    character: 'lothar-frey',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who carried their father’s terms, her marriage to Edmure among them, to Riverrun.',
      it: 'Suo fratello, che aveva portato a Delta delle Acque le condizioni del padre, fra cui le sue nozze con Edmure.',
    },
  },
  rosRobbBook: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who broke his promise to marry a Frey, and came to the Twins to apologise. He was killed at her wedding feast.',
      it: 'Il re che aveva mancato alla promessa di sposare una Frey ed era venuto alle Torri Gemelle a scusarsi. È stato ucciso al suo banchetto di nozze.',
    },
  },
  rosCatelynBook: {
    character: 'catelyn-stark',
    type: { en: 'Husband’s sister', it: 'Sorella del marito' },
    summary: {
      en: 'Edmure’s sister, who came to the Twins with Robb. She was killed at the wedding feast.',
      it: 'La sorella di Edmure, venuta alle Torri Gemelle con Robb. È stata uccisa al banchetto di nozze.',
    },
  },

  // Ryman Frey (books only)
  rymRobb: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king whose host he meets on the road to the Twins. Ryman is angry that Robb has not brought his queen.',
      it: 'Il re di cui va incontro all’esercito sulla strada per le Torri Gemelle. Ryman è irritato perché Robb non ha portato la regina.',
    },
  },
  rymCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'King’s mother', it: 'Madre del re' },
    summary: {
      en: 'Robb’s mother, who offers her apologies for the absent queen.',
      it: 'La madre di Robb, che si scusa per l’assenza della regina.',
    },
  },
  rymWalder: {
    character: 'walder-frey',
    type: { en: 'Grandfather', it: 'Nonno' },
    summary: {
      en: 'His grandfather, the lord of the Twins, who will be displeased that the queen has not come.',
      it: 'Suo nonno, il signore delle Torri Gemelle, che sarà scontento che la regina non sia venuta.',
    },
  },
  rymDacey: {
    character: 'dacey-mormont',
    type: { en: 'Woman he killed', it: 'Donna che ha ucciso' },
    summary: {
      en: 'A northern woman who ran for the door when the slaughter began. Ryman came through it with his men and sank his axe into her.',
      it: 'Una donna del Nord che quando è cominciato il massacro è corsa verso la porta. Ryman l’ha varcata con i suoi uomini e le ha piantato l’ascia nel ventre.',
    },
  },
  rymCatelynFeast: {
    character: 'catelyn-stark',
    type: { en: 'King’s mother', it: 'Madre del re' },
    summary: {
      en: 'Robb’s mother, seated beside Ryman at the wedding feast. She was killed in the hall.',
      it: 'La madre di Robb, seduta accanto a Ryman al banchetto di nozze. È stata uccisa nella sala.',
    },
  },
  rymRobbDead: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king whose host Ryman met on the road. He was killed at the wedding feast.',
      it: 'Il re di cui Ryman era andato incontro all’esercito sulla strada. È stato ucciso alla festa nuziale.',
    },
  },
  rymWalderFeast: {
    character: 'walder-frey',
    type: { en: 'Grandfather', it: 'Nonno' },
    summary: {
      en: 'His grandfather, who watched the slaughter from his seat and mocked Robb.',
      it: 'Suo nonno, che dal suo seggio ha guardato il massacro e si è fatto beffe di Robb.',
    },
  },

  // Aegon Frey (books only), told at his gate, where he dies
  aegCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Woman who killed him', it: 'Donna che lo ha ucciso' },
    summary: {
      en: 'Robb’s mother. In the slaughter she seized him and held a dagger to his throat to bargain for her son, and when Robb died she cut it.',
      it: 'La madre di Robb. Durante il massacro lo ha afferrato e gli ha puntato un pugnale alla gola per trattare la vita del figlio, e quando Robb è morto lo ha sgozzato.',
    },
  },
  aegWalder: {
    character: 'walder-frey',
    type: { en: 'Grandfather', it: 'Nonno' },
    summary: {
      en: 'His grandfather, who would not trade Robb for him, and dismissed him as a grandson of no use.',
      it: 'Suo nonno, che non ha voluto scambiare Robb con lui, e lo ha liquidato come un nipote buono a nulla.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * King's Landing (#1651): the court under Tywin as Hand, the Tyrells and
 * the Dornishmen. Returning characters' stage-3 cards are in the
 * `kingsLanding3` blocks of `season-1.relationships.ts` and
 * `season-2.relationships.ts`.
 */
const kingsLanding = {
  // Olenna Tyrell, the show
  oleSansaShow: {
    character: 'sansa-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The Stark girl Loras brings to the gardens. Olenna presses her for the truth about Joffrey until she blurts out that he is a monster.',
      it: 'La ragazza Stark che Loras accompagna nei giardini. Olenna insiste per sapere la verità su Joffrey, finché Sansa si lascia sfuggire che è un mostro.',
    },
  },
  oleMargaeryShow: {
    character: 'margaery-tyrell',
    type: { en: 'Granddaughter', it: 'Nipote' },
    summary: {
      en: 'Her granddaughter, who is to marry Joffrey. Olenna wants to know what kind of man she is getting.',
      it: 'Sua nipote, promessa sposa di Joffrey. Olenna vuole sapere che uomo si ritroverà accanto.',
    },
  },
  oleLorasShow: {
    character: 'loras-tyrell',
    type: { en: 'Grandson', it: 'Nipote' },
    summary: {
      en: 'Her grandson, who escorts Sansa to the gardens and leaves her with the women.',
      it: 'Suo nipote, che accompagna Sansa nei giardini e la lascia con le donne.',
    },
  },
  oleVarys: {
    character: 'varys',
    type: { en: 'Informant', it: 'Informatore' },
    summary: {
      en: 'The master of whisperers, who walks with her in the gardens and warns her that Littlefinger means to take Sansa. She sees through his courtesies and tells him the answer is obvious.',
      it: 'Il maestro dei sussurri, che passeggia con lei nei giardini e la avverte che Ditocorto vuole prendersi Sansa. Lei vede oltre le sue cortesie e gli dice che la soluzione è ovvia.',
    },
  },
  oleSansaMatch: {
    character: 'sansa-stark',
    type: { en: 'Bride she wants', it: 'Sposa che vuole' },
    summary: {
      en: 'The Stark girl who would carry the North to whoever marries her. After Varys’s warning, the Tyrells mean to wed her to Loras.',
      it: 'La ragazza Stark che porterebbe il Nord a chi la sposa. Dopo l’avvertimento di Varys, i Tyrell vogliono darla in moglie a Loras.',
    },
  },
  oleCersei: {
    character: 'cersei-lannister',
    type: { en: 'Queen regent', it: 'Regina reggente' },
    summary: {
      en: 'The queen who walks the sept with her behind Joffrey and Margaery. Olenna mocks her own son’s soldiering to her face.',
      it: 'La regina che percorre con lei il tempio dietro Joffrey e Margaery. Davanti a lei, Olenna si fa beffe delle doti militari di suo figlio.',
    },
  },
  oleTywin: {
    character: 'tywin-lannister',
    type: { en: 'Hand of the King', it: 'Primo Cavaliere del re' },
    summary: {
      en: 'The Hand, who wants Loras to marry his daughter Cersei. Olenna refuses until he threatens to name Loras to the Kingsguard, then gives way.',
      it: 'Il Primo Cavaliere, che vuole Loras come marito per la figlia Cersei. Olenna rifiuta finché lui non minaccia di mettere Loras nella Guardia reale, poi cede.',
    },
  },
  oleTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Master of coin', it: 'Maestro del conio' },
    summary: {
      en: 'The master of coin, who comes to her worried about the cost of the royal wedding. She agrees to pay for half of it.',
      it: 'Il maestro del conio, che viene da lei preoccupato per il costo delle nozze reali. Lei accetta di pagarne metà.',
    },
  },
  oleCerseiBride: {
    character: 'cersei-lannister',
    type: { en: 'Bride forced on her', it: 'Sposa imposta' },
    summary: {
      en: 'Tywin’s daughter, whom Loras is now to marry. Olenna doubts she can still give the Tyrells heirs.',
      it: 'La figlia di Tywin, che ora Loras dovrà sposare. Olenna dubita che possa ancora dare eredi ai Tyrell.',
    },
  },
  oleLorasBetrothed: {
    character: 'loras-tyrell',
    type: { en: 'Grandson', it: 'Nipote' },
    summary: {
      en: 'Her grandson, whom she agrees to give to Cersei rather than lose him to the Kingsguard and Highgarden with him.',
      it: 'Suo nipote, che accetta di dare in sposo a Cersei pur di non perderlo per la Guardia reale, e con lui Alto Giardino.',
    },
  },
  // Olenna Tyrell, the books
  oleSansaBooks: {
    character: 'sansa-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The Stark girl Margaery invites to supper. Olenna has the fool sing loudly so no one overhears, gets her to whisper that Joffrey is a monster, and offers her a visit to Highgarden and her grandson Willas.',
      it: 'La ragazza Stark che Margaery invita a cena. Olenna fa cantare il buffone a squarciagola perché nessuno senta, la convince a sussurrare che Joffrey è un mostro e le propone di venire ad Alto Giardino e di sposare suo nipote Willas.',
    },
  },
  oleMargaeryBooks: {
    character: 'margaery-tyrell',
    type: { en: 'Granddaughter', it: 'Nipote' },
    summary: {
      en: 'Her granddaughter, the king’s bride to be, who joins her in urging Sansa to tell the truth.',
      it: 'Sua nipote, la futura sposa del re, che con lei spinge Sansa a dire la verità.',
    },
  },
  oleMace: {
    character: 'mace-tyrell',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Her son, the lord of Highgarden. She calls him an oaf for the Lannister alliance, and says he will see his daughter married to the king whatever Joffrey is.',
      it: 'Suo figlio, il signore di Alto Giardino. Lo chiama sciocco per l’alleanza con i Lannister, e dice che farà sposare la figlia al re, qualunque cosa sia Joffrey.',
    },
  },
  oleJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'Granddaughter’s groom', it: 'Sposo della nipote' },
    summary: {
      en: 'The king Margaery is to marry. Olenna wants to know the truth about him before the wedding.',
      it: 'Il re che Margaery deve sposare. Olenna vuole sapere la verità su di lui prima delle nozze.',
    },
  },
  oleLorasBooks: {
    character: 'loras-tyrell',
    type: { en: 'Grandson', it: 'Nipote' },
    summary: {
      en: 'Her grandson, the knight of the Kingsguard who brings Sansa to the supper.',
      it: 'Suo nipote, il cavaliere della Guardia reale che accompagna Sansa alla cena.',
    },
  },

  // Megga, Alla and Elinor Tyrell (books only)
  cousinMargaery: {
    character: 'margaery-tyrell',
    type: { en: 'Cousin', it: 'Cugina' },
    summary: {
      en: 'The cousin she attends in King’s Landing, the king’s bride to be.',
      it: 'La cugina di cui è dama di compagnia ad Approdo del Re, la futura sposa del re.',
    },
  },
  cousinSansaMet: {
    character: 'sansa-stark',
    type: { en: 'New friend', it: 'Nuova amica' },
    summary: {
      en: 'The Stark girl Margaery invites to supper with Lady Olenna. She is introduced to all the cousins.',
      it: 'La ragazza Stark che Margaery invita a cena con lady Olenna. Le vengono presentate tutte le cugine.',
    },
  },
  cousinSansaSnubbed: {
    character: 'sansa-stark',
    type: { en: 'Bride they ignore', it: 'Sposa ignorata' },
    summary: {
      en: 'The Stark girl the Tyrells had hoped to wed to Willas. At her wedding feast with Tyrion the cousins ignore her.',
      it: 'La ragazza Stark che i Tyrell speravano di dare in moglie a Willas. Al banchetto delle sue nozze con Tyrion le cugine la ignorano.',
    },
  },
  megElinor: {
    character: 'elinor-tyrell',
    type: { en: 'Elder cousin', it: 'Cugina più grande' },
    summary: {
      en: 'The eldest of the cousins, already a woman, who rules Megga and Alla by right of it.',
      it: 'La più grande delle cugine, già donna, che per questo comanda su Megga e Alla.',
    },
  },
  megTommen: {
    character: 'tommen-baratheon',
    type: { en: 'Dance partner', it: 'Compagno di ballo' },
    summary: {
      en: 'The young prince Megga dances with at Sansa’s wedding feast.',
      it: 'Il giovane principe con cui Megga balla al banchetto di nozze di Sansa.',
    },
  },
  eliMegga: {
    character: 'megga-tyrell',
    type: { en: 'Younger cousin', it: 'Cugina più giovane' },
    summary: {
      en: 'A loud, round younger cousin, not yet flowered, who follows Elinor’s lead.',
      it: 'Una cugina più giovane, rotonda e chiassosa, non ancora fiorita, che segue Elinor.',
    },
  },
  eliAlla: {
    character: 'alla-tyrell',
    type: { en: 'Younger cousin', it: 'Cugina più giovane' },
    summary: {
      en: 'A shy younger cousin who sings well, not yet flowered, who follows Elinor’s lead.',
      it: 'Una cugina più giovane, timida e brava a cantare, non ancora fiorita, che segue Elinor.',
    },
  },

  // Oberyn Martell, the books
  obeTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Envoy who greets him', it: 'Inviato che lo accoglie' },
    summary: {
      en: 'The dwarf sent to meet the Dornishmen on the road. Oberyn recalls seeing him as a baby with Elia, then asks when justice will be done.',
      it: 'Il nano mandato incontro ai dorniani lungo la strada. Oberyn ricorda di averlo visto in fasce insieme a Elia, poi gli chiede quando sarà fatta giustizia.',
    },
  },
  obeTywin: {
    character: 'tywin-lannister',
    type: { en: 'Lord he blames', it: 'Lord che accusa' },
    summary: {
      en: 'Tyrion’s father, who once received him and Elia coldly in his mourning. Oberyn wants him told that the Mountain will name who gave his orders.',
      it: 'Il padre di Tyrion, che un tempo ricevette lui ed Elia con freddezza, in pieno lutto. Oberyn vuole che gli si riferisca che la Montagna dirà da chi ha avuto gli ordini.',
    },
  },
  obeGregor: {
    character: 'gregor-clegane',
    type: { en: 'Man he wants dead', it: 'Uomo che vuole morto' },
    summary: {
      en: 'The knight Oberyn holds guilty for Elia’s death. He means to kill him, and not to stop there.',
      it: 'Il cavaliere che Oberyn ritiene colpevole della morte di Elia. Intende ucciderlo, e non fermarsi a lui.',
    },
  },
  obeEllaria: {
    character: 'ellaria-sand',
    type: { en: 'Paramour', it: 'Amante' },
    summary: {
      en: 'The woman who rides with him to King’s Landing. Oberyn hints to Tyrion at what she is curious about.',
      it: 'La donna che viaggia con lui verso Approdo del Re. Oberyn lascia intendere a Tyrion che cosa la incuriosisce.',
    },
  },
  // Ellaria Sand, the books
  ellOberyn: {
    character: 'oberyn-martell',
    type: { en: 'Paramour', it: 'Amante' },
    summary: {
      en: 'The prince of Dorne she rides with to King’s Landing, at the head of the Dornishmen.',
      it: 'Il principe di Dorne con cui viaggia verso Approdo del Re, alla testa dei dorniani.',
    },
  },
  ellTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Envoy who greets them', it: 'Inviato che li accoglie' },
    summary: {
      en: 'The Lannister sent to meet the Dornishmen on the road. He worries about where a baseborn paramour can sit at the royal wedding.',
      it: 'Il Lannister mandato incontro ai dorniani lungo la strada. Si chiede dove potrà sedere un’amante di nascita bassa alle nozze reali.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * Dragonstone (#1657): the cards of the group's new characters, all three
 * the books' alone. Each opens at Davos IV (chapter 180), and its cards
 * hold what Davos II and III (154, 169) told of them before their names
 * were said.
 */
const dragonstone = {
  // Axell Florent (books only)
  axeDavos: {
    character: 'davos-seaworth',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The knight he arrested on his return to Dragonstone for plotting to kill Melisandre. He brings Davos before the king, and threatens to have him killed if Davos does not help make him Hand.',
      it: 'Il cavaliere che ha arrestato al suo ritorno a Roccia del Drago perché tramava di uccidere Melisandre. Lo porta davanti al re, e minaccia di farlo uccidere se Davos non lo aiuta a diventare Primo Cavaliere.',
    },
  },
  axeStannis: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king he serves. Stannis has him explain to Davos his plan to attack the island of a lord who bent the knee to Joffrey, and sends him out when Davos calls it a folly.',
      it: 'Il re che serve. Stannis gli fa spiegare a Davos il suo piano per attaccare l’isola di un lord che si è piegato a Joffrey, e lo manda via quando Davos lo definisce una follia.',
    },
  },
  axeAlester: {
    character: 'alester-florent',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, whom he threw into Davos’s cell. When he takes Davos up to the king, he takes the torch too, and leaves Alester in the dark.',
      it: 'Suo fratello, che ha gettato nella cella di Davos. Quando porta Davos dal re si prende anche la torcia, e lascia Alester al buio.',
    },
  },
  // Alester Florent (books only)
  aleAxell: {
    character: 'axell-florent',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, who threw him into a cell beneath Dragonstone and leaves him there in the dark.',
      it: 'Suo fratello, che lo ha gettato in una cella sotto Roccia del Drago e ve lo lascia al buio.',
    },
  },
  aleDavos: {
    character: 'davos-seaworth',
    type: { en: 'Cellmate', it: 'Compagno di cella' },
    summary: {
      en: 'The knight he shares a cell with. Alester tells him of his letter to Tywin, and Davos answers that Stannis would rather die a king than bend the knee.',
      it: 'Il cavaliere con cui divide la cella. Alester gli racconta della sua lettera a Tywin, e Davos risponde che Stannis preferirebbe morire da re piuttosto che piegare il ginocchio.',
    },
  },
  aleStannis: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who made him Hand after the Blackwater. Alester wrote to Tywin Lannister offering peace in his name, and Stannis proclaims that he will die for treason.',
      it: 'Il re che lo ha nominato Primo Cavaliere dopo le Acque Nere. Alester ha scritto a Tywin Lannister offrendo la pace a suo nome, e Stannis proclama che morirà per tradimento.',
    },
  },
  aleShireen: {
    character: 'shireen-baratheon',
    type: { en: 'The king’s daughter', it: 'Figlia del re' },
    summary: {
      en: 'The princess whose hand he offered to Tommen in his letter to Tywin.',
      it: 'La principessa di cui ha offerto la mano a Tommen nella lettera a Tywin.',
    },
  },
  aleMelisandre: {
    character: 'melisandre',
    type: { en: 'Priestess', it: 'Sacerdotessa' },
    summary: {
      en: 'The red priestess whose talk of a stone dragon he calls madness. No good, he says, has ever come of dreams of dragons.',
      it: 'La sacerdotessa rossa i cui discorsi su un drago di pietra lui chiama follia. Dice che dai sogni di draghi non è mai venuto niente di buono.',
    },
  },
  // Edric Storm (books only)
  edrShireen: {
    character: 'shireen-baratheon',
    type: { en: 'Playmate', it: 'Compagna di giochi' },
    summary: {
      en: 'The king’s daughter, with whom he plays monsters and maidens in the castle garden, her fool joining in.',
      it: 'La figlia del re, con cui gioca a mostri e fanciulle nel giardino del castello, insieme al giullare di lei.',
    },
  },
  edrRobert: {
    character: 'robert-baratheon',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the late king, whom he reveres.',
      it: 'Suo padre, il defunto re, che venera.',
    },
  },
  edrDavos: {
    character: 'davos-seaworth',
    type: { en: 'Knight he meets', it: 'Cavaliere che incontra' },
    summary: {
      en: 'The knight who finds him playing in the garden. Edric tells him his uncle Stannis should never have cut off his fingers.',
      it: 'Il cavaliere che lo trova a giocare in giardino. Edric gli dice che suo zio Stannis non avrebbe mai dovuto tagliargli le dita.',
    },
  },
  edrStannis: {
    character: 'stannis-baratheon',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle the king. Melisandre asks Stannis to burn Edric, and he refuses, but throws three leeches full of the boy’s blood into the brazier.',
      it: 'Suo zio, il re. Melisandre chiede a Stannis di bruciare Edric e lui rifiuta, ma getta nel braciere tre sanguisughe piene del sangue del ragazzo.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * Megga's and Alla's snapshots before the wedding, the same in both: Margaery
 * and Sansa from Sansa I (150), and Elinor from Sansa II (160), where the
 * cousins' ranks are told. Books only; the episodes only order them.
 */
const COUSINS_BEFORE_THE_WEDDING = [
  {
    episode: 22,
    chapter: 150,
    source: 'chapter',
    value: [kingsLanding.cousinMargaery, kingsLanding.cousinSansaMet],
  },
  {
    episode: 24,
    chapter: 160,
    source: 'chapter',
    value: [
      kingsLanding.cousinMargaery,
      kingsLanding.cousinSansaMet,
      kingsLanding.megElinor,
    ],
  },
] satisfies Timeline<Relationship[]>

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
  // Robb's war and the Riverlands (#1653). Books only: Catelyn II (158),
  // III (164), V (189) and VII (195). Episodes only order the entries.
  'jeyne-westerling': [
    {
      episode: 23,
      chapter: 158,
      source: 'chapter',
      value: [
        riverlands.jeyRobb,
        riverlands.jeyCatelyn,
        riverlands.jeyGreyWind,
        riverlands.jeyRolph,
        riverlands.jeyRaynald,
      ],
    },
    {
      episode: 25,
      chapter: 164,
      source: 'chapter',
      value: [
        riverlands.jeyRobb,
        riverlands.jeyCatelynAdvice,
        riverlands.jeyGreyWind,
        riverlands.jeyRolph,
        riverlands.jeyRaynald,
      ],
    },
    {
      episode: 27,
      chapter: 189,
      source: 'chapter',
      value: [
        riverlands.jeyRobbLeaves,
        riverlands.jeyCatelynAdvice,
        riverlands.jeyRaynaldBanner,
        riverlands.jeyRolphErrand,
        riverlands.jeyGreyWind,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands.jeyRobbDead,
        riverlands.jeyCatelynDead,
        riverlands.jeyRaynaldPast,
        riverlands.jeyRolphPast,
        riverlands.jeyGreyWindPast,
      ],
    },
  ],
  // Books only: Catelyn II (158), V (189) and VII (195).
  'rolph-spicer': [
    {
      episode: 23,
      chapter: 158,
      source: 'chapter',
      value: [
        riverlands.rolJeyne,
        riverlands.rolRobb,
        riverlands.rolGreyWind,
        riverlands.rolCatelyn,
      ],
    },
    {
      episode: 27,
      chapter: 189,
      source: 'chapter',
      value: [
        riverlands.rolJeyne,
        riverlands.rolRobbErrand,
        riverlands.rolGreyWind,
        riverlands.rolCatelyn,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands.rolJeynePast,
        riverlands.rolRobbDead,
        riverlands.rolGreyWind,
        riverlands.rolCatelynDead,
      ],
    },
  ],
  // Books only: Catelyn II (158), VI (193) and VII (195).
  'raynald-westerling': [
    {
      episode: 23,
      chapter: 158,
      source: 'chapter',
      value: [riverlands.rayJeyne, riverlands.rayRobb, riverlands.rayCatelyn],
    },
    {
      episode: 28,
      chapter: 193,
      source: 'chapter',
      value: [
        riverlands.rayRobbBanner,
        riverlands.rayGreyWind,
        riverlands.rayJeyneHome,
        riverlands.rayCatelyn,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands.rayRobbDead,
        riverlands.rayGreyWindPast,
        riverlands.rayJeyneHome,
        riverlands.rayCatelynDead,
      ],
    },
  ],
  // The show: "Walk of Punishment" (23) and "Kissed by Fire" (25), where he
  // dies. The books: Catelyn III (164), where his body is laid before
  // Robb, so the books' record opens dead.
  'willem-lannister': [
    {
      episode: 23,
      chapter: 164,
      source: 'episode',
      value: [
        riverlands.wilTalisa,
        riverlands.wilEdmure,
        riverlands.wilMartyn,
        riverlands.wilRobb,
      ],
    },
    {
      episode: 25,
      chapter: 164,
      source: 'episode',
      value: [
        riverlands.wilRickard,
        riverlands.wilMartynDead,
        riverlands.wilTalisaPast,
        riverlands.wilEdmurePast,
      ],
    },
    {
      episode: 25,
      chapter: 164,
      source: 'chapter',
      value: [riverlands.wilRickardBook, riverlands.wilRobbBook],
    },
  ],
  // Show only: "Walk of Punishment" (23) and "Kissed by Fire" (25), where
  // he dies.
  'martyn-lannister': [
    {
      episode: 23,
      chapter: 164,
      source: 'episode',
      value: [
        riverlands.marTalisa,
        riverlands.marEdmure,
        riverlands.marWillem,
        riverlands.marRobb,
      ],
    },
    {
      episode: 25,
      chapter: 164,
      source: 'episode',
      value: [
        riverlands.marRickard,
        riverlands.marWillemDead,
        riverlands.marTalisaPast,
      ],
    },
  ],
  // The show says his name only in episode 60, past the stage: his cards
  // are the books', Catelyn IV (179), VI (193) and VII (195).
  'lothar-frey': [
    {
      episode: 60,
      chapter: 179,
      source: 'chapter',
      value: [
        riverlands.lotWalder,
        riverlands.lotRobb,
        riverlands.lotEdmure,
        riverlands.lotCatelyn,
        riverlands.lotWalderRivers,
      ],
    },
    {
      episode: 60,
      chapter: 193,
      source: 'chapter',
      value: [
        riverlands.lotGreyWind,
        riverlands.lotRobbGuest,
        riverlands.lotWalder,
        riverlands.lotEdmureWed,
        riverlands.lotCatelyn,
      ],
    },
    {
      episode: 60,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands.lotWalderFeast,
        riverlands.lotRobbDead,
        riverlands.lotCatelynDead,
        riverlands.lotEdmureFeast,
        riverlands.lotGreyWindPast,
      ],
    },
  ],
  // As Lothar: the books' Catelyn IV (179), and Robb's death in Catelyn
  // VII (195).
  'walder-rivers': [
    {
      episode: 60,
      chapter: 179,
      source: 'chapter',
      value: [riverlands.wriWalder, riverlands.wriLothar, riverlands.wriRobb],
    },
    {
      episode: 60,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands.wriWalder,
        riverlands.wriLothar,
        riverlands.wriRobbDead,
      ],
    },
  ],
  // Both media at her gate, "The Climb" (26) and Catelyn IV (179); then the
  // show's wedding, "The Rains of Castamere" (29), and the books', Catelyn
  // VI and VII (193, 195).
  'roslin-frey': [
    {
      episode: 26,
      chapter: 179,
      value: [riverlands.rosWalder, riverlands.rosEdmure],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'episode',
      value: [
        riverlands.rosEdmureShow,
        riverlands.rosWalderShow,
        riverlands.rosRobbShow,
        riverlands.rosCatelynShow,
        riverlands.rosTalisa,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands.rosEdmureBook,
        riverlands.rosWalderBook,
        riverlands.rosLothar,
        riverlands.rosRobbBook,
        riverlands.rosCatelynBook,
      ],
    },
  ],
  // Books only: Catelyn VI (193) and VII (195).
  'ryman-frey': [
    {
      episode: 29,
      chapter: 193,
      source: 'chapter',
      value: [riverlands.rymRobb, riverlands.rymCatelyn, riverlands.rymWalder],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands.rymDacey,
        riverlands.rymCatelynFeast,
        riverlands.rymRobbDead,
        riverlands.rymWalderFeast,
      ],
    },
  ],
  // Books only: Catelyn VII (195), told at his gate, where he dies.
  'aegon-frey': [
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [riverlands.aegCatelyn, riverlands.aegWalder],
    },
  ],
  // King's Landing (#1651). The show: "Dark Wings, Dark Words" (22), "And
  // Now His Watch Is Ended" (24), "Kissed by Fire" (25) and "The Climb"
  // (26). The books: Sansa I (150).
  'olenna-tyrell': [
    {
      episode: 22,
      chapter: 150,
      source: 'episode',
      value: [
        kingsLanding.oleSansaShow,
        kingsLanding.oleMargaeryShow,
        kingsLanding.oleLorasShow,
      ],
    },
    {
      episode: 24,
      chapter: 160,
      source: 'episode',
      value: [
        kingsLanding.oleVarys,
        kingsLanding.oleSansaMatch,
        kingsLanding.oleCersei,
        kingsLanding.oleMargaeryShow,
        kingsLanding.oleLorasShow,
      ],
    },
    // "The Climb": the meeting with Tywin, after the wedding costs with
    // Tyrion in "Kissed by Fire".
    {
      episode: 26,
      chapter: 172,
      source: 'episode',
      value: [
        kingsLanding.oleTywin,
        kingsLanding.oleCerseiBride,
        kingsLanding.oleLorasBetrothed,
        kingsLanding.oleTyrion,
        kingsLanding.oleSansaMatch,
      ],
    },
    {
      episode: 22,
      chapter: 150,
      source: 'chapter',
      value: [
        kingsLanding.oleSansaBooks,
        kingsLanding.oleMargaeryBooks,
        kingsLanding.oleMace,
        kingsLanding.oleJoffrey,
        kingsLanding.oleLorasBooks,
      ],
    },
  ],
  // Books only: Sansa I (150), Sansa II (160, the cousins' ranks) and
  // Sansa III (172, the wedding feast). Episodes only order them.
  'megga-tyrell': [
    ...COUSINS_BEFORE_THE_WEDDING,
    {
      episode: 28,
      chapter: 172,
      source: 'chapter',
      value: [
        kingsLanding.cousinMargaery,
        kingsLanding.cousinSansaSnubbed,
        kingsLanding.megElinor,
        kingsLanding.megTommen,
      ],
    },
  ],
  'alla-tyrell': [
    ...COUSINS_BEFORE_THE_WEDDING,
    {
      episode: 28,
      chapter: 172,
      source: 'chapter',
      value: [
        kingsLanding.cousinMargaery,
        kingsLanding.cousinSansaSnubbed,
        kingsLanding.megElinor,
      ],
    },
  ],
  'elinor-tyrell': [
    {
      episode: 22,
      chapter: 150,
      source: 'chapter',
      value: [kingsLanding.cousinMargaery, kingsLanding.cousinSansaMet],
    },
    {
      episode: 24,
      chapter: 160,
      source: 'chapter',
      value: [
        kingsLanding.cousinMargaery,
        kingsLanding.cousinSansaMet,
        kingsLanding.eliMegga,
        kingsLanding.eliAlla,
      ],
    },
    {
      episode: 28,
      chapter: 172,
      source: 'chapter',
      value: [
        kingsLanding.cousinMargaery,
        kingsLanding.cousinSansaSnubbed,
        kingsLanding.eliMegga,
        kingsLanding.eliAlla,
      ],
    },
  ],
  // Tyrion V (182). The show meets him in season 4, a later stage's cards;
  // episode 31, his show gate, only orders the entry.
  'oberyn-martell': [
    {
      episode: 31,
      chapter: 182,
      source: 'chapter',
      value: [
        kingsLanding.obeTyrion,
        kingsLanding.obeTywin,
        kingsLanding.obeGregor,
        kingsLanding.obeEllaria,
      ],
    },
  ],
  // Tyrion V (182); episode 32, her show gate, only orders the entry.
  'ellaria-sand': [
    {
      episode: 32,
      chapter: 182,
      source: 'chapter',
      value: [kingsLanding.ellOberyn, kingsLanding.ellTyrion],
    },
  ],
  // Dragonstone (#1657). Books only: Davos IV (180), their gate. Episode 28,
  // their show-side order, only orders the entries.
  'axell-florent': [
    {
      episode: 28,
      chapter: 180,
      source: 'chapter',
      value: [
        dragonstone.axeDavos,
        dragonstone.axeStannis,
        dragonstone.axeAlester,
      ],
    },
  ],
  'alester-florent': [
    {
      episode: 28,
      chapter: 180,
      source: 'chapter',
      value: [
        dragonstone.aleAxell,
        dragonstone.aleDavos,
        dragonstone.aleStannis,
        dragonstone.aleShireen,
        dragonstone.aleMelisandre,
      ],
    },
  ],
  'edric-storm': [
    {
      episode: 28,
      chapter: 180,
      source: 'chapter',
      value: [
        dragonstone.edrShireen,
        dragonstone.edrRobert,
        dragonstone.edrDavos,
        dragonstone.edrStannis,
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
