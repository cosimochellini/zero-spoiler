import type { Relationship, Timeline } from '~/data/types'

const dwunGon = {
  character: 'gon-freecss',
  type: { it: 'Vincitore che premia', en: 'Winner he rewards' },
  summary: {
    it: 'Dwun consegna a Gon l’ultima carta e gli spiega come portare tre carte fuori dal gioco.',
    en: 'Dwun gives Gon the final card and explains how to take three cards out of the game.',
  },
}
const dwunGing = {
  character: 'ging-freecss',
  type: { it: 'Amico e creatore del gioco', en: 'Friend and fellow creator' },
  summary: {
    it: 'Dwun ha creato Greed Island con Ging. Gli rimprovera di avergli cambiato il nome per inserirne l’iniziale nel titolo.',
    en: 'Dwun created Greed Island with Ging. He resents Ging changing his name to fit its initial into the title.',
  },
}
const dwunList = {
  character: 'list',
  type: { it: 'Collega nel castello', en: 'Colleague at the castle' },
  summary: {
    it: 'List accompagna Gon da Dwun e lo richiama quando scherza con il vincitore.',
    en: 'List takes Gon to Dwun and intervenes when Dwun teases the winner.',
  },
}

/** Recruitment scenes in the pinned chapters 121/125/126 and episodes 59/60. */
const links = {
  genthruGonDefeat: {
    character: 'gon-freecss',
    type: { it: 'Avversario che lo cattura', en: 'Opponent who captures him' },
    summary: {
      it: 'Gon sconfigge Gensul con una trappola e lo cattura. Gensul accetta di restituire le carte rubate.',
      en: 'Gon defeats Genthru with a trap and captures him. Genthru agrees to return the stolen cards.',
    },
  },
  genthruGonHealing: {
    character: 'gon-freecss',
    type: { it: 'Avversario che lo cura', en: 'Opponent who heals him' },
    summary: {
      it: 'Dopo averlo sconfitto, Gon usa una carta per curare Gensul nonostante i suoi omicidi.',
      en: 'After defeating him, Gon uses a card to heal Genthru despite the people he has killed.',
    },
  },
  razorGonMatch: {
    character: 'gon-freecss',
    type: { it: 'Sfidante nella palla avvelenata', en: 'Dodgeball challenger' },
    summary: {
      it: 'Razer riconosce Gon come figlio di Ging e gli comunica che il padre gli ha chiesto di non trattenersi.',
      en: 'Razor recognizes Gon as Ging’s son and tells him that his father asked him not to hold back.',
    },
  },
  razorGonVictory: {
    character: 'gon-freecss',
    type: { it: 'Sfidante che lo sconfigge', en: 'Challenger who defeats him' },
    summary: {
      it: 'Dopo la vittoria della sua squadra, Razer racconta a Gon come ha conosciuto Ging e gli augura di trovarlo.',
      en: 'After Gon’s team wins, Razor tells him how he met Ging and hopes that he finds him.',
    },
  },
  razorGing: {
    character: 'ging-freecss',
    type: { it: 'Amico che gli dà fiducia', en: 'Friend who trusts him' },
    summary: {
      it: 'Ging cattura Razer e in seguito lo assume per creare Greed Island. Gli affida il compito di affrontare Gon senza trattenersi.',
      en: 'Ging captures Razor and later hires him to create Greed Island. He trusts him to challenge Gon without holding back.',
    },
  },
  biscuitGonVictory: {
    character: 'gon-freecss',
    type: {
      it: 'Allievo nella squadra vincente',
      en: 'Pupil on the winning team',
    },
    summary: {
      it: 'Biscuit partecipa alla sfida contro Razer con Gon e lo aiuta a prepararsi per affrontare il Boomer.',
      en: 'Biscuit challenges Razor alongside Gon and helps him prepare to fight the Bomber.',
    },
  },
  biscuitKilluaVictory: {
    character: 'killua',
    type: {
      it: 'Allievo nella squadra vincente',
      en: 'Pupil on the winning team',
    },
    summary: {
      it: 'Biscuit partecipa alla sfida contro Razer con Killua e si occupa delle sue mani ferite dopo la partita.',
      en: 'Biscuit challenges Razor alongside Killua and tends his injured hands after the match.',
    },
  },
  biscuitGonFarewell: {
    character: 'gon-freecss',
    type: { it: 'Allievo che saluta', en: 'Pupil she says goodbye to' },
    summary: {
      it: 'Dopo la vittoria a Greed Island, Gon consegna a Biscuit la gemma che desiderava e la ringrazia per il suo aiuto.',
      en: 'After completing Greed Island, Gon gives Biscuit the jewel she wanted and thanks her for her help.',
    },
  },
  biscuitKilluaFarewell: {
    character: 'killua',
    type: { it: 'Allievo che saluta', en: 'Pupil she says goodbye to' },
    summary: {
      it: 'Biscuit saluta Killua quando parte con Gon alla ricerca di Ging. Rifiuta di accompagnarli e si commuove per la loro amicizia.',
      en: 'Biscuit says goodbye when Killua leaves with Gon to look for Ging. She declines to join them and is moved by their friendship.',
    },
  },
  batteraTsezguerraCancelled: {
    character: 'tsezguerra',
    type: {
      it: 'Giocatore a cui interrompe il contratto',
      en: 'Player whose contract he ends',
    },
    summary: {
      it: 'Battera interrompe il contratto mentre Tsezugera e la sua squadra sono vicini a completare il gioco.',
      en: 'Battera ends the contract while Tsezguerra and his team are close to completing the game.',
    },
  },
  batteraTsezguerraReason: {
    character: 'tsezguerra',
    type: {
      it: 'Hunter a cui spiega la rinuncia',
      en: 'Hunter he explains his withdrawal to',
    },
    summary: {
      it: 'Battera racconta a Tsezugera che cercava una carta per curare la donna amata, morta prima che il gioco fosse completato.',
      en: 'Battera tells Tsezguerra that he wanted a card to heal the woman he loved, who died before the game was completed.',
    },
  },
  tsezguerraGonAlly: {
    character: 'gon-freecss',
    type: { it: 'Alleato contro i pirati', en: 'Ally against the pirates' },
    summary: {
      it: 'Tsezugera accetta di unire la sua squadra a quella di Gon per affrontare i pirati e ottenere una carta rara.',
      en: 'Tsezguerra agrees to join his team with Gon’s to challenge the pirates and obtain a rare card.',
    },
  },
  tsezguerraKilluaAlly: {
    character: 'killua',
    type: { it: 'Alleato contro i pirati', en: 'Ally against the pirates' },
    summary: {
      it: 'Tsezugera collabora con Killua durante la sfida contro Razer.',
      en: 'Tsezguerra works with Killua during the challenge against Razor.',
    },
  },
  tsezguerraGonDelay: {
    character: 'gon-freecss',
    type: {
      it: 'Alleato a cui concede tempo',
      en: 'Ally he gives time to prepare',
    },
    summary: {
      it: 'Tsezugera si impegna a tenere occupato il Boomer per tre settimane mentre Gon si prepara ad affrontarlo.',
      en: 'Tsezguerra agrees to keep the Bomber occupied for three weeks while Gon prepares to fight him.',
    },
  },
  tsezguerraKilluaDelay: {
    character: 'killua',
    type: { it: 'Alleato nella preparazione', en: 'Ally preparing for battle' },
    summary: {
      it: 'Tsezugera tiene occupato il Boomer mentre Killua e i suoi compagni preparano il combattimento.',
      en: 'Tsezguerra keeps the Bomber occupied while Killua and his companions prepare for battle.',
    },
  },
  tsezguerraBatteraReason: {
    character: 'battera',
    type: {
      it: 'Committente che lascia il gioco',
      en: 'Employer who abandons the game',
    },
    summary: {
      it: 'Tsezugera lascia il gioco con la squadra e Battera, che gli racconta della morte della donna che voleva curare.',
      en: 'Tsezguerra leaves the game with his team and Battera, who tells him about the death of the woman he wanted to heal.',
    },
  },
  elenaEta: {
    character: 'eta',
    type: { it: 'Sorella gemella', en: 'Twin sister' },
    summary: {
      it: 'Elena ed Eeta sono gemelle e hanno partecipato alla creazione di Greed Island.',
      en: 'Elena and Eta are twins who helped create Greed Island.',
    },
  },
  elenaKillua: {
    character: 'killua',
    type: { it: 'Giocatore che fa uscire', en: 'Player she sends out' },
    summary: {
      it: 'Elena avverte Killua che perderà le carte lasciando il gioco, poi lo trasporta fuori per l’esame Hunter.',
      en: 'Elena warns Killua that leaving the game will erase his cards, then sends him out for the Hunter Exam.',
    },
  },
  elenaGon: {
    character: 'gon-freecss',
    type: { it: 'Vincitore che fa uscire', en: 'Winner she sends out' },
    summary: {
      it: 'Elena invita Gon a scegliere le tre carte da portare fuori dal gioco.',
      en: 'Elena asks Gon to choose the three cards he will take out of the game.',
    },
  },
  elenaGing: {
    character: 'ging-freecss',
    type: {
      it: 'Creatore che decide la destinazione',
      en: 'Creator who chooses the destination',
    },
    summary: {
      it: 'Ging ordina a Elena di mandare Gon da lui se usa Forza Magnetica e da Kaito se usa Accompagnamento.',
      en: 'Ging tells Elena to send Gon to him if he uses Magnetic Force and to Kite if he uses Accompany.',
    },
  },
  biscuitGon: {
    character: 'gon-freecss',
    type: { it: 'Allievo a cui offre aiuto', en: 'Boy she offers to teach' },
    summary: {
      it: 'Biscuit osserva le difficoltà di Gon contro i mostri e gli offre di insegnare il Nen.',
      en: 'Biscuit watches Gon struggle against the monsters and offers to teach him Nen.',
    },
  },
  biscuitKillua: {
    character: 'killua',
    type: { it: 'Allievo a cui offre aiuto', en: 'Boy she offers to teach' },
    summary: {
      it: 'Biscuit corregge il modo in cui Killua usa Gyo e gli offre di allenarlo.',
      en: 'Biscuit corrects Killua’s use of Gyo and offers to train him.',
    },
  },
  biscuitWing: {
    character: 'wing',
    type: { it: 'Ex allievo', en: 'Former pupil' },
    summary: {
      it: 'Quando Gon nomina Wing, Biscuit spiega che era un suo allievo.',
      en: 'When Gon mentions Wing, Biscuit explains that he was her pupil.',
    },
  },
  binoltBiscuit: {
    character: 'biscuit-krueger',
    type: { it: 'Hunter che lo sconfigge', en: 'Hunter who defeats him' },
    summary: {
      it: 'Biscuit sconfigge Binolt senza Nen e gli impone di affrontare Gon e Killua.',
      en: 'Biscuit defeats Binolt without Nen and makes him face Gon and Killua.',
    },
  },
  binoltGon: {
    character: 'gon-freecss',
    type: { it: 'Avversario nell’allenamento', en: 'Training opponent' },
    summary: {
      it: 'Biscuit obbliga Binolt a difendersi dagli attacchi di Gon in una conca di roccia.',
      en: 'Biscuit makes Binolt defend against Gon’s attacks in a rocky hollow.',
    },
  },
  binoltKillua: {
    character: 'killua',
    type: { it: 'Avversario nell’allenamento', en: 'Training opponent' },
    summary: {
      it: 'Biscuit obbliga Binolt ad affrontare Killua; le forbici gli permettono di tenere il ragazzo a distanza.',
      en: 'Biscuit makes Binolt fight Killua; his scissors let him keep the boy at a distance.',
    },
  },
  binoltGonFree: {
    character: 'gon-freecss',
    type: { it: 'Avversario che lo risparmia', en: 'Opponent who spares him' },
    summary: {
      it: 'Gon ferma il colpo decisivo e ringrazia Binolt per averli aiutati a migliorare.',
      en: 'Gon stops his finishing blow and thanks Binolt for helping them improve.',
    },
  },
  binoltKilluaFree: {
    character: 'killua',
    type: { it: 'Avversario che lo supera', en: 'Opponent who surpasses him' },
    summary: {
      it: 'Killua si allena combattendo contro Binolt fino a riuscire ad affrontarlo da solo.',
      en: 'Killua trains by fighting Binolt until he can face him alone.',
    },
  },
  binoltBiscuitFree: {
    character: 'biscuit-krueger',
    type: { it: 'Hunter che lo lascia andare', en: 'Hunter who releases him' },
    summary: {
      it: 'Biscuit permette a Binolt di andarsene dopo che promette di costituirsi.',
      en: 'Biscuit lets Binolt leave after he promises to turn himself in.',
    },
  },

  batteraTsezguerra: {
    character: 'tsezguerra',
    type: { it: 'Esaminatore al suo servizio', en: 'Examiner in his service' },
    summary: {
      it: 'Battera chiede a Tsezugera di valutare il Ren di Gon e Killua prima di ammetterli a Greed Island.',
      en: 'Battera asks Tsezguerra to assess Gon and Killua’s Ren before letting them play Greed Island.',
    },
  },
  tsezguerraBattera: {
    character: 'battera',
    type: { it: 'Committente', en: 'Employer' },
    summary: {
      it: 'Tsezugera accompagna Battera all’asta ed esamina per lui chi si offre di giocare a Greed Island.',
      en: 'Tsezguerra accompanies Battera to the auction and assesses the people who offer to play Greed Island for him.',
    },
  },
  tsezguerraGon: {
    character: 'gon-freecss',
    type: { it: 'Candidato respinto', en: 'Applicant he rejects' },
    summary: {
      it: 'Tsezugera osserva il Ren di Gon e lo respinge perché ritiene che morirebbe nel gioco.',
      en: 'Tsezguerra watches Gon’s Ren and rejects him because he thinks he would die in the game.',
    },
  },
  tsezguerraKillua: {
    character: 'killua',
    type: { it: 'Candidato respinto', en: 'Applicant he rejects' },
    summary: {
      it: 'Tsezugera esamina il Ren di Killua insieme a quello di Gon e non li ammette al gioco.',
      en: 'Tsezguerra assesses Killua’s Ren alongside Gon’s and refuses to let them play.',
    },
  },
  tsezguerraGonPasses: {
    character: 'gon-freecss',
    type: { it: 'Giocatore selezionato', en: 'Player he selects' },
    summary: {
      it: 'Dopo quattro giorni Gon torna alla selezione e rompe il muro con un pugno. Tsezugera lo ammette tra i giocatori e si preoccupa per quanto potrebbe diventare forte.',
      en: 'Gon returns to the tryouts after four days and cracks the wall with a punch. Tsezguerra selects him as a player and worries about how strong he could become.',
    },
  },
  tsezguerraKilluaPasses: {
    character: 'killua',
    type: { it: 'Giocatore selezionato', en: 'Player he selects' },
    summary: {
      it: 'Killua torna alla selezione e mostra di saper trasformare l’aura in elettricità. Tsezugera lo ammette, sorpreso che abbia imparato in quattro giorni.',
      en: 'Killua returns to the tryouts and shows that he can turn his aura into electricity. Tsezguerra selects him, surprised that he learned it in four days.',
    },
  },
  puhatGon: {
    character: 'gon-freecss',
    type: { it: 'Candidato conosciuto alla selezione', en: 'Fellow applicant' },
    summary: {
      it: 'Puhat parla con Gon mentre aspettano la prova. Apprezza il suo ragionamento sulla selezione e si presenta prima di andare a sostenerla.',
      en: 'Puhat talks with Gon while they wait for the test. He approves of Gon’s reasoning about the selection and introduces himself before taking it.',
    },
  },
  puhatKillua: {
    character: 'killua',
    type: { it: 'Candidato conosciuto alla selezione', en: 'Fellow applicant' },
    summary: {
      it: 'Puhat spiega a Killua perché mettersi subito in fila non garantisce un posto. Killua riconosce che ha ragione e decide di affrontare la prova.',
      en: 'Puhat explains to Killua why joining the line immediately does not guarantee a place. Killua accepts his reasoning and decides to take the test.',
    },
  },
  genthruPuhat: {
    character: 'puhat',
    type: {
      it: 'Vittima durante le trattative',
      en: 'Victim during negotiations',
    },
    summary: {
      it: 'Gensul uccide Puhat quando cerca di negoziare per l’alleanza.',
      en: 'Genthru kills Puhat when he tries to negotiate for the alliance.',
    },
  },
  genthruJispa: {
    character: 'jispa',
    type: { it: 'Avversario che ferisce', en: 'Opponent he injures' },
    summary: {
      it: 'Gensul ferisce il volto di Jispa con un’esplosione quando cerca di attaccarlo alle spalle. In seguito viene informato della sua morte.',
      en: 'Genthru injures Jispa’s face with an explosion when he tries to attack from behind. He is later told of his death.',
    },
  },
  jispaGenthru: {
    character: 'genthru',
    type: { it: 'Avversario che lo ferisce', en: 'Opponent who injures him' },
    summary: {
      it: 'Jispa cerca di fermare Gensul dopo che si rivela come il Boomer. Gensul gli ferisce il volto con un’esplosione.',
      en: 'Jispa tries to stop Genthru after he reveals himself as the Bomber. Genthru injures his face with an explosion.',
    },
  },
  razorPhinks: {
    character: 'phinks',
    type: { it: 'Intruso che allontana', en: 'Intruder he removes' },
    summary: {
      it: 'Razer spiega a Phinks che la Brigata deve entrare nel gioco attraverso una console, poi allontana il gruppo con una carta.',
      en: 'Razor explains to Phinks that the Troupe must enter the game through a console, then removes the group with a card.',
    },
  },
  biscuitHisoka: {
    character: 'hisoka',
    type: { it: 'Alleato che recluta', en: 'Ally she recruits' },
    summary: {
      it: 'Biscuit chiede a Hisoka di aiutarli a ottenere una carta. Lo tiene nel gruppo pur avvertendo Gon e Killua che nasconde qualcosa.',
      en: 'Biscuit asks Hisoka to help them obtain a card. She keeps him in the group while warning Gon and Killua that he is hiding something.',
    },
  },
} satisfies Record<string, Relationship>

