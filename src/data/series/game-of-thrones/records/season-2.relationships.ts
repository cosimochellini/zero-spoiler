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
 * The Wall and beyond (#1483): the great ranging, Craster's Keep, the Fist of
 * the First Men and Qhorin Halfhand's party. The season-1 cast's own stage-2
 * cards are in `season-1.relationships.ts`.
 */
const wall = {
  // Thoren Smallwood (books only)
  thoJeor: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, who is leading the ranging himself. Thoren argues that his place is at Castle Black, and Jeor sends him away.',
      it: 'Il lord comandante, che guida di persona la spedizione. Thoren sostiene che il suo posto sia a Castello Nero, e Jeor lo congeda.',
    },
  },
  thoBenjen: {
    character: 'benjen-stark',
    type: { en: 'Missing ranger', it: 'Ranger scomparso' },
    summary: {
      en: 'The First Ranger, missing beyond the Wall. Jeor tells Thoren that Benjen keeps the post until his death is confirmed.',
      it: 'Il Primo Ranger, scomparso oltre la Barriera. Jeor ricorda a Thoren che Benjen conserva l’incarico finché la sua morte non è confermata.',
    },
  },
  thoJeorScouts: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, who agrees to send out scouts from the Fist. Thoren is to lead a party along the Milkwater.',
      it: 'Il lord comandante, che accetta di mandare esploratori dal Pugno. Thoren guiderà un gruppo lungo il Milkwater.',
    },
  },
  thoQhorin: {
    character: 'qhorin-halfhand',
    type: {
      en: 'Ranger of the Shadow Tower',
      it: 'Ranger della Torre delle Ombre',
    },
    summary: {
      en: 'The ranger who arrives with a hundred men. He advises sending scouts into the mountains, and will lead a party into the pass himself.',
      it: 'Il ranger arrivato con cento uomini. Consiglia di mandare esploratori sulle montagne, e guiderà lui stesso un gruppo nel passo.',
    },
  },
  thoJarman: {
    character: 'jarman-buckwell',
    type: { en: 'Fellow officer', it: 'Altro ufficiale' },
    summary: {
      en: 'The ranger who leads the scouts. He is to take four men up into the mountains while Thoren probes the Milkwater.',
      it: 'Il ranger a capo degli esploratori. Salirà sulle montagne con quattro uomini mentre Thoren esplora il Milkwater.',
    },
  },

  // Jarman Buckwell (books only)
  jarJeor: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, who has Jarman’s scouts ride out first from Whitetree.',
      it: 'Il lord comandante, che da Whitetree manda avanti per primi gli esploratori di Jarman.',
    },
  },
  jarThoren: {
    character: 'thoren-smallwood',
    type: { en: 'Fellow officer', it: 'Altro ufficiale' },
    summary: {
      en: 'The ranger who leads the vanguard. When Thoren says there were wildlings at Whitetree a year ago, Jarman answers that much can change in a year.',
      it: 'Il ranger a capo dell’avanguardia. Quando Thoren dice che un anno fa a Whitetree c’erano dei bruti, Jarman risponde che in un anno può cambiare molto.',
    },
  },
  jarCraster: {
    character: 'craster',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The master of the holdfast. Jarman asks him about Mance Rayder, and Craster says the free folk have no need of kings.',
      it: 'Il padrone del fortino. Jarman gli chiede di Mance Rayder, e Craster risponde che i bruti non hanno bisogno di re.',
    },
  },
  jarJon: {
    character: 'jon-snow',
    type: {
      en: 'Lord Commander’s steward',
      it: 'Attendente del lord comandante',
    },
    summary: {
      en: 'The young steward. At Craster’s Keep Jarman tells him to keep a good edge on his sword, since he will need it soon.',
      it: 'Il giovane attendente. Alla Fortezza di Craster Jarman gli dice di tenere bene affilata la spada, perché gli servirà presto.',
    },
  },

  // Mallador Locke (books only)
  locJeor: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, who puts him in charge of the baggage train.',
      it: 'Il lord comandante, che gli affida le salmerie.',
    },
  },
  locThoren: {
    character: 'thoren-smallwood',
    type: { en: 'Fellow officer', it: 'Altro ufficiale' },
    summary: {
      en: 'The ranger who leads the vanguard. He wears a dead officer’s armour and says there were wildlings at Whitetree a year ago.',
      it: 'Il ranger a capo dell’avanguardia. Indossa l’armatura di un ufficiale morto e dice che un anno fa a Whitetree c’erano dei bruti.',
    },
  },
  locJarman: {
    character: 'jarman-buckwell',
    type: { en: 'Fellow officer', it: 'Altro ufficiale' },
    summary: {
      en: 'The ranger who leads the scouts. When Jarman says much can change in a year, Locke answers that fewer wildlings means fewer worries.',
      it: 'Il ranger a capo degli esploratori. Quando Jarman dice che in un anno può cambiare molto, Locke risponde che meno bruti significano meno preoccupazioni.',
    },
  },

  // Eddison Tollett (the show and the books)
  eddSam: {
    character: 'samwell-tarly',
    type: { en: 'Fellow brother', it: 'Confratello' },
    summary: {
      en: 'A brother on the ranging. At the Fist Edd complains when Sam talks about Gilly, and Sam says nothing about Edd interests him. At the horn blasts Edd runs back without noticing Sam is left behind.',
      it: 'Un confratello della spedizione. Al Pugno Edd si lamenta quando Sam parla di Gilly, e Sam risponde che di Edd non gli interessa niente. Al suono dei corni Edd corre indietro senza accorgersi che Sam è rimasto indietro.',
    },
  },
  eddGrenn: {
    character: 'grenn',
    type: { en: 'Fellow brother', it: 'Confratello' },
    summary: {
      en: 'A brother on the ranging. Edd explains to him why Craster does not like men talking to his daughters, and at the horn blasts they run back to the Fist.',
      it: 'Un confratello della spedizione. Edd gli spiega perché Craster non vuole che si parli con le sue figlie, e al suono dei corni tornano di corsa al Pugno.',
    },
  },
  eddJon: {
    character: 'jon-snow',
    type: { en: 'Fellow brother', it: 'Confratello' },
    summary: {
      en: 'A brother on the ranging. At Craster’s Keep Edd tells him he was born in a place like it, before he fell on hard times.',
      it: 'Un confratello della spedizione. Alla Fortezza di Craster Edd gli dice di essere nato in un posto simile, prima di cadere in disgrazia.',
    },
  },
  eddCraster: {
    character: 'craster',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The master of the holdfast. Edd tells the others that Craster marries his daughters, and that he is still there when the other wildlings are gone.',
      it: 'Il padrone del fortino. Edd dice agli altri che Craster sposa le proprie figlie, e che è ancora lì mentre gli altri bruti sono spariti.',
    },
  },
  eddJonBook: {
    character: 'jon-snow',
    type: {
      en: 'Lord Commander’s steward',
      it: 'Attendente del lord comandante',
    },
    summary: {
      en: 'The young steward. At Whitetree they are paired to search the houses, and Edd says he was born in a house like them.',
      it: 'Il giovane attendente. A Whitetree sono in coppia a perquisire le case, e Edd dice di essere nato in una casa come quelle.',
    },
  },
  eddJeorBook: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, who orders the houses searched. Edd jokes that the dead walking is bad enough, and now Jeor wants them talking.',
      it: 'Il lord comandante, che ordina di perquisire le case. Edd scherza dicendo che i morti che camminano sono già troppo, e ora Jeor li vuole anche parlanti.',
    },
  },
  eddJonCraster: {
    character: 'jon-snow',
    type: {
      en: 'Lord Commander’s steward',
      it: 'Attendente del lord comandante',
    },
    summary: {
      en: 'The young steward. Jon brings him Jeor’s orders at Craster’s Keep, and Edd answers that the axe will end up in Jeor’s skull.',
      it: 'Il giovane attendente. Alla Fortezza di Craster Jon gli porta gli ordini di Jeor, ed Edd risponde che l’ascia finirà conficcata nel cranio di Jeor.',
    },
  },
  eddCrasterBook: {
    character: 'craster',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The master of the holdfast. Edd tells Jon that Craster is no friend: the difference between wildling friends and enemies is that friends bury you in secret graves.',
      it: 'Il padrone del fortino. Edd dice a Jon che Craster non è un amico: tra i bruti amici e nemici, gli amici ti seppelliscono in tombe segrete.',
    },
  },
  eddSamBook: {
    character: 'samwell-tarly',
    type: { en: 'Fellow brother', it: 'Confratello' },
    summary: {
      en: 'The steward who keeps the ravens. Sam repeats to Jon what Edd told him: Craster marries his own daughters.',
      it: 'L’attendente che si occupa dei corvi. Sam ripete a Jon quello che gli ha detto Edd: Craster sposa le proprie figlie.',
    },
  },

  // Craster (the show and the books)
  craJeor: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, whom he mocks for his vow of celibacy. Craster says he has not seen Benjen Stark, and lets the Watch stay if they leave his wives alone.',
      it: 'Il lord comandante, che prende in giro per il voto di castità. Craster dice di non aver visto Benjen Stark, e lascia restare i Guardiani se non toccano le sue mogli.',
    },
  },
  craJon: {
    character: 'jon-snow',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A young brother who answers back when Craster calls them southerners. Craster tells him he is prettier than half his daughters.',
      it: 'Un giovane confratello che risponde a tono quando Craster li chiama gente del sud. Craster gli dice che è più bello di metà delle sue figlie.',
    },
  },
  craBenjen: {
    character: 'benjen-stark',
    type: { en: 'Missing ranger', it: 'Ranger scomparso' },
    summary: {
      en: 'The First Ranger the Watch is looking for. Craster tells Jeor he has not seen him.',
      it: 'Il Primo Ranger che i Guardiani cercano. Craster dice a Jeor di non averlo visto.',
    },
  },
  craGilly: {
    character: 'gilly',
    type: { en: 'Daughter and wife', it: 'Figlia e moglie' },
    summary: {
      en: 'One of his daughters, and one of his wives. He has her tell Jeor how content they are under his protection.',
      it: 'Una delle sue figlie, e una delle sue mogli. Le fa dire a Jeor quanto siano al sicuro sotto la sua protezione.',
    },
  },
  craJonBeaten: {
    character: 'jon-snow',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'The young brother who followed him into the woods. Craster knocks him out, beats him and drags him back to the keep.',
      it: 'Il giovane confratello che l’ha seguito nel bosco. Craster lo stende, lo picchia e lo trascina nel fortino.',
    },
  },
  craJeorOut: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander. Craster throws Jon at his feet and orders the Watch out. Jeor has always known what Craster does with his sons, and puts up with it.',
      it: 'Il lord comandante. Craster getta Jon ai suoi piedi e caccia via i Guardiani. Jeor ha sempre saputo che fine fanno i figli maschi di Craster, e lo tollera.',
    },
  },
  craJeorBook: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, who offers wine. Craster refuses an escort back to the Wall, and says any man who lays a hand on his wives loses the hand.',
      it: 'Il lord comandante, che offre del vino. Craster rifiuta una scorta fino alla Barriera, e dice che chi mette le mani sulle sue mogli perde la mano.',
    },
  },
  craJonBook: {
    character: 'jon-snow',
    type: {
      en: 'Lord Commander’s steward',
      it: 'Attendente del lord comandante',
    },
    summary: {
      en: 'The Lord Commander’s steward. At the name Snow, Craster guesses he is a bastard and tells him a man who wants a woman should marry her.',
      it: 'L’attendente del lord comandante. Sentendo il nome Snow, Craster capisce che è un bastardo e gli dice che chi vuole una donna deve sposarla.',
    },
  },
  craGillyBook: {
    character: 'gilly',
    type: { en: 'Daughter and wife', it: 'Figlia e moglie' },
    summary: {
      en: 'One of his daughters, now one of his wives, who is expecting his child. In the morning she tells Jon he gives his sons to the gods.',
      it: 'Una delle sue figlie, ora una delle sue mogli, che aspetta un suo figlio. Al mattino dice a Jon che lui dà i figli maschi agli dèi.',
    },
  },
  craBenjenBook: {
    character: 'benjen-stark',
    type: { en: 'Missing ranger', it: 'Ranger scomparso' },
    summary: {
      en: 'The First Ranger the Watch is looking for. Craster says he has not seen him in three years.',
      it: 'Il Primo Ranger che i Guardiani cercano. Craster dice di non vederlo da tre anni.',
    },
  },
  craJarman: {
    character: 'jarman-buckwell',
    type: { en: 'Ranger', it: 'Ranger' },
    summary: {
      en: 'The ranger who leads the scouts. Jarman asks about Mance Rayder, and Craster says the free folk need no king.',
      it: 'Il ranger a capo degli esploratori. Jarman chiede di Mance Rayder, e Craster risponde che i bruti non hanno bisogno di re.',
    },
  },

  // Gilly (the show and the books)
  gilCraster: {
    character: 'craster',
    type: { en: 'Father and husband', it: 'Padre e marito' },
    summary: {
      en: 'The master of the holdfast. She is afraid of what he will do if her child is a boy, and will not say why.',
      it: 'Il padrone del fortino. Ha paura di quello che farà se suo figlio sarà un maschio, e non dice perché.',
    },
  },
  gilSam: {
    character: 'samwell-tarly',
    type: { en: 'Helper', it: 'Chi l’ha aiutata' },
    summary: {
      en: 'The brother who drives Ghost away from her. He gives her his mother’s thimble and promises to come back for her.',
      it: 'Il confratello che allontana Spettro da lei. Le dà il ditale di sua madre e promette di tornare a prenderla.',
    },
  },
  gilJon: {
    character: 'jon-snow',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'The ranger Sam brings her to. He will not take her along, because the Lord Commander has forbidden the Watch to touch Craster’s wives.',
      it: 'Il ranger da cui la porta Sam. Non vuole portarla con sé, perché il lord comandante ha vietato ai Guardiani di avvicinare le mogli di Craster.',
    },
  },
  gilGhost: {
    character: 'ghost-direwolf',
    type: { en: 'Direwolf', it: 'Meta-lupo' },
    summary: {
      en: 'Jon’s white direwolf. He corners her when he smells the dead rabbit she carries, until Sam calls him off.',
      it: 'Il meta-lupo bianco di Jon. La mette all’angolo quando sente l’odore del coniglio morto che porta, finché Sam non lo richiama.',
    },
  },
  gilCrasterBook: {
    character: 'craster',
    type: { en: 'Father and husband', it: 'Padre e marito' },
    summary: {
      en: 'The master of the holdfast. She says he drinks too much and will sleep most of the day, and that he gives his sons to the gods.',
      it: 'Il padrone del fortino. Dice che beve troppo e dormirà per quasi tutto il giorno, e che dà i figli maschi agli dèi.',
    },
  },
  gilJonBook: {
    character: 'jon-snow',
    type: { en: 'King’s half-brother', it: 'Fratellastro del re' },
    summary: {
      en: 'The Lord Commander’s steward, who promises Ghost will not hurt her. She asks him to take her to the Wall, and he says it is for Jeor to decide.',
      it: 'L’attendente del lord comandante, che le promette che Spettro non le farà del male. Lei gli chiede di portarla alla Barriera, e lui risponde che deve decidere Jeor.',
    },
  },
  gilSamBook: {
    character: 'samwell-tarly',
    type: { en: 'Helper', it: 'Chi l’ha aiutata' },
    summary: {
      en: 'A brother of the Watch who lends her his cloak. He wishes he could do something for her, and says they may take her when they come back.',
      it: 'Un confratello che le presta il suo mantello. Vorrebbe fare qualcosa per lei, e dice che forse potranno portarla via al ritorno.',
    },
  },
  gilGhostBook: {
    character: 'ghost-direwolf',
    type: { en: 'Direwolf', it: 'Meta-lupo' },
    summary: {
      en: 'Jon’s white direwolf. He gets into her rabbit hutch, and she cries out until Jon calls him off.',
      it: 'Il meta-lupo bianco di Jon. Entra nella sua conigliera, e lei grida finché Jon non lo richiama.',
    },
  },

  // Qhorin Halfhand (the show and the books)
  qhoJeor: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, whom he meets at the Fist. Qhorin warns him that the wildlings are gathering, and proposes small parties to push out their lookouts in the mountains.',
      it: 'Il lord comandante, che incontra al Pugno. Qhorin lo avverte che i bruti si radunano, e propone piccoli gruppi per scacciare le loro vedette sulle montagne.',
    },
  },
  qhoJon: {
    character: 'jon-snow',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'The Lord Commander’s steward. He asks to join Qhorin’s party, and Qhorin takes his side when Jeor objects.',
      it: 'L’attendente del lord comandante. Chiede di unirsi al gruppo di Qhorin, e Qhorin lo difende quando Jeor si oppone.',
    },
  },
  qhoJonKilled: {
    character: 'jon-snow',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'The young brother he turns on in front of the wildlings, so that Jon can pass for a deserter. Jon kills him, as Qhorin has told him to.',
      it: 'Il giovane confratello contro cui si scaglia davanti ai bruti, perché Jon passi per un disertore. Jon lo uccide, come Qhorin gli ha detto di fare.',
    },
  },
  qhoYgritte: {
    character: 'ygritte',
    type: { en: 'Wildling prisoner', it: 'Prigioniera dei bruti' },
    summary: {
      en: 'The wildling lookout he orders Jon to execute. She is stunned when Jon kills him.',
      it: 'La vedetta dei bruti che ordina a Jon di giustiziare. Resta senza parole quando Jon lo uccide.',
    },
  },
  qhoJonBook: {
    character: 'jon-snow',
    type: { en: 'Young ranger', it: 'Giovane ranger' },
    summary: {
      en: 'The Lord Commander’s steward. He tells Jon he knew Lord Eddard and Lord Rickard, then picks him for his party, saying the old gods are still strong beyond the Wall.',
      it: 'L’attendente del lord comandante. Gli dice di aver conosciuto lord Eddard e lord Rickard, poi lo sceglie per il suo gruppo, dicendo che gli antichi dèi sono ancora forti oltre la Barriera.',
    },
  },
  qhoJeorBook: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, whom he advises to send scouts into the mountains. Jeor agrees, and Qhorin takes a party into the pass himself.',
      it: 'Il lord comandante, a cui consiglia di mandare esploratori sulle montagne. Jeor accetta, e Qhorin guida di persona un gruppo nel passo.',
    },
  },
  qhoThoren: {
    character: 'thoren-smallwood',
    type: { en: 'Fellow officer', it: 'Altro ufficiale' },
    summary: {
      en: 'The ranger Jeor sends to probe the Milkwater, while Qhorin takes the pass.',
      it: 'Il ranger che Jeor manda a esplorare il Milkwater, mentre Qhorin prende il passo.',
    },
  },
  qhoJarman: {
    character: 'jarman-buckwell',
    type: { en: 'Fellow officer', it: 'Altro ufficiale' },
    summary: {
      en: 'The ranger who leads the scouts. Jarman is to take four men up into the mountains.',
      it: 'Il ranger a capo degli esploratori. Jarman salirà sulle montagne con quattro uomini.',
    },
  },
  qhoJonPass: {
    character: 'jon-snow',
    type: { en: 'Young ranger', it: 'Giovane ranger' },
    summary: {
      en: 'The young ranger he leaves alone with the prisoner, to carry out her death.',
      it: 'Il giovane ranger che lascia solo con la prigioniera, perché la uccida.',
    },
  },
  qhoStonesnake: {
    character: 'stonesnake',
    type: { en: 'Ranger of his party', it: 'Ranger del suo gruppo' },
    summary: {
      en: 'The ranger who climbs with Jon to the watchers. Qhorin tells them not to let the watchers sound a horn.',
      it: 'Il ranger che sale con Jon dalle vedette. Qhorin dice loro di non lasciare che le vedette suonino il corno.',
    },
  },
  qhoYgritteBook: {
    character: 'ygritte',
    type: { en: 'Wildling prisoner', it: 'Prigioniera dei bruti' },
    summary: {
      en: 'The spearwife Jon took prisoner. She knows him as the Halfhand and says the wildlings would kill him if he yielded. He leaves Jon alone to kill her.',
      it: 'La lancera che Jon ha preso prigioniera. Lo riconosce come il Monco e dice che i bruti lo ucciderebbero se si arrendesse. Lui lascia Jon solo a ucciderla.',
    },
  },
  qhoJonYield: {
    character: 'jon-snow',
    type: { en: 'Young ranger', it: 'Giovane ranger' },
    summary: {
      en: 'The young ranger he tells to yield and go among the wildlings. When the hunters overtake them, Jon kills him with Longclaw, as he has been told to do whatever they ask.',
      it: 'Il giovane ranger a cui dice di arrendersi e di unirsi ai bruti. Quando i cacciatori li raggiungono, Jon lo uccide con Lungo Artiglio, come gli è stato detto di fare qualunque cosa chiedano.',
    },
  },
  qhoLord: {
    character: 'lord-of-bones',
    type: { en: 'Captor', it: 'Chi lo ha catturato' },
    summary: {
      en: 'The leader of the hunters who overtake them. He orders Jon to kill Qhorin to prove himself, and the hunters burn his body.',
      it: 'Il capo dei cacciatori che li raggiungono. Ordina a Jon di uccidere Qhorin per mettersi alla prova, e i cacciatori ne bruciano il corpo.',
    },
  },
  qhoEbben: {
    character: 'ebben',
    type: { en: 'Ranger of his party', it: 'Ranger del suo gruppo' },
    summary: {
      en: 'The ranger he sends east on the last garron to reach the Lord Commander. The hunters later have his head.',
      it: 'Il ranger che manda a est sull’ultimo cavallo per raggiungere il lord comandante. I cacciatori poi hanno la sua testa.',
    },
  },
  qhoStonesnakeFoot: {
    character: 'stonesnake',
    type: { en: 'Ranger of his party', it: 'Ranger del suo gruppo' },
    summary: {
      en: 'The ranger he sends on foot through the high passes, to tell the Lord Commander what Jon saw.',
      it: 'Il ranger che manda a piedi per i passi alti, a riferire al lord comandante quello che Jon ha visto.',
    },
  },

  // Stonesnake (books only)
  stoJon: {
    character: 'jon-snow',
    type: { en: 'Young ranger', it: 'Giovane ranger' },
    summary: {
      en: 'The young ranger he teaches to climb a sheer cliff to reach the watchers. When Jon takes the spearwife prisoner, Stonesnake warns him she should be killed.',
      it: 'Il giovane ranger a cui insegna ad arrampicarsi su una parete a picco per raggiungere le vedette. Quando Jon prende prigioniera la lancera, Stonesnake lo avverte che andrebbe uccisa.',
    },
  },
  stoQhorin: {
    character: 'qhorin-halfhand',
    type: { en: 'Commander of the party', it: 'Capo del gruppo' },
    summary: {
      en: 'The ranger who leads the party through the pass. Qhorin warns Stonesnake not to let the watchers sound a horn.',
      it: 'Il ranger che guida il gruppo nel passo. Qhorin gli dice di non lasciare che le vedette suonino il corno.',
    },
  },
  stoYgritte: {
    character: 'ygritte',
    type: { en: 'Wildling prisoner', it: 'Prigioniera dei bruti' },
    summary: {
      en: 'The sleeping watcher, a spearwife. She yields when he and Jon surprise her.',
      it: 'La vedetta addormentata, una lancera. Si arrende quando lui e Jon la sorprendono.',
    },
  },
  stoQhorinFoot: {
    character: 'qhorin-halfhand',
    type: { en: 'Commander of the party', it: 'Capo del gruppo' },
    summary: {
      en: 'The ranger who sends him on foot through the high passes when his mare breaks a leg, to bring word to the Fist.',
      it: 'Il ranger che lo manda a piedi per i passi alti quando la sua giumenta si rompe una zampa, a portare notizie al Pugno.',
    },
  },
  stoJeor: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander at the Fist, to whom Qhorin sends him with word of what lies ahead: giants, wargs, and trees with eyes again.',
      it: 'Il lord comandante al Pugno, da cui Qhorin lo manda con notizie di ciò che li attende: giganti, mutaforma e alberi che hanno di nuovo gli occhi.',
    },
  },
  stoJonSeen: {
    character: 'jon-snow',
    type: { en: 'Young ranger', it: 'Giovane ranger' },
    summary: {
      en: 'The young ranger who saw giants and wargs in his dream. Qhorin tells Stonesnake to report all that Jon saw.',
      it: 'Il giovane ranger che ha visto giganti e mutaforma nel suo sogno. Qhorin gli dice di riferire tutto ciò che Jon ha visto.',
    },
  },

  // Ygritte (the show and the books)
  ygJon: {
    character: 'jon-snow',
    type: { en: 'Captor', it: 'Chi l’ha catturata' },
    summary: {
      en: 'The brother who cannot bring himself to kill her. She runs, and he catches her again, and the two lose the rest of the party.',
      it: 'Il confratello che non riesce a ucciderla. Lei scappa, lui la riprende, e i due perdono di vista il resto del gruppo.',
    },
  },
  ygQhorin: {
    character: 'qhorin-halfhand',
    type: { en: 'Captor', it: 'Chi l’ha catturata' },
    summary: {
      en: 'The ranger who questions her and orders Jon to execute her.',
      it: 'Il ranger che la interroga e ordina a Jon di giustiziarla.',
    },
  },
  ygJonCompany: {
    character: 'jon-snow',
    type: { en: 'Man she brought in', it: 'L’uomo che ha portato' },
    summary: {
      en: 'The brother she brought to the wildling raiders as a present. When he kills the Halfhand she is stunned, then shows him the wildling army from the mountain crest.',
      it: 'Il confratello che ha portato ai razziatori bruti come regalo. Quando uccide il Monco resta senza parole, poi gli mostra l’esercito dei bruti dalla cima del monte.',
    },
  },
  ygQhorinDead: {
    character: 'qhorin-halfhand',
    type: { en: 'Captive ranger', it: 'Ranger prigioniero' },
    summary: {
      en: 'The captive ranger who attacks Jon in front of her band. Jon kills him, and the wildlings are stunned.',
      it: 'Il ranger prigioniero che attacca Jon davanti alla sua banda. Jon lo uccide, e i bruti restano senza parole.',
    },
  },
  ygJonBook: {
    character: 'jon-snow',
    type: { en: 'Captor', it: 'Chi l’ha catturata' },
    summary: {
      en: 'The ranger who takes her prisoner. She says Mance Rayder would take him in if he ran off with her, and Jon stops himself from beheading her and tells her to run.',
      it: 'Il ranger che la prende prigioniera. Gli dice che Mance Rayder lo accoglierebbe se scappasse con lei, e Jon si ferma prima di decapitarla e le dice di fuggire.',
    },
  },
  ygStonesnakeBook: {
    character: 'stonesnake',
    type: { en: 'Captor', it: 'Chi l’ha catturata' },
    summary: {
      en: 'The ranger who surprises her with Jon. He warns Jon she should be killed.',
      it: 'Il ranger che la sorprende insieme a Jon. Avverte Jon che andrebbe uccisa.',
    },
  },
  ygQhorinBook: {
    character: 'qhorin-halfhand',
    type: { en: 'Enemy ranger', it: 'Ranger nemico' },
    summary: {
      en: 'The ranger she recognizes as the Halfhand. She says the wildlings would kill him if he yielded.',
      it: 'Il ranger che riconosce come il Monco. Dice che i bruti lo ucciderebbero se si arrendesse.',
    },
  },
  ygJonHunt: {
    character: 'jon-snow',
    type: { en: 'Man she spared', it: 'L’uomo che l’ha risparmiata' },
    summary: {
      en: 'The ranger who let her go. After he kills Qhorin she tells him that the eagle was the man he killed in the pass, and that Mance Rayder is marching on the Wall.',
      it: 'Il ranger che l’ha lasciata andare. Dopo che Jon ha ucciso Qhorin, gli dice che l’aquila era l’uomo che ha ucciso nel passo, e che Mance Rayder marcia sulla Barriera.',
    },
  },
  ygLord: {
    character: 'lord-of-bones',
    type: { en: 'Band leader', it: 'Capo della banda' },
    summary: {
      en: 'The leader of the hunters she rides with. He has Jon kill Qhorin to prove himself.',
      it: 'Il capo dei cacciatori con cui cavalca. Fa uccidere Qhorin a Jon per metterlo alla prova.',
    },
  },
  ygQhorinHunt: {
    character: 'qhorin-halfhand',
    type: { en: 'Enemy ranger', it: 'Ranger nemico' },
    summary: {
      en: 'The ranger the hunters overtake with Jon. Jon kills him on the leader’s orders.',
      it: 'Il ranger che i cacciatori raggiungono insieme a Jon. Jon lo uccide per ordine del capo.',
    },
  },

  // Ebben (books only)
  ebbQhorin: {
    character: 'qhorin-halfhand',
    type: { en: 'Commander of the party', it: 'Capo del gruppo' },
    summary: {
      en: 'The ranger who leads the party. Qhorin tells Jon that if he had wanted the girl dead he would have had Ebben do it.',
      it: 'Il ranger che guida il gruppo. Qhorin dice a Jon che, se avesse voluto morta la ragazza, l’avrebbe fatto fare a Ebben.',
    },
  },
  ebbJon: {
    character: 'jon-snow',
    type: { en: 'Young ranger', it: 'Giovane ranger' },
    summary: {
      en: 'The young ranger who wakes shouting his wolf’s name. When Jon tells them his dream, Ebben calls him a skinchanger.',
      it: 'Il giovane ranger che si sveglia gridando il nome del suo lupo. Quando Jon racconta il sogno, Ebben lo chiama mutaforma.',
    },
  },
  ebbQhorinDead: {
    character: 'qhorin-halfhand',
    type: { en: 'Commander of the party', it: 'Capo del gruppo' },
    summary: {
      en: 'The ranger who sends him east on the last garron to reach the Lord Commander. Ebben does not get through.',
      it: 'Il ranger che lo manda a est sull’ultimo cavallo per raggiungere il lord comandante. Ebben non ci arriva.',
    },
  },
  ebbLord: {
    character: 'lord-of-bones',
    type: { en: 'Leader of the hunters', it: 'Capo dei cacciatori' },
    summary: {
      en: 'The leader of the hunters, who carry his head and order the other rangers killed.',
      it: 'Il capo dei cacciatori, che portano la sua testa e ordinano di uccidere gli altri ranger.',
    },
  },

  // Dalbridge (books only)
  dalQhorin: {
    character: 'qhorin-halfhand',
    type: { en: 'Commander of the party', it: 'Capo del gruppo' },
    summary: {
      en: 'The ranger who leads the party back through the pass. Dalbridge stays behind with all their arrows, to give the others an advantage.',
      it: 'Il ranger che guida il gruppo nel passo del ritorno. Dalbridge resta indietro con tutte le frecce, per dare un vantaggio agli altri.',
    },
  },

  // Lord of Bones (books only)
  lobJon: {
    character: 'jon-snow',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The ranger who yields to him. He orders Jon to kill Qhorin to prove himself, and accepts him despite his misgivings.',
      it: 'Il ranger che si arrende a lui. Gli ordina di uccidere Qhorin per mettersi alla prova, e lo accetta nonostante i suoi dubbi.',
    },
  },
  lobQhorin: {
    character: 'qhorin-halfhand',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The ranger his hunters overtake. He has Jon kill him, burns his body and keeps some of the charred bones.',
      it: 'Il ranger che i suoi cacciatori raggiungono. Lo fa uccidere a Jon, ne brucia il corpo e tiene per sé alcune ossa carbonizzate.',
    },
  },
  lobYgritte: {
    character: 'ygritte',
    type: { en: 'Hunter of his band', it: 'Cacciatrice della sua banda' },
    summary: {
      en: 'One of the fourteen hunters he leads. She is with the band when it overtakes the rangers.',
      it: 'Una dei quattordici cacciatori che guida. È con la banda quando raggiunge i ranger.',
    },
  },
  lobEbben: {
    character: 'ebben',
    type: { en: 'Ranger of Qhorin’s party', it: 'Ranger del gruppo di Qhorin' },
    summary: {
      en: 'A ranger of Qhorin’s party. His hunters carry Ebben’s head, and he orders the other rangers killed.',
      it: 'Un ranger del gruppo di Qhorin. I suoi cacciatori portano la testa di Ebben, e lui ordina di uccidere gli altri ranger.',
    },
  },
} satisfies Record<string, Relationship>

