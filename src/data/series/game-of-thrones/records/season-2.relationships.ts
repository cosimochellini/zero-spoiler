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
 * Robb's war, the Riverlands and Harrenhal (#1481): the new characters' own
 * cards. Show and book cards for one person are separate where the two media
 * tell it differently: the show gives Amory's death to a dart and the Tickler's
 * to a broken neck, and gives Alton's part to Cleos Frey in the books.
 */
const riverlands = {
  // Alton Lannister (show only)
  altRobb: {
    character: 'robb-stark',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The king in the North, who holds him prisoner and sends him to King’s Landing with his peace terms.',
      it: 'Il Re del Nord, che lo tiene prigioniero e lo manda ad Approdo del Re con le sue condizioni di pace.',
    },
  },
  altJaime: {
    character: 'jaime-lannister',
    type: { en: 'Cousin', it: 'Cugino' },
    summary: {
      en: 'His cousin, taken prisoner by the northern army with him.',
      it: 'Suo cugino, fatto prigioniero con lui dall’esercito del Nord.',
    },
  },
  altJaimeKilled: {
    character: 'jaime-lannister',
    type: { en: 'Cellmate', it: 'Compagno di cella' },
    summary: {
      en: 'His cousin, shut in the same cell. Jaime kills him to draw the guard in and break out.',
      it: 'Suo cugino, chiuso nella stessa cella. Jaime lo uccide per attirare la guardia e fuggire.',
    },
  },
  altRobbReply: {
    character: 'robb-stark',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The king who has him locked up again when he comes back with the queen’s answer.',
      it: 'Il re che lo fa rinchiudere di nuovo quando torna con la risposta della regina.',
    },
  },
  altCersei: {
    character: 'cersei-lannister',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen who rejects Robb’s terms and sends him back with her answer.',
      it: 'La regina che respinge le condizioni di Robb e lo rimanda indietro con la sua risposta.',
    },
  },

  // Cleos Frey (books only)
  cleRobb: {
    character: 'robb-stark',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The young king who took him prisoner in the Whispering Wood. He sends him to King’s Landing with his terms, on his word as a knight to come back.',
      it: 'Il giovane re che lo ha fatto prigioniero nel Bosco dei Sussurri. Lo manda ad Approdo del Re con le sue condizioni, sulla parola di cavaliere di tornare.',
    },
  },
  cleGreyWind: {
    character: 'grey-wind',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'Robb’s direwolf, which sniffs at him in the hall and sends him scrambling to his feet.',
      it: 'Il metalupo di Robb, che lo annusa nella sala e lo fa balzare in piedi.',
    },
  },
  cleGreatjon: {
    character: 'greatjon-umber',
    type: { en: 'Northern lord', it: 'Lord del Nord' },
    summary: {
      en: 'The lord who corrects him when he calls Robb “my lord” and not “Your Grace”.',
      it: 'Il lord che lo corregge quando chiama Robb “mio signore” invece di “Vostra Grazia”.',
    },
  },
  cleTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Acting Hand', it: 'Primo Cavaliere reggente' },
    summary: {
      en: 'The Hand who answers Robb’s terms with his own, and sends him back with an escort of Lannister guards.',
      it: 'Il Primo Cavaliere che risponde alle condizioni di Robb con le sue, e lo rimanda indietro con una scorta di guardie Lannister.',
    },
  },
  clePycelle: {
    character: 'pycelle',
    type: { en: 'Grand maester', it: 'Gran maestro' },
    summary: {
      en: 'The grand maester who tells the court that Robb’s terms cannot be accepted.',
      it: 'Il gran maestro che annuncia alla corte che le condizioni di Robb non si possono accettare.',
    },
  },
  cleRobbAnswer: {
    character: 'robb-stark',
    type: { en: 'King who sent him', it: 'Re che lo ha mandato' },
    summary: {
      en: 'The king whose terms he brought, and to whom he must now carry this answer.',
      it: 'Il re di cui ha portato le condizioni, e a cui ora deve riportare questa risposta.',
    },
  },

  // Talisa Maegyr (show only)
  talRobb: {
    character: 'robb-stark',
    type: { en: 'King she tends for', it: 'Re per cui cura i feriti' },
    summary: {
      en: 'The king in the North. He helps her hold a wounded soldier down, and she tells him what she thinks of his war.',
      it: 'Il Re del Nord. La aiuta a tenere fermo un soldato ferito, e lei gli dice che cosa pensa della sua guerra.',
    },
  },
  talCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Robb’s mother', it: 'Madre di Robb' },
    summary: {
      en: 'Robb’s mother, to whom he introduces her. Asked about her family, she says its name is Maegyr.',
      it: 'La madre di Robb, a cui lui la presenta. Quando le chiede della sua famiglia, Talisa risponde che il suo nome è Maegyr.',
    },
  },
  talRobbWed: {
    character: 'robb-stark',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'The king in the North. They marry in secret before a septon.',
      it: 'Il Re del Nord. Si sposano in segreto davanti a un septon.',
    },
  },

  // Amory Lorch
  lorTywin: {
    character: 'tywin-lannister',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord he serves at Harrenhal, who scolds him for sending a letter to the enemy because he cannot read it properly.',
      it: 'Il lord che serve a Harrenhal, che lo rimprovera per aver mandato una lettera al nemico perché non la sa leggere bene.',
    },
  },
  lorArya: {
    character: 'arya-stark',
    type: { en: 'Suspect', it: 'Sospettata' },
    summary: {
      en: 'Tywin’s cupbearer, whom he catches with a letter taken from the table. He goes to tell Tywin and never gets there.',
      it: 'La coppiera di Tywin, che sorprende con una lettera presa dal tavolo. Va a dirlo a Tywin e non arriva.',
    },
  },
  lorJaqen: {
    character: 'jaqen-hghar',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'A man-at-arms who strikes him with a poisoned dart seconds before he reaches Tywin, at Arya’s asking.',
      it: 'Un uomo d’arme che lo colpisce con un dardo avvelenato pochi istanti prima che raggiunga Tywin, su richiesta di Arya.',
    },
  },
  lorYoren: {
    character: 'yoren',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The Night’s Watch recruiter who will not open the holdfast to him. He orders his men to storm the walls.',
      it: 'Il reclutatore dei Guardiani della notte che non gli apre la fortezza. Ordina ai suoi uomini di assalire le mura.',
    },
  },
  lorTywinBook: {
    character: 'tywin-lannister',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord whose bannerman he names himself when he rides up to the holdfast, in the name of King Joffrey.',
      it: 'Il lord di cui si dichiara vassallo quando arriva alla fortezza, in nome di re Joffrey.',
    },
  },
  lorTywinCastellan: {
    character: 'tywin-lannister',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord who leaves him castellan of Harrenhal when the host marches out.',
      it: 'Il lord che lo lascia castellano di Harrenhal quando l’esercito parte.',
    },
  },
  lorJaqenHarrenhal: {
    character: 'jaqen-hghar',
    type: { en: 'One of his men', it: 'Uno dei suoi uomini' },
    summary: {
      en: 'The Lorathi prisoner who rides in with his column, and stays at Harrenhal among his men.',
      it: 'Il prigioniero di Lorath che arriva con la sua colonna e resta a Harrenhal tra i suoi uomini.',
    },
  },
  lorRorgeHarrenhal: {
    character: 'rorge',
    type: { en: 'One of his men', it: 'Uno dei suoi uomini' },
    summary: {
      en: 'The noseless prisoner who rides in with his column, one of his men.',
      it: 'Il prigioniero senza naso che arriva con la sua colonna, uno dei suoi uomini.',
    },
  },
  lorBiterHarrenhal: {
    character: 'biter',
    type: { en: 'One of his men', it: 'Uno dei suoi uomini' },
    summary: {
      en: 'The mute prisoner with filed teeth who rides in with his column, one of his men.',
      it: 'Il prigioniero muto dai denti limati che arriva con la sua colonna, uno dei suoi uomini.',
    },
  },
  lorVargoCastellan: {
    character: 'vargo-hoat',
    type: { en: 'Sellsword captain', it: 'Capitano mercenario' },
    summary: {
      en: 'The leader of the Brave Companions, who stay at Harrenhal to forage when the host marches out.',
      it: 'Il capo dei Bravi Camerati, che restano a Harrenhal a fare provviste quando l’esercito parte.',
    },
  },
  lorVargoBear: {
    character: 'vargo-hoat',
    type: { en: 'Betrayer', it: 'Traditore' },
    summary: {
      en: 'The sellsword captain whose Brave Companions turn on the westermen. They parade him naked and feed him to a caged bear.',
      it: 'Il capitano mercenario i cui Bravi Camerati si rivoltano contro gli uomini dell’ovest. Lo fanno sfilare nudo e lo danno in pasto a un orso in gabbia.',
    },
  },
  lorRobett: {
    character: 'robett-glover',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The northern lord the Brave Companions bring in as a captive. He has him and his men locked in a cell beneath the Widow’s Tower.',
      it: 'Il lord del Nord che i Bravi Camerati portano come prigioniero. Fa rinchiudere lui e i suoi uomini in una cella sotto una delle torri.',
    },
  },
  lorJaqenFree: {
    character: 'jaqen-hghar',
    type: { en: 'Turncoat', it: 'Voltagabbana' },
    summary: {
      en: 'One of his men, who helps free the northmen the night Harrenhal falls.',
      it: 'Uno dei suoi uomini, che aiuta a liberare i nordici la notte in cui Harrenhal cade.',
    },
  },
  lorRorgeFree: {
    character: 'rorge',
    type: { en: 'Turncoat', it: 'Voltagabbana' },
    summary: {
      en: 'One of his men, who unlocks the cells for the northmen the night Harrenhal falls.',
      it: 'Uno dei suoi uomini, che apre le celle ai nordici la notte in cui Harrenhal cade.',
    },
  },

  // Polliver
  polArya: {
    character: 'arya-stark',
    type: { en: 'Prisoner', it: 'Prigioniera' },
    summary: {
      en: 'A captive he knocks down and robs of her sword, Needle. At Harrenhal he catches her looking at it and orders “the boy” to kneel.',
      it: 'Una prigioniera che butta a terra e a cui ruba la spada, Ago. A Harrenhal la sorprende a fissarla e ordina al “ragazzo” di inginocchiarsi.',
    },
  },
  polGregor: {
    character: 'gregor-clegane',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The knight who runs the torture of the prisoners at Harrenhal. Polliver stands guard over the captives for him.',
      it: 'Il cavaliere che a Harrenhal dirige la tortura dei prigionieri. Polliver fa la guardia ai prigionieri per lui.',
    },
  },
  polTywin: {
    character: 'tywin-lannister',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord who walks in on the torture, and who calls him an idiot when he sees that “the boy” is a girl.',
      it: 'Il lord che arriva durante la tortura, e che gli dà dell’idiota quando vede che “il ragazzo” è una ragazza.',
    },
  },
  polGendry: {
    character: 'gendry',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'A captive chosen for torture. Polliver stands guard over him until Tywin stops it.',
      it: 'Un prigioniero scelto per la tortura. Polliver lo sorveglia finché Tywin non la ferma.',
    },
  },
  polAryaBook: {
    character: 'arya-stark',
    type: { en: 'Prisoner', it: 'Prigioniera' },
    summary: {
      en: 'A captive on the march to Harrenhal. He wears her sword at his hip, and she hates him for taking it.',
      it: 'Una prigioniera sulla marcia verso Harrenhal. Porta la sua spada al fianco, e lei lo odia per averla presa.',
    },
  },
  polGregorBook: {
    character: 'gregor-clegane',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The Mountain, whose man-at-arms he is. He leads the prisoners to Harrenhal to serve Lord Tywin.',
      it: 'La Montagna, di cui è uomo d’arme. Porta i prigionieri a Harrenhal a servire lord Tywin.',
    },
  },
  polChiswyck: {
    character: 'chiswyck',
    type: { en: 'Fellow man-at-arms', it: 'Altro uomo d’arme' },
    summary: {
      en: 'Another of the Mountain’s men on the march.',
      it: 'Un altro degli uomini della Montagna sulla marcia.',
    },
  },
  polTickler: {
    character: 'tickler',
    type: { en: 'Fellow man-at-arms', it: 'Altro uomo d’arme' },
    summary: {
      en: 'Another of the Mountain’s men, who questions the prisoners on the march.',
      it: 'Un altro degli uomini della Montagna, che interroga i prigionieri sulla marcia.',
    },
  },

  // Tickler
  tikGregor: {
    character: 'gregor-clegane',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The knight who picks a prisoner for him each day to question to death.',
      it: 'Il cavaliere che ogni giorno sceglie per lui un prigioniero da interrogare fino alla morte.',
    },
  },
  tikGendry: {
    character: 'gendry',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'A prisoner chosen for questioning, saved when Tywin stops the killing.',
      it: 'Un prigioniero scelto per l’interrogatorio, salvato quando Tywin ferma le uccisioni.',
    },
  },
  tikArya: {
    character: 'arya-stark',
    type: { en: 'Girl who names him', it: 'Ragazza che fa il suo nome' },
    summary: {
      en: 'A young prisoner who gives his name to Jaqen first, as the death she is owed.',
      it: 'Una giovane prigioniera che per prima cosa dice il suo nome a Jaqen, come la morte che le è dovuta.',
    },
  },
  tikJaqen: {
    character: 'jaqen-hghar',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'A man-at-arms who breaks his neck in the courtyard, at Arya’s asking.',
      it: 'Un uomo d’arme che gli spezza il collo nel cortile, su richiesta di Arya.',
    },
  },
  tikGregorBook: {
    character: 'gregor-clegane',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The Mountain, who sits by and listens to the questioning until the prisoners die.',
      it: 'La Montagna, che sta a guardare e ad ascoltare l’interrogatorio finché i prigionieri muoiono.',
    },
  },
  tikChiswyck: {
    character: 'chiswyck',
    type: { en: 'Helper', it: 'Aiutante' },
    summary: {
      en: 'An old man-at-arms who sometimes helps him with the questioning.',
      it: 'Un vecchio uomo d’arme che a volte lo aiuta negli interrogatori.',
    },
  },
  tikAryaBook: {
    character: 'arya-stark',
    type: { en: 'Prisoner', it: 'Prigioniera' },
    summary: {
      en: 'A captive on the march. He frightens her too much to hate, but she whispers his name at night with the rest.',
      it: 'Una prigioniera sulla marcia. Lui la spaventa troppo per odiarlo, ma la notte sussurra il suo nome con gli altri.',
    },
  },
  tikPolliver: {
    character: 'polliver',
    type: { en: 'Fellow man-at-arms', it: 'Altro uomo d’arme' },
    summary: {
      en: 'Another of the Mountain’s men, who wears the girl’s sword.',
      it: 'Un altro degli uomini della Montagna, che porta la spada della ragazza.',
    },
  },

  // Chiswyck (books only)
  chiGregor: {
    character: 'gregor-clegane',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The Mountain, whose man-at-arms he is.',
      it: 'La Montagna, di cui è uomo d’arme.',
    },
  },
  chiTickler: {
    character: 'tickler',
    type: { en: 'Fellow man-at-arms', it: 'Altro uomo d’arme' },
    summary: {
      en: 'The ordinary-looking man who questions the prisoners, with Chiswyck to help.',
      it: 'L’uomo dall’aspetto comune che interroga i prigionieri, con Chiswyck ad aiutarlo.',
    },
  },
  chiArya: {
    character: 'arya-stark',
    type: { en: 'Prisoner', it: 'Prigioniera' },
    summary: {
      en: 'A captive he smashed in the head when they caught her. She hates him for thinking he is funny.',
      it: 'Una prigioniera a cui ha colpito la testa quando l’hanno presa. Lei lo odia perché si crede divertente.',
    },
  },
  chiHotPie: {
    character: 'hot-pie',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'A boy who does not want to go into Harrenhal. He tells him to join the ghosts or become one.',
      it: 'Un ragazzo che non vuole entrare a Harrenhal. Gli dice di scegliere tra unirsi ai fantasmi e diventarne uno.',
    },
  },
  chiAryaNamed: {
    character: 'arya-stark',
    type: { en: 'Girl who names him', it: 'Ragazza che fa il suo nome' },
    summary: {
      en: 'A servant girl who whispers his name to Jaqen. Within days he is dead, fallen from the wallwalk.',
      it: 'Una serva che sussurra il suo nome a Jaqen. Pochi giorni dopo è morto, caduto dal cammino di ronda.',
    },
  },
  chiJaqen: {
    character: 'jaqen-hghar',
    type: { en: 'Man she asks', it: 'Uomo a cui lei si rivolge' },
    summary: {
      en: 'The man in the Barracks Hall to whom Arya whispers his name. Within days he falls from the wallwalk.',
      it: 'L’uomo nella sala delle caserme a cui Arya sussurra il suo nome. Pochi giorni dopo cade dal cammino di ronda.',
    },
  },

  // Weese (books only)
  weeArya: {
    character: 'arya-stark',
    type: { en: 'Servant', it: 'Serva' },
    summary: {
      en: 'A girl in his charge whom he sends to carry messages and food. He beats her at the slightest provocation.',
      it: 'Una ragazza affidata a lui, che manda a portare messaggi e cibo. La picchia alla minima provocazione.',
    },
  },
  weeAryaBeaten: {
    character: 'arya-stark',
    type: { en: 'Servant', it: 'Serva' },
    summary: {
      en: 'The girl in his charge, who runs his errands. He slaps her for being slow and threatens to hand her over to Vargo Hoat.',
      it: 'La ragazza affidata a lui, che fa le sue commissioni. La schiaffeggia se è lenta e minaccia di consegnarla a Vargo Hoat.',
    },
  },
  weeJaqen: {
    character: 'jaqen-hghar',
    type: { en: 'Man who kills him', it: 'Uomo che lo uccide' },
    summary: {
      en: 'The man Arya names against him. He is found dead with his dog on his chest.',
      it: 'L’uomo a cui Arya fa il suo nome. Lo trovano morto con il suo cane sul petto.',
    },
  },
  weeVargo: {
    character: 'vargo-hoat',
    type: { en: 'Threat', it: 'Minaccia' },
    summary: {
      en: 'The sellsword captain he says he will give Arya to, if she runs.',
      it: 'Il capitano mercenario a cui dice che consegnerà Arya, se scappa.',
    },
  },

  // Vargo Hoat (books only)
  vagTywin: {
    character: 'tywin-lannister',
    type: { en: 'Paymaster', it: 'Datore di lavoro' },
    summary: {
      en: 'The lord in whose pay the Brave Companions ride. He hangs two of them after their first night’s brawl at Harrenhal.',
      it: 'Il lord al cui soldo cavalcano i Bravi Camerati. Dopo la rissa della loro prima notte a Harrenhal ne fa impiccare due.',
    },
  },
  vagRoose: {
    character: 'roose-bolton',
    type: { en: 'Paymaster', it: 'Datore di lavoro' },
    summary: {
      en: 'The northern lord he turns Harrenhal over to. Roose had bought his services all along.',
      it: 'Il lord del Nord a cui consegna Harrenhal. Roose aveva comprato i suoi servigi fin dall’inizio.',
    },
  },
  vagAmory: {
    character: 'amory-lorch',
    type: { en: 'Victim', it: 'Vittima' },
    summary: {
      en: 'The Lannister castellan of Harrenhal, whom his men parade naked and feed to a caged bear.',
      it: 'Il castellano Lannister di Harrenhal, che i suoi uomini fanno sfilare nudo e danno in pasto a un orso in gabbia.',
    },
  },
  vagRobett: {
    character: 'robett-glover',
    type: { en: 'Ruse prisoner', it: 'Falso prigioniero' },
    summary: {
      en: 'The northern lord he brings into Harrenhal as a captive with a hundred men. The captives were a ruse to take the castle.',
      it: 'Il lord del Nord che porta a Harrenhal come prigioniero con un centinaio di uomini. I prigionieri erano uno stratagemma per prendere il castello.',
    },
  },
  vagRooseCastle: {
    character: 'roose-bolton',
    type: { en: 'Paymaster', it: 'Datore di lavoro' },
    summary: {
      en: 'The northern lord who means to give him Harrenhal when he goes back north.',
      it: 'Il lord del Nord che intende dargli Harrenhal quando tornerà a nord.',
    },
  },
  vagArya: {
    character: 'arya-stark',
    type: { en: 'Servant to be', it: 'Futura serva' },
    summary: {
      en: 'A cupbearer whom Roose says will stay at Harrenhal to serve him.',
      it: 'Una coppiera che, dice Roose, resterà a Harrenhal a servirlo.',
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
  // Robb's war, the Riverlands and Harrenhal (#1481). Show only: Robb sends
  // him off in episode 11, and he dies in his cell in episode 17.
  'alton-lannister': [
    {
      episode: 11,
      chapter: 81,
      source: 'episode',
      value: [riverlands.altRobb, riverlands.altJaime],
    },
    {
      episode: 17,
      chapter: 112,
      source: 'episode',
      value: [
        riverlands.altJaimeKilled,
        riverlands.altRobbReply,
        riverlands.altCersei,
      ],
    },
  ],
  // Books only: the envoy of Catelyn I (81) and of Tyrion VI (99).
  'cleos-frey': [
    {
      episode: 11,
      chapter: 81,
      source: 'chapter',
      value: [
        riverlands.cleRobb,
        riverlands.cleGreyWind,
        riverlands.cleGreatjon,
      ],
    },
    {
      episode: 11,
      chapter: 99,
      source: 'chapter',
      value: [
        riverlands.cleTyrion,
        riverlands.clePycelle,
        riverlands.cleRobbAnswer,
      ],
    },
  ],
  // Show only: the healer of Robb's camp, from episode 16 to the wedding.
  'talisa-maegyr': [
    {
      episode: 16,
      chapter: 100,
      source: 'episode',
      value: [riverlands.talRobb, riverlands.talCatelyn],
    },
    {
      episode: 20,
      chapter: 137,
      source: 'episode',
      value: [riverlands.talRobbWed],
    },
  ],
  // The show's Amory dies in episode 16, where his record opens; the
  // book's lives to Arya IX (121).
  'amory-lorch': [
    {
      episode: 16,
      chapter: 88,
      source: 'episode',
      value: [riverlands.lorTywin, riverlands.lorArya, riverlands.lorJaqen],
    },
    {
      episode: 16,
      chapter: 88,
      source: 'chapter',
      value: [riverlands.lorYoren, riverlands.lorTywinBook],
    },
    // Arya VIII: the host marches out and he is left castellan.
    {
      episode: 16,
      chapter: 112,
      source: 'chapter',
      value: [
        riverlands.lorTywinCastellan,
        riverlands.lorJaqenHarrenhal,
        riverlands.lorRorgeHarrenhal,
        riverlands.lorBiterHarrenhal,
        riverlands.lorVargoCastellan,
      ],
    },
    // Arya IX: the Brave Companions take Harrenhal.
    {
      episode: 16,
      chapter: 121,
      source: 'chapter',
      value: [
        riverlands.lorVargoBear,
        riverlands.lorRobett,
        riverlands.lorJaqenFree,
        riverlands.lorRorgeFree,
      ],
    },
  ],
  // Show and books agree on the sword; each has its own men around him.
  'polliver': [
    {
      episode: 14,
      chapter: 100,
      source: 'episode',
      value: [
        riverlands.polArya,
        riverlands.polGregor,
        riverlands.polTywin,
        riverlands.polGendry,
      ],
    },
    {
      episode: 14,
      chapter: 100,
      source: 'chapter',
      value: [
        riverlands.polAryaBook,
        riverlands.polGregorBook,
        riverlands.polChiswyck,
        riverlands.polTickler,
      ],
    },
  ],
  // The show's Tickler dies in episode 15, where his record opens.
  'tickler': [
    {
      episode: 15,
      chapter: 100,
      source: 'episode',
      value: [
        riverlands.tikGregor,
        riverlands.tikGendry,
        riverlands.tikArya,
        riverlands.tikJaqen,
      ],
    },
    {
      episode: 15,
      chapter: 100,
      source: 'chapter',
      value: [
        riverlands.tikGregorBook,
        riverlands.tikChiswyck,
        riverlands.tikAryaBook,
        riverlands.tikPolliver,
      ],
    },
  ],
  // Books only: Arya VI (100), and his fall in Arya VII (104).
  'chiswyck': [
    {
      episode: 14,
      chapter: 100,
      source: 'chapter',
      value: [
        riverlands.chiGregor,
        riverlands.chiTickler,
        riverlands.chiArya,
        riverlands.chiHotPie,
      ],
    },
    {
      episode: 14,
      chapter: 104,
      source: 'chapter',
      value: [
        riverlands.chiAryaNamed,
        riverlands.chiJaqen,
        riverlands.chiGregor,
      ],
    },
  ],
  // Books only: Arya VII (104), and his death in Arya VIII (112).
  'weese': [
    {
      episode: 14,
      chapter: 104,
      source: 'chapter',
      value: [riverlands.weeArya],
    },
    {
      episode: 14,
      chapter: 112,
      source: 'chapter',
      value: [
        riverlands.weeAryaBeaten,
        riverlands.weeJaqen,
        riverlands.weeVargo,
      ],
    },
  ],
  // Books only: Arya VII (104), Arya IX (121) and Arya X (138).
  'vargo-hoat': [
    {
      episode: 15,
      chapter: 104,
      source: 'chapter',
      value: [riverlands.vagTywin],
    },
    {
      episode: 15,
      chapter: 121,
      source: 'chapter',
      value: [riverlands.vagRoose, riverlands.vagAmory, riverlands.vagRobett],
    },
    {
      episode: 15,
      chapter: 138,
      source: 'chapter',
      value: [riverlands.vagRooseCastle, riverlands.vagArya],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
