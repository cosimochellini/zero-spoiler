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
      en: 'The Hand, who wants Loras to marry his daughter Cersei. She refuses until he threatens to name Loras to the Kingsguard, then gives way.',
      it: 'Il Primo Cavaliere, che vuole Loras come marito per la figlia Cersei. Lei rifiuta finché lui non minaccia di mettere Loras nella Guardia reale, poi cede.',
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
} satisfies Record<string, Timeline<Relationship[]>>