/** Episode numbers on a `source: 'chapter'` entry only order it, as on the records. */
export const season2Relationships = {
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
  // The Wall and beyond (#1483). Books only: Jon I (site chapter 80) and Jon V
  // (117).
  'thoren-smallwood': [
    {
      episode: 11,
      chapter: 80,
      source: 'chapter',
      value: [wall.thoJeor, wall.thoBenjen],
    },
    {
      episode: 15,
      chapter: 117,
      source: 'chapter',
      value: [
        wall.thoJeorScouts,
        wall.thoQhorin,
        wall.thoJarman,
        wall.thoBenjen,
      ],
    },
  ],
  // Books only: Whitetree in Jon II (chapter 87), Craster's Keep in Jon III
  // (97).
  'jarman-buckwell': [
    {
      episode: 11,
      chapter: 87,
      source: 'chapter',
      value: [wall.jarJeor, wall.jarThoren],
    },
    {
      episode: 11,
      chapter: 97,
      source: 'chapter',
      value: [wall.jarCraster, wall.jarJon, wall.jarJeor, wall.jarThoren],
    },
  ],
  'mallador-locke': [
    {
      episode: 11,
      chapter: 87,
      source: 'chapter',
      value: [wall.locJeor, wall.locThoren, wall.locJarman],
    },
  ],
  // The show names him at 20 only; the books' Whitetree pair at 87 and his
  // warnings about Craster at 97. Episode 20 on the books' entries only orders
  // them, as on his record.
  'eddison-tollett': [
    {
      episode: 20,
      chapter: 87,
      source: 'episode',
      value: [wall.eddSam, wall.eddGrenn, wall.eddJon, wall.eddCraster],
    },
    {
      episode: 20,
      chapter: 87,
      source: 'chapter',
      value: [wall.eddJonBook, wall.eddJeorBook],
    },
    {
      episode: 20,
      chapter: 97,
      source: 'chapter',
      value: [
        wall.eddJonCraster,
        wall.eddJeorBook,
        wall.eddCrasterBook,
        wall.eddSamBook,
      ],
    },
  ],
  // The show's Craster beats Jon and sends the Watch away in episodes 12–13;
  // those cards wait for Gilly's gate at 15, which they name her in. The
  // book's Craster has no such scene.
  'craster': [
    {
      episode: 11,
      chapter: 97,
      source: 'episode',
      value: [wall.craJeor, wall.craJon, wall.craBenjen],
    },
    {
      episode: 15,
      chapter: 97,
      source: 'episode',
      value: [wall.craGilly, wall.craJonBeaten, wall.craJeorOut],
    },
    {
      episode: 11,
      chapter: 97,
      source: 'chapter',
      value: [
        wall.craJeorBook,
        wall.craJonBook,
        wall.craGillyBook,
        wall.craBenjenBook,
        wall.craJarman,
      ],
    },
  ],
  // The show's Sam comes to her aid at the keep and gives her a thimble; the
  // book's Jon does, and Sam lends her his cloak.
  'gilly': [
    {
      episode: 15,
      chapter: 97,
      source: 'episode',
      value: [wall.gilCraster, wall.gilSam, wall.gilJon, wall.gilGhost],
    },
    {
      episode: 15,
      chapter: 97,
      source: 'chapter',
      value: [
        wall.gilCrasterBook,
        wall.gilJonBook,
        wall.gilSamBook,
        wall.gilGhostBook,
      ],
    },
  ],
  // Show: the Fist at episode 15, Jon's duel at 20. Books: Jon V (117), Jon VI
  // (125) and Jon VIII (142).
  'qhorin-halfhand': [
    {
      episode: 15,
      chapter: 117,
      source: 'episode',
      value: [wall.qhoJeor, wall.qhoJon],
    },
    {
      episode: 20,
      chapter: 142,
      source: 'episode',
      value: [wall.qhoJonKilled, wall.qhoYgritte],
    },
    {
      episode: 15,
      chapter: 117,
      source: 'chapter',
      value: [
        wall.qhoJonBook,
        wall.qhoJeorBook,
        wall.qhoThoren,
        wall.qhoJarman,
      ],
    },
    {
      episode: 16,
      chapter: 125,
      source: 'chapter',
      value: [wall.qhoJonPass, wall.qhoStonesnake, wall.qhoYgritteBook],
    },
    {
      episode: 20,
      chapter: 142,
      source: 'chapter',
      value: [
        wall.qhoJonYield,
        wall.qhoLord,
        wall.qhoEbben,
        wall.qhoStonesnakeFoot,
      ],
    },
  ],
  // Books only: Jon VI (chapter 125), and Jon VIII (142) where Qhorin sends
  // him ahead on foot.
  'stonesnake': [
    {
      episode: 15,
      chapter: 125,
      source: 'chapter',
      value: [wall.stoJon, wall.stoQhorin, wall.stoYgritte],
    },
    {
      episode: 20,
      chapter: 142,
      source: 'chapter',
      value: [wall.stoQhorinFoot, wall.stoJeor, wall.stoJonSeen],
    },
  ],
  // Show: "The Old Gods and the New" (episode 16) and "Valar Morghulis" (20).
  // Books: Jon VI (125) and Jon VIII (142).
  'ygritte': [
    {
      episode: 16,
      chapter: 125,
      source: 'episode',
      value: [wall.ygJon, wall.ygQhorin],
    },
    {
      episode: 20,
      chapter: 142,
      source: 'episode',
      value: [wall.ygJonCompany, wall.ygQhorinDead],
    },
    {
      episode: 16,
      chapter: 125,
      source: 'chapter',
      value: [wall.ygJonBook, wall.ygStonesnakeBook, wall.ygQhorinBook],
    },
    {
      episode: 20,
      chapter: 142,
      source: 'chapter',
      value: [wall.ygJonHunt, wall.ygLord, wall.ygQhorinHunt],
    },
  ],
  // Books only: Jon VII (chapter 127), and Jon VIII (142) where his head
  // comes back.
  'ebben': [
    {
      episode: 17,
      chapter: 127,
      source: 'chapter',
      value: [wall.ebbQhorin, wall.ebbJon],
    },
    {
      episode: 20,
      chapter: 142,
      source: 'chapter',
      value: [wall.ebbQhorinDead, wall.ebbLord],
    },
  ],
  'dalbridge': [
    { episode: 17, chapter: 127, source: 'chapter', value: [wall.dalQhorin] },
  ],
  'lord-of-bones': [
    {
      episode: 18,
      chapter: 142,
      source: 'chapter',
      value: [wall.lobJon, wall.lobQhorin, wall.lobYgritte, wall.lobEbben],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
