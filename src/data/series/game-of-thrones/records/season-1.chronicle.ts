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
 *
 * The King’s Landing, riverlands and Vale cast follows (#1362), on the same
 * rules. Boros, Mandon, Dontos, Thoros, Yohn Royce, Podrick, Edmure, Hoster,
 * Brynden, Donnel and Anya open on screen after episode 10, so their stories
 * are the books’; Ros and Mhaegen are the show’s records, and Hot Pie and
 * Lommy open in the books at chapter 75, so theirs are the show’s.
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
  // King’s Landing, the riverlands and the Vale (#1362).
  // Chapter 5 only shows Tyrion riding in with the king's party, so the book
  // side opens at chapter 6, where he first acts.
  'tyrion-lannister': [
    onScreen(
      [1, 5],
      { it: 'L’arrivo a Grande Inverno', en: 'Arrival at Winterfell' },
      {
        it: 'Tyrion, il fratello minore della regina, è un nano che arriva al nord con il seguito di re [[robert-baratheon|Robert]]. Mentre la corte viene accolta a Grande Inverno, lui è in un bordello del villaggio fuori dal castello. La sorella [[cersei-lannister|Cersei]] manda il loro fratello [[jaime-lannister|Jaime]] a cercarlo, e Jaime gli dice che la sera è atteso al banchetto. Fuori dalla sala Tyrion incontra [[jon-snow|Jon Snow]], il figlio bastardo di [[eddard-stark|Eddard Stark]], e gli consiglia di indossare quella parola come un’armatura, così che nessuno possa ferirlo con essa. Quando Jon gli chiede che cosa ne sappia lui, Tyrion risponde che tutti i nani sono bastardi agli occhi del padre.',
        en: 'Tyrion, the queen’s younger brother, is a dwarf who comes north with King [[robert-baratheon|Robert]]’s party. While the court is welcomed at Winterfell, he is in a brothel in the town outside the castle. His sister [[cersei-lannister|Cersei]] sends their brother [[jaime-lannister|Jaime]] to fetch him, and Jaime tells him he is needed at the feast that night. Outside the hall Tyrion meets [[jon-snow|Jon Snow]], the bastard son of [[eddard-stark|Eddard Stark]], and tells him to wear the word like armour, so that no one can hurt him with it. When Jon asks what he knows about it, Tyrion answers that all dwarfs are bastards in their father’s eyes.',
      },
    ),
    inBooks(
      [1, 6],
      { it: 'Un consiglio nel cortile', en: 'Counsel in the yard' },
      {
        it: 'Al banchetto per il re a Grande Inverno, [[jon-snow|Jon Snow]] resta colpito da Tyrion, il nano di Castel Granito. Più tardi Jon esce dalla sala e trova nel cortile Tyrion, che si è allontanato anche lui dalla festa. Tyrion vuole accarezzare il lupo bianco di Jon, che all’inizio diffida di lui. Poi dà un consiglio a Jon: non deve mai dimenticare quello che è, e deve farne un’armatura, così che nessuno possa ferirlo chiamandolo bastardo. Infine Tyrion torna nella sala.',
        en: 'At the feast for the king at Winterfell, [[jon-snow|Jon Snow]] is struck by the sight of Tyrion, the dwarf of Casterly Rock. Later Jon leaves the hall and finds Tyrion in the yard, where he too has slipped away from the feast. Tyrion wants to stroke Jon’s white wolf, which does not trust him at first. Then he gives Jon some advice: never forget what he is, and make it his armour, so that no one can hurt him by calling him a bastard. Then Tyrion goes back into the hall.',
      },
    ),
    onScreen(
      [2, 10],
      { it: 'Tre schiaffi', en: 'Three slaps' },
      {
        it: 'Dopo la caduta di [[bran-stark|Bran Stark]], Tyrion dice al nipote [[joffrey-baratheon|Joffrey]] di andare a porgere i suoi omaggi ai genitori di Bran. Quando Joffrey rifiuta, Tyrion lo schiaffeggia tre volte, finché il principe non acconsente. A colazione racconta a [[jaime-lannister|Jaime]] e a [[cersei-lannister|Cersei]] che Bran dovrebbe sopravvivere, e nota con quanta cautela i due accolgono la notizia. Dice di voler vedere la Barriera e pisciare dalla sua cima. Parte verso nord con [[jon-snow|Jon]] e suo zio [[benjen-stark|Benjen]], e spiega a Jon che legge per tenere affilata la mente, la sua arma migliore, e che i Guardiani della Notte non sono più l’ordine nobile di un tempo. Davanti alla Barriera resta senza parole.',
        en: 'After [[bran-stark|Bran Stark]]’s fall, Tyrion tells his nephew [[joffrey-baratheon|Joffrey]] to pay his respects to Bran’s parents. When Joffrey refuses, Tyrion slaps him three times until he agrees. At breakfast he tells [[jaime-lannister|Jaime]] and [[cersei-lannister|Cersei]] that Bran is expected to live, and notes how guardedly the two of them take the news. He says he wants to see the Wall and piss off the top of it. He rides north with [[jon-snow|Jon]] and his uncle [[benjen-stark|Benjen]], telling Jon that he reads to keep his mind sharp, his greatest weapon, and that the Night’s Watch is no longer the noble order it once was. At the Wall its size leaves him speechless.',
      },
    ),
    inBooks(
      [2, 10],
      { it: 'Due schiaffi al principe', en: 'Two slaps for the prince' },
      {
        it: 'L’ululato di un lupo distoglie Tyrion dai suoi libri nella biblioteca di Grande Inverno. Nel cortile trova il nipote [[joffrey-baratheon|Joffrey]], che non è ancora andato da [[eddard-stark|Eddard Stark]] e da sua moglie per il figlio [[bran-stark|Bran]]. Quando Joffrey dice che non ci andrà, Tyrion lo schiaffeggia due volte e lo manda via. A colazione con [[jaime-lannister|Jaime]], [[cersei-lannister|Cersei]], [[tommen-baratheon|Tommen]] e [[myrcella-baratheon|Myrcella]] racconta che Bran potrebbe svegliarsi, ma non camminerà mai più. Annuncia che andrà a nord con [[benjen-stark|Benjen Stark]] a vedere la Barriera: non per prendere il nero, ma per pisciare dal bordo del mondo. Jaime mette in dubbio le sue intenzioni, e Tyrion risponde che ama la sua famiglia.',
        en: 'A wolf’s howl draws Tyrion from his books in the library of Winterfell. In the yard he finds his nephew [[joffrey-baratheon|Joffrey]], who has not yet called on [[eddard-stark|Eddard Stark]] and his wife about their son [[bran-stark|Bran]]. When Joffrey says he will not, Tyrion slaps him twice and sends him away. At breakfast with [[jaime-lannister|Jaime]], [[cersei-lannister|Cersei]], [[tommen-baratheon|Tommen]] and [[myrcella-baratheon|Myrcella]] he says that Bran may wake, but will never walk again. He means to ride north with [[benjen-stark|Benjen Stark]] to see the Wall: not to take the black, but to piss off the edge of the world. Jaime questions his motives, and Tyrion answers that he loves his family.',
      },
    ),
    onScreen(
      [3, 22],
      { it: 'A Castello Nero', en: 'At Castle Black' },
      {
        it: 'A Castello Nero Tyrion guarda le reclute allenarsi insieme al Lord Comandante [[jeor-mormont|Jeor Mormont]]. Quando alcune di loro se la prendono con [[jon-snow|Jon]], Tyrion calma gli animi e fa notare a Jon che gli altri non hanno mai avuto un maestro d’armi. [[benjen-stark|Benjen]] lo rimprovera perché dubita di ciò che c’è oltre la Barriera. Jeor e maestro [[aemon|Aemon]] gli chiedono di ottenere a corte più uomini per i Guardiani della Notte. Tyrion non crede ai pericoli di cui parlano, ma accetta di riferire la richiesta alla regina. Prima di ripartire con [[yoren|Yoren]], sale in cima alla Barriera e piscia dal bordo.',
        en: 'At Castle Black Tyrion watches the recruits train with Lord Commander [[jeor-mormont|Jeor Mormont]]. When some of them gang up on [[jon-snow|Jon]], Tyrion defuses it and points out to Jon that the others never had a master-at-arms to teach them. [[benjen-stark|Benjen]] scolds him for doubting what lies beyond the Wall. Jeor and Maester [[aemon|Aemon]] ask him to win the Night’s Watch more men at court. Tyrion does not believe in the dangers they describe, but agrees to take word to the queen. Before leaving with [[yoren|Yoren]], he climbs to the top of the Wall and pisses off its edge.',
      },
    ),
    inBooks(
      [3, 22],
      {
        it: 'A cena con il Lord Comandante',
        en: 'Dinner with the Lord Commander',
      },
      {
        it: 'A Castello Nero Tyrion cena con il Lord Comandante [[jeor-mormont|Mormont]] e gli ufficiali dei Guardiani della Notte, e con le sue frecciate fa alzare da tavola ser [[alliser-thorne|Alliser Thorne]]. Maestro [[aemon|Aemon]], vecchio e cieco, lo chiama gigante. Rimasto solo con lui, Mormont chiede a Tyrion di far sapere a corte quanto i Guardiani abbiano bisogno di aiuto, e gli parla di bruti in fuga verso sud e di uomini vicino a Forte Orientale che dicono di aver visto gli Estranei. Più tardi Tyrion sale un’ultima volta sulla Barriera e trova [[jon-snow|Jon]] di guardia. Jon promette che un giorno ritroverà lo zio [[benjen-stark|Benjen]], scomparso oltre la Barriera.',
        en: 'At Castle Black Tyrion dines with Lord Commander [[jeor-mormont|Mormont]] and the officers of the Night’s Watch, and his taunts drive Ser [[alliser-thorne|Alliser Thorne]] from the table. Maester [[aemon|Aemon]], old and blind, calls him a giant. Alone with him, Mormont asks Tyrion to tell the court how badly the Watch needs help, speaking of wildlings fleeing south and of men near Eastwatch who claim to have seen White Walkers. Later Tyrion goes up the Wall one last time and finds [[jon-snow|Jon]] on watch. Jon promises that one day he will find his uncle [[benjen-stark|Benjen]], lost beyond the Wall.',
      },
    ),
    inBooks(
      [4, 25],
      { it: 'Una sella per Bran', en: 'A saddle for Bran' },
      {
        it: 'Mentre torna a sud, Tyrion si ferma a Grande Inverno con quattro confratelli dei Guardiani della Notte, tra cui [[yoren|Yoren]]. Nella sala grande [[robb-stark|Robb Stark]] lo accoglie con freddezza, con [[theon-greyjoy|Theon Greyjoy]] al suo fianco. Tyrion ha portato il disegno di una sella che permetterebbe a [[bran-stark|Bran]], che non può più usare le gambe, di tornare a cavalcare. I metalupi degli Stark lo accerchiano, finché i loro padroni non li richiamano uno alla volta. Tyrion rifiuta l’ospitalità di Robb e annuncia che l’indomani ripartirà verso sud.',
        en: 'On his way south Tyrion stops at Winterfell with four brothers of the Night’s Watch, among them [[yoren|Yoren]]. In the great hall [[robb-stark|Robb Stark]] receives him coldly, with [[theon-greyjoy|Theon Greyjoy]] at his side. Tyrion has brought the design of a saddle that would let [[bran-stark|Bran]], who has lost the use of his legs, ride again. The Stark direwolves close in on him until their masters call them off one by one. Tyrion turns down Robb’s offer of hospitality and says he will ride south the next day.',
      },
    ),
    onScreen(
      [4, 29],
      { it: 'Catturato alla locanda', en: 'Taken at the inn' },
      {
        it: 'Diretto a sud con [[yoren|Yoren]], Tyrion si ferma a Grande Inverno, dove [[robb-stark|Robb]] non lo vuole come ospite. Regala a [[bran-stark|Bran]] il disegno di una sella che gli permetterà di cavalcare di nuovo, perché ha un debole per storpi, bastardi e cose rotte, e poi preferisce il bordello del villaggio. Alla locanda all’incrocio un mercenario gli cede la sua stanza per una moneta d’oro. Il cantastorie [[marillion|Marillion]] si offre di cantare le vittorie di suo padre e attira la sua attenzione su [[catelyn-stark|Catelyn Stark]], che Tyrion saluta sorpreso. Lei lo accusa di aver tentato di far uccidere suo figlio Bran, e alcuni uomini armati lo circondano.',
        en: 'Heading south with [[yoren|Yoren]], Tyrion stops at Winterfell, where [[robb-stark|Robb]] makes it plain he is not welcome as a guest. He gives [[bran-stark|Bran]] the design of a saddle that will let him ride again, because he has a weakness for cripples, bastards and broken things, and then prefers the brothel in town. At the inn at the crossroads a sellsword gives up his room for a gold coin. The singer [[marillion|Marillion]] offers to sing of his father’s victories and draws his attention to [[catelyn-stark|Catelyn Stark]], whom Tyrion greets in surprise. She accuses him of trying to have her son Bran killed, and armed men surround him.',
      },
    ),
    inBooks(
      [4, 29],
      { it: 'Riconosciuta alla locanda', en: 'Recognised at the inn' },
      {
        it: 'Diretto a sud, Tyrion si ferma per la notte alla locanda all’incrocio di [[masha-heddle|Masha Heddle]] con le sue due guardie e con [[yoren|Yoren]] dei Guardiani della Notte. Compra una stanza da un altro cliente e rifiuta una canzone del cantastorie [[marillion|Marillion]]. Poi riconosce [[catelyn-stark|Catelyn Stark]], che viaggia in incognito con ser [[rodrik-cassel|Rodrik Cassel]], e la chiama per nome davanti a tutti. Catelyn si rivolge agli uomini nella sala giurati ai vassalli di suo padre e dice loro che Tyrion ha tentato di far uccidere suo figlio [[bran-stark|Bran]]. Gli uomini si schierano con lei, e Tyrion resta sbalordito.',
        en: 'Riding south, Tyrion stops for the night at [[masha-heddle|Masha Heddle]]’s inn at the crossroads with his two guardsmen and [[yoren|Yoren]] of the Night’s Watch. He buys a room from another guest and turns down a song from the singer [[marillion|Marillion]]. Then he recognises [[catelyn-stark|Catelyn Stark]], who is travelling in secret with Ser [[rodrik-cassel|Rodrik Cassel]], and says her name before the whole room. Catelyn calls on the men there who are sworn to her father’s bannermen, and tells them that Tyrion tried to have her son [[bran-stark|Bran]] killed. The men take her side, and Tyrion is left in shock.',
      },
    ),
    inBooks(
      [5, 32],
      { it: 'La strada alta', en: 'The high road' },
      {
        it: '[[catelyn-stark|Catelyn]] ha detto che porterà Tyrion a Grande Inverno, ma la sua compagnia, con cavalieri, mercenari e un cantastorie, prende invece la strada alta attraverso le Montagne della Luna, verso la sorella di lei. Con loro c’è il mercenario [[bronn|Bronn]], che si è unito nella speranza di una ricompensa. Tyrion racconta a Catelyn che [[petyr-baelish|Ditocorto]] si vanta a corte di essere stato il primo uomo di lei. Quando i clan delle montagne li attaccano, Catelyn fa armare Tyrion, e lui la salva quando tre di loro la mettono alle strette. Lei continua a non fidarsi, e Tyrion le fa notare che lui non avrebbe mai scommesso contro suo fratello [[jaime-lannister|Jaime]]: il racconto di Ditocorto sul pugnale non regge.',
        en: '[[catelyn-stark|Catelyn]] has said she is taking Tyrion to Winterfell, but her party, with knights, sellswords and a singer, takes the high road through the Mountains of the Moon instead, towards her sister. With them rides the sellsword [[bronn|Bronn]], who has joined in the hope of a reward. Tyrion tells Catelyn that [[petyr-baelish|Littlefinger]] boasts at court of having taken her maidenhead. When the mountain clans attack, Catelyn lets Tyrion be armed, and he saves her when three of them corner her. She still does not trust him, and he points out that he would never have bet against his brother [[jaime-lannister|Jaime]]: Littlefinger’s tale of the dagger does not hold.',
      },
    ),
    onScreen(
      [5, 35],
      { it: 'Le celle del cielo', en: 'The sky cells' },
      {
        it: 'Quando gli tolgono la benda, Tyrion scopre che [[catelyn-stark|Catelyn]] non lo sta portando a Grande Inverno ma nella Valle. Le ricorda che suo padre ricompenserà chi lo riporterà a casa sano e salvo, cosa che interessa al mercenario [[bronn|Bronn]], e sostiene che solo un idiota armerebbe un sicario con la propria lama. Quando una delle tribù delle montagne attacca la compagnia, Tyrion combatte, uccide il suo primo uomo e salva la vita a Catelyn. Al Nido dell’Aquila [[lysa-arryn|Lysa Arryn]], che governa per il figlio [[robin-arryn|Robin]], lo accusa di aver avuto parte nella morte di suo marito e lo fa gettare in una cella del cielo, aperta da un lato su uno strapiombo.',
        en: 'When his blindfold comes off, Tyrion finds that [[catelyn-stark|Catelyn]] is taking him not to Winterfell but to the Vale. He reminds her that his father will reward whoever brings him back safe, which catches the interest of the sellsword [[bronn|Bronn]], and argues that only an idiot would arm an assassin with his own blade. When one of the hill tribes attacks the party, Tyrion fights, kills his first man and saves Catelyn’s life. At the Eyrie [[lysa-arryn|Lysa Arryn]], who holds court for her young son [[robin-arryn|Robin]], accuses him of a part in her husband’s death and has him thrown into a sky cell, open on one side to a sheer drop.',
      },
    ),
    onScreen(
      [6, 41],
      {
        it: 'Questo piccolo uomo torna a casa',
        en: 'This little man is going home',
      },
      {
        it: 'Nella cella del cielo Tyrion rischia di rotolare nel vuoto mentre dorme. Promette il suo oro al carceriere [[mord|Mord]] se porterà un messaggio a [[lysa-arryn|Lysa]]. Davanti alla sua corte confessa soltanto di essere un bugiardo e un puttaniere, poi chiede un processo per combattimento. Ser [[vardis-egen|Vardis Egen]] combatterà per Lysa. Tyrion sceglie il fratello [[jaime-lannister|Jaime]], ma Lysa non vuole aspettarlo. Dopo un lungo silenzio si fa avanti il mercenario [[bronn|Bronn]], che lascia stancare Vardis nella sua armatura, lo uccide e ne getta il corpo dalla Porta della Luna. Tyrion paga Mord, dice al piccolo [[robin-arryn|Robin]] che questo piccolo uomo torna a casa e se ne va con Bronn.',
        en: 'In the sky cell Tyrion nearly rolls out in his sleep. He promises the gaoler [[mord|Mord]] his gold if Mord carries a message to [[lysa-arryn|Lysa]]. Before her court he confesses only to being a liar and a whoremonger, then demands a trial by combat. Ser [[vardis-egen|Vardis Egen]] will fight for Lysa. Tyrion names his brother [[jaime-lannister|Jaime]], but Lysa will not wait for him. After a long silence the sellsword [[bronn|Bronn]] steps forward. Bronn lets Vardis tire in his armour, kills him and sends the body through the Moon Door. Tyrion pays Mord, tells young [[robin-arryn|Robin]] that this little man is going home, and leaves with Bronn.',
      },
    ),
    inBooks(
      [6, 41],
      { it: 'Il processo al Nido dell’Aquila', en: 'The trial at the Eyrie' },
      {
        it: 'Al Nido dell’Aquila [[lysa-arryn|Lysa Arryn]] accusa Tyrion dell’omicidio di suo marito, Jon Arryn, e lo fa chiudere in una cella del cielo, dove il carceriere [[mord|Mord]] gli prende il mantello. Tyrion chiede un processo per combattimento per dimostrare la propria innocenza. Ser [[vardis-egen|Vardis Egen]] viene scelto come campione di Lysa, ma non vuole battersi con un uomo della statura di Tyrion, così Tyrion chiede un campione per sé, e risponde il mercenario [[bronn|Bronn]]. Vardis combatte in un’armatura pesante, e Bronn si muove rapido finché il vecchio cavaliere non si stanca, poi gli fa crollare addosso una statua e lo uccide. Lysa lascia partire Tyrion e Bronn lungo la strada alta.',
        en: 'At the Eyrie [[lysa-arryn|Lysa Arryn]] accuses Tyrion of murdering her husband, Jon Arryn, and has him locked in a sky cell, where the gaoler [[mord|Mord]] takes his coat. Tyrion demands a trial by combat to prove his innocence. Ser [[vardis-egen|Vardis Egen]] is chosen as Lysa’s champion but will not fight a man of Tyrion’s size, so Tyrion calls for a champion of his own, and the sellsword [[bronn|Bronn]] answers. Vardis fights in heavy plate, and Bronn moves quickly until the older knight tires, then topples a statue onto him and kills him. Lysa lets Tyrion and Bronn leave by the high road.',
      },
    ),
    inBooks(
      [8, 43],
      { it: 'I Corvi di Pietra', en: 'The Stone Crows' },
      {
        it: 'Sulla via del ritorno attraverso le montagne, [[bronn|Bronn]] entra al servizio di Tyrion come spada a pagamento. Tyrion gli racconta la verità su Tysha, la figlia di un contadino che aveva sposato a tredici anni, un matrimonio che suo padre fece annullare. Quando i clan delle montagne li sorprendono, [[shagga|Shagga]] dei Corvi di Pietra vuole ucciderli, ma Tyrion lo convince a desistere promettendo armi e ricchezze. I Corvi di Pietra seguono Tyrion.',
        en: 'On the road back through the mountains, [[bronn|Bronn]] enters Tyrion’s service as a hired sword. Tyrion tells him the truth about Tysha, the crofter’s daughter he married when he was thirteen, a marriage his father had undone. When the mountain clans come upon them, [[shagga|Shagga]] of the Stone Crows means to kill them, but Tyrion talks him out of it with promises of weapons and wealth. The Stone Crows follow Tyrion.',
      },
    ),
    onScreen(
      [8, 57],
      { it: 'Le tribù delle montagne', en: 'The hill tribes' },
      {
        it: 'Tyrion promette a [[bronn|Bronn]] di pagarlo più di chiunque provi a comprarlo per tradirlo. Sulle montagne le tribù guidate da [[shagga|Shagga]] li circondano, e Shagga ordina di ucciderli, ma Tyrion offre armi e le terre della Valle in cambio del loro aiuto. Con Shagga, [[timett|Timmet]] e [[chella|Chella]] raggiunge l’esercito del padre, dove [[tywin-lannister|Tywin]], con [[kevan-lannister|Kevan]] al suo fianco, gli dice che re [[robert-baratheon|Robert]] è morto e che [[eddard-stark|Eddard Stark]] è prigioniero. Quando Shagga dice che le tribù combatteranno solo se Tyrion combatterà con loro, Tywin acconsente, con grande sgomento di Tyrion.',
        en: 'Tyrion promises [[bronn|Bronn]] to pay more than anyone who might bribe him to betray him. In the mountains the hill tribes led by [[shagga|Shagga]] surround them, and Shagga orders them killed, but Tyrion offers weapons and the lands of the Vale in exchange for their help. With Shagga, [[timett|Timett]] and [[chella|Chella]] he reaches his father’s army, where [[tywin-lannister|Tywin]], with [[kevan-lannister|Kevan]] at his side, tells him that King [[robert-baratheon|Robert]] is dead and [[eddard-stark|Eddard Stark]] imprisoned. When Shagga says the tribes will fight only if Tyrion fights beside them, Tywin agrees, to Tyrion’s dismay.',
      },
    ),
    onScreen(
      [9, 63],
      {
        it: 'La notte prima della battaglia',
        en: 'The night before the battle',
      },
      {
        it: '[[tywin-lannister|Tywin]] ordina a Tyrion di guidare le tribù delle montagne in prima linea, nell’avanguardia, e Tyrion lo accusa di volerlo morto. Nella sua tenda trova [[shae|Shae]], la ragazza che [[bronn|Bronn]] gli ha procurato. Durante un gioco a chi beve Tyrion non riesce a capire chi sia, e racconta di Tysha, che aveva sposato in segreto finché suo padre non costrinse [[jaime-lannister|Jaime]] a dirgli che era una puttana pagata da Jaime. Il mattino dopo, mentre le tribù caricano, un colpo di martello da guerra sferrato per sbaglio lo stende. Si risveglia a battaglia finita: i Lannister hanno vinto, ma contro una finta, mentre il grosso dell’esercito di [[robb-stark|Robb Stark]] marciava contro Jaime.',
        en: '[[tywin-lannister|Tywin]] orders Tyrion to lead the hill tribes from the front of the vanguard, and Tyrion accuses him of wanting him dead. In his tent he finds [[shae|Shae]], the girl [[bronn|Bronn]] has found for him. Over a drinking game Tyrion fails to read her, and tells the story of Tysha, whom he married in secret until his father made [[jaime-lannister|Jaime]] tell him she was a whore Jaime had paid. The next morning, as the tribes charge, a stray blow from a war hammer knocks him out. He wakes after the battle: the Lannisters have won, but against a feint, while the main army of [[robb-stark|Robb Stark]] marched on Jaime.',
      },
    ),
    inBooks(
      [9, 63],
      {
        it: 'La battaglia della Forca Verde',
        en: 'The battle on the Green Fork',
      },
      {
        it: 'Tyrion ha raggiunto l’esercito del padre alla locanda all’incrocio con i clan delle montagne. [[bronn|Bronn]] gli trova una ragazza di nome [[shae|Shae]], portandola via a un cavaliere, e lo zio [[kevan-lannister|Kevan]] gli assegna uno scudiero. [[tywin-lannister|Tywin]] mette Tyrion e i suoi uomini nell’avanguardia, sotto il comando di ser [[gregor-clegane|Gregor Clegane]]. Nella battaglia della Forca Verde Tyrion non cede e tiene la linea. Tywin lo aveva messo lì sperando che lui e i clan, inesperti e indisciplinati, fuggissero trascinando gli Stark in una trappola: la tenuta di Tyrion manda all’aria il piano.',
        en: 'Tyrion has reached his father’s army at the inn at the crossroads with the mountain clans. [[bronn|Bronn]] finds him a girl named [[shae|Shae]], taking her from a knight, and his uncle [[kevan-lannister|Kevan]] gives him a squire. [[tywin-lannister|Tywin]] puts Tyrion and his clansmen in the vanguard, under Ser [[gregor-clegane|Gregor Clegane]]. In the battle on the Green Fork Tyrion does not give way and holds the line. Tywin had put him there hoping that he and the clans, untried and undisciplined, would break and run and draw the Starks into a trap: Tyrion holding his ground ruins the plan.',
      },
    ),
    inBoth(
      [10, 70],
      {
        it: 'Primo Cavaliere in vece del padre',
        en: 'Acting Hand of the King',
      },
      {
        it: 'Arriva la notizia che [[robb-stark|Robb Stark]] ha fatto prigioniero in battaglia [[jaime-lannister|Jaime]]. Il padre di Tyrion, [[tywin-lannister|Tywin]], nominato Primo Cavaliere dal nuovo re, manda Tyrion ad Approdo del Re a fare le sue veci, e a tenere a freno la sorella [[cersei-lannister|Cersei]] e suo figlio [[joffrey-baratheon|Joffrey]]. Tywin gli proibisce di portare a corte la sua puttana. Tyrion porta con sé [[shae|Shae]] lo stesso.',
        en: 'News comes that [[robb-stark|Robb Stark]] has taken [[jaime-lannister|Jaime]] prisoner in battle. Tyrion’s father [[tywin-lannister|Tywin]], whom the new king has named Hand, sends Tyrion to King’s Landing to act as Hand of the King in his place, and to keep his sister [[cersei-lannister|Cersei]] and her son [[joffrey-baratheon|Joffrey]] in check. Tywin forbids him to take his whore to court. Tyrion takes [[shae|Shae]] with him all the same.',
      },
    ),
  ],
  // Chapter 5 only shows Jaime riding in beside the prince, so the book side
  // opens at chapter 9, where he acts.
  'jaime-lannister': [
    onScreen(
      [1, 5],
      { it: 'Le cose che faccio per amore', en: 'The things I do for love' },
      {
        it: 'Ad Approdo del Re Jaime, cavaliere della Guardia reale, rassicura la sorella gemella [[cersei-lannister|Cersei]], che teme che il defunto Primo Cavaliere Jon Arryn abbia scoperto il loro segreto: se il re lo sapesse, dice Jaime, sarebbero già morti. Va a nord con re [[robert-baratheon|Robert]] e, a Grande Inverno, va a prendere il fratello [[tyrion-lannister|Tyrion]] in un bordello per il banchetto. Il giorno dopo, in una torre abbandonata, lui e Cersei fanno l’amore quando [[bran-stark|Bran Stark]] li vede da una finestra. Jaime afferra il ragazzo, gli chiede quanti anni ha, dice che sono cose che fa per amore e lo spinge di sotto.',
        en: 'In King’s Landing Jaime, a knight of the Kingsguard, calms his twin sister [[cersei-lannister|Cersei]], who fears that the dead Hand, Jon Arryn, discovered their secret: if the king knew, Jaime says, they would already be dead. He rides north with King [[robert-baratheon|Robert]] and, at Winterfell, fetches his brother [[tyrion-lannister|Tyrion]] from a brothel for the feast. The next day, in an abandoned tower, he and Cersei are making love when [[bran-stark|Bran Stark]] sees them through a window. Jaime grabs the boy, asks his age, says that these are the things he does for love, and pushes him out.',
      },
    ),
    inBooks(
      [1, 9],
      { it: 'La torre abbandonata', en: 'The abandoned tower' },
      {
        it: 'Mentre si arrampica a Grande Inverno, [[bran-stark|Bran Stark]] sente due voci nella torre abbandonata parlare della scelta di re [[robert-baratheon|Robert]] di nominare Primo Cavaliere [[eddard-stark|Eddard Stark]]. Guardando da una finestra, vede la regina [[cersei-lannister|Cersei]] nuda con un uomo: suo fratello Jaime. Bran scivola, e Jaime lo tira su. Chiede al ragazzo quanti anni ha, dice “le cose che facciamo per amore” e lo getta dalla finestra.',
        en: 'While [[bran-stark|Bran Stark]] climbs at Winterfell, he hears two voices in the abandoned tower talking about King [[robert-baratheon|Robert]]’s choice of [[eddard-stark|Eddard Stark]] as his Hand. Looking in through a window, he sees the queen, [[cersei-lannister|Cersei]], naked with a man: her brother Jaime. Bran slips, and Jaime pulls him back up. He asks the boy how old he is, says “the things we do for love”, and throws him from the window.',
      },
    ),
    onScreen(
      [3, 21],
      { it: 'Bruciateli tutti', en: 'Burn them all' },
      {
        it: 'Nella sala del trono di Approdo del Re Jaime aspetta [[eddard-stark|Eddard Stark]], che lo giudica ancora per aver ucciso il Re Folle Aerys e per essersi poi seduto sul Trono di Spade. Jaime non si pente. Quando arriva la notizia che [[bran-stark|Bran]] si riprenderà, rassicura [[cersei-lannister|Cersei]], che teme che il ragazzo li tradisca. Più tardi re [[robert-baratheon|Robert]], che scambia racconti di guerra con ser [[barristan-selmy|Barristan Selmy]], chiede a Jaime quali furono le ultime parole di Aerys. Jaime risponde che il re che ha ucciso ripeteva quello che diceva da ore: bruciateli tutti.',
        en: 'In the throne room of King’s Landing Jaime waits for [[eddard-stark|Eddard Stark]], who still judges him for killing the Mad King Aerys and then sitting on the Iron Throne. Jaime is unrepentant. When word comes that [[bran-stark|Bran]] will recover, he comforts [[cersei-lannister|Cersei]], who fears the boy will expose them. Later King [[robert-baratheon|Robert]], swapping war stories with Ser [[barristan-selmy|Barristan Selmy]], asks Jaime what Aerys’s last words were. Jaime answers that the king he killed kept repeating what he had been saying for hours: burn them all.',
      },
    ),
    inBoth(
      [5, 36],
      { it: 'Lo scontro per strada', en: 'The fight in the street' },
      {
        it: 'Quando Jaime viene a sapere che [[catelyn-stark|Catelyn Stark]] ha fatto prigioniero suo fratello [[tyrion-lannister|Tyrion]], aspetta con i suoi uomini [[eddard-stark|Eddard Stark]], che esce da un bordello di Approdo del Re. Eddard dice che l’arresto è avvenuto per suo ordine e avverte che, se morirà lui, morirà anche Tyrion. Jaime lo risparmia e fa uccidere invece le sue guardie. Nello scontro muore [[jory-cassel|Jory Cassel]], il capitano della guardia di Eddard. Eddard resta ferito a una gamba, e Jaime lascia la città.',
        en: 'When Jaime hears that [[catelyn-stark|Catelyn Stark]] has taken his brother [[tyrion-lannister|Tyrion]] prisoner, he waits with his men for [[eddard-stark|Eddard Stark]] as Eddard leaves a brothel in King’s Landing. Eddard says the arrest was made on his orders and warns that if he dies, Tyrion will die too. Jaime spares him and has his men kill Eddard’s guards instead. [[jory-cassel|Jory Cassel]], the captain of Eddard’s guard, dies in the fight. Eddard is left wounded in the leg, and Jaime leaves the city.',
      },
    ),
    onScreen(
      [7, 57],
      { it: 'Una dinastia o niente', en: 'A dynasty or nothing' },
      {
        it: 'Jaime raggiunge l’esercito del padre [[tywin-lannister|Tywin]] al confine delle Terre dei Fiumi, mentre Tywin scuoia un cervo nella sua tenda. Tywin gli rimprovera di aver lasciato vivere [[eddard-stark|Eddard Stark]] solo perché la sua vittoria per strada non era stata pulita. La guerra, dice, deciderà se la loro famiglia fonderà una dinastia destinata a durare mille anni o si estinguerà come i Targaryen. Affida a Jaime trentamila uomini e lo manda ad assediare il castello dei Tully, la famiglia di [[catelyn-stark|Catelyn]], che aveva preso prigioniero [[tyrion-lannister|Tyrion]].',
        en: 'Jaime joins the army of his father [[tywin-lannister|Tywin]] at the border of the riverlands, where Tywin is skinning a stag in his tent. Tywin reproaches him for letting [[eddard-stark|Eddard Stark]] live because his victory in the street was not clean. The war, Tywin says, will decide whether their family founds a dynasty to last a thousand years or dies out like the Targaryens. He gives Jaime thirty thousand men and sends him to besiege the castle of the Tullys, the family of [[catelyn-stark|Catelyn]], who took [[tyrion-lannister|Tyrion]] prisoner.',
      },
    ),
    inBoth(
      [8, 58],
      { it: 'Lord Comandante', en: 'Lord Commander' },
      {
        it: 'Jaime è lontano, alla guerra, alla testa di un esercito dei Lannister contro i Tully nelle Terre dei Fiumi. Ad Approdo del Re re [[robert-baratheon|Robert]] è morto e sul Trono di Spade siede [[joffrey-baratheon|Joffrey]]. Davanti alla corte ser [[barristan-selmy|Barristan Selmy]] viene congedato dalla Guardia reale, in cui i cavalieri servono a vita, e Jaime viene nominato Lord Comandante al suo posto, anche se non è presente.',
        en: 'Jaime is away at the war, leading a Lannister army against the Tullys in the riverlands. In King’s Landing, King [[robert-baratheon|Robert]] is dead and [[joffrey-baratheon|Joffrey]] sits on the Iron Throne. Before the court, Ser [[barristan-selmy|Barristan Selmy]] is dismissed from the Kingsguard, in which knights serve for life, and Jaime is named Lord Commander in his place, though he is not there to hear it.',
      },
    ),
    onScreen(
      [9, 64],
      { it: 'Fatto prigioniero', en: 'Taken prisoner' },
      {
        it: 'Jaime assedia il castello dei Tully quando [[robb-stark|Robb Stark]] manda una parte del suo esercito contro [[tywin-lannister|Tywin]] come diversivo e con il resto si getta su quello di Jaime. Jaime esce per affrontare quella che sembra una piccola pattuglia di esploratori e viene fatto prigioniero. Portato davanti a Robb e a [[catelyn-stark|Catelyn]], propone di chiudere la guerra con un duello tra lui e Robb. Robb rifiuta e lo fa tenere prigioniero.',
        en: 'Jaime is besieging the castle of the Tullys when [[robb-stark|Robb Stark]] sends part of his army against [[tywin-lannister|Tywin]] as a feint and falls on Jaime’s army with the rest. Jaime rides out against what looks like a small scouting party and is taken prisoner. Brought before Robb and [[catelyn-stark|Catelyn]], he offers to end the war in single combat with Robb. Robb refuses and has him held prisoner.',
      },
    ),
    inBooks(
      [9, 64],
      { it: 'Il Bosco dei Sussurri', en: 'The Whispering Wood' },
      {
        it: 'Nella battaglia del Bosco dei Sussurri, vinta da [[robb-stark|Robb Stark]], Jaime cerca di aprirsi la strada fino a Robb e uccide due figli di lord Karstark, Eddard e Torrhen, prima di essere fatto prigioniero. Quando viene portato davanti a Robb dopo la battaglia, molti dei suoi alfieri ne vogliono la morte, e Jaime deve essere protetto da loro, soprattutto dal padre dei due giovani che ha ucciso.',
        en: 'In the battle in the Whispering Wood, which [[robb-stark|Robb Stark]] wins, Jaime tries to cut his way to Robb himself and kills two sons of Lord Karstark, Eddard and Torrhen, before he is taken prisoner. When he is brought before Robb after the battle, many of Robb’s bannermen want him executed, and he has to be protected from them, above all from the father of the two young men he killed.',
      },
    ),
    onScreen(
      [10, 72],
      { it: 'Solo io', en: 'Only me' },
      {
        it: '[[catelyn-stark|Catelyn]] va a trovare Jaime nella sua prigione. Lui la schernisce per la morte di [[eddard-stark|Eddard]] e le offre di diventare il suo amante, e lei lo colpisce alla testa con una pietra. Jaime dice di non temere la morte e le chiede dov’erano i suoi dei quando a suo marito tagliarono la testa. Quando lei risponde che al mondo c’è ingiustizia per colpa di uomini come lui, Jaime ribatte che non esistono uomini come lui, esiste solo lui. Ammette di aver spinto [[bran-stark|Bran]] giù dalla torre, ma non dice perché.',
        en: '[[catelyn-stark|Catelyn]] visits Jaime where he is held prisoner. He taunts her about [[eddard-stark|Eddard]]’s death and offers to be her lover, and she strikes him on the head with a rock. Jaime says he does not fear death and asks where her gods were when her husband’s head was cut off. When she says there is injustice in the world because of men like him, he answers that there are no men like him, only him. He admits that he pushed [[bran-stark|Bran]] from the tower, but does not say why.',
      },
    ),
  ],
  'tywin-lannister': [
    onScreen(
      [7, 57],
      { it: 'Il cervo', en: 'The stag' },
      {
        it: 'Lord Tywin Lannister, signore di Castel Granito, ha radunato un esercito di sessantamila uomini al confine delle Terre dei Fiumi per punire la cattura di suo figlio [[tyrion-lannister|Tyrion]] da parte di [[catelyn-stark|Catelyn]]. Mentre scuoia un cervo nella sua tenda, dice al figlio maggiore [[jaime-lannister|Jaime]] che la guerra deciderà se la loro famiglia fonderà una dinastia destinata a durare mille anni o si estinguerà come i Targaryen. Manda Jaime con trentamila uomini ad assediare il castello dei Tully. Considera Tyrion il meno degno della famiglia, ma ogni offesa a un Lannister va punita.',
        en: 'Lord Tywin Lannister of Casterly Rock has gathered an army of sixty thousand men at the border of the riverlands, to punish [[catelyn-stark|Catelyn]]’s capture of his son [[tyrion-lannister|Tyrion]]. Skinning a stag in his tent, he tells his elder son [[jaime-lannister|Jaime]] that the war will decide whether their family founds a dynasty to last a thousand years or dies out like the Targaryens. He sends Jaime with thirty thousand men to besiege the Tullys’ castle. He holds Tyrion the least worthy of the family, but any affront to a Lannister must be punished.',
      },
    ),
    inBooks(
      [8, 57],
      { it: 'I clan alla locanda', en: 'The clans at the inn' },
      {
        it: 'Lord Tywin Lannister occupa con il suo esercito la locanda all’incrocio, e il fratello [[kevan-lannister|Kevan]] comanda al suo fianco. Il figlio maggiore [[jaime-lannister|Jaime]] ha guidato un altro esercito dei Lannister contro i Tully nelle Terre dei Fiumi. Il figlio minore [[tyrion-lannister|Tyrion]] lo raggiunge lì con i clan delle montagne che ha conquistato promettendo armi e ricchezze: [[shagga|Shagga]] dei Corvi di Pietra, [[timett|Timmet]] degli Uomini Bruciati e [[chella|Chella]] delle Orecchie Nere, che si uniscono all’esercito di Tywin.',
        en: 'Lord Tywin Lannister holds the inn at the crossroads with his army, and his brother [[kevan-lannister|Kevan]] commands at his side. His elder son [[jaime-lannister|Jaime]] has led another Lannister army against the Tullys in the riverlands. His younger son [[tyrion-lannister|Tyrion]] reaches him there with the mountain clans he has won over with promises of weapons and wealth: [[shagga|Shagga]] of the Stone Crows, [[timett|Timett]] of the Burned Men and [[chella|Chella]] of the Black Ears, who join Tywin’s army.',
      },
    ),
    onScreen(
      [9, 63],
      { it: 'L’avanguardia', en: 'The vanguard' },
      {
        it: '[[tyrion-lannister|Tyrion]] arriva all’accampamento di Tywin con [[shagga|Shagga]], [[timett|Timmet]] e [[chella|Chella]] delle tribù delle montagne. Tywin accetta l’alleanza, e lo diverte che le tribù combattano solo se Tyrion combatte con loro. Quando gli dicono che l’esercito degli Stark scende verso sud, prevede di battere [[robb-stark|Robb Stark]], un ragazzo inesperto. Prima della battaglia mette le tribù nell’avanguardia e ordina a Tyrion di guidarle in prima linea. I Lannister vincono, ma le forze degli Stark che hanno sconfitto sono molto meno numerose del previsto: Robb ha portato il resto del suo esercito contro [[jaime-lannister|Jaime]] e lo ha fatto prigioniero.',
        en: '[[tyrion-lannister|Tyrion]] reaches Tywin’s camp with [[shagga|Shagga]], [[timett|Timett]] and [[chella|Chella]] of the hill tribes. Tywin accepts the alliance, and is amused when the tribes say they will fight only if Tyrion fights with them. Told that the Stark army is moving south, he predicts victory over [[robb-stark|Robb Stark]], a green boy. Before the battle he puts the tribes in the vanguard and orders Tyrion to lead them from the front. The Lannisters win, but the Stark force they beat is far smaller than reported: Robb has led the rest of his army against [[jaime-lannister|Jaime]] and taken him prisoner.',
      },
    ),
    inBooks(
      [9, 63],
      { it: 'Nella speranza che fuggissero', en: 'Hoping they would break' },
      {
        it: 'Prima della battaglia della Forca Verde, Tywin mette il figlio [[tyrion-lannister|Tyrion]] e i clan delle montagne nell’avanguardia, sotto il comando di ser [[gregor-clegane|Gregor Clegane]]. Si aspetta che Tyrion, inesperto, e i clan, indisciplinati, cedano e fuggano, così che gli Stark li inseguano dentro una trappola. Invece Tyrion tiene la linea, e il piano fallisce. Il fratello di Tywin, [[kevan-lannister|Kevan]], comanda al suo fianco e prima della battaglia assegna a Tyrion uno scudiero.',
        en: 'Before the battle on the Green Fork, Tywin places his son [[tyrion-lannister|Tyrion]] and the mountain clans in the vanguard, under Ser [[gregor-clegane|Gregor Clegane]]. He expects the untried Tyrion and the undisciplined clansmen to break and run, so that the Starks will pursue them into a trap. Instead Tyrion holds the line, and the plan fails. Tywin’s brother [[kevan-lannister|Kevan]] commands at his side and, before the battle, gives Tyrion a squire.',
      },
    ),
    inBoth(
      [10, 70],
      { it: 'Un Primo Cavaliere al suo posto', en: 'A Hand in his place' },
      {
        it: '[[robb-stark|Robb Stark]] ha fatto prigioniero in battaglia il figlio maggiore di Tywin, [[jaime-lannister|Jaime]]. Tywin, che il nuovo re [[joffrey-baratheon|Joffrey]] ha nominato Primo Cavaliere, tiene consiglio con il fratello [[kevan-lannister|Kevan]] e i suoi comandanti. Manda il figlio minore [[tyrion-lannister|Tyrion]] ad Approdo del Re a fare le sue veci come Primo Cavaliere, e a tenere a freno sua figlia [[cersei-lannister|Cersei]] e il figlio di lei. Proibisce a Tyrion di portare a corte la sua puttana.',
        en: '[[robb-stark|Robb Stark]] has taken Tywin’s elder son [[jaime-lannister|Jaime]] prisoner in battle. Tywin, whom the new king [[joffrey-baratheon|Joffrey]] has named Hand of the King, holds council with his brother [[kevan-lannister|Kevan]] and his captains. He sends his younger son [[tyrion-lannister|Tyrion]] to King’s Landing to act as Hand in his place and to keep his daughter [[cersei-lannister|Cersei]] and her son in check. He forbids Tyrion to take his whore to court.',
      },
    ),
  ],
  'kevan-lannister': [
    inBoth(
      [8, 57],
      { it: 'Accanto al fratello', en: 'At his brother’s side' },
      {
        it: 'Ser Kevan Lannister è il fratello minore di lord [[tywin-lannister|Tywin]] e comanda al suo fianco nell’esercito dei Lannister. È con Tywin quando il figlio di lui, suo nipote [[tyrion-lannister|Tyrion]], raggiunge l’esercito con il mercenario [[bronn|Bronn]] e i guerrieri dei clan delle montagne, guidati da [[shagga|Shagga]], [[timett|Timmet]] e [[chella|Chella]]. Tyrion ha conquistato i clan con promesse di armi e ricchezze, e i clan si uniscono all’esercito di Tywin.',
        en: 'Ser Kevan Lannister is the younger brother of Lord [[tywin-lannister|Tywin]] and commands at his side in the Lannister army. He is with Tywin when Tywin’s son, his nephew [[tyrion-lannister|Tyrion]], reaches the army with the sellsword [[bronn|Bronn]] and the warriors of the mountain clans, led by [[shagga|Shagga]], [[timett|Timett]] and [[chella|Chella]]. Tyrion has won the clans over with promises of weapons and wealth, and they join Tywin’s army.',
      },
    ),
    onScreen(
      [10, 70],
      { it: 'Una guerra su più fronti', en: 'A war on every side' },
      {
        it: 'Dopo la cattura di [[jaime-lannister|Jaime]] da parte di [[robb-stark|Robb Stark]], Kevan siede al consiglio del fratello [[tywin-lannister|Tywin]] e definisce la guerra una catastrofe. Riferisce che sia [[renly-baratheon|Renly]] sia Stannis Baratheon hanno reclamato il Trono di Spade, e che gli Stark e i Tully hanno unito i loro eserciti. Con metà delle loro forze distrutta, chiede se non convenga trattare la pace con Robb. Il nipote [[tyrion-lannister|Tyrion]] risponde che ogni speranza di pace è morta con [[eddard-stark|Eddard Stark]]. Tywin decide di ripiegare con Kevan su Harrenhal.',
        en: 'After [[jaime-lannister|Jaime]] is captured by [[robb-stark|Robb Stark]], Kevan sits at the council of his brother [[tywin-lannister|Tywin]] and calls the war a catastrophe. He reports that both [[renly-baratheon|Renly]] and Stannis Baratheon have claimed the Iron Throne, and that the Starks and the Tullys have joined their armies. With half their forces destroyed, he asks whether they should seek peace with Robb. His nephew [[tyrion-lannister|Tyrion]] answers that any chance of peace died with [[eddard-stark|Eddard Stark]]. Tywin decides to fall back on Harrenhal with Kevan.',
      },
    ),
  ],
  // The show tells the twins in episode 1, the books in site chapter 9 (Bran
  // II); the arrival comes first in the books, at chapter 5.
  'cersei-lannister': [
    inBooks(
      [1, 5],
      { it: 'L’arrivo a Grande Inverno', en: 'The arrival at Winterfell' },
      {
        it: 'Cersei è la regina dei Sette Regni, moglie di re [[robert-baratheon|Robert]]. Arriva a Grande Inverno con il re, i figli e i fratelli [[jaime-lannister|Jaime]] e [[tyrion-lannister|Tyrion]]. [[eddard-stark|Eddard Stark]] le bacia l’anello, mentre Robert abbraccia la moglie di lui. Appena fatte le presentazioni, Robert chiede di scendere nelle cripte del castello per rendere omaggio a Lyanna, la sorella di Eddard, e Cersei non ne è contenta.',
        en: 'Cersei is the queen of the Seven Kingdoms, King [[robert-baratheon|Robert]]’s wife. She reaches Winterfell with the king, their children and her brothers [[jaime-lannister|Jaime]] and [[tyrion-lannister|Tyrion]]. [[eddard-stark|Eddard Stark]] kisses her ring, while Robert embraces his wife. As soon as the children are introduced, Robert asks to go down to the castle’s crypts to pay his respects to Lyanna, Eddard’s sister, to Cersei’s displeasure.',
      },
    ),
    onScreen(
      [1, 9],
      { it: 'La torre abbandonata', en: 'The abandoned tower' },
      {
        it: 'Ad Approdo del Re Cersei veglia la salma di Jon Arryn, il Primo Cavaliere del Re, e teme che abbia scoperto qualcosa e l’abbia detto a qualcuno. Il fratello gemello [[jaime-lannister|Jaime]] la rassicura: se il re sapesse, sarebbero già morti. A Grande Inverno, mentre [[robert-baratheon|Robert]] è a caccia, Cersei e Jaime si incontrano in una torre abbandonata. [[bran-stark|Bran Stark]], che si arrampica sui muri, li vede fare l’amore. Cersei se ne accorge, Jaime afferra il ragazzo, gli chiede quanti anni ha e lo spinge giù dalla finestra.',
        en: 'In King’s Landing Cersei watches over the body of Jon Arryn, the Hand of the King, and fears that he found something out and told someone. Her twin brother [[jaime-lannister|Jaime]] reassures her: if the king knew, they would already be dead. At Winterfell, while [[robert-baratheon|Robert]] is out hunting, Cersei and Jaime meet in an abandoned tower. [[bran-stark|Bran Stark]], who is climbing the walls, sees them having sex. Cersei notices him, Jaime grabs the boy, asks how old he is and pushes him out of the window.',
      },
    ),
    inBooks(
      [1, 9],
      { it: 'Visti da Bran', en: 'Seen by Bran' },
      {
        it: 'Mentre il castello è quasi vuoto, Cersei e il fratello [[jaime-lannister|Jaime]] si appartano nella torre abbandonata di Grande Inverno. Parlano della nomina di [[eddard-stark|Eddard Stark]] a Primo Cavaliere del Re e del pericolo che viene dalla vedova di Jon Arryn, poi fanno l’amore. [[bran-stark|Bran Stark]], che si è arrampicato fin lì, li vede dalla finestra. Cersei se ne accorge. Jaime tira dentro il ragazzo, gli chiede quanti anni ha e lo getta giù dalla finestra.',
        en: 'While the castle is nearly empty, Cersei and her brother [[jaime-lannister|Jaime]] slip away to the abandoned tower of Winterfell. They talk about [[eddard-stark|Eddard Stark]]’s appointment as Hand of the King and the danger Jon Arryn’s widow poses, then have sex. [[bran-stark|Bran Stark]], who has climbed up there, sees them through the window. Cersei spots him. Jaime pulls the boy in, asks how old he is and throws him out of the window.',
      },
    ),
    onScreen(
      [2, 17],
      { it: 'Il figlio perduto', en: 'The lost son' },
      {
        it: 'A colazione [[tyrion-lannister|Tyrion]] annuncia che [[bran-stark|Bran]] dovrebbe sopravvivere, e Cersei porta via i figli quando lui comincia con le sue volgarità. Poi va al capezzale del ragazzo e racconta a [[catelyn-stark|Catelyn Stark]] che il suo primo figlio, un bel bambino dai capelli neri, morì di febbre. Sulla strada del Re il lupo di [[arya-stark|Arya]] morde [[joffrey-baratheon|Joffrey]]. Davanti al re, Cersei pretende la morte del lupo, e quando non lo trovano ottiene che al suo posto venga ucciso quello di [[sansa-stark|Sansa]], [[lady-direwolf|Lady]].',
        en: 'At breakfast [[tyrion-lannister|Tyrion]] announces that [[bran-stark|Bran]] is expected to live, and Cersei takes the children away when he turns crude. She then goes to the boy’s bedside and tells [[catelyn-stark|Catelyn Stark]] that her own first child, a beautiful black-haired boy, died of a fever. On the kingsroad [[arya-stark|Arya]]’s wolf bites [[joffrey-baratheon|Joffrey]]. Before the king, Cersei demands the wolf’s death, and when it cannot be found she has [[sansa-stark|Sansa]]’s wolf, [[lady-direwolf|Lady]], killed in its place.',
      },
    ),
    inBooks(
      [2, 17],
      { it: 'La pelliccia negata', en: 'The pelt she never gets' },
      {
        it: 'A colazione, quando [[tyrion-lannister|Tyrion]] dice che andrà a nord a pisciare giù dal bordo del mondo, Cersei si alza e porta via i figli. Durante il viaggio verso sud la lupa di [[arya-stark|Arya]] ferisce [[joffrey-baratheon|Joffrey]] a un braccio. Quando Arya viene portata davanti al re, Cersei pretende che il lupo venga ucciso e scuoiato. Poiché non lo trovano, re [[robert-baratheon|Robert]] acconsente che al suo posto muoia [[lady-direwolf|Lady]], la lupa di [[sansa-stark|Sansa]]. Cersei chiama ser Ilyn, ma [[eddard-stark|Eddard]] la uccide con le proprie mani e manda la pelle a nord, perché la regina non l’abbia mai.',
        en: 'At breakfast, when [[tyrion-lannister|Tyrion]] says he will go north to piss off the edge of the world, Cersei gets up and takes the children away. On the journey south [[arya-stark|Arya]]’s wolf wounds [[joffrey-baratheon|Joffrey]] in the arm. When Arya is brought before the king, Cersei demands that the wolf be killed and skinned. Since it cannot be found, King [[robert-baratheon|Robert]] agrees that [[lady-direwolf|Lady]], [[sansa-stark|Sansa]]’s wolf, will die in its place. Cersei calls for Ser Ilyn, but [[eddard-stark|Eddard]] kills Lady himself and sends the pelt north, so the queen never gets it.',
      },
    ),
    onScreen(
      [3, 21],
      { it: 'Chi non è dei nostri', en: 'Anyone who isn’t us' },
      {
        it: 'Ad Approdo del Re Cersei medica il braccio di [[joffrey-baratheon|Joffrey]], che le spiega come tratterebbe il Nord da re: tasse doppie, un esercito e la forza contro chi si oppone. Lei gli fa notare che il Nord è troppo vasto per essere conquistato e che un re deve essere più accorto. Gli consiglia di essere gentile con [[sansa-stark|Sansa]] e conclude che chiunque non sia dei loro è un nemico. Poi arriva la notizia che [[bran-stark|Bran]] si è svegliato. Cersei teme che riveli il loro segreto, ma [[jaime-lannister|Jaime]] la tranquillizza.',
        en: 'In King’s Landing Cersei tends [[joffrey-baratheon|Joffrey]]’s arm while he tells her how he would treat the North as king: double taxes, an army and force against anyone who objects. She points out that the North is too vast to be conquered and that a king must be cleverer. She tells him to be kind to [[sansa-stark|Sansa]] and concludes that anyone who isn’t them is an enemy. Then word comes that [[bran-stark|Bran]] has woken. Cersei fears he will give away their secret, but [[jaime-lannister|Jaime]] calms her.',
      },
    ),
    onScreen(
      [4, 30],
      { it: 'Nato per seguire', en: 'Born to follow' },
      {
        it: 'Durante il torneo del Primo Cavaliere [[robert-baratheon|Robert]], ubriaco, la mette in imbarazzo e lei se ne va. Cersei va a trovare [[eddard-stark|Eddard Stark]] nelle sue stanze e nota che il Primo Cavaliere non è al proprio torneo. Dice di voler lasciarsi alle spalle quanto accaduto sulla strada del Re, poi gli chiede che cosa sia venuto davvero a fare nella capitale. Quando lui risponde che è lì per servire il re, Cersei gli dice che, come suo fratello Brandon era nato per comandare, lui è nato per seguire.',
        en: 'During the Hand’s tourney a drunken [[robert-baratheon|Robert]] embarrasses her and she leaves. Cersei calls on [[eddard-stark|Eddard Stark]] in his chambers and remarks that the Hand is not at his own tourney. She says she wants to put what happened on the kingsroad behind them, then asks what he has really come to the capital for. When he answers that he is there to serve the king, Cersei tells him that just as his brother Brandon was born to lead, he was born to follow.',
      },
    ),
    inBooks(
      [5, 31],
      { it: 'La mischia', en: 'The melee' },
      {
        it: 'Alla festa che chiude il primo giorno del torneo del Primo Cavaliere, Cersei siede accanto a [[robert-baratheon|Robert]]. Verso la fine il re perde la pazienza e le urla davanti a tutti che domani combatterà nella mischia. La regina lascia la festa, e Robert la segue poco dopo. Il giorno seguente [[eddard-stark|Eddard]] e ser [[barristan-selmy|Barristan]] convincono il re a rinunciare. Quella notte [[varys|Varys]] rivela a Eddard che Cersei aveva progettato di far morire il re nella mischia e che ci riproverà.',
        en: 'At the feast that closes the first day of the Hand’s tourney, Cersei sits beside [[robert-baratheon|Robert]]. Towards the end the king loses his temper and shouts at her before everyone that he will fight in the melee tomorrow. The queen leaves the feast, and Robert follows soon after. The next day [[eddard-stark|Eddard]] and Ser [[barristan-selmy|Barristan]] talk the king out of it. That night [[varys|Varys]] tells Eddard that Cersei had planned to have the king killed in the melee, and that she will try again.',
      },
    ),
    onScreen(
      [5, 34],
      { it: 'Un vino con il re', en: 'A drink with the king' },
      {
        it: 'Dopo le dimissioni di [[eddard-stark|Eddard Stark]], Cersei beve un vino con [[robert-baratheon|Robert]] e parlano dei dothraki: lei fa notare che non hanno navi, lui le spiega perché li teme. Poi, per la prima volta in diciassette anni, Cersei gli chiede di Lyanna Stark. Robert ammette di non riuscire più a ricordare il suo viso. Lei gli dice di aver provato qualcosa per lui, anche dopo la morte del loro primo figlio, e gli chiede se il loro matrimonio abbia mai avuto una possibilità. Robert risponde di no.',
        en: 'After [[eddard-stark|Eddard Stark]] resigns, Cersei shares a drink with [[robert-baratheon|Robert]] and they discuss the Dothraki: she points out they have no ships, and he explains why he fears them. Then, for the first time in seventeen years, Cersei asks him about Lyanna Stark. Robert admits he can no longer remember her face. She tells him she felt something for him once, even after they lost their first boy, and asks whether their marriage ever had a chance. Robert answers no.',
      },
    ),
    inBoth(
      [6, 40],
      { it: 'Il livido', en: 'The bruise' },
      {
        it: 'Cersei accompagna [[robert-baratheon|Robert]] da [[eddard-stark|Eddard Stark]], ferito negli scontri con gli uomini di [[jaime-lannister|Jaime]]. È furiosa perché la moglie di Eddard ha preso prigioniero [[tyrion-lannister|Tyrion]] e pretende che il re lo punisca. Robert vuole prima sentire Eddard. Quando Cersei lo provoca mettendo in dubbio la sua virilità, Robert la colpisce al volto. Lei risponde che porterà quel livido con onore, ed esce. Poco dopo Robert restituisce a Eddard il titolo di Primo Cavaliere.',
        en: 'Cersei goes with [[robert-baratheon|Robert]] to see [[eddard-stark|Eddard Stark]], wounded in the fight with [[jaime-lannister|Jaime]]’s men. She is furious because Eddard’s wife has taken [[tyrion-lannister|Tyrion]] prisoner, and demands that the king punish him. Robert wants to hear Eddard first. When Cersei taunts him and mocks his manhood, Robert strikes her across the face. She answers that she will wear the bruise with honour, and leaves. Soon after, Robert gives Eddard back his post as Hand.',
      },
    ),
    inBoth(
      [7, 50],
      { it: 'O si vince o si muore', en: 'You win or you die' },
      {
        it: '[[eddard-stark|Eddard Stark]] dice a Cersei di sapere che i suoi tre figli sono di [[jaime-lannister|Jaime]]. Lei non lo nega e racconta che, la prima notte di nozze, [[robert-baratheon|Robert]] la chiamò Lyanna. Eddard le intima di fuggire con i figli prima che il re torni dalla caccia, perché allora gli dirà la verità. Cersei risponde che nel gioco del trono o si vince o si muore. Ferito da un cinghiale, Robert muore e [[joffrey-baratheon|Joffrey]] sale sul trono. Cersei strappa la lettera con cui Robert nominava Eddard Protettore del Reame e, quando lui nega il diritto di Joffrey al trono, Eddard viene arrestato.',
        en: '[[eddard-stark|Eddard Stark]] tells Cersei he knows her three children are [[jaime-lannister|Jaime]]’s. She does not deny it and tells him that on their wedding night [[robert-baratheon|Robert]] called her Lyanna. Eddard tells her to flee with the children before the king is back from his hunt, because then he will tell him the truth. Cersei answers that in the game of thrones you win or you die. Wounded by a boar, Robert dies and [[joffrey-baratheon|Joffrey]] takes the throne. Cersei tears up the letter in which Robert named Eddard Protector of the Realm and, when he denies Joffrey’s right to the throne, Eddard is arrested.',
      },
    ),
    onScreen(
      [8, 52],
      { it: 'La lettera di Sansa', en: 'Sansa’s letter' },
      {
        it: 'Cersei convoca [[sansa-stark|Sansa]] insieme a [[pycelle|Pycelle]], [[varys|Varys]] e [[petyr-baelish|Ditocorto]], le dice che il padre è stato arrestato per tradimento e la convince a scrivere al fratello Robb perché giuri fedeltà a [[joffrey-baratheon|Joffrey]]. Poi, a corte, Cersei congeda ser [[barristan-selmy|Barristan Selmy]] dalla Guardia reale: è tempo che si ritiri con onore. Barristan protesta che i cavalieri della Guardia servono a vita, ma il suo posto di Lord Comandante va a [[jaime-lannister|Jaime]]. Davanti alla corte Sansa supplica Joffrey di risparmiare suo padre.',
        en: 'Cersei summons [[sansa-stark|Sansa]] with [[pycelle|Pycelle]], [[varys|Varys]] and [[petyr-baelish|Littlefinger]], tells her that her father has been arrested for treason and persuades her to write to her brother Robb, asking him to swear fealty to [[joffrey-baratheon|Joffrey]]. Then, at court, Cersei dismisses Ser [[barristan-selmy|Barristan Selmy]] from the Kingsguard: it is time for an honourable retirement. Barristan protests that the Kingsguard serve for life, but his post as Lord Commander goes to [[jaime-lannister|Jaime]]. Before the court, Sansa begs Joffrey to spare her father.',
      },
    ),
    inBoth(
      [9, 66],
      { it: 'La confessione al Tempio', en: 'The confession at the Sept' },
      {
        it: 'Davanti al Grande Tempio di Baelor, [[eddard-stark|Eddard Stark]] confessa il tradimento e riconosce [[joffrey-baratheon|Joffrey]] come re. Joffrey annuncia alla folla che sua madre vorrebbe lasciare che Eddard prenda il nero e che [[sansa-stark|Sansa]] ha chiesto pietà per lui. Poi dice che le donne hanno il cuore tenero e ordina a ser [[ilyn-payne|Ilyn Payne]] di portargli la testa del traditore. Ser Ilyn decapita Eddard con la sua stessa spada, Ghiaccio.',
        en: 'Before the Great Sept of Baelor, [[eddard-stark|Eddard Stark]] confesses to treason and acknowledges [[joffrey-baratheon|Joffrey]] as king. Joffrey tells the crowd that his mother wishes to let Eddard take the black and that [[sansa-stark|Sansa]] has begged mercy for him. Then he says women have soft hearts and orders Ser [[ilyn-payne|Ilyn Payne]] to bring him the traitor’s head. Ser Ilyn beheads Eddard with his own sword, Ice.',
      },
    ),
    onScreen(
      [10, 73],
      { it: 'Un nuovo amante', en: 'A new lover' },
      {
        it: 'Cersei ha preso come amante il cugino [[lancel-lannister|Lancel]], lo scudiero di re [[robert-baratheon|Robert]] che gli versava il vino durante la caccia, appena fatto cavaliere. Riceve una lettera: Robb Stark ha catturato [[jaime-lannister|Jaime]]. Lancel, nudo nella sua stanza, trova la guerra emozionante, le chiede notizie e vuole sapere quale sarà la loro prossima mossa. Cersei gli dice di tacere e di tornare a letto.',
        en: 'Cersei has taken her cousin [[lancel-lannister|Lancel]] as her lover: King [[robert-baratheon|Robert]]’s squire, who poured his wine on the hunt, newly made a knight. She receives a letter: Robb Stark has captured [[jaime-lannister|Jaime]]. Lancel, naked in her room, finds the war exciting, asks her for news and wants to know their next move. Cersei tells him to be quiet and come back to bed.',
      },
    ),
  ],
  'joffrey-baratheon': [
    inBoth(
      [1, 5],
      { it: 'Il principe a Grande Inverno', en: 'The prince at Winterfell' },
      {
        it: 'Joffrey è il primogenito di re [[robert-baratheon|Robert]] e della regina [[cersei-lannister|Cersei]], ed è l’erede al trono. Arriva a Grande Inverno con i genitori e la corte. Robert chiede a [[eddard-stark|Eddard Stark]], suo vecchio amico, di diventare il suo Primo Cavaliere, e gli propone di dare in sposa a Joffrey la figlia maggiore, [[sansa-stark|Sansa]]. Eddard chiede tempo per pensarci.',
        en: 'Joffrey is the eldest son of King [[robert-baratheon|Robert]] and Queen [[cersei-lannister|Cersei]], and heir to the throne. He arrives at Winterfell with his parents and the court. Robert asks his old friend [[eddard-stark|Eddard Stark]] to become his Hand, and offers to marry Joffrey to Eddard’s elder daughter, [[sansa-stark|Sansa]]. Eddard asks for time to think it over.',
      },
    ),
    inBooks(
      [1, 8],
      { it: 'Spade affilate', en: 'Sharp steel' },
      {
        it: 'Nel cortile di Grande Inverno ser [[rodrik-cassel|Rodrik Cassel]] chiama Joffrey a duellare con [[robb-stark|Robb]] con le spade di legno. Il principe rifiuta e chiede acciaio affilato. Sandor Clegane ricorda a ser Rodrik che Joffrey è un principe, ma il maestro d’armi non cede. Joffrey allora provoca Robb con battute sprezzanti, tra le risate degli uomini dei Lannister, e [[theon-greyjoy|Theon Greyjoy]] trattiene Robb prima che si arrivi alle mani.',
        en: 'In the yard at Winterfell Ser [[rodrik-cassel|Rodrik Cassel]] calls Joffrey to spar with [[robb-stark|Robb]] with wooden swords. The prince refuses and asks for sharp steel. Sandor Clegane reminds Ser Rodrik that Joffrey is a prince, but the master-at-arms does not give way. Joffrey then goads Robb with sneering remarks, to the laughter of the Lannister men, and [[theon-greyjoy|Theon Greyjoy]] holds Robb back before it comes to blows.',
      },
    ),
    inBoth(
      [2, 17],
      { it: 'Il figlio del macellaio', en: 'The butcher’s boy' },
      {
        it: 'Joffrey non vuole far visita ai genitori di [[bran-stark|Bran]], ferito in una caduta, e lo zio [[tyrion-lannister|Tyrion]] lo prende a schiaffi. Durante il viaggio verso sud, in compagnia di [[sansa-stark|Sansa]], trova [[arya-stark|Arya]] che si allena con la spada insieme a [[mycah|Mycah]], il figlio del macellaio. Joffrey minaccia il ragazzo con la sua spada, Dente di Leone, e comincia a fargli del male. Arya lo colpisce, la sua lupa [[nymeria|Nymeria]] gli morde il braccio e Arya getta la spada nel fiume. Davanti al re Joffrey mente su quanto è accaduto, e Sansa non dà ragione alla sorella. Mycah viene ucciso dal Mastino.',
        en: 'Joffrey will not call on the parents of [[bran-stark|Bran]], hurt in a fall, and his uncle [[tyrion-lannister|Tyrion]] slaps him. On the journey south, out with [[sansa-stark|Sansa]], he comes upon [[arya-stark|Arya]] practising swordplay with [[mycah|Mycah]], the butcher’s boy. Joffrey threatens the boy with his sword, Lion’s Tooth, and starts to hurt him. Arya hits him, her wolf [[nymeria|Nymeria]] bites his arm and Arya throws the sword into the river. Before the king Joffrey lies about what happened, and Sansa does not back her sister. Mycah is cut down by the Hound.',
      },
    ),
    onScreen(
      [3, 21],
      { it: 'Come tratterebbe il Nord', en: 'How he would treat the North' },
      {
        it: 'Mentre la madre [[cersei-lannister|Cersei]] gli medica il braccio, Joffrey le dice che ci saranno guai con gli Stark. Quando sarà re raddoppierà le loro tasse, li costringerà a dare uomini a un esercito della corona e, se si opporranno, li schiaccerà e metterà al loro posto qualcuno di fedele. Cersei gli spiega che il Nord è troppo vasto e selvaggio per essere conquistato, che un re deve essere più accorto e che deve essere gentile con [[sansa-stark|Sansa]].',
        en: 'While his mother [[cersei-lannister|Cersei]] tends his arm, Joffrey tells her there will be trouble with the Starks. When he is king he will double their taxes, make them give men to a royal army and, if they object, crush them and put someone loyal in their place. Cersei explains that the North is too vast and wild to be conquered, that a king must be cleverer, and that he should be kind to [[sansa-stark|Sansa]].',
      },
    ),
    inBooks(
      [4, 30],
      { it: 'La festa del torneo', en: 'The tourney feast' },
      {
        it: 'Alla festa dopo il primo giorno del torneo del Primo Cavaliere, Joffrey siede accanto a [[sansa-stark|Sansa]]. È gentile con lei: le offre da mangiare e le spiega le battute del giullare Ragazzo Luna che lei non capisce. Quando la regina lascia la festa dopo una lite con il re, Joffrey diventa freddo e incarica [[sandor-clegane|Sandor Clegane]] di riaccompagnare Sansa alla Fortezza Rossa.',
        en: 'At the feast after the first day of the Hand’s tourney, Joffrey sits beside [[sansa-stark|Sansa]]. He is kind to her: he offers her food and explains the jokes of the fool Moon Boy that she does not understand. When the queen leaves the feast after a quarrel with the king, Joffrey turns cold and has [[sandor-clegane|Sandor Clegane]] escort Sansa back to the Red Keep.',
      },
    ),
    onScreen(
      [6, 45],
      { it: 'La collana', en: 'The necklace' },
      {
        it: 'Joffrey va da [[sansa-stark|Sansa]] a scusarsi per quanto è accaduto sulla strada del Re. La chiama la sua dama, le regala una collana e lei lo perdona: i due sembrano riconciliati. Sansa non sa che è stata la regina [[cersei-lannister|Cersei]], tempo prima, a spingere il figlio a quel gesto. Quando il padre le annuncia che la rimanderà a Grande Inverno e che le troverà un altro marito, Sansa risponde che sposerà Joffrey.',
        en: 'Joffrey comes to [[sansa-stark|Sansa]] to apologise for what happened on the kingsroad. He calls her his lady love, gives her a necklace and she forgives him: the two seem reconciled. Sansa does not know that Queen [[cersei-lannister|Cersei]] put her son up to it some time before. When her father tells her he is sending her back to Winterfell and will find her another husband, Sansa answers that she will marry Joffrey.',
      },
    ),
    inBoth(
      [7, 50],
      { it: 'Re Joffrey', en: 'King Joffrey' },
      {
        it: 'Re [[robert-baratheon|Robert]] muore per la ferita di un cinghiale. [[eddard-stark|Eddard Stark]] ha scoperto che Joffrey non è figlio di Robert ma di [[jaime-lannister|Jaime]], il fratello della regina. Joffrey siede sul Trono di Spade, ordina che la sua incoronazione si tenga entro due settimane e chiede ai consiglieri di giurargli fedeltà. La madre [[cersei-lannister|Cersei]] strappa la lettera di Robert che nomina Eddard Protettore del Reame. Eddard dichiara che Joffrey non ha alcun diritto al trono. Le cappe dorate uccidono le sue guardie, ed Eddard viene arrestato.',
        en: 'King [[robert-baratheon|Robert]] dies of a wound from a boar. [[eddard-stark|Eddard Stark]] has found out that Joffrey is not Robert’s son but the son of [[jaime-lannister|Jaime]], the queen’s brother. Joffrey sits on the Iron Throne, orders his coronation held within a fortnight and demands oaths of fealty from his councillors. His mother [[cersei-lannister|Cersei]] tears up Robert’s letter naming Eddard Protector of the Realm. Eddard declares that Joffrey has no right to the throne. The gold cloaks kill his guards, and Eddard is arrested.',
      },
    ),
    inBoth(
      [8, 58],
      { it: 'La supplica di Sansa', en: 'Sansa’s plea' },
      {
        it: 'Joffrey tiene corte. [[janos-slynt|Janos Slynt]], comandante della Guardia cittadina, viene nominato lord di Harrenhal. Ser [[barristan-selmy|Barristan Selmy]] viene congedato dalla Guardia reale, anche se i suoi cavalieri servono a vita, e lo zio [[jaime-lannister|Jaime]] prende il suo posto di Lord Comandante. Poi [[sansa-stark|Sansa]] si inginocchia davanti al trono e supplica Joffrey di risparmiare suo padre, [[eddard-stark|Eddard Stark]]. Joffrey promette di mostrarsi misericordioso, a patto che Eddard confessi il tradimento e lo riconosca come re.',
        en: 'Joffrey holds court. [[janos-slynt|Janos Slynt]], commander of the City Watch, is made Lord of Harrenhal. Ser [[barristan-selmy|Barristan Selmy]] is dismissed from the Kingsguard, though its knights serve for life, and Joffrey’s uncle [[jaime-lannister|Jaime]] takes his place as Lord Commander. Then [[sansa-stark|Sansa]] kneels before the throne and begs Joffrey to spare her father, [[eddard-stark|Eddard Stark]]. Joffrey promises to be merciful, provided Eddard confesses his treason and acknowledges him as king.',
      },
    ),
    inBoth(
      [9, 66],
      { it: 'Nessuna pietà', en: 'No mercy' },
      {
        it: 'Davanti al Grande Tempio di Baelor, [[eddard-stark|Eddard Stark]] confessa il tradimento e riconosce Joffrey come vero re. Joffrey dice alla folla che sua madre [[cersei-lannister|Cersei]] vorrebbe lasciargli prendere il nero e che [[sansa-stark|Sansa]] ha chiesto pietà per il padre. Ma le donne hanno il cuore tenero, dice, e un traditore non resta impunito. Ordina a ser [[ilyn-payne|Ilyn Payne]] di portargli la testa di Eddard, e ser Ilyn lo decapita con Ghiaccio, la spada di Eddard.',
        en: 'Before the Great Sept of Baelor, [[eddard-stark|Eddard Stark]] confesses to treason and acknowledges Joffrey as the true king. Joffrey tells the crowd that his mother [[cersei-lannister|Cersei]] would let him take the black and that [[sansa-stark|Sansa]] has begged mercy for her father. But women have soft hearts, he says, and a traitor does not go unpunished. He orders Ser [[ilyn-payne|Ilyn Payne]] to bring him Eddard’s head, and Ser Ilyn beheads him with Ice, Eddard’s own sword.',
      },
    ),
    inBoth(
      [10, 68],
      { it: 'Le teste sulle mura', en: 'The heads on the walls' },
      {
        it: 'Joffrey porta [[sansa-stark|Sansa]] sugli spalti della Fortezza Rossa e la costringe a guardare le teste infilzate sulle picche: quella di suo padre, [[eddard-stark|Eddard]], e quella della septa [[mordane|Mordane]]. Le promette che un giorno le darà anche la testa di suo fratello Robb. Fa anche colpire Sansa da ser [[meryn-trant|Meryn Trant]]. Lei pensa di spingere Joffrey giù dagli spalti, ma il [[sandor-clegane|Mastino]] la ferma.',
        en: 'Joffrey takes [[sansa-stark|Sansa]] up on the battlements of the Red Keep and makes her look at the heads on the spikes: her father [[eddard-stark|Eddard]]’s, and Septa [[mordane|Mordane]]’s. He promises that one day he will give her the head of her brother Robb too. He also has Ser [[meryn-trant|Meryn Trant]] strike Sansa. She thinks of pushing Joffrey off the battlements, but [[sandor-clegane|the Hound]] stops her.',
      },
    ),
  ],
  'robert-baratheon': [
    inBoth(
      [1, 5],
      { it: 'Il re a Grande Inverno', en: 'The king at Winterfell' },
      {
        it: 'Robert è il re dei Sette Regni. Arriva a Grande Inverno con la regina [[cersei-lannister|Cersei]] e la corte e abbraccia il suo vecchio amico [[eddard-stark|Eddard Stark]]. Con impazienza della regina, vuole scendere subito nelle cripte, dove è sepolta Lyanna, la sorella di Eddard, che un tempo era stata promessa a lui. Le dice che ogni notte sogna di uccidere Rhaegar Targaryen. Poi offre a Eddard il posto di Primo Cavaliere del Re e propone di dare in sposa [[sansa-stark|Sansa]] a suo figlio [[joffrey-baratheon|Joffrey]]. Eddard chiede tempo per pensarci.',
        en: 'Robert is the king of the Seven Kingdoms. He reaches Winterfell with Queen [[cersei-lannister|Cersei]] and the court and embraces his old friend [[eddard-stark|Eddard Stark]]. To the queen’s impatience, he wants to go straight down to the crypts, where Eddard’s sister Lyanna lies, who was once promised to him. He says that every night he dreams of killing Rhaegar Targaryen. Then he offers Eddard the post of Hand of the King and proposes to marry [[sansa-stark|Sansa]] to his son [[joffrey-baratheon|Joffrey]]. Eddard asks for time to think it over.',
      },
    ),
    inBoth(
      [2, 17],
      { it: 'Il giudizio del re', en: 'The king’s judgment' },
      {
        it: 'Durante il viaggio verso sud, [[arya-stark|Arya]] e suo figlio [[joffrey-baratheon|Joffrey]] vengono condotti davanti a Robert dopo uno scontro in cui la lupa di Arya ha morso il principe. Joffrey mente, e [[sansa-stark|Sansa]] non conferma il racconto della sorella. Robert stabilisce che ogni padre punirà il proprio figlio, ma la regina [[cersei-lannister|Cersei]] pretende la morte del lupo. Quando non lo trovano, Robert acconsente che al suo posto venga ucciso quello di Sansa, [[lady-direwolf|Lady]]. [[eddard-stark|Eddard]] la uccide con le proprie mani.',
        en: 'On the journey south, [[arya-stark|Arya]] and his son [[joffrey-baratheon|Joffrey]] are brought before Robert after a quarrel in which Arya’s wolf bit the prince. Joffrey lies, and [[sansa-stark|Sansa]] does not back her sister’s account. Robert rules that each father will discipline his own child, but Queen [[cersei-lannister|Cersei]] demands the wolf’s death. When it cannot be found, Robert agrees that Sansa’s wolf, [[lady-direwolf|Lady]], will be killed in its place. [[eddard-stark|Eddard]] kills her himself.',
      },
    ),
    onScreen(
      [3, 31],
      { it: 'Vecchie storie di guerra', en: 'Old war stories' },
      {
        it: 'Ad Approdo del Re Robert ha ordinato un grande torneo in onore del nuovo Primo Cavaliere, mentre la corona è piena di debiti. Il re si scambia vecchie storie di guerra con ser [[barristan-selmy|Barristan Selmy]], mentre il suo scudiero [[lancel-lannister|Lancel]] gli versa il vino. Robert lo deride per il nome e lo manda a prenderne ancora. Poi chiede a [[jaime-lannister|Jaime]] se re Aerys sia morto implorando pietà. Jaime risponde che il re folle è morto ripetendo le parole che ripeteva dall’inizio dell’assedio di Approdo del Re: bruciateli tutti.',
        en: 'In King’s Landing Robert has ordered a great tourney in honour of the new Hand, while the crown is deep in debt. The king swaps old war stories with Ser [[barristan-selmy|Barristan Selmy]] while his squire [[lancel-lannister|Lancel]] pours his wine. Robert mocks the boy’s name and sends him for more. Then he asks [[jaime-lannister|Jaime]] whether King Aerys died begging for mercy. Jaime answers that the Mad King died repeating the words he had been saying since the siege of King’s Landing began: burn them all.',
      },
    ),
    inBooks(
      [5, 31],
      { it: 'Troppo grasso per l’armatura', en: 'Too fat for his armour' },
      {
        it: 'Alla festa dopo il primo giorno del torneo, Robert urla contro la regina [[cersei-lannister|Cersei]] che combatterà nella mischia. Il mattino dopo i suoi scudieri, due ragazzi Lannister, non riescono a fargli entrare l’armatura: [[eddard-stark|Eddard]] nota che è troppo grasso. Robert li manda a cercare un allarga-corazza, uno scherzo che lo fa ridere. Eddard e ser [[barristan-selmy|Barristan]] lo dissuadono dalla mischia: nessuno oserebbe colpire il re. Più tardi Robert ferma lo scontro tra [[gregor-clegane|Gregor Clegane]] e il fratello [[sandor-clegane|Sandor]].',
        en: 'At the feast after the first day of the tourney, Robert shouts at Queen [[cersei-lannister|Cersei]] that he will fight in the melee. The next morning his squires, two Lannister boys, cannot get him into his armour: [[eddard-stark|Eddard]] notes that he is too fat. Robert sends them off to fetch a breastplate stretcher, a joke that makes him laugh. Eddard and Ser [[barristan-selmy|Barristan]] talk him out of the melee: no one would dare strike the king. Later Robert stops the fight between [[gregor-clegane|Gregor Clegane]] and his brother [[sandor-clegane|Sandor]].',
      },
    ),
    inBoth(
      [5, 34],
      { it: 'La condanna di Daenerys', en: 'Daenerys’s death warrant' },
      {
        it: 'Al concilio ristretto Robert viene a sapere che [[daenerys-targaryen|Daenerys Targaryen]], sposa di un khal dothraki, aspetta un figlio. Vuole che lei muoia. [[eddard-stark|Eddard Stark]] dice che uccidere una ragazza e il bambino che porta in grembo sarebbe disonorevole, ma quasi tutto il concilio dà ragione al re. Robert ordina a Eddard, come suo Primo Cavaliere, di provvedere. Eddard rifiuta e si dimette, tra la furia del re, che non si aspettava di perdere il suo vecchio amico.',
        en: 'At the small council Robert learns that [[daenerys-targaryen|Daenerys Targaryen]], wed to a Dothraki khal, is with child. He wants her dead. [[eddard-stark|Eddard Stark]] says that killing a girl and the child in her womb would be dishonourable, but most of the council sides with the king. Robert orders Eddard, as his Hand, to see it done. Eddard refuses and resigns, to the fury of the king, who did not expect to lose his old friend.',
      },
    ),
    inBoth(
      [6, 40],
      { it: 'Uno schiaffo alla regina', en: 'A blow to the queen' },
      {
        it: 'Robert va con la regina [[cersei-lannister|Cersei]] a trovare [[eddard-stark|Eddard Stark]], ferito negli scontri con gli uomini di [[jaime-lannister|Jaime]]. Cersei pretende che Eddard venga punito perché sua moglie ha preso prigioniero [[tyrion-lannister|Tyrion]], ma Robert vuole sentire prima Eddard. Quando lei lo provoca, Robert la colpisce al volto. Poi restituisce a Eddard il titolo di Primo Cavaliere, gli ordina di fare pace con i Lannister e lo avverte che, se si dimetterà ancora, darà il titolo a Jaime. Lui intanto parte per una caccia.',
        en: 'Robert goes with Queen [[cersei-lannister|Cersei]] to see [[eddard-stark|Eddard Stark]], wounded in the fight with [[jaime-lannister|Jaime]]’s men. Cersei demands that Eddard be punished because his wife has taken [[tyrion-lannister|Tyrion]] prisoner, but Robert wants to hear Eddard first. When she taunts him, Robert strikes her across the face. Then he gives Eddard back his post as Hand, orders him to make peace with the Lannisters and warns him that if he resigns again, he will give the post to Jaime. Meanwhile he leaves on a hunt.',
      },
    ),
    inBoth(
      [7, 50],
      { it: 'Il cinghiale', en: 'The boar' },
      {
        it: 'Durante la caccia lo scudiero [[lancel-lannister|Lancel]] tiene il re ben fornito di vino. Robert, ubriaco, affronta da solo un cinghiale, che lo ferisce a morte. Riportato a corte, chiede a [[eddard-stark|Eddard Stark]] di scrivere le sue ultime volontà: Eddard sarà Protettore del Reame finché il suo erede non sarà maggiorenne. Eddard non riesce a dirgli che [[joffrey-baratheon|Joffrey]] non è suo figlio, e scrive la lettera senza fare il nome del principe. Robert gli chiede anche di fermare chi è stato mandato a uccidere [[daenerys-targaryen|Daenerys]]. Poco dopo muore.',
        en: 'On the hunt his squire [[lancel-lannister|Lancel]] keeps the king well supplied with wine. Drunk, Robert takes on a boar alone, and it wounds him mortally. Carried back to court, he asks [[eddard-stark|Eddard Stark]] to write down his last will: Eddard will be Protector of the Realm until his heir comes of age. Eddard cannot bring himself to tell him that [[joffrey-baratheon|Joffrey]] is not his son, and writes the letter without naming the prince. Robert also asks him to call off the killers sent after [[daenerys-targaryen|Daenerys]]. Soon after, he dies.',
      },
    ),
  ],
  // Renly and Loras as lovers is the show's alone (relationship pin 5/21
  // episode); the books keep him a companion.
  'renly-baratheon': [
    inBooks(
      [3, 16],
      { it: 'La scorta del re', en: 'The king’s escort' },
      {
        it: 'Renly è il fratello più giovane del re, e ha quasi vent’anni. Lascia la capitale insieme a ser [[barristan-selmy|Barristan Selmy]] e a ser [[ilyn-payne|Ilyn Payne]] per scortare il re e la regina lungo la strada del Re fino al loro ritorno. Alla locanda dove la corte si è fermata, lo incontra [[sansa-stark|Sansa]], che il principe [[joffrey-baratheon|Joffrey]] ha appena sottratto alla paura di ser Ilyn e del Mastino.',
        en: 'Renly is the king’s youngest brother, and nearly twenty. He leaves the capital with Ser [[barristan-selmy|Barristan Selmy]] and Ser [[ilyn-payne|Ilyn Payne]] to escort the king and queen along the kingsroad for their return. At the inn where the court has stopped, he meets [[sansa-stark|Sansa]], whom Prince [[joffrey-baratheon|Joffrey]] has just rescued from her fear of Ser Ilyn and the Hound.',
      },
    ),
    inBoth(
      [3, 21],
      { it: 'Il concilio ristretto', en: 'The small council' },
      {
        it: 'Renly siede nel concilio ristretto del fratello, re [[robert-baratheon|Robert]], insieme a [[petyr-baelish|Ditocorto]], al gran maestro [[pycelle|Pycelle]] e a [[varys|Varys]]. Quando [[eddard-stark|Eddard Stark]] arriva nella capitale come nuovo Primo Cavaliere del Re, viene subito convocato al concilio. Lì scopre che la corona è piena di debiti e che Robert ha ordinato un torneo in suo onore. Eddard vuole parlarne con il re prima di approvare una spesa simile.',
        en: 'Renly sits on the small council of his brother, King [[robert-baratheon|Robert]], with [[petyr-baelish|Littlefinger]], Grand Maester [[pycelle|Pycelle]] and [[varys|Varys]]. When [[eddard-stark|Eddard Stark]] reaches the capital as the new Hand of the King, he is summoned to the council at once. There he learns that the crown is deep in debt and that Robert has ordered a tourney in his honour. Eddard wants to speak to the king before agreeing to such an expense.',
      },
    ),
    onScreen(
      [5, 30],
      { it: 'Il Cavaliere di Fiori', en: 'The Knight of Flowers' },
      {
        it: 'Al torneo Renly scommette con [[petyr-baelish|Ditocorto]] sul suo amante, ser [[loras-tyrell|Loras Tyrell]], contro [[gregor-clegane|Gregor Clegane]], e vince. Al concilio ristretto sostiene il re, che vuole morta [[daenerys-targaryen|Daenerys Targaryen]]. In camera, Loras lo esorta a reclamare la corona per sé e gli offre l’appoggio della sua ricca casata. Renly risponde di essere solo quarto nella linea di successione, ma Loras ribatte che il popolo lo ama perché è gentile e non gode della violenza come i suoi fratelli.',
        en: 'At the tourney Renly bets with [[petyr-baelish|Littlefinger]] on his lover, Ser [[loras-tyrell|Loras Tyrell]], against [[gregor-clegane|Gregor Clegane]], and wins. At the small council he backs the king, who wants [[daenerys-targaryen|Daenerys Targaryen]] dead. In their chamber, Loras urges him to claim the crown for himself and offers the support of his rich house. Renly answers that he is only fourth in line to the throne, but Loras argues that the people love him because he is kind and takes no joy in violence, unlike his brothers.',
      },
    ),
    inBooks(
      [5, 34],
      { it: 'Un errore lasciarli vivere', en: 'A mistake to let them live' },
      {
        it: 'Al concilio ristretto [[varys|Varys]] riferisce che [[daenerys-targaryen|Daenerys Targaryen]] aspetta un figlio, e re [[robert-baratheon|Robert]] vuole che muoia. Renly osserva che è stato un errore lasciare in vita lei e il fratello così a lungo. Quando si discute di come farlo, propone di servirsi di ser [[jorah-mormont|Jorah Mormont]], che desidera il perdono del re. [[eddard-stark|Eddard Stark]] si rifiuta di prendervi parte e si dimette da Primo Cavaliere.',
        en: 'At the small council [[varys|Varys]] reports that [[daenerys-targaryen|Daenerys Targaryen]] is with child, and King [[robert-baratheon|Robert]] wants her dead. Renly remarks that it was a mistake to let her and her brother live this long. When they discuss how it should be done, he suggests using Ser [[jorah-mormont|Jorah Mormont]], who craves a royal pardon. [[eddard-stark|Eddard Stark]] refuses to take part and resigns as Hand.',
      },
    ),
    onScreen(
      [6, 40],
      { it: 'La lite durante la caccia', en: 'The quarrel on the hunt' },
      {
        it: 'Renly segue a caccia il fratello, re [[robert-baratheon|Robert]], insieme a ser [[barristan-selmy|Barristan Selmy]] e allo scudiero [[lancel-lannister|Lancel]], che continua a versare vino al re. Robert, ubriaco, rimpiange i tempi della guerra, quando i nemici si affrontavano apertamente, e lo punzecchia sulle donne. Renly gli dà dello sciocco: il passato che Robert rimpiange era pieno di violenza. Poi lascia la caccia.',
        en: 'Renly goes hunting with his brother, King [[robert-baratheon|Robert]], along with Ser [[barristan-selmy|Barristan Selmy]] and the squire [[lancel-lannister|Lancel]], who keeps pouring wine for the king. Drunk, Robert longs for the days of the war, when enemies faced each other openly, and needles him about women. Renly calls him a fool: the past Robert longs for was full of violence. Then he leaves the hunt.',
      },
    ),
    inBoth(
      [7, 50],
      { it: 'Cento spade', en: 'A hundred swords' },
      {
        it: 'Il fratello di Renly, re [[robert-baratheon|Robert]], è ferito a morte da un cinghiale. Mentre Robert è in fin di vita, Renly offre a [[eddard-stark|Eddard Stark]] cento spade per prendere i figli della regina prima che lei si muova. Eddard rifiuta: non verserà sangue nel castello mentre il re è ancora vivo. Robert muore. Prima che Eddard si presenti davanti al nuovo re, [[varys|Varys]] gli dice che Renly ha lasciato la città con ser [[loras-tyrell|Loras Tyrell]] e una cinquantina di uomini.',
        en: 'Renly’s brother, King [[robert-baratheon|Robert]], is mortally wounded by a boar. As Robert lies dying, Renly offers [[eddard-stark|Eddard Stark]] a hundred swords to seize the queen’s children before she can move. Eddard refuses: he will shed no blood in the castle while the king still lives. Robert dies. Before Eddard goes before the new king, [[varys|Varys]] tells him that Renly has left the city with Ser [[loras-tyrell|Loras Tyrell]] and some fifty men.',
      },
    ),
    inBoth(
      [10, 70],
      { it: 'Un altro pretendente', en: 'Another claimant' },
      {
        it: 'Dopo la morte del fratello, re [[robert-baratheon|Robert]], e l’esecuzione di [[eddard-stark|Eddard Stark]], Renly non riconosce [[joffrey-baratheon|Joffrey]] come re. Lord [[tywin-lannister|Tywin Lannister]] e i suoi comandanti vengono a sapere che Renly ha reclamato per sé il Trono di Spade. Per i Lannister, già in guerra con gli Stark, è un nuovo nemico.',
        en: 'After the death of his brother, King [[robert-baratheon|Robert]], and the execution of [[eddard-stark|Eddard Stark]], Renly does not acknowledge [[joffrey-baratheon|Joffrey]] as king. Lord [[tywin-lannister|Tywin Lannister]] and his captains learn that Renly has claimed the Iron Throne for himself. For the Lannisters, already at war with the Starks, he is a new enemy.',
      },
    ),
  ],
  'myrcella-baratheon': [
    inBoth(
      [1, 6],
      {
        it: 'La principessa a Grande Inverno',
        en: 'The princess at Winterfell',
      },
      {
        it: 'Myrcella è la figlia di re [[robert-baratheon|Robert]] e della regina [[cersei-lannister|Cersei]]. Viaggia verso nord con i genitori, il fratello maggiore [[joffrey-baratheon|Joffrey]] e il fratello minore [[tommen-baratheon|Tommen]], quando il re va a Grande Inverno per chiedere a [[eddard-stark|Eddard Stark]] di diventare il suo Primo Cavaliere. Quella sera nella sala grande del castello si tiene una festa in onore del re.',
        en: 'Myrcella is the daughter of King [[robert-baratheon|Robert]] and Queen [[cersei-lannister|Cersei]]. She travels north with her parents, her elder brother [[joffrey-baratheon|Joffrey]] and her younger brother [[tommen-baratheon|Tommen]], when the king goes to Winterfell to ask [[eddard-stark|Eddard Stark]] to become his Hand. That evening a feast is held in the great hall of the castle in the king’s honour.',
      },
    ),
    inBoth(
      [2, 10],
      { it: 'Notizie di Bran', en: 'News of Bran' },
      {
        it: 'Dopo la caduta di [[bran-stark|Bran Stark]], Myrcella fa colazione con la madre [[cersei-lannister|Cersei]], lo zio [[jaime-lannister|Jaime]] e il fratello [[tommen-baratheon|Tommen]]. Arriva lo zio [[tyrion-lannister|Tyrion]]. Myrcella è in pena per Bran, e Tyrion dice che il ragazzo potrebbe vivere, cosa che turba la regina e Jaime. Poi Tyrion annuncia che andrà a nord con [[benjen-stark|Benjen Stark]] e racconta che cosa vuole fare una volta lassù. Cersei si alza e porta via i figli.',
        en: 'After [[bran-stark|Bran Stark]]’s fall, Myrcella breaks her fast with her mother [[cersei-lannister|Cersei]], her uncle [[jaime-lannister|Jaime]] and her brother [[tommen-baratheon|Tommen]]. Her uncle [[tyrion-lannister|Tyrion]] joins them. Myrcella is worried about Bran, and Tyrion says the boy may live, which unsettles the queen and Jaime. Then Tyrion announces that he will go north with [[benjen-stark|Benjen Stark]] and says what he means to do once he is up there. Cersei gets up and takes the children away.',
      },
    ),
  ],
  'tommen-baratheon': [
    inBoth(
      [1, 6],
      { it: 'Il principe più giovane', en: 'The youngest prince' },
      {
        it: 'Tommen è il figlio minore di re [[robert-baratheon|Robert]] e della regina [[cersei-lannister|Cersei]]. Viaggia verso nord con i genitori, il fratello maggiore [[joffrey-baratheon|Joffrey]] e la sorella [[myrcella-baratheon|Myrcella]], quando il re va a Grande Inverno per chiedere a [[eddard-stark|Eddard Stark]] di diventare il suo Primo Cavaliere. Quella sera nella sala grande del castello si tiene una festa in onore del re.',
        en: 'Tommen is the younger son of King [[robert-baratheon|Robert]] and Queen [[cersei-lannister|Cersei]]. He travels north with his parents, his elder brother [[joffrey-baratheon|Joffrey]] and his sister [[myrcella-baratheon|Myrcella]], when the king goes to Winterfell to ask [[eddard-stark|Eddard Stark]] to become his Hand. That evening a feast is held in the great hall of the castle in the king’s honour.',
      },
    ),
    inBooks(
      [1, 8],
      { it: 'Il duello con Bran', en: 'The bout with Bran' },
      {
        it: 'Nel cortile di Grande Inverno, sotto gli occhi del maestro d’armi ser [[rodrik-cassel|Rodrik Cassel]], Tommen combatte con [[bran-stark|Bran Stark]] con le spade di legno. È così imbottito di protezioni che ad [[arya-stark|Arya]], che guarda con [[jon-snow|Jon Snow]], sembra rotondo. Bran vince il duello. Subito dopo ser Rodrik chiama il fratello di Tommen, [[joffrey-baratheon|Joffrey]], a combattere con [[robb-stark|Robb]].',
        en: 'In the yard at Winterfell, under the eye of the master-at-arms Ser [[rodrik-cassel|Rodrik Cassel]], Tommen fights [[bran-stark|Bran Stark]] with wooden swords. He is so padded with protection that [[arya-stark|Arya]], watching with [[jon-snow|Jon Snow]], thinks he looks round. Bran wins the bout. Right after, Ser Rodrik calls Tommen’s brother [[joffrey-baratheon|Joffrey]] to fight [[robb-stark|Robb]].',
      },
    ),
    inBoth(
      [2, 10],
      { it: 'La colazione con lo zio', en: 'Breakfast with his uncle' },
      {
        it: 'Dopo la caduta di [[bran-stark|Bran Stark]], Tommen fa colazione con la madre [[cersei-lannister|Cersei]], lo zio [[jaime-lannister|Jaime]] e la sorella [[myrcella-baratheon|Myrcella]]. Arriva lo zio [[tyrion-lannister|Tyrion]], che dice che Bran potrebbe vivere, cosa che turba la regina e Jaime. Poi Tyrion annuncia che andrà a nord con [[benjen-stark|Benjen Stark]] e racconta che cosa vuole fare una volta lassù. Cersei si alza e porta via i figli.',
        en: 'After [[bran-stark|Bran Stark]]’s fall, Tommen breaks his fast with his mother [[cersei-lannister|Cersei]], his uncle [[jaime-lannister|Jaime]] and his sister [[myrcella-baratheon|Myrcella]]. Their uncle [[tyrion-lannister|Tyrion]] joins them and says that Bran may live, which unsettles the queen and Jaime. Then Tyrion announces that he will go north with [[benjen-stark|Benjen Stark]] and says what he means to do once he is up there. Cersei gets up and takes the children away.',
      },
    ),
  ],
  'lancel-lannister': [
    onScreen(
      [3, 31],
      { it: 'Lo scudiero del re', en: 'The king’s squire' },
      {
        it: 'Lancel è uno degli scudieri di re [[robert-baratheon|Robert]]. Gli versa il vino mentre il re si scambia vecchie storie di guerra con ser [[barristan-selmy|Barristan Selmy]]. Robert si prende gioco di lui e gli chiede se suo padre balbettasse, visto il nome che gli ha dato. Quando il vino finisce, il re si spazientisce e lo manda a prenderne dell’altro.',
        en: 'Lancel is one of King [[robert-baratheon|Robert]]’s squires. He pours the wine while the king swaps old war stories with Ser [[barristan-selmy|Barristan Selmy]]. Robert makes fun of him and asks whether his father had a stutter, given the name he chose for him. When the wine runs out, the king loses patience and sends him for more.',
      },
    ),
    inBoth(
      [5, 31],
      { it: 'L’allarga-corazza', en: 'The breastplate stretcher' },
      {
        it: 'Prima del torneo Lancel cerca di far entrare re [[robert-baratheon|Robert]] nell’armatura, senza riuscirci. Arriva [[eddard-stark|Eddard Stark]] e dice chiaro al re che è troppo grasso per la sua armatura. Robert scoppia a ridere e manda Lancel a cercare un allarga-corazza, un attrezzo che non esiste. Lancel corre a cercarlo. Il re ha poca pazienza con lui e lo prende spesso in giro.',
        en: 'Before the tourney Lancel tries to get King [[robert-baratheon|Robert]] into his armour, without success. [[eddard-stark|Eddard Stark]] comes in and tells the king plainly that he is too fat for it. Robert bursts out laughing and sends Lancel to fetch a breastplate stretcher, a tool that does not exist. Lancel runs off to look for it. The king has little patience with him and often makes fun of him.',
      },
    ),
    inBoth(
      [7, 50],
      { it: 'Il vino della caccia', en: 'The wine on the hunt' },
      {
        it: 'Lancel accompagna re [[robert-baratheon|Robert]] a caccia e gli versa vino in abbondanza. Il re, ubriaco, affronta un cinghiale e ne resta ferito a morte. Davanti a [[eddard-stark|Eddard Stark]], [[varys|Varys]] chiede a ser [[barristan-selmy|Barristan Selmy]] chi abbia dato al re tutto quel vino, e salta fuori il nome di Lancel. Robert muore poco dopo.',
        en: 'Lancel goes hunting with King [[robert-baratheon|Robert]] and keeps his cup full. Drunk, the king takes on a boar and is mortally wounded. In front of [[eddard-stark|Eddard Stark]], [[varys|Varys]] asks Ser [[barristan-selmy|Barristan Selmy]] who gave the king all that wine, and Lancel’s name comes up. Robert dies soon after.',
      },
    ),
    onScreen(
      [10, 73],
      { it: 'Nel letto della regina', en: 'In the queen’s bed' },
      {
        it: 'Lancel è appena stato fatto cavaliere ed è diventato l’amante di sua cugina, la regina [[cersei-lannister|Cersei]]. Mentre lei riceve la lettera che le annuncia la cattura di suo fratello [[jaime-lannister|Jaime]], Lancel, nudo nella sua stanza, trova la guerra emozionante. Le chiede notizie e vuole sapere quale sarà la loro prossima mossa. Cersei gli dice di tacere e di tornare a letto.',
        en: 'Lancel has just been made a knight and has become the lover of his cousin, Queen [[cersei-lannister|Cersei]]. As she receives the letter telling her that her brother [[jaime-lannister|Jaime]] has been captured, Lancel, naked in her room, finds the war exciting. He asks her for news and wants to know their next move. Cersei tells him to be quiet and come back to bed.',
      },
    ),
  ],
  'barristan-selmy': [
    onScreen(
      [3, 16],
      { it: 'Vecchie storie di guerra', en: 'Old war stories' },
      {
        it: 'Barristan Selmy è il Lord Comandante della Guardia reale, i cavalieri che hanno giurato di proteggere il re. Nella Fortezza Rossa si scambia storie di guerra con [[robert-baratheon|re Robert]] e [[jaime-lannister|Jaime Lannister]]. Il primo uomo che uccise fu un soldato straniero di cui non seppe mai il nome, trafitto al cuore con una lancia. Ricorda anche la campagna contro una fratellanza di fuorilegge, quando uccise il loro capo, Simon Toyne, in duello e Jaime, allora scudiero, uccise il suo primo uomo.',
        en: 'Barristan Selmy is the Lord Commander of the Kingsguard, the knights sworn to protect the king. In the Red Keep he swaps war stories with [[robert-baratheon|King Robert]] and [[jaime-lannister|Jaime Lannister]]. His first kill was a foreign soldier whose name he never learned, struck through the heart with a lance. He also recalls the campaign against a brotherhood of outlaws, when he slew their leader, Simon Toyne, in single combat and Jaime, then a squire, made his first kill.',
      },
    ),
    inBooks(
      [3, 17],
      { it: 'La scorta sulla strada', en: 'Escort on the road' },
      {
        it: 'Ser Barristan Selmy, Lord Comandante della Guardia reale, parte dalla capitale con [[renly-baratheon|Renly Baratheon]] e [[ilyn-payne|ser Ilyn Payne]] per scortare [[robert-baratheon|re Robert]] e la regina nell’ultimo tratto della strada verso sud. In una locanda si presenta a [[sansa-stark|Sansa Stark]]. Quando [[arya-stark|Arya]] viene portata davanti al re dopo la lite con il [[joffrey-baratheon|principe Joffrey]], Barristan assiste con aria grave, e il re gli fa accompagnare fuori Renly, che non riesce a smettere di ridere.',
        en: 'Ser Barristan Selmy, Lord Commander of the Kingsguard, rides out from the capital with [[renly-baratheon|Renly Baratheon]] and [[ilyn-payne|Ser Ilyn Payne]] to escort [[robert-baratheon|King Robert]] and the queen on the last stretch of the road south. At an inn he introduces himself to [[sansa-stark|Sansa Stark]]. When [[arya-stark|Arya]] is brought before the king after her quarrel with [[joffrey-baratheon|Prince Joffrey]], Barristan looks on gravely, and the king has him lead Renly out of the room because Renly cannot stop laughing.',
      },
    ),
    inBoth(
      [5, 31],
      { it: 'La veglia per Hugh', en: 'The vigil for Hugh' },
      {
        it: 'Nelle giostre del torneo indetto per il nuovo Primo Cavaliere, la lancia di [[gregor-clegane|Gregor Clegane]] colpisce al collo il giovane cavaliere [[hugh-of-the-vale|Hugh della Valle]] e lo uccide. Nessun altro vuole vegliare il corpo di Hugh, così Barristan lo veglia di persona. Il giorno dopo [[eddard-stark|Eddard Stark]] va da lui e gli chiede come sia morto Hugh.',
        en: 'In the lists of the tourney held for the new Hand, [[gregor-clegane|Gregor Clegane]]’s lance strikes the young knight [[hugh-of-the-vale|Hugh of the Vale]] in the neck and kills him. No one else will keep vigil over Hugh’s body, so Barristan keeps it himself. The next day [[eddard-stark|Eddard Stark]] comes to him and asks how Hugh died.',
      },
    ),
    inBooks(
      [5, 34],
      { it: 'Contro i sicari', en: 'Against the assassins' },
      {
        it: 'A una riunione del concilio ristretto [[varys|Varys]] riferisce che [[daenerys-targaryen|Daenerys Targaryen]] aspetta un figlio dal suo khal dothraki. [[robert-baratheon|Re Robert]] la vuole morta. Oltre a [[eddard-stark|Eddard Stark]], Barristan è l’unico consigliere a opporsi all’idea di mandarle contro un sicario, perché la ritiene disonorevole. Eddard si rifiuta di dare l’ordine e lascia la carica di Primo Cavaliere.',
        en: 'At a meeting of the small council, [[varys|Varys]] brings word that [[daenerys-targaryen|Daenerys Targaryen]] is with child by her Dothraki khal. [[robert-baratheon|King Robert]] wants her dead. Barristan is the only councillor besides [[eddard-stark|Eddard Stark]] who speaks against sending an assassin after her, because he finds it dishonourable. Eddard refuses to have it done and gives up his office as Hand.',
      },
    ),
    inBoth(
      [7, 50],
      { it: 'La lettera di Robert', en: 'Robert’s letter' },
      {
        it: '[[robert-baratheon|Re Robert]] muore per una ferita riportata durante una caccia al cinghiale. A Barristan viene consegnata la lettera con cui Robert nomina [[eddard-stark|Eddard Stark]] Protettore del Regno. Nella sala del trono, dove [[joffrey-baratheon|Joffrey]] siede sul Trono di Spade, [[cersei-lannister|Cersei]] strappa la lettera. Eddard dichiara che Joffrey non ha alcun diritto al trono, e Cersei ordina a Barristan di arrestarlo come traditore. Barristan esita. Gli uomini della Guardia cittadina si rivoltano contro le guardie di Eddard e le uccidono, ed Eddard viene catturato.',
        en: '[[robert-baratheon|King Robert]] dies of a wound from a boar hunt. Barristan is given the letter in which Robert names [[eddard-stark|Eddard Stark]] Protector of the Realm. In the throne room, where [[joffrey-baratheon|Joffrey]] sits the Iron Throne, [[cersei-lannister|Cersei]] tears the letter up. Eddard declares that Joffrey has no right to the throne, and Cersei orders Barristan to seize him as a traitor. Barristan hesitates. The men of the City Watch turn on Eddard’s guards and kill them, and Eddard is taken.',
      },
    ),
    inBoth(
      [8, 58],
      { it: 'Allontanato dalla Guardia', en: 'Removed from the Kingsguard' },
      {
        it: '[[joffrey-baratheon|Joffrey]], ora re, tiene udienza nella sala del trono. Barristan viene allontanato dalla Guardia reale, anche se i suoi voti valgono per tutta la vita, e al suo posto [[jaime-lannister|Jaime Lannister]] viene nominato Lord Comandante. Anche [[sandor-clegane|Sandor Clegane]] entra nella Guardia reale, pur non essendo un cavaliere. Barristan, che sotto [[robert-baratheon|Robert]] comandava le guardie del re, non è più uno di loro, e lascia la corte.',
        en: '[[joffrey-baratheon|Joffrey]], now king, holds court in the throne room. Barristan is removed from the Kingsguard, although its vows are for life, and [[jaime-lannister|Jaime Lannister]] is named Lord Commander in his place. [[sandor-clegane|Sandor Clegane]] joins the Kingsguard too, although he is not a knight. Barristan, who commanded the king’s guards under [[robert-baratheon|Robert]], is no longer one of them, and he leaves the court.',
      },
    ),
  ],
  'syrio-forel': [
    inBoth(
      [3, 23],
      { it: 'Il maestro di danza', en: 'The dancing master' },
      {
        it: 'Syrio Forel viene da Braavos, dove era la Prima Spada. [[eddard-stark|Eddard Stark]] lo assume perché insegni a sua figlia [[arya-stark|Arya]] a usare Ago, la spada che le ha regalato il fratellastro [[jon-snow|Jon Snow]], alla maniera di Braavos: la danza dell’acqua. Le lezioni cominciano con spade di legno. Per tutti gli altri, Arya sta prendendo lezioni di danza.',
        en: 'Syrio Forel comes from Braavos, where he was the First Sword. [[eddard-stark|Eddard Stark]] hires him to teach his daughter [[arya-stark|Arya]] to use Needle, the sword her half-brother [[jon-snow|Jon Snow]] gave her, in the Braavosi way: the water dance. Their lessons begin with wooden swords. To everyone else, Arya is taking dancing lessons.',
      },
    ),
    onScreen(
      [6, 44],
      { it: 'La mente altrove', en: 'A mind elsewhere' },
      {
        it: 'Syrio dà ad [[arya-stark|Arya]] esercizi per migliorare equilibrio e rapidità, come stare in bilico sulle scale e inseguire i gatti del castello. Durante una lezione lei non riesce a concentrarsi, turbata dalla morte del suo amico [[mycah|Mycah]] e dalla ferita che il padre ha riportato in uno scontro con [[jaime-lannister|Jaime Lannister]]. Syrio le dice che chi combatte con la mente altrove è più vulnerabile, e le insegna a mettere da parte i pensieri e a pensare solo al presente.',
        en: 'Syrio sets [[arya-stark|Arya]] exercises to sharpen her balance and speed, such as balancing on the stairs and chasing the cats of the castle. During one lesson she cannot keep her mind on the fight, troubled by the death of her friend [[mycah|Mycah]] and by the wound her father took in a fight with [[jaime-lannister|Jaime Lannister]]. Syrio tells her that a fighter whose mind is elsewhere is easier to hurt, and teaches her to set her worries aside and think only of the moment.',
      },
    ),
    inBoth(
      [8, 51],
      { it: 'La spada di legno', en: 'The wooden sword' },
      {
        it: 'Dopo l’arresto di [[eddard-stark|Eddard Stark]], il cavaliere della Guardia reale [[meryn-trant|Meryn Trant]] arriva con alcune guardie dei Lannister per prendere [[arya-stark|Arya]] durante una lezione. Syrio si mette tra lei e loro, armato solo di una spada di legno, e tiene testa alle guardie. Meryn gli spezza la spada di legno, ma Syrio continua a combattere e dice ad Arya di scappare. Lei fugge, e non vede come finisce lo scontro.',
        en: 'After [[eddard-stark|Eddard Stark]]’s arrest, the Kingsguard knight [[meryn-trant|Meryn Trant]] comes with Lannister guardsmen to take [[arya-stark|Arya]] during a lesson. Syrio stands between her and them, armed only with a wooden sword, and fights off the guardsmen. Meryn breaks his wooden sword, but Syrio keeps fighting and tells Arya to run. She escapes, and does not see how the fight ends.',
      },
    ),
  ],
  'petyr-baelish': [
    onScreen(
      [3, 19],
      { it: 'Il pugnale e il bordello', en: 'The dagger and the brothel' },
      {
        it: 'Petyr Baelish, detto Ditocorto, è il maestro del conio nel concilio ristretto. A [[eddard-stark|Eddard Stark]], appena arrivato come Primo Cavaliere, rivela che la corona ha sei milioni di dragoni d’oro di debiti. Uno dei suoi uomini scorge [[catelyn-stark|Catelyn Stark]] mentre entra in città di nascosto, e lei viene portata in un bordello di Petyr, dove la aspetta anche [[varys|Varys]]. Petyr dice che il pugnale mandato a uccidere il figlio di Catelyn era suo, finché non lo perse in una scommessa con [[tyrion-lannister|Tyrion Lannister]]. Poi porta Eddard da lei e promette di aiutarli, per l’affetto che un tempo provava per Catelyn.',
        en: 'Petyr Baelish, called Littlefinger, is master of coin on the small council. He tells [[eddard-stark|Eddard Stark]], newly arrived as Hand, that the crown is six million gold dragons in debt. One of his men spots [[catelyn-stark|Catelyn Stark]] entering the city in secret, and she is brought to a brothel he owns, where [[varys|Varys]] is waiting too. Petyr says that the dagger sent to kill her son was his, until he lost it in a wager to [[tyrion-lannister|Tyrion Lannister]]. He then takes Eddard to see her and promises to help them, for the affection he once had for Catelyn.',
      },
    ),
    inBooks(
      [3, 19],
      { it: 'Amici d’infanzia', en: 'Childhood friends' },
      {
        it: 'Petyr Baelish, detto Ditocorto, siede nel concilio ristretto come maestro del conio. Alcuni uomini della Guardia cittadina gli portano al castello [[catelyn-stark|Catelyn Stark]], giunta ad Approdo del Re in segreto. Parlano degli anni in cui sono cresciuti insieme, e lei non gli dice il vero motivo del suo viaggio. Li raggiunge [[varys|Varys]], che chiede di vedere il pugnale. Petyr dice che un tempo era suo, finché non lo perse in una scommessa durante un torneo con il fratello della regina, [[tyrion-lannister|Tyrion Lannister]]. Poi trasferisce Catelyn in uno dei suoi bordelli, dove nessuno la cercherà.',
        en: 'Petyr Baelish, called Littlefinger, sits on the small council as master of coin. Men of the City Watch bring [[catelyn-stark|Catelyn Stark]], who has come to King’s Landing in secret, to him in the castle. They talk about the years when they grew up together, and she does not tell him the true reason for her journey. [[varys|Varys]] joins them and asks to see her dagger. Petyr says it used to be his, until he lost it in a wager at a tourney to the queen’s brother, [[tyrion-lannister|Tyrion Lannister]]. He then moves Catelyn to one of his brothels, where nobody will look for her.',
      },
    ),
    inBooks(
      [3, 21],
      { it: 'La strada per il bordello', en: 'The way to the brothel' },
      {
        it: 'Al primo concilio ristretto di [[eddard-stark|Eddard Stark]] come Primo Cavaliere, Petyr scambia frecciate con [[renly-baratheon|Renly Baratheon]] e spiega a Eddard quanto sia indebitata la corona. Dopo la riunione lo conduce nelle viscere del castello e giù per una stretta fila di appigli scavati nella pietra, fino ai cavalli che li aspettano in fondo, e lo porta in un bordello. Eddard lo aggredisce, finché [[rodrik-cassel|ser Rodrik Cassel]] non gli mostra che [[catelyn-stark|Catelyn]] è davvero lì. Petyr promette di aiutare Eddard a scoprire come sia morto Jon Arryn.',
        en: 'At [[eddard-stark|Eddard Stark]]’s first small council as Hand, Petyr trades barbs with [[renly-baratheon|Renly Baratheon]] and tells Eddard how deep in debt the crown is. After the meeting he leads Eddard down into the depths of the castle and along a narrow row of handholds cut into the stone, to horses waiting at the bottom, and takes him to a brothel. Eddard turns on him, until [[rodrik-cassel|Ser Rodrik Cassel]] shows him that [[catelyn-stark|Catelyn]] is truly there. Petyr promises to help Eddard find out how Jon Arryn died.',
      },
    ),
    inBooks(
      [4, 26],
      { it: 'Tre spie e uno scudiero', en: 'Three spies and a squire' },
      {
        it: 'Petyr fa visita a [[eddard-stark|Eddard Stark]] nella Torre del Primo Cavaliere e gli indica tre delle persone incaricate di sorvegliarlo. Gli parla anche di chi potrebbe sapere di più sulla morte di Jon Arryn, tra cui il suo ex scudiero, che re Robert ha da poco nominato cavaliere. Quando Eddard lo ringrazia, Petyr gli dice che non fidarsi di lui è stata la cosa più saggia che abbia fatto da quando è arrivato in città.',
        en: 'Petyr visits [[eddard-stark|Eddard Stark]] in the Tower of the Hand and points out three of the people set to watch him. He also tells Eddard of people who may know more about Jon Arryn’s death, among them Jon Arryn’s former squire, whom King Robert has since knighted. When Eddard thanks him, Petyr tells him that distrusting him was the wisest thing Eddard has done since he came to the city.',
      },
    ),
    onScreen(
      [4, 30],
      { it: 'Consigli e racconti', en: 'Advice and stories' },
      {
        it: 'Petyr consiglia a [[eddard-stark|Eddard Stark]] di condurre con più discrezione le sue indagini sulla morte di Jon Arryn. Gli indica una spia della regina, un ragazzino che riferisce a [[varys|Varys]] e una septa al servizio dello stesso Petyr, poi gli rivela che l’ex scudiero di Jon Arryn, [[hugh-of-the-vale|Hugh della Valle]], è stato nominato cavaliere e combatterà nel torneo imminente, e che Jon Arryn era stato da un armaiolo della città. Al torneo siede accanto a [[sansa-stark|Sansa Stark]] e le racconta che [[gregor-clegane|Gregor Clegane]] spinse un giorno il viso del fratello minore [[sandor-clegane|Sandor]] nel fuoco.',
        en: 'Petyr warns [[eddard-stark|Eddard Stark]] to keep his inquiry into Jon Arryn’s death quieter. He points out a spy of the queen, a boy who reports to [[varys|Varys]] and a septa of his own, then tells Eddard that Jon Arryn’s former squire, [[hugh-of-the-vale|Hugh of the Vale]], has been knighted and will ride in the coming tourney, and that Jon Arryn visited an armorer in the city. At the tourney he sits beside [[sansa-stark|Sansa Stark]] and tells her that [[gregor-clegane|Gregor Clegane]] once pushed his younger brother [[sandor-clegane|Sandor]]’s face into a fire.',
      },
    ),
    inBoth(
      [5, 36],
      { it: 'La figlia di Robert', en: 'Robert’s daughter' },
      {
        it: 'Dopo che [[eddard-stark|Eddard Stark]] ha lasciato la carica di Primo Cavaliere, Petyr lo porta in un bordello della città, per le sue indagini sulla morte di Jon Arryn. Lì una delle donne ha avuto una bambina da [[robert-baratheon|re Robert]], Barra. Sulla via del ritorno [[jaime-lannister|Jaime Lannister]] e i suoi uomini li fermano in strada. Petyr si allontana a cavallo, promettendo di tornare con la Guardia cittadina, e gli uomini di Jaime attaccano quelli di Eddard.',
        en: 'After [[eddard-stark|Eddard Stark]] gives up his office as Hand, Petyr takes him to a brothel in the city, as part of Eddard’s inquiry into Jon Arryn’s death. There one of the women has a baby daughter by [[robert-baratheon|King Robert]], Barra. On their way back, [[jaime-lannister|Jaime Lannister]] and his men stop them in the street. Petyr rides off, promising to come back with the City Watch, and Jaime’s men attack Eddard’s.',
      },
    ),
    inBoth(
      [7, 50],
      { it: 'Un pugnale alla gola', en: 'A dagger at his throat' },
      {
        it: '[[robert-baratheon|Re Robert]] sta morendo per una ferita riportata durante una caccia al cinghiale. [[eddard-stark|Eddard Stark]] vuole mettere sul trono Stannis, il fratello di Robert, al posto di [[joffrey-baratheon|Joffrey]]. Petyr lo esorta ad accettare Joffrey, ed Eddard rifiuta. Eddard chiede allora a Petyr di portare dalla loro parte la Guardia cittadina, e Petyr accetta. Quando, dopo la morte di Robert, Eddard affronta [[cersei-lannister|Cersei]] nella sala del trono, le cappe dorate di [[janos-slynt|Janos Slynt]] uccidono i suoi uomini, e Petyr punta un pugnale alla gola di Eddard, ricordandogli di averlo avvertito di non fidarsi di lui.',
        en: '[[robert-baratheon|King Robert]] is dying of a wound from a boar hunt. [[eddard-stark|Eddard Stark]] means to put Robert’s brother Stannis on the throne in place of [[joffrey-baratheon|Joffrey]]. Petyr urges him to accept Joffrey instead, and Eddard refuses. Eddard then asks Petyr to win the City Watch over to their side, and Petyr agrees. When Eddard confronts [[cersei-lannister|Cersei]] in the throne room after Robert’s death, the gold cloaks of [[janos-slynt|Janos Slynt]] kill his men, and Petyr holds a dagger to Eddard’s throat, reminding him that he warned him not to trust him.',
      },
    ),
  ],
  'varys': [
    inBooks(
      [3, 19],
      { it: 'La visitatrice segreta', en: 'The secret visitor' },
      {
        it: 'Varys è il maestro dei sussurratori nel concilio ristretto. Sa che [[catelyn-stark|Catelyn Stark]] è giunta ad Approdo del Re in segreto, e del pugnale che ha portato con sé. Quando lei viene condotta da [[petyr-baelish|Petyr Baelish]] al castello, Varys li raggiunge, le esprime il suo dispiacere per il figlio [[bran-stark|Bran]] e chiede di vedere il pugnale. Petyr dice che era suo, finché non lo perse in una scommessa con [[tyrion-lannister|Tyrion Lannister]].',
        en: 'Varys is the master of whisperers on the small council. He knows that [[catelyn-stark|Catelyn Stark]] has come to King’s Landing in secret, and of the dagger she has brought. When she is taken to [[petyr-baelish|Petyr Baelish]] in the castle, Varys joins them, offers his sympathy for her son [[bran-stark|Bran]] and asks to see the knife. Petyr says it was his, until he lost it in a wager to [[tyrion-lannister|Tyrion Lannister]].',
      },
    ),
    onScreen(
      [3, 21],
      { it: 'Preghiere per il principe', en: 'Prayers for the prince' },
      {
        it: 'Varys è l’eunuco che siede nel concilio ristretto come maestro dei sussurratori. Quando [[eddard-stark|Eddard Stark]] arriva come Primo Cavaliere, Varys gli dice che il concilio ha pregato per la guarigione del [[joffrey-baratheon|principe Joffrey]] dopo i guai lungo la strada; Eddard risponde che è un peccato che nessuno abbia pregato per il garzone del macellaio, [[mycah|Mycah]]. Varys ha anche avvertito [[petyr-baelish|Petyr Baelish]] che [[catelyn-stark|Catelyn Stark]] sta arrivando in città in segreto, e aspetta con Petyr quando lei viene portata in uno dei bordelli di Petyr a mostrare il pugnale mandato contro suo figlio.',
        en: 'Varys is the eunuch who sits on the small council as master of whisperers. When [[eddard-stark|Eddard Stark]] arrives as Hand, Varys tells him the council has been praying for [[joffrey-baratheon|Prince Joffrey]]’s recovery after his trouble on the road; Eddard answers that it is a shame no one prayed for the butcher’s boy, [[mycah|Mycah]]. Varys has also told [[petyr-baelish|Petyr Baelish]] that [[catelyn-stark|Catelyn Stark]] is coming to the city in secret, and he waits with Petyr when she is brought to one of Petyr’s brothels to show them the dagger sent against her son.',
      },
    ),
    inBooks(
      [5, 31],
      { it: 'Un visitatore travestito', en: 'A visitor in disguise' },
      {
        it: 'Una notte, dopo il torneo per il nuovo Primo Cavaliere, uno sconosciuto si presenta negli alloggi di [[eddard-stark|Eddard Stark]], e si rivela essere Varys. Racconta a Eddard che la [[cersei-lannister|regina]] intendeva far uccidere [[robert-baratheon|re Robert]] nella mischia, finché Eddard non ha convinto il re a non parteciparvi, e che ci riproverà. Gli rivela anche che Jon Arryn è stato ucciso con un veleno chiamato lacrime di Lys, e lascia intendere che a somministrarlo sia stato il suo ex scudiero, [[hugh-of-the-vale|ser Hugh]], ucciso nelle giostre prima che potesse parlare con Eddard.',
        en: 'One night, after the tourney for the new Hand, a stranger comes to [[eddard-stark|Eddard Stark]]’s rooms, and he turns out to be Varys. He tells Eddard that [[cersei-lannister|the queen]] meant to have [[robert-baratheon|King Robert]] killed in the melee, until Eddard talked the king out of riding in it, and that she will try again. He also reveals that Jon Arryn was killed with a poison called the tears of Lys, and suggests that his former squire, [[hugh-of-the-vale|Ser Hugh]], gave it to him and was killed in the lists before he could speak to Eddard.',
      },
    ),
    onScreen(
      [5, 33],
      { it: 'Sotto la Fortezza Rossa', en: 'Beneath the Red Keep' },
      {
        it: 'Varys dice in segreto a [[eddard-stark|Eddard Stark]] che [[robert-baratheon|re Robert]] morirà presto, a meno che Eddard non riesca a salvarlo, e che Jon Arryn è stato ucciso con un veleno chiamato lacrime di Lys dopo che aveva cominciato a fare domande. Indica in [[hugh-of-the-vale|Hugh della Valle]] uno dei responsabili. Nei passaggi sotto il castello incontra il magistro [[illyrio-mopatis|Illyrio]] di Pentos. Varys dice che il leone e il lupo saranno presto in guerra, prima di quanto avessero previsto, mentre [[drogo|khal Drogo]] non attraverserà il mare finché non sarà nato suo figlio. [[arya-stark|Arya]] li sente parlare.',
        en: 'Varys tells [[eddard-stark|Eddard Stark]] in secret that [[robert-baratheon|King Robert]] will soon be dead unless Eddard can save him, and that Jon Arryn was killed with a poison called the tears of Lys after he started asking questions. He names [[hugh-of-the-vale|Hugh of the Vale]] as part of the murder. In the passages beneath the castle, he meets Magister [[illyrio-mopatis|Illyrio]] of Pentos. Varys says the lion and the wolf will soon be at war, sooner than they planned, while [[drogo|Khal Drogo]] will not cross the sea until his son is born. [[arya-stark|Arya]] overhears them.',
      },
    ),
    inBooks(
      [5, 34],
      { it: 'Notizie da oltre il mare', en: 'News from across the sea' },
      {
        it: 'A una riunione del concilio ristretto, Varys riferisce che [[daenerys-targaryen|Daenerys Targaryen]] aspetta un figlio dal suo khal dothraki. Quando gli chiedono da dove venga la notizia, fa il nome di [[jorah-mormont|ser Jorah Mormont]]. Varys è tra i consiglieri favorevoli a mandare dei sicari contro Daenerys e il bambino che porta in grembo, come vuole [[robert-baratheon|re Robert]]. [[eddard-stark|Eddard Stark]] si rifiuta di dare l’ordine e lascia la carica di Primo Cavaliere.',
        en: 'At a meeting of the small council, Varys brings word that [[daenerys-targaryen|Daenerys Targaryen]] is with child by her Dothraki khal. Asked where the news comes from, he names [[jorah-mormont|Ser Jorah Mormont]]. Varys is among the councillors who favour sending assassins after Daenerys and her unborn child, as [[robert-baratheon|King Robert]] wants. [[eddard-stark|Eddard Stark]] refuses to have it done and gives up his office as Hand.',
      },
    ),
    onScreen(
      [8, 59],
      { it: 'Visita alla cella', en: 'A visit to the cell' },
      {
        it: 'Varys fa visita a [[eddard-stark|Eddard Stark]] nella sua cella sotto la Fortezza Rossa e gli chiede perché abbia avvertito [[cersei-lannister|Cersei]] di ciò che intendeva fare. Eddard dice che voleva risparmiare i figli di lei. Varys risponde che è stata la sua pietà a uccidere [[robert-baratheon|Robert]], e gli dice che [[catelyn-stark|Catelyn]] non tiene più prigioniero [[tyrion-lannister|Tyrion]], quindi gli Stark non hanno nulla da offrire in cambio della vita di Eddard. Quando Eddard gli chiede chi serva davvero, Varys risponde: il regno.',
        en: 'Varys visits [[eddard-stark|Eddard Stark]] in his cell beneath the Red Keep and asks him why he warned [[cersei-lannister|Cersei]] of what he meant to do. Eddard says he wanted to spare her children. Varys answers that his mercy is what killed [[robert-baratheon|Robert]], and tells him that [[catelyn-stark|Catelyn]] no longer holds [[tyrion-lannister|Tyrion]], so the Starks have nothing to trade for Eddard’s life. When Eddard asks whom Varys truly serves, Varys answers the realm.',
      },
    ),
    inBoth(
      [9, 66],
      { it: 'Un consiglio inascoltato', en: 'Advice not taken' },
      {
        it: 'Varys va da [[eddard-stark|Eddard Stark]] nelle segrete e lo esorta a confessare il tradimento: in cambio gli sarebbe permesso di unirsi ai Guardiani della Notte, e da quella confessione può dipendere la vita di sua figlia [[sansa-stark|Sansa]]. Eddard confessa davanti alla folla al Grande Tempio di Baelor. [[joffrey-baratheon|Joffrey]] ordina comunque di tagliargli la testa. Varys cerca invano di fermare il re, e [[ilyn-payne|Ilyn Payne]] decapita Eddard con la spada di Eddard stesso.',
        en: 'Varys comes to [[eddard-stark|Eddard Stark]] in the dungeons and urges him to confess to treason: he would then be allowed to join the Night’s Watch, and his daughter [[sansa-stark|Sansa]]’s life may depend on it. Eddard confesses before the crowd at the Great Sept of Baelor. [[joffrey-baratheon|Joffrey]] orders his head cut off all the same. Varys tries in vain to stop the king, and [[ilyn-payne|Ilyn Payne]] beheads Eddard with Eddard’s own sword.',
      },
    ),
  ],
  'pycelle': [
    inBoth(
      [3, 21],
      {
        it: 'Il concilio del nuovo Primo Cavaliere',
        en: 'The new Hand’s council',
      },
      {
        it: 'Pycelle è il Gran Maestro, un uomo molto anziano che siede da molti anni nel concilio ristretto. Quando [[eddard-stark|Eddard Stark]] arriva ad Approdo del Re come Primo Cavaliere del Re, Pycelle è nel concilio che lo accoglie, con [[petyr-baelish|Petyr Baelish]], [[varys|Varys]] e [[renly-baratheon|Renly Baratheon]]. Il concilio viene a sapere che [[robert-baratheon|re Robert]] vuole un torneo in onore del nuovo Primo Cavaliere, anche se la corona è già profondamente indebitata.',
        en: 'Pycelle is the Grand Maester, a very old man who has sat on the small council for many years. When [[eddard-stark|Eddard Stark]] arrives in King’s Landing as Hand of the King, Pycelle is on the council that receives him, with [[petyr-baelish|Petyr Baelish]], [[varys|Varys]] and [[renly-baratheon|Renly Baratheon]]. The council learns that [[robert-baratheon|King Robert]] wants a tourney held in honour of the new Hand, although the crown is already deep in debt.',
      },
    ),
    inBoth(
      [4, 26],
      { it: 'Domande su Jon Arryn', en: 'Questions about Jon Arryn' },
      {
        it: '[[eddard-stark|Eddard Stark]] interroga Pycelle sulla morte di Jon Arryn, il Primo Cavaliere che lo ha preceduto. Pycelle ha curato Jon Arryn durante la sua ultima malattia, e a suo dire il male è stato improvviso ma non aveva nulla di sospetto. Quando Eddard ipotizza un avvelenamento, Pycelle indirizza i suoi sospetti verso [[varys|Varys]].',
        en: '[[eddard-stark|Eddard Stark]] questions Pycelle about the death of Jon Arryn, the Hand before him. Pycelle tended Jon Arryn in his last illness, and in his view the illness came on suddenly but was nothing suspicious. When Eddard raises the possibility of poison, Pycelle steers his suspicion towards [[varys|Varys]].',
      },
    ),
    inBoth(
      [7, 50],
      { it: 'L’ultima ferita del re', en: 'The king’s last wound' },
      {
        it: '[[robert-baratheon|Re Robert]] viene ferito gravemente da un cinghiale durante una caccia, e Pycelle lo cura. Robert muore per la ferita. [[eddard-stark|Eddard Stark]] viene arrestato per tradimento nella sala del trono, e Pycelle conserva il suo posto nel concilio ristretto sotto il nuovo re, [[joffrey-baratheon|Joffrey]], che governa con la madre [[cersei-lannister|Cersei]] al suo fianco.',
        en: '[[robert-baratheon|King Robert]] is gravely wounded by a boar while hunting, and Pycelle tends him. Robert dies of the wound. [[eddard-stark|Eddard Stark]] is seized for treason in the throne room, and Pycelle keeps his place on the small council under the new king, [[joffrey-baratheon|Joffrey]], who rules with his mother [[cersei-lannister|Cersei]] beside him.',
      },
    ),
    onScreen(
      [10, 73],
      { it: 'Meno fragile di quanto sembri', en: 'Not as frail as he looks' },
      {
        it: 'Pycelle porta a letto [[ros|Ros]], una donna del bordello di [[petyr-baelish|Petyr Baelish]]. Poi divaga sui re che ha servito: Aerys Targaryen, che da giovane affascinante finì per diventare un folle ossessionato dal fuoco, poi [[robert-baratheon|Robert]], un grande soldato ma forse non il migliore dei re, e ora [[joffrey-baratheon|Joffrey]]. Ros se ne va, annoiata. Rimasto solo, Pycelle si stiracchia e fa esercizi come un uomo molto più giovane, poi riprende la sua aria fragile prima di uscire dalle sue stanze.',
        en: 'Pycelle takes [[ros|Ros]], a woman from [[petyr-baelish|Petyr Baelish]]’s brothel, to bed. Afterwards he rambles about the kings he has served: Aerys Targaryen, who began as a charming young man and ended a madman obsessed with fire, then [[robert-baratheon|Robert]], a great soldier but perhaps not the best of kings, and now [[joffrey-baratheon|Joffrey]]. Ros leaves, bored. Alone, Pycelle stretches and limbers up like a much younger man, then puts on his frail air again before he walks out of his chambers.',
      },
    ),
  ],
  'sandor-clegane': [
    inBooks(
      [4, 5],
      { it: 'La guardia del principe', en: 'The prince’s guard' },
      {
        it: '[[robert-baratheon|Re Robert]] arriva a Grande Inverno per chiedere a [[eddard-stark|Eddard Stark]] di diventare il suo Primo Cavaliere, dopo la morte di Jon Arryn. Tra i cavalieri del corteo reale Eddard riconosce Sandor Clegane, un uomo enorme al servizio del [[joffrey-baratheon|principe Joffrey]], che cavalca accanto al principe insieme a [[jaime-lannister|ser Jaime Lannister]], mentre il fratello nano della regina, [[tyrion-lannister|Tyrion]], li segue.',
        en: '[[robert-baratheon|King Robert]] comes to Winterfell to ask [[eddard-stark|Eddard Stark]] to be his Hand, after the death of Jon Arryn. Among the riders of the royal party, Eddard recognises Sandor Clegane, a huge man in the service of [[joffrey-baratheon|Prince Joffrey]], riding beside the prince with [[jaime-lannister|Ser Jaime Lannister]], while the queen’s dwarf brother [[tyrion-lannister|Tyrion]] follows behind them.',
      },
    ),
    inBooks(
      [4, 17],
      { it: 'Il garzone del macellaio', en: 'The butcher’s boy' },
      {
        it: 'Lungo la strada verso sud, dopo che [[arya-stark|Arya]] e la sua metalupa [[nymeria|Nymeria]] hanno aggredito il [[joffrey-baratheon|principe Joffrey]] presso il Tridente, Sandor guida uno dei gruppi di uomini dei Lannister mandati a cercare Arya e il suo amico [[mycah|Mycah]], il garzone del macellaio. Cavalca a nord del fiume. Non trova Arya, ma quando Mycah cerca di fuggire lo insegue e lo uccide. [[eddard-stark|Eddard Stark]] lo incontra al suo ritorno e viene a sapere che ha ucciso il ragazzo.',
        en: 'On the road south, after [[arya-stark|Arya]] and her direwolf [[nymeria|Nymeria]] attack [[joffrey-baratheon|Prince Joffrey]] by the Trident, Sandor leads one of the Lannister parties sent to search for Arya and her friend [[mycah|Mycah]], the butcher’s boy. He rides north of the river. He does not find Arya, but when Mycah tries to flee he runs the boy down and kills him. [[eddard-stark|Eddard Stark]] meets him on his return and learns that he has cut the boy down.',
      },
    ),
    onScreen(
      [4, 30],
      { it: 'Il racconto di Ditocorto', en: 'Littlefinger’s tale' },
      {
        it: 'Sandor Clegane, detto il Mastino, fa da guardia al [[joffrey-baratheon|principe Joffrey]]. Lungo la strada per Approdo del Re ha inseguito e ucciso [[mycah|Mycah]], il garzone del macellaio, e quando [[eddard-stark|Eddard Stark]] lo ha accusato di averlo travolto a cavallo, ha risposto che il ragazzo correva, ma non abbastanza veloce. Al torneo per il nuovo Primo Cavaliere guarda con disgusto il fratello [[gregor-clegane|Gregor]] uccidere [[hugh-of-the-vale|Hugh della Valle]]. [[petyr-baelish|Petyr Baelish]] racconta a [[sansa-stark|Sansa Stark]] che, quando Sandor era bambino, Gregor gli tenne il viso nel fuoco perché aveva giocato con uno dei suoi giocattoli, e che da allora i due fratelli si odiano.',
        en: 'Sandor Clegane, called the Hound, guards [[joffrey-baratheon|Prince Joffrey]]. On the road to King’s Landing he hunted down and killed [[mycah|Mycah]], the butcher’s boy, and when [[eddard-stark|Eddard Stark]] accused him of riding the boy down, he answered that the boy ran, though not very fast. At the tourney for the new Hand he watches with distaste as his brother [[gregor-clegane|Gregor]] kills [[hugh-of-the-vale|Hugh of the Vale]]. [[petyr-baelish|Petyr Baelish]] tells [[sansa-stark|Sansa Stark]] that when Sandor was a boy, Gregor held his face in a fire for playing with one of his toys, and that the brothers have hated each other ever since.',
      },
    ),
    inBooks(
      [4, 30],
      { it: 'Il volto bruciato', en: 'The burned face' },
      {
        it: 'Sandor si batte bene nel torneo per il nuovo Primo Cavaliere e alla fine del primo giorno è tra gli ultimi quattro cavalieri rimasti, insieme al fratello [[gregor-clegane|Gregor]]. Al banchetto di quella sera il [[joffrey-baratheon|principe Joffrey]] gli ordina di riaccompagnare [[sansa-stark|Sansa Stark]] alla Fortezza Rossa. Lungo la strada Sandor la costringe a guardarlo in faccia e le racconta come si è procurato le ustioni: quando aveva sette anni Gregor gli spinse il viso in un braciere, e il loro padre mentì sull’accaduto perché Gregor potesse comunque essere nominato cavaliere. Poi minaccia di ucciderla se lo dirà a qualcuno.',
        en: 'Sandor rides well in the tourney for the new Hand and at the end of the first day is among the last four riders left, with his brother [[gregor-clegane|Gregor]]. At the feast that night, [[joffrey-baratheon|Prince Joffrey]] has him escort [[sansa-stark|Sansa Stark]] back to the Red Keep. On the way he makes her look at his face and tells her how he got his burns: when he was seven, Gregor pushed his face into a brazier, and their father lied about it, so that Gregor could still be knighted. He then threatens to kill her if she tells anyone.',
      },
    ),
    inBoth(
      [5, 31],
      { it: 'Contro il fratello', en: 'Against his brother' },
      {
        it: 'Nella giostra [[loras-tyrell|Loras Tyrell]] affronta [[gregor-clegane|Gregor]], il fratello di Sandor, in sella a una giumenta in calore, e lo stallone di Gregor si imbizzarrisce e lo disarciona. Gregor si scaglia contro Loras con la spada, e Sandor interviene e combatte contro il fratello per salvare Loras, finché [[robert-baratheon|re Robert]] non ordina loro di fermarsi. Gregor se ne va, e Loras concede la vittoria a Sandor.',
        en: 'In the lists, [[loras-tyrell|Loras Tyrell]] rides a mare in heat against Sandor’s brother [[gregor-clegane|Gregor]], whose stallion is maddened and throws him. Gregor goes at Loras with a sword, and Sandor steps in and fights his brother to save Loras, until [[robert-baratheon|King Robert]] orders them to stop. Gregor leaves, and Loras gives Sandor the victory.',
      },
    ),
    inBoth(
      [7, 50],
      { it: 'Nella sala del trono', en: 'In the throne room' },
      {
        it: '[[robert-baratheon|Re Robert]] muore per una ferita riportata durante una caccia al cinghiale, e Sandor fa la guardia a [[joffrey-baratheon|Joffrey]] mentre il nuovo re siede sul Trono di Spade. Quando [[eddard-stark|Eddard Stark]] tenta di far arrestare Joffrey e sua madre [[cersei-lannister|Cersei]], Sandor sguaina la spada insieme alle guardie dei Lannister, e la Guardia cittadina si rivolta contro Eddard. Gli uomini di Eddard vengono uccisi, ed Eddard viene fatto prigioniero.',
        en: '[[robert-baratheon|King Robert]] dies of a wound from a boar hunt, and Sandor stands guard over [[joffrey-baratheon|Joffrey]] as the new king sits the Iron Throne. When [[eddard-stark|Eddard Stark]] tries to have Joffrey and his mother [[cersei-lannister|Cersei]] taken into custody, Sandor draws his sword with the Lannister guardsmen, and the City Watch turns on Eddard. Eddard’s men are cut down, and Eddard is taken prisoner.',
      },
    ),
    inBoth(
      [8, 58],
      { it: 'Un mantello bianco', en: 'A white cloak' },
      {
        it: 'Re [[joffrey-baratheon|Joffrey]] tiene udienza nella sala del trono. [[barristan-selmy|Barristan Selmy]] viene allontanato dalla Guardia reale, e [[jaime-lannister|Jaime Lannister]] ne viene nominato Lord Comandante. Sandor entra a far parte dei confratelli giurati della Guardia reale, anche se non è un cavaliere e rifiuta di pronunciare i voti di cavalleria. Come prima, resta di guardia al fianco di Joffrey.',
        en: 'King [[joffrey-baratheon|Joffrey]] holds court in the throne room. [[barristan-selmy|Barristan Selmy]] is removed from the Kingsguard, and [[jaime-lannister|Jaime Lannister]] is named its Lord Commander. Sandor is made one of the Kingsguard’s sworn brothers, although he is not a knight and refuses to take a knight’s vows. As before, he stands guard at Joffrey’s side.',
      },
    ),
    inBoth(
      [10, 68],
      { it: 'Il sangue sul viso', en: 'The blood on her face' },
      {
        it: 'Re [[joffrey-baratheon|Joffrey]] porta [[sansa-stark|Sansa Stark]] a vedere le teste dei traditori infilzate sulle mura, tra cui quella di suo padre. Quando lei dice che un giorno suo fratello potrebbe portarle la testa di Joffrey, il re fa colpire Sansa da [[meryn-trant|Meryn Trant]]. Sandor, che assiste alla scena, le asciuga il sangue dal viso.',
        en: 'King [[joffrey-baratheon|Joffrey]] takes [[sansa-stark|Sansa Stark]] to see the heads of traitors set on spikes over the walls, her father’s among them. When she says that her brother may one day bring her Joffrey’s head, the king has [[meryn-trant|Meryn Trant]] strike her. Sandor, who stands by, wipes the blood from her face.',
      },
    ),
  ],
  'janos-slynt': [
    inBoth(
      [4, 28],
      { it: 'Troppo pochi uomini', en: 'Too few men' },
      {
        it: 'Janos Slynt comanda la Guardia cittadina di Approdo del Re, le cappe dorate. Con la città piena di gente arrivata per il torneo in onore del nuovo Primo Cavaliere, riferisce i disordini al concilio ristretto e dice di avere troppo pochi uomini. [[eddard-stark|Eddard Stark]] gli presta venti uomini della propria guardia personale fino alla fine del torneo, e ordina di arruolare altre cinquanta guardie.',
        en: 'Janos Slynt commands the City Watch of King’s Landing, the gold cloaks. With the city full of people come for the tourney in honour of the new Hand, he reports the trouble to the small council and says he has too few men. [[eddard-stark|Eddard Stark]] lends him twenty men of his own household guard until the tourney is over, and orders fifty more watchmen hired.',
      },
    ),
    inBoth(
      [7, 50],
      { it: 'Le cappe dorate', en: 'The gold cloaks' },
      {
        it: '[[robert-baratheon|Re Robert]] muore per una ferita riportata durante una caccia al cinghiale. A [[eddard-stark|Eddard Stark]] serve la Guardia cittadina per arrestare [[joffrey-baratheon|Joffrey]] e sua madre, e [[petyr-baelish|Petyr Baelish]] deve comprarne la lealtà per lui. Nella sala del trono Eddard ordina a Janos di arrestare la regina e i suoi figli. Le cappe dorate invece uccidono gli uomini di Eddard, ed Eddard viene fatto prigioniero.',
        en: '[[robert-baratheon|King Robert]] dies of a wound from a boar hunt. [[eddard-stark|Eddard Stark]] needs the City Watch to take [[joffrey-baratheon|Joffrey]] and his mother into custody, and [[petyr-baelish|Petyr Baelish]] is to buy its loyalty for him. In the throne room Eddard orders Janos to seize the queen and her children. Instead the gold cloaks kill Eddard’s men, and Eddard is taken prisoner.',
      },
    ),
    inBoth(
      [8, 58],
      { it: 'Lord di Harrenhal', en: 'Lord of Harrenhal' },
      {
        it: 'Re [[joffrey-baratheon|Joffrey]] tiene udienza e ricompensa Janos per il suo ruolo nell’arresto di [[eddard-stark|Eddard Stark]]: lo nomina lord di Harrenhal, il grande castello delle Terre dei Fiumi. Janos resta al comando della Guardia cittadina. Nella stessa udienza [[barristan-selmy|Barristan Selmy]] viene allontanato dalla Guardia reale.',
        en: 'King [[joffrey-baratheon|Joffrey]] holds court and rewards Janos for his part in [[eddard-stark|Eddard Stark]]’s arrest: he makes him lord of Harrenhal, the great castle of the riverlands. Janos stays in command of the City Watch. At the same court [[barristan-selmy|Barristan Selmy]] is removed from the Kingsguard.',
      },
    ),
  ],
  'gendry': [
    inBoth(
      [4, 28],
      { it: 'L’elmo', en: 'The helm' },
      {
        it: 'Gendry è apprendista nella bottega dell’armaiolo [[tobho-mott|Tobho Mott]] ad Approdo del Re. [[eddard-stark|Eddard Stark]], sulle tracce di Jon Arryn, il Primo Cavaliere che lo ha preceduto, scopre che Jon Arryn era venuto alla bottega e aveva chiesto di vedere il ragazzo. Eddard ammira un elmo che Gendry si è fatto da sé. Guardandolo bene in viso, Eddard vi riconosce i lineamenti di [[robert-baratheon|re Robert]]: Gendry è figlio del re, anche se non lo sa.',
        en: 'Gendry is an apprentice at the forge of the armorer [[tobho-mott|Tobho Mott]] in King’s Landing. [[eddard-stark|Eddard Stark]], following the trail of Jon Arryn, the Hand before him, learns that Jon Arryn came to the forge and asked to see the boy. Eddard admires a helm Gendry has made for himself. Looking closely at the boy’s face, Eddard sees [[robert-baratheon|King Robert]]’s features in it: Gendry is the king’s son, though he does not know it.',
      },
    ),
    onScreen(
      [10, 75],
      { it: 'Recluta per la Barriera', en: 'Recruit for the Wall' },
      {
        it: 'Il maestro di Gendry lo ha mandato via, e lui viaggia verso nord tra le reclute di [[yoren|Yoren]] per i Guardiani della Notte. Tra loro c’è [[arya-stark|Arya Stark]], travestita da ragazzo con il nome di Arry. Quando alcuni degli altri ragazzi prendono di mira la spada di Arry e [[hot-pie|Frittella]] urta Gendry, Gendry minaccia di colpirlo e li mette in fuga. Poi dice ad Arya che ormai nessuno di loro conta più niente, ora che sono tutti dei Guardiani.',
        en: 'Gendry’s master has sent him away, and he rides north among [[yoren|Yoren]]’s recruits for the Night’s Watch. Among them is [[arya-stark|Arya Stark]], disguised as a boy called Arry. When some of the other boys go after Arry’s sword and [[hot-pie|Hot Pie]] bumps into Gendry, Gendry threatens to hit him and scares them off. He then tells Arya that none of them matters any more, now that they have all joined the Watch.',
      },
    ),
  ],
  'ilyn-payne': [
    inBoth(
      [2, 16],
      { it: 'La Giustizia del re', en: 'The King’s Justice' },
      {
        it: 'Ser Ilyn Payne è la Giustizia del re, il boia che esegue le condanne a morte del re. Il Re Folle gli fece strappare la lingua, e da allora non ha più parlato. Lungo la strada verso sud con il seguito di [[robert-baratheon|re Robert]], in una locanda, [[sansa-stark|Sansa Stark]] se lo trova davanti e si spaventa alla sua vista.',
        en: 'Ser Ilyn Payne is the King’s Justice, the headsman who carries out the king’s death sentences. The Mad King had his tongue torn out, and he has not spoken since. On the way south with [[robert-baratheon|King Robert]]’s party, at an inn, [[sansa-stark|Sansa Stark]] comes face to face with him and is frightened by the sight of him.',
      },
    ),
    inBoth(
      [9, 66],
      { it: 'Ghiaccio', en: 'Ice' },
      {
        it: 'Quando, lungo la strada verso sud, [[cersei-lannister|Cersei]] volle la morte della metalupa di [[sansa-stark|Sansa]], [[eddard-stark|Eddard Stark]] non lasciò il compito a Ilyn e lo eseguì di persona. Ora Eddard, arrestato per tradimento, confessa davanti alla folla al Grande Tempio di Baelor. Re [[joffrey-baratheon|Joffrey]] ordina comunque di tagliargli la testa, e Ilyn lo decapita con Ghiaccio, la spada di Eddard.',
        en: 'When [[cersei-lannister|Cersei]] wanted [[sansa-stark|Sansa]]’s direwolf killed on the road south, [[eddard-stark|Eddard Stark]] would not leave the deed to Ilyn and did it himself. Now Eddard, seized for treason, confesses before the crowd at the Great Sept of Baelor. King [[joffrey-baratheon|Joffrey]] orders his head cut off all the same, and Ilyn beheads him with Ice, Eddard’s own sword.',
      },
    ),
    onScreen(
      [10, 73],
      { it: 'La lingua del cantore', en: 'The singer’s tongue' },
      {
        it: 'Il cantore [[marillion|Marillion]] viene portato davanti a re [[joffrey-baratheon|Joffrey]] per una canzone che deride il defunto [[robert-baratheon|re Robert]] e la regina. Per punizione Joffrey ordina a Ilyn di tagliargli la lingua, e Ilyn, a cui il Re Folle fece strappare la sua, esegue l’ordine.',
        en: 'The singer [[marillion|Marillion]] is brought before King [[joffrey-baratheon|Joffrey]] for a song that mocks the late [[robert-baratheon|King Robert]] and the queen. As punishment, Joffrey orders Ilyn to cut out the singer’s tongue, and Ilyn, who lost his own tongue to the Mad King, carries out the order.',
      },
    ),
  ],
  'mycah': [
    inBooks(
      [2, 16],
      { it: 'Bastoni come spade', en: 'Sticks for swords' },
      {
        it: 'Mycah, il garzone di un macellaio, viaggia verso sud con il seguito di [[robert-baratheon|re Robert]] e diventa amico di [[arya-stark|Arya Stark]]. Presso il Tridente i due si sfidano con dei bastoni al posto delle spade, finché il [[joffrey-baratheon|principe Joffrey]], uscito a cavallo con [[sansa-stark|Sansa]] dopo aver bevuto del vino con lei, li sorprende e minaccia Mycah con la spada. Arya aggredisce il principe con il bastone, la sua metalupa [[nymeria|Nymeria]] ferisce a Joffrey la mano della spada e Arya getta la spada del principe nel fiume. Durante la zuffa Mycah scappa.',
        en: 'Mycah, a butcher’s boy, travels south with [[robert-baratheon|King Robert]]’s party and becomes friends with [[arya-stark|Arya Stark]]. By the Trident the two playfight with sticks for swords, until [[joffrey-baratheon|Prince Joffrey]], out riding with [[sansa-stark|Sansa]] after the two of them have shared some wine, comes upon them and threatens Mycah with his sword. Arya attacks the prince with her stick, her direwolf [[nymeria|Nymeria]] wounds Joffrey’s sword hand, and Arya throws the prince’s sword into the river. Mycah runs away during the fight.',
      },
    ),
    inBoth(
      [2, 17],
      { it: 'Raggiunto', en: 'Run down' },
      {
        it: 'Mycah si allena con la spada insieme ad [[arya-stark|Arya]] vicino al fiume, finché il [[joffrey-baratheon|principe Joffrey]] non lo minaccia e Arya non colpisce il principe per difenderlo. Mycah scappa. Il Mastino, l’uomo enorme che fa da guardia al principe, si mette sulle sue tracce. Il ragazzo cerca di fuggire, ma il Mastino lo raggiunge a cavallo e lo uccide. Al suo ritorno [[eddard-stark|Eddard Stark]] scopre che cosa ha fatto al ragazzo, un amico di sua figlia.',
        en: 'Mycah practises swordplay with [[arya-stark|Arya]] by the river until [[joffrey-baratheon|Prince Joffrey]] threatens him and Arya strikes the prince to defend him. Mycah runs off. The Hound, the huge man who guards the prince, goes after him. The boy tries to flee, but the Hound rides him down and kills him. On the Hound’s return [[eddard-stark|Eddard Stark]] learns what he has done to the boy, a friend of his daughter.',
      },
    ),
  ],
  'ros': [
    onScreen(
      [4, 25],
      { it: 'Il bordello di Grande Inverno', en: 'The brothel at Winterfell' },
      {
        it: 'Ros lavora nel bordello del villaggio fuori da Grande Inverno. Quando il seguito reale arriva al nord, [[tyrion-lannister|Tyrion Lannister]] è tra i suoi clienti. Al ritorno dalla Barriera, [[robb-stark|Robb]] nega a Tyrion l’ospitalità del castello e Tyrion si ferma al bordello; [[theon-greyjoy|Theon Greyjoy]], un cliente abituale di Ros, gliela raccomanda, senza sapere che i due si conoscono già. Alla Barriera [[jon-snow|Jon Snow]] racconta a un amico di aver avuto l’occasione di andare a letto con lei e di avervi rinunciato.',
        en: 'Ros works in the brothel in the town outside Winterfell. When the royal party comes north, [[tyrion-lannister|Tyrion Lannister]] is among her clients. On his way back from the Wall, [[robb-stark|Robb]] refuses Tyrion the castle’s hospitality and Tyrion stays at the brothel; [[theon-greyjoy|Theon Greyjoy]], one of her regulars, recommends Ros to him, not knowing they have already met. At the Wall, [[jon-snow|Jon Snow]] tells a friend that he once had the chance to sleep with her and turned it down.',
      },
    ),
    onScreen(
      [7, 48],
      { it: 'Verso Approdo del Re', en: 'To King’s Landing' },
      {
        it: 'Ros porta un ciondolo a forma di leone regalatole da [[tyrion-lannister|Tyrion]], e la cosa fa infuriare [[theon-greyjoy|Theon]]. Poco dopo lascia Grande Inverno per Approdo del Re, perché con la guerra in arrivo gli uomini partiranno; Theon cerca di trattenerla, e lei lo prende in giro. Nella capitale lavora in un bordello di [[petyr-baelish|Petyr Baelish]], che insegna a lei e a un’altra donna, Armeca, come compiacere i clienti. Petyr racconta loro di una donna che amava e del duello che perse per lei, e quando Ros gli chiede che cosa voglia, risponde: tutto.',
        en: 'Ros wears a lion pendant [[tyrion-lannister|Tyrion]] gave her, which angers [[theon-greyjoy|Theon]]. Soon after, she leaves Winterfell for King’s Landing, since with war coming the men will march away; Theon tries to keep her, and she teases him. In the capital she works in a brothel owned by [[petyr-baelish|Petyr Baelish]], who teaches her and another woman, Armeca, how to please the clients. He tells them of a woman he loved and the duel he lost for her, and when Ros asks what he wants, he answers everything.',
      },
    ),
    onScreen(
      [10, 73],
      { it: 'Il Gran Maestro', en: 'The Grand Maester' },
      {
        it: 'Ad Approdo del Re il [[pycelle|Gran Maestro Pycelle]] paga per la compagnia di Ros. Mentre lei raccoglie i vestiti per andarsene, il vecchio comincia a raccontarle dei re che ha servito, tra cui il Re Folle e [[robert-baratheon|Robert]], e benedice il regno del nuovo re, [[joffrey-baratheon|Joffrey]]. I suoi discorsi si perdono nel nulla, e Ros, spazientita, gli chiede dove voglia arrivare. Se ne va, rifiutando la sua offerta di accompagnarla.',
        en: 'In King’s Landing, [[pycelle|Grand Maester Pycelle]] pays for Ros’s company. As she gathers her clothes to leave, the old man starts telling her about the kings he has served, the Mad King and [[robert-baratheon|Robert]] among them, and blesses the reign of the new king, [[joffrey-baratheon|Joffrey]]. His rambling trails off, and Ros, impatient, asks him what his point was. She leaves, turning down his offer to see her out.',
      },
    ),
  ],
  'mhaegen': [
    onScreen(
      [5, 36],
      { it: 'Il naso di Robert', en: 'Robert’s nose' },
      {
        it: 'Mhaegen lavora in uno dei bordelli di [[petyr-baelish|Petyr Baelish]] ad Approdo del Re. Petyr le porta [[eddard-stark|Eddard Stark]], sulle tracce del precedente Primo Cavaliere, Jon Arryn. Lei mostra a Eddard la sua bambina, Barra, figlia di [[robert-baratheon|re Robert]], e dice che ha il naso e i capelli neri di Robert. Eddard chiede a Petyr perché Jon Arryn cercasse i bastardi di Robert; Petyr risponde di non saperlo.',
        en: 'Mhaegen works in one of [[petyr-baelish|Petyr Baelish]]’s brothels in King’s Landing. Petyr brings [[eddard-stark|Eddard Stark]] to her, following the trail of the previous Hand, Jon Arryn. She shows Eddard her baby daughter, Barra, whose father is [[robert-baratheon|King Robert]], and says the child has Robert’s nose and black hair. Eddard asks Petyr why Jon Arryn was searching for Robert’s bastards; Petyr says he does not know.',
      },
    ),
  ],
  'tobho-mott': [
    inBoth(
      [4, 28],
      { it: 'La bottega dell’armaiolo', en: 'The armorer’s shop' },
      {
        it: 'Tobho Mott è un maestro armaiolo di Approdo del Re, e ha come apprendista un ragazzo di nome [[gendry|Gendry]]. [[eddard-stark|Eddard Stark]], che indaga sulla morte di Jon Arryn, il Primo Cavaliere che lo ha preceduto, va alla bottega e scopre che Jon Arryn c’era stato e aveva chiesto di vedere Gendry. Eddard ammira un elmo che il ragazzo si è fatto da sé, e guardandolo in viso vi riconosce i lineamenti di [[robert-baratheon|re Robert]].',
        en: 'Tobho Mott is a master armorer in King’s Landing, with a boy named [[gendry|Gendry]] as his apprentice. [[eddard-stark|Eddard Stark]], looking into the death of Jon Arryn, the Hand before him, comes to the shop and learns that Jon Arryn had been there and asked to see Gendry. Eddard admires a helm the boy has made for himself, and looking at his face he sees [[robert-baratheon|King Robert]]’s features in it.',
      },
    ),
  ],
  'meryn-trant': [
    inBooks(
      [8, 30],
      { it: 'Il torneo del Primo Cavaliere', en: 'The Hand’s tourney' },
      {
        it: 'Ser Meryn Trant è un cavaliere della Guardia reale. Ha cavalcato verso nord con [[robert-baratheon|re Robert]] quando il re è andato a nominare [[eddard-stark|Eddard Stark]] suo Primo Cavaliere. Insieme ai suoi confratelli giurati partecipa al torneo indetto per il nuovo Primo Cavaliere: disarciona [[harwin|Harwin]], uno degli uomini di Eddard, e viene poi sconfitto da [[loras-tyrell|ser Loras Tyrell]].',
        en: 'Ser Meryn Trant is a knight of the Kingsguard. He rode north with [[robert-baratheon|King Robert]] when the king went to name [[eddard-stark|Eddard Stark]] his Hand. With his sworn brothers he rides in the tourney held for the new Hand: he unhorses [[harwin|Harwin]], one of Eddard’s men, and is then beaten by [[loras-tyrell|Ser Loras Tyrell]].',
      },
    ),
    inBoth(
      [8, 51],
      { it: 'Mandato a prendere Arya', en: 'Sent for Arya' },
      {
        it: 'Dopo la morte di [[robert-baratheon|re Robert]] e l’arresto di [[eddard-stark|Eddard Stark]], Meryn viene mandato con alcune guardie dei Lannister a prendere la figlia minore di Eddard, [[arya-stark|Arya]]. La trovano a lezione con il suo maestro di spada, [[syrio-forel|Syrio Forel]], che sbarra loro la strada con una spada di legno e tiene testa alle guardie. Meryn sguaina la propria spada e spezza quella di Syrio, ma Arya riesce a fuggire.',
        en: 'After [[robert-baratheon|King Robert]]’s death and [[eddard-stark|Eddard Stark]]’s arrest, Meryn is sent with Lannister guardsmen to seize Eddard’s younger daughter, [[arya-stark|Arya]]. They find her at a lesson with her sword master, [[syrio-forel|Syrio Forel]], who blocks their way with a wooden sword and fights off the guardsmen. Meryn draws his own sword and breaks Syrio’s, but Arya escapes.',
      },
    ),
    inBoth(
      [10, 68],
      { it: 'Per ordine del re', en: 'On the king’s order' },
      {
        it: 'Re [[joffrey-baratheon|Joffrey]] porta [[sansa-stark|Sansa Stark]] a vedere le teste dei traditori sulle mura, tra cui quella di suo padre. Con loro c’è Meryn. Quando Sansa dice che un giorno suo fratello potrebbe portarle la testa di Joffrey, il re ordina a Meryn di colpirla, e Meryn obbedisce. [[sandor-clegane|Sandor Clegane]] le asciuga il sangue dal viso.',
        en: 'King [[joffrey-baratheon|Joffrey]] takes [[sansa-stark|Sansa Stark]] to see the heads of traitors on the walls, her father’s among them. Meryn is with them. When Sansa says that her brother may one day bring her Joffrey’s head, the king orders Meryn to strike her, and Meryn obeys. [[sandor-clegane|Sandor Clegane]] wipes the blood from her face.',
      },
    ),
  ],
  // Book only in stage 1: the show names him at episode 19.
  'boros-blount': [
    inBooks(
      [19, 34],
      { it: 'Giurato al re', en: 'Sworn to the king' },
      {
        it: 'Ser Boros Blount è uno dei sette cavalieri della Guardia reale. Ha cavalcato fino a Grande Inverno con [[robert-baratheon|re Robert]] e, insieme a [[meryn-trant|ser Meryn Trant]], ha fatto da guardia al re quando Robert si è allontanato a cavallo da solo con [[eddard-stark|Eddard Stark]]. Partecipa con i suoi confratelli giurati al torneo per il nuovo Primo Cavaliere, e resta al fianco del re quando [[gregor-clegane|Gregor]] e [[sandor-clegane|Sandor Clegane]] si affrontano nella lizza. Indossa il mantello bianco e serve il re nella Fortezza Rossa.',
        en: 'Ser Boros Blount is one of the seven knights of the Kingsguard. He rode north to Winterfell with [[robert-baratheon|King Robert]], and with [[meryn-trant|Ser Meryn Trant]] he guarded the king when Robert rode off alone with [[eddard-stark|Eddard Stark]]. He rides with his sworn brothers in the tourney for the new Hand, and stands by the king when [[gregor-clegane|Gregor]] and [[sandor-clegane|Sandor Clegane]] fight in the lists. He wears the white cloak and serves the king in the Red Keep.',
      },
    ),
    inBooks(
      [19, 58],
      { it: 'La vergogna di Barristan', en: 'Barristan’s shame' },
      {
        it: '[[robert-baratheon|Re Robert]] è morto per una ferita riportata durante una caccia al cinghiale, e ora Boros fa la guardia al giovane re [[joffrey-baratheon|Joffrey]]. A corte [[barristan-selmy|Barristan Selmy]], Lord Comandante della Guardia reale, viene congedato davanti a tutti, anche se i voti dell’ordine valgono per tutta la vita, e al suo posto viene nominato Lord Comandante [[jaime-lannister|Jaime Lannister]]. Secondo [[sansa-stark|Sansa Stark]], Boros e i suoi confratelli giurati ridono della vergogna di Barristan.',
        en: '[[robert-baratheon|King Robert]] has died of a wound from a boar hunt, and Boros now guards the young King [[joffrey-baratheon|Joffrey]]. At court, [[barristan-selmy|Barristan Selmy]], the Lord Commander of the Kingsguard, is dismissed before everyone, although the order’s vows are for life, and [[jaime-lannister|Jaime Lannister]] is named Lord Commander in his place. According to [[sansa-stark|Sansa Stark]], Boros and his sworn brothers laugh at Barristan’s shame.',
      },
    ),
  ],
  // Book only in stage 1: the show names him at episode 19.
  'mandon-moore': [
    inBooks(
      [19, 52],
      { it: 'La scorta dal concilio', en: 'Escort from the council' },
      {
        it: 'Ser Mandon Moore indossa il mantello bianco della Guardia reale. Ha partecipato con i suoi confratelli giurati al torneo per il nuovo Primo Cavaliere ed è rimasto al fianco di [[robert-baratheon|re Robert]] quando [[gregor-clegane|Gregor]] e [[sandor-clegane|Sandor Clegane]] si sono affrontati nella lizza. Dopo l’arresto di [[eddard-stark|Eddard Stark]] sorveglia le porte della sala del concilio mentre [[sansa-stark|Sansa]] parla con la regina e con il concilio, e poi la riaccompagna.',
        en: 'Ser Mandon Moore wears the white cloak of the Kingsguard. He rode with his sworn brothers in the tourney for the new Hand, and stood by [[robert-baratheon|King Robert]] when [[gregor-clegane|Gregor]] and [[sandor-clegane|Sandor Clegane]] fought in the lists. After [[eddard-stark|Eddard Stark]]’s arrest, he guards the doors of the council chamber while [[sansa-stark|Sansa]] speaks with the queen and the council, and then walks her back.',
      },
    ),
  ],
  'arys-oakheart': [
    inBooks(
      [8, 58],
      { it: 'Nella sala del trono', en: 'In the throne room' },
      {
        it: 'Ser Arys Oakheart è un cavaliere della Guardia reale. Ha partecipato con i suoi confratelli giurati al torneo per il nuovo Primo Cavaliere ed è rimasto al fianco di [[robert-baratheon|re Robert]] quando [[gregor-clegane|Gregor]] e [[sandor-clegane|Sandor Clegane]] si sono affrontati nella lizza. Ora che Robert è morto, serve re [[joffrey-baratheon|Joffrey]]. È nella sala del trono quando [[barristan-selmy|Barristan Selmy]] viene allontanato dalla Guardia reale e al suo posto viene nominato Lord Comandante [[jaime-lannister|Jaime Lannister]].',
        en: 'Ser Arys Oakheart is a knight of the Kingsguard. He rode with his sworn brothers in the tourney for the new Hand, and stood by [[robert-baratheon|King Robert]] when [[gregor-clegane|Gregor]] and [[sandor-clegane|Sandor Clegane]] fought in the lists. Now that Robert is dead, he serves King [[joffrey-baratheon|Joffrey]]. He is in the throne room when [[barristan-selmy|Barristan Selmy]] is dismissed from the Kingsguard and [[jaime-lannister|Jaime Lannister]] is named Lord Commander in his place.',
      },
    ),
  ],
  // Book only in stage 1: the show names him at episode 11.
  'dontos-hollard': [
    inBooks(
      [11, 58],
      { it: 'Il buffone del re', en: 'The king’s fool' },
      {
        it: 'Morto [[robert-baratheon|re Robert]], il giovane [[joffrey-baratheon|Joffrey]] siede sul Trono di Spade e tiene udienza. Ser Dontos Hollard, un cavaliere, si presenta ubriaco davanti al re, e Joffrey vuole farlo mettere a morte. [[sansa-stark|Sansa Stark]] convince il re a non ucciderlo, e Joffrey fa invece di Dontos il suo buffone.',
        en: 'With [[robert-baratheon|King Robert]] dead, young [[joffrey-baratheon|Joffrey]] sits the Iron Throne and holds court. Ser Dontos Hollard, a knight, comes before the king drunk, and Joffrey wants him put to death for it. [[sansa-stark|Sansa Stark]] talks the king out of killing him, and Joffrey makes Dontos his fool instead.',
      },
    ),
  ],
  'balon-swann': [
    inBooks(
      [4, 30],
      { it: 'Un cavaliere della tempesta', en: 'A knight of the stormlands' },
      {
        it: 'Ser Balon Swann è un cavaliere di Casa Swann, delle Terre della Tempesta. Partecipa alla giostra del torneo indetto ad Approdo del Re per il nuovo Primo Cavaliere, e [[sansa-stark|Sansa Stark]] e la sua amica [[jeyne-poole|Jeyne Poole]] pensano che un giorno diventerà un cavaliere leggendario. Disarciona [[alyn|Alyn]], uno degli uomini degli Stark, e viene poi disarcionato a sua volta da [[gregor-clegane|Gregor Clegane]].',
        en: 'Ser Balon Swann is a knight of House Swann, from the stormlands. He rides in the joust at the tourney held in King’s Landing for the new Hand, and [[sansa-stark|Sansa Stark]] and her friend [[jeyne-poole|Jeyne Poole]] think he will one day be a legendary knight. He unhorses [[alyn|Alyn]], one of the Stark men, and is then unhorsed himself by [[gregor-clegane|Gregor Clegane]].',
      },
    ),
  ],
  'loras-tyrell': [
    inBooks(
      [5, 30],
      { it: 'La rosa rossa', en: 'The red rose' },
      {
        it: 'Ser Loras Tyrell di Alto Giardino, detto il Cavaliere di Fiori, partecipa al torneo del Primo Cavaliere. Alla fine di ogni giostra dona una rosa bianca a una bella fanciulla tra il pubblico. Dopo l’ultima vittoria del primo giorno, contro [[robar-royce|ser Robar Royce]], dona una rosa rossa a [[sansa-stark|Sansa Stark]], che si innamora di lui. È tra gli ultimi quattro cavalieri rimasti in gara.',
        en: 'Ser Loras Tyrell of Highgarden, called the Knight of Flowers, rides in the Hand’s tourney. At the end of each joust he gives a white rose to a fair maiden in the crowd. After his last victory of the first day, over [[robar-royce|Ser Robar Royce]], he gives a red rose to [[sansa-stark|Sansa Stark]], who falls for him. He is among the last four riders left in the lists.',
      },
    ),
    onScreen(
      [5, 31],
      { it: 'Il Cavaliere di Fiori', en: 'The Knight of Flowers' },
      {
        it: 'Ser Loras Tyrell, il Cavaliere di Fiori, dona un fiore a [[sansa-stark|Sansa Stark]] prima di affrontare [[gregor-clegane|Gregor Clegane]], la Montagna, nel torneo del Primo Cavaliere. [[renly-baratheon|Renly Baratheon]] scommette su di lui contro [[petyr-baelish|Petyr Baelish]]. Loras monta una giumenta in calore, che fa imbizzarrire lo stallone di Gregor, e Gregor viene disarcionato. Gregor aggredisce Loras con la spada, e [[sandor-clegane|Sandor Clegane]] lo salva; Loras ringrazia Sandor e lo proclama campione. Loras è l’amante di Renly, e lo esorta a reclamare la corona per sé.',
        en: 'Ser Loras Tyrell, the Knight of Flowers, gives a flower to [[sansa-stark|Sansa Stark]] before he rides against [[gregor-clegane|Gregor Clegane]], the Mountain, in the Hand’s tourney. [[renly-baratheon|Renly Baratheon]] bets on him against [[petyr-baelish|Petyr Baelish]]. Loras rides a mare in heat, which maddens Gregor’s stallion, and Gregor is thrown. Gregor goes at Loras with a sword, and [[sandor-clegane|Sandor Clegane]] saves him; Loras thanks Sandor and names him champion. Loras is Renly’s lover, and urges him to claim the crown for himself.',
      },
    ),
    inBooks(
      [5, 31],
      { it: 'La giumenta in calore', en: 'The mare in heat' },
      {
        it: 'Nel secondo giorno del torneo Loras affronta [[gregor-clegane|Gregor Clegane]] in sella a una giumenta in calore, che agita lo stallone di Gregor, e vince. Gregor, furioso, uccide il proprio cavallo e aggredisce Loras con la spada. [[sandor-clegane|Sandor Clegane]] protegge Loras finché [[robert-baratheon|re Robert]] non ordina di fermarsi. Per ringraziarlo, Loras concede poi a Sandor la vittoria nella giostra finale. [[barristan-selmy|Barristan Selmy]] giudica la giumenta un trucco.',
        en: 'On the second day of the tourney, Loras rides against [[gregor-clegane|Gregor Clegane]] on a mare in heat, which upsets Gregor’s stallion, and wins. Gregor, in a rage, kills his own horse and attacks Loras with a sword. [[sandor-clegane|Sandor Clegane]] protects Loras until [[robert-baratheon|King Robert]] orders them to stop. To thank him, Loras then gives Sandor the victory in their final joust. [[barristan-selmy|Barristan Selmy]] calls the mare a trick.',
      },
    ),
    inBooks(
      [6, 44],
      { it: 'Giustizia per Gregor', en: 'Justice for Gregor' },
      {
        it: 'Quando [[gregor-clegane|Gregor Clegane]] viene accusato di aver saccheggiato le Terre dei Fiumi e di aver infranto la pace del re, Loras chiede a [[eddard-stark|Eddard Stark]] di mandare lui a fare giustizia. Eddard capisce che Loras cerca vendetta, e manda invece [[beric-dondarrion|lord Beric Dondarrion]] a capo degli uomini del re.',
        en: 'When [[gregor-clegane|Gregor Clegane]] is accused of raiding the riverlands and breaking the king’s peace, Loras asks [[eddard-stark|Eddard Stark]] to send him to bring Gregor to justice. Eddard sees that Loras wants revenge, and sends [[beric-dondarrion|Lord Beric Dondarrion]] at the head of the king’s men instead.',
      },
    ),
    inBoth(
      [7, 50],
      { it: 'La partenza con Renly', en: 'Leaving with Renly' },
      {
        it: '[[robert-baratheon|Re Robert]] muore per una ferita riportata durante una caccia al cinghiale. Loras lascia Approdo del Re con [[renly-baratheon|Renly]], il fratello di Robert, e un certo numero di uomini. [[varys|Varys]] porta la notizia a [[eddard-stark|Eddard Stark]] prima che Eddard entri nella sala del trono, dove [[joffrey-baratheon|Joffrey]] siede sul Trono di Spade ed Eddard viene arrestato per tradimento.',
        en: '[[robert-baratheon|King Robert]] dies of a wound from a boar hunt. Loras leaves King’s Landing with Robert’s brother [[renly-baratheon|Renly]] and a number of their men. [[varys|Varys]] brings the news to [[eddard-stark|Eddard Stark]] before Eddard goes into the throne room, where [[joffrey-baratheon|Joffrey]] sits the Iron Throne and Eddard is seized for treason.',
      },
    ),
  ],
  'masha-heddle': [
    inBoth(
      [4, 29],
      { it: 'Nessuna stanza libera', en: 'No room left' },
      {
        it: 'Masha Heddle gestisce la Locanda all’Incrocio, sulla Strada del Re. [[catelyn-stark|Catelyn Stark]] e [[rodrik-cassel|ser Rodrik]] vi si fermano mentre tornano in segreto verso nord. [[tyrion-lannister|Tyrion Lannister]] arriva con [[yoren|Yoren]] dei Guardiani della Notte e scopre che alla locanda non c’è più una stanza libera per lui. Quando Tyrion riconosce Catelyn, lei chiede aiuto agli uomini presenti nella sala, lo accusa di aver tentato di far uccidere suo figlio e lo fa catturare sotto il tetto di Masha.',
        en: 'Masha Heddle runs the Inn at the Crossroads, on the kingsroad. [[catelyn-stark|Catelyn Stark]] and [[rodrik-cassel|Ser Rodrik]] stop there as they travel north in secret. [[tyrion-lannister|Tyrion Lannister]] arrives with [[yoren|Yoren]] of the Night’s Watch and finds that the inn has no room left for him. When Tyrion recognizes Catelyn, she calls on the men in the common room for help, accuses him of trying to have her son killed, and has him seized under Masha’s roof.',
      },
    ),
    inBooks(
      [8, 57],
      { it: 'La forca davanti alla locanda', en: 'The gibbet at the inn' },
      {
        it: 'Masha Heddle non si è schierata quando [[catelyn-stark|Catelyn Stark]] ha fatto prigioniero [[tyrion-lannister|Tyrion Lannister]] nella sua locanda. Quando l’esercito dei Lannister entra nelle terre dei fiumi, [[tywin-lannister|lord Tywin]] prende la Locanda all’Incrocio come suo alloggio e fa impiccare Masha a una forca per aver lasciato che suo figlio fosse catturato lì. Tyrion, raggiunto l’esercito del padre, guarda ciò che resta del corpo di Masha e ricorda che a lei aveva chiesto soltanto una stanza, un pasto e una caraffa di vino.',
        en: 'Masha Heddle took no side when [[catelyn-stark|Catelyn Stark]] took [[tyrion-lannister|Tyrion Lannister]] prisoner at her inn. When the Lannister army comes into the riverlands, [[tywin-lannister|Lord Tywin]] makes the Inn at the Crossroads his quarters and has Masha hanged from a gibbet for letting his son be seized there. Tyrion, reaching his father’s army, looks at what is left of her body and remembers that all he asked of her was a room, a meal and a flagon of wine.',
      },
    ),
  ],
  'jason-mallister': [
    inBooks(
      [4, 29],
      { it: 'Un cenno sulla strada', en: 'A nod on the road' },
      {
        it: 'Lord Jason Mallister, un lord delle terre dei fiumi giurato a Casa Tully, percorre la Strada del Re con i suoi uomini e con il figlio Patrek, diretto ad Approdo del Re per il torneo del Primo Cavaliere. Lungo la strada incrocia [[catelyn-stark|Catelyn Stark]] e [[rodrik-cassel|ser Rodrik Cassel]], che viaggiano in segreto verso nord. Catelyn lo conosce da quando era bambina, ma lord Jason rivolge ai due cavalieri solo un cenno distratto e non la riconosce.',
        en: 'Lord Jason Mallister, a riverlands lord sworn to House Tully, rides along the kingsroad with his men and his son Patrek, bound for the Hand’s tourney in King’s Landing. On the road he passes [[catelyn-stark|Catelyn Stark]] and [[rodrik-cassel|Ser Rodrik Cassel]], who are travelling north in secret. Catelyn has known him since she was a girl, but Lord Jason gives the two riders no more than a passing nod and does not recognize her.',
      },
    ),
  ],
  'willis-wode': [
    inBoth(
      [4, 29],
      { it: 'In piedi per lady Stark', en: 'Standing with Lady Stark' },
      {
        it: 'Ser Willis Wode, un cavaliere giurato agli Whent di Harrenhal, è alla Locanda all’Incrocio quando arriva [[tyrion-lannister|Tyrion Lannister]]. Riconosciuta da Tyrion, [[catelyn-stark|Catelyn Stark]] si rivolge agli uomini dei vassalli di suo padre presenti nella sala e chiede il loro aiuto per prenderlo, accusandolo di aver tentato di far uccidere suo figlio. Ser Willis è tra i primi a schierarsi con lei contro Tyrion, che si ritrova circondato da uomini armati.',
        en: 'Ser Willis Wode, a knight sworn to the Whents of Harrenhal, is at the Inn at the Crossroads when [[tyrion-lannister|Tyrion Lannister]] arrives. Recognized by Tyrion, [[catelyn-stark|Catelyn Stark]] turns to the men of her father’s bannermen in the common room and asks for their help to take him, accusing him of trying to have her son killed. Ser Willis is among the first to stand with her against Tyrion, who finds himself surrounded by armed men.',
      },
    ),
    onScreen(
      [5, 35],
      { it: 'L’agguato sulla strada', en: 'The ambush on the road' },
      {
        it: 'Ser Willis cavalca verso est con il gruppo di [[catelyn-stark|Catelyn Stark]], che porta il prigioniero [[tyrion-lannister|Tyrion Lannister]] non a nord ma nella Valle, dalla sorella di lei. Con loro ci sono [[rodrik-cassel|ser Rodrik]], il mercenario [[bronn|Bronn]] e il cantore [[marillion|Marillion]]. Lungo la strada il gruppo viene attaccato dagli uomini delle tribù delle montagne. Ser Willis muore difendendo Catelyn, e i sopravvissuti proseguono fino al Nido dell’Aquila.',
        en: 'Ser Willis rides east with [[catelyn-stark|Catelyn Stark]]’s party, which takes the captive [[tyrion-lannister|Tyrion Lannister]] not north but into the Vale, to her sister. With them ride [[rodrik-cassel|Ser Rodrik]], the sellsword [[bronn|Bronn]] and the singer [[marillion|Marillion]]. On the road the party is attacked by men of the hill tribes. Ser Willis dies defending Catelyn, and the survivors go on to the Eyrie.',
      },
    ),
  ],
  'gregor-clegane': [
    inBoth(
      [4, 30],
      { it: 'La giostra di ser Hugh', en: 'Ser Hugh’s joust' },
      {
        it: 'Ser Gregor Clegane, un cavaliere di statura enorme chiamato la Montagna, partecipa al torneo indetto ad Approdo del Re per il nuovo Primo Cavaliere. In una delle sue giostre la lancia di Gregor colpisce al collo ser [[hugh-of-the-vale|Hugh della Valle]], che muore nella lizza davanti alla folla. Gregor è il fratello maggiore di [[sandor-clegane|Sandor Clegane]], il Mastino. Quando erano ragazzi, Gregor spinse il volto di Sandor nel fuoco per un giocattolo, e Sandor ne porta ancora le ustioni.',
        en: 'Ser Gregor Clegane, a knight of enormous size called the Mountain, rides in the tourney held in King’s Landing for the new Hand. In one of his jousts Gregor’s lance catches Ser [[hugh-of-the-vale|Hugh of the Vale]] in the neck, and Ser Hugh dies in the lists before the crowd. Gregor is the elder brother of [[sandor-clegane|Sandor Clegane]], the Hound. When they were boys, Gregor pushed Sandor’s face into a fire over a toy, and Sandor still bears the burns.',
      },
    ),
    inBoth(
      [5, 31],
      { it: 'La giumenta in calore', en: 'The mare in heat' },
      {
        it: 'Al torneo Gregor giostra contro ser [[loras-tyrell|Loras Tyrell]], il Cavaliere di Fiori, che monta una giumenta in calore e lo disarciona. Furioso, Gregor si fa portare la spada, uccide il proprio cavallo e si scaglia contro Loras. Il fratello [[sandor-clegane|Sandor]] interviene per proteggere Loras, e i due fratelli si battono con le spade finché [[robert-baratheon|re Robert]] non ordina loro di fermarsi. Allora Gregor lascia la lizza.',
        en: 'At the tourney Gregor jousts against Ser [[loras-tyrell|Loras Tyrell]], the Knight of Flowers, who rides a mare in heat and unhorses him. In a rage, Gregor calls for his sword, kills his own horse and goes at Loras. His brother [[sandor-clegane|Sandor]] steps in to protect Loras, and the two brothers fight with swords until [[robert-baratheon|King Robert]] orders them to stop. Gregor then leaves the lists.',
      },
    ),
    inBoth(
      [6, 44],
      { it: 'Privato dei titoli', en: 'Stripped of his titles' },
      {
        it: 'Nelle terre dei fiumi alcuni villaggi vengono saccheggiati e dati alle fiamme, e i sopravvissuti arrivano ad Approdo del Re a chiedere giustizia. [[eddard-stark|Eddard Stark]], che siede sul Trono di Spade in assenza del re, ascolta i loro racconti e ritiene Gregor responsabile delle incursioni. Eddard priva Gregor del titolo di cavaliere, delle terre e dei titoli, e manda lord [[beric-dondarrion|Beric Dondarrion]] alla testa di una compagnia di uomini a consegnarlo alla giustizia del re.',
        en: 'Villages in the riverlands are raided and burned, and the survivors come to King’s Landing to ask for justice. [[eddard-stark|Eddard Stark]], who sits the Iron Throne in the king’s absence, hears them out and holds Gregor responsible for the raids. Eddard strips Gregor of his knighthood, his lands and his titles, and sends Lord [[beric-dondarrion|Beric Dondarrion]] at the head of a company of men to bring him to the king’s justice.',
      },
    ),
    onScreen(
      [10, 70],
      { it: 'Le terre dei fiumi in fiamme', en: 'The riverlands on fire' },
      {
        it: 'Gregor combatte nell’esercito di [[tywin-lannister|Tywin Lannister]]. Dopo che [[robb-stark|Robb Stark]] ha sconfitto un esercito dei Lannister e ha fatto prigioniero [[jaime-lannister|Jaime]], Tywin decide di spostare le sue forze a Harrenhal. Prima di partire ordina a Gregor di prendere cinquecento uomini e di mettere a ferro e fuoco le terre dei fiumi, dall’Occhio degli Dei alla Forca Rossa.',
        en: 'Gregor fights in the army of [[tywin-lannister|Tywin Lannister]]. After [[robb-stark|Robb Stark]] defeats a Lannister army and takes [[jaime-lannister|Jaime]] prisoner, Tywin decides to move his forces to Harrenhal. Before leaving, he orders Gregor to take five hundred men and set the riverlands on fire, from the Gods Eye to the Red Fork.',
      },
    ),
  ],
  'beric-dondarrion': [
    inBooks(
      [6, 28],
      { it: 'Arrivato per il torneo', en: 'Come for the tourney' },
      {
        it: 'Beric Dondarrion è il giovane lord di Blackhaven, un piccolo castello delle Terre della Tempesta, sulle Marche di Dorne. Arriva ad Approdo del Re per il torneo in onore del nuovo Primo Cavaliere. È proprio il Primo Cavaliere, [[eddard-stark|Eddard Stark]], a vederlo entrare in città mentre attraversa le strade diretto alla Strada dell’Acciaio, dove intende far visita all’armaiolo [[tobho-mott|Tobho Mott]].',
        en: 'Beric Dondarrion is the young lord of Blackhaven, a small castle in the stormlands, on the Dornish Marches. He comes to King’s Landing for the tourney in honour of the new Hand. It is the Hand himself, [[eddard-stark|Eddard Stark]], who sees him ride into the city, on his way through the streets to the Street of Steel, where he means to call on the armourer [[tobho-mott|Tobho Mott]].',
      },
    ),
    inBoth(
      [6, 44],
      { it: 'Mandato contro la Montagna', en: 'Sent against the Mountain' },
      {
        it: 'Nelle terre dei fiumi alcuni villaggi vengono saccheggiati e bruciati, e i sopravvissuti arrivano ad Approdo del Re a chiedere la giustizia del re. [[eddard-stark|Eddard Stark]], che siede sul Trono di Spade in assenza del re, ritiene responsabile ser [[gregor-clegane|Gregor Clegane]] e lo priva del titolo e delle terre. Poi affida a lord Beric il comando di una compagnia di uomini e lo manda nelle terre dei fiumi a consegnare Gregor alla giustizia.',
        en: 'Villages in the riverlands are raided and burned, and the survivors come to King’s Landing to ask for the king’s justice. [[eddard-stark|Eddard Stark]], who sits the Iron Throne in the king’s absence, holds Ser [[gregor-clegane|Gregor Clegane]] responsible and strips him of his knighthood and his lands. He then gives Lord Beric the command of a company of men and sends him into the riverlands to bring Gregor to justice.',
      },
    ),
  ],
  'thoros-of-myr': [
    inBooks(
      [22, 30],
      { it: 'Il prete rosso al torneo', en: 'The red priest at the tourney' },
      {
        it: 'Thoros di Myr, un prete rosso venuto dalla città libera di Myr, partecipa al torneo del Primo Cavaliere ad Approdo del Re. [[sansa-stark|Sansa Stark]] e [[jeyne-poole|Jeyne Poole]] ridacchiano del suo aspetto, finché [[mordane|septa Mordane]] non spiega loro quanto sia valente in battaglia e che cosa fece durante l’assedio di Pyke. In una delle giostre Thoros disarciona lord [[beric-dondarrion|Beric Dondarrion]].',
        en: 'Thoros of Myr, a red priest from the free city of Myr, rides in the Hand’s tourney in King’s Landing. [[sansa-stark|Sansa Stark]] and [[jeyne-poole|Jeyne Poole]] giggle at the look of him, until [[mordane|Septa Mordane]] tells them how well he fights and what he did at the siege of Pyke. In one of the jousts Thoros unhorses Lord [[beric-dondarrion|Beric Dondarrion]].',
      },
    ),
    inBooks(
      [22, 44],
      { it: 'Con la compagnia di lord Beric', en: 'In Lord Beric’s company' },
      {
        it: 'Quando ser [[gregor-clegane|Gregor Clegane]] viene accusato delle incursioni nelle terre dei fiumi, [[eddard-stark|Eddard Stark]] manda lord [[beric-dondarrion|Beric Dondarrion]] con una compagnia di uomini a consegnarlo alla giustizia del re. Eddard ordina anche a Thoros, che ha vinto la mischia al torneo del Primo Cavaliere, di cavalcare con loro. Così il prete rosso lascia Approdo del Re nella compagnia di lord Beric.',
        en: 'When Ser [[gregor-clegane|Gregor Clegane]] is accused of raiding the riverlands, [[eddard-stark|Eddard Stark]] sends Lord [[beric-dondarrion|Beric Dondarrion]] with a company of men to bring him to the king’s justice. Eddard also orders Thoros, who won the melee at the Hand’s tourney, to ride with them. So the red priest leaves King’s Landing in Lord Beric’s company.',
      },
    ),
  ],
  'walder-frey': [
    onScreen(
      [9, 60],
      { it: 'Il prezzo del passaggio', en: 'The price of the crossing' },
      {
        it: 'Walder Frey, il vecchissimo signore delle Torri Gemelle, controlla il ponte che l’esercito di [[robb-stark|Robb Stark]] deve attraversare. È vassallo del padre di [[catelyn-stark|Catelyn Stark]], ma ha tenuto a casa i suoi uomini per vedere quale parte avrebbe vinto. Catelyn entra alle Torri Gemelle per trattare con lui. In cambio del passaggio e dei suoi soldati, Robb sposerà una delle figlie o delle nipoti di Walder, [[arya-stark|Arya]] sposerà suo figlio Waldron quando sarà ritrovata, e Robb prenderà come scudiero suo figlio Olyvar. Robb accetta.',
        en: 'Walder Frey, the very old lord of the Twins, holds the bridge that [[robb-stark|Robb Stark]]’s army needs to cross. He is sworn to [[catelyn-stark|Catelyn Stark]]’s father, but he has kept his men at home to see which side would win. Catelyn goes into the Twins to bargain with him. In exchange for the crossing and his soldiers, Robb will marry one of Walder’s daughters or granddaughters, [[arya-stark|Arya]] will marry his son Waldron once she is found, and Robb will take his son Olyvar as a squire. Robb agrees.',
      },
    ),
    inBooks(
      [9, 60],
      { it: 'Due matrimoni per un ponte', en: 'Two marriages for a bridge' },
      {
        it: 'Walder Frey, il Signore del Guado, è stato lento a rispondere alla chiamata alle armi dei Tully, suoi signori, quando è cominciata la guerra. Quando l’esercito di [[robb-stark|Robb Stark]] deve attraversare il fiume alle Torri Gemelle, [[catelyn-stark|Catelyn Stark]] tratta con lui. Walder lascia passare l’esercito in cambio di due matrimoni: Robb sposerà una delle sue figlie, e [[arya-stark|Arya]] il suo figlio più giovane, Elmar. Due suoi nipoti, che si chiamano entrambi Walder, andranno in custodia a Grande Inverno, e suo figlio Olyvar diventerà lo scudiero di Robb.',
        en: 'Walder Frey, Lord of the Crossing, was slow to answer the call to arms of the Tullys, his liege lords, when the war began. When [[robb-stark|Robb Stark]]’s army needs to cross the river at the Twins, [[catelyn-stark|Catelyn Stark]] bargains with him. Walder lets the army cross in exchange for two marriages: Robb will wed one of his daughters, and [[arya-stark|Arya]] his youngest son, Elmar. Two of his grandsons, both named Walder, are to go to Winterfell as wards, and his son Olyvar becomes Robb’s squire.',
      },
    ),
  ],
  'stevron-frey': [
    onScreen(
      [9, 60],
      { it: 'Le cortesie dovute', en: 'The courtesies owed' },
      {
        it: 'Stevron Frey, il figlio maggiore ed erede di [[walder-frey|lord Walder Frey]], è nella sala delle Torri Gemelle quando [[catelyn-stark|Catelyn Stark]] arriva a trattare il passaggio per l’esercito di suo figlio. Stevron ricorda al padre le cortesie dovute alla figlia del loro signore. Walder gli risponde che non è ancora lui il lord, bacia di malavoglia la mano di Catelyn e manda via Stevron con il resto della famiglia, per parlare con lei da solo.',
        en: 'Stevron Frey, the eldest son and heir of [[walder-frey|Lord Walder Frey]], is in the hall of the Twins when [[catelyn-stark|Catelyn Stark]] comes to bargain for her son’s army to cross. Stevron reminds his father of the courtesies owed to the daughter of their liege lord. Walder answers that Stevron is not lord yet, reluctantly kisses Catelyn’s hand, and sends Stevron away with the rest of the family so that he can talk with her alone.',
      },
    ),
    inBooks(
      [9, 60],
      { it: 'Il colloquio alle Torri Gemelle', en: 'The parley at the Twins' },
      {
        it: 'Stevron Frey è il figlio maggiore ed erede di [[walder-frey|lord Walder]], un uomo sulla sessantina. Quando l’esercito di [[robb-stark|Robb Stark]] arriva alle Torri Gemelle in cerca di un passaggio sul fiume, Stevron esce a cavallo a parlamentare e si mostra cortese e rispettoso con [[catelyn-stark|Catelyn Stark]]. Dopo che Catelyn ha concluso l’accordo con suo padre, Stevron marcia verso sud con l’esercito di Robb.',
        en: 'Stevron Frey is the eldest son and heir of [[walder-frey|Lord Walder]], a man in his sixties. When [[robb-stark|Robb Stark]]’s army reaches the Twins looking for a way across the river, Stevron rides out to parley and shows courtesy and deference to [[catelyn-stark|Catelyn Stark]]. Once Catelyn has struck her bargain with his father, Stevron marches south with Robb’s army.',
      },
    ),
    inBooks(
      [10, 72],
      {
        it: 'Il consiglio di Delta delle Acque',
        en: 'The council at Riverrun',
      },
      {
        it: 'Dopo che le vittorie di Robb hanno spezzato l’assedio di Delta delle Acque, Stevron siede al consiglio di guerra dei lord del Nord e delle terre dei fiumi. I suoi consigli sono prudenti: lasciare che i Baratheon e i Lannister si logorino a vicenda, offrire una tregua a [[tywin-lannister|lord Tywin]] e restituirgli in cambio di un riscatto il prigioniero [[jaime-lannister|Jaime Lannister]]. I lord del Nord non vogliono sentirne parlare, e proclamano invece [[robb-stark|Robb Stark]] Re del Nord.',
        en: 'After Robb’s victories break the siege of Riverrun, Stevron sits in the war council of the northern and river lords. His advice is cautious: let the Baratheons and the Lannisters wear each other down, offer [[tywin-lannister|Lord Tywin]] a truce, and ransom the captive [[jaime-lannister|Jaime Lannister]] back to him. The northern lords will not hear of it, and instead they name [[robb-stark|Robb Stark]] King in the North.',
      },
    ),
  ],
  'edmure-tully': [
    inBooks(
      [23, 72],
      { it: 'Liberato da suo nipote', en: 'Freed by his nephew' },
      {
        it: 'Edmure Tully, il fratello minore di [[catelyn-stark|Catelyn Stark]], comanda gli eserciti delle terre dei fiumi da quando suo padre, [[hoster-tully|lord Hoster]], si è ammalato. Quando i Lannister hanno attaccato, ha schierato le sue forze lungo il confine e, su consiglio del padre, ha mandato messaggeri al re a chiedere aiuto. È stato fatto prigioniero da [[jaime-lannister|Jaime Lannister]], e torna libero quando suo nipote [[robb-stark|Robb Stark]] spezza l’assedio dei Lannister a Delta delle Acque. Edmure è presente al consiglio di guerra in cui i lord proclamano Robb Re del Nord.',
        en: 'Edmure Tully, [[catelyn-stark|Catelyn Stark]]’s younger brother, has commanded the armies of the riverlands since his father, [[hoster-tully|Lord Hoster]], fell ill. When the Lannisters attacked, he spread his forces along the border and, on his father’s advice, sent envoys to the king to ask for aid. He was taken prisoner by [[jaime-lannister|Jaime Lannister]], and goes free when his nephew [[robb-stark|Robb Stark]] breaks the Lannister siege of Riverrun. Edmure is at the war council in which the lords name Robb King in the North.',
      },
    ),
  ],
  'hoster-tully': [
    inBooks(
      [23, 72],
      { it: 'Il lord malato', en: 'The ailing lord' },
      {
        it: 'Hoster Tully, signore di Delta delle Acque e padre di [[catelyn-stark|Catelyn]], [[lysa-arryn|Lysa]] ed [[edmure-tully|Edmure]], è gravemente malato. Quando i Lannister hanno cominciato a razziare le sue terre, ha nascosto la malattia ai suoi vassalli, ha voluto che la richiesta di aiuto fosse fatta davanti al re e ha affidato a Edmure il comando dei suoi eserciti. Quando suo nipote [[robb-stark|Robb Stark]] spezza l’assedio e Catelyn arriva a Delta delle Acque, lord Hoster le chiede di raggiungerlo nelle sue stanze. È ancora lucido.',
        en: 'Hoster Tully, lord of Riverrun and father of [[catelyn-stark|Catelyn]], [[lysa-arryn|Lysa]] and [[edmure-tully|Edmure]], is gravely ill. When the Lannisters began raiding his lands, he hid his illness from his bannermen, insisted that the plea for aid be made before the king, and handed the command of his armies to Edmure. When his grandson [[robb-stark|Robb Stark]] breaks the siege and Catelyn reaches Riverrun, Lord Hoster asks her to come to him in his chambers. He is still lucid.',
      },
    ),
  ],
  'brynden-tully': [
    inBooks(
      [23, 35],
      { it: 'Il Pesce Nero nella Valle', en: 'The Blackfish in the Vale' },
      {
        it: 'Ser Brynden Tully, detto il Pesce Nero, è un cavaliere di Casa Tully, fratello del padre di [[catelyn-stark|Catelyn Stark]]. È zio di Catelyn e di [[lysa-arryn|Lysa Arryn]], la signora del Nido dell’Aquila, al cui servizio si trova nella Valle. Incontra Catelyn quando lei arriva nella Valle dopo aver attraversato le montagne con [[tyrion-lannister|Tyrion Lannister]] come prigioniero.',
        en: 'Ser Brynden Tully, known as the Blackfish, is a knight of House Tully and the brother of [[catelyn-stark|Catelyn Stark]]’s father. He is the uncle of Catelyn and of [[lysa-arryn|Lysa Arryn]], the lady of the Eyrie, in whose service he is in the Vale. He meets Catelyn when she reaches the Vale after crossing the mountains with [[tyrion-lannister|Tyrion Lannister]] as her prisoner.',
      },
    ),
    inBooks(
      [23, 56],
      { it: 'Al comando degli esploratori', en: 'In command of the outriders' },
      {
        it: 'Brynden chiede alla nipote [[lysa-arryn|Lysa]] di mandare uomini in aiuto delle terre dei fiumi contro i Lannister. Lysa rifiuta, e Brynden lascia il suo incarico e parte con [[catelyn-stark|Catelyn]]. I due navigano fino a Porto Bianco e proseguono fino a Moat Cailin, dove Brynden incontra per la prima volta il pronipote [[robb-stark|Robb Stark]]. Robb lo mette al comando dei suoi esploratori, e Brynden siede ai suoi consigli di guerra.',
        en: 'Brynden urges his niece [[lysa-arryn|Lysa]] to send men to help the riverlands against the Lannisters. Lysa refuses, so Brynden gives up his post and leaves with [[catelyn-stark|Catelyn]]. They sail to White Harbor and ride on to Moat Cailin, where Brynden meets his great-nephew [[robb-stark|Robb Stark]] for the first time. Robb puts him in charge of his outriders, and Brynden sits on his war councils.',
      },
    ),
    inBooks(
      [23, 64],
      { it: 'Lo schermo degli esploratori', en: 'The screen of outriders' },
      {
        it: 'Mentre l’esercito di Robb scende nelle terre dei fiumi, Brynden e i suoi esploratori combattono gli esploratori dei Lannister guidati da ser [[addam-marbrand|Addam Marbrand]] e tengono nascosti al nemico i movimenti di Robb. Grazie a loro l’esercito di Robb coglie di sorpresa [[jaime-lannister|Jaime Lannister]] nel Bosco dei Sussurri. L’esercito di Jaime viene sconfitto, e Jaime stesso viene fatto prigioniero.',
        en: 'As Robb’s army comes down into the riverlands, Brynden and his outriders fight the Lannister scouts under Ser [[addam-marbrand|Addam Marbrand]] and keep Robb’s movements hidden from the enemy. Thanks to them, Robb’s army takes [[jaime-lannister|Jaime Lannister]] by surprise in the Whispering Wood. Jaime’s army is defeated, and Jaime himself is taken prisoner.',
      },
    ),
  ],
  'bronn': [
    onScreen(
      [4, 32],
      { it: 'La stanza alla locanda', en: 'The room at the inn' },
      {
        it: 'Bronn è un mercenario che alloggia alla Locanda all’Incrocio. Quando arriva [[tyrion-lannister|Tyrion Lannister]] e [[masha-heddle|Masha Heddle]] gli dice che non ci sono più stanze, Tyrion mostra una moneta d’oro e chiede chi gliene cederà una. Bronn offre la sua, e Tyrion gli lancia la moneta. Prima che Tyrion possa avere la stanza, però, [[catelyn-stark|Catelyn Stark]] viene riconosciuta e chiede agli uomini della locanda di catturarlo.',
        en: 'Bronn is a sellsword staying at the Inn at the Crossroads. When [[tyrion-lannister|Tyrion Lannister]] arrives and [[masha-heddle|Masha Heddle]] tells him there are no rooms left, Tyrion holds up a gold coin and asks who will give him one. Bronn offers his own, and Tyrion throws him the coin. Before Tyrion can have the room, though, [[catelyn-stark|Catelyn Stark]] is recognized and calls on the men in the inn to seize him.',
      },
    ),
    inBooks(
      [4, 32],
      { it: 'Gli stivali di Jyck', en: 'Jyck’s boots' },
      {
        it: 'Bronn è un mercenario presente alla Locanda all’Incrocio la sera in cui [[catelyn-stark|Catelyn Stark]] chiede aiuto per catturare [[tyrion-lannister|Tyrion Lannister]]. Lui e un altro mercenario, Chiggen, rispondono alla sua chiamata e cavalcano con la scorta che porta via il prigioniero. Tyrion pensa che Bronn si sia unito a loro solo nella speranza di una ricompensa. Quando i membri dei clan attaccano il gruppo sulle montagne, Bronn li combatte, e poi spoglia i caduti prendendosi i begli stivali di Jyck, uno degli uomini di Tyrion.',
        en: 'Bronn is a sellsword at the Inn at the Crossroads the night [[catelyn-stark|Catelyn Stark]] calls for help to seize [[tyrion-lannister|Tyrion Lannister]]. He and another sellsword, Chiggen, answer her and ride in the escort that takes the prisoner away. Tyrion judges that Bronn joined only in the hope of a reward. When clansmen attack the party in the mountains, Bronn fights them, and afterwards he loots the dead, taking the fine boots of Jyck, one of Tyrion’s men.',
      },
    ),
    inBoth(
      [6, 41],
      { it: 'Il campione di Tyrion', en: 'Tyrion’s champion' },
      {
        it: 'Al Nido dell’Aquila [[tyrion-lannister|Tyrion Lannister]] chiede un processo per singolar tenzone per dimostrare la propria innocenza. Il campione di [[lysa-arryn|Lysa Arryn]] è ser [[vardis-egen|Vardis Egen]], e Tyrion chiede chi combatterà per lui. Si fa avanti Bronn. Vardis combatte con una pesante armatura a piastre, e Bronn, più rapido, si tiene fuori dalla sua portata finché il cavaliere non si stanca, poi lo uccide. Lysa deve lasciar andare Tyrion, e Bronn lascia il Nido dell’Aquila con lui.',
        en: 'At the Eyrie, [[tyrion-lannister|Tyrion Lannister]] demands a trial by combat to prove his innocence. [[lysa-arryn|Lysa Arryn]]’s champion is Ser [[vardis-egen|Vardis Egen]], and Tyrion asks who will fight for him. Bronn steps forward. Vardis fights in heavy plate, and Bronn, the quicker man, keeps out of his reach until the knight tires, then kills him. Lysa has to let Tyrion go, and Bronn leaves the Eyrie with him.',
      },
    ),
    inBooks(
      [8, 43],
      { it: 'Al servizio di Tyrion', en: 'In Tyrion’s service' },
      {
        it: 'Sulla strada del ritorno attraverso le montagne, Bronn entra ufficialmente al servizio di [[tyrion-lannister|Tyrion]] come spada a pagamento. Tyrion gli racconta la verità sul suo matrimonio con Tysha. Quando gli uomini dei clan delle montagne li circondano, Tyrion riesce a portarli dalla sua parte con le sue promesse, e [[shagga|Shagga]] e i suoi si mettono in cammino con loro verso l’esercito dei Lannister.',
        en: 'On the road back through the mountains, Bronn formally enters [[tyrion-lannister|Tyrion]]’s service as a hired sword. Tyrion tells him the truth about his marriage to Tysha. When clansmen of the mountains close in on them, Tyrion wins them over to his side with promises, and [[shagga|Shagga]] and his men set out with them towards the Lannister army.',
      },
    ),
    onScreen(
      [8, 57],
      { it: 'Al soldo, non per amicizia', en: 'For pay, not friendship' },
      {
        it: 'Mentre attraversano le montagne, Bronn mette in chiaro con [[tyrion-lannister|Tyrion]] che non è suo amico né la sua spada giurata: combatte per denaro. Tyrion promette di superare qualunque offerta gli venga fatta. Gli uomini dei clan guidati da [[shagga|Shagga]] li sorprendono nel loro accampamento, ma Tyrion conquista le tribù delle montagne con la promessa di armi. All’accampamento di [[tywin-lannister|lord Tywin]], Bronn dice a Tywin che non avrebbe conosciuto suo padre, e la battuta diverte [[kevan-lannister|Kevan]] più di Tywin.',
        en: 'As they cross the mountains, Bronn makes it plain to [[tyrion-lannister|Tyrion]] that he is not his friend or his sworn sword: he fights for pay. Tyrion promises to beat any offer made for him. Clansmen led by [[shagga|Shagga]] catch them in their camp, but Tyrion wins the hill tribes over with a promise of weapons. At [[tywin-lannister|Lord Tywin]]’s camp, Bronn tells Tywin he would not have known his father, and the remark amuses [[kevan-lannister|Kevan]] more than it does Tywin.',
      },
    ),
    onScreen(
      [9, 63],
      { it: 'La vigilia della battaglia', en: 'The eve of battle' },
      {
        it: 'Nell’accampamento di [[tywin-lannister|lord Tywin]], Bronn trova per [[tyrion-lannister|Tyrion]] una ragazza tra le donne al seguito dell’esercito: [[shae|Shae]], che convince un cavaliere a cedere. La sera prima della battaglia i tre fanno un gioco a base di vino, e Bronn racconta che i suoi genitori lo picchiavano e che ha ucciso per la prima volta prima dei dodici anni. Al mattino Bronn sveglia Tyrion mentre il nemico si avvicina. Nella calca Tyrion perde i sensi, e quando si riprende Bronn gli dice che hanno vinto.',
        en: 'In [[tywin-lannister|Lord Tywin]]’s camp, Bronn finds a girl among the camp followers for [[tyrion-lannister|Tyrion]]: [[shae|Shae]], whom he persuades a knight to give up. On the eve of battle the three play a drinking game, and Bronn tells them that his parents beat him and that he first killed before he was twelve. In the morning Bronn wakes Tyrion as the enemy closes in. Tyrion is knocked senseless in the rush, and when he comes round Bronn tells him they won.',
      },
    ),
    inBooks(
      [9, 63],
      {
        it: 'La battaglia sulla Forca Verde',
        en: 'The battle on the Green Fork',
      },
      {
        it: 'Nell’accampamento dei Lannister, Bronn porta via a un cavaliere una giovane donna al seguito dell’esercito, [[shae|Shae]], e la conduce da [[tyrion-lannister|Tyrion]] per la notte che precede la battaglia. Il mattino dopo sia Bronn sia Tyrion combattono nella battaglia sulla Forca Verde contro un esercito del Nord, che i Lannister di [[tywin-lannister|lord Tywin]] sconfiggono.',
        en: 'In the Lannister camp, Bronn takes a young camp follower, [[shae|Shae]], from a knight and brings her to [[tyrion-lannister|Tyrion]] for the night before the battle. The next morning both Bronn and Tyrion fight in the battle on the Green Fork against a northern army, which [[tywin-lannister|Lord Tywin]]’s Lannisters defeat.',
      },
    ),
  ],
  'shae': [
    onScreen(
      [9, 63],
      { it: 'Il gioco del vino', en: 'The drinking game' },
      {
        it: 'Shae segue l’esercito dei Lannister, legata a un cavaliere finché [[bronn|Bronn]] non lo convince a cederla a [[tyrion-lannister|Tyrion]]. Tyrion le chiede la verità, e anche di comportarsi come se lo desiderasse. In un gioco a base di vino con Bronn, lei rivela poco del proprio passato e rivolge invece le domande a Tyrion, che racconta di aver sposato una ragazza di nome Tysha, rivelatasi una prostituta pagata da suo fratello, e di che cosa le fece fare suo padre. Shae passa con lui la notte prima della battaglia.',
        en: 'Shae follows the Lannister army, attached to a knight until [[bronn|Bronn]] persuades him to give her up to [[tyrion-lannister|Tyrion]]. Tyrion asks her for the truth, and to act as if she wants him. Over a drinking game with Bronn she gives little away about her past and turns the questions on Tyrion, who tells how he married a girl named Tysha, who turned out to be a whore his brother had paid, and what his father had done to her. Shae spends the night before the battle with him.',
      },
    ),
    inBooks(
      [9, 63],
      { it: 'Presa a un cavaliere', en: 'Taken from a knight' },
      {
        it: 'Shae è una giovane donna che segue l’esercito dei Lannister. La sera prima della battaglia sulla Forca Verde, il mercenario di Tyrion, [[bronn|Bronn]], la porta via a un cavaliere e la conduce da [[tyrion-lannister|Tyrion]]. È piccola e snella, con grandi occhi scuri e capelli neri. Passa la notte con lui, e al mattino Tyrion parte per la battaglia.',
        en: 'Shae is a young woman who follows the Lannister army. On the eve of the battle on the Green Fork, Tyrion’s sellsword [[bronn|Bronn]] takes her from a knight and brings her to [[tyrion-lannister|Tyrion]]. She is small and slender, with large dark eyes and black hair. She spends the night with him, and in the morning Tyrion rides out to the battle.',
      },
    ),
    inBoth(
      [10, 70],
      { it: 'Verso la capitale', en: 'To the capital' },
      {
        it: 'Dopo la battaglia [[tywin-lannister|lord Tywin]], che deve restare con l’esercito, manda [[tyrion-lannister|Tyrion]] ad Approdo del Re a fare il Primo Cavaliere al suo posto. Tywin gli proibisce di portare a corte la sua puttana. Tyrion decide di sfidare l’ordine del padre e porta Shae con sé nella capitale, con [[bronn|Bronn]] al suo fianco.',
        en: 'After the battle [[tywin-lannister|Lord Tywin]], who must stay with the army, sends [[tyrion-lannister|Tyrion]] to King’s Landing to serve as Hand of the King in his place. Tywin forbids him to take his whore to court. Tyrion decides to defy his father and takes Shae with him to the capital, with [[bronn|Bronn]] at his side.',
      },
    ),
  ],
  'podrick-payne': [
    inBooks(
      [12, 63],
      { it: 'Uno scudiero per Tyrion', en: 'A squire for Tyrion' },
      {
        it: 'Podrick Payne è un ragazzo timido e di poche parole, di un ramo minore di Casa Payne. Nell’accampamento dei Lannister, alla vigilia della battaglia sulla Forca Verde, ser [[kevan-lannister|Kevan Lannister]] lo assegna come scudiero al nipote [[tyrion-lannister|Tyrion]]. Il mattino dopo Tyrion va in battaglia con gli uomini dei clan che ha portato con sé dalle montagne.',
        en: 'Podrick Payne is a shy boy of few words, from a lesser branch of House Payne. In the Lannister camp, on the eve of the battle on the Green Fork, Ser [[kevan-lannister|Kevan Lannister]] gives him to his nephew [[tyrion-lannister|Tyrion]] as a squire. The next morning Tyrion goes into battle with the clansmen he brought with him from the mountains.',
      },
    ),
  ],
  'addam-marbrand': [
    onScreen(
      [10, 63],
      { it: 'Nessuna tregua', en: 'No truce' },
      {
        it: 'Ser Addam Marbrand guida gli esploratori dell’esercito di [[tywin-lannister|Tywin Lannister]]. Dopo che l’esercito di [[robb-stark|Robb Stark]] ha sconfitto i Lannister e fatto prigioniero [[jaime-lannister|Jaime]], Tywin tiene consiglio con i suoi vassalli. Addam chiede notizie di Stannis e Renly Baratheon, e [[kevan-lannister|Kevan]] conferma che entrambi si sono schierati contro i Lannister. Addam respinge l’idea di chiedere una tregua, per non sembrare deboli, e propone invece di marciare contro gli Stark. Tywin congeda i vassalli e decide di trasferirsi a Harrenhal.',
        en: 'Ser Addam Marbrand leads the outriders of [[tywin-lannister|Tywin Lannister]]’s army. After [[robb-stark|Robb Stark]]’s army defeats the Lannisters and takes [[jaime-lannister|Jaime]] prisoner, Tywin holds a council with his bannermen. Addam asks about Stannis and Renly Baratheon, and [[kevan-lannister|Kevan]] confirms that both have declared against the Lannisters. Addam rejects suing for a truce, so as not to look weak, and proposes marching on the Starks instead. Tywin dismisses his bannermen and decides to move to Harrenhal.',
      },
    ),
    inBooks(
      [10, 70],
      {
        it: 'Due battaglie non fanno una guerra',
        en: 'Two battles do not make a war',
      },
      {
        it: 'Ser Addam Marbrand, che guida gli esploratori dell’esercito di [[tywin-lannister|lord Tywin]], siede al consiglio che Tywin tiene dopo due sconfitte, nel Bosco dei Sussurri e nella battaglia che spezza l’assedio dei Lannister. Quando qualcuno propone di chiedere una tregua, Addam risponde che due battaglie non fanno una guerra e si offre di misurare la propria spada con [[robb-stark|Robb Stark]]. Tywin decide di spostare l’esercito a Harrenhal e manda gli esploratori di Addam a coprirne la marcia.',
        en: 'Ser Addam Marbrand, who leads the outriders of [[tywin-lannister|Lord Tywin]]’s army, sits in the council Tywin holds after two defeats, in the Whispering Wood and in the battle that breaks the Lannister siege. When some speak of asking for a truce, Addam answers that two battles do not make a war and offers to try his own steel against [[robb-stark|Robb Stark]]. Tywin decides to move his army to Harrenhal and sends Addam’s outriders to screen the march.',
      },
    ),
  ],
  'hot-pie': [
    onScreen(
      [10, 75],
      { it: 'La spada di Arry', en: 'Arry’s sword' },
      {
        it: 'Frittella è un ragazzo tra le reclute che [[yoren|Yoren]] porta a nord per i Guardiani della Notte. Quando [[arya-stark|Arya]] si unisce a loro travestita da ragazzo, con il nome di Arry, Frittella e [[lommy|Lommy]] la prendono di mira e pretendono la sua spada. Frittella si vanta di aver ucciso un ragazzo a calci. Arya sguaina la spada e gli dice che ha già ucciso un ragazzo grasso. Frittella indietreggia fino a urtare [[gendry|Gendry]], che prende le parti di Arry e mette in fuga i due.',
        en: 'Hot Pie is a boy among the recruits [[yoren|Yoren]] is taking north to the Night’s Watch. When [[arya-stark|Arya]] joins them disguised as a boy called Arry, Hot Pie and [[lommy|Lommy]] pick on her and demand her sword. Hot Pie boasts that he once kicked a boy to death. Arya draws the sword and tells him she has already killed one fat boy. Hot Pie backs away into [[gendry|Gendry]], who takes Arry’s side and scares the two boys off.',
      },
    ),
  ],
  'lommy': [
    onScreen(
      [10, 75],
      { it: 'Dalla parte di Frittella', en: 'Backing Hot Pie' },
      {
        it: 'Lommy, detto Maniverdi, va a nord con le reclute che [[yoren|Yoren]] ha radunato per i Guardiani della Notte. Insieme a [[hot-pie|Frittella]] prende di mira [[arya-stark|Arya]], che si è unita al gruppo travestita da ragazzo con il nome di Arry, e cerca di farle consegnare la spada. Quando Frittella si vanta di aver ucciso un ragazzo a calci, Lommy gli dà subito ragione. Arya sguaina la spada contro Frittella, e [[gendry|Gendry]] prende le sue parti e mette in fuga i due ragazzi.',
        en: 'Lommy, called Greenhands, is going north with the recruits [[yoren|Yoren]] has gathered for the Night’s Watch. With [[hot-pie|Hot Pie]] he picks on [[arya-stark|Arya]], who has joined the group disguised as a boy named Arry, and tries to make her give up her sword. When Hot Pie boasts of kicking a boy to death, Lommy is quick to back him up. Arya draws on Hot Pie, and [[gendry|Gendry]] takes her side and drives both boys off.',
      },
    ),
  ],
  'lysa-arryn': [
    onScreen(
      [5, 35],
      { it: 'La corte del Nido dell’Aquila', en: 'The court of the Eyrie' },
      {
        it: 'Lysa è la vedova di Jon Arryn. Dopo la morte del marito è fuggita dalla capitale con il figlio [[robin-arryn|Robin]] e ha scritto alla sorella [[catelyn-stark|Catelyn]] che sono stati i Lannister a ucciderlo. Ora Catelyn arriva al Nido dell’Aquila con [[tyrion-lannister|Tyrion Lannister]] prigioniero. Lysa, che tiene corte per conto di Robin, è furiosa con la sorella per averlo portato da lei e averli messi tutti in pericolo. Non teme le minacce di Tyrion, perché il Nido dell’Aquila è imprendibile, e lo fa rinchiudere nelle celle del cielo. Catelyn è turbata nel vederla allattare ancora Robin.',
        en: 'Lysa is Jon Arryn’s widow. After her husband’s death she fled the capital with her son [[robin-arryn|Robin]] and wrote to her sister [[catelyn-stark|Catelyn]] that the Lannisters had murdered him. Now Catelyn reaches the Eyrie with [[tyrion-lannister|Tyrion Lannister]] as her prisoner. Lysa, who holds court on Robin’s behalf, is furious with her sister for bringing him there and putting them all in danger. She is not afraid of Tyrion’s threats, since the Eyrie cannot be taken, and sends him to the sky cells. Catelyn is disturbed to see that she still breastfeeds Robin.',
      },
    ),
    onScreen(
      [6, 41],
      { it: 'Il campione di Lysa', en: 'Lysa’s champion' },
      {
        it: 'Davanti alla corte di Lysa, [[tyrion-lannister|Tyrion]] confessa soltanto piccole colpe, poi pretende un processo e infine un processo per singolar tenzone. Lysa chiede chi voglia combattere per lei, e ser [[vardis-egen|Vardis Egen]] accetta. Quando Tyrion sceglie come campione il fratello Jaime, che non è presente, Lysa rifiuta di aspettarlo. Si fa avanti il mercenario [[bronn|Bronn]], che stanca Vardis, lo uccide e ne getta il corpo dalla Porta della Luna. Lysa gli rimprovera di non aver combattuto con onore, e Bronn indica la Porta: Vardis l’ha fatto. Lysa lascia andare Tyrion e Bronn.',
        en: 'Before Lysa’s court, [[tyrion-lannister|Tyrion]] confesses only to petty misdeeds, then demands a trial, and then a trial by combat. Lysa asks who will fight for her, and Ser [[vardis-egen|Vardis Egen]] agrees. When Tyrion names his brother Jaime as his champion, who is not there, Lysa refuses to wait for him. The sellsword [[bronn|Bronn]] steps forward, tires Vardis out, kills him and sends his body through the Moon Door. Lysa tells him he did not fight with honour, and Bronn points at the Door: Vardis did. Lysa lets Tyrion and Bronn go.',
      },
    ),
    inBooks(
      [6, 41],
      { it: 'Il processo al Nido dell’Aquila', en: 'The trial at the Eyrie' },
      {
        it: 'Lysa tiene in una cella del cielo [[tyrion-lannister|Tyrion Lannister]], il prigioniero della sorella [[catelyn-stark|Catelyn]], e lo accusa della morte del marito, Jon Arryn. Quando Tyrion chiede di confessare, Lysa lo riceve davanti ai signori della Valle con il figlio [[robin-arryn|Robin]], che allatta ancora, e Tyrion pretende un processo per singolar tenzone. Come campione Lysa sceglie ser [[vardis-egen|Vardis Egen]], il capitano della sua guardia, e gli affida lo spadone di Jon Arryn. Il campione di Tyrion, il mercenario [[bronn|Bronn]], lo sfianca e lo uccide. Lysa lascia partire Tyrion e Bronn per la strada alta, controvoglia.',
        en: 'Lysa holds [[tyrion-lannister|Tyrion Lannister]], her sister [[catelyn-stark|Catelyn]]’s prisoner, in a sky cell and accuses him of the death of her husband, Jon Arryn. When Tyrion asks to confess, Lysa hears him before the lords of the Vale with her son [[robin-arryn|Robin]], whom she still nurses, and Tyrion demands a trial by combat. As her champion Lysa chooses Ser [[vardis-egen|Vardis Egen]], the captain of her guard, and gives him Jon Arryn’s greatsword. Tyrion’s champion, the sellsword [[bronn|Bronn]], wears him down and kills him. Lysa reluctantly lets Tyrion and Bronn leave by the high road.',
      },
    ),
    onScreen(
      [8, 56],
      { it: 'La Valle resta fuori', en: 'The Vale stays out' },
      {
        it: 'Al Nido dell’Aquila arriva una lettera da Approdo del Re: [[robert-baratheon|re Robert]] è morto e [[eddard-stark|Eddard Stark]] è stato arrestato come traditore. Lysa tarda a mostrarla alla sorella [[catelyn-stark|Catelyn]], che se ne irrita. Prima di partire per raggiungere l’esercito del figlio Robb, Catelyn le chiede di mandare i cavalieri della Valle a combattere i Lannister accanto agli Stark e ai Tully. Lysa rifiuta: i cavalieri devono restare a casa a difendere suo figlio [[robin-arryn|Robin]]. Catelyn se ne va delusa.',
        en: 'A letter reaches the Eyrie from King’s Landing: [[robert-baratheon|King Robert]] is dead, and [[eddard-stark|Eddard Stark]] has been arrested as a traitor. Lysa is slow to show it to her sister [[catelyn-stark|Catelyn]], who is annoyed. Before she leaves to join her son Robb’s army, Catelyn asks Lysa to send the knights of the Vale to fight the Lannisters beside the Starks and the Tullys. Lysa refuses: the knights must stay at home to defend her son [[robin-arryn|Robin]]. Catelyn leaves, frustrated.',
      },
    ),
  ],
  'robin-arryn': [
    onScreen(
      [5, 35],
      { it: 'Il piccolo lord', en: 'The little lord' },
      {
        it: 'Robin è l’unico figlio di [[lysa-arryn|Lysa Arryn]] e il giovane lord del Nido dell’Aquila. Quando la zia [[catelyn-stark|Catelyn]] arriva con [[tyrion-lannister|Tyrion Lannister]] prigioniero, Robin siede accanto alla madre. Catelyn è sconvolta nel vedere che Lysa lo allatta ancora, anche se è troppo grande. Robin va soggetto a scenate e pretende di vedere il cattivo volare. Lysa lo chiama un sovrano forte e potente, degno di guidare la Valle, ma Catelyn ne dubita.',
        en: 'Robin is [[lysa-arryn|Lysa Arryn]]’s only son and the young lord of the Eyrie. When his aunt [[catelyn-stark|Catelyn]] arrives with [[tyrion-lannister|Tyrion Lannister]] as her prisoner, Robin sits beside his mother. Catelyn is shocked to see that Lysa still breastfeeds him, although he is too old for it. Robin is given to tantrums and demands to see the bad man fly. Lysa calls him a strong and mighty ruler, worthy to lead the Vale, but Catelyn doubts it.',
      },
    ),
    onScreen(
      [6, 41],
      { it: 'Niente volo', en: 'No flight' },
      {
        it: 'Portato davanti alla corte, [[tyrion-lannister|Tyrion]] confessa una serie di piccole malefatte di quando era bambino, e alcune incuriosiscono molto Robin. Poi Tyrion pretende un processo per singolar tenzone. Il mercenario [[bronn|Bronn]] combatte per lui e uccide il campione di Lysa, ser [[vardis-egen|Vardis Egen]]. Robin chiede se adesso può far volare l’ometto, e Tyrion risponde che l’ometto torna a casa. Robin resta deluso: gli è stata tolta un’esecuzione dalla Porta della Luna.',
        en: 'Brought before the court, [[tyrion-lannister|Tyrion]] confesses to a list of petty misdeeds from his childhood, and some of them fascinate Robin. Then Tyrion demands a trial by combat. The sellsword [[bronn|Bronn]] fights for him and kills Lysa’s champion, Ser [[vardis-egen|Vardis Egen]]. Robin asks whether he can make the little man fly now, and Tyrion answers that the little man is going home. Robin is disappointed: he has been denied an execution through the Moon Door.',
      },
    ),
    inBooks(
      [6, 41],
      {
        it: 'Il prigioniero da far volare',
        en: 'The prisoner he wants to see fly',
      },
      {
        it: 'Robin è il giovane lord del Nido dell’Aquila, un bambino gracile e malaticcio. Sua madre [[lysa-arryn|Lysa]] governa la Valle in suo nome e lo allatta ancora. Quando [[tyrion-lannister|Tyrion Lannister]], il prigioniero della zia [[catelyn-stark|Catelyn]], viene portato dalle celle del cielo davanti alla corte, Robin chiede di farlo volare. Tyrion invece pretende un processo per singolar tenzone. Il mercenario [[bronn|Bronn]] combatte per lui e uccide il campione di Lysa, ser [[vardis-egen|Vardis Egen]], e Tyrion è libero.',
        en: 'Robin is the young lord of the Eyrie, a small and sickly child. His mother [[lysa-arryn|Lysa]] rules the Vale in his name and still nurses him. When [[tyrion-lannister|Tyrion Lannister]], his aunt [[catelyn-stark|Catelyn]]’s prisoner, is brought from the sky cells before the court, Robin asks to make him fly. Tyrion demands a trial by combat instead. The sellsword [[bronn|Bronn]] fights for him and kills Lysa’s champion, Ser [[vardis-egen|Vardis Egen]], and Tyrion goes free.',
      },
    ),
  ],
  'hugh-of-the-vale': [
    inBoth(
      [4, 30],
      { it: 'Il torneo del Primo Cavaliere', en: 'The Hand’s tourney' },
      {
        it: 'Hugh è stato lo scudiero di Jon Arryn, il Primo Cavaliere morto da poco, e ora è cavaliere. [[petyr-baelish|Ditocorto]] parla di lui a [[eddard-stark|Eddard Stark]], che manda il capitano della sua guardia, [[jory-cassel|Jory Cassel]], a fargli delle domande, ma Hugh si rifiuta di parlargli. Al torneo in onore del nuovo Primo Cavaliere, Hugh giostra contro ser [[gregor-clegane|Gregor Clegane]], la Montagna, e la lancia di Gregor lo uccide.',
        en: 'Hugh was the squire of Jon Arryn, the late Hand of the King, and is now a knight. [[petyr-baelish|Littlefinger]] tells [[eddard-stark|Eddard Stark]] about him, and Eddard sends the captain of his guard, [[jory-cassel|Jory Cassel]], to question him, but Hugh refuses to talk to him. At the tourney held for the new Hand, Hugh rides against Ser [[gregor-clegane|Gregor Clegane]], the Mountain, and Gregor’s lance kills him.',
      },
    ),
    onScreen(
      [5, 31],
      { it: 'La veglia di ser Barristan', en: 'Ser Barristan’s vigil' },
      {
        it: 'Hugh non aveva né famiglia né amici, così ser [[barristan-selmy|Barristan Selmy]], il Lord Comandante della Guardia reale, veglia da solo il suo corpo. [[eddard-stark|Eddard]] si chiede come un cavaliere appena nominato potesse permettersi un’armatura nuova. Barristan pensa che forse gliel’abbia lasciata Jon Arryn, ma Eddard sospetta che Hugh avesse avuto una parte nella morte del suo signore. [[varys|Varys]] è d’accordo e pensa che siano stati i Lannister a farlo uccidere, perché Gregor è al loro servizio.',
        en: 'Hugh had no family and no friends, so Ser [[barristan-selmy|Barristan Selmy]], Lord Commander of the Kingsguard, keeps the vigil over his body himself. [[eddard-stark|Eddard]] wonders how a knight so newly made could afford new armour. Barristan thinks Jon Arryn may have left him the money, but Eddard suspects that Hugh had a part in his lord’s death. [[varys|Varys]] agrees, and thinks that the Lannisters had him killed, since Gregor is in their service.',
      },
    ),
    inBooks(
      [5, 31],
      { it: 'L’armatura per sua madre', en: 'Armour for his mother' },
      {
        it: 'Secondo il fratello di Gregor, [[sandor-clegane|Sandor Clegane]], Hugh non aveva né denaro né scudiero, e la sua gorgiera era allacciata male: Gregor se n’è accorto e ha mirato lì. Il giorno dopo [[eddard-stark|Eddard Stark]] parla con ser [[barristan-selmy|Barristan Selmy]] accanto al corpo di Hugh. Barristan gli dice che Hugh aveva una madre nella Valle, ed Eddard ordina che l’armatura venga mandata a lei. Quella notte [[varys|Varys]] rivela a Eddard che Jon Arryn è stato avvelenato con le Lacrime di Lys e suggerisce che sia stato Hugh, ucciso da un uomo dei Lannister prima di poter parlare.',
        en: 'According to Gregor’s brother, [[sandor-clegane|Sandor Clegane]], Hugh had no money and no squire, and his gorget was badly fastened: Gregor saw it and aimed there. The next day [[eddard-stark|Eddard Stark]] talks with Ser [[barristan-selmy|Barristan Selmy]] beside Hugh’s body. Barristan tells him that Hugh had a mother in the Vale, and Eddard orders his armour sent to her. That night [[varys|Varys]] tells Eddard that Jon Arryn was poisoned with the tears of Lys, and suggests that Hugh did it and was killed by a Lannister man before he could talk.',
      },
    ),
  ],
  'robar-royce': [
    inBooks(
      [4, 30],
      {
        it: 'Battuto dal Cavaliere di Fiori',
        en: 'Beaten by the Knight of Flowers',
      },
      {
        it: 'Robar è uno dei figli di Yohn Royce, il lord di Runestone, nella Valle di Arryn. Arriva ad Approdo del Re con il padre e con il fratello Andar per il torneo del Primo Cavaliere. Nelle giostre sconfigge ser Lothor Brune, ma poi perde contro ser Loras Tyrell, il Cavaliere di Fiori, che grazie a quella vittoria è tra gli ultimi quattro rimasti in gara. [[sansa-stark|Sansa Stark]] assiste alle giostre dalle tribune.',
        en: 'Robar is one of the sons of Yohn Royce, the lord of Runestone, in the Vale of Arryn. He comes to King’s Landing with his father and his brother Andar for the Hand’s tourney. In the jousts he beats Ser Lothor Brune, but then loses to Ser Loras Tyrell, the Knight of Flowers, whose win puts him among the last four riders left. [[sansa-stark|Sansa Stark]] watches the jousts from the stands.',
      },
    ),
  ],
  'yohn-royce': [
    inBooks(
      [38, 30],
      {
        it: 'Il lord di Runestone al torneo',
        en: 'The lord of Runestone at the tourney',
      },
      {
        it: 'Yohn Royce è il lord di Runestone e il capo di Casa Royce, una delle grandi casate della Valle, giurate a Casa Arryn. Arriva ad Approdo del Re con i figli, ser Andar e ser [[robar-royce|Robar]], per il torneo in onore del nuovo Primo Cavaliere, [[eddard-stark|Eddard Stark]]. Anche lui giostra, e viene disarcionato. Suo figlio Robar arriva più avanti nelle giostre, finché non lo batte ser [[loras-tyrell|Loras Tyrell]].',
        en: 'Yohn Royce is the lord of Runestone and the head of House Royce, one of the great houses of the Vale, sworn to House Arryn. He comes to King’s Landing with his sons, Ser Andar and Ser [[robar-royce|Robar]], for the tourney held for the new Hand of the King, [[eddard-stark|Eddard Stark]]. He rides in the jousts himself and is unhorsed. His son Robar goes further, until Ser [[loras-tyrell|Loras Tyrell]] beats him.',
      },
    ),
  ],
  'nestor-royce': [
    inBooks(
      [5, 35],
      { it: 'Le Porte della Luna', en: 'The Gates of the Moon' },
      {
        it: 'Nestor Royce è l’alto attendente della Valle e tiene per lady [[lysa-arryn|Lysa Arryn]] le Porte della Luna, il castello ai piedi della montagna su cui sorge il Nido dell’Aquila. È lì che riceve [[catelyn-stark|Catelyn Stark]], la sorella di Lysa, quando arriva con il suo prigioniero, [[tyrion-lannister|Tyrion Lannister]]. Lysa ordina a Catelyn di salire subito al Nido dell’Aquila, e la giovane [[mya-stone|Mya Stone]] la guida lungo il sentiero di notte.',
        en: 'Nestor Royce is the High Steward of the Vale, and he holds the Gates of the Moon, the castle at the foot of the mountain where the Eyrie stands, for Lady [[lysa-arryn|Lysa Arryn]]. There he receives [[catelyn-stark|Catelyn Stark]], Lysa’s sister, when she arrives with her prisoner, [[tyrion-lannister|Tyrion Lannister]]. Lysa orders Catelyn to come up to the Eyrie at once, and the young [[mya-stone|Mya Stone]] guides her up the path by night.',
      },
    ),
  ],
  'mya-stone': [
    inBooks(
      [5, 35],
      { it: 'La salita di notte', en: 'The climb by night' },
      {
        it: 'Mya è una giovane donna al servizio dei Royce delle Porte della Luna. Con i suoi muli porta i viveri su per la montagna fino al Nido dell’Aquila, e ne conosce ogni passo. Quando [[lysa-arryn|Lysa Arryn]] ordina alla sorella [[catelyn-stark|Catelyn]] di salire subito, è Mya a guidarla di notte lungo il sentiero. Durante la salita le racconta di essere innamorata di uno scudiero, Mychel Redfort, e di volerlo sposare quando diventerà cavaliere. Catelyn pensa che non accadrà: Mya è una bastarda, e i Redfort sono una casata nobile.',
        en: 'Mya is a young woman in the service of the Royces of the Gates of the Moon. With her mules she carries food up the mountain to the Eyrie, and she knows every step of the way. When [[lysa-arryn|Lysa Arryn]] orders her sister [[catelyn-stark|Catelyn]] to come up at once, it is Mya who guides her up the path by night. On the way she tells Catelyn that she loves a squire, Mychel Redfort, and hopes to marry him once he is knighted. Catelyn thinks it will not happen: Mya is baseborn, and the Redforts are a noble house.',
      },
    ),
  ],
  'vardis-egen': [
    inBooks(
      [6, 35],
      { it: 'Il capitano della guardia', en: 'The captain of the guard' },
      {
        it: 'Ser Vardis Egen comanda la guardia di Casa Arryn al Nido dell’Aquila, come la comandava quando Jon Arryn era Primo Cavaliere del Re. Quando [[catelyn-stark|Catelyn Stark]] arriva al Nido dell’Aquila, è lui ad accoglierla e ad accompagnarla dalla sorella, lady [[lysa-arryn|Lysa Arryn]]. Catelyn porta con sé un prigioniero, [[tyrion-lannister|Tyrion Lannister]], che accusa di aver cercato di far uccidere suo figlio Bran.',
        en: 'Ser Vardis Egen commands House Arryn’s guard at the Eyrie, as he did when Jon Arryn was Hand of the King. When [[catelyn-stark|Catelyn Stark]] reaches the Eyrie, he is the one who greets her and takes her to see her sister, Lady [[lysa-arryn|Lysa Arryn]]. Catelyn has brought a prisoner, [[tyrion-lannister|Tyrion Lannister]], whom she accuses of trying to have her son Bran killed.',
      },
    ),
    onScreen(
      [6, 41],
      { it: 'La Porta della Luna', en: 'The Moon Door' },
      {
        it: 'Ser Vardis guida i cavalieri che vanno incontro a [[catelyn-stark|Catelyn]] e al suo prigioniero, [[tyrion-lannister|Tyrion]], prima del Nido dell’Aquila. Quando Tyrion pretende un processo per singolar tenzone, [[lysa-arryn|Lysa]] chiede un campione e Vardis accetta, anche se uccidere un avversario così piccolo gli sembra disonorevole. Combatte nella sua armatura completa contro il mercenario [[bronn|Bronn]], che aspetta che si stanchi, lo ferisce e lo uccide. Il corpo di Vardis rotola fuori dalla Porta della Luna.',
        en: 'Ser Vardis leads the knights who meet [[catelyn-stark|Catelyn]] and her prisoner, [[tyrion-lannister|Tyrion]], before the Eyrie. When Tyrion demands a trial by combat, [[lysa-arryn|Lysa]] asks for a champion and Vardis agrees, although killing so small an opponent seems dishonourable to him. He fights in full armour against the sellsword [[bronn|Bronn]], who waits for him to tire, wounds him and kills him. Vardis’s body rolls out through the Moon Door.',
      },
    ),
    inBooks(
      [6, 41],
      { it: 'Lo spadone di Jon Arryn', en: 'Jon Arryn’s greatsword' },
      {
        it: 'Quando [[tyrion-lannister|Tyrion Lannister]] pretende un processo per singolar tenzone, molti si offrono, ma lady [[lysa-arryn|Lysa]] sceglie ser Vardis come campione di Casa Arryn. Vardis non vuole battersi con un uomo così piccolo, così Tyrion chiede un campione, e si fa avanti il mercenario [[bronn|Bronn]]. Lysa dà a Vardis lo spadone di Jon Arryn, più pesante della sua spada. Vardis combatte in una pesante armatura a piastre, e Bronn si muove svelto per sfiancarlo. Alla fine Bronn gli fa cadere addosso una statua e lo uccide.',
        en: 'When [[tyrion-lannister|Tyrion Lannister]] demands a trial by combat, many men come forward, but Lady [[lysa-arryn|Lysa]] chooses Ser Vardis as the champion of House Arryn. Vardis is unwilling to fight so small a man, so Tyrion calls for a champion, and the sellsword [[bronn|Bronn]] steps forward. Lysa gives Vardis Jon Arryn’s greatsword, heavier than his own blade. Vardis fights in heavy plate, and Bronn keeps moving to wear him out. In the end Bronn topples a statue onto him and kills him.',
      },
    ),
  ],
  'mord': [
    onScreen(
      [6, 39],
      {
        it: 'Un Lannister paga sempre i suoi debiti',
        en: 'A Lannister always pays his debts',
      },
      {
        it: 'Mord è il carceriere delle celle del cielo del Nido dell’Aquila, e [[tyrion-lannister|Tyrion Lannister]] viene affidato a lui. Tyrion cerca di comprarsi la libertà, ma non ha denaro con sé, e Mord lo picchia. A fatica Tyrion lo convince a portare un messaggio a lady [[lysa-arryn|Lysa]], in cambio dell’oro che aveva quando è stato catturato: un Lannister paga sempre i suoi debiti. Dopo il processo Tyrion si fa restituire la borsa da ser [[rodrik-cassel|Rodrik Cassel]] e la lancia a Mord.',
        en: 'Mord is the gaoler of the Eyrie’s sky cells, and [[tyrion-lannister|Tyrion Lannister]] is put in his care. Tyrion tries to bargain for his freedom, but he has no money on him, and Mord beats him. With great difficulty Tyrion persuades him to carry a message to Lady [[lysa-arryn|Lysa]], in exchange for the gold he had when he was taken: a Lannister always pays his debts. After the trial Tyrion gets his purse back from Ser [[rodrik-cassel|Rodrik Cassel]] and tosses it to Mord.',
      },
    ),
    inBooks(
      [6, 39],
      { it: 'Il carceriere', en: 'The gaoler' },
      {
        it: 'Mord è il carceriere delle celle del cielo del Nido dell’Aquila, celle con un lato aperto sul vuoto. È un uomo crudele e ottuso, che si diverte a ricordare ai prigionieri che finiranno sfracellati sulle rocce, e a [[tyrion-lannister|Tyrion Lannister]] prende il mantello, anche se le notti sono gelide. Tyrion gli promette dell’oro se porterà un messaggio a lady [[lysa-arryn|Lysa]]: è pronto a confessare.',
        en: 'Mord is the gaoler of the Eyrie’s sky cells, cells with one side open to the drop. He is a cruel, dim man who enjoys reminding prisoners that they will end up dashed on the rocks below, and he takes [[tyrion-lannister|Tyrion Lannister]]’s cloak, though the nights are freezing. Tyrion promises him gold if he will carry a message to Lady [[lysa-arryn|Lysa]]: he is ready to confess.',
      },
    ),
  ],
  'lyn-corbray': [
    inBooks(
      [6, 39],
      { it: 'Un pretendente di Lysa', en: 'One of Lysa’s suitors' },
      {
        it: 'Ser Lyn Corbray è un cavaliere della Valle, uno dei pretendenti di lady [[lysa-arryn|Lysa Arryn]] dopo la morte di Jon Arryn. È al Nido dell’Aquila quando [[tyrion-lannister|Tyrion Lannister]], il prigioniero di [[catelyn-stark|Catelyn Stark]], viene portato dalle celle del cielo davanti alla corte e pretende un processo per singolar tenzone. Lyn è tra i cavalieri che si offrono subito di combattere come campione di Lysa.',
        en: 'Ser Lyn Corbray is a knight of the Vale, one of the suitors of Lady [[lysa-arryn|Lysa Arryn]] since Jon Arryn’s death. He is at the Eyrie when [[tyrion-lannister|Tyrion Lannister]], [[catelyn-stark|Catelyn Stark]]’s prisoner, is brought from the sky cells before the court and demands a trial by combat. Lyn is among the knights who at once offer to fight as Lysa’s champion.',
      },
    ),
    inBooks(
      [6, 43],
      { it: 'Giù dalla montagna', en: 'Down the mountain' },
      {
        it: 'Lady [[lysa-arryn|Lysa]] non sceglie ser Lyn come campione, ma ser [[vardis-egen|Vardis Egen]], e il mercenario [[bronn|Bronn]] lo uccide. Così [[tyrion-lannister|Tyrion Lannister]] è libero. È Lyn a scortare Tyrion e Bronn giù dalla montagna, fino alla Porta Insanguinata, dove li lascia proseguire da soli per la strada alta e ordina loro di non tornare mai più nella Valle.',
        en: 'Lady [[lysa-arryn|Lysa]] does not choose Ser Lyn as her champion but Ser [[vardis-egen|Vardis Egen]], and the sellsword [[bronn|Bronn]] kills him. So [[tyrion-lannister|Tyrion Lannister]] goes free. It is Lyn who escorts Tyrion and Bronn down the mountain to the Bloody Gate, where he leaves them to go on alone along the high road and orders them never to come back to the Vale.',
      },
    ),
  ],
  'anya-waynwood': [
    inBooks(
      [38, 39],
      { it: 'Tra i signori della Valle', en: 'Among the lords of the Vale' },
      {
        it: 'Lady Anya Waynwood è la signora di Ironoaks e il capo di Casa Waynwood, una delle grandi casate della Valle. È vedova e ha tre figli. Siede nella sala del Nido dell’Aquila, circondata dai figli, tra i signori della Valle che assistono all’udienza di [[tyrion-lannister|Tyrion Lannister]] davanti a lady [[lysa-arryn|Lysa Arryn]]. Tyrion, portato lì dalle celle del cielo, invece di confessare pretende un processo per singolar tenzone.',
        en: 'Lady Anya Waynwood is the lady of Ironoaks and the head of House Waynwood, one of the great houses of the Vale. She is a widow with three sons. She sits in the hall of the Eyrie, surrounded by her sons, among the lords of the Vale who attend the hearing of [[tyrion-lannister|Tyrion Lannister]] before Lady [[lysa-arryn|Lysa Arryn]]. Tyrion, brought there from the sky cells, demands a trial by combat instead of confessing.',
      },
    ),
  ],
  'donnel-waynwood': [
    inBooks(
      [35, 35],
      { it: 'La sortita', en: 'The sortie' },
      {
        it: 'Ser Donnel Waynwood è un cavaliere di Casa Waynwood che serve alla Porta Insanguinata, la fortezza che sbarra la strada per la Valle. Sulle Montagne della Luna gli uomini dei clan assalgono la compagnia di [[catelyn-stark|Catelyn Stark]], che porta prigioniero [[tyrion-lannister|Tyrion Lannister]] al Nido dell’Aquila. Donnel guida la sortita che li salva e li scorta alla Porta Insanguinata, dove interroga chi arriva prima di lasciarlo proseguire.',
        en: 'Ser Donnel Waynwood is a knight of House Waynwood who serves at the Bloody Gate, the stronghold that bars the road into the Vale. In the Mountains of the Moon, clansmen attack the party of [[catelyn-stark|Catelyn Stark]], who is taking [[tyrion-lannister|Tyrion Lannister]] to the Eyrie as her prisoner. Donnel leads the sortie that saves them and escorts them to the Bloody Gate, where he questions travellers before he lets them ride on.',
      },
    ),
  ],
  'marillion': [
    inBoth(
      [4, 29],
      { it: 'Il cantore della locanda', en: 'The singer at the inn' },
      {
        it: 'Marillion è un giovane cantore che si trova alla Locanda all’Incrocio quando arrivano, in incognito, [[catelyn-stark|Catelyn Stark]] e ser [[rodrik-cassel|Rodrik Cassel]]. Si offre di cantare per Catelyn, che lo respinge. Quando arriva [[tyrion-lannister|Tyrion Lannister]], Marillion offre di cantare anche per lui, e Tyrion rifiuta. Poi Catelyn accusa Tyrion di aver cercato di far uccidere suo figlio Bran e, con l’aiuto di alcuni uomini presenti nella locanda, lo prende prigioniero. Marillion assiste alla scena.',
        en: 'Marillion is a young singer at the Inn at the Crossroads when [[catelyn-stark|Catelyn Stark]] and Ser [[rodrik-cassel|Rodrik Cassel]] arrive in secret. He offers to sing for Catelyn, who turns him away. When [[tyrion-lannister|Tyrion Lannister]] arrives, Marillion offers to sing for him too, and Tyrion refuses. Then Catelyn accuses Tyrion of trying to have her son Bran killed and, with the help of some of the men at the inn, takes him prisoner. Marillion witnesses it all.',
      },
    ),
    onScreen(
      [5, 35],
      { it: 'La canzone della cattura', en: 'The song of the capture' },
      {
        it: 'Sperando di trarne una canzone, Marillion decide di seguire la compagnia di [[catelyn-stark|Catelyn]] verso il Nido dell’Aquila, e lungo la strada lavora a una canzone sulla cattura di [[tyrion-lannister|Tyrion]]. Nelle colline della Valle la compagnia viene assalita da una delle tribù delle colline. Ci sono diverse perdite, e Tyrion, invece di fuggire, combatte e salva la vita a Catelyn. Marillion sopravvive all’attacco e arriva sano e salvo al Nido dell’Aquila con gli altri.',
        en: 'Hoping for a song, Marillion decides to follow [[catelyn-stark|Catelyn]]’s party toward the Eyrie, and on the way works on a song about the capture of [[tyrion-lannister|Tyrion]]. In the hills of the Vale the party is attacked by one of the hill tribes. There are several losses, and Tyrion, instead of escaping, fights and saves Catelyn’s life. Marillion survives the attack and reaches the Eyrie safely with the others.',
      },
    ),
    inBooks(
      [5, 35],
      { it: 'Versi lungo la strada', en: 'Verses on the road' },
      {
        it: 'Sperando di trarne una canzone, Marillion accompagna la compagnia di [[catelyn-stark|Catelyn Stark]] che porta [[tyrion-lannister|Tyrion Lannister]] prigioniero al Nido dell’Aquila. Lungo la strada si mette a comporre una canzone sulla cattura, e la cosa irrita molto Tyrion. Sulle Montagne della Luna la compagnia viene assalita dagli uomini dei clan, finché non arriva una sortita dalla Porta Insanguinata. Marillion raggiunge la Valle insieme agli altri.',
        en: 'Hoping for a song, Marillion goes with the party of [[catelyn-stark|Catelyn Stark]] that is taking [[tyrion-lannister|Tyrion Lannister]] to the Eyrie as a prisoner. On the road he sets about composing a song about the capture, which irritates Tyrion a great deal. In the Mountains of the Moon the party is attacked by clansmen, until a sortie comes out from the Bloody Gate. Marillion reaches the Vale with the others.',
      },
    ),
    onScreen(
      [10, 73],
      { it: 'La lingua o le dita', en: 'His tongue or his fingers' },
      {
        it: 'Tornato ad Approdo del Re, Marillion canta in una taverna una canzone che si prende gioco del defunto [[robert-baratheon|re Robert]], e viene portato davanti a [[joffrey-baratheon|re Joffrey]]. Joffrey gli chiede se preferisce tenersi le dita o la lingua. Marillion, paralizzato dalla paura, balbetta che a ogni uomo servono le mani. Joffrey ordina allora al boia, ser [[ilyn-payne|Ilyn Payne]], di tagliargli la lingua, e Ilyn lo fa davanti a tutta la corte mentre Marillion implora pietà.',
        en: 'Back in King’s Landing, Marillion sings a song mocking the late [[robert-baratheon|King Robert]] in a tavern, and he is brought before [[joffrey-baratheon|King Joffrey]]. Joffrey asks him whether he would rather keep his fingers or his tongue. Marillion, frozen with fear, stammers that every man needs his hands. Joffrey then orders the headsman, Ser [[ilyn-payne|Ilyn Payne]], to cut out his tongue, and Ilyn does it before the whole court while Marillion begs for mercy.',
      },
    ),
  ],
  'stiv': [
    inBoth(
      [6, 38],
      { it: 'Agguato nella Foresta del Lupo', en: 'Ambush in the wolfswood' },
      {
        it: 'Stiv è un disertore dei Guardiani della Notte, fuggito a sud insieme ad altri fuorilegge, tra cui la bruta [[osha|Osha]]. Nella Foresta del Lupo la banda sorprende da solo [[bran-stark|Bran Stark]], che non può camminare, e cerca di derubarlo. Il fratello di Bran, [[robb-stark|Robb]], torna indietro e affronta i fuorilegge. Stiv punta un coltello alla gola di Bran e cerca di imporre i suoi patti a Robb, ma [[theon-greyjoy|Theon Greyjoy]] lo uccide con una freccia. Osha si arrende.',
        en: 'Stiv is a deserter of the Night’s Watch who has fled south with other outlaws, among them the wildling [[osha|Osha]]. In the wolfswood the band comes upon [[bran-stark|Bran Stark]], who cannot walk, alone, and tries to rob him. Bran’s brother [[robb-stark|Robb]] comes back and takes on the outlaws. Stiv puts a knife to Bran’s throat and tries to dictate terms to Robb, but [[theon-greyjoy|Theon Greyjoy]] kills him with an arrow. Osha surrenders.',
      },
    ),
  ],
  'wallen': [
    inBoth(
      [6, 38],
      { it: 'I fuorilegge e il ragazzo', en: 'The outlaws and the boy' },
      {
        it: 'Wellen è un disertore dei Guardiani della Notte, fuggito a sud con il compagno [[stiv|Stiv]], con la bruta [[osha|Osha]] e con altri fuorilegge. Nella Foresta del Lupo la banda sorprende da solo [[bran-stark|Bran Stark]], che non può camminare, e cerca di derubarlo. Il fratello di Bran, [[robb-stark|Robb]], torna in suo aiuto, e Wellen muore nello scontro. Stiv viene ucciso da una freccia di [[theon-greyjoy|Theon Greyjoy]], e Osha si arrende.',
        en: 'Wallen is a deserter of the Night’s Watch who has fled south with his companion [[stiv|Stiv]], the wildling [[osha|Osha]] and other outlaws. In the wolfswood the band comes upon [[bran-stark|Bran Stark]], who cannot walk, alone, and tries to rob him. Bran’s brother [[robb-stark|Robb]] comes to his aid, and Wallen dies in the fight. Stiv is killed by an arrow from [[theon-greyjoy|Theon Greyjoy]], and Osha surrenders.',
      },
    ),
  ],
  'shagga': [
    inBooks(
      [8, 43],
      {
        it: 'La nostra montagna, la nostra capra',
        en: 'Our mountain, our goat',
      },
      {
        it: 'Shagga figlio di Dolf è un enorme guerriero dei Corvi di Pietra, uno dei clan delle Montagne della Luna. Sulla strada che lascia la Valle, [[bronn|Bronn]] cattura una capra, e una dozzina di Corvi di Pietra circonda lui e [[tyrion-lannister|Tyrion Lannister]]. A guidarli è Gunthor figlio di Gurn. Quando Tyrion li accusa di codardia Shagga reagisce minaccioso, ma Gunthor lo zittisce e chiede a Tyrion cosa ha da offrire. Tyrion promette armi e ricchezze, e i Corvi di Pietra decidono di seguirlo.',
        en: 'Shagga son of Dolf is a huge warrior of the Stone Crows, one of the clans of the Mountains of the Moon. On the road out of the Vale, [[bronn|Bronn]] catches a goat, and a dozen Stone Crows surround him and [[tyrion-lannister|Tyrion Lannister]]. Their leader is Gunthor son of Gurn. When Tyrion taunts them as cowards Shagga turns threatening, but Gunthor silences him and asks Tyrion what he has to offer. Tyrion promises weapons and wealth, and the Stone Crows agree to follow him.',
      },
    ),
    onScreen(
      [8, 57],
      {
        it: 'L’alleanza con i Lannister',
        en: 'The alliance with the Lannisters',
      },
      {
        it: 'Shagga guida i Corvi di Pietra che sorprendono [[tyrion-lannister|Tyrion]] e [[bronn|Bronn]] mentre lasciano la Valle, e vuole derubarli e tenersi Tyrion come buffone. Tyrion gli propone un’alleanza con Casa Lannister contro i loro nemici comuni, gli Arryn e gli Stark, e promette oro e armi. Shagga accetta e scorta Tyrion all’esercito di suo padre, [[tywin-lannister|Tywin]]. Lungo la strada si uniscono a loro [[timett|Timmet]] degli Uomini Bruciati e [[chella|Chella]] delle Orecchie Nere. Tywin accetta l’alleanza, e Shagga pretende che i clan combattano accanto a Tyrion.',
        en: 'Shagga leads the Stone Crows who waylay [[tyrion-lannister|Tyrion]] and [[bronn|Bronn]] as they leave the Vale, meaning to rob them and keep Tyrion as a fool. Tyrion offers an alliance with House Lannister against the enemies they share, the Arryns and the Starks, and promises gold and weapons. Shagga agrees and escorts Tyrion to the army of his father, [[tywin-lannister|Tywin]]. On the way they are joined by [[timett|Timett]] of the Burned Men and [[chella|Chella]] of the Black Ears. Tywin accepts the alliance, and Shagga insists that the clans fight beside Tyrion.',
      },
    ),
    inBooks(
      [8, 57],
      { it: 'La spada spezzata', en: 'The broken sword' },
      {
        it: 'Shagga è tra i circa trecento uomini dei clan che [[tyrion-lannister|Tyrion]] porta all’accampamento del padre, [[tywin-lannister|lord Tywin]], insieme agli Uomini Bruciati di [[timett|Timmet]] e alle Orecchie Nere di [[chella|Chella]]. Gunthor resta indietro a radunare altri clan. Shagga entra con fracasso nella sala dove siedono Tyrion, Tywin e il fratello di Tywin, [[kevan-lannister|Kevan]]. Il capitano della guardia vola contro il focolare, e Shagga gli spezza la spada su un ginocchio, minacciando di tagliargli la virilità se snuderà ancora l’acciaio contro di lui.',
        en: 'Shagga is among the three hundred or so clansmen whom [[tyrion-lannister|Tyrion]] brings to the camp of his father, [[tywin-lannister|Lord Tywin]], along with [[timett|Timett]]’s Burned Men and [[chella|Chella]]’s Black Ears. Gunthor stays behind to raise more clans. Shagga crashes into the room where Tyrion, Tywin and Tywin’s brother [[kevan-lannister|Kevan]] sit. The captain of the guard goes flying against the hearth, and Shagga snaps his sword over one knee, threatening to cut off his manhood if he bares steel on him again.',
      },
    ),
    onScreen(
      [9, 63],
      { it: 'Due asce', en: 'Two axes' },
      {
        it: 'All’accampamento dei Lannister un Fratello della Luna accoltella un Corvo di Pietra per una salsiccia, e tre Corvi di Pietra gli tagliano la gola. [[bronn|Bronn]] riesce a fermare Shagga prima che mutili il cadavere, ma Shagga e Gunthor rifiutano di pagare il prezzo del sangue che chiedono i Fratelli della Luna. [[tywin-lannister|Tywin]] rimprovera a [[tyrion-lannister|Tyrion]] la poca disciplina dei suoi alleati. Prima della battaglia Shagga pretende due asce dalle scorte dei Lannister, con disappunto di [[kevan-lannister|Kevan]]. I clan combattono bene e vincono, poi saccheggiano i caduti. Tyrion, travolto dai suoi stessi uomini, resta svenuto.',
        en: 'At the Lannister camp a Moon Brother stabs a Stone Crow over a sausage, and three Stone Crows open his throat. [[bronn|Bronn]] manages to stop Shagga from mutilating the body, but Shagga and Gunthor refuse to pay the blood money the Moon Brothers demand. [[tywin-lannister|Tywin]] faults [[tyrion-lannister|Tyrion]] for his allies’ lack of discipline. Before the battle Shagga demands two axes from the Lannister stores, to [[kevan-lannister|Kevan]]’s annoyance. The clans fight well and win, then loot the fallen. Tyrion, knocked down by his own men, lies unconscious.',
      },
    ),
    inBooks(
      [10, 70],
      { it: 'Gli uomini dei clan in battaglia', en: 'The clansmen in battle' },
      {
        it: 'Shagga e gli altri uomini dei clan che seguono [[tyrion-lannister|Tyrion]] combattono per i Lannister nella battaglia della Forca Verde. Si battono bene, ma circa la metà di loro muore. Dopo la battaglia [[tywin-lannister|lord Tywin]] dice a Tyrion che i suoi selvaggi possono andarsene a saccheggiare come vogliono. Tyrion rifiuta e li tiene con sé: sono rozzi e indisciplinati, ma di loro si fida più che degli uomini di suo padre.',
        en: 'Shagga and the other clansmen who follow [[tyrion-lannister|Tyrion]] fight for the Lannisters in the battle on the Green Fork. They fight well, but about half of them are killed. After the battle [[tywin-lannister|Lord Tywin]] tells Tyrion that his savages may go off and plunder as they like. Tyrion declines and keeps them with him: they are uncouth and unruly, but he trusts them more than any of his father’s men.',
      },
    ),
  ],
  'timett': [
    onScreen(
      [8, 57],
      { it: 'Gli Uomini Bruciati', en: 'The Burned Men' },
      {
        it: 'Timmet guida gli Uomini Bruciati, uno dei clan delle tribù delle colline. Quando [[shagga|Shagga]] e i Corvi di Pietra catturano [[tyrion-lannister|Tyrion Lannister]], Tyrion propone ai clan un’alleanza: combattere i nemici di Casa Lannister in cambio di armi, oro e indipendenza dal Nido dell’Aquila. Timmet accetta e scorta Tyrion all’accampamento dei Lannister insieme a Shagga e a [[chella|Chella]] delle Orecchie Nere. Lì Tyrion lo presenta al padre, [[tywin-lannister|Tywin]], che accetta l’alleanza.',
        en: 'Timett leads the Burned Men, one of the hill tribes. When [[shagga|Shagga]] and the Stone Crows capture [[tyrion-lannister|Tyrion Lannister]], Tyrion offers the clans an alliance: they will fight the enemies of House Lannister in exchange for weapons, gold and freedom from the Eyrie. Timett agrees and escorts Tyrion to the Lannister camp along with Shagga and [[chella|Chella]] of the Black Ears. There Tyrion presents him to his father, [[tywin-lannister|Tywin]], who accepts the alliance.',
      },
    ),
    inBooks(
      [8, 57],
      { it: 'La Mano Rossa', en: 'The Red Hand' },
      {
        it: 'Timmet figlio di Timmet è il più temuto degli Uomini Bruciati, il più imprevedibile e feroce dei clan delle Montagne della Luna. Nel rito che li fa uomini, gli Uomini Bruciati si bruciano un dito o un capezzolo; Timmet si è bruciato un occhio, e per questo lo chiamano Mano Rossa. Con i suoi uomini segue [[tyrion-lannister|Tyrion Lannister]] all’accampamento del padre, [[tywin-lannister|lord Tywin]], insieme ai Corvi di Pietra di [[shagga|Shagga]] e alle Orecchie Nere di [[chella|Chella]].',
        en: 'Timett son of Timett is the most feared of the Burned Men, the most unpredictable and savage of the clans of the Mountains of the Moon. In their rite of manhood the Burned Men burn off a finger or a nipple; Timett burned out an eye, and for this he is called the Red Hand. With his men he follows [[tyrion-lannister|Tyrion Lannister]] to the camp of his father, [[tywin-lannister|Lord Tywin]], along with [[shagga|Shagga]]’s Stone Crows and [[chella|Chella]]’s Black Ears.',
      },
    ),
    inBooks(
      [10, 70],
      { it: 'Alla Forca Verde', en: 'At the Green Fork' },
      {
        it: 'Timmet e i suoi Uomini Bruciati sono tra i clan che seguono [[tyrion-lannister|Tyrion Lannister]] nella battaglia della Forca Verde, al fianco dei Corvi di Pietra di [[shagga|Shagga]] e delle Orecchie Nere di [[chella|Chella]]. Gli uomini dei clan si battono bene, ma circa la metà di loro cade. Dopo la battaglia [[tywin-lannister|lord Tywin]] li lascerebbe liberi di saccheggiare, ma Tyrion preferisce tenerli con sé.',
        en: 'Timett and his Burned Men are among the clans who follow [[tyrion-lannister|Tyrion Lannister]] in the battle on the Green Fork, beside [[shagga|Shagga]]’s Stone Crows and [[chella|Chella]]’s Black Ears. The clansmen fight well, but about half of them fall. After the battle [[tywin-lannister|Lord Tywin]] would let them go plundering, but Tyrion prefers to keep them with him.',
      },
    ),
  ],
  'chella': [
    onScreen(
      [8, 57],
      { it: 'Le Orecchie Nere', en: 'The Black Ears' },
      {
        it: 'Chella guida le Orecchie Nere, una delle tribù delle colline. Quando [[tyrion-lannister|Tyrion Lannister]] promette ai clan armi e indipendenza dal Nido dell’Aquila, Chella si unisce a [[shagga|Shagga]] dei Corvi di Pietra e a [[timett|Timmet]] degli Uomini Bruciati e accompagna Tyrion e il mercenario [[bronn|Bronn]] all’accampamento dei Lannister. Lì il padre di Tyrion, [[tywin-lannister|Tywin]], accetta di rispettare il patto che il figlio ha stretto con loro.',
        en: 'Chella leads the Black Ears, one of the hill tribes. When [[tyrion-lannister|Tyrion Lannister]] promises the clans weapons and freedom from the Eyrie, Chella joins [[shagga|Shagga]] of the Stone Crows and [[timett|Timett]] of the Burned Men and goes with Tyrion and the sellsword [[bronn|Bronn]] to the Lannister camp. There Tyrion’s father, [[tywin-lannister|Tywin]], agrees to honour the bargain his son has made with them.',
      },
    ),
    inBooks(
      [8, 57],
      { it: 'La collana di orecchie', en: 'The necklace of ears' },
      {
        it: 'Chella guida le Orecchie Nere, il clan delle Montagne della Luna che prende le orecchie dei nemici sconfitti. È una donna piccola e scura, e porta una collana di quarantasei orecchie; dice che i suoi figli ne hanno prese cinquanta. Con le sue Orecchie Nere segue [[tyrion-lannister|Tyrion Lannister]] all’accampamento del padre, [[tywin-lannister|lord Tywin]], insieme ai Corvi di Pietra di [[shagga|Shagga]] e agli Uomini Bruciati di [[timett|Timmet]].',
        en: 'Chella leads the Black Ears, the clan of the Mountains of the Moon that takes the ears of defeated foes. She is a small dark woman, and she wears a necklace of forty-six ears; she boasts that her sons have taken fifty between them. With her Black Ears she follows [[tyrion-lannister|Tyrion Lannister]] to the camp of his father, [[tywin-lannister|Lord Tywin]], along with [[shagga|Shagga]]’s Stone Crows and [[timett|Timett]]’s Burned Men.',
      },
    ),
    inBooks(
      [10, 70],
      { it: 'Quattro orecchie', en: 'Four ears' },
      {
        it: 'Chella e le sue Orecchie Nere sono tra gli uomini dei clan che seguono [[tyrion-lannister|Tyrion Lannister]] nella battaglia della Forca Verde, con i Corvi di Pietra di [[shagga|Shagga]] e gli Uomini Bruciati di [[timett|Timmet]]. I clan si battono bene, anche se circa la metà di loro muore. Durante la battaglia Chella prende quattro orecchie.',
        en: 'Chella and her Black Ears are among the clansmen who follow [[tyrion-lannister|Tyrion Lannister]] in the battle on the Green Fork, with [[shagga|Shagga]]’s Stone Crows and [[timett|Timett]]’s Burned Men. The clans fight well, although about half of them die. During the battle Chella takes four ears for her necklace.',
      },
    ),
  ],
  // End of #1362.
} satisfies Record<string, Timeline<Story>>
