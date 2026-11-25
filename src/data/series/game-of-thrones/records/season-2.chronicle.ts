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
        it: 'Ser Alton Lannister, lontano cugino dei Lannister, è stato fatto prigioniero combattendo contro l’esercito del Nord. [[robb-stark|Robb Stark]] lo manda ad Approdo del Re con le sue condizioni: la liberazione delle sorelle, le ossa del padre, e l’indipendenza del Nord e delle Terre dei Fiumi. Alton trova onorevoli le prime richieste ma dubita del resto, e ricorda a Robb che [[joffrey-baratheon|Joffrey]] è un Baratheon. Robb risponde: “Davvero?”',
        en: 'Ser Alton Lannister, a distant cousin of the Lannisters, was taken prisoner fighting the northern army. [[robb-stark|Robb Stark]] sends him to King’s Landing with his terms: the release of his sisters, his father’s bones, and a free North and riverlands. Alton calls the first demands honourable but doubts the rest, and reminds Robb that [[joffrey-baratheon|Joffrey]] is a Baratheon. Robb answers, “Is he?”',
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
      [20, 137],
      { it: 'Sposa in segreto', en: 'Married in secret' },
      {
        it: 'Talisa è rimasta nell’accampamento di [[robb-stark|Robb]] a curare i feriti. Robb dice a sua madre, [[catelyn-stark|Catelyn]], che ama Talisa e che non sposerà una Frey, nonostante gli avvertimenti di lei sul giuramento che ha fatto. Quella notte, davanti a un septon, Talisa e Robb si sposano in segreto e si promettono la vita l’uno all’altra.',
        en: 'Talisa has stayed in [[robb-stark|Robb]]’s camp, tending the wounded. Robb tells his mother, [[catelyn-stark|Catelyn]], that he loves Talisa and will not marry a Frey, despite her warnings about the oath he swore. That night, before a septon, Talisa and Robb are married in secret and pledge their lives to each other.',
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
      [16, 112],
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
    onScreen(
      [15, 100],
      { it: 'Domande a Harrenhal', en: 'Questions at Harrenhal' },
      {
        it: "Il Tickler è il torturatore degli uomini di [[gregor-clegane|ser Gregor Clegane]] a Harrenhal. Ogni giorno interroga un prigioniero scelto da Gregor, con un topo in un secchio arroventato legato al petto, chiedendo dell’oro nascosto e della Fratellanza, e va avanti finché il prigioniero non muore. [[gendry|Gendry]] si salva quando [[tywin-lannister|Tywin]] fa smettere la tortura. [[arya-stark|Arya]] dà il nome del Tickler a [[jaqen-hghar|Jaqen H'ghar]] come prima delle tre morti, e il Tickler viene trovato nel cortile con il collo spezzato.",
        en: "The Tickler is the torturer among Ser [[gregor-clegane|Gregor Clegane]]’s men at Harrenhal. Each day he questions a prisoner Gregor picks, with a rat in a heated bucket strapped to the chest, asking about hidden gold and the Brotherhood, and goes on until the prisoner dies. [[gendry|Gendry]] is spared when [[tywin-lannister|Tywin]] stops the torture. [[arya-stark|Arya]] gives the Tickler’s name to [[jaqen-hghar|Jaqen H'ghar]] as the first of three deaths, and the Tickler is found in the courtyard with his neck broken.",
      },
    ),
    inBooks(
      [15, 100],
      { it: 'L’uomo qualunque', en: 'The ordinary man' },
      {
        it: 'Il Tickler è un uomo dall’aspetto qualunque tra i soldati di [[gregor-clegane|ser Gregor Clegane]]. In un villaggio sull’Occhio degli Dei interroga il prigioniero che Gregor sceglie ogni mattina, a volte aiutato da [[chiswyck|Chiswyck]], chiedendo del cibo e dei beni nascosti e di [[beric-dondarrion|Beric Dondarrion]], finché il prigioniero non muore. Durante la marcia verso Harrenhal è più silenzioso degli altri, e [[arya-stark|Arya]] lo trova quasi troppo spaventoso per odiarlo, anche se sussurra il suo nome con gli altri. Con lui c’è [[polliver|Polliver]].',
        en: 'The Tickler is an ordinary-looking man among Ser [[gregor-clegane|Gregor Clegane]]’s soldiers. In a village on the Gods Eye he questions the prisoner Gregor picks each morning, sometimes helped by [[chiswyck|Chiswyck]], asking about hidden food and valuables and about [[beric-dondarrion|Beric Dondarrion]], until the prisoner dies. On the march to Harrenhal he is quieter than most, and [[arya-stark|Arya]] finds him almost too frightening to hate, though she whispers his name with the rest. [[polliver|Polliver]] rides with him.',
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
        it: 'Vargo Hoat, altissimo e magro come un bastone, guida i Bravi Camerati, mercenari al soldo di lord [[tywin-lannister|Tywin]]. Arrivano a Harrenhal e vengono alloggiati nella Torre della Vedova. La prima notte uno scudiero viene ucciso e due mercenari restano feriti in una rissa, e Tywin li fa impiccare entrambi. [[weese|Weese]] avverte [[arya-stark|Arya]] che non vuole conoscerli. Dopo poco la compagnia riparte per le sue razzie.',
        en: 'Vargo Hoat, very tall and thin as a stick, leads the Brave Companions, sellswords in Lord [[tywin-lannister|Tywin]]’s pay. They arrive at Harrenhal and are housed in the Widow’s Tower. On their first night a squire is killed and two of the sellswords are wounded in a brawl, and Tywin hangs them both. [[weese|Weese]] warns [[arya-stark|Arya]] that she does not want to know them. Before long the company rides out again to raid.',
      },
    ),
    inBooks(
      [18, 121],
      { it: 'Il voltagabbana', en: 'The turncoat' },
      {
        it: 'Vargo Hoat torna a Harrenhal con cento prigionieri del Nord, tra cui il loro comandante, Robett Glover, e dice che [[roose-bolton|Roose Bolton]] è fuggito. [[amory-lorch|Ser Amory Lorch]], ora castellano, li fa rinchiudere in una cella. Quella notte i Bravi Camerati si rivoltano contro gli uomini dell’ovest, e gli uomini del Nord vengono liberati. Il giorno dopo Vargo consegna il castello a Roose, che aveva comprato i suoi servigi: i prigionieri erano un inganno. I suoi uomini portano Amory nudo per il castello e lo gettano in pasto a un orso in gabbia.',
        en: 'Vargo Hoat returns to Harrenhal with a hundred northern prisoners, among them their commander, Robett Glover, and says that [[roose-bolton|Roose Bolton]] has fled. Ser [[amory-lorch|Amory Lorch]], now castellan, has them locked in a cell. That night the Brave Companions turn on the westermen, and the northmen are freed. The next day Vargo hands the castle to Roose, who had bought his service; the prisoners were a ruse. His men parade Amory naked through the castle and feed him to a caged bear.',
      },
    ),
    inBooks(
      [18, 138],
      { it: 'Harrenhal promessa', en: 'Harrenhal promised' },
      {
        it: '[[roose-bolton|Roose Bolton]] tiene Harrenhal con i Bravi Camerati di Vargo Hoat. Molti dei servi che lavoravano per i Lannister sono stati uccisi e le loro teste messe sulle picche. Roose intende tornare a nord e lasciare Harrenhal a Vargo, e dice alla sua coppiera, [[arya-stark|Arya]], che resterà a servire il caprone. Per convincere [[gendry|Gendry]] a fuggire con lei, Arya gli racconta che Vargo vuole tagliare un piede a ogni servo.',
        en: '[[roose-bolton|Roose Bolton]] holds Harrenhal with Vargo Hoat’s Brave Companions. Many of the servants who worked for the Lannisters have been killed and their heads put on spikes. Roose means to go back north and give Harrenhal to Vargo, and tells his cupbearer, [[arya-stark|Arya]], that she will stay to serve the goat. To get [[gendry|Gendry]] to flee with her, Arya tells him that Vargo means to cut a foot off every servant.',
      },
    ),
  ],
} satisfies Record<string, Timeline<Story>>
