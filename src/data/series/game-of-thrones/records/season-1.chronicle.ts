import type { Story, Timeline } from '~/data/types'

import { inBooks, inBoth, onScreen } from './chronicle'

/**
 * Season 1 and *A Game of Thrones*: the stories of the Essos cast (#1360),
 * each filed at the first episode and the first site chapter by whose end the
 * reader knows all of it. The show and the books part over who wounds Drogo
 * and whose whip brings him down, and the wikis read do not name the book’s
 * bloodrider who breaks Viserys’s arm, so most stories come in two versions,
 * one per medium. A book-only story sits at the episode that adapts its
 * chapter, or later when a story links a character the show meets later;
 * Aggo’s are all at episode 11, the show’s gate for him.
 * Jaqen H’ghar opens at episode 12 and chapter 79, and Rorge and Biter, the
 * books’ alone, at chapter 79, past the stage; none has a chronicle yet.
 * Nor has Lommy, who opens at episode 31 and chapter 75 (#1457).
 *
 * The King’s Landing, riverlands and Vale cast follows (#1362), on the same
 * rules. Boros, Mandon, Dontos, Thoros, Yohn Royce, Podrick, Edmure, Hoster,
 * Brynden, Donnel and Anya open on screen after episode 10, so their stories
 * are the books’; Ros and Mhaegen are the show’s records, and Hot Pie opens
 * in the books at chapter 75, so his is the show’s.
 *
 * The Winterfell and northern cast (#1361) follows the same rules. Hullen,
 * Harwin, Alyn, Jeyne Poole, Hallis Mollen and Dacey Mormont are the books’
 * alone, and the Smalljon, Rickard Karstark, Roose Bolton, Robett Glover and
 * Wendel Manderly reach the show only after episode 10, so their stories are
 * the books’, filed at their show gates.
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
    onScreen(
      [11, 86],
      { it: 'Nel Deserto Rosso', en: 'Into the Red Waste' },
      {
        it: 'Daenerys guida verso est, nel Deserto Rosso, ciò che resta del suo khalasar, lontano dai rivali. [[jorah-mormont|Ser Jorah]] le dice che i suoi nemici la ucciderebbero per prenderle i draghi. I draghi rifiutano la carne cruda che lei offre loro, e la sua gente rischia di morire di fame. Quando muore la giumenta bianca che le aveva regalato Drogo, Daenerys ferma la marcia e manda [[rakharo|Rakharo]], [[aggo|Aggo]] e [[kovarro|Kovarro]] a esplorare in tre direzioni con gli ultimi cavalli.',
        en: 'Daenerys leads what is left of her khalasar east into the Red Waste, away from her rivals. [[jorah-mormont|Ser Jorah]] tells her that her enemies would kill her and take her dragons. The dragons refuse the raw meat she offers them, and her people face starvation. When the white mare Drogo gave her dies, she halts the march and sends [[rakharo|Rakharo]], [[aggo|Aggo]] and [[kovarro|Kovarro]] to scout in three directions on the last horses.',
      },
    ),
    onScreen(
      [12, 86],
      { it: 'La testa di Rakharo', en: 'Rakharo’s head' },
      {
        it: 'Nel Deserto Rosso il khalasar aspetta i cavalieri di sangue sotto il sole, e l’acqua scarseggia. Il cavallo di [[rakharo|Rakharo]] torna senza di lui. [[jorah-mormont|Ser Jorah]] trova nella bisaccia la testa di Rakharo e la sua treccia tagliata, e pensa che lo abbia ucciso un khalasar rivale. [[irri|Irri]] teme che, mutilato così, Rakharo non possa raggiungere l’aldilà dei dothraki. Daenerys promette di celebrare il suo funerale e di bruciarne il corpo, perché possa raggiungere i suoi antenati.',
        en: 'In the Red Waste the khalasar waits in the heat for the bloodriders, and the water runs low. [[rakharo|Rakharo]]’s horse comes back without him. [[jorah-mormont|Ser Jorah]] finds Rakharo’s head and his cut braid in the saddlebag, and thinks a rival khalasar killed him. [[irri|Irri]] fears that, mutilated, Rakharo cannot reach the Night Lands, the Dothraki land of the dead. Daenerys promises to hold his funeral and burn his body, so that he can join his ancestors.',
      },
    ),
    onScreen(
      [14, 101],
      { it: 'Alle porte di Qarth', en: 'At the gates of Qarth' },
      {
        it: '[[kovarro|Kovarro]] torna su un cavallo nuovo: i Tredici, che governano Qarth, hanno saputo dei draghi e invitano Daenerys in città. [[jorah-mormont|Ser Jorah]] la avverte che il deserto intorno a Qarth si chiama Giardino delle Ossa, per i viaggiatori che la città respinge. Alle porte i Tredici chiedono di vedere prima i draghi, e Daenerys rifiuta finché la sua gente non avrà cibo e riparo. Quando la respingono, giura di vendicarsi di Qarth con il fuoco e il sangue. Allora uno dei Tredici garantisce per lei con un giuramento di sangue, il Sumai, e la sua gente entra a Qarth.',
        en: '[[kovarro|Kovarro]] comes back on a new horse: the Thirteen, who rule Qarth, have heard of the dragons and invite Daenerys to the city. [[jorah-mormont|Ser Jorah]] warns her that the desert around Qarth is called the Garden of Bones, for the travelers the city turns away. At the gates the Thirteen ask to see her dragons first, and Daenerys refuses until her people are fed and sheltered. When they turn her away, she swears vengeance on Qarth with fire and blood. One of the Thirteen then vouches for her with a blood oath, the Sumai, and her people enter Qarth.',
      },
    ),
    onScreen(
      [15, 114],
      { it: 'Ospite di Xaro', en: 'Xaro’s guest' },
      {
        it: 'A Qarth Daenerys è ospite di [[xaro-xhoan-daxos|Xaro Xhoan Daxos]], e ormai i suoi draghi sputano fuoco al suo comando, “dracarys”. Chiede a [[doreah|Doreah]] di scoprire qualcosa su Xaro dagli uomini della città. A una festa nei giardini di Xaro uno stregone mostra i suoi trucchi e la invita alla Casa degli Eterni. Xaro le mostra la sua camera del tesoro e si offre di finanziare l’invasione del Westeros se lei lo sposerà, e le dà la notizia che re Robert è morto. [[jorah-mormont|Ser Jorah]] le consiglia di non indebitarsi con Xaro e di partire per il Westeros anche con una sola nave. Quando Jorah le lascia capire cosa prova per lei, Daenerys non ricambia.',
        en: 'In Qarth Daenerys is the guest of [[xaro-xhoan-daxos|Xaro Xhoan Daxos]], and her dragons now breathe fire on her command, “dracarys”. She asks [[doreah|Doreah]] to learn about Xaro from the men of the city. At a feast in Xaro’s gardens a warlock shows his tricks and invites her to the House of the Undying. Xaro shows her his vault and offers to pay for her invasion of Westeros if she marries him, and tells her that King Robert is dead. [[jorah-mormont|Ser Jorah]] advises her not to owe Xaro anything, and to sail for Westeros even with a single ship. When Jorah lets slip what he feels for her, she does not answer it.',
      },
    ),
    onScreen(
      [16, 114],
      { it: 'I draghi rubati', en: 'The stolen dragons' },
      {
        it: 'Daenerys chiede navi al Re delle Spezie per tornare nel Westeros, ma lui non vuole rischiarle per una regina senza esercito e senza alleati dichiarati. Quando torna con [[xaro-xhoan-daxos|Xaro]] nella dimora di lui, trova le guardie uccise, [[irri|Irri]] strangolata e i draghi spariti. Di [[doreah|Doreah]] non c’è traccia.',
        en: 'Daenerys asks the Spice King for ships to return to Westeros, but he will not risk them on a queen with no army and no open supporters there. When she comes back to [[xaro-xhoan-daxos|Xaro]]’s house with him, she finds her guards dead, [[irri|Irri]] strangled and her dragons gone. [[doreah|Doreah]] is missing.',
      },
    ),
    onScreen(
      [17, 114],
      { it: 'Il re di Qarth', en: 'The King of Qarth' },
      {
        it: 'Daenerys manda [[jorah-mormont|ser Jorah]] a cercare i draghi e, con la scorta di [[kovarro|Kovarro]], chiede aiuto ai Tredici riuniti nella dimora di [[xaro-xhoan-daxos|Xaro]]. Lo stregone conosciuto alla festa di Xaro confessa di aver preso lui i draghi e proclama Xaro re di Qarth. I doppi dello stregone tagliano la gola agli altri membri dei Tredici. Daenerys fugge con Jorah e Kovarro, e lo stregone le dice che troverà i draghi nella Casa degli Eterni.',
        en: 'Daenerys sends [[jorah-mormont|Ser Jorah]] to find her dragons and, guarded by [[kovarro|Kovarro]], appeals to the Thirteen gathered in [[xaro-xhoan-daxos|Xaro]]’s house. The warlock from Xaro’s feast admits that he took the dragons and proclaims Xaro King of Qarth. The warlock’s doubles cut the throats of the rest of the Thirteen. Daenerys flees with Jorah and Kovarro, and the warlock tells her she will find her dragons in the House of the Undying.',
      },
    ),
    onScreen(
      [18, 114],
      {
        it: 'Verso la Casa degli Eterni',
        en: 'Toward the House of the Undying',
      },
      {
        it: 'Dopo la strage dei Tredici, Daenerys si rifugia in un cortile abbandonato con [[jorah-mormont|ser Jorah]] e [[kovarro|Kovarro]]. Jorah le consiglia di lasciare i draghi e fuggire da Qarth: ha prenotato un passaggio per Astapor. Lei non vuole abbandonarli, anche se sa che può essere una trappola, e gli chiede di portarla alla Casa degli Eterni.',
        en: 'After the Thirteen are killed, Daenerys takes refuge in a disused courtyard with [[jorah-mormont|Ser Jorah]] and [[kovarro|Kovarro]]. Jorah advises her to leave her dragons and flee Qarth: he has booked passage to Astapor. She will not leave them, though she knows it may be a trap, and asks him to take her to the House of the Undying.',
      },
    ),
    onScreen(
      [20, 137],
      { it: 'Dracarys', en: 'Dracarys' },
      {
        it: 'Alla Casa degli Eterni Daenerys viene separata da [[jorah-mormont|ser Jorah]] e [[kovarro|Kovarro]]. Dentro vede la sala del trono di Approdo del Re in rovina sotto la neve, poi [[drogo|Drogo]] nella sua tenda con il figlio che lei ha perso. Trova i draghi incatenati, e lo stregone incatena anche lei: dice che sono loro a ridargli la magia. Daenerys pronuncia “dracarys” e i draghi lo bruciano. Tornata nella dimora di [[xaro-xhoan-daxos|Xaro]], lo trova a letto con [[doreah|Doreah]]. La camera del tesoro di Xaro si rivela vuota, e Daenerys li fa chiudere dentro entrambi. Con ciò che c’è nella casa di Xaro può comprare una nave.',
        en: 'At the House of the Undying Daenerys is parted from [[jorah-mormont|Ser Jorah]] and [[kovarro|Kovarro]]. Inside she sees the throne room of King’s Landing ruined under snow, then [[drogo|Drogo]] in his tent with the son she lost. She finds her dragons chained, and the warlock chains her too, saying they bring back his magic. She says “dracarys”, and the dragons burn him. Back at [[xaro-xhoan-daxos|Xaro]]’s house she finds him in bed with [[doreah|Doreah]]. His vault turns out to be empty, and she has the two of them locked inside it. With what Xaro’s house holds she can buy a ship.',
      },
    ),
    inBooks(
      [11, 86],
      { it: 'La cometa rossa', en: 'The red comet' },
      {
        it: 'Daenerys guida il suo piccolo khalasar dietro la cometa rossa, nel cuore del deserto rosso, perché gli altri khalasar la ucciderebbero o le prenderebbero i draghi. I draghi rifiutano la carne cruda finché lei non ricorda che solo gli uomini e i draghi mangiano la carne cotta. Li chiama Rhaegal, dal nome del fratello Rhaegar, Viserion, dal nome di Viserys, e Drogon, dal nome di [[drogo|Drogo]]. Molti dei suoi muoiono lungo la strada, e [[doreah|Doreah]] muore di febbre tenendole la mano. In una città morta trovano acqua e frutta, e [[jorah-mormont|ser Jorah]] le parla della sua seconda moglie, Lynesse Hightower. Daenerys capisce che lui la ama. Manda i cavalieri di sangue in esplorazione, e [[jhogo|Jhogo]] torna con tre stranieri venuti da Qarth per vedere i draghi.',
        en: 'Daenerys leads her small khalasar after the red comet, deep into the red waste, because the other khalasars would kill her or take her dragons. The dragons refuse raw meat until she remembers that only men and dragons eat their meat cooked. She names them Rhaegal, after her brother Rhaegar, Viserion, after Viserys, and Drogon, after [[drogo|Drogo]]. Many of her people die on the way, and [[doreah|Doreah]] dies of a fever, holding her hand. In a dead city they find water and fruit, and [[jorah-mormont|Ser Jorah]] tells her of his second wife, Lynesse Hightower. Daenerys realizes that he loves her. She sends her bloodriders to scout, and [[jhogo|Jhogo]] comes back with three strangers from Qarth who have come to see her dragons.',
      },
    ),
    inBooks(
      [15, 101],
      { it: 'L’arrivo a Qarth', en: 'Arrival in Qarth' },
      {
        it: 'Daenerys entra a Qarth con Drogon sulla spalla, oltre tre mura scolpite, e un principe mercante dei Tredici le cede un’intera ala del suo palazzo. A lui e a uno stregone dice che non vuole doni, ma navi e spade. Manda [[jorah-mormont|ser Jorah]] al porto a cercare notizie, e lui torna con il capitano di una nave delle Isole dell’Estate: re Robert è morto, sul trono siede Joffrey e i fratelli di Robert sono fuggiti. Daenerys dice che i Sette Regni vanno in pezzi come il khalasar alla morte di Drogo. Jorah le ricorda che le servono ancora oro, eserciti e navi, e lei risponde che i draghi muoiono, ma muoiono anche gli uccisori di draghi.',
        en: 'Daenerys enters Qarth with Drogon on her shoulder, through three carved walls, and a merchant prince of the Thirteen gives her a whole wing of his palace. She tells him and a warlock that she wants no gifts but ships and swords. She sends [[jorah-mormont|Ser Jorah]] to the docks for news, and he comes back with a Summer Islander captain: King Robert is dead, Joffrey sits the throne and Robert’s brothers have fled. Daenerys says that the Seven Kingdoms are flying apart as the khalasar did when Drogo died. Jorah reminds her that she still needs gold, armies and ships, and she answers that dragons die, but so do dragon-slayers.',
      },
    ),
    inBooks(
      [16, 114],
      { it: 'Niente navi a Qarth', en: 'No ships in Qarth' },
      {
        it: 'L’antica nobiltà di Qarth nega a Daenerys navi e uomini, anche se lei ha speso per ottenerli tutto il ricavato dei doni che ha venduto. [[xaro-xhoan-daxos|Xaro Xhoan Daxos]] non ha navi da guerra da darle, e le chiede di nuovo di sposarlo. Al mercato [[quaithe|Quaithe]] le dice che il potere del mago del fuoco è cresciuto grazie ai suoi draghi, e che deve lasciare presto la città, o non potrà lasciarla mai più, e andare ad Asshai. [[jorah-mormont|Ser Jorah]] la avverte che Xaro vuole sposarla per chiederle un drago come dono di nozze, e che il magistro [[illyrio-mopatis|Illyrio]] non la aiuterebbe. Le consiglia di chiedere aiuto allo stregone [[pyat-pree|Pyat Pree]].',
        en: 'The Pureborn of Qarth refuse Daenerys ships and men, though she has spent on them everything her gifts fetched. [[xaro-xhoan-daxos|Xaro Xhoan Daxos]] has no warships to give her, and asks her again to marry him. In the bazaar [[quaithe|Quaithe]] tells her that the firemage’s power has grown because of her dragons, and that she must leave the city soon or never leave it, and go to Asshai. [[jorah-mormont|Ser Jorah]] warns her that Xaro wants to marry her to claim a dragon as his wedding gift, and that Magister [[illyrio-mopatis|Illyrio]] would not help her. He urges her to ask the warlock [[pyat-pree|Pyat Pree]] for help.',
      },
    ),
    inBooks(
      [20, 122],
      { it: 'La Casa degli Eterni', en: 'The House of the Undying' },
      {
        it: 'Daenerys entra da sola nella Casa degli Eterni, con Drogon. [[pyat-pree|Pyat Pree]] le dice di prendere sempre la porta a destra, di salire soltanto e di non entrare in nessuna stanza. Lei vede visioni del passato e di giorni che verranno. Gli Eterni le parlano nella testa di tre fuochi, tre cavalcature e tre tradimenti, poi cercano di divorarla, finché Drogon non fa a pezzi il loro cuore. Daenerys fugge dalla casa in fiamme. Fuori Pyat Pree la aggredisce con un pugnale: la frusta di [[jhogo|Jhogo]] gli fa volare via la lama e [[rakharo|Rakharo]] lo butta a terra. [[jorah-mormont|Ser Jorah]] la stringe a sé.',
        en: 'Daenerys enters the House of the Undying alone, with Drogon. [[pyat-pree|Pyat Pree]] tells her always to take the door on her right, to climb only, and to enter no room. She sees visions of the past and of days to come. The Undying speak in her head of three fires, three mounts and three treasons, then try to consume her, until Drogon tears their heart to pieces. She flees the burning house. Outside Pyat Pree attacks her with a dagger: [[jhogo|Jhogo]]’s whip knocks the knife aside and [[rakharo|Rakharo]] strikes him to the ground. [[jorah-mormont|Ser Jorah]] holds her.',
      },
    ),
    inBooks(
      [20, 137],
      { it: 'La manticora', en: 'The manticore' },
      {
        it: '[[xaro-xhoan-daxos|Xaro]] avverte Daenerys che gli stregoni la vogliono morta e che due delle grandi gilde mercantili della città la vogliono cacciata o uccisa. Lei rifiuta ancora di sposarlo, e rifiuta anche dieci navi in cambio di un drago. Al porto un mercante le regala uno scrigno con dentro una manticora. Un vecchio glielo fa cadere dalle mani: è [[arstan-whitebeard|Arstan Barbabianca]], scudiero dell’eunuco [[strong-belwas|Belwas il Forte]]. I due dicono che il magistro [[illyrio-mopatis|Illyrio]] li ha mandati con tre navi per riportarla a Pentos. Daenerys accetta di lasciare Qarth, e ordina di dare alle navi i nomi di Balerion, Meraxes e Vhagar.',
        en: '[[xaro-xhoan-daxos|Xaro]] warns Daenerys that the warlocks want her dead and that two of the city’s great merchant guilds want her expelled or killed. She refuses again to marry him, and refuses ten ships for one of her dragons. At the docks a merchant hands her a box with a manticore inside. An old man knocks it out of her hands: he is [[arstan-whitebeard|Arstan Whitebeard]], squire to the eunuch [[strong-belwas|Strong Belwas]]. The two say Magister [[illyrio-mopatis|Illyrio]] has sent them with three ships to bring her back to Pentos. Daenerys agrees to leave Qarth, and orders the ships renamed Balerion, Meraxes and Vhagar.',
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
    onScreen(
      [12, 86],
      { it: 'Una testa nella bisaccia', en: 'A head in the saddlebag' },
      {
        it: 'Nel Deserto Rosso Jorah ricorda a [[daenerys-targaryen|Daenerys]] che tornare in Lhazar o nel Mare Dothraki le costerebbe la vita e i draghi, e che deve restare forte per la sua gente. Quando il cavallo di [[rakharo|Rakharo]] torna senza cavaliere, Jorah apre la bisaccia gocciolante di sangue e trova la testa e la treccia tagliata di Rakharo. Dice a Daenerys di non guardare, e pensa che a ucciderlo siano stati khal Pono o khal Jhaqo, che non accettano una donna alla guida di un khalasar.',
        en: 'In the Red Waste Jorah reminds [[daenerys-targaryen|Daenerys]] that going back to Lhazar or the Dothraki Sea would cost her her life and her dragons, and that she must stay strong for her people. When [[rakharo|Rakharo]]’s horse comes back riderless, Jorah opens the bloody saddlebag and finds Rakharo’s head and cut braid. He tells Daenerys not to look, and thinks Khal Pono or Khal Jhaqo killed him, men who will not have a woman lead a khalasar.',
      },
    ),
    onScreen(
      [15, 114],
      { it: 'Una sola nave', en: 'A single ship' },
      {
        it: 'Alla festa di [[xaro-xhoan-daxos|Xaro]] Jorah impedisce ai dothraki di derubare il padrone di casa. Una donna mascherata lo avverte che Daenerys deve essere protetta da chi brama i suoi draghi. Quando Xaro si offre di finanziare la guerra di [[daenerys-targaryen|Daenerys]] in cambio delle nozze, Jorah le sconsiglia di indebitarsi con lui: i lord direbbero che la conquista è di Xaro. Le dice che potrebbe vincere il trono anche con una sola nave, e le lascia capire cosa prova per lei. Daenerys segue il suo consiglio, ma non ricambia.',
        en: 'At [[xaro-xhoan-daxos|Xaro]]’s feast Jorah stops the Dothraki from stealing from their host. A masked woman warns him that Daenerys needs protection from those who covet her dragons. When Xaro offers to pay for [[daenerys-targaryen|Daenerys]]’s war if she marries him, Jorah advises her against owing him: the lords would call it Xaro’s conquest. He tells her she could win her throne with a single ship, and lets slip what he feels for her. She takes his advice, but does not return his feelings.',
      },
    ),
    onScreen(
      [17, 114],
      { it: 'Il ladro accanto a lei', en: 'The thief beside her' },
      {
        it: 'Mentre Jorah è via a cercare una nave, i draghi di [[daenerys-targaryen|Daenerys]] vengono rubati, e lei lo manda a ritrovarli. La donna mascherata gli dice di sapere che un tempo lui spiava Daenerys, e che il ladro è già con lei. Jorah raggiunge Daenerys davanti ai Tredici mentre lo stregone confessa il furto e proclama re [[xaro-xhoan-daxos|Xaro]], e trafigge uno dei doppi dello stregone mentre la porta via con [[kovarro|Kovarro]].',
        en: 'While Jorah is away looking for a ship, [[daenerys-targaryen|Daenerys]]’s dragons are stolen, and she sends him to find them. The masked woman tells him she knows he once spied on Daenerys, and that the thief is already with her. Jorah reaches Daenerys before the Thirteen as the warlock admits the theft and proclaims [[xaro-xhoan-daxos|Xaro]] king, and he stabs one of the warlock’s doubles as he leads her away with [[kovarro|Kovarro]].',
      },
    ),
    onScreen(
      [20, 137],
      { it: 'L’oro di Xaro', en: 'Xaro’s gold' },
      {
        it: 'Jorah consiglia a [[daenerys-targaryen|Daenerys]] di lasciare i draghi e fuggire da Qarth, con un passaggio già prenotato per Astapor, ma lei si fa portare alla Casa degli Eterni. Lì Jorah la perde e la chiama a gran voce da fuori. Quando Daenerys torna con i draghi, trovano [[xaro-xhoan-daxos|Xaro]] a letto con [[doreah|Doreah]] e li chiudono entrambi nella camera del tesoro vuota di Xaro. Jorah dice a Daenerys che l’oro e i gioielli di Xaro sono abbastanza veri da comprare una nave, e ordina ai dothraki di prenderli.',
        en: 'Jorah urges [[daenerys-targaryen|Daenerys]] to leave her dragons and flee Qarth, with passage booked to Astapor, but she has him lead her to the House of the Undying. There he loses her, and calls for her outside. Once she is back with her dragons, they find [[xaro-xhoan-daxos|Xaro]] in bed with [[doreah|Doreah]] and lock the two in Xaro’s empty vault. Jorah tells her that Xaro’s gold and jewels are real enough to buy a ship, and orders the Dothraki to take them.',
      },
    ),
    inBooks(
      [11, 86],
      { it: 'Lynesse', en: 'Lynesse' },
      {
        it: 'Jorah dice a [[daenerys-targaryen|Daenerys]] che lei non vivrà a lungo se non andrà dove nessun altro va, e la segue nel deserto rosso anche se la ferita che gli ha inferto Qotho non è guarita. Nella città morta le porta una pesca e le parla della sua seconda moglie, Lynesse Hightower: l’ha conquistata a un torneo, si è rovinato per accontentarla ed è fuggito con lei a Lys, dove lei lo ha lasciato per un principe mercante. Le dice che Lynesse le somigliava un po’. Daenerys gli cura la ferita finché non comincia a guarire.',
        en: 'Jorah tells [[daenerys-targaryen|Daenerys]] that she will not live long unless she goes where no one else does, and follows her into the red waste, though the wound Qotho gave him has not healed. In the dead city he brings her a peach and tells her of his second wife, Lynesse Hightower: he won her at a tourney, ruined himself to please her and fled with her to Lys, where she left him for a merchant prince. He tells Daenerys that Lynesse looked a little like her. Daenerys tends his wound until it starts to heal.',
      },
    ),
    inBooks(
      [15, 101],
      { it: 'Notizie dal porto', en: 'News from the docks' },
      {
        it: 'A Qarth Jorah consiglia a [[daenerys-targaryen|Daenerys]] di non fidarsi né del principe mercante né dello stregone che l’hanno accompagnata in città. Lei lo manda al porto, e Jorah torna con un capitano che le annuncia la morte di re Robert. Jorah dubita che Eddard Stark lo abbia tradito, e le ricorda che le servono ancora oro, eserciti e navi, e che Robert ha ucciso un drago con un martello da guerra.',
        en: 'In Qarth Jorah tells [[daenerys-targaryen|Daenerys]] to trust neither the merchant prince nor the warlock who brought her to the city. She sends him to the docks, and he comes back with a captain who tells her that King Robert is dead. Jorah doubts that Eddard Stark betrayed the king, and reminds her that she still needs gold, armies and ships, and that Robert killed a dragon with a warhammer.',
      },
    ),
    inBooks(
      [16, 114],
      { it: 'Il dono di nozze', en: 'The wedding gift' },
      {
        it: 'Jorah dice a [[daenerys-targaryen|Daenerys]] che a Qarth non troverà aiuto. Alle nozze dei qarthiani ognuno dei due sposi può chiedere all’altro un dono che non si può rifiutare, e Jorah è certo che [[xaro-xhoan-daxos|Xaro]] chiederebbe un drago. La avverte che il magistro [[illyrio-mopatis|Illyrio]] pensa solo a sé stesso, e le ricorda che Robert ha già mandato un uomo a ucciderla. Le consiglia di chiedere aiuto allo stregone [[pyat-pree|Pyat Pree]].',
        en: 'Jorah tells [[daenerys-targaryen|Daenerys]] that she will find no help in Qarth. At a Qartheen wedding each spouse may ask the other for one gift that cannot be refused, and he is sure [[xaro-xhoan-daxos|Xaro]] would ask for a dragon. He warns her that Magister [[illyrio-mopatis|Illyrio]] cares only for himself, and reminds her that Robert once sent a man to kill her. He urges her to go to the warlock [[pyat-pree|Pyat Pree]] for help.',
      },
    ),
    inBooks(
      [20, 137],
      { it: 'Seguiti al porto', en: 'Followed at the docks' },
      {
        it: 'Dopo la Casa degli Eterni, Jorah consola [[daenerys-targaryen|Daenerys]], poi la accompagna al porto di Qarth a cercare una nave, rispondendo come può alle sue domande sulle visioni. Al porto la avverte che un uomo enorme e sfregiato e un vecchio con un bastone li stanno seguendo. Il vecchio la salva da una manticora e si presenta come [[arstan-whitebeard|Arstan Barbabianca]], scudiero di [[strong-belwas|Belwas il Forte]], mandato dal magistro [[illyrio-mopatis|Illyrio]].',
        en: 'After the House of the Undying, Jorah comforts [[daenerys-targaryen|Daenerys]], then goes with her to the port of Qarth to find a ship, answering her questions about the visions as best he can. At the docks he warns her that a huge scarred man and an old man with a staff are following them. The old man saves her from a manticore and names himself [[arstan-whitebeard|Arstan Whitebeard]], squire to [[strong-belwas|Strong Belwas]], sent by Magister [[illyrio-mopatis|Illyrio]].',
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
    onScreen(
      [12, 86],
      { it: 'Il lutto per Rakharo', en: 'Mourning Rakharo' },
      {
        it: 'Nel Deserto Rosso, mentre il khalasar aspetta i cavalieri di sangue, il cavallo di [[rakharo|Rakharo]] torna con la sua testa nella bisaccia. Irri è distrutta: crede che, se il corpo di Rakharo non verrà bruciato, lui non potrà raggiungere i suoi antenati nell’aldilà. [[daenerys-targaryen|Daenerys]] la consola e promette un funerale per Rakharo.',
        en: 'In the Red Waste, while the khalasar waits for the bloodriders, [[rakharo|Rakharo]]’s horse comes back with his head in the saddlebag. Irri is devastated: unless his body is burned, she believes, he cannot reach the Night Lands to ride with his ancestors. [[daenerys-targaryen|Daenerys]] comforts her and promises Rakharo a funeral.',
      },
    ),
    onScreen(
      [16, 114],
      { it: 'Nella dimora di Xaro', en: 'In Xaro’s house' },
      {
        it: 'A Qarth Irri ricuce i vestiti di [[daenerys-targaryen|Daenerys]], che la chiama amica. Quando [[doreah|Doreah]] chiama Daenerys principessa, Irri la corregge: è una khaleesi. Poi convince Daenerys a indossare l’abito fatto per lei da [[xaro-xhoan-daxos|Xaro]], per cortesia verso il padrone di casa. Mentre Daenerys è fuori a chiedere navi, Irri viene strangolata nella dimora di Xaro, e Daenerys la trova morta.',
        en: 'In Qarth Irri mends [[daenerys-targaryen|Daenerys]]’s clothes, and Daenerys calls her a friend. When [[doreah|Doreah]] calls Daenerys a princess, Irri corrects her: she is a khaleesi. She then urges Daenerys to wear the gown [[xaro-xhoan-daxos|Xaro]] had made for her, as a courtesy to their host. While Daenerys is out asking for ships, Irri is strangled in Xaro’s house, and Daenerys finds her dead.',
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
    inBooks(
      [11, 86],
      { it: 'La febbre', en: 'The fever' },
      {
        it: 'Doreah avverte [[daenerys-targaryen|Daenerys]] che dietro la cometa rossa ci sono solo terre rosse e desolate, poi la segue nel deserto. È malata da tempo, e durante la marcia le viene la febbre e diventa troppo debole per salire a cavallo. Daenerys ferma il khalasar e resta con lei, tenendole la mano finché Doreah non muore.',
        en: 'Doreah warns [[daenerys-targaryen|Daenerys]] that only grim red lands lie the way the red comet points, then follows her into the waste. She has been ill for some time, and on the march she falls into a fever and grows too weak to mount her horse. Daenerys halts the khalasar and sits with her, holding her hand until she dies.',
      },
    ),
    onScreen(
      [15, 114],
      { it: 'Gli uomini di Qarth', en: 'The men of Qarth' },
      {
        it: 'Nella dimora di [[xaro-xhoan-daxos|Xaro]] Doreah guarda [[daenerys-targaryen|Daenerys]] insegnare ai draghi a cuocersi la carne con il fuoco, e Daenerys le dice che uno di loro le vuole bene. Doreah dice che Xaro è l’uomo più ricco di Qarth. Daenerys le chiede di sedurre gli uomini della città per scoprire cosa sanno del padrone di casa, e alla festa di Xaro Doreah conquista diversi ospiti.',
        en: 'In [[xaro-xhoan-daxos|Xaro]]’s house Doreah watches [[daenerys-targaryen|Daenerys]] teach her dragons to cook their meat with fire, and Daenerys tells her one of them loves her. Doreah says that Xaro is the richest man in Qarth. Daenerys asks her to seduce men of the city and learn what they know of their host, and at Xaro’s feast Doreah charms several of the guests.',
      },
    ),
    onScreen(
      [20, 137],
      { it: 'Nella camera del tesoro', en: 'In the vault' },
      {
        it: 'Quando i draghi di [[daenerys-targaryen|Daenerys]] vengono rubati, Doreah è sparita, e Daenerys la crede morta. Dopo la Casa degli Eterni, Daenerys la trova addormentata nel letto di [[xaro-xhoan-daxos|Xaro]]: Doreah l’ha tradita. Doreah implora pietà, ma Daenerys la fa chiudere con Xaro nella camera del tesoro vuota di lui, e li lascia lì a morire.',
        en: 'When [[daenerys-targaryen|Daenerys]]’s dragons are stolen, Doreah is missing, and Daenerys believes her dead. After the House of the Undying, Daenerys finds her asleep in [[xaro-xhoan-daxos|Xaro]]’s bed: Doreah has betrayed her. She begs for her life, but Daenerys has her locked with Xaro in his empty vault, and leaves them there to die.',
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
    onScreen(
      [11, 86],
      { it: 'Un brutto momento per cominciare', en: 'A bad time to start' },
      {
        it: 'Nel Deserto Rosso [[daenerys-targaryen|Daenerys]] manda Rakharo, ora suo cavaliere di sangue, in esplorazione verso nord-est con uno degli ultimi cavalli. Lo saluta di persona e gli dice che non l’ha mai delusa, e Rakharo risponde che sarebbe un brutto momento per cominciare.',
        en: 'In the Red Waste [[daenerys-targaryen|Daenerys]] sends Rakharo, now her bloodrider, to scout to the northeast on one of the last horses. She says goodbye to him herself and tells him he has never failed her, and he answers that this would be a bad time to start.',
      },
    ),
    onScreen(
      [12, 86],
      { it: 'Il cavallo senza cavaliere', en: 'The riderless horse' },
      {
        it: 'Il cavallo di Rakharo torna al khalasar senza di lui, dipinto per la guerra. Nella bisaccia [[jorah-mormont|ser Jorah]] trova la testa e la treccia tagliata di Rakharo, e pensa che lo abbia ucciso un khalasar rivale. [[irri|Irri]] teme che lo spirito di Rakharo non possa raggiungere l’aldilà, e [[daenerys-targaryen|Daenerys]] promette per lui un funerale.',
        en: 'Rakharo’s horse comes back to the khalasar without him, painted for war. In the saddlebag [[jorah-mormont|Ser Jorah]] finds Rakharo’s head and cut braid, and thinks a rival khalasar killed him. [[irri|Irri]] fears that his spirit cannot reach the Night Lands, and [[daenerys-targaryen|Daenerys]] promises him a funeral.',
      },
    ),
    inBooks(
      [11, 86],
      { it: 'Fino al mare', en: 'As far as the sea' },
      {
        it: 'Nel deserto rosso Rakharo esplora una città morta con [[aggo|Aggo]] e [[jhogo|Jhogo]], e [[daenerys-targaryen|Daenerys]] vi conduce il khalasar. Poi li manda di nuovo in esplorazione, ognuno con tre cavalli. Rakharo torna per primo: il deserto si stende a sud fino al mare. Daenerys gli affida il compito di divellere il lastricato della piazza, perché cresca più erba per i cavalli.',
        en: 'In the red waste Rakharo scouts a dead city with [[aggo|Aggo]] and [[jhogo|Jhogo]], and [[daenerys-targaryen|Daenerys]] leads the khalasar into it. She then sends each of them out again with three horses. Rakharo comes back first: the waste stretches south all the way to the sea. Daenerys puts him in charge of pulling up the plaza, so that more grass can grow for the horses.',
      },
    ),
    inBooks(
      [20, 122],
      { it: 'Lo stregone a terra', en: 'The warlock on the ground' },
      {
        it: 'Rakharo aspetta fuori dalla Casa degli Eterni con [[jorah-mormont|ser Jorah]] e gli altri cavalieri di sangue, mentre [[daenerys-targaryen|Daenerys]] entra da sola. Quando lei fugge dalla casa in fiamme, [[pyat-pree|Pyat Pree]] la aggredisce con un pugnale. La frusta di [[jhogo|Jhogo]] fa volare via la lama, e Rakharo butta a terra lo stregone.',
        en: 'Rakharo waits outside the House of the Undying with [[jorah-mormont|Ser Jorah]] and the other bloodriders, while [[daenerys-targaryen|Daenerys]] goes in alone. When she flees the burning house, [[pyat-pree|Pyat Pree]] attacks her with a dagger. [[jhogo|Jhogo]]’s whip knocks the knife aside, and Rakharo strikes the warlock to the ground.',
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
    inBooks(
      [11, 86],
      { it: 'Posti infestati', en: 'Haunted places' },
      {
        it: 'Nel deserto rosso Jhiqui e [[irri|Irri]] portano due dei draghi di [[daenerys-targaryen|Daenerys]] in una gabbia appesa tra i loro cavalli. Quando i cavalieri di sangue trovano una città morta, Jhiqui insiste che posti così sono infestati dai fantasmi ed è meglio evitarli, ma Daenerys vi conduce il khalasar.',
        en: 'In the red waste Jhiqui and [[irri|Irri]] carry two of [[daenerys-targaryen|Daenerys]]’s dragons in a cage slung between their horses. When the bloodriders find a dead city, Jhiqui insists that such places are haunted by ghosts and best avoided, but Daenerys leads the khalasar inside.',
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
    onScreen(
      [11, 86],
      { it: 'Uno dei tre cavalieri', en: 'One of three riders' },
      {
        it: 'Aggo è uno dei dothraki rimasti fedeli a [[daenerys-targaryen|Daenerys]] quando il khalasar di Drogo si disperde. Nel Deserto Rosso, con la sua gente alla fame, Daenerys manda lui, [[rakharo|Rakharo]] e [[kovarro|Kovarro]] a esplorare in tre direzioni con gli ultimi cavalli, Aggo verso sud-est.',
        en: 'Aggo is one of the Dothraki who stay loyal to [[daenerys-targaryen|Daenerys]] when Drogo’s khalasar breaks apart. In the Red Waste, with her people starving, she sends him, [[rakharo|Rakharo]] and [[kovarro|Kovarro]] to scout in three directions on the last horses, Aggo to the southeast.',
      },
    ),
    inBooks(
      [11, 86],
      { it: 'Balerion rinato', en: 'Balerion reborn' },
      {
        it: 'Durante la marcia nel deserto rosso Aggo dice che il drago nero di [[daenerys-targaryen|Daenerys]] è Balerion rinato. Esplora una città morta con [[rakharo|Rakharo]] e [[jhogo|Jhogo]], poi riparte con tre cavalli e trova solo due città deserte più piccole. Daenerys gli affida la riparazione delle porte della città.',
        en: 'On the march through the red waste Aggo says that [[daenerys-targaryen|Daenerys]]’s black dragon is Balerion reborn. He scouts a dead city with [[rakharo|Rakharo]] and [[jhogo|Jhogo]], then rides out again with three horses and finds only two smaller deserted cities. Daenerys sets him to repairing the city gates.',
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
    inBooks(
      [11, 86],
      { it: 'Tre stranieri da Qarth', en: 'Three strangers from Qarth' },
      {
        it: 'Nel deserto rosso Jhogo esplora una città morta con [[aggo|Aggo]] e [[rakharo|Rakharo]]. Poi [[daenerys-targaryen|Daenerys]] lo manda in esplorazione con tre cavalli, e Jhogo torna per ultimo, molto dopo gli altri: porta con sé tre stranieri della grande città di Qarth, venuti in cerca di draghi.',
        en: 'In the red waste Jhogo scouts a dead city with [[aggo|Aggo]] and [[rakharo|Rakharo]]. [[daenerys-targaryen|Daenerys]] then sends him out with three horses, and he is the last to return, long after the others: he brings three strangers from the great city of Qarth, who have come seeking dragons.',
      },
    ),
    inBooks(
      [20, 122],
      { it: 'La frusta contro il pugnale', en: 'Whip against dagger' },
      {
        it: 'Jhogo è tra quelli che, con [[jorah-mormont|ser Jorah]], [[aggo|Aggo]] e [[xaro-xhoan-daxos|Xaro]], chiedono a [[daenerys-targaryen|Daenerys]] di non entrare nella Casa degli Eterni, ma lei entra. Quando fugge dalla casa in fiamme e [[pyat-pree|Pyat Pree]] la aggredisce con un pugnale, Drogon distrae lo stregone, la frusta di Jhogo gli fa volare via la lama e [[rakharo|Rakharo]] lo butta a terra.',
        en: 'Jhogo is among those, with [[jorah-mormont|Ser Jorah]], [[aggo|Aggo]] and [[xaro-xhoan-daxos|Xaro]], who urge [[daenerys-targaryen|Daenerys]] to turn back from the House of the Undying, but she goes in. When she flees the burning house and [[pyat-pree|Pyat Pree]] attacks her with a dagger, Drogon distracts the warlock, Jhogo’s whip knocks the knife aside and [[rakharo|Rakharo]] strikes him to the ground.',
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
        it: 'Jon, il figlio bastardo di lord [[eddard-stark|Eddard Stark]], cavalca con il padre, i fratelli [[robb-stark|Robb]] e [[bran-stark|Bran]] e il pupillo [[theon-greyjoy|Theon Greyjoy]] per assistere alla decapitazione di un disertore dei Guardiani della notte. Jon dice a Bran di non distogliere lo sguardo. Quando Theon allontana la testa con un calcio, Jon dà dell’idiota a Theon sottovoce. Sulla via del ritorno Jon e Robb trovano una meta-lupa morta con i suoi cuccioli. Jon fa notare che sono cinque, uno per ciascuno dei figli legittimi di Eddard, e il padre li risparmia. Poi Jon trova un sesto cucciolo, albino e con gli occhi rossi, e lo tiene per sé.',
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
    onScreen(
      [2, 11],
      { it: 'Sei uno Stark', en: 'You are a Stark' },
      {
        it: 'Prima di lasciare Grande Inverno per i Guardiani della notte, Jon regala ad [[arya-stark|Arya]] una spada sottile fatta apposta per lei e le dice di colpire con la punta. Bacia [[bran-stark|Bran]], ancora privo di sensi, e se ne va su fredda richiesta di [[catelyn-stark|Catelyn]]. Jon e [[robb-stark|Robb]] si abbracciano e sperano di rivedersi presto. Prima di separarsi, [[eddard-stark|Eddard]] dice a Jon che è uno Stark: non porta il suo nome, ma ha il suo sangue. Gli promette che la prossima volta che si vedranno gli parlerà della madre di Jon. Jon parte verso nord con lo zio [[benjen-stark|Benjen]] e [[tyrion-lannister|Tyrion Lannister]].',
        en: 'Before Jon leaves Winterfell for the Night’s Watch, he gives [[arya-stark|Arya]] a slim sword made for her and tells her to strike with the point. He kisses the unconscious [[bran-stark|Bran]] goodbye and leaves at the cold request of [[catelyn-stark|Catelyn]]. He and [[robb-stark|Robb]] embrace and hope to meet again soon. Before they part, [[eddard-stark|Eddard]] tells Jon that he is a Stark: he may not have his name, but he has his blood. He promises that the next time they meet he will tell Jon about his mother. Jon rides north with his uncle [[benjen-stark|Benjen]] and [[tyrion-lannister|Tyrion Lannister]].',
      },
    ),
    inBooks(
      [2, 11],
      { it: 'Gli addii a Grande Inverno', en: 'Farewells at Winterfell' },
      {
        it: 'Jon sta per lasciare Grande Inverno per unirsi ai Guardiani della notte con lo zio [[benjen-stark|Benjen]]. Prima di partire saluta [[bran-stark|Bran]], che giace privo di sensi dopo la caduta, e al suo capezzale trova [[catelyn-stark|Catelyn]], che non lo vuole lì. Abbraccia [[robb-stark|Robb]], e i due sperano di rivedersi presto. Ad [[arya-stark|Arya]] regala una spada sottile fatta apposta per lei, con la prima lezione: si colpisce con la punta. Poi parte verso nord.',
        en: 'Jon is leaving Winterfell to join the Night’s Watch with his uncle [[benjen-stark|Benjen]]. Before he goes, he says goodbye to [[bran-stark|Bran]], who lies unconscious after his fall, and finds [[catelyn-stark|Catelyn]] at the bedside. She does not want him there. He embraces [[robb-stark|Robb]], and the two hope to meet again soon. He gives [[arya-stark|Arya]] a slim sword made for her, with her first lesson: strike with the point. Then he rides north.',
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
        it: 'A Castello Nero Jon batte facilmente [[grenn|Grenn]] nel cortile, e ser [[alliser-thorne|Alliser Thorne]] lo deride lo stesso. Lo zio [[benjen-stark|Benjen]] è partito in perlustrazione senza di lui. Nell’armeria Grenn, Todder e i due stupratori arrivati al nord con Jon lo affrontano, e scoppia una rissa. L’armaiolo [[donal-noye|Donal Noye]] li separa e spiega a Jon che Jon ha avuto un maestro d’armi per tutta la vita, mentre gli altri no. Jon capisce di averli umiliati. Il lord comandante [[jeor-mormont|Mormont]] comunica a Jon che [[bran-stark|Bran]] si è svegliato, e Jon si offre di aiutare Grenn a migliorare. Una battuta su ser Alliser fa del maestro d’armi un suo nemico.',
        en: 'At Castle Black, Jon easily beats [[grenn|Grenn]] in the yard, and Ser [[alliser-thorne|Alliser Thorne]] still mocks him. His uncle [[benjen-stark|Benjen]] has left on a ranging without him. In the armory Grenn, Todder and the two rapers who rode north with Jon confront him, and a fight breaks out. The armorer [[donal-noye|Donal Noye]] breaks it up and tells Jon that he has had a master-at-arms all his life and the others never did. Jon sees that he has been shaming them. Lord Commander [[jeor-mormont|Mormont]] tells him that [[bran-stark|Bran]] has woken, and Jon offers to help Grenn improve. A joke at Ser Alliser’s expense makes the master-at-arms his enemy.',
      },
    ),
    inBoth(
      [4, 27],
      { it: 'Il protettore di Sam', en: 'Sam’s protector' },
      {
        it: 'Una nuova recluta, [[samwell-tarly|Samwell Tarly]], arriva a Castello Nero: è grasso e non sa combattere. Ser [[alliser-thorne|Alliser Thorne]] aizza contro Sam gli altri, e Jon si mette in mezzo. Sam ammette di essere un codardo. Sam racconta a Jon che il proprio padre lo ha costretto a prendere il nero, minacciando di farlo morire in un incidente di caccia se avesse rifiutato. Jon convince le reclute ad andarci piano con Sam. Solo [[rast|Rast]] rifiuta, finché Jon, [[grenn|Grenn]] e [[pypar|Pyp]] non vanno da lui di notte con [[ghost-direwolf|Spettro]].',
        en: 'A new recruit, [[samwell-tarly|Samwell Tarly]], arrives at Castle Black, fat and unable to fight. Ser [[alliser-thorne|Alliser Thorne]] sets the others on him, and Jon puts himself in their way. Sam admits that he is a coward. Sam tells Jon that his father made him take the black, threatening to have him killed in a hunting accident if he refused. Jon persuades the recruits to go easy on Sam. Only [[rast|Rast]] refuses, until Jon, [[grenn|Grenn]] and [[pypar|Pyp]] visit him at night with [[ghost-direwolf|Ghost]].',
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
        it: 'Il gruppo riporta da oltre la Barriera i corpi di [[othor|Othor]] e [[jafer-flowers|Jafer Flowers]], due ranger di [[benjen-stark|Benjen]]. Alcuni confratelli vogliono bruciarli, ma il lord comandante [[jeor-mormont|Mormont]] vuole che li esamini maestro [[aemon|Aemon]]. Mormont comunica a Jon che il padre di Jon, [[eddard-stark|Eddard Stark]], è stato arrestato per tradimento, e lo avverte di non fare sciocchezze. Quando ser [[alliser-thorne|Alliser Thorne]] chiama Jon bastardo di un traditore, Jon gli si scaglia contro con un coltello, e gli amici di Jon lo trattengono. Quella notte [[ghost-direwolf|Spettro]] sveglia Jon, che nelle stanze del lord comandante trova il cadavere di Othor rianimato. Jon lo distrugge con il fuoco.',
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
        it: 'Jeor Mormont accoglie nei Guardiani della notte il gruppo di reclute di [[jon-snow|Jon Snow]] e assegna gli incarichi. Jon, il migliore combattente del gruppo, spera di diventare ranger, ma Jeor lo destina agli attendenti, come suo attendente personale. Jon la prende come un affronto. L’amico [[samwell-tarly|Samwell Tarly]] fa notare a Jon che forse Jeor vuole prepararlo al comando, e Jon e Sam pronunciano il giuramento davanti a un albero del cuore oltre la Barriera.',
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
        it: 'Jeor dona a [[jon-snow|Jon Snow]] Lungo Artiglio, una spada bastarda d’acciaio di Valyria che appartiene alla casa Mormont da cinque secoli. La spada è rimasta danneggiata nell’incendio della torre di Jeor, che ne ha fatto rifare il pomolo a forma di testa di lupo bianco. Jon cerca di rifiutarla, ma Jeor gli dice che se l’è guadagnata pensando di usare il fuoco contro il morto. Jeor ha mandato ser [[alliser-thorne|Alliser Thorne]] ad Approdo del Re con la mano di uno dei morti, e così fra Alliser e Jon ci sono mille leghe.',
        en: 'Jeor gives [[jon-snow|Jon Snow]] Longclaw, a Valyrian steel bastard sword that has belonged to House Mormont for five centuries. It was damaged in the fire in Jeor’s tower, and Jeor has had a new pommel made in the likeness of a white wolf’s head. Jon tries to refuse it, but Jeor says he earned it by thinking to use fire against the dead man. Jeor has sent Ser [[alliser-thorne|Alliser Thorne]] to King’s Landing with the hand of one of the dead men, which also puts a thousand leagues between Alliser and Jon.',
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
        it: 'Sam fa parte del gruppo che riporta a Castello Nero i corpi di [[othor|Othor]] e [[jafer-flowers|Jafer Flowers]]. Sam nota che i due ranger sembrano morti da tempo, eppure i corpi non si sono decomposti. Il lord comandante [[jeor-mormont|Jeor Mormont]] vuole che maestro [[aemon|Aemon]] li esamini prima di decidere. Quella notte il cadavere di Othor si rianima, e [[jon-snow|Jon Snow]] lo distrugge con il fuoco.',
        en: 'Sam is with the party that brings the bodies of [[othor|Othor]] and [[jafer-flowers|Jafer Flowers]] back to Castle Black. Sam notices that the two rangers look long dead, yet the bodies have not rotted. Lord Commander [[jeor-mormont|Jeor Mormont]] wants Maester [[aemon|Aemon]] to examine them before anything is decided. That night Othor’s corpse rises, and [[jon-snow|Jon Snow]] destroys it with fire.',
      },
    ),
    onScreen(
      [9, 61],
      { it: 'La notizia della guerra', en: 'News of the war' },
      {
        it: 'Nella sala i confratelli si accalcano intorno a Lungo Artiglio, la spada che il lord comandante ha donato a [[jon-snow|Jon Snow]], ma Sam se ne sta in disparte. Prende Jon da parte e gli dice che [[robb-stark|Robb]] marcia verso sud alla testa di un esercito, per fare la guerra. Jon sente che dovrebbe essere al fianco del fratello. Maestro [[aemon|Aemon]] ricorda a Jon il giuramento dei Guardiani della notte, ma gli dice che la scelta di restare o partire spetta solo a lui.',
        en: 'In the hall the brothers crowd around Longclaw, the sword the Lord Commander has given [[jon-snow|Jon Snow]], but Sam keeps apart. He takes Jon aside and tells him that [[robb-stark|Robb]] has marched south at the head of an army, to war. Jon feels he should be with his brother. Maester [[aemon|Aemon]] reminds Jon of the vows of the Night’s Watch, but tells him that the choice to stay or go is his alone.',
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
        it: 'A Castello Nero arriva la notizia che [[eddard-stark|Eddard Stark]] è stato arrestato per tradimento, e il lord comandante [[jeor-mormont|Jeor Mormont]] avverte [[jon-snow|Jon Snow]] di non fare sciocchezze. Alliser chiama Jon il bastardo di un traditore. Jon gli si scaglia contro con un coltello, ma gli amici di Jon lo trattengono prima che raggiunga Alliser.',
        en: 'Word reaches Castle Black that [[eddard-stark|Eddard Stark]] has been arrested for treason, and Lord Commander [[jeor-mormont|Jeor Mormont]] warns [[jon-snow|Jon Snow]] not to do anything stupid. Alliser calls Jon a traitor’s bastard. Jon goes for him with a knife, but Jon’s friends hold him back before he can reach Alliser.',
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
        it: 'Yoren sta viaggiando verso sud con [[tyrion-lannister|Tyrion Lannister]] quando i due si fermano in una locanda dove alloggia [[catelyn-stark|Catelyn Stark]]. Catelyn fa catturare Tyrion. Yoren prosegue fino ad Approdo del Re e racconta al marito di Catelyn, [[eddard-stark|Eddard Stark]], Primo Cavaliere del re, ciò che lei ha fatto.',
        en: 'Yoren is traveling south with [[tyrion-lannister|Tyrion Lannister]] when they stop at an inn where [[catelyn-stark|Catelyn Stark]] is staying. Catelyn has Tyrion seized. Yoren rides on to King’s Landing and tells her husband, [[eddard-stark|Eddard Stark]], the Hand of the King, what she has done.',
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
        it: 'Will è un ranger dei Guardiani della notte in ricognizione oltre la Barriera con [[gared|Gared]], agli ordini del giovane ser [[waymar-royce|Waymar Royce]]. Riferisce che i bruti a cui danno la caccia giacciono morti nel loro accampamento, senza traccia di sangue. Quando riporta Waymar sul posto, i corpi sono spariti, e Waymar lo manda in cima a un albero. Da lassù Will vede gli Estranei abbattere Waymar. Quando scende a raccogliere la spada spezzata del cavaliere, Waymar si rialza, con l’occhio azzurro, e stringe le mani intorno alla gola di Will.',
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
      [7, 49],
      { it: 'Ai ranger', en: 'To the rangers' },
      {
        it: 'Il lord comandante [[jeor-mormont|Jeor Mormont]] accoglie nei Guardiani della notte il gruppo di reclute di [[jon-snow|Jon Snow]] e assegna gli incarichi. Grenn viene assegnato ai ranger, l’incarico che Jon sperava di ottenere. Jon, il migliore combattente del gruppo, finisce invece agli attendenti.',
        en: 'Lord Commander [[jeor-mormont|Jeor Mormont]] takes the group of recruits of [[jon-snow|Jon Snow]] into the Night’s Watch and gives out their posts. Grenn is named to the rangers, the post Jon had hoped for. Jon, the best fighter of the group, is sent to the stewards instead.',
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
    inBooks(
      [7, 49],
      { it: 'Tra i ranger', en: 'Named to the rangers' },
      {
        it: 'Ser [[alliser-thorne|Alliser Thorne]] dichiara Pyp pronto insieme ad altre sette reclute, tra cui [[jon-snow|Jon Snow]], e durante i festeggiamenti Pyp spruzza del vino in faccia a Jon. Alla cerimonia che li rende confratelli, il lord comandante [[jeor-mormont|Jeor Mormont]] assegna Pyp ai ranger, con [[grenn|Grenn]], Todder e Matthar, mentre Jon finisce agli attendenti.',
        en: 'Ser [[alliser-thorne|Alliser Thorne]] passes Pyp out of training with seven other recruits, [[jon-snow|Jon Snow]] among them, and Pyp squirts wine in the face of Jon as they celebrate. At the ceremony that makes them brothers, Lord Commander [[jeor-mormont|Jeor Mormont]] names Pyp to the rangers, with [[grenn|Grenn]], Todder and Matthar, while Jon is sent to the stewards.',
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
    onScreen(
      [7, 49],
      { it: 'Tra i ranger', en: 'Assigned to the rangers' },
      {
        it: 'Rast è tra le reclute quando il lord comandante [[jeor-mormont|Jeor Mormont]] le accoglie nei Guardiani della notte e assegna gli incarichi. Rast viene assegnato ai ranger. [[jon-snow|Jon Snow]], che con il suo meta-lupo lo aveva costretto a lasciare in pace Sam, finisce agli attendenti.',
        en: 'Rast stands with the other recruits when Lord Commander [[jeor-mormont|Jeor Mormont]] takes them into the Night’s Watch and hands out their posts. Rast is assigned to the rangers. [[jon-snow|Jon Snow]], who once warned him off Sam with his direwolf, is sent to the stewards.',
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
      [7, 49],
      { it: 'Tra i costruttori', en: 'Among the builders' },
      {
        it: 'Ser [[alliser-thorne|Alliser Thorne]] dichiara Halder pronto insieme ad altre sette reclute, tra cui [[jon-snow|Jon Snow]]. Alla cerimonia che li rende confratelli dei Guardiani della notte, il lord comandante [[jeor-mormont|Jeor Mormont]] assegna Halder e Albett ai costruttori, mentre Jon, il migliore combattente del gruppo, finisce agli attendenti.',
        en: 'Ser [[alliser-thorne|Alliser Thorne]] passes Halder out of training with seven other recruits, [[jon-snow|Jon Snow]] among them. At the ceremony that makes them brothers of the Night’s Watch, Lord Commander [[jeor-mormont|Jeor Mormont]] names Halder and Albett to the builders, while Jon, the best fighter of the group, is sent to the stewards.',
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
        it: 'Todder, che gli altri chiamano Rospo, è una recluta che si addestra a Castello Nero nel gruppo di [[jon-snow|Jon Snow]]. Stanco di essere battuto da Jon nel cortile, lo affronta nell’armeria con [[grenn|Grenn]] e i due stupratori arrivati al nord con Jon. Scoppia una rissa, e l’armaiolo [[donal-noye|Donal Noye]] la interrompe prima che qualcuno si faccia male.',
        en: 'Todder, whom the others call Toad, is a recruit training at Castle Black in the group of [[jon-snow|Jon Snow]]. Fed up with being beaten by Jon in the yard, he confronts him in the armory with [[grenn|Grenn]] and the two rapers who rode north with Jon. A fight breaks out, and the armorer [[donal-noye|Donal Noye]] stops it before anyone is hurt.',
      },
    ),
    inBooks(
      [31, 49],
      { it: 'Tra i ranger', en: 'Named to the rangers' },
      {
        it: 'Ser [[alliser-thorne|Alliser Thorne]] dichiara Rospo pronto insieme ad altre sette reclute, tra cui [[jon-snow|Jon Snow]]. Alla cerimonia che li rende confratelli dei Guardiani della notte, il lord comandante [[jeor-mormont|Jeor Mormont]] assegna Rospo ai ranger, con [[grenn|Grenn]], [[pypar|Pyp]] e Matthar, mentre Jon finisce agli attendenti.',
        en: 'Ser [[alliser-thorne|Alliser Thorne]] passes Toad out of training with seven other recruits, [[jon-snow|Jon Snow]] among them. At the ceremony that makes them brothers of the Night’s Watch, Lord Commander [[jeor-mormont|Jeor Mormont]] names Toad to the rangers, with [[grenn|Grenn]], [[pypar|Pyp]] and Matthar, while Jon is sent to the stewards.',
      },
    ),
    inBooks(
      [30, 71],
      { it: 'All’inseguimento di Jon', en: 'After Jon' },
      {
        it: 'Quando [[jon-snow|Jon Snow]] diserta i Guardiani della notte per raggiungere il fratello [[robb-stark|Robb]], Rospo lo insegue con [[grenn|Grenn]], [[pypar|Pyp]], [[halder|Halder]] e Matthar. Trovano Jon sulla strada verso sud, lo circondano e recitano il giuramento finché Jon non accetta di tornare con loro prima dell’alba.',
        en: 'When [[jon-snow|Jon Snow]] deserts the Night’s Watch to join his brother [[robb-stark|Robb]], Toad rides after him with [[grenn|Grenn]], [[pypar|Pyp]], [[halder|Halder]] and Matthar. They find Jon on the road south, surround him and recite their vows until he agrees to come back with them before dawn.',
      },
    ),
  ],
  'othell-yarwyck': [
    inBoth(
      [7, 49],
      { it: 'Il Primo Costruttore', en: 'The First Builder' },
      {
        it: 'Othell Yarwyck è il Primo Costruttore dei Guardiani della notte. È tra gli ufficiali presenti quando il lord comandante [[jeor-mormont|Jeor Mormont]] accoglie nei Guardiani il gruppo di reclute di [[jon-snow|Jon Snow]] e assegna gli incarichi. [[halder|Halder]] viene destinato ai costruttori di Othell.',
        en: 'Othell Yarwyck is the First Builder of the Night’s Watch. He is among the officers present when Lord Commander [[jeor-mormont|Jeor Mormont]] takes the group of recruits of [[jon-snow|Jon Snow]] into the Watch and gives out their posts. [[halder|Halder]] is sent to the builders under Othell.',
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
        it: 'Nella notte i due ranger morti si rianimano a Castello Nero. Mentre [[jon-snow|Jon Snow]] brucia il cadavere di [[othor|Othor]] nelle stanze del lord comandante, il cadavere di [[jafer-flowers|Jafer Flowers]] uccide quattro uomini. Ser Jaremy gli taglia la testa, ma il corpo decapitato estrae il pugnale di Jaremy dal fodero e lo pianta nel ventre del cavaliere. Jaremy muore, e il cadavere viene fatto a pezzi.',
        en: 'In the night the two dead rangers rise at Castle Black. While [[jon-snow|Jon Snow]] burns the corpse of [[othor|Othor]] in the Lord Commander’s rooms, the corpse of [[jafer-flowers|Jafer Flowers]] kills four men. Ser Jaremy hacks off its head, but the headless body pulls the dagger of Jaremy from its sheath and buries it in his bowels. Jaremy dies, and the corpse is hacked to pieces.',
      },
    ),
  ],
  'othor': [
    inBoth(
      [8, 53],
      { it: 'Il morto che si rialza', en: 'The dead man rises' },
      {
        it: 'Othor era partito oltre la Barriera con il gruppo di [[benjen-stark|Benjen Stark]], che non è più tornato. Il suo corpo viene trovato accanto a quello di [[jafer-flowers|Jafer Flowers]], un altro ranger di Benjen, ed entrambi vengono riportati a Castello Nero. Il lord comandante [[jeor-mormont|Jeor Mormont]] vuole che li esamini maestro [[aemon|Aemon]]. Quella notte il cadavere di Othor si rianima e attacca Jeor nelle sue stanze. [[jon-snow|Jon Snow]] gli taglia un braccio, ma il morto continua ad avanzare, finché Jon non lo distrugge con il fuoco.',
        en: 'Othor had ridden out beyond the Wall in the party of [[benjen-stark|Benjen Stark]], which has not come back. His body is found beside that of [[jafer-flowers|Jafer Flowers]], another of the rangers of Benjen, and both are carried back to Castle Black. Lord Commander [[jeor-mormont|Jeor Mormont]] wants Maester [[aemon|Aemon]] to examine them. That night the corpse of Othor rises and attacks Jeor in his rooms. [[jon-snow|Jon Snow]] cuts off one of its arms, but it keeps coming until Jon destroys it with fire.',
      },
    ),
  ],
  'jafer-flowers': [
    onScreen(
      [8, 53],
      { it: 'La mano nel bosco', en: 'The hand in the woods' },
      {
        it: 'Jafer Flowers era un ranger del gruppo che [[benjen-stark|Benjen Stark]] ha guidato oltre la Barriera e che non è più tornato. Dopo il giuramento dei nuovi confratelli, [[ghost-direwolf|Spettro]] trova nella Foresta Stregata la mano mozzata di Jafer. Il corpo di Jafer viene trovato oltre la Barriera con quello di [[othor|Othor]], e il gruppo di [[othell-yarwyck|Othell Yarwyck]] li riporta entrambi a Castello Nero. Il lord comandante [[jeor-mormont|Jeor Mormont]] vuole che li esamini maestro [[aemon|Aemon]]. Quella notte i cadaveri si rianimano. Mentre Othor attacca Jeor, Jafer semina il caos altrove, finché non viene abbattuto e bruciato.',
        en: 'Jafer Flowers was a ranger of the party that [[benjen-stark|Benjen Stark]] led beyond the Wall, which has not come back. After the new brothers swear their vows, [[ghost-direwolf|Ghost]] finds the severed hand of Jafer in the Haunted Forest. The body of Jafer is found beyond the Wall with that of [[othor|Othor]], and the party of [[othell-yarwyck|Othell Yarwyck]] brings both back to Castle Black. Lord Commander [[jeor-mormont|Jeor Mormont]] wants Maester [[aemon|Aemon]] to examine them. That night the corpses rise. While Othor attacks Jeor, Jafer causes trouble elsewhere until he is put down and burned.',
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
        it: 'Nella notte il cadavere di Jafer si rianima a Castello Nero, come quello di [[othor|Othor]]. Uccide ser [[jaremy-rykker|Jaremy Rykker]] e altri quattro uomini. Jaremy gli taglia la testa, ma il corpo decapitato lo trafigge con il pugnale di Jaremy, e si ferma solo quando viene fatto a pezzi. Il lord comandante manda ser [[alliser-thorne|Alliser Thorne]] ad Approdo del Re con la mano di uno dei morti, per mostrare al re che cosa si è rianimato alla Barriera.',
        en: 'In the night the corpse of Jafer rises at Castle Black, as that of [[othor|Othor]] does. It kills Ser [[jaremy-rykker|Jaremy Rykker]] and four other men. Jaremy takes its head off, but the headless body stabs him with his own dagger, and it stops only when it is hacked to pieces. The Lord Commander sends Ser [[alliser-thorne|Alliser Thorne]] to King’s Landing with the hand of one of the dead men, to show the king what has risen at the Wall.',
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
        it: 'Dopo la caduta di [[bran-stark|Bran Stark]], Tyrion dice al nipote [[joffrey-baratheon|Joffrey]] di andare a porgere i suoi omaggi ai genitori di Bran. Quando Joffrey rifiuta, Tyrion lo schiaffeggia tre volte, finché il principe non acconsente. A colazione racconta a [[jaime-lannister|Jaime]] e a [[cersei-lannister|Cersei]] che Bran dovrebbe sopravvivere, e nota con quanta cautela i due accolgono la notizia. Dice di voler vedere la Barriera e pisciare dalla sua cima. Parte verso nord con [[jon-snow|Jon]] e suo zio [[benjen-stark|Benjen]], e spiega a Jon che legge per tenere affilata la mente, la sua arma migliore, e che i Guardiani della notte non sono più l’ordine nobile di un tempo. Davanti alla Barriera resta senza parole.',
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
        it: 'A Castello Nero Tyrion guarda le reclute allenarsi insieme al Lord Comandante [[jeor-mormont|Jeor Mormont]]. Quando alcune di loro se la prendono con [[jon-snow|Jon]], Tyrion calma gli animi e fa notare a Jon che gli altri non hanno mai avuto un maestro d’armi. [[benjen-stark|Benjen]] lo rimprovera perché dubita di ciò che c’è oltre la Barriera. Jeor e maestro [[aemon|Aemon]] gli chiedono di ottenere a corte più uomini per i Guardiani della notte. Tyrion non crede ai pericoli di cui parlano, ma accetta di riferire la richiesta alla regina. Prima di ripartire con [[yoren|Yoren]], sale in cima alla Barriera e piscia dal bordo.',
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
        it: 'A Castello Nero Tyrion cena con il Lord Comandante [[jeor-mormont|Mormont]] e gli ufficiali dei Guardiani della notte, e con le sue frecciate fa alzare da tavola ser [[alliser-thorne|Alliser Thorne]]. Maestro [[aemon|Aemon]], vecchio e cieco, lo chiama gigante. Rimasto solo con lui, Mormont chiede a Tyrion di far sapere a corte quanto i Guardiani abbiano bisogno di aiuto, e gli parla di bruti in fuga verso sud e di uomini vicino a Forte Orientale che dicono di aver visto gli Estranei. Più tardi Tyrion sale un’ultima volta sulla Barriera e trova [[jon-snow|Jon]] di guardia. Jon promette che un giorno ritroverà lo zio [[benjen-stark|Benjen]], scomparso oltre la Barriera.',
        en: 'At Castle Black Tyrion dines with Lord Commander [[jeor-mormont|Mormont]] and the officers of the Night’s Watch, and his taunts drive Ser [[alliser-thorne|Alliser Thorne]] from the table. Maester [[aemon|Aemon]], old and blind, calls him a giant. Alone with him, Mormont asks Tyrion to tell the court how badly the Watch needs help, speaking of wildlings fleeing south and of men near Eastwatch who claim to have seen White Walkers. Later Tyrion goes up the Wall one last time and finds [[jon-snow|Jon]] on watch. Jon promises that one day he will find his uncle [[benjen-stark|Benjen]], lost beyond the Wall.',
      },
    ),
    inBooks(
      [4, 25],
      { it: 'Una sella per Bran', en: 'A saddle for Bran' },
      {
        it: 'Mentre torna a sud, Tyrion si ferma a Grande Inverno con quattro confratelli dei Guardiani della notte, tra cui [[yoren|Yoren]]. Nella sala grande [[robb-stark|Robb Stark]] lo accoglie con freddezza, con [[theon-greyjoy|Theon Greyjoy]] al suo fianco. Tyrion ha portato il disegno di una sella che permetterebbe a [[bran-stark|Bran]], che non può più usare le gambe, di tornare a cavalcare. I metalupi degli Stark lo accerchiano, finché i loro padroni non li richiamano uno alla volta. Tyrion rifiuta l’ospitalità di Robb e annuncia che l’indomani ripartirà verso sud.',
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
        it: 'Diretto a sud, Tyrion si ferma per la notte alla locanda all’incrocio di [[masha-heddle|Masha Heddle]] con le sue due guardie e con [[yoren|Yoren]] dei Guardiani della notte. Compra una stanza da un altro cliente e rifiuta una canzone del cantastorie [[marillion|Marillion]]. Poi riconosce [[catelyn-stark|Catelyn Stark]], che viaggia in incognito con ser [[rodrik-cassel|Rodrik Cassel]], e la chiama per nome davanti a tutti. Catelyn si rivolge agli uomini nella sala giurati ai vassalli di suo padre e dice loro che Tyrion ha tentato di far uccidere suo figlio [[bran-stark|Bran]]. Gli uomini si schierano con lei, e Tyrion resta sbalordito.',
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
        it: 'Al Nido dell’Aquila [[lysa-arryn|Lysa Arryn]] accusa Tyrion dell’omicidio di suo marito, Jon Arryn, e lo fa chiudere in una cella del cielo, dove il carceriere [[mord|Mord]] gli prende la giubba. Tyrion chiede un processo per combattimento per dimostrare la propria innocenza. Ser [[vardis-egen|Vardis Egen]] viene scelto come campione di Lysa, ma non vuole battersi con un uomo della statura di Tyrion, così Tyrion chiede un campione per sé, e risponde il mercenario [[bronn|Bronn]]. Vardis combatte in un’armatura pesante, e Bronn si muove rapido finché il vecchio cavaliere non si stanca, poi gli fa crollare addosso una statua e lo uccide. Lysa lascia partire Tyrion e Bronn lungo la strada alta.',
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
        it: 'Tyrion ha raggiunto l’esercito del padre alla locanda all’incrocio con i clan delle montagne. [[bronn|Bronn]] gli trova una ragazza di nome [[shae|Shae]], portandola via a un cavaliere, e lo zio [[kevan-lannister|Kevan]] gli assegna uno scudiero. [[tywin-lannister|Tywin]] mette Tyrion e i suoi uomini nell’avanguardia, sotto il comando di ser [[gregor-clegane|Gregor Clegane]]. Nella battaglia della Forca Verde Tyrion non cede e tiene la linea.',
        en: 'Tyrion has reached his father’s army at the inn at the crossroads with the mountain clans. [[bronn|Bronn]] finds him a girl named [[shae|Shae]], taking her from a knight, and his uncle [[kevan-lannister|Kevan]] gives him a squire. [[tywin-lannister|Tywin]] puts Tyrion and his clansmen in the vanguard, under Ser [[gregor-clegane|Gregor Clegane]]. In the battle on the Green Fork Tyrion does not give way and holds the line.',
      },
    ),
    onScreen(
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
    inBooks(
      [10, 70],
      { it: 'Mandato a corte', en: 'Sent to court' },
      {
        it: 'Arriva la notizia che [[robb-stark|Robb Stark]] ha fatto prigioniero in battaglia [[jaime-lannister|Jaime]]. Il padre di Tyrion, [[tywin-lannister|Tywin]], nominato Primo Cavaliere dal nuovo re, manda Tyrion ad Approdo del Re a fare le sue veci, e a tenere a freno la sorella [[cersei-lannister|Cersei]] e suo figlio [[joffrey-baratheon|Joffrey]]. Tywin gli proibisce di portare a corte la sua puttana. Tyrion porta con sé [[shae|Shae]] lo stesso. Tyrion viene a sapere che il padre aveva messo lui e i clan nell’avanguardia alla Forca Verde sperando che cedessero e trascinassero gli Stark in una trappola, e che tenendo la posizione ha mandato all’aria il piano.',
        en: 'News comes that [[robb-stark|Robb Stark]] has taken [[jaime-lannister|Jaime]] prisoner in battle. Tyrion’s father [[tywin-lannister|Tywin]], whom the new king has named Hand, sends Tyrion to King’s Landing to act as Hand of the King in his place, and to keep his sister [[cersei-lannister|Cersei]] and her son [[joffrey-baratheon|Joffrey]] in check. Tywin forbids him to take his whore to court. Tyrion takes [[shae|Shae]] with him all the same. Tyrion learns that his father had put him and the clans in the vanguard on the Green Fork hoping they would break and draw the Starks into a trap, and that by holding his ground he spoiled the plan.',
      },
    ),
    onScreen(
      [11, 77],
      { it: 'Di nuovo ad Approdo del Re', en: 'Back in King’s Landing' },
      {
        it: 'Tyrion arriva ad Approdo del Re, tra la gioia di [[tommen-baratheon|Tommen]] e [[myrcella-baratheon|Myrcella]] e il disprezzo di [[joffrey-baratheon|Joffrey]]. Si presenta al Concilio ristretto con una lettera del padre che lo nomina Primo Cavaliere in sua vece, e [[cersei-lannister|Cersei]] è furiosa. Tyrion le rimprovera di non aver tenuto a freno il figlio, che facendo giustiziare Eddard Stark ha scatenato una guerra che stanno perdendo, e di essersi lasciata sfuggire Arya, un ostaggio in meno. Nasconde [[shae|Shae]] nella Torre del Primo Cavaliere, contro l’ordine del padre.',
        en: 'Tyrion rides into King’s Landing, to the delight of [[tommen-baratheon|Tommen]] and [[myrcella-baratheon|Myrcella]] and the disdain of [[joffrey-baratheon|Joffrey]]. He walks into the small council with a letter from his father naming him acting Hand of the King, and [[cersei-lannister|Cersei]] is livid. He tells her she has failed to rein in her son, whose execution of Eddard Stark started a war they are losing, and that letting Arya escape has cost them a hostage. He hides [[shae|Shae]] in the Tower of the Hand, against his father’s order.',
      },
    ),
    onScreen(
      [12, 82],
      { it: 'La cena di Janos Slynt', en: 'Janos Slynt’s dinner' },
      {
        it: 'Tyrion cena con [[janos-slynt|Janos Slynt]], comandante della Guardia cittadina, che ammette senza problemi la sua parte nel massacro dei bastardi di Robert ma non dice chi l’abbia ordinato. Tyrion lo fa arrestare e lo manda alla Barriera a prendere il nero, e affida la Guardia cittadina a [[bronn|Bronn]]. [[varys|Varys]] ha scoperto [[shae|Shae]] nella Torre del Primo Cavaliere e glielo fa capire. Tyrion conclude che il massacro l’ha ordinato [[joffrey-baratheon|Joffrey]], e avverte [[cersei-lannister|Cersei]] che sta perdendo il popolo.',
        en: 'Tyrion dines with [[janos-slynt|Janos Slynt]], commander of the City Watch, who freely admits his part in the massacre of Robert’s bastards but will not say who ordered it. Tyrion has him arrested and sent to the Wall to take the black, and gives the City Watch to [[bronn|Bronn]]. [[varys|Varys]] has found [[shae|Shae]] in the Tower of the Hand and lets Tyrion know it. Tyrion concludes that [[joffrey-baratheon|Joffrey]] ordered the massacre, and tells [[cersei-lannister|Cersei]] she is losing the people.',
      },
    ),
    onScreen(
      [13, 99],
      { it: 'Tre piani di nozze', en: 'Three marriage plans' },
      {
        it: 'Tyrion mette alla prova il Concilio ristretto dando a ciascun membro un piano diverso per far sposare [[myrcella-baratheon|Myrcella]]. Quando [[cersei-lannister|Cersei]] gli rinfaccia le nozze con Dorne, di cui aveva parlato solo a [[pycelle|Pycelle]], Tyrion sa chi la informa. Fa arrestare il gran maestro da [[bronn|Bronn]] e lo fa rinchiudere nelle celle nere, e porta avanti le nozze con Casa Martell nonostante le proteste di Cersei. [[petyr-baelish|Petyr Baelish]], furioso per essere stato usato, si calma quando Tyrion gli affida una missione presso Renly e Catelyn.',
        en: 'Tyrion tests the small council by giving each member a different plan to marry off [[myrcella-baratheon|Myrcella]]. When [[cersei-lannister|Cersei]] confronts him about the Dornish match he told only [[pycelle|Pycelle]], he knows who her informer is. He has [[bronn|Bronn]] arrest the Grand Maester and throw him in the black cells, and holds to the match with House Martell over Cersei’s protests. [[petyr-baelish|Petyr Baelish]], furious at being used, is placated with a mission to Renly and Catelyn.',
      },
    ),
    onScreen(
      [14, 103],
      { it: 'Il segreto di Lancel', en: 'Lancel’s secret' },
      {
        it: 'Quando [[joffrey-baratheon|Joffrey]] fa picchiare e spogliare [[sansa-stark|Sansa]] davanti alla corte, Tyrion interviene, dà al re del mezzo idiota e gli ricorda che fine ha fatto il Re Folle. Sansa rifiuta la sua offerta di sciogliere il fidanzamento, e Tyrion ne resta colpito. Quella notte il cugino [[lancel-lannister|Lancel]] gli porta l’ordine di Cersei di liberare [[pycelle|Pycelle]], e ha addosso il profumo della regina. Tyrion capisce che divide il letto con lei e, minacciando di dirlo a Joffrey, ne fa la sua spia. Accetta di liberare Pycelle, ma non di riportarlo nel Concilio.',
        en: 'When [[joffrey-baratheon|Joffrey]] has [[sansa-stark|Sansa]] beaten and stripped before the court, Tyrion stops it, calls the king a halfwit and reminds him what became of the Mad King. Sansa refuses his offer to end her engagement, and he is impressed. That night his cousin [[lancel-lannister|Lancel]] brings Cersei’s order to free [[pycelle|Pycelle]], smelling of her perfume. Tyrion guesses he shares the queen’s bed and, threatening to tell Joffrey, makes him his spy. He agrees to free Pycelle, but not to return him to the council.',
      },
    ),
    onScreen(
      [15, 110],
      { it: 'Altofuoco', en: 'Wildfire' },
      {
        it: 'Tyrion porta a [[cersei-lannister|Cersei]] la notizia della morte di Renly e la avverte che ora [[stannis-baratheon|Stannis]] attaccherà; lei si rifiuta di rivelargli i suoi piani. Da [[lancel-lannister|Lancel]] viene a sapere che la regina si incontra con la Gilda degli alchimisti, e scopre che i piromanti hanno accumulato migliaia di giare di altofuoco. Ordina alla gilda di rispondere a lui e non alla regina. [[bronn|Bronn]] lo avverte che dei difensori in preda al panico potrebbero dare fuoco alla loro stessa città. Per strada, una folla incolpa Tyrion dei mali della città.',
        en: 'Tyrion brings [[cersei-lannister|Cersei]] word that Renly is dead and warns that [[stannis-baratheon|Stannis]] will now attack; she refuses to share her plans. Through [[lancel-lannister|Lancel]] he learns she has been meeting the Alchemists’ Guild, and finds that the pyromancers have stockpiled thousands of jars of wildfire. He orders the guild to answer to him rather than to the queen. [[bronn|Bronn]] warns that panicked defenders could burn their own city. In the street, a crowd blames Tyrion for the city’s ills.',
      },
    ),
    onScreen(
      [16, 115],
      { it: 'La rivolta', en: 'The riot' },
      {
        it: 'Al porto Tyrion e la corte salutano [[myrcella-baratheon|Myrcella]] in partenza per Dorne, e [[cersei-lannister|Cersei]] gli dice che non lo perdonerà. Sulla via del ritorno la folla affamata tira sterco in faccia a [[joffrey-baratheon|Joffrey]], che ordina alle guardie di ucciderli tutti, e la città insorge. Al castello Tyrion prende a schiaffi il re. [[sansa-stark|Sansa]] si è persa tra la folla; Joffrey si rifiuta di mandare uomini a cercarla, e a riportarla è [[sandor-clegane|Sandor Clegane]]. Tyrion lo ringrazia, e Sandor risponde che non l’ha fatto per lui.',
        en: 'At the docks, Tyrion and the court see [[myrcella-baratheon|Myrcella]] off to Dorne, and [[cersei-lannister|Cersei]] tells him she will not forgive him. On the way back, starving crowds throw dung at [[joffrey-baratheon|Joffrey]], who orders his guards to kill them all, and the city riots. Back in the castle, Tyrion slaps the king. [[sansa-stark|Sansa]] has been lost in the crowd; Joffrey refuses to send men after her, and [[sandor-clegane|Sandor Clegane]] brings her back. Tyrion thanks him, and Sandor answers that he did not do it for him.',
      },
    ),
    onScreen(
      [17, 126],
      { it: 'Un momento con Cersei', en: 'A moment with Cersei' },
      {
        it: 'Da sola con Tyrion, [[cersei-lannister|Cersei]] ammette di rimpiangere di aver avuto i figli dal fratello [[jaime-lannister|Jaime]], e si chiede se la crudeltà di [[joffrey-baratheon|Joffrey]] sia il prezzo del loro peccato. Tyrion risponde che [[myrcella-baratheon|Myrcella]] e [[tommen-baratheon|Tommen]] sono bambini buoni e onesti. Per un momento tra fratello e sorella c’è un po’ di comprensione.',
        en: 'Alone with Tyrion, [[cersei-lannister|Cersei]] admits she regrets having had her children by her brother [[jaime-lannister|Jaime]], and wonders whether [[joffrey-baratheon|Joffrey]]’s cruelty is the price of their sin. Tyrion answers that [[myrcella-baratheon|Myrcella]] and [[tommen-baratheon|Tommen]] are good and decent children. For a moment brother and sister share some sympathy.',
      },
    ),
    onScreen(
      [18, 128],
      { it: 'La donna sbagliata', en: 'The wrong woman' },
      {
        it: 'Tyrion cerca nei libri di storia un modo per difendere la città, si consiglia con [[bronn|Bronn]] e [[varys|Varys]] e decide di usare l’altofuoco. Vuole [[joffrey-baratheon|Joffrey]] sulle mura durante la battaglia. Per proteggere il figlio, [[cersei-lannister|Cersei]] ha fatto prendere la donna che crede l’amante di Tyrion e gliela mostra picchiata: è [[ros|Ros]]. Nascondendo il sollievo perché [[shae|Shae]] è al sicuro, Tyrion sta al gioco, promette a Ros che la libererà e giura di vendicarsi della sorella.',
        en: 'Tyrion reads history books for a way to defend the city, takes advice from [[bronn|Bronn]] and [[varys|Varys]], and settles on the wildfire. He means to have [[joffrey-baratheon|Joffrey]] on the walls in the battle. To keep her son safe, [[cersei-lannister|Cersei]] has seized the woman she takes for his lover and shows her to him beaten: it is [[ros|Ros]]. Hiding his relief that [[shae|Shae]] is safe, Tyrion plays along, promises Ros he will free her, and vows revenge on his sister.',
      },
    ),
    onScreen(
      [19, 135],
      {
        it: 'La battaglia delle Acque Nere',
        en: 'The Battle of the Blackwater',
      },
      {
        it: 'La notte prima della battaglia Tyrion dice a [[shae|Shae]] che può ancora andarsene, e lei resta. Dalle mura manda una sola nave che perde altofuoco in mezzo alla flotta di [[stannis-baratheon|Stannis]], e la freccia infuocata di [[bronn|Bronn]] la fa esplodere. Quando [[joffrey-baratheon|Joffrey]] lascia le mura e le cappe dorate si perdono d’animo, Tyrion li rincuora di persona e guida una sortita attraverso i cunicoli che spezza l’ariete alla Porta del Fango. Nella mischia [[mandon-moore|ser Mandon Moore]] gli squarcia il volto, e [[podrick-payne|Podrick]] uccide Mandon prima che possa colpire di nuovo.',
        en: 'On the eve of battle Tyrion tells [[shae|Shae]] she can still leave, and she stays. From the walls he sends a single ship leaking wildfire into [[stannis-baratheon|Stannis]]’s fleet, and [[bronn|Bronn]]’s flaming arrow sets it ablaze. When [[joffrey-baratheon|Joffrey]] leaves the walls and the gold cloaks lose heart, Tyrion rallies them himself and leads a sortie through the tunnels that breaks the ram at the Mud Gate. In the fighting [[mandon-moore|Ser Mandon Moore]] slashes his face, and [[podrick-payne|Podrick]] kills Mandon before he can strike again.',
      },
    ),
    onScreen(
      [20, 141],
      { it: 'Non più Primo Cavaliere', en: 'No longer Hand' },
      {
        it: 'Tyrion si risveglia, sfregiato, in nuove stanze misere. [[pycelle|Pycelle]] gli annuncia compiaciuto che non è più Primo Cavaliere: è tornato suo padre [[tywin-lannister|Tywin]] e ne ha preso il posto. [[varys|Varys]] gli dice che [[bronn|Bronn]] ha perso il comando della Guardia cittadina e che i clan delle montagne sono tornati a casa, e lo ringrazia per la difesa della città, visto che nessun altro lo farà. [[shae|Shae]] lo supplica di partire con lei per Pentos. Tyrion rifiuta.',
        en: 'Tyrion wakes, scarred, in shabby new quarters. [[pycelle|Pycelle]] gloats that he is no longer acting Hand: his father [[tywin-lannister|Tywin]] has returned and taken over. [[varys|Varys]] tells him that [[bronn|Bronn]] has lost the City Watch and the hill tribes have gone home, and thanks him for the city’s defence, since no one else will. [[shae|Shae]] begs him to leave with her for Pentos. He refuses.',
      },
    ),
    inBooks(
      [11, 77],
      { it: 'La sedia del Primo Cavaliere', en: 'The Hand’s chair' },
      {
        it: 'Tyrion arriva a corte con la lettera del padre che lo nomina Primo Cavaliere in sua vece, e al Concilio prende la sedia del Primo Cavaliere. Da solo con [[cersei-lannister|Cersei]], promette di liberare [[jaime-lannister|Jaime]] se lei lo appoggia, viene a sapere che [[lancel-lannister|Lancel]] ha dato a Robert vino forte prima della caccia al cinghiale, e si prende degli schiaffi quando le dice che sa di lei e Jaime. Uscendo, fa togliere le teste di Eddard Stark e dei suoi uomini. In una locanda lo aspetta [[varys|Varys]] con [[shae|Shae]], e gli lascia un indovinello su un mercenario e tre grandi uomini.',
        en: 'Tyrion arrives at court with his father’s letter naming him acting Hand, and takes the Hand’s chair at the council. Alone with [[cersei-lannister|Cersei]], he promises to free [[jaime-lannister|Jaime]] if she backs him, learns that [[lancel-lannister|Lancel]] plied Robert with strongwine before the boar, and earns slaps for saying he knows about her and Jaime. Riding out, he has the heads of Eddard Stark’s household taken down. At an inn [[varys|Varys]] is waiting with [[shae|Shae]], and leaves him a riddle about a sellsword and three great men.',
      },
    ),
    inBooks(
      [12, 82],
      { it: 'Chi vive e chi muore', en: 'Who lives and who dies' },
      {
        it: 'Tyrion invita a cena [[janos-slynt|Janos Slynt]], viene a sapere che i suoi uomini hanno ucciso su ordine di qualcuno una prostituta e la sua bambina, una figlia bastarda di Robert, e lo spedisce alla Barriera. Il comando della Guardia cittadina passa a [[jacelyn-bywater|ser Jacelyn Bywater]]. Tyrion se la prende con [[varys|Varys]], che gli ha taciuto che è stata [[cersei-lannister|Cersei]] a mandare le cappe dorate. Varys risponde al suo indovinello: il potere risiede dove gli uomini credono che risieda. Alla domanda se ucciderebbe una neonata a comando, [[bronn|Bronn]] dice che prima chiederebbe quanto.',
        en: 'Tyrion dines [[janos-slynt|Janos Slynt]], learns that his men killed a whore and her baby, a bastard daughter of Robert’s, on someone’s orders, and ships him to the Wall. [[jacelyn-bywater|Ser Jacelyn Bywater]] takes over the City Watch. Tyrion is angry that [[varys|Varys]] hid from him that [[cersei-lannister|Cersei]] sent the gold cloaks. Varys answers his riddle: power resides where men believe it resides. Asked whether he would kill a baby girl on command, [[bronn|Bronn]] says he would first ask how much.',
      },
    ),
    inBooks(
      [13, 91],
      { it: 'Tre segreti', en: 'Three secrets' },
      {
        it: 'Per scoprire chi informa la regina, Tyrion confida a ciascun membro del Concilio un segreto diverso. [[pycelle|Pycelle]] deve spedire una sua lettera al principe Doran di Dorne senza dire nulla alla regina. [[petyr-baelish|Ditocorto]] deve conquistare [[lysa-arryn|Lysa Arryn]] alla causa di [[joffrey-baratheon|Joffrey]] promettendo [[myrcella-baratheon|Myrcella]] al figlio di Lysa, e per sé avrà Harrenhal. [[varys|Varys]] indovina che a Doran verrà offerto [[tommen-baratheon|Tommen]]. Tyrion avverte che chi lo dirà a [[cersei-lannister|Cersei]] sarà suo nemico.',
        en: 'To find the informer on the council, Tyrion gives each of its members a different secret. [[pycelle|Pycelle]] is to send his letter to Prince Doran of Dorne and say nothing to the queen. [[petyr-baelish|Littlefinger]] is to win [[lysa-arryn|Lysa Arryn]] for [[joffrey-baratheon|Joffrey]] with the promise of [[myrcella-baratheon|Myrcella]] for her son, and Harrenhal for himself. [[varys|Varys]] guesses that Doran will be offered [[tommen-baratheon|Tommen]]. Tyrion warns that whoever tells [[cersei-lannister|Cersei]] will be his enemy.',
      },
    ),
    inBooks(
      [15, 94],
      { it: 'Diecimila giare', en: 'Ten thousand jars' },
      {
        it: 'Nelle cantine della gilda, [[hallyne|Hallyne]] della Gilda degli alchimisti riferisce a Tyrion che la gilda ha quasi ottomila giare di altofuoco e gliene promette diecimila. Tyrion fa mandare delle giare alle porte della città, dove [[jacelyn-bywater|ser Jacelyn Bywater]] dovrà addestrare delle squadre a usarle. Nel suo solario [[cersei-lannister|Cersei]] lo aggredisce perché vuole mandare [[myrcella-baratheon|Myrcella]] a Dorne, in sposa al figlio del principe Doran. Tyrion non cede, e lei scoppia a piangere. La lettera affidata solo a [[pycelle|Pycelle]] è arrivata alla regina: Tyrion sa chi è l’informatore.',
        en: 'In the guild’s vaults, [[hallyne|Hallyne]] of the Alchemists’ Guild tells Tyrion the guild holds nearly eight thousand jars of wildfire and promises ten thousand. Tyrion has jars sent to the city gates, where [[jacelyn-bywater|Ser Jacelyn Bywater]] is to train crews to handle them. Back in his solar, [[cersei-lannister|Cersei]] rages that he means to send [[myrcella-baratheon|Myrcella]] to Dorne, to wed Prince Doran’s son. Tyrion holds firm, and she weeps. The letter he gave only [[pycelle|Pycelle]] has reached her: he knows his informer.',
      },
    ),
    inBooks(
      [13, 99],
      { it: 'La luna dei traditori', en: 'The traitor’s moon' },
      {
        it: 'Con [[cersei-lannister|Cersei]] a letto per la polvere che le ha messo nel vino, Tyrion tiene udienza da solo e manda le guardie rosse della regina a scortare l’inviato di Robb Stark, [[cleos-frey|ser Cleos Frey]]. Nella notte di luna nera [[shagga|Shagga]] sfonda la porta di [[pycelle|Pycelle]]. Tyrion dice al gran maestro che una copia della sua lettera è andata a Dorne e l’altra a Cersei. L’ascia di Shagga porta via quasi tutta la barba di Pycelle, che confessa di aver lasciato morire Jon Arryn perché Jon sapeva chi era il padre dei figli della regina. Tyrion lo fa gettare in una cella nera.',
        en: 'With [[cersei-lannister|Cersei]] laid low by the powder he put in her wine, Tyrion holds court alone and sends her red cloaks away as escort to Robb Stark’s envoy, [[cleos-frey|Ser Cleos Frey]]. Under the black moon, [[shagga|Shagga]] breaks down [[pycelle|Pycelle]]’s door. Tyrion tells the Grand Maester that one copy of his letter went to Dorne and the other to Cersei. Shagga’s axe takes most of Pycelle’s beard, and Pycelle confesses he let Jon Arryn die because Jon knew who fathered the queen’s children. Tyrion has him thrown into a black cell.',
      },
    ),
    inBooks(
      [14, 103],
      { it: 'Una spia nel letto della regina', en: 'A spy in the queen’s bed' },
      {
        it: 'A notte fonda [[lancel-lannister|ser Lancel]] porta a Tyrion il mandato di Cersei per liberare [[pycelle|Pycelle]] e chiede che [[jacelyn-bywater|ser Jacelyn Bywater]] sia accusato per averle disobbedito. Tyrion gli chiede se la regina l’abbia fatto cavaliere prima o dopo averlo portato a letto, e minaccia di dire a [[joffrey-baratheon|Joffrey]] che Lancel ha ucciso il padre di Joffrey per portarsi a letto la madre. Lancel implora pietà, e Tyrion ne fa la sua spia accanto alla regina. Poi Tyrion passa dal bordello di Chataya e da un cunicolo nascosto per raggiungere la casa dove tiene [[shae|Shae]].',
        en: 'Late at night [[lancel-lannister|Ser Lancel]] brings Cersei’s warrant to free [[pycelle|Pycelle]] and demands that [[jacelyn-bywater|Ser Jacelyn Bywater]] be charged for defying her. Tyrion asks whether she knighted him before or after taking him to bed, and threatens to tell [[joffrey-baratheon|Joffrey]] that Lancel killed his father to bed his mother. Lancel begs for mercy, and Tyrion makes him his spy at the queen’s side. Then Tyrion rides through Chataya’s brothel and a hidden tunnel to the manse where he keeps [[shae|Shae]].',
      },
    ),
    inBooks(
      [15, 110],
      { it: 'Una sposa per il re', en: 'A match for the king' },
      {
        it: 'Arriva la notizia che Renly è stato ucciso e che quasi tutti i suoi lord sono passati a [[stannis-baratheon|Stannis]]. Tyrion vede l’occasione di conquistare i Tyrell: propone che [[joffrey-baratheon|Joffrey]] sposi [[margaery-tyrell|Margaery Tyrell]] al posto di [[sansa-stark|Sansa]], figlia di un traditore morto. [[cersei-lannister|Cersei]] cede. [[petyr-baelish|Ditocorto]] si offre di andare a trattare con i Tyrell. Poi Cersei bacia Tyrion sulla fronte, e lui incarica [[bronn|Bronn]] di scoprire che cosa stia tramando.',
        en: 'Word comes that Renly has been killed and that most of his lords have gone over to [[stannis-baratheon|Stannis]]. Tyrion sees a chance to win the Tyrells: he proposes that [[joffrey-baratheon|Joffrey]] marry [[margaery-tyrell|Margaery Tyrell]] instead of [[sansa-stark|Sansa]], the daughter of a dead traitor. [[cersei-lannister|Cersei]] gives way. [[petyr-baelish|Littlefinger]] volunteers to go and treat with the Tyrells. Afterwards Cersei kisses Tyrion on the brow, and he sets [[bronn|Bronn]] to find out what she is plotting.',
      },
    ),
    inBooks(
      [16, 115],
      { it: 'La rivolta del pane', en: 'Bread riot' },
      {
        it: 'Tyrion saluta [[myrcella-baratheon|Myrcella]] in partenza per Dorne. Sulla via del ritorno la folla colpisce [[joffrey-baratheon|Joffrey]] con lo sterco; il re aizza [[sandor-clegane|il Mastino]] contro la gente, e la città insorge. Alle porte del castello Tyrion schiaffeggia il re così forte da fargli volare via la corona. [[sansa-stark|Sansa]] torna salvata dal Mastino. L’Alto Septon è morto, la figlia di lady Tanda è stata stuprata e il cugino Tyrek è scomparso. [[jacelyn-bywater|Ser Jacelyn]] avverte che la città dà la colpa a Tyrion. [[bronn|Bronn]] osserva che le cose sarebbero più facili se il re fosse [[tommen-baratheon|Tommen]].',
        en: 'Tyrion sees [[myrcella-baratheon|Myrcella]] off to Dorne. Riding back, a mob hits [[joffrey-baratheon|Joffrey]] with dung; he sets [[sandor-clegane|Sandor Clegane]] on the crowd, and the city riots. At the castle gates Tyrion slaps the king so hard his crown flies off. [[sansa-stark|Sansa]] comes back, saved by Sandor. The High Septon is dead, Lady Tanda’s daughter has been raped, and his cousin Tyrek is missing. [[jacelyn-bywater|Ser Jacelyn]] warns that the city blames Tyrion. [[bronn|Bronn]] remarks that things would be easier if [[tommen-baratheon|Tommen]] were king.',
      },
    ),
    inBooks(
      [13, 118],
      { it: 'La caduta di Capo Tempesta', en: 'Storm’s End falls' },
      {
        it: '[[lancel-lannister|Lancel]] rivela che la regina vuole nascondere [[tommen-baratheon|Tommen]] a Rosby, e Tyrion manda [[jacelyn-bywater|ser Jacelyn]] a prendere il gruppo del principe e a tenerlo al sicuro lì. Nella casa dove Tyrion tiene Shae, [[varys|Varys]], travestito da fratello mendicante, porta la notizia che Capo Tempesta è caduta e che Stannis marcerà sulla città. Rimasta sola con Tyrion, [[shae|Shae]] gli chiede di farne la sua dama a corte e lo deride perché ha paura del padre; Tyrion la schiaffeggia, poi le racconta di Tysha. Dopo, Varys propone di mettere Shae al servizio di [[lollys-stokeworth|Lollys Stokeworth]] come cameriera, con un passaggio segreto verso la Torre del Primo Cavaliere.',
        en: '[[lancel-lannister|Lancel]] reveals that the queen means to hide [[tommen-baratheon|Tommen]] at Rosby, and Tyrion sends [[jacelyn-bywater|Ser Jacelyn]] to seize the boy’s party and keep him safe there. At the manse, [[varys|Varys]], disguised as a begging brother, brings word that Storm’s End has fallen and Stannis will march on the city. Alone with Tyrion, [[shae|Shae]] asks to be his lady at court and mocks his fear of his father; he slaps her, then tells her about Tysha. Afterwards Varys suggests Shae serve as maid to [[lollys-stokeworth|Lollys Stokeworth]], with a secret passage to the Tower of the Hand.',
      },
    ),
    inBooks(
      [18, 128],
      { it: 'L’ostaggio della regina', en: 'The queen’s hostage' },
      {
        it: 'Tyrion cena con [[cersei-lannister|Cersei]], che lo avverte che si fida troppo di [[varys|Varys]]. Le dice che darà a [[joffrey-baratheon|Joffrey]] un comando lontano dal grosso dei combattimenti. Poi la regina fa portare una ragazza picchiata, credendola la sua amante: è [[alayaya|Alayaya]]. Sollevato che non abbia trovato [[shae|Shae]], Tyrion giura che qualunque cosa verrà fatta alla ragazza sarà fatta a [[tommen-baratheon|Tommen]], e che ripagherà Cersei quando meno se lo aspetta. Quella notte Shae arriva nella sua camera da letto attraverso un passaggio segreto.',
        en: 'Tyrion sups with [[cersei-lannister|Cersei]], who warns him that he trusts [[varys|Varys]] too much. He tells her he will give [[joffrey-baratheon|Joffrey]] a command far from the worst of the fighting. Then she has a beaten girl brought in, taking her for his lover: [[alayaya|Alayaya]]. Relieved that she has not found [[shae|Shae]], Tyrion swears that whatever is done to the girl will be done to [[tommen-baratheon|Tommen]], and that he will pay Cersei back when she least expects it. That night Shae comes to his bedchamber through a secret passage.',
      },
    ),
    inBooks(
      [19, 135],
      {
        it: 'La catena e le navi in fiamme',
        en: 'The chain and the burning ships',
      },
      {
        it: 'L’altofuoco brucia metà della flotta di [[stannis-baratheon|Stannis]] sulle Acque Nere, e la grande catena che Tyrion ha fatto forgiare si alza alle sue spalle e intrappola le navi. Quando [[sandor-clegane|il Mastino]], sconvolto dal fuoco, si rifiuta di guidare un’altra sortita dalla Porta del Re, Tyrion convince gli uomini a seguirlo facendoli vergognare e la guida lui stesso. Combatte lungo il fiume e sulle navi in fiamme. Lì [[mandon-moore|ser Mandon Moore]] gli squarcia il volto e sta per finirlo quando [[podrick-payne|Podrick]] spinge il cavaliere in acqua.',
        en: 'Wildfire burns half of [[stannis-baratheon|Stannis]]’s fleet on the Blackwater, and the great chain Tyrion had forged rises behind it to trap the ships. When [[sandor-clegane|Sandor Clegane]], shaken by the fire, refuses to lead another sortie from the King’s Gate, Tyrion shames the men into following him and leads it himself. He fights on along the river and across the burning ships. There [[mandon-moore|Ser Mandon Moore]] slashes his face and is about to finish him when [[podrick-payne|Podrick]] pushes the knight into the water.',
      },
    ),
    inBooks(
      [20, 141],
      { it: 'Nella Fortezza di Maegor', en: 'Maegor’s Holdfast' },
      {
        it: 'Tyrion si risveglia da sogni febbrili nella Fortezza di Maegor, con il volto fasciato. Ha perso quasi tutto il naso e parte del labbro, ha una costola rotta e per una freccia ha rischiato di perdere un braccio. Suo padre [[tywin-lannister|Tywin]], ora Primo Cavaliere, si è preso la Torre del Primo Cavaliere. Tyrion fa cadere il papavero dalle mani del maestro della regina, chiede del vino, manda [[podrick-payne|Podrick]] a prendere vino dei sogni dal maestro Frenken e a chiamare [[bronn|Bronn]], e fa giurare allo scudiero di tacere su ciò che è successo al molo.',
        en: 'Tyrion wakes from fevered dreams in Maegor’s Holdfast, his face bandaged. Most of his nose is gone and part of his lip, he has a broken rib, and an arrow nearly cost him his arm. His father [[tywin-lannister|Tywin]], now Hand of the King, has taken the Tower of the Hand. Tyrion knocks the poppy from the queen’s maester’s hands, demands wine, sends [[podrick-payne|Podrick]] for dreamwine from Maester Frenken and for [[bronn|Bronn]], and swears the squire to silence about what happened at the docks.',
      },
    ),
    inBooks(
      [12, 89],
      { it: 'Una catena per la città', en: 'A chain for the city' },
      {
        it: 'Al Concilio ristretto arrivano le lettere di [[stannis-baratheon|Stannis]] che accusano [[cersei-lannister|Cersei]] di incesto. Tyrion consiglia di lasciar mormorare la gente, e [[petyr-baelish|Ditocorto]] propone di spargere la voce che la figlia di Stannis sia la bastarda di un giullare. Tyrion fa forgiare ai fabbri della città mille anelli di un’enorme catena, un dono per [[joffrey-baratheon|Joffrey]], dice a Cersei. Poi, passando da un bordello dietro la collina di Rhaenys e da un pozzo nascosto, incontra [[varys|Varys]] in un cunicolo e prosegue travestito fino alla casa di [[shae|Shae]].',
        en: 'Letters from [[stannis-baratheon|Stannis]] accusing [[cersei-lannister|Cersei]] of incest reach the small council. Tyrion advises letting people whisper, and [[petyr-baelish|Littlefinger]] proposes spreading the rumour that Stannis’s daughter is a fool’s bastard. Tyrion has the city’s smiths forge a thousand links of an immense chain, a gift for [[joffrey-baratheon|Joffrey]], he tells Cersei. Then, through a brothel behind Rhaenys’s Hill and a hidden shaft, he meets [[varys|Varys]] in a tunnel and rides on in disguise to [[shae|Shae]]’s manse.',
      },
    ),
    inBooks(
      [18, 123],
      { it: 'I preparativi della difesa', en: 'Preparing the defence' },
      {
        it: 'Tyrion manda i suoi uomini dei clan oltre le Acque Nere a razziare l’esercito di [[stannis-baratheon|Stannis]], e fa bruciare a [[bronn|Bronn]] le case lungo le mura vicino al molo. Non approva quando [[cersei-lannister|Cersei]] nomina nella Guardia reale [[osmund-kettleblack|ser Osmund Kettleblack]] al posto di ser Boros Blount, che ha consegnato [[tommen-baratheon|Tommen]] agli uomini di [[jacelyn-bywater|ser Jacelyn]]. [[hallyne|Hallyne]] riferisce di avere tredicimila giare di altofuoco, e [[varys|Varys]] scopre dei mercanti che tramano per prendere la Porta Vecchia; Tyrion ne ordina l’arresto.',
        en: 'Tyrion sends his clansmen across the Blackwater to raid [[stannis-baratheon|Stannis]]’s army, and has [[bronn|Bronn]] burn the houses along the wall by the quay. He disapproves when [[cersei-lannister|Cersei]] names [[osmund-kettleblack|Ser Osmund Kettleblack]] to the Kingsguard in place of Ser Boros Blount, who gave up [[tommen-baratheon|Tommen]] to [[jacelyn-bywater|Ser Jacelyn]]’s men. [[hallyne|Hallyne]] reports thirteen thousand jars of wildfire, and [[varys|Varys]] uncovers merchants plotting to seize the Old Gate; Tyrion orders their arrest.',
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
        it: 'Quando Jaime viene a sapere che [[catelyn-stark|Catelyn Stark]] ha fatto prigioniero suo fratello [[tyrion-lannister|Tyrion]], aspetta con i suoi uomini [[eddard-stark|Eddard Stark]], che esce da un bordello di Approdo del Re. Eddard dice che l’arresto è avvenuto per suo ordine e avverte che, se morirà lui, morirà anche Tyrion. Jaime lo risparmia e fa uccidere invece le sue guardie. Nello scontro muore [[jory-cassel|Jory Cassel]], il capitano della guardia di Eddard. Eddard resta ferito a una gamba, e Jaime se ne va.',
        en: 'When Jaime hears that [[catelyn-stark|Catelyn Stark]] has taken his brother [[tyrion-lannister|Tyrion]] prisoner, he waits with his men for [[eddard-stark|Eddard Stark]] as Eddard leaves a brothel in King’s Landing. Eddard says the arrest was made on his orders and warns that if he dies, Tyrion will die too. Jaime spares him and has his men kill Eddard’s guards instead. [[jory-cassel|Jory Cassel]], the captain of Eddard’s guard, dies in the fight. Eddard is left wounded in the leg, and Jaime rides away.',
      },
    ),
    onScreen(
      [7, 57],
      { it: 'Una dinastia o niente', en: 'A dynasty or nothing' },
      {
        it: 'Jaime raggiunge l’esercito del padre [[tywin-lannister|Tywin]] al confine delle Terre dei Fiumi, mentre Tywin scuoia un cervo nella sua tenda. Tywin gli rimprovera di aver lasciato vivere [[eddard-stark|Eddard Stark]] solo perché la sua vittoria per strada non era stata pulita. La guerra, dice, deciderà se la loro famiglia fonderà una dinastia destinata a durare mille anni o si estinguerà come i Targaryen. Affida a Jaime trentamila uomini e lo manda ad assediare il castello dei Tully, la famiglia di [[catelyn-stark|Catelyn]]: è stata Catelyn a prendere prigioniero [[tyrion-lannister|Tyrion]].',
        en: 'Jaime joins the army of his father [[tywin-lannister|Tywin]] at the border of the riverlands, where Tywin is skinning a stag in his tent. Tywin reproaches him for letting [[eddard-stark|Eddard Stark]] live because his victory in the street was not clean. The war, Tywin says, will decide whether their family founds a dynasty to last a thousand years or dies out like the Targaryens. He gives Jaime thirty thousand men and sends him to besiege the castle of the Tullys, the family of [[catelyn-stark|Catelyn]], who took [[tyrion-lannister|Tyrion]] prisoner.',
      },
    ),
    inBooks(
      [8, 56],
      { it: 'La guerra nelle Terre dei Fiumi', en: 'War in the riverlands' },
      {
        it: 'Jaime guida un esercito dei Lannister nelle Terre dei Fiumi. Al Dente d’Oro sbaraglia i lord dei fiumi che gli sbarrano la strada, poi sconfigge l’esercito dei Tully sotto le mura del loro castello, ne fa prigioniero il comandante e pone l’assedio al castello. La notizia raggiunge [[catelyn-stark|Catelyn Stark]] e suo figlio [[robb-stark|Robb]], che marciano verso sud.',
        en: 'Jaime leads a Lannister army into the riverlands. At the Golden Tooth he routs the river lords who stand in his way, then defeats the Tully army beneath the walls of the Tullys’ castle, takes its commander prisoner and lays siege to the castle. The news reaches [[catelyn-stark|Catelyn Stark]] and her son [[robb-stark|Robb]], who are marching south.',
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
        it: 'Nella battaglia del Bosco dei Sussurri, vinta da [[robb-stark|Robb Stark]], Jaime cerca di aprirsi la strada fino a Robb e uccide due figli di lord Karstark, Eddard e Torrhen, prima di essere fatto prigioniero. Quando viene portato davanti a Robb dopo la battaglia, molti alfieri di Robb ne vogliono la morte, e Jaime deve essere protetto da loro, soprattutto dal padre dei due giovani che ha ucciso.',
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
    inBooks(
      [8, 58],
      { it: 'Primo Cavaliere da lontano', en: 'Hand from afar' },
      {
        it: 'Alla prima udienza di re [[joffrey-baratheon|Joffrey]] ad Approdo del Re, lord Tywin Lannister viene nominato Primo Cavaliere del Re, anche se è lontano con il suo esercito. Il re prende il posto di [[robert-baratheon|Robert]], morto per una ferita di caccia, e [[eddard-stark|Eddard Stark]], che era Primo Cavaliere di Robert, è prigioniero come traditore.',
        en: 'At King [[joffrey-baratheon|Joffrey]]’s first court in King’s Landing, Lord Tywin Lannister is named Hand of the King, though he is away with his army. The king has taken the place of [[robert-baratheon|Robert]], who died of a hunting wound, and [[eddard-stark|Eddard Stark]], who was Robert’s Hand, is held prisoner as a traitor.',
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
      { it: 'I clan nell’avanguardia', en: 'The clans in the vanguard' },
      {
        it: 'Il figlio di Tywin, [[tyrion-lannister|Tyrion]], ha portato i clan delle montagne all’esercito del padre alla locanda all’incrocio. Prima della battaglia della Forca Verde, Tywin mette Tyrion e i clan delle montagne nell’avanguardia, sotto il comando di ser [[gregor-clegane|Gregor Clegane]]. Il fratello [[kevan-lannister|Kevan]] comanda al suo fianco e assegna a Tyrion uno scudiero.',
        en: 'Tywin’s son [[tyrion-lannister|Tyrion]] has brought the mountain clans to his father’s army at the inn at the crossroads. Before the battle on the Green Fork, Tywin places Tyrion and the mountain clans in the vanguard, under Ser [[gregor-clegane|Gregor Clegane]]. His brother [[kevan-lannister|Kevan]] commands at his side and gives Tyrion a squire.',
      },
    ),
    onScreen(
      [10, 70],
      { it: 'Un Primo Cavaliere al suo posto', en: 'A Hand in his place' },
      {
        it: '[[robb-stark|Robb Stark]] ha fatto prigioniero in battaglia il figlio maggiore di Tywin, [[jaime-lannister|Jaime]]. Tywin, che il nuovo re [[joffrey-baratheon|Joffrey]] ha nominato Primo Cavaliere, tiene consiglio con il fratello [[kevan-lannister|Kevan]] e i suoi comandanti. Manda il figlio minore [[tyrion-lannister|Tyrion]] ad Approdo del Re a fare le sue veci come Primo Cavaliere, e a tenere a freno sua figlia [[cersei-lannister|Cersei]] e il figlio di lei. Proibisce a Tyrion di portare a corte la sua puttana.',
        en: '[[robb-stark|Robb Stark]] has taken Tywin’s elder son [[jaime-lannister|Jaime]] prisoner in battle. Tywin, whom the new king [[joffrey-baratheon|Joffrey]] has named Hand of the King, holds council with his brother [[kevan-lannister|Kevan]] and his captains. He sends his younger son [[tyrion-lannister|Tyrion]] to King’s Landing to act as Hand in his place and to keep his daughter [[cersei-lannister|Cersei]] and her son in check. He forbids Tyrion to take his whore to court.',
      },
    ),
    inBooks(
      [10, 70],
      { it: 'La trappola fallita', en: 'The trap that failed' },
      {
        it: '[[robb-stark|Robb Stark]] ha fatto prigioniero in battaglia il figlio maggiore di Tywin, [[jaime-lannister|Jaime]]. Tywin, che il nuovo re [[joffrey-baratheon|Joffrey]] ha nominato Primo Cavaliere, tiene consiglio con il fratello [[kevan-lannister|Kevan]] e i suoi comandanti. Manda il figlio minore [[tyrion-lannister|Tyrion]] ad Approdo del Re a fare le sue veci come Primo Cavaliere, e a tenere a freno sua figlia [[cersei-lannister|Cersei]] e il figlio di lei. Proibisce a Tyrion di portare a corte la sua puttana. Tywin aveva messo Tyrion e i clan nell’avanguardia alla Forca Verde sperando che cedessero e trascinassero gli Stark in una trappola. Tyrion ha tenuto la posizione, e il piano è fallito.',
        en: '[[robb-stark|Robb Stark]] has taken Tywin’s elder son [[jaime-lannister|Jaime]] prisoner in battle. Tywin, whom the new king [[joffrey-baratheon|Joffrey]] has named Hand of the King, holds council with his brother [[kevan-lannister|Kevan]] and his captains. He sends his younger son [[tyrion-lannister|Tyrion]] to King’s Landing to act as Hand in his place and to keep his daughter [[cersei-lannister|Cersei]] and her son in check. He forbids Tyrion to take his whore to court. Tywin had put Tyrion and the clans in the vanguard on the Green Fork hoping they would break and draw the Starks into a trap. Tyrion held his ground, and the plan failed.',
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
        it: 'Cersei è la regina dei Sette Regni, moglie di re [[robert-baratheon|Robert]]. Arriva a Grande Inverno con il re, i figli e i fratelli [[jaime-lannister|Jaime]] e [[tyrion-lannister|Tyrion]]. [[eddard-stark|Eddard Stark]] le bacia l’anello, mentre Robert abbraccia la moglie di Eddard. Appena fatte le presentazioni, Robert chiede di scendere nelle cripte del castello per rendere omaggio a Lyanna, la sorella di Eddard, e Cersei non ne è contenta.',
        en: 'Cersei is the queen of the Seven Kingdoms, King [[robert-baratheon|Robert]]’s wife. She reaches Winterfell with the king, their children and her brothers [[jaime-lannister|Jaime]] and [[tyrion-lannister|Tyrion]]. [[eddard-stark|Eddard Stark]] kisses her ring, while Robert embraces Eddard’s wife. As soon as the children are introduced, Robert asks to go down to the castle’s crypts to pay his respects to Lyanna, Eddard’s sister, to Cersei’s displeasure.',
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
    onScreen(
      [11, 77],
      { it: 'Il potere è potere', en: 'Power is power' },
      {
        it: 'Cersei fa chiudere le porte della città ai profughi, ed è furiosa quando [[tyrion-lannister|Tyrion]] arriva come Primo Cavaliere in vece del padre. Quando [[petyr-baelish|Petyr Baelish]] le fa capire che sapere di lei e [[jaime-lannister|Jaime]] è potere, Cersei ordina alle guardie di prenderlo e di tagliargli la gola, poi le ferma: il potere è potere. [[joffrey-baratheon|Joffrey]] la interroga sulle voci sulla sua nascita e la insulta; lei lo schiaffeggia, e lui la avverte di non colpirlo mai più.',
        en: 'Cersei orders the city gates closed to refugees, and is livid when [[tyrion-lannister|Tyrion]] arrives as acting Hand. When [[petyr-baelish|Petyr Baelish]] hints that knowing about her and [[jaime-lannister|Jaime]] is power, she orders her guards to seize him and cut his throat, then calls them off: power is power. [[joffrey-baratheon|Joffrey]] asks her about the rumours of his parentage and insults her; she slaps him, and he warns her never to strike him again.',
      },
    ),
    onScreen(
      [12, 82],
      { it: 'La battuta migliore', en: 'The finest joke' },
      {
        it: 'Davanti al Concilio ristretto Cersei respinge le condizioni di pace di Robb Stark. Quando [[tyrion-lannister|Tyrion]] manda [[janos-slynt|Janos Slynt]] alla Barriera, lei lo affronta. Tyrion la avverte che sta perdendo il popolo; lei risponde che non le importa. Lui scherza su di lei e [[jaime-lannister|Jaime]], e Cersei gli dice che la sua battuta migliore è stata uccidere la loro madre venendo al mondo.',
        en: 'Cersei rejects Robb Stark’s peace terms before the small council. When [[tyrion-lannister|Tyrion]] sends [[janos-slynt|Janos Slynt]] to the Wall, she confronts him. He warns her she is losing the people; she answers that she does not care. He jokes about her and [[jaime-lannister|Jaime]], and she tells him his finest joke was killing their mother when he was born.',
      },
    ),
    onScreen(
      [16, 115],
      { it: 'La nave di Myrcella', en: 'Myrcella’s ship' },
      {
        it: 'Al porto Cersei guarda [[myrcella-baratheon|Myrcella]] partire per Dorne, e dice a [[tyrion-lannister|Tyrion]] che non gli perdonerà mai di averle portato via l’unica figlia. Ha ignorato i suoi avvertimenti sulla città affamata. Sulla via del ritorno la folla si rivolta contro [[joffrey-baratheon|Joffrey]], la città insorge e Cersei riesce a stento a raggiungere il castello.',
        en: 'At the docks Cersei watches [[myrcella-baratheon|Myrcella]] sail for Dorne, and tells [[tyrion-lannister|Tyrion]] she will never forgive him for sending her only daughter away. She has ignored his warnings about the starving city. On the way back the crowd turns on [[joffrey-baratheon|Joffrey]], the city riots, and Cersei barely reaches the castle.',
      },
    ),
    onScreen(
      [17, 126],
      { it: 'Piccola colomba', en: 'Little dove' },
      {
        it: 'Quando a [[sansa-stark|Sansa]] arriva il primo sangue, Cersei la conforta a modo suo. Le racconta che Robert andava a caccia ogni volta che lei partoriva, mentre [[jaime-lannister|Jaime]] le restava accanto, che Sansa non amerà mai [[joffrey-baratheon|Joffrey]] ma amerà i loro figli, e che più persone ami, più sei debole. Poi confida a [[tyrion-lannister|Tyrion]] di chiedersi se la crudeltà di Joffrey sia il prezzo del suo peccato con Jaime.',
        en: 'When [[sansa-stark|Sansa]] has her first blood, Cersei comforts her in her own way. She tells her that Robert went hunting each time she gave birth, while [[jaime-lannister|Jaime]] stayed at her side, that Sansa will never love [[joffrey-baratheon|Joffrey]] but will love their children, and that the more people you love, the weaker you are. Later she tells [[tyrion-lannister|Tyrion]] she wonders whether Joffrey’s cruelty is the price of her sin with Jaime.',
      },
    ),
    onScreen(
      [18, 128],
      { it: 'Un ostaggio per Joffrey', en: 'A hostage for Joffrey' },
      {
        it: 'Cersei teme per [[joffrey-baratheon|Joffrey]], che [[tyrion-lannister|Tyrion]] vuole mettere sulle mura nella battaglia imminente. Convinta che Tyrion trami contro suo figlio, fa prendere e picchiare la donna che crede l’amante di lui e gliela mostra: è [[ros|Ros]]. Lo avverte che Ros morirà in modo atroce se a Joffrey succederà qualcosa. Tyrion giura che gliela farà pagare.',
        en: 'Cersei fears for [[joffrey-baratheon|Joffrey]], whom [[tyrion-lannister|Tyrion]] means to put on the walls in the coming battle. Believing Tyrion is plotting against her son, she has the woman she takes for his lover seized and beaten, and shows her to him: [[ros|Ros]]. She warns that Ros will die horribly if any harm comes to Joffrey. Tyrion vows to pay her back.',
      },
    ),
    onScreen(
      [19, 136],
      { it: 'Sul Trono di Spade', en: 'On the Iron Throne' },
      {
        it: 'Durante la battaglia Cersei raccoglie le dame della corte nella Fortezza di Maegor, con [[ilyn-payne|ser Ilyn Payne]] al suo fianco e l’essenza di belladonna avuta da [[pycelle|Pycelle]]. Bevendo, racconta a [[sansa-stark|Sansa]] che cosa fanno i soldati alle donne quando una città cade, e fa domande a [[shae|Shae]]. Manda [[lancel-lannister|Lancel]] a riportare [[joffrey-baratheon|Joffrey]] via dalle mura, colpisce la ferita di Lancel quando lui protesta, e se ne va. Sul Trono di Spade racconta una storia a [[tommen-baratheon|Tommen]] e prepara il veleno per entrambi, finché [[tywin-lannister|Tywin]] e [[loras-tyrell|Loras]] non entrano con la notizia della vittoria.',
        en: 'During the battle Cersei shelters the court’s ladies in Maegor’s Holdfast, with [[ilyn-payne|Ser Ilyn Payne]] at her side and essence of nightshade from [[pycelle|Pycelle]]. Drinking, she tells [[sansa-stark|Sansa]] what soldiers do to women when a city falls, and questions [[shae|Shae]]. She has [[lancel-lannister|Lancel]] bring [[joffrey-baratheon|Joffrey]] back from the walls, strikes Lancel’s wound when he protests, and leaves. On the Iron Throne she tells [[tommen-baratheon|Tommen]] a story and readies the poison for them both, until [[tywin-lannister|Tywin]] and [[loras-tyrell|Loras]] come in with news of victory.',
      },
    ),
    onScreen(
      [20, 139],
      { it: 'Il fidanzamento sciolto', en: 'Set aside' },
      {
        it: 'Alla cerimonia che premia i vincitori, [[loras-tyrell|Loras Tyrell]] chiede al re di sposare [[margaery-tyrell|Margaery]], la sorella di Loras. Cersei e [[pycelle|Pycelle]] fingono di convincere [[joffrey-baratheon|Joffrey]] a sciogliere il fidanzamento con [[sansa-stark|Sansa Stark]] per il tradimento della famiglia di lei, e Joffrey accetta di sposare Margaery. Il padre di Cersei, [[tywin-lannister|Tywin]], è nominato Primo Cavaliere, e [[petyr-baelish|Ditocorto]] riceve Harrenhal.',
        en: 'At the court that rewards the victors, [[loras-tyrell|Loras Tyrell]] asks the king to wed his sister [[margaery-tyrell|Margaery]]. Cersei and [[pycelle|Pycelle]] make a show of persuading [[joffrey-baratheon|Joffrey]] to set aside his betrothal to [[sansa-stark|Sansa Stark]] for her family’s treachery, and Joffrey agrees to marry Margaery. Cersei’s father [[tywin-lannister|Tywin]] is named Hand of the King, and [[petyr-baelish|Littlefinger]] is given Harrenhal.',
      },
    ),
    inBooks(
      [11, 77],
      { it: 'Una lettera del padre', en: 'A letter from her father' },
      {
        it: '[[tyrion-lannister|Tyrion]] interrompe il Concilio ristretto con la lettera del loro padre che lo nomina Primo Cavaliere in sua vece, e Cersei la definisce assurda. Da sola con lui, ammette di avere soltanto [[sansa-stark|Sansa]]: Arya è fuggita. Dice che [[joffrey-baratheon|Joffrey]] ha voluto la morte di Eddard Stark contro il suo parere. Accetta che Tyrion provi a spaventare Joffrey per renderlo obbediente, purché non faccia nulla senza il suo consenso. Quando Tyrion dice di sapere di lei e [[jaime-lannister|Jaime]], lo schiaffeggia più volte. Poi gli racconta che [[lancel-lannister|Lancel]] ha dato a Robert vino forte prima del cinghiale.',
        en: '[[tyrion-lannister|Tyrion]] interrupts the small council with their father’s letter naming him acting Hand, and Cersei calls it absurd. Alone with him, she admits she has only [[sansa-stark|Sansa]]: Arya escaped. She says [[joffrey-baratheon|Joffrey]] ordered Eddard Stark’s death against her wishes. She agrees that he may try to frighten Joffrey into obedience, as long as he does nothing without her consent. When he says he knows about her and [[jaime-lannister|Jaime]], she slaps him again and again. Then she tells him that [[lancel-lannister|Lancel]] gave Robert strongwine before the boar.',
      },
    ),
    inBooks(
      [15, 94],
      { it: 'Lacrime per Myrcella', en: 'Tears for Myrcella' },
      {
        it: 'Cersei affronta [[tyrion-lannister|Tyrion]] nel solario di lui, furiosa perché lui vuole mandare [[myrcella-baratheon|Myrcella]] a Dorne come pupilla del principe Doran, in sposa al figlio di Doran. Teme che Doran uccida la bambina per vendicare la sorella, e schiaffeggia Tyrion. Quando lui le dice che Renly e Stannis metterebbero la testa di Myrcella accanto alla sua, Cersei piange per la prima volta da quando erano bambini, e si sfoga contro l’inerzia del padre e la prigionia di [[jaime-lannister|Jaime]]. Alla fine Tyrion sa che accetterà.',
        en: 'Cersei confronts [[tyrion-lannister|Tyrion]] in his solar, furious that he means to send [[myrcella-baratheon|Myrcella]] to Dorne as a ward of Prince Doran, to wed Doran’s son. She fears Doran will kill the girl to avenge his sister, and slaps Tyrion. When he says Renly and Stannis would put Myrcella’s head beside hers, she weeps for the first time since they were children, and rages at their father’s idleness and [[jaime-lannister|Jaime]]’s capture. By the end Tyrion knows she will agree.',
      },
    ),
    inBooks(
      [15, 110],
      { it: 'Le nozze con i Tyrell', en: 'The Tyrell match' },
      {
        it: 'Alla notizia della morte di Renly, Cersei obietta che [[joffrey-baratheon|Joffrey]] è promesso a [[sansa-stark|Sansa]], ma [[tyrion-lannister|Tyrion]] e il Concilio sostengono che sposi [[margaery-tyrell|Margaery Tyrell]], che porterebbe cinquantamila spade. Cersei acconsente, avvertendoli per il caso che a Joffrey la ragazza non piaccia. Né lei né Tyrion vogliono lasciare la città per trattare con i Tyrell, e [[petyr-baelish|Ditocorto]] si offre di andare. Poi Cersei dice a Tyrion che è stato di grande aiuto e lo bacia sulla fronte.',
        en: 'When news comes of Renly’s death, Cersei objects that [[joffrey-baratheon|Joffrey]] is promised to [[sansa-stark|Sansa]], but [[tyrion-lannister|Tyrion]] and the council argue for marrying him to [[margaery-tyrell|Margaery Tyrell]], who would bring fifty thousand swords. Cersei agrees, with a warning in case Joffrey does not like the girl. Neither she nor Tyrion will leave the city to treat with the Tyrells, and [[petyr-baelish|Littlefinger]] volunteers. Afterwards she tells Tyrion he has been a great help and kisses him on the brow.',
      },
    ),
    inBooks(
      [17, 126],
      { it: 'L’amore è veleno', en: 'Love is poison' },
      {
        it: 'Le cameriere di [[sansa-stark|Sansa]] la sorprendono a bruciare le lenzuola del suo primo sangue e la portano da Cersei. La regina la conforta: [[joffrey-baratheon|Joffrey]] è stato difficile da partorire, e Robert era a caccia quando è nato. Sansa forse non amerà Joffrey, le dice, ma amerà i figli che gli darà. Quando Sansa dice di amarlo, Cersei le consiglia di imparare bugie migliori prima che arrivi Stannis. Robert voleva essere amato, dice, e così [[tyrion-lannister|Tyrion]]: l’amore è un veleno, dolce ma mortale lo stesso.',
        en: '[[sansa-stark|Sansa]]’s maids catch her burning the sheets of her first blood and bring her to Cersei. The queen comforts her: [[joffrey-baratheon|Joffrey]] was hard to bear, and Robert was out hunting when he was born. Sansa may not love him, she says, but she will love the children she bears him. When Sansa says she loves him, Cersei tells her to learn better lies before Stannis comes. Robert wanted to be loved, she says, and so does [[tyrion-lannister|Tyrion]]: love is poison, sweet but deadly all the same.',
      },
    ),
    inBooks(
      [18, 128],
      { it: 'Una ragazza picchiata', en: 'A beaten girl' },
      {
        it: 'A cena Cersei avverte [[tyrion-lannister|Tyrion]] che [[varys|Varys]] dà a tutti informazioni quanto basta per sembrare indispensabile. Poi fa entrare due fratelli di [[osmund-kettleblack|ser Osmund]] con una ragazza picchiata che crede l’amante di Tyrion, [[alayaya|Alayaya]]: un Lannister paga sempre i suoi debiti, e lui trama contro di lei da quando è arrivato. Alla ragazza non sarà fatto del male, dice, finché [[joffrey-baratheon|Joffrey]] e [[tommen-baratheon|Tommen]] saranno al sicuro. Tyrion minaccia di trattare Tommen allo stesso modo, e Cersei gli urla di andarsene.',
        en: 'Over supper Cersei warns [[tyrion-lannister|Tyrion]] that [[varys|Varys]] feeds them all just enough to seem indispensable. Then she has two of [[osmund-kettleblack|Ser Osmund]]’s brothers bring in a beaten girl she takes for Tyrion’s lover, [[alayaya|Alayaya]]: a Lannister always pays her debts, and he has plotted against her since he arrived. The girl will be unharmed, she says, as long as [[joffrey-baratheon|Joffrey]] and [[tommen-baratheon|Tommen]] are safe. Tyrion threatens to treat Tommen the same way, and Cersei shouts at him to get out.',
      },
    ),
    inBooks(
      [19, 134],
      { it: 'La sala da ballo della regina', en: 'The Queen’s Ballroom' },
      {
        it: 'Mentre infuria la battaglia, Cersei ospita le nobildonne della città nella sala da ballo della regina, e beve. Racconta a [[sansa-stark|Sansa]] che cosa verrebbe fatto loro se la città cadesse, fa decapitare dei servi sorpresi a rubare cavalli e rifiuta rifugio al popolo davanti alle porte. Quando le notizie peggiorano fa riportare [[joffrey-baratheon|Joffrey]] dalle mura. Sa che Sansa va a pregare nel parco degli dèi, e le rivela che [[ilyn-payne|ser Ilyn Payne]] è lì per loro: Stannis non le prenderà vive.',
        en: 'While the battle rages, Cersei hosts the city’s highborn women in the Queen’s Ballroom, drinking. She tells [[sansa-stark|Sansa]] what would be done to them if the city fell, orders servants caught stealing horses beheaded, and refuses shelter to the smallfolk at the gates. When the news turns bad she has [[joffrey-baratheon|Joffrey]] brought back from the walls. She knows Sansa has been praying in the godswood, and reveals that [[ilyn-payne|Ser Ilyn Payne]] is there for them: Stannis will not take them alive.',
      },
    ),
    inBooks(
      [19, 136],
      { it: 'Il ponte levatoio', en: 'The drawbridge' },
      {
        it: '[[lancel-lannister|Lancel]], ferito, dice a Cersei che la battaglia sembra perduta: [[tyrion-lannister|Tyrion]] forse è morto, [[sandor-clegane|il Mastino]] è sparito e le cappe dorate hanno gettato le lance quando [[joffrey-baratheon|Joffrey]] è stato portato via dalle mura. Cersei ordina di alzare il ponte levatoio della Fortezza di Maegor non appena suo figlio sarà dentro. Quando Lancel la supplica di lasciare il re a incoraggiare i difensori, lei colpisce la ferita di Lancel e lascia la sala da ballo.',
        en: '[[lancel-lannister|Lancel]], wounded, tells Cersei the battle seems lost: [[tyrion-lannister|Tyrion]] may be dead, [[sandor-clegane|Sandor Clegane]] has vanished, and the gold cloaks threw down their spears when [[joffrey-baratheon|Joffrey]] was taken from the walls. Cersei orders the drawbridge of Maegor’s Holdfast raised once her son is inside. When Lancel begs her to let the king stay and inspire the defenders, she strikes his wound and leaves the ballroom.',
      },
    ),
    onScreen(
      [13, 99],
      { it: 'Le nozze con Dorne', en: 'The Dornish match' },
      {
        it: 'Cersei organizza una cena imbarazzante con i figli e la sua prigioniera, [[sansa-stark|Sansa]]. Poi affronta [[tyrion-lannister|Tyrion]] per il suo piano di dare [[myrcella-baratheon|Myrcella]] in sposa a Casa Martell, un piano che Tyrion aveva confidato soltanto a [[pycelle|Pycelle]]. Tyrion fa arrestare Pycelle per averglielo riferito, e non cede alle proteste della sorella.',
        en: 'Cersei hosts an awkward dinner for her children and her captive, [[sansa-stark|Sansa]]. Then she confronts [[tyrion-lannister|Tyrion]] over his plan to marry [[myrcella-baratheon|Myrcella]] into House Martell, a plan he told only [[pycelle|Pycelle]]. Tyrion has Pycelle arrested for passing it on, and holds to the match over his sister’s protests.',
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
        it: 'Joffrey non vuole far visita ai genitori di [[bran-stark|Bran]], ferito in una caduta, e lo zio [[tyrion-lannister|Tyrion]] lo prende a schiaffi. Durante il viaggio verso sud, in compagnia di [[sansa-stark|Sansa]], trova [[arya-stark|Arya]] che si allena con la spada insieme a [[mycah|Mycah]], il figlio del macellaio. Joffrey minaccia il ragazzo con la sua spada, Dente di Leone, e comincia a fargli del male. Arya lo colpisce, la sua lupa [[nymeria|Nymeria]] gli morde il braccio e Arya getta la spada nel fiume. Davanti al re Joffrey mente su quanto è accaduto, e Sansa non dà ragione alla sorella. Mycah viene ucciso dalla guardia del corpo del principe.',
        en: 'Joffrey will not call on the parents of [[bran-stark|Bran]], hurt in a fall, and his uncle [[tyrion-lannister|Tyrion]] slaps him. On the journey south, out with [[sansa-stark|Sansa]], he comes upon [[arya-stark|Arya]] practising swordplay with [[mycah|Mycah]], the butcher’s boy. Joffrey threatens the boy with his sword, Lion’s Tooth, and starts to hurt him. Arya hits him, her wolf [[nymeria|Nymeria]] bites his arm and Arya throws the sword into the river. Before the king Joffrey lies about what happened, and Sansa does not back her sister. Mycah is cut down by the prince’s sworn shield.',
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
        it: 'Davanti al Grande Tempio di Baelor, [[eddard-stark|Eddard Stark]] confessa il tradimento e riconosce Joffrey come vero re. Joffrey dice alla folla che sua madre [[cersei-lannister|Cersei]] vorrebbe lasciare che Eddard prenda il nero e che [[sansa-stark|Sansa]] ha chiesto pietà per il padre. Ma le donne hanno il cuore tenero, dice, e un traditore non resta impunito. Ordina a ser [[ilyn-payne|Ilyn Payne]] di portargli la testa di Eddard, e ser Ilyn lo decapita con Ghiaccio, la spada di Eddard.',
        en: 'Before the Great Sept of Baelor, [[eddard-stark|Eddard Stark]] confesses to treason and acknowledges Joffrey as the true king. Joffrey tells the crowd that his mother [[cersei-lannister|Cersei]] would let Eddard take the black and that [[sansa-stark|Sansa]] has begged mercy for her father. But women have soft hearts, he says, and a traitor does not go unpunished. He orders Ser [[ilyn-payne|Ilyn Payne]] to bring him Eddard’s head, and Ser Ilyn beheads him with Ice, Eddard’s own sword.',
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
    onScreen(
      [11, 77],
      { it: 'Il giorno del nome di Joffrey', en: 'Joffrey’s name day' },
      {
        it: 'Joffrey organizza un torneo sulle mura della Fortezza Rossa per il suo giorno del nome. Quando [[dontos-hollard|ser Dontos Hollard]] arriva in ritardo e ubriaco, il re ordina di versargli in gola un barile di vino. [[sansa-stark|Sansa]] dice che uccidere un uomo nel proprio giorno del nome porta sfortuna, [[sandor-clegane|Sandor Clegane]] le dà ragione, e Joffrey fa invece di Dontos il suo giullare. Più tardi interroga la madre, [[cersei-lannister|Cersei]], sulle voci sulla sua nascita, e la minaccia di morte quando lei lo schiaffeggia.',
        en: 'Joffrey holds a tournament on the walls of the Red Keep for his name day. When [[dontos-hollard|Ser Dontos Hollard]] arrives late and drunk, the king orders a barrel of wine poured down his throat. [[sansa-stark|Sansa]] says that killing a man on one’s name day is bad luck, [[sandor-clegane|Sandor Clegane]] backs her, and Joffrey makes Dontos his fool instead. Later he asks his mother, [[cersei-lannister|Cersei]], about the rumours of his parentage, and threatens her with death when she slaps him.',
      },
    ),
    onScreen(
      [14, 106],
      {
        it: 'Una balestra nella sala del trono',
        en: 'A crossbow in the throne room',
      },
      {
        it: 'Furioso per la vittoria di Robb Stark, Joffrey fa portare [[sansa-stark|Sansa]] davanti alla corte, la minaccia con una balestra, poi la fa picchiare e spogliare da [[meryn-trant|ser Meryn Trant]], risparmiandole il viso. [[tyrion-lannister|Tyrion]] interviene, gli dà del mezzo idiota e gli ricorda com’è finito il Re Folle. Poi a Joffrey vengono mandate due donne del bordello di Ditocorto, [[ros|Ros]] e [[daisy|Daisy]]: puntando la balestra costringe Ros a picchiare Daisy, per mandare un messaggio a Tyrion.',
        en: 'Furious at Robb Stark’s victory, Joffrey has [[sansa-stark|Sansa]] brought before the court, threatens her with a crossbow, then has [[meryn-trant|Ser Meryn Trant]] beat her and strip her, sparing her face. [[tyrion-lannister|Tyrion]] stops it, calls him a halfwit and reminds him how the Mad King ended. Joffrey is then sent two women from Littlefinger’s brothel, [[ros|Ros]] and [[daisy|Daisy]]: at crossbow point he forces Ros to beat Daisy, to send Tyrion a message.',
      },
    ),
    onScreen(
      [16, 115],
      { it: 'Sterco in faccia al re', en: 'Dung in the king’s face' },
      {
        it: 'Tornando dalla partenza di [[myrcella-baratheon|Myrcella]], Joffrey viene colpito in faccia dallo sterco e ordina alle poche guardie di uccidere tutta la folla. La città insorge, e il corteo reale raggiunge a stento il castello. Lì Joffrey continua a strillare che vuole la folla morta finché [[tyrion-lannister|Tyrion]] non lo schiaffeggia; il re non reagisce. Si rifiuta di mandare uomini a cercare [[sansa-stark|Sansa]], dispersa tra la folla.',
        en: 'Riding back from [[myrcella-baratheon|Myrcella]]’s departure, Joffrey is hit in the face with dung and orders his few guards to kill the whole crowd. The city riots, and the royal party barely reaches the castle. There Joffrey keeps shrieking for the mob’s deaths until [[tyrion-lannister|Tyrion]] slaps him; the king does not strike back. He refuses to send men after [[sansa-stark|Sansa]], lost in the crowd.',
      },
    ),
    onScreen(
      [19, 135],
      { it: 'Il re lascia le mura', en: 'The king leaves the walls' },
      {
        it: 'Sulle mura durante la battaglia Joffrey rimprovera [[tyrion-lannister|Tyrion]] perché non manda la flotta contro [[stannis-baratheon|Stannis]]. Quando [[sandor-clegane|il Mastino]] abbandona lo scontro, maledice davanti a tutti la Guardia reale, la città e il re. Mandato da Cersei, [[lancel-lannister|Lancel]] viene a riportare Joffrey alla Fortezza Rossa. Joffrey lo segue di buon grado, lasciando [[mandon-moore|ser Mandon Moore]] e [[boros-blount|ser Boros Blount]] a combattere in suo nome, e le cappe dorate si perdono d’animo.',
        en: 'On the walls during the battle Joffrey berates [[tyrion-lannister|Tyrion]] for not sending the fleet against [[stannis-baratheon|Stannis]]. When [[sandor-clegane|Sandor Clegane]] walks away from the fight, he curses the Kingsguard, the city and the king in front of everyone. Sent by Cersei, [[lancel-lannister|Lancel]] comes to bring Joffrey back to the Red Keep. Joffrey goes willingly, leaving [[mandon-moore|Ser Mandon Moore]] and [[boros-blount|Ser Boros Blount]] to fight in his name, and the gold cloaks lose heart.',
      },
    ),
    onScreen(
      [20, 139],
      { it: 'Un nuovo fidanzamento', en: 'A new betrothal' },
      {
        it: 'Alla cerimonia che onora i vincitori, Joffrey nomina Primo Cavaliere il nonno [[tywin-lannister|Tywin]] e dà Harrenhal a [[petyr-baelish|Ditocorto]] per l’alleanza con i Tyrell. [[loras-tyrell|Loras Tyrell]] gli chiede di sposare la sorella, [[margaery-tyrell|Margaery]]. Su sollecitazione di [[cersei-lannister|Cersei]] e [[pycelle|Pycelle]], Joffrey scioglie il fidanzamento con [[sansa-stark|Sansa]] per il tradimento della famiglia di lei, e accetta di sposare Margaery.',
        en: 'At the court that honours the victors, Joffrey names his grandfather [[tywin-lannister|Tywin]] Hand of the King and gives Harrenhal to [[petyr-baelish|Littlefinger]] for the Tyrell alliance. [[loras-tyrell|Loras Tyrell]] asks him to wed his sister [[margaery-tyrell|Margaery]]. At the urging of [[cersei-lannister|Cersei]] and [[pycelle|Pycelle]], Joffrey sets aside his betrothal to [[sansa-stark|Sansa]] for her family’s treachery, and agrees to marry Margaery.',
      },
    ),
    inBooks(
      [11, 76],
      { it: 'La cometa e il giullare', en: 'The comet and the fool' },
      {
        it: 'Il torneo per il giorno del nome di Joffrey è misero, e il suo umore si incupisce. Quando [[dontos-hollard|ser Dontos]] si presenta ubriaco alla sua giostra, il re vuole farlo affogare in una botte di vino. [[sansa-stark|Sansa]] dice che uccidere nel proprio giorno del nome porta sfortuna, [[sandor-clegane|il Mastino]] le dà ragione, e lei propone di farne un giullare; a Joffrey l’idea piace. Ride quando [[tommen-baratheon|Tommen]] viene disarcionato da una quintana. Poi arriva [[tyrion-lannister|Tyrion]], e Joffrey gli dice che come dono avrebbe preferito la testa di Robb.',
        en: 'Joffrey’s name-day tourney is a poor show, and his mood darkens. When [[dontos-hollard|Ser Dontos]] comes drunk to his tilt, the king wants him drowned in a cask of wine. [[sansa-stark|Sansa]] says it is bad luck to kill on one’s name day, [[sandor-clegane|Sandor Clegane]] agrees, and she suggests making Dontos a fool instead; Joffrey likes the idea. He laughs when [[tommen-baratheon|Tommen]] is unhorsed by a quintain. Then [[tyrion-lannister|Tyrion]] rides in, and Joffrey tells him he would rather have had Robb’s head as a gift.',
      },
    ),
    inBooks(
      [14, 106],
      { it: 'Sansa paga per Robb', en: 'Sansa answers for Robb' },
      {
        it: 'Dopo la vittoria di Robb a Oxcross, Joffrey fa portare [[sansa-stark|Sansa]] nel cortile inferiore a rispondere dei tradimenti del fratello. La colpirebbe con la balestra, ma sua madre dice che allora ucciderebbero Jaime. Ordina al [[sandor-clegane|Mastino]] di picchiarla; [[dontos-hollard|Dontos]] la colpisce invece con un melone, e il re fa picchiare Sansa da ser Boros Blount e le fa strappare il corpetto. Arriva [[tyrion-lannister|Tyrion]], che gli chiede se sa che fine ha fatto il Re Folle e gli dice di usare di più le orecchie e meno la bocca.',
        en: 'After Robb’s victory at Oxcross, Joffrey has [[sansa-stark|Sansa]] brought to the lower bailey to answer for her brother’s treasons. He would shoot her with his crossbow, but his mother says they would kill Jaime. He orders [[sandor-clegane|Sandor Clegane]] to hit her; [[dontos-hollard|Dontos]] clubs her with a melon instead, and the king has Ser Boros Blount beat her and tear open her bodice. [[tyrion-lannister|Tyrion]] arrives, asks whether he knows what became of the Mad King, and tells him to use his ears more and his mouth less.',
      },
    ),
    inBooks(
      [16, 115],
      { it: 'La corona nella polvere', en: 'The crown in the dirt' },
      {
        it: 'Tornando dal porto dopo la partenza di [[myrcella-baratheon|Myrcella]] per Dorne, Joffrey viene colpito in faccia dallo sterco. Ordina al [[sandor-clegane|Mastino]] di portargli l’uomo che l’ha lanciato, e la folla affamata si scaglia contro il corteo reale. Alle porte del castello Joffrey inveisce contro i traditori finché [[tyrion-lannister|Tyrion]] non lo schiaffeggia così forte da fargli volare via la corona e non lo butta a terra: ha aizzato il suo cane contro di loro, che cosa si aspettava che facessero?',
        en: 'Riding back from the harbour after [[myrcella-baratheon|Myrcella]] sails for Dorne, Joffrey is struck in the face with dung. He orders [[sandor-clegane|Sandor Clegane]] to bring him the man who threw it, and the starving crowd turns on the royal party. At the castle gates Joffrey rants about traitors until [[tyrion-lannister|Tyrion]] slaps him so hard his crown flies off and shoves him to the ground: he set his dog on them, what did he imagine they would do?',
      },
    ),
    inBooks(
      [19, 133],
      { it: 'I traditori oltre le mura', en: 'The traitors over the walls' },
      {
        it: 'Prima della battaglia Joffrey costringe [[sansa-stark|Sansa]] a baciare la sua nuova spada, e promette di uccidere Stannis con quella, e anche Robb. Sulle mura, mentre l’altofuoco brucia le flotte sulle Acque Nere, si lamenta di aver perso le sue navi. Con il permesso di [[tyrion-lannister|Tyrion]] fa lanciare con le catapulte oltre le mura i mercanti che volevano prendere una porta per Stannis, nudi e con le corna inchiodate alla testa. Tyrion ordina a [[osmund-kettleblack|ser Osmund]] di tenere il re al sicuro, ma tra i difensori.',
        en: 'Before the battle Joffrey makes [[sansa-stark|Sansa]] kiss his new sword, and promises to kill Stannis with it, and Robb too. On the walls, while the wildfire burns the fleets on the Blackwater, he complains about losing his own ships. With [[tyrion-lannister|Tyrion]]’s leave he has the merchants who plotted to seize a gate for Stannis catapulted naked over the walls, with antlers nailed to their heads. Tyrion orders [[osmund-kettleblack|Ser Osmund]] to keep him safe, but among the defenders.',
      },
    ),
    inBooks(
      [20, 139],
      { it: 'La cerimonia delle ricompense', en: 'The court of rewards' },
      {
        it: 'Nella sala del trono Joffrey nomina Primo Cavaliere il nonno [[tywin-lannister|Tywin]]. [[garlan-tyrell|Ser Garlan Tyrell]] gli chiede di sposare la sorella [[margaery-tyrell|Margaery]], e l’Alto Septon dichiara nullo il fidanzamento del re con [[sansa-stark|Sansa]] per la ribellione della casa di lei. Joffrey ricompensa i vincitori: fa di [[petyr-baelish|Ditocorto]] il signore di Harrenhal e del piromante [[hallyne|Hallyne]] un lord senza terre. Quando un cavaliere prigioniero lo chiama abominio nato dall’incesto, Joffrey nella rabbia si taglia la mano sul Trono di Spade, e viene portato via per farsi curare.',
        en: 'In the throne room Joffrey names his grandfather [[tywin-lannister|Tywin]] Hand of the King. [[garlan-tyrell|Ser Garlan Tyrell]] asks him to wed his sister [[margaery-tyrell|Margaery]], and the High Septon declares his betrothal to [[sansa-stark|Sansa]] void for her house’s rebellion. Joffrey rewards the victors, making [[petyr-baelish|Littlefinger]] lord of Harrenhal and the pyromancer [[hallyne|Hallyne]] a lord without lands. When a captive knight calls him an abomination born of incest, Joffrey cuts his hand on the Iron Throne in his anger, and is taken away to be tended.',
      },
    ),
  ],
  'robert-baratheon': [
    inBoth(
      [1, 5],
      { it: 'Il re a Grande Inverno', en: 'The king at Winterfell' },
      {
        it: 'Robert è il re dei Sette Regni. Arriva a Grande Inverno con la regina [[cersei-lannister|Cersei]] e la corte e abbraccia il suo vecchio amico [[eddard-stark|Eddard Stark]]. Tra l’impazienza della regina, vuole scendere subito nelle cripte, dove è sepolta Lyanna, la sorella di Eddard, che un tempo era stata promessa a lui. Dice a Eddard che ogni notte sogna di uccidere Rhaegar Targaryen. Poi offre a Eddard il posto di Primo Cavaliere del Re e propone di dare in sposa [[sansa-stark|Sansa]] a suo figlio [[joffrey-baratheon|Joffrey]]. Eddard chiede tempo per pensarci.',
        en: 'Robert is the king of the Seven Kingdoms. He reaches Winterfell with Queen [[cersei-lannister|Cersei]] and the court and embraces his old friend [[eddard-stark|Eddard Stark]]. To the queen’s impatience, he wants to go straight down to the crypts, where Eddard’s sister Lyanna lies, who was once promised to him. He says that every night he dreams of killing Rhaegar Targaryen. Then he offers Eddard the post of Hand of the King and proposes to marry [[sansa-stark|Sansa]] to his son [[joffrey-baratheon|Joffrey]]. Eddard asks for time to think it over.',
      },
    ),
    inBoth(
      [2, 17],
      { it: 'Il giudizio del re', en: 'The king’s judgment' },
      {
        it: 'Durante il viaggio verso sud, [[arya-stark|Arya]] e il principe [[joffrey-baratheon|Joffrey]], figlio del re, vengono condotti davanti a Robert dopo uno scontro in cui la lupa di Arya ha morso il principe. Joffrey mente, e [[sansa-stark|Sansa]] non conferma il racconto della sorella. Robert stabilisce che ogni padre punirà il proprio figlio, ma la regina [[cersei-lannister|Cersei]] pretende la morte del lupo. Quando non lo trovano, Robert acconsente che al suo posto venga ucciso quello di Sansa, [[lady-direwolf|Lady]]. [[eddard-stark|Eddard]] la uccide con le proprie mani.',
        en: 'On the journey south, [[arya-stark|Arya]] and Robert’s son [[joffrey-baratheon|Joffrey]] are brought before Robert after a quarrel in which Arya’s wolf bit the prince. Joffrey lies, and [[sansa-stark|Sansa]] does not back her sister’s account. Robert rules that each father will discipline his own child, but Queen [[cersei-lannister|Cersei]] demands the wolf’s death. When it cannot be found, Robert agrees that Sansa’s wolf, [[lady-direwolf|Lady]], will be killed in its place. [[eddard-stark|Eddard]] kills her himself.',
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
        it: 'Al Concilio ristretto Robert viene a sapere che [[daenerys-targaryen|Daenerys Targaryen]], sposa di un khal dothraki, aspetta un figlio. Vuole che lei muoia. [[eddard-stark|Eddard Stark]] dice che uccidere una ragazza e il bambino che porta in grembo sarebbe disonorevole, ma quasi tutto il concilio dà ragione al re. Robert ordina a Eddard, come suo Primo Cavaliere, di provvedere. Eddard rifiuta e si dimette, tra la furia del re, che non si aspettava di perdere il suo vecchio amico.',
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
      { it: 'Il Concilio ristretto', en: 'The small council' },
      {
        it: 'Renly siede nel Concilio ristretto del fratello, re [[robert-baratheon|Robert]], insieme a [[petyr-baelish|Ditocorto]], al gran maestro [[pycelle|Pycelle]] e a [[varys|Varys]]. Quando [[eddard-stark|Eddard Stark]] arriva nella capitale come nuovo Primo Cavaliere del Re, viene subito convocato al concilio. Lì scopre che la corona è piena di debiti e che Robert ha ordinato un torneo in suo onore. Eddard vuole parlarne con il re prima di approvare una spesa simile.',
        en: 'Renly sits on the small council of his brother, King [[robert-baratheon|Robert]], with [[petyr-baelish|Littlefinger]], Grand Maester [[pycelle|Pycelle]] and [[varys|Varys]]. When [[eddard-stark|Eddard Stark]] reaches the capital as the new Hand of the King, he is summoned to the council at once. There he learns that the crown is deep in debt and that Robert has ordered a tourney in his honour. Eddard wants to speak to the king before agreeing to such an expense.',
      },
    ),
    onScreen(
      [5, 30],
      { it: 'Il Cavaliere di Fiori', en: 'The Knight of Flowers' },
      {
        it: 'Al torneo Renly scommette con [[petyr-baelish|Ditocorto]] sul suo amante, ser [[loras-tyrell|Loras Tyrell]], contro [[gregor-clegane|Gregor Clegane]], e vince. Al Concilio ristretto sostiene il re, che vuole morta [[daenerys-targaryen|Daenerys Targaryen]]. In camera, Loras lo esorta a reclamare la corona per sé e gli offre l’appoggio della sua ricca casata. Renly risponde di essere solo quarto nella linea di successione, ma Loras ribatte che il popolo lo ama perché è gentile e non gode della violenza come i suoi fratelli.',
        en: 'At the tourney Renly bets with [[petyr-baelish|Littlefinger]] on his lover, Ser [[loras-tyrell|Loras Tyrell]], against [[gregor-clegane|Gregor Clegane]], and wins. At the small council he backs the king, who wants [[daenerys-targaryen|Daenerys Targaryen]] dead. In their chamber, Loras urges him to claim the crown for himself and offers the support of his rich house. Renly answers that he is only fourth in line to the throne, but Loras argues that the people love him because he is kind and takes no joy in violence, unlike his brothers.',
      },
    ),
    inBooks(
      [5, 34],
      { it: 'Un errore lasciarli vivere', en: 'A mistake to let them live' },
      {
        it: 'Al Concilio ristretto [[varys|Varys]] riferisce che [[daenerys-targaryen|Daenerys Targaryen]] aspetta un figlio, e re [[robert-baratheon|Robert]] vuole che muoia. Renly osserva che è stato un errore lasciare in vita lei e il fratello così a lungo. Quando si discute di come farlo, propone di servirsi di ser [[jorah-mormont|Jorah Mormont]], che desidera il perdono del re. [[eddard-stark|Eddard Stark]] si rifiuta di prendervi parte e si dimette da Primo Cavaliere.',
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
    onScreen(
      [16, 115],
      { it: 'Mandata a Dorne', en: 'Sent to Dorne' },
      {
        it: '[[tyrion-lannister|Tyrion]] ha promesso Myrcella a Casa Martell di Dorne: resterà lì finché non avrà l’età per sposare il principe Trystane. Tutta la corte, tra cui [[joffrey-baratheon|Joffrey]], [[cersei-lannister|Cersei]] e [[tommen-baratheon|Tommen]], la saluta al porto, e l’Alto Septon benedice la sua partenza. Cersei ha il cuore spezzato.',
        en: '[[tyrion-lannister|Tyrion]] has promised Myrcella to House Martell of Dorne: she will stay there until she is old enough to marry Prince Trystane. The whole court, [[joffrey-baratheon|Joffrey]], [[cersei-lannister|Cersei]] and [[tommen-baratheon|Tommen]] among them, sees her off at the docks, and the High Septon blesses her departure. Cersei is heartbroken.',
      },
    ),
    inBooks(
      [16, 115],
      { it: 'In viaggio verso Braavos', en: 'Sailing for Braavos' },
      {
        it: 'Myrcella lascia Approdo del Re per Dorne, dove sarà pupilla del principe Doran e in seguito sposerà suo figlio Trystane. [[tyrion-lannister|Tyrion]] manda con lei [[arys-oakheart|ser Arys Oakheart]] della Guardia reale come scudo giurato. Salpa con una piccola flotta per Braavos, da dove navi braavosiane la porteranno a destinazione. Il principe Doran ha promesso di schierare i suoi vessilli sui passi di montagna quando lei sarà al sicuro a Lancia del Sole.',
        en: 'Myrcella leaves King’s Landing for Dorne, where she is to be a ward of Prince Doran and later marry his son Trystane. [[tyrion-lannister|Tyrion]] sends [[arys-oakheart|Ser Arys Oakheart]] of the Kingsguard with her as her sworn shield. She sails with a small fleet to Braavos, from where Braavosi ships will take her the rest of the way. Prince Doran has promised to move his banners into the high passes once she is safe at Sunspear.',
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
        it: 'Prima del torneo Lancel non riesce a far entrare re [[robert-baratheon|Robert]] nell’armatura. Il re lo manda a cercare un allarga-corazza, un attrezzo che non esiste, ed [[eddard-stark|Eddard Stark]] dice chiaro al re che è troppo grasso per la sua armatura. Il re ha poca pazienza con Lancel e lo prende spesso in giro.',
        en: 'Before the tourney Lancel cannot get King [[robert-baratheon|Robert]] into his armour. The king sends him off to fetch a breastplate stretcher, a tool that does not exist, and [[eddard-stark|Eddard Stark]] tells the king plainly that he is too fat for his armour. The king has little patience with Lancel and often makes fun of him.',
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
    onScreen(
      [14, 103],
      { it: 'Scoperto', en: 'Caught out' },
      {
        it: 'Lancel porta a [[tyrion-lannister|Tyrion]] nel cuore della notte l’ordine di Cersei di liberare [[pycelle|Pycelle]], chiamandolo Folletto, e si tradisce: sostiene di consegnare ogni messaggio subito, e ha addosso l’olio di lavanda della regina. Tyrion gli chiede se sia stato fatto cavaliere prima o dopo aver cominciato a dividere il letto con lei. Lancel cade in ginocchio e implora per la sua vita, e accetta di riferire a Tyrion tutto ciò che fa [[cersei-lannister|Cersei]].',
        en: 'Lancel brings [[tyrion-lannister|Tyrion]] Cersei’s order to free [[pycelle|Pycelle]] in the middle of the night, calling him Imp, and gives himself away: he claims to deliver every message at once, and he smells of the queen’s lavender oil. Tyrion asks whether he was knighted before or after he began sharing her bed. Lancel falls to his knees and begs for his life, and agrees to report to Tyrion on everything [[cersei-lannister|Cersei]] does.',
      },
    ),
    onScreen(
      [19, 136],
      { it: 'La ferita di freccia', en: 'The arrow wound' },
      {
        it: 'Durante la battaglia Lancel esce con la sortita del [[sandor-clegane|Mastino]] oltre la Porta del Fango e viene ferito da una freccia. Mandato da [[cersei-lannister|Cersei]], riporta [[joffrey-baratheon|Joffrey]] via dalle mura, protestando che questo spezzerà il morale degli uomini. Quando torna ad avvertirla che sono perduti se il re non torna, lei lo spinge da parte, colpendogli il fianco ferito, e se ne va furiosa.',
        en: 'During the battle Lancel rides out with [[sandor-clegane|Sandor Clegane]]’s sortie beyond the Mud Gate and is wounded by an arrow. Sent by [[cersei-lannister|Cersei]], he brings [[joffrey-baratheon|Joffrey]] back from the walls, protesting that it will break the men’s spirit. When he returns to warn her that they are lost unless the king goes back, she shoves him aside, striking his wounded side, and storms out.',
      },
    ),
    inBooks(
      [14, 103],
      { it: 'Il cugino della regina', en: 'The queen’s cousin' },
      {
        it: 'A notte fonda Lancel porta a [[tyrion-lannister|Tyrion]] il mandato della regina per liberare [[pycelle|Pycelle]], e porta la mano alla spada quando Tyrion lo deride. Tyrion gli chiede se [[cersei-lannister|Cersei]] l’abbia fatto cavaliere prima o dopo averlo portato a letto, e minaccia di dire a [[joffrey-baratheon|Joffrey]] che Lancel ha ucciso il padre del re per portarsi a letto la madre. Lancel dice che [[tywin-lannister|lord Tywin]] gli aveva ordinato di obbedire a Cersei in tutto. Tyrion ne fa la sua spia, e gli dice di riferire che Tyrion implora il perdono della regina.',
        en: 'Late at night Lancel brings [[tyrion-lannister|Tyrion]] the queen’s warrant to free [[pycelle|Pycelle]], and touches his sword when Tyrion mocks him. Tyrion asks whether [[cersei-lannister|Cersei]] knighted him before or after she took him to bed, and threatens to tell [[joffrey-baratheon|Joffrey]] that Lancel killed the king’s father to bed his mother. Lancel says [[tywin-lannister|Lord Tywin]] told him to obey Cersei in all things. Tyrion makes him his spy, and tells him to say that Tyrion begs the queen’s forgiveness.',
      },
    ),
    inBooks(
      [16, 118],
      { it: 'Le notizie di Lancel', en: 'Lancel’s tales' },
      {
        it: 'Davanti alla corte Lancel racconta a [[sansa-stark|Sansa]] che suo fratello Robb si è abbattuto sull’esercito di ser Stafford Lannister con un’armata di metamorfi, per stregoneria, e che gli uomini del Nord hanno banchettato con i morti; [[tyrion-lannister|Tyrion]] le dirà poi che non c’era nessun metamorfo. Lancel continua a fare la spia per Tyrion. Rivela che [[cersei-lannister|Cersei]] paga un cavaliere errante e i suoi fratelli per formarsi un esercito di mercenari, e che vuole nascondere [[tommen-baratheon|Tommen]] a Rosby.',
        en: 'Before the court Lancel tells [[sansa-stark|Sansa]] that her brother Robb fell on Ser Stafford Lannister’s host with an army of wargs, by sorcery, and that the northmen feasted on the dead; [[tyrion-lannister|Tyrion]] later tells her there were no wargs. Lancel goes on spying for Tyrion. He reveals that [[cersei-lannister|Cersei]] is paying a hedge knight and his brothers to raise her own sellswords, and that she means to hide [[tommen-baratheon|Tommen]] at Rosby.',
      },
    ),
    inBooks(
      [19, 136],
      { it: 'Colpito dalla regina', en: 'Struck by the queen' },
      {
        it: 'Gravemente ferito in battaglia, Lancel dice a [[cersei-lannister|Cersei]] nella sala da ballo della regina che la battaglia sembra perduta, e la supplica di lasciare [[joffrey-baratheon|Joffrey]] alla porta fortificata a incoraggiare i difensori. Lei colpisce la ferita di Lancel e se ne va. [[sansa-stark|Sansa]] lo vede cadere in ginocchio e manda a chiamare un maestro che lo curi.',
        en: 'Badly wounded in the battle, Lancel tells [[cersei-lannister|Cersei]] in the Queen’s Ballroom that the battle seems lost, and begs her to let [[joffrey-baratheon|Joffrey]] stay at the gatehouse to hearten the defenders. She strikes his wound and leaves. [[sansa-stark|Sansa]] sees him fall to his knees and sends for a maester to tend him.',
      },
    ),
    inBooks(
      [20, 139],
      { it: 'Lord di Darry', en: 'Lord of Darry' },
      {
        it: 'Alla cerimonia delle ricompense [[joffrey-baratheon|Joffrey]] nomina Lancel lord di Darry e gli dà le terre dei Darry, anche se Lancel è gravemente ferito e non può essere presente, come [[tyrion-lannister|Tyrion]]. Lo stesso giorno vengono premiati molti lord giurati a Castel Granito e ai Tyrell, e [[petyr-baelish|Ditocorto]] riceve Harrenhal.',
        en: 'At the court of rewards [[joffrey-baratheon|Joffrey]] names Lancel Lord of Darry and gives him the Darry lands, though Lancel lies gravely wounded and cannot attend, like [[tyrion-lannister|Tyrion]]. Many lords sworn to Casterly Rock and to the Tyrells are honoured the same day, and [[petyr-baelish|Littlefinger]] receives Harrenhal.',
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
        it: 'A una riunione del Concilio ristretto [[varys|Varys]] riferisce che [[daenerys-targaryen|Daenerys Targaryen]] aspetta un figlio dal suo khal dothraki. [[robert-baratheon|Re Robert]] la vuole morta. Oltre a [[eddard-stark|Eddard Stark]], Barristan è l’unico consigliere a opporsi all’idea di mandarle contro un sicario, perché la ritiene disonorevole. Eddard si rifiuta di dare l’ordine e lascia la carica di Primo Cavaliere.',
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
        it: 'Petyr Baelish, detto Ditocorto, è il maestro del conio nel Concilio ristretto. A [[eddard-stark|Eddard Stark]], appena arrivato come Primo Cavaliere, rivela che la corona ha sei milioni di dragoni d’oro di debiti. Uno dei suoi uomini scorge [[catelyn-stark|Catelyn Stark]] mentre entra in città di nascosto, e lei viene portata in un bordello di Petyr, dove la aspetta anche [[varys|Varys]]. Petyr dice che il pugnale mandato a uccidere il figlio di Catelyn era suo, finché non lo perse in una scommessa con [[tyrion-lannister|Tyrion Lannister]]. Poi porta Eddard da lei e promette di aiutarli, per l’affetto che un tempo provava per Catelyn.',
        en: 'Petyr Baelish, called Littlefinger, is master of coin on the small council. He tells [[eddard-stark|Eddard Stark]], newly arrived as Hand, that the crown is six million gold dragons in debt. One of his men spots [[catelyn-stark|Catelyn Stark]] entering the city in secret, and she is brought to a brothel he owns, where [[varys|Varys]] is waiting too. Petyr says that the dagger sent to kill her son was his, until he lost it in a wager to [[tyrion-lannister|Tyrion Lannister]]. He then takes Eddard to see her and promises to help them, for the affection he once had for Catelyn.',
      },
    ),
    inBooks(
      [3, 19],
      { it: 'Amici d’infanzia', en: 'Childhood friends' },
      {
        it: 'Petyr Baelish, detto Ditocorto, siede nel Concilio ristretto come maestro del conio. Alcuni uomini della Guardia cittadina gli portano al castello [[catelyn-stark|Catelyn Stark]], giunta ad Approdo del Re in segreto. Parlano degli anni in cui sono cresciuti insieme, e lei non gli dice il vero motivo del suo viaggio. Li raggiunge [[varys|Varys]], che chiede di vedere il pugnale. Petyr dice che un tempo era suo, finché non lo perse in una scommessa durante un torneo con il fratello della regina, [[tyrion-lannister|Tyrion Lannister]]. Poi trasferisce Catelyn in uno dei suoi bordelli, dove nessuno la cercherà.',
        en: 'Petyr Baelish, called Littlefinger, sits on the small council as master of coin. Men of the City Watch bring [[catelyn-stark|Catelyn Stark]], who has come to King’s Landing in secret, to him in the castle. They talk about the years when they grew up together, and she does not tell him the true reason for her journey. [[varys|Varys]] joins them and asks to see her dagger. Petyr says it used to be his, until he lost it in a wager at a tourney to the queen’s brother, [[tyrion-lannister|Tyrion Lannister]]. He then moves Catelyn to one of his brothels, where nobody will look for her.',
      },
    ),
    inBooks(
      [3, 21],
      { it: 'La strada per il bordello', en: 'The way to the brothel' },
      {
        it: 'Al primo Concilio ristretto di [[eddard-stark|Eddard Stark]] come Primo Cavaliere, Petyr scambia frecciate con [[renly-baratheon|Renly Baratheon]] e spiega a Eddard quanto sia indebitata la corona. Dopo la riunione lo conduce nelle viscere del castello e giù per una stretta fila di appigli scavati nella pietra, fino ai cavalli che li aspettano in fondo, e lo porta in un bordello. Eddard lo aggredisce, finché [[rodrik-cassel|ser Rodrik Cassel]] non gli mostra che [[catelyn-stark|Catelyn]] è davvero lì. Petyr promette di aiutare Eddard a scoprire come sia morto Jon Arryn.',
        en: 'At [[eddard-stark|Eddard Stark]]’s first small council as Hand, Petyr trades barbs with [[renly-baratheon|Renly Baratheon]] and tells Eddard how deep in debt the crown is. After the meeting he leads Eddard down into the depths of the castle and along a narrow row of handholds cut into the stone, to horses waiting at the bottom, and takes him to a brothel. Eddard turns on him, until [[rodrik-cassel|Ser Rodrik Cassel]] shows him that [[catelyn-stark|Catelyn]] is truly there. Petyr promises to help Eddard find out how Jon Arryn died.',
      },
    ),
    inBooks(
      [4, 26],
      { it: 'Tre spie e uno scudiero', en: 'Three spies and a squire' },
      {
        it: 'Petyr fa visita a [[eddard-stark|Eddard Stark]] nella Torre del Primo Cavaliere e gli indica tre delle persone incaricate di sorvegliarlo. Gli parla anche di chi potrebbe sapere di più sulla morte di Jon Arryn, tra cui il suo ex scudiero, che re Robert ha da poco nominato cavaliere. Quando Eddard lo ringrazia, Petyr gli dice che non fidarsi di Petyr è stata la cosa più saggia che Eddard abbia fatto da quando è arrivato in città.',
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
    onScreen(
      [11, 77],
      { it: 'Il sapere è potere', en: 'Knowledge is power' },
      {
        it: '[[cersei-lannister|Cersei]] incarica Petyr di trovare Arya Stark e lo punzecchia sul suo amore non ricambiato per Catelyn. Lui risponde alludendo a lei e a [[jaime-lannister|Jaime]]: il sapere è potere. Cersei ordina alle guardie di prenderlo e di tagliargli la gola, poi le ferma subito. Il potere, gli dice, è potere.',
        en: '[[cersei-lannister|Cersei]] tasks Petyr with finding Arya Stark and needles him about his unrequited love for Catelyn. He answers by alluding to her and [[jaime-lannister|Jaime]]: knowledge is power. She has her guards seize him and orders them to cut his throat, then calls them off at once. Power, she tells him, is power.',
      },
    ),
    onScreen(
      [12, 82],
      { it: 'La ragazza di Lys', en: 'The Lyseni girl' },
      {
        it: '[[ros|Ros]] è ancora sconvolta dall’uccisione di una neonata nel bordello di Petyr e crolla davanti a un cliente. Petyr le racconta di una ragazza triste che aveva comprato a caro prezzo da una casa di piacere di Lys, e che non gli rendeva nulla, così l’ha venduta a un lord dai gusti inimmaginabili. Poi le chiede se una notte libera basterà a farla sorridere di nuovo. Ros sorride e dice di sì.',
        en: '[[ros|Ros]] is still shaken by the killing of a baby in Petyr’s brothel and breaks down in front of a client. Petyr tells her of a sad girl he bought at great cost from a pleasure house in Lys, who earned him nothing, so he sold her to a lord with unthinkable tastes. Then he asks whether one night off will make Ros smile again. She smiles and says it will.',
      },
    ),
    onScreen(
      [14, 106],
      { it: 'All’accampamento di Renly', en: 'At Renly’s camp' },
      {
        it: 'Furioso per essere stato usato nella prova di [[tyrion-lannister|Tyrion]], Petyr viene mandato come inviato all’accampamento di Renly. Fa capire a [[renly-baratheon|Renly]] che lo aiuterebbe dall’interno della capitale, e cerca di mettere in difficoltà [[margaery-tyrell|Margaery]] alludendo al fatto che il marito preferisce gli uomini, ma lei lo sa già. [[catelyn-stark|Catelyn]] sfodera un pugnale quando lui le parla d’amore. Petyr le offre Sansa e Arya in cambio di Jaime, mentendo su Arya, e le consegna le ossa di Eddard Stark.',
        en: 'Furious at being used in [[tyrion-lannister|Tyrion]]’s test of the council, Petyr is sent as envoy to Renly’s camp. He hints to [[renly-baratheon|Renly]] that he would help him from inside the capital, and tries to unsettle [[margaery-tyrell|Margaery]] by hinting that her husband prefers men, but she already knows. [[catelyn-stark|Catelyn]] draws a dagger when he speaks of love. He offers Sansa and Arya for Jaime, lying about Arya, and hands over Eddard Stark’s bones.',
      },
    ),
    onScreen(
      [16, 115],
      { it: 'A Harrenhal', en: 'At Harrenhal' },
      {
        it: 'Dopo la morte di Renly, Petyr parte con i Tyrell, fiutando l’occasione di portarli dalla parte di [[joffrey-baratheon|Joffrey]]. A Harrenhal incontra [[tywin-lannister|Tywin]] e gli dice che i lord delle terre della tempesta sono passati a Stannis, ma che i Tyrell hanno riportato a casa il loro grande esercito. Propone un’alleanza tra Casa Lannister e Casa Tyrell. [[arya-stark|Arya]], al servizio di Tywin, nasconde il viso perché Petyr non la riconosca.',
        en: 'After Renly’s death Petyr leaves with the Tyrells, sensing a chance to win them for [[joffrey-baratheon|Joffrey]]. At Harrenhal he meets [[tywin-lannister|Tywin]] and tells him that the stormlords have gone over to Stannis, but that the Tyrells have taken their great army home. He proposes an alliance between House Lannister and House Tyrell. [[arya-stark|Arya]], serving Tywin, hides her face so that Petyr will not know her.',
      },
    ),
    onScreen(
      [20, 139],
      { it: 'Signore di Harrenhal', en: 'Lord of Harrenhal' },
      {
        it: 'Alla cerimonia delle ricompense [[joffrey-baratheon|Joffrey]] dà a Petyr Harrenhal per aver combinato l’alleanza tra i Lannister e i Tyrell. Poi Petyr trova [[sansa-stark|Sansa]] felicissima di essere libera dal fidanzamento, e la avverte che Joffrey continuerà a tormentarla. Le promette di farla uscire dalla città, per amore di Catelyn.',
        en: 'At the court of rewards [[joffrey-baratheon|Joffrey]] gives Petyr Harrenhal for brokering the alliance between the Lannisters and the Tyrells. Afterwards he finds [[sansa-stark|Sansa]] overjoyed at being freed from her betrothal, and warns her that Joffrey will still torment her. He promises to get her out of the city, for her mother’s sake.',
      },
    ),
    inBooks(
      [13, 91],
      { it: 'Il prezzo di Harrenhal', en: 'The price of Harrenhal' },
      {
        it: '[[tyrion-lannister|Tyrion]] trova Petyr alla finestra mentre guarda [[joffrey-baratheon|Joffrey]] tirare alle lepri, e rifiuta in dono il suo pugnale d’acciaio di Valyria. Petyr si vanta di aver preso la verginità di entrambe le ragazze Tully. Tyrion gli chiede di portare [[lysa-arryn|Lysa Arryn]] dalla parte di Joffrey, offrendole l’assassino di Jon Arryn, il titolo di Protettore dell’Est per il figlio e le nozze del bambino con [[myrcella-baratheon|Myrcella]]. Petyr avrà in premio Harrenhal e la signoria delle terre dei fiumi. Chiede due settimane per prepararsi.',
        en: '[[tyrion-lannister|Tyrion]] finds Petyr at his window, watching [[joffrey-baratheon|Joffrey]] shoot hares, and turns down the gift of his Valyrian steel dagger. Petyr boasts that he took the maidenheads of both Tully girls. Tyrion asks him to win [[lysa-arryn|Lysa Arryn]] for Joffrey, offering her the killer of Jon Arryn, the title of Warden of the East for her son and a marriage between the boy and [[myrcella-baratheon|Myrcella]]. Petyr’s reward will be Harrenhal and the lordship of the riverlands. He asks for a fortnight to prepare.',
      },
    ),
    inBooks(
      [15, 110],
      { it: 'Inviato presso i Tyrell', en: 'Envoy to the Tyrells' },
      {
        it: 'Petyr dice a [[tyrion-lannister|Tyrion]] di volergli bene come sempre, ma che [[myrcella-baratheon|Myrcella]] non può sposare il figlio di Lysa se sposa un principe di Dorne, e gli chiede di lasciarlo fuori dal prossimo inganno. Quando Renly viene ucciso, sostiene le nozze tra [[joffrey-baratheon|Joffrey]] e [[margaery-tyrell|Margaery Tyrell]]: Sansa porterebbe solo il suo corpo, Margaery cinquantamila spade. Né Tyrion né [[cersei-lannister|Cersei]] vogliono lasciare la città, così Petyr si offre di trattare con i Tyrell, con una scorta, dell’oro e Hobber Redwyne, e chiede una ricompensa adeguata, che sceglierà più avanti.',
        en: 'Petyr tells [[tyrion-lannister|Tyrion]] he loves him as much as ever, but that [[myrcella-baratheon|Myrcella]] cannot wed Lysa’s son if she weds a Dornish prince, and asks to be left out of the next deception. When Renly is killed, he backs the match between [[joffrey-baratheon|Joffrey]] and [[margaery-tyrell|Margaery Tyrell]]: Sansa brings only her body, Margaery fifty thousand swords. Neither Tyrion nor [[cersei-lannister|Cersei]] will leave the city, so Petyr volunteers to treat with the Tyrells, with an escort, gold and Hobber Redwyne, and asks for a fitting reward, to be named later.',
      },
    ),
    inBooks(
      [20, 139],
      { it: 'Lord supremo del Tridente', en: 'Lord Paramount of the Trident' },
      {
        it: 'Alla cerimonia delle ricompense [[joffrey-baratheon|Joffrey]] concede a Petyr Harrenhal e lo nomina lord supremo del Tridente, per aver negoziato il trattato che ha portato i Tyrell in aiuto della città. Con loro sono arrivati [[garlan-tyrell|ser Garlan]] e [[loras-tyrell|ser Loras Tyrell]], e Garlan chiede al re di sposare la sorella [[margaery-tyrell|Margaery]]. L’Alto Septon dichiara nullo il fidanzamento del re con [[sansa-stark|Sansa]].',
        en: 'At the court of rewards [[joffrey-baratheon|Joffrey]] grants Petyr Harrenhal and names him Lord Paramount of the Trident, for negotiating the treaty that brought the Tyrells to the city’s aid. With them came [[garlan-tyrell|Ser Garlan]] and [[loras-tyrell|Ser Loras Tyrell]], and Garlan asks the king to wed his sister [[margaery-tyrell|Margaery]]. The High Septon declares the king’s betrothal to [[sansa-stark|Sansa]] void.',
      },
    ),
  ],
  'varys': [
    inBooks(
      [3, 19],
      { it: 'La visitatrice segreta', en: 'The secret visitor' },
      {
        it: 'Varys è il maestro dei sussurri nel Concilio ristretto. Sa che [[catelyn-stark|Catelyn Stark]] è giunta ad Approdo del Re in segreto, e del pugnale che ha portato con sé. Quando lei viene condotta da [[petyr-baelish|Petyr Baelish]] al castello, Varys li raggiunge, le esprime il suo dispiacere per il figlio [[bran-stark|Bran]] e chiede di vedere il pugnale. Petyr dice che era suo, finché non lo perse in una scommessa con [[tyrion-lannister|Tyrion Lannister]].',
        en: 'Varys is the master of whisperers on the small council. He knows that [[catelyn-stark|Catelyn Stark]] has come to King’s Landing in secret, and of the dagger she has brought. When she is taken to [[petyr-baelish|Petyr Baelish]] in the castle, Varys joins them, offers his sympathy for her son [[bran-stark|Bran]] and asks to see the knife. Petyr says it was his, until he lost it in a wager to [[tyrion-lannister|Tyrion Lannister]].',
      },
    ),
    onScreen(
      [3, 21],
      { it: 'Preghiere per il principe', en: 'Prayers for the prince' },
      {
        it: 'Varys è l’eunuco che siede nel Concilio ristretto come maestro dei sussurri. Quando [[eddard-stark|Eddard Stark]] arriva come Primo Cavaliere, Varys gli dice che il concilio ha pregato per la guarigione del [[joffrey-baratheon|principe Joffrey]] dopo i guai lungo la strada; Eddard risponde che è un peccato che nessuno abbia pregato per il garzone del macellaio, [[mycah|Mycah]]. Varys ha anche avvertito [[petyr-baelish|Petyr Baelish]] che [[catelyn-stark|Catelyn Stark]] sta arrivando in città in segreto, e aspetta con Petyr quando lei viene portata in uno dei bordelli di Petyr a mostrare il pugnale mandato contro suo figlio.',
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
        it: 'A una riunione del Concilio ristretto, Varys riferisce che [[daenerys-targaryen|Daenerys Targaryen]] aspetta un figlio dal suo khal dothraki. Quando gli chiedono da dove venga la notizia, fa il nome di [[jorah-mormont|ser Jorah Mormont]]. Varys è tra i consiglieri favorevoli a mandare dei sicari contro Daenerys e il bambino che porta in grembo, come vuole [[robert-baratheon|re Robert]]. [[eddard-stark|Eddard Stark]] si rifiuta di dare l’ordine e lascia la carica di Primo Cavaliere.',
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
        it: 'Varys va da [[eddard-stark|Eddard Stark]] nelle segrete e lo esorta a confessare il tradimento: in cambio gli sarebbe permesso di unirsi ai Guardiani della notte, e la confessione proteggerebbe la sua famiglia. Eddard confessa davanti alla folla al Grande Tempio di Baelor. [[joffrey-baratheon|Joffrey]] ordina comunque di tagliargli la testa. Varys cerca invano di fermare il re, e [[ilyn-payne|Ilyn Payne]] decapita Eddard con la spada di Eddard stesso.',
        en: 'Varys comes to [[eddard-stark|Eddard Stark]] in the dungeons and urges him to confess to treason: he would then be allowed to join the Night’s Watch, and the confession would protect his family. Eddard confesses before the crowd at the Great Sept of Baelor. [[joffrey-baratheon|Joffrey]] orders his head cut off all the same. Varys tries in vain to stop the king, and [[ilyn-payne|Ilyn Payne]] beheads Eddard with Eddard’s own sword.',
      },
    ),
    onScreen(
      [12, 82],
      { it: 'Shae nella torre', en: 'Shae in the tower' },
      {
        it: 'Varys scopre che [[shae|Shae]] vive con [[tyrion-lannister|Tyrion]] nella Torre del Primo Cavaliere, contro l’ordine del padre di Tyrion, e lascia intendere che potrebbe rivelarlo. Tyrion lo avverte di non sottovalutarlo. Al Concilio, quando un corvo dei Guardiani della notte chiede uomini, Varys aggiunge che i bruti si stanno unendo sotto un solo capo.',
        en: 'Varys discovers [[shae|Shae]] living with [[tyrion-lannister|Tyrion]] in the Tower of the Hand, against the order of Tyrion’s father, and makes veiled threats about revealing her. Tyrion warns him not to underestimate him. In council, when a raven from the Night’s Watch asks for men, Varys adds that the wildlings are uniting under one leader.',
      },
    ),
    onScreen(
      [19, 133],
      { it: 'La mappa dei cunicoli', en: 'A map of the tunnels' },
      {
        it: 'Mentre [[stannis-baratheon|Stannis]] si avvicina, Varys consiglia [[tyrion-lannister|Tyrion]], insieme a [[bronn|Bronn]], sulla difesa della città. La notte prima della battaglia gli porta una mappa dei cunicoli sotto Approdo del Re, e gli dice che è l’unica cosa che si frappone tra la città e la sconfitta.',
        en: 'As [[stannis-baratheon|Stannis]] nears, Varys advises [[tyrion-lannister|Tyrion]], with [[bronn|Bronn]], on the defence of the city. On the eve of the battle he brings Tyrion a map of the tunnels beneath King’s Landing, and tells him that he is all that stands between the city and defeat.',
      },
    ),
    onScreen(
      [20, 141],
      { it: 'Le visite dell’eunuco', en: 'The eunuch’s visits' },
      {
        it: 'Varys fa visita a [[tyrion-lannister|Tyrion]] ferito, gli dice che [[bronn|Bronn]] ha perso il comando della Guardia cittadina e che i clan delle montagne sono tornati a casa, e lo ringrazia per la difesa della città, visto che nessun altro lo farà. Poi va da [[ros|Ros]] nel bordello di [[petyr-baelish|Ditocorto]]. Lei non sa chi sia finché non scopre che è un eunuco. Varys le fa ammettere che ha paura del suo padrone, e le dice che lui protegge chi lavora per lui.',
        en: 'Varys visits the wounded [[tyrion-lannister|Tyrion]], tells him that [[bronn|Bronn]] has lost his command of the City Watch and the hill tribes have gone home, and thanks him for the city’s defence, since no one else will. Then he calls on [[ros|Ros]] in [[petyr-baelish|Littlefinger]]’s brothel. She does not know who he is until she finds he is a eunuch. He gets her to admit she fears her employer, and tells her that he protects those who work for him.',
      },
    ),
    inBooks(
      [11, 77],
      { it: 'L’indovinello', en: 'The riddle' },
      {
        it: 'Al Concilio Varys esamina il sigillo sulla lettera di [[tyrion-lannister|Tyrion]] e lo dichiara autentico. Quella notte Tyrion lo trova in una locanda con [[shae|Shae]], che l’eunuco ha trovato sorprendentemente in fretta, e i due si scambiano minacce velate. Varys gli dice che la cometa rossa è chiamata messaggera di fuoco e sangue, e gli lascia un indovinello: un re, un sacerdote e un ricco ordinano ciascuno a un mercenario di uccidere gli altri due. Chi vive e chi muore?',
        en: 'In council Varys inspects the seal on [[tyrion-lannister|Tyrion]]’s letter and proclaims it genuine. That night Tyrion finds him at an inn with [[shae|Shae]], whom the eunuch has found remarkably quickly, and the two exchange veiled threats. Varys tells him that the red comet is called a herald of fire and blood, and leaves him a riddle: a king, a priest and a rich man each bid a sellsword kill the other two. Who lives and who dies?',
      },
    ),
    inBooks(
      [12, 82],
      { it: 'Il potere è un’ombra', en: 'Power is a shadow' },
      {
        it: 'Varys loda [[tyrion-lannister|Tyrion]] per aver mandato [[janos-slynt|Janos Slynt]] alla Barriera e per averlo sostituito con [[jacelyn-bywater|ser Jacelyn Bywater]], da lui raccomandato. Tyrion se la prende perché Varys gli ha taciuto che [[cersei-lannister|Cersei]] ha mandato le cappe dorate a uccidere una bastarda di Robert; Varys dice di aver salvato un ragazzo più grande. Serve il regno, il re e Tyrion, dice, e risponde all’indovinello: il potere risiede dove gli uomini credono che risieda, è un’ombra sul muro, e un uomo molto piccolo può proiettare un’ombra molto grande.',
        en: 'Varys praises [[tyrion-lannister|Tyrion]] for sending [[janos-slynt|Janos Slynt]] to the Wall and for replacing him with [[jacelyn-bywater|Ser Jacelyn Bywater]], whom he recommended. Tyrion is angry that Varys kept from him that [[cersei-lannister|Cersei]] sent gold cloaks to kill one of Robert’s bastards; Varys says he saved an older boy. He serves the realm, the king and Tyrion, he says, and answers the riddle: power resides where men believe it resides, a shadow on the wall, and a very small man can cast a very large shadow.',
      },
    ),
    inBooks(
      [13, 91],
      { it: 'Il prezzo di Doran', en: 'Doran’s price' },
      {
        it: 'Varys prende in giro [[tyrion-lannister|Tyrion]] per aver tormentato [[pycelle|Pycelle]] con un segreto, e lo indovina: Tyrion vuole impedire che Dorne si schieri con un altro re. Tyrion ha offerto al principe Doran un seggio nel Concilio e l’uomo che ha ucciso sua sorella, [[gregor-clegane|ser Gregor Clegane]]. Varys indovina che l’ostaggio offerto sarà [[tommen-baratheon|Tommen]], e avverte che [[cersei-lannister|Cersei]] non rinuncerà mai a entrambi i figli minori. Tyrion risponde che chi glielo dicesse sarebbe suo nemico, e Varys ridacchia.',
        en: 'Varys teases [[tyrion-lannister|Tyrion]] for tormenting [[pycelle|Pycelle]] with a secret, and guesses it: Tyrion wants to keep Dorne from joining another king. Tyrion has offered Prince Doran a council seat and the man who murdered his sister, [[gregor-clegane|Ser Gregor Clegane]]. Varys guesses that the hostage Tyrion offers will be [[tommen-baratheon|Tommen]], and warns that [[cersei-lannister|Cersei]] will never give up both her younger children. Tyrion answers that whoever told her would be his enemy, and Varys giggles.',
      },
    ),
    inBooks(
      [13, 118],
      { it: 'Lo stregone di Myr', en: 'The sorcerer of Myr' },
      {
        it: 'Travestito da fratello mendicante, Varys porta a [[tyrion-lannister|Tyrion]] la notizia che Capo Tempesta è caduta e che Stannis marcerà sulla città. Propone di sistemare [[shae|Shae]] come cameriera di [[lollys-stokeworth|Lollys Stokeworth]], con un passaggio segreto verso la Torre del Primo Cavaliere. Poi racconta come è diventato eunuco: ragazzo in una compagnia di guitti, fu comprato a Myr da uno stregone che lo evirò e bruciò le parti tagliate, e da allora odia la magia.',
        en: 'Disguised as a begging brother, Varys brings [[tyrion-lannister|Tyrion]] word that Storm’s End has fallen and that Stannis will march on the city. He suggests placing [[shae|Shae]] as maid to [[lollys-stokeworth|Lollys Stokeworth]], with a secret passage into the Tower of the Hand. Then he tells how he became a eunuch: a boy in a mummers’ troupe, he was bought in Myr by a sorcerer who cut him and burned the parts, and he has hated magic ever since.',
      },
    ),
    inBooks(
      [15, 110],
      { it: 'La morte di Renly', en: 'Renly’s death' },
      {
        it: 'Varys riferisce al Concilio ristretto che [[renly-baratheon|Renly]] è stato ucciso, con la gola tagliata, ed elenca le voci su chi l’abbia fatto: Stannis con una spada magica, un cavaliere della sua guardia, una donna, [[catelyn-stark|lady Catelyn]]. Quasi tutti i lord di Renly sono passati a [[stannis-baratheon|Stannis]], ma [[loras-tyrell|Loras Tyrell]] è fuggito con un quinto dei cavalieri. Varys conviene con [[tyrion-lannister|Tyrion]] che l’oro non basterà a conquistare i Tyrell, e aggiunge che le necessità del regno vengono prima dei desideri del re.',
        en: 'Varys tells the small council that [[renly-baratheon|Renly]] has been murdered, his throat cut, and lists the tales of who did it: Stannis with a magic sword, a knight of his guard, a woman, [[catelyn-stark|Lady Catelyn]]. Most of Renly’s lords have gone over to [[stannis-baratheon|Stannis]], but [[loras-tyrell|Loras Tyrell]] has fled with a fifth of the knights. Varys agrees with [[tyrion-lannister|Tyrion]] that gold will not win the Tyrells, and adds that the needs of the realm come before the king’s desires.',
      },
    ),
    onScreen(
      [18, 128],
      { it: 'Tre draghi', en: 'Three dragons' },
      {
        it: 'Varys aiuta [[tyrion-lannister|Tyrion]] a preparare la difesa della città contro [[stannis-baratheon|Stannis]]. Dopo che entrambi hanno parlato male di [[joffrey-baratheon|Joffrey]] in privato, Varys loda l’abilità di Tyrion nel gioco e il suo lavoro come Primo Cavaliere. Poi gli dice che [[daenerys-targaryen|Daenerys Targaryen]] è viva e ha fatto schiudere tre draghi: quando saranno cresciuti, i suoi nemici non avranno dove nascondersi. Tyrion risponde che affronterà una partita alla volta.',
        en: 'Varys helps [[tyrion-lannister|Tyrion]] plan the defence of the city against [[stannis-baratheon|Stannis]]. After the two of them speak ill of [[joffrey-baratheon|Joffrey]] in private, Varys praises Tyrion’s skill at the game and his work as Hand. Then he tells him that [[daenerys-targaryen|Daenerys Targaryen]] lives and has hatched three dragons: when they are grown, her enemies will have nowhere to hide. Tyrion answers that he will take one game at a time.',
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
        it: 'Pycelle è il Gran Maestro, un uomo molto anziano che siede da molti anni nel Concilio ristretto. Quando [[eddard-stark|Eddard Stark]] arriva ad Approdo del Re come Primo Cavaliere del Re, Pycelle è nel concilio che lo accoglie, con [[petyr-baelish|Petyr Baelish]], [[varys|Varys]] e [[renly-baratheon|Renly Baratheon]]. Il concilio viene a sapere che [[robert-baratheon|re Robert]] vuole un torneo in onore del nuovo Primo Cavaliere, anche se la corona è già profondamente indebitata.',
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
        it: '[[robert-baratheon|Re Robert]] viene ferito gravemente da un cinghiale durante una caccia, e Pycelle lo cura. Robert muore per la ferita. [[eddard-stark|Eddard Stark]] viene arrestato per tradimento nella sala del trono, dove il nuovo re, [[joffrey-baratheon|Joffrey]], siede con la madre [[cersei-lannister|Cersei]] al suo fianco.',
        en: '[[robert-baratheon|King Robert]] is gravely wounded by a boar while hunting, and Pycelle tends him. Robert dies of the wound. [[eddard-stark|Eddard Stark]] is seized for treason in the throne room, where the new king, [[joffrey-baratheon|Joffrey]], sits with his mother [[cersei-lannister|Cersei]] beside him.',
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
    onScreen(
      [13, 99],
      { it: 'Le celle nere', en: 'The black cells' },
      {
        it: '[[tyrion-lannister|Tyrion]] confida a Pycelle un piano per far sposare [[myrcella-baratheon|Myrcella]] a un principe di Dorne e gli dice di non parlarne alla regina. Pycelle lo dice comunque a [[cersei-lannister|Cersei]]. Tyrion e [[bronn|Bronn]] irrompono nella sua stanza mentre è a letto con [[daisy|Daisy]]; Pycelle sostiene di essere fedele a Casa Lannister dai tempi del Re Folle, e non nega di aver lasciato morire Jon Arryn. Bronn gli taglia la barba, e Pycelle viene gettato nelle celle nere.',
        en: '[[tyrion-lannister|Tyrion]] confides to Pycelle a plan to marry [[myrcella-baratheon|Myrcella]] to a prince of Dorne and tells him not to speak of it to the queen. Pycelle tells [[cersei-lannister|Cersei]] anyway. Tyrion and [[bronn|Bronn]] burst in on him in bed with [[daisy|Daisy]]; Pycelle claims he has been loyal to House Lannister since the Mad King, and does not deny letting Jon Arryn die. Bronn cuts off his beard, and Pycelle is thrown into the black cells.',
      },
    ),
    onScreen(
      [20, 139],
      { it: 'Il nuovo Primo Cavaliere', en: 'The new Hand' },
      {
        it: 'Prima della battaglia Pycelle procura a [[cersei-lannister|Cersei]] l’essenza di belladonna. Dopo, annuncia compiaciuto a [[tyrion-lannister|Tyrion]] ferito che non è più Primo Cavaliere, perché [[tywin-lannister|Tywin]] è tornato. A corte si unisce a Cersei per convincere [[joffrey-baratheon|Joffrey]] a sciogliere il fidanzamento con [[sansa-stark|Sansa]]: ha parlato con il nuovo Alto Septon, che approva.',
        en: 'Before the battle Pycelle gives [[cersei-lannister|Cersei]] essence of nightshade. Afterwards he gloats to the wounded [[tyrion-lannister|Tyrion]] that he is no longer acting Hand, since [[tywin-lannister|Tywin]] has returned. At court he joins Cersei in persuading [[joffrey-baratheon|Joffrey]] to set aside his betrothal to [[sansa-stark|Sansa]]: he has spoken with the new High Septon, who approves.',
      },
    ),
    inBooks(
      [13, 91],
      { it: 'Una lettera per Dorne', en: 'A letter for Dorne' },
      {
        it: 'A colazione [[tyrion-lannister|Tyrion]] fa mandare via a Pycelle la sua serva e gli consegna due copie sigillate di una lettera segreta per il principe Doran di Dorne, da spedire con gli uccelli più veloci. Parte un solo corvo. Tyrion non vuole condividere il messaggio con il Concilio né con la regina, perché [[cersei-lannister|Cersei]] porta già un grande peso, e Pycelle conviene che è meglio non aggravarlo. Mentre il maestro è fuori, Tyrion gli ruba una boccetta dagli scaffali.',
        en: 'At breakfast [[tyrion-lannister|Tyrion]] has Pycelle send his serving girl away and hands him two sealed copies of a secret letter for Prince Doran of Dorne, to go by his swiftest birds. Only one raven flies. Tyrion will not share the message with the council or the queen, since [[cersei-lannister|Cersei]] carries a great weight already, and Pycelle agrees it is best not to add to her burden. While the maester is out, Tyrion steals a small bottle from his shelves.',
      },
    ),
    inBooks(
      [13, 99],
      { it: 'Quasi tutta la barba', en: 'Most of his beard' },
      {
        it: 'Nella notte di luna nera [[shagga|Shagga]] sfonda la porta di Pycelle, e [[tyrion-lannister|Tyrion]] fa trascinare via la serva dal suo letto. Tyrion gli dice che una copia della lettera è andata a Dorne e l’altra a [[cersei-lannister|Cersei]]. Pycelle cerca di dare la colpa a [[varys|Varys]], poi a [[petyr-baelish|Ditocorto]]. Mentre l’ascia di Shagga gli porta via la barba, confessa di aver convinto re Aerys ad aprire le porte della città, e di aver lasciato morire Jon Arryn perché Jon sapeva dell’incesto della regina. Tyrion lo fa gettare in una cella nera.',
        en: 'On the night of the black moon [[shagga|Shagga]] breaks down Pycelle’s door, and [[tyrion-lannister|Tyrion]] has his serving girl dragged from his bed. Tyrion tells him that one copy of the letter went to Dorne and the other to [[cersei-lannister|Cersei]]. Pycelle tries to blame [[varys|Varys]], then [[petyr-baelish|Littlefinger]]. As Shagga’s axe takes his beard, he confesses that he urged King Aerys to open the city gates, and that he let Jon Arryn die because Jon knew about the queen’s incest. Tyrion has him thrown into a black cell.',
      },
    ),
    onScreen(
      [14, 103],
      { it: 'Fuori dalle celle', en: 'Out of the cells' },
      {
        it: 'Tramite [[lancel-lannister|Lancel]], [[cersei-lannister|Cersei]] pretende che Pycelle sia liberato dalle celle nere e riammesso nel Concilio ristretto. [[tyrion-lannister|Tyrion]] accetta di liberarlo, lasciandolo alla regina come suo animaletto se lo vuole, ma non lo rivuole nel Concilio. Il gran maestro torna libero, anche se non siede più nel Concilio.',
        en: 'Through [[lancel-lannister|Lancel]], [[cersei-lannister|Cersei]] demands that Pycelle be freed from the black cells and returned to the small council. [[tyrion-lannister|Tyrion]] agrees to release him, letting the queen have him as her pet if she wants him, but will not have him back on the council. The Grand Maester is free again, though no longer on the council.',
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
    onScreen(
      [11, 76],
      { it: 'Dalla parte di Sansa', en: 'On Sansa’s side' },
      {
        it: 'Al torneo per il giorno del nome di [[joffrey-baratheon|Joffrey]], il re ordina di affogare nel vino [[dontos-hollard|ser Dontos Hollard]], arrivato tardi e ubriaco. Quando [[sansa-stark|Sansa]] dice che ordinare una morte nel proprio giorno del nome porta sfortuna, Joffrey la liquida come superstizione, ma Sandor le dà ragione, e invece di essere ucciso Dontos diventa il giullare del re.',
        en: 'At [[joffrey-baratheon|Joffrey]]’s name-day tournament, the king orders [[dontos-hollard|Ser Dontos Hollard]] drowned in wine for arriving late and drunk. When [[sansa-stark|Sansa]] says that ordering a death on one’s name day brings bad luck, Joffrey dismisses it as superstition, but Sandor seconds her, and Dontos is made the king’s fool instead of being killed.',
      },
    ),
    onScreen(
      [14, 106],
      { it: 'Il suo mantello', en: 'His cloak' },
      {
        it: 'Quando [[joffrey-baratheon|Joffrey]] fa picchiare e spogliare [[sansa-stark|Sansa]] da [[meryn-trant|ser Meryn Trant]] davanti alla corte, Sandor guarda disgustato, ma nessuno interviene finché non arriva [[tyrion-lannister|Tyrion]]. Quando Tyrion ordina che qualcuno la copra, Sandor si fa avanti subito e la avvolge con delicatezza nel suo mantello. Più tardi fa la guardia mentre [[ros|Ros]] e [[daisy|Daisy]] aspettano il re nella sua stanza.',
        en: 'When [[joffrey-baratheon|Joffrey]] has [[meryn-trant|Ser Meryn Trant]] beat and strip [[sansa-stark|Sansa]] before the court, Sandor watches in disgust, but no one steps in until [[tyrion-lannister|Tyrion]] arrives. When Tyrion orders someone to cover her, Sandor steps forward at once and gently wraps his cloak around her. Later he stands guard while [[ros|Ros]] and [[daisy|Daisy]] wait for the king in his chamber.',
      },
    ),
    onScreen(
      [16, 115],
      { it: 'Non per te', en: 'Not for you' },
      {
        it: 'Nella rivolta dopo la partenza di [[myrcella-baratheon|Myrcella]], alcuni uomini trascinano via [[sansa-stark|Sansa]] e stanno per violentarla. Sandor arriva, uccide gli aggressori e la riporta al castello, dove ordina alle ancelle di occuparsi di lei. Quando [[tyrion-lannister|Tyrion]] lo ringrazia per averle salvato la vita, Sandor risponde brusco che non l’ha fatto per lui.',
        en: 'In the riot after [[myrcella-baratheon|Myrcella]]’s departure, men drag [[sansa-stark|Sansa]] away and are about to rape her. Sandor arrives, kills her attackers and carries her back to the castle, where he orders the handmaids to take care of her. When [[tyrion-lannister|Tyrion]] thanks him for saving her life, Sandor bluntly answers that he did not do it for him.',
      },
    ),
    onScreen(
      [17, 126],
      { it: 'Un cane e i topi', en: 'A dog and the rats' },
      {
        it: '[[sansa-stark|Sansa]] va a ringraziare Sandor per averla salvata e lo chiama coraggioso. Lui risponde che a un cane non serve coraggio per scacciare i topi, e la avverte che verrà un giorno in cui la sua voglia di uccidere sarà l’unica cosa tra lei e il suo amato [[joffrey-baratheon|Joffrey]]. Quando a Sansa arriva il primo sangue e [[shae|Shae]] cerca di nascondere le lenzuola, Sandor le trova.',
        en: '[[sansa-stark|Sansa]] comes to thank Sandor for saving her and calls him brave. He answers that a dog needs no courage to fight off rats, and warns her that a day will come when his killing is all that stands between her and her beloved [[joffrey-baratheon|Joffrey]]. When Sansa has her first blood and [[shae|Shae]] tries to hide the sheets, Sandor finds them.',
      },
    ),
    onScreen(
      [19, 136],
      { it: 'La paura del fuoco', en: 'Afraid of the fire' },
      {
        it: 'La notte prima della battaglia Sandor si scontra con [[bronn|Bronn]] mentre bevono. [[tyrion-lannister|Tyrion]] lo manda a guidare una sortita oltre la Porta del Fango, e [[lancel-lannister|Lancel]] va con lui. Terrorizzato dagli uomini in fiamme, Sandor si blocca finché Bronn non lo salva, e dopo aver perso metà dei suoi uomini si rifiuta di uscire di nuovo. Abbandona la battaglia e la Guardia reale, maledicendo davanti a tutti la Guardia reale, la città e il re. Trova [[sansa-stark|Sansa]] nella sua stanza e si offre di portarla a nord, ma lei ha troppa paura per seguirlo.',
        en: 'On the eve of battle Sandor clashes with [[bronn|Bronn]] over drinks. [[tyrion-lannister|Tyrion]] sends him to lead a sortie beyond the Mud Gate, and [[lancel-lannister|Lancel]] rides with him. Terrified by the burning men, Sandor freezes until Bronn saves him, and after losing half his men he refuses to go out again. He walks away from the battle and the Kingsguard, cursing the Kingsguard, the city and the king in front of everyone. He finds [[sansa-stark|Sansa]] in her room and offers to take her north, but she is too afraid to go with him.',
      },
    ),
    inBooks(
      [11, 76],
      { it: 'Un torneo di moscerini', en: 'A tourney of gnats' },
      {
        it: 'Al torneo per il giorno del nome di [[joffrey-baratheon|Joffrey]] il Mastino dice che non vale la pena di giostrare in un torneo di moscerini. Joffrey non gli ordina mai di colpire [[sansa-stark|Sansa]], come fa con i cavalieri della Guardia reale. Quando Sansa cerca di salvare [[dontos-hollard|ser Dontos]], ubriaco, il Mastino le viene in aiuto, confermando che ciò che un uomo semina nel giorno del nome lo raccoglie per tutto l’anno. Quando arriva [[tyrion-lannister|Tyrion]], il Mastino dice che lo davano per morto, e gli consiglia di tenere a freno la lingua.',
        en: 'At [[joffrey-baratheon|Joffrey]]’s name-day tourney Sandor says it is not worth jousting in a tourney of gnats. Joffrey never orders him to strike [[sansa-stark|Sansa]], as he does the knights of the Kingsguard. When Sansa tries to save a drunk [[dontos-hollard|Ser Dontos]], Sandor comes to her aid, agreeing that what a man sows on his name day he reaps all year. When [[tyrion-lannister|Tyrion]] arrives, Sandor says they had heard he was dead, and tells him to guard his tongue.',
      },
    ),
    inBooks(
      [20, 92],
      { it: 'Uccellino', en: 'Little bird' },
      {
        it: 'Di notte, sui gradini a serpentina, Sandor ubriaco afferra [[sansa-stark|Sansa]] prima che cada, mentre lei torna dal parco degli dèi. Non crede che abbia pregato, la chiama un uccellino che canta le canzoni che le hanno insegnato, e la riaccompagna alle sue stanze. Le racconta che suo nonno ebbe delle terre per aver salvato un lord Lannister da un leone, e che un cane muore per te e non ti mente mai. Un giorno, dice, avrà da lei una canzone.',
        en: 'On the serpentine steps at night a drunk Sandor catches [[sansa-stark|Sansa]] before she falls, as she comes back from the godswood. He does not believe she was praying, calls her a little bird singing the songs she was taught, and walks her back to her chambers. He tells her that his grandfather won lands for saving a Lannister lord from a lion, and that a dog will die for you and never lie to you. One day, he says, he will have a song from her.',
      },
    ),
    inBooks(
      [14, 106],
      { it: 'Un mantello per Sansa', en: 'A cloak for Sansa' },
      {
        it: 'Il Mastino porta [[sansa-stark|Sansa]] davanti a [[joffrey-baratheon|Joffrey]] a rispondere della vittoria di Robb e, quando glielo ordinano, la rimette in piedi senza brutalità. Mentre ser Boros Blount la picchia, dice con voce roca che basta, ma il re ordina di spogliarla. Quando [[tyrion-lannister|Tyrion]] chiede qualcosa per coprirla, il Mastino le getta il suo mantello.',
        en: 'Sandor brings [[sansa-stark|Sansa]] before [[joffrey-baratheon|Joffrey]] to answer for Robb’s victory and, when told, pulls her to her feet, not ungently. As Ser Boros Blount beats her, he rasps that it is enough, but the king orders her stripped. When [[tyrion-lannister|Tyrion]] asks for something to cover her, Sandor tosses her his cloak.',
      },
    ),
    inBooks(
      [16, 115],
      { it: 'In mezzo alla folla', en: 'Through the mob' },
      {
        it: 'Tornando dalla partenza di [[myrcella-baratheon|Myrcella]], [[joffrey-baratheon|Joffrey]] ordina al Mastino di portargli l’uomo che gli ha tirato lo sterco, e la folla affamata si scaglia contro il corteo reale. Nel caos [[sansa-stark|Sansa]] si perde. Il Mastino la riporta al castello, coperto di sangue. Poi [[tyrion-lannister|Tyrion]] lo manda con [[bronn|Bronn]] a spegnere un incendio a Fondo delle Pulci, e vede la paura negli occhi del Mastino.',
        en: 'Riding back from [[myrcella-baratheon|Myrcella]]’s departure, [[joffrey-baratheon|Joffrey]] orders Sandor to bring him the man who threw dung at him, and the starving crowd turns on the royal party. In the chaos [[sansa-stark|Sansa]] is lost. Sandor brings her back to the castle, covered in blood. [[tyrion-lannister|Tyrion]] then sends him with [[bronn|Bronn]] to put out a fire in Flea Bottom, and sees fear in Sandor’s eyes.',
      },
    ),
    inBooks(
      [19, 133],
      { it: 'La Porta del Re', en: 'The King’s Gate' },
      {
        it: 'Alla Porta del Re, con la fronte che sanguina, il Mastino rifiuta l’ordine di [[tyrion-lannister|Tyrion]] di guidare un’altra sortita: tre sono già costate metà degli uomini. Maledice Tyrion e chiede del vino. Tyrion vede che ha paura, sfinito dalla battaglia e dal fuoco, e che la sua paura ha contagiato gli uomini che comanda. Quando Tyrion dice che guiderà lui stesso la sortita, il Mastino ride.',
        en: 'At the King’s Gate, bleeding from the forehead, Sandor refuses [[tyrion-lannister|Tyrion]]’s order to lead another sortie: three have already cost half the men. He curses Tyrion and asks for wine. Tyrion sees that he is afraid, worn out by the battle and by the fire, and that his fear has spread to the men he leads. When Tyrion says he will lead the sortie himself, Sandor laughs.',
      },
    ),
    inBooks(
      [19, 136],
      { it: 'Lasciare la città', en: 'Leaving the city' },
      {
        it: 'Dopo aver lasciato la battaglia il Mastino aspetta nell’ombra della stanza di [[sansa-stark|Sansa]], ubriaco e malconcio. Dice di aver perso, augura a [[tyrion-lannister|Tyrion]] di bruciare e annuncia che lascerà Approdo del Re, forse per il nord. Potrebbe proteggerla, dice, e le chiede la canzone che gli aveva promesso. Lei canta una strofa dell’inno alla Madre e gli sfiora la guancia, bagnata di lacrime. Lui si toglie il mantello bianco e lascia la stanza.',
        en: 'After leaving the battle Sandor waits in the shadows of [[sansa-stark|Sansa]]’s room, drunk and battered. He says he has lost, wishes [[tyrion-lannister|Tyrion]] burned, and is leaving King’s Landing, perhaps for the north. He could protect her, he says, and asks for the song she promised. She sings a verse of the Mother’s hymn and touches his cheek, wet with tears. He strips off his white cloak and leaves her room.',
      },
    ),
  ],
  'janos-slynt': [
    inBoth(
      [4, 28],
      { it: 'Troppo pochi uomini', en: 'Too few men' },
      {
        it: 'Janos Slynt comanda la Guardia cittadina di Approdo del Re, le cappe dorate. Con la città piena di gente arrivata per il torneo in onore del nuovo Primo Cavaliere, riferisce i disordini al Concilio ristretto e dice di avere troppo pochi uomini. [[eddard-stark|Eddard Stark]] gli presta venti uomini della propria guardia personale fino alla fine del torneo, e ordina di arruolare altre cinquanta guardie.',
        en: 'Janos Slynt commands the City Watch of King’s Landing, the gold cloaks. With the city full of people come for the tourney in honour of the new Hand, he reports the trouble to the small council and says he has too few men. [[eddard-stark|Eddard Stark]] lends him twenty men of his own household guard until the tourney is over, and orders fifty more watchmen hired.',
      },
    ),
    inBoth(
      [7, 50],
      { it: 'Le cappe dorate', en: 'The gold cloaks' },
      {
        it: '[[robert-baratheon|Re Robert]] muore per una ferita riportata durante una caccia al cinghiale. A [[eddard-stark|Eddard Stark]] serve l’appoggio della Guardia cittadina contro la regina, e [[petyr-baelish|Petyr Baelish]] deve comprarne la lealtà per lui. Nella sala del trono, davanti al nuovo re [[joffrey-baratheon|Joffrey]], Eddard ordina a Janos di arrestare la regina. Le cappe dorate invece uccidono gli uomini di Eddard, ed Eddard viene fatto prigioniero.',
        en: '[[robert-baratheon|King Robert]] dies of a wound from a boar hunt. [[eddard-stark|Eddard Stark]] needs the City Watch to back him against the queen, and [[petyr-baelish|Petyr Baelish]] is to buy its loyalty for him. In the throne room, before the new king [[joffrey-baratheon|Joffrey]], Eddard orders Janos to seize the queen. Instead the gold cloaks kill Eddard’s men, and Eddard is taken prisoner.',
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
    onScreen(
      [11, 77],
      { it: 'Il massacro dei bastardi', en: 'The bastards’ massacre' },
      {
        it: 'Janos Slynt guida le cappe dorate per la città a uccidere i bastardi di Robert. Nel bordello di [[petyr-baelish|Ditocorto]] dice a [[ros|Ros]] soltanto che gli ordini vengono da qualcuno a cui non importa che cosa pensi Petyr. Quando il suo uomo non riesce a uccidere la figlioletta di [[mhaegen|Mhaegen]], Janos lo fa con le sue mani. I suoi uomini vengono anche a sapere da [[tobho-mott|Tobho Mott]] che Gendry ha lasciato la città con le reclute dei Guardiani della notte.',
        en: 'Janos Slynt leads the gold cloaks through the city to kill Robert’s bastards. In [[petyr-baelish|Littlefinger]]’s brothel he tells [[ros|Ros]] only that his orders come from someone who does not care what Petyr thinks. When his man cannot bring himself to kill [[mhaegen|Mhaegen]]’s baby daughter, Janos does it himself. His men also learn from [[tobho-mott|Tobho Mott]] that Gendry has left the city with the Night’s Watch recruits.',
      },
    ),
    onScreen(
      [12, 82],
      { it: 'Mandato alla Barriera', en: 'Sent to the Wall' },
      {
        it: '[[tyrion-lannister|Tyrion]] invita Janos a cena e lo interroga sul massacro dei bastardi reali. Janos ammette senza problemi la sua parte, ma non dice chi abbia dato l’ordine. Tyrion lo fa arrestare e lo manda ai Guardiani della notte, e affida a [[bronn|Bronn]] il comando della Guardia cittadina.',
        en: '[[tyrion-lannister|Tyrion]] invites Janos to dinner and questions him about the massacre of the royal bastards. Janos freely admits his part, but will not say who gave the order. Tyrion has him arrested and sent to the Night’s Watch, and gives his command of the City Watch to [[bronn|Bronn]].',
      },
    ),
    inBooks(
      [12, 82],
      { it: 'La lancia insanguinata', en: 'The bloody spear' },
      {
        it: 'Al Concilio Janos dice a [[tyrion-lannister|Tyrion]] che c’è bisogno di lui, con le rivolte nelle strade. Giorni dopo, ubriaco alla tavola di Tyrion, raccomanda come successore Allar Deem, l’uomo che per lui ha ucciso una prostituta e la sua bambina, ma non dice chi l’abbia ordinato. Tyrion deride la lancia insanguinata del suo nuovo stemma e gli dice che non ha onore. Il figlio maggiore terrà un titolo e delle terre ma non Harrenhal, e una caracca porterà Janos alla Barriera. Sulla porta incontra il suo successore, [[jacelyn-bywater|ser Jacelyn Bywater]], e viene portato via.',
        en: 'At the council Janos tells [[tyrion-lannister|Tyrion]] he is needed, with rioting in the streets. Days later, drunk at Tyrion’s table, he urges Allar Deem as his successor, the man who killed a whore and her baby girl for him, though he will not say who ordered it. Tyrion mocks the bloody spear on his new arms and tells him he has no honour. His eldest son will keep a title and lands but not Harrenhal, and the carrack Summer’s Dream will take Janos to the Wall. At the door he meets his successor, [[jacelyn-bywater|Ser Jacelyn Bywater]], and is led away.',
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
        it: 'Il maestro di Gendry lo ha mandato via, e lui viaggia verso nord tra le reclute di [[yoren|Yoren]] per i Guardiani della notte. Tra loro c’è [[arya-stark|Arya Stark]], travestita da ragazzo con il nome di Arry. Quando alcuni degli altri ragazzi prendono di mira la spada di Arry e [[hot-pie|Frittella]] urta Gendry, Gendry minaccia di colpirlo e li mette in fuga. Poi dice ad Arya che ormai nessuno di loro conta più niente, ora che sono tutti dei Guardiani.',
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
        it: 'Mycah si allena con la spada insieme ad [[arya-stark|Arya]] vicino al fiume, finché il [[joffrey-baratheon|principe Joffrey]] non lo minaccia e Arya non colpisce il principe per difenderlo. Mycah scappa. L’uomo enorme che fa da guardia al principe si mette sulle sue tracce. Il ragazzo cerca di fuggire, ma l’uomo lo raggiunge a cavallo e lo uccide. Al suo ritorno [[eddard-stark|Eddard Stark]] scopre che cosa ha fatto al ragazzo, un amico di sua figlia.',
        en: 'Mycah practises swordplay with [[arya-stark|Arya]] by the river until [[joffrey-baratheon|Prince Joffrey]] threatens him and Arya strikes the prince to defend him. Mycah runs off. The huge man who guards the prince goes after him. The boy tries to flee, but the man rides him down and kills him. On the man’s return [[eddard-stark|Eddard Stark]] learns what he has done to the boy, a friend of his daughter.',
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
    onScreen(
      [12, 82],
      { it: 'Di nuovo al lavoro', en: 'Back to work' },
      {
        it: 'Nel bordello di [[petyr-baelish|Ditocorto]], Ros vede [[janos-slynt|Janos Slynt]] uccidere la figlioletta di [[mhaegen|Mhaegen]], una dei bastardi di Robert. È così sconvolta che crolla davanti a un cliente. Petyr le racconta di una ragazza triste che ha venduto a un lord dai gusti indicibili per riavere il suo denaro, e le chiede se una notte libera basterà a farla sorridere di nuovo. Ros sorride e dice di sì.',
        en: 'In [[petyr-baelish|Littlefinger]]’s brothel, Ros watches [[janos-slynt|Janos Slynt]] kill [[mhaegen|Mhaegen]]’s baby daughter, one of Robert’s bastards. She is so shaken that she breaks down in front of a client. Petyr tells her of a sad girl he sold to a lord with unspeakable tastes to recoup his money, and asks whether one night off will make her smile again. She smiles and says it will.',
      },
    ),
    onScreen(
      [14, 103],
      { it: 'Un dono per il re', en: 'A gift for the king' },
      {
        it: '[[tyrion-lannister|Tyrion]] manda Ros e [[daisy|Daisy]] da [[joffrey-baratheon|Joffrey]] come dono tardivo per il giorno del nome. Invece di andare a letto con loro, il re costringe Ros a picchiare Daisy con la sua cintura e poi con uno scettro, puntandole contro una balestra carica, e le ordina di portare Daisy da Tyrion per mostrargli che cosa è stato fatto.',
        en: '[[tyrion-lannister|Tyrion]] sends Ros and [[daisy|Daisy]] to [[joffrey-baratheon|Joffrey]] as a late name-day gift. Instead of bedding them, the king forces Ros to beat Daisy with his belt and then a sceptre, a loaded crossbow aimed at her, and orders her to take Daisy to Tyrion to show him what has been done.',
      },
    ),
    onScreen(
      [18, 128],
      {
        it: 'Scambiata per l’amante di Tyrion',
        en: 'Taken for Tyrion’s lover',
      },
      {
        it: '[[cersei-lannister|Cersei]] fa prendere e picchiare Ros, convinta che sia l’amante di [[tyrion-lannister|Tyrion]] per il ciondolo dei Lannister che lui le aveva regalato. La mostra a Tyrion e minaccia di ucciderla in modo atroce se a [[joffrey-baratheon|Joffrey]] succederà qualcosa. Tyrion sta al gioco per tenere segreta [[shae|Shae]], e Ros fa lo stesso. Lui giura di liberarla, e lei lo supplica di non dimenticarla.',
        en: '[[cersei-lannister|Cersei]] has Ros seized and beaten, believing she is [[tyrion-lannister|Tyrion]]’s lover because of the Lannister pendant he once gave her. She shows Ros to Tyrion and threatens to kill her horribly if harm comes to [[joffrey-baratheon|Joffrey]]. Tyrion plays along to keep [[shae|Shae]] secret, and Ros does the same. He vows to free her, and she begs him not to forget her.',
      },
    ),
    onScreen(
      [20, 141],
      { it: 'L’eunuco', en: 'The eunuch' },
      {
        it: 'Liberata dopo la battaglia, Ros riceve la visita di [[varys|Varys]], ma non sa chi sia finché non scopre che è un eunuco. Varys le fa ammettere che ha paura di [[petyr-baelish|Ditocorto]], e le dice che, a differenza del suo padrone, lui protegge chi lavora per lui.',
        en: 'Freed after the battle, Ros is visited by [[varys|Varys]], though she does not know who he is until she discovers he is a eunuch. He gets her to admit she is afraid of [[petyr-baelish|Littlefinger]], and tells her that, unlike her employer, he protects those who work for him.',
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
        it: 'Ser Boros Blount è uno dei sette cavalieri della Guardia reale. Ha cavalcato fino a Grande Inverno con [[robert-baratheon|re Robert]] e, insieme a [[meryn-trant|ser Meryn Trant]], ha fatto da guardia al re quando Robert si è allontanato a cavallo dal corteo con [[eddard-stark|Eddard Stark]]. Partecipa con i suoi confratelli giurati al torneo per il nuovo Primo Cavaliere, e resta al fianco del re quando [[gregor-clegane|Gregor]] e [[sandor-clegane|Sandor Clegane]] si affrontano nella lizza. Indossa il mantello bianco e serve il re nella Fortezza Rossa.',
        en: 'Ser Boros Blount is one of the seven knights of the Kingsguard. He rode north to Winterfell with [[robert-baratheon|King Robert]], and with [[meryn-trant|Ser Meryn Trant]] he guarded the king when Robert rode away from the party with [[eddard-stark|Eddard Stark]]. He rides with his sworn brothers in the tourney for the new Hand, and stands by the king when [[gregor-clegane|Gregor]] and [[sandor-clegane|Sandor Clegane]] fight in the lists. He wears the white cloak and serves the king in the Red Keep.',
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
      { it: 'Un saluto respinto', en: 'A greeting turned away' },
      {
        it: 'Ser Dontos Hollard è un cavaliere della corte di Approdo del Re. Quando [[sansa-stark|Sansa Stark]] entra nella sala del trono per implorare il nuovo re, [[joffrey-baratheon|Joffrey]], di risparmiare suo padre, Dontos, ubriaco, comincia a salutarla ad alta voce, ma ser [[balon-swann|Balon Swann]] lo ammonisce e lo fa tacere. Nella sala Sansa vede anche [[petyr-baelish|Petyr Baelish]] chiacchierare con Dontos e con ser Balon.',
        en: 'Ser Dontos Hollard is a knight of the court in King’s Landing. When [[sansa-stark|Sansa Stark]] enters the throne room to beg the new king, [[joffrey-baratheon|Joffrey]], to spare her father, a drunken Dontos starts to hail her aloud, but Ser [[balon-swann|Balon Swann]] warns him away. In the hall Sansa also sees [[petyr-baelish|Petyr Baelish]] chatting with Dontos and Ser Balon.',
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
        it: 'Masha Heddle gestisce la Locanda all’Incrocio, sulla Strada del Re. [[catelyn-stark|Catelyn Stark]] e [[rodrik-cassel|ser Rodrik]] vi si fermano mentre tornano in segreto verso nord. [[tyrion-lannister|Tyrion Lannister]] arriva con [[yoren|Yoren]] dei Guardiani della notte e scopre che alla locanda non c’è più una stanza libera per lui. Quando Tyrion riconosce Catelyn, lei chiede aiuto agli uomini presenti nella sala, lo accusa di aver tentato di far uccidere suo figlio e lo fa catturare sotto il tetto di Masha.',
        en: 'Masha Heddle runs the Inn at the Crossroads, on the kingsroad. [[catelyn-stark|Catelyn Stark]] and [[rodrik-cassel|Ser Rodrik]] stop there as they travel north in secret. [[tyrion-lannister|Tyrion Lannister]] arrives with [[yoren|Yoren]] of the Night’s Watch and finds that the inn has no room left for him. When Tyrion recognizes Catelyn, she calls on the men in the common room for help, accuses him of trying to have her son killed, and has him seized under Masha’s roof.',
      },
    ),
    inBooks(
      [8, 57],
      { it: 'La forca davanti alla locanda', en: 'The gibbet at the inn' },
      {
        it: 'Masha Heddle non si è schierata quando [[catelyn-stark|Catelyn Stark]] ha fatto prigioniero [[tyrion-lannister|Tyrion Lannister]] nella sua locanda. Quando l’esercito dei Lannister entra nelle Terre dei Fiumi, [[tywin-lannister|lord Tywin]] prende la Locanda all’Incrocio come suo alloggio e fa impiccare Masha a una forca per aver lasciato che suo figlio fosse catturato lì. Tyrion, raggiunto l’esercito del padre, guarda ciò che resta del corpo di Masha e ricorda che a lei aveva chiesto soltanto una stanza, un pasto e una caraffa di vino.',
        en: 'Masha Heddle took no side when [[catelyn-stark|Catelyn Stark]] took [[tyrion-lannister|Tyrion Lannister]] prisoner at her inn. When the Lannister army comes into the riverlands, [[tywin-lannister|Lord Tywin]] makes the Inn at the Crossroads his quarters and has Masha hanged from a gibbet for letting his son be seized there. Tyrion, reaching his father’s army, looks at what is left of her body and remembers that all he asked of her was a room, a meal and a flagon of wine.',
      },
    ),
  ],
  'jason-mallister': [
    inBooks(
      [4, 29],
      { it: 'Un cenno sulla strada', en: 'A nod on the road' },
      {
        it: 'Lord Jason Mallister, un lord delle Terre dei Fiumi giurato a Casa Tully, percorre la Strada del Re con i suoi uomini e con il figlio Patrek, diretto ad Approdo del Re per il torneo del Primo Cavaliere. Lungo la strada incrocia [[catelyn-stark|Catelyn Stark]] e [[rodrik-cassel|ser Rodrik Cassel]], che viaggiano in segreto verso nord. Catelyn lo conosce da quando era bambina, ma lord Jason rivolge ai due cavalieri solo un cenno distratto e non la riconosce.',
        en: 'Lord Jason Mallister, a riverlands lord sworn to House Tully, rides along the kingsroad with his men and his son Patrek, bound for the Hand’s tourney in King’s Landing. On the road he passes [[catelyn-stark|Catelyn Stark]] and [[rodrik-cassel|Ser Rodrik Cassel]], who are travelling north in secret. Catelyn has known him since she was a girl, but Lord Jason gives the two riders no more than a passing nod and does not recognize her.',
      },
    ),
    inBooks(
      [9, 64],
      {
        it: 'Il prigioniero del Bosco dei Sussurri',
        en: 'A prisoner in the Whispering Wood',
      },
      {
        it: 'Quando scoppia la guerra contro i Lannister, lord Jason Mallister combatte con l’esercito di [[robb-stark|Robb Stark]]. Nella battaglia del Bosco dei Sussurri, in cui Robb sconfigge l’esercito di [[jaime-lannister|Jaime Lannister]] e lo fa prigioniero, lord Jason cattura lord Gawen Westerling, uno degli alfieri dei Lannister.',
        en: 'When war breaks out with the Lannisters, Lord Jason Mallister fights with the army of [[robb-stark|Robb Stark]]. In the battle in the Whispering Wood, where Robb defeats the army of [[jaime-lannister|Jaime Lannister]] and takes him prisoner, Lord Jason captures Lord Gawen Westerling, one of the Lannisters’ bannermen.',
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
        it: 'Nelle Terre dei Fiumi alcuni villaggi vengono saccheggiati e dati alle fiamme, e i sopravvissuti arrivano ad Approdo del Re a chiedere giustizia. [[eddard-stark|Eddard Stark]], che siede sul Trono di Spade in assenza del re, ascolta i loro racconti e ritiene Gregor responsabile delle incursioni. Eddard priva Gregor del titolo di cavaliere, delle terre e dei titoli, e manda lord [[beric-dondarrion|Beric Dondarrion]] alla testa di una compagnia di uomini a consegnarlo alla giustizia del re.',
        en: 'Villages in the riverlands are raided and burned, and the survivors come to King’s Landing to ask for justice. [[eddard-stark|Eddard Stark]], who sits the Iron Throne in the king’s absence, hears them out and holds Gregor responsible for the raids. Eddard strips Gregor of his knighthood, his lands and his titles, and sends Lord [[beric-dondarrion|Beric Dondarrion]] at the head of a company of men to bring him to the king’s justice.',
      },
    ),
    onScreen(
      [10, 70],
      { it: 'Le Terre dei Fiumi in fiamme', en: 'The riverlands on fire' },
      {
        it: 'Gregor combatte nell’esercito di [[tywin-lannister|Tywin Lannister]]. Dopo che [[robb-stark|Robb Stark]] ha sconfitto un esercito dei Lannister e ha fatto prigioniero [[jaime-lannister|Jaime]], Tywin decide di spostare le sue forze a Harrenhal. Prima di partire ordina a Gregor di prendere cinquecento uomini e di mettere a ferro e fuoco le Terre dei Fiumi, dall’Occhio degli Dei alla Forca Rossa.',
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
        it: 'Nelle Terre dei Fiumi alcuni villaggi vengono saccheggiati e bruciati, e i sopravvissuti arrivano ad Approdo del Re a chiedere la giustizia del re. [[eddard-stark|Eddard Stark]], che siede sul Trono di Spade in assenza del re, ritiene responsabile ser [[gregor-clegane|Gregor Clegane]] e lo priva del titolo e delle terre. Poi affida a lord Beric il comando di una compagnia di uomini e lo manda nelle Terre dei Fiumi a consegnare Gregor alla giustizia.',
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
        it: 'Quando ser [[gregor-clegane|Gregor Clegane]] viene accusato delle incursioni nelle Terre dei Fiumi, [[eddard-stark|Eddard Stark]] manda lord [[beric-dondarrion|Beric Dondarrion]] con una compagnia di uomini a consegnarlo alla giustizia del re. Eddard ordina anche a Thoros, che ha vinto la mischia al torneo del Primo Cavaliere, di cavalcare con loro. Così il prete rosso lascia Approdo del Re nella compagnia di lord Beric.',
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
        en: 'Walder Frey, Lord of the Crossing, was slow to answer the call to arms of the Tullys, his liege lords, when the war began. When [[robb-stark|Robb Stark]]’s army needs to cross the river at the Twins, [[catelyn-stark|Catelyn Stark]] bargains with him. Walder lets the army cross in exchange for two marriages: Robb will wed one of his daughters, and [[arya-stark|Arya]] his youngest son, Elmar. Two of his grandsons, both named Walder, are to go to Winterfell as wards, and his son Olyvar is to become Robb’s squire.',
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
        it: 'Stevron Frey, un uomo sulla sessantina, è il figlio maggiore ed erede di [[walder-frey|lord Walder]]. Quando l’esercito di [[robb-stark|Robb Stark]] arriva alle Torri Gemelle in cerca di un passaggio sul fiume, Stevron esce a cavallo a parlamentare e si mostra cortese e rispettoso con [[catelyn-stark|Catelyn Stark]]. Dopo che Catelyn ha concluso l’accordo con suo padre, Stevron marcia verso sud con l’esercito di Robb.',
        en: 'Stevron Frey, a man in his sixties, is the eldest son and heir of [[walder-frey|Lord Walder]]. When [[robb-stark|Robb Stark]]’s army reaches the Twins looking for a way across the river, Stevron rides out to parley and shows courtesy and deference to [[catelyn-stark|Catelyn Stark]]. Once Catelyn has struck her bargain with his father, Stevron marches south with Robb’s army.',
      },
    ),
    inBooks(
      [10, 72],
      {
        it: 'Il consiglio di Delta delle Acque',
        en: 'The council at Riverrun',
      },
      {
        it: 'Dopo che le vittorie di Robb hanno spezzato l’assedio di Delta delle Acque, Stevron siede al consiglio di guerra dei lord del Nord e delle Terre dei Fiumi. I suoi consigli sono prudenti: lasciare che i Baratheon e i Lannister si logorino a vicenda, offrire una tregua a [[tywin-lannister|lord Tywin]] e restituirgli in cambio di un riscatto il prigioniero [[jaime-lannister|Jaime Lannister]]. I lord del Nord non vogliono sentirne parlare, e proclamano invece [[robb-stark|Robb Stark]] Re del Nord.',
        en: 'After Robb’s victories break the siege of Riverrun, Stevron sits in the war council of the northern and river lords. His advice is cautious: let the Baratheons and the Lannisters wear each other down, offer [[tywin-lannister|Lord Tywin]] a truce, and ransom the captive [[jaime-lannister|Jaime Lannister]] back to him. The northern lords will not hear of it, and instead they name [[robb-stark|Robb Stark]] King in the North.',
      },
    ),
  ],
  'edmure-tully': [
    inBooks(
      [23, 72],
      { it: 'Liberato da suo nipote', en: 'Freed by his nephew' },
      {
        it: 'Edmure Tully, il fratello minore di [[catelyn-stark|Catelyn Stark]], comanda gli eserciti delle Terre dei Fiumi da quando suo padre, [[hoster-tully|lord Hoster]], si è ammalato. Quando i Lannister hanno attaccato, ha schierato le sue forze lungo il confine e, su consiglio del padre, ha mandato messaggeri al re a chiedere aiuto. È stato fatto prigioniero da [[jaime-lannister|Jaime Lannister]], e torna libero quando suo nipote [[robb-stark|Robb Stark]] spezza l’assedio dei Lannister a Delta delle Acque. Edmure è presente al consiglio di guerra in cui i lord proclamano Robb Re del Nord.',
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
        it: 'Brynden chiede alla nipote [[lysa-arryn|Lysa]] di mandare uomini in aiuto delle Terre dei Fiumi contro i Lannister. Lysa rifiuta, e Brynden lascia il suo incarico e parte con [[catelyn-stark|Catelyn]]. I due navigano fino a Porto Bianco e proseguono fino a Moat Cailin, dove Brynden incontra per la prima volta il pronipote [[robb-stark|Robb Stark]]. Robb lo mette al comando dei suoi esploratori, e Brynden siede ai suoi consigli di guerra.',
        en: 'Brynden urges his niece [[lysa-arryn|Lysa]] to send men to help the riverlands against the Lannisters. Lysa refuses, so Brynden gives up his post and leaves with [[catelyn-stark|Catelyn]]. They sail to White Harbor and ride on to Moat Cailin, where Brynden meets his great-nephew [[robb-stark|Robb Stark]] for the first time. Robb puts him in charge of his outriders, and Brynden sits on his war councils.',
      },
    ),
    inBooks(
      [23, 64],
      { it: 'Lo schermo degli esploratori', en: 'The screen of outriders' },
      {
        it: 'Mentre l’esercito di Robb scende nelle Terre dei Fiumi, Brynden e i suoi esploratori combattono gli esploratori dei Lannister guidati da ser [[addam-marbrand|Addam Marbrand]] e tengono nascosti al nemico i movimenti di Robb. Grazie a loro l’esercito di Robb coglie di sorpresa [[jaime-lannister|Jaime Lannister]] nel Bosco dei Sussurri. L’esercito di Jaime viene sconfitto, e Jaime stesso viene fatto prigioniero.',
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
    onScreen(
      [5, 35],
      { it: 'Sulla strada alta', en: 'On the high road' },
      {
        it: 'Bronn cavalca verso est con il gruppo di [[catelyn-stark|Catelyn Stark]] e sente [[tyrion-lannister|Tyrion]], il prigioniero, promettere una ricompensa a chiunque lo aiuti. Quando gli uomini delle tribù delle montagne li assalgono, Bronn ne uccide diversi, e sia Tyrion sia Catelyn notano come combatte. Dopo lo scontro il gruppo riprende il cammino verso la Valle.',
        en: 'Bronn rides east with [[catelyn-stark|Catelyn Stark]]’s party and hears [[tyrion-lannister|Tyrion]], her prisoner, promise a reward to any man who helps him. When men of the hill tribes attack, Bronn kills several of them, and both Tyrion and Catelyn take note of how he fights. After the fight the party rides on toward the Vale.',
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
        it: 'Sulla strada del ritorno attraverso le montagne, Bronn accompagna [[tyrion-lannister|Tyrion]] in cambio di denaro, e mette in chiaro che non è suo amico né la sua spada giurata. Tyrion promette di superare qualunque offerta gli venga fatta. Gli uomini dei clan guidati da [[shagga|Shagga]] li sorprendono nel loro accampamento, ma Tyrion conquista le tribù delle montagne con la promessa di armi. All’accampamento di [[tywin-lannister|lord Tywin]], Bronn dice a Tywin che non avrebbe conosciuto suo padre, e la battuta diverte [[kevan-lannister|Kevan]] più di Tywin.',
        en: 'On the road back through the mountains, Bronn rides at [[tyrion-lannister|Tyrion]]’s side for pay, and makes it plain that he is not Tyrion’s friend or his sworn sword. Tyrion promises to beat any offer made for him. Clansmen led by [[shagga|Shagga]] catch them in their camp, but Tyrion wins the hill tribes over with a promise of weapons. At [[tywin-lannister|Lord Tywin]]’s camp, Bronn tells Tywin he would not have known his father, and the remark amuses [[kevan-lannister|Kevan]] more than it does Tywin.',
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
    onScreen(
      [12, 82],
      { it: 'Al comando delle cappe dorate', en: 'Gold cloak commander' },
      {
        it: '[[tyrion-lannister|Tyrion]] fa arrestare e mandare alla Barriera [[janos-slynt|Janos Slynt]], che ha guidato il massacro dei bastardi di Robert, e ricompensa la lealtà di Bronn affidandogli al suo posto il comando della Guardia cittadina. Poi mette alla prova il mercenario, chiedendogli se ucciderebbe un neonato se glielo ordinassero.',
        en: '[[tyrion-lannister|Tyrion]] has [[janos-slynt|Janos Slynt]], who led the massacre of Robert’s bastards, arrested and sent to the Wall, and rewards Bronn’s loyalty with command of the City Watch in his place. Then he tests the sellsword, asking him whether he would kill an infant if he were told to.',
      },
    ),
    onScreen(
      [14, 103],
      { it: 'Un consiglio sul re', en: 'Advice about the king' },
      {
        it: 'Bronn arresta [[pycelle|Pycelle]] per conto di [[tyrion-lannister|Tyrion]], trovandolo a letto con [[daisy|Daisy]], gli taglia quasi tutta la barba e lo porta nelle celle nere. Quando [[joffrey-baratheon|Joffrey]] fa picchiare [[sansa-stark|Sansa]] davanti alla corte, Tyrion zittisce [[meryn-trant|ser Meryn Trant]] ordinando a Bronn di ucciderlo se apre di nuovo bocca. Poi Bronn suggerisce che al giovane re arrabbiato serva una donna, e Tyrion gli manda due prostitute.',
        en: 'Bronn arrests [[pycelle|Pycelle]] for [[tyrion-lannister|Tyrion]], finding him in bed with [[daisy|Daisy]], cuts off most of his beard and takes him to the black cells. When [[joffrey-baratheon|Joffrey]] has [[sansa-stark|Sansa]] beaten before the court, Tyrion silences [[meryn-trant|Ser Meryn Trant]] by ordering Bronn to kill him if he opens his mouth again. Bronn then suggests that what the angry young king needs is a woman, and Tyrion sends him two prostitutes.',
      },
    ),
    onScreen(
      [19, 135],
      { it: 'La freccia infuocata', en: 'The flaming arrow' },
      {
        it: 'La notte prima della battaglia Bronn beve con gli uomini dei Lannister e si scontra con [[sandor-clegane|Sandor Clegane]]. Durante la battaglia aspetta il segnale di [[tyrion-lannister|Tyrion]] fuori dalle mura, sulla riva della baia. Quando Tyrion lascia cadere una torcia dai bastioni, Bronn scocca la freccia infuocata che incendia l’altofuoco tra le navi di [[stannis-baratheon|Stannis]]. Più tardi si unisce allo scontro in tempo per salvare il Mastino, paralizzato alla vista degli uomini in fiamme.',
        en: 'On the eve of battle Bronn drinks with the Lannister men and clashes with [[sandor-clegane|Sandor Clegane]]. During the battle he waits outside the walls on the shore of the bay for [[tyrion-lannister|Tyrion]]’s signal. When Tyrion drops a torch from the battlements, Bronn shoots the flaming arrow that sets the wildfire ablaze among [[stannis-baratheon|Stannis]]’s ships. Later he joins the fight in time to save Sandor, frozen by the sight of burning men.',
      },
    ),
    onScreen(
      [20, 141],
      { it: 'Sollevato dal comando', en: 'Relieved of command' },
      {
        it: 'Dopo la battaglia il padre di Tyrion, [[tywin-lannister|Tywin]], torna come Primo Cavaliere, e Bronn viene sollevato dal comando della Guardia cittadina. [[varys|Varys]] porta la notizia a [[tyrion-lannister|Tyrion]] ferito, insieme a quella che i clan delle montagne sono tornati a casa con il loro bottino: Tyrion ha perso tutto il suo potere.',
        en: 'After the battle Tyrion’s father, [[tywin-lannister|Tywin]], returns as Hand, and Bronn is relieved of his command of the City Watch. [[varys|Varys]] brings the news to the wounded [[tyrion-lannister|Tyrion]], with word that the hill tribes have gone home with their plunder: Tyrion has lost all his power.',
      },
    ),
    inBooks(
      [12, 82],
      { it: 'Chiederei quanto', en: 'I’d ask how much' },
      {
        it: 'Bronn recluta mercenari per la guardia di [[tyrion-lannister|Tyrion]], prendendo solo quelli che lo colpiscono in un duello; l’uomo che lo ucciderà, dice, sarà uno che Tyrion vorrà assumere. Quando Tyrion gli chiede se ucciderebbe senza fare domande una neonata su comando, Bronn risponde che una domanda la farebbe: chiederebbe quanto. Tyrion pensa di avere cento uomini così tutti suoi.',
        en: 'Bronn hires sellswords for [[tyrion-lannister|Tyrion]]’s guard, taking only those who impress him in a duel; the man who kills him, he says, will be one Tyrion wants to hire. When Tyrion asks whether he would kill a baby girl without question if commanded, Bronn answers that he would not do it without question: he would ask how much. Tyrion reflects that he has a hundred such men of his own.',
      },
    ),
    inBooks(
      [13, 91],
      {
        it: 'Capitano della guardia del Primo Cavaliere',
        en: 'Captain of the Hand’s guard',
      },
      {
        it: 'Ora armato come capitano della guardia del Primo Cavaliere, Bronn osserva gli uomini d’arme che si addestrano e indica il ritmo che costerà la vita a un cavaliere errante quando lo affronterà. Riferisce a [[tyrion-lannister|Tyrion]] di trenta postulanti, tra cui un usuraio di Braavos e dei mercanti di cibo che chiedono protezione dalla folla affamata, e che [[alliser-thorne|ser Alliser Thorne]] è arrivato dalla Barriera con una mano in putrefazione. Tyrion fa mettere Alliser in una cella sporca ad aspettare.',
        en: 'Now armoured as captain of the Hand’s guard, Bronn watches the men-at-arms at practice and points out the rhythm that will kill a hedge knight when he faces him. He reports thirty supplicants to [[tyrion-lannister|Tyrion]], among them a Braavosi moneylender and food merchants who want protection from hungry mobs, and that [[alliser-thorne|Ser Alliser Thorne]] has come from the Wall with a rotting hand. Tyrion has Alliser put in a dirty cell to wait.',
      },
    ),
    inBooks(
      [19, 133],
      { it: 'La catena', en: 'The chain' },
      {
        it: 'Per conto di [[tyrion-lannister|Tyrion]], Bronn brucia le case lungo le mura della città vicino al molo, perché il nemico non possa arrampicarsi dai tetti. Nella battaglia è appostato sotto la Fortezza Rossa, agli argani della grande catena. Appena la nave ammiraglia di [[stannis-baratheon|Stannis]] è passata, la catena viene sollevata sulle Acque Nere alle spalle della flotta, e intrappola nell’altofuoco quasi tutte le navi in fiamme.',
        en: 'For [[tyrion-lannister|Tyrion]], Bronn burns the houses along the city wall by the quay, so that the enemy cannot climb from their roofs. In the battle he is posted beneath the Red Keep, at the winches of the great chain. Once [[stannis-baratheon|Stannis]]’s flagship has passed, the chain is raised across the Blackwater behind the fleet, trapping most of the burning ships in the wildfire.',
      },
    ),
    onScreen(
      [18, 128],
      { it: 'Ladri e cibo', en: 'Thieves and food' },
      {
        it: 'Come comandante della Guardia cittadina, Bronn riduce i crimini eliminando i ladri noti della città, e si scontra con [[tyrion-lannister|Tyrion]] per la brutalità dei suoi metodi. Mentre aiuta Tyrion a preparare la difesa contro [[stannis-baratheon|Stannis]], deride i suoi libri e lo avverte che in un assedio conta soprattutto il cibo: per questo ha rastrellato i ladri, perché non mettano le mani sulle scorte della città.',
        en: 'As commander of the City Watch, Bronn cuts crime by culling the city’s known thieves, and clashes with [[tyrion-lannister|Tyrion]] over his brutal methods. Helping Tyrion plan the defence against [[stannis-baratheon|Stannis]], he scoffs at Tyrion’s books and warns that food matters most in a siege: that is why he rounded up the thieves, to keep them away from the city’s stores.',
      },
    ),
  ],
  'shae': [
    onScreen(
      [9, 63],
      { it: 'Il gioco del vino', en: 'The drinking game' },
      {
        it: 'Shae segue l’esercito dei Lannister, legata a un cavaliere finché [[bronn|Bronn]] non lo convince a cederla a [[tyrion-lannister|Tyrion]]. Tyrion le chiede la verità, e anche di comportarsi come se lo desiderasse. In un gioco a base di vino con Bronn, lei rivela poco del proprio passato e rivolge invece le domande a Tyrion, che racconta di aver sposato una ragazza di nome Tysha, rivelatasi una prostituta pagata da suo fratello, e di che cosa le fece suo padre. Shae passa con lui la notte prima della battaglia.',
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
    onScreen(
      [13, 99],
      { it: 'L’ancella di Sansa', en: 'Sansa’s handmaiden' },
      {
        it: '[[tyrion-lannister|Tyrion]] ha portato Shae ad Approdo del Re contro l’ordine del padre e la nasconde nella Torre del Primo Cavaliere. [[varys|Varys]] la scopre presto e lascia intendere che potrebbe rivelarlo. Shae si lamenta di essere chiusa nelle stanze di Tyrion, così lui e Varys le trovano un lavoro: diventa l’ancella di [[sansa-stark|Sansa Stark]], che sfoga la sua frustrazione sull’inesperienza della nuova arrivata.',
        en: '[[tyrion-lannister|Tyrion]] has brought Shae to King’s Landing against his father’s order and hides her in the Tower of the Hand. [[varys|Varys]] soon discovers her and hints that he could reveal her. Shae complains about being confined to Tyrion’s chambers, so he and Varys find her work: she becomes the handmaiden of [[sansa-stark|Sansa Stark]], who vents her frustration on the new girl’s inexperience.',
      },
    ),
    onScreen(
      [16, 115],
      { it: 'Non fidarti di nessuno', en: 'Trust no one' },
      {
        it: 'Nella rivolta che segue la partenza di [[myrcella-baratheon|Myrcella]] per Dorne, alcuni uomini della folla trascinano via [[sansa-stark|Sansa]] e stanno per violentarla, finché [[sandor-clegane|Sandor Clegane]] non li uccide e la riporta al castello. Ferita e sconvolta, Sansa comincia a fidarsi di Shae e le confida di odiare [[joffrey-baratheon|Joffrey]]. Shae la avverte di non fidarsi di nessuno.',
        en: 'In the riot that follows [[myrcella-baratheon|Myrcella]]’s departure for Dorne, men from the mob drag [[sansa-stark|Sansa]] away and are about to rape her, until [[sandor-clegane|Sandor Clegane]] kills them and carries her back to the castle. Injured and shaken, Sansa comes to trust Shae and confides that she hates [[joffrey-baratheon|Joffrey]]. Shae warns her to trust no one.',
      },
    ),
    onScreen(
      [17, 126],
      { it: 'Le lenzuola insanguinate', en: 'The bloody sheets' },
      {
        it: '[[sansa-stark|Sansa]] si sveglia e scopre di avere avuto il primo sangue, e va nel panico, perché ora può essere data in sposa a [[joffrey-baratheon|Joffrey]] e dovrà dargli un figlio. Shae la aiuta a rigirare il materasso e a nascondere le lenzuola, ma [[sandor-clegane|Sandor Clegane]] le trova, e Sansa viene portata da [[cersei-lannister|Cersei]].',
        en: '[[sansa-stark|Sansa]] wakes to find she has had her first blood and panics, since it means she can be married to [[joffrey-baratheon|Joffrey]] and expected to bear his son. Shae helps her try to flip the mattress and hide the sheets, but [[sandor-clegane|Sandor Clegane]] finds them, and Sansa is brought before [[cersei-lannister|Cersei]].',
      },
    ),
    onScreen(
      [19, 136],
      {
        it: 'La notte prima della battaglia',
        en: 'The night before the battle',
      },
      {
        it: 'La notte prima della battaglia [[tyrion-lannister|Tyrion]] dice a Shae che può ancora lasciare la città, ma lei resta con lui. Durante la battaglia serve [[sansa-stark|Sansa]] tra le dame della corte nella Fortezza di Maegor, dove [[cersei-lannister|Cersei]] la interroga e la trova un’ancella poco credibile. Quando Cersei se ne va, Shae dice a Sansa di chiudersi nella sua stanza e di aspettare Stannis, che non le farebbe del male, mentre [[ilyn-payne|ser Ilyn]] potrebbe farlo.',
        en: 'On the eve of the battle, [[tyrion-lannister|Tyrion]] tells Shae she can still leave the city, but she stays with him. During the battle she waits on [[sansa-stark|Sansa]] among the court’s ladies in Maegor’s Holdfast, where [[cersei-lannister|Cersei]] questions her and finds her an unlikely handmaiden. When Cersei leaves, Shae tells Sansa to lock herself in her room and wait for Stannis, who would not harm her, while [[ilyn-payne|Ser Ilyn]] might.',
      },
    ),
    onScreen(
      [20, 141],
      { it: 'Pentos', en: 'Pentos' },
      {
        it: 'Shae va da [[tyrion-lannister|Tyrion]] nelle stanze misere dove si riprende dalla ferita, e gli scopre la cicatrice. Il padre di Tyrion, [[tywin-lannister|Tywin]], ha preso il suo posto come Primo Cavaliere, e [[varys|Varys]] gli ha detto che ha perso tutto il suo potere. Shae lo supplica di lasciare la città con lei per Pentos. Tyrion rifiuta.',
        en: 'Shae comes to [[tyrion-lannister|Tyrion]] in the shabby quarters where he recovers from his wound, and uncovers his scar. His father [[tywin-lannister|Tywin]] has taken his place as Hand, and [[varys|Varys]] has told him he has lost all his power. Shae begs him to leave the city with her for Pentos. Tyrion refuses.',
      },
    ),
    inBooks(
      [11, 77],
      { it: 'Una locanda in città', en: 'An inn in the city' },
      {
        it: 'La prima notte in città [[tyrion-lannister|Tyrion]] trova Shae in una locanda, seduta con [[varys|Varys]], che l’ha scovata in fretta. Quando Varys gli lascia il suo indovinello, Shae ipotizza che a vivere sia il ricco. Di sopra prende in giro Tyrion perché dormirà da solo nella Torre del Primo Cavaliere. Lui si dice che è una puttana e che vuole solo il suo denaro; quando lei gli chiede che cosa farà come Primo Cavaliere, risponde che farà giustizia.',
        en: 'On his first night in the city [[tyrion-lannister|Tyrion]] finds Shae at an inn, sitting with [[varys|Varys]], who has found her quickly. When Varys leaves his riddle, Shae guesses that the rich man lives. Upstairs she teases Tyrion about sleeping alone in the Tower of the Hand. He tells himself she is a whore and only after his coin; asked what he will do as Hand, he says he will do justice.',
      },
    ),
    inBooks(
      [14, 103],
      { it: 'La casa protetta', en: 'The manse' },
      {
        it: '[[varys|Varys]] ha sistemato Shae in una casa in città, sorvegliata da uomini come quelli che [[tyrion-lannister|Tyrion]] ha chiesto: brutti, spaventosi e senza alcun interesse per le donne. Tenere lontani i suoi uomini dei clan serve a mantenere il segreto. Tyrion la raggiunge di notte attraverso un cunicolo nascosto che parte dal bordello di Chataya. Lei si sveglia mentre lui la prende, e dice che stava facendo il sogno più dolce.',
        en: '[[varys|Varys]] has set Shae up in a manse in the city, guarded by men of the kind [[tyrion-lannister|Tyrion]] asked for: ugly, frightening and with no taste for women. Keeping his clansmen away keeps her secret. Tyrion reaches her at night through a hidden tunnel from Chataya’s brothel. She wakes as he takes her, and says she was having the sweetest dream.',
      },
    ),
    inBooks(
      [13, 118],
      { it: 'Una dama a corte', en: 'A lady at court' },
      {
        it: 'Shae chiede a [[tyrion-lannister|Tyrion]] di farne la sua dama a corte, e gli suggerisce perfino di uccidere Cersei. Quando lui propone di nasconderla nelle cucine della Fortezza Rossa, lei rifiuta e lo deride perché ha paura del padre, e Tyrion la schiaffeggia. Pentito, le racconta di Tysha. Poi [[varys|Varys]] propone di metterla al servizio di [[lollys-stokeworth|Lollys Stokeworth]] come cameriera, con un passaggio segreto verso la Torre del Primo Cavaliere.',
        en: 'Shae asks [[tyrion-lannister|Tyrion]] to make her his lady at court, and even suggests he kill Cersei. When he proposes hiding her in the kitchens of the Red Keep, she refuses and mocks his fear of his father, and he slaps her. Regretting it, he tells her about Tysha. Afterwards [[varys|Varys]] suggests she serve as a maid to [[lollys-stokeworth|Lollys Stokeworth]], with a secret passage to the Tower of the Hand.',
      },
    ),
    inBooks(
      [18, 128],
      { it: 'Il passaggio segreto', en: 'Through the passage' },
      {
        it: '[[cersei-lannister|Cersei]] fa prendere e picchiare una ragazza del bordello di Chataya, credendola l’amante di [[tyrion-lannister|Tyrion]]: è [[alayaya|Alayaya]], non Shae. Tyrion è sollevato che la sorella non l’abbia trovata. Quella notte trova Shae nella sua stanza nella Torre del Primo Cavaliere. È arrivata dal passaggio segreto, ma [[varys|Varys]] l’ha bendata, così non sa dove cominci.',
        en: '[[cersei-lannister|Cersei]] seizes a girl from Chataya’s brothel, taking her for [[tyrion-lannister|Tyrion]]’s lover, and has her beaten: [[alayaya|Alayaya]], not Shae. Tyrion is relieved that his sister has not found her. That night he finds Shae in his room in the Tower of the Hand. She has come through the secret passage, but [[varys|Varys]] blindfolded her, so she does not know where it begins.',
      },
    ),
    inBooks(
      [19, 131],
      { it: 'Al servizio di Lollys', en: 'In Lollys’s service' },
      {
        it: 'Ora cameriera della casa di [[lollys-stokeworth|Lollys Stokeworth]], Shae aiuta lady Tanda e [[sansa-stark|Sansa]] a portare Lollys nella Fortezza di Maegor mentre comincia la battaglia. Lì quasi tutte le nobildonne della città si riuniscono con [[cersei-lannister|Cersei]] nella sala da ballo della regina, e tra loro c’è [[ilyn-payne|ser Ilyn Payne]], per occuparsi dei traditori e, dice la regina, per difenderle se la città cadrà.',
        en: 'Now a maid in [[lollys-stokeworth|Lollys Stokeworth]]’s household, Shae helps Lady Tanda and [[sansa-stark|Sansa]] guide Lollys into Maegor’s Holdfast as the battle begins. Almost every highborn woman in the city gathers there with [[cersei-lannister|Cersei]] in the Queen’s Ballroom, and [[ilyn-payne|Ser Ilyn Payne]] stands among them, to deal with traitors and, the queen says, to defend them if the city falls.',
      },
    ),
  ],
  'podrick-payne': [
    inBooks(
      [19, 63],
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
        it: 'Frittella è un ragazzo tra le reclute che [[yoren|Yoren]] porta a nord per i Guardiani della notte. Quando [[arya-stark|Arya]] si unisce a loro travestita da ragazzo, con il nome di Arry, Frittella e un’altra recluta la prendono di mira e pretendono la sua spada. Frittella si vanta di aver ucciso un ragazzo a calci. Arya sguaina la spada e gli dice che ha già ucciso un ragazzo grasso. Frittella indietreggia fino a urtare [[gendry|Gendry]], che prende le parti di Arry e mette in fuga i due.',
        en: 'Hot Pie is a boy among the recruits [[yoren|Yoren]] is taking north to the Night’s Watch. When [[arya-stark|Arya]] joins them disguised as a boy called Arry, Hot Pie and another recruit pick on her and demand her sword. Hot Pie boasts that he once kicked a boy to death. Arya draws the sword and tells him she has already killed one fat boy. Hot Pie backs away into [[gendry|Gendry]], who takes Arry’s side and scares the two boys off.',
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
        it: 'Lady [[lysa-arryn|Lysa]] non sceglie ser Lyn come campione, ma ser [[vardis-egen|Vardis Egen]], e il mercenario [[bronn|Bronn]] uccide Vardis. Così [[tyrion-lannister|Tyrion Lannister]] è libero. È Lyn a scortare Tyrion e Bronn giù dalla montagna, fino alla Porta Insanguinata, dove li lascia proseguire da soli per la strada alta e ordina loro di non tornare mai più nella Valle.',
        en: 'Lady [[lysa-arryn|Lysa]] does not choose Ser Lyn as her champion but Ser [[vardis-egen|Vardis Egen]], and the sellsword [[bronn|Bronn]] kills Vardis. So [[tyrion-lannister|Tyrion Lannister]] goes free. It is Lyn who escorts Tyrion and Bronn down the mountain to the Bloody Gate, where he leaves them to go on alone along the high road and orders them never to come back to the Vale.',
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
        it: 'Stiv è un disertore dei Guardiani della notte, fuggito a sud insieme ad altri fuorilegge, tra cui la bruta [[osha|Osha]]. Nella Foresta del Lupo la banda sorprende da solo [[bran-stark|Bran Stark]], che non può camminare, e cerca di derubarlo. Il fratello di Bran, [[robb-stark|Robb]], torna indietro e affronta i fuorilegge. Stiv punta un coltello alla gola di Bran e cerca di imporre i suoi patti a Robb, ma [[theon-greyjoy|Theon Greyjoy]] lo uccide con una freccia. Osha si arrende.',
        en: 'Stiv is a deserter of the Night’s Watch who has fled south with other outlaws, among them the wildling [[osha|Osha]]. In the wolfswood the band comes upon [[bran-stark|Bran Stark]], who cannot walk, alone, and tries to rob him. Bran’s brother [[robb-stark|Robb]] comes back and takes on the outlaws. Stiv puts a knife to Bran’s throat and tries to dictate terms to Robb, but [[theon-greyjoy|Theon Greyjoy]] kills him with an arrow. Osha surrenders.',
      },
    ),
  ],
  'wallen': [
    inBoth(
      [6, 38],
      { it: 'I fuorilegge e il ragazzo', en: 'The outlaws and the boy' },
      {
        it: 'Wellen è un disertore dei Guardiani della notte, fuggito a sud con il compagno [[stiv|Stiv]], con la bruta [[osha|Osha]] e con altri fuorilegge. Nella Foresta del Lupo la banda sorprende da solo [[bran-stark|Bran Stark]], che non può camminare, e cerca di derubarlo. Il fratello di Bran, [[robb-stark|Robb]], torna in suo aiuto, e Wellen muore nello scontro. Stiv viene ucciso da una freccia di [[theon-greyjoy|Theon Greyjoy]], e Osha si arrende.',
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
        it: 'Chella e le sue Orecchie Nere sono tra gli uomini dei clan che seguono [[tyrion-lannister|Tyrion Lannister]] nella battaglia della Forca Verde, con i Corvi di Pietra di [[shagga|Shagga]] e gli Uomini Bruciati di [[timett|Timmet]]. I clan si battono bene, anche se circa la metà di loro muore. Durante la battaglia Chella prende quattro orecchie per la sua collana.',
        en: 'Chella and her Black Ears are among the clansmen who follow [[tyrion-lannister|Tyrion Lannister]] in the battle on the Green Fork, with [[shagga|Shagga]]’s Stone Crows and [[timett|Timett]]’s Burned Men. The clans fight well, although about half of them die. During the battle Chella takes four ears for her necklace.',
      },
    ),
  ],
  // End of #1362.
  // Winterfell and the North (#1361).
  'eddard-stark': [
    inBooks(
      [1, 2],
      {
        it: 'Chi pronuncia la sentenza',
        en: 'The man who passes the sentence',
      },
      {
        it: 'Eddard, lord di Grande Inverno, porta il figlio [[bran-stark|Bran]] ad assistere all’esecuzione di un disertore dei Guardiani della notte e decapita il disertore di persona con Ghiaccio, la propria spada. Sulla via del ritorno spiega a Bran che secondo l’uso dei Primi Uomini chi pronuncia la sentenza deve anche eseguirla. [[robb-stark|Robb]] e [[jon-snow|Jon Snow]] trovano una meta-lupa morta con un pezzo di corno di cervo nella gola. [[theon-greyjoy|Theon Greyjoy]] propone di uccidere i cuccioli, ma Jon fa notare che sono cinque, uno per ogni figlio legittimo di Eddard, ed Eddard li lascia tenere a patto che i ragazzi li allevino da soli.',
        en: 'Eddard, the lord of Winterfell, takes his son [[bran-stark|Bran]] to watch the execution of a deserter from the Night’s Watch and beheads the man himself with his sword, Ice. On the way back he explains to Bran that, by the custom of the First Men, the man who passes the sentence should carry it out. [[robb-stark|Robb]] and [[jon-snow|Jon Snow]] find a dead direwolf with a piece of stag antler in her throat. [[theon-greyjoy|Theon Greyjoy]] offers to kill the pups, but Jon points out that there are five, one for each of Eddard’s trueborn children, and Eddard lets them keep the pups if the children raise them themselves.',
      },
    ),
    onScreen(
      [1, 5],
      { it: 'Il re a Grande Inverno', en: 'The king at Winterfell' },
      {
        it: 'Eddard decapita di persona un disertore dei Guardiani della notte, perché chi pronuncia la sentenza deve brandire la spada. Al ritorno lascia tenere ai figli i cuccioli di una meta-lupa morta. Poi [[catelyn-stark|Catelyn]] gli porta la notizia che Jon Arryn, che era Primo Cavaliere del Re, è morto e che il re sta arrivando. Nelle cripte di Grande Inverno [[robert-baratheon|re Robert]] gli offre la carica di Primo Cavaliere e propone di dare in sposa [[sansa-stark|Sansa]] a suo figlio [[joffrey-baratheon|Joffrey]]. Quella notte una lettera della sorella di Catelyn accusa i Lannister di aver ucciso Jon Arryn, ed Eddard accetta la carica.',
        en: 'Eddard beheads a deserter from the Night’s Watch himself, because the man who passes the sentence should swing the sword. On the way back he lets his children keep the pups of a dead direwolf. Then [[catelyn-stark|Catelyn]] brings him word that Jon Arryn, who was Hand of the King, is dead and that the king is on his way. In the crypts of Winterfell [[robert-baratheon|King Robert]] offers him the post of Hand and proposes that [[sansa-stark|Sansa]] marry his son [[joffrey-baratheon|Joffrey]]. That night a letter from Catelyn’s sister accuses the Lannisters of murdering Jon Arryn, and Eddard accepts the post.',
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
        it: 'Eddard lascia Grande Inverno mentre [[bran-stark|Bran]] giace privo di sensi dopo la caduta, e parte verso sud con [[robert-baratheon|re Robert]] e le figlie. Lungo la strada [[arya-stark|Arya]] colpisce il principe [[joffrey-baratheon|Joffrey]], che minacciava un ragazzo, e la meta-lupa di Arya morde il principe. Davanti al re [[sansa-stark|Sansa]] dice di non ricordare cosa sia successo. [[cersei-lannister|Cersei]] pretende la morte della meta-lupa, ma quella di Arya è sparita, e Robert cede quando la regina chiede quella di Sansa. Eddard non lascia il compito a nessun altro e uccide Lady con le proprie mani.',
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
        it: 'Seguendo i passi di Jon Arryn, Eddard va dal maestro armaiolo [[tobho-mott|Tobho Mott]] e conosce l’apprendista di Mott, [[gendry|Gendry]]. Jon Arryn era venuto a vedere il ragazzo, ed Eddard capisce che Gendry è uno dei figli bastardi di re Robert. Eddard non va alla prima giornata del torneo in onore del Primo Cavaliere, in cui ser [[gregor-clegane|Gregor Clegane]] uccide in giostra ser [[hugh-of-the-vale|Hugh della Valle]], l’ex scudiero di Jon Arryn.',
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
        it: 'Quando Eddard si risveglia, [[robert-baratheon|re Robert]] gli restituisce la carica di Primo Cavaliere e parte per la caccia. Mentre tiene udienza al posto del re, Eddard ascolta dei contadini i cui villaggi sono stati devastati da ser [[gregor-clegane|Gregor Clegane]], e manda lord [[beric-dondarrion|Beric Dondarrion]] con un gruppo di uomini a fare giustizia. Decide poi di rimandare le figlie a Grande Inverno. Qualcosa che [[sansa-stark|Sansa]] dice di [[joffrey-baratheon|Joffrey]] riporta Eddard ai lignaggi delle grandi casate che Jon Arryn stava studiando: i figli dei Baratheon sono sempre neri di capelli, mentre i tre figli del re sono biondi.',
        en: 'When Eddard wakes, [[robert-baratheon|King Robert]] gives him back the post of Hand and leaves to go hunting. Holding court in the king’s place, Eddard hears peasants whose villages were ravaged by Ser [[gregor-clegane|Gregor Clegane]], and sends Lord [[beric-dondarrion|Beric Dondarrion]] with a company of men to bring him to justice. He then decides to send his daughters back to Winterfell. Something [[sansa-stark|Sansa]] says about [[joffrey-baratheon|Joffrey]] brings him back to the lineages of the great houses that Jon Arryn was studying: Baratheon children are always black-haired, and the king’s three children are golden.',
      },
    ),
    inBoth(
      [7, 50],
      { it: 'Il trono e il pugnale', en: 'The throne and the dagger' },
      {
        it: 'Eddard dice a [[cersei-lannister|Cersei]] di sapere che i figli di Cersei non sono di Robert e le consiglia di fuggire prima che il re torni dalla caccia. Ma [[robert-baratheon|Robert]] torna ferito a morte da un cinghiale, e sul letto di morte nomina Eddard Protettore del Regno fino alla maggiore età del suo erede. Eddard non scrive il nome di [[joffrey-baratheon|Joffrey]] nel documento. Rifiuta l’aiuto di [[renly-baratheon|Renly]] e conta su [[petyr-baelish|Ditocorto]] per assicurarsi la Guardia cittadina. Morto il re, nella sala del trono Cersei strappa il documento. Eddard dichiara che Joffrey non ha diritto al trono, ma le cappe dorate di [[janos-slynt|Janos Slynt]] uccidono gli uomini di Eddard e Ditocorto punta un pugnale alla gola di Eddard: lo aveva avvertito di non fidarsi di Ditocorto.',
        en: 'Eddard tells [[cersei-lannister|Cersei]] that he knows her children are not Robert’s and urges her to flee before the king returns from his hunt. But [[robert-baratheon|Robert]] comes back mortally wounded by a boar, and on his deathbed names Eddard Protector of the Realm until his heir comes of age. Eddard leaves [[joffrey-baratheon|Joffrey]]’s name out of the letter. He refuses [[renly-baratheon|Renly]]’s help and counts on [[petyr-baelish|Littlefinger]] to win him the City Watch. With the king dead, Cersei tears up the letter in the throne room. Eddard declares that Joffrey has no right to the throne, but [[janos-slynt|Janos Slynt]]’s gold cloaks kill his men and Littlefinger holds a dagger to Eddard’s throat: Littlefinger had warned Eddard not to trust him.',
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
        it: 'Per salvare le figlie, Eddard accetta di confessare. Viene condotto sui gradini del Grande Tempio di Baelor e, davanti alla folla, confessa il tradimento e riconosce [[joffrey-baratheon|Joffrey]] come re. Joffrey però ordina la morte di Eddard. [[arya-stark|Arya]] è tra la folla, e [[yoren|Yoren]] dei Guardiani della notte la trattiene. Anche [[sansa-stark|Sansa]] è presente. Ser [[ilyn-payne|Ilyn Payne]] decapita Eddard con Ghiaccio, la spada di Eddard.',
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
        it: 'Lungo la strada verso sud il principe [[joffrey-baratheon|Joffrey]] porta Sansa fuori, lungo il fiume. Trovano [[arya-stark|Arya]] che si allena con la spada insieme a [[mycah|Mycah]], il figlio del macellaio. Joffrey minaccia Mycah, Arya colpisce Joffrey e la meta-lupa di Arya morde il braccio al principe. Sansa cerca di consolare Joffrey, che la respinge. Davanti al re, Sansa dice di non ricordare cosa sia successo, e Arya le si scaglia contro. Poiché la meta-lupa di Arya è sparita, la regina [[cersei-lannister|Cersei]] pretende quella di Sansa, e [[eddard-stark|Eddard]] uccide Lady.',
        en: 'On the road south Prince [[joffrey-baratheon|Joffrey]] takes Sansa out along the river. They find [[arya-stark|Arya]] practising swords with [[mycah|Mycah]], the butcher’s boy. Joffrey threatens Mycah, Arya strikes him, and her direwolf bites his arm. Sansa tries to comfort Joffrey, who pushes her away. Before the king, Sansa says she does not remember what happened, and Arya flies at her. Since Arya’s direwolf is gone, Queen [[cersei-lannister|Cersei]] demands Sansa’s instead, and [[eddard-stark|Eddard]] kills Lady.',
      },
    ),
    onScreen(
      [4, 30],
      { it: 'Il torneo del Primo Cavaliere', en: 'The Hand’s tourney' },
      {
        it: 'Sansa assiste al torneo in onore di suo padre. Nella prima giostra ser [[gregor-clegane|Gregor Clegane]], la Montagna, uccide ser [[hugh-of-the-vale|Hugh della Valle]] con una scheggia di lancia nel collo. [[petyr-baelish|Ditocorto]] si siede accanto a lei e le racconta che da bambino Gregor spinse nel fuoco la faccia del fratello minore, [[sandor-clegane|Sandor]], perché aveva giocato con un giocattolo di Gregor. Le consiglia di non andare in giro a raccontarlo.',
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
        it: 'Non volendo lasciare la corte e il fidanzamento con [[joffrey-baratheon|Joffrey]], Sansa va dalla regina [[cersei-lannister|Cersei]] e le racconta che il padre vuole imbarcare lei e [[arya-stark|Arya]] su una nave per Grande Inverno, senza capire che così tradisce il padre. Cersei promette di aiutarla, poi la fa chiudere sotto sorveglianza nella stanza di una torre. Più tardi vi spingono dentro anche [[jeyne-poole|Jeyne Poole]], che ha visto uccidere gli uomini degli Stark. Le due restano rinchiuse tre giorni senza sapere cosa stia succedendo.',
        en: 'Not wanting to leave the court and her betrothal to [[joffrey-baratheon|Joffrey]], Sansa goes to Queen [[cersei-lannister|Cersei]] and tells her that her father means to put her and [[arya-stark|Arya]] on a ship for Winterfell, without seeing that she is betraying him. Cersei promises to help, then has her locked under guard in a tower room. Later [[jeyne-poole|Jeyne Poole]], who saw Stark men killed, is pushed in with her. The two are kept there for three days with no idea of what is happening.',
      },
    ),
    inBoth(
      [8, 58],
      { it: 'La supplica', en: 'The plea' },
      {
        it: 'Dopo l’arresto del padre, Sansa è trattenuta nella Fortezza Rossa. Davanti alla regina [[cersei-lannister|Cersei]] e al concilio scrive al fratello [[robb-stark|Robb]] una lettera che gli chiede di venire a giurare fedeltà al nuovo re, [[joffrey-baratheon|Joffrey]]. Poi, davanti alla corte, implora Joffrey di avere pietà di Eddard. Joffrey promette di essere clemente, se [[eddard-stark|Eddard]] confesserà il suo tradimento.',
        en: 'After her father’s arrest Sansa is held in the Red Keep. Before Queen [[cersei-lannister|Cersei]] and the council she writes a letter to her brother [[robb-stark|Robb]], asking him to come and swear fealty to the new king, [[joffrey-baratheon|Joffrey]]. Then, before the court, she begs Joffrey to show her father mercy. Joffrey promises to be merciful if [[eddard-stark|Eddard]] confesses his treason.',
      },
    ),
    inBoth(
      [9, 66],
      { it: 'La promessa infranta', en: 'The broken promise' },
      {
        it: 'Sansa assiste al giudizio di suo padre sui gradini del Grande Tempio di Baelor. [[eddard-stark|Eddard]] confessa il tradimento e riconosce [[joffrey-baratheon|Joffrey]] come re. Ma Joffrey, nonostante la promessa di clemenza fatta a Sansa, ordina la morte di Eddard. Sansa urla, e ser [[ilyn-payne|Ilyn Payne]] decapita Eddard.',
        en: 'Sansa watches her father’s judgment on the steps of the Great Sept of Baelor. [[eddard-stark|Eddard]] confesses to treason and names [[joffrey-baratheon|Joffrey]] king. But Joffrey, despite the mercy he promised Sansa, orders his death. Sansa screams, and Ser [[ilyn-payne|Ilyn Payne]] beheads him.',
      },
    ),
    inBoth(
      [10, 68],
      { it: 'Le teste sulle mura', en: 'The heads on the walls' },
      {
        it: 'Il re [[joffrey-baratheon|Joffrey]], ancora promesso a Sansa, la porta sulle mura del castello e la costringe a guardare la testa del padre di Sansa, infilzata su una picca. Accanto c’è quella della septa [[mordane|Mordane]]. Joffrey fa colpire Sansa da ser [[meryn-trant|Meryn Trant]]. Sansa sta per spingere il re giù dalle mura, quando [[sandor-clegane|Sandor Clegane]] le tampona il sangue sul labbro con un fazzoletto.',
        en: 'King [[joffrey-baratheon|Joffrey]], still promised to Sansa, takes her up on the castle walls and makes her look at her father’s head on a spike. Beside it is Septa [[mordane|Mordane]]’s. Joffrey has Ser [[meryn-trant|Meryn Trant]] strike Sansa. Sansa is about to push the king off the walls when [[sandor-clegane|Sandor Clegane]] dabs the blood from her lip with a handkerchief.',
      },
    ),
    onScreen(
      [11, 76],
      { it: 'Un giullare, non un morto', en: 'A fool, not a corpse' },
      {
        it: 'Al torneo per il giorno del nome di [[joffrey-baratheon|Joffrey]], il re ordina di affogare nel vino [[dontos-hollard|ser Dontos Hollard]], arrivato tardi e ubriaco. Sansa gli dice che ordinare una morte nel proprio giorno del nome porta sfortuna. Joffrey la chiama superstizione, ma [[sandor-clegane|Sandor Clegane]] le dà ragione, e Sansa convince il re a fare di Dontos il suo giullare. Dontos le è grato. Poi [[tyrion-lannister|Tyrion]] torna in città.',
        en: 'At [[joffrey-baratheon|Joffrey]]’s name-day tournament, the king orders [[dontos-hollard|Ser Dontos Hollard]], late and drunk, drowned in wine. Sansa tells him that ordering a death on one’s name day is bad luck. Joffrey calls it superstition, but [[sandor-clegane|Sandor Clegane]] backs her, and Sansa persuades the king to make Dontos his fool instead. Dontos is grateful. Then [[tyrion-lannister|Tyrion]] rides back into the city.',
      },
    ),
    onScreen(
      [13, 99],
      { it: 'Una nuova ancella', en: 'A new handmaiden' },
      {
        it: '[[cersei-lannister|Cersei]] organizza una cena imbarazzante con [[myrcella-baratheon|Myrcella]], [[tommen-baratheon|Tommen]] e Sansa, che continua a fingersi fedele a chi la tiene prigioniera. Poi si presenta da Sansa una nuova ancella: [[shae|Shae]], sistemata lì da [[tyrion-lannister|Tyrion]]. Sansa sfoga un po’ della sua frustrazione sull’inesperienza della ragazza.',
        en: '[[cersei-lannister|Cersei]] hosts an awkward dinner for [[myrcella-baratheon|Myrcella]], [[tommen-baratheon|Tommen]] and Sansa, who keeps up her show of loyalty to her captors. Afterwards a new handmaiden reports to Sansa: [[shae|Shae]], placed there by [[tyrion-lannister|Tyrion]]. Sansa vents some of her frustration on the girl’s inexperience.',
      },
    ),
    onScreen(
      [14, 106],
      { it: 'Spogliata davanti alla corte', en: 'Stripped before the court' },
      {
        it: 'Quando Robb vince una grande battaglia, [[joffrey-baratheon|Joffrey]] fa portare Sansa davanti alla corte e pensa di ucciderla con una balestra. Lei continua a giurargli fedeltà. Il re la fa picchiare da [[meryn-trant|ser Meryn Trant]], che le strappa il vestito davanti alla corte. [[tyrion-lannister|Tyrion]] interviene, e [[sandor-clegane|Sandor Clegane]] la avvolge nel suo mantello. Tyrion si offre di sciogliere il fidanzamento, ma lei risponde che ama Joffrey e farà il suo dovere, e lui la chiama lady Stark.',
        en: 'When Robb wins a great victory, [[joffrey-baratheon|Joffrey]] has Sansa brought before the court and toys with killing her with a crossbow. She keeps pledging her loyalty. He has [[meryn-trant|Ser Meryn Trant]] beat her and rip open her gown while the court watches. [[tyrion-lannister|Tyrion]] stops it, and [[sandor-clegane|Sandor Clegane]] wraps his cloak around her. Tyrion offers to end her engagement, but she answers that she loves Joffrey and will do her duty, and he calls her Lady Stark.',
      },
    ),
    onScreen(
      [16, 115],
      { it: 'Salvata dalla folla', en: 'Saved from the mob' },
      {
        it: 'Nella rivolta dopo la partenza di [[myrcella-baratheon|Myrcella]], Sansa si perde tra la folla. Alcuni uomini la trascinano via e stanno per violentarla quando [[sandor-clegane|Sandor Clegane]] li uccide e la porta al castello. Ferita, confida a [[shae|Shae]] di odiare [[joffrey-baratheon|Joffrey]], e Shae la avverte di non fidarsi di nessuno.',
        en: 'In the riot after [[myrcella-baratheon|Myrcella]] sails, Sansa is lost in the crowd. Men drag her away and are about to rape her when [[sandor-clegane|Sandor Clegane]] kills them and carries her to the castle. Injured, she confides in [[shae|Shae]] that she hates [[joffrey-baratheon|Joffrey]], and Shae warns her to trust no one.',
      },
    ),
    onScreen(
      [17, 126],
      { it: 'Il primo sangue', en: 'First blood' },
      {
        it: 'Sansa ringrazia [[sandor-clegane|Sandor Clegane]] per averla salvata; lui risponde che a un cane non serve coraggio per scacciare i topi. Poi si sveglia da un incubo e scopre di avere avuto il primo sangue: ora può essere data in sposa a [[joffrey-baratheon|Joffrey]] e dovrà dargli un figlio. [[shae|Shae]] la aiuta a nascondere le lenzuola, ma Sandor le trova. Portata da [[cersei-lannister|Cersei]], Sansa si sente consigliare di non amare nessuno se non i propri figli.',
        en: 'Sansa thanks [[sandor-clegane|Sandor Clegane]] for saving her; he answers that a dog needs no courage to fight off rats. Then she wakes from a nightmare to find she has had her first blood: she can now be married to [[joffrey-baratheon|Joffrey]] and expected to bear his son. [[shae|Shae]] helps her try to hide the sheets, but Sandor finds them. Brought before [[cersei-lannister|Cersei]], Sansa hears her advise loving no one but one’s children.',
      },
    ),
    onScreen(
      [19, 136],
      { it: 'L’inno alla Madre', en: 'The Mother’s hymn' },
      {
        it: 'Durante la battaglia Sansa si ripara con le dame della corte presso [[cersei-lannister|Cersei]], che beve e le racconta che cosa succederà loro se la città cadrà. Quando Cersei se ne va furiosa, Sansa rincuora le donne e le guida nell’inno alla Madre. [[shae|Shae]] le dice di chiudersi nella sua stanza, dove Sansa trova [[sandor-clegane|Sandor Clegane]]. Lui si offre di portarla a nord, a Grande Inverno, e promette di proteggerla, ma lei ha troppa paura di lui per seguirlo.',
        en: 'During the battle Sansa shelters with the court’s ladies under [[cersei-lannister|Cersei]], who drinks and tells her what will happen to them if the city falls. When Cersei storms out, Sansa keeps up the women’s spirits and leads them in the Mother’s hymn. [[shae|Shae]] tells her to lock herself in her room, where she finds [[sandor-clegane|Sandor Clegane]]. He offers to take her north to Winterfell and promises to protect her, but she is too afraid of him to go.',
      },
    ),
    onScreen(
      [20, 139],
      { it: 'Libera da Joffrey', en: 'Free of Joffrey' },
      {
        it: 'A corte [[joffrey-baratheon|Joffrey]] scioglie il fidanzamento con Sansa per il tradimento della famiglia di lei e accetta di sposare invece [[margaery-tyrell|Margaery Tyrell]]. In privato Sansa è felicissima, finché [[petyr-baelish|Ditocorto]] non le fa notare che la libertà non impedirà a Joffrey di tormentarla. Le promette di aiutarla a fuggire dalla città, per amore di sua madre Catelyn.',
        en: 'At court, [[joffrey-baratheon|Joffrey]] sets aside his betrothal to Sansa for her family’s treachery and agrees to marry [[margaery-tyrell|Margaery Tyrell]] instead. In private Sansa is overjoyed, until [[petyr-baelish|Littlefinger]] points out that her freedom will not stop Joffrey from tormenting her. He promises to help her escape the city, for her mother’s sake.',
      },
    ),
    inBooks(
      [11, 76],
      { it: 'Leoni', en: 'Lions' },
      {
        it: 'Sansa nasconde sotto le maniche lunghe i lividi delle percosse che [[joffrey-baratheon|Joffrey]] le ha fatto dare da ser Boros. Al torneo per il giorno del nome del re salva [[dontos-hollard|ser Dontos]] dall’annegare nel vino dicendo che uccidere nel proprio giorno del nome porta sfortuna, e propone di farne un giullare. Poi arriva [[tyrion-lannister|Tyrion]]. Quando lui le dice che è come una cerva tra i lupi, lei sussurra che sono leoni; Tyrion le assicura di essere solo un piccolo leone e di non volerle fare del male. Sansa si ripromette di non fidarsi mai più di un Lannister.',
        en: 'Sansa hides under long sleeves the bruises from the blows [[joffrey-baratheon|Joffrey]] had Ser Boros give her. At the king’s name-day tourney she saves [[dontos-hollard|Ser Dontos]] from drowning in wine by saying it is bad luck to kill on one’s name day, and suggests he be made a fool. Then [[tyrion-lannister|Tyrion]] rides in. When he says she is like a deer among wolves, she whispers that they are lions; he assures her he is only a little lion and means her no harm. She resolves never to trust a Lannister again.',
      },
    ),
    inBooks(
      [20, 92],
      { it: 'Il mio Florian', en: 'My Florian' },
      {
        it: 'Un biglietto sotto il cuscino invita Sansa nel parco degli dèi, se vuole tornare a casa. Lì trova [[dontos-hollard|ser Dontos]], che giura sugli antichi dèi di riportarla a casa e le chiede di essere il suo Florian; ci vorranno tempo e denaro, e lei dovrà andare spesso nel parco degli dèi. Al ritorno si scontra con [[sandor-clegane|Sandor Clegane]], ubriaco, che deride le sue canzoni sui veri cavalieri, dice di preferire i cani ai cavalieri e le annuncia che un giorno avrà da lei una canzone.',
        en: 'A note under her pillow calls Sansa to the godswood if she wants to go home. There she finds [[dontos-hollard|Ser Dontos]], who swears by the old gods to send her home and asks to be her Florian; it will take time and coin, and she must come to the godswood often. On the way back she runs into a drunk [[sandor-clegane|Sandor Clegane]], who mocks her songs of true knights, says he likes dogs better than knights, and tells her he will have a song from her one day.',
      },
    ),
    inBooks(
      [14, 106],
      {
        it: 'Picchiata per la vittoria di Robb',
        en: 'Beaten for Robb’s victory',
      },
      {
        it: 'Sansa viene portata davanti a [[joffrey-baratheon|Joffrey]] a rispondere della vittoria di Robb sui Lannister a Oxcross. Per ordine del re ser Boros Blount la picchia e le strappa il corpetto davanti alla corte. [[tyrion-lannister|Tyrion]] interviene, [[sandor-clegane|il Mastino]] le getta il suo mantello, e Tyrion la fa portare nella Torre del Primo Cavaliere. Il giorno dopo, quando le chiede di Joffrey, lei risponde di amare il re. Tyrion le dice che non intende farglielo sposare e le offre la sua protezione, ma lei chiede di tornare nel suo letto.',
        en: 'Sansa is brought before [[joffrey-baratheon|Joffrey]] to answer for Robb’s victory over the Lannisters at Oxcross. On his orders Ser Boros Blount strikes her and tears away her bodice before the court. [[tyrion-lannister|Tyrion]] stops it, [[sandor-clegane|Sandor Clegane]] tosses her his cloak, and Tyrion has her taken to the Tower of the Hand. The next day, when he asks about Joffrey, she says she loves the king. He tells her he does not mean her to marry Joffrey and offers her his protection, but she asks to go back to her own bed.',
      },
    ),
    inBooks(
      [17, 126],
      { it: 'La fioritura', en: 'Flowering' },
      {
        it: 'Mentre l’esercito di [[stannis-baratheon|Stannis]] si avvicina, [[dontos-hollard|Dontos]] dice a Sansa che non è ancora il momento di fuggire. Sul tetto della Fortezza di Maegor [[sandor-clegane|il Mastino]] le dice che gli piace uccidere e che non esistono veri cavalieri. Quella notte le arriva il primo sangue e brucia le lenzuola, per paura che [[joffrey-baratheon|Joffrey]] voglia portarla a letto. Le cameriere la scoprono, e [[cersei-lannister|Cersei]] la conforta avvertendola che l’amore è un veleno.',
        en: 'As [[stannis-baratheon|Stannis]]’s army nears, [[dontos-hollard|Dontos]] tells Sansa the time for escape is not yet right. On the roof of Maegor’s Holdfast, [[sandor-clegane|Sandor Clegane]] tells her he likes killing and that there are no true knights. That night she has her first blood and burns the sheets, afraid [[joffrey-baratheon|Joffrey]] will want to bed her. Her maids catch her, and [[cersei-lannister|Cersei]] comforts her, warning that love is poison.',
      },
    ),
    inBooks(
      [19, 134],
      { it: 'Nella sala da ballo della regina', en: 'In the queen’s ballroom' },
      {
        it: 'Prima della battaglia [[joffrey-baratheon|Joffrey]] costringe Sansa a baciare la sua spada. Lei accende candele nel tempio e prega in silenzio per la sua sconfitta, poi raggiunge le nobildonne nella sala da ballo della regina. Lì [[cersei-lannister|Cersei]] beve e le racconta che cosa farebbero loro gli uomini di Stannis se la città cadesse. Cersei sa delle sue visite al parco degli dèi e non crede che preghi per Joffrey. [[ilyn-payne|Ser Ilyn Payne]] è lì, le rivela la regina, perché Stannis non le prenda vive.',
        en: 'Before the battle [[joffrey-baratheon|Joffrey]] makes Sansa kiss his sword. She lights candles in the sept and silently prays for his defeat, then joins the highborn women in the Queen’s Ballroom. There [[cersei-lannister|Cersei]] drinks and tells her what Stannis’s men would do to them if the city fell. Cersei knows about her visits to the godswood and does not believe she prays for Joffrey. [[ilyn-payne|Ser Ilyn Payne]] is there, Cersei reveals, so that Stannis will not take them alive.',
      },
    ),
    inBooks(
      [19, 136],
      {
        it: 'Una strofa dell’inno alla Madre',
        en: 'A verse of the Mother’s hymn',
      },
      {
        it: 'Quando [[cersei-lannister|Cersei]] colpisce [[lancel-lannister|Lancel]] ferito e lascia la sala da ballo, Sansa calma gli ospiti e fa chiamare aiuto per Lancel. Nella sua stanza trova [[sandor-clegane|Sandor Clegane]], ubriaco e malconcio. Lui dice che lascerà la città e che potrebbe proteggerla, e le chiede la canzone che gli aveva promesso. Troppo spaventata per ricordarla, Sansa canta una strofa dell’inno alla Madre e gli sfiora la guancia, bagnata di lacrime. Sandor lascia lì il suo mantello bianco. All’alba [[dontos-hollard|Dontos]] porta la notizia che i Tyrell e [[tywin-lannister|lord Tywin]] hanno salvato la città.',
        en: 'When [[cersei-lannister|Cersei]] strikes the wounded [[lancel-lannister|Lancel]] and leaves the ballroom, Sansa calms the guests and sends for help for him. In her room she finds [[sandor-clegane|Sandor Clegane]], drunk and battered. He says he is leaving the city and could protect her, and asks for the song she promised. Too frightened to remember it, she sings a verse of the Mother’s hymn and touches his cheek, wet with tears. He leaves his white cloak behind. At dawn [[dontos-hollard|Dontos]] brings news that the Tyrells and [[tywin-lannister|Lord Tywin]] have saved the city.',
      },
    ),
    inBooks(
      [20, 139],
      { it: 'La reticella', en: 'The hair net' },
      {
        it: 'Dalla galleria Sansa guarda [[joffrey-baratheon|Joffrey]] ricompensare i vincitori. Quando [[garlan-tyrell|ser Garlan Tyrell]] chiede al re di sposare la sorella [[margaery-tyrell|Margaery]], l’Alto Septon dichiara nullo il fidanzamento di Sansa, e lei ne è felice. Quella notte nel parco degli dèi [[dontos-hollard|Dontos]] la avverte che [[cersei-lannister|Cersei]] vuole tenerla con sé e che Joffrey potrebbe comunque portarla a letto. Fuggiranno durante le nozze del re, tra circa un mese, dice, e le regala una reticella d’argento con delle ametiste.',
        en: 'From the gallery Sansa watches [[joffrey-baratheon|Joffrey]] reward the victors. When [[garlan-tyrell|Ser Garlan Tyrell]] asks the king to wed his sister [[margaery-tyrell|Margaery]], the High Septon declares Sansa’s betrothal void, and she is delighted. That night in the godswood [[dontos-hollard|Dontos]] warns her that [[cersei-lannister|Cersei]] means to keep her and that Joffrey may still bed her. They will escape during the king’s wedding, in about a month, he says, and he gives her a silver hair net set with amethysts.',
      },
    ),
    inBooks(
      [16, 115],
      { it: 'Dispersa nella rivolta', en: 'Lost in the riot' },
      {
        it: 'Mentre il corteo reale torna dalla partenza di [[myrcella-baratheon|Myrcella]], la folla affamata lo assale, e Sansa si perde nel caos. [[tyrion-lannister|Tyrion]] ordina alla Guardia reale di tornare a cercarla, e [[sandor-clegane|Sandor Clegane]] la riporta al castello, coperto di sangue. Nella rivolta sono morti l’Alto Septon e due cavalieri.',
        en: 'As the royal party rides back from [[myrcella-baratheon|Myrcella]]’s departure, the starving crowd turns on it, and Sansa is lost in the chaos. [[tyrion-lannister|Tyrion]] orders the Kingsguard back to find her, and [[sandor-clegane|Sandor Clegane]] brings her back to the castle, covered in blood. The High Septon and two knights have died in the riot.',
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
        it: 'Alla lezione di cucito della septa [[mordane|Mordane]] i punti di Arya sono storti, mentre [[sansa-stark|Sansa]] e [[jeyne-poole|Jeyne Poole]] parlano dei complimenti del principe [[joffrey-baratheon|Joffrey]]. Quando la septa la rimprovera, Arya scappa. Ritrova Nymeria, la sua meta-lupa, che non può entrare alla lezione, e insieme a [[jon-snow|Jon Snow]] guarda i ragazzi che si allenano nel cortile. Joffrey provoca [[robb-stark|Robb]] e [[theon-greyjoy|Theon]] deve trattenere Robb. Tornata in camera, Arya trova ad aspettarla la septa e sua madre.',
        en: 'At Septa [[mordane|Mordane]]’s needlework lesson Arya’s stitches are crooked, while [[sansa-stark|Sansa]] and [[jeyne-poole|Jeyne Poole]] talk about Prince [[joffrey-baratheon|Joffrey]]’s compliments. When the septa scolds her, Arya runs off. She finds Nymeria, her direwolf, who is not allowed at the lesson, and with [[jon-snow|Jon Snow]] she watches the boys training in the yard. Joffrey taunts [[robb-stark|Robb]], and [[theon-greyjoy|Theon]] has to hold him back. Back in her room, Arya finds the septa and her mother waiting for her.',
      },
    ),
    inBoth(
      [2, 17],
      { it: 'Il ragazzo del macellaio', en: 'The butcher’s boy' },
      {
        it: 'Prima di partire per la Barriera, [[jon-snow|Jon Snow]] regala ad Arya una spada sottile, che lei chiama Ago. Lungo la strada verso sud Arya si allena con [[mycah|Mycah]], il figlio del macellaio. Il principe [[joffrey-baratheon|Joffrey]] minaccia Mycah con la spada, Arya colpisce Joffrey e la sua meta-lupa, Nymeria, morde il principe. Arya getta nel fiume la spada di Joffrey e scaccia Nymeria a sassate, perché non la uccidano. Davanti al re [[sansa-stark|Sansa]] dice di non ricordare, e Arya le si scaglia contro. La regina fa uccidere Lady al posto di Nymeria, e la guardia giurata di Joffrey uccide Mycah.',
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
        it: 'Per esercitarsi, Arya dà la caccia ai gatti della Fortezza Rossa e ne segue uno nei sotterranei, dove sono custoditi i teschi dei draghi. Al buio sente due uomini che complottano: parlano del padre di Arya, della regina e di una guerra. Arya trova la via d’uscita e corre ad avvertire [[eddard-stark|Eddard]], ma lui non dà peso al suo racconto confuso. La conversazione viene interrotta dall’arrivo di [[yoren|Yoren]] dei Guardiani della notte, che porta notizie urgenti per il Primo Cavaliere.',
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
        it: 'Arya vive per le strade di Approdo del Re e si procura il cibo catturando piccioni. Quando la folla corre verso il Grande Tempio di Baelor, dove viene portato il Primo Cavaliere, la segue e si arrampica su una statua per vedere. Suo padre [[eddard-stark|Eddard]] confessa il tradimento, ma [[joffrey-baratheon|Joffrey]] ordina di decapitarlo. Arya cerca di raggiungerlo, ma [[yoren|Yoren]] dei Guardiani della notte la afferra e le impedisce di vedere mentre ser [[ilyn-payne|Ilyn Payne]] uccide Eddard.',
        en: 'Arya lives on the streets of King’s Landing and gets food by catching pigeons. When the crowd hurries to the Great Sept of Baelor, where the Hand is being brought, she follows it and climbs a statue to see. Her father [[eddard-stark|Eddard]] confesses to treason, but [[joffrey-baratheon|Joffrey]] orders him beheaded. Arya tries to reach him, but [[yoren|Yoren]] of the Night’s Watch grabs her and keeps her from seeing as Ser [[ilyn-payne|Ilyn Payne]] kills her father.',
      },
    ),
    onScreen(
      [10, 66],
      { it: 'Arry', en: 'Arry' },
      {
        it: '[[yoren|Yoren]] trascina Arya via dalla folla chiamandola ragazzo e le taglia i capelli con un coltello. La porterà fuori da Approdo del Re e fino a Grande Inverno, travestita da recluta dei Guardiani della notte, e la avverte di non fidarsi degli altri. Con il nome di Arry si unisce alle reclute, tra cui [[gendry|Gendry]] e Frittella. Quando Frittella e un altro ragazzo cercano di prenderle Ago, lei sguaina la spada, e Gendry si schiera dalla parte di Arya.',
        en: '[[yoren|Yoren]] drags Arya away from the crowd, calling her boy, and cuts her hair short with a knife. He will take her out of King’s Landing and on to Winterfell disguised as a recruit for the Night’s Watch, and warns her not to trust the others. Under the name Arry she joins the recruits, among them [[gendry|Gendry]] and Hot Pie. When Hot Pie and another boy try to take Needle from her, she draws the sword, and Gendry takes her side.',
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
        it: 'Lungo la strada verso sud Jory cerca [[arya-stark|Arya]], scomparsa dopo la lite con il principe [[joffrey-baratheon|Joffrey]], e la trova, ma gli uomini dei Lannister costringono Jory a portarla davanti al re anziché dal padre di Arya. Jory resta accanto ad Arya. Quando la regina pretende la morte della meta-lupa di Sansa, è Jory a portare la spada a [[eddard-stark|Eddard]], che poi fa riportare a Jory il corpo a Grande Inverno perché la regina non ne abbia la pelle.',
        en: 'On the road south Jory searches for [[arya-stark|Arya]], missing after the quarrel with Prince [[joffrey-baratheon|Joffrey]], and finds her, but Lannister men force him to take her before the king rather than her father. Jory stays by Arya. When the queen demands the death of Sansa’s direwolf, Jory is the one who brings [[eddard-stark|Eddard]] his sword, and Eddard then has Jory send the body back to Winterfell so that the queen does not get the pelt.',
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
        it: 'Jory accompagna [[eddard-stark|Eddard]] in un bordello della città, dove il Primo Cavaliere cerca un’altra figlia bastarda del re. All’uscita [[jaime-lannister|Jaime Lannister]] li aspetta con molti uomini, furioso perché [[catelyn-stark|Catelyn]] ha preso prigioniero suo fratello [[tyrion-lannister|Tyrion]]. Jaime vuole Eddard vivo, ma fa uccidere gli uomini di Eddard. Jory muore nello scontro.',
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
        it: 'Jeyne segue il padre ad Approdo del Re, dove [[eddard-stark|Eddard Stark]] è il nuovo Primo Cavaliere. Al torneo in onore di Eddard siede con [[sansa-stark|Sansa]] e confessa che vorrebbe sposare lord Beric Dondarrion. Quando ser [[gregor-clegane|Gregor Clegane]] uccide ser [[hugh-of-the-vale|Hugh della Valle]] davanti a loro, Jeyne scoppia in lacrime e la septa [[mordane|Mordane]] deve riaccompagnarla alla Fortezza Rossa.',
        en: 'Jeyne follows her father to King’s Landing, where [[eddard-stark|Eddard Stark]] is the new Hand of the King. At the tourney in his honour she sits with [[sansa-stark|Sansa]] and confesses that she would like to marry Lord Beric Dondarrion. When Ser [[gregor-clegane|Gregor Clegane]] kills Ser [[hugh-of-the-vale|Hugh of the Vale]] in front of them, Jeyne bursts into tears, and Septa [[mordane|Mordane]] has to take her back to the Red Keep.',
      },
    ),
    inBooks(
      [8, 52],
      { it: 'Portata via', en: 'Taken away' },
      {
        it: 'Quando i Lannister si abbattono sulla casa di [[eddard-stark|Eddard Stark]], il padre di Jeyne, [[vayon-poole|Vayon Poole]], viene ucciso. Jeyne, che ha visto morire gli uomini degli Stark, viene chiusa in una stanza della torre insieme a [[sansa-stark|Sansa]] e piange senza sosta. Quando Sansa lo dice alla regina [[cersei-lannister|Cersei]], il concilio decide cosa fare di Jeyne, e [[petyr-baelish|Ditocorto]] la porta via, in un luogo che non viene detto.',
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
        it: 'Tomard è una delle guardie che hanno seguito [[eddard-stark|Eddard Stark]] ad Approdo del Re quando è diventato Primo Cavaliere del Re, e di solito lo scorta. È con lui quando [[renly-baratheon|Renly Baratheon]] porta la notizia che il re è stato ferito durante la caccia. Eddard gli affida una lettera da consegnare di persona a Stannis Baratheon, così Tomard non è con il Primo Cavaliere quando le cappe dorate uccidono gli uomini di Eddard.',
        en: 'Tomard is one of the guards who followed [[eddard-stark|Eddard Stark]] to King’s Landing when he became Hand of the King, and he usually guards him. He is with Eddard when [[renly-baratheon|Renly Baratheon]] brings word that the king has been wounded on his hunt. Eddard gives him a letter to deliver to Stannis Baratheon by hand, so Tomard is not with the Hand when the gold cloaks kill his men.',
      },
    ),
    inBooks(
      [7, 23],
      { it: 'Grasso Tom', en: 'Fat Tom' },
      {
        it: 'Tomard, detto Grasso Tom, è una delle cinquanta guardie che [[eddard-stark|Eddard Stark]] ha portato con sé ad Approdo del Re. Durante una cena della casa nella Fortezza Rossa è di guardia alla Torre del Primo Cavaliere. Quando [[arya-stark|Arya]] scappa in camera dopo una lite con la septa [[mordane|Mordane]], gli scivola sotto le braccia. Poi Tom bussa alla porta di Arya, e Arya lo inganna dicendogli che non c’è.',
        en: 'Tomard, called Fat Tom, is one of the fifty guards [[eddard-stark|Eddard Stark]] brought with him to King’s Landing. During a household supper in the Red Keep he stands guard at the Tower of the Hand. When [[arya-stark|Arya]] runs back to her room after a quarrel with Septa [[mordane|Mordane]], she slips under his arms. Then Tom knocks at her door, and Arya fools him by telling him she is not there.',
      },
    ),
    inBooks(
      [7, 50],
      { it: 'Una lancia nella schiena', en: 'A spear in the back' },
      {
        it: 'Tom ha avuto da [[eddard-stark|Eddard Stark]] una lettera per Stannis Baratheon, da consegnare durante il viaggio per mare verso nord con le figlie del Primo Cavaliere. Dopo la morte di [[robert-baratheon|re Robert]] interrompe il concilio per annunciare che il nuovo re lo convoca nella sala del trono, ed Eddard gli fa radunare una scorta. Nella sala del trono, mentre Eddard dice di non volere spargimenti di sangue, una cappa dorata trafigge Tom alla schiena con una lancia. La lettera viene presa dal corpo di Tom.',
        en: 'Tom has a letter from [[eddard-stark|Eddard Stark]] for Stannis Baratheon, to deliver during the voyage north by sea with the Hand’s daughters. After [[robert-baratheon|King Robert]]’s death he interrupts the council to announce that the new king summons it to the throne room, and Eddard has him gather an escort. In the throne room, as Eddard says he wants no bloodshed, a gold cloak drives a spear through Tom’s back. The letter is taken from his body.',
      },
    ),
  ],
  'harwin': [
    inBooks(
      [1, 2],
      { it: 'Non si possono tenere', en: 'They cannot be kept' },
      {
        it: 'Harwin è una guardia di [[eddard-stark|Eddard Stark]] e il figlio di [[hullen|Hullen]], il mastro dei cavalli di Grande Inverno. Cavalca con Eddard all’esecuzione di un disertore dei Guardiani della notte. Sulla via del ritorno il gruppo trova una meta-lupa morta, uccisa da un cervo, con i suoi cuccioli. Quando [[robb-stark|Robb]] chiede a Eddard se possono portarli al castello, Harwin dice che è impossibile tenerli.',
        en: 'Harwin is one of [[eddard-stark|Eddard Stark]]’s guards and the son of [[hullen|Hullen]], the master of horse at Winterfell. He rides with Eddard to the execution of a deserter from the Night’s Watch. On the way back the party finds a dead direwolf, killed by a stag, with her pups. When [[robb-stark|Robb]] asks Eddard whether they can take them home, Harwin says that they cannot be kept.',
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
        it: 'Lady è uno dei cuccioli che il gruppo di [[eddard-stark|Eddard Stark]] trova accanto alla madre morta sulla via del ritorno a Grande Inverno. [[jon-snow|Jon Snow]] convince Eddard che i cuccioli sono destinati ai figli legittimi di Eddard, perché il meta-lupo è l’emblema degli Stark. Una delle cucciole va a [[sansa-stark|Sansa]], che la chiama Lady.',
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
        it: 'Lungo la strada verso sud la meta-lupa di [[arya-stark|Arya]] morde il principe [[joffrey-baratheon|Joffrey]], che minacciava Arya, e poi sparisce. La regina [[cersei-lannister|Cersei]] pretende la morte di una meta-lupa e, non trovando quella di Arya, chiede che muoia Lady, che non c’entra niente. [[robert-baratheon|Re Robert]] acconsente. [[eddard-stark|Eddard Stark]] non lascia il compito a nessun altro e uccide Lady con le proprie mani.',
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
        it: 'Lungo la strada verso sud il principe [[joffrey-baratheon|Joffrey]] minaccia con la spada [[mycah|Mycah]], il figlio del macellaio, e [[arya-stark|Arya]] colpisce Joffrey con la sua spada di legno. Quando Joffrey avanza contro Arya, Nymeria gli ferisce la mano della spada. Arya scaccia Nymeria a sassate perché la regina non possa farla uccidere. Quando la regina pretende la morte della meta-lupa, Nymeria è lontana, e al suo posto muore Lady.',
        en: 'On the road south Prince [[joffrey-baratheon|Joffrey]] threatens [[mycah|Mycah]], the butcher’s boy, with his sword, and [[arya-stark|Arya]] strikes the prince with her wooden sword. When Joffrey advances on Arya, Nymeria wounds his sword hand. Arya drives Nymeria away with stones so that the queen cannot have her killed. When the queen demands the direwolf’s death, Nymeria is far away, and Lady dies in her place.',
      },
    ),
  ],
  'bran-stark': [
    onScreen(
      [1, 2],
      { it: 'La torre in rovina', en: 'The broken tower' },
      {
        it: 'Bran si esercita con l’arco nel cortile di Grande Inverno sotto gli occhi della famiglia. Poi il padre [[eddard-stark|Eddard]] lo porta con [[robb-stark|Robb]], [[jon-snow|Jon]] e [[theon-greyjoy|Theon]] a vedere l’esecuzione di un disertore dei Guardiani della notte. Bran guarda senza distogliere lo sguardo, e il padre gli spiega che chi pronuncia la condanna deve calare la spada. Sulla via del ritorno trovano una meta-lupa morta e i suoi cuccioli, e Bran ne tiene uno. Più tardi, arrampicandosi su una torre in rovina, vede la regina con il fratello di lei, Jaime Lannister. Jaime lo afferra, gli chiede quanti anni ha e lo spinge giù dalla finestra.',
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
        it: 'Bran dovrebbe partire verso sud con il padre [[eddard-stark|Eddard]], che [[robert-baratheon|re Robert]] ha scelto come Primo Cavaliere. Prima della partenza prova a salutare tutti, poi va ad arrampicarsi, come fa sempre. Vicino alla torre in rovina sente due voci che parlano del re e della sua scelta. Si avvicina, si aggrappa a un gargoyle e guarda dalla finestra: vede la regina [[cersei-lannister|Cersei]] nuda con un uomo, il fratello di lei, [[jaime-lannister|Jaime]]. Bran scivola, e Jaime lo afferra e lo tira dentro. Gli chiede quanti anni ha, poi lo getta dalla finestra.',
        en: 'Bran is to go south with his father [[eddard-stark|Eddard]], whom [[robert-baratheon|King Robert]] has chosen as his Hand. Before leaving, he tries to say goodbye to everyone, then goes climbing, as he always does. Near the broken tower he hears two voices talking about the king and his choice. He creeps closer, hangs from a gargoyle and looks through the window: he sees Queen [[cersei-lannister|Cersei]] naked with a man, her brother [[jaime-lannister|Jaime]]. Bran slips, and Jaime catches him and pulls him in. He asks how old Bran is, then throws him out of the window.',
      },
    ),
    inBoth(
      [2, 15],
      { it: 'L’uomo con il pugnale', en: 'The man with the dagger' },
      {
        it: 'Dopo la caduta Bran giace privo di sensi, e la madre [[catelyn-stark|Catelyn]] non si allontana mai dal letto del figlio. Il padre [[eddard-stark|Eddard]] è partito per il sud, e del castello si occupano il fratello [[robb-stark|Robb]] e il maestro [[luwin|Luwin]]. Poi nel castello scoppia un incendio. Mentre tutti accorrono, nella stanza di Bran entra un uomo armato di pugnale, venuto a ucciderlo. Catelyn lo affronta a mani nude e lo tiene a bada finché il meta-lupo di Bran non entra e squarcia la gola all’uomo.',
        en: 'After his fall Bran lies senseless, and his mother [[catelyn-stark|Catelyn]] never leaves his bed. His father [[eddard-stark|Eddard]] has gone south, and his brother [[robb-stark|Robb]] and Maester [[luwin|Luwin]] see to the castle. Then a fire breaks out in the castle. While everyone runs to it, a man with a dagger comes into Bran’s room to kill him. Catelyn fights him with her bare hands and holds him off until Bran’s direwolf comes in and tears out his throat.',
      },
    ),
    inBooks(
      [2, 18],
      { it: 'Il corvo', en: 'The crow' },
      {
        it: 'Privo di sensi, Bran sogna di cadere. Un corvo gli dice che deve volare, altrimenti morirà. Dall’alto Bran vede il regno: Grande Inverno, la madre [[catelyn-stark|Catelyn]] in mare verso una tempesta, il padre [[eddard-stark|Eddard]] che discute con il re, le sorelle [[sansa-stark|Sansa]] e [[arya-stark|Arya]], [[jon-snow|Jon]] alla Barriera e, oltre, qualcosa che lo spaventa. Sotto di lui compaiono punte di ghiaccio. All’ultimo istante Bran vola, e il corvo lo becca in mezzo alla fronte. Bran si sveglia con il suo meta-lupo sul letto, e quando [[robb-stark|Robb]] accorre, Bran gli dice di aver chiamato il lupo Estate.',
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
        it: 'Bran non può camminare, e [[hodor|Hodor]], un servitore enorme che sa dire soltanto il proprio nome, lo porta in braccio fino alla sala grande. Lì il fratello [[robb-stark|Robb]] riceve con freddezza [[tyrion-lannister|Tyrion Lannister]], di ritorno dalla Barriera. Tyrion ha portato il disegno di una sella con cui Bran potrà andare a cavallo anche senza l’uso delle gambe. Dopo questo gesto Robb offre a Tyrion l’ospitalità di Grande Inverno, ma Tyrion la rifiuta.',
        en: 'Bran cannot walk, and [[hodor|Hodor]], a huge servant who can say only his own name, carries him down to the great hall. There his brother [[robb-stark|Robb]] is giving a cold welcome to [[tyrion-lannister|Tyrion Lannister]], on his way back from the Wall. Tyrion has brought the design for a saddle that will let Bran ride even without the use of his legs. After this, Robb offers him the hospitality of Winterfell, but Tyrion refuses it.',
      },
    ),
    inBoth(
      [6, 38],
      { it: 'I fuorilegge nella foresta', en: 'Outlaws in the woods' },
      {
        it: 'Con la sella disegnata da Tyrion, Bran esce a cavallo con il fratello [[robb-stark|Robb]] e con [[theon-greyjoy|Theon]], e si ritrova da solo nella Foresta del Lupo. Lo circonda una banda di fuorilegge che vuole derubarlo. Robb arriva e la attacca, ma uno degli uomini tiene un coltello alla gola di Bran. Theon uccide l’uomo con una freccia, e Robb è furioso. L’unica sopravvissuta, [[osha|Osha]], si arrende, e Robb la porta a Grande Inverno come prigioniera.',
        en: 'With the saddle Tyrion designed, Bran rides out with his brother [[robb-stark|Robb]] and [[theon-greyjoy|Theon]], and ends up alone in the wolfswood. A band of outlaws surrounds him, meaning to rob him. Robb comes and attacks them, but one of the men holds a knife to Bran’s throat. Theon kills him with an arrow, and Robb is furious. The only survivor, [[osha|Osha]], yields, and Robb takes her back to Winterfell as a prisoner.',
      },
    ),
    inBoth(
      [8, 54],
      { it: 'Il fratello va in guerra', en: 'His brother goes to war' },
      {
        it: 'Il padre [[eddard-stark|Eddard]] è stato arrestato nella capitale, e il fratello [[robb-stark|Robb]] chiama alle armi i vassalli del Nord, che si radunano a Grande Inverno. Quando [[greatjon-umber|Greatjon Umber]] sguaina la spada contro Robb, [[grey-wind|Vento Grigio]] stacca due dita al Greatjon con un morso. Robb parte verso sud e saluta Bran, che resta al castello con il piccolo [[rickon-stark|Rickon]]. In quei giorni, nel parco degli dei, la prigioniera [[osha|Osha]] dice a Bran che oltre la Barriera ci sono i giganti e cose peggiori, e che Robb sta portando l’esercito nella direzione sbagliata: dovrebbe marciare a nord, non a sud.',
        en: 'His father [[eddard-stark|Eddard]] has been seized in the capital, and his brother [[robb-stark|Robb]] calls the lords of the North to arms; they gather at Winterfell. When [[greatjon-umber|Greatjon Umber]] draws steel on Robb, [[grey-wind|Grey Wind]] bites off two of his fingers. Robb marches south and says goodbye to Bran, who stays at the castle with little [[rickon-stark|Rickon]]. In those days, in the godswood, the captive [[osha|Osha]] tells Bran that beyond the Wall there are giants and worse, and that Robb is marching his army the wrong way: he should go north, not south.',
      },
    ),
    onScreen(
      [10, 67],
      { it: 'Il sogno delle cripte', en: 'The dream of the crypts' },
      {
        it: 'Bran sogna di nuovo il corvo con tre occhi, che vola giù nelle cripte sotto il castello, e si convince che il padre [[eddard-stark|Eddard]] sia lì. [[osha|Osha]] porta Bran nelle cripte, e Bran le racconta la storia degli antenati sepolti. Dalla tomba vuota preparata per Eddard balza fuori [[shaggydog|Cagnaccio]], il meta-lupo del fratello [[rickon-stark|Rickon]]. Rickon ha fatto lo stesso sogno. Quando escono, il maestro [[luwin|Luwin]] li aspetta con una lettera in mano, e dal suo sguardo capiscono che Eddard è morto.',
        en: 'Bran dreams again of the three-eyed raven, which flies down into the crypts beneath the castle, and he becomes sure that his father [[eddard-stark|Eddard]] is there. [[osha|Osha]] takes him down into the crypts, and Bran tells her the story of the ancestors buried there. Out of the empty tomb made ready for Eddard leaps [[shaggydog|Shaggydog]], the direwolf of his brother [[rickon-stark|Rickon]]. Rickon has had the same dream. When they come out, Maester [[luwin|Luwin]] is waiting with a letter in his hand, and his face tells them that Eddard is dead.',
      },
    ),
    inBooks(
      [10, 67],
      { it: 'Il padre nelle cripte', en: 'His father in the crypts' },
      {
        it: 'Bran sogna che il corvo con tre occhi lo porta nelle cripte, dove c’è il padre [[eddard-stark|Eddard]]. Il maestro [[luwin|Luwin]] decide di mostrargli che lì non c’è nessuno, e [[osha|Osha]] porta Bran in braccio. Davanti alla tomba preparata per Eddard, [[shaggydog|Cagnaccio]] balza fuori e azzanna il braccio di Luwin, finché [[summer-direwolf|Estate]] non allontana Cagnaccio. Il fratello [[rickon-stark|Rickon]] è lì: ha fatto lo stesso sogno. Nella torre del maestro, Luwin parla ai ragazzi dei Figli della Foresta. Poi arriva un corvo, e Luwin legge la notizia della morte di Eddard.',
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
        it: 'Rickon sogna il padre [[eddard-stark|Eddard]] nelle cripte e ci scende con [[shaggydog|Cagnaccio]]. Quando il maestro [[luwin|Luwin]] porta lì il fratello [[bran-stark|Bran]], Cagnaccio azzanna il braccio del maestro. Rickon esce dalla tomba preparata per Eddard e dice a Luwin di lasciare stare il padre: lo ha visto la notte prima, e sta tornando a casa. Rickon non vuole che Cagnaccio stia alla catena. Segue gli altri nella torre del maestro, dove un corvo porta la notizia della morte di Eddard.',
        en: 'Rickon dreams of his father [[eddard-stark|Eddard]] in the crypts and goes down there with [[shaggydog|Shaggydog]]. When Maester [[luwin|Luwin]] brings his brother [[bran-stark|Bran]] there, Shaggydog savages the maester’s arm. Rickon comes out of the tomb made ready for Eddard and tells Luwin to leave his father alone: he saw him last night, and he is coming home. Rickon does not want Shaggydog chained. He follows the others to the maester’s turret, where a raven brings the news of Eddard’s death.',
      },
    ),
  ],
  'theon-greyjoy': [
    inBoth(
      [1, 2],
      { it: 'Il pupillo', en: 'The ward' },
      {
        it: 'Theon è il pupillo di lord [[eddard-stark|Eddard Stark]] ed è cresciuto a Grande Inverno con i figli di Eddard. Cavalca con loro all’esecuzione di un disertore dei Guardiani della notte, che Eddard decapita di persona. Sulla via del ritorno il gruppo trova una meta-lupa morta e i suoi cuccioli, e Eddard li lascia ai figli. Quando [[jon-snow|Jon]] trova un sesto cucciolo, bianco, Theon guarda il cucciolo con disprezzo.',
        en: 'Theon is the ward of Lord [[eddard-stark|Eddard Stark]] and has grown up at Winterfell with his sons. He rides with them to the execution of a deserter of the Night’s Watch, whom Eddard beheads himself. On the way back the party finds a dead direwolf and her pups, and Eddard lets his children keep them. When [[jon-snow|Jon]] finds a sixth pup, a white one, Theon is scornful of it.',
      },
    ),
    onScreen(
      [4, 25],
      { it: 'Il lacchè degli Stark', en: 'The Starks’ lackey' },
      {
        it: 'Theon fa chiamare [[hodor|Hodor]] perché porti [[bran-stark|Bran]] nella sala dove [[robb-stark|Robb]] riceve [[tyrion-lannister|Tyrion Lannister]]. Quando Tyrion se ne va per passare la notte al bordello, Theon gli consiglia con sufficienza una delle ragazze. Tyrion gli ricorda la stupida ribellione del padre di Theon, Balon Greyjoy, e si chiede come si sentirebbe lord Balon a vedere il suo ultimo figlio ridotto a fare da lacchè a chi lo tiene prigioniero. Theon si infuria.',
        en: 'Theon has [[hodor|Hodor]] fetched to carry [[bran-stark|Bran]] to the hall where [[robb-stark|Robb]] is receiving [[tyrion-lannister|Tyrion Lannister]]. When Tyrion leaves to spend the night at the brothel, Theon condescendingly recommends one of the girls. Tyrion reminds him of his father Balon Greyjoy’s stupid rebellion, and wonders how Lord Balon would feel to see his last son reduced to a lackey for the people who hold him. Theon is furious.',
      },
    ),
    inBoth(
      [6, 38],
      { it: 'La freccia', en: 'The arrow' },
      {
        it: 'Theon esce a cavallo con [[robb-stark|Robb]] e [[bran-stark|Bran]], che prova la sua nuova sella. Nella Foresta del Lupo una banda di fuorilegge circonda Bran. Robb li attacca, ma uno degli uomini tiene un coltello alla gola del ragazzo. Theon uccide l’uomo con una freccia, e Robb è furioso. La sola superstite, [[osha|Osha]], si arrende e viene portata a Grande Inverno.',
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
        it: 'La Vecchia Nan è la donna più anziana di Grande Inverno, e da sempre racconta storie ai figli degli Stark. Quando un uomo entra nella stanza di [[bran-stark|Bran]] per ucciderlo, la madre del ragazzo, [[catelyn-stark|Catelyn]], lo affronta a mani nude finché il meta-lupo di Bran non sbrana l’uomo. Ferita, Catelyn viene portata via e curata, e la Vecchia Nan la aiuta a lavarsi via il sangue.',
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
        it: 'Osha ora lavora come serva a Grande Inverno. [[theon-greyjoy|Theon]] pretende che lei lo chiami “mio signore”, ma Osha gli fa notare che il padre di Theon è ancora vivo, quindi il titolo non gli spetta. Il maestro [[luwin|Luwin]] manda via Theon e chiede a Osha perché la sua banda sia venuta a sud della Barriera. Lei risponde che le cose che dormivano sotto il ghiaccio non dormono più: gli Estranei si sono svegliati. Luwin non le crede.',
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
        it: 'Osha si comporta bene, e le hanno tolto le catene, ma non i ceppi. Quando [[bran-stark|Bran]] sogna il padre [[eddard-stark|Eddard]] nelle cripte, il maestro [[luwin|Luwin]] la chiama perché porti il ragazzo laggiù. Osha dice a Bran che l’inverno non ha re. Quando [[shaggydog|Cagnaccio]] azzanna Luwin, Osha corre ad aiutare il maestro, e poi gli benda la ferita. Ricorda al maestro che il lord è Bran, e gli dice che alcuni sogni non sono soltanto sogni. Quando arriva il corvo, è lei a dire a Bran che sa già cosa c’è scritto.',
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
        it: 'Estate è il meta-lupo di [[bran-stark|Bran]], uno dei cuccioli trovati accanto alla madre morta. Bran giace privo di sensi dopo la caduta, e un uomo entra nella stanza del ragazzo con un pugnale per ucciderlo. La madre di Bran, [[catelyn-stark|Catelyn]], affronta l’uomo finché il lupo non arriva e gli squarcia la gola. Bran chiama il lupo Estate, e il lupo resta accanto a lui e veglia su di lui.',
        en: 'Summer is [[bran-stark|Bran]]’s direwolf, one of the pups found beside their dead mother. Bran lies senseless after his fall, and a man comes into the boy’s room with a dagger to kill him. Bran’s mother, [[catelyn-stark|Catelyn]], fights the man until the wolf comes in and tears out his throat. Bran names the wolf Summer, and the wolf stays by his side and keeps watch over him.',
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
        it: 'Da quando ha saputo che [[robb-stark|Robb]] parte per la guerra, [[rickon-stark|Rickon]] è diventato selvatico, e Cagnaccio con lui. Una volta Rickon viene trovato nelle cripte e colpisce con una spada gli uomini venuti a prenderlo, mentre Cagnaccio morde Gage a un braccio e strappa un pezzo di coscia a [[mikken|Mikken]]. Servono Robb e [[grey-wind|Vento Grigio]] per tenere a bada Cagnaccio, che viene incatenato nei canili.',
        en: 'Since he learned that [[robb-stark|Robb]] is leaving for the war, [[rickon-stark|Rickon]] has grown wild, and Shaggydog with him. Once Rickon is found in the crypts and slashes with a sword at the men who come for him, while Shaggydog bites Gage on the arm and takes a chunk out of [[mikken|Mikken]]’s thigh. It takes Robb and [[grey-wind|Grey Wind]] to master Shaggydog, and Shaggydog is chained in the kennels.',
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
        it: 'Spettro segue [[jon-snow|Jon Snow]] alla Barriera. Al Castello Nero Jon convince le altre reclute ad andarci piano con [[samwell-tarly|Samwell Tarly]] nell’addestramento. Solo [[rast|Rast]] si rifiuta. Di notte Jon va da Rast con Spettro, e il lupo si para davanti a Rast mentre Jon lo avverte di lasciare stare Sam. Da allora nessuno se la prende più con Sam nel cortile.',
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
        it: 'Un corvo porta a Grande Inverno la notizia che Jon Arryn, che era Primo Cavaliere del Re, è morto, e Catelyn la riferisce al marito [[eddard-stark|Eddard]]. Re Robert e gran parte della corte stanno venendo a nord. Catelyn sorprende il figlio [[bran-stark|Bran]] ad arrampicarsi sulle mura del castello e gli fa promettere di smettere, pur sapendo che mente. Al banchetto lei e la regina Cersei si scambiano parole cortesi. Quella notte maestro Luwin porta una lettera segreta della sorella di Catelyn: Jon Arryn è stato assassinato e i Lannister cospirano contro il re. Catelyn preferirebbe che Eddard restasse, ma lui accetta l’offerta del re di diventare il suo Primo Cavaliere.',
        en: 'A raven brings word to Winterfell that Jon Arryn, who was Hand of the King, is dead, and Catelyn breaks the news to her husband [[eddard-stark|Eddard]]. King Robert and much of his court are riding north. Catelyn catches her son [[bran-stark|Bran]] climbing the castle walls and makes him promise to stop, knowing that he is lying. At the feast she and Queen Cersei exchange polite words. That night Maester Luwin brings a secret letter from her sister: Jon Arryn was murdered, and the Lannisters are plotting against the king. Catelyn would rather Eddard stayed, but he accepts the king’s offer to be his Hand.',
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
        it: 'Dopo la caduta da una torre [[bran-stark|Bran]] giace privo di sensi, e Catelyn non si allontana dal letto del figlio. Quando [[jon-snow|Jon]] viene a salutarlo prima di partire per la Barriera, lei lo manda via con freddezza. [[eddard-stark|Eddard]] parte per il sud con il re. Una notte scoppia un incendio nel castello e un uomo si introduce nella stanza di Bran per ucciderlo. Catelyn lo trattiene finché il meta-lupo di Bran non squarcia la gola all’uomo. Convinta che i Lannister vogliano morto Bran perché ha visto qualcosa, annuncia a [[robb-stark|Robb]], a [[theon-greyjoy|Theon]], a maestro [[luwin|Luwin]] e a ser [[rodrik-cassel|Rodrik]] che andrà a sud ad avvertire il marito. Ser Rodrik parte con lei, e Robb resta a governare Grande Inverno.',
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
        it: 'Sulla via del ritorno verso nord, Catelyn e ser [[rodrik-cassel|Rodrik]] si fermano in una locanda, sperando di passare inosservati. Il cantastorie [[marillion|Marillion]] cerca di ingraziarsi Catelyn, e a Rodrik non piace affatto. Poi arriva [[tyrion-lannister|Tyrion Lannister]] con [[yoren|Yoren]], un uomo dei Guardiani della notte, e la riconosce. Catelyn si rivolge agli uomini presenti che sono al servizio dei vassalli di suo padre, accusa Tyrion di aver cercato di far uccidere suo figlio [[bran-stark|Bran]] e fa catturare Tyrion.',
        en: 'On the way back north, Catelyn and Ser [[rodrik-cassel|Rodrik]] stop at an inn, hoping to pass unnoticed. The singer [[marillion|Marillion]] tries to win her favour, and Rodrik has no liking for him. Then [[tyrion-lannister|Tyrion Lannister]] arrives with [[yoren|Yoren]], a man of the Night’s Watch, and recognises her. Catelyn calls on the men in the room who are sworn to her father’s bannermen, accuses Tyrion of trying to have her son [[bran-stark|Bran]] killed, and has him seized.',
      },
    ),
    inBoth(
      [5, 35],
      { it: 'Verso il Nido dell’Aquila', en: 'Toward the Eyrie' },
      {
        it: 'Catelyn annuncia di voler portare [[tyrion-lannister|Tyrion]] a Grande Inverno, ma con ser [[rodrik-cassel|Rodrik]] e gli uomini della locanda conduce invece Tyrion a est, verso il Nido dell’Aquila e la sorella di Catelyn, [[lysa-arryn|Lysa Arryn]]. Quando sulla strada li attaccano gli uomini dei clan delle montagne, lascia che Tyrion combatta, e lui le salva la vita. Catelyn continua a non fidarsi di lui. Al Nido dell’Aquila Lysa prende Tyrion sotto la propria custodia.',
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
        it: 'Per attraversare il fiume alle Torri Gemelle, Catelyn entra lei stessa nel castello a trattare con lord [[walder-frey|Walder Frey]], che non è ancora sceso in guerra. Walder lascia passare l’esercito di [[robb-stark|Robb]] e vi unisce i suoi uomini, in cambio di alcune promesse: Robb sposerà una delle figlie di Walder, [[arya-stark|Arya]] uno dei suoi figli, e Robb prenderà come scudiero Olyvar, un figlio di Walder. Oltre il fiume Robb manda una parte dell’esercito contro lord [[tywin-lannister|Tywin]] e guida il resto contro l’esercito di [[jaime-lannister|Jaime Lannister]], che assedia il castello del padre di Catelyn. Robb torna vittorioso, con Jaime prigioniero.',
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
        it: 'Dopo la caduta di [[bran-stark|Bran]], [[eddard-stark|Eddard]] parte per il sud come Primo Cavaliere del Re, e Robb abbraccia [[jon-snow|Jon]], che va alla Barriera. [[catelyn-stark|Catelyn]] non si allontana dal letto di Bran, così Robb si occupa di mandare avanti Grande Inverno con maestro [[luwin|Luwin]]. Una notte corre via dalla stanza di Bran per un incendio nel castello, e intanto un uomo vi entra per uccidere Bran. Quando Catelyn decide di andare a sud ad avvertire Eddard, Robb resta a capo di Grande Inverno.',
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
        it: 'Robb riceve nella sala [[tyrion-lannister|Tyrion Lannister]], di ritorno dalla Barriera insieme ad alcuni uomini dei Guardiani della notte, tra cui [[yoren|Yoren]]. Robb accoglie gli uomini dei Guardiani, ma non Tyrion. [[hodor|Hodor]] porta giù [[bran-stark|Bran]], e Tyrion consegna a Bran il disegno di una sella che gli permetterà di tornare a cavalcare. Allora Robb offre a Tyrion l’ospitalità del castello, ma Tyrion rifiuta.',
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
        it: 'Dal sud arrivano notizie: [[catelyn-stark|Catelyn]] ha fatto catturare [[tyrion-lannister|Tyrion Lannister]], gli uomini di [[jaime-lannister|Jaime]] hanno ucciso [[jory-cassel|Jory Cassel]] ed [[eddard-stark|Eddard]] è ferito. Robb va a cavallo nella Foresta del Lupo con [[theon-greyjoy|Theon]] e [[bran-stark|Bran]], che prova la sua nuova sella. Alcuni fuorilegge circondano Bran, e Robb li affronta. [[stiv|Stiv]] punta un coltello contro Bran, finché Theon non uccide Stiv con una freccia. Robb se la prende con Theon. L’unica fuorilegge presa viva è [[osha|Osha]], e Robb la porta a Grande Inverno come prigioniera.',
        en: 'News comes from the south: [[catelyn-stark|Catelyn]] has seized [[tyrion-lannister|Tyrion Lannister]], [[jaime-lannister|Jaime]]’s men have killed [[jory-cassel|Jory Cassel]], and [[eddard-stark|Eddard]] is hurt. Robb rides into the wolfswood with [[theon-greyjoy|Theon]] and [[bran-stark|Bran]], who is trying his new saddle. Outlaws surround Bran, and Robb fights them. [[stiv|Stiv]] holds a knife to Bran until Theon kills him with an arrow. Robb is angry with Theon. The only outlaw taken alive is [[osha|Osha]], and Robb brings her back to Winterfell as a prisoner.',
      },
    ),
    inBoth(
      [8, 54],
      { it: 'La chiamata alle armi', en: 'Calling the banners' },
      {
        it: 'Quando arriva la notizia che [[eddard-stark|Eddard]] è stato arrestato nella capitale, Robb chiama a raccolta i vessilli del padre e i lord del Nord si radunano a Grande Inverno. [[greatjon-umber|Greatjon Umber]] pretende il comando e mette mano all’acciaio alla tavola di Robb. Il meta-lupo di Robb, [[grey-wind|Vento Grigio]], getta a terra il Greatjon e gli stacca due dita con un morso. Il Greatjon ride e da allora segue Robb. Robb lascia a Grande Inverno [[bran-stark|Bran]] e il fratellino [[rickon-stark|Rickon]], che è convinto che chi parte non torni più, e marcia verso sud.',
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
        it: 'Mentre riaccompagna [[catelyn-stark|Catelyn]] verso nord, ser Rodrik si ferma con lei in una locanda dove sperano di non essere riconosciuti. Il cantastorie [[marillion|Marillion]], che cerca di ingraziarsi Catelyn, non gli piace per niente. Quando arriva [[tyrion-lannister|Tyrion Lannister]] e la riconosce, Catelyn si rivolge agli uomini presenti al servizio dei vassalli di suo padre. Rodrik è al suo fianco quando lei accusa Tyrion di aver tramato la morte di [[bran-stark|Bran]] e fa catturare Tyrion.',
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
        it: 'Quando [[robb-stark|Robb]] chiama a raccolta i vessilli del padre, Vento Grigio gli resta accanto mentre i lord del Nord si radunano a Grande Inverno. Alla tavola di Robb [[greatjon-umber|Greatjon Umber]] lo sfida e mette mano all’acciaio. Vento Grigio balza addosso al Greatjon, lo getta a terra e gli stacca due dita con un morso. Il Greatjon ci ride sopra e accetta il comando di Robb, che marcia verso sud con il suo meta-lupo.',
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
        it: 'Vento Grigio segue [[robb-stark|Robb]] come un’ombra quando Robb va a far scattare la trappola contro l’esercito di [[jaime-lannister|Jaime Lannister]] nel Bosco dei Sussurri, dove Robb fa prigioniero Jaime. Quando l’esercito di Robb arriva a Delta delle Acque, [[theon-greyjoy|Theon Greyjoy]] racconta alla guarnigione come, durante i combattimenti, Vento Grigio abbia staccato il braccio a un uomo e fatto impazzire i cavalli dei Lannister.',
        en: 'Grey Wind shadows [[robb-stark|Robb]] as he rides out to spring his trap on [[jaime-lannister|Jaime Lannister]]’s army in the Whispering Wood, where Robb takes Jaime prisoner. When Robb’s host reaches Riverrun, [[theon-greyjoy|Theon Greyjoy]] tells the garrison how, in the fighting, Grey Wind tore the arm off a man and drove the Lannister horses mad.',
      },
    ),
  ],
  'greatjon-umber': [
    inBoth(
      [8, 54],
      { it: 'L’acciaio alla tavola di Robb', en: 'Steel at Robb’s table' },
      {
        it: 'Greatjon Umber è un enorme lord del Nord, a capo di Casa Umber. Quando [[robb-stark|Robb Stark]] chiama a raccolta i vessilli del padre dopo l’arresto di [[eddard-stark|Eddard]], porta i suoi uomini a Grande Inverno. Pretende il comando e, quando Robb glielo nega, mette mano all’acciaio alla tavola di Robb. Il meta-lupo di Robb, [[grey-wind|Vento Grigio]], getta a terra il Greatjon e gli stacca due dita con un morso. Il Greatjon ride e da allora segue Robb.',
        en: 'Greatjon Umber is a huge northern lord, the head of House Umber. When [[robb-stark|Robb Stark]] calls his father’s banners after [[eddard-stark|Eddard]]’s arrest, he brings his men to Winterfell. He demands to lead and, when Robb refuses him, reaches for his steel at Robb’s table. Robb’s direwolf [[grey-wind|Grey Wind]] knocks him down and bites off two of his fingers. The Greatjon laughs and follows Robb from then on.',
      },
    ),
    inBooks(
      [8, 56],
      { it: 'Il comando della fanteria', en: 'Passed over for the foot' },
      {
        it: 'Il Greatjon diventa il più fedele sostenitore di [[robb-stark|Robb]], e l’esercito raggiunge Moat Cailin. Robb intende affidargli la fanteria che marcerà lungo la strada del re contro lord Tywin. [[catelyn-stark|Catelyn]] fa notare a Robb che [[eddard-stark|Eddard]] considerava il Greatjon un uomo senza paura, e che non avere paura non è come essere coraggiosi. Robb decide che per la fanteria serve un uomo prudente e astuto, e la affida invece a Roose Bolton.',
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
        it: 'Roose Bolton è a capo di Casa Bolton, e porta i suoi uomini a Grande Inverno quando [[robb-stark|Robb Stark]] chiama a raccolta i vessilli del padre. Fra tutti i vassalli è quello che Robb trova più spaventoso: non dice mai una parola, si limita a guardare. Robb racconta a [[bran-stark|Bran]] che, ogni volta che Bolton fissa Robb, pensa alla stanza di Forte Terrore dove si dice che i Bolton appendano le pelli dei nemici. Bran ribatte che è solo una delle storie della Vecchia Nan.',
        en: 'Roose Bolton is the head of House Bolton, and he brings his men to Winterfell when [[robb-stark|Robb Stark]] calls his father’s banners. Of all the bannermen, he is the one Robb finds most frightening: he never says a word, he only looks. Robb tells [[bran-stark|Bran]] that whenever Bolton looks at him, he thinks of the room in the Dreadfort where the Boltons are said to hang the skins of their enemies. Bran says that is only one of Old Nan’s stories.',
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
        it: 'Galbart Glover è uno dei lord del Nord che rispondono alla chiamata alle armi di [[robb-stark|Robb Stark]] dopo l’arresto del padre. Al banchetto di Grande Inverno Robb gli affida l’avanguardia. [[greatjon-umber|Greatjon Umber]] non vuole marciare dietro a un Glover e minaccia di tornarsene a casa, finché [[grey-wind|Vento Grigio]] non stacca due dita al Greatjon con un morso. Più tardi Galbart siede al consiglio di guerra di Robb, che si interrompe quando arriva [[catelyn-stark|Catelyn]] e chiede di parlare da sola con il figlio.',
        en: 'Galbart Glover is one of the northern lords who answer [[robb-stark|Robb Stark]]’s call to arms after his father’s arrest. At the feast in Winterfell, Robb gives him the vanguard. [[greatjon-umber|Greatjon Umber]] will not march behind a Glover and threatens to go home, until [[grey-wind|Grey Wind]] bites off two of his fingers. Later Galbart sits at Robb’s war council, which breaks up when [[catelyn-stark|Catelyn]] arrives and asks to speak with her son alone.',
      },
    ),
    inBooks(
      [8, 56],
      { it: 'Al consiglio di guerra di Robb', en: 'At Robb’s war council' },
      {
        it: 'Galbart Glover è uno dei lord del Nord che rispondono alla chiamata alle armi di [[robb-stark|Robb Stark]] dopo l’arresto del padre. Siede al consiglio di guerra di Robb mentre l’esercito marcia verso sud. Quando [[catelyn-stark|Catelyn]] raggiunge l’esercito, chiede di parlare da sola con il figlio, e i lord li lasciano soli.',
        en: 'Galbart Glover is one of the northern lords who answer [[robb-stark|Robb Stark]]’s call to arms after his father’s arrest. He sits at Robb’s war council as the host marches south. When [[catelyn-stark|Catelyn]] reaches the host, she asks to speak with her son alone, and the lords leave the two of them together.',
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
        it: 'Robett Glover appartiene a Casa Glover, una casata del Nord. Quando [[robb-stark|Robb Stark]] chiama a raccolta i vessilli del padre, Robett è tra gli uomini del Nord che arrivano a Grande Inverno per marciare con lui. Come altri lord che mettono alla prova il giovane Robb, gli chiede un comando. Robb nega il comando supremo a chiunque lo chieda e piega i lord alla sua volontà, come faceva il padre.',
        en: 'Robett Glover belongs to House Glover, a northern house. When [[robb-stark|Robb Stark]] calls his father’s banners, Robett is among the northmen who come to Winterfell to march with him. Like other lords who test the young Robb, he asks him for a command. Robb refuses supreme command to everyone who asks, and bends the lords to his will as his father did.',
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
        it: 'Dacey Mormont è la figlia maggiore di [[maege-mormont|lady Maege Mormont]] ed erede dell’Isola dell’Orso. Cavalca nella guardia personale di [[robb-stark|Robb Stark]] quando l’esercito di Robb fa scattare la trappola contro le truppe di [[jaime-lannister|Jaime Lannister]] nel Bosco dei Sussurri. Quando Jaime carica il gruppo di Robb, la guardia difende Robb, e Robb fa prigioniero Jaime.',
        en: 'Dacey Mormont is the eldest daughter of [[maege-mormont|Lady Maege Mormont]] and the heir to Bear Island. She rides in [[robb-stark|Robb Stark]]’s personal guard when his host springs its trap on the army of [[jaime-lannister|Jaime Lannister]] in the Whispering Wood. When Jaime charges Robb’s party, the guard defends Robb, and Robb takes Jaime prisoner.',
      },
    ),
  ],
  'wendel-manderly': [
    inBooks(
      [29, 56],
      { it: 'Da Porto Bianco', en: 'From White Harbor' },
      {
        it: 'Ser Wendel Manderly è un cavaliere di Porto Bianco, figlio di lord Wyman Manderly. Quando [[catelyn-stark|Catelyn Stark]] sbarca a Porto Bianco, lord Wyman, troppo grasso per stare in sella, resta a difendere la città e manda i suoi due figli, ser Wylis e ser Wendel, con millecinquecento uomini. I due cavalcano con Catelyn e con lo zio di lei, ser Brynden Tully, fino a Moat Cailin, dove si uniscono all’esercito di [[robb-stark|Robb]].',
        en: 'Ser Wendel Manderly is a knight of White Harbor, a son of Lord Wyman Manderly. When [[catelyn-stark|Catelyn Stark]] comes ashore at White Harbor, Lord Wyman, too fat to sit a horse, stays to defend the city and sends his two sons, Ser Wylis and Ser Wendel, with fifteen hundred men. They ride with Catelyn and her uncle Ser Brynden Tully to Moat Cailin, where they join [[robb-stark|Robb]]’s host.',
      },
    ),
    inBooks(
      [29, 64],
      { it: 'Nella guardia di Robb', en: 'In Robb’s guard' },
      {
        it: 'Ser Wendel Manderly marcia a sud nell’esercito di [[robb-stark|Robb]] e cavalca nella guardia personale di Robb, tra gli uomini più anziani, quando l’esercito piomba sulle truppe di [[jaime-lannister|Jaime Lannister]] nel Bosco dei Sussurri. Quando Jaime carica il gruppo di Robb, la guardia difende Robb, e Robb fa prigioniero Jaime.',
        en: 'Ser Wendel Manderly marches south in [[robb-stark|Robb]]’s host and rides in his personal guard, one of its older men, when the host falls on [[jaime-lannister|Jaime Lannister]]’s army in the Whispering Wood. When Jaime charges Robb’s party, the guard defends Robb, and Robb takes Jaime prisoner.',
      },
    ),
  ],
} satisfies Record<string, Timeline<Story>>
