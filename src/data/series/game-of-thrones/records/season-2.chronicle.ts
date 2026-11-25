import type { Story, Timeline } from '~/data/types'

import { inBooks, onScreen } from './chronicle'

/**
 * Season 2 and *A Clash of Kings*: the stories of the characters the second
 * stage files (#1462), each at the first episode and the first site chapter
 * by whose end the reader knows all of it, on season 1's rules
 * (`season-1.chronicle.ts`). A returning character's stage-2 stories go in
 * the module that first filed them, so this one holds only the stage's new
 * cast.
 *
 * The Essos and Qarth cast (#1478) comes first. The show and the books part
 * almost everywhere in Qarth: the show has Kovarro and Malakho, a warlock it
 * never names on screen, Xaro's coup and his death in his vault; the books
 * have Pyat Pree, Quaithe, the Pureborn and the port where Strong Belwas and
 * Arstan Whitebeard find Daenerys. So every story is one medium's. A story
 * the books alone tell sits at the episode that adapts its chapter, or at
 * the record's own show gate when that is later: the dragons' are at
 * episodes 40 and 41. A show story sits at the chapter its episode adapts,
 * or at the record's or a linked record's book gate when that is later:
 * every story that links Xaro is at chapter 114 or after.
 *
 * The King’s Landing and Blackwater cast (#1484) follows. Daisy is the
 * show’s alone; Jacelyn Bywater, Hallyne, Lollys Stokeworth, Osmund
 * Kettleblack, Alayaya and Garlan Tyrell are the books’, each opening at its
 * record’s own pair, and a story told from a later chapter tells what came
 * before it there.
 */
