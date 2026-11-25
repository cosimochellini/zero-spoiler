import type { Story, Timeline } from '~/data/types'

import { inBooks, onScreen } from './chronicle'

/**
 * Season 3 and the first part of *A Storm of Swords*: the stories of the
 * characters the third stage files (#1629), each at the first episode and
 * the first site chapter by whose end the reader knows all of it, on the
 * earlier seasons' rules (`season-1.chronicle.ts`, `season-2.chronicle.ts`).
 * A returning character's stage-3 stories go in the module that first filed
 * them, so this one holds only the stage's new cast.
 *
 * The Essos cast (#1659) comes first. The show and the books tell Astapor
 * and Yunkai in different words and with different people: the show has
 * Barristan Selmy at Daenerys's side, Mero and Daario of one company and
 * Razdal mo Eraz; the books have Arstan Whitebeard, the Stormcrows apart
 * from the Second Sons, Grazdan mo Eraz and Drogon burning his tokar. So
 * every story is one medium's. A show story sits at the chapter its episode
 * adapts, or at a linked record's book gate when that is later: Daenerys IV
 * (chapter 186) orders everything from episode 25 on. A book story sits at
 * the episode that adapts its chapter, or at the owner's or a linked
 * record's show gate when that is later: every story that links Kraznys mo
 * Nakloz is at episode 24 or after. Kraznys and Prendahl na Ghezn are on
 * screen too, but only the books name them, so their records and stories are
 * the books'.
 */
