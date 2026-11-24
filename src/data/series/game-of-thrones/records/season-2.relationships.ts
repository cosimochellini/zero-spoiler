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
 * Stage 2's Stannis, Renly and stormlands cards (#1480): the cast of the
 * Dragonstone camp, Renly's camp at Bitterbridge and Storm's End, from
 * "The North Remembers" to "Valar Morghulis" and from the prologue to Sansa
 * VIII. Cards of the show alone and the books alone sit under their own
 * comment; the rest read in both.
 */
const stormlands = {
  // Stannis, the show
  staMelisandreFire: {
    character: 'melisandre',
    type: { en: 'Advisor', it: 'Consigliera' },
    summary: {
      en: 'The red priestess he lets burn the statues of the Seven for her Lord of Light. She proclaims him the Lord’s champion as he draws a burning sword from the fire.',
      it: 'La sacerdotessa rossa a cui lascia bruciare le statue dei Sette in onore del suo Signore della Luce. Lei lo proclama campione del Signore mentre lui estrae una spada fiammeggiante dal fuoco.',
    },
  },
  staDavosAlliance: {
    character: 'davos-seaworth',
    type: { en: 'Loyal knight', it: 'Cavaliere fedele' },
    summary: {
      en: 'The knight who urges him to ally with his brother Renly. Stannis refuses, and refuses Robb Stark’s help as well.',
      it: 'Il cavaliere che lo esorta ad allearsi con il fratello Renly. Stannis rifiuta, e rifiuta anche l’alleanza con Robb Stark.',
    },
  },
  staRenlyClaim: {
    character: 'renly-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His younger brother, who claims the throne for himself. Stannis sends out a letter with his own claim and will not join him.',
      it: 'Il fratello minore, che reclama il trono per sé. Stannis manda una lettera con la sua rivendicazione e non vuole unirsi a lui.',
    },
  },
  staRenlyDeadShow: {
    character: 'renly-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His younger brother, killed in his tent by the shadow Melisandre bore. Alone, Stannis fights back tears.',
      it: 'Il fratello minore, ucciso nella sua tenda dall’ombra che Melisandre ha partorito. Rimasto solo, Stannis trattiene a stento le lacrime.',
    },
  },
  staMelisandreShadow: {
    character: 'melisandre',
    type: { en: 'Priestess', it: 'Sacerdotessa' },
    summary: {
      en: 'The red priestess whose shadow killed Renly. Davos tells him to leave her out of the attack on King’s Landing, and he agrees.',
      it: 'La sacerdotessa rossa la cui ombra ha ucciso Renly. Davos gli dice di lasciarla fuori dall’attacco ad Approdo del Re, e lui accetta.',
    },
  },
  staDavosFleet: {
    character: 'davos-seaworth',
    type: { en: 'Fleet commander', it: 'Comandante della flotta' },
    summary: {
      en: 'The knight who challenges him over Melisandre’s magic. Stannis puts him in command of his fleet.',
      it: 'Il cavaliere che lo mette in discussione sulla magia di Melisandre. Stannis gli affida il comando della flotta.',
    },
  },
  staMelisandreDefeat: {
    character: 'melisandre',
    type: { en: 'Priestess', it: 'Sacerdotessa' },
    summary: {
      en: 'The red priestess he blames for not foreseeing his defeat at the Blackwater. He begins to strangle her, then lets go and looks into her fire, and trusts her again.',
      it: 'La sacerdotessa rossa che accusa di non aver previsto la sconfitta alle Acque Nere. Comincia a strangolarla, poi la lascia e guarda nel suo fuoco, e torna a fidarsi di lei.',
    },
  },
  staDavosHand: {
    character: 'davos-seaworth',
    type: { en: 'Loyal knight', it: 'Cavaliere fedele' },
    summary: {
      en: 'The knight whose ship burned in the wildfire. Before the battle Stannis told him he admired him and offered him the post of Hand.',
      it: 'Il cavaliere la cui nave è bruciata nell’altofuoco. Prima della battaglia Stannis gli ha detto di ammirarlo e gli ha offerto il posto di Primo Cavaliere.',
    },
  },
  // Stannis, the books
  staMelisandreFeast: {
    character: 'melisandre',
    type: { en: 'Priestess', it: 'Sacerdotessa' },
    summary: {
      en: 'The red priestess his wife follows. At the feast he gives her the place of honor at his right hand.',
      it: 'La sacerdotessa rossa che la moglie segue. Al banchetto le dà il posto d’onore alla sua destra.',
    },
  },
  staSelyse: {
    character: 'selyse-baratheon',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His queen, who argues that he should not have to beg for help. He asks her whether she has an army to give him.',
      it: 'La sua regina, secondo cui non dovrebbe mendicare aiuto. Lui le chiede se ha un esercito da offrirgli.',
    },
  },
  staCressen: {
    character: 'cressen',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The old maester who raised him. Stannis hears his advice, takes his duties from him, and Cressen dies at the feast of the poison meant for Melisandre.',
      it: 'Il vecchio maestro che lo ha cresciuto. Stannis ascolta i suoi consigli, gli toglie i suoi compiti, e Cressen muore al banchetto per il veleno destinato a Melisandre.',
    },
  },
  staRenlyThief: {
    character: 'renly-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His younger brother, crowned with the stormlords and Highgarden behind him. Stannis calls him a thieving boy who has earned nothing.',
      it: 'Il fratello minore, incoronato con i lord delle Terre della Tempesta e Alto Giardino dalla sua parte. Stannis lo chiama un ragazzo ladro che non si è guadagnato nulla.',
    },
  },
  staDavosEnvoy: {
    character: 'davos-seaworth',
    type: { en: 'Envoy', it: 'Inviato' },
    summary: {
      en: 'The knight he sent to win the stormlords. Davos came back in the night with word that they have gone over to Renly.',
      it: 'Il cavaliere che ha mandato a conquistare i lord delle Terre della Tempesta. Davos è tornato nella notte con la notizia che sono passati con Renly.',
    },
  },
  staRenlyParley: {
    character: 'renly-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His younger brother, whom he meets outside Storm’s End. Renly mocks him, and Stannis gives him until dawn to yield or be destroyed.',
      it: 'Il fratello minore, che incontra davanti a Capo Tempesta. Renly lo deride, e Stannis gli dà tempo fino all’alba per cedere, altrimenti lo distruggerà.',
    },
  },
  staCatelynParley: {
    character: 'catelyn-stark',
    type: { en: 'Envoy', it: 'Inviata' },
    summary: {
      en: 'Eddard Stark’s widow, who comes to make peace between the brothers. He offers condolences and promises justice, and calls her son a traitor.',
      it: 'La vedova di Eddard Stark, venuta a far pace tra i fratelli. Le porge le condoglianze e le promette giustizia, e definisce traditore suo figlio.',
    },
  },
  staMelisandreStandard: {
    character: 'melisandre',
    type: { en: 'Standard-bearer', it: 'Alfiere' },
    summary: {
      en: 'The red priestess who carries his banner to the parley, and names its fiery heart as his sigil.',
      it: 'La sacerdotessa rossa che porta il suo stendardo al colloquio, e dice che il cuore fiammeggiante è il suo emblema.',
    },
  },
  staRenlyGrief: {
    character: 'renly-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His younger brother, now dead. Stannis tells Davos that he grieves for him, and that he did love him.',
      it: 'Il fratello minore, ormai morto. Stannis dice a Davos di soffrirne, e di avergli voluto bene.',
    },
  },
  staMelisandreNight: {
    character: 'melisandre',
    type: { en: 'Priestess', it: 'Sacerdotessa' },
    summary: {
      en: 'The red priestess who shares his pavilion and soothes his nightmares. He sends her beneath Storm’s End by night.',
      it: 'La sacerdotessa rossa che divide il suo padiglione e gli placa gli incubi. La manda di notte sotto Capo Tempesta.',
    },
  },
  staCortnay: {
    character: 'cortnay-penrose',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The castellan of Storm’s End, who will not give up the castle or Robert’s bastard son. Stannis refuses his challenge to single combat.',
      it: 'Il castellano di Capo Tempesta, che non vuole cedere il castello né il figlio bastardo di Robert. Stannis rifiuta la sua sfida a duello.',
    },
  },
  staDavosBeneath: {
    character: 'davos-seaworth',
    type: { en: 'Loyal knight', it: 'Cavaliere fedele' },
    summary: {
      en: 'The knight he trusts to row Melisandre under the walls of Storm’s End, as he once did during the siege.',
      it: 'Il cavaliere a cui affida il compito di portare in barca Melisandre sotto le mura di Capo Tempesta, come già fece durante l’assedio.',
    },
  },

  // Melisandre, the show
  melStannisFire: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king she proclaims the Lord of Light’s champion. She has the Seven burned, and he draws a burning sword from the fire.',
      it: 'Il re che proclama campione del Signore della Luce. Fa bruciare i Sette, e lui estrae una spada fiammeggiante dal fuoco.',
    },
  },
  melCressenPoison: {
    character: 'cressen',
    type: { en: 'Poisoner', it: 'Avvelenatore' },
    summary: {
      en: 'The maester who shares a cup of poisoned wine with her. She knows what he is doing, drinks anyway, and is unaffected. He dies.',
      it: 'Il maestro che divide con lei una coppa di vino avvelenato. Sa cosa sta facendo, beve lo stesso e non ne risente. Lui muore.',
    },
  },
  melStannisShadow: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who fathered the shadow she bore. He agrees to leave her out of the attack on King’s Landing.',
      it: 'Il re che ha generato l’ombra da lei partorita. Accetta di lasciarla fuori dall’attacco ad Approdo del Re.',
    },
  },
  melDavosCave: {
    character: 'davos-seaworth',
    type: { en: 'Oarsman', it: 'Rematore' },
    summary: {
      en: 'The knight who rows her to the caves. He watches in horror as she gives birth to the shadow, and then tells Stannis to leave her behind.',
      it: 'Il cavaliere che la porta in barca alle grotte. Assiste con orrore alla nascita dell’ombra, e poi dice a Stannis di lasciarla indietro.',
    },
  },
  melRenlyShadow: {
    character: 'renly-baratheon',
    type: { en: 'Victim', it: 'Vittima' },
    summary: {
      en: 'The king her shadow kills in his tent.',
      it: 'Il re che la sua ombra uccide nella tenda.',
    },
  },
  melStannisDefeat: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who blames her for his defeat and begins to strangle her. She tells him he will be king, and shows him visions in her fire.',
      it: 'Il re che la accusa della sua sconfitta e comincia a strangolarla. Lei gli dice che sarà re, e gli mostra delle visioni nel suo fuoco.',
    },
  },
  // Melisandre, the books
  melCressenWine: {
    character: 'cressen',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who proposes a toast to her god over a cup of wine. The wine kills him, and she is unaffected.',
      it: 'Il maestro che le propone di brindare al suo dio con una coppa di vino. Il vino lo uccide, mentre lei non ne risente.',
    },
  },
  melStannisFeast: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king at whose right hand she sits, in the place of honor. His queen says the flames have shown her Renly dead.',
      it: 'Il re alla cui destra siede, al posto d’onore. La regina dice che le fiamme le hanno mostrato Renly morto.',
    },
  },
  melSelyseConvert: {
    character: 'selyse-baratheon',
    type: { en: 'Convert', it: 'Convertita' },
    summary: {
      en: 'The queen she has converted to the worship of R’hllor. Selyse says the Lord of Light will give Stannis an army.',
      it: 'La regina che ha convertito al culto di R’hllor. Selyse dice che il Signore della Luce darà un esercito a Stannis.',
    },
  },
  melStannisAzor: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king she names Azor Ahai reborn, after he draws a burning sword from the fire. He means to find out how much power she has.',
      it: 'Il re che proclama Azor Ahai tornato, dopo che estrae una spada ardente dal fuoco. Lui vuole scoprire quanto potere abbia.',
    },
  },
  melSelyseChant: {
    character: 'selyse-baratheon',
    type: { en: 'Convert', it: 'Convertita' },
    summary: {
      en: 'The queen who answers her prayers as the statues burn.',
      it: 'La regina che risponde alle sue preghiere mentre le statue bruciano.',
    },
  },
  melStannisPavilion: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who sleeps only when she soothes him, and who lets her share his pavilion. He sends her beneath Storm’s End.',
      it: 'Il re che dorme solo quando lei lo calma, e che le fa dividere il padiglione. La manda sotto Capo Tempesta.',
    },
  },
  melDavosAccuser: {
    character: 'davos-seaworth',
    type: { en: 'Accuser', it: 'Accusatore' },
    summary: {
      en: 'The knight who rows her under Storm’s End. He calls her a liar and says she killed Cressen and Renly, then watches her give birth to a shadow.',
      it: 'Il cavaliere che la porta in barca sotto Capo Tempesta. La chiama bugiarda e dice che è stata lei a uccidere Cressen e Renly, poi la vede partorire un’ombra.',
    },
  },

  // Davos, the show
  davStannisAlliance: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king he serves. He urges him to ally with Renly, and Stannis refuses.',
      it: 'Il re che serve. Lo esorta ad allearsi con Renly, ma Stannis rifiuta.',
    },
  },
  davCressenPoison: {
    character: 'cressen',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The old maester who asks him to help turn Stannis from Melisandre. Davos sees him drop the poison in the cup and tries to stop him.',
      it: 'Il vecchio maestro che gli chiede aiuto per allontanare Stannis da Melisandre. Davos lo vede versare il veleno nella coppa e cerca di fermarlo.',
    },
  },
  davMelisandreFire: {
    character: 'melisandre',
    type: { en: 'Priestess', it: 'Sacerdotessa' },
    summary: {
      en: 'The red priestess who has Stannis’s ear. When Cressen asks him to act against her, Davos says it is not the time.',
      it: 'La sacerdotessa rossa che ha l’orecchio di Stannis. Quando Cressen gli chiede di agire contro di lei, Davos risponde che non è il momento.',
    },
  },
  davSalladhorRecruit: {
    character: 'salladhor-saan',
    type: { en: 'Pirate', it: 'Pirata' },
    summary: {
      en: 'The pirate from Lys he recruits for Stannis, with his thirty ships.',
      it: 'Il pirata di Lys che recluta per Stannis, con le sue trenta navi.',
    },
  },
  davMatthosRead: {
    character: 'matthos-seaworth',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, who urges him to learn to read so he can study the holy texts of the Lord of Light. Davos puts his faith in Stannis instead.',
      it: 'Suo figlio, che lo spinge a imparare a leggere per studiare i testi sacri del Signore della Luce. Davos preferisce avere fede in Stannis.',
    },
  },
  davMelisandreCave: {
    character: 'melisandre',
    type: { en: 'Priestess', it: 'Sacerdotessa' },
    summary: {
      en: 'The red priestess he rows to the caves, where he watches her give birth to a shadow. He tells Stannis to leave her out of the attack.',
      it: 'La sacerdotessa rossa che porta in barca alle grotte, dove la vede partorire un’ombra. Dice a Stannis di lasciarla fuori dall’attacco.',
    },
  },
  davStannisFleet: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king he challenges over Melisandre’s magic. Stannis gives him command of his fleet.',
      it: 'Il re che sfida sulla magia di Melisandre. Stannis gli affida il comando della flotta.',
    },
  },
  davMatthosDead: {
    character: 'matthos-seaworth',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, killed when the wildfire burned Stannis’s fleet.',
      it: 'Suo figlio, morto quando l’altofuoco ha incendiato la flotta di Stannis.',
    },
  },
  davStannisHand: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who offered him the Hand once he takes the throne. Davos goes overboard when the wildfire destroys his ship.',
      it: 'Il re che gli ha offerto il posto di Primo Cavaliere una volta preso il trono. Davos finisce in acqua quando l’altofuoco distrugge la sua nave.',
    },
  },
  // Davos, the books
  davStannisReport: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king he came back to in the night to report that the stormlords have gone over to Renly.',
      it: 'Il re da cui è tornato nella notte per riferire che i lord delle Terre della Tempesta sono passati con Renly.',
    },
  },
  davCressenSeat: {
    character: 'cressen',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The old maester Stannis casts aside. Davos alone offers him a seat at the feast, and tries to stop him when he poisons a cup.',
      it: 'Il vecchio maestro che Stannis mette da parte. Solo Davos gli offre un posto al banchetto, e cerca di fermarlo quando avvelena una coppa.',
    },
  },
  davMelisandreFlames: {
    character: 'melisandre',
    type: { en: 'Priestess', it: 'Sacerdotessa' },
    summary: {
      en: 'The red priestess who sits at Stannis’s right hand. Davos says she has seen victory in her flames, and that they are about fool’s business.',
      it: 'La sacerdotessa rossa seduta alla destra di Stannis. Davos dice che ha visto la vittoria nelle sue fiamme, e che stanno facendo una follia.',
    },
  },
  davStannisKnight: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who made him a knight. Davos tells him he does not know the new god, but knew the ones that were burned.',
      it: 'Il re che lo ha fatto cavaliere. Davos gli dice di non conoscere il nuovo dio, ma di conoscere quelli che sono stati bruciati.',
    },
  },
  davSalladhorInn: {
    character: 'salladhor-saan',
    type: { en: 'Old friend', it: 'Vecchio amico' },
    summary: {
      en: 'The pirate from Lys he finds at an inn, a partner from his smuggling days. He promises him gold from King’s Landing.',
      it: 'Il pirata di Lys che trova in una locanda, un socio dei tempi del contrabbando. Gli promette dell’oro di Approdo del Re.',
    },
  },
  davMelisandreBurning: {
    character: 'melisandre',
    type: { en: 'Priestess', it: 'Sacerdotessa' },
    summary: {
      en: 'The red priestess who burns the Seven. Davos watches, and tells Salladhor that his god is King Stannis.',
      it: 'La sacerdotessa rossa che brucia i Sette. Davos guarda, e dice a Salladhor che il suo dio è re Stannis.',
    },
  },
  davStannisRow: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who sends him to row Melisandre under Storm’s End. Davos advises him to strike at King’s Landing at once.',
      it: 'Il re che gli ordina di portare in barca Melisandre sotto Capo Tempesta. Davos gli consiglia di colpire subito Approdo del Re.',
    },
  },
  davMelisandreRow: {
    character: 'melisandre',
    type: { en: 'Priestess', it: 'Sacerdotessa' },
    summary: {
      en: 'The red priestess he rows into the cavern under Storm’s End. He calls her a liar and watches her give birth to a shadow.',
      it: 'La sacerdotessa rossa che porta in barca nella caverna sotto Capo Tempesta. La chiama bugiarda e la vede partorire un’ombra.',
    },
  },
  davCortnay: {
    character: 'cortnay-penrose',
    type: { en: 'Respected foe', it: 'Avversario rispettato' },
    summary: {
      en: 'The castellan who kept his faith, unlike the new lords in Stannis’s army. Davos says he respects him.',
      it: 'Il castellano che ha mantenuto la sua fede, a differenza dei nuovi lord dell’esercito di Stannis. Davos dice di rispettarlo.',
    },
  },
  davMatthosBetha: {
    character: 'matthos-seaworth',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, second on the Black Betha. The wildfire destroys the ship and kills him.',
      it: 'Suo figlio, secondo a bordo della Black Betha. L’altofuoco distrugge la nave e lo uccide.',
    },
  },
  davStannisShore: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king waiting with his host on the south shore. Davos is glad he sent Melisandre back to Dragonstone.',
      it: 'Il re che aspetta con il suo esercito sulla riva sud. Davos è contento che abbia rimandato Melisandre a Roccia del Drago.',
    },
  },

  // Cressen, the show
  creMelisandrePoison: {
    character: 'melisandre',
    type: { en: 'Rival', it: 'Rivale' },
    summary: {
      en: 'The red priestess he feared was leading Stannis into a war he could not win. He shared a cup of poisoned wine with her, and died of it while she was unaffected.',
      it: 'La sacerdotessa rossa che temeva stesse portando Stannis in una guerra che non poteva vincere. Ha diviso con lei una coppa di vino avvelenato, ed è morto mentre lei non ne ha risentito.',
    },
  },
  creStannisShow: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king he served, whom he feared Melisandre was leading into a war he could not win.',
      it: 'Il re che ha servito, e che temeva Melisandre stesse portando in una guerra che non poteva vincere.',
    },
  },
  creDavosHelp: {
    character: 'davos-seaworth',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'The knight he asked to help him step in. Davos said it was not the right time, then saw him poison the cup.',
      it: 'Il cavaliere a cui ha chiesto di aiutarlo a intervenire. Davos ha detto che non era il momento, poi lo ha visto avvelenare la coppa.',
    },
  },
  // Cressen, the books
  creStannisBook: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The lord he raised as a boy, now a king. Stannis refused every alliance he proposed, and gave his duties to another maester.',
      it: 'Il lord che ha cresciuto fin da ragazzo, ora re. Stannis ha rifiutato ogni alleanza da lui proposta e ha affidato i suoi compiti a un altro maestro.',
    },
  },
  creMelisandreBook: {
    character: 'melisandre',
    type: { en: 'Rival', it: 'Rivale' },
    summary: {
      en: 'The red priestess he means to silence. He poisoned a cup at the feast and drank it with her, and died while she was unaffected.',
      it: 'La sacerdotessa rossa che vuole mettere a tacere. Ha avvelenato una coppa al banchetto e l’ha bevuta con lei, ed è morto mentre lei non ne ha risentito.',
    },
  },
  creDavosBook: {
    character: 'davos-seaworth',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'The knight who alone offered him a seat at the feast. Cressen dropped the poison into Davos’s cup, and Davos tried to stop him.',
      it: 'L’unico cavaliere che gli ha offerto un posto al banchetto. Cressen ha lasciato cadere il veleno nella coppa di Davos, e Davos ha cercato di fermarlo.',
    },
  },
  creShireen: {
    character: 'shireen-baratheon',
    type: { en: 'Charge', it: 'Protetta' },
    summary: {
      en: 'The princess he comforted, and to whom he showed the white raven. He thought her the saddest child he had known.',
      it: 'La principessa che ha consolato, e a cui ha mostrato il corvo bianco. La considerava la bambina più triste che avesse mai conosciuto.',
    },
  },
  creSelyse: {
    character: 'selyse-baratheon',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen who argued with Stannis in front of him, and who followed the red priestess’s god.',
      it: 'La regina che ha discusso con Stannis davanti a lui, e che seguiva il dio della sacerdotessa rossa.',
    },
  },

  // Matthos, the show
  matStannisLetter: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king whose letter he reads aloud, claiming the throne.',
      it: 'Il re di cui legge ad alta voce la lettera con cui rivendica il trono.',
    },
  },
  matDavosLetter: {
    character: 'davos-seaworth',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, a knight in Stannis’s service, who hears him read the king’s letter.',
      it: 'Suo padre, un cavaliere al servizio di Stannis, che lo ascolta leggere la lettera del re.',
    },
  },
  matDavosRead: {
    character: 'davos-seaworth',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, whom he urges to learn to read so he can study the holy texts of the Lord of Light.',
      it: 'Suo padre, che spinge a imparare a leggere per studiare i testi sacri del Signore della Luce.',
    },
  },
  matSalladhor: {
    character: 'salladhor-saan',
    type: { en: 'Pirate', it: 'Pirata' },
    summary: {
      en: 'The pirate from Lys whom Davos recruits with his thirty ships. The two trade barbs about what he wants from the war.',
      it: 'Il pirata di Lys che Davos recluta con le sue trenta navi. I due si scambiano frecciate su ciò che lui vuole dalla guerra.',
    },
  },
  matMelisandre: {
    character: 'melisandre',
    type: { en: 'Priestess', it: 'Sacerdotessa' },
    summary: {
      en: 'The red priestess who whispers to him that death by fire is the purest death.',
      it: 'La sacerdotessa rossa che gli sussurra che la morte nel fuoco è la più pura.',
    },
  },
  matDavosDead: {
    character: 'davos-seaworth',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, whose ship the wildfire destroys. Matthos dies in the burning of the fleet.',
      it: 'Suo padre, la cui nave viene distrutta dall’altofuoco. Matthos muore nell’incendio della flotta.',
    },
  },
  // Matthos, the books
  matDavosBetha: {
    character: 'davos-seaworth',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who captains the Black Betha. Matthos is second on the ship when the wildfire destroys it and kills him.',
      it: 'Suo padre, capitano della Black Betha. Matthos è il secondo a bordo quando l’altofuoco distrugge la nave e lo uccide.',
    },
  },

  // Salladhor, the show
  salDavosFleet: {
    character: 'davos-seaworth',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'The knight who brings him and his thirty ships into Stannis’s service.',
      it: 'Il cavaliere che porta lui e le sue trenta navi al servizio di Stannis.',
    },
  },
  salStannisFleet: {
    character: 'stannis-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king he agrees to sail for, with all thirty of his ships.',
      it: 'Il re per cui accetta di salpare, con tutte e trenta le sue navi.',
    },
  },
  salMatthos: {
    character: 'matthos-seaworth',
    type: { en: 'Critic', it: 'Critico' },
    summary: {
      en: 'Davos’s son, who tells him the war is not about what he wants. They trade insults.',
      it: 'Il figlio di Davos, che gli dice che la guerra non riguarda ciò che vuole lui. Si scambiano insulti.',
    },
  },
  // Salladhor, the books
  salDavosBook: {
    character: 'davos-seaworth',
    type: { en: 'Old friend', it: 'Vecchio amico' },
    summary: {
      en: 'The smuggler turned knight who brought him into Stannis’s cause. He asks which god Davos serves, and says he will remember the answer.',
      it: 'Il contrabbandiere diventato cavaliere che lo ha portato dalla parte di Stannis. Gli chiede quale dio serva, e dice che ricorderà la risposta.',
    },
  },
  salStannisBook: {
    character: 'stannis-baratheon',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'The king who owes him gold for his fleet. He asks Davos to remind Stannis that thirty thousand more dragons are due.',
      it: 'Il re che gli deve dell’oro per la sua flotta. Chiede a Davos di ricordare a Stannis che sono dovuti altri trentamila draghi.',
    },
  },

  // Selyse, the books
  selStannis: {
    character: 'stannis-baratheon',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'The king her husband. She argues that he should not have to beg for help, and that the Lord of Light will give him an army.',
      it: 'Il re suo marito. Sostiene che non dovrebbe mendicare aiuto, e che il Signore della Luce gli darà un esercito.',
    },
  },
  selMelisandre: {
    character: 'melisandre',
    type: { en: 'Priestess', it: 'Sacerdotessa' },
    summary: {
      en: 'The red priestess who has converted her to the Lord of Light. Selyse says Melisandre has seen Renly dead in the flames.',
      it: 'La sacerdotessa rossa che l’ha convertita al Signore della Luce. Selyse dice che Melisandre ha visto Renly morto nelle fiamme.',
    },
  },
  selShireen: {
    character: 'shireen-baratheon',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Her daughter, who repeats that her mother says the white raven means it is not summer anymore.',
      it: 'Sua figlia, che ripete che la madre dice che il corvo bianco significa che l’estate è finita.',
    },
  },

  // Shireen, the books
  shiCressen: {
    character: 'cressen',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The old maester who shows her the white raven, and tells her the comet will be gone soon.',
      it: 'Il vecchio maestro che le mostra il corvo bianco, e le dice che la cometa sparirà presto.',
    },
  },
  shiSelyse: {
    character: 'selyse-baratheon',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Her mother, who says the white raven means it is not summer anymore.',
      it: 'Sua madre, che dice che il corvo bianco significa che l’estate è finita.',
    },
  },
  shiMelisandre: {
    character: 'melisandre',
    type: { en: 'Priestess', it: 'Sacerdotessa' },
    summary: {
      en: 'The red woman, who tells her the comet in the sky is dragon’s breath.',
      it: 'La donna rossa, che le dice che la cometa nel cielo è il fiato del drago.',
    },
  },
  shiStannis: {
    character: 'stannis-baratheon',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, now a king, which makes her a princess.',
      it: 'Suo padre, ora re, il che fa di lei una principessa.',
    },
  },

  // Brienne, the show
  briRenlyGuard: {
    character: 'renly-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who makes her one of his Kingsguard after she wins his tourney.',
      it: 'Il re che la nomina nella sua guardia reale dopo la vittoria al suo torneo.',
    },
  },
  briCatelynName: {
    character: 'catelyn-stark',
    type: { en: 'Envoy', it: 'Inviata' },
    summary: {
      en: 'Robb Stark’s envoy, whom she asks to call her just Brienne.',
      it: 'L’inviata di Robb Stark, a cui chiede di chiamarla solo Brienne.',
    },
  },
  briLorasMelee: {
    character: 'loras-tyrell',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'The knight she defeats in the melee, to win her place in the king’s guard.',
      it: 'Il cavaliere che sconfigge nella mischia, per conquistare il suo posto nella guardia del re.',
    },
  },
  briRenlyDeadShow: {
    character: 'renly-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king she guards. He is killed in his tent, and she is blamed for it.',
      it: 'Il re che protegge. Viene ucciso nella sua tenda, e la colpa ricade su di lei.',
    },
  },
  briCatelynFealty: {
    character: 'catelyn-stark',
    type: { en: 'Lady', it: 'Signora' },
    summary: {
      en: 'The lady who flees the camp with her after Renly’s death. Brienne swears her fealty.',
      it: 'La signora con cui fugge dall’accampamento dopo la morte di Renly. Brienne le giura fedeltà.',
    },
  },
  briJaime: {
    character: 'jaime-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The Kingslayer, whom Catelyn sends her to escort to King’s Landing in exchange for her daughters.',
      it: 'Lo Sterminatore di Re, che Catelyn le affida perché lo scorti ad Approdo del Re in cambio delle sue figlie.',
    },
  },
  // Brienne, the books
  briRenlyTourney: {
    character: 'renly-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who names her champion of his tourney. She asks to join his Rainbow Guard, and pledges her life to him.',
      it: 'Il re che la proclama campionessa del suo torneo. Lei chiede di entrare nella sua guardia arcobaleno, e gli giura la sua vita.',
    },
  },
  briCatelynKneel: {
    character: 'catelyn-stark',
    type: { en: 'Envoy', it: 'Inviata' },
    summary: {
      en: 'The envoy of the King in the North. Brienne tells her she should kneel and call Renly Your Grace.',
      it: 'L’inviata del Re del Nord. Brienne le dice che dovrebbe inginocchiarsi e chiamare Renly Vostra Grazia.',
    },
  },
  briLorasYield: {
    character: 'loras-tyrell',
    type: { en: 'Opponent', it: 'Avversario' },
    summary: {
      en: 'The knight she brings down and forces to yield, to win the tourney.',
      it: 'Il cavaliere che abbatte e costringe ad arrendersi, per vincere il torneo.',
    },
  },
  briRenlyDeadBook: {
    character: 'renly-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king she is arming when a shadow cuts his throat. His guards think she killed him.',
      it: 'Il re che sta armando quando un’ombra gli taglia la gola. Le sue guardie credono che sia stata lei.',
    },
  },
  briCatelynFlight: {
    character: 'catelyn-stark',
    type: { en: 'Lady', it: 'Signora' },
    summary: {
      en: 'The lady who flees the camp with her after the killing.',
      it: 'La signora con cui fugge dall’accampamento dopo l’omicidio.',
    },
  },
  briStannis: {
    character: 'stannis-baratheon',
    type: { en: 'Sworn enemy', it: 'Nemico giurato' },
    summary: {
      en: 'The king she swears to kill with Renly’s sword, though she saw nothing.',
      it: 'Il re che giura di uccidere con la spada di Renly, anche se non ha visto nulla.',
    },
  },
  briCatelynSworn: {
    character: 'catelyn-stark',
    type: { en: 'Liege lady', it: 'Signora' },
    summary: {
      en: 'The lady who takes her as her sworn sword, to keep her from doing anything foolish.',
      it: 'La signora che la prende come spada giurata, per impedirle di fare sciocchezze.',
    },
  },

  // Margaery, the show
  marRenlyBed: {
    character: 'renly-baratheon',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'The king she married. She tries to seduce him, and takes his refusal in stride, as long as there is an heir.',
      it: 'Il re che ha sposato. Cerca di sedurlo, e prende con calma il suo rifiuto, purché ci sia un erede.',
    },
  },
  marLorasFetch: {
    character: 'loras-tyrell',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who goes to fetch her for Renly. She suggests including him.',
      it: 'Suo fratello, che va a chiamarla per Renly. Lei propone di includerlo.',
    },
  },
  marCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Envoy', it: 'Inviata' },
    summary: {
      en: 'Robb Stark’s envoy, to whom Renly introduces her as his new wife.',
      it: 'L’inviata di Robb Stark, a cui Renly la presenta come sua nuova moglie.',
    },
  },
  marRenlyDeadShow: {
    character: 'renly-baratheon',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'The king she married, killed in his tent. Afterwards she says that if he was not a king she was not a queen, and that she wants to be the Queen.',
      it: 'Il re che ha sposato, ucciso nella sua tenda. Poi dice che se lui non era re lei non era regina, e che vuole essere la Regina.',
    },
  },
  marLorasHome: {
    character: 'loras-tyrell',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who rides with her and the Tyrell host for Highgarden after Renly’s death.',
      it: 'Suo fratello, che dopo la morte di Renly cavalca con lei e l’esercito dei Tyrell verso Alto Giardino.',
    },
  },
  marLorasAsks: {
    character: 'loras-tyrell',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who asks the king for her hand to unite their houses.',
      it: 'Suo fratello, che chiede la sua mano al re per unire le loro casate.',
    },
  },
  marJoffreyShow: {
    character: 'joffrey-baratheon',
    type: { en: 'Intended husband', it: 'Promesso sposo' },
    summary: {
      en: 'The king who agrees to wed her, setting aside his betrothal to Sansa Stark.',
      it: 'Il re che accetta di sposarla, mettendo da parte il fidanzamento con Sansa Stark.',
    },
  },
  // Margaery, the books
  marRenlyFeast: {
    character: 'renly-baratheon',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'The king she married. At the feast he feeds her choice morsels and kisses her lightly.',
      it: 'Il re che ha sposato. Al banchetto la imbocca con bocconi scelti e la bacia con leggerezza.',
    },
  },
  marCatelynCondolences: {
    character: 'catelyn-stark',
    type: { en: 'Envoy', it: 'Inviata' },
    summary: {
      en: 'The envoy of the King in the North, to whom she offers her condolences for her husband’s death.',
      it: 'L’inviata del Re del Nord, a cui porge le condoglianze per la morte del marito.',
    },
  },
  marRenlyDeadBook: {
    character: 'renly-baratheon',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'The king she married, killed in his tent the night before the battle.',
      it: 'Il re che ha sposato, ucciso nella sua tenda la notte prima della battaglia.',
    },
  },
  marJoffreyBook: {
    character: 'joffrey-baratheon',
    type: { en: 'Intended husband', it: 'Promesso sposo' },
    summary: {
      en: 'The king her brother asks to marry her. The High Septon voids his betrothal to Sansa Stark, and she is to wed him instead.',
      it: 'Il re che suo fratello chiede di farle sposare. L’Alto Septon dichiara nullo il suo fidanzamento con Sansa Stark, e sarà lei a sposarlo.',
    },
  },

  // Mace, the books
  macJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who presents him with his sons among the heroes of the Blackwater, and gives him a seat on the small council.',
      it: 'Il re che lo presenta con i suoi figli tra gli eroi delle Acque Nere, e gli dà un seggio nel concilio ristretto.',
    },
  },
  macLoras: {
    character: 'loras-tyrell',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, whom the king names to the Kingsguard.',
      it: 'Suo figlio, che il re nomina nella Guardia reale.',
    },
  },

  // Cortnay, the books
  corStannisParley: {
    character: 'stannis-baratheon',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The king besieging Storm’s End. Cortnay scorns him and his new allies, refuses to yield, and challenges him to single combat.',
      it: 'Il re che assedia Capo Tempesta. Cortnay disprezza lui e i suoi nuovi alleati, rifiuta di cedere, e lo sfida a duello.',
    },
  },
  corStannisFallen: {
    character: 'stannis-baratheon',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The king who besieged Storm’s End. The castle has fallen to him, and Cortnay is dead.',
      it: 'Il re che ha assediato Capo Tempesta. Il castello è caduto in mano sua, e Cortnay è morto.',
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
  // Stannis, Renly and the stormlands (#1480). The show's cards open at
  // episode 11, the books' at the prologue (chapter 74).
  'stannis-baratheon': [
    // The show: Dragonstone ("The North Remembers").
    {
      episode: 11,
      chapter: 74,
      source: 'episode',
      value: [
        stormlands.staMelisandreFire,
        stormlands.staDavosAlliance,
        stormlands.staRenlyClaim,
      ],
    },
    // The shadow kills Renly in "The Ghost of Harrenhal".
    {
      episode: 15,
      chapter: 107,
      source: 'episode',
      value: [
        stormlands.staRenlyDeadShow,
        stormlands.staMelisandreShadow,
        stormlands.staDavosFleet,
      ],
    },
    // The Blackwater is lost, and Melisandre restores his faith.
    {
      episode: 20,
      chapter: 139,
      source: 'episode',
      value: [
        stormlands.staMelisandreDefeat,
        stormlands.staDavosHand,
        stormlands.staRenlyDeadShow,
      ],
    },
    // The books: the prologue's feast on Dragonstone.
    {
      episode: 11,
      chapter: 74,
      source: 'chapter',
      value: [
        stormlands.staMelisandreFeast,
        stormlands.staSelyse,
        stormlands.staDavosEnvoy,
        stormlands.staRenlyThief,
        stormlands.staCressen,
      ],
    },
    // Catelyn III: the parley outside Storm's End.
    {
      episode: 14,
      chapter: 105,
      source: 'chapter',
      value: [
        stormlands.staRenlyParley,
        stormlands.staCatelynParley,
        stormlands.staMelisandreStandard,
      ],
    },
    // Davos II: the siege of Storm's End, after Renly's death.
    {
      episode: 16,
      chapter: 116,
      source: 'chapter',
      value: [
        stormlands.staRenlyGrief,
        stormlands.staMelisandreNight,
        stormlands.staCortnay,
        stormlands.staDavosBeneath,
      ],
    },
  ],
  'melisandre': [
    {
      episode: 11,
      chapter: 74,
      source: 'episode',
      value: [stormlands.melStannisFire, stormlands.melCressenPoison],
    },
    // She bears the shadow before Davos in "Garden of Bones"; it kills Renly
    // in "The Ghost of Harrenhal".
    {
      episode: 15,
      chapter: 107,
      source: 'episode',
      value: [
        stormlands.melStannisShadow,
        stormlands.melDavosCave,
        stormlands.melRenlyShadow,
      ],
    },
    {
      episode: 20,
      chapter: 139,
      source: 'episode',
      value: [
        stormlands.melStannisDefeat,
        stormlands.melDavosCave,
        stormlands.melRenlyShadow,
      ],
    },
    {
      episode: 11,
      chapter: 74,
      source: 'chapter',
      value: [
        stormlands.melCressenWine,
        stormlands.melStannisFeast,
        stormlands.melSelyseConvert,
      ],
    },
    // Davos I: the burning of the Seven.
    {
      episode: 12,
      chapter: 84,
      source: 'chapter',
      value: [stormlands.melStannisAzor, stormlands.melSelyseChant],
    },
    {
      episode: 16,
      chapter: 116,
      source: 'chapter',
      value: [stormlands.melStannisPavilion, stormlands.melDavosAccuser],
    },
  ],
  'davos-seaworth': [
    {
      episode: 11,
      chapter: 74,
      source: 'episode',
      value: [
        stormlands.davStannisAlliance,
        stormlands.davCressenPoison,
        stormlands.davMelisandreFire,
      ],
    },
    // "The Night Lands": he wins Salladhor's ships.
    {
      episode: 12,
      chapter: 84,
      source: 'episode',
      value: [
        stormlands.davSalladhorRecruit,
        stormlands.davMatthosRead,
        stormlands.davStannisAlliance,
      ],
    },
    // "The Ghost of Harrenhal": he commands the fleet.
    {
      episode: 15,
      chapter: 107,
      source: 'episode',
      value: [
        stormlands.davStannisFleet,
        stormlands.davMelisandreCave,
        stormlands.davSalladhorRecruit,
        stormlands.davMatthosRead,
      ],
    },
    // "Blackwater": his ship burns and Matthos dies.
    {
      episode: 19,
      chapter: 132,
      source: 'episode',
      value: [stormlands.davMatthosDead, stormlands.davStannisHand],
    },
    {
      episode: 11,
      chapter: 74,
      source: 'chapter',
      value: [
        stormlands.davStannisReport,
        stormlands.davCressenSeat,
        stormlands.davMelisandreFlames,
      ],
    },
    {
      episode: 12,
      chapter: 84,
      source: 'chapter',
      value: [
        stormlands.davStannisKnight,
        stormlands.davSalladhorInn,
        stormlands.davMelisandreBurning,
      ],
    },
    {
      episode: 16,
      chapter: 116,
      source: 'chapter',
      value: [
        stormlands.davStannisRow,
        stormlands.davMelisandreRow,
        stormlands.davCortnay,
      ],
    },
    // Davos III: the Black Betha on the Blackwater.
    {
      episode: 19,
      chapter: 132,
      source: 'chapter',
      value: [stormlands.davMatthosBetha, stormlands.davStannisShore],
    },
  ],
  // He opens deceased in both media.
  'cressen': [
    {
      episode: 11,
      chapter: 74,
      source: 'episode',
      value: [
        stormlands.creMelisandrePoison,
        stormlands.creStannisShow,
        stormlands.creDavosHelp,
      ],
    },
    {
      episode: 11,
      chapter: 74,
      source: 'chapter',
      value: [
        stormlands.creStannisBook,
        stormlands.creMelisandreBook,
        stormlands.creDavosBook,
        stormlands.creShireen,
        stormlands.creSelyse,
      ],
    },
  ],
  // The show opens him at episode 11 and the books at Davos III (chapter
  // 132), where he dies.
  'matthos-seaworth': [
    {
      episode: 11,
      chapter: 132,
      source: 'episode',
      value: [stormlands.matStannisLetter, stormlands.matDavosLetter],
    },
    {
      episode: 12,
      chapter: 132,
      source: 'episode',
      value: [
        stormlands.matDavosRead,
        stormlands.matSalladhor,
        stormlands.matMelisandre,
      ],
    },
    {
      episode: 19,
      chapter: 132,
      source: 'episode',
      value: [stormlands.matDavosDead, stormlands.matMelisandre],
    },
    {
      episode: 19,
      chapter: 132,
      source: 'chapter',
      value: [stormlands.matDavosBetha],
    },
  ],
  'salladhor-saan': [
    {
      episode: 12,
      chapter: 84,
      source: 'episode',
      value: [
        stormlands.salDavosFleet,
        stormlands.salStannisFleet,
        stormlands.salMatthos,
      ],
    },
    // Davos I: the inn on Dragonstone.
    {
      episode: 12,
      chapter: 84,
      source: 'chapter',
      value: [stormlands.salDavosBook, stormlands.salStannisBook],
    },
  ],
  // The show names her only in episode 25: her cards are the books' in this
  // stage, and episode 25 orders them.
  'selyse-baratheon': [
    {
      episode: 25,
      chapter: 74,
      source: 'chapter',
      value: [
        stormlands.selStannis,
        stormlands.selMelisandre,
        stormlands.selShireen,
      ],
    },
  ],
  'shireen-baratheon': [
    {
      episode: 25,
      chapter: 74,
      source: 'chapter',
      value: [
        stormlands.shiCressen,
        stormlands.shiSelyse,
        stormlands.shiMelisandre,
        stormlands.shiStannis,
      ],
    },
  ],
  'brienne-of-tarth': [
    {
      episode: 13,
      chapter: 96,
      source: 'episode',
      value: [
        stormlands.briRenlyGuard,
        stormlands.briCatelynName,
        stormlands.briLorasMelee,
      ],
    },
    {
      episode: 15,
      chapter: 107,
      source: 'episode',
      value: [stormlands.briRenlyDeadShow, stormlands.briCatelynFealty],
    },
    // "The Prince of Winterfell": Catelyn sends her with Jaime.
    {
      episode: 18,
      chapter: 118,
      source: 'episode',
      value: [
        stormlands.briJaime,
        stormlands.briCatelynFealty,
        stormlands.briRenlyDeadShow,
      ],
    },
    {
      episode: 13,
      chapter: 96,
      source: 'chapter',
      value: [
        stormlands.briRenlyTourney,
        stormlands.briCatelynKneel,
        stormlands.briLorasYield,
      ],
    },
    // Catelyn IV: Renly dies in her arms.
    {
      episode: 15,
      chapter: 107,
      source: 'chapter',
      value: [
        stormlands.briRenlyDeadBook,
        stormlands.briCatelynFlight,
        stormlands.briStannis,
      ],
    },
    // Catelyn V: Catelyn takes her as her sworn sword.
    {
      episode: 15,
      chapter: 113,
      source: 'chapter',
      value: [
        stormlands.briCatelynSworn,
        stormlands.briRenlyDeadBook,
        stormlands.briStannis,
      ],
    },
  ],
  'margaery-tyrell': [
    {
      episode: 13,
      chapter: 96,
      source: 'episode',
      value: [
        stormlands.marRenlyBed,
        stormlands.marLorasFetch,
        stormlands.marCatelyn,
      ],
    },
    {
      episode: 15,
      chapter: 107,
      source: 'episode',
      value: [stormlands.marRenlyDeadShow, stormlands.marLorasHome],
    },
    // "Valar Morghulis": her brother asks Joffrey for her hand.
    {
      episode: 20,
      chapter: 139,
      source: 'episode',
      value: [
        stormlands.marLorasAsks,
        stormlands.marJoffreyShow,
        stormlands.marRenlyDeadShow,
      ],
    },
    {
      episode: 13,
      chapter: 96,
      source: 'chapter',
      value: [stormlands.marRenlyFeast, stormlands.marCatelynCondolences],
    },
    {
      episode: 15,
      chapter: 107,
      source: 'chapter',
      value: [stormlands.marRenlyDeadBook],
    },
    // Sansa VIII: Garlan asks Joffrey to wed her.
    {
      episode: 20,
      chapter: 139,
      source: 'chapter',
      value: [stormlands.marJoffreyBook, stormlands.marRenlyDeadBook],
    },
  ],
  // The show first has him at Joffrey's wedding (episode 32): his cards are
  // the books' in this stage, from Sansa VIII.
  'mace-tyrell': [
    {
      episode: 32,
      chapter: 139,
      source: 'chapter',
      value: [stormlands.macJoffrey, stormlands.macLoras],
    },
  ],
  // Books only: the siege of Storm's End.
  'cortnay-penrose': [
    {
      episode: 14,
      chapter: 116,
      source: 'chapter',
      value: [stormlands.corStannisParley],
    },
    {
      episode: 16,
      chapter: 118,
      source: 'chapter',
      value: [stormlands.corStannisFallen],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
