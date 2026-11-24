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

/** Episode numbers on a `source: 'chapter'` entry only order it, as on the records. */
/**
 * The Winterfell and Iron Islands cast of stage 2 (#1482): the new characters'
 * own cards. Season 1's characters who return to Winterfell or Pyke have their
 * stage-2 cards in `season-1.relationships.ts`.
 */
const winterfell = {
  balTheonShow: {
    character: 'theon-greyjoy',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His youngest son, back after nine years as a ward of the Starks. Balon doubts his loyalty and refuses Robb’s offer of a crown.',
      it: 'Il figlio minore, tornato dopo nove anni da pupillo degli Stark. Balon dubita della sua lealtà e rifiuta l’offerta di una corona fatta da Robb.',
    },
  },
  balAshaShow: {
    character: 'asha-greyjoy',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, whom he greets warmly in front of Theon. He sets her above his son.',
      it: 'Sua figlia, che saluta con calore davanti a Theon. La mette al di sopra del figlio.',
    },
  },
  balTheonWar: {
    character: 'theon-greyjoy',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, who asks him to rethink the attack on the North. Balon hits him and gives him a single ship to raid the fishing villages of the coast.',
      it: 'Suo figlio, che gli chiede di ripensare all’attacco al Nord. Balon lo colpisce e gli affida una sola nave per razziare i villaggi di pescatori della costa.',
    },
  },
  balAshaWar: {
    character: 'asha-greyjoy',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, whom he puts in command of thirty ships and sends to take Deepwood Motte.',
      it: 'Sua figlia, a cui dà il comando di trenta navi e che manda a prendere Deepwood Motte.',
    },
  },
  balTheonBook: {
    character: 'theon-greyjoy',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, back after ten years as the Starks’ ward. Balon burns Robb’s letter and strikes Theon when he protests: a crown that is given can be taken away, so he will win his by conquest.',
      it: 'Suo figlio, tornato dopo dieci anni da pupillo degli Stark. Balon brucia la lettera di Robb e colpisce Theon quando protesta: una corona regalata può essere ripresa, e lui conquisterà la sua con la forza.',
    },
  },
  balAeronBook: {
    character: 'aeron-greyjoy',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, the priest of the Drowned God. Balon sends only him to meet Theon at Lordsport.',
      it: 'Suo fratello, sacerdote del Dio Abissale. Balon manda soltanto lui a incontrare Theon a Lordsport.',
    },
  },
  balTheonPlan: {
    character: 'theon-greyjoy',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, whom he will not hear out. He gives Theon eight ships to raid the coast, with his uncle Aeron beside him.',
      it: 'Suo figlio, che non vuole ascoltare. Gli affida otto navi per razziare la costa, con lo zio Aeron al suo fianco.',
    },
  },
  balAshaBook: {
    character: 'asha-greyjoy',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, seated at his right hand at the feast. He gives her thirty ships and picked men to take Deepwood Motte.',
      it: 'Sua figlia, seduta alla sua destra al banchetto. Le dà trenta navi e uomini scelti per prendere Deepwood Motte.',
    },
  },
  balVictarion: {
    character: 'victarion-greyjoy',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His younger brother, who leads the main attack. Victarion is to take Moat Cailin and shut Robb out of the North.',
      it: 'Suo fratello minore, che guida l’attacco principale. Victarion deve prendere Moat Cailin e chiudere il Nord a Robb.',
    },
  },
  balAeronPlan: {
    character: 'aeron-greyjoy',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother the priest, who sits with them in the solar and goes with Theon on the raid.',
      it: 'Suo fratello, il sacerdote, che siede con loro nel solario e accompagna Theon nell’incursione.',
    },
  },
  ashBalonShow: {
    character: 'balon-greyjoy',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, who greets her warmly in front of Theon and rates her above him.',
      it: 'Suo padre, che la saluta con calore davanti a Theon e la stima più di lui.',
    },
  },
  ashTheonShow: {
    character: 'theon-greyjoy',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, back from the Starks. She guides him to Pyke without saying who she is while he tries to seduce her.',
      it: 'Suo fratello, tornato dagli Stark. Lo guida a Pyke senza dirgli chi è, mentre lui cerca di sedurla.',
    },
  },
  ashTheonWinterfellShow: {
    character: 'theon-greyjoy',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who holds Winterfell. She tells him it is too far from the sea to keep and asks him to come home with her. He refuses.',
      it: 'Suo fratello, che tiene Grande Inverno. Gli dice che è troppo lontano dal mare per difenderlo e gli chiede di tornare a casa con lei. Lui rifiuta.',
    },
  },
  ashTheonBook: {
    character: 'theon-greyjoy',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who takes her for a stranger named Esgred and flirts with her on the ride to Pyke. She lets him, then shows him up at the feast.',
      it: 'Suo fratello, che la scambia per una certa Esgred e flirta con lei durante il viaggio fino a Pyke. Lei lo lascia fare, poi lo umilia al banchetto.',
    },
  },
  ashBalonBook: {
    character: 'balon-greyjoy',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, who seats her at his right hand and gives her thirty ships to take Deepwood Motte.',
      it: 'Suo padre, che la fa sedere alla sua destra e le dà trenta navi per prendere Deepwood Motte.',
    },
  },
  ashVictarion: {
    character: 'victarion-greyjoy',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'Her uncle, who is to lead the main attack at Moat Cailin while she takes Deepwood Motte.',
      it: 'Suo zio, che deve guidare l’attacco principale a Moat Cailin mentre lei prende Deepwood Motte.',
    },
  },
  ashAeron: {
    character: 'aeron-greyjoy',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'Her uncle, the priest of the Drowned God, who is to go on the raid with Theon.',
      it: 'Suo zio, il sacerdote del Dio Abissale, che andrà in incursione con Theon.',
    },
  },
  ashTheonWinterfellBook: {
    character: 'theon-greyjoy',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who calls himself Prince of Winterfell. She tells him the wise course was to raze the castle and take the Stark boys to Pyke, and asks him to leave with her. He will not.',
      it: 'Suo fratello, che si fa chiamare principe di Grande Inverno. Gli dice che la scelta saggia era radere al suolo il castello e portare a Pyke i ragazzi Stark, e gli chiede di andarsene con lei. Lui non vuole.',
    },
  },
  ashDagmerBook: {
    character: 'dagmer',
    type: { en: 'Raider', it: 'Predone' },
    summary: {
      en: 'The ironborn captain who lost the fight at Torrhen’s Square. She knows before Theon does that he is leading the survivors back to the coast.',
      it: 'Il capitano degli uomini di ferro che ha perso lo scontro a Piazza di Torrhen. Lei sa prima di Theon che sta riportando i superstiti verso la costa.',
    },
  },
  aerTheon85: {
    character: 'theon-greyjoy',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His nephew, whom he meets at Lordsport and escorts to Pyke. He tells Theon that Balon will never hand the isles to a man the Starks raised.',
      it: 'Suo nipote, che incontra a Lordsport e accompagna a Pyke. Gli dice che Balon non consegnerà mai le isole a un uomo cresciuto dagli Stark.',
    },
  },
  aerBalon85: {
    character: 'balon-greyjoy',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, the lord of the Iron Islands. Aeron brings Theon to his castle at sunset and leaves at once.',
      it: 'Suo fratello, il lord delle Isole di Ferro. Al tramonto porta Theon al suo castello e se ne va subito.',
    },
  },
  aerBalon98: {
    character: 'balon-greyjoy',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, who calls him to the solar to hear the plan for the war.',
      it: 'Suo fratello, che lo convoca nel solario per ascoltare il piano di guerra.',
    },
  },
  aerVictarion: {
    character: 'victarion-greyjoy',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, who sits with them in the solar and is to lead the main attack.',
      it: 'Suo fratello, che siede con loro nel solario e deve guidare l’attacco principale.',
    },
  },
  aerTheon98: {
    character: 'theon-greyjoy',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His nephew, whose new ship he is to bless. Aeron sails with Theon on the raid on the coast.',
      it: 'Suo nipote, la cui nuova nave dovrà benedire. Aeron salpa con Theon per l’incursione sulla costa.',
    },
  },
  aerAsha: {
    character: 'asha-greyjoy',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece, who is to take thirty ships to Deepwood Motte.',
      it: 'Sua nipote, che deve prendere Deepwood Motte con trenta navi.',
    },
  },
  aerTheon111: {
    character: 'theon-greyjoy',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His nephew and commander. Aeron insists that the northern captive be given to the Drowned God by drowning, and Theon gives in.',
      it: 'Suo nipote e comandante. Aeron vuole che il prigioniero del Nord sia offerto al Dio Abissale per annegamento, e Theon cede.',
    },
  },
  vicBalon: {
    character: 'balon-greyjoy',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His older brother, who lays out the war in the solar. Victarion is to lead the main attack toward Moat Cailin.',
      it: 'Suo fratello maggiore, che nel solario espone il piano di guerra. Victarion guiderà l’attacco principale verso Moat Cailin.',
    },
  },
  vicAeron: {
    character: 'aeron-greyjoy',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, the priest of the Drowned God, who sits with them in the solar.',
      it: 'Suo fratello, sacerdote del Dio Abissale, che siede con loro nel solario.',
    },
  },
  vicTheon: {
    character: 'theon-greyjoy',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His nephew, who has borrowed Victarion’s steersman for his new ship.',
      it: 'Suo nipote, che ha preso in prestito il suo timoniere per la sua nuova nave.',
    },
  },
  vicAsha: {
    character: 'asha-greyjoy',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece, who takes thirty ships to Deepwood Motte while he goes for Moat Cailin.',
      it: 'Sua nipote, che prende Deepwood Motte con trenta navi mentre lui va a Moat Cailin.',
    },
  },
  dagTheonShow15: {
    character: 'theon-greyjoy',
    type: { en: 'Young captain', it: 'Giovane capitano' },
    summary: {
      en: 'Balon’s son, put in command of the ship. Dagmer tells him the crew will not respect him until he proves himself, and they settle on a raid on Torrhen’s Square.',
      it: 'Il figlio di Balon, messo al comando della nave. Dagmer gli dice che la ciurma non lo rispetterà finché non si sarà messo alla prova, e scelgono un attacco a Piazza di Torrhen.',
    },
  },
  dagTheonShow16: {
    character: 'theon-greyjoy',
    type: { en: 'Young commander', it: 'Giovane comandante' },
    summary: {
      en: 'The young lord who takes Winterfell. Dagmer tells him he must put Rodrik to death or lose his crew’s respect.',
      it: 'Il giovane lord che prende Grande Inverno. Dagmer gli dice che deve far giustiziare Rodrik o perdere il rispetto dei suoi uomini.',
    },
  },
  dagRodrikShow: {
    character: 'rodrik-cassel',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The Winterfell knight taken on his way back from Torrhen’s Square. Dagmer insisted Theon execute him, and Theon needed four blows to do it.',
      it: 'Il cavaliere di Grande Inverno catturato mentre tornava da Piazza di Torrhen. Dagmer ha preteso che Theon lo giustiziasse, e a Theon sono serviti quattro colpi.',
    },
  },
  dagTheonShow20: {
    character: 'theon-greyjoy',
    type: { en: 'Young commander', it: 'Giovane comandante' },
    summary: {
      en: 'The prince whose men turn on him. Dagmer knocks him out so that the ironmen can deliver him to the Bolton army.',
      it: 'Il principe tradito dai suoi uomini. Dagmer lo stordisce perché gli uomini di ferro possano consegnarlo all’esercito dei Bolton.',
    },
  },
  dagLuwinShow: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who tries to stop the ironmen from taking Theon. Dagmer stabs him with a spear.',
      it: 'Il maestro che cerca di impedire agli uomini di ferro di portare via Theon. Dagmer lo trafigge con una lancia.',
    },
  },
  dagTheonBook: {
    character: 'theon-greyjoy',
    type: { en: 'Young commander', it: 'Giovane comandante' },
    summary: {
      en: 'Balon’s son, who takes him below deck aboard Foamdrinker and tells him to march on Torrhen’s Square and build siege engines, to draw Ser Rodrik out of Winterfell.',
      it: 'Il figlio di Balon, che lo porta sottocoperta sulla Foamdrinker e gli ordina di marciare su Piazza di Torrhen e costruire macchine d’assedio, per far uscire ser Rodrik da Grande Inverno.',
    },
  },
  dagBalonBook: {
    character: 'balon-greyjoy',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord whose best man he says he has always been. He tells Theon that Balon has come to rely on Asha, who has never failed him.',
      it: 'Il lord di cui dice di essere sempre stato l’uomo migliore. Dice a Theon che Balon si è abituato a contare su Asha, che non l’ha mai deluso.',
    },
  },
  dagAeronBook: {
    character: 'aeron-greyjoy',
    type: { en: 'Priest', it: 'Sacerdote' },
    summary: {
      en: 'Balon’s brother, who raids the coast under Theon. Theon means to give him six ships while Dagmer goes on to Torrhen’s Square.',
      it: 'Il fratello di Balon, che razzia la costa agli ordini di Theon. Theon vuole dargli sei navi mentre Dagmer prosegue verso Piazza di Torrhen.',
    },
  },
  dagTheonBook130: {
    character: 'theon-greyjoy',
    type: { en: 'Young commander', it: 'Giovane comandante' },
    summary: {
      en: 'The prince who sent him against Torrhen’s Square. Dagmer lost the fight there and is leading the survivors back to the coast.',
      it: 'Il principe che lo ha mandato contro Piazza di Torrhen. Dagmer ha perso lo scontro e sta riportando i superstiti verso la costa.',
    },
  },
  dagAshaBook130: {
    character: 'asha-greyjoy',
    type: { en: 'Balon’s daughter', it: 'Figlia di Balon' },
    summary: {
      en: 'Balon’s daughter, who already knows he is leading the survivors back to the coast, before Theon does.',
      it: 'La figlia di Balon, che sa già, prima di Theon, che sta riportando i superstiti verso la costa.',
    },
  },
  dagRodrikBook130: {
    character: 'rodrik-cassel',
    type: { en: 'Castellan', it: 'Castellano' },
    summary: {
      en: 'The castellan of Winterfell, whom the siege at Torrhen’s Square drew out of the castle. Dagmer lost the fight there.',
      it: 'Il castellano di Grande Inverno, che l’assedio di Piazza di Torrhen ha attirato fuori dal castello. Dagmer ha perso lo scontro.',
    },
  },
  lorTheon124: {
    character: 'theon-greyjoy',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The prince who holds Winterfell. With Urzen, Lorren shows him the guards killed at the Hunter’s Gate on the night Bran and Rickon vanish.',
      it: 'Il principe che tiene Grande Inverno. Insieme a Urzen, Lorren gli mostra le guardie uccise alla Porta del Cacciatore la notte in cui Bran e Rickon spariscono.',
    },
  },
  lorTheon140: {
    character: 'theon-greyjoy',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The prince he stays beside when the others leave. He tells Theon to put the castle folk to the sword before they turn on the ironborn.',
      it: 'Il principe a cui resta accanto quando gli altri se ne vanno. Dice a Theon di passare a fil di spada la gente del castello prima che si rivolti contro gli uomini di ferro.',
    },
  },
  lorWex140: {
    character: 'wex-pyke',
    type: { en: 'Fellow loyalist', it: 'Altro fedele' },
    summary: {
      en: 'Theon’s squire, who steps to Theon’s side first when he offers the men a choice. Lorren follows him.',
      it: 'Lo scudiero di Theon, che per primo passa dalla parte di Theon quando lui offre una scelta agli uomini. Lorren lo segue.',
    },
  },
  lorRodrik140: {
    character: 'rodrik-cassel',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The northern knight whose daughter Lorren shows on the wall, a noose round her neck, when Theon gives the signal.',
      it: 'Il cavaliere del Nord la cui figlia Lorren mostra sulle mura, con un cappio al collo, quando Theon dà il segnale.',
    },
  },
  lorTheon143: {
    character: 'theon-greyjoy',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The prince he stood by when the others left. After the sack, his body is among the dead at Winterfell.',
      it: 'Il principe a cui è rimasto accanto quando gli altri se ne sono andati. Dopo il saccheggio, il suo corpo è tra i morti di Grande Inverno.',
    },
  },
  wexTheon98: {
    character: 'theon-greyjoy',
    type: { en: 'Lord he serves', it: 'Signore che serve' },
    summary: {
      en: 'The lord whose squire he is. When Theon learns that Esgred is his sister, Wex smirks, and Theon turns on him.',
      it: 'Il lord di cui è scudiero. Quando Theon scopre che Esgred è sua sorella, Wex ghigna, e Theon se la prende con lui.',
    },
  },
  wexTheon140: {
    character: 'theon-greyjoy',
    type: { en: 'Lord he serves', it: 'Signore che serve' },
    summary: {
      en: 'The lord he stands by. When Theon offers the ironborn the choice of leaving or dying beside him, Wex steps over to his side first.',
      it: 'Il lord al cui fianco resta. Quando Theon offre agli uomini di ferro la scelta tra andarsene e morire con lui, Wex è il primo a schierarsi dalla sua parte.',
    },
  },
  wexLorren140: {
    character: 'black-lorren',
    type: { en: 'Fellow loyalist', it: 'Altro fedele' },
    summary: {
      en: 'Another ironman who stays: Lorren follows him over to Theon’s side.',
      it: 'Un altro uomo di ferro che resta: Lorren lo segue dalla parte di Theon.',
    },
  },
  farTheon124: {
    character: 'theon-greyjoy',
    type: { en: 'Prince he serves', it: 'Principe che serve' },
    summary: {
      en: 'The prince who holds Winterfell. Theon asks whether the dogs could be on the wrong wolves, and Farlen says they could not.',
      it: 'Il principe che tiene Grande Inverno. Theon chiede se i cani possano seguire i lupi sbagliati, e Farlen risponde di no.',
    },
  },
  farBran: {
    character: 'bran-stark',
    type: { en: 'Young lord', it: 'Giovane signore' },
    summary: {
      en: 'The boy lord of Winterfell, who once asked why the direwolves howl. Farlen told him they long for freedom.',
      it: 'Il giovane signore di Grande Inverno, che una volta gli ha chiesto perché i metalupi ululino. Farlen gli ha risposto che desiderano la libertà.',
    },
  },
  farTheon130: {
    character: 'theon-greyjoy',
    type: { en: 'Executioner', it: 'Boia' },
    summary: {
      en: 'The prince who beheaded him to blame someone for the deaths of three ironmen. It took Theon four blows.',
      it: 'Il principe che lo ha decapitato per avere un colpevole per la morte di tre uomini di ferro. A Theon sono serviti quattro colpi.',
    },
  },
  meeJojen95: {
    character: 'jojen-reed',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her younger brother. They kneel together to swear their father’s oath to the Starks, and he asks to see the direwolves.',
      it: 'Suo fratello minore. S’inginocchiano insieme per giurare agli Stark il giuramento del padre, e lui chiede di vedere i metalupi.',
    },
  },
  meeBran95: {
    character: 'bran-stark',
    type: { en: 'Lord she swears to', it: 'Signore a cui giura' },
    summary: {
      en: 'The boy who holds Winterfell for the King in the North. She brings him gifts of fish, frog and fowl, and he blushes when she catches him staring.',
      it: 'Il ragazzo che regge Grande Inverno per il Re del Nord. Gli porta in dono pesce, rana e volatili, e lui arrossisce quando lei lo sorprende a fissarla.',
    },
  },
  meeBran124: {
    character: 'bran-stark',
    type: { en: 'Boy lord', it: 'Giovane signore' },
    summary: {
      en: 'The boy lord who vanishes from Winterfell the same night as she and Jojen. Theon’s trackers find their prints together.',
      it: 'Il giovane signore che sparisce da Grande Inverno la stessa notte di lei e di Jojen. Gli inseguitori di Theon trovano le loro tracce insieme.',
    },
  },
  meeJojen124: {
    character: 'jojen-reed',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, missing with her. Theon’s trackers find the prints of the two Reeds beside Hodor’s.',
      it: 'Suo fratello, scomparso con lei. Gli inseguitori di Theon trovano le impronte dei due Reed accanto a quelle di Hodor.',
    },
  },
  meeOsha124: {
    character: 'osha',
    type: { en: 'Fellow runaway', it: 'Altra fuggiasca' },
    summary: {
      en: 'The wildling woman who is missing with them, and whom Theon blames for freeing the wolves.',
      it: 'La donna dei bruti scomparsa con loro, che Theon ritiene responsabile della liberazione dei lupi.',
    },
  },
  meeBran143: {
    character: 'bran-stark',
    type: { en: 'Boy lord', it: 'Giovane signore' },
    summary: {
      en: 'The boy lord she hides with in the crypts. They decide to go north together with her brother, Hodor and Summer.',
      it: 'Il giovane signore con cui si nasconde nelle cripte. Decidono di andare a nord insieme a suo fratello, a Hodor e a Estate.',
    },
  },
  meeJojen143: {
    character: 'jojen-reed',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who wakes Bran from three days of wolf dreams. He goes north with her.',
      it: 'Suo fratello, che sveglia Bran da tre giorni di sogni di lupo. Va a nord con lei.',
    },
  },
  meeHodor143: {
    character: 'hodor',
    type: { en: 'Companion', it: 'Compagno di viaggio' },
    summary: {
      en: 'The giant who carries Bran and shifts the stone from the crypt door. He goes north with them.',
      it: 'Il gigante che porta Bran e sposta la pietra dalla porta della cripta. Va a nord con loro.',
    },
  },
  jojMeera95: {
    character: 'meera-reed',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His elder sister, who speaks for them both. They swear their father’s oath to the Starks together.',
      it: 'Sua sorella maggiore, che parla per tutti e due. Insieme giurano agli Stark il giuramento del padre.',
    },
  },
  jojBran95: {
    character: 'bran-stark',
    type: { en: 'Boy lord', it: 'Giovane signore' },
    summary: {
      en: 'The boy lord of Winterfell. Jojen asks him at once where the direwolves are.',
      it: 'Il giovane signore di Grande Inverno. Jojen gli chiede subito dove siano i metalupi.',
    },
  },
  jojSummer95: {
    character: 'summer-direwolf',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'Bran’s direwolf, which he touches in the godswood on the night of the feast. Jojen says Summer is stronger than he knows.',
      it: 'Il metalupo di Bran, che tocca nel parco degli dèi la notte del banchetto. Jojen dice che Estate è più forte di quanto creda.',
    },
  },
  jojBran102: {
    character: 'bran-stark',
    type: { en: 'Winged wolf', it: 'Lupo alato' },
    summary: {
      en: 'The boy he calls a winged wolf chained to the earth. He tells Bran a three-eyed crow is trying to free him, and that he must open his third eye.',
      it: 'Il ragazzo che chiama lupo alato incatenato alla terra. Dice a Bran che un corvo con tre occhi cerca di liberarlo, e che deve aprire il terzo occhio.',
    },
  },
  jojMeera102: {
    character: 'meera-reed',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, who steps between him and Summer when the wolf growls and then follows him up a tree.',
      it: 'Sua sorella, che si mette tra lui ed Estate quando il lupo ringhia e poi lo segue su un albero.',
    },
  },
  jojSummer102: {
    character: 'summer-direwolf',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'Bran’s direwolf, which growls when Jojen asks whether Bran falls every night.',
      it: 'Il metalupo di Bran, che ringhia quando Jojen chiede se Bran cada ogni notte.',
    },
  },
  jojBran143: {
    character: 'bran-stark',
    type: { en: 'Boy he warns', it: 'Ragazzo che avverte' },
    summary: {
      en: 'The boy he wakes from three days spent as Summer. He warns Bran that the wolf eats in the dreams while Bran does not, and goes north with him.',
      it: 'Il ragazzo che sveglia dopo tre giorni passati come Estate. Avverte Bran che il lupo mangia nei sogni mentre lui no, e va a nord con lui.',
    },
  },
  jojMeera143: {
    character: 'meera-reed',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, who goes north with him and Bran.',
      it: 'Sua sorella, che va a nord con lui e con Bran.',
    },
  },
  jojHodor143: {
    character: 'hodor',
    type: { en: 'Companion', it: 'Compagno di viaggio' },
    summary: {
      en: 'The giant who moves the stone from the crypt door and goes north with them.',
      it: 'Il gigante che sposta la pietra dalla porta della cripta e va a nord con loro.',
    },
  },
  ramTheon: {
    character: 'theon-greyjoy',
    type: { en: 'Prince of Winterfell', it: 'Principe di Grande Inverno' },
    summary: {
      en: 'The prince of Winterfell. Ramsay lifts his helm and tells Theon the man he knew as Reek is dead and that he is Ramsay Snow, then punches him to the ground.',
      it: 'Il principe di Grande Inverno. Ramsay si toglie l’elmo e dice a Theon che l’uomo che conosceva come Reek è morto e che lui è Ramsay Snow, poi lo stende con un pugno.',
    },
  },
  ramRoose: {
    character: 'roose-bolton',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, whose Dreadfort garrison supplies the six hundred men he brings to Winterfell.',
      it: 'Suo padre, la cui guarnigione del Dreadfort fornisce i seicento uomini che porta a Grande Inverno.',
    },
  },
  ramRodrik: {
    character: 'rodrik-cassel',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The northern knight who took the Dreadfort men for allies, until they turned on his army. Ramsay hands Theon his corpse.',
      it: 'Il cavaliere del Nord che ha scambiato gli uomini del Dreadfort per alleati, finché non si sono voltati contro il suo esercito. Ramsay consegna a Theon il suo cadavere.',
    },
  },
  bigLittle: {
    character: 'little-walder-frey',
    type: { en: 'Cousin', it: 'Cugino' },
    summary: {
      en: 'His cousin and fellow ward at Winterfell. They joust at the quintains together.',
      it: 'Suo cugino e compagno di pupillato a Grande Inverno. Si esercitano insieme alla giostra contro i bersagli.',
    },
  },
  bigBran: {
    character: 'bran-stark',
    type: { en: 'Lord of the castle', it: 'Signore del castello' },
    summary: {
      en: 'The boy who holds Winterfell for Robb. When Little Walder mocks Bran’s carrier, Big Walder looks ashamed.',
      it: 'Il ragazzo che regge Grande Inverno per Robb. Quando Little Walder prende in giro chi porta Bran, Big Walder sembra vergognarsi.',
    },
  },
  bigLuwin: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who scolds the wards for mocking Hodor and tells them to keep out of the godswood.',
      it: 'Il maestro che rimprovera i pupilli per aver preso in giro Hodor e dice loro di stare lontani dal parco degli dèi.',
    },
  },
  bigRickon: {
    character: 'rickon-stark',
    type: { en: 'Playmate', it: 'Compagno di giochi' },
    summary: {
      en: 'The youngest Stark, who took to the wards after Shaggydog bit Little Walder. They play monsters and maidens together.',
      it: 'Il più giovane degli Stark, che si è affezionato ai pupilli dopo che Cagnaccio ha morso Little Walder. Giocano insieme ai mostri e alle fanciulle.',
    },
  },
  bigWalder: {
    character: 'walder-frey',
    type: { en: 'Grandfather', it: 'Nonno' },
    summary: {
      en: 'Lord Walder Frey of the Twins, whose name he shares with a crowd of cousins.',
      it: 'Lord Walder Frey dei Gemelli, di cui porta il nome insieme a una folla di cugini.',
    },
  },
  litBig: {
    character: 'big-walder-frey',
    type: { en: 'Cousin', it: 'Cugino' },
    summary: {
      en: 'His cousin, fifty-two days older and half a foot shorter. They joust at the quintains together.',
      it: 'Suo cugino, più vecchio di cinquantadue giorni e più basso di mezzo piede. Si esercitano insieme alla giostra contro i bersagli.',
    },
  },
  litBran: {
    character: 'bran-stark',
    type: { en: 'Lord of the castle', it: 'Signore del castello' },
    summary: {
      en: 'The boy who holds Winterfell. When Bran threatens to set Summer on him, Little Walder says he wants a wolfskin cloak.',
      it: 'Il ragazzo che regge Grande Inverno. Quando Bran minaccia di sguinzagliargli contro Estate, Little Walder dice che vorrebbe un mantello di pelle di lupo.',
    },
  },
  litHodor: {
    character: 'hodor',
    type: { en: 'Servant he mocks', it: 'Servo che deride' },
    summary: {
      en: 'Bran’s carrier, whom he calls an ugly horse and bumps with his own mount.',
      it: 'Chi porta Bran, che chiama brutto cavallo e urta con il proprio destriero.',
    },
  },
  litShaggydog: {
    character: 'shaggydog',
    type: { en: 'Wolf that bit him', it: 'Lupo che l’ha morso' },
    summary: {
      en: 'Rickon’s black direwolf, which bit him after he hit Rickon with a stick. The wolves are now kept in the godswood.',
      it: 'Il metalupo nero di Rickon, che lo ha morso dopo che lui ha colpito Rickon con un bastone. Ora i lupi sono tenuti nel parco degli dèi.',
    },
  },
  litLuwin: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who scolds him for mocking Hodor. Little Walder stays haughty.',
      it: 'Il maestro che lo rimprovera per aver preso in giro Hodor. Little Walder resta altezzoso.',
    },
  },
  wymBran: {
    character: 'bran-stark',
    type: { en: 'Boy lord', it: 'Giovane signore' },
    summary: {
      en: 'The boy who welcomes him from his father’s high seat. Wyman tells him no prince is ever late.',
      it: 'Il ragazzo che lo accoglie dal seggio alto di suo padre. Wyman gli dice che nessun principe è mai in ritardo.',
    },
  },
  wymRodrik: {
    character: 'rodrik-cassel',
    type: { en: 'Castellan', it: 'Castellano' },
    summary: {
      en: 'The castellan beside Bran at the audience. Wyman argues for White Harbor as the place to mint coin and build a fleet for Robb’s kingdom.',
      it: 'Il castellano accanto a Bran all’udienza. Wyman propone Porto Bianco come luogo dove coniare moneta e costruire una flotta per il regno di Robb.',
    },
  },
  wymDonella: {
    character: 'donella-hornwood',
    type: { en: 'Cousin', it: 'Cugina' },
    summary: {
      en: 'His widowed cousin. He asks after her and says he would marry her himself, or give her his son.',
      it: 'Sua cugina rimasta vedova. Chiede di lei e dice che la sposerebbe lui stesso, oppure le darebbe suo figlio.',
    },
  },
  wymWendel: {
    character: 'wendel-manderly',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son Ser Wendel, whom he offers as a husband for Lady Hornwood.',
      it: 'Suo figlio ser Wendel, che offre come marito a lady Hornwood.',
    },
  },
  wymDonellaDead: {
    character: 'donella-hornwood',
    type: { en: 'Cousin', it: 'Cugina' },
    summary: {
      en: 'His widowed cousin, whose castle he took to keep it safe. She was forced to wed Roose Bolton’s bastard, and then murdered.',
      it: 'Sua cugina rimasta vedova, di cui ha preso il castello per proteggerlo. È stata costretta a sposare il bastardo di Roose Bolton, e poi uccisa.',
    },
  },
  wymRodrik109: {
    character: 'rodrik-cassel',
    type: { en: 'Castellan', it: 'Castellano' },
    summary: {
      en: 'The castellan who has come back from the east with a prisoner. Manderly and Bolton men are fighting in the Hornwood, and Rodrik lacks the strength to stop them.',
      it: 'Il castellano tornato da est con un prigioniero. Uomini dei Manderly e dei Bolton combattono nelle terre degli Hornwood, e Rodrik non ha la forza di fermarli.',
    },
  },
  donBran90: {
    character: 'bran-stark',
    type: { en: 'Boy lord', it: 'Giovane signore' },
    summary: {
      en: 'The boy lord who offers her his condolences. He would give her a hundred men to guard her lands.',
      it: 'Il giovane signore che le porge le condoglianze. Le darebbe cento uomini a difesa delle sue terre.',
    },
  },
  donRodrik90: {
    character: 'rodrik-cassel',
    type: { en: 'Castellan', it: 'Castellano' },
    summary: {
      en: 'The castellan who promises to protect her lands and look for a husband she likes. She hints that she would take him.',
      it: 'Il castellano che promette di proteggere le sue terre e di cercarle un marito di suo gusto. Lei lascia capire che prenderebbe lui.',
    },
  },
  donWyman90: {
    character: 'wyman-manderly',
    type: { en: 'Cousin', it: 'Cugino' },
    summary: {
      en: 'Her cousin, who offers himself or his son as her husband. She turns him down.',
      it: 'Suo cugino, che si offre come marito, lui o suo figlio. Lei lo rifiuta.',
    },
  },
  donWyman102: {
    character: 'wyman-manderly',
    type: { en: 'Cousin', it: 'Cugino' },
    summary: {
      en: 'Her cousin, who took her castle to keep it safe after she was forced to marry Roose Bolton’s bastard.',
      it: 'Suo cugino, che ha preso il suo castello per proteggerlo dopo che è stata costretta a sposare il bastardo di Roose Bolton.',
    },
  },
  donRodrik102: {
    character: 'rodrik-cassel',
    type: { en: 'Castellan', it: 'Castellano' },
    summary: {
      en: 'The castellan who rode east to put down the uprising and see justice done after the forced marriage.',
      it: 'Il castellano che è andato a est a sedare la rivolta e a fare giustizia dopo il matrimonio forzato.',
    },
  },
  donWymanPast: {
    character: 'wyman-manderly',
    type: { en: 'Cousin', it: 'Cugino' },
    summary: {
      en: 'Her cousin, who held her castle to keep it safe. His men and the Boltons fight over the Hornwood after her death.',
      it: 'Suo cugino, che teneva il suo castello per proteggerlo. Dopo la sua morte i suoi uomini e quelli dei Bolton si battono per le terre degli Hornwood.',
    },
  },
  donRodrikPast: {
    character: 'rodrik-cassel',
    type: { en: 'Castellan', it: 'Castellano' },
    summary: {
      en: 'The castellan who came back from the east with a prisoner held for her murder.',
      it: 'Il castellano tornato da est con un prigioniero accusato di averla uccisa.',
    },
  },
} satisfies Record<string, Relationship>

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
  'balon-greyjoy': [
    {
      episode: 12,
      chapter: 85,
      source: 'episode',
      value: [winterfell.balTheonShow, winterfell.balAshaShow],
    },
    {
      episode: 13,
      chapter: 98,
      source: 'episode',
      value: [winterfell.balTheonWar, winterfell.balAshaWar],
    },
    {
      episode: 12,
      chapter: 85,
      source: 'chapter',
      value: [winterfell.balTheonBook, winterfell.balAeronBook],
    },
    {
      episode: 13,
      chapter: 98,
      source: 'chapter',
      value: [
        winterfell.balTheonPlan,
        winterfell.balAshaBook,
        winterfell.balVictarion,
        winterfell.balAeronPlan,
      ],
    },
  ],
  'asha-greyjoy': [
    {
      episode: 12,
      chapter: 98,
      source: 'episode',
      value: [winterfell.ashBalonShow, winterfell.ashTheonShow],
    },
    {
      episode: 18,
      chapter: 130,
      source: 'episode',
      value: [winterfell.ashTheonWinterfellShow],
    },
    {
      episode: 12,
      chapter: 98,
      source: 'chapter',
      value: [
        winterfell.ashTheonBook,
        winterfell.ashBalonBook,
        winterfell.ashVictarion,
        winterfell.ashAeron,
      ],
    },
    {
      episode: 18,
      chapter: 130,
      source: 'chapter',
      value: [winterfell.ashTheonWinterfellBook, winterfell.ashDagmerBook],
    },
  ],
  'aeron-greyjoy': [
    {
      episode: 55,
      chapter: 85,
      source: 'chapter',
      value: [winterfell.aerTheon85, winterfell.aerBalon85],
    },
    {
      episode: 55,
      chapter: 98,
      source: 'chapter',
      value: [
        winterfell.aerBalon98,
        winterfell.aerVictarion,
        winterfell.aerTheon98,
        winterfell.aerAsha,
      ],
    },
    {
      episode: 55,
      chapter: 111,
      source: 'chapter',
      value: [winterfell.aerTheon111, winterfell.aerBalon98],
    },
  ],
  'victarion-greyjoy': [
    {
      episode: 13,
      chapter: 98,
      source: 'chapter',
      value: [
        winterfell.vicBalon,
        winterfell.vicAeron,
        winterfell.vicTheon,
        winterfell.vicAsha,
      ],
    },
  ],
  'dagmer': [
    {
      episode: 15,
      chapter: 111,
      source: 'episode',
      value: [winterfell.dagTheonShow15],
    },
    {
      episode: 16,
      chapter: 120,
      source: 'episode',
      value: [winterfell.dagTheonShow16, winterfell.dagRodrikShow],
    },
    {
      episode: 20,
      chapter: 143,
      source: 'episode',
      value: [winterfell.dagTheonShow20, winterfell.dagLuwinShow],
    },
    {
      episode: 15,
      chapter: 111,
      source: 'chapter',
      value: [
        winterfell.dagTheonBook,
        winterfell.dagBalonBook,
        winterfell.dagAeronBook,
      ],
    },
    {
      episode: 18,
      chapter: 130,
      source: 'chapter',
      value: [
        winterfell.dagTheonBook130,
        winterfell.dagAshaBook130,
        winterfell.dagRodrikBook130,
      ],
    },
  ],
  'black-lorren': [
    {
      episode: 17,
      chapter: 124,
      source: 'chapter',
      value: [winterfell.lorTheon124],
    },
    {
      episode: 17,
      chapter: 140,
      source: 'chapter',
      value: [
        winterfell.lorTheon140,
        winterfell.lorWex140,
        winterfell.lorRodrik140,
      ],
    },
    {
      episode: 17,
      chapter: 143,
      source: 'chapter',
      value: [winterfell.lorTheon143],
    },
  ],
  'wex-pyke': [
    {
      episode: 13,
      chapter: 98,
      source: 'chapter',
      value: [winterfell.wexTheon98],
    },
    {
      episode: 13,
      chapter: 140,
      source: 'chapter',
      value: [winterfell.wexTheon140, winterfell.wexLorren140],
    },
  ],
  'farlen': [
    {
      episode: 16,
      chapter: 124,
      source: 'chapter',
      value: [winterfell.farTheon124, winterfell.farBran],
    },
    {
      episode: 16,
      chapter: 130,
      source: 'chapter',
      value: [winterfell.farTheon130, winterfell.farBran],
    },
  ],
  'meera-reed': [
    {
      episode: 22,
      chapter: 95,
      source: 'chapter',
      value: [winterfell.meeJojen95, winterfell.meeBran95],
    },
    {
      episode: 22,
      chapter: 124,
      source: 'chapter',
      value: [
        winterfell.meeBran124,
        winterfell.meeJojen124,
        winterfell.meeOsha124,
      ],
    },
    {
      episode: 22,
      chapter: 143,
      source: 'chapter',
      value: [
        winterfell.meeBran143,
        winterfell.meeJojen143,
        winterfell.meeHodor143,
      ],
    },
  ],
  'jojen-reed': [
    {
      episode: 22,
      chapter: 95,
      source: 'chapter',
      value: [
        winterfell.jojMeera95,
        winterfell.jojBran95,
        winterfell.jojSummer95,
      ],
    },
    {
      episode: 22,
      chapter: 102,
      source: 'chapter',
      value: [
        winterfell.jojBran102,
        winterfell.jojMeera102,
        winterfell.jojSummer102,
      ],
    },
    {
      episode: 22,
      chapter: 143,
      source: 'chapter',
      value: [
        winterfell.jojBran143,
        winterfell.jojMeera143,
        winterfell.jojHodor143,
      ],
    },
  ],
  'ramsay-snow': [
    {
      episode: 32,
      chapter: 140,
      source: 'chapter',
      value: [winterfell.ramTheon, winterfell.ramRoose, winterfell.ramRodrik],
    },
  ],
  'big-walder-frey': [
    {
      episode: 13,
      chapter: 90,
      source: 'chapter',
      value: [
        winterfell.bigLittle,
        winterfell.bigBran,
        winterfell.bigLuwin,
        winterfell.bigRickon,
        winterfell.bigWalder,
      ],
    },
  ],
  'little-walder-frey': [
    {
      episode: 13,
      chapter: 90,
      source: 'chapter',
      value: [
        winterfell.litBig,
        winterfell.litBran,
        winterfell.litHodor,
        winterfell.litShaggydog,
        winterfell.litLuwin,
      ],
    },
  ],
  'wyman-manderly': [
    {
      episode: 60,
      chapter: 90,
      source: 'chapter',
      value: [
        winterfell.wymBran,
        winterfell.wymRodrik,
        winterfell.wymDonella,
        winterfell.wymWendel,
      ],
    },
    {
      episode: 60,
      chapter: 109,
      source: 'chapter',
      value: [winterfell.wymDonellaDead, winterfell.wymRodrik109],
    },
  ],
  'donella-hornwood': [
    {
      episode: 13,
      chapter: 90,
      source: 'chapter',
      value: [
        winterfell.donBran90,
        winterfell.donRodrik90,
        winterfell.donWyman90,
      ],
    },
    {
      episode: 14,
      chapter: 102,
      source: 'chapter',
      value: [winterfell.donWyman102, winterfell.donRodrik102],
    },
    {
      episode: 15,
      chapter: 109,
      source: 'chapter',
      value: [winterfell.donWymanPast, winterfell.donRodrikPast],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