export const season3Chronicles = {
  'missandei': [
    onScreen(
      [23, 171],
      { it: 'Valar morghulis', en: 'Valar morghulis' },
      {
        it: 'Missandei è la schiava che fa da interprete al Buon Padrone che vende gli Immacolati ad Astapor. Ne addolcisce gli insulti a [[daenerys-targaryen|Daenerys]] ed esita davanti ai più volgari. Quando Daenerys scambia un drago con l’intero esercito, chiede anche Missandei, come pegno di buona fede, e la ottiene. Daenerys le chiede se ha una famiglia, e Missandei non ne ha più. Avvertita che la aspettano guerra, malattie e morte, risponde “Valar morghulis”. Daenerys traduce: tutti gli uomini devono morire. Ma noi, aggiunge, non siamo uomini.',
        en: 'Missandei is the slave who interprets for the Good Master selling the Unsullied in Astapor. She softens his insults to [[daenerys-targaryen|Daenerys]], and hesitates over the coarsest. When Daenerys trades a dragon for the whole army, she asks for Missandei too, as a token of good faith, and gets her. Daenerys asks about her family, and Missandei has none left. Warned that war, sickness and death lie ahead, she answers “Valar morghulis”. Daenerys gives the meaning, all men must die, and adds: but we are not men.',
      },
    ),
    onScreen(
      [28, 186],
      { it: 'Diciannove lingue', en: 'Nineteen languages' },
      {
        it: 'Quando i capitani dei Secondi Figli vengono nella tenda di [[daenerys-targaryen|Daenerys]] fuori Yunkai, [[mero|Mero]] palpeggia Missandei e le dà una pacca sul sedere. Quella notte, mentre Daenerys fa il bagno, scopre che Missandei parla diciannove lingue. Daenerys passa al dothraki per mostrare quanto lo parla bene, e Missandei le corregge la pronuncia. Poi un uomo con l’armatura degli Immacolati entra di nascosto e punta un coltello alla gola di Missandei. È [[daario-naharis|Daario Naharis]], venuto con le teste dei suoi capitani, e lascia andare Missandei.',
        en: 'When the captains of the Second Sons come to [[daenerys-targaryen|Daenerys]]’s tent outside Yunkai, [[mero|Mero]] gropes Missandei and slaps her backside. That night, as Daenerys bathes, she learns that Missandei speaks nineteen languages. Daenerys switches to Dothraki to show how well she speaks it, and Missandei corrects her pronunciation. Then a man in Unsullied armor slips in and holds a knife to Missandei’s throat. He is [[daario-naharis|Daario Naharis]], come with the heads of his captains, and he lets Missandei go.',
      },
    ),
    onScreen(
      [30, 186],
      { it: 'Madre in ghiscari', en: 'Mother in Ghiscari' },
      {
        it: 'Missandei aspetta con [[daenerys-targaryen|Daenerys]] mentre [[jorah-mormont|ser Jorah]], [[grey-worm|Verme Grigio]] e [[daario-naharis|Daario]] entrano di nascosto a Yunkai, ed è con lei quando le porte della città si aprono e gli schiavi escono in massa. Comincia un discorso su come Daenerys la Non Bruciata li abbia liberati, ma Daenerys la interrompe: la libertà devono prendersela da soli. Gli schiavi liberati cominciano a gridare “mhysa”, e Missandei spiega che in antico ghiscari vuol dire “madre”. La folla solleva Daenerys.',
        en: 'Missandei waits with [[daenerys-targaryen|Daenerys]] while [[jorah-mormont|Ser Jorah]], [[grey-worm|Grey Worm]] and [[daario-naharis|Daario]] steal into Yunkai, and is with her when the city’s gates open and the slaves pour out. She begins a speech on how Daenerys the Unburnt has freed them, but Daenerys cuts in: they must take their freedom for themselves. The freed slaves start calling out “mhysa”, and Missandei explains that it is Old Ghiscari for “mother”. The crowd lifts Daenerys up.',
      },
    ),
    inBooks(
      [24, 171],
      { it: 'Libera in alto valyriano', en: 'Freed in High Valyrian' },
      {
        it: 'Missandei è la giovane schiava che fa da interprete a [[kraznys-mo-nakloz|Kraznys mo Nakloz]] quando lui mostra gli Immacolati a [[daenerys-targaryen|Daenerys]]. Daenerys finge di non conoscere l’alto valyriano e capisce ogni parola, insulti compresi. Quando compra tutti gli Immacolati della città, Daenerys libera Missandei e la prende al suo servizio, parlandole in alto valyriano e rivelando così di conoscere la lingua. Avvertita dei pericoli che la aspettano, Missandei risponde “valar morghulis”: tutti gli uomini devono morire.',
        en: 'Missandei is the young slave who interprets for [[kraznys-mo-nakloz|Kraznys mo Nakloz]] when he shows [[daenerys-targaryen|Daenerys]] the Unsullied. Daenerys pretends not to know High Valyrian and understands every word, insults included. When she buys every Unsullied in the city, Daenerys frees Missandei and takes her into her service, speaking to her in High Valyrian and so revealing that she knows the language. Warned of the dangers ahead, Missandei answers “valar morghulis”: all men must die.',
      },
    ),
  ],
  'kraznys-mo-nakloz': [
    inBooks(
      [24, 171],
      { it: 'L’affare del Buon Padrone', en: 'The Good Master’s bargain' },
      {
        it: 'Kraznys mo Nakloz mostra gli Immacolati a [[daenerys-targaryen|Daenerys]] tramite la sua interprete, [[missandei|Missandei]], e insulta Daenerys a piacimento, sicuro che lei non capisca il suo alto valyriano. I suoi eunuchi obbediscono a ogni ordine e quasi non sentono dolore, e ne ha ottomila da vendere. Accetta di venderli tutti a Daenerys, insieme ai ragazzi ancora in addestramento, in cambio delle tre navi di lei e di un drago, Drogon. Sulla piazza prende la catena del drago, ma Drogon non gli obbedisce. Daenerys dice che un drago non è uno schiavo e ordina “dracarys”: Drogon gli lancia una vampata in faccia, e gli Immacolati, ormai di Daenerys, non muovono un dito per lui. Al suo ordine uccidono gli schiavisti, e Kraznys muore sulla piazza.',
        en: 'Kraznys mo Nakloz shows [[daenerys-targaryen|Daenerys]] the Unsullied through his interpreter, [[missandei|Missandei]], and insults her freely, sure she cannot understand his High Valyrian. His eunuchs obey every command and hardly feel pain, and he has eight thousand to sell. He agrees to sell her all of them, and the boys still in training, for her three ships and a dragon, Drogon. On the plaza he takes the dragon’s chain, but Drogon will not obey him. Daenerys says that a dragon is no slave and commands “dracarys”: Drogon sends a jet of flame into his face, and the Unsullied, hers now, do not lift a finger for him. At her order they kill the slavers, and Kraznys dies on the plaza.',
      },
    ),
  ],
  'grey-worm': [
    onScreen(
      [25, 186],
      { it: 'Un nome fortunato', en: 'A lucky name' },
      {
        it: 'Liberati da [[daenerys-targaryen|Daenerys]], gli Immacolati scelgono uno di loro come capo, e Verme Grigio si fa avanti. [[missandei|Missandei]] spiega che i padroni davano a ogni Immacolato un nome fatto di un colore e di un parassita, per ricordargli cosa era. Daenerys dice loro di scegliersi nomi nuovi o di riprendere quelli con cui sono nati. Verme Grigio tiene il suo: il nome di nascita è maledetto, perché lo aveva quando è stato fatto schiavo, mentre Verme Grigio è un nome fortunato, quello che aveva il giorno in cui Daenerys Nata dalla Tempesta lo ha liberato.',
        en: 'Freed by [[daenerys-targaryen|Daenerys]], the Unsullied choose one of their own to lead them, and Grey Worm steps forward. [[missandei|Missandei]] explains that the masters gave every Unsullied a name made of a color and a vermin, to remind him what he was. Daenerys tells them to pick new names or take back the ones they were born with. Grey Worm keeps his: his birth name is cursed, the name he had when he was enslaved, while Grey Worm is lucky, the name he had the day Daenerys Stormborn set him free.',
      },
    ),
    onScreen(
      [29, 186],
      { it: 'Dentro Yunkai', en: 'Into Yunkai' },
      {
        it: 'Fuori Yunkai, Verme Grigio manda un uomo alle porte con il messaggio di [[daenerys-targaryen|Daenerys]]. Quando [[mero|Mero]] insulta Daenerys e [[missandei|Missandei]] nella tenda della regina, Verme Grigio si offre di tagliargli la lingua, e Daenerys lo ferma. Quando lei gli chiede se si fida di [[daario-naharis|Daario Naharis]], esita a dare un’opinione sua, poi risponde di sì. Quella notte entra in città da una porta secondaria con Daario e [[jorah-mormont|ser Jorah]], respinge le guardie con la lancia e torna illeso: Yunkai è presa.',
        en: 'Outside Yunkai, Grey Worm sends a man to the gates with [[daenerys-targaryen|Daenerys]]’s message. When [[mero|Mero]] insults her and [[missandei|Missandei]] in her tent, he offers to cut out the sellsword’s tongue, and Daenerys has him stand down. Asked whether he trusts [[daario-naharis|Daario Naharis]], he is slow to give an opinion of his own, then says he does. That night he slips into the city through a back gate with Daario and [[jorah-mormont|Ser Jorah]], fights off the guards with his spear and comes back unhurt: Yunkai is taken.',
      },
    ),
    inBooks(
      [25, 186],
      { it: 'Un nome per sempre', en: 'One name for good' },
      {
        it: 'Liberati da [[daenerys-targaryen|Daenerys]], gli Immacolati scelgono i propri ufficiali, e Verme Grigio è tra i più capaci. Viene affidato a [[jorah-mormont|ser Jorah]] perché impari a comandare. Gli Immacolati non hanno un nome proprio: ogni giorno ne ricevevano uno nuovo, estratto a sorte. Daenerys abolisce l’usanza, e Verme Grigio sceglie di tenere il nome che aveva il giorno in cui lei lo ha liberato.',
        en: 'Once [[daenerys-targaryen|Daenerys]] has freed the Unsullied, they choose their own officers, and Grey Worm is among the most able. He is placed under [[jorah-mormont|Ser Jorah]] to learn how to command. The Unsullied have no names of their own: each day they were given a new one, drawn by lot. Daenerys ends the custom, and Grey Worm chooses to keep the name he had the day she set him free.',
      },
    ),
  ],
  'grazdan-mo-eraz': [
    onScreen(
      [27, 186],
      { it: 'L’offerta dei Saggi Padroni', en: 'The Wise Masters’ offer' },
      {
        it: 'Portato su una lettiga nell’accampamento di [[daenerys-targaryen|Daenerys]], l’inviato di Yunkai viene annunciato da [[missandei|Missandei]] come uno dei Saggi Padroni. I draghi di Daenerys ringhiano quando le si avvicina troppo. Le offre oro e navi per portare il suo esercito a Westeros, se lascerà in pace Yunkai. Daenerys chiede invece che ogni schiavo sia liberato e pagato. L’inviato la avverte che Yunkai ha amici potenti, che ridurranno in schiavitù i sopravvissuti e lei con loro. I draghi gli soffiano contro, e lui se ne va senza i suoi forzieri d’oro.',
        en: 'Carried into [[daenerys-targaryen|Daenerys]]’s camp in a litter, the envoy of Yunkai is announced by [[missandei|Missandei]] as one of the Wise Masters. Daenerys’s dragons snarl when he comes too close. He offers gold and ships to carry her army to Westeros if she leaves Yunkai in peace. Daenerys wants every slave freed and paid instead. He warns her that Yunkai has powerful friends, who will enslave the survivors and her with them. The dragons hiss at him, and he leaves without his chests of gold.',
      },
    ),
    inBooks(
      [27, 186],
      { it: 'Il tokar in fiamme', en: 'A burning tokar' },
      {
        it: 'L’inviato dei Saggi Padroni arriva all’accampamento di [[daenerys-targaryen|Daenerys]] fuori Yunkai con uno scrigno d’oro, perché lei lasci in pace la città. Minaccia che Yunkai ridurrà in schiavitù i sopravvissuti, e che lei renderebbe bene come schiava di piacere in una delle Città Libere. A un ordine di Daenerys, Drogon dà fuoco al tokar dell’inviato, che protesta: gli era stato promesso un salvacondotto. Yunkai riempirà il cielo di frecce, dice: non è difficile uccidere un drago. Più difficile che uccidere uno schiavista, risponde Daenerys, e lo rimanda indietro con il suo oro.',
        en: 'The envoy of the Wise Masters comes to [[daenerys-targaryen|Daenerys]]’s camp outside Yunkai with a chest of gold, to make her leave the city alone. He warns that Yunkai will enslave the survivors, and that she would fetch a good price as a bedslave in one of the Free Cities. At her word, Drogon sets his tokar alight, and he protests that he was promised safe conduct. Yunkai will fill the air with arrows, he says: it is not so hard to kill a dragon. Harder than to kill a slaver, Daenerys answers, and sends him away with his gold.',
      },
    ),
  ],
  'mero': [
    onScreen(
      [28, 186],
      { it: 'Un’offerta rifiutata', en: 'An offer refused' },
      {
        it: 'Mero arriva nella tenda di [[daenerys-targaryen|Daenerys]] fuori Yunkai con l’altro capitano dei Secondi Figli e con il loro luogotenente, [[daario-naharis|Daario Naharis]]. Invita Daenerys a sedersi sulle sue ginocchia, la paragona a una prostituta che conosce a Lys e palpeggia [[missandei|Missandei]]. Rifiuta l’offerta di passare con Daenerys e se ne va con una botte di vino in regalo. Tornati al campo, i capitani decidono di uccidere Daenerys, e una schiava distribuisce tre monete: quella di Braavos tocca a Daario. Quella notte Daario porta a Daenerys le teste di Mero e dell’altro capitano.',
        en: 'Mero comes to [[daenerys-targaryen|Daenerys]]’s tent outside Yunkai with the other captain of the Second Sons and their lieutenant, [[daario-naharis|Daario Naharis]]. He invites her to sit on his lap, compares her to a whore he knows in Lys and gropes [[missandei|Missandei]]. He turns down Daenerys’s offer to change sides and leaves with a barrel of her wine. Back in camp the captains decide to kill Daenerys, and a slave hands out three coins: the Braavosi one goes to Daario. That night Daario brings Daenerys the heads of Mero and the other captain.',
      },
    ),
    inBooks(
      [28, 186],
      { it: 'Un carro di vino', en: 'A wagon of wine' },
      {
        it: 'Mero è il capitano dei Secondi Figli, una delle due compagnie di mercenari che Yunkai ha assoldato contro [[daenerys-targaryen|Daenerys]]. All’accampamento di Daenerys ride dell’offerta di passare con lei, ma accetta un carro di vino da portare ai suoi uomini. Appena se ne è andato, Daenerys dice ai suoi comandanti che attaccheranno quella notte stessa, quando nessuno dei difensori di Yunkai se lo aspetta. Con i Corvi della Tempesta dalla parte di Daenerys e i Secondi Figli troppo ubriachi per combattere, l’esercito di lei vince facilmente.',
        en: 'Mero is the captain of the Second Sons, one of the two sellsword companies Yunkai has hired against [[daenerys-targaryen|Daenerys]]. At her camp he laughs at her offer to join her, but accepts a wagonload of wine to take back to his men. Once he has gone, she tells her commanders that they will attack that very night, when none of Yunkai’s defenders expect it. With the Stormcrows on her side and the Second Sons too drunk to fight, her army wins easily.',
      },
    ),
  ],
  'daario-naharis': [
    onScreen(
      [28, 186],
      { it: 'La moneta di Braavos', en: 'The Braavosi coin' },
      {
        it: 'Daario Naharis arriva nella tenda di [[daenerys-targaryen|Daenerys]] come luogotenente dei capitani dei Secondi Figli, tra cui [[mero|Mero]]. Quando Daenerys dice di avere diecimila Immacolati, lui le ricorda che sono ottomila. Tornati al campo, i capitani decidono di farla uccidere, e Daario pesca la moneta di Braavos che fa di lui l’assassino. Quella notte entra nella tenda di Daenerys con l’armatura di un Immacolato, punta un coltello alla gola di [[missandei|Missandei]], poi mostra a Daenerys le teste dei suoi capitani. Le giura i Secondi Figli, la sua spada, la sua vita e il suo cuore.',
        en: 'Daario Naharis comes to [[daenerys-targaryen|Daenerys]]’s tent as lieutenant to the captains of the Second Sons, [[mero|Mero]] among them. When she claims ten thousand Unsullied, he reminds her that she has eight. Back in camp the captains decide to have her killed, and Daario draws the Braavosi coin that makes him the killer. That night he slips into her tent in Unsullied armor, holds a knife to [[missandei|Missandei]]’s throat, then shows Daenerys the heads of his captains. He swears her the Second Sons, his sword, his life and his heart.',
      },
    ),
    onScreen(
      [29, 186],
      { it: 'Lo stendardo di Yunkai', en: 'Yunkai’s flag' },
      {
        it: 'Daario propone un piano a [[daenerys-targaryen|Daenerys]]: pochi uomini possono entrare a Yunkai da una porta secondaria poco sorvegliata e aprire le porte principali al suo esercito. [[jorah-mormont|Ser Jorah]] diffida del piano e di lui, ma [[grey-worm|Verme Grigio]] dice di fidarsi di Daario. Quella notte i tre si fanno strada tra più guardie di quante Daario si aspettasse. Jorah e Verme Grigio tornano per primi; poi arriva Daario, che si inginocchia e depone davanti a Daenerys lo stendardo strappato di Yunkai: la città è sua.',
        en: 'Daario puts a plan to [[daenerys-targaryen|Daenerys]]: a few men can get into Yunkai through a lightly guarded back gate and open the main gates to her army. [[jorah-mormont|Ser Jorah]] distrusts both the plan and him, but [[grey-worm|Grey Worm]] says he trusts Daario. That night the three of them fight their way through more guards than Daario expected. Jorah and Grey Worm come back first; then Daario arrives, kneels and lays Yunkai’s torn flag before Daenerys: the city is hers.',
      },
    ),
    inBooks(
      [28, 186],
      { it: 'Le teste di due capitani', en: 'The heads of two captains' },
      {
        it: 'Daario Naharis è uno dei tre capitani dei Corvi della Tempesta, una compagnia di mercenari assoldata per difendere Yunkai. Alla trattativa [[daenerys-targaryen|Daenerys]] offre loro oro e bottino perché cambino parte; [[prendahl-na-ghezn|Prendahl na Ghezn]] rifiuta, ma Daario le sorride mentre se ne vanno. Mentre la compagnia discute l’offerta, Daario uccide Prendahl e Sallor il Calvo e porta le loro teste a Daenerys, come prova che i Corvi della Tempesta passano con lei. [[jorah-mormont|Ser Jorah]] la avverte di non fidarsi di Daario, ma i Corvi della Tempesta la aiutano a vincere la battaglia.',
        en: 'Daario Naharis is one of the three captains of the Stormcrows, a sellsword company hired to defend Yunkai. At the parley [[daenerys-targaryen|Daenerys]] offers them gold and plunder to change sides; [[prendahl-na-ghezn|Prendahl na Ghezn]] refuses, but Daario smiles at her as they leave. While the company argues over the offer, Daario kills Prendahl and Sallor the Bald, and brings their heads to Daenerys as proof that the Stormcrows are hers. [[jorah-mormont|Ser Jorah]] warns her not to trust Daario, but the Stormcrows help her win the battle.',
      },
    ),
  ],
  'prendahl-na-ghezn': [
    inBooks(
      [28, 186],
      {
        it: 'La risposta dei Corvi della Tempesta',
        en: 'The Stormcrows’ answer',
      },
      {
        it: 'Prendahl na Ghezn, un ghiscariano, è uno dei tre capitani dei Corvi della Tempesta, assoldati da Yunkai contro [[daenerys-targaryen|Daenerys]]. I tre sono i primi a presentarsi alla trattativa fuori città. Daenerys offre loro oro e bottino perché passino con lei, e Prendahl respinge l’offerta. Tornati al loro accampamento, i Corvi della Tempesta mettono la scelta ai voti di ogni uomo. Mentre discutono, [[daario-naharis|Daario Naharis]] uccide Prendahl e l’altro capitano, Sallor il Calvo, e porta le due teste a Daenerys.',
        en: 'Prendahl na Ghezn, a Ghiscari, is one of the three captains of the Stormcrows, hired by Yunkai against [[daenerys-targaryen|Daenerys]]. The three are the first to come to her parley outside the city. She offers them gold and plunder to join her, and Prendahl rebuffs her. Back in their camp the Stormcrows put the question to every man. While they argue, [[daario-naharis|Daario Naharis]] kills Prendahl and his fellow captain Sallor the Bald, and brings both heads to Daenerys.',
      },
    ),
  ],
} satisfies Record<string, Timeline<Story>>
