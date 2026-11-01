import type { Relationship, Timeline } from '~/data/types'

/**
 * Facts and threshold revisions: docs/content-provenance/hunter-x-hunter-relationships.json.
 * Except Ging's, every entry pins an episode and a chapter it adapts, and
 * its wording is what both pages show by then; where the media differ, the
 * cards keep to what they share. Chrollo is linked only from 54/104, the
 * first such pair after the episode that names him (#974).
 */
const links = {
  // Ging Freecss
  gingGon: {
    character: 'gon-freecss',
    type: { en: 'Son he left', it: 'Figlio che ha lasciato' },
    summary: {
      en: 'Ging left Gon on Whale Island as a baby, and on a tape he left for him he asks Gon whether he wants to see him.',
      it: 'Ging ha lasciato Gon in fasce sull’Isola Balena e, su una cassetta lasciata per lui, gli chiede se vuole vederlo.',
    },
  },
  gingMito: {
    character: 'mito-freecss',
    type: { en: 'Cousin', it: 'Cugina' },
    summary: {
      en: 'When Ging brought his baby son back to Whale Island, his cousin Mito took the boy in and raised him.',
      it: 'Quando Ging ha riportato il figlio piccolo sull’Isola Balena, sua cugina Myto ha preso con sé il bambino e lo ha cresciuto.',
    },
  },
  // Anime wording: episode 37 has the grandmother asked, not Mito taking
  // the boy in (chapter 65).
  gingMitoEpisode: {
    character: 'mito-freecss',
    type: { en: 'Cousin', it: 'Cugina' },
    summary: {
      en: 'Ging, Mito’s cousin, came back to Whale Island with his baby son and asked his grandmother to look after the boy.',
      it: 'Ging, cugino di Myto, è tornato sull’Isola Balena con il figlio in fasce e ha chiesto a sua nonna di occuparsi del bambino.',
    },
  },
  gingKite: {
    character: 'kite',
    type: { en: 'Student', it: 'Allievo' },
    summary: {
      en: 'Ging trained Kite and then challenged him to track him down.',
      it: 'Ging ha addestrato Kaito e poi lo ha sfidato a trovarlo.',
    },
  },
  // Melody
  melodyKurapika: {
    character: 'kurapika',
    type: { en: 'Applicant she backs', it: 'Candidato a cui dà ragione' },
    summary: {
      en: 'Melody applies for the same bodyguard job as Kurapika. When his chain reacts in front of Squala, she backs him: she heard Squala’s heart speed up.',
      it: 'Melody si candida come guardia del corpo per lo stesso lavoro di Kurapika. Quando la sua catena reagisce davanti a Squala, gli dà ragione: ha sentito il cuore di Squala accelerare.',
    },
  },
  melodyKurapikaEyes: {
    character: 'kurapika',
    type: {
      en: 'Bodyguard who tells her his secret',
      it: 'Guardia del corpo che le confida il suo segreto',
    },
    summary: {
      en: 'On guard with Kurapika at the front entrance of the auction, Melody asks him about the Scarlet Eyes, having heard rage in his heart. He tells her he means to bring his people’s eyes back, and she tells him she is looking for a cursed sonata, to destroy it.',
      it: 'Di guardia con Kurapika all’ingresso principale dell’asta, Melody gli chiede degli occhi scarlatti, perché ha sentito rabbia nel suo cuore. Lui le dice che vuole riportare indietro gli occhi della sua gente, e lei gli racconta che cerca una sonata maledetta, per distruggerla.',
    },
  },
  melodySquala: {
    character: 'squala',
    type: {
      en: 'Applicant whose lie she hears',
      it: 'Candidato di cui sente la bugia',
    },
    summary: {
      en: 'When Kurapika’s chain points out Squala, Melody hears his heart speed up and says it has the rhythm of a liar. Squala answers that he cannot trust her or Kurapika.',
      it: 'Quando la catena di Kurapika indica Squala, Melody sente il suo cuore accelerare e dice che ha il ritmo di chi mente. Squala risponde che non può fidarsi né di lei né di Kurapika.',
    },
  },
  melodyDalzollene: {
    character: 'dalzollene',
    type: {
      en: 'Head bodyguard she calms',
      it: 'Capo delle guardie che calma',
    },
    summary: {
      en: 'When Dalzollene tries to stop Kurapika from going after Uvogin, Melody plays her flute and calms them both.',
      it: 'Quando Dalzorne prova a impedire a Kurapika di andare contro Uborghin, Melody suona il flauto e li calma entrambi.',
    },
  },
  melodyNeon: {
    character: 'neon-nostrade',
    type: { en: 'Girl who slips away from her', it: 'Ragazza che le sfugge' },
    summary: {
      en: 'Light sends Melody and Basho to take Neon home. While Neon shops, she slips away from them to go to the auction.',
      it: 'Light manda Melody e Basho a riportare Neon a casa. Mentre Neon fa acquisti, lei sfugge loro per andare all’asta.',
    },
  },
  melodyKillua: {
    character: 'killua',
    type: {
      en: 'Boy she helps against the Troupe',
      it: 'Ragazzo che aiuta contro la Brigata',
    },
    summary: {
      en: 'At Kurapika’s request Melody helps Killua watch the Troupe’s hideout. She hears its members moving, and the two follow them onto a train.',
      it: 'Su richiesta di Kurapika, Melody aiuta Killua a sorvegliare il covo della Brigata. Sente i membri muoversi, e i due li seguono fino su un treno.',
    },
  },
  melodyKilluaExchange: {
    character: 'killua',
    type: {
      en: 'Boy she helps against the Troupe',
      it: 'Ragazzo che aiuta contro la Brigata',
    },
    summary: {
      en: 'Melody helps Killua watch the Troupe’s hideout and follows its members onto a train with him. At the exchange of hostages she confirms that Killua is not being controlled.',
      it: 'Melody aiuta Killua a sorvegliare il covo della Brigata e segue i suoi membri fino su un treno insieme a lui. Allo scambio degli ostaggi conferma che Killua non è controllato.',
    },
  },
  melodyPakunoda: {
    character: 'pakunoda',
    type: {
      en: 'Troupe member whose word she checks',
      it: 'Membro della Brigata di cui verifica le parole',
    },
    summary: {
      en: 'When Pakunoda meets Kurapika alone, Melody confirms that she is telling the truth.',
      it: 'Quando Pakunoda incontra Kurapika da sola, Melody conferma che dice la verità.',
    },
  },
  // Basho
  bashoSquala: {
    character: 'squala',
    type: {
      en: 'Applicant he makes confess',
      it: 'Candidato che costringe a confessare',
    },
    summary: {
      en: 'Basho writes a haiku saying that whoever lies to his question will burn, then asks each applicant whether they are a plant. Squala gives in and confesses.',
      it: 'Basho scrive un haiku secondo cui chi mente alla sua domanda brucerà, poi chiede a ogni candidato se è un infiltrato. Squala cede e confessa.',
    },
  },
  bashoKurapika: {
    character: 'kurapika',
    type: {
      en: 'Applicant who exposes the plant',
      it: 'Candidato che smaschera l’infiltrato',
    },
    summary: {
      en: 'Basho punches one of the figures in black and guesses that it is made of aura. Kurapika finds the one controlling them, Shachmono Tocino, and explains to Basho how he spotted him.',
      it: 'Basho colpisce con un pugno una delle figure vestite di nero e intuisce che è fatta di aura. Kurapika trova chi le controlla, Shachmono Tocino, e spiega a Basho come lo ha scoperto.',
    },
  },
  bashoNeon: {
    character: 'neon-nostrade',
    type: { en: 'Girl who slips away from him', it: 'Ragazza che gli sfugge' },
    summary: {
      en: 'Light sends Basho and Melody to take Neon home. While Neon shops, she slips away from them, and Kurapika finds with his chain that she has gone to the auction.',
      it: 'Light manda Basho e Melody a riportare Neon a casa. Mentre Neon fa acquisti, lei sfugge loro, e Kurapika scopre con la sua catena che è andata all’asta.',
    },
  },
  // Baise
  baiseSquala: {
    character: 'squala',
    type: { en: 'Plant she kisses', it: 'Infiltrato che bacia' },
    summary: {
      en: 'When Squala refuses to reveal the orders he has given, Baise kisses him. Her Nen makes him her servant, and he talks.',
      it: 'Quando Squala si rifiuta di rivelare gli ordini che ha dato, Versé lo bacia. Il suo Nen lo rende suo servitore, e lui parla.',
    },
  },
  baiseShizuku: {
    character: 'shizuku',
    type: {
      en: 'Troupe member who kills her',
      it: 'Membro della Brigata che la uccide',
    },
    summary: {
      en: 'When Baise and Ivlenkov run out of the auction hall, Shizuku is waiting outside and kills them with her vacuum cleaner, Blinky.',
      it: 'Quando Versé e Ivlenkov scappano dalla sala dell’asta, fuori li aspetta Shizuku, che li uccide con il suo aspirapolvere, Deme.',
    },
  },
  baiseTocino: {
    character: 'shachmono-tocino',
    type: {
      en: 'Bodyguard who tries to shield her',
      it: 'Guardia del corpo che prova a proteggerla',
    },
    summary: {
      en: 'When a Troupe member opens fire on the auction hall, Tocino tries to shield himself, Baise and Ivlenkov with his Nen, but the bullets get through.',
      it: 'Quando un membro della Brigata apre il fuoco sulla sala dell’asta, Tocino prova a proteggere sé stesso, Versé e Ivlenkov con il suo Nen, ma i proiettili passano.',
    },
  },
  baiseIvlenkov: {
    character: 'ivlenkov',
    type: {
      en: 'Bodyguard she runs with',
      it: 'Guardia del corpo con cui fugge',
    },
    summary: {
      en: 'Baise goes into the Underground Auction with Ivlenkov and Tocino, and when the shooting starts she and Ivlenkov run out of the hall.',
      it: 'Versé entra all’asta sotterranea con Ivlenkov e Tocino, e quando cominciano gli spari lei e Ivlenkov scappano dalla sala.',
    },
  },
  // Squala
  squalaKurapika: {
    character: 'kurapika',
    type: { en: 'Applicant who exposes him', it: 'Candidato che lo smaschera' },
    summary: {
      en: 'Kurapika holds his chain in front of each applicant, and it reacts in front of Squala. Squala says it proves nothing, until Basho’s haiku makes him confess.',
      it: 'Kurapika passa la sua catena davanti a ogni candidato, e la catena reagisce davanti a Squala. Squala dice che non prova niente, finché l’haiku di Basho non lo costringe a confessare.',
    },
  },
  squalaKurapikaWarns: {
    character: 'kurapika',
    type: {
      en: 'Bodyguard who warns him',
      it: 'Guardia del corpo che lo avverte',
    },
    summary: {
      en: 'Kurapika once exposed Squala as a plant. Now he warns Squala that the Troupe is on its way to the hotel, and Squala leaves with the Scarlet Eyes.',
      it: 'Un tempo Kurapika ha smascherato Squala come infiltrato. Ora lo avverte che la Brigata sta arrivando all’albergo, e Squala se ne va con gli occhi scarlatti.',
    },
  },
  squalaMelody: {
    character: 'melody',
    type: {
      en: 'Applicant who hears his lie',
      it: 'Candidata che sente la sua bugia',
    },
    summary: {
      en: 'When Kurapika’s chain points Squala out, Melody hears his heart speed up and says it has the rhythm of a liar.',
      it: 'Quando la catena di Kurapika indica Squala, Melody sente il suo cuore accelerare e dice che ha il ritmo di chi mente.',
    },
  },
  squalaBasho: {
    character: 'basho',
    type: {
      en: 'Applicant who makes him confess',
      it: 'Candidato che lo costringe a confessare',
    },
    summary: {
      en: 'Basho writes a haiku that will burn whoever lies to his question, and Squala gives in and confesses that he is a plant.',
      it: 'Basho scrive un haiku che brucerà chi mente alla sua domanda, e Squala cede e confessa di essere un infiltrato.',
    },
  },
  squalaBaise: {
    character: 'baise',
    type: {
      en: 'Applicant who makes him talk',
      it: 'Candidata che lo fa parlare',
    },
    summary: {
      en: 'Squala says he will not reveal his orders, even under torture. Baise kisses him, her Nen makes him her servant, and he talks.',
      it: 'Squala dice che non rivelerà i suoi ordini, nemmeno sotto tortura. Versé lo bacia, il suo Nen lo rende suo servitore, e lui parla.',
    },
  },
  squalaLight: {
    character: 'light-nostrade',
    type: { en: 'Boss who hired him', it: 'Capo che lo ha assunto' },
    summary: {
      en: 'After the attack on the auction, Squala tells the other bodyguards that the one who hired them is Neon’s father, Light Nostrade.',
      it: 'Dopo l’attacco all’asta, Squala dice alle altre guardie del corpo che chi li ha assunti è il padre di Neon, Light Nostrad.',
    },
  },
  squalaEliza: {
    character: 'eliza',
    type: { en: 'Woman he loves', it: 'Donna che ama' },
    summary: {
      en: 'While Eliza is out shopping with Neon, Squala waits at the hotel with his dogs and thinks about their future together.',
      it: 'Mentre Eliza è fuori a fare acquisti con Neon, Squala aspetta in albergo con i suoi cani e pensa al loro futuro insieme.',
    },
  },
  squalaPakunoda: {
    character: 'pakunoda',
    type: {
      en: 'Troupe member who questions him',
      it: 'Membro della Brigata che lo interroga',
    },
    summary: {
      en: 'Pakunoda holds a gun on Squala, breaks his arm and asks him about the chain user. He says he knows no one like that, but she reads Eliza’s name in his memories.',
      it: 'Pakunoda punta una pistola contro Squala, gli rompe un braccio e gli chiede dell’utilizzatore di catene. Lui dice di non conoscere nessuno così, ma lei legge il nome di Eliza nei suoi ricordi.',
    },
  },
  squalaNobunaga: {
    character: 'nobunaga',
    type: {
      en: 'Troupe member who kills him',
      it: 'Membro della Brigata che lo uccide',
    },
    summary: {
      en: 'Nobunaga, Pakunoda and Kortopi catch Squala in his car. While Pakunoda questions him, Squala reacts to Eliza’s name, and Nobunaga cuts off his head.',
      it: 'Nobunaga, Pakunoda e Kortopi bloccano Squala nella sua auto. Mentre Pakunoda lo interroga, Squala reagisce al nome di Eliza, e Nobunaga gli taglia la testa.',
    },
  },
  // Shachmono Tocino
  tocinoKurapika: {
    character: 'kurapika',
    type: { en: 'Applicant who exposes him', it: 'Candidato che lo smaschera' },
    summary: {
      en: 'Kurapika notices that Tocino is the only one the figures in black never attack, holds a dagger to him and gives him until three, and Tocino calls them off.',
      it: 'Kurapika nota che Tocino è l’unico che le figure vestite di nero non attaccano mai, gli punta contro un pugnale e gli dà tempo fino a tre, e Tocino le richiama.',
    },
  },
  tocinoBasho: {
    character: 'basho',
    type: {
      en: 'Applicant who sees through his figures',
      it: 'Candidato che capisce le sue figure',
    },
    summary: {
      en: 'Basho punches one of Tocino’s figures in black and can tell that it is made of aura.',
      it: 'Basho colpisce con un pugno una delle figure vestite di nero di Tocino e capisce che è fatta di aura.',
    },
  },
  tocinoBaise: {
    character: 'baise',
    type: {
      en: 'Bodyguard he tries to shield',
      it: 'Guardia del corpo che prova a proteggere',
    },
    summary: {
      en: 'When a Troupe member opens fire on the auction hall, Tocino tries to shield himself, Baise and Ivlenkov with his Nen, but the bullets get through.',
      it: 'Quando un membro della Brigata apre il fuoco sulla sala dell’asta, Tocino prova a proteggere sé stesso, Versé e Ivlenkov con il suo Nen, ma i proiettili passano.',
    },
  },
  tocinoIvlenkov: {
    character: 'ivlenkov',
    type: {
      en: 'Bodyguard he tries to shield',
      it: 'Guardia del corpo che prova a proteggere',
    },
    summary: {
      en: 'When a Troupe member opens fire on the auction hall, Tocino tries to shield himself, Ivlenkov and Baise with his Nen, but the bullets get through.',
      it: 'Quando un membro della Brigata apre il fuoco sulla sala dell’asta, Tocino prova a proteggere sé stesso, Ivlenkov e Versé con il suo Nen, ma i proiettili passano.',
    },
  },
  tocinoFranklin: {
    character: 'franklin',
    type: {
      en: 'Troupe member whose bullets kill him',
      it: 'Membro della Brigata i cui proiettili lo uccidono',
    },
    summary: {
      en: 'At the Underground Auction Franklin fires bullets of aura into the hall. Tocino’s Nen cannot stop them, and before he dies he realizes that they are made of aura.',
      it: 'All’asta sotterranea Franklin spara proiettili di aura sulla sala. Il Nen di Tocino non riesce a fermarli, e prima di morire Tocino capisce che sono fatti di aura.',
    },
  },
  // Dalzollene
  dalzolleneKurapika: {
    character: 'kurapika',
    type: { en: 'Bodyguard he hires', it: 'Guardia del corpo che assume' },
    summary: {
      en: 'Dalzollene hires Kurapika with the three other applicants who come back with their items. When Kurapika asks who is after the boss, Dalzollene brushes the question aside.',
      it: 'Dalzorne assume Kurapika con gli altri tre candidati che tornano con il loro oggetto. Quando Kurapika chiede chi ce l’abbia con il capo, Dalzorne liquida la domanda.',
    },
  },
  // Kurapika asks leave to try in chapter 77 and resists in episode 44:
  // the card says only that Dalzollene tries to stop him.
  dalzolleneKurapikaUvogin: {
    character: 'kurapika',
    type: {
      en: 'Bodyguard who goes after Uvogin',
      it: 'Guardia del corpo che va contro Uborghin',
    },
    summary: {
      en: 'Dalzollene hires Kurapika. When Kurapika sets out after Uvogin, Dalzollene tries to stop him, but once Melody’s flute calms them, Kurapika captures Uvogin with his chain.',
      it: 'Dalzorne assume Kurapika. Quando Kurapika vuole andare contro Uborghin, Dalzorne prova a fermarlo, ma dopo che il flauto di Melody li ha calmati, Kurapika cattura Uborghin con la sua catena.',
    },
  },
  dalzolleneNeon: {
    character: 'neon-nostrade',
    type: { en: 'Girl he guards', it: 'Ragazza che protegge' },
    summary: {
      en: 'Dalzollene escorts Neon toward a hotel in Yorknew City and asks her to write fortunes for some men who know her father.',
      it: 'Dalzorne scorta Neon verso un albergo di York Shin City e le chiede di scrivere le profezie di alcuni uomini che conoscono suo padre.',
    },
  },
  dalzolleneMelody: {
    character: 'melody',
    type: {
      en: 'Bodyguard who calms him',
      it: 'Guardia del corpo che lo calma',
    },
    summary: {
      en: 'When Dalzollene tries to stop Kurapika from going after Uvogin, Melody plays her flute and calms them both.',
      it: 'Quando Dalzorne prova a impedire a Kurapika di andare contro Uborghin, Melody suona il flauto e li calma entrambi.',
    },
  },
  dalzolleneUvogin: {
    character: 'uvogin',
    type: { en: 'Prisoner he questions', it: 'Prigioniero che interroga' },
    summary: {
      en: 'Dalzollene questions the captured Uvogin and tries to stab him, but the blade breaks against Uvogin’s Nen. Uvogin offers to spare the bodyguards if they let him go.',
      it: 'Dalzorne interroga Uborghin prigioniero e cerca di colpirlo con la spada, ma la lama si spezza contro il suo Nen. Uborghin promette di risparmiare le guardie del corpo se lo lasciano andare.',
    },
  },
  dalzollenePhinks: {
    character: 'phinks',
    type: {
      en: 'Troupe member who comes for Uvogin',
      it: 'Membro della Brigata che viene a prendere Uborghin',
    },
    summary: {
      en: 'Phinks and other Troupe members, disguised as Mafia men, reach the place where the bodyguards hold Uvogin. They kill Dalzollene and free Uvogin.',
      it: 'Phinks e altri membri della Brigata, travestiti da mafiosi, raggiungono il posto dove le guardie del corpo tengono Uborghin. Uccidono Dalzorne e liberano Uborghin.',
    },
  },
  // Neon Nostrade
  neonDalzollene: {
    character: 'dalzollene',
    type: {
      en: 'Head of her bodyguards',
      it: 'Capo delle sue guardie del corpo',
    },
    summary: {
      en: 'Dalzollene escorts Neon toward her hotel in Yorknew City and asks her to write fortunes for some men who know her father.',
      it: 'Dalzorne scorta Neon verso il suo albergo di York Shin City e le chiede di scrivere le profezie di alcuni uomini che conoscono suo padre.',
    },
  },
  neonLight: {
    character: 'light-nostrade',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Neon writes fortunes for her father’s friends, and her father keeps her away from the Underground Auction.',
      it: 'Neon scrive le profezie per gli amici di suo padre, e il padre la tiene lontana dall’asta sotterranea.',
    },
  },
  neonLightHome: {
    character: 'light-nostrade',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Neon writes fortunes for her father’s friends. Her father keeps her away from the auction and sends her home, promising her another one, but she slips away to go to the auction.',
      it: 'Neon scrive le profezie per gli amici di suo padre. Il padre la tiene lontana dall’asta e la manda a casa, promettendole un’altra asta, ma lei gli sfugge per andarci.',
    },
  },
  neonLightEyes: {
    character: 'light-nostrade',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Neon writes fortunes for her father’s friends. While she is in hospital, her father has the Scarlet Eyes bought for her, and when she wakes she thanks him.',
      it: 'Neon scrive le profezie per gli amici di suo padre. Mentre lei è in ospedale, il padre le fa comprare gli occhi scarlatti, e quando si sveglia lei lo ringrazia.',
    },
  },
  neonKurapika: {
    character: 'kurapika',
    type: {
      en: 'Bodyguard who speaks to her father',
      it: 'Guardia del corpo che parla con suo padre',
    },
    summary: {
      en: 'After the attack on the auction, the bodyguards tell Neon that some of them died in it, and Kurapika speaks to her father for them.',
      it: 'Dopo l’attacco all’asta, le guardie del corpo raccontano a Neon che alcune di loro sono morte, e Kurapika parla con suo padre a nome di tutti.',
    },
  },
  neonKurapikaEyes: {
    character: 'kurapika',
    type: {
      en: 'Bodyguard who wins her the eyes',
      it: 'Guardia del corpo che le compra gli occhi',
    },
    summary: {
      en: 'On her father’s orders, Kurapika bids for the Scarlet Eyes at the auction and wins them for Neon at 2.9 billion Jenny.',
      it: 'Su ordine di suo padre, Kurapika fa offerte per gli occhi scarlatti all’asta e li compra per Neon a 2,9 miliardi di Jenny.',
    },
  },
  neonBasho: {
    character: 'basho',
    type: {
      en: 'Bodyguard she slips away from',
      it: 'Guardia del corpo a cui sfugge',
    },
    summary: {
      en: 'Basho and Melody are sent to take Neon home. While she shops, she slips away from them to go to the auction.',
      it: 'Basho e Melody devono riportare Neon a casa. Mentre fa acquisti, lei sfugge loro per andare all’asta.',
    },
  },
  neonMelody: {
    character: 'melody',
    type: {
      en: 'Bodyguard she slips away from',
      it: 'Guardia del corpo a cui sfugge',
    },
    summary: {
      en: 'Melody and Basho are sent to take Neon home. While she shops, she slips away from them to go to the auction.',
      it: 'Melody e Basho devono riportare Neon a casa. Mentre fa acquisti, lei sfugge loro per andare all’asta.',
    },
  },
  neonChrollo: {
    character: 'chrollo',
    type: { en: 'Man who takes her power', it: 'Uomo che le prende il potere' },
    summary: {
      en: 'Chrollo gets Neon past security into the auction and has her write his fortune. Then he knocks her out with a quick blow; he has taken her power.',
      it: 'Quoll fa superare a Neon i controlli di sicurezza dell’asta e le fa scrivere la sua profezia. Poi la stordisce con un colpo rapido; le ha preso il potere.',
    },
  },
  // Ivlenkov
  ivlenkovShizuku: {
    character: 'shizuku',
    type: {
      en: 'Troupe member who kills him',
      it: 'Membro della Brigata che lo uccide',
    },
    summary: {
      en: 'When Ivlenkov and Baise run out of the auction hall, Shizuku is waiting outside and kills them with her vacuum cleaner, Blinky.',
      it: 'Quando Ivlenkov e Versé scappano dalla sala dell’asta, fuori li aspetta Shizuku, che li uccide con il suo aspirapolvere, Deme.',
    },
  },
  // Machi
  machiHisoka: {
    character: 'hisoka',
    type: {
      en: 'Member she calls to Yorknew City',
      it: 'Membro che chiama a York Shin City',
    },
    summary: {
      en: 'After Hisoka’s match with Kastro, Machi sews his arms back on with threads of Nen and tells him to be in Yorknew City by August 30, when all the Troupe’s members gather.',
      it: 'Dopo l’incontro di Hisoka con Kastro, Machi gli ricuce le braccia con fili di Nen e gli dice di essere a York Shin City entro il 30 agosto, quando tutti i membri della Brigata si riuniscono.',
    },
  },
  machiHisokaPair: {
    character: 'hisoka',
    type: {
      en: 'Member she is paired with',
      it: 'Membro con cui finisce in coppia',
    },
    summary: {
      en: 'Machi called Hisoka to Yorknew City for the Troupe’s gathering. When the members pair up to look for the chain user, she is left without a partner and has to go with Hisoka.',
      it: 'Machi ha chiamato Hisoka a York Shin City per il raduno della Brigata. Quando i membri si dividono in coppie per cercare l’utilizzatore di catene, lei resta senza compagno e deve andare con Hisoka.',
    },
  },
  machiUvogin: {
    character: 'uvogin',
    type: { en: 'Comrade she tracks', it: 'Compagno che segue' },
    summary: {
      en: 'When a chain snatches Uvogin away, Machi throws a needle with a thread of Nen onto him so that the Troupe can follow him, and later the Troupe frees him.',
      it: 'Quando una catena trascina via Uborghin, Machi gli lancia addosso un ago con un filo di Nen perché la Brigata possa seguirlo, e più tardi la Brigata lo libera.',
    },
  },
  machiNobunaga: {
    character: 'nobunaga',
    type: { en: 'Member she works with', it: 'Membro con cui fa coppia' },
    summary: {
      en: 'Machi and Nobunaga notice they are being watched, argue over whether to bring the chain user back dead or alive and settle it with a coin. Then they lead their followers to an empty part of the city.',
      it: 'Machi e Nobunaga si accorgono di essere osservati, discutono se riportare l’utilizzatore di catene vivo o morto e decidono con una moneta. Poi portano chi li segue in una zona deserta della città.',
    },
  },
  machiGon: {
    character: 'gon-freecss',
    type: { en: 'Boy she catches', it: 'Ragazzo che cattura' },
    summary: {
      en: 'Gon and Killua tail Machi and Nobunaga into a trap. When Gon tries to slip away, Machi is already behind him.',
      it: 'Gon e Killua seguono Machi e Nobunaga fino in una trappola. Quando Gon cerca di svignarsela, Machi è già alle sue spalle.',
    },
  },
  machiGonThread: {
    character: 'gon-freecss',
    type: {
      en: 'Boy she holds on her thread',
      it: 'Ragazzo che tiene con il suo filo',
    },
    summary: {
      en: 'Machi catches Gon in the Troupe’s trap. Later she holds him on her thread in the lobby of the Hotel Beitacle, and when the lights go out she pulls him back before he can get away.',
      it: 'Machi cattura Gon nella trappola della Brigata. Più tardi lo tiene con il suo filo nell’atrio dell’Hotel Beitacle, e quando le luci si spengono lo tira indietro prima che possa scappare.',
    },
  },
  machiPakunoda: {
    character: 'pakunoda',
    type: {
      en: 'Member she springs the trap with',
      it: 'Membro con cui fa scattare la trappola',
    },
    summary: {
      en: 'Pakunoda follows the boys who tail Machi and Nobunaga, and with Machi she asks Gon whether he knows the chain user.',
      it: 'Pakunoda segue i ragazzi che pedinano Machi e Nobunaga, e insieme a Machi chiede a Gon se conosce l’utilizzatore di catene.',
    },
  },
  machiPakunodaSide: {
    character: 'pakunoda',
    type: {
      en: 'Member she stands by',
      it: 'Membro dalla cui parte si schiera',
    },
    summary: {
      en: 'When Phinks will not let Pakunoda leave with the hostages, Machi takes her side, and in the end the others let Pakunoda go.',
      it: 'Quando Phinks non vuole lasciar partire Pakunoda con gli ostaggi, Machi si schiera dalla sua parte, e alla fine gli altri la lasciano andare.',
    },
  },
  machiKillua: {
    character: 'killua',
    type: {
      en: 'Boy who tries to kill her',
      it: 'Ragazzo che cerca di ucciderla',
    },
    summary: {
      en: 'In the blackout at the Hotel Beitacle, Killua frees himself and tries to kill Machi to free Gon, and Machi traps his hand in her muscles.',
      it: 'Durante il buio all’Hotel Beitacle, Killua si libera e cerca di uccidere Machi per liberare Gon, e Machi gli blocca la mano nei suoi muscoli.',
    },
  },
  machiChrollo: {
    character: 'chrollo',
    type: { en: 'Leader', it: 'Capo' },
    summary: {
      en: 'Machi waits with Chrollo and their two prisoners in the hotel lobby. After the blackout they find Chrollo gone, and a note from the chain user says he will die if Pakunoda talks.',
      it: 'Machi aspetta con Quoll e i loro due prigionieri nell’atrio dell’albergo. Dopo il buio scoprono che Quoll è sparito, e un biglietto dell’utilizzatore di catene dice che morirà se Pakunoda parla.',
    },
  },
  machiPhinks: {
    character: 'phinks',
    type: { en: 'Member she stands against', it: 'Membro a cui si oppone' },
    summary: {
      en: 'Phinks will not let Pakunoda leave with the hostages without saying where the chain user is, and Machi takes Pakunoda’s side against him.',
      it: 'Phinks non vuole lasciar partire Pakunoda con gli ostaggi senza che dica dov’è l’utilizzatore di catene, e Machi si schiera con Pakunoda contro di lui.',
    },
  },
  // Shizuku
  shizukuGon: {
    character: 'gon-freecss',
    type: {
      en: 'Boy who beats her at arm wrestling',
      it: 'Ragazzo che la batte a braccio di ferro',
    },
    summary: {
      en: 'Shizuku challenges Gon at arm wrestling for the prize, a diamond, and loses after making him try for real to win.',
      it: 'Shizuku sfida Gon a braccio di ferro per il premio, un diamante, e perde dopo averlo costretto a impegnarsi davvero per vincere.',
    },
  },
  shizukuBaise: {
    character: 'baise',
    type: { en: 'Bodyguard she kills', it: 'Guardia del corpo che uccide' },
    summary: {
      en: 'When Baise runs out of the auction hall with Ivlenkov, Shizuku is waiting outside and kills them both with Blinky.',
      it: 'Quando Versé scappa dalla sala dell’asta con Ivlenkov, Shizuku li aspetta fuori e li uccide entrambi con Deme.',
    },
  },
  shizukuIvlenkov: {
    character: 'ivlenkov',
    type: { en: 'Bodyguard she kills', it: 'Guardia del corpo che uccide' },
    summary: {
      en: 'When Ivlenkov runs out of the auction hall with Baise, Shizuku is waiting outside and kills them both with Blinky.',
      it: 'Quando Ivlenkov scappa dalla sala dell’asta con Versé, Shizuku li aspetta fuori e li uccide entrambi con Deme.',
    },
  },
  shizukuUvogin: {
    character: 'uvogin',
    type: {
      en: 'Comrade she frees of poison',
      it: 'Compagno che libera dal veleno',
    },
    summary: {
      en: 'After Uvogin’s fight with the Shadow Beasts, Shizuku tells him that Blinky can suck out the poison but not the leeches, because it does not take living things. Once the Troupe frees him, she sucks the poison out.',
      it: 'Dopo lo scontro di Uborghin con le Bestie dell’Ombra, Shizuku gli dice che Deme può aspirare il veleno ma non le sanguisughe, perché non prende le cose vive. Quando la Brigata lo libera, gli aspira il veleno.',
    },
  },
  shizukuKillua: {
    character: 'killua',
    type: { en: 'Boy who spots her', it: 'Ragazzo che la nota' },
    summary: {
      en: 'At the Troupe’s hideout, Killua spots Shizuku, the woman who arm-wrestled Gon.',
      it: 'Nel covo della Brigata, Killua nota Shizuku, la donna che ha sfidato Gon a braccio di ferro.',
    },
  },
  shizukuNobunaga: {
    character: 'nobunaga',
    type: {
      en: 'Member she reminds of the rule',
      it: 'Membro a cui ricorda la regola',
    },
    summary: {
      en: 'When Nobunaga and Feitan face off over Gon at the hideout, Shizuku reminds Nobunaga that members of the Troupe may not fight each other, and the two settle it with a coin.',
      it: 'Quando Nobunaga e Feitan si affrontano per Gon nel covo, Shizuku ricorda a Nobunaga che i membri della Brigata non possono combattere tra loro, e i due decidono con una moneta.',
    },
  },
  shizukuFeitan: {
    character: 'feitan',
    type: {
      en: 'Member she stops from fighting',
      it: 'Membro che ferma dal combattere',
    },
    summary: {
      en: 'When Feitan and Nobunaga face off over Gon at the hideout, Shizuku reminds Nobunaga that members of the Troupe may not fight each other, and the two settle it with a coin.',
      it: 'Quando Feitan e Nobunaga si affrontano per Gon nel covo, Shizuku ricorda a Nobunaga che i membri della Brigata non possono combattere tra loro, e i due decidono con una moneta.',
    },
  },
  shizukuChrollo: {
    character: 'chrollo',
    type: {
      en: 'Leader who writes her fortune',
      it: 'Capo che le scrive la profezia',
    },
    summary: {
      en: 'Chrollo writes Shizuku’s fortune with the power he took from Neon, and with his help she works out what it says: that she will die within the next week.',
      it: 'Quoll scrive la profezia di Shizuku con il potere che ha preso a Neon, e con il suo aiuto lei capisce cosa dice: che morirà entro la prossima settimana.',
    },
  },
  // Uvogin
  uvoginWorm: {
    character: 'worm',
    type: {
      en: 'Shadow Beast he blasts',
      it: 'Bestia dell’Ombra che fa saltare in aria',
    },
    summary: {
      en: 'Worm punches Uvogin in the face and gets a harder punch back. When Worm drags Uvogin’s arm under the ground, Uvogin blasts a crater with his Big Bang Impact and leaves him badly hurt.',
      it: 'Lombrico colpisce Uborghin in faccia e riceve un pugno più forte. Quando Lombrico gli trascina il braccio sotto terra, Uborghin apre un cratere con il suo Colpo del Big Bang e lo lascia gravemente ferito.',
    },
  },
  uvoginRabidDog: {
    character: 'rabid-dog',
    type: { en: 'Shadow Beast he kills', it: 'Bestia dell’Ombra che uccide' },
    summary: {
      en: 'Rabid Dog’s poisoned bites bring Uvogin down. Uvogin spits a piece of Leech’s skull through Rabid Dog’s head and kills him.',
      it: 'I morsi avvelenati di Cane selvatico mettono a terra Uborghin. Uborghin gli sputa un pezzo del cranio di Sanguisuga attraverso la testa e lo uccide.',
    },
  },
  uvoginLeech: {
    character: 'leech',
    type: { en: 'Shadow Beast he kills', it: 'Bestia dell’Ombra che uccide' },
    summary: {
      en: 'While the poison holds Uvogin down, Leech fills his body with leeches. Uvogin bites into Leech’s head and kills him.',
      it: 'Mentre il veleno tiene a terra Uborghin, Sanguisuga gli riempie il corpo di sanguisughe. Uborghin gli affonda i denti nella testa e lo uccide.',
    },
  },
  uvoginPorcupine: {
    character: 'porcupine',
    type: {
      en: 'Shadow Beast he screams off',
      it: 'Bestia dell’Ombra di cui si libera urlando',
    },
    summary: {
      en: 'Porcupine’s hairs turn into needles that catch Uvogin’s fist and hold it. Uvogin frees himself by screaming at him as loud as he can.',
      it: 'I peli di Porcospino diventano aghi che bloccano il pugno di Uborghin e lo trattengono. Uborghin se ne libera urlandogli contro più forte che può.',
    },
  },
  uvoginKurapika: {
    character: 'kurapika',
    type: {
      en: 'Chain user who captures him',
      it: 'Utilizzatore di catene che lo cattura',
    },
    summary: {
      en: 'After Uvogin’s fight with the Shadow Beasts, a chain wraps around him and pulls him away from the Troupe. Kurapika drives off with him and silences him when he tries to talk.',
      it: 'Dopo lo scontro di Uborghin con le Bestie dell’Ombra, una catena lo avvolge e lo trascina via dalla Brigata. Kurapika parte in auto con lui e lo zittisce quando prova a parlare.',
    },
  },
  uvoginKurapikaPunch: {
    character: 'kurapika',
    type: {
      en: 'Chain user who captures him',
      it: 'Utilizzatore di catene che lo cattura',
    },
    summary: {
      en: 'Kurapika captures Uvogin with his chain. When Uvogin says that the Troupe killed all the guests at the auction, Kurapika punches him in the face.',
      it: 'Kurapika cattura Uborghin con la sua catena. Quando Uborghin dice che la Brigata ha ucciso tutti gli ospiti dell’asta, Kurapika gli dà un pugno in faccia.',
    },
  },
  uvoginKurapikaHunt: {
    character: 'kurapika',
    type: {
      en: 'Chain user he hunts',
      it: 'Utilizzatore di catene a cui dà la caccia',
    },
    summary: {
      en: 'Kurapika captures Uvogin with his chain and punches him. Once he is free, Uvogin hunts the chain user and finds Kurapika, who has stayed behind alone to wait for him.',
      it: 'Kurapika cattura Uborghin con la sua catena e lo colpisce con un pugno. Una volta libero, Uborghin dà la caccia all’utilizzatore di catene e trova Kurapika, che è rimasto da solo ad aspettarlo.',
    },
  },
  uvoginKurapikaDeath: {
    character: 'kurapika',
    type: {
      en: 'Chain user who kills him',
      it: 'Utilizzatore di catene che lo uccide',
    },
    summary: {
      en: 'Kurapika tells Uvogin he is avenging the Kurta Clan, catches him in a chain hidden with In and beats him. Uvogin will not say where the other members are, and Kurapika’s Judgment Chain kills him.',
      it: 'Kurapika dice a Uborghin che sta vendicando il clan Kurta, lo cattura con una catena nascosta con l’In e lo picchia. Uborghin non vuole dire dove sono gli altri membri, e la Catena del Giudizio di Kurapika lo uccide.',
    },
  },
  uvoginDalzollene: {
    character: 'dalzollene',
    type: {
      en: 'Bodyguard who tries to stab him',
      it: 'Guardia del corpo che cerca di trafiggerlo',
    },
    summary: {
      en: 'Dalzollene questions the captured Uvogin and tries to stab him, but the blade breaks against Uvogin’s Nen. Uvogin offers to spare the bodyguards if they let him go.',
      it: 'Dalzorne interroga Uborghin prigioniero e cerca di colpirlo con la spada, ma la lama si spezza contro il suo Nen. Uborghin promette di risparmiare le guardie del corpo se lo lasciano andare.',
    },
  },
  uvoginPhinks: {
    character: 'phinks',
    type: { en: 'Comrade who frees him', it: 'Compagno che lo libera' },
    summary: {
      en: 'Phinks and other Troupe members, disguised as Mafia men, reach the place where the bodyguards hold Uvogin. They kill Dalzollene and free him.',
      it: 'Phinks e altri membri della Brigata, travestiti da mafiosi, raggiungono il posto dove le guardie del corpo tengono Uborghin. Uccidono Dalzorne e lo liberano.',
    },
  },
  uvoginShizuku: {
    character: 'shizuku',
    type: {
      en: 'Comrade who takes out the poison',
      it: 'Compagna che gli toglie il veleno',
    },
    summary: {
      en: 'After the fight with the Shadow Beasts, Shizuku tells Uvogin that Blinky can suck out the poison but not the leeches. Once the Troupe frees him, she sucks the poison out.',
      it: 'Dopo lo scontro con le Bestie dell’Ombra, Shizuku dice a Uborghin che Deme può aspirare il veleno ma non le sanguisughe. Quando la Brigata lo libera, gli aspira il veleno.',
    },
  },
  uvoginShalnark: {
    character: 'shalnark',
    type: {
      en: 'Comrade who tracks the chain user for him',
      it: 'Compagno che cerca per lui l’utilizzatore di catene',
    },
    summary: {
      en: 'While Uvogin drinks beer to get rid of the leeches, Shalnark searches the Hunter website for him and finds that the building where he was held belongs to the Nostrade family.',
      it: 'Mentre Uborghin beve birra per liberarsi delle sanguisughe, Shalnark cerca per lui sul sito degli Hunter e scopre che l’edificio dove era tenuto prigioniero appartiene alla famiglia Nostrad.',
    },
  },
  uvoginChrollo: {
    character: 'chrollo',
    type: { en: 'Leader', it: 'Capo' },
    summary: {
      en: 'From the Troupe’s balloon, Uvogin tells Chrollo that the vault was already empty and that there may be a traitor among them. Chrollo convinces him there is none.',
      it: 'Dalla mongolfiera della Brigata, Uborghin dice a Quoll che il caveau era già vuoto e che tra loro potrebbe esserci un traditore. Quoll lo convince che non c’è.',
    },
  },
  // Feitan
  feitanFranklin: {
    character: 'franklin',
    type: {
      en: 'Member on the stage with him',
      it: 'Membro con lui sul palco',
    },
    summary: {
      en: 'Feitan walks onto the stage of the Underground Auction with Franklin and welcomes the guests. Then Franklin’s bullets of aura kill nearly everyone in the hall.',
      it: 'Feitan sale sul palco dell’asta sotterranea con Franklin e dà il benvenuto agli ospiti. Poi i proiettili di aura di Franklin uccidono quasi tutti i presenti.',
    },
  },
  feitanOwl: {
    character: 'owl',
    type: {
      en: 'Shadow Beast held prisoner',
      it: 'Bestia dell’Ombra tenuta prigioniera',
    },
    summary: {
      en: 'After the fight with the Shadow Beasts, Owl is held prisoner by the Troupe and tortured, with Feitan watching over him.',
      it: 'Dopo lo scontro con le Bestie dell’Ombra, Civetta è tenuto prigioniero dalla Brigata e torturato, con Feitan a sorvegliarlo.',
    },
  },
  feitanGon: {
    character: 'gon-freecss',
    type: { en: 'Boy he grabs', it: 'Ragazzo che blocca' },
    summary: {
      en: 'At the Troupe’s hideout Feitan recognizes Gon from Shizuku’s arm-wrestling match. When Gon slams Nobunaga’s hand down, Feitan grabs him from behind, and he lets Gon go only after a coin toss with Nobunaga.',
      it: 'Nel covo della Brigata Feitan riconosce Gon dalla sfida a braccio di ferro con Shizuku. Quando Gon schiaccia la mano di Nobunaga sul tavolo, Feitan lo afferra da dietro, e lo lascia andare solo dopo un lancio di moneta con Nobunaga.',
    },
  },
  feitanNobunaga: {
    character: 'nobunaga',
    type: { en: 'Member he faces off with', it: 'Membro con cui si affronta' },
    summary: {
      en: 'When Nobunaga tells Feitan to let Gon go, the two face off until they settle it with a coin, and Nobunaga wins.',
      it: 'Quando Nobunaga dice a Feitan di lasciare Gon, i due si affrontano finché non decidono con una moneta, e vince Nobunaga.',
    },
  },
  feitanPakunoda: {
    character: 'pakunoda',
    type: { en: 'Member he suspects', it: 'Membro di cui sospetta' },
    summary: {
      en: 'When Pakunoda comes back from the chain user and will not say where he is, Feitan suspects that the chain user is controlling her.',
      it: 'Quando Pakunoda torna dall’utilizzatore di catene e non vuole dire dov’è, Feitan sospetta che lui la stia controllando.',
    },
  },
  feitanMachi: {
    character: 'machi',
    type: { en: 'Member he suspects', it: 'Membro di cui sospetta' },
    summary: {
      en: 'When Machi takes Pakunoda’s side against Phinks, Feitan suspects that the chain user is controlling them.',
      it: 'Quando Machi si schiera con Pakunoda contro Phinks, Feitan sospetta che l’utilizzatore di catene le stia controllando.',
    },
  },
  // Franklin
  franklinFeitan: {
    character: 'feitan',
    type: {
      en: 'Member on the stage with him',
      it: 'Membro con lui sul palco',
    },
    summary: {
      en: 'Franklin walks onto the stage of the Underground Auction with Feitan. Feitan welcomes the guests, and Franklin’s bullets of aura kill nearly everyone in the hall.',
      it: 'Franklin sale sul palco dell’asta sotterranea con Feitan. Feitan dà il benvenuto agli ospiti, e i proiettili di aura di Franklin uccidono quasi tutti i presenti.',
    },
  },
  franklinTocino: {
    character: 'shachmono-tocino',
    type: {
      en: 'Bodyguard his bullets kill',
      it: 'Guardia del corpo uccisa dai suoi proiettili',
    },
    summary: {
      en: 'When Franklin fires bullets of aura into the auction hall, Tocino tries to shield himself and two other bodyguards with his Nen, but the bullets get through and kill him.',
      it: 'Quando Franklin spara proiettili di aura sulla sala dell’asta, Tocino prova a proteggere sé stesso e altre due guardie del corpo con il suo Nen, ma i proiettili passano e lo uccidono.',
    },
  },
  franklinGon: {
    character: 'gon-freecss',
    type: {
      en: 'Boy who reminds him of Uvogin',
      it: 'Ragazzo che gli ricorda Uborghin',
    },
    summary: {
      en: 'At the Troupe’s hideout Franklin recognizes Gon as the boy who beat Shizuku at arm wrestling. Later he says that Gon reminds him of Uvogin.',
      it: 'Nel covo della Brigata Franklin riconosce Gon come il ragazzo che ha battuto Shizuku a braccio di ferro. Più tardi dice che Gon gli ricorda Uborghin.',
    },
  },
  franklinNobunaga: {
    character: 'nobunaga',
    type: { en: 'Member he calms down', it: 'Membro che calma' },
    summary: {
      en: 'When Nobunaga and Feitan face off over Gon at the hideout, Franklin tells Nobunaga to calm down.',
      it: 'Quando Nobunaga e Feitan si affrontano per Gon nel covo, Franklin dice a Nobunaga di calmarsi.',
    },
  },
  franklinPakunoda: {
    character: 'pakunoda',
    type: { en: 'Member he questions', it: 'Membro che interroga' },
    summary: {
      en: 'Franklin asks Pakunoda what she found in the boys’ memories, and she says that they have no memory of the chain user.',
      it: 'Franklin chiede a Pakunoda cosa ha trovato nei ricordi dei ragazzi, e lei risponde che non hanno ricordi dell’utilizzatore di catene.',
    },
  },
  franklinPakunodaLeave: {
    character: 'pakunoda',
    type: { en: 'Member he lets go', it: 'Membro che lascia andare' },
    summary: {
      en: 'When Phinks will not let Pakunoda leave with the hostages, Franklin persuades the others to let her go.',
      it: 'Quando Phinks non vuole lasciar partire Pakunoda con gli ostaggi, Franklin convince gli altri a lasciarla andare.',
    },
  },
  franklinPhinks: {
    character: 'phinks',
    type: { en: 'Member he talks down', it: 'Membro che fa ragionare' },
    summary: {
      en: 'When Phinks will not let Pakunoda leave with the hostages, Franklin tells him to let her go and reminds the others that the worst that could happen is the Troupe dying out.',
      it: 'Quando Phinks non vuole lasciar partire Pakunoda con gli ostaggi, Franklin gli dice di lasciarla andare e ricorda agli altri che la cosa peggiore sarebbe la fine della Brigata.',
    },
  },
  // Nobunaga
  nobunagaOwl: {
    character: 'owl',
    type: {
      en: 'Shadow Beast who traps him',
      it: 'Bestia dell’Ombra che lo intrappola',
    },
    summary: {
      en: 'Owl wraps the Troupe’s car in his cloth. The others get out, but Nobunaga is trapped inside because of where he sits.',
      it: 'Civetta avvolge l’auto della Brigata nel suo telo. Gli altri riescono a uscire, ma Nobunaga resta intrappolato per il posto in cui è seduto.',
    },
  },
  nobunagaMachi: {
    character: 'machi',
    type: { en: 'Member he works with', it: 'Membro con cui fa coppia' },
    summary: {
      en: 'Nobunaga and Machi notice that they are being watched, argue over whether to bring the chain user back dead or alive and settle it with a coin.',
      it: 'Nobunaga e Machi si accorgono di essere osservati, discutono se riportare l’utilizzatore di catene vivo o morto e decidono con una moneta.',
    },
  },
  nobunagaKillua: {
    character: 'killua',
    type: { en: 'Boy he questions', it: 'Ragazzo che interroga' },
    summary: {
      en: 'When Phinks catches Killua, Nobunaga asks him why they were following and whether he knows a Nen user with chains, then gives him three seconds to choose whether to die now or later.',
      it: 'Quando Phinks cattura Killua, Nobunaga gli chiede perché li stavano seguendo e se conosce un utilizzatore di Nen con le catene, poi gli dà tre secondi per scegliere se morire subito o più tardi.',
    },
  },
  nobunagaKilluaEscape: {
    character: 'killua',
    type: { en: 'Boy who escapes him', it: 'Ragazzo che gli sfugge' },
    summary: {
      en: 'Nobunaga questions Killua when the Troupe catches him, then guards him and Gon at the hideout. The two break out through the walls and get away.',
      it: 'Nobunaga interroga Killua quando la Brigata lo cattura, poi sorveglia lui e Gon nel covo. I due sfondano i muri e scappano.',
    },
  },
  nobunagaUvogin: {
    character: 'uvogin',
    type: {
      en: 'Comrade he wonders about',
      it: 'Compagno di cui si chiede la sorte',
    },
    summary: {
      en: 'Nobunaga and Machi wonder whether Uvogin is really dead.',
      it: 'Nobunaga e Machi si chiedono se Uborghin sia davvero morto.',
    },
  },
  nobunagaUvoginFriend: {
    character: 'uvogin',
    type: { en: 'Friend he means to avenge', it: 'Amico che vuole vendicare' },
    summary: {
      en: 'Nobunaga knew Uvogin better than anyone in the Troupe, and he cries as he swears to find the chain user.',
      it: 'Nobunaga conosceva Uborghin meglio di chiunque altro nella Brigata, e piange mentre giura di trovare l’utilizzatore di catene.',
    },
  },
  nobunagaGon: {
    character: 'gon-freecss',
    type: {
      en: 'Boy he asks to join the Troupe',
      it: 'Ragazzo a cui chiede di entrare nella Brigata',
    },
    summary: {
      en: 'At the hideout Nobunaga arm-wrestles Gon and slams his hand down again and again while he talks about Uvogin, until Gon slams Nobunaga’s hand down in turn. Later Nobunaga asks him to join the Troupe; Gon would rather die.',
      it: 'Nel covo Nobunaga sfida Gon a braccio di ferro e gli schiaccia la mano sul tavolo più e più volte mentre parla di Uborghin, finché Gon non schiaccia a sua volta la mano di Nobunaga. Più tardi Nobunaga gli chiede di entrare nella Brigata; Gon preferirebbe morire.',
    },
  },
  nobunagaFeitan: {
    character: 'feitan',
    type: { en: 'Member he faces off with', it: 'Membro con cui si affronta' },
    summary: {
      en: 'When Feitan grabs Gon, Nobunaga tells him to let go. The two face off and settle it with a coin, which Nobunaga wins.',
      it: 'Quando Feitan afferra Gon, Nobunaga gli dice di lasciarlo. I due si affrontano e decidono con una moneta, e vince Nobunaga.',
    },
  },
  nobunagaChrollo: {
    character: 'chrollo',
    type: { en: 'Leader he defies', it: 'Capo a cui si oppone' },
    summary: {
      en: 'When Chrollo orders the Troupe to leave Yorknew City, Nobunaga refuses, because they still have to find the chain user. Chrollo writes Nobunaga’s fortune with the power he took from Neon, and it says that more members will die.',
      it: 'Quando Quoll ordina alla Brigata di lasciare York Shin City, Nobunaga rifiuta, perché devono ancora trovare l’utilizzatore di catene. Quoll scrive la profezia di Nobunaga con il potere che ha rubato a Neon, e la profezia dice che moriranno altri membri.',
    },
  },
  nobunagaHisoka: {
    character: 'hisoka',
    type: {
      en: 'Member he draws his sword on',
      it: 'Membro contro cui sfodera la spada',
    },
    summary: {
      en: 'Hisoka’s fortune makes Nobunaga think that Hisoka sold out Uvogin, and Nobunaga draws his sword. When he attacks, Chrollo moves him away from Hisoka.',
      it: 'La profezia di Hisoka fa pensare a Nobunaga che Hisoka abbia tradito Uborghin, e Nobunaga sfodera la spada. Quando attacca, Quoll lo allontana da Hisoka.',
    },
  },
  nobunagaSquala: {
    character: 'squala',
    type: { en: 'Bodyguard he kills', it: 'Guardia del corpo che uccide' },
    summary: {
      en: 'Nobunaga, Pakunoda and Kortopi catch Squala in his car. While Pakunoda questions him, Squala reacts to Eliza’s name, and Nobunaga cuts off his head.',
      it: 'Nobunaga, Pakunoda e Kortopi bloccano Squala nella sua auto. Mentre Pakunoda lo interroga, Squala reagisce al nome di Eliza, e Nobunaga gli taglia la testa.',
    },
  },
  nobunagaPakunoda: {
    character: 'pakunoda',
    type: {
      en: 'Member who shows him the chain user',
      it: 'Membro che gli mostra l’utilizzatore di catene',
    },
    summary: {
      en: 'After Squala’s death Pakunoda fires her Memory Bomb into Nobunaga’s head and shows him what the chain user looks like.',
      it: 'Dopo la morte di Squala, Pakunoda spara il suo Proiettile Mnemonico nella testa di Nobunaga e gli mostra che aspetto ha l’utilizzatore di catene.',
    },
  },
  // Phinks
  phinksDalzollene: {
    character: 'dalzollene',
    type: {
      en: 'Bodyguard killed in the rescue',
      it: 'Guardia del corpo uccisa nel salvataggio',
    },
    summary: {
      en: 'Phinks and other Troupe members, disguised as Mafia men, reach the place where the bodyguards hold Uvogin. They kill Dalzollene and free Uvogin.',
      it: 'Phinks e altri membri della Brigata, travestiti da mafiosi, raggiungono il posto dove le guardie del corpo tengono Uborghin. Uccidono Dalzorne e liberano Uborghin.',
    },
  },
  phinksUvogin: {
    character: 'uvogin',
    type: { en: 'Comrade he frees', it: 'Compagno che libera' },
    summary: {
      en: 'Phinks and other Troupe members, disguised as Mafia men, reach the place where the bodyguards hold Uvogin and free him.',
      it: 'Phinks e altri membri della Brigata, travestiti da mafiosi, raggiungono il posto dove le guardie del corpo tengono Uborghin e lo liberano.',
    },
  },
  phinksKillua: {
    character: 'killua',
    type: { en: 'Boy he catches', it: 'Ragazzo che cattura' },
    summary: {
      en: 'When Gon and Killua try to run from the trap, Phinks catches Killua by the leg and stops his kick. Killua twists free, but then Nobunaga appears as well.',
      it: 'Quando Gon e Killua cercano di scappare dalla trappola, Phinks afferra Killua per una gamba e blocca il suo calcio. Killua si libera con una torsione, ma poi compare anche Nobunaga.',
    },
  },
  phinksPakunoda: {
    character: 'pakunoda',
    type: {
      en: 'Member he springs the trap with',
      it: 'Membro con cui fa scattare la trappola',
    },
    summary: {
      en: 'Phinks and Pakunoda follow Gon and Killua while the boys tail Machi and Nobunaga, and they block the boys’ way out.',
      it: 'Phinks e Pakunoda seguono Gon e Killua mentre i ragazzi pedinano Machi e Nobunaga, e sbarrano loro la strada.',
    },
  },
  phinksPakunodaLeave: {
    character: 'pakunoda',
    type: {
      en: 'Member he will not let go',
      it: 'Membro che non vuole lasciar andare',
    },
    summary: {
      en: 'When Pakunoda comes back from the chain user, Phinks demands to know where he is and will not let her leave with the hostages, until Franklin persuades the others to let her go.',
      it: 'Quando Pakunoda torna dall’utilizzatore di catene, Phinks vuole sapere dov’è e non la lascia partire con gli ostaggi, finché Franklin non convince gli altri a lasciarla andare.',
    },
  },
  phinksGon: {
    character: 'gon-freecss',
    type: { en: 'Boy he argues with', it: 'Ragazzo con cui litiga' },
    summary: {
      en: 'Gon shouts at Phinks that Pakunoda and Machi only want their leader back, and the two argue.',
      it: 'Gon grida a Phinks che Pakunoda e Machi vogliono solo riavere il loro capo, e i due litigano.',
    },
  },
  phinksKurapika: {
    character: 'kurapika',
    type: {
      en: 'Chain user whose terms he accepts',
      it: 'Utilizzatore di catene di cui accetta le condizioni',
    },
    summary: {
      en: 'When Kurapika calls the hideout and asks for the hostages, Phinks throws the phone to Gon, then tells Kurapika that the Troupe will do as he says.',
      it: 'Quando Kurapika chiama il covo e chiede degli ostaggi, Phinks lancia il telefono a Gon, poi dice a Kurapika che la Brigata farà come dice lui.',
    },
  },
  phinksFranklin: {
    character: 'franklin',
    type: { en: 'Member who talks him down', it: 'Membro che lo fa ragionare' },
    summary: {
      en: 'When Phinks will not let Pakunoda leave with the hostages, Franklin tells him to let her go and reminds the others that the worst that could happen is the Troupe dying out.',
      it: 'Quando Phinks non vuole lasciar partire Pakunoda con gli ostaggi, Franklin gli dice di lasciarla andare e ricorda agli altri che la cosa peggiore sarebbe la fine della Brigata.',
    },
  },
  // Shalnark
  shalnarkUvogin: {
    character: 'uvogin',
    type: {
      en: 'Comrade he tracks the chain user for',
      it: 'Compagno per cui cerca l’utilizzatore di catene',
    },
    summary: {
      en: 'While Uvogin drinks beer to get rid of the leeches, Shalnark searches the Hunter website and finds that the building where Uvogin was held belongs to the Nostrade family.',
      it: 'Mentre Uborghin beve birra per liberarsi delle sanguisughe, Shalnark cerca sul sito degli Hunter e scopre che l’edificio dove Uborghin era tenuto prigioniero appartiene alla famiglia Nostrad.',
    },
  },
  shalnarkUvoginBlame: {
    character: 'uvogin',
    type: {
      en: 'Comrade he tracks the chain user for',
      it: 'Compagno per cui cerca l’utilizzatore di catene',
    },
    summary: {
      en: 'Shalnark finds the Nostrade family for Uvogin on the Hunter website. When Uvogin does not come back, Shalnark blames himself for not going with him.',
      it: 'Shalnark trova per Uborghin la famiglia Nostrad sul sito degli Hunter. Quando Uborghin non torna, Shalnark si rimprovera di non essere andato con lui.',
    },
  },
  shalnarkKortopi: {
    character: 'kortopi',
    type: {
      en: 'Member he runs the auction with',
      it: 'Membro con cui manda avanti l’asta',
    },
    summary: {
      en: 'When the Troupe runs the reopened auction from backstage, Shalnark controls the auctioneer with his Nen while Kortopi makes an exact copy of an item.',
      it: 'Quando la Brigata manda avanti di nascosto l’asta riaperta, Shalnark controlla il banditore con il suo Nen mentre Kortopi fa una copia esatta di un oggetto.',
    },
  },
  shalnarkPakunoda: {
    character: 'pakunoda',
    type: {
      en: 'Member he runs the auction with',
      it: 'Membro con cui manda avanti l’asta',
    },
    summary: {
      en: 'When the Troupe runs the reopened auction from backstage, Shalnark controls the auctioneer with his Nen while Pakunoda brings the items onto the stage.',
      it: 'Quando la Brigata manda avanti di nascosto l’asta riaperta, Shalnark controlla il banditore con il suo Nen mentre Pakunoda porta gli oggetti sul palco.',
    },
  },
  // Light Nostrade
  lightKurapika: {
    character: 'kurapika',
    type: {
      en: 'Bodyguard he puts in charge',
      it: 'Guardia del corpo che mette a capo',
    },
    summary: {
      en: 'Kurapika tells Light on the phone that Dalzollene is probably dead and that the Phantom Troupe was behind the attack on the auction, and Light puts him in charge of the bodyguards.',
      it: 'Kurapika dice a Light al telefono che Dalzorne è probabilmente morto e che dietro l’attacco all’asta c’è la Brigata Fantasma, e Light lo mette a capo delle guardie del corpo.',
    },
  },
  lightKurapikaAssassins: {
    character: 'kurapika',
    type: {
      en: 'Bodyguard he puts in charge',
      it: 'Guardia del corpo che mette a capo',
    },
    summary: {
      en: 'Light puts Kurapika in charge of the bodyguards, then sends him to join the assassins the Mafia has hired to kill the Phantom Troupe.',
      it: 'Light mette Kurapika a capo delle guardie del corpo, poi lo manda a unirsi agli assassini che la mafia ha ingaggiato per uccidere la Brigata Fantasma.',
    },
  },
  lightKurapikaEyes: {
    character: 'kurapika',
    type: {
      en: 'Bodyguard he puts in charge',
      it: 'Guardia del corpo che mette a capo',
    },
    summary: {
      en: 'Light puts Kurapika in charge of the bodyguards and sends him to join the assassins. When the Scarlet Eyes come up at the auction, Light orders him to win them, and Kurapika does.',
      it: 'Light mette Kurapika a capo delle guardie del corpo e lo manda a unirsi agli assassini. Quando all’asta arrivano gli occhi scarlatti, Light gli ordina di vincerli, e Kurapika ci riesce.',
    },
  },
  lightNeon: {
    character: 'neon-nostrade',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Light’s daughter Neon writes fortunes for his friends, and he keeps her away from the Underground Auction.',
      it: 'Neon, la figlia di Light, scrive le profezie per i suoi amici, e lui la tiene lontana dall’asta sotterranea.',
    },
  },
  lightNeonHome: {
    character: 'neon-nostrade',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Light’s daughter Neon writes fortunes for his friends. He keeps her away from the auction and sends her home with Basho and Melody, promising her another auction.',
      it: 'Neon, la figlia di Light, scrive le profezie per i suoi amici. Lui la tiene lontana dall’asta e la manda a casa con Basho e Melody, promettendole un’altra asta.',
    },
  },
  lightNeonAuction: {
    character: 'neon-nostrade',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Light’s daughter Neon writes fortunes for his friends. He sends her home with Basho and Melody, promising her another auction, but she slips away from them to go to the auction.',
      it: 'Neon, la figlia di Light, scrive le profezie per i suoi amici. Lui la manda a casa con Basho e Melody, promettendole un’altra asta, ma lei sfugge loro per andare all’asta.',
    },
  },
  lightNeonEyes: {
    character: 'neon-nostrade',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Light’s daughter Neon writes fortunes for his friends. Light has the Scarlet Eyes bought for her, and in hospital she thanks him for them.',
      it: 'Neon, la figlia di Light, scrive le profezie per i suoi amici. Light le fa comprare gli occhi scarlatti, e in ospedale lei lo ringrazia.',
    },
  },
  lightDalzollene: {
    character: 'dalzollene',
    type: {
      en: 'Head of his daughter’s bodyguards',
      it: 'Capo delle guardie del corpo di sua figlia',
    },
    summary: {
      en: 'Dalzollene reports Neon’s fortunes to Light on the phone, and Light has Neon kept away from the Underground Auction.',
      it: 'Dalzorne riferisce a Light al telefono le profezie di Neon, e Light fa tenere Neon lontana dall’asta sotterranea.',
    },
  },
  lightBasho: {
    character: 'basho',
    type: {
      en: 'Bodyguard he sends home with Neon',
      it: 'Guardia del corpo che manda a casa con Neon',
    },
    summary: {
      en: 'Light sends Basho and Melody to take Neon home.',
      it: 'Light manda Basho e Melody a riportare Neon a casa.',
    },
  },
  lightBashoLost: {
    character: 'basho',
    type: {
      en: 'Bodyguard he sends home with Neon',
      it: 'Guardia del corpo che manda a casa con Neon',
    },
    summary: {
      en: 'Light sends Basho and Melody to take Neon home, but she slips away from them to go to the auction.',
      it: 'Light manda Basho e Melody a riportare Neon a casa, ma lei sfugge loro per andare all’asta.',
    },
  },
  lightMelody: {
    character: 'melody',
    type: {
      en: 'Bodyguard he sends home with Neon',
      it: 'Guardia del corpo che manda a casa con Neon',
    },
    summary: {
      en: 'Light sends Melody and Basho to take Neon home.',
      it: 'Light manda Melody e Basho a riportare Neon a casa.',
    },
  },
  lightMelodyLost: {
    character: 'melody',
    type: {
      en: 'Bodyguard he sends home with Neon',
      it: 'Guardia del corpo che manda a casa con Neon',
    },
    summary: {
      en: 'Light sends Melody and Basho to take Neon home, but she slips away from them to go to the auction.',
      it: 'Light manda Melody e Basho a riportare Neon a casa, ma lei sfugge loro per andare all’asta.',
    },
  },
  lightZenji: {
    character: 'zenji',
    type: { en: 'Rival who mocks him', it: 'Rivale che lo deride' },
    summary: {
      en: 'At the assassins’ meeting Zenji mocks Light until Kurapika threatens him, and Light tells Kurapika to stop.',
      it: 'All’incontro degli assassini Zenji deride Light finché Kurapika non lo minaccia, e Light dice a Kurapika di fermarsi.',
    },
  },
  lightZenjiBid: {
    character: 'zenji',
    type: { en: 'Rival who mocks him', it: 'Rivale che lo deride' },
    summary: {
      en: 'At the assassins’ meeting Zenji mocks Light until Kurapika threatens him. At the auction Zenji bids against Kurapika for the Scarlet Eyes, which cost 2.9 billion Jenny.',
      it: 'All’incontro degli assassini Zenji deride Light finché Kurapika non lo minaccia. All’asta Zenji fa offerte contro Kurapika per gli occhi scarlatti, che costano 2,9 miliardi di Jenny.',
    },
  },
  // Owl
  owlNobunaga: {
    character: 'nobunaga',
    type: {
      en: 'Troupe member he traps',
      it: 'Membro della Brigata che intrappola',
    },
    summary: {
      en: 'Owl wraps the Troupe’s car in his cloth. The others get out, but Nobunaga is trapped inside because of where he sits.',
      it: 'Civetta avvolge l’auto della Brigata nel suo telo. Gli altri riescono a uscire, ma Nobunaga resta intrappolato per il posto in cui è seduto.',
    },
  },
  owlFeitan: {
    character: 'feitan',
    type: {
      en: 'Troupe member who holds him',
      it: 'Membro della Brigata che lo tiene prigioniero',
    },
    summary: {
      en: 'After the fight with the Shadow Beasts, Owl is held prisoner by the Troupe and tortured, with Feitan watching over him.',
      it: 'Dopo lo scontro con le Bestie dell’Ombra, Civetta è tenuto prigioniero dalla Brigata e torturato, con Feitan a sorvegliarlo.',
    },
  },
  // Worm
  wormUvogin: {
    character: 'uvogin',
    type: {
      en: 'Troupe member he fights',
      it: 'Membro della Brigata che affronta',
    },
    summary: {
      en: 'Worm punches Uvogin in the face and gets a harder punch back. When Worm drags Uvogin’s arm under the ground, Uvogin blasts a crater with his Big Bang Impact and leaves Worm badly hurt.',
      it: 'Lombrico colpisce Uborghin in faccia e riceve un pugno più forte. Quando trascina il braccio di Uborghin sotto terra, Uborghin apre un cratere con il suo Colpo del Big Bang e lo lascia gravemente ferito.',
    },
  },
  // Rabid Dog
  rabidDogUvogin: {
    character: 'uvogin',
    type: {
      en: 'Troupe member who kills him',
      it: 'Membro della Brigata che lo uccide',
    },
    summary: {
      en: 'Rabid Dog bites pieces out of Uvogin, and the poison in his fangs brings Uvogin down. Uvogin spits a piece of Leech’s skull through Rabid Dog’s head and kills him.',
      it: 'Cane selvatico strappa a morsi pezzi di carne a Uborghin, e il veleno delle sue zanne lo mette a terra. Uborghin gli sputa un pezzo del cranio di Sanguisuga attraverso la testa e lo uccide.',
    },
  },
  rabidDogPorcupine: {
    character: 'porcupine',
    type: {
      en: 'Shadow Beast who holds Uvogin’s fist',
      it: 'Bestia dell’Ombra che trattiene il pugno di Uborghin',
    },
    summary: {
      en: 'While Porcupine’s hairs hold Uvogin’s fist, Rabid Dog bites pieces out of Uvogin.',
      it: 'Mentre i peli di Porcospino trattengono il pugno di Uborghin, Cane selvatico gli strappa a morsi pezzi di carne.',
    },
  },
  rabidDogLeech: {
    character: 'leech',
    type: {
      en: 'Shadow Beast who moves in after him',
      it: 'Bestia dell’Ombra che attacca dopo di lui',
    },
    summary: {
      en: 'Once Rabid Dog’s poison brings Uvogin down, Leech fills Uvogin’s body with leeches. Uvogin kills them both.',
      it: 'Quando il veleno di Cane selvatico mette a terra Uborghin, Sanguisuga gli riempie il corpo di sanguisughe. Uborghin li uccide entrambi.',
    },
  },
  // Porcupine
  porcupineUvogin: {
    character: 'uvogin',
    type: {
      en: 'Troupe member who screams him off',
      it: 'Membro della Brigata che se ne libera urlando',
    },
    summary: {
      en: 'Porcupine’s hairs turn into needles that catch Uvogin’s fist and hold it. Uvogin frees himself by screaming at him as loud as he can.',
      it: 'I peli di Porcospino diventano aghi che bloccano il pugno di Uborghin e lo trattengono. Uborghin se ne libera urlandogli contro più forte che può.',
    },
  },
  porcupineRabidDog: {
    character: 'rabid-dog',
    type: {
      en: 'Shadow Beast who bites Uvogin while he holds him',
      it: 'Bestia dell’Ombra che morde Uborghin mentre lui lo trattiene',
    },
    summary: {
      en: 'While Porcupine’s hairs hold Uvogin’s fist, Rabid Dog bites pieces out of Uvogin.',
      it: 'Mentre i peli di Porcospino trattengono il pugno di Uborghin, Cane selvatico gli strappa a morsi pezzi di carne.',
    },
  },
  // Leech
  leechUvogin: {
    character: 'uvogin',
    type: {
      en: 'Troupe member who kills him',
      it: 'Membro della Brigata che lo uccide',
    },
    summary: {
      en: 'Once the poison brings Uvogin down, Leech fills his body with leeches. Uvogin bites into Leech’s head and kills him.',
      it: 'Quando il veleno mette a terra Uborghin, Sanguisuga gli riempie il corpo di sanguisughe. Uborghin gli affonda i denti nella testa e lo uccide.',
    },
  },
  leechRabidDog: {
    character: 'rabid-dog',
    type: {
      en: 'Shadow Beast he moves in after',
      it: 'Bestia dell’Ombra dopo cui attacca',
    },
    summary: {
      en: 'Once Rabid Dog’s poison brings Uvogin down, Leech fills Uvogin’s body with leeches. Uvogin kills them both.',
      it: 'Quando il veleno di Cane selvatico mette a terra Uborghin, Sanguisuga gli riempie il corpo di sanguisughe. Uborghin li uccide entrambi.',
    },
  },
  leechPorcupine: {
    character: 'porcupine',
    type: {
      en: 'Shadow Beast who holds Uvogin',
      it: 'Bestia dell’Ombra che trattiene Uborghin',
    },
    summary: {
      en: 'Leech moves in on Uvogin while Porcupine’s hairs hold his fist and the poison holds him down.',
      it: 'Sanguisuga attacca Uborghin mentre i peli di Porcospino gli trattengono il pugno e il veleno lo tiene a terra.',
    },
  },
} satisfies Record<string, Relationship>

