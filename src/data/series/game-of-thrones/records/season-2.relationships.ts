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
      en: 'The younger prince, whom the queen sent to Rosby to hide. On Tyrion’s orders Jacelyn’s men seize the party and keep him safe there.',
      it: 'Il principe più giovane, che la regina aveva mandato a nascondere a Rosby. Per ordine di Tyrion gli uomini di Jacelyn prendono il gruppo e lo tengono al sicuro lì.',
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
    type: { en: 'Former Hand', it: 'Ex Primo Cavaliere' },
    summary: {
      en: 'The former Hand, whose plan burned Stannis’s fleet with the guild’s wildfire. Tyrion lies wounded and misses the court of rewards.',
      it: 'L’ex Primo Cavaliere, il cui piano ha bruciato la flotta di Stannis con l’altofuoco della gilda. Tyrion è ferito e non va alla cerimonia delle ricompense.',
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
      en: 'The prisoner who rides in with his column, and stays at Harrenhal among his men.',
      it: 'Il prigioniero che arriva con la sua colonna e resta a Harrenhal tra i suoi uomini.',
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
      en: 'The sellsword captain whose Brave Companions turn on the westermen. His men parade Amory naked and feed him to a caged bear.',
      it: 'Il capitano mercenario i cui Bravi Camerati si rivoltano contro gli uomini dell’ovest. I suoi uomini fanno sfilare Amory nudo e lo danno in pasto a un orso in gabbia.',
    },
  },
  lorRobett: {
    character: 'robett-glover',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The northern lord the Brave Companions bring in as a captive. Amory has him and his men locked in a cell beneath a tower.',
      it: 'Il lord del Nord che i Bravi Camerati portano come prigioniero. Amory fa rinchiudere lui e i suoi uomini in una cella sotto una torre.',
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
      en: 'His brother, the priest of the Drowned God. He meets Theon at Lordsport, on Balon’s orders to keep it quiet.',
      it: 'Suo fratello, sacerdote del Dio Abissale. Accoglie Theon a Lordsport in segreto, per ordine di Balon.',
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
