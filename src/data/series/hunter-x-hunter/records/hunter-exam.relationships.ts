import type { Relationship, Timeline } from '~/data/types'

/** Facts and threshold revisions: docs/content-provenance/hunter-x-hunter-relationships.json. */
const links = {
  // Gon Freecss
  gonMito: {
    character: 'mito-freecss',
    type: { en: 'Aunt who raised him', it: 'Zia che lo ha cresciuto' },
    summary: {
      en: 'Mito has raised Gon since he was a baby and lets him take the Hunter Exam only after he catches the biggest fish in the swamp.',
      it: 'Myto cresce Gon da quando era in fasce e gli lascia sostenere l’Esame Hunter solo dopo che ha pescato il pesce più grosso della palude.',
    },
  },
  gonKite: {
    character: 'kite',
    type: { en: 'Hunter who saved him', it: 'Hunter che lo ha salvato' },
    summary: {
      en: 'Kite saves Gon from a foxbear on Whale Island and tells him that his father is still alive.',
      it: 'Kaito salva Gon da un orso-volpe sull’Isola Balena e gli dice che suo padre è ancora vivo.',
    },
  },
  // The 2011 anime has no word about Ging from Kite: he learns only later
  // whose son he saved.
  gonKiteEpisode: {
    character: 'kite',
    type: { en: 'Hunter who saved him', it: 'Hunter che lo ha salvato' },
    summary: {
      en: 'Kite saves Gon from a foxbear on Whale Island when Gon is a boy.',
      it: 'Kaito salva Gon da un orso-volpe sull’Isola Balena quando Gon è un bambino.',
    },
  },
  gonKon: {
    character: 'kon',
    type: { en: 'Foxbear he raised', it: 'Orso-volpe che ha allevato' },
    summary: {
      en: 'Gon stops Kite from putting Kon down after his mother is killed, raises him and says goodbye to him before leaving for the exam.',
      it: 'Gon impedisce a Kaito di abbattere Kon dopo la morte di sua madre, lo alleva e lo saluta prima di partire per l’esame.',
    },
  },
  gonKurapika: {
    character: 'kurapika',
    type: { en: 'Companion from the ship', it: 'Compagno della nave' },
    summary: {
      en: 'Kurapika meets Gon on the ship to the exam and, with Leorio, holds him by the legs when he dives to catch Katzo.',
      it: 'Kurapika conosce Gon sulla nave per l’esame e, con Leorio, lo tiene per le gambe quando si tuffa ad afferrare Katzo.',
    },
  },
  gonLeorio: {
    character: 'leorio-paradinight',
    type: { en: 'Companion from the ship', it: 'Compagno della nave' },
    summary: {
      en: 'Leorio meets Gon on the ship to the exam and, with Kurapika, holds him by the legs when he dives to catch Katzo.',
      it: 'Leorio conosce Gon sulla nave per l’esame e, con Kurapika, lo tiene per le gambe quando si tuffa ad afferrare Katzo.',
    },
  },
  gonKatzo: {
    character: 'katzo',
    type: { en: 'Crewman he saves', it: 'Marinaio che salva' },
    summary: {
      en: 'When the storm throws Katzo over the side, Gon dives after him and catches him.',
      it: 'Quando la tempesta sbalza Katzo fuori bordo, Gon si tuffa e lo afferra.',
    },
  },
  gonKillua: {
    character: 'killua',
    type: { en: 'Friend his age', it: 'Amico della sua età' },
    summary: {
      en: 'In the First Phase Killua rides past on a skateboard, learns that Gon is nearly his age and runs beside him.',
      it: 'Nella prima prova Killua lo supera sullo skateboard, scopre che Gon ha quasi la sua età e gli corre accanto.',
    },
  },
  gonHisoka: {
    character: 'hisoka',
    type: { en: 'Applicant who spares him', it: 'Aspirante che lo risparmia' },
    summary: {
      en: 'Gon strikes Hisoka with his fishing rod to protect Leorio, and Hisoka seizes him by the throat before letting him go as fit to continue the exam.',
      it: 'Gon colpisce Hisoka con la canna da pesca per difendere Leorio, e Hisoka lo afferra per la gola prima di lasciarlo andare, giudicandolo degno di continuare l’esame.',
    },
  },
  gonHisokaDebt: {
    character: 'hisoka',
    type: {
      en: 'Rival he means to repay',
      it: 'Rivale con cui vuole sdebitarsi',
    },
    summary: {
      en: 'After Gon loses the badge he hooked from Hisoka, Hisoka hands it back, punches him and says he will take it back once Gon can hit him the same way.',
      it: 'Dopo che Gon ha perso la targhetta che aveva agganciato a Hisoka, Hisoka gliela restituisce, lo colpisce con un pugno e dice che se la riprenderà quando Gon saprà colpirlo allo stesso modo.',
    },
  },
  gonKilluaHome: {
    character: 'killua',
    type: {
      en: 'Friend he goes to bring back',
      it: 'Amico che va a riprendere',
    },
    summary: {
      en: 'Gon breaks Illumi’s arm, presses him until he says where Killua has gone and sets off for Killua’s family home to bring him back.',
      it: 'Gon rompe il braccio a Illumi, insiste finché non gli dice dov’è andato Killua e parte per la casa della sua famiglia per riportarlo indietro.',
    },
  },
  gonKurapikaFriend: {
    character: 'kurapika',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Kurapika passes the exam with Gon and sets off with him to bring Killua back from his family’s home.',
      it: 'Kurapika supera l’esame insieme a Gon e parte con lui per riportare indietro Killua dalla casa della sua famiglia.',
    },
  },
  gonLeorioFriend: {
    character: 'leorio-paradinight',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Leorio passes the exam with Gon and joins him on the journey to bring Killua back from his family’s home.',
      it: 'Leorio supera l’esame insieme a Gon e lo accompagna nel viaggio per riportare indietro Killua dalla casa della sua famiglia.',
    },
  },
  gonKilluaTogether: {
    character: 'killua',
    type: { en: 'Friend back at his side', it: 'Amico di nuovo al suo fianco' },
    summary: {
      en: 'Killua is allowed to leave his family’s estate, joins Gon at the butlers’ quarters and leaves with him.',
      it: 'Killua ottiene di lasciare la tenuta di famiglia, raggiunge Gon agli alloggi dei maggiordomi e se ne va con lui.',
    },
  },
  gonGing: {
    character: 'ging-freecss',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Ging left Gon on Whale Island as a baby, and on a tape he left for him he asks Gon whether he wants to see him.',
      it: 'Ging ha lasciato Gon in fasce sull’Isola Balena e, su una cassetta lasciata per lui, gli chiede se vuole vederlo.',
    },
  },
  // Heavens Arena (#947)
  gonWing: {
    character: 'wing',
    type: { en: 'Teacher', it: 'Maestro' },
    summary: {
      en: 'When Hisoka’s Nen stops Gon and Killua on the 200th floor, Wing forces open the points their aura flows from, and they learn Ten before midnight.',
      it: 'Quando il Nen di Hisoka blocca Gon e Killua al 200º piano, Wing apre a forza i punti da cui esce la loro aura, e i due imparano il Ten prima di mezzanotte.',
    },
  },
  gonZushi: {
    character: 'zushi',
    type: { en: 'Wing’s pupil', it: 'Allievo di Wing' },
    summary: {
      en: 'Zushi rides up to the 50th floor with Gon and Killua and, when they ask him about Ren, lists the four principles of Nen.',
      it: 'Zooci sale al 50º piano con Gon e Killua e, quando gli chiedono del Ren, elenca i quattro principi del Nen.',
    },
  },
  // The debt of gonHisokaDebt, settled in chapter 62 and episode 36.
  gonHisokaRepaid: {
    character: 'hisoka',
    type: { en: 'Rival he has repaid', it: 'Rivale con cui si è sdebitato' },
    summary: {
      en: 'In their match at Heavens Arena, Gon punched Hisoka in the face and handed back the badge Hisoka had given him on Zevil Island.',
      it: 'Nel loro incontro all’Arena Celeste, Gon ha colpito Hisoka in faccia con un pugno e gli ha restituito la targhetta che Hisoka gli aveva dato sull’Isola di Zevil.',
    },
  },
  mitoGon: {
    character: 'gon-freecss',
    type: { en: 'Boy she has raised', it: 'Ragazzo che ha cresciuto' },
    summary: {
      en: 'Mito lets Gon take the Hunter Exam after he catches the biggest fish in the swamp, a condition she thought he could not meet.',
      it: 'Myto lascia che Gon sostenga l’Esame Hunter dopo che ha pescato il pesce più grosso della palude, una condizione che credeva impossibile.',
    },
  },
  mitoGing: {
    character: 'ging-freecss',
    type: { en: 'Cousin', it: 'Cugino' },
    summary: {
      en: 'When her cousin Ging came back to Whale Island with a baby son, Mito took the boy into her care.',
      it: 'Quando suo cugino Ging è tornato sull’Isola Balena con un figlio in fasce, Myto ha preso il bambino con sé.',
    },
  },
  // Anime wording: episode 37 has Ging ask his grandmother to look after the
  // baby; Mito taking the boy in is chapter 65's.
  mitoGingEpisode: {
    character: 'ging-freecss',
    type: { en: 'Cousin', it: 'Cugino' },
    summary: {
      en: 'Her cousin Ging came back to Whale Island with a baby son and asked his grandmother to take care of him.',
      it: 'Suo cugino Ging è tornato sull’Isola Balena con un figlio in fasce e ha chiesto a sua nonna di occuparsene.',
    },
  },
  leorioKurapika: {
    character: 'kurapika',
    type: {
      en: 'Fellow applicant he quarrels with',
      it: 'Aspirante con cui litiga',
    },
    summary: {
      en: 'Leorio insults Kurapika’s clan and the two go on deck to fight, then make up after they help Gon save Katzo.',
      it: 'Leorio insulta il clan di Kurapika e i due salgono in coperta per battersi, poi fanno pace dopo aver aiutato Gon a salvare Katzo.',
    },
  },
  leorioGon: {
    character: 'gon-freecss',
    type: { en: 'Fellow passenger', it: 'Compagno di viaggio' },
    summary: {
      en: 'When Gon dives overboard to catch Katzo, Leorio and Kurapika grab him by the legs.',
      it: 'Quando Gon si tuffa fuori bordo per afferrare Katzo, Leorio e Kurapika lo prendono per le gambe.',
    },
  },
  leorioKatzo: {
    character: 'katzo',
    type: { en: 'Crewman he helps save', it: 'Marinaio che aiuta a salvare' },
    summary: {
      en: 'Katzo goes over the side in the storm, and Leorio helps pull him back by holding on to Gon, who has caught him.',
      it: 'Durante la tempesta Katzo cade oltre la murata, e Leorio aiuta a recuperarlo tenendo Gon, che lo ha afferrato.',
    },
  },
  leorioKiriko: {
    character: 'kiriko',
    type: { en: 'Navigators who pass him', it: 'Navigatori che lo promuovono' },
    summary: {
      en: 'Leorio stays behind to tend the man he finds wounded on the floor, and the Kiriko fly him to the exam with Gon and Kurapika.',
      it: 'Leorio resta indietro a curare l’uomo che trova ferito a terra, e i Kiriko lo portano in volo all’esame con Gon e Kurapika.',
    },
  },
  leorioKurapikaConfidant: {
    character: 'kurapika',
    type: {
      en: 'Fellow applicant he confides in',
      it: 'Compagno d’esame con cui si confida',
    },
    summary: {
      en: 'During the run Kurapika presses him, and Leorio admits he wants to be a doctor because a friend died of an illness they could not pay to treat.',
      it: 'Durante la corsa Kurapika insiste, e Leorio ammette di voler fare il medico perché un suo amico è morto di una malattia che non potevano permettersi di curare.',
    },
  },
  leorioGonRun: {
    character: 'gon-freecss',
    type: { en: 'Boy who waits for him', it: 'Ragazzo che lo aspetta' },
    summary: {
      en: 'When Leorio is ready to quit the run, Gon refuses to leave him behind, and Leorio starts running again.',
      it: 'Quando Leorio sta per arrendersi durante la corsa, Gon non vuole lasciarlo indietro, e Leorio riprende a correre.',
    },
  },
  leorioTonpa: {
    character: 'tonpa',
    type: {
      en: 'Veteran who offers him a spiked drink',
      it: 'Veterano che gli offre un succo drogato',
    },
    summary: {
      en: 'Tonpa offers Leorio juice laced with a laxative, and Leorio does not fall for it.',
      it: 'Tonpa offre a Leorio un succo con un lassativo, e Leorio non ci casca.',
    },
  },
  leorioHisoka: {
    character: 'hisoka',
    type: {
      en: 'Applicant who knocks him out',
      it: 'Aspirante che lo mette al tappeto',
    },
    summary: {
      en: 'Leorio turns back to attack Hisoka in the swamp, is knocked out and is carried by Hisoka to the next site.',
      it: 'Leorio torna indietro per attaccare Hisoka nella palude, viene messo al tappeto e Hisoka lo porta in spalla al luogo della prova successiva.',
    },
  },
  leorioLeroute: {
    character: 'leroute',
    type: { en: 'Prisoner who beats him', it: 'Prigioniera che lo batte' },
    summary: {
      en: 'Leroute beats Leorio in their match with a series of bets that ends in rock-paper-scissors.',
      it: 'Leroute batte Leorio nel loro incontro con una serie di scommesse che finisce a morra cinese.',
    },
  },
  leorioTonpaForfeit: {
    character: 'tonpa',
    type: {
      en: 'Teammate who loses on purpose',
      it: 'Compagno di squadra che perde apposta',
    },
    summary: {
      en: 'In Trick Tower Tonpa gives up his match at once, to make it harder for Leorio’s group to pass.',
      it: 'Nella Torre di Lotta Tonpa si arrende subito nel suo incontro, per rendere più difficile il passaggio al gruppo di Leorio.',
    },
  },
  leorioKurapikaTeam: {
    character: 'kurapika',
    type: { en: 'Partner on Zevil Island', it: 'Compagno sull’Isola di Zevil' },
    summary: {
      en: 'Kurapika stops Tonpa after he tricks Leorio, and from then on the two work together on the island.',
      it: 'Kurapika ferma Tonpa dopo che ha ingannato Leorio, e da quel momento i due lavorano insieme sull’isola.',
    },
  },
  leorioTonpaBadge: {
    character: 'tonpa',
    type: {
      en: 'Applicant who steals his badge',
      it: 'Aspirante che gli ruba la targhetta',
    },
    summary: {
      en: 'Tonpa and another applicant trick Leorio out of his badge on Zevil Island, and Leorio gets it back with Kurapika’s help.',
      it: 'Tonpa e un altro aspirante sottraggono con l’inganno la targhetta a Leorio sull’Isola di Zevil, e Leorio la recupera con l’aiuto di Kurapika.',
    },
  },
  leorioKillua: {
    character: 'killua',
    type: {
      en: 'Boy he urges to fight',
      it: 'Ragazzo che sprona a combattere',
    },
    summary: {
      en: 'When Illumi tells Killua he cannot have friends, Leorio shouts at him to beat his brother, because Gon is already his friend.',
      it: 'Quando Illumi dice a Killua che non può avere amici, Leorio gli grida di battere suo fratello, perché Gon è già suo amico.',
    },
  },
  leorioIllumi: {
    character: 'illumi',
    type: { en: 'Applicant he blocks', it: 'Aspirante a cui sbarra la strada' },
    summary: {
      en: 'When Illumi sets out to kill Gon, Leorio blocks the door with Kurapika and Hanzo.',
      it: 'Quando Illumi decide di uccidere Gon, Leorio blocca la porta insieme a Kurapika e Hanzo.',
    },
  },
  leorioKilluaRescue: {
    character: 'killua',
    type: {
      en: 'Boy he sets out to bring back',
      it: 'Ragazzo che parte a riprendere',
    },
    summary: {
      en: 'Leorio tells the chairman that Killua may have killed Bodoro to help him, then leaves with Gon and Kurapika to bring Killua back from his family.',
      it: 'Leorio fa notare al presidente che Killua potrebbe aver ucciso Bodoro per aiutarlo, poi parte con Gon e Kurapika per riportarlo via dalla sua famiglia.',
    },
  },
  kurapikaLeorio: {
    character: 'leorio-paradinight',
    type: {
      en: 'Fellow applicant he quarrels with',
      it: 'Aspirante con cui litiga',
    },
    summary: {
      en: 'Kurapika and Leorio go on deck to fight after Leorio insults his clan, and they make up once they have helped Gon save Katzo.',
      it: 'Kurapika e Leorio salgono in coperta per battersi dopo che Leorio ha insultato il suo clan, e fanno pace dopo aver aiutato Gon a salvare Katzo.',
    },
  },
  kurapikaGon: {
    character: 'gon-freecss',
    type: { en: 'Fellow passenger', it: 'Compagno di viaggio' },
    summary: {
      en: 'Kurapika grabs one of Gon’s legs when Gon dives overboard to catch Katzo.',
      it: 'Kurapika afferra una gamba di Gon quando lui si tuffa fuori bordo per prendere Katzo.',
    },
  },
  kurapikaKatzo: {
    character: 'katzo',
    type: { en: 'Crewman he helps save', it: 'Marinaio che aiuta a salvare' },
    summary: {
      en: 'Katzo goes over the side in the storm, and Kurapika helps hold Gon, who has caught him.',
      it: 'Durante la tempesta Katzo cade oltre la murata, e Kurapika aiuta a trattenere Gon, che lo ha afferrato.',
    },
  },
  kurapikaGonTree: {
    character: 'gon-freecss',
    type: {
      en: 'Boy whose lead he follows',
      it: 'Ragazzo di cui segue l’esempio',
    },
    summary: {
      en: 'Kurapika follows Gon to the tree instead of taking the bus, curious to see what he will do.',
      it: 'Kurapika segue Gon verso l’albero invece di prendere l’autobus, curioso di vedere che cosa farà.',
    },
  },
  kurapikaKiriko: {
    character: 'kiriko',
    type: { en: 'Navigators who pass him', it: 'Navigatori che lo promuovono' },
    summary: {
      en: 'Kurapika grows wary of the tattoos on the daughter’s arm and strikes a Kiriko posing as Leorio, and the navigators fly him to the exam.',
      it: 'Kurapika diffida dei tatuaggi sul braccio della figlia e colpisce un Kiriko con l’aspetto di Leorio: i navigatori lo portano in volo all’esame.',
    },
  },
  kurapikaLeorioConfidant: {
    character: 'leorio-paradinight',
    type: {
      en: 'Fellow applicant he opens up to',
      it: 'Compagno d’esame con cui si apre',
    },
    summary: {
      en: 'During the run Kurapika tells Leorio about his clan’s Scarlet Eyes and his plan to recover them, then hears Leorio’s real reason for wanting money.',
      it: 'Durante la corsa Kurapika racconta a Leorio degli occhi scarlatti del suo clan e del suo piano per recuperarli, poi ascolta il vero motivo per cui Leorio vuole i soldi.',
    },
  },
  kurapikaTonpa: {
    character: 'tonpa',
    type: {
      en: 'Veteran who offers him a spiked drink',
      it: 'Veterano che gli offre un succo drogato',
    },
    summary: {
      en: 'Tonpa offers Kurapika juice laced with a laxative, and Kurapika pours it out.',
      it: 'Tonpa offre a Kurapika un succo con un lassativo, e Kurapika lo versa a terra.',
    },
  },
  kurapikaHisoka: {
    character: 'hisoka',
    type: { en: 'Applicant he escapes', it: 'Aspirante a cui sfugge' },
    summary: {
      en: 'In the swamp Hisoka kills nearly all the applicants around Kurapika, who gets away by running off in a different direction from Leorio.',
      it: 'Nella palude Hisoka uccide quasi tutti gli aspiranti intorno a Kurapika, che si salva scappando in una direzione diversa da Leorio.',
    },
  },
  kurapikaMajtani: {
    character: 'majtani',
    type: {
      en: 'Prisoner with a fake spider tattoo',
      it: 'Prigioniero con un falso tatuaggio del ragno',
    },
    summary: {
      en: 'On seeing the spider on Majtani’s back, Kurapika knocks him out with one punch and warns him never to mention the Phantom Troupe again.',
      it: 'Vedendo il ragno sulla schiena di Majtani, Kurapika lo stende con un pugno e lo avverte di non nominare mai più la Brigata Fantasma.',
    },
  },
  kurapikaLeorioTeam: {
    character: 'leorio-paradinight',
    type: { en: 'Partner on Zevil Island', it: 'Compagno sull’Isola di Zevil' },
    summary: {
      en: 'After stopping Tonpa, Kurapika teams up with Leorio and helps him get his badge back.',
      it: 'Dopo aver fermato Tonpa, Kurapika si allea con Leorio e lo aiuta a riprendersi la targhetta.',
    },
  },
  kurapikaTonpaTarget: {
    character: 'tonpa',
    type: {
      en: 'Applicant whose badge he takes',
      it: 'Aspirante a cui prende la targhetta',
    },
    summary: {
      en: 'On Zevil Island Kurapika stops Tonpa after he tricks Leorio, and takes his badge to reach the points he needs.',
      it: 'Sull’Isola di Zevil Kurapika ferma Tonpa dopo che ha ingannato Leorio, e gli prende la targhetta per raggiungere i punti che gli servono.',
    },
  },
  kurapikaHisokaMatch: {
    character: 'hisoka',
    type: {
      en: 'Opponent who concedes to him',
      it: 'Avversario che gli concede la vittoria',
    },
    summary: {
      en: 'In the Final Phase Hisoka whispers something to Kurapika during their match and then concedes, so Kurapika passes the exam.',
      it: 'Nella prova finale Hisoka sussurra qualcosa a Kurapika durante l’incontro e poi si arrende, così Kurapika supera l’esame.',
    },
  },
  kurapikaIllumi: {
    character: 'illumi',
    type: { en: 'Applicant he blocks', it: 'Aspirante a cui sbarra la strada' },
    summary: {
      en: 'When Illumi sets out to kill Gon, Kurapika stands at the door with Leorio and Hanzo to stop him.',
      it: 'Quando Illumi decide di uccidere Gon, Kurapika si mette davanti alla porta con Leorio e Hanzo per fermarlo.',
    },
  },
  kurapikaKillua: {
    character: 'killua',
    type: { en: 'Boy he defends', it: 'Ragazzo che difende' },
    summary: {
      en: 'Kurapika argues that Killua may have been hypnotized into killing Bodoro, then leaves with Gon and Leorio to bring him back.',
      it: 'Kurapika sostiene che Killua potrebbe essere stato ipnotizzato per uccidere Bodoro, poi parte con Gon e Leorio per riportarlo indietro.',
    },
  },
  katzoGon: {
    character: 'gon-freecss',
    type: { en: 'Boy who saves him', it: 'Ragazzo che lo salva' },
    summary: {
      en: 'When Katzo goes over the side in the storm, Gon dives after him and catches him.',
      it: 'Quando Katzo cade fuori bordo durante la tempesta, Gon si tuffa e lo afferra.',
    },
  },
  katzoLeorio: {
    character: 'leorio-paradinight',
    type: {
      en: 'Passenger who helps save him',
      it: 'Passeggero che aiuta a salvarlo',
    },
    summary: {
      en: 'Leorio holds Gon by one leg while Gon holds on to Katzo, and Katzo thanks him afterwards.',
      it: 'Leorio tiene Gon per una gamba mentre Gon trattiene Katzo, che poi lo ringrazia.',
    },
  },
  katzoKurapika: {
    character: 'kurapika',
    type: {
      en: 'Passenger who helps save him',
      it: 'Passeggero che aiuta a salvarlo',
    },
    summary: {
      en: 'Kurapika holds Gon by one leg while Gon holds on to Katzo, and Katzo thanks him afterwards.',
      it: 'Kurapika tiene Gon per una gamba mentre Gon trattiene Katzo, che poi lo ringrazia.',
    },
  },
  kirikoGon: {
    character: 'gon-freecss',
    type: {
      en: 'Applicant who tells them apart',
      it: 'Aspirante che li distingue',
    },
    summary: {
      en: 'Gon strikes the Kiriko carrying off the woman, then sees that the Kiriko who corners him is not the one he hit, and the navigators pass him.',
      it: 'Gon colpisce il Kiriko che porta via la donna, poi capisce che quello che lo mette all’angolo non è lo stesso, e i navigatori lo promuovono.',
    },
  },
  kirikoKurapika: {
    character: 'kurapika',
    type: {
      en: 'Applicant who notices the tattoos',
      it: 'Aspirante che nota i tatuaggi',
    },
    summary: {
      en: 'Kurapika grows wary of the tattoos on the daughter’s arm and strikes the Kiriko posing as Leorio, and the navigators pass him.',
      it: 'Kurapika diffida dei tatuaggi sul braccio della figlia e colpisce il Kiriko con l’aspetto di Leorio, e i navigatori lo promuovono.',
    },
  },
  kirikoLeorio: {
    character: 'leorio-paradinight',
    type: {
      en: 'Applicant who tends the wounded man',
      it: 'Aspirante che cura il ferito',
    },
    summary: {
      en: 'Leorio stays behind to treat the man lying wounded on the floor, and the navigators pass him with the others.',
      it: 'Leorio resta indietro a curare l’uomo ferito a terra, e i navigatori lo promuovono insieme agli altri.',
    },
  },
  // Tonpa
  tonpaGon: {
    character: 'gon-freecss',
    type: {
      en: 'Rookie who sees through his juice',
      it: 'Matricola che smaschera il suo succo',
    },
    summary: {
      en: 'Gon tastes that something is wrong with the laxative juice Tonpa offers him.',
      it: 'Gon sente che c’è qualcosa che non va nel succo al lassativo che Tonpa gli offre.',
    },
  },
  tonpaLeorio: {
    character: 'leorio-paradinight',
    type: {
      en: 'Rookie he tries to trick',
      it: 'Matricola che cerca di ingannare',
    },
    summary: {
      en: 'Tonpa offers Leorio juice laced with a laxative, but Leorio does not fall for it.',
      it: 'Tonpa offre a Leorio un succo con un lassativo, ma Leorio non ci casca.',
    },
  },
  tonpaKurapika: {
    character: 'kurapika',
    type: {
      en: 'Rookie who pours his juice away',
      it: 'Matricola che versa via il suo succo',
    },
    summary: {
      en: 'Kurapika pours away the laxative juice Tonpa offers him.',
      it: 'Kurapika versa via il succo al lassativo che Tonpa gli offre.',
    },
  },
  tonpaKillua: {
    character: 'killua',
    type: {
      en: 'Rookie immune to his juice',
      it: 'Matricola immune al suo succo',
    },
    summary: {
      en: 'Killua drinks Tonpa’s laxative juice, asks for more and says that poison has no effect on him.',
      it: 'Killua beve il succo al lassativo di Tonpa, ne chiede ancora e dice che il veleno non gli fa effetto.',
    },
  },
  tonpaNicholas: {
    character: 'nicholas',
    type: { en: 'Rookie he gets rid of', it: 'Matricola di cui si sbarazza' },
    summary: {
      en: 'Nicholas turns down Tonpa’s juice. During the run Tonpa pays the applicants who mock Nicholas until he breaks down.',
      it: 'Nicole rifiuta il succo di Tonpa. Durante la corsa Tonpa paga gli aspiranti che deridono Nicole finché non crolla.',
    },
  },
  tonpaLeorioTower: {
    character: 'leorio-paradinight',
    type: {
      en: 'Teammate he angers',
      it: 'Compagno di squadra che fa infuriare',
    },
    summary: {
      en: 'In Trick Tower Tonpa gives up his match at once, and a furious Leorio hears him admit that he only wants to ruin rookies.',
      it: 'Nella Torre di Lotta Tonpa si arrende subito, e Leorio, furioso, lo sente ammettere che vuole solo rovinare le matricole.',
    },
  },
  tonpaBendot: {
    character: 'bendot',
    type: {
      en: 'Prisoner he surrenders to',
      it: 'Prigioniero a cui si arrende',
    },
    summary: {
      en: 'Tonpa gives up the moment Bendot attacks him in their Trick Tower match.',
      it: 'Tonpa si arrende appena Bendot lo attacca nel loro incontro nella Torre di Lotta.',
    },
  },
  tonpaLeorioIsland: {
    character: 'leorio-paradinight',
    type: { en: 'Rookie he robs', it: 'Matricola che deruba' },
    summary: {
      en: 'On Zevil Island Tonpa and another applicant trick Leorio out of his badge. Leorio and Kurapika catch Tonpa and tie him to a rock.',
      it: 'Sull’Isola di Zevil Tonpa e un altro aspirante sottraggono a Leorio la sua targhetta con un inganno. Leorio e Kurapika prendono Tonpa e lo legano a una roccia.',
    },
  },
  tonpaKurapikaIsland: {
    character: 'kurapika',
    type: { en: 'Rookie who stops him', it: 'Matricola che lo ferma' },
    summary: {
      en: 'On Zevil Island Kurapika stops Tonpa and takes his badge.',
      it: 'Sull’Isola di Zevil Kurapika ferma Tonpa e gli prende la targhetta.',
    },
  },
  tonpaSommy: {
    character: 'sommy',
    type: { en: 'Accomplice', it: 'Complice' },
    summary: {
      en: 'On Zevil Island Sommy helps Tonpa trick Leorio and grab his badge.',
      it: 'Sull’Isola di Zevil Somy aiuta Tonpa a ingannare Leorio e a prendergli la targhetta.',
    },
  },
  hisokaGon: {
    character: 'gon-freecss',
    type: { en: 'Boy he lets pass', it: 'Ragazzo che lascia passare' },
    summary: {
      en: 'Gon hits Hisoka with his fishing rod in the swamp, and Hisoka grabs him by the throat, then lets him go and tells him he has passed.',
      it: 'Nella palude Gon colpisce Hisoka con la canna da pesca, e Hisoka lo afferra per la gola, poi lo lascia andare e gli dice che è promosso.',
    },
  },
  hisokaLeorio: {
    character: 'leorio-paradinight',
    type: {
      en: 'Applicant he knocks out',
      it: 'Aspirante che mette al tappeto',
    },
    summary: {
      en: 'Leorio comes back to attack Hisoka, who knocks him out, judges him worthy to go on and carries him to the next site.',
      it: 'Leorio torna ad attaccare Hisoka, che lo mette al tappeto, lo giudica degno di proseguire e lo porta in spalla al luogo della prova successiva.',
    },
  },
  hisokaKurapika: {
    character: 'kurapika',
    type: { en: 'Applicant who escapes him', it: 'Aspirante che gli sfugge' },
    summary: {
      en: 'Kurapika is among the applicants Hisoka attacks in the swamp, and runs off to escape him.',
      it: 'Kurapika è tra gli aspiranti che Hisoka attacca nella palude, e scappa per salvarsi.',
    },
  },
  hisokaTogari: {
    character: 'togari',
    type: { en: 'Former examiner he kills', it: 'Ex esaminatore che uccide' },
    summary: {
      en: 'Togari waits for Hisoka in Trick Tower to avenge the scars Hisoka gave him the year before, and Hisoka kills him with his own knives.',
      it: 'Togari aspetta Hisoka nella Torre di Lotta per vendicarsi delle cicatrici che gli ha lasciato l’anno prima, e Hisoka lo uccide con i suoi stessi coltelli.',
    },
  },
  hisokaGonBadge: {
    character: 'gon-freecss',
    type: {
      en: 'Boy who takes his badge',
      it: 'Ragazzo che gli prende la targhetta',
    },
    summary: {
      en: 'Gon hooks Hisoka’s badge on Zevil Island, and Hisoka gives it back, punches him and says he will take it back once Gon can hit him like that.',
      it: 'Sull’Isola di Zevil Gon aggancia la targhetta di Hisoka, e Hisoka gliela restituisce, gli dà un pugno e dice che se la riprenderà quando Gon saprà colpirlo allo stesso modo.',
    },
  },
  hisokaKurapikaBadge: {
    character: 'kurapika',
    type: {
      en: 'Applicant who bargains with him',
      it: 'Aspirante che tratta con lui',
    },
    summary: {
      en: 'On Zevil Island Kurapika offers Hisoka a one-point badge to leave him and Leorio alone, and Hisoka accepts.',
      it: 'Sull’Isola di Zevil Kurapika offre a Hisoka una targhetta da un punto perché lasci andare lui e Leorio, e Hisoka accetta.',
    },
  },
  hisokaGeretta: {
    character: 'geretta',
    type: { en: 'Target he kills', it: 'Bersaglio che uccide' },
    summary: {
      en: 'Geretta, Hisoka’s target, paralyzes Gon and takes both badges from him, and Hisoka kills him.',
      it: 'Ghereta, il bersaglio di Hisoka, paralizza Gon e gli prende entrambe le targhette, e Hisoka lo uccide.',
    },
  },
  hisokaGittarackur: {
    character: 'gittarackur',
    type: { en: 'Applicant who knows him', it: 'Aspirante che lo conosce' },
    summary: {
      en: 'On Zevil Island Gittarackur kills an applicant who is attacking Hisoka and hands him another applicant’s badge.',
      it: 'Sull’Isola di Zevil Ghitarakur uccide un aspirante che sta attaccando Hisoka e gli consegna la targhetta di un altro aspirante.',
    },
  },
  hisokaIllumi: {
    character: 'illumi',
    type: { en: 'Ally in the exam', it: 'Alleato nell’esame' },
    summary: {
      en: 'Illumi, who took the exam as Gittarackur, kills an applicant attacking Hisoka on Zevil Island and hands him a badge.',
      it: 'Illumi, iscritto all’esame come Ghitarakur, uccide sull’Isola di Zevil un aspirante che attacca Hisoka e gli consegna una targhetta.',
    },
  },
  hisokaKurapikaMatch: {
    character: 'kurapika',
    type: { en: 'Opponent he concedes to', it: 'Avversario a cui si arrende' },
    summary: {
      en: 'In the Final Phase Hisoka fights Kurapika for a while, whispers something to him and concedes.',
      it: 'Nella prova finale Hisoka combatte per un po’ con Kurapika, gli sussurra qualcosa e si arrende.',
    },
  },
  hisokaBodoro: {
    character: 'bodoro',
    type: { en: 'Opponent he beats', it: 'Avversario che sconfigge' },
    summary: {
      en: 'Hisoka beats Bodoro, who refuses to give up until Hisoka whispers something to him.',
      it: 'Hisoka sconfigge Bodoro, che non vuole arrendersi finché Hisoka non gli sussurra qualcosa.',
    },
  },
  hisokaIllumiWarning: {
    character: 'illumi',
    type: {
      en: 'Ally he warns off Gon',
      it: 'Alleato che tiene lontano da Gon',
    },
    summary: {
      en: 'After the exam Illumi thinks of getting rid of Gon, and Hisoka warns him not to touch the boy.',
      it: 'Dopo l’esame Illumi pensa di sbarazzarsi di Gon, e Hisoka lo avverte di non toccarlo.',
    },
  },
  // Heavens Arena (#947)
  hisokaKastro: {
    character: 'kastro',
    type: { en: 'Rival he kills', it: 'Rivale che uccide' },
    summary: {
      en: 'Hisoka beat Kastro two years ago and spared him for his talent. In the rematch he loses both arms to Kastro and his Double, then kills him with his cards.',
      it: 'Hisoka ha battuto Kastro due anni fa e lo ha risparmiato per il suo talento. Nella rivincita perde entrambe le braccia contro Kastro e il suo Doppelgänger, poi lo uccide con le sue carte.',
    },
  },
  // The badge of hisokaGonBadge, handed back in chapter 62 and episode 36.
  hisokaGonReturned: {
    character: 'gon-freecss',
    type: {
      en: 'Boy who returned his badge',
      it: 'Ragazzo che gli ha restituito la targhetta',
    },
    summary: {
      en: 'In their match at Heavens Arena, Gon punched Hisoka in the face and handed back the badge Hisoka had given him on Zevil Island.',
      it: 'Nel loro incontro all’Arena Celeste, Gon ha colpito Hisoka in faccia con un pugno e gli ha restituito la targhetta che Hisoka gli aveva dato sull’Isola di Zevil.',
    },
  },
  // Todo
  todoMenchi: {
    character: 'menchi',
    type: { en: 'Examiner he defies', it: 'Esaminatrice che sfida' },
    summary: {
      en: 'Todo protests when Menchi fails every applicant and charges at her.',
      it: 'Todo protesta quando Menci boccia tutti gli aspiranti e si scaglia contro di lei.',
    },
  },
  todoBuhara: {
    character: 'buhara',
    type: { en: 'Examiner who stops him', it: 'Esaminatore che lo ferma' },
    summary: {
      en: 'Buhara knocks Todo away with a single blow as he charges at Menchi.',
      it: 'Buhara allontana Todo con un solo colpo mentre si scaglia contro Menci.',
    },
  },
  todoGon: {
    character: 'gon-freecss',
    type: {
      en: 'Rookie who shares his egg',
      it: 'Matricola che gli fa assaggiare l’uovo',
    },
    summary: {
      en: 'After the retest Gon lets Todo taste his egg, and Todo says he will try the exam again next year.',
      it: 'Dopo la nuova prova Gon fa assaggiare il suo uovo a Todo, che dice che ritenterà l’esame l’anno dopo.',
    },
  },
  // Geretta
  gerettaGon: {
    character: 'gon-freecss',
    type: { en: 'Target he stalks', it: 'Bersaglio che pedina' },
    summary: {
      en: 'Gon is Geretta’s target on Zevil Island, and Geretta follows him without being seen.',
      it: 'Gon è il bersaglio di Ghereta sull’Isola di Zevil, e Ghereta lo segue senza farsi vedere.',
    },
  },
  gerettaGonBadge: {
    character: 'gon-freecss',
    type: { en: 'Target he paralyzes', it: 'Bersaglio che paralizza' },
    summary: {
      en: 'Geretta paralyzes Gon with a dart and takes both his badge and the one Gon has just taken from Hisoka.',
      it: 'Ghereta paralizza Gon con un dardo e gli prende sia la sua targhetta sia quella che Gon ha appena preso a Hisoka.',
    },
  },
  gerettaHisoka: {
    character: 'hisoka',
    type: { en: 'Applicant who kills him', it: 'Aspirante che lo uccide' },
    summary: {
      en: 'Geretta takes Hisoka’s badge from Gon. Hisoka, whose target he was, kills him soon after.',
      it: 'Ghereta prende a Gon la targhetta di Hisoka. Hisoka, che aveva lui come bersaglio, lo uccide poco dopo.',
    },
  },
  // Cherry
  cherryHisoka: {
    character: 'hisoka',
    type: {
      en: 'Applicant who attacks his group',
      it: 'Aspirante che attacca il suo gruppo',
    },
    summary: {
      en: 'In the swamp Hisoka cuts down the applicants around Cherry, leaving him one of the last three standing.',
      it: 'Nella palude Hisoka abbatte gli aspiranti intorno a Cherry, che resta uno degli ultimi tre in piedi.',
    },
  },
  cherryKurapika: {
    character: 'kurapika',
    type: { en: 'Applicant he flees with', it: 'Aspirante con cui fugge' },
    summary: {
      en: 'Cherry, Kurapika and Leorio are the last left facing Hisoka. On Cherry’s signal they run off in different directions.',
      it: 'Cherry, Kurapika e Leorio sono gli ultimi rimasti davanti a Hisoka. Al segnale di Cherry scappano in direzioni diverse.',
    },
  },
  cherryLeorio: {
    character: 'leorio-paradinight',
    type: { en: 'Applicant he flees with', it: 'Aspirante con cui fugge' },
    summary: {
      en: 'Cherry tells Leorio and Kurapika that splitting up is their only chance against Hisoka. Leorio runs, then goes back to fight.',
      it: 'Cherry dice a Leorio e Kurapika che dividersi è l’unica possibilità contro Hisoka. Leorio scappa, poi torna indietro a combattere.',
    },
  },
  // Hanzo
  hanzoTonpa: {
    character: 'tonpa',
    type: {
      en: 'Veteran whose juice he refuses',
      it: 'Veterano di cui rifiuta il succo',
    },
    summary: {
      en: 'Hanzo turns down the juice Tonpa offers him.',
      it: 'Hanzo rifiuta il succo che Tonpa gli offre.',
    },
  },
  hanzoMenchi: {
    character: 'menchi',
    type: { en: 'Examiner he angers', it: 'Esaminatrice che fa arrabbiare' },
    summary: {
      en: 'Hanzo makes light of the dish Menchi is judging, and she angrily tells him off.',
      it: 'Hanzo sminuisce il piatto che Menci sta giudicando, e lei lo rimprovera con rabbia.',
    },
  },
  hanzoKillua: {
    character: 'killua',
    type: {
      en: 'Rookie who gets there first',
      it: 'Matricola che lo anticipa',
    },
    summary: {
      en: 'On Zevil Island Killua keeps one of the Amori brothers’ badges and throws the other two far away. Hanzo chases one down, and it is not the one he needs.',
      it: 'Sull’Isola di Zevil Killua tiene una delle targhette dei fratelli Amori e lancia lontano le altre due. Hanzo ne insegue una, e non è quella che gli serve.',
    },
  },
  hanzoGon: {
    character: 'gon-freecss',
    type: { en: 'Opponent he lets win', it: 'Avversario che lascia vincere' },
    summary: {
      en: 'In the first Final Phase match Hanzo breaks Gon’s arm to make him give up, then concedes himself and knocks Gon out.',
      it: 'Nel primo incontro della prova finale Hanzo rompe un braccio a Gon per farlo arrendere, poi si arrende lui e lo mette fuori combattimento.',
    },
  },
  hanzoMasta: {
    character: 'masta',
    type: {
      en: 'Examiner who shadowed him',
      it: 'Esaminatore che lo ha seguito',
    },
    summary: {
      en: 'Masta referees Hanzo’s match against Gon. Hanzo tells him he noticed Masta following him during the Fourth Phase.',
      it: 'Masta arbitra l’incontro tra Hanzo e Gon. Hanzo gli dice di essersi accorto che Masta lo seguiva durante la quarta prova.',
    },
  },
  hanzoIllumi: {
    character: 'illumi',
    type: { en: 'Applicant he blocks', it: 'Aspirante a cui sbarra la strada' },
    summary: {
      en: 'When Illumi sets off to kill Gon, Hanzo stands at the door with Kurapika and Leorio to stop him.',
      it: 'Quando Illumi va a uccidere Gon, Hanzo si piazza davanti alla porta con Kurapika e Leorio per fermarlo.',
    },
  },
  hanzoKurapika: {
    character: 'kurapika',
    type: { en: 'Applicant he stands with', it: 'Aspirante al suo fianco' },
    summary: {
      en: 'Kurapika stands at the door with Hanzo to keep Illumi away from Gon.',
      it: 'Kurapika si piazza davanti alla porta con Hanzo per tenere Illumi lontano da Gon.',
    },
  },
  hanzoLeorio: {
    character: 'leorio-paradinight',
    type: { en: 'Applicant he stands with', it: 'Aspirante al suo fianco' },
    summary: {
      en: 'Leorio stands at the door with Hanzo to keep Illumi away from Gon.',
      it: 'Leorio si piazza davanti alla porta con Hanzo per tenere Illumi lontano da Gon.',
    },
  },
  hanzoPokkle: {
    character: 'pokkle',
    type: { en: 'Opponent he beats', it: 'Avversario che batte' },
    summary: {
      en: 'Hanzo uses the tactics he used on Gon against Pokkle, who quickly gives up.',
      it: 'Hanzo usa contro Pockul la tattica usata con Gon, e Pockul si arrende subito.',
    },
  },
  // Nicholas
  nicholasTonpa: {
    character: 'tonpa',
    type: {
      en: 'Veteran whose juice he refuses',
      it: 'Veterano di cui rifiuta il succo',
    },
    summary: {
      en: 'Nicholas turns down the juice Tonpa offers him.',
      it: 'Nicole rifiuta il succo che Tonpa gli offre.',
    },
  },
  nicholasTonpaPaid: {
    character: 'tonpa',
    type: {
      en: 'Veteran who has him broken',
      it: 'Veterano che lo fa crollare',
    },
    summary: {
      en: 'Nicholas turns down Tonpa’s juice. During the run Tonpa pays the Amori brothers for mocking him until he breaks down.',
      it: 'Nicole rifiuta il succo di Tonpa. Durante la corsa Tonpa paga i fratelli Amori per averlo deriso finché non è crollato.',
    },
  },
  nicholasAmori: {
    character: 'amori',
    type: { en: 'Applicant who mocks him', it: 'Aspirante che lo deride' },
    summary: {
      en: 'Amori and his brothers mock Nicholas as he tires during the tunnel run.',
      it: 'Amori e i suoi fratelli deridono Nicole mentre si stanca durante la corsa nel tunnel.',
    },
  },
  nicholasUmori: {
    character: 'umori',
    type: { en: 'Applicant who mocks him', it: 'Aspirante che lo deride' },
    summary: {
      en: 'Umori and his brothers mock Nicholas as he tires during the tunnel run.',
      it: 'Umori e i suoi fratelli deridono Nicole mentre si stanca durante la corsa nel tunnel.',
    },
  },
  nicholasImori: {
    character: 'imori',
    type: { en: 'Applicant who mocks him', it: 'Aspirante che lo deride' },
    summary: {
      en: 'Imori and his brothers mock Nicholas as he tires during the tunnel run.',
      it: 'Imori e i suoi fratelli deridono Nicole mentre si stanca durante la corsa nel tunnel.',
    },
  },
  // Satotz
  satotzHisoka: {
    character: 'hisoka',
    type: { en: 'Applicant who attacks him', it: 'Aspirante che lo attacca' },
    summary: {
      en: 'Hisoka throws cards at Satotz to prove he is the real examiner. Satotz catches them and warns him that another attack means disqualification.',
      it: 'Hisoka lancia delle carte contro Satoshi per dimostrare che è il vero esaminatore. Satoshi le afferra e lo avverte che un altro attacco significa squalifica.',
    },
  },
  satotzGonRace: {
    character: 'gon-freecss',
    type: {
      en: 'Applicant whose race he judges',
      it: 'Aspirante di cui giudica la gara',
    },
    summary: {
      en: 'Gon and Killua race to the tunnel exit and ask Satotz who arrived first. He rules a tie.',
      it: 'Gon e Killua fanno a gara fino all’uscita del tunnel e chiedono a Satoshi chi è arrivato primo. Lui decreta un pareggio.',
    },
  },
  satotzKilluaRace: {
    character: 'killua',
    type: {
      en: 'Applicant whose race he judges',
      it: 'Aspirante di cui giudica la gara',
    },
    summary: {
      en: 'Killua and Gon race to the tunnel exit and ask Satotz who arrived first. He rules a tie.',
      it: 'Killua e Gon fanno a gara fino all’uscita del tunnel e chiedono a Satoshi chi è arrivato primo. Lui decreta un pareggio.',
    },
  },
  satotzMenchi: {
    character: 'menchi',
    type: { en: 'Fellow examiner', it: 'Collega esaminatrice' },
    summary: {
      en: 'Satotz watches Menchi’s Second Phase from a tree, then talks about the applicants with her over dinner on the airship.',
      it: 'Satoshi osserva da un albero la seconda prova di Menci, poi a cena sul dirigibile parla con lei degli aspiranti.',
    },
  },
  satotzBuhara: {
    character: 'buhara',
    type: { en: 'Fellow examiner', it: 'Collega esaminatore' },
    summary: {
      en: 'Satotz watches Buhara’s Second Phase from a tree, then talks about the applicants with him over dinner on the airship.',
      it: 'Satoshi osserva da un albero la seconda prova di Buhara, poi a cena sul dirigibile parla con lui degli aspiranti.',
    },
  },
  satotzGon: {
    character: 'gon-freecss',
    type: {
      en: 'New Hunter he congratulates',
      it: 'Nuovo Hunter con cui si congratula',
    },
    summary: {
      en: 'Satotz waits by Gon’s bed after his match with Hanzo and persuades him to accept his Hunter License.',
      it: 'Satoshi aspetta accanto al letto di Gon dopo l’incontro con Hanzo e lo convince ad accettare la licenza da Hunter.',
    },
  },
  satotzGonFather: {
    character: 'gon-freecss',
    type: {
      en: 'Son of the Hunter he admires',
      it: 'Figlio dell’Hunter che ammira',
    },
    summary: {
      en: 'Satotz persuades Gon to accept his Hunter License. Later he tells Gon about the Hunter who inspired him, who turns out to be Gon’s father.',
      it: 'Satoshi convince Gon ad accettare la licenza da Hunter. Più tardi gli parla dell’Hunter che lo ha ispirato, che si rivela essere il padre di Gon.',
    },
  },
  // Killua
  killuaGon: {
    character: 'gon-freecss',
    type: { en: 'Friend his age', it: 'Amico della sua età' },
    summary: {
      en: 'Killua meets Gon in the First Phase, learns they are nearly the same age and runs beside him.',
      it: 'Killua incontra Gon nella prima prova, scopre che hanno quasi la stessa età e gli corre accanto.',
    },
  },
  killuaLeorio: {
    character: 'leorio-paradinight',
    type: {
      en: 'Applicant he takes for an old man',
      it: 'Aspirante che scambia per un vecchio',
    },
    summary: {
      en: 'Killua is surprised that Leorio is under twenty and, when Leorio falls behind in the run, tells Gon to leave him.',
      it: 'Killua si stupisce che Leorio non abbia ancora vent’anni e, quando resta indietro nella corsa, dice a Gon di lasciarlo perdere.',
    },
  },
  killuaTonpa: {
    character: 'tonpa',
    type: {
      en: 'Applicant whose juice he drinks',
      it: 'Aspirante di cui beve il succo',
    },
    summary: {
      en: 'Killua drinks the laxative juice Tonpa offers, asks for more and says that poison does not work on him.',
      it: 'Killua beve il succo con il lassativo che gli offre Tonpa, ne chiede ancora e dice che i veleni su di lui non hanno effetto.',
    },
  },
  killuaNetero: {
    character: 'netero',
    type: { en: 'Chairman who challenges him', it: 'Presidente che lo sfida' },
    summary: {
      en: 'On the airship Killua tries with Gon to take a ball from Netero and gives up when he sees that Netero has not even needed all his limbs.',
      it: 'Sul dirigibile Killua prova con Gon a prendere la palla a Netero e rinuncia quando capisce che a Netero non sono serviti nemmeno tutti gli arti.',
    },
  },
  killuaKurapika: {
    character: 'kurapika',
    type: {
      en: 'Teammate in the tower',
      it: 'Compagno di squadra nella torre',
    },
    summary: {
      en: 'In Trick Tower Killua offers to kill Kurapika’s unconscious opponent for him, and Kurapika refuses.',
      it: 'Nella Torre di Lotta Killua si offre di uccidere al posto di Kurapika il suo avversario svenuto, e Kurapika rifiuta.',
    },
  },
  killuaJohness: {
    character: 'johness',
    type: { en: 'Prisoner he kills', it: 'Prigioniero che uccide' },
    summary: {
      en: 'Johness says he only wants to kill Killua, and Killua rips out his heart before he can move.',
      it: 'Johnes dice di voler solo uccidere Killua, e Killua gli strappa il cuore prima che possa muoversi.',
    },
  },
  killuaGonFriend: {
    character: 'gon-freecss',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Killua tells his brother that above all he wants to be friends with Gon, then gives up his match when his brother threatens to kill Gon.',
      it: 'Killua dice a suo fratello che più di tutto vuole essere amico di Gon, poi abbandona l’incontro quando il fratello minaccia di uccidere Gon.',
    },
  },
  killuaIllumi: {
    character: 'illumi',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'Illumi reveals himself in the Final Phase, tells Killua he is an assassin who cannot have friends and makes him surrender by threatening Gon.',
      it: 'Illumi si rivela nella prova finale, dice a Killua che è un assassino e non può avere amici e lo costringe ad arrendersi minacciando Gon.',
    },
  },
  killuaLeorioFinal: {
    character: 'leorio-paradinight',
    type: { en: 'Ally in the Final Phase', it: 'Alleato nella prova finale' },
    summary: {
      en: 'During Killua’s match with his brother, Leorio shouts at him to fight and win, because Gon already counts him as a friend.',
      it: 'Durante l’incontro di Killua con il fratello, Leorio gli grida di combattere e vincere, perché Gon lo considera già un amico.',
    },
  },
  killuaBodoro: {
    character: 'bodoro',
    type: { en: 'Applicant he kills', it: 'Aspirante che uccide' },
    summary: {
      en: 'When Bodoro’s match with Leorio begins, Killua kills him from behind and is disqualified.',
      it: 'Quando inizia l’incontro di Bodoro con Leorio, Killua lo uccide alle spalle e viene squalificato.',
    },
  },
  killuaZeno: {
    character: 'zeno',
    type: { en: 'Grandfather', it: 'Nonno' },
    summary: {
      en: 'Zeno ends Killua’s punishment in his cell and tells him that his father wants to see him.',
      it: 'Zeno mette fine alla punizione di Killua nella sua cella e gli dice che suo padre vuole vederlo.',
    },
  },
  killuaMilluki: {
    character: 'milluki',
    type: { en: 'Older brother', it: 'Fratello maggiore' },
    summary: {
      en: 'Milluki whips Killua while he is chained up at home, and Killua warns him not to touch his friends.',
      it: 'Milki frusta Killua mentre è incatenato a casa, e Killua lo avverte di non toccare i suoi amici.',
    },
  },
  killuaGonTogether: {
    character: 'gon-freecss',
    type: {
      en: 'Friend he leaves home to join',
      it: 'Amico per cui lascia casa',
    },
    summary: {
      en: 'After promising his father never to betray his friends, Killua joins Gon at the butlers’ quarters and leaves the family estate with him.',
      it: 'Dopo aver promesso a suo padre di non tradire mai i suoi amici, Killua raggiunge Gon agli alloggi dei maggiordomi e lascia con lui la tenuta di famiglia.',
    },
  },
  // Heavens Arena (#947)
  killuaZushi: {
    character: 'zushi',
    type: {
      en: 'Opponent he cannot knock out',
      it: 'Avversario che non riesce a mettere KO',
    },
    summary: {
      en: 'Killua beats Zushi on the 57th floor but cannot knock him out, and the new stance Zushi takes gives him the same feeling Illumi does.',
      it: 'Killua batte Zooci al 57º piano ma non riesce a metterlo KO, e la nuova posizione presa da Zooci gli dà la stessa sensazione che gli dà Illumi.',
    },
  },
  killuaWing: {
    character: 'wing',
    type: { en: 'Teacher', it: 'Maestro' },
    summary: {
      en: 'Killua sees through Wing’s first, false lesson. When Hisoka’s Nen stops him and Gon on the 200th floor, Wing forces open the points their aura flows from, and they learn Ten before midnight.',
      it: 'Killua non crede alla prima lezione, falsa, di Wing. Quando il Nen di Hisoka blocca lui e Gon al 200º piano, Wing apre a forza i punti da cui esce la loro aura, e i due imparano il Ten prima di mezzanotte.',
    },
  },
  killuaZushiRescue: {
    character: 'zushi',
    type: {
      en: 'Fellow pupil he gets back',
      it: 'Compagno che riporta indietro',
    },
    summary: {
      en: 'Killua trains with Zushi under Wing and, when Sadaso seizes Zushi, steps in and promises to let Sadaso’s group win in exchange for the boy.',
      it: 'Killua si allena con Zooci sotto la guida di Wing e, quando Sadaso afferra Zooci, interviene e promette di lasciar vincere il gruppo di Sadaso in cambio del ragazzo.',
    },
  },
  killuaSadaso: {
    character: 'sadaso',
    type: { en: 'Fighter he threatens', it: 'Lottatore che minaccia' },
    summary: {
      en: 'When Sadaso’s group breaks the deal made for Zushi, Killua gets to Sadaso unseen before their match and threatens to kill him if he ever shows his face again. Sadaso does not show up for the match.',
      it: 'Quando il gruppo di Sadaso rompe il patto fatto per Zooci, Killua raggiunge Sadaso di nascosto prima del loro incontro e lo minaccia di morte se si farà vedere ancora. Sadaso non si presenta all’incontro.',
    },
  },
  // Menchi
  menchiBuhara: {
    character: 'buhara',
    type: { en: 'Fellow examiner', it: 'Collega esaminatore' },
    summary: {
      en: 'Buhara sets the Second Phase with Menchi. When Todo charges at her, he knocks Todo away and says she would otherwise have killed him.',
      it: 'Buhara conduce la seconda prova con Menci. Quando Todo si scaglia contro di lei, lo allontana e dice che altrimenti lei lo avrebbe ucciso.',
    },
  },
  menchiNetero: {
    character: 'netero',
    type: { en: 'Chairman who corrects her', it: 'Presidente che la corregge' },
    summary: {
      en: 'Netero arrives after Menchi fails every applicant. She admits she lost her temper, and he has her set a new test and show how it is done.',
      it: 'Netero arriva dopo che Menci ha bocciato tutti gli aspiranti. Lei ammette di aver perso la calma, e lui le fa preparare una nuova prova e mostrare come si supera.',
    },
  },
  menchiTodo: {
    character: 'todo',
    type: { en: 'Applicant who attacks her', it: 'Aspirante che la attacca' },
    summary: {
      en: 'Todo protests when Menchi fails everyone and charges at her, until Buhara knocks him away.',
      it: 'Todo protesta quando Menci boccia tutti e si scaglia contro di lei, finché Buhara non lo allontana.',
    },
  },
  menchiHanzo: {
    character: 'hanzo',
    type: { en: 'Applicant she scolds', it: 'Aspirante che rimprovera' },
    summary: {
      en: 'Hanzo makes light of the dish Menchi is judging, and she angrily tells him off.',
      it: 'Hanzo sminuisce il piatto che Menci sta giudicando, e lei lo rimprovera con rabbia.',
    },
  },
  menchiSatotz: {
    character: 'satotz',
    type: { en: 'Fellow examiner', it: 'Collega esaminatore' },
    summary: {
      en: 'Menchi talks about the applicants with Satotz over dinner on the airship.',
      it: 'A cena sul dirigibile Menci parla degli aspiranti con Satoshi.',
    },
  },
  // Buhara
  buharaMenchi: {
    character: 'menchi',
    type: { en: 'Fellow examiner', it: 'Collega esaminatrice' },
    summary: {
      en: 'Buhara sets the Second Phase with Menchi and worries about her temper. He stops Todo from attacking her, saying she would otherwise have killed him.',
      it: 'Buhara conduce la seconda prova con Menci e teme il suo temperamento. Ferma Todo che la attacca, dicendo che altrimenti lei lo avrebbe ucciso.',
    },
  },
  buharaTodo: {
    character: 'todo',
    type: {
      en: 'Applicant he strikes down',
      it: 'Aspirante che mette a terra',
    },
    summary: {
      en: 'Buhara knocks Todo away with a single blow when he charges at Menchi.',
      it: 'Buhara allontana Todo con un solo colpo quando si scaglia contro Menci.',
    },
  },
  buharaSatotz: {
    character: 'satotz',
    type: { en: 'Fellow examiner', it: 'Collega esaminatore' },
    summary: {
      en: 'Buhara talks about the applicants with Satotz over dinner on the airship.',
      it: 'A cena sul dirigibile Buhara parla degli aspiranti con Satoshi.',
    },
  },
  buharaHisoka: {
    character: 'hisoka',
    type: {
      en: 'Applicant he singles out',
      it: 'Aspirante che tiene d’occhio',
    },
    summary: {
      en: 'At the examiners’ dinner Buhara recalls the menace Hisoka showed during the Second Phase.',
      it: 'Alla cena degli esaminatori Buhara ricorda la minaccia che Hisoka ha mostrato durante la seconda prova.',
    },
  },
  // Netero
  neteroMenchi: {
    character: 'menchi',
    type: { en: 'Examiner he corrects', it: 'Esaminatrice che corregge' },
    summary: {
      en: 'Netero comes down from the airship after Menchi fails everyone. She admits she lost her temper, and he has her set a new test and show how it is done.',
      it: 'Netero scende dal dirigibile dopo che Menci ha bocciato tutti. Lei ammette di aver perso la calma, e lui le fa preparare una nuova prova e mostrare come si supera.',
    },
  },
  neteroGon: {
    character: 'gon-freecss',
    type: { en: 'Rookie he challenges', it: 'Matricola che mette alla prova' },
    summary: {
      en: 'Netero dares Gon to take a ball from him. Gon fails, but makes him use his other hand.',
      it: 'Netero sfida Gon a prendergli una palla. Gon non ci riesce, ma lo costringe a usare l’altra mano.',
    },
  },
  neteroKillua: {
    character: 'killua',
    type: { en: 'Rookie he challenges', it: 'Matricola che mette alla prova' },
    summary: {
      en: 'Killua tries Netero’s ball game, cannot take the ball and gives up.',
      it: 'Killua prova il gioco della palla di Netero, non riesce a prenderla e rinuncia.',
    },
  },
  neteroGonFinal: {
    character: 'gon-freecss',
    type: {
      en: 'New Hunter he agrees with',
      it: 'Nuovo Hunter a cui dà ragione',
    },
    summary: {
      en: 'Gon makes Netero use his other hand in the ball game. After the exam Netero agrees with him that Killua would pass a retake.',
      it: 'Nel gioco della palla Gon costringe Netero a usare l’altra mano. Dopo l’esame Netero gli dà ragione: Killua passerebbe, se ritentasse.',
    },
  },
  neteroKilluaFinal: {
    character: 'killua',
    type: {
      en: 'Applicant whose disqualification he upholds',
      it: 'Aspirante di cui conferma la squalifica',
    },
    summary: {
      en: 'Killua gives up on Netero’s ball game. At the end of the exam Netero keeps his disqualification, finding no proof that someone controlled him.',
      it: 'Killua rinuncia al gioco della palla di Netero. Alla fine dell’esame Netero conferma la sua squalifica, perché non c’è prova che qualcuno lo controllasse.',
    },
  },
  neteroKurapika: {
    character: 'kurapika',
    type: {
      en: 'New Hunter who argues with him',
      it: 'Nuovo Hunter che lo contesta',
    },
    summary: {
      en: 'Kurapika argues that Killua acted under someone else’s control. Netero calls it guesswork.',
      it: 'Kurapika sostiene che Killua ha agito sotto il controllo di qualcun altro. Per Netero sono solo supposizioni.',
    },
  },
  neteroLeorio: {
    character: 'leorio-paradinight',
    type: {
      en: 'New Hunter who argues with him',
      it: 'Nuovo Hunter che lo contesta',
    },
    summary: {
      en: 'Leorio argues that he should fail instead of Killua. Netero answers that Leorio never needed Killua’s help.',
      it: 'Leorio sostiene che dovrebbe essere bocciato lui al posto di Killua. Netero risponde che Leorio non aveva bisogno dell’aiuto di Killua.',
    },
  },
  // Yorknew City (#974)
  kurapikaMelody: {
    character: 'melody',
    type: { en: 'Applicant who backs him', it: 'Candidata che gli dà ragione' },
    summary: {
      en: 'When Kurapika’s chain reacts in front of Squala, Melody backs him: she heard Squala’s heart speed up, with the rhythm of a liar.',
      it: 'Quando la catena di Kurapika reagisce davanti a Squala, Melody gli dà ragione: ha sentito il cuore di Squala accelerare, con il ritmo di chi mente.',
    },
  },
  kurapikaSquala: {
    character: 'squala',
    type: { en: 'Plant he exposes', it: 'Infiltrato che smaschera' },
    summary: {
      en: 'Kurapika holds his chain in front of each applicant, and it reacts in front of Squala. Squala denies being a plant until Basho’s haiku makes him confess.',
      it: 'Kurapika passa la sua catena davanti a ogni candidato, e la catena reagisce davanti a Squala. Squala nega di essere un infiltrato finché l’haiku di Basho non lo costringe a confessare.',
    },
  },
  leorioGonYorknew: {
    character: 'gon-freecss',
    type: {
      en: 'Friend he meets again in Yorknew City',
      it: 'Amico che ritrova a York Shin City',
    },
    summary: {
      en: 'Leorio runs into Gon at a Yorknew City market and comes up with a way to raise money for the game on Ging’s memory card: whoever beats Gon at arm wrestling wins a diamond.',
      it: 'Leorio ritrova Gon a un mercato di York Shin City e trova un modo per raccogliere i soldi per il gioco della scheda di memoria di Ging: chi batte Gon a braccio di ferro vince un diamante.',
    },
  },
  leorioKilluaYorknew: {
    character: 'killua',
    type: {
      en: 'Friend he meets again in Yorknew City',
      it: 'Amico che ritrova a York Shin City',
    },
    summary: {
      en: 'Leorio runs into Killua and Gon at a Yorknew City market, and with Killua he runs an arm-wrestling contest against Gon to raise money for the game on Ging’s memory card.',
      it: 'Leorio ritrova Killua e Gon a un mercato di York Shin City, e con Killua organizza una sfida a braccio di ferro contro Gon per raccogliere i soldi per il gioco della scheda di memoria di Ging.',
    },
  },
  hisokaMachi: {
    character: 'machi',
    type: {
      en: 'Troupe member who calls him to Yorknew City',
      it: 'Membro della Brigata che lo chiama a York Shin City',
    },
    summary: {
      en: 'After Hisoka’s match with Kastro, Machi sews his arms back on with threads of Nen and tells him to be in Yorknew City by August 30, when all the Phantom Troupe’s members gather.',
      it: 'Dopo l’incontro di Hisoka con Kastro, Machi gli ricuce le braccia con fili di Nen e gli dice di essere a York Shin City entro il 30 agosto, quando tutti i membri della Brigata Fantasma si riuniscono.',
    },
  },
  kurapikaMelodyGuard: {
    character: 'melody',
    type: {
      en: 'Bodyguard he confides in',
      it: 'Guardia del corpo a cui si confida',
    },
    summary: {
      en: 'Melody backs Kurapika when his chain points out Squala. On guard at the auction, she asks him about the Scarlet Eyes, and he tells her he means to bring his people’s eyes back.',
      it: 'Melody dà ragione a Kurapika quando la sua catena indica Squala. Di guardia all’asta, gli chiede degli occhi scarlatti, e lui le dice che vuole riportare indietro gli occhi della sua gente.',
    },
  },
  kurapikaUvogin: {
    character: 'uvogin',
    type: {
      en: 'Troupe member he captures',
      it: 'Membro della Brigata che cattura',
    },
    summary: {
      en: 'Kurapika captures Uvogin with his chain, and when Uvogin says that the Troupe killed all the guests at the auction, punches him. After Uvogin escapes, he hunts Kurapika down, and the two stand face to face.',
      it: 'Kurapika cattura Uborghin con la sua catena e, quando Uborghin dice che la Brigata ha ucciso tutti gli ospiti dell’asta, gli dà un pugno. Dopo la fuga, Uborghin dà la caccia a Kurapika, e i due si trovano faccia a faccia.',
    },
  },
  kurapikaUvoginDeath: {
    character: 'uvogin',
    type: {
      en: 'Troupe member he kills',
      it: 'Membro della Brigata che uccide',
    },
    summary: {
      en: 'Kurapika tells Uvogin he is avenging the Kurta Clan, catches him in a chain hidden with In and beats him. Uvogin will not say where the other members are, and the Judgment Chain kills him. Kurapika buries him.',
      it: 'Kurapika dice a Uborghin che sta vendicando il clan Kurta, lo cattura con una catena nascosta con l’In e lo picchia. Uborghin non vuole dire dove sono gli altri membri, e la Catena del Giudizio lo uccide. Kurapika lo seppellisce.',
    },
  },
  kurapikaHisokaDeal: {
    character: 'hisoka',
    type: {
      en: 'Man who offers him a deal',
      it: 'Uomo che gli propone un patto',
    },
    summary: {
      en: 'Hisoka tells Kurapika what he knows about the Phantom Troupe and offers to reveal the abilities of seven members if they work together, because he is after the leader. Kurapika puts off his answer until the next day.',
      it: 'Hisoka racconta a Kurapika quello che sa della Brigata Fantasma e si offre di rivelargli le capacità di sette membri se lavorano insieme, perché è al capo che punta. Kurapika rimanda la risposta al giorno dopo.',
    },
  },
  kurapikaLight: {
    character: 'light-nostrade',
    type: {
      en: 'Boss who puts him in charge',
      it: 'Capo che lo mette a capo delle guardie',
    },
    summary: {
      en: 'Kurapika tells Light on the phone that Dalzollene is probably dead and that the Phantom Troupe was behind the attack on the auction, and Light puts him in charge of the bodyguards.',
      it: 'Kurapika dice a Light al telefono che Dalzorne è probabilmente morto e che dietro l’attacco all’asta c’è la Brigata Fantasma, e Light lo mette a capo delle guardie del corpo.',
    },
  },
  hisokaKurapikaDeal: {
    character: 'kurapika',
    type: {
      en: 'Hunter he offers a deal',
      it: 'Hunter a cui propone un patto',
    },
    summary: {
      en: 'Hisoka meets Kurapika and offers to reveal the abilities of seven Troupe members if they work together, because he is after the Troupe’s leader. Kurapika puts off his answer until the next day.',
      it: 'Hisoka incontra Kurapika e si offre di rivelargli le capacità di sette membri della Brigata se lavorano insieme, perché è al capo della Brigata che punta. Kurapika rimanda la risposta al giorno dopo.',
    },
  },
  gonZepile: {
    character: 'zepile',
    type: { en: 'Appraiser who helps him', it: 'Perito che lo aiuta' },
    summary: {
      en: 'Zepile outbids Gon on a vase he made himself and stops a dealer from cheating the boys over their wooden statue. Gon tells him that the vase is no junk, because it holds aura.',
      it: 'Sepail supera l’offerta di Gon per un vaso fatto da lui stesso e impedisce a un commerciante di imbrogliare i ragazzi sulla loro statua di legno. Gon gli dice che il vaso non è robaccia, perché contiene aura.',
    },
  },
  gonNobunaga: {
    character: 'nobunaga',
    type: {
      en: 'Troupe member who wants him in the Troupe',
      it: 'Membro della Brigata che lo vuole nella Brigata',
    },
    summary: {
      en: 'At the Troupe’s hideout Nobunaga slams Gon’s hand down at arm wrestling again and again, until Gon slams Nobunaga’s hand down in turn. Later Nobunaga asks Gon to join the Troupe; Gon would rather die.',
      it: 'Nel covo della Brigata Nobunaga schiaccia la mano di Gon sul tavolo a braccio di ferro più e più volte, finché Gon non schiaccia a sua volta la mano di Nobunaga. Più tardi Nobunaga chiede a Gon di entrare nella Brigata; Gon preferirebbe morire.',
    },
  },
  gonKurapikaChain: {
    character: 'kurapika',
    type: {
      en: 'Friend who is the chain user',
      it: 'Amico che è l’utilizzatore di catene',
    },
    summary: {
      en: 'After Gon and Killua escape from the Troupe’s hideout, Killua tells Gon that the chain user is Kurapika.',
      it: 'Dopo la fuga di Gon e Killua dal covo della Brigata, Killua dice a Gon che l’utilizzatore di catene è Kurapika.',
    },
  },
  gonKurapikaRescue: {
    character: 'kurapika',
    type: {
      en: 'Friend who gets him back',
      it: 'Amico che lo riporta indietro',
    },
    summary: {
      en: 'Gon helps Kurapika against the Troupe as a decoy. When the Troupe catches Gon and Killua, Kurapika trades its leader for them.',
      it: 'Gon aiuta Kurapika contro la Brigata facendo da esca. Quando la Brigata cattura Gon e Killua, Kurapika li scambia con il suo capo.',
    },
  },
  gonChrollo: {
    character: 'chrollo',
    type: {
      en: 'Troupe leader he questions',
      it: 'Capo della Brigata a cui fa una domanda',
    },
    summary: {
      en: 'When Gon and Killua give themselves up to Chrollo, Gon asks him how he can kill people who have nothing to do with him. Kurapika later trades Chrollo for the two boys.',
      it: 'Quando Gon e Killua si arrendono a Quoll, Gon gli chiede come possa uccidere persone che non hanno niente a che fare con lui. Più tardi Kurapika scambia Quoll con i due ragazzi.',
    },
  },
  killuaKurapikaChain: {
    character: 'kurapika',
    type: {
      en: 'Friend he unmasks as the chain user',
      it: 'Amico che scopre essere l’utilizzatore di catene',
    },
    summary: {
      en: 'At the Troupe’s hideout Killua works out that Kurapika is the chain user, and once he and Gon have escaped he tells Gon.',
      it: 'Nel covo della Brigata Killua capisce che l’utilizzatore di catene è Kurapika, e una volta fuggito con Gon lo dice a Gon.',
    },
  },
  killuaKurapikaRescue: {
    character: 'kurapika',
    type: {
      en: 'Friend who gets him back',
      it: 'Amico che lo riporta indietro',
    },
    summary: {
      en: 'Killua works out that Kurapika is the chain user and helps him against the Troupe by watching its hideout. When the Troupe catches Killua and Gon, Kurapika trades its leader for them.',
      it: 'Killua capisce che l’utilizzatore di catene è Kurapika e lo aiuta contro la Brigata sorvegliandone il covo. Quando la Brigata cattura Killua e Gon, Kurapika li scambia con il suo capo.',
    },
  },
  killuaIllumiVoice: {
    character: 'illumi',
    type: {
      en: 'Brother whose voice holds him back',
      it: 'Fratello la cui voce lo trattiene',
    },
    summary: {
      en: 'Held by the Troupe, Killua hears Illumi’s voice in his head and cannot bring himself to attack Nobunaga.',
      it: 'Prigioniero della Brigata, Killua sente nella testa la voce di Illumi e non riesce ad attaccare Nobunaga.',
    },
  },
  killuaNobunaga: {
    character: 'nobunaga',
    type: {
      en: 'Troupe member who guards him',
      it: 'Membro della Brigata che lo sorveglia',
    },
    summary: {
      en: 'Nobunaga questions Killua when the Troupe catches him and guards him and Gon at the hideout. The two break out through the walls and get away.',
      it: 'Nobunaga interroga Killua quando la Brigata lo cattura e sorveglia lui e Gon nel covo. I due sfondano i muri e scappano.',
    },
  },
  killuaSilva: {
    character: 'silva',
    type: {
      en: 'Father who let him go',
      it: 'Padre che lo ha lasciato andare',
    },
    summary: {
      en: 'Killua’s father Silva let him leave home to join his friends. Killua tells his friends that his father once fought a member of the Phantom Troupe and told his children to stay away from them.',
      it: 'Silva, il padre di Killua, lo ha lasciato partire da casa per raggiungere i suoi amici. Killua racconta agli amici che suo padre ha combattuto una volta contro un membro della Brigata Fantasma e ha detto ai figli di starne lontani.',
    },
  },
  kurapikaGonDecoy: {
    character: 'gon-freecss',
    type: {
      en: 'Friend who asks for the chain',
      it: 'Amico che chiede la catena',
    },
    summary: {
      en: 'Gon agrees to help Kurapika capture Pakunoda as a decoy and asks him to use his Judgment Chain on him too, but Kurapika never meant to use it on his friends.',
      it: 'Gon accetta di aiutare Kurapika a catturare Pakunoda facendo da esca e gli chiede di usare anche su di lui la Catena del Giudizio, ma Kurapika non ha mai voluto usarla sui suoi amici.',
    },
  },
  kurapikaKilluaWatch: {
    character: 'killua',
    type: {
      en: 'Friend who watches the Troupe for him',
      it: 'Amico che sorveglia la Brigata per lui',
    },
    summary: {
      en: 'Killua agrees to help Kurapika capture Pakunoda and leaves to watch the Troupe’s hideout.',
      it: 'Killua accetta di aiutare Kurapika a catturare Pakunoda e va a sorvegliare il covo della Brigata.',
    },
  },
  kurapikaLeorioDriver: {
    character: 'leorio-paradinight',
    type: { en: 'Friend who drives for him', it: 'Amico che guida per lui' },
    summary: {
      en: 'Leorio agrees to be Kurapika’s driver in the plan to capture Pakunoda.',
      it: 'Leorio accetta di fare da autista a Kurapika nel piano per catturare Pakunoda.',
    },
  },
  kurapikaHisokaFake: {
    character: 'hisoka',
    type: {
      en: 'Man who offers him a deal',
      it: 'Uomo che gli propone un patto',
    },
    summary: {
      en: 'Hisoka offers Kurapika a deal against the Phantom Troupe, and later lets him know that the Troupe members’ bodies were fakes.',
      it: 'Hisoka propone a Kurapika un patto contro la Brigata Fantasma, e più tardi gli fa sapere che i cadaveri dei membri della Brigata erano falsi.',
    },
  },
  kurapikaChrollo: {
    character: 'chrollo',
    type: {
      en: 'Troupe leader he captures',
      it: 'Capo della Brigata che cattura',
    },
    summary: {
      en: 'In the blackout at the Hotel Beitacle Kurapika takes Chrollo, binds him with his Judgment Chain, forbidding him to use Nen or contact the other members, and trades him for Gon and Killua.',
      it: 'Durante il buio all’Hotel Beitacle Kurapika rapisce Quoll, lo vincola con la sua Catena del Giudizio, vietandogli di usare il Nen e di contattare gli altri membri, e lo scambia con Gon e Killua.',
    },
  },
  kurapikaPakunoda: {
    character: 'pakunoda',
    type: {
      en: 'Troupe member he binds',
      it: 'Membro della Brigata che vincola',
    },
    summary: {
      en: 'Kurapika binds Pakunoda with his Judgment Chain: she must free Gon and Killua by midnight without tricks and say nothing about him.',
      it: 'Kurapika vincola Pakunoda con la sua Catena del Giudizio: deve liberare Gon e Killua entro mezzanotte senza trucchi e non dire niente di lui.',
    },
  },
  leorioZepile: {
    character: 'zepile',
    type: { en: 'Appraiser he drinks with', it: 'Perito con cui beve' },
    summary: {
      en: 'Leorio helps Zepile at the auction while Gon and Killua tail the Troupe, and the boys come back to find the two drinking together.',
      it: 'Leorio aiuta Sepail all’asta mentre Gon e Killua pedinano la Brigata, e i ragazzi tornano e trovano i due a bere insieme.',
    },
  },
  leorioKurapikaDriver: {
    character: 'kurapika',
    type: { en: 'Friend he drives for', it: 'Amico per cui fa da autista' },
    summary: {
      en: 'Leorio drives Kurapika in the plan to capture Pakunoda, until traffic holds the car back.',
      it: 'Leorio fa da autista a Kurapika nel piano per catturare Pakunoda, finché il traffico non blocca l’auto.',
    },
  },
  leorioGonCode: {
    character: 'gon-freecss',
    type: {
      en: 'Friend he signals in code',
      it: 'Amico a cui manda un messaggio in codice',
    },
    summary: {
      en: 'While the Troupe holds Gon and Killua in the lobby of the Hotel Beitacle, Leorio pretends to talk on the phone and lets the boys know the plan in code.',
      it: 'Mentre la Brigata tiene Gon e Killua nell’atrio dell’Hotel Beitacle, Leorio finge di parlare al telefono e fa sapere ai ragazzi il piano in codice.',
    },
  },
  leorioKilluaCode: {
    character: 'killua',
    type: {
      en: 'Friend he signals in code',
      it: 'Amico a cui manda un messaggio in codice',
    },
    summary: {
      en: 'While the Troupe holds Killua and Gon in the lobby of the Hotel Beitacle, Leorio pretends to talk on the phone and lets the boys know the plan in code.',
      it: 'Mentre la Brigata tiene Killua e Gon nell’atrio dell’Hotel Beitacle, Leorio finge di parlare al telefono e fa sapere ai ragazzi il piano in codice.',
    },
  },
  hisokaChrollo: {
    character: 'chrollo',
    type: {
      en: 'Troupe leader he wants to fight',
      it: 'Capo della Brigata che vuole affrontare',
    },
    summary: {
      en: 'Hisoka is after the Troupe’s leader. He covers his fortune with a fake one, and from it Chrollo decides that the Troupe will stay in Yorknew City.',
      it: 'Hisoka punta al capo della Brigata. Copre la sua profezia con una falsa, e da questa Quoll decide che la Brigata resterà a York Shin City.',
    },
  },
  hisokaChrolloExchange: {
    character: 'chrollo',
    type: {
      en: 'Troupe leader he gives up on',
      it: 'Capo della Brigata a cui rinuncia',
    },
    summary: {
      en: 'Hisoka comes to the exchange to fight Chrollo, but Chrollo tells him that he cannot use Nen, and Hisoka leaves him.',
      it: 'Hisoka va allo scambio per affrontare Quoll, ma Quoll gli dice che non può usare il Nen, e Hisoka lo lascia.',
    },
  },
  hisokaNobunaga: {
    character: 'nobunaga',
    type: {
      en: 'Member who draws his sword on him',
      it: 'Membro che sfodera la spada contro di lui',
    },
    summary: {
      en: 'Hisoka’s fake fortune makes Nobunaga think that Hisoka sold out Uvogin, and Nobunaga draws his sword. Hisoka says he will defend himself.',
      it: 'La profezia falsa di Hisoka fa pensare a Nobunaga che Hisoka abbia tradito Uborghin, e Nobunaga sfodera la spada. Hisoka dice che si difenderà.',
    },
  },
  hisokaKurapikaExchange: {
    character: 'kurapika',
    type: {
      en: 'Hunter he offers a deal',
      it: 'Hunter a cui propone un patto',
    },
    summary: {
      en: 'Hisoka offers Kurapika a deal against the Troupe and later asks to come to the exchange, so that he can fight Chrollo.',
      it: 'Hisoka propone a Kurapika un patto contro la Brigata e più tardi chiede di venire allo scambio, per poter affrontare Quoll.',
    },
  },
  hisokaIllumiHelp: {
    character: 'illumi',
    type: {
      en: 'Acquaintance he asks for help',
      it: 'Conoscente a cui chiede aiuto',
    },
    summary: {
      en: 'Hisoka asks Illumi for help so that he can slip away from the Troupe, and after the exchange texts him that he can leave.',
      it: 'Hisoka chiede aiuto a Illumi per potersi allontanare dalla Brigata, e dopo lo scambio gli scrive che può andarsene.',
    },
  },
  hisokaPakunoda: {
    character: 'pakunoda',
    type: {
      en: 'Troupe member he tells his fortune',
      it: 'Membro della Brigata a cui racconta la sua profezia',
    },
    summary: {
      en: 'After the exchange Hisoka tells Pakunoda what his real fortune said.',
      it: 'Dopo lo scambio Hisoka racconta a Pakunoda cosa diceva la sua vera profezia.',
    },
  },
} satisfies Record<string, Relationship>

