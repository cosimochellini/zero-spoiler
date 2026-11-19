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
 * reader knows all of it. The show and the books part over who wounds Drogo
 * and whose whip brings him down, and the wikis read do not name the book’s
 * bloodrider who breaks Viserys’s arm, so most stories come in two versions,
 * one per medium. A book-only story sits at the episode that adapts its
 * chapter, or later when a story links a character the show meets later;
 * Aggo’s are all at episode 11, the show’s gate for him.
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
    inBooks(
      [6, 12],
      { it: 'L’arma d’osso di drago', en: 'The dragonbone bow' },
      {
        it: 'Qotho è uno dei tre cavalieri di sangue di [[drogo|khal Drogo]]. Alle nozze di Drogo con [[daenerys-targaryen|Daenerys]], fuori dalle mura di Pentos, i cavalieri di sangue siedono appena sotto il khal e la sposa, e il fratello di lei, [[viserys-targaryen|Viserys]], siede più in basso, cosa che lo fa infuriare. Ogni cavaliere di sangue dona alla sposa un’arma, e il dono di Qotho è un’arma da tiro a doppia curva in osso di drago, più alta di lei. Lei rifiuta i doni, come vuole l’usanza, e passano a Drogo.',
        en: 'Qotho is one of [[drogo|Khal Drogo]]’s three bloodriders. At Drogo’s wedding to [[daenerys-targaryen|Daenerys]] outside the walls of Pentos, the bloodriders sit just below the khal and his bride, and her brother [[viserys-targaryen|Viserys]] sits below them, which angers him. Each bloodrider gives the bride a weapon, and Qotho’s gift is a double-curved dragonbone bow taller than she is. She refuses the gifts, as custom requires, and they go to Drogo.',
      },
    ),
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
        it: 'Haggo è uno dei tre cavalieri di sangue di [[drogo|khal Drogo]], un uomo alto. Dopo il sacco di una città lhazareen diffida della sacerdotessa [[mirri-maz-duur|Mirri Maz Duur]], che cura le ferite del khal. È a lui che [[mago|Mago]] si lamenta quando la khaleesi toglie a Mago una prigioniera, e Drogo manda a dire a Mago di trovarsene un’altra.',
        en: 'Haggo is one of [[drogo|Khal Drogo]]’s three bloodriders, a tall man. After the sack of a Lhazareen town he distrusts the godswife [[mirri-maz-duur|Mirri Maz Duur]], who treats the khal’s wounds. When [[mago|Mago]] complains to him that the khaleesi took a captive, Drogo sends word that Mago should find another.',
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
} satisfies Record<string, Timeline<Story>>
