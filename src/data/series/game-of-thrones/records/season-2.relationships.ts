import type { Relationship, Timeline } from '~/data/types'

/**
 * The relationships of the characters season 2 files (#1461), one cast group
 * per child, Essos and Qarth first (#1477). Chapters are the site's absolute
 * ones: A Clash of Kings' chapter N (prologue 0) is 74 + N. An entry without
 * `source` reads in both media; a fact one medium alone tells sits in an
 * entry of its own. A returning season-1 character's stage-2 snapshots stay
 * in `season-1.relationships.ts`. The pages read are in
 * docs/content-provenance/game-of-thrones-relationships.json.
 */
const essos = {
  // Kovarro (show only)
  kovDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he rides for as a bloodrider. In the Red Waste she sends him east to look for food and shelter.',
      it: 'La khaleesi per cui cavalca come cavaliere di sangue. Nel Deserto Rosso lo manda verso est in cerca di cibo e di un riparo.',
    },
  },
  kovRakharo: {
    character: 'rakharo',
    type: { en: 'Fellow bloodrider', it: 'Altro cavaliere di sangue' },
    summary: {
      en: 'Another of the khaleesi’s bloodriders, sent out to scout in another direction at the same time.',
      it: 'Un altro cavaliere di sangue della khaleesi, mandato in esplorazione nello stesso momento in un’altra direzione.',
    },
  },
  kovRakharoDead: {
    character: 'rakharo',
    type: { en: 'Fellow bloodrider', it: 'Altro cavaliere di sangue' },
    summary: {
      en: 'Another of the khaleesi’s bloodriders, sent out to scout with him. Rakharo’s horse came back carrying only his head.',
      it: 'Un altro cavaliere di sangue della khaleesi, partito in esplorazione con lui. Il cavallo di Rakharo è tornato con la sua sola testa.',
    },
  },
  kovAggo: {
    character: 'aggo',
    type: { en: 'Fellow bloodrider', it: 'Altro cavaliere di sangue' },
    summary: {
      en: 'Another of the khaleesi’s bloodriders, sent out to scout in another direction at the same time.',
      it: 'Un altro cavaliere di sangue della khaleesi, mandato in esplorazione nello stesso momento in un’altra direzione.',
    },
  },
  kovDaenerysStatue: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he rides for. He found Qarth for her, and at Xaro’s feast she forbids him to steal from their host.',
      it: 'La khaleesi per cui cavalca. Ha trovato Qarth per lei, e alla festa di Xaro lei gli vieta di derubare il loro ospite.',
    },
  },
  kovMalakho: {
    character: 'malakho',
    type: { en: 'Fellow warrior', it: 'Compagno d’armi' },
    summary: {
      en: 'A Dothraki of the khalasar. At the feast they work out how to carry off a golden statue.',
      it: 'Un dothraki del khalasar. Alla festa ragionano insieme su come portarsi via una statua d’oro.',
    },
  },
  kovXaro: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The merchant prince who let the khalasar into Qarth and keeps them in his house. Kovarro eyes his treasures.',
      it: 'Il principe mercante che ha fatto entrare il khalasar a Qarth e lo ospita nella sua casa. Kovarro ne adocchia i tesori.',
    },
  },
  kovDaenerysHouse: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he guards. He goes with her to the House of the Undying, and stands by her when she punishes Xaro.',
      it: 'La khaleesi che protegge. La accompagna alla Casa degli Eterni, e le resta accanto quando punisce Xaro.',
    },
  },
  kovXaroVault: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Traitor', it: 'Traditore' },
    summary: {
      en: 'The merchant prince who had the khaleesi’s dragons stolen. She has him locked in his own empty vault, and the khalasar takes his gold.',
      it: 'Il principe mercante che ha fatto rubare i draghi della khaleesi. Lei lo fa chiudere nella sua camera blindata vuota, e il khalasar si prende il suo oro.',
    },
  },
  kovJorah: {
    character: 'jorah-mormont',
    type: { en: 'Exiled knight', it: 'Cavaliere in esilio' },
    summary: {
      en: 'The khaleesi’s knight. Both of them go with her to the House of the Undying.',
      it: 'Il cavaliere della khaleesi. Entrambi la accompagnano alla Casa degli Eterni.',
    },
  },

  // Malakho (show only)
  malDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he follows to Qarth. She forbids him and Kovarro to steal from their host.',
      it: 'La khaleesi che ha seguito fino a Qarth. Vieta a lui e a Kovarro di derubare il loro ospite.',
    },
  },
  malKovarro: {
    character: 'kovarro',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'One of the khaleesi’s bloodriders. At the feast they talk of stealing a golden statue; Malakho says it is too heavy.',
      it: 'Uno dei cavalieri di sangue della khaleesi. Alla festa parlano di rubare una statua d’oro; secondo Malakho è troppo pesante.',
    },
  },
  malXaro: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The merchant prince who keeps the khalasar in his house, and owns the statue.',
      it: 'Il principe mercante che ospita il khalasar nella sua casa, e a cui appartiene la statua.',
    },
  },
  malDaenerysVault: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he guards. When she learns Xaro betrayed her, she has him locked in his vault.',
      it: 'La khaleesi che protegge. Quando scopre che Xaro l’ha tradita, lo fa chiudere nella sua camera blindata.',
    },
  },
  malXaroVault: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Traitor', it: 'Traditore' },
    summary: {
      en: 'The merchant prince who betrayed the khaleesi. Malakho forces him into his own empty vault.',
      it: 'Il principe mercante che ha tradito la khaleesi. Malakho lo spinge dentro la sua camera blindata vuota.',
    },
  },

  // Xaro Xhoan Daxos
  xarDaenerysEpisode: {
    character: 'daenerys-targaryen',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The queen he vouched for so Qarth would let her in. He hosts her, and offers her his fortune if she marries him.',
      it: 'La regina per cui si è fatto garante perché Qarth la lasciasse entrare. La ospita, e le offre la sua fortuna se lo sposerà.',
    },
  },
  xarJorahEpisode: {
    character: 'jorah-mormont',
    type: { en: 'Her adviser', it: 'Il suo consigliere' },
    summary: {
      en: 'Daenerys’s knight, who tells her not to accept Xaro’s money.',
      it: 'Il cavaliere di Daenerys, che le consiglia di non accettare il denaro di Xaro.',
    },
  },
  xarKovarro: {
    character: 'kovarro',
    type: { en: 'Guest’s bloodrider', it: 'Cavaliere di sangue dell’ospite' },
    summary: {
      en: 'One of Daenerys’s bloodriders. At the feast he talks of stealing Xaro’s golden statue.',
      it: 'Uno dei cavalieri di sangue di Daenerys. Alla festa parla di rubare la statua d’oro di Xaro.',
    },
  },
  xarDaenerysCoup: {
    character: 'daenerys-targaryen',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The queen he swore to protect. Her dragons are stolen from his house, and he takes the crown of Qarth with the thief’s help.',
      it: 'La regina che aveva giurato di proteggere. I suoi draghi vengono rubati dalla sua casa, e lui prende la corona di Qarth con l’aiuto del ladro.',
    },
  },
  xarDaenerysVault: {
    character: 'daenerys-targaryen',
    type: { en: 'Guest he betrayed', it: 'Ospite tradita' },
    summary: {
      en: 'The queen whose dragons he had stolen. She takes his key, finds his vault empty, and has him locked inside it.',
      it: 'La regina a cui ha fatto rubare i draghi. Lei gli prende la chiave, trova vuota la sua camera blindata e ce lo fa chiudere dentro.',
    },
  },
  xarDoreah: {
    character: 'doreah',
    type: { en: 'Accomplice', it: 'Complice' },
    summary: {
      en: 'Daenerys’s handmaiden, who betrayed her to him. She is found in his bed and locked in the vault with him.',
      it: 'L’ancella di Daenerys, che l’ha tradita per lui. Viene trovata nel suo letto e chiusa con lui nella camera blindata.',
    },
  },
  xarJorahVault: {
    character: 'jorah-mormont',
    type: { en: 'Her adviser', it: 'Il suo consigliere' },
    summary: {
      en: 'Daenerys’s knight. He has the Dothraki seize Xaro’s gold and jewels.',
      it: 'Il cavaliere di Daenerys. Fa prendere ai dothraki l’oro e i gioielli di Xaro.',
    },
  },
  xarMalakho: {
    character: 'malakho',
    type: { en: 'Guest’s warrior', it: 'Guerriero dell’ospite' },
    summary: {
      en: 'One of Daenerys’s Dothraki. He forces Xaro into the empty vault.',
      it: 'Uno dei dothraki di Daenerys. Spinge Xaro dentro la camera blindata vuota.',
    },
  },
  xarDaenerysChapter: {
    character: 'daenerys-targaryen',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The queen he hosts in his palace. He asks her to marry him, she refuses, and he says he has no warships to give her.',
      it: 'La regina che ospita nel suo palazzo. Le chiede di sposarlo, lei rifiuta, e lui dice di non avere navi da guerra da darle.',
    },
  },
  xarPyatPree: {
    character: 'pyat-pree',
    type: { en: 'Rival', it: 'Rivale' },
    summary: {
      en: 'The warlock who came with him to find Daenerys. Xaro warns her that warlocks are not to be trusted.',
      it: 'Lo stregone venuto con lui a cercare Daenerys. Xaro la avverte che degli stregoni non ci si può fidare.',
    },
  },
  xarQuaithe: {
    character: 'quaithe',
    type: { en: 'Fellow seeker', it: 'Compagna di viaggio' },
    summary: {
      en: 'The masked woman who came with him to find Daenerys. When she tells Daenerys to go to Asshai, Xaro joins the bloodriders in telling her not to trust her.',
      it: 'La donna mascherata venuta con lui a cercare Daenerys. Quando dice a Daenerys di andare ad Asshai, Xaro si unisce ai cavalieri di sangue nel dirle di non fidarsi.',
    },
  },
  xarJorahChapter: {
    character: 'jorah-mormont',
    type: { en: 'Her adviser', it: 'Il suo consigliere' },
    summary: {
      en: 'Daenerys’s knight. He tells her Xaro means to win one of her dragons through the marriage.',
      it: 'Il cavaliere di Daenerys. Le dice che Xaro vuole ottenere uno dei suoi draghi con il matrimonio.',
    },
  },
  xarDaenerysShips: {
    character: 'daenerys-targaryen',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The queen he hosts. He warns her the warlocks are coming for her and asks again to marry her; he offers ten ships for one of her dragons.',
      it: 'La regina che ospita. La avverte che gli stregoni stanno radunando il loro potere contro di lei e le chiede ancora di sposarlo; le offre dieci navi in cambio di uno dei suoi draghi.',
    },
  },

  // Pyat Pree (books only)
  pyaDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen he seeks', it: 'Regina che cerca' },
    summary: {
      en: 'The mother of dragons he crossed the Red Waste to find. He urges her to come to the House of the Undying, and Jorah tells her to ask him for help.',
      it: 'La madre dei draghi che ha attraversato il Deserto Rosso per trovare. La invita alla Casa degli Eterni, e Jorah le consiglia di chiedere aiuto a lui.',
    },
  },
  pyaXaro: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Rival', it: 'Rivale' },
    summary: {
      en: 'The merchant prince who came with him to find Daenerys. The two bicker in front of her, and Xaro tells her not to trust warlocks.',
      it: 'Il principe mercante venuto con lui a cercare Daenerys. I due litigano davanti a lei, e Xaro le dice di non fidarsi degli stregoni.',
    },
  },
  pyaQuaithe: {
    character: 'quaithe',
    type: { en: 'Fellow seeker', it: 'Compagna di viaggio' },
    summary: {
      en: 'The masked woman of the Shadow who came with him to find Daenerys.',
      it: 'La donna mascherata dell’Ombra venuta con lui a cercare Daenerys.',
    },
  },
  pyaDaenerysHouse: {
    character: 'daenerys-targaryen',
    type: { en: 'Enemy', it: 'Nemica' },
    summary: {
      en: 'The queen he led into the House of the Undying. She comes out alive, with the house burning, and he goes at her with a dagger.',
      it: 'La regina che ha condotto nella Casa degli Eterni. Ne esce viva, con la casa in fiamme, e lui la aggredisce con un pugnale.',
    },
  },
  pyaJhogo: {
    character: 'jhogo',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'One of Daenerys’s bloodriders. He knocks Pyat Pree’s knife aside with his whip.',
      it: 'Uno dei cavalieri di sangue di Daenerys. Con la frusta fa volare via il pugnale di Pyat Pree.',
    },
  },
  pyaRakharo: {
    character: 'rakharo',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'One of Daenerys’s bloodriders. He knocks Pyat Pree to the ground.',
      it: 'Uno dei cavalieri di sangue di Daenerys. Butta a terra Pyat Pree con uno schiaffo.',
    },
  },
  pyaDrogon: {
    character: 'drogon',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Daenerys’s black dragon. He goes for the warlock and gives her bloodriders their chance.',
      it: 'Il drago nero di Daenerys. Si avventa sullo stregone e dà ai cavalieri di sangue il tempo di intervenire.',
    },
  },

  // Quaithe (books only)
  quaDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Mother of dragons', it: 'Madre dei draghi' },
    summary: {
      en: 'The queen she has crossed the Red Waste to find, because she was seeking dragons.',
      it: 'La regina che ha raggiunto attraversando il Deserto Rosso, perché cercava i draghi.',
    },
  },
  quaJhogo: {
    character: 'jhogo',
    type: { en: 'Guide', it: 'Guida' },
    summary: {
      en: 'Daenerys’s bloodrider, who brings her and two other strangers from Qarth back to the ruined city.',
      it: 'Il cavaliere di sangue di Daenerys, che porta lei e altri due stranieri di Qarth nella città in rovina.',
    },
  },
  quaDaenerysWarning: {
    character: 'daenerys-targaryen',
    type: { en: 'Mother of dragons', it: 'Madre dei draghi' },
    summary: {
      en: 'The queen she came to find. Quaithe warns her to beware of everyone, because they all want her dragons.',
      it: 'La regina che è venuta a cercare. Quaithe la avverte di guardarsi da tutti, perché tutti vogliono i suoi draghi.',
    },
  },
  quaJorah: {
    character: 'jorah-mormont',
    type: { en: 'Her knight', it: 'Il suo cavaliere' },
    summary: {
      en: 'Daenerys’s knight. He says Quaithe’s warning is right, but he does not trust her.',
      it: 'Il cavaliere di Daenerys. Dice che l’avvertimento di Quaithe è giusto, ma di lei non si fida.',
    },
  },
  quaDaenerysAsshai: {
    character: 'daenerys-targaryen',
    type: { en: 'Mother of dragons', it: 'Madre dei draghi' },
    summary: {
      en: 'The queen she came to find. In the market she tells her to leave Qarth soon, or she will never be allowed to leave, and to seek the truth in Asshai.',
      it: 'La regina che è venuta a cercare. Al mercato le dice di lasciare presto Qarth, o non le sarà più permesso di andarsene, e di cercare la verità ad Asshai.',
    },
  },
  quaJhogoWary: {
    character: 'jhogo',
    type: { en: 'Wary bloodrider', it: 'Cavaliere di sangue diffidente' },
    summary: {
      en: 'Daenerys’s bloodrider, who brought her from the Red Waste. He calls the firemage’s fire a trick, and with the others he tells Daenerys not to trust her.',
      it: 'Il cavaliere di sangue di Daenerys, che l’ha portata dal Deserto Rosso. Chiama un trucco il fuoco del mago, e con gli altri dice a Daenerys di non fidarsi di lei.',
    },
  },
  quaXaro: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Fellow seeker', it: 'Compagno di viaggio' },
    summary: {
      en: 'The merchant prince who came with her to find Daenerys. He too tells Daenerys not to trust her.',
      it: 'Il principe mercante venuto con lei a cercare Daenerys. Anche lui dice a Daenerys di non fidarsi di lei.',
    },
  },
  quaPyatPree: {
    character: 'pyat-pree',
    type: { en: 'Fellow seeker', it: 'Compagno di viaggio' },
    summary: {
      en: 'The warlock who came with her to find Daenerys.',
      it: 'Lo stregone venuto con lei a cercare Daenerys.',
    },
  },

  // The dragons (books only in this stage: the show names them later)
  drgDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'The mother of dragons, who hatched him in Drogo’s pyre. She names him for her husband, and lets him ride on her shoulder.',
      it: 'La madre dei draghi, che lo ha fatto schiudere nella pira di Drogo. Gli dà il nome del marito, e lo lascia viaggiare sulla sua spalla.',
    },
  },
  drgAggo: {
    character: 'aggo',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'One of Daenerys’s bloodriders. He says the black dragon is Balerion reborn.',
      it: 'Uno dei cavalieri di sangue di Daenerys. Dice che il drago nero è Balerion rinato.',
    },
  },
  drgRhaegal: {
    character: 'rhaegal',
    type: { en: 'Brood brother', it: 'Fratello di covata' },
    summary: {
      en: 'The green and bronze dragon, hatched in the same pyre.',
      it: 'Il drago verde e bronzo, nato nella stessa pira.',
    },
  },
  drgViserion: {
    character: 'viserion',
    type: { en: 'Brood brother', it: 'Fratello di covata' },
    summary: {
      en: 'The cream and gold dragon, hatched in the same pyre.',
      it: 'Il drago color crema e oro, nato nella stessa pira.',
    },
  },
  drgDrogo: {
    character: 'drogo',
    type: { en: 'Namesake', it: 'Il suo omonimo' },
    summary: {
      en: 'Daenerys’s dead husband, the khal. She names the black dragon after him.',
      it: 'Il marito morto di Daenerys, il khal. Lei dà il suo nome al drago nero.',
    },
  },
  drgDaenerysHouse: {
    character: 'daenerys-targaryen',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'The mother of dragons. He goes with her into the House of the Undying, and when the Undying try to consume her, he tears their heart apart.',
      it: 'La madre dei draghi. Entra con lei nella Casa degli Eterni, e quando gli Eterni tentano di divorarla, ne fa a pezzi il cuore.',
    },
  },
  drgPyatPree: {
    character: 'pyat-pree',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The warlock who attacks Daenerys with a dagger outside the burning house. Drogon flies at him.',
      it: 'Lo stregone che aggredisce Daenerys con un pugnale fuori dalla casa in fiamme. Drogon gli si avventa contro.',
    },
  },
  rhgDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'The mother of dragons, who hatched him in Drogo’s pyre. In the Red Waste she names him for her brother Rhaegar.',
      it: 'La madre dei draghi, che lo ha fatto schiudere nella pira di Drogo. Nel Deserto Rosso gli dà il nome di suo fratello Rhaegar.',
    },
  },
  rhgDrogon: {
    character: 'drogon',
    type: { en: 'Brood brother', it: 'Fratello di covata' },
    summary: {
      en: 'The black and red dragon, hatched in the same pyre.',
      it: 'Il drago nero e rosso, nato nella stessa pira.',
    },
  },
  rhgViserion: {
    character: 'viserion',
    type: { en: 'Brood brother', it: 'Fratello di covata' },
    summary: {
      en: 'The cream and gold dragon, hatched in the same pyre.',
      it: 'Il drago color crema e oro, nato nella stessa pira.',
    },
  },
  visDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'The mother of dragons, who hatched him in Drogo’s pyre. In the Red Waste she names him for her brother Viserys.',
      it: 'La madre dei draghi, che lo ha fatto schiudere nella pira di Drogo. Nel Deserto Rosso gli dà il nome di suo fratello Viserys.',
    },
  },
  visDrogon: {
    character: 'drogon',
    type: { en: 'Brood brother', it: 'Fratello di covata' },
    summary: {
      en: 'The black and red dragon, hatched in the same pyre.',
      it: 'Il drago nero e rosso, nato nella stessa pira.',
    },
  },
  visRhaegal: {
    character: 'rhaegal',
    type: { en: 'Brood brother', it: 'Fratello di covata' },
    summary: {
      en: 'The green and bronze dragon, hatched in the same pyre.',
      it: 'Il drago verde e bronzo, nato nella stessa pira.',
    },
  },
  visViserys: {
    character: 'viserys-targaryen',
    type: { en: 'Namesake', it: 'Il suo omonimo' },
    summary: {
      en: 'Daenerys’s dead brother. She names the cream and gold dragon after him.',
      it: 'Il fratello morto di Daenerys. Lei dà il suo nome al drago color crema e oro.',
    },
  },

  // Strong Belwas and Arstan Whitebeard (books only)
  belDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen he is sent for', it: 'Regina da riportare' },
    summary: {
      en: 'The queen Illyrio sent him to bring back to Pentos. At the port of Qarth he and his squire save her from an assassin.',
      it: 'La regina che Illyrio lo ha mandato a riportare a Pentos. Al porto di Qarth lui e il suo scudiero la salvano da un assassino.',
    },
  },
  belArstan: {
    character: 'arstan-whitebeard',
    type: { en: 'Squire', it: 'Scudiero' },
    summary: {
      en: 'The old man who serves as his squire. He knocks the deadly box out of Daenerys’s hands.',
      it: 'Il vecchio che gli fa da scudiero. Fa cadere dalle mani di Daenerys la scatola mortale.',
    },
  },
  belIllyrio: {
    character: 'illyrio-mopatis',
    type: { en: 'Patron', it: 'Mandante' },
    summary: {
      en: 'The magister of Pentos who sent him to Qarth to bring Daenerys and her dragons back.',
      it: 'Il magistro di Pentos che lo ha mandato a Qarth a riportare indietro Daenerys e i suoi draghi.',
    },
  },
  belJorah: {
    character: 'jorah-mormont',
    type: { en: 'Queen’s knight', it: 'Cavaliere della regina' },
    summary: {
      en: 'Daenerys’s knight, who saw him and the old man following her through the port.',
      it: 'Il cavaliere di Daenerys, che si è accorto che lui e il vecchio la seguivano per il porto.',
    },
  },
  arsDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen he is sent for', it: 'Regina da riportare' },
    summary: {
      en: 'The queen Illyrio sent him to bring back to Pentos. At the port of Qarth he knocks a box with a manticore out of her hands.',
      it: 'La regina che Illyrio lo ha mandato a riportare a Pentos. Al porto di Qarth le fa cadere dalle mani una scatola con dentro una manticora.',
    },
  },
  arsBelwas: {
    character: 'strong-belwas',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The eunuch pit fighter he serves as squire.',
      it: 'L’eunuco, combattente delle arene, di cui è lo scudiero.',
    },
  },
  arsIllyrio: {
    character: 'illyrio-mopatis',
    type: { en: 'Patron', it: 'Mandante' },
    summary: {
      en: 'The magister of Pentos who sent him and Belwas to Qarth.',
      it: 'Il magistro di Pentos che ha mandato lui e Belwas a Qarth.',
    },
  },
  arsJorah: {
    character: 'jorah-mormont',
    type: { en: 'Queen’s knight', it: 'Cavaliere della regina' },
    summary: {
      en: 'Daenerys’s knight, who saw him following her through the port with his staff.',
      it: 'Il cavaliere di Daenerys, che lo ha visto seguirla per il porto con il suo bastone.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * The King's Landing and Blackwater cast (#1479). The returning season-1
 * characters' stage-2 cards are in `season-1.relationships.ts`.
 */
const kingsLanding = {
  // Daisy (show only)
  daiRos: {
    character: 'ros',
    type: { en: 'Guide', it: 'Guida' },
    summary: {
      en: 'The girl who shows her round Littlefinger’s brothel on her first day and tells her how things are done there.',
      it: 'La ragazza che il primo giorno le mostra il bordello di Ditocorto e le spiega come si lavora lì.',
    },
  },
  daiPycelle: {
    character: 'pycelle',
    type: { en: 'Client', it: 'Cliente' },
    summary: {
      en: 'The Grand Maester, in her bed when Tyrion’s men burst in and arrest him.',
      it: 'Il gran maestro, nel suo letto quando gli uomini di Tyrion irrompono e lo arrestano.',
    },
  },
  daiTyrionPays: {
    character: 'tyrion-lannister',
    type: { en: 'Her payer', it: 'Chi la paga' },
    summary: {
      en: 'The Hand of the King, who has Pycelle arrested in her room and pays her for the trouble.',
      it: 'Il Primo Cavaliere del re, che fa arrestare Pycelle nella sua stanza e la ripaga del disturbo.',
    },
  },
  daiJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King she is sent to', it: 'Re da cui è mandata' },
    summary: {
      en: 'The king she and Ros are hired out to as a gift. He makes Ros beat her, hard enough to make her scream.',
      it: 'Il re da cui lei e Ros vengono mandate in dono. Costringe Ros a picchiarla, tanto forte da farla urlare.',
    },
  },
  daiRosBeats: {
    character: 'ros',
    type: { en: 'Fellow prostitute', it: 'Collega' },
    summary: {
      en: 'The woman Joffrey forces to hit her, and who then has to take her to Tyrion to show him what the king has done.',
      it: 'La donna che Joffrey costringe a colpirla, e che poi deve portarla da Tyrion a mostrargli che cosa ha fatto il re.',
    },
  },
  daiTyrionSent: {
    character: 'tyrion-lannister',
    type: { en: 'Her payer', it: 'Chi la paga' },
    summary: {
      en: 'The Hand of the King, who hired her and Ros out to the king. Joffrey wants him to see what was done to her.',
      it: 'Il Primo Cavaliere del re, che l’ha mandata con Ros dal re. Joffrey vuole che veda che cosa le ha fatto.',
    },
  },

  // Jacelyn Bywater (books only)
  jacTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Hand of the King', it: 'Primo Cavaliere' },
    summary: {
      en: 'The Hand, who names him commander of the City Watch the moment Janos Slynt is led away.',
      it: 'Il Primo Cavaliere, che lo nomina comandante della Guardia cittadina nel momento in cui Janos Slynt viene portato via.',
    },
  },
  jacJanos: {
    character: 'janos-slynt',
    type: { en: 'Predecessor', it: 'Predecessore' },
    summary: {
      en: 'The commander he replaces. They meet at the door as Janos is taken off to the Wall.',
      it: 'Il comandante che sostituisce. Si incontrano sulla porta mentre Janos viene portato verso la Barriera.',
    },
  },
  jacVarys: {
    character: 'varys',
    type: { en: 'Backer', it: 'Garante' },
    summary: {
      en: 'The master of whispers, who speaks well of him to Tyrion as a man the City Watch will follow.',
      it: 'Il maestro dei sussurri, che parla bene di lui a Tyrion come di un uomo che la Guardia cittadina seguirà.',
    },
  },
  jacTyrionTrust: {
    character: 'tyrion-lannister',
    type: { en: 'Hand of the King', it: 'Primo Cavaliere' },
    summary: {
      en: 'The Hand he serves. Jacelyn sends for him when Cleos Frey arrives with peace terms, and his men overtake the party taking Tommen out of the city.',
      it: 'Il Primo Cavaliere che serve. Jacelyn lo manda a chiamare quando arriva Cleos Frey con le condizioni di pace, e i suoi uomini raggiungono il gruppo che porta Tommen fuori città.',
    },
  },
  jacBoros: {
    character: 'boros-blount',
    type: { en: 'Kingsguard knight', it: 'Cavaliere della Guardia reale' },
    summary: {
      en: 'The knight escorting Tommen out of the city. He gives the boy up at once when Jacelyn’s men catch up, and loses his white cloak for it.',
      it: 'Il cavaliere che scorta Tommen fuori città. Lo consegna subito quando gli uomini di Jacelyn lo raggiungono, e per questo perde il mantello bianco.',
    },
  },
  jacTommen: {
    character: 'tommen-baratheon',
    type: { en: 'Prince', it: 'Principe' },
    summary: {
      en: 'The younger prince, taken out of the city and brought back by his men.',
      it: 'Il principe più giovane, portato fuori città e riportato indietro dai suoi uomini.',
    },
  },

  // Hallyne (books only)
  halTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Hand of the King', it: 'Primo Cavaliere' },
    summary: {
      en: 'The Hand, who comes down to the guild’s vaults to see the wildfire. Hallyne counts the jars for him and promises ten thousand.',
      it: 'Il Primo Cavaliere, che scende nelle cantine della gilda a vedere l’altofuoco. Hallyne gli conta le giare e gliene promette diecimila.',
    },
  },
  halJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King he hopes to feast', it: 'Re che spera di ospitare' },
    summary: {
      en: 'The king the guild would like to receive. Tyrion puts the feast off, and Hallyne offers a show of the guild’s secrets at the Red Keep instead.',
      it: 'Il re che la gilda vorrebbe ospitare. Tyrion rimanda il banchetto, e Hallyne propone allora una dimostrazione dei segreti della gilda alla Fortezza Rossa.',
    },
  },
  halTyrionWounded: {
    character: 'tyrion-lannister',
    type: { en: 'Hand of the King', it: 'Primo Cavaliere' },
    summary: {
      en: 'The Hand, whose plan burned Stannis’s fleet with the guild’s wildfire. Tyrion lies wounded and misses the court of rewards.',
      it: 'Il Primo Cavaliere, il cui piano ha bruciato la flotta di Stannis con l’altofuoco della gilda. Tyrion è ferito e non va alla cerimonia delle ricompense.',
    },
  },
  halJoffreyLord: {
    character: 'joffrey-baratheon',
    type: { en: 'King who ennobles him', it: 'Re che lo nomina lord' },
    summary: {
      en: 'The king, who names him a lord for the wildfire at the court of rewards, though he gets no lands.',
      it: 'Il re, che alla cerimonia delle ricompense lo nomina lord per l’altofuoco, anche se non riceve terre.',
    },
  },

  // Lollys Stokeworth (books only)
  lolShae: {
    character: 'shae',
    type: { en: 'Maidservant to be', it: 'Futura cameriera' },
    summary: {
      en: 'The girl Varys proposes as her maidservant. She is Tyrion’s secret, and the post gives her a way into the Tower of the Hand.',
      it: 'La ragazza che Varys propone come sua cameriera. È la segreta di Tyrion, e il posto le apre una via verso la Torre del Primo Cavaliere.',
    },
  },
  lolTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Match her mother wants', it: 'Marito voluto dalla madre' },
    summary: {
      en: 'The Hand of the King. Her mother, Lady Tanda, wants him for a husband for her and keeps inviting him to supper.',
      it: 'Il Primo Cavaliere del re. Sua madre, lady Tanda, lo vorrebbe come marito per lei e continua a invitarlo a cena.',
    },
  },

  // Osmund Kettleblack (books only)
  osmCersei: {
    character: 'cersei-lannister',
    type: { en: 'Queen who raises him', it: 'Regina che lo promuove' },
    summary: {
      en: 'The queen regent, who picks him for the Kingsguard in Boros Blount’s place.',
      it: 'La regina reggente, che lo sceglie per la Guardia reale al posto di Boros Blount.',
    },
  },
  osmJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King he serves', it: 'Re che serve' },
    summary: {
      en: 'The king, who gives him his white cloak in the royal sept.',
      it: 'Il re, che gli consegna il mantello bianco nel tempio reale.',
    },
  },
  osmBalon: {
    character: 'balon-swann',
    type: { en: 'New Kingsguard', it: 'Nuovo compagno della Guardia reale' },
    summary: {
      en: 'Named to the Kingsguard on the same day, in Preston Greenfield’s place.',
      it: 'Nominato nella Guardia reale lo stesso giorno, al posto di Preston Greenfield.',
    },
  },
  osmBoros: {
    character: 'boros-blount',
    type: { en: 'Knight he replaces', it: 'Cavaliere che sostituisce' },
    summary: {
      en: 'The Kingsguard knight stripped of his white cloak for giving up Tommen, whose place he takes.',
      it: 'Il cavaliere della Guardia reale spogliato del mantello bianco per aver consegnato Tommen, di cui prende il posto.',
    },
  },
  osmTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Hand who distrusts him', it: 'Primo Cavaliere che diffida' },
    summary: {
      en: 'The Hand, who does not approve of the queen’s choice of him.',
      it: 'Il Primo Cavaliere, che non approva la scelta della regina.',
    },
  },
  osmTyrionOrder: {
    character: 'tyrion-lannister',
    type: { en: 'Hand who gives orders', it: 'Primo Cavaliere che dà ordini' },
    summary: {
      en: 'The Hand, who tells the Kingsguard to keep Joffrey safe at all costs, but also among the defenders on the walls.',
      it: 'Il Primo Cavaliere, che ordina alla Guardia reale di tenere Joffrey al sicuro a ogni costo, ma anche tra i difensori sulle mura.',
    },
  },
  osmJoffreyGuard: {
    character: 'joffrey-baratheon',
    type: { en: 'King he guards', it: 'Re che protegge' },
    summary: {
      en: 'The king he is to keep alive while the fleet attacks, and to keep fighting at the walls.',
      it: 'Il re che deve tenere in vita mentre la flotta attacca, e che deve restare a combattere sulle mura.',
    },
  },

  // Alayaya (books only)
  alaCersei: {
    character: 'cersei-lannister',
    type: { en: 'Queen who seizes her', it: 'Regina che la fa prendere' },
    summary: {
      en: 'The queen, who has her beaten and brought before Tyrion, taking her for his lover.',
      it: 'La regina, che la fa picchiare e portare davanti a Tyrion, credendola la sua amante.',
    },
  },
  alaTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Client', it: 'Cliente' },
    summary: {
      en: 'The Hand of the King, who comes to her at Chataya’s brothel and then slips away down a hidden shaft. She keeps his secret when the queen has her seized.',
      it: 'Il Primo Cavaliere del re, che viene da lei al bordello di Chataya e poi sparisce lungo un cunicolo nascosto. Lei non lo tradisce quando la regina la fa prendere.',
    },
  },

  // Garlan Tyrell (books only)
  garJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King he petitions', it: 'Re a cui si rivolge' },
    summary: {
      en: 'The king, at the court of rewards. Garlan asks him to wed his sister Margaery.',
      it: 'Il re, alla cerimonia delle ricompense. Garlan gli chiede di sposare sua sorella Margaery.',
    },
  },
  garMargaery: {
    character: 'margaery-tyrell',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, whom he asks the king to marry.',
      it: 'Sua sorella, che chiede al re di sposare.',
    },
  },
  garLoras: {
    character: 'loras-tyrell',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, named to the Kingsguard the same day.',
      it: 'Suo fratello, nominato quello stesso giorno nella Guardia reale.',
    },
  },
  garMace: {
    character: 'mace-tyrell',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who joins the small council the same day.',
      it: 'Suo padre, che quello stesso giorno entra nel Concilio ristretto.',
    },
  },
} satisfies Record<string, Relationship>