export const season2Chronicles = {
  'kovarro': [
    onScreen(
      [11, 86],
      { it: 'Un cavaliere di sangue', en: 'A bloodrider' },
      {
        it: 'Kovarro ha giurato fedeltà a [[daenerys-targaryen|Daenerys]] quando lei ha fatto schiudere tre draghi nella pira di Drogo, ed è uno dei tre cavalieri rimasti con lei. Nel Deserto Rosso, con la sua gente alla fame, Daenerys manda lui, [[rakharo|Rakharo]] e [[aggo|Aggo]] a esplorare in tre direzioni con gli ultimi cavalli, Kovarro verso est.',
        en: 'Kovarro swore his loyalty to [[daenerys-targaryen|Daenerys]] when she hatched three dragons in Drogo’s pyre, and he is one of the three riders who stay with her. In the Red Waste, with her people starving, she sends him, [[rakharo|Rakharo]] and [[aggo|Aggo]] to scout in three directions on the last horses, Kovarro to the east.',
      },
    ),
    onScreen(
      [14, 101],
      { it: 'L’invito di Qarth', en: 'Qarth’s invitation' },
      {
        it: 'Dei tre cavalieri di sangue torna solo Kovarro. Ha trovato Qarth, tre giorni più a est, sul mare, e i Tredici che la governano gli hanno dato un cavallo nuovo: hanno saputo dei draghi e invitano [[daenerys-targaryen|Daenerys]] in città. Kovarro guida il khalasar fino alle porte.',
        en: 'Of the three bloodriders only Kovarro comes back. He has found Qarth, three days to the east on the sea, and the Thirteen who rule it have given him a new horse: they have heard of the dragons and invite [[daenerys-targaryen|Daenerys]] to the city. He leads the khalasar to its gates.',
      },
    ),
    onScreen(
      [20, 137],
      { it: 'Di guardia alla khaleesi', en: 'Guarding the khaleesi' },
      {
        it: 'Dopo il furto dei draghi Kovarro fa da scorta a [[daenerys-targaryen|Daenerys]] davanti ai Tredici e la porta fuori quando i doppi dello stregone li uccidono. La accompagna con [[jorah-mormont|ser Jorah]] alla Casa degli Eterni e resta di guardia quando lei sparisce all’interno. Al ritorno di Daenerys è con lei quando trova [[xaro-xhoan-daxos|Xaro]] con [[doreah|Doreah]], e aiuta a prendere l’oro dalla casa di Xaro per pagare una nave.',
        en: 'After the dragons are stolen, Kovarro guards [[daenerys-targaryen|Daenerys]] before the Thirteen and leads her out when the warlock’s doubles kill them. He goes with her and [[jorah-mormont|Ser Jorah]] to the House of the Undying and stands guard when she vanishes inside. Once she is back, he is with her when she finds [[xaro-xhoan-daxos|Xaro]] with [[doreah|Doreah]], and he helps strip Xaro’s house of its gold to pay for a ship.',
      },
    ),
  ],
  'malakho': [
    onScreen(
      [15, 114],
      { it: 'Il pavone d’oro', en: 'The golden peacock' },
      {
        it: 'Malakho è un vecchio guerriero rimasto con [[daenerys-targaryen|Daenerys]]. Alla festa di [[xaro-xhoan-daxos|Xaro]] lui e [[kovarro|Kovarro]] adocchiano un pavone d’oro tempestato di gioielli. Malakho dice che è troppo pesante da portare via, e Kovarro gli dà dell’idiota: basterebbe staccare i gioielli e fare a pezzi l’oro. Daenerys dice loro di non derubare l’uomo che li ha salvati dal Deserto Rosso.',
        en: 'Malakho is an old warrior who stays with [[daenerys-targaryen|Daenerys]]. At [[xaro-xhoan-daxos|Xaro]]’s feast he and [[kovarro|Kovarro]] eye a jeweled golden peacock. Malakho says it is too heavy to carry, and Kovarro calls him an idiot: they could pry out the jewels and chop up the gold. Daenerys tells them not to steal from the man who saved them from the Red Waste.',
      },
    ),
    onScreen(
      [20, 137],
      { it: 'La camera vuota', en: 'The empty vault' },
      {
        it: 'Tornata dalla Casa degli Eterni, [[daenerys-targaryen|Daenerys]] trova [[xaro-xhoan-daxos|Xaro]] a letto con [[doreah|Doreah]]. Quando la camera del tesoro di Xaro si rivela vuota, Malakho ce lo spinge dentro, e Daenerys fa chiudere dentro Xaro e Doreah. La gente di Daenerys spoglia la casa di tutto ciò che ha valore.',
        en: 'Back from the House of the Undying, [[daenerys-targaryen|Daenerys]] finds [[xaro-xhoan-daxos|Xaro]] in bed with [[doreah|Doreah]]. When Xaro’s vault turns out to be empty, Malakho forces him inside, and Daenerys has Xaro and Doreah locked in. Her people strip the house of its valuables.',
      },
    ),
  ],
  'xaro-xhoan-daxos': [
    onScreen(
      [15, 114],
      { it: 'La proposta', en: 'The proposal' },
      {
        it: 'Xaro Xhoan Daxos, uno dei Tredici, ha garantito per [[daenerys-targaryen|Daenerys]] con il Sumai e l’ha accolta nella sua dimora. Dà una festa per lei nei suoi giardini, poi le mostra la sua camera del tesoro, che si apre solo con la chiave che porta al collo, e le offre di dividere la sua ricchezza se lei lo sposerà. Le dice che re Robert è morto e che i Sette Regni sono in guerra.',
        en: 'Xaro Xhoan Daxos, one of the Thirteen, has vouched for [[daenerys-targaryen|Daenerys]] with the Sumai and made her a guest in his mansion. He holds a feast for her in his gardens, then shows her his vault, which opens only with the key he wears at his neck, and offers to share his fortune if she marries him. He tells her that King Robert is dead and the Seven Kingdoms are at war.',
      },
    ),
    inBooks(
      [16, 114],
      { it: 'Il principe mercante', en: 'The merchant prince' },
      {
        it: 'Xaro Xhoan Daxos, principe mercante dei Tredici, è uno dei tre qarthiani venuti a vedere i draghi di [[daenerys-targaryen|Daenerys]]. Ha cavalcato al fianco di lei entrando a Qarth, le ha offerto qualunque cosa vedesse, le ha dato un’ala del suo palazzo e l’ha messa in guardia dagli stregoni. Ora che l’antica nobiltà di Qarth le nega aiuto, le dice di non avere navi da guerra da darle e le chiede di nuovo di sposarlo, ma Daenerys rifiuta ancora. Xaro le sconsiglia di andare dagli stregoni, e di fidarsi di [[quaithe|Quaithe]].',
        en: 'Xaro Xhoan Daxos, a merchant prince of the Thirteen, is one of the three Qartheen who came to see [[daenerys-targaryen|Daenerys]]’s dragons. He rode beside her into Qarth, offered her anything she saw, gave her a wing of his palace and warned her that warlocks are not to be trusted. Now, with the Pureborn refusing her, he tells her he has no warships to give and asks her again to marry him, and again she refuses. He warns her against the warlocks, and against trusting [[quaithe|Quaithe]].',
      },
    ),
    onScreen(
      [17, 114],
      { it: 'Re di Qarth', en: 'King of Qarth' },
      {
        it: 'Xaro si dice affranto per non aver mantenuto la promessa di proteggere [[daenerys-targaryen|Daenerys]], e riunisce i Tredici nella sua dimora per ascoltarla. Lì uno stregone confessa di aver rubato i draghi e proclama Xaro re di Qarth, e i doppi dello stregone uccidono gli altri membri dei Tredici. Xaro si era alleato in segreto con lo stregone per diventare re.',
        en: 'Xaro claims to be distressed at breaking his promise to protect [[daenerys-targaryen|Daenerys]], and gathers the Thirteen in his house to hear her. There a warlock admits to stealing her dragons and proclaims Xaro King of Qarth, and the warlock’s doubles kill the rest of the Thirteen. Xaro had made a secret alliance with the warlock to become king.',
      },
    ),
    onScreen(
      [20, 137],
      { it: 'La camera vuota', en: 'The empty vault' },
      {
        it: 'Tornata dalla Casa degli Eterni, [[daenerys-targaryen|Daenerys]] trova Xaro a letto con [[doreah|Doreah]]. Xaro le promette delle navi, ma la sua camera del tesoro, aperta con la chiave che lui porta al collo, è vuota. [[malakho|Malakho]] spinge Xaro nella camera vuota, Daenerys fa chiudere dentro Xaro e Doreah e li lascia lì a morire, e la gente di Daenerys spoglia la casa di tutto ciò che ha valore.',
        en: 'Back from the House of the Undying, [[daenerys-targaryen|Daenerys]] finds Xaro in bed with [[doreah|Doreah]]. He promises her ships, but his vault, opened with the key from his neck, is empty. [[malakho|Malakho]] forces Xaro into the empty vault, Daenerys has him and Doreah locked inside and leaves them to die, and her people strip his house of its valuables.',
      },
    ),
    inBooks(
      [20, 137],
      { it: 'Dieci navi per un drago', en: 'Ten ships for a dragon' },
      {
        it: 'Dopo la Casa degli Eterni, Xaro avverte [[daenerys-targaryen|Daenerys]] che gli stregoni stanno raccogliendo il loro potere contro di lei, e che due delle grandi gilde mercantili della città la vogliono cacciata o morta. Lei rifiuta ancora una volta di sposarlo. Quando Daenerys gli chiede una nave come ultimo dono, Xaro le offre dieci navi in cambio di uno dei draghi, e lei risponde che un drago varrebbe un terzo di tutte le navi del mondo.',
        en: 'After the House of the Undying, Xaro warns [[daenerys-targaryen|Daenerys]] that the warlocks are gathering their power against her, and that two of the city’s great merchant guilds want her expelled or dead. She refuses once more to marry him. When she asks him for a ship as a last gift, he offers ten ships for one of her dragons, and she answers that a dragon would cost a third of all the ships in the world.',
      },
    ),
  ],
  'pyat-pree': [
    inBooks(
      [14, 114],
      { it: 'Lo stregone', en: 'The warlock' },
      {
        it: 'Pyat Pree, stregone di Qarth, è venuto con Xaro Xhoan Daxos e Quaithe a vedere i draghi di [[daenerys-targaryen|Daenerys]]. Mentre lei entrava a Qarth le ha detto che la città era sua e l’ha invitata alla Casa degli Eterni a bere saggezza e verità. Ora che a Qarth non le resta altro aiuto, [[jorah-mormont|ser Jorah]] le consiglia di rivolgersi a Pyat Pree.',
        en: 'Pyat Pree, a warlock of Qarth, came with Xaro Xhoan Daxos and Quaithe to see [[daenerys-targaryen|Daenerys]]’s dragons. As she rode into Qarth he told her the city was hers, and invited her to the House of the Undying to drink wisdom and truth. Now, with no help left for her in Qarth, [[jorah-mormont|Ser Jorah]] urges her to go to Pyat Pree.',
      },
    ),
    inBooks(
      [20, 122],
      { it: 'La porta a destra', en: 'The door on the right' },
      {
        it: 'Pyat Pree accoglie [[daenerys-targaryen|Daenerys]] alla Casa degli Eterni e le dice che deve entrare da sola o non entrare affatto. Le raccomanda di prendere sempre la porta a destra, di prendere solo le scale che salgono e di non entrare in nessuna stanza. Quando lei fugge dalla casa in fiamme, Pyat Pree la aggredisce con un pugnale. La frusta di [[jhogo|Jhogo]] gli fa volare via la lama, e [[rakharo|Rakharo]] lo butta a terra.',
        en: 'Pyat Pree meets [[daenerys-targaryen|Daenerys]] at the House of the Undying and tells her she must enter alone or not at all. He warns her always to take the door on her right, to take only stairs that lead up, and to enter no room. When she flees the burning house, he attacks her with a dagger. [[jhogo|Jhogo]]’s whip knocks the knife aside, and [[rakharo|Rakharo]] strikes him to the ground.',
      },
    ),
  ],
  'quaithe': [
    inBooks(
      [15, 86],
      { it: 'La donna mascherata', en: 'The masked woman' },
      {
        it: 'Il khalasar di [[daenerys-targaryen|Daenerys]] riposa nella città morta quando [[jhogo|Jhogo]], l’ultimo esploratore a tornare, porta da lei tre qarthiani. Una di loro è Quaithe dell’Ombra, una donna mascherata che dice il proprio nome. I tre sono venuti da Qarth in cerca di draghi.',
        en: 'Daenerys’s people are resting in the dead city when [[jhogo|Jhogo]], the last scout to come back, brings three Qartheen to [[daenerys-targaryen|Daenerys]]. One of them is Quaithe of the Shadow, a masked woman who gives her own name. The three have come from Qarth seeking dragons.',
      },
    ),
    inBooks(
      [15, 114],
      { it: 'La scala di fuoco', en: 'The ladder of fire' },
      {
        it: 'Entrata a Qarth, [[daenerys-targaryen|Daenerys]] si sente avvertire da Quaithe di guardarsi da tutti, perché tutti bramano i suoi draghi. Al mercato Quaithe le dice che la scala di fuoco di un mago non è un trucco: il potere del mago è cresciuto grazie ai draghi. Le dice di lasciare presto Qarth, o non le sarà mai più permesso di andarsene, e che ad Asshai troverà la verità. [[xaro-xhoan-daxos|Xaro Xhoan Daxos]] mette in guardia Daenerys dal fidarsi di Quaithe.',
        en: 'Once in Qarth, [[daenerys-targaryen|Daenerys]] hears Quaithe warn her to beware of everyone, for all of them covet her dragons. In the bazaar Quaithe tells her that a firemage’s ladder of fire is no trick: his power has grown because of the dragons. She tells her to leave Qarth soon or never be allowed to leave, and that she will find truth in Asshai. [[xaro-xhoan-daxos|Xaro Xhoan Daxos]] warns Daenerys not to trust Quaithe.',
      },
    ),
  ],
  'drogon': [
    inBooks(
      [40, 86],
      { it: 'Il nome di Drogo', en: 'Named for Drogo' },
      {
        it: 'Nel deserto rosso il drago nero e scarlatto non mangia la carne cruda finché [[daenerys-targaryen|Daenerys]] non la abbrustolisce; da quel momento lui e i suoi fratelli divorano ogni giorno più volte il proprio peso e crescono forti. [[aggo|Aggo]] dice che è Balerion rinato, ma Daenerys lo chiama Drogon, dal nome del marito [[drogo|Drogo]], uno di quelli che gli dèi le hanno portato via.',
        en: 'In the red waste the black-and-scarlet dragon will not eat raw meat until [[daenerys-targaryen|Daenerys]] sears it; from then on he and his brothers eat several times their own weight every day, and thrive. [[aggo|Aggo]] calls him Balerion reborn, but Daenerys names him Drogon, after her husband [[drogo|Drogo]], one of those the gods have taken from her.',
      },
    ),
    inBooks(
      [40, 122],
      { it: 'Il cuore degli Eterni', en: 'The heart of the Undying' },
      {
        it: 'Drogon entra con [[daenerys-targaryen|Daenerys]] nella Casa degli Eterni, soffiando contro quella rovina. Quando gli Eterni cercano di divorarla, Drogon fa a pezzi il loro cuore, e Daenerys fugge dalla casa in fiamme. Fuori distrae [[pyat-pree|Pyat Pree]] quando lo stregone la aggredisce con un pugnale.',
        en: 'Drogon goes with [[daenerys-targaryen|Daenerys]] into the House of the Undying, hissing at the ruin. When the Undying try to consume her, he tears their heart to pieces, and she flees the burning house. Outside he distracts [[pyat-pree|Pyat Pree]] when the warlock attacks her with a dagger.',
      },
    ),
  ],
  'rhaegal': [
    inBooks(
      [41, 86],
      { it: 'Il nome di Rhaegar', en: 'Named for Rhaegar' },
      {
        it: 'Nel deserto rosso il drago verde e bronzo, come i suoi fratelli, mangia solo la carne che [[daenerys-targaryen|Daenerys]] ha abbrustolito. Daenerys lo chiama Rhaegal, in ricordo del fratello Rhaegar. Ogni notte [[irri|Irri]] e [[jhiqui|Jhiqui]] portano due draghi in una gabbia appesa tra i loro cavalli, mentre il terzo viaggia sulla spalla di Daenerys.',
        en: 'In the red waste the green-and-bronze dragon, like his brothers, eats only meat that [[daenerys-targaryen|Daenerys]] has seared. She names him Rhaegal, after her brother Rhaegar. Each night [[irri|Irri]] and [[jhiqui|Jhiqui]] carry two of the dragons in a cage between their horses, while the third rides on her shoulder.',
      },
    ),
  ],
  'viserion': [
    inBooks(
      [41, 86],
      { it: 'Il nome di Viserys', en: 'Named for Viserys' },
      {
        it: 'Nel deserto rosso il drago color crema e oro comincia a crescere quando [[daenerys-targaryen|Daenerys]] gli dà carne abbrustolita: si è ricordata che, secondo il fratello [[viserys-targaryen|Viserys]], solo gli uomini e i draghi mangiano la carne cotta. Daenerys dà ai draghi i nomi di chi gli dèi le hanno portato via, e chiama questo Viserion, in ricordo di Viserys.',
        en: 'In the red waste the cream-and-gold dragon begins to thrive once [[daenerys-targaryen|Daenerys]] feeds him seared meat, remembering her brother [[viserys-targaryen|Viserys]]’s words that only men and dragons eat cooked meat. She names her dragons after those the gods have taken from her, and this one Viserion, after Viserys.',
      },
    ),
  ],
  'strong-belwas': [
    inBooks(
      [20, 137],
      { it: 'Mandato da Illyrio', en: 'Sent by Illyrio' },
      {
        it: 'Al porto di Qarth un uomo enorme e sfregiato segue [[daenerys-targaryen|Daenerys]] e [[jorah-mormont|ser Jorah]]. Dopo che lo scudiero dell’uomo, [[arstan-whitebeard|Arstan Barbabianca]], ha salvato Daenerys da una manticora, lei scopre che l’uomo è Belwas il Forte, un eunuco ed ex combattente delle arene. Belwas dice che il magistro [[illyrio-mopatis|Illyrio]] lo ha mandato con tre navi per riportarla a Pentos.',
        en: 'At the port of Qarth a huge, scarred man follows [[daenerys-targaryen|Daenerys]] and [[jorah-mormont|Ser Jorah]]. After his squire, [[arstan-whitebeard|Arstan Whitebeard]], saves her from a manticore, she learns that he is Strong Belwas, a eunuch and former pit fighter. He says Magister [[illyrio-mopatis|Illyrio]] has sent him with three ships to bring her back to Pentos.',
      },
    ),
  ],
  'arstan-whitebeard': [
    inBooks(
      [20, 137],
      { it: 'Il vecchio con il bastone', en: 'The old man with the staff' },
      {
        it: 'Al porto di Qarth un vecchio con un bastone segue [[daenerys-targaryen|Daenerys]]. Quando un mercante le porge uno scrigno con dentro una manticora, il vecchio glielo fa cadere dalle mani. Si presenta come Arstan Barbabianca, scudiero di [[strong-belwas|Belwas il Forte]], e dice di venire dai Sette Regni. Dice che il magistro [[illyrio-mopatis|Illyrio]] li ha mandati a riportarla a Pentos.',
        en: 'At the port of Qarth an old man with a staff follows [[daenerys-targaryen|Daenerys]]. When a merchant hands her a box with a manticore inside, the old man knocks it out of her hands. He introduces himself as Arstan Whitebeard, squire to [[strong-belwas|Strong Belwas]], and says he comes from the Seven Kingdoms. He says Magister [[illyrio-mopatis|Illyrio]] has sent them to bring her back to Pentos.',
      },
    ),
  ],
  // King’s Landing and the Blackwater (#1484).
  'daisy': [
    onScreen(
      [11, 77],
      { it: 'La nuova arrivata', en: 'The new girl' },
      {
        it: 'Daisy è appena arrivata nel bordello di [[petyr-baelish|Ditocorto]], e [[ros|Ros]] le mostra il posto, spiegandole che lì servono clienti di un livello più alto di quelli che conosceva a Haystack Hall. Daisy resta colpita dal posto. Poi irrompono le cappe dorate di [[janos-slynt|Janos Slynt]], e Daisy è presente quando Janos uccide la bambina di [[mhaegen|Mhaegen]], una dei bastardi di Robert, davanti alla madre.',
        en: 'Daisy is new to [[petyr-baelish|Littlefinger]]’s brothel, and [[ros|Ros]] shows her round, telling her they cater to a better class of client than she knew at Haystack Hall. Daisy is impressed by the place. Then the gold cloaks of [[janos-slynt|Janos Slynt]] burst in, and Daisy is there when Janos kills the baby of [[mhaegen|Mhaegen]], one of Robert’s bastards, in front of her mother.',
      },
    ),
    onScreen(
      [13, 99],
      { it: 'Nel letto di Pycelle', en: 'In Pycelle’s bed' },
      {
        it: 'Daisy è a letto con [[pycelle|Pycelle]] quando [[tyrion-lannister|Tyrion]], [[bronn|Bronn]] e [[timett|Timmet]] irrompono per arrestare il gran maestro, che fa la spia per la regina. Tyrion le dà una moneta per il disturbo, e poi un’altra dopo aver visto quanto si dimena quel vecchio che sembrava tanto fragile.',
        en: 'Daisy is in bed with [[pycelle|Pycelle]] when [[tyrion-lannister|Tyrion]], [[bronn|Bronn]] and [[timett|Timett]] burst in to arrest the Grand Maester for spying for the queen. Tyrion gives her a coin for her trouble, and then another after seeing how hard the supposedly frail old man struggles.',
      },
    ),
    onScreen(
      [14, 103],
      { it: 'Mandata dal re', en: 'Sent to the king' },
      {
        it: '[[tyrion-lannister|Tyrion]] ingaggia Daisy e [[ros|Ros]] come dono tardivo per il giorno del nome di [[joffrey-baratheon|Joffrey]]. Il re non le tocca. Costringe Ros a colpire Daisy, prima con la sua cintura e poi con uno scettro a testa di cervo, tanto forte da farla urlare, puntando una balestra contro Ros, e le ordina di portare Daisy da Tyrion per mostrargli che cosa ha fatto.',
        en: '[[tyrion-lannister|Tyrion]] hires Daisy and [[ros|Ros]] as a late name-day gift for [[joffrey-baratheon|Joffrey]]. The king does not touch them. He makes Ros hit Daisy, first with his belt and then with a stag’s-head sceptre, hard enough to make her scream, a crossbow aimed at Ros, and orders Ros to take her to Tyrion to show him what he has done.',
      },
    ),
  ],
  'jacelyn-bywater': [
    inBooks(
      [12, 82],
      { it: 'Il nuovo comandante', en: 'The new commander' },
      {
        it: '[[tyrion-lannister|Tyrion]] nomina ser Jacelyn Bywater comandante della Guardia cittadina: un cavaliere stimato che [[janos-slynt|Janos Slynt]] definisce rigido e troppo fiero del suo onore. Jacelyn incontra Janos sulla porta mentre le cappe dorate lo portano via verso la Barriera, e Tyrion gli consegna la lista dei candidati di Janos, perché partano con lui. [[varys|Varys]] ha garantito per Jacelyn come per un uomo che la Guardia cittadina seguirà.',
        en: '[[tyrion-lannister|Tyrion]] names Ser Jacelyn Bywater commander of the City Watch: a distinguished knight whom [[janos-slynt|Janos Slynt]] calls rigid and too proud of his honour. Jacelyn meets Janos at the door as the gold cloaks lead him away to the Wall, and Tyrion hands him the list of Janos’s candidates, to go with him. [[varys|Varys]] has spoken for Jacelyn as a man the City Watch will follow.',
      },
    ),
    inBooks(
      [15, 94],
      { it: 'Condizioni di pace alla porta', en: 'Peace terms at the gate' },
      {
        it: 'Jacelyn manda a chiamare [[tyrion-lannister|Tyrion]] quando [[cleos-frey|ser Cleos Frey]] arriva alla Porta degli Dèi con le condizioni di pace di Robb Stark. Tyrion gli dice di offrire a Cleos ogni ospitalità ma di tenerlo fuori dalla città, perché non veda come stanno le cose. Jacelyn dovrà anche addestrare delle squadre a maneggiare l’altofuoco che gli alchimisti consegneranno, usando vernice e olio in fiamme, anche se quella roba non gli piace affatto.',
        en: 'Jacelyn sends for [[tyrion-lannister|Tyrion]] when [[cleos-frey|Ser Cleos Frey]] arrives at the Gate of the Gods with peace terms from Robb Stark. Tyrion tells him to give Cleos every hospitality but keep him outside the city, so that he does not see how things stand there. Jacelyn is also to train crews to handle the wildfire the alchemists will deliver, using paint and burning oil, though he has no love for the stuff.',
      },
    ),
    inBooks(
      [18, 123],
      { it: 'Tommen a Rosby', en: 'Tommen at Rosby' },
      {
        it: 'Per ordine di [[tyrion-lannister|Tyrion]] gli uomini di Jacelyn raggiungono il gruppo che porta [[tommen-baratheon|Tommen]] a nascondersi a Rosby. Ser Boros Blount consegna subito il principe e per questo perde il mantello bianco. Jacelyn torna con dei lancieri delle terre di Rosby: Tommen è al sicuro e ha adottato un cerbiatto. Jacelyn ha preparato dei piani per lui nel caso la battaglia sia perduta, ma non li rivela nemmeno a Tyrion, per il caso che venga catturato.',
        en: 'On [[tyrion-lannister|Tyrion]]’s orders Jacelyn’s men overtake the party taking [[tommen-baratheon|Tommen]] to hide at Rosby. Ser Boros Blount gives the prince up at once and loses his white cloak for it. Jacelyn returns with spearmen from the Rosby lands: Tommen is safe and has adopted a fawn. Jacelyn has made plans for him in case the battle is lost, but will not tell even Tyrion, in case he is captured.',
      },
    ),
    inBooks(
      [14, 103],
      { it: 'Contro la regina', en: 'Defying the queen' },
      {
        it: 'Jacelyn disobbedisce a un ordine dato in nome del re, che [[tyrion-lannister|Tyrion]] ritiene l’ordine della regina di liberare [[pycelle|Pycelle]]. [[lancel-lannister|Ser Lancel]] porta la richiesta di Cersei che Jacelyn sia rimosso e accusato di tradimento. Tyrion lo tiene al suo posto, e fa dire alla regina da Lancel, ormai sua spia, che crede di poter staccare Jacelyn da Tyrion.',
        en: 'Jacelyn defies a command given in the king’s name, which [[tyrion-lannister|Tyrion]] takes to be the queen’s order to free [[pycelle|Pycelle]]. [[lancel-lannister|Ser Lancel]] brings Cersei’s demand that Jacelyn be removed and charged with treason. Tyrion keeps him, and has Lancel, now his spy, tell the queen that he thinks he can win Jacelyn away from Tyrion.',
      },
    ),
    inBooks(
      [19, 133],
      { it: 'Lord Jacelyn', en: 'Lord Jacelyn' },
      {
        it: 'Durante la battaglia Jacelyn, ora lord Jacelyn come [[tyrion-lannister|Tyrion]] aveva promesso, ha avvertito che i difensori potrebbero cedere quando l’esercito di [[stannis-baratheon|Stannis]] attaccherà di nuovo. Mentre l’altofuoco brucia sulle Acque Nere e i soldati nemici sbarcano a fatica tra i moli carbonizzati, Tyrion gli manda l’ordine di guidare un’altra sortita contro di loro.',
        en: 'During the battle Jacelyn, now Lord Jacelyn as [[tyrion-lannister|Tyrion]] promised, has warned that the defenders may break once [[stannis-baratheon|Stannis]]’s host attacks again. While the wildfire burns on the Blackwater and enemy soldiers stumble ashore among the charred wharves, Tyrion sends him orders to lead another sortie against them.',
      },
    ),
  ],
  'hallyne': [
    inBooks(
      [15, 94],
      { it: 'Altofuoco nelle cantine', en: 'Wildfire in the vaults' },
      {
        it: 'Il saggio Hallyne della Gilda degli alchimisti mostra a [[tyrion-lannister|Tyrion]] l’altofuoco custodito nelle cantine della gilda. Una volta acceso non si può spegnere, e le vecchie giare dei tempi di re Aerys diventano più pericolose con gli anni. La gilda ha quasi ottomila giare e arriverà alle diecimila promesse. Hallyne spera di ospitare [[joffrey-baratheon|Joffrey]] a un banchetto; Tyrion lo rimanda, ma concede una dimostrazione dei segreti della gilda alla Fortezza Rossa.',
        en: 'Wisdom Hallyne of the Alchemists’ Guild shows [[tyrion-lannister|Tyrion]] the wildfire stored in the guild’s vaults. Once lit, it cannot be quenched, and the old jars from King Aerys’s day grow more dangerous with age. The guild has nearly eight thousand jars and will reach the ten thousand it promised. Hallyne hopes to host a feast for [[joffrey-baratheon|Joffrey]]; Tyrion puts it off, but allows a show of the guild’s secrets at the Red Keep.',
      },
    ),
    inBooks(
      [18, 123],
      { it: 'Tredicimila giare', en: 'Thirteen thousand jars' },
      {
        it: 'Hallyne dice a [[tyrion-lannister|Tyrion]] che la gilda ha tredicimila giare di altofuoco, molto prima del previsto. I loro incantesimi sono diventati più potenti di recente, dice, e non sa spiegarsi perché. Chiede se ci siano dei draghi in giro, ricordando una cosa sentita tanto tempo fa: che la magia cominciò a sparire dal mondo quando morì l’ultimo drago.',
        en: 'Hallyne tells [[tyrion-lannister|Tyrion]] that the guild has thirteen thousand jars of wildfire, far ahead of schedule. Their spells have grown more potent of late, he says, and he cannot explain why. He asks whether there are any dragons about, recalling something he heard long ago: that magic began to leave the world when the last dragon died.',
      },
    ),
    inBooks(
      [20, 139],
      { it: 'Un lord senza terre', en: 'A lord without lands' },
      {
        it: 'Dopo la battaglia in cui l’altofuoco della gilda ha bruciato la flotta di [[stannis-baratheon|Stannis]] sulle Acque Nere, [[joffrey-baratheon|Joffrey]] ricompensa i vincitori nella sala del trono. Vengono onorati i capitani sopravvissuti, e Hallyne il Piromante è nominato lord, anche se non riceve terre. [[tyrion-lannister|Tyrion]], il cui piano ha usato l’altofuoco, è gravemente ferito e non è presente.',
        en: 'After the battle in which the guild’s wildfire burned [[stannis-baratheon|Stannis]]’s fleet on the Blackwater, [[joffrey-baratheon|Joffrey]] rewards the victors in the throne room. The surviving ship captains are honoured, and Hallyne the Pyromancer is named a lord, though he is given no lands. [[tyrion-lannister|Tyrion]], whose plan used the wildfire, lies gravely wounded and is not there.',
      },
    ),
  ],
  'lollys-stokeworth': [
    inBooks(
      [13, 118],
      { it: 'Una cameriera per Lollys', en: 'A maid for Lollys' },
      {
        it: 'Lollys Stokeworth, la figlia minore di lady Tanda, molle e tarda di mente, è stata stuprata da uomini della folla durante la rivolta e trovata viva davanti alla bottega di un conciatore. Sua madre vorrebbe [[tyrion-lannister|Tyrion]] come marito per lei e continua a invitarlo a cena; lui si scusa e declina. Ora [[varys|Varys]] propone [[shae|Shae]], il segreto di Tyrion, come cameriera della casa di Lollys, da dove un passaggio segreto porta alla Torre del Primo Cavaliere.',
        en: 'Lollys Stokeworth, Lady Tanda’s soft, dim-witted younger daughter, was raped by men of the mob in the riot and found alive outside a tanner’s shop. Her mother wants [[tyrion-lannister|Tyrion]] as a husband for her and keeps inviting him to supper; he sends his regrets. Now [[varys|Varys]] proposes [[shae|Shae]], Tyrion’s secret, as a maid in Lollys’s household, where a secret passage leads to the Tower of the Hand.',
      },
    ),
    inBooks(
      [19, 131],
      { it: 'Nella fortezza', en: 'Into the holdfast' },
      {
        it: 'Mentre comincia la battaglia, [[sansa-stark|Sansa]] aiuta lady Tanda e [[shae|Shae]] a portare Lollys nella Fortezza di Maegor, dove quasi tutte le nobildonne della città si riuniscono con [[cersei-lannister|Cersei]] nella sala da ballo della regina. C’è anche [[ilyn-payne|ser Ilyn Payne]], per occuparsi dei traditori e, dice la regina, per difenderle se la città cadrà.',
        en: 'As the battle begins, [[sansa-stark|Sansa]] helps Lady Tanda and [[shae|Shae]] guide Lollys into Maegor’s Holdfast, where almost every highborn woman in the city gathers with [[cersei-lannister|Cersei]] in the Queen’s Ballroom. [[ilyn-payne|Ser Ilyn Payne]] is there too, to deal with traitors and, the queen says, to defend them if the city falls.',
      },
    ),
  ],
  'osmund-kettleblack': [
    inBooks(
      [18, 123],
      { it: 'Il mantello bianco', en: 'The white cloak' },
      {
        it: '[[cersei-lannister|Cersei]] nomina nella Guardia reale ser Osmund Kettleblack, un cavaliere errante, al posto di ser Boros Blount, e [[joffrey-baratheon|Joffrey]] gli consegna il mantello bianco nel tempio reale, insieme a [[balon-swann|ser Balon Swann]]. [[tyrion-lannister|Tyrion]] non approva. Ha saputo da [[lancel-lannister|Lancel]] che la regina paga Osmund e i suoi fratelli per formarsi un esercito di mercenari, e [[bronn|Bronn]] ha pareggiato ogni moneta che lei dà loro.',
        en: '[[cersei-lannister|Cersei]] names Ser Osmund Kettleblack, a hedge knight, to the Kingsguard in place of Ser Boros Blount, and [[joffrey-baratheon|Joffrey]] gives him his white cloak in the royal sept, alongside [[balon-swann|Ser Balon Swann]]. [[tyrion-lannister|Tyrion]] does not approve. He has learned from [[lancel-lannister|Lancel]] that the queen pays Osmund and his brothers to raise her own sellswords, and [[bronn|Bronn]] has been matching every copper she gives them.',
      },
    ),
    inBooks(
      [19, 133],
      { it: 'Di guardia al re', en: 'Guarding the king' },
      {
        it: 'Durante la battaglia, mentre [[joffrey-baratheon|Joffrey]] va a far lanciare i traditori oltre le mura con le catapulte, [[tyrion-lannister|Tyrion]] ordina a ser Osmund di tenere il re al sicuro a ogni costo, ma di tenerlo tra i difensori. Tyrion si chiede se [[cersei-lannister|Cersei]] proteggerà [[alayaya|Alayaya]] come lui protegge il figlio di lei.',
        en: 'During the battle, as [[joffrey-baratheon|Joffrey]] goes off to have the traitors catapulted over the walls, [[tyrion-lannister|Tyrion]] orders Ser Osmund to keep the king safe at all costs, but to keep him among the defenders. Tyrion wonders whether [[cersei-lannister|Cersei]] will protect [[alayaya|Alayaya]] as well as he protects her son.',
      },
    ),
    inBooks(
      [20, 139],
      { it: 'Nuovi cavalieri', en: 'Knighting the victors' },
      {
        it: 'Alla cerimonia che premia i vincitori delle Acque Nere, ser Osmund è uno dei tre cavalieri della Guardia reale che, con [[balon-swann|ser Balon Swann]] e [[meryn-trant|ser Meryn Trant]], creano più di seicento nuovi cavalieri. Lo stesso giorno [[loras-tyrell|ser Loras Tyrell]] entra nella Guardia reale, e [[joffrey-baratheon|Joffrey]] sposerà [[margaery-tyrell|Margaery Tyrell]] invece di Sansa.',
        en: 'At the court that rewards the victors of the Blackwater, Ser Osmund is one of the three knights of the Kingsguard, with [[balon-swann|Ser Balon Swann]] and [[meryn-trant|Ser Meryn Trant]], who make more than six hundred new knights. The same day [[loras-tyrell|Ser Loras Tyrell]] is named to the Kingsguard, and [[joffrey-baratheon|Joffrey]] is to wed [[margaery-tyrell|Margaery Tyrell]] instead of Sansa.',
      },
    ),
  ],
  'alayaya': [
    inBooks(
      [18, 128],
      { it: 'La figlia di Chataya', en: 'Chataya’s daughter' },
      {
        it: 'Alayaya, la figlia di Chataya, accompagna [[tyrion-lannister|Tyrion]] nella stanza della torretta del bordello della madre, dove un cunicolo nascosto gli permette di sgattaiolare da [[shae|Shae]]; intanto Alayaya dorme nella stanza della torretta fino al suo ritorno. Credendola l’amante di Tyrion, [[cersei-lannister|Cersei]] la fa prendere e picchiare, e la fa portare davanti a lui dai fratelli di [[osmund-kettleblack|ser Osmund]]. Alayaya non lo tradisce. La regina dice che alla ragazza non sarà fatto del male finché [[joffrey-baratheon|Joffrey]] e [[tommen-baratheon|Tommen]] saranno al sicuro.',
        en: 'Alayaya, Chataya’s daughter, leads [[tyrion-lannister|Tyrion]] to the turret room of her mother’s brothel, where a hidden shaft lets him slip away to [[shae|Shae]]; Alayaya sleeps in the turret room until he returns. Taking her for Tyrion’s lover, [[cersei-lannister|Cersei]] has her seized and beaten, and has [[osmund-kettleblack|Ser Osmund]]’s brothers bring her before him. Alayaya does not give him away. The queen says the girl will be unharmed as long as [[joffrey-baratheon|Joffrey]] and [[tommen-baratheon|Tommen]] are safe.',
      },
    ),
  ],
  'garlan-tyrell': [
    inBooks(
      [20, 139],
      { it: 'Le nozze di Margaery', en: 'A match for Margaery' },
      {
        it: 'Ser Garlan Tyrell, uno degli eroi delle Acque Nere, viene presentato a [[joffrey-baratheon|Joffrey]] nella sala del trono con il padre, lord Mace Tyrell, e il fratello [[loras-tyrell|ser Loras]]. Loras entra nella Guardia reale e il padre nel Concilio ristretto. Garlan chiede al re di sposare la sorella [[margaery-tyrell|Margaery]]. L’Alto Septon dichiara nullo il fidanzamento del re con [[sansa-stark|Sansa Stark]], per la ribellione di Casa Stark.',
        en: 'Ser Garlan Tyrell, one of the heroes of the Blackwater, is presented to [[joffrey-baratheon|Joffrey]] in the throne room with his father, Lord Mace Tyrell, and his brother [[loras-tyrell|Ser Loras]]. Loras is named to the Kingsguard and their father joins the small council. Garlan asks the king to wed his sister [[margaery-tyrell|Margaery]]. The High Septon declares the king’s betrothal to [[sansa-stark|Sansa Stark]] void, because of House Stark’s rebellion.',
      },
    ),
  ],
} satisfies Record<string, Timeline<Story>>
