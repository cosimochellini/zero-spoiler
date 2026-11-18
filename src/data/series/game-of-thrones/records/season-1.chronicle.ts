import type { Dated, LocalizedText, Story, Timeline } from '~/data/types'

/** Where a story sits: the episode, then the site chapter. */
type At = [episode: number, chapter: number]

/**
 * A story both media tell the same way: the episode and the chapter each
 * complete it, and both vouch for the pair.
 */
function inBoth(
  [episode, chapter]: At,
  title: LocalizedText,
  body: LocalizedText,
): Dated<Story> {
  return { episode, chapter, value: { title, body } }
}

/** A story the show alone tells, or tells its own way; the chapter only orders it. */
function onScreen(
  [episode, chapter]: At,
  title: LocalizedText,
  body: LocalizedText,
): Dated<Story> {
  return { episode, chapter, source: 'episode', value: { title, body } }
}

/** A story the books alone tell, or tell their own way; the episode only orders it. */
function inBooks(
  [episode, chapter]: At,
  title: LocalizedText,
  body: LocalizedText,
): Dated<Story> {
  return { episode, chapter, source: 'chapter', value: { title, body } }
}

/**
 * Season 1 and *A Game of Thrones*: the stories of the Essos cast (#1360),
 * each filed at the first episode and the first site chapter by whose end the
 * reader knows all of it. The show and the books part over who wounds Drogo,
 * who breaks Viserys’s arm and whose whip brings him down, so most stories
 * come in two versions, one per medium. A book-only story sits at the episode
 * that adapts its chapter, or later when a story links a character the show
 * meets later; Aggo’s are all at episode 11, the show’s gate for him.
 * Jaqen H’ghar, Rorge and Biter open at episode 12 and chapter 79, past the
 * stage, and have no chronicle yet.
 */