export const greedIslandRelationships = {
  'dwun': [
    {
      episode: 75,
      chapter: 184,
      source: 'episode',
      value: [dwunGon, dwunGing],
    },
    {
      episode: 75,
      chapter: 184,
      source: 'chapter',
      value: [dwunGon, dwunGing, dwunList],
    },
  ],
  'list': [
    {
      episode: 75,
      chapter: 184,
      source: 'chapter',
      value: [
        {
          character: 'gon-freecss',
          type: { it: 'Vincitore che accoglie', en: 'Winner he welcomes' },
          summary: {
            it: 'List accoglie Gon nel castello, lo accompagna da Dwun e gli spiega come si conclude il gioco.',
            en: 'List welcomes Gon to the castle, takes him to Dwun and explains how the game ends.',
          },
        },
        {
          character: 'dwun',
          type: { it: 'Collega nel castello', en: 'Colleague at the castle' },
          summary: {
            it: 'List lavora con Dwun e lo richiama quando scherza con Gon invece di proseguire con le spiegazioni.',
            en: 'List works with Dwun and intervenes when he teases Gon instead of continuing the explanation.',
          },
        },
        {
          character: 'ging-freecss',
          type: {
            it: 'Amico e creatore del gioco',
            en: 'Friend and fellow creator',
          },
          summary: {
            it: 'List si presenta a Gon come amico di Ging e spiega che hanno creato Greed Island insieme ad altri nove compagni.',
            en: 'List introduces himself to Gon as Ging’s friend and explains that they created Greed Island with nine other people.',
          },
        },
      ],
    },
  ],
  'eta': [
    {
      episode: 75,
      chapter: 184,
      source: 'chapter',
      value: [
        {
          character: 'elena',
          type: { it: 'Sorella gemella', en: 'Twin sister' },
          summary: {
            it: 'Eeta ed Elena sono gemelle e hanno creato Greed Island con gli altri Game Master.',
            en: 'Eta and Elena are twins who created Greed Island with the other Game Masters.',
          },
        },
        {
          character: 'gon-freecss',
          type: { it: 'Giocatore che accoglie', en: 'Player she welcomes' },
          summary: {
            it: 'Eeta spiega a Gon le regole quando entra nel gioco. Conduce il quiz finale e lo proclama vincitore.',
            en: 'Eta explains the rules when Gon enters the game. She runs the final quiz and announces him as its winner.',
          },
        },
        {
          character: 'killua',
          type: { it: 'Giocatore che riaccoglie', en: 'Returning player' },
          summary: {
            it: 'Quando Killua rientra dopo l’esame Hunter, Eeta gli offre di spiegargli di nuovo le regole.',
            en: 'When Killua returns after the Hunter Exam, Eta offers to explain the rules again.',
          },
        },
      ],
    },
  ],
  'elena': [
    {
      episode: 75,
      chapter: 184,
      source: 'chapter',
      value: [links.elenaEta, links.elenaKillua, links.elenaGon],
    },
    {
      episode: 76,
      chapter: 185,
      source: 'chapter',
      value: [
        links.elenaEta,
        links.elenaKillua,
        links.elenaGon,
        links.elenaGing,
      ],
    },
  ],
  'genthru': [
    {
      episode: 65,
      chapter: 144,
      source: 'chapter',
      value: [links.genthruPuhat, links.genthruJispa],
    },
    {
      episode: 74,
      chapter: 181,
      source: 'chapter',
      value: [links.genthruGonDefeat, links.genthruPuhat, links.genthruJispa],
    },
    {
      episode: 74,
      chapter: 182,
      source: 'chapter',
      value: [links.genthruGonHealing, links.genthruPuhat, links.genthruJispa],
    },
  ],
  'jispa': [
    {
      episode: 65,
      chapter: 144,
      source: 'chapter',
      value: [links.jispaGenthru],
    },
  ],
  'razor': [
    { episode: 67, chapter: 145, value: [links.razorPhinks] },
    {
      episode: 69,
      chapter: 161,
      value: [links.razorGonMatch, links.razorPhinks],
    },
    {
      episode: 71,
      chapter: 169,
      value: [links.razorGonVictory, links.razorGing, links.razorPhinks],
    },
  ],
  'biscuit-krueger': [
    // Episode 62's naming scene precedes the discussion of Wing in episode 63.
    {
      episode: 62,
      chapter: 137,
      source: 'episode',
      value: [links.biscuitGon, links.biscuitKillua],
    },
    {
      episode: 63,
      chapter: 137,
      source: 'chapter',
      value: [links.biscuitGon, links.biscuitKillua, links.biscuitWing],
    },
    {
      episode: 63,
      chapter: 137,
      source: 'episode',
      value: [links.biscuitGon, links.biscuitKillua, links.biscuitWing],
    },
    {
      episode: 68,
      chapter: 158,
      value: [
        links.biscuitGon,
        links.biscuitKillua,
        links.biscuitWing,
        links.biscuitHisoka,
      ],
    },
    {
      episode: 72,
      chapter: 170,
      value: [
        links.biscuitGonVictory,
        links.biscuitKilluaVictory,
        links.biscuitWing,
        links.biscuitHisoka,
      ],
    },
    {
      episode: 75,
      chapter: 185,
      value: [
        links.biscuitGonFarewell,
        links.biscuitKilluaFarewell,
        links.biscuitWing,
        links.biscuitHisoka,
      ],
    },
  ],
  'binolt': [
    // Anime readers finish the entire training encounter in his opening episode.
    {
      episode: 63,
      chapter: 138,
      source: 'chapter',
      value: [links.binoltBiscuit, links.binoltGon, links.binoltKillua],
    },
    {
      episode: 63,
      chapter: 139,
      source: 'episode',
      value: [
        links.binoltBiscuitFree,
        links.binoltGonFree,
        links.binoltKilluaFree,
      ],
    },
    {
      episode: 64,
      chapter: 139,
      source: 'chapter',
      value: [
        links.binoltBiscuitFree,
        links.binoltGonFree,
        links.binoltKilluaFree,
      ],
    },
  ],

  'battera': [
    { episode: 59, chapter: 121, value: [links.batteraTsezguerra] },
    { episode: 72, chapter: 173, value: [links.batteraTsezguerraCancelled] },
    { episode: 73, chapter: 174, value: [links.batteraTsezguerraReason] },
  ],
  'tsezguerra': [
    {
      episode: 59,
      chapter: 121,
      value: [
        links.tsezguerraBattera,
        links.tsezguerraGon,
        links.tsezguerraKillua,
      ],
    },
    {
      episode: 60,
      chapter: 126,
      value: [
        links.tsezguerraBattera,
        links.tsezguerraGonPasses,
        links.tsezguerraKilluaPasses,
      ],
    },
    {
      episode: 69,
      chapter: 160,
      value: [
        links.tsezguerraBattera,
        links.tsezguerraGonAlly,
        links.tsezguerraKilluaAlly,
      ],
    },
    {
      episode: 72,
      chapter: 170,
      value: [
        links.tsezguerraBattera,
        links.tsezguerraGonDelay,
        links.tsezguerraKilluaDelay,
      ],
    },
    {
      episode: 73,
      chapter: 174,
      value: [
        links.tsezguerraBatteraReason,
        links.tsezguerraGonDelay,
        links.tsezguerraKilluaDelay,
      ],
    },
  ],
  'puhat': [
    { episode: 60, chapter: 125, value: [links.puhatGon, links.puhatKillua] },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
