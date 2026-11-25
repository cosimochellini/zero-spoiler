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
        it: 'Sul Pugno dei Primi Uomini [[qhorin-halfhand|Qhorin il Monco]] porta la notizia che Mance Rayder sta radunando il suo esercito tra le montagne, e consiglia di mandare esploratori. Il lord comandante [[jeor-mormont|Mormont]] fa partire tre gruppi. [[jarman-buckwell|Jarman Buckwell]] porta quattro uomini tra le montagne, Qhorin porta i suoi in un passo, e Thoren Smallwood guiderà un gruppo lungo il fiume.',
        en: 'On the Fist of the First Men, [[qhorin-halfhand|Qhorin Halfhand]] brings word that Mance Rayder is gathering his host in the mountains, and advises sending scouts. Lord Commander [[jeor-mormont|Mormont]] sends out three parties. [[jarman-buckwell|Jarman Buckwell]] takes four men into the mountains, Qhorin takes his own into a pass, and Thoren Smallwood is to lead a party up the river.',
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
        it: 'Gilly è una delle figlie di [[craster|Craster]] e una delle sue mogli. Quando i Guardiani della notte si fermano alla fortezza, serve il vino e dice le parole che Craster vuole sentire: con lui sono al sicuro. Spaventata da [[ghost-direwolf|Spettro]], viene soccorsa da [[samwell-tarly|Sam]] e gli chiede di portarla via, ma [[jon-snow|Jon]] rifiuta. Prima che i confratelli partano, Sam le regala il ditale di sua madre e promette di tornare a prenderla. Settimane dopo, al Pugno dei Primi Uomini, Sam dice che a Gilly quel posto piacerebbe.',
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
        it: 'Con i bruti alle calcagna, Qhorin mandò [[ebben|Ebben]] avanti dal lord comandante e [[stonesnake|Stonesnake]] a piedi. Quella notte fece recitare a [[jon-snow|Jon]] il giuramento insieme a lui, e gli ordinò di arrendersi quando li avessero presi e di fare qualunque cosa i bruti chiedessero: Jon doveva scoprire i loro piani e tornare. Qhorin promise di dire al lord comandante che Jon non aveva mai infranto il giuramento. Quando il [[lord-of-bones|Lord delle Ossa]] li raggiunse, Jon si arrese. Qhorin disse che il sangue bastardo è vile, e Jon, a cui era stato ordinato di ucciderlo, lo abbatté. I bruti bruciarono il suo corpo.',
        en: 'With the wildlings on their trail, Qhorin sent [[ebben|Ebben]] ahead to the Lord Commander and [[stonesnake|Stonesnake]] off on foot. That night he had [[jon-snow|Jon]] recite the oath with him, and ordered him to yield when they were caught and to do whatever the wildlings asked: Jon was to learn their plans and return. Qhorin promised to tell the Lord Commander that Jon never broke his oath. When the [[lord-of-bones|Lord of Bones]] overtook them, Jon yielded. Qhorin called bastard blood craven, and Jon, told to kill him, cut him down. The wildlings burned his body.',
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
        it: 'Stonesnake è un ranger del gruppo di [[qhorin-halfhand|Qhorin il Monco]]. Nel Passo Skirling lui e [[jon-snow|Jon]] si offrono di occuparsi delle vedette dei bruti appostate in alto, e Stonesnake insegna a Jon ad arrampicarsi su una parete a picco. In cima Stonesnake uccide la vedetta con il corno prima che possa suonarlo, mentre Jon abbatte l’uomo accanto al fuoco. Quando la terza, una donna della lancia di nome Ygritte, si arrende, Stonesnake avverte Jon che andrebbe uccisa, e chiama assassino e ladro il Bael del suo racconto.',
        en: 'Stonesnake is a ranger in [[qhorin-halfhand|Qhorin Halfhand]]’s party. In the Skirling Pass he and [[jon-snow|Jon]] volunteer to deal with the wildling watchers high above, and he teaches Jon to climb a sheer cliff. At the top Stonesnake kills the watcher with the horn before he can sound it, while Jon cuts down the man by the fire. When the third, a spearwife named Ygritte, yields, Stonesnake warns Jon that she should be killed, and calls the Bael of her tale a murderer and a robber.',
      },
    ),
    inBooks(
      [20, 142],
      { it: 'A piedi per i passi alti', en: 'On foot through the high passes' },
      {
        it: 'Mentre i bruti si avvicinano al gruppo di [[qhorin-halfhand|Qhorin]], la giumenta di Stonesnake si spezza una zampa. Qhorin lo manda avanti da solo, a piedi, per i passi alti fino al Pugno dei Primi Uomini. Stonesnake dovrà riferire al lord comandante [[jeor-mormont|Mormont]] tutto quello che [[jon-snow|Jon]] ha visto: che lo attendono giganti, warg e di peggio, e che gli alberi hanno di nuovo gli occhi.',
        en: 'As the wildlings close in on [[qhorin-halfhand|Qhorin]]’s party, Stonesnake’s mare breaks a leg. Qhorin sends him on alone, on foot, by the high passes to the Fist of the First Men. Stonesnake is to tell Lord Commander [[jeor-mormont|Mormont]] everything [[jon-snow|Jon]] saw: that he faces giants and wargs and worse, and that the trees have eyes again.',
      },
    ),
  ],
  'ygritte': [
    inBooks(
      [16, 125],
      { it: 'Bael il Bardo', en: 'Bael the Bard' },
      {
        it: 'Ygritte dorme accanto al fuoco quando i confratelli piombano sulle vedette dei bruti nel Passo Skirling. Si arrende, e [[jon-snow|Jon]] la fa prigioniera. Quando scopre che è un bastardo degli Stark, gli racconta come Bael il Bardo rapì una figlia di Grande Inverno, e come il sangue degli Stark e quello dei bruti siano quindi lo stesso. Riconosce [[qhorin-halfhand|Qhorin]] come il Monco. Lasciata sola con Jon perché lui la uccida, gli dice che Mance Rayder lo accoglierebbe se scappasse con lei. Jon la lascia andare.',
        en: 'Ygritte is asleep beside the fire when the black brothers fall on the wildling watchers in the Skirling Pass. She yields, and [[jon-snow|Jon]] takes her captive. Learning that he is a Stark bastard, she tells him how Bael the Bard stole a daughter of Winterfell, so that Stark blood and wildling blood are the same. She knows [[qhorin-halfhand|Qhorin]] for the Halfhand. Left alone with Jon to be killed, she tells him Mance Rayder would take him in if he ran off with her. Jon lets her go.',
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
        it: 'Il Lord delle Ossa guida quattordici cacciatori dei bruti con otto cani, tra cui [[ygritte|Ygritte]], sulle tracce di [[qhorin-halfhand|Qhorin il Monco]] e di [[jon-snow|Jon]]. Portano con sé la testa di [[ebben|Ebben]]. Quando mettono alle strette i due ranger, il Lord delle Ossa ordina di ucciderli, e Jon si arrende. Per mettersi alla prova, ordina il Lord delle Ossa, Jon deve uccidere Qhorin. Jon lo fa, e i bruti lo accolgono, anche se il Lord delle Ossa ha i suoi dubbi. Bruciano Qhorin su una pira, e il Lord delle Ossa si prende alcune delle ossa annerite.',
        en: 'The Lord of Bones leads fourteen wildling hunters with eight dogs, [[ygritte|Ygritte]] among them, after [[qhorin-halfhand|Qhorin Halfhand]] and [[jon-snow|Jon]]. They carry the head of [[ebben|Ebben]]. When they corner the two rangers, the Lord of Bones orders them killed, and Jon yields. To prove himself, the Lord of Bones commands, Jon must kill Qhorin. Jon does it, and the wildlings take him in, though the Lord of Bones has his doubts. They burn Qhorin on a pyre, and the Lord of Bones claims some of the charred bones.',
      },
    ),
  ],
} satisfies Record<string, Timeline<Story>>