/** Episode numbers on a `source: 'chapter'` entry only order it, as on the records. */
export const season2Relationships = {
  // Daisy, show only: shown round at her gate, in Pycelle’s bed at 13 and
  // sent to the king at 14. Her chapters only order her.
  'daisy': [
    {
      episode: 11,
      chapter: 77,
      source: 'episode',
      value: [kingsLanding.daiRos],
    },
    {
      episode: 13,
      chapter: 99,
      source: 'episode',
      value: [kingsLanding.daiPycelle, kingsLanding.daiTyrionPays],
    },
    {
      episode: 14,
      chapter: 103,
      source: 'episode',
      value: [
        kingsLanding.daiJoffrey,
        kingsLanding.daiRosBeats,
        kingsLanding.daiTyrionSent,
      ],
    },
  ],
  // Books only: Tyrion II (chapter 82) and Tyrion XI (123), where his men
  // overtake Tommen's escort. His death is told past the stage.
  'jacelyn-bywater': [
    {
      episode: 12,
      chapter: 82,
      source: 'chapter',
      value: [
        kingsLanding.jacTyrion,
        kingsLanding.jacJanos,
        kingsLanding.jacVarys,
      ],
    },
    {
      episode: 18,
      chapter: 123,
      source: 'chapter',
      value: [
        kingsLanding.jacTyrionTrust,
        kingsLanding.jacBoros,
        kingsLanding.jacTommen,
      ],
    },
  ],
  // Books only: Tyrion V (chapter 94) and the court of rewards in Sansa VIII
  // (139).
  'hallyne': [
    {
      episode: 15,
      chapter: 94,
      source: 'chapter',
      value: [kingsLanding.halTyrion, kingsLanding.halJoffrey],
    },
    {
      episode: 20,
      chapter: 139,
      source: 'chapter',
      value: [kingsLanding.halJoffreyLord, kingsLanding.halTyrionWounded],
    },
  ],
  // Books only: Tyrion X (chapter 118), where Varys offers Shae a place in
  // her household.
  'lollys-stokeworth': [
    {
      episode: 13,
      chapter: 118,
      source: 'chapter',
      value: [kingsLanding.lolShae, kingsLanding.lolTyrion],
    },
  ],
  // Books only: Tyrion XI (chapter 123), then Tyrion XIII (133), where
  // Tyrion sets the Kingsguard to guard the king on the walls.
  'osmund-kettleblack': [
    {
      episode: 18,
      chapter: 123,
      source: 'chapter',
      value: [
        kingsLanding.osmCersei,
        kingsLanding.osmJoffrey,
        kingsLanding.osmBalon,
        kingsLanding.osmBoros,
        kingsLanding.osmTyrion,
      ],
    },
    {
      episode: 19,
      chapter: 133,
      source: 'chapter',
      value: [
        kingsLanding.osmTyrionOrder,
        kingsLanding.osmJoffreyGuard,
        kingsLanding.osmCersei,
      ],
    },
  ],
  // Books only: Tyrion XII (chapter 128).
  'alayaya': [
    {
      episode: 18,
      chapter: 128,
      source: 'chapter',
      value: [kingsLanding.alaCersei, kingsLanding.alaTyrion],
    },
  ],
  // Books only: Sansa VIII (chapter 139), the court of rewards. The show
  // has no Garlan.
  'garlan-tyrell': [
    {
      episode: 20,
      chapter: 139,
      source: 'chapter',
      value: [
        kingsLanding.garJoffrey,
        kingsLanding.garMargaery,
        kingsLanding.garLoras,
        kingsLanding.garMace,
      ],
    },
  ],
  // Show only: out to scout at his gate, back with Qarth's welcome at 14,
  // at Xaro's feast at 15 and at the House of the Undying at 20.
  'kovarro': [
    {
      episode: 11,
      chapter: 86,
      source: 'episode',
      value: [essos.kovDaenerys, essos.kovRakharo, essos.kovAggo],
    },
    // Rakharo dies in "The Night Lands" (episode 12); Xaro and Malakho are
    // named at the feast in episode 15.
    {
      episode: 15,
      chapter: 101,
      source: 'episode',
      value: [
        essos.kovDaenerysStatue,
        essos.kovMalakho,
        essos.kovXaro,
        essos.kovRakharoDead,
        essos.kovAggo,
      ],
    },
    {
      episode: 20,
      chapter: 137,
      source: 'episode',
      value: [
        essos.kovDaenerysHouse,
        essos.kovXaroVault,
        essos.kovJorah,
        essos.kovMalakho,
        essos.kovRakharoDead,
      ],
    },
  ],
  'malakho': [
    {
      episode: 15,
      chapter: 101,
      source: 'episode',
      value: [essos.malDaenerys, essos.malKovarro, essos.malXaro],
    },
    {
      episode: 20,
      chapter: 137,
      source: 'episode',
      value: [essos.malDaenerysVault, essos.malXaroVault, essos.malKovarro],
    },
  ],
  // The show's Xaro steals the dragons with the warlock and dies in his
  // vault; the book's asks to marry her and lives.
  'xaro-xhoan-daxos': [
    {
      episode: 15,
      chapter: 114,
      source: 'episode',
      value: [
        essos.xarDaenerysEpisode,
        essos.xarJorahEpisode,
        essos.xarKovarro,
      ],
    },
    {
      episode: 17,
      chapter: 114,
      source: 'episode',
      value: [essos.xarDaenerysCoup, essos.xarJorahEpisode, essos.xarKovarro],
    },
    {
      episode: 20,
      chapter: 137,
      source: 'episode',
      value: [
        essos.xarDaenerysVault,
        essos.xarDoreah,
        essos.xarJorahVault,
        essos.xarMalakho,
      ],
    },
    {
      episode: 15,
      chapter: 114,
      source: 'chapter',
      value: [
        essos.xarDaenerysChapter,
        essos.xarPyatPree,
        essos.xarQuaithe,
        essos.xarJorahChapter,
      ],
    },
    // Daenerys V: after the House of the Undying.
    {
      episode: 20,
      chapter: 137,
      source: 'chapter',
      value: [
        essos.xarDaenerysShips,
        essos.xarPyatPree,
        essos.xarQuaithe,
        essos.xarJorahChapter,
      ],
    },
  ],
  'pyat-pree': [
    {
      episode: 14,
      chapter: 114,
      source: 'chapter',
      value: [essos.pyaDaenerys, essos.pyaXaro, essos.pyaQuaithe],
    },
    // Daenerys IV: the attack outside the House of the Undying.
    {
      episode: 18,
      chapter: 122,
      source: 'chapter',
      value: [
        essos.pyaDaenerysHouse,
        essos.pyaJhogo,
        essos.pyaRakharo,
        essos.pyaDrogon,
        essos.pyaXaro,
      ],
    },
  ],
  // Her own introduction in Daenerys I (chapter 86), her warning in
  // Daenerys II (101), the market in Daenerys III (114).
  'quaithe': [
    {
      episode: 15,
      chapter: 86,
      source: 'chapter',
      value: [essos.quaDaenerys, essos.quaJhogo],
    },
    {
      episode: 15,
      chapter: 101,
      source: 'chapter',
      value: [essos.quaDaenerysWarning, essos.quaJorah, essos.quaJhogo],
    },
    {
      episode: 15,
      chapter: 114,
      source: 'chapter',
      value: [
        essos.quaDaenerysAsshai,
        essos.quaJhogoWary,
        essos.quaXaro,
        essos.quaPyatPree,
        essos.quaJorah,
      ],
    },
  ],
  // The show names the dragons only past this stage (episodes 40 and 41):
  // their cards are the books' alone, from Daenerys I (chapter 86).
  'drogon': [
    {
      episode: 40,
      chapter: 86,
      source: 'chapter',
      value: [
        essos.drgDaenerys,
        essos.drgDrogo,
        essos.drgAggo,
        essos.drgRhaegal,
        essos.drgViserion,
      ],
    },
    {
      episode: 40,
      chapter: 122,
      source: 'chapter',
      value: [
        essos.drgDaenerysHouse,
        essos.drgPyatPree,
        essos.drgDrogo,
        essos.drgRhaegal,
        essos.drgViserion,
      ],
    },
  ],
  'rhaegal': [
    {
      episode: 41,
      chapter: 86,
      source: 'chapter',
      value: [essos.rhgDaenerys, essos.rhgDrogon, essos.rhgViserion],
    },
  ],
  'viserion': [
    {
      episode: 41,
      chapter: 86,
      source: 'chapter',
      value: [
        essos.visDaenerys,
        essos.visViserys,
        essos.visDrogon,
        essos.visRhaegal,
      ],
    },
  ],
  'strong-belwas': [
    {
      episode: 20,
      chapter: 137,
      source: 'chapter',
      value: [
        essos.belDaenerys,
        essos.belArstan,
        essos.belIllyrio,
        essos.belJorah,
      ],
    },
  ],
  'arstan-whitebeard': [
    {
      episode: 20,
      chapter: 137,
      source: 'chapter',
      value: [
        essos.arsDaenerys,
        essos.arsBelwas,
        essos.arsIllyrio,
        essos.arsJorah,
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
