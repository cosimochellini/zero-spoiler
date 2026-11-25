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
 * The Stannis, Renly and stormlands cast (#1485) follows, on the same rules.
 * Selyse, Shireen and Mace reach the show only after episode 20, so their
 * stories are the books’, at their show gates; Cortnay is the books’ alone.
 * Matthos opens in the books at chapter 132, so his show stories sit there.
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
  // Stannis, Renly and the stormlands (#1485).
  'stannis-baratheon': [
    inBooks(
      [11, 74],
      { it: 'Un re con pochi alleati', en: 'A king with few allies' },
      {
        it: 'Stannis si è proclamato re a Roccia del Drago, ma [[davos-seaworth|Davos]] torna con la notizia che i lord delle Terre della Tempesta sono passati con [[renly-baratheon|Renly]]. Stannis chiama Renly un ragazzo ladro. Il maestro [[cressen|Cressen]] gli propone un’alleanza con [[robb-stark|Robb Stark]], e Stannis rifiuta di regnare su metà regno. Accetta invece di mandare la figlia Shireen da [[lysa-arryn|Lysa Arryn]] per un fidanzamento. Arriva la regina Selyse: dice che non deve mendicare aiuto, e che se Renly morisse il suo esercito passerebbe con lui. [[melisandre|Melisandre]] ha visto Renly morto nelle fiamme. Stannis congeda Cressen. Al banchetto affida i suoi compiti a un altro maestro, e Cressen muore per il veleno destinato a Melisandre.',
        en: 'Stannis has declared himself king on Dragonstone, but [[davos-seaworth|Davos]] comes back with word that the storm lords have gone over to [[renly-baratheon|Renly]]. Stannis calls Renly a thieving boy. Maester [[cressen|Cressen]] suggests an alliance with [[robb-stark|Robb Stark]], and Stannis refuses to rule half a kingdom. He does agree to send his daughter Shireen to [[lysa-arryn|Lysa Arryn]] for a betrothal. Queen Selyse arrives: he should not have to beg for help, she says, and if Renly died his army would come over to him. [[melisandre|Melisandre]] has seen Renly dead in the flames. Stannis sends Cressen away. At the feast he gives his duties to another maester, and Cressen dies of the poison meant for Melisandre.',
      },
    ),
    onScreen(
      [11, 84],
      { it: 'La spada nel fuoco', en: 'The sword in the fire' },
      {
        it: 'Stannis si è convertito al Signore della Luce e lascia che [[melisandre|Melisandre]] bruci le statue dei Sette sulla spiaggia di Roccia del Drago. Quando [[cressen|Cressen]] la interrompe, lei lo zittisce. Stannis estrae una spada fiammeggiante dalla statua della Madre, e lei lo proclama l’eroe della profezia. Al consiglio fa leggere una lettera in cui dichiara che [[joffrey-baratheon|Joffrey]] è nato dall’incesto tra [[cersei-lannister|Cersei]] e [[jaime-lannister|Jaime]], e che il trono spetta a lui. [[davos-seaworth|Davos]] lo esorta ad allearsi con [[renly-baratheon|Renly]] o con [[robb-stark|Robb Stark]], ma Stannis li chiama entrambi ladri. Cressen muore per il veleno che aveva preparato per Melisandre.',
        en: 'Stannis has converted to the Lord of Light and lets [[melisandre|Melisandre]] burn the statues of the Seven on the beach of Dragonstone. When [[cressen|Cressen]] interrupts her, she dismisses him. Stannis draws a flaming sword from the statue of the Mother, and she proclaims him the hero of the prophecy. At his council he has a letter read declaring that [[joffrey-baratheon|Joffrey]] was born of incest between [[cersei-lannister|Cersei]] and [[jaime-lannister|Jaime]], and that the throne is his. [[davos-seaworth|Davos]] urges him to ally with [[renly-baratheon|Renly]] or [[robb-stark|Robb Stark]], but Stannis calls them both thieves. Cressen dies of the poison he meant for Melisandre.',
      },
    ),
    onScreen(
      [12, 84],
      { it: 'La promessa di un figlio', en: 'The promise of a son' },
      {
        it: '[[davos-seaworth|Davos]] riferisce di aver convinto il pirata [[salladhor-saan|Salladhor Saan]] a unirsi a loro. Stannis dubita dei pirati, ma promette a Salladhor la sua parte se farà il suo lavoro. Rimasto solo con [[melisandre|Melisandre]], le dice che Renly ha centomila uomini e che senza di loro non può prendere Approdo del Re. Lei dice di aver visto nelle fiamme la via della vittoria e che lui deve darsi tutto. Stannis le ricorda il voto fatto alla moglie. Melisandre risponde che la moglie gli ha dato solo figli nati morti, e gli promette un figlio. Lui la prende sulla Tavola dipinta.',
        en: '[[davos-seaworth|Davos]] reports that he has won over the pirate [[salladhor-saan|Salladhor Saan]]. Stannis doubts pirates, but promises Salladhor his share if he does the job. Alone with [[melisandre|Melisandre]], he tells her that Renly has a hundred thousand men and that without them he cannot take King’s Landing. She says she has seen the path to victory in the flames and that he must give all of himself. Stannis reminds her of his vow to his wife. Melisandre answers that his wife has given him only stillborn sons, and promises him a son. He takes her on the Painted Table.',
      },
    ),
    onScreen(
      [14, 116],
      { it: 'Fino all’alba', en: 'Until dawn' },
      {
        it: 'Sulla costa delle Terre della Tempesta Stannis incontra il fratello [[renly-baratheon|Renly]], venuto con [[catelyn-stark|Catelyn Stark]], [[brienne-of-tarth|Brienne]] e [[loras-tyrell|Loras Tyrell]]. Renly lo deride e gli ricorda che nessuno lo vuole come re. Per amore della loro madre, Stannis gli dà la notte per ripensarci: se ammaina i suoi stendardi prima dell’alba gli restituirà il seggio nel Concilio ristretto e lo nominerà suo erede finché non avrà un figlio. Altrimenti lo distruggerà. Poi ordina a [[davos-seaworth|Davos]] di portare di nascosto [[melisandre|Melisandre]] nelle grotte sotto l’accampamento di Renly, senza dirgli perché e senza che ne parli mai più.',
        en: 'On the coast of the stormlands Stannis meets his brother [[renly-baratheon|Renly]], who comes with [[catelyn-stark|Catelyn Stark]], [[brienne-of-tarth|Brienne]] and [[loras-tyrell|Loras Tyrell]]. Renly mocks him and reminds him that nobody wants him as king. For their mother’s sake, Stannis gives him the night to reconsider: if he strikes his banners before dawn, Stannis will restore his seat on the small council and name him heir until he has a son. Otherwise he will destroy him. Then he orders [[davos-seaworth|Davos]] to smuggle [[melisandre|Melisandre]] into the caves beneath Renly’s camp, without telling him why and without ever speaking of it again.',
      },
    ),
    onScreen(
      [15, 116],
      { it: 'Il comando della flotta', en: 'Command of the fleet' },
      {
        it: '[[renly-baratheon|Renly]] è stato ucciso nella sua tenda, e gran parte del suo esercito giura fedeltà a Stannis. I Tyrell invece tornano a casa con i loro vassalli. Stannis prepara l’attacco ad Approdo del Re. [[davos-seaworth|Davos]] gli chiede di lasciare fuori dalla battaglia [[melisandre|Melisandre]], perché si dice che sia lei a comandarlo. Stannis si infuria perché Davos ha parlato di ciò che gli aveva ordinato di tacere, ma accetta il consiglio e gli affida il comando della flotta. Rimasto solo nella tenda, trattiene a stento le lacrime.',
        en: '[[renly-baratheon|Renly]] has been killed in his tent, and most of his army swears fealty to Stannis. The Tyrells, however, go home with their bannermen. Stannis prepares his attack on King’s Landing. [[davos-seaworth|Davos]] asks him to keep [[melisandre|Melisandre]] out of the battle, because men say she is the one in command. Stannis is angry that Davos has spoken of what he was ordered to keep silent, but takes his advice and gives him command of the fleet. Alone in his tent, he barely holds back his tears.',
      },
    ),
    onScreen(
      [18, 128],
      { it: 'Il Primo Cavaliere', en: 'The Hand' },
      {
        it: 'La flotta di Stannis risale la costa verso Approdo del Re, e [[davos-seaworth|Davos]] calcola che manca un giorno di navigazione. Stannis gli dice di ammirare la sua lealtà e il modo in cui sopporta il disprezzo dei nobili. Ricorda l’assedio di Capo Tempesta, quando la guarnigione mangiava topi e Davos forzò il blocco con una nave carica di cipolle e pesce. Poi gli annuncia che, una volta preso il trono, Davos sarà il suo Primo Cavaliere. Davos ne resta sorpreso.',
        en: 'Stannis’s fleet sails up the coast toward King’s Landing, and [[davos-seaworth|Davos]] reckons they are a day’s sail away. Stannis tells him he admires his loyalty and the way he bears the scorn of the highborn. He recalls the siege of Storm’s End, when the garrison was eating rats and Davos ran the blockade with a ship full of onions and fish. Then he tells him that once he takes the throne, Davos will be his Hand. Davos is taken by surprise.',
      },
    ),
    onScreen(
      [19, 135],
      { it: 'Sotto le mura', en: 'Under the walls' },
      {
        it: 'Davanti ad Approdo del Re l’altofuoco di [[tyrion-lannister|Tyrion]] distrugge molte navi di Stannis, compresa quella di [[davos-seaworth|Davos]]. Stannis ordina di sbarcare lo stesso, e quando un suo cavaliere gli dice che moriranno in centinaia, risponde che saranno migliaia. È il primo a toccare terra e il primo a salire sulle mura, e combatte senza elmo né scudo mentre i suoi uomini attaccano la Porta del Fiume con un ariete. Poi arrivano gli eserciti di [[tywin-lannister|Tywin Lannister]] e di [[loras-tyrell|Loras Tyrell]], e i suoi uomini fuggono. Stannis grida di restare a combattere, ma le sue guardie lo trascinano via.',
        en: 'Before King’s Landing, [[tyrion-lannister|Tyrion]]’s wildfire destroys many of Stannis’s ships, among them [[davos-seaworth|Davos]]’s. Stannis orders the landing anyway, and when one of his knights tells him hundreds will die, he answers that it will be thousands. He is the first ashore and the first onto the walls, fighting without helm or shield while his men batter the River Gate with a ram. Then the armies of [[tywin-lannister|Tywin Lannister]] and [[loras-tyrell|Loras Tyrell]] arrive, and his men run. Stannis shouts at them to stand and fight, but his guards drag him away.',
      },
    ),
    onScreen(
      [20, 139],
      { it: 'Le visioni nel fuoco', en: 'Visions in the fire' },
      {
        it: 'Stannis torna a Roccia del Drago con una parte minima del suo esercito e accusa [[melisandre|Melisandre]] di avergli promesso una vittoria che non è arrivata. Comincia a strangolarla, ma la lascia quando lei gli ricorda l’incantesimo con cui hanno ucciso [[renly-baratheon|Renly]]. Stannis si pente di aver ucciso il fratello. Melisandre gli dice che commetterà tradimenti peggiori prima della fine della guerra, ma che sarà re. Poi gli mostra una visione nelle fiamme, e lui torna a fidarsi di lei.',
        en: 'Stannis returns to Dragonstone with a fraction of his army and accuses [[melisandre|Melisandre]] of promising him a victory that never came. He starts to strangle her, but lets go when she reminds him of the spell they used to kill [[renly-baratheon|Renly]]. Stannis regrets killing his brother. Melisandre tells him he will commit worse betrayals before the war is over, but that he will be king. Then she shows him a vision in the flames, and his faith in her returns.',
      },
    ),
    inBooks(
      [11, 84],
      { it: 'Un falco rosso', en: 'A red hawk' },
      {
        it: 'Davanti a Roccia del Drago [[melisandre|Melisandre]] brucia le statue dei Sette, e Stannis estrae una spada rovente dalla statua della Madre. Lei la chiama Portatrice di Luce e lo proclama Azor Ahai tornato. Stannis manda una lettera in tutto il regno: dichiara che [[joffrey-baratheon|Joffrey]], [[tommen-baratheon|Tommen]] e [[myrcella-baratheon|Myrcella]] sono nati dall’incesto tra [[cersei-lannister|Cersei]] e [[jaime-lannister|Jaime]], e rivendica il trono. Ordina a [[davos-seaworth|Davos]] di portarla verso nord. Davos gli consiglia di togliere dalla lettera il Signore della Luce. Stannis risponde che ha smesso di credere negli dei il giorno in cui vide affondare la nave dei suoi genitori, ma che Melisandre ha potere: i Sette non gli hanno mai dato nulla, ed è ora di provare un altro falco, un falco rosso.',
        en: 'Before Dragonstone [[melisandre|Melisandre]] burns the statues of the Seven, and Stannis draws a red-hot sword from the statue of the Mother. She names it Lightbringer and proclaims him Azor Ahai come again. Stannis sends a letter across the realm: it declares that [[joffrey-baratheon|Joffrey]], [[tommen-baratheon|Tommen]] and [[myrcella-baratheon|Myrcella]] were born of incest between [[cersei-lannister|Cersei]] and [[jaime-lannister|Jaime]], and claims the throne. He orders [[davos-seaworth|Davos]] to carry it north. Davos advises him to take the Lord of Light out of the letter. Stannis answers that he stopped believing in gods the day he saw his parents’ ship sink, but that Melisandre has power: the Seven never gave him anything, and it is time to try another hawk, a red one.',
      },
    ),
    inBooks(
      [14, 105],
      { it: 'Una pesca rifiutata', en: 'A peach refused' },
      {
        it: 'Stannis assedia Capo Tempesta e incontra il fratello [[renly-baratheon|Renly]] davanti al castello, con [[melisandre|Melisandre]] a portare il suo stendardo. A [[catelyn-stark|Catelyn Stark]] porge le condoglianze e promette giustizia, ma dice che anche [[robb-stark|Robb]], il figlio di lei, è un traditore. Renly gli chiede di inginocchiarsi, gli offre una pesca e poi Capo Tempesta, e Stannis rifiuta tutto. Quando Renly deride la moglie di Stannis, Stannis sguaina la spada, e [[brienne-of-tarth|Brienne]] si mette in mezzo. Stannis dà a Renly tempo fino all’alba: se si sottomette avrà Capo Tempesta, un seggio nel concilio e il ruolo di erede finché Stannis non avrà un figlio. Altrimenti lo distruggerà.',
        en: 'Stannis is besieging Storm’s End and meets his brother [[renly-baratheon|Renly]] before the castle, with [[melisandre|Melisandre]] bearing his standard. He offers [[catelyn-stark|Catelyn Stark]] his condolences and promises justice, but says her son [[robb-stark|Robb]] is a traitor too. Renly asks him to kneel, offers him a peach and then Storm’s End, and Stannis refuses it all. When Renly mocks Stannis’s wife, Stannis draws his sword, and [[brienne-of-tarth|Brienne]] steps between them. Stannis gives Renly until dawn: if he submits he will have Storm’s End, a council seat and the place of heir until Stannis has a son. Otherwise Stannis will destroy him.',
      },
    ),
    inBooks(
      [14, 116],
      { it: 'La pesca di Renly', en: 'Renly’s peach' },
      {
        it: '[[renly-baratheon|Renly]] è morto, e molti dei suoi lord sono passati con Stannis. Stannis sembra invecchiato, e dorme solo quando [[melisandre|Melisandre]], che ora divide il suo padiglione, lo calma. Al colloquio ser [[cortnay-penrose|Cortnay Penrose]] rifiuta di consegnare Capo Tempesta e il bastardo di Robert, e lo sfida a duello. Stannis rifiuta. Rimasto solo con [[davos-seaworth|Davos]], dice di sognare la morte di Renly, di avergli voluto bene, e che penserà alla sua pesca fino alla tomba. Non lascerà il castello alle sue spalle, e Melisandre ha visto nelle fiamme la morte di Cortnay. Ordina a Davos di portarla di notte in barca sotto Capo Tempesta.',
        en: '[[renly-baratheon|Renly]] is dead, and many of his lords have come over to Stannis. Stannis looks older, and sleeps only when [[melisandre|Melisandre]], who now shares his pavilion, soothes him. At the parley Ser [[cortnay-penrose|Cortnay Penrose]] refuses to yield Storm’s End and Robert’s bastard, and challenges him to single combat. Stannis refuses. Alone with [[davos-seaworth|Davos]], he says he dreams of Renly’s death, that he loved him, and that he will think of his peach until the grave. He will not leave the castle untaken behind him, and Melisandre has seen Cortnay’s death in her flames. He orders Davos to take her by boat beneath Storm’s End at night.',
      },
    ),
    inBooks(
      [19, 132],
      { it: 'La flotta sulle Acque Nere', en: 'The fleet on the Blackwater' },
      {
        it: 'La grande flotta di Stannis, al comando di ser Imry Florent, entra nella Baia delle Acque Nere. Stannis aspetta con il suo esercito sulla riva sud del fiume. Ha rimandato [[melisandre|Melisandre]] a Roccia del Drago perché temeva che il popolo avrebbe detto che era stata la strega a vincere. Le navi di Stannis risalgono il fiume e combattono quelle del re, finché una nave non sperona una chiatta carica di altofuoco. Il fiume diventa un incendio verde, e la nave di [[davos-seaworth|Davos]] brucia. Alle spalle della flotta, una grande catena si alza e chiude la foce.',
        en: 'Stannis’s great fleet, under the command of Ser Imry Florent, enters Blackwater Bay. Stannis waits with his host on the south bank of the river. He has sent [[melisandre|Melisandre]] back to Dragonstone, fearing the people would say the sorceress had won the battle. His ships fight their way up the river against the king’s, until one rams a barge full of wildfire. The river becomes a green blaze, and [[davos-seaworth|Davos]]’s ship burns. Behind the fleet, a great chain rises and closes the river’s mouth.',
      },
    ),
    inBooks(
      [19, 136],
      { it: 'La battaglia perduta', en: 'The lost battle' },
      {
        it: 'Mezza flotta di Stannis brucia nell’altofuoco. I suoi uomini sbarcano lo stesso e attaccano la Porta del Re, finché una sortita di [[tyrion-lannister|Tyrion]] non li respinge. Più tardi Tyrion vede una grande battaglia sulla riva sud, dove si trovano gli uomini di Stannis. All’alba [[dontos-hollard|Dontos]] porta a [[sansa-stark|Sansa]] la notizia: la battaglia è finita, e la città è stata salvata da lord [[tywin-lannister|Tywin]] e dai Tyrell. Si dice che a guidare l’avanguardia fosse il fantasma di [[renly-baratheon|Renly]].',
        en: 'Half of Stannis’s fleet burns in the wildfire. His men land anyway and attack the King’s Gate, until a sortie led by [[tyrion-lannister|Tyrion]] throws them back. Later Tyrion sees a great battle on the south bank, where Stannis’s men are. At dawn [[dontos-hollard|Dontos]] brings [[sansa-stark|Sansa]] the news: the battle is over, and the city has been saved by Lord [[tywin-lannister|Tywin]] and the Tyrells. Some say the vanguard was led by [[renly-baratheon|Renly]]’s ghost.',
      },
    ),
  ],
  'melisandre': [
    inBooks(
      [11, 74],
      { it: 'Una coppa per due', en: 'A cup for two' },
      {
        it: 'Al banchetto di Roccia del Drago il vecchio maestro [[cressen|Cressen]] cade, e Melisandre lo aiuta a rialzarsi. Gli dice di stare attento, perché la notte è oscura e piena di terrori, e gli mette in testa l’elmo con le corna del giullare. Siede alla destra di [[stannis-baratheon|Stannis]], al posto d’onore. Cressen le propone di brindare al potere del suo dio con una coppa in cui ha sciolto del veleno. Prima di bere, lei gli lascia la possibilità di tirarsi indietro, poi ne beve quasi tutto. Il rubino che porta alla gola si illumina, e Cressen muore soffocato mentre lei resta illesa.',
        en: 'At the feast on Dragonstone old Maester [[cressen|Cressen]] falls, and Melisandre helps him up. She tells him to mind his step, for the night is dark and full of terrors, and puts the fool’s antlered helm on his head. She sits at [[stannis-baratheon|Stannis]]’s right, in the place of honor. Cressen proposes that they drink to her god’s power from a cup in which he has dissolved poison. Before they drink she gives him the chance to turn back, then drinks most of it. The ruby at her throat glows, and Cressen chokes to death while she stays unharmed.',
      },
    ),
    onScreen(
      [11, 84],
      { it: 'Il rogo dei Sette', en: 'The burning of the Seven' },
      {
        it: 'Sulla spiaggia di Roccia del Drago Melisandre brucia le statue dei Sette in onore del Signore della Luce. Annuncia che dopo la lunga estate calerà il buio, e che i morti si leveranno al nord. Il maestro [[cressen|Cressen]] la interrompe, e lei lo liquida come un vecchio spaventato. Chiama avanti [[stannis-baratheon|Stannis]], che estrae una spada fiammeggiante dalla statua della Madre. Al consiglio dice che a Stannis non servono i lord, perché il Signore della Luce è con lui. Cressen le offre una coppa di vino avvelenato, e lei capisce. Beve lo stesso, e guarda Cressen morire mentre il rubino che porta al collo si illumina.',
        en: 'On the beach of Dragonstone Melisandre burns the statues of the Seven in honor of the Lord of Light. She foretells that darkness will fall after the long summer, and that the dead will rise in the north. Maester [[cressen|Cressen]] interrupts her, and she dismisses him as a frightened old man. She calls [[stannis-baratheon|Stannis]] forward, and he draws a flaming sword from the statue of the Mother. At the council she says Stannis has no need of lords, since the Lord of Light stands behind him. Cressen offers her a cup of poisoned wine, and she understands. She drinks anyway, and watches Cressen die as the ruby at her throat glows.',
      },
    ),
    onScreen(
      [12, 84],
      { it: 'La morte nel fuoco', en: 'Death by fire' },
      {
        it: 'Melisandre ferma Matthos, il figlio di [[davos-seaworth|Davos]], e gli sussurra qualcosa all’orecchio. Poi dice a [[stannis-baratheon|Stannis]] di aver detto a Matthos che la morte nel fuoco è la più pura. Stannis dice che senza i centomila uomini di Renly non può prendere Approdo del Re. Melisandre risponde di aver visto nelle fiamme la via della vittoria, e che lui deve darsi tutto. Gli dice che la moglie lo disgusta e gli ha dato solo figli nati morti, e gli promette un figlio. Lui la prende sulla Tavola dipinta.',
        en: 'Melisandre stops Matthos, [[davos-seaworth|Davos]]’s son, and whispers something in his ear. Then she tells [[stannis-baratheon|Stannis]] that she told Matthos death by fire is the purest death. Stannis says that without Renly’s hundred thousand men he cannot take King’s Landing. Melisandre answers that she has seen the path to victory in the flames, and that he must give all of himself. She tells him his wife disgusts him and has given him only stillborn sons, and promises him a son. He takes her on the Painted Table.',
      },
    ),
    onScreen(
      [14, 116],
      { it: 'L’ombra nella grotta', en: 'The shadow in the cave' },
      {
        it: 'Al colloquio tra [[stannis-baratheon|Stannis]] e [[renly-baratheon|Renly]], Melisandre spiega che il cuore fiammeggiante sullo stendardo è quello del Signore della Luce, e ordina a Renly di inginocchiarsi. Prima di andarsene gli dice di pensare ai suoi peccati, perché la notte è oscura e piena di terrori. Quella notte [[davos-seaworth|Davos]] la porta in barca in una grotta sotto l’accampamento di Renly. Lei gli dice di essere una paladina della luce e della vita, e che le ombre sono serve della luce. Davanti a un cancello sbarrato si apre la veste: è incinta. Si stende e partorisce un’ombra, che passa tra le sbarre.',
        en: 'At the parley between [[stannis-baratheon|Stannis]] and [[renly-baratheon|Renly]], Melisandre explains that the fiery heart on the banner is the Lord of Light’s, and tells Renly to kneel. Before leaving she tells him to look to his sins, for the night is dark and full of terrors. That night [[davos-seaworth|Davos]] rows her to a cave beneath Renly’s camp. She tells him she is a champion of light and life, and that shadows are servants of the light. Before a barred gate she opens her robe: she is with child. She lies down and gives birth to a shadow, which slips between the bars.',
      },
    ),
    onScreen(
      [20, 139],
      { it: 'La fede di Stannis', en: 'Stannis’s faith' },
      {
        it: 'Dopo la sconfitta, [[stannis-baratheon|Stannis]] torna a Roccia del Drago e accusa Melisandre di avergli promesso una vittoria che non è arrivata. Comincia a strangolarla, ma lei gli ricorda l’incantesimo con cui hanno ucciso il fratello [[renly-baratheon|Renly]], e lui la lascia. Melisandre gli dice che commetterà tradimenti peggiori prima della fine della guerra, ma che deve continuare a combattere, perché sarà re. Poi gli mostra una visione nelle fiamme, e Stannis torna a fidarsi di lei.',
        en: 'After his defeat, [[stannis-baratheon|Stannis]] returns to Dragonstone and accuses Melisandre of promising him a victory that never came. He starts to strangle her, but she reminds him of the spell they used to kill his brother [[renly-baratheon|Renly]], and he lets go. Melisandre tells him he will commit worse betrayals before the war is over, but that he must fight on, because he will be king. Then she shows him a vision in the flames, and Stannis trusts her again.',
      },
    ),
    inBooks(
      [11, 84],
      { it: 'Azor Ahai', en: 'Azor Ahai' },
      {
        it: 'Davanti alle porte di Roccia del Drago Melisandre brucia le statue dei Sette e prega il Signore della Luce in tre lingue. Racconta la profezia: alla fine di una lunga estate Azor Ahai rinascerà e trarrà dal fuoco la spada ardente Portatrice di Luce. Poi lo chiama, e [[stannis-baratheon|Stannis]] estrae una spada rovente dalla statua della Madre. Melisandre lo proclama Azor Ahai tornato. Più tardi Stannis dice a [[davos-seaworth|Davos]] che metà dei suoi uomini ha paura perfino di pronunciare il nome di lei, e che vuole scoprire quanto altro sappia fare.',
        en: 'Before the gates of Dragonstone Melisandre burns the statues of the Seven and prays to the Lord of Light in three tongues. She tells the prophecy: at the end of a long summer Azor Ahai will be reborn and draw the burning sword Lightbringer from the fire. Then she calls on him, and [[stannis-baratheon|Stannis]] draws a red-hot sword from the statue of the Mother. Melisandre proclaims him Azor Ahai come again. Later Stannis tells [[davos-seaworth|Davos]] that half his men are afraid even to speak her name, and that he means to find out what more she can do.',
      },
    ),
    inBooks(
      [14, 105],
      { it: 'Lo stendardo del re', en: 'The king’s standard' },
      {
        it: 'Davanti a Capo Tempesta, Melisandre porta lo stendardo di [[stannis-baratheon|Stannis]] al colloquio con il fratello [[renly-baratheon|Renly]]. Quando Renly chiede che emblema sia, lei risponde che è il cuore fiammeggiante del Signore della Luce. Renly dice che è meglio così: con lo stesso stendardo, in battaglia ci sarebbe confusione. Il colloquio finisce male, e Stannis dà al fratello tempo fino all’alba per sottomettersi. [[catelyn-stark|Catelyn Stark]] assiste, venuta a cercare la pace tra i fratelli.',
        en: 'Before Storm’s End, Melisandre bears [[stannis-baratheon|Stannis]]’s standard to the parley with his brother [[renly-baratheon|Renly]]. When Renly asks what the sigil is, she answers that it is the fiery heart of the Lord of Light. Renly says that is just as well: with the same banner, a battle would be confusing. The parley goes badly, and Stannis gives his brother until dawn to submit. [[catelyn-stark|Catelyn Stark]] looks on, having come to make peace between the brothers.',
      },
    ),
    inBooks(
      [14, 116],
      { it: 'Sotto Capo Tempesta', en: 'Beneath Storm’s End' },
      {
        it: 'Melisandre divide il padiglione di [[stannis-baratheon|Stannis]], ed è l’unica che riesce a calmarlo quando ha gli incubi. Di notte [[davos-seaworth|Davos]] la porta in barca sotto Capo Tempesta. Davos le chiede se è buona o malvagia, e lei risponde che è buona, una paladina della luce e della vita. Lui la chiama bugiarda: ha ucciso [[cressen|Cressen]] e [[renly-baratheon|Renly]]. Lei dice che Cressen si è avvelenato da solo, e che le mura del castello sono protette da incantesimi che nessuna ombra può superare da fuori. In una caverna sotto le mura si spoglia, ormai incinta, e partorisce un’ombra che scivola tra le sbarre di una saracinesca.',
        en: 'Melisandre shares [[stannis-baratheon|Stannis]]’s pavilion, and she alone can soothe him when he has nightmares. At night [[davos-seaworth|Davos]] takes her by boat beneath Storm’s End. Davos asks whether she is good or evil, and she answers that she is good, a champion of light and life. He calls her a liar: she killed [[cressen|Cressen]] and [[renly-baratheon|Renly]]. She says Cressen poisoned himself, and that the castle walls are woven with spells no shadow can pass from outside. In a cavern beneath the walls she disrobes, now with child, and gives birth to a shadow that slips between the bars of a portcullis.',
      },
    ),
  ],
  'davos-seaworth': [
    inBooks(
      [11, 74],
      { it: 'Il ritorno dell’inviato', en: 'The envoy’s return' },
      {
        it: 'Davos torna di notte a Roccia del Drago: i lord delle Terre della Tempesta non vogliono [[stannis-baratheon|Stannis]] e sono passati con [[renly-baratheon|Renly]]. Sulle scale incontra il maestro [[cressen|Cressen]], che ricorda come Davos, da contrabbandiere, portò cipolle e pesce salato alla guarnigione affamata di Stannis durante un assedio. Stannis lo fece cavaliere e gli accorciò le dita di una mano. Al banchetto è l’unico a offrire un posto a Cressen, e dice che stanno facendo una follia, perché [[melisandre|Melisandre]] ha visto la vittoria nelle sue fiamme. Cressen lascia cadere il veleno proprio nella coppa di Davos. Davos cerca di fermarlo.',
        en: 'Davos returns to Dragonstone in the night: the storm lords will not have [[stannis-baratheon|Stannis]] and have gone over to [[renly-baratheon|Renly]]. On the stairs he meets Maester [[cressen|Cressen]], who recalls how Davos, as a smuggler, brought onions and salt fish to Stannis’s starving garrison during a siege. Stannis knighted him and shortened the fingers of one hand. At the feast he alone offers Cressen a seat, and says they are about fool’s business, because [[melisandre|Melisandre]] has seen victory in her flames. Cressen drops the poison into Davos’s own cup. Davos tries to stop him.',
      },
    ),
    onScreen(
      [11, 84],
      { it: 'Il veleno nella coppa', en: 'The poison in the cup' },
      {
        it: 'Davos guarda bruciare le statue dei Sette accanto al figlio Matthos, che si è convertito al Signore della Luce. Il maestro [[cressen|Cressen]] gli chiede aiuto per allontanare [[stannis-baratheon|Stannis]] da [[melisandre|Melisandre]], ma Davos risponde che non è il momento. Al consiglio esorta Stannis a fare pace con il fratello [[renly-baratheon|Renly]], o ad allearsi con [[robb-stark|Robb Stark]], perché il vero nemico sono i Lannister. Stannis rifiuta. Davos vede Cressen versare qualcosa nella coppa e cerca in silenzio di fermarlo, ma Cressen offre il vino a Melisandre e muore avvelenato.',
        en: 'Davos watches the statues of the Seven burn beside his son Matthos, who has converted to the Lord of Light. Maester [[cressen|Cressen]] asks for his help in turning [[stannis-baratheon|Stannis]] away from [[melisandre|Melisandre]], but Davos answers that this is not the time. At the council he urges Stannis to make peace with his brother [[renly-baratheon|Renly]], or to ally with [[robb-stark|Robb Stark]], since the Lannisters are the true enemy. Stannis refuses. Davos sees Cressen put something in the cup and silently tries to stop him, but Cressen offers the wine to Melisandre and dies of the poison.',
      },
    ),
    onScreen(
      [12, 84],
      { it: 'Trenta navi', en: 'Thirty ships' },
      {
        it: 'Su una spiaggia, Davos e il figlio Matthos incontrano il pirata [[salladhor-saan|Salladhor Saan]], vecchio amico di Davos. Davos gli promette oro e gloria se seguirà [[stannis-baratheon|Stannis]], un comandante provato e l’uomo più onorevole dei Sette Regni. Salladhor vuole anche la regina [[cersei-lannister|Cersei]], e Davos non può prometterla. Alla fine il pirata accetta di salpare con le sue trenta navi. Matthos esorta il padre a imparare a leggere per conoscere i testi del Signore della Luce, ma Davos preferisce avere fede in Stannis. A Stannis dice di conoscere Salladhor da trent’anni, e di non essersi mai fidato di lui.',
        en: 'On a beach, Davos and his son Matthos meet the pirate [[salladhor-saan|Salladhor Saan]], his old friend. Davos promises him gold and glory if he follows [[stannis-baratheon|Stannis]], a proven commander and the most honorable man in the Seven Kingdoms. Salladhor also wants Queen [[cersei-lannister|Cersei]], and Davos cannot promise her. In the end the pirate agrees to sail with his thirty ships. Matthos urges his father to learn to read so he can know the Lord of Light’s holy books, but Davos would rather put his faith in Stannis. He tells Stannis he has known Salladhor for thirty years and never trusted him.',
      },
    ),
    onScreen(
      [14, 116],
      { it: 'La barca nella notte', en: 'The boat in the night' },
      {
        it: 'Davos accompagna [[stannis-baratheon|Stannis]] al colloquio con [[renly-baratheon|Renly]]. Poi Stannis gli ordina di portare di nascosto [[melisandre|Melisandre]] a riva, in una grotta sotto l’accampamento di Renly, senza dirgli perché. Sulla barca lei gli chiede se è un uomo buono, e lui risponde che è un misto di bene e male. Melisandre dice che una cipolla mezza marcia è una cipolla marcia. Nella grotta il passaggio è sbarrato. Lei si apre la veste e si mostra incinta, e Davos, terrorizzato, la guarda partorire un’ombra.',
        en: 'Davos goes with [[stannis-baratheon|Stannis]] to the parley with [[renly-baratheon|Renly]]. Then Stannis orders him to smuggle [[melisandre|Melisandre]] ashore, into a cave beneath Renly’s camp, without telling him why. In the boat she asks whether he is a good man, and he answers that he is a mix of good and bad. Melisandre says that an onion half rotten is a rotten onion. In the cave the way is barred. She opens her robe and shows that she is with child, and Davos, terrified, watches her give birth to a shadow.',
      },
    ),
    onScreen(
      [15, 107],
      { it: 'Il comandante', en: 'The commander' },
      {
        it: 'Dopo la morte di [[renly-baratheon|Renly]], gran parte del suo esercito passa con [[stannis-baratheon|Stannis]], che si prepara ad attaccare Approdo del Re. Davos gli chiede di lasciare [[melisandre|Melisandre]] fuori dalla battaglia, perché si dice che sia lei a comandarlo. Stannis si infuria perché Davos ha parlato della notte nella grotta, ma accetta il consiglio. Poi gli affida il comando della flotta. Davos teme che i vassalli di Stannis non rispetteranno un uomo delle sue origini.',
        en: 'After [[renly-baratheon|Renly]]’s death, most of his army goes over to [[stannis-baratheon|Stannis]], who prepares to attack King’s Landing. Davos asks him to keep [[melisandre|Melisandre]] out of the battle, because men say she is the one in command. Stannis is angry that Davos has spoken of the night in the cave, but takes his advice. Then he gives him command of the fleet. Davos fears that Stannis’s bannermen will not respect a man of his birth.',
      },
    ),
    onScreen(
      [18, 128],
      { it: 'Un’offerta inattesa', en: 'An unexpected offer' },
      {
        it: 'La flotta risale la costa, e Davos calcola che manca un giorno di navigazione ad Approdo del Re. [[stannis-baratheon|Stannis]] gli dice di ammirare la sua lealtà e la sua onestà. Ricorda l’assedio di Capo Tempesta: la guarnigione era ridotta a mangiare topi quando Davos forzò il blocco con una nave carica di cipolle, patate, pesce e un po’ di manzo. Poi gli dice che, una volta preso il Trono di Spade, Davos sarà il suo Primo Cavaliere. Davos ne resta sorpreso.',
        en: 'The fleet sails up the coast, and Davos reckons they are a day’s sail from King’s Landing. [[stannis-baratheon|Stannis]] tells him he admires his loyalty and his honesty. He recalls the siege of Storm’s End: the garrison was down to eating rats when Davos ran the blockade with a ship full of onions, potatoes, fish and some beef. Then he tells him that once he takes the Iron Throne, Davos will be his Hand. Davos is taken by surprise.',
      },
    ),
    onScreen(
      [19, 132],
      { it: 'L’altofuoco', en: 'The wildfire' },
      {
        it: 'Di notte la flotta di Davos entra nella baia davanti ad Approdo del Re. Il piano è distruggere la flotta reale e sbarcare sotto le mura, ma la flotta reale non c’è: da sola, una nave perde altofuoco nell’acqua. Davos capisce troppo tardi che è una trappola e grida alle navi di allontanarsi. Al segnale di [[tyrion-lannister|Tyrion]], [[bronn|Bronn]] scocca una freccia infuocata. L’esplosione distrugge l’avanguardia della flotta e la nave di Davos, e uccide suo figlio [[matthos-seaworth|Matthos]]. Lo scoppio sbalza Davos fuori bordo.',
        en: 'At night Davos’s fleet sweeps into the bay before King’s Landing. The plan is to destroy the royal fleet and land under the walls, but the royal fleet is not there: a lone ship is leaking wildfire into the water. Davos sees too late that it is a trap and shouts at the ships to turn away. At [[tyrion-lannister|Tyrion]]’s signal, [[bronn|Bronn]] looses a flaming arrow. The explosion destroys the vanguard of the fleet and Davos’s ship, and kills his son [[matthos-seaworth|Matthos]]. The blast throws Davos overboard.',
      },
    ),
    inBooks(
      [12, 84],
      { it: 'Il suo dio è il re', en: 'His god is the king' },
      {
        it: 'Davos guarda bruciare i Sette con i suoi figli. In una locanda del porto trova il pirata di Lys [[salladhor-saan|Salladhor Saan]], suo socio dai tempi del contrabbando, che lui stesso ha portato dalla parte di [[stannis-baratheon|Stannis]]. Salladhor vuole oro, non parole, e dice che la spada di Stannis non è la vera Portatrice di Luce. Quando gli chiede quale sia il suo dio, Davos risponde che è re Stannis. Di sera Stannis gli fa leggere la lettera con cui rivendica il trono, e Davos ammette di non saper leggere. Il re gli ordina di portarla verso nord fino a Porto Bianco.',
        en: 'Davos watches the Seven burn with his sons. At an inn in the port he finds the Lysene pirate [[salladhor-saan|Salladhor Saan]], his partner from his smuggling days, whom he himself brought over to [[stannis-baratheon|Stannis]]. Salladhor wants gold, not words, and says Stannis’s sword is not the true Lightbringer. When Salladhor asks who his god is, Davos answers that it is King Stannis. That evening Stannis has him look at the letter claiming the throne, and Davos admits he cannot read. The king orders him to carry it north as far as White Harbor.',
      },
    ),
    inBooks(
      [14, 116],
      { it: 'La nascita dell’ombra', en: 'The birth of the shadow' },
      {
        it: 'Davos torna alla flotta dopo aver portato il messaggio del re in tutto il regno. Al colloquio davanti a Capo Tempesta ser [[cortnay-penrose|Cortnay Penrose]] rifiuta di cedere, e Davos dice a [[stannis-baratheon|Stannis]] che rispetta Cortnay, perché ha mantenuto la sua fede. Gli consiglia di colpire subito Approdo del Re, ma Stannis gli ordina di portare [[melisandre|Melisandre]] in barca sotto il castello, come fece durante l’assedio di quindici anni prima. Sulla barca Davos la chiama bugiarda. Sotto le mura la vede partorire un’ombra, e riconosce l’ombra e l’uomo che la proietta.',
        en: 'Davos returns to the fleet after carrying the king’s message across the realm. At the parley before Storm’s End Ser [[cortnay-penrose|Cortnay Penrose]] refuses to yield, and Davos tells [[stannis-baratheon|Stannis]] he respects Cortnay, who kept his faith. He advises him to strike at King’s Landing at once, but Stannis orders him to take [[melisandre|Melisandre]] by boat beneath the castle, as he did during the siege some fifteen years before. In the boat Davos calls her a liar. Beneath the walls he watches her give birth to a shadow, and recognizes the shadow and the man who cast it.',
      },
    ),
    inBooks(
      [19, 132],
      { it: 'La bocca dell’inferno', en: 'The mouth of hell' },
      {
        it: 'La Black Betha di Davos è nella seconda linea, sul fianco destro, quando la flotta di [[stannis-baratheon|Stannis]] entra nella Baia delle Acque Nere. Davos disapprova l’attacco impetuoso di ser Imry Florent, che la comanda. Vede la catena tra le due torri alla foce del fiume, ma non è alzata. Nel fiume combattono le flotte dei due re, finché una nave non sperona una chiatta piena di altofuoco. L’esplosione distrugge la Black Betha e uccide suo figlio [[matthos-seaworth|Matthos]], e Davos finisce in acqua. Mentre i relitti scendono verso la baia, la catena si alza e chiude il fiume.',
        en: 'Davos’s Black Betha is in the second line, on the right wing, when [[stannis-baratheon|Stannis]]’s fleet enters Blackwater Bay. Davos disapproves of the headlong attack of Ser Imry Florent, who commands it. He sees the chain between the two towers at the river’s mouth, but it is not raised. The two kings’ fleets fight in the river until a ship rams a barge full of wildfire. The explosion destroys the Black Betha and kills his son [[matthos-seaworth|Matthos]], and Davos goes into the water. As the wrecks drift toward the bay, the chain rises and closes the river.',
      },
    ),
  ],
  'cressen': [
    onScreen(
      [11, 74],
      { it: 'Alla luce dei Sette', en: 'In the light of the Seven' },
      {
        it: 'Cressen teme l’influenza della sacerdotessa rossa [[melisandre|Melisandre]] su [[stannis-baratheon|Stannis]]. Quando lei brucia le statue dei Sette sulla spiaggia, la interrompe e ricorda a tutti che hanno ricevuto il nome alla luce dei Sette. Lei lo liquida, e lui se ne va a capo chino. Chiede aiuto a [[davos-seaworth|Davos]], che risponde che non è il momento. Al consiglio versa del veleno in una coppa, si scusa con Melisandre e le propone un brindisi. Beve per primo e le passa la coppa. Gli sanguina il naso: lei capisce, beve lo stesso e lo guarda morire, illesa.',
        en: 'Cressen fears the hold of the red priestess [[melisandre|Melisandre]] over [[stannis-baratheon|Stannis]]. When she burns the statues of the Seven on the beach, he interrupts her and reminds everyone that they were named in the light of the Seven. She dismisses him, and he walks away with his head bowed. He asks [[davos-seaworth|Davos]] for help, and Davos answers that this is not the time. At the council he puts poison in a cup, apologizes to Melisandre and proposes a toast. He drinks first and hands her the cup. His nose bleeds: she understands, drinks anyway and watches him die, unharmed.',
      },
    ),
    inBooks(
      [11, 74],
      { it: 'La cometa rossa', en: 'The red comet' },
      {
        it: 'Dal suo balcone il vecchio maestro di Roccia del Drago guarda la cometa rossa, e mostra alla piccola principessa Shireen il corvo bianco che annuncia la fine dell’estate. [[davos-seaworth|Davos]] è tornato senza alleati. Cressen consiglia a [[stannis-baratheon|Stannis]] di allearsi con [[renly-baratheon|Renly]] o con [[robb-stark|Robb Stark]], ma la regina Selyse dice che [[melisandre|Melisandre]] ha visto Renly morto nelle fiamme, e Stannis lo congeda. Cressen decide di avvelenare la sacerdotessa. Al banchetto Stannis affida i suoi compiti a un altro maestro. Cressen lascia cadere il veleno nella coppa di Davos e propone a Melisandre di brindare al suo dio. Lei beve, e muore lui.',
        en: 'From his balcony the old maester of Dragonstone watches the red comet, and shows little Princess Shireen the white raven that announces the end of summer. [[davos-seaworth|Davos]] has come back without allies. Cressen advises [[stannis-baratheon|Stannis]] to ally with [[renly-baratheon|Renly]] or [[robb-stark|Robb Stark]], but Queen Selyse says that [[melisandre|Melisandre]] has seen Renly dead in the flames, and Stannis sends him away. Cressen resolves to poison the priestess. At the feast Stannis gives his duties to another maester. Cressen drops the poison into Davos’s cup and proposes to Melisandre that they drink to her god. She drinks, and he is the one who dies.',
      },
    ),
  ],
  'matthos-seaworth': [
    onScreen(
      [11, 132],
      { it: 'La lettera del re', en: 'The king’s letter' },
      {
        it: 'Matthos assiste al rogo delle statue dei Sette e intona con gli altri le lodi al Signore della Luce. Poi, nella sala della Tavola dipinta di Roccia del Drago, legge al consiglio di guerra la lettera che ha preparato per [[stannis-baratheon|Stannis]]: [[joffrey-baratheon|Joffrey]] è un bastardo nato dall’incesto tra [[cersei-lannister|Cersei]] e [[jaime-lannister|Jaime]], e il trono spetta a Stannis. Stannis non vuole che Robert sia chiamato “amato fratello”, e vuole che Jaime sia chiamato lo Sterminatore di Re ma con il suo titolo di cavaliere. Poi ordina di mandare copie della lettera in ogni angolo del regno.',
        en: 'Matthos attends the burning of the statues of the Seven and joins in the praises to the Lord of Light. Then, in the chamber of the Painted Table on Dragonstone, he reads to the war council the letter he has prepared for [[stannis-baratheon|Stannis]]: [[joffrey-baratheon|Joffrey]] is a bastard born of incest between [[cersei-lannister|Cersei]] and [[jaime-lannister|Jaime]], and the throne is Stannis’s. Stannis objects to calling Robert “beloved brother”, and wants Jaime called the Kingslayer but with his title of knight. Then he orders copies of the letter sent to every corner of the realm.',
      },
    ),
    onScreen(
      [12, 132],
      { it: 'Il pirata e la regina', en: 'The pirate and the queen' },
      {
        it: 'Matthos accompagna il padre [[davos-seaworth|Davos]] a incontrare il pirata [[salladhor-saan|Salladhor Saan]] su una spiaggia. Quando Salladhor dice che vuole la regina [[cersei-lannister|Cersei]], Matthos gli risponde che non combattono perché lui possa violentarla, e che [[stannis-baratheon|Stannis]] regna per diritto divino. Poi esorta il padre a imparare a leggere per conoscere i testi sacri del Signore della Luce. Alla Tavola dipinta, mentre esce, [[melisandre|Melisandre]] lo ferma e gli sussurra all’orecchio che la morte nel fuoco è la più pura.',
        en: 'Matthos goes with his father [[davos-seaworth|Davos]] to meet the pirate [[salladhor-saan|Salladhor Saan]] on a beach. When Salladhor says he wants Queen [[cersei-lannister|Cersei]], Matthos answers that they are not fighting so that he can rape her, and that [[stannis-baratheon|Stannis]] rules by divine right. Then he urges his father to learn to read so he can know the holy books of the Lord of Light. At the Painted Table, as he leaves, [[melisandre|Melisandre]] stops him and whispers in his ear that death by fire is the purest death.',
      },
    ),
    onScreen(
      [19, 132],
      { it: 'Fede nel capitano', en: 'Faith in his captain' },
      {
        it: 'Mentre la flotta di [[stannis-baratheon|Stannis]] si avvicina ad Approdo del Re, Matthos è sicuro della vittoria: le loro navi sono dieci volte quelle del nemico, e i loro soldati cinque volte. Nonostante gli avvertimenti del padre [[davos-seaworth|Davos]], dice di avere fede nel Signore della Luce, nella loro causa e nel suo capitano. Nella baia la flotta reale non c’è. Al segnale di [[tyrion-lannister|Tyrion]], [[bronn|Bronn]] incendia l’altofuoco sparso sull’acqua, e l’esplosione distrugge la nave di Davos. Matthos, sul ponte, resta ucciso.',
        en: 'As [[stannis-baratheon|Stannis]]’s fleet nears King’s Landing, Matthos is sure of victory: their ships outnumber the enemy’s ten to one, and their soldiers five to one. Despite the warnings of his father [[davos-seaworth|Davos]], he says he has faith in the Lord of Light, in their cause and in his captain. In the bay the royal fleet is nowhere to be seen. At [[tyrion-lannister|Tyrion]]’s signal, [[bronn|Bronn]] sets fire to the wildfire spread on the water, and the explosion destroys Davos’s ship. Matthos, on deck, is killed.',
      },
    ),
    inBooks(
      [19, 132],
      { it: 'Il secondo della Black Betha', en: 'Second on the Black Betha' },
      {
        it: 'Matthos è uno dei figli di [[davos-seaworth|Davos]] e il suo secondo a bordo della Black Betha. Prima della battaglia ser Imry Florent, che comanda la flotta di [[stannis-baratheon|Stannis]], assegna alle navi di Davos e dei suoi figli un posto nella seconda linea, sul fianco destro. Un fratello lo chiama un posto d’onore, Davos un posto pericoloso, e Matthos guarda il padre con compassione per la sua inquietudine. Sul fiume delle Acque Nere la Black Betha finisce nell’esplosione dell’altofuoco, che la distrugge e uccide Matthos.',
        en: 'Matthos is one of [[davos-seaworth|Davos]]’s sons and his second aboard the Black Betha. Before the battle Ser Imry Florent, who commands [[stannis-baratheon|Stannis]]’s fleet, gives the ships of Davos and his sons a place in the second line, on the right wing. One brother calls it a place of honor, Davos a place of peril, and Matthos looks at his father with pity for his nervousness. On the Blackwater Rush the Black Betha is caught in the wildfire’s explosion, which destroys the ship and kills Matthos.',
      },
    ),
  ],
  'salladhor-saan': [
    onScreen(
      [12, 84],
      { it: 'Un pirata eccellente', en: 'An excellent pirate' },
      {
        it: 'Su una spiaggia vicino a Roccia del Drago il pirata di Lys incontra il vecchio amico [[davos-seaworth|Davos]] e Matthos, il figlio di Davos. Davos gli promette oro e gloria, e Salladhor osserva che [[stannis-baratheon|Stannis]] ha il più piccolo esercito di tutti i pretendenti, e l’ironia di un contrabbandiere che garantisce per l’onore di un re. Quando Matthos lo chiama pirata, risponde che è un pirata eccellente. Dice di volere la regina [[cersei-lannister|Cersei]], e alla fine accetta di salpare con le sue trenta navi, perché Davos è il contrabbandiere più onesto che abbia mai conosciuto.',
        en: 'On a beach near Dragonstone the pirate from Lys meets his old friend [[davos-seaworth|Davos]] and Davos’s son Matthos. Davos promises him gold and glory, and Salladhor points out that [[stannis-baratheon|Stannis]] has the smallest army of all the claimants, and the irony of a smuggler vouching for a king’s honor. When Matthos calls him a pirate, he answers that he is an excellent one. He says he wants Queen [[cersei-lannister|Cersei]], and in the end agrees to sail with his thirty ships, because Davos is the most honest smuggler he has ever met.',
      },
    ),
    inBooks(
      [12, 84],
      { it: 'Una spada bruciata', en: 'A burnt sword' },
      {
        it: 'Salladhor non va a vedere il rogo dei Sette: a Lys sono cose comuni, e lo annoiano. In una locanda del porto racconta a [[davos-seaworth|Davos]] che [[tyrion-lannister|Tyrion Lannister]] governa la capitale e ha cacciato [[janos-slynt|Janos Slynt]], e che le cappe dorate sono troppo poche. Vuole oro, non parole, e chiede di colpire subito. Dice anche che [[renly-baratheon|Renly]] ha lasciato Alto Giardino con l’esercito e la nuova regina. La spada di [[stannis-baratheon|Stannis]] per lui non è la vera Portatrice di Luce, ma una spada bruciata. Prima di andarsene chiede a Davos di ricordare al re che gli deve altri trentamila draghi.',
        en: 'Salladhor stays away from the burning of the Seven: such sights are common in Lys, and they bore him. At an inn in the port he tells [[davos-seaworth|Davos]] that [[tyrion-lannister|Tyrion Lannister]] now runs the capital and has driven out [[janos-slynt|Janos Slynt]], and that the gold cloaks are too few. He wants gold, not words, and urges a swift strike. He also says that [[renly-baratheon|Renly]] has left Highgarden with his army and his new queen. To him [[stannis-baratheon|Stannis]]’s sword is not the true Lightbringer but a burnt one. Before leaving he asks Davos to remind the king that he owes another thirty thousand dragons.',
      },
    ),
  ],
  'selyse-baratheon': [
    inBooks(
      [25, 74],
      {
        it: 'Il Signore della Luce darà un esercito',
        en: 'The Lord of Light will provide',
      },
      {
        it: 'La regina Selyse entra mentre il maestro [[cressen|Cressen]] consiglia a [[stannis-baratheon|Stannis]] di cercare alleati, e dice che il marito non dovrebbe mendicare aiuto, perché tutti gli devono fedeltà come vero re. La sacerdotessa rossa [[melisandre|Melisandre]] l’ha convertita al culto di R’hllor. Selyse dice che la cometa è un segno del Signore della Luce, e che se [[renly-baratheon|Renly]] morisse il suo esercito passerebbe con Stannis: Melisandre lo ha visto morto nelle fiamme. Al banchetto ordina a Cressen di rimettersi in testa la corona del giullare, e propone che canti.',
        en: 'Queen Selyse comes in while Maester [[cressen|Cressen]] is advising [[stannis-baratheon|Stannis]] to seek allies, and says her husband should not have to beg for help, since all men owe him their allegiance as the true king. The red priestess [[melisandre|Melisandre]] has converted her to the worship of R’hllor. Selyse says the comet is a sign from the Lord of Light, and that if [[renly-baratheon|Renly]] died his army would go over to Stannis: Melisandre has seen him dead in the flames. At the feast she commands Cressen to put the fool’s crown back on, and suggests that he sing.',
      },
    ),
    inBooks(
      [25, 84],
      { it: 'Gli uomini della regina', en: 'The queen’s men' },
      {
        it: 'Gli uomini della regina hanno rovesciato gli altari del tempio di Roccia del Drago e abbattuto le statue dei Sette. Ora le statue bruciano davanti alle porte del castello, e mentre [[melisandre|Melisandre]] prega, Selyse ripete le sue parole: la notte è oscura e piena di terrori. Quando [[stannis-baratheon|Stannis]] estrae la spada dal fuoco, la regina e i suoi uomini intonano lodi. Poi Stannis, spazientito, la riaccompagna nel castello. [[davos-seaworth|Davos]] non vuole conquistarsi il favore di Selyse offrendosi al nuovo dio.',
        en: 'The queen’s men have overturned the altars of the sept on Dragonstone and pulled down the statues of the Seven. Now the statues burn before the castle gates, and as [[melisandre|Melisandre]] prays, Selyse echoes her words: the night is dark and full of terrors. When [[stannis-baratheon|Stannis]] draws the sword from the fire, the queen and her men chant praises. Then Stannis, impatient, escorts her back into the castle. [[davos-seaworth|Davos]] will not court Selyse’s favor by giving himself to the new god.',
      },
    ),
  ],
  'shireen-baratheon': [
    inBooks(
      [25, 74],
      { it: 'Il corvo bianco', en: 'The white raven' },
      {
        it: 'Shireen ha quasi dieci anni, e il morbo grigio le ha segnato il viso quando era piccola. Ora che suo padre [[stannis-baratheon|Stannis]] è re, la chiamano principessa. Una mattina va dal maestro [[cressen|Cressen]] con il suo giullare per vedere il corvo bianco arrivato dalla Cittadella. Racconta di aver sognato draghi che volevano mangiarla, e che la donna rossa dice che la cometa è il fiato del drago. Il corvo parla, e lei ne è felice. Ma il giullare canta una canzone sulle ombre che la spaventa. Più tardi Cressen propone di mandarla al Nido dell’Aquila per un fidanzamento.',
        en: 'Shireen is almost ten, and greyscale scarred her face when she was small. Now that her father [[stannis-baratheon|Stannis]] is king, she is called princess. One morning she goes to Maester [[cressen|Cressen]] with her fool to see the white raven come from the Citadel. She tells him she dreamed of dragons coming to eat her, and that the red woman says the comet is dragon’s breath. The raven speaks, and she is delighted. But the fool sings a song about shadows that frightens her. Later Cressen proposes sending her to the Eyrie for a betrothal.',
      },
    ),
  ],
  'brienne-of-tarth': [
    onScreen(
      [13, 96],
      { it: 'La campionessa del torneo', en: 'The tourney champion' },
      {
        it: 'Al torneo di re [[renly-baratheon|Renly]] ser [[loras-tyrell|Loras Tyrell]] disarma il suo avversario, che però schiva il colpo, lo atterra e lo costringe ad arrendersi puntandogli un coltello al viso. Quando si toglie l’elmo si scopre che è una donna: Brienne di Tarth. Come premio chiede un posto nella Guardia reale di Renly, che glielo concede. Quando arriva [[catelyn-stark|Catelyn Stark]] e chiama Renly mio signore, Brienne le dice che dovrebbe inginocchiarsi e chiamarlo Vostra Grazia. Più tardi, mentre la accompagna per l’accampamento, le dice di chiamarla solo Brienne: non si considera una lady.',
        en: 'At King [[renly-baratheon|Renly]]’s tourney Ser [[loras-tyrell|Loras Tyrell]] disarms his opponent, who steps under his swing, knocks him down and makes him yield with a knife at his face. When the helm comes off, the winner is a woman: Brienne of Tarth. As her reward she asks for a place in Renly’s Kingsguard, and he grants it. When [[catelyn-stark|Catelyn Stark]] arrives and calls Renly my lord, Brienne tells her she should kneel and call him Your Grace. Later, escorting her through the camp, she tells Catelyn to call her just Brienne: she does not think of herself as a lady.',
      },
    ),
    onScreen(
      [14, 105],
      { it: 'Una lealtà gratuita', en: 'Loyalty without charge' },
      {
        it: '[[petyr-baelish|Ditocorto]] arriva all’accampamento come inviato di re [[joffrey-baratheon|Joffrey]], ed entra nella tenda di [[renly-baratheon|Renly]]. Quando guarda Brienne, Renly gli dice che la sua lealtà non costa nulla e che di lei ci si può fidare. Petyr offre a Renly di aprirgli le porte di Approdo del Re. Brienne fa anche da guardia a Renly al colloquio con il fratello [[stannis-baratheon|Stannis]], sulla costa. I due non trovano un accordo, e Stannis minaccia Renly perché rifiuta di giurargli fedeltà.',
        en: '[[petyr-baelish|Littlefinger]] comes to the camp as King [[joffrey-baratheon|Joffrey]]’s envoy and enters [[renly-baratheon|Renly]]’s tent. When he looks at Brienne, Renly tells him her loyalty comes without charge and that she can be trusted. Petyr offers to open the gates of King’s Landing to Renly. Brienne also guards Renly at the parley with his brother [[stannis-baratheon|Stannis]] on the coast. The two reach no agreement, and Stannis threatens Renly for refusing to swear fealty to him.',
      },
    ),
    onScreen(
      [15, 113],
      { it: 'L’ombra nella tenda', en: 'The shadow in the tent' },
      {
        it: 'Brienne sta aiutando [[renly-baratheon|Renly]] a togliersi il mantello mentre lui parla con [[catelyn-stark|Catelyn Stark]], quando un’ombra entra nella tenda e lo trafigge. Brienne riconosce nell’ombra il volto di [[stannis-baratheon|Stannis]], e afferra Renly mentre cade, coprendosi del suo sangue. Due cavalieri della Guardia reale di Renly la incolpano e la attaccano, e lei li uccide entrambi. Catelyn la convince a fuggire: da morta non potrà vendicare Renly. Poi Brienne giura fedeltà a Catelyn e diventa la sua spada giurata.',
        en: 'Brienne is helping [[renly-baratheon|Renly]] out of his cloak while he talks with [[catelyn-stark|Catelyn Stark]], when a shadow enters the tent and runs him through. Brienne sees [[stannis-baratheon|Stannis]]’s face in the shadow, and catches Renly as he falls, covering herself in his blood. Two knights of Renly’s Kingsguard blame her and attack, and she kills them both. Catelyn persuades her to flee: dead, she cannot avenge Renly. Then Brienne swears fealty to Catelyn and becomes her sworn sword.',
      },
    ),
    onScreen(
      [16, 113],
      { it: 'Al campo di Robb', en: 'At Robb’s camp' },
      {
        it: 'Brienne torna con [[catelyn-stark|Catelyn Stark]] dalle Terre della Tempesta all’accampamento di [[robb-stark|Robb]]. Robb presenta alla madre [[talisa-maegyr|Talisa]], la guaritrice che segue il suo esercito. Poi arriva lord [[roose-bolton|Roose Bolton]] con una notizia terribile: [[theon-greyjoy|Theon Greyjoy]] ha tradito Robb e ha preso Grande Inverno, e i fratelli più piccoli di Robb sono suoi prigionieri. Robb vuole tornare al Nord con tutto l’esercito, ma Roose lo convince a mandare invece i suoi uomini.',
        en: 'Brienne comes back from the stormlands with [[catelyn-stark|Catelyn Stark]] to [[robb-stark|Robb]]’s camp. Robb introduces his mother to [[talisa-maegyr|Talisa]], the healer who follows his army. Then Lord [[roose-bolton|Roose Bolton]] arrives with terrible news: [[theon-greyjoy|Theon Greyjoy]] has betrayed Robb and taken Winterfell, and Robb’s younger brothers are his captives. Robb wants to march north with his whole army, but Roose persuades him to send his own men instead.',
      },
    ),
    onScreen(
      [17, 129],
      { it: 'La vendetta dei Karstark', en: 'The Karstarks’ vengeance' },
      {
        it: '[[jaime-lannister|Jaime Lannister]] tenta la fuga dall’accampamento di Robb e uccide Torrhen Karstark. Viene ripreso, e il padre di Torrhen, lord [[rickard-karstark|Rickard Karstark]], vuole la sua testa. Brienne fa da guardia a [[catelyn-stark|Catelyn Stark]] mentre Catelyn convince Rickard ad aspettare il ritorno di Robb. Nella notte i Karstark si fanno sempre più violenti e reclamano la morte di Jaime. Difenderlo sarebbe morte certa, e Brienne dice a Catelyn che, di questo passo, Jaime non vivrà fino al ritorno di Robb.',
        en: '[[jaime-lannister|Jaime Lannister]] tries to escape Robb’s camp and kills Torrhen Karstark. He is caught again, and Torrhen’s father, Lord [[rickard-karstark|Rickard Karstark]], demands his head. Brienne guards [[catelyn-stark|Catelyn Stark]] as she persuades Rickard to wait for Robb’s return. Through the night the Karstarks grow more violent and call for Jaime’s death. Defending him would mean death, and Brienne tells Catelyn that at this rate Jaime will not live until Robb comes back.',
      },
    ),
    onScreen(
      [18, 129],
      { it: 'Lo Sterminatore di Re in catene', en: 'The Kingslayer in chains' },
      {
        it: '[[catelyn-stark|Catelyn Stark]] libera [[jaime-lannister|Jaime Lannister]] per scambiarlo con le sue due figlie, che crede prigioniere dei Lannister ad Approdo del Re. Ordina a Brienne di portarlo fuori di nascosto dall’accampamento e di consegnarlo nella capitale. Brienne viaggia a cavallo, poi trova una barca a remi per sfuggire agli inseguitori. Lungo il viaggio Jaime, incatenato, la provoca di continuo sul suo aspetto e su quanto poco successo abbia avuto con gli uomini.',
        en: '[[catelyn-stark|Catelyn Stark]] frees [[jaime-lannister|Jaime Lannister]] to trade him for her two daughters, whom she believes the Lannisters hold in King’s Landing. She orders Brienne to smuggle him out of the camp and deliver him to the capital. Brienne travels on horseback, then finds a rowboat to escape pursuit. All along the way Jaime, in chains, needles her about her looks and her likely lack of success with men.',
      },
    ),
    onScreen(
      [20, 139],
      { it: 'Le ragazze impiccate', en: 'The hanged girls' },
      {
        it: 'Brienne e [[jaime-lannister|Jaime]] trovano tre ragazze di una taverna impiccate a un albero da uomini degli Stark, per essere state con soldati Lannister. Brienne vuole seppellirle, ma tornano tre degli uomini che le hanno uccise. Lei dice che sta scortando un prigioniero, e Jaime sostiene di aver rubato un maiale. Gli uomini ridono di lei quando capiscono che è una donna. Quando uno riconosce Jaime, Brienne combatte: ne uccide due in fretta, e il terzo lentamente. A Jaime ricorda che è fedele a [[catelyn-stark|Catelyn]], non agli Stark, e poi seppellisce le ragazze.',
        en: 'Brienne and [[jaime-lannister|Jaime]] find three tavern girls hanged from a tree by Stark men for lying with Lannister soldiers. Brienne means to bury them, but three of the men who killed them come back. She says she is escorting a prisoner, and Jaime claims he stole a pig. The men laugh at her once they see she is a woman. When one of them recognizes Jaime, Brienne fights: she kills two quickly, and the third slowly. She reminds Jaime that she is loyal to [[catelyn-stark|Catelyn]], not to the Starks, and then buries the girls.',
      },
    ),
    inBooks(
      [13, 96],
      { it: 'Il cavaliere in blu', en: 'The knight in blue' },
      {
        it: 'Nella mischia al torneo di re [[renly-baratheon|Renly]] un cavaliere di Tarth in armatura blu resta in sella fino alla fine. Disarmato da ser [[loras-tyrell|Loras Tyrell]], si lancia contro di lui, lo trascina a terra e lo costringe ad arrendersi con un pugnale. È Brienne, figlia di lord Selwyn, che molti chiamano la Bella, ma mai in faccia. Ultima in sella tra centosedici cavalieri, chiede un posto nella guardia arcobaleno di Renly. Renly le allaccia il mantello e lei gli giura la vita. Poi dice a [[catelyn-stark|Catelyn Stark]] che dovrebbe inginocchiarsi e chiamarlo Vostra Grazia.',
        en: 'In the melee at King [[renly-baratheon|Renly]]’s tourney a knight of Tarth in blue armor stays mounted to the end. Disarmed by Ser [[loras-tyrell|Loras Tyrell]], the knight charges into him, drags him to the ground and makes him yield with a dagger. It is Brienne, Lord Selwyn’s daughter, whom many call the Beauty, though never to her face. Last mounted of a hundred and sixteen knights, she asks for a place in Renly’s Rainbow Guard. Renly fastens the cloak on her and she pledges her life to him. Then she tells [[catelyn-stark|Catelyn Stark]] she should kneel and call him Your Grace.',
      },
    ),
    inBooks(
      [14, 105],
      { it: 'Lo stendardo di Renly', en: 'Renly’s banner' },
      {
        it: 'Brienne porta lo stendardo di [[renly-baratheon|Renly]] al colloquio con [[stannis-baratheon|Stannis]] davanti a Capo Tempesta. Quando Stannis sguaina la spada, si mette tra i due fratelli. Al consiglio di guerra Renly dà l’avanguardia a ser [[loras-tyrell|Loras Tyrell]], che chiede di avere al suo fianco un cavaliere di Renly, e Renly sceglie Brienne. Lei vorrebbe combattere accanto al re, ma accetta. Gli chiede almeno di poterlo armare per la battaglia, e qualcuno ridacchia quando Renly acconsente.',
        en: 'Brienne bears [[renly-baratheon|Renly]]’s banner to the parley with [[stannis-baratheon|Stannis]] before Storm’s End. When Stannis draws his sword, she moves between the brothers. At the war council Renly gives the van to Ser [[loras-tyrell|Loras Tyrell]], who asks for one of Renly’s knights at his side, and Renly chooses Brienne. She would rather fight beside the king, but accepts. She asks at least to arm him for the battle, and someone sniggers when Renly agrees.',
      },
    ),
    inBooks(
      [15, 107],
      { it: 'Il sangue del re', en: 'The king’s blood' },
      {
        it: 'Prima dell’alba Brienne arma [[renly-baratheon|Renly]] nel suo padiglione. Mentre in ginocchio gli allaccia la spada, un’ombra solleva una lama e gli taglia la gola, e Renly le muore tra le braccia. Ser [[robar-royce|Robar Royce]] ed Emmon Cuy entrano, la vedono coperta del sangue del re e credono che sia stata lei. Brienne combatte, e [[catelyn-stark|Catelyn Stark]] colpisce Emmon con un braciere. Brienne apre uno squarcio nella tenda e fugge con Catelyn. Non ha visto nulla, ma giura che ucciderà [[stannis-baratheon|Stannis]] con la spada di Renly.',
        en: 'Before dawn Brienne arms [[renly-baratheon|Renly]] in his pavilion. As she kneels to belt on his sword, a shadow lifts a blade and cuts his throat, and Renly dies in her arms. Ser [[robar-royce|Robar Royce]] and Emmon Cuy come in, see her covered in the king’s blood and believe she did it. Brienne fights, and [[catelyn-stark|Catelyn Stark]] strikes Emmon with a brazier. Brienne slashes through the side of the tent and flees with Catelyn. She saw nothing, but swears she will kill [[stannis-baratheon|Stannis]] with Renly’s sword.',
      },
    ),
    inBooks(
      [15, 113],
      { it: 'La spada giurata', en: 'The sworn sword' },
      {
        it: 'Sulla via di Delta delle Acque, uno degli esploratori di Martyn Rivers racconta a [[catelyn-stark|Catelyn Stark]] delle vittorie del figlio a ovest, e che lord [[tywin-lannister|Tywin]] marcia su Delta delle Acque. Catelyn prende allora Brienne come sua spada giurata, per impedirle di fare qualcosa di sciocco. Al castello trovano uomini Lannister impiccati alle mura: hanno tentato di liberare [[jaime-lannister|Jaime Lannister]]. Il fratello di Catelyn ha fatto impiccare quegli uomini e ha messo Jaime in catene nelle segrete più profonde.',
        en: 'On the way to Riverrun, one of Martyn Rivers’s outriders tells [[catelyn-stark|Catelyn Stark]] of her son’s victories in the west, and that Lord [[tywin-lannister|Tywin]] is marching on Riverrun. Catelyn then takes Brienne as her sworn sword, to keep her from doing anything foolish. At the castle they find Lannister men hanged from the walls: they tried to free [[jaime-lannister|Jaime Lannister]]. Catelyn’s brother has had those men hanged and put Jaime in chains in the deep dungeons.',
      },
    ),
    inBooks(
      [17, 129],
      { it: 'Davanti alla cella', en: 'Outside the cell' },
      {
        it: 'Delta delle Acque festeggia una vittoria, ma [[catelyn-stark|Catelyn Stark]] siede nella sala grande con la sola Brienne. Le racconta del messaggio arrivato quella mattina: [[theon-greyjoy|Theon Greyjoy]] avrebbe ucciso i suoi due figli più piccoli. Le dice anche di aver mandato del vino a [[jaime-lannister|Jaime Lannister]] per sciogliergli la lingua. A mezzanotte scendono nelle segrete, e Catelyn chiede a Brienne di aspettare fuori dalla cella. Quando Jaime, ubriaco, comincia a deridere l’onore di Eddard, Catelyn chiede a Brienne la sua spada.',
        en: 'Riverrun celebrates a victory, but [[catelyn-stark|Catelyn Stark]] sits in the great hall with no one but Brienne. She tells her of the message that came that morning: [[theon-greyjoy|Theon Greyjoy]] is said to have killed her two youngest sons. She also tells her she has sent wine to [[jaime-lannister|Jaime Lannister]] to loosen his tongue. At midnight they go down to the dungeons, and Catelyn asks Brienne to wait outside the cell. When Jaime, drunk, starts to mock Eddard’s honor, Catelyn calls for Brienne’s sword.',
      },
    ),
  ],
  'margaery-tyrell': [
    onScreen(
      [13, 96],
      { it: 'La regina di Renly', en: 'Renly’s queen' },
      {
        it: 'Margaery ha sposato re [[renly-baratheon|Renly]], l’amante di suo fratello [[loras-tyrell|Loras]], e lo sa. Al torneo fa il tifo per Loras, e resta delusa quando [[brienne-of-tarth|Brienne]] lo batte. Accoglie con calore [[catelyn-stark|Catelyn Stark]] e le porge le condoglianze per la morte di Eddard. Quella notte cerca di sedurre Renly, che non ci riesce. Senza scomporsi, gli propone di chiamare Loras ad aiutarlo, e gli ricorda che i loro nemici saranno sconfitti se lui la metterà incinta.',
        en: 'Margaery has married King [[renly-baratheon|Renly]], the lover of her brother [[loras-tyrell|Loras]], and she knows it. At the tourney she cheers Loras on, and is disappointed when [[brienne-of-tarth|Brienne]] beats him. She greets [[catelyn-stark|Catelyn Stark]] warmly and offers her condolences for Eddard’s death. That night she tries to seduce Renly, who cannot go through with it. Unruffled, she offers to bring Loras in to help him, and reminds him that their enemies will be thwarted if he gets her with child.',
      },
    ),
    onScreen(
      [14, 105],
      { it: 'Le insinuazioni di Ditocorto', en: 'Littlefinger’s hints' },
      {
        it: '[[loras-tyrell|Loras]] accompagna Margaery attraverso l’accampamento e la lascia alla tenda di [[renly-baratheon|Renly]], dove la aspetta [[petyr-baelish|Ditocorto]], venuto come inviato di re [[joffrey-baratheon|Joffrey]]. Petyr le fa capire di sapere che cosa c’è tra Renly e Loras, e la provoca sulle inclinazioni del marito. Margaery non si lascia intimidire: risponde a tono e dichiara la sua lealtà a Renly.',
        en: '[[loras-tyrell|Loras]] walks Margaery through the camp and leaves her at [[renly-baratheon|Renly]]’s tent, where [[petyr-baelish|Littlefinger]] is waiting for her as King [[joffrey-baratheon|Joffrey]]’s envoy. Petyr lets her know he is aware of what there is between Renly and Loras, and needles her about her husband’s tastes. Margaery is not intimidated: she answers him in kind and affirms her loyalty to Renly.',
      },
    ),
    onScreen(
      [15, 107],
      { it: 'Non una regina, la Regina', en: 'Not a queen, the Queen' },
      {
        it: '[[renly-baratheon|Renly]] è stato ucciso, e Margaery dice a [[loras-tyrell|Loras]], che veglia il corpo, che devono tornare a casa. [[petyr-baelish|Ditocorto]] li avverte che [[stannis-baratheon|Stannis]] è a un’ora di distanza, e che i vassalli di Renly passeranno con lui. Margaery allontana la spada che Loras ha puntato su Petyr, e dice al fratello che dalla tomba non potrà vendicare Renly. Loras va a prendere i cavalli. Margaery dice a Petyr che se Renly non era re, lei non era regina, e che non vuole essere una regina, ma la Regina. Petyr parte con i Tyrell per Alto Giardino.',
        en: '[[renly-baratheon|Renly]] has been killed, and Margaery tells [[loras-tyrell|Loras]], who keeps vigil by the body, that they must go home. [[petyr-baelish|Littlefinger]] warns them that [[stannis-baratheon|Stannis]] is an hour away, and that Renly’s bannermen will go over to him. Margaery pushes aside the sword Loras has drawn on Petyr, and tells her brother he cannot avenge Renly from the grave. Loras goes for the horses. She tells Petyr that if Renly was no king she was no queen, and that she does not want to be a queen, but the Queen. Petyr leaves with the Tyrells for Highgarden.',
      },
    ),
    onScreen(
      [20, 139],
      { it: 'Amato da lontano', en: 'Loved from afar' },
      {
        it: 'I Tyrell si sono alleati con i Lannister, e insieme hanno vinto la battaglia delle Acque Nere. Nella sala del trono re [[joffrey-baratheon|Joffrey]] chiede a [[loras-tyrell|Loras]] che ricompensa desideri, e lui chiede che il re sposi Margaery. Margaery dice di aver sentito parlare del coraggio di Joffrey e di averlo amato da lontano. Joffrey ricambia, ma esita a rompere il fidanzamento con [[sansa-stark|Sansa Stark]]. Il Concilio ristretto lo convince che la famiglia di Sansa, traditrice, è una ragione sufficiente.',
        en: 'The Tyrells have allied with the Lannisters, and together they have won the battle of the Blackwater. In the throne room King [[joffrey-baratheon|Joffrey]] asks [[loras-tyrell|Loras]] what reward he desires, and Loras asks that the king marry Margaery. Margaery says she has heard of Joffrey’s courage and has loved him from afar. Joffrey returns the feeling, but balks at setting aside his betrothal to [[sansa-stark|Sansa Stark]]. The small council persuades him that Sansa’s family of traitors is reason enough.',
      },
    ),
    inBooks(
      [13, 96],
      { it: 'Il cemento dell’alleanza', en: 'The mortar of the alliance' },
      {
        it: 'Margaery Tyrell ha l’età di Robb, i capelli castani e ricci e un sorriso timido. Il suo matrimonio con re [[renly-baratheon|Renly]] tiene insieme la grande alleanza del Sud, e i colori dei Tyrell sono ovunque nell’accampamento. Al torneo siede ridendo accanto a Renly. Quando [[catelyn-stark|Catelyn Stark]] arriva come inviata di Robb, Renly gliela presenta, e Margaery le porge le condoglianze per la morte del marito. Al banchetto Renly la imbocca con bocconi scelti e la bacia con leggerezza, ma è con ser [[loras-tyrell|Loras]] che scherza e si confida di più.',
        en: 'Margaery Tyrell is Robb’s age, with curly brown hair and a shy smile. Her marriage to King [[renly-baratheon|Renly]] holds the great southern alliance together, and the Tyrell colors are everywhere in the camp. At the tourney she sits laughing beside Renly. When [[catelyn-stark|Catelyn Stark]] arrives as Robb’s envoy, Renly introduces her, and Margaery offers her condolences for her husband’s death. At the feast Renly feeds her choice morsels and kisses her lightly, but it is with Ser [[loras-tyrell|Loras]] that he shares most of his jests and confidences.',
      },
    ),
    inBooks(
      [15, 107],
      { it: 'Un figlio entro un anno', en: 'A son within a year' },
      {
        it: 'Davanti a Capo Tempesta [[stannis-baratheon|Stannis]] dice che il matrimonio di [[renly-baratheon|Renly]] con Margaery è una farsa: un anno prima Renly voleva farla diventare una delle puttane di Robert. Renly risponde che voleva farla regina, e che entro un anno avrà un figlio da lei. Prima dell’alba, mentre Renly si arma per la battaglia, un’ombra gli taglia la gola nel suo padiglione. [[catelyn-stark|Catelyn Stark]] e [[brienne-of-tarth|Brienne]] fuggono dall’accampamento, e Catelyn pensa che tutta la forza di Renly passerà a Stannis.',
        en: 'Before Storm’s End [[stannis-baratheon|Stannis]] says that [[renly-baratheon|Renly]]’s marriage to Margaery is a farce: a year before, Renly was scheming to make her one of Robert’s whores. Renly answers that he meant to make her queen, and that within a year he will have a son by her. Before dawn, as Renly arms for battle, a shadow cuts his throat in his pavilion. [[catelyn-stark|Catelyn Stark]] and [[brienne-of-tarth|Brienne]] flee the camp, and Catelyn thinks that all of Renly’s strength will pass to Stannis.',
      },
    ),
    inBooks(
      [20, 139],
      { it: 'Promessa al re', en: 'Promised to the king' },
      {
        it: 'Dopo la battaglia delle Acque Nere, lord Mace Tyrell e i suoi figli, ser [[garlan-tyrell|Garlan]] e ser [[loras-tyrell|Loras]], vengono presentati a re [[joffrey-baratheon|Joffrey]] tra gli eroi della vittoria. Garlan chiede al re di sposare la loro sorella Margaery. Joffrey è già promesso a [[sansa-stark|Sansa Stark]], ma l’Alto Septon dichiara nullo il fidanzamento per la ribellione degli Stark. Sansa, dalla galleria, è felice che sia Margaery a sposare Joffrey al posto suo.',
        en: 'After the battle of the Blackwater, Lord Mace Tyrell and his sons, Ser [[garlan-tyrell|Garlan]] and Ser [[loras-tyrell|Loras]], are presented to King [[joffrey-baratheon|Joffrey]] among the heroes of the victory. Garlan asks the king to wed their sister Margaery. Joffrey is already promised to [[sansa-stark|Sansa Stark]], but the High Septon declares the betrothal void because of the Starks’ rebellion. Sansa, in the gallery, is delighted that Margaery will marry Joffrey in her place.',
      },
    ),
  ],
  'mace-tyrell': [
    inBooks(
      [32, 139],
      {
        it: 'Tra gli eroi delle Acque Nere',
        en: 'Among the heroes of the Blackwater',
      },
      {
        it: 'I Tyrell hanno salvato Approdo del Re insieme a lord [[tywin-lannister|Tywin]], e Mace ha guidato l’ala sinistra nella battaglia delle Acque Nere. Nella sala del trono viene presentato a re [[joffrey-baratheon|Joffrey]] con i figli ser [[garlan-tyrell|Garlan]] e ser [[loras-tyrell|Loras]], tra gli eroi della vittoria. Loras entra nella Guardia reale, e Mace ottiene un seggio nel Concilio ristretto. Garlan chiede al re di sposare la loro sorella [[margaery-tyrell|Margaery]], e l’Alto Septon dichiara nullo il fidanzamento di Joffrey con [[sansa-stark|Sansa Stark]].',
        en: 'The Tyrells have saved King’s Landing together with Lord [[tywin-lannister|Tywin]], and Mace commanded the left in the battle of the Blackwater. In the throne room he is presented to King [[joffrey-baratheon|Joffrey]] with his sons, Ser [[garlan-tyrell|Garlan]] and Ser [[loras-tyrell|Loras]], among the heroes of the victory. Loras is named to the Kingsguard, and Mace is given a seat on the small council. Garlan asks the king to wed their sister [[margaery-tyrell|Margaery]], and the High Septon declares Joffrey’s betrothal to [[sansa-stark|Sansa Stark]] void.',
      },
    ),
  ],
  'cortnay-penrose': [
    inBooks(
      [14, 116],
      { it: 'Il guanto di sfida', en: 'The gauntlet' },
      {
        it: 'Ser Cortnay Penrose, castellano di Capo Tempesta, esce dal castello per parlamentare con [[stannis-baratheon|Stannis]]. Disprezza il re e i suoi nuovi alleati, che fino a poco prima avevano giurato fedeltà a Renly, e deride lord Alester Florent, che ha cambiato non solo bandiera ma anche dio. Ricorda che altri, come ser [[loras-tyrell|Loras Tyrell]], non sono passati con Stannis. Non cederà il castello né il bastardo di Robert. Getta il guanto in faccia a Stannis e lo sfida a duello. Quando Stannis minaccia di prendere il castello con la forza, Cortnay gli dice di ricordare il nome del castello.',
        en: 'Ser Cortnay Penrose, castellan of Storm’s End, rides out to parley with [[stannis-baratheon|Stannis]]. He scorns the king and his new allies, who only lately were sworn to Renly, and mocks Lord Alester Florent for changing not only sides but gods. He points out that others, Ser [[loras-tyrell|Loras Tyrell]] among them, have not come over to Stannis. He will yield neither the castle nor Robert’s bastard. He throws his gauntlet in Stannis’s face and challenges him to single combat. When Stannis threatens to take the castle by storm, Cortnay tells him to remember the castle’s name.',
      },
    ),
    inBooks(
      [16, 118],
      { it: 'Capo Tempesta è caduta', en: 'Storm’s End has fallen' },
      {
        it: 'Ser Cortnay Penrose è morto, e Capo Tempesta è caduta in mano a [[stannis-baratheon|Stannis]]. È [[varys|Varys]] a portare la notizia a [[tyrion-lannister|Tyrion]], e cerca di spiegargli come sia morto Cortnay: suggerisce che sia stata la magia, ma Tyrion non gli crede. Varys gli racconta di aver odiato la magia da quando uno stregone lo castrò, e dice di volere Stannis morto se è vero che la pratica. Tyrion pensa piuttosto che Stannis abbia assoldato un abile assassino delle Città Libere.',
        en: 'Ser Cortnay Penrose is dead, and Storm’s End has fallen to [[stannis-baratheon|Stannis]]. It is [[varys|Varys]] who brings the news to [[tyrion-lannister|Tyrion]], and he tries to tell him how Cortnay died: he suggests it was magic, but Tyrion does not believe him. Varys tells him he has hated magic since a sorcerer gelded him, and that he means to see Stannis dead if Stannis truly practices it. Tyrion thinks it more likely that Stannis hired a skilled assassin from the Free Cities.',
      },
    ),
  ],
  // Robb’s war, the riverlands and Harrenhal (#1486). Alton and Talisa are
  // the show’s records, Cleos, Chiswyck, Weese and Vargo Hoat the books’.
  // The show’s Amory and Tickler die in the episodes that name them, so
  // their show stories end with their deaths. A book story sits at the
  // episode that adapts its chapter’s events, or at the record’s show gate
  // when that is later; a show story sits at the chapter its scene adapts,
  // or later where a linked record opens later in the books.
  'alton-lannister': [
    onScreen(
      [11, 81],
      { it: 'L’inviato di Robb', en: 'Robb’s envoy' },
      {
        it: 'Ser Alton Lannister, cugino dei Lannister, è stato fatto prigioniero combattendo contro l’esercito del Nord. [[robb-stark|Robb Stark]] lo manda ad Approdo del Re con le sue condizioni: la liberazione delle sorelle, le ossa del padre, e l’indipendenza del Nord e delle Terre dei Fiumi. Alton trova onorevoli le prime richieste ma dubita del resto, e ricorda a Robb che [[joffrey-baratheon|Joffrey]] è un Baratheon. Robb risponde: “Davvero?”',
        en: 'Ser Alton Lannister, a cousin of the Lannisters, was taken prisoner fighting the northern army. [[robb-stark|Robb Stark]] sends him to King’s Landing with his terms: the release of his sisters, his father’s bones, and a free North and riverlands. Alton calls the first demands honourable but doubts the rest, and reminds Robb that [[joffrey-baratheon|Joffrey]] is a Baratheon. Robb answers, “Is he?”',
      },
    ),
    onScreen(
      [17, 113],
      { it: 'Il compagno di cella', en: 'The cellmate' },
      {
        it: 'Alton torna da Approdo del Re con il rifiuto di [[cersei-lannister|Cersei]]. [[robb-stark|Robb]], che se lo aspettava, lo fa rinchiudere di nuovo, nella cella di [[jaime-lannister|Jaime]], perché i recinti sono pieni. Alton racconta a Jaime del torneo in cui gli fece da scudiero, e Jaime ricorda che Alton fu uno scudiero migliore di quanto lo fosse stato lui. Quando Alton si avvicina per sentire il piano di fuga, Jaime gli dice che l’unica cosa che deve fare è morire, e lo uccide a colpi di catena.',
        en: 'Alton returns from King’s Landing with [[cersei-lannister|Cersei]]’s refusal. [[robb-stark|Robb]], who expected it, has him locked up again, in [[jaime-lannister|Jaime]]’s cell because the pens are full. Alton tells Jaime of the tourney where he served as his squire, and Jaime remembers him as a better squire than he himself ever was. When Alton leans in to hear Jaime’s plan of escape, Jaime tells him that all he has to do is die, and beats him to death with his chains.',
      },
    ),
  ],
  'cleos-frey': [
    inBooks(
      [11, 81],
      { it: 'Un inviato da Delta delle Acque', en: 'An envoy from Riverrun' },
      {
        it: 'Ser Cleos Frey, figlio della sorella di lord [[tywin-lannister|Tywin]], è stato catturato con [[jaime-lannister|Jaime]] nel Bosco dei Sussurri. Nella sala di Delta delle Acque scatta in piedi quando [[grey-wind|Vento Grigio]] lo annusa, e il [[greatjon-umber|Greatjon Umber]] lo corregge perché chiama [[robb-stark|Robb]] “mio signore” invece di “Vostra Grazia”. Robb, che lo considera un Lannister, lo manda dalla regina Cersei con le sue condizioni, e Cleos giura sul suo onore di cavaliere di tornare con la risposta.',
        en: 'Ser Cleos Frey, the son of Lord [[tywin-lannister|Tywin]]’s sister, was taken with [[jaime-lannister|Jaime]] in the Whispering Wood. In the hall of Riverrun he scrambles to his feet when [[grey-wind|Grey Wind]] sniffs at him, and the [[greatjon-umber|Greatjon]] corrects him for calling [[robb-stark|Robb]] “my lord” instead of “Your Grace”. Robb, who counts him a Lannister, sends him to Queen Cersei with his terms, and Cleos swears on his knighthood to come back with her answer.',
      },
    ),
    inBooks(
      [12, 99],
      { it: 'La risposta della corte', en: 'The court’s answer' },
      {
        it: 'Ad Approdo del Re il gran maestro [[pycelle|Pycelle]] dice a Cleos che le condizioni di [[robb-stark|Robb]] non si possono accettare, e [[tyrion-lannister|Tyrion]] gli dà quelle della corte: Robb deve giurare fedeltà, liberare Jaime e mandare ostaggi, e riavrà le ossa del padre come segno di buona fede. Cleos chiede delle sorelle di Robb e si sente rispondere che torneranno a casa quando Jaime sarà libero. Riparte quel pomeriggio con una scorta di cento guardie dei Lannister, tra cui Tyrion ha nascosto quattro uomini suoi.',
        en: 'In King’s Landing, Grand Maester [[pycelle|Pycelle]] tells Cleos that [[robb-stark|Robb]]’s terms cannot be accepted, and [[tyrion-lannister|Tyrion]] gives him the court’s own: Robb must swear fealty, free Jaime and send hostages, and he will have his father’s bones as a sign of good faith. Cleos asks about Robb’s sisters and is told they will come home when Jaime is released. He leaves that afternoon with an escort of a hundred Lannister guardsmen, among whom Tyrion has hidden four men of his own.',
      },
    ),
    inBooks(
      [17, 119],
      { it: 'Vino in cella', en: 'Wine in the cell' },
      {
        it: 'Quattro uomini della scorta di Cleos hanno cercato di liberare [[jaime-lannister|Jaime]] a Delta delle Acque e sono stati impiccati, e Cleos è di nuovo prigioniero. [[catelyn-stark|Catelyn]] gli manda del vino e lo interroga quando è ubriaco, ma Cleos sa poco di utile. A corte ha visto solo [[sansa-stark|Sansa]], ed era sciupata, così Catelyn si chiede se [[arya-stark|Arya]] sia nascosta o morta.',
        en: 'Four men from Cleos’s escort tried to free [[jaime-lannister|Jaime]] at Riverrun and were hanged, and Cleos is a prisoner again. [[catelyn-stark|Catelyn]] sends him wine and questions him once he is drunk, but he knows little of use. At court he saw only [[sansa-stark|Sansa]], and she looked drawn, which leaves Catelyn wondering whether [[arya-stark|Arya]] is being hidden or is dead.',
      },
    ),
  ],
  'talisa-maegyr': [
    onScreen(
      [16, 100],
      { it: 'La guaritrice di Volantis', en: 'The healer from Volantis' },
      {
        it: 'Talisa è una guaritrice di Volantis che cura allo stesso modo i feriti dei Lannister e degli Stark. Dopo una battaglia a ovest ha amputato la gamba di un soldato mentre [[robb-stark|Robb Stark]] lo teneva fermo, e ha detto a Robb che gli uomini che ha sconfitto erano ragazzi arruolati a forza. Da allora segue il suo esercito. Robb indovina che è di nobile famiglia e la presenta a sua madre, [[catelyn-stark|Catelyn]]; quando le chiedono della sua famiglia, Talisa dice che si chiama Maegyr. Catelyn ricorda a Robb che è promesso a una Frey.',
        en: 'Talisa is a healer from Volantis who tends Lannister and Stark wounded alike. After a battle in the west she cut off a wounded soldier’s leg while [[robb-stark|Robb Stark]] held him down, and told Robb that the men he beat were conscripted boys. She has followed his army since. Robb guesses that she is highborn, and introduces her to his mother, [[catelyn-stark|Catelyn]]; asked about her family, Talisa says its name is Maegyr. Catelyn reminds Robb that he is promised to a Frey.',
      },
    ),
    onScreen(
      [18, 129],
      { it: 'Il suo passato', en: 'Her past' },
      {
        it: 'Talisa chiede a [[robb-stark|Robb]] dei medicinali, e lui la porta con sé a Crag a procurarseli. Sulla via del ritorno parlano del padre di Robb e del suo fidanzamento, finché arriva la notizia che [[catelyn-stark|Catelyn]] ha liberato [[jaime-lannister|Jaime]]. Quella notte Talisa consola Robb e gli racconta di come uno schiavo salvò suo fratello dall’annegamento, e di come lei lasciò Volantis, una città di schiavi, per aiutare gli altri. Si confessano i loro sentimenti e vanno a letto insieme.',
        en: 'Talisa asks [[robb-stark|Robb]] for medical supplies, and he takes her with him to the Crag to get them. On the way back they talk about his father and his engagement, until word comes that [[catelyn-stark|Catelyn]] has freed [[jaime-lannister|Jaime]]. That night Talisa comforts Robb and tells him how a slave saved her brother from drowning, and how she left Volantis, a city of slaves, to help others. They admit their feelings and sleep together.',
      },
    ),
    onScreen(
      [20, 141],
      { it: 'Sposa in segreto', en: 'Married in secret' },
      {
        it: '[[robb-stark|Robb]] dice a sua madre, [[catelyn-stark|Catelyn]], che ama Talisa e che non sposerà una Frey, nonostante gli avvertimenti di lei sul giuramento che ha fatto. Quella notte, davanti a un septon, Talisa e Robb si sposano in segreto e si promettono la vita l’uno all’altra.',
        en: '[[robb-stark|Robb]] tells his mother, [[catelyn-stark|Catelyn]], that he loves Talisa and will not marry a Frey, despite her warnings about the oath he swore. That night, before a septon, Talisa and Robb are married in secret and pledge their lives to each other.',
      },
    ),
  ],
  'amory-lorch': [
    onScreen(
      [16, 88],
      { it: 'La lettera', en: 'The letter' },
      {
        it: "Ser Amory Lorch, cavaliere al servizio dei Lannister, ha guidato gli uomini che hanno attaccato le reclute di [[yoren|Yoren]] e ha ucciso lui stesso Yoren. A Harrenhal [[tywin-lannister|Tywin]] lo rimprovera per aver mandato una lettera al nemico, perché Amory non sa leggere bene. Quando Amory sorprende la coppiera di Tywin, [[arya-stark|Arya]], con una lettera presa dal tavolo del suo signore, va a riferirglielo. Cade morto sulla soglia delle stanze di Tywin, colpito al collo da un dardo avvelenato di [[jaqen-hghar|Jaqen H'ghar]].",
        en: "Ser Amory Lorch, a knight in the Lannisters’ service, led the men who attacked [[yoren|Yoren]]’s recruits and killed Yoren himself. At Harrenhal [[tywin-lannister|Tywin]] berates him for sending a letter to the enemy because Amory cannot read properly. When Amory catches Tywin’s cupbearer, [[arya-stark|Arya]], carrying a letter from her lord’s table, he goes to tell him. He falls dead on the threshold of Tywin’s chambers, struck in the neck by a poisoned dart from [[jaqen-hghar|Jaqen H'ghar]].",
      },
    ),
    inBooks(
      [16, 88],
      { it: 'In nome del re', en: 'In the king’s name' },
      {
        it: 'Ser Amory Lorch, un cavaliere tarchiato con una manticora sullo scudo, arriva al fortino dove [[yoren|Yoren]] ha messo al riparo le reclute, mentre i suoi uomini incendiano il villaggio sull’Occhio degli Dei. Si presenta come alfiere di lord [[tywin-lannister|Tywin Lannister]] e ordina di aprire il cancello in nome del vero re, [[joffrey-baratheon|Joffrey]]. Yoren rifiuta tre volte. Amory li dichiara tutti ribelli, ragazzi o no, e ordina ai suoi uomini di dare l’assalto alle mura e uccidere tutti.',
        en: 'Ser Amory Lorch, a stout knight with a manticore on his shield, rides up to the holdfast where [[yoren|Yoren]] has sheltered his recruits, while his men burn the town on the Gods Eye. He names himself bannerman to Lord [[tywin-lannister|Tywin Lannister]] and orders the gate opened in the name of the true king, [[joffrey-baratheon|Joffrey]]. Yoren refuses three times. Amory declares them all rebels, boys or not, and orders his men to storm the walls and kill everyone.',
      },
    ),
    inBooks(
      [18, 112],
      { it: 'Castellano', en: 'Castellan' },
      {
        it: "Amory è arrivato a Harrenhal con meno uomini di prima, molti dei quali feriti, dopo aver inseguito [[beric-dondarrion|Beric Dondarrion]] intorno all’Occhio degli Dei; [[jaqen-hghar|Jaqen H'ghar]], [[rorge|Rorge]] e [[biter|Mordente]] erano in coda alla sua colonna. Quando l’esercito di [[tywin-lannister|Tywin]] parte, Tywin lascia Amory come castellano di Harrenhal, con i suoi uomini e con i Bravi Camerati di [[vargo-hoat|Vargo Hoat]], rimasti a procurare provviste.",
        en: "Amory rode into Harrenhal with fewer men than before, many of them wounded, after chasing [[beric-dondarrion|Beric Dondarrion]] around the Gods Eye; [[jaqen-hghar|Jaqen H'ghar]], [[rorge|Rorge]] and [[biter|Biter]] rode at the end of his column. When [[tywin-lannister|Tywin]]’s host marches out, Tywin leaves Amory as castellan of Harrenhal, with his own men and with [[vargo-hoat|Vargo Hoat]]’s Brave Companions, who stay behind to forage.",
      },
    ),
    inBooks(
      [16, 121],
      { it: 'La fossa dell’orso', en: 'The bear pit' },
      {
        it: "I Bravi Camerati tornano con cento prigionieri del Nord e il loro comandante, Robett Glover, e Amory li fa rinchiudere in una cella sotto la Torre della Vedova. Quella notte [[jaqen-hghar|Jaqen H'ghar]] e [[rorge|Rorge]], due dei suoi uomini, aiutano a liberarli, e i mercenari di [[vargo-hoat|Vargo Hoat]] si rivoltano contro gli uomini dell’ovest. Quando [[roose-bolton|Roose Bolton]] prende Harrenhal, [[arya-stark|Arya]] guarda gli uomini di Vargo portare Amory nudo per il castello e gettarlo in pasto a un orso in gabbia.",
        en: "The Brave Companions return with a hundred northern prisoners and their commander, Robett Glover, and Amory has them locked in a cell beneath the Widow’s Tower. That night [[jaqen-hghar|Jaqen H'ghar]] and [[rorge|Rorge]], two of his own men, help free them, and [[vargo-hoat|Vargo Hoat]]’s sellswords turn on the westermen. When [[roose-bolton|Roose Bolton]] takes Harrenhal, [[arya-stark|Arya]] watches Vargo’s men parade Amory naked through the castle and feed him to a caged bear.",
      },
    ),
  ],
  'polliver': [
    onScreen(
      [14, 100],
      { it: 'Ago', en: 'Needle' },
      {
        it: 'Polliver è un uomo d’arme dei Lannister che ha preso Ago, la spada di [[arya-stark|Arya]], quando la sua banda ha attaccato le reclute con cui lei viaggiava, e con quella spada ha ucciso un ragazzo ferito che chiedeva di essere portato. A Harrenhal sorveglia i prigionieri di [[gregor-clegane|ser Gregor Clegane]], picchia una vecchia che chiede del pane e fa la guardia a [[gendry|Gendry]] durante la tortura. Quando arriva [[tywin-lannister|Tywin Lannister]], Polliver vede Arya guardare Ago alla sua cintura e ordina al “ragazzo” di inginocchiarsi; Tywin capisce che è una ragazza e dà dell’idiota a Polliver.',
        en: 'Polliver is a Lannister man-at-arms who took [[arya-stark|Arya]]’s sword, Needle, when his band attacked the recruits she was travelling with, and stabbed a wounded boy with it when the boy asked to be carried. At Harrenhal he guards Ser [[gregor-clegane|Gregor Clegane]]’s prisoners, beats an old woman who asks for bread, and stands over [[gendry|Gendry]] while he is tortured. When [[tywin-lannister|Tywin Lannister]] arrives, Polliver sees Arya looking at Needle on his belt and orders “the boy” to kneel; Tywin sees she is a girl and calls Polliver an idiot.',
      },
    ),
    inBooks(
      [14, 100],
      { it: 'La spada al fianco', en: 'The sword at his hip' },
      {
        it: 'Polliver, un uomo d’arme di [[gregor-clegane|ser Gregor Clegane]] con la barba nera e la testa calva, ha preso Ago ad [[arya-stark|Arya]] quando è stata catturata, e ora lo porta al fianco. È tra gli uomini che portano i prigionieri dall’Occhio degli Dei a Harrenhal, con [[chiswyck|Chiswyck]] e il Tickler. Arya lo odia perché le ha preso la spada, e il suo è uno dei nomi che sussurra ogni notte.',
        en: 'Polliver, a black-bearded, balding man-at-arms of Ser [[gregor-clegane|Gregor Clegane]], took Needle from [[arya-stark|Arya]] when she was caught, and now wears it at his hip. He is one of the men marching the prisoners from the Gods Eye to Harrenhal, with [[chiswyck|Chiswyck]] and the Tickler. Arya hates him for taking her sword, and his is one of the names she whispers every night.',
      },
    ),
  ],
  'tickler': [
    inBooks(
      [15, 100],
      { it: 'L’uomo qualunque', en: 'The ordinary man' },
      {
        it: 'Il Tickler è un uomo dall’aspetto qualunque tra i soldati di [[gregor-clegane|ser Gregor Clegane]]. In un villaggio sull’Occhio degli Dei interroga il prigioniero che Gregor sceglie ogni mattina, a volte aiutato da [[chiswyck|Chiswyck]], chiedendo del cibo e dei beni nascosti e di [[beric-dondarrion|Beric Dondarrion]], finché il prigioniero non muore. Durante la marcia verso Harrenhal è più silenzioso degli altri, e [[arya-stark|Arya]] lo trova quasi troppo spaventoso per odiarlo, anche se sussurra il suo nome con gli altri. Con lui c’è [[polliver|Polliver]].',
        en: 'The Tickler is an ordinary-looking man among Ser [[gregor-clegane|Gregor Clegane]]’s soldiers. In a village on the Gods Eye he questions the prisoner Gregor picks each morning, sometimes helped by [[chiswyck|Chiswyck]], asking about hidden food and valuables and about [[beric-dondarrion|Beric Dondarrion]], until the prisoner dies. On the march to Harrenhal he is quieter than most, and [[arya-stark|Arya]] finds him almost too frightening to hate, though she whispers his name with the rest. [[polliver|Polliver]] rides with him.',
      },
    ),
    onScreen(
      [15, 104],
      { it: 'Domande a Harrenhal', en: 'Questions at Harrenhal' },
      {
        it: "Il Tickler è il torturatore degli uomini di [[gregor-clegane|ser Gregor Clegane]] a Harrenhal. Ogni giorno interroga un prigioniero scelto da Gregor, con un topo in un secchio arroventato legato al petto, chiedendo dell’oro nascosto e della Fratellanza, e va avanti finché il prigioniero non muore. [[gendry|Gendry]] si salva quando [[tywin-lannister|Tywin]] fa smettere la tortura. [[arya-stark|Arya]] dà il nome del Tickler a [[jaqen-hghar|Jaqen H'ghar]] come prima delle tre morti, e il Tickler viene trovato nel cortile con il collo spezzato.",
        en: "The Tickler is the torturer among Ser [[gregor-clegane|Gregor Clegane]]’s men at Harrenhal. Each day he questions a prisoner Gregor picks, with a rat in a heated bucket strapped to the chest, asking about hidden gold and the Brotherhood, and goes on until the prisoner dies. [[gendry|Gendry]] is spared when [[tywin-lannister|Tywin]] stops the torture. [[arya-stark|Arya]] gives the Tickler’s name to [[jaqen-hghar|Jaqen H'ghar]] as the first of three deaths, and the Tickler is found in the courtyard with his neck broken.",
      },
    ),
  ],
  'chiswyck': [
    inBooks(
      [14, 100],
      { it: 'Il vecchio Chiswyck', en: 'Jolly old Chiswyck' },
      {
        it: 'Chiswyck è un vecchio uomo d’arme di [[gregor-clegane|ser Gregor Clegane]], con le spalle curve. Ha colpito [[arya-stark|Arya]] alla testa quando è stata catturata, e aiuta il Tickler a interrogare i prigionieri durante la marcia verso Harrenhal. Arya lo odia perché si crede spiritoso. Alla porta di Harrenhal [[hot-pie|Frittella]] non vuole entrare per paura dei fantasmi, e Chiswyck gli dice di unirsi a loro o di diventarne uno.',
        en: 'Chiswyck is an old, stoop-shouldered man-at-arms of Ser [[gregor-clegane|Gregor Clegane]]. He smashed [[arya-stark|Arya]] on the head when she was caught, and helps the Tickler question the prisoners on the march to Harrenhal. Arya hates him for thinking he is funny. At the gate of Harrenhal [[hot-pie|Hot Pie]] does not want to go in for fear of ghosts, and Chiswyck tells him to join them or become one.',
      },
    ),
    inBooks(
      [15, 104],
      { it: 'La ragazza della birreria', en: 'The brewer’s girl' },
      {
        it: "A Harrenhal Chiswyck racconta agli uomini della Montagna di come, tornando dal torneo del Primo Cavaliere, [[gregor-clegane|ser Gregor Clegane]] stuprò la figlia di un birraio davanti al padre e gli pagò per lei una moneta d’argento, e di come Chiswyck fu tra quelli che lo seguirono. [[arya-stark|Arya]] ascolta di nascosto. Due giorni dopo sussurra il suo nome a [[jaqen-hghar|Jaqen H'ghar]], e la terza notte Chiswyck cade dal camminamento delle mura e muore.",
        en: "At Harrenhal Chiswyck tells the Mountain’s men how, on the way back from the Hand’s tourney, Ser [[gregor-clegane|Gregor Clegane]] raped a brewer’s daughter in front of her father and paid him a silver for her, and how Chiswyck took his turn after him. [[arya-stark|Arya]] overhears. Two days later she whispers his name to [[jaqen-hghar|Jaqen H'ghar]], and on the third night Chiswyck falls from the wallwalk to his death.",
      },
    ),
  ],
  'weese': [
    inBooks(
      [14, 104],
      { it: 'Il sottointendente', en: 'The understeward' },
      {
        it: 'Weese è il sottointendente della Torre del Lamento, a Harrenhal, un uomo tarchiato con un foruncolo sul naso. Dice ai servi che gli vengono affidati che da loro vuole sentire solo odore di paura. [[arya-stark|Arya]] fa le sue commissioni, porta acqua, cibo e messaggi, e Weese la picchia al minimo pretesto, una volta fino a farla sanguinare perché è tornata senza aver chiesto dei rammendi. Minaccia di dare in pasto alla propria cagna la lingua di Arya. Arya aggiunge il suo nome alla lista.',
        en: 'Weese is the understeward of the Wailing Tower at Harrenhal, a squat man with a carbuncle on his nose. He tells the servants given to him that he wants to smell nothing on them but fear. [[arya-stark|Arya]] runs his errands, carrying water, food and messages, and he beats her at the slightest provocation, once bloody when she comes back without asking about the mending. He threatens to feed her tongue to his dog. She adds his name to her list.',
      },
    ),
    inBooks(
      [16, 112],
      { it: 'La sua cagna', en: 'His own dog' },
      {
        it: "Weese fa correre [[arya-stark|Arya]] con i suoi messaggi, senza mai sigillarli perché non sa che lei sa leggere, e minaccia di darla a [[vargo-hoat|Vargo Hoat]] se scappa. La schiaffeggia perché è lenta, e di nuovo perché fissa il cappone che lui divide con una donna. Arya sussurra il suo nome a [[jaqen-hghar|Jaqen H'ghar]]. Il giorno in cui l’esercito di [[tywin-lannister|Tywin]] parte, Weese viene trovato morto, con la sua cagna sul petto che gli strappa la faccia.",
        en: "Weese keeps [[arya-stark|Arya]] running messages, never sealing them because he does not know she can read, and threatens to give her to [[vargo-hoat|Vargo Hoat]] if she runs. He slaps her for being slow, and again for staring at the capon he shares with a woman. Arya whispers his name to [[jaqen-hghar|Jaqen H'ghar]]. The day [[tywin-lannister|Tywin]]’s host marches out, Weese is found dead with his own dog on his chest, tearing at his face.",
      },
    ),
  ],
  'vargo-hoat': [
    inBooks(
      [15, 104],
      { it: 'I Bravi Camerati', en: 'The Brave Companions' },
      {
        it: 'Vargo Hoat, altissimo e magro come un bastone, guida i Bravi Camerati, mercenari al soldo di lord [[tywin-lannister|Tywin]]. Arrivano a Harrenhal e vengono alloggiati nella Torre della Vedova. La prima notte uno scudiero viene ucciso e due mercenari restano feriti in una rissa, e Tywin li fa impiccare entrambi. [[weese|Weese]] avverte [[arya-stark|Arya]] che è meglio per lei non conoscerli. Dopo poco la compagnia riparte per le sue razzie.',
        en: 'Vargo Hoat, very tall and thin as a stick, leads the Brave Companions, sellswords in Lord [[tywin-lannister|Tywin]]’s pay. They arrive at Harrenhal and are housed in the Widow’s Tower. On their first night a squire is killed and two of the sellswords are wounded in a brawl, and Tywin hangs them both. [[weese|Weese]] warns [[arya-stark|Arya]] that she does not want to know them. Before long the company rides out again to raid.',
      },
    ),
    inBooks(
      [18, 121],
      { it: 'Il voltagabbana', en: 'The turncoat' },
      {
        it: 'Vargo Hoat torna a Harrenhal con cento prigionieri del Nord, tra cui il loro comandante, Robett Glover, e dice che [[roose-bolton|Roose Bolton]] è fuggito. [[amory-lorch|Ser Amory Lorch]], ora castellano, li fa rinchiudere in una cella. Quella notte i Bravi Camerati si rivoltano contro gli uomini dell’ovest, e gli uomini del Nord vengono liberati. Il giorno dopo Vargo consegna il castello a Roose, che aveva comprato i suoi servigi: i prigionieri erano un inganno. Gli uomini di Vargo portano Amory nudo per il castello e lo gettano in pasto a un orso in gabbia.',
        en: 'Vargo Hoat returns to Harrenhal with a hundred northern prisoners, among them their commander, Robett Glover, and says that [[roose-bolton|Roose Bolton]] has fled. Ser [[amory-lorch|Amory Lorch]], now castellan, has them locked in a cell. That night the Brave Companions turn on the westermen, and the northmen are freed. The next day Vargo hands the castle to Roose, who had bought his service; the prisoners were a ruse. Vargo’s men parade Amory naked through the castle and feed him to a caged bear.',
      },
    ),
    inBooks(
      [18, 138],
      { it: 'Harrenhal promessa', en: 'Harrenhal promised' },
      {
        it: '[[roose-bolton|Roose Bolton]] tiene Harrenhal con i Bravi Camerati di Vargo Hoat. Molti dei servi che lavoravano per i Lannister sono stati uccisi e le loro teste messe sulle picche. Roose intende tornare a nord e lasciare Harrenhal a Vargo, e dice alla sua coppiera, [[arya-stark|Arya]], che resterà a servire il caprone. Per convincere [[gendry|Gendry]] a fuggire con lei, Arya gli mente dicendo che Vargo vuole tagliare un piede a ogni servo.',
        en: '[[roose-bolton|Roose Bolton]] holds Harrenhal with Vargo Hoat’s Brave Companions. Many of the servants who worked for the Lannisters have been killed and their heads put on spikes. Roose means to go back north and give Harrenhal to Vargo, and tells his cupbearer, [[arya-stark|Arya]], that she will stay to serve the goat. To get [[gendry|Gendry]] to flee with her, Arya lies to him that Vargo means to cut a foot off every servant.',
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
      [14, 103],
      { it: 'Contro la regina', en: 'Defying the queen' },
      {
        it: 'Jacelyn disobbedisce a un ordine dato in nome del re, che [[tyrion-lannister|Tyrion]] ritiene l’ordine della regina di liberare [[pycelle|Pycelle]]. [[lancel-lannister|Ser Lancel]] porta la richiesta di Cersei che Jacelyn sia rimosso e accusato di tradimento. Tyrion lo tiene al suo posto, e fa dire alla regina da Lancel, ormai sua spia, che Lancel crede di poter staccare Jacelyn da Tyrion.',
        en: 'Jacelyn defies a command given in the king’s name, which [[tyrion-lannister|Tyrion]] takes to be the queen’s order to free [[pycelle|Pycelle]]. [[lancel-lannister|Ser Lancel]] brings Cersei’s demand that Jacelyn be removed and charged with treason. Tyrion keeps him, and has Lancel, now his spy, tell the queen that Lancel thinks he can win Jacelyn away from Tyrion.',
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
  // Winterfell and the Iron Islands (#1487). The show and the books tell
  // Winterfell’s fall in their own ways, so every story is one medium’s. The
  // Reeds, the Walders, Ramsay, the Hornwood widow, Aeron, Victarion, Wex,
  // Black Lorren and Farlen have only book stories here: each is the books’
  // record or reaches the show past the stage, and its book stories are
  // ordered at its show gate (Aeron 55, the Reeds 22, Ramsay 32, Wyman 60).
  'balon-greyjoy': [
    inBooks(
      [12, 85],
      { it: 'Una corona regalata', en: 'A crown given' },
      {
        it: 'Balon Greyjoy, lord delle Isole di Ferro, ha chiamato a raccolta i suoi vassalli. Il fratello Aeron, un sacerdote, porta a Pyke il figlio di Balon, [[theon-greyjoy|Theon]], dopo dieci anni come pupillo degli Stark. Balon strappa a Theon la catena d’oro, comprata con l’oro e non con il ferro. La lettera di [[robb-stark|Robb Stark]] gli offre una corona in cambio di un attacco ai Lannister nell’ovest. Balon la brucia e colpisce Theon: ciò che viene dato può essere tolto, e lui pagherà il prezzo del ferro e conquisterà la sua corona.',
        en: 'Balon Greyjoy, Lord of the Iron Islands, has called his banners. His brother Aeron, a priest, brings Balon’s son [[theon-greyjoy|Theon]] to Pyke after ten years as the Starks’ ward. Balon tears off Theon’s gold chain, bought with gold and not with iron. [[robb-stark|Robb Stark]]’s letter offers him a crown for an attack on the Lannisters in the west. Balon burns it and strikes Theon: what is given can be taken away, so he will pay the iron price and win his crown by conquest.',
      },
    ),
    onScreen(
      [12, 98],
      { it: 'Il prezzo del ferro', en: 'The iron price' },
      {
        it: 'Balon Greyjoy riceve a Pyke il figlio [[theon-greyjoy|Theon]], dopo nove anni con gli Stark, e si chiede che cosa gli abbiano restituito. Theon gli consegna l’offerta di alleanza di [[robb-stark|Robb Stark]], con una corona in cambio. Balon lo interrompe e gli strappa dal mantello il fermaglio d’oro: non l’ha pagato con il prezzo del ferro. Balon saluta con calore la figlia [[asha-greyjoy|Yara]] e la mette al di sopra del figlio. Poi brucia la lettera: nessuno gli regala una corona, se la prenderà.',
        en: 'Balon Greyjoy receives his son [[theon-greyjoy|Theon]] at Pyke after nine years with the Starks, and wonders what they have given back. Theon hands him [[robb-stark|Robb Stark]]’s offer of an alliance, with a crown in return. Balon cuts him short and tears the gold clasp from his cloak: it was not paid for with the iron price. Balon greets his daughter [[asha-greyjoy|Yara]] warmly and sets her above his son. Then he burns the letter: no one gives him a crown, he will take it.',
      },
    ),
    onScreen(
      [13, 98],
      { it: 'Guerra al Nord', en: 'War on the North' },
      {
        it: 'Nel consiglio di guerra Balon rivela il suo piano: attaccare il Nord mentre gli eserciti del Nord combattono contro i Lannister. Dà alla figlia [[asha-greyjoy|Yara]] trenta navi per prendere Deepwood Motte, e al figlio [[theon-greyjoy|Theon]] una sola nave per razziare i villaggi di pescatori della Costa Pietrosa. Quando Theon difende l’alleanza con Robb e gli ricorda che è stato lui a cederlo come pupillo, Balon lo colpisce ed esce. Balon e Yara assistono al battesimo di Theon nella fede del Dio Abissale.',
        en: 'In his war council Balon reveals his plan: to attack the North while its armies fight the Lannisters. He gives his daughter [[asha-greyjoy|Yara]] thirty ships to take Deepwood Motte, and his son [[theon-greyjoy|Theon]] a single ship to raid the fishing villages of the Stony Shore. When Theon argues for the alliance with Robb and reminds him that he gave his son away as a ward, Balon strikes him and walks out. Balon and Yara watch Theon’s baptism in the Drowned God’s faith.',
      },
    ),
    inBooks(
      [13, 98],
      { it: 'Il piano nel solario', en: 'The plan in the solar' },
      {
        it: 'Dopo un banchetto per i lord e i capitani delle isole, Balon convoca [[theon-greyjoy|Theon]] nel suo solario con i fratelli [[victarion-greyjoy|Victarion]] e Aeron, e non vuole sentire i consigli di Theon. Theon prenderà otto navi per razziare la costa del Nord, con Aeron al suo fianco. La figlia [[asha-greyjoy|Asha]] porterà trenta navi a Deepwood Motte, e Victarion colpirà Moat Cailin per chiudere a Robb la strada del Nord. Grande Inverno potrà resistere un anno, dice Balon, ma il resto sarà loro.',
        en: 'After a feast for the lords and captains of the isles, Balon calls [[theon-greyjoy|Theon]] to his solar with his brothers [[victarion-greyjoy|Victarion]] and Aeron, and will not hear Theon’s counsel. Theon is to take eight ships and raid the coast of the North, with Aeron beside him. His daughter [[asha-greyjoy|Asha]] will take thirty ships to Deepwood Motte, and Victarion will strike at Moat Cailin to shut Robb out of the North. Winterfell may hold for a year, Balon says, but the rest will be theirs.',
      },
    ),
  ],
  'asha-greyjoy': [
    onScreen(
      [12, 98],
      { it: 'La cavalcata fino a Pyke', en: 'The ride to Pyke' },
      {
        it: 'Quando [[theon-greyjoy|Theon]] sbarca a Lordsport senza nessuno ad accoglierlo, una donna gli offre un passaggio fino a Pyke. Lui cerca di sedurla per tutto il viaggio, e lei non gli dice chi è. Al castello entra mentre Theon è da [[balon-greyjoy|Balon]], che la saluta con calore: è Yara, la sorella di Theon. Balon la mette al di sopra del figlio, e sarà lei a guidare il suo attacco. Yara lo saluta chiamandolo fratello, e dice che racconterà ai nipoti del suo ritorno a casa.',
        en: 'When [[theon-greyjoy|Theon]] lands at Lordsport with no one to meet him, a woman offers him a ride to Pyke. He tries to seduce her all the way, and she does not tell him who she is. At the castle she walks in on his meeting with [[balon-greyjoy|Balon]], who greets her warmly: she is Yara, Theon’s sister. Balon sets her above his son, and she will lead his attack. She greets Theon as her brother, and says his homecoming is one she will tell her grandchildren about.',
      },
    ),
    onScreen(
      [13, 98],
      { it: 'Trenta navi', en: 'Thirty ships' },
      {
        it: 'Nel consiglio di guerra di [[balon-greyjoy|Balon]] Yara riceve trenta navi lunghe per prendere Deepwood Motte, mentre il fratello [[theon-greyjoy|Theon]] ne ottiene una sola per razziare i villaggi di pescatori. Lei rigira il coltello nella piaga dicendogli il nome della nave. Quando Theon difende l’alleanza con Robb, Yara lo accusa di volere che il padre si inchini alla sua altra famiglia. Poi guarda con Balon il battesimo di Theon nella fede del Dio Abissale.',
        en: 'In [[balon-greyjoy|Balon]]’s war council Yara is given thirty longships to take Deepwood Motte, while her brother [[theon-greyjoy|Theon]] gets a single ship to raid fishing villages. She twists the knife by telling him the ship’s name. When Theon pleads for the alliance with Robb, she accuses him of wanting their father to bow to his other family. Yara watches with Balon as Theon is baptised in the faith of the Drowned God.',
      },
    ),
    inBooks(
      [13, 98],
      { it: 'Esgred', en: 'Esgred' },
      {
        it: 'A Lordsport una donna che si fa chiamare Esgred, moglie di un costruttore di navi, incontra [[theon-greyjoy|Theon]] accanto alla sua nuova nave lunga. Lui flirta con lei, lei lo lascia fare, e cavalcano insieme fino a Pyke. Lì uno stalliere la chiama per nome: è Asha, sua sorella, che prima voleva capire chi fosse lui. Al banchetto siede alla destra di [[balon-greyjoy|Balon]], spacca il tagliere di Theon con un’ascia afferrata al volo e la chiama suo marito. Nel solario il padre le affida trenta navi per prendere Deepwood Motte.',
        en: 'At Lordsport a woman who calls herself Esgred, a shipwright’s wife, meets [[theon-greyjoy|Theon]] by his new longship. He flirts with her, she lets him, and they ride double to Pyke. There a stableboy calls her by her name: she is Asha, his sister, who wanted to see who he was first. At the feast she sits at [[balon-greyjoy|Balon]]’s right, splits Theon’s trencher with a thrown axe and calls it her husband. In the solar her father gives her thirty ships to take Deepwood Motte.',
      },
    ),
    onScreen(
      [15, 111],
      { it: 'Una ciurma che aspetta', en: 'A crew that waits' },
      {
        it: 'Yara raduna le sue navi e cavalca fino a Lordsport per raggiungere la flotta. Lì trova il fratello [[theon-greyjoy|Theon]] alle prese con la ciurma indisciplinata della sua unica nave, e ne approfitta per schernirlo ancora. I suoi uomini, dice, la aspetterebbero un anno, se servisse. La ciurma di Theon non gli deve una lealtà simile.',
        en: 'Yara gathers her ships and rides to Lordsport to join her fleet. There she finds her brother [[theon-greyjoy|Theon]] struggling with the unruly crew of his one ship, and she takes the chance to mock him again. Her own men, she says, would wait a year for her if they had to. Theon’s crew owes him no such loyalty.',
      },
    ),
    onScreen(
      [18, 130],
      { it: 'Venti uomini', en: 'Twenty men' },
      {
        it: 'Yara ha preso Deepwood Motte. Il fratello [[theon-greyjoy|Theon]], che tiene Grande Inverno, le ha chiesto cinquecento uomini, e si dice che abbia ucciso i giovani Stark, [[bran-stark|Bran]] e [[rickon-stark|Rickon]]. Yara arriva a Grande Inverno con venti uomini soltanto. Il castello è troppo lontano dal mare per rifornirlo, gli dice, e tutto il Nord lo vuole morto. Ricorda com’era Theon da bambino, e lo prega di tornare a casa con lei invece di morire così lontano. Theon si rifiuta di rinunciare alla sua conquista.',
        en: 'Yara has taken Deepwood Motte. Her brother [[theon-greyjoy|Theon]], who holds Winterfell, has asked her for five hundred men, and word has spread that he has killed the young Starks, [[bran-stark|Bran]] and [[rickon-stark|Rickon]]. She comes to Winterfell with only twenty. The castle is too far from the sea to supply, she tells him, and the whole North wants him dead. She remembers him as a child, and begs him to come home with her rather than die so far away. Theon refuses to give up his prize.',
      },
    ),
    inBooks(
      [18, 130],
      { it: 'La scelta saggia', en: 'The wise course' },
      {
        it: 'Asha tiene Deepwood Motte, e arriva a Grande Inverno con venti uomini soltanto. [[theon-greyjoy|Theon]] la trova seduta sul seggio alto degli Stark. Lei lo rimprovera per aver ucciso i ragazzi Stark e averne messo le teste sulle porte. Sa già che [[dagmer|Dagmer]] ha perso a Piazza di Torrhen e sta riportando i superstiti verso la costa. La scelta saggia, dice, era radere al suolo il castello e portare a Pyke i due principi come ostaggi. Theon si rifiuta di partire con lei, e Asha gli dice che terrà Grande Inverno per il resto della sua vita.',
        en: 'Asha holds Deepwood Motte, and comes to Winterfell with only twenty men. [[theon-greyjoy|Theon]] finds her in the Starks’ high seat. She scolds him for killing the Stark boys and mounting their heads on the gates. She already knows that [[dagmer|Dagmer]] lost at Torrhen’s Square and is leading the survivors back to the coast. The wise course, she says, was to raze the castle and take the two princes to Pyke as hostages. Theon refuses to leave with her, and she tells him he will hold Winterfell for the rest of his life.',
      },
    ),
  ],
  'aeron-greyjoy': [
    inBooks(
      [55, 85],
      { it: 'Il sacerdote del Dio Abissale', en: 'The Drowned God’s priest' },
      {
        it: 'Quando [[theon-greyjoy|Theon]] sbarca a Lordsport non lo aspetta nessuna scorta, solo un cupo sacerdote del Dio Abissale: lo zio Aeron, un tempo uomo allegro, diventato devoto dopo essere quasi annegato in una tempesta. Aeron fa inginocchiare Theon nel fango e gli versa acqua di mare sul capo. Tiene segreti i motivi per cui [[balon-greyjoy|Balon]] ha chiamato i vassalli, e dice a Theon che è uno sciocco se crede che Balon lascerà mai le isole a uno Stark. A Pyke se ne va subito.',
        en: 'When [[theon-greyjoy|Theon]] lands at Lordsport, no escort is waiting, only a grim priest of the Drowned God: his uncle Aeron, once an easygoing man, made holy after he nearly drowned in a storm. Aeron has Theon kneel in the mud and pours seawater over his head. He keeps [[balon-greyjoy|Balon]]’s reasons for calling the banners secret, and tells Theon he is a fool if he thinks Balon will ever hand the isles to a Stark. At Pyke he leaves at once.',
      },
    ),
    inBooks(
      [55, 98],
      { it: 'Nel solario', en: 'In the solar' },
      {
        it: 'Aeron deve benedire la nuova nave lunga di [[theon-greyjoy|Theon]]. Dopo il banchetto a Pyke siede nel solario di [[balon-greyjoy|Balon]] con il fratello [[victarion-greyjoy|Victarion]], mentre Balon espone la guerra: [[asha-greyjoy|Asha]] prenderà Deepwood Motte e Victarion Moat Cailin. A Theon toccano otto navi per razziare la costa del Nord, e Aeron salperà con lui. Theon lo prende come un segno che il padre non si fida di lui.',
        en: 'Aeron is to bless [[theon-greyjoy|Theon]]’s new longship. After the feast at Pyke he sits in [[balon-greyjoy|Balon]]’s solar with his brother [[victarion-greyjoy|Victarion]] while Balon lays out the war: [[asha-greyjoy|Asha]] will take Deepwood Motte and Victarion Moat Cailin. Theon gets eight ships to raid the coast of the North, and Aeron is to sail with him. Theon takes it as a sign that his father does not trust him.',
      },
    ),
    inBooks(
      [55, 111],
      {
        it: 'Un’offerta al Dio Abissale',
        en: 'An offering to the Drowned God',
      },
      {
        it: 'Gli uomini di [[theon-greyjoy|Theon]] hanno sconfitto sulla Costa Pietrosa una banda di giovani lancieri del Nord e ne hanno catturato il capo, Benfred Tallhart. Aeron pretende che il prigioniero sia offerto al Dio Abissale, e Theon cede, anche se si rifiuta di occuparsene di persona. Benfred viene annegato. Theon intende lasciare ad Aeron sei navi per continuare a razziare la costa, mentre manda [[dagmer|Dagmer]] contro Piazza di Torrhen.',
        en: 'The men of [[theon-greyjoy|Theon]] have beaten a band of young northern lancers on the Stony Shore and taken their leader, Benfred Tallhart. Aeron insists that the captive be given to the Drowned God, and Theon gives in, though he will not see to it himself. Benfred is drowned. Theon means to leave Aeron six ships to go on raiding the coast while he sends [[dagmer|Dagmer]] against Torrhen’s Square.',
      },
    ),
  ],
  'victarion-greyjoy': [
    inBooks(
      [13, 98],
      { it: 'Verso Moat Cailin', en: 'Toward Moat Cailin' },
      {
        it: 'Victarion Greyjoy, fratello minore di lord [[balon-greyjoy|Balon]], è un capitano instancabile e ligio al dovere. Ha prestato il suo timoniere al nipote [[theon-greyjoy|Theon]] per la nuova nave di Theon. Dopo il banchetto a Pyke siede nel solario di Balon con l’altro fratello, Aeron, mentre Balon espone la guerra. Victarion guiderà l’attacco principale, risalendo i fiumi fino a Moat Cailin, perché [[robb-stark|Robb Stark]] non possa tornare nel Nord, mentre [[asha-greyjoy|Asha]] prende Deepwood Motte.',
        en: 'Victarion Greyjoy, Lord [[balon-greyjoy|Balon]]’s younger brother, is a tireless and dutiful captain. He has lent his steersman to his nephew [[theon-greyjoy|Theon]] for Theon’s new ship. After the feast at Pyke he sits in Balon’s solar with their brother Aeron as Balon lays out the war. Victarion is to make the main thrust, up the rivers to Moat Cailin, so that [[robb-stark|Robb Stark]] cannot return to the North, while [[asha-greyjoy|Asha]] takes Deepwood Motte.',
      },
    ),
  ],
  'dagmer': [
    onScreen(
      [15, 111],
      { it: 'Il primo ufficiale', en: 'The first mate' },
      {
        it: 'A Lordsport Dagmer si presenta a [[theon-greyjoy|Theon]] come primo ufficiale della sua nave. La ciurma non lo rispetterà, dice, finché Theon non si sarà messo alla prova, e gli uomini di ferro non si limitano a eseguire gli ordini. Theon è stato mandato a razziare i villaggi di pescatori della Costa Pietrosa, e chiede come potrebbe dimostrare qualcosa così. Puntano più in alto: Piazza di Torrhen, la sede di Casa Tallhart, vicino alla costa. Theon capisce che prenderla attirerebbe uomini fuori da Grande Inverno.',
        en: 'Dagmer introduces himself to [[theon-greyjoy|Theon]] at Lordsport as the first mate of Theon’s ship. The crew will not respect Theon, he says, until he proves himself, and the ironborn do not simply follow orders. Theon has been sent to raid fishing villages on the Stony Shore, and asks how that could prove anything. They settle on something bigger: Torrhen’s Square, the seat of House Tallhart, near the coast. Theon sees that taking it would draw men out of Winterfell.',
      },
    ),
    inBooks(
      [15, 111],
      { it: 'Il miglior uomo di Balon', en: 'Balon’s best man' },
      {
        it: 'Dagmer è rimasto a guardia delle navi mentre [[theon-greyjoy|Theon]] sconfiggeva i lancieri del Nord sulla Costa Pietrosa. A bordo della Foamdrinker Dagmer dice di essere sempre stato il miglior uomo di lord [[balon-greyjoy|Balon]], e Theon fa leva sul suo orgoglio lusingandolo. Spiega a Theon che, morti i suoi fratelli, Balon ha imparato a contare su [[asha-greyjoy|Asha]], che non lo ha mai deluso. Poi Theon gli svela il piano: marciare su Piazza di Torrhen senza nascondersi e costruire macchine d’assedio. [[rodrik-cassel|Ser Rodrik]] uscirà da Grande Inverno per soccorrerla. Ma non è Piazza di Torrhen che Theon vuole prendere.',
        en: 'Dagmer stayed with the ships while [[theon-greyjoy|Theon]] beat the northern lancers on the Stony Shore. Aboard Foamdrinker Dagmer says he has always been Lord [[balon-greyjoy|Balon]]’s best man, and Theon plays on that pride with flattery. He tells Theon that with his brothers dead Balon learned to rely on [[asha-greyjoy|Asha]], who has never failed him. Then Theon gives him his plan: march on Torrhen’s Square without hiding, and build siege engines. Ser [[rodrik-cassel|Rodrik]] will ride from Winterfell to its aid. It is not Torrhen’s Square that Theon means to take.',
      },
    ),
    onScreen(
      [16, 120],
      { it: 'Davanti alla ciurma', en: 'Before the crew' },
      {
        it: 'La finta di [[theon-greyjoy|Theon]] su Piazza di Torrhen ha attirato via la guarnigione, e gli uomini di ferro prendono Grande Inverno. Quando [[rodrik-cassel|ser Rodrik Cassel]], catturato mentre tornava, sputa in faccia a Theon, Theon vorrebbe gettarlo in una cella. Dagmer insiste: Rodrik deve pagare il prezzo del ferro, o gli uomini perderanno ogni rispetto per Theon. Theon cede e cala la spada di persona, e gli servono più colpi e un calcio per finire.',
        en: 'The feint of [[theon-greyjoy|Theon]] at Torrhen’s Square has drawn the garrison away, and the ironborn take Winterfell. When Ser [[rodrik-cassel|Rodrik Cassel]] is caught on his way back and spits in Theon’s face, Theon means to throw him in a cell. Dagmer insists that Rodrik must pay the iron price, or the men will lose all respect for Theon. Theon gives in and swings the sword himself, and needs several blows and a kick to finish.',
      },
    ),
    onScreen(
      [17, 124],
      { it: 'Gusci di noce', en: 'Walnut shells' },
      {
        it: 'Quando [[osha|Osha]] fugge con i ragazzi Stark, Dagmer guarda con approvazione [[theon-greyjoy|Theon]] che picchia l’uomo di ferro che ha dato la colpa a Theon. Va a caccia con Theon e i cani. In una fattoria il pastore giura di non aver visto nessuno, ma Dagmer trova gusci di noce rotti, che a [[rickon-stark|Rickon]] piacciono tanto: i ragazzi sono passati di lì. I cani perdono la traccia. Theon torna a Grande Inverno con due corpi bruciati di bambini e dice che sono [[bran-stark|Bran]] e Rickon.',
        en: 'When [[osha|Osha]] escapes with the Stark boys, Dagmer watches with approval as [[theon-greyjoy|Theon]] beats the ironman who blamed Theon for it. He rides with Theon and the hounds on the hunt. At a shepherd’s farm the farmer swears he has seen no one, but Dagmer finds cracked walnut shells, which [[rickon-stark|Rickon]] loves, so the boys have been there. The hounds lose the scent. Theon returns to Winterfell with two burned bodies of children and says they are [[bran-stark|Bran]] and Rickon.',
      },
    ),
    onScreen(
      [18, 130],
      { it: 'Il silenzio del pastore', en: 'The farmer’s silence' },
      {
        it: 'Dagmer ha ucciso due ragazzi orfani della fattoria del pastore, e [[theon-greyjoy|Theon]] ne ha esposto i corpi bruciati facendoli passare per [[bran-stark|Bran]] e [[rickon-stark|Rickon]]. Ora Theon, preso dal rimorso, gli dà dell’oro per il pastore, per ripagarlo del suo dolore. Dagmer risponde che non serve: dopo i ragazzi, ha ucciso anche il pastore e sua moglie. La sorella di Theon, [[asha-greyjoy|Yara]], arriva con venti uomini soltanto e lo esorta a lasciare Grande Inverno, ma Theon rifiuta.',
        en: 'Dagmer killed two orphan boys from the shepherd’s farm, and [[theon-greyjoy|Theon]] showed their burned bodies as [[bran-stark|Bran]] and [[rickon-stark|Rickon]]. Now Theon, feeling some guilt, gives him gold for the shepherd, to pay him for his grief. Dagmer says there is no need: after the boys, he killed the shepherd and his wife too. Theon’s sister [[asha-greyjoy|Yara]] arrives with only twenty men and urges him to leave Winterfell, but he refuses.',
      },
    ),
    inBooks(
      [18, 130],
      {
        it: 'La sconfitta a Piazza di Torrhen',
        en: 'Defeat at Torrhen’s Square',
      },
      {
        it: 'Con l’assedio di Piazza di Torrhen Dagmer ha attirato [[rodrik-cassel|ser Rodrik]] fuori da Grande Inverno, come voleva [[theon-greyjoy|Theon]]. Ora Theon dice alla sorella [[asha-greyjoy|Asha]] che Dagmer ha perso lo scontro. Asha non è sorpresa: sa già che Dagmer sta riportando i superstiti verso la costa, e Theon capisce che lei è informata meglio di lui. Leobald Tallhart si è unito a Rodrik, e gli uomini del Nord si radunano contro Grande Inverno.',
        en: 'With his siege of Torrhen’s Square, Dagmer drew Ser [[rodrik-cassel|Rodrik]] out of Winterfell, as [[theon-greyjoy|Theon]] planned. Now Theon tells his sister [[asha-greyjoy|Asha]] that Dagmer has lost the fight there. Asha is not surprised: she already knows that Dagmer is leading the survivors back to the coast, and Theon sees that she is better informed than he is. Leobald Tallhart has joined Rodrik, and the northmen are gathering against Winterfell.',
      },
    ),
    onScreen(
      [20, 140],
      { it: 'Il colpo alle spalle', en: 'The blow from behind' },
      {
        it: 'Grande Inverno è assediato dagli uomini del Nord al comando del figlio bastardo di [[roose-bolton|Roose Bolton]], e a [[theon-greyjoy|Theon]] restano venti uomini. Quando Theon finisce un discorso infiammato per chiamarli all’ultima battaglia, Dagmer lo stende con un colpo: gli uomini di ferro vogliono consegnarlo agli assedianti e tornare a casa. Dagmer dice che il discorso gli è piaciuto. Quando il maestro [[luwin|Luwin]] cerca di fermarli, Dagmer lo trafigge con una lancia, e gli uomini trascinano via Theon con un sacco sulla testa.',
        en: 'Winterfell is besieged by northmen under the bastard son of [[roose-bolton|Roose Bolton]], and [[theon-greyjoy|Theon]] has twenty men left. When Theon finishes a rousing speech to rally them for a last fight, Dagmer knocks him out cold: the ironborn mean to hand him over to the besiegers and go home. Dagmer says he admired the speech. When Maester [[luwin|Luwin]] tries to stop them, Dagmer stabs him with a spear, and the men drag Theon away with a sack over his head.',
      },
    ),
  ],
  'black-lorren': [
    inBooks(
      [17, 124],
      { it: 'La Porta del Cacciatore', en: 'The Hunter’s Gate' },
      {
        it: 'Black Lorren è uno degli uomini di ferro che tengono Grande Inverno con [[theon-greyjoy|Theon]], e si dice che sia tra i migliori combattenti delle isole. La notte in cui [[bran-stark|Bran]] e [[rickon-stark|Rickon]] spariscono, lui e Urzen mostrano a Theon le due guardie uccise alla Porta del Cacciatore. Su una Theon riconosce il lavoro dei meta-lupi, e intuisce che l’altra l’ha uccisa [[osha|Osha]], aiutata da qualcuno che ha liberato i lupi.',
        en: 'Black Lorren is one of the ironborn who hold Winterfell with [[theon-greyjoy|Theon]], and is said to be among the best fighters of the isles. On the night [[bran-stark|Bran]] and [[rickon-stark|Rickon]] vanish, he and Urzen show Theon the two guards killed at the Hunter’s Gate. On one Theon sees the work of the direwolves, and he guesses that [[osha|Osha]] killed the other, with help from someone who freed the wolves.',
      },
    ),
    inBooks(
      [20, 140],
      { it: 'Il cappio sulle mura', en: 'The noose on the wall' },
      {
        it: 'Quando [[theon-greyjoy|Theon]] offre ai suoi uomini di ferro la scelta tra lasciarlo e morire al suo fianco, Black Lorren segue [[wex-pyke|Wex]] dalla parte di Theon. Gli consiglia di passare a fil di spada la gente del castello prima che si rivolti contro gli uomini di ferro durante i combattimenti. Theon ha un altro compito per lui: durante il colloquio con [[rodrik-cassel|ser Rodrik Cassel]], Lorren mostra sulle mura Beth, la figlia di Rodrik, con un cappio al collo.',
        en: 'When [[theon-greyjoy|Theon]] offers his ironborn the choice of leaving him or dying beside him, Black Lorren follows [[wex-pyke|Wex]] over to Theon’s side. He counsels Theon to put the castle folk to the sword before they turn on the ironborn in the fighting. Theon has another task for him: during the parley with Ser [[rodrik-cassel|Rodrik Cassel]], Lorren shows Rodrik’s daughter Beth on the walls with a noose around her neck.',
      },
    ),
    inBooks(
      [20, 143],
      { it: 'Tra i morti', en: 'Among the dead' },
      {
        it: 'Black Lorren era rimasto accanto a [[theon-greyjoy|Theon]] quando gli altri uomini di ferro avevano lasciato Grande Inverno. Gli uomini di Forte Terrore sono arrivati come falsi amici, hanno preso il castello e gli hanno dato fuoco. Giorni dopo, quando [[bran-stark|Bran]] e i suoi compagni risalgono dalle cripte, trovano tra le rovine diversi uomini di ferro di Theon morti, insieme a uomini con lo stemma di Forte Terrore. Il corpo di Black Lorren è uno di quelli.',
        en: 'Black Lorren stayed beside [[theon-greyjoy|Theon]] when the other ironborn left Winterfell. Men from the Dreadfort came as false friends, took the castle and burned it. Days later, when [[bran-stark|Bran]] and his companions come up from the crypts, they find several of Theon’s ironmen dead among the ruins, along with men bearing the Dreadfort’s badge. Black Lorren’s body is one of them.',
      },
    ),
  ],
  'wex-pyke': [
    inBooks(
      [13, 98],
      { it: 'Lo scudiero', en: 'The squire' },
      {
        it: 'Wex Pyke è lo scudiero di [[theon-greyjoy|Theon]]: Theon lo ha preso con sé come parte del prezzo del suo cavallo da guerra, Smiler. A Lordsport Wex sella il cavallo alla locanda, e Theon cavalca fino a Pyke con una donna che si fa chiamare Esgred. Al castello si scopre che è sua sorella [[asha-greyjoy|Asha]]. Theon sorprende Wex a ghignare e sfoga su di lui la sua rabbia.',
        en: 'Wex Pyke is [[theon-greyjoy|Theon]]’s squire: Theon took him on as part of the price of his warhorse, Smiler. At Lordsport Wex saddles the horse at the inn, and Theon rides to Pyke with a woman called Esgred. At the castle she turns out to be his sister [[asha-greyjoy|Asha]]. Theon catches Wex smirking at him and takes his anger out on the boy.',
      },
    ),
    inBooks(
      [17, 124],
      { it: 'Solo impronte di lupo', en: 'Only pawprints' },
      {
        it: 'A Grande Inverno Wex dorme accanto al letto di [[theon-greyjoy|Theon]]. Nella notte Theon lo manda a controllare [[bran-stark|Bran]] e [[rickon-stark|Rickon]], e Wex torna con la notizia che i due ragazzi sono spariti. Partecipa alla caccia. A un torrente in piena, dove i cani perdono la traccia, è lui ad accorgersi che sulla riva ci sono solo impronte di zampe e nessuna orma umana: i lupi sono entrati in acqua da soli.',
        en: 'Wex sleeps by [[theon-greyjoy|Theon]]’s bed at Winterfell. In the night Theon sends him to check on [[bran-stark|Bran]] and [[rickon-stark|Rickon]], and Wex comes back with the news that both boys are gone. He rides on the hunt for them. At a swollen brook, where the dogs lose the scent, Wex is the one who sees that the bank shows only pawprints and no prints of men: the wolves went into the water alone.',
      },
    ),
    inBooks(
      [20, 140],
      { it: 'Il primo a farsi avanti', en: 'The first to step forward' },
      {
        it: 'Con gli uomini del Nord ammassati fuori da Grande Inverno, [[theon-greyjoy|Theon]] raduna i suoi uomini di ferro nel cortile e offre loro una scelta: lasciarlo o morire al suo fianco. Nessuno risponde, finché Wex non passa dalla parte di Theon. [[black-lorren|Black Lorren]] e altri lo seguono, mentre gli altri lasciano il castello. Poco dopo gli uomini di Forte Terrore prendono Grande Inverno e lo danno alle fiamme.',
        en: 'With the northmen massing outside Winterfell, [[theon-greyjoy|Theon]] assembles his ironborn in the yard and offers them a choice: leave him, or die beside him. No one answers until Wex steps over to Theon’s side. [[black-lorren|Black Lorren]] and others follow him, while the rest leave the castle. Soon after, men from the Dreadfort take Winterfell and put it to the torch.',
      },
    ),
  ],
  'farlen': [
    inBooks(
      [16, 124],
      { it: 'I lupi sbagliati', en: 'The wrong wolves' },
      {
        it: 'Farlen è il maestro dei canili di Grande Inverno. Quando una volta [[bran-stark|Bran]] gli ha chiesto perché i meta-lupi ululano, Farlen gli ha risposto che lo fanno per la libertà. Dopo la fuga di Bran e di [[rickon-stark|Rickon]], [[theon-greyjoy|Theon]] porta lui e i suoi cani a caccia. Davanti ai resti di un alce ucciso dai lupi, Theon chiede se i cani possano seguire le tracce dei lupi sbagliati. Farlen risponde di no. A un torrente la traccia si perde, e il gruppo di Farlen, mandato a valle, non trova nulla.',
        en: 'Farlen is the kennelmaster of Winterfell. When [[bran-stark|Bran]] once asked why the direwolves howl, Farlen told him it was for freedom. After Bran and [[rickon-stark|Rickon]] escape, [[theon-greyjoy|Theon]] takes him and his dogs on the hunt. Over the remains of an elk the wolves killed, Theon asks if the dogs could be on the wrong wolves’ trail. Farlen says they could not. At a brook the scent is lost, and Farlen’s search party, sent downstream, finds nothing.',
      },
    ),
    inBooks(
      [18, 130],
      { it: 'Quattro colpi', en: 'Four blows' },
      {
        it: 'Farlen è morto. Reek ha ucciso tre uomini di ferro di [[theon-greyjoy|Theon]], con il permesso di Theon, perché non potessero raccontare ciò che era accaduto al mulino. Theon aveva bisogno di un colpevole per quelle morti, e ha scelto Farlen. Ha decapitato di persona il maestro dei canili, come avrebbe fatto [[eddard-stark|lord Eddard]], e gli sono serviti quattro colpi. Nell’incubo di Theon, Farlen siede tra i morti.',
        en: 'Farlen is dead. Reek killed three of [[theon-greyjoy|Theon]]’s ironborn, with Theon’s leave, so that they could not tell what happened at the mill. Theon needed someone to blame for their deaths, and he chose Farlen. He beheaded the kennelmaster himself, as Lord [[eddard-stark|Eddard]] would have done, and it took him four blows. In Theon’s nightmare, Farlen sits among the dead.',
      },
    ),
  ],
  'meera-reed': [
    inBooks(
      [22, 95],
      { it: 'Il giuramento dei crannogmen', en: 'The oath of the crannogmen' },
      {
        it: 'Meera Reed e il fratello minore [[jojen-reed|Jojen]] arrivano a Grande Inverno durante la festa del raccolto: sono i figli di Howland Reed, dell’Incollatura, amico di [[eddard-stark|lord Eddard]]. Meera è armata di rete, coltello di bronzo e fiocina da rane. In ginocchio davanti a [[bran-stark|Bran]], i due giurano agli Stark il giuramento del padre, per la terra e per l’acqua, per il bronzo e per il ferro, per il ghiaccio e per il fuoco. Meera offre in dono pesce, rane e volatili, e Bran arrossisce quando lei lo sorprende a fissarla.',
        en: 'Meera Reed and her younger brother [[jojen-reed|Jojen]] come to Winterfell during the harvest feast: they are the children of Howland Reed, of the Neck, a friend of Lord [[eddard-stark|Eddard]]. Meera is armed with a net, a bronze knife and a frog spear. Kneeling before [[bran-stark|Bran]], the two swear their father’s oath to the Starks, by earth and water, by bronze and iron, by ice and fire. Meera offers gifts of fish, frog and fowl, and Bran blushes when she catches him staring.',
      },
    ),
    inBooks(
      [22, 102],
      { it: 'La rete', en: 'The net' },
      {
        it: 'Nel parco degli dei Meera si allena contro [[summer-direwolf|Estate]] e lo intrappola nella sua rete, poi racconta a [[bran-stark|Bran]] che a combattere così le ha insegnato il padre. Rivela che il fratello [[jojen-reed|Jojen]] ha la vista verde: sogna cose che non sono ancora accadute. Quando Estate ringhia alle domande di Jojen, Meera si mette in mezzo e dice a Bran che il lupo sente la paura di Bran. Quando attacca anche [[shaggydog|Cagnaccio]], Meera segue Jojen su un albero. Al tramonto porta a Bran un altro sogno di Jojen.',
        en: 'In the godswood Meera spars with [[summer-direwolf|Summer]] and catches him in her net, then tells [[bran-stark|Bran]] that her father taught her to fight that way. She reveals that her brother [[jojen-reed|Jojen]] has the greensight: he dreams of things that have not happened yet. When Summer growls at Jojen’s questions, Meera steps between them and tells Bran that the wolf feels his fear. When [[shaggydog|Shaggydog]] attacks too, she follows Jojen up a tree. At dusk she brings Bran another of Jojen’s dreams.',
      },
    ),
    inBooks(
      [22, 109],
      { it: 'Contro il destino', en: 'Fighting fate' },
      {
        it: '[[jojen-reed|Jojen]] ha sognato il mare che inonda Grande Inverno e tre uomini del castello annegati, e nessuno ascolta gli avvertimenti di [[bran-stark|Bran]]. Meera sostiene che una profezia si possa cambiare, e si arrabbia con il fratello quando lui dice che ciò che vede si avvera sempre. Dice a Bran che deve lottare contro il suo destino. Quando Jojen racconta un altro sogno, con Bran e [[rickon-stark|Rickon]] morti ai piedi del prigioniero Reek, Meera si offre di scendere nelle segrete e uccidere Reek con le sue mani. Jojen dice che non ci riuscirebbe.',
        en: '[[jojen-reed|Jojen]] has dreamed of the sea flooding Winterfell and of three men of the castle drowned, and [[bran-stark|Bran]]’s warnings go unheeded. Meera argues that a prophecy can be changed, and grows angry with her brother when he says that what he sees always comes true. She tells Bran he should fight his fate. When Jojen tells of another dream, with Bran and [[rickon-stark|Rickon]] dead at the feet of the prisoner Reek, Meera offers to go down to the dungeons and kill Reek herself. Jojen says she would fail.',
      },
    ),
    inBooks(
      [22, 143],
      { it: 'Fuori dalle cripte', en: 'Out of the crypts' },
      {
        it: 'Meera e [[jojen-reed|Jojen]] sono scappati da Grande Inverno con [[bran-stark|Bran]] mentre lo tenevano gli uomini di ferro. I meta-lupi sono stati mandati avanti per sviare la caccia, e gli altri sono tornati indietro a nascondersi nelle cripte. Dopo il saccheggio Meera prende dalla tomba di lord Rickard Stark la sua spada, e risalgono trovando il castello in cenere. Dopo gli ultimi consigli del maestro [[luwin|Luwin]], si decide che Meera e Jojen andranno a nord con Bran, [[hodor|Hodor]] ed [[summer-direwolf|Estate]].',
        en: 'Meera and [[jojen-reed|Jojen]] slipped out of Winterfell with [[bran-stark|Bran]] while the ironborn held it. The direwolves were sent on ahead to lead the hunt astray, and the others doubled back to hide in the crypts. After the sack Meera takes Lord Rickard Stark’s sword from his tomb, and they come up to find the castle in ashes. After Maester [[luwin|Luwin]]’s last counsel, it is decided that Meera and Jojen will go north with Bran, [[hodor|Hodor]] and [[summer-direwolf|Summer]].',
      },
    ),
  ],
  'jojen-reed': [
    inBooks(
      [22, 95],
      { it: 'Il tocco su Estate', en: 'Summer’s touch' },
      {
        it: 'Jojen Reed arriva a Grande Inverno con la sorella maggiore [[meera-reed|Meera]] per la festa del raccolto, vestito tutto di verde, e insieme giurano davanti a [[bran-stark|Bran]] il giuramento del padre agli Stark. La prima cosa che Jojen chiede è dove siano i meta-lupi. Quella notte, nel sogno di lupo di Bran, i Reed entrano nel parco degli dei. Jojen dice che [[summer-direwolf|Estate]] è più forte di quanto sappia, assicura che non è quello il giorno in cui morirà lui e allunga la mano per toccare il lupo. A quel tocco Bran si sente cadere.',
        en: 'Jojen Reed comes to Winterfell with his elder sister [[meera-reed|Meera]] for the harvest feast, dressed all in green, and together they swear their father’s oath to the Starks before [[bran-stark|Bran]]. The first thing Jojen asks is where the direwolves are. That night, in Bran’s wolf dream, the Reeds come into the godswood. Jojen says [[summer-direwolf|Summer]] is stronger than he knows, insists that this is not the day he himself dies, and reaches out to touch the wolf. At his touch Bran feels himself falling.',
      },
    ),
    inBooks(
      [22, 102],
      { it: 'Il lupo alato', en: 'The winged wolf' },
      {
        it: 'Jojen ha sognato un lupo alato legato alla terra da catene, e un corvo con tre occhi che le becca. È sicuro che il lupo sia [[bran-stark|Bran]]. Il corvo è venuto da Jojen quando stava per morire di febbre, e si trova a nord, oltre la Barriera; il padre ha mandato i Reed a Grande Inverno per quel sogno. Bran deve aprire il terzo occhio. Jojen dice di aver sentito Bran dentro [[summer-direwolf|Estate]] quando ha toccato il lupo, e chiede a Bran se cade ogni notte, finché Estate non gli ringhia contro.',
        en: 'Jojen has dreamed of a winged wolf bound to the earth with chains, and of a three-eyed crow pecking at them. He is sure the wolf is [[bran-stark|Bran]]. The crow came to Jojen when he nearly died of a fever, and it is north, beyond the Wall; their father sent the Reeds to Winterfell because of the dream. Bran must open his third eye. Jojen says he felt Bran inside [[summer-direwolf|Summer]] when he touched the wolf, and asks if Bran falls every night, until Summer growls at him.',
      },
    ),
    inBooks(
      [22, 109],
      { it: 'Il mare a Grande Inverno', en: 'The sea comes to Winterfell' },
      {
        it: 'Jojen racconta a [[bran-stark|Bran]] il suo sogno verde: il mare che lambisce Grande Inverno e si riversa oltre le mura, e uomini annegati che galleggiano nel cortile. Ora li riconosce: Alebelly, septon Chayle e [[mikken|Mikken]]. Avvertirli non li salverà, dice, perché non ci crederanno. Avverte Bran che, se si saprà dei suoi sogni di lupo, lo chiameranno warg, e alcuni lo odieranno per questo. Più tardi racconta un altro sogno: Bran e [[rickon-stark|Rickon]] morti ai piedi del prigioniero Reek. I sogni verdi non mentono.',
        en: 'Jojen tells [[bran-stark|Bran]] his green dream: the sea lapping around Winterfell and pouring over the walls, and drowned men floating in the yard. He knows them now: Alebelly, Septon Chayle and [[mikken|Mikken]]. Warning them will not save them, he says, because they will not believe. He warns Bran that if others hear of his wolf dreams they will call him a warg, and some will hate him for it. Later he tells of another dream: Bran and [[rickon-stark|Rickon]] dead at the feet of the prisoner Reek. The green dreams do not lie.',
      },
    ),
    inBooks(
      [22, 120],
      { it: 'Il sogno si avvera', en: 'The dream comes true' },
      {
        it: 'Mentre [[rodrik-cassel|ser Rodrik]] è a Piazza di Torrhen, gli uomini di ferro di [[theon-greyjoy|Theon]] attraversano il fossato a nuoto e prendono Grande Inverno: il mare del sogno verde di Jojen è arrivato al castello. Davanti alla gente radunata muoiono gli uomini che Jojen aveva visto annegati, e [[mikken|Mikken]] annega nel suo stesso sangue quando si rifiuta di inginocchiarsi. [[bran-stark|Bran]] vede che ogni parola di Jojen si è avverata.',
        en: 'While Ser [[rodrik-cassel|Rodrik]] is away at Torrhen’s Square, the ironmen of [[theon-greyjoy|Theon]] swim the moat and take Winterfell: the sea of Jojen’s green dream has come to the castle. Before the gathered household the men he saw drowned die, [[mikken|Mikken]] drowning on his own blood when he refuses to kneel. [[bran-stark|Bran]] sees that every word Jojen said has come true.',
      },
    ),
    inBooks(
      [22, 143],
      { it: 'Tre giorni da lupo', en: 'Three days a wolf' },
      {
        it: 'Jojen, la sorella [[meera-reed|Meera]] e [[bran-stark|Bran]] sono nascosti nelle cripte di Grande Inverno dalla loro fuga. Jojen sveglia Bran da tre giorni di sogni di lupo e lo avverte che passa troppo tempo nei panni di [[summer-direwolf|Estate]]: nei sogni il lupo mangia, ma Bran no. Bran dice che Grande Inverno è bruciato, ed escono a trovarlo in cenere. Si decide che Jojen e Meera andranno a nord con Bran, [[hodor|Hodor]] ed Estate.',
        en: 'Jojen, his sister [[meera-reed|Meera]] and [[bran-stark|Bran]] have hidden in the crypts of Winterfell since their escape. Jojen wakes Bran from three days of wolf dreams and warns him that he spends too much time as [[summer-direwolf|Summer]]: the wolf eats in the dreams, but Bran does not. Bran says Winterfell has burned, and they come out to find it in ashes. It is decided that Jojen and Meera will go north with Bran, [[hodor|Hodor]] and Summer.',
      },
    ),
  ],
  'ramsay-snow': [
    inBooks(
      [32, 140],
      { it: 'L’uomo chiamato Reek', en: 'The man called Reek' },
      {
        it: 'Centinaia di uomini di Forte Terrore arrivano a Grande Inverno e piombano sull’esercito di [[rodrik-cassel|ser Rodrik]], che li aveva presi per alleati. Il loro capo porta a [[theon-greyjoy|Theon]] i corpi di Rodrik, di Cley Cerwyn e di Leobald Tallhart, e Theon apre le porte. Poi l’uomo si toglie l’elmo: Theon lo conosceva come Reek. Reek è morto, dice; lui è Ramsay Snow, anche se preferisce Ramsay Bolton. Ha portato seicento uomini dalla guarnigione del padre, [[roose-bolton|Roose]], e non duecento, e come premio vuole la ragazza che scalda il letto di Theon. Quando Theon protesta, Ramsay lo stende con un pugno e ordina ai suoi di bruciare il castello.',
        en: 'Hundreds of men from the Dreadfort reach Winterfell and fall on the army of Ser [[rodrik-cassel|Rodrik]], who took them for allies. Their leader brings [[theon-greyjoy|Theon]] the bodies of Rodrik, Cley Cerwyn and Leobald Tallhart, and Theon opens the gates. Then the man takes off his helm: Theon knew him as Reek. Reek is dead, he says; he is Ramsay Snow, though he prefers Ramsay Bolton. He brought six hundred men from the garrison of his father, [[roose-bolton|Roose]], not two hundred, and claims Theon’s bedwarmer as his prize. When Theon objects, Ramsay punches him to the ground and orders his men to burn the castle.',
      },
    ),
  ],
  'big-walder-frey': [
    inBooks(
      [13, 90],
      { it: 'Il pupillo dei Gemelli', en: 'The ward from the Twins' },
      {
        it: 'Big Walder Frey è uno dei due nipoti di [[walder-frey|lord Walder Frey]] mandati a Grande Inverno come pupilli, secondo il patto tra Robb e lord Walder. Lo chiamano Big Walder perché è più vecchio di cinquantadue giorni del cugino [[little-walder-frey|Little Walder]], anche se ora è più basso di mezzo piede. Nel cortile i due giostrano contro i bersagli, e Big Walder sta in sella meglio. Quando Little Walder prende in giro [[hodor|Hodor]], al rimprovero del maestro [[luwin|Luwin]] Big Walder ha almeno la decenza di vergognarsi.',
        en: 'Big Walder Frey is one of two grandsons of [[walder-frey|Lord Walder Frey]] sent to Winterfell as wards, under the pact between Robb and Lord Walder. He is called Big Walder because he is fifty-two days older than his cousin [[little-walder-frey|Little Walder]], though now he is half a foot shorter. In the yard the two joust at the quintains, and Big Walder sits his horse better. When Little Walder mocks [[hodor|Hodor]], Big Walder has the grace to look ashamed at Maester [[luwin|Luwin]]’s rebuke.',
      },
    ),
    inBooks(
      [15, 109],
      { it: 'La linea di successione', en: 'The line of succession' },
      {
        it: 'Un corvo porta la notizia che Robb ha vinto una battaglia a Oxcross, e che [[stevron-frey|ser Stevron Frey]], l’erede dei Gemelli, è morto. Big Walder dice che conta solo [[tywin-lannister|lord Tywin]], e la cosa turba [[bran-stark|Bran]]. Nessuno dei due Walder piange lo zio, che era vecchissimo e sempre stanco. Quando [[little-walder-frey|Little Walder]] chiede chi sia l’erede adesso, Big Walder elenca la linea di successione, a cominciare da ser Ryman. Il maestro [[luwin|Luwin]] dice ai ragazzi che dovrebbero vergognarsi.',
        en: 'A raven brings word that Robb has won a battle at Oxcross, and that Ser [[stevron-frey|Stevron Frey]], the heir to the Twins, has died. Big Walder says that only Lord [[tywin-lannister|Tywin]] matters, which troubles [[bran-stark|Bran]]. Neither Walder grieves for their uncle, who was very old and always tired. When [[little-walder-frey|Little Walder]] asks who is heir now, Big Walder recites the line of succession, starting with Ser Ryman. Maester [[luwin|Luwin]] tells the boys they should be ashamed.',
      },
    ),
  ],
  'little-walder-frey': [
    inBooks(
      [13, 90],
      { it: 'Un mantello di pelle di lupo', en: 'A wolfskin cloak' },
      {
        it: 'Little Walder Frey è un nipote di [[walder-frey|lord Walder Frey]], mandato a Grande Inverno come pupillo con il cugino [[big-walder-frey|Big Walder]]. È alto e robusto, e nei giochi dei ragazzi era spesso lui il signore del guado, finché [[shaggydog|Cagnaccio]] non lo ha morso perché aveva colpito [[rickon-stark|Rickon]] con un bastone. Nel cortile chiama [[hodor|Hodor]] un brutto cavallo e lo urta con il proprio destriero. Quando [[bran-stark|Bran]] minaccia di aizzargli contro [[summer-direwolf|Estate]], Little Walder dice che vorrebbe un mantello di pelle di lupo.',
        en: 'Little Walder Frey is a grandson of [[walder-frey|Lord Walder Frey]], sent to Winterfell as a ward with his cousin [[big-walder-frey|Big Walder]]. He is tall and stout, and in the boys’ games he was often lord of the crossing, until [[shaggydog|Shaggydog]] bit him for hitting [[rickon-stark|Rickon]] with a stick. In the yard he calls [[hodor|Hodor]] an ugly horse and bumps him with his own mount. When [[bran-stark|Bran]] threatens to set [[summer-direwolf|Summer]] on him, Little Walder says he wants a wolfskin cloak.',
      },
    ),
    inBooks(
      [15, 109],
      { it: 'Una folla di eredi', en: 'A crowd of heirs' },
      {
        it: 'Quando un corvo porta la notizia della vittoria di Robb a Oxcross e della morte di [[stevron-frey|ser Stevron Frey]], Little Walder non mostra alcun dolore per il vecchio zio. Chiede se ora l’erede sia ser Emmon, e il cugino [[big-walder-frey|Big Walder]] gli elenca la linea di successione dei Gemelli. Little Walder trova ser Ryman troppo vecchio, e chiede se un giorno potrebbe diventare lord anche lui. Il maestro [[luwin|Luwin]] dice ai ragazzi che dovrebbero vergognarsi.',
        en: 'When a raven brings news of Robb’s victory at Oxcross and of the death of Ser [[stevron-frey|Stevron Frey]], Little Walder shows no grief for his old uncle. He asks whether Ser Emmon is heir now, and his cousin [[big-walder-frey|Big Walder]] lists the line of succession at the Twins for him. Little Walder thinks Ser Ryman too old, and asks whether he himself might be lord one day. Maester [[luwin|Luwin]] tells the boys they should be ashamed.',
      },
    ),
  ],
  'wyman-manderly': [
    inBooks(
      [60, 90],
      { it: 'Nessun principe è mai in ritardo', en: 'No prince is ever late' },
      {
        it: 'Wyman Manderly, il grassissimo lord di Porto Bianco, arriva a Grande Inverno per la festa del raccolto con affari da discutere. [[bran-stark|Bran]] lo accoglie dal seggio alto del padre, e Wyman gli assicura che nessun principe è mai in ritardo. Sostiene che Porto Bianco dovrebbe battere moneta e costruire una flotta per il regno di Robb. Chiede della cugina rimasta vedova, [[donella-hornwood|lady Hornwood]], e si offre di sposarla lui stesso o di darle in sposo il figlio [[wendel-manderly|Wendel]]. [[tywin-lannister|Lord Tywin]] gli ha offerto di riscattare l’altro figlio se abbandonerà Robb, ma Wyman ha rifiutato.',
        en: 'Wyman Manderly, the very fat Lord of White Harbor, comes to Winterfell for the harvest feast with business to discuss. [[bran-stark|Bran]] welcomes him from his father’s high seat, and Wyman assures him that no prince is ever late. He argues that White Harbor should mint coin and build a fleet for Robb’s kingdom. He asks after his widowed cousin, [[donella-hornwood|Lady Hornwood]], and offers to marry her himself or give her his son [[wendel-manderly|Wendel]]. [[tywin-lannister|Lord Tywin]] has offered to ransom his other son if he abandons Robb; Wyman has refused.',
      },
    ),
    inBooks(
      [60, 109],
      { it: 'Le terre degli Hornwood', en: 'The Hornwood' },
      {
        it: 'Dopo la festa del raccolto il bastardo di [[roose-bolton|Roose Bolton]] ha preso con la forza in moglie [[donella-hornwood|lady Hornwood]], e Wyman Manderly ne ha occupato il castello per proteggerlo. Ora [[rodrik-cassel|ser Rodrik]] è tornato da est con un prigioniero accusato di averla uccisa. Uomini dei Manderly e dei Bolton si battono per le terre degli Hornwood, e Rodrik non ha la forza di fermarli.',
        en: 'After the harvest feast the bastard of [[roose-bolton|Roose Bolton]] took [[donella-hornwood|Lady Hornwood]] as his wife by force, and Wyman Manderly took her castle to keep it safe. Now Ser [[rodrik-cassel|Rodrik]] has come back from the east with a prisoner held for her murder. Manderly and Bolton men are fighting over the Hornwood, and Rodrik does not have the strength to stop them.',
      },
    ),
  ],
  'donella-hornwood': [
    inBooks(
      [13, 90],
      { it: 'La vedova', en: 'The widow' },
      {
        it: 'Il marito di Donella Hornwood è morto sulla Forca Verde e il suo unico figlio nel Bosco dei Sussurri. Lei arriva a Grande Inverno per la festa del raccolto, in lutto. Avverte [[bran-stark|Bran]] e [[rodrik-cassel|ser Rodrik]] che il figlio bastardo di Roose Bolton sta radunando uomini a Forte Terrore, e che lui e un servo crudele chiamato Reek vanno a caccia insieme, e non di cervi. Teme che voglia le sue terre. Si sposerà se le verrà ordinato, ma rifiuta il cugino Wyman Manderly, e lascia capire che prenderebbe Rodrik.',
        en: 'The husband of Donella Hornwood died on the Green Fork and her only son in the Whispering Wood. She comes to Winterfell for the harvest feast, grieving. She warns [[bran-stark|Bran]] and Ser [[rodrik-cassel|Rodrik]] that Roose Bolton’s bastard son is massing men at the Dreadfort, and that he and a cruel servant called Reek hunt together, and not for deer. She fears he covets her lands. She will marry if commanded, but turns down her cousin Wyman Manderly, and hints that she would take Rodrik.',
      },
    ),
    inBooks(
      [14, 102],
      { it: 'Presa con la forza', en: 'Taken by force' },
      {
        it: 'Poco dopo la festa del raccolto il bastardo di [[roose-bolton|Roose Bolton]] ha preso Donella Hornwood con la forza e l’ha fatta sua moglie. Alla festa lei aveva detto di temere che lui volesse le sue terre. Lord Wyman Manderly ha occupato il castello di lei per proteggerlo, e [[rodrik-cassel|ser Rodrik]] è partito verso est per sedare la rivolta e fare giustizia.',
        en: 'Soon after the harvest feast, the bastard of [[roose-bolton|Roose Bolton]] took Donella Hornwood by force and made her his wife. At the feast she had said she feared he coveted her lands. Lord Wyman Manderly has taken her castle to keep it safe, and Ser [[rodrik-cassel|Rodrik]] has ridden east to put down the uprising and see that justice is done.',
      },
    ),
    inBooks(
      [15, 109],
      { it: 'Giustizia da est', en: 'Justice from the east' },
      {
        it: 'Donella Hornwood è morta. [[rodrik-cassel|Ser Rodrik]] torna a Grande Inverno con un uomo chiamato Reek, il servo del bastardo di [[roose-bolton|Roose Bolton]]. Il bastardo l’ha costretta a sposarlo e a firmare un testamento che lo nominava suo erede, e a [[bran-stark|Bran]] viene detto che poi lui e Reek l’hanno uccisa, e che gli uomini di Rodrik hanno ucciso il bastardo con le frecce mentre fuggiva a cavallo. Reek resta in vita per essere giudicato al ritorno di Robb. Ora uomini dei Manderly e dei Bolton si battono per le terre di lei.',
        en: 'Donella Hornwood is dead. Ser [[rodrik-cassel|Rodrik]] comes back to Winterfell with a man named Reek, the servant of the bastard of [[roose-bolton|Roose Bolton]]. The bastard forced her to marry him and to sign a will naming him her heir, and [[bran-stark|Bran]] is told that he and Reek then murdered her, and that Rodrik’s men shot the bastard dead as he tried to ride away. Reek is kept alive to be judged when Robb returns. Manderly and Bolton men now fight over her lands.',
      },
    ),
  ],
  // The Wall and beyond (#1488). The show and the books tell the ranging in
  // their own ways, so every story is one medium’s. Thoren Smallwood, Jarman
  // Buckwell, Mallador Locke, Stonesnake, Ebben, Dalbridge and the Lord of
  // Bones are the books’ records; Gilly and Eddison Tollett open on screen at
  // episodes 15 and 20, so their book stories are ordered there.
  'thoren-smallwood': [
    inBooks(
      [11, 80],
      { it: 'Il posto del Primo Ranger', en: 'The First Ranger’s place' },
      {
        it: 'Thoren Smallwood guida i ranger mentre il Primo Ranger è disperso. Alla vigilia della grande spedizione sostiene nel solario che il posto del lord comandante è a Castello Nero, e che il comando dovrebbe spettare a lui. [[jeor-mormont|Jeor Mormont]] non vuole sentirne parlare: non aspetterà di sapere se andrà perduta anche una terza spedizione, e [[benjen-stark|Benjen Stark]] resta il Primo Ranger finché la sua morte non sarà certa. Quando Smallwood se ne va, Mormont si lamenta che Smallwood lo abbia definito troppo vecchio per una spedizione.',
        en: 'Thoren Smallwood leads the rangers while the First Ranger is missing. On the eve of the great ranging he argues in the solar that the Lord Commander’s place is at Castle Black, and that the command should be his. [[jeor-mormont|Jeor Mormont]] will have none of it: he will not wait to learn whether a third ranging is lost, and [[benjen-stark|Benjen Stark]] is First Ranger until his death is known. Once Smallwood has gone, Mormont complains that Smallwood called him too old for a ranging.',
      },
    ),
    inBooks(
      [11, 87],
      { it: 'Un anno fa', en: 'A year ago' },
      {
        it: 'Ad Albero Bianco Thoren Smallwood guarda il grande albero-diga e dice di capire perché gli uomini, quando arrivarono a Westeros, temessero gli alberi del cuore e li abbattessero. Vestito con un’armatura e un mantello che gli danno un’aria più nobile di quella del lord comandante, dichiara che un anno fa nel villaggio c’erano ancora dei bruti. [[jarman-buckwell|Jarman Buckwell]] risponde che in un anno possono cambiare molte cose. Quando la colonna riparte, Smallwood ne guida l’avanguardia dietro gli esploratori di Buckwell.',
        en: 'At Whitetree, Thoren Smallwood looks at the great weirwood and says he understands why men feared the heart trees and cut them down when they first came to Westeros. Dressed in armour and a cloak that make him look more lordly than the Lord Commander, he declares that there were wildlings in the village a year ago. [[jarman-buckwell|Jarman Buckwell]] answers that much can change in a year. When the column marches on, Smallwood leads its vanguard behind Buckwell’s scouts.',
      },
    ),
    inBooks(
      [15, 117],
      { it: 'Lungo il fiume', en: 'Up the river' },
      {
        it: 'Sul Pugno dei Primi Uomini [[qhorin-halfhand|Qhorin il Monco]] porta la notizia che Mance Rayder ha dei warg e dei mammut e cerca qualcosa di potente tra le montagne, e consiglia di mandare esploratori. Il lord comandante [[jeor-mormont|Mormont]] fa partire tre gruppi. [[jarman-buckwell|Jarman Buckwell]] porta quattro uomini tra le montagne, Qhorin porta i suoi in un passo, e Thoren Smallwood guiderà un gruppo lungo il fiume.',
        en: 'On the Fist of the First Men, [[qhorin-halfhand|Qhorin Halfhand]] brings word that Mance Rayder has wargs and mammoths and is searching the mountains for some power, and advises sending scouts. Lord Commander [[jeor-mormont|Mormont]] sends out three parties. [[jarman-buckwell|Jarman Buckwell]] takes four men into the mountains, Qhorin takes his own into a pass, and Thoren Smallwood is to lead a party up the river.',
      },
    ),
  ],
  'eddison-tollett': [
    inBooks(
      [20, 87],
      { it: 'Tempi duri', en: 'Hard times' },
      {
        it: 'Ad Albero Bianco [[jon-snow|Jon]] viene messo in coppia con Eddison Tollett, uno scudiero dai capelli grigi detto Edd l’Addolorato, per perquisire le case vuote. Già è brutto che i morti camminino, dice Edd, e ora il lord comandante li vuole anche far parlare; i morti potrebbero mentire, o lamentarsi senza fine. Davanti a una capanna spoglia, dice di essere nato in una casa così, prima di cadere in disgrazia. Quando Jon gli chiede che cosa sia successo al villaggio, Edd risponde che preferisce non immaginarlo.',
        en: 'At Whitetree [[jon-snow|Jon]] is paired with Eddison Tollett, a grey-haired squire known as Dolorous Edd, to search the empty houses. The dead walking is bad enough, Edd says, and now the Lord Commander wants them talking too; the dead might lie, or complain without end. Shown a bare hut, he says he was born in a house like it, before he fell on hard times. Asked what happened to the village, he says he would rather not imagine.',
      },
    ),
    inBooks(
      [20, 97],
      { it: 'Tombe segrete', en: 'Secret graves' },
      {
        it: 'Alla Fortezza di Craster Edd l’Addolorato tiene il cavallo del lord comandante, e dice a [[jon-snow|Jon]] che è atteso nella sala ma il lupo deve restare fuori. Quando Jon torna a prendere un’ascia come dono d’ospite e del vino, Edd dice che il lord comandante riavrà l’ascia piantata nel cranio, e che Craster ubriaco taglierà solo un orecchio prima di ucciderli. Quando Jon gli dice che [[thoren-smallwood|Thoren Smallwood]] considera Craster un amico, Edd risponde che gli amici tra i bruti ti seppelliscono semplicemente in tombe segrete.',
        en: 'At Craster’s Keep Dolorous Edd holds the Lord Commander’s horse, and tells [[jon-snow|Jon]] he is wanted in the hall but the wolf must stay outside. When Jon comes back for an axe as a guest gift and for wine, Edd says the Lord Commander will get the axe back buried in his skull, and that a drunk Craster will only cut off an ear before he kills them. Told that [[thoren-smallwood|Thoren Smallwood]] calls Craster a friend, Edd answers that wildling friends simply bury you in secret graves.',
      },
    ),
    onScreen(
      [20, 142],
      { it: 'Niente di interessante', en: 'Nothing interesting' },
      {
        it: 'Vicino al Pugno dei Primi Uomini, Edd raccoglie sterco gelato per i fuochi con [[grenn|Grenn]] e [[samwell-tarly|Sam]]. Quando Sam parla di [[gilly|Gilly]], Edd lo schernisce: Sam la trova interessante solo perché gli ha rivolto la parola. Sam ribatte che in Edd non trova niente di interessante. Un corno suona, poi una seconda volta, ed Edd dice agli altri di tornare al Pugno invece di affrontare i bruti da soli. Al terzo squillo urla di correre. Edd e Grenn raggiungono il Pugno senza accorgersi che Sam è rimasto indietro.',
        en: 'Near the Fist of the First Men, Edd gathers frozen dung for the fires with [[grenn|Grenn]] and [[samwell-tarly|Sam]]. When Sam talks about [[gilly|Gilly]], Edd sneers that Sam only finds her interesting because she spoke to him; Sam retorts that what he finds interesting about Edd is nothing at all. A horn sounds, then a second time, and Edd tells the others to get back to the Fist rather than fight wildlings alone. At the third blast he screams at them to run. Edd and Grenn reach the Fist without noticing that Sam has been left behind.',
      },
    ),
  ],
  'jarman-buckwell': [
    inBooks(
      [11, 87],
      { it: 'In un anno cambia molto', en: 'Much can change in a year' },
      {
        it: 'Jarman Buckwell cavalca con la grande spedizione del lord comandante oltre la Barriera. Al villaggio vuoto di Albero Bianco, quando [[thoren-smallwood|Thoren Smallwood]] dichiara che un anno prima c’erano ancora dei bruti, Buckwell risponde che in un anno possono cambiare molte cose. Quando la colonna riparte verso un lago per accamparsi, gli esploratori di Buckwell partono per primi, davanti all’avanguardia di Smallwood e al resto dei duecento uomini.',
        en: 'Jarman Buckwell rides with the Lord Commander’s great ranging beyond the Wall. At the empty village of Whitetree, when [[thoren-smallwood|Thoren Smallwood]] declares that there were wildlings there a year ago, Buckwell answers that much can change in a year. When the column moves on towards a lake to make camp, Buckwell’s scouts ride out first, ahead of Smallwood’s vanguard and the rest of the two hundred men.',
      },
    ),
    inBooks(
      [11, 97],
      { it: 'Il re di Craster', en: 'Craster’s king' },
      {
        it: 'Dopo sette villaggi vuoti, il corno degli esploratori di Jarman Buckwell fa sapere al lord comandante che alla Fortezza di Craster c’è ancora qualcuno. Nella sala di [[craster|Craster]] Buckwell gli chiede di Mance Rayder, e Craster risponde che il popolo libero non ha bisogno di re. Il mattino dopo, quando [[jon-snow|Jon]] passa accanto agli esploratori, Buckwell gli dice di tenere ben affilata la spada: presto gli servirà.',
        en: 'After seven empty villages, the horn of Jarman Buckwell’s scouts tells the Lord Commander that there are still people at Craster’s Keep. In [[craster|Craster]]’s hall Buckwell asks him about Mance Rayder, and Craster answers that the free folk have no need of kings. The next morning, as [[jon-snow|Jon]] passes the scouts, Buckwell tells him to keep a good edge on his sword: he will be needing it soon enough.',
      },
    ),
    inBooks(
      [15, 117],
      { it: 'Tra le montagne', en: 'Into the mountains' },
      {
        it: 'Sul Pugno dei Primi Uomini Jarman Buckwell dice al lord comandante che seguire il fiume è la strada più facile per raggiungere le montagne, ma che Mance Rayder li vedrebbe arrivare. Quando [[qhorin-halfhand|Qhorin il Monco]] arriva e consiglia di mandare esploratori, [[jeor-mormont|Mormont]] fa partire tre gruppi, e Buckwell porterà quattro uomini su per le montagne.',
        en: 'On the Fist of the First Men, Jarman Buckwell tells the Lord Commander that following the river is the easiest road into the mountains, but that Mance Rayder would see them coming. When [[qhorin-halfhand|Qhorin Halfhand]] arrives and advises sending scouts, [[jeor-mormont|Mormont]] sends out three parties, and Buckwell is to take four men and climb into the mountains.',
      },
    ),
  ],
  'mallador-locke': [
    inBooks(
      [11, 87],
      { it: 'Meno preoccupazioni', en: 'Fewer worries' },
      {
        it: 'Ser Mallador Locke è un cavaliere dei Guardiani della notte nella grande spedizione del lord comandante. Al villaggio vuoto di Albero Bianco, mentre [[thoren-smallwood|Thoren Smallwood]] e [[jarman-buckwell|Jarman Buckwell]] discutono di quando i bruti se ne siano andati, Locke dice la sua: meno bruti, meno preoccupazioni. Quando la colonna riparte, guida le salmerie, dietro il grosso delle forze del lord comandante.',
        en: 'Ser Mallador Locke is a knight of the Night’s Watch on the Lord Commander’s great ranging. At the empty village of Whitetree, while [[thoren-smallwood|Thoren Smallwood]] and [[jarman-buckwell|Jarman Buckwell]] argue over when the wildlings left, Locke gives his opinion: fewer wildlings means fewer worries. When the column marches on, he leads the baggage train, behind the Lord Commander’s main force.',
      },
    ),
    inBooks(
      [15, 108],
      { it: 'Il consiglio sul Pugno', en: 'The council on the Fist' },
      {
        it: 'Sul Pugno dei Primi Uomini il lord comandante si consulta con i suoi ufficiali davanti al vino caldo speziato. [[jarman-buckwell|Jarman Buckwell]] dice che seguire il fiume è la strada più facile per le montagne, anche se Mance Rayder saprebbe del loro arrivo. Ser Mallador Locke propone invece uno di due passi di montagna. [[jeor-mormont|Mormont]] scarta entrambe le idee: non rischierà le montagne se non è costretto, e la spedizione resterà sul Pugno e lo fortificherà.',
        en: 'On the Fist of the First Men the Lord Commander takes counsel with his officers over hot spiced wine. [[jarman-buckwell|Jarman Buckwell]] says following the river is the easiest road into the mountains, though Mance Rayder would know they were coming. Ser Mallador Locke recommends one of two mountain passes instead. [[jeor-mormont|Mormont]] decides against both: he will not risk the mountains unless he must, and the ranging will stay on the Fist and strengthen it.',
      },
    ),
  ],
  'craster': [
    inBooks(
      [11, 97],
      { it: 'Popolo libero', en: 'Free folk' },
      {
        it: 'Craster è l’unico nella sua sala a sedere su una sedia, anche davanti al lord comandante. Dice a [[jeor-mormont|Jeor Mormont]] di non vedere [[benjen-stark|Benjen Stark]] da tre anni, finge di non sapere nulla dei morti che camminano, e rifiuta una scorta fino alla Barriera: lui è del popolo libero. Quando Mance Rayder gli ha mandato un uomo per farlo inginocchiare, Craster lo ha rimandato indietro senza lingua. Darà da mangiare solo a venti uomini, accetta volentieri il vino, e giura che chi metterà le mani sulle sue mogli le perderà. Quando sente il nome di [[jon-snow|Jon]], lo disprezza come bastardo.',
        en: 'Craster is the only man in his hall who sits in a chair, even with the Lord Commander there. He tells [[jeor-mormont|Jeor Mormont]] that he has not seen [[benjen-stark|Benjen Stark]] in three years, pretends to know nothing of the dead who walk, and refuses an escort to the Wall: he is free folk. When Mance Rayder sent a man to make him kneel, Craster sent him back without his tongue. He will feed only twenty, takes the wine gladly, and swears that any man who lays a hand on his wives will lose it. Hearing [[jon-snow|Jon]]’s name, he scorns him as a bastard.',
      },
    ),
    onScreen(
      [11, 97],
      { it: 'L’ospite del Lord Corvo', en: 'The Lord Crow’s host' },
      {
        it: 'La grande spedizione dei Guardiani della notte arriva alla Fortezza di Craster. Craster dice al lord comandante [[jeor-mormont|Mormont]] di non vedere [[benjen-stark|Benjen Stark]] da tre anni, e chiede del vino. Quando [[jon-snow|Jon]] protesta perché lo chiama uomo del sud, Craster si fa beffe del suo nome da bastardo: per lui chiunque venga da sud della Barriera è un uomo del sud. Ricevuta un’ascia, Craster rivela che Mance Rayder sta radunando un esercito per marciare a sud. Fa dire a una delle sue figlie e mogli che sono contente, e avverte che chi toccherà le sue mogli perderà una mano.',
        en: 'The great ranging of the Night’s Watch arrives at Craster’s Keep. Craster tells Lord Commander [[jeor-mormont|Mormont]] that he has not seen [[benjen-stark|Benjen Stark]] for three years, and asks for wine. When [[jon-snow|Jon]] objects to being called a southerner, Craster mocks his bastard name: anyone from south of the Wall is a southerner to him. Given an axe, Craster reveals that Mance Rayder is gathering an army to march south. He has one of his daughter-wives say they are content, and warns that any man who touches his wives will lose a hand.',
      },
    ),
    onScreen(
      [12, 97],
      { it: 'Un’offerta nel bosco', en: 'An offering in the woods' },
      {
        it: 'Di notte Craster porta uno dei suoi neonati nel bosco, lo lascia a terra e torna verso la sua fortezza. Quando ritorna sul posto trova [[jon-snow|Jon]], che guarda un Estraneo raccogliere il bambino. Prima che Jon possa inseguire la creatura, Craster lo stordisce con un colpo alla testa.',
        en: 'At night Craster carries one of his babies into the woods, leaves it on the ground and turns back towards his keep. When he returns to the spot, he finds [[jon-snow|Jon]] watching as a White Walker picks the baby up. Before Jon can go after the creature, Craster knocks him out with a blow to the head.',
      },
    ),
    onScreen(
      [13, 97],
      { it: 'Fuori da casa mia', en: 'Out of my house' },
      {
        it: 'Craster trascina [[jon-snow|Jon]] nella sua fortezza, con i polsi legati e il volto insanguinato. Prende a calci il prigioniero, sveglia i confratelli e ordina a tutti di andarsene, dando la colpa a Jon per essersi intromesso. Craster consegna Lungo Artiglio al lord comandante [[jeor-mormont|Mormont]] e pretende che rimedi. All’alba i Guardiani della notte lasciano la sua fortezza.',
        en: 'Craster drags [[jon-snow|Jon]] back into his keep with his wrists bound and his face bloodied. He kicks his captive, wakes the black brothers and orders them all out, blaming Jon for meddling. Craster hands Longclaw to Lord Commander [[jeor-mormont|Mormont]] and insists that he make things right. The Night’s Watch leaves his keep at dawn.',
      },
    ),
  ],
  'gilly': [
    inBooks(
      [15, 97],
      { it: 'Se sarà un maschio', en: 'If it is a boy' },
      {
        it: 'Gilly ha quindici anni, è una delle figlie di [[craster|Craster]] e ora una delle sue mogli. Quando [[ghost-direwolf|Spettro]] le prende i conigli che sperava di far riprodurre, [[jon-snow|Jon]] promette che i Guardiani la ripagheranno. All’alba, con indosso il mantello di [[samwell-tarly|Sam]], Gilly chiede a Jon di portarla via: è incinta, e se sarà un maschio Craster lo darà agli dei, che arrivano di notte come ombre bianche. Jon risponde che la spedizione va nella direzione opposta, e che la scelta spetta al lord comandante. Sam spera di poterla portare via al ritorno.',
        en: 'Gilly is fifteen, one of [[craster|Craster]]’s daughters and now one of his wives. When [[ghost-direwolf|Ghost]] takes the rabbits she hoped to breed, [[jon-snow|Jon]] promises that the Watch will make it good. At dawn, wearing the cloak of [[samwell-tarly|Sam]], she asks Jon to take her away: she is with child, and if it is a boy Craster will give it to the gods, who come at night like white shadows. Jon says the ranging goes the other way, and the choice is the Lord Commander’s. Sam hopes they can take her on the way back.',
      },
    ),
    onScreen(
      [15, 108],
      { it: 'Una speranza', en: 'Something to hope for' },
      {
        it: 'Gilly è una delle figlie di [[craster|Craster]] e una delle sue mogli. Quando i Guardiani della notte si fermano alla fortezza, serve il vino e dice le parole che Craster vuole sentire: con lui sono al sicuro. Spaventata da [[ghost-direwolf|Spettro]], viene soccorsa da [[samwell-tarly|Sam]] e gli chiede di portarla via, ma [[jon-snow|Jon]] rifiuta. Prima che i confratelli partano, Sam le regala un ditale appartenuto alla madre di lui e promette di tornare a prenderla. Settimane dopo, al Pugno dei Primi Uomini, Sam dice che a Gilly quel posto piacerebbe.',
        en: 'Gilly is one of [[craster|Craster]]’s daughters and one of his wives. When the Night’s Watch stays at the keep, she serves the wine, and says the words Craster wants: they are safe with him. Frightened by [[ghost-direwolf|Ghost]], she is rescued by [[samwell-tarly|Sam]] and asks him to take her away, but [[jon-snow|Jon]] refuses. Before the brothers leave, Sam gives her his mother’s thimble and promises to come back for her. Weeks later, at the Fist of the First Men, Sam says that Gilly would love it there.',
      },
    ),
  ],
  'qhorin-halfhand': [
    inBooks(
      [15, 117],
      { it: 'Dalla Torre delle Ombre', en: 'From the Shadow Tower' },
      {
        it: 'Qhorin il Monco arriva al Pugno dei Primi Uomini con cento uomini della Torre delle Ombre. Lungo la strada hanno incontrato una banda di bruti in esplorazione lungo la Barriera, ne hanno ucciso il capo e preso dei prigionieri, perdendo quattro confratelli. Qhorin dice a [[jon-snow|Jon]] di aver conosciuto suo padre e suo nonno. Nella tenda del lord comandante riferisce che Mance Rayder ha dei warg e dei mammut, vuole abbattere la Barriera, e cerca qualcosa di potente tra le montagne. Consiglia di mandare esploratori. [[jeor-mormont|Mormont]] è d’accordo, e Qhorin sceglie Jon per il proprio gruppo: oltre la Barriera gli antichi dei dei Primi Uomini e degli Stark sono ancora forti.',
        en: 'Qhorin Halfhand reaches the Fist of the First Men with a hundred men of the Shadow Tower. On the way they met a wildling band scouting along the Wall, killed its leader and took captives, losing four brothers. Qhorin tells [[jon-snow|Jon]] he knew his father and grandfather. In the Lord Commander’s tent he reports that Mance Rayder has wargs and mammoths, means to break the Wall, and is searching the mountains for some power. He advises sending scouts. [[jeor-mormont|Mormont]] agrees, and Qhorin picks Jon for his own party: the old gods of the First Men and of the Starks are still strong beyond the Wall.',
      },
    ),
    onScreen(
      [15, 117],
      { it: 'Arriva il Monco', en: 'The Halfhand arrives' },
      {
        it: 'Qhorin guida un gruppo a nord dalla Torre delle Ombre per incontrare il lord comandante [[jeor-mormont|Mormont]] sul Pugno dei Primi Uomini. Avverte che Mance Rayder, un tempo confratello dei Guardiani, ha organizzato i bruti, e riferisce di vedette tra le montagne. I Guardiani, dice, devono combattere come i bruti: un piccolo gruppo deve occuparsi delle vedette, e lo guiderà Qhorin. Quando Mormont rifiuta la richiesta di [[jon-snow|Jon]] di unirsi a loro, ricordandogli che si è fatto picchiare da Craster, Qhorin prende le difese di Jon. Mormont lascia partire Jon con lui.',
        en: 'Qhorin leads a force north from the Shadow Tower to meet Lord Commander [[jeor-mormont|Mormont]] on the Fist of the First Men. He warns that Mance Rayder, once a brother of the Watch, has the wildlings organized, and reports lookouts in the mountains. The Watch, he says, must fight like the wildlings: a small party should deal with the lookouts, and Qhorin will lead it. When Mormont refuses [[jon-snow|Jon]]’s request to join, reminding him that Craster beat him, Qhorin speaks up for Jon. Mormont lets Jon go with him.',
      },
    ),
    inBooks(
      [16, 125],
      { it: 'Le vedette nel passo', en: 'The watchers in the pass' },
      {
        it: 'Nel Passo Skirling il gruppo di Qhorin avvista in alto delle vedette dei bruti, e Qhorin avverte [[jon-snow|Jon]] e [[stonesnake|Stonesnake]], che salgono fino a loro, di non lasciarle suonare il corno. Quando Qhorin e gli altri arrivano in cima, la donna della lancia catturata, [[ygritte|Ygritte]], lo riconosce come il Monco, e dice che i bruti lo ucciderebbero anche se si arrendesse. Gli uomini di Qhorin la vogliono morta. Qhorin lascia Jon solo con lei perché lo faccia.',
        en: 'In the Skirling Pass, Qhorin’s party spots wildling watchers high above, and Qhorin warns [[jon-snow|Jon]] and [[stonesnake|Stonesnake]], who climb up to them, not to let them sound their horn. When Qhorin and the others reach the top, the captive spearwife, [[ygritte|Ygritte]], knows him for the Halfhand, and says the wildlings would kill him even if he yielded. Qhorin’s men want her dead. Qhorin leaves Jon alone with her to carry it out.',
      },
    ),
    onScreen(
      [16, 125],
      { it: 'Jon lasciato indietro', en: 'Leaving Jon behind' },
      {
        it: 'Il gruppo di Qhorin trova delle vedette dei bruti tra le montagne e le attacca di sorpresa, uccidendole tutte tranne una. [[jon-snow|Jon]] esita a uccidere l’ultima, una giovane donna, [[ygritte|Ygritte]]. Qhorin la interroga. Quando lei chiede che i corpi dei compagni vengano bruciati, Qhorin sospetta che voglia un fuoco per richiamare altri bruti. Ordina a Jon di giustiziarla e di raggiungere gli altri, e guida il gruppo su per la montagna.',
        en: 'Qhorin’s party finds a group of wildling lookouts in the mountains and ambushes them, killing all but one. [[jon-snow|Jon]] hesitates to kill the last, a young woman, [[ygritte|Ygritte]]. Qhorin questions her. When she asks for her companions’ bodies to be burned, he suspects she wants a fire to draw other wildlings. He orders Jon to put her to death and catch up with the rest, and leads the party on up the mountain.',
      },
    ),
    inBooks(
      [17, 127],
      { it: 'Conoscere i propri uomini', en: 'Knowing his men' },
      {
        it: 'Qhorin sente da [[jon-snow|Jon]] che [[ygritte|Ygritte]] gli ha promesso un posto tra i bruti, e conferma che Mance Rayder lo accoglierebbe: Mance era un bambino dei bruti cresciuto dai Guardiani, il loro ranger migliore, poi tornato dalla sua gente. Qhorin intuisce che Jon ha lasciato andare la ragazza, e non lo biasima; se l’avesse voluta morta, l’avrebbe fatta uccidere da [[ebben|Ebben]]. Un comandante, dice, deve conoscere i propri uomini. Quando un’aquila comincia a seguirli, Qhorin decide di tornare al Pugno, e lo scudiero [[dalbridge|Dalbridge]] resta indietro nel passo con le loro frecce.',
        en: 'Qhorin hears from [[jon-snow|Jon]] that [[ygritte|Ygritte]] promised him a place among the wildlings, and confirms that Mance Rayder would take him in: Mance was a wildling boy raised by the Watch, its best ranger, who went back to his people. Qhorin guesses that Jon let the girl go, and does not blame him; had he wanted her dead, he would have had [[ebben|Ebben]] kill her. A commander, he says, must know his men. When an eagle starts to follow them, Qhorin turns back for the Fist, and Squire [[dalbridge|Dalbridge]] stays behind in the pass with their arrows.',
      },
    ),
    onScreen(
      [18, 142],
      { it: 'Il piano di un prigioniero', en: 'A prisoner’s plan' },
      {
        it: 'Quando [[jon-snow|Jon]] non torna, Qhorin va a cercarlo e ne segue le tracce, ma i bruti tendono un’imboscata al suo gruppo. I suoi uomini vengono uccisi e Qhorin viene fatto prigioniero. Presto viene portato lì anche Jon, prigioniero a sua volta. Qhorin gli dice che gli altri sono morti mentre lo cercavano, e lo esorta a fare in modo che non siano morti invano: Jon può fare da spia tra i bruti. Poi Qhorin si scaglia contro Jon davanti ai loro carcerieri, come se fosse furioso, perché Jon sembri un traditore dei Guardiani.',
        en: 'When [[jon-snow|Jon]] does not return, Qhorin goes looking for him and follows his tracks, but wildlings ambush his party. His men are killed and Qhorin is taken prisoner. Soon Jon is brought in as a captive too. Qhorin tells him that the others died while they searched for him, and urges Jon to make sure their deaths were not for nothing: he can serve as a spy among the wildlings. Then Qhorin rounds on Jon in front of their captors, as if in anger, so that Jon will look like a traitor to the Watch.',
      },
    ),
    inBooks(
      [20, 142],
      { it: 'Il giuramento recitato', en: 'The oath recited' },
      {
        it: 'Con i bruti alle calcagna, Qhorin mandò [[ebben|Ebben]] avanti dal lord comandante e [[stonesnake|Stonesnake]] a piedi. Quella notte fece recitare a [[jon-snow|Jon]] il giuramento insieme a lui, e gli ordinò di arrendersi quando li avessero presi e di fare qualunque cosa i bruti chiedessero: Jon doveva scoprire i loro piani e tornare. Qhorin promise di dire al lord comandante che Jon non aveva mai infranto il giuramento. Quando il [[lord-of-bones|Lord delle Ossa]] li raggiunse, Jon si arrese. Qhorin disse che il sangue bastardo è vile, e Jon, a cui era stato ordinato di ucciderlo, lo abbatté. I bruti bruciarono il corpo di Qhorin.',
        en: 'With the wildlings on their trail, Qhorin sent [[ebben|Ebben]] ahead to the Lord Commander and [[stonesnake|Stonesnake]] off on foot. That night he had [[jon-snow|Jon]] recite the oath with him, and ordered him to yield when they were caught and to do whatever the wildlings asked: Jon was to learn their plans and return. Qhorin promised to tell the Lord Commander that Jon never broke his oath. When the [[lord-of-bones|Lord of Bones]] overtook them, Jon yielded. Qhorin called bastard blood craven, and Jon, told to kill him, cut him down. The wildlings burned Qhorin’s body.',
      },
    ),
    onScreen(
      [20, 142],
      { it: 'L’ultimo turno di guardia', en: 'The last watch' },
      {
        it: 'Condotto verso l’accampamento di Mance Rayder, Qhorin capì che l’inganno richiedeva la sua vita. Stordì uno dei carcerieri, prese una spada e attaccò [[jon-snow|Jon]], come per ucciderlo per tradimento. Il capo della banda li lasciò combattere, e Qhorin provocò Jon insultando suo padre e sua madre. Jon lo abbatté, come Qhorin voleva. Morendo, Qhorin sussurrò a Jon: siamo le sentinelle sulla Barriera. I bruti credettero che Jon avesse tradito il giuramento, e bruciarono il corpo di Qhorin perché non tornasse in vita.',
        en: 'Marched towards Mance Rayder’s camp, Qhorin saw that the ruse needed his life. He stunned one of his captors, took a sword and attacked [[jon-snow|Jon]], seemingly to kill him for treachery. The leader of the war band let them fight, and Qhorin goaded Jon by insulting his father and his mother. Jon struck him down, as Qhorin meant him to. Dying, Qhorin whispered to Jon: we are the watchers on the Wall. The wildlings believed Jon had betrayed his oath, and burned Qhorin’s body so that it would not rise again.',
      },
    ),
  ],
  'stonesnake': [
    inBooks(
      [15, 125],
      { it: 'La scalata', en: 'The climb' },
      {
        it: 'Stonesnake è un ranger del gruppo di [[qhorin-halfhand|Qhorin il Monco]]. Nel Passo Skirling lui e [[jon-snow|Jon]] si offrono di occuparsi delle vedette dei bruti appostate in alto, e Stonesnake insegna a Jon ad arrampicarsi su una parete a picco. In cima Stonesnake uccide la vedetta con il corno prima che possa suonarlo, mentre Jon abbatte l’uomo accanto al fuoco. Quando la terza, una donna della lancia di nome Ygritte, si arrende, Stonesnake avverte Jon che andrebbe uccisa, e chiama assassino e ladro il Bael del racconto di Ygritte.',
        en: 'Stonesnake is a ranger in [[qhorin-halfhand|Qhorin Halfhand]]’s party. In the Skirling Pass he and [[jon-snow|Jon]] volunteer to deal with the wildling watchers high above, and he teaches Jon to climb a sheer cliff. At the top Stonesnake kills the watcher with the horn before he can sound it, while Jon cuts down the man by the fire. When the third, a spearwife named Ygritte, yields, Stonesnake warns Jon that she should be killed, and calls the Bael of Ygritte’s tale a murderer and a robber.',
      },
    ),
    inBooks(
      [20, 142],
      { it: 'A piedi per i passi alti', en: 'On foot through the high passes' },
      {
        it: 'Mentre i bruti si avvicinano al gruppo di [[qhorin-halfhand|Qhorin]], la giumenta di Stonesnake si spezza una zampa. Qhorin lo manda avanti da solo, a piedi, per i passi alti fino al Pugno dei Primi Uomini. Stonesnake dovrà riferire al lord comandante [[jeor-mormont|Mormont]] tutto quello che [[jon-snow|Jon]] ha visto: che il lord comandante dovrà affrontare giganti, warg e di peggio, e che gli alberi hanno di nuovo gli occhi.',
        en: 'As the wildlings close in on [[qhorin-halfhand|Qhorin]]’s party, Stonesnake’s mare breaks a leg. Qhorin sends him on alone, on foot, by the high passes to the Fist of the First Men. Stonesnake is to tell Lord Commander [[jeor-mormont|Mormont]] everything [[jon-snow|Jon]] saw: that the Lord Commander faces giants and wargs and worse, and that the trees have eyes again.',
      },
    ),
  ],
  'ygritte': [
    inBooks(
      [16, 125],
      { it: 'Bael il Bardo', en: 'Bael the Bard' },
      {
        it: 'Ygritte dorme quando i confratelli piombano sulle vedette dei bruti nel Passo Skirling. Si arrende, e [[jon-snow|Jon]] la fa prigioniera. Quando scopre che è un bastardo degli Stark, gli racconta come Bael il Bardo rapì una figlia di Grande Inverno, e come il sangue degli Stark e quello dei bruti siano quindi lo stesso. Riconosce [[qhorin-halfhand|Qhorin]] come il Monco. Lasciata sola con Jon perché lui la uccida, gli dice che Mance Rayder lo accoglierebbe se scappasse con lei. Jon la lascia andare.',
        en: 'Ygritte is asleep when the black brothers fall on the wildling watchers in the Skirling Pass. She yields, and [[jon-snow|Jon]] takes her captive. Learning that he is a Stark bastard, she tells him how Bael the Bard stole a daughter of Winterfell, so that Stark blood and wildling blood are the same. She knows [[qhorin-halfhand|Qhorin]] for the Halfhand. Left alone with Jon to be killed, she tells him Mance Rayder would take him in if he ran off with her. Jon lets her go.',
      },
    ),
    onScreen(
      [16, 125],
      { it: 'Risparmiata', en: 'Spared' },
      {
        it: 'Ygritte è l’unica rimasta viva quando i ranger dei Guardiani della notte attaccano la sua postazione di vedetta tra le montagne. Chiede che i corpi dei compagni vengano bruciati, ma [[qhorin-halfhand|Qhorin]] sospetta che voglia un fuoco per richiamare altri bruti, e lascia [[jon-snow|Jon]] a giustiziarla. Ygritte lo implora di farla finita, ma Jon esita, e lei scappa. Jon la riprende, e perdono gli altri. Quella notte Ygritte lo convince a stringersi a lei per scaldarsi, poi lo stuzzica con delle avances, che Jon respinge.',
        en: 'Ygritte is the only one left alive when the rangers of the Night’s Watch fall on her watch post in the mountains. She asks them to burn her companions’ bodies, but [[qhorin-halfhand|Qhorin]] suspects she wants a fire to draw other wildlings, and leaves [[jon-snow|Jon]] to put her to death. Ygritte begs him to get it over with, but Jon hesitates, and she runs. He catches her again, and they lose the others. That night she persuades him to lie close for warmth, then teases him with advances, which he rebuffs.',
      },
    ),
    onScreen(
      [17, 127],
      {
        it: 'Dalla parte sbagliata della Barriera',
        en: 'The wrong side of the Wall',
      },
      {
        it: 'Ancora prigioniera di [[jon-snow|Jon]], Ygritte lo prende in giro per la sua verginità mentre lui la porta con sé in cerca di [[qhorin-halfhand|Qhorin]]. Sostiene che il Nord apparteneva al popolo libero molto prima dell’arrivo degli Andali, e che gli uomini del Nord e i bruti discendono tutti dai Primi Uomini, perciò non ha senso che si combattano. Dopo aver colto Jon alla sprovvista con un altro tentativo di sedurlo, lo fa inciampare con la corda, scappa e lo conduce in un’imboscata dei bruti. Avrebbe dovuto prenderla quando poteva, gli dice.',
        en: 'Still [[jon-snow|Jon]]’s prisoner, Ygritte teases him about his virginity as he leads her on in search of [[qhorin-halfhand|Qhorin]]. She argues that the North belonged to the free folk long before the Andals came, and that Northmen and wildlings alike descend from the First Men, so there is no sense in their fighting. Luring Jon off his guard with another attempt to seduce him, she trips him with the rope, escapes and leads him into a wildling ambush. He should have had her when he had the chance, she tells him.',
      },
    ),
    onScreen(
      [18, 142],
      { it: 'Un regalo', en: 'A present' },
      {
        it: 'Ygritte porta [[jon-snow|Jon]] al capo della sua banda come regalo. Lui ordina di uccidere Jon, perché ha già un ranger da interrogare, [[qhorin-halfhand|Qhorin]]. Ygritte gli fa cambiare idea: Mance Rayder vorrà interrogare un uomo con il sangue degli Stark. Qhorin incolpa apertamente Jon della morte dei suoi uomini, e Ygritte è incuriosita dall’astio tra i due. Non sa che la rabbia di Qhorin è un espediente per infiltrare Jon tra i bruti come spia.',
        en: 'Ygritte brings [[jon-snow|Jon]] to the leader of her war band as a present. He orders Jon killed, since he already holds a ranger for questioning, [[qhorin-halfhand|Qhorin]]. Ygritte talks him round: Mance Rayder will want to question a man of Stark blood. Qhorin openly blames Jon for the deaths of his men, and Ygritte is intrigued by the bad blood between them. She does not know that Qhorin’s anger is a ploy to plant Jon among the wildlings as a spy.',
      },
    ),
    inBooks(
      [20, 142],
      { it: 'L’aquila', en: 'The eagle' },
      {
        it: 'Ygritte è tra i quattordici cacciatori del [[lord-of-bones|Lord delle Ossa]] che raggiungono [[jon-snow|Jon]] e [[qhorin-halfhand|Qhorin]] tra le montagne. Jon si arrende, e uccide Qhorin per mettersi alla prova, e i bruti lo accolgono. Ygritte dice a Jon che l’aquila che li seguiva era un tempo l’uomo che Jon ha ucciso nel passo il giorno in cui l’hanno catturata. Dopo che Qhorin viene bruciato, Ygritte dice a Jon che Mance Rayder marcia sulla Barriera.',
        en: 'Ygritte is among the fourteen hunters of the [[lord-of-bones|Lord of Bones]] who overtake [[jon-snow|Jon]] and [[qhorin-halfhand|Qhorin]] in the mountains. Jon yields, and kills Qhorin to prove himself, and the wildlings accept him. Ygritte tells Jon that the eagle which followed them was once the man he killed in the pass the day they captured her. After Qhorin is burned, she tells Jon that Mance Rayder is marching on the Wall.',
      },
    ),
    onScreen(
      [20, 142],
      { it: 'L’esercito nella valle', en: 'The host in the valley' },
      {
        it: 'Sulla strada per l’accampamento di Mance Rayder, Ygritte continua a stuzzicare [[jon-snow|Jon]], picchiettandolo sulla testa con il piatto della sua stessa spada. Quando [[qhorin-halfhand|Qhorin]] attacca Jon e i due vengono lasciati combattere, Ygritte restituisce a Jon la sua spada. Jon uccide Qhorin, e Ygritte e il resto della banda restano sbalorditi, ma accolgono Jon come uno di loro e gli liberano le mani. Ygritte lo porta sulla cresta della montagna e gli mostra l’immenso accampamento dei bruti sottostante.',
        en: 'On the way to Mance Rayder’s camp, Ygritte keeps toying with [[jon-snow|Jon]], tapping him on the head with the flat of his own sword. When [[qhorin-halfhand|Qhorin]] attacks Jon and the two are left to fight, Ygritte gives Jon back his sword. Jon kills Qhorin, and Ygritte and the rest of the band are stunned, but they accept Jon as one of their own and free his hands. Ygritte leads him to the crest of the mountain and shows him the vast wildling camp below.',
      },
    ),
  ],
  'ebben': [
    inBooks(
      [17, 127],
      { it: 'Metamorfo', en: 'Skinchanger' },
      {
        it: 'Ebben è uno dei ranger che esplorano le montagne con [[qhorin-halfhand|Qhorin il Monco]] e con [[jon-snow|Jon]]. Quando Jon ammette di aver lasciato andare la ragazza dei bruti, Qhorin dice che, se l’avesse voluta morta, l’avrebbe fatta uccidere da Ebben. Una mattina Jon si sveglia da un sogno di giganti e di un’aquila gridando il nome del suo lupo, ed Ebben lo chiama metamorfo. Quando un’aquila comincia a seguirli e il gruppo torna indietro, lo scudiero [[dalbridge|Dalbridge]] resta nel passo.',
        en: 'Ebben is one of the rangers who scout the mountains with [[qhorin-halfhand|Qhorin Halfhand]] and [[jon-snow|Jon]]. When Jon admits that he let the wildling girl go, Qhorin says that, had he wanted her dead, he would have had Ebben kill her. One morning Jon wakes from a dream of giants and an eagle shouting his wolf’s name, and Ebben calls him a skinchanger. When an eagle follows them and the party turns back, Squire [[dalbridge|Dalbridge]] stays behind in the pass.',
      },
    ),
    inBooks(
      [20, 142],
      { it: 'Mandato a est', en: 'Sent east' },
      {
        it: 'Con i bruti alle calcagna, [[qhorin-halfhand|Qhorin]] mandò Ebben verso est con l’ultimo cavallo del gruppo, perché raggiungesse al più presto il lord comandante. Ebben non arrivò mai. Quando i cacciatori del [[lord-of-bones|Lord delle Ossa]] raggiunsero Qhorin e [[jon-snow|Jon]] tra le montagne, portavano con sé la testa di Ebben.',
        en: 'With the wildlings on their trail, [[qhorin-halfhand|Qhorin]] sent Ebben east with the party’s last garron, to reach the Lord Commander with all haste. Ebben never got there. When the hunters of the [[lord-of-bones|Lord of Bones]] overtook Qhorin and [[jon-snow|Jon]] in the mountains, they were carrying Ebben’s head.',
      },
    ),
  ],
  'dalbridge': [
    inBooks(
      [17, 127],
      { it: 'A difesa del passo', en: 'Holding the pass' },
      {
        it: 'Lo scudiero Dalbridge cavalca tra le montagne con [[qhorin-halfhand|Qhorin il Monco]], [[jon-snow|Jon]] ed [[ebben|Ebben]]. Quando un’aquila li spia, Qhorin teme che siano stati visti e torna verso il Pugno, senza accendere fuochi nonostante il freddo. I bruti guadagnano terreno. Nel punto dove erano state uccise le vedette, Dalbridge resta indietro con tutte le frecce del gruppo, per tenere il passo e dare agli altri una possibilità in più.',
        en: 'Squire Dalbridge rides with [[qhorin-halfhand|Qhorin Halfhand]], [[jon-snow|Jon]] and [[ebben|Ebben]] through the mountains. When an eagle spies on them, Qhorin fears they have been seen and turns back for the Fist, without lighting fires in the cold. The wildlings gain on them. At the place where the watchers were killed, Dalbridge stays behind with all of the party’s arrows, to hold the pass and give the others a better chance.',
      },
    ),
  ],
  'lord-of-bones': [
    inBooks(
      [18, 142],
      { it: 'La prova di fedeltà', en: 'Proof of loyalty' },
      {
        it: 'Il Lord delle Ossa guida quattordici cacciatori dei bruti, tra cui [[ygritte|Ygritte]], con otto cani, sulle tracce di [[qhorin-halfhand|Qhorin il Monco]] e di [[jon-snow|Jon]]. Portano con sé la testa di [[ebben|Ebben]]. Quando mettono alle strette i due ranger, il Lord delle Ossa ordina di ucciderli, e Jon si arrende. Per mettersi alla prova, ordina il Lord delle Ossa, Jon deve uccidere Qhorin. Jon lo fa, e i bruti lo accolgono, anche se il Lord delle Ossa ha i suoi dubbi. Bruciano Qhorin su una pira, e il Lord delle Ossa si prende alcune delle ossa annerite.',
        en: 'The Lord of Bones leads fourteen wildling hunters, [[ygritte|Ygritte]] among them, with eight dogs, after [[qhorin-halfhand|Qhorin Halfhand]] and [[jon-snow|Jon]]. They carry the head of [[ebben|Ebben]]. When they corner the two rangers, the Lord of Bones orders them killed, and Jon yields. To prove himself, the Lord of Bones commands, Jon must kill Qhorin. Jon does it, and the wildlings take him in, though the Lord of Bones has his doubts. They burn Qhorin on a pyre, and the Lord of Bones claims some of the charred bones.',
      },
    ),
  ],
} satisfies Record<string, Timeline<Story>>
