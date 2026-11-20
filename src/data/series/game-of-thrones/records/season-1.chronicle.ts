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
 * The Winterfell and northern cast (#1361) follows the same rules. Hullen,
 * Harwin, Alyn, Jeyne Poole, Hallis Mollen and Dacey Mormont are the books’
 * alone, and the Smalljon, Rickard Karstark, Roose Bolton, Robett Glover and
 * Wendel Manderly reach the show only after episode 10, so their stories are
 * the books’, filed at their show gates.
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
  // Winterfell and the North (#1361).
  'eddard-stark': [
    inBooks(
      [1, 2],
      {
        it: 'Chi pronuncia la sentenza',
        en: 'The man who passes the sentence',
      },
      {
        it: 'Eddard, lord di Grande Inverno, porta il figlio [[bran-stark|Bran]] ad assistere all’esecuzione di un disertore dei Guardiani della notte e lo decapita di persona con Ghiaccio, la sua spada. Sulla via del ritorno spiega a Bran che secondo l’uso dei Primi Uomini chi pronuncia la sentenza deve anche eseguirla. [[robb-stark|Robb]] e [[jon-snow|Jon Snow]] trovano una meta-lupa morta con un pezzo di corno di cervo nella gola. [[theon-greyjoy|Theon Greyjoy]] propone di uccidere i cuccioli, ma Jon fa notare che sono cinque, uno per ogni figlio legittimo di Eddard, ed Eddard li lascia tenere a patto che i ragazzi li allevino da soli.',
        en: 'Eddard, the lord of Winterfell, takes his son [[bran-stark|Bran]] to watch the execution of a deserter from the Night’s Watch and beheads the man himself with his sword, Ice. On the way back he explains to Bran that, by the custom of the First Men, the man who passes the sentence should carry it out. [[robb-stark|Robb]] and [[jon-snow|Jon Snow]] find a dead direwolf with a piece of stag antler in her throat. [[theon-greyjoy|Theon Greyjoy]] offers to kill the pups, but Jon points out that there are five, one for each of Eddard’s trueborn children, and Eddard lets them keep the pups if the children raise them themselves.',
      },
    ),
    onScreen(
      [1, 5],
      { it: 'Il re a Grande Inverno', en: 'The king at Winterfell' },
      {
        it: 'Eddard decapita di persona un disertore dei Guardiani della notte, perché chi pronuncia la sentenza deve brandire la spada. Al ritorno lascia tenere ai figli i cuccioli di una meta-lupa morta. Poi [[catelyn-stark|Catelyn]] gli porta la notizia che Jon Arryn, il Primo Cavaliere del Re, è morto e che il re sta arrivando. Nelle cripte di Grande Inverno [[robert-baratheon|re Robert]] gli offre la carica di Primo Cavaliere e propone di dare in sposa [[sansa-stark|Sansa]] a suo figlio [[joffrey-baratheon|Joffrey]]. Quella notte una lettera della sorella di Catelyn accusa i Lannister di aver ucciso Jon Arryn, ed Eddard accetta la carica.',
        en: 'Eddard beheads a deserter from the Night’s Watch himself, because the man who passes the sentence should swing the sword. On the way back he lets his children keep the pups of a dead direwolf. Then [[catelyn-stark|Catelyn]] brings him word that Jon Arryn, the Hand of the King, is dead and that the king is on his way. In the crypts of Winterfell [[robert-baratheon|King Robert]] offers him the post of Hand and proposes that [[sansa-stark|Sansa]] marry his son [[joffrey-baratheon|Joffrey]]. That night a letter from Catelyn’s sister accuses the Lannisters of murdering Jon Arryn, and Eddard accepts the post.',
      },
    ),
    inBooks(
      [1, 7],
      { it: 'L’offerta nelle cripte', en: 'The offer in the crypts' },
      {
        it: 'Eddard accoglie a Grande Inverno il vecchio amico [[robert-baratheon|re Robert]] e lo accompagna nelle cripte, alla tomba della sorella Lyanna, che Robert avrebbe dovuto sposare. Lì Robert gli offre la carica di Primo Cavaliere del Re, rimasta vacante alla morte di Jon Arryn, e i due combinano il fidanzamento di [[sansa-stark|Sansa]] con il principe [[joffrey-baratheon|Joffrey]]. Eddard chiede tempo, convinto che il suo posto sia al Nord. Poi maestro [[luwin|Luwin]] porta una lettera segreta della sorella di [[catelyn-stark|Catelyn]]: Jon Arryn sarebbe stato assassinato dalla regina. Eddard decide di andare a sud con Sansa, [[arya-stark|Arya]] e [[bran-stark|Bran]].',
        en: 'Eddard welcomes his old friend [[robert-baratheon|King Robert]] to Winterfell and takes him down to the crypts, to the tomb of his sister Lyanna, whom Robert was to marry. There Robert offers him the post of Hand of the King, left empty by Jon Arryn’s death, and the two agree that [[sansa-stark|Sansa]] will be betrothed to Prince [[joffrey-baratheon|Joffrey]]. Eddard asks for time, sure that his place is in the North. Then Maester [[luwin|Luwin]] brings a secret letter from [[catelyn-stark|Catelyn]]’s sister: it claims the queen murdered Jon Arryn. Eddard decides to go south with Sansa, [[arya-stark|Arya]] and [[bran-stark|Bran]].',
      },
    ),
    inBoth(
      [2, 17],
      { it: 'La meta-lupa di Sansa', en: 'Sansa’s wolf' },
      {
        it: 'Eddard lascia Grande Inverno mentre [[bran-stark|Bran]] giace privo di sensi dopo la caduta, e parte verso sud con [[robert-baratheon|re Robert]] e le figlie. Lungo la strada [[arya-stark|Arya]] colpisce il principe [[joffrey-baratheon|Joffrey]], che minacciava un ragazzo, e la sua meta-lupa morde il principe. Davanti al re [[sansa-stark|Sansa]] dice di non ricordare cosa sia successo. [[cersei-lannister|Cersei]] pretende la morte della meta-lupa, ma quella di Arya è sparita, e Robert cede quando la regina chiede quella di Sansa. Eddard non lascia il compito a nessun altro e uccide Lady con le sue mani.',
        en: 'Eddard leaves Winterfell while [[bran-stark|Bran]] lies senseless after his fall, and rides south with [[robert-baratheon|King Robert]] and his daughters. On the road [[arya-stark|Arya]] strikes Prince [[joffrey-baratheon|Joffrey]], who was threatening a boy, and her direwolf bites the prince. Before the king, [[sansa-stark|Sansa]] says she does not remember what happened. [[cersei-lannister|Cersei]] demands the direwolf’s death, but Arya’s is gone, and Robert gives way when the queen asks for Sansa’s instead. Eddard leaves the task to no one else and kills Lady with his own hands.',
      },
    ),
    inBoth(
      [3, 21],
      { it: 'Il concilio ristretto', en: 'The small council' },
      {
        it: 'Appena arrivato ad Approdo del Re, Eddard viene convocato al concilio ristretto, dove conosce [[petyr-baelish|Ditocorto]], il gran maestro [[pycelle|Pycelle]], [[renly-baratheon|Renly Baratheon]] e l’eunuco [[varys|Varys]]. Scopre che la corona è pesantemente indebitata e che il re vuole un torneo in onore del nuovo Primo Cavaliere. Poi Ditocorto lo porta in un bordello, dove lo aspetta di nascosto [[catelyn-stark|Catelyn]], venuta a sud dopo che qualcuno ha cercato di uccidere Bran. Ditocorto promette di aiutarlo a scoprire la verità sulla morte di Jon Arryn.',
        en: 'As soon as he reaches King’s Landing, Eddard is summoned to the small council, where he meets [[petyr-baelish|Littlefinger]], Grand Maester [[pycelle|Pycelle]], [[renly-baratheon|Renly Baratheon]] and the eunuch [[varys|Varys]]. He learns that the crown is deep in debt and that the king wants a tourney in honour of his new Hand. Then Littlefinger takes him to a brothel, where [[catelyn-stark|Catelyn]] is waiting in secret, having come south after someone tried to kill Bran. Littlefinger promises to help him find the truth about Jon Arryn’s death.',
      },
    ),
    inBoth(
      [4, 30],
      { it: 'Il ragazzo dell’armaiolo', en: 'The armorer’s apprentice' },
      {
        it: 'Seguendo i passi di Jon Arryn, Eddard va dal maestro armaiolo [[tobho-mott|Tobho Mott]] e conosce il suo apprendista, [[gendry|Gendry]]. Jon Arryn era venuto a vedere il ragazzo, ed Eddard capisce che Gendry è uno dei figli bastardi di re Robert. Eddard non va alla prima giornata del torneo in suo onore, in cui ser [[gregor-clegane|Gregor Clegane]] uccide in giostra ser [[hugh-of-the-vale|Hugh della Valle]], l’ex scudiero di Jon Arryn.',
        en: 'Retracing Jon Arryn’s steps, Eddard visits the master armorer [[tobho-mott|Tobho Mott]] and meets his apprentice, [[gendry|Gendry]]. Jon Arryn had come to see the boy, and Eddard realizes that Gendry is one of King Robert’s bastard sons. Eddard stays away from the first day of the tourney held in his honour, where Ser [[gregor-clegane|Gregor Clegane]] kills Ser [[hugh-of-the-vale|Hugh of the Vale]], Jon Arryn’s former squire, in the joust.',
      },
    ),
    inBoth(
      [5, 36],
      { it: 'L’agguato in strada', en: 'The ambush in the street' },
      {
        it: '[[varys|Varys]] rivela a Eddard che Jon Arryn è stato avvelenato con le Lacrime di Lys. Quando [[robert-baratheon|re Robert]] ordina di uccidere [[daenerys-targaryen|Daenerys Targaryen]], incinta, Eddard si rifiuta e lascia la carica di Primo Cavaliere. [[petyr-baelish|Ditocorto]] lo porta allora in un bordello, dove trova un’altra figlia bastarda del re. All’uscita [[jaime-lannister|Jaime Lannister]] e i suoi uomini gli tendono un agguato, furiosi perché [[catelyn-stark|Catelyn]] ha preso prigioniero [[tyrion-lannister|Tyrion]]. Gli uomini di Eddard vengono uccisi, e con loro [[jory-cassel|Jory Cassel]], ed Eddard resta gravemente ferito a una gamba.',
        en: '[[varys|Varys]] tells Eddard that Jon Arryn was poisoned with the Tears of Lys. When [[robert-baratheon|King Robert]] orders the death of [[daenerys-targaryen|Daenerys Targaryen]], who is with child, Eddard refuses and resigns as Hand of the King. [[petyr-baelish|Littlefinger]] then takes him to a brothel, where he finds another of the king’s bastard daughters. As he leaves, [[jaime-lannister|Jaime Lannister]] and his men ambush him, enraged that [[catelyn-stark|Catelyn]] has taken [[tyrion-lannister|Tyrion]] prisoner. Eddard’s men are killed, [[jory-cassel|Jory Cassel]] among them, and Eddard’s leg is badly hurt.',
      },
    ),
    inBoth(
      [6, 46],
      { it: 'Il libro dei lignaggi', en: 'The book of lineages' },
      {
        it: 'Quando Eddard si risveglia, [[robert-baratheon|re Robert]] gli restituisce la carica di Primo Cavaliere e parte per la caccia. Mentre tiene udienza al posto del re, Eddard ascolta dei contadini i cui villaggi sono stati devastati da ser [[gregor-clegane|Gregor Clegane]], e manda lord [[beric-dondarrion|Beric Dondarrion]] con un gruppo di uomini a fare giustizia. Decide poi di rimandare le figlie a Grande Inverno. Qualcosa che [[sansa-stark|Sansa]] dice di [[joffrey-baratheon|Joffrey]] lo riporta ai lignaggi delle grandi casate che Jon Arryn stava studiando: i figli dei Baratheon sono sempre neri di capelli, mentre i tre figli del re sono biondi.',
        en: 'When Eddard wakes, [[robert-baratheon|King Robert]] gives him back the post of Hand and leaves to go hunting. Holding court in the king’s place, Eddard hears peasants whose villages were ravaged by Ser [[gregor-clegane|Gregor Clegane]], and sends Lord [[beric-dondarrion|Beric Dondarrion]] with a company of men to bring him to justice. He then decides to send his daughters back to Winterfell. Something [[sansa-stark|Sansa]] says about [[joffrey-baratheon|Joffrey]] brings him back to the lineages of the great houses that Jon Arryn was studying: Baratheon children are always black-haired, and the king’s three children are golden.',
      },
    ),
    inBoth(
      [7, 50],
      { it: 'Il trono e il pugnale', en: 'The throne and the dagger' },
      {
        it: 'Eddard dice a [[cersei-lannister|Cersei]] di sapere che i suoi figli non sono di Robert e le consiglia di fuggire prima che il re torni dalla caccia. Ma [[robert-baratheon|Robert]] torna ferito a morte da un cinghiale, e sul letto di morte nomina Eddard Protettore del Regno fino alla maggiore età del suo erede. Eddard non scrive il nome di [[joffrey-baratheon|Joffrey]] nel documento. Rifiuta l’aiuto di [[renly-baratheon|Renly]] e conta su [[petyr-baelish|Ditocorto]] per assicurarsi la Guardia cittadina. Morto il re, nella sala del trono Cersei strappa il documento. Eddard dichiara che Joffrey non ha diritto al trono, ma le cappe dorate di [[janos-slynt|Janos Slynt]] uccidono i suoi uomini e Ditocorto gli punta un pugnale alla gola: lo aveva avvertito di non fidarsi di lui.',
        en: 'Eddard tells [[cersei-lannister|Cersei]] that he knows her children are not Robert’s and urges her to flee before the king returns from his hunt. But [[robert-baratheon|Robert]] comes back mortally wounded by a boar, and on his deathbed names Eddard Protector of the Realm until his heir comes of age. Eddard leaves [[joffrey-baratheon|Joffrey]]’s name out of the letter. He refuses [[renly-baratheon|Renly]]’s help and counts on [[petyr-baelish|Littlefinger]] to win him the City Watch. With the king dead, Cersei tears up the letter in the throne room. Eddard declares that Joffrey has no right to the throne, but [[janos-slynt|Janos Slynt]]’s gold cloaks kill his men and Littlefinger holds a dagger to his throat: he did warn him not to trust him.',
      },
    ),
    onScreen(
      [8, 59],
      { it: 'Nelle celle', en: 'In the cells' },
      {
        it: 'Eddard è prigioniero nelle segrete della Fortezza Rossa. [[varys|Varys]] va a trovarlo e non riesce a credere che abbia avvertito la regina di ciò che stava per fare. Eddard risponde che voleva risparmiare i figli di [[cersei-lannister|Cersei]], che Robert avrebbe ucciso se avesse saputo la verità. Varys gli dice che è stata proprio quella pietà a uccidere il re, e che [[catelyn-stark|Catelyn]] non ha più [[tyrion-lannister|Tyrion]] in suo potere. Quando Eddard gli chiede chi serva davvero, Varys risponde: il regno.',
        en: 'Eddard is a prisoner in the dungeons of the Red Keep. [[varys|Varys]] visits him and cannot believe he warned the queen of what he meant to do. Eddard answers that he wanted to spare [[cersei-lannister|Cersei]]’s children, whom Robert would have killed had he known the truth. Varys tells him that this mercy is what killed the king, and that [[catelyn-stark|Catelyn]] no longer holds [[tyrion-lannister|Tyrion]]. When Eddard asks whom he truly serves, Varys answers: the realm.',
      },
    ),
    inBooks(
      [8, 59],
      { it: 'La proposta di Varys', en: 'Varys’s offer' },
      {
        it: 'Eddard è rinchiuso nelle celle nere della Fortezza Rossa. [[varys|Varys]] va a trovarlo e lo esorta a confessare il tradimento, per proteggere meglio le figlie [[sansa-stark|Sansa]] e [[arya-stark|Arya]]. In cambio, gli promette, gli sarà permesso di prendere il nero e di unirsi ai Guardiani della notte.',
        en: 'Eddard is held in the black cells of the Red Keep. [[varys|Varys]] visits him and urges him to confess to treason, so as to better protect his daughters [[sansa-stark|Sansa]] and [[arya-stark|Arya]]. In return, Varys promises, he will be allowed to take the black and join the Night’s Watch.',
      },
    ),
    inBoth(
      [9, 66],
      { it: 'Davanti al Grande Tempio', en: 'Before the Great Sept' },
      {
        it: 'Per salvare le figlie, Eddard accetta di confessare. Viene condotto sui gradini del Grande Tempio di Baelor e, davanti alla folla, confessa il tradimento e riconosce [[joffrey-baratheon|Joffrey]] come re. Joffrey però ordina la sua morte. [[arya-stark|Arya]] è tra la folla, e [[yoren|Yoren]] dei Guardiani della notte la trattiene. Anche [[sansa-stark|Sansa]] è presente. Ser [[ilyn-payne|Ilyn Payne]] decapita Eddard con Ghiaccio, la sua stessa spada.',
        en: 'To save his daughters, Eddard agrees to confess. He is brought to the steps of the Great Sept of Baelor and, before the crowd, confesses to treason and names [[joffrey-baratheon|Joffrey]] king. Joffrey orders his death all the same. [[arya-stark|Arya]] is in the crowd, and [[yoren|Yoren]] of the Night’s Watch holds her back. [[sansa-stark|Sansa]] is there too. Ser [[ilyn-payne|Ilyn Payne]] beheads Eddard with Ice, his own sword.',
      },
    ),
  ],
  'sansa-stark': [
    inBoth(
      [1, 5],
      { it: 'Promessa al principe', en: 'Promised to the prince' },
      {
        it: 'Sansa è la figlia maggiore di [[eddard-stark|Eddard]] e [[catelyn-stark|Catelyn Stark]]. Insieme alla famiglia accoglie nel cortile di Grande Inverno [[robert-baratheon|re Robert]], la regina [[cersei-lannister|Cersei]] e i loro figli, tra cui il principe ereditario [[joffrey-baratheon|Joffrey]]. Nelle cripte del castello il re offre a Eddard la carica di Primo Cavaliere e propone che Sansa sposi Joffrey.',
        en: 'Sansa is the elder daughter of [[eddard-stark|Eddard]] and [[catelyn-stark|Catelyn Stark]]. With her family she greets [[robert-baratheon|King Robert]], Queen [[cersei-lannister|Cersei]] and their children in the yard of Winterfell, among them the crown prince, [[joffrey-baratheon|Joffrey]]. In the crypts below the castle the king offers Eddard the post of Hand and proposes that Sansa marry Joffrey.',
      },
    ),
    inBoth(
      [2, 17],
      { it: 'Non ricordo', en: 'I don’t remember' },
      {
        it: 'Lungo la strada verso sud il principe [[joffrey-baratheon|Joffrey]] porta Sansa fuori, lungo il fiume. Trovano [[arya-stark|Arya]] che si allena con la spada insieme a [[mycah|Mycah]], il figlio del macellaio. Joffrey minaccia Mycah, Arya lo colpisce e la sua meta-lupa gli morde il braccio. Sansa cerca di consolare Joffrey, che la respinge. Davanti al re, Sansa dice di non ricordare cosa sia successo, e Arya le si scaglia contro. Poiché la meta-lupa di Arya è sparita, la regina [[cersei-lannister|Cersei]] pretende quella di Sansa, e [[eddard-stark|Eddard]] uccide Lady.',
        en: 'On the road south Prince [[joffrey-baratheon|Joffrey]] takes Sansa out along the river. They find [[arya-stark|Arya]] practising swords with [[mycah|Mycah]], the butcher’s boy. Joffrey threatens Mycah, Arya strikes him, and her direwolf bites his arm. Sansa tries to comfort Joffrey, who pushes her away. Before the king, Sansa says she does not remember what happened, and Arya flies at her. Since Arya’s direwolf is gone, Queen [[cersei-lannister|Cersei]] demands Sansa’s instead, and [[eddard-stark|Eddard]] kills Lady.',
      },
    ),
    onScreen(
      [4, 30],
      { it: 'Il torneo del Primo Cavaliere', en: 'The Hand’s tourney' },
      {
        it: 'Sansa assiste al torneo in onore di suo padre. Nella prima giostra ser [[gregor-clegane|Gregor Clegane]], la Montagna, uccide ser [[hugh-of-the-vale|Hugh della Valle]] con una scheggia di lancia nel collo. [[petyr-baelish|Ditocorto]] si siede accanto a lei e le racconta che da bambino Gregor spinse nel fuoco la faccia del fratello minore, [[sandor-clegane|Sandor]], perché aveva giocato con un suo giocattolo. Le consiglia di non andare in giro a raccontarlo.',
        en: 'Sansa watches the tourney held in her father’s honour. In the first tilt Ser [[gregor-clegane|Gregor Clegane]], the Mountain, kills Ser [[hugh-of-the-vale|Hugh of the Vale]] with a splinter of lance through the neck. [[petyr-baelish|Littlefinger]] sits beside her and tells her that as a boy Gregor pushed the face of his younger brother, [[sandor-clegane|Sandor]], into a fire for playing with one of his toys. He advises her not to spread the story.',
      },
    ),
    inBooks(
      [5, 30],
      { it: 'Il ritorno con il Mastino', en: 'The ride back with the Hound' },
      {
        it: 'Al torneo del Primo Cavaliere Sansa siede con [[jeyne-poole|Jeyne Poole]] e la septa [[mordane|Mordane]]. Vede ser [[gregor-clegane|Gregor Clegane]] uccidere ser [[hugh-of-the-vale|Hugh della Valle]] e si invaghisce di ser [[loras-tyrell|Loras Tyrell]], il Cavaliere di fiori. Alla festa della sera il principe [[joffrey-baratheon|Joffrey]] è gentile con lei, ma alla fine diventa freddo e la fa riaccompagnare da [[sandor-clegane|Sandor Clegane]]. Lungo la strada il Mastino la costringe a guardargli il volto e le racconta che fu Gregor a premergli la faccia su un braciere quando aveva sette anni. La minaccia di ucciderla se lo dirà a qualcuno.',
        en: 'At the Hand’s tourney Sansa sits with [[jeyne-poole|Jeyne Poole]] and Septa [[mordane|Mordane]]. She sees Ser [[gregor-clegane|Gregor Clegane]] kill Ser [[hugh-of-the-vale|Hugh of the Vale]] and is taken with Ser [[loras-tyrell|Loras Tyrell]], the Knight of Flowers. At the feast that night Prince [[joffrey-baratheon|Joffrey]] is kind to her, but at the end he turns cold and has [[sandor-clegane|Sandor Clegane]] take her back. On the way the Hound makes her look at his face and tells her that Gregor pressed it into a brazier when he was seven. He threatens to kill her if she tells anyone.',
      },
    ),
    onScreen(
      [6, 46],
      { it: 'La collana di Joffrey', en: 'Joffrey’s necklace' },
      {
        it: 'Il principe [[joffrey-baratheon|Joffrey]] va da Sansa a scusarsi per quanto è successo lungo la strada, la chiama il suo amore e le regala una collana. Sansa lo perdona, senza sapere che è stata la regina a spingerlo. Poco dopo suo padre [[eddard-stark|Eddard]] decide di rimandare lei e [[arya-stark|Arya]] a Grande Inverno. Sansa protesta: sposerà Joffrey e gli darà tanti bambini dai capelli d’oro.',
        en: 'Prince [[joffrey-baratheon|Joffrey]] comes to Sansa to apologize for what happened on the road, calls her his lady love and gives her a necklace. Sansa forgives him, unaware that the queen put him up to it. Soon after, her father [[eddard-stark|Eddard]] decides to send her and [[arya-stark|Arya]] back to Winterfell. Sansa protests: she is going to marry Joffrey and give him lots of golden-haired babies.',
      },
    ),
    inBooks(
      [8, 52],
      { it: 'Dalla regina', en: 'To the queen' },
      {
        it: 'Non volendo lasciare la corte e il fidanzamento con [[joffrey-baratheon|Joffrey]], Sansa va dalla regina [[cersei-lannister|Cersei]] e le racconta che il padre vuole imbarcare lei e [[arya-stark|Arya]] su una nave per Grande Inverno, senza capire che così lo tradisce. Cersei promette di aiutarla, poi la fa chiudere sotto sorveglianza nella stanza di una torre. Più tardi vi spingono dentro anche [[jeyne-poole|Jeyne Poole]], che ha visto uccidere gli uomini degli Stark. Le due restano rinchiuse tre giorni senza sapere cosa stia succedendo.',
        en: 'Not wanting to leave the court and her betrothal to [[joffrey-baratheon|Joffrey]], Sansa goes to Queen [[cersei-lannister|Cersei]] and tells her that her father means to put her and [[arya-stark|Arya]] on a ship for Winterfell, without seeing that she is betraying him. Cersei promises to help, then has her locked under guard in a tower room. Later [[jeyne-poole|Jeyne Poole]], who saw Stark men killed, is pushed in with her. The two are kept there for three days with no idea of what is happening.',
      },
    ),
    inBoth(
      [8, 58],
      { it: 'La supplica', en: 'The plea' },
      {
        it: 'Dopo l’arresto del padre, Sansa è trattenuta nella Fortezza Rossa. Davanti alla regina [[cersei-lannister|Cersei]] e al concilio scrive al fratello [[robb-stark|Robb]] una lettera che gli chiede di venire a giurare fedeltà al nuovo re, [[joffrey-baratheon|Joffrey]]. Poi, davanti alla corte, implora Joffrey di avere pietà di suo padre. Joffrey promette di essere clemente, se [[eddard-stark|Eddard]] confesserà il suo tradimento.',
        en: 'After her father’s arrest Sansa is held in the Red Keep. Before Queen [[cersei-lannister|Cersei]] and the council she writes a letter to her brother [[robb-stark|Robb]], asking him to come and swear fealty to the new king, [[joffrey-baratheon|Joffrey]]. Then, before the court, she begs Joffrey to show her father mercy. Joffrey promises to be merciful if [[eddard-stark|Eddard]] confesses his treason.',
      },
    ),
    inBoth(
      [9, 66],
      { it: 'La promessa infranta', en: 'The broken promise' },
      {
        it: 'Sansa assiste al giudizio di suo padre sui gradini del Grande Tempio di Baelor. [[eddard-stark|Eddard]] confessa il tradimento e riconosce [[joffrey-baratheon|Joffrey]] come re. Ma Joffrey, nonostante la promessa di clemenza fatta a Sansa, ordina la sua morte. Sansa urla e sviene mentre ser [[ilyn-payne|Ilyn Payne]] lo decapita.',
        en: 'Sansa watches her father’s judgment on the steps of the Great Sept of Baelor. [[eddard-stark|Eddard]] confesses to treason and names [[joffrey-baratheon|Joffrey]] king. But Joffrey, despite the mercy he promised Sansa, orders his death. Sansa screams and faints as Ser [[ilyn-payne|Ilyn Payne]] beheads him.',
      },
    ),
    inBoth(
      [10, 68],
      { it: 'Le teste sulle mura', en: 'The heads on the walls' },
      {
        it: 'Il re [[joffrey-baratheon|Joffrey]], ancora promesso a Sansa, la porta sulle mura del castello e la costringe a guardare la testa di suo padre, infilzata su una picca. Accanto c’è quella della septa [[mordane|Mordane]]. Joffrey fa colpire Sansa da ser [[meryn-trant|Meryn Trant]]. Sansa sta per spingere il re giù dalle mura, quando [[sandor-clegane|Sandor Clegane]] le tampona il sangue sul labbro con un fazzoletto.',
        en: 'King [[joffrey-baratheon|Joffrey]], still promised to Sansa, takes her up on the castle walls and makes her look at her father’s head on a spike. Beside it is Septa [[mordane|Mordane]]’s. Joffrey has Ser [[meryn-trant|Meryn Trant]] strike Sansa. Sansa is about to push the king off the walls when [[sandor-clegane|Sandor Clegane]] dabs the blood from her lip with a handkerchief.',
      },
    ),
  ],
  'arya-stark': [
    inBoth(
      [1, 5],
      { it: 'La figlia minore', en: 'The younger daughter' },
      {
        it: 'Arya è la figlia minore di [[eddard-stark|Eddard]] e [[catelyn-stark|Catelyn Stark]]. Come i fratelli e la sorella [[sansa-stark|Sansa]], tiene uno dei cuccioli di meta-lupo trovati accanto alla madre morta. Con il resto della famiglia accoglie nel cortile di Grande Inverno [[robert-baratheon|re Robert]], la regina [[cersei-lannister|Cersei]] e i loro figli.',
        en: 'Arya is the younger daughter of [[eddard-stark|Eddard]] and [[catelyn-stark|Catelyn Stark]]. Like her brothers and her sister [[sansa-stark|Sansa]], she keeps one of the direwolf pups found beside their dead mother. With the rest of her family she greets [[robert-baratheon|King Robert]], Queen [[cersei-lannister|Cersei]] and their children in the yard of Winterfell.',
      },
    ),
    inBooks(
      [1, 8],
      { it: 'I punti storti', en: 'Crooked stitches' },
      {
        it: 'Alla lezione di cucito della septa [[mordane|Mordane]] i punti di Arya sono storti, mentre [[sansa-stark|Sansa]] e [[jeyne-poole|Jeyne Poole]] parlano dei complimenti del principe [[joffrey-baratheon|Joffrey]]. Quando la septa la rimprovera, Arya scappa. Ritrova Nymeria, la sua meta-lupa, che non può entrare alla lezione, e insieme a [[jon-snow|Jon Snow]] guarda i ragazzi che si allenano nel cortile. Joffrey provoca [[robb-stark|Robb]] e [[theon-greyjoy|Theon]] deve trattenerlo. Tornata in camera, Arya trova ad aspettarla la septa e sua madre.',
        en: 'At Septa [[mordane|Mordane]]’s needlework lesson Arya’s stitches are crooked, while [[sansa-stark|Sansa]] and [[jeyne-poole|Jeyne Poole]] talk about Prince [[joffrey-baratheon|Joffrey]]’s compliments. When the septa scolds her, Arya runs off. She finds Nymeria, her direwolf, who is not allowed at the lesson, and with [[jon-snow|Jon Snow]] she watches the boys training in the yard. Joffrey taunts [[robb-stark|Robb]], and [[theon-greyjoy|Theon]] has to hold him back. Back in her room, Arya finds the septa and her mother waiting for her.',
      },
    ),
    inBoth(
      [2, 17],
      { it: 'Il ragazzo del macellaio', en: 'The butcher’s boy' },
      {
        it: 'Prima di partire per la Barriera, [[jon-snow|Jon Snow]] regala ad Arya una spada sottile, che lei chiama Ago. Lungo la strada verso sud Arya si allena con [[mycah|Mycah]], il figlio del macellaio. Il principe [[joffrey-baratheon|Joffrey]] lo minaccia con la spada, Arya lo colpisce e la sua meta-lupa, Nymeria, morde il principe. Arya getta nel fiume la spada di Joffrey e scaccia Nymeria a sassate, perché non la uccidano. Davanti al re [[sansa-stark|Sansa]] dice di non ricordare, e Arya le si scaglia contro. La regina fa uccidere Lady al posto di Nymeria, e la guardia giurata di Joffrey uccide Mycah.',
        en: 'Before leaving for the Wall, [[jon-snow|Jon Snow]] gives Arya a slender sword, which she calls Needle. On the road south Arya practises with [[mycah|Mycah]], the butcher’s boy. Prince [[joffrey-baratheon|Joffrey]] threatens him with his sword, Arya strikes the prince, and her direwolf, Nymeria, bites him. Arya throws Joffrey’s sword into the river and drives Nymeria away with stones so that she will not be killed. Before the king, [[sansa-stark|Sansa]] says she does not remember, and Arya flies at her. The queen has Lady killed in Nymeria’s place, and Joffrey’s sworn shield kills Mycah.',
      },
    ),
    inBoth(
      [3, 23],
      { it: 'Il maestro di danza', en: 'The dancing master' },
      {
        it: 'Ad Approdo del Re Arya è ancora in lite con [[sansa-stark|Sansa]] per quanto è successo lungo la strada. Suo padre [[eddard-stark|Eddard]] trova Ago e, invece di toglierle la spada, gliela lascia e le trova un maestro: [[syrio-forel|Syrio Forel]], che era il primo spadaccino di Braavos. Syrio comincia a insegnarle a combattere con una lama leggera.',
        en: 'In King’s Landing Arya is still at odds with [[sansa-stark|Sansa]] over what happened on the road. Her father [[eddard-stark|Eddard]] finds Needle and, rather than take the sword away, lets her keep it and finds her a teacher: [[syrio-forel|Syrio Forel]], who was the First Sword of Braavos. Syrio begins to teach her to fight with a light blade.',
      },
    ),
    onScreen(
      [4, 28],
      { it: 'Non sono io', en: 'That’s not me' },
      {
        it: 'Arya si allena con [[syrio-forel|Syrio Forel]] restando in equilibrio su una gamba sola in un corridoio della Fortezza Rossa. Chiede a suo padre [[eddard-stark|Eddard]] se [[bran-stark|Bran]], che non può più camminare, potrà diventare un cavaliere della Guardia reale. Eddard dice di no, ma che potrà essere lord, sedere nel concilio del re o costruire castelli. Quando Arya chiede se lei potrà fare tutto questo, Eddard risponde che sposerà un lord e avrà figli lord e principi. Arya gli dice: non sono io.',
        en: 'Arya trains for [[syrio-forel|Syrio Forel]] by balancing on one leg in a hall of the Red Keep. She asks her father [[eddard-stark|Eddard]] whether [[bran-stark|Bran]], who can no longer walk, can still become a knight of the Kingsguard. Eddard says no, but that he can be a lord, sit on the king’s council or build castles. When Arya asks if she can do those things, Eddard answers that she will marry a lord and have lords and princes for sons. Arya tells him: that’s not me.',
      },
    ),
    inBoth(
      [5, 33],
      { it: 'Nei sotterranei', en: 'Under the castle' },
      {
        it: 'Per esercitarsi, Arya dà la caccia ai gatti della Fortezza Rossa e ne segue uno nei sotterranei, dove sono custoditi i teschi dei draghi. Al buio sente due uomini che complottano: parlano di suo padre, della regina e di una guerra. Arya trova la via d’uscita e corre ad avvertire [[eddard-stark|Eddard]], ma lui non dà peso al suo racconto confuso. La conversazione viene interrotta dall’arrivo di [[yoren|Yoren]] dei Guardiani della notte, che porta notizie urgenti per il Primo Cavaliere.',
        en: 'As an exercise, Arya chases the cats of the Red Keep and follows one into the dungeons, where the skulls of the dragons are kept. In the dark she hears two men plotting: they talk of her father, of the queen and of a war. Arya finds her way out and runs to warn [[eddard-stark|Eddard]], but he pays little heed to her muddled tale. They are interrupted when [[yoren|Yoren]] of the Night’s Watch arrives with urgent news for the Hand.',
      },
    ),
    inBoth(
      [8, 51],
      { it: 'La spada di legno', en: 'The wooden sword' },
      {
        it: 'Dopo l’arresto del padre, ser [[meryn-trant|Meryn Trant]] della Guardia reale e alcune guardie vengono a prendere Arya durante la lezione. [[syrio-forel|Syrio Forel]] li affronta con la sua spada di legno e le dice di scappare. Arya non vede cosa ne sia di lui. Nelle stalle gli uomini di suo padre sono morti, ma lei ritrova Ago nel suo baule. Quando un garzone di stalla cerca di afferrarla, Arya lo trafigge con la spada e lo uccide. Poi esce dal castello per la strada che aveva scoperto inseguendo i gatti.',
        en: 'After her father’s arrest, Ser [[meryn-trant|Meryn Trant]] of the Kingsguard and a few guards come for Arya during her lesson. [[syrio-forel|Syrio Forel]] faces them with his wooden sword and tells her to run. Arya does not see what becomes of him. In the stables her father’s men are dead, but she finds Needle in her trunk. When a stableboy tries to seize her, Arya runs him through and kills him. Then she leaves the castle by the way she found while chasing cats.',
      },
    ),
    inBoth(
      [9, 66],
      { it: 'Sulla statua di Baelor', en: 'On Baelor’s statue' },
      {
        it: 'Arya vive per le strade di Approdo del Re e si procura il cibo catturando piccioni. Quando la folla corre verso il Grande Tempio di Baelor, dove viene portato il Primo Cavaliere, la segue e si arrampica su una statua per vedere. Suo padre [[eddard-stark|Eddard]] confessa il tradimento, ma [[joffrey-baratheon|Joffrey]] ordina di decapitarlo. Arya cerca di raggiungerlo, ma [[yoren|Yoren]] dei Guardiani della notte la afferra e le impedisce di vedere mentre ser [[ilyn-payne|Ilyn Payne]] uccide suo padre.',
        en: 'Arya lives on the streets of King’s Landing and gets food by catching pigeons. When the crowd hurries to the Great Sept of Baelor, where the Hand is being brought, she follows it and climbs a statue to see. Her father [[eddard-stark|Eddard]] confesses to treason, but [[joffrey-baratheon|Joffrey]] orders him beheaded. Arya tries to reach him, but [[yoren|Yoren]] of the Night’s Watch grabs her and keeps her from seeing as Ser [[ilyn-payne|Ilyn Payne]] kills her father.',
      },
    ),
    onScreen(
      [10, 66],
      { it: 'Arry', en: 'Arry' },
      {
        it: '[[yoren|Yoren]] trascina Arya via dalla folla chiamandola ragazzo e le taglia i capelli con un coltello. La porterà fuori da Approdo del Re e fino a Grande Inverno, travestita da recluta dei Guardiani della notte, e la avverte di non fidarsi degli altri. Con il nome di Arry si unisce alle reclute, tra cui [[gendry|Gendry]], Frittella e Lommy Maniverdi. Quando Frittella e Lommy cercano di prenderle Ago, lei sguaina la spada, e Gendry si schiera dalla sua parte.',
        en: '[[yoren|Yoren]] drags Arya away from the crowd, calling her boy, and cuts her hair short with a knife. He will take her out of King’s Landing and on to Winterfell disguised as a recruit for the Night’s Watch, and warns her not to trust the others. Under the name Arry she joins the recruits, among them [[gendry|Gendry]], Hot Pie and Lommy Greenhands. When Hot Pie and Lommy try to take Needle from her, she draws the sword, and Gendry takes her side.',
      },
    ),
  ],
  'jory-cassel': [
    inBoth(
      [1, 2],
      { it: 'Il capitano della guardia', en: 'The captain of the guard' },
      {
        it: 'Jory Cassel è il capitano della guardia di [[eddard-stark|Eddard Stark]]. Cavalca con lui all’esecuzione di un disertore dei Guardiani della notte. Sulla via del ritorno a Grande Inverno è con il gruppo che trova una meta-lupa morta e i suoi cuccioli, che Eddard lascia tenere ai figli.',
        en: 'Jory Cassel is the captain of [[eddard-stark|Eddard Stark]]’s guard. He rides with Eddard to the execution of a deserter from the Night’s Watch. On the way back to Winterfell he is with the party that finds a dead direwolf and her pups, which Eddard lets his children keep.',
      },
    ),
    inBooks(
      [2, 17],
      { it: 'La pelle della meta-lupa', en: 'The direwolf’s pelt' },
      {
        it: 'Lungo la strada verso sud Jory cerca [[arya-stark|Arya]], scomparsa dopo la lite con il principe [[joffrey-baratheon|Joffrey]], e la trova, ma gli uomini dei Lannister lo costringono a portarla davanti al re anziché da suo padre. Jory resta accanto ad Arya. Quando la regina pretende la morte della meta-lupa di Sansa, è lui a portare la spada a [[eddard-stark|Eddard]], che poi gli fa riportare il corpo a Grande Inverno perché la regina non ne abbia la pelle.',
        en: 'On the road south Jory searches for [[arya-stark|Arya]], missing after the quarrel with Prince [[joffrey-baratheon|Joffrey]], and finds her, but Lannister men force him to take her before the king rather than her father. Jory stays by Arya. When the queen demands the death of Sansa’s direwolf, he is the one who brings [[eddard-stark|Eddard]] his sword, and Eddard then has him send the body back to Winterfell so that the queen does not get the pelt.',
      },
    ),
    onScreen(
      [4, 30],
      { it: 'Ricordi di Pyke', en: 'Memories of Pyke' },
      {
        it: 'Ad Approdo del Re Jory aiuta [[eddard-stark|Eddard]] a indagare sugli ultimi giorni di Jon Arryn. Ser [[hugh-of-the-vale|Hugh della Valle]], l’ex scudiero di Jon Arryn, rifiuta di parlargli perché Jory non è un cavaliere. Mandato con un messaggio per il re, Jory trova [[jaime-lannister|Jaime Lannister]] di guardia alla porta di Robert. I due ricordano l’assedio di Pyke, ma Jaime rifiuta il messaggio: lui non serve lord Stark.',
        en: 'In King’s Landing Jory helps [[eddard-stark|Eddard]] look into Jon Arryn’s last days. Ser [[hugh-of-the-vale|Hugh of the Vale]], Jon Arryn’s former squire, refuses to speak with him because Jory is not a knight. Sent with a message for the king, Jory finds [[jaime-lannister|Jaime Lannister]] guarding Robert’s door. The two remember the siege of Pyke, but Jaime turns the message away: he does not serve Lord Stark.',
      },
    ),
    inBoth(
      [5, 36],
      { it: 'Una lezione per lord Stark', en: 'A lesson for Lord Stark' },
      {
        it: 'Jory accompagna [[eddard-stark|Eddard]] in un bordello della città, dove il Primo Cavaliere cerca un’altra figlia bastarda del re. All’uscita [[jaime-lannister|Jaime Lannister]] li aspetta con molti uomini, furioso perché [[catelyn-stark|Catelyn]] ha preso prigioniero suo fratello [[tyrion-lannister|Tyrion]]. Jaime vuole Eddard vivo, ma fa uccidere i suoi uomini. Jory muore nello scontro.',
        en: 'Jory goes with [[eddard-stark|Eddard]] to a brothel in the city, where the Hand is looking for another of the king’s bastard daughters. As they leave, [[jaime-lannister|Jaime Lannister]] is waiting with many men, enraged that [[catelyn-stark|Catelyn]] has taken his brother [[tyrion-lannister|Tyrion]] prisoner. Jaime wants Eddard alive but has his men killed. Jory dies in the fight.',
      },
    ),
  ],
  'mordane': [
    inBoth(
      [1, 8],
      { it: 'La lezione di cucito', en: 'The needlework lesson' },
      {
        it: 'Mordane è la septa che insegna il cucito e le buone maniere alle figlie di Eddard Stark a Grande Inverno. [[sansa-stark|Sansa]] è un’allieva capace, mentre [[arya-stark|Arya]] fatica con i punti e detesta il cucito. Mentre la septa sorveglia il lavoro delle ragazze, Arya lascia la lezione e va a fare ciò che preferisce.',
        en: 'Mordane is the septa who teaches needlework and manners to Eddard Stark’s daughters at Winterfell. [[sansa-stark|Sansa]] is an able pupil, while [[arya-stark|Arya]] struggles with her stitches and hates needlework. While the septa watches over the girls’ work, Arya leaves the lesson to do what she likes better.',
      },
    ),
    inBooks(
      [4, 30],
      { it: 'Il torneo e la festa', en: 'The tourney and the feast' },
      {
        it: 'Mordane segue le ragazze degli Stark ad Approdo del Re. Al torneo del Primo Cavaliere siede con [[sansa-stark|Sansa]] e [[jeyne-poole|Jeyne Poole]]. Quando ser [[gregor-clegane|Gregor Clegane]] uccide ser [[hugh-of-the-vale|Hugh della Valle]] davanti a loro, Jeyne non regge e la septa la riaccompagna alla Fortezza Rossa. Alla festa della sera beve tanto vino da addormentarsi sul tavolo, così Sansa accetta che il principe [[joffrey-baratheon|Joffrey]] la faccia riaccompagnare.',
        en: 'Mordane follows the Stark girls to King’s Landing. At the Hand’s tourney she sits with [[sansa-stark|Sansa]] and [[jeyne-poole|Jeyne Poole]]. When Ser [[gregor-clegane|Gregor Clegane]] kills Ser [[hugh-of-the-vale|Hugh of the Vale]] in front of them, Jeyne cannot bear it, and the septa takes her back to the Red Keep. At the feast that night she drinks so much wine that she falls asleep on the table, so Sansa lets Prince [[joffrey-baratheon|Joffrey]] arrange an escort for her.',
      },
    ),
    onScreen(
      [8, 52],
      { it: 'Corri in camera tua', en: 'Run to your room' },
      {
        it: 'Dopo l’arresto di [[eddard-stark|Eddard Stark]], Mordane sente rumori di combattimento nella Fortezza Rossa. Quando arrivano le guardie dei Lannister guidate da [[sandor-clegane|Sandor Clegane]], dice a [[sansa-stark|Sansa]] di correre in camera e di sbarrare la porta a chiunque non conosca, e resta ad affrontarle da sola.',
        en: 'After [[eddard-stark|Eddard Stark]]’s arrest, Mordane hears fighting in the Red Keep. When Lannister guards led by [[sandor-clegane|Sandor Clegane]] arrive, she tells [[sansa-stark|Sansa]] to run to her room and bar the door to anyone she does not know, and stays behind to face them alone.',
      },
    ),
    inBoth(
      [10, 68],
      { it: 'Accanto al suo signore', en: 'Beside her lord' },
      {
        it: 'Mordane ha insegnato a [[sansa-stark|Sansa]] e ad Arya a Grande Inverno e le ha seguite a sud. Dopo la morte di [[eddard-stark|Eddard Stark]], il re [[joffrey-baratheon|Joffrey]] porta Sansa sulle mura del castello per mostrarle la testa del padre, infilzata su una picca. Accanto c’è quella della septa Mordane: Joffrey ha fatto decapitare anche lei.',
        en: 'Mordane taught [[sansa-stark|Sansa]] and Arya at Winterfell and followed them south. After [[eddard-stark|Eddard Stark]]’s death, King [[joffrey-baratheon|Joffrey]] takes Sansa up on the castle walls to show her her father’s head on a spike. Beside it is the head of Septa Mordane: Joffrey had her beheaded too.',
      },
    ),
  ],
  'jeyne-poole': [
    inBooks(
      [1, 8],
      { it: 'L’amica di Sansa', en: 'Sansa’s friend' },
      {
        it: 'Jeyne Poole è la figlia dell’intendente di Grande Inverno e la migliore amica di [[sansa-stark|Sansa]]. Alla lezione di cucito della septa [[mordane|Mordane]], il giorno dopo la festa per il re, cuce accanto a Sansa e parla con lei del principe [[joffrey-baratheon|Joffrey]] e di quanto sia bello. Quando la septa si prende gioco del lavoro di [[arya-stark|Arya]], Jeyne ride.',
        en: 'Jeyne Poole is the daughter of the steward of Winterfell and [[sansa-stark|Sansa]]’s closest friend. At Septa [[mordane|Mordane]]’s needlework lesson, the day after the feast for the king, she sews beside Sansa and talks with her about Prince [[joffrey-baratheon|Joffrey]] and how handsome he is. When the septa mocks [[arya-stark|Arya]]’s work, Jeyne laughs.',
      },
    ),
    inBooks(
      [4, 30],
      { it: 'Il torneo', en: 'The tourney' },
      {
        it: 'Jeyne segue il padre ad Approdo del Re, dove [[eddard-stark|Eddard Stark]] è il nuovo Primo Cavaliere. Al torneo in suo onore siede con [[sansa-stark|Sansa]] e confessa che vorrebbe sposare lord Beric Dondarrion. Quando ser [[gregor-clegane|Gregor Clegane]] uccide ser [[hugh-of-the-vale|Hugh della Valle]] davanti a loro, Jeyne scoppia in lacrime e la septa [[mordane|Mordane]] deve riaccompagnarla alla Fortezza Rossa.',
        en: 'Jeyne follows her father to King’s Landing, where [[eddard-stark|Eddard Stark]] is the new Hand of the King. At the tourney in his honour she sits with [[sansa-stark|Sansa]] and confesses that she would like to marry Lord Beric Dondarrion. When Ser [[gregor-clegane|Gregor Clegane]] kills Ser [[hugh-of-the-vale|Hugh of the Vale]] in front of them, Jeyne bursts into tears, and Septa [[mordane|Mordane]] has to take her back to the Red Keep.',
      },
    ),
    inBooks(
      [8, 52],
      { it: 'Portata via', en: 'Taken away' },
      {
        it: 'Quando i Lannister si abbattono sulla casa di [[eddard-stark|Eddard Stark]], suo padre [[vayon-poole|Vayon Poole]] viene ucciso. Jeyne, che ha visto morire gli uomini degli Stark, viene chiusa in una stanza della torre insieme a [[sansa-stark|Sansa]] e piange senza sosta. Quando Sansa lo dice alla regina [[cersei-lannister|Cersei]], il concilio decide cosa fare di lei, e [[petyr-baelish|Ditocorto]] la porta via, in un luogo che non viene detto.',
        en: 'When the Lannisters fall on [[eddard-stark|Eddard Stark]]’s household, her father [[vayon-poole|Vayon Poole]] is killed. Jeyne, who saw the Stark men die, is locked in a tower room with [[sansa-stark|Sansa]] and weeps without stopping. When Sansa tells Queen [[cersei-lannister|Cersei]] so, the council decides what to do with her, and [[petyr-baelish|Littlefinger]] takes her away to a place no one names.',
      },
    ),
  ],
  'vayon-poole': [
    inBooks(
      [8, 17],
      { it: 'L’intendente', en: 'The steward' },
      {
        it: 'Vayon Poole è l’intendente di [[eddard-stark|Eddard Stark]] e lo segue a sud quando Eddard diventa Primo Cavaliere del Re. Lungo la strada, dopo che [[jory-cassel|Jory Cassel]] ha ritrovato [[arya-stark|Arya]], scomparsa da giorni, è Vayon a portare la notizia a Eddard. Poi, per ordine di Eddard, conduce [[sansa-stark|Sansa]] davanti al re perché racconti cosa ha visto.',
        en: 'Vayon Poole is [[eddard-stark|Eddard Stark]]’s steward and follows him south when Eddard becomes Hand of the King. On the road, after [[jory-cassel|Jory Cassel]] finds [[arya-stark|Arya]], who has been missing for days, it is Vayon who brings Eddard the news. Then, on Eddard’s orders, he brings [[sansa-stark|Sansa]] before the king to tell what she saw.',
      },
    ),
    inBoth(
      [8, 52],
      { it: 'La casa del Primo Cavaliere', en: 'The Hand’s household' },
      {
        it: 'Vayon Poole è l’intendente di [[eddard-stark|Eddard Stark]] e lo ha seguito ad Approdo del Re. Dopo la morte di re Robert, Eddard viene arrestato come traditore e gli uomini dei Lannister si abbattono sulla sua casa nella Fortezza Rossa. Vayon viene ucciso insieme agli altri servitori e alle guardie degli Stark.',
        en: 'Vayon Poole is [[eddard-stark|Eddard Stark]]’s steward and followed him to King’s Landing. After King Robert’s death, Eddard is seized as a traitor and Lannister men fall on his household in the Red Keep. Vayon is killed along with the other Stark servants and guards.',
      },
    ),
  ],
  'tomard': [
    onScreen(
      [7, 23],
      { it: 'La lettera per Stannis', en: 'The letter for Stannis' },
      {
        it: 'Tomard è una delle guardie che hanno seguito [[eddard-stark|Eddard Stark]] ad Approdo del Re quando è diventato Primo Cavaliere del Re, e di solito lo scorta. È con lui quando [[renly-baratheon|Renly Baratheon]] porta la notizia che il re è stato ferito durante la caccia. Eddard gli affida una lettera da consegnare di persona a Stannis Baratheon, così Tomard non è con il Primo Cavaliere quando le cappe dorate uccidono i suoi uomini.',
        en: 'Tomard is one of the guards who followed [[eddard-stark|Eddard Stark]] to King’s Landing when he became Hand of the King, and he usually guards him. He is with Eddard when [[renly-baratheon|Renly Baratheon]] brings word that the king has been wounded on his hunt. Eddard gives him a letter to deliver to Stannis Baratheon by hand, so Tomard is not with the Hand when the gold cloaks kill his men.',
      },
    ),
    inBooks(
      [7, 23],
      { it: 'Grasso Tom', en: 'Fat Tom' },
      {
        it: 'Tomard, detto Grasso Tom, è una delle cinquanta guardie che [[eddard-stark|Eddard Stark]] ha portato con sé ad Approdo del Re. Durante una cena della casa nella Fortezza Rossa è di guardia alla Torre del Primo Cavaliere. Quando [[arya-stark|Arya]] scappa in camera dopo una lite con la septa [[mordane|Mordane]], gli scivola sotto le braccia. Poi Tom bussa alla sua porta, e Arya lo inganna dicendogli che non c’è.',
        en: 'Tomard, called Fat Tom, is one of the fifty guards [[eddard-stark|Eddard Stark]] brought with him to King’s Landing. During a household supper in the Red Keep he stands guard at the Tower of the Hand. When [[arya-stark|Arya]] runs back to her room after a quarrel with Septa [[mordane|Mordane]], she slips under his arms. Then Tom knocks at her door, and Arya fools him by telling him she is not there.',
      },
    ),
    inBooks(
      [7, 50],
      { it: 'Una lancia nella schiena', en: 'A spear in the back' },
      {
        it: 'Tom ha avuto da [[eddard-stark|Eddard Stark]] una lettera per Stannis Baratheon, da consegnare durante il viaggio per mare verso nord con le figlie del Primo Cavaliere. Dopo la morte di [[robert-baratheon|re Robert]] interrompe il concilio per annunciare che il nuovo re lo convoca nella sala del trono, ed Eddard gli fa radunare una scorta. Nella sala del trono, mentre Eddard dice di non volere spargimenti di sangue, una cappa dorata trafigge Tom alla schiena con una lancia. La lettera viene presa dal suo corpo.',
        en: 'Tom has a letter from [[eddard-stark|Eddard Stark]] for Stannis Baratheon, to deliver during the voyage north by sea with the Hand’s daughters. After [[robert-baratheon|King Robert]]’s death he interrupts the council to announce that the new king summons it to the throne room, and Eddard has him gather an escort. In the throne room, as Eddard says he wants no bloodshed, a gold cloak drives a spear through Tom’s back. The letter is taken from his body.',
      },
    ),
  ],
  'harwin': [
    inBooks(
      [1, 2],
      { it: 'Non si possono tenere', en: 'They cannot be kept' },
      {
        it: 'Harwin è una guardia di [[eddard-stark|Eddard Stark]] e il figlio di [[hullen|Hullen]], il mastro dei cavalli di Grande Inverno. Cavalca con Eddard all’esecuzione di un disertore dei Guardiani della notte. Sulla via del ritorno il gruppo trova una meta-lupa morta, uccisa da un cervo, con i suoi cuccioli. Quando [[robb-stark|Robb]] chiede al padre se possono portarli al castello, Harwin dice che è impossibile tenerli.',
        en: 'Harwin is one of [[eddard-stark|Eddard Stark]]’s guards and the son of [[hullen|Hullen]], the master of horse at Winterfell. He rides with Eddard to the execution of a deserter from the Night’s Watch. On the way back the party finds a dead direwolf, killed by a stag, with her pups. When [[robb-stark|Robb]] asks his father whether they can take them home, Harwin says that they cannot be kept.',
      },
    ),
    inBooks(
      [6, 44],
      { it: 'Con lord Beric', en: 'With Lord Beric' },
      {
        it: 'Harwin segue [[eddard-stark|Eddard Stark]] ad Approdo del Re. Quando dei contadini accusano ser Gregor Clegane di aver devastato i loro villaggi, Eddard, come Primo Cavaliere del Re, manda lord [[beric-dondarrion|Beric Dondarrion]] e Thoros di Myr con un gruppo di uomini a fare giustizia. Harwin parte con loro.',
        en: 'Harwin follows [[eddard-stark|Eddard Stark]] to King’s Landing. When peasants accuse Ser Gregor Clegane of ravaging their villages, Eddard, as Hand of the King, sends Lord [[beric-dondarrion|Beric Dondarrion]] and Thoros of Myr with a company of men to bring him to justice. Harwin rides with them.',
      },
    ),
  ],
  'alyn': [
    inBooks(
      [1, 13],
      { it: 'Il re vuole cavalcare', en: 'The king wants to ride' },
      {
        it: 'Alyn è una delle guardie che [[eddard-stark|Eddard Stark]] porta con sé verso sud quando diventa Primo Cavaliere del Re. Lungo la strada, una mattina, sveglia Eddard perché [[robert-baratheon|re Robert]] vuole cavalcare con lui. Durante la cavalcata Robert parla a Eddard di [[daenerys-targaryen|Daenerys Targaryen]], che ha sposato un khal dothraki.',
        en: 'Alyn is one of the guards [[eddard-stark|Eddard Stark]] takes south with him when he becomes Hand of the King. On the road one morning he wakes Eddard, because [[robert-baratheon|King Robert]] wants to ride with him. During the ride Robert talks to Eddard about [[daenerys-targaryen|Daenerys Targaryen]], who has married a Dothraki khal.',
      },
    ),
    inBooks(
      [5, 31],
      { it: 'Il torneo del Primo Cavaliere', en: 'The Hand’s tourney' },
      {
        it: 'Ad Approdo del Re Alyn è di guardia quando [[petyr-baelish|Ditocorto]] viene a trovare [[eddard-stark|Eddard Stark]]. Insieme a [[jory-cassel|Jory Cassel]] e ad [[harwin|Harwin]] rappresenta Grande Inverno al torneo del Primo Cavaliere, dove viene disarcionato da ser [[balon-swann|Balon Swann]]. Eddard lo manda a offrire un posto nella sua guardia ad Anguy, il vincitore della gara di tiro con l’arco, che rifiuta. Quella notte Alyn è di guardia sulle scale quando [[varys|Varys]] va da Eddard.',
        en: 'In King’s Landing Alyn is on guard when [[petyr-baelish|Littlefinger]] comes to see [[eddard-stark|Eddard Stark]]. With [[jory-cassel|Jory Cassel]] and [[harwin|Harwin]] he rides for Winterfell in the Hand’s tourney, where Ser [[balon-swann|Balon Swann]] unhorses him. Eddard sends him to offer Anguy, the winner of the archery, a place in his guard, and Anguy refuses. That night Alyn stands guard on the stairs when [[varys|Varys]] comes to Eddard.',
      },
    ),
    inBooks(
      [6, 44],
      { it: 'Venti uomini per lord Beric', en: 'Twenty men for Lord Beric' },
      {
        it: '[[jory-cassel|Jory Cassel]] è morto, e Alyn resta tra le guardie di [[eddard-stark|Eddard Stark]] ad Approdo del Re. Quando dei contadini accusano ser Gregor Clegane di aver devastato i loro villaggi, Eddard manda lord [[beric-dondarrion|Beric Dondarrion]] a capo di una compagnia per fare giustizia in nome del re. In quella compagnia Eddard manda anche venti dei suoi uomini, al comando di Alyn.',
        en: '[[jory-cassel|Jory Cassel]] is dead, and Alyn is still one of [[eddard-stark|Eddard Stark]]’s guards in King’s Landing. When peasants accuse Ser Gregor Clegane of ravaging their villages, Eddard sends Lord [[beric-dondarrion|Beric Dondarrion]] at the head of a company to deliver the king’s justice. With that company Eddard also sends twenty of his own men, under Alyn’s command.',
      },
    ),
  ],
  'hullen': [
    inBooks(
      [1, 2],
      { it: 'Il mastro dei cavalli', en: 'The master of horse' },
      {
        it: 'Hullen è il mastro dei cavalli di Grande Inverno e il padre di [[harwin|Harwin]], una delle guardie di [[eddard-stark|Eddard Stark]]. Cavalca con Eddard all’esecuzione di un disertore dei Guardiani della notte. Sulla via del ritorno è con il gruppo che trova una meta-lupa morta con i suoi cuccioli, e dice che è un brutto presagio.',
        en: 'Hullen is the master of horse at Winterfell and the father of [[harwin|Harwin]], one of [[eddard-stark|Eddard Stark]]’s guards. He rides with Eddard to the execution of a deserter from the Night’s Watch. On the way back he is with the party that finds a dead direwolf with her pups, and he says that it bodes ill.',
      },
    ),
    inBooks(
      [8, 51],
      { it: 'Nelle stalle', en: 'In the stables' },
      {
        it: 'Hullen ha seguito [[eddard-stark|Eddard Stark]] ad Approdo del Re. Quando gli uomini dei Lannister si abbattono sulla casa del Primo Cavaliere, viene ferito a morte nelle stalle. Lì lo trova [[arya-stark|Arya]], in fuga dalle guardie venute a prenderla, e Hullen le dice di andare ad avvertire suo padre. Poi muore.',
        en: 'Hullen followed [[eddard-stark|Eddard Stark]] to King’s Landing. When Lannister men fall on the Hand’s household, he is mortally wounded in the stables. There [[arya-stark|Arya]], running from the guards sent to take her, finds him, and Hullen tells her to go and warn her father. Then he dies.',
      },
    ),
  ],
  'lady-direwolf': [
    onScreen(
      [1, 16],
      { it: 'La cucciola di Sansa', en: 'Sansa’s pup' },
      {
        it: 'Lady è uno dei cuccioli che il gruppo di [[eddard-stark|Eddard Stark]] trova accanto alla madre morta sulla via del ritorno a Grande Inverno. [[jon-snow|Jon Snow]] convince Eddard che i cuccioli sono destinati ai suoi figli legittimi, perché il meta-lupo è l’emblema degli Stark. Una delle cucciole va a [[sansa-stark|Sansa]], che la chiama Lady.',
        en: 'Lady is one of the pups [[eddard-stark|Eddard Stark]]’s party finds beside their dead mother on the way back to Winterfell. [[jon-snow|Jon Snow]] persuades Eddard that the pups are meant for his trueborn children, since the direwolf is the sigil of the Starks. One of them goes to [[sansa-stark|Sansa]], who names her Lady.',
      },
    ),
    inBooks(
      [1, 16],
      { it: 'Lasciata indietro', en: 'Left behind' },
      {
        it: 'Lady è la meta-lupa di [[sansa-stark|Sansa]], che l’ha avuta dalla cucciolata trovata accanto alla madre morta e le ha dato il nome. Segue Sansa nel viaggio verso sud. La septa [[mordane|Mordane]] disapprova che Sansa le dia da mangiare sotto il tavolo, ma Sansa risponde che Lady non è un cane. Quando il principe [[joffrey-baratheon|Joffrey]] invita Sansa a cavalcare con lui, le chiede di lasciare indietro la meta-lupa, e Sansa accetta a malincuore.',
        en: 'Lady is [[sansa-stark|Sansa]]’s direwolf, taken from the litter found beside their dead mother and named by her. She follows Sansa on the journey south. Septa [[mordane|Mordane]] frowns on Sansa feeding her under the table, but Sansa answers that Lady is not a dog. When Prince [[joffrey-baratheon|Joffrey]] invites Sansa to ride with him, he asks her to leave the direwolf behind, and Sansa reluctantly agrees.',
      },
    ),
    inBoth(
      [2, 17],
      { it: 'Al posto di un’altra', en: 'In another’s place' },
      {
        it: 'Lungo la strada verso sud la meta-lupa di [[arya-stark|Arya]] morde il principe [[joffrey-baratheon|Joffrey]], che minacciava Arya, e poi sparisce. La regina [[cersei-lannister|Cersei]] pretende la morte di una meta-lupa e, non trovando quella di Arya, chiede che muoia Lady, che non c’entra niente. [[robert-baratheon|Re Robert]] acconsente. [[eddard-stark|Eddard Stark]] non lascia il compito a nessun altro e uccide Lady con le sue mani.',
        en: 'On the road south [[arya-stark|Arya]]’s direwolf bites Prince [[joffrey-baratheon|Joffrey]], who was threatening Arya, and then disappears. Queen [[cersei-lannister|Cersei]] demands a direwolf’s death and, unable to find Arya’s, asks that Lady die instead, though she had no part in it. [[robert-baratheon|King Robert]] agrees. [[eddard-stark|Eddard Stark]] leaves the task to no one else and kills Lady with his own hands.',
      },
    ),
  ],
  'nymeria': [
    inBooks(
      [2, 8],
      { it: 'Fuori dalla lezione', en: 'Outside the lesson' },
      {
        it: 'Nymeria è uno dei cuccioli trovati accanto alla madre morta sulla via del ritorno a Grande Inverno, e va ad [[arya-stark|Arya]], che le dà il nome. Non può entrare alla lezione di cucito della septa [[mordane|Mordane]], così aspetta fuori. Quando Arya scappa dalla lezione la ritrova, e insieme raggiungono [[jon-snow|Jon Snow]] e il suo cucciolo bianco per guardare i ragazzi che si allenano nel cortile.',
        en: 'Nymeria is one of the pups found beside their dead mother on the way back to Winterfell, and she goes to [[arya-stark|Arya]], who names her. She is not allowed at Septa [[mordane|Mordane]]’s needlework lesson, so she waits outside. When Arya runs off from the lesson she finds Nymeria again, and together they join [[jon-snow|Jon Snow]] and his white pup to watch the boys training in the yard.',
      },
    ),
    onScreen(
      [2, 8],
      { it: 'Il morso al principe', en: 'The bite' },
      {
        it: 'Lungo la strada verso sud il principe [[joffrey-baratheon|Joffrey]] ferisce in faccia Mycah, il figlio del macellaio, che si allenava con [[arya-stark|Arya]]. Arya colpisce Joffrey, e quando lui la minaccia con la spada Nymeria gli morde il braccio. Sapendo che la meta-lupa verrà punita, Arya la costringe a fuggire tirandole un sasso. La regina pretende la morte di una meta-lupa, e Nymeria non si trova.',
        en: 'On the road south Prince [[joffrey-baratheon|Joffrey]] cuts the face of Mycah, the butcher’s boy, who was practising with [[arya-stark|Arya]]. Arya strikes Joffrey, and when he threatens her with his sword Nymeria bites his arm. Knowing the direwolf will be punished, Arya makes her flee by throwing a rock at her. The queen demands a direwolf’s death, and Nymeria cannot be found.',
      },
    ),
    inBooks(
      [2, 17],
      { it: 'Scacciata a sassate', en: 'Driven off with stones' },
      {
        it: 'Lungo la strada verso sud il principe [[joffrey-baratheon|Joffrey]] minaccia con la spada [[mycah|Mycah]], il figlio del macellaio, e [[arya-stark|Arya]] lo colpisce con la sua spada di legno. Quando Joffrey avanza contro Arya, Nymeria gli ferisce la mano della spada. Arya scaccia Nymeria a sassate perché la regina non possa farla uccidere. Quando la regina pretende la morte della meta-lupa, Nymeria è lontana, e al suo posto muore Lady.',
        en: 'On the road south Prince [[joffrey-baratheon|Joffrey]] threatens [[mycah|Mycah]], the butcher’s boy, with his sword, and [[arya-stark|Arya]] strikes the prince with her wooden sword. When Joffrey advances on Arya, Nymeria wounds his sword hand. Arya drives Nymeria away with stones so that the queen cannot have her killed. When the queen demands the direwolf’s death, Nymeria is far away, and Lady dies in her place.',
      },
    ),
  ],
  'bran-stark': [
    onScreen(
      [1, 2],
      { it: 'La torre in rovina', en: 'The broken tower' },
      {
        it: 'Bran si esercita con l’arco nel cortile di Grande Inverno sotto gli occhi della famiglia. Poi il padre [[eddard-stark|Eddard]] lo porta con [[robb-stark|Robb]], [[jon-snow|Jon]] e [[theon-greyjoy|Theon]] a vedere l’esecuzione di un disertore dei Guardiani della notte. Bran guarda senza distogliere lo sguardo, e il padre gli spiega che chi pronuncia la condanna deve calare la spada. Sulla via del ritorno trovano una meta-lupa morta e i suoi cuccioli, e Bran ne tiene uno. Più tardi, arrampicandosi su una torre in rovina, vede la regina con suo fratello Jaime Lannister. Jaime lo afferra, gli chiede quanti anni ha e lo spinge giù dalla finestra.',
        en: 'Bran practises archery in the yard of Winterfell while his family watches. Then his father [[eddard-stark|Eddard]] takes him, with [[robb-stark|Robb]], [[jon-snow|Jon]] and [[theon-greyjoy|Theon]], to see a deserter of the Night’s Watch executed. Bran watches without looking away, and his father explains that the man who passes the sentence should swing the sword. On the way home they find a dead direwolf and her pups, and Bran keeps one. Later, climbing a broken tower, he sees the queen with her brother Jaime Lannister. Jaime grabs him, asks how old he is and pushes him out of the window.',
      },
    ),
    inBooks(
      [1, 2],
      { it: 'La giustizia del lord', en: 'A lord’s justice' },
      {
        it: 'Per la prima volta il padre, lord [[eddard-stark|Eddard]], porta Bran ad assistere a un’esecuzione: quella di un disertore dei Guardiani della notte. [[theon-greyjoy|Theon]] porta a Eddard la spada, e [[jon-snow|Jon]] dice a Bran di non distogliere lo sguardo. Bran guarda il padre tagliare la testa all’uomo con un solo colpo. Sulla via del ritorno Eddard gli spiega che chi pronuncia la condanna deve eseguirla di persona. Poi [[robb-stark|Robb]] e Jon trovano una meta-lupa morta con un pezzo di corno di cervo in gola, e i suoi cuccioli. Quando Theon propone di ucciderli, Bran protesta. Eddard lascia ai figli i cuccioli, purché li allevino da soli.',
        en: 'For the first time his father, Lord [[eddard-stark|Eddard]], takes Bran to see a man executed: a deserter of the Night’s Watch. [[theon-greyjoy|Theon]] brings Eddard his sword, and [[jon-snow|Jon]] tells Bran not to look away. Bran watches his father take the man’s head with a single stroke. On the ride home Eddard explains that the man who passes the sentence must carry it out himself. Then [[robb-stark|Robb]] and Jon find a dead direwolf with a piece of antler in her throat, and her pups. When Theon offers to kill them, Bran protests. Eddard lets his children keep the pups, as long as they raise them themselves.',
      },
    ),
    inBooks(
      [1, 9],
      { it: 'Nella torre in rovina', en: 'In the broken tower' },
      {
        it: 'Bran dovrebbe partire verso sud con il padre [[eddard-stark|Eddard]], che [[robert-baratheon|re Robert]] ha scelto come Primo Cavaliere. Prima della partenza prova a salutare tutti, poi va ad arrampicarsi, come fa sempre. Vicino alla torre in rovina sente due voci che parlano del re e della sua scelta. Si avvicina, si aggrappa a un gargoyle e guarda dalla finestra: vede la regina [[cersei-lannister|Cersei]] nuda con un uomo, suo fratello [[jaime-lannister|Jaime]]. Bran scivola, e Jaime lo afferra e lo tira dentro. Gli chiede quanti anni ha, poi lo getta dalla finestra.',
        en: 'Bran is to go south with his father [[eddard-stark|Eddard]], whom [[robert-baratheon|King Robert]] has chosen as his Hand. Before leaving, he tries to say goodbye to everyone, then goes climbing, as he always does. Near the broken tower he hears two voices talking about the king and his choice. He creeps closer, hangs from a gargoyle and looks through the window: he sees Queen [[cersei-lannister|Cersei]] naked with a man, her brother [[jaime-lannister|Jaime]]. Bran slips, and Jaime catches him and pulls him in. He asks how old Bran is, then throws him out of the window.',
      },
    ),
    inBoth(
      [2, 15],
      { it: 'L’uomo con il pugnale', en: 'The man with the dagger' },
      {
        it: 'Dopo la caduta Bran giace privo di sensi, e la madre [[catelyn-stark|Catelyn]] non si allontana mai dal suo letto. Il padre [[eddard-stark|Eddard]] è partito per il sud, e del castello si occupano il fratello [[robb-stark|Robb]] e il maestro [[luwin|Luwin]]. Poi nel castello scoppia un incendio. Mentre tutti accorrono, nella stanza di Bran entra un uomo armato di pugnale, venuto a ucciderlo. Catelyn lo affronta a mani nude e lo tiene a bada finché il meta-lupo di Bran non entra e gli squarcia la gola.',
        en: 'After his fall Bran lies senseless, and his mother [[catelyn-stark|Catelyn]] never leaves his bed. His father [[eddard-stark|Eddard]] has gone south, and his brother [[robb-stark|Robb]] and Maester [[luwin|Luwin]] see to the castle. Then a fire breaks out in the castle. While everyone runs to it, a man with a dagger comes into Bran’s room to kill him. Catelyn fights him with her bare hands and holds him off until Bran’s direwolf comes in and tears out his throat.',
      },
    ),
    inBooks(
      [2, 18],
      { it: 'Il corvo', en: 'The crow' },
      {
        it: 'Privo di sensi, Bran sogna di cadere. Un corvo gli dice che deve volare, altrimenti morirà. Dall’alto Bran vede il regno: Grande Inverno, la madre [[catelyn-stark|Catelyn]] in mare verso una tempesta, il padre [[eddard-stark|Eddard]] che discute con il re, le sorelle [[sansa-stark|Sansa]] e [[arya-stark|Arya]], [[jon-snow|Jon]] alla Barriera e, oltre, qualcosa che lo spaventa. Sotto di lui compaiono punte di ghiaccio. All’ultimo istante Bran vola, e il corvo lo becca in mezzo alla fronte. Bran si sveglia con il suo meta-lupo sul letto, e quando [[robb-stark|Robb]] accorre gli dice che lo ha chiamato Summer.',
        en: 'Senseless, Bran dreams that he is falling. A crow tells him that he must fly, or he will die. From above Bran sees the realm: Winterfell, his mother [[catelyn-stark|Catelyn]] at sea heading into a storm, his father [[eddard-stark|Eddard]] arguing with the king, his sisters [[sansa-stark|Sansa]] and [[arya-stark|Arya]], [[jon-snow|Jon]] at the Wall and, beyond it, something that frightens him. Spikes of ice rise beneath him. At the last moment Bran flies, and the crow pecks him in the middle of his forehead. He wakes with his direwolf on the bed, and when [[robb-stark|Robb]] rushes in, Bran tells him he has named the wolf Summer.',
      },
    ),
    onScreen(
      [3, 18],
      { it: 'Non camminerà più', en: 'He will not walk again' },
      {
        it: 'Bran si è svegliato, ma non ricorda la caduta. Le ferite lo costringono a letto, ed è difficile che torni a camminare. Per passare il tempo la [[old-nan|Vecchia Nan]] gli racconta le sue storie. Bran non vuole quelle sui cavalieri, e lei gli parla della Lunga Notte, un inverno durato una generazione, e degli Estranei che scesero verso sud. Quando il fratello [[robb-stark|Robb]] va a trovarlo, Bran gli chiede se è vero che non camminerà mai più. Robb, a malincuore, risponde di sì. Bran dice che preferirebbe essere morto.',
        en: 'Bran has woken, but he has no memory of his fall. His injuries keep him in bed, and he is unlikely to walk again. To pass the time [[old-nan|Old Nan]] tells him her stories. Bran does not want the ones about knights, so she tells him of the Long Night, a winter that lasted a generation, and of the White Walkers who came south. When his brother [[robb-stark|Robb]] visits, Bran asks whether it is true that he will never walk again. Robb reluctantly says it is. Bran says he would rather be dead.',
      },
    ),
    inBoth(
      [4, 25],
      { it: 'La sella di Tyrion', en: 'Tyrion’s saddle' },
      {
        it: 'Bran non può camminare, e [[hodor|Hodor]], un servitore enorme che sa dire soltanto il proprio nome, lo porta in braccio fino alla sala grande. Lì il fratello [[robb-stark|Robb]] riceve con freddezza [[tyrion-lannister|Tyrion Lannister]], di ritorno dalla Barriera. Tyrion ha portato il disegno di una sella con cui Bran potrà andare a cavallo anche senza l’uso delle gambe. Dopo questo gesto Robb gli offre l’ospitalità di Grande Inverno, ma Tyrion la rifiuta.',
        en: 'Bran cannot walk, and [[hodor|Hodor]], a huge servant who can say only his own name, carries him down to the great hall. There his brother [[robb-stark|Robb]] is giving a cold welcome to [[tyrion-lannister|Tyrion Lannister]], on his way back from the Wall. Tyrion has brought the design for a saddle that will let Bran ride even without the use of his legs. After this, Robb offers him the hospitality of Winterfell, but Tyrion refuses it.',
      },
    ),
    inBoth(
      [6, 38],
      { it: 'I fuorilegge nella foresta', en: 'Outlaws in the woods' },
      {
        it: 'Con la sella disegnata da Tyrion, Bran esce a cavallo con il fratello [[robb-stark|Robb]] e con [[theon-greyjoy|Theon]], e si ritrova da solo nella Foresta del Lupo. Lo circonda una banda di fuorilegge che vuole derubarlo. Robb arriva e la attacca, ma uno degli uomini tiene un coltello alla gola di Bran. Theon lo uccide con una freccia, e Robb è furioso. L’unica sopravvissuta, [[osha|Osha]], si arrende, e Robb la porta a Grande Inverno come prigioniera.',
        en: 'With the saddle Tyrion designed, Bran rides out with his brother [[robb-stark|Robb]] and [[theon-greyjoy|Theon]], and ends up alone in the wolfswood. A band of outlaws surrounds him, meaning to rob him. Robb comes and attacks them, but one of the men holds a knife to Bran’s throat. Theon kills him with an arrow, and Robb is furious. The only survivor, [[osha|Osha]], yields, and Robb takes her back to Winterfell as a prisoner.',
      },
    ),
    inBoth(
      [8, 54],
      { it: 'Il fratello va in guerra', en: 'His brother goes to war' },
      {
        it: 'Il padre [[eddard-stark|Eddard]] è stato arrestato nella capitale, e il fratello [[robb-stark|Robb]] chiama alle armi i vassalli del Nord, che si radunano a Grande Inverno. Quando [[greatjon-umber|Greatjon Umber]] sguaina la spada contro Robb, [[grey-wind|Vento Grigio]] gli stacca due dita con un morso. Robb parte verso sud e saluta Bran, che resta al castello con il piccolo [[rickon-stark|Rickon]]. In quei giorni, nel parco degli dei, la prigioniera [[osha|Osha]] dice a Bran che oltre la Barriera ci sono i giganti e cose peggiori, e che Robb sta portando l’esercito nella direzione sbagliata: dovrebbe marciare a nord, non a sud.',
        en: 'His father [[eddard-stark|Eddard]] has been seized in the capital, and his brother [[robb-stark|Robb]] calls the lords of the North to arms; they gather at Winterfell. When [[greatjon-umber|Greatjon Umber]] draws steel on Robb, [[grey-wind|Grey Wind]] bites off two of his fingers. Robb marches south and says goodbye to Bran, who stays at the castle with little [[rickon-stark|Rickon]]. In those days, in the godswood, the captive [[osha|Osha]] tells Bran that beyond the Wall there are giants and worse, and that Robb is marching his army the wrong way: he should go north, not south.',
      },
    ),
    onScreen(
      [10, 67],
      { it: 'Il sogno delle cripte', en: 'The dream of the crypts' },
      {
        it: 'Bran sogna di nuovo il corvo con tre occhi, che vola giù nelle cripte sotto il castello, e si convince che il padre [[eddard-stark|Eddard]] sia lì. [[osha|Osha]] lo porta nelle cripte, e Bran le racconta la storia degli antenati sepolti. Dalla tomba vuota preparata per Eddard balza fuori [[shaggydog|Cagnaccio]], il meta-lupo del fratello [[rickon-stark|Rickon]]. Rickon ha fatto lo stesso sogno. Quando escono, il maestro [[luwin|Luwin]] li aspetta con una lettera in mano, e dal suo sguardo capiscono che Eddard è morto.',
        en: 'Bran dreams again of the three-eyed raven, which flies down into the crypts beneath the castle, and he becomes sure that his father [[eddard-stark|Eddard]] is there. [[osha|Osha]] takes him down into the crypts, and Bran tells her the story of the ancestors buried there. Out of the empty tomb made ready for Eddard leaps [[shaggydog|Shaggydog]], the direwolf of his brother [[rickon-stark|Rickon]]. Rickon has had the same dream. When they come out, Maester [[luwin|Luwin]] is waiting with a letter in his hand, and his face tells them that Eddard is dead.',
      },
    ),
    inBooks(
      [10, 67],
      { it: 'Il padre nelle cripte', en: 'His father in the crypts' },
      {
        it: 'Bran sogna che il corvo con tre occhi lo porta nelle cripte, dove c’è il padre [[eddard-stark|Eddard]]. Il maestro [[luwin|Luwin]] decide di mostrargli che lì non c’è nessuno, e [[osha|Osha]] porta Bran in braccio. Davanti alla tomba preparata per Eddard, [[shaggydog|Cagnaccio]] balza fuori e azzanna il braccio di Luwin, finché [[summer-direwolf|Estate]] non lo allontana. Il fratello [[rickon-stark|Rickon]] è lì: ha fatto lo stesso sogno. Nella torre del maestro, Luwin parla ai ragazzi dei Figli della Foresta. Poi arriva un corvo, e Luwin legge la notizia della morte di Eddard.',
        en: 'Bran dreams that the three-eyed crow takes him down into the crypts, where his father [[eddard-stark|Eddard]] is. Maester [[luwin|Luwin]] means to show him that no one is there, and [[osha|Osha]] carries Bran in her arms. At the tomb made ready for Eddard, [[shaggydog|Shaggydog]] springs out and savages Luwin’s arm, until [[summer-direwolf|Summer]] knocks him away. Bran’s brother [[rickon-stark|Rickon]] is there: he has had the same dream. In the maester’s turret, Luwin tells the boys about the children of the forest. Then a raven arrives, and Luwin reads the news of Eddard’s death.',
      },
    ),
  ],
  'rickon-stark': [
    inBoth(
      [1, 5],
      { it: 'Il più piccolo', en: 'The youngest' },
      {
        it: 'Rickon è il figlio più piccolo di [[eddard-stark|Eddard]] e [[catelyn-stark|Catelyn Stark]]. Quando [[robert-baratheon|re Robert]] arriva a Grande Inverno con la sua corte, Rickon lo accoglie nel cortile insieme al resto della famiglia. Il re è venuto a chiedere a Eddard di diventare il suo Primo Cavaliere, e propone di dare in sposa la sorella di Rickon, [[sansa-stark|Sansa]], al principe [[joffrey-baratheon|Joffrey]].',
        en: 'Rickon is the youngest child of [[eddard-stark|Eddard]] and [[catelyn-stark|Catelyn Stark]]. When [[robert-baratheon|King Robert]] comes to Winterfell with his court, Rickon greets him in the yard with the rest of the family. The king has come to ask Eddard to be his Hand, and he proposes to marry Rickon’s sister [[sansa-stark|Sansa]] to Prince [[joffrey-baratheon|Joffrey]].',
      },
    ),
    inBoth(
      [8, 54],
      { it: 'Nessuno torna', en: 'No one comes back' },
      {
        it: 'Il padre [[eddard-stark|Eddard]] è stato arrestato nella capitale, la madre [[catelyn-stark|Catelyn]] è lontana, e il fratello maggiore [[robb-stark|Robb]] parte per la guerra alla testa dei vassalli del Nord. Rickon non lo saluta. È convinto che chi parte non torni più. I lord che si erano radunati a Grande Inverno se ne vanno con Robb, e Rickon resta al castello con il fratello [[bran-stark|Bran]].',
        en: 'His father [[eddard-stark|Eddard]] has been seized in the capital, his mother [[catelyn-stark|Catelyn]] is far away, and his eldest brother [[robb-stark|Robb]] rides to war at the head of the northern lords. Rickon does not say goodbye to him. He is sure that those who leave never come back. The lords who gathered at Winterfell march away with Robb, and Rickon stays at the castle with his brother [[bran-stark|Bran]].',
      },
    ),
    onScreen(
      [10, 67],
      { it: 'Lo stesso sogno', en: 'The same dream' },
      {
        it: 'Rickon sogna il padre [[eddard-stark|Eddard]] nelle cripte sotto Grande Inverno e ci scende con il suo meta-lupo, [[shaggydog|Cagnaccio]], per cercarlo. Quando arrivano il fratello [[bran-stark|Bran]] e [[osha|Osha]], Cagnaccio balza loro addosso dal buio, e Rickon lo richiama. Anche Bran ha fatto lo stesso sogno. Fuori dalle cripte il maestro [[luwin|Luwin]] li aspetta con la notizia che il loro padre è morto.',
        en: 'Rickon dreams of his father [[eddard-stark|Eddard]] in the crypts beneath Winterfell, and goes down there with his direwolf, [[shaggydog|Shaggydog]], to look for him. When his brother [[bran-stark|Bran]] and [[osha|Osha]] arrive, Shaggydog leaps at them out of the dark, and Rickon calls him off. Bran has had the same dream. Outside the crypts Maester [[luwin|Luwin]] is waiting with the news that their father is dead.',
      },
    ),
    inBooks(
      [10, 67],
      { it: 'Il padre sta tornando', en: 'Father is coming home' },
      {
        it: 'Rickon sogna il padre [[eddard-stark|Eddard]] nelle cripte e ci scende con [[shaggydog|Cagnaccio]]. Quando il maestro [[luwin|Luwin]] porta lì il fratello [[bran-stark|Bran]], Cagnaccio azzanna il braccio del maestro. Rickon esce dalla tomba preparata per Eddard e dice a Luwin di lasciare stare suo padre: lo ha visto la notte prima, e sta tornando a casa. Rickon non vuole che Cagnaccio stia alla catena. Segue gli altri nella torre del maestro, dove un corvo porta la notizia della morte di Eddard.',
        en: 'Rickon dreams of his father [[eddard-stark|Eddard]] in the crypts and goes down there with [[shaggydog|Shaggydog]]. When Maester [[luwin|Luwin]] brings his brother [[bran-stark|Bran]] there, Shaggydog savages the maester’s arm. Rickon comes out of the tomb made ready for Eddard and tells Luwin to leave his father alone: he saw him last night, and he is coming home. Rickon does not want Shaggydog chained. He follows the others to the maester’s turret, where a raven brings the news of Eddard’s death.',
      },
    ),
  ],
  'theon-greyjoy': [
    inBoth(
      [1, 2],
      { it: 'Il pupillo', en: 'The ward' },
      {
        it: 'Theon è il pupillo di lord [[eddard-stark|Eddard Stark]] ed è cresciuto a Grande Inverno con i suoi figli. Cavalca con loro all’esecuzione di un disertore dei Guardiani della notte, che Eddard decapita di persona. Sulla via del ritorno il gruppo trova una meta-lupa morta e i suoi cuccioli, e Eddard li lascia ai figli. Quando [[jon-snow|Jon]] trova un sesto cucciolo, bianco, Theon lo liquida con disprezzo.',
        en: 'Theon is the ward of Lord [[eddard-stark|Eddard Stark]] and has grown up at Winterfell with his sons. He rides with them to the execution of a deserter of the Night’s Watch, whom Eddard beheads himself. On the way back the party finds a dead direwolf and her pups, and Eddard lets his children keep them. When [[jon-snow|Jon]] finds a sixth pup, a white one, Theon is scornful of it.',
      },
    ),
    onScreen(
      [4, 25],
      { it: 'Il lacchè degli Stark', en: 'The Starks’ lackey' },
      {
        it: 'Theon fa chiamare [[hodor|Hodor]] perché porti [[bran-stark|Bran]] nella sala dove [[robb-stark|Robb]] riceve [[tyrion-lannister|Tyrion Lannister]]. Quando Tyrion se ne va per passare la notte al bordello, Theon gli consiglia con sufficienza una delle ragazze. Tyrion gli ricorda la stupida ribellione di suo padre, Balon Greyjoy, e si chiede come si sentirebbe lord Balon a vedere il suo ultimo figlio ridotto a fare da lacchè a chi lo tiene prigioniero. Theon si infuria.',
        en: 'Theon has [[hodor|Hodor]] fetched to carry [[bran-stark|Bran]] to the hall where [[robb-stark|Robb]] is receiving [[tyrion-lannister|Tyrion Lannister]]. When Tyrion leaves to spend the night at the brothel, Theon condescendingly recommends one of the girls. Tyrion reminds him of his father Balon Greyjoy’s stupid rebellion, and wonders how Lord Balon would feel to see his last son reduced to a lackey for the people who hold him. Theon is furious.',
      },
    ),
    inBoth(
      [6, 38],
      { it: 'La freccia', en: 'The arrow' },
      {
        it: 'Theon esce a cavallo con [[robb-stark|Robb]] e [[bran-stark|Bran]], che esce a cavallo con la sua nuova sella. Nella Foresta del Lupo una banda di fuorilegge circonda Bran. Robb li attacca, ma uno degli uomini tiene un coltello alla gola del ragazzo. Theon lo uccide con una freccia, e Robb è furioso. La sola superstite, [[osha|Osha]], si arrende e viene portata a Grande Inverno.',
        en: 'Theon rides out with [[robb-stark|Robb]] and [[bran-stark|Bran]], who is riding out on his new saddle. In the wolfswood a band of outlaws surrounds Bran. Robb attacks them, but one of the men holds a knife to the boy’s throat. Theon kills him with an arrow, and Robb is furious. The only survivor, [[osha|Osha]], yields and is taken back to Winterfell.',
      },
    ),
    onScreen(
      [10, 72],
      { it: 'La spada per il re', en: 'His sword for the king' },
      {
        it: 'Theon marcia verso sud con [[robb-stark|Robb]]. Alle Torri Gemelle abbatte con le frecce i corvi che lasciano il castello, e poi combatte al fianco di Robb nella battaglia in cui viene catturato Jaime Lannister. Vorrebbe mandare la testa di Jaime al padre di lui, lord Tywin, ma Robb si rifiuta. Quando arriva la notizia della morte di Eddard, [[greatjon-umber|Greatjon Umber]] e gli altri lord proclamano Robb Re del Nord. Theon chiede a Robb se sono fratelli, ora e per sempre. Robb risponde di sì, e Theon gli giura la sua spada.',
        en: 'Theon marches south with [[robb-stark|Robb]]. At the Twins he shoots down the ravens leaving the castle, and then he fights beside Robb in the battle where Jaime Lannister is taken. He wants Jaime’s head sent to Jaime’s father, Lord Tywin, but Robb refuses. When the news of Eddard’s death comes, [[greatjon-umber|Greatjon Umber]] and the other lords proclaim Robb King in the North. Theon asks Robb whether they are brothers, now and always. Robb says yes, and Theon swears his sword to him.',
      },
    ),
  ],
  'luwin': [
    inBoth(
      [1, 7],
      { it: 'La lettera segreta', en: 'The secret letter' },
      {
        it: 'Luwin è il maestro di Grande Inverno. Durante la visita del re porta a lord [[eddard-stark|Eddard]] e a [[catelyn-stark|Catelyn]] una lettera arrivata in segreto. La scrive la sorella di Catelyn, vedova del Primo Cavaliere Jon Arryn: sostiene che il marito sia stato assassinato dai Lannister. Eddard vorrebbe restare nel Nord, ma Luwin lo convince ad accettare l’offerta del re e a diventare Primo Cavaliere.',
        en: 'Luwin is the maester of Winterfell. During the king’s visit he brings Lord [[eddard-stark|Eddard]] and [[catelyn-stark|Catelyn]] a letter that came in secret. It is from Catelyn’s sister, the widow of the Hand, Jon Arryn: she claims that her husband was murdered by the Lannisters. Eddard would rather stay in the North, but Luwin persuades him to accept the king’s offer and become his Hand.',
      },
    ),
    inBoth(
      [2, 15],
      { it: 'I conti del castello', en: 'The castle’s accounts' },
      {
        it: 'Lord [[eddard-stark|Eddard]] è partito per il sud con molti dei suoi uomini, e [[bran-stark|Bran]] giace privo di sensi dopo la caduta. Luwin va da [[catelyn-stark|Catelyn]] per parlare dei conti e di chi deve prendere il posto degli uomini partiti. Catelyn, che non lascia il letto del figlio, si rifiuta di occuparsene. Se ne fa carico [[robb-stark|Robb]], che lavorerà con Luwin. Poco dopo nel castello scoppia un incendio, e un uomo cerca di uccidere Bran.',
        en: 'Lord [[eddard-stark|Eddard]] has gone south with many of his men, and [[bran-stark|Bran]] lies senseless after his fall. Luwin goes to [[catelyn-stark|Catelyn]] to talk about the accounts and about who should fill the places of the men who left. Catelyn, who will not leave her son’s bed, refuses to deal with it. [[robb-stark|Robb]] takes it on and will work with Luwin. Soon after, a fire breaks out in the castle, and a man tries to kill Bran.',
      },
    ),
    onScreen(
      [10, 67],
      { it: 'La lettera dalla capitale', en: 'The letter from the capital' },
      {
        it: '[[robb-stark|Robb]] è partito per la guerra e ha lasciato Luwin a occuparsi di [[bran-stark|Bran]]. Bran sogna che il padre [[eddard-stark|Eddard]] sia nelle cripte e ci scende con [[osha|Osha]], dove trova il fratello [[rickon-stark|Rickon]], che ha fatto lo stesso sogno. Quando i ragazzi escono, Luwin li aspetta con una lettera in mano. Dal suo sguardo capiscono che Eddard è morto, e Luwin dà loro la notizia.',
        en: '[[robb-stark|Robb]] has gone to war and left Luwin to look after [[bran-stark|Bran]]. Bran dreams that his father [[eddard-stark|Eddard]] is in the crypts and goes down there with [[osha|Osha]], where he finds his brother [[rickon-stark|Rickon]], who has had the same dream. When the boys come out, Luwin is waiting with a letter in his hand. His face tells them that Eddard is dead, and Luwin gives them the news.',
      },
    ),
    inBooks(
      [10, 67],
      { it: 'I sogni sono soltanto sogni', en: 'Dreams are only dreams' },
      {
        it: '[[bran-stark|Bran]] sogna il padre [[eddard-stark|Eddard]] nelle cripte. Per mostrargli che lì non c’è, Luwin ci scende con lui e con [[osha|Osha]], che lo porta in braccio. Quando Luwin infila il braccio nella tomba preparata per Eddard, ne balza fuori [[shaggydog|Cagnaccio]] e glielo azzanna. Anche [[rickon-stark|Rickon]] ha fatto lo stesso sogno. Nella sua torre Luwin, bendato da Osha, spiega che i sogni sono soltanto sogni e racconta dei Figli della Foresta. Poi arriva un corvo. Luwin legge la lettera in lacrime: Eddard è morto.',
        en: '[[bran-stark|Bran]] dreams of his father [[eddard-stark|Eddard]] in the crypts. To show him that Eddard is not there, Luwin goes down with him and with [[osha|Osha]], who carries Bran. When Luwin puts his arm into the tomb made ready for Eddard, [[shaggydog|Shaggydog]] springs out and savages it. [[rickon-stark|Rickon]] has had the same dream. In his turret Luwin, bandaged by Osha, explains that dreams are only dreams and tells of the children of the forest. Then a raven arrives. Luwin reads the letter in tears: Eddard is dead.',
      },
    ),
  ],
  'old-nan': [
    onScreen(
      [3, 15],
      { it: 'La Lunga Notte', en: 'The Long Night' },
      {
        it: 'La Vecchia Nan è un’anziana serva di Grande Inverno. Dopo la partenza di [[catelyn-stark|Catelyn]] veglia accanto al letto di [[bran-stark|Bran]], che non può più camminare. Gli propone una storia di cavalieri, ma Bran le dice che odia le sue storie e preferisce quelle che fanno paura. Lei gli racconta allora della Lunga Notte, un inverno durato una generazione, quando gli Estranei scesero verso sud per la prima volta.',
        en: 'Old Nan is an elderly servant at Winterfell. After [[catelyn-stark|Catelyn]] leaves, she sits by the bed of [[bran-stark|Bran]], who can no longer walk. She offers him a story about knights, but Bran tells her he hates her stories and prefers the frightening ones. So she tells him of the Long Night, a winter that lasted a generation, when the White Walkers came south for the first time.',
      },
    ),
    inBooks(
      [3, 15],
      { it: 'Il sangue lavato', en: 'Washing away the blood' },
      {
        it: 'La Vecchia Nan è la donna più anziana di Grande Inverno, e da sempre racconta storie ai figli degli Stark. Quando un uomo entra nella stanza di [[bran-stark|Bran]] per ucciderlo, la madre del ragazzo, [[catelyn-stark|Catelyn]], lo affronta a mani nude finché il meta-lupo di Bran non lo sbrana. Ferita, Catelyn viene portata via e curata, e la Vecchia Nan la aiuta a lavarsi via il sangue.',
        en: 'Old Nan is the oldest woman at Winterfell, and she has always told stories to the Stark children. When a man comes into [[bran-stark|Bran]]’s room to kill him, the boy’s mother, [[catelyn-stark|Catelyn]], fights him with her bare hands until Bran’s direwolf kills him. Wounded, Catelyn is taken away to be tended, and Old Nan helps her wash away the blood.',
      },
    ),
    inBooks(
      [4, 25],
      { it: 'Le storie possono aspettare', en: 'Stories can wait' },
      {
        it: 'La Vecchia Nan siede accanto a [[bran-stark|Bran]], che non può più camminare, mentre nel cortile il fratellino [[rickon-stark|Rickon]] gioca con i meta-lupi. Bran le dice che odia le sue storie, finché lei non comincia quella degli Estranei, della Lunga Notte e dell’Ultimo Eroe. Entra maestro [[luwin|Luwin]] con [[hodor|Hodor]]: un ospite vuole Bran nella sala grande. Bran preferirebbe sentire la fine, ma la Vecchia Nan gli dice che le storie possono aspettare, gli ospiti di rado.',
        en: 'Old Nan sits with [[bran-stark|Bran]], who can no longer walk, while his little brother [[rickon-stark|Rickon]] plays with the direwolves in the yard. Bran tells her he hates her stories, until she begins the one about the Others, the Long Night and the Last Hero. Maester [[luwin|Luwin]] comes in with [[hodor|Hodor]]: a visitor wants Bran in the great hall. Bran would rather hear the end, but Old Nan tells him that stories can wait, while visitors rarely do.',
      },
    ),
  ],
  'hodor': [
    inBoth(
      [4, 25],
      { it: 'Bran in braccio', en: 'Carrying Bran' },
      {
        it: 'Hodor è un servitore di Grande Inverno, enorme e semplice, che sa dire una sola parola: “Hodor”. Ora che [[bran-stark|Bran]] non può più camminare, è Hodor a portarlo in braccio. Lo porta giù nella sala grande, dove il fratello di Bran, [[robb-stark|Robb]], riceve [[tyrion-lannister|Tyrion Lannister]] di ritorno dalla Barriera. Tyrion ha portato il disegno di una sella con cui Bran potrà tornare a cavallo.',
        en: 'Hodor is a servant at Winterfell, huge and simple, who can say only one word: “Hodor”. Now that [[bran-stark|Bran]] can no longer walk, it is Hodor who carries him. He carries him down to the great hall, where Bran’s brother [[robb-stark|Robb]] is receiving [[tyrion-lannister|Tyrion Lannister]] on his way back from the Wall. Tyrion has brought the design for a saddle that will let Bran ride again.',
      },
    ),
  ],
  'osha': [
    inBoth(
      [6, 38],
      { it: 'La resa', en: 'The surrender' },
      {
        it: 'Osha è una donna dei Bruti. Con una banda di fuorilegge sorprende nella Foresta del Lupo [[bran-stark|Bran]], che cavalca da solo, e cercano di derubarlo. Il fratello di Bran, [[robb-stark|Robb]], li attacca, e [[theon-greyjoy|Theon]] uccide con una freccia l’uomo che tiene un coltello alla gola del ragazzo. Rimasta sola, Osha si arrende. Robb la porta a Grande Inverno come prigioniera.',
        en: 'Osha is a wildling woman. With a band of outlaws she waylays [[bran-stark|Bran]] in the wolfswood while he is riding alone, and they try to rob him. Bran’s brother [[robb-stark|Robb]] attacks them, and [[theon-greyjoy|Theon]] kills with an arrow the man holding a knife to the boy’s throat. Left alone, Osha yields. Robb takes her back to Winterfell as a prisoner.',
      },
    ),
    onScreen(
      [7, 38],
      { it: 'Le cose sotto il ghiaccio', en: 'What sleeps under the ice' },
      {
        it: 'Osha ora lavora come serva a Grande Inverno. [[theon-greyjoy|Theon]] pretende che lei lo chiami “mio signore”, ma Osha gli fa notare che suo padre è ancora vivo, quindi il titolo non gli spetta. Il maestro [[luwin|Luwin]] manda via Theon e chiede a Osha perché la sua banda sia venuta a sud della Barriera. Lei risponde che le cose che dormivano sotto il ghiaccio non dormono più: gli Estranei si sono svegliati. Luwin non le crede.',
        en: 'Osha now works as a servant at Winterfell. [[theon-greyjoy|Theon]] insists that she call him “my lord”, but Osha points out that his father is still alive, so the title is not his. Maester [[luwin|Luwin]] sends Theon away and asks Osha why her band came south of the Wall. She answers that the things that slept under the ice are not sleeping any more: the White Walkers have woken. Luwin does not believe her.',
      },
    ),
    inBoth(
      [8, 54],
      { it: 'La direzione sbagliata', en: 'The wrong way' },
      {
        it: 'Nel parco degli dei di Grande Inverno, Osha trova [[bran-stark|Bran]] che prega. Gli dice che nel sud gli alberi del cuore sono stati abbattuti. Quando passa [[hodor|Hodor]], nudo dopo il bagno, Osha dice che deve avere sangue di gigante. Racconta a Bran che oltre la Barriera ci sono i giganti e cose peggiori. Il fratello di Bran, [[robb-stark|Robb]], sta portando l’esercito a sud, ma secondo Osha va nella direzione sbagliata: è a nord che dovrebbe marciare.',
        en: 'In the godswood of Winterfell, Osha finds [[bran-stark|Bran]] praying. She tells him that in the south the heart trees were cut down. When [[hodor|Hodor]] passes by, naked from his bath, Osha says he must have giant’s blood. She tells Bran that beyond the Wall there are giants, and worse. Bran’s brother [[robb-stark|Robb]] is taking his army south, but Osha says he is marching the wrong way: it is north he should go.',
      },
    ),
    onScreen(
      [10, 67],
      { it: 'Nelle cripte', en: 'Into the crypts' },
      {
        it: '[[bran-stark|Bran]] sogna che il padre [[eddard-stark|Eddard]] sia nelle cripte, e Osha ve lo porta. Bran le racconta la storia degli antenati sepolti lì. Dalla tomba vuota preparata per Eddard balza fuori [[shaggydog|Cagnaccio]], e Osha e Bran finiscono a terra. Dietro il meta-lupo c’è il piccolo [[rickon-stark|Rickon]], che ha fatto lo stesso sogno. Uscendo, Osha dice a Bran che può essere una coincidenza, ma fuori il maestro [[luwin|Luwin]] li aspetta con la notizia della morte di Eddard.',
        en: '[[bran-stark|Bran]] dreams that his father [[eddard-stark|Eddard]] is in the crypts, and Osha takes him down there. Bran tells her the story of the ancestors buried there. Out of the empty tomb made ready for Eddard leaps [[shaggydog|Shaggydog]], and Osha and Bran fall over. Behind the wolf is little [[rickon-stark|Rickon]], who has had the same dream. On the way out Osha tells Bran it could be a coincidence, but outside Maester [[luwin|Luwin]] is waiting with the news of Eddard’s death.',
      },
    ),
    inBooks(
      [10, 67],
      { it: 'Alcuni sogni non sono sogni', en: 'Some dreams are not dreams' },
      {
        it: 'Osha si comporta bene, e le hanno tolto le catene, ma non i ceppi. Quando [[bran-stark|Bran]] sogna il padre [[eddard-stark|Eddard]] nelle cripte, il maestro [[luwin|Luwin]] la chiama perché porti il ragazzo laggiù. Osha dice a Bran che l’inverno non ha re. Quando [[shaggydog|Cagnaccio]] azzanna Luwin, Osha corre ad aiutarlo, e poi gli benda la ferita. Ricorda al maestro che il lord è Bran, e gli dice che alcuni sogni non sono soltanto sogni. Quando arriva il corvo, è lei a dire a Bran che sa già cosa c’è scritto.',
        en: 'Osha has behaved well, and her chains are off, though the shackles stay. When [[bran-stark|Bran]] dreams of his father [[eddard-stark|Eddard]] in the crypts, Maester [[luwin|Luwin]] calls for her to carry the boy down there. Osha tells Bran that winter has no king. When [[shaggydog|Shaggydog]] savages Luwin, Osha goes to help him, and later bandages the wound. She reminds the maester that Bran is the lord, and tells him some dreams are more than dreams. When the raven arrives, it is she who tells Bran that he already knows what it says.',
      },
    ),
  ],
  'mikken': [
    inBoth(
      [2, 54],
      { it: 'Una spada per Arya', en: 'A sword for Arya' },
      {
        it: 'Mikken è il fabbro di Grande Inverno. Prima di partire per la Barriera, [[jon-snow|Jon Snow]] gli fa forgiare una spada per la sorella [[arya-stark|Arya]]: una lama sottile, leggera, adatta a lei. Jon la regala ad Arya prima di andarsene, e lei la chiama Ago. Jon le dà anche il primo consiglio su come usarla: colpire con la parte appuntita.',
        en: 'Mikken is the blacksmith of Winterfell. Before he leaves for the Wall, [[jon-snow|Jon Snow]] has him forge a sword for his sister [[arya-stark|Arya]]: a slender, light blade, made for her. Jon gives it to Arya before he goes, and she names it Needle. Jon also gives her the first lesson in using it: stick them with the pointy end.',
      },
    ),
  ],
  'hallis-mollen': [
    inBooks(
      [2, 15],
      { it: 'Il nuovo capitano', en: 'The new captain' },
      {
        it: 'Hallis Mollen è il nuovo capitano della guardia di Grande Inverno, al posto di Jory Cassel, partito per il sud con lord Eddard. Dopo che un uomo ha cercato di uccidere [[bran-stark|Bran]], Hallis si presenta da [[catelyn-stark|Catelyn]] con [[robb-stark|Robb]], [[theon-greyjoy|Theon]] e [[rodrik-cassel|ser Rodrik]]. Riferisce che l’assassino era uno sconosciuto, forse venuto con il seguito del re, e che si era nascosto nelle stalle. Poi esce con l’ordine di proteggere Bran.',
        en: 'Hallis Mollen is the new captain of the guard at Winterfell, in place of Jory Cassel, who has gone south with Lord Eddard. After a man tries to kill [[bran-stark|Bran]], Hallis comes to [[catelyn-stark|Catelyn]] with [[robb-stark|Robb]], [[theon-greyjoy|Theon]] and [[rodrik-cassel|Ser Rodrik]]. He reports that the killer was a stranger, perhaps one who came with the king’s party, and that he had been hiding in the stables. Then he leaves with orders to protect Bran.',
      },
    ),
  ],
  'summer-direwolf': [
    inBoth(
      [4, 18],
      { it: 'Il lupo di Bran', en: 'Bran’s wolf' },
      {
        it: 'Estate è il meta-lupo di [[bran-stark|Bran]], uno dei cuccioli trovati accanto alla madre morta. Mentre Bran giaceva privo di sensi dopo la caduta, un uomo è entrato nella sua stanza con un pugnale per ucciderlo. La madre di Bran, [[catelyn-stark|Catelyn]], lo ha affrontato finché il lupo non è arrivato e gli ha squarciato la gola. Bran lo ha chiamato Estate. Il lupo resta accanto a lui e veglia su di lui.',
        en: 'Summer is [[bran-stark|Bran]]’s direwolf, one of the pups found beside their dead mother. While Bran lay senseless after his fall, a man came into his room with a dagger to kill him. Bran’s mother, [[catelyn-stark|Catelyn]], fought him until the wolf came in and tore out his throat. Bran has named him Summer. The wolf stays by his side and keeps watch over him.',
      },
    ),
    inBooks(
      [6, 38],
      { it: 'I lupi nella foresta', en: 'The wolves in the woods' },
      {
        it: '[[bran-stark|Bran]] esce a cavallo con la sella nuova. Nella Foresta del Lupo [[robb-stark|Robb]] si allontana per andare a prendere i meta-lupi, e intanto una banda di fuorilegge circonda Bran. Quando Robb torna con i lupi, Estate e Vento Grigio si gettano sugli assalitori insieme a lui, e quasi tutti restano uccisi. [[theon-greyjoy|Theon]] colpisce con una freccia l’uomo che sta per uccidere Bran, e [[osha|Osha]] si arrende.',
        en: '[[bran-stark|Bran]] rides out on his new saddle. In the wolfswood [[robb-stark|Robb]] leaves to fetch the direwolves, and meanwhile a band of outlaws surrounds Bran. When Robb comes back with the wolves, Summer and Grey Wind fall on the attackers with him, and most of them are killed. [[theon-greyjoy|Theon]] shoots the man who is about to kill Bran, and [[osha|Osha]] surrenders.',
      },
    ),
    inBooks(
      [10, 67],
      { it: 'La lotta nelle cripte', en: 'The fight in the crypts' },
      {
        it: 'Estate scende con [[bran-stark|Bran]], [[osha|Osha]] e il maestro [[luwin|Luwin]] nelle cripte di Grande Inverno, dove Bran crede di trovare il padre. Il lupo è inquieto e non vuole lasciare i gradini. Quando [[shaggydog|Cagnaccio]] balza fuori dalla tomba preparata per lord Eddard e azzanna il braccio di Luwin, Bran chiama Estate, che si scaglia contro Cagnaccio e lo stacca dal maestro.',
        en: 'Summer goes down with [[bran-stark|Bran]], [[osha|Osha]] and Maester [[luwin|Luwin]] into the crypts of Winterfell, where Bran expects to find his father. The wolf is uneasy and will not leave the steps. When [[shaggydog|Shaggydog]] springs out of the tomb made ready for Lord Eddard and savages Luwin’s arm, Bran calls for Summer, who slams into Shaggydog and knocks him off the maester.',
      },
    ),
  ],
  'shaggydog': [
    inBooks(
      [10, 25],
      { it: 'Il lupo di Rickon', en: 'Rickon’s wolf' },
      {
        it: 'Cagnaccio è il meta-lupo di [[rickon-stark|Rickon]], il più piccolo degli Stark, uno dei cuccioli trovati accanto alla madre morta. A Grande Inverno gioca con gli altri lupi nel cortile, mentre [[bran-stark|Bran]], che non può più camminare, guarda Rickon con invidia. Nella sala grande, Cagnaccio e gli altri due lupi affrontano [[tyrion-lannister|Tyrion Lannister]], finché i loro padroni non li richiamano uno alla volta.',
        en: 'Shaggydog is the direwolf of [[rickon-stark|Rickon]], the youngest Stark, one of the pups found beside their dead mother. At Winterfell he plays with the other wolves in the yard, while [[bran-stark|Bran]], who can no longer walk, watches Rickon with envy. In the great hall, Shaggydog and the two other wolves confront [[tyrion-lannister|Tyrion Lannister]], until their masters call them off one by one.',
      },
    ),
    inBooks(
      [10, 54],
      { it: 'Nei canili', en: 'In the kennels' },
      {
        it: 'Da quando ha saputo che [[robb-stark|Robb]] parte per la guerra, [[rickon-stark|Rickon]] è diventato selvatico, e Cagnaccio con lui. Una volta Rickon viene trovato nelle cripte e colpisce con una spada gli uomini venuti a prenderlo, mentre Cagnaccio morde Gage a un braccio e strappa un pezzo di coscia a [[mikken|Mikken]]. Servono Robb e [[grey-wind|Vento Grigio]] per tenerlo a bada, e Cagnaccio viene incatenato nei canili.',
        en: 'Since he learned that [[robb-stark|Robb]] is leaving for the war, [[rickon-stark|Rickon]] has grown wild, and Shaggydog with him. Once Rickon is found in the crypts and slashes with a sword at the men who come for him, while Shaggydog bites Gage on the arm and takes a chunk out of [[mikken|Mikken]]’s thigh. It takes Robb and [[grey-wind|Grey Wind]] to master him, and Shaggydog is chained in the kennels.',
      },
    ),
    onScreen(
      [10, 67],
      { it: 'Dalla tomba vuota', en: 'Out of the empty tomb' },
      {
        it: 'Cagnaccio scende nelle cripte di Grande Inverno con [[rickon-stark|Rickon]], che ha sognato il padre [[eddard-stark|Eddard]] laggiù. Quando arrivano [[bran-stark|Bran]] e [[osha|Osha]], il lupo balza loro addosso dalla tomba vuota preparata per Eddard, e li fa cadere a terra. Rickon lo richiama. Si dice che Cagnaccio dovrebbe stare legato, ma a lui non piace.',
        en: 'Shaggydog goes down into the crypts of Winterfell with [[rickon-stark|Rickon]], who has dreamed of his father [[eddard-stark|Eddard]] there. When [[bran-stark|Bran]] and [[osha|Osha]] arrive, the wolf leaps at them out of the empty tomb made ready for Eddard and knocks them over. Rickon calls him off. Shaggydog is supposed to be tied up, they say, but he does not like it.',
      },
    ),
    inBooks(
      [10, 67],
      { it: 'Il morso al maestro', en: 'Biting the maester' },
      {
        it: 'Cagnaccio è nelle cripte di Grande Inverno con [[rickon-stark|Rickon]]. Quando il maestro [[luwin|Luwin]] infila il braccio nella tomba preparata per lord [[eddard-stark|Eddard]], Cagnaccio balza fuori e glielo azzanna, finché [[summer-direwolf|Estate]] non si scaglia su di lui. Il lupo doveva stare alla catena, ma Rickon non vuole che lo leghino. Luwin dice che Cagnaccio ha già sbranato tre uomini e che prima o poi ucciderà qualcuno.',
        en: 'Shaggydog is in the crypts of Winterfell with [[rickon-stark|Rickon]]. When Maester [[luwin|Luwin]] puts his arm into the tomb made ready for Lord [[eddard-stark|Eddard]], Shaggydog springs out and savages it, until [[summer-direwolf|Summer]] slams into him. The wolf was supposed to be chained, but Rickon does not want him tied. Luwin says Shaggydog has now savaged three men and will kill someone sooner or later.',
      },
    ),
  ],
  'ghost-direwolf': [
    inBooks(
      [4, 6],
      { it: 'Il sesto cucciolo', en: 'The sixth pup' },
      {
        it: 'Spettro è il sesto cucciolo della meta-lupa morta, bianco, con gli occhi rossi. [[jon-snow|Jon Snow]] lo trova lontano dagli altri: è l’unico ad avere già aperto gli occhi. Gli altri cinque vanno ai figli legittimi di lord Eddard, e Jon tiene per sé il cucciolo bianco. Alla festa per il re, Jon siede con gli scudieri e nutre Spettro sotto il tavolo. Nel cortile il lupo diffida di [[tyrion-lannister|Tyrion Lannister]], che vorrebbe accarezzarlo.',
        en: 'Ghost is the sixth pup of the dead direwolf, white, with red eyes. [[jon-snow|Jon Snow]] finds him away from the others: he is the only one whose eyes are already open. The other five go to Lord Eddard’s trueborn children, and Jon keeps the white pup for himself. At the feast for the king, Jon sits with the squires and feeds Ghost under the table. In the yard the wolf is wary of [[tyrion-lannister|Tyrion Lannister]], who wants to stroke him.',
      },
    ),
    inBoth(
      [4, 27],
      { it: 'La visita a Rast', en: 'A visit to Rast' },
      {
        it: 'Spettro segue [[jon-snow|Jon Snow]] alla Barriera. Al Castello Nero Jon convince le altre reclute ad andarci piano con [[samwell-tarly|Samwell Tarly]] nell’addestramento. Solo [[rast|Rast]] si rifiuta. Di notte Jon va da Rast con Spettro, e il lupo gli si para davanti mentre Jon lo avverte di lasciare stare Sam. Da allora nessuno se la prende più con Sam nel cortile.',
        en: 'Ghost follows [[jon-snow|Jon Snow]] to the Wall. At Castle Black, Jon persuades the other recruits to go easy on [[samwell-tarly|Samwell Tarly]] in training. Only [[rast|Rast]] refuses. At night Jon goes to Rast with Ghost, and the wolf looms over him while Jon warns him to leave Sam alone. From then on no one goes after Sam in the yard.',
      },
    ),
    inBoth(
      [7, 49],
      { it: 'La mano mozzata', en: 'The severed hand' },
      {
        it: 'Dopo che [[jon-snow|Jon Snow]] ha pronunciato i voti davanti a un albero del cuore oltre la Barriera, Spettro corre nel bosco e torna con una mano d’uomo mozzata in bocca. È di uno dei due ranger di [[benjen-stark|Benjen Stark]], trovati morti poco lontano. Benjen, invece, resta disperso.',
        en: 'After [[jon-snow|Jon Snow]] swears his vows at a heart tree beyond the Wall, Ghost runs into the woods and comes back with a man’s severed hand in his jaws. It belongs to one of two of [[benjen-stark|Benjen Stark]]’s rangers, found dead nearby. Benjen himself is still missing.',
      },
    ),
    inBoth(
      [8, 53],
      { it: 'Il morto che cammina', en: 'The dead man walks' },
      {
        it: 'Due uomini di Benjen Stark, [[othor|Othor]] e [[jafer-flowers|Jafer Flowers]], vengono trovati morti oltre la Barriera e portati al Castello Nero. Una notte Spettro sveglia [[jon-snow|Jon Snow]] alla sua porta e lo guida verso gli alloggi del Lord Comandante [[jeor-mormont|Jeor Mormont]]. Lì Jon trova Othor, risorto, che attacca. Jon gli dà fuoco e salva la vita di Mormont.',
        en: 'Two of Benjen Stark’s men, [[othor|Othor]] and [[jafer-flowers|Jafer Flowers]], are found dead beyond the Wall and brought back to Castle Black. One night Ghost rouses [[jon-snow|Jon Snow]] at his door and leads him towards the rooms of Lord Commander [[jeor-mormont|Jeor Mormont]]. There Jon finds Othor risen from the dead and attacking. Jon sets him on fire and saves Mormont’s life.',
      },
    ),
  ],
  'benjen-stark': [
    inBoth(
      [1, 6],
      { it: 'La richiesta di Jon', en: 'Jon’s request' },
      {
        it: 'Benjen è il fratello minore di lord [[eddard-stark|Eddard Stark]] e un ranger dei Guardiani della notte. Scende dalla Barriera a Grande Inverno per la festa in onore di [[robert-baratheon|re Robert]]. Il nipote [[jon-snow|Jon Snow]], che non può sedere al tavolo della famiglia perché è un bastardo, gli chiede di portarlo con sé alla Barriera e di farlo entrare nei Guardiani. Benjen non gli dice di sì.',
        en: 'Benjen is the younger brother of Lord [[eddard-stark|Eddard Stark]] and a ranger of the Night’s Watch. He comes down from the Wall to Winterfell for the feast held for [[robert-baratheon|King Robert]]. His nephew [[jon-snow|Jon Snow]], who may not sit at the family’s table because he is a bastard, asks Benjen to take him back to the Wall and into the Watch. Benjen does not say yes.',
      },
    ),
    inBoth(
      [2, 14],
      { it: 'Verso nord', en: 'Riding north' },
      {
        it: 'Lord [[eddard-stark|Eddard]] parte per il sud come Primo Cavaliere, e Benjen torna verso la Barriera portando con sé [[jon-snow|Jon Snow]], che entrerà nei Guardiani della notte. Con loro viaggia [[tyrion-lannister|Tyrion Lannister]], che vuole vedere la Barriera. Lungo la strada si uniscono a loro nuove reclute: uomini che hanno scelto il nero per non essere castrati. Jon comincia a capire che i Guardiani non sono quelli delle storie.',
        en: 'Lord [[eddard-stark|Eddard]] goes south as Hand, and Benjen rides back to the Wall, taking [[jon-snow|Jon Snow]], who is to join the Night’s Watch. [[tyrion-lannister|Tyrion Lannister]] rides with them, wanting to see the Wall. On the way they are joined by new recruits: men who chose the black rather than be gelded. Jon begins to see that the Watch is not what the stories told.',
      },
    ),
    inBoth(
      [3, 20],
      { it: 'Oltre la Barriera', en: 'Beyond the Wall' },
      {
        it: 'Poco dopo l’arrivo di [[jon-snow|Jon Snow]] alla Barriera, Benjen parte per una perlustrazione a nord della Barriera. Jon gli chiede di portarlo con sé, ma Benjen rifiuta. Jon resta indietro con le altre reclute, ad allenarsi sotto [[alliser-thorne|ser Alliser Thorne]], e aspetta che lo zio torni.',
        en: 'Soon after [[jon-snow|Jon Snow]] reaches the Wall, Benjen leaves on a ranging north of it. Jon asks to go with him, but Benjen refuses. Jon stays behind with the other recruits, training under [[alliser-thorne|Ser Alliser Thorne]], and waits for his uncle to come back.',
      },
    ),
    inBoth(
      [7, 25],
      { it: 'Disperso', en: 'Missing' },
      {
        it: 'Benjen, ranger dei Guardiani della notte e fratello minore di [[eddard-stark|Eddard Stark]], è partito per una perlustrazione a nord della Barriera, e da allora non è più tornato. Il nipote [[jon-snow|Jon Snow]] resta al Castello Nero, dove si addestra con le altre reclute dei Guardiani. Ora Benjen è dato per disperso al di là della Barriera, e nessuno sa che fine abbia fatto.',
        en: 'Benjen, a ranger of the Night’s Watch and the younger brother of [[eddard-stark|Eddard Stark]], rode out on a ranging north of the Wall, and he has not come back since. His nephew [[jon-snow|Jon Snow]] stays at Castle Black, where he trains with the Watch’s other recruits. Benjen is now counted missing beyond the Wall, and no one knows what has become of him.',
      },
    ),
  ],
  'catelyn-stark': [
    onScreen(
      [1, 3],
      { it: 'Una lettera segreta', en: 'The letter from her sister' },
      {
        it: 'Un corvo porta a Grande Inverno la notizia che Jon Arryn, Primo Cavaliere del Re, è morto, e Catelyn la riferisce al marito [[eddard-stark|Eddard]]. Re Robert e gran parte della corte stanno venendo a nord. Catelyn sorprende il figlio [[bran-stark|Bran]] ad arrampicarsi sulle mura del castello e gli fa promettere di smettere, pur sapendo che mente. Al banchetto lei e la regina Cersei si scambiano parole cortesi. Quella notte maestro Luwin porta una lettera segreta di sua sorella: Jon Arryn è stato assassinato e i Lannister cospirano contro il re. Catelyn preferirebbe che Eddard restasse, ma lui accetta l’offerta del re di diventare il suo Primo Cavaliere.',
        en: 'A raven brings word to Winterfell that Jon Arryn, the Hand of the King, is dead, and Catelyn breaks the news to her husband [[eddard-stark|Eddard]]. King Robert and much of his court are riding north. Catelyn catches her son [[bran-stark|Bran]] climbing the castle walls and makes him promise to stop, knowing that he is lying. At the feast she and Queen Cersei exchange polite words. That night Maester Luwin brings a secret letter from her sister: Jon Arryn was murdered, and the Lannisters are plotting against the king. Catelyn would rather Eddard stayed, but he accepts the king’s offer to be his Hand.',
      },
    ),
    inBooks(
      [1, 3],
      { it: 'Nel parco degli dei', en: 'In the godswood' },
      {
        it: 'Catelyn trova il marito [[eddard-stark|Eddard]] nel parco degli dei di Grande Inverno, mentre pulisce la spada sotto l’albero del cuore dopo un’esecuzione. Parlano dei figli e dei cuccioli di meta-lupo, ed Eddard le racconta con quanto coraggio il loro figlio [[bran-stark|Bran]] ha assistito. Poi lei gli dà la notizia: Jon Arryn, il vecchio mentore di Eddard, è morto. Una lettera scritta di pugno dal re annuncia che il re sta venendo a Grande Inverno, con i fratelli della regina. La notizia della visita risolleva l’umore di Eddard.',
        en: 'Catelyn finds her husband [[eddard-stark|Eddard]] in the godswood of Winterfell, cleaning his sword beneath the heart tree after an execution. They talk about their children and the direwolf pups, and Eddard tells her how bravely their son [[bran-stark|Bran]] watched. Then she gives him her news: Jon Arryn, Eddard’s old mentor, has died. A letter in the king’s own hand says that the king is riding to Winterfell, and the queen’s brothers with him. The news of the visit lifts Eddard’s mood.',
      },
    ),
    inBooks(
      [1, 7],
      { it: 'La lettera della sorella', en: 'Her sister’s letter' },
      {
        it: 'Maestro [[luwin|Luwin]] interrompe Catelyn ed [[eddard-stark|Eddard]] con una scatola che qualcuno ha lasciato nelle sue stanze. Sotto il doppio fondo c’è una lettera della sorella di Catelyn: Jon Arryn è stato assassinato dalla regina, [[cersei-lannister|Cersei]]. Catelyn spinge Eddard ad accettare l’offerta del re e a diventare il suo Primo Cavaliere, e lui acconsente. Lei resterà a governare il Nord e a preparare [[robb-stark|Robb]] a farlo un giorno, insieme a [[rickon-stark|Rickon]], troppo piccolo per viaggiare. [[sansa-stark|Sansa]], [[arya-stark|Arya]] e [[bran-stark|Bran]] partiranno per il sud con il padre, e la cosa la addolora profondamente. Catelyn si rifiuta di tenere a Grande Inverno il figlio bastardo di Eddard, [[jon-snow|Jon Snow]], e Luwin propone che Jon entri nei Guardiani della notte.',
        en: 'Maester [[luwin|Luwin]] interrupts Catelyn and [[eddard-stark|Eddard]] with a box someone left in his chambers. Under its false bottom is a letter from her sister: Jon Arryn was murdered by the queen, [[cersei-lannister|Cersei]]. Catelyn urges Eddard to accept the king’s offer and become his Hand, and he agrees. She is to stay and rule the North, teaching [[robb-stark|Robb]] to rule after him, with [[rickon-stark|Rickon]], who is too young to travel. [[sansa-stark|Sansa]], [[arya-stark|Arya]] and [[bran-stark|Bran]] are to go south with their father, which upsets her deeply. She refuses to keep Eddard’s bastard son [[jon-snow|Jon Snow]] at Winterfell, and Luwin suggests that Jon join the Night’s Watch.',
      },
    ),
    inBoth(
      [2, 15],
      { it: 'L’uomo mandato a uccidere Bran', en: 'The man sent to kill Bran' },
      {
        it: 'Dopo la caduta da una torre [[bran-stark|Bran]] giace privo di sensi, e Catelyn non si allontana dal suo letto. Quando [[jon-snow|Jon]] viene a salutarlo prima di partire per la Barriera, lei lo manda via con freddezza. [[eddard-stark|Eddard]] parte per il sud con il re. Una notte scoppia un incendio nel castello e un uomo si introduce nella stanza di Bran per ucciderlo. Catelyn lo trattiene finché il meta-lupo di Bran non gli squarcia la gola. Convinta che i Lannister vogliano morto Bran perché ha visto qualcosa, annuncia a [[robb-stark|Robb]], a [[theon-greyjoy|Theon]], a maestro [[luwin|Luwin]] e a ser [[rodrik-cassel|Rodrik]] che andrà a sud ad avvertire il marito. Ser Rodrik parte con lei, e Robb resta a governare Grande Inverno.',
        en: 'After his fall from a tower, [[bran-stark|Bran]] lies senseless, and Catelyn will not leave his bed. When [[jon-snow|Jon]] comes to say goodbye before leaving for the Wall, she sends him away coldly. [[eddard-stark|Eddard]] rides south with the king. One night a fire breaks out in the castle, and a man slips into Bran’s room to kill him. Catelyn holds him off until Bran’s direwolf tears out his throat. Convinced that the Lannisters want Bran dead because he saw something, she tells [[robb-stark|Robb]], [[theon-greyjoy|Theon]], Maester [[luwin|Luwin]] and Ser [[rodrik-cassel|Rodrik]] that she will go south to warn her husband. Ser Rodrik rides with her, and Robb is left to rule Winterfell.',
      },
    ),
    onScreen(
      [3, 19],
      { it: 'Il bordello di Ditocorto', en: 'Littlefinger’s brothel' },
      {
        it: 'Catelyn e ser [[rodrik-cassel|Rodrik]] cercano di entrare nella capitale senza farsi notare, ma uno degli uomini di [[petyr-baelish|Petyr Baelish]] li riconosce e li porta in un bordello che Baelish possiede, dove li aspetta anche [[varys|Varys]]. Irritata dal trattamento ricevuto, Catelyn chiede comunque a Ditocorto di aiutarla a trovare chi ha tentato di uccidere [[bran-stark|Bran]]. Lui le rivela che il pugnale del sicario era suo, finché non l’ha perso in una scommessa con [[tyrion-lannister|Tyrion Lannister]]. Ditocorto va a chiamare [[eddard-stark|Eddard]], che giura di scoprire la verità e la rimanda a Grande Inverno.',
        en: 'Catelyn and Ser [[rodrik-cassel|Rodrik]] try to slip into the capital unseen, but one of [[petyr-baelish|Petyr Baelish]]’s men spots them and brings them to a brothel Baelish owns, where [[varys|Varys]] is waiting too. Angry at how she has been treated, Catelyn still asks Littlefinger for help finding whoever tried to kill [[bran-stark|Bran]]. He tells her the killer’s dagger was once his, until he lost it in a wager to [[tyrion-lannister|Tyrion Lannister]]. Littlefinger fetches [[eddard-stark|Eddard]], who vows to find the truth and sends her back to Winterfell.',
      },
    ),
    inBooks(
      [3, 21],
      { it: 'Per mare fino alla capitale', en: 'By sea to the capital' },
      {
        it: 'Catelyn e ser [[rodrik-cassel|Rodrik]] raggiungono Approdo del Re per mare, e durante il viaggio Rodrik, che soffre il mal di mare, si rade i favoriti. Mentre lui va alla Fortezza Rossa a chiedere del pugnale, gli uomini della Guardia cittadina portano Catelyn da [[petyr-baelish|Petyr Baelish]], che è cresciuto con lei. Accanto a [[varys|Varys]], Ditocorto le dice che il pugnale era suo, finché non l’ha perso in una scommessa durante un torneo con [[tyrion-lannister|Tyrion Lannister]]. Più tardi Ditocorto le porta [[eddard-stark|Eddard]] in un bordello. Insieme decidono di indagare sulla morte di Jon Arryn, ed Eddard le ordina di preparare il Nord a un’eventuale guerra con i Lannister.',
        en: 'Catelyn and Ser [[rodrik-cassel|Rodrik]] sail to King’s Landing, and on the way Rodrik, who is seasick, shaves off his whiskers. While he goes to the Red Keep to ask about the dagger, men of the City Watch take Catelyn to [[petyr-baelish|Petyr Baelish]], who grew up with her. With [[varys|Varys]] beside him, Littlefinger tells her the dagger was his, until he lost it in a wager at a tourney to [[tyrion-lannister|Tyrion Lannister]]. Later Littlefinger brings [[eddard-stark|Eddard]] to her at a brothel. Together they agree to look into Jon Arryn’s death, and Eddard tells her to make the North ready in case of war with the Lannisters.',
      },
    ),
    inBoth(
      [4, 29],
      { it: 'La locanda all’incrocio', en: 'The inn at the crossroads' },
      {
        it: 'Sulla via del ritorno verso nord, Catelyn e ser [[rodrik-cassel|Rodrik]] si fermano in una locanda, sperando di passare inosservati. Il cantastorie [[marillion|Marillion]] cerca di ingraziarsi Catelyn, e a Rodrik non piace affatto. Poi arriva [[tyrion-lannister|Tyrion Lannister]] con [[yoren|Yoren]], un uomo dei Guardiani della notte, e la riconosce. Catelyn si rivolge agli uomini presenti che sono al servizio dei vassalli di suo padre, accusa Tyrion di aver cercato di far uccidere suo figlio [[bran-stark|Bran]] e lo fa catturare.',
        en: 'On the way back north, Catelyn and Ser [[rodrik-cassel|Rodrik]] stop at an inn, hoping to pass unnoticed. The singer [[marillion|Marillion]] tries to win her favour, and Rodrik has no liking for him. Then [[tyrion-lannister|Tyrion Lannister]] arrives with [[yoren|Yoren]], a man of the Night’s Watch, and recognises her. Catelyn calls on the men in the room who are sworn to her father’s bannermen, accuses Tyrion of trying to have her son [[bran-stark|Bran]] killed, and has him seized.',
      },
    ),
    inBoth(
      [5, 35],
      { it: 'Verso il Nido dell’Aquila', en: 'Toward the Eyrie' },
      {
        it: 'Catelyn annuncia di voler portare [[tyrion-lannister|Tyrion]] a Grande Inverno, ma con ser [[rodrik-cassel|Rodrik]] e gli uomini della locanda lo conduce invece a est, verso il Nido dell’Aquila e sua sorella [[lysa-arryn|Lysa Arryn]]. Quando sulla strada li attaccano gli uomini dei clan delle montagne, lascia che Tyrion combatta, e lui le salva la vita. Catelyn continua a non fidarsi di lui. Al Nido dell’Aquila Lysa prende Tyrion sotto la propria custodia.',
        en: 'Catelyn announces that she is taking [[tyrion-lannister|Tyrion]] to Winterfell, but with Ser [[rodrik-cassel|Rodrik]] and the men from the inn she leads him east instead, toward the Eyrie and her sister [[lysa-arryn|Lysa Arryn]]. When mountain clansmen attack them on the road, she lets Tyrion fight, and he saves her life. She still does not trust him. At the Eyrie, Lysa takes Tyrion into her own custody.',
      },
    ),
    inBooks(
      [6, 41],
      { it: 'Il duello al Nido dell’Aquila', en: 'The trial at the Eyrie' },
      {
        it: 'Al Nido dell’Aquila ser [[rodrik-cassel|Rodrik]] porta la notizia che ser [[jaime-lannister|Jaime Lannister]] sta radunando un esercito, e Catelyn vuole ripartire per Grande Inverno. Suo zio, ser Brynden Tully, lascia il suo incarico quando [[lysa-arryn|Lysa]] gli nega degli uomini, e accetta di partire con lei. Catelyn sostiene che uccidere [[tyrion-lannister|Tyrion]] non porterebbe nulla e lo reclama come suo prigioniero, ma Lysa non le dà ascolto. Il campione di Tyrion, [[bronn|Bronn]], uccide ser [[vardis-egen|Vardis Egen]] in un duello giudiziario, e Lysa deve ammettere che gli dei hanno giudicato Tyrion innocente. Lo lascia andare per la strada alta, solo con Bronn.',
        en: 'At the Eyrie Ser [[rodrik-cassel|Rodrik]] brings news that Ser [[jaime-lannister|Jaime Lannister]] is gathering an army, and Catelyn wants to leave for Winterfell. Her uncle Ser Brynden Tully gives up his post when [[lysa-arryn|Lysa]] refuses him men, and agrees to ride with her. Catelyn argues that killing [[tyrion-lannister|Tyrion]] gains nothing and claims him as her own prisoner, but Lysa will not listen. Tyrion’s champion [[bronn|Bronn]] kills Ser [[vardis-egen|Vardis Egen]] in a trial by combat, and Lysa has to admit that the gods have found Tyrion innocent. She sends him off down the high road with Bronn alone.',
      },
    ),
    onScreen(
      [8, 56],
      { it: 'Nell’esercito di Robb', en: 'Joining Robb’s host' },
      {
        it: 'Al Nido dell’Aquila Catelyn è furiosa perché [[lysa-arryn|Lysa]] ha tardato a dirle dell’arresto di [[eddard-stark|Eddard]] e non vuole mandare in guerra i cavalieri della Valle. Parte con ser [[rodrik-cassel|Rodrik]] e raggiunge l’esercito di [[robb-stark|Robb]] nell’Incollatura, mentre marcia verso sud. Robb aspetta che i suoi lord lascino la tenda prima di abbracciarla. Lei gli dice che non ha altra scelta che combattere e che non può perdere: se perde, lord Tywin non avrà pietà della loro famiglia. Per raggiungere i Lannister l’esercito deve attraversare un ramo del Tridente, in un passaggio controllato da un lord permaloso.',
        en: 'At the Eyrie, Catelyn is furious that [[lysa-arryn|Lysa]] waited to tell her of [[eddard-stark|Eddard]]’s arrest and will not send the knights of the Vale to war. She leaves with Ser [[rodrik-cassel|Rodrik]] and meets [[robb-stark|Robb]]’s army in the Neck as it marches south. Robb holds back from embracing her until his lords have left the tent. She tells him he has no choice but to fight, and that he cannot lose: if he does, Lord Tywin will show their family no mercy. To reach the Lannisters, the host must cross a fork of the Trident, at a crossing held by a prickly lord.',
      },
    ),
    inBooks(
      [8, 56],
      { it: 'A Moat Cailin', en: 'At Moat Cailin' },
      {
        it: 'Catelyn lascia la Valle per mare e sbarca a Porto Bianco, dove viene a sapere che [[robb-stark|Robb]] ha chiamato a raccolta i vessilli. Raggiunge Moat Cailin con lo zio, ser Brynden Tully, e i due figli di lord Manderly, ser Wylis e ser Wendel, e rimanda ser [[rodrik-cassel|Rodrik]] a Grande Inverno come castellano. In privato legge la lettera arrivata da [[sansa-stark|Sansa]] e capisce che l’ha scritta la regina. Dice a Robb che non può né piegare il ginocchio né tornare a casa: deve sconfiggere i Lannister sul campo. Robb affida la fanteria a Roose Bolton e decide di guidare personalmente la cavalleria.',
        en: 'Catelyn sails from the Vale to White Harbor, where she learns that [[robb-stark|Robb]] has called the banners. She rides to Moat Cailin with her uncle Ser Brynden Tully and the two sons of Lord Manderly, Ser Wylis and Ser Wendel, and sends Ser [[rodrik-cassel|Rodrik]] back to Winterfell as castellan. In private she reads the letter that came from [[sansa-stark|Sansa]] and sees that the queen wrote it. She tells Robb that he can neither bend the knee nor go home: he must defeat the Lannisters in the field. Robb gives his foot to Roose Bolton and means to lead his horse himself.',
      },
    ),
    inBoth(
      [9, 64],
      {
        it: 'Il passaggio e il prigioniero',
        en: 'The crossing and the captive',
      },
      {
        it: 'Per attraversare il fiume alle Torri Gemelle, Catelyn entra lei stessa nel castello a trattare con lord [[walder-frey|Walder Frey]], che non è ancora sceso in guerra. Walder lascia passare l’esercito di [[robb-stark|Robb]] e vi unisce i suoi uomini, in cambio di alcune promesse: Robb sposerà una delle sue figlie, [[arya-stark|Arya]] uno dei suoi figli, e Robb prenderà come scudiero suo figlio Olyvar. Oltre il fiume Robb manda una parte dell’esercito contro lord [[tywin-lannister|Tywin]] e guida il resto contro l’esercito di [[jaime-lannister|Jaime Lannister]], che assedia il castello del padre di Catelyn. Robb torna vittorioso, con Jaime prigioniero.',
        en: 'To cross the river at the Twins, Catelyn goes into the castle herself to bargain with Lord [[walder-frey|Walder Frey]], who has not yet joined the war. He lets [[robb-stark|Robb]]’s host cross and adds his own men to it, in return for promises: Robb is to marry one of his daughters, [[arya-stark|Arya]] one of his sons, and Robb is to take his son Olyvar as squire. Across the river Robb sends part of his host against Lord [[tywin-lannister|Tywin]] and leads the rest against [[jaime-lannister|Jaime Lannister]]’s army, which is besieging the castle of Catelyn’s father. Robb comes back victorious, with Jaime as his prisoner.',
      },
    ),
    onScreen(
      [10, 72],
      { it: 'Il lutto nell’accampamento', en: 'Grief in the camp' },
      {
        it: 'All’accampamento arriva la notizia che [[eddard-stark|Eddard]] è stato decapitato. Catelyn attraversa il campo in silenzio mentre i lord del Nord si inchinano al suo passaggio, poi piange da sola nel bosco. Lì trova [[robb-stark|Robb]] che colpisce un albero con la spada. Gli dice che la sta rovinando, e lui le crolla tra le braccia giurando di uccidere i Lannister. Lei gli promette vendetta, una volta liberate [[sansa-stark|Sansa]] e [[arya-stark|Arya]]. Più tardi va dal prigioniero [[jaime-lannister|Jaime]] e lo colpisce con una pietra. Jaime ammette di aver spinto [[bran-stark|Bran]] giù dalla torre, ma non dice perché.',
        en: 'Word reaches the camp that [[eddard-stark|Eddard]] has been beheaded. Catelyn walks through the camp in silence while the northern lords bow to her, then weeps alone in the woods. There she finds [[robb-stark|Robb]] hacking at a tree with his sword. She tells him he is ruining it, and he falls into her arms, swearing to kill the Lannisters. She promises him revenge, once [[sansa-stark|Sansa]] and [[arya-stark|Arya]] are free. Later she visits the captive [[jaime-lannister|Jaime]] and strikes him with a stone. Jaime admits that he pushed [[bran-stark|Bran]] from the tower, but will not say why.',
      },
    ),
    inBooks(
      [10, 72],
      { it: 'Ritorno alla casa del padre', en: 'Back to her father’s house' },
      {
        it: 'Catelyn torna in barca a Delta delle Acque con [[robb-stark|Robb]], in lutto per [[eddard-stark|Eddard]], della cui morte ha avuto notizia. Suo padre, lord Hoster Tully, sta morendo, e lei si incolpa della guerra, cominciata quando ha fatto catturare [[tyrion-lannister|Tyrion]]. Al consiglio dei lord del Nord e dei fiumi parla in favore della pace: la guerra era stata combattuta per liberare Eddard, la vendetta non lo riporterà indietro, e lei vuole le figlie al sicuro e tornare a casa. I lord non vogliono sentirne parlare. Poi [[greatjon-umber|Greatjon Umber]] proclama Robb Re del Nord, e tutta la sala riprende il grido.',
        en: 'Catelyn comes back by boat to Riverrun with [[robb-stark|Robb]], grieving for [[eddard-stark|Eddard]], whose death she has learned of. Her father, Lord Hoster Tully, is dying, and she blames herself for the war, which began when she seized [[tyrion-lannister|Tyrion]]. At the council of the northern and river lords she speaks for peace: the war was fought to free Eddard, vengeance will not bring him back, and she wants her daughters safe and to go home. The lords will not hear of it. Then [[greatjon-umber|Greatjon Umber]] proclaims Robb King in the North, and the hall takes up the cry.',
      },
    ),
  ],
  'robb-stark': [
    inBoth(
      [1, 2],
      { it: 'I cuccioli di meta-lupo', en: 'The direwolf pups' },
      {
        it: 'Robb è il figlio maggiore di [[eddard-stark|Eddard Stark]] e l’erede di Grande Inverno. Va con il padre all’esecuzione di un disertore dei Guardiani della notte, insieme al fratello [[bran-stark|Bran]], al figlio bastardo del padre [[jon-snow|Jon Snow]] e al pupillo di Eddard [[theon-greyjoy|Theon Greyjoy]]. Sulla via del ritorno trovano una meta-lupa morta con una cucciolata. Jon fa notare che c’è un cucciolo per ciascuno dei figli legittimi di Eddard, ed Eddard permette loro di tenerli, a patto che li allevino da sé. Robb ne prende uno.',
        en: 'Robb is the eldest son of [[eddard-stark|Eddard Stark]] and the heir to Winterfell. He rides with his father to the execution of a deserter from the Night’s Watch, together with his brother [[bran-stark|Bran]], his father’s bastard son [[jon-snow|Jon Snow]] and his father’s ward [[theon-greyjoy|Theon Greyjoy]]. On the way back they find a dead direwolf with a litter of pups. Jon points out that there is one pup for each of Eddard’s trueborn children, and Eddard lets them keep the pups if they raise them themselves. Robb takes one.',
      },
    ),
    inBoth(
      [2, 15],
      { it: 'A capo del castello', en: 'Running the castle' },
      {
        it: 'Dopo la caduta di [[bran-stark|Bran]], [[eddard-stark|Eddard]] parte per il sud come Primo Cavaliere del Re, e Robb abbraccia [[jon-snow|Jon]], che va alla Barriera. [[catelyn-stark|Catelyn]] non si allontana dal letto di Bran, così Robb si occupa di mandare avanti Grande Inverno con maestro [[luwin|Luwin]]. Una notte corre via dalla stanza di Bran per un incendio nel castello, e intanto un uomo vi entra per uccidere suo fratello. Quando Catelyn decide di andare a sud ad avvertire Eddard, Robb resta a capo di Grande Inverno.',
        en: 'After [[bran-stark|Bran]]’s fall, [[eddard-stark|Eddard]] goes south as Hand of the King, and Robb embraces [[jon-snow|Jon]], who leaves for the Wall. [[catelyn-stark|Catelyn]] will not leave Bran’s bed, so Robb takes on the running of Winterfell with Maester [[luwin|Luwin]]. One night he runs from Bran’s room to a fire in the castle, and meanwhile a man slips in to kill his brother. When Catelyn decides to go south to warn Eddard, Robb is left in charge of Winterfell.',
      },
    ),
    onScreen(
      [3, 25],
      { it: 'Mai più in piedi', en: 'Never to walk again' },
      {
        it: 'Con entrambi i genitori partiti per il sud, Robb governa Grande Inverno. Il fratello [[bran-stark|Bran]] si è risvegliato dopo la caduta senza ricordare nulla, e le ferite lo costringono a letto. Quando Robb va a trovarlo, Bran gli chiede se è vero che non camminerà mai più. Robb, a malincuore, gli risponde di sì. Bran dice che preferirebbe essere morto.',
        en: 'With both his parents gone south, Robb rules Winterfell. His brother [[bran-stark|Bran]] has woken from his fall with no memory of it, and his injuries keep him in bed. When Robb comes to see him, Bran asks whether it is true that he will never walk again. Robb reluctantly tells him that it is. Bran answers that he would rather be dead.',
      },
    ),
    inBoth(
      [4, 25],
      { it: 'La sella di Tyrion', en: 'Tyrion’s saddle' },
      {
        it: 'Robb riceve nella sala [[tyrion-lannister|Tyrion Lannister]], di ritorno dalla Barriera insieme ad alcuni uomini dei Guardiani della notte, tra cui [[yoren|Yoren]]. Robb accoglie gli uomini dei Guardiani, ma non Tyrion. [[hodor|Hodor]] porta giù [[bran-stark|Bran]], e Tyrion gli consegna il disegno di una sella che gli permetterà di tornare a cavalcare. Allora Robb offre a Tyrion l’ospitalità del castello, ma Tyrion rifiuta.',
        en: 'Robb receives [[tyrion-lannister|Tyrion Lannister]] in the hall. Tyrion is on his way back from the Wall with men of the Night’s Watch, among them [[yoren|Yoren]]. Robb welcomes the men of the Watch but not Tyrion. [[hodor|Hodor]] carries [[bran-stark|Bran]] down, and Tyrion gives him the design of a saddle that will let him ride again. Robb then offers Tyrion the castle’s hospitality, but Tyrion turns it down.',
      },
    ),
    inBoth(
      [6, 38],
      {
        it: 'Fuorilegge nella Foresta del Lupo',
        en: 'Outlaws in the wolfswood',
      },
      {
        it: 'Dal sud arrivano notizie: [[catelyn-stark|Catelyn]] ha fatto catturare [[tyrion-lannister|Tyrion Lannister]], gli uomini di [[jaime-lannister|Jaime]] hanno ucciso [[jory-cassel|Jory Cassel]] ed [[eddard-stark|Eddard]] è ferito. Robb va a cavallo nella Foresta del Lupo con [[theon-greyjoy|Theon]] e [[bran-stark|Bran]], che prova la sua nuova sella. Alcuni fuorilegge circondano Bran, e Robb li affronta. [[stiv|Stiv]] punta un coltello contro Bran, finché Theon non lo uccide con una freccia. Robb se la prende con Theon per un tiro che avrebbe potuto colpire Bran. L’unica fuorilegge presa viva è [[osha|Osha]], e Robb la porta a Grande Inverno come prigioniera.',
        en: 'News comes from the south: [[catelyn-stark|Catelyn]] has seized [[tyrion-lannister|Tyrion Lannister]], [[jaime-lannister|Jaime]]’s men have killed [[jory-cassel|Jory Cassel]], and [[eddard-stark|Eddard]] is hurt. Robb rides into the wolfswood with [[theon-greyjoy|Theon]] and [[bran-stark|Bran]], who is trying his new saddle. Outlaws surround Bran, and Robb fights them. [[stiv|Stiv]] holds a knife to Bran until Theon kills him with an arrow. Robb is angry with Theon for a shot that could have hit Bran. The only outlaw taken alive is [[osha|Osha]], and Robb brings her back to Winterfell as a prisoner.',
      },
    ),
    inBoth(
      [8, 54],
      { it: 'La chiamata alle armi', en: 'Calling the banners' },
      {
        it: 'Quando arriva la notizia che [[eddard-stark|Eddard]] è stato arrestato nella capitale, Robb chiama a raccolta i vessilli del padre e i lord del Nord si radunano a Grande Inverno. [[greatjon-umber|Greatjon Umber]] pretende il comando e mette mano all’acciaio alla tavola di Robb. Il meta-lupo di Robb, [[grey-wind|Vento Grigio]], lo getta a terra e gli stacca due dita con un morso. Il Greatjon ride e da allora segue Robb. Robb lascia a Grande Inverno [[bran-stark|Bran]] e il fratellino [[rickon-stark|Rickon]], che è convinto che chi parte non torni più, e marcia verso sud.',
        en: 'When word comes that [[eddard-stark|Eddard]] has been seized in the capital, Robb calls his father’s banners, and the northern lords gather at Winterfell. [[greatjon-umber|Greatjon Umber]] demands to lead and reaches for his steel at Robb’s table. Robb’s direwolf [[grey-wind|Grey Wind]] knocks him down and bites off two of his fingers. The Greatjon laughs and follows Robb from then on. Robb leaves [[bran-stark|Bran]] at Winterfell with their little brother [[rickon-stark|Rickon]], who is sure that those who leave never come back, and marches south.',
      },
    ),
    inBooks(
      [8, 56],
      { it: 'Due strade verso sud', en: 'Two roads south' },
      {
        it: 'A Moat Cailin [[catelyn-stark|Catelyn]] trova Robb alla testa dell’esercito del Nord, con [[grey-wind|Vento Grigio]] al fianco. In privato legge la lettera di [[sansa-stark|Sansa]] e vi riconosce la mano della regina. Dice a Robb che non può né piegare il ginocchio né tornare a casa: deve sconfiggere i Lannister sul campo. Robb risponde che allora non perderà. Manda la fanteria lungo la strada del re e progetta di guidare la cavalleria oltre la Forca Verde, per liberare dall’assedio il castello del nonno. Pensa di affidare la fanteria al Greatjon, poi sceglie il prudente Roose Bolton.',
        en: 'At Moat Cailin, [[catelyn-stark|Catelyn]] finds Robb at the head of the northern host, with [[grey-wind|Grey Wind]] at his side. In private she reads [[sansa-stark|Sansa]]’s letter and sees the queen’s hand in it. She tells Robb that he can neither bend the knee nor go home: he must defeat the Lannisters in the field. Robb answers that then he will not lose. He sends his foot down the kingsroad and plans to lead his horse across the Green Fork to lift the siege of his grandfather’s castle. He means to give the foot to the Greatjon, then chooses the cautious Roose Bolton.',
      },
    ),
    inBoth(
      [9, 64],
      { it: 'Jaime catturato', en: 'Jaime taken' },
      {
        it: 'Alle Torri Gemelle sua madre [[catelyn-stark|Catelyn]] entra al posto suo a trattare il passaggio con lord [[walder-frey|Walder Frey]], e Robb accetta il prezzo: tra le altre cose sposerà una delle figlie di Walder. Oltre il fiume divide l’esercito, mandandone una parte contro lord [[tywin-lannister|Tywin]], mentre guida il resto contro [[jaime-lannister|Jaime Lannister]], che assedia il castello del nonno di Robb. Robb vince la battaglia e fa prigioniero Jaime, e lo tiene in vita sotto scorta.',
        en: 'At the Twins his mother [[catelyn-stark|Catelyn]] goes in his place to bargain for the crossing with Lord [[walder-frey|Walder Frey]], and Robb accepts the price: among other things, he is to marry one of Walder’s daughters. Across the river he splits his host, sending part of it against Lord [[tywin-lannister|Tywin]] while he leads the rest against [[jaime-lannister|Jaime Lannister]], who is besieging the castle of Robb’s grandfather. Robb wins the battle and takes Jaime prisoner, and keeps him alive under guard.',
      },
    ),
    onScreen(
      [10, 72],
      { it: 'Il Re del Nord', en: 'The King in the North' },
      {
        it: '[[eddard-stark|Eddard]] è stato decapitato. I lord del Nord e quelli delle terre dei fiumi discutono su quale re sostenere, ora che [[renly-baratheon|Renly Baratheon]], fratello minore del defunto re Robert, ha rivendicato il trono. Robb sostiene che Renly, il più giovane, non può essere re prima di Stannis. Allora [[greatjon-umber|Greatjon Umber]] chiede perché debbano essere governati dal sud: si erano piegati ai draghi, e i draghi sono morti. Proclama Robb Re del Nord, e gli altri lord riprendono il grido.',
        en: '[[eddard-stark|Eddard]] has been beheaded. The northern lords and the lords of the riverlands debate which king to support, now that [[renly-baratheon|Renly Baratheon]], the late King Robert’s younger brother, has claimed the throne. Robb holds that Renly, the younger, cannot be king before Stannis. Then [[greatjon-umber|Greatjon Umber]] asks why they should be ruled from the south at all: they bowed to the dragons, and the dragons are dead. He proclaims Robb King in the North, and the other lords take up the cry.',
      },
    ),
    inBooks(
      [10, 72],
      {
        it: 'Re del Nord a Delta delle Acque',
        en: 'King in the North at Riverrun',
      },
      {
        it: 'L’esercito di Robb rompe l’assedio dei Lannister attorno a Delta delle Acque, e Robb entra nel castello del nonno, lord Hoster Tully, che sta morendo. Ormai è giunta la notizia della morte di [[eddard-stark|Eddard]]. Nella sala grande i lord del Nord e quelli dei fiumi discutono su quale re sostenere, ora che [[renly-baratheon|Renly Baratheon]], fratello minore del defunto re Robert, ha rivendicato il trono. Robb sostiene che Renly non può essere re prima di Stannis. Allora [[greatjon-umber|Greatjon Umber]] dice che si erano piegati ai draghi, e i draghi sono morti. Proclama Robb Re del Nord, e anche i lord dei fiumi riprendono il grido.',
        en: 'Robb’s host breaks the Lannister siege around Riverrun, and Robb enters the castle of his grandfather, Lord Hoster Tully, who is dying. By then the news of [[eddard-stark|Eddard]]’s death has reached them. In the great hall the northern lords and the river lords debate which king to support, now that [[renly-baratheon|Renly Baratheon]], the late King Robert’s younger brother, has claimed the throne. Robb holds that Renly cannot be king before Stannis. Then [[greatjon-umber|Greatjon Umber]] says that they bowed to the dragons, and the dragons are dead. He proclaims Robb King in the North, and the river lords take up the cry too.',
      },
    ),
  ],
  'rodrik-cassel': [
    onScreen(
      [1, 8],
      { it: 'Il disertore', en: 'The deserter' },
      {
        it: 'Ser Rodrik Cassel è il maestro d’armi di Grande Inverno, un vecchio cavaliere al servizio di [[eddard-stark|lord Eddard Stark]]. Durante una lezione di tiro con l’arco porta a Eddard e a [[catelyn-stark|Catelyn]] la notizia che è stato catturato un disertore dei Guardiani della notte. Accompagna Eddard all’esecuzione e, sulla via del ritorno, è presente quando trovano una cucciolata di meta-lupi accanto alla madre morta.',
        en: 'Ser Rodrik Cassel is the master-at-arms of Winterfell and an old knight in the service of [[eddard-stark|Lord Eddard Stark]]. During an archery lesson he brings Eddard and [[catelyn-stark|Catelyn]] word that a deserter from the Night’s Watch has been caught. He rides with Eddard to the execution, and on the way back he is there when the party finds a litter of direwolf pups beside their dead mother.',
      },
    ),
    inBooks(
      [1, 8],
      { it: 'Niente lame affilate', en: 'No live steel' },
      {
        it: 'Ser Rodrik Cassel è il maestro d’armi di Grande Inverno. Nel cortile addestra i ragazzi del castello e quelli del seguito reale, e [[bran-stark|Bran]] batte il principe [[tommen-baratheon|Tommen]] con le spade di legno. Quando Rodrik chiama [[robb-stark|Robb]] a battersi con il principe [[joffrey-baratheon|Joffrey]], Joffrey rifiuta il legno e chiede lame affilate. Rodrik lo vieta. Sandor Clegane gli ricorda che Joffrey è un principe, ma Rodrik non cede.',
        en: 'Ser Rodrik Cassel is the master-at-arms of Winterfell. In the yard he trains the boys of the castle and those of the royal party, and [[bran-stark|Bran]] beats Prince [[tommen-baratheon|Tommen]] with wooden swords. When Rodrik calls [[robb-stark|Robb]] to face Prince [[joffrey-baratheon|Joffrey]], Joffrey refuses to fight with wood and asks for live steel. Rodrik forbids it. Sandor Clegane reminds him that Joffrey is a prince, but Rodrik does not give way.',
      },
    ),
    inBoth(
      [2, 15],
      { it: 'La scorta della signora', en: 'Escort for the lady' },
      {
        it: 'Un uomo tenta di uccidere [[bran-stark|Bran]] nel suo letto, e Rodrik esamina il pugnale che portava: è d’acciaio valyriano. [[catelyn-stark|Catelyn]] crede che dietro il tentativo ci siano i Lannister e decide di andare a sud ad avvertire il marito, [[eddard-stark|Eddard]]. Ser Rodrik si offre di accompagnarla perché non debba viaggiare da sola, e i due lasciano insieme Grande Inverno, mentre [[robb-stark|Robb]] resta a governare il castello.',
        en: 'A man tries to kill [[bran-stark|Bran]] in his bed, and Rodrik examines the dagger he carried: it is Valyrian steel. [[catelyn-stark|Catelyn]] believes the Lannisters are behind the attempt and decides to go south to warn her husband, [[eddard-stark|Eddard]]. Ser Rodrik offers to ride with her so that she need not travel alone, and the two leave Winterfell together, while [[robb-stark|Robb]] stays to rule the castle.',
      },
    ),
    inBoth(
      [4, 29],
      { it: 'Il cantastorie della locanda', en: 'The singer at the inn' },
      {
        it: 'Mentre riaccompagna [[catelyn-stark|Catelyn]] verso nord, ser Rodrik si ferma con lei in una locanda dove sperano di non essere riconosciuti. Il cantastorie [[marillion|Marillion]], che cerca di ingraziarsi Catelyn, non gli piace per niente. Quando arriva [[tyrion-lannister|Tyrion Lannister]] e la riconosce, Catelyn si rivolge agli uomini presenti al servizio dei vassalli di suo padre. Rodrik è al suo fianco quando lei accusa Tyrion di aver tramato la morte di [[bran-stark|Bran]] e lo fa catturare.',
        en: 'Escorting [[catelyn-stark|Catelyn]] back north, Ser Rodrik stops with her at an inn where they hope to go unrecognised. He has no liking for the singer [[marillion|Marillion]], who tries to win Catelyn’s favour. When [[tyrion-lannister|Tyrion Lannister]] arrives and recognises her, Catelyn calls on the men present who are sworn to her father’s bannermen. Rodrik is at her side when she accuses Tyrion of plotting [[bran-stark|Bran]]’s death and has him seized.',
      },
    ),
    inBooks(
      [8, 56],
      { it: 'Castellano di Grande Inverno', en: 'Castellan of Winterfell' },
      {
        it: 'Al Nido dell’Aquila ser Rodrik porta a [[catelyn-stark|Catelyn]] la notizia che [[jaime-lannister|Jaime Lannister]] sta radunando un esercito, e impallidisce all’idea di un altro viaggio per mare quando lei decide di tornare a nord in nave. Assiste alla vittoria di [[bronn|Bronn]] nel duello giudiziario di [[tyrion-lannister|Tyrion]]. Una volta tornata nel Nord, Catelyn lo rimanda a Grande Inverno come castellano, perché aiuti maestro [[luwin|Luwin]] nelle questioni di guerra mentre [[robb-stark|Robb]] guida l’esercito a sud.',
        en: 'At the Eyrie, Ser Rodrik brings [[catelyn-stark|Catelyn]] the news that [[jaime-lannister|Jaime Lannister]] is gathering an army, and he goes pale at the thought of another sea voyage when she means to sail north. He watches [[bronn|Bronn]] win [[tyrion-lannister|Tyrion]]’s trial by combat. Once back in the North, Catelyn sends him home to Winterfell as castellan, to help Maester [[luwin|Luwin]] with matters of war while [[robb-stark|Robb]] leads the host south.',
      },
    ),
    onScreen(
      [10, 72],
      { it: 'Con l’esercito di Robb', en: 'With Robb’s host' },
      {
        it: 'Ser Rodrik accompagna [[catelyn-stark|Catelyn]] dal Nido dell’Aquila all’esercito di [[robb-stark|Robb]], dove saluta [[greatjon-umber|Greatjon Umber]] come un vecchio amico. Alle Torri Gemelle consiglia a Catelyn di non andare da sola a trattare con lord [[walder-frey|Walder Frey]], ma lei ci va comunque e ottiene il passaggio. Dopo la vittoria di Robb su [[jaime-lannister|Jaime Lannister]] arriva la notizia che [[eddard-stark|Eddard]] è stato decapitato, e Rodrik è tra coloro che proclamano Robb Re del Nord.',
        en: 'Ser Rodrik rides with [[catelyn-stark|Catelyn]] from the Eyrie to [[robb-stark|Robb]]’s army, where he greets [[greatjon-umber|Greatjon Umber]] like an old friend. At the Twins he advises Catelyn not to go alone to bargain with Lord [[walder-frey|Walder Frey]], but she goes anyway and wins the crossing. After Robb’s victory over [[jaime-lannister|Jaime Lannister]], word comes that [[eddard-stark|Eddard]] has been beheaded, and Rodrik is among those who proclaim Robb King in the North.',
      },
    ),
  ],
  'grey-wind': [
    inBooks(
      [8, 11],
      { it: 'Il cucciolo di Robb', en: 'Robb’s pup' },
      {
        it: 'Vento Grigio è il cucciolo di meta-lupo che [[robb-stark|Robb Stark]] ha preso dalla cucciolata trovata accanto alla madre morta, sulla via del ritorno da un’esecuzione. [[eddard-stark|Lord Eddard]] ha permesso ai figli di tenere i cuccioli, a patto che li allevassero da sé. Quando il figlio bastardo di Eddard, [[jon-snow|Jon Snow]], lascia Grande Inverno per la Barriera, Vento Grigio è con Robb nel cortile mentre i due fratelli si abbracciano e si salutano.',
        en: 'Grey Wind is the direwolf pup that [[robb-stark|Robb Stark]] took from the litter found beside their dead mother on the way home from an execution. [[eddard-stark|Lord Eddard]] let his children keep the pups on condition that they raise them themselves. When Eddard’s bastard son [[jon-snow|Jon Snow]] leaves Winterfell for the Wall, Grey Wind is with Robb in the yard as the two brothers embrace and say goodbye.',
      },
    ),
    inBoth(
      [8, 54],
      { it: 'Due dita', en: 'Two fingers' },
      {
        it: 'Quando [[robb-stark|Robb]] chiama a raccolta i vessilli del padre, Vento Grigio gli resta accanto mentre i lord del Nord si radunano a Grande Inverno. Alla tavola di Robb [[greatjon-umber|Greatjon Umber]] lo sfida e mette mano all’acciaio. Vento Grigio gli balza addosso, lo getta a terra e gli stacca due dita con un morso. Il Greatjon ci ride sopra e accetta il comando di Robb, che marcia verso sud con il suo meta-lupo.',
        en: 'When [[robb-stark|Robb]] calls his father’s banners, Grey Wind stays at his side as the northern lords gather at Winterfell. At Robb’s table [[greatjon-umber|Greatjon Umber]] defies him and reaches for his steel. Grey Wind springs at the Greatjon, knocks him off his feet and bites off two of his fingers. The Greatjon laughs it off and accepts Robb’s command, and Robb marches south with his direwolf.',
      },
    ),
    onScreen(
      [10, 72],
      { it: 'Una dozzina di uomini', en: 'A dozen men' },
      {
        it: 'Vento Grigio, il meta-lupo che Robb ha allevato da cucciolo, va in guerra con [[robb-stark|Robb]]. Nell’accampamento di [[tywin-lannister|Tywin Lannister]], lord Leo Lefford riferisce che nella battaglia in cui Robb ha catturato [[jaime-lannister|Jaime Lannister]] il meta-lupo ha ucciso una dozzina di uomini e altrettanti cavalli. Con Jaime prigioniero, [[kevan-lannister|Kevan Lannister]] definisce la guerra una catastrofe.',
        en: 'Grey Wind, the direwolf Robb raised from a pup, goes to war with [[robb-stark|Robb]]. In the camp of [[tywin-lannister|Tywin Lannister]], Lord Leo Lefford reports that in the battle where Robb took [[jaime-lannister|Jaime Lannister]] prisoner, the direwolf killed a dozen men and as many horses. With Jaime taken, [[kevan-lannister|Kevan Lannister]] calls the war a catastrophe.',
      },
    ),
    inBooks(
      [10, 72],
      {
        it: 'Il lupo nel Bosco dei Sussurri',
        en: 'The wolf in the Whispering Wood',
      },
      {
        it: 'Vento Grigio segue [[robb-stark|Robb]] come un’ombra quando Robb va a far scattare la trappola contro l’esercito di [[jaime-lannister|Jaime Lannister]] nel Bosco dei Sussurri, dove fa prigioniero Jaime. Quando l’esercito di Robb arriva a Delta delle Acque, [[theon-greyjoy|Theon Greyjoy]] racconta alla guarnigione come, durante i combattimenti, Vento Grigio abbia staccato il braccio a un uomo e fatto impazzire i cavalli dei Lannister.',
        en: 'Grey Wind shadows [[robb-stark|Robb]] as he rides out to spring his trap on [[jaime-lannister|Jaime Lannister]]’s army in the Whispering Wood, where Robb takes Jaime prisoner. When Robb’s host reaches Riverrun, [[theon-greyjoy|Theon Greyjoy]] tells the garrison how, in the fighting, Grey Wind tore the arm off a man and drove the Lannister horses mad.',
      },
    ),
  ],
  'greatjon-umber': [
    inBoth(
      [8, 54],
      { it: 'L’acciaio alla tavola di Robb', en: 'Steel at Robb’s table' },
      {
        it: 'Greatjon Umber è un enorme lord del Nord, a capo di Casa Umber. Quando [[robb-stark|Robb Stark]] chiama a raccolta i vessilli del padre dopo l’arresto di [[eddard-stark|Eddard]], porta i suoi uomini a Grande Inverno. Pretende il comando e, quando Robb glielo nega, mette mano all’acciaio alla tavola di Robb. Il meta-lupo di Robb, [[grey-wind|Vento Grigio]], lo getta a terra e gli stacca due dita con un morso. Il Greatjon ride e da allora segue Robb.',
        en: 'Greatjon Umber is a huge northern lord, the head of House Umber. When [[robb-stark|Robb Stark]] calls his father’s banners after [[eddard-stark|Eddard]]’s arrest, he brings his men to Winterfell. He demands to lead and, when Robb refuses him, reaches for his steel at Robb’s table. Robb’s direwolf [[grey-wind|Grey Wind]] knocks him down and bites off two of his fingers. The Greatjon laughs and follows Robb from then on.',
      },
    ),
    inBooks(
      [8, 56],
      { it: 'Il comando della fanteria', en: 'Passed over for the foot' },
      {
        it: 'Il Greatjon diventa il più fedele sostenitore di [[robb-stark|Robb]], e l’esercito raggiunge Moat Cailin. Robb intende affidargli la fanteria che marcerà lungo la strada del re contro lord Tywin. [[catelyn-stark|Catelyn]] gli fa notare che [[eddard-stark|Eddard]] considerava il Greatjon un uomo senza paura, e che non avere paura non è come essere coraggiosi. Robb decide che per la fanteria serve un uomo prudente e astuto, e la affida invece a Roose Bolton.',
        en: 'The Greatjon becomes [[robb-stark|Robb]]’s staunchest supporter, and the host reaches Moat Cailin. Robb means to give him command of the foot that will march down the kingsroad against Lord Tywin. [[catelyn-stark|Catelyn]] points out that [[eddard-stark|Eddard]] thought the Greatjon fearless, and that being fearless is not the same as being brave. Robb decides he needs a man of caution and cunning for the foot, and gives it to Roose Bolton instead.',
      },
    ),
    onScreen(
      [9, 60],
      { it: 'Un avvertimento sui Frey', en: 'A warning about the Freys' },
      {
        it: 'A un consiglio di guerra il Greatjon protesta quando [[robb-stark|Robb]] lascia libero un esploratore dei Lannister catturato, ma accetta la decisione del suo signore. Quando l’esercito arriva alle Torri Gemelle, avverte Robb di non fidarsi di lord [[walder-frey|Walder Frey]] e di non entrare da solo a trattare. [[catelyn-stark|Catelyn]] va al posto di Robb, e il Greatjon è presente quando lei riporta le condizioni per il passaggio.',
        en: 'At a war council the Greatjon objects when [[robb-stark|Robb]] lets a captured Lannister scout go free, but accepts his lord’s decision. When the host reaches the Twins, he warns Robb not to trust Lord [[walder-frey|Walder Frey]] or go inside alone to bargain. [[catelyn-stark|Catelyn]] goes in Robb’s place, and the Greatjon is there when she brings back the terms for the crossing.',
      },
    ),
    inBoth(
      [10, 72],
      { it: 'La proclamazione', en: 'Proclaiming the king' },
      {
        it: 'Dopo l’esecuzione di [[eddard-stark|Eddard]], i lord del Nord e dei fiumi discutono su quale re seguire, ora che [[renly-baratheon|Renly Baratheon]] ha rivendicato il trono. Il Greatjon si alza e dice che i re del sud per lui non contano nulla: perché dovrebbero governare il Nord dal sud? Il Nord si era piegato ai draghi, e i draghi sono morti. Indica [[robb-stark|Robb]] come l’unico re davanti al quale piegherà il ginocchio, il Re del Nord, e gli altri lord riprendono il grido.',
        en: 'After [[eddard-stark|Eddard]]’s execution, the northern and river lords argue over which king to follow, now that [[renly-baratheon|Renly Baratheon]] has claimed the throne. The Greatjon rises and says that the southern kings mean nothing to him: why should they rule the North from the south? It was the dragons the North bowed to, and the dragons are dead. He names [[robb-stark|Robb]] the only king he will bend the knee to, the King in the North, and the other lords take up the cry.',
      },
    ),
  ],
  'smalljon-umber': [
    inBooks(
      [53, 64],
      { it: 'Nella guardia di Robb', en: 'In Robb’s guard' },
      {
        it: 'Smalljon Umber è il figlio di [[greatjon-umber|Greatjon Umber]], lord dell’Ultimo Focolare, e marcia con il padre nell’esercito di [[robb-stark|Robb Stark]]. Cavalca nella guardia personale di Robb quando l’esercito piomba sulle truppe di [[jaime-lannister|Jaime Lannister]] nel Bosco dei Sussurri. Quando Jaime, vedendosi perduto, carica il gruppo di Robb, la guardia difende Robb e i figli di lord Karstark muoiono per farlo. Robb fa prigioniero Jaime.',
        en: 'Smalljon Umber is the son of [[greatjon-umber|Greatjon Umber]], the lord of Last Hearth, and marches with his father in [[robb-stark|Robb Stark]]’s host. He rides in Robb’s own guard when the host falls on the army of [[jaime-lannister|Jaime Lannister]] in the Whispering Wood. When Jaime sees he is lost and charges Robb’s party, the guard defends Robb, and Lord Karstark’s sons die doing it. Robb takes Jaime prisoner.',
      },
    ),
  ],
  'rickard-karstark': [
    inBooks(
      [17, 54],
      { it: 'Gli ultimi ad arrivare', en: 'The last to arrive' },
      {
        it: 'Rickard Karstark è il lord di Karhold. Quando [[robb-stark|Robb Stark]] chiama a raccolta i vessilli dopo la cattura del padre, i Karstark sono gli ultimi ad arrivare a Grande Inverno: trecento cavalieri e quasi duemila fanti, con lord Rickard e i figli Harrion, Eddard e Torrhen alla testa. Si dice che i Karstark abbiano sangue Stark, ma a [[bran-stark|Bran]] non sembrano degli Stark. È Bran a ospitarli nella sala grande.',
        en: 'Rickard Karstark is the lord of Karhold. When [[robb-stark|Robb Stark]] calls his banners after his father’s capture, the Karstarks are the last to reach Winterfell: three hundred horsemen and nearly two thousand foot, with Lord Rickard and his sons Harrion, Eddard and Torrhen riding at their head. The Karstarks are said to have Stark blood, though to [[bran-stark|Bran]] they do not look like Starks. Bran hosts them in the great hall.',
      },
    ),
    inBooks(
      [17, 72],
      { it: 'Due figli perduti', en: 'Two sons lost' },
      {
        it: 'Nel Bosco dei Sussurri, quando [[jaime-lannister|Jaime Lannister]] carica il gruppo di [[robb-stark|Robb]], i figli di lord Karstark, Torrhen ed Eddard, sono tra quelli che muoiono per difendere Robb. Robb fa portare via Jaime sotto stretta sorveglianza, anche per sottrarlo alla vendetta di lord Rickard. A Delta delle Acque il lord in lutto prega con Robb nel parco degli dei. Al consiglio chiede che senso avrebbero avuto i loro sacrifici se ora facessero la pace, e si unisce ai lord che proclamano Robb Re del Nord.',
        en: 'In the Whispering Wood, when [[jaime-lannister|Jaime Lannister]] charges [[robb-stark|Robb]]’s party, Lord Karstark’s sons Torrhen and Eddard are among those who die defending Robb. Robb has Jaime taken away under strong guard, partly to keep him from Lord Rickard’s vengeance. At Riverrun the grieving lord prays with Robb in the godswood. At the council he asks what their sacrifices were worth if they make peace now, and he joins the lords who proclaim Robb King in the North.',
      },
    ),
  ],
  'roose-bolton': [
    inBooks(
      [14, 54],
      { it: 'Il lord silenzioso', en: 'The silent lord' },
      {
        it: 'Roose Bolton è il lord di Forte Terrore, e porta i suoi uomini a Grande Inverno quando [[robb-stark|Robb Stark]] chiama a raccolta i vessilli del padre. Fra tutti i vassalli è quello che Robb trova più spaventoso: non dice mai una parola, si limita a guardare. Robb racconta a [[bran-stark|Bran]] che, ogni volta che Bolton lo fissa, pensa alla stanza di Forte Terrore dove si dice che i Bolton appendano le pelli dei nemici. Bran ribatte che è solo una delle storie della Vecchia Nan.',
        en: 'Roose Bolton is the lord of the Dreadfort, and he brings his men to Winterfell when [[robb-stark|Robb Stark]] calls his father’s banners. Of all the bannermen, he is the one Robb finds most frightening: he never says a word, he only looks. Robb tells [[bran-stark|Bran]] that whenever Bolton looks at him, he thinks of the room in the Dreadfort where the Boltons are said to hang the skins of their enemies. Bran says that is only one of Old Nan’s stories.',
      },
    ),
    inBooks(
      [14, 63],
      { it: 'Il comando della fanteria', en: 'Command of the foot' },
      {
        it: 'A Moat Cailin Roose Bolton chiede a [[catelyn-stark|Catelyn]] se sia vero che tiene prigioniero [[tyrion-lannister|Tyrion Lannister]], che sarebbe un buon ostaggio. [[robb-stark|Robb]] vuole un uomo prudente e di fredda astuzia a capo della fanteria, e sceglie Bolton. Mentre Robb attraversa la Forca Verde alle Torri Gemelle con la cavalleria, Bolton guida la fanteria a sud lungo la riva orientale, contro lord [[tywin-lannister|Tywin]]. I suoi fanti si scontrano con l’esercito di Tywin presso la Forca Verde, e Bolton riesce a fuggire.',
        en: 'At Moat Cailin, Roose Bolton asks [[catelyn-stark|Catelyn]] about the rumour that she holds [[tyrion-lannister|Tyrion Lannister]], who would make a good hostage. [[robb-stark|Robb]] wants a man of caution and cold cunning to lead his foot, and chooses Bolton. While Robb crosses the Green Fork at the Twins with his horse, Bolton marches the foot south on the east bank to confront Lord [[tywin-lannister|Tywin]]. His foot meet Tywin’s army in battle by the Green Fork, and Bolton escapes.',
      },
    ),
  ],
  'galbart-glover': [
    onScreen(
      [8, 56],
      { it: 'L’avanguardia', en: 'The vanguard' },
      {
        it: 'Galbart Glover è il lord di Deepwood Motte, uno dei lord del Nord che rispondono alla chiamata alle armi di [[robb-stark|Robb Stark]] dopo l’arresto del padre. Al banchetto di Grande Inverno Robb gli affida l’avanguardia. [[greatjon-umber|Greatjon Umber]] non vuole marciare dietro a un Glover e minaccia di tornarsene a casa, finché [[grey-wind|Vento Grigio]] non gli stacca due dita con un morso. Più tardi Galbart siede al consiglio di guerra di Robb, che si interrompe quando arriva [[catelyn-stark|Catelyn]] e chiede di parlare da sola con il figlio.',
        en: 'Galbart Glover is the lord of Deepwood Motte, one of the northern lords who answer [[robb-stark|Robb Stark]]’s call to arms after his father’s arrest. At the feast in Winterfell, Robb gives him the vanguard. [[greatjon-umber|Greatjon Umber]] will not march behind a Glover and threatens to go home, until [[grey-wind|Grey Wind]] bites off two of his fingers. Later Galbart sits at Robb’s war council, which breaks up when [[catelyn-stark|Catelyn]] arrives and asks to speak with her son alone.',
      },
    ),
    inBooks(
      [8, 56],
      { it: 'Al consiglio di guerra di Robb', en: 'At Robb’s war council' },
      {
        it: 'Galbart Glover è il lord di Deepwood Motte, uno dei lord del Nord che rispondono alla chiamata alle armi di [[robb-stark|Robb Stark]] dopo l’arresto del padre. Siede al consiglio di guerra di Robb mentre l’esercito marcia verso sud. Quando [[catelyn-stark|Catelyn]] raggiunge l’esercito, chiede di parlare da sola con il figlio, e i lord li lasciano soli.',
        en: 'Galbart Glover is the lord of Deepwood Motte, one of the northern lords who answer [[robb-stark|Robb Stark]]’s call to arms after his father’s arrest. He sits at Robb’s war council as the host marches south. When [[catelyn-stark|Catelyn]] reaches the host, she asks to speak with her son alone, and the lords leave the two of them together.',
      },
    ),
    inBoth(
      [10, 72],
      { it: 'Tra i lord del re', en: 'Among the king’s lords' },
      {
        it: 'Dopo l’esecuzione di [[eddard-stark|Eddard]], Galbart Glover siede con i lord del Nord e dei fiumi mentre discutono su quale re seguire, ora che [[renly-baratheon|Renly Baratheon]] ha rivendicato il trono. [[robb-stark|Robb]] sostiene che Renly non può essere re prima del fratello maggiore Stannis. Quando [[greatjon-umber|Greatjon Umber]] proclama Robb Re del Nord, Galbart è tra i lord che riprendono il grido.',
        en: 'After [[eddard-stark|Eddard]]’s execution, Galbart Glover sits with the northern and river lords as they debate which king to follow, now that [[renly-baratheon|Renly Baratheon]] has claimed the throne. [[robb-stark|Robb]] holds that Renly cannot be king before his elder brother Stannis. When [[greatjon-umber|Greatjon Umber]] proclaims Robb King in the North, Galbart is among the lords who take up the cry.',
      },
    ),
  ],
  'robett-glover': [
    inBooks(
      [57, 54],
      { it: 'La richiesta di un comando', en: 'Asking for a command' },
      {
        it: 'Robett Glover appartiene a Casa Glover, la casata del Nord che ha sede a Deepwood Motte. Quando [[robb-stark|Robb Stark]] chiama a raccolta i vessilli del padre, Robett è tra gli uomini del Nord che arrivano a Grande Inverno per marciare con lui. Come altri lord che mettono alla prova il giovane Robb, gli chiede un comando. Robb nega il comando supremo a chiunque lo chieda e piega i lord alla sua volontà, come faceva il padre.',
        en: 'Robett Glover belongs to House Glover, the northern house whose seat is Deepwood Motte. When [[robb-stark|Robb Stark]] calls his father’s banners, Robett is among the northmen who come to Winterfell to march with him. Like other lords who test the young Robb, he asks him for a command. Robb refuses supreme command to everyone who asks, and bends the lords to his will as his father did.',
      },
    ),
  ],
  'maege-mormont': [
    inBoth(
      [8, 54],
      { it: 'La signora dell’Isola dell’Orso', en: 'The lady of Bear Island' },
      {
        it: 'Maege Mormont è la signora dell’Isola dell’Orso e governa Casa Mormont. Quando [[robb-stark|Robb Stark]] chiama a raccolta i vessilli del padre dopo l’arresto di [[eddard-stark|Eddard]] nella capitale, porta la sua gente a Grande Inverno e si unisce al suo esercito. È tra i lord che vi si radunano prima che Robb marci verso sud, in guerra contro i Lannister.',
        en: 'Maege Mormont is the lady of Bear Island and rules House Mormont. When [[robb-stark|Robb Stark]] calls his father’s banners after [[eddard-stark|Eddard]] is seized in the capital, she brings her people to Winterfell and joins his host. She is among the lords who gather there before Robb marches south to war against the Lannisters.',
      },
    ),
    inBoth(
      [10, 72],
      { it: 'Il saluto al re', en: 'Hailing the king' },
      {
        it: 'Maege Mormont marcia verso sud con l’esercito di [[robb-stark|Robb]] e lo segue nella guerra contro i Lannister. Dopo l’esecuzione di [[eddard-stark|Eddard]] siede con i lord del Nord e dei fiumi mentre discutono su quale re seguire. Quando [[greatjon-umber|Greatjon Umber]] proclama Robb Re del Nord, è tra i lord che riprendono il grido.',
        en: 'Maege Mormont marches south with [[robb-stark|Robb]]’s host and follows him in the war against the Lannisters. After [[eddard-stark|Eddard]]’s execution she sits with the northern and river lords as they argue over which king to follow. When [[greatjon-umber|Greatjon Umber]] proclaims Robb King in the North, she is among the lords who take up the cry.',
      },
    ),
  ],
  'dacey-mormont': [
    inBooks(
      [9, 64],
      { it: 'Nella guardia di Robb', en: 'In Robb’s guard' },
      {
        it: 'Dacey Mormont è la figlia maggiore di [[maege-mormont|lady Maege Mormont]] ed erede dell’Isola dell’Orso. Cavalca nella guardia personale di [[robb-stark|Robb Stark]] quando il suo esercito fa scattare la trappola contro le truppe di [[jaime-lannister|Jaime Lannister]] nel Bosco dei Sussurri. Quando Jaime carica il gruppo di Robb, la guardia difende Robb, e Robb fa prigioniero Jaime.',
        en: 'Dacey Mormont is the eldest daughter of [[maege-mormont|Lady Maege Mormont]] and the heir to Bear Island. She rides in [[robb-stark|Robb Stark]]’s personal guard when his host springs its trap on the army of [[jaime-lannister|Jaime Lannister]] in the Whispering Wood. When Jaime charges Robb’s party, the guard defends Robb, and Robb takes Jaime prisoner.',
      },
    ),
  ],
  'wendel-manderly': [
    inBooks(
      [29, 56],
      { it: 'Da Porto Bianco', en: 'From White Harbor' },
      {
        it: 'Ser Wendel Manderly è un cavaliere di Porto Bianco, figlio di lord Wyman Manderly. Quando [[catelyn-stark|Catelyn Stark]] sbarca a Porto Bianco, lord Wyman, troppo grasso per stare in sella, resta a difendere la città e manda i suoi due figli, ser Wylis e ser Wendel, con millecinquecento uomini. I due cavalcano con Catelyn e suo zio, ser Brynden Tully, fino a Moat Cailin, dove si uniscono all’esercito di [[robb-stark|Robb]].',
        en: 'Ser Wendel Manderly is a knight of White Harbor, a son of Lord Wyman Manderly. When [[catelyn-stark|Catelyn Stark]] comes ashore at White Harbor, Lord Wyman, too fat to sit a horse, stays to defend the city and sends his two sons, Ser Wylis and Ser Wendel, with fifteen hundred men. They ride with Catelyn and her uncle Ser Brynden Tully to Moat Cailin, where they join [[robb-stark|Robb]]’s host.',
      },
    ),
    inBooks(
      [29, 64],
      { it: 'Nella guardia di Robb', en: 'In Robb’s guard' },
      {
        it: 'Ser Wendel Manderly marcia a sud nell’esercito di [[robb-stark|Robb]] e cavalca nella sua guardia personale, tra gli uomini più anziani, quando l’esercito piomba sulle truppe di [[jaime-lannister|Jaime Lannister]] nel Bosco dei Sussurri. Quando Jaime carica il gruppo di Robb, la guardia difende Robb, e Robb fa prigioniero Jaime.',
        en: 'Ser Wendel Manderly marches south in [[robb-stark|Robb]]’s host and rides in his personal guard, one of its older men, when the host falls on [[jaime-lannister|Jaime Lannister]]’s army in the Whispering Wood. When Jaime charges Robb’s party, the guard defends Robb, and Robb takes Jaime prisoner.',
      },
    ),
  ],
} satisfies Record<string, Timeline<Story>>