export const hunterExamRelationships = {
  // Kite and Kon open at chapter 1 but episode 76, so until the anime reaches
  // Kite every Gon selection is split: chapter entries carry Kite, episode
  // entries do not, except the Heavens Arena ones, which carry neither Kite
  // nor Mito. On a one-source entry the other number only orders it.
  'gon-freecss': [
    // Manga-only: Kite and Kon are chapter-1 records the anime opens at 76.
    {
      episode: 1,
      chapter: 1,
      source: 'chapter',
      value: [links.gonMito, links.gonKite, links.gonKon],
    },
    // Manga-only: Kite keeps his place; Kon, whom the anime has not opened,
    // fills the fifth slot instead of Katzo.
    {
      episode: 1,
      chapter: 2,
      source: 'chapter',
      value: [
        links.gonMito,
        links.gonKite,
        links.gonKurapika,
        links.gonLeorio,
        links.gonKon,
      ],
    },
    // Anime-only: without Kite and Kon the ship's crewman Katzo has room.
    {
      episode: 1,
      chapter: 2,
      source: 'episode',
      value: [
        links.gonMito,
        links.gonKurapika,
        links.gonLeorio,
        links.gonKatzo,
      ],
    },
    // Manga-only: Killua joins; Kon makes room.
    {
      episode: 4,
      chapter: 6,
      source: 'chapter',
      value: [
        links.gonKillua,
        links.gonKurapika,
        links.gonLeorio,
        links.gonMito,
        links.gonKite,
      ],
    },
    // Anime-only: Killua joins.
    {
      episode: 4,
      chapter: 6,
      source: 'episode',
      value: [
        links.gonKillua,
        links.gonKurapika,
        links.gonLeorio,
        links.gonMito,
        links.gonKatzo,
      ],
    },
    // Manga-only: Hisoka joins; Mito makes room so Kite keeps his place.
    {
      episode: 5,
      chapter: 9,
      source: 'chapter',
      value: [
        links.gonKillua,
        links.gonKurapika,
        links.gonLeorio,
        links.gonHisoka,
        links.gonKite,
      ],
    },
    // Anime-only: Hisoka joins; Katzo makes room.
    {
      episode: 5,
      chapter: 9,
      source: 'episode',
      value: [
        links.gonKillua,
        links.gonKurapika,
        links.gonLeorio,
        links.gonHisoka,
        links.gonMito,
      ],
    },
    // Manga-only: the Kite split continues.
    {
      episode: 16,
      chapter: 28,
      source: 'chapter',
      value: [
        links.gonKillua,
        links.gonKurapika,
        links.gonLeorio,
        links.gonHisokaDebt,
        links.gonKite,
      ],
    },
    // Anime-only: the Kite split continues.
    {
      episode: 16,
      chapter: 28,
      source: 'episode',
      value: [
        links.gonKillua,
        links.gonKurapika,
        links.gonLeorio,
        links.gonHisokaDebt,
        links.gonMito,
      ],
    },
    // Manga-only: the Kite split continues.
    {
      episode: 21,
      chapter: 38,
      source: 'chapter',
      value: [
        links.gonKilluaHome,
        links.gonKurapikaFriend,
        links.gonLeorioFriend,
        links.gonHisokaDebt,
        links.gonKite,
      ],
    },
    // Anime-only: the Kite split continues.
    {
      episode: 21,
      chapter: 38,
      source: 'episode',
      value: [
        links.gonKilluaHome,
        links.gonKurapikaFriend,
        links.gonLeorioFriend,
        links.gonHisokaDebt,
        links.gonMito,
      ],
    },
    // Manga-only: the Kite split continues.
    {
      episode: 25,
      chapter: 43,
      source: 'chapter',
      value: [
        links.gonKilluaTogether,
        links.gonKurapikaFriend,
        links.gonLeorioFriend,
        links.gonHisokaDebt,
        links.gonKite,
      ],
    },
    // Anime-only: the Kite split continues.
    {
      episode: 25,
      chapter: 43,
      source: 'episode',
      value: [
        links.gonKilluaTogether,
        links.gonKurapikaFriend,
        links.gonLeorioFriend,
        links.gonHisokaDebt,
        links.gonMito,
      ],
    },
    // Heavens Arena (#947): neither Kite nor Mito is in the arc, so both
    // make room, with Leorio, for Wing and Zushi, and one entry serves both
    // media until Ging's record splits them again.
    {
      episode: 29,
      chapter: 48,
      value: [
        links.gonKilluaTogether,
        links.gonWing,
        links.gonZushi,
        links.gonHisokaDebt,
        links.gonKurapikaFriend,
      ],
    },
    // Gon hands back Hisoka's badge in chapter 62 and episode 36.
    {
      episode: 36,
      chapter: 62,
      value: [
        links.gonKilluaTogether,
        links.gonHisokaRepaid,
        links.gonWing,
        links.gonZushi,
        links.gonKurapikaFriend,
      ],
    },
    // Anime-only, delayed to Ging's record (episode 37): Ging joins, Hisoka,
    // Wing and Zushi make room; Mito comes back because the anime has not
    // opened Kite.
    {
      episode: 37,
      chapter: 65,
      source: 'episode',
      value: [
        links.gonKilluaTogether,
        links.gonGing,
        links.gonMito,
        links.gonKurapikaFriend,
        links.gonLeorioFriend,
      ],
    },
    // Manga-only, delayed to Ging's record (chapter 66): Ging joins, Kite
    // comes back; Hisoka, Wing and Zushi make room.
    {
      episode: 38,
      chapter: 66,
      source: 'chapter',
      value: [
        links.gonKilluaTogether,
        links.gonGing,
        links.gonKite,
        links.gonKurapikaFriend,
        links.gonLeorioFriend,
      ],
    },
    // Yorknew City (#974): Zepile joins in chapters 86-88, which episode 48
    // adapts. As in Heavens Arena, Kite and Mito make room, so one entry
    // serves both media; manga readers get Kite back with his next arc.
    {
      episode: 48,
      chapter: 88,
      value: [
        links.gonKilluaTogether,
        links.gonGing,
        links.gonKurapikaFriend,
        links.gonLeorioFriend,
        links.gonZepile,
      ],
    },
    // The hideout and the escape are chapters 91-94 and episode 50.
    {
      episode: 50,
      chapter: 94,
      value: [
        links.gonKilluaTogether,
        links.gonGing,
        links.gonKurapikaChain,
        links.gonLeorioFriend,
        links.gonNobunaga,
      ],
    },
    // The exchange is chapter 119 and episode 58.
    {
      episode: 58,
      chapter: 119,
      value: [
        links.gonKilluaTogether,
        links.gonGing,
        links.gonKurapikaRescue,
        links.gonLeorioFriend,
        links.gonChrollo,
      ],
    },
    // Anime-only, delayed to Kite's record (episode 76): Kite joins and
    // Chrollo makes room.
    {
      episode: 76,
      chapter: 185,
      source: 'episode',
      value: [
        links.gonKilluaTogether,
        links.gonGing,
        links.gonKiteEpisode,
        links.gonKurapikaRescue,
        links.gonLeorioFriend,
      ],
    },
  ],
  'mito-freecss': [
    { episode: 1, chapter: 1, value: [links.mitoGon] },
    // Ging's record opens at 37/66, and episode 37 adapts chapters 64-65
    // only, so 37/66 is no true pair: each source gets its own entry.
    {
      episode: 37,
      chapter: 66,
      source: 'episode',
      value: [links.mitoGon, links.mitoGingEpisode],
    },
    {
      episode: 37,
      chapter: 66,
      source: 'chapter',
      value: [links.mitoGon, links.mitoGing],
    },
  ],
  'leorio-paradinight': [
    {
      episode: 1,
      chapter: 2,
      value: [links.leorioKurapika, links.leorioGon, links.leorioKatzo],
    },
    {
      episode: 2,
      chapter: 4,
      value: [
        links.leorioKurapika,
        links.leorioGon,
        links.leorioKiriko,
        links.leorioKatzo,
      ],
    },
    {
      episode: 4,
      chapter: 7,
      value: [
        links.leorioKurapikaConfidant,
        links.leorioGonRun,
        links.leorioTonpa,
        links.leorioKiriko,
        links.leorioKatzo,
      ],
    },
    {
      episode: 5,
      chapter: 9,
      value: [
        links.leorioKurapikaConfidant,
        links.leorioGonRun,
        links.leorioHisoka,
        links.leorioTonpa,
        links.leorioKiriko,
      ],
    },
    // Leroute's win ends in episode 11; chapter 20, which episode 11 also
    // adapts, tells it whole.
    {
      episode: 11,
      chapter: 20,
      value: [
        links.leorioKurapikaConfidant,
        links.leorioGonRun,
        links.leorioHisoka,
        links.leorioLeroute,
        links.leorioTonpaForfeit,
      ],
    },
    {
      episode: 15,
      chapter: 26,
      value: [
        links.leorioKurapikaTeam,
        links.leorioGonRun,
        links.leorioHisoka,
        links.leorioTonpaBadge,
        links.leorioLeroute,
      ],
    },
    // Illumi's record opens at 20/35; the door block is chapter 36.
    {
      episode: 20,
      chapter: 36,
      value: [
        links.leorioKurapikaTeam,
        links.leorioGonRun,
        links.leorioKillua,
        links.leorioIllumi,
        links.leorioHisoka,
      ],
    },
    // They set off for Killua's home in chapter 38; episode 21 adapts 37-38.
    {
      episode: 21,
      chapter: 38,
      value: [
        links.leorioKurapikaTeam,
        links.leorioGonRun,
        links.leorioKilluaRescue,
        links.leorioIllumi,
        links.leorioHisoka,
      ],
    },
    // Yorknew City (#974): the market, the phones and the arm-wrestling
    // contest are chapters 71-72 and episode 42.
    {
      episode: 42,
      chapter: 72,
      value: [
        links.leorioKurapikaTeam,
        links.leorioGonYorknew,
        links.leorioKilluaYorknew,
        links.leorioIllumi,
        links.leorioHisoka,
      ],
    },
    // He joins Zepile in chapter 89 and episode 49; the drinks are chapter
    // 101 and episode 53. Illumi makes room.
    {
      episode: 53,
      chapter: 101,
      value: [
        links.leorioKurapikaTeam,
        links.leorioGonYorknew,
        links.leorioKilluaYorknew,
        links.leorioZepile,
        links.leorioHisoka,
      ],
    },
    // The traffic is chapter 111 and episode 56; the lobby is chapter 112
    // and episode 57.
    {
      episode: 57,
      chapter: 113,
      value: [
        links.leorioKurapikaDriver,
        links.leorioGonCode,
        links.leorioKilluaCode,
        links.leorioZepile,
        links.leorioHisoka,
      ],
    },
  ],
  'kurapika': [
    {
      episode: 1,
      chapter: 2,
      value: [links.kurapikaLeorio, links.kurapikaGon, links.kurapikaKatzo],
    },
    {
      episode: 2,
      chapter: 4,
      value: [
        links.kurapikaLeorio,
        links.kurapikaGonTree,
        links.kurapikaKiriko,
        links.kurapikaKatzo,
      ],
    },
    {
      episode: 4,
      chapter: 7,
      value: [
        links.kurapikaLeorioConfidant,
        links.kurapikaGonTree,
        links.kurapikaTonpa,
        links.kurapikaKiriko,
        links.kurapikaKatzo,
      ],
    },
    {
      episode: 5,
      chapter: 9,
      value: [
        links.kurapikaLeorioConfidant,
        links.kurapikaGonTree,
        links.kurapikaHisoka,
        links.kurapikaTonpa,
        links.kurapikaKiriko,
      ],
    },
    {
      episode: 9,
      chapter: 18,
      value: [
        links.kurapikaLeorioConfidant,
        links.kurapikaGonTree,
        links.kurapikaMajtani,
        links.kurapikaHisoka,
        links.kurapikaTonpa,
      ],
    },
    {
      episode: 15,
      chapter: 26,
      value: [
        links.kurapikaLeorioTeam,
        links.kurapikaGonTree,
        links.kurapikaMajtani,
        links.kurapikaHisoka,
        links.kurapikaTonpaTarget,
      ],
    },
    // The match with Hisoka is chapter 35; the door block against Illumi is
    // chapter 36, so the pair waits for both.
    {
      episode: 20,
      chapter: 36,
      value: [
        links.kurapikaLeorioTeam,
        links.kurapikaGonTree,
        links.kurapikaHisokaMatch,
        links.kurapikaIllumi,
        links.kurapikaMajtani,
      ],
    },
    // They set off for Killua's home in chapter 38; episode 21 adapts 37-38.
    {
      episode: 21,
      chapter: 38,
      value: [
        links.kurapikaLeorioTeam,
        links.kurapikaGonTree,
        links.kurapikaKillua,
        links.kurapikaHisokaMatch,
        links.kurapikaIllumi,
      ],
    },
    // Yorknew City (#974): the applicants' test is chapter 68 and episode
    // 40; Hisoka and Illumi make room.
    {
      episode: 40,
      chapter: 68,
      value: [
        links.kurapikaLeorioTeam,
        links.kurapikaGonTree,
        links.kurapikaKillua,
        links.kurapikaMelody,
        links.kurapikaSquala,
      ],
    },

    // Hisoka is chapters 78-79, the call to Light chapter 79 and Uvogin at
    // the door chapter 80, all by the end of episode 46. Gon, Killua and
    // Squala make room.
    {
      episode: 46,
      chapter: 80,
      value: [
        links.kurapikaUvogin,
        links.kurapikaHisokaDeal,
        links.kurapikaLight,
        links.kurapikaMelodyGuard,
        links.kurapikaLeorioTeam,
      ],
    },
    // Chapters 81-84 and episode 47.
    {
      episode: 47,
      chapter: 84,
      value: [
        links.kurapikaUvoginDeath,
        links.kurapikaHisokaDeal,
        links.kurapikaLight,
        links.kurapikaMelodyGuard,
        links.kurapikaLeorioTeam,
      ],
    },
    // Hisoka's message is chapter 105 and episode 54; the plan and the
    // chains chapters 107-108 and episode 55. Gon, Killua and Leorio come
    // back; Light and Melody make room.
    {
      episode: 55,
      chapter: 108,
      value: [
        links.kurapikaGonDecoy,
        links.kurapikaKilluaWatch,
        links.kurapikaLeorioDriver,
        links.kurapikaHisokaFake,
        links.kurapikaUvoginDeath,
      ],
    },
    // Chapters 117-119 and episode 58.
    {
      episode: 58,
      chapter: 119,
      value: [
        links.kurapikaChrollo,
        links.kurapikaPakunoda,
        links.kurapikaGonDecoy,
        links.kurapikaKilluaWatch,
        links.kurapikaLeorioDriver,
      ],
    },
  ],
  'katzo': [
    {
      episode: 1,
      chapter: 2,
      value: [links.katzoGon, links.katzoLeorio, links.katzoKurapika],
    },
  ],
  'kiriko': [
    {
      episode: 2,
      chapter: 4,
      value: [links.kirikoGon, links.kirikoKurapika, links.kirikoLeorio],
    },
  ],
  'tonpa': [
    {
      episode: 3,
      chapter: 5,
      value: [links.tonpaGon, links.tonpaLeorio, links.tonpaKurapika],
    },
    // Killua opens at episode 4 although his juice scene is in episode 3;
    // chapter 7 is where Tonpa pays the applicants who mock Nicholas.
    {
      episode: 4,
      chapter: 7,
      value: [
        links.tonpaGon,
        links.tonpaLeorio,
        links.tonpaKurapika,
        links.tonpaKillua,
        links.tonpaNicholas,
      ],
    },
    {
      episode: 8,
      chapter: 17,
      value: [
        links.tonpaLeorioTower,
        links.tonpaGon,
        links.tonpaKurapika,
        links.tonpaKillua,
        links.tonpaBendot,
      ],
    },
    // Sommy's record is the manga's alone, so the Zevil Island selection splits.
    {
      episode: 15,
      chapter: 26,
      source: 'episode',
      value: [
        links.tonpaLeorioIsland,
        links.tonpaKurapikaIsland,
        links.tonpaGon,
        links.tonpaKillua,
        links.tonpaBendot,
      ],
    },
    {
      episode: 15,
      chapter: 26,
      source: 'chapter',
      value: [
        links.tonpaLeorioIsland,
        links.tonpaKurapikaIsland,
        links.tonpaSommy,
        links.tonpaGon,
        links.tonpaKillua,
      ],
    },
  ],
  'hisoka': [
    {
      episode: 5,
      chapter: 9,
      value: [links.hisokaGon, links.hisokaLeorio, links.hisokaKurapika],
    },
    // Togari is the anime's alone: chapter 19's examiner has no name.
    {
      episode: 10,
      chapter: 19,
      source: 'episode',
      value: [
        links.hisokaGon,
        links.hisokaLeorio,
        links.hisokaKurapika,
        links.hisokaTogari,
      ],
    },
    {
      episode: 16,
      chapter: 28,
      value: [
        links.hisokaGonBadge,
        links.hisokaKurapikaBadge,
        links.hisokaLeorio,
        links.hisokaGeretta,
      ],
    },
    // Episode 15 / chapter 26 tells the scene; Gittarackur's record opens
    // at 19/33, so the card waits for it.
    {
      episode: 19,
      chapter: 33,
      value: [
        links.hisokaGonBadge,
        links.hisokaGittarackur,
        links.hisokaKurapikaBadge,
        links.hisokaLeorio,
        links.hisokaGeretta,
      ],
    },
    // Gittarackur becomes Illumi at 20/35, his record's gate.
    {
      episode: 20,
      chapter: 35,
      value: [
        links.hisokaGonBadge,
        links.hisokaIllumi,
        links.hisokaKurapikaMatch,
        links.hisokaBodoro,
        links.hisokaLeorio,
      ],
    },
    {
      episode: 21,
      chapter: 38,
      value: [
        links.hisokaGonBadge,
        links.hisokaIllumiWarning,
        links.hisokaKurapikaMatch,
        links.hisokaBodoro,
        links.hisokaLeorio,
      ],
    },
    // Kastro dies at the end of the match, chapter 54 and episode 32;
    // Leorio makes room.
    {
      episode: 32,
      chapter: 54,
      value: [
        links.hisokaGonBadge,
        links.hisokaKastro,
        links.hisokaIllumiWarning,
        links.hisokaKurapikaMatch,
        links.hisokaBodoro,
      ],
    },
    // Gon hands back the badge in chapter 62 and episode 36.
    {
      episode: 36,
      chapter: 62,
      value: [
        links.hisokaGonReturned,
        links.hisokaKastro,
        links.hisokaIllumiWarning,
        links.hisokaKurapikaMatch,
        links.hisokaBodoro,
      ],
    },

    // Yorknew City (#974): Machi's record opens at 41/71, where the Troupe
    // gathers; Bodoro makes room.
    {
      episode: 41,
      chapter: 71,
      value: [
        links.hisokaGonReturned,
        links.hisokaMachi,
        links.hisokaKastro,
        links.hisokaIllumiWarning,
        links.hisokaKurapikaMatch,
      ],
    },

    // The meeting is chapter 78 and episode 45, his answer on the Scarlet
    // Eyes chapter 79 and episode 46.
    {
      episode: 46,
      chapter: 79,
      value: [
        links.hisokaGonReturned,
        links.hisokaKurapikaDeal,
        links.hisokaMachi,
        links.hisokaIllumiWarning,
        links.hisokaKastro,
      ],
    },
    // The fortune is chapter 105 and episode 54, the fake chapter 106 and
    // episode 55.
    {
      episode: 55,
      chapter: 106,
      value: [
        links.hisokaChrollo,
        links.hisokaNobunaga,
        links.hisokaGonReturned,
        links.hisokaKurapikaDeal,
        links.hisokaMachi,
      ],
    },
    // The call to Illumi is chapter 115 and episode 57; the exchange
    // chapters 118-119 and episode 58.
    {
      episode: 58,
      chapter: 119,
      value: [
        links.hisokaChrolloExchange,
        links.hisokaKurapikaExchange,
        links.hisokaIllumiHelp,
        links.hisokaPakunoda,
        links.hisokaGonReturned,
      ],
    },
  ],
  'todo': [
    {
      episode: 6,
      chapter: 12,
      value: [links.todoMenchi, links.todoBuhara, links.todoGon],
    },
  ],
  'geretta': [
    { episode: 14, chapter: 23, value: [links.gerettaGon] },
    {
      episode: 16,
      chapter: 28,
      value: [links.gerettaGonBadge, links.gerettaHisoka],
    },
  ],
  'cherry': [
    // The record is the manga's alone; the episode only orders the entry.
    {
      episode: 5,
      chapter: 9,
      source: 'chapter',
      value: [links.cherryHisoka, links.cherryKurapika, links.cherryLeorio],
    },
  ],
  'hanzo': [
    { episode: 3, chapter: 6, value: [links.hanzoTonpa] },
    { episode: 6, chapter: 11, value: [links.hanzoMenchi, links.hanzoTonpa] },
    {
      episode: 17,
      chapter: 29,
      value: [links.hanzoKillua, links.hanzoMenchi, links.hanzoTonpa],
    },
    // Masta's exchange with Hanzo is on his page (chapter 33) but not on the
    // episode 19 page, so only manga readers get him.
    {
      episode: 19,
      chapter: 34,
      source: 'episode',
      value: [
        links.hanzoGon,
        links.hanzoKillua,
        links.hanzoMenchi,
        links.hanzoTonpa,
      ],
    },
    {
      episode: 19,
      chapter: 34,
      source: 'chapter',
      value: [
        links.hanzoGon,
        links.hanzoMasta,
        links.hanzoKillua,
        links.hanzoMenchi,
        links.hanzoTonpa,
      ],
    },
    {
      episode: 20,
      chapter: 36,
      value: [
        links.hanzoGon,
        links.hanzoIllumi,
        links.hanzoKurapika,
        links.hanzoLeorio,
        links.hanzoPokkle,
      ],
    },
  ],
  'nicholas': [
    { episode: 3, chapter: 6, value: [links.nicholasTonpa] },
    // The Amori brothers' records open at episode 3 but chapter 29: the anime
    // gets the taunting where it happens, the manga once the records open.
    // The anime-only entry orders its chapter at theirs, so nothing names them
    // below chapter 29.
    {
      episode: 4,
      chapter: 29,
      source: 'episode',
      value: [
        links.nicholasTonpaPaid,
        links.nicholasAmori,
        links.nicholasUmori,
        links.nicholasImori,
      ],
    },
    {
      episode: 17,
      chapter: 29,
      source: 'chapter',
      value: [
        links.nicholasTonpaPaid,
        links.nicholasAmori,
        links.nicholasUmori,
        links.nicholasImori,
      ],
    },
  ],
  'satotz': [
    // The race to the tunnel exit that Satotz judges is anime-only.
    {
      episode: 4,
      chapter: 8,
      source: 'episode',
      value: [links.satotzHisoka, links.satotzGonRace, links.satotzKilluaRace],
    },
    { episode: 4, chapter: 8, source: 'chapter', value: [links.satotzHisoka] },
    {
      episode: 7,
      chapter: 13,
      source: 'episode',
      value: [
        links.satotzHisoka,
        links.satotzGonRace,
        links.satotzKilluaRace,
        links.satotzMenchi,
        links.satotzBuhara,
      ],
    },
    {
      episode: 7,
      chapter: 13,
      source: 'chapter',
      value: [links.satotzHisoka, links.satotzMenchi, links.satotzBuhara],
    },
    {
      episode: 20,
      chapter: 35,
      value: [
        links.satotzGon,
        links.satotzHisoka,
        links.satotzMenchi,
        links.satotzBuhara,
      ],
    },
    {
      episode: 21,
      chapter: 38,
      value: [
        links.satotzGonFather,
        links.satotzHisoka,
        links.satotzMenchi,
        links.satotzBuhara,
      ],
    },
  ],
  'killua': [
    {
      episode: 4,
      chapter: 6,
      value: [links.killuaGon, links.killuaLeorio, links.killuaTonpa],
    },
    {
      episode: 7,
      chapter: 14,
      value: [
        links.killuaGon,
        links.killuaNetero,
        links.killuaLeorio,
        links.killuaTonpa,
      ],
    },
    {
      episode: 11,
      chapter: 21,
      value: [
        links.killuaGon,
        links.killuaKurapika,
        links.killuaLeorio,
        links.killuaJohness,
        links.killuaNetero,
      ],
    },
    // Illumi opens at 20 / 35, unmasked; Killua never links the disguise.
    {
      episode: 20,
      chapter: 36,
      value: [
        links.killuaGonFriend,
        links.killuaIllumi,
        links.killuaLeorioFinal,
        links.killuaKurapika,
        links.killuaBodoro,
      ],
    },
    {
      episode: 24,
      chapter: 42,
      value: [
        links.killuaGonFriend,
        links.killuaIllumi,
        links.killuaZeno,
        links.killuaMilluki,
        links.killuaLeorioFinal,
      ],
    },
    {
      episode: 25,
      chapter: 43,
      value: [
        links.killuaGonTogether,
        links.killuaIllumi,
        links.killuaZeno,
        links.killuaMilluki,
        links.killuaLeorioFinal,
      ],
    },
    // Heavens Arena (#947): the match with Zushi is chapter 45 and episode
    // 27; Leorio makes room.
    {
      episode: 27,
      chapter: 45,
      value: [
        links.killuaGonTogether,
        links.killuaIllumi,
        links.killuaZushi,
        links.killuaZeno,
        links.killuaMilluki,
      ],
    },
    // Wing opens their aura nodes in chapter 48, which episode 29 adapts.
    {
      episode: 29,
      chapter: 48,
      value: [
        links.killuaGonTogether,
        links.killuaWing,
        links.killuaIllumi,
        links.killuaZushi,
        links.killuaZeno,
      ],
    },
    // Zushi's capture, the deal and the threat are chapter 57 and episode 33.
    {
      episode: 33,
      chapter: 57,
      value: [
        links.killuaGonTogether,
        links.killuaWing,
        links.killuaZushiRescue,
        links.killuaIllumi,
        links.killuaSadaso,
      ],
    },
    // Yorknew City (#974): the hideout and the escape are chapters 91-94
    // and episode 50; Wing stays, Zushi and Sadaso make room.
    {
      episode: 50,
      chapter: 94,
      value: [
        links.killuaGonTogether,
        links.killuaKurapikaChain,
        links.killuaIllumiVoice,
        links.killuaNobunaga,
        links.killuaWing,
      ],
    },
    // Silva is named at the assassins' meeting, 51/95 (#834); Wing makes room.
    {
      episode: 51,
      chapter: 95,
      value: [
        links.killuaGonTogether,
        links.killuaKurapikaChain,
        links.killuaIllumiVoice,
        links.killuaSilva,
        links.killuaNobunaga,
      ],
    },
    {
      episode: 58,
      chapter: 119,
      value: [
        links.killuaGonTogether,
        links.killuaKurapikaRescue,
        links.killuaIllumiVoice,
        links.killuaSilva,
        links.killuaNobunaga,
      ],
    },
  ],
  'menchi': [
    {
      episode: 6,
      chapter: 12,
      value: [
        links.menchiBuhara,
        links.menchiNetero,
        links.menchiTodo,
        links.menchiHanzo,
      ],
    },
    {
      episode: 7,
      chapter: 13,
      value: [
        links.menchiBuhara,
        links.menchiNetero,
        links.menchiSatotz,
        links.menchiTodo,
        links.menchiHanzo,
      ],
    },
  ],
  'buhara': [
    { episode: 6, chapter: 12, value: [links.buharaMenchi, links.buharaTodo] },
    {
      episode: 7,
      chapter: 13,
      value: [
        links.buharaMenchi,
        links.buharaTodo,
        links.buharaSatotz,
        links.buharaHisoka,
      ],
    },
  ],
  'netero': [
    { episode: 6, chapter: 12, value: [links.neteroMenchi] },
    {
      episode: 7,
      chapter: 14,
      value: [links.neteroGon, links.neteroKillua, links.neteroMenchi],
    },
    {
      episode: 21,
      chapter: 37,
      value: [
        links.neteroGonFinal,
        links.neteroKilluaFinal,
        links.neteroKurapika,
        links.neteroLeorio,
        links.neteroMenchi,
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
