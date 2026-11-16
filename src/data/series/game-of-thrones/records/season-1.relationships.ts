import type { Relationship, Timeline } from '~/data/types'

/**
 * The Essos cast of season 1 and *A Game of Thrones* (#1344). Chapters are
 * the site's absolute ones: the book's chapter N is N + 1. An entry without
 * `source` reads in both media, so its words hold at its episode and at its
 * chapter; a fact one medium alone tells, or tells in other words, sits in
 * an entry of its own. The pages read are in
 * docs/content-provenance/game-of-thrones-relationships.json.
 */
const links = {
  // Daenerys
  daeViserys: {
    character: 'viserys-targaryen',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who claims their father’s throne and means to marry her to Drogo in exchange for an army.',
      it: 'Suo fratello, che rivendica il trono del padre e vuole darla in sposa a Drogo in cambio di un esercito.',
    },
  },
  daeIllyrio: {
    character: 'illyrio-mopatis',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The magister of Pentos who keeps her and Viserys in his house and arranges her marriage to Drogo.',
      it: 'Il magistro di Pentos che ospita lei e Viserys nella sua casa e combina le sue nozze con Drogo.',
    },
  },
  daeDrogoPromised: {
    character: 'drogo',
    type: { en: 'Promised husband', it: 'Promesso sposo' },
    summary: {
      en: 'The Dothraki khal her brother means her to marry, in exchange for his army.',
      it: 'Il khal dothraki che suo fratello ha scelto per lei, in cambio del suo esercito.',
    },
  },
  daeDrogoWife: {
    character: 'drogo',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'The khal she marries at a Dothraki wedding. At first she is afraid of him.',
      it: 'Il khal che sposa con un matrimonio dothraki. All’inizio ne ha paura.',
    },
  },
  daeViserysWed: {
    character: 'viserys-targaryen',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who has given her to Drogo in exchange for an army. He tells her to keep her husband pleased.',
      it: 'Suo fratello, che l’ha data a Drogo in cambio di un esercito. Le dice di compiacere il marito.',
    },
  },
  daeJorahWed: {
    character: 'jorah-mormont',
    type: { en: 'Exiled knight', it: 'Cavaliere in esilio' },
    summary: {
      en: 'An exiled knight who has entered her brother’s service. His wedding gift to her is a set of books.',
      it: 'Un cavaliere in esilio entrato al servizio di suo fratello. Come dono di nozze le regala dei libri.',
    },
  },
  daeIllyrioWed: {
    character: 'illyrio-mopatis',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The magister who hosted her in Pentos and arranged the match. His wedding gift is three dragon eggs turned to stone.',
      it: 'Il magistro che l’ha ospitata a Pentos e ha combinato le nozze. Come dono le regala tre uova di drago diventate pietra.',
    },
  },
  daeDrogoChild: {
    character: 'drogo',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Her husband, whose son she carries. When Viserys threatens her at a feast, Drogo kills him with a crown of molten gold.',
      it: 'Suo marito, di cui porta in grembo il figlio. Quando Viserys la minaccia durante un banchetto, Drogo lo uccide con una corona d’oro fuso.',
    },
  },
  daeJorahAdviser: {
    character: 'jorah-mormont',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'The exiled knight who rides at her side and advises her. He stops Viserys from taking her dragon eggs.',
      it: 'Il cavaliere in esilio che le sta accanto e la consiglia. Impedisce a Viserys di prenderle le uova di drago.',
    },
  },
  daeViserysDead: {
    character: 'viserys-targaryen',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who gave her away for an army. He threatened her and her unborn child, and Drogo killed him with molten gold.',
      it: 'Suo fratello, che l’aveva data via in cambio di un esercito. Ha minacciato lei e il bambino che aspetta, e Drogo lo ha ucciso con l’oro fuso.',
    },
  },
  daeDrogoVow: {
    character: 'drogo',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Her husband. After an attempt to poison her, he swears to cross the sea and take the Seven Kingdoms for their son.',
      it: 'Suo marito. Dopo un tentativo di avvelenarla, giura di attraversare il mare e conquistare i Sette Regni per il loro figlio.',
    },
  },
  daeJorahWine: {
    character: 'jorah-mormont',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'The exiled knight who advises her. He stops her from drinking poisoned wine.',
      it: 'Il cavaliere in esilio che la consiglia. Le impedisce di bere un vino avvelenato.',
    },
  },
  // Robert dies at 7 / 50, before every entry that selects him.
  daeRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The king who took her family’s throne. He wanted her and her unborn child dead.',
      it: 'Il re che aveva preso il trono della sua famiglia. Voleva morti lei e il bambino che aspetta.',
    },
  },
  daeDrogoRaid: {
    character: 'drogo',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Her husband. He lets her keep the captive women she claims, and lets a healer she chooses treat his wound.',
      it: 'Suo marito. Le lascia tenere le prigioniere che reclama e permette a una guaritrice scelta da lei di curargli la ferita.',
    },
  },
  daeMirri: {
    character: 'mirri-maz-duur',
    type: { en: 'Healer she saved', it: 'Guaritrice che ha salvato' },
    summary: {
      en: 'A Lhazareen godswife Daenerys takes from the riders. She trusts her to treat Drogo’s wound.',
      it: 'Una sacerdotessa lhazareen che Daenerys sottrae ai razziatori. Le affida la ferita di Drogo.',
    },
  },
  daeDrogoSmothered: {
    character: 'drogo',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Her husband. Blood magic leaves him alive but empty, and she smothers him with a pillow.',
      it: 'Suo marito. La magia del sangue lo lascia vivo ma assente, e lei lo soffoca con un cuscino.',
    },
  },
  daeMirriRevenge: {
    character: 'mirri-maz-duur',
    type: { en: 'Healer who betrayed her', it: 'Guaritrice che l’ha tradita' },
    summary: {
      en: 'The godswife she saved. Her blood magic costs Daenerys her son, and she says it was revenge for her people.',
      it: 'La sacerdotessa che aveva salvato. La sua magia del sangue costa a Daenerys il figlio, e lei dice che è la vendetta per il suo popolo.',
    },
  },
  daeJorahTent: {
    character: 'jorah-mormont',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'The exiled knight who serves her. He fights for her while the blood magic is worked and carries her into the tent.',
      it: 'Il cavaliere in esilio al suo servizio. Combatte per lei durante il rito di sangue e la porta nella tenda.',
    },
  },
  daeDrogoPyre: {
    character: 'drogo',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Her husband. After the blood magic left him empty, she smothered him and burned him on a pyre.',
      it: 'Suo marito. Dopo che la magia del sangue lo aveva lasciato assente, lei lo ha soffocato e bruciato su una pira.',
    },
  },
  daeJorahKneels: {
    character: 'jorah-mormont',
    type: { en: 'Sworn knight', it: 'Cavaliere giurato' },
    summary: {
      en: 'The exiled knight at her side. Afraid she means to die on the pyre, he pleads with her, and when the fire dies he kneels to her.',
      it: 'Il cavaliere in esilio al suo fianco. Teme che voglia morire sulla pira e la supplica; quando il fuoco si spegne, si inginocchia davanti a lei.',
    },
  },
  daeMirriPyre: {
    character: 'mirri-maz-duur',
    type: { en: 'Healer who betrayed her', it: 'Guaritrice che l’ha tradita' },
    summary: {
      en: 'The godswife she saved. Her blood magic costs Daenerys her son, and Daenerys has her burned on Drogo’s pyre.',
      it: 'La sacerdotessa che aveva salvato. La sua magia del sangue costa a Daenerys il figlio, e Daenerys la fa bruciare sulla pira di Drogo.',
    },
  },
  daeRakharo: {
    character: 'rakharo',
    type: { en: 'Guard', it: 'Guardia' },
    summary: {
      en: 'A Dothraki warrior of her guard. He stays with her when the khalasar leaves, and kneels to her after the fire.',
      it: 'Un guerriero dothraki della sua guardia. Resta con lei quando il khalasar se ne va, e dopo il fuoco si inginocchia davanti a lei.',
    },
  },

  // Viserys
  visDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, whom he means to marry to Drogo in exchange for the army he needs to take back the throne.',
      it: 'Sua sorella, che vuole dare in sposa a Drogo in cambio dell’esercito che gli serve per riprendersi il trono.',
    },
  },
  visDrogo: {
    character: 'drogo',
    type: { en: 'Promised ally', it: 'Alleato promesso' },
    summary: {
      en: 'The Dothraki khal who is to give him an army in return for his sister.',
      it: 'Il khal dothraki che deve dargli un esercito in cambio della sorella.',
    },
  },
  visIllyrio: {
    character: 'illyrio-mopatis',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The magister of Pentos who keeps him in his house and brokers the deal with Drogo.',
      it: 'Il magistro di Pentos che lo ospita nella sua casa e tratta l’accordo con Drogo.',
    },
  },
  visRobert: {
    character: 'robert-baratheon',
    type: { en: 'Usurper', it: 'Usurpatore' },
    summary: {
      en: 'The king who holds the throne Viserys calls his father’s. Viserys means to take it back from him.',
      it: 'Il re che siede sul trono che Viserys considera di suo padre. Viserys vuole riprenderselo.',
    },
  },
  visDaenerysWed: {
    character: 'daenerys-targaryen',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, now Drogo’s wife. He tells her to keep her husband pleased.',
      it: 'Sua sorella, ora moglie di Drogo. Le dice di compiacere il marito.',
    },
  },
  visDrogoWed: {
    character: 'drogo',
    type: { en: 'Brother-in-law', it: 'Cognato' },
    summary: {
      en: 'His sister’s husband. Viserys is impatient for the army he believes Drogo owes him.',
      it: 'Il marito di sua sorella. Viserys è impaziente di avere l’esercito che crede gli sia dovuto.',
    },
  },
  visJorah: {
    character: 'jorah-mormont',
    type: { en: 'Sworn knight', it: 'Cavaliere giurato' },
    summary: {
      en: 'An exiled knight who offers him his service, and whom he accepts.',
      it: 'Un cavaliere in esilio che gli offre i suoi servigi, e che lui accetta.',
    },
  },
  visDaenerysWalk: {
    character: 'daenerys-targaryen',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, now Drogo’s wife. When he threatens her, her guard pulls him down, and she makes him walk.',
      it: 'Sua sorella, ora moglie di Drogo. Quando lui la minaccia, la sua guardia lo trascina a terra e lei lo costringe a camminare.',
    },
  },
  // Show: Rakharo's whip ("Lord Snow"). Books: Jhogo's (Daenerys III).
  visRakharo: {
    character: 'rakharo',
    type: { en: 'Sister’s guard', it: 'Guardia della sorella' },
    summary: {
      en: 'The Dothraki warrior guarding his sister. His whip catches Viserys by the throat when he threatens her.',
      it: 'Il guerriero dothraki che protegge sua sorella. Afferra Viserys alla gola con la frusta quando lui la minaccia.',
    },
  },
  visJhogo: {
    character: 'jhogo',
    type: { en: 'Sister’s guard', it: 'Guardia della sorella' },
    summary: {
      en: 'The Dothraki warrior guarding his sister. His whip catches Viserys by the throat and pulls him to the ground when he threatens her.',
      it: 'Il guerriero dothraki che protegge sua sorella. Afferra Viserys alla gola con la frusta e lo tira a terra quando lui la minaccia.',
    },
  },
  visJorahSides: {
    character: 'jorah-mormont',
    type: { en: 'Sworn knight', it: 'Cavaliere giurato' },
    summary: {
      en: 'The exiled knight sworn to him. When Viserys orders him to punish Daenerys, Jorah sides with her.',
      it: 'Il cavaliere in esilio che gli ha giurato fedeltà. Quando Viserys gli ordina di punire Daenerys, Jorah si schiera con lei.',
    },
  },
  visDaenerysDead: {
    character: 'daenerys-targaryen',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister. He threatened her and her unborn child at a feast, and Drogo killed him for it.',
      it: 'Sua sorella. L’ha minacciata insieme al bambino che aspetta durante un banchetto, e Drogo lo ha ucciso per questo.',
    },
  },
  visDrogoDead: {
    character: 'drogo',
    type: { en: 'Brother-in-law', it: 'Cognato' },
    summary: {
      en: 'His sister’s husband. Viserys demanded his crown, and Drogo gave him one of molten gold.',
      it: 'Il marito di sua sorella. Viserys ha preteso la sua corona, e Drogo gliene ha data una d’oro fuso.',
    },
  },
  visJorahDead: {
    character: 'jorah-mormont',
    type: { en: 'Sworn knight', it: 'Cavaliere giurato' },
    summary: {
      en: 'The exiled knight who swore to serve him. Jorah stopped him from taking his sister’s dragon eggs.',
      it: 'Il cavaliere in esilio che aveva giurato di servirlo. Jorah gli ha impedito di prendere le uova di drago della sorella.',
    },
  },
  visRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'Usurper', it: 'Usurpatore' },
    summary: {
      en: 'The king on the throne Viserys called his father’s. Viserys died without taking it back.',
      it: 'Il re sul trono che Viserys considerava di suo padre. Viserys è morto senza riprenderselo.',
    },
  },

  // Drogo
  droDaenerysPromised: {
    character: 'daenerys-targaryen',
    type: { en: 'Promised bride', it: 'Promessa sposa' },
    summary: {
      en: 'A Targaryen princess, offered to him as a bride by her brother through Illyrio.',
      it: 'Una principessa Targaryen che il fratello, tramite Illyrio, gli offre in sposa.',
    },
  },
  droViserys: {
    character: 'viserys-targaryen',
    type: { en: 'Bride’s brother', it: 'Fratello della sposa' },
    summary: {
      en: 'The exile who offers him his sister and expects an army in return.',
      it: 'L’esule che gli offre la sorella e si aspetta in cambio un esercito.',
    },
  },
  droIllyrio: {
    character: 'illyrio-mopatis',
    type: { en: 'Go-between', it: 'Intermediario' },
    summary: {
      en: 'The magister of Pentos who brokers his marriage to Daenerys.',
      it: 'Il magistro di Pentos che combina le sue nozze con Daenerys.',
    },
  },
  droDaenerysWife: {
    character: 'daenerys-targaryen',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'The Targaryen princess he marries. His wedding gift to her is a horse.',
      it: 'La principessa Targaryen che sposa. Come dono di nozze le regala un cavallo.',
    },
  },
  droViserysWed: {
    character: 'viserys-targaryen',
    type: { en: 'Brother-in-law', it: 'Cognato' },
    summary: {
      en: 'His wife’s brother, impatient for the army he was promised.',
      it: 'Il fratello di sua moglie, impaziente di avere l’esercito promesso.',
    },
  },
  droDaenerysSon: {
    character: 'daenerys-targaryen',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His wife, who carries his son. He kills her brother for threatening her.',
      it: 'Sua moglie, che porta in grembo suo figlio. Uccide il fratello di lei, che l’ha minacciata.',
    },
  },
  droViserysDead: {
    character: 'viserys-targaryen',
    type: { en: 'Brother-in-law', it: 'Cognato' },
    summary: {
      en: 'His wife’s brother. Viserys drew a sword at a feast and demanded a crown, and Drogo poured molten gold over his head.',
      it: 'Il fratello di sua moglie. Durante un banchetto Viserys ha sguainato la spada e preteso una corona, e Drogo gli ha versato in testa dell’oro fuso.',
    },
  },
  droDaenerysVow: {
    character: 'daenerys-targaryen',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His wife, who carries his son. After someone tries to poison her, he swears to take the Seven Kingdoms for the boy.',
      it: 'Sua moglie, che porta in grembo suo figlio. Dopo un tentativo di avvelenarla, giura di conquistare i Sette Regni per il bambino.',
    },
  },
  droJorah: {
    character: 'jorah-mormont',
    type: { en: 'Wife’s knight', it: 'Cavaliere della moglie' },
    summary: {
      en: 'The exiled knight who serves his wife. For saving her from poison, Drogo lets him choose a horse.',
      it: 'Il cavaliere in esilio al servizio di sua moglie. Per averla salvata dal veleno, Drogo gli lascia scegliere un cavallo.',
    },
  },
  droDaenerysRaid: {
    character: 'daenerys-targaryen',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His wife. He lets her keep the women she claims in the raid, and accepts the healer she trusts.',
      it: 'Sua moglie. Le lascia tenere le donne che reclama durante la razzia e accetta la guaritrice di cui lei si fida.',
    },
  },
  droMirri: {
    character: 'mirri-maz-duur',
    type: { en: 'Healer', it: 'Guaritrice' },
    summary: {
      en: 'A Lhazareen godswife who treats his wound at his wife’s urging. His bloodriders call her a maegi.',
      it: 'Una sacerdotessa lhazareen che gli cura la ferita su insistenza della moglie. I suoi cavalieri di sangue la chiamano maegi.',
    },
  },
  droQotho: {
    character: 'qotho',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'One of his bloodriders, who distrusts the godswife treating his wound.',
      it: 'Uno dei suoi cavalieri di sangue, che diffida della sacerdotessa che lo cura.',
    },
  },
  // Show only: Mago challenges Drogo and dies ("The Pointy End").
  droMagoEpisode: {
    character: 'mago',
    type: { en: 'Rider he kills', it: 'Guerriero che uccide' },
    summary: {
      en: 'A rider who rejects his wife’s claim to the captives and challenges him. Drogo kills him, and takes a wound in the fight.',
      it: 'Un guerriero che rifiuta il diritto di sua moglie sulle prigioniere e lo sfida. Drogo lo uccide, ma nello scontro viene ferito.',
    },
  },
  // Books only: Mago complains and lives (Daenerys VII).
  droMagoChapter: {
    character: 'mago',
    type: { en: 'Rider he rebukes', it: 'Guerriero che rimprovera' },
    summary: {
      en: 'A rider who complains that the khaleesi took a captive from him. Drogo tells him to find another.',
      it: 'Un guerriero che si lamenta perché la khaleesi gli ha tolto una prigioniera. Drogo gli dice di trovarsene un’altra.',
    },
  },
  droDaenerysEnd: {
    character: 'daenerys-targaryen',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His wife. When the blood magic leaves him unable to move or speak, she smothers him.',
      it: 'Sua moglie. Quando la magia del sangue lo lascia incapace di muoversi e di parlare, lei lo soffoca.',
    },
  },
  droMirriEnd: {
    character: 'mirri-maz-duur',
    type: { en: 'Healer', it: 'Guaritrice' },
    summary: {
      en: 'The godswife who treated his wound. Her blood magic keeps him breathing but leaves nothing of him.',
      it: 'La sacerdotessa che gli aveva curato la ferita. La sua magia del sangue lo tiene in vita, ma di lui non lascia niente.',
    },
  },
  droQothoDead: {
    character: 'qotho',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'One of his bloodriders. He tried to stop the blood magic and was killed by Jorah.',
      it: 'Uno dei suoi cavalieri di sangue. Ha cercato di fermare la magia del sangue ed è stato ucciso da Jorah.',
    },
  },

  // Jorah
  jorViserys: {
    character: 'viserys-targaryen',
    type: { en: 'King he serves', it: 'Re che serve' },
    summary: {
      en: 'The exiled heir he offers his service to. Viserys accepts it.',
      it: 'L’erede in esilio a cui offre i suoi servigi. Viserys li accetta.',
    },
  },
  jorDaenerysGift: {
    character: 'daenerys-targaryen',
    type: { en: 'King’s sister', it: 'Sorella del re' },
    summary: {
      en: 'Viserys’s sister, married to Drogo. Jorah’s wedding gift to her is a set of books.',
      it: 'La sorella di Viserys, data in sposa a Drogo. Come dono di nozze Jorah le regala dei libri.',
    },
  },
  jorIllyrio: {
    character: 'illyrio-mopatis',
    type: { en: 'Wedding host', it: 'Padrone di casa' },
    summary: {
      en: 'The magister of Pentos who hosts the Targaryens. Jorah is among the guests at the wedding he arranges.',
      it: 'Il magistro di Pentos che ospita i Targaryen. Jorah è tra gli invitati alle nozze che lui combina.',
    },
  },
  // Show: "The Kingsroad", Jorah tells Viserys why he fled.
  jorEddardEpisode: {
    character: 'eddard-stark',
    type: { en: 'Former liege', it: 'Ex signore' },
    summary: {
      en: 'The lord he fled. Jorah sold poachers into slavery, and Eddard Stark meant to execute him for it.',
      it: 'Il lord da cui è fuggito. Jorah ha venduto dei bracconieri come schiavi, ed Eddard Stark voleva giustiziarlo per questo.',
    },
  },
  // Books: Daenerys IV, Jorah's own words about Lord Eddard.
  jorEddardChapter: {
    character: 'eddard-stark',
    type: { en: 'Former liege', it: 'Ex signore' },
    summary: {
      en: 'The lord he blames for his exile. Jorah says Eddard took everything he loved from him over a few poachers.',
      it: 'Il lord a cui dà la colpa del suo esilio. Jorah dice che Eddard gli ha tolto tutto ciò che amava per pochi bracconieri.',
    },
  },
  jorDaenerysComfort: {
    character: 'daenerys-targaryen',
    type: { en: 'King’s sister', it: 'Sorella del re' },
    summary: {
      en: 'Viserys’s sister, now Drogo’s khaleesi. Jorah comforts her in her first days with the khalasar.',
      it: 'La sorella di Viserys, ora khaleesi di Drogo. Jorah la conforta nei primi giorni con il khalasar.',
    },
  },
  jorDaenerysSides: {
    character: 'daenerys-targaryen',
    type: { en: 'King’s sister', it: 'Sorella del re' },
    summary: {
      en: 'Viserys’s sister, Drogo’s khaleesi. When Viserys orders Jorah to punish her, Jorah sides with her instead.',
      it: 'La sorella di Viserys, khaleesi di Drogo. Quando Viserys gli ordina di punirla, Jorah si schiera con lei.',
    },
  },
  jorViserysDoubt: {
    character: 'viserys-targaryen',
    type: { en: 'King he serves', it: 'Re che serve' },
    summary: {
      en: 'The exiled heir he serves. Jorah tells Daenerys her brother would make a poor king.',
      it: 'L’erede in esilio che serve. Jorah dice a Daenerys che il fratello sarebbe un cattivo re.',
    },
  },
  jorDaenerysConfides: {
    character: 'daenerys-targaryen',
    type: { en: 'King’s sister', it: 'Sorella del re' },
    summary: {
      en: 'Viserys’s sister, Drogo’s khaleesi. She tells Jorah her brother will never be king, and he agrees.',
      it: 'La sorella di Viserys, khaleesi di Drogo. Gli confida che il fratello non sarà mai re, e lui è d’accordo.',
    },
  },
  // Show only: Eddard learns Jorah reports to Varys ("The Wolf and the Lion").
  jorVarys: {
    character: 'varys',
    type: { en: 'Spymaster', it: 'Maestro dei sussurri' },
    summary: {
      en: 'The king’s master of whisperers. Jorah sends him reports on the Targaryens.',
      it: 'Il maestro dei sussurri del re. Jorah gli manda notizie sui Targaryen.',
    },
  },
  jorDaenerysStays: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'Viserys’s sister, Drogo’s khaleesi. Jorah stays at her side and advises her.',
      it: 'La sorella di Viserys, khaleesi di Drogo. Jorah le resta accanto e la consiglia.',
    },
  },
  jorViserysDead: {
    character: 'viserys-targaryen',
    type: { en: 'King he served', it: 'Re che serviva' },
    summary: {
      en: 'The exiled heir he served. Jorah stopped him from stealing Daenerys’s dragon eggs, and Drogo killed him at a feast.',
      it: 'L’erede in esilio che serviva. Jorah gli ha impedito di rubare le uova di drago di Daenerys, e Drogo lo ha ucciso durante un banchetto.',
    },
  },
  jorDaenerysWine: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'Drogo’s khaleesi, Viserys’s sister. Jorah stops her from drinking poisoned wine.',
      it: 'La khaleesi di Drogo, sorella di Viserys. Jorah le impedisce di bere un vino avvelenato.',
    },
  },
  jorDrogo: {
    character: 'drogo',
    type: { en: 'Khaleesi’s husband', it: 'Marito della khaleesi' },
    summary: {
      en: 'Daenerys’s husband. For saving her from poison, he lets Jorah choose a horse.',
      it: 'Il marito di Daenerys. Per averla salvata dal veleno, lascia scegliere a Jorah un cavallo.',
    },
  },
  // Show only: the pardon comes by a message from Varys ("You Win or You Die").
  jorVarysPardon: {
    character: 'varys',
    type: { en: 'Spymaster', it: 'Maestro dei sussurri' },
    summary: {
      en: 'The king’s master of whisperers, for whom Jorah reported on the Targaryens. A message from him brings Jorah a royal pardon.',
      it: 'Il maestro dei sussurri del re, per cui Jorah faceva rapporto sui Targaryen. Un suo messaggio gli porta il perdono del re.',
    },
  },
  // Books only: Illyrio's letter warns him (Daenerys VI).
  jorIllyrioLetter: {
    character: 'illyrio-mopatis',
    type: { en: 'Magister of Pentos', it: 'Magistro di Pentos' },
    summary: {
      en: 'The magister of Pentos who hosted the Targaryens. His letter warns Jorah of a price on Daenerys’s head.',
      it: 'Il magistro di Pentos che ospitava i Targaryen. Una sua lettera avverte Jorah che sulla testa di Daenerys c’è una taglia.',
    },
  },
  jorDaenerysRite: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'Drogo’s khaleesi. Jorah fights for her while the blood magic is worked, and carries her into the tent.',
      it: 'La khaleesi di Drogo. Jorah combatte per lei durante il rito di sangue e la porta nella tenda.',
    },
  },
  jorQotho: {
    character: 'qotho',
    type: { en: 'Bloodrider he kills', it: 'Cavaliere di sangue che uccide' },
    summary: {
      en: 'One of Drogo’s bloodriders. He turns on Daenerys over the blood magic, and Jorah kills him.',
      it: 'Uno dei cavalieri di sangue di Drogo. Si rivolta contro Daenerys per la magia del sangue, e Jorah lo uccide.',
    },
  },
  jorQothoDead: {
    character: 'qotho',
    type: {
      en: 'Bloodrider he killed',
      it: 'Cavaliere di sangue che ha ucciso',
    },
    summary: {
      en: 'One of Drogo’s bloodriders. He turned on Daenerys over the blood magic, and Jorah killed him.',
      it: 'Uno dei cavalieri di sangue di Drogo. Si è rivoltato contro Daenerys per la magia del sangue, e Jorah lo ha ucciso.',
    },
  },
  jorDaenerysPyre: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he serves. Afraid she means to die on Drogo’s pyre, he pleads with her, and when the fire dies he kneels to her.',
      it: 'La khaleesi che serve. Teme che voglia morire sulla pira di Drogo e la supplica; quando il fuoco si spegne, si inginocchia davanti a lei.',
    },
  },
  jorDrogoDead: {
    character: 'drogo',
    type: { en: 'Khaleesi’s husband', it: 'Marito della khaleesi' },
    summary: {
      en: 'Daenerys’s husband, who once rewarded Jorah for saving her. Drogo died after the blood magic, and she burned him on a pyre.',
      it: 'Il marito di Daenerys, che aveva ricompensato Jorah per averla salvata. Drogo è morto dopo la magia del sangue, e lei lo ha bruciato su una pira.',
    },
  },
  jorMirri: {
    character: 'mirri-maz-duur',
    type: { en: 'Godswife', it: 'Sacerdotessa' },
    summary: {
      en: 'The Lhazareen godswife whose blood magic cost Daenerys her son. Jorah binds her to the pyre at Daenerys’s order.',
      it: 'La sacerdotessa lhazareen la cui magia del sangue è costata a Daenerys il figlio. Jorah la lega alla pira per ordine di Daenerys.',
    },
  },

  // Illyrio
  ilyViserys: {
    character: 'viserys-targaryen',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The exiled heir he keeps in his house. Illyrio brokers the marriage that is to win Viserys an army.',
      it: 'L’erede in esilio che ospita nella sua casa. Illyrio combina le nozze che devono procurare a Viserys un esercito.',
    },
  },
  ilyDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'Viserys’s sister, who lives in his house. He arranges her marriage to Drogo.',
      it: 'La sorella di Viserys, che vive nella sua casa. Combina le sue nozze con Drogo.',
    },
  },
  ilyDrogo: {
    character: 'drogo',
    type: { en: 'Groom he finds', it: 'Sposo che procura' },
    summary: {
      en: 'The Dothraki khal he binds to the Targaryens through Daenerys’s marriage.',
      it: 'Il khal dothraki che lega ai Targaryen attraverso le nozze di Daenerys.',
    },
  },
  ilyDaenerysEggs: {
    character: 'daenerys-targaryen',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'Viserys’s sister, who lived in his house. His wedding gift to her is three dragon eggs turned to stone.',
      it: 'La sorella di Viserys, che ha vissuto nella sua casa. Come dono di nozze le regala tre uova di drago diventate pietra.',
    },
  },
  // Show only: the meeting under the castle ("The Wolf and the Lion").
  ilyVarys: {
    character: 'varys',
    type: { en: 'Secret ally', it: 'Alleato segreto' },
    summary: {
      en: 'The king’s master of whisperers. Illyrio meets him in secret, and they talk of Drogo’s army and of the time they need.',
      it: 'Il maestro dei sussurri del re. Illyrio lo incontra in segreto, e parlano dell’esercito di Drogo e del tempo che serve loro.',
    },
  },
  ilyViserysDead: {
    character: 'viserys-targaryen',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The exiled heir he kept in his house. Drogo, the khal Illyrio found for him, killed him.',
      it: 'L’erede in esilio che ospitava nella sua casa. Drogo, il khal che Illyrio aveva trovato per lui, lo ha ucciso.',
    },
  },
  ilyDrogoDead: {
    character: 'drogo',
    type: { en: 'Groom he found', it: 'Sposo che ha procurato' },
    summary: {
      en: 'The Dothraki khal he bound to the Targaryens through Daenerys’s marriage. Drogo died after his wound festered.',
      it: 'Il khal dothraki che aveva legato ai Targaryen con le nozze di Daenerys. Drogo è morto dopo che la sua ferita si era infettata.',
    },
  },

  // Irri
  irrDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she serves as a handmaiden.',
      it: 'La khaleesi che serve come ancella.',
    },
  },
  // Books only: Viserys's wedding gift (Daenerys II).
  irrDaenerysChapter: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she serves. Viserys gives Irri to her as a wedding gift, to teach her to ride.',
      it: 'La khaleesi che serve. Viserys gliela regala per le nozze, perché le insegni a cavalcare.',
    },
  },
  irrDaenerysPregnant: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she serves as a handmaiden. Irri is the one who finds out Daenerys is pregnant.',
      it: 'La khaleesi che serve come ancella. È Irri a capire che Daenerys è incinta.',
    },
  },
  irrJhiqui: {
    character: 'jhiqui',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another of Daenerys’s Dothraki handmaidens.',
      it: 'Un’altra delle ancelle dothraki di Daenerys.',
    },
  },
  irrDoreah: {
    character: 'doreah',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another handmaiden of Daenerys, given to her with Irri.',
      it: 'Un’altra ancella di Daenerys, regalata a lei insieme a Irri.',
    },
  },
  irrDoreahStory: {
    character: 'doreah',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another handmaiden of Daenerys. Irri dismisses her story of dragons hatching from a second moon.',
      it: 'Un’altra ancella di Daenerys. Irri non crede alla sua storia dei draghi nati da una seconda luna.',
    },
  },
  // Show only: "Lord Snow".
  irrRakharo: {
    character: 'rakharo',
    type: { en: 'Khaleesi’s guard', it: 'Guardia della khaleesi' },
    summary: {
      en: 'The Dothraki warrior guarding Daenerys. Irri translates for him and argues with him over what to cook.',
      it: 'Il guerriero dothraki che protegge Daenerys. Irri gli fa da interprete e litiga con lui su cosa cucinare.',
    },
  },

  // Jhiqui
  jhiDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she serves as a handmaiden.',
      it: 'La khaleesi che serve come ancella.',
    },
  },
  // Books only: Viserys's wedding gift (Daenerys II).
  jhiDaenerysChapter: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she serves. Viserys gives Jhiqui to her as a wedding gift, to teach her the Dothraki tongue.',
      it: 'La khaleesi che serve. Viserys gliela regala per le nozze, perché le insegni la lingua dothraki.',
    },
  },
  jhiDaenerysPregnant: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she serves, a wedding gift from Viserys. Jhiqui is the first to tell Daenerys she is pregnant.',
      it: 'La khaleesi che serve, regalata a lei da Viserys per le nozze. È Jhiqui la prima a dire a Daenerys che è incinta.',
    },
  },
  jhiIrri: {
    character: 'irri',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another of Daenerys’s Dothraki handmaidens.',
      it: 'Un’altra delle ancelle dothraki di Daenerys.',
    },
  },
  jhiIrriStory: {
    character: 'irri',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another of Daenerys’s Dothraki handmaidens. Jhiqui sides with her against Doreah’s story of the moon.',
      it: 'Un’altra delle ancelle dothraki di Daenerys. Jhiqui le dà ragione contro la storia della luna raccontata da Doreah.',
    },
  },
  jhiDoreah: {
    character: 'doreah',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another handmaiden of Daenerys, given to her with Jhiqui.',
      it: 'Un’altra ancella di Daenerys, regalata a lei insieme a Jhiqui.',
    },
  },
  jhiDoreahStory: {
    character: 'doreah',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another handmaiden of Daenerys. Jhiqui dismisses her story of dragons hatching from a second moon.',
      it: 'Un’altra ancella di Daenerys. Jhiqui non crede alla sua storia dei draghi nati da una seconda luna.',
    },
  },

  // Doreah
  dorDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she serves. Doreah teaches her how to please her husband.',
      it: 'La khaleesi che serve. Doreah le insegna come dare piacere al marito.',
    },
  },
  dorIrri: {
    character: 'irri',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another of Daenerys’s handmaidens.',
      it: 'Un’altra ancella di Daenerys.',
    },
  },
  dorJhiqui: {
    character: 'jhiqui',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another of Daenerys’s handmaidens.',
      it: 'Un’altra ancella di Daenerys.',
    },
  },
  dorViserys: {
    character: 'viserys-targaryen',
    type: { en: 'Khaleesi’s brother', it: 'Fratello della khaleesi' },
    summary: {
      en: 'Daenerys’s brother. When Doreah brings him his sister’s invitation to supper, he drags her back to Daenerys in a rage.',
      it: 'Il fratello di Daenerys. Quando Doreah gli porta l’invito a cena della sorella, lui la trascina furioso da Daenerys.',
    },
  },
  dorViserysDead: {
    character: 'viserys-targaryen',
    type: { en: 'Khaleesi’s brother', it: 'Fratello della khaleesi' },
    summary: {
      en: 'Daenerys’s brother, who once dragged Doreah to his sister in a rage. Drogo killed him at a feast.',
      it: 'Il fratello di Daenerys, che una volta ha trascinato Doreah furioso dalla sorella. Drogo lo ha ucciso durante un banchetto.',
    },
  },
  // Books only: Eroeh is named only when her death is told (Daenerys IX).
  dorEroeh: {
    character: 'eroeh',
    type: { en: 'Girl she tended', it: 'Ragazza che ha curato' },
    summary: {
      en: 'A Lhazareen girl Daenerys saved from rape and gave Doreah to tend. When the khalasar broke apart, Mago seized and raped her, then handed her to his new khal, whose bloodriders killed her.',
      it: 'Una ragazza lhazareen che Daenerys ha salvato da uno stupro e affidato alle cure di Doreah. Quando il khalasar si è diviso, Mago l’ha presa e violentata, poi l’ha consegnata al suo nuovo khal, i cui cavalieri di sangue l’hanno uccisa.',
    },
  },

  // Rakharo
  rakDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he is charged with guarding.',
      it: 'La khaleesi che deve proteggere.',
    },
  },
  // Show only: "Lord Snow". In the books the whip is Jhogo's.
  rakViserys: {
    character: 'viserys-targaryen',
    type: { en: 'Khaleesi’s brother', it: 'Fratello della khaleesi' },
    summary: {
      en: 'Daenerys’s brother. When Viserys threatens her, Rakharo’s whip catches him by the throat, and at her word he spares him.',
      it: 'Il fratello di Daenerys. Quando Viserys la minaccia, Rakharo lo afferra alla gola con la frusta e, su ordine di lei, lo risparmia.',
    },
  },
  rakViserysDead: {
    character: 'viserys-targaryen',
    type: { en: 'Khaleesi’s brother', it: 'Fratello della khaleesi' },
    summary: {
      en: 'Daenerys’s brother, whom Rakharo once pulled down with his whip and spared at her word. Drogo killed him at a feast.',
      it: 'Il fratello di Daenerys, che Rakharo aveva atterrato con la frusta e risparmiato su ordine di lei. Drogo lo ha ucciso durante un banchetto.',
    },
  },
  rakJorah: {
    character: 'jorah-mormont',
    type: { en: 'Exiled knight', it: 'Cavaliere in esilio' },
    summary: {
      en: 'The khaleesi’s exiled knight. They compare the Dothraki way of fighting with that of Westeros.',
      it: 'Il cavaliere in esilio della khaleesi. Confrontano il modo di combattere dei Dothraki con quello di Westeros.',
    },
  },
  rakIrri: {
    character: 'irri',
    type: { en: 'Khaleesi’s handmaiden', it: 'Ancella della khaleesi' },
    summary: {
      en: 'One of the khaleesi’s handmaidens. She translates for him, and they argue over what to cook.',
      it: 'Una delle ancelle della khaleesi. Gli fa da interprete, e litigano su cosa cucinare.',
    },
  },
  rakJhogo: {
    character: 'jhogo',
    type: { en: 'Fellow guard', it: 'Compagno di guardia' },
    summary: {
      en: 'Another warrior charged with guarding the khaleesi.',
      it: 'Un altro guerriero incaricato di proteggere la khaleesi.',
    },
  },
  rakHaggo: {
    character: 'haggo',
    type: { en: 'Bloodrider he kills', it: 'Cavaliere di sangue che uccide' },
    summary: {
      en: 'One of Drogo’s bloodriders. When they try to stop the blood magic, Rakharo kills him after Jhogo’s whip brings him down.',
      it: 'Uno dei cavalieri di sangue di Drogo. Quando cercano di fermare la magia del sangue, Rakharo lo uccide dopo che la frusta di Jhogo lo ha atterrato.',
    },
  },
  rakHaggoDead: {
    character: 'haggo',
    type: {
      en: 'Bloodrider he killed',
      it: 'Cavaliere di sangue che ha ucciso',
    },
    summary: {
      en: 'One of Drogo’s bloodriders. When they tried to stop the blood magic, Rakharo killed him after Jhogo’s whip brought him down.',
      it: 'Uno dei cavalieri di sangue di Drogo. Quando hanno cercato di fermare la magia del sangue, Rakharo lo ha ucciso dopo che la frusta di Jhogo lo aveva atterrato.',
    },
  },
  rakDaenerysPyre: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he guards. He stays with her when the khalasar breaks apart, and kneels to her when she walks out of the fire.',
      it: 'La khaleesi che protegge. Resta con lei quando il khalasar si divide, e si inginocchia davanti a lei quando esce dal fuoco.',
    },
  },
  // Books only: Daenerys X, she names him bloodrider.
  rakDaenerysPyreChapter: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he guards. When she names him her bloodrider he only promises to take her to the dosh khaleen; when she walks out of the fire, he kneels to her.',
      it: 'La khaleesi che protegge. Quando lei lo nomina suo cavaliere di sangue, lui promette soltanto di portarla dalle dosh khaleen; quando esce dal fuoco, si inginocchia davanti a lei.',
    },
  },

  // Qotho
  qotDrogo: {
    character: 'drogo',
    type: { en: 'Khal', it: 'Khal' },
    summary: {
      en: 'The khal he rides beside as a bloodrider.',
      it: 'Il khal al cui fianco cavalca come cavaliere di sangue.',
    },
  },
  // Show only: "A Golden Crown". The books give the arm to Haggo.
  qotViserys: {
    character: 'viserys-targaryen',
    type: { en: 'Man he seizes', it: 'Uomo che afferra' },
    summary: {
      en: 'The khaleesi’s brother. When Viserys draws a sword at a feast, Qotho breaks his arm and holds him while Drogo crowns him with molten gold.',
      it: 'Il fratello della khaleesi. Quando Viserys sguaina la spada durante un banchetto, Qotho gli spezza il braccio e lo tiene fermo mentre Drogo lo incorona con l’oro fuso.',
    },
  },
  qotViserysDead: {
    character: 'viserys-targaryen',
    type: { en: 'Man he seized', it: 'Uomo che ha afferrato' },
    summary: {
      en: 'The khaleesi’s brother. When Viserys drew a sword at a feast, Qotho broke his arm and held him while Drogo crowned him with molten gold.',
      it: 'Il fratello della khaleesi. Quando Viserys ha sguainato la spada durante un banchetto, Qotho gli ha spezzato il braccio e lo ha tenuto fermo mentre Drogo lo incoronava con l’oro fuso.',
    },
  },
  qotMirri: {
    character: 'mirri-maz-duur',
    type: { en: 'Maegi', it: 'Maegi' },
    summary: {
      en: 'The Lhazareen godswife treating Drogo’s wound. Qotho distrusts her and calls her a maegi.',
      it: 'La sacerdotessa lhazareen che cura la ferita di Drogo. Qotho diffida di lei e la chiama maegi.',
    },
  },
  qotMirriRite: {
    character: 'mirri-maz-duur',
    type: { en: 'Maegi', it: 'Maegi' },
    summary: {
      en: 'The Lhazareen godswife who treats Drogo. When his wound festers, Qotho blames her and tries to stop her blood magic.',
      it: 'La sacerdotessa lhazareen che cura Drogo. Quando la ferita si infetta, Qotho la incolpa e cerca di fermare la sua magia del sangue.',
    },
  },
  qotDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'Drogo’s khaleesi. When she lets the godswife work blood magic on Drogo, Qotho turns on her and shoves her aside.',
      it: 'La khaleesi di Drogo. Quando lei lascia che la sacerdotessa usi la magia del sangue su Drogo, Qotho si rivolta contro di lei e la spinge via.',
    },
  },
  qotJorah: {
    character: 'jorah-mormont',
    type: { en: 'Knight who kills him', it: 'Cavaliere che lo uccide' },
    summary: {
      en: 'The khaleesi’s exiled knight, who kills Qotho in a fight outside Drogo’s tent.',
      it: 'Il cavaliere in esilio della khaleesi, che uccide Qotho in un duello fuori dalla tenda di Drogo.',
    },
  },

  // Cohollo
  cohDrogo: {
    character: 'drogo',
    type: { en: 'Khal', it: 'Khal' },
    summary: {
      en: 'The khal he has guarded since Drogo was born, as the oldest of his three bloodriders.',
      it: 'Il khal che protegge dalla sua nascita, il più anziano dei suoi tre cavalieri di sangue.',
    },
  },
  cohDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'Drogo’s khaleesi. Cohollo is kinder to her than the other bloodriders.',
      it: 'La khaleesi di Drogo. Cohollo è più gentile con lei degli altri cavalieri di sangue.',
    },
  },
  cohDaenerysRite: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'Drogo’s khaleesi, whom he always treated kindly. When she turns to blood magic he spits in her face and nearly kills her.',
      it: 'La khaleesi di Drogo, con cui era sempre stato gentile. Quando lei ricorre alla magia del sangue, Cohollo le sputa in faccia e per poco non la uccide.',
    },
  },
  cohAggo: {
    character: 'aggo',
    type: { en: 'Guard who kills him', it: 'Guardia che lo uccide' },
    summary: {
      en: 'A warrior of the khaleesi’s guard. His arrow kills Cohollo before Cohollo can kill her.',
      it: 'Un guerriero della guardia della khaleesi. La sua freccia uccide Cohollo prima che lui possa ucciderla.',
    },
  },

  // Haggo
  hagDrogo: {
    character: 'drogo',
    type: { en: 'Khal', it: 'Khal' },
    summary: {
      en: 'The khal he serves as a bloodrider. When Drogo falters, Haggo offers to carry him, and Drogo refuses.',
      it: 'Il khal che serve come cavaliere di sangue. Quando Drogo vacilla, Haggo si offre di portarlo, e Drogo rifiuta.',
    },
  },
  hagMirri: {
    character: 'mirri-maz-duur',
    type: { en: 'Maegi', it: 'Maegi' },
    summary: {
      en: 'The Lhazareen godswife treating Drogo. Haggo distrusts her.',
      it: 'La sacerdotessa lhazareen che cura Drogo. Haggo diffida di lei.',
    },
  },
  hagMirriBlame: {
    character: 'mirri-maz-duur',
    type: { en: 'Maegi', it: 'Maegi' },
    summary: {
      en: 'The Lhazareen godswife treating Drogo. When the wound festers, Haggo blames her and strikes her.',
      it: 'La sacerdotessa lhazareen che cura Drogo. Quando la ferita si infetta, Haggo la incolpa e la colpisce.',
    },
  },
  hagRakharo: {
    character: 'rakharo',
    type: { en: 'Guard who kills him', it: 'Guardia che lo uccide' },
    summary: {
      en: 'A warrior of the khaleesi’s guard. He kills Haggo in the fight over the blood magic.',
      it: 'Un guerriero della guardia della khaleesi. Uccide Haggo nello scontro per la magia del sangue.',
    },
  },
  hagJhogo: {
    character: 'jhogo',
    type: { en: 'Khaleesi’s guard', it: 'Guardia della khaleesi' },
    summary: {
      en: 'A warrior of the khaleesi’s guard. His whip catches Haggo by the throat in the fight over the blood magic.',
      it: 'Un guerriero della guardia della khaleesi. Nello scontro per la magia del sangue, la sua frusta afferra Haggo alla gola.',
    },
  },

  // Jhogo
  jhoDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he guards. After he brings Viserys down, he asks her whether Viserys should die or be marked.',
      it: 'La khaleesi che protegge. Dopo aver atterrato Viserys, le chiede se debba morire o essere sfregiato.',
    },
  },
  jhoViserys: {
    character: 'viserys-targaryen',
    type: { en: 'Khaleesi’s brother', it: 'Fratello della khaleesi' },
    summary: {
      en: 'Daenerys’s brother. When he attacks her, Jhogo’s whip catches him by the throat and pulls him to the ground.',
      it: 'Il fratello di Daenerys. Quando lui la aggredisce, Jhogo lo afferra alla gola con la frusta e lo tira a terra.',
    },
  },
  jhoDrogo: {
    character: 'drogo',
    type: { en: 'Khal', it: 'Khal' },
    summary: {
      en: 'His khal. For helping save the khaleesi from poison, Drogo lets Jhogo choose a horse.',
      it: 'Il suo khal. Per aver aiutato a salvare la khaleesi dal veleno, Drogo lascia che Jhogo scelga un cavallo.',
    },
  },
  jhoViserysDead: {
    character: 'viserys-targaryen',
    type: { en: 'Khaleesi’s brother', it: 'Fratello della khaleesi' },
    summary: {
      en: 'Daenerys’s brother, whom Jhogo once pulled to the ground with his whip. Drogo killed him at a feast.',
      it: 'Il fratello di Daenerys, che Jhogo aveva tirato a terra con la frusta. Drogo lo ha ucciso durante un banchetto.',
    },
  },
  jhoMirri: {
    character: 'mirri-maz-duur',
    type: { en: 'Maegi', it: 'Maegi' },
    summary: {
      en: 'The Lhazareen godswife treating Drogo. Jhogo begs the khaleesi not to use her blood magic and to let him kill her.',
      it: 'La sacerdotessa lhazareen che cura Drogo. Jhogo supplica la khaleesi di non usare la sua magia del sangue e di lasciargliela uccidere.',
    },
  },
  jhoHaggo: {
    character: 'haggo',
    type: {
      en: 'Bloodrider he fights',
      it: 'Cavaliere di sangue che combatte',
    },
    summary: {
      en: 'One of Drogo’s bloodriders. Jhogo’s whip catches him by the throat, and Rakharo kills him.',
      it: 'Uno dei cavalieri di sangue di Drogo. Jhogo lo afferra alla gola con la frusta, e Rakharo lo uccide.',
    },
  },
  jhoHaggoDead: {
    character: 'haggo',
    type: {
      en: 'Bloodrider he fought',
      it: 'Cavaliere di sangue che ha combattuto',
    },
    summary: {
      en: 'One of Drogo’s bloodriders. Jhogo’s whip caught him by the throat, and Rakharo killed him.',
      it: 'Uno dei cavalieri di sangue di Drogo. Jhogo lo ha afferrato alla gola con la frusta, e Rakharo lo ha ucciso.',
    },
  },
  jhoDaenerysPyre: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he guards. She names him her bloodrider and he refuses, saying it would shame him; when she walks out of the fire, he kneels to her.',
      it: 'La khaleesi che protegge. Lei lo nomina suo cavaliere di sangue e lui rifiuta, perché lo considera un disonore; quando esce dal fuoco, si inginocchia davanti a lei.',
    },
  },
  jhoDrogoDead: {
    character: 'drogo',
    type: { en: 'Khal', it: 'Khal' },
    summary: {
      en: 'His khal. The blood magic left Drogo empty, his khalasar broke apart, and he died.',
      it: 'Il suo khal. La magia del sangue ha lasciato Drogo assente, il suo khalasar si è diviso, e lui è morto.',
    },
  },
  jhoMirriPyre: {
    character: 'mirri-maz-duur',
    type: { en: 'Maegi', it: 'Maegi' },
    summary: {
      en: 'The Lhazareen godswife whose blood magic Jhogo begged the khaleesi to refuse. Daenerys burns her on Drogo’s pyre.',
      it: 'La sacerdotessa lhazareen di cui Jhogo aveva chiesto alla khaleesi di rifiutare la magia. Daenerys la brucia sulla pira di Drogo.',
    },
  },

  // Quaro
  quaDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he guards. When she has the riders stopped from raping a captive, he tells her the girl should feel honored.',
      it: 'La khaleesi che protegge. Quando lei fa fermare i guerrieri che violentano una prigioniera, lui le dice che la ragazza dovrebbe sentirsi onorata.',
    },
  },
  quaJhogo: {
    character: 'jhogo',
    type: { en: 'Fellow guard', it: 'Compagno di guardia' },
    summary: {
      en: 'Another warrior of the khaleesi’s guard.',
      it: 'Un altro guerriero della guardia della khaleesi.',
    },
  },
  quaDaenerysRite: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he guards. He helps hold Drogo’s stallion for the blood magic, and dies answering her call.',
      it: 'La khaleesi che protegge. Aiuta a tenere fermo lo stallone di Drogo per la magia del sangue, e muore rispondendo alla sua chiamata.',
    },
  },
  quaQotho: {
    character: 'qotho',
    type: {
      en: 'Bloodrider who kills him',
      it: 'Cavaliere di sangue che lo uccide',
    },
    summary: {
      en: 'One of Drogo’s bloodriders. When the khaleesi calls her guard against him, Qotho cuts Quaro down.',
      it: 'Uno dei cavalieri di sangue di Drogo. Quando la khaleesi chiama la guardia contro di lui, Qotho abbatte Quaro.',
    },
  },

  // Aggo
  aggDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he is charged with guarding.',
      it: 'La khaleesi che deve proteggere.',
    },
  },
  aggMirri: {
    character: 'mirri-maz-duur',
    type: { en: 'Captive', it: 'Prigioniera' },
    summary: {
      en: 'A Lhazareen godswife who offers to heal Drogo. Aggo nearly cuts her throat before the khaleesi stops him.',
      it: 'Una sacerdotessa lhazareen che si offre di curare Drogo. Aggo per poco non le taglia la gola, finché la khaleesi non lo ferma.',
    },
  },
  aggCohollo: {
    character: 'cohollo',
    type: { en: 'Bloodrider he kills', it: 'Cavaliere di sangue che uccide' },
    summary: {
      en: 'One of Drogo’s bloodriders. Aggo’s arrow kills him as he is about to kill the khaleesi.',
      it: 'Uno dei cavalieri di sangue di Drogo. La freccia di Aggo lo uccide mentre sta per uccidere la khaleesi.',
    },
  },
  aggCoholloDead: {
    character: 'cohollo',
    type: {
      en: 'Bloodrider he killed',
      it: 'Cavaliere di sangue che ha ucciso',
    },
    summary: {
      en: 'One of Drogo’s bloodriders. Aggo’s arrow killed him as he was about to kill the khaleesi.',
      it: 'Uno dei cavalieri di sangue di Drogo. La freccia di Aggo lo ha ucciso mentre stava per uccidere la khaleesi.',
    },
  },
  aggDaenerysPyre: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he guards. She names him her bloodrider and he refuses, saying only a man can lead a khalasar; when she walks out of the fire, he kneels to her.',
      it: 'La khaleesi che protegge. Lei lo nomina suo cavaliere di sangue e lui rifiuta, dicendo che solo un uomo può guidare un khalasar; quando esce dal fuoco, si inginocchia davanti a lei.',
    },
  },

  // Mago
  // Show only: "The Pointy End", he challenges Drogo and dies.
  magDrogoEpisode: {
    character: 'drogo',
    type: { en: 'Khal he challenges', it: 'Khal che sfida' },
    summary: {
      en: 'The khal he challenges over the captive women. Drogo kills him in the fight.',
      it: 'Il khal che sfida per le prigioniere. Drogo lo uccide nello scontro.',
    },
  },
  magDaenerysEpisode: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'Drogo’s khaleesi. Mago will not accept her claim on the captive women and insults her before the khal.',
      it: 'La khaleesi di Drogo. Mago non accetta che lei reclami le prigioniere e la insulta davanti al khal.',
    },
  },
  // Books only: Daenerys VII and IX, he complains and lives.
  magDaenerysChapter: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'Drogo’s khaleesi. She takes a captive girl away from him, and he complains to the khal.',
      it: 'La khaleesi di Drogo. Gli toglie una ragazza prigioniera, e lui se ne lamenta con il khal.',
    },
  },
  magDrogoChapter: {
    character: 'drogo',
    type: { en: 'Khal', it: 'Khal' },
    summary: {
      en: 'The khal he complains to. Drogo tells him to find another captive.',
      it: 'Il khal a cui si lamenta. Drogo gli dice di trovarsi un’altra prigioniera.',
    },
  },
  magEroeh: {
    character: 'eroeh',
    type: { en: 'Girl he seizes', it: 'Ragazza che prende' },
    summary: {
      en: 'The Lhazareen girl the khaleesi took from him. When the khalasar broke apart, he seized and raped her, then handed her to his new khal, whose bloodriders killed her.',
      it: 'La ragazza lhazareen che la khaleesi gli aveva tolto. Quando il khalasar si è diviso, l’ha presa e violentata, poi l’ha consegnata al suo nuovo khal, i cui cavalieri di sangue l’hanno uccisa.',
    },
  },
  magDaenerysVow: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'Drogo’s khaleesi, who took a captive girl from him. After Drogo falls, she swears Mago will die screaming.',
      it: 'La khaleesi di Drogo, che gli aveva tolto una ragazza prigioniera. Dopo la caduta di Drogo, giura che Mago morirà urlando.',
    },
  },
  magDrogoFallen: {
    character: 'drogo',
    type: { en: 'Former khal', it: 'Ex khal' },
    summary: {
      en: 'The khal who once told him to find another captive. Drogo can no longer lead, and Mago follows a new khal.',
      it: 'Il khal che gli aveva detto di trovarsi un’altra prigioniera. Drogo non può più guidare, e Mago segue un nuovo khal.',
    },
  },

  // Mirri Maz Duur
  mirDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi who saved her', it: 'Khaleesi che l’ha salvata' },
    summary: {
      en: 'The khaleesi who takes her from the riders during the raid. Mirri offers to treat Drogo’s wound.',
      it: 'La khaleesi che la sottrae ai razziatori durante l’assalto. Mirri si offre di curare la ferita di Drogo.',
    },
  },
  mirDrogo: {
    character: 'drogo',
    type: { en: 'Khal she treats', it: 'Khal che cura' },
    summary: {
      en: 'The khal whose riders sacked her town. She treats his wound.',
      it: 'Il khal i cui guerrieri hanno saccheggiato il suo villaggio. Lei gli cura la ferita.',
    },
  },
  mirQotho: {
    character: 'qotho',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'One of Drogo’s bloodriders. He distrusts her and calls her a maegi.',
      it: 'Uno dei cavalieri di sangue di Drogo. Diffida di lei e la chiama maegi.',
    },
  },
  mirDaenerysRite: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi who saved her', it: 'Khaleesi che l’ha salvata' },
    summary: {
      en: 'The khaleesi who saved her. When Drogo’s wound festers, Daenerys asks her to save him, and Mirri works blood magic that will cost a life.',
      it: 'La khaleesi che l’ha salvata. Quando la ferita di Drogo si infetta, Daenerys le chiede di salvarlo, e Mirri compie una magia del sangue che costerà una vita.',
    },
  },
  mirDrogoRite: {
    character: 'drogo',
    type: { en: 'Khal she treats', it: 'Khal che cura' },
    summary: {
      en: 'The khal whose riders sacked her town. When his wound festers, she kills his stallion to work blood magic over him.',
      it: 'Il khal i cui guerrieri hanno saccheggiato il suo villaggio. Quando la ferita si infetta, lei uccide il suo stallone per una magia del sangue.',
    },
  },
  mirQothoRite: {
    character: 'qotho',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'One of Drogo’s bloodriders, who calls her a maegi. He tries to stop her blood magic and is killed.',
      it: 'Uno dei cavalieri di sangue di Drogo, che la chiama maegi. Cerca di fermare la sua magia del sangue e viene ucciso.',
    },
  },
  mirQothoDead: {
    character: 'qotho',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'One of Drogo’s bloodriders, who called her a maegi. He tried to stop her blood magic and was killed.',
      it: 'Uno dei cavalieri di sangue di Drogo, che la chiamava maegi. Ha cercato di fermare la sua magia del sangue ed è stato ucciso.',
    },
  },
  // Books: Daenerys IX tells the revenge before the pyre chapter.
  mirDaenerysRevenge: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi who saved her', it: 'Khaleesi che l’ha salvata' },
    summary: {
      en: 'The khaleesi who saved her. Mirri tells her the blood magic was her revenge for her town, and Daenerys has her bound.',
      it: 'La khaleesi che l’ha salvata. Mirri le dice che la magia del sangue era la sua vendetta per il villaggio, e Daenerys la fa legare.',
    },
  },
  mirDrogoEmpty: {
    character: 'drogo',
    type: { en: 'Khal she treated', it: 'Khal che ha curato' },
    summary: {
      en: 'The khal whose riders sacked her town. Her blood magic leaves him alive but without a mind, until Daenerys smothers him.',
      it: 'Il khal i cui guerrieri hanno saccheggiato il suo villaggio. La sua magia del sangue lo lascia vivo ma senza più coscienza, finché Daenerys non lo soffoca.',
    },
  },
  mirDrogoDead: {
    character: 'drogo',
    type: { en: 'Khal she treated', it: 'Khal che ha curato' },
    summary: {
      en: 'The khal whose riders sacked her town. Her blood magic left him alive but without a mind, until Daenerys smothered him.',
      it: 'Il khal i cui guerrieri avevano saccheggiato il suo villaggio. La sua magia del sangue lo ha lasciato vivo ma senza più coscienza, finché Daenerys non lo ha soffocato.',
    },
  },
  mirDaenerysPyre: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi who saved her', it: 'Khaleesi che l’ha salvata' },
    summary: {
      en: 'The khaleesi who saved her. Mirri takes her revenge with blood magic, and Daenerys burns her on Drogo’s pyre.',
      it: 'La khaleesi che l’ha salvata. Mirri si vendica con la magia del sangue, e Daenerys la brucia sulla pira di Drogo.',
    },
  },
  mirJorah: {
    character: 'jorah-mormont',
    type: { en: 'Knight who binds her', it: 'Cavaliere che la lega' },
    summary: {
      en: 'The khaleesi’s exiled knight. At her order he binds Mirri to Drogo’s pyre.',
      it: 'Il cavaliere in esilio della khaleesi. Per ordine di lei, lega Mirri alla pira di Drogo.',
    },
  },

  // Eroeh
  eroDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi who saved her', it: 'Khaleesi che l’ha salvata' },
    summary: {
      en: 'The khaleesi who stopped the riders raping her during the raid and claimed her.',
      it: 'La khaleesi che durante l’assalto ha fermato i guerrieri che la violentavano e l’ha presa con sé.',
    },
  },
  eroMago: {
    character: 'mago',
    type: { en: 'Man who killed her', it: 'Uomo che l’ha uccisa' },
    summary: {
      en: 'A rider who complained when the khaleesi took her from him. When the khalasar broke apart, he seized and raped her, then handed her to his new khal, whose bloodriders killed her.',
      it: 'Un guerriero che si era lamentato quando la khaleesi gliel’aveva tolta. Quando il khalasar si è diviso, l’ha presa e violentata, poi l’ha consegnata al suo nuovo khal, i cui cavalieri di sangue l’hanno uccisa.',
    },
  },
  eroDoreah: {
    character: 'doreah',
    type: { en: 'Handmaiden who tended her', it: 'Ancella che l’ha curata' },
    summary: {
      en: 'A handmaiden of the khaleesi, who tended her hurts after the raid.',
      it: 'Un’ancella della khaleesi, che ha curato le sue ferite dopo l’assalto.',
    },
  },
} satisfies Record<string, Relationship>

