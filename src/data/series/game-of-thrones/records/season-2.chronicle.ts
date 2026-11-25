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
        it: 'Ser Cleos Frey, figlio della sorella di lord [[tywin-lannister|Tywin]], è stato catturato con [[jaime-lannister|Jaime]] nel Bosco dei Sussurri. Nella sala di Delta delle Acque scatta in piedi quando [[grey-wind|Vento Grigio]] lo annusa, e il [[greatjon-umber|Grande Jon]] lo corregge perché chiama [[robb-stark|Robb]] “mio signore” invece di “Vostra Grazia”. Robb, che lo considera un Lannister, lo manda dalla regina Cersei con le sue condizioni, e Cleos giura sul suo onore di cavaliere di tornare con la risposta.',
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
        it: "Ser Amory Lorch, cavaliere al servizio dei Lannister, ha guidato gli uomini che hanno attaccato le reclute di [[yoren|Yoren]] e ha ucciso lui stesso Yoren. A Harrenhal [[tywin-lannister|Tywin]] lo rimprovera per aver mandato una lettera al nemico, perché non sa leggerla bene. Quando Amory sorprende la coppiera di Tywin, [[arya-stark|Arya]], con una lettera presa dal tavolo del suo signore, va a riferirglielo. Cade morto sulla soglia delle stanze di Tywin, colpito al collo da un dardo avvelenato di [[jaqen-hghar|Jaqen H'ghar]].",
        en: "Ser Amory Lorch, a knight in the Lannisters’ service, led the men who attacked [[yoren|Yoren]]’s recruits and killed Yoren himself. At Harrenhal [[tywin-lannister|Tywin]] berates him for sending a letter to the enemy because he cannot read it properly. When Amory catches Tywin’s cupbearer, [[arya-stark|Arya]], carrying a letter from her lord’s table, he goes to tell him. He falls dead on the threshold of Tywin’s chambers, struck in the neck by a poisoned dart from [[jaqen-hghar|Jaqen H'ghar]].",
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
} satisfies Record<string, Timeline<Story>>
