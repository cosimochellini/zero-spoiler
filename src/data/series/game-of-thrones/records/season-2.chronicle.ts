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
        it: 'Sulla via di Delta delle Acque, uno degli esploratori di Robb racconta a [[catelyn-stark|Catelyn Stark]] delle vittorie del figlio a ovest, e che lord [[tywin-lannister|Tywin]] marcia su Delta delle Acque. Catelyn prende allora Brienne come sua spada giurata, per impedirle di fare qualcosa di sciocco. Al castello trovano uomini Lannister impiccati alle mura: hanno tentato di liberare [[jaime-lannister|Jaime Lannister]]. Il fratello di Catelyn ha fatto impiccare quegli uomini e ha messo Jaime in catene nelle segrete più profonde.',
        en: 'On the way to Riverrun, one of Robb’s scouts tells [[catelyn-stark|Catelyn Stark]] of her son’s victories in the west, and that Lord [[tywin-lannister|Tywin]] is marching on Riverrun. Catelyn then takes Brienne as her sworn sword, to keep her from doing anything foolish. At the castle they find Lannister men hanged from the walls: they tried to free [[jaime-lannister|Jaime Lannister]]. Catelyn’s brother has had those men hanged and put Jaime in chains in the deep dungeons.',
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
} satisfies Record<string, Timeline<Story>>