export const yorknewCityRelationships = {
  // Ging opens at episode 37 but chapter 66, which episode 38 adapts, so no
  // both-source pair is true at his gate; and Kite is open to manga readers
  // here but to anime readers only from episode 76. Every entry is one-source.
  'ging-freecss': [
    // Anime-only: Kite's record opens at episode 76.
    {
      episode: 37,
      chapter: 66,
      source: 'episode',
      value: [links.gingGon, links.gingMitoEpisode],
    },
    // Anime-only, delayed to Kite's record (episode 76).
    {
      episode: 76,
      chapter: 185,
      source: 'episode',
      value: [links.gingGon, links.gingKite, links.gingMitoEpisode],
    },
    // Manga-only: Kite is a chapter-1 record, so he is open at Ging's chapter.
    {
      episode: 38,
      chapter: 66,
      source: 'chapter',
      value: [links.gingGon, links.gingKite, links.gingMito],
    },
  ],
  'melody': [
    {
      episode: 40,
      chapter: 68,
      value: [links.melodyKurapika, links.melodySquala],
    },
    // The talk at the front entrance is chapter 73, pages 1-9, which episode
    // 42 adapts.
    {
      episode: 42,
      chapter: 73,
      value: [links.melodyKurapikaEyes, links.melodySquala],
    },
    {
      episode: 44,
      chapter: 77,
      value: [
        links.melodyKurapikaEyes,
        links.melodyDalzollene,
        links.melodySquala,
      ],
    },
    // Light sends her home with Neon in chapter 89 and episode 49; Neon
    // slips away in chapters 94-95, which episode 51 adapts.
    {
      episode: 51,
      chapter: 95,
      value: [links.melodyKurapikaEyes, links.melodyNeon, links.melodySquala],
    },
    // Chapters 109-110 and episode 56.
    {
      episode: 56,
      chapter: 111,
      value: [
        links.melodyKurapikaEyes,
        links.melodyKillua,
        links.melodyNeon,
        links.melodySquala,
      ],
    },
    // The airship and the exchange are chapter 119 and episode 58.
    {
      episode: 58,
      chapter: 119,
      value: [
        links.melodyKurapikaEyes,
        links.melodyKilluaExchange,
        links.melodyPakunoda,
        links.melodyNeon,
        links.melodySquala,
      ],
    },
  ],
  'basho': [
    {
      episode: 40,
      chapter: 68,
      value: [links.bashoSquala, links.bashoKurapika],
    },
    {
      episode: 51,
      chapter: 95,
      value: [links.bashoNeon, links.bashoKurapika, links.bashoSquala],
    },
  ],
  'baise': [
    { episode: 40, chapter: 68, value: [links.baiseSquala] },
    // Chapter 73, pages 10-19, and episode 43; the shooter is named only
    // from 44/76, so the cards leave him unnamed.
    {
      episode: 43,
      chapter: 73,
      value: [
        links.baiseShizuku,
        links.baiseTocino,
        links.baiseIvlenkov,
        links.baiseSquala,
      ],
    },
  ],
  'squala': [
    {
      episode: 40,
      chapter: 68,
      value: [
        links.squalaKurapika,
        links.squalaMelody,
        links.squalaBasho,
        links.squalaBaise,
      ],
    },
    // Baise is dead (43/73) and makes room.
    {
      episode: 46,
      chapter: 79,
      value: [
        links.squalaKurapika,
        links.squalaMelody,
        links.squalaBasho,
        links.squalaLight,
      ],
    },
    // The warning is chapter 111 and episode 56; his death chapter 112,
    // pages 1-8, which episode 56 adapts.
    {
      episode: 56,
      chapter: 112,
      value: [
        links.squalaEliza,
        links.squalaKurapikaWarns,
        links.squalaPakunoda,
        links.squalaNobunaga,
        links.squalaMelody,
      ],
    },
  ],
  'shachmono-tocino': [
    {
      episode: 40,
      chapter: 68,
      value: [links.tocinoKurapika, links.tocinoBasho],
    },
    {
      episode: 43,
      chapter: 73,
      value: [links.tocinoBaise, links.tocinoIvlenkov, links.tocinoKurapika],
    },
    // The shooter is named at Franklin's gate, 44/76.
    {
      episode: 44,
      chapter: 76,
      value: [
        links.tocinoFranklin,
        links.tocinoBaise,
        links.tocinoIvlenkov,
        links.tocinoKurapika,
      ],
    },
  ],
  // The hiring is chapter 70 and Neon's record opens at chapter 71, both in
  // episode 41, so one entry waits for her.
  'dalzollene': [
    {
      episode: 41,
      chapter: 71,
      value: [links.dalzolleneKurapika, links.dalzolleneNeon],
    },
    {
      episode: 44,
      chapter: 77,
      value: [
        links.dalzolleneKurapikaUvogin,
        links.dalzolleneMelody,
        links.dalzolleneNeon,
      ],
    },
    {
      episode: 45,
      chapter: 78,
      value: [
        links.dalzolleneUvogin,
        links.dalzollenePhinks,
        links.dalzolleneKurapikaUvogin,
        links.dalzolleneMelody,
        links.dalzolleneNeon,
      ],
    },
  ],
  'neon-nostrade': [
    { episode: 41, chapter: 71, value: [links.neonDalzollene] },
    // Her father is named at his gate, 46/79.
    {
      episode: 46,
      chapter: 79,
      value: [links.neonLight, links.neonKurapika, links.neonDalzollene],
    },
    {
      episode: 51,
      chapter: 95,
      value: [
        links.neonLightHome,
        links.neonKurapika,
        links.neonBasho,
        links.neonMelody,
        links.neonDalzollene,
      ],
    },
    // Chapters 100-101 and episode 53.
    {
      episode: 53,
      chapter: 101,
      value: [
        links.neonLightEyes,
        links.neonKurapikaEyes,
        links.neonBasho,
        links.neonMelody,
        links.neonDalzollene,
      ],
    },
    // The restaurant and the blow are chapters 95-96 and episode 51; Chrollo
    // is linked from 54/104, where he writes fortunes with her power.
    {
      episode: 54,
      chapter: 104,
      value: [
        links.neonChrollo,
        links.neonLightEyes,
        links.neonKurapikaEyes,
        links.neonBasho,
        links.neonMelody,
      ],
    },
  ],
  'ivlenkov': [{ episode: 43, chapter: 73, value: [links.ivlenkovShizuku] }],
  'machi': [
    // The stitches and the call are chapter 55 and episode 32.
    { episode: 41, chapter: 71, value: [links.machiHisoka] },
    { episode: 45, chapter: 78, value: [links.machiUvogin, links.machiHisoka] },
    // Chapters 89-91 and episode 49.
    {
      episode: 49,
      chapter: 91,
      value: [
        links.machiNobunaga,
        links.machiGon,
        links.machiPakunoda,
        links.machiUvogin,
        links.machiHisoka,
      ],
    },
    // The pairs are chapter 92 and episode 50.
    {
      episode: 50,
      chapter: 92,
      value: [
        links.machiNobunaga,
        links.machiGon,
        links.machiPakunoda,
        links.machiHisokaPair,
        links.machiUvogin,
      ],
    },
    // Chapters 113-114 and episode 57.
    {
      episode: 57,
      chapter: 114,
      value: [
        links.machiKillua,
        links.machiGonThread,
        links.machiChrollo,
        links.machiPakunoda,
        links.machiNobunaga,
      ],
    },
    {
      episode: 58,
      chapter: 118,
      value: [
        links.machiPakunodaSide,
        links.machiPhinks,
        links.machiChrollo,
        links.machiKillua,
        links.machiGonThread,
      ],
    },
  ],
  'shizuku': [
    { episode: 42, chapter: 72, value: [links.shizukuGon] },
    // Chapter 73, pages 10-19, and episode 43.
    {
      episode: 43,
      chapter: 73,
      value: [links.shizukuGon, links.shizukuBaise, links.shizukuIvlenkov],
    },
    // Blinky's limit is chapter 76 and episode 44; the poison comes out in
    // chapter 78 and episode 45.
    {
      episode: 45,
      chapter: 78,
      value: [
        links.shizukuGon,
        links.shizukuUvogin,
        links.shizukuBaise,
        links.shizukuIvlenkov,
      ],
    },
    // The hideout is chapters 91-93 and episode 50.
    {
      episode: 50,
      chapter: 93,
      value: [
        links.shizukuGon,
        links.shizukuKillua,
        links.shizukuNobunaga,
        links.shizukuFeitan,
        links.shizukuUvogin,
      ],
    },
    // Chapter 104 and episode 54.
    {
      episode: 54,
      chapter: 104,
      value: [
        links.shizukuChrollo,
        links.shizukuGon,
        links.shizukuKillua,
        links.shizukuNobunaga,
        links.shizukuFeitan,
      ],
    },
  ],
  // The Shadow Beasts fight Uvogin in chapters 75-76, and the chain takes
  // him in chapter 77, all in episode 44.
  'uvogin': [
    {
      episode: 44,
      chapter: 77,
      value: [
        links.uvoginKurapika,
        links.uvoginWorm,
        links.uvoginRabidDog,
        links.uvoginLeech,
        links.uvoginPorcupine,
      ],
    },
    {
      episode: 45,
      chapter: 78,
      value: [
        links.uvoginKurapikaPunch,
        links.uvoginPhinks,
        links.uvoginDalzollene,
        links.uvoginShizuku,
      ],
    },
    // The beer is chapter 79, the door chapter 80, both in episode 46.
    {
      episode: 46,
      chapter: 80,
      value: [
        links.uvoginKurapikaHunt,
        links.uvoginShalnark,
        links.uvoginPhinks,
        links.uvoginShizuku,
        links.uvoginDalzollene,
      ],
    },
    // Chapters 81-84 and episode 47.
    {
      episode: 47,
      chapter: 84,
      value: [
        links.uvoginKurapikaDeath,
        links.uvoginShalnark,
        links.uvoginPhinks,
        links.uvoginShizuku,
        links.uvoginDalzollene,
      ],
    },
    // The call from the balloon is chapter 74 and episode 43; the leader is
    // linked from 54/104.
    {
      episode: 54,
      chapter: 104,
      value: [
        links.uvoginChrollo,
        links.uvoginKurapikaDeath,
        links.uvoginShalnark,
        links.uvoginPhinks,
        links.uvoginShizuku,
      ],
    },
  ],
  // On the stage in chapter 73 and episode 43; Franklin is named at 44/76.
  'feitan': [
    { episode: 44, chapter: 76, value: [links.feitanFranklin] },
    // Owl is tortured in episode 45 and seen tortured beside Feitan in
    // chapter 84, which episode 47 adapts.
    {
      episode: 47,
      chapter: 84,
      value: [links.feitanOwl, links.feitanFranklin],
    },
    // Chapters 91-92 and episode 50.
    {
      episode: 50,
      chapter: 92,
      value: [
        links.feitanGon,
        links.feitanNobunaga,
        links.feitanOwl,
        links.feitanFranklin,
      ],
    },
    {
      episode: 58,
      chapter: 118,
      value: [
        links.feitanPakunoda,
        links.feitanMachi,
        links.feitanGon,
        links.feitanNobunaga,
        links.feitanOwl,
      ],
    },
  ],
  'franklin': [
    {
      episode: 44,
      chapter: 76,
      value: [links.franklinFeitan, links.franklinTocino],
    },
    // Chapters 91-93 and episode 50.
    {
      episode: 50,
      chapter: 93,
      value: [
        links.franklinGon,
        links.franklinNobunaga,
        links.franklinPakunoda,
        links.franklinFeitan,
        links.franklinTocino,
      ],
    },
    {
      episode: 58,
      chapter: 118,
      value: [
        links.franklinPhinks,
        links.franklinPakunodaLeave,
        links.franklinGon,
        links.franklinNobunaga,
        links.franklinFeitan,
      ],
    },
  ],
  'nobunaga': [
    { episode: 45, chapter: 77, value: [links.nobunagaOwl] },
    // Chapters 89-91 and episode 49.
    {
      episode: 49,
      chapter: 91,
      value: [
        links.nobunagaMachi,
        links.nobunagaKillua,
        links.nobunagaUvogin,
        links.nobunagaOwl,
      ],
    },
    // Chapters 91-94 and episode 50.
    {
      episode: 50,
      chapter: 94,
      value: [
        links.nobunagaGon,
        links.nobunagaUvoginFriend,
        links.nobunagaKilluaEscape,
        links.nobunagaFeitan,
        links.nobunagaMachi,
      ],
    },
    // Chapters 102-104 and episode 54.
    {
      episode: 54,
      chapter: 104,
      value: [
        links.nobunagaChrollo,
        links.nobunagaGon,
        links.nobunagaUvoginFriend,
        links.nobunagaKilluaEscape,
        links.nobunagaFeitan,
      ],
    },
    // Hisoka's fortune is chapter 106; episode 55 adapts it from page 4.
    {
      episode: 55,
      chapter: 106,
      value: [
        links.nobunagaChrollo,
        links.nobunagaHisoka,
        links.nobunagaGon,
        links.nobunagaUvoginFriend,
        links.nobunagaKilluaEscape,
      ],
    },
    // Chapters 111-112, pages 1-8, and episode 56.
    {
      episode: 56,
      chapter: 112,
      value: [
        links.nobunagaChrollo,
        links.nobunagaSquala,
        links.nobunagaPakunoda,
        links.nobunagaUvoginFriend,
        links.nobunagaGon,
      ],
    },
  ],
  'phinks': [
    {
      episode: 45,
      chapter: 78,
      value: [links.phinksDalzollene, links.phinksUvogin],
    },
    // The trap is chapters 90-91 and episode 49.
    {
      episode: 49,
      chapter: 91,
      value: [
        links.phinksKillua,
        links.phinksPakunoda,
        links.phinksUvogin,
        links.phinksDalzollene,
      ],
    },
    {
      episode: 58,
      chapter: 118,
      value: [
        links.phinksPakunodaLeave,
        links.phinksGon,
        links.phinksKurapika,
        links.phinksFranklin,
        links.phinksKillua,
      ],
    },
  ],
  'shalnark': [
    { episode: 46, chapter: 79, value: [links.shalnarkUvogin] },
    { episode: 47, chapter: 84, value: [links.shalnarkUvoginBlame] },
    // Chapter 100 and episode 53.
    {
      episode: 53,
      chapter: 100,
      value: [
        links.shalnarkUvoginBlame,
        links.shalnarkKortopi,
        links.shalnarkPakunoda,
      ],
    },
  ],
  'light-nostrade': [
    {
      episode: 46,
      chapter: 79,
      value: [links.lightKurapika, links.lightNeon, links.lightDalzollene],
    },
    {
      episode: 49,
      chapter: 89,
      value: [
        links.lightKurapikaAssassins,
        links.lightNeonHome,
        links.lightBasho,
        links.lightMelody,
        links.lightDalzollene,
      ],
    },
    // The meeting and Neon's escape are chapters 94-95 and episode 51.
    {
      episode: 51,
      chapter: 95,
      value: [
        links.lightKurapikaAssassins,
        links.lightNeonAuction,
        links.lightZenji,
        links.lightBashoLost,
        links.lightMelodyLost,
      ],
    },
    // Chapters 100-101 and episode 53.
    {
      episode: 53,
      chapter: 101,
      value: [
        links.lightKurapikaEyes,
        links.lightNeonEyes,
        links.lightZenjiBid,
        links.lightBashoLost,
        links.lightMelodyLost,
      ],
    },
  ],
  'owl': [
    { episode: 45, chapter: 77, value: [links.owlNobunaga] },
    // Tortured in episode 45; seen tortured beside Feitan in chapter 84,
    // which episode 47 adapts.
    { episode: 47, chapter: 84, value: [links.owlFeitan, links.owlNobunaga] },
  ],
  // His punch lands at the end of chapter 75 (episode 44), so the card waits
  // for the fight's pair, 44/76.
  'worm': [{ episode: 44, chapter: 76, value: [links.wormUvogin] }],
  'rabid-dog': [
    {
      episode: 44,
      chapter: 76,
      value: [
        links.rabidDogUvogin,
        links.rabidDogPorcupine,
        links.rabidDogLeech,
      ],
    },
  ],
  'porcupine': [
    {
      episode: 44,
      chapter: 76,
      value: [links.porcupineUvogin, links.porcupineRabidDog],
    },
  ],
  'leech': [
    {
      episode: 44,
      chapter: 76,
      value: [links.leechUvogin, links.leechRabidDog, links.leechPorcupine],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