export const season1Chronicles = {
  'daenerys-targaryen': [
    onScreen(
      [1, 4],
      { it: 'Le nozze a Pentos', en: 'The wedding in Pentos' },
      {
        it: 'Daenerys vive a Pentos con il fratello [[viserys-targaryen|Viserys]], ospiti del magistro [[illyrio-mopatis|Illyrio]]. Viserys l’ha promessa a [[drogo|khal Drogo]] in cambio di un esercito con cui riprendersi il Trono di Spade. Drogo la osserva senza scendere da cavallo e se ne va. Lei dice di non volerlo sposare, e Viserys risponde che pur di avere l’esercito la lascerebbe a tutti gli uomini di Drogo, e ai loro cavalli. Alle nozze riceve dei libri da [[jorah-mormont|ser Jorah Mormont]], tre uova di drago pietrificate da Illyrio e una giumenta bianca da Drogo. Al tramonto, sulla spiaggia, Drogo consuma il matrimonio e lei è terrorizzata.',
        en: 'Daenerys lives in Pentos with her brother [[viserys-targaryen|Viserys]], guests of Magister [[illyrio-mopatis|Illyrio]]. Viserys has promised her to [[drogo|Khal Drogo]] in exchange for an army to retake the Iron Throne. Drogo looks her over without dismounting and rides away. She says she does not want to marry him, and Viserys answers that he would let all of Drogo’s men have her, and their horses too, to get his army. At the wedding she receives books from [[jorah-mormont|Ser Jorah Mormont]], three dragon eggs turned to stone from Illyrio and a white mare from Drogo. At sunset, on the shore, Drogo consummates the marriage, and she is terrified.',
      },
    ),
    inBooks(
      [1, 4],
      { it: 'Presentata al khal', en: 'Shown to the khal' },
      {
        it: 'A Pentos due serve del magistro [[illyrio-mopatis|Illyrio]] preparano Daenerys per una festa, e il fratello [[viserys-targaryen|Viserys]] la squadra e la trova troppo magra. Durante il tragitto verso la dimora di [[drogo|khal Drogo]], Illyrio assicura che nel Westeros in molti vogliono Viserys come re, ma Daenerys non si fida di lui. Tra gli ospiti Illyrio indica [[jorah-mormont|ser Jorah Mormont]], un cavaliere fuggito dopo aver venduto dei bracconieri a un mercante di schiavi. Daenerys dice di non voler sposare Drogo. Viserys risponde che la lascerebbe a tutti i quarantamila uomini di Drogo, e anche ai cavalli, pur di avere il suo esercito. Lei si asciuga le lacrime e si prepara a incontrare il khal.',
        en: 'In Pentos, two of Magister [[illyrio-mopatis|Illyrio]]’s servants prepare Daenerys for a feast, and her brother [[viserys-targaryen|Viserys]] looks her over and finds her too thin. On the way to [[drogo|Khal Drogo]]’s manse, Illyrio claims that many in Westeros want Viserys as their king, but Daenerys does not trust him. Among the guests Illyrio points out [[jorah-mormont|Ser Jorah Mormont]], a knight who fled after selling poachers to a slaver. Daenerys says she does not want to marry Drogo. Viserys answers that he would let all forty thousand of Drogo’s men have her, and the horses too, to get his army. She dries her tears and stands up to meet the khal.',
      },
    ),
    inBooks(
      [2, 12],
      { it: 'Le nozze fuori dalle mura', en: 'The wedding outside the walls' },
      {
        it: 'Daenerys sposa [[drogo|khal Drogo]] fuori dalle mura di Pentos, durante una festa in cui un uomo viene ucciso per una donna. Il fratello [[viserys-targaryen|Viserys]] le regala tre ancelle: [[irri|Irri]] e [[jhiqui|Jhiqui]], che sono dothraki, e [[doreah|Doreah]], che viene da Lys. [[jorah-mormont|Ser Jorah]] le dona dei libri di canzoni e racconti dei Sette Regni, [[illyrio-mopatis|Illyrio]] tre uova di drago pietrificate che vengono dalle terre oltre Asshai. Come vuole l’usanza, lei rifiuta le armi dei cavalieri di sangue, che passano a Drogo. Il dono di Drogo è una puledra argentata. Quella notte lui è gentile con lei e, quando glielo chiede, lei risponde di sì.',
        en: 'Daenerys marries [[drogo|Khal Drogo]] outside the walls of Pentos, at a feast where a man is killed over a woman. Her brother [[viserys-targaryen|Viserys]] gives her three handmaidens: [[irri|Irri]] and [[jhiqui|Jhiqui]], who are Dothraki, and [[doreah|Doreah]], who comes from Lys. [[jorah-mormont|Ser Jorah]] gives her books of songs and tales of the Seven Kingdoms, and [[illyrio-mopatis|Illyrio]] three petrified dragon eggs from the lands beyond Asshai. As custom requires, she refuses the bloodriders’ weapons, which go to Drogo. Drogo’s own gift is a silver filly. That night he is gentle with her, and when he asks, she says yes.',
      },
    ),
    onScreen(
      [2, 12],
      { it: 'Le lezioni di Doreah', en: 'Doreah’s lessons' },
      {
        it: 'Il khalasar lascia Pentos e si dirige a est. Daenerys ha paura del marito, e le notti con lui le fanno male. [[jorah-mormont|Ser Jorah]] le dice che col tempo sarà più facile. L’ancella [[doreah|Doreah]] le racconta di una seconda luna che si spaccò come un uovo e da cui uscirono i draghi. Daenerys le chiede di insegnarle a dare piacere a [[drogo|Drogo]], e Doreah le dice che non è una schiava e non deve fare l’amore come una schiava. La volta seguente Daenerys prende l’iniziativa, gli parla in dothraki, e Drogo risponde.',
        en: 'The khalasar leaves Pentos and heads east. Daenerys is afraid of her husband, and her nights with him hurt her. [[jorah-mormont|Ser Jorah]] tells her it will get easier. Her handmaiden [[doreah|Doreah]] tells her of a second moon that cracked like an egg and poured out dragons. Daenerys asks Doreah to teach her to please [[drogo|Drogo]], and Doreah tells her she is no slave and should not make love like one. The next time, Daenerys takes the lead, speaking to him in Dothraki, and Drogo responds.',
      },
    ),
    inBooks(
      [3, 24],
      { it: 'Il viaggio verso est', en: 'The ride east' },
      {
        it: 'Durante il lungo viaggio verso est Daenerys diventa più forte e, dopo una lezione di [[doreah|Doreah]], la notte è lei a guidare [[drogo|Drogo]]. Quando il fratello [[viserys-targaryen|Viserys]] la aggredisce, la frusta di [[jhogo|Jhogo]] lo prende alla gola e lo trascina a terra. Daenerys gli fa dire da [[irri|Irri]] di lasciarlo andare. [[jorah-mormont|Ser Jorah]] prende il cavallo di Viserys, che deve proseguire a piedi, e poi dice a Daenerys che suo fratello sarebbe un pessimo re. Prima della fine del viaggio Irri è la prima ad accorgersi che Daenerys aspetta un bambino.',
        en: 'On the long ride east Daenerys grows stronger, and after a lesson from [[doreah|Doreah]] she takes the lead with [[drogo|Drogo]] at night. When her brother [[viserys-targaryen|Viserys]] attacks her, [[jhogo|Jhogo]]’s whip catches him by the throat and pulls him to the ground. Daenerys has [[irri|Irri]] tell him to let go. [[jorah-mormont|Ser Jorah]] takes Viserys’s horse, so Viserys has to walk, and later tells Daenerys that her brother would make a poor king. Before the ride is over, Irri is the first to notice that Daenerys is with child.',
      },
    ),
    onScreen(
      [3, 24],
      { it: 'Un ordine della khaleesi', en: 'An order from the khaleesi' },
      {
        it: 'Daenerys ferma il khalasar per un capriccio, e il fratello [[viserys-targaryen|Viserys]], che non accetta ordini da lei, la minaccia. La frusta di [[rakharo|Rakharo]] lo prende alla gola. Daenerys gli risparmia la vita, ma Viserys perde il cavallo e deve tornare a piedi alla colonna. Più tardi [[irri|Irri]] le rivela che è incinta. Daenerys dà la notizia a [[drogo|Drogo]] e gli dice che secondo lei sarà un maschio.',
        en: 'Daenerys halts the khalasar on a whim, and her brother [[viserys-targaryen|Viserys]], who will not take orders from her, threatens her. [[rakharo|Rakharo]]’s whip catches him by the throat. Daenerys spares him, but Viserys loses his horse and has to walk back to the column. Later [[irri|Irri]] tells her that she is pregnant. Daenerys gives the news to [[drogo|Drogo]] and tells him she thinks it will be a boy.',
      },
    ),
    inBoth(
      [4, 37],
      { it: 'La cintura', en: 'The belt' },
      {
        it: 'Il khalasar arriva a Vaes Dothrak. Daenerys manda [[doreah|Doreah]] a invitare a cena il fratello [[viserys-targaryen|Viserys]]. Lui prende l’invito per un ordine e, furioso, trascina Doreah da lei. Quando Viserys la aggredisce, Daenerys lo colpisce in faccia con una pesante cintura. Poi lo avverte che, se alzerà ancora una mano su di lei, perderà le mani.',
        en: 'The khalasar reaches Vaes Dothrak. Daenerys sends [[doreah|Doreah]] to invite her brother [[viserys-targaryen|Viserys]] to supper. He takes the invitation for an order and, in a rage, drags Doreah back to her. When Viserys attacks her, Daenerys strikes him in the face with a heavy belt. She then warns him that if he raises a hand to her again, he will lose his hands.',
      },
    ),
    inBoth(
      [6, 47],
      {
        it: 'Lo stallone che monta il mondo',
        en: 'The stallion who mounts the world',
      },
      {
        it: 'Davanti alle vecchie dosh khaleen di Vaes Dothrak, Daenerys mangia il cuore crudo di uno stallone. Le donne annunciano che suo figlio sarà lo stallone che monta il mondo, e lei lo chiama Rhaego. A una festa il fratello [[viserys-targaryen|Viserys]], ubriaco, sguaina la spada e reclama la corona che gli era stata promessa, minacciando lei e il bambino che porta in grembo. [[drogo|Drogo]] gli versa sulla testa dell’oro fuso. Daenerys lo guarda morire: non era un drago, perché il fuoco non può uccidere un drago.',
        en: 'Before the crones of the dosh khaleen in Vaes Dothrak, Daenerys eats the raw heart of a stallion. The crones declare that her son will be the stallion who mounts the world, and she names him Rhaego. At a feast her brother [[viserys-targaryen|Viserys]], drunk, draws a sword and demands the crown he was promised, threatening her and her unborn child. [[drogo|Drogo]] pours molten gold over his head. Daenerys watches him die: he was no dragon, because fire cannot kill a dragon.',
      },
    ),
    inBoth(
      [7, 55],
      { it: 'Il vino avvelenato', en: 'The poisoned wine' },
      {
        it: 'In un mercato di Vaes Dothrak un mercante di vino insiste perché Daenerys assaggi il suo vino migliore. [[jorah-mormont|Ser Jorah]] le impedisce di berlo e il mercante, che cerca di fuggire, viene catturato: il vino è avvelenato. [[drogo|Drogo]] permette a Jorah di scegliere un cavallo qualsiasi della sua mandria. Poi giura che porterà il khalasar oltre l’acqua avvelenata e conquisterà per il figlio il Trono di Spade. Il mercante lascia la città a piedi, dietro il cavallo di Daenerys.',
        en: 'In a market of Vaes Dothrak a wine merchant presses Daenerys to taste his best wine. [[jorah-mormont|Ser Jorah]] stops her from drinking it, and the merchant tries to flee and is caught: the wine is poisoned. [[drogo|Drogo]] lets Jorah choose any horse from his herds. Then he swears to take his khalasar across the poison water and win the Iron Throne for his son. The merchant leaves the city on foot, behind Daenerys’s horse.',
      },
    ),
    onScreen(
      [8, 62],
      { it: 'Il villaggio lhazareen', en: 'The Lhazareen village' },
      {
        it: 'Per pagarsi le navi, il khalasar di Drogo assale un villaggio lhazareen e fa schiavi. Daenerys ordina di fermare gli stupri e reclama le donne per sé. I guerrieri protestano con [[drogo|Drogo]], che dà ragione a lei. [[mago|Mago]] la chiama puttana straniera e sfida il khal. Drogo lo uccide, ma resta ferito al petto. Daenerys insiste perché la ferita sia curata e si affida a una delle donne che ha salvato, la sacerdotessa [[mirri-maz-duur|Mirri Maz Duur]], anche se i cavalieri di sangue di Drogo la chiamano maegi.',
        en: 'To pay for ships, Drogo’s khalasar raids a Lhazareen village and takes slaves. Daenerys orders the rapes stopped and claims the women as her own. The riders complain to [[drogo|Drogo]], who tells them the women are hers. [[mago|Mago]] calls her a foreign whore and challenges the khal. Drogo kills him, but takes a wound to the chest. Daenerys insists it be treated and trusts one of the women she saved, the godswife [[mirri-maz-duur|Mirri Maz Duur]], although Drogo’s bloodriders call her a maegi.',
      },
    ),
    inBooks(
      [8, 62],
      { it: 'La ragazza reclamata', en: 'The girl she claims' },
      {
        it: 'Il khalasar di Drogo sconfigge un khalasar rivale e mette a sacco una città lhazareen, e nei combattimenti [[drogo|Drogo]] resta ferito. Daenerys fa fermare dai suoi cavalieri lo stupro di una ragazza e la reclama per sé; Quaro le dice che la ragazza dovrebbe sentirsi onorata. [[mago|Mago]], a cui l’ha tolta, si lamenta con Haggo, e Drogo gli manda a dire di trovarsene un’altra. Una sacerdotessa lhazareen, [[mirri-maz-duur|Mirri Maz Duur]], si offre di curare la ferita. Su insistenza di Daenerys, Drogo accetta, anche se i suoi la chiamano maegi.',
        en: 'Drogo’s khalasar defeats a rival khalasar and sacks a Lhazareen town, and [[drogo|Drogo]] is wounded in the fighting. Daenerys has her riders stop the rape of a girl and claims her; Quaro tells her the girl should feel honored. [[mago|Mago]], from whom she took the girl, complains to Haggo, and Drogo sends word that he should find another. A Lhazareen godswife, [[mirri-maz-duur|Mirri Maz Duur]], offers to treat the wound. At Daenerys’s urging Drogo accepts, though his men call her a maegi.',
      },
    ),
    inBoth(
      [9, 65],
      { it: 'La magia del sangue', en: 'Blood magic' },
      {
        it: 'La ferita di [[drogo|Drogo]] si infetta, e lui cade da cavallo. [[jorah-mormont|Ser Jorah]] avverte Daenerys che alla morte di Drogo il khalasar si dividerà e le consiglia di fuggire. Lei rifiuta e chiede a [[mirri-maz-duur|Mirri Maz Duur]] di salvarlo. Mirri dice che può farlo solo con la magia del sangue, e che una vita deve pagare per la sua. Uccide lo stallone di Drogo nella tenda e comincia il rito. Fuori, [[qotho|Qotho]] si rivolta contro Daenerys e contro il rito, e Jorah lo uccide. Cominciano le doglie, e Jorah porta Daenerys nella tenda.',
        en: '[[drogo|Drogo]]’s wound festers, and he falls from his horse. [[jorah-mormont|Ser Jorah]] warns Daenerys that the khalasar will break apart when Drogo dies and urges her to flee. She refuses and asks [[mirri-maz-duur|Mirri Maz Duur]] to save him. Mirri says that only blood magic can, and that a life must pay for his. She kills Drogo’s stallion in his tent and begins the rite. Outside, [[qotho|Qotho]] turns on Daenerys and the rite, and Jorah kills him. Daenerys’s labor begins, and Jorah carries her into the tent.',
      },
    ),
    inBooks(
      [10, 69],
      { it: 'Ciò che la maegi ha preso', en: 'What the maegi took' },
      {
        it: 'Daenerys si sveglia e scopre che suo figlio è nato morto. [[drogo|Drogo]] è vivo, ma non può muoversi né parlare. [[mirri-maz-duur|Mirri Maz Duur]] le dice che è la sua vendetta per la sua città e la sua gente, e Daenerys la fa legare. Gran parte del khalasar se n’è andata. Daenerys viene a sapere che [[mago|Mago]] ha preso e violentato la ragazza che lei aveva salvato, [[eroeh|Eroeh]], e che gli uomini del suo nuovo khal l’hanno uccisa; giura che Mago e il suo khal la pagheranno. Quella notte soffoca Drogo con un cuscino.',
        en: 'Daenerys wakes to learn that her son was born dead. [[drogo|Drogo]] lives, but cannot move or speak. [[mirri-maz-duur|Mirri Maz Duur]] tells her it was her revenge for her town and her people, and Daenerys has her bound. Most of the khalasar has gone. Daenerys learns that [[mago|Mago]] seized and raped the girl she saved, [[eroeh|Eroeh]], and that the men of his new khal killed her; she swears that Mago and his khal will pay for it. That night she smothers Drogo with a pillow.',
      },
    ),
    inBoth(
      [10, 73],
      { it: 'Fuoco e sangue', en: 'Fire and blood' },
      {
        it: 'Il figlio è morto e Daenerys ha soffocato con le proprie mani [[drogo|Drogo]], rimasto vivo ma vuoto. Gli prepara la pira funebre. Fa mettere sulla pira le sue tre uova di drago e ci fa legare [[mirri-maz-duur|Mirri Maz Duur]]. [[jorah-mormont|Ser Jorah]], che teme che voglia morire, la supplica di non farlo. Lei accende la pira ed entra tra le fiamme. All’alba il fuoco si spegne, e Daenerys siede illesa tra le ceneri con tre draghi appena nati. Jorah e i cavalieri rimasti si inginocchiano davanti a lei.',
        en: 'Her son is dead, and Daenerys has smothered [[drogo|Drogo]], left alive but empty, with her own hands. She builds his funeral pyre. She has her three dragon eggs placed on it and [[mirri-maz-duur|Mirri Maz Duur]] bound to it. [[jorah-mormont|Ser Jorah]], afraid that she means to die, begs her not to. She lights the pyre and walks into the flames. At dawn the fire dies down, and she sits unharmed in the ashes with three newly hatched dragons. Jorah and the riders who stayed kneel to her.',
      },
    ),
  ],
  'viserys-targaryen': [
    inBoth(
      [1, 4],
      { it: 'Il patto del re mendicante', en: 'The beggar king’s bargain' },
      {
        it: 'Viserys e la sorella [[daenerys-targaryen|Daenerys]] vivono in esilio a Pentos, ospiti del magistro [[illyrio-mopatis|Illyrio]]. Viserys si considera il re legittimo e vuole riprendersi il trono del padre. Tramite Illyrio ha promesso Daenerys a [[drogo|khal Drogo]], che guida quarantamila cavalieri, in cambio di un esercito. Quando Daenerys dice di non volere quelle nozze, lui le risponde che pur di avere l’esercito la lascerebbe a tutti gli uomini di Drogo, e anche ai loro cavalli.',
        en: 'Viserys and his sister [[daenerys-targaryen|Daenerys]] live in exile in Pentos, as guests of Magister [[illyrio-mopatis|Illyrio]]. Viserys considers himself the rightful king and means to take back his father’s throne. Through Illyrio he has promised Daenerys to [[drogo|Khal Drogo]], who leads forty thousand riders, in exchange for an army. When Daenerys says she does not want the marriage, he tells her that to get his army he would let every one of Drogo’s men have her, and their horses too.',
      },
    ),
    inBooks(
      [2, 12],
      { it: 'Impaziente di avere l’esercito', en: 'Impatient for an army' },
      {
        it: 'Nei giorni prima delle nozze Viserys continua a chiedere quando [[drogo|Drogo]] gli darà l’esercito. [[illyrio-mopatis|Illyrio]] e [[jorah-mormont|ser Jorah]], ora al suo seguito, gli spiegano che prima il khal deve portare la sposa nella città sacra dei Dothraki. Alle nozze Viserys siede più in basso dei cavalieri di sangue del khal, e se ne risente. Il suo dono a [[daenerys-targaryen|Daenerys]] sono tre ancelle, tra cui [[doreah|Doreah]], con cui lascia intendere di essere andato a letto. Dice alla sorella di tenere contento il marito.',
        en: 'In the days before the wedding Viserys keeps asking when [[drogo|Drogo]] will give him his army. [[illyrio-mopatis|Illyrio]] and [[jorah-mormont|Ser Jorah]], now in his company, tell him that the khal must first take his bride to the sacred city of the Dothraki. At the wedding Viserys is seated below the khal’s bloodriders, and he resents it. His gift to [[daenerys-targaryen|Daenerys]] is three handmaidens, among them [[doreah|Doreah]], whom he hints he has bedded. He tells his sister to keep her husband pleased.',
      },
    ),
    onScreen(
      [2, 12],
      { it: 'Al seguito del khalasar', en: 'Riding with the khalasar' },
      {
        it: 'Il khalasar di [[drogo|Drogo]] lascia Pentos verso est, e Viserys va con lui. [[jorah-mormont|Ser Jorah Mormont]], che gli ha giurato fedeltà alle nozze, gli consiglia di aspettare il ritorno del khal nella casa di Illyrio, ma Viserys vuole restare accanto a Drogo finché non avrà il suo esercito. Jorah gli racconta di essere fuggito dai Sette Regni perché [[eddard-stark|Eddard Stark]] voleva giustiziarlo per aver venduto dei bracconieri come schiavi. Viserys ride e dice che sotto il suo regno cose simili non saranno punite.',
        en: '[[drogo|Drogo]]’s khalasar leaves Pentos for the east, and Viserys goes with it. [[jorah-mormont|Ser Jorah Mormont]], who swore him fealty at the wedding, advises him to wait for the khal’s return at Illyrio’s house, but Viserys means to stay at Drogo’s side until he has his army. Jorah tells him he fled the Seven Kingdoms because [[eddard-stark|Eddard Stark]] meant to execute him for selling poachers into slavery. Viserys laughs and says such things will not be punished under his reign.',
      },
    ),
    inBoth(
      [3, 24],
      { it: 'Costretto a camminare', en: 'Made to walk' },
      {
        it: 'Durante il viaggio verso est Viserys minaccia la sorella [[daenerys-targaryen|Daenerys]]. La frusta di una delle guardie di Daenerys lo prende alla gola e lo trascina a terra. La guardia chiede se deve ucciderlo, e Daenerys gli risparmia la vita. Viserys ordina a [[jorah-mormont|ser Jorah]] di intervenire contro di lei, e Jorah non gli obbedisce. Gli viene tolto il cavallo, e deve proseguire a piedi.',
        en: 'On the ride east Viserys threatens his sister [[daenerys-targaryen|Daenerys]]. The whip of one of her guards catches him by the throat and drags him down. The guard asks whether he should kill him, and Daenerys spares him. Viserys orders [[jorah-mormont|Ser Jorah]] to act against her, and Jorah does not obey. His horse is taken from him, and he has to go on foot.',
      },
    ),
    inBoth(
      [4, 37],
      { it: 'L’invito a cena', en: 'The invitation to supper' },
      {
        it: 'A Vaes Dothrak la sorella [[daenerys-targaryen|Daenerys]] manda [[doreah|Doreah]] a invitare Viserys a cena. Lui prende l’invito per un ordine e trascina Doreah dalla sorella, furioso. Quando aggredisce Daenerys, lei lo colpisce in faccia con una pesante cintura. Daenerys lo avverte che, se alzerà di nuovo una mano su di lei, perderà le mani. Viserys resta a guardarla, stordito.',
        en: 'In Vaes Dothrak his sister [[daenerys-targaryen|Daenerys]] sends [[doreah|Doreah]] to invite Viserys to supper. He takes the invitation for an order and, in a rage, drags Doreah back to his sister. When he attacks Daenerys, she strikes him across the face with a heavy belt. Daenerys warns him that if he raises a hand to her again, he will lose his hands. Viserys is left staring at her, stunned.',
      },
    ),
    inBoth(
      [6, 47],
      { it: 'Una corona d’oro', en: 'A golden crown' },
      {
        it: 'Viserys è stanco di aspettare l’esercito. A una festa, ubriaco, sguaina la spada, cosa proibita nella città sacra, e reclama ciò che gli era stato promesso, minacciando la sorella [[daenerys-targaryen|Daenerys]] e il bambino che porta in grembo. [[drogo|Khal Drogo]] gli promette una corona d’oro che farà tremare chi la guarda. I cavalieri di sangue afferrano Viserys e uno gli spezza il braccio. Drogo fonde la sua cintura di medaglioni in una pentola e gli versa l’oro sulla testa. Viserys muore.',
        en: 'Viserys is tired of waiting for his army. Drunk at a feast, he draws a sword, which is forbidden in the sacred city, and demands what he was promised, threatening his sister [[daenerys-targaryen|Daenerys]] and her unborn child. [[drogo|Khal Drogo]] promises him a golden crown that men will tremble to behold. The bloodriders seize Viserys and one breaks his arm. Drogo melts his medallion belt in a pot and pours the gold over his head. Viserys dies.',
      },
    ),
  ],
  'drogo': [
    onScreen(
      [1, 4],
      {
        it: 'Una sposa dalle terre del tramonto',
        en: 'A bride from the sunset lands',
      },
      {
        it: 'Drogo, un khal a capo di quarantamila cavalieri dothraki, va a vedere la sposa che gli viene offerta, [[daenerys-targaryen|Daenerys]], nella dimora del magistro [[illyrio-mopatis|Illyrio]] a Pentos. La osserva dall’alto del cavallo e se ne va senza una parola; Illyrio assicura al fratello di lei, [[viserys-targaryen|Viserys]], che se il khal non fosse soddisfatto lo avrebbe fatto capire. Alle nozze alcuni uomini muoiono in duello. Il dono di Drogo alla sposa è una giumenta bianca. Al tramonto la porta sulla spiaggia e consuma il matrimonio.',
        en: 'Drogo, a khal at the head of forty thousand Dothraki riders, comes to see the bride he is offered, [[daenerys-targaryen|Daenerys]], at Magister [[illyrio-mopatis|Illyrio]]’s house in Pentos. He looks her over from his horse and rides away without a word; Illyrio tells her brother [[viserys-targaryen|Viserys]] that the khal would have made it known if he were displeased. At the wedding, men die in duels. Drogo’s gift to his bride is a white mare. At sunset he takes her down to the shore and consummates the marriage.',
      },
    ),
    inBooks(
      [1, 4],
      { it: 'La festa nella dimora', en: 'The feast at the manse' },
      {
        it: 'Drogo dà una festa nella sua dimora di Pentos, e il magistro [[illyrio-mopatis|Illyrio]] ci porta l’esule [[viserys-targaryen|Viserys]] e la sorella [[daenerys-targaryen|Daenerys]]. Viserys vuole dare Daenerys in sposa al khal in cambio dei suoi quarantamila cavalieri, l’esercito che gli serve per riprendersi il trono. Illyrio lascia i due fratelli per andare a prendere Drogo, che così vedrà la sposa per la prima volta.',
        en: 'Drogo holds a feast at his manse in Pentos, and Magister [[illyrio-mopatis|Illyrio]] brings the exiled [[viserys-targaryen|Viserys]] and his sister [[daenerys-targaryen|Daenerys]] to it. Viserys means to marry Daenerys to the khal in exchange for his forty thousand riders, the army he needs to take back the throne. Illyrio leaves the two of them to fetch Drogo, who will see his bride for the first time.',
      },
    ),
    inBooks(
      [2, 12],
      { it: 'Una puledra argentata', en: 'A silver filly' },
      {
        it: 'Drogo sposa [[daenerys-targaryen|Daenerys]] fuori dalle mura di Pentos, con i suoi cavalieri di sangue seduti sotto gli sposi. I cavalieri di sangue le offrono una frusta, un arakh e un’arma da tiro in osso di drago; lei li rifiuta come vuole l’usanza, e le armi passano a Drogo. Il suo dono è una puledra argentata, perché lei possa cavalcare con il khalasar. Poi Drogo si allontana a cavallo con lei. È gentile, si lascia sciogliere la treccia e, prima di andare oltre, le chiede se vuole. Lei risponde di sì.',
        en: 'Drogo marries [[daenerys-targaryen|Daenerys]] outside the walls of Pentos, with his bloodriders seated below the couple. The bloodriders offer her a whip, an arakh and a dragonbone bow; she refuses them as custom requires, and the weapons go to Drogo. His own gift is a silver filly, so that she can ride with the khalasar. Then Drogo rides off with her. He is gentle, lets her undo his braid and, before he goes further, asks her. She says yes.',
      },
    ),
    onScreen(
      [2, 12],
      { it: 'Parole in dothraki', en: 'Words in Dothraki' },
      {
        it: 'Mentre il khalasar viaggia verso est, Drogo passa le sere a bere con i suoi guerrieri, poi entra nella tenda e prende [[daenerys-targaryen|Daenerys]] con violenza, senza una parola. Dopo le lezioni della sua ancella [[doreah|Doreah]], una notte è lei a prendere l’iniziativa e a parlargli in dothraki. Drogo ne resta sorpreso e la asseconda.',
        en: 'As the khalasar rides east, Drogo spends his evenings drinking with his warriors, then goes into the tent and takes [[daenerys-targaryen|Daenerys]] roughly, without a word. After lessons from her handmaiden [[doreah|Doreah]], one night she takes the lead herself and speaks to him in Dothraki. Drogo is surprised, and he responds to her.',
      },
    ),
    inBoth(
      [6, 47],
      { it: 'Una corona di oro fuso', en: 'A crown of molten gold' },
      {
        it: 'A Vaes Dothrak la moglie di Drogo, [[daenerys-targaryen|Daenerys]], mangia il cuore di uno stallone davanti alle vecchie, che annunciano che il loro figlio sarà lo stallone che monta il mondo. A una festa il fratello di lei, [[viserys-targaryen|Viserys]], sguaina la spada, cosa che nella città sacra nessuno può fare, e reclama la sua corona. Drogo gli promette una corona d’oro che farà tremare chi la guarda. I suoi cavalieri di sangue tengono fermo Viserys, mentre Drogo fonde in una pentola la sua cintura di medaglioni e gli versa l’oro sulla testa.',
        en: 'In Vaes Dothrak, Drogo’s wife [[daenerys-targaryen|Daenerys]] eats a stallion’s heart before the crones, who foretell that their son will be the stallion who mounts the world. At a feast her brother [[viserys-targaryen|Viserys]] draws a sword, which no one may do in the sacred city, and demands his crown. Drogo promises him a golden crown that men will tremble to behold. His bloodriders hold Viserys while Drogo melts his medallion belt in a pot and pours the gold over his head.',
      },
    ),
    inBoth(
      [7, 55],
      { it: 'L’acqua avvelenata', en: 'The poison water' },
      {
        it: 'A Vaes Dothrak un mercante di vino cerca di avvelenare [[daenerys-targaryen|Daenerys]], e [[jorah-mormont|ser Jorah]] le impedisce di bere. Drogo permette a Jorah di scegliere un cavallo qualsiasi della sua mandria. Poi, davanti al khalasar, giura che porterà i suoi cavalieri oltre l’acqua avvelenata, come nessun khal ha mai fatto, e che conquisterà per suo figlio il Trono di Spade.',
        en: 'In Vaes Dothrak a wine merchant tries to poison [[daenerys-targaryen|Daenerys]], and [[jorah-mormont|Ser Jorah]] stops her from drinking. Drogo lets Jorah choose any horse from his herds. Then, before his khalasar, he swears to take his riders across the poison water, as no khal has done, and to win the Iron Throne of the Seven Kingdoms for his son.',
      },
    ),
    onScreen(
      [8, 62],
      { it: 'La sfida di Mago', en: 'Mago’s challenge' },
      {
        it: 'Il khalasar di Drogo assale un villaggio lhazareen per fare schiavi con cui pagarsi le navi. Quando i guerrieri protestano perché [[daenerys-targaryen|Daenerys]] ha reclamato le donne, Drogo, divertito, dice loro di trovarne altre. [[mago|Mago]] la chiama puttana straniera e lo sfida. Drogo getta a terra il suo arakh, si lascia ferire da Mago, poi gli taglia la gola e gli strappa la lingua. Considera la ferita un graffio, ma su insistenza di Daenerys la lascia curare alla sacerdotessa [[mirri-maz-duur|Mirri Maz Duur]].',
        en: 'Drogo’s khalasar raids a Lhazareen village for slaves to pay for ships. When his riders complain that [[daenerys-targaryen|Daenerys]] has claimed the women, Drogo, amused, tells them to find others. [[mago|Mago]] calls her a foreign whore and challenges him. Drogo throws down his arakh, lets Mago cut him, then slits his throat and tears out his tongue. He calls the wound a scratch, but at Daenerys’s insistence he lets the godswife [[mirri-maz-duur|Mirri Maz Duur]] treat it.',
      },
    ),
    inBooks(
      [8, 62],
      { it: 'Le ferite della battaglia', en: 'Wounds from the battle' },
      {
        it: 'Il khalasar di Drogo sconfigge un khalasar rivale e mette a sacco una città lhazareen. Nei combattimenti un cavaliere di sangue nemico ferisce Drogo al petto, e una freccia gli trapassa il braccio. Quando [[mago|Mago]] si lamenta con [[haggo|Haggo]] perché la khaleesi gli ha tolto una prigioniera, Drogo manda a dire a Mago di trovarsene un’altra. Su insistenza di [[daenerys-targaryen|Daenerys]], lascia che la sacerdotessa [[mirri-maz-duur|Mirri Maz Duur]] curi le sue ferite.',
        en: 'Drogo’s khalasar defeats a rival khalasar and sacks a Lhazareen town. In the fighting a rival bloodrider wounds Drogo in the chest, and an arrow pierces his arm. When [[mago|Mago]] complains to [[haggo|Haggo]] that the khaleesi took a captive from Mago, Drogo sends word that he should find another. At [[daenerys-targaryen|Daenerys]]’s urging, he lets the godswife [[mirri-maz-duur|Mirri Maz Duur]] treat his wounds.',
      },
    ),
    inBoth(
      [9, 65],
      { it: 'La caduta da cavallo', en: 'The fall from the saddle' },
      {
        it: 'La ferita di Drogo si infetta, e lui cade da cavallo davanti al khalasar, un grave segno di debolezza per i Dothraki. [[daenerys-targaryen|Daenerys]] ferma la colonna e chiama [[mirri-maz-duur|Mirri Maz Duur]], che dice che ormai solo la magia del sangue può salvarlo. Mirri uccide lo stallone di Drogo nella sua tenda e comincia il rito, mentre fuori i suoi uomini si rivoltano contro la moglie.',
        en: 'Drogo’s wound festers, and he falls from his horse in front of the khalasar, a grave sign of weakness among the Dothraki. [[daenerys-targaryen|Daenerys]] halts the column and calls on [[mirri-maz-duur|Mirri Maz Duur]], who says that only blood magic can save him now. Mirri kills Drogo’s stallion in his tent and begins the rite, while outside his men turn against his wife.',
      },
    ),
    inBoth(
      [10, 69],
      { it: 'Il khal che non cavalca più', en: 'The khal who cannot ride' },
      {
        it: 'La magia del sangue tiene in vita Drogo, ma lui non può muoversi né parlare, e il suo khalasar si divide e se ne va. Suo figlio nasce morto. [[mirri-maz-duur|Mirri Maz Duur]] dice a [[daenerys-targaryen|Daenerys]] che Drogo tornerà com’era solo quando il sole sorgerà a ovest e tramonterà a est. Daenerys lo accudisce e infine lo soffoca con un cuscino.',
        en: 'The blood magic keeps Drogo alive, but he cannot move or speak, and his khalasar breaks apart and leaves. His son is born dead. [[mirri-maz-duur|Mirri Maz Duur]] tells [[daenerys-targaryen|Daenerys]] that Drogo will be as he was only when the sun rises in the west and sets in the east. Daenerys tends him and in the end smothers him with a pillow.',
      },
    ),
  ],
  'jorah-mormont': [
    onScreen(
      [1, 4],
      { it: 'Il giuramento alle nozze', en: 'Sworn at the wedding' },
      {
        it: 'Jorah Mormont, un cavaliere esiliato dai Sette Regni, è tra gli ospiti alle nozze di [[daenerys-targaryen|Daenerys]] e [[drogo|khal Drogo]] a Pentos. Regala alla sposa dei libri di canzoni e racconti del Westeros e le dice di venire dal Nord. Poi giura fedeltà al fratello di lei, [[viserys-targaryen|Viserys]], come suo re, e gli offre i suoi consigli. Viserys accetta. Jorah parla la lingua dei Dothraki.',
        en: 'Jorah Mormont, a knight exiled from the Seven Kingdoms, is a guest at the wedding of [[daenerys-targaryen|Daenerys]] and [[drogo|Khal Drogo]] in Pentos. He gives the bride books of songs and stories from Westeros and tells her he comes from the North. Then he swears fealty to her brother [[viserys-targaryen|Viserys]] as his king and offers him his counsel. Viserys accepts. Jorah speaks the Dothraki tongue.',
      },
    ),
    inBooks(
      [1, 4],
      { it: 'Un cavaliere tra gli ospiti', en: 'A knight among the guests' },
      {
        it: 'Alla festa di [[drogo|khal Drogo]] a Pentos il magistro [[illyrio-mopatis|Illyrio]] indica Jorah Mormont a [[viserys-targaryen|Viserys]] e a [[daenerys-targaryen|Daenerys]]. È un cavaliere dei Sette Regni che ha venduto dei bracconieri a un mercante di schiavi ed è fuggito prima di essere punito dal re. Daenerys si stupisce di trovare un cavaliere così lontano da casa. Viserys dice che parlerà con Jorah prima che la serata sia finita.',
        en: 'At [[drogo|Khal Drogo]]’s feast in Pentos, Magister [[illyrio-mopatis|Illyrio]] points Jorah Mormont out to [[viserys-targaryen|Viserys]] and [[daenerys-targaryen|Daenerys]]. He is a knight from the Seven Kingdoms who sold poachers to a slaver and fled before the king could punish him. Daenerys is surprised to find a knight so far from home. Viserys says he will speak with Jorah before the night is over.',
      },
    ),
    inBooks(
      [2, 12],
      { it: 'Libri per la sposa', en: 'Books for the bride' },
      {
        it: 'Jorah ora è sempre al fianco di [[viserys-targaryen|Viserys]]. Quando Viserys si spazientisce per l’esercito che aspetta, Jorah e il magistro [[illyrio-mopatis|Illyrio]] gli assicurano che i Dothraki combatteranno per lui a tempo debito, dopo che il khal avrà portato la sposa nella città sacra. Alle nozze Jorah siede con Viserys e Illyrio, un gradino sotto i cavalieri di sangue. Il suo dono a [[daenerys-targaryen|Daenerys]] sono dei libri di canzoni e racconti dei Sette Regni.',
        en: 'Jorah is now always at [[viserys-targaryen|Viserys]]’s side. When Viserys grows impatient for his army, Jorah and Magister [[illyrio-mopatis|Illyrio]] assure him that the Dothraki will fight for him in time, once the khal has taken his bride to the sacred city. At the wedding Jorah sits with Viserys and Illyrio, a level below the bloodriders. His gift to [[daenerys-targaryen|Daenerys]] is a set of books of songs and tales of the Seven Kingdoms.',
      },
    ),
    onScreen(
      [2, 12],
      { it: 'Perché è fuggito', en: 'Why he fled' },
      {
        it: 'Mentre il khalasar viaggia verso est, Jorah vede che [[daenerys-targaryen|Daenerys]] soffre e le dice che col tempo sarà più facile. Consiglia a [[viserys-targaryen|Viserys]] di aspettare il khal nella casa di Illyrio, ma Viserys rifiuta. Jorah gli racconta di aver perso la sua casa perché vendeva bracconieri ai mercanti di schiavi: [[eddard-stark|Eddard Stark]] voleva giustiziarlo, e lui è fuggito. Viserys ride e dice che quando sarà re delitti simili resteranno impuniti.',
        en: 'As the khalasar heads east, Jorah sees that [[daenerys-targaryen|Daenerys]] is suffering and tells her it will get easier. He advises [[viserys-targaryen|Viserys]] to wait for the khal at Illyrio’s house, but Viserys refuses. Jorah tells him he lost his home because he sold poachers to slavers: [[eddard-stark|Eddard Stark]] meant to execute him for it, and he fled. Viserys laughs and says such crimes will go unpunished when he is king.',
      },
    ),
    inBooks(
      [2, 13],
      { it: 'Rapporti al concilio', en: 'Reports to the council' },
      {
        it: 'Sulla strada verso sud, [[robert-baratheon|re Robert]] racconta a [[eddard-stark|Eddard Stark]] che [[daenerys-targaryen|Daenerys]] ha sposato un khal dothraki. La notizia viene da ser Jorah Mormont, il cavaliere esule ora al seguito del fratello di lei, che manda rapporti al concilio ristretto dall’altra sponda del Mare Stretto.',
        en: 'On the road south, [[robert-baratheon|King Robert]] tells [[eddard-stark|Eddard Stark]] that [[daenerys-targaryen|Daenerys]] has married a Dothraki khal. The news comes from Ser Jorah Mormont, the exiled knight now in her brother’s company, who sends reports to the small council from across the Narrow Sea.',
      },
    ),
    inBooks(
      [3, 24],
      { it: 'Dalla parte della khaleesi', en: 'Siding with the khaleesi' },
      {
        it: 'Durante il viaggio verso est [[viserys-targaryen|Viserys]] minaccia [[daenerys-targaryen|Daenerys]], e la sua guardia lo trascina a terra. Viserys ordina a Jorah di punire la sorella. Jorah invece si schiera con Daenerys e prende il cavallo di Viserys, che deve proseguire a piedi. Più tardi confida a Daenerys che ciò che desidera di più è tornare a casa, e che suo fratello sarebbe un pessimo re.',
        en: 'On the ride east [[viserys-targaryen|Viserys]] threatens [[daenerys-targaryen|Daenerys]], and her guard pulls him to the ground. Viserys orders Jorah to punish his sister. Jorah sides with Daenerys instead and takes Viserys’s horse, leaving him to walk. Later he tells Daenerys that what he wants most is to go home, and that her brother would make a poor king.',
      },
    ),
    onScreen(
      [3, 24],
      { it: 'Un padre disonorato', en: 'A father he shamed' },
      {
        it: 'Jorah vede [[daenerys-targaryen|Daenerys]] crescere nel ruolo di khaleesi. Quando [[viserys-targaryen|Viserys]] gli ordina di uccidere le guardie della sorella, Jorah lo ignora. Con la guardia [[rakharo|Rakharo]] confronta i cavalieri del Westeros e i guerrieri dothraki, e ammette di aver disonorato suo padre, un uomo di grande onore. Quando scopre che Daenerys è incinta, parte per Qohor e promette di raggiungere il khalasar prima che arrivi a Vaes Dothrak.',
        en: 'Jorah watches [[daenerys-targaryen|Daenerys]] grow into her role as khaleesi. When [[viserys-targaryen|Viserys]] orders him to kill his sister’s guards, Jorah ignores him. With her guard [[rakharo|Rakharo]] he compares the knights of Westeros with the Dothraki riders, and admits that he shamed his father, a man of great honor. When he learns that Daenerys is pregnant, he rides off to Qohor, promising to rejoin the khalasar before it reaches Vaes Dothrak.',
      },
    ),
    onScreen(
      [4, 37],
      { it: 'Una moglie e dei bracconieri', en: 'Poachers and a wife' },
      {
        it: 'A Vaes Dothrak [[daenerys-targaryen|Daenerys]] chiede a Jorah se i Dothraki potrebbero riconquistare i Sette Regni per la sua famiglia. Lui risponde che dovrebbero attraversare il mare, e che contro un nemico chiuso dietro mura di pietra fallirebbero. Ammette di aver venduto i bracconieri per pagare i gusti costosi di sua moglie. Quando lei gli chiede dove sia la moglie, risponde che è con un altro uomo, in un altro posto. Daenerys gli dice che suo fratello non sarà mai re, e Jorah è d’accordo.',
        en: 'In Vaes Dothrak, [[daenerys-targaryen|Daenerys]] asks Jorah whether the Dothraki could win back the Seven Kingdoms for her family. He answers that they would have to cross the sea, and that against an enemy behind stone walls they would fail. He admits that he sold the poachers to pay for his wife’s expensive tastes. Asked where his wife is, he says she is with another man in another place. Daenerys tells him her brother will never be king, and Jorah agrees.',
      },
    ),
    onScreen(
      [5, 47],
      { it: 'L’informatore', en: 'The informer' },
      {
        it: 'Ad Approdo del Re il concilio ristretto viene a sapere che [[daenerys-targaryen|Daenerys]] è incinta da un rapporto che Jorah ha mandato al maestro dei sussurri, [[varys|Varys]]. Jorah era andato a Qohor per spedirlo. [[eddard-stark|Eddard Stark]] lo considera un traditore pronto a dire qualunque cosa pur di avere il perdono reale. Invece [[robert-baratheon|re Robert]] si fida del rapporto e ordina di uccidere Daenerys e il bambino.',
        en: 'In King’s Landing the small council learns that [[daenerys-targaryen|Daenerys]] is pregnant from a report Jorah sent to the master of whisperers, [[varys|Varys]]. Jorah rode to Qohor to send it. [[eddard-stark|Eddard Stark]] calls him a traitor who will say anything for a royal pardon. [[robert-baratheon|King Robert]] trusts the report all the same and orders Daenerys and her child killed.',
      },
    ),
    onScreen(
      [6, 47],
      { it: 'Le uova di drago', en: 'The dragon eggs' },
      {
        it: 'A Vaes Dothrak Jorah resta al fianco di [[daenerys-targaryen|Daenerys]] e la consiglia. Sorprende il fratello di lei, [[viserys-targaryen|Viserys]], mentre cerca di prenderle le uova di drago, e glielo impedisce. A una festa Viserys sguaina la spada e minaccia Daenerys e il bambino che porta in grembo, e [[drogo|khal Drogo]] lo uccide con una corona di oro fuso. Jorah le dice di distogliere lo sguardo, ma lei non lo fa.',
        en: 'In Vaes Dothrak, Jorah stays at [[daenerys-targaryen|Daenerys]]’s side and advises her. He catches her brother [[viserys-targaryen|Viserys]] trying to take her dragon eggs, and stops him. At a feast Viserys draws a sword and threatens Daenerys and her unborn child, and [[drogo|Khal Drogo]] kills him with a crown of molten gold. Jorah tells her to look away, and she does not.',
      },
    ),
    onScreen(
      [7, 55],
      { it: 'Il perdono reale', en: 'A royal pardon' },
      {
        it: 'In un mercato di Vaes Dothrak un ragazzo consegna a Jorah un messaggio di [[varys|Varys]]: il perdono reale, e il permesso di tornare a casa. Jorah capisce che il re non ha più bisogno di una spia accanto a [[daenerys-targaryen|Daenerys]], perché vuole farla uccidere. Quando un mercante di vino le offre una botte, Jorah le impedisce di bere: il vino è avvelenato. [[drogo|Khal Drogo]] lo ricompensa con un cavallo a sua scelta.',
        en: 'In a market of Vaes Dothrak a boy brings Jorah a message from [[varys|Varys]]: a royal pardon, and leave to go home. Jorah understands that the king no longer needs a spy beside [[daenerys-targaryen|Daenerys]] because he means to have her killed. When a wine merchant offers her a cask, Jorah stops her from drinking: the wine is poisoned. [[drogo|Khal Drogo]] rewards him with any horse he chooses.',
      },
    ),
    inBooks(
      [7, 55],
      { it: 'Un avvertimento da Pentos', en: 'A warning from Pentos' },
      {
        it: 'Una lettera del magistro [[illyrio-mopatis|Illyrio]] avverte Jorah che sulla testa di [[daenerys-targaryen|Daenerys]] pende una taglia. In un mercato di Vaes Dothrak un mercante di vino insiste perché lei assaggi il suo vino, e Jorah le impedisce di berlo: il vino è avvelenato. [[drogo|Khal Drogo]] gli permette di scegliere come ricompensa un cavallo qualsiasi della sua mandria.',
        en: 'A letter from Magister [[illyrio-mopatis|Illyrio]] warns Jorah of a price on [[daenerys-targaryen|Daenerys]]’s head. In a market of Vaes Dothrak a wine merchant urges her to taste his wine, and Jorah stops her from drinking it: the wine is poisoned. [[drogo|Khal Drogo]] lets him choose any horse from his herds as his reward.',
      },
    ),
    inBoth(
      [9, 65],
      { it: 'In armatura', en: 'In armor' },
      {
        it: 'Quando [[drogo|khal Drogo]] cade da cavallo, Jorah avverte [[daenerys-targaryen|Daenerys]] che alla sua morte il khalasar si dividerà e che chi prenderà il suo posto ucciderà suo figlio. Le consiglia di fuggire, ma lei rifiuta e gli fa indossare l’armatura. Mentre [[mirri-maz-duur|Mirri Maz Duur]] compie la magia del sangue, [[qotho|Qotho]] si rivolta contro Daenerys e contro il rito. Jorah lo uccide. Quando cominciano le doglie, porta Daenerys nella tenda.',
        en: 'When [[drogo|Khal Drogo]] falls from his horse, Jorah warns [[daenerys-targaryen|Daenerys]] that the khalasar will break apart when he dies, and that whoever takes his place will kill her son. He urges her to flee, but she refuses and has him put on his armor. While [[mirri-maz-duur|Mirri Maz Duur]] works her blood magic, [[qotho|Qotho]] turns on Daenerys and the rite. Jorah kills him. When Daenerys’s labor begins, he carries her into the tent.',
      },
    ),
    inBoth(
      [10, 73],
      { it: 'In ginocchio', en: 'On his knees' },
      {
        it: '[[daenerys-targaryen|Daenerys]] prepara la pira di [[drogo|khal Drogo]] e ordina a Jorah di legarci [[mirri-maz-duur|Mirri Maz Duur]]. Jorah teme che lei voglia morire tra le fiamme e la supplica di non farlo. Daenerys accende la pira ed entra nel fuoco. Quando all’alba il fuoco si spegne, Jorah la trova illesa tra le ceneri con tre draghi appena nati, e si inginocchia davanti a lei.',
        en: '[[daenerys-targaryen|Daenerys]] builds a pyre for [[drogo|Khal Drogo]] and orders Jorah to bind [[mirri-maz-duur|Mirri Maz Duur]] to it. Afraid that she means to die in the fire, Jorah pleads with her not to. Daenerys lights the pyre and walks into the flames. When the fire dies at dawn, Jorah finds her unharmed in the ashes with three newly hatched dragons, and he kneels to her.',
      },
    ),
  ],
  'illyrio-mopatis': [
    inBoth(
      [1, 4],
      { it: 'Gli ospiti del magistro', en: 'The magister’s guests' },
      {
        it: 'Illyrio, un ricco magistro di Pentos, ospita nella sua casa l’esule [[viserys-targaryen|Viserys]] e la sorella [[daenerys-targaryen|Daenerys]]. Ha combinato le nozze di Daenerys con [[drogo|khal Drogo]], i cui quarantamila cavalieri dovranno restituire a Viserys il trono del padre. Quando Viserys teme il giudizio del khal su di lei, è Illyrio a rassicurarlo.',
        en: 'Illyrio, a wealthy magister of Pentos, keeps the exiled [[viserys-targaryen|Viserys]] and his sister [[daenerys-targaryen|Daenerys]] in his house. He has brokered Daenerys’s marriage to [[drogo|Khal Drogo]], whose forty thousand riders are to win Viserys back his father’s throne. When Viserys worries about how the khal will judge her, Illyrio is the one who reassures him.',
      },
    ),
    inBoth(
      [2, 12],
      { it: 'Tre uova di drago', en: 'Three dragon eggs' },
      {
        it: 'Il matrimonio combinato da Illyrio si celebra: [[daenerys-targaryen|Daenerys]] sposa [[drogo|khal Drogo]] durante una festa dothraki in cui alcuni uomini muoiono. Secondo Illyrio, un matrimonio dothraki con meno di tre morti è considerato noioso. Il suo dono alla sposa sono tre uova di drago che vengono dalle Terre dell’Ombra oltre Asshai, trasformate in pietra dal tempo.',
        en: 'The match Illyrio arranged takes place: [[daenerys-targaryen|Daenerys]] marries [[drogo|Khal Drogo]] at a Dothraki feast where men die. According to Illyrio, a Dothraki wedding with fewer than three deaths is thought a dull affair. His gift to the bride is three dragon eggs from the Shadow Lands beyond Asshai, turned to stone by the ages.',
      },
    ),
    onScreen(
      [5, 47],
      { it: 'Sotto la Fortezza Rossa', en: 'Under the Red Keep' },
      {
        it: 'Illyrio arriva in segreto ad Approdo del Re e incontra [[varys|Varys]] nei cunicoli sotto la Fortezza Rossa. Varys lo avverte che presto Lannister e Stark saranno in guerra, troppo presto per i loro piani. Illyrio risponde che [[drogo|khal Drogo]] non attraverserà il mare finché suo figlio non sarà nato, e mancano ancora mesi. Propone di eliminare [[eddard-stark|Eddard Stark]], ma Varys rifiuta. [[arya-stark|Arya]] li sente parlare senza sapere chi siano.',
        en: 'Illyrio comes to King’s Landing in secret and meets [[varys|Varys]] in the tunnels under the Red Keep. Varys warns him that the Lannisters and the Starks will soon be at war, too soon for their plans. Illyrio answers that [[drogo|Khal Drogo]] will not cross the sea until his son is born, months from now. He suggests getting rid of [[eddard-stark|Eddard Stark]], but Varys refuses. [[arya-stark|Arya]] overhears them without knowing who they are.',
      },
    ),
  ],
  'irri': [
    onScreen(
      [2, 12],
      { it: 'La luna e il sole', en: 'The moon and the sun' },
      {
        it: 'Irri è una delle ancelle che servono [[daenerys-targaryen|Daenerys]] durante il viaggio verso est. Aiuta la khaleesi, sfinita, a raggiungere la tenda. Quando Daenerys chiede dei draghi, Irri risponde che sono scomparsi. Ride della storia di [[doreah|Doreah]] sulla seconda luna che si spaccò e da cui uscirono i draghi: la luna, dice, è una dea, la moglie del sole. [[jhiqui|Jhiqui]] le dà ragione, e Daenerys le manda via entrambe per restare sola con Doreah.',
        en: 'Irri is one of the handmaidens who serve [[daenerys-targaryen|Daenerys]] on the journey east. She helps the exhausted khaleesi to her tent. When Daenerys asks about dragons, Irri says they are gone. She laughs off [[doreah|Doreah]]’s story of a second moon that cracked and poured out dragons: the moon, she says, is a goddess, the wife of the sun. [[jhiqui|Jhiqui]] agrees with her, and Daenerys sends them both away to be alone with Doreah.',
      },
    ),
    inBooks(
      [2, 12],
      { it: 'Un dono di nozze', en: 'A wedding gift' },
      {
        it: 'Alle nozze di [[daenerys-targaryen|Daenerys]] e [[drogo|khal Drogo]], il fratello di lei, [[viserys-targaryen|Viserys]], le regala tre ancelle. Irri e [[jhiqui|Jhiqui]] sono dothraki, mentre [[doreah|Doreah]] viene da Lys. Il compito di Irri è insegnare alla nuova khaleesi a cavalcare; Jhiqui dovrà insegnarle la lingua dei Dothraki, e Doreah le arti dell’amore.',
        en: 'At the wedding of [[daenerys-targaryen|Daenerys]] and [[drogo|Khal Drogo]], her brother [[viserys-targaryen|Viserys]] gives her three handmaidens. Irri and [[jhiqui|Jhiqui]] are Dothraki, and [[doreah|Doreah]] comes from Lys. Irri’s task is to teach the new khaleesi to ride, while Jhiqui is to teach her the Dothraki tongue and Doreah the arts of love.',
      },
    ),
    onScreen(
      [3, 24],
      { it: 'La notizia del bambino', en: 'News of a child' },
      {
        it: 'Irri fa da interprete tra [[daenerys-targaryen|Daenerys]] e la sua guardia, [[rakharo|Rakharo]], e come lui non capisce perché Daenerys risparmi il fratello [[viserys-targaryen|Viserys]]. È Irri a capire che Daenerys è incinta. Organizza un pasto per festeggiare, dà la notizia a [[jorah-mormont|ser Jorah]] e litiga con Rakharo, pretendendo per la khaleesi qualcosa di diverso dalla carne di cavallo.',
        en: 'Irri translates between [[daenerys-targaryen|Daenerys]] and her guard [[rakharo|Rakharo]], and like him she is puzzled when Daenerys spares her brother [[viserys-targaryen|Viserys]]. Irri is the one who works out that Daenerys is pregnant. She plans a meal to celebrate, tells [[jorah-mormont|Ser Jorah]] the news, and argues with Rakharo, demanding something other than horse meat for the khaleesi.',
      },
    ),
    inBooks(
      [3, 24],
      { it: 'La prima ad accorgersene', en: 'The first to notice' },
      {
        it: 'Irri serve [[daenerys-targaryen|Daenerys]] durante il lungo viaggio verso est nel Mare Dothraki. Le è stata regalata alle nozze dal fratello, [[viserys-targaryen|Viserys]], perché le insegnasse a cavalcare. Tra le donne della khaleesi, è Irri la prima ad accorgersi che Daenerys aspetta un bambino.',
        en: 'Irri serves [[daenerys-targaryen|Daenerys]] on the long ride east across the Dothraki Sea. Her brother [[viserys-targaryen|Viserys]] gave Irri to her at the wedding, to teach her to ride. Of the khaleesi’s women, Irri is the first to notice that Daenerys is with child.',
      },
    ),
    onScreen(
      [6, 47],
      { it: 'Le mani bruciate', en: 'Burned hands' },
      {
        it: 'A Vaes Dothrak Irri trova [[daenerys-targaryen|Daenerys]] che toglie un uovo di drago da un braciere rovente e glielo strappa di mano, temendo che si bruci. Daenerys è illesa, ma Irri si brucia le mani. A una festa Irri traduce per [[drogo|khal Drogo]] le parole di [[viserys-targaryen|Viserys]], che sguaina la spada e minaccia Daenerys e il bambino. Poi guarda Drogo ucciderlo con l’oro fuso.',
        en: 'In Vaes Dothrak, Irri finds [[daenerys-targaryen|Daenerys]] taking a dragon egg off a hot brazier and grabs it from her, afraid that she will be burned. Daenerys is unharmed, but Irri burns her own hands. At a feast Irri translates for [[drogo|Khal Drogo]] when [[viserys-targaryen|Viserys]] draws his sword and threatens Daenerys and her child. She watches Drogo kill him with molten gold.',
      },
    ),
  ],
  'doreah': [
    onScreen(
      [2, 12],
      { it: 'Non una schiava', en: 'Not a slave' },
      {
        it: 'Doreah serve [[daenerys-targaryen|Daenerys]] come ancella. Le racconta una storia: un tempo c’erano due lune, finché una si avvicinò troppo al sole e si spaccò come un uovo, e ne uscirono migliaia di draghi. Le altre ancelle la deridono. Rimasta sola con lei, Daenerys le chiede come dare piacere a [[drogo|khal Drogo]]. Doreah glielo insegna, e le dice che non è una schiava e non deve fare l’amore come una schiava.',
        en: 'Doreah serves [[daenerys-targaryen|Daenerys]] as a handmaiden. She tells her a story: there were once two moons, until one wandered too close to the sun and cracked like an egg, and thousands of dragons poured out. The other handmaidens laugh at it. Alone with her, Daenerys asks how to please [[drogo|Khal Drogo]]. Doreah teaches her, and tells her she is no slave and should not make love like one.',
      },
    ),
    inBooks(
      [2, 12],
      { it: 'Un’ancella da Lys', en: 'A handmaiden from Lys' },
      {
        it: 'Alle nozze di [[daenerys-targaryen|Daenerys]] e [[drogo|khal Drogo]], il fratello di lei, [[viserys-targaryen|Viserys]], le regala tre ancelle: le dothraki [[irri|Irri]] e [[jhiqui|Jhiqui]], e Doreah, che viene da Lys. Viserys lascia intendere che sia lui sia il magistro [[illyrio-mopatis|Illyrio]] sono andati a letto con lei. Doreah dovrà insegnare alla sposa le arti dell’amore.',
        en: 'At the wedding of [[daenerys-targaryen|Daenerys]] and [[drogo|Khal Drogo]], her brother [[viserys-targaryen|Viserys]] gives her three handmaidens: the Dothraki girls [[irri|Irri]] and [[jhiqui|Jhiqui]], and Doreah, who comes from Lys. Viserys hints that both he and Magister [[illyrio-mopatis|Illyrio]] have bedded her. Doreah is to teach the bride the arts of love.',
      },
    ),
    inBooks(
      [3, 24],
      { it: 'La seconda luna', en: 'The second moon' },
      {
        it: 'Durante il lungo viaggio verso est, Doreah racconta a [[daenerys-targaryen|Daenerys]] una storia che ha sentito una volta: i draghi nacquero quando una seconda luna si avvicinò troppo al sole. Le insegna anche altro sulle arti dell’amore, da usare con [[drogo|khal Drogo]].',
        en: 'On the long ride east, Doreah tells [[daenerys-targaryen|Daenerys]] a tale she once heard: dragons were born when a second moon drew too close to the sun. She also teaches her more of the arts of love, to use with [[drogo|Khal Drogo]].',
      },
    ),
    inBoth(
      [4, 37],
      { it: 'Trascinata dalla khaleesi', en: 'Dragged to the khaleesi' },
      {
        it: 'A Vaes Dothrak [[daenerys-targaryen|Daenerys]] manda Doreah a invitare a cena il fratello [[viserys-targaryen|Viserys]]. Viserys prende l’invito per un ordine, si infuria e trascina Doreah dalla sorella. Lì aggredisce Daenerys, che lo colpisce con una cintura e lo avverte che, se la toccherà ancora, perderà le mani.',
        en: 'In Vaes Dothrak, [[daenerys-targaryen|Daenerys]] sends Doreah to invite her brother [[viserys-targaryen|Viserys]] to supper. Viserys takes the invitation for an order, flies into a rage and drags Doreah back to his sister. There he attacks Daenerys, who strikes him with a belt and warns him that he will lose his hands if he touches her again.',
      },
    ),
  ],
  'rakharo': [
    onScreen(
      [3, 24],
      { it: 'La frusta', en: 'The whip' },
      {
        it: 'Rakharo è uno dei guerrieri dothraki incaricati di proteggere [[daenerys-targaryen|Daenerys]]. Quando il fratello di lei, [[viserys-targaryen|Viserys]], la aggredisce, la frusta di Rakharo lo prende alla gola. Rakharo chiede se deve ucciderlo; su ordine di lei lo risparmia e gli toglie il cavallo, così che Viserys debba camminare. Più tardi confronta le armi con [[jorah-mormont|ser Jorah]] e litiga con [[irri|Irri]] su cosa cucinare per la khaleesi.',
        en: 'Rakharo is one of the Dothraki warriors charged with guarding [[daenerys-targaryen|Daenerys]]. When her brother [[viserys-targaryen|Viserys]] turns on her, Rakharo’s whip catches him around the throat. He asks whether he should kill him; at her word he spares him and takes his horse, so that Viserys has to walk. Later he compares weapons with [[jorah-mormont|Ser Jorah]] and argues with [[irri|Irri]] over what to cook for the khaleesi.',
      },
    ),
    onScreen(
      [7, 55],
      { it: 'Le caviglie del mercante', en: 'The merchant’s ankles' },
      {
        it: 'In un mercato di Vaes Dothrak [[jorah-mormont|ser Jorah]] impedisce a [[daenerys-targaryen|Daenerys]] di bere un vino avvelenato. Il mercante scappa, e Rakharo lo atterra avvolgendogli la frusta intorno alle caviglie. [[drogo|Khal Drogo]] giura di attraversare il mare e conquistare il Trono di Spade. Il khalasar lascia la città trascinando il mercante, costretto a camminare legato al cavallo di Daenerys.',
        en: 'In a market of Vaes Dothrak, [[jorah-mormont|Ser Jorah]] stops [[daenerys-targaryen|Daenerys]] from drinking poisoned wine. The merchant runs, and Rakharo brings him down by wrapping his whip around the man’s ankles. [[drogo|Khal Drogo]] swears to cross the sea and take the Iron Throne. The khalasar leaves the city with the merchant tied to Daenerys’s horse and forced to walk.',
      },
    ),
    inBooks(
      [9, 65],
      { it: 'Lo scontro davanti alla tenda', en: 'The fight at the tent' },
      {
        it: 'Quando [[drogo|khal Drogo]] cade da cavallo e [[daenerys-targaryen|Daenerys]] permette alla sacerdotessa [[mirri-maz-duur|Mirri Maz Duur]] di salvarlo con la magia del sangue, i cavalieri di sangue di Drogo cercano di fermare il rito. Rakharo combatte per la khaleesi. La frusta di [[jhogo|Jhogo]] prende alla gola il cavaliere di sangue [[haggo|Haggo]], e Rakharo lo uccide.',
        en: 'When [[drogo|Khal Drogo]] falls from his horse and [[daenerys-targaryen|Daenerys]] lets the godswife [[mirri-maz-duur|Mirri Maz Duur]] try to save him with blood magic, Drogo’s bloodriders try to stop the rite. Rakharo fights for the khaleesi. [[jhogo|Jhogo]]’s whip catches the bloodrider [[haggo|Haggo]] by the throat, and Rakharo kills him.',
      },
    ),
    onScreen(
      [10, 73],
      { it: 'Le uova sulla pira', en: 'The eggs on the pyre' },
      {
        it: 'Rakharo resta con [[daenerys-targaryen|Daenerys]] quando gran parte del khalasar se ne va, dopo la caduta di [[drogo|khal Drogo]]. Su suo ordine posa le tre uova di drago sulla pira di Drogo. Quando all’alba il fuoco si spegne e Daenerys viene trovata illesa tra le ceneri con tre draghi appena nati, Rakharo si inginocchia con [[jorah-mormont|ser Jorah]] davanti a lei.',
        en: 'Rakharo stays with [[daenerys-targaryen|Daenerys]] when most of the khalasar leaves after [[drogo|Khal Drogo]]’s fall. On her order he lays her three dragon eggs on Drogo’s pyre. When the fire dies at dawn and Daenerys is found unharmed in the ashes with three newly hatched dragons, Rakharo kneels to her beside [[jorah-mormont|Ser Jorah]].',
      },
    ),
    inBooks(
      [10, 73],
      { it: 'Una promessa e niente di più', en: 'A promise and no more' },
      {
        it: 'Quando gran parte dei cavalieri di [[drogo|khal Drogo]] se ne va, Rakharo resta. Prima della pira [[daenerys-targaryen|Daenerys]] gli dona l’arakh che era stato il suo dono di nozze e lo nomina suo ko. Lui accetta, ma promette soltanto di proteggerla fino a Vaes Dothrak, dove lei dovrà unirsi alle vecchie delle dosh khaleen. Quando Daenerys viene trovata illesa tra le ceneri con tre draghi appena nati, si inginocchia davanti a lei.',
        en: 'When most of [[drogo|Khal Drogo]]’s riders leave, Rakharo stays. Before the pyre, [[daenerys-targaryen|Daenerys]] gives him the arakh that was her bride gift and names him her ko. He accepts, but only promises to keep her safe as far as Vaes Dothrak, where she is to join the crones of the dosh khaleen. When she is found unharmed in the ashes with three newly hatched dragons, he kneels to her.',
      },
    ),
  ],
  'mirri-maz-duur': [
    inBoth(
      [8, 62],
      { it: 'La sacerdotessa', en: 'The godswife' },
      {
        it: 'Mirri Maz Duur è una sacerdotessa e guaritrice lhazareen. Il khalasar di Drogo assale la sua gente, uccide e fa schiavi, e [[daenerys-targaryen|Daenerys]] la sottrae ai guerrieri. Quando [[drogo|khal Drogo]] resta ferito, Mirri si offre di curarlo. Gli uomini di Drogo la chiamano maegi, strega, ma su insistenza di Daenerys il khal si lascia curare da lei.',
        en: 'Mirri Maz Duur is a Lhazareen godswife and healer. Drogo’s khalasar falls on her people, killing and taking slaves, and [[daenerys-targaryen|Daenerys]] takes her away from the riders. When [[drogo|Khal Drogo]] is wounded, Mirri offers to treat him. Drogo’s men call her a maegi, a witch, but at Daenerys’s urging the khal lets her tend him.',
      },
    ),
    inBoth(
      [9, 65],
      { it: 'Una vita per una vita', en: 'A life for a life' },
      {
        it: 'La ferita di [[drogo|khal Drogo]] si infetta, e lui cade da cavallo. [[daenerys-targaryen|Daenerys]] supplica Mirri di salvarlo. Mirri dice che può farlo solo con la magia del sangue, e che solo la morte può pagare per la vita. Uccide lo stallone di Drogo dentro la sua tenda e comincia il rito, avvertendo che, una volta cominciato, nessuno dovrà entrare.',
        en: '[[drogo|Khal Drogo]]’s wound festers, and he falls from his horse. [[daenerys-targaryen|Daenerys]] begs Mirri to save him. Mirri says that only blood magic can, and that only death can pay for life. She kills Drogo’s stallion inside his tent and begins her rite, warning that no one may enter once it has begun.',
      },
    ),
    inBooks(
      [10, 69],
      { it: 'La vendetta per la sua gente', en: 'Revenge for her people' },
      {
        it: 'La magia del sangue di Mirri lascia [[drogo|khal Drogo]] vivo ma senza più una mente, e il figlio di [[daenerys-targaryen|Daenerys]] nasce morto. Mirri dice a Daenerys che Drogo tornerà com’era solo quando il sole sorgerà a ovest e tramonterà a est. Poi le spiega che questa è la sua vendetta per il tempio e per la gente che il khalasar le ha tolto. Daenerys la fa legare.',
        en: 'Mirri’s blood magic leaves [[drogo|Khal Drogo]] alive but without a mind, and [[daenerys-targaryen|Daenerys]]’s son is born dead. Mirri tells Daenerys that Drogo will be as he was only when the sun rises in the west and sets in the east. Then she explains that this is her revenge for the temple and the people the khalasar took from her. Daenerys has her bound.',
      },
    ),
    inBoth(
      [10, 73],
      { it: 'Legata alla pira', en: 'Bound to the pyre' },
      {
        it: 'La magia del sangue di Mirri è costata a [[daenerys-targaryen|Daenerys]] il figlio e ha lasciato [[drogo|khal Drogo]] vuoto; Mirri la chiama vendetta per la sua gente. Daenerys soffoca Drogo e gli prepara la pira, e [[jorah-mormont|ser Jorah]], su suo ordine, ci lega Mirri. Quando la pira viene accesa, Mirri brucia con il corpo di Drogo, e all’alba Daenerys viene trovata illesa tra le ceneri.',
        en: 'Mirri’s blood magic has cost [[daenerys-targaryen|Daenerys]] her son and left [[drogo|Khal Drogo]] empty; Mirri calls it revenge for her people. Daenerys smothers Drogo and builds his pyre, and [[jorah-mormont|Ser Jorah]] binds Mirri to it at her order. When the pyre is lit, Mirri burns with Drogo’s body, and at dawn Daenerys is found unharmed in the ashes.',
      },
    ),
  ],
  'qotho': [
    onScreen(
      [6, 62],
      { it: 'Il braccio spezzato', en: 'The broken arm' },
      {
        it: 'Qotho è uno dei cavalieri di sangue di [[drogo|khal Drogo]]. A una festa a Vaes Dothrak, [[viserys-targaryen|Viserys]] sguaina la spada e minaccia la sorella [[daenerys-targaryen|Daenerys]] e il bambino che porta in grembo. Drogo promette a Viserys una corona d’oro. Qotho afferra Viserys, gli spezza il braccio perché lasci cadere la spada e lo tiene fermo mentre Drogo gli versa l’oro fuso sulla testa.',
        en: 'Qotho is one of [[drogo|Khal Drogo]]’s bloodriders. At a feast in Vaes Dothrak, [[viserys-targaryen|Viserys]] draws a sword and threatens his sister [[daenerys-targaryen|Daenerys]] and her unborn child. Drogo promises Viserys a golden crown. Qotho seizes Viserys, breaks his arm so that he drops the sword, and holds him down while Drogo pours molten gold over his head.',
      },
    ),
    inBoth(
      [8, 62],
      { it: 'Una maegi', en: 'A maegi' },
      {
        it: 'Qotho cavalca con il khalasar di [[drogo|khal Drogo]] quando assale i Lhazareen. Dopo i combattimenti la sacerdotessa lhazareen [[mirri-maz-duur|Mirri Maz Duur]] si offre di curare la ferita del khal, e la moglie di lui, [[daenerys-targaryen|Daenerys]], lo esorta ad accettare. Qotho diffida della donna e la chiama maegi, strega, ma Drogo accetta il suo aiuto.',
        en: 'Qotho rides with [[drogo|Khal Drogo]]’s khalasar when it falls on the Lhazareen. After the fighting the Lhazareen godswife [[mirri-maz-duur|Mirri Maz Duur]] offers to treat the khal’s wound, and his wife [[daenerys-targaryen|Daenerys]] urges him to accept. Qotho distrusts the woman and calls her a maegi, a witch, but Drogo accepts her help.',
      },
    ),
    inBoth(
      [9, 65],
      { it: 'La morte davanti alla tenda', en: 'Death outside the tent' },
      {
        it: 'La ferita di [[drogo|khal Drogo]] si infetta. Qotho diffida della sacerdotessa [[mirri-maz-duur|Mirri Maz Duur]] e la chiama maegi. Quando [[daenerys-targaryen|Daenerys]] le permette di compiere la magia del sangue sul khal, Qotho cerca di fermare il rito e si rivolta contro Daenerys, spingendola via. [[jorah-mormont|Ser Jorah]] interviene e i due si battono. Jorah uccide Qotho.',
        en: '[[drogo|Khal Drogo]]’s wound festers. Qotho distrusts the godswife [[mirri-maz-duur|Mirri Maz Duur]] and calls her a maegi. When [[daenerys-targaryen|Daenerys]] lets her work blood magic over the khal, Qotho tries to stop the rite and turns on Daenerys, shoving her aside. [[jorah-mormont|Ser Jorah]] steps in, and the two fight. Jorah kills Qotho.',
      },
    ),
  ],
  'cohollo': [
    inBooks(
      [4, 37],
      {
        it: 'Il più anziano dei cavalieri di sangue',
        en: 'The oldest bloodrider',
      },
      {
        it: 'Cohollo è il più anziano dei tre cavalieri di sangue di [[drogo|khal Drogo]]. Alle nozze il suo dono a [[daenerys-targaryen|Daenerys]] era stato un arakh decorato d’oro, passato a Drogo quando lei lo ha rifiutato come vuole l’usanza. A Vaes Dothrak Daenerys lo trova più gentile con lei degli altri cavalieri di sangue del khal.',
        en: 'Cohollo is the oldest of [[drogo|Khal Drogo]]’s three bloodriders. At the wedding his gift to [[daenerys-targaryen|Daenerys]] was an arakh chased in gold, which went to Drogo when she refused it, as custom requires. In Vaes Dothrak, Daenerys finds him kinder to her than the khal’s other bloodriders.',
      },
    ),
    inBooks(
      [6, 47],
      { it: 'Il re mendicante disarmato', en: 'Disarming the beggar king' },
      {
        it: 'A una festa a Vaes Dothrak [[viserys-targaryen|Viserys]] arriva ubriaco, sguaina la spada e minaccia la sorella [[daenerys-targaryen|Daenerys]] e il bambino che porta in grembo. Cohollo e gli altri cavalieri di sangue del khal lo afferrano e lo disarmano. Poi [[drogo|khal Drogo]] gli versa sulla testa dell’oro fuso, e Viserys muore.',
        en: 'At a feast in Vaes Dothrak, [[viserys-targaryen|Viserys]] arrives drunk, draws a sword and threatens his sister [[daenerys-targaryen|Daenerys]] and her unborn child. Cohollo and the khal’s other bloodriders seize him and take the sword from him. Then [[drogo|Khal Drogo]] pours molten gold over Viserys’s head, and Viserys dies.',
      },
    ),
    inBooks(
      [9, 65],
      { it: 'Uno sputo in faccia', en: 'Spitting in her face' },
      {
        it: 'Quando la ferita di [[drogo|khal Drogo]] si infetta e [[daenerys-targaryen|Daenerys]] si affida alla magia del sangue della sacerdotessa, Cohollo, che l’ha sempre trattata con gentilezza, le sputa in faccia. Con gli altri cavalieri di sangue cerca di fermare il rito, e per poco non uccide Daenerys. Prima che ci riesca, una freccia di Aggo, una delle sue guardie, lo uccide.',
        en: 'When [[drogo|Khal Drogo]]’s wound festers and [[daenerys-targaryen|Daenerys]] turns to the godswife’s blood magic, Cohollo, who has always treated her kindly, spits in her face. With the other bloodriders he tries to stop the rite, and he nearly kills Daenerys. Before he can, an arrow from Aggo, one of her guards, kills him.',
      },
    ),
  ],
  'haggo': [
    inBooks(
      [8, 62],
      { it: 'Il lamento di Mago', en: 'Mago’s complaint' },
      {
        it: 'Haggo è uno dei tre cavalieri di sangue di [[drogo|khal Drogo]], un uomo alto, ed è stato lui a spezzare il braccio a [[viserys-targaryen|Viserys]]. Dopo il sacco di una città lhazareen diffida della sacerdotessa [[mirri-maz-duur|Mirri Maz Duur]], che cura le ferite del khal. È a lui che [[mago|Mago]] si lamenta quando la khaleesi toglie a Mago una prigioniera, e Drogo manda a dire a Mago di trovarsene un’altra.',
        en: 'Haggo is one of [[drogo|Khal Drogo]]’s three bloodriders, a tall man, and the one who broke [[viserys-targaryen|Viserys]]’s arm. After the sack of a Lhazareen town he distrusts the godswife [[mirri-maz-duur|Mirri Maz Duur]], who treats the khal’s wounds. When [[mago|Mago]] complains to him that the khaleesi took a captive, Drogo sends word that Mago should find another.',
      },
    ),
    inBooks(
      [9, 65],
      { it: 'Sotto la frusta di Jhogo', en: 'Under Jhogo’s whip' },
      {
        it: 'Quando la ferita di [[drogo|khal Drogo]] si infetta, Haggo dà la colpa alla sacerdotessa [[mirri-maz-duur|Mirri Maz Duur]] e la colpisce. Mentre lei compie la magia del sangue sul khal, Haggo e gli altri cavalieri di sangue cercano di fermarla. La frusta di [[jhogo|Jhogo]] prende Haggo alla gola, e [[rakharo|Rakharo]] lo uccide.',
        en: 'When [[drogo|Khal Drogo]]’s wound festers, Haggo blames the godswife [[mirri-maz-duur|Mirri Maz Duur]] and strikes her. As she works blood magic over the khal, Haggo and the other bloodriders try to stop her. [[jhogo|Jhogo]]’s whip catches Haggo by the throat, and [[rakharo|Rakharo]] kills him.',
      },
    ),
  ],
  'jhiqui': [
    onScreen(
      [2, 12],
      { it: 'Una dea nel cielo', en: 'A goddess in the sky' },
      {
        it: 'Jhiqui è una delle ancelle dothraki che servono [[daenerys-targaryen|Daenerys]] durante il viaggio verso est. Quando [[doreah|Doreah]] racconta alla khaleesi che i draghi sono usciti da una seconda luna spaccata, Jhiqui si schiera con [[irri|Irri]] e liquida la storia: la luna è una dea, la moglie del sole. Daenerys manda via le due ancelle e resta con Doreah.',
        en: 'Jhiqui is one of the Dothraki handmaidens who serve [[daenerys-targaryen|Daenerys]] on the journey east. When [[doreah|Doreah]] tells the khaleesi that dragons came from a second moon that cracked open, Jhiqui sides with [[irri|Irri]] in dismissing the story: the moon is a goddess, the wife of the sun. Daenerys sends the two of them away and stays with Doreah.',
      },
    ),
    inBooks(
      [2, 12],
      { it: 'Per insegnare la lingua', en: 'To teach the tongue' },
      {
        it: 'Alle nozze di [[daenerys-targaryen|Daenerys]] e [[drogo|khal Drogo]], il fratello di lei, [[viserys-targaryen|Viserys]], regala alla sposa tre ancelle. Jhiqui è una delle due dothraki, insieme a [[irri|Irri]]; la terza, [[doreah|Doreah]], viene da Lys. Il compito di Jhiqui è insegnare alla khaleesi la lingua dei Dothraki.',
        en: 'At the wedding of [[daenerys-targaryen|Daenerys]] and [[drogo|Khal Drogo]], her brother [[viserys-targaryen|Viserys]] gives the bride three handmaidens. Jhiqui is one of the two Dothraki among them, with [[irri|Irri]]; the third, [[doreah|Doreah]], comes from Lys. Jhiqui’s task is to teach the khaleesi the Dothraki tongue.',
      },
    ),
  ],
  'aggo': [
    inBooks(
      [11, 62],
      {
        it: 'Una lama alla gola della sacerdotessa',
        en: 'A blade at the godswife’s throat',
      },
      {
        it: 'Aggo è uno dei guerrieri dothraki che [[drogo|khal Drogo]] ha incaricato di proteggere [[daenerys-targaryen|Daenerys]] dopo le nozze. Nella città lhazareen messa a sacco, quando la sacerdotessa [[mirri-maz-duur|Mirri Maz Duur]] si offre di curare il khal, Aggo per poco non le taglia la gola. È la khaleesi a fermarlo.',
        en: 'Aggo is one of the Dothraki warriors [[drogo|Khal Drogo]] charged with guarding [[daenerys-targaryen|Daenerys]] after the wedding. In the sacked Lhazareen town, when the godswife [[mirri-maz-duur|Mirri Maz Duur]] offers to heal the khal, Aggo nearly cuts her throat. It is the khaleesi who stops him.',
      },
    ),
    inBooks(
      [11, 65],
      { it: 'Una freccia per Cohollo', en: 'An arrow for Cohollo' },
      {
        it: 'Quando [[daenerys-targaryen|Daenerys]] permette alla sacerdotessa di compiere la magia del sangue per salvare [[drogo|khal Drogo]], i cavalieri di sangue del khal cercano di fermare il rito. [[cohollo|Cohollo]] sputa in faccia a Daenerys e sta per ucciderla. Aggo lo colpisce con una freccia e lo uccide prima che ci riesca.',
        en: 'When [[daenerys-targaryen|Daenerys]] lets the godswife work blood magic to save [[drogo|Khal Drogo]], the khal’s bloodriders try to stop the rite. [[cohollo|Cohollo]] spits in Daenerys’s face and is about to kill her. Aggo shoots him with an arrow and kills him before he can do it.',
      },
    ),
    inBooks(
      [11, 73],
      { it: 'Solo un uomo', en: 'Only a man' },
      {
        it: 'Quando [[drogo|khal Drogo]] muore e gran parte dei suoi cavalieri se ne va, Aggo resta con [[daenerys-targaryen|Daenerys]]. Prima della pira lei gli dona uno dei suoi doni di nozze, lo nomina suo ko e gli chiede il giuramento di cavaliere di sangue. Lui rifiuta, dicendo che solo un uomo può guidare un khalasar. Quando lei viene trovata illesa tra le ceneri con tre draghi appena nati, si inginocchia davanti a lei.',
        en: 'When [[drogo|Khal Drogo]] dies and most of his riders leave, Aggo stays with [[daenerys-targaryen|Daenerys]]. Before the pyre she gives him one of her bride gifts, names him her ko and asks for his oath as a bloodrider. He refuses, saying that only a man can lead a khalasar. When she is found unharmed in the ashes with three newly hatched dragons, he kneels to her.',
      },
    ),
  ],
  'jhogo': [
    inBooks(
      [3, 24],
      { it: 'Una frusta intorno al collo', en: 'A whip around the neck' },
      {
        it: 'Jhogo è uno dei giovani guerrieri dothraki che [[drogo|khal Drogo]] incarica di proteggere [[daenerys-targaryen|Daenerys]]. Durante il viaggio verso est, quando il fratello di lei, [[viserys-targaryen|Viserys]], la aggredisce, la frusta di Jhogo lo prende alla gola e lo trascina a terra. Jhogo chiede se Viserys debba morire o essere sfregiato. Daenerys fa dire da [[irri|Irri]], in dothraki, di lasciarlo andare, e Jhogo obbedisce.',
        en: 'Jhogo is one of the young Dothraki warriors [[drogo|Khal Drogo]] charges with guarding [[daenerys-targaryen|Daenerys]]. On the ride east, when her brother [[viserys-targaryen|Viserys]] attacks her, Jhogo’s whip catches him by the throat and pulls him to the ground. Jhogo asks whether Viserys should die or be marked. Daenerys has [[irri|Irri]] tell him in Dothraki to let him go, and Jhogo obeys.',
      },
    ),
    inBooks(
      [7, 55],
      { it: 'La fuga del mercante', en: 'The wine seller’s flight' },
      {
        it: 'A Vaes Dothrak un mercante di vino cerca di avvelenare [[daenerys-targaryen|Daenerys]], e [[jorah-mormont|ser Jorah]] le impedisce di bere. Quando il mercante cerca di fuggire, Jhogo lo atterra con la frusta. Poi [[drogo|khal Drogo]] giura di attraversare il mare e di conquistare i Sette Regni per suo figlio.',
        en: 'In Vaes Dothrak a wine merchant tries to poison [[daenerys-targaryen|Daenerys]], and [[jorah-mormont|Ser Jorah]] stops her from drinking. When the wine seller tries to flee, Jhogo brings him down with his whip. Then [[drogo|Khal Drogo]] swears to cross the sea and take the Seven Kingdoms for his son.',
      },
    ),
    inBooks(
      [9, 65],
      { it: 'Contro i cavalieri di sangue', en: 'Against the bloodriders' },
      {
        it: 'Quando la ferita di [[drogo|khal Drogo]] si infetta, Jhogo supplica [[daenerys-targaryen|Daenerys]] di non lasciare che la sacerdotessa [[mirri-maz-duur|Mirri Maz Duur]] compia la magia del sangue, e si offre di ucciderla. Daenerys rifiuta. Quando i cavalieri di sangue del khal cercano di fermare il rito, la frusta di Jhogo prende alla gola [[haggo|Haggo]], e [[rakharo|Rakharo]] lo uccide.',
        en: 'When [[drogo|Khal Drogo]]’s wound festers, Jhogo begs [[daenerys-targaryen|Daenerys]] not to let the godswife [[mirri-maz-duur|Mirri Maz Duur]] work blood magic, and offers to kill her instead. Daenerys refuses. When the khal’s bloodriders try to stop the rite, Jhogo’s whip catches [[haggo|Haggo]] by the throat, and [[rakharo|Rakharo]] kills him.',
      },
    ),
    inBooks(
      [10, 73],
      { it: 'Sarebbe una vergogna', en: 'It would shame him' },
      {
        it: 'Jhogo resta con [[daenerys-targaryen|Daenerys]] quando gran parte dei cavalieri di [[drogo|khal Drogo]] se ne va. Prima della pira lei lo nomina suo ko e gli chiede il giuramento di cavaliere di sangue. Lui rifiuta, dicendo che per lui sarebbe una vergogna. Quando Daenerys viene trovata illesa tra le ceneri con tre draghi appena nati, si inginocchia davanti a lei.',
        en: 'Jhogo stays with [[daenerys-targaryen|Daenerys]] when most of [[drogo|Khal Drogo]]’s riders leave. Before the pyre she names him her ko and asks for his oath as a bloodrider. He refuses, saying that it would shame him. When Daenerys is found unharmed in the ashes with three newly hatched dragons, he kneels to her.',
      },
    ),
  ],
  'quaro': [
    inBooks(
      [8, 62],
      { it: 'Onorata, dice lui', en: 'Honored, he says' },
      {
        it: 'Quaro è uno dei giovani guerrieri incaricati di proteggere [[daenerys-targaryen|Daenerys]]. Cavalca con lei attraverso la città lhazareen che il khalasar di [[drogo|khal Drogo]] ha messo a sacco. Quando lei fa fermare i guerrieri che stanno violentando una prigioniera, Quaro le dice che la ragazza dovrebbe sentirsi onorata.',
        en: 'Quaro is one of the young warriors charged with guarding [[daenerys-targaryen|Daenerys]]. He rides with her through the Lhazareen town that [[drogo|Khal Drogo]]’s khalasar has sacked. When she has the riders stopped from raping a captive girl, Quaro tells her the girl should feel honored.',
      },
    ),
    inBooks(
      [9, 65],
      { it: 'Accorso alla sua chiamata', en: 'Answering her call' },
      {
        it: 'Mentre la sacerdotessa [[mirri-maz-duur|Mirri Maz Duur]] prepara la magia del sangue, Quaro aiuta a tenere fermo lo stallone di [[drogo|khal Drogo]]. Quando il cavaliere di sangue [[qotho|Qotho]] si rivolta contro [[daenerys-targaryen|Daenerys]], lei chiama a sé le sue guardie. Quaro accorre, e Qotho lo abbatte. Muore nello scontro davanti alla tenda del khal.',
        en: 'As the godswife [[mirri-maz-duur|Mirri Maz Duur]] prepares her blood magic, Quaro helps hold [[drogo|Khal Drogo]]’s stallion. When the bloodrider [[qotho|Qotho]] turns on [[daenerys-targaryen|Daenerys]], she calls her guards to her. Quaro answers, and Qotho cuts him down. He dies in the fight outside the khal’s tent.',
      },
    ),
  ],
  'mago': [
    inBooks(
      [8, 62],
      { it: 'La prigioniera tolta', en: 'A captive taken from him' },
      {
        it: 'Mago è un guerriero del khalasar di [[drogo|khal Drogo]], al seguito del ko Jhaqo. Durante il sacco di una città lhazareen, Mago sta violentando una ragazza quando [[daenerys-targaryen|Daenerys]] lo fa fermare dai suoi guerrieri e reclama la ragazza per sé. Mago si lamenta con il cavaliere di sangue [[haggo|Haggo]], e Drogo gli manda a dire di trovarsi un’altra prigioniera.',
        en: 'Mago is a rider in [[drogo|Khal Drogo]]’s khalasar, in the band of the ko Jhaqo. During the sack of a Lhazareen town, he is raping a girl when [[daenerys-targaryen|Daenerys]] has her riders stop him, and she claims the girl. Mago complains to the bloodrider [[haggo|Haggo]], and Drogo sends word that he should find another captive.',
      },
    ),
    onScreen(
      [8, 63],
      { it: 'La sfida al khal', en: 'Challenging the khal' },
      {
        it: 'Mago cavalca nel khalasar di [[drogo|khal Drogo]]. Quando i guerrieri assalgono un villaggio lhazareen, [[daenerys-targaryen|Daenerys]] impedisce che le prigioniere vengano violentate e le reclama per sé. Drogo dice ai guerrieri di trovarne altre. Mago non lo accetta, chiama Daenerys puttana straniera e sfida il khal. Drogo getta a terra il suo arakh, si lascia ferire da Mago, poi lo uccide e gli strappa la lingua.',
        en: 'Mago rides in [[drogo|Khal Drogo]]’s khalasar. When the riders raid a Lhazareen village, [[daenerys-targaryen|Daenerys]] stops them from raping the captive women and claims them. Drogo tells the warriors to find others. Mago refuses to accept it, calls Daenerys a foreign whore and challenges the khal. Drogo throws down his arakh, takes a cut from Mago, then kills him and tears out his tongue.',
      },
    ),
    inBooks(
      [10, 69],
      { it: 'Il cavaliere di sangue di Jhaqo', en: 'Jhaqo’s bloodrider' },
      {
        it: 'Quando [[drogo|khal Drogo]] non può più guidare, il suo khalasar si divide, e Mago segue Jhaqo, che si proclama khal e lo nomina suo cavaliere di sangue. Mago prende la ragazza lhazareen [[eroeh|Eroeh]], che [[daenerys-targaryen|Daenerys]] gli aveva tolto, la violenta e la consegna a Jhaqo. Anche gli altri cavalieri di sangue di Jhaqo la violentano, poi le tagliano la gola. Daenerys giura che farà pagare a Mago e a Jhaqo ciò che le hanno fatto.',
        en: 'When [[drogo|Khal Drogo]] can no longer lead, his khalasar breaks apart, and Mago follows Jhaqo, who calls himself a khal and makes Mago his bloodrider. Mago seizes the Lhazareen girl [[eroeh|Eroeh]], whom [[daenerys-targaryen|Daenerys]] had taken from him, rapes her and gives her to Jhaqo. Jhaqo’s other bloodriders rape her too, then cut her throat. Daenerys swears that she will make Mago and Jhaqo pay for what they did to her.',
      },
    ),
  ],
  'eroeh': [
    inBooks(
      [10, 69],
      { it: 'La ragazza salvata', en: 'The girl Daenerys saved' },
      {
        it: 'Eroeh è una ragazza lhazareen. Quando il khalasar di Drogo mette a sacco la sua città, [[daenerys-targaryen|Daenerys]] impedisce a [[mago|Mago]] di violentarla e la reclama per sé, e [[doreah|Doreah]] cura le sue ferite. Quando [[drogo|khal Drogo]] cade e il suo khalasar si divide, Mago la prende di nuovo, la violenta e la consegna al suo nuovo khal, Jhaqo. Anche i cavalieri di sangue di Jhaqo la violentano, poi le tagliano la gola.',
        en: 'Eroeh is a Lhazareen girl. When Drogo’s khalasar sacks her town, [[daenerys-targaryen|Daenerys]] stops [[mago|Mago]] from raping her and claims her, and [[doreah|Doreah]] tends her hurts. When [[drogo|Khal Drogo]] falls and his khalasar breaks apart, Mago seizes her again, rapes her and gives her to his new khal, Jhaqo. Jhaqo’s bloodriders rape her too, then cut her throat.',
      },
    ),
  ],
  // The Night’s Watch cast (#1363). Will, Gared and Waymar Royce open and
  // die in the first episode and the first chapters; the book’s Gared lives
  // to be beheaded in Bran I (chapter 2). Donal Noye and Chett are the books’
  // alone, and Todder and Bowen Marsh are too within the stage, since the
  // show first names them at episodes 30 and 41, so their stories sit at those
  // episodes. Jorah and Sam’s news of Robb are the show’s alone (#1352).
  'jon-snow': [
    inBooks(
      [1, 2],
      { it: 'Il disertore e i cuccioli', en: 'The deserter and the pups' },
      {
        it: 'Jon, il figlio bastardo di lord [[eddard-stark|Eddard Stark]], cavalca con il padre, i fratelli [[robb-stark|Robb]] e [[bran-stark|Bran]] e il pupillo [[theon-greyjoy|Theon Greyjoy]] per assistere alla decapitazione di un disertore dei Guardiani della notte. Jon dice a Bran di non distogliere lo sguardo. Quando Theon allontana la testa con un calcio, Jon gli dà dell’idiota sottovoce. Sulla via del ritorno Jon e Robb trovano una meta-lupa morta con i suoi cuccioli. Jon fa notare che sono cinque, uno per ciascuno dei figli legittimi di Eddard, e il padre li risparmia. Poi Jon trova un sesto cucciolo, albino e con gli occhi rossi, e lo tiene per sé.',
        en: 'Jon, the bastard son of Lord [[eddard-stark|Eddard Stark]], rides out with his father, his brothers [[robb-stark|Robb]] and [[bran-stark|Bran]] and the ward [[theon-greyjoy|Theon Greyjoy]] to see a deserter of the Night’s Watch beheaded. Jon tells Bran not to look away. When Theon kicks the head aside, Jon calls him an ass under his breath. On the way back Jon and Robb find a dead direwolf and her pups. There are five, Jon points out, one for each of Eddard’s trueborn children, and his father spares them. Then Jon finds a sixth pup, an albino with red eyes, and keeps it.',
      },
    ),
    onScreen(
      [1, 6],
      { it: 'Come un’armatura', en: 'Worn like armor' },
      {
        it: 'Jon, il figlio bastardo di lord [[eddard-stark|Eddard Stark]], assiste alla decapitazione del disertore [[will|Will]] per mano del padre e loda [[bran-stark|Bran]], che non ha distolto lo sguardo. Sulla via del ritorno gli Stark trovano una meta-lupa morta con cinque cuccioli. Jon convince il padre a risparmiarli, uno per ciascuno dei suoi figli legittimi, poi trova un sesto cucciolo, bianco e più piccolo degli altri, e lo tiene per sé. Quando arriva il re, [[catelyn-stark|Catelyn]] ritiene che un bastardo non debba partecipare al banchetto, e Jon si allena con la spada fuori dalla sala. Chiede allo zio [[benjen-stark|Benjen]] di portarlo con sé alla Barriera, e Benjen promette di pensarci. [[tyrion-lannister|Tyrion Lannister]] consiglia a Jon di portare il suo essere bastardo come un’armatura, perché nessuno possa usarlo per ferirlo.',
        en: 'Jon, the bastard son of Lord [[eddard-stark|Eddard Stark]], watches his father behead the deserter [[will|Will]] and praises [[bran-stark|Bran]] for not flinching. On the road back the Starks find a dead direwolf with five pups. Jon convinces his father to spare them, one for each of his trueborn children, then finds a sixth, a white runt, and keeps it. When the king visits, [[catelyn-stark|Catelyn]] thinks a bastard should not attend the feast, and Jon practices with his sword outside. He asks his uncle [[benjen-stark|Benjen]] to take him to the Wall, and Benjen agrees to think about it. [[tyrion-lannister|Tyrion Lannister]] tells Jon to wear being a bastard like armor, so that no one can use it to hurt him.',
      },
    ),
    inBooks(
      [1, 6],
      { it: 'Al tavolo degli scudieri', en: 'At the squires’ table' },
      {
        it: 'Al banchetto per re [[robert-baratheon|Robert]] a Grande Inverno, Jon siede con gli scudieri, perché lady [[catelyn-stark|Catelyn]] gli ha proibito di sedere con gli altri ragazzi davanti agli ospiti reali. Spettro aspetta sotto il tavolo. Lo zio [[benjen-stark|Benjen]], un uomo dei Guardiani della notte, si ferma a parlare con lui, e Jon chiede a Benjen di portarlo con sé alla Barriera. Benjen risponde che Jon è troppo giovane e che prima dovrebbe mettere al mondo qualche bastardo suo. Jon esce barcollando tra le risate. Nel cortile incontra [[tyrion-lannister|Tyrion Lannister]], che gli dice di non dimenticare mai ciò che è, così che nessuno possa usarlo per ferirlo.',
        en: 'At the feast for King [[robert-baratheon|Robert]] at Winterfell, Jon sits with the squires, because Lady [[catelyn-stark|Catelyn]] has forbidden him to sit with the other children in front of the royal party. Ghost waits under the table. His uncle [[benjen-stark|Benjen]], a man of the Night’s Watch, stops to talk, and Jon asks to go with him to the Wall. Benjen says that Jon is too young and should father a few bastards of his own first. Jon stumbles out amid laughter. In the yard he meets [[tyrion-lannister|Tyrion Lannister]], who tells him never to forget what he is, so that no one can use it to hurt him.',
      },
    ),
    inBoth(
      [2, 11],
      { it: 'Gli addii a Grande Inverno', en: 'Farewells at Winterfell' },
      {
        it: 'Jon sta per lasciare Grande Inverno per unirsi ai Guardiani della notte con lo zio [[benjen-stark|Benjen]]. Prima di partire saluta [[bran-stark|Bran]], che giace privo di sensi dopo la caduta, e al suo capezzale trova [[catelyn-stark|Catelyn]], che non lo vuole lì. Abbraccia [[robb-stark|Robb]], e i due sperano di rivedersi presto. Ad [[arya-stark|Arya]] regala una spada sottile fatta apposta per lei, con la prima lezione: si colpisce con la punta. Poi parte verso nord.',
        en: 'Jon is leaving Winterfell to join the Night’s Watch with his uncle [[benjen-stark|Benjen]]. Before he goes, he says goodbye to [[bran-stark|Bran]], who lies unconscious after his fall, and finds [[catelyn-stark|Catelyn]] at the bedside. She does not want him there. He embraces [[robb-stark|Robb]], and the two hope to meet again soon. He gives [[arya-stark|Arya]] a slim sword made for her, with her first lesson: stick them with the pointy end. Then he rides north.',
      },
    ),
    onScreen(
      [3, 20],
      { it: 'Lord Snow', en: 'Lord Snow' },
      {
        it: 'A Castello Nero Jon batte le altre reclute nel cortile. Ser [[alliser-thorne|Alliser Thorne]], il maestro d’armi, non lo loda e lo chiama “Lord Snow”. Alcune reclute, tra cui [[grenn|Grenn]] e [[pypar|Pyp]], se la prendono con Jon, finché non interviene [[tyrion-lannister|Tyrion Lannister]]. Tyrion fa notare a Jon che nessuno di loro ha mai avuto un maestro d’armi. In cima alla Barriera lo zio [[benjen-stark|Benjen]] si rifiuta di portarlo in perlustrazione nella Foresta Stregata: Jon non è pronto, e lì ogni uomo deve guadagnarsi ciò che ottiene. Jon comincia ad addestrare gli altri.',
        en: 'At Castle Black, Jon beats the other recruits in the yard. Ser [[alliser-thorne|Alliser Thorne]], the master-at-arms, gives him no praise and calls him “Lord Snow”. Several recruits, [[grenn|Grenn]] and [[pypar|Pyp]] among them, gang up on Jon, until [[tyrion-lannister|Tyrion Lannister]] steps in. Tyrion points out to Jon that none of them ever had a master-at-arms. On top of the Wall his uncle [[benjen-stark|Benjen]] refuses to take him on a ranging into the Haunted Forest: Jon is not ready, and there every man must earn what he gets. Jon begins to train the others.',
      },
    ),
    inBooks(
      [3, 20],
      { it: 'La lezione dell’armaiolo', en: 'The armorer’s lesson' },
      {
        it: 'A Castello Nero Jon batte facilmente [[grenn|Grenn]] nel cortile, e ser [[alliser-thorne|Alliser Thorne]] lo deride lo stesso. Lo zio [[benjen-stark|Benjen]] è partito in perlustrazione senza di lui. Nell’armeria Grenn, Todder e i due stupratori arrivati al nord con Jon lo affrontano, e Jon tiene Todder a terra per la gola. L’armaiolo [[donal-noye|Donal Noye]] li separa e spiega a Jon che ha avuto un maestro d’armi per tutta la vita, mentre gli altri no. Jon capisce di averli umiliati. Il lord comandante [[jeor-mormont|Mormont]] gli comunica che [[bran-stark|Bran]] si è svegliato, e Jon si offre di aiutare Grenn a migliorare. Una battuta su ser Alliser fa del maestro d’armi un suo nemico.',
        en: 'At Castle Black, Jon easily beats [[grenn|Grenn]] in the yard, and Ser [[alliser-thorne|Alliser Thorne]] still mocks him. His uncle [[benjen-stark|Benjen]] has left on a ranging without him. In the armory Grenn, Todder and the two rapers who rode north with Jon confront him, and Jon pins Todder down by the throat. The armorer [[donal-noye|Donal Noye]] breaks it up and tells Jon that he has had a master-at-arms all his life and the others never did. Jon sees that he has been shaming them. Lord Commander [[jeor-mormont|Mormont]] tells him that [[bran-stark|Bran]] has woken, and Jon offers to help Grenn improve. A joke at Ser Alliser’s expense makes the master-at-arms his enemy.',
      },
    ),
    inBoth(
      [4, 27],
      { it: 'Il protettore di Sam', en: 'Sam’s protector' },
      {
        it: 'Una nuova recluta, [[samwell-tarly|Samwell Tarly]], arriva a Castello Nero: è grasso e non sa combattere. Ser [[alliser-thorne|Alliser Thorne]] gli aizza contro gli altri, e Jon si mette in mezzo. Sam ammette di essere un codardo. Racconta a Jon che il padre di Sam lo ha costretto a prendere il nero, minacciando di farlo morire in un incidente di caccia se avesse rifiutato. Jon convince le reclute ad andarci piano con Sam. Solo [[rast|Rast]] rifiuta, finché Jon, [[grenn|Grenn]] e [[pypar|Pyp]] non vanno da lui di notte con [[ghost-direwolf|Spettro]].',
        en: 'A new recruit, [[samwell-tarly|Samwell Tarly]], arrives at Castle Black, fat and unable to fight. Ser [[alliser-thorne|Alliser Thorne]] sets the others on him, and Jon puts himself in their way. Sam admits that he is a coward. He tells Jon that Sam’s own father made him take the black, threatening to have him killed in a hunting accident if he refused. Jon persuades the recruits to go easy on Sam. Only [[rast|Rast]] refuses, until Jon, [[grenn|Grenn]] and [[pypar|Pyp]] visit him at night with [[ghost-direwolf|Ghost]].',
      },
    ),
    inBooks(
      [5, 42],
      { it: 'Alla porta del maestro', en: 'At the maester’s door' },
      {
        it: 'Ser [[alliser-thorne|Alliser Thorne]] presenta al lord comandante otto reclute pronte, tra cui Jon, ma non [[samwell-tarly|Sam]]. Jon teme che, senza gli amici a proteggerlo, Sam resti alla mercé di ser Alliser. A notte fonda Jon va da maestro [[aemon|Aemon]]. L’attendente [[chett|Chett]] cerca di mandarlo via, ma Jon mette un piede nella porta. Chiede ad Aemon di lasciare che Sam pronunci il giuramento e serva come attendente, perché Sam sa leggere, scrivere e fare di conto. Aemon risponde che ci penserà.',
        en: 'Ser [[alliser-thorne|Alliser Thorne]] passes eight recruits on to the Lord Commander, Jon among them, but not [[samwell-tarly|Sam]]. Without his friends to protect him, Jon fears, Sam will be at Ser Alliser’s mercy. Late at night Jon goes to Maester [[aemon|Aemon]]. The steward [[chett|Chett]] tries to send him away, but Jon puts his foot in the door. He asks Aemon to let Sam take his vows and serve as a steward, since Sam can read, write and do sums. Aemon says he will think on it.',
      },
    ),
    inBoth(
      [7, 49],
      {
        it: 'Attendente del lord comandante',
        en: 'The Lord Commander’s steward',
      },
      {
        it: 'Il lord comandante [[jeor-mormont|Jeor Mormont]] accoglie nei Guardiani della notte il gruppo di reclute di Jon e assegna gli incarichi. Jon, il migliore combattente del gruppo, viene destinato agli attendenti invece che ai ranger, come attendente personale del lord comandante. Jon è indignato. [[samwell-tarly|Sam]] gli fa notare che forse Mormont vuole prepararlo al comando. Jon e Sam pronunciano insieme il giuramento davanti a un albero del cuore oltre la Barriera. Poi [[ghost-direwolf|Spettro]] torna dal bosco con una mano umana tra le fauci.',
        en: 'Lord Commander [[jeor-mormont|Jeor Mormont]] takes Jon’s group of recruits into the Night’s Watch and gives out their posts. Jon, the best fighter among them, is sent to the stewards rather than the rangers, to serve as the Lord Commander’s own steward. He is angry. [[samwell-tarly|Sam]] tells him that Mormont may mean to groom him for command. Jon and Sam swear their vows together before a heart tree beyond the Wall. Afterwards [[ghost-direwolf|Ghost]] comes back from the woods with a human hand in his jaws.',
      },
    ),
    inBoth(
      [8, 53],
      {
        it: 'Fuoco nelle stanze del lord comandante',
        en: 'Fire in the Lord Commander’s rooms',
      },
      {
        it: 'Il gruppo riporta da oltre la Barriera i corpi di [[othor|Othor]] e [[jafer-flowers|Jafer Flowers]], due ranger di [[benjen-stark|Benjen]]. Alcuni confratelli vogliono bruciarli, ma il lord comandante [[jeor-mormont|Mormont]] vuole che li esamini maestro [[aemon|Aemon]]. Mormont comunica a Jon che il padre di Jon, [[eddard-stark|Eddard Stark]], è stato arrestato per tradimento, e lo avverte di non fare sciocchezze. Quando ser [[alliser-thorne|Alliser Thorne]] lo chiama bastardo di un traditore, Jon gli si scaglia contro con un coltello, e gli amici di Jon lo trattengono. Quella notte [[ghost-direwolf|Spettro]] sveglia Jon, che nelle stanze del lord comandante trova il cadavere di Othor rianimato. Jon lo distrugge con il fuoco.',
        en: 'The party brings back from beyond the Wall the bodies of [[othor|Othor]] and [[jafer-flowers|Jafer Flowers]], two of [[benjen-stark|Benjen]]’s rangers. Some of the brothers want them burned, but Lord Commander [[jeor-mormont|Mormont]] wants Maester [[aemon|Aemon]] to examine them. Mormont tells Jon that Jon’s father, [[eddard-stark|Eddard Stark]], has been arrested for treason, and warns him not to do anything stupid. When Ser [[alliser-thorne|Alliser Thorne]] calls him a traitor’s bastard, Jon goes for him with a knife, and his friends hold him back. That night [[ghost-direwolf|Ghost]] wakes Jon, who finds Othor’s corpse risen in the Lord Commander’s rooms. Jon destroys it with fire.',
      },
    ),
    inBoth(
      [9, 61],
      { it: 'Lungo Artiglio', en: 'Longclaw' },
      {
        it: 'Per ringraziare Jon di avergli salvato la vita, il lord comandante [[jeor-mormont|Mormont]] gli dona Lungo Artiglio, una spada d’acciaio di Valyria. Mormont ha mandato ser [[alliser-thorne|Alliser Thorne]] ad Approdo del Re con la mano di uno dei morti, per chiedere aiuto al re. Maestro [[aemon|Aemon]] capisce che Jon è diviso tra il giuramento e la famiglia. Targaryen di nascita, Aemon rivela di essere figlio di un re e fratello di un altro, ed è rimasto alla Barriera mentre la sua casata veniva distrutta. Aemon non dirà a Jon se restare o partire: Jon deve scegliere da solo, e convivere con la scelta.',
        en: 'To thank Jon for saving his life, Lord Commander [[jeor-mormont|Mormont]] gives him Longclaw, a Valyrian steel sword. Mormont has sent Ser [[alliser-thorne|Alliser Thorne]] to King’s Landing with the hand of one of the dead men, to ask the king for help. Maester [[aemon|Aemon]] sees that Jon is torn between his vows and his family. A Targaryen by birth, Aemon reveals that he was born the son of one king and the brother of another, and that he stayed at the Wall while his house was destroyed. Aemon will not tell Jon whether to stay or go: Jon must choose, and live with it.',
      },
    ),
    inBoth(
      [10, 71],
      { it: 'La fuga verso sud', en: 'The ride south' },
      {
        it: 'Jon viene a sapere che suo padre è stato decapitato ad Approdo del Re. Sella un cavallo per andare a sud e unirsi alla guerra di [[robb-stark|Robb]], e [[samwell-tarly|Sam]] non riesce a fermarlo. Gli amici di Jon lo inseguono, tra loro [[grenn|Grenn]] e [[pypar|Pyp]]. Lo circondano e recitano il giuramento dei Guardiani della notte finché Jon non accetta di tornare. Il lord comandante [[jeor-mormont|Mormont]] lascia correre la diserzione. La guerra nel sud, spiega a Jon, conta meno di ciò che arriva da oltre la Barriera: Mormont vuole guidare i Guardiani a nord in forze e ritrovare [[benjen-stark|Benjen]]. Jon resta.',
        en: 'Jon learns that his father has been beheaded in King’s Landing. He saddles a horse to ride south and join [[robb-stark|Robb]]’s war, and [[samwell-tarly|Sam]] cannot stop him. His friends ride after him, [[grenn|Grenn]] and [[pypar|Pyp]] among them. They surround him and recite the vows of the Night’s Watch until he agrees to come back. Lord Commander [[jeor-mormont|Mormont]] lets the desertion pass. The war in the south matters less, he tells Jon, than what is coming from beyond the Wall: he means to lead the Watch north in force and find [[benjen-stark|Benjen]]. Jon stays.',
      },
    ),
  ],
  'jeor-mormont': [
    inBooks(
      [3, 20],
      { it: 'Notizie da Grande Inverno', en: 'Word from Winterfell' },
      {
        it: 'Jeor Mormont è il lord comandante dei Guardiani della notte a Castello Nero. Da Grande Inverno gli arrivano notizie di [[bran-stark|Bran]], il fratello di [[jon-snow|Jon Snow]], e Jeor manda a chiamare Jon, una recluta in addestramento. Bran si è svegliato, anche se è rimasto storpio. Jon è così felice che quasi non ascolta il resto, corre di sotto e fa volteggiare in aria [[tyrion-lannister|Tyrion Lannister]].',
        en: 'Jeor Mormont is the Lord Commander of the Night’s Watch at Castle Black. Word reaches him from Winterfell about [[bran-stark|Bran]], the brother of [[jon-snow|Jon Snow]], and Jeor sends for Jon, a recruit in training. Bran has woken, though he is crippled. Jon is so happy that he barely takes in the rest, runs downstairs and swings [[tyrion-lannister|Tyrion Lannister]] around in the air.',
      },
    ),
    onScreen(
      [3, 22],
      { it: 'Uomini per la Barriera', en: 'Men for the Wall' },
      {
        it: 'Jeor Mormont, lord comandante dei Guardiani della notte, osserva con [[tyrion-lannister|Tyrion Lannister]] l’addestramento delle reclute a Castello Nero. Tyrion ha da ridire sui modi duri di ser [[alliser-thorne|Alliser Thorne]], ma a Jeor basta che Alliser trasformi ladri e fuggiaschi in uomini dei Guardiani. Più tardi, con maestro [[aemon|Aemon]] al suo fianco, Jeor chiede a Tyrion di perorare a corte la causa dei Guardiani, che hanno pericolosamente bisogno di uomini. Tyrion dubita che oltre la Barriera ci siano mostri, ma accetta di portare il messaggio alla regina, sua sorella.',
        en: 'Jeor Mormont, Lord Commander of the Night’s Watch, watches the recruits train at Castle Black with [[tyrion-lannister|Tyrion Lannister]]. Tyrion questions the harsh ways of Ser [[alliser-thorne|Alliser Thorne]], but Jeor only needs Alliser to turn thieves and runaways into men of the Watch. Later, with Maester [[aemon|Aemon]] at his side, Jeor asks Tyrion to speak for the Watch at court, since it is dangerously short of men. Tyrion doubts that monsters wait beyond the Wall, but agrees to take word to his sister, the queen.',
      },
    ),
    inBooks(
      [3, 22],
      { it: 'La cena degli ufficiali', en: 'The officers’ supper' },
      {
        it: 'Nell’ultima sera di [[tyrion-lannister|Tyrion Lannister]] a Castello Nero, Jeor cena con lui e con gli ufficiali dei Guardiani, e fatica a mantenere la calma mentre Tyrion si prende gioco di ser [[alliser-thorne|Alliser Thorne]]. Poi Jeor chiede a Tyrion di convincere il re, il padre e il fratello di Tyrion a mandare uomini alla Barriera. I bruti fuggono verso sud, e i pescatori vicino a Forte Orientale dicono di aver visto gli Estranei. Jeor si rammarica di aver affidato la pattuglia scomparsa all’inesperto ser [[waymar-royce|Waymar Royce]], e non avrebbe mai creduto che il vecchio [[gared|Gared]] potesse disertare.',
        en: 'On [[tyrion-lannister|Tyrion Lannister]]’s last night at Castle Black, Jeor sups with him and the officers of the Watch, and struggles to keep his composure as Tyrion mocks Ser [[alliser-thorne|Alliser Thorne]]. Afterwards Jeor asks Tyrion to urge the king, Tyrion’s father and Tyrion’s brother to send men to the Wall. Wildlings are fleeing south, and fisherfolk near Eastwatch claim to have seen the Others. Jeor regrets giving the patrol that vanished to the green Ser [[waymar-royce|Waymar Royce]], and he never thought old [[gared|Gared]] would desert.',
      },
    ),
    inBoth(
      [7, 49],
      { it: 'Il nuovo attendente', en: 'A new steward' },
      {
        it: 'Jeor Mormont accoglie nei Guardiani della notte il gruppo di reclute di [[jon-snow|Jon Snow]] e assegna gli incarichi. Jon, il migliore combattente del gruppo, spera di diventare ranger, ma Jeor lo destina agli attendenti, come suo attendente personale. Jon la prende come un affronto. L’amico [[samwell-tarly|Samwell Tarly]] gli fa notare che forse Jeor vuole prepararlo al comando, e Jon e Sam pronunciano il giuramento davanti a un albero del cuore oltre la Barriera.',
        en: 'Jeor Mormont takes the group of recruits of [[jon-snow|Jon Snow]] into the Night’s Watch and hands out their posts. Jon, the best fighter of the group, hopes for the rangers, but Jeor has him sent to the stewards, to serve as the Lord Commander’s own steward. Jon takes it as a slight. His friend [[samwell-tarly|Samwell Tarly]] tells him that Jeor may mean to groom him for command, and Jon and Sam swear their vows before a heart tree beyond the Wall.',
      },
    ),
    inBoth(
      [8, 53],
      { it: 'Il morto nella torre', en: 'The dead man in the tower' },
      {
        it: 'I corpi di [[othor|Othor]] e [[jafer-flowers|Jafer Flowers]], due ranger di [[benjen-stark|Benjen Stark]], vengono trovati oltre la Barriera e riportati a Castello Nero. Alcuni confratelli vogliono bruciarli, ma Jeor vuole prima farli esaminare da maestro [[aemon|Aemon]]. Jeor comunica a [[jon-snow|Jon Snow]] che il padre di Jon, [[eddard-stark|Eddard Stark]], è stato arrestato per tradimento, e lo avverte di non fare sciocchezze. Quella notte il cadavere di Othor si rianima e va a cercare Jeor nelle sue stanze. Jon lo distrugge con il fuoco.',
        en: 'The bodies of [[othor|Othor]] and [[jafer-flowers|Jafer Flowers]], two of the rangers of [[benjen-stark|Benjen Stark]], are found beyond the Wall and carried back to Castle Black. Some of the brothers want them burned, but Jeor wants Maester [[aemon|Aemon]] to examine them first. Jeor tells [[jon-snow|Jon Snow]] that Jon’s father, [[eddard-stark|Eddard Stark]], has been arrested for treason, and warns him not to do anything stupid. That night Othor’s corpse rises and comes for Jeor in his rooms. Jon destroys it with fire.',
      },
    ),
    onScreen(
      [9, 61],
      { it: 'La spada di un figlio', en: 'A son’s sword' },
      {
        it: 'Per ringraziare [[jon-snow|Jon Snow]] di avergli salvato la vita, Jeor gli dona Lungo Artiglio, una spada d’acciaio di Valyria. Era destinata al figlio di Jeor, [[jorah-mormont|Jorah]], che ha disonorato la casata ed è fuggito in esilio oltre il mare. Jeor restituisce a Jon i suoi incarichi e gli dice di aver mandato ser [[alliser-thorne|Alliser Thorne]] ad Approdo del Re con la mano del morto, per deporla davanti al re e chiedere aiuto.',
        en: 'To thank [[jon-snow|Jon Snow]] for saving his life, Jeor gives him Longclaw, a Valyrian steel sword. It was meant for Jeor’s son, [[jorah-mormont|Jorah]], who shamed their house and fled into exile across the sea. Jeor restores Jon to his duties and tells him that he has sent Ser [[alliser-thorne|Alliser Thorne]] to King’s Landing with the dead man’s hand, to lay it before the king and ask for help.',
      },
    ),
    inBooks(
      [9, 61],
      { it: 'La spada dei Mormont', en: 'The Mormonts’ sword' },
      {
        it: 'Jeor dona a [[jon-snow|Jon Snow]] Lungo Artiglio, una spada bastarda d’acciaio di Valyria che appartiene alla casa Mormont da cinque secoli. La spada è rimasta danneggiata nell’incendio della torre di Jeor, che ne ha fatto rifare il pomolo a forma di testa di lupo bianco. Jon cerca di rifiutarla, ma Jeor gli dice che se l’è guadagnata pensando di usare il fuoco contro il morto. Jeor ha mandato ser [[alliser-thorne|Alliser Thorne]] ad Approdo del Re con la mano di [[jafer-flowers|Jafer Flowers]], e così fra Alliser e Jon ci sono mille leghe.',
        en: 'Jeor gives [[jon-snow|Jon Snow]] Longclaw, a Valyrian steel bastard sword that has belonged to House Mormont for five centuries. It was damaged in the fire in Jeor’s tower, and Jeor has had a new pommel made in the likeness of a white wolf’s head. Jon tries to refuse it, but Jeor says he earned it by thinking to use fire against the dead man. Jeor has sent Ser [[alliser-thorne|Alliser Thorne]] to King’s Landing with the hand of [[jafer-flowers|Jafer Flowers]], which also puts a thousand leagues between Alliser and Jon.',
      },
    ),
    inBoth(
      [10, 71],
      { it: 'In forze oltre la Barriera', en: 'Beyond the Wall in force' },
      {
        it: 'Dopo la decapitazione di [[eddard-stark|Eddard Stark]], [[jon-snow|Jon Snow]] fugge per unirsi al fratello [[robb-stark|Robb]], ma gli amici di Jon lo riportano indietro. Jeor lascia correre la diserzione: se i Guardiani giustiziassero ogni uomo che scappa e poi torna, non resterebbe nessuno a difendere la Barriera. La guerra tra gli Stark e i Lannister, spiega a Jon, conta meno della minaccia oltre la Barriera. Jeor vuole guidare i Guardiani della notte a nord in forze e ritrovare [[benjen-stark|Benjen Stark]]. Jon resta.',
        en: 'After [[eddard-stark|Eddard Stark]] is beheaded, [[jon-snow|Jon Snow]] rides off to join his brother [[robb-stark|Robb]], but Jon’s friends bring him back. Jeor lets the desertion pass: if the Watch executed every man who ran off and came back, there would be no one left to guard the Wall. The war between the Starks and the Lannisters, he tells Jon, matters less than the threat beyond the Wall. Jeor means to lead the Night’s Watch north in force and find [[benjen-stark|Benjen Stark]]. Jon stays.',
      },
    ),
  ],
  'aemon': [
    onScreen(
      [3, 22],
      { it: 'Un inverno peggiore', en: 'A worse winter' },
      {
        it: 'Aemon è il maestro di Castello Nero, vecchissimo e cieco, e il principale consigliere del lord comandante [[jeor-mormont|Jeor Mormont]]. Quando Jeor chiede a [[tyrion-lannister|Tyrion Lannister]] di ottenere a corte più uomini per i Guardiani, Aemon avverte Tyrion che il motto degli Stark dice il vero: l’inverno sta arrivando, e sarà peggiore di qualunque inverno a memoria d’uomo. Con lui potrebbero arrivare cose più pericolose dei bruti. Tyrion ne dubita, ma accetta di portare il messaggio alla regina.',
        en: 'Aemon is the maester of Castle Black, ancient and blind, and the chief adviser of Lord Commander [[jeor-mormont|Jeor Mormont]]. When Jeor asks [[tyrion-lannister|Tyrion Lannister]] to get the Watch more men at court, Aemon warns Tyrion that the Stark words are right: winter is coming, and it will be worse than any in living memory. Things more dangerous than wildlings may come with it. Tyrion doubts it, but agrees to take word to the queen.',
      },
    ),
    inBooks(
      [3, 22],
      { it: 'Un gigante', en: 'A giant' },
      {
        it: 'Aemon è il maestro di Castello Nero, cieco e molto anziano. Nell’ultima sera di [[tyrion-lannister|Tyrion Lannister]] alla Barriera siede alla cena che il lord comandante [[jeor-mormont|Jeor Mormont]] offre a Tyrion con gli ufficiali dei Guardiani. Tyrion si prende gioco di ser [[alliser-thorne|Alliser Thorne]] finché il cavaliere non se ne va. Aemon parla con Tyrion e lo definisce un gigante, e Tyrion risponde che il maestro è gentile.',
        en: 'Aemon is the maester of Castle Black, blind and very old. On the last night of [[tyrion-lannister|Tyrion Lannister]] at the Wall, he sits at the supper Lord Commander [[jeor-mormont|Jeor Mormont]] gives for Tyrion with the officers of the Watch. Tyrion mocks Ser [[alliser-thorne|Alliser Thorne]] until the knight walks out. Aemon speaks with Tyrion and calls him a giant, and Tyrion answers that the maester is kind.',
      },
    ),
    inBooks(
      [5, 42],
      { it: 'Un visitatore a mezzanotte', en: 'A midnight visitor' },
      {
        it: 'A notte fonda [[jon-snow|Jon Snow]] si presenta alla porta di Aemon. L’attendente del maestro, [[chett|Chett]], cerca di mandarlo via, ma Jon non se ne va, e Aemon lo riceve accanto al fuoco. Jon gli chiede di permettere a [[samwell-tarly|Samwell Tarly]] di pronunciare il giuramento con le altre reclute. Aemon osserva che l’addestramento spetta a ser [[alliser-thorne|Alliser]], e Chett insiste che il lavoro di un attendente non è per i codardi. Jon risponde che Sam sa leggere, scrivere e fare di conto, e potrebbe aiutare il maestro. Aemon dice che ci penserà.',
        en: 'Late at night [[jon-snow|Jon Snow]] comes to Aemon’s door. The maester’s steward [[chett|Chett]] tries to send Jon away, but Jon will not go, and Aemon receives him by the fire. Jon asks him to let [[samwell-tarly|Samwell Tarly]] swear his vows with the other recruits. Aemon points out that the training is for Ser [[alliser-thorne|Alliser]] to judge, and Chett insists that a steward’s work is not for cowards. Jon answers that Sam can read, write and do sums, and could help the maester. Aemon says he will think on it.',
      },
    ),
    inBoth(
      [7, 49],
      { it: 'Nessuna comprensione', en: 'No sympathy' },
      {
        it: 'Quando le reclute entrano nei Guardiani della notte, [[samwell-tarly|Samwell Tarly]] diventa l’attendente di Aemon. [[jon-snow|Jon Snow]], che sperava di diventare ranger, viene invece nominato attendente personale del lord comandante e se ne lamenta. Aemon non mostra alcuna comprensione per lui. Poi Jon e Sam pronunciano il giuramento davanti a un albero del cuore oltre la Barriera.',
        en: 'When the recruits are taken into the Night’s Watch, [[samwell-tarly|Samwell Tarly]] becomes Aemon’s steward. [[jon-snow|Jon Snow]], who hoped to be a ranger, is made the Lord Commander’s personal steward instead, and complains about it. Aemon shows him no sympathy. Then Jon and Sam swear their vows before a heart tree beyond the Wall.',
      },
    ),
    inBoth(
      [9, 61],
      { it: 'Il dovere e la famiglia', en: 'Duty and family' },
      {
        it: 'Aemon capisce che [[jon-snow|Jon Snow]] è diviso tra il giuramento e la famiglia. Targaryen di nascita, Aemon rivela di essere figlio di un re e fratello di un altro. Quando la sua casata fu distrutta nel sud, Aemon, già vecchio e cieco, rimase alla Barriera senza fare nulla. Per questo non dirà a Jon se restare o partire: Jon deve scegliere da solo e convivere con la scelta per il resto della vita.',
        en: 'Aemon sees that [[jon-snow|Jon Snow]] is torn between his vows and his family. A Targaryen by birth, Aemon reveals that he was born the son of one king and the brother of another. When his house was destroyed in the south, Aemon, already old and blind, stayed at the Wall and did nothing. So he will not tell Jon whether to stay or go: Jon must make the choice himself and live with it for the rest of his life.',
      },
    ),
  ],
  'samwell-tarly': [
    inBoth(
      [4, 27],
      { it: 'Un codardo dichiarato', en: 'A self-confessed coward' },
      {
        it: 'Samwell Tarly arriva a Castello Nero: è grasso e non sa combattere. Nel cortile ser [[alliser-thorne|Alliser Thorne]] lo deride e gli aizza contro le altre reclute, finché [[jon-snow|Jon Snow]] non si mette in mezzo. Sam si dichiara apertamente un codardo. Racconta che suo padre, lord Randyll Tarly, gli ha dato una scelta: prendere il nero o morire in un incidente di caccia. Jon convince le altre reclute ad andarci piano con Sam. Solo [[rast|Rast]] rifiuta, finché Jon non lo spaventa con il suo meta-lupo, [[ghost-direwolf|Spettro]].',
        en: 'Samwell Tarly arrives at Castle Black, fat and unable to fight. In the yard Ser [[alliser-thorne|Alliser Thorne]] mocks him and sets the other recruits on him, until [[jon-snow|Jon Snow]] stands in their way. Sam openly calls himself a coward. He says that his father, Lord Randyll Tarly, gave him a choice: take the black, or die in a hunting accident. Jon persuades the other recruits to go easy on Sam. Only [[rast|Rast]] refuses, until Jon frightens him with his direwolf, [[ghost-direwolf|Ghost]].',
      },
    ),
    inBoth(
      [7, 49],
      { it: 'Davanti all’albero del cuore', en: 'Before the heart tree' },
      {
        it: 'Sam entra nei Guardiani della notte con il gruppo di [[jon-snow|Jon Snow]] e diventa l’attendente di maestro [[aemon|Aemon]]. Jon è furioso di essere stato destinato anche lui agli attendenti, e Sam gli fa notare che forse il lord comandante vuole prepararlo al comando. La famiglia di Sam venera i Sette, ma Sam sceglie di pronunciare il giuramento accanto a Jon davanti a un albero del cuore oltre la Barriera, perché i Sette non gli hanno mai risposto. Poi [[ghost-direwolf|Spettro]] torna dal bosco con una mano umana tra le fauci.',
        en: 'Sam joins the Night’s Watch with the group of [[jon-snow|Jon Snow]] and becomes the steward of Maester [[aemon|Aemon]]. Jon is angry to be made a steward himself, and Sam tells him the Lord Commander may mean to groom him for command. Though Sam’s family keeps the Seven, Sam chooses to swear his vows beside Jon before a heart tree beyond the Wall, since the Seven have never answered him. Afterwards [[ghost-direwolf|Ghost]] returns from the woods with a human hand in his jaws.',
      },
    ),
    inBoth(
      [8, 53],
      { it: 'Corpi che non marciscono', en: 'Bodies that do not rot' },
      {
        it: 'Sam fa parte del gruppo che riporta a Castello Nero i corpi di [[othor|Othor]] e [[jafer-flowers|Jafer Flowers]]. Nota ciò che agli altri sfugge: i due ranger sembrano morti da tempo, eppure i corpi non puzzano. Il lord comandante [[jeor-mormont|Jeor Mormont]] vuole che maestro [[aemon|Aemon]] li esamini prima di decidere. Quella notte il cadavere di Othor si rianima, e [[jon-snow|Jon Snow]] lo distrugge con il fuoco.',
        en: 'Sam is with the party that brings the bodies of [[othor|Othor]] and [[jafer-flowers|Jafer Flowers]] back to Castle Black. He notices what the others miss: the two rangers look long dead, yet the bodies do not stink. Lord Commander [[jeor-mormont|Jeor Mormont]] wants Maester [[aemon|Aemon]] to examine them before anything is decided. That night Othor’s corpse rises, and [[jon-snow|Jon Snow]] destroys it with fire.',
      },
    ),
    onScreen(
      [9, 61],
      { it: 'La notizia della guerra', en: 'News of the war' },
      {
        it: 'Nella sala i confratelli si accalcano intorno a Lungo Artiglio, la spada che il lord comandante ha donato a [[jon-snow|Jon Snow]], ma Sam se ne sta in disparte. Prende Jon da parte e gli dice che [[robb-stark|Robb]] marcia verso sud alla testa di un esercito, per fare la guerra. Jon sente che dovrebbe essere al fianco del fratello. Maestro [[aemon|Aemon]] dice a Jon che il dovere verso i Guardiani della notte viene prima di tutto.',
        en: 'In the hall the brothers crowd around Longclaw, the sword the Lord Commander has given [[jon-snow|Jon Snow]], but Sam keeps apart. He takes Jon aside and tells him that [[robb-stark|Robb]] has marched south at the head of an army, to war. Jon feels he should be with his brother. Maester [[aemon|Aemon]] tells Jon that his duty to the Night’s Watch comes first.',
      },
    ),
    onScreen(
      [10, 71],
      { it: 'Disarcionato', en: 'Thrown from his horse' },
      {
        it: 'Quando [[jon-snow|Jon Snow]] viene a sapere che suo padre è stato decapitato, sella un cavallo per raggiungere [[robb-stark|Robb]] nel sud. Sam lo supplica di restare e di rispettare il giuramento, ma Jon parte. Sam lo insegue con [[grenn|Grenn]] e [[pypar|Pyp]], finché un ramo non disarciona Sam, e Jon torna indietro ad aiutarlo. Gli amici circondano Jon e recitano il giuramento dei Guardiani della notte finché Jon non accetta di tornare.',
        en: 'When [[jon-snow|Jon Snow]] learns that his father has been beheaded, he saddles a horse to join [[robb-stark|Robb]] in the south. Sam begs him to stay and keep his vows, but Jon rides off. Sam rides after him with [[grenn|Grenn]] and [[pypar|Pyp]], until a branch knocks Sam from his horse, and Jon turns back to help. His friends surround Jon and recite the vows of the Night’s Watch until he agrees to come back.',
      },
    ),
    inBooks(
      [10, 71],
      { it: 'Sulla porta della stalla', en: 'In the stable door' },
      {
        it: 'A notte fonda Sam trova [[jon-snow|Jon Snow]] che sella una giumenta nelle stalle di Castello Nero, deciso a raggiungere il fratello [[robb-stark|Robb]]. Sam si piazza sulla porta e gli dice che non può farlo. Jon sprona il cavallo, e Sam deve gettarsi da parte. Sam non sveglia il lord comandante, ma avverte gli amici di Jon: [[grenn|Grenn]], [[pypar|Pyp]], Todder, [[halder|Halder]] e Matthar inseguono Jon e lo riportano indietro prima dell’alba.',
        en: 'Late at night Sam finds [[jon-snow|Jon Snow]] saddling a mare in the stables of Castle Black, set on joining his brother [[robb-stark|Robb]]. Sam stands in the doorway and says Jon cannot do this. Jon spurs the horse, and Sam has to throw himself out of the way. Sam does not wake the Lord Commander, but he tells Jon’s friends: [[grenn|Grenn]], [[pypar|Pyp]], Todder, [[halder|Halder]] and Matthar ride after Jon and bring him back before dawn.',
      },
    ),
  ],
  'alliser-thorne': [
    inBoth(
      [3, 20],
      { it: 'Il maestro d’armi', en: 'The master-at-arms' },
      {
        it: 'Ser Alliser Thorne è il maestro d’armi di Castello Nero e addestra le reclute dei Guardiani della notte con aperto disprezzo. [[jon-snow|Jon Snow]], cresciuto con un maestro d’armi tutto suo, batte uno dopo l’altro gli altri ragazzi nel cortile. Alliser non lo loda e lo deride chiamandolo “Lord Snow”.',
        en: 'Ser Alliser Thorne is the master-at-arms of Castle Black, and he trains the recruits of the Night’s Watch with open contempt. [[jon-snow|Jon Snow]], who grew up with a master-at-arms of his own, beats the other boys in the yard one after another. Alliser gives him no praise and mocks him as “Lord Snow”.',
      },
    ),
    inBooks(
      [3, 22],
      { it: 'Deriso a cena', en: 'Mocked at supper' },
      {
        it: 'Alla cena che il lord comandante [[jeor-mormont|Jeor Mormont]] offre nell’ultima sera di [[tyrion-lannister|Tyrion Lannister]] alla Barriera, Tyrion schernisce Alliser davanti agli ufficiali. Alliser lo sfida, Tyrion lo deride ancora e Alliser se ne va furioso. Poi ser Jaremy Rykker racconta a Tyrion che fu proprio il padre di Tyrion, dopo il sacco di Approdo del Re, a dare ad Alliser e a Jaremy la scelta tra i Guardiani della notte e l’esecuzione.',
        en: 'At the supper Lord Commander [[jeor-mormont|Jeor Mormont]] gives on the last night of [[tyrion-lannister|Tyrion Lannister]] at the Wall, Tyrion taunts Alliser in front of the officers. Alliser challenges him, Tyrion mocks him further, and Alliser storms out. Ser Jaremy Rykker then tells Tyrion that it was Tyrion’s own father who, after the sack of King’s Landing, gave Alliser and Jaremy a choice between the Night’s Watch and execution.',
      },
    ),
    inBoth(
      [4, 27],
      { it: 'La nuova recluta', en: 'The new recruit' },
      {
        it: 'Quando [[samwell-tarly|Samwell Tarly]] arriva a Castello Nero, grasso e incapace di combattere, Alliser lo umilia nel cortile e gli aizza contro le altre reclute. [[jon-snow|Jon Snow]] si mette in mezzo, e Alliser manda altri ragazzi contro di lui, ma Jon li tiene a bada. In seguito le reclute si rifiutano di fare del male a Sam durante l’addestramento, e Alliser va su tutte le furie.',
        en: 'When [[samwell-tarly|Samwell Tarly]] arrives at Castle Black, fat and unable to fight, Alliser humiliates him in the yard and sets the other recruits on him. [[jon-snow|Jon Snow]] stands in their way, and Alliser sends more boys against Jon, but Jon holds them off. Afterwards the recruits refuse to hurt Sam in training, and Alliser is furious with them.',
      },
    ),
    inBoth(
      [8, 53],
      { it: 'Il bastardo di un traditore', en: 'A traitor’s bastard' },
      {
        it: 'A Castello Nero arriva la notizia che [[eddard-stark|Eddard Stark]] è stato arrestato per tradimento, e il lord comandante [[jeor-mormont|Jeor Mormont]] avverte [[jon-snow|Jon Snow]] di non fare sciocchezze. Alliser schernisce Jon: non è solo un bastardo, è il bastardo di un traditore. Jon gli si scaglia contro con un coltello, ma gli amici di Jon lo trattengono prima che raggiunga Alliser.',
        en: 'Word reaches Castle Black that [[eddard-stark|Eddard Stark]] has been arrested for treason, and Lord Commander [[jeor-mormont|Jeor Mormont]] warns [[jon-snow|Jon Snow]] not to do anything stupid. Alliser taunts Jon that he is not just a bastard but a traitor’s bastard. Jon goes for him with a knife, but Jon’s friends hold him back before he can reach Alliser.',
      },
    ),
    inBoth(
      [9, 61],
      { it: 'La mano del morto', en: 'The dead man’s hand' },
      {
        it: 'Dopo che i ranger morti si sono rianimati a Castello Nero e [[jon-snow|Jon Snow]] ha salvato il lord comandante, [[jeor-mormont|Jeor Mormont]] allontana Alliser dalla Barriera. Alliser dovrà andare ad Approdo del Re con la mano mozzata di uno dei morti, deporla davanti al re e chiedere aiuto per i Guardiani della notte.',
        en: 'After the dead rangers rise at Castle Black and [[jon-snow|Jon Snow]] saves the Lord Commander, [[jeor-mormont|Jeor Mormont]] sends Alliser away from the Wall. Alliser is to ride to King’s Landing with the severed hand of one of the dead men, lay it before the king and ask for help for the Night’s Watch.',
      },
    ),
  ],
  'yoren': [
    inBooks(
      [3, 14],
      { it: 'Un corvo errante', en: 'A wandering crow' },
      {
        it: 'Yoren è un confratello dei Guardiani della notte che gira il regno in cerca di reclute. Sulla strada verso nord si unisce al gruppo di [[benjen-stark|Benjen Stark]], [[jon-snow|Jon Snow]] e [[tyrion-lannister|Tyrion Lannister]], con due stupratori che hanno scelto la Barriera piuttosto che la castrazione. Scuoia uno scoiattolo per uno stufato. Conoscendo Yoren e le sue reclute, Jon, che credeva i Guardiani una nobile vocazione, comincia a vederli in un altro modo.',
        en: 'Yoren is a brother of the Night’s Watch who travels the realm looking for recruits. On the road north he joins the party of [[benjen-stark|Benjen Stark]], [[jon-snow|Jon Snow]] and [[tyrion-lannister|Tyrion Lannister]], bringing two rapers who chose the Wall over gelding. He skins a squirrel for a stew. Meeting Yoren and his recruits, Jon, who thought the Watch a noble calling, begins to see it differently.',
      },
    ),
    onScreen(
      [3, 22],
      { it: 'In viaggio con Tyrion', en: 'On the road with Tyrion' },
      {
        it: 'Yoren è un confratello dei Guardiani della notte che cerca reclute nella capitale. A Castello Nero [[tyrion-lannister|Tyrion Lannister]] lo prende in simpatia, contento di trovare un confratello con il senso dell’umorismo, e i due si raccontano le cose più strane che abbiano mai mangiato. Yoren saluta l’amico [[benjen-stark|Benjen Stark]] quando Benjen parte in perlustrazione. È presente quando il lord comandante [[jeor-mormont|Jeor Mormont]] chiede a Tyrion di aiutare i Guardiani a corte, e accetta di tornare a sud con Tyrion per cercare reclute nelle prigioni della città.',
        en: 'Yoren is a brother of the Night’s Watch who looks for recruits in the capital. At Castle Black [[tyrion-lannister|Tyrion Lannister]] takes to him, glad to find a brother of the Watch with a sense of humor, and the two trade stories of the strangest things they have eaten. Yoren sees off his friend [[benjen-stark|Benjen Stark]] when Benjen leaves on a ranging. He is there when Lord Commander [[jeor-mormont|Jeor Mormont]] asks Tyrion for help at court, and agrees to travel back south with Tyrion to find recruits in the city’s dungeons.',
      },
    ),
    inBoth(
      [5, 33],
      { it: 'Una notizia per il Primo Cavaliere', en: 'Word for the Hand' },
      {
        it: 'Yoren sta viaggiando verso sud con [[tyrion-lannister|Tyrion Lannister]] quando i due si fermano in una locanda dove alloggia [[catelyn-stark|Catelyn Stark]]. Catelyn fa catturare Tyrion. Yoren prosegue fino ad Approdo del Re e racconta al marito di Catelyn, [[eddard-stark|Eddard Stark]], Primo Cavaliere del re, ciò che lei ha fatto. A Eddard chiede anche nuove reclute per la Barriera.',
        en: 'Yoren is traveling south with [[tyrion-lannister|Tyrion Lannister]] when they stop at an inn where [[catelyn-stark|Catelyn Stark]] is staying. Catelyn has Tyrion seized. Yoren rides on to King’s Landing and tells her husband, [[eddard-stark|Eddard Stark]], the Hand of the King, what she has done. He also asks Eddard for new recruits for the Wall.',
      },
    ),
    inBoth(
      [9, 66],
      { it: 'Trattenuta tra la folla', en: 'Held back in the crowd' },
      {
        it: 'Yoren è tra la folla davanti al Grande Tempio di Baelor quando [[eddard-stark|Eddard Stark]] viene portato fuori a confessare il tradimento. Re [[joffrey-baratheon|Joffrey]] ordina di decapitare Eddard. [[arya-stark|Arya]], la figlia di Eddard, cerca di farsi strada verso il padre con la spada in mano. Yoren la afferra e la tiene stretta, perché non veda l’esecuzione.',
        en: 'Yoren is in the crowd outside the Great Sept of Baelor when [[eddard-stark|Eddard Stark]] is brought out to confess to treason. King [[joffrey-baratheon|Joffrey]] orders Eddard’s head. Eddard’s daughter [[arya-stark|Arya]] tries to push through to her father with her sword. Yoren grabs her and holds her fast, so that she does not see the beheading.',
      },
    ),
    onScreen(
      [10, 73],
      { it: 'Arry l’orfano', en: 'Arry the orphan' },
      {
        it: 'Lontano dalla piazza, Yoren taglia i capelli ad [[arya-stark|Arya]] con un coltello e le dice di fingersi un ragazzo, Arry l’orfano, perché nessuno fa domande sugli orfani. Vuole riportarla a Grande Inverno, nascosta tra le reclute che sta portando alla Barriera, tra cui il giovane fabbro [[gendry|Gendry]]. La avverte di non fidarsi delle altre reclute: chiunque potrebbe consegnarla in cambio di una ricompensa.',
        en: 'Out of the square, Yoren cuts the hair of [[arya-stark|Arya]] with a knife and tells her to pass as a boy, Arry the orphan, since nobody asks questions about orphans. He means to take her home to Winterfell, hidden among the recruits he is bringing to the Wall, among them the young smith [[gendry|Gendry]]. He warns her not to trust the other recruits: any of them could turn her in for a reward.',
      },
    ),
  ],
  'will': [
    inBooks(
      [1, 1],
      { it: 'Dall’alto dell’albero', en: 'From the sentinel tree' },
      {
        it: 'Will è un ranger dei Guardiani della notte in ricognizione oltre la Barriera con [[gared|Gared]], agli ordini del giovane ser [[waymar-royce|Waymar Royce]]. Riferisce che i bruti a cui danno la caccia giacciono morti nel loro accampamento, senza traccia di sangue. Quando riporta Waymar sul posto, i corpi sono spariti, e Waymar lo manda in cima a un albero. Da lassù Will vede gli Estranei abbattere Waymar. Quando scende a raccogliere la spada spezzata del cavaliere, Waymar si rialza, con l’occhio azzurro, e gli stringe le mani intorno alla gola.',
        en: 'Will is a ranger of the Night’s Watch, scouting beyond the Wall with [[gared|Gared]] under the command of young Ser [[waymar-royce|Waymar Royce]]. He reports that the wildlings they have been tracking lie dead in their camp, with no blood on them. When he leads Waymar back, the bodies are gone, and Waymar sends him up a tree. From there Will watches the Others cut Waymar down. When he climbs down to take the knight’s broken sword, Waymar rises, his eye now blue, and closes his hands around Will’s throat.',
      },
    ),
    onScreen(
      [1, 2],
      { it: 'Il disertore', en: 'The deserter' },
      {
        it: 'Will è il miglior esploratore di una pattuglia dei Guardiani della notte oltre la Barriera, con [[gared|Gared]] e ser [[waymar-royce|Waymar Royce]]. Trova dei bruti morti disposti in uno strano schema, ma quando i tre tornano sul posto i corpi sono spariti. Mentre cerca, Will vede camminare una ragazza morta, poi vede un Estraneo decapitare Gared e gettargli la testa ai piedi. Fugge a sud della Barriera. Catturato vicino a Grande Inverno, racconta a lord [[eddard-stark|Eddard Stark]] di aver visto gli Estranei e chiede che sua madre venga avvisata. Eddard lo decapita come disertore.',
        en: 'Will is the best scout of a patrol of the Night’s Watch beyond the Wall, with [[gared|Gared]] and Ser [[waymar-royce|Waymar Royce]]. He finds dead wildlings laid out in a strange pattern, but when the three return the bodies are gone. Searching, Will sees a dead girl walking, then watches a White Walker behead Gared and throw the head at his feet. He flees south of the Wall. Caught near Winterfell, he tells Lord [[eddard-stark|Eddard Stark]] that he saw the White Walkers, and asks that his mother be told. Eddard beheads him as a deserter.',
      },
    ),
  ],
  'gared': [
    inBooks(
      [1, 1],
      { it: 'Il vecchio ranger', en: 'The old ranger' },
      {
        it: 'Gared è il più anziano dei tre ranger dei Guardiani della notte che seguono le tracce di alcuni predoni bruti nella Foresta Stregata, e serve da decenni. Quando [[will|Will]] riferisce che i bruti sono morti, Gared vuole tornare alla Barriera, ma il giovane ser [[waymar-royce|Waymar Royce]], che ha il comando, si fa beffe delle sue paure. Waymar lo lascia a guardia dei cavalli e gli vieta di accendere un fuoco, e Gared si piega.',
        en: 'Gared is the oldest of three rangers of the Night’s Watch tracking a band of wildling raiders in the Haunted Forest, and he has served for decades. When [[will|Will]] reports the wildlings dead, Gared wants to turn back to the Wall, but young Ser [[waymar-royce|Waymar Royce]], who has the command, mocks his fears. Waymar leaves him to guard the horses and forbids him to light a fire, and Gared gives in.',
      },
    ),
    onScreen(
      [1, 1],
      { it: 'Nella Foresta Stregata', en: 'In the Haunted Forest' },
      {
        it: 'Gared parte oltre la Barriera con ser [[waymar-royce|Waymar Royce]] e [[will|Will]] per controllare le voci sui bruti nella Foresta Stregata. Quando Will trova i bruti morti, Gared, più anziano, consiglia di tornare a riferirlo, ma Waymar non gli dà ascolto. Sul posto i corpi sono spariti, e Gared trova nella neve un pezzo di stoffa insanguinato. Un Estraneo uccide Waymar senza fatica. Gared tenta di fuggire, ma viene raggiunto e decapitato.',
        en: 'Gared rides beyond the Wall with Ser [[waymar-royce|Waymar Royce]] and [[will|Will]] to look into reports of wildlings in the Haunted Forest. When Will finds the wildlings dead, the older Gared advises going back to report it, but Waymar overrules him. At the site the bodies are gone, and Gared finds a bloody piece of clothing in the snow. A White Walker kills Waymar with ease. Gared tries to run, but he is caught and beheaded.',
      },
    ),
    inBooks(
      [1, 2],
      { it: 'La giustizia di lord Stark', en: 'Lord Stark’s justice' },
      {
        it: 'Gared, terrorizzato, fugge a sud della Barriera e diserta i Guardiani della notte. Viene catturato vicino a Grande Inverno: è un vecchio vestito di stracci neri che ha perso le orecchie e un dito per il gelo. Lord [[eddard-stark|Eddard Stark]] lo interroga brevemente, lo condanna a morte per diserzione e lo decapita di persona con la sua spada. [[theon-greyjoy|Theon Greyjoy]] ride e allontana la testa con un calcio, e [[jon-snow|Jon Snow]] dà sottovoce dell’idiota a Theon.',
        en: 'Gared flees south of the Wall in terror and deserts the Night’s Watch. He is caught near Winterfell, an old man in ragged black who has lost his ears and a finger to frostbite. Lord [[eddard-stark|Eddard Stark]] questions him briefly, sentences him to death for desertion and beheads him himself with his sword. [[theon-greyjoy|Theon Greyjoy]] laughs and kicks the head away, and [[jon-snow|Jon Snow]] calls Theon an ass under his breath.',
      },
    ),
  ],
  'waymar-royce': [
    inBooks(
      [1, 1],
      { it: 'Balla con me', en: 'Dance with me' },
      {
        it: 'Ser Waymar Royce, un giovane nobile di diciotto anni, comanda [[will|Will]] e [[gared|Gared]] nella sua prima perlustrazione oltre la Barriera. Quando Will riferisce che i bruti a cui danno la caccia sono morti, Waymar si fa beffe delle paure di Gared e vuole vedere con i propri occhi. I corpi sono spariti. Waymar manda Will in cima a un albero, e arrivano gli Estranei. Waymar affronta da solo il primo e gli tiene testa finché la sua spada non va in frantumi contro la lama dell’Estraneo. Gli Estranei lo fanno a pezzi. Poi Waymar si rialza, con l’occhio che gli resta diventato azzurro, e strangola Will.',
        en: 'Ser Waymar Royce, a highborn youth of eighteen, commands [[will|Will]] and [[gared|Gared]] on his first ranging beyond the Wall. When Will reports that the wildlings they are tracking are dead, Waymar mocks the fears of Gared and insists on seeing for himself. The bodies are gone. Waymar sends Will up a tree, and then the Others come. Waymar faces the first of them alone and holds it off until his sword shatters against its blade. The Others cut him down. Then he rises again, his remaining eye turned blue, and strangles Will.',
      },
    ),
    onScreen(
      [1, 1],
      {
        it: 'La pattuglia oltre la Barriera',
        en: 'The patrol beyond the Wall',
      },
      {
        it: 'Ser Waymar Royce guida una perlustrazione oltre la Barriera con [[will|Will]] e [[gared|Gared]], inviati a controllare le voci sui bruti nella Foresta Stregata. Will, il miglior esploratore del gruppo, trova i bruti morti. Il più anziano Gared consiglia di tornare indietro a riferirlo, ma Waymar vuole vedere i cadaveri e scoprire che cosa li ha uccisi. Quando arrivano sul posto, i corpi sono spariti. Appare un Estraneo, che uccide Waymar senza fatica davanti a Gared terrorizzato.',
        en: 'Ser Waymar Royce commands a ranging beyond the Wall with [[will|Will]] and [[gared|Gared]], sent to look into reports of wildlings in the Haunted Forest. Will, the best scout in the group, finds the wildlings dead. The older Gared advises turning back to report it, but Waymar insists on seeing the corpses and learning what killed them. When they reach the place, the bodies are gone. A White Walker appears and kills Waymar with ease, in front of the terrified Gared.',
      },
    ),
  ],
  'grenn': [
    inBoth(
      [3, 20],
      { it: 'Battuto nel cortile', en: 'Beaten in the yard' },
      {
        it: 'Grenn è una delle reclute che si addestrano a Castello Nero sotto ser [[alliser-thorne|Alliser Thorne]]. [[jon-snow|Jon Snow]], cresciuto con un maestro d’armi, lo batte nel cortile e gli fa male. Grenn e altre reclute affrontano Jon nell’armeria, ma qualcuno li ferma. In seguito Jon comincia a insegnare a Grenn a combattere meglio.',
        en: 'Grenn is one of the recruits training at Castle Black under Ser [[alliser-thorne|Alliser Thorne]]. [[jon-snow|Jon Snow]], who was raised with a master-at-arms, beats him in the yard and hurts him. Grenn and other recruits go after Jon in the armory, but they are stopped. Afterwards Jon starts to teach Grenn how to fight better.',
      },
    ),
    inBoth(
      [4, 27],
      { it: 'Piano con Sam', en: 'Easy on Sam' },
      {
        it: 'Quando la nuova recluta [[samwell-tarly|Samwell Tarly]] ammette di essere un codardo, Grenn non vuole avere niente a che fare con lui. Accetta comunque il piano di [[jon-snow|Jon Snow]] di andarci piano con Sam durante l’addestramento. Quando [[rast|Rast]] rifiuta, Grenn va con Jon, [[pypar|Pyp]] e [[ghost-direwolf|Spettro]] a spaventarlo di notte. Ser [[alliser-thorne|Alliser Thorne]] è furioso perché le reclute non vogliono più fare del male a Sam.',
        en: 'When the new recruit [[samwell-tarly|Samwell Tarly]] admits that he is a coward, Grenn wants nothing to do with him. Still, he goes along with the plan of [[jon-snow|Jon Snow]] to go easy on Sam in training. When [[rast|Rast]] refuses, Grenn goes with Jon, [[pypar|Pyp]] and [[ghost-direwolf|Ghost]] to frighten him at night. Ser [[alliser-thorne|Alliser Thorne]] is furious that the recruits will no longer hurt Sam.',
      },
    ),
    inBoth(
      [10, 71],
      { it: 'Riportarlo indietro', en: 'Bringing him back' },
      {
        it: 'Grenn è stato assegnato ai ranger. Quando [[jon-snow|Jon Snow]] lascia Castello Nero per unirsi alla guerra del fratello [[robb-stark|Robb]], Grenn lo insegue con [[pypar|Pyp]] e altri amici. Raggiungono Jon, lo circondano e recitano il giuramento dei Guardiani della notte, finché Jon non accetta di tornare con loro.',
        en: 'Grenn has been named to the rangers. When [[jon-snow|Jon Snow]] rides away from Castle Black to join the war of his brother [[robb-stark|Robb]], Grenn rides after him with [[pypar|Pyp]] and other friends. They catch up with Jon, surround him and recite the vows of the Night’s Watch, until Jon agrees to come back with them.',
      },
    ),
  ],
  'pypar': [
    inBoth(
      [3, 20],
      { it: 'Nel cortile di ser Alliser', en: 'In Ser Alliser’s yard' },
      {
        it: 'Pyp è una recluta dei Guardiani della notte e si addestra a Castello Nero sotto il maestro d’armi, ser [[alliser-thorne|Alliser Thorne]], che disprezza tutti i ragazzi a lui affidati. Tra loro c’è [[jon-snow|Jon Snow]], cresciuto in un castello con un maestro d’armi tutto suo, che batte una dopo l’altra le altre reclute nel cortile.',
        en: 'Pyp is a recruit of the Night’s Watch, training at Castle Black under the master-at-arms, Ser [[alliser-thorne|Alliser Thorne]], who has nothing but contempt for the boys in his charge. Among them is [[jon-snow|Jon Snow]], who grew up in a castle with a master-at-arms of his own and beats the other recruits in the yard one after another.',
      },
    ),
    inBoth(
      [4, 27],
      { it: 'Dalla parte di Sam', en: 'On Sam’s side' },
      {
        it: 'Quando la nuova recluta [[samwell-tarly|Samwell Tarly]] viene picchiata nel cortile, all’inizio Pyp cerca di impedire a [[jon-snow|Jon Snow]] di intervenire. Poi accetta il piano di Jon di andarci piano con Sam durante l’addestramento, cosa che fa infuriare ser [[alliser-thorne|Alliser Thorne]]. Quando [[rast|Rast]] rifiuta, Pyp va con Jon, [[grenn|Grenn]] e [[ghost-direwolf|Spettro]] a spaventare Rast di notte.',
        en: 'When the new recruit [[samwell-tarly|Samwell Tarly]] is beaten in the yard, Pyp at first tries to keep [[jon-snow|Jon Snow]] from stepping in. Afterwards he goes along with the plan of Jon to go easy on Sam in training, which angers Ser [[alliser-thorne|Alliser Thorne]]. When [[rast|Rast]] refuses, Pyp joins Jon, [[grenn|Grenn]] and [[ghost-direwolf|Ghost]] to frighten Rast at night.',
      },
    ),
    onScreen(
      [7, 49],
      { it: 'La vera ragione', en: 'The real reason' },
      {
        it: 'Pyp entra nei Guardiani della notte e viene assegnato agli attendenti, come [[jon-snow|Jon Snow]] e [[samwell-tarly|Sam]]. Irritato dalla presunzione di Jon, Pyp confessa la verità: non è stato mandato alla Barriera per aver rubato una forma di formaggio per la sorella affamata, come aveva raccontato, ma per aver respinto un lord che pretendeva favori sessuali da lui. Sam gli chiede una canzone, ma Pyp è troppo imbarazzato e se ne va.',
        en: 'Pyp is taken into the Night’s Watch and sent to the stewards, like [[jon-snow|Jon Snow]] and [[samwell-tarly|Sam]]. Annoyed at the sense of entitlement of Jon, Pyp admits the truth: he was not sent to the Wall for stealing a wheel of cheese for his hungry sister, as he once claimed, but for refusing a lord who wanted sexual favors from him. Sam asks him for a song, but Pyp is too embarrassed and walks off.',
      },
    ),
    inBoth(
      [10, 71],
      { it: 'Il giuramento recitato', en: 'Reciting the vows' },
      {
        it: 'Pyp è ormai un confratello giurato dei Guardiani della notte. Quando [[jon-snow|Jon Snow]] diserta da Castello Nero per unirsi alla guerra del fratello [[robb-stark|Robb]] nel sud, Pyp lo insegue con [[grenn|Grenn]] e altri amici di Jon. Lo raggiungono, lo circondano e recitano il giuramento dei Guardiani della notte, finché Jon non accetta di tornare con loro.',
        en: 'Pyp is now a sworn brother of the Night’s Watch. When [[jon-snow|Jon Snow]] deserts Castle Black to join the war of his brother [[robb-stark|Robb]] in the south, Pyp rides after him with [[grenn|Grenn]] and other friends of Jon. They catch up with him, surround him and recite the vows of the Night’s Watch, until Jon agrees to come back with them.',
      },
    ),
  ],
  'rast': [
    onScreen(
      [3, 27],
      { it: 'Battuto da Jon', en: 'Beaten by Jon' },
      {
        it: 'Rast è uno dei condannati che si uniscono al gruppo diretto alla Barriera con il reclutatore [[yoren|Yoren]]: è uno stupratore che ha scelto i Guardiani della notte. A Castello Nero [[jon-snow|Jon Snow]] batte lui, [[grenn|Grenn]] e [[pypar|Pyp]] nel cortile. I tre minacciano Jon nell’armeria finché [[tyrion-lannister|Tyrion Lannister]] non li convince ad andarsene. Più tardi Jon comincia ad addestrare le reclute e si guadagna il rispetto di Grenn e Pyp, ma non quello di Rast.',
        en: 'Rast is one of the convicts who join the party riding north to the Wall with the recruiter [[yoren|Yoren]], a rapist who chose the Night’s Watch. At Castle Black [[jon-snow|Jon Snow]] beats him, [[grenn|Grenn]] and [[pypar|Pyp]] in the yard. The three threaten Jon in the armory until [[tyrion-lannister|Tyrion Lannister]] makes them leave. Jon later starts to train the recruits, and wins the respect of Grenn and Pyp, but not that of Rast.',
      },
    ),
    inBooks(
      [4, 27],
      { it: 'Una visita notturna', en: 'A visit in the night' },
      {
        it: 'Rast è una recluta di Castello Nero, mandato alla Barriera per stupro. Quando [[jon-snow|Jon Snow]] interviene per proteggere la nuova recluta [[samwell-tarly|Samwell Tarly]] da Halder, ser [[alliser-thorne|Alliser Thorne]] manda Rast e Albett a dare man forte a Halder, ma Jon, aiutato da [[grenn|Grenn]] e [[pypar|Pyp]], li batte. Rast è l’unico che non vuole andarci piano con Sam. Quella notte Jon, Grenn e Pyp entrano nella sua cella con [[ghost-direwolf|Spettro]], che gli morde il collo. Il giorno dopo Rast dice di essersi tagliato radendosi, e lascia in pace Sam.',
        en: 'Rast is a recruit at Castle Black, sent to the Wall for rape. When [[jon-snow|Jon Snow]] steps in to protect the new recruit [[samwell-tarly|Samwell Tarly]] from Halder, Ser [[alliser-thorne|Alliser Thorne]] sends Rast and Albett to help Halder, but Jon, with [[grenn|Grenn]] and [[pypar|Pyp]] at his side, beats them. Rast alone will not go easy on Sam. That night Jon, Grenn and Pyp break into his cell with [[ghost-direwolf|Ghost]], who nips his neck. The next day Rast says he cut himself shaving, and leaves Sam alone.',
      },
    ),
    onScreen(
      [4, 27],
      { it: 'Una fetta di pancetta', en: 'A side of bacon' },
      {
        it: 'Rast esegue volentieri gli ordini di ser [[alliser-thorne|Alliser Thorne]] di umiliare la nuova recluta [[samwell-tarly|Samwell Tarly]]. Quando [[jon-snow|Jon Snow]] chiede alle reclute di andarci piano con Sam, Rast rifiuta: se ser Alliser lo metterà contro il ragazzo grasso, dice, se ne ricaverà una fetta di pancetta. Quella notte Rast si sveglia bloccato da Jon, [[grenn|Grenn]] e [[pypar|Pyp]], con [[ghost-direwolf|Spettro]] sul petto che mostra i denti. Da allora non picchia più Sam, qualunque cosa dica ser Alliser.',
        en: 'Rast gladly carries out the orders of Ser [[alliser-thorne|Alliser Thorne]] to humiliate the new recruit [[samwell-tarly|Samwell Tarly]]. When [[jon-snow|Jon Snow]] asks the recruits to go easy on Sam, Rast refuses: if Ser Alliser sets him on the fat boy, he says, he will cut himself a side of bacon. That night Rast wakes pinned down by Jon, [[grenn|Grenn]] and [[pypar|Pyp]], with [[ghost-direwolf|Ghost]] on his chest baring his teeth. After that he will not beat Sam, whatever Ser Alliser says.',
      },
    ),
  ],
  'dareon': [
    inBooks(
      [7, 20],
      { it: 'Nel gruppo di Jon', en: 'In Jon’s group' },
      {
        it: 'Dareon è una delle reclute dei Guardiani della notte a Castello Nero, nello stesso gruppo di [[jon-snow|Jon Snow]], sotto il maestro d’armi ser [[alliser-thorne|Alliser Thorne]]. Jon, cresciuto in un castello con un maestro d’armi tutto suo, batte uno dopo l’altro i ragazzi del gruppo nel cortile, e si attira il loro risentimento oltre a quello di ser Alliser.',
        en: 'Dareon is one of the recruits of the Night’s Watch at Castle Black, in the same group as [[jon-snow|Jon Snow]], under the master-at-arms Ser [[alliser-thorne|Alliser Thorne]]. Jon, who grew up in a castle with a master-at-arms of his own, beats the boys of the group one after another in the yard, and earns their resentment as well as Ser Alliser’s.',
      },
    ),
    onScreen(
      [7, 49],
      { it: 'Destinazione Forte Orientale', en: 'Bound for Eastwatch' },
      {
        it: 'Dareon è tra le reclute schierate davanti al lord comandante [[jeor-mormont|Jeor Mormont]] quando accoglie nei Guardiani della notte il gruppo di [[jon-snow|Jon Snow]] e assegna gli incarichi. Dareon viene destinato agli attendenti. Poi maestro [[aemon|Aemon]] lo manda a Forte Orientale, dove dovrà presentarsi a Borcas.',
        en: 'Dareon is among the recruits who stand before Lord Commander [[jeor-mormont|Jeor Mormont]] as he takes the group of [[jon-snow|Jon Snow]] into the Night’s Watch and hands out their posts. Dareon is assigned to the stewards. Maester [[aemon|Aemon]] then sends him to Eastwatch, where he is to present himself to Borcas.',
      },
    ),
    inBooks(
      [7, 49],
      { it: 'Un’accusa falsa', en: 'A false charge' },
      {
        it: 'Dareon entra nei Guardiani della notte con [[jon-snow|Jon Snow]] e viene destinato agli attendenti, come Jon e [[samwell-tarly|Samwell Tarly]]. Bowen Marsh gli comunica che sarà mandato a Forte Orientale a trattare con i mercanti. Quando Jon protesta che è ingiusto farlo attendente, Dareon si arrabbia: dice di essere stato mandato alla Barriera ingiustamente, dopo che la figlia di un lord, nel cui letto era stato trovato, lo aveva falsamente accusato di stupro.',
        en: 'Dareon is taken into the Night’s Watch with [[jon-snow|Jon Snow]] and named to the stewards, like Jon and [[samwell-tarly|Samwell Tarly]]. Bowen Marsh tells him he will be sent to Eastwatch to deal with the merchants there. When Jon rants that it is unfair to make him a steward, Dareon is angry: he says he himself was sent to the Wall unjustly, after a lord’s daughter falsely named it rape when he was found in her bed.',
      },
    ),
  ],
  'halder': [
    inBooks(
      [7, 20],
      { it: 'Una recluta di Castello Nero', en: 'A recruit at Castle Black' },
      {
        it: 'Halder è una recluta dei Guardiani della notte e si addestra a Castello Nero nel gruppo di [[jon-snow|Jon Snow]], sotto ser [[alliser-thorne|Alliser Thorne]], che tratta con disprezzo tutti i ragazzi nel cortile. Jon, che ha avuto un maestro d’armi per tutta la vita, batte gli altri con facilità, e l’armaiolo [[donal-noye|Donal Noye]] deve fargli capire quanto poco addestramento abbiano mai avuto loro.',
        en: 'Halder is a recruit of the Night’s Watch, training at Castle Black in the group of [[jon-snow|Jon Snow]] under Ser [[alliser-thorne|Alliser Thorne]], who treats every boy in the yard with contempt. Jon, who has had a master-at-arms all his life, beats the others with ease, and the armorer [[donal-noye|Donal Noye]] has to show him how little training they ever had.',
      },
    ),
    inBooks(
      [7, 27],
      { it: 'Contro Sam', en: 'Set against Sam' },
      {
        it: 'Ser [[alliser-thorne|Alliser Thorne]] sceglie Halder, un ex apprendista scalpellino, per battersi con la nuova recluta [[samwell-tarly|Samwell Tarly]]. Sam cade subito e si arrende, ma Alliser ordina a Halder di continuare a colpirlo con il piatto della spada. [[jon-snow|Jon Snow]] interviene e, con [[grenn|Grenn]] e [[pypar|Pyp]], batte Halder, [[rast|Rast]] e Albett, anche se Halder riesce a colpire Jon a una spalla. Quella notte, quando Jon chiede alle reclute di andarci piano con Sam, Halder è tra i primi ad accettare.',
        en: 'Ser [[alliser-thorne|Alliser Thorne]] picks Halder, a former stonemason’s apprentice, to fight the new recruit [[samwell-tarly|Samwell Tarly]]. Sam goes down at once and yields, but Alliser has Halder keep hitting him with the flat of his blade. [[jon-snow|Jon Snow]] steps in, and with [[grenn|Grenn]] and [[pypar|Pyp]] he beats Halder, [[rast|Rast]] and Albett, though Halder lands a good blow on the shoulder of Jon. That night, when Jon asks the recruits to go easy on Sam, Halder is one of the first to agree.',
      },
    ),
    onScreen(
      [7, 49],
      { it: 'Ai costruttori', en: 'To the builders' },
      {
        it: 'Halder è tra le reclute schierate davanti al lord comandante [[jeor-mormont|Jeor Mormont]] quando accoglie nei Guardiani della notte il gruppo di [[jon-snow|Jon Snow]] e assegna gli incarichi. Halder viene destinato ai costruttori. Jon, il migliore combattente del gruppo, finisce agli attendenti invece che ai ranger.',
        en: 'Halder is among the recruits who stand before Lord Commander [[jeor-mormont|Jeor Mormont]] as he takes the group of [[jon-snow|Jon Snow]] into the Night’s Watch and gives out their posts. Halder is assigned to the builders. Jon, the best fighter of the group, is sent to the stewards instead of the rangers.',
      },
    ),
    inBooks(
      [10, 71],
      { it: 'Un cavallo tra gli alberi', en: 'A horse in the trees' },
      {
        it: 'Halder, ormai costruttore dei Guardiani della notte, parte di notte con [[grenn|Grenn]], [[pypar|Pyp]], Todder e Matthar all’inseguimento di [[jon-snow|Jon Snow]], che ha disertato per raggiungere il fratello [[robb-stark|Robb]]. Mentre gli altri discutono, Halder sente sbuffare la giumenta di Jon tra gli alberi e chiede silenzio. Circondano Jon e recitano il giuramento dei Guardiani finché Jon non accetta di tornare, e rientrano prima dell’alba.',
        en: 'Halder, now a builder of the Night’s Watch, rides out at night with [[grenn|Grenn]], [[pypar|Pyp]], Todder and Matthar after [[jon-snow|Jon Snow]], who has deserted to join his brother [[robb-stark|Robb]]. As the others argue, Halder hears the mare of Jon snort among the trees and tells them to be quiet. They surround Jon and recite the vows of the Watch until he agrees to come back, and they return before dawn.',
      },
    ),
  ],
  'todder': [
    inBooks(
      [30, 20],
      { it: 'Rospo', en: 'Toad' },
      {
        it: 'Todder, che gli altri chiamano Rospo, è una recluta che si addestra a Castello Nero nel gruppo di [[jon-snow|Jon Snow]]. Stanco di essere battuto da Jon nel cortile, lo affronta nell’armeria con [[grenn|Grenn]] e i due stupratori arrivati al nord con Jon. Rospo provoca Jon, che perde la pazienza e lo tiene a terra per la gola, finché l’armaiolo [[donal-noye|Donal Noye]] non interrompe la rissa.',
        en: 'Todder, whom the others call Toad, is a recruit training at Castle Black in the group of [[jon-snow|Jon Snow]]. Fed up with being beaten by Jon in the yard, he confronts him in the armory with [[grenn|Grenn]] and the two rapers who rode north with Jon. Toad taunts Jon, who loses his temper and pins him to the ground by the throat, until the armorer [[donal-noye|Donal Noye]] breaks up the fight.',
      },
    ),
    inBooks(
      [30, 71],
      { it: 'All’inseguimento di Jon', en: 'After Jon' },
      {
        it: 'Rospo è stato assegnato ai ranger. Quando [[jon-snow|Jon Snow]] diserta i Guardiani della notte per raggiungere il fratello [[robb-stark|Robb]], Rospo lo insegue con [[grenn|Grenn]], [[pypar|Pyp]], [[halder|Halder]] e Matthar. Trovano Jon sulla strada verso sud, lo circondano e recitano il giuramento finché Jon non accetta di tornare con loro prima dell’alba.',
        en: 'Toad has been named to the rangers. When [[jon-snow|Jon Snow]] deserts the Night’s Watch to join his brother [[robb-stark|Robb]], Toad rides after him with [[grenn|Grenn]], [[pypar|Pyp]], [[halder|Halder]] and Matthar. They find Jon on the road south, surround him and recite their vows until he agrees to come back with them before dawn.',
      },
    ),
  ],
  'othell-yarwyck': [
    inBoth(
      [7, 49],
      { it: 'Il Primo Costruttore', en: 'The First Builder' },
      {
        it: 'Othell Yarwyck è il Primo Costruttore dei Guardiani della notte. È tra gli ufficiali presenti quando il lord comandante [[jeor-mormont|Jeor Mormont]] accoglie nei Guardiani il gruppo di reclute di [[jon-snow|Jon Snow]], assegna gli incarichi e ascolta il giuramento dei nuovi confratelli. [[halder|Halder]] viene destinato ai costruttori di Othell.',
        en: 'Othell Yarwyck is the First Builder of the Night’s Watch. He is among the officers present when Lord Commander [[jeor-mormont|Jeor Mormont]] takes the group of recruits of [[jon-snow|Jon Snow]] into the Watch, gives out their posts and hears the new brothers swear their vows. [[halder|Halder]] is sent to the builders under Othell.',
      },
    ),
    onScreen(
      [8, 53],
      { it: 'I corpi nel bosco', en: 'The bodies in the woods' },
      {
        it: 'Othell accompagna [[jon-snow|Jon Snow]] e [[samwell-tarly|Samwell Tarly]] nella Foresta Stregata come testimone del loro giuramento davanti a un albero del cuore, ed è tra i primi a congratularsi con loro. Il suo gruppo trova i corpi di [[othor|Othor]] e [[jafer-flowers|Jafer Flowers]] e li riporta a Castello Nero. Othell conferma a Sam che i cadaveri non puzzano, anche se sembrano morti da settimane. Come Jon, vorrebbe bruciarli subito, ma il lord comandante [[jeor-mormont|Jeor Mormont]] vuole prima farli esaminare.',
        en: 'Othell goes with [[jon-snow|Jon Snow]] and [[samwell-tarly|Samwell Tarly]] into the Haunted Forest to witness their vows before a heart tree, and is among the first to congratulate them. His party finds the bodies of [[othor|Othor]] and [[jafer-flowers|Jafer Flowers]] and brings them back to Castle Black. Othell agrees with Sam that the corpses do not smell, though they look weeks dead. Like Jon, he wants them burned at once, but Lord Commander [[jeor-mormont|Jeor Mormont]] wants them examined first.',
      },
    ),
  ],
  'bowen-marsh': [
    inBooks(
      [41, 22],
      {
        it: 'Alla tavola del lord comandante',
        en: 'At the Lord Commander’s table',
      },
      {
        it: 'Bowen Marsh, a capo degli attendenti dei Guardiani della notte, siede tra gli ufficiali alla cena che il lord comandante [[jeor-mormont|Jeor Mormont]] offre nell’ultima sera di [[tyrion-lannister|Tyrion Lannister]] a Castello Nero. Osserva quanto beva Tyrion per essere così piccolo. Quando Tyrion rivolge le sue frecciate contro ser [[alliser-thorne|Alliser Thorne]], Bowen prende le difese del cavaliere. Alla tavola siedono anche maestro [[aemon|Aemon]] e ser [[jaremy-rykker|Jaremy Rykker]].',
        en: 'Bowen Marsh, who heads the stewards of the Night’s Watch, sits among the officers at the supper Lord Commander [[jeor-mormont|Jeor Mormont]] gives on the last night of [[tyrion-lannister|Tyrion Lannister]] at Castle Black. He remarks on how much Tyrion drinks for so small a man. When Tyrion turns his barbs on Ser [[alliser-thorne|Alliser Thorne]], Bowen speaks up for the knight. Maester [[aemon|Aemon]] and Ser [[jaremy-rykker|Jaremy Rykker]] are at the table too.',
      },
    ),
    inBooks(
      [41, 49],
      { it: 'Gli incarichi degli attendenti', en: 'The stewards’ posts' },
      {
        it: 'Dopo l’assegnazione degli incarichi, Bowen comunica agli attendenti dove serviranno. [[samwell-tarly|Samwell Tarly]] lavorerà nella biblioteca di maestro [[aemon|Aemon]] e con i suoi corvi, perché [[chett|Chett]] è stato spostato ai canili. [[dareon|Dareon]] andrà a Forte Orientale. [[jon-snow|Jon Snow]] sarà l’attendente personale del lord comandante, su richiesta di Mormont. Nel pomeriggio Bowen apre i tre cancelli sotto la Barriera per Jon e Sam e li accompagna fino a un boschetto di alberi-diga, dove i due pronunciano il giuramento. Quando si rialzano, Bowen li dichiara uomini dei Guardiani della notte.',
        en: 'After the new brothers are given their posts, Bowen tells the stewards where they will serve. [[samwell-tarly|Samwell Tarly]] will work in the library and rookery of Maester [[aemon|Aemon]], since [[chett|Chett]] has been moved to the kennels. [[dareon|Dareon]] goes to Eastwatch. [[jon-snow|Jon Snow]] will be the Lord Commander’s own steward, at Mormont’s request. That afternoon Bowen unlocks the three gates under the Wall for Jon and Sam and goes with them to a weirwood grove, where they swear their vows. When they rise, he declares them men of the Night’s Watch.',
      },
    ),
  ],
  'jaremy-rykker': [
    inBooks(
      [7, 22],
      { it: 'La scelta di un lealista', en: 'A loyalist’s choice' },
      {
        it: 'Ser Jaremy Rykker è un cavaliere e un ufficiale dei ranger dei Guardiani della notte. Siede alla cena del lord comandante [[jeor-mormont|Jeor Mormont]] nell’ultima sera di [[tyrion-lannister|Tyrion Lannister]] a Castello Nero. Quando le frecciate di Tyrion spingono ser [[alliser-thorne|Alliser Thorne]] a lasciare la sala, Jaremy racconta a Tyrion che lui e Alliser combatterono per re Aerys al sacco di Approdo del Re, e che fu proprio il padre di Tyrion a offrire loro la scelta tra i Guardiani e l’esecuzione.',
        en: 'Ser Jaremy Rykker is a knight and an officer of the rangers of the Night’s Watch. He sits at the supper of Lord Commander [[jeor-mormont|Jeor Mormont]] on the last night of [[tyrion-lannister|Tyrion Lannister]] at Castle Black. After the taunts of Tyrion drive Ser [[alliser-thorne|Alliser Thorne]] from the room, Jaremy tells Tyrion that Alliser and he fought for King Aerys at the sack of King’s Landing, and that it was Tyrion’s own father who gave them the choice between the Watch and execution.',
      },
    ),
    onScreen(
      [7, 49],
      { it: 'La scorta oltre la Barriera', en: 'The escort beyond the Wall' },
      {
        it: 'Con [[benjen-stark|Benjen Stark]] disperso, ser Jaremy Rykker fa le veci del Primo Ranger. Quando le nuove reclute entrano nei Guardiani, chiama a sé quelle assegnate ai ranger. Guida la scorta che accompagna [[jon-snow|Jon Snow]] e [[samwell-tarly|Samwell Tarly]] a nord della Barriera a pronunciare il giuramento davanti a un albero del cuore, e abbraccia i nuovi confratelli dopo il giuramento.',
        en: 'With [[benjen-stark|Benjen Stark]] missing, Ser Jaremy Rykker acts as First Ranger. When the new recruits are taken into the Watch, he calls forward those assigned to the rangers. He leads the escort that takes [[jon-snow|Jon Snow]] and [[samwell-tarly|Samwell Tarly]] north of the Wall to swear their vows before a heart tree, and embraces his new brothers once they have sworn.',
      },
    ),
    inBooks(
      [8, 53],
      { it: 'Due uomini di Benjen', en: 'Two of Benjen’s men' },
      {
        it: 'Quando [[ghost-direwolf|Spettro]] guida i ranger fino a due corpi oltre la Barriera, ser Jaremy li riconosce: sono [[othor|Othor]] e [[jafer-flowers|Jafer Flowers]], due uomini di [[benjen-stark|Benjen Stark]]. Jaremy lamenta di avere troppo pochi uomini per pattugliare, dà la colpa ai bruti e sostiene che i due siano morti da non più di un giorno. [[samwell-tarly|Samwell Tarly]] fa notare che il loro sangue è secco da tempo, eppure i corpi non si sono decomposti. Il lord comandante [[jeor-mormont|Jeor Mormont]] fa portare i cadaveri a Castello Nero e ordina a Jaremy di perlustrare la zona per dieci leghe intorno.',
        en: 'When [[ghost-direwolf|Ghost]] leads the rangers to two bodies beyond the Wall, Ser Jaremy names them: [[othor|Othor]] and [[jafer-flowers|Jafer Flowers]], two of the men of [[benjen-stark|Benjen Stark]]. Jaremy complains that he has too few men to patrol, blames wildlings and judges that the two have been dead no more than a day. [[samwell-tarly|Samwell Tarly]] points out that their blood is long dry, yet the bodies have not rotted. Lord Commander [[jeor-mormont|Jeor Mormont]] has the corpses carried to Castle Black and orders Jaremy to search the land for ten leagues around.',
      },
    ),
    inBooks(
      [8, 61],
      { it: 'Il pugnale del cavaliere', en: 'The knight’s own dagger' },
      {
        it: 'Nella notte i due ranger morti si rianimano a Castello Nero. Mentre [[jon-snow|Jon Snow]] brucia il cadavere di [[othor|Othor]] nelle stanze del lord comandante, il cadavere di [[jafer-flowers|Jafer Flowers]] uccide quattro uomini. Ser Jaremy gli taglia la testa, ma il corpo decapitato estrae il pugnale di Jaremy dal fodero e glielo pianta nel ventre. Jaremy muore, e il cadavere viene fatto a pezzi.',
        en: 'In the night the two dead rangers rise at Castle Black. While [[jon-snow|Jon Snow]] burns the corpse of [[othor|Othor]] in the Lord Commander’s rooms, the corpse of [[jafer-flowers|Jafer Flowers]] kills four men. Ser Jaremy hacks off its head, but the headless body pulls the dagger of Jaremy from its sheath and buries it in his bowels. Jaremy dies, and the corpse is hacked to pieces.',
      },
    ),
  ],
  'othor': [
    inBooks(
      [8, 20],
      { it: 'La partenza con Benjen', en: 'Riding out with Benjen' },
      {
        it: 'Othor è un ranger dei Guardiani della notte a Castello Nero. Poco dopo l’arrivo di [[jon-snow|Jon Snow]] come recluta, Othor parte verso nord, oltre la Barriera, nel gruppo di [[benjen-stark|Benjen Stark]], che va a cercare ser [[waymar-royce|Waymar Royce]], scomparso. Alla partenza Othor canta canzoni sconce. Benjen si è rifiutato di portare Jon con sé.',
        en: 'Othor is a ranger of the Night’s Watch at Castle Black. Not long after [[jon-snow|Jon Snow]] arrives there as a recruit, Othor rides north beyond the Wall in the party of [[benjen-stark|Benjen Stark]], who is going to look for the missing Ser [[waymar-royce|Waymar Royce]]. Othor sings bawdy songs as they set out. Benjen has refused to take Jon with him.',
      },
    ),
    inBoth(
      [8, 53],
      { it: 'Il morto che si rialza', en: 'The dead man rises' },
      {
        it: 'Il corpo di Othor viene trovato oltre la Barriera accanto a quello di [[jafer-flowers|Jafer Flowers]], un altro ranger di [[benjen-stark|Benjen Stark]], ed entrambi vengono riportati a Castello Nero. Il lord comandante [[jeor-mormont|Jeor Mormont]] vuole che li esamini maestro [[aemon|Aemon]]. Quella notte il cadavere di Othor si rianima e attacca Jeor nelle sue stanze. [[jon-snow|Jon Snow]] gli taglia un braccio, ma il morto continua ad avanzare, finché Jon non lo distrugge con il fuoco.',
        en: 'The body of Othor is found beyond the Wall beside that of [[jafer-flowers|Jafer Flowers]], another of the rangers of [[benjen-stark|Benjen Stark]], and both are carried back to Castle Black. Lord Commander [[jeor-mormont|Jeor Mormont]] wants Maester [[aemon|Aemon]] to examine them. That night the corpse of Othor rises and attacks Jeor in his rooms. [[jon-snow|Jon Snow]] cuts off one of its arms, but it keeps coming until Jon destroys it with fire.',
      },
    ),
  ],
  'jafer-flowers': [
    onScreen(
      [8, 53],
      { it: 'La mano nel bosco', en: 'The hand in the woods' },
      {
        it: 'Jafer Flowers è un ranger del gruppo che [[benjen-stark|Benjen Stark]] ha guidato oltre la Barriera e che non è più tornato. Dopo il giuramento dei nuovi confratelli, [[ghost-direwolf|Spettro]] trova nella Foresta Stregata la mano mozzata di Jafer. Il corpo di Jafer viene trovato oltre la Barriera con quello di [[othor|Othor]], e il gruppo di [[othell-yarwyck|Othell Yarwyck]] li riporta entrambi a Castello Nero. Il lord comandante [[jeor-mormont|Jeor Mormont]] vuole che li esamini maestro [[aemon|Aemon]]. Quella notte i cadaveri si rianimano. Mentre Othor attacca Jeor, Jafer semina il caos altrove, finché non viene abbattuto e bruciato.',
        en: 'Jafer Flowers is a ranger of the party that [[benjen-stark|Benjen Stark]] led beyond the Wall, which has not come back. After the new brothers swear their vows, [[ghost-direwolf|Ghost]] finds the severed hand of Jafer in the Haunted Forest. The body of Jafer is found beyond the Wall with that of [[othor|Othor]], and the party of [[othell-yarwyck|Othell Yarwyck]] brings both back to Castle Black. Lord Commander [[jeor-mormont|Jeor Mormont]] wants Maester [[aemon|Aemon]] to examine them. That night the corpses rise. While Othor attacks Jeor, Jafer causes trouble elsewhere until he is put down and burned.',
      },
    ),
    inBooks(
      [8, 53],
      { it: 'Un colpo d’ascia', en: 'An axe to the neck' },
      {
        it: 'Dopo il giuramento di [[jon-snow|Jon Snow]] e [[samwell-tarly|Samwell Tarly]], [[ghost-direwolf|Spettro]] porta a Jon una mano umana. Poi Spettro guida i ranger fino a due corpi, e ser [[jaremy-rykker|Jaremy Rykker]] li riconosce: sono [[othor|Othor]] e Jafer Flowers, due uomini di [[benjen-stark|Benjen Stark]]. La mano era la destra di Jafer. È stato ucciso da un colpo d’ascia al collo, e il vecchio guardaboschi Dywen ricorda che Othor portava un’ascia. Entrambi i cadaveri hanno le mani nere e gli occhi azzurri. Vengono riportati a Castello Nero perché li esamini maestro [[aemon|Aemon]].',
        en: 'After [[jon-snow|Jon Snow]] and [[samwell-tarly|Samwell Tarly]] swear their vows, [[ghost-direwolf|Ghost]] brings Jon a human hand. Then Ghost leads the rangers to two bodies, and Ser [[jaremy-rykker|Jaremy Rykker]] names them: [[othor|Othor]] and Jafer Flowers, two of the men of [[benjen-stark|Benjen Stark]]. The hand was the right hand of Jafer. He was killed by an axe blow to the neck, and the old forester Dywen remembers that Othor carried an axe. Both corpses have black hands and blue eyes. They are carried back to Castle Black for Maester [[aemon|Aemon]] to examine.',
      },
    ),
    inBooks(
      [8, 61],
      { it: 'Cinque uomini', en: 'Five men' },
      {
        it: 'Nella notte il cadavere di Jafer si rianima a Castello Nero, come quello di [[othor|Othor]]. Uccide ser [[jaremy-rykker|Jaremy Rykker]] e altri quattro uomini. Jaremy gli taglia la testa, ma il corpo decapitato lo trafigge con il pugnale di Jaremy, e si ferma solo quando viene fatto a pezzi. Il lord comandante manda ser [[alliser-thorne|Alliser Thorne]] ad Approdo del Re con la mano mozzata di Jafer, per mostrare al re che cosa si è rianimato alla Barriera.',
        en: 'In the night the corpse of Jafer rises at Castle Black, as that of [[othor|Othor]] does. It kills Ser [[jaremy-rykker|Jaremy Rykker]] and four other men. Jaremy takes its head off, but the headless body stabs him with his own dagger, and it stops only when it is hacked to pieces. The Lord Commander sends Ser [[alliser-thorne|Alliser Thorne]] to King’s Landing with the severed hand of Jafer, to show the king what has risen at the Wall.',
      },
    ),
  ],
  'donal-noye': [
    inBooks(
      [3, 20],
      { it: 'Il fabbro con un braccio solo', en: 'The one-armed smith' },
      {
        it: 'Donal Noye è l’armaiolo e fabbro di Castello Nero, con un braccio solo; si dice che sia stato lui a forgiare il martello da guerra di re [[robert-baratheon|Robert]]. Quando [[grenn|Grenn]], Todder e altre due reclute mettono alle strette [[jon-snow|Jon Snow]] nell’armeria, Noye interrompe la rissa e manda via gli altri. Spiega a Jon che Jon è cresciuto in un castello, addestrato da un maestro d’armi, mentre gli altri non avevano mai preso in mano una spada, e che umiliandoli Jon si fa dei nemici. Jon finisce per dargli ragione.',
        en: 'Donal Noye is the one-armed armorer and smith of Castle Black, and it is said that he forged the warhammer of King [[robert-baratheon|Robert]]. When [[grenn|Grenn]], Todder and two other recruits corner [[jon-snow|Jon Snow]] in the armory, Noye breaks up the fight and sends the others away. He tells Jon that Jon was raised in a castle and trained by a master-at-arms, while the others never held a sword before, and that Jon is making enemies by shaming them. Jon comes to see that Noye is right.',
      },
    ),
  ],
  'chett': [
    inBooks(
      [5, 42],
      { it: 'Alla porta di Aemon', en: 'At Aemon’s door' },
      {
        it: 'Chett è un attendente dei Guardiani della notte che serve maestro [[aemon|Aemon]] insieme a Clydas. Quando [[jon-snow|Jon Snow]] si presenta a notte fonda, Chett dice che il maestro dorme e gli ordina di tornare al mattino, ma Jon mette un piede nella porta. Jon chiede ad Aemon di permettere a [[samwell-tarly|Samwell Tarly]] di pronunciare il giuramento e di servire come attendente. Chett si oppone: ser [[alliser-thorne|Alliser Thorne]] farà di Sam un uomo o lo ucciderà provandoci, e il lavoro di un attendente non è per i codardi.',
        en: 'Chett is a steward of the Night’s Watch who serves Maester [[aemon|Aemon]] with Clydas. When [[jon-snow|Jon Snow]] comes late at night, Chett says the maester is asleep and tells him to come back in the morning, but Jon puts his foot in the door. Jon asks Aemon to let [[samwell-tarly|Samwell Tarly]] take his vows and serve as a steward. Chett objects: Ser [[alliser-thorne|Alliser Thorne]] will make a man of Sam or kill him trying, and the work of a steward is not for cowards.',
      },
    ),
    inBooks(
      [8, 53],
      { it: 'Ai canili', en: 'Sent to the kennels' },
      {
        it: '[[samwell-tarly|Sam]] ha preso il posto di Chett accanto a maestro [[aemon|Aemon]], e Bowen Marsh ha spostato Chett ai canili. Quando i corpi di [[othor|Othor]] e [[jafer-flowers|Jafer Flowers]] vengono trovati oltre la Barriera, il lord comandante [[jeor-mormont|Jeor Mormont]] ordina a Chett di avvicinare uno dei cani. Per quanto Chett si sforzi, il cane fa di tutto per restare lontano dai morti.',
        en: '[[samwell-tarly|Sam]] has taken the place of Chett with Maester [[aemon|Aemon]], and Bowen Marsh has moved Chett to the kennels. When the bodies of [[othor|Othor]] and [[jafer-flowers|Jafer Flowers]] are found beyond the Wall, Lord Commander [[jeor-mormont|Jeor Mormont]] orders Chett to bring one of the hounds closer. However hard Chett tries, the hound fights to stay away from the dead men.',
      },
    ),
  ],
} satisfies Record<string, Timeline<Story>>