export const season1Relationships = {
  // The show weds her in episode 1; its wedding entry waits for episode 2,
  // the book's pair, which is later and so safe.
  'daenerys-targaryen': [
    {
      episode: 1,
      chapter: 4,
      value: [links.daeViserys, links.daeIllyrio, links.daeDrogoPromised],
    },
    {
      episode: 2,
      chapter: 12,
      value: [
        links.daeDrogoWife,
        links.daeViserysWed,
        links.daeJorahWed,
        links.daeIllyrioWed,
      ],
    },
    {
      episode: 6,
      chapter: 47,
      value: [links.daeDrogoChild, links.daeJorahAdviser, links.daeViserysDead],
    },
    {
      episode: 7,
      chapter: 55,
      value: [
        links.daeDrogoVow,
        links.daeJorahWine,
        links.daeViserysDead,
        links.daeRobertDead,
      ],
    },
    {
      episode: 8,
      chapter: 62,
      value: [
        links.daeDrogoRaid,
        links.daeMirri,
        links.daeJorahWine,
        links.daeViserysDead,
        links.daeRobertDead,
      ],
    },
    // Books: Daenerys IX smothers Drogo a chapter before the pyre; the show
    // tells both in episode 10.
    {
      episode: 10,
      chapter: 69,
      source: 'chapter',
      value: [
        links.daeDrogoSmothered,
        links.daeMirriRevenge,
        links.daeJorahTent,
        links.daeViserysDead,
        links.daeRobertDead,
      ],
    },
    {
      episode: 10,
      chapter: 73,
      value: [
        links.daeDrogoPyre,
        links.daeJorahKneels,
        links.daeMirriPyre,
        links.daeRakharo,
        links.daeViserysDead,
      ],
    },
  ],
  // Robert's book record opens at Eddard I (chapter 5), a chapter after
  // Viserys's own; the show has him from episode 1.
  'viserys-targaryen': [
    {
      episode: 1,
      chapter: 4,
      source: 'episode',
      value: [
        links.visDaenerys,
        links.visDrogo,
        links.visIllyrio,
        links.visRobert,
      ],
    },
    {
      episode: 1,
      chapter: 4,
      source: 'chapter',
      value: [links.visDaenerys, links.visDrogo, links.visIllyrio],
    },
    {
      episode: 1,
      chapter: 5,
      source: 'chapter',
      value: [
        links.visDaenerys,
        links.visDrogo,
        links.visIllyrio,
        links.visRobert,
      ],
    },
    // The show swears Jorah to him in episode 1; episode 2 is later and safe.
    {
      episode: 2,
      chapter: 12,
      value: [
        links.visDaenerysWed,
        links.visDrogoWed,
        links.visJorah,
        links.visIllyrio,
        links.visRobert,
      ],
    },
    // The two media give the whip to different warriors.
    {
      episode: 3,
      chapter: 24,
      source: 'episode',
      value: [
        links.visDaenerysWalk,
        links.visDrogoWed,
        links.visJorah,
        links.visRakharo,
        links.visRobert,
      ],
    },
    {
      episode: 3,
      chapter: 24,
      source: 'chapter',
      value: [
        links.visDaenerysWalk,
        links.visDrogoWed,
        links.visJorahSides,
        links.visJhogo,
        links.visRobert,
      ],
    },
    {
      episode: 6,
      chapter: 47,
      value: [
        links.visDaenerysDead,
        links.visDrogoDead,
        links.visJorahDead,
        links.visRobertDead,
      ],
    },
  ],
  'drogo': [
    {
      episode: 1,
      chapter: 4,
      value: [links.droDaenerysPromised, links.droViserys, links.droIllyrio],
    },
    {
      episode: 2,
      chapter: 12,
      value: [links.droDaenerysWife, links.droViserysWed, links.droIllyrio],
    },
    {
      episode: 6,
      chapter: 47,
      value: [links.droDaenerysSon, links.droViserysDead, links.droIllyrio],
    },
    {
      episode: 7,
      chapter: 55,
      value: [links.droDaenerysVow, links.droJorah, links.droViserysDead],
    },
    // The show's Mago dies challenging Drogo; the book's complains and lives.
    {
      episode: 8,
      chapter: 62,
      source: 'episode',
      value: [
        links.droDaenerysRaid,
        links.droMirri,
        links.droMagoEpisode,
        links.droQotho,
        links.droJorah,
      ],
    },
    {
      episode: 8,
      chapter: 62,
      source: 'chapter',
      value: [
        links.droDaenerysRaid,
        links.droMirri,
        links.droMagoChapter,
        links.droQotho,
        links.droJorah,
      ],
    },
    {
      episode: 10,
      chapter: 69,
      value: [
        links.droDaenerysEnd,
        links.droMirriEnd,
        links.droQothoDead,
        links.droJorah,
        links.droViserysDead,
      ],
    },
  ],
  // The books only point him out at his gate (Daenerys I); his first link is
  // the wedding (Daenerys II). The show has the wedding in episode 1. Varys
  // and the reason for his exile are told differently in each medium.
  'jorah-mormont': [
    {
      episode: 1,
      chapter: 4,
      source: 'episode',
      value: [links.jorViserys, links.jorDaenerysGift, links.jorIllyrio],
    },
    {
      episode: 2,
      chapter: 12,
      source: 'chapter',
      value: [links.jorViserys, links.jorDaenerysGift, links.jorIllyrio],
    },
    {
      episode: 2,
      chapter: 12,
      source: 'episode',
      value: [
        links.jorDaenerysComfort,
        links.jorViserys,
        links.jorEddardEpisode,
        links.jorIllyrio,
      ],
    },
    {
      episode: 3,
      chapter: 24,
      source: 'chapter',
      value: [links.jorDaenerysSides, links.jorViserysDoubt, links.jorIllyrio],
    },
    {
      episode: 4,
      chapter: 37,
      source: 'episode',
      value: [
        links.jorDaenerysConfides,
        links.jorViserys,
        links.jorEddardEpisode,
        links.jorIllyrio,
      ],
    },
    // The chapter only orders this show-only entry.
    {
      episode: 5,
      chapter: 37,
      source: 'episode',
      value: [
        links.jorDaenerysConfides,
        links.jorViserys,
        links.jorVarys,
        links.jorEddardEpisode,
        links.jorIllyrio,
      ],
    },
    {
      episode: 4,
      chapter: 37,
      source: 'chapter',
      value: [
        links.jorDaenerysSides,
        links.jorViserysDoubt,
        links.jorEddardChapter,
        links.jorIllyrio,
      ],
    },
    {
      episode: 6,
      chapter: 47,
      source: 'episode',
      value: [
        links.jorDaenerysStays,
        links.jorViserysDead,
        links.jorVarys,
        links.jorEddardEpisode,
        links.jorIllyrio,
      ],
    },
    {
      episode: 6,
      chapter: 47,
      source: 'chapter',
      value: [
        links.jorDaenerysStays,
        links.jorViserysDead,
        links.jorEddardChapter,
        links.jorIllyrio,
      ],
    },
    {
      episode: 7,
      chapter: 55,
      source: 'episode',
      value: [
        links.jorDaenerysWine,
        links.jorDrogo,
        links.jorVarysPardon,
        links.jorViserysDead,
        links.jorEddardEpisode,
      ],
    },
    {
      episode: 7,
      chapter: 55,
      source: 'chapter',
      value: [
        links.jorDaenerysWine,
        links.jorDrogo,
        links.jorIllyrioLetter,
        links.jorViserysDead,
        links.jorEddardChapter,
      ],
    },
    {
      episode: 9,
      chapter: 65,
      value: [
        links.jorDaenerysRite,
        links.jorDrogo,
        links.jorQotho,
        links.jorViserysDead,
      ],
    },
    {
      episode: 10,
      chapter: 73,
      value: [
        links.jorDaenerysPyre,
        links.jorDrogoDead,
        links.jorMirri,
        links.jorQothoDead,
        links.jorViserysDead,
      ],
    },
  ],
  // Varys is the show's alone: the book never names the man Arya overhears.
  'illyrio-mopatis': [
    {
      episode: 1,
      chapter: 4,
      value: [links.ilyViserys, links.ilyDaenerys, links.ilyDrogo],
    },
    {
      episode: 2,
      chapter: 12,
      value: [links.ilyDaenerysEggs, links.ilyViserys, links.ilyDrogo],
    },
    {
      episode: 5,
      chapter: 47,
      source: 'episode',
      value: [
        links.ilyDaenerysEggs,
        links.ilyViserys,
        links.ilyDrogo,
        links.ilyVarys,
      ],
    },
    {
      episode: 6,
      chapter: 47,
      source: 'episode',
      value: [
        links.ilyDaenerysEggs,
        links.ilyViserysDead,
        links.ilyDrogo,
        links.ilyVarys,
      ],
    },
    {
      episode: 6,
      chapter: 47,
      source: 'chapter',
      value: [links.ilyDaenerysEggs, links.ilyViserysDead, links.ilyDrogo],
    },
    {
      episode: 10,
      chapter: 69,
      source: 'episode',
      value: [
        links.ilyDaenerysEggs,
        links.ilyViserysDead,
        links.ilyDrogoDead,
        links.ilyVarys,
      ],
    },
    {
      episode: 10,
      chapter: 69,
      source: 'chapter',
      value: [links.ilyDaenerysEggs, links.ilyViserysDead, links.ilyDrogoDead],
    },
  ],
  'irri': [
    {
      episode: 2,
      chapter: 12,
      source: 'episode',
      value: [links.irrDaenerys, links.irrJhiqui, links.irrDoreahStory],
    },
    {
      episode: 2,
      chapter: 12,
      source: 'chapter',
      value: [links.irrDaenerysChapter, links.irrJhiqui, links.irrDoreah],
    },
    {
      episode: 3,
      chapter: 24,
      source: 'episode',
      value: [
        links.irrDaenerysPregnant,
        links.irrRakharo,
        links.irrJhiqui,
        links.irrDoreahStory,
      ],
    },
    {
      episode: 3,
      chapter: 24,
      source: 'chapter',
      value: [links.irrDaenerysChapter, links.irrJhiqui, links.irrDoreahStory],
    },
  ],
  'jhiqui': [
    {
      episode: 2,
      chapter: 12,
      source: 'episode',
      value: [links.jhiDaenerys, links.jhiIrriStory, links.jhiDoreahStory],
    },
    {
      episode: 2,
      chapter: 12,
      source: 'chapter',
      value: [links.jhiDaenerysChapter, links.jhiIrri, links.jhiDoreah],
    },
    {
      episode: 3,
      chapter: 24,
      source: 'chapter',
      value: [
        links.jhiDaenerysPregnant,
        links.jhiIrriStory,
        links.jhiDoreahStory,
      ],
    },
  ],
  'doreah': [
    {
      episode: 2,
      chapter: 12,
      value: [links.dorDaenerys, links.dorIrri, links.dorJhiqui],
    },
    {
      episode: 4,
      chapter: 37,
      value: [
        links.dorDaenerys,
        links.dorViserys,
        links.dorIrri,
        links.dorJhiqui,
      ],
    },
    {
      episode: 6,
      chapter: 47,
      value: [
        links.dorDaenerys,
        links.dorViserysDead,
        links.dorIrri,
        links.dorJhiqui,
      ],
    },
    {
      episode: 10,
      chapter: 69,
      source: 'chapter',
      value: [
        links.dorDaenerys,
        links.dorEroeh,
        links.dorViserysDead,
        links.dorIrri,
        links.dorJhiqui,
      ],
    },
  ],
  // The show's Rakharo does what the book gives Jhogo; the book's fights the
  // bloodriders, which the show leaves out.
  'rakharo': [
    {
      episode: 3,
      chapter: 24,
      source: 'episode',
      value: [
        links.rakDaenerys,
        links.rakViserys,
        links.rakJorah,
        links.rakIrri,
      ],
    },
    {
      episode: 3,
      chapter: 24,
      source: 'chapter',
      value: [links.rakDaenerys, links.rakJhogo],
    },
    {
      episode: 6,
      chapter: 47,
      source: 'episode',
      value: [
        links.rakDaenerys,
        links.rakViserysDead,
        links.rakJorah,
        links.rakIrri,
      ],
    },
    {
      episode: 9,
      chapter: 65,
      source: 'chapter',
      value: [links.rakDaenerys, links.rakJhogo, links.rakHaggo],
    },
    {
      episode: 10,
      chapter: 73,
      source: 'episode',
      value: [
        links.rakDaenerysPyre,
        links.rakJorah,
        links.rakIrri,
        links.rakViserysDead,
      ],
    },
    {
      episode: 10,
      chapter: 73,
      source: 'chapter',
      value: [links.rakDaenerysPyreChapter, links.rakJhogo, links.rakHaggoDead],
    },
  ],
  // Show: he breaks Viserys's arm at his gate. The books name him only in
  // Daenerys VII, after Viserys is dead.
  'qotho': [
    {
      episode: 6,
      chapter: 62,
      source: 'episode',
      value: [links.qotDrogo, links.qotViserys],
    },
    {
      episode: 8,
      chapter: 62,
      source: 'episode',
      value: [links.qotDrogo, links.qotMirri, links.qotViserysDead],
    },
    {
      episode: 8,
      chapter: 62,
      source: 'chapter',
      value: [links.qotDrogo, links.qotMirri],
    },
    {
      episode: 9,
      chapter: 65,
      value: [
        links.qotDrogo,
        links.qotDaenerys,
        links.qotMirriRite,
        links.qotJorah,
      ],
    },
  ],
  // Books only, as their records are.
  'cohollo': [
    {
      episode: 4,
      chapter: 37,
      source: 'chapter',
      value: [links.cohDrogo, links.cohDaenerys],
    },
    {
      episode: 9,
      chapter: 65,
      source: 'chapter',
      value: [links.cohDrogo, links.cohDaenerysRite, links.cohAggo],
    },
  ],
  'haggo': [
    {
      episode: 8,
      chapter: 62,
      source: 'chapter',
      value: [links.hagDrogo, links.hagMirri],
    },
    {
      episode: 9,
      chapter: 65,
      source: 'chapter',
      value: [
        links.hagDrogo,
        links.hagMirriBlame,
        links.hagRakharo,
        links.hagJhogo,
      ],
    },
  ],
  'jhogo': [
    {
      episode: 3,
      chapter: 24,
      source: 'chapter',
      value: [links.jhoDaenerys, links.jhoViserys],
    },
    {
      episode: 7,
      chapter: 55,
      source: 'chapter',
      value: [links.jhoDaenerys, links.jhoDrogo, links.jhoViserysDead],
    },
    {
      episode: 9,
      chapter: 65,
      source: 'chapter',
      value: [
        links.jhoDaenerys,
        links.jhoDrogo,
        links.jhoMirri,
        links.jhoHaggo,
        links.jhoViserysDead,
      ],
    },
    {
      episode: 10,
      chapter: 73,
      source: 'chapter',
      value: [
        links.jhoDaenerysPyre,
        links.jhoDrogoDead,
        links.jhoMirriPyre,
        links.jhoHaggoDead,
      ],
    },
  ],
  'quaro': [
    {
      episode: 8,
      chapter: 62,
      source: 'chapter',
      value: [links.quaDaenerys, links.quaJhogo],
    },
    {
      episode: 9,
      chapter: 65,
      source: 'chapter',
      value: [links.quaDaenerysRite, links.quaQotho, links.quaJhogo],
    },
  ],
  // The show names him only in season 2 (episode 11): stage 1 has the
  // book's links alone.
  'aggo': [
    {
      episode: 11,
      chapter: 62,
      source: 'chapter',
      value: [links.aggDaenerys, links.aggMirri],
    },
    {
      episode: 11,
      chapter: 65,
      source: 'chapter',
      value: [links.aggDaenerys, links.aggMirri, links.aggCohollo],
    },
    {
      episode: 11,
      chapter: 73,
      source: 'chapter',
      value: [links.aggDaenerysPyre, links.aggCoholloDead],
    },
  ],
  // The show's Mago dies at his gate; the book's lives to kill Eroeh.
  'mago': [
    {
      episode: 8,
      chapter: 62,
      source: 'episode',
      value: [links.magDrogoEpisode, links.magDaenerysEpisode],
    },
    {
      episode: 8,
      chapter: 62,
      source: 'chapter',
      value: [links.magDaenerysChapter, links.magDrogoChapter],
    },
    {
      episode: 10,
      chapter: 69,
      source: 'chapter',
      value: [links.magEroeh, links.magDaenerysVow, links.magDrogoFallen],
    },
  ],
  'mirri-maz-duur': [
    {
      episode: 8,
      chapter: 62,
      value: [links.mirDaenerys, links.mirDrogo, links.mirQotho],
    },
    {
      episode: 9,
      chapter: 65,
      value: [links.mirDaenerysRite, links.mirDrogoRite, links.mirQothoRite],
    },
    {
      episode: 10,
      chapter: 69,
      source: 'chapter',
      value: [
        links.mirDaenerysRevenge,
        links.mirDrogoEmpty,
        links.mirQothoDead,
      ],
    },
    {
      episode: 10,
      chapter: 73,
      value: [
        links.mirDaenerysPyre,
        links.mirDrogoDead,
        links.mirJorah,
        links.mirQothoDead,
      ],
    },
  ],
  // Books only: she opens with her death told (Daenerys IX).
  'eroeh': [
    {
      episode: 10,
      chapter: 69,
      source: 'chapter',
      value: [links.eroDaenerys, links.eroMago, links.eroDoreah],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
