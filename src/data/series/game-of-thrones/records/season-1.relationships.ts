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
      it: 'Suo fratello, che l’aveva data via in cambio di un esercito. Ha minacciato lei e il bambino che aspettava, e Drogo lo ha ucciso con l’oro fuso.',
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
      it: 'Il re che aveva preso il trono della sua famiglia. Voleva morti lei e il bambino che aspettava.',
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
    type: { en: 'Healer she saved', it: 'Guaritrice salvata da lei' },
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
      it: 'Sua sorella. L’ha minacciata insieme al bambino che aspettava durante un banchetto, e Drogo lo ha ucciso per questo.',
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
    type: { en: 'Rider he kills', it: 'Guerriero ucciso da lui' },
    summary: {
      en: 'A rider who rejects his wife’s claim to the captives and challenges him. Drogo kills him, and takes a wound in the fight.',
      it: 'Un guerriero che rifiuta il diritto di sua moglie sulle prigioniere e lo sfida. Drogo lo uccide, ma nello scontro viene ferito.',
    },
  },
  // Books only: Mago complains and lives (Daenerys VII).
  droMagoChapter: {
    character: 'mago',
    type: { en: 'Rider he rebukes', it: 'Guerriero rimproverato da lui' },
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
    type: { en: 'King he serves', it: 'Re al cui servizio è' },
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
    type: { en: 'King he serves', it: 'Re al cui servizio è' },
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
    type: { en: 'King he served', it: 'Re al cui servizio era' },
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
  jorDrogoSmothered: {
    character: 'drogo',
    type: { en: 'Khaleesi’s husband', it: 'Marito della khaleesi' },
    summary: {
      en: 'Daenerys’s husband, who once rewarded Jorah for saving her. The blood magic left Drogo empty, and Daenerys smothered him.',
      it: 'Il marito di Daenerys, che aveva ricompensato Jorah per averla salvata. La magia del sangue ha lasciato Drogo assente, e Daenerys lo ha soffocato.',
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
    type: {
      en: 'Bloodrider he kills',
      it: 'Cavaliere di sangue ucciso da lui',
    },
    summary: {
      en: 'One of Drogo’s bloodriders. He turns on Daenerys over the blood magic, and Jorah kills him.',
      it: 'Uno dei cavalieri di sangue di Drogo. Si rivolta contro Daenerys per la magia del sangue, e Jorah lo uccide.',
    },
  },
  jorQothoDead: {
    character: 'qotho',
    type: {
      en: 'Bloodrider he killed',
      it: 'Cavaliere di sangue ucciso da lui',
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
    type: { en: 'Groom he finds', it: 'Sposo trovato da lui' },
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
    type: { en: 'Groom he found', it: 'Sposo trovato da lui' },
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
  dorDaenerysWidow: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she serves. Doreah once taught her how to please her husband, Drogo, who is now dead.',
      it: 'La khaleesi che serve. Doreah le aveva insegnato come dare piacere al marito, Drogo, che ora è morto.',
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
    type: { en: 'Girl she tended', it: 'Ragazza curata da lei' },
    summary: {
      en: 'A Lhazareen girl Daenerys saved from rape and gave to Doreah to tend. When the khalasar broke apart, Mago seized and raped her, then handed her to his new khal, whose bloodriders killed her.',
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
    type: {
      en: 'Bloodrider he kills',
      it: 'Cavaliere di sangue ucciso da lui',
    },
    summary: {
      en: 'One of Drogo’s bloodriders. When they try to stop the blood magic, Rakharo kills him after Jhogo’s whip brings him down.',
      it: 'Uno dei cavalieri di sangue di Drogo. Quando cercano di fermare la magia del sangue, Rakharo lo uccide dopo che la frusta di Jhogo lo ha atterrato.',
    },
  },
  rakHaggoDead: {
    character: 'haggo',
    type: {
      en: 'Bloodrider he killed',
      it: 'Cavaliere di sangue ucciso da lui',
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
      en: 'The khaleesi he guards. She names him her ko and asks for his oath as bloodrider, and he only promises to take her to the dosh khaleen; when she walks out of the fire, he kneels to her.',
      it: 'La khaleesi che protegge. Lei lo nomina suo ko e gli chiede il giuramento da cavaliere di sangue, e lui promette soltanto di portarla dalle dosh khaleen; quando esce dal fuoco, si inginocchia davanti a lei.',
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
  // Show only: "A Golden Crown". The wikis read do not say which bloodrider
  // breaks the arm in the books (#1355).
  qotViserys: {
    character: 'viserys-targaryen',
    type: { en: 'Man he seizes', it: 'Uomo afferrato da lui' },
    summary: {
      en: 'The khaleesi’s brother. When Viserys draws a sword at a feast, Qotho breaks his arm and holds him while Drogo crowns him with molten gold.',
      it: 'Il fratello della khaleesi. Quando Viserys sguaina la spada durante un banchetto, Qotho gli spezza il braccio e lo tiene fermo mentre Drogo lo incorona con l’oro fuso.',
    },
  },
  qotViserysDead: {
    character: 'viserys-targaryen',
    type: { en: 'Man he seized', it: 'Uomo afferrato da lui' },
    summary: {
      en: 'The khaleesi’s brother. When Viserys drew a sword at a feast, Qotho broke his arm and held him while Drogo crowned him with molten gold.',
      it: 'Il fratello della khaleesi. Quando Viserys ha sguainato la spada durante un banchetto, Qotho gli ha spezzato il braccio e lo ha tenuto fermo mentre Drogo lo incoronava con l’oro fuso.',
    },
  },
  // Books only: Daenerys II, the bloodriders' wedding gifts.
  qotDaenerysBride: {
    character: 'daenerys-targaryen',
    type: { en: 'Khal’s bride', it: 'Sposa del khal' },
    summary: {
      en: 'Drogo’s bride. Qotho’s wedding gift to her is a dragonbone bow, which goes to Drogo when she refuses it, as custom requires.',
      it: 'La sposa di Drogo. Il dono di nozze di Qotho per lei è un’arma da tiro in osso di drago, che passa a Drogo quando lei la rifiuta, come vuole l’usanza.',
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
      en: 'The khal he serves as one of his bloodriders.',
      it: 'Il khal che serve come uno dei suoi cavalieri di sangue.',
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
      it: 'Cavaliere di sangue affrontato da lui',
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
      it: 'Cavaliere di sangue affrontato da lui',
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
      en: 'The khaleesi he guards. She names him her ko and asks for his oath as bloodrider, and he refuses, saying it would shame him; when she walks out of the fire, he kneels to her.',
      it: 'La khaleesi che protegge. Lei lo nomina suo ko e gli chiede il giuramento da cavaliere di sangue, e lui rifiuta, perché lo considera un disonore; quando esce dal fuoco, si inginocchia davanti a lei.',
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
    type: {
      en: 'Bloodrider he kills',
      it: 'Cavaliere di sangue ucciso da lui',
    },
    summary: {
      en: 'One of Drogo’s bloodriders. Aggo’s arrow kills him as he is about to kill the khaleesi.',
      it: 'Uno dei cavalieri di sangue di Drogo. La freccia di Aggo lo uccide mentre sta per uccidere la khaleesi.',
    },
  },
  aggCoholloDead: {
    character: 'cohollo',
    type: {
      en: 'Bloodrider he killed',
      it: 'Cavaliere di sangue ucciso da lui',
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
      en: 'The khaleesi he guards. She names him her ko and asks for his oath as bloodrider, and he refuses, saying only a man can lead a khalasar; when she walks out of the fire, he kneels to her.',
      it: 'La khaleesi che protegge. Lei lo nomina suo ko e gli chiede il giuramento da cavaliere di sangue, e lui rifiuta, dicendo che solo un uomo può guidare un khalasar; quando esce dal fuoco, si inginocchia davanti a lei.',
    },
  },

  // Mago
  // Show only: "The Pointy End", he challenges Drogo and dies.
  magDrogoEpisode: {
    character: 'drogo',
    type: { en: 'Khal he challenges', it: 'Khal sfidato da lui' },
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
    type: { en: 'Girl he seizes', it: 'Ragazza presa da lui' },
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
    type: { en: 'Khal she treats', it: 'Khal che lei cura' },
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
    type: { en: 'Khal she treats', it: 'Khal che lei cura' },
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
    type: { en: 'Khal she treated', it: 'Khal curato da lei' },
    summary: {
      en: 'The khal whose riders sacked her town. Her blood magic leaves him alive but without a mind, until Daenerys smothers him.',
      it: 'Il khal i cui guerrieri hanno saccheggiato il suo villaggio. La sua magia del sangue lo lascia vivo ma senza più coscienza, finché Daenerys non lo soffoca.',
    },
  },
  mirDrogoDead: {
    character: 'drogo',
    type: { en: 'Khal she treated', it: 'Khal curato da lei' },
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
    type: { en: 'Man who seized her', it: 'Uomo che l’ha presa' },
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

  // The Night's Watch cast (#1347).
  // Jon Snow
  jonEddard: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'The Lord of Winterfell. Jon is his bastard son.',
      it: 'Il lord di Grande Inverno. Jon è il suo figlio bastardo.',
    },
  },
  jonRobb: {
    character: 'robb-stark',
    type: { en: 'Half-brother', it: 'Fratellastro' },
    summary: {
      en: 'Eddard’s heir, his half-brother and the same age. They grew up together at Winterfell.',
      it: 'L’erede di Eddard, suo fratellastro e suo coetaneo. Sono cresciuti insieme a Grande Inverno.',
    },
  },
  jonBran: {
    character: 'bran-stark',
    type: { en: 'Half-brother', it: 'Fratellastro' },
    summary: {
      en: 'His younger half-brother. At the execution of a deserter, Jon tells him not to look away.',
      it: 'Il fratellastro più piccolo. All’esecuzione di un disertore, Jon gli dice di non distogliere lo sguardo.',
    },
  },
  jonBenjenNorth: {
    character: 'benjen-stark',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His father’s brother, a ranger of the Night’s Watch. Jon rides north with him to join the Watch.',
      it: 'Il fratello di suo padre, ranger dei Guardiani della notte. Jon parte con lui verso nord per unirsi ai Guardiani.',
    },
  },
  jonArya: {
    character: 'arya-stark',
    type: { en: 'Half-sister', it: 'Sorellastra' },
    summary: {
      en: 'His younger half-sister. Before he leaves, he gives her a small sword made for her.',
      it: 'La sorellastra più piccola. Prima di partire le regala una piccola spada fatta forgiare per lei.',
    },
  },
  jonRobbFarewell: {
    character: 'robb-stark',
    type: { en: 'Half-brother', it: 'Fratellastro' },
    summary: {
      en: 'Eddard’s heir, his half-brother and the same age. They say goodbye with an embrace when Jon leaves.',
      it: 'L’erede di Eddard, suo fratellastro e suo coetaneo. Quando Jon parte si salutano con un abbraccio.',
    },
  },
  jonCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Father’s wife', it: 'Moglie del padre' },
    summary: {
      en: 'Eddard’s wife, who does not want Jon at Winterfell. She sends him away from Bran’s bedside.',
      it: 'La moglie di Eddard, che non vuole Jon a Grande Inverno. Lo manda via dal capezzale di Bran.',
    },
  },
  jonBenjenRanging: {
    character: 'benjen-stark',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His father’s brother, a ranger. At Castle Black he refuses to take Jon on a ranging and leaves without him.',
      it: 'Il fratello di suo padre, ranger dei Guardiani. A Castello Nero si rifiuta di portare Jon in perlustrazione e parte senza di lui.',
    },
  },
  jonAlliser: {
    character: 'alliser-thorne',
    type: { en: 'Master-at-arms', it: 'Maestro d’armi' },
    summary: {
      en: 'The knight who trains the recruits. He mocks Jon as “Lord Snow”.',
      it: 'Il cavaliere che addestra le reclute. Deride Jon chiamandolo “Lord Snow”.',
    },
  },
  jonTyrionEpisode: {
    character: 'tyrion-lannister',
    type: { en: 'Queen’s brother', it: 'Fratello della regina' },
    summary: {
      en: 'He rides north with Jon. When recruits gang up on Jon, Tyrion stops them and points out that they never had a master-at-arms.',
      it: 'Viaggia verso nord con Jon. Quando alcune reclute se la prendono con lui, Tyrion le ferma e gli fa notare che loro non hanno mai avuto un maestro d’armi.',
    },
  },
  jonTyrionChapter: {
    character: 'tyrion-lannister',
    type: { en: 'Queen’s brother', it: 'Fratello della regina' },
    summary: {
      en: 'He rides north with Jon. At Castle Black he is one of the few who show Jon any sympathy.',
      it: 'Viaggia verso nord con Jon. A Castello Nero è uno dei pochi a mostrargli comprensione.',
    },
  },
  jonNoye: {
    character: 'donal-noye',
    type: { en: 'Armorer', it: 'Armaiolo' },
    summary: {
      en: 'The one-armed smith of Castle Black. He breaks up a fight in the armory and tells Jon that the others never had his training.',
      it: 'Il fabbro monco di Castello Nero. Interrompe una rissa nell’armeria e spiega a Jon che gli altri non hanno mai avuto il suo addestramento.',
    },
  },
  jonSamwell: {
    character: 'samwell-tarly',
    type: { en: 'Recruit he protects', it: 'Recluta protetta da lui' },
    summary: {
      en: 'A fat, clumsy recruit who calls himself a coward. When Ser Alliser sets the others on him, Jon stands in their way.',
      it: 'Un ragazzo grasso e impacciato, arrivato tra le reclute, che si definisce un codardo. Quando ser Alliser gli scatena contro gli altri, Jon si mette in mezzo.',
    },
  },
  jonGhost: {
    character: 'ghost-direwolf',
    type: { en: 'Direwolf', it: 'Meta-lupo' },
    summary: {
      en: 'The white pup Jon found apart from the others and kept. Jon uses him to frighten Rast into leaving Sam alone.',
      it: 'Il cucciolo bianco che Jon ha trovato in disparte e ha tenuto per sé. Jon se ne serve per spaventare Rast e convincerlo a lasciare in pace Sam.',
    },
  },
  jonJeorSteward: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The head of the Night’s Watch. When the recruits are given their duties, Jeor makes Jon his own steward instead of a ranger.',
      it: 'Il capo dei Guardiani della notte. Quando alle reclute vengono assegnati i compiti, Jeor fa di Jon il proprio attendente invece di un ranger.',
    },
  },
  jonSamwellSworn: {
    character: 'samwell-tarly',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'The recruit Jon protected. The two swear their vows together at a heart tree beyond the Wall.',
      it: 'La recluta che Jon ha protetto. I due pronunciano insieme il giuramento davanti a un albero del cuore oltre la Barriera.',
    },
  },
  jonBenjenMissing: {
    character: 'benjen-stark',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His father’s brother, a ranger. He left Castle Black on a ranging and has not come back.',
      it: 'Il fratello di suo padre, ranger dei Guardiani. È partito da Castello Nero per una perlustrazione e non è più tornato.',
    },
  },
  jonEddardArrested: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'The Lord of Winterfell, whose bastard son Jon is. Word reaches the Wall that he has been arrested for treason.',
      it: 'Il lord di Grande Inverno, di cui Jon è il figlio bastardo. Alla Barriera arriva la notizia che è stato arrestato per tradimento.',
    },
  },
  jonJeorSaved: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The head of the Night’s Watch, who made Jon his steward. Jon saves him from a dead ranger who rises in his rooms.',
      it: 'Il capo dei Guardiani della notte, che ha fatto di Jon il suo attendente. Jon lo salva da un ranger morto che si rialza nelle sue stanze.',
    },
  },
  jonAlliserKnife: {
    character: 'alliser-thorne',
    type: { en: 'Master-at-arms', it: 'Maestro d’armi' },
    summary: {
      en: 'The knight who trains the recruits. He calls Jon a traitor’s bastard, and Jon goes for him with a knife.',
      it: 'Il cavaliere che addestra le reclute. Chiama Jon il bastardo di un traditore, e Jon gli si scaglia contro con un coltello.',
    },
  },
  jonOthor: {
    character: 'othor',
    type: { en: 'Dead ranger', it: 'Ranger morto' },
    summary: {
      en: 'A ranger of his uncle’s party, found dead beyond the Wall. His corpse rises and attacks the Lord Commander, and Jon destroys it with fire.',
      it: 'Un ranger del gruppo di suo zio, trovato morto oltre la Barriera. Il suo cadavere si rialza e attacca il lord comandante, e Jon lo distrugge con il fuoco.',
    },
  },
  jonEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'The Lord of Winterfell, whose bastard son Jon is. Arrested for treason, he was beheaded in King’s Landing.',
      it: 'Il lord di Grande Inverno, di cui Jon è il figlio bastardo. Arrestato per tradimento, è stato decapitato ad Approdo del Re.',
    },
  },
  jonJeorLongclaw: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The head of the Night’s Watch. To thank Jon for saving his life, he gives him Longclaw, a Valyrian steel sword.',
      it: 'Il capo dei Guardiani della notte. Per ringraziare Jon di avergli salvato la vita, gli regala Lungo Artiglio, una spada di acciaio di Valyria.',
    },
  },
  jonAemon: {
    character: 'aemon',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The blind old maester of Castle Black. A Targaryen by birth, he tells Jon how he chose the Watch over his family.',
      it: 'Il vecchio maestro cieco di Castello Nero. Rivela a Jon di essere un Targaryen e di aver scelto i Guardiani invece della propria famiglia.',
    },
  },
  jonSamwellRobb: {
    character: 'samwell-tarly',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'The recruit Jon protected, sworn with him. He brings Jon word that Robb has marched south to war.',
      it: 'La recluta che Jon ha protetto, entrata con lui nei Guardiani. Gli porta la notizia che Robb è partito per la guerra verso sud.',
    },
  },
  jonRobbWar: {
    character: 'robb-stark',
    type: { en: 'Half-brother', it: 'Fratellastro' },
    summary: {
      en: 'Eddard’s heir, his half-brother. He has called the banners of the North and marched south against the Lannisters.',
      it: 'L’erede di Eddard, suo fratellastro. Ha chiamato a raccolta i vessilli del Nord e marcia verso sud contro i Lannister.',
    },
  },
  jonEddardDesert: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'The Lord of Winterfell, beheaded in King’s Landing. When the news reaches the Wall, Jon tries to leave and join Robb.',
      it: 'Il lord di Grande Inverno, decapitato ad Approdo del Re. Quando la notizia arriva alla Barriera, Jon tenta di partire per unirsi a Robb.',
    },
  },
  jonJeorRanging: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The head of the Night’s Watch. He lets Jon’s flight pass, and means to lead the Watch beyond the Wall in force.',
      it: 'Il capo dei Guardiani della notte. Chiude un occhio sulla fuga di Jon e intende guidare i Guardiani in forze oltre la Barriera.',
    },
  },
  jonSamwellStop: {
    character: 'samwell-tarly',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'The recruit Jon protected, sworn with him. He tries to stop Jon from deserting.',
      it: 'La recluta che Jon ha protetto, entrata con lui nei Guardiani. Cerca di impedirgli di disertare.',
    },
  },
  jonGrenn: {
    character: 'grenn',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'A recruit Jon beat in the yard and then taught. He rides after Jon and helps bring him back.',
      it: 'Una recluta che Jon ha battuto nel cortile e poi ha addestrato. Gli corre dietro e lo convince a tornare insieme agli altri.',
    },
  },
  jonPyp: {
    character: 'pypar',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'A recruit Jon trained with. He rides after Jon and helps bring him back.',
      it: 'Una recluta con cui Jon si è addestrato. Gli corre dietro e lo convince a tornare insieme agli altri.',
    },
  },

  // Jeor Mormont
  jeorJonLetter: {
    character: 'jon-snow',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'Eddard Stark’s bastard son, training at Castle Black. Jeor gives him word from Winterfell that his brother Bran has woken.',
      it: 'Il figlio bastardo di Eddard Stark, recluta a Castello Nero. Jeor gli porta la notizia da Grande Inverno che suo fratello Bran si è svegliato.',
    },
  },
  jeorTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The queen’s brother, visiting Castle Black. Jeor asks him to tell the court that the Watch needs men.',
      it: 'Il fratello della regina, in visita a Castello Nero. Jeor gli chiede di far sapere a corte che i Guardiani hanno bisogno di uomini.',
    },
  },
  jeorAemon: {
    character: 'aemon',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The blind old maester of Castle Black, at Jeor’s side.',
      it: 'Il vecchio maestro cieco di Castello Nero, al fianco di Jeor.',
    },
  },
  jeorAlliser: {
    character: 'alliser-thorne',
    type: { en: 'Master-at-arms', it: 'Maestro d’armi' },
    summary: {
      en: 'The knight who trains the Watch’s recruits.',
      it: 'Il cavaliere che addestra le reclute dei Guardiani.',
    },
  },
  jeorJonSteward: {
    character: 'jon-snow',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'Eddard Stark’s bastard son, a new brother of the Watch. Jeor makes him his own steward.',
      it: 'Il figlio bastardo di Eddard Stark, appena entrato nei Guardiani. Jeor ne fa il proprio attendente.',
    },
  },
  jeorJonSaved: {
    character: 'jon-snow',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'His steward, Eddard Stark’s bastard son. Jon saves him from a dead ranger who attacks him in his rooms.',
      it: 'Il suo attendente, figlio bastardo di Eddard Stark. Jon lo salva da un ranger morto che lo aggredisce nelle sue stanze.',
    },
  },
  jeorOthor: {
    character: 'othor',
    type: { en: 'Dead ranger', it: 'Ranger morto' },
    summary: {
      en: 'A ranger of Benjen Stark’s party, brought back dead from beyond the Wall. His corpse rises and attacks Jeor.',
      it: 'Un ranger del gruppo di Benjen Stark, riportato morto da oltre la Barriera. Il suo cadavere si rialza e aggredisce Jeor.',
    },
  },
  jeorJonLongclaw: {
    character: 'jon-snow',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'His steward, who saved his life. Jeor gives him Longclaw, a Valyrian steel sword.',
      it: 'Il suo attendente, che gli ha salvato la vita. Jeor gli regala Lungo Artiglio, una spada di acciaio di Valyria.',
    },
  },
  jeorJorah: {
    character: 'jorah-mormont',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, who shamed their house and fled into exile. Longclaw was meant for him.',
      it: 'Suo figlio, che ha disonorato la casata ed è fuggito in esilio. Lungo Artiglio era destinata a lui.',
    },
  },
  jeorAlliserSent: {
    character: 'alliser-thorne',
    type: { en: 'Master-at-arms', it: 'Maestro d’armi' },
    summary: {
      en: 'The knight who trained the recruits. Jeor sends him to King’s Landing with the dead man’s hand, to ask the king for help.',
      it: 'Il cavaliere che addestrava le reclute. Jeor lo manda ad Approdo del Re con la mano del morto, per chiedere aiuto al re.',
    },
  },
  jeorOthorDead: {
    character: 'othor',
    type: { en: 'Dead ranger', it: 'Ranger morto' },
    summary: {
      en: 'A ranger of Benjen Stark’s party, brought back dead from beyond the Wall. His corpse rose and attacked Jeor, and Jon burned it.',
      it: 'Un ranger del gruppo di Benjen Stark, riportato morto da oltre la Barriera. Il suo cadavere si è rialzato e ha aggredito Jeor, e Jon lo ha bruciato.',
    },
  },
  jeorJonRanging: {
    character: 'jon-snow',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'His steward, who tried to desert. Jeor lets it pass, and means to lead the Watch beyond the Wall in force.',
      it: 'Il suo attendente, che ha tentato di disertare. Jeor chiude un occhio e intende guidare i Guardiani in forze oltre la Barriera.',
    },
  },

  // Aemon
  aemJeor: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The head of the Night’s Watch. Aemon is his maester.',
      it: 'Il capo dei Guardiani della notte. Aemon è il suo maestro.',
    },
  },
  aemTyrionEpisode: {
    character: 'tyrion-lannister',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The queen’s brother, visiting Castle Black. Aemon warns him that the coming winter will be worse than any in memory.',
      it: 'Il fratello della regina, in visita a Castello Nero. Aemon lo avverte che l’inverno in arrivo sarà il peggiore a memoria d’uomo.',
    },
  },
  aemTyrionChapter: {
    character: 'tyrion-lannister',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The queen’s brother, a guest at the Lord Commander’s table. At supper Aemon calls him a giant among the men of the Watch.',
      it: 'Il fratello della regina, ospite alla tavola del lord comandante. A cena Aemon lo definisce un gigante tra gli uomini dei Guardiani.',
    },
  },
  aemJonSam: {
    character: 'jon-snow',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'Eddard Stark’s bastard son. He comes to Aemon at night and asks him to take Samwell Tarly as a steward.',
      it: 'Il figlio bastardo di Eddard Stark. Va da Aemon di notte e gli chiede di prendere Samwell Tarly come attendente.',
    },
  },
  aemChett: {
    character: 'chett',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'One of his stewards. He tries to send Jon away from Aemon’s door at night.',
      it: 'Uno dei suoi attendenti. Cerca di mandare via Jon dalla porta di Aemon, di notte.',
    },
  },
  aemSamwell: {
    character: 'samwell-tarly',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'A new brother of the Watch, who becomes Aemon’s steward.',
      it: 'Un nuovo confratello dei Guardiani, che diventa l’attendente di Aemon.',
    },
  },
  aemJon: {
    character: 'jon-snow',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'Eddard Stark’s bastard son, made steward to the Lord Commander.',
      it: 'Il figlio bastardo di Eddard Stark, nominato attendente del lord comandante.',
    },
  },
  aemJonTold: {
    character: 'jon-snow',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'The Lord Commander’s steward, torn between his vows and his brother’s war. Aemon, a Targaryen by birth, tells him how he chose the Watch over his family.',
      it: 'L’attendente del lord comandante, diviso tra il giuramento e la guerra di suo fratello. Aemon gli rivela di essere un Targaryen e di aver scelto i Guardiani invece della propria famiglia.',
    },
  },

  // Samwell Tarly
  samJon: {
    character: 'jon-snow',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'Eddard Stark’s bastard son, the best fighter among the recruits. When Ser Alliser sets the others on Sam, Jon stands in their way.',
      it: 'Il figlio bastardo di Eddard Stark, il miglior combattente tra le reclute. Quando ser Alliser scatena gli altri contro Sam, Jon si mette in mezzo.',
    },
  },
  samAlliser: {
    character: 'alliser-thorne',
    type: { en: 'Master-at-arms', it: 'Maestro d’armi' },
    summary: {
      en: 'The knight who trains the recruits. He humiliates Sam in the yard and sets the others on him.',
      it: 'Il cavaliere che addestra le reclute. Umilia Sam nel cortile e gli scatena contro gli altri.',
    },
  },
  samRast: {
    character: 'rast',
    type: { en: 'Bully', it: 'Prepotente' },
    summary: {
      en: 'A recruit who means to keep hurting Sam, whatever Jon says. Jon and his friends frighten him off with Ghost.',
      it: 'Un ragazzo tra le reclute, deciso a continuare a picchiare Sam qualunque cosa dica Jon. Jon e i suoi amici lo spaventano con Spettro.',
    },
  },
  samJonSworn: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Eddard Stark’s bastard son, who stood up for Sam. They swear their vows together at a heart tree beyond the Wall.',
      it: 'Il figlio bastardo di Eddard Stark, che ha preso le difese di Sam. Pronunciano insieme il giuramento davanti a un albero del cuore oltre la Barriera.',
    },
  },
  samAemon: {
    character: 'aemon',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The blind old maester of Castle Black. Sam becomes his steward.',
      it: 'Il vecchio maestro cieco di Castello Nero. Sam diventa il suo attendente.',
    },
  },
  samJonDesert: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Eddard Stark’s bastard son, sworn with Sam. When Jon tries to desert and join Robb, Sam tries to stop him.',
      it: 'Il figlio bastardo di Eddard Stark, entrato con Sam nei Guardiani. Quando Jon tenta di disertare per unirsi a Robb, Sam cerca di fermarlo.',
    },
  },
  samGrenn: {
    character: 'grenn',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A friend of Jon’s. He rides after Jon and helps bring him back.',
      it: 'Un amico di Jon. Gli corre dietro e lo convince a tornare insieme agli altri.',
    },
  },
  samPyp: {
    character: 'pypar',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A friend of Jon’s. He rides after Jon and helps bring him back.',
      it: 'Un amico di Jon. Gli corre dietro e lo convince a tornare insieme agli altri.',
    },
  },

  // Alliser Thorne
  allJon: {
    character: 'jon-snow',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'Eddard Stark’s bastard son, the best fighter among the recruits. Alliser mocks him as “Lord Snow”.',
      it: 'Il figlio bastardo di Eddard Stark, il miglior combattente tra le reclute. Alliser lo deride chiamandolo “Lord Snow”.',
    },
  },
  allJeor: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The head of the Night’s Watch. Alliser trains the recruits under his command.',
      it: 'Il capo dei Guardiani della notte. Alliser addestra le reclute ai suoi ordini.',
    },
  },
  allTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The queen’s brother, a guest at the Lord Commander’s table. He mocks Alliser until the officers laugh at him, and Alliser walks out.',
      it: 'Il fratello della regina, ospite alla tavola del lord comandante. Si prende gioco di Alliser finché gli ufficiali ridono di lui, e Alliser se ne va.',
    },
  },
  allSamwell: {
    character: 'samwell-tarly',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'A fat new recruit who cannot fight. Alliser humiliates him and sets the others on him.',
      it: 'Un ragazzo grasso appena arrivato tra le reclute, che non sa combattere. Alliser lo umilia e gli scatena contro gli altri.',
    },
  },
  allJonKnife: {
    character: 'jon-snow',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'Eddard Stark’s bastard son, whom Alliser mocks as “Lord Snow”. When Alliser calls him a traitor’s bastard, Jon goes for him with a knife.',
      it: 'Il figlio bastardo di Eddard Stark, che Alliser deride chiamandolo “Lord Snow”. Quando Alliser lo chiama bastardo di un traditore, Jon gli si scaglia contro con un coltello.',
    },
  },
  allJeorSent: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The head of the Night’s Watch. He sends Alliser to King’s Landing with the dead man’s hand, to ask the king for help.',
      it: 'Il capo dei Guardiani della notte. Manda Alliser ad Approdo del Re con la mano del morto, per chiedere aiuto al re.',
    },
  },

  // Yoren
  yorBenjenEpisode: {
    character: 'benjen-stark',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A ranger of the Watch, who travelled with him to the Wall. Benjen says goodbye to him before leaving on a ranging.',
      it: 'Un ranger dei Guardiani, con cui ha viaggiato fino alla Barriera. Benjen lo saluta prima di partire in perlustrazione.',
    },
  },
  yorTyrionEpisode: {
    character: 'tyrion-lannister',
    type: { en: 'Travelling companion', it: 'Compagno di viaggio' },
    summary: {
      en: 'The queen’s brother. Yoren leaves the Wall with him on the road south.',
      it: 'Il fratello della regina. Yoren lascia la Barriera con lui, diretto a sud.',
    },
  },
  yorBenjenChapter: {
    character: 'benjen-stark',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A ranger of the Watch. Yoren joins his party on the road to the Wall.',
      it: 'Un ranger dei Guardiani. Yoren si unisce al suo gruppo sulla strada per la Barriera.',
    },
  },
  yorJon: {
    character: 'jon-snow',
    type: { en: 'Future recruit', it: 'Futura recluta' },
    summary: {
      en: 'Eddard Stark’s bastard son, riding north to join the Watch.',
      it: 'Il figlio bastardo di Eddard Stark, diretto a nord per unirsi ai Guardiani.',
    },
  },
  yorTyrionChapter: {
    character: 'tyrion-lannister',
    type: { en: 'Travelling companion', it: 'Compagno di viaggio' },
    summary: {
      en: 'The queen’s brother, riding north to see the Wall. Yoren travels with his party.',
      it: 'Il fratello della regina, diretto a nord per vedere la Barriera. Yoren viaggia con il suo gruppo.',
    },
  },
  yorArya: {
    character: 'arya-stark',
    type: { en: 'Girl he saves', it: 'Ragazza salvata da lui' },
    summary: {
      en: 'Eddard Stark’s younger daughter. When her father is executed, Yoren grabs her and takes her away from the crowd.',
      it: 'La figlia minore di Eddard Stark. Quando il padre viene giustiziato, Yoren la afferra e la porta via dalla folla.',
    },
  },
  yorEddard: {
    character: 'eddard-stark',
    type: { en: 'Lord of Winterfell', it: 'Lord di Grande Inverno' },
    summary: {
      en: 'Yoren once rode to him with word that his wife had seized Tyrion. He was beheaded before a crowd in King’s Landing.',
      it: 'Yoren gli aveva portato la notizia che sua moglie aveva catturato Tyrion. È stato decapitato davanti alla folla ad Approdo del Re.',
    },
  },
  yorTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Travelling companion', it: 'Compagno di viaggio' },
    summary: {
      en: 'The queen’s brother, with whom he rode south from the Wall. Yoren was there when Catelyn Stark seized him at an inn.',
      it: 'Il fratello della regina, con cui è sceso a sud dalla Barriera. Yoren era presente quando Catelyn Stark lo ha catturato in una locanda.',
    },
  },
  yorAryaArry: {
    character: 'arya-stark',
    type: { en: 'Girl he saves', it: 'Ragazza salvata da lui' },
    summary: {
      en: 'Eddard Stark’s younger daughter. Yoren passes her off as a boy called Arry and takes her north with his recruits.',
      it: 'La figlia minore di Eddard Stark. Yoren la fa passare per un ragazzo di nome Arry e la porta a nord con le sue reclute.',
    },
  },
  yorGendry: {
    character: 'gendry',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'A young smith who joins Yoren’s recruits for the Wall. He takes Arya’s side against the other boys.',
      it: 'Un giovane fabbro che si unisce alle reclute di Yoren dirette alla Barriera. Prende le parti di Arya contro gli altri ragazzi.',
    },
  },

  // Will, Gared and Waymar Royce. The show's three, and the book's Will and
  // Waymar, die in their opening scene; the book's Gared is beheaded in
  // Bran I (chapter 2), where his own `source: 'chapter'` entry opens. Their
  // cards tell it in the past tense.
  willWaymar: {
    character: 'waymar-royce',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The young knight in command of the patrol. He would not turn back, and he died in the forest.',
      it: 'Il giovane cavaliere al comando della pattuglia. Non ha voluto tornare indietro ed è morto nella foresta.',
    },
  },
  willGared: {
    character: 'gared',
    type: { en: 'Fellow ranger', it: 'Compagno di pattuglia' },
    summary: {
      en: 'The oldest ranger of the patrol. He wanted to turn back to the Wall.',
      it: 'Il ranger più anziano della pattuglia. Voleva tornare alla Barriera.',
    },
  },
  willEddard: {
    character: 'eddard-stark',
    type: { en: 'His executioner', it: 'Il suo giustiziere' },
    summary: {
      en: 'The Lord of Winterfell. Will fled south of the Wall, and Eddard beheaded him as a deserter.',
      it: 'Il lord di Grande Inverno. Will è fuggito a sud della Barriera, ed Eddard lo ha decapitato come disertore.',
    },
  },
  garWaymar: {
    character: 'waymar-royce',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The young knight in command of the patrol. He would not listen when Gared advised turning back.',
      it: 'Il giovane cavaliere al comando della pattuglia. Non ha ascoltato Gared, che consigliava di tornare indietro.',
    },
  },
  garWill: {
    character: 'will',
    type: { en: 'Fellow ranger', it: 'Compagno di pattuglia' },
    summary: {
      en: 'The ranger who scouted ahead and found the dead wildlings.',
      it: 'Il ranger che è andato in avanscoperta e ha trovato i bruti morti.',
    },
  },
  garEddard: {
    character: 'eddard-stark',
    type: { en: 'His executioner', it: 'Il suo giustiziere' },
    summary: {
      en: 'The Lord of Winterfell. Gared fled south, and Eddard beheaded him as a deserter.',
      it: 'Il lord di Grande Inverno. Gared è fuggito a sud, ed Eddard lo ha decapitato come disertore.',
    },
  },
  wayWill: {
    character: 'will',
    type: { en: 'Scout', it: 'Esploratore' },
    summary: {
      en: 'The patrol’s scout, who led them to the place where he had seen the dead wildlings.',
      it: 'L’esploratore della pattuglia, che li ha guidati fino al punto in cui aveva visto i bruti morti.',
    },
  },
  wayGared: {
    character: 'gared',
    type: { en: 'Ranger', it: 'Ranger' },
    summary: {
      en: 'The oldest ranger of the patrol. He advised turning back, and Waymar overruled him.',
      it: 'Il ranger più anziano della pattuglia. Consigliava di tornare indietro, ma Waymar non lo ha ascoltato.',
    },
  },

  // Grenn
  greJon: {
    character: 'jon-snow',
    type: { en: 'Fellow recruit', it: 'Compagno di addestramento' },
    summary: {
      en: 'Eddard Stark’s bastard son, the best fighter among the recruits. He beats Grenn in the yard, and Grenn and others go after him. Afterwards Jon offers to teach him.',
      it: 'Il figlio bastardo di Eddard Stark, il miglior combattente tra le reclute. Batte Grenn nel cortile, e Grenn e altri se la prendono con lui. Poi Jon si offre di insegnargli.',
    },
  },
  greAlliser: {
    character: 'alliser-thorne',
    type: { en: 'Master-at-arms', it: 'Maestro d’armi' },
    summary: {
      en: 'The knight who trains the recruits, with contempt for all of them.',
      it: 'Il cavaliere che addestra le reclute, disprezzandole tutte.',
    },
  },
  greJonFriend: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Eddard Stark’s bastard son, who has been teaching the recruits. He asks Grenn and the others to stop hurting Sam, and Grenn goes along.',
      it: 'Il figlio bastardo di Eddard Stark, che insegna alle altre reclute. Chiede a Grenn e agli altri di smettere di picchiare Sam, e Grenn accetta.',
    },
  },
  greSamwell: {
    character: 'samwell-tarly',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'A fat new recruit who cannot fight. Grenn agrees to go easy on him.',
      it: 'Un ragazzo grasso appena arrivato tra le reclute, che non sa combattere. Grenn accetta di andarci piano con lui.',
    },
  },
  greJonDesert: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Eddard Stark’s bastard son, now a brother of the Watch. When Jon deserts to join Robb, Grenn rides after him and helps bring him back.',
      it: 'Il figlio bastardo di Eddard Stark, ora suo confratello. Quando Jon diserta per unirsi a Robb, Grenn gli corre dietro e lo convince a tornare insieme agli altri.',
    },
  },
  grePyp: {
    character: 'pypar',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A friend of Jon’s. He rides after Jon with Grenn.',
      it: 'Un amico di Jon. Lo insegue insieme a Grenn.',
    },
  },
  greSamwell10: {
    character: 'samwell-tarly',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A friend of Jon’s. He tries to stop Jon from leaving.',
      it: 'Un amico di Jon. Cerca di impedirgli di partire.',
    },
  },

  // Pypar
  pypJon: {
    character: 'jon-snow',
    type: { en: 'Fellow recruit', it: 'Compagno di addestramento' },
    summary: {
      en: 'Eddard Stark’s bastard son, the best fighter among the recruits Pyp trains with.',
      it: 'Il figlio bastardo di Eddard Stark, il miglior combattente tra le reclute con cui Pyp si addestra.',
    },
  },
  pypAlliser: {
    character: 'alliser-thorne',
    type: { en: 'Master-at-arms', it: 'Maestro d’armi' },
    summary: {
      en: 'The knight who trains the recruits, with contempt for all of them.',
      it: 'Il cavaliere che addestra le reclute, disprezzandole tutte.',
    },
  },
  pypJonFriend: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Eddard Stark’s bastard son, who has been teaching the recruits. He asks them to stop hurting Sam, and Pyp sides with him.',
      it: 'Il figlio bastardo di Eddard Stark, che insegna alle altre reclute. Chiede loro di smettere di picchiare Sam, e Pyp si schiera con lui.',
    },
  },
  pypSamwell: {
    character: 'samwell-tarly',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'A fat new recruit who cannot fight. Pyp agrees to go easy on him.',
      it: 'Un ragazzo grasso appena arrivato tra le reclute, che non sa combattere. Pyp accetta di andarci piano con lui.',
    },
  },
  pypRast: {
    character: 'rast',
    type: { en: 'Bully', it: 'Prepotente' },
    summary: {
      en: 'A recruit who means to keep hurting Sam. Pyp helps Jon frighten him off with Ghost.',
      it: 'Un ragazzo tra le reclute, deciso a continuare a picchiare Sam. Pyp aiuta Jon a spaventarlo con Spettro.',
    },
  },
  pypJonDesert: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Eddard Stark’s bastard son, now a brother of the Watch. When Jon deserts to join Robb, Pyp rides after him and helps bring him back.',
      it: 'Il figlio bastardo di Eddard Stark, ora suo confratello. Quando Jon diserta per unirsi a Robb, Pyp gli corre dietro e lo convince a tornare insieme agli altri.',
    },
  },
  pypGrenn: {
    character: 'grenn',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A friend of Jon’s. He rides after Jon with Pyp.',
      it: 'Un amico di Jon. Lo insegue insieme a Pyp.',
    },
  },
  pypSamwell10: {
    character: 'samwell-tarly',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A friend of Jon’s. He tries to stop Jon from leaving.',
      it: 'Un amico di Jon. Cerca di impedirgli di partire.',
    },
  },

  // Rast
  rastJonEpisode: {
    character: 'jon-snow',
    type: { en: 'Fellow recruit', it: 'Compagno di addestramento' },
    summary: {
      en: 'Eddard Stark’s bastard son, the best fighter among the recruits. He beats Rast in the yard, and Rast and two others threaten him in the armory.',
      it: 'Il figlio bastardo di Eddard Stark, il miglior combattente tra le reclute. Batte Rast nel cortile, e Rast e altri due lo minacciano nell’armeria.',
    },
  },
  rastAlliserTrain: {
    character: 'alliser-thorne',
    type: { en: 'Master-at-arms', it: 'Maestro d’armi' },
    summary: {
      en: 'The knight who trains the recruits.',
      it: 'Il cavaliere che addestra le reclute.',
    },
  },
  rastSamwell: {
    character: 'samwell-tarly',
    type: { en: 'Recruit he bullies', it: 'Recluta presa di mira da lui' },
    summary: {
      en: 'A fat new recruit who cannot fight. Rast means to keep hurting him.',
      it: 'Un ragazzo grasso appena arrivato tra le reclute, che non sa combattere. Rast vuole continuare a picchiarlo.',
    },
  },
  rastJon: {
    character: 'jon-snow',
    type: { en: 'Sam’s protector', it: 'Protettore di Sam' },
    summary: {
      en: 'Eddard Stark’s bastard son, who protects Sam. He comes to Rast at night with his direwolf and warns him off.',
      it: 'Il figlio bastardo di Eddard Stark, che protegge Sam. Va da Rast di notte con il suo meta-lupo e lo diffida.',
    },
  },
  rastGhost: {
    character: 'ghost-direwolf',
    type: { en: 'Direwolf', it: 'Meta-lupo' },
    summary: {
      en: 'Jon’s white direwolf. Jon uses him to frighten Rast.',
      it: 'Il meta-lupo bianco di Jon. Jon se ne serve per spaventare Rast.',
    },
  },
  rastAlliser: {
    character: 'alliser-thorne',
    type: { en: 'Master-at-arms', it: 'Maestro d’armi' },
    summary: {
      en: 'The knight who trains the recruits. Rast follows his orders against Sam.',
      it: 'Il cavaliere che addestra le reclute. Rast esegue i suoi ordini contro Sam.',
    },
  },

  // Dareon and Halder
  darJon: {
    character: 'jon-snow',
    type: { en: 'Fellow recruit', it: 'Compagno di addestramento' },
    summary: {
      en: 'Eddard Stark’s bastard son, a recruit in Dareon’s group at Castle Black.',
      it: 'Il figlio bastardo di Eddard Stark, recluta nello stesso gruppo di Dareon a Castello Nero.',
    },
  },
  darJeor: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The head of the Night’s Watch. He takes Dareon’s group of recruits into the Watch.',
      it: 'Il capo dei Guardiani della notte. Accoglie nei Guardiani il gruppo di reclute di Dareon.',
    },
  },
  halJon: {
    character: 'jon-snow',
    type: { en: 'Fellow recruit', it: 'Compagno di addestramento' },
    summary: {
      en: 'Eddard Stark’s bastard son, a recruit in Halder’s group at Castle Black.',
      it: 'Il figlio bastardo di Eddard Stark, recluta nello stesso gruppo di Halder a Castello Nero.',
    },
  },
  halJonSam: {
    character: 'jon-snow',
    type: { en: 'Fellow recruit', it: 'Compagno di addestramento' },
    summary: {
      en: 'Eddard Stark’s bastard son. When Ser Alliser sends Halder against Sam, Jon knocks him down, then talks him into leaving Sam alone.',
      it: 'Il figlio bastardo di Eddard Stark. Quando ser Alliser manda Halder contro Sam, Jon lo mette al tappeto, poi lo convince a lasciare in pace Sam.',
    },
  },
  halSamwell: {
    character: 'samwell-tarly',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'A fat new recruit who cannot fight. Ser Alliser sends Halder to beat him.',
      it: 'Un ragazzo grasso appena arrivato tra le reclute, che non sa combattere. Ser Alliser manda Halder a picchiarlo.',
    },
  },
  halAlliser: {
    character: 'alliser-thorne',
    type: { en: 'Master-at-arms', it: 'Maestro d’armi' },
    summary: {
      en: 'The knight who trains the recruits. He orders Halder to keep hitting Sam until he gets up.',
      it: 'Il cavaliere che addestra le reclute. Ordina a Halder di continuare a colpire Sam finché non si rialza.',
    },
  },
  halJeor: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The head of the Night’s Watch. He takes Halder’s group into the Watch and sends Halder to the builders.',
      it: 'Il capo dei Guardiani della notte. Accoglie nei Guardiani il gruppo di Halder e assegna Halder ai costruttori.',
    },
  },
  halJonDesert: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Eddard Stark’s bastard son, now a brother of the Watch. When Jon deserts, Halder rides after him with Jon’s other friends and helps bring him back.',
      it: 'Il figlio bastardo di Eddard Stark, ora suo confratello. Quando Jon diserta, Halder gli corre dietro con gli altri amici di Jon e lo convince a tornare.',
    },
  },
  halSamwell71: {
    character: 'samwell-tarly',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A friend of Jon’s. When Jon slips away, Sam tells the others.',
      it: 'Un amico di Jon. Quando Jon se ne va di nascosto, Sam avverte gli altri.',
    },
  },

  // Todder (books only within the stage)
  todJon: {
    character: 'jon-snow',
    type: { en: 'Fellow recruit', it: 'Compagno di addestramento' },
    summary: {
      en: 'Eddard Stark’s bastard son, the best fighter among the recruits. Todder and others go after him in the armory.',
      it: 'Il figlio bastardo di Eddard Stark, il miglior combattente tra le reclute. Todder e altri se la prendono con lui nell’armeria.',
    },
  },
  todNoye: {
    character: 'donal-noye',
    type: { en: 'Armorer', it: 'Armaiolo' },
    summary: {
      en: 'The one-armed smith of Castle Black. He breaks up the fight in the armory before anyone is hurt.',
      it: 'Il fabbro monco di Castello Nero. Interrompe la rissa nell’armeria prima che qualcuno si faccia male.',
    },
  },
  todJonDesert: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Eddard Stark’s bastard son, now a brother of the Watch. When Jon deserts, Todder rides after him with Jon’s other friends and helps bring him back.',
      it: 'Il figlio bastardo di Eddard Stark, ora suo confratello. Quando Jon diserta, Todder gli corre dietro con gli altri amici di Jon e lo convince a tornare.',
    },
  },
  todSamwell: {
    character: 'samwell-tarly',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A friend of Jon’s. When Jon slips away, Sam tells the others.',
      it: 'Un amico di Jon. Quando Jon se ne va di nascosto, Sam avverte gli altri.',
    },
  },

  // Othell Yarwyck (show only within the stage)
  othlJon: {
    character: 'jon-snow',
    type: { en: 'New brother', it: 'Nuovo confratello' },
    summary: {
      en: 'Eddard Stark’s bastard son. Othell goes with him beyond the Wall to witness his vow at a heart tree.',
      it: 'Il figlio bastardo di Eddard Stark. Othell lo accompagna oltre la Barriera come testimone del suo giuramento davanti a un albero del cuore.',
    },
  },
  othlSamwell: {
    character: 'samwell-tarly',
    type: { en: 'New brother', it: 'Nuovo confratello' },
    summary: {
      en: 'The new brother who swears his vow beside Jon at the heart tree. Othell is there as a witness.',
      it: 'Il compagno che pronuncia il giuramento accanto a Jon davanti all’albero del cuore. Othell è presente come testimone.',
    },
  },

  // Bowen Marsh (books only within the stage)
  bowTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The queen’s brother, a guest at the Lord Commander’s table. Bowen remarks on how much he drinks for so small a man.',
      it: 'Il fratello della regina, ospite alla tavola del lord comandante. Bowen osserva quanto beve, per essere così piccolo.',
    },
  },
  bowJeor: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The head of the Night’s Watch. Bowen sits at his table among the officers.',
      it: 'Il capo dei Guardiani della notte. Bowen siede alla sua tavola con gli altri ufficiali.',
    },
  },
  bowJon: {
    character: 'jon-snow',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'Eddard Stark’s bastard son. Bowen names him steward to the Lord Commander, and goes with him beyond the Wall to swear his vow.',
      it: 'Il figlio bastardo di Eddard Stark. Bowen lo nomina attendente del lord comandante e lo accompagna oltre la Barriera a pronunciare il giuramento.',
    },
  },
  bowSamwell: {
    character: 'samwell-tarly',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'A new brother of the Watch. Bowen sends him to Maester Aemon’s library and rookery, and goes with him to swear his vow.',
      it: 'Un nuovo confratello dei Guardiani. Bowen lo manda a lavorare nella biblioteca e nella voliera di maestro Aemon, e lo accompagna a pronunciare il giuramento.',
    },
  },
  bowChett: {
    character: 'chett',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'Maester Aemon’s steward until Sam takes his place. Bowen announces that he has been moved to the kennels.',
      it: 'L’attendente di maestro Aemon finché Sam non prende il suo posto. Bowen annuncia che è stato spostato ai canili.',
    },
  },

  // Jaremy Rykker
  jarAlliser: {
    character: 'alliser-thorne',
    type: { en: 'Fellow knight', it: 'Cavaliere come lui' },
    summary: {
      en: 'The knight who trains the recruits. Both fought for King Aerys at King’s Landing, and took the black rather than be executed by Tyrion’s father.',
      it: 'Il cavaliere che addestra le reclute. Entrambi hanno combattuto per re Aerys ad Approdo del Re, e hanno preso il nero per non essere giustiziati dal padre di Tyrion.',
    },
  },
  jarJeor: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The head of the Night’s Watch, under whom Jaremy commands rangers.',
      it: 'Il capo dei Guardiani della notte. Jaremy comanda i ranger ai suoi ordini.',
    },
  },
  jarJeorDead: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The head of the Night’s Watch, under whom Jaremy commanded rangers.',
      it: 'Il capo dei Guardiani della notte. Jaremy comandava i ranger ai suoi ordini.',
    },
  },
  jarJon: {
    character: 'jon-snow',
    type: { en: 'New brother', it: 'Nuovo confratello' },
    summary: {
      en: 'Eddard Stark’s bastard son. Jaremy leads his escort beyond the Wall to swear his vow, and embraces him afterwards.',
      it: 'Il figlio bastardo di Eddard Stark. Jaremy guida la sua scorta oltre la Barriera per il giuramento, e poi lo abbraccia.',
    },
  },
  jarSamwell: {
    character: 'samwell-tarly',
    type: { en: 'New brother', it: 'Nuovo confratello' },
    summary: {
      en: 'The new brother who swears his vow beside Jon. Jaremy leads their escort, and embraces him afterwards.',
      it: 'Il compagno che pronuncia il giuramento accanto a Jon. Jaremy guida la loro scorta, e poi lo abbraccia.',
    },
  },
  jarOthor: {
    character: 'othor',
    type: { en: 'Dead ranger', it: 'Ranger morto' },
    summary: {
      en: 'A ranger of Benjen Stark’s party, found dead beyond the Wall and brought back to Castle Black.',
      it: 'Un ranger del gruppo di Benjen Stark, trovato morto oltre la Barriera e riportato a Castello Nero.',
    },
  },
  jarJafer: {
    character: 'jafer-flowers',
    type: { en: 'Dead ranger', it: 'Ranger morto' },
    summary: {
      en: 'A ranger of Benjen Stark’s party, found dead beside Othor and brought back to Castle Black.',
      it: 'Un ranger del gruppo di Benjen Stark, trovato morto accanto a Othor e riportato a Castello Nero.',
    },
  },
  jarJaferKiller: {
    character: 'jafer-flowers',
    type: { en: 'His killer', it: 'Il suo uccisore' },
    summary: {
      en: 'A ranger of Benjen Stark’s party, brought back dead. His corpse rose at Castle Black and killed Jaremy.',
      it: 'Un ranger del gruppo di Benjen Stark, riportato morto. Il suo cadavere si è rialzato a Castello Nero e ha ucciso Jaremy.',
    },
  },
  jarOthorDead: {
    character: 'othor',
    type: { en: 'Dead ranger', it: 'Ranger morto' },
    summary: {
      en: 'A ranger of Benjen Stark’s party, brought back dead. His corpse rose and attacked the Lord Commander, and was burned.',
      it: 'Un ranger del gruppo di Benjen Stark, riportato morto. Il suo cadavere si è rialzato e ha aggredito il lord comandante, ed è stato bruciato.',
    },
  },

  // Othor and Jafer Flowers
  otrBenjenLost: {
    character: 'benjen-stark',
    type: {
      en: 'Ranger he rode with',
      it: 'Ranger al cui seguito era partito',
    },
    summary: {
      en: 'The ranger at the head of the party Othor rode out with. Benjen has not come back.',
      it: 'Il ranger alla guida del gruppo con cui Othor era partito in perlustrazione. Benjen non è tornato.',
    },
  },
  otrJafer: {
    character: 'jafer-flowers',
    type: { en: 'Fellow ranger', it: 'Compagno di pattuglia' },
    summary: {
      en: 'A ranger of the same party, found dead beside him.',
      it: 'Un ranger dello stesso gruppo, trovato morto accanto a lui.',
    },
  },
  otrJeor: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The head of the Night’s Watch. Othor’s corpse rises and attacks him in his rooms.',
      it: 'Il capo dei Guardiani della notte. Il cadavere di Othor si rialza e lo aggredisce nelle sue stanze.',
    },
  },
  otrJon: {
    character: 'jon-snow',
    type: {
      en: 'Lord Commander’s steward',
      it: 'Attendente del lord comandante',
    },
    summary: {
      en: 'Eddard Stark’s bastard son. He destroys Othor’s corpse with fire.',
      it: 'Il figlio bastardo di Eddard Stark. Distrugge il cadavere di Othor con il fuoco.',
    },
  },
  jafOthor: {
    character: 'othor',
    type: { en: 'Fellow ranger', it: 'Compagno di pattuglia' },
    summary: {
      en: 'A ranger of the same party, found dead beside him.',
      it: 'Un ranger dello stesso gruppo, trovato morto accanto a lui.',
    },
  },
  jafBenjen: {
    character: 'benjen-stark',
    type: {
      en: 'Ranger he rode with',
      it: 'Ranger al cui seguito era partito',
    },
    summary: {
      en: 'The ranger at the head of the party Jafer rode out with. Benjen has not come back.',
      it: 'Il ranger alla guida del gruppo con cui Jafer era partito in perlustrazione. Benjen non è tornato.',
    },
  },
  jafJaremy: {
    character: 'jaremy-rykker',
    type: {
      en: 'Knight killed by his corpse',
      it: 'Cavaliere ucciso dal suo cadavere',
    },
    summary: {
      en: 'The knight of the Watch who named Jafer’s body. Jafer’s corpse rose at Castle Black and killed him.',
      it: 'Il cavaliere dei Guardiani che ha riconosciuto il corpo di Jafer. Il cadavere di Jafer si è rialzato a Castello Nero e lo ha ucciso.',
    },
  },
  jafAlliser: {
    character: 'alliser-thorne',
    type: { en: 'Bearer of his hand', it: 'Latore della sua mano' },
    summary: {
      en: 'The knight sent to King’s Landing with Jafer’s severed hand, to show the king what rose at Castle Black.',
      it: 'Il cavaliere mandato ad Approdo del Re con la mano mozzata di Jafer, per mostrare al re che cosa si è rialzato a Castello Nero.',
    },
  },

  // Donal Noye and Chett (books only)
  noyJon: {
    character: 'jon-snow',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'Eddard Stark’s bastard son, the best fighter among the recruits. Noye stops the others from beating him, then tells him he has had training they never had.',
      it: 'Il figlio bastardo di Eddard Stark, il miglior combattente tra le reclute. Noye impedisce agli altri di picchiarlo, poi gli fa notare che lui ha avuto un addestramento che loro non hanno mai avuto.',
    },
  },
  noyGrenn: {
    character: 'grenn',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'A recruit who, with others, goes after Jon in the armory. Noye breaks up the fight.',
      it: 'Una delle reclute che se la prendono con Jon nell’armeria. Noye interrompe la rissa.',
    },
  },
  cheAemon: {
    character: 'aemon',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The blind old maester of Castle Black. Chett is his steward.',
      it: 'Il vecchio maestro cieco di Castello Nero. Chett è il suo attendente.',
    },
  },
  cheJon: {
    character: 'jon-snow',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'Eddard Stark’s bastard son. He comes to Aemon’s door at night, and Chett tries to send him away.',
      it: 'Il figlio bastardo di Eddard Stark. Si presenta di notte alla porta di Aemon, e Chett cerca di mandarlo via.',
    },
  },
  cheSamwell: {
    character: 'samwell-tarly',
    type: { en: 'His replacement', it: 'Il suo sostituto' },
    summary: {
      en: 'A new brother of the Watch, who takes Chett’s place as Maester Aemon’s steward. Chett is moved to the kennels.',
      it: 'Un nuovo confratello dei Guardiani, che prende il posto di Chett come attendente di maestro Aemon. Chett viene spostato ai canili.',
    },
  },
  cheAemonFormer: {
    character: 'aemon',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The blind old maester of Castle Black. Chett was his steward until Sam took his place.',
      it: 'Il vecchio maestro cieco di Castello Nero. Chett è stato il suo attendente finché Sam non ha preso il suo posto.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * Winterfell and the northern cast (#1345). The same rules as `links`; the
 * show pins follow the Game of Thrones Wiki's `{{Ref|GOTxxx}}` citations, and
 * the chapter pins the chapter that tells each event, the records' own where
 * they cite one.
 */
const north = {
  // Eddard
  nedBranExecution: {
    character: 'bran-stark',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His second son, whom he brings to watch a deserter’s execution so that he learns what a lord’s justice costs.',
      it: 'Il suo secondogenito, che porta ad assistere all’esecuzione di un disertore perché impari cosa costa la giustizia di un lord.',
    },
  },
  nedJon: {
    character: 'jon-snow',
    type: { en: 'Bastard son', it: 'Figlio bastardo' },
    summary: {
      en: 'The son he brought home to Winterfell and raises with his trueborn children.',
      it: 'Il figlio che ha portato a Grande Inverno e che cresce insieme ai figli legittimi.',
    },
  },
  nedRobb: {
    character: 'robb-stark',
    type: { en: 'Eldest son', it: 'Figlio maggiore' },
    summary: {
      en: 'His eldest son and the heir to Winterfell.',
      it: 'Il suo primogenito ed erede di Grande Inverno.',
    },
  },
  nedTheon: {
    character: 'theon-greyjoy',
    type: { en: 'Ward', it: 'Pupillo' },
    summary: {
      en: 'The young Greyjoy who grows up in his household as his ward.',
      it: 'Il giovane Greyjoy che cresce in casa sua come suo pupillo.',
    },
  },
  nedCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His wife and the lady of Winterfell.',
      it: 'Sua moglie e signora di Grande Inverno.',
    },
  },
  nedRobertOffer: {
    character: 'robert-baratheon',
    type: { en: 'Old friend and king', it: 'Vecchio amico e re' },
    summary: {
      en: 'The king, his friend since boyhood. He comes to Winterfell to make Eddard his Hand and to marry his son to Sansa.',
      it: 'Il re, suo amico fin da ragazzo. Arriva a Grande Inverno per nominare Eddard Primo Cavaliere e dare in sposa Sansa a suo figlio.',
    },
  },
  nedRobertHand: {
    character: 'robert-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king he now serves as Hand. Robert gives way to the queen and orders a direwolf killed.',
      it: 'Il re che ora serve come Primo Cavaliere. Robert cede alla regina e ordina di uccidere un metalupo.',
    },
  },
  nedSansaLady: {
    character: 'sansa-stark',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His elder daughter, promised to the prince. When the queen demands her wolf’s death, Eddard kills it with his own hand.',
      it: 'La figlia maggiore, promessa al principe. Quando la regina pretende la morte della sua lupa, Eddard la uccide con le proprie mani.',
    },
  },
  nedArya: {
    character: 'arya-stark',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His younger daughter, who comes south with him. She would rather fight than sew.',
      it: 'La figlia minore, che lo segue al sud. Preferisce combattere che cucire.',
    },
  },
  nedCatelynHome: {
    character: 'catelyn-stark',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His wife, who stays at Winterfell with their children while he goes south.',
      it: 'Sua moglie, che resta a Grande Inverno con i figli mentre lui va al sud.',
    },
  },
  nedBranFall: {
    character: 'bran-stark',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, who fell from a tower before Eddard left. Eddard had to go south without knowing whether he would live.',
      it: 'Suo figlio, caduto da una torre prima della partenza di Eddard. Eddard è dovuto partire senza sapere se sarebbe sopravvissuto.',
    },
  },
  nedRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'Old friend and king', it: 'Vecchio amico e re' },
    summary: {
      en: 'The king he served as Hand. Dying after a hunt, Robert named Eddard to rule until his heir came of age.',
      it: 'Il re che ha servito come Primo Cavaliere. In punto di morte, dopo una caccia, Robert ha affidato a Eddard il regno finché il suo erede non fosse diventato adulto.',
    },
  },
  nedCersei: {
    character: 'cersei-lannister',
    type: { en: 'Enemy', it: 'Nemica' },
    summary: {
      en: 'The queen. Eddard knows her children are not Robert’s, and when he challenges her son’s claim she has him seized.',
      it: 'La regina. Eddard sa che i suoi figli non sono di Robert, e quando contesta il diritto di suo figlio al trono lei lo fa arrestare.',
    },
  },
  nedPetyr: {
    character: 'petyr-baelish',
    type: { en: 'Betrayer', it: 'Traditore' },
    summary: {
      en: 'The master of coin, who promised to win him the City Watch. When Eddard moved against the queen, the Watch turned on his men.',
      it: 'Il maestro del conio, che aveva promesso di procurargli la Guardia cittadina. Quando Eddard si è mosso contro la regina, la Guardia si è rivoltata contro i suoi uomini.',
    },
  },
  nedSansaCourt: {
    character: 'sansa-stark',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His elder daughter, still promised to the queen’s son.',
      it: 'La figlia maggiore, ancora promessa al figlio della regina.',
    },
  },
  nedJoffreyExecution: {
    character: 'joffrey-baratheon',
    type: { en: 'King who had him killed', it: 'Re che lo ha fatto uccidere' },
    summary: {
      en: 'The boy king. Eddard confessed to treason and named him rightful king, and Joffrey had him beheaded all the same.',
      it: 'Il giovane re. Eddard ha confessato il tradimento e lo ha riconosciuto re legittimo, ma Joffrey lo ha fatto decapitare lo stesso.',
    },
  },
  nedSansaExecution: {
    character: 'sansa-stark',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His elder daughter, held by the Lannisters. She watched him die before the Great Sept of Baelor.',
      it: 'La figlia maggiore, in mano ai Lannister. Lo ha visto morire davanti al Grande Tempio di Baelor.',
    },
  },
  nedAryaCrowd: {
    character: 'arya-stark',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His younger daughter, who escaped the castle. She was in the crowd at his execution.',
      it: 'La figlia minore, fuggita dal castello. Era tra la folla alla sua esecuzione.',
    },
  },
  nedCerseiDead: {
    character: 'cersei-lannister',
    type: { en: 'Enemy', it: 'Nemica' },
    summary: {
      en: 'The queen. He told her he knew her children were not Robert’s, and she had him seized after the king’s death.',
      it: 'La regina. Le aveva detto di sapere che i suoi figli non erano di Robert, e lei lo ha fatto arrestare dopo la morte del re.',
    },
  },

  // Catelyn
  catEddard: {
    character: 'eddard-stark',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Her husband, the lord of Winterfell. She brings him word that the Hand of the King is dead.',
      it: 'Suo marito, il lord di Grande Inverno. È lei a portargli la notizia che il Primo Cavaliere è morto.',
    },
  },
  catRobb: {
    character: 'robb-stark',
    type: { en: 'Eldest son', it: 'Figlio maggiore' },
    summary: {
      en: 'Her eldest son and the heir to Winterfell.',
      it: 'Il suo primogenito ed erede di Grande Inverno.',
    },
  },
  catBran: {
    character: 'bran-stark',
    type: { en: 'Son', it: 'Figlio' },
    summary: { en: 'Her second son.', it: 'Il suo secondogenito.' },
  },
  catBranAttack: {
    character: 'bran-stark',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Her son, who lies senseless after a fall. She keeps watch by his bed and fights off the man sent to kill him.',
      it: 'Suo figlio, privo di sensi dopo una caduta. Lei veglia al suo capezzale e respinge l’uomo mandato a ucciderlo.',
    },
  },
  catEddardSouth: {
    character: 'eddard-stark',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Her husband, gone south as Hand of the King. She sets out to warn him that the Lannisters tried to kill their son.',
      it: 'Suo marito, partito per il sud come Primo Cavaliere. Lei si mette in viaggio per avvertirlo che i Lannister hanno cercato di uccidere loro figlio.',
    },
  },
  catRobbCastle: {
    character: 'robb-stark',
    type: { en: 'Eldest son', it: 'Figlio maggiore' },
    summary: {
      en: 'Her eldest son, who runs Winterfell while she is away.',
      it: 'Il primogenito, che manda avanti Grande Inverno mentre lei è lontana.',
    },
  },
  catRodrik: {
    character: 'rodrik-cassel',
    type: { en: 'Escort', it: 'Scorta' },
    summary: {
      en: 'The master-at-arms of Winterfell, who rides south with her so that she need not travel alone.',
      it: 'Il maestro d’armi di Grande Inverno, che la accompagna al sud perché non viaggi da sola.',
    },
  },
  catJon: {
    character: 'jon-snow',
    type: { en: 'Husband’s bastard', it: 'Bastardo del marito' },
    summary: {
      en: 'Her husband’s bastard son. When he comes to say goodbye to Bran before leaving for the Wall, she sends him away coldly.',
      it: 'Il figlio bastardo del marito. Quando viene a salutare Bran prima di partire per la Barriera, lei lo manda via con freddezza.',
    },
  },
  catTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Captive', it: 'Prigioniero' },
    summary: {
      en: 'The queen’s brother. Believing he sent the killer after Bran, she has him seized at an inn on the road.',
      it: 'Il fratello della regina. Convinta che abbia mandato lui il sicario da Bran, lo fa catturare in una locanda lungo la strada.',
    },
  },
  catPetyr: {
    character: 'petyr-baelish',
    type: { en: 'Childhood friend', it: 'Amico d’infanzia' },
    summary: {
      en: 'A friend from her girlhood, now master of coin. He tells her the killer’s dagger was his, until he lost it to Tyrion in a wager.',
      it: 'Un amico di quando era ragazza, ora maestro del conio. Le dice che il pugnale del sicario era suo, finché non l’ha perso con Tyrion in una scommessa.',
    },
  },
  catBranSouth: {
    character: 'bran-stark',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Her son. Someone tried to kill him after his fall, and she left him at Winterfell to find out who.',
      it: 'Suo figlio. Qualcuno ha cercato di ucciderlo dopo la caduta, e lei lo ha lasciato a Grande Inverno per scoprire chi.',
    },
  },
  catEddardHand: {
    character: 'eddard-stark',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Her husband. She met him in secret in the capital to warn him about the Lannisters.',
      it: 'Suo marito. Lo ha incontrato di nascosto nella capitale per metterlo in guardia contro i Lannister.',
    },
  },
  catLysa: {
    character: 'lysa-arryn',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'Her younger sister, the widow of the Hand. Catelyn brings Tyrion to her at the Eyrie, and Lysa takes him into her custody.',
      it: 'Sua sorella minore, vedova del Primo Cavaliere. Catelyn le porta Tyrion al Nido dell’Aquila, e Lysa lo prende in custodia.',
    },
  },
  catWalder: {
    character: 'walder-frey',
    type: { en: 'Ally by bargain', it: 'Alleato per patto' },
    summary: {
      en: 'The lord of the Twins. Catelyn goes to him herself and buys the crossing: Robb is to marry one of his daughters.',
      it: 'Il lord delle Torri Gemelle. Catelyn va da lui di persona e ottiene il passaggio: Robb dovrà sposare una delle sue figlie.',
    },
  },
  catRobbHost: {
    character: 'robb-stark',
    type: { en: 'Eldest son', it: 'Figlio maggiore' },
    summary: {
      en: 'Her eldest son, who has called the banners and marches south. She joins his host.',
      it: 'Il primogenito, che ha chiamato a raccolta i vessilli e marcia verso sud. Lei si unisce al suo esercito.',
    },
  },
  catEddardCaptive: {
    character: 'eddard-stark',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Her husband, a prisoner in the capital since the king’s death.',
      it: 'Suo marito, prigioniero nella capitale dalla morte del re.',
    },
  },
  catLysaRefusal: {
    character: 'lysa-arryn',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'Her younger sister, who will not send the knights of the Vale to help the Starks.',
      it: 'Sua sorella minore, che non vuole mandare i cavalieri della Valle in aiuto agli Stark.',
    },
  },
  catRobbVictory: {
    character: 'robb-stark',
    type: { en: 'Eldest son', it: 'Figlio maggiore' },
    summary: {
      en: 'Her eldest son, who leads the northern host. He has won a battle and taken Jaime Lannister prisoner.',
      it: 'Il primogenito, alla guida dell’esercito del Nord. Ha vinto una battaglia e fatto prigioniero Jaime Lannister.',
    },
  },
  catEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Her husband. He was held in the capital after the king’s death and beheaded on Joffrey’s order.',
      it: 'Suo marito. È stato tenuto prigioniero nella capitale dopo la morte del re e decapitato per ordine di Joffrey.',
    },
  },
  catJaime: {
    character: 'jaime-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The queen’s brother, taken in battle by Robb’s host and held as a captive.',
      it: 'Il fratello della regina, catturato in battaglia dall’esercito di Robb e tenuto prigioniero.',
    },
  },
  catRobbKing: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her eldest son. After his father’s death the northern lords proclaim him King in the North.',
      it: 'Il primogenito. Dopo la morte del padre i lord del Nord lo proclamano Re del Nord.',
    },
  },

  // Robb
  robbEddard: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the lord of Winterfell, whose heir he is.',
      it: 'Suo padre, il lord di Grande Inverno, di cui è l’erede.',
    },
  },
  robbBran: {
    character: 'bran-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His younger brother, who rides with them to the execution.',
      it: 'Il fratello minore, che cavalca con loro fino all’esecuzione.',
    },
  },
  robbJon: {
    character: 'jon-snow',
    type: { en: 'Half-brother', it: 'Fratellastro' },
    summary: {
      en: 'His father’s bastard son, raised beside him at Winterfell.',
      it: 'Il figlio bastardo di suo padre, cresciuto con lui a Grande Inverno.',
    },
  },
  robbTheon: {
    character: 'theon-greyjoy',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His father’s ward, who grows up at Winterfell alongside him.',
      it: 'Il pupillo di suo padre, che cresce a Grande Inverno insieme a lui.',
    },
  },
  robbCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother. She leaves him in charge of Winterfell when she goes south.',
      it: 'Sua madre. Gli lascia il comando di Grande Inverno quando parte per il sud.',
    },
  },
  robbBranBed: {
    character: 'bran-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His younger brother, who lies senseless after a fall from a tower.',
      it: 'Il fratello minore, privo di sensi dopo una caduta da una torre.',
    },
  },
  robbEddardSouth: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who went south as Hand of the King and left him the castle.',
      it: 'Suo padre, che è partito per il sud come Primo Cavaliere e gli ha lasciato il castello.',
    },
  },
  robbBranRescue: {
    character: 'bran-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His crippled brother. Robb comes to his aid when outlaws surround him in the wolfswood.',
      it: 'Il fratello storpio. Robb accorre quando dei fuorilegge lo circondano nella Foresta del Lupo.',
    },
  },
  robbTheonArrow: {
    character: 'theon-greyjoy',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His father’s ward. He kills the outlaw holding a knife to Bran with an arrow, a shot that could have hit Bran.',
      it: 'Il pupillo di suo padre. Uccide con una freccia il fuorilegge che tiene un coltello alla gola di Bran, un tiro che poteva colpire Bran.',
    },
  },
  robbOsha: {
    character: 'osha',
    type: { en: 'Prisoner', it: 'Prigioniera' },
    summary: {
      en: 'One of the outlaws who attacked Bran, and the only one taken alive. Robb takes her back to Winterfell as a prisoner.',
      it: 'Una dei fuorilegge che hanno aggredito Bran, e l’unica presa viva. Robb la porta a Grande Inverno come prigioniera.',
    },
  },
  robbGreatjon: {
    character: 'greatjon-umber',
    type: { en: 'Bannerman', it: 'Alfiere' },
    summary: {
      en: 'A lord who defies him over the vanguard and reaches for his steel. Grey Wind bites off two of his fingers, and he laughs and follows Robb.',
      it: 'Un lord che lo sfida per il comando dell’avanguardia e mette mano alla spada. Vento Grigio gli stacca due dita con un morso, e lui ride e segue Robb.',
    },
  },
  robbGreyWind: {
    character: 'grey-wind',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'The direwolf he raised from a pup. He stays at Robb’s side and turns on anyone who threatens him.',
      it: 'Il metalupo che ha cresciuto da cucciolo. Gli resta accanto e si avventa su chiunque lo minacci.',
    },
  },
  robbEddardSeized: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, seized in the capital after the king’s death. Robb calls his father’s banners and marches south.',
      it: 'Suo padre, arrestato nella capitale dopo la morte del re. Robb chiama a raccolta i vessilli del padre e marcia verso sud.',
    },
  },
  robbBranFarewell: {
    character: 'bran-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His younger brother, whom he leaves at Winterfell when he goes to war.',
      it: 'Il fratello minore, che lascia a Grande Inverno quando parte per la guerra.',
    },
  },
  robbJaime: {
    character: 'jaime-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The queen’s brother, who led a Lannister army in the riverlands. Robb defeats him in battle and takes him prisoner.',
      it: 'Il fratello della regina, al comando di un esercito Lannister nelle terre dei fiumi. Robb lo sconfigge in battaglia e lo fa prigioniero.',
    },
  },
  robbWalder: {
    character: 'walder-frey',
    type: { en: 'Ally by bargain', it: 'Alleato per patto' },
    summary: {
      en: 'The lord of the Twins. He lets Robb’s host cross the river, and Robb agrees to marry one of his daughters.',
      it: 'Il lord delle Torri Gemelle. Lascia passare il fiume all’esercito di Robb, e Robb accetta di sposare una delle sue figlie.',
    },
  },
  robbCatelynTwins: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who joins his host and goes into the Twins herself to bargain for the crossing.',
      it: 'Sua madre, che si unisce all’esercito ed entra di persona alle Torri Gemelle per trattare il passaggio.',
    },
  },
  robbEddardCaptive: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, held prisoner in the capital. Robb has gone to war to free him.',
      it: 'Suo padre, prigioniero nella capitale. Robb è partito in guerra per liberarlo.',
    },
  },
  robbEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, beheaded in the capital on Joffrey’s order while Robb was at war to free him.',
      it: 'Suo padre, decapitato nella capitale per ordine di Joffrey mentre Robb combatteva per liberarlo.',
    },
  },
  robbGreatjonKing: {
    character: 'greatjon-umber',
    type: { en: 'Bannerman', it: 'Alfiere' },
    summary: {
      en: 'The lord who once drew steel on him. After Eddard’s death he is the first to proclaim Robb King in the North.',
      it: 'Il lord che una volta aveva sguainato la spada contro di lui. Dopo la morte di Eddard è il primo a proclamare Robb Re del Nord.',
    },
  },
  robbCatelynWar: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, at his side in the war. She won him the crossing at the Twins.',
      it: 'Sua madre, al suo fianco in guerra. È lei che gli ha ottenuto il passaggio alle Torri Gemelle.',
    },
  },

  // Rickon
  ricEddard: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the lord of Winterfell.',
      it: 'Suo padre, il lord di Grande Inverno.',
    },
  },
  ricCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, the lady of Winterfell.',
      it: 'Sua madre, la signora di Grande Inverno.',
    },
  },
  ricRobb: {
    character: 'robb-stark',
    type: { en: 'Eldest brother', it: 'Fratello maggiore' },
    summary: {
      en: 'His eldest brother and their father’s heir.',
      it: 'Il fratello maggiore ed erede del padre.',
    },
  },
  ricBran: {
    character: 'bran-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, the closest to him in age.',
      it: 'Il fratello più vicino a lui per età.',
    },
  },
  ricShaggydog: {
    character: 'shaggydog',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'The black direwolf he raised from a pup.',
      it: 'Il metalupo nero che ha cresciuto da cucciolo.',
    },
  },
  ricRobbWar: {
    character: 'robb-stark',
    type: { en: 'Eldest brother', it: 'Fratello maggiore' },
    summary: {
      en: 'His eldest brother, who leaves Winterfell for the war. Rickon is sure he will not come back.',
      it: 'Il fratello maggiore, che lascia Grande Inverno per la guerra. Rickon è sicuro che non tornerà.',
    },
  },
  ricBranCrypt: {
    character: 'bran-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, who comes down into the crypts looking for their father and finds Rickon there.',
      it: 'Suo fratello, che scende nelle cripte a cercare il padre e vi trova Rickon.',
    },
  },
  ricEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, beheaded in the capital.',
      it: 'Suo padre, decapitato nella capitale.',
    },
  },
  ricLuwin: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester of Winterfell. He brings Bran down into the crypts and finds Rickon there.',
      it: 'Il maestro di Grande Inverno. Accompagna Bran nelle cripte e vi trova Rickon.',
    },
  },
  ricOsha: {
    character: 'osha',
    type: { en: 'Servant', it: 'Serva' },
    summary: {
      en: 'The wildling woman serving at Winterfell. She goes down into the crypts with Bran and finds Rickon there.',
      it: 'La bruta al servizio di Grande Inverno. Scende nelle cripte con Bran e vi trova Rickon.',
    },
  },

  // Jory
  joryEddard: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord of Winterfell, whom he serves as captain of the guard.',
      it: 'Il lord di Grande Inverno, che serve come capitano della guardia.',
    },
  },
  joryEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord he served as captain of the guard. Jory died defending him in a street of the capital.',
      it: 'Il lord che ha servito come capitano della guardia. Jory è morto difendendolo in una strada della capitale.',
    },
  },
  joryJaime: {
    character: 'jaime-lannister',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'The queen’s brother. He came with his men for Eddard after Tyrion’s arrest, and Jory was killed in the fight.',
      it: 'Il fratello della regina. È arrivato con i suoi uomini per affrontare Eddard dopo l’arresto di Tyrion, e Jory è stato ucciso nello scontro.',
    },
  },

  // Sansa
  sanJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'Betrothed', it: 'Promesso sposo' },
    summary: {
      en: 'The crown prince, whom the king means Sansa to marry.',
      it: 'Il principe ereditario, a cui il re vuole dare Sansa in sposa.',
    },
  },
  sanEddard: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, the lord of Winterfell.',
      it: 'Suo padre, il lord di Grande Inverno.',
    },
  },
  sanArya: {
    character: 'arya-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: { en: 'Her younger sister.', it: 'La sorella minore.' },
  },
  sanLady: {
    character: 'lady-direwolf',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'The gentlest of the direwolf pups, which Sansa raises and names.',
      it: 'La più docile dei cuccioli di metalupo, che Sansa cresce e a cui dà il nome.',
    },
  },
  sanCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Her mother, the lady of Winterfell.',
      it: 'Sua madre, la signora di Grande Inverno.',
    },
  },
  sanJoffreyRiver: {
    character: 'joffrey-baratheon',
    type: { en: 'Betrothed', it: 'Promesso sposo' },
    summary: {
      en: 'The prince she is to marry. When he is bitten by Arya’s wolf, Sansa does not tell the king what she saw.',
      it: 'Il principe che dovrà sposare. Quando la lupa di Arya lo morde, Sansa non racconta al re ciò che ha visto.',
    },
  },
  sanLadyDead: {
    character: 'lady-direwolf',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'Her direwolf. The queen demanded her death in place of Arya’s wolf, and Sansa’s father killed her.',
      it: 'La sua metalupa. La regina ne ha preteso la morte al posto della lupa di Arya, e il padre di Sansa l’ha uccisa.',
    },
  },
  sanEddardLady: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father. As Hand of the King he killed her wolf with his own hands.',
      it: 'Suo padre. Da Primo Cavaliere ha ucciso la sua lupa con le proprie mani.',
    },
  },
  sanAryaQuarrel: {
    character: 'arya-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'Her younger sister, who flies at her for siding with the prince.',
      it: 'La sorella minore, che le si scaglia contro perché ha preso le parti del principe.',
    },
  },
  sanCersei: {
    character: 'cersei-lannister',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen and her future mother-in-law. She demanded that Sansa’s wolf die in place of Arya’s.',
      it: 'La regina e sua futura suocera. Ha preteso che la lupa di Sansa morisse al posto di quella di Arya.',
    },
  },
  sanCerseiHostage: {
    character: 'cersei-lannister',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen regent. After Eddard’s arrest Sansa is kept in the castle under her watch.',
      it: 'La regina reggente. Dopo l’arresto di Eddard Sansa è trattenuta al castello sotto la sua sorveglianza.',
    },
  },
  sanJoffreyKing: {
    character: 'joffrey-baratheon',
    type: { en: 'Betrothed', it: 'Promesso sposo' },
    summary: {
      en: 'The new king, still promised to her after her father’s arrest.',
      it: 'Il nuovo re, ancora promesso a lei dopo l’arresto del padre.',
    },
  },
  sanEddardSeized: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, seized as a traitor after the king’s death.',
      it: 'Suo padre, arrestato come traditore dopo la morte del re.',
    },
  },
  sanAryaGone: {
    character: 'arya-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'Her younger sister, who was not taken with Sansa when their father’s household was attacked.',
      it: 'La sorella minore, che non è stata presa con lei quando la casa del padre è stata attaccata.',
    },
  },
  sanJoffreyExecution: {
    character: 'joffrey-baratheon',
    type: { en: 'Betrothed', it: 'Promesso sposo' },
    summary: {
      en: 'The king she is to marry. Her father confessed and Joffrey had him beheaded anyway.',
      it: 'Il re che dovrà sposare. Suo padre ha confessato e Joffrey lo ha fatto decapitare lo stesso.',
    },
  },
  sanEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, beheaded on Joffrey’s order before her eyes.',
      it: 'Suo padre, decapitato davanti ai suoi occhi per ordine di Joffrey.',
    },
  },
  sanJoffreyHeads: {
    character: 'joffrey-baratheon',
    type: { en: 'Betrothed', it: 'Promesso sposo' },
    summary: {
      en: 'The king she is still to marry. He makes her look at her father’s head on the castle walls and has her struck.',
      it: 'Il re che dovrà ancora sposare. La costringe a guardare la testa del padre sulle mura del castello e la fa picchiare.',
    },
  },
  sanMordaneDead: {
    character: 'mordane',
    type: { en: 'Septa', it: 'Septa' },
    summary: {
      en: 'The septa who taught her. Her head was set on the walls beside Eddard’s.',
      it: 'La septa che la istruiva. La sua testa è stata esposta sulle mura accanto a quella di Eddard.',
    },
  },
  sanSandor: {
    character: 'sandor-clegane',
    type: { en: 'King’s guard', it: 'Guardia del re' },
    summary: {
      en: 'Joffrey’s sworn shield. On the walls he stops her from acting against the king and gives her something to wipe the blood away.',
      it: 'La guardia giurata di Joffrey. Sulle mura le impedisce di agire contro il re e le dà qualcosa per pulirsi il sangue.',
    },
  },

  // Arya
  aryaEddard: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, the lord of Winterfell.',
      it: 'Suo padre, il lord di Grande Inverno.',
    },
  },
  aryaSansa: {
    character: 'sansa-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: { en: 'Her elder sister.', it: 'La sorella maggiore.' },
  },
  aryaJon: {
    character: 'jon-snow',
    type: { en: 'Half-brother', it: 'Fratellastro' },
    summary: {
      en: 'Her father’s bastard son.',
      it: 'Il figlio bastardo del padre.',
    },
  },
  aryaNymeria: {
    character: 'nymeria',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'Her direwolf. Nymeria bit the prince to protect her, and was gone before the queen could have her killed.',
      it: 'La sua metalupa. Nymeria ha morso il principe per difenderla, ed è sparita prima che la regina potesse farla uccidere.',
    },
  },
  aryaMycah: {
    character: 'mycah',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'The butcher’s boy she practised swords with on the road. Joffrey’s sworn shield hunted him down and killed him.',
      it: 'Il garzone del macellaio con cui si allenava con la spada lungo la strada. La guardia giurata di Joffrey gli ha dato la caccia e lo ha ucciso.',
    },
  },
  aryaSansaLie: {
    character: 'sansa-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'Her elder sister, who would not tell the king what the prince did. Arya flew at her for it.',
      it: 'La sorella maggiore, che non ha voluto raccontare al re cosa aveva fatto il principe. Arya le si è scagliata contro.',
    },
  },
  aryaJonNeedle: {
    character: 'jon-snow',
    type: { en: 'Half-brother', it: 'Fratellastro' },
    summary: {
      en: 'Her father’s bastard son, the brother closest to her. Before leaving for the Wall he gave her a slender sword, which she calls Needle.',
      it: 'Il figlio bastardo del padre, il fratello a cui è più legata. Prima di partire per la Barriera le ha regalato una spada sottile, che lei chiama Ago.',
    },
  },
  aryaEddardHand: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father. As Hand of the King he found her sword and, rather than take it away, hired her a teacher.',
      it: 'Suo padre. Da Primo Cavaliere ha scoperto la sua spada e, invece di togliergliela, le ha trovato un maestro.',
    },
  },
  arySyrio: {
    character: 'syrio-forel',
    type: { en: 'Teacher', it: 'Maestro' },
    summary: {
      en: 'The swordmaster from Braavos her father hires for her. He teaches her to fight with a light blade.',
      it: 'Il maestro di spada di Braavos che il padre le ha trovato. Le insegna a combattere con una lama leggera.',
    },
  },
  aryaNymeriaGone: {
    character: 'nymeria',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'Her direwolf, gone since the quarrel on the road south.',
      it: 'La sua metalupa, sparita dopo la lite lungo la strada verso sud.',
    },
  },
  aryaSansaCourt: {
    character: 'sansa-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'Her elder sister, promised to the prince. The two quarrel over what happened on the road.',
      it: 'La sorella maggiore, promessa al principe. Le due litigano per quanto è successo lungo la strada.',
    },
  },
  arySyrioStand: {
    character: 'syrio-forel',
    type: { en: 'Teacher', it: 'Maestro' },
    summary: {
      en: 'Her swordmaster. When guards come to take her, he holds them off with a wooden sword and tells her to run. She does not see what becomes of him.',
      it: 'Il suo maestro di spada. Quando le guardie vengono a prenderla, le tiene a bada con una spada di legno e le dice di scappare. Lei non vede che fine fa.',
    },
  },
  aryaEddardSeized: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, seized after the king’s death. His household is attacked and Arya runs.',
      it: 'Suo padre, arrestato dopo la morte del re. La sua casa viene attaccata e Arya fugge.',
    },
  },
  aryaMeryn: {
    character: 'meryn-trant',
    type: { en: 'Pursuer', it: 'Inseguitore' },
    summary: {
      en: 'The knight of the Kingsguard who comes with the guards to take her, and whom Syrio holds off.',
      it: 'Il cavaliere della Guardia reale che arriva con le guardie per prenderla, e che Syrio tiene a bada.',
    },
  },
  aryaEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, beheaded before the Great Sept of Baelor while she was in the crowd.',
      it: 'Suo padre, decapitato davanti al Grande Tempio di Baelor mentre lei era tra la folla.',
    },
  },
  aryaYoren: {
    character: 'yoren',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'A recruiter of the Night’s Watch. In the crowd at her father’s execution he holds her back when she tries to reach him.',
      it: 'Un reclutatore dei Guardiani della notte. Tra la folla dell’esecuzione del padre la trattiene quando lei cerca di raggiungerlo.',
    },
  },
  aryaJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The boy king who had her father beheaded.',
      it: 'Il giovane re che ha fatto decapitare suo padre.',
    },
  },
  arySyrioPast: {
    character: 'syrio-forel',
    type: { en: 'Teacher', it: 'Maestro' },
    summary: {
      en: 'Her swordmaster, who held off the guards so she could run. She never saw what became of him.',
      it: 'Il suo maestro di spada, che ha tenuto a bada le guardie per farla scappare. Lei non ha mai saputo che fine abbia fatto.',
    },
  },
  aryaSansaApart: {
    character: 'sansa-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'Her elder sister, still in the castle when Arya runs.',
      it: 'La sorella maggiore, ancora nel castello quando Arya fugge.',
    },
  },
  aryaSansaHeld: {
    character: 'sansa-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'Her elder sister, still held by the Lannisters in the castle.',
      it: 'La sorella maggiore, ancora in mano ai Lannister nel castello.',
    },
  },

  // Bran
  branEddard: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who takes him to see a deserter beheaded so that he learns what a lord’s justice means.',
      it: 'Suo padre, che lo porta a vedere un disertore decapitato perché impari cosa significa la giustizia di un lord.',
    },
  },
  branRobb: {
    character: 'robb-stark',
    type: { en: 'Eldest brother', it: 'Fratello maggiore' },
    summary: {
      en: 'His eldest brother and their father’s heir.',
      it: 'Il fratello maggiore ed erede del padre.',
    },
  },
  branJon: {
    character: 'jon-snow',
    type: { en: 'Half-brother', it: 'Fratellastro' },
    summary: {
      en: 'His father’s bastard son. On the ride home he finds a sixth pup, and talks their father into letting them keep the litter.',
      it: 'Il figlio bastardo del padre. Sulla via del ritorno trova un sesto cucciolo e convince il padre a lasciare loro la cucciolata.',
    },
  },
  branJaime: {
    character: 'jaime-lannister',
    type: { en: 'Man who pushed him', it: 'Uomo che l’ha spinto' },
    summary: {
      en: 'The queen’s brother. Bran saw him with the queen in an old tower, and Jaime pushed him out of the window.',
      it: 'Il fratello della regina. Bran lo ha visto con la regina in una vecchia torre, e Jaime lo ha spinto giù dalla finestra.',
    },
  },
  branSummer: {
    character: 'summer-direwolf',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'His direwolf. While Bran lay senseless, Summer killed the man sent to murder him.',
      it: 'Il suo metalupo. Mentre Bran era privo di sensi, Estate ha ucciso l’uomo mandato ad assassinarlo.',
    },
  },
  branTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Unexpected help', it: 'Aiuto inatteso' },
    summary: {
      en: 'The queen’s brother. On his way back from the Wall he gives Bran the design for a saddle he can ride in.',
      it: 'Il fratello della regina. Di ritorno dalla Barriera regala a Bran il progetto di una sella con cui potrà cavalcare.',
    },
  },
  branHodor: {
    character: 'hodor',
    type: { en: 'Carrier', it: 'Portatore' },
    summary: {
      en: 'The giant of a man at Winterfell who can only say his own name. He carries Bran now that he cannot walk.',
      it: 'L’omone di Grande Inverno che sa dire soltanto il proprio nome. Porta in braccio Bran ora che non può camminare.',
    },
  },
  branRobbCastle: {
    character: 'robb-stark',
    type: { en: 'Eldest brother', it: 'Fratello maggiore' },
    summary: {
      en: 'His eldest brother, who rules Winterfell while their parents are away.',
      it: 'Il fratello maggiore, che governa Grande Inverno mentre i genitori sono lontani.',
    },
  },
  branOsha: {
    character: 'osha',
    type: { en: 'Captive', it: 'Prigioniera' },
    summary: {
      en: 'One of the outlaws who waylaid him in the wolfswood. She is the only one taken alive.',
      it: 'Una dei fuorilegge che lo hanno assalito nella Foresta del Lupo. È l’unica presa viva.',
    },
  },
  branRobbRescue: {
    character: 'robb-stark',
    type: { en: 'Eldest brother', it: 'Fratello maggiore' },
    summary: {
      en: 'His eldest brother, who comes to his aid when outlaws surround him in the wolfswood.',
      it: 'Il fratello maggiore, che accorre quando i fuorilegge lo circondano nella Foresta del Lupo.',
    },
  },
  branTheon: {
    character: 'theon-greyjoy',
    type: { en: 'Rescuer', it: 'Salvatore' },
    summary: {
      en: 'His father’s ward, who kills the outlaw holding a knife to him.',
      it: 'Il pupillo del padre, che uccide il fuorilegge che gli punta un coltello.',
    },
  },
  branRobbWar: {
    character: 'robb-stark',
    type: { en: 'Eldest brother', it: 'Fratello maggiore' },
    summary: {
      en: 'His eldest brother, who calls the banners and leaves Winterfell for the war.',
      it: 'Il fratello maggiore, che chiama a raccolta i vessilli e lascia Grande Inverno per la guerra.',
    },
  },
  branOshaGodswood: {
    character: 'osha',
    type: { en: 'Servant', it: 'Serva' },
    summary: {
      en: 'The wildling woman, now a servant at Winterfell. In the godswood she tells him Robb is marching the wrong way, and that the real danger is beyond the Wall.',
      it: 'La bruta, ora serva a Grande Inverno. Nel parco degli dei gli dice che Robb marcia nella direzione sbagliata e che il vero pericolo è oltre la Barriera.',
    },
  },
  branRickon: {
    character: 'rickon-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His little brother, who is left with him at Winterfell.',
      it: 'Il fratellino, rimasto con lui a Grande Inverno.',
    },
  },
  branEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father. Bran dreamed of him in the crypts, and then the news came that he had been beheaded.',
      it: 'Suo padre. Bran lo ha sognato nelle cripte, poi è arrivata la notizia che era stato decapitato.',
    },
  },
  branRickonCrypt: {
    character: 'rickon-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His little brother, who had the same dream about their father and is waiting in the crypts.',
      it: 'Il fratellino, che ha fatto lo stesso sogno sul padre e si trova nelle cripte.',
    },
  },
  branOshaCrypt: {
    character: 'osha',
    type: { en: 'Servant', it: 'Serva' },
    summary: {
      en: 'The wildling woman who serves at Winterfell. She goes down into the crypts with him to look for his father.',
      it: 'La bruta al servizio di Grande Inverno. Scende con lui nelle cripte a cercare suo padre.',
    },
  },
  branLuwin: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester of Winterfell, who teaches and looks after him.',
      it: 'Il maestro di Grande Inverno, che lo istruisce e si prende cura di lui.',
    },
  },
  branLuwinCrypt: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester of Winterfell. He takes Bran down into the crypts to show him his father is not there, and is with him when word of Eddard’s death arrives.',
      it: 'Il maestro di Grande Inverno. Porta Bran nelle cripte per mostrargli che suo padre non c’è, ed è con lui quando arriva la notizia della morte di Eddard.',
    },
  },

  // Benjen
  benJon: {
    character: 'jon-snow',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His brother’s bastard son. Jon asks to join the Night’s Watch, and Benjen tries to talk him out of it.',
      it: 'Il figlio bastardo di suo fratello. Jon chiede di unirsi ai Guardiani della notte, e Benjen cerca di dissuaderlo.',
    },
  },
  benEddard: {
    character: 'eddard-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother, the lord of Winterfell, whom he visits from the Wall.',
      it: 'Il fratello maggiore, il lord di Grande Inverno, che va a trovare dalla Barriera.',
    },
  },
  benJonRoad: {
    character: 'jon-snow',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His brother’s bastard son, whom he takes north to join the Night’s Watch.',
      it: 'Il figlio bastardo di suo fratello, che porta al nord perché si unisca ai Guardiani della notte.',
    },
  },
  benTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Fellow traveller', it: 'Compagno di viaggio' },
    summary: {
      en: 'The queen’s brother, who rides north with them to see the Wall.',
      it: 'Il fratello della regina, che cavalca con loro verso nord per vedere la Barriera.',
    },
  },
  benJonRanging: {
    character: 'jon-snow',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His brother’s bastard son. Jon asks to come on his ranging, and Benjen tells him he is not ready.',
      it: 'Il figlio bastardo di suo fratello. Jon chiede di seguirlo in perlustrazione, e Benjen gli dice che non è pronto.',
    },
  },
  benYoren: {
    character: 'yoren',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'A recruiter of the Watch and an old friend, whom he says goodbye to before riding beyond the Wall.',
      it: 'Un reclutatore dei Guardiani e vecchio amico, che saluta prima di partire oltre la Barriera.',
    },
  },
  benTyrionWall: {
    character: 'tyrion-lannister',
    type: { en: 'Fellow traveller', it: 'Compagno di viaggio' },
    summary: {
      en: 'The queen’s brother, who rode north with him. Benjen feels he looks down on the Watch.',
      it: 'Il fratello della regina, che ha viaggiato con lui verso nord. Benjen pensa che guardi i Guardiani dall’alto in basso.',
    },
  },
  benEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother, the lord of Winterfell, beheaded in the capital.',
      it: 'Il fratello maggiore, il lord di Grande Inverno, decapitato nella capitale.',
    },
  },

  // The direwolves
  gwRobb: {
    character: 'robb-stark',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy who took him from the litter and raised him.',
      it: 'Il ragazzo che lo ha preso dalla cucciolata e lo ha cresciuto.',
    },
  },
  gwGreatjon: {
    character: 'greatjon-umber',
    type: { en: 'Man he bit', it: 'Uomo morso da lui' },
    summary: {
      en: 'A lord who drew steel at Robb’s table. Grey Wind knocked him down and bit off two of his fingers.',
      it: 'Un lord che ha sguainato la spada alla tavola di Robb. Vento Grigio lo ha atterrato e gli ha staccato due dita.',
    },
  },
  ladySansa: {
    character: 'sansa-stark',
    type: { en: 'Mistress', it: 'Padrona' },
    summary: {
      en: 'The girl who raises her and names her.',
      it: 'La ragazza che la cresce e le dà il nome.',
    },
  },
  ladySansaDead: {
    character: 'sansa-stark',
    type: { en: 'Mistress', it: 'Padrona' },
    summary: {
      en: 'The girl who raised her. Lady was killed because of a quarrel Sansa had no part in.',
      it: 'La ragazza che l’ha cresciuta. Lady è stata uccisa per una lite in cui Sansa non c’entrava.',
    },
  },
  ladyEddard: {
    character: 'eddard-stark',
    type: { en: 'Man who killed her', it: 'Uomo che l’ha uccisa' },
    summary: {
      en: 'Sansa’s father. Rather than leave it to the king’s headsman, he killed her himself.',
      it: 'Il padre di Sansa. Invece di lasciarlo fare al boia del re, l’ha uccisa lui stesso.',
    },
  },
  ladyCersei: {
    character: 'cersei-lannister',
    type: { en: 'Queen who doomed her', it: 'Regina che l’ha condannata' },
    summary: {
      en: 'The queen. With Arya’s wolf gone, she demanded that Lady die in its place.',
      it: 'La regina. Sparita la lupa di Arya, ha preteso che Lady morisse al suo posto.',
    },
  },
  nymArya: {
    character: 'arya-stark',
    type: { en: 'Mistress', it: 'Padrona' },
    summary: {
      en: 'The girl who raises her and names her.',
      it: 'La ragazza che la cresce e le dà il nome.',
    },
  },
  nymAryaStones: {
    character: 'arya-stark',
    type: { en: 'Mistress', it: 'Padrona' },
    summary: {
      en: 'The girl who raised her. After the bite she drove Nymeria away with stones so that she would not be killed.',
      it: 'La ragazza che l’ha cresciuta. Dopo il morso ha scacciato Nymeria a sassate perché non la uccidessero.',
    },
  },
  nymAryaGone: {
    character: 'arya-stark',
    type: { en: 'Mistress', it: 'Padrona' },
    summary: {
      en: 'The girl who raised her. After the bite Nymeria was gone, out of the queen’s reach.',
      it: 'La ragazza che l’ha cresciuta. Dopo il morso Nymeria è sparita, lontano dalla regina.',
    },
  },
  nymJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'Prince she bit', it: 'Principe morso da lei' },
    summary: {
      en: 'The prince who threatened Arya with a sword by the river. Nymeria bit his arm.',
      it: 'Il principe che ha minacciato Arya con la spada vicino al fiume. Nymeria gli ha morso il braccio.',
    },
  },
  sumBran: {
    character: 'bran-stark',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy he belongs to. Summer killed the man sent to murder Bran in his bed and keeps watch over him.',
      it: 'Il ragazzo a cui appartiene. Estate ha ucciso l’uomo mandato ad assassinare Bran nel suo letto e veglia su di lui.',
    },
  },
  sumCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Woman he saved', it: 'Donna salvata da lui' },
    summary: {
      en: 'Bran’s mother, who fought the killer in her son’s room until Summer tore out his throat.',
      it: 'La madre di Bran, che ha lottato con il sicario nella stanza del figlio finché Estate non gli ha squarciato la gola.',
    },
  },
  shaRickon: {
    character: 'rickon-stark',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The youngest Stark, who raised him from a pup.',
      it: 'Il più giovane degli Stark, che lo ha cresciuto da cucciolo.',
    },
  },
  shaRickonCrypt: {
    character: 'rickon-stark',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The youngest Stark, who raised him. Shaggydog is with him in the crypts.',
      it: 'Il più giovane degli Stark, che lo ha cresciuto. Cagnaccio è con lui nelle cripte.',
    },
  },
  shaBran: {
    character: 'bran-stark',
    type: { en: 'Rickon’s brother', it: 'Fratello di Rickon' },
    summary: {
      en: 'Rickon’s brother. Shaggydog leaps out at him in the dark of the crypts.',
      it: 'Il fratello di Rickon. Cagnaccio gli balza addosso nel buio delle cripte.',
    },
  },
  shaLuwin: {
    character: 'luwin',
    type: { en: 'Man he bit', it: 'Uomo morso da lui' },
    summary: {
      en: 'The maester of Winterfell. Shaggydog springs at him in the crypts and bites him.',
      it: 'Il maestro di Grande Inverno. Cagnaccio gli salta addosso nelle cripte e lo morde.',
    },
  },
  ghoJon: {
    character: 'jon-snow',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy who found the white pup apart from the litter and kept him.',
      it: 'Il ragazzo che ha trovato il cucciolo bianco lontano dalla cucciolata e lo ha tenuto.',
    },
  },
  ghoJeor: {
    character: 'jeor-mormont',
    type: { en: 'Man he helped save', it: 'Uomo salvato con il suo aiuto' },
    summary: {
      en: 'The Lord Commander. One night Ghost rouses Jon at his door, and Jon finds a dead man risen in the Lord Commander’s rooms.',
      it: 'Il Lord Comandante. Una notte Spettro sveglia Jon grattando alla porta, e Jon trova un morto rialzatosi nelle stanze del Lord Comandante.',
    },
  },

  // Theon
  theEddard: {
    character: 'eddard-stark',
    type: { en: 'Guardian', it: 'Tutore' },
    summary: {
      en: 'The lord of Winterfell, in whose household he lives as a ward.',
      it: 'Il lord di Grande Inverno, nella cui casa vive come pupillo.',
    },
  },
  theRobb: {
    character: 'robb-stark',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Lord Eddard’s heir, with whom he grew up at Winterfell.',
      it: 'L’erede di lord Eddard, con cui è cresciuto a Grande Inverno.',
    },
  },
  theBran: {
    character: 'bran-stark',
    type: { en: 'Boy he saved', it: 'Ragazzo salvato da lui' },
    summary: {
      en: 'Lord Eddard’s crippled son. Theon kills the outlaw holding a knife to him with an arrow.',
      it: 'Il figlio storpio di lord Eddard. Theon uccide con una freccia il fuorilegge che gli punta un coltello.',
    },
  },
  theRobbAnger: {
    character: 'robb-stark',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Lord Eddard’s heir. He is angry that Theon risked Bran with the shot.',
      it: 'L’erede di lord Eddard. È arrabbiato perché con quel tiro Theon ha messo in pericolo Bran.',
    },
  },
  theOsha: {
    character: 'osha',
    type: { en: 'Captive', it: 'Prigioniera' },
    summary: {
      en: 'The outlaw woman taken alive in the wolfswood.',
      it: 'La fuorilegge presa viva nella Foresta del Lupo.',
    },
  },
  theRobbKing: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'Lord Eddard’s heir. When the lords proclaim him King in the North, Theon asks if they are brothers and swears his sword to him.',
      it: 'L’erede di lord Eddard. Quando i lord lo proclamano Re del Nord, Theon gli chiede se sono fratelli e gli giura la sua spada.',
    },
  },
  theOshaLord: {
    character: 'osha',
    type: { en: 'Servant', it: 'Serva' },
    summary: {
      en: 'The outlaw woman, now a servant at Winterfell. She will not call him lord.',
      it: 'La fuorilegge, ora serva a Grande Inverno. Si rifiuta di chiamarlo “mio signore”.',
    },
  },

  // Luwin
  luwEddard: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord of Winterfell. Luwin brings him a letter that was sent in secret.',
      it: 'Il lord di Grande Inverno. Luwin gli consegna una lettera arrivata in segreto.',
    },
  },
  luwCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Lady', it: 'Signora' },
    summary: {
      en: 'The lady of Winterfell. The secret letter is from her sister.',
      it: 'La signora di Grande Inverno. La lettera segreta è di sua sorella.',
    },
  },
  luwBran: {
    character: 'bran-stark',
    type: { en: 'Pupil', it: 'Allievo' },
    summary: {
      en: 'Lord Eddard’s son. Luwin tended him after his fall and still looks after him.',
      it: 'Il figlio di lord Eddard. Luwin lo ha curato dopo la caduta e continua a prendersi cura di lui.',
    },
  },
  luwRobb: {
    character: 'robb-stark',
    type: { en: 'Young lord', it: 'Giovane signore' },
    summary: {
      en: 'Lord Eddard’s heir, who runs the castle with Luwin’s help while his parents are away.',
      it: 'L’erede di lord Eddard, che manda avanti il castello con l’aiuto di Luwin mentre i genitori sono lontani.',
    },
  },
  luwBranNews: {
    character: 'bran-stark',
    type: { en: 'Pupil', it: 'Allievo' },
    summary: {
      en: 'Lord Eddard’s son, crippled by his fall. He is with Luwin when the news of his father’s death reaches Winterfell.',
      it: 'Il figlio di lord Eddard, storpio dopo la caduta. È con Luwin quando a Grande Inverno arriva la notizia della morte del padre.',
    },
  },
  luwRickon: {
    character: 'rickon-stark',
    type: { en: 'Charge', it: 'Protetto' },
    summary: {
      en: 'Lord Eddard’s youngest son, left at Winterfell with Bran.',
      it: 'Il figlio più giovane di lord Eddard, rimasto a Grande Inverno con Bran.',
    },
  },
  luwEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord of Winterfell he served, beheaded in the capital.',
      it: 'Il lord di Grande Inverno che serviva, decapitato nella capitale.',
    },
  },
  luwRobbWar: {
    character: 'robb-stark',
    type: { en: 'Young lord', it: 'Giovane signore' },
    summary: {
      en: 'Lord Eddard’s heir, away at war in the south.',
      it: 'L’erede di lord Eddard, lontano in guerra al sud.',
    },
  },

  // Rodrik
  rodEddard: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord of Winterfell, whom he serves as master-at-arms.',
      it: 'Il lord di Grande Inverno, che serve come maestro d’armi.',
    },
  },
  rodCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Lady', it: 'Signora' },
    summary: {
      en: 'The lady of Winterfell. He rides south with her in secret to warn her husband.',
      it: 'La signora di Grande Inverno. La accompagna di nascosto al sud per avvertire il marito.',
    },
  },
  rodCatelynInn: {
    character: 'catelyn-stark',
    type: { en: 'Lady', it: 'Signora' },
    summary: {
      en: 'The lady of Winterfell, whom he escorts. He is with her when she seizes Tyrion at the inn.',
      it: 'La signora di Grande Inverno, che scorta. È con lei quando cattura Tyrion alla locanda.',
    },
  },
  rodTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Captive', it: 'Prigioniero' },
    summary: {
      en: 'The queen’s brother, whom Catelyn accuses of sending a killer after Bran. Rodrik is with her when she takes him.',
      it: 'Il fratello della regina, che Catelyn accusa di aver mandato un sicario da Bran. Rodrik è con lei quando lo cattura.',
    },
  },
  rodJoryDead: {
    character: 'jory-cassel',
    type: { en: 'Kinsman', it: 'Parente' },
    summary: {
      en: 'A Cassel and the captain of Lord Eddard’s guard. He was killed defending Eddard against Jaime Lannister’s men.',
      it: 'Un Cassel, capitano della guardia di lord Eddard. È stato ucciso difendendo Eddard dagli uomini di Jaime Lannister.',
    },
  },
  rodEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord of Winterfell he served, beheaded in the capital.',
      it: 'Il lord di Grande Inverno che serviva, decapitato nella capitale.',
    },
  },

  // Old Nan
  nanBran: {
    character: 'bran-stark',
    type: { en: 'Listener', it: 'Ascoltatore' },
    summary: {
      en: 'Lord Eddard’s son. She sits by his bed and tells him of the Long Night and the White Walkers.',
      it: 'Il figlio di lord Eddard. Siede accanto al suo letto e gli racconta della Lunga Notte e degli Estranei.',
    },
  },
  nanCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Lady', it: 'Signora' },
    summary: {
      en: 'The lady of Winterfell. Old Nan bathes her after she fights off the man who came to kill Bran.',
      it: 'La signora di Grande Inverno. La Vecchia Nan le fa il bagno dopo che ha respinto l’uomo venuto a uccidere Bran.',
    },
  },
  nanBranBook: {
    character: 'bran-stark',
    type: { en: 'Listener', it: 'Ascoltatore' },
    summary: {
      en: 'Lord Eddard’s son, crippled by his fall. She tells him her old stories.',
      it: 'Il figlio di lord Eddard, storpio dopo la caduta. Gli racconta le sue vecchie storie.',
    },
  },

  // Hodor
  hodBran: {
    character: 'bran-stark',
    type: { en: 'Boy he carries', it: 'Ragazzo portato da lui' },
    summary: {
      en: 'Lord Eddard’s crippled son. Hodor carries him through the castle.',
      it: 'Il figlio storpio di lord Eddard. Hodor lo porta in braccio per il castello.',
    },
  },

  // Osha
  oshBran: {
    character: 'bran-stark',
    type: { en: 'Boy she waylaid', it: 'Ragazzo assalito da lei' },
    summary: {
      en: 'A crippled boy on a horse in the wolfswood. She and her companions try to take him.',
      it: 'Un ragazzo storpio a cavallo nella Foresta del Lupo. Lei e i suoi compagni cercano di prenderlo.',
    },
  },
  oshRobb: {
    character: 'robb-stark',
    type: { en: 'Captor', it: 'Chi l’ha catturata' },
    summary: {
      en: 'Bran’s brother. She is the only outlaw he takes alive, and he brings her to Winterfell as a prisoner.',
      it: 'Il fratello di Bran. È l’unica fuorilegge che prende viva, e la porta a Grande Inverno come prigioniera.',
    },
  },
  oshTheon: {
    character: 'theon-greyjoy',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Lord Eddard’s ward, who killed one of her companions with an arrow.',
      it: 'Il pupillo di lord Eddard, che ha ucciso uno dei suoi compagni con una freccia.',
    },
  },
  oshBranGodswood: {
    character: 'bran-stark',
    type: { en: 'Young lord', it: 'Giovane signore' },
    summary: {
      en: 'The crippled boy, now her master. In the godswood she tells him the real enemy waits beyond the Wall.',
      it: 'Il ragazzo storpio, ora suo padrone. Nel parco degli dei gli dice che il vero nemico è oltre la Barriera.',
    },
  },
  oshRobbWar: {
    character: 'robb-stark',
    type: { en: 'Captor', it: 'Chi l’ha catturata' },
    summary: {
      en: 'Bran’s brother, who took her prisoner. She says he is marching his army the wrong way.',
      it: 'Il fratello di Bran, che l’ha fatta prigioniera. Lei dice che sta portando l’esercito nella direzione sbagliata.',
    },
  },
  oshLuwin: {
    character: 'luwin',
    type: { en: 'Questioner', it: 'Interrogatore' },
    summary: {
      en: 'The maester of Winterfell. He asks why she came south of the Wall and does not believe her answer.',
      it: 'Il maestro di Grande Inverno. Le chiede perché sia venuta a sud della Barriera e non crede alla sua risposta.',
    },
  },
  oshBranCrypt: {
    character: 'bran-stark',
    type: { en: 'Young lord', it: 'Giovane signore' },
    summary: {
      en: 'The crippled boy she serves. She goes down into the crypts with him to look for his father.',
      it: 'Il ragazzo storpio che serve. Scende con lui nelle cripte a cercare suo padre.',
    },
  },
  oshRickon: {
    character: 'rickon-stark',
    type: { en: 'Young lord', it: 'Giovane signore' },
    summary: {
      en: 'Bran’s little brother, whom they find in the crypts with his wolf.',
      it: 'Il fratellino di Bran, che trovano nelle cripte con il suo lupo.',
    },
  },
  oshShaggydog: {
    character: 'shaggydog',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'Rickon’s black direwolf, which leaps out at them in the crypts.',
      it: 'Il metalupo nero di Rickon, che balza loro addosso nelle cripte.',
    },
  },

  // Mordane
  morSansa: {
    character: 'sansa-stark',
    type: { en: 'Pupil', it: 'Allieva' },
    summary: {
      en: 'Lord Eddard’s elder daughter, whose needlework the septa praises.',
      it: 'La figlia maggiore di lord Eddard, di cui la septa loda il ricamo.',
    },
  },
  morArya: {
    character: 'arya-stark',
    type: { en: 'Pupil', it: 'Allieva' },
    summary: {
      en: 'Lord Eddard’s younger daughter, who struggles with her stitches.',
      it: 'La figlia minore di lord Eddard, che fatica con i punti.',
    },
  },
  morSansaBook: {
    character: 'sansa-stark',
    type: { en: 'Pupil', it: 'Allieva' },
    summary: {
      en: 'Lord Eddard’s elder daughter, whom she teaches needlework.',
      it: 'La figlia maggiore di lord Eddard, a cui insegna il ricamo.',
    },
  },
  morJeyne: {
    character: 'jeyne-poole',
    type: { en: 'Pupil', it: 'Allieva' },
    summary: {
      en: 'The steward’s daughter, who sews beside Sansa at the lesson.',
      it: 'La figlia dell’intendente, che cuce accanto a Sansa durante la lezione.',
    },
  },
  morSansaFlight: {
    character: 'sansa-stark',
    type: { en: 'Pupil', it: 'Allieva' },
    summary: {
      en: 'Lord Eddard’s elder daughter. When fighting breaks out in the castle, the septa sends her to bar herself in her room.',
      it: 'La figlia maggiore di lord Eddard. Quando nel castello scoppiano gli scontri, la septa la manda a barricarsi in camera.',
    },
  },
  morSansaHeads: {
    character: 'sansa-stark',
    type: { en: 'Pupil', it: 'Allieva' },
    summary: {
      en: 'Lord Eddard’s elder daughter, whom she taught. Joffrey made Sansa look at the septa’s head on the castle walls.',
      it: 'La figlia maggiore di lord Eddard, a cui faceva da insegnante. Joffrey ha costretto Sansa a guardare la testa della septa sulle mura del castello.',
    },
  },
  morAryaPast: {
    character: 'arya-stark',
    type: { en: 'Pupil', it: 'Allieva' },
    summary: {
      en: 'Lord Eddard’s younger daughter, who never took to her lessons.',
      it: 'La figlia minore di lord Eddard, che non si è mai appassionata alle sue lezioni.',
    },
  },
  morEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord whose daughters she taught. His head and hers were set side by side on the walls.',
      it: 'Il lord di cui istruiva le figlie. La sua testa e quella della septa sono state esposte una accanto all’altra sulle mura.',
    },
  },

  // Hullen
  hulEddard: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord of Winterfell, whom he serves as master of horse. He rides with him to the execution.',
      it: 'Il lord di Grande Inverno, che serve come maestro dei cavalli. Lo accompagna all’esecuzione.',
    },
  },
  hulEddardPast: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord he served as master of horse, and followed south.',
      it: 'Il lord che ha servito come maestro dei cavalli e ha seguito al sud.',
    },
  },
  hulHarwin: {
    character: 'harwin',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, a guard in Lord Eddard’s household.',
      it: 'Suo figlio, una guardia della casa di lord Eddard.',
    },
  },
  hulArya: {
    character: 'arya-stark',
    type: { en: 'Lord’s daughter', it: 'Figlia del suo signore' },
    summary: {
      en: 'Lord Eddard’s daughter. Running from the guards, she found him dying in the stables, and he told her to warn her father.',
      it: 'La figlia di lord Eddard. Mentre fuggiva dalle guardie lo ha trovato morente nelle stalle, e lui le ha detto di avvertire il padre.',
    },
  },

  // Jeyne Poole
  jeySansa: {
    character: 'sansa-stark',
    type: { en: 'Best friend', it: 'Migliore amica' },
    summary: {
      en: 'Lord Eddard’s elder daughter. They sew side by side and share their talk.',
      it: 'La figlia maggiore di lord Eddard. Cuciono fianco a fianco e si confidano.',
    },
  },
  jeyArya: {
    character: 'arya-stark',
    type: { en: 'Friend’s sister', it: 'Sorella dell’amica' },
    summary: {
      en: 'Sansa’s younger sister, who sits at the same needlework lesson.',
      it: 'La sorella minore di Sansa, che partecipa alla stessa lezione di ricamo.',
    },
  },
  jeySansaApart: {
    character: 'sansa-stark',
    type: { en: 'Best friend', it: 'Migliore amica' },
    summary: {
      en: 'Lord Eddard’s elder daughter. After the attack on the household they were locked in a room together, until Jeyne was taken away.',
      it: 'La figlia maggiore di lord Eddard. Dopo l’attacco alla casa sono state rinchiuse insieme in una stanza, finché Jeyne non è stata portata via.',
    },
  },
  jeyVayon: {
    character: 'vayon-poole',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, the steward of Lord Eddard’s household.',
      it: 'Suo padre, intendente della casa di lord Eddard.',
    },
  },
  jeyVayonDead: {
    character: 'vayon-poole',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, Lord Eddard’s steward. He was killed when the Lannisters fell on the household.',
      it: 'Suo padre, intendente di lord Eddard. È stato ucciso quando i Lannister si sono scagliati contro la casa.',
    },
  },

  // Mikken
  mikArya: {
    character: 'arya-stark',
    type: {
      en: 'Girl he made a sword for',
      it: 'Ragazza a cui ha forgiato una spada',
    },
    summary: {
      en: 'Lord Eddard’s younger daughter. He forged the slender sword that Jon gives her.',
      it: 'La figlia minore di lord Eddard. Ha forgiato la spada sottile che Jon le regala.',
    },
  },
  mikJon: {
    character: 'jon-snow',
    type: { en: 'Customer', it: 'Committente' },
    summary: {
      en: 'Lord Eddard’s bastard son, who has him make a sword for Arya before he leaves for the Wall.',
      it: 'Il figlio bastardo di lord Eddard, che prima di partire per la Barriera gli fa forgiare una spada per Arya.',
    },
  },

  // Hallis Mollen
  halCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Lady', it: 'Signora' },
    summary: {
      en: 'The lady of Winterfell. He reports to her on the search after a man tries to kill Bran.',
      it: 'La signora di Grande Inverno. Le riferisce le ricerche dopo che un uomo ha cercato di uccidere Bran.',
    },
  },
  halRobb: {
    character: 'robb-stark',
    type: { en: 'Young lord', it: 'Giovane signore' },
    summary: {
      en: 'Lord Eddard’s heir, with whom he comes to Catelyn after the attack.',
      it: 'L’erede di lord Eddard, con cui si presenta da Catelyn dopo l’aggressione.',
    },
  },

  // Greatjon Umber
  gjRobb: {
    character: 'robb-stark',
    type: { en: 'Liege', it: 'Signore' },
    summary: {
      en: 'Lord Eddard’s heir, who has called the banners. The Greatjon demands the vanguard and draws steel at his table, then laughs and follows him.',
      it: 'L’erede di lord Eddard, che ha chiamato a raccolta i vessilli. Il Greatjon pretende l’avanguardia e sguaina la spada alla sua tavola, poi ride e lo segue.',
    },
  },
  gjGreyWind: {
    character: 'grey-wind',
    type: { en: 'Wolf that bit him', it: 'Lupo che l’ha morso' },
    summary: {
      en: 'Robb’s direwolf, which knocked him down and bit off two of his fingers.',
      it: 'Il metalupo di Robb, che lo ha atterrato e gli ha staccato due dita.',
    },
  },
  gjRobbKing: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young lord he once drew steel on. After Eddard’s death the Greatjon is the first to proclaim him King in the North.',
      it: 'Il giovane lord contro cui aveva sguainato la spada. Dopo la morte di Eddard il Greatjon è il primo a proclamarlo Re del Nord.',
    },
  },
  gjSmalljon: {
    character: 'smalljon-umber',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, who rides in Robb’s guard.',
      it: 'Suo figlio, che cavalca nella guardia di Robb.',
    },
  },

  // Smalljon Umber
  sjGreatjon: {
    character: 'greatjon-umber',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the lord of House Umber, who marches in Robb’s host.',
      it: 'Suo padre, il lord di Casa Umber, che marcia nell’esercito di Robb.',
    },
  },
  sjRobb: {
    character: 'robb-stark',
    type: { en: 'Liege', it: 'Signore' },
    summary: {
      en: 'The young lord of Winterfell, in whose guard he rides when Robb takes Jaime Lannister.',
      it: 'Il giovane lord di Grande Inverno, nella cui guardia cavalca quando Robb cattura Jaime Lannister.',
    },
  },
  sjRobbKing: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young lord he guards. His father is the first to proclaim Robb King in the North.',
      it: 'Il giovane lord che protegge. Suo padre è il primo a proclamare Robb Re del Nord.',
    },
  },

  // The northern lords
  rkRobb: {
    character: 'robb-stark',
    type: { en: 'Liege', it: 'Signore' },
    summary: {
      en: 'Lord Eddard’s heir. Lord Karstark brings his sons and his men to Winterfell to march with him.',
      it: 'L’erede di lord Eddard. Lord Karstark porta i figli e i suoi uomini a Grande Inverno per marciare con lui.',
    },
  },
  rkRobbKing: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young lord he marched south with. The northern lords proclaim him King in the North.',
      it: 'Il giovane lord con cui ha marciato verso sud. I lord del Nord lo proclamano Re del Nord.',
    },
  },
  rooRobb: {
    character: 'robb-stark',
    type: { en: 'Liege', it: 'Signore' },
    summary: {
      en: 'Lord Eddard’s heir, who has called the banners. Lord Bolton brings his men to Winterfell for him.',
      it: 'L’erede di lord Eddard, che ha chiamato a raccolta i vessilli. Lord Bolton porta i suoi uomini a Grande Inverno per lui.',
    },
  },
  rooRobbFoot: {
    character: 'robb-stark',
    type: { en: 'Liege', it: 'Signore' },
    summary: {
      en: 'The young lord of Winterfell. He gives Lord Bolton command of the foot and sends him down the kingsroad against Lord Tywin.',
      it: 'Il giovane lord di Grande Inverno. Affida a lord Bolton il comando della fanteria e lo manda lungo la strada del re contro lord Tywin.',
    },
  },
  rooTywin: {
    character: 'tywin-lannister',
    type: { en: 'Enemy commander', it: 'Comandante nemico' },
    summary: {
      en: 'The lord of Casterly Rock. Bolton’s foot meet his army in battle by the Green Fork.',
      it: 'Il lord di Castel Granito. La fanteria di Bolton affronta il suo esercito in battaglia vicino alla Forca Verde.',
    },
  },
  galRobb: {
    character: 'robb-stark',
    type: { en: 'Liege', it: 'Signore' },
    summary: {
      en: 'Lord Eddard’s heir, who has called the banners. Lord Glover sits at his war council.',
      it: 'L’erede di lord Eddard, che ha chiamato a raccolta i vessilli. Lord Glover siede al suo consiglio di guerra.',
    },
  },
  galRobbVanguard: {
    character: 'robb-stark',
    type: { en: 'Liege', it: 'Signore' },
    summary: {
      en: 'Lord Eddard’s heir, who has called the banners. He gives Lord Glover the vanguard of his host.',
      it: 'L’erede di lord Eddard, che ha chiamato a raccolta i vessilli. Affida a lord Glover l’avanguardia del suo esercito.',
    },
  },
  galGreatjon: {
    character: 'greatjon-umber',
    type: { en: 'Rival', it: 'Rivale' },
    summary: {
      en: 'A northern lord who will not march behind a Glover and demands the vanguard for himself.',
      it: 'Un lord del Nord che non vuole marciare dietro a un Glover e pretende l’avanguardia per sé.',
    },
  },
  galRobbKing: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young lord he marched south with. Lord Glover joins the lords who proclaim him King in the North.',
      it: 'Il giovane lord con cui ha marciato verso sud. Lord Glover si unisce ai lord che lo proclamano Re del Nord.',
    },
  },
  robRobb: {
    character: 'robb-stark',
    type: { en: 'Liege', it: 'Signore' },
    summary: {
      en: 'Lord Eddard’s heir, who has called the banners. Robett is among the northmen who come to Winterfell for him.',
      it: 'L’erede di lord Eddard, che ha chiamato a raccolta i vessilli. Robett è tra gli uomini del Nord che arrivano a Grande Inverno per lui.',
    },
  },
  maeRobb: {
    character: 'robb-stark',
    type: { en: 'Liege', it: 'Signore' },
    summary: {
      en: 'Lord Eddard’s heir, who has called the banners. Lady Mormont brings her people to join his host.',
      it: 'L’erede di lord Eddard, che ha chiamato a raccolta i vessilli. Lady Mormont porta la sua gente a unirsi al suo esercito.',
    },
  },
  maeDacey: {
    character: 'dacey-mormont',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Her eldest daughter and heir, who rides in Robb’s guard.',
      it: 'La figlia maggiore ed erede, che cavalca nella guardia di Robb.',
    },
  },
  maeRobbKing: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young lord she marched south with. She is among the lords who proclaim him King in the North.',
      it: 'Il giovane lord con cui ha marciato verso sud. È tra i lord che lo proclamano Re del Nord.',
    },
  },
  dacRobb: {
    character: 'robb-stark',
    type: { en: 'Liege', it: 'Signore' },
    summary: {
      en: 'The young lord of Winterfell, in whose guard she rides when he takes Jaime Lannister.',
      it: 'Il giovane lord di Grande Inverno, nella cui guardia cavalca quando cattura Jaime Lannister.',
    },
  },
  dacMaege: {
    character: 'maege-mormont',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Her mother, the lady of Bear Island, whose heir she is.',
      it: 'Sua madre, la signora dell’Isola dell’Orso, di cui è l’erede.',
    },
  },
  wenCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Lady he escorts', it: 'Signora scortata da lui' },
    summary: {
      en: 'Lord Eddard’s wife. Ser Wendel rides with her to join Robb’s host.',
      it: 'La moglie di lord Eddard. Ser Wendel cavalca con lei per raggiungere l’esercito di Robb.',
    },
  },
  wenRobb: {
    character: 'robb-stark',
    type: { en: 'Liege', it: 'Signore' },
    summary: {
      en: 'Lord Eddard’s heir, for whom the men of House Manderly march.',
      it: 'L’erede di lord Eddard, per cui marciano gli uomini di Casa Manderly.',
    },
  },

  // Vayon Poole
  vayEddard: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord he serves as steward. He follows Eddard south when he becomes Hand.',
      it: 'Il lord che serve come intendente. Segue Eddard al sud quando diventa Primo Cavaliere.',
    },
  },
  vayJeyne: {
    character: 'jeyne-poole',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, Sansa’s friend.',
      it: 'Sua figlia, amica di Sansa.',
    },
  },
  vayEddardPast: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord he served as steward. After the king’s death the Lannisters seized Eddard and fell on his household.',
      it: 'Il lord che ha servito come intendente. Dopo la morte del re i Lannister hanno arrestato Eddard e si sono scagliati contro la sua casa.',
    },
  },
  vayJeynePast: {
    character: 'jeyne-poole',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, Sansa’s friend, who came south with the household.',
      it: 'Sua figlia, amica di Sansa, venuta al sud con la casa.',
    },
  },

  // Tomard
  tomEddardLetter: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'Lord Eddard, who sends him away from the capital with a letter for Stannis Baratheon.',
      it: 'Lord Eddard, che lo manda via dalla capitale con una lettera per Stannis Baratheon.',
    },
  },
  tomEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The Hand of the King he guarded, who sent him away with a letter. Eddard was later beheaded in the capital.',
      it: 'Il Primo Cavaliere di cui era la guardia, che lo aveva mandato via con una lettera. In seguito Eddard è stato decapitato nella capitale.',
    },
  },
  tomEddard: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The Hand of the King, whom he guards in the capital.',
      it: 'Il Primo Cavaliere, di cui è la guardia nella capitale.',
    },
  },
  tomEddardThrone: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The Hand of the King he guarded. Tomard was killed in the throne room when the guards turned on Eddard’s men.',
      it: 'Il Primo Cavaliere di cui era la guardia. Tomard è stato ucciso nella sala del trono quando le guardie si sono rivoltate contro gli uomini di Eddard.',
    },
  },

  // Harwin
  harEddard: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord of Winterfell, in whose party he rides to the execution. When the pups are found, Harwin says they cannot be kept.',
      it: 'Il lord di Grande Inverno, con il cui seguito cavalca fino all’esecuzione. Quando trovano i cuccioli, Harwin dice che non si possono tenere.',
    },
  },
  harHullen: {
    character: 'hullen',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the master of horse at Winterfell.',
      it: 'Suo padre, il maestro dei cavalli di Grande Inverno.',
    },
  },
  harEddardHand: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'Lord Eddard, whom he followed south. As Hand of the King, Eddard sent him with Lord Beric to bring Gregor Clegane to justice.',
      it: 'Lord Eddard, che ha seguito al sud. Come Primo Cavaliere, Eddard lo ha mandato con lord Beric a consegnare Gregor Clegane alla giustizia.',
    },
  },
  harHullenDead: {
    character: 'hullen',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the master of horse at Winterfell. He was killed in the capital when the Lannisters turned on Lord Eddard’s household.',
      it: 'Suo padre, il maestro dei cavalli di Grande Inverno. È stato ucciso nella capitale quando i Lannister si sono rivoltati contro la casa di lord Eddard.',
    },
  },
  harBeric: {
    character: 'beric-dondarrion',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The lord whose company Eddard sends against Gregor Clegane. Harwin rides with him.',
      it: 'Il lord della cui compagnia Eddard si serve contro Gregor Clegane. Harwin cavalca con lui.',
    },
  },
  harBericPast: {
    character: 'beric-dondarrion',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The lord whose company Eddard sent against Gregor Clegane. Harwin rode with him.',
      it: 'Il lord nella cui compagnia Eddard lo ha mandato contro Gregor Clegane. Harwin ha cavalcato con lui.',
    },
  },
  harEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord who sent him with Lord Beric. Eddard was beheaded in the capital.',
      it: 'Il lord che lo aveva mandato con lord Beric. Eddard è stato decapitato nella capitale.',
    },
  },

  // Alyn
  alyEddard: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord he guards on the road south. Alyn wakes him one morning because the king wants to ride with him.',
      it: 'Il lord di cui è la guardia sulla strada verso sud. Una mattina Alyn lo sveglia perché il re vuole cavalcare con lui.',
    },
  },
  alyEddardBeric: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'Lord Eddard, whom he followed south. As Hand of the King, Eddard sent him at the head of twenty men in Lord Beric’s company.',
      it: 'Lord Eddard, che ha seguito al sud. Come Primo Cavaliere, Eddard lo ha mandato al comando di venti uomini nella compagnia di lord Beric.',
    },
  },
  alyBeric: {
    character: 'beric-dondarrion',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The lord whose company Eddard sends against Gregor Clegane. Alyn leads twenty of Eddard’s men in it.',
      it: 'Il lord della cui compagnia Eddard si serve contro Gregor Clegane. Alyn vi guida venti uomini di Eddard.',
    },
  },
  alyBericPast: {
    character: 'beric-dondarrion',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The lord whose company Eddard sent against Gregor Clegane. Alyn led twenty of Eddard’s men in it.',
      it: 'Il lord nella cui compagnia Eddard lo ha mandato contro Gregor Clegane. Alyn vi ha guidato venti uomini di Eddard.',
    },
  },
  alyEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'Lord Eddard, who sent him with twenty men in Lord Beric’s company. Eddard was beheaded in the capital.',
      it: 'Lord Eddard, che lo aveva mandato con venti uomini nella compagnia di lord Beric. Eddard è stato decapitato nella capitale.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * Stage 2's Winterfell and Iron Islands cards for the season-1 cast (#1482):
 * season 2 and A Clash of Kings, episodes 11 to 20 and chapters 74 to 143. The
 * new characters' own cards are in `season-2.relationships.ts`.
 */
const winterfell2 = {
  brShowLuwin: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester of Winterfell, who guides him through a lord’s duties as he hears his vassals’ complaints.',
      it: 'Il maestro di Grande Inverno, che lo guida nei doveri di un lord mentre ascolta le lamentele dei suoi vassalli.',
    },
  },
  brShowRickon: {
    character: 'rickon-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His little brother, who sits beside him at the hearings and shells nuts with a rock.',
      it: 'Il suo fratellino, che siede accanto a lui alle udienze e schiaccia noci con un sasso.',
    },
  },
  brShowOsha: {
    character: 'osha',
    type: { en: 'Wildling servant', it: 'Serva dei bruti' },
    summary: {
      en: 'The wildling servant who takes him to the pool in the godswood and tells him the red comet means dragons.',
      it: 'La serva dei bruti che lo porta alla pozza nel parco degli dèi e gli dice che la cometa rossa significa draghi.',
    },
  },
  brShowHodor: {
    character: 'hodor',
    type: { en: 'Carrier', it: 'Chi lo porta' },
    summary: {
      en: 'Hodor, who carries him to the pool in the godswood.',
      it: 'Hodor, che lo porta fino alla pozza nel parco degli dèi.',
    },
  },
  brShowSummer: {
    character: 'summer-direwolf',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'His direwolf. In his dreams he walks the godswood as Summer, and he wakes at the sight of the wolf’s reflection in the pool.',
      it: 'Il suo metalupo. Nei sogni cammina nel parco degli dèi come Estate, e si sveglia vedendo nella pozza il riflesso del lupo.',
    },
  },
  brShowTheon: {
    character: 'theon-greyjoy',
    type: { en: 'Ward turned enemy', it: 'Pupillo diventato nemico' },
    summary: {
      en: 'The ward Winterfell raised, who seizes the castle and makes Bran yield it in front of his people.',
      it: 'Il pupillo cresciuto a Grande Inverno, che si impadronisce del castello e costringe Bran a cederlo davanti alla sua gente.',
    },
  },
  brShowRodrik: {
    character: 'rodrik-cassel',
    type: { en: 'Castellan', it: 'Castellano' },
    summary: {
      en: 'The knight Theon beheads before the castle. Bran and Rickon beg for his life.',
      it: 'Il cavaliere che Theon decapita davanti al castello. Bran e Rickon ne implorano la vita.',
    },
  },
  brShowOshaFree: {
    character: 'osha',
    type: { en: 'Rescuer', it: 'Chi lo salva' },
    summary: {
      en: 'The wildling servant who frees him and Rickon by night and leads them out of the castle.',
      it: 'La serva dei bruti che libera lui e Rickon di notte e li porta fuori dal castello.',
    },
  },
  brShowRickonFlight: {
    character: 'rickon-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His little brother, who is led out of Winterfell with him.',
      it: 'Il suo fratellino, portato fuori da Grande Inverno insieme a lui.',
    },
  },
  brShowLuwinDying: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who dies in the godswood after the sack. He tells the boys to go north to the Wall, where Jon can keep them safe.',
      it: 'Il maestro che muore nel parco degli dèi dopo il saccheggio. Dice ai ragazzi di andare a nord, alla Barriera, dove Jon potrà proteggerli.',
    },
  },
  brShowOshaCrypt: {
    character: 'osha',
    type: { en: 'Wildling servant', it: 'Serva dei bruti' },
    summary: {
      en: 'The wildling servant who hid him in the crypts and stays with him when they come out to a burning castle.',
      it: 'La serva dei bruti che lo ha nascosto nelle cripte e resta con lui quando escono in un castello in fiamme.',
    },
  },
  brShowRickonCrypt: {
    character: 'rickon-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His little brother, who hid with him in the crypts and comes out beside him.',
      it: 'Il suo fratellino, che si è nascosto con lui nelle cripte e ne esce al suo fianco.',
    },
  },
  brShowHodorCrypt: {
    character: 'hodor',
    type: { en: 'Carrier', it: 'Chi lo porta' },
    summary: {
      en: 'Hodor, who carries him out of the crypts.',
      it: 'Hodor, che lo porta fuori dalle cripte.',
    },
  },
  brBSummer78: {
    character: 'summer-direwolf',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'His direwolf, whose howls he answers from his window. In his wolf dreams he runs as Summer.',
      it: 'Il suo metalupo, i cui ululati lui accompagna dalla finestra. Nei sogni di lupo corre come Estate.',
    },
  },
  brBLuwin78: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who tells him to sleep, and brings a draught. He says that even princes must sleep.',
      it: 'Il maestro che gli dice di dormire e porta un sonnifero. Dice che anche i principi devono dormire.',
    },
  },
  brBOsha78: {
    character: 'osha',
    type: { en: 'Wildling servant', it: 'Serva dei bruti' },
    summary: {
      en: 'The wildling servant who carries him to bed and says the old gods may be answering him.',
      it: 'La serva dei bruti che lo porta a letto e dice che forse gli antichi dèi gli stanno rispondendo.',
    },
  },
  brBRickon78: {
    character: 'rickon-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His little brother, whom he soothed when his mother’s wards came from the Twins. Rickon has taken to them since.',
      it: 'Il suo fratellino, che ha calmato quando i pupilli di sua madre sono arrivati dai Gemelli. Da allora Rickon si è affezionato a loro.',
    },
  },
  brBOldNan78: {
    character: 'old-nan',
    type: { en: 'Teller of tales', it: 'Narratrice di storie' },
    summary: {
      en: 'Old Nan, who tells him the Starks have wolf blood.',
      it: 'Vecchia Nan, che gli dice che gli Stark hanno sangue di lupo.',
    },
  },
  brBJojen102: {
    character: 'jojen-reed',
    type: { en: 'Greenseer', it: 'Veggente verde' },
    summary: {
      en: 'The Reed boy who says Bran is a winged wolf bound to the earth, and that a three-eyed crow is trying to free him.',
      it: 'Il ragazzo dei Reed che dice che Bran è un lupo alato legato alla terra, e che un corvo con tre occhi cerca di liberarlo.',
    },
  },
  brBMeera102: {
    character: 'meera-reed',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'The Reed girl who faces Summer with a net and a frog spear, and steps between him and her brother when the wolf growls. Bran thinks she is like Arya.',
      it: 'La ragazza dei Reed che affronta Estate con una rete e una fiocina per rane, e si mette tra lui e suo fratello quando il lupo ringhia. Bran la trova simile ad Arya.',
    },
  },
  brBSummer102: {
    character: 'summer-direwolf',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'His direwolf, caught in Meera’s net, who growls when Jojen asks if Bran falls every night.',
      it: 'Il suo metalupo, finito nella rete di Meera, che ringhia quando Jojen chiede se Bran cada ogni notte.',
    },
  },
  brBHodor102: {
    character: 'hodor',
    type: { en: 'Carrier', it: 'Chi lo porta' },
    summary: {
      en: 'Hodor, whom he calls to chase the wolves away when he cannot calm them himself.',
      it: 'Hodor, che chiama per scacciare i lupi quando non riesce a calmarli da solo.',
    },
  },
  brBLuwin102: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who tells him that no living man has the greensight, and that magic is dead.',
      it: 'Il maestro che gli dice che nessun uomo vivo ha la visione verde, e che la magia è morta.',
    },
  },
  brBTheon120: {
    character: 'theon-greyjoy',
    type: { en: 'Ward turned enemy', it: 'Pupillo diventato nemico' },
    summary: {
      en: 'His father’s former ward, who comes into his room, says the castle is his now, and tells Bran to make the people yield.',
      it: 'L’ex pupillo di suo padre, che entra nella sua stanza, dice che il castello ora è suo, e dice a Bran di far arrendere la gente.',
    },
  },
  brBMikken120: {
    character: 'mikken',
    type: { en: 'Smith', it: 'Fabbro' },
    summary: {
      en: 'The smith who refuses to kneel to Theon and drowns in his own blood.',
      it: 'Il fabbro che si rifiuta di inginocchiarsi davanti a Theon e annega nel proprio sangue.',
    },
  },
  brBOsha120: {
    character: 'osha',
    type: { en: 'Wildling servant', it: 'Serva dei bruti' },
    summary: {
      en: 'The wildling servant who joins Theon’s service, to Bran’s disappointment.',
      it: 'La serva dei bruti che passa al servizio di Theon, con grande delusione di Bran.',
    },
  },
  brBJojen120: {
    character: 'jojen-reed',
    type: { en: 'Greenseer', it: 'Veggente verde' },
    summary: {
      en: 'The Reed boy whose dream has come true: the sea has come to Winterfell.',
      it: 'Il ragazzo dei Reed il cui sogno si è avverato: il mare è arrivato a Grande Inverno.',
    },
  },
  brBLuwin143: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who lies dying in the godswood. He tells Bran to be strong, as his father’s son.',
      it: 'Il maestro che giace morente nel parco degli dèi. Dice a Bran di essere forte, come figlio di suo padre.',
    },
  },
  brBOsha143: {
    character: 'osha',
    type: { en: 'Wildling servant', it: 'Serva dei bruti' },
    summary: {
      en: 'The wildling servant who will take Rickon along the kingsroad while Bran goes north.',
      it: 'La serva dei bruti che porterà Rickon lungo la strada del re mentre Bran va a nord.',
    },
  },
  brBJojen143: {
    character: 'jojen-reed',
    type: { en: 'Greenseer', it: 'Veggente verde' },
    summary: {
      en: 'The Reed boy who wakes him from three days as Summer, and goes north with him.',
      it: 'Il ragazzo dei Reed che lo sveglia dopo tre giorni passati come Estate, e va a nord con lui.',
    },
  },
  brBMeera143: {
    character: 'meera-reed',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'The Reed girl who goes north with him.',
      it: 'La ragazza dei Reed che va a nord con lui.',
    },
  },
  brBHodor143: {
    character: 'hodor',
    type: { en: 'Carrier', it: 'Chi lo porta' },
    summary: {
      en: 'Hodor, who moves the stone from the crypt door and goes north with him.',
      it: 'Hodor, che sposta la pietra dalla porta della cripta e va a nord con lui.',
    },
  },
  riShowBran16: {
    character: 'bran-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, who yields Winterfell to Theon and pleads with him for Rodrik’s life.',
      it: 'Suo fratello, che cede Grande Inverno a Theon e lo supplica di risparmiare Rodrik.',
    },
  },
  riShowRodrik: {
    character: 'rodrik-cassel',
    type: { en: 'Castellan', it: 'Castellano' },
    summary: {
      en: 'The knight he and Bran beg Theon to spare. He is beheaded in front of them.',
      it: 'Il cavaliere che lui e Bran pregano Theon di risparmiare. Viene decapitato davanti a loro.',
    },
  },
  riShowOsha16: {
    character: 'osha',
    type: { en: 'Rescuer', it: 'Chi lo salva' },
    summary: {
      en: 'The wildling servant who leads him out of Winterfell with Bran.',
      it: 'La serva dei bruti che lo porta fuori da Grande Inverno insieme a Bran.',
    },
  },
  riShowBran20: {
    character: 'bran-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, who hides with him in the crypts. They come out to find Winterfell burning.',
      it: 'Suo fratello, che si nasconde con lui nelle cripte. Escono e trovano Grande Inverno in fiamme.',
    },
  },
  riShowOsha20: {
    character: 'osha',
    type: { en: 'Wildling servant', it: 'Serva dei bruti' },
    summary: {
      en: 'The wildling servant who hid them in the crypts and stays with them.',
      it: 'La serva dei bruti che li ha nascosti nelle cripte e resta con loro.',
    },
  },
  riShowLuwin20: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester they find dying in the godswood.',
      it: 'Il maestro che trovano morente nel parco degli dèi.',
    },
  },
  riBBran95: {
    character: 'bran-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, who sits beside him on the dais at the harvest feast.',
      it: 'Suo fratello, che siede accanto a lui sul palco al banchetto del raccolto.',
    },
  },
  riBLittle95: {
    character: 'little-walder-frey',
    type: { en: 'Playmate', it: 'Compagno di giochi' },
    summary: {
      en: 'The ward Shaggydog bit. At the feast Rickon screams happily with him and his cousin.',
      it: 'Il pupillo che Cagnaccio ha morso. Al banchetto Rickon strilla felice con lui e con suo cugino.',
    },
  },
  riBBig95: {
    character: 'big-walder-frey',
    type: { en: 'Playmate', it: 'Compagno di giochi' },
    summary: {
      en: 'The other Frey ward, who plays with him and Little Walder.',
      it: 'L’altro pupillo dei Frey, che gioca con lui e con Little Walder.',
    },
  },
  riBShaggydog95: {
    character: 'shaggydog',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'His black direwolf, kept in the godswood because he was bad.',
      it: 'Il suo metalupo nero, tenuto nel parco degli dèi perché è stato cattivo.',
    },
  },
  riBJojen95: {
    character: 'jojen-reed',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The Reed boy who asks where the wolves are. Rickon tells him they are in the godswood.',
      it: 'Il ragazzo dei Reed che chiede dove siano i lupi. Rickon gli risponde che sono nel parco degli dèi.',
    },
  },
  riBBran124: {
    character: 'bran-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, missing from his bed the same night.',
      it: 'Suo fratello, sparito dal letto la stessa notte.',
    },
  },
  riBOsha124: {
    character: 'osha',
    type: { en: 'Wildling servant', it: 'Serva dei bruti' },
    summary: {
      en: 'The wildling servant missing with him. Theon reasons she has to carry him.',
      it: 'La serva dei bruti scomparsa con lui. Theon ragiona che debba portarlo in braccio.',
    },
  },
  riBShaggydog124: {
    character: 'shaggydog',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'His direwolf, gone from the godswood the same night.',
      it: 'Il suo metalupo, sparito dal parco degli dèi la stessa notte.',
    },
  },
  riBOsha143: {
    character: 'osha',
    type: { en: 'Guardian', it: 'Custode' },
    summary: {
      en: 'The wildling servant who will take him and Shaggydog along the kingsroad, apart from Bran.',
      it: 'La serva dei bruti che porterà lui e Cagnaccio lungo la strada del re, separati da Bran.',
    },
  },
  riBShaggydog143: {
    character: 'shaggydog',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'His direwolf, who goes with him and Osha.',
      it: 'Il suo metalupo, che va con lui e con Osha.',
    },
  },
  riBBran143: {
    character: 'bran-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, who goes north without him: Luwin said the two must be kept apart.',
      it: 'Suo fratello, che va a nord senza di lui: Luwin ha detto che i due devono essere separati.',
    },
  },
  thShowRobb11: {
    character: 'robb-stark',
    type: { en: 'King he serves', it: 'Re che serve' },
    summary: {
      en: 'The king he asks to send him to Pyke, to win his father’s fleet.',
      it: 'Il re a cui chiede di mandarlo a Pyke, per ottenere la flotta di suo padre.',
    },
  },
  thShowCatelyn11: {
    character: 'catelyn-stark',
    type: { en: 'Doubter', it: 'Chi dubita' },
    summary: {
      en: 'Robb’s mother, who warns that Balon cannot be trusted after his rebellion.',
      it: 'La madre di Robb, che avverte che di Balon non ci si può fidare dopo la sua ribellione.',
    },
  },
  thShowBalon12: {
    character: 'balon-greyjoy',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who doubts his loyalty, refuses Robb’s offer and says no one will give him a crown.',
      it: 'Suo padre, che dubita della sua lealtà, rifiuta l’offerta di Robb e dice che nessuno gli darà una corona.',
    },
  },
  thShowAsha12: {
    character: 'asha-greyjoy',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, whom he took for a stranger on the ride to Pyke. Balon holds her up against him.',
      it: 'Sua sorella, che ha scambiato per un’estranea durante il viaggio fino a Pyke. Balon la mette sopra di lui.',
    },
  },
  thShowBran16: {
    character: 'bran-stark',
    type: { en: 'Boy he forces to yield', it: 'Ragazzo costretto a cedere' },
    summary: {
      en: 'The Stark boy he forces to give up Winterfell by threatening his people.',
      it: 'Il ragazzo Stark che costringe a cedere Grande Inverno minacciando la sua gente.',
    },
  },
  thShowRodrik16: {
    character: 'rodrik-cassel',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The knight his men capture. Theon has him executed, and needs four blows to do it.',
      it: 'Il cavaliere catturato dai suoi uomini. Theon lo fa giustiziare, e gli servono quattro colpi.',
    },
  },
  thShowDagmer16: {
    character: 'dagmer',
    type: { en: 'First mate', it: 'Secondo di bordo' },
    summary: {
      en: 'His first mate, who tells him he must kill Rodrik or lose his men’s respect.',
      it: 'Il suo secondo di bordo, che gli dice di dover uccidere Rodrik o perdere il rispetto dei suoi uomini.',
    },
  },
  thShowOsha16: {
    character: 'osha',
    type: { en: 'Wildling servant', it: 'Serva dei bruti' },
    summary: {
      en: 'The wildling servant he sleeps with. She slips out while he sleeps and frees Bran and Rickon.',
      it: 'La serva dei bruti con cui passa la notte. Lei esce di nascosto mentre dorme e libera Bran e Rickon.',
    },
  },
  thShowLuwin20: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who tells him to take the black, and who is stabbed trying to stop Theon’s own men.',
      it: 'Il maestro che gli dice di vestire il nero, e che viene trafitto mentre cerca di fermare gli uomini di Theon.',
    },
  },
  thShowDagmer20: {
    character: 'dagmer',
    type: { en: 'First mate', it: 'Secondo di bordo' },
    summary: {
      en: 'His first mate, who knocks him out when the ironmen turn on him.',
      it: 'Il suo secondo di bordo, che lo stordisce quando gli uomini di ferro si rivoltano contro di lui.',
    },
  },
  thBBalon85: {
    character: 'balon-greyjoy',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who burns Robb’s letter and strikes him. Balon means to take a crown by conquest, not as a gift.',
      it: 'Suo padre, che brucia la lettera di Robb e lo colpisce. Balon vuole prendere una corona con la conquista, non riceverla in dono.',
    },
  },
  thBAeron85: {
    character: 'aeron-greyjoy',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, the priest of the Drowned God, who meets him at Lordsport and takes him to Pyke.',
      it: 'Suo zio, il sacerdote del Dio Abissale, che lo accoglie a Lordsport e lo porta a Pyke.',
    },
  },
  thBAsha98: {
    character: 'asha-greyjoy',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, whom he took for a stranger named Esgred and flirted with all the way to Pyke. She shows him up at the feast.',
      it: 'Sua sorella, che ha scambiato per una certa Esgred e con cui ha flirtato fino a Pyke. Lei lo umilia al banchetto.',
    },
  },
  thBBalon98: {
    character: 'balon-greyjoy',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who will not hear his plans and sends him to raid the coast.',
      it: 'Suo padre, che non vuole ascoltare i suoi piani e lo manda a razziare la costa.',
    },
  },
  thBVictarion98: {
    character: 'victarion-greyjoy',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, who lent him a steersman for his new ship.',
      it: 'Suo zio, che gli ha prestato un timoniere per la sua nuova nave.',
    },
  },
  thBWex98: {
    character: 'wex-pyke',
    type: { en: 'Squire', it: 'Scudiero' },
    summary: {
      en: 'His squire, who smirks when Asha makes a fool of him.',
      it: 'Il suo scudiero, che ghigna quando Asha lo mette in ridicolo.',
    },
  },
  thBAeron98: {
    character: 'aeron-greyjoy',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, who is to bless his new ship and sail on the raid with him.',
      it: 'Suo zio, che dovrà benedire la sua nuova nave e salpare con lui per l’incursione.',
    },
  },
  thBBran120: {
    character: 'bran-stark',
    type: { en: 'Boy he overpowers', it: 'Ragazzo sopraffatto' },
    summary: {
      en: 'The Stark boy whose castle he takes. He tells Bran to make the people yield.',
      it: 'Il ragazzo Stark di cui prende il castello. Gli dice di far arrendere la sua gente.',
    },
  },
  thBMikken120: {
    character: 'mikken',
    type: { en: 'Smith', it: 'Fabbro' },
    summary: {
      en: 'The Winterfell smith who refuses to kneel and bleeds to death.',
      it: 'Il fabbro di Grande Inverno che si rifiuta di inginocchiarsi e muore dissanguato.',
    },
  },
  thBOsha120: {
    character: 'osha',
    type: { en: 'Wildling servant', it: 'Serva dei bruti' },
    summary: {
      en: 'The wildling woman who joins his service.',
      it: 'La donna dei bruti che passa al suo servizio.',
    },
  },
  thBOsha124: {
    character: 'osha',
    type: { en: 'Wildling servant', it: 'Serva dei bruti' },
    summary: {
      en: 'The wildling woman he blames for killing a guard and freeing the boys and the wolves. He will not spare her.',
      it: 'La donna dei bruti che ritiene colpevole di aver ucciso una guardia e liberato i ragazzi e i lupi. Non la risparmierà.',
    },
  },
  thBLuwin124: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester he takes on the hunt for the boys, because he dares not leave him behind. Luwin asks him for mercy.',
      it: 'Il maestro che porta con sé nella caccia ai ragazzi, perché non osa lasciarlo al castello. Luwin gli chiede di essere clemente.',
    },
  },
  thBFarlen124: {
    character: 'farlen',
    type: { en: 'Kennelmaster', it: 'Maestro dei canili' },
    summary: {
      en: 'His kennelmaster, who says the dogs cannot be tracking the wrong wolves.',
      it: 'Il suo maestro dei canili, che dice che i cani non possono seguire i lupi sbagliati.',
    },
  },
  thBWex124: {
    character: 'wex-pyke',
    type: { en: 'Squire', it: 'Scudiero' },
    summary: {
      en: 'His squire, who finds the Stark boys’ beds empty.',
      it: 'Il suo scudiero, che trova vuoti i letti dei ragazzi Stark.',
    },
  },
  thBLorren124: {
    character: 'black-lorren',
    type: { en: 'Raider', it: 'Predone' },
    summary: {
      en: 'The ironman who shows him the guards killed at the Hunter’s Gate.',
      it: 'L’uomo di ferro che gli mostra le guardie uccise alla Porta del Cacciatore.',
    },
  },
  thBAsha130: {
    character: 'asha-greyjoy',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, who reaches Winterfell with twenty men. She says he should have razed it, and offers to take him home. He refuses.',
      it: 'Sua sorella, che arriva a Grande Inverno con venti uomini. Gli dice che avrebbe dovuto raderlo al suolo, e si offre di portarlo a casa. Lui rifiuta.',
    },
  },
  thBFarlen130: {
    character: 'farlen',
    type: { en: 'Kennelmaster', it: 'Maestro dei canili' },
    summary: {
      en: 'The kennelmaster he beheaded to blame someone for three deaths, in four blows.',
      it: 'Il maestro dei canili che ha decapitato per avere un colpevole di tre morti, in quattro colpi.',
    },
  },
  thBDagmer130: {
    character: 'dagmer',
    type: { en: 'Raider', it: 'Predone' },
    summary: {
      en: 'The captain he sent against Torrhen’s Square, who has lost the fight there.',
      it: 'Il capitano che ha mandato contro Piazza di Torrhen, e che ha perso lo scontro.',
    },
  },
  thBLuwin130: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who brings him a sleeping draught after his nightmare. Theon dares not drink it.',
      it: 'Il maestro che gli porta un sonnifero dopo un incubo. Theon non osa berlo.',
    },
  },
  thBWex130: {
    character: 'wex-pyke',
    type: { en: 'Squire', it: 'Scudiero' },
    summary: {
      en: 'His squire, who wakes him when Asha arrives.',
      it: 'Il suo scudiero, che lo sveglia quando arriva Asha.',
    },
  },
  thBLuwin140: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who tells him to yield, and then to take the black. He is cut down in the sack.',
      it: 'Il maestro che gli dice di arrendersi, e poi di vestire il nero. Viene abbattuto nel saccheggio.',
    },
  },
  thBRodrik140: {
    character: 'rodrik-cassel',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The northern knight he meets at the parley. He answers Rodrik’s terms by threatening to hang his daughter at sunset.',
      it: 'Il cavaliere del Nord che incontra al parlamento. Risponde alle condizioni di Rodrik minacciando di impiccare sua figlia al tramonto.',
    },
  },
  thBRamsay140: {
    character: 'ramsay-snow',
    type: { en: 'Man he trusted', it: 'Uomo di cui si fidava' },
    summary: {
      en: 'The Dreadfort leader who lifts his helm: the man Theon knew as Reek is dead, and he is Ramsay Snow.',
      it: 'Il capo degli uomini del Dreadfort che si toglie l’elmo: l’uomo che Theon conosceva come Reek è morto, e lui è Ramsay Snow.',
    },
  },
  thBLorren140: {
    character: 'black-lorren',
    type: { en: 'Loyal raider', it: 'Predone fedele' },
    summary: {
      en: 'The ironman who stays and tells him to put the castle folk to the sword, then brings Rodrik’s daughter to the wall.',
      it: 'L’uomo di ferro che resta e gli dice di passare a fil di spada la gente del castello, poi porta la figlia di Rodrik sulle mura.',
    },
  },
  thBWex140: {
    character: 'wex-pyke',
    type: { en: 'Squire', it: 'Scudiero' },
    summary: {
      en: 'His squire, the first to step over to his side when he offers the men a choice.',
      it: 'Il suo scudiero, il primo a schierarsi dalla sua parte quando offre agli uomini una scelta.',
    },
  },
  luShowTheon16: {
    character: 'theon-greyjoy',
    type: { en: 'Ward turned enemy', it: 'Pupillo diventato nemico' },
    summary: {
      en: 'The ward Winterfell raised, who takes the castle while Luwin frantically sends off a raven.',
      it: 'Il pupillo cresciuto a Grande Inverno, che prende il castello mentre Luwin spedisce in fretta un corvo.',
    },
  },
  luShowBran16: {
    character: 'bran-stark',
    type: { en: 'Lord he serves', it: 'Signore che serve' },
    summary: {
      en: 'The boy lord, who yields the castle to spare his people.',
      it: 'Il giovane signore, che cede il castello per risparmiare la sua gente.',
    },
  },
  luShowRodrik16: {
    character: 'rodrik-cassel',
    type: { en: 'Castellan', it: 'Castellano' },
    summary: {
      en: 'The knight Theon beheads in front of the castle.',
      it: 'Il cavaliere che Theon decapita davanti al castello.',
    },
  },
  luShowOsha18: {
    character: 'osha',
    type: { en: 'Wildling servant', it: 'Serva dei bruti' },
    summary: {
      en: 'The wildling servant he follows into the crypts. She tells him how she hid the boys there, and he knows the burned bodies are not theirs.',
      it: 'La serva dei bruti che segue nelle cripte. Lei gli racconta come ha nascosto i ragazzi lì, e lui sa che i corpi bruciati non sono i loro.',
    },
  },
  luShowBran18: {
    character: 'bran-stark',
    type: { en: 'Lord he serves', it: 'Signore che serve' },
    summary: {
      en: 'The boy lord, who overhears them from behind a corner.',
      it: 'Il giovane signore, che li ascolta da dietro un angolo.',
    },
  },
  luShowTheon18: {
    character: 'theon-greyjoy',
    type: { en: 'Ward turned enemy', it: 'Pupillo diventato nemico' },
    summary: {
      en: 'The ward who hung two burned bodies on the walls and let the castle think they were the boys.',
      it: 'Il pupillo che ha appeso due corpi bruciati alle mura e ha lasciato credere al castello che fossero i ragazzi.',
    },
  },
  luShowTheon20: {
    character: 'theon-greyjoy',
    type: { en: 'Ward turned enemy', it: 'Pupillo diventato nemico' },
    summary: {
      en: 'The prince he advises to take the black. Dagmer stabs Luwin when he tries to stop the ironmen from taking Theon.',
      it: 'Il principe a cui consiglia di vestire il nero. Dagmer trafigge Luwin quando cerca di impedire agli uomini di ferro di portare via Theon.',
    },
  },
  luShowBran20: {
    character: 'bran-stark',
    type: { en: 'Lord he serves', it: 'Signore che serve' },
    summary: {
      en: 'The boy lord, whom he tells to go north to the Wall as he dies.',
      it: 'Il giovane signore, a cui dice di andare a nord, alla Barriera, mentre muore.',
    },
  },
  luShowOsha20: {
    character: 'osha',
    type: { en: 'Wildling servant', it: 'Serva dei bruti' },
    summary: {
      en: 'The wildling servant he asks for a quick death.',
      it: 'La serva dei bruti a cui chiede una morte rapida.',
    },
  },
  luBBran90: {
    character: 'bran-stark',
    type: { en: 'Lord he serves', it: 'Signore che serve' },
    summary: {
      en: 'The boy lord, whom he reminds to speak only when spoken to. Luwin sits beside him at the audiences.',
      it: 'Il giovane signore, a cui ricorda di parlare solo quando gli viene rivolta la parola. Luwin siede accanto a lui alle udienze.',
    },
  },
  luBRodrik90: {
    character: 'rodrik-cassel',
    type: { en: 'Castellan', it: 'Castellano' },
    summary: {
      en: 'The castellan who sits with him at Bran’s side and answers for the castle.',
      it: 'Il castellano che siede con lui accanto a Bran e risponde per il castello.',
    },
  },
  luBWyman90: {
    character: 'wyman-manderly',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The Lord of White Harbor, who comes for the harvest feast with business for Bran.',
      it: 'Il lord di Porto Bianco, venuto per il banchetto del raccolto con affari da discutere con Bran.',
    },
  },
  luBDonella90: {
    character: 'donella-hornwood',
    type: { en: 'Widow', it: 'Vedova' },
    summary: {
      en: 'The grieving lady whose lands need an heir, or many will claim them.',
      it: 'La vedova in lutto le cui terre hanno bisogno di un erede, o in molti le reclameranno.',
    },
  },
  luBLittle90: {
    character: 'little-walder-frey',
    type: { en: 'Ward', it: 'Pupillo' },
    summary: {
      en: 'The ward he scolds for mocking Hodor. Little Walder stays haughty.',
      it: 'Il pupillo che rimprovera per aver preso in giro Hodor. Little Walder resta altezzoso.',
    },
  },
  luBTheon124: {
    character: 'theon-greyjoy',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The prince who takes him on the hunt for Bran and Rickon. Luwin asks him to be merciful, to the boys and to the Reeds.',
      it: 'Il principe che lo porta con sé nella caccia a Bran e Rickon. Luwin gli chiede clemenza, per i ragazzi e per i Reed.',
    },
  },
  luBBran143: {
    character: 'bran-stark',
    type: { en: 'Boy he is glad to find', it: 'Ragazzo felice di ritrovare' },
    summary: {
      en: 'The boy lord he is glad to find alive. He tells Bran to be strong, as his father’s son.',
      it: 'Il giovane signore che è felice di ritrovare vivo. Dice a Bran di essere forte, come figlio di suo padre.',
    },
  },
  luBOsha143: {
    character: 'osha',
    type: { en: 'Wildling servant', it: 'Serva dei bruti' },
    summary: {
      en: 'The wildling woman he tells not to send the boys off together.',
      it: 'La donna dei bruti a cui dice di non mandare via i ragazzi insieme.',
    },
  },
  luBTheon143: {
    character: 'theon-greyjoy',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The prince he never told that the bodies Theon showed were not Bran and Rickon.',
      it: 'Il principe a cui non ha mai detto che i corpi mostrati da Theon non erano quelli di Bran e Rickon.',
    },
  },
  osShowTheon16: {
    character: 'theon-greyjoy',
    type: { en: 'Man she deceives', it: 'Uomo che inganna' },
    summary: {
      en: 'The prince she sleeps with, then leaves in his bed to free Bran and Rickon, killing a guard on the way.',
      it: 'Il principe con cui passa la notte, e che lascia nel letto per liberare Bran e Rickon, uccidendo una guardia lungo la strada.',
    },
  },
  osShowBran16: {
    character: 'bran-stark',
    type: { en: 'Boy she frees', it: 'Ragazzo che libera' },
    summary: {
      en: 'The boy lord she frees from Theon’s men and leads out of the castle.',
      it: 'Il giovane signore che libera dagli uomini di Theon e porta fuori dal castello.',
    },
  },
  osShowRickon16: {
    character: 'rickon-stark',
    type: { en: 'Boy she frees', it: 'Ragazzo che libera' },
    summary: {
      en: 'The youngest Stark, whom she leads out with Bran.',
      it: 'Il più giovane degli Stark, che porta fuori insieme a Bran.',
    },
  },
  osShowHodor16: {
    character: 'hodor',
    type: { en: 'Companion', it: 'Compagno di viaggio' },
    summary: {
      en: 'Hodor, who carries Bran out of the castle with her.',
      it: 'Hodor, che porta Bran fuori dal castello insieme a lei.',
    },
  },
  osShowLuwin18: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who follows her into the crypts. She tells him how she doubled back through a stream to hide the boys.',
      it: 'Il maestro che la segue nelle cripte. Lei gli racconta come è tornata indietro lungo un ruscello per nascondere i ragazzi.',
    },
  },
  osShowBran18: {
    character: 'bran-stark',
    type: { en: 'Boy she hides', it: 'Ragazzo che nasconde' },
    summary: {
      en: 'The boy lord she hides in the crypts. He overhears what happened to the orphans from the farm.',
      it: 'Il giovane signore che nasconde nelle cripte. Lui sente cos’è successo agli orfani della fattoria.',
    },
  },
  osShowRickon18: {
    character: 'rickon-stark',
    type: { en: 'Boy she hides', it: 'Ragazzo che nasconde' },
    summary: {
      en: 'The youngest Stark, hidden in the crypts with Bran.',
      it: 'Il più giovane degli Stark, nascosto nelle cripte con Bran.',
    },
  },
  osShowHodor18: {
    character: 'hodor',
    type: { en: 'Companion', it: 'Compagno di viaggio' },
    summary: {
      en: 'Hodor, who hides in the crypts with the boys.',
      it: 'Hodor, che si nasconde nelle cripte con i ragazzi.',
    },
  },
  osShowLuwin20: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The dying maester, who asks her for a quick death.',
      it: 'Il maestro morente, che le chiede una morte rapida.',
    },
  },
  osBBran78: {
    character: 'bran-stark',
    type: { en: 'Boy she carries', it: 'Ragazzo che porta' },
    summary: {
      en: 'The boy lord she carries to bed. She tells him not to fight the wolf dreams.',
      it: 'Il giovane signore che porta a letto. Gli dice di non combattere i sogni di lupo.',
    },
  },
  osBLuwin78: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester she says knows less than the direwolves.',
      it: 'Il maestro che, a suo dire, sa meno dei metalupi.',
    },
  },
  osBTheon120: {
    character: 'theon-greyjoy',
    type: { en: 'Lord she serves', it: 'Signore che serve' },
    summary: {
      en: 'The prince whose service she joins when he takes Winterfell.',
      it: 'Il principe al cui servizio passa quando prende Grande Inverno.',
    },
  },
  osBBran120: {
    character: 'bran-stark',
    type: { en: 'Boy she betrays', it: 'Ragazzo che tradisce' },
    summary: {
      en: 'The boy lord, disappointed that she joins Theon.',
      it: 'Il giovane signore, deluso dal fatto che lei passi con Theon.',
    },
  },
  osBTheon124: {
    character: 'theon-greyjoy',
    type: { en: 'Man she hunts', it: 'Uomo che la caccia' },
    summary: {
      en: 'The prince who blames her for freeing the boys and the wolves, and swears he will not spare her.',
      it: 'Il principe che la ritiene colpevole di aver liberato i ragazzi e i lupi, e giura di non risparmiarla.',
    },
  },
  osBBran124: {
    character: 'bran-stark',
    type: { en: 'Boy she saves', it: 'Ragazzo che salva' },
    summary: {
      en: 'The boy lord who vanishes from his bed with her, Rickon and the Reeds.',
      it: 'Il giovane signore che sparisce dal letto con lei, con Rickon e con i Reed.',
    },
  },
  osBRickon124: {
    character: 'rickon-stark',
    type: { en: 'Boy she saves', it: 'Ragazzo che salva' },
    summary: {
      en: 'The youngest Stark, who vanishes the same night.',
      it: 'Il più giovane degli Stark, sparito la stessa notte.',
    },
  },
  osBBran143: {
    character: 'bran-stark',
    type: { en: 'Boy she guards', it: 'Ragazzo che custodisce' },
    summary: {
      en: 'The boy lord she brings out of the crypts. He goes north without her.',
      it: 'Il giovane signore che porta fuori dalle cripte. Lui va a nord senza di lei.',
    },
  },
  osBRickon143: {
    character: 'rickon-stark',
    type: { en: 'Boy she guards', it: 'Ragazzo che custodisce' },
    summary: {
      en: 'The youngest Stark, whom she will take along the kingsroad with Shaggydog.',
      it: 'Il più giovane degli Stark, che porterà lungo la strada del re con Cagnaccio.',
    },
  },
  osBLuwin143: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The dying maester, who asks her not to send the boys off together, and then asks her for a boon.',
      it: 'Il maestro morente, che le chiede di non mandare via i ragazzi insieme, e poi di fargli un favore.',
    },
  },
  hoShowBran16: {
    character: 'bran-stark',
    type: { en: 'Boy he carries', it: 'Ragazzo che porta' },
    summary: {
      en: 'The boy he carries out of Winterfell when Osha frees them.',
      it: 'Il ragazzo che porta fuori da Grande Inverno quando Osha li libera.',
    },
  },
  hoShowOsha16: {
    character: 'osha',
    type: { en: 'Companion', it: 'Compagna di viaggio' },
    summary: {
      en: 'The wildling who leads them out of the castle.',
      it: 'La donna dei bruti che li porta fuori dal castello.',
    },
  },
  hoShowRickon16: {
    character: 'rickon-stark',
    type: { en: 'Companion', it: 'Compagno di viaggio' },
    summary: {
      en: 'The youngest Stark, led out with them.',
      it: 'Il più giovane degli Stark, portato fuori con loro.',
    },
  },
  hoShowBran20: {
    character: 'bran-stark',
    type: { en: 'Boy he carries', it: 'Ragazzo che porta' },
    summary: {
      en: 'The boy he carries out of the crypts into a burning castle.',
      it: 'Il ragazzo che porta fuori dalle cripte in un castello in fiamme.',
    },
  },
  hoBBran90: {
    character: 'bran-stark',
    type: { en: 'Boy he carries', it: 'Ragazzo che porta' },
    summary: {
      en: 'The boy lord he dresses and carries downstairs in his basket.',
      it: 'Il giovane signore che veste e porta giù per le scale nel suo cesto.',
    },
  },
  hoBLittle90: {
    character: 'little-walder-frey',
    type: { en: 'Ward who mocks him', it: 'Pupillo che lo deride' },
    summary: {
      en: 'The ward who calls him an ugly horse and bumps him with his own mount.',
      it: 'Il pupillo che lo chiama brutto cavallo e lo urta con il proprio destriero.',
    },
  },
  hoBLuwin90: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who tells the wards off for mocking him.',
      it: 'Il maestro che sgrida i pupilli per averlo deriso.',
    },
  },
  hoBBran102: {
    character: 'bran-stark',
    type: { en: 'Boy he carries', it: 'Ragazzo che porta' },
    summary: {
      en: 'The boy lord who calls him to chase the wolves away. Hodor does it gleefully.',
      it: 'Il giovane signore che lo chiama per scacciare i lupi. Hodor lo fa con gioia.',
    },
  },
  hoBJojen102: {
    character: 'jojen-reed',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The Reed boy, who climbs a tree when the wolves attack. Hodor drives them off.',
      it: 'Il ragazzo dei Reed, che si arrampica su un albero quando i lupi attaccano. Hodor li scaccia.',
    },
  },
  hoBMeera102: {
    character: 'meera-reed',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The Reed girl, who climbs a tree after her brother when the wolves attack.',
      it: 'La ragazza dei Reed, che si arrampica su un albero dietro al fratello quando i lupi attaccano.',
    },
  },
  hoBBran143: {
    character: 'bran-stark',
    type: { en: 'Boy he carries', it: 'Ragazzo che porta' },
    summary: {
      en: 'The boy lord he carries north, after moving the stone from the crypt door.',
      it: 'Il giovane signore che porta a nord, dopo aver spostato la pietra dalla porta della cripta.',
    },
  },
  hoBJojen143: {
    character: 'jojen-reed',
    type: { en: 'Companion', it: 'Compagno di viaggio' },
    summary: {
      en: 'The Reed boy who goes north with them.',
      it: 'Il ragazzo dei Reed che va a nord con loro.',
    },
  },
  hoBMeera143: {
    character: 'meera-reed',
    type: { en: 'Companion', it: 'Compagna di viaggio' },
    summary: {
      en: 'The Reed girl who goes north with them.',
      it: 'La ragazza dei Reed che va a nord con loro.',
    },
  },
  hoBOsha143: {
    character: 'osha',
    type: { en: 'Companion', it: 'Compagna di viaggio' },
    summary: {
      en: 'The wildling woman who hid with them in the crypts.',
      it: 'La donna dei bruti che si è nascosta con loro nelle cripte.',
    },
  },
  nanBran95: {
    character: 'bran-stark',
    type: { en: 'Boy lord', it: 'Giovane signore' },
    summary: {
      en: 'The boy lord, who sends her sweets from the feast because he loves her.',
      it: 'Il giovane signore, che le manda dei dolci dal banchetto perché le vuole bene.',
    },
  },
  nanHodor95: {
    character: 'hodor',
    type: { en: 'Fellow favourite', it: 'Altro prediletto' },
    summary: {
      en: 'Hodor, who gets sweets from Bran too.',
      it: 'Hodor, che riceve dolci da Bran anche lui.',
    },
  },
  suShowBran13: {
    character: 'bran-stark',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy he belongs to. Bran dreams through his eyes and sees himself asleep.',
      it: 'Il ragazzo a cui appartiene. Bran sogna attraverso i suoi occhi e vede se stesso addormentato.',
    },
  },
  suShowHodor13: {
    character: 'hodor',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'Hodor, whom he follows into Bran’s room to wake him.',
      it: 'Hodor, che segue nella stanza di Bran per svegliarlo.',
    },
  },
  suBBran78: {
    character: 'bran-stark',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy he belongs to. Summer howls with grief, and Bran howls back from the window.',
      it: 'Il ragazzo a cui appartiene. Estate ulula di dolore, e Bran gli risponde dalla finestra.',
    },
  },
  suBShaggydog78: {
    character: 'shaggydog',
    type: { en: 'Fellow direwolf', it: 'Altro metalupo' },
    summary: {
      en: 'Rickon’s direwolf, whose howls are savage where his are sad.',
      it: 'Il metalupo di Rickon, i cui ululati sono selvaggi dove i suoi sono tristi.',
    },
  },
  suBBran102: {
    character: 'bran-stark',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy he belongs to. Meera says that Bran and Summer are part of each other.',
      it: 'Il ragazzo a cui appartiene. Meera dice che Bran ed Estate sono parte l’uno dell’altro.',
    },
  },
  suBJojen102: {
    character: 'jojen-reed',
    type: { en: 'Boy he growls at', it: 'Ragazzo a cui ringhia' },
    summary: {
      en: 'The Reed boy who touches him at the feast, and whom he growls at when he asks if Bran falls every night.',
      it: 'Il ragazzo dei Reed che lo tocca al banchetto, e a cui ringhia quando chiede se Bran cada ogni notte.',
    },
  },
  suBMeera102: {
    character: 'meera-reed',
    type: { en: 'Girl he tangles', it: 'Ragazza che lo cattura' },
    summary: {
      en: 'The Reed girl whose net tangles him in the godswood. He does not bite her.',
      it: 'La ragazza dei Reed la cui rete lo imprigiona nel parco degli dèi. Lui non la morde.',
    },
  },
  shShowRickon16: {
    character: 'rickon-stark',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy he belongs to, freed with Bran and led out of Winterfell.',
      it: 'Il ragazzo a cui appartiene, liberato con Bran e portato fuori da Grande Inverno.',
    },
  },
  shShowOsha16: {
    character: 'osha',
    type: { en: 'Rescuer', it: 'Chi lo salva' },
    summary: {
      en: 'The wildling who frees him and Summer.',
      it: 'La donna dei bruti che libera lui ed Estate.',
    },
  },
  shBRickon95: {
    character: 'rickon-stark',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy he belongs to. Shaggydog obeyed him until Little Walder hit Rickon with a stick, and since the bite he is kept in the godswood.',
      it: 'Il ragazzo a cui appartiene. Cagnaccio gli obbediva finché Little Walder non ha colpito Rickon con un bastone, e dal morso è tenuto nel parco degli dèi.',
    },
  },
  shBLittle95: {
    character: 'little-walder-frey',
    type: { en: 'Boy he bit', it: 'Ragazzo che ha morso' },
    summary: {
      en: 'The ward he bit after Little Walder hit Rickon.',
      it: 'Il pupillo che ha morso dopo che ha colpito Rickon.',
    },
  },
  shBSummer95: {
    character: 'summer-direwolf',
    type: { en: 'Fellow direwolf', it: 'Altro metalupo' },
    summary: {
      en: 'Bran’s direwolf, penned in the godswood with him.',
      it: 'Il metalupo di Bran, chiuso con lui nel parco degli dèi.',
    },
  },
  shBJojen95: {
    character: 'jojen-reed',
    type: { en: 'Reed boy', it: 'Ragazzo dei Reed' },
    summary: {
      en: 'The Reed boy who says Shaggydog is full of fear and rage.',
      it: 'Il ragazzo dei Reed che dice che Cagnaccio è pieno di paura e di rabbia.',
    },
  },
  shBRickon143: {
    character: 'rickon-stark',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy he goes with along the kingsroad, apart from Bran.',
      it: 'Il ragazzo con cui va lungo la strada del re, lontano da Bran.',
    },
  },
  shBOsha143: {
    character: 'osha',
    type: { en: 'Guardian', it: 'Custode' },
    summary: {
      en: 'The wildling woman who takes him and Rickon along the kingsroad.',
      it: 'La donna dei bruti che porta lui e Rickon lungo la strada del re.',
    },
  },
  rdShowRobb11: {
    character: 'robb-stark',
    type: { en: 'King he serves', it: 'Re che serve' },
    summary: {
      en: 'The King in the North, who sends him to Winterfell in Catelyn’s place.',
      it: 'Il Re del Nord, che lo manda a Grande Inverno al posto di Catelyn.',
    },
  },
  rdShowBran11: {
    character: 'bran-stark',
    type: { en: 'Boy lord', it: 'Giovane signore' },
    summary: {
      en: 'The boy lord he serves at Winterfell.',
      it: 'Il giovane signore che serve a Grande Inverno.',
    },
  },
  rdShowCatelyn11: {
    character: 'catelyn-stark',
    type: { en: 'Lady', it: 'Signora' },
    summary: {
      en: 'The lady who asked to go home to her younger sons. Robb sends Rodrik instead.',
      it: 'La signora che chiedeva di tornare dai figli più piccoli. Robb manda Rodrik al suo posto.',
    },
  },
  rdShowTheon16: {
    character: 'theon-greyjoy',
    type: { en: 'Former pupil', it: 'Ex allievo' },
    summary: {
      en: 'The ward he once trained, who took Winterfell while he was away and beheaded him in four blows.',
      it: 'Il pupillo che aveva addestrato, che ha preso Grande Inverno mentre lui era via e lo ha decapitato in quattro colpi.',
    },
  },
  rdShowBran16: {
    character: 'bran-stark',
    type: { en: 'Boy lord', it: 'Giovane signore' },
    summary: {
      en: 'The boy lord, who pleads for his life.',
      it: 'Il giovane signore, che implora per la sua vita.',
    },
  },
  rdShowRickon16: {
    character: 'rickon-stark',
    type: { en: 'Young lord', it: 'Giovane lord' },
    summary: {
      en: 'The youngest Stark, who pleads with Bran for his life.',
      it: 'Il più giovane degli Stark, che implora insieme a Bran per la sua vita.',
    },
  },
  rdShowDagmer16: {
    character: 'dagmer',
    type: { en: 'Enemy raider', it: 'Predone nemico' },
    summary: {
      en: 'The ironborn captain who insisted Theon execute him.',
      it: 'Il capitano degli uomini di ferro che ha preteso la sua esecuzione da Theon.',
    },
  },
  rdBBran90: {
    character: 'bran-stark',
    type: { en: 'Boy lord', it: 'Giovane signore' },
    summary: {
      en: 'The boy lord whose audiences he sits through at his side. He tells Bran he did well.',
      it: 'Il giovane signore alle cui udienze siede al suo fianco. Dice a Bran che se l’è cavata bene.',
    },
  },
  rdBLuwin90: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester beside Bran at the audiences.',
      it: 'Il maestro accanto a Bran alle udienze.',
    },
  },
  rdBWyman90: {
    character: 'wyman-manderly',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The Lord of White Harbor, who pitches a mint and a fleet for Robb’s kingdom.',
      it: 'Il lord di Porto Bianco, che propone una zecca e una flotta per il regno di Robb.',
    },
  },
  rdBDonella90: {
    character: 'donella-hornwood',
    type: { en: 'Widow', it: 'Vedova' },
    summary: {
      en: 'The widowed lady whose lands he promises to protect. She hints that she would take him as a husband.',
      it: 'La vedova di cui promette di proteggere le terre. Lei lascia capire che lo prenderebbe come marito.',
    },
  },
  rdBDonella109: {
    character: 'donella-hornwood',
    type: { en: 'Widow', it: 'Vedova' },
    summary: {
      en: 'The lady he meant to protect. She was forced to wed Roose Bolton’s bastard, and he returns with a prisoner held for her murder.',
      it: 'La signora che voleva proteggere. È stata costretta a sposare il bastardo di Roose Bolton, e lui torna con un prigioniero accusato di averla uccisa.',
    },
  },
  rdBBran109: {
    character: 'bran-stark',
    type: { en: 'Boy lord', it: 'Giovane signore' },
    summary: {
      en: 'The boy lord who tells him about Jojen’s dream. Rodrik promises not to take Alebelly on the ride against the raiders.',
      it: 'Il giovane signore che gli racconta il sogno di Jojen. Rodrik promette di non portare Alebelly nella cavalcata contro i razziatori.',
    },
  },
  rdBLuwin109: {
    character: 'luwin',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who reports the raiders plundering the coast.',
      it: 'Il maestro che riferisce dei razziatori che saccheggiano la costa.',
    },
  },
  rdBTheon140: {
    character: 'theon-greyjoy',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The prince of Winterfell, who answers his terms by showing his daughter on the wall with a noose around her neck.',
      it: 'Il principe di Grande Inverno, che risponde alle sue condizioni mostrando sulle mura sua figlia con un cappio al collo.',
    },
  },
  rdBRamsay140: {
    character: 'ramsay-snow',
    type: { en: 'Man he trusted', it: 'Uomo di cui si fidava' },
    summary: {
      en: 'The Dreadfort leader whose men he took for allies. They turned on his army, and Ramsay gave Theon his body.',
      it: 'Il capo degli uomini del Dreadfort che aveva scambiato per alleati. Si sono rivoltati contro il suo esercito, e Ramsay ha consegnato il suo corpo a Theon.',
    },
  },
  miBBran109: {
    character: 'bran-stark',
    type: { en: 'Boy lord', it: 'Giovane signore' },
    summary: {
      en: 'The boy lord who comes to the forge to work the bellows for him.',
      it: 'Il giovane signore che viene alla fucina per azionare il mantice al posto suo.',
    },
  },
  miBJojen109: {
    character: 'jojen-reed',
    type: { en: 'Dreamer', it: 'Sognatore' },
    summary: {
      en: 'The Reed boy who dreamed of him drowned. Mikken laughs and says he always wanted to see the sea.',
      it: 'Il ragazzo dei Reed che lo ha sognato annegato. Mikken ride e dice che ha sempre voluto vedere il mare.',
    },
  },
  miBTheon120: {
    character: 'theon-greyjoy',
    type: { en: 'Conqueror', it: 'Conquistatore' },
    summary: {
      en: 'The prince who took the castle. Mikken refused to kneel and drowned in his own blood.',
      it: 'Il principe che ha preso il castello. Mikken si è rifiutato di inginocchiarsi ed è annegato nel proprio sangue.',
    },
  },
  miBBran120: {
    character: 'bran-stark',
    type: { en: 'Boy lord', it: 'Giovane signore' },
    summary: {
      en: 'The boy lord who watched him die.',
      it: 'Il giovane signore che lo ha visto morire.',
    },
  },
  miBJojen120: {
    character: 'jojen-reed',
    type: { en: 'Dreamer', it: 'Sognatore' },
    summary: {
      en: 'The Reed boy whose dream of him drowned came true.',
      it: 'Il ragazzo dei Reed il cui sogno di lui annegato si è avverato.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * King's Landing, the riverlands and the Vale (#1346). The same rules as
 * `links`. Show pins follow the Game of Thrones Wiki's `{{Ref|GOTxxx}}`
 * citations and episode synopses; chapter pins follow the Ice and Fire Wiki's
 * chapter and character pages, the records' own gates and dated steps, and,
 * where neither names a chapter, a later chapter that is safe.
 */
const crown = {
  // Tyrion
  tyrJaime: {
    character: 'jaime-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother, a knight of the Kingsguard.',
      it: 'Suo fratello maggiore, cavaliere della Guardia reale.',
    },
  },
  tyrCersei: {
    character: 'cersei-lannister',
    type: { en: 'Sister', it: 'Sorella' },
    summary: { en: 'His sister, the queen.', it: 'Sua sorella, la regina.' },
  },
  tyrJon: {
    character: 'jon-snow',
    type: { en: 'Young friend', it: 'Giovane amico' },
    summary: {
      en: 'Eddard Stark’s bastard son. Tyrion tells him to wear the word like armour, so that no one can hurt him with it.',
      it: 'Il figlio bastardo di Eddard Stark. Tyrion gli consiglia di indossare quella parola come un’armatura, così nessuno potrà ferirlo con essa.',
    },
  },
  tyrJonWall: {
    character: 'jon-snow',
    type: { en: 'Young friend', it: 'Giovane amico' },
    summary: {
      en: 'Eddard Stark’s bastard son, whom Tyrion has advised to wear the word like armour. Tyrion decides to go north with him to see the Wall.',
      it: 'Il figlio bastardo di Eddard Stark, a cui Tyrion ha consigliato di indossare quella parola come un’armatura. Tyrion decide di andare con lui a nord per vedere la Barriera.',
    },
  },
  tyrJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'The crown prince, his sister’s son. Tyrion slaps him until he agrees to offer the Starks his sympathy over Bran.',
      it: 'Il principe ereditario, figlio di sua sorella. Tyrion lo schiaffeggia finché non accetta di portare agli Stark il suo conforto per Bran.',
    },
  },
  tyrCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Captor', it: 'Carceriera' },
    summary: {
      en: 'Eddard Stark’s wife. At the inn at the crossroads she has him seized, accusing him of trying to have her son Bran killed.',
      it: 'La moglie di Eddard Stark. Alla locanda all’incrocio lo fa arrestare, accusandolo di aver tentato di far uccidere suo figlio Bran.',
    },
  },
  tyrCatelynFreed: {
    character: 'catelyn-stark',
    type: { en: 'Captor', it: 'Carceriera' },
    summary: {
      en: 'Eddard Stark’s wife, who took him prisoner over the attempt on her son Bran. A trial by combat at the Eyrie sets him free.',
      it: 'La moglie di Eddard Stark, che lo ha preso prigioniero per l’attentato al figlio Bran. Un processo per duello al Nido dell’Aquila lo rimette in libertà.',
    },
  },
  tyrLysa: {
    character: 'lysa-arryn',
    type: { en: 'Gaoler', it: 'Carceriera' },
    summary: {
      en: 'Catelyn’s sister, who kept him in a sky cell at the Eyrie until he won a trial by combat.',
      it: 'La sorella di Catelyn, che lo ha tenuto in una cella del cielo al Nido dell’Aquila finché non ha vinto un processo per duello.',
    },
  },
  tyrBronn: {
    character: 'bronn',
    type: { en: 'Champion', it: 'Campione' },
    summary: {
      en: 'A sellsword who fights for him in the trial by combat at the Eyrie and kills Lysa’s knight. Tyrion goes free.',
      it: 'Un mercenario che combatte per lui nel processo per duello al Nido dell’Aquila e uccide il cavaliere di Lysa. Tyrion torna libero.',
    },
  },
  tyrBronnSword: {
    character: 'bronn',
    type: { en: 'Sellsword', it: 'Mercenario' },
    summary: {
      en: 'The sellsword who won him his freedom at the Eyrie and now rides in his pay.',
      it: 'Il mercenario che gli ha fatto riavere la libertà al Nido dell’Aquila e che ora è al suo soldo.',
    },
  },
  tyrShagga: {
    character: 'shagga',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'A warrior of the Stone Crows. In the mountains Tyrion talks him out of killing them, and the clans follow Tyrion instead.',
      it: 'Un guerriero dei Corvi di Pietra. Tra le montagne Tyrion lo convince a non ucciderli, e i clan decidono di seguirlo.',
    },
  },
  tyrTywin: {
    character: 'tywin-lannister',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the lord of Casterly Rock. Tyrion reaches his army with the mountain clans.',
      it: 'Suo padre, il signore di Castel Granito. Tyrion raggiunge il suo esercito con i clan delle montagne.',
    },
  },
  tyrShae: {
    character: 'shae',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'A camp follower Bronn finds for him on the eve of a battle.',
      it: 'Una ragazza al seguito dell’accampamento che Bronn gli trova alla vigilia di una battaglia.',
    },
  },
  tyrTywinHand: {
    character: 'tywin-lannister',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who sends him to King’s Landing as Hand of the King in his place and forbids him to take Shae.',
      it: 'Suo padre, che lo manda ad Approdo del Re come Primo Cavaliere al posto suo e gli proibisce di portare Shae.',
    },
  },
  tyrShaeCourt: {
    character: 'shae',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'The camp follower Bronn found for him. He takes her to King’s Landing against his father’s order.',
      it: 'La ragazza dell’accampamento che Bronn gli ha trovato. La porta ad Approdo del Re contro l’ordine del padre.',
    },
  },
  tyrJaimeCaptive: {
    character: 'jaime-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother, taken prisoner by Robb Stark in battle.',
      it: 'Suo fratello maggiore, fatto prigioniero da Robb Stark in battaglia.',
    },
  },
  tyrCerseiRegent: {
    character: 'cersei-lannister',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, the mother of the new king. His father sends him to court to keep her and her son in check.',
      it: 'Sua sorella, madre del nuovo re. Il padre lo manda a corte per tenere a freno lei e suo figlio.',
    },
  },
  // Cersei
  cerRobert: {
    character: 'robert-baratheon',
    type: { en: 'Husband', it: 'Marito' },
    summary: { en: 'Her husband, the king.', it: 'Suo marito, il re.' },
  },
  cerJaime: {
    character: 'jaime-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, a knight of the Kingsguard.',
      it: 'Suo fratello, cavaliere della Guardia reale.',
    },
  },
  cerJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Her eldest son, the crown prince.',
      it: 'Il suo primogenito, il principe ereditario.',
    },
  },
  cerTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her younger brother, a dwarf.',
      it: 'Il fratello minore, un nano.',
    },
  },
  // Show: "Winter Is Coming". Books: Bran II (chapter 9).
  cerJaimeLover: {
    character: 'jaime-lannister',
    type: { en: 'Brother and lover', it: 'Fratello e amante' },
    summary: {
      en: 'Her brother, who is also her lover. When Bran Stark sees them together, Jaime throws him from the tower.',
      it: 'Suo fratello, che è anche il suo amante. Quando Bran Stark li vede insieme, Jaime lo getta giù dalla torre.',
    },
  },
  cerLady: {
    character: 'lady-direwolf',
    type: {
      en: 'Wolf killed at her demand',
      it: 'Lupa uccisa su sua richiesta',
    },
    summary: {
      en: 'Sansa Stark’s direwolf. Cersei demanded a wolf’s death for Joffrey’s bitten arm, and Lady was killed in Nymeria’s place.',
      it: 'La metalupa di Sansa Stark. Cersei ha preteso la morte di un lupo per il morso al braccio di Joffrey, e Lady è stata uccisa al posto di Nymeria.',
    },
  },
  cerNed: {
    character: 'eddard-stark',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Robert’s Hand. He found out that her children are Jaime’s and told her to flee. When Robert dies, she has him seized.',
      it: 'Il Primo Cavaliere di Robert. Ha scoperto che i figli della regina sono di Jaime e le ha detto di fuggire. Alla morte di Robert lo fa arrestare.',
    },
  },
  cerRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Her husband, the king. He died of a wound from a boar hunt.',
      it: 'Suo marito, il re. È morto per la ferita di un cinghiale durante una caccia.',
    },
  },
  cerJaimeFather: {
    character: 'jaime-lannister',
    type: { en: 'Brother and lover', it: 'Fratello e amante' },
    summary: {
      en: 'Her brother and her lover, the father of her three children.',
      it: 'Suo fratello e il suo amante, padre dei suoi tre figli.',
    },
  },
  cerJoffreyKing: {
    character: 'joffrey-baratheon',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Her eldest son, fathered by Jaime. He takes the throne when Robert dies.',
      it: 'Il suo primogenito, figlio di Jaime. Sale al trono quando Robert muore.',
    },
  },
  cerNedDead: {
    character: 'eddard-stark',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Robert’s Hand, who found out that her children are Jaime’s. Joffrey had him beheaded.',
      it: 'Il Primo Cavaliere di Robert, che aveva scoperto che i figli della regina sono di Jaime. Joffrey lo ha fatto decapitare.',
    },
  },
  cerJaimeCaptive: {
    character: 'jaime-lannister',
    type: { en: 'Brother and lover', it: 'Fratello e amante' },
    summary: {
      en: 'Her brother and her lover, the father of her children. Robb Stark has taken him prisoner.',
      it: 'Suo fratello e il suo amante, padre dei suoi figli. Robb Stark lo ha fatto prigioniero.',
    },
  },
  // Show only: "Fire and Blood".
  cerLancel: {
    character: 'lancel-lannister',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'Her cousin, Robert’s former squire, newly knighted. She has taken him into her bed.',
      it: 'Suo cugino, ex scudiero di Robert, appena nominato cavaliere. Lo ha preso come amante.',
    },
  },
  // Jaime
  jaiCersei: {
    character: 'cersei-lannister',
    type: { en: 'Sister', it: 'Sorella' },
    summary: { en: 'His sister, the queen.', it: 'Sua sorella, la regina.' },
  },
  jaiTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: { en: 'His younger brother.', it: 'Il fratello minore.' },
  },
  jaiRobert: {
    character: 'robert-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king, whom he guards as a knight of the Kingsguard.',
      it: 'Il re, che lui protegge come cavaliere della Guardia reale.',
    },
  },
  jaiCerseiLover: {
    character: 'cersei-lannister',
    type: { en: 'Sister and lover', it: 'Sorella e amante' },
    summary: {
      en: 'His sister, the queen, who is also his lover.',
      it: 'Sua sorella, la regina, che è anche la sua amante.',
    },
  },
  jaiBran: {
    character: 'bran-stark',
    type: {
      en: 'Boy he threw from a tower',
      it: 'Ragazzo gettato da lui da una torre',
    },
    summary: {
      en: 'Eddard Stark’s son, who saw him with Cersei. Jaime threw him from the tower window.',
      it: 'Il figlio di Eddard Stark, che lo ha visto con Cersei. Jaime lo ha gettato dalla finestra della torre.',
    },
  },
  // Show: "The Wolf and the Lion". Books: Eddard IX (chapter 36).
  jaiNed: {
    character: 'eddard-stark',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Eddard Stark, who claims Tyrion was seized on his orders. Jaime attacked him in the street, and his men killed Eddard’s guards.',
      it: 'Eddard Stark, che sostiene che Tyrion sia stato arrestato per suo ordine. Jaime lo ha attaccato per strada e i suoi uomini gli hanno ucciso le guardie.',
    },
  },
  jaiJory: {
    character: 'jory-cassel',
    type: {
      en: 'Man killed in his street fight',
      it: 'Ucciso nel suo scontro per strada',
    },
    summary: {
      en: 'The captain of Eddard Stark’s guard, killed in the fight Jaime started in the street.',
      it: 'Il capitano delle guardie di Eddard Stark, ucciso nello scontro che Jaime ha cominciato per strada.',
    },
  },
  jaiTyrionPrisoner: {
    character: 'tyrion-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His younger brother, whom Catelyn Stark took prisoner.',
      it: 'Il fratello minore, che Catelyn Stark aveva fatto prigioniero.',
    },
  },
  // Show: "Baelor". Books: Catelyn X (chapter 64).
  jaiRobb: {
    character: 'robb-stark',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'Eddard Stark’s eldest son, who defeats his army in battle and takes him prisoner.',
      it: 'Il primogenito di Eddard Stark, che sconfigge in battaglia l’esercito di Jaime e lo fa prigioniero.',
    },
  },
  jaiTywin: {
    character: 'tywin-lannister',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the lord of Casterly Rock, at war with the Starks and the Tullys.',
      it: 'Suo padre, il signore di Castel Granito, in guerra con gli Stark e i Tully.',
    },
  },
  // Tywin
  // Show only: "You Win or You Die".
  tywJaimeRiverrun: {
    character: 'jaime-lannister',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His elder son, whom he sends to besiege the Tullys’ castle with half his army.',
      it: 'Il figlio maggiore, che lui manda ad assediare il castello dei Tully con metà del suo esercito.',
    },
  },
  tywTyrionCaptive: {
    character: 'tyrion-lannister',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His younger son, whom he holds the least worthy of the family. He goes to war over his capture all the same.',
      it: 'Il figlio minore, che lui considera il meno degno della famiglia. Entra comunque in guerra per la sua cattura.',
    },
  },
  tywCersei: {
    character: 'cersei-lannister',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: { en: 'His daughter, the queen.', it: 'Sua figlia, la regina.' },
  },
  tywTyrionReturn: {
    character: 'tyrion-lannister',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His younger son, who reaches his army with the mountain clans.',
      it: 'Il figlio minore, che raggiunge il suo esercito con i clan delle montagne.',
    },
  },
  tywKevan: {
    character: 'kevan-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His younger brother, who commands at his side.',
      it: 'Il fratello minore, che comanda al suo fianco.',
    },
  },
  tywJaimeWar: {
    character: 'jaime-lannister',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His elder son, who has led a Lannister army against the Tullys in the riverlands.',
      it: 'Il figlio maggiore, che ha guidato un esercito dei Lannister contro i Tully nelle Terre dei Fiumi.',
    },
  },
  tywTyrionHand: {
    character: 'tyrion-lannister',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His younger son, whom he sends to King’s Landing as Hand of the King in his place.',
      it: 'Il figlio minore, che lui manda ad Approdo del Re come Primo Cavaliere al posto suo.',
    },
  },
  tywJaimeCaptive: {
    character: 'jaime-lannister',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His elder son, taken prisoner by Robb Stark in battle.',
      it: 'Il figlio maggiore, fatto prigioniero da Robb Stark in battaglia.',
    },
  },
  // Joffrey
  jofRobert: {
    character: 'robert-baratheon',
    type: { en: 'Father', it: 'Padre' },
    summary: { en: 'His father, the king.', it: 'Suo padre, il re.' },
  },
  jofCersei: {
    character: 'cersei-lannister',
    type: { en: 'Mother', it: 'Madre' },
    summary: { en: 'His mother, the queen.', it: 'Sua madre, la regina.' },
  },
  jofSansa: {
    character: 'sansa-stark',
    type: { en: 'Betrothed', it: 'Promessa sposa' },
    summary: {
      en: 'Eddard Stark’s elder daughter, whom the king means him to marry.',
      it: 'La figlia maggiore di Eddard Stark, che il re vuole dargli in sposa.',
    },
  },
  jofTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His mother’s younger brother.',
      it: 'Il fratello minore di sua madre.',
    },
  },
  jofTyrionSlap: {
    character: 'tyrion-lannister',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His mother’s younger brother, who slapped him until he agreed to offer the Starks his sympathy.',
      it: 'Il fratello minore di sua madre, che lo ha schiaffeggiato finché non ha accettato di portare il suo conforto agli Stark.',
    },
  },
  jofSansaRiver: {
    character: 'sansa-stark',
    type: { en: 'Betrothed', it: 'Promessa sposa' },
    summary: {
      en: 'His betrothed. Before the king she will not back her sister’s account of the quarrel by the river.',
      it: 'La sua promessa sposa. Davanti al re non conferma la versione della sorella sulla lite al fiume.',
    },
  },
  jofArya: {
    character: 'arya-stark',
    type: { en: 'Enemy', it: 'Nemica' },
    summary: {
      en: 'Sansa’s younger sister. She hits him to defend a butcher’s boy, and her wolf bites his arm.',
      it: 'La sorella minore di Sansa. Lo colpisce per difendere il figlio di un macellaio, e la sua lupa gli morde il braccio.',
    },
  },
  jofMycah: {
    character: 'mycah',
    type: { en: 'Boy he attacked', it: 'Ragazzo aggredito da lui' },
    summary: {
      en: 'A butcher’s boy he went at with his sword by the river. The boy was hunted down and killed.',
      it: 'Il figlio di un macellaio che lui ha aggredito con la spada vicino al fiume. Il ragazzo è stato inseguito e ucciso.',
    },
  },
  jofRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'King who raised him', it: 'Re che lo ha cresciuto' },
    summary: {
      en: 'The king who raised him as his son. Robert died of a wound from a boar hunt, and Joffrey took the throne.',
      it: 'Il re che lo ha cresciuto come figlio. Robert è morto per la ferita di un cinghiale durante una caccia, e Joffrey è salito al trono.',
    },
  },
  jofCerseiKing: {
    character: 'cersei-lannister',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, at his side when he takes the throne.',
      it: 'Sua madre, al suo fianco quando sale al trono.',
    },
  },
  jofNed: {
    character: 'eddard-stark',
    type: { en: 'Traitor in his eyes', it: 'Traditore ai suoi occhi' },
    summary: {
      en: 'Robert’s Hand, who says the throne is not Joffrey’s. Joffrey has him seized for treason.',
      it: 'Il Primo Cavaliere di Robert, che sostiene che il trono non spetti a Joffrey. Joffrey lo fa arrestare per tradimento.',
    },
  },
  jofJaime: {
    character: 'jaime-lannister',
    type: { en: 'Uncle and father', it: 'Zio e padre' },
    summary: {
      en: 'His mother’s brother. As she admits to Eddard Stark, Jaime is his real father.',
      it: 'Il fratello di sua madre. Come lei ammette davanti a Eddard Stark, Jaime è il suo vero padre.',
    },
  },
  jofSansaKing: {
    character: 'sansa-stark',
    type: { en: 'Betrothed', it: 'Promessa sposa' },
    summary: {
      en: 'Eddard Stark’s daughter, still promised to him.',
      it: 'La figlia di Eddard Stark, ancora sua promessa sposa.',
    },
  },
  // Show: "The Pointy End". Books: Sansa V (chapter 58), the court where
  // Joffrey answers her.
  jofSansaPlea: {
    character: 'sansa-stark',
    type: { en: 'Betrothed', it: 'Promessa sposa' },
    summary: {
      en: 'Eddard Stark’s daughter, still promised to him. Before the court she begs him to spare her father, and he promises mercy if Eddard confesses.',
      it: 'La figlia di Eddard Stark, ancora sua promessa sposa. Davanti alla corte lo supplica di risparmiare suo padre, e lui promette clemenza se Eddard confesserà.',
    },
  },
  jofNedDead: {
    character: 'eddard-stark',
    type: { en: 'Man he had beheaded', it: 'Uomo fatto decapitare da lui' },
    summary: {
      en: 'Robert’s Hand, who confessed to treason before the Great Sept. Joffrey had him beheaded instead of sending him to the Wall.',
      it: 'Il Primo Cavaliere di Robert, che ha confessato il tradimento davanti al Grande Tempio. Joffrey lo ha fatto decapitare invece di mandarlo alla Barriera.',
    },
  },
  // Myrcella
  myrCersei: {
    character: 'cersei-lannister',
    type: { en: 'Mother', it: 'Madre' },
    summary: { en: 'Her mother, the queen.', it: 'Sua madre, la regina.' },
  },
  myrRobert: {
    character: 'robert-baratheon',
    type: { en: 'Father', it: 'Padre' },
    summary: { en: 'Her father, the king.', it: 'Suo padre, il re.' },
  },
  myrJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her elder brother, the crown prince.',
      it: 'Il fratello maggiore, il principe ereditario.',
    },
  },
  myrTommen: {
    character: 'tommen-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: { en: 'Her younger brother.', it: 'Il fratello minore.' },
  },
  myrRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'King who raised her', it: 'Re che l’ha cresciuta' },
    summary: {
      en: 'The king who raised her as his daughter. He died of a wound from a boar hunt.',
      it: 'Il re che l’ha cresciuta come figlia. È morto per la ferita di un cinghiale durante una caccia.',
    },
  },
  myrJaime: {
    character: 'jaime-lannister',
    type: { en: 'Uncle and father', it: 'Zio e padre' },
    summary: {
      en: 'Her mother’s brother. As the queen admits to Eddard Stark, Jaime is her real father.',
      it: 'Il fratello di sua madre. Come la regina ammette davanti a Eddard Stark, Jaime è il suo vero padre.',
    },
  },
  myrJoffreyKing: {
    character: 'joffrey-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her elder brother, king since Robert’s death.',
      it: 'Il fratello maggiore, re dalla morte di Robert.',
    },
  },
  // Tommen
  tomCersei: {
    character: 'cersei-lannister',
    type: { en: 'Mother', it: 'Madre' },
    summary: { en: 'His mother, the queen.', it: 'Sua madre, la regina.' },
  },
  tomRobert: {
    character: 'robert-baratheon',
    type: { en: 'Father', it: 'Padre' },
    summary: { en: 'His father, the king.', it: 'Suo padre, il re.' },
  },
  tomJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother, the crown prince.',
      it: 'Il fratello maggiore, il principe ereditario.',
    },
  },
  tomMyrcella: {
    character: 'myrcella-baratheon',
    type: { en: 'Sister', it: 'Sorella' },
    summary: { en: 'His elder sister.', it: 'La sorella maggiore.' },
  },
  tomRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'King who raised him', it: 'Re che lo ha cresciuto' },
    summary: {
      en: 'The king who raised him as his son. He died of a wound from a boar hunt.',
      it: 'Il re che lo ha cresciuto come figlio. È morto per la ferita di un cinghiale durante una caccia.',
    },
  },
  tomJaime: {
    character: 'jaime-lannister',
    type: { en: 'Uncle and father', it: 'Zio e padre' },
    summary: {
      en: 'His mother’s brother. As the queen admits to Eddard Stark, Jaime is his real father.',
      it: 'Il fratello di sua madre. Come la regina ammette davanti a Eddard Stark, Jaime è il suo vero padre.',
    },
  },
  tomJoffreyKing: {
    character: 'joffrey-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother, king since Robert’s death.',
      it: 'Il fratello maggiore, re dalla morte di Robert.',
    },
  },
  // Robert
  robNed: {
    character: 'eddard-stark',
    type: { en: 'Old friend', it: 'Vecchio amico' },
    summary: {
      en: 'His old friend, the lord of Winterfell, whom he asks to be his Hand.',
      it: 'Il suo vecchio amico, il signore di Grande Inverno, a cui chiede di diventare il suo Primo Cavaliere.',
    },
  },
  robCersei: {
    character: 'cersei-lannister',
    type: { en: 'Wife', it: 'Moglie' },
    summary: { en: 'His wife, the queen.', it: 'Sua moglie, la regina.' },
  },
  robJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His eldest son and heir, whom he means to marry to Eddard’s daughter Sansa.',
      it: 'Il primogenito ed erede, che lui vuole far sposare con Sansa, la figlia di Eddard.',
    },
  },
  robJaime: {
    character: 'jaime-lannister',
    type: { en: 'Kingsguard', it: 'Guardia reale' },
    summary: {
      en: 'His wife’s brother, a knight of his Kingsguard.',
      it: 'Il fratello di sua moglie, cavaliere della sua Guardia reale.',
    },
  },
  // Show: "The Wolf and the Lion". Books: Eddard VIII (chapter 34).
  robDaenerys: {
    character: 'daenerys-targaryen',
    type: { en: 'Enemy', it: 'Nemica' },
    summary: {
      en: 'The exiled Targaryen princess, wed to a Dothraki khal. When he hears she is with child, he wants her dead.',
      it: 'La principessa Targaryen in esilio, sposa di un khal dothraki. Quando viene a sapere che aspetta un figlio, la vuole morta.',
    },
  },
  robNedResigns: {
    character: 'eddard-stark',
    type: { en: 'Old friend', it: 'Vecchio amico' },
    summary: {
      en: 'His Hand. He refuses to have Daenerys killed and gives up his office.',
      it: 'Il suo Primo Cavaliere. Si rifiuta di far uccidere Daenerys e rinuncia alla carica.',
    },
  },
  robNedProtector: {
    character: 'eddard-stark',
    type: { en: 'Old friend', it: 'Vecchio amico' },
    summary: {
      en: 'His Hand, whom he names Protector of the Realm as he lies dying.',
      it: 'Il suo Primo Cavaliere, che lui nomina Protettore del Regno mentre sta morendo.',
    },
  },
  robLancel: {
    character: 'lancel-lannister',
    type: { en: 'Squire', it: 'Scudiero' },
    summary: {
      en: 'His squire, who keeps his cup full on the hunt where a boar wounds him.',
      it: 'Il suo scudiero, che gli tiene sempre pieno il calice durante la caccia in cui un cinghiale lo ferisce.',
    },
  },
  robJoffreyHeir: {
    character: 'joffrey-baratheon',
    type: { en: 'Heir', it: 'Erede' },
    summary: {
      en: 'His heir, the queen’s eldest son, who will take the throne.',
      it: 'Il suo erede, primogenito della regina, che salirà al trono.',
    },
  },
  robDaenerysRecall: {
    character: 'daenerys-targaryen',
    type: { en: 'Enemy', it: 'Nemica' },
    summary: {
      en: 'The exiled Targaryen princess he wanted dead. As he dies, he asks for the killers sent after her to be called back.',
      it: 'La principessa Targaryen in esilio che lui voleva morta. In punto di morte chiede di richiamare i sicari mandati a ucciderla.',
    },
  },
  // Renly
  renRobert: {
    character: 'robert-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother, the king.',
      it: 'Il fratello maggiore, il re.',
    },
  },
  renNed: {
    character: 'eddard-stark',
    type: { en: 'Councillor', it: 'Consigliere' },
    summary: {
      en: 'Eddard Stark, who joins Renly on the small council as the new Hand.',
      it: 'Eddard Stark, che entra nel Concilio ristretto, dove siede Renly, come nuovo Primo Cavaliere.',
    },
  },
  // Show only: "The Wolf and the Lion".
  renLoras: {
    character: 'loras-tyrell',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'The Knight of Flowers, his lover, who urges him to claim the crown.',
      it: 'Il Cavaliere dei Fiori, suo amante, che lo spinge a reclamare la corona.',
    },
  },
  renRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother, the king. Robert died of a wound from a boar hunt.',
      it: 'Il fratello maggiore, il re. Robert è morto per la ferita di un cinghiale durante una caccia.',
    },
  },
  renNedOffer: {
    character: 'eddard-stark',
    type: { en: 'Councillor', it: 'Consigliere' },
    summary: {
      en: 'Robert’s Hand. As Robert lay dying, Renly offered him men to seize the queen’s children, and Eddard refused.',
      it: 'Il Primo Cavaliere di Robert. Mentre Robert moriva, Renly gli ha offerto degli uomini per prendere i figli della regina, ed Eddard ha rifiutato.',
    },
  },
  renNedDead: {
    character: 'eddard-stark',
    type: { en: 'Councillor', it: 'Consigliere' },
    summary: {
      en: 'Robert’s Hand, who refused the men Renly offered him to seize the queen’s children. Joffrey had him beheaded.',
      it: 'Il Primo Cavaliere di Robert, che aveva rifiutato gli uomini offerti da Renly per prendere i figli della regina. Joffrey lo ha fatto decapitare.',
    },
  },
  renLorasFledEpisode: {
    character: 'loras-tyrell',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'The Knight of Flowers, his lover. They flee King’s Landing together after Robert’s death.',
      it: 'Il Cavaliere dei Fiori, suo amante. Fuggono insieme da Approdo del Re dopo la morte di Robert.',
    },
  },
  renLorasFledChapter: {
    character: 'loras-tyrell',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'The Knight of Flowers, who flees King’s Landing with him after Robert’s death.',
      it: 'Il Cavaliere dei Fiori, che fugge con lui da Approdo del Re dopo la morte di Robert.',
    },
  },
  // Lysa
  lysCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'Her sister, who reaches the Eyrie with Tyrion Lannister as her prisoner.',
      it: 'Sua sorella, che arriva al Nido dell’Aquila con Tyrion Lannister prigioniero.',
    },
  },
  lysRobinChapter: {
    character: 'robin-arryn',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Her only son, the young lord of the Eyrie.',
      it: 'Il suo unico figlio, il giovane signore del Nido dell’Aquila.',
    },
  },
  lysRobin: {
    character: 'robin-arryn',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Her only son, the young lord of the Eyrie, whom she still nurses.',
      it: 'Il suo unico figlio, il giovane signore del Nido dell’Aquila, che lei allatta ancora.',
    },
  },
  lysTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The queen’s brother, brought to Lysa’s court as Catelyn’s prisoner.',
      it: 'Il fratello della regina, portato alla corte di Lysa come prigioniero di Catelyn.',
    },
  },
  lysTyrionFreed: {
    character: 'tyrion-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The queen’s brother, whom Lysa kept in a sky cell. He wins his freedom in a trial by combat.',
      it: 'Il fratello della regina, che Lysa ha tenuto in una cella del cielo. Si guadagna la libertà con un processo per duello.',
    },
  },
  lysVardis: {
    character: 'vardis-egen',
    type: { en: 'Champion', it: 'Campione' },
    summary: {
      en: 'The captain of her guard, who fought for her in the trial by combat and was killed.',
      it: 'Il capitano delle sue guardie, che ha combattuto per lei nel processo per duello ed è stato ucciso.',
    },
  },
  lysBronn: {
    character: 'bronn',
    type: { en: 'Prisoner’s champion', it: 'Campione del prigioniero' },
    summary: {
      en: 'The sellsword who fights for Tyrion and kills her champion.',
      it: 'Il mercenario che combatte per Tyrion e le uccide il campione.',
    },
  },
  // Robin
  rbnLysaChapter: {
    character: 'lysa-arryn',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who rules the Vale in his name.',
      it: 'Sua madre, che governa la Valle in suo nome.',
    },
  },
  rbnTyrionChapter: {
    character: 'tyrion-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'A prisoner brought to the Eyrie.',
      it: 'Un prigioniero portato al Nido dell’Aquila.',
    },
  },
  rbnLysa: {
    character: 'lysa-arryn',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who rules the Vale in his name and still nurses him.',
      it: 'Sua madre, che governa la Valle in suo nome e lo allatta ancora.',
    },
  },
  rbnCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Aunt', it: 'Zia' },
    summary: {
      en: 'His mother’s sister, who comes to the Eyrie.',
      it: 'La sorella di sua madre, che arriva al Nido dell’Aquila.',
    },
  },
  rbnTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'A prisoner brought to the Eyrie. Robin wants to see him fly.',
      it: 'Un prigioniero portato al Nido dell’Aquila. Robin vuole vederlo volare.',
    },
  },
  rbnTyrionFreed: {
    character: 'tyrion-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The prisoner Robin wanted to see fly. A sellsword wins him his freedom in a trial by combat.',
      it: 'Il prigioniero che Robin voleva veder volare. Un mercenario gli fa riavere la libertà con un processo per duello.',
    },
  },
  // Bronn
  brnTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'Catelyn’s prisoner, whom Bronn helps escort into the mountains.',
      it: 'Il prigioniero di Catelyn, che Bronn aiuta a scortare tra le montagne.',
    },
  },
  brnCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Lady he escorts', it: 'Signora da lui scortata' },
    summary: {
      en: 'The lady who calls for help at the inn to seize Tyrion. Bronn rides in her escort.',
      it: 'La signora che alla locanda chiede aiuto per arrestare Tyrion. Bronn cavalca nella sua scorta.',
    },
  },
  brnCatelynPast: {
    character: 'catelyn-stark',
    type: { en: 'Lady he escorted', it: 'Signora da lui scortata' },
    summary: {
      en: 'The lady who had Tyrion seized at the inn. Bronn rode in her escort until the trial at the Eyrie.',
      it: 'La signora che ha fatto arrestare Tyrion alla locanda. Bronn ha cavalcato nella sua scorta fino al processo al Nido dell’Aquila.',
    },
  },
  brnTyrionChampion: {
    character: 'tyrion-lannister',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'The prisoner he fights for in the trial by combat at the Eyrie. After the win Bronn enters his service.',
      it: 'Il prigioniero per cui combatte nel processo per duello al Nido dell’Aquila. Dopo la vittoria Bronn entra al suo servizio.',
    },
  },
  brnVardis: {
    character: 'vardis-egen',
    type: { en: 'Knight killed by him', it: 'Cavaliere ucciso da lui' },
    summary: {
      en: 'Lysa’s champion, killed by Bronn in the trial by combat.',
      it: 'Il campione di Lysa, ucciso da Bronn nel processo per duello.',
    },
  },
  brnShae: {
    character: 'shae',
    type: { en: 'Girl he found for Tyrion', it: 'Ragazza trovata per Tyrion' },
    summary: {
      en: 'A camp follower he finds for Tyrion on the eve of a battle.',
      it: 'Una ragazza al seguito dell’accampamento che lui trova per Tyrion alla vigilia di una battaglia.',
    },
  },
  // Shae
  shaTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'Lord Tywin’s son, to whom Bronn brings her. She spends the night before the battle with him.',
      it: 'Il figlio di lord Tywin, da cui la porta Bronn. Passa con lui la notte prima della battaglia.',
    },
  },
  shaBronn: {
    character: 'bronn',
    type: { en: 'Go-between', it: 'Intermediario' },
    summary: {
      en: 'Tyrion’s sellsword, who finds her for him.',
      it: 'Il mercenario di Tyrion, che la trova per lui.',
    },
  },
  shaTyrionCourt: {
    character: 'tyrion-lannister',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'Her lover, who takes her to King’s Landing against his father’s order.',
      it: 'Il suo amante, che la porta ad Approdo del Re contro l’ordine del padre.',
    },
  },
  shaTywin: {
    character: 'tywin-lannister',
    type: { en: 'Lover’s father', it: 'Padre dell’amante' },
    summary: {
      en: 'Tyrion’s father, who forbids him to take her to court.',
      it: 'Il padre di Tyrion, che gli proibisce di portarla a corte.',
    },
  },
  // Walder Frey
  walCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Liege lord’s daughter', it: 'Figlia del suo signore' },
    summary: {
      en: 'His liege lord’s daughter, who bargains with him for Robb’s army to cross at the Twins.',
      it: 'La figlia del suo signore, che tratta con lui il passaggio dell’esercito di Robb alle Torri Gemelle.',
    },
  },
  walRobb: {
    character: 'robb-stark',
    type: { en: 'Future son-in-law', it: 'Futuro genero' },
    summary: {
      en: 'Catelyn’s son, who agrees to marry one of Walder’s daughters in exchange for the crossing.',
      it: 'Il figlio di Catelyn, che accetta di sposare una delle figlie di Walder in cambio del passaggio.',
    },
  },
  walArya: {
    character: 'arya-stark',
    type: { en: 'Promised to his son', it: 'Promessa a suo figlio' },
    summary: {
      en: 'Robb’s sister, promised to one of Walder’s sons as part of the bargain.',
      it: 'La sorella di Robb, promessa a uno dei figli di Walder come parte dell’accordo.',
    },
  },
  walStevron: {
    character: 'stevron-frey',
    type: { en: 'Son and heir', it: 'Figlio ed erede' },
    summary: { en: 'His eldest son and heir.', it: 'Il primogenito ed erede.' },
  },
  // Ros, show only
  rosTheon: {
    character: 'theon-greyjoy',
    type: { en: 'Client', it: 'Cliente' },
    summary: {
      en: 'A regular client at the brothel outside Winterfell. He sends Tyrion her way.',
      it: 'Un cliente abituale del bordello fuori Grande Inverno. Le manda Tyrion.',
    },
  },
  rosTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Client', it: 'Cliente' },
    summary: {
      en: 'A client from the king’s party at Winterfell.',
      it: 'Un cliente arrivato a Grande Inverno al seguito del re.',
    },
  },
  rosPetyr: {
    character: 'petyr-baelish',
    type: { en: 'Employer', it: 'Padrone' },
    summary: {
      en: 'The owner of the brothel in King’s Landing where she now works. He teaches her how to please the clients.',
      it: 'Il proprietario del bordello di Approdo del Re dove ora lavora. Le insegna come compiacere i clienti.',
    },
  },
  rosTheonLeft: {
    character: 'theon-greyjoy',
    type: { en: 'Client', it: 'Cliente' },
    summary: {
      en: 'Her regular client at Winterfell, whom she left to look for work in King’s Landing.',
      it: 'Il suo cliente abituale a Grande Inverno, che lei ha lasciato per cercare lavoro ad Approdo del Re.',
    },
  },
  rosPycelle: {
    character: 'pycelle',
    type: { en: 'Client', it: 'Cliente' },
    summary: {
      en: 'The Grand Maester, a client who boasts to her of the kings he has served.',
      it: 'Il gran maestro, un cliente che si vanta con lei dei re che ha servito.',
    },
  },
  // Ilyn Payne
  ilySansa: {
    character: 'sansa-stark',
    type: { en: 'Girl he frightens', it: 'Ragazza spaventata da lui' },
    summary: {
      en: 'Eddard Stark’s daughter, frightened by the sight of him on the way south.',
      it: 'La figlia di Eddard Stark, che si spaventa vedendolo durante il viaggio verso sud.',
    },
  },
  ilyRobert: {
    character: 'robert-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king, whose death sentences he carries out.',
      it: 'Il re, di cui esegue le condanne a morte.',
    },
  },
  ilyRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The late king, whose death sentences he carried out. Robert died of a wound from a boar hunt.',
      it: 'Il re defunto, di cui eseguiva le condanne a morte. Robert è morto per la ferita di un cinghiale durante una caccia.',
    },
  },
  ilyNed: {
    character: 'eddard-stark',
    type: { en: 'Man he beheaded', it: 'Uomo decapitato da lui' },
    summary: {
      en: 'Robert’s Hand, whom he beheaded on Joffrey’s order with Eddard’s own sword.',
      it: 'Il Primo Cavaliere di Robert, decapitato da lui per ordine di Joffrey con la spada dello stesso Eddard.',
    },
  },
  ilyJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young king, who orders him to behead Eddard Stark.',
      it: 'Il giovane re, che gli ordina di decapitare Eddard Stark.',
    },
  },
  // Show only: "Fire and Blood".
  ilyMarillion: {
    character: 'marillion',
    type: {
      en: 'Singer he silenced',
      it: 'Cantore ridotto al silenzio da lui',
    },
    summary: {
      en: 'A singer whose tongue he cuts out on Joffrey’s order, for a song about the late king and the queen.',
      it: 'Un cantore a cui taglia la lingua per ordine di Joffrey, per una canzone sul re defunto e sulla regina.',
    },
  },
  // Barristan
  barRobert: {
    character: 'robert-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king, whose Kingsguard he commands.',
      it: 'Il re, di cui comanda la Guardia reale.',
    },
  },
  barHugh: {
    character: 'hugh-of-the-vale',
    type: { en: 'Knight he kept vigil over', it: 'Cavaliere da lui vegliato' },
    summary: {
      en: 'A young knight killed in the Hand’s tourney. No one else would keep vigil over his body, so Barristan did.',
      it: 'Un giovane cavaliere ucciso nel torneo del Primo Cavaliere. Nessun altro avrebbe vegliato il suo corpo, così lo ha fatto Barristan.',
    },
  },
  barNed: {
    character: 'eddard-stark',
    type: { en: 'Visitor', it: 'Visitatore' },
    summary: {
      en: 'Eddard Stark, who comes to ask him about Hugh’s death.',
      it: 'Eddard Stark, che viene a chiedergli della morte di Hugh.',
    },
  },
  barRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king he was sworn to guard. Robert died of a wound from a boar hunt.',
      it: 'Il re che lui aveva giurato di proteggere. Robert è morto per la ferita di un cinghiale durante una caccia.',
    },
  },
  barNedProtector: {
    character: 'eddard-stark',
    type: {
      en: 'Protector named by Robert',
      it: 'Protettore nominato da Robert',
    },
    summary: {
      en: 'Eddard Stark. Before the throne, Barristan was handed the letter in which Robert named him Protector of the Realm.',
      it: 'Eddard Stark. Davanti al trono Barristan ha ricevuto la lettera con cui Robert lo nominava Protettore del Regno.',
    },
  },
  barJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'Robert’s heir, the new king.',
      it: 'L’erede di Robert, il nuovo re.',
    },
  },
  barJoffreyDismissal: {
    character: 'joffrey-baratheon',
    type: { en: 'King who dismissed him', it: 'Re che lo ha congedato' },
    summary: {
      en: 'The young king, who removes him from the Kingsguard although its vows are for life.',
      it: 'Il giovane re, che lo allontana dalla Guardia reale anche se i suoi voti valgono per tutta la vita.',
    },
  },
  barJaime: {
    character: 'jaime-lannister',
    type: { en: 'Successor', it: 'Successore' },
    summary: {
      en: 'A sworn brother of the Kingsguard, named Lord Commander in his place.',
      it: 'Un confratello della Guardia reale, nominato Lord Comandante al suo posto.',
    },
  },
  // Syrio
  syrArya: {
    character: 'arya-stark',
    type: { en: 'Pupil', it: 'Allieva' },
    summary: {
      en: 'His pupil. He teaches her to fight the Braavosi way, as a dance.',
      it: 'La sua allieva. Le insegna a combattere alla maniera di Braavos, come una danza.',
    },
  },
  syrNed: {
    character: 'eddard-stark',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'Arya’s father, who hired him to teach her.',
      it: 'Il padre di Arya, che lo ha assunto per insegnarle.',
    },
  },
  syrMeryn: {
    character: 'meryn-trant',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'A knight of the Kingsguard sent to seize Arya. Syrio stands in his way with a wooden sword so that she can run.',
      it: 'Un cavaliere della Guardia reale mandato a prendere Arya. Syrio gli sbarra la strada con una spada di legno perché lei possa scappare.',
    },
  },
  // Petyr Baelish
  petCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Childhood friend', it: 'Amica d’infanzia' },
    summary: {
      en: 'Lady Stark, whom he has known since they were young. He tells her the dagger sent against her son was his, lost in a wager to Tyrion Lannister.',
      it: 'Lady Stark, che lui conosce fin da ragazzi. Le dice che il pugnale usato contro suo figlio era suo, perso in una scommessa con Tyrion Lannister.',
    },
  },
  petTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Winner of his dagger', it: 'Vincitore del suo pugnale' },
    summary: {
      en: 'The queen’s brother, who he says won his dagger from him in a wager.',
      it: 'Il fratello della regina, che a suo dire gli ha vinto il pugnale in una scommessa.',
    },
  },
  petVarys: {
    character: 'varys',
    type: { en: 'Fellow councillor', it: 'Collega nel Concilio' },
    summary: {
      en: 'The master of whisperers, who sits with him on the small council.',
      it: 'Il maestro dei sussurri, che siede con lui nel Concilio ristretto.',
    },
  },
  petNed: {
    character: 'eddard-stark',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Catelyn’s husband, who comes to court as Hand. Petyr takes him to Catelyn and promises to help him find out how Jon Arryn died.',
      it: 'Il marito di Catelyn, arrivato a corte come Primo Cavaliere. Petyr lo porta da Catelyn e promette di aiutarlo a scoprire come è morto Jon Arryn.',
    },
  },
  petNedBetrayed: {
    character: 'eddard-stark',
    type: { en: 'Man he betrayed', it: 'Uomo tradito da lui' },
    summary: {
      en: 'Catelyn’s husband. Petyr promised him the City Watch, then turned it against him and held a knife to his throat.',
      it: 'Il marito di Catelyn. Petyr gli ha promesso la Guardia cittadina, poi gliel’ha rivoltata contro e gli ha puntato un coltello alla gola.',
    },
  },
  petJanos: {
    character: 'janos-slynt',
    type: { en: 'Bought man', it: 'Uomo comprato' },
    summary: {
      en: 'The commander of the City Watch, whose men Petyr pays to turn on Eddard Stark.',
      it: 'Il comandante della Guardia cittadina, i cui uomini Petyr paga perché si rivoltino contro Eddard Stark.',
    },
  },
  // Varys
  varPetyr: {
    character: 'petyr-baelish',
    type: { en: 'Fellow councillor', it: 'Collega nel Concilio' },
    summary: {
      en: 'The master of coin, who sits with him on the small council.',
      it: 'Il maestro del conio, che siede con lui nel Concilio ristretto.',
    },
  },
  varCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Secret visitor', it: 'Visitatrice segreta' },
    summary: {
      en: 'Lady Stark. He knows she has come to the city in secret and joins Petyr to look at her dagger.',
      it: 'Lady Stark. Sa che è arrivata in città in segreto e raggiunge Petyr per esaminare il suo pugnale.',
    },
  },
  varNed: {
    character: 'eddard-stark',
    type: { en: 'Councillor', it: 'Consigliere' },
    summary: {
      en: 'Eddard Stark, whom he greets as the new Hand at his first small council.',
      it: 'Eddard Stark, che lui accoglie come nuovo Primo Cavaliere al suo primo Concilio ristretto.',
    },
  },
  varNedWarned: {
    character: 'eddard-stark',
    type: { en: 'Man he warned', it: 'Uomo avvertito da lui' },
    summary: {
      en: 'Eddard Stark, whom Varys warned in secret that Jon Arryn had been poisoned and that the king’s life was in danger.',
      it: 'Eddard Stark, a cui Varys ha rivelato in segreto che Jon Arryn era stato avvelenato e che la vita del re era in pericolo.',
    },
  },
  // Show only: "The Wolf and the Lion". The books never name the man Arya
  // overhears, and Jorah's reports reach Varys's council in Eddard VIII.
  varIllyrio: {
    character: 'illyrio-mopatis',
    type: { en: 'Secret ally', it: 'Alleato segreto' },
    summary: {
      en: 'A magister of Pentos he meets in secret beneath the castle. They speak of the war to come.',
      it: 'Un magistro di Pentos che lui incontra in segreto nei sotterranei del castello. Parlano della guerra che verrà.',
    },
  },
  varJorahEpisode: {
    character: 'jorah-mormont',
    type: { en: 'Informer', it: 'Informatore' },
    summary: {
      en: 'An exiled knight at Daenerys Targaryen’s side who sends him reports.',
      it: 'Un cavaliere in esilio al fianco di Daenerys Targaryen che gli manda notizie.',
    },
  },
  varJorahChapter: {
    character: 'jorah-mormont',
    type: { en: 'Informer', it: 'Informatore' },
    summary: {
      en: 'An exiled knight at Daenerys Targaryen’s side. Varys names him to the council as the source of the news that she is with child.',
      it: 'Un cavaliere in esilio al fianco di Daenerys Targaryen. Varys lo indica al Concilio come la fonte della notizia che lei aspetta un figlio.',
    },
  },
  varNedCell: {
    character: 'eddard-stark',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'Robert’s Hand, now a prisoner. Varys visits him in the dungeons and urges him to confess for his daughters’ sake.',
      it: 'Il Primo Cavaliere di Robert, ora prigioniero. Varys lo va a trovare nelle segrete e lo esorta a confessare per il bene delle figlie.',
    },
  },
  varNedDead: {
    character: 'eddard-stark',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'Robert’s Hand. Varys urged him to confess to save his daughters, and Joffrey had him beheaded all the same.',
      it: 'Il Primo Cavaliere di Robert. Varys lo aveva esortato a confessare per salvare le figlie, e Joffrey lo ha fatto decapitare lo stesso.',
    },
  },
  varJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young king, whom Varys warns in vain against beheading Eddard Stark.',
      it: 'Il giovane re, che Varys cerca invano di dissuadere dal decapitare Eddard Stark.',
    },
  },
  // Pycelle
  pycNed: {
    character: 'eddard-stark',
    type: { en: 'Councillor', it: 'Consigliere' },
    summary: {
      en: 'Eddard Stark, whom he receives as the new Hand with the small council.',
      it: 'Eddard Stark, che lui accoglie come nuovo Primo Cavaliere insieme al Concilio ristretto.',
    },
  },
  pycRobert: {
    character: 'robert-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king, whom he serves as Grand Maester.',
      it: 'Il re, di cui è gran maestro.',
    },
  },
  pycVarys: {
    character: 'varys',
    type: { en: 'Fellow councillor', it: 'Collega nel Concilio' },
    summary: {
      en: 'The master of whisperers, who sits with him on the small council.',
      it: 'Il maestro dei sussurri, che siede con lui nel Concilio ristretto.',
    },
  },
  pycPetyr: {
    character: 'petyr-baelish',
    type: { en: 'Fellow councillor', it: 'Collega nel Concilio' },
    summary: {
      en: 'The master of coin, who sits with him on the small council.',
      it: 'Il maestro del conio, che siede con lui nel Concilio ristretto.',
    },
  },
  pycRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king he served as Grand Maester. Robert died of a wound from a boar hunt.',
      it: 'Il re di cui è stato gran maestro. Robert è morto per la ferita di un cinghiale durante una caccia.',
    },
  },
  pycNedSeized: {
    character: 'eddard-stark',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'Robert’s Hand, seized for treason in the throne room after Robert’s death.',
      it: 'Il Primo Cavaliere di Robert, arrestato per tradimento nella sala del trono dopo la morte di Robert.',
    },
  },
  pycNedDead: {
    character: 'eddard-stark',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'Robert’s Hand, seized for treason after Robert’s death and beheaded on Joffrey’s order.',
      it: 'Il Primo Cavaliere di Robert, arrestato per tradimento dopo la morte di Robert e decapitato per ordine di Joffrey.',
    },
  },
  pycJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young king, whom he now serves.',
      it: 'Il giovane re, al cui servizio è ora.',
    },
  },
  pycCersei: {
    character: 'cersei-lannister',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen, who rules beside her son.',
      it: 'La regina, che governa accanto al figlio.',
    },
  },
  // Show only: "Fire and Blood".
  pycRos: {
    character: 'ros',
    type: { en: 'Woman he paid', it: 'Donna pagata da lui' },
    summary: {
      en: 'A woman from Petyr Baelish’s brothel, to whom he boasts of the kings he has served.',
      it: 'Una donna del bordello di Petyr Baelish, con cui si vanta dei re che ha servito.',
    },
  },
  // Sandor
  sanJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'Prince he guards', it: 'Principe sotto la sua protezione' },
    summary: {
      en: 'The crown prince, whom he guards.',
      it: 'Il principe ereditario, di cui è la guardia del corpo.',
    },
  },
  sanMycah: {
    character: 'mycah',
    type: { en: 'Boy he killed', it: 'Ragazzo ucciso da lui' },
    summary: {
      en: 'A butcher’s boy he hunted down and killed after the quarrel by the river.',
      it: 'Il figlio di un macellaio che lui ha inseguito e ucciso dopo la lite al fiume.',
    },
  },
  // Show: "The Wolf and the Lion". Books: Eddard VII (chapter 31), after
  // Sansa II has told of the burn (chapter 30).
  sanGregor: {
    character: 'gregor-clegane',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother, who pushed his face into a fire when they were boys. Sandor stops him from killing Loras Tyrell in the lists.',
      it: 'Il fratello maggiore, che da ragazzi gli ha spinto il viso nel fuoco. Sandor gli impedisce di uccidere Loras Tyrell durante il torneo.',
    },
  },
  sanLoras: {
    character: 'loras-tyrell',
    type: { en: 'Knight he saved', it: 'Cavaliere salvato da lui' },
    summary: {
      en: 'A young knight he saves from Gregor’s sword. Loras gives him the victory.',
      it: 'Un giovane cavaliere che lui salva dalla spada di Gregor. Loras gli concede la vittoria.',
    },
  },
  // Show: "Fire and Blood". Books: Sansa VI (chapter 68).
  sanSansa: {
    character: 'sansa-stark',
    type: { en: 'Girl he pities', it: 'Ragazza da lui compatita' },
    summary: {
      en: 'Eddard Stark’s daughter, held at court. When Joffrey has her struck, Sandor wipes the blood from her face.',
      it: 'La figlia di Eddard Stark, trattenuta a corte. Quando Joffrey la fa colpire, Sandor le pulisce il sangue dal viso.',
    },
  },
  sanJoffreyKing: {
    character: 'joffrey-baratheon',
    type: { en: 'King he guards', it: 'Re sotto la sua protezione' },
    summary: {
      en: 'The young king, whom he guards.',
      it: 'Il giovane re, di cui è la guardia.',
    },
  },
  // Janos Slynt
  janNed: {
    character: 'eddard-stark',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Eddard Stark, who as Hand lends him twenty of his own guards while the city is full for the tourney.',
      it: 'Eddard Stark, che da Primo Cavaliere gli presta venti delle sue guardie mentre la città è piena per il torneo.',
    },
  },
  janNedBetrayed: {
    character: 'eddard-stark',
    type: { en: 'Man he betrayed', it: 'Uomo tradito da lui' },
    summary: {
      en: 'Robert’s Hand. In the throne room the men of the City Watch turned on him, and he was seized.',
      it: 'Il Primo Cavaliere di Robert. Nella sala del trono gli uomini della Guardia cittadina si sono rivoltati contro di lui, e lui è stato arrestato.',
    },
  },
  janPetyr: {
    character: 'petyr-baelish',
    type: { en: 'Paymaster', it: 'Pagatore' },
    summary: {
      en: 'The master of coin, who paid the City Watch to side against Eddard.',
      it: 'Il maestro del conio, che ha pagato la Guardia cittadina perché si schierasse contro Eddard.',
    },
  },
  janJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The new king, for whom the City Watch seized Eddard.',
      it: 'Il nuovo re, per cui la Guardia cittadina ha arrestato Eddard.',
    },
  },
  janJoffreyReward: {
    character: 'joffrey-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young king, who makes him lord of Harrenhal for seizing Eddard.',
      it: 'Il giovane re, che lo nomina signore di Harrenhal per aver arrestato Eddard.',
    },
  },
  // Gendry
  genTobho: {
    character: 'tobho-mott',
    type: { en: 'Master', it: 'Maestro' },
    summary: {
      en: 'The armorer he is apprenticed to.',
      it: 'L’armaiolo presso cui è apprendista.',
    },
  },
  genNed: {
    character: 'eddard-stark',
    type: { en: 'Visitor', it: 'Visitatore' },
    summary: {
      en: 'Eddard Stark, who came to the forge as Hand and admired the helm Gendry made for himself.',
      it: 'Eddard Stark, che da Primo Cavaliere è venuto alla forgia e ha ammirato l’elmo che Gendry si è fatto da solo.',
    },
  },
  genRobert: {
    character: 'robert-baratheon',
    type: { en: 'Unknown father', it: 'Padre sconosciuto' },
    summary: {
      en: 'The king. Eddard sees his features in Gendry’s face: Gendry is his son, though Gendry does not know it.',
      it: 'Il re. Eddard riconosce i tratti del re nel viso di Gendry: Gendry è suo figlio, anche se Gendry non lo sa.',
    },
  },
  genRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'Unknown father', it: 'Padre sconosciuto' },
    summary: {
      en: 'The late king. Eddard saw his features in Gendry’s face: Gendry is his son, though Gendry does not know it.',
      it: 'Il re defunto. Eddard ha riconosciuto i tratti del re nel viso di Gendry: Gendry è suo figlio, anche se Gendry non lo sa.',
    },
  },
  // Show only: "Fire and Blood".
  genArya: {
    character: 'arya-stark',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'Eddard Stark’s daughter, travelling as a boy called Arry. Gendry takes her side when the other recruits pick on her.',
      it: 'La figlia di Eddard Stark, che viaggia travestita da ragazzo con il nome di Arry. Gendry si schiera con lei quando le altre reclute la prendono di mira.',
    },
  },
  genYoren: {
    character: 'yoren',
    type: { en: 'Recruiter', it: 'Reclutatore' },
    summary: {
      en: 'The man of the Night’s Watch who takes him north with his recruits.',
      it: 'L’uomo dei Guardiani della notte che lo porta a nord con le sue reclute.',
    },
  },
  genTobhoDismissal: {
    character: 'tobho-mott',
    type: { en: 'Former master', it: 'Ex maestro' },
    summary: {
      en: 'The armorer he worked for, who sent him to the Night’s Watch.',
      it: 'L’armaiolo presso cui lavorava, che lo ha mandato ai Guardiani della notte.',
    },
  },
  genHotPie: {
    character: 'hot-pie',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'A recruit who tries to take Arry’s sword. Gendry threatens him to make him leave her alone.',
      it: 'Una recluta che prova a prendere la spada di Arry. Gendry lo minaccia perché la lasci in pace.',
    },
  },
  // Gregor
  greHugh: {
    character: 'hugh-of-the-vale',
    type: { en: 'Knight killed by him', it: 'Cavaliere ucciso da lui' },
    summary: {
      en: 'A young knight he killed with his lance in the Hand’s tourney.',
      it: 'Un giovane cavaliere ucciso da lui con la lancia nel torneo del Primo Cavaliere.',
    },
  },
  greSandor: {
    character: 'sandor-clegane',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His younger brother, whose face he pushed into a fire when they were boys.',
      it: 'Il fratello minore, a cui da ragazzi ha spinto il viso nel fuoco.',
    },
  },
  greLoras: {
    character: 'loras-tyrell',
    type: { en: 'Rival', it: 'Rivale' },
    summary: {
      en: 'The Knight of Flowers, who unhorses him by riding a mare in heat. Gregor kills his own horse and goes at him with a sword.',
      it: 'Il Cavaliere dei Fiori, che lo disarciona montando una giumenta in calore. Gregor uccide il proprio cavallo e lo attacca con la spada.',
    },
  },
  greSandorFight: {
    character: 'sandor-clegane',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His younger brother, whose face he once pushed into a fire. Sandor stops him from killing Loras in the lists.',
      it: 'Il fratello minore, a cui un tempo ha spinto il viso nel fuoco. Sandor gli impedisce di uccidere Loras durante il torneo.',
    },
  },
  // Show: "A Golden Crown". Books: Eddard XI (chapter 44), as Gregor's own
  // dated role has it.
  greNed: {
    character: 'eddard-stark',
    type: { en: 'Judge', it: 'Giudice' },
    summary: {
      en: 'Eddard Stark, who as Hand stripped him of his knighthood and lands for raiding the riverlands and sent men to bring him to justice.',
      it: 'Eddard Stark, che da Primo Cavaliere gli ha tolto il titolo di cavaliere e le terre per le razzie nelle Terre dei Fiumi e ha mandato uomini a consegnarlo alla giustizia.',
    },
  },
  greBeric: {
    character: 'beric-dondarrion',
    type: { en: 'Pursuer', it: 'Inseguitore' },
    summary: {
      en: 'A lord sent at the head of a company to arrest him.',
      it: 'Un lord mandato ad arrestarlo alla testa di una compagnia.',
    },
  },
  // Loras
  lorSansa: {
    character: 'sansa-stark',
    type: { en: 'Admirer', it: 'Ammiratrice' },
    summary: {
      en: 'Eddard Stark’s daughter, to whom he gives a red rose at the Hand’s tourney.',
      it: 'La figlia di Eddard Stark, a cui regala una rosa rossa al torneo del Primo Cavaliere.',
    },
  },
  lorGregor: {
    character: 'gregor-clegane',
    type: { en: 'Rival', it: 'Rivale' },
    summary: {
      en: 'The Mountain. Loras unhorses him by riding a mare in heat, and Gregor goes at him with a sword.',
      it: 'La Montagna. Loras lo disarciona montando una giumenta in calore, e Gregor lo attacca con la spada.',
    },
  },
  lorSandor: {
    character: 'sandor-clegane',
    type: { en: 'Rescuer', it: 'Salvatore' },
    summary: {
      en: 'Gregor’s brother, who saves him from Gregor’s sword. Loras gives him the victory.',
      it: 'Il fratello di Gregor, che lo salva dalla spada di Gregor. Loras gli concede la vittoria.',
    },
  },
  // Show only: "The Wolf and the Lion".
  lorRenly: {
    character: 'renly-baratheon',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'The king’s younger brother, his lover. Loras urges him to claim the crown.',
      it: 'Il fratello minore del re, suo amante. Loras lo spinge a reclamare la corona.',
    },
  },
  lorRenlyFledEpisode: {
    character: 'renly-baratheon',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'Robert’s younger brother, his lover. They flee King’s Landing together after Robert’s death.',
      it: 'Il fratello minore di Robert, suo amante. Fuggono insieme da Approdo del Re dopo la morte di Robert.',
    },
  },
  lorRenlyFledChapter: {
    character: 'renly-baratheon',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'Robert’s younger brother, with whom he flees King’s Landing after Robert’s death.',
      it: 'Il fratello minore di Robert, con cui fugge da Approdo del Re dopo la morte di Robert.',
    },
  },
  // Mycah
  mycArya: {
    character: 'arya-stark',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'Eddard Stark’s daughter, who practised swordplay with him using sticks. She struck the prince to defend him.',
      it: 'La figlia di Eddard Stark, che si esercitava con lui con dei bastoni al posto delle spade. Ha colpito il principe per difenderlo.',
    },
  },
  mycJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'Attacker', it: 'Aggressore' },
    summary: {
      en: 'The queen’s eldest son, who drew his sword on him by the river.',
      it: 'Il primogenito della regina, che ha sguainato la spada contro di lui vicino al fiume.',
    },
  },
  mycSandor: {
    character: 'sandor-clegane',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'Prince Joffrey’s guard, who hunted him down and killed him.',
      it: 'La guardia del principe Joffrey, che gli ha dato la caccia e lo ha ucciso.',
    },
  },
  // Meryn Trant
  merArya: {
    character: 'arya-stark',
    type: { en: 'Girl he was sent for', it: 'Ragazza che doveva catturare' },
    summary: {
      en: 'Eddard Stark’s younger daughter, whom he was sent to seize.',
      it: 'La figlia minore di Eddard Stark, che lui è stato mandato a catturare.',
    },
  },
  merSyrio: {
    character: 'syrio-forel',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Arya’s sword master, who blocked his way with a wooden sword so that she could escape.',
      it: 'Il maestro di spada di Arya, che gli ha sbarrato la strada con una spada di legno perché lei potesse fuggire.',
    },
  },
  merSansa: {
    character: 'sansa-stark',
    type: { en: 'Girl he beat', it: 'Ragazza picchiata da lui' },
    summary: {
      en: 'Eddard Stark’s elder daughter. On Joffrey’s order, Meryn strikes her.',
      it: 'La figlia maggiore di Eddard Stark. Per ordine di Joffrey, Meryn la colpisce.',
    },
  },
  merJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young king, on whose order he strikes Sansa.',
      it: 'Il giovane re, per ordine del quale colpisce Sansa.',
    },
  },
  // Boros Blount, Mandon Moore and Arys Oakheart: books only. Sansa V
  // (chapter 58), Barristan's dismissal.
  kgJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young king, whom he guards as a knight of the Kingsguard.',
      it: 'Il giovane re, che lui protegge come cavaliere della Guardia reale.',
    },
  },
  kgBarristanLaugh: {
    character: 'barristan-selmy',
    type: { en: 'Former Lord Commander', it: 'Ex Lord Comandante' },
    summary: {
      en: 'The Lord Commander of the Kingsguard, whom Joffrey dismisses before the court. His sworn brothers laugh at his shame.',
      it: 'Il Lord Comandante della Guardia reale, che Joffrey congeda davanti alla corte. I suoi confratelli ridono della sua umiliazione.',
    },
  },
  kgBarristan: {
    character: 'barristan-selmy',
    type: { en: 'Former Lord Commander', it: 'Ex Lord Comandante' },
    summary: {
      en: 'The Lord Commander of the Kingsguard, whom Joffrey dismisses before the court.',
      it: 'Il Lord Comandante della Guardia reale, che Joffrey congeda davanti alla corte.',
    },
  },
  kgJaime: {
    character: 'jaime-lannister',
    type: { en: 'Lord Commander', it: 'Lord Comandante' },
    summary: {
      en: 'A sworn brother of the Kingsguard, named Lord Commander in Barristan’s place.',
      it: 'Un confratello della Guardia reale, nominato Lord Comandante al posto di Barristan.',
    },
  },
  kgRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The late king he was sworn to guard. Robert died of a wound from a boar hunt.',
      it: 'Il re defunto che lui aveva giurato di proteggere. Robert è morto per la ferita di un cinghiale durante una caccia.',
    },
  },
  // Books: Sansa IV (chapter 52), as Mandon's own gate has it.
  manSansa: {
    character: 'sansa-stark',
    type: { en: 'Girl he escorts', it: 'Ragazza scortata da lui' },
    summary: {
      en: 'Eddard Stark’s daughter, whom he walks back from the council chamber.',
      it: 'La figlia di Eddard Stark, che lui riaccompagna dopo il Concilio.',
    },
  },
  // Lancel
  lanRobert: {
    character: 'robert-baratheon',
    type: { en: 'King he squires for', it: 'Re di cui è scudiero' },
    summary: {
      en: 'The king he serves as squire. Robert has little patience with him and mocks him.',
      it: 'Il re di cui è scudiero. Robert ha poca pazienza con lui e lo prende in giro.',
    },
  },
  lanRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'King he squired for', it: 'Re di cui era scudiero' },
    summary: {
      en: 'The king he served as squire. Lancel kept him in wine on the hunt where a boar wounded him, and Robert died.',
      it: 'Il re di cui era scudiero. Lancel gli ha versato vino per tutta la caccia in cui un cinghiale lo ha ferito, e Robert è morto.',
    },
  },
  // Show only: "Fire and Blood".
  lanCersei: {
    character: 'cersei-lannister',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'His cousin, the queen, who has taken him into her bed now that he is a knight.',
      it: 'Sua cugina, la regina, che lo ha preso come amante ora che è cavaliere.',
    },
  },
  // Dontos, books only: Sansa V of A Game of Thrones (chapter 58).
  donSansaAtCourt: {
    character: 'sansa-stark',
    type: { en: 'Noblewoman at court', it: 'Nobildonna a corte' },
    summary: {
      en: 'Eddard Stark’s daughter, whom he starts to hail, drunk, until Ser Balon Swann warns him away.',
      it: 'La figlia di Eddard Stark, che lui, ubriaco, comincia a salutare finché ser Balon Swann non lo allontana.',
    },
  },
  donJoffreyAtCourt: {
    character: 'joffrey-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young king, at whose court he turns up drunk.',
      it: 'Il giovane re, alla cui corte si presenta ubriaco.',
    },
  },
  // Dontos, books only: Sansa I of A Clash of Kings (chapter 76).
  donSansa: {
    character: 'sansa-stark',
    type: { en: 'Saviour', it: 'Salvatrice' },
    summary: {
      en: 'Eddard Stark’s daughter, who talks the king out of killing him.',
      it: 'La figlia di Eddard Stark, che convince il re a non ucciderlo.',
    },
  },
  donJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young king, who wants him killed for coming to court drunk, then makes him his fool.',
      it: 'Il giovane re, che vuole farlo uccidere perché si è presentato ubriaco a corte, poi lo nomina suo buffone.',
    },
  },
  // Hugh of the Vale: he dies at his gate, so every card is in the past.
  hugGregor: {
    character: 'gregor-clegane',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'The knight who killed him with his lance in the Hand’s tourney.',
      it: 'Il cavaliere che lo ha ucciso con la lancia nel torneo del Primo Cavaliere.',
    },
  },
  hugJory: {
    character: 'jory-cassel',
    type: { en: 'Rebuffed messenger', it: 'Messaggero respinto' },
    summary: {
      en: 'The captain of Eddard Stark’s guard, sent to question him. Hugh refused to talk to him.',
      it: 'Il capitano delle guardie di Eddard Stark, mandato a interrogarlo. Hugh si è rifiutato di parlargli.',
    },
  },
  hugBarristan: {
    character: 'barristan-selmy',
    type: { en: 'Knight who kept vigil', it: 'Cavaliere che lo ha vegliato' },
    summary: {
      en: 'Barristan Selmy, Lord Commander of the Kingsguard at the time, who kept vigil over his body when no one else would.',
      it: 'Barristan Selmy, all’epoca Lord Comandante della Guardia reale, che ha vegliato il suo corpo quando nessun altro lo avrebbe fatto.',
    },
  },
  // Tobho Mott
  tobGendry: {
    character: 'gendry',
    type: { en: 'Apprentice', it: 'Apprendista' },
    summary: { en: 'His apprentice.', it: 'Il suo apprendista.' },
  },
  tobNed: {
    character: 'eddard-stark',
    type: { en: 'Visitor', it: 'Visitatore' },
    summary: {
      en: 'Eddard Stark, who came to the shop as Hand to see Gendry, as Jon Arryn had before him.',
      it: 'Eddard Stark, che da Primo Cavaliere è venuto alla bottega per vedere Gendry, come prima di lui Jon Arryn.',
    },
  },
  // Show only: "Fire and Blood".
  tobGendryDismissed: {
    character: 'gendry',
    type: { en: 'Former apprentice', it: 'Ex apprendista' },
    summary: {
      en: 'His apprentice, whom he sends to the Night’s Watch.',
      it: 'Il suo apprendista, mandato da lui ai Guardiani della notte.',
    },
  },
  // Mhaegen, show only
  mhaNed: {
    character: 'eddard-stark',
    type: { en: 'Visitor', it: 'Visitatore' },
    summary: {
      en: 'Eddard Stark, who came with Petyr to see her baby daughter.',
      it: 'Eddard Stark, che è venuto con Petyr a vedere la sua bambina.',
    },
  },
  mhaPetyr: {
    character: 'petyr-baelish',
    type: { en: 'Employer', it: 'Padrone' },
    summary: {
      en: 'The owner of the brothel where she works.',
      it: 'Il proprietario del bordello dove lavora.',
    },
  },
  mhaRobert: {
    character: 'robert-baratheon',
    type: { en: 'Father of her child', it: 'Padre di sua figlia' },
    summary: {
      en: 'The king, the father of her baby daughter.',
      it: 'Il re, padre della sua bambina.',
    },
  },
  mhaRobertDead: {
    character: 'robert-baratheon',
    type: { en: 'Father of her child', it: 'Padre di sua figlia' },
    summary: {
      en: 'The late king, the father of her baby daughter. He died of a wound from a boar hunt.',
      it: 'Il re defunto, padre della sua bambina. È morto per la ferita di un cinghiale durante una caccia.',
    },
  },
  // Beric. Show: "A Golden Crown". Books: Eddard XI (chapter 44), as his
  // own dated role has it.
  berNed: {
    character: 'eddard-stark',
    type: { en: 'Hand who sent him', it: 'Primo Cavaliere che lo ha mandato' },
    summary: {
      en: 'Eddard Stark, who as Hand sent him at the head of a company to bring Gregor Clegane to justice.',
      it: 'Eddard Stark, che da Primo Cavaliere lo ha mandato alla testa di una compagnia a consegnare Gregor Clegane alla giustizia.',
    },
  },
  berGregor: {
    character: 'gregor-clegane',
    type: { en: 'Quarry', it: 'Preda' },
    summary: {
      en: 'A knight stripped of his titles for raiding the riverlands, whom Beric is sent to arrest.',
      it: 'Un cavaliere privato dei titoli per le razzie nelle Terre dei Fiumi, che Beric deve arrestare.',
    },
  },
  berThoros: {
    character: 'thoros-of-myr',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'A red priest who rides in his company.',
      it: 'Un sacerdote rosso che cavalca nella sua compagnia.',
    },
  },
  // Thoros, books only: Eddard XI (chapter 44).
  thoBeric: {
    character: 'beric-dondarrion',
    type: { en: 'Leader', it: 'Comandante' },
    summary: {
      en: 'The lord whose company he rides in, sent to arrest Gregor Clegane.',
      it: 'Il lord nella cui compagnia cavalca, mandato ad arrestare Gregor Clegane.',
    },
  },
  thoNed: {
    character: 'eddard-stark',
    type: { en: 'Hand who sent him', it: 'Primo Cavaliere che lo ha mandato' },
    summary: {
      en: 'Eddard Stark, who as Hand sent the company after Gregor.',
      it: 'Eddard Stark, che da Primo Cavaliere ha mandato la compagnia contro Gregor.',
    },
  },
  thoGregor: {
    character: 'gregor-clegane',
    type: { en: 'Quarry', it: 'Preda' },
    summary: {
      en: 'The knight they are sent to bring to justice.',
      it: 'Il cavaliere che devono consegnare alla giustizia.',
    },
  },
  // Balon Swann and the Royces, books only: Sansa II (chapter 30).
  balGregor: {
    character: 'gregor-clegane',
    type: {
      en: 'Knight who unhorsed him',
      it: 'Cavaliere che lo ha disarcionato',
    },
    summary: {
      en: 'The Mountain, who unhorses him in the Hand’s tourney.',
      it: 'La Montagna, che lo disarciona nel torneo del Primo Cavaliere.',
    },
  },
  rbrLoras: {
    character: 'loras-tyrell',
    type: { en: 'Knight who beat him', it: 'Cavaliere che lo ha battuto' },
    summary: {
      en: 'The Knight of Flowers, who beats him in the joust and so reaches the last four.',
      it: 'Il Cavaliere dei Fiori, che lo batte nella giostra e così arriva tra gli ultimi quattro.',
    },
  },
  rbrYohn: {
    character: 'yohn-royce',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the lord of Runestone, who rides with him in the Hand’s tourney.',
      it: 'Suo padre, il signore di Runestone, che partecipa con lui al torneo del Primo Cavaliere.',
    },
  },
  yohRobar: {
    character: 'robar-royce',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, who rides with him in the Hand’s tourney.',
      it: 'Suo figlio, che partecipa con lui al torneo del Primo Cavaliere.',
    },
  },
  // Stiv and Wallen die at their gate, so every card is in the past. Show:
  // "A Golden Crown". Books: Bran V (chapter 38).
  stvBran: {
    character: 'bran-stark',
    type: { en: 'Boy he threatened', it: 'Ragazzo minacciato da lui' },
    summary: {
      en: 'Eddard Stark’s son, whom he held at knifepoint in the wolfswood.',
      it: 'Il figlio di Eddard Stark, a cui ha puntato un coltello alla gola nella Foresta del Lupo.',
    },
  },
  stvTheon: {
    character: 'theon-greyjoy',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'The Starks’ ward, who killed him with an arrow.',
      it: 'Il pupillo degli Stark, che lo ha ucciso con una freccia.',
    },
  },
  stvRobb: {
    character: 'robb-stark',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'Bran’s elder brother, who came to his rescue.',
      it: 'Il fratello maggiore di Bran, accorso in suo aiuto.',
    },
  },
  stvOsha: {
    character: 'osha',
    type: { en: 'Companion', it: 'Compagna' },
    summary: {
      en: 'A wildling woman of his band, who surrendered.',
      it: 'Una bruta della sua banda, che si è arresa.',
    },
  },
  wlnBran: {
    character: 'bran-stark',
    type: { en: 'Boy he waylaid', it: 'Ragazzo aggredito da lui' },
    summary: {
      en: 'Eddard Stark’s son, whom his band waylaid in the wolfswood.',
      it: 'Il figlio di Eddard Stark, che la sua banda ha assalito nella Foresta del Lupo.',
    },
  },
  wlnStiv: {
    character: 'stiv',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'The leader of his band, killed in the same fight.',
      it: 'Il capo della sua banda, ucciso nello stesso scontro.',
    },
  },
  wlnOsha: {
    character: 'osha',
    type: { en: 'Companion', it: 'Compagna' },
    summary: {
      en: 'A wildling woman of his band, who surrendered.',
      it: 'Una bruta della sua banda, che si è arresa.',
    },
  },
  // Show only: Robb kills him.
  wlnRobb: {
    character: 'robb-stark',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'Bran’s elder brother, who killed him.',
      it: 'Il fratello maggiore di Bran, che lo ha ucciso.',
    },
  },
  // Books only: Grey Wind kills him.
  wlnGreyWind: {
    character: 'grey-wind',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'Robb Stark’s direwolf, which killed him.',
      it: 'Il metalupo di Robb Stark, che lo ha ucciso.',
    },
  },
  // Jason Mallister, books only: Catelyn V (chapter 29).
  jasCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Old acquaintance', it: 'Vecchia conoscenza' },
    summary: {
      en: 'Lady Stark, whom he has known since she was a girl. He passes her on the road without knowing her.',
      it: 'Lady Stark, che lui conosce da quando era ragazza. La incrocia sulla strada senza riconoscerla.',
    },
  },
  // Masha Heddle
  masCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'A guest at her inn, who has Tyrion Lannister seized under her roof.',
      it: 'Un’ospite della sua locanda, che fa arrestare Tyrion Lannister sotto il suo tetto.',
    },
  },
  masTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'A guest she has no room for. He is taken prisoner at her inn.',
      it: 'Un ospite per cui non ha posto. Viene fatto prigioniero nella sua locanda.',
    },
  },
  // Books only: Tyrion VII (chapter 57).
  masTywin: {
    character: 'tywin-lannister',
    type: { en: 'Lord who hanged her', it: 'Lord che l’ha fatta impiccare' },
    summary: {
      en: 'The lord of Casterly Rock, who had her hanged for letting his son be taken at her inn.',
      it: 'Il signore di Castel Granito, che l’ha fatta impiccare per aver lasciato catturare suo figlio nella sua locanda.',
    },
  },
  // Kevan
  kevTywin: {
    character: 'tywin-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother, at whose side he commands.',
      it: 'Il fratello maggiore, al cui fianco comanda.',
    },
  },
  kevTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His nephew, who reaches the army with the mountain clans.',
      it: 'Suo nipote, che raggiunge l’esercito con i clan delle montagne.',
    },
  },
  kevJaime: {
    character: 'jaime-lannister',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His nephew, taken prisoner by Robb Stark in battle.',
      it: 'Suo nipote, fatto prigioniero da Robb Stark in battaglia.',
    },
  },
  kevTyrionHand: {
    character: 'tyrion-lannister',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His nephew, whom Tywin sends to King’s Landing as Hand of the King.',
      it: 'Suo nipote, che Tywin manda ad Approdo del Re come Primo Cavaliere.',
    },
  },
  // Addam Marbrand
  addTywin: {
    character: 'tywin-lannister',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The lord he serves in the war against the Starks.',
      it: 'Il lord al cui servizio combatte nella guerra contro gli Stark.',
    },
  },
  // Podrick, books only: Tyrion VIII (chapter 63).
  podTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Lord he squires for', it: 'Signore di cui è scudiero' },
    summary: {
      en: 'The lord he serves as squire.',
      it: 'Il signore di cui è scudiero.',
    },
  },
  podKevan: {
    character: 'kevan-lannister',
    type: { en: 'Knight who placed him', it: 'Cavaliere che lo ha assegnato' },
    summary: {
      en: 'Tyrion’s uncle, who gives him to Tyrion as a squire before the battle.',
      it: 'Lo zio di Tyrion, che lo assegna a Tyrion come scudiero prima della battaglia.',
    },
  },
  // Stevron Frey
  steWalder: {
    character: 'walder-frey',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the lord of the Twins.',
      it: 'Suo padre, il signore delle Torri Gemelle.',
    },
  },
  steCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'Lady Stark, who comes to the Twins to bargain for her son’s crossing.',
      it: 'Lady Stark, che arriva alle Torri Gemelle per trattare il passaggio di suo figlio.',
    },
  },
  // Books only: Catelyn XI (chapter 72).
  steRobb: {
    character: 'robb-stark',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'Catelyn’s son, whose army he marches with after the bargain. At Riverrun he advises ransoming Jaime Lannister, and the northern lords name Robb King in the North instead.',
      it: 'Il figlio di Catelyn, con il cui esercito marcia dopo l’accordo. A Delta delle Acque gli consiglia di riscattare Jaime Lannister, ma i lord del Nord proclamano Robb Re del Nord.',
    },
  },
  // The Tullys, books only: Catelyn VI (chapter 35), Catelyn VIII (chapter
  // 56) and Catelyn XI (chapter 72).
  edmCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, who comes to Riverrun with her son’s army.',
      it: 'Sua sorella, che arriva a Delta delle Acque con l’esercito del figlio.',
    },
  },
  edmHoster: {
    character: 'hoster-tully',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the lord of Riverrun, who lies ill and has left the war to him.',
      it: 'Suo padre, il signore di Delta delle Acque, che giace malato e ha lasciato a lui la guerra.',
    },
  },
  edmRobb: {
    character: 'robb-stark',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His nephew, whose victories free him from the Lannisters and lift the siege of Riverrun.',
      it: 'Suo nipote, le cui vittorie lo liberano dai Lannister e rompono l’assedio di Delta delle Acque.',
    },
  },
  edmBrynden: {
    character: 'brynden-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: { en: 'His uncle, the Blackfish.', it: 'Suo zio, il Pesce Nero.' },
  },
  hosCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, who comes to his sickbed at Riverrun.',
      it: 'Sua figlia, che viene al suo capezzale a Delta delle Acque.',
    },
  },
  hosEdmure: {
    character: 'edmure-tully',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, to whom he has handed the command of his armies.',
      it: 'Suo figlio, a cui ha affidato il comando dei suoi eserciti.',
    },
  },
  hosLysa: {
    character: 'lysa-arryn',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, the lady of the Eyrie.',
      it: 'Sua figlia, la signora del Nido dell’Aquila.',
    },
  },
  hosRobb: {
    character: 'robb-stark',
    type: { en: 'Grandson', it: 'Nipote' },
    summary: {
      en: 'His grandson, Catelyn’s son, who lifts the siege of Riverrun.',
      it: 'Suo nipote, figlio di Catelyn, che rompe l’assedio di Delta delle Acque.',
    },
  },
  hosBrynden: {
    character: 'brynden-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, the Blackfish.',
      it: 'Suo fratello, il Pesce Nero.',
    },
  },
  bryCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece, who reaches the Vale with Tyrion Lannister as her prisoner.',
      it: 'Sua nipote, che arriva nella Valle con Tyrion Lannister prigioniero.',
    },
  },
  bryLysa: {
    character: 'lysa-arryn',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece, the lady of the Eyrie, in whose service he is.',
      it: 'Sua nipote, la signora del Nido dell’Aquila, al cui servizio si trova.',
    },
  },
  bryRobb: {
    character: 'robb-stark',
    type: { en: 'Great-nephew', it: 'Pronipote' },
    summary: {
      en: 'Catelyn’s son, who puts him in charge of his outriders.',
      it: 'Il figlio di Catelyn, che gli affida i suoi esploratori.',
    },
  },
  bryCatelynLeaves: {
    character: 'catelyn-stark',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece. When Lysa will not help the riverlands, he leaves the Vale with her.',
      it: 'Sua nipote. Quando Lysa rifiuta di aiutare le Terre dei Fiumi, lascia la Valle con lei.',
    },
  },
  bryLysaRefuses: {
    character: 'lysa-arryn',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece, the lady of the Eyrie, who refuses to send the Vale’s men to the riverlands. He gives up his post.',
      it: 'Sua nipote, la signora del Nido dell’Aquila, che rifiuta di mandare gli uomini della Valle nelle Terre dei Fiumi. Lui lascia il suo incarico.',
    },
  },
  // Hot Pie: his book record opens after stage 1, so his links are the
  // show's ("Fire and Blood").
  hotArya: {
    character: 'arya-stark',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'Eddard Stark’s daughter, travelling as a boy called Arry. Hot Pie tries to take her sword, and she draws it on him.',
      it: 'La figlia di Eddard Stark, che viaggia travestita da ragazzo con il nome di Arry. Frittella prova a prenderle la spada, e lei gliela punta contro.',
    },
  },
  hotGendry: {
    character: 'gendry',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'Another recruit, who takes Arry’s side and threatens him.',
      it: 'Un’altra recluta, che si schiera con Arry e lo minaccia.',
    },
  },
  hotYoren: {
    character: 'yoren',
    type: { en: 'Recruiter', it: 'Reclutatore' },
    summary: {
      en: 'The man of the Night’s Watch who takes the recruits north.',
      it: 'L’uomo dei Guardiani della notte che porta le reclute a nord.',
    },
  },
  // Marillion
  marCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Lady he follows', it: 'Signora da lui seguita' },
    summary: {
      en: 'A lady travelling in secret, whom he tries to charm at the inn. When she seizes Tyrion, he follows her party in the hope of a song.',
      it: 'Una signora in viaggio in segreto, che lui prova a conquistare alla locanda. Quando lei fa arrestare Tyrion, segue il suo gruppo sperando di trarne una canzone.',
    },
  },
  marTyrion: {
    character: 'tyrion-lannister',
    type: {
      en: 'Lord he offered to sing for',
      it: 'Lord a cui ha offerto una canzone',
    },
    summary: {
      en: 'The queen’s brother. Marillion offers to sing for him and draws his eye to Catelyn’s table.',
      it: 'Il fratello della regina. Marillion si offre di cantare per lui e gli fa notare il tavolo di Catelyn.',
    },
  },
  // Show only: "Fire and Blood".
  marJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King who punished him', it: 'Re che lo ha punito' },
    summary: {
      en: 'The young king, who punishes him for a song about the late king and the queen.',
      it: 'Il giovane re, che lo punisce per una canzone sul re defunto e sulla regina.',
    },
  },
  marIlyn: {
    character: 'ilyn-payne',
    type: { en: 'Headsman', it: 'Boia' },
    summary: {
      en: 'The king’s headsman, who cuts out his tongue.',
      it: 'Il boia del re, che gli taglia la lingua.',
    },
  },
  // Willis Wode
  wilCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Lady he backs', it: 'Signora da lui sostenuta' },
    summary: {
      en: 'Lady Stark, for whom he draws his sword at the inn.',
      it: 'Lady Stark, per cui sguaina la spada alla locanda.',
    },
  },
  wilTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The prisoner he helps seize and escort.',
      it: 'Il prigioniero che lui aiuta ad arrestare e a scortare.',
    },
  },
  // The Vale, books only: Catelyn VI (chapter 35), Tyrion V (chapter 39),
  // Catelyn VII (chapter 41).
  dnlCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Lady he rescued', it: 'Signora salvata da lui' },
    summary: {
      en: 'Lady Stark, whose party his men rescue in the mountains on the way to the Bloody Gate.',
      it: 'Lady Stark, il cui gruppo viene salvato dai suoi uomini tra le montagne, sulla strada per la Porta Insanguinata.',
    },
  },
  dnlTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'Catelyn’s prisoner, saved with the rest of her party.',
      it: 'Il prigioniero di Catelyn, salvato con il resto del gruppo.',
    },
  },
  nesCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'Lady Stark, whom he receives at the Gates of the Moon with her prisoner.',
      it: 'Lady Stark, che lui accoglie con il suo prigioniero alle Porte della Luna.',
    },
  },
  nesLysa: {
    character: 'lysa-arryn',
    type: { en: 'Liege lady', it: 'Signora' },
    summary: {
      en: 'The lady of the Eyrie, for whom he holds the Gates of the Moon.',
      it: 'La signora del Nido dell’Aquila, per cui tiene le Porte della Luna.',
    },
  },
  myaCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Traveller she guided', it: 'Viaggiatrice guidata da lei' },
    summary: {
      en: 'Lady Stark, whom she guides up the mountain to the Eyrie by night.',
      it: 'Lady Stark, che lei guida di notte su per la montagna fino al Nido dell’Aquila.',
    },
  },
  vrdLysa: {
    character: 'lysa-arryn',
    type: { en: 'Liege lady', it: 'Signora' },
    summary: {
      en: 'The lady of the Eyrie, whose guard he commands.',
      it: 'La signora del Nido dell’Aquila, di cui comanda le guardie.',
    },
  },
  vrdCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'Lysa’s sister, whom he takes to see her.',
      it: 'La sorella di Lysa, che lui accompagna da lei.',
    },
  },
  vrdLysaChampion: {
    character: 'lysa-arryn',
    type: { en: 'Liege lady', it: 'Signora' },
    summary: {
      en: 'The lady of the Eyrie, for whom he fights as champion in the trial by combat.',
      it: 'La signora del Nido dell’Aquila, per cui combatte come campione nel processo per duello.',
    },
  },
  vrdBronn: {
    character: 'bronn',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'The sellsword who kills him in the trial by combat.',
      it: 'Il mercenario che lo uccide nel processo per duello.',
    },
  },
  vrdTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Accused', it: 'Accusato' },
    summary: {
      en: 'The accused. Vardis will not fight so small a man, so Tyrion names a champion.',
      it: 'L’accusato. Vardis non vuole battersi con un uomo così piccolo, così Tyrion sceglie un campione.',
    },
  },
  morTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Prisoner he kept', it: 'Prigioniero da lui custodito' },
    summary: {
      en: 'The prisoner he kept in the sky cells, who promised him gold to carry a message to Lady Lysa.',
      it: 'Il prigioniero che lui custodiva nelle celle del cielo, che gli ha promesso dell’oro se avesse portato un messaggio a lady Lysa.',
    },
  },
  morLysa: {
    character: 'lysa-arryn',
    type: { en: 'Liege lady', it: 'Signora' },
    summary: {
      en: 'The lady of the Eyrie, whose sky cells he keeps.',
      it: 'La signora del Nido dell’Aquila, di cui custodisce le celle del cielo.',
    },
  },
  lynTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Accused', it: 'Accusato' },
    summary: {
      en: 'The prisoner who demands a trial by combat before Lysa’s court.',
      it: 'Il prigioniero che davanti alla corte di Lysa chiede un processo per duello.',
    },
  },
  lynLysa: {
    character: 'lysa-arryn',
    type: { en: 'Lady he courts', it: 'Signora da lui corteggiata' },
    summary: {
      en: 'The lady of the Eyrie. He offers to be her champion, and she chooses Vardis Egen instead.',
      it: 'La signora del Nido dell’Aquila. Si offre come suo campione, ma lei sceglie Vardis Egen.',
    },
  },
  lynTyrionEscort: {
    character: 'tyrion-lannister',
    type: { en: 'Freed prisoner', it: 'Prigioniero liberato' },
    summary: {
      en: 'The prisoner freed by the trial, whom he escorts down the mountain and tells never to come back.',
      it: 'Il prigioniero liberato dal processo, che lui scorta giù dalla montagna intimandogli di non tornare mai più.',
    },
  },
  lynBronn: {
    character: 'bronn',
    type: { en: 'Champion', it: 'Campione' },
    summary: {
      en: 'The sellsword who won the trial, sent down the mountain with Tyrion.',
      it: 'Il mercenario che ha vinto il processo, scortato giù dalla montagna con Tyrion.',
    },
  },
  anyTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Accused', it: 'Accusato' },
    summary: {
      en: 'The prisoner who demands a trial by combat before Lysa’s court, where she sits among the lords of the Vale.',
      it: 'Il prigioniero che chiede un processo per duello davanti alla corte di Lysa, dove lei siede tra i signori della Valle.',
    },
  },
  // The mountain clans
  shgTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'A Lannister who talks him out of killing him with promises of weapons and wealth. The Stone Crows follow him.',
      it: 'Un Lannister che lo convince a non ucciderlo promettendogli armi e ricchezze. I Corvi di Pietra lo seguono.',
    },
  },
  shgBronn: {
    character: 'bronn',
    type: { en: 'Tyrion’s sellsword', it: 'Mercenario di Tyrion' },
    summary: {
      en: 'The sellsword who rides with Tyrion.',
      it: 'Il mercenario che viaggia con Tyrion.',
    },
  },
  clanTywin: {
    character: 'tywin-lannister',
    type: { en: 'Ally’s father', it: 'Padre dell’alleato' },
    summary: {
      en: 'Tyrion’s father, whose army the mountain clans join.',
      it: 'Il padre di Tyrion, al cui esercito si uniscono i clan delle montagne.',
    },
  },
  clanTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'A Lannister who wins the mountain clans over with promises of weapons and wealth, and leads them to his father’s army.',
      it: 'Un Lannister che conquista i clan delle montagne promettendo armi e ricchezze e li porta all’esercito di suo padre.',
    },
  },
  shgTimett: {
    character: 'timett',
    type: { en: 'Clan leader', it: 'Capo clan' },
    summary: {
      en: 'The leader of the Burned Men, who follows Tyrion with his clan.',
      it: 'Il capo degli Uomini Bruciati, che segue Tyrion con il suo clan.',
    },
  },
  shgChella: {
    character: 'chella',
    type: { en: 'Clan leader', it: 'Capo clan' },
    summary: {
      en: 'The leader of the Black Ears, who follows Tyrion with her clan.',
      it: 'La guida delle Orecchie Nere, che segue Tyrion con il suo clan.',
    },
  },
  clanShagga: {
    character: 'shagga',
    type: { en: 'Clan warrior', it: 'Guerriero di clan' },
    summary: {
      en: 'A warrior of the Stone Crows, who follows Tyrion with his clan.',
      it: 'Un guerriero dei Corvi di Pietra, che segue Tyrion con il suo clan.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * Stage 2's Essos and Qarth cards for the season-1 cast (#1477): season 2
 * and A Clash of Kings, episodes 11 to 20 and chapters 74 to 143. The new
 * characters' own cards are in `season-2.relationships.ts`.
 */
const essos2 = {
  // Daenerys, the books
  daeJorahLynesse: {
    character: 'jorah-mormont',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'The exiled knight who leads her into the Red Waste. In the ruined city he tells her about the wife who left him, and says she looked like Daenerys; she realizes he loves her.',
      it: 'Il cavaliere in esilio che la guida nel Deserto Rosso. Nella città in rovina le parla della moglie che lo ha lasciato, e dice che somigliava a lei; Daenerys capisce che lui la ama.',
    },
  },
  daeDrogon: {
    character: 'drogon',
    type: { en: 'Dragon', it: 'Drago' },
    summary: {
      en: 'The black and red dragon she hatched in Drogo’s pyre. She names him for her husband.',
      it: 'Il drago nero e rosso che ha fatto schiudere nella pira di Drogo. Gli dà il nome del marito.',
    },
  },
  daeRhaegal: {
    character: 'rhaegal',
    type: { en: 'Dragon', it: 'Drago' },
    summary: {
      en: 'The green and bronze dragon she hatched in Drogo’s pyre. She names him for her brother Rhaegar.',
      it: 'Il drago verde e bronzo che ha fatto schiudere nella pira di Drogo. Gli dà il nome di suo fratello Rhaegar.',
    },
  },
  daeViserion: {
    character: 'viserion',
    type: { en: 'Dragon', it: 'Drago' },
    summary: {
      en: 'The cream and gold dragon she hatched in Drogo’s pyre. She names him for her brother Viserys.',
      it: 'Il drago color crema e oro che ha fatto schiudere nella pira di Drogo. Gli dà il nome di suo fratello Viserys.',
    },
  },
  daeDoreahDead: {
    character: 'doreah',
    type: { en: 'Handmaiden', it: 'Ancella' },
    summary: {
      en: 'The handmaiden who taught her how to please Drogo. She fell ill in the Red Waste, and Daenerys held her hand until she died.',
      it: 'L’ancella che le aveva insegnato a compiacere Drogo. Si è ammalata nel Deserto Rosso, e Daenerys le ha tenuto la mano finché è morta.',
    },
  },
  daeXaroChapter: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The merchant prince who hosts her in his palace in Qarth. He asks her to marry him, and she refuses; he says he has no warships to give her.',
      it: 'Il principe mercante che la ospita nel suo palazzo a Qarth. Le chiede di sposarlo e lei rifiuta; lui dice di non avere navi da guerra da darle.',
    },
  },
  daePyatPree: {
    character: 'pyat-pree',
    type: { en: 'Warlock', it: 'Stregone' },
    summary: {
      en: 'The warlock who invites her to the House of the Undying. Xaro warns her against him, but Jorah urges her to ask him for help.',
      it: 'Lo stregone che la invita alla Casa degli Eterni. Xaro la mette in guardia, ma Jorah le consiglia di chiedere aiuto a lui.',
    },
  },
  daeQuaithe: {
    character: 'quaithe',
    type: { en: 'Masked stranger', it: 'Straniera mascherata' },
    summary: {
      en: 'The masked woman of the Shadow who came looking for her dragons. She tells her to leave Qarth soon and to seek the truth in Asshai.',
      it: 'La donna mascherata dell’Ombra venuta a cercare i suoi draghi. Le dice di lasciare presto Qarth e di cercare la verità ad Asshai.',
    },
  },
  daeJorahQarth: {
    character: 'jorah-mormont',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'The exiled knight who advises her. He tells her she will find no help in Qarth, and that Illyrio cares only for himself.',
      it: 'Il cavaliere in esilio che la consiglia. Le dice che a Qarth non troverà aiuto, e che Illyrio pensa solo a se stesso.',
    },
  },
  daePyatPreeHouse: {
    character: 'pyat-pree',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The warlock who led her into the House of the Undying, where the Undying tried to consume her. When she escaped, he went at her with a dagger.',
      it: 'Lo stregone che l’ha condotta nella Casa degli Eterni, dove gli Eterni hanno tentato di divorarla. Quando è fuggita, l’ha aggredita con un pugnale.',
    },
  },
  daeDrogonHouse: {
    character: 'drogon',
    type: { en: 'Dragon', it: 'Drago' },
    summary: {
      en: 'The black dragon she named for Drogo. He went with her into the House of the Undying and tore the Undying’s heart apart.',
      it: 'Il drago nero a cui ha dato il nome di Drogo. È entrato con lei nella Casa degli Eterni e ha fatto a pezzi il cuore degli Eterni.',
    },
  },
  daeJorahComfort: {
    character: 'jorah-mormont',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'The exiled knight who advises her. Outside the House of the Undying he holds her and comforts her.',
      it: 'Il cavaliere in esilio che la consiglia. Fuori dalla Casa degli Eterni la stringe a sé e la consola.',
    },
  },
  daeJhogoKnife: {
    character: 'jhogo',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'One of her bloodriders. He knocks the warlock’s dagger aside with his whip.',
      it: 'Uno dei suoi cavalieri di sangue. Con la frusta fa volare via il pugnale dello stregone.',
    },
  },
  daeBelwas: {
    character: 'strong-belwas',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'A eunuch pit fighter who saves her from an assassin at the port of Qarth. He says Illyrio sent him to bring her back to Pentos.',
      it: 'Un eunuco, combattente delle arene, che la salva da un assassino al porto di Qarth. Dice che lo manda Illyrio, per riportarla a Pentos.',
    },
  },
  daeArstan: {
    character: 'arstan-whitebeard',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'An old man, Belwas’s squire, who knocks a box with a manticore out of her hands.',
      it: 'Un vecchio, scudiero di Belwas, che le fa cadere dalle mani una scatola con dentro una manticora.',
    },
  },
  daeXaroShips: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The merchant prince who hosts her. He asks again to marry her, and offers ten ships for one of her dragons; she refuses.',
      it: 'Il principe mercante che la ospita. Le chiede ancora di sposarlo, e le offre dieci navi in cambio di uno dei suoi draghi; lei rifiuta.',
    },
  },
  // Daenerys, the show
  daeJorahWaste: {
    character: 'jorah-mormont',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'The exiled knight who advises her. He tells her the powerful men around her will kill her for her dragons, so she leads her people into the Red Waste.',
      it: 'Il cavaliere in esilio che la consiglia. Le dice che gli uomini potenti intorno a lei la ucciderebbero per i draghi, così lei guida la sua gente nel Deserto Rosso.',
    },
  },
  daeRakharoScout: {
    character: 'rakharo',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'One of her bloodriders. She sends him to scout the Red Waste and tells him he has never failed her.',
      it: 'Uno dei suoi cavalieri di sangue. Lo manda in esplorazione nel Deserto Rosso e gli dice che non l’ha mai delusa.',
    },
  },
  daeKovarro: {
    character: 'kovarro',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'One of her bloodriders. She sends him to scout the Red Waste in another direction.',
      it: 'Uno dei suoi cavalieri di sangue. Lo manda in esplorazione nel Deserto Rosso in un’altra direzione.',
    },
  },
  daeAggo: {
    character: 'aggo',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'One of her bloodriders. She sends him to scout the Red Waste in another direction.',
      it: 'Uno dei suoi cavalieri di sangue. Lo manda in esplorazione nel Deserto Rosso in un’altra direzione.',
    },
  },
  daeRakharoDead: {
    character: 'rakharo',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'One of her bloodriders, sent to scout the Red Waste. His horse came back with his head, and she promised him a funeral.',
      it: 'Uno dei suoi cavalieri di sangue, mandato in esplorazione nel Deserto Rosso. Il suo cavallo è tornato con la sua testa, e lei gli ha promesso un funerale.',
    },
  },
  daeIrriMourns: {
    character: 'irri',
    type: { en: 'Handmaiden', it: 'Ancella' },
    summary: {
      en: 'Her Dothraki handmaiden. Daenerys comforts her when Rakharo’s head comes back.',
      it: 'La sua ancella dothraki. Daenerys la consola quando torna la testa di Rakharo.',
    },
  },
  daeXaroEpisode: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The merchant prince who vouched for her so Qarth would let her in, and hosts her in his house. He offers her his fortune if she marries him.',
      it: 'Il principe mercante che si è fatto garante per lei perché Qarth la lasciasse entrare, e la ospita nella sua casa. Le offre la sua fortuna se lo sposerà.',
    },
  },
  daeJorahFeelings: {
    character: 'jorah-mormont',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'The exiled knight who advises her not to take Xaro’s money. He tells her what he feels for her, and she does not return it.',
      it: 'Il cavaliere in esilio che le consiglia di non accettare il denaro di Xaro. Le dice ciò che prova per lei, e lei non lo ricambia.',
    },
  },
  daeKovarroStatue: {
    character: 'kovarro',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'The bloodrider who found Qarth for her. At Xaro’s feast she forbids him to steal from their host.',
      it: 'Il cavaliere di sangue che ha trovato Qarth per lei. Alla festa di Xaro gli vieta di derubare il loro ospite.',
    },
  },
  daeIrriFriend: {
    character: 'irri',
    type: { en: 'Handmaiden', it: 'Ancella' },
    summary: {
      en: 'Her Dothraki handmaiden, whom she calls her friend. Irri insists she is a khaleesi, not a princess.',
      it: 'La sua ancella dothraki, che chiama amica. Irri insiste che lei è una khaleesi, non una principessa.',
    },
  },
  daeDoreahQarth: {
    character: 'doreah',
    type: { en: 'Handmaiden', it: 'Ancella' },
    summary: {
      en: 'Her handmaiden. In Qarth Daenerys asks her to win over Xaro’s friends and learn what they say about him.',
      it: 'La sua ancella. A Qarth Daenerys le chiede di conquistare gli amici di Xaro e scoprire cosa dicono di lui.',
    },
  },
  daeIrriDead: {
    character: 'irri',
    type: { en: 'Handmaiden', it: 'Ancella' },
    summary: {
      en: 'Her Dothraki handmaiden. She was strangled in Xaro’s house when the dragons were stolen.',
      it: 'La sua ancella dothraki. È stata strangolata nella casa di Xaro quando hanno rubato i draghi.',
    },
  },
  daeDoreahMissing: {
    character: 'doreah',
    type: { en: 'Handmaiden', it: 'Ancella' },
    summary: {
      en: 'Her handmaiden. She is gone from Xaro’s house after the dragons are stolen.',
      it: 'La sua ancella. Dopo il furto dei draghi è sparita dalla casa di Xaro.',
    },
  },
  daeXaroStolen: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The merchant prince who hosts her and swore to protect her. Her dragons are stolen from his house.',
      it: 'Il principe mercante che la ospita e aveva giurato di proteggerla. I suoi draghi vengono rubati dalla sua casa.',
    },
  },
  daeXaroVault: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Traitor', it: 'Traditore' },
    summary: {
      en: 'The merchant prince who betrayed her. She takes his key, finds his vault empty, and has him locked inside it.',
      it: 'Il principe mercante che l’ha tradita. Gli prende la chiave, trova vuota la sua camera blindata e ce lo fa chiudere dentro.',
    },
  },
  daeDoreahVault: {
    character: 'doreah',
    type: { en: 'Traitor', it: 'Traditrice' },
    summary: {
      en: 'The handmaiden who betrayed her. Daenerys finds her in Xaro’s bed and has her locked in the vault with him.',
      it: 'L’ancella che l’ha tradita. Daenerys la trova nel letto di Xaro e la fa chiudere con lui nella camera blindata.',
    },
  },
  daeJorahHouse: {
    character: 'jorah-mormont',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'The exiled knight who goes with her to the House of the Undying to take back her dragons, and has the Dothraki seize Xaro’s gold.',
      it: 'Il cavaliere in esilio che la accompagna alla Casa degli Eterni a riprendersi i draghi, e fa prendere ai dothraki l’oro di Xaro.',
    },
  },
  daeKovarroHouse: {
    character: 'kovarro',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'The bloodrider who found Qarth for her. He guards her at the House of the Undying and when she punishes Xaro.',
      it: 'Il cavaliere di sangue che ha trovato Qarth per lei. La protegge alla Casa degli Eterni e quando punisce Xaro.',
    },
  },

  // Jorah
  jorDaenerysQarth: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he followed across the Red Waste. In Qarth he tells her she will find no help there, and urges her to go to the warlock Pyat Pree.',
      it: 'La khaleesi che ha seguito attraverso il Deserto Rosso. A Qarth le dice che lì non troverà aiuto, e la esorta ad andare dallo stregone Pyat Pree.',
    },
  },
  jorXaroChapter: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Suitor', it: 'Pretendente' },
    summary: {
      en: 'The merchant prince who wants to marry Daenerys. Jorah tells her Xaro means to win one of her dragons through the marriage.',
      it: 'Il principe mercante che vuole sposare Daenerys. Jorah le dice che Xaro vuole ottenere uno dei suoi draghi con il matrimonio.',
    },
  },
  jorPyatPree: {
    character: 'pyat-pree',
    type: { en: 'Warlock', it: 'Stregone' },
    summary: {
      en: 'The warlock of Qarth. Jorah first tells Daenerys to avoid him and Xaro alike, then urges her to ask him for help.',
      it: 'Lo stregone di Qarth. All’inizio Jorah dice a Daenerys di stare lontana sia da lui sia da Xaro, poi la esorta a chiedergli aiuto.',
    },
  },
  jorIllyrioSelf: {
    character: 'illyrio-mopatis',
    type: { en: 'Magister', it: 'Magistro' },
    summary: {
      en: 'The magister of Pentos. When Daenerys thinks of going back to him, Jorah warns her that Illyrio cares only for himself.',
      it: 'Il magistro di Pentos. Quando Daenerys pensa di tornare da lui, Jorah la avverte che Illyrio pensa solo a se stesso.',
    },
  },
  jorDaenerysPort: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he serves. He comforts her after the House of the Undying, and at the port of Qarth he warns her that two men are following her.',
      it: 'La khaleesi che serve. La consola dopo la Casa degli Eterni, e al porto di Qarth la avverte che due uomini la stanno seguendo.',
    },
  },
  jorBelwas: {
    character: 'strong-belwas',
    type: { en: 'Stranger', it: 'Sconosciuto' },
    summary: {
      en: 'The huge, scarred man Jorah sees following Daenerys through the port. He says Illyrio sent him.',
      it: 'L’uomo enorme e pieno di cicatrici che Jorah vede seguire Daenerys per il porto. Dice che lo manda Illyrio.',
    },
  },
  jorArstan: {
    character: 'arstan-whitebeard',
    type: { en: 'Stranger', it: 'Sconosciuto' },
    summary: {
      en: 'The old man with a staff Jorah sees following Daenerys through the port. He saves her from a manticore.',
      it: 'Il vecchio con il bastone che Jorah vede seguire Daenerys per il porto. La salva da una manticora.',
    },
  },
  jorDaenerysFeelings: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he followed across the Red Waste. He advises her against Xaro’s offer and tells her what he feels for her; she does not return it.',
      it: 'La khaleesi che ha seguito attraverso il Deserto Rosso. Le sconsiglia l’offerta di Xaro e le dice ciò che prova per lei; lei non lo ricambia.',
    },
  },
  jorXaroEpisode: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Suitor', it: 'Pretendente' },
    summary: {
      en: 'The merchant prince who offers Daenerys his fortune to marry him. Jorah warns her that men like him always want something back.',
      it: 'Il principe mercante che offre a Daenerys la sua fortuna perché lo sposi. Jorah la avverte che quelli come lui vogliono sempre qualcosa in cambio.',
    },
  },
  jorKovarro: {
    character: 'kovarro',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'One of the khaleesi’s bloodriders. At Xaro’s feast Jorah explains to Daenerys that he and Malakho mean to steal a statue.',
      it: 'Uno dei cavalieri di sangue della khaleesi. Alla festa di Xaro, Jorah spiega a Daenerys che lui e Malakho vogliono rubare una statua.',
    },
  },
  jorMalakho: {
    character: 'malakho',
    type: { en: 'Dothraki warrior', it: 'Guerriero dothraki' },
    summary: {
      en: 'An old warrior of the khalasar. Jorah reports his words: the statue is too heavy to carry.',
      it: 'Un vecchio guerriero del khalasar. Jorah riferisce le sue parole: la statua è troppo pesante da portare via.',
    },
  },
  jorDaenerysHouse: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he serves. He wants her to leave Qarth without her dragons, but goes with her to the House of the Undying to take them back.',
      it: 'La khaleesi che serve. Vorrebbe che lasciasse Qarth senza i draghi, ma la accompagna alla Casa degli Eterni a riprenderli.',
    },
  },
  jorXaroVault: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Traitor', it: 'Traditore' },
    summary: {
      en: 'The merchant prince who betrayed Daenerys. She locks him in his empty vault, and Jorah has the Dothraki seize his gold.',
      it: 'Il principe mercante che ha tradito Daenerys. Lei lo chiude nella sua camera blindata vuota, e Jorah fa prendere ai dothraki il suo oro.',
    },
  },
  jorDoreahVault: {
    character: 'doreah',
    type: { en: 'Traitor', it: 'Traditrice' },
    summary: {
      en: 'The khaleesi’s handmaiden, found in Xaro’s bed. She betrayed Daenerys and is locked in the vault with him.',
      it: 'L’ancella della khaleesi, trovata nel letto di Xaro. Ha tradito Daenerys e viene chiusa con lui nella camera blindata.',
    },
  },

  // Illyrio, the books
  ilyDaenerysBelwas: {
    character: 'daenerys-targaryen',
    type: { en: 'Former guest', it: 'Ex ospite' },
    summary: {
      en: 'The queen he once kept in his house. He sends two men to Qarth to bring her and her dragons back to Pentos.',
      it: 'La regina che un tempo ospitava nella sua casa. Manda due uomini a Qarth a riportare lei e i suoi draghi a Pentos.',
    },
  },
  ilyBelwas: {
    character: 'strong-belwas',
    type: { en: 'His man', it: 'Suo uomo' },
    summary: {
      en: 'A eunuch pit fighter he sends to Qarth to bring Daenerys back.',
      it: 'Un eunuco, combattente delle arene, che manda a Qarth a riportare indietro Daenerys.',
    },
  },
  ilyArstan: {
    character: 'arstan-whitebeard',
    type: { en: 'His man', it: 'Suo uomo' },
    summary: {
      en: 'An old man, Belwas’s squire, he sends to Qarth with him.',
      it: 'Un vecchio, scudiero di Belwas, che manda a Qarth con lui.',
    },
  },

  // Irri
  irrDaenerysComfort: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she serves in the Red Waste. When Rakharo’s head comes back, Daenerys comforts her and promises him a funeral.',
      it: 'La khaleesi che serve nel Deserto Rosso. Quando torna la testa di Rakharo, Daenerys la consola e gli promette un funerale.',
    },
  },
  irrRakharoDead: {
    character: 'rakharo',
    type: { en: 'Bloodrider', it: 'Cavaliere di sangue' },
    summary: {
      en: 'One of the khaleesi’s bloodriders. His horse came back with his head, and Irri fears he cannot reach the night lands.',
      it: 'Uno dei cavalieri di sangue della khaleesi. Il suo cavallo è tornato con la sua testa, e Irri teme che non possa raggiungere le terre della notte.',
    },
  },
  irrDaenerysFriend: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she serves, who calls her a friend. In Qarth Irri urges her to wear the gown Xaro gave her.',
      it: 'La khaleesi che serve, che la chiama amica. A Qarth Irri la convince a indossare l’abito regalato da Xaro.',
    },
  },
  irrDaenerysDead: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she served, who called her a friend. Irri was strangled in Xaro’s house the night the dragons were stolen.',
      it: 'La khaleesi che serviva e che la chiamava amica. Irri è stata strangolata nella casa di Xaro la notte del furto dei draghi.',
    },
  },
  irrDoreahGone: {
    character: 'doreah',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another handmaiden of Daenerys. She was gone from Xaro’s house the night Irri was killed.',
      it: 'Un’altra ancella di Daenerys. La notte in cui Irri è stata uccisa era sparita dalla casa di Xaro.',
    },
  },
  irrDoreahPrincess: {
    character: 'doreah',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another handmaiden of Daenerys. When Doreah calls Daenerys a princess, Irri corrects her: she is a khaleesi.',
      it: 'Un’altra ancella di Daenerys. Quando Doreah chiama Daenerys principessa, Irri la corregge: è una khaleesi.',
    },
  },
  irrXaro: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Khaleesi’s host', it: 'Ospite della khaleesi' },
    summary: {
      en: 'The merchant prince who hosts the khaleesi in Qarth, said to be the richest man in the city.',
      it: 'Il principe mercante che ospita la khaleesi a Qarth, che si dice sia l’uomo più ricco della città.',
    },
  },
  irrDaenerysDragons: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she follows into the Red Waste. Irri and Jhiqui carry two of her dragons in a cage between their horses.',
      it: 'La khaleesi che segue nel Deserto Rosso. Irri e Jhiqui portano due dei suoi draghi in una gabbia appesa tra i loro cavalli.',
    },
  },
  irrDoreahDead: {
    character: 'doreah',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another handmaiden of Daenerys. She fell ill in the Red Waste and died.',
      it: 'Un’altra ancella di Daenerys. Si è ammalata nel Deserto Rosso ed è morta.',
    },
  },

  // Jhiqui, the books
  jhiDaenerysDragons: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she follows into the Red Waste. Jhiqui and Irri carry two of her dragons in a cage between their horses.',
      it: 'La khaleesi che segue nel Deserto Rosso. Jhiqui e Irri portano due dei suoi draghi in una gabbia appesa tra i loro cavalli.',
    },
  },
  jhiDoreahDead: {
    character: 'doreah',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another handmaiden of Daenerys. She fell ill in the Red Waste and died.',
      it: 'Un’altra ancella di Daenerys. Si è ammalata nel Deserto Rosso ed è morta.',
    },
  },

  // Doreah
  dorDaenerysDeath: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she taught to please Drogo. When Doreah falls ill with fever in the Red Waste, Daenerys stops the khalasar and holds her hand until she dies.',
      it: 'La khaleesi a cui ha insegnato a compiacere Drogo. Quando Doreah si ammala di febbre nel Deserto Rosso, Daenerys ferma il khalasar e le tiene la mano finché muore.',
    },
  },
  dorDaenerysQarth: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi she serves. In Qarth Daenerys asks her to win over Xaro’s friends and learn what they say about him.',
      it: 'La khaleesi che serve. A Qarth Daenerys le chiede di conquistare gli amici di Xaro e scoprire cosa dicono di lui.',
    },
  },
  dorIrriKhaleesi: {
    character: 'irri',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another of Daenerys’s handmaidens. When Doreah calls Daenerys a princess, Irri corrects her.',
      it: 'Un’altra ancella di Daenerys. Quando Doreah chiama Daenerys principessa, Irri la corregge.',
    },
  },
  dorXaro: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Khaleesi’s host', it: 'Ospite della khaleesi' },
    summary: {
      en: 'The merchant prince who hosts the khaleesi. Doreah has heard he is the richest man in Qarth, and admires the gown he had made for her.',
      it: 'Il principe mercante che ospita la khaleesi. Doreah ha sentito dire che è l’uomo più ricco di Qarth, e ammira l’abito che ha fatto fare per lei.',
    },
  },
  dorDaenerysVault: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi she betrayed', it: 'Khaleesi tradita' },
    summary: {
      en: 'The khaleesi she betrayed over the dragons. Daenerys finds her in Xaro’s bed and, deaf to her pleas, has her locked in his vault.',
      it: 'La khaleesi che ha tradito per i draghi. Daenerys la trova nel letto di Xaro e, sorda alle sue suppliche, la fa chiudere nella sua camera blindata.',
    },
  },
  dorXaroVault: {
    character: 'xaro-xhoan-daxos',
    type: { en: 'Accomplice', it: 'Complice' },
    summary: {
      en: 'The merchant prince she betrayed the khaleesi for. She is found in his bed, and they are locked in his empty vault together.',
      it: 'Il principe mercante per cui ha tradito la khaleesi. Viene trovata nel suo letto, e vengono chiusi insieme nella sua camera blindata vuota.',
    },
  },
  dorIrriDead: {
    character: 'irri',
    type: { en: 'Fellow handmaiden', it: 'Altra ancella' },
    summary: {
      en: 'Another of Daenerys’s handmaidens. She was strangled in Xaro’s house when the dragons were stolen.',
      it: 'Un’altra ancella di Daenerys. È stata strangolata nella casa di Xaro quando hanno rubato i draghi.',
    },
  },

  // Rakharo
  rakDaenerysScout: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he rides for as a bloodrider. She sends him to scout the Red Waste and tells him he has never failed her.',
      it: 'La khaleesi per cui cavalca come cavaliere di sangue. Lo manda in esplorazione nel Deserto Rosso e gli dice che non l’ha mai delusa.',
    },
  },
  rakKovarro: {
    character: 'kovarro',
    type: { en: 'Fellow bloodrider', it: 'Altro cavaliere di sangue' },
    summary: {
      en: 'Another of the khaleesi’s bloodriders, sent out to scout in another direction at the same time.',
      it: 'Un altro cavaliere di sangue della khaleesi, mandato in esplorazione nello stesso momento in un’altra direzione.',
    },
  },
  rakAggo: {
    character: 'aggo',
    type: { en: 'Fellow bloodrider', it: 'Altro cavaliere di sangue' },
    summary: {
      en: 'Another of the khaleesi’s bloodriders, sent out to scout in another direction at the same time.',
      it: 'Un altro cavaliere di sangue della khaleesi, mandato in esplorazione nello stesso momento in un’altra direzione.',
    },
  },
  rakDaenerysWaste: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he rides for as a bloodrider. She sends him south from the ruined city, and when he comes back she has him clear the plaza for grass.',
      it: 'La khaleesi per cui cavalca come cavaliere di sangue. Lo manda a sud dalla città in rovina, e quando torna gli fa liberare la piazza perché cresca l’erba.',
    },
  },
  rakDaenerysDead: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he rode for as a bloodrider. She sent him to scout the Red Waste, and only his horse came back, carrying his head.',
      it: 'La khaleesi per cui cavalcava come cavaliere di sangue. Lo ha mandato in esplorazione nel Deserto Rosso, ed è tornato solo il suo cavallo, con la sua testa.',
    },
  },
  rakKovarroDead: {
    character: 'kovarro',
    type: { en: 'Fellow bloodrider', it: 'Altro cavaliere di sangue' },
    summary: {
      en: 'Another of the khaleesi’s bloodriders, who rode out to scout in another direction when he did.',
      it: 'Un altro cavaliere di sangue della khaleesi, partito in esplorazione in un’altra direzione insieme a lui.',
    },
  },
  rakAggoDead: {
    character: 'aggo',
    type: { en: 'Fellow bloodrider', it: 'Altro cavaliere di sangue' },
    summary: {
      en: 'Another of the khaleesi’s bloodriders, who rode out to scout in another direction when he did.',
      it: 'Un altro cavaliere di sangue della khaleesi, partito in esplorazione in un’altra direzione insieme a lui.',
    },
  },
  rakAggoChapter: {
    character: 'aggo',
    type: { en: 'Fellow bloodrider', it: 'Altro cavaliere di sangue' },
    summary: {
      en: 'Another of the khaleesi’s bloodriders, sent to scout in another direction from the ruined city.',
      it: 'Un altro cavaliere di sangue della khaleesi, mandato in esplorazione in un’altra direzione dalla città in rovina.',
    },
  },
  rakJhogoChapter: {
    character: 'jhogo',
    type: { en: 'Fellow bloodrider', it: 'Altro cavaliere di sangue' },
    summary: {
      en: 'Another of the khaleesi’s bloodriders. Sent out to scout with him, he comes back last, bringing three strangers from Qarth.',
      it: 'Un altro cavaliere di sangue della khaleesi. Mandato in esplorazione con lui, torna per ultimo, con tre stranieri di Qarth.',
    },
  },
  rakDaenerysHouse: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he rides for. He waits for her outside the House of the Undying, and protects her when the warlock attacks.',
      it: 'La khaleesi per cui cavalca. La aspetta fuori dalla Casa degli Eterni, e la protegge quando lo stregone la aggredisce.',
    },
  },
  rakPyatPree: {
    character: 'pyat-pree',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The warlock who goes at the khaleesi with a dagger outside the House of the Undying. Rakharo knocks him to the ground.',
      it: 'Lo stregone che aggredisce la khaleesi con un pugnale fuori dalla Casa degli Eterni. Rakharo lo butta a terra con uno schiaffo.',
    },
  },

  // Jhogo, the books
  jhoDaenerysWaste: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he rides for as a bloodrider. She sends him southeast from the ruined city, and he comes back with three strangers from Qarth.',
      it: 'La khaleesi per cui cavalca come cavaliere di sangue. Lo manda a sud-est dalla città in rovina, e lui torna con tre stranieri di Qarth.',
    },
  },
  jhoQuaithe: {
    character: 'quaithe',
    type: { en: 'Stranger', it: 'Straniera' },
    summary: {
      en: 'The woman of the Shadow, one of the strangers he brings back from the Red Waste. She came looking for dragons.',
      it: 'La donna dell’Ombra, una degli stranieri che riporta dal Deserto Rosso. È venuta a cercare i draghi.',
    },
  },
  jhoRakharo: {
    character: 'rakharo',
    type: { en: 'Fellow bloodrider', it: 'Altro cavaliere di sangue' },
    summary: {
      en: 'Another of the khaleesi’s bloodriders, sent to scout in another direction from the ruined city.',
      it: 'Un altro cavaliere di sangue della khaleesi, mandato in esplorazione in un’altra direzione dalla città in rovina.',
    },
  },
  jhoAggo: {
    character: 'aggo',
    type: { en: 'Fellow bloodrider', it: 'Altro cavaliere di sangue' },
    summary: {
      en: 'Another of the khaleesi’s bloodriders, sent to scout in another direction from the ruined city.',
      it: 'Un altro cavaliere di sangue della khaleesi, mandato in esplorazione in un’altra direzione dalla città in rovina.',
    },
  },
  jhoDaenerysHouse: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he guards in Qarth. He waits for her outside the House of the Undying, and protects her when the warlock attacks.',
      it: 'La khaleesi che protegge a Qarth. La aspetta fuori dalla Casa degli Eterni, e la difende quando lo stregone la aggredisce.',
    },
  },
  jhoPyatPree: {
    character: 'pyat-pree',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The warlock who goes at the khaleesi with a dagger outside the House of the Undying. Jhogo knocks the knife aside with his whip.',
      it: 'Lo stregone che aggredisce la khaleesi con un pugnale fuori dalla Casa degli Eterni. Jhogo gli fa volare via il pugnale con la frusta.',
    },
  },
  jhoQuaitheWary: {
    character: 'quaithe',
    type: { en: 'Stranger', it: 'Straniera' },
    summary: {
      en: 'The masked woman he brought back from the Red Waste. When she tells the khaleesi to go to Asshai, he and the other bloodriders tell her not to trust her.',
      it: 'La donna mascherata che ha riportato dal Deserto Rosso. Quando dice alla khaleesi di andare ad Asshai, lui e gli altri cavalieri di sangue le dicono di non fidarsi.',
    },
  },

  // Aggo
  aggDaenerysScout: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he rides for as a bloodrider. In the Red Waste she sends him to scout in one direction, and the others in two more.',
      it: 'La khaleesi per cui cavalca come cavaliere di sangue. Nel Deserto Rosso lo manda in esplorazione in una direzione, e gli altri in altre due.',
    },
  },
  aggRakharo: {
    character: 'rakharo',
    type: { en: 'Fellow bloodrider', it: 'Altro cavaliere di sangue' },
    summary: {
      en: 'Another of the khaleesi’s bloodriders, sent out to scout in another direction at the same time.',
      it: 'Un altro cavaliere di sangue della khaleesi, mandato in esplorazione nello stesso momento in un’altra direzione.',
    },
  },
  aggKovarro: {
    character: 'kovarro',
    type: { en: 'Fellow bloodrider', it: 'Altro cavaliere di sangue' },
    summary: {
      en: 'Another of the khaleesi’s bloodriders, sent out to scout in another direction at the same time.',
      it: 'Un altro cavaliere di sangue della khaleesi, mandato in esplorazione nello stesso momento in un’altra direzione.',
    },
  },
  aggDaenerysWaste: {
    character: 'daenerys-targaryen',
    type: { en: 'Khaleesi', it: 'Khaleesi' },
    summary: {
      en: 'The khaleesi he rides for as a bloodrider. She sends him southwest from the ruined city, and when he comes back she has him repair its gates.',
      it: 'La khaleesi per cui cavalca come cavaliere di sangue. Lo manda a sud-ovest dalla città in rovina, e quando torna gli fa riparare le porte.',
    },
  },
  aggDrogon: {
    character: 'drogon',
    type: { en: 'Khaleesi’s dragon', it: 'Drago della khaleesi' },
    summary: {
      en: 'The khaleesi’s black dragon. Aggo says he is Balerion reborn.',
      it: 'Il drago nero della khaleesi. Aggo dice che è Balerion rinato.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * Stage 2's King's Landing and Blackwater cards for the season-1 cast
 * (#1479): season 2 and A Clash of Kings, episodes 11 to 20 and chapters 74
 * to 143. The new characters' own cards are in `season-2.relationships.ts`.
 */
const kingsLanding2 = {
  // Tyrion
  tyrJanosBook: {
    character: 'janos-slynt',
    type: { en: 'Dismissed commander', it: 'Comandante destituito' },
    summary: {
      en: 'The commander of the City Watch. Tyrion dines him, asks about the murder of Robert’s baby daughter and Eddard’s death, then has him taken to the Wall.',
      it: 'Il comandante della Guardia cittadina. Tyrion lo invita a cena, gli chiede della figlia neonata di Robert uccisa e della morte di Eddard, poi lo fa portare alla Barriera.',
    },
  },
  tyrJacelynBook: {
    character: 'jacelyn-bywater',
    type: { en: 'New commander', it: 'Nuovo comandante' },
    summary: {
      en: 'The knight he names commander of the City Watch in Janos’s place.',
      it: 'Il cavaliere che nomina comandante della Guardia cittadina al posto di Janos.',
    },
  },
  tyrVarysHand: {
    character: 'varys',
    type: { en: 'Master of whispers', it: 'Maestro dei sussurri' },
    summary: {
      en: 'Serves him now that he is Hand, and tells him what he knows. Tyrion does not trust him, and cannot do without him.',
      it: 'Ora che è Primo Cavaliere serve lui, e gli riferisce ciò che sa. Tyrion non si fida di lui, ma non può farne a meno.',
    },
  },
  tyrBronnGuard: {
    character: 'bronn',
    type: { en: 'Captain of his guard', it: 'Capitano della sua guardia' },
    summary: {
      en: 'The sellsword who recruits his guard, hiring only those who impress him in a duel.',
      it: 'Il mercenario che recluta la sua guardia, assumendo solo chi lo impressiona in duello.',
    },
  },
  tyrBronnWatch: {
    character: 'bronn',
    type: {
      en: 'Commander of the City Watch',
      it: 'Comandante della Guardia cittadina',
    },
    summary: {
      en: 'The sellsword he makes commander of the City Watch once Janos Slynt is gone, and whose loyalty he tests.',
      it: 'Il mercenario che mette a capo della Guardia cittadina dopo la partenza di Janos Slynt, e di cui mette alla prova la lealtà.',
    },
  },
  tyrJanosShow: {
    character: 'janos-slynt',
    type: { en: 'Dismissed commander', it: 'Comandante destituito' },
    summary: {
      en: 'The commander of the City Watch, whom Tyrion sends to the Wall to take the black and replaces with Bronn.',
      it: 'Il comandante della Guardia cittadina, che Tyrion manda alla Barriera a vestire di nero e sostituisce con Bronn.',
    },
  },
  tyrVarysShow: {
    character: 'varys',
    type: { en: 'Master of whispers', it: 'Maestro dei sussurri' },
    summary: {
      en: 'Finds Shae in the Tower of the Hand, and lets Tyrion know that he knows.',
      it: 'Scopre Shae nella Torre del Primo Cavaliere, e fa capire a Tyrion di saperlo.',
    },
  },
  tyrTywinHandBook: {
    character: 'tywin-lannister',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, now Hand of the King, who has taken the Tower of the Hand. Tyrion lies hurt in Maegor’s Holdfast.',
      it: 'Suo padre, ora Primo Cavaliere del re, che ha preso la Torre del Primo Cavaliere. Tyrion giace ferito nella Fortezza di Maegor.',
    },
  },
  tyrPodSilent: {
    character: 'podrick-payne',
    type: { en: 'Squire', it: 'Scudiero' },
    summary: {
      en: 'His squire, who watches over him after the battle. Tyrion swears him to silence about what happened at the docks.',
      it: 'Il suo scudiero, che lo veglia dopo la battaglia. Tyrion gli fa giurare di tacere su ciò che è successo al molo.',
    },
  },
  tyrBronnCalled: {
    character: 'bronn',
    type: { en: 'Sellsword', it: 'Mercenario' },
    summary: {
      en: 'The sellsword he asks his squire to bring to him.',
      it: 'Il mercenario che chiede al suo scudiero di portargli.',
    },
  },
  tyrTywinHandShow: {
    character: 'tywin-lannister',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who has come back to the city and takes over as Hand while Tyrion lies wounded.',
      it: 'Suo padre, tornato in città, che prende il suo posto di Primo Cavaliere mentre Tyrion giace ferito.',
    },
  },
  tyrVarysAfter: {
    character: 'varys',
    type: { en: 'Master of whispers', it: 'Maestro dei sussurri' },
    summary: {
      en: 'Visits him to say that Bronn has lost his command and the clansmen have gone home. He thanks him for the city’s defence.',
      it: 'Gli fa visita per dirgli che Bronn ha perso il comando e che i montanari sono tornati a casa. Lo ringrazia per la difesa della città.',
    },
  },
  tyrShaeLeave: {
    character: 'shae',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'Begs him to leave with her for Pentos. He refuses.',
      it: 'Lo prega di partire con lei per Pentos. Lui rifiuta.',
    },
  },
  tyrBronnRelieved: {
    character: 'bronn',
    type: { en: 'Sellsword', it: 'Mercenario' },
    summary: {
      en: 'The sellsword who commanded the City Watch for him, and has now been relieved of the post.',
      it: 'Il mercenario che comandava la Guardia cittadina per lui, e che ora è stato sollevato dall’incarico.',
    },
  },

  // Bronn
  brnTyrionWatch: {
    character: 'tyrion-lannister',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'The Hand, who rewards his loyalty with command of the City Watch, then asks him whether he would kill an infant if told to.',
      it: 'Il Primo Cavaliere, che premia la sua lealtà con il comando della Guardia cittadina e poi gli chiede se ucciderebbe un neonato, se glielo ordinassero.',
    },
  },
  brnJanosShow: {
    character: 'janos-slynt',
    type: { en: 'Predecessor', it: 'Predecessore' },
    summary: {
      en: 'The commander he replaces once Tyrion sends Janos to the Wall.',
      it: 'Il comandante che sostituisce dopo che Tyrion manda Janos alla Barriera.',
    },
  },
  brnPycelle: {
    character: 'pycelle',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The Grand Maester he arrests for Tyrion. He cuts off most of his beard and locks him in the Black Cells.',
      it: 'Il gran maestro che arresta per Tyrion. Gli taglia gran parte della barba e lo chiude nelle celle nere.',
    },
  },
  brnTyrionGuard: {
    character: 'tyrion-lannister',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'The Hand, whose guard he is recruiting. Asked whether he would kill a baby girl on command, he says he would first ask how much.',
      it: 'Il Primo Cavaliere, di cui sta reclutando la guardia. Alla domanda se ucciderebbe una neonata a comando, risponde che prima chiederebbe quanto.',
    },
  },

  // Shae
  shaTyrionTower: {
    character: 'tyrion-lannister',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'The man who keeps her hidden in the Tower of the Hand, then finds her a place at court as Sansa’s handmaiden.',
      it: 'L’uomo che la tiene nascosta nella Torre del Primo Cavaliere e poi le trova un posto a corte come ancella di Sansa.',
    },
  },
  shaSansa: {
    character: 'sansa-stark',
    type: { en: 'Mistress', it: 'Padrona' },
    summary: {
      en: 'The captive Stark girl she serves as handmaiden, at Tyrion’s arrangement.',
      it: 'La giovane Stark prigioniera di cui è ancella, per volere di Tyrion.',
    },
  },
  shaVarysShow: {
    character: 'varys',
    type: { en: 'Spy who found her', it: 'La spia che l’ha scoperta' },
    summary: {
      en: 'The master of whispers, who learns she is in the Tower and hints to Tyrion that he knows.',
      it: 'Il maestro dei sussurri, che scopre che è nella Torre e fa capire a Tyrion di saperlo.',
    },
  },
  shaTyrionBook: {
    character: 'tyrion-lannister',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'The Hand, who keeps her in the city and sees her in secret. Varys offers a way to bring her into the keep.',
      it: 'Il Primo Cavaliere, che la tiene in città e la vede di nascosto. Varys offre un modo per portarla dentro la fortezza.',
    },
  },
  shaLollys: {
    character: 'lollys-stokeworth',
    type: { en: 'Mistress to be', it: 'Futura padrona' },
    summary: {
      en: 'Lady Tanda’s daughter, in whose household Varys suggests she serve as a maid.',
      it: 'La figlia di lady Tanda, nella cui casa Varys suggerisce che lei serva come cameriera.',
    },
  },
  shaVarysBook: {
    character: 'varys',
    type: { en: 'Go-between', it: 'Intermediario' },
    summary: {
      en: 'The eunuch who plans her place in Lollys’s household, and a secret passage to the Tower of the Hand.',
      it: 'L’eunuco che organizza il suo posto in casa di Lollys, e un passaggio segreto verso la Torre del Primo Cavaliere.',
    },
  },

  // Pycelle
  pycTyrionShow: {
    character: 'tyrion-lannister',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The Hand, who tests him with a false marriage plan, has him arrested when Cersei hears of it and locks him in the Black Cells.',
      it: 'Il Primo Cavaliere, che lo mette alla prova con un falso piano di nozze, lo fa arrestare quando Cersei lo viene a sapere e lo chiude nelle celle nere.',
    },
  },
  pycCersei: {
    character: 'cersei-lannister',
    type: { en: 'Queen he told', it: 'Regina a cui ha riferito' },
    summary: {
      en: 'The queen regent, to whom he gives away Tyrion’s secret plan for Myrcella.',
      it: 'La regina reggente, a cui rivela il piano segreto di Tyrion per Myrcella.',
    },
  },
  pycBronn: {
    character: 'bronn',
    type: { en: 'Jailer', it: 'Carceriere' },
    summary: {
      en: 'The sellsword who arrests him, cuts off most of his beard and takes him to the Black Cells.',
      it: 'Il mercenario che lo arresta, gli taglia gran parte della barba e lo porta alle celle nere.',
    },
  },
  pycDaisy: {
    character: 'daisy',
    type: { en: 'Prostitute', it: 'Prostituta' },
    summary: {
      en: 'The girl in his bed when he is arrested.',
      it: 'La ragazza nel suo letto quando viene arrestato.',
    },
  },
  pycTyrionBook: {
    character: 'tyrion-lannister',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The Hand, who gave him a secret to pass on, learned that it reached the queen, and has him dragged from his bed to a black cell.',
      it: 'Il Primo Cavaliere, che gli ha affidato un segreto da riferire, ha scoperto che è arrivato alla regina, e lo fa trascinare dal letto in una cella nera.',
    },
  },
  pycShagga: {
    character: 'shagga',
    type: { en: 'Tormentor', it: 'Aguzzino' },
    summary: {
      en: 'The clansman who hacks away most of his beard with an axe while Tyrion makes him confess.',
      it: 'Il montanaro che gli taglia gran parte della barba con l’ascia mentre Tyrion lo costringe a confessare.',
    },
  },
  pycVarys: {
    character: 'varys',
    type: { en: 'Rival he accuses', it: 'Rivale che accusa' },
    summary: {
      en: 'The master of whispers, whom he tries to blame when Tyrion confronts him.',
      it: 'Il maestro dei sussurri, che cerca di incolpare quando Tyrion lo affronta.',
    },
  },

  // Petyr Baelish
  petTyrionHarrenhal: {
    character: 'tyrion-lannister',
    type: { en: 'Hand who enlists him', it: 'Primo Cavaliere che lo ingaggia' },
    summary: {
      en: 'The Hand, who offers him Harrenhal and the riverlands if he wins the Vale for Joffrey through Lysa.',
      it: 'Il Primo Cavaliere, che gli offre Harrenhal e le Terre dei Fiumi se porta la Valle dalla parte di Joffrey tramite Lysa.',
    },
  },
  petLysaScheme: {
    character: 'lysa-arryn',
    type: { en: 'Widow he is to win', it: 'Vedova da convincere' },
    summary: {
      en: 'The lady of the Vale, whom Tyrion wants on Joffrey’s side. Petyr is the one to persuade her.',
      it: 'La signora della Valle, che Tyrion vuole dalla parte di Joffrey. Spetta a Petyr convincerla.',
    },
  },
  petJoffreyHarrenhal: {
    character: 'joffrey-baratheon',
    type: { en: 'King who rewards him', it: 'Re che lo premia' },
    summary: {
      en: 'The king, who gives him Harrenhal at the court of rewards for brokering the alliance with the Tyrells.',
      it: 'Il re, che gli dà Harrenhal alla cerimonia delle ricompense per aver combinato l’alleanza con i Tyrell.',
    },
  },
  petSansaHelp: {
    character: 'sansa-stark',
    type: { en: 'Girl he will help', it: 'Ragazza che aiuterà' },
    summary: {
      en: 'The Stark girl freed from her betrothal. He warns her that Joffrey will still torment her, and promises to get her out of the city for her mother’s sake.',
      it: 'La giovane Stark liberata dal fidanzamento. La avverte che Joffrey continuerà a tormentarla, e le promette di portarla via dalla città per amore di sua madre.',
    },
  },
  petRosFear: {
    character: 'ros',
    type: { en: 'Employee', it: 'Dipendente' },
    summary: {
      en: 'A prostitute in his brothel, who admits to Varys that she is afraid of him.',
      it: 'Una prostituta del suo bordello, che ammette con Varys di avere paura di lui.',
    },
  },

  // Varys
  varTyrionHand: {
    character: 'tyrion-lannister',
    type: { en: 'Hand he serves', it: 'Primo Cavaliere che serve' },
    summary: {
      en: 'The new Hand. He says he serves the realm, the king and Tyrion, who does not trust him.',
      it: 'Il nuovo Primo Cavaliere. Dice di servire il regno, il re e lui, che non si fida di lui.',
    },
  },
  varJacelyn: {
    character: 'jacelyn-bywater',
    type: { en: 'Man he backs', it: 'Uomo che sostiene' },
    summary: {
      en: 'The knight he recommends to Tyrion as the one to lead the City Watch.',
      it: 'Il cavaliere che raccomanda a Tyrion per guidare la Guardia cittadina.',
    },
  },
  varGendry: {
    character: 'gendry',
    type: { en: 'Bastard he saved', it: 'Bastardo che ha salvato' },
    summary: {
      en: 'Robert’s older bastard son, whom he says he took steps to save before the queen’s men came for the others.',
      it: 'Il figlio bastardo più grande di Robert, che dice di aver messo in salvo prima che gli uomini della regina venissero per gli altri.',
    },
  },
  varCerseiBastards: {
    character: 'cersei-lannister',
    type: { en: 'Queen he failed', it: 'Regina che non ha fermato' },
    summary: {
      en: 'The queen regent, who had Robert’s baby daughter killed. Varys says he never thought she would count a baby a threat.',
      it: 'La regina reggente, che ha fatto uccidere la figlia neonata di Robert. Varys dice di non aver mai pensato che una neonata sembrasse una minaccia.',
    },
  },
  varTyrionWounded: {
    character: 'tyrion-lannister',
    type: { en: 'Wounded Hand', it: 'Primo Cavaliere ferito' },
    summary: {
      en: 'The former Hand, whom he visits to say that Bronn has lost his command. He thanks him for defending the city.',
      it: 'L’ex Primo Cavaliere, che visita per dirgli che Bronn ha perso il comando. Lo ringrazia per aver difeso la città.',
    },
  },
  varRos: {
    character: 'ros',
    type: { en: 'Prostitute he visits', it: 'Prostituta che visita' },
    summary: {
      en: 'A prostitute in Littlefinger’s brothel. He gets her to admit she fears her employer, and says he protects those who work for him.',
      it: 'Una prostituta del bordello di Ditocorto. Le fa ammettere di avere paura del suo padrone, e le dice che lui protegge chi lavora per lui.',
    },
  },

  // Sandor Clegane
  sdrSansa: {
    character: 'sansa-stark',
    type: {
      en: 'Girl he could take away',
      it: 'Ragazza che potrebbe portare via',
    },
    summary: {
      en: 'The Stark girl he has guarded. After he leaves the battle he comes to her room and offers to take her away from King’s Landing.',
      it: 'La giovane Stark che ha sorvegliato. Dopo aver lasciato la battaglia va nella sua stanza e le offre di portarla via da Approdo del Re.',
    },
  },
  sdrJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King he walks out on', it: 'Re che abbandona' },
    summary: {
      en: 'The king he has guarded. He quits the battle, and King’s Landing, rather than serve him any longer.',
      it: 'Il re che ha protetto. Lascia la battaglia, e Approdo del Re, piuttosto che servirlo ancora.',
    },
  },

  // Sansa
  sanJoffreyBook: {
    character: 'joffrey-baratheon',
    type: { en: 'Betrothed', it: 'Promesso sposo' },
    summary: {
      en: 'The king she is still to marry. Her sleeves hide the bruises from the blows he had Ser Boros give her when Robb was named king.',
      it: 'Il re che dovrà ancora sposare. Le maniche nascondono i lividi dei colpi che ha fatto darle da ser Boros quando Robb è stato proclamato re.',
    },
  },
  sanSandorBook: {
    character: 'sandor-clegane',
    type: { en: 'The Hound', it: 'Il Mastino' },
    summary: {
      en: 'Joffrey’s sworn shield, whom he never orders to strike her. He backs her up when she talks the king out of drowning Dontos.',
      it: 'La guardia giurata di Joffrey, a cui il re non ordina mai di colpirla. La sostiene quando lei convince il re a non affogare Dontos.',
    },
  },
  sanDontosSaved: {
    character: 'dontos-hollard',
    type: { en: 'Fool she saved', it: 'Buffone che ha salvato' },
    summary: {
      en: 'The drunken knight Joffrey wants drowned in wine. She suggests making him a fool instead, and he thanks her.',
      it: 'Il cavaliere ubriaco che Joffrey vuole affogare nel vino. Lei propone di farne un buffone, e lui la ringrazia.',
    },
  },
  sanArys: {
    character: 'arys-oakheart',
    type: { en: 'Escort', it: 'Scorta' },
    summary: {
      en: 'The Kingsguard knight who walks her to the tourney. He is courteous, and the only one of the Kingsguard who objects when she is struck.',
      it: 'Il cavaliere della Guardia reale che l’accompagna al torneo. È cortese, ed è l’unico della Guardia reale a opporsi quando la picchiano.',
    },
  },
  sanTyrionBook: {
    character: 'tyrion-lannister',
    type: { en: 'The king’s uncle', it: 'Zio del re' },
    summary: {
      en: 'The dwarf who rides in as Joffrey’s uncle. He is gentler with her than the king is, but she tells herself never to trust a Lannister again.',
      it: 'Il nano che arriva come zio di Joffrey. È più gentile con lei del re, ma lei si ripete di non fidarsi mai più di un Lannister.',
    },
  },
  sanShae: {
    character: 'shae',
    type: { en: 'Handmaiden', it: 'Ancella' },
    summary: {
      en: 'The girl Tyrion arranges to serve her.',
      it: 'La ragazza che Tyrion le assegna come ancella.',
    },
  },
  sanTyrionShow: {
    character: 'tyrion-lannister',
    type: { en: 'The king’s uncle', it: 'Zio del re' },
    summary: {
      en: 'The acting Hand, who steps in when Joffrey has her beaten in front of the court and offers to end her engagement. She keeps up her show of loyalty, and he is impressed.',
      it: 'Il Primo Cavaliere in carica, che interviene quando Joffrey la fa picchiare davanti alla corte e le offre di sciogliere il fidanzamento. Lei mantiene la facciata di lealtà, e Tyrion ne è colpito.',
    },
  },
  sanJoffreyShow: {
    character: 'joffrey-baratheon',
    type: { en: 'Betrothed', it: 'Promesso sposo' },
    summary: {
      en: 'The king she is still to marry. When Robb wins a great victory he has her stripped and beaten in front of the court.',
      it: 'Il re che dovrà ancora sposare. Quando Robb ottiene una grande vittoria la fa spogliare e picchiare davanti alla corte.',
    },
  },
  sanJoffreyVoid: {
    character: 'joffrey-baratheon',
    type: { en: 'Former betrothed', it: 'Ex promesso sposo' },
    summary: {
      en: 'The king whose betrothal to her is declared void because of House Stark’s rebellion. He is to marry Margaery Tyrell instead.',
      it: 'Il re il cui fidanzamento con lei viene dichiarato nullo per la ribellione di Casa Stark. Sposerà invece Margaery Tyrell.',
    },
  },
  sanMargaery: {
    character: 'margaery-tyrell',
    type: { en: 'Joffrey’s new bride', it: 'Nuova sposa di Joffrey' },
    summary: {
      en: 'The Tyrell girl the king will marry in her place. Sansa is glad of it.',
      it: 'La ragazza Tyrell che il re sposerà al suo posto. Sansa ne è felice.',
    },
  },
  sanDontosEscape: {
    character: 'dontos-hollard',
    type: { en: 'Would-be rescuer', it: 'Possibile salvatore' },
    summary: {
      en: 'The fool who meets her in the godswood and warns her that Cersei still means to keep her. He says they will escape during Joffrey’s wedding, in about a month.',
      it: 'Il buffone che la incontra nel parco degli dei e la avverte che Cersei vuole ancora tenerla. Dice che fuggiranno durante le nozze di Joffrey, tra circa un mese.',
    },
  },
  sanJoffreyFreed: {
    character: 'joffrey-baratheon',
    type: { en: 'Former betrothed', it: 'Ex promesso sposo' },
    summary: {
      en: 'The king, who sets aside his betrothal to her at the court of rewards and agrees to wed Margaery Tyrell instead.',
      it: 'Il re, che alla cerimonia delle ricompense scioglie il fidanzamento con lei e accetta di sposare Margaery Tyrell.',
    },
  },
  sanPetyr: {
    character: 'petyr-baelish',
    type: { en: 'Lord who offers help', it: 'Lord che offre aiuto' },
    summary: {
      en: 'Littlefinger, who warns her that freedom from the betrothal will not stop Joffrey tormenting her, and promises to get her out for her mother’s sake.',
      it: 'Ditocorto, che la avverte che essere libera dal fidanzamento non impedirà a Joffrey di tormentarla, e le promette di portarla via per amore di sua madre.',
    },
  },

  // Janos Slynt
  janTyrionShow: {
    character: 'tyrion-lannister',
    type: { en: 'Hand who exiles him', it: 'Primo Cavaliere che lo esilia' },
    summary: {
      en: 'The acting Hand, who sends him to the Wall to take the black.',
      it: 'Il Primo Cavaliere in carica, che lo manda alla Barriera a vestire di nero.',
    },
  },
  janBronn: {
    character: 'bronn',
    type: { en: 'Successor', it: 'Successore' },
    summary: {
      en: 'The sellsword who takes over the City Watch from him.',
      it: 'Il mercenario che gli subentra al comando della Guardia cittadina.',
    },
  },
  janTyrionBook: {
    character: 'tyrion-lannister',
    type: { en: 'Hand who exiles him', it: 'Primo Cavaliere che lo esilia' },
    summary: {
      en: 'The Hand, who dines him, questions him about Eddard’s death and the murder of Robert’s baby daughter, then sends him to the Wall.',
      it: 'Il Primo Cavaliere, che lo invita a cena, lo interroga sulla morte di Eddard e sulla figlia neonata di Robert uccisa, poi lo manda alla Barriera.',
    },
  },
  janJacelyn: {
    character: 'jacelyn-bywater',
    type: { en: 'Successor', it: 'Successore' },
    summary: {
      en: 'The knight who takes over the City Watch from him. They meet at the door as he is led away.',
      it: 'Il cavaliere che gli subentra al comando della Guardia cittadina. Si incontrano sulla porta mentre lo portano via.',
    },
  },

  // Lancel Lannister
  lanTyrionSpy: {
    character: 'tyrion-lannister',
    type: { en: 'Hand who turns him', it: 'Primo Cavaliere che lo piega' },
    summary: {
      en: 'The Hand, who stands up to his threats and has him report on the queen in secret.',
      it: 'Il Primo Cavaliere, che non si lascia intimidire dalle sue minacce e lo costringe a spiare la regina per lui.',
    },
  },

  // Cersei
  cerTyrionHand: {
    character: 'tyrion-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, the acting Hand. He sends Myrcella to Dorne and puts Joffrey on the walls; she strikes back through the woman she takes for his lover.',
      it: 'Suo fratello, il Primo Cavaliere in carica. Manda Myrcella a Dorne e mette Joffrey sulle mura; lei si vendica sulla donna che crede la sua amante.',
    },
  },
  cerRosCaptive: {
    character: 'ros',
    type: { en: 'Prostitute she holds', it: 'Prostituta che trattiene' },
    summary: {
      en: 'The prostitute she has seized and threatened, mistaking her for Tyrion’s lover.',
      it: 'La prostituta che ha fatto prendere e minacciato, scambiandola per l’amante di Tyrion.',
    },
  },
  cerTyrionBook: {
    character: 'tyrion-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, the acting Hand, who has plotted against her since he arrived. She shows him a beaten girl she takes for his lover.',
      it: 'Suo fratello, il Primo Cavaliere in carica, che complotta contro di lei da quando è arrivato. Gli mostra una ragazza picchiata che crede la sua amante.',
    },
  },
  cerAlayaya: {
    character: 'alayaya',
    type: { en: 'Girl she seized', it: 'Ragazza che ha preso' },
    summary: {
      en: 'The prostitute she has beaten and brings before Tyrion, taking her for his lover.',
      it: 'La prostituta che ha fatto picchiare e porta davanti a Tyrion, credendola la sua amante.',
    },
  },
  cerOsmund: {
    character: 'osmund-kettleblack',
    type: {
      en: 'Her pick for the Kingsguard',
      it: 'Sua scelta per la Guardia reale',
    },
    summary: {
      en: 'The knight she names to the Kingsguard over Tyrion’s doubts. His brothers do her bidding, as in seizing Alayaya.',
      it: 'Il cavaliere che nomina nella Guardia reale nonostante i dubbi di Tyrion. I suoi fratelli eseguono i suoi ordini, come quando prendono Alayaya.',
    },
  },

  // Joffrey
  jofRosShow: {
    character: 'ros',
    type: { en: 'Prostitute sent to him', it: 'Prostituta mandata a lui' },
    summary: {
      en: 'One of the two prostitutes his uncle sends him. He makes her hit the other, with a crossbow aimed at her.',
      it: 'Una delle due prostitute che suo zio gli manda. La costringe a colpire l’altra, con una balestra puntata contro di lei.',
    },
  },
  jofDaisyShow: {
    character: 'daisy',
    type: { en: 'Prostitute sent to him', it: 'Prostituta mandata a lui' },
    summary: {
      en: 'The other prostitute his uncle sends him. He has Ros beat her.',
      it: 'L’altra prostituta che suo zio gli manda. Fa picchiare lei da Ros.',
    },
  },
  jofTyrionShow: {
    character: 'tyrion-lannister',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, the acting Hand, who sent the two prostitutes. Joffrey wants him to see what was done to them.',
      it: 'Suo zio, il Primo Cavaliere in carica, che ha mandato le due prostitute. Joffrey vuole che veda che cosa è stato fatto loro.',
    },
  },
  jofSansaVoid: {
    character: 'sansa-stark',
    type: { en: 'Betrothal set aside', it: 'Fidanzamento sciolto' },
    summary: {
      en: 'His betrothed, whose betrothal the High Septon declares void because of her house’s rebellion.',
      it: 'La sua promessa sposa, il cui fidanzamento l’Alto Septon dichiara nullo per la ribellione della sua casa.',
    },
  },
  jofMargaery: {
    character: 'margaery-tyrell',
    type: { en: 'Bride to be', it: 'Futura sposa' },
    summary: {
      en: 'Margaery Tyrell, whom Garlan asks him to wed. Her family’s help saved the city.',
      it: 'Margaery Tyrell, che Garlan gli chiede di sposare. L’aiuto della sua famiglia ha salvato la città.',
    },
  },
  jofGarlan: {
    character: 'garlan-tyrell',
    type: { en: 'Petitioner', it: 'Supplice' },
    summary: {
      en: 'The knight who asks him, at the court of rewards, to marry his sister.',
      it: 'Il cavaliere che gli chiede, alla cerimonia delle ricompense, di sposare sua sorella.',
    },
  },
  jofHallyne: {
    character: 'hallyne',
    type: { en: 'Pyromancer he ennobles', it: 'Piromante che nobilita' },
    summary: {
      en: 'The guild’s pyromancer, whom he names a lord for the wildfire, with no lands.',
      it: 'Il piromante della gilda, che nomina lord per l’altofuoco, senza terre.',
    },
  },

  // Ros (show only)
  rosJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King she is sent to', it: 'Re da cui è mandata' },
    summary: {
      en: 'The king who forces her to beat Daisy, a crossbow aimed at her, and has them show Tyrion the result.',
      it: 'Il re che la costringe a picchiare Daisy, con una balestra puntata contro, e le manda a mostrare il risultato a Tyrion.',
    },
  },
  rosDaisy: {
    character: 'daisy',
    type: { en: 'Fellow prostitute', it: 'Collega' },
    summary: {
      en: 'The new girl she showed round Littlefinger’s brothel, and is made to beat.',
      it: 'La nuova ragazza a cui ha fatto da guida nel bordello di Ditocorto, e che è costretta a picchiare.',
    },
  },
  rosTyrionSent: {
    character: 'tyrion-lannister',
    type: { en: 'Client', it: 'Cliente' },
    summary: {
      en: 'The acting Hand, who hires her and Daisy out as a gift to the king.',
      it: 'Il Primo Cavaliere in carica, che la manda con Daisy in dono al re.',
    },
  },
  rosCerseiCaptive: {
    character: 'cersei-lannister',
    type: { en: 'Captor', it: 'Carceriera' },
    summary: {
      en: 'The queen, who has her seized and threatens her, believing she is Tyrion’s lover.',
      it: 'La regina, che la fa prendere e la minaccia, credendola l’amante di Tyrion.',
    },
  },
  rosTyrionCaptive: {
    character: 'tyrion-lannister',
    type: { en: 'Man she is taken for', it: 'Uomo di cui è creduta l’amante' },
    summary: {
      en: 'The acting Hand, whose lover the queen takes her to be. She is held to get at him.',
      it: 'Il Primo Cavaliere in carica, di cui la regina la crede l’amante. È trattenuta per colpire lui.',
    },
  },
  rosVarys: {
    character: 'varys',
    type: { en: 'Visitor', it: 'Visitatore' },
    summary: {
      en: 'The eunuch who visits her and gets her to admit she fears her employer. He says he protects those who work for him.',
      it: 'L’eunuco che le fa visita e le fa ammettere di temere il suo padrone. Le dice che lui protegge chi lavora per lui.',
    },
  },
  rosPetyrFear: {
    character: 'petyr-baelish',
    type: { en: 'Employer', it: 'Padrone' },
    summary: {
      en: 'The owner of the brothel where she works, whom she admits to Varys she is afraid of.',
      it: 'Il proprietario del bordello dove lavora, di cui ammette con Varys di avere paura.',
    },
  },

  // Lancel, Myrcella (shared)
  // Myrcella (shared)
  myrTyrionDorne: {
    character: 'tyrion-lannister',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'Her uncle, who arranges for her to go to Dorne to be betrothed to a prince.',
      it: 'Suo zio, che organizza la sua partenza per Dorne, promessa a un principe.',
    },
  },
  myrCerseiStays: {
    character: 'cersei-lannister',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Her mother, who did not want her sent away and stays behind in the city.',
      it: 'Sua madre, che non voleva mandarla via e resta in città.',
    },
  },
  // Sansa, books
  sanDontosPledge: {
    character: 'dontos-hollard',
    type: { en: 'Would-be rescuer', it: 'Possibile salvatore' },
    summary: {
      en: 'The drunken fool who meets her in the godswood and swears to send her home. She calls him her Florian, though escape will take time and coin.',
      it: 'Il buffone ubriaco che la incontra nel parco degli dei e giura di rimandarla a casa. Lei lo chiama il suo Florian, anche se la fuga richiederà tempo e denaro.',
    },
  },
  sanSandorGodswood: {
    character: 'sandor-clegane',
    type: { en: 'The Hound', it: 'Il Mastino' },
    summary: {
      en: 'Catches her on the steps at night, drunk, and walks her back to her chambers. He mocks her songs of knights and says he will have a song from her one day.',
      it: 'La afferra sui gradini di notte, ubriaco, e la riaccompagna nelle sue stanze. Si fa beffe delle sue canzoni di cavalieri e dice che prima o poi pretenderà una canzone da lei.',
    },
  },
  sanTyrionProtect: {
    character: 'tyrion-lannister',
    type: { en: 'The king’s uncle', it: 'Zio del re' },
    summary: {
      en: 'Stops Boros’s blows, has her taken to the Tower of the Hand to be tended, and next morning offers her his protection. She refuses.',
      it: 'Ferma i colpi di Boros, la fa portare nella Torre del Primo Cavaliere per farla curare e la mattina dopo le offre la sua protezione. Lei rifiuta.',
    },
  },
  sanBorosBeat: {
    character: 'boros-blount',
    type: { en: 'Kingsguard knight', it: 'Cavaliere della Guardia reale' },
    summary: {
      en: 'The Kingsguard knight who beats her on Joffrey’s orders to pay for Robb’s latest victory.',
      it: 'Il cavaliere della Guardia reale che la picchia per ordine di Joffrey, a pagare l’ultima vittoria di Robb.',
    },
  },
  sanJoffreyBeat: {
    character: 'joffrey-baratheon',
    type: { en: 'Betrothed', it: 'Promesso sposo' },
    summary: {
      en: 'The king she is still to marry. He calls her before him to answer for Robb’s latest victory.',
      it: 'Il re che dovrà ancora sposare. La convoca davanti a sé perché risponda dell’ultima vittoria di Robb.',
    },
  },
  // Sansa, show
  sanSandorRescue: {
    character: 'sandor-clegane',
    type: { en: 'Her rescuer', it: 'Chi l’ha salvata' },
    summary: {
      en: 'The Hound, who pulls her out of the riot when men run her down.',
      it: 'Il Mastino, che la tira fuori dalla rivolta quando degli uomini la inseguono.',
    },
  },
  sanShaeConfides: {
    character: 'shae',
    type: { en: 'Handmaiden', it: 'Ancella' },
    summary: {
      en: 'Treats her injuries after the riot. Sansa says she hates Joffrey, and Shae warns her to trust no one.',
      it: 'Le cura le ferite dopo la rivolta. Sansa dice di odiare Joffrey, e Shae la avverte di non fidarsi di nessuno.',
    },
  },
  sanJoffreyRiot: {
    character: 'joffrey-baratheon',
    type: { en: 'Betrothed', it: 'Promesso sposo' },
    summary: {
      en: 'The king she is still to marry. She stands up to him when he mocks Tommen, and the crowd’s anger at him leaves her alone in the riot.',
      it: 'Il re che dovrà ancora sposare. Gli tiene testa quando prende in giro Tommen, e la rabbia della folla contro di lui la lascia sola nella rivolta.',
    },
  },
  // Tyrion, Mandon
  tyrPodSaves: {
    character: 'podrick-payne',
    type: { en: 'Squire', it: 'Scudiero' },
    summary: {
      en: 'His squire, who saves his life in the battle.',
      it: 'Il suo scudiero, che gli salva la vita nella battaglia.',
    },
  },
  tyrMandonAttack: {
    character: 'mandon-moore',
    type: { en: 'Kingsguard knight', it: 'Cavaliere della Guardia reale' },
    summary: {
      en: 'The Kingsguard knight who tries to kill him in the middle of the battle.',
      it: 'Il cavaliere della Guardia reale che tenta di ucciderlo nel mezzo della battaglia.',
    },
  },
  // Joffrey
  jofSansaShow: {
    character: 'sansa-stark',
    type: { en: 'Betrothal set aside', it: 'Fidanzamento sciolto' },
    summary: {
      en: 'His betrothed, whom he sets aside at Cersei’s suggestion because of her family’s treachery.',
      it: 'La sua promessa sposa, che mette da parte su suggerimento di Cersei per il tradimento della sua famiglia.',
    },
  },
  jofMargaeryShow: {
    character: 'margaery-tyrell',
    type: { en: 'Bride to be', it: 'Futura sposa' },
    summary: {
      en: 'Margaery Tyrell, whose hand her brother asks as his reward. Joffrey agrees to wed her.',
      it: 'Margaery Tyrell, la cui mano suo fratello chiede come ricompensa. Joffrey accetta di sposarla.',
    },
  },
  jofCerseiShow: {
    character: 'cersei-lannister',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who suggests he set Sansa aside and take the Tyrell girl.',
      it: 'Sua madre, che gli suggerisce di mettere da parte Sansa e prendere la ragazza Tyrell.',
    },
  },
  jofMargaeryProposed: {
    character: 'margaery-tyrell',
    type: { en: 'Bride proposed', it: 'Sposa proposta' },
    summary: {
      en: 'The Tyrell girl Tyrion proposes he marry, to win her house over after Renly’s death.',
      it: 'La ragazza Tyrell che Tyrion propone che sposi, per conquistare la sua casa dopo la morte di Renly.',
    },
  },
  jofTyrionMatch: {
    character: 'tyrion-lannister',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, the Hand, who proposes the Tyrell match in the small council. Cersei fears Joffrey will not like it, then agrees.',
      it: 'Suo zio, il Primo Cavaliere, che propone nel Concilio ristretto le nozze con i Tyrell. Cersei teme che a Joffrey non piacerà, poi accetta.',
    },
  },
  // Petyr
  petTyrionTyrells: {
    character: 'tyrion-lannister',
    type: { en: 'Hand he serves', it: 'Primo Cavaliere che serve' },
    summary: {
      en: 'The Hand, who wants the Tyrells for Joffrey. Neither he nor Cersei will leave the city to treat with them, so Petyr volunteers, expecting a reward.',
      it: 'Il Primo Cavaliere, che vuole i Tyrell dalla parte di Joffrey. Né lui né Cersei vogliono lasciare la città per trattare, così Petyr si offre, aspettandosi una ricompensa.',
    },
  },
  sanSandorOffer: {
    character: 'sandor-clegane',
    type: { en: 'The Hound', it: 'Il Mastino' },
    summary: {
      en: 'Comes to her room after leaving the battle and offers to take her north, away from the city.',
      it: 'Viene nella sua stanza dopo aver lasciato la battaglia e le offre di portarla a nord, lontano dalla città.',
    },
  },
  sanSandorLeaves: {
    character: 'sandor-clegane',
    type: { en: 'The Hound', it: 'Il Mastino' },
    summary: {
      en: 'Drunk and battered, he tells her he is leaving the city and could protect her. He asks for a song, then leaves her room.',
      it: 'Ubriaco e malconcio, le dice che lascia la città e che potrebbe proteggerla. Le chiede una canzone, poi esce dalla sua stanza.',
    },
  },
  sanCerseiBallroom: {
    character: 'cersei-lannister',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen regent, who hosts the court’s women in Maegor’s Holdfast during the battle. She mocks Sansa’s faith and advises her how to use her beauty.',
      it: 'La regina reggente, che ospita le dame della corte nella Fortezza di Maegor durante la battaglia. Prende in giro la fede di Sansa e le insegna a usare la sua bellezza.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * Stage 2's Wall and beyond cards for the season-1 cast (#1483): season 2
 * and A Clash of Kings, episodes 11 to 20 and chapters 74 to 143. The new
 * characters' own cards are in `season-2.relationships.ts`.
 */
const wall2 = {
  // Jon Snow, the show
  jonJeorReprimand: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, whom Jon follows on the ranging. He reprimands Jon for losing his temper with Craster, and tells him to learn how to follow.',
      it: 'Il lord comandante, che Jon segue nella spedizione. Rimprovera Jon per aver perso la pazienza con Craster, e gli dice di imparare a seguire.',
    },
  },
  jonCrasterShow: {
    character: 'craster',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The master of the keep. Jon argues with him when Craster calls the Watch southerners, and dislikes him at once.',
      it: 'Il padrone del fortino. Jon discute con lui quando Craster chiama i Guardiani gente del sud, e lo prende subito in antipatia.',
    },
  },
  jonSamRanging: {
    character: 'samwell-tarly',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His friend, who rides the ranging with him. Like Jon, Sam is repulsed by Craster.',
      it: 'Il suo amico, che cavalca con lui nella spedizione. Come Jon, Sam prova repulsione per Craster.',
    },
  },
  jonGrennRanging: {
    character: 'grenn',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His friend, who is on the ranging too. Grenn is as repulsed by Craster as Jon is.',
      it: 'Il suo amico, anche lui nella spedizione. Grenn prova per Craster la stessa repulsione di Jon.',
    },
  },
  jonQhorinShow: {
    character: 'qhorin-halfhand',
    type: {
      en: 'Ranger of the Shadow Tower',
      it: 'Ranger della Torre delle Ombre',
    },
    summary: {
      en: 'The ranger who comes to the Fist from the Shadow Tower. Jon asks to join his scouting party, and Qhorin takes his side when Jeor objects.',
      it: 'Il ranger che arriva al Pugno dalla Torre delle Ombre. Jon chiede di unirsi al suo gruppo di esploratori, e Qhorin lo difende quando Jeor si oppone.',
    },
  },
  jonJeorLets: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, who says Jon is no ranger and reminds him that he let Craster beat him. Jeor lets him go with Qhorin in the end.',
      it: 'Il lord comandante, che dice che Jon non è un ranger e gli ricorda di essersi fatto picchiare da Craster. Alla fine Jeor lo lascia partire con Qhorin.',
    },
  },
  jonSamSteward: {
    character: 'samwell-tarly',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His friend, who offers to take on Jon’s duties as the Lord Commander’s steward so that Jon can go with Qhorin.',
      it: 'Il suo amico, che si offre di occupare il posto di Jon come attendente del lord comandante perché Jon possa andare con Qhorin.',
    },
  },
  jonGillyShow: {
    character: 'gilly',
    type: { en: 'Craster’s wife', it: 'Moglie di Craster' },
    summary: {
      en: 'Craster’s pregnant daughter and wife. Sam brings her to Jon, but he will not disobey the Lord Commander and take her away.',
      it: 'La figlia e moglie incinta di Craster. Sam la porta da Jon, ma lui non vuole disobbedire al lord comandante e portarla via.',
    },
  },
  jonCrasterBeat: {
    character: 'craster',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The master of the keep. Jon follows him into the woods and sees him leave a newborn boy there. Craster knocks him out and orders the Watch to leave.',
      it: 'Il padrone del fortino. Jon lo segue nel bosco e lo vede lasciarvi un neonato maschio. Craster lo stende e ordina ai Guardiani di andarsene.',
    },
  },
  jonYgritteShow: {
    character: 'ygritte',
    type: { en: 'Prisoner', it: 'Prigioniera' },
    summary: {
      en: 'The wildling lookout he captures. He cannot bring himself to kill her, and she runs, and he chases her down.',
      it: 'La vedetta dei bruti che cattura. Non riesce a ucciderla, lei scappa e lui la rincorre.',
    },
  },
  jonQhorinOrder: {
    character: 'qhorin-halfhand',
    type: {
      en: 'Ranger of the Shadow Tower',
      it: 'Ranger della Torre delle Ombre',
    },
    summary: {
      en: 'The ranger who leads the party. Qhorin leaves Jon alone to execute the prisoner, and the two lose him.',
      it: 'Il ranger che guida il gruppo. Qhorin lascia Jon solo a giustiziare la prigioniera, e i due lo perdono di vista.',
    },
  },
  jonGhostLost: {
    character: 'ghost-direwolf',
    type: { en: 'Direwolf', it: 'Meta-lupo' },
    summary: {
      en: 'His white direwolf. Ghost follows him into the mountains, then wanders off and is gone.',
      it: 'Il suo meta-lupo bianco. Spettro lo segue sulle montagne, poi si allontana e scompare.',
    },
  },
  jonQhorinKilled: {
    character: 'qhorin-halfhand',
    type: {
      en: 'Ranger of the Shadow Tower',
      it: 'Ranger della Torre delle Ombre',
    },
    summary: {
      en: 'The ranger who attacks Jon in front of the wildlings, so that Jon can pass for a deserter. Jon kills him, as Qhorin has told him to.',
      it: 'Il ranger che attacca Jon davanti ai bruti, perché Jon passi per un disertore. Jon lo uccide, come Qhorin gli ha detto di fare.',
    },
  },
  jonYgritteCompany: {
    character: 'ygritte',
    type: { en: 'Captor', it: 'Chi lo ha catturato' },
    summary: {
      en: 'The wildling who brings him to her band as a present and taps him with his own sword. When he kills Qhorin she is stunned, and she shows him the wildling army.',
      it: 'La bruta che lo porta alla sua banda come regalo e lo colpisce con la sua stessa spada. Quando uccide Qhorin resta senza parole, e gli mostra l’esercito dei bruti.',
    },
  },
  jonSamMissing: {
    character: 'samwell-tarly',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His friend, who stays at the Fist. When the scouting party does not come back, Sam refuses to believe Jon is dead.',
      it: 'Il suo amico, rimasto al Pugno. Quando il gruppo di esploratori non torna, Sam si rifiuta di credere che Jon sia morto.',
    },
  },

  // Jon Snow, the books
  jonJeorAemon: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, whose steward he is. Jeor tells him that Aemon could have been king, and that he and Jon both have a king for a brother.',
      it: 'Il lord comandante, di cui è attendente. Jeor gli dice che Aemon avrebbe potuto essere re, e che entrambi hanno un re per fratello.',
    },
  },
  jonSamVault: {
    character: 'samwell-tarly',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His friend, who is to tend the ravens in Aemon’s place. Jon finds him among the maps and scrolls in the vaults of Castle Black.',
      it: 'Il suo amico, che al posto di Aemon si occuperà dei corvi. Jon lo trova tra mappe e pergamene nei sotterranei di Castello Nero.',
    },
  },
  jonRobbKing: {
    character: 'robb-stark',
    type: { en: 'Half-brother', it: 'Fratellastro' },
    summary: {
      en: 'His half-brother, now a king. Jon is unsure how he feels, but tells Donal Noye that Robb will make a good king.',
      it: 'Il suo fratellastro, ora re. Jon non sa bene cosa provare, ma dice a Donal Noye che Robb sarà un buon re.',
    },
  },
  jonAemonHand: {
    character: 'aemon',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who treats his burned hand. Jeor tells Jon that Aemon was a king’s son who could have been king.',
      it: 'Il maestro che cura la sua mano ustionata. Jeor dice a Jon che Aemon era figlio di un re e avrebbe potuto essere re.',
    },
  },
  jonCrasterBook: {
    character: 'craster',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The master of the holdfast. At the name Snow, Craster guesses Jon is a bastard. Jon will not take his hospitality.',
      it: 'Il padrone del fortino. Sentendo il nome Snow, Craster capisce che Jon è un bastardo. Jon non vuole accettare la sua ospitalità.',
    },
  },
  jonGillyBook: {
    character: 'gilly',
    type: { en: 'Craster’s wife', it: 'Moglie di Craster' },
    summary: {
      en: 'The girl whose rabbits Ghost raided. She asks Jon to take her to the Wall, and he says it is for the Lord Commander to decide.',
      it: 'La ragazza di cui Spettro ha assalito i conigli. Chiede a Jon di portarla alla Barriera, e lui risponde che deve decidere il lord comandante.',
    },
  },
  jonJeorCraster: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, who tells Jon that Craster gives his sons to the wood and that the Watch needs him all the same.',
      it: 'Il lord comandante, che dice a Jon che Craster dà i figli maschi al bosco e che i Guardiani hanno comunque bisogno di lui.',
    },
  },
  jonSamCraster: {
    character: 'samwell-tarly',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His friend, who hopes to do something for Gilly. Jon says the Lord Commander will never let them take one of Craster’s wives.',
      it: 'Il suo amico, che vorrebbe fare qualcosa per Gilly. Jon dice che il lord comandante non permetterà mai di portare via una delle mogli di Craster.',
    },
  },
  jonGhostRabbits: {
    character: 'ghost-direwolf',
    type: { en: 'Direwolf', it: 'Meta-lupo' },
    summary: {
      en: 'His white direwolf. Ghost raids Gilly’s rabbit hutch, then brings Jon a rabbit and leads him to Sam.',
      it: 'Il suo meta-lupo bianco. Spettro assalta la conigliera di Gilly, poi porta a Jon un coniglio e lo conduce da Sam.',
    },
  },
  jonQhorinBook: {
    character: 'qhorin-halfhand',
    type: {
      en: 'Ranger of the Shadow Tower',
      it: 'Ranger della Torre delle Ombre',
    },
    summary: {
      en: 'The ranger who comes to the Fist from the Shadow Tower. He tells Jon he knew Lord Eddard and Lord Rickard, and picks him for his party.',
      it: 'Il ranger che arriva al Pugno dalla Torre delle Ombre. Dice a Jon di aver conosciuto lord Eddard e lord Rickard, e lo sceglie per il suo gruppo.',
    },
  },
  jonJeorFist: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander at the Fist. In his tent Jon overhears Qhorin warn that the wildlings mean to breach the Wall.',
      it: 'Il lord comandante al Pugno. Nella sua tenda Jon sente Qhorin avvertire che i bruti vogliono sfondare la Barriera.',
    },
  },
  jonSamHorn: {
    character: 'samwell-tarly',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His friend. Jon gives Sam the old warhorn he found at the Fist, and a dragonglass spearhead and arrowheads.',
      it: 'Il suo amico. Jon dà a Sam il vecchio corno trovato al Pugno, una punta di lancia e delle punte di freccia di vetro di drago.',
    },
  },
  jonGrennDagger: {
    character: 'grenn',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His friend. Jon makes a dragonglass dagger for Grenn, as for himself and Jeor.',
      it: 'Il suo amico. Jon fa un pugnale di vetro di drago per Grenn, come per sé e per Jeor.',
    },
  },
  jonGhostFist: {
    character: 'ghost-direwolf',
    type: { en: 'Direwolf', it: 'Meta-lupo' },
    summary: {
      en: 'His white direwolf. At the Fist Ghost leads Jon out of the ringfort to the dragonglass buried there.',
      it: 'Il suo meta-lupo bianco. Al Pugno Spettro porta Jon fuori dal recinto fino al vetro di drago sepolto lì.',
    },
  },
  jonYgritteBook: {
    character: 'ygritte',
    type: { en: 'Prisoner', it: 'Prigioniera' },
    summary: {
      en: 'The spearwife he takes prisoner. She says Mance Rayder would take him in if he ran off with her. Jon stops himself from beheading her and tells her to run.',
      it: 'La lancera che prende prigioniera. Gli dice che Mance Rayder lo accoglierebbe se scappasse con lei. Jon si ferma prima di decapitarla e le dice di fuggire.',
    },
  },
  jonStonesnake: {
    character: 'stonesnake',
    type: { en: 'Fellow ranger', it: 'Ranger compagno' },
    summary: {
      en: 'The ranger who teaches Jon to climb a sheer cliff to the watchers. He warns Jon that the spearwife should be killed.',
      it: 'Il ranger che insegna a Jon ad arrampicarsi su una parete a picco fino alle vedette. Avverte Jon che la lancera andrebbe uccisa.',
    },
  },
  jonQhorinPass: {
    character: 'qhorin-halfhand',
    type: {
      en: 'Ranger of the Shadow Tower',
      it: 'Ranger della Torre delle Ombre',
    },
    summary: {
      en: 'The ranger who leads the party through the pass. He leaves Jon alone with the prisoner to kill her.',
      it: 'Il ranger che guida il gruppo nel passo. Lascia Jon solo con la prigioniera, perché la uccida.',
    },
  },
  jonQhorinDead: {
    character: 'qhorin-halfhand',
    type: {
      en: 'Ranger of the Shadow Tower',
      it: 'Ranger della Torre delle Ombre',
    },
    summary: {
      en: 'The ranger who told him to yield and go among the wildlings. When the hunters overtake them, Jon kills him with Longclaw.',
      it: 'Il ranger che gli aveva detto di arrendersi e di unirsi ai bruti. Quando i cacciatori li raggiungono, Jon lo uccide con Lungo Artiglio.',
    },
  },
  jonLord: {
    character: 'lord-of-bones',
    type: { en: 'Captor', it: 'Chi lo ha catturato' },
    summary: {
      en: 'The leader of the hunters. He orders Jon to kill Qhorin to prove himself, and accepts him despite his misgivings.',
      it: 'Il capo dei cacciatori. Gli ordina di uccidere Qhorin per mettersi alla prova, e lo accetta nonostante i suoi dubbi.',
    },
  },
  jonYgritteHunt: {
    character: 'ygritte',
    type: { en: 'Girl he let go', it: 'Ragazza che ha lasciato andare' },
    summary: {
      en: 'The spearwife he spared, now among the hunters. She tells him the eagle was the man he killed in the pass when they captured her.',
      it: 'La lancera che ha risparmiato, ora tra i cacciatori. Gli dice che l’aquila era l’uomo che ha ucciso nel passo quando l’hanno catturata.',
    },
  },
  jonGhostWounded: {
    character: 'ghost-direwolf',
    type: { en: 'Direwolf', it: 'Meta-lupo' },
    summary: {
      en: 'His white direwolf. Jon dreams through Ghost’s eyes, and the party finds Ghost wounded.',
      it: 'Il suo meta-lupo bianco. Jon sogna attraverso gli occhi di Spettro, e il gruppo trova Spettro ferito.',
    },
  },
  jonEbben: {
    character: 'ebben',
    type: { en: 'Fellow ranger', it: 'Ranger compagno' },
    summary: {
      en: 'The ranger who calls him a skinchanger after his dream. The hunters later carry Ebben’s head.',
      it: 'Il ranger che lo chiama mutaforma dopo il suo sogno. I cacciatori portano poi la testa di Ebben.',
    },
  },

  // Jeor Mormont, the show
  jeoJonShow: {
    character: 'jon-snow',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'His steward, whom he reprimands for losing his temper with Craster. Jeor tells him to learn to follow before he leads.',
      it: 'Il suo attendente, che rimprovera per aver perso la pazienza con Craster. Jeor gli dice di imparare a seguire prima di comandare.',
    },
  },
  jeoCrasterShow: {
    character: 'craster',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The master of the keep, who mocks his vow of celibacy. Jeor puts up with him, because the Watch needs his shelter.',
      it: 'Il padrone del fortino, che lo prende in giro per il voto di castità. Jeor lo sopporta, perché i Guardiani hanno bisogno del suo riparo.',
    },
  },
  jeoBenjen: {
    character: 'benjen-stark',
    type: { en: 'Missing ranger', it: 'Ranger scomparso' },
    summary: {
      en: 'The First Ranger the ranging is looking for. Craster tells Jeor he has not seen him.',
      it: 'Il Primo Ranger che la spedizione cerca. Craster dice a Jeor di non averlo visto.',
    },
  },
  jeoQhorinShow: {
    character: 'qhorin-halfhand',
    type: {
      en: 'Ranger of the Shadow Tower',
      it: 'Ranger della Torre delle Ombre',
    },
    summary: {
      en: 'The ranger who reaches the Fist from the Shadow Tower. He suggests small parties to push out the wildling lookouts in the mountains.',
      it: 'Il ranger che raggiunge il Pugno dalla Torre delle Ombre. Propone piccoli gruppi per scacciare le vedette dei bruti sulle montagne.',
    },
  },
  jeoJonGo: {
    character: 'jon-snow',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'His steward, who asks to join Qhorin’s party. Jeor argues against it, then lets him go.',
      it: 'Il suo attendente, che chiede di unirsi al gruppo di Qhorin. Jeor è contrario, ma poi lo lascia partire.',
    },
  },
  jeoSamSteward: {
    character: 'samwell-tarly',
    type: { en: 'New steward', it: 'Nuovo attendente' },
    summary: {
      en: 'The brother who offers to take over Jon’s duties as steward. Jeor agrees.',
      it: 'Il confratello che si offre di prendere il posto di Jon come attendente. Jeor accetta.',
    },
  },
  jeoCrasterOut: {
    character: 'craster',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The master of the keep, who throws Jon at his feet and orders the Watch out. Jeor has always known what Craster does with his sons.',
      it: 'Il padrone del fortino, che getta Jon ai suoi piedi e caccia via i Guardiani. Jeor ha sempre saputo che fine fanno i figli maschi di Craster.',
    },
  },

  // Jeor Mormont, the books
  jeoJonAemon: {
    character: 'jon-snow',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'His steward. Jeor tells him that Aemon could have been king, and that they both have a king for a brother.',
      it: 'Il suo attendente. Jeor gli dice che Aemon avrebbe potuto essere re, e che entrambi hanno un re per fratello.',
    },
  },
  jeoThoren: {
    character: 'thoren-smallwood',
    type: { en: 'Acting commander of rangers', it: 'Comandante dei ranger' },
    summary: {
      en: 'The ranger who argues that the Lord Commander’s place is at Castle Black. Jeor dismisses him.',
      it: 'Il ranger che sostiene che il posto del lord comandante sia a Castello Nero. Jeor lo congeda.',
    },
  },
  jeoSamBook: {
    character: 'samwell-tarly',
    type: { en: 'Keeper of the ravens', it: 'Custode dei corvi' },
    summary: {
      en: 'The recruit who is to keep the ravens. Jeor says he would sooner name Sam First Ranger than Thoren, then dismisses him.',
      it: 'La recluta che si occuperà dei corvi. Jeor dice che nominerebbe Sam Primo Ranger piuttosto che Thoren, poi lo congeda.',
    },
  },
  jeoAemon: {
    character: 'aemon',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The old maester of Castle Black, whom Jeor hopes to keep another twenty years.',
      it: 'Il vecchio maestro di Castello Nero, che Jeor spera di tenere con sé per altri vent’anni.',
    },
  },
  jeoCrasterBook: {
    character: 'craster',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The master of the holdfast. Jeor shares his wine with him, and Craster refuses an escort back to the Wall.',
      it: 'Il padrone del fortino. Jeor divide con lui il suo vino, e Craster rifiuta una scorta fino alla Barriera.',
    },
  },
  jeoJonCraster: {
    character: 'jon-snow',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'His steward, whom he tells that Craster gives his sons to the wood, and that the Watch needs him all the same.',
      it: 'Il suo attendente, a cui dice che Craster dà i figli maschi al bosco, e che i Guardiani hanno comunque bisogno di lui.',
    },
  },
  jeoJarman: {
    character: 'jarman-buckwell',
    type: { en: 'Ranger', it: 'Ranger' },
    summary: {
      en: 'The ranger whose horn tells Jeor there is still someone at Craster’s Keep.',
      it: 'Il ranger il cui corno dice a Jeor che a Forte Craster c’è ancora qualcuno.',
    },
  },
  jeoThorenCraster: {
    character: 'thoren-smallwood',
    type: { en: 'Acting commander of rangers', it: 'Comandante dei ranger' },
    summary: {
      en: 'The ranger who swears that Craster is a friend of the Watch.',
      it: 'Il ranger che giura che Craster è un amico dei Guardiani.',
    },
  },
  jeoQhorinBook: {
    character: 'qhorin-halfhand',
    type: {
      en: 'Ranger of the Shadow Tower',
      it: 'Ranger della Torre delle Ombre',
    },
    summary: {
      en: 'The ranger who reaches the Fist with a hundred men. At his advice Jeor sends three parties into the mountains, and Qhorin leads one.',
      it: 'Il ranger che raggiunge il Pugno con cento uomini. Su suo consiglio Jeor manda tre gruppi sulle montagne, e Qhorin ne guida uno.',
    },
  },
  jeoJonQhorin: {
    character: 'jon-snow',
    type: { en: 'Steward', it: 'Attendente' },
    summary: {
      en: 'His steward, whom Qhorin picks for his own party.',
      it: 'Il suo attendente, che Qhorin sceglie per il suo gruppo.',
    },
  },
  jeoThorenParty: {
    character: 'thoren-smallwood',
    type: { en: 'Acting commander of rangers', it: 'Comandante dei ranger' },
    summary: {
      en: 'The ranger Jeor sends to probe the Milkwater.',
      it: 'Il ranger che Jeor manda a esplorare il Fiumelatte.',
    },
  },
  jeoJarmanParty: {
    character: 'jarman-buckwell',
    type: { en: 'Ranger', it: 'Ranger' },
    summary: {
      en: 'The ranger Jeor sends up into the mountains with four men.',
      it: 'Il ranger che Jeor manda sulle montagne con quattro uomini.',
    },
  },

  // Samwell Tarly, the show
  samJonRanging: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His friend, on the ranging with him. Both are repulsed by Craster.',
      it: 'Il suo amico, nella spedizione con lui. Entrambi provano repulsione per Craster.',
    },
  },
  samGrennSledge: {
    character: 'grenn',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Another friend on the ranging. They bicker over Sam’s weight on the sledge.',
      it: 'Un altro amico nella spedizione. Battibeccano per il peso di Sam sulla slitta.',
    },
  },
  samCrasterShow: {
    character: 'craster',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The master of the keep, who marries his own daughters. Sam is disgusted by him.',
      it: 'Il padrone del fortino, che sposa le proprie figlie. Sam ne è disgustato.',
    },
  },
  samGillyShow: {
    character: 'gilly',
    type: { en: 'Craster’s wife', it: 'Moglie di Craster' },
    summary: {
      en: 'Craster’s pregnant daughter and wife. Sam drives Ghost away from her, gives her his mother’s thimble and promises to come back for her.',
      it: 'La figlia e moglie incinta di Craster. Sam allontana Spettro da lei, le dà il ditale di sua madre e promette di tornare a prenderla.',
    },
  },
  samJonSteward: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His friend, who leaves with the Halfhand’s party. Sam takes over Jon’s duties as the Lord Commander’s steward.',
      it: 'Il suo amico, che parte con il gruppo del Monco. Sam prende il posto di Jon come attendente del lord comandante.',
    },
  },
  samGrennFist: {
    character: 'grenn',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'Another friend on the ranging, who trudges beside him to the Fist while Sam talks of Gilly.',
      it: 'Un altro amico nella spedizione, che arranca accanto a lui fino al Pugno mentre Sam parla di Gilly.',
    },
  },
  samJeorSteward: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, who lets Sam take over Jon’s duties as his steward.',
      it: 'Il lord comandante, che lascia a Sam i compiti di Jon come suo attendente.',
    },
  },
  samGrennCache: {
    character: 'grenn',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A brother who finds the dragonglass cache at the Fist with him. At the horns Grenn runs back without noticing Sam is left behind.',
      it: 'Un confratello che trova con lui il nascondiglio di vetro di drago al Pugno. Al suono dei corni Grenn corre indietro senza accorgersi che Sam è rimasto indietro.',
    },
  },
  samJonMissing: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His friend, who went with the Halfhand’s party. When it does not come back, Sam refuses to give up hope.',
      it: 'Il suo amico, partito con il gruppo del Monco. Quando non torna, Sam si rifiuta di perdere la speranza.',
    },
  },
  samEdd: {
    character: 'eddison-tollett',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A brother who finds Sam’s talk of Gilly sickening. Sam tells him that what interests him about Edd is nothing at all.',
      it: 'Un confratello a cui i discorsi di Sam su Gilly danno la nausea. Sam gli dice che di Edd non gli interessa assolutamente niente.',
    },
  },

  // Samwell Tarly, the books
  samJonVault: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His friend, who finds him in the vaults among the maps. Jon tells him he will be as safe on the ranging as at Horn Hill.',
      it: 'Il suo amico, che lo trova nei sotterranei tra le mappe. Jon gli dice che nella spedizione sarà al sicuro come a Collina del Corno.',
    },
  },
  samJeorRavens: {
    character: 'jeor-mormont',
    type: { en: 'Lord Commander', it: 'Lord comandante' },
    summary: {
      en: 'The Lord Commander, who asks him about the ravens. Jeor says he would sooner name Sam First Ranger than Thoren, then dismisses him.',
      it: 'Il lord comandante, che gli chiede dei corvi. Jeor dice che nominerebbe Sam Primo Ranger piuttosto che Thoren, poi lo congeda.',
    },
  },
  samAemonMaps: {
    character: 'aemon',
    type: { en: 'Maester', it: 'Maestro' },
    summary: {
      en: 'The maester who sent him to find maps for Jeor. Sam goes on the ranging in Aemon’s place, to tend the ravens.',
      it: 'Il maestro che lo ha mandato a cercare mappe per Jeor. Sam va nella spedizione al posto di Aemon, per occuparsi dei corvi.',
    },
  },
  samGillyBook: {
    character: 'gilly',
    type: { en: 'Craster’s wife', it: 'Moglie di Craster' },
    summary: {
      en: 'Craster’s wife, who wears Sam’s cloak. He wishes he could do something for her, and hopes they can take her when they come back.',
      it: 'La moglie di Craster, che indossa il mantello di Sam. Vorrebbe fare qualcosa per lei, e spera di poterla portare via al ritorno.',
    },
  },
  samJonCraster: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His friend, who brings him the Lord Commander’s order to draw a map. Jon says Jeor will never let them take one of Craster’s wives.',
      it: 'Il suo amico, che gli porta l’ordine del lord comandante di disegnare una mappa. Jon dice che Jeor non permetterà mai di portare via una delle mogli di Craster.',
    },
  },
  samEddBook: {
    character: 'eddison-tollett',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A brother who told him Craster marries his own daughters. Sam passes it on to Jon.',
      it: 'Un confratello che gli ha detto che Craster sposa le proprie figlie. Sam lo riferisce a Jon.',
    },
  },
  samCrasterBook: {
    character: 'craster',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The master of the holdfast. Sam asks Jon whether he is the savage they say, then goes to draw a map for the Lord Commander.',
      it: 'Il padrone del fortino. Sam chiede a Jon se sia il selvaggio che dicono, poi va a disegnare una mappa per il lord comandante.',
    },
  },

  // Grenn, the show
  greSamSledge: {
    character: 'samwell-tarly',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'A friend on the ranging. They bicker over Sam’s weight on the sledge.',
      it: 'Un amico nella spedizione. Battibeccano per il peso di Sam sulla slitta.',
    },
  },
  greJonRanging: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'A friend on the ranging. Like Jon, Grenn is repulsed by Craster.',
      it: 'Un amico nella spedizione. Come Jon, Grenn prova repulsione per Craster.',
    },
  },
  greCraster: {
    character: 'craster',
    type: { en: 'Host', it: 'Padrone di casa' },
    summary: {
      en: 'The master of the keep. Grenn wonders if Craster does not like men speaking to his daughters, and learns that they are also his wives.',
      it: 'Il padrone del fortino. Grenn si chiede se Craster non voglia che si parli con le sue figlie, e scopre che sono anche le sue mogli.',
    },
  },
  greSamFist: {
    character: 'samwell-tarly',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'A friend who digs with him at the Fist and finds a dragonglass cache. At the horns Grenn runs back to the Fist and leaves Sam behind.',
      it: 'Un amico che scava con lui al Pugno e trova un nascondiglio di vetro di drago. Al suono dei corni Grenn corre al Pugno e lascia Sam indietro.',
    },
  },
  greEdd: {
    character: 'eddison-tollett',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'A brother who runs back to the Fist with him at the horns.',
      it: 'Un confratello che corre con lui al Pugno al suono dei corni.',
    },
  },
  greJonMissing: {
    character: 'jon-snow',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'A friend who went with the Halfhand’s party. At the Fist they fear he is dead.',
      it: 'Un amico partito con il gruppo del Monco. Al Pugno temono che sia morto.',
    },
  },

  // Ghost
  ghoJonNorth: {
    character: 'jon-snow',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The man he follows beyond the Wall, up to the Fist.',
      it: 'L’uomo che segue oltre la Barriera, fino al Pugno.',
    },
  },
  ghoSam: {
    character: 'samwell-tarly',
    type: { en: 'Brother of the Watch', it: 'Confratello' },
    summary: {
      en: 'The steward who tells Ghost to get away from Gilly. Ghost gives him a look, but obeys.',
      it: 'L’attendente che dice a Spettro di allontanarsi da Gilly. Spettro gli lancia un’occhiataccia, ma obbedisce.',
    },
  },
  ghoGilly: {
    character: 'gilly',
    type: { en: 'Craster’s wife', it: 'Moglie di Craster' },
    summary: {
      en: 'Craster’s wife. Ghost approaches her, drawn by the dead rabbit she carries, until Sam calls him off.',
      it: 'La moglie di Craster. Spettro si avvicina a lei, attirato dal coniglio morto che porta, finché Sam non lo richiama.',
    },
  },
  ghoJonBook: {
    character: 'jon-snow',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy who promises Gilly that Ghost will not hurt her. Ghost brings him a rabbit.',
      it: 'Il ragazzo che promette a Gilly che Spettro non le farà del male. Spettro gli porta un coniglio.',
    },
  },
  ghoGillyBook: {
    character: 'gilly',
    type: { en: 'Craster’s wife', it: 'Moglie di Craster' },
    summary: {
      en: 'The girl whose rabbit hutch he raids. She cries out when she sees him.',
      it: 'La ragazza di cui assalta la conigliera. Lei grida quando lo vede.',
    },
  },
  ghoJonDream: {
    character: 'jon-snow',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy who dreams through his eyes and wakes shouting his name. Jon finds him wounded.',
      it: 'Il ragazzo che sogna attraverso i suoi occhi e si sveglia gridando il suo nome. Jon lo trova ferito.',
    },
  },
  ghoQhorin: {
    character: 'qhorin-halfhand',
    type: {
      en: 'Ranger of the Shadow Tower',
      it: 'Ranger della Torre delle Ombre',
    },
    summary: {
      en: 'The ranger who has his wounds dressed, then turns the party back to the Fist.',
      it: 'Il ranger che fa medicare le sue ferite, poi riporta il gruppo al Pugno.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * Stage 2’s Riverlands and Harrenhal cards for the season-1 cast (#1481):
 * Arya’s road with Yoren and her months at Harrenhal, Robb’s war, and the
 * prisoners of the wagon. The new characters’ own cards are in
 * `season-2.relationships.ts`.
 */
const riverlands2 = {
  // Arya Stark, the show
  aryJaqenWater: {
    character: 'jaqen-hghar',
    type: { en: 'Prisoner in the wagon', it: 'Prigioniero sul carro' },
    summary: {
      en: 'A prisoner chained in Yoren’s wagon. He asks her for water and gives his name, calling himself “a man” and her “a boy”.',
      it: 'Un prigioniero incatenato sul carro di Yoren. Le chiede dell’acqua e le dice il suo nome, chiamando se stesso “un uomo” e lei “un ragazzo”.',
    },
  },
  aryGendrySecret: {
    character: 'gendry',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'The older recruit who tells her he has seen through her disguise. She tells him who she is and swears him to secrecy.',
      it: 'La recluta più grande che le dice di aver capito il suo travestimento. Lei gli dice chi è e gli fa giurare di tacere.',
    },
  },
  aryYorenShow: {
    character: 'yoren',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'The Night’s Watch recruiter who still passes her off as a boy, and sends the gold cloaks away empty-handed.',
      it: 'Il reclutatore dei Guardiani della notte che la fa ancora passare per un ragazzo, e manda via i mantelli d’oro a mani vuote.',
    },
  },
  aryTywinCupbearer: {
    character: 'tywin-lannister',
    type: { en: 'Lord she serves', it: 'Signore che serve' },
    summary: {
      en: 'The Hand of the King, who sees through her disguise at Harrenhal and makes her his cupbearer.',
      it: 'Il Primo Cavaliere del re, che a Harrenhal vede oltre il suo travestimento e la nomina sua coppiera.',
    },
  },
  aryGregorShow: {
    character: 'gregor-clegane',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The knight in command of the prisoners at Harrenhal, who has one of them tortured to death each day.',
      it: 'Il cavaliere che comanda i prigionieri di Harrenhal, e ogni giorno ne fa torturare a morte uno.',
    },
  },
  aryPolliverShow: {
    character: 'polliver',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The man-at-arms who knocked her down and took Needle. She adds his name to her list after watching him beat an old woman.',
      it: 'L’uomo d’arme che l’ha buttata a terra e le ha preso Ago. Aggiunge il suo nome alla sua lista dopo averlo visto picchiare una vecchia.',
    },
  },
  aryGendryCaptive: {
    character: 'gendry',
    type: { en: 'Fellow prisoner', it: 'Compagno di prigionia' },
    summary: {
      en: 'A fellow prisoner at Harrenhal, chosen for torture and spared when Tywin puts the prisoners to work.',
      it: 'Un compagno di prigionia a Harrenhal, scelto per la tortura e risparmiato quando Tywin mette i prigionieri al lavoro.',
    },
  },
  aryHotPieCaptive: {
    character: 'hot-pie',
    type: { en: 'Fellow prisoner', it: 'Compagno di prigionia' },
    summary: {
      en: 'The baker’s boy, taken to Harrenhal with her.',
      it: 'Il garzone di fornaio, portato a Harrenhal insieme a lei.',
    },
  },
  aryTywinWar: {
    character: 'tywin-lannister',
    type: { en: 'Lord she serves', it: 'Signore che serve' },
    summary: {
      en: 'The Hand of the King, whose war council she serves as cupbearer. She takes a letter about her brother off his table.',
      it: 'Il Primo Cavaliere del re, di cui serve il consiglio di guerra come coppiera. Prende dal suo tavolo una lettera che parla di suo fratello.',
    },
  },
  aryJaqenDeaths: {
    character: 'jaqen-hghar',
    type: { en: 'Debtor', it: 'Debitore' },
    summary: {
      en: 'The man who owes her three deaths. She names the Tickler first, then Ser Amory, whom she needs gone at once.',
      it: 'L’uomo che le deve tre morti. Nomina per prima il Tickler, poi ser Amory, che le serve fuori gioco subito.',
    },
  },
  aryTickler: {
    character: 'tickler',
    type: { en: 'Torturer', it: 'Torturatore' },
    summary: {
      en: 'The man who questioned the prisoners with a rat in a bucket. She names him first, and he is found dead with a broken neck.',
      it: 'L’uomo che interrogava i prigionieri con un ratto in un secchio. Lo nomina per primo, e lo trovano morto con il collo spezzato.',
    },
  },
  aryAmory: {
    character: 'amory-lorch',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The knight who catches her with Tywin’s letter. He dies of a poisoned dart before he can tell Tywin.',
      it: 'Il cavaliere che la sorprende con la lettera di Tywin. Muore per un dardo avvelenato prima di poterlo dire a Tywin.',
    },
  },
  aryJaqenCoin: {
    character: 'jaqen-hghar',
    type: { en: 'Helper', it: 'Alleato' },
    summary: {
      en: 'The assassin who let her out of Harrenhal. He offers to take her to Braavos; she says no, and he leaves her a coin and the words to find him.',
      it: 'L’assassino che l’ha fatta uscire da Harrenhal. Le offre di portarla a Braavos; lei rifiuta, e lui le lascia una moneta e le parole per ritrovarlo.',
    },
  },
  aryGendryEscape: {
    character: 'gendry',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'The smith who walked out of Harrenhal with her at midnight.',
      it: 'Il fabbro che è uscito da Harrenhal con lei a mezzanotte.',
    },
  },
  aryHotPieEscape: {
    character: 'hot-pie',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'The baker’s boy who walked out of Harrenhal with her at midnight.',
      it: 'Il garzone di fornaio che è uscito da Harrenhal con lei a mezzanotte.',
    },
  },

  // Arya Stark, the books
  aryYorenBook: {
    character: 'yoren',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'The Night’s Watch man who passes her off as a boy. After she beats Hot Pie bloody, he whacks her with her own stick sword.',
      it: 'L’uomo dei Guardiani della notte che la fa passare per un ragazzo. Dopo che ha pestato Frittella, la colpisce con la sua spada di legno.',
    },
  },
  aryHotPieBook: {
    character: 'hot-pie',
    type: { en: 'Fellow recruit', it: 'Recluta come lei' },
    summary: {
      en: 'An orphan boy who tries to steal her sword. She breaks his nose with her practice sword.',
      it: 'Un orfano che prova a rubarle la spada. Lei gli rompe il naso con la spada di legno.',
    },
  },
  aryLommyBook: {
    character: 'lommy',
    type: { en: 'Fellow recruit', it: 'Recluta come lei' },
    summary: {
      en: 'The boy who mocks her haircut and eggs Hot Pie on. After the fight he stays as far from her as he can.',
      it: 'Il ragazzo che prende in giro i suoi capelli e incita Frittella. Dopo la rissa sta il più lontano possibile da lei.',
    },
  },
  aryGendryBook: {
    character: 'gendry',
    type: { en: 'Fellow recruit', it: 'Recluta come lei' },
    summary: {
      en: 'The older boy with the bull helm, who tells the others to let her be.',
      it: 'Il ragazzo più grande con l’elmo a testa di toro, che dice agli altri di lasciarla stare.',
    },
  },
  aryJaqenBook: {
    character: 'jaqen-hghar',
    type: { en: 'Prisoner in the wagon', it: 'Prigioniero sul carro' },
    summary: {
      en: 'The slender prisoner who calls to her from the wagon and says he is Jaqen H’ghar. He tells her she has more courage than sense.',
      it: 'Il prigioniero snello che la chiama dal carro e dice di essere Jaqen H’ghar. Le dice che ha più coraggio che buon senso.',
    },
  },
  aryRorgeBook: {
    character: 'rorge',
    type: { en: 'Prisoner in the wagon', it: 'Prigioniero sul carro' },
    summary: {
      en: 'The noseless prisoner who throws a tankard at her and threatens her through the bars.',
      it: 'Il prigioniero senza naso che le tira un boccale e la minaccia attraverso le sbarre.',
    },
  },
  aryBiterBook: {
    character: 'biter',
    type: { en: 'Prisoner in the wagon', it: 'Prigioniero sul carro' },
    summary: {
      en: 'The mute prisoner who lunges at her. She hits him hard between the eyes.',
      it: 'Il prigioniero muto che si lancia contro di lei. Lei lo colpisce forte in mezzo agli occhi.',
    },
  },
  aryGendryWagon: {
    character: 'gendry',
    type: { en: 'Fellow recruit', it: 'Recluta come lei' },
    summary: {
      en: 'The Bull, who tells her the three in the wagon scare him, and reminds her Yoren warned them away.',
      it: 'Il Toro, che le dice che i tre sul carro gli fanno paura, e le ricorda che Yoren ha vietato di avvicinarsi.',
    },
  },
  aryGregorBook: {
    character: 'gregor-clegane',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The Mountain, who marches her and the other prisoners to Harrenhal and picks one of them each morning to be questioned.',
      it: 'La Montagna, che la porta a Harrenhal con gli altri prigionieri e ogni mattina ne sceglie uno da interrogare.',
    },
  },
  aryPolliverBook: {
    character: 'polliver',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The balding man-at-arms who wears Needle at his hip. She hates him for taking it.',
      it: 'L’uomo d’arme stempiato che porta Ago al fianco. Lei lo odia per averlo preso.',
    },
  },
  aryTicklerBook: {
    character: 'tickler',
    type: { en: 'Torturer', it: 'Torturatore' },
    summary: {
      en: 'The ordinary-looking man who does the questioning. He is almost too frightening to hate.',
      it: 'L’uomo dall’aspetto comune che fa gli interrogatori. È quasi troppo spaventoso per odiarlo.',
    },
  },
  aryChiswyckBook: {
    character: 'chiswyck',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The old man-at-arms who smashed her head when they caught her. She hates him for thinking he is funny.',
      it: 'Il vecchio uomo d’arme che le ha colpito la testa quando l’hanno presa. Lo odia perché si crede divertente.',
    },
  },
  aryGendrySpared: {
    character: 'gendry',
    type: { en: 'Fellow prisoner', it: 'Compagno di prigionia' },
    summary: {
      en: 'The older boy, spared because he admits forging his helmet himself: smiths are too valuable to kill.',
      it: 'Il ragazzo più grande, risparmiato perché ammette di aver forgiato da solo il suo elmo: i fabbri valgono troppo per essere uccisi.',
    },
  },
  aryWeeseBook: {
    character: 'weese',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The understeward of the Wailing Tower, who beats her. She gives Jaqen his name, and he is found dead with his dog on his chest.',
      it: 'Il sottointendente di una torre di Harrenhal, che la picchia. Dice il suo nome a Jaqen, e lo trovano morto con il suo cane sul petto.',
    },
  },
  aryJaqenDebt: {
    character: 'jaqen-hghar',
    type: { en: 'Debtor', it: 'Debitore' },
    summary: {
      en: 'The man who owes her three lives. She has given him Chiswyck, then Weese, and has one name left to give.',
      it: 'L’uomo che le deve tre vite. Gli ha dato Chiswyck, poi Weese, e le resta ancora un nome da dare.',
    },
  },
  aryAmoryBook: {
    character: 'amory-lorch',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The knight who killed Yoren, now castellan of Harrenhal as the host marches out.',
      it: 'Il cavaliere che ha ucciso Yoren, ora castellano di Harrenhal mentre l’esercito parte.',
    },
  },
  aryRorgeHarrenhal: {
    character: 'rorge',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The noseless man from the wagon, one of Amory’s men. He tells her she is not so brave now that he is out of chains.',
      it: 'L’uomo senza naso del carro, uno degli uomini di Amory. Le dice che non è più così coraggiosa ora che lui è senza catene.',
    },
  },
  aryGendryForge: {
    character: 'gendry',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'The Bull, now at the forge. He tells her to say she yelled “Go to hell” on the wall, not “Winterfell”, so Hot Pie never learns who she is.',
      it: 'Il Toro, ora alla fucina. Le dice di raccontare che sulle mura ha gridato “Vai all’inferno” e non “Grande Inverno”, così Frittella non scopre chi è.',
    },
  },
  aryRooseBook: {
    character: 'roose-bolton',
    type: { en: 'Lord she serves', it: 'Signore che serve' },
    summary: {
      en: 'Her brother’s bannerman, who takes Harrenhal and makes her his cupbearer. She does not tell him who she is.',
      it: 'Il vassallo di suo fratello, che prende Harrenhal e la nomina sua coppiera. Lei non gli dice chi è.',
    },
  },
  aryJaqenCoinBook: {
    character: 'jaqen-hghar',
    type: { en: 'Helper', it: 'Alleato' },
    summary: {
      en: 'The man who paid his debt by breaking the northmen out of Harrenhal. He left her a coin and the words to find him.',
      it: 'L’uomo che ha saldato il suo debito facendo evadere i nordici da Harrenhal. Le ha lasciato una moneta e le parole per ritrovarlo.',
    },
  },
  aryGendryRide: {
    character: 'gendry',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'The smith she tells to find swords. He rides out of Harrenhal with her through a sally port.',
      it: 'Il fabbro a cui dice di trovare delle spade. Esce da Harrenhal con lei da una porticina.',
    },
  },
  aryHotPieRide: {
    character: 'hot-pie',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'The baker’s boy she tells Gendry to bring. He rides out of Harrenhal with her through a sally port.',
      it: 'Il garzone di fornaio che dice a Gendry di portare con sé. Esce da Harrenhal con lei da una porticina.',
    },
  },

  // Gendry, the show
  genAryaHarrenhal: {
    character: 'arya-stark',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'The girl who told him who she is. At Harrenhal Tywin sees through her disguise and takes her as his cupbearer.',
      it: 'La ragazza che gli ha detto chi è. A Harrenhal Tywin vede oltre il suo travestimento e la prende come coppiera.',
    },
  },
  genGregor: {
    character: 'gregor-clegane',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The knight who has prisoners tortured each day. He picks Gendry for it.',
      it: 'Il cavaliere che ogni giorno fa torturare dei prigionieri. Sceglie Gendry.',
    },
  },
  genTywin: {
    character: 'tywin-lannister',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The Hand of the King, who stops the torture and puts the prisoners to work. A smith’s skills are worth more to him than a dead prisoner.',
      it: 'Il Primo Cavaliere del re, che ferma la tortura e mette i prigionieri al lavoro. Le abilità di un fabbro valgono più di un prigioniero morto.',
    },
  },
  genPolliver: {
    character: 'polliver',
    type: { en: 'Guard', it: 'Guardia' },
    summary: {
      en: 'The man-at-arms who stands guard over him while he waits to be tortured.',
      it: 'L’uomo d’arme che lo sorveglia mentre aspetta di essere torturato.',
    },
  },
  genHotPieCaptive: {
    character: 'hot-pie',
    type: { en: 'Fellow prisoner', it: 'Compagno di prigionia' },
    summary: {
      en: 'The baker’s boy, taken to Harrenhal with him.',
      it: 'Il garzone di fornaio, portato a Harrenhal insieme a lui.',
    },
  },
  genJaqenCliff: {
    character: 'jaqen-hghar',
    type: { en: 'Stranger', it: 'Sconosciuto' },
    summary: {
      en: 'The man who waits for them on a cliff beyond Harrenhal and speaks with Arya alone.',
      it: 'L’uomo che li aspetta su una scogliera oltre Harrenhal e parla da solo con Arya.',
    },
  },

  // Gendry, the books
  genAryaBook75: {
    character: 'arya-stark',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'A small recruit, passing as a boy called Arry, whom he tells the others to leave alone.',
      it: 'Una piccola recluta, che si fa passare per un ragazzo di nome Arry, e che dice agli altri di lasciare in pace.',
    },
  },
  genHotPieBook: {
    character: 'hot-pie',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'An orphan boy who tries to steal Arry’s sword.',
      it: 'Un orfano che prova a rubare la spada di Arry.',
    },
  },
  genLommyBook: {
    character: 'lommy',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'An orphan boy who eggs Hot Pie on.',
      it: 'Un orfano che incita Frittella.',
    },
  },
  genYorenBook: {
    character: 'yoren',
    type: { en: 'Recruiter', it: 'Reclutatore' },
    summary: {
      en: 'The man of the Night’s Watch who takes him north with the recruits.',
      it: 'L’uomo dei Guardiani della notte che lo porta a nord con le reclute.',
    },
  },
  genAryaBook93: {
    character: 'arya-stark',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'The recruit who tells him she is Arya of House Stark. He starts calling her “m’lady”, and she knocks him down.',
      it: 'La recluta che gli dice di essere Arya di Casa Stark. Lui comincia a chiamarla “mia signora”, e lei lo butta a terra.',
    },
  },
  genHotPieBook93: {
    character: 'hot-pie',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'The baker’s boy, who yields as soon as the soldiers surround him.',
      it: 'Il garzone di fornaio, che si arrende appena i soldati lo circondano.',
    },
  },
  genLommyBook93: {
    character: 'lommy',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'The recruit with the festering leg, who he thinks will die. He says they should leave him behind.',
      it: 'La recluta con la gamba infetta, che secondo lui morirà. Dice che dovrebbero lasciarlo indietro.',
    },
  },
  genGregorBook: {
    character: 'gregor-clegane',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The Mountain, whose men take him prisoner. They spare him when he admits he forged his helmet himself.',
      it: 'La Montagna, i cui uomini lo fanno prigioniero. Lo risparmiano quando ammette di aver forgiato da solo il suo elmo.',
    },
  },
  genYorenBuried: {
    character: 'yoren',
    type: { en: 'Recruiter', it: 'Reclutatore' },
    summary: {
      en: 'The man who took him north, found dead among four Lannister men. He helps dig his grave.',
      it: 'L’uomo che lo ha portato a nord, trovato morto tra quattro uomini Lannister. Lo aiuta a scavargli la tomba.',
    },
  },
  genAryaBook138: {
    character: 'arya-stark',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'The girl who tells him to find swords. He rides out of Harrenhal with her.',
      it: 'La ragazza che gli dice di trovare delle spade. Esce da Harrenhal con lei.',
    },
  },
  genHotPieBook138: {
    character: 'hot-pie',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'The baker’s boy he finds for Arya. He rides out of Harrenhal with them.',
      it: 'Il garzone di fornaio che va a cercare per Arya. Esce da Harrenhal con loro.',
    },
  },

  // Hot Pie, the show
  hotAryaHarrenhal: {
    character: 'arya-stark',
    type: { en: 'Fellow prisoner', it: 'Compagna di prigionia' },
    summary: {
      en: 'A fellow prisoner at Harrenhal, passing as a boy. Tywin sees through it and makes her his cupbearer.',
      it: 'Una compagna di prigionia a Harrenhal, che si fa passare per un ragazzo. Tywin se ne accorge e la fa sua coppiera.',
    },
  },
  hotGendryCaptive: {
    character: 'gendry',
    type: { en: 'Fellow prisoner', it: 'Compagno di prigionia' },
    summary: {
      en: 'A fellow prisoner, chosen for torture and spared when Tywin puts the prisoners to work.',
      it: 'Un compagno di prigionia, scelto per la tortura e risparmiato quando Tywin mette i prigionieri al lavoro.',
    },
  },
  hotAryaEscape: {
    character: 'arya-stark',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'The girl who gets him out of Harrenhal at midnight, with Gendry.',
      it: 'La ragazza che lo porta fuori da Harrenhal a mezzanotte, con Gendry.',
    },
  },
  hotGendryEscape: {
    character: 'gendry',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'The smith who walks out of Harrenhal with him and Arya.',
      it: 'Il fabbro che esce da Harrenhal con lui e Arya.',
    },
  },
  hotJaqenGate: {
    character: 'jaqen-hghar',
    type: { en: 'Stranger', it: 'Sconosciuto' },
    summary: {
      en: 'The man who left the guards at the gate dead, so that they could walk out.',
      it: 'L’uomo che ha lasciato morte le guardie al cancello, così che potessero uscire.',
    },
  },

  // Hot Pie, the books
  hotAryaBook75: {
    character: 'arya-stark',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'A small recruit with a stick sword. He tries to take her sword, and she beats him bloody.',
      it: 'Una piccola recluta con una spada di legno. Prova a prenderle la spada, e lei lo pesta.',
    },
  },
  hotLommyBook: {
    character: 'lommy',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'Another orphan boy, who eggs him on to steal Arry’s sword.',
      it: 'Un altro orfano, che lo spinge a rubare la spada di Arry.',
    },
  },
  hotGendryBook: {
    character: 'gendry',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'The older boy who tells him to leave Arry be.',
      it: 'Il ragazzo più grande che gli dice di lasciare in pace Arry.',
    },
  },
  hotYorenBook: {
    character: 'yoren',
    type: { en: 'Recruiter', it: 'Reclutatore' },
    summary: {
      en: 'The man of the Night’s Watch who pulls Arya off him.',
      it: 'L’uomo dei Guardiani della notte che stacca Arya da lui.',
    },
  },
  hotGregorBook: {
    character: 'gregor-clegane',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The Mountain, to whom he yields. He promises to make pies for the soldiers if they do not hurt him.',
      it: 'La Montagna, a cui si arrende. Promette ai soldati di fare torte per loro se non gli fanno del male.',
    },
  },
  hotLommyBook93: {
    character: 'lommy',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'The wounded recruit he leads the soldiers to. Lommy yields at once, and a spearman kills him.',
      it: 'La recluta ferita da cui guida i soldati. Lommy si arrende subito, e un lanciere lo uccide.',
    },
  },
  hotGendryBook93: {
    character: 'gendry',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'The older boy the soldiers drag into the storehouse. Hot Pie is caught crawling to free him.',
      it: 'Il ragazzo più grande che i soldati trascinano nel magazzino. Frittella viene preso mentre striscia per liberarlo.',
    },
  },
  hotAryaBook93: {
    character: 'arya-stark',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'The small recruit who talks him into crawling under the gibbet to free Gendry, and is taken with him.',
      it: 'La piccola recluta che lo convince a strisciare sotto la forca per liberare Gendry, e viene presa con lui.',
    },
  },
  hotAryaBook138: {
    character: 'arya-stark',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'The girl he now knows as Arry. Gendry fetches him, and they ride out of Harrenhal together.',
      it: 'La ragazza che conosce come Arry. Gendry va a chiamarlo, ed escono insieme da Harrenhal.',
    },
  },
  hotGendryBook138: {
    character: 'gendry',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'The smith who fetches him from the kitchens. They ride out of Harrenhal together.',
      it: 'Il fabbro che lo va a prendere nelle cucine. Escono insieme da Harrenhal.',
    },
  },

  // Yoren
  yorJaqenCage: {
    character: 'jaqen-hghar',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'A prisoner he keeps in a cage on his wagon, bound for the Wall.',
      it: 'Un prigioniero che tiene in gabbia sul suo carro, diretto alla Barriera.',
    },
  },
  yorAryaShow: {
    character: 'arya-stark',
    type: { en: 'Girl he saves', it: 'Ragazza salvata da lui' },
    summary: {
      en: 'The girl he is taking north as a boy called Arry. She hides when the gold cloaks come.',
      it: 'La ragazza che porta a nord come un ragazzo di nome Arry. Si nasconde quando arrivano i mantelli d’oro.',
    },
  },
  yorGendryShow: {
    character: 'gendry',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'The recruit the gold cloaks have a warrant for. He sends them away empty-handed.',
      it: 'La recluta per cui i mantelli d’oro hanno un mandato. Li manda via a mani vuote.',
    },
  },
  yorAryaBook75: {
    character: 'arya-stark',
    type: { en: 'Girl he saves', it: 'Ragazza salvata da lui' },
    summary: {
      en: 'The girl he passes off as a boy. He whacks her for beating Hot Pie, then tells her her father was meant to be allowed to take the black.',
      it: 'La ragazza che fa passare per un ragazzo. La colpisce per aver pestato Frittella, poi le dice che suo padre avrebbe dovuto poter prendere il nero.',
    },
  },
  yorHotPieBook: {
    character: 'hot-pie',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'The boy Arya beat bloody. Yoren tells her he is hurting much worse than she is.',
      it: 'Il ragazzo che Arya ha pestato. Yoren le dice che sta molto peggio di lei.',
    },
  },
  yorGendryBook: {
    character: 'gendry',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'The older boy with the bull helm. Yoren gives him a dead man’s longsword, and tells him to ride hard for the Wall at the first sight of a gold cloak.',
      it: 'Il ragazzo più grande con l’elmo a testa di toro. Yoren gli dà la spada lunga di un morto, e gli dice di correre alla Barriera appena vede un mantello d’oro.',
    },
  },
  yorJaqenWagon: {
    character: 'jaqen-hghar',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'One of three prisoners from the black cells whom he keeps chained in the back of a wagon, bound for the Wall.',
      it: 'Uno dei tre prigionieri delle celle nere che tiene incatenati sul fondo di un carro, diretti alla Barriera.',
    },
  },
  yorAmory: {
    character: 'amory-lorch',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The knight who demands he open the holdfast. Yoren refuses him again and again, and fights him on the walls.',
      it: 'Il cavaliere che gli intima di aprire la fortezza. Yoren rifiuta ancora e ancora, e lo combatte sulle mura.',
    },
  },
  yorAryaTunnel: {
    character: 'arya-stark',
    type: { en: 'Girl he saves', it: 'Ragazza salvata da lui' },
    summary: {
      en: 'The girl he orders to gather the survivors and escape through the tunnel under the barn.',
      it: 'La ragazza a cui ordina di radunare i sopravvissuti e fuggire dal tunnel sotto il fienile.',
    },
  },
  yorAryaDead: {
    character: 'arya-stark',
    type: { en: 'Girl he saved', it: 'Ragazza che ha salvato' },
    summary: {
      en: 'The girl he saved at the holdfast. She finds his body next to four Lannister men and buries him.',
      it: 'La ragazza che ha salvato alla fortezza. Trova il suo corpo accanto a quattro uomini Lannister e lo seppellisce.',
    },
  },
  yorGendryDead: {
    character: 'gendry',
    type: { en: 'Recruit', it: 'Recluta' },
    summary: {
      en: 'The recruit who survives him, and digs his grave with Arya.',
      it: 'La recluta che gli sopravvive, e scava la sua tomba insieme ad Arya.',
    },
  },

  // Robb Stark, the show
  robAlton: {
    character: 'alton-lannister',
    type: { en: 'Envoy', it: 'Messaggero' },
    summary: {
      en: 'A Lannister knight he holds prisoner, whom he sends to King’s Landing with his peace terms.',
      it: 'Un cavaliere Lannister che tiene prigioniero, e che manda ad Approdo del Re con le sue condizioni di pace.',
    },
  },
  robJaimeCaptive: {
    character: 'jaime-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The prisoner who asks why he keeps him in his camp. Grey Wind menaces him during the questioning.',
      it: 'Il prigioniero che gli chiede perché lo tenga nel suo accampamento. Vento Grigio lo minaccia durante l’interrogatorio.',
    },
  },
  robCatelynRenly: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who counsels against trusting Balon Greyjoy and asks him to trade Jaime for her daughters. He sends her to seek Renly’s help.',
      it: 'Sua madre, che sconsiglia di fidarsi di Balon Greyjoy e gli chiede di scambiare Jaime con le sue figlie. La manda a cercare l’aiuto di Renly.',
    },
  },
  robTheonPyke: {
    character: 'theon-greyjoy',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'His friend, who asks to be sent to Pyke to win his father’s fleet.',
      it: 'Il suo amico, che chiede di essere mandato a Pyke per ottenere la flotta del padre.',
    },
  },
  robGreyWindShow: {
    character: 'grey-wind',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'His direwolf, almost fully grown.',
      it: 'Il suo metalupo, ormai quasi adulto.',
    },
  },
  robTalisa: {
    character: 'talisa-maegyr',
    type: { en: 'Healer', it: 'Guaritrice' },
    summary: {
      en: 'A healer who follows his army. She criticizes him for his war, and he introduces her to his mother.',
      it: 'Una guaritrice che segue il suo esercito. Lo critica per la sua guerra, e lui la presenta a sua madre.',
    },
  },
  robCatelynTalisa: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, back from the stormlands with Brienne. He introduces Talisa to her.',
      it: 'Sua madre, tornata dalle terre della tempesta con Brienne. Le presenta Talisa.',
    },
  },
  robRoose: {
    character: 'roose-bolton',
    type: { en: 'Bannerman', it: 'Vassallo' },
    summary: {
      en: 'The lord of the Dreadfort, who brings him word of Theon’s betrayal in the North and advises against marching the whole army back.',
      it: 'Il lord di Forte Terrore, che gli porta la notizia del tradimento di Theon nel Nord e sconsiglia di far tornare indietro tutto l’esercito.',
    },
  },
  robTheonTraitor: {
    character: 'theon-greyjoy',
    type: { en: 'Traitor', it: 'Traditore' },
    summary: {
      en: 'The friend who betrayed him. He wants him taken alive, so he can ask him why before he kills him.',
      it: 'L’amico che lo ha tradito. Lo vuole vivo, per chiedergli perché prima di ucciderlo.',
    },
  },
  robAltonReply: {
    character: 'alton-lannister',
    type: { en: 'Envoy', it: 'Messaggero' },
    summary: {
      en: 'The Lannister knight who returns with the queen’s answer. He locks him in a cell with Jaime, and Jaime kills him.',
      it: 'Il cavaliere Lannister che torna con la risposta della regina. Lo rinchiude in una cella con Jaime, e Jaime lo uccide.',
    },
  },
  robJaimeEscape: {
    character: 'jaime-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The prisoner who kills his cousin and a guard to break out of his cell.',
      it: 'Il prigioniero che uccide suo cugino e una guardia per evadere dalla cella.',
    },
  },
  robRickard: {
    character: 'rickard-karstark',
    type: { en: 'Bannerman', it: 'Vassallo' },
    summary: {
      en: 'The Karstark lord who demands Jaime’s execution for the death of his son.',
      it: 'Il lord Karstark che chiede l’esecuzione di Jaime per la morte di suo figlio.',
    },
  },
  robTalisaCrag: {
    character: 'talisa-maegyr',
    type: { en: 'Healer', it: 'Guaritrice' },
    summary: {
      en: 'The healer who asks him for supplies. He suggests she come with him to get them herself.',
      it: 'La guaritrice che gli chiede delle provviste. Lui le propone di venire con lui a prenderle di persona.',
    },
  },
  robCatelynJaime: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who has to argue for Jaime’s life against Lord Karstark.',
      it: 'Sua madre, che deve difendere la vita di Jaime contro lord Karstark.',
    },
  },
  robTalisaWed: {
    character: 'talisa-maegyr',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'The healer he marries in private that night, before a septon.',
      it: 'La guaritrice che sposa in privato quella notte, davanti a un septon.',
    },
  },
  robCatelynFrey: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who urges him to remember his vow to wed a daughter of House Frey. He ignores her advice.',
      it: 'Sua madre, che lo esorta a ricordare la promessa di sposare una figlia di Casa Frey. Lui ignora il suo consiglio.',
    },
  },

  // Robb Stark, the books
  robCleos: {
    character: 'cleos-frey',
    type: { en: 'Envoy', it: 'Messaggero' },
    summary: {
      en: 'The captured knight he sends to King’s Landing with his peace terms, on his word to come back.',
      it: 'Il cavaliere catturato che manda ad Approdo del Re con le sue condizioni di pace, sulla parola di tornare.',
    },
  },
  robCatelynTerms: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who tells him the lords made him king and can unmake him, and that the girls matter more than the crown.',
      it: 'Sua madre, che gli dice che i lord l’hanno fatto re e possono disfarlo, e che le sorelle contano più della corona.',
    },
  },
  robEdmure: {
    character: 'edmure-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, who urges him to march on Tywin at Harrenhal. Robb says he does not have the strength, and snaps when Edmure calls him “the boy”.',
      it: 'Suo zio, che lo esorta a marciare su Tywin a Harrenhal. Robb dice di non averne la forza, e si arrabbia quando Edmure lo chiama “il ragazzo”.',
    },
  },
  robRickardBook: {
    character: 'rickard-karstark',
    type: { en: 'Bannerman', it: 'Vassallo' },
    summary: {
      en: 'The lord who storms out of the hall at his peace terms. Robb cannot blame him for loathing peace with his sons’ killers.',
      it: 'Il lord che esce di corsa dalla sala davanti alle sue condizioni di pace. Robb non può biasimarlo per detestare la pace con gli assassini dei suoi figli.',
    },
  },
  robGreatjonBook: {
    character: 'greatjon-umber',
    type: { en: 'Bannerman', it: 'Vassallo' },
    summary: {
      en: 'The lord who cheers his terms, and tells Cleos that a king is styled “Your Grace”.',
      it: 'Il lord che acclama le sue condizioni, e dice a Cleos che a un re si dice “Vostra Grazia”.',
    },
  },

  // Tywin Lannister, the show
  tywAryaHarrenhal: {
    character: 'arya-stark',
    type: { en: 'Cupbearer', it: 'Coppiera' },
    summary: {
      en: 'A prisoner he sees is a girl dressed as a boy. He makes her his cupbearer.',
      it: 'Una prigioniera che capisce essere una ragazza vestita da ragazzo. La nomina sua coppiera.',
    },
  },
  tywGregor: {
    character: 'gregor-clegane',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The knight holding Harrenhal. He stops his torture of the prisoners, and asks why they are not in their cells.',
      it: 'Il cavaliere che tiene Harrenhal. Ferma le sue torture sui prigionieri e chiede perché non siano nelle celle.',
    },
  },
  tywPolliver: {
    character: 'polliver',
    type: { en: 'Man-at-arms', it: 'Uomo d’arme' },
    summary: {
      en: 'A man-at-arms who calls the girl “boy” and kneels her down. Tywin calls him an idiot.',
      it: 'Un uomo d’arme che chiama la ragazza “ragazzo” e la fa inginocchiare. Tywin gli dà dell’idiota.',
    },
  },
  tywGendry: {
    character: 'gendry',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'A blacksmith’s apprentice about to be tortured. He puts him to work instead.',
      it: 'Un apprendista fabbro che sta per essere torturato. Lo mette invece al lavoro.',
    },
  },
  tywAryaWar: {
    character: 'arya-stark',
    type: { en: 'Cupbearer', it: 'Coppiera' },
    summary: {
      en: 'The cupbearer he questions about where she comes from. He finds she can read.',
      it: 'La coppiera a cui chiede di dove viene. Scopre che sa leggere.',
    },
  },
  tywAmory: {
    character: 'amory-lorch',
    type: { en: 'Knight', it: 'Cavaliere' },
    summary: {
      en: 'The knight he scolds for sending a letter to the enemy. Amory falls dead on his way to tell him about the cupbearer.',
      it: 'Il cavaliere che rimprovera per aver mandato una lettera al nemico. Amory cade morto mentre va a parlargli della coppiera.',
    },
  },
  tywPetyr: {
    character: 'petyr-baelish',
    type: { en: 'Visitor', it: 'Visitatore' },
    summary: {
      en: 'The master of coin who rides to Harrenhal to talk of an alliance with House Tyrell.',
      it: 'Il consigliere del tesoro che arriva a Harrenhal per parlare di un’alleanza con Casa Tyrell.',
    },
  },
  tywAryaLeft: {
    character: 'arya-stark',
    type: { en: 'Cupbearer', it: 'Coppiera' },
    summary: {
      en: 'The cupbearer he leaves at Harrenhal when he marches west, to serve his castellan.',
      it: 'La coppiera che lascia a Harrenhal quando marcia a ovest, al servizio del suo castellano.',
    },
  },
  tywGregorCastellan: {
    character: 'gregor-clegane',
    type: { en: 'Castellan', it: 'Castellano' },
    summary: {
      en: 'The knight he leaves as castellan of Harrenhal, and whom he orders to burn villages after Amory’s killing.',
      it: 'Il cavaliere che lascia come castellano di Harrenhal, e a cui ordina di bruciare dei villaggi dopo l’uccisione di Amory.',
    },
  },
  tywKevan: {
    character: 'kevan-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, who warns him that Stannis will execute Cersei and Joffrey if he takes the capital.',
      it: 'Suo fratello, che lo avverte che Stannis giustizierà Cersei e Joffrey se prende la capitale.',
    },
  },

  // Tywin Lannister, the books
  tywVargo: {
    character: 'vargo-hoat',
    type: { en: 'Hired captain', it: 'Capitano assoldato' },
    summary: {
      en: 'The leader of the Brave Companions in his pay. He hangs two of them after their first night’s brawl at Harrenhal.',
      it: 'Il capo dei Bravi Camerati al suo soldo. Dopo la rissa della loro prima notte a Harrenhal ne fa impiccare due.',
    },
  },
  tywAmoryBook: {
    character: 'amory-lorch',
    type: { en: 'Bannerman', it: 'Vassallo' },
    summary: {
      en: 'His bannerman, who comes back to Harrenhal with fewer men and many wounded after chasing Beric Dondarrion.',
      it: 'Il suo vassallo, che torna a Harrenhal con meno uomini e molti feriti dopo aver inseguito Beric Dondarrion.',
    },
  },
  tywAmoryCastellan: {
    character: 'amory-lorch',
    type: { en: 'Castellan', it: 'Castellano' },
    summary: {
      en: 'The bannerman he leaves as castellan of Harrenhal when the host marches out.',
      it: 'Il vassallo che lascia come castellano di Harrenhal quando l’esercito parte.',
    },
  },
  tywGregorVan: {
    character: 'gregor-clegane',
    type: { en: 'Bannerman', it: 'Vassallo' },
    summary: {
      en: 'His bannerman, who leaves Harrenhal to command the van of the host.',
      it: 'Il suo vassallo, che lascia Harrenhal per comandare l’avanguardia dell’esercito.',
    },
  },
  tywKevanBook: {
    character: 'kevan-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, who rides out with him at the head of the host.',
      it: 'Suo fratello, che parte con lui alla testa dell’esercito.',
    },
  },

  // Gregor Clegane
  gregPolliver: {
    character: 'polliver',
    type: { en: 'Man-at-arms', it: 'Uomo d’arme' },
    summary: {
      en: 'A man-at-arms who stands guard over the prisoners for him.',
      it: 'Un uomo d’arme che fa la guardia ai prigionieri per lui.',
    },
  },
  gregTywin: {
    character: 'tywin-lannister',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord who arrives a day early and stops his torture of the prisoners.',
      it: 'Il lord che arriva con un giorno d’anticipo e ferma le sue torture sui prigionieri.',
    },
  },
  gregGendry: {
    character: 'gendry',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'A prisoner he picks for torture, saved by Tywin’s arrival.',
      it: 'Un prigioniero che sceglie per la tortura, salvato dall’arrivo di Tywin.',
    },
  },
  gregArya: {
    character: 'arya-stark',
    type: { en: 'Prisoner', it: 'Prigioniera' },
    summary: {
      en: 'A prisoner passing as a boy. Tywin takes her off his hands as his cupbearer.',
      it: 'Una prigioniera che si fa passare per un ragazzo. Tywin se la prende come coppiera.',
    },
  },
  gregTywinCastellan: {
    character: 'tywin-lannister',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'The lord who leaves him in command of Harrenhal, and orders him to burn villages and farms after Amory’s killing.',
      it: 'Il lord che lo lascia al comando di Harrenhal, e gli ordina di bruciare villaggi e fattorie dopo l’uccisione di Amory.',
    },
  },
  gregAryaLeft: {
    character: 'arya-stark',
    type: { en: 'Servant', it: 'Serva' },
    summary: {
      en: 'The cupbearer Tywin leaves at Harrenhal to serve him.',
      it: 'La coppiera che Tywin lascia a Harrenhal al suo servizio.',
    },
  },
  gregAmory: {
    character: 'amory-lorch',
    type: { en: 'Knight', it: 'Cavaliere' },
    summary: {
      en: 'The knight whose killing he guesses was the work of the Brotherhood Without Banners.',
      it: 'Il cavaliere la cui uccisione, ipotizza, è opera della Fratellanza senza Vessilli.',
    },
  },
  gregHotPieBook: {
    character: 'hot-pie',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'A boy who yields and tells him about the others. He orders his men led to them.',
      it: 'Un ragazzo che si arrende e gli parla degli altri. Ordina ai suoi uomini di farsi portare da loro.',
    },
  },
  gregGendryBook: {
    character: 'gendry',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'A prisoner he spares when the boy admits he forged his helmet himself.',
      it: 'Un prigioniero che risparmia quando il ragazzo ammette di aver forgiato da solo il suo elmo.',
    },
  },
  gregAryaBook: {
    character: 'arya-stark',
    type: { en: 'Prisoner', it: 'Prigioniera' },
    summary: {
      en: 'A prisoner passing as a boy, whom he marches to Harrenhal with the rest.',
      it: 'Una prigioniera che si fa passare per un ragazzo, e che porta a Harrenhal con gli altri.',
    },
  },
  gregLommy: {
    character: 'lommy',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'A wounded recruit his men find in the brush. One of them drives a spear through his throat.',
      it: 'Una recluta ferita che i suoi uomini trovano tra i cespugli. Uno di loro gli pianta una lancia nella gola.',
    },
  },
  gregTickler: {
    character: 'tickler',
    type: { en: 'Torturer', it: 'Torturatore' },
    summary: {
      en: 'The ordinary-looking man who questions the prisoners while he watches.',
      it: 'L’uomo dall’aspetto comune che interroga i prigionieri mentre lui guarda.',
    },
  },
  gregChiswyck: {
    character: 'chiswyck',
    type: { en: 'Man-at-arms', it: 'Uomo d’arme' },
    summary: {
      en: 'An old man-at-arms who sometimes helps with the questioning.',
      it: 'Un vecchio uomo d’arme che a volte aiuta negli interrogatori.',
    },
  },
  gregPolliverBook: {
    character: 'polliver',
    type: { en: 'Man-at-arms', it: 'Uomo d’arme' },
    summary: {
      en: 'A man-at-arms who wears the girl’s sword at his hip.',
      it: 'Un uomo d’arme che porta al fianco la spada della ragazza.',
    },
  },

  // Roose Bolton
  rooRobbShow: {
    character: 'robb-stark',
    type: { en: 'Liege', it: 'Signore' },
    summary: {
      en: 'The king he serves, who refuses to kill the Lannister prisoners or let them be tortured.',
      it: 'Il re che serve, che si rifiuta di uccidere i prigionieri Lannister o di lasciarli torturare.',
    },
  },
  rooRobbNews: {
    character: 'robb-stark',
    type: { en: 'Liege', it: 'Signore' },
    summary: {
      en: 'The king he brings word of Theon’s betrayal to. He advises him not to march the whole army back north.',
      it: 'Il re a cui porta la notizia del tradimento di Theon. Gli consiglia di non far tornare a nord tutto l’esercito.',
    },
  },
  rooVargo: {
    character: 'vargo-hoat',
    type: { en: 'Hired captain', it: 'Capitano assoldato' },
    summary: {
      en: 'The sellsword captain he had bought. Vargo turns Harrenhal over to him.',
      it: 'Il capitano mercenario che aveva comprato. Vargo gli consegna Harrenhal.',
    },
  },
  rooAryaBook: {
    character: 'arya-stark',
    type: { en: 'Cupbearer', it: 'Coppiera' },
    summary: {
      en: 'A girl called Nan, the weasel who made the soup. He makes her his cupbearer.',
      it: 'Una ragazza che si fa chiamare Nan, la donnola che ha fatto il brodo. La nomina sua coppiera.',
    },
  },
  rooRobett: {
    character: 'robett-glover',
    type: { en: 'Fellow bannerman', it: 'Altro vassallo' },
    summary: {
      en: 'A fellow northern lord, brought into Harrenhal as a false captive. The ruse takes the castle for Roose.',
      it: 'Un altro lord del Nord, portato a Harrenhal come falso prigioniero. Lo stratagemma prende il castello per Roose.',
    },
  },
  rooAryaNan: {
    character: 'arya-stark',
    type: { en: 'Cupbearer', it: 'Coppiera' },
    summary: {
      en: 'The cupbearer called Nan, who brings him water and his supper.',
      it: 'La coppiera di nome Nan, che gli porta l’acqua e la cena.',
    },
  },
  rooVargoCastle: {
    character: 'vargo-hoat',
    type: { en: 'Hired captain', it: 'Capitano assoldato' },
    summary: {
      en: 'The sellsword captain he means to give Harrenhal to when he goes back north.',
      it: 'Il capitano mercenario a cui intende dare Harrenhal quando tornerà a nord.',
    },
  },
  rooWalder: {
    character: 'walder-frey',
    type: { en: 'Father-in-law', it: 'Suocero' },
    summary: {
      en: 'The lord of the Twins, whose daughter Walda he has newly wed.',
      it: 'Il lord dei Gemelli, di cui ha da poco sposato la figlia Walda.',
    },
  },

  // Edmure Tully
  edmRobb: {
    character: 'robb-stark',
    type: { en: 'Nephew and king', it: 'Nipote e re' },
    summary: {
      en: 'His nephew, whom he urges to march on Tywin at Harrenhal. He calls him “the boy” by accident, and Robb roars at him.',
      it: 'Suo nipote, che esorta a marciare su Tywin a Harrenhal. Lo chiama “il ragazzo” per sbaglio, e Robb gli urla contro.',
    },
  },
  edmCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, who snaps that letting the river lords go home was his idea.',
      it: 'Sua sorella, che gli rinfaccia che è stata sua l’idea di lasciar tornare a casa i lord dei fiumi.',
    },
  },
  edmRickard: {
    character: 'rickard-karstark',
    type: { en: 'Northern lord', it: 'Lord del Nord' },
    summary: {
      en: 'The northern lord who storms out. Edmure says others may agree with him.',
      it: 'Il lord del Nord che esce di corsa. Edmure dice che altri potrebbero pensarla come lui.',
    },
  },
  edmCatelynRiverrun: {
    character: 'catelyn-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, who disapproves of the smallfolk in the castle and of giving Tywin battle.',
      it: 'Sua sorella, che disapprova i popolani nel castello e l’idea di dare battaglia a Tywin.',
    },
  },
  edmJaime: {
    character: 'jaime-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The prisoner he has chained in the deep dungeons after Cleos Frey’s men tried to free him.',
      it: 'Il prigioniero che ha fatto incatenare nelle segrete profonde dopo il tentativo degli uomini di Cleos Frey di liberarlo.',
    },
  },
  edmRoose: {
    character: 'roose-bolton',
    type: { en: 'Bannerman', it: 'Vassallo' },
    summary: {
      en: 'The northern lord he commands to take Harrenhal.',
      it: 'Il lord del Nord a cui ordina di prendere Harrenhal.',
    },
  },
  edmTywin: {
    character: 'tywin-lannister',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The lord marching on Riverrun, whom he means to trap between Riverrun and Harrenhal.',
      it: 'Il lord che marcia su Delta delle Acque, che vuole intrappolare tra Delta delle Acque e Harrenhal.',
    },
  },
  // Jaqen H'ghar
  jaqArya: {
    character: 'arya-stark',
    type: { en: 'Boy at the cage', it: 'Ragazzo alla gabbia' },
    summary: {
      en: 'The boy he calls over for water, who stands up to his cellmates. He tells him he has more courage than sense.',
      it: 'Il ragazzo che chiama per avere dell’acqua e che tiene testa ai suoi compagni di gabbia. Gli dice che ha più coraggio che buon senso.',
    },
  },
  jaqYoren: {
    character: 'yoren',
    type: { en: 'Gaoler', it: 'Carceriere' },
    summary: {
      en: 'The Night’s Watch recruiter who keeps him in chains in a wagon bound for the Wall.',
      it: 'Il reclutatore dei Guardiani della notte che lo tiene in catene su un carro diretto alla Barriera.',
    },
  },
  jaqAryaDebt: {
    character: 'arya-stark',
    type: { en: 'Creditor', it: 'Creditrice' },
    summary: {
      en: 'The girl who saved his life and those of his two companions. He owes her three deaths.',
      it: 'La ragazza che ha salvato la sua vita e quella dei suoi due compagni. Le deve tre morti.',
    },
  },
  jaqTickler: {
    character: 'tickler',
    type: { en: 'First death', it: 'Prima morte' },
    summary: {
      en: 'The torturer Arya names first. He breaks his neck and shows her with a finger to his cheek.',
      it: 'Il torturatore che Arya nomina per primo. Gli spezza il collo e glielo fa sapere con un dito sulla guancia.',
    },
  },
  jaqAmory: {
    character: 'amory-lorch',
    type: { en: 'Second death', it: 'Seconda morte' },
    summary: {
      en: 'The knight Arya names second, in a panic. He kills him with a dart before he reaches Tywin.',
      it: 'Il cavaliere che Arya nomina per secondo, in preda al panico. Lo uccide con un dardo prima che arrivi da Tywin.',
    },
  },
  jaqAryaName: {
    character: 'arya-stark',
    type: { en: 'Creditor', it: 'Creditrice' },
    summary: {
      en: 'The girl who names him as her third death. She takes his name back only if he gets her and her friends out of Harrenhal.',
      it: 'La ragazza che lo nomina come la sua terza morte. Ritira il suo nome solo se la porta fuori da Harrenhal insieme ai suoi amici.',
    },
  },
  jaqGendry: {
    character: 'gendry',
    type: { en: 'Friend of Arya', it: 'Amico di Arya' },
    summary: {
      en: 'One of the friends he lets out through the gate. The guards are already dead.',
      it: 'Uno degli amici che fa uscire dal cancello. Le guardie sono già morte.',
    },
  },
  jaqHotPie: {
    character: 'hot-pie',
    type: { en: 'Friend of Arya', it: 'Amico di Arya' },
    summary: {
      en: 'One of the friends he lets out through the gate. The guards are already dead.',
      it: 'Uno degli amici che fa uscire dal cancello. Le guardie sono già morte.',
    },
  },
  jaqAryaBook: {
    character: 'arya-stark',
    type: { en: 'Boy at the cage', it: 'Ragazzo alla gabbia' },
    summary: {
      en: 'The boy he calls over for beer, who goes up to the wagon with a stick sword. He says he has more courage than sense.',
      it: 'Il ragazzo che chiama per avere della birra e che si avvicina al carro con una spada di legno. Dice che ha più coraggio che buon senso.',
    },
  },
  jaqRorge: {
    character: 'rorge',
    type: { en: 'Fellow prisoner', it: 'Compagno di catene' },
    summary: {
      en: 'The noseless man chained in the wagon with him, whom he names to Arya.',
      it: 'L’uomo senza naso incatenato con lui sul carro, di cui dice il nome ad Arya.',
    },
  },
  jaqBiter: {
    character: 'biter',
    type: { en: 'Fellow prisoner', it: 'Compagno di catene' },
    summary: {
      en: 'The mute prisoner chained in the wagon with him, whom he named for his filed teeth.',
      it: 'Il prigioniero muto incatenato con lui sul carro, a cui ha dato il nome per i suoi denti limati.',
    },
  },
  jaqAryaChiswyck: {
    character: 'arya-stark',
    type: { en: 'Creditor', it: 'Creditrice' },
    summary: {
      en: 'The girl who saved him and his companions from the burning wagon. He owes her three lives, and she gives him the first name.',
      it: 'La ragazza che ha salvato lui e i suoi compagni dal carro in fiamme. Le deve tre vite, e lei gli dà il primo nome.',
    },
  },
  jaqChiswyck: {
    character: 'chiswyck',
    type: { en: 'First death', it: 'Prima morte' },
    summary: {
      en: 'The man-at-arms Arya names first. Within days he falls from the wallwalk.',
      it: 'L’uomo d’arme che Arya nomina per primo. Pochi giorni dopo cade dal cammino di ronda.',
    },
  },
  jaqAmoryHarrenhal: {
    character: 'amory-lorch',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The knight whose men he rides in with. Arya knows him as the man who killed Yoren.',
      it: 'Il cavaliere con i cui uomini arriva a Harrenhal. Arya lo conosce come l’uomo che ha ucciso Yoren.',
    },
  },
  jaqAryaWeese: {
    character: 'arya-stark',
    type: { en: 'Creditor', it: 'Creditrice' },
    summary: {
      en: 'The girl who gives him a second name, then wants it back for Lord Tywin. It is too late.',
      it: 'La ragazza che gli dà un secondo nome, e poi vorrebbe riprenderselo per lord Tywin. È troppo tardi.',
    },
  },
  jaqWeese: {
    character: 'weese',
    type: { en: 'Second death', it: 'Seconda morte' },
    summary: {
      en: 'The understeward Arya names second. He is found dead with his dog on his chest.',
      it: 'Il sottointendente che Arya nomina per secondo. Lo trovano morto con il suo cane sul petto.',
    },
  },
  jaqAmoryCastellan: {
    character: 'amory-lorch',
    type: { en: 'Castellan', it: 'Castellano' },
    summary: {
      en: 'The knight left as castellan of Harrenhal, so he will not be leaving with the host.',
      it: 'Il cavaliere lasciato come castellano di Harrenhal, quindi non partirà con l’esercito.',
    },
  },
  jaqAryaFarewell: {
    character: 'arya-stark',
    type: { en: 'Creditor', it: 'Creditrice' },
    summary: {
      en: 'The girl who names him as her last death. He repays the debt in the night Harrenhal falls, then leaves her a coin and vanishes.',
      it: 'La ragazza che lo nomina come ultima morte. Salda il debito la notte in cui Harrenhal cade, poi le lascia una moneta e svanisce.',
    },
  },
  jaqRobett: {
    character: 'robett-glover',
    type: { en: 'Prisoner he frees', it: 'Prigioniero che libera' },
    summary: {
      en: 'The northern lord in the cells beneath the Widow’s Tower. He brings him the kettles and frees him.',
      it: 'Il lord del Nord nelle celle sotto una delle torri. Gli porta i paioli e lo libera.',
    },
  },

  // Rorge (books only)
  rorArya: {
    character: 'arya-stark',
    type: { en: 'Boy at the cage', it: 'Ragazzo alla gabbia' },
    summary: {
      en: 'The small recruit he throws a tankard at and threatens through the bars, and who comes up to the wagon anyway.',
      it: 'La piccola recluta a cui tira un boccale e che minaccia attraverso le sbarre, e che si avvicina comunque al carro.',
    },
  },
  rorYoren: {
    character: 'yoren',
    type: { en: 'Gaoler', it: 'Carceriere' },
    summary: {
      en: 'The Night’s Watch recruiter who keeps him in chains in a wagon bound for the Wall.',
      it: 'Il reclutatore dei Guardiani della notte che lo tiene in catene su un carro diretto alla Barriera.',
    },
  },
  rorJaqen: {
    character: 'jaqen-hghar',
    type: { en: 'Fellow prisoner', it: 'Compagno di catene' },
    summary: {
      en: 'The man chained in the wagon with him, who gives his name to the boy at the cage.',
      it: 'L’uomo incatenato con lui sul carro, che dice il suo nome al ragazzo alla gabbia.',
    },
  },
  rorBiter: {
    character: 'biter',
    type: { en: 'Fellow prisoner', it: 'Compagno di catene' },
    summary: {
      en: 'The mute prisoner chained beside him, who hisses behind him.',
      it: 'Il prigioniero muto incatenato accanto a lui, che sibila dietro di lui.',
    },
  },
  rorAryaHarrenhal: {
    character: 'arya-stark',
    type: { en: 'Girl from the cage', it: 'Ragazza della gabbia' },
    summary: {
      en: 'The girl from the wagon, now a servant in the castle. He tells her she is not so brave now that he is out of chains.',
      it: 'La ragazza del carro, ora serva nel castello. Le dice che non è più così coraggiosa ora che lui è senza catene.',
    },
  },
  rorAmory: {
    character: 'amory-lorch',
    type: { en: 'Commander', it: 'Comandante' },
    summary: {
      en: 'The knight whose man he is at Harrenhal, castellan when the host marches out.',
      it: 'Il cavaliere di cui è uomo a Harrenhal, castellano quando l’esercito parte.',
    },
  },
  rorRobett: {
    character: 'robett-glover',
    type: { en: 'Prisoner he frees', it: 'Prigioniero che libera' },
    summary: {
      en: 'The northern lord in the cell below the Widow’s Tower. He unlocks the door and the lord thanks him.',
      it: 'Il lord del Nord nella cella sotto una delle torri. Apre la porta e il lord lo ringrazia.',
    },
  },

  // Biter (books only)
  bitArya: {
    character: 'arya-stark',
    type: { en: 'Boy at the cage', it: 'Ragazzo alla gabbia' },
    summary: {
      en: 'The small recruit who comes up to the wagon and hits him hard between the eyes.',
      it: 'La piccola recluta che si avvicina al carro e lo colpisce forte in mezzo agli occhi.',
    },
  },
  bitJaqen: {
    character: 'jaqen-hghar',
    type: { en: 'Fellow prisoner', it: 'Compagno di catene' },
    summary: {
      en: 'The man chained in the wagon with him, who gave him his name for his filed teeth.',
      it: 'L’uomo incatenato con lui sul carro, che gli ha dato il nome per i suoi denti limati.',
    },
  },
  bitRorge: {
    character: 'rorge',
    type: { en: 'Fellow prisoner', it: 'Compagno di catene' },
    summary: {
      en: 'The noseless prisoner chained beside him.',
      it: 'Il prigioniero senza naso incatenato accanto a lui.',
    },
  },
  bitYoren: {
    character: 'yoren',
    type: { en: 'Gaoler', it: 'Carceriere' },
    summary: {
      en: 'The Night’s Watch recruiter who keeps him in chains in a wagon bound for the Wall.',
      it: 'Il reclutatore dei Guardiani della notte che lo tiene in catene su un carro diretto alla Barriera.',
    },
  },
  bitRobett: {
    character: 'robett-glover',
    type: { en: 'Prisoner he frees', it: 'Prigioniero che libera' },
    summary: {
      en: 'The northern lord in the cell below the Widow’s Tower. He carries the kettles of hot soup that start the breakout.',
      it: 'Il lord del Nord nella cella sotto una delle torri. Porta i paioli di brodo bollente che avviano l’evasione.',
    },
  },

  // Lommy Greenhands (books until the show names him at 31)
  lomArya: {
    character: 'arya-stark',
    type: { en: 'Boy he mocks', it: 'Ragazzo che prende in giro' },
    summary: {
      en: 'The boy he calls Lumpyhead. After she beats Hot Pie bloody, he keeps as far from her as he can.',
      it: 'Il ragazzo a cui ha dato un soprannome per i capelli tagliati male. Dopo che lei ha pestato Frittella, sta il più lontano possibile da lei.',
    },
  },
  lomHotPie: {
    character: 'hot-pie',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'Another orphan boy, whom he eggs on to steal the new boy’s sword.',
      it: 'Un altro orfano, che spinge a rubare la spada del ragazzo nuovo.',
    },
  },
  lomGendry: {
    character: 'gendry',
    type: { en: 'Older recruit', it: 'Recluta più grande' },
    summary: {
      en: 'The older boy with the bull helm, who tells them to leave the new boy alone.',
      it: 'Il ragazzo più grande con l’elmo a testa di toro, che dice loro di lasciare in pace il ragazzo nuovo.',
    },
  },
  lomYoren: {
    character: 'yoren',
    type: { en: 'Recruiter', it: 'Reclutatore' },
    summary: {
      en: 'The Night’s Watch man who takes the recruits north, and sends him with tankards to the prisoners in the wagon.',
      it: 'L’uomo dei Guardiani della notte che porta le reclute a nord, e lo manda con i boccali ai prigionieri sul carro.',
    },
  },
  lomArya93: {
    character: 'arya-stark',
    type: { en: 'Fellow fugitive', it: 'Compagna di fuga' },
    summary: {
      en: 'The girl who passes as a boy. She hid with him after the holdfast, and they took turns carrying him.',
      it: 'La ragazza che si fa passare per un ragazzo. Si è nascosta con lui dopo la fortezza, e si sono dati il cambio a portarlo.',
    },
  },
  lomHotPie93: {
    character: 'hot-pie',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'The recruit who yields to the Mountain’s men, and leads them to where he is lying.',
      it: 'La recluta che si arrende agli uomini della Montagna e li porta dove lui è nascosto.',
    },
  },
  lomGendry93: {
    character: 'gendry',
    type: { en: 'Fellow recruit', it: 'Recluta come lui' },
    summary: {
      en: 'The older recruit who thinks he is going to die, and says they should leave him behind.',
      it: 'La recluta più grande che pensa che stia per morire, e dice che dovrebbero lasciarlo indietro.',
    },
  },
  lomGregor: {
    character: 'gregor-clegane',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The Mountain, whose men find his hiding place. One of them drives a spear through his throat.',
      it: 'La Montagna, i cui uomini trovano il suo nascondiglio. Uno di loro gli pianta una lancia nella gola.',
    },
  },

  // Jaqen, Rorge and Biter at Harrenhal and after
  jaqRorgeMen: {
    character: 'rorge',
    type: { en: 'Fellow prisoner', it: 'Compagno di catene' },
    summary: {
      en: 'The noseless man who rides in beside him among Amory’s men.',
      it: 'L’uomo senza naso che arriva accanto a lui tra gli uomini di Amory.',
    },
  },
  jaqBiterMen: {
    character: 'biter',
    type: { en: 'Fellow prisoner', it: 'Compagno di catene' },
    summary: {
      en: 'The mute man with filed teeth who rides in beside him among Amory’s men.',
      it: 'L’uomo muto dai denti limati che arriva accanto a lui tra gli uomini di Amory.',
    },
  },
  jaqRorgeFree: {
    character: 'rorge',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'The noseless man who carries a kettle of soup and unlocks the cell door.',
      it: 'L’uomo senza naso che porta un paiolo di brodo e apre la porta della cella.',
    },
  },
  jaqBiterFree: {
    character: 'biter',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'The mute man who carries two kettles of soup at once.',
      it: 'L’uomo muto che porta due paioli di brodo alla volta.',
    },
  },
  rorJaqenMen: {
    character: 'jaqen-hghar',
    type: { en: 'Fellow prisoner', it: 'Compagno di catene' },
    summary: {
      en: 'The man who rode in with him among Amory’s men.',
      it: 'L’uomo che è arrivato con lui tra gli uomini di Amory.',
    },
  },
  rorBiterMen: {
    character: 'biter',
    type: { en: 'Fellow prisoner', it: 'Compagno di catene' },
    summary: {
      en: 'The mute prisoner who rode in beside him among Amory’s men.',
      it: 'Il prigioniero muto che è arrivato accanto a lui tra gli uomini di Amory.',
    },
  },
  rorJaqenFree: {
    character: 'jaqen-hghar',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'The man who leads the three of them in with the kettles, and fights the guards with him.',
      it: 'L’uomo che li guida tutti e tre dentro con i paioli, e combatte le guardie insieme a lui.',
    },
  },
  rorBiterFree: {
    character: 'biter',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'The mute man who carries two kettles of soup at once.',
      it: 'L’uomo muto che porta due paioli di brodo alla volta.',
    },
  },
  bitJaqenFree: {
    character: 'jaqen-hghar',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'The man who leads the three of them in with the kettles.',
      it: 'L’uomo che li guida tutti e tre dentro con i paioli.',
    },
  },
  bitRorgeFree: {
    character: 'rorge',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'The noseless man who carries a kettle and unlocks the cell door.',
      it: 'L’uomo senza naso che porta un paiolo e apre la porta della cella.',
    },
  },
  genAryaEscape: {
    character: 'arya-stark',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'The girl who gets him out of Harrenhal at midnight, with Hot Pie.',
      it: 'La ragazza che lo porta fuori da Harrenhal a mezzanotte, con Frittella.',
    },
  },
  genHotPieEscape: {
    character: 'hot-pie',
    type: { en: 'Friend', it: 'Amico' },
    summary: {
      en: 'The baker’s boy who walks out of Harrenhal with him and Arya.',
      it: 'Il garzone di fornaio che esce da Harrenhal con lui e Arya.',
    },
  },

  // Catelyn Stark and Jaime Lannister (#1481)
  catRobb11: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, who sends her to seek Renly’s help and turns down her plea to trade Jaime for her daughters.',
      it: 'Suo figlio, che la manda a cercare l’aiuto di Renly e respinge la sua richiesta di scambiare Jaime con le sue figlie.',
    },
  },
  catRenly11: {
    character: 'renly-baratheon',
    type: { en: 'King to win over', it: 'Re da conquistare' },
    summary: {
      en: 'The Baratheon who also calls himself king, whose help Robb sends her to ask for.',
      it: 'Il Baratheon che si proclama re a sua volta, di cui Robb la manda a chiedere l’aiuto.',
    },
  },
  catTheon11: {
    character: 'theon-greyjoy',
    type: { en: 'Ward of her house', it: 'Pupillo della sua casa' },
    summary: {
      en: 'The Greyjoy ward who asks to go to his father as envoy. She counsels Robb against trusting Balon.',
      it: 'Il pupillo Greyjoy che chiede di andare dal padre come messaggero. Lei consiglia a Robb di non fidarsi di Balon.',
    },
  },
  catTalisa16: {
    character: 'talisa-maegyr',
    type: { en: 'Healer', it: 'Guaritrice' },
    summary: {
      en: 'The healer from Volantis whom Robb introduces to her. She reminds him he is not free to love where he will.',
      it: 'La guaritrice di Volantis che Robb le presenta. Gli ricorda che non è libero di amare chi vuole.',
    },
  },
  catBrienne16: {
    character: 'brienne-of-tarth',
    type: { en: 'Escort', it: 'Scorta' },
    summary: {
      en: 'The knight of Tarth who has come back with her from the stormlands.',
      it: 'La cavaliera di Tarth che è tornata con lei dalle terre della tempesta.',
    },
  },
  catJaimeTalk: {
    character: 'jaime-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The captive she confronts. He tells her honor is naive and mocks Eddard, until she asks for Brienne’s sword.',
      it: 'Il prigioniero che affronta. Le dice che l’onore è ingenuo e deride Eddard, finché lei non chiede la spada di Brienne.',
    },
  },
  catRickard: {
    character: 'rickard-karstark',
    type: { en: 'Northern lord', it: 'Lord del Nord' },
    summary: {
      en: 'The lord who demands Jaime’s execution for the death of his son. She has to argue for Jaime’s life.',
      it: 'Il lord che chiede l’esecuzione di Jaime per la morte di suo figlio. Lei deve difendere la vita di Jaime.',
    },
  },
  catBrienne17: {
    character: 'brienne-of-tarth',
    type: { en: 'Sworn sword', it: 'Spada giurata' },
    summary: {
      en: 'The knight whose sword she asks for when Jaime goes too far.',
      it: 'La cavaliera di cui chiede la spada quando Jaime esagera.',
    },
  },
  catJaimeFree: {
    character: 'jaime-lannister',
    type: { en: 'Prisoner she frees', it: 'Prigioniero che libera' },
    summary: {
      en: 'The captive she frees, to be taken to King’s Landing and traded for her daughters.',
      it: 'Il prigioniero che libera, perché sia portato ad Approdo del Re e scambiato con le sue figlie.',
    },
  },
  catRobbGuard: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, who is furious that she freed Jaime and has her kept under guard.',
      it: 'Suo figlio, furioso perché ha liberato Jaime, che la fa tenere sotto sorveglianza.',
    },
  },
  catBrienne18: {
    character: 'brienne-of-tarth',
    type: { en: 'Escort', it: 'Scorta' },
    summary: {
      en: 'The knight she sends to take Jaime south.',
      it: 'La cavaliera che manda a portare Jaime verso sud.',
    },
  },
  catRobb20: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, whom she urges to keep his vow to wed a Frey daughter. He ignores her advice.',
      it: 'Suo figlio, che esorta a mantenere la promessa di sposare una figlia dei Frey. Lui ignora il suo consiglio.',
    },
  },
  catTalisa20: {
    character: 'talisa-maegyr',
    type: { en: 'Son’s beloved', it: 'Amata di suo figlio' },
    summary: {
      en: 'The healer Robb loves, in spite of his vow to the Freys.',
      it: 'La guaritrice che Robb ama, nonostante la promessa fatta ai Frey.',
    },
  },
  catRobb81: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, who sends the captive knight to King’s Landing. She tells him sweeter terms might bring her daughters back.',
      it: 'Suo figlio, che manda il cavaliere prigioniero ad Approdo del Re. Lei gli dice che condizioni più dolci potrebbero riportare le sue figlie.',
    },
  },
  catEdmure81: {
    character: 'edmure-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, whom she blames for letting the river lords go home.',
      it: 'Suo fratello, a cui rinfaccia di aver lasciato tornare a casa i lord dei fiumi.',
    },
  },
  catBrynden81: {
    character: 'brynden-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'Her uncle, back at Riverrun. With him she decides to ask Renly for help, as a king.',
      it: 'Suo zio, tornato a Delta delle Acque. Con lui decide di chiedere aiuto a Renly, come re.',
    },
  },
  catHoster81: {
    character: 'hoster-tully',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, frail and asleep in his solar.',
      it: 'Suo padre, debole e addormentato nel suo solario.',
    },
  },
  catCleos81: {
    character: 'cleos-frey',
    type: { en: 'Envoy', it: 'Messaggero' },
    summary: {
      en: 'The captive knight Robb sends to King’s Landing with his terms.',
      it: 'Il cavaliere prigioniero che Robb manda ad Approdo del Re con le sue condizioni.',
    },
  },
  catEdmure113: {
    character: 'edmure-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who holds Riverrun. She disapproves of the smallfolk in the castle and of giving Tywin battle.',
      it: 'Suo fratello, che tiene Delta delle Acque. Lei disapprova i popolani nel castello e la battaglia con Tywin.',
    },
  },
  catBrienne113: {
    character: 'brienne-of-tarth',
    type: { en: 'Sworn sword', it: 'Spada giurata' },
    summary: {
      en: 'The knight she takes as her sworn sword.',
      it: 'La cavaliera che prende come spada giurata.',
    },
  },
  catJaime113: {
    character: 'jaime-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The captive Edmure has chained in the deep dungeons after the escape attempt.',
      it: 'Il prigioniero che Edmure ha fatto incatenare nelle segrete profonde dopo il tentativo di fuga.',
    },
  },
  catHoster113: {
    character: 'hoster-tully',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her feverish father, who mistakes her for her sister.',
      it: 'Suo padre, febbricitante, che la scambia per sua sorella.',
    },
  },
  catJaime129: {
    character: 'jaime-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The captive she questions at midnight. He agrees to answer if she answers him, and she ends it when he mocks Eddard.',
      it: 'Il prigioniero che interroga a mezzanotte. Accetta di rispondere se lei risponde a lui, e lei chiude quando deride Eddard.',
    },
  },
  catBrienne129: {
    character: 'brienne-of-tarth',
    type: { en: 'Sworn sword', it: 'Spada giurata' },
    summary: {
      en: 'The knight who waits outside the cell, and whose sword she calls for.',
      it: 'La cavaliera che aspetta fuori dalla cella, e di cui chiama la spada.',
    },
  },
  catRickard129: {
    character: 'rickard-karstark',
    type: { en: 'Northern lord', it: 'Lord del Nord' },
    summary: {
      en: 'The lord who wants Jaime dead for his sons. She tells Jaime so.',
      it: 'Il lord che vuole Jaime morto per i suoi figli. Lei lo dice a Jaime.',
    },
  },
  catRobb129: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, whose latest victory Riverrun celebrates while she mourns.',
      it: 'Suo figlio, la cui ultima vittoria Delta delle Acque festeggia mentre lei è in lutto.',
    },
  },
  catEdmure129: {
    character: 'edmure-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, whose victory in battle Riverrun celebrates.',
      it: 'Suo fratello, la cui vittoria in battaglia Delta delle Acque festeggia.',
    },
  },
  jaiRobb11: {
    character: 'robb-stark',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The king who questions him about Bran. Jaime says keeping him in the camp shows a lack of trust in his own men.',
      it: 'Il re che lo interroga su Bran. Jaime dice che tenerlo nell’accampamento mostra poca fiducia nei suoi uomini.',
    },
  },
  jaiGreyWind11: {
    character: 'grey-wind',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'The king’s direwolf, which menaces him during the questioning.',
      it: 'Il metalupo del re, che lo minaccia durante l’interrogatorio.',
    },
  },
  jaiAlton: {
    character: 'alton-lannister',
    type: { en: 'Cousin', it: 'Cugino' },
    summary: {
      en: 'His cousin, put in his cell. He kills him to lure in the guard.',
      it: 'Suo cugino, messo nella sua cella. Lo uccide per attirare la guardia.',
    },
  },
  jaiRickard: {
    character: 'rickard-karstark',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The Karstark lord whose son he strangles in the escape. He demands Jaime’s execution.',
      it: 'Il lord Karstark di cui strangola il figlio durante la fuga. Chiede l’esecuzione di Jaime.',
    },
  },
  jaiCatelyn17: {
    character: 'catelyn-stark',
    type: { en: 'Captor', it: 'Carceriera' },
    summary: {
      en: 'The lady who argues for his life, then tells him he has no honor.',
      it: 'La lady che difende la sua vita, poi gli dice che non ha onore.',
    },
  },
  jaiCatelyn18: {
    character: 'catelyn-stark',
    type: { en: 'Liberator', it: 'Liberatrice' },
    summary: {
      en: 'The lady who frees him, to trade him for her daughters.',
      it: 'La lady che lo libera, per scambiarlo con le sue figlie.',
    },
  },
  jaiBrienne18: {
    character: 'brienne-of-tarth',
    type: { en: 'Escort', it: 'Scorta' },
    summary: {
      en: 'The knight who takes him south toward King’s Landing.',
      it: 'La cavaliera che lo porta verso sud, verso Approdo del Re.',
    },
  },
  jaiRobb18: {
    character: 'robb-stark',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The king whose most important captive he was, furious that his mother has freed him.',
      it: 'Il re di cui era il prigioniero più importante, furioso che sua madre lo abbia liberato.',
    },
  },
  jaiBrienne20: {
    character: 'brienne-of-tarth',
    type: { en: 'Escort', it: 'Scorta' },
    summary: {
      en: 'The knight who kills the soldiers that recognize him. She says she serves Catelyn Stark, not Robb.',
      it: 'La cavaliera che uccide i soldati che lo riconoscono. Dice di servire Catelyn Stark, non Robb.',
    },
  },
  jaiEdmure113: {
    character: 'edmure-tully',
    type: { en: 'Captor', it: 'Carceriere' },
    summary: {
      en: 'The lord of Riverrun in his father’s place, who has him chained in the deep dungeons.',
      it: 'Il signore di Delta delle Acque al posto del padre, che lo fa incatenare nelle segrete profonde.',
    },
  },
  jaiCleos113: {
    character: 'cleos-frey',
    type: { en: 'Cousin', it: 'Cugino' },
    summary: {
      en: 'His cousin, whose escort’s men tried to free Jaime and were hanged.',
      it: 'Suo cugino, i cui uomini di scorta hanno tentato di liberare Jaime e sono stati impiccati.',
    },
  },
  jaiCatelyn129: {
    character: 'catelyn-stark',
    type: { en: 'Captor', it: 'Carceriera' },
    summary: {
      en: 'The lady who questions him at midnight. He answers her if she answers him.',
      it: 'La lady che lo interroga a mezzanotte. Lui risponde se lei risponde a lui.',
    },
  },
  jaiBrienne129: {
    character: 'brienne-of-tarth',
    type: { en: 'Guard', it: 'Guardia' },
    summary: {
      en: 'The knight who waits outside his cell.',
      it: 'La cavaliera che aspetta fuori dalla sua cella.',
    },
  },
  jaiRickard129: {
    character: 'rickard-karstark',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The lord who wants him dead for his sons. Jaime says they died in a fair fight.',
      it: 'Il lord che lo vuole morto per i suoi figli. Jaime dice che sono morti in un combattimento leale.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * Stage 2's stormlands cards for Renly and Loras (#1480): season 2 and A Clash
 * of Kings, episodes 11 to 20 and chapters 74 to 143. The new characters' own
 * cards are in `season-2.relationships.ts`.
 */
const stormlands2 = {
  // Renly, the show
  renLorasHeir: {
    character: 'loras-tyrell',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'The Knight of Flowers, his lover. Loras turns him away and reminds him that he needs an heir.',
      it: 'Il Cavaliere dei Fiori, suo amante. Loras lo respinge e gli ricorda che ha bisogno di un erede.',
    },
  },
  renMargaeryBed: {
    character: 'margaery-tyrell',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'His new queen, who tries to seduce him. They talk about the need for an heir.',
      it: 'La sua nuova regina, che cerca di sedurlo. Parlano della necessità di un erede.',
    },
  },
  renBrienneChampion: {
    character: 'brienne-of-tarth',
    type: { en: 'Champion', it: 'Campionessa' },
    summary: {
      en: 'The woman who wins his tourney. He makes her one of his Kingsguard.',
      it: 'La donna che vince il suo torneo. La nomina nella sua guardia reale.',
    },
  },
  renCatelynArmy: {
    character: 'catelyn-stark',
    type: { en: 'Envoy', it: 'Inviata' },
    summary: {
      en: 'Robb Stark’s envoy. He shows her his army of a hundred thousand, and she warns him to take the war seriously.',
      it: 'L’inviata di Robb Stark. Le mostra il suo esercito di centomila uomini, e lei lo avverte di prendere la guerra sul serio.',
    },
  },
  renStannisDemand: {
    character: 'stannis-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother, who comes to his camp to demand he yield. Renly answers that no one wants Stannis for their king.',
      it: 'Il fratello maggiore, che arriva al suo accampamento per chiedergli di cedere. Renly risponde che nessuno vuole Stannis come re.',
    },
  },
  renPetyrEnvoy: {
    character: 'petyr-baelish',
    type: { en: 'Envoy', it: 'Inviato' },
    summary: {
      en: 'The envoy from King’s Landing. Renly dislikes him, but is tempted by his offer of help from within the city.',
      it: 'L’inviato di Approdo del Re. Renly non lo ama, ma è tentato dalla sua offerta di aiuto dall’interno della città.',
    },
  },
  renStannisShadow: {
    character: 'stannis-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother, whose shadow kills him in his tent.',
      it: 'Il fratello maggiore, la cui ombra lo uccide nella tenda.',
    },
  },
  renCatelynAlliance: {
    character: 'catelyn-stark',
    type: { en: 'Envoy', it: 'Inviata' },
    summary: {
      en: 'Robb Stark’s envoy. He agrees to an alliance with her son just before he dies in front of her.',
      it: 'L’inviata di Robb Stark. Accetta un’alleanza con suo figlio poco prima di morire davanti a lei.',
    },
  },
  renBrienneBlamed: {
    character: 'brienne-of-tarth',
    type: { en: 'Kingsguard', it: 'Guardia reale' },
    summary: {
      en: 'The guard who is with him when he dies, and who is blamed for it.',
      it: 'La guardia che è con lui quando muore, e a cui viene data la colpa.',
    },
  },
  renLorasRevenge: {
    character: 'loras-tyrell',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'The Knight of Flowers, his lover. After Renly’s death Loras wants revenge.',
      it: 'Il Cavaliere dei Fiori, suo amante. Dopo la morte di Renly, Loras vuole vendetta.',
    },
  },
  renMargaeryWidow: {
    character: 'margaery-tyrell',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'His queen, now his widow.',
      it: 'La sua regina, ora vedova.',
    },
  },
  // Renly, the books
  renCatelynTerms: {
    character: 'catelyn-stark',
    type: { en: 'Envoy', it: 'Inviata' },
    summary: {
      en: 'Robb Stark’s envoy. He tells her Robb may keep the title of King in the North, but must bend the knee to him.',
      it: 'L’inviata di Robb Stark. Le dice che Robb può tenere il titolo di Re del Nord, ma deve piegare il ginocchio davanti a lui.',
    },
  },
  renMargaeryFeast: {
    character: 'margaery-tyrell',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'His young queen, whom he feeds morsels of food and kisses at the feast.',
      it: 'La sua giovane regina, che al banchetto imbocca con dei bocconi e bacia.',
    },
  },
  renBrienneRainbow: {
    character: 'brienne-of-tarth',
    type: { en: 'Champion', it: 'Campionessa' },
    summary: {
      en: 'The champion of his tourney. She asks to join his Rainbow Guard, and he grants it.',
      it: 'La campionessa del suo torneo. Chiede di entrare nella sua guardia arcobaleno, e lui acconsente.',
    },
  },
  renLorasJests: {
    character: 'loras-tyrell',
    type: { en: 'Favorite', it: 'Favorito' },
    summary: {
      en: 'The Knight of Flowers, with whom he shares most of his jests and confidences at the feast.',
      it: 'Il Cavaliere dei Fiori, con cui al banchetto condivide più battute e confidenze che con chiunque altro.',
    },
  },
  renStannisAppalling: {
    character: 'stannis-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother on Dragonstone, whom he calls respected and feared but not loved, and an appalling king.',
      it: 'Il fratello maggiore a Roccia del Drago, che definisce rispettato e temuto ma non amato, e un re pessimo.',
    },
  },
  renStannisParley: {
    character: 'stannis-baratheon',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother, who demands he yield outside Storm’s End. Renly offers him a peach, then mocks him, and decides to fight.',
      it: 'Il fratello maggiore, che gli intima di cedere davanti a Capo Tempesta. Renly gli offre una pesca, poi lo deride, e decide di combattere.',
    },
  },
  renCatelynWatch: {
    character: 'catelyn-stark',
    type: { en: 'Envoy', it: 'Inviata' },
    summary: {
      en: 'Robb Stark’s envoy, whom he will not let leave. She must watch the battle to tell her son what happens to rebels.',
      it: 'L’inviata di Robb Stark, che non lascia partire. Deve assistere alla battaglia per raccontare a suo figlio che fine fanno i ribelli.',
    },
  },
  renBrienneBanner: {
    character: 'brienne-of-tarth',
    type: { en: 'Banner-bearer', it: 'Alfiere' },
    summary: {
      en: 'The Rainbow Guard who carries his banner to the parley and steps between the brothers.',
      it: 'La guardia arcobaleno che porta il suo stendardo al colloquio e si mette tra i fratelli.',
    },
  },
  renLorasVan: {
    character: 'loras-tyrell',
    type: { en: 'Favorite', it: 'Favorito' },
    summary: {
      en: 'The Knight of Flowers, to whom he gives the van of his army.',
      it: 'Il Cavaliere dei Fiori, a cui affida l’avanguardia del suo esercito.',
    },
  },
  renCatelynNoTalk: {
    character: 'catelyn-stark',
    type: { en: 'Envoy', it: 'Inviata' },
    summary: {
      en: 'Robb Stark’s envoy, who asked him to set aside the crown and call a Great Council. He told her the time for talk was done.',
      it: 'L’inviata di Robb Stark, che gli aveva chiesto di deporre la corona e convocare un Gran Consiglio. Lui le ha detto che il tempo delle parole era finito.',
    },
  },
  renBrienneArming: {
    character: 'brienne-of-tarth',
    type: { en: 'Kingsguard', it: 'Guardia reale' },
    summary: {
      en: 'The guard who was arming him when a shadow cut his throat, and who caught him as he fell.',
      it: 'La guardia che lo stava armando quando un’ombra gli ha tagliato la gola, e che lo ha sorretto mentre cadeva.',
    },
  },
  renLorasPray: {
    character: 'loras-tyrell',
    type: { en: 'Companion', it: 'Compagno' },
    summary: {
      en: 'The Knight of Flowers, whom he asked to stay and pray with him before the battle.',
      it: 'Il Cavaliere dei Fiori, a cui ha chiesto di restare a pregare con lui prima della battaglia.',
    },
  },

  // Loras, the show
  lorRenlyHeir: {
    character: 'renly-baratheon',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'The king, his lover. Loras turns him away and reminds him that he needs an heir.',
      it: 'Il re, suo amante. Loras lo respinge e gli ricorda che ha bisogno di un erede.',
    },
  },
  lorBrienneMelee: {
    character: 'brienne-of-tarth',
    type: { en: 'Conqueror', it: 'Vincitrice' },
    summary: {
      en: 'The woman who defeats him in the melee and joins the king’s guard.',
      it: 'La donna che lo sconfigge nella mischia ed entra nella guardia del re.',
    },
  },
  lorMargaeryFetch: {
    character: 'margaery-tyrell',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, the queen, whom he goes to fetch for Renly.',
      it: 'Sua sorella, la regina, che va a chiamare per Renly.',
    },
  },
  lorRenlyDeadShow: {
    character: 'renly-baratheon',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'The king, his lover, killed in his tent.',
      it: 'Il re, suo amante, ucciso nella sua tenda.',
    },
  },
  lorPetyr: {
    character: 'petyr-baelish',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'Lord Baelish, who travels with the Tyrells. Asked what he wants most, Loras answers revenge, and Petyr tells him to be smart about it.',
      it: 'Lord Baelish, che viaggia con i Tyrell. Alla domanda su cosa voglia di più, Loras risponde vendetta, e Petyr gli dice di essere astuto.',
    },
  },
  lorMargaeryWidow: {
    character: 'margaery-tyrell',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, now a widow. The Tyrell host rides for Highgarden with her.',
      it: 'Sua sorella, ora vedova. L’esercito dei Tyrell cavalca con lei verso Alto Giardino.',
    },
  },
  lorRenlyArmor: {
    character: 'renly-baratheon',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'The king, his lover, whose armor he wears to lead the charge at the Blackwater.',
      it: 'Il re, suo amante, di cui indossa l’armatura per guidare la carica alle Acque Nere.',
    },
  },
  lorTywin: {
    character: 'tywin-lannister',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'The lord of Casterly Rock, whose host he joins in the charge that breaks Stannis’s army.',
      it: 'Il signore di Castel Granito, il cui esercito affianca nella carica che spezza quello di Stannis.',
    },
  },
  lorMargaeryHand: {
    character: 'margaery-tyrell',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, whose hand he asks of the king.',
      it: 'Sua sorella, di cui chiede la mano al re.',
    },
  },
  lorJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king he asks to wed his sister, to unite their houses.',
      it: 'Il re a cui chiede di sposare sua sorella, per unire le loro casate.',
    },
  },
  // Loras, the books
  lorRenlyKing: {
    character: 'renly-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king he serves, who favors him and shares most of his jests and confidences at the feast.',
      it: 'Il re che serve, che lo predilige e al banchetto condivide con lui gran parte delle sue battute e confidenze.',
    },
  },
  lorBrienneYield: {
    character: 'brienne-of-tarth',
    type: { en: 'Conqueror', it: 'Vincitrice' },
    summary: {
      en: 'The champion who beats him in the final duel, opening his visor with a dirk to make him yield.',
      it: 'La campionessa che lo batte nel duello finale, aprendogli la visiera con un pugnale per costringerlo ad arrendersi.',
    },
  },
  lorRenlyDeadBook: {
    character: 'renly-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king he served, killed in his tent the night before the battle.',
      it: 'Il re che serviva, ucciso nella sua tenda la notte prima della battaglia.',
    },
  },
  lorMace: {
    character: 'mace-tyrell',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the lord of Highgarden, who stands beside him before the king and takes a seat on the small council.',
      it: 'Suo padre, il signore di Alto Giardino, che gli sta accanto davanti al re e ottiene un seggio nel concilio ristretto.',
    },
  },
  lorJoffreyBook: {
    character: 'joffrey-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king who names him to the Kingsguard.',
      it: 'Il re che lo nomina nella Guardia reale.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * Stage 3's Essos cards for the season-1 cast (#1650): season 3 and A Storm
 * of Swords through chapter 52, episodes 21 to 30 and chapters 144 to 196.
 * The new characters' own cards are in `season-3.relationships.ts`.
 */
const essos3 = {
  // Daenerys, the show
  daeBarristanSaves: {
    character: 'barristan-selmy',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'A hooded stranger who saves her from a manticore in Astapor. Jorah knows him: Ser Barristan Selmy, once of Robert’s Kingsguard, who kneels and asks to serve in her Queensguard.',
      it: 'Uno sconosciuto incappucciato che ad Astapor la salva da una manticora. Jorah lo riconosce: è ser Barristan Selmy, un tempo nella Guardia reale di Robert, che si inginocchia e chiede di servire nella sua Guardia della regina.',
    },
  },
  daeJorahArmy: {
    character: 'jorah-mormont',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'Her knight. At Astapor he urges her to buy the Unsullied, the army she needs to take back Westeros.',
      it: 'Il suo cavaliere. Ad Astapor la spinge a comprare gli Immacolati, l’esercito che le serve per riprendersi Westeros.',
    },
  },
  daeMissandeiGift: {
    character: 'missandei',
    type: { en: 'Interpreter', it: 'Interprete' },
    summary: {
      en: 'The slaver’s interpreter, who softens his insults. Daenerys asks for her as a gift to seal the deal, and takes her into her service.',
      it: 'L’interprete dello schiavista, che ne addolcisce gli insulti. Daenerys la chiede in dono a suggello del patto e la prende al suo servizio.',
    },
  },
  daeJorahRebuked: {
    character: 'jorah-mormont',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'Her knight, who argues for the Unsullied but objects in front of the masters when she trades a dragon for them. She tells him never to question her in public again.',
      it: 'Il suo cavaliere, che è favorevole agli Immacolati ma protesta davanti ai padroni quando lei li paga con un drago. Lei gli dice di non contraddirla mai più in pubblico.',
    },
  },
  daeBarristanRebuked: {
    character: 'barristan-selmy',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'The old knight now in her service. He calls a slave army dishonourable and objects in front of the masters when she trades a dragon for it. She tells him never to question her in public again.',
      it: 'Il vecchio cavaliere ora al suo servizio. Considera disonorevole un esercito di schiavi e protesta davanti ai padroni quando lei lo paga con un drago. Lei gli dice di non contraddirla mai più in pubblico.',
    },
  },
  daeGreyWorm: {
    character: 'grey-worm',
    type: { en: 'Unsullied commander', it: 'Comandante degli Immacolati' },
    summary: {
      en: 'The man the freed Unsullied choose to lead them. She tells them to take new names, and he keeps his, the one he had when she set him free.',
      it: 'L’uomo che gli Immacolati liberati scelgono come capo. Lei dice loro di prendere nomi nuovi, e lui tiene il suo, quello che aveva quando lei lo ha liberato.',
    },
  },
  daeMissandeiAide: {
    character: 'missandei',
    type: { en: 'Interpreter', it: 'Interprete' },
    summary: {
      en: 'Her interpreter and aide, who explains to her the names the masters gave the Unsullied.',
      it: 'La sua interprete e assistente, che le spiega i nomi dati dai padroni agli Immacolati.',
    },
  },
  daeDaarioOath: {
    character: 'daario-naharis',
    type: { en: 'Sworn sword', it: 'Spada giurata' },
    summary: {
      en: 'A sellsword of the Second Sons who comes to the parley, then slips into her tent with his captains’ heads and swears her his sword, his men and his heart.',
      it: 'Un mercenario dei Secondi Figli che partecipa alla trattativa, poi entra di nascosto nella sua tenda con le teste dei suoi capitani e le giura la sua spada, i suoi uomini e il suo cuore.',
    },
  },
  daeMeroDead: {
    character: 'mero',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The captain of the Second Sons, who mocked her at the parley; she told Barristan to kill him first. Daario brought her his head.',
      it: 'Il capitano dei Secondi Figli, che l’ha derisa alla trattativa; lei ha detto a Barristan di ucciderlo per primo. Daario le ha portato la sua testa.',
    },
  },
  daeMissandeiTongues: {
    character: 'missandei',
    type: { en: 'Interpreter', it: 'Interprete' },
    summary: {
      en: 'Her interpreter, who speaks nineteen languages and corrects her Dothraki.',
      it: 'La sua interprete, che parla diciannove lingue e le corregge il dothraki.',
    },
  },
  daeBarristanMero: {
    character: 'barristan-selmy',
    type: { en: 'Queensguard', it: 'Guardia della regina' },
    summary: {
      en: 'Her old knight. She tells him that if it comes to battle with the Second Sons, he is to kill Mero first.',
      it: 'Il suo vecchio cavaliere. Gli dice che, se si arriverà a combattere contro i Secondi Figli, dovrà uccidere Mero per primo.',
    },
  },
  // Daenerys, the books
  daeJorahKiss: {
    character: 'jorah-mormont',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'Her knight. At sea he urges her to buy Unsullied at Astapor and warns her not to trust Belwas, Arstan or Illyrio. Then he kisses her, and she tells him he should not have.',
      it: 'Il suo cavaliere. In mare la spinge a comprare Immacolati ad Astapor e la avverte di non fidarsi di Belwas, di Arstan né di Illyrio. Poi la bacia, e lei gli dice che non avrebbe dovuto.',
    },
  },
  daeArstanRhaegar: {
    character: 'arstan-whitebeard',
    type: { en: 'Squire', it: 'Scudiero' },
    summary: {
      en: 'Belwas’s old squire. He served in her father’s time, and he tells her about her brother Rhaegar. Jorah warns her he is more than he seems.',
      it: 'Il vecchio scudiero di Belwas. Ha servito ai tempi di suo padre, e le parla di suo fratello Rhaegar. Jorah la avverte che è più di quel che sembra.',
    },
  },
  daeDrogonDracarys: {
    character: 'drogon',
    type: { en: 'Dragon', it: 'Drago' },
    summary: {
      en: 'The black dragon she hatched in Drogo’s pyre. Aboard ship she teaches him and his brothers to breathe fire at a word.',
      it: 'Il drago nero che ha fatto schiudere nella pira di Drogo. A bordo insegna a lui e ai suoi fratelli a sputare fuoco a un suo comando.',
    },
  },
  daeIllyrioShips: {
    character: 'illyrio-mopatis',
    type: { en: 'Patron', it: 'Protettore' },
    summary: {
      en: 'The magister of Pentos whose three ships carry her away from Qarth. Jorah warns her not to trust him.',
      it: 'Il magistro di Pentos sulle cui tre navi lascia Qarth. Jorah la avverte di non fidarsi di lui.',
    },
  },
  daeMissandeiFreed: {
    character: 'missandei',
    type: { en: 'Interpreter', it: 'Interprete' },
    summary: {
      en: 'Kraznys’s slave interpreter, who passes on his words without knowing Daenerys understands his insults. Daenerys frees her and takes her into her service.',
      it: 'La schiava interprete di Kraznys, che riferisce le sue parole senza sapere che Daenerys ne capisce gli insulti. Daenerys la libera e la prende al suo servizio.',
    },
  },
  daeKraznysBurned: {
    character: 'kraznys-mo-nakloz',
    type: { en: 'Slaver', it: 'Schiavista' },
    summary: {
      en: 'The Good Master who sells her every Unsullied for a dragon, insulting her in Valyrian all the while. At the plaza she sets the dragon on him and he burns.',
      it: 'Il Buon Padrone che le vende tutti gli Immacolati in cambio di un drago, insultandola in valyriano per tutto il tempo. Nella piazza lei gli scatena contro il drago, e lui brucia.',
    },
  },
  daeDrogonTraded: {
    character: 'drogon',
    type: { en: 'Dragon', it: 'Drago' },
    summary: {
      en: 'The black dragon she trades for the Unsullied. At the plaza he will not obey Kraznys, and burns him at her word.',
      it: 'Il drago nero che cede in cambio degli Immacolati. Nella piazza non obbedisce a Kraznys e, a un suo ordine, lo brucia.',
    },
  },
  daeJorahUnsullied: {
    character: 'jorah-mormont',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'Her knight, who urges her to buy the Unsullied: they do not rape or put a taken town to the sword unless ordered to.',
      it: 'Il suo cavaliere, che la spinge a comprare gli Immacolati: non stuprano e non passano a fil di spada una città presa, se non per ordine.',
    },
  },
  daeArstanSlaves: {
    character: 'arstan-whitebeard',
    type: { en: 'Squire', it: 'Scudiero' },
    summary: {
      en: 'Belwas’s old squire, who argues that a slave army would turn Westeros against her and urges sellswords instead.',
      it: 'Il vecchio scudiero di Belwas, secondo cui un esercito di schiavi le metterebbe contro Westeros, e che le consiglia invece dei mercenari.',
    },
  },
  daeDaarioStormcrows: {
    character: 'daario-naharis',
    type: { en: 'Sworn sword', it: 'Spada giurata' },
    summary: {
      en: 'A Tyroshi captain of the Stormcrows who smiles at her at the parley, then brings her the other two captains’ heads and swears his company to her.',
      it: 'Un capitano tyroshi dei Corvi della Tempesta che le sorride alla trattativa, poi le porta le teste degli altri due capitani e le giura la fedeltà della sua compagnia.',
    },
  },
  daeJorahDaario: {
    character: 'jorah-mormont',
    type: { en: 'Adviser', it: 'Consigliere' },
    summary: {
      en: 'Her knight, who warns her not to trust the Tyroshi sellsword.',
      it: 'Il suo cavaliere, che la avverte di non fidarsi del mercenario tyroshi.',
    },
  },
  daeArstanShadow: {
    character: 'arstan-whitebeard',
    type: { en: 'Squire', it: 'Scudiero' },
    summary: {
      en: 'Belwas’s old squire. During the night attack on Yunkai he tells her that grief hung over Rhaegar all his life.',
      it: 'Il vecchio scudiero di Belwas. Durante l’attacco notturno a Yunkai le racconta che il dolore ha pesato su Rhaegar per tutta la vita.',
    },
  },
  daeGreyWormOfficer: {
    character: 'grey-worm',
    type: { en: 'Unsullied officer', it: 'Ufficiale degli Immacolati' },
    summary: {
      en: 'One of the officers the freed Unsullied choose. When she ends their daily slave names, he keeps the one he had the day she freed him.',
      it: 'Uno degli ufficiali scelti dagli Immacolati liberati. Quando lei abolisce i loro nomi da schiavi quotidiani, lui tiene quello che aveva il giorno in cui lei lo ha liberato.',
    },
  },
  daeGrazdan: {
    character: 'grazdan-mo-eraz',
    type: { en: 'Envoy', it: 'Inviato' },
    summary: {
      en: 'The Wise Masters’ envoy, who brings her gold to leave Yunkai alone. She sends him back with it and a warning that she will attack in three days.',
      it: 'L’inviato dei Saggi Padroni, che le porta oro perché lasci in pace Yunkai. Lei lo rimanda indietro con l’oro e con l’avvertimento che attaccherà fra tre giorni.',
    },
  },

  // Jorah, the show
  jorDaenerysAstapor: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen he serves. He urges her to buy the Unsullied, and in the streets of Astapor a stranger saves her from a manticore.',
      it: 'La regina che serve. La spinge a comprare gli Immacolati, e per le strade di Astapor uno sconosciuto la salva da una manticora.',
    },
  },
  jorBarristanKnown: {
    character: 'barristan-selmy',
    type: { en: 'Old acquaintance', it: 'Vecchia conoscenza' },
    summary: {
      en: 'The stranger who saves Daenerys from the manticore. Jorah knows him and names him to her: Ser Barristan Selmy, once Lord Commander of Robert’s Kingsguard.',
      it: 'Lo sconosciuto che salva Daenerys dalla manticora. Jorah lo riconosce e le dice chi è: ser Barristan Selmy, un tempo Lord Comandante della Guardia reale di Robert.',
    },
  },
  jorDaenerysRebuke: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen he serves. When he objects in public to her trade of a dragon for the Unsullied, she tells him never to question her in public again.',
      it: 'La regina che serve. Quando lui protesta in pubblico perché lei paga gli Immacolati con un drago, lei gli dice di non contraddirla mai più in pubblico.',
    },
  },
  jorBarristanRide: {
    character: 'barristan-selmy',
    type: { en: 'Fellow knight', it: 'Altro cavaliere' },
    summary: {
      en: 'Daenerys’s other knight. On the march from Astapor they talk about the Greyjoy Rebellion and Robert. Jorah learns, relieved, that Robert kept Barristan out of the small council, where Jorah’s old reports on Daenerys were read.',
      it: 'L’altro cavaliere di Daenerys. Durante la marcia da Astapor parlano della ribellione dei Greyjoy e di Robert. Jorah scopre, sollevato, che Robert teneva Barristan fuori dal concilio ristretto, dove si leggevano i suoi vecchi rapporti su Daenerys.',
    },
  },
  jorDaenerysYunkai: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen he serves. He comes back from Yunkai with Grey Worm to tell her the city is taken.',
      it: 'La regina che serve. Torna da Yunkai con Verme Grigio per dirle che la città è presa.',
    },
  },
  jorDaario: {
    character: 'daario-naharis',
    type: { en: 'Doubtful ally', it: 'Alleato dubbio' },
    summary: {
      en: 'The sellsword who has come over to Daenerys. Jorah doubts his plan and his loyalty, but goes into Yunkai with him by night.',
      it: 'Il mercenario passato dalla parte di Daenerys. Jorah dubita del suo piano e della sua lealtà, ma entra di notte a Yunkai con lui.',
    },
  },
  jorGreyWorm: {
    character: 'grey-worm',
    type: { en: 'Comrade in arms', it: 'Compagno d’armi' },
    summary: {
      en: 'The Unsullied commander, who goes into Yunkai with him and Daario.',
      it: 'Il comandante degli Immacolati, che entra a Yunkai con lui e Daario.',
    },
  },
  jorBarristanStay: {
    character: 'barristan-selmy',
    type: { en: 'Fellow knight', it: 'Altro cavaliere' },
    summary: {
      en: 'Daenerys’s other knight. When he asks to join the attack, Jorah reminds him that a Queensguard’s place is at the queen’s side.',
      it: 'L’altro cavaliere di Daenerys. Quando chiede di unirsi all’attacco, Jorah gli ricorda che il posto di una Guardia della regina è al fianco della regina.',
    },
  },
  // Jorah, the books
  jorDaenerysKiss: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen he serves. At sea he urges her to buy an army of Unsullied at Astapor, and kisses her; she tells him he should not have.',
      it: 'La regina che serve. In mare la spinge a comprare un esercito di Immacolati ad Astapor, e la bacia; lei gli dice che non avrebbe dovuto.',
    },
  },
  jorArstanWary: {
    character: 'arstan-whitebeard',
    type: { en: 'Suspect', it: 'Sospettato' },
    summary: {
      en: 'Belwas’s old squire. Jorah tells Daenerys he is more than he seems and not to trust him.',
      it: 'Il vecchio scudiero di Belwas. Jorah dice a Daenerys che è più di quel che sembra e che non deve fidarsi di lui.',
    },
  },
  jorBelwasWary: {
    character: 'strong-belwas',
    type: { en: 'Suspect', it: 'Sospettato' },
    summary: {
      en: 'The eunuch fighter Illyrio sent to Qarth. Jorah warns Daenerys not to trust him.',
      it: 'Il combattente eunuco che Illyrio ha mandato a Qarth. Jorah avverte Daenerys di non fidarsi di lui.',
    },
  },
  jorIllyrioWary: {
    character: 'illyrio-mopatis',
    type: { en: 'Suspect', it: 'Sospettato' },
    summary: {
      en: 'The magister whose ships carry Daenerys from Qarth. Jorah warns her not to trust him, and to sail for Astapor instead of Pentos.',
      it: 'Il magistro sulle cui navi Daenerys lascia Qarth. Jorah la avverte di non fidarsi di lui, e di fare vela per Astapor invece che per Pentos.',
    },
  },
  jorDaenerysDaario: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen he serves. At Yunkai he warns her not to trust the Tyroshi sellsword who comes over to her.',
      it: 'La regina che serve. A Yunkai la avverte di non fidarsi del mercenario tyroshi che passa dalla sua parte.',
    },
  },
  jorDaarioWary: {
    character: 'daario-naharis',
    type: { en: 'Suspect', it: 'Sospettato' },
    summary: {
      en: 'A Tyroshi captain of the Stormcrows who brings Daenerys his fellow captains’ heads. Jorah tells her not to trust him.',
      it: 'Un capitano tyroshi dei Corvi della Tempesta che porta a Daenerys le teste degli altri capitani. Jorah le dice di non fidarsi di lui.',
    },
  },
  jorGreyWormPupil: {
    character: 'grey-worm',
    type: { en: 'Pupil', it: 'Allievo' },
    summary: {
      en: 'An officer of the freed Unsullied, whom Jorah teaches to command.',
      it: 'Un ufficiale degli Immacolati liberati, a cui Jorah insegna a comandare.',
    },
  },

  // Barristan, the show. The books bring him to Daenerys as Arstan
  // Whitebeard, his own record (owner, 2026-11-22).
  barDaenerysSworn: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The last Targaryen, whom he finds in Astapor. He saves her from a manticore and kneels to ask a place in her Queensguard, to make amends for failing her family.',
      it: 'L’ultima dei Targaryen, che trova ad Astapor. La salva da una manticora e si inginocchia a chiederle un posto nella sua Guardia della regina, per rimediare all’aver fallito con la sua famiglia.',
    },
  },
  barJorahKnown: {
    character: 'jorah-mormont',
    type: { en: 'Old acquaintance', it: 'Vecchia conoscenza' },
    summary: {
      en: 'The exiled knight at Daenerys’s side, who recognises him and tells her who he is.',
      it: 'Il cavaliere esiliato al fianco di Daenerys, che lo riconosce e le dice chi è.',
    },
  },
  barDaenerysRebuke: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen he serves. He calls a slave army dishonourable and objects in public when she trades a dragon for the Unsullied; she tells him never to question her in public again.',
      it: 'La regina che serve. Considera disonorevole un esercito di schiavi e protesta in pubblico quando lei paga gli Immacolati con un drago; lei gli dice di non contraddirla mai più in pubblico.',
    },
  },
  barJorahRival: {
    character: 'jorah-mormont',
    type: { en: 'Rival adviser', it: 'Consigliere rivale' },
    summary: {
      en: 'Daenerys’s other knight, who argues for buying the Unsullied while Barristan argues against.',
      it: 'L’altro cavaliere di Daenerys, favorevole a comprare gli Immacolati mentre Barristan è contrario.',
    },
  },
  barDaenerysMero: {
    character: 'daenerys-targaryen',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen he serves. After the parley outside Yunkai she tells him to kill Mero first if it comes to battle, and he says he will be glad to.',
      it: 'La regina che serve. Dopo la trattativa fuori Yunkai gli dice di uccidere Mero per primo, se si arriverà a combattere, e lui risponde che lo farà volentieri.',
    },
  },
  barMeroDead: {
    character: 'mero',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The captain of the Second Sons, who insulted the queen at the parley in her tent. Daario brought her his head that night.',
      it: 'Il capitano dei Secondi Figli, che alla trattativa nella tenda ha insultato la regina. Quella notte Daario le ha portato la sua testa.',
    },
  },
  barDaario: {
    character: 'daario-naharis',
    type: { en: 'Sellsword', it: 'Mercenario' },
    summary: {
      en: 'A sellsword of the Second Sons who comes to the queen’s tent with his captains, and swears himself to her that night.',
      it: 'Un mercenario dei Secondi Figli che viene nella tenda della regina con i suoi capitani, e che quella notte le giura fedeltà.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * Stage 3's Robb's war and Riverlands cards for the season-1 cast (#1653):
 * season 3 and A Storm of Swords through chapter 52. The show: episodes 22
 * to 30. The books: Catelyn I to VII (chapters 146, 158, 164, 179, 189, 193
 * and 195). Robb and Catelyn die at the Red Wedding in both media, episode
 * 29 and chapter 195; from there every card that names them, or another
 * of the dead, is in the past tense. The new characters' own cards are in
 * `season-3.relationships.ts`.
 */
const riverlands3 = {
  // Robb, the show
  rbTalisa22: {
    character: 'talisa-maegyr',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His queen, at his side at Harrenhal. Lord Karstark tells Robb he lost the war the day he married her.',
      it: 'La sua regina, al suo fianco a Harrenhal. Lord Karstark dice a Robb che ha perso la guerra il giorno in cui l’ha sposata.',
    },
  },
  rbCatelyn22: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, still held under guard for freeing Jaime. He tells her that her father has died and that Winterfell has been burned.',
      it: 'Sua madre, ancora sotto custodia per aver liberato Jaime. Robb le dice che il nonno è morto e che Grande Inverno è stata data alle fiamme.',
    },
  },
  rbRoose22: {
    character: 'roose-bolton',
    type: { en: 'Bannerman', it: 'Alfiere' },
    summary: {
      en: 'The lord of the Dreadfort, who brings him the two letters. Robb leaves him in command at Harrenhal and marches with the rest of his host to his mother’s family.',
      it: 'Il signore di Forte Terrore, che gli porta le due lettere. Robb gli lascia il comando di Harrenhal e marcia con il resto dell’esercito verso la famiglia di sua madre.',
    },
  },
  rbRickard22: {
    character: 'rickard-karstark',
    type: { en: 'Bannerman', it: 'Alfiere' },
    summary: {
      en: 'The Karstark lord, who calls the march to his mother’s family a waste of time. He still believes in revenge, he says, but Robb lost the war the day he married Talisa.',
      it: 'Il lord dei Karstark, che chiama la marcia verso la famiglia di sua madre una perdita di tempo. Dice di credere ancora nella vendetta, ma che Robb ha perso la guerra il giorno in cui ha sposato Talisa.',
    },
  },
  rbBran22: {
    character: 'bran-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother. The ironborn have burned Winterfell and no one has seen Bran or Rickon since. Robb hopes they are still alive.',
      it: 'Suo fratello. Gli uomini di ferro hanno bruciato Grande Inverno e da allora nessuno ha più visto Bran né Rickon. Robb spera che siano ancora vivi.',
    },
  },
  rbEdmure23: {
    character: 'edmure-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, the new lord of Riverrun. Edmure boasts of his victory over the Lannisters, but by attacking he wrecked Robb’s plan, and two young Lannister hostages are no use to him.',
      it: 'Suo zio, il nuovo signore di Delta delle Acque. Edmure si vanta della sua vittoria sui Lannister, ma attaccando ha rovinato il piano di Robb, e due giovani ostaggi Lannister non gli servono a niente.',
    },
  },
  rbBrynden23: {
    character: 'brynden-tully',
    type: { en: 'Great-uncle', it: 'Prozio' },
    summary: {
      en: 'Catelyn’s uncle, the Blackfish. He launches Lord Hoster’s funeral boat with Robb, and is as angry with Edmure as Robb is.',
      it: 'Lo zio di Catelyn, il Pesce Nero. Vara con Robb la barca funebre di lord Hoster, ed è arrabbiato con Edmure quanto lui.',
    },
  },
  rbHoster23: {
    character: 'hoster-tully',
    type: { en: 'Grandfather', it: 'Nonno' },
    summary: {
      en: 'His mother’s father, the lord of Riverrun, who died after a long illness. Robb helps launch his funeral boat on the river.',
      it: 'Il padre di sua madre, il signore di Delta delle Acque, morto dopo una lunga malattia. Robb aiuta a varare la sua barca funebre sul fiume.',
    },
  },
  rbCatelyn23: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who watches her father’s funeral from the bank and mourns him in her old rooms at Riverrun.',
      it: 'Sua madre, che assiste dalla riva al funerale del padre e lo piange nelle sue vecchie stanze a Delta delle Acque.',
    },
  },
  rbTalisa23: {
    character: 'talisa-maegyr',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His queen, who comes with him to Riverrun and goes down to the cells to tend the Lannister prisoners.',
      it: 'La sua regina, che lo segue a Delta delle Acque e scende nelle celle a curare i prigionieri Lannister.',
    },
  },
  rbRickard25: {
    character: 'rickard-karstark',
    type: { en: 'Traitor', it: 'Traditore' },
    summary: {
      en: 'The Karstark lord who murdered the two Lannister boys to avenge his sons, and called Robb the King Who Lost the North. Robb beheaded him himself, in the rain.',
      it: 'Il lord dei Karstark che ha ucciso i due ragazzi Lannister per vendicare i suoi figli, e ha chiamato Robb il Re che ha perso il Nord. Robb lo ha decapitato con le proprie mani, sotto la pioggia.',
    },
  },
  rbWillem25: {
    character: 'willem-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'One of the two Lannister squires held at Riverrun, killed in his cell by Lord Karstark’s men. Robb refused to hide the murder.',
      it: 'Uno dei due scudieri Lannister tenuti prigionieri a Delta delle Acque, ucciso nella sua cella dagli uomini di lord Karstark. Robb si è rifiutato di nascondere l’omicidio.',
    },
  },
  rbMartyn25: {
    character: 'martyn-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'The other Lannister squire, stabbed by Lord Karstark himself. Robb saw only a boy who had nothing to do with the death of the Karstark sons.',
      it: 'L’altro scudiero Lannister, pugnalato dallo stesso lord Karstark. Per Robb era solo un ragazzo, che con la morte dei figli di Karstark non aveva niente a che fare.',
    },
  },
  rbTalisa25: {
    character: 'talisa-maegyr',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His queen, who warns him that the Karstark men will leave if he executes their lord. They do, and he admits to her she was right; over the map with her he settles on Casterly Rock.',
      it: 'La sua regina, che lo avverte che gli uomini dei Karstark se ne andranno se giustizierà il loro lord. Così avviene, e lui le ammette che aveva ragione; studiando la mappa con lei, sceglie Castel Granito.',
    },
  },
  rbCatelyn25: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who urges him to keep Lord Karstark as a hostage rather than execute him. He does not listen.',
      it: 'Sua madre, che lo esorta a tenere lord Karstark come ostaggio invece di giustiziarlo. Robb non la ascolta.',
    },
  },
  rbWalder26: {
    character: 'walder-frey',
    type: { en: 'Ally to win back', it: 'Alleato da riconquistare' },
    summary: {
      en: 'The lord of the Twins, whose men left when Robb broke his vow to marry a Frey. To march on Casterly Rock he needs them, and Walder’s price is an apology, Harrenhal and a marriage.',
      it: 'Il signore delle Torri Gemelle, i cui uomini se ne sono andati quando Robb ha mancato alla promessa di sposare una Frey. Per marciare su Castel Granito gli servono, e il prezzo di Walder sono delle scuse, Harrenhal e un matrimonio.',
    },
  },
  rbEdmure26: {
    character: 'edmure-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, whom Lord Walder wants for one of his daughters. Edmure balks at a bride he has never met, but gives in.',
      it: 'Suo zio, che lord Walder vuole per una delle sue figlie. Edmure recalcitra davanti a una sposa che non ha mai visto, ma alla fine cede.',
    },
  },
  rbRoslin26: {
    character: 'roslin-frey',
    type: { en: 'Uncle’s bride', it: 'Sposa dello zio' },
    summary: {
      en: 'The daughter of Lord Walder whom Edmure must marry to win back the Freys.',
      it: 'La figlia di lord Walder che Edmure deve sposare per riconquistare i Frey.',
    },
  },
  rbTalisa27: {
    character: 'talisa-maegyr',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His queen. In their tent on the road to the Twins she tells him she is carrying his child, and he is glad.',
      it: 'La sua regina. Nella tenda, sulla strada per le Torri Gemelle, gli dice che aspetta un figlio da lui, e Robb ne è felice.',
    },
  },
  rbCatelyn27: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who warns that Lord Walder will take the delay in the rain as an insult. He is getting a wedding, she says, but not the one he wanted.',
      it: 'Sua madre, che avverte che lord Walder prenderà come un insulto il ritardo dovuto alla pioggia. Avrà un matrimonio, dice, ma non quello che voleva.',
    },
  },
  rbEdmure27: {
    character: 'edmure-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, riding to the Twins to marry. Robb calls him the best match House Frey has ever been offered.',
      it: 'Suo zio, in viaggio verso le Torri Gemelle per sposarsi. Robb lo definisce il miglior partito che sia mai stato offerto a Casa Frey.',
    },
  },
  rbTalisa29: {
    character: 'talisa-maegyr',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His queen, who told him at the wedding feast that if the child was a boy they should call him Eddard. She was stabbed in the belly, and died in his arms.',
      it: 'La sua regina, che alla festa nuziale gli aveva detto che, se fosse stato un maschio, lo avrebbero chiamato Eddard. È stata pugnalata al ventre, ed è morta fra le sue braccia.',
    },
  },
  rbCatelyn29: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who saw the trap too late and begged Lord Walder for his life. Robb was killed in front of her, and she after him.',
      it: 'Sua madre, che si è accorta troppo tardi della trappola e ha implorato lord Walder di risparmiarlo. Robb è stato ucciso davanti a lei, e lei subito dopo.',
    },
  },
  rbWalder29: {
    character: 'walder-frey',
    type: { en: 'Betrayer', it: 'Traditore' },
    summary: {
      en: 'The lord of the Twins, who insulted him and his queen, accepted his apology and gave him guest welcome. At the wedding feast he gave the signal for the slaughter, and mocked Robb as he died.',
      it: 'Il signore delle Torri Gemelle, che ha insultato lui e la regina, ha accettato le sue scuse e lo ha accolto come ospite. Alla festa nuziale ha dato il segnale del massacro, e si è fatto beffe di Robb mentre moriva.',
    },
  },
  rbRoose29: {
    character: 'roose-bolton',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'His bannerman, who sat at the feast with mail under his clothes. He stabbed Robb through the heart in the Lannisters’ name.',
      it: 'Il suo alfiere, che sedeva al banchetto con la cotta di maglia sotto i vestiti. Ha trafitto Robb al cuore in nome dei Lannister.',
    },
  },
  rbEdmure29: {
    character: 'edmure-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, whose wedding brought Robb to the Twins. Edmure was carried off to the bedding before the slaughter began.',
      it: 'Suo zio, le cui nozze avevano portato Robb alle Torri Gemelle. Edmure era stato portato via per la cerimonia della consumazione prima che cominciasse il massacro.',
    },
  },
  // Robb, the books
  rbJeyne158: {
    character: 'jeyne-westerling',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'The daughter of the Crag, who nursed his wound and comforted him the night he heard his brothers had been killed. He married her the next morning, for her honour, and so broke his vow to the Freys.',
      it: 'La figlia del Crag, che ha curato la sua ferita e lo ha consolato la notte in cui ha saputo che i suoi fratelli erano stati uccisi. Lui l’ha sposata la mattina dopo, per il suo onore, e così ha infranto la promessa fatta ai Frey.',
    },
  },
  rbCatelyn158: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, confined at Riverrun for freeing Jaime. Robb greets her gently before the court, and excuses what she did as love.',
      it: 'Sua madre, confinata a Delta delle Acque per aver liberato Jaime. Robb la accoglie con dolcezza davanti alla corte, e scusa il suo gesto come un atto d’amore.',
    },
  },
  rbEdmure158: {
    character: 'edmure-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, whom he praises in the hall for his victory at the fords. In private Robb and the Blackfish tell Edmure that the victory ruined their plan.',
      it: 'Suo zio, che loda nella sala per la vittoria ai guadi. In privato Robb e il Pesce Nero gli dicono che quella vittoria ha rovinato il loro piano.',
    },
  },
  rbRickard158: {
    character: 'rickard-karstark',
    type: { en: 'Bannerman', it: 'Alfiere' },
    summary: {
      en: 'The Karstark lord, who cannot forgive Catelyn for freeing his sons’ killer, and storms out of the hall.',
      it: 'Il lord dei Karstark, che non perdona a Catelyn di aver liberato l’assassino dei suoi figli, ed esce furioso dalla sala.',
    },
  },
  rbWalder158: {
    character: 'walder-frey',
    type: { en: 'Ally lost', it: 'Alleato perduto' },
    summary: {
      en: 'The lord of the Twins, whose men went home when Robb married another. Robb must find something to soothe his pride.',
      it: 'Il signore delle Torri Gemelle, i cui uomini sono tornati a casa quando Robb ne ha sposata un’altra. Robb deve trovare qualcosa che plachi il suo orgoglio.',
    },
  },
  rbRickard164: {
    character: 'rickard-karstark',
    type: { en: 'Traitor', it: 'Traditore' },
    summary: {
      en: 'The Karstark lord who murdered two Lannister prisoners in their cells. Robb beheaded him himself in the godswood, and Lord Karstark called him a kinslayer.',
      it: 'Il lord dei Karstark che ha ucciso due prigionieri Lannister nelle loro celle. Robb lo ha decapitato con le proprie mani nel parco degli dèi, e lord Karstark lo ha chiamato assassino del suo sangue.',
    },
  },
  rbWillem164: {
    character: 'willem-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'A Lannister squire held at Riverrun, murdered in his cell by Lord Karstark’s men. His body was laid before Robb in the great hall.',
      it: 'Uno scudiero Lannister tenuto prigioniero a Delta delle Acque, ucciso nella sua cella dagli uomini di lord Karstark. Il suo corpo è stato deposto davanti a Robb nella sala grande.',
    },
  },
  rbEdmure164: {
    character: 'edmure-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, who urges him to keep Lord Karstark as a hostage and the murders secret. Robb will not.',
      it: 'Suo zio, che lo esorta a tenere lord Karstark come ostaggio e a mantenere segreti gli omicidi. Robb non vuole.',
    },
  },
  rbBrynden164: {
    character: 'brynden-tully',
    type: { en: 'Great-uncle', it: 'Prozio' },
    summary: {
      en: 'The Blackfish, who reports that the Karstark men have left to hunt Jaime, and rides out with a hundred men after them.',
      it: 'Il Pesce Nero, che gli riferisce che gli uomini dei Karstark sono partiti a caccia di Jaime, e li insegue con cento uomini.',
    },
  },
  rbCatelyn179: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother. He tells her that Sansa has been married to the Imp, and she begs him to make peace with the Lannisters. He will not hear of it.',
      it: 'Sua madre. Robb le dice che Sansa è stata data in sposa al Folletto, e lei lo supplica di fare pace con i Lannister. Lui non vuole sentirne parlare.',
    },
  },
  rbWalder179: {
    character: 'walder-frey',
    type: { en: 'Ally to win back', it: 'Alleato da riconquistare' },
    summary: {
      en: 'The lord of the Twins, who sends his terms: Robb must come and apologise in person, and Edmure must marry Roslin.',
      it: 'Il signore delle Torri Gemelle, che manda le sue condizioni: Robb deve andare a scusarsi di persona, ed Edmure deve sposare Roslin.',
    },
  },
  rbLothar179: {
    character: 'lothar-frey',
    type: { en: 'Envoy', it: 'Inviato' },
    summary: {
      en: 'Lord Walder’s son, whom Robb asks to help launch his grandfather’s funeral boat. He brings the terms, and the news of Winterfell.',
      it: 'Il figlio di lord Walder, a cui Robb chiede di aiutarlo a varare la barca funebre del nonno. Porta le condizioni, e le notizie di Grande Inverno.',
    },
  },
  rbEdmure179: {
    character: 'edmure-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, now lord of Riverrun, who balks at a wife chosen for him until the Blackfish reminds him of his blunder at the fords.',
      it: 'Suo zio, ora signore di Delta delle Acque, che recalcitra davanti a una moglie scelta da altri finché il Pesce Nero non gli ricorda il suo errore ai guadi.',
    },
  },
  rbHoster179: {
    character: 'hoster-tully',
    type: { en: 'Grandfather', it: 'Nonno' },
    summary: {
      en: 'His mother’s father, the lord of Riverrun, who died. Robb launched his funeral boat with the river lords.',
      it: 'Il padre di sua madre, il signore di Delta delle Acque, che è morto. Robb ha varato la sua barca funebre con i lord dei fiumi.',
    },
  },
  rbCatelyn189: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who cannot support his choice of heir. After the wedding he means to send her to Seagard, under Lord Mallister’s protection.',
      it: 'Sua madre, che non può appoggiare la sua scelta dell’erede. Dopo le nozze vuole mandarla a Seagard, sotto la protezione di lord Mallister.',
    },
  },
  rbJon189: {
    character: 'jon-snow',
    type: { en: 'Heir', it: 'Erede' },
    summary: {
      en: 'His half-brother on the Wall. If Robb dies without a child, he means to legitimise Jon and name him heir, and he has his lords seal the decree.',
      it: 'Il fratellastro sulla Barriera. Se Robb morirà senza figli, vuole legittimare Jon e nominarlo erede, e fa sigillare il decreto ai suoi lord.',
    },
  },
  rbJeyne189: {
    character: 'jeyne-westerling',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His queen, whom he leaves at Riverrun when he rides to the Twins.',
      it: 'La sua regina, che lascia a Delta delle Acque quando parte per le Torri Gemelle.',
    },
  },
  rbJason189: {
    character: 'jason-mallister',
    type: { en: 'Bannerman', it: 'Alfiere' },
    summary: {
      en: 'The lord of Seagard, who joins the host on the march and brings word that Balon Greyjoy is dead.',
      it: 'Il signore di Seagard, che raggiunge l’esercito durante la marcia e porta la notizia che Balon Greyjoy è morto.',
    },
  },
  rbGalbart189: {
    character: 'galbart-glover',
    type: { en: 'Bannerman', it: 'Alfiere' },
    summary: {
      en: 'A northern lord whom Robb sends through the marshes of the Neck with Lady Mormont, to find the crannogmen who will guide his attack.',
      it: 'Un lord del Nord che Robb manda tra le paludi dell’Incollatura con lady Mormont, a cercare gli uomini delle paludi che guideranno il suo attacco.',
    },
  },
  rbWalder193: {
    character: 'walder-frey',
    type: { en: 'Host', it: 'Ospite che accoglie' },
    summary: {
      en: 'The lord of the Twins, who greets him with veiled insults for his broken oath. Robb apologises, and Walder offers bread and salt.',
      it: 'Il signore delle Torri Gemelle, che lo accoglie con insulti velati per il giuramento infranto. Robb si scusa, e Walder offre pane e sale.',
    },
  },
  rbRoose193: {
    character: 'roose-bolton',
    type: { en: 'Bannerman', it: 'Alfiere' },
    summary: {
      en: 'The lord of the Dreadfort, who joins him at the Twins with news of Winterfell, and a strip of Theon’s skin. Robb lets Theon stay a prisoner at the Dreadfort.',
      it: 'Il signore di Forte Terrore, che lo raggiunge alle Torri Gemelle con notizie di Grande Inverno e un lembo della pelle di Theon. Robb lascia Theon prigioniero a Forte Terrore.',
    },
  },
  rbGreyWind193: {
    character: 'grey-wind',
    type: { en: 'Direwolf', it: 'Metalupo' },
    summary: {
      en: 'His direwolf, who growls at the Freys and will not go through the gatehouse. Robb leaves him outside with Ser Raynald.',
      it: 'Il suo metalupo, che ringhia ai Frey e non vuole passare dal corpo di guardia. Robb lo lascia fuori con ser Raynald.',
    },
  },
  rbRyman193: {
    character: 'ryman-frey',
    type: { en: 'Frey knight', it: 'Cavaliere Frey' },
    summary: {
      en: 'Lord Walder’s grandson, who meets the host on the road and is angry that Robb has not brought his queen.',
      it: 'Il nipote di lord Walder, che va incontro all’esercito sulla strada ed è irritato perché Robb non ha portato la regina.',
    },
  },
  rbCatelyn193: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who warns him again not to give offence, and asks for food as soon as they arrive, to make them guests.',
      it: 'Sua madre, che lo avverte di nuovo di non offendere nessuno, e appena arrivati chiede da mangiare, per renderli ospiti.',
    },
  },
  rbCatelyn195: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, who held a dagger to a Frey’s throat and begged Lord Walder to spare her son. She was killed after him.',
      it: 'Sua madre, che ha puntato un pugnale alla gola di un Frey e ha implorato lord Walder di risparmiare suo figlio. È stata uccisa dopo di lui.',
    },
  },
  rbWalder195: {
    character: 'walder-frey',
    type: { en: 'Betrayer', it: 'Traditore' },
    summary: {
      en: 'The lord of the Twins, who made him a guest at his table. When the slaughter began he watched from his seat and mocked the wounded king.',
      it: 'Il signore delle Torri Gemelle, che lo aveva accolto come ospite alla sua tavola. Quando è cominciato il massacro ha guardato dal suo seggio e si è fatto beffe del re ferito.',
    },
  },
  rbSmalljon195: {
    character: 'smalljon-umber',
    type: { en: 'Guard', it: 'Guardia' },
    summary: {
      en: 'The Greatjon’s son, who threw a table over Robb to shield him from the crossbows. He was killed in the hall.',
      it: 'Il figlio del Greatjon, che ha rovesciato un tavolo su Robb per ripararlo dalle balestre. È stato ucciso nella sala.',
    },
  },
  rbEdmure195: {
    character: 'edmure-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, who married Roslin Frey at the Twins, as Lord Walder demanded.',
      it: 'Suo zio, che ha sposato Roslin Frey alle Torri Gemelle, come pretendeva lord Walder.',
    },
  },
  rbJeyne195: {
    character: 'jeyne-westerling',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His queen, whom he left at Riverrun when he rode to the Twins.',
      it: 'La sua regina, che aveva lasciato a Delta delle Acque quando era partito per le Torri Gemelle.',
    },
  },

  // Catelyn, the show
  ctRobb22: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, who keeps her under guard at Harrenhal. He tells her that her father has died and that Winterfell has been burned.',
      it: 'Suo figlio, che la tiene sotto custodia a Harrenhal. Le dice che il padre di lei è morto e che Grande Inverno è stata data alle fiamme.',
    },
  },
  ctTalisa22: {
    character: 'talisa-maegyr',
    type: { en: 'Son’s wife', it: 'Moglie del figlio' },
    summary: {
      en: 'Robb’s queen, who offers to help with the prayer wheel she is making for her sons. To her Catelyn tells the story of Jon and the pox.',
      it: 'La regina di Robb, che si offre di aiutarla con la ruota di preghiera che sta facendo per i suoi figli. È a lei che Catelyn racconta la storia di Jon e del vaiolo.',
    },
  },
  ctJon22: {
    character: 'jon-snow',
    type: { en: 'Husband’s bastard', it: 'Bastardo del marito' },
    summary: {
      en: 'Eddard’s bastard. When he was a child with the pox she prayed for him to die, then for him to live, and promised the gods she would have him made a Stark and raise him as her own. She never kept the promise.',
      it: 'Il bastardo di Eddard. Quando da bambino aveva il vaiolo lei ha pregato che morisse, poi che vivesse, e ha promesso agli dèi che lo avrebbe fatto diventare uno Stark e lo avrebbe cresciuto come suo. Non ha mai mantenuto la promessa.',
    },
  },
  ctBran22: {
    character: 'bran-stark',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Her son, missing with Rickon since Winterfell burned. She was not there to protect them, and believes the gods are punishing her.',
      it: 'Suo figlio, disperso con Rickon da quando Grande Inverno è bruciata. Lei non era lì a proteggerli, e crede che gli dèi la stiano punendo.',
    },
  },
  ctHoster23: {
    character: 'hoster-tully',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, who died before she could see him again. She watches his funeral boat drift down the river.',
      it: 'Suo padre, morto prima che lei potesse rivederlo. Guarda la sua barca funebre allontanarsi lungo il fiume.',
    },
  },
  ctBrynden23: {
    character: 'brynden-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'Her uncle, who tells her he made peace with her father before he died, and urges her to be strong for Robb.',
      it: 'Suo zio, che le racconta di aver fatto pace con il padre di lei prima che morisse, e la esorta a essere forte per Robb.',
    },
  },
  ctEdmure23: {
    character: 'edmure-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her younger brother, now lord of Riverrun, who misses their father’s funeral boat with three burning arrows.',
      it: 'Il fratello minore, ora signore di Delta delle Acque, che manca per tre volte la barca funebre del padre con le frecce infuocate.',
    },
  },
  ctRobb23: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, who has brought his host to Riverrun for her father’s funeral.',
      it: 'Suo figlio, che ha portato il suo esercito a Delta delle Acque per il funerale di suo padre.',
    },
  },
  ctTalisa23: {
    character: 'talisa-maegyr',
    type: { en: 'Son’s wife', it: 'Moglie del figlio' },
    summary: {
      en: 'Robb’s queen, who stands beside her on the bank at the funeral.',
      it: 'La regina di Robb, che al funerale le sta accanto sulla riva.',
    },
  },
  ctRickard25: {
    character: 'rickard-karstark',
    type: { en: 'Northern lord', it: 'Lord del Nord' },
    summary: {
      en: 'The lord who murdered the Lannister boys and blamed her for freeing Jaime. She urged Robb to keep him as a hostage; Robb beheaded him.',
      it: 'Il lord che ha ucciso i ragazzi Lannister e ha dato la colpa a lei per aver liberato Jaime. Lei ha esortato Robb a tenerlo come ostaggio; Robb lo ha decapitato.',
    },
  },
  ctRobb25: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, who will not hear her plea to spare Lord Karstark, and loses the Karstark men.',
      it: 'Suo figlio, che non ascolta la sua supplica di risparmiare lord Karstark, e perde gli uomini dei Karstark.',
    },
  },
  ctEdmure25: {
    character: 'edmure-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who wants the murders kept quiet, and backs her advice to hold Lord Karstark hostage.',
      it: 'Suo fratello, che vuole tenere nascosti gli omicidi, e appoggia il suo consiglio di tenere lord Karstark in ostaggio.',
    },
  },
  ctTalisa25: {
    character: 'talisa-maegyr',
    type: { en: 'Son’s wife', it: 'Moglie del figlio' },
    summary: {
      en: 'Robb’s queen, who joins her in warning Robb that executing Lord Karstark will cost him the Karstark men.',
      it: 'La regina di Robb, che si unisce a lei nell’avvertire Robb che giustiziare lord Karstark gli costerà gli uomini dei Karstark.',
    },
  },
  ctBrynden25: {
    character: 'brynden-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'Her uncle, who punches Lord Karstark when he mocks Robb’s father.',
      it: 'Suo zio, che prende a pugni lord Karstark quando questi deride il padre di Robb.',
    },
  },
  ctRobb27: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, on the road to the Twins in the rain. Lord Walder wanted one of his daughters married to a king, she reminds him, with a look at Talisa.',
      it: 'Suo figlio, sulla strada per le Torri Gemelle sotto la pioggia. Lord Walder voleva una delle sue figlie sposata a un re, gli ricorda, con uno sguardo a Talisa.',
    },
  },
  ctTalisa27: {
    character: 'talisa-maegyr',
    type: { en: 'Son’s wife', it: 'Moglie del figlio' },
    summary: {
      en: 'The woman Robb married instead of a Frey.',
      it: 'La donna che Robb ha sposato al posto di una Frey.',
    },
  },
  ctWalder27: {
    character: 'walder-frey',
    type: { en: 'Prickly host', it: 'Ospite permaloso' },
    summary: {
      en: 'The lord of the Twins, who will take the delay as an insult, she warns. He is getting a wedding, but not the one he wanted.',
      it: 'Il signore delle Torri Gemelle, che prenderà il ritardo come un insulto, avverte lei. Avrà un matrimonio, ma non quello che voleva.',
    },
  },
  ctEdmure27: {
    character: 'edmure-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, riding to the Twins to marry a Frey he has never met.',
      it: 'Suo fratello, in viaggio verso le Torri Gemelle per sposare una Frey che non ha mai visto.',
    },
  },
  ctRobb29: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son. Before the march she backed his plan to strike at the Lannisters’ home. At the Twins she begged for his life, and he was stabbed through the heart before her eyes.',
      it: 'Suo figlio. Prima della marcia aveva appoggiato il suo piano di colpire la casa dei Lannister. Alle Torri Gemelle ha implorato per la sua vita, e lui è stato trafitto al cuore sotto i suoi occhi.',
    },
  },
  ctWalder29: {
    character: 'walder-frey',
    type: { en: 'Betrayer', it: 'Traditore' },
    summary: {
      en: 'The lord of the Twins. She took his young wife hostage to save Robb, and he showed he did not care for his wife’s life.',
      it: 'Il signore delle Torri Gemelle. Lei ha preso in ostaggio la sua giovane moglie per salvare Robb, e lui ha mostrato di non tenere alla vita della moglie.',
    },
  },
  ctRoose29: {
    character: 'roose-bolton',
    type: { en: 'Betrayer', it: 'Traditore' },
    summary: {
      en: 'The lord seated beside her at the feast. She noticed the mail under his clothes and slapped him, too late; he killed Robb.',
      it: 'Il lord seduto accanto a lei al banchetto. Catelyn ha notato la cotta di maglia sotto i vestiti di lui e lo ha schiaffeggiato, troppo tardi; è stato lui a uccidere Robb.',
    },
  },
  ctTalisa29: {
    character: 'talisa-maegyr',
    type: { en: 'Son’s wife', it: 'Moglie del figlio' },
    summary: {
      en: 'Robb’s queen, who was carrying his child. She was stabbed to death at the wedding feast.',
      it: 'La regina di Robb, che aspettava un figlio da lui. È stata uccisa a coltellate alla festa nuziale.',
    },
  },
  ctEdmure29: {
    character: 'edmure-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, whose wedding brought them to the Twins. He was carried off to the bedding before the slaughter.',
      it: 'Suo fratello, le cui nozze li avevano portati alle Torri Gemelle. Era stato portato via per la cerimonia della consumazione prima del massacro.',
    },
  },
  // Catelyn, the books
  ctHoster146: {
    character: 'hoster-tully',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her dying father, in whose rooms she is confined. In his fever he begs forgiveness and murmurs a name she does not know, Tansy.',
      it: 'Il padre morente, nelle cui stanze lei è confinata. Nella febbre chiede perdono e mormora un nome che lei non conosce, Tansy.',
    },
  },
  ctEdmure146: {
    character: 'edmure-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, back from his victory at the fords, who scolds her for freeing Jaime and has sent word to Harrenhal that he escaped.',
      it: 'Suo fratello, di ritorno dalla vittoria ai guadi, che la rimprovera per aver liberato Jaime e ha fatto sapere a Harrenhal che è fuggito.',
    },
  },
  ctLysa146: {
    character: 'lysa-arryn',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'Her sister, to whom she writes to come to Riverrun before their father dies. She guesses that Lysa was married to Jon Arryn after a lost child.',
      it: 'Sua sorella, a cui scrive di venire a Delta delle Acque prima che il padre muoia. Intuisce che Lysa fu data in sposa a Jon Arryn dopo un figlio perduto.',
    },
  },
  ctJaime146: {
    character: 'jaime-lannister',
    type: { en: 'Prisoner she freed', it: 'Prigioniero liberato' },
    summary: {
      en: 'The prisoner she freed to trade for her daughters. A knight has been sent after him, and she hopes he fails.',
      it: 'Il prigioniero che ha liberato per scambiarlo con le figlie. Gli hanno mandato dietro un cavaliere, e lei spera che fallisca.',
    },
  },
  ctBrienne146: {
    character: 'brienne-of-tarth',
    type: { en: 'Escort', it: 'Scorta' },
    summary: {
      en: 'The knight taking Jaime south. If he is believed to have escaped, the Lannisters have no reason to hand her daughters to Brienne.',
      it: 'Il cavaliere che porta Jaime a sud. Se lo crederanno fuggito, i Lannister non avranno motivo di consegnare le sue figlie a Brienne.',
    },
  },
  ctRobb158: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, back at Riverrun crowned and with a wife. He forgives her before the court, and in the same breath makes it impossible to blame him for breaking his vow to the Freys.',
      it: 'Suo figlio, tornato a Delta delle Acque con la corona e una moglie. La perdona davanti alla corte, e così rende impossibile rimproverargli la promessa infranta ai Frey.',
    },
  },
  ctJeyne158: {
    character: 'jeyne-westerling',
    type: { en: 'Son’s wife', it: 'Moglie del figlio' },
    summary: {
      en: 'The girl Robb presents as his lady wife. Catelyn sees at once that the marriage has insulted House Frey and broken the alliance.',
      it: 'La ragazza che Robb le presenta come sua moglie. Catelyn capisce subito che quel matrimonio ha offeso Casa Frey e rotto l’alleanza.',
    },
  },
  ctBrynden158: {
    character: 'brynden-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'Her uncle, who greets her warmly when she is brought to the hall.',
      it: 'Suo zio, che la accoglie con calore quando la portano nella sala.',
    },
  },
  ctRickard158: {
    character: 'rickard-karstark',
    type: { en: 'Northern lord', it: 'Lord del Nord' },
    summary: {
      en: 'The lord whose sons Jaime killed. He is not appeased by Robb’s words for her, and leaves the hall in a fury.',
      it: 'Il lord a cui Jaime ha ucciso i figli. Le parole di Robb in sua difesa non lo placano, ed esce furioso dalla sala.',
    },
  },
  ctRolph158: {
    character: 'rolph-spicer',
    type: { en: 'Queen’s uncle', it: 'Zio della regina' },
    summary: {
      en: 'Jeyne’s uncle, at whom Grey Wind growls. She does not like it, and persuades Robb to send him away on an errand.',
      it: 'Lo zio di Jeyne, a cui Vento Grigio ringhia. A lei non piace, e convince Robb ad allontanarlo con un incarico.',
    },
  },
  ctRickard164: {
    character: 'rickard-karstark',
    type: { en: 'Northern lord', it: 'Lord del Nord' },
    summary: {
      en: 'The lord who murdered two Lannister prisoners for vengeance on Jaime. Robb beheaded him in the godswood.',
      it: 'Il lord che ha ucciso due prigionieri Lannister per vendicarsi di Jaime. Robb lo ha decapitato nel parco degli dèi.',
    },
  },
  ctRobb164: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, who passes the sentence on Lord Karstark and swings the axe himself.',
      it: 'Suo figlio, che pronuncia la sentenza contro lord Karstark e cala lui stesso la scure.',
    },
  },
  ctJeyne164: {
    character: 'jeyne-westerling',
    type: { en: 'Son’s wife', it: 'Moglie del figlio' },
    summary: {
      en: 'Robb’s young queen, who comes to her that night to ask how to comfort him, and promises she will soon give him children.',
      it: 'La giovane regina di Robb, che quella notte va da lei a chiederle come consolarlo, e promette che presto gli darà dei figli.',
    },
  },
  ctHoster164: {
    character: 'hoster-tully',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, at whose bedside she sits. The maester tells her he will not last much longer.',
      it: 'Suo padre, al cui capezzale lei veglia. Il maestro le dice che non durerà ancora a lungo.',
    },
  },
  ctBrynden164: {
    character: 'brynden-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'Her uncle, who rides out after the Karstark men who have left to hunt Jaime.',
      it: 'Suo zio, che parte all’inseguimento degli uomini dei Karstark andati a caccia di Jaime.',
    },
  },
  ctHoster179: {
    character: 'hoster-tully',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, who died at last. His family and bannermen gathered on the river for his funeral boat.',
      it: 'Suo padre, che alla fine è morto. La famiglia e gli alfieri si sono riuniti sul fiume per la sua barca funebre.',
    },
  },
  ctRobb179: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, who tells her Sansa has been married to the Imp. She begs him to bend the knee and make peace, and he will not hear it.',
      it: 'Suo figlio, che le dice che Sansa è stata data in sposa al Folletto. Lei lo supplica di piegare il ginocchio e fare pace, e lui non vuole sentirne parlare.',
    },
  },
  ctLothar179: {
    character: 'lothar-frey',
    type: { en: 'Frey envoy', it: 'Inviato dei Frey' },
    summary: {
      en: 'Lord Walder’s son, who brings his father’s terms. At dinner he tells them Winterfell has burned and that the Bastard of Bolton saved the survivors, which she cannot believe.',
      it: 'Il figlio di lord Walder, che porta le condizioni del padre. A cena racconta che Grande Inverno è bruciata e che il Bastardo di Bolton ha salvato i superstiti, cosa a cui lei non riesce a credere.',
    },
  },
  ctEdmure179: {
    character: 'edmure-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who misses their father’s funeral boat three times, then balks at the bride Lord Walder chooses for him.',
      it: 'Suo fratello, che manca tre volte la barca funebre del padre, poi recalcitra davanti alla sposa scelta per lui da lord Walder.',
    },
  },
  ctBrynden179: {
    character: 'brynden-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'Her uncle, who sets the funeral boat alight with one arrow, and reminds Edmure that he owes amends for the fords.',
      it: 'Suo zio, che incendia la barca funebre con una sola freccia, e ricorda a Edmure che deve rimediare all’errore dei guadi.',
    },
  },
  ctRobb189: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, who means to name Jon his heir. When she says she cannot support it, he reminds her that he is the king.',
      it: 'Suo figlio, che vuole nominare Jon suo erede. Quando lei dice di non poterlo appoggiare, lui le ricorda che il re è lui.',
    },
  },
  ctJon189: {
    character: 'jon-snow',
    type: { en: 'Husband’s bastard', it: 'Bastardo del marito' },
    summary: {
      en: 'Eddard’s bastard, whom Robb wants to legitimise and name heir. She pleads against it, remembering the Targaryens’ legitimised bastards.',
      it: 'Il bastardo di Eddard, che Robb vuole legittimare e nominare erede. Lei lo supplica di non farlo, ricordando i bastardi legittimati dei Targaryen.',
    },
  },
  ctArya189: {
    character: 'arya-stark',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Her younger daughter, whom she asks Robb to name heir instead. Robb answers that no one has seen Arya since their father died.',
      it: 'La figlia minore, che lei chiede a Robb di nominare erede al posto di Jon. Robb risponde che nessuno ha più visto Arya da quando è morto il padre.',
    },
  },
  ctJason189: {
    character: 'jason-mallister',
    type: { en: 'Protector', it: 'Protettore' },
    summary: {
      en: 'The lord of Seagard, who joins the host on the march. After the wedding Robb means to send her to Seagard under his protection.',
      it: 'Il signore di Seagard, che raggiunge l’esercito durante la marcia. Dopo le nozze Robb vuole mandarla a Seagard sotto la sua protezione.',
    },
  },
  ctEdmure189: {
    character: 'edmure-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, riding to the Twins in the rain for his wedding to Roslin Frey.',
      it: 'Suo fratello, in viaggio sotto la pioggia verso le Torri Gemelle per le nozze con Roslin Frey.',
    },
  },
  ctRobb193: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, whom she warns again not to offend Lord Walder. She asks for food as soon as they arrive, to secure the guest right.',
      it: 'Suo figlio, che lei avverte di nuovo di non offendere lord Walder. Appena arrivati chiede da mangiare, per assicurarsi il diritto dell’ospite.',
    },
  },
  ctWalder193: {
    character: 'walder-frey',
    type: { en: 'Host', it: 'Ospite che accoglie' },
    summary: {
      en: 'The lord of the Twins, who insults Robb at every turn, then grants them bread and salt and welcomes them as guests.',
      it: 'Il signore delle Torri Gemelle, che insulta Robb a ogni occasione, poi concede loro pane e sale e li accoglie come ospiti.',
    },
  },
  ctRoose193: {
    character: 'roose-bolton',
    type: { en: 'Northern lord', it: 'Lord del Nord' },
    summary: {
      en: 'The lord of the Dreadfort, who joins them at the Twins and shows them a strip of Theon’s skin.',
      it: 'Il signore di Forte Terrore, che li raggiunge alle Torri Gemelle e mostra loro un lembo della pelle di Theon.',
    },
  },
  ctRyman193: {
    character: 'ryman-frey',
    type: { en: 'Frey knight', it: 'Cavaliere Frey' },
    summary: {
      en: 'Lord Walder’s grandson, who meets them on the road, angry that Queen Jeyne has not come. She offers her apologies.',
      it: 'Il nipote di lord Walder, che va loro incontro sulla strada, irritato perché la regina Jeyne non è venuta. Lei gli porge le sue scuse.',
    },
  },
  ctEdmure193: {
    character: 'edmure-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who rides beside Robb to the Twins and meets his bride there.',
      it: 'Suo fratello, che cavalca accanto a Robb fino alle Torri Gemelle e lì conosce la sua sposa.',
    },
  },
  ctRobb195: {
    character: 'robb-stark',
    type: { en: 'Son and king', it: 'Figlio e re' },
    summary: {
      en: 'Her son, struck by crossbow bolts at the wedding feast. She begged Lord Walder to trade his life for a Frey’s, and watched a man in a pink cloak run him through.',
      it: 'Suo figlio, colpito dai dardi delle balestre alla festa nuziale. Lei ha implorato lord Walder di scambiare la sua vita con quella di un Frey, e ha visto un uomo dal mantello rosa trafiggerlo.',
    },
  },
  ctWalder195: {
    character: 'walder-frey',
    type: { en: 'Betrayer', it: 'Traditore' },
    summary: {
      en: 'The lord of the Twins, who watched the slaughter from his seat. He would not trade Robb for his grandson.',
      it: 'Il signore delle Torri Gemelle, che ha guardato il massacro dal suo seggio. Non ha voluto scambiare Robb con suo nipote.',
    },
  },
  ctAegon195: {
    character: 'aegon-frey',
    type: { en: 'Hostage', it: 'Ostaggio' },
    summary: {
      en: 'Lord Walder’s simple-minded grandson, whom she seized and held a dagger to. When Robb died she kept her word and cut his throat.',
      it: 'Il nipote di lord Walder, uno sciocco, che lei ha afferrato tenendogli un pugnale alla gola. Quando Robb è morto ha mantenuto la parola e lo ha sgozzato.',
    },
  },
  ctEdmure195: {
    character: 'edmure-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, who doted on his bride at the feast and was carried off to the bedding before the slaughter.',
      it: 'Suo fratello, che al banchetto era tutto attenzioni per la sposa ed è stato portato via per la cerimonia della consumazione prima del massacro.',
    },
  },

  // Edmure, the show
  edHoster23: {
    character: 'hoster-tully',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the lord of Riverrun, who has died. At the funeral Edmure misses the boat three times with burning arrows.',
      it: 'Suo padre, il signore di Delta delle Acque, che è morto. Al funerale Edmure manca tre volte la barca con le frecce infuocate.',
    },
  },
  edBrynden23: {
    character: 'brynden-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, who pushes him aside and hits the funeral boat with a single arrow, then turns with Robb against his victory.',
      it: 'Suo zio, che lo spinge da parte e colpisce la barca funebre con una sola freccia, poi si schiera con Robb contro la sua vittoria.',
    },
  },
  edRobb23: {
    character: 'robb-stark',
    type: { en: 'Nephew and king', it: 'Nipote e re' },
    summary: {
      en: 'His nephew, who is furious that Edmure’s attack ruined his plan to draw the Lannisters west, and has no use for his hostages.',
      it: 'Suo nipote, furioso perché l’attacco di Edmure ha rovinato il suo piano di attirare i Lannister a ovest, e che non sa che farsene dei suoi ostaggi.',
    },
  },
  edWillem23: {
    character: 'willem-lannister',
    type: { en: 'Hostage', it: 'Ostaggio' },
    summary: {
      en: 'A young Lannister squire his men took in battle, held at Riverrun as a hostage.',
      it: 'Un giovane scudiero Lannister catturato in battaglia dai suoi uomini, tenuto in ostaggio a Delta delle Acque.',
    },
  },
  edMartyn23: {
    character: 'martyn-lannister',
    type: { en: 'Hostage', it: 'Ostaggio' },
    summary: {
      en: 'The other young Lannister squire taken in the same battle, held with Willem.',
      it: 'L’altro giovane scudiero Lannister catturato nella stessa battaglia, tenuto insieme a Willem.',
    },
  },
  edRobb25: {
    character: 'robb-stark',
    type: { en: 'Nephew and king', it: 'Nipote e re' },
    summary: {
      en: 'His nephew. Edmure urges him to bury the dead hostages quietly and keep Lord Karstark alive; Robb refuses to lie and beheads Lord Karstark.',
      it: 'Suo nipote. Edmure lo esorta a seppellire in silenzio gli ostaggi morti e a tenere in vita lord Karstark; Robb si rifiuta di mentire e decapita lord Karstark.',
    },
  },
  edRickard25: {
    character: 'rickard-karstark',
    type: { en: 'Northern lord', it: 'Lord del Nord' },
    summary: {
      en: 'The lord who murdered the hostages in their cell. Edmure wanted him kept as a hostage; Robb executed him.',
      it: 'Il lord che ha ucciso gli ostaggi nella loro cella. Edmure voleva tenerlo in ostaggio; Robb lo ha giustiziato.',
    },
  },
  edWillem25: {
    character: 'willem-lannister',
    type: { en: 'Hostage', it: 'Ostaggio' },
    summary: {
      en: 'The young Lannister squire his men took, murdered in his cell by the Karstark men. Edmure fears Tywin’s reprisals if the news gets out.',
      it: 'Il giovane scudiero Lannister catturato dai suoi uomini, ucciso nella cella dagli uomini dei Karstark. Edmure teme la rappresaglia di Tywin se la notizia si diffonde.',
    },
  },
  edMartyn25: {
    character: 'martyn-lannister',
    type: { en: 'Hostage', it: 'Ostaggio' },
    summary: {
      en: 'The other Lannister squire, stabbed by Lord Karstark in the same cell.',
      it: 'L’altro scudiero Lannister, pugnalato da lord Karstark nella stessa cella.',
    },
  },
  edCatelyn25: {
    character: 'catelyn-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, whose advice to keep Lord Karstark as a hostage he backs.',
      it: 'Sua sorella, di cui appoggia il consiglio di tenere lord Karstark in ostaggio.',
    },
  },
  edRoslin26: {
    character: 'roslin-frey',
    type: { en: 'Promised bride', it: 'Promessa sposa' },
    summary: {
      en: 'The daughter Lord Walder demands he marry. Edmure protests that he has never met her, but agrees.',
      it: 'La figlia che lord Walder pretende che lui sposi. Edmure protesta di non averla mai vista, ma accetta.',
    },
  },
  edWalder26: {
    character: 'walder-frey',
    type: { en: 'Future father-in-law', it: 'Futuro suocero' },
    summary: {
      en: 'The lord of the Twins, who names Edmure’s marriage to his daughter among his terms for rejoining Robb.',
      it: 'Il signore delle Torri Gemelle, che mette le nozze di Edmure con sua figlia fra le condizioni per tornare con Robb.',
    },
  },
  edRobb26: {
    character: 'robb-stark',
    type: { en: 'Nephew and king', it: 'Nipote e re' },
    summary: {
      en: 'His nephew, who needs the Freys back and presses him to accept the match.',
      it: 'Suo nipote, che ha bisogno di riavere i Frey e insiste perché accetti il matrimonio.',
    },
  },
  edBrynden26: {
    character: 'brynden-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, who joins the others in pressing him to marry for the alliance.',
      it: 'Suo zio, che si unisce agli altri nell’insistere perché si sposi per l’alleanza.',
    },
  },
  edRoslin29: {
    character: 'roslin-frey',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'The bride he had never met. To his relief she is beautiful, and after the wedding he has eyes only for her until they are carried off to bed.',
      it: 'La sposa che non aveva mai visto. Con suo sollievo è bellissima, e dopo le nozze lui ha occhi solo per lei finché non vengono portati a letto.',
    },
  },
  edWalder29: {
    character: 'walder-frey',
    type: { en: 'Father-in-law', it: 'Suocero' },
    summary: {
      en: 'The lord of the Twins, who gives him his daughter and calls for the bedding.',
      it: 'Il signore delle Torri Gemelle, che gli dà in sposa sua figlia e chiama la cerimonia della consumazione.',
    },
  },
  edRobb29: {
    character: 'robb-stark',
    type: { en: 'Nephew and king', it: 'Nipote e re' },
    summary: {
      en: 'His nephew, who called him the best match House Frey was ever offered. He was killed at the Twins the night of the wedding.',
      it: 'Suo nipote, che lo aveva definito il miglior partito mai offerto a Casa Frey. È stato ucciso alle Torri Gemelle la notte delle nozze.',
    },
  },
  edCatelyn29: {
    character: 'catelyn-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, who came to the Twins for his wedding. She was killed there that night.',
      it: 'Sua sorella, venuta alle Torri Gemelle per le sue nozze. È stata uccisa lì quella notte.',
    },
  },
  edBrynden29: {
    character: 'brynden-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, who drinks at the wedding feast, then leaves the hall to find a tree to relieve himself.',
      it: 'Suo zio, che beve alla festa nuziale, poi esce dalla sala in cerca di un albero contro cui liberarsi.',
    },
  },
  // Edmure, the books
  edCatelyn146: {
    character: 'catelyn-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, confined to their father’s rooms for freeing Jaime. He scolds her: Jaime’s word is worthless, and Cersei will never free her daughters.',
      it: 'Sua sorella, confinata nelle stanze del padre per aver liberato Jaime. Lui la rimprovera: la parola di Jaime non vale niente, e Cersei non libererà mai le sue figlie.',
    },
  },
  edHoster146: {
    character: 'hoster-tully',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, dying in his rooms while Edmure comes home from turning back the Lannisters at the fords.',
      it: 'Suo padre, che muore nelle sue stanze mentre Edmure torna a casa dopo aver respinto i Lannister ai guadi.',
    },
  },
  edJaime146: {
    character: 'jaime-lannister',
    type: { en: 'Escaped prisoner', it: 'Prigioniero fuggito' },
    summary: {
      en: 'The prisoner Catelyn let go. Edmure treats it as an escape and has sent knights after him.',
      it: 'Il prigioniero che Catelyn ha lasciato andare. Edmure lo considera una fuga e gli ha mandato dietro dei cavalieri.',
    },
  },
  edRoose146: {
    character: 'roose-bolton',
    type: { en: 'Bannerman', it: 'Alfiere' },
    summary: {
      en: 'The northern lord at Harrenhal, to whom Edmure has sent three ravens saying that Jaime has escaped.',
      it: 'Il lord del Nord a Harrenhal, a cui Edmure ha mandato tre corvi per dire che Jaime è fuggito.',
    },
  },
  edRobb158: {
    character: 'robb-stark',
    type: { en: 'Nephew and king', it: 'Nipote e re' },
    summary: {
      en: 'His nephew, who praises him before the court for the fords, then tells him in private that the victory ruined his plan. Edmure asks to lead the van in the next battle.',
      it: 'Suo nipote, che lo loda davanti alla corte per i guadi, poi in privato gli dice che quella vittoria ha rovinato il suo piano. Edmure chiede di guidare l’avanguardia nella prossima battaglia.',
    },
  },
  edBrynden158: {
    character: 'brynden-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, who cuts short his account of the battle and berates him with Robb.',
      it: 'Suo zio, che interrompe il suo racconto della battaglia e lo rimprovera insieme a Robb.',
    },
  },
  edCatelyn158: {
    character: 'catelyn-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, brought out of their father’s rooms when Robb returns. It is she who says a person, not a gift, must soothe Lord Walder.',
      it: 'Sua sorella, fatta uscire dalle stanze del padre al ritorno di Robb. È lei a dire che per placare lord Walder serve una persona, non un dono.',
    },
  },
  edHoster158: {
    character: 'hoster-tully',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, weakening in his rooms above the hall.',
      it: 'Suo padre, che si spegne nelle sue stanze sopra la sala.',
    },
  },
  edRickard164: {
    character: 'rickard-karstark',
    type: { en: 'Northern lord', it: 'Lord del Nord' },
    summary: {
      en: 'The lord who murdered two Lannister prisoners in Edmure’s cells. Edmure urged Robb to hold him hostage; Robb beheaded him.',
      it: 'Il lord che ha ucciso due prigionieri Lannister nelle celle di Edmure. Edmure ha esortato Robb a tenerlo in ostaggio; Robb lo ha decapitato.',
    },
  },
  edWillem164: {
    character: 'willem-lannister',
    type: { en: 'Prisoner', it: 'Prigioniero' },
    summary: {
      en: 'A Lannister squire murdered in his cell at Riverrun. Edmure wants word of it kept from the Freys and the Lannisters.',
      it: 'Uno scudiero Lannister ucciso nella sua cella a Delta delle Acque. Edmure vuole che la notizia non arrivi ai Frey e ai Lannister.',
    },
  },
  edRobb164: {
    character: 'robb-stark',
    type: { en: 'Nephew and king', it: 'Nipote e re' },
    summary: {
      en: 'His nephew, who will not keep the murders secret and executes Lord Karstark for honour’s sake.',
      it: 'Suo nipote, che non vuole tenere segreti gli omicidi e giustizia lord Karstark per una questione d’onore.',
    },
  },
  edBrynden164: {
    character: 'brynden-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, who leads a hundred men after the departed Karstarks.',
      it: 'Suo zio, che guida cento uomini all’inseguimento dei Karstark partiti.',
    },
  },
  edCatelyn164: {
    character: 'catelyn-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, who keeps watch at their dying father’s bedside.',
      it: 'Sua sorella, che veglia al capezzale del padre morente.',
    },
  },
  edHoster179: {
    character: 'hoster-tully',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who died and left him lord of Riverrun. At the funeral Edmure missed the boat three times.',
      it: 'Suo padre, che è morto lasciandolo signore di Delta delle Acque. Al funerale Edmure ha mancato tre volte la barca.',
    },
  },
  edBrynden179: {
    character: 'brynden-tully',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, who lit the funeral boat with the bow Edmure handed him, and reminds him that he must make amends for the fords.',
      it: 'Suo zio, che ha incendiato la barca funebre con l’arco passatogli da Edmure, e gli ricorda che deve rimediare all’errore dei guadi.',
    },
  },
  edRoslin179: {
    character: 'roslin-frey',
    type: { en: 'Promised bride', it: 'Promessa sposa' },
    summary: {
      en: 'The daughter Lord Walder demands he marry at once. Edmure balks at not choosing his own wife.',
      it: 'La figlia che lord Walder pretende che lui sposi subito. Edmure recalcitra all’idea di non scegliersi la moglie.',
    },
  },
  edLothar179: {
    character: 'lothar-frey',
    type: { en: 'Frey envoy', it: 'Inviato dei Frey' },
    summary: {
      en: 'Lord Walder’s son, who brings the terms that bind Edmure to Roslin.',
      it: 'Il figlio di lord Walder, che porta le condizioni che legano Edmure a Roslin.',
    },
  },
  edRobb179: {
    character: 'robb-stark',
    type: { en: 'Nephew and king', it: 'Nipote e re' },
    summary: {
      en: 'His nephew, who launched the funeral boat and accepts Lord Walder’s terms for him.',
      it: 'Suo nipote, che ha varato la barca funebre e accetta per lui le condizioni di lord Walder.',
    },
  },
  edRoslin193: {
    character: 'roslin-frey',
    type: { en: 'Bride', it: 'Sposa' },
    summary: {
      en: 'The bride he meets at the Twins, by far the most beautiful of Lord Walder’s children.',
      it: 'La sposa che conosce alle Torri Gemelle, di gran lunga la più bella dei figli di lord Walder.',
    },
  },
  edWalder193: {
    character: 'walder-frey',
    type: { en: 'Future father-in-law', it: 'Futuro suocero' },
    summary: {
      en: 'The lord of the Twins, who has Roslin brought out to meet him.',
      it: 'Il signore delle Torri Gemelle, che fa venire Roslin per presentargliela.',
    },
  },
  edRobb193: {
    character: 'robb-stark',
    type: { en: 'Nephew and king', it: 'Nipote e re' },
    summary: {
      en: 'His nephew, beside whom he rides to the Twins.',
      it: 'Suo nipote, al cui fianco cavalca fino alle Torri Gemelle.',
    },
  },
  edCatelyn193: {
    character: 'catelyn-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, who rides with them to the Twins.',
      it: 'Sua sorella, che cavalca con loro fino alle Torri Gemelle.',
    },
  },
  edRoslin195: {
    character: 'roslin-frey',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'The bride he dotes on at the feast. She weeps as she is carried off to the bedding.',
      it: 'La sposa per cui al banchetto è tutto attenzioni. Lei piange mentre la portano via per la cerimonia della consumazione.',
    },
  },
  edRobb195: {
    character: 'robb-stark',
    type: { en: 'Nephew and king', it: 'Nipote e re' },
    summary: {
      en: 'His nephew, who rode with him to the Twins. He was killed at the wedding feast.',
      it: 'Suo nipote, che era andato con lui alle Torri Gemelle. È stato ucciso alla festa nuziale.',
    },
  },
  edCatelyn195: {
    character: 'catelyn-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, who came to the Twins for his wedding. She was killed at the feast.',
      it: 'Sua sorella, venuta alle Torri Gemelle per le sue nozze. È stata uccisa al banchetto.',
    },
  },
  edWalder195: {
    character: 'walder-frey',
    type: { en: 'Father-in-law', it: 'Suocero' },
    summary: {
      en: 'The lord of the Twins, who gives him Roslin and calls for the bedding.',
      it: 'Il signore delle Torri Gemelle, che gli dà in sposa Roslin e chiama la cerimonia della consumazione.',
    },
  },

  // Brynden, the show
  brHoster23: {
    character: 'hoster-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His elder brother, with whom he quarrelled for thirty years. On his deathbed Hoster told him to stop calling himself the Blackfish, and they made peace.',
      it: 'Il fratello maggiore, con cui ha litigato per trent’anni. Sul letto di morte Hoster gli ha detto di smetterla di farsi chiamare Pesce Nero, e hanno fatto pace.',
    },
  },
  brCatelyn23: {
    character: 'catelyn-stark',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece, who mourns her father with him. He tells her not to give up hope for her sons, and to be strong for Robb.',
      it: 'Sua nipote, che piange il padre insieme a lui. Le dice di non perdere la speranza per i suoi figli, e di essere forte per Robb.',
    },
  },
  brEdmure23: {
    character: 'edmure-tully',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His nephew, who misses the funeral boat three times. Brynden pushes him aside and makes the shot, and is furious with him for the battle that ruined Robb’s plan.',
      it: 'Suo nipote, che manca tre volte la barca funebre. Brynden lo spinge da parte e colpisce il bersaglio, ed è furioso con lui per la battaglia che ha rovinato il piano di Robb.',
    },
  },
  brRobb23: {
    character: 'robb-stark',
    type: { en: 'Great-nephew and king', it: 'Pronipote e re' },
    summary: {
      en: 'Catelyn’s son, with whom he launches Hoster’s funeral boat and plans the war.',
      it: 'Il figlio di Catelyn, con cui vara la barca funebre di Hoster e pianifica la guerra.',
    },
  },
  brRickard25: {
    character: 'rickard-karstark',
    type: { en: 'Northern lord', it: 'Lord del Nord' },
    summary: {
      en: 'The lord who murdered the Lannister boys and asked Robb whether his father never taught him to kill his enemies. Brynden punched him. Robb beheaded him.',
      it: 'Il lord che ha ucciso i ragazzi Lannister e ha chiesto a Robb se suo padre non gli avesse insegnato a uccidere i nemici. Brynden lo ha preso a pugni. Robb lo ha decapitato.',
    },
  },
  brRobb25: {
    character: 'robb-stark',
    type: { en: 'Great-nephew and king', it: 'Pronipote e re' },
    summary: {
      en: 'Catelyn’s son, who tells him to leave Lord Karstark alone, then executes him against everyone’s advice.',
      it: 'Il figlio di Catelyn, che gli dice di lasciare stare lord Karstark, poi lo giustizia contro il parere di tutti.',
    },
  },
  brCatelyn25: {
    character: 'catelyn-stark',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece, whom Lord Karstark blames for freeing Jaime.',
      it: 'Sua nipote, a cui lord Karstark dà la colpa per aver liberato Jaime.',
    },
  },
  brEdmure25: {
    character: 'edmure-tully',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His nephew, who wants the murders of his hostages kept quiet.',
      it: 'Suo nipote, che vuole tenere nascosti gli omicidi dei suoi ostaggi.',
    },
  },
  brRobb29: {
    character: 'robb-stark',
    type: { en: 'Great-nephew and king', it: 'Pronipote e re' },
    summary: {
      en: 'Catelyn’s son, whom Brynden followed to the Twins for Edmure’s wedding. He was killed at the feast after Brynden left the hall.',
      it: 'Il figlio di Catelyn, che Brynden aveva seguito alle Torri Gemelle per le nozze di Edmure. È stato ucciso al banchetto dopo che Brynden era uscito dalla sala.',
    },
  },
  brCatelyn29: {
    character: 'catelyn-stark',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece, who came to the Twins with Robb. She was killed at the wedding feast.',
      it: 'Sua nipote, venuta alle Torri Gemelle con Robb. È stata uccisa alla festa nuziale.',
    },
  },
  brEdmure29: {
    character: 'edmure-tully',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His nephew, married to Roslin Frey at the Twins and carried off to the bedding.',
      it: 'Suo nipote, sposato con Roslin Frey alle Torri Gemelle e portato via per la cerimonia della consumazione.',
    },
  },
  brWalder29: {
    character: 'walder-frey',
    type: { en: 'Host', it: 'Ospite che accoglie' },
    summary: {
      en: 'The lord of the Twins, at whose wedding feast Brynden drinks too much and leaves the hall to relieve himself.',
      it: 'Il signore delle Torri Gemelle, alla cui festa nuziale Brynden beve troppo ed esce dalla sala per liberarsi.',
    },
  },
  // Brynden, the books
  brCatelyn158: {
    character: 'catelyn-stark',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece, confined for freeing Jaime. He greets her warmly when she is brought to the hall.',
      it: 'Sua nipote, confinata per aver liberato Jaime. Lui la accoglie con calore quando la portano nella sala.',
    },
  },
  brRobb158: {
    character: 'robb-stark',
    type: { en: 'Great-nephew and king', it: 'Pronipote e re' },
    summary: {
      en: 'Catelyn’s son, back from the west with a wife. With him Brynden berates Edmure for the fords.',
      it: 'Il figlio di Catelyn, tornato dall’ovest con una moglie. Insieme a lui Brynden rimprovera Edmure per i guadi.',
    },
  },
  brEdmure158: {
    character: 'edmure-tully',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His nephew, whose account of his victory Brynden cuts short: by attacking, Edmure let Tywin turn back to save King’s Landing.',
      it: 'Suo nipote, di cui Brynden interrompe il racconto della vittoria: attaccando, Edmure ha permesso a Tywin di tornare indietro a salvare Approdo del Re.',
    },
  },
  brLysa158: {
    character: 'lysa-arryn',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece, the lady of the Eyrie, whose service he left to join Robb.',
      it: 'Sua nipote, la signora del Nido dell’Aquila, al cui servizio ha rinunciato per unirsi a Robb.',
    },
  },
  brRickard164: {
    character: 'rickard-karstark',
    type: { en: 'Northern lord', it: 'Lord del Nord' },
    summary: {
      en: 'The lord who murdered two Lannister prisoners and promised his daughter to whoever brings him Jaime’s head. Robb beheaded him.',
      it: 'Il lord che ha ucciso due prigionieri Lannister e ha promesso la figlia a chi gli porterà la testa di Jaime. Robb lo ha decapitato.',
    },
  },
  brRobb164: {
    character: 'robb-stark',
    type: { en: 'Great-nephew and king', it: 'Pronipote e re' },
    summary: {
      en: 'Catelyn’s son, to whom Brynden reports that the Karstark men have gone. He rides after them with a hundred men.',
      it: 'Il figlio di Catelyn, a cui Brynden riferisce che gli uomini dei Karstark se ne sono andati. Li insegue con cento uomini.',
    },
  },
  brEdmure164: {
    character: 'edmure-tully',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His nephew, who wants Lord Karstark kept as a hostage and the murders hidden.',
      it: 'Suo nipote, che vuole lord Karstark in ostaggio e gli omicidi nascosti.',
    },
  },
  brCatelyn164: {
    character: 'catelyn-stark',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece, who sits with her dying father.',
      it: 'Sua nipote, che veglia il padre morente.',
    },
  },
  brHoster179: {
    character: 'hoster-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, the lord of Riverrun, who died. When Edmure missed the funeral boat three times, Brynden took the bow and set it alight.',
      it: 'Suo fratello, il signore di Delta delle Acque, che è morto. Quando Edmure ha mancato tre volte la barca funebre, Brynden ha preso l’arco e l’ha incendiata.',
    },
  },
  brEdmure179: {
    character: 'edmure-tully',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'His nephew, who balks at marrying the bride Lord Walder chooses. Brynden reminds him that he owes amends for the fords.',
      it: 'Suo nipote, che recalcitra davanti alla sposa scelta da lord Walder. Brynden gli ricorda che deve rimediare all’errore dei guadi.',
    },
  },
  brRobb179: {
    character: 'robb-stark',
    type: { en: 'Great-nephew and king', it: 'Pronipote e re' },
    summary: {
      en: 'Catelyn’s son, who launched Hoster’s funeral boat and hears Lord Walder’s terms.',
      it: 'Il figlio di Catelyn, che ha varato la barca funebre di Hoster e ascolta le condizioni di lord Walder.',
    },
  },
  brCatelyn179: {
    character: 'catelyn-stark',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece, who mourns her father with the family on the river.',
      it: 'Sua nipote, che piange il padre con la famiglia sul fiume.',
    },
  },
  brRobb195: {
    character: 'robb-stark',
    type: { en: 'Great-nephew and king', it: 'Pronipote e re' },
    summary: {
      en: 'Catelyn’s son, with whom Brynden berated Edmure and heard Lord Walder’s terms. He was killed at the Twins.',
      it: 'Il figlio di Catelyn, con cui Brynden aveva rimproverato Edmure e ascoltato le condizioni di lord Walder. È stato ucciso alle Torri Gemelle.',
    },
  },
  brCatelyn195: {
    character: 'catelyn-stark',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece, whom he greeted warmly at Riverrun. She was killed at the Twins with her son.',
      it: 'Sua nipote, che aveva accolto con calore a Delta delle Acque. È stata uccisa alle Torri Gemelle con il figlio.',
    },
  },
  brLysa195: {
    character: 'lysa-arryn',
    type: { en: 'Niece', it: 'Nipote' },
    summary: {
      en: 'His niece, the lady of the Eyrie, who never answered Robb’s letters.',
      it: 'Sua nipote, la signora del Nido dell’Aquila, che non ha mai risposto alle lettere di Robb.',
    },
  },

  // Hoster, the show: dead when his record opens, told at his funeral
  hoBrynden23: {
    character: 'brynden-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His younger brother, with whom he quarrelled for thirty years. On his deathbed he told Brynden to stop calling himself the Blackfish, and they made peace.',
      it: 'Il fratello minore, con cui ha litigato per trent’anni. Sul letto di morte ha detto a Brynden di smetterla di farsi chiamare Pesce Nero, e hanno fatto pace.',
    },
  },
  hoCatelyn23: {
    character: 'catelyn-stark',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, who had not seen him in years and could not be there when he died.',
      it: 'Sua figlia, che non lo vedeva da anni e non ha potuto essergli vicina quando è morto.',
    },
  },
  hoEdmure23: {
    character: 'edmure-tully',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son and heir, who missed his funeral boat three times with burning arrows.',
      it: 'Suo figlio ed erede, che ha mancato tre volte la sua barca funebre con le frecce infuocate.',
    },
  },
  hoRobb23: {
    character: 'robb-stark',
    type: { en: 'Grandson', it: 'Nipote' },
    summary: {
      en: 'His grandson, the king in the North, who came to Riverrun to launch his funeral boat.',
      it: 'Suo nipote, il re del Nord, venuto a Delta delle Acque a varare la sua barca funebre.',
    },
  },
  // Hoster, the books
  hoCatelyn146: {
    character: 'catelyn-stark',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, confined to his rooms. In his fever he begs forgiveness and speaks of blood, of a Tansy, and of other children to come.',
      it: 'Sua figlia, confinata nelle sue stanze. Nella febbre lui chiede perdono e parla di sangue, di una certa Tansy e di altri figli che verranno.',
    },
  },
  hoCatelyn179: {
    character: 'catelyn-stark',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, who sat at his bedside through his last fevers at Riverrun.',
      it: 'Sua figlia, che lo ha vegliato durante le ultime febbri a Delta delle Acque.',
    },
  },
  hoEdmure179: {
    character: 'edmure-tully',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son and heir, who missed his funeral boat three times.',
      it: 'Suo figlio ed erede, che ha mancato tre volte la sua barca funebre.',
    },
  },
  hoBrynden179: {
    character: 'brynden-tully',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, the Blackfish, who set his funeral boat alight with one arrow.',
      it: 'Suo fratello, il Pesce Nero, che ha incendiato la sua barca funebre con una sola freccia.',
    },
  },
  hoRobb179: {
    character: 'robb-stark',
    type: { en: 'Grandson', it: 'Nipote' },
    summary: {
      en: 'His grandson, Catelyn’s son, who launched his funeral boat with the river lords.',
      it: 'Suo nipote, figlio di Catelyn, che ha varato la sua barca funebre con i lord dei fiumi.',
    },
  },
  hoLysa179: {
    character: 'lysa-arryn',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, the lady of the Eyrie, to whom Catelyn wrote to come to Riverrun before he died.',
      it: 'Sua figlia, la signora del Nido dell’Aquila, a cui Catelyn aveva scritto di venire a Delta delle Acque prima che lui morisse.',
    },
  },

  // Rickard Karstark, the show
  rkRobb22: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king he follows for revenge. Robb lost Winterfell, and lost the war, Rickard tells him, the day he married Talisa.',
      it: 'Il re che segue per vendetta. Robb ha perso Grande Inverno, e ha perso la guerra, gli dice Rickard, il giorno in cui ha sposato Talisa.',
    },
  },
  rkTalisa22: {
    character: 'talisa-maegyr',
    type: { en: 'King’s wife', it: 'Moglie del re' },
    summary: {
      en: 'The woman Robb married instead of a Frey, at the cost of the war, as Lord Karstark sees it.',
      it: 'La donna che Robb ha sposato al posto di una Frey, a costo della guerra, secondo lord Karstark.',
    },
  },
  rkRobb25: {
    character: 'robb-stark',
    type: { en: 'King who beheaded him', it: 'Re che lo ha decapitato' },
    summary: {
      en: 'The king who would not let him have his vengeance. Rickard called him the King Who Lost the North and a kinslayer, and Robb beheaded him.',
      it: 'Il re che non gli ha concesso la sua vendetta. Rickard lo ha chiamato il Re che ha perso il Nord e assassino del suo sangue, e Robb lo ha decapitato.',
    },
  },
  rkWillem25: {
    character: 'willem-lannister',
    type: { en: 'Prisoner he had killed', it: 'Prigioniero fatto uccidere' },
    summary: {
      en: 'A Lannister squire held at Riverrun. Rickard’s men killed him in his cell, as kin of the Kingslayer.',
      it: 'Uno scudiero Lannister tenuto prigioniero a Delta delle Acque. Gli uomini di Rickard lo hanno ucciso nella sua cella, in quanto parente dello Sterminatore di re.',
    },
  },
  rkMartyn25: {
    character: 'martyn-lannister',
    type: { en: 'Prisoner he killed', it: 'Prigioniero che ha ucciso' },
    summary: {
      en: 'The other Lannister squire, who begged for his life. Rickard stabbed him himself.',
      it: 'L’altro scudiero Lannister, che ha implorato di avere salva la vita. Rickard lo ha pugnalato con le sue mani.',
    },
  },
  rkCatelyn25: {
    character: 'catelyn-stark',
    type: { en: 'Woman he blamed', it: 'Donna che ha accusato' },
    summary: {
      en: 'Robb’s mother, who freed the Kingslayer and robbed him of his vengeance for his sons.',
      it: 'La madre di Robb, che ha liberato lo Sterminatore di re privandolo della vendetta per i suoi figli.',
    },
  },
  rkBrynden25: {
    character: 'brynden-tully',
    type: { en: 'Man who struck him', it: 'Uomo che lo ha colpito' },
    summary: {
      en: 'Catelyn’s uncle, who punched him for asking whether Robb’s father never taught him to kill his enemies.',
      it: 'Lo zio di Catelyn, che lo ha preso a pugni quando ha chiesto se il padre di Robb non gli avesse insegnato a uccidere i nemici.',
    },
  },
  // Rickard Karstark, the books
  rkRobb158: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king he marched south with, who greets the mother who freed Jaime with gentle words.',
      it: 'Il re con cui ha marciato verso sud, che accoglie con parole gentili la madre che ha liberato Jaime.',
    },
  },
  rkCatelyn158: {
    character: 'catelyn-stark',
    type: { en: 'Woman he cannot forgive', it: 'Donna che non perdona' },
    summary: {
      en: 'Robb’s mother, who freed the man who killed his sons. He will not be appeased, and leaves the hall in a fury.',
      it: 'La madre di Robb, che ha liberato l’uomo che gli ha ucciso i figli. Non si lascia placare, ed esce furioso dalla sala.',
    },
  },
  rkJaime158: {
    character: 'jaime-lannister',
    type: { en: 'Sons’ killer', it: 'Assassino dei figli' },
    summary: {
      en: 'The Kingslayer, who killed his sons Eddard and Torrhen in the Whispering Wood, and is free.',
      it: 'Lo Sterminatore di re, che ha ucciso i suoi figli Eddard e Torrhen nel Bosco dei Sussurri, ed è libero.',
    },
  },
  rkRobb164: {
    character: 'robb-stark',
    type: { en: 'King who beheaded him', it: 'Re che lo ha decapitato' },
    summary: {
      en: 'The king who sentenced him for the murders. In the godswood Rickard called him a kinslayer, and Robb beheaded him himself.',
      it: 'Il re che lo ha condannato per gli omicidi. Nel parco degli dèi Rickard lo ha chiamato assassino del suo sangue, e Robb lo ha decapitato con le proprie mani.',
    },
  },
  rkWillem164: {
    character: 'willem-lannister',
    type: { en: 'Prisoner he killed', it: 'Prigioniero che ha ucciso' },
    summary: {
      en: 'A Lannister squire held at Riverrun, whom Rickard and his men murdered in his cell.',
      it: 'Uno scudiero Lannister tenuto prigioniero a Delta delle Acque, che Rickard e i suoi uomini hanno ucciso nella cella.',
    },
  },
  rkJaime164: {
    character: 'jaime-lannister',
    type: { en: 'Sons’ killer', it: 'Assassino dei figli' },
    summary: {
      en: 'The Kingslayer, who killed his sons. Rickard promised his daughter to whoever brought him Jaime’s head.',
      it: 'Lo Sterminatore di re, che gli ha ucciso i figli. Rickard ha promesso la figlia a chi gli avesse portato la testa di Jaime.',
    },
  },
  rkCatelyn164: {
    character: 'catelyn-stark',
    type: { en: 'Woman he blamed', it: 'Donna che ha accusato' },
    summary: {
      en: 'Robb’s mother, whose freeing of Jaime robbed him of his vengeance.',
      it: 'La madre di Robb, che liberando Jaime lo ha privato della sua vendetta.',
    },
  },

  // Walder Frey, the show
  wfRobb29: {
    character: 'robb-stark',
    type: {
      en: 'King who broke his word',
      it: 'Re che ha mancato alla parola',
    },
    summary: {
      en: 'The king who broke his promise to marry a Frey. Walder insulted him, accepted his apology and gave him guest welcome, then signalled the slaughter and mocked him as he died.',
      it: 'Il re che aveva mancato alla promessa di sposare una Frey. Walder lo ha insultato, ha accettato le sue scuse e lo ha accolto come ospite, poi ha dato il segnale del massacro e lo ha deriso mentre moriva.',
    },
  },
  wfCatelyn29: {
    character: 'catelyn-stark',
    type: { en: 'Liege lord’s daughter', it: 'Figlia del suo signore' },
    summary: {
      en: 'Robb’s mother, who took his young wife hostage to save her son. He did not care for his wife’s life. She was killed in his hall.',
      it: 'La madre di Robb, che ha preso in ostaggio la sua giovane moglie per salvare il figlio. Lui non teneva alla vita della moglie. È stata uccisa nella sua sala.',
    },
  },
  wfTalisa29: {
    character: 'talisa-maegyr',
    type: { en: 'King’s wife', it: 'Moglie del re' },
    summary: {
      en: 'The woman Robb married instead of one of his daughters. Walder insulted her on her arrival. She was stabbed to death at his feast.',
      it: 'La donna che Robb aveva sposato al posto di una delle sue figlie. Walder l’ha insultata al suo arrivo. È stata uccisa a coltellate al suo banchetto.',
    },
  },
  wfRoslin29: {
    character: 'roslin-frey',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, whom he gives to Edmure Tully. He calls for the bedding at the end of the feast.',
      it: 'Sua figlia, che dà in sposa a Edmure Tully. A fine banchetto chiama la cerimonia della consumazione.',
    },
  },
  wfEdmure29: {
    character: 'edmure-tully',
    type: { en: 'Son-in-law', it: 'Genero' },
    summary: {
      en: 'The lord of Riverrun, whose marriage to Roslin brings Robb to the Twins.',
      it: 'Il signore di Delta delle Acque, le cui nozze con Roslin portano Robb alle Torri Gemelle.',
    },
  },
  wfRoose30: {
    character: 'roose-bolton',
    type: { en: 'Fellow betrayer', it: 'Complice del tradimento' },
    summary: {
      en: 'The lord of the Dreadfort, with whom he gloats the morning after. Roose is to be Warden of the North, Walder lord of Riverrun.',
      it: 'Il signore di Forte Terrore, con cui la mattina dopo si compiace del colpo. Roose sarà Protettore del Nord, Walder signore di Delta delle Acque.',
    },
  },
  wfRobb30: {
    character: 'robb-stark',
    type: {
      en: 'King who broke his word',
      it: 'Re che ha mancato alla parola',
    },
    summary: {
      en: 'The king who broke his promise to marry a Frey, and was killed in Walder’s hall for it.',
      it: 'Il re che aveva mancato alla promessa di sposare una Frey, e per questo è stato ucciso nella sala di Walder.',
    },
  },
  wfCatelyn30: {
    character: 'catelyn-stark',
    type: { en: 'Liege lord’s daughter', it: 'Figlia del suo signore' },
    summary: {
      en: 'Robb’s mother, who once bargained with him for the crossing. She was killed in his hall.',
      it: 'La madre di Robb, che un tempo aveva trattato con lui il passaggio. È stata uccisa nella sua sala.',
    },
  },
  wfBrynden30: {
    character: 'brynden-tully',
    type: { en: 'One who escaped', it: 'Uno che è scampato' },
    summary: {
      en: 'Catelyn’s uncle, who slipped away from the feast before the slaughter. Roose worries about him; Walder says he is alone and outnumbered.',
      it: 'Lo zio di Catelyn, che si è allontanato dal banchetto prima del massacro. Roose se ne preoccupa; Walder dice che è solo e in inferiorità numerica.',
    },
  },
  wfTywin30: {
    character: 'tywin-lannister',
    type: { en: 'New liege', it: 'Nuovo signore' },
    summary: {
      en: 'The Lannister lord behind the slaughter. The Freys are to replace the Tullys as his vassals in the riverlands.',
      it: 'Il lord Lannister dietro il massacro. I Frey prenderanno il posto dei Tully come suoi vassalli nelle Terre dei Fiumi.',
    },
  },
  // Walder Frey, the books
  wfRobb193: {
    character: 'robb-stark',
    type: {
      en: 'King who broke his word',
      it: 'Re che ha mancato alla parola',
    },
    summary: {
      en: 'The king who broke his solemn oath to marry a Frey. Walder greets him with veiled insults until Robb apologises.',
      it: 'Il re che ha infranto il giuramento solenne di sposare una Frey. Walder lo accoglie con insulti velati finché Robb non si scusa.',
    },
  },
  wfCatelyn193: {
    character: 'catelyn-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'Robb’s mother, who asks him for food. He gives them bread and salt and welcomes them as guests.',
      it: 'La madre di Robb, che gli chiede da mangiare. Lui offre loro pane e sale e li accoglie come ospiti.',
    },
  },
  wfEdmure193: {
    character: 'edmure-tully',
    type: { en: 'Son-in-law to be', it: 'Futuro genero' },
    summary: {
      en: 'The lord of Riverrun, come to the Twins to marry his daughter.',
      it: 'Il signore di Delta delle Acque, venuto alle Torri Gemelle a sposare sua figlia.',
    },
  },
  wfRoslin193: {
    character: 'roslin-frey',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, whom he has brought out to meet Edmure.',
      it: 'Sua figlia, che fa venire per presentarla a Edmure.',
    },
  },
  wfLothar193: {
    character: 'lothar-frey',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, who carried his terms to Riverrun and meets Robb at the gate.',
      it: 'Suo figlio, che ha portato le sue condizioni a Delta delle Acque e accoglie Robb alla porta.',
    },
  },
  wfRobb195: {
    character: 'robb-stark',
    type: {
      en: 'King who broke his word',
      it: 'Re che ha mancato alla parola',
    },
    summary: {
      en: 'The king who broke his oath to marry a Frey. When the slaughter began Walder watched from his seat, and mocked him as he rose wounded.',
      it: 'Il re che aveva infranto il giuramento di sposare una Frey. Quando è cominciato il massacro Walder ha guardato dal suo seggio, e lo ha deriso mentre si rialzava ferito.',
    },
  },
  wfCatelyn195: {
    character: 'catelyn-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'Robb’s mother, who held a dagger to his grandson’s throat and begged him to trade the boy for her son. He would not. She was killed in his hall.',
      it: 'La madre di Robb, che ha puntato un pugnale alla gola di suo nipote e lo ha implorato di scambiare il ragazzo con suo figlio. Lui ha rifiutato. È stata uccisa nella sua sala.',
    },
  },
  wfAegon195: {
    character: 'aegon-frey',
    type: { en: 'Grandson', it: 'Nipote' },
    summary: {
      en: 'His simple-minded grandson, whose life he would not trade for Robb’s. Catelyn cut his throat.',
      it: 'Il nipote sciocco, la cui vita non ha voluto scambiare con quella di Robb. Catelyn lo ha sgozzato.',
    },
  },
  wfEdmure195: {
    character: 'edmure-tully',
    type: { en: 'Son-in-law', it: 'Genero' },
    summary: {
      en: 'The lord of Riverrun, married to his daughter and carried off to the bedding.',
      it: 'Il signore di Delta delle Acque, sposato con sua figlia e portato via per la cerimonia della consumazione.',
    },
  },
  wfRoslin195: {
    character: 'roslin-frey',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, wed to Edmure. She weeps as the Greatjon carries her off to the bedding.',
      it: 'Sua figlia, sposata con Edmure. Piange mentre il Greatjon la porta via per la cerimonia della consumazione.',
    },
  },

  // Grey Wind
  gwRobb29: {
    character: 'robb-stark',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy who took him from the litter and raised him. Grey Wind was killed outside while Robb was killed in the hall.',
      it: 'Il ragazzo che lo ha preso dalla cucciolata e lo ha allevato. Vento Grigio è stato ucciso fuori mentre Robb veniva ucciso nella sala.',
    },
  },
  gwGreatjon29: {
    character: 'greatjon-umber',
    type: { en: 'Man he bit', it: 'Uomo che ha morso' },
    summary: {
      en: 'A lord who drew steel at Robb’s table. Grey Wind knocked him down and bit off two of his fingers.',
      it: 'Un lord che aveva sguainato la spada alla tavola di Robb. Vento Grigio lo aveva atterrato e gli aveva staccato due dita.',
    },
  },
  gwRobb158: {
    character: 'robb-stark',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy who raised him. Since Robb’s marriage he keeps Grey Wind away from his side.',
      it: 'Il ragazzo che lo ha allevato. Da quando si è sposato, Robb tiene Vento Grigio lontano da sé.',
    },
  },
  gwJeyne158: {
    character: 'jeyne-westerling',
    type: { en: 'One who fears him', it: 'Una che ha paura di lui' },
    summary: {
      en: 'Robb’s wife, who is afraid of him.',
      it: 'La moglie di Robb, che ha paura di lui.',
    },
  },
  gwRolph158: {
    character: 'rolph-spicer',
    type: { en: 'Man he growls at', it: 'Uomo a cui ringhia' },
    summary: {
      en: 'The queen’s uncle. Grey Wind growls whenever he is near.',
      it: 'Lo zio della regina. Vento Grigio gli ringhia ogni volta che gli si avvicina.',
    },
  },
  gwCatelyn158: {
    character: 'catelyn-stark',
    type: { en: 'Robb’s mother', it: 'Madre di Robb' },
    summary: {
      en: 'Robb’s mother, who wants Grey Wind back at Robb’s side.',
      it: 'La madre di Robb, che vuole Vento Grigio di nuovo al fianco del figlio.',
    },
  },
  gwRobb193: {
    character: 'robb-stark',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy who raised him. At the Twins Grey Wind will not go through the gate, and Robb leaves him outside.',
      it: 'Il ragazzo che lo ha allevato. Alle Torri Gemelle Vento Grigio non vuole passare dalla porta, e Robb lo lascia fuori.',
    },
  },
  gwRaynald193: {
    character: 'raynald-westerling',
    type: { en: 'Keeper', it: 'Custode' },
    summary: {
      en: 'The queen’s brother, whom Robb leaves outside the gatehouse with him.',
      it: 'Il fratello della regina, che Robb lascia fuori dal corpo di guardia con lui.',
    },
  },
  gwLothar193: {
    character: 'lothar-frey',
    type: { en: 'Frey', it: 'Frey' },
    summary: {
      en: 'A son of Lord Walder, who says the wolf must fear the water and offers to give him to the master of hounds.',
      it: 'Un figlio di lord Walder, che dice che il lupo deve aver paura dell’acqua e si offre di affidarlo al maestro dei cani.',
    },
  },
  gwRaynald195: {
    character: 'raynald-westerling',
    type: { en: 'Keeper', it: 'Custode' },
    summary: {
      en: 'The queen’s brother, whom Robb left outside the gatehouse with him.',
      it: 'Il fratello della regina, che Robb aveva lasciato fuori dal corpo di guardia con lui.',
    },
  },
  gwRobb195: {
    character: 'robb-stark',
    type: { en: 'Master', it: 'Padrone' },
    summary: {
      en: 'The boy who raised him, who left him outside the gates of the Twins. Robb was killed in the hall while Grey Wind howled.',
      it: 'Il ragazzo che lo aveva allevato, e che lo aveva lasciato fuori dalle porte delle Torri Gemelle. Robb è stato ucciso nella sala mentre Vento Grigio ululava.',
    },
  },

  // The northern lords at the Red Wedding, and those away from it
  gjRobb29: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young lord he once drew steel on, and was the first to proclaim King in the North. Robb was killed at the Twins.',
      it: 'Il giovane lord contro cui aveva sguainato la spada, e che lui per primo aveva proclamato Re del Nord. Robb è stato ucciso alle Torri Gemelle.',
    },
  },
  gjGreyWind29: {
    character: 'grey-wind',
    type: { en: 'Wolf that bit him', it: 'Lupo che lo ha morso' },
    summary: {
      en: 'Robb’s direwolf, which knocked him down and bit off two of his fingers. Grey Wind was killed at the Twins.',
      it: 'Il metalupo di Robb, che lo aveva atterrato e gli aveva staccato due dita. Vento Grigio è stato ucciso alle Torri Gemelle.',
    },
  },
  gjRobb195: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young lord he once drew steel on, and was the first to proclaim King in the North. Robb was killed at the wedding feast.',
      it: 'Il giovane lord contro cui aveva sguainato la spada, e che lui per primo aveva proclamato Re del Nord. Robb è stato ucciso alla festa nuziale.',
    },
  },
  gjSmalljon195: {
    character: 'smalljon-umber',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'His son, who rode in Robb’s guard. He was killed shielding Robb in the hall.',
      it: 'Suo figlio, che cavalcava nella guardia di Robb. È stato ucciso nella sala mentre faceva scudo a Robb.',
    },
  },
  gjRoslin195: {
    character: 'roslin-frey',
    type: { en: 'Bride he carried', it: 'Sposa che ha portato' },
    summary: {
      en: 'Edmure’s bride, whom he carried weeping to the bedchamber.',
      it: 'La sposa di Edmure, che lui ha portato in lacrime nella camera nuziale.',
    },
  },
  sjRobb195: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young king he guarded. When the crossbows loosed, he threw a table over Robb to shield him, and Robb was killed all the same.',
      it: 'Il giovane re che proteggeva. Quando le balestre hanno tirato, ha rovesciato un tavolo su Robb per fargli scudo, e Robb è stato ucciso lo stesso.',
    },
  },
  sjGreatjon195: {
    character: 'greatjon-umber',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who drinks with the Freys at the wedding feast and carries the bride to bed.',
      it: 'Suo padre, che al banchetto beve con i Frey e porta la sposa a letto.',
    },
  },
  maRobb29: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young lord she marched south with, and proclaimed King in the North. He was killed at the Twins.',
      it: 'Il giovane lord con cui aveva marciato verso sud e che aveva proclamato Re del Nord. È stato ucciso alle Torri Gemelle.',
    },
  },
  maRobb195: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young lord she proclaimed King in the North, who sent her through the marshes before the wedding. He was killed at the Twins.',
      it: 'Il giovane lord che aveva proclamato Re del Nord, e che prima delle nozze l’aveva mandata tra le paludi. È stato ucciso alle Torri Gemelle.',
    },
  },
  maDacey195: {
    character: 'dacey-mormont',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'Her eldest daughter and heir, who rode in Robb’s guard. She was killed at the wedding feast.',
      it: 'La figlia maggiore ed erede, che cavalcava nella guardia di Robb. È stata uccisa alla festa nuziale.',
    },
  },
  daRobb195: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young king in whose guard she rode. At the wedding feast the crossbows brought him down.',
      it: 'Il giovane re nella cui guardia cavalcava. Alla festa nuziale le balestre lo hanno abbattuto.',
    },
  },
  daMaege195: {
    character: 'maege-mormont',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Her mother, the lady of Bear Island, sent away before the wedding on Robb’s errand.',
      it: 'Sua madre, la signora dell’Isola dell’Orso, mandata via prima delle nozze per un incarico di Robb.',
    },
  },
  daRyman195: {
    character: 'ryman-frey',
    type: { en: 'Killer', it: 'Assassino' },
    summary: {
      en: 'A Frey knight who came through the door she ran for and sank his axe into her.',
      it: 'Un cavaliere Frey che è entrato dalla porta verso cui lei correva e le ha piantato l’ascia nel ventre.',
    },
  },
  gaRobb29: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young lord he marched south with, and proclaimed King in the North. Robb was killed at the Twins.',
      it: 'Il giovane lord con cui aveva marciato verso sud e che aveva proclamato Re del Nord. Robb è stato ucciso alle Torri Gemelle.',
    },
  },
  gaRobb195: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The young lord he proclaimed King in the North, who sent him through the marshes before the wedding. Robb was killed at the Twins.',
      it: 'Il giovane lord che aveva proclamato Re del Nord, e che prima delle nozze lo aveva mandato tra le paludi. Robb è stato ucciso alle Torri Gemelle.',
    },
  },
  roRobb195: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'Lord Eddard’s heir, for whom Robett came to Winterfell. Robb was killed at the Twins.',
      it: 'L’erede di lord Eddard, per cui Robett era venuto a Grande Inverno. Robb è stato ucciso alle Torri Gemelle.',
    },
  },
  jaRobb189: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king whose host he joins on the march, with word that Balon Greyjoy is dead. Robb entrusts his mother to him after the wedding.',
      it: 'Il re al cui esercito si unisce durante la marcia, con la notizia che Balon Greyjoy è morto. Robb gli affida la madre per dopo le nozze.',
    },
  },
  jaCatelyn189: {
    character: 'catelyn-stark',
    type: { en: 'Lady in his charge', it: 'Signora affidata a lui' },
    summary: {
      en: 'Lady Stark, whom he has known since she was a girl. After the wedding he is to take her to Seagard.',
      it: 'Lady Stark, che conosce da quando era ragazza. Dopo le nozze dovrà portarla a Seagard.',
    },
  },
  jaRobb195: {
    character: 'robb-stark',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king whose host he joined on the march to the Twins. Robb was killed at the wedding feast.',
      it: 'Il re al cui esercito si era unito durante la marcia verso le Torri Gemelle. Robb è stato ucciso alla festa nuziale.',
    },
  },
  jaCatelyn195: {
    character: 'catelyn-stark',
    type: { en: 'Lady in his charge', it: 'Signora affidata a lui' },
    summary: {
      en: 'Lady Stark, whom he had known since she was a girl and was to take to Seagard. She was killed at the Twins.',
      it: 'Lady Stark, che conosceva da quando era ragazza e che doveva portare a Seagard. È stata uccisa alle Torri Gemelle.',
    },
  },
  weRobb195: {
    character: 'robb-stark',
    type: { en: 'Liege', it: 'Signore' },
    summary: {
      en: 'Lord Eddard’s heir, for whom the men of House Manderly marched. He was killed at the same feast as Ser Wendel.',
      it: 'L’erede di lord Eddard, per cui marciavano gli uomini di Casa Manderly. È stato ucciso allo stesso banchetto di ser Wendel.',
    },
  },
  weCatelyn195: {
    character: 'catelyn-stark',
    type: { en: 'Lady he escorted', it: 'Signora che ha scortato' },
    summary: {
      en: 'Lord Eddard’s wife, with whom Ser Wendel rode to join Robb’s host. She was killed at the wedding feast.',
      it: 'La moglie di lord Eddard, con cui ser Wendel aveva cavalcato per raggiungere l’esercito di Robb. È stata uccisa alla festa nuziale.',
    },
  },

  // The past tense for Catelyn and Robb on the pages of those who met them
  stCatelyn29: {
    character: 'catelyn-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'Lady Stark, who came to the Twins to bargain for her son’s crossing.',
      it: 'Lady Stark, che era venuta alle Torri Gemelle a trattare il passaggio di suo figlio.',
    },
  },
  lyCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'Her sister, who came to the Eyrie with Tyrion Lannister as her prisoner.',
      it: 'Sua sorella, che era arrivata al Nido dell’Aquila con Tyrion Lannister prigioniero.',
    },
  },
  rnCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Aunt', it: 'Zia' },
    summary: {
      en: 'His mother’s sister, who came to the Eyrie.',
      it: 'La sorella di sua madre, che era venuta al Nido dell’Aquila.',
    },
  },
  dnCatelyn195: {
    character: 'catelyn-stark',
    type: { en: 'Lady he rescued', it: 'Signora che ha salvato' },
    summary: {
      en: 'Lady Stark, whose party his men rescued in the mountains on the way to the Bloody Gate.',
      it: 'Lady Stark, il cui gruppo era stato salvato dai suoi uomini tra le montagne, sulla strada per la Porta Insanguinata.',
    },
  },
  myCatelyn195: {
    character: 'catelyn-stark',
    type: { en: 'Traveller she guided', it: 'Viaggiatrice che ha guidato' },
    summary: {
      en: 'Lady Stark, whom she guided up the mountain to the Eyrie by night.',
      it: 'Lady Stark, che lei aveva guidato di notte su per la montagna fino al Nido dell’Aquila.',
    },
  },
  neCatelyn195: {
    character: 'catelyn-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'Lady Stark, whom he received at the Gates of the Moon with her prisoner.',
      it: 'Lady Stark, che lui aveva accolto con il suo prigioniero alle Porte della Luna.',
    },
  },
  mrCatelyn: {
    character: 'catelyn-stark',
    type: { en: 'Lady he followed', it: 'Signora che ha seguito' },
    summary: {
      en: 'A lady travelling in secret, whom he tried to charm at the inn. When she seized Tyrion, he followed her party in the hope of a song.',
      it: 'Una signora in viaggio in segreto, che lui aveva provato a conquistare alla locanda. Quando lei aveva fatto arrestare Tyrion, aveva seguito il suo gruppo sperando di trarne una canzone.',
    },
  },
  wwCatelyn195: {
    character: 'catelyn-stark',
    type: { en: 'Lady he backed', it: 'Signora che ha sostenuto' },
    summary: {
      en: 'Lady Stark, for whom he drew his sword at the inn.',
      it: 'Lady Stark, per cui aveva sguainato la spada alla locanda.',
    },
  },
  haCatelyn195: {
    character: 'catelyn-stark',
    type: { en: 'Lady', it: 'Signora' },
    summary: {
      en: 'The lady of Winterfell, to whom he reported on the search after a man tried to kill Bran.',
      it: 'La signora di Grande Inverno, a cui aveva riferito le ricerche dopo che un uomo aveva cercato di uccidere Bran.',
    },
  },
  haRobb195: {
    character: 'robb-stark',
    type: { en: 'Young lord', it: 'Giovane lord' },
    summary: {
      en: 'Lord Eddard’s heir, with whom he came to Catelyn after the attack.',
      it: 'L’erede di lord Eddard, con cui si era presentato da Catelyn dopo l’aggressione.',
    },
  },
  msCatelyn29: {
    character: 'catelyn-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'A guest at her inn, who had Tyrion Lannister seized under her roof.',
      it: 'Un’ospite della sua locanda, che aveva fatto arrestare Tyrion Lannister sotto il suo tetto.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * Stage 3's King's Landing cards for the season-1 cast (#1651): season 3
 * and A Storm of Swords through chapter 52, episodes 21 to 30 and chapters
 * 144 to 196. The new characters' own cards are in
 * `season-3.relationships.ts`.
 */
const kingsLanding3 = {
  // Tyrion, the show
  tyrTywinDisowns: {
    character: 'tywin-lannister',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, the Hand. When Tyrion asks for Casterly Rock, Tywin refuses, gives him no credit for the battle and blames him for his mother’s death in childbirth.',
      it: 'Suo padre, il Primo Cavaliere. Quando Tyrion gli chiede Castel Granito, Tywin rifiuta, non gli riconosce alcun merito per la battaglia e gli rinfaccia la morte della madre durante il parto.',
    },
  },
  tyrBronnKnight: {
    character: 'bronn',
    type: { en: 'Sellsword', it: 'Mercenario' },
    summary: {
      en: 'Ser Bronn of the Blackwater now, knighted for the battle. He hears out Tyrion’s anger at his father, and wants better pay.',
      it: 'Ora è ser Bronn delle Acque Nere, fatto cavaliere per la battaglia. Ascolta la rabbia di Tyrion contro il padre, e vuole una paga più alta.',
    },
  },
  tyrShaeHidden: {
    character: 'shae',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'His lover, whom he brought to the capital against his father’s order. Tywin holds it against him.',
      it: 'La sua amante, che ha portato nella capitale contro l’ordine del padre. Tywin glielo rinfaccia.',
    },
  },
  tyrTywinSansa: {
    character: 'tywin-lannister',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who orders him to marry Sansa Stark, the key to the North, as his reward for the battle. Tyrion’s refusal changes nothing.',
      it: 'Suo padre, che gli ordina di sposare Sansa Stark, la chiave del Nord, come ricompensa per la battaglia. Il rifiuto di Tyrion non cambia nulla.',
    },
  },
  tyrSansaBride: {
    character: 'sansa-stark',
    type: { en: 'Bride forced on him', it: 'Sposa imposta' },
    summary: {
      en: 'The Stark girl his father means him to marry, to keep her from the Tyrells. Tyrion thinks it cruel after all Joffrey has done to her.',
      it: 'La ragazza Stark che suo padre vuole fargli sposare, per sottrarla ai Tyrell. A Tyrion sembra una crudeltà, dopo tutto ciò che Joffrey le ha fatto.',
    },
  },
  tyrOlenna: {
    character: 'olenna-tyrell',
    type: { en: 'Tyrell matriarch', it: 'Matriarca dei Tyrell' },
    summary: {
      en: 'Margaery’s grandmother. He goes to her about the cost of the royal wedding, and she agrees to pay half.',
      it: 'La nonna di Margaery. Tyrion va da lei per il costo delle nozze reali, e lei accetta di pagarne metà.',
    },
  },
  tyrCerseiGloats: {
    character: 'cersei-lannister',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, who gloats over his match until their father orders her to marry Loras Tyrell.',
      it: 'Sua sorella, che gongola per il suo matrimonio finché il padre non le ordina di sposare Loras Tyrell.',
    },
  },
  tyrShaeSansa: {
    character: 'shae',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'His lover, Sansa’s handmaiden. She asks him to protect Sansa from Littlefinger, and he says he no longer has the power.',
      it: 'La sua amante, ancella di Sansa. Gli chiede di proteggere Sansa da Ditocorto, e lui risponde che non ne ha più il potere.',
    },
  },
  tyrSansaWife: {
    character: 'sansa-stark',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His bride. Before the wedding he promises not to mistreat her; that night he tells her he will not touch her unless she wants him to.',
      it: 'La sua sposa. Prima delle nozze le promette che non la tratterà male; quella notte le dice che non la toccherà se non sarà lei a volerlo.',
    },
  },
  tyrJoffreyThreat: {
    character: 'joffrey-baratheon',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'The king, who mocks him at the wedding and calls for the bedding. Tyrion drives his dagger into the table and threatens him, then plays the drunk.',
      it: 'Il re, che lo deride alle nozze e pretende la messa a letto degli sposi. Tyrion pianta il pugnale nel tavolo e lo minaccia, poi si finge ubriaco.',
    },
  },
  tyrTywinWedding: {
    character: 'tywin-lannister',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who silences the court with a look at the wedding, and ends the quarrel over the bedding by blaming Tyrion’s drink.',
      it: 'Suo padre, che alle nozze zittisce la corte con uno sguardo, e chiude la lite sulla messa a letto dando la colpa al vino di Tyrion.',
    },
  },
  tyrShaeEnds: {
    character: 'shae',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'His lover, who tells him she will not sleep with him once he has married Sansa.',
      it: 'La sua amante, che gli dice che non dormirà più con lui quando avrà sposato Sansa.',
    },
  },
  tyrBronnAdvice: {
    character: 'bronn',
    type: { en: 'Sellsword', it: 'Mercenario' },
    summary: {
      en: 'Ser Bronn, who tells him to marry Sansa, get an heir on her and keep Shae on the side.',
      it: 'Ser Bronn, che gli consiglia di sposare Sansa, darle un erede e tenersi Shae di nascosto.',
    },
  },
  tyrTywinRedWedding: {
    character: 'tywin-lannister',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who admits he arranged the slaughter of Robb Stark and his mother at a wedding. He tells Tyrion he once wanted to throw him into the sea.',
      it: 'Suo padre, che ammette di aver organizzato il massacro di Robb Stark e di sua madre durante un matrimonio. Gli dice che un tempo avrebbe voluto gettarlo in mare.',
    },
  },
  tyrSansaGrief: {
    character: 'sansa-stark',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His wife. They walk in the gardens; then word comes that her mother and brother were killed, and he leaves her to her grief.',
      it: 'Sua moglie. Passeggiano nei giardini; poi arriva la notizia che sua madre e suo fratello sono stati uccisi, e lui la lascia al suo dolore.',
    },
  },
  tyrJoffreyHead: {
    character: 'joffrey-baratheon',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'The king, who wants Robb’s head served to Sansa at his wedding feast. Tyrion forbids it.',
      it: 'Il re, che vuole far servire a Sansa la testa di Robb al suo banchetto di nozze. Tyrion glielo proibisce.',
    },
  },
  // Tyrion, the books
  tyrTywinRock: {
    character: 'tywin-lannister',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, now Hand. He gives Tyrion no thanks for the battle, refuses him Casterly Rock, and warns that he will hang the next prostitute Tyrion sleeps with.',
      it: 'Suo padre, ora Primo Cavaliere. Non lo ringrazia per la battaglia, gli nega Castel Granito e lo avverte che impiccherà la prossima prostituta con cui Tyrion andrà a letto.',
    },
  },
  tyrBronnNews: {
    character: 'bronn',
    type: { en: 'Sellsword', it: 'Mercenario' },
    summary: {
      en: 'Ser Bronn now, knighted for the battle. He brings Tyrion the city’s news and carries him up the steps to his father.',
      it: 'Ora è ser Bronn, fatto cavaliere per la battaglia. Porta a Tyrion le notizie della città e lo porta in braccio su per le scale fino dal padre.',
    },
  },
  tyrPodDress: {
    character: 'podrick-payne',
    type: { en: 'Squire', it: 'Scudiero' },
    summary: {
      en: 'His squire, who helps him dress to go to his father.',
      it: 'Il suo scudiero, che lo aiuta a vestirsi per andare dal padre.',
    },
  },
  tyrCerseiMandon: {
    character: 'cersei-lannister',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister. He sets Bronn to find out whether she sent Ser Mandon to kill him.',
      it: 'Sua sorella. Incarica Bronn di scoprire se è stata lei a mandare ser Mandon a ucciderlo.',
    },
  },
  tyrShaeStays: {
    character: 'shae',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'His lover, brought to him in Varys’s rooms. He means to send her out of his father’s reach; she wants to stay, and he cannot part with her.',
      it: 'La sua amante, che gli viene portata nelle stanze di Varys. Lui vuole mandarla lontano dal padre; lei vuole restare, e lui non riesce a separarsene.',
    },
  },
  tyrVarysOnce: {
    character: 'varys',
    type: { en: 'Master of whisperers', it: 'Maestro dei sussurri' },
    summary: {
      en: 'The eunuch whose rooms he searches for hidden passages. Varys gives him the court’s news and brings Shae to him. Tyrion means to use him this one last time.',
      it: 'L’eunuco nelle cui stanze cerca passaggi segreti. Varys gli dà le notizie della corte e gli porta Shae. Tyrion conta di servirsene un’ultima volta.',
    },
  },
  tyrBronnSinger: {
    character: 'bronn',
    type: { en: 'Sellsword', it: 'Mercenario' },
    summary: {
      en: 'Ser Bronn, fetched from a brothel and sent to find the singer who knows about Shae.',
      it: 'Ser Bronn, ripescato in un bordello e mandato a cercare il cantore che sa di Shae.',
    },
  },
  tyrTywinSansaBook: {
    character: 'tywin-lannister',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who orders him to marry Sansa Stark so that their son could one day hold Winterfell. If he refuses, Sansa goes to a cousin and Tyrion to Lollys.',
      it: 'Suo padre, che gli ordina di sposare Sansa Stark perché un loro figlio possa un giorno avere Grande Inverno. Se rifiuta, Sansa andrà a un cugino e Tyrion a Lollys.',
    },
  },
  tyrSansaPromised: {
    character: 'sansa-stark',
    type: { en: 'Bride forced on him', it: 'Sposa imposta' },
    summary: {
      en: 'The Stark girl he is ordered to marry. He argues that she is still a child, and that she should be sent back to her mother.',
      it: 'La ragazza Stark che gli viene ordinato di sposare. Obietta che è ancora una bambina, e che bisognerebbe rimandarla da sua madre.',
    },
  },
  tyrPetyrWary: {
    character: 'petyr-baelish',
    type: { en: 'Predecessor', it: 'Predecessore' },
    summary: {
      en: 'The master of coin who leaves to marry Lysa Arryn. Tyrion takes his post, and warns his family not to trust him.',
      it: 'Il maestro del conio che parte per sposare Lysa Arryn. Tyrion prende il suo posto, e avverte la famiglia di non fidarsi di lui.',
    },
  },
  tyrCerseiWillas: {
    character: 'cersei-lannister',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, whom their father offers to Willas Tyrell. She refuses and storms out.',
      it: 'Sua sorella, che il padre offre in moglie a Willas Tyrell. Lei rifiuta ed esce furiosa.',
    },
  },
  tyrSansaWifeBook: {
    character: 'sansa-stark',
    type: { en: 'Wife', it: 'Moglie' },
    summary: {
      en: 'His bride. At the ceremony she will not bend for his cloak; that night he sees her fear, and promises not to touch her until she wants him.',
      it: 'La sua sposa. Alla cerimonia non si piega perché lui le metta il mantello; quella notte lui vede la sua paura, e le promette che non la toccherà finché non sarà lei a volerlo.',
    },
  },
  tyrJoffreyBedding: {
    character: 'joffrey-baratheon',
    type: { en: 'Nephew', it: 'Nipote' },
    summary: {
      en: 'The king, who wants the bedding at the wedding. Tyrion has to threaten him to stop it.',
      it: 'Il re, che alle nozze vuole la messa a letto degli sposi. Tyrion deve minacciarlo per fermarla.',
    },
  },
  tyrOberyn: {
    character: 'oberyn-martell',
    type: { en: 'Dornish prince', it: 'Principe dorniano' },
    summary: {
      en: 'The prince he rides out to meet, leading the Dornishmen in his brother’s place. Oberyn recalls him as a baby and asks when justice will be done for Elia.',
      it: 'Il principe che va ad accogliere, alla testa dei dorniani al posto del fratello. Oberyn lo ricorda in fasce e gli chiede quando sarà fatta giustizia per Elia.',
    },
  },
  tyrTywinConsummate: {
    character: 'tywin-lannister',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'His father, who tells him to bed his wife, and shows him the two Valyrian steel swords made for Joffrey and Jaime.',
      it: 'Suo padre, che gli ordina di consumare il matrimonio e gli mostra le due spade d’acciaio di Valyria forgiate per Joffrey e Jaime.',
    },
  },
  tyrBronnKill: {
    character: 'bronn',
    type: { en: 'Sellsword', it: 'Mercenario' },
    summary: {
      en: 'Ser Bronn, whom he orders to kill the singer who threatens to tell about Shae.',
      it: 'Ser Bronn, a cui ordina di uccidere il cantore che minaccia di rivelare la storia di Shae.',
    },
  },

  // Sansa, the show
  sanOlenna: {
    character: 'olenna-tyrell',
    type: { en: 'Margaery’s grandmother', it: 'Nonna di Margaery' },
    summary: {
      en: 'Lady Olenna, who wants the truth about Joffrey. Sansa tells her how he killed her father, then blurts out that the king is a monster.',
      it: 'Lady Olenna, che vuole la verità su Joffrey. Sansa le racconta come ha ucciso suo padre, poi si lascia sfuggire che il re è un mostro.',
    },
  },
  sanLorasEscort: {
    character: 'loras-tyrell',
    type: { en: 'Knight of Flowers', it: 'Cavaliere di Fiori' },
    summary: {
      en: 'Margaery’s brother, who escorts her to the gardens. She reminds him that they met at the Hand’s tourney.',
      it: 'Il fratello di Margaery, che la accompagna nei giardini. Lei gli ricorda che si sono conosciuti al torneo del Primo Cavaliere.',
    },
  },
  sanMargaeryWelcome: {
    character: 'margaery-tyrell',
    type: { en: 'Joffrey’s bride to be', it: 'Futura sposa di Joffrey' },
    summary: {
      en: 'The king’s bride to be, who welcomes her among the Tyrells with her grandmother.',
      it: 'La futura sposa del re, che insieme alla nonna la accoglie tra i Tyrell.',
    },
  },
  sanShaeWarns: {
    character: 'shae',
    type: { en: 'Handmaiden', it: 'Ancella' },
    summary: {
      en: 'Her handmaiden, who warns her that Littlefinger’s help is not free and that he wants her.',
      it: 'La sua ancella, che la avverte che l’aiuto di Ditocorto non è gratis e che lui la desidera.',
    },
  },
  sanPetyrShip: {
    character: 'petyr-baelish',
    type: { en: 'Lord who offers help', it: 'Lord che offre aiuto' },
    summary: {
      en: 'Littlefinger, who finds her at the docks and offers to take her away on his ship when he leaves the city.',
      it: 'Ditocorto, che la trova al porto e le offre di portarla via sulla sua nave quando lascerà la città.',
    },
  },
  sanMargaeryLoras: {
    character: 'margaery-tyrell',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'Margaery, who finds her in the godswood and proposes that she marry Loras and live among the Tyrells. Sansa weeps for joy.',
      it: 'Margaery, che la trova nel parco degli dei e le propone di sposare Loras e vivere tra i Tyrell. Sansa piange di gioia.',
    },
  },
  sanLorasMatch: {
    character: 'loras-tyrell',
    type: { en: 'Intended husband', it: 'Promesso sposo' },
    summary: {
      en: 'The Knight of Flowers, whom the Tyrells now mean her to marry.',
      it: 'Il Cavaliere di Fiori, che ora i Tyrell vogliono darle in sposo.',
    },
  },
  sanTyrionNews: {
    character: 'tyrion-lannister',
    type: { en: 'Husband to be', it: 'Futuro marito' },
    summary: {
      en: 'The queen’s brother, who comes to her chambers to tell her she is to marry him.',
      it: 'Il fratello della regina, che viene nelle sue stanze a dirle che dovrà sposare lui.',
    },
  },
  sanLorasWedding: {
    character: 'loras-tyrell',
    type: { en: 'Intended husband', it: 'Promesso sposo' },
    summary: {
      en: 'The Knight of Flowers. He talks of the feast and her gown more than of her, and agrees that the Red Keep is the worst place there is.',
      it: 'Il Cavaliere di Fiori. Parla del banchetto e dell’abito di Sansa più che di lei, e conviene che la Fortezza Rossa sia il posto peggiore che ci sia.',
    },
  },
  sanPetyrGone: {
    character: 'petyr-baelish',
    type: { en: 'Lord who offered help', it: 'Lord che offriva aiuto' },
    summary: {
      en: 'Littlefinger, whose offer to take her away she put off. She weeps as his ship sails without her.',
      it: 'Ditocorto, di cui ha rimandato l’offerta di portarla via. Piange mentre la sua nave parte senza di lei.',
    },
  },
  sanTyrionHusband: {
    character: 'tyrion-lannister',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Her husband. Before the wedding he promises not to mistreat her; that night he says he will not touch her unless she wants it.',
      it: 'Suo marito. Prima delle nozze le promette che non la tratterà male; quella notte le dice che non la toccherà se non sarà lei a volerlo.',
    },
  },
  sanJoffreyWedding: {
    character: 'joffrey-baratheon',
    type: { en: 'Former betrothed', it: 'Ex promesso sposo' },
    summary: {
      en: 'The king, who walks her to the altar in her father’s place, mocks her at the feast and says he may take her after Tyrion.',
      it: 'Il re, che la accompagna all’altare al posto di suo padre, la deride al banchetto e dice che potrebbe prenderla dopo Tyrion.',
    },
  },
  sanMargaeryConsoles: {
    character: 'margaery-tyrell',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'Margaery, who consoles her about the match and tells her Tyrion is far from the worst Lannister.',
      it: 'Margaery, che la consola per il matrimonio e le dice che Tyrion è tutt’altro che il peggiore dei Lannister.',
    },
  },
  sanTyrionGardens: {
    character: 'tyrion-lannister',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Her husband. She walks the gardens with him and jokes about paying back those who mock him, before word comes of her family.',
      it: 'Suo marito. Passeggia con lui nei giardini e scherza su come vendicarsi di chi lo deride, prima che arrivi la notizia sulla sua famiglia.',
    },
  },
  sanRobbDead: {
    character: 'robb-stark',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, the King in the North. She learns that he was killed at a wedding.',
      it: 'Suo fratello, il Re del Nord. Viene a sapere che è stato ucciso durante un matrimonio.',
    },
  },
  sanCatelynDead: {
    character: 'catelyn-stark',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'Her mother, killed at the same wedding as Robb.',
      it: 'Sua madre, uccisa allo stesso matrimonio di Robb.',
    },
  },
  // Sansa, the books
  sanOlennaBooks: {
    character: 'olenna-tyrell',
    type: { en: 'Margaery’s grandmother', it: 'Nonna di Margaery' },
    summary: {
      en: 'The Queen of Thorns. She drowns their talk in a fool’s song, hears Sansa whisper that Joffrey is a monster, and offers her a visit to Highgarden and her grandson Willas.',
      it: 'La Regina di Spine. Copre le loro parole con la canzone di un buffone, sente Sansa sussurrare che Joffrey è un mostro e le propone di andare ad Alto Giardino e di sposare suo nipote Willas.',
    },
  },
  sanMargaeryInvite: {
    character: 'margaery-tyrell',
    type: { en: 'Joffrey’s bride to be', it: 'Futura sposa di Joffrey' },
    summary: {
      en: 'The king’s bride to be, who invites her to sup with her grandmother.',
      it: 'La futura sposa del re, che la invita a cena con la nonna.',
    },
  },
  sanLorasForgets: {
    character: 'loras-tyrell',
    type: { en: 'Knight of Flowers', it: 'Cavaliere di Fiori' },
    summary: {
      en: 'Margaery’s brother, now of the Kingsguard, who escorts her. He does not remember the rose he gave her, and her talk of Renly upsets him.',
      it: 'Il fratello di Margaery, ora nella Guardia reale, che la accompagna. Non ricorda la rosa che le aveva dato, e le sue parole su Renly lo turbano.',
    },
  },
  sanJoffreyMonster: {
    character: 'joffrey-baratheon',
    type: { en: 'Former betrothed', it: 'Ex promesso sposo' },
    summary: {
      en: 'The king she is no longer to marry. She fears for Margaery, who will.',
      it: 'Il re che non deve più sposare. Teme per Margaery, che lo sposerà.',
    },
  },
  sanMargaeryClose: {
    character: 'margaery-tyrell',
    type: { en: 'Friend', it: 'Amica' },
    summary: {
      en: 'Margaery, a friend now. She says she does not fear Joffrey, because Loras is in the Kingsguard to protect her.',
      it: 'Margaery, ormai un’amica. Dice di non temere Joffrey, perché Loras è nella Guardia reale per proteggerla.',
    },
  },
  sanDontosWary: {
    character: 'dontos-hollard',
    type: { en: 'Would-be rescuer', it: 'Possibile salvatore' },
    summary: {
      en: 'The fool she meets in the godswood. He warns her that the Tyrells want her only for Winterfell, and says they will escape on Joffrey’s wedding day.',
      it: 'Il buffone che incontra nel parco degli dei. La avverte che i Tyrell la vogliono solo per Grande Inverno, e le dice che fuggiranno il giorno delle nozze di Joffrey.',
    },
  },
  sanTyrionWedBook: {
    character: 'tyrion-lannister',
    type: { en: 'Husband', it: 'Marito' },
    summary: {
      en: 'Her husband, wed the day she learns of it. He tells her the match was his father’s wish; that night he promises not to touch her until she wants him.',
      it: 'Suo marito, sposato il giorno stesso in cui lo viene a sapere. Le dice che è stato suo padre a volerlo; quella notte le promette che non la toccherà finché non sarà lei a volerlo.',
    },
  },
  sanCerseiNews: {
    character: 'cersei-lannister',
    type: { en: 'Queen', it: 'Regina' },
    summary: {
      en: 'The queen, who has a gown made for her and tells her, as she dresses, that she will marry Tyrion that afternoon.',
      it: 'La regina, che le fa fare un abito e, mentre Sansa si veste, le annuncia che quel pomeriggio sposerà Tyrion.',
    },
  },
  sanGarlan: {
    character: 'garlan-tyrell',
    type: { en: 'Wedding guest', it: 'Invitato alle nozze' },
    summary: {
      en: 'Margaery’s brother, who comforts her at the wedding feast and tells her there is more to Tyrion than his size.',
      it: 'Il fratello di Margaery, che la consola al banchetto di nozze e le dice che in Tyrion c’è più di quanto lasci credere la sua statura.',
    },
  },
  sanJoffreyBedding: {
    character: 'joffrey-baratheon',
    type: { en: 'Former betrothed', it: 'Ex promesso sposo' },
    summary: {
      en: 'The king, who presses for the bedding at her wedding until Tyrion threatens him.',
      it: 'Il re, che alle sue nozze insiste per la messa a letto degli sposi finché Tyrion non lo minaccia.',
    },
  },

  // Tywin, the show
  tywTyrionDisown: {
    character: 'tyrion-lannister',
    type: { en: 'Younger son', it: 'Figlio minore' },
    summary: {
      en: 'His younger son, who asks for Casterly Rock. Tywin refuses, gives him no credit for the battle and blames him for his mother’s death.',
      it: 'Il figlio minore, che gli chiede Castel Granito. Tywin rifiuta, non gli riconosce alcun merito per la battaglia e gli rinfaccia la morte della madre.',
    },
  },
  tywShae: {
    character: 'shae',
    type: { en: 'Son’s mistress', it: 'Amante del figlio' },
    summary: {
      en: 'Tyrion’s mistress, brought to the capital against his order.',
      it: 'L’amante di Tyrion, portata nella capitale contro il suo ordine.',
    },
  },
  tywPetyr: {
    character: 'petyr-baelish',
    type: { en: 'Master of coin', it: 'Maestro del conio' },
    summary: {
      en: 'Littlefinger, who pushes to sit beside him at the first council. Tywin sends him to win Lysa Arryn, with the title of Harrenhal to make him worthy of her.',
      it: 'Ditocorto, che al primo concilio si fa largo per sedergli accanto. Tywin lo manda a conquistare Lysa Arryn, con il titolo di Harrenhal a renderlo degno di lei.',
    },
  },
  tywVarys: {
    character: 'varys',
    type: { en: 'Master of whisperers', it: 'Maestro dei sussurri' },
    summary: {
      en: 'The eunuch, who reports the war to the council. For all his spies, he cannot find Jaime.',
      it: 'L’eunuco, che riferisce al concilio sulla guerra. Nonostante tutte le sue spie, non riesce a trovare Jaime.',
    },
  },
  tywPycelle: {
    character: 'pycelle',
    type: { en: 'Grand Maester', it: 'Gran maestro' },
    summary: {
      en: 'The Grand Maester, who takes his seat at the council without fighting for a better one.',
      it: 'Il gran maestro, che prende posto al concilio senza contendersi un posto migliore.',
    },
  },
  tywCerseiChair: {
    character: 'cersei-lannister',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, who pulls up a chair at his right hand at the first council.',
      it: 'Sua figlia, che al primo concilio si porta una sedia alla sua destra.',
    },
  },
  tywTyrionCoin: {
    character: 'tyrion-lannister',
    type: { en: 'Younger son', it: 'Figlio minore' },
    summary: {
      en: 'His younger son, who drags his chair to the far end of the table. Tywin names him master of coin in Littlefinger’s place.',
      it: 'Il figlio minore, che trascina la sua sedia in fondo al tavolo. Tywin lo nomina maestro del conio al posto di Ditocorto.',
    },
  },
  tywTyrionMarry: {
    character: 'tyrion-lannister',
    type: { en: 'Younger son', it: 'Figlio minore' },
    summary: {
      en: 'His younger son, whom he orders to marry Sansa Stark as his reward for the battle.',
      it: 'Il figlio minore, a cui ordina di sposare Sansa Stark come ricompensa per la battaglia.',
    },
  },
  tywCerseiMarry: {
    character: 'cersei-lannister',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, whom he tells she is not as clever as she thinks, then orders to marry Loras Tyrell. He will not hear her plead.',
      it: 'Sua figlia, a cui dice che non è intelligente quanto crede, e poi ordina di sposare Loras Tyrell. Non ascolta le sue suppliche.',
    },
  },
  tywOlenna: {
    character: 'olenna-tyrell',
    type: { en: 'Tyrell matriarch', it: 'Matriarca dei Tyrell' },
    summary: {
      en: 'Lady Olenna, who refuses Loras for Cersei until he threatens to put Loras in the Kingsguard.',
      it: 'Lady Olenna, che rifiuta Loras per Cersei finché Tywin non minaccia di metterlo nella Guardia reale.',
    },
  },
  tywSansaKey: {
    character: 'sansa-stark',
    type: { en: 'Key to the North', it: 'Chiave del Nord' },
    summary: {
      en: 'The Stark girl, whose younger brothers are thought dead. He will not let the Tyrells take the North through her.',
      it: 'La ragazza Stark, i cui fratelli minori sono creduti morti. Tywin non lascerà che i Tyrell si prendano il Nord attraverso di lei.',
    },
  },
  tywLoras: {
    character: 'loras-tyrell',
    type: { en: 'Daughter’s intended', it: 'Promesso della figlia' },
    summary: {
      en: 'The Knight of Flowers, whom he means Cersei to marry.',
      it: 'Il Cavaliere di Fiori, che vuole dare in sposo a Cersei.',
    },
  },
  tywJoffreyBed: {
    character: 'joffrey-baratheon',
    type: { en: 'Grandson', it: 'Nipote' },
    summary: {
      en: 'His grandson the king. When Joffrey defies him before the council, Tywin tells him a true king has no need to say so, and has him sent to bed.',
      it: 'Suo nipote, il re. Quando Joffrey lo sfida davanti al concilio, Tywin gli dice che un vero re non ha bisogno di ricordarlo, e lo fa mandare a letto.',
    },
  },
  tywTyrionFrey: {
    character: 'tyrion-lannister',
    type: { en: 'Younger son', it: 'Figlio minore' },
    summary: {
      en: 'His younger son, who guesses that Tywin arranged the slaughter at the Frey wedding. Tywin admits it, and presses him to give Sansa a child.',
      it: 'Il figlio minore, che capisce che dietro la strage al matrimonio dei Frey c’è suo padre. Tywin lo ammette, e insiste perché dia un figlio a Sansa.',
    },
  },
  tywWalder: {
    character: 'walder-frey',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'The old lord he dealt with to destroy Robb Stark at a wedding under Frey’s roof.',
      it: 'Il vecchio lord con cui si è accordato per eliminare Robb Stark a un matrimonio sotto il tetto dei Frey.',
    },
  },
  tywRobbDead: {
    character: 'robb-stark',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The King in the North, killed with his mother at the Frey wedding Tywin arranged.',
      it: 'Il Re del Nord, ucciso con la madre al matrimonio dei Frey organizzato da Tywin.',
    },
  },
  tywCerseiBed: {
    character: 'cersei-lannister',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, whom he tells to see the king to bed.',
      it: 'Sua figlia, a cui dice di accompagnare il re a letto.',
    },
  },
  // Tywin, the books
  tywTyrionBook: {
    character: 'tyrion-lannister',
    type: { en: 'Younger son', it: 'Figlio minore' },
    summary: {
      en: 'His son, who asks for gratitude and for Casterly Rock. Tywin gives neither, and warns that he will hang the next prostitute Tyrion sleeps with.',
      it: 'Il figlio, che gli chiede gratitudine e Castel Granito. Tywin non gli concede né l’una né l’altro, e lo avverte che impiccherà la prossima prostituta con cui andrà a letto.',
    },
  },
  tywPetyrBook: {
    character: 'petyr-baelish',
    type: { en: 'Lord of Harrenhal', it: 'Lord di Harrenhal' },
    summary: {
      en: 'Lord of Harrenhal in name only while Roose Bolton holds the castle, but useful in winning the Tyrells.',
      it: 'Lord di Harrenhal solo di nome finché Roose Bolton tiene il castello, ma utile per conquistare i Tyrell.',
    },
  },
  tywGregorBook: {
    character: 'gregor-clegane',
    type: { en: 'Bannerman', it: 'Alfiere' },
    summary: {
      en: 'The knight he sends with Lord Tarly against the northmen marching on the coast. He is loath to hand him over to Prince Doran.',
      it: 'Il cavaliere che manda con lord Tarly contro i nordici in marcia verso la costa. È restio a consegnarlo al principe Doran.',
    },
  },
  tywTyrionSansaBook: {
    character: 'tyrion-lannister',
    type: { en: 'Younger son', it: 'Figlio minore' },
    summary: {
      en: 'His son, whom he orders to marry Sansa Stark so that their son might rule Winterfell. If Tyrion refuses, Sansa goes to a cousin and he to Lollys.',
      it: 'Il figlio, a cui ordina di sposare Sansa Stark perché un loro figlio possa governare Grande Inverno. Se Tyrion rifiuta, Sansa andrà a un cugino e lui a Lollys.',
    },
  },
  tywCerseiWillas: {
    character: 'cersei-lannister',
    type: { en: 'Daughter', it: 'Figlia' },
    summary: {
      en: 'His daughter, whom he offers to Willas Tyrell. She refuses; the last word is his.',
      it: 'Sua figlia, che offre in moglie a Willas Tyrell. Lei rifiuta; l’ultima parola spetta a lui.',
    },
  },
  tywPetyrVale: {
    character: 'petyr-baelish',
    type: { en: 'Envoy to the Vale', it: 'Inviato nella Valle' },
    summary: {
      en: 'Littlefinger, who goes to wed Lysa Arryn and deliver the Vale. He has proved loyal by telling of the Tyrells’ plan for Sansa.',
      it: 'Ditocorto, che parte per sposare Lysa Arryn e consegnargli la Valle. Si è dimostrato leale rivelando il piano dei Tyrell su Sansa.',
    },
  },
  tywSansaBook: {
    character: 'sansa-stark',
    type: { en: 'Key to the North', it: 'Chiave del Nord' },
    summary: {
      en: 'The Stark girl the Tyrells mean to wed to Willas. Tywin gives her to Tyrion instead.',
      it: 'La ragazza Stark che i Tyrell vogliono dare in moglie a Willas. Tywin la dà invece a Tyrion.',
    },
  },
  tywKevan: {
    character: 'kevan-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'His brother, who brings Balon Greyjoy’s terms to the council and stays behind with the family.',
      it: 'Suo fratello, che porta al concilio le condizioni di Balon Greyjoy e resta con la famiglia dopo la riunione.',
    },
  },
  tywTyrionBed: {
    character: 'tyrion-lannister',
    type: { en: 'Younger son', it: 'Figlio minore' },
    summary: {
      en: 'His son, whom he tells to bed his wife. He shows him the two Valyrian steel swords forged for Joffrey and Jaime.',
      it: 'Il figlio, a cui ordina di consumare il matrimonio. Gli mostra le due spade d’acciaio di Valyria forgiate per Joffrey e Jaime.',
    },
  },
  tywMace: {
    character: 'mace-tyrell',
    type: { en: 'Ally', it: 'Alleato' },
    summary: {
      en: 'Lord Tyrell, who turns down Cersei as a bride for Willas.',
      it: 'Lord Tyrell, che rifiuta Cersei come sposa per Willas.',
    },
  },
  tywPycelleBook: {
    character: 'pycelle',
    type: { en: 'Grand Maester', it: 'Gran maestro' },
    summary: {
      en: 'The Grand Maester, who brings word that the Lord Commander of the Night’s Watch may be dead. Tywin has him answer that no men will go north unless Janos Slynt is considered for the post.',
      it: 'Il gran maestro, che porta la notizia che il Lord Comandante dei Guardiani della notte potrebbe essere morto. Tywin gli fa rispondere che nessun uomo andrà a nord se Janos Slynt non sarà preso in considerazione per la carica.',
    },
  },

  // Cersei, the show
  cerMargaeryCharity: {
    character: 'margaery-tyrell',
    type: { en: 'Rival', it: 'Rivale' },
    summary: {
      en: 'Joffrey’s bride to be. Cersei chides her for her charity in the streets, and sees her winning the people and the king.',
      it: 'La futura sposa di Joffrey. Cersei la rimprovera per la carità fatta nelle strade, e si accorge che si sta conquistando il popolo e il re.',
    },
  },
  cerJoffreyDefies: {
    character: 'joffrey-baratheon',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Her son the king, who takes Margaery’s side against her.',
      it: 'Suo figlio, il re, che si schiera con Margaery contro di lei.',
    },
  },
  cerJaimeMissing: {
    character: 'jaime-lannister',
    type: { en: 'Brother and lover', it: 'Fratello e amante' },
    summary: {
      en: 'Her brother and her lover, the father of her children, lost somewhere between Robb Stark’s camp and the capital.',
      it: 'Suo fratello e suo amante, il padre dei suoi figli, disperso da qualche parte tra l’accampamento di Robb Stark e la capitale.',
    },
  },
  cerTywinMarry: {
    character: 'tywin-lannister',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father. He tells her she is not as clever as she thinks, then orders her to marry Loras Tyrell and will not hear her plead.',
      it: 'Suo padre. Le dice che non è intelligente quanto crede, poi le ordina di sposare Loras Tyrell e non ascolta le sue suppliche.',
    },
  },
  cerLorasBetrothed: {
    character: 'loras-tyrell',
    type: { en: 'Intended husband', it: 'Promesso sposo' },
    summary: {
      en: 'The Knight of Flowers, the husband her father has chosen for her.',
      it: 'Il Cavaliere di Fiori, il marito che suo padre ha scelto per lei.',
    },
  },
  cerPetyrSpy: {
    character: 'petyr-baelish',
    type: { en: 'Spy', it: 'Spia' },
    summary: {
      en: 'Littlefinger, whom she asks to spy on the Tyrells. She reminds him that he never found Arya.',
      it: 'Ditocorto, a cui chiede di spiare i Tyrell. Gli ricorda che non ha mai trovato Arya.',
    },
  },
  cerTyrionGloat: {
    character: 'tyrion-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, to be married to Sansa. She gloats until her own match is announced.',
      it: 'Suo fratello, che dovrà sposare Sansa. Lei gongola finché non viene annunciato il suo matrimonio.',
    },
  },
  cerMargaeryThreat: {
    character: 'margaery-tyrell',
    type: { en: 'Rival', it: 'Rivale' },
    summary: {
      en: 'The queen to be, who speaks of them as sisters. Cersei tells her how the Reynes ended, and threatens to have her strangled if she says it again.',
      it: 'La futura regina, che parla di loro come di sorelle. Cersei le racconta come sono finiti i Reyne, e minaccia di farla strangolare se lo ripeterà.',
    },
  },
  cerJoffreyFeast: {
    character: 'joffrey-baratheon',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Her son, who torments Sansa at Tyrion’s wedding feast over her feeble protests.',
      it: 'Suo figlio, che al banchetto di nozze di Tyrion tormenta Sansa nonostante le deboli proteste della madre.',
    },
  },
  cerJaimeBack: {
    character: 'jaime-lannister',
    type: { en: 'Brother and lover', it: 'Fratello e amante' },
    summary: {
      en: 'Her brother and her lover, who reaches her chambers at last, filthy and missing a hand.',
      it: 'Suo fratello e suo amante, che infine raggiunge le sue stanze, sporco e senza una mano.',
    },
  },
  cerJoffreyBed: {
    character: 'joffrey-baratheon',
    type: { en: 'Son', it: 'Figlio' },
    summary: {
      en: 'Her son. Before the council she calls his wish to serve Robb’s head to Sansa a jest, then sees him to bed at her father’s word.',
      it: 'Suo figlio. Davanti al concilio Cersei fa passare per uno scherzo il suo proposito di servire a Sansa la testa di Robb, poi su ordine del padre lo accompagna a letto.',
    },
  },
  // Cersei, the books
  cerTywinWillas: {
    character: 'tywin-lannister',
    type: { en: 'Father', it: 'Padre' },
    summary: {
      en: 'Her father, who offers her hand to Willas Tyrell. She refuses and storms out.',
      it: 'Suo padre, che offre la sua mano a Willas Tyrell. Lei rifiuta ed esce furiosa.',
    },
  },
  cerTyrionSansa: {
    character: 'tyrion-lannister',
    type: { en: 'Brother', it: 'Fratello' },
    summary: {
      en: 'Her brother, to whom their father gives Sansa. Her word that the girl has flowered answers his objection that she is a child.',
      it: 'Suo fratello, a cui il padre dà Sansa. È la sua testimonianza che la ragazza è fiorita a rispondere all’obiezione di Tyrion che sia una bambina.',
    },
  },
  cerSansaWed: {
    character: 'sansa-stark',
    type: { en: 'Hostage', it: 'Ostaggio' },
    summary: {
      en: 'The Stark girl she dresses for a wedding, then tells that she will marry Tyrion that afternoon.',
      it: 'La ragazza Stark che fa vestire per le nozze, e a cui poi annuncia che quel pomeriggio sposerà Tyrion.',
    },
  },

  // Joffrey, the show
  jofMargaeryCharmed: {
    character: 'margaery-tyrell',
    type: { en: 'Bride to be', it: 'Futura sposa' },
    summary: {
      en: 'His bride to be, who stops his litter to visit an orphanage. He takes her side against his mother.',
      it: 'La sua futura sposa, che ferma la sua lettiga per visitare un orfanotrofio. Lui prende le sue parti contro la madre.',
    },
  },
  jofCerseiChided: {
    character: 'cersei-lannister',
    type: { en: 'Mother', it: 'Madre' },
    summary: {
      en: 'His mother, whose warnings about Margaery he brushes off.',
      it: 'Sua madre, di cui liquida gli avvertimenti su Margaery.',
    },
  },
  jofMargaeryCrossbow: {
    character: 'margaery-tyrell',
    type: { en: 'Bride to be', it: 'Futura sposa' },
    summary: {
      en: 'His bride to be. Asked about Renly, she plays the frustrated bride, then admires his new crossbow until he offers to take her hunting.',
      it: 'La sua futura sposa. Quando lui le chiede di Renly, recita la parte della sposa delusa, poi ammira la sua nuova balestra finché lui non le propone di portarla a caccia.',
    },
  },
  jofRos: {
    character: 'ros',
    type: { en: 'Prostitute given to him', it: 'Prostituta consegnatagli' },
    summary: {
      en: 'The prostitute Littlefinger gave him. He killed her with his crossbow.',
      it: 'La prostituta che Ditocorto gli ha consegnato. Lui l’ha uccisa con la sua balestra.',
    },
  },
  jofTyrionThreat: {
    character: 'tyrion-lannister',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, who threatens him with a dagger at the wedding feast when he calls for the bedding.',
      it: 'Suo zio, che al banchetto di nozze lo minaccia con il pugnale quando lui pretende la messa a letto degli sposi.',
    },
  },
  jofSansaWed: {
    character: 'sansa-stark',
    type: { en: 'Former betrothed', it: 'Ex promessa sposa' },
    summary: {
      en: 'The girl he walks to the altar to give to Tyrion. At the feast he says he might take her when his uncle is done.',
      it: 'La ragazza che accompagna all’altare per darla a Tyrion. Al banchetto dice che potrebbe prenderla quando lo zio avrà finito.',
    },
  },
  jofTywinThrone: {
    character: 'tywin-lannister',
    type: { en: 'Grandfather', it: 'Nonno' },
    summary: {
      en: 'His grandfather, who climbs the steps of the throne to put him in his place, and at the wedding feast ends the quarrel with Tyrion.',
      it: 'Suo nonno, che sale i gradini del trono per rimetterlo al suo posto, e al banchetto di nozze chiude la lite con Tyrion.',
    },
  },
  jofTywinBed: {
    character: 'tywin-lannister',
    type: { en: 'Grandfather', it: 'Nonno' },
    summary: {
      en: 'His grandfather, who tells him a true king has no need to say so, and has him sent to bed.',
      it: 'Suo nonno, che gli dice che un vero re non ha bisogno di ricordarlo, e lo fa mandare a letto.',
    },
  },
  jofRobbHead: {
    character: 'robb-stark',
    type: { en: 'Enemy', it: 'Nemico' },
    summary: {
      en: 'The King in the North, killed at the Frey wedding. Joffrey wants his head served to Sansa at his own wedding feast.',
      it: 'Il Re del Nord, ucciso al matrimonio dei Frey. Joffrey vuole far servire la sua testa a Sansa al proprio banchetto di nozze.',
    },
  },
  jofTyrionForbids: {
    character: 'tyrion-lannister',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, who forbids him to torment Sansa now that she is his wife.',
      it: 'Suo zio, che gli proibisce di tormentare Sansa ora che è sua moglie.',
    },
  },
  // Joffrey, the books
  jofTyrionBook: {
    character: 'tyrion-lannister',
    type: { en: 'Uncle', it: 'Zio' },
    summary: {
      en: 'His uncle, who has to threaten him to stop the bedding at his wedding to Sansa.',
      it: 'Suo zio, che deve minacciarlo per fermare la messa a letto alle sue nozze con Sansa.',
    },
  },
  jofSansaBook: {
    character: 'sansa-stark',
    type: { en: 'Former betrothed', it: 'Ex promessa sposa' },
    summary: {
      en: 'His former betrothed, now his uncle’s wife. At the wedding he wants the bedding.',
      it: 'La sua ex promessa sposa, ora moglie dello zio. Alle nozze lui vuole la messa a letto degli sposi.',
    },
  },

  // Petyr, the show
  petSansaDocks: {
    character: 'sansa-stark',
    type: { en: 'Girl he will help', it: 'Ragazza da aiutare' },
    summary: {
      en: 'The Stark girl he meets at the docks. He offers to smuggle her out on his ship when he leaves.',
      it: 'La ragazza Stark che incontra al porto. Le offre di portarla via di nascosto sulla sua nave quando partirà.',
    },
  },
  petRosAide: {
    character: 'ros',
    type: { en: 'Employee', it: 'Dipendente' },
    summary: {
      en: 'The prostitute who now helps him run his business.',
      it: 'La prostituta che ora lo aiuta a mandare avanti i suoi affari.',
    },
  },
  petTywin: {
    character: 'tywin-lannister',
    type: { en: 'Hand of the King', it: 'Primo Cavaliere del re' },
    summary: {
      en: 'The new Hand, at whose side he pushes to sit. Tywin sends him to win Lysa Arryn.',
      it: 'Il nuovo Primo Cavaliere, accanto al quale si fa largo per sedersi. Tywin lo manda a conquistare Lysa Arryn.',
    },
  },
  petLysa: {
    character: 'lysa-arryn',
    type: { en: 'Widow he is to win', it: 'Vedova da conquistare' },
    summary: {
      en: 'The widow he has known since childhood. He tells the council she has always adored him and will marry him.',
      it: 'La vedova che conosce fin da bambino. Dice al concilio che lei lo ha sempre adorato e lo sposerà.',
    },
  },
  petTyrionCoin: {
    character: 'tyrion-lannister',
    type: { en: 'Successor', it: 'Successore' },
    summary: {
      en: 'The new master of coin, who collects the ledgers from his brothel and finds the crown deep in debt.',
      it: 'Il nuovo maestro del conio, che ritira i registri dal suo bordello e scopre che la corona è piena di debiti.',
    },
  },
  petVarys: {
    character: 'varys',
    type: { en: 'Rival', it: 'Rivale' },
    summary: {
      en: 'The eunuch, whom he tells in the throne room that he knows about Ros. To Varys chaos is a pit; to Petyr it is a ladder.',
      it: 'L’eunuco, a cui nella sala del trono dice di sapere di Ros. Per Varys il caos è un pozzo; per Petyr è una scala.',
    },
  },
  petRosGiven: {
    character: 'ros',
    type: { en: 'Employee', it: 'Dipendente' },
    summary: {
      en: 'The prostitute who spied on him for Varys. He gave her to Joffrey, who killed her.',
      it: 'La prostituta che lo spiava per conto di Varys. Lui l’ha consegnata a Joffrey, che l’ha uccisa.',
    },
  },
  petSansaLeft: {
    character: 'sansa-stark',
    type: { en: 'Girl he offered help', it: 'Ragazza a cui offriva aiuto' },
    summary: {
      en: 'The Stark girl who put off his offer. His ship leaves without her.',
      it: 'La ragazza Stark che ha rimandato la sua offerta. La sua nave parte senza di lei.',
    },
  },
  petCersei: {
    character: 'cersei-lannister',
    type: { en: 'Queen regent', it: 'Regina reggente' },
    summary: {
      en: 'The queen, who asks him to spy on the Tyrells. Through a squire in his pay he learns of their plan to wed Sansa to Loras.',
      it: 'La regina, che gli chiede di spiare i Tyrell. Tramite uno scudiero al suo soldo scopre il loro piano di far sposare Sansa a Loras.',
    },
  },
  // Petyr, the books
  petTywinBook: {
    character: 'tywin-lannister',
    type: { en: 'Hand of the King', it: 'Primo Cavaliere del re' },
    summary: {
      en: 'The Hand, who sends him to wed Lysa Arryn and bring the Vale to the crown. Petyr has told him of the Tyrells’ plan for Sansa.',
      it: 'Il Primo Cavaliere, che lo manda a sposare Lysa Arryn e a portare la Valle alla corona. Petyr gli ha rivelato il piano dei Tyrell per Sansa.',
    },
  },
  petLysaBook: {
    character: 'lysa-arryn',
    type: { en: 'Widow he is to win', it: 'Vedova da conquistare' },
    summary: {
      en: 'The widow he agrees to marry, to deliver the Vale into Tywin’s hands as her consort.',
      it: 'La vedova che accetta di sposare, per consegnare la Valle nelle mani di Tywin come suo consorte.',
    },
  },
  petTyrionBook: {
    character: 'tyrion-lannister',
    type: { en: 'Successor', it: 'Successore' },
    summary: {
      en: 'The Hand’s son, named master of coin in his place.',
      it: 'Il figlio del Primo Cavaliere, nominato maestro del conio al suo posto.',
    },
  },
  petSansaBook: {
    character: 'sansa-stark',
    type: { en: 'Stark girl', it: 'Ragazza Stark' },
    summary: {
      en: 'The Stark girl the Tyrells want for Willas. He tells Tywin of their plan.',
      it: 'La ragazza Stark che i Tyrell vogliono per Willas. Lui rivela il loro piano a Tywin.',
    },
  },

  // Varys, the show
  varTyrionSorcerer: {
    character: 'tyrion-lannister',
    type: { en: 'Master of coin', it: 'Maestro del conio' },
    summary: {
      en: 'Tyrion, who asks who sent Ser Mandon to kill him. Varys tells him how he was cut as a boy, and shows him the sorcerer who did it, caught in a crate.',
      it: 'Tyrion, che gli chiede chi abbia mandato ser Mandon a ucciderlo. Varys gli racconta come fu evirato da ragazzo, e gli mostra in una cassa lo stregone che lo fece.',
    },
  },
  varRosSpy: {
    character: 'ros',
    type: { en: 'Spy', it: 'Spia' },
    summary: {
      en: 'The prostitute who spies on Littlefinger for him. She shows him the ship’s manifest that gives away Littlefinger’s plan for Sansa.',
      it: 'La prostituta che spia Ditocorto per lui. Gli mostra il registro della nave che tradisce il piano di Ditocorto per Sansa.',
    },
  },
  varOlenna: {
    character: 'olenna-tyrell',
    type: { en: 'Ally', it: 'Alleata' },
    summary: {
      en: 'Lady Olenna, who sees through his courtesies. He warns her of Littlefinger’s designs on Sansa.',
      it: 'Lady Olenna, che vede oltre le sue cortesie. Lui la avverte delle mire di Ditocorto su Sansa.',
    },
  },
  varPetyrFear: {
    character: 'petyr-baelish',
    type: { en: 'Rival', it: 'Rivale' },
    summary: {
      en: 'Littlefinger, the one rival who frightens him: a man who would burn the realm to rule the ashes.',
      it: 'Ditocorto, l’unico rivale che lo spaventa: un uomo capace di bruciare il regno pur di regnare sulle ceneri.',
    },
  },
  varSansa: {
    character: 'sansa-stark',
    type: { en: 'Stark heir', it: 'Erede degli Stark' },
    summary: {
      en: 'The Stark girl, whose younger brothers are thought dead. Whoever holds her may one day hold the North.',
      it: 'La ragazza Stark, i cui fratelli minori sono creduti morti. Chi la tiene potrebbe un giorno tenere il Nord.',
    },
  },
  varPetyrLadder: {
    character: 'petyr-baelish',
    type: { en: 'Rival', it: 'Rivale' },
    summary: {
      en: 'Littlefinger, who tells him in the throne room that he knows about Ros. Varys sees chaos as a pit, Littlefinger as a ladder.',
      it: 'Ditocorto, che nella sala del trono gli dice di sapere di Ros. Per Varys il caos è un pozzo, per Ditocorto una scala.',
    },
  },
  varRosDead: {
    character: 'ros',
    type: { en: 'Spy', it: 'Spia' },
    summary: {
      en: 'The prostitute who spied on Littlefinger for him. Littlefinger found out and gave her to Joffrey, who killed her.',
      it: 'La prostituta che spiava Ditocorto per lui. Ditocorto l’ha scoperta e l’ha consegnata a Joffrey, che l’ha uccisa.',
    },
  },
  varShae: {
    character: 'shae',
    type: { en: 'Tyrion’s lover', it: 'Amante di Tyrion' },
    summary: {
      en: 'Tyrion’s lover. He offers her diamonds to leave for Essos, sure she puts Tyrion at risk; she refuses unless Tyrion asks her himself.',
      it: 'L’amante di Tyrion. Le offre dei diamanti perché parta per Essos, convinto che metta Tyrion in pericolo; lei rifiuta, a meno che non sia Tyrion a chiederlo.',
    },
  },
  varTyrionHope: {
    character: 'tyrion-lannister',
    type: { en: 'Master of coin', it: 'Maestro del conio' },
    summary: {
      en: 'Tyrion, in whom he sees the realm’s best hope under this king.',
      it: 'Tyrion, in cui vede la migliore speranza del regno sotto questo re.',
    },
  },
  varJoffrey: {
    character: 'joffrey-baratheon',
    type: { en: 'King', it: 'Re' },
    summary: {
      en: 'The king. When Joffrey wants Robb’s head served to Sansa, Varys reminds him that she is now his aunt.',
      it: 'Il re. Quando Joffrey vuole far servire a Sansa la testa di Robb, Varys gli ricorda che ora lei è sua zia.',
    },
  },
  // Varys, the books
  varTyrionBook: {
    character: 'tyrion-lannister',
    type: { en: 'Former Hand', it: 'Ex Primo Cavaliere' },
    summary: {
      en: 'Tyrion, who waits in his rooms hunting for passages. Varys gives him the court’s news and, at moonrise, brings Shae to him, himself dressed as a matron.',
      it: 'Tyrion, che lo aspetta nelle sue stanze cercando passaggi segreti. Varys gli dà le notizie della corte e, al sorgere della luna, gli porta Shae, travestito da matrona.',
    },
  },
  varShaeBook: {
    character: 'shae',
    type: { en: 'Tyrion’s lover', it: 'Amante di Tyrion' },
    summary: {
      en: 'Tyrion’s lover, whom he brings to his rooms by night and leaves alone with Tyrion.',
      it: 'L’amante di Tyrion, che porta di notte nelle sue stanze e lascia sola con lui.',
    },
  },
  varPycelleBook: {
    character: 'pycelle',
    type: { en: 'Grand Maester', it: 'Gran maestro' },
    summary: {
      en: 'The old Grand Maester, whom Tywin means to restore, as Varys tells Tyrion.',
      it: 'Il vecchio gran maestro, che Tywin intende reintegrare, come Varys riferisce a Tyrion.',
    },
  },
  varCerseiOsmund: {
    character: 'cersei-lannister',
    type: { en: 'Queen regent', it: 'Regina reggente' },
    summary: {
      en: 'The queen, who he says has been flirting with Ser Osmund Kettleblack.',
      it: 'La regina, che a suo dire civetta con ser Osmund Kettleblack.',
    },
  },
  varTywinBook: {
    character: 'tywin-lannister',
    type: { en: 'Hand of the King', it: 'Primo Cavaliere del re' },
    summary: {
      en: 'The Hand, who moved at once to keep another Tyrell off the council.',
      it: 'Il Primo Cavaliere, che si è mosso subito per non avere un altro Tyrell nel concilio.',
    },
  },

  // Pycelle
  pycTywinShow: {
    character: 'tywin-lannister',
    type: { en: 'Hand of the King', it: 'Primo Cavaliere del re' },
    summary: {
      en: 'The new Hand, who calls the council to his tower. Pycelle takes the third seat, away from the fight for the nearest.',
      it: 'Il nuovo Primo Cavaliere, che convoca il concilio nella sua torre. Pycelle prende il terzo posto, lontano dalla contesa per quello più vicino.',
    },
  },
  pycPetyrShow: {
    character: 'petyr-baelish',
    type: { en: 'Fellow councillor', it: 'Collega del concilio' },
    summary: {
      en: 'Littlefinger, who is to wed Lysa Arryn. Pycelle notes that it will make him Defender of the Vale.',
      it: 'Ditocorto, che sposerà Lysa Arryn. Pycelle osserva che così diventerà Protettore della Valle.',
    },
  },
  pycTyrionCoin: {
    character: 'tyrion-lannister',
    type: { en: 'Master of coin', it: 'Maestro del conio' },
    summary: {
      en: 'The new master of coin, named at the council in Littlefinger’s place.',
      it: 'Il nuovo maestro del conio, nominato al concilio al posto di Ditocorto.',
    },
  },
  pycCerseiChair: {
    character: 'cersei-lannister',
    type: { en: 'Queen regent', it: 'Regina reggente' },
    summary: {
      en: 'The queen regent, who pulls up a chair at her father’s right hand.',
      it: 'La regina reggente, che si porta una sedia alla destra del padre.',
    },
  },
  pycTywinBook: {
    character: 'tywin-lannister',
    type: { en: 'Hand of the King', it: 'Primo Cavaliere del re' },
    summary: {
      en: 'The Hand, who has restored him as Grand Maester. Pycelle tells his council that three hundred Dornishmen ride for the city.',
      it: 'Il Primo Cavaliere, che lo ha reintegrato come gran maestro. Pycelle annuncia al suo concilio che trecento dorniani cavalcano verso la città.',
    },
  },
  pycMace: {
    character: 'mace-tyrell',
    type: { en: 'Fellow councillor', it: 'Collega del concilio' },
    summary: {
      en: 'Lord Tyrell, who dislikes the news of Dornishmen riding across his lands.',
      it: 'Lord Tyrell, a cui non piace sapere che i dorniani attraversano le sue terre.',
    },
  },

  // Loras, the show
  lorSansaEscort: {
    character: 'sansa-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The Stark girl he escorts to the gardens. She reminds him that they met at the Hand’s tourney.',
      it: 'La ragazza Stark che accompagna nei giardini. Lei gli ricorda che si sono conosciuti al torneo del Primo Cavaliere.',
    },
  },
  lorOlenna: {
    character: 'olenna-tyrell',
    type: { en: 'Grandmother', it: 'Nonna' },
    summary: {
      en: 'His grandmother, to whom he brings Sansa.',
      it: 'Sua nonna, da cui porta Sansa.',
    },
  },
  lorRenlyDead: {
    character: 'renly-baratheon',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'The king, his lover, who was killed in his tent.',
      it: 'Il re, suo amante, che è stato ucciso nella sua tenda.',
    },
  },
  lorSansaPlans: {
    character: 'sansa-stark',
    type: { en: 'Intended bride', it: 'Promessa sposa' },
    summary: {
      en: 'The Stark girl he is to marry. He talks happily of the feast and her gown, and agrees with her that the Red Keep is a terrible place.',
      it: 'La ragazza Stark che deve sposare. Parla volentieri del banchetto e dell’abito di Sansa, e conviene con lei che la Fortezza Rossa è un posto terribile.',
    },
  },
  // Loras, the books
  lorSansaBook: {
    character: 'sansa-stark',
    type: { en: 'Guest', it: 'Ospite' },
    summary: {
      en: 'The Stark girl he escorts to Margaery’s supper. He does not recall the rose he once gave her, and her talk of Renly’s death upsets him.',
      it: 'La ragazza Stark che accompagna alla cena di Margaery. Non ricorda la rosa che un tempo le aveva dato, e le sue parole sulla morte di Renly lo turbano.',
    },
  },
  lorMargaeryBook: {
    character: 'margaery-tyrell',
    type: { en: 'Sister', it: 'Sorella' },
    summary: {
      en: 'His sister, the king’s bride to be, whose guest he escorts.',
      it: 'Sua sorella, la futura sposa del re, di cui accompagna l’ospite.',
    },
  },

  // Shae, the show
  shaSansaWarns: {
    character: 'sansa-stark',
    type: { en: 'Mistress', it: 'Padrona' },
    summary: {
      en: 'The Stark girl she serves, whom she warns that Littlefinger’s help has a price.',
      it: 'La ragazza Stark che serve, e che Shae mette in guardia: l’aiuto di Ditocorto ha un prezzo.',
    },
  },
  shaTyrionFavour: {
    character: 'tyrion-lannister',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'Her lover, who tells her that his father has threatened her life. She asks him to protect Sansa from Littlefinger.',
      it: 'Il suo amante, che le dice che il padre ha minacciato di ucciderla. Lei gli chiede di proteggere Sansa da Ditocorto.',
    },
  },
  shaPetyr: {
    character: 'petyr-baelish',
    type: { en: 'Man she distrusts', it: 'Uomo di cui diffida' },
    summary: {
      en: 'Littlefinger, who offers Sansa a way out. Shae trusts nothing he does for free.',
      it: 'Ditocorto, che offre a Sansa una via di fuga. Shae non si fida di nulla che lui faccia gratis.',
    },
  },
  shaRos: {
    character: 'ros',
    type: { en: 'Littlefinger’s aide', it: 'Aiutante di Ditocorto' },
    summary: {
      en: 'The prostitute who works for Littlefinger. She asks Shae to watch over Sansa, and to watch Littlefinger above all.',
      it: 'La prostituta che lavora per Ditocorto. Chiede a Shae di vegliare su Sansa, e soprattutto di tenere d’occhio Ditocorto.',
    },
  },
  shaRosDead: {
    character: 'ros',
    type: { en: 'Littlefinger’s aide', it: 'Aiutante di Ditocorto' },
    summary: {
      en: 'The prostitute who worked for Littlefinger, and who asked Shae to watch over Sansa.',
      it: 'La prostituta che lavorava per Ditocorto, e che aveva chiesto a Shae di vegliare su Sansa.',
    },
  },
  shaTyrionApology: {
    character: 'tyrion-lannister',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'Her lover, who comes to Sansa’s chambers with news of his match, and in veiled words apologises to Shae for not telling her first.',
      it: 'Il suo amante, che viene nelle stanze di Sansa a darle la notizia delle nozze, e con parole velate si scusa con Shae per non averglielo detto prima.',
    },
  },
  shaTyrionEnds: {
    character: 'tyrion-lannister',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'Her lover, now to marry Sansa. She tells him she will not sleep with him once he is wed.',
      it: 'Il suo amante, che ora dovrà sposare Sansa. Gli dice che non dormirà più con lui quando sarà sposato.',
    },
  },
  shaVarysDiamonds: {
    character: 'varys',
    type: { en: 'Eunuch', it: 'Eunuco' },
    summary: {
      en: 'The eunuch, who offers her diamonds to leave for Essos, for Tyrion’s sake. She refuses unless Tyrion asks her.',
      it: 'L’eunuco, che le offre dei diamanti perché parta per Essos, per il bene di Tyrion. Lei rifiuta, a meno che non sia Tyrion a chiederlo.',
    },
  },
  shaSansaCares: {
    character: 'sansa-stark',
    type: { en: 'Mistress', it: 'Padrona' },
    summary: {
      en: 'The Stark girl she serves, now Tyrion’s wife. Shae tells Varys she cares deeply for her.',
      it: 'La ragazza Stark che serve, ora moglie di Tyrion. Shae dice a Varys che le vuole molto bene.',
    },
  },
  // Shae, the books
  shaTyrionStays: {
    character: 'tyrion-lannister',
    type: { en: 'Lover', it: 'Amante' },
    summary: {
      en: 'Her lover, who wants to send her away from his father. She wants to stay, and shows him the steps beneath Varys’s bed.',
      it: 'Il suo amante, che vuole mandarla lontano dal padre. Lei vuole restare, e gli mostra i gradini sotto il letto di Varys.',
    },
  },
  shaVarysBrings: {
    character: 'varys',
    type: { en: 'Go-between', it: 'Intermediario' },
    summary: {
      en: 'The eunuch who brings her to Tyrion in his rooms, then leaves them alone.',
      it: 'L’eunuco che la porta da Tyrion nelle sue stanze, poi li lascia soli.',
    },
  },

  // Ros (show only)
  rosPetyrAide: {
    character: 'petyr-baelish',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'The owner of the brothel, whom she now helps run his business.',
      it: 'Il proprietario del bordello, che ora aiuta a mandare avanti i suoi affari.',
    },
  },
  rosSansa: {
    character: 'sansa-stark',
    type: { en: 'Stark girl', it: 'Ragazza Stark' },
    summary: {
      en: 'Eddard’s daughter, whose birth she remembers from the north. She asks Shae to look out for her.',
      it: 'La figlia di Eddard, di cui ricorda la nascita nel Nord. Chiede a Shae di vegliare su di lei.',
    },
  },
  rosShae: {
    character: 'shae',
    type: { en: 'Handmaiden', it: 'Ancella' },
    summary: {
      en: 'Sansa’s handmaiden, whom she asks to watch over the girl, and to watch Littlefinger above all.',
      it: 'L’ancella di Sansa, a cui chiede di vegliare sulla ragazza, e soprattutto di tenere d’occhio Ditocorto.',
    },
  },
  rosVarysSpy: {
    character: 'varys',
    type: { en: 'Spymaster', it: 'Capo delle spie' },
    summary: {
      en: 'The eunuch she spies for. She tells him Littlefinger is obsessed with Sansa, and shows him the manifest of his ship.',
      it: 'L’eunuco per cui fa la spia. Gli dice che Ditocorto è ossessionato da Sansa, e gli mostra il registro della sua nave.',
    },
  },
  rosPetyrWatched: {
    character: 'petyr-baelish',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'The owner of the brothel, whom she watches for Varys.',
      it: 'Il proprietario del bordello, che sorveglia per conto di Varys.',
    },
  },
  rosPetyrBetrayed: {
    character: 'petyr-baelish',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'The owner of the brothel, who found out she spied for Varys and gave her to Joffrey.',
      it: 'Il proprietario del bordello, che ha scoperto che lei faceva la spia per Varys e l’ha consegnata a Joffrey.',
    },
  },
  rosJoffreyKilled: {
    character: 'joffrey-baratheon',
    type: { en: 'King she was given to', it: 'Re a cui fu consegnata' },
    summary: {
      en: 'The king Littlefinger gave her to. He killed her with his crossbow.',
      it: 'Il re a cui Ditocorto l’ha consegnata. Il re l’ha uccisa con la balestra.',
    },
  },
  rosVarysPast: {
    character: 'varys',
    type: { en: 'Spymaster', it: 'Capo delle spie' },
    summary: {
      en: 'The eunuch she spied for.',
      it: 'L’eunuco per cui faceva la spia.',
    },
  },

  // Bronn
  brnTyrionKnight: {
    character: 'tyrion-lannister',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'His employer, whose anger at his father he hears out. Knighted for the battle, Bronn wants better pay.',
      it: 'Il suo datore di lavoro, di cui ascolta la rabbia contro il padre. Fatto cavaliere per la battaglia, Bronn vuole una paga più alta.',
    },
  },
  brnTyrionAdvice: {
    character: 'tyrion-lannister',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'His employer, who is to marry Sansa. Bronn tells him to get an heir on her and keep Shae on the side.',
      it: 'Il suo datore di lavoro, che dovrà sposare Sansa. Bronn gli consiglia di darle un erede e di tenersi Shae di nascosto.',
    },
  },
  brnPodShow: {
    character: 'podrick-payne',
    type: { en: 'Tyrion’s squire', it: 'Scudiero di Tyrion' },
    summary: {
      en: 'Tyrion’s squire, rewarded with a night at Littlefinger’s brothel. Bronn wants to hear every detail.',
      it: 'Lo scudiero di Tyrion, ricompensato con una notte al bordello di Ditocorto. Bronn vuole sapere ogni dettaglio.',
    },
  },
  brnTyrionNews: {
    character: 'tyrion-lannister',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'His employer, still healing. A knight now, Bronn brings him the city’s news and carries him up the steps to his father.',
      it: 'Il suo datore di lavoro, ancora convalescente. Ora che è cavaliere, Bronn gli porta le notizie della città e lo porta in braccio su per le scale fino dal padre.',
    },
  },
  brnPodBook: {
    character: 'podrick-payne',
    type: { en: 'Tyrion’s squire', it: 'Scudiero di Tyrion' },
    summary: {
      en: 'Tyrion’s squire, who helps him get his lord dressed.',
      it: 'Lo scudiero di Tyrion, che lo aiuta a vestire il suo signore.',
    },
  },
  brnTyrionSinger: {
    character: 'tyrion-lannister',
    type: { en: 'Employer', it: 'Datore di lavoro' },
    summary: {
      en: 'His employer, who orders him to kill the singer threatening to tell about Shae.',
      it: 'Il suo datore di lavoro, che gli ordina di uccidere il cantore che minaccia di rivelare la storia di Shae.',
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
    // Stage 2 (#1477): season 2 and A Clash of Kings.
    // The show: the Red Waste ("The North Remembers").
    {
      episode: 11,
      chapter: 86,
      source: 'episode',
      value: [
        essos2.daeJorahWaste,
        essos2.daeRakharoScout,
        essos2.daeKovarro,
        essos2.daeAggo,
      ],
    },
    // Rakharo's head comes back in "The Night Lands".
    {
      episode: 12,
      chapter: 86,
      source: 'episode',
      value: [
        essos2.daeJorahWaste,
        essos2.daeRakharoDead,
        essos2.daeIrriMourns,
        essos2.daeKovarro,
        essos2.daeAggo,
      ],
    },
    // Xaro's feast and offer, "The Ghost of Harrenhal".
    {
      episode: 15,
      chapter: 101,
      source: 'episode',
      value: [
        essos2.daeXaroEpisode,
        essos2.daeJorahFeelings,
        essos2.daeKovarroStatue,
        essos2.daeIrriFriend,
        essos2.daeDoreahQarth,
      ],
    },
    // The dragons stolen, Irri killed, "The Old Gods and the New".
    {
      episode: 16,
      chapter: 114,
      source: 'episode',
      value: [
        essos2.daeXaroStolen,
        essos2.daeJorahFeelings,
        essos2.daeIrriDead,
        essos2.daeDoreahMissing,
        essos2.daeKovarroStatue,
      ],
    },
    // "Valar Morghulis".
    {
      episode: 20,
      chapter: 137,
      source: 'episode',
      value: [
        essos2.daeXaroVault,
        essos2.daeDoreahVault,
        essos2.daeJorahHouse,
        essos2.daeKovarroHouse,
        essos2.daeIrriDead,
      ],
    },
    // The books: Daenerys I names the dragons, and Doreah dies.
    {
      episode: 11,
      chapter: 86,
      source: 'chapter',
      value: [
        essos2.daeJorahLynesse,
        essos2.daeDrogon,
        essos2.daeRhaegal,
        essos2.daeViserion,
        essos2.daeDoreahDead,
      ],
    },
    // Daenerys III: Xaro and Pyat Pree are named (#1468).
    {
      episode: 16,
      chapter: 114,
      source: 'chapter',
      value: [
        essos2.daeXaroChapter,
        essos2.daePyatPree,
        essos2.daeQuaithe,
        essos2.daeJorahQarth,
        essos2.daeDrogon,
      ],
    },
    // Daenerys IV: the House of the Undying.
    {
      episode: 18,
      chapter: 122,
      source: 'chapter',
      value: [
        essos2.daePyatPreeHouse,
        essos2.daeDrogonHouse,
        essos2.daeJorahComfort,
        essos2.daeJhogoKnife,
        essos2.daeXaroChapter,
      ],
    },
    // Daenerys V: the port of Qarth.
    {
      episode: 20,
      chapter: 137,
      source: 'chapter',
      value: [
        essos2.daeBelwas,
        essos2.daeArstan,
        essos2.daeXaroShips,
        essos2.daeJorahComfort,
        essos2.daeDrogonHouse,
      ],
    },
    // Stage 3 (#1650): season 3 and A Storm of Swords through chapter 52.
    // The show: Barristan saves her in Astapor ("Valar Dohaeris").
    {
      episode: 21,
      chapter: 167,
      source: 'episode',
      value: [essos3.daeBarristanSaves, essos3.daeJorahArmy],
    },
    // The deal for the Unsullied, "Walk of Punishment".
    {
      episode: 23,
      chapter: 171,
      source: 'episode',
      value: [
        essos3.daeMissandeiGift,
        essos3.daeJorahRebuked,
        essos3.daeBarristanRebuked,
      ],
    },
    // Grey Worm named, "Kissed by Fire".
    {
      episode: 25,
      chapter: 186,
      source: 'episode',
      value: [
        essos3.daeGreyWorm,
        essos3.daeMissandeiAide,
        essos3.daeJorahRebuked,
        essos3.daeBarristanRebuked,
      ],
    },
    // The Second Sons, "Second Sons".
    {
      episode: 28,
      chapter: 186,
      source: 'episode',
      value: [
        essos3.daeDaarioOath,
        essos3.daeMeroDead,
        essos3.daeMissandeiTongues,
        essos3.daeGreyWorm,
        essos3.daeBarristanMero,
      ],
    },
    // The books: Daenerys I, at sea from Qarth.
    {
      episode: 21,
      chapter: 152,
      source: 'chapter',
      value: [
        essos3.daeJorahKiss,
        essos3.daeArstanRhaegar,
        essos3.daeDrogonDracarys,
        essos3.daeIllyrioShips,
        essos2.daeBelwas,
      ],
    },
    // Daenerys II and III: Astapor.
    {
      episode: 24,
      chapter: 171,
      source: 'chapter',
      value: [
        essos3.daeMissandeiFreed,
        essos3.daeKraznysBurned,
        essos3.daeDrogonTraded,
        essos3.daeJorahUnsullied,
        essos3.daeArstanSlaves,
      ],
    },
    // Daenerys IV: Yunkai.
    {
      episode: 28,
      chapter: 186,
      source: 'chapter',
      value: [
        essos3.daeDaarioStormcrows,
        essos3.daeJorahDaario,
        essos3.daeArstanShadow,
        essos3.daeGreyWormOfficer,
        essos3.daeGrazdan,
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
    // Qotho dies here (Baelor; Daenerys VIII). Mago is the show's dead and
    // the book's living, so neither medium keeps him in this list.
    {
      episode: 9,
      chapter: 65,
      value: [
        links.droDaenerysRaid,
        links.droMirri,
        links.droQothoDead,
        links.droJorah,
        links.droViserysDead,
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
    // Books: Daenerys IX, Drogo dies a chapter before his pyre.
    {
      episode: 10,
      chapter: 69,
      source: 'chapter',
      value: [
        links.jorDaenerysRite,
        links.jorDrogoSmothered,
        links.jorQothoDead,
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
    // Stage 2 (#1477): season 2 and A Clash of Kings.
    {
      episode: 15,
      chapter: 101,
      source: 'episode',
      value: [
        essos2.jorDaenerysFeelings,
        essos2.jorXaroEpisode,
        essos2.jorKovarro,
        essos2.jorMalakho,
      ],
    },
    {
      episode: 20,
      chapter: 137,
      source: 'episode',
      value: [
        essos2.jorDaenerysHouse,
        essos2.jorXaroVault,
        essos2.jorDoreahVault,
        essos2.jorKovarro,
        essos2.jorMalakho,
      ],
    },
    {
      episode: 16,
      chapter: 114,
      source: 'chapter',
      value: [
        essos2.jorDaenerysQarth,
        essos2.jorXaroChapter,
        essos2.jorPyatPree,
        essos2.jorIllyrioSelf,
      ],
    },
    {
      episode: 20,
      chapter: 137,
      source: 'chapter',
      value: [
        essos2.jorDaenerysPort,
        essos2.jorBelwas,
        essos2.jorArstan,
        essos2.jorXaroChapter,
        essos2.jorIllyrioSelf,
      ],
    },
    // Stage 3 (#1650). The show: "Valar Dohaeris", "Kissed by Fire" and
    // "The Rains of Castamere".
    {
      episode: 21,
      chapter: 167,
      source: 'episode',
      value: [essos3.jorDaenerysAstapor, essos3.jorBarristanKnown],
    },
    {
      episode: 25,
      chapter: 186,
      source: 'episode',
      value: [essos3.jorDaenerysRebuke, essos3.jorBarristanRide],
    },
    {
      episode: 29,
      chapter: 186,
      source: 'episode',
      value: [
        essos3.jorDaenerysYunkai,
        essos3.jorDaario,
        essos3.jorGreyWorm,
        essos3.jorBarristanStay,
      ],
    },
    // The books: Daenerys I (152) and IV (186).
    {
      episode: 21,
      chapter: 152,
      source: 'chapter',
      value: [
        essos3.jorDaenerysKiss,
        essos3.jorArstanWary,
        essos3.jorBelwasWary,
        essos3.jorIllyrioWary,
      ],
    },
    {
      episode: 28,
      chapter: 186,
      source: 'chapter',
      value: [
        essos3.jorDaenerysDaario,
        essos3.jorDaarioWary,
        essos3.jorGreyWormPupil,
        essos3.jorArstanWary,
        essos3.jorBelwasWary,
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
    // Stage 2 (#1477): season 2 and A Clash of Kings.
    // Daenerys V: Belwas and Arstan say he sent them.
    {
      episode: 20,
      chapter: 137,
      source: 'chapter',
      value: [essos2.ilyDaenerysBelwas, essos2.ilyBelwas, essos2.ilyArstan],
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
    // Stage 2 (#1477): season 2 and A Clash of Kings.
    // The show; she dies at 16, as her status has it.
    {
      episode: 12,
      chapter: 86,
      source: 'episode',
      value: [essos2.irrDaenerysComfort, essos2.irrRakharoDead],
    },
    {
      episode: 15,
      chapter: 101,
      source: 'episode',
      value: [
        essos2.irrDaenerysFriend,
        essos2.irrDoreahPrincess,
        essos2.irrXaro,
        essos2.irrRakharoDead,
      ],
    },
    // Strangled in Xaro's house, "The Old Gods and the New".
    {
      episode: 16,
      chapter: 114,
      source: 'episode',
      value: [essos2.irrDaenerysDead, essos2.irrDoreahGone],
    },
    // The books: Daenerys I.
    {
      episode: 11,
      chapter: 86,
      source: 'chapter',
      value: [essos2.irrDaenerysDragons, links.irrJhiqui, essos2.irrDoreahDead],
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
    // Stage 2 (#1477): season 2 and A Clash of Kings.
    // The books: Daenerys I. The show has no season-2 Jhiqui.
    {
      episode: 11,
      chapter: 86,
      source: 'chapter',
      value: [essos2.jhiDaenerysDragons, links.jhiIrri, essos2.jhiDoreahDead],
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
        links.dorDaenerysWidow,
        links.dorEroeh,
        links.dorViserysDead,
        links.dorIrri,
        links.dorJhiqui,
      ],
    },
    // The show's Drogo dies in episode 10; the chapter only orders it.
    {
      episode: 10,
      chapter: 73,
      source: 'episode',
      value: [
        links.dorDaenerysWidow,
        links.dorViserysDead,
        links.dorIrri,
        links.dorJhiqui,
      ],
    },
    // Stage 2 (#1477): season 2 and A Clash of Kings.
    // The books: she dies in Daenerys I.
    {
      episode: 11,
      chapter: 86,
      source: 'chapter',
      value: [
        essos2.dorDaenerysDeath,
        links.dorIrri,
        links.dorJhiqui,
        links.dorEroeh,
      ],
    },
    // The show: Qarth, "The Ghost of Harrenhal".
    {
      episode: 15,
      chapter: 101,
      source: 'episode',
      value: [essos2.dorDaenerysQarth, essos2.dorIrriKhaleesi, essos2.dorXaro],
    },
    // Irri is killed in "The Old Gods and the New".
    {
      episode: 16,
      chapter: 114,
      source: 'episode',
      value: [essos2.dorDaenerysQarth, essos2.dorIrriDead, essos2.dorXaro],
    },
    // "Valar Morghulis".
    {
      episode: 20,
      chapter: 137,
      source: 'episode',
      value: [essos2.dorDaenerysVault, essos2.dorXaroVault, essos2.dorIrriDead],
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
    // Stage 2 (#1477): season 2 and A Clash of Kings.
    // The show: sent out at 11; he dies at 12.
    {
      episode: 11,
      chapter: 86,
      source: 'episode',
      value: [
        essos2.rakDaenerysScout,
        links.rakJorah,
        links.rakIrri,
        essos2.rakKovarro,
        essos2.rakAggo,
      ],
    },
    // Killed in the Red Waste, "The Night Lands".
    {
      episode: 12,
      chapter: 86,
      source: 'episode',
      value: [
        essos2.rakDaenerysDead,
        essos2.rakKovarroDead,
        essos2.rakAggoDead,
      ],
    },
    // The books: Daenerys I.
    {
      episode: 11,
      chapter: 86,
      source: 'chapter',
      value: [
        essos2.rakDaenerysWaste,
        essos2.rakJhogoChapter,
        essos2.rakAggoChapter,
        links.rakHaggoDead,
      ],
    },
    // Daenerys IV.
    {
      episode: 18,
      chapter: 122,
      source: 'chapter',
      value: [
        essos2.rakDaenerysHouse,
        essos2.rakPyatPree,
        essos2.rakJhogoChapter,
        essos2.rakAggoChapter,
      ],
    },
  ],
  // Show: he breaks Viserys's arm at his gate. Books: the synopsis names him
  // at the wedding in Daenerys II (#1355).
  'qotho': [
    {
      episode: 6,
      chapter: 12,
      source: 'chapter',
      value: [links.qotDrogo, links.qotDaenerysBride],
    },
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
    // Viserys dies in Daenerys V (chapter 47).
    {
      episode: 6,
      chapter: 47,
      source: 'chapter',
      value: [links.jhoDaenerys, links.jhoViserysDead],
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
    // Drogo dies in Daenerys IX (chapter 69).
    {
      episode: 10,
      chapter: 69,
      source: 'chapter',
      value: [
        links.jhoDaenerys,
        links.jhoDrogoDead,
        links.jhoMirri,
        links.jhoHaggoDead,
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
    // Stage 2 (#1477): season 2 and A Clash of Kings.
    // Daenerys I: he brings back the strangers from Qarth.
    {
      episode: 11,
      chapter: 86,
      source: 'chapter',
      value: [
        essos2.jhoDaenerysWaste,
        essos2.jhoQuaithe,
        essos2.jhoRakharo,
        essos2.jhoAggo,
        links.jhoDrogoDead,
      ],
    },
    // Daenerys IV.
    {
      episode: 18,
      chapter: 122,
      source: 'chapter',
      value: [
        essos2.jhoDaenerysHouse,
        essos2.jhoPyatPree,
        essos2.jhoQuaitheWary,
        essos2.jhoRakharo,
        essos2.jhoAggo,
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
    // Stage 2 (#1477): season 2 and A Clash of Kings.
    // The show names him at 11, sent out to scout.
    {
      episode: 11,
      chapter: 86,
      source: 'episode',
      value: [essos2.aggDaenerysScout, essos2.aggRakharo, essos2.aggKovarro],
    },
    // The books: Daenerys I.
    {
      episode: 11,
      chapter: 86,
      source: 'chapter',
      value: [
        essos2.aggDaenerysWaste,
        essos2.aggDrogon,
        essos2.jhoRakharo,
        essos2.rakJhogoChapter,
        links.aggCoholloDead,
      ],
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
  // Winterfell and the North (#1345). Each death a card outlives gets a
  // snapshot in the past tense at its pin: Lady 2 / 17, Robert 7 / 50 and
  // Eddard 9 / 66, the episode of each and the chapter that tells it.
  'eddard-stark': [
    // Bran I: the execution and the pups. Catelyn, Robert and the girls
    // open at Eddard I (chapter 5).
    {
      episode: 1,
      chapter: 2,
      source: 'chapter',
      value: [
        north.nedBranExecution,
        north.nedJon,
        north.nedRobb,
        north.nedTheon,
      ],
    },
    {
      episode: 1,
      chapter: 5,
      value: [
        north.nedCatelyn,
        north.nedRobertOffer,
        north.nedRobb,
        north.nedBranExecution,
        north.nedJon,
      ],
    },
    {
      episode: 2,
      chapter: 17,
      value: [
        north.nedRobertHand,
        north.nedSansaLady,
        north.nedArya,
        north.nedCatelynHome,
        north.nedBranFall,
      ],
    },
    {
      episode: 7,
      chapter: 50,
      value: [
        north.nedRobertDead,
        north.nedCersei,
        north.nedPetyr,
        north.nedSansaCourt,
        north.nedArya,
      ],
    },
    {
      episode: 9,
      chapter: 66,
      value: [
        north.nedJoffreyExecution,
        north.nedSansaExecution,
        north.nedAryaCrowd,
        north.nedCerseiDead,
        north.nedRobertDead,
      ],
    },
  ],
  'catelyn-stark': [
    {
      episode: 1,
      chapter: 3,
      value: [north.catEddard, north.catRobb, north.catBran],
    },
    {
      episode: 2,
      chapter: 15,
      value: [
        north.catBranAttack,
        north.catEddardSouth,
        north.catRobbCastle,
        north.catRodrik,
        north.catJon,
      ],
    },
    {
      episode: 4,
      chapter: 29,
      value: [
        north.catTyrion,
        north.catPetyr,
        north.catEddardHand,
        north.catBranSouth,
        north.catRodrik,
      ],
    },
    {
      episode: 5,
      chapter: 35,
      value: [
        north.catTyrion,
        north.catLysa,
        north.catEddardHand,
        north.catBranSouth,
        north.catPetyr,
      ],
    },
    // Catelyn IX: the Twins, before the battle (Catelyn X, chapter 64) and
    // Eddard's death (chapter 66). The show has all three in "Baelor".
    {
      episode: 9,
      chapter: 60,
      source: 'chapter',
      value: [
        north.catWalder,
        north.catRobbHost,
        north.catEddardCaptive,
        north.catLysaRefusal,
        north.catBranSouth,
      ],
    },
    {
      episode: 9,
      chapter: 66,
      value: [
        north.catRobbVictory,
        north.catEddardDead,
        north.catWalder,
        north.catJaime,
        north.catLysaRefusal,
      ],
    },
    {
      episode: 10,
      chapter: 72,
      value: [
        north.catRobbKing,
        north.catEddardDead,
        north.catJaime,
        north.catWalder,
        north.catLysaRefusal,
      ],
    },
    // Stage 2 (#1481).
    {
      episode: 11,
      chapter: 81,
      source: 'episode',
      value: [
        riverlands2.catRobb11,
        riverlands2.catRenly11,
        riverlands2.catTheon11,
      ],
    },
    {
      episode: 16,
      chapter: 100,
      source: 'episode',
      value: [riverlands2.catTalisa16, riverlands2.catBrienne16],
    },
    {
      episode: 17,
      chapter: 112,
      source: 'episode',
      value: [
        riverlands2.catJaimeTalk,
        riverlands2.catRickard,
        riverlands2.catBrienne17,
      ],
    },
    {
      episode: 18,
      chapter: 129,
      source: 'episode',
      value: [
        riverlands2.catJaimeFree,
        riverlands2.catRobbGuard,
        riverlands2.catBrienne18,
      ],
    },
    {
      episode: 20,
      chapter: 137,
      source: 'episode',
      value: [riverlands2.catRobb20, riverlands2.catTalisa20],
    },
    {
      episode: 11,
      chapter: 81,
      source: 'chapter',
      value: [
        riverlands2.catRobb81,
        riverlands2.catEdmure81,
        riverlands2.catBrynden81,
        riverlands2.catHoster81,
        riverlands2.catCleos81,
      ],
    },
    {
      episode: 13,
      chapter: 113,
      source: 'chapter',
      value: [
        riverlands2.catEdmure113,
        riverlands2.catBrienne113,
        riverlands2.catJaime113,
        riverlands2.catHoster113,
      ],
    },
    {
      episode: 14,
      chapter: 129,
      source: 'chapter',
      value: [
        riverlands2.catJaime129,
        riverlands2.catBrienne129,
        riverlands2.catRickard129,
        riverlands2.catRobb129,
        riverlands2.catEdmure129,
      ],
    },
    // Stage 3 (#1653). The show: "Dark Wings, Dark Words" (22) to "The Rains
    // of Castamere" (29), where she dies. The books: Catelyn I to VII (146
    // to 195).
    {
      episode: 22,
      chapter: 146,
      source: 'episode',
      value: [
        riverlands3.ctRobb22,
        riverlands3.ctTalisa22,
        riverlands3.ctJon22,
        riverlands3.ctBran22,
      ],
    },
    {
      episode: 23,
      chapter: 158,
      source: 'episode',
      value: [
        riverlands3.ctHoster23,
        riverlands3.ctBrynden23,
        riverlands3.ctEdmure23,
        riverlands3.ctRobb23,
        riverlands3.ctTalisa23,
      ],
    },
    {
      episode: 25,
      chapter: 164,
      source: 'episode',
      value: [
        riverlands3.ctRickard25,
        riverlands3.ctRobb25,
        riverlands3.ctEdmure25,
        riverlands3.ctTalisa25,
        riverlands3.ctBrynden25,
      ],
    },
    {
      episode: 27,
      chapter: 189,
      source: 'episode',
      value: [
        riverlands3.ctRobb27,
        riverlands3.ctTalisa27,
        riverlands3.ctWalder27,
        riverlands3.ctEdmure27,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'episode',
      value: [
        riverlands3.ctRobb29,
        riverlands3.ctWalder29,
        riverlands3.ctRoose29,
        riverlands3.ctTalisa29,
        riverlands3.ctEdmure29,
      ],
    },
    {
      episode: 21,
      chapter: 146,
      source: 'chapter',
      value: [
        riverlands3.ctHoster146,
        riverlands3.ctEdmure146,
        riverlands3.ctLysa146,
        riverlands3.ctJaime146,
        riverlands3.ctBrienne146,
      ],
    },
    {
      episode: 23,
      chapter: 158,
      source: 'chapter',
      value: [
        riverlands3.ctRobb158,
        riverlands3.ctJeyne158,
        riverlands3.ctBrynden158,
        riverlands3.ctRickard158,
        riverlands3.ctRolph158,
      ],
    },
    {
      episode: 25,
      chapter: 164,
      source: 'chapter',
      value: [
        riverlands3.ctRickard164,
        riverlands3.ctRobb164,
        riverlands3.ctJeyne164,
        riverlands3.ctHoster164,
        riverlands3.ctBrynden164,
      ],
    },
    {
      episode: 26,
      chapter: 179,
      source: 'chapter',
      value: [
        riverlands3.ctHoster179,
        riverlands3.ctRobb179,
        riverlands3.ctLothar179,
        riverlands3.ctEdmure179,
        riverlands3.ctBrynden179,
      ],
    },
    {
      episode: 27,
      chapter: 189,
      source: 'chapter',
      value: [
        riverlands3.ctRobb189,
        riverlands3.ctJon189,
        riverlands3.ctArya189,
        riverlands3.ctJason189,
        riverlands3.ctEdmure189,
      ],
    },
    {
      episode: 29,
      chapter: 193,
      source: 'chapter',
      value: [
        riverlands3.ctRobb193,
        riverlands3.ctWalder193,
        riverlands3.ctRoose193,
        riverlands3.ctRyman193,
        riverlands3.ctEdmure193,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands3.ctRobb195,
        riverlands3.ctWalder195,
        riverlands3.ctAegon195,
        riverlands3.ctEdmure195,
      ],
    },
  ],
  'robb-stark': [
    {
      episode: 1,
      chapter: 2,
      value: [north.robbEddard, north.robbBran, north.robbJon, north.robbTheon],
    },
    {
      episode: 2,
      chapter: 15,
      value: [
        north.robbCatelyn,
        north.robbBranBed,
        north.robbEddardSouth,
        north.robbTheon,
        north.robbJon,
      ],
    },
    {
      episode: 6,
      chapter: 38,
      value: [
        north.robbBranRescue,
        north.robbTheonArrow,
        north.robbOsha,
        north.robbCatelyn,
        north.robbEddardSouth,
      ],
    },
    {
      episode: 8,
      chapter: 54,
      value: [
        north.robbGreatjon,
        north.robbGreyWind,
        north.robbEddardSeized,
        north.robbTheon,
        north.robbBranFarewell,
      ],
    },
    // Catelyn X: the battle, two chapters before Eddard's death. The show
    // has both in "Baelor".
    {
      episode: 9,
      chapter: 64,
      source: 'chapter',
      value: [
        north.robbJaime,
        north.robbWalder,
        north.robbCatelynTwins,
        north.robbEddardCaptive,
        north.robbGreyWind,
      ],
    },
    {
      episode: 9,
      chapter: 66,
      value: [
        north.robbEddardDead,
        north.robbJaime,
        north.robbWalder,
        north.robbCatelynTwins,
        north.robbGreatjon,
      ],
    },
    {
      episode: 10,
      chapter: 72,
      value: [
        north.robbGreatjonKing,
        north.robbCatelynWar,
        north.robbEddardDead,
        north.robbJaime,
        north.robbWalder,
      ],
    },
    // Stage 2 (#1481): the war in the riverlands and the west.
    {
      episode: 11,
      chapter: 81,
      source: 'episode',
      value: [
        riverlands2.robAlton,
        riverlands2.robJaimeCaptive,
        riverlands2.robCatelynRenly,
        riverlands2.robTheonPyke,
        riverlands2.robGreyWindShow,
      ],
    },
    {
      episode: 16,
      chapter: 100,
      source: 'episode',
      value: [
        riverlands2.robTalisa,
        riverlands2.robCatelynTalisa,
        riverlands2.robRoose,
        riverlands2.robTheonTraitor,
      ],
    },
    {
      episode: 17,
      chapter: 112,
      source: 'episode',
      value: [
        riverlands2.robAltonReply,
        riverlands2.robJaimeEscape,
        riverlands2.robRickard,
        riverlands2.robTalisaCrag,
        riverlands2.robCatelynJaime,
      ],
    },
    {
      episode: 20,
      chapter: 137,
      source: 'episode',
      value: [riverlands2.robTalisaWed, riverlands2.robCatelynFrey],
    },
    {
      episode: 11,
      chapter: 81,
      source: 'chapter',
      value: [
        riverlands2.robCleos,
        riverlands2.robCatelynTerms,
        riverlands2.robEdmure,
        riverlands2.robRickardBook,
        riverlands2.robGreatjonBook,
      ],
    },
    // Stage 3 (#1653). The show: "Dark Wings, Dark Words" (22) to "The Rains
    // of Castamere" (29), where he dies. The books: Catelyn II to VII (158
    // to 195).
    {
      episode: 22,
      chapter: 146,
      source: 'episode',
      value: [
        riverlands3.rbTalisa22,
        riverlands3.rbCatelyn22,
        riverlands3.rbRoose22,
        riverlands3.rbRickard22,
        riverlands3.rbBran22,
      ],
    },
    {
      episode: 23,
      chapter: 158,
      source: 'episode',
      value: [
        riverlands3.rbEdmure23,
        riverlands3.rbBrynden23,
        riverlands3.rbHoster23,
        riverlands3.rbCatelyn23,
        riverlands3.rbTalisa23,
      ],
    },
    {
      episode: 25,
      chapter: 164,
      source: 'episode',
      value: [
        riverlands3.rbRickard25,
        riverlands3.rbWillem25,
        riverlands3.rbMartyn25,
        riverlands3.rbTalisa25,
        riverlands3.rbCatelyn25,
      ],
    },
    {
      episode: 26,
      chapter: 179,
      source: 'episode',
      value: [
        riverlands3.rbWalder26,
        riverlands3.rbEdmure26,
        riverlands3.rbRoslin26,
        riverlands3.rbTalisa25,
        riverlands3.rbCatelyn25,
      ],
    },
    {
      episode: 27,
      chapter: 189,
      source: 'episode',
      value: [
        riverlands3.rbTalisa27,
        riverlands3.rbCatelyn27,
        riverlands3.rbEdmure27,
        riverlands3.rbWalder26,
        riverlands3.rbRoslin26,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'episode',
      value: [
        riverlands3.rbTalisa29,
        riverlands3.rbCatelyn29,
        riverlands3.rbWalder29,
        riverlands3.rbRoose29,
        riverlands3.rbEdmure29,
      ],
    },
    {
      episode: 23,
      chapter: 158,
      source: 'chapter',
      value: [
        riverlands3.rbJeyne158,
        riverlands3.rbCatelyn158,
        riverlands3.rbEdmure158,
        riverlands3.rbRickard158,
        riverlands3.rbWalder158,
      ],
    },
    {
      episode: 25,
      chapter: 164,
      source: 'chapter',
      value: [
        riverlands3.rbRickard164,
        riverlands3.rbWillem164,
        riverlands3.rbEdmure164,
        riverlands3.rbBrynden164,
        riverlands3.rbJeyne158,
      ],
    },
    {
      episode: 26,
      chapter: 179,
      source: 'chapter',
      value: [
        riverlands3.rbCatelyn179,
        riverlands3.rbWalder179,
        riverlands3.rbLothar179,
        riverlands3.rbEdmure179,
        riverlands3.rbHoster179,
      ],
    },
    {
      episode: 27,
      chapter: 189,
      source: 'chapter',
      value: [
        riverlands3.rbCatelyn189,
        riverlands3.rbJon189,
        riverlands3.rbJeyne189,
        riverlands3.rbJason189,
        riverlands3.rbGalbart189,
      ],
    },
    {
      episode: 29,
      chapter: 193,
      source: 'chapter',
      value: [
        riverlands3.rbWalder193,
        riverlands3.rbRoose193,
        riverlands3.rbGreyWind193,
        riverlands3.rbRyman193,
        riverlands3.rbCatelyn193,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands3.rbCatelyn195,
        riverlands3.rbWalder195,
        riverlands3.rbSmalljon195,
        riverlands3.rbEdmure195,
        riverlands3.rbJeyne195,
      ],
    },
  ],
  'rickon-stark': [
    {
      episode: 1,
      chapter: 5,
      value: [north.ricEddard, north.ricCatelyn, north.ricRobb, north.ricBran],
    },
    // Bran IV names his wolf; the show names it only in "Fire and Blood".
    {
      episode: 1,
      chapter: 25,
      source: 'chapter',
      value: [
        north.ricShaggydog,
        north.ricEddard,
        north.ricCatelyn,
        north.ricRobb,
        north.ricBran,
      ],
    },
    // Show only: "The Pointy End", he tells Bran they will not come back.
    {
      episode: 8,
      chapter: 25,
      source: 'episode',
      value: [
        north.ricRobbWar,
        north.ricEddard,
        north.ricCatelyn,
        north.ricBran,
      ],
    },
    // The crypts: Osha carries Bran down in both media; in Bran VII Maester
    // Luwin leads them.
    // Eddard dies at 9 / 66, a step before the crypts.
    {
      episode: 9,
      chapter: 66,
      source: 'episode',
      value: [
        north.ricEddardDead,
        north.ricRobbWar,
        north.ricCatelyn,
        north.ricBran,
      ],
    },
    {
      episode: 9,
      chapter: 66,
      source: 'chapter',
      value: [
        north.ricShaggydog,
        north.ricEddardDead,
        north.ricCatelyn,
        north.ricRobb,
        north.ricBran,
      ],
    },
    {
      episode: 10,
      chapter: 67,
      source: 'episode',
      value: [
        north.ricBranCrypt,
        north.ricShaggydog,
        north.ricEddardDead,
        north.ricOsha,
        north.ricRobb,
      ],
    },
    {
      episode: 10,
      chapter: 67,
      source: 'chapter',
      value: [
        north.ricBranCrypt,
        north.ricShaggydog,
        north.ricEddardDead,
        north.ricLuwin,
        north.ricOsha,
      ],
    },
    // Stage 2 (#1482): season 2 and A Clash of Kings.
    {
      episode: 16,
      chapter: 120,
      source: 'episode',
      value: [
        winterfell2.riShowBran16,
        winterfell2.riShowRodrik,
        winterfell2.riShowOsha16,
      ],
    },
    {
      episode: 20,
      chapter: 143,
      source: 'episode',
      value: [
        winterfell2.riShowBran20,
        winterfell2.riShowOsha20,
        winterfell2.riShowLuwin20,
      ],
    },
    {
      episode: 13,
      chapter: 95,
      source: 'chapter',
      value: [
        winterfell2.riBBran95,
        winterfell2.riBLittle95,
        winterfell2.riBBig95,
        winterfell2.riBShaggydog95,
        winterfell2.riBJojen95,
      ],
    },
    {
      episode: 16,
      chapter: 124,
      source: 'chapter',
      value: [
        winterfell2.riBBran124,
        winterfell2.riBOsha124,
        winterfell2.riBShaggydog124,
      ],
    },
    {
      episode: 20,
      chapter: 143,
      source: 'chapter',
      value: [
        winterfell2.riBOsha143,
        winterfell2.riBShaggydog143,
        winterfell2.riBBran143,
      ],
    },
  ],
  'jory-cassel': [
    { episode: 1, chapter: 2, value: [north.joryEddard] },
    { episode: 5, chapter: 36, value: [north.joryEddardDead, north.joryJaime] },
  ],
  'sansa-stark': [
    {
      episode: 1,
      chapter: 5,
      source: 'chapter',
      value: [
        north.sanJoffrey,
        north.sanEddard,
        north.sanArya,
        north.sanCatelyn,
      ],
    },
    // The show's Sansa names her wolf at her gate; Sansa I (chapter 16) is
    // the book's first chapter to name it.
    {
      episode: 1,
      chapter: 5,
      source: 'episode',
      value: [
        north.sanJoffrey,
        north.sanEddard,
        north.sanArya,
        north.sanLady,
        north.sanCatelyn,
      ],
    },
    {
      episode: 1,
      chapter: 16,
      source: 'chapter',
      value: [
        north.sanJoffrey,
        north.sanLady,
        north.sanEddard,
        north.sanArya,
        north.sanCatelyn,
      ],
    },
    {
      episode: 2,
      chapter: 17,
      value: [
        north.sanJoffreyRiver,
        north.sanLadyDead,
        north.sanEddardLady,
        north.sanAryaQuarrel,
        north.sanCersei,
      ],
    },
    {
      episode: 8,
      chapter: 52,
      value: [
        north.sanCerseiHostage,
        north.sanJoffreyKing,
        north.sanEddardSeized,
        north.sanAryaGone,
      ],
    },
    {
      episode: 9,
      chapter: 66,
      value: [
        north.sanJoffreyExecution,
        north.sanEddardDead,
        north.sanCerseiHostage,
        north.sanAryaGone,
      ],
    },
    {
      episode: 10,
      chapter: 68,
      value: [
        north.sanJoffreyHeads,
        north.sanEddardDead,
        north.sanMordaneDead,
        north.sanSandor,
        north.sanCerseiHostage,
      ],
    },
    // Stage 2 (#1479): season 2 and A Clash of Kings. Sansa I (chapter 76)
    // is the books' name-day tourney; Shae is given to her in episode 13,
    // and the beating and Tyrion's offer are "Garden of Bones" (14).
    {
      episode: 11,
      chapter: 76,
      source: 'chapter',
      value: [
        kingsLanding2.sanJoffreyBook,
        kingsLanding2.sanSandorBook,
        kingsLanding2.sanDontosSaved,
        kingsLanding2.sanArys,
        kingsLanding2.sanTyrionBook,
      ],
    },
    {
      episode: 13,
      chapter: 99,
      source: 'episode',
      value: [kingsLanding2.sanShae],
    },
    {
      episode: 14,
      chapter: 103,
      source: 'episode',
      value: [
        kingsLanding2.sanTyrionShow,
        kingsLanding2.sanJoffreyShow,
        kingsLanding2.sanShae,
      ],
    },
    // Sansa II: Dontos pledges to send her home.
    {
      episode: 14,
      chapter: 92,
      source: 'chapter',
      value: [kingsLanding2.sanDontosPledge, kingsLanding2.sanSandorGodswood],
    },
    // Sansa III: Tyrion stops the beating.
    {
      episode: 14,
      chapter: 106,
      source: 'chapter',
      value: [
        kingsLanding2.sanTyrionProtect,
        kingsLanding2.sanBorosBeat,
        kingsLanding2.sanJoffreyBeat,
      ],
    },
    // The riot, "The Old Gods and the New".
    {
      episode: 16,
      chapter: 115,
      source: 'episode',
      value: [
        kingsLanding2.sanSandorRescue,
        kingsLanding2.sanShaeConfides,
        kingsLanding2.sanJoffreyRiot,
      ],
    },
    {
      episode: 19,
      chapter: 136,
      source: 'episode',
      value: [
        kingsLanding2.sanSandorOffer,
        kingsLanding2.sanCerseiBallroom,
        kingsLanding2.sanShae,
      ],
    },
    {
      episode: 19,
      chapter: 136,
      source: 'chapter',
      value: [kingsLanding2.sanSandorLeaves, kingsLanding2.sanDontosPledge],
    },
    // The court of rewards: Sansa VIII, and "Valar Morghulis".
    {
      episode: 20,
      chapter: 139,
      source: 'episode',
      value: [
        kingsLanding2.sanJoffreyFreed,
        kingsLanding2.sanPetyr,
        kingsLanding2.sanMargaery,
      ],
    },
    {
      episode: 20,
      chapter: 139,
      source: 'chapter',
      value: [
        kingsLanding2.sanJoffreyVoid,
        kingsLanding2.sanMargaery,
        kingsLanding2.sanDontosEscape,
      ],
    },
    // Stage 3 (#1651). The show: "Dark Wings, Dark Words" (22, with the
    // docks of 21), "And Now His Watch Is Ended" (24), "The Climb" (26),
    // "Second Sons" (28) and "Mhysa" (30).
    {
      episode: 22,
      chapter: 150,
      source: 'episode',
      value: [
        kingsLanding3.sanOlenna,
        kingsLanding3.sanLorasEscort,
        kingsLanding3.sanMargaeryWelcome,
        kingsLanding3.sanShaeWarns,
        kingsLanding3.sanPetyrShip,
      ],
    },
    {
      episode: 24,
      chapter: 160,
      source: 'episode',
      value: [
        kingsLanding3.sanMargaeryLoras,
        kingsLanding3.sanLorasMatch,
        kingsLanding3.sanOlenna,
        kingsLanding3.sanPetyrShip,
        kingsLanding3.sanShaeWarns,
      ],
    },
    {
      episode: 26,
      chapter: 163,
      source: 'episode',
      value: [
        kingsLanding3.sanTyrionNews,
        kingsLanding3.sanLorasWedding,
        kingsLanding3.sanPetyrGone,
        kingsLanding3.sanMargaeryLoras,
        kingsLanding3.sanShaeWarns,
      ],
    },
    {
      episode: 28,
      chapter: 172,
      source: 'episode',
      value: [
        kingsLanding3.sanTyrionHusband,
        kingsLanding3.sanJoffreyWedding,
        kingsLanding3.sanMargaeryConsoles,
        kingsLanding3.sanShaeWarns,
      ],
    },
    {
      episode: 30,
      chapter: 196,
      source: 'episode',
      value: [
        kingsLanding3.sanTyrionGardens,
        kingsLanding3.sanRobbDead,
        kingsLanding3.sanCatelynDead,
        kingsLanding3.sanJoffreyWedding,
        kingsLanding3.sanShaeWarns,
      ],
    },
    // The books: Sansa I (150), II (160) and III (172).
    {
      episode: 22,
      chapter: 150,
      source: 'chapter',
      value: [
        kingsLanding3.sanOlennaBooks,
        kingsLanding3.sanMargaeryInvite,
        kingsLanding3.sanLorasForgets,
        kingsLanding3.sanJoffreyMonster,
        kingsLanding2.sanDontosEscape,
      ],
    },
    {
      episode: 24,
      chapter: 160,
      source: 'chapter',
      value: [
        kingsLanding3.sanMargaeryClose,
        kingsLanding3.sanDontosWary,
        kingsLanding3.sanOlennaBooks,
        kingsLanding3.sanLorasForgets,
        kingsLanding3.sanJoffreyMonster,
      ],
    },
    {
      episode: 28,
      chapter: 172,
      source: 'chapter',
      value: [
        kingsLanding3.sanTyrionWedBook,
        kingsLanding3.sanCerseiNews,
        kingsLanding3.sanGarlan,
        kingsLanding3.sanJoffreyBedding,
        kingsLanding3.sanDontosWary,
      ],
    },
  ],
  'arya-stark': [
    {
      episode: 1,
      chapter: 5,
      value: [north.aryaEddard, north.aryaSansa, north.aryaJon],
    },
    {
      episode: 2,
      chapter: 17,
      value: [
        north.aryaNymeria,
        north.aryaMycah,
        north.aryaSansaLie,
        north.aryaJonNeedle,
        north.aryaEddard,
      ],
    },
    {
      episode: 3,
      chapter: 23,
      value: [
        north.arySyrio,
        north.aryaEddardHand,
        north.aryaJonNeedle,
        north.aryaSansaCourt,
        north.aryaNymeriaGone,
      ],
    },
    // The show holds Sansa in the same episode; the books tell it in
    // Sansa IV (chapter 52).
    {
      episode: 8,
      chapter: 51,
      source: 'episode',
      value: [
        north.arySyrioStand,
        north.aryaEddardSeized,
        north.aryaMeryn,
        north.aryaSansaHeld,
        north.aryaJonNeedle,
      ],
    },
    {
      episode: 8,
      chapter: 51,
      source: 'chapter',
      value: [
        north.arySyrioStand,
        north.aryaEddardSeized,
        north.aryaMeryn,
        north.aryaSansaApart,
        north.aryaJonNeedle,
      ],
    },
    {
      episode: 8,
      chapter: 52,
      source: 'chapter',
      value: [
        north.arySyrioStand,
        north.aryaEddardSeized,
        north.aryaMeryn,
        north.aryaSansaHeld,
        north.aryaJonNeedle,
      ],
    },
    {
      episode: 9,
      chapter: 66,
      value: [
        north.aryaEddardDead,
        north.aryaYoren,
        north.aryaJoffrey,
        north.arySyrioPast,
        north.aryaSansaHeld,
      ],
    },
    // Stage 2 (#1481): Yoren’s road, Harrenhal and the escape.
    {
      episode: 12,
      chapter: 79,
      source: 'episode',
      value: [
        riverlands2.aryJaqenWater,
        riverlands2.aryGendrySecret,
        riverlands2.aryYorenShow,
      ],
    },
    {
      episode: 14,
      chapter: 100,
      source: 'episode',
      value: [
        riverlands2.aryTywinCupbearer,
        riverlands2.aryGregorShow,
        riverlands2.aryPolliverShow,
        riverlands2.aryGendryCaptive,
        riverlands2.aryHotPieCaptive,
      ],
    },
    {
      episode: 16,
      chapter: 104,
      source: 'episode',
      value: [
        riverlands2.aryTywinWar,
        riverlands2.aryJaqenDeaths,
        riverlands2.aryTickler,
        riverlands2.aryAmory,
        riverlands2.aryGendryCaptive,
      ],
    },
    {
      episode: 20,
      chapter: 138,
      source: 'episode',
      value: [
        riverlands2.aryJaqenCoin,
        riverlands2.aryGendryEscape,
        riverlands2.aryHotPieEscape,
      ],
    },
    {
      episode: 10,
      chapter: 75,
      source: 'chapter',
      value: [
        riverlands2.aryYorenBook,
        riverlands2.aryHotPieBook,
        riverlands2.aryLommyBook,
        riverlands2.aryGendryBook,
      ],
    },
    {
      episode: 12,
      chapter: 79,
      source: 'chapter',
      value: [
        riverlands2.aryJaqenBook,
        riverlands2.aryRorgeBook,
        riverlands2.aryBiterBook,
        riverlands2.aryGendryWagon,
      ],
    },
    {
      episode: 14,
      chapter: 100,
      source: 'chapter',
      value: [
        riverlands2.aryGregorBook,
        riverlands2.aryPolliverBook,
        riverlands2.aryTicklerBook,
        riverlands2.aryChiswyckBook,
        riverlands2.aryGendrySpared,
      ],
    },
    {
      episode: 15,
      chapter: 112,
      source: 'chapter',
      value: [
        riverlands2.aryWeeseBook,
        riverlands2.aryJaqenDebt,
        riverlands2.aryAmoryBook,
        riverlands2.aryRorgeHarrenhal,
        riverlands2.aryGendryForge,
      ],
    },
    {
      episode: 18,
      chapter: 138,
      source: 'chapter',
      value: [
        riverlands2.aryRooseBook,
        riverlands2.aryJaqenCoinBook,
        riverlands2.aryGendryRide,
        riverlands2.aryHotPieRide,
      ],
    },
  ],
  // The show has Jaime push him at the end of episode 1, his gate; the
  // book does it in Bran II (chapter 9).
  'bran-stark': [
    {
      episode: 1,
      chapter: 2,
      source: 'chapter',
      value: [north.branEddard, north.branRobb, north.branJon],
    },
    {
      episode: 1,
      chapter: 2,
      source: 'episode',
      value: [north.branEddard, north.branRobb, north.branJon, north.branJaime],
    },
    {
      episode: 1,
      chapter: 9,
      source: 'chapter',
      value: [north.branJaime, north.branEddard, north.branRobb, north.branJon],
    },
    {
      episode: 4,
      chapter: 25,
      value: [
        north.branSummer,
        north.branTyrion,
        north.branHodor,
        north.branRobbCastle,
        north.branJaime,
      ],
    },
    {
      episode: 6,
      chapter: 38,
      value: [
        north.branOsha,
        north.branRobbRescue,
        north.branTheon,
        north.branSummer,
        north.branHodor,
      ],
    },
    {
      episode: 8,
      chapter: 54,
      value: [
        north.branRobbWar,
        north.branOshaGodswood,
        north.branSummer,
        north.branRickon,
        north.branHodor,
      ],
    },
    // The crypts: Osha carries him down in both media; in Bran VII Maester
    // Luwin leads them and Shaggydog bites the maester.
    {
      episode: 10,
      chapter: 67,
      source: 'episode',
      value: [
        north.branEddardDead,
        north.branRickonCrypt,
        north.branOshaCrypt,
        north.branSummer,
        north.branLuwin,
      ],
    },
    {
      episode: 10,
      chapter: 67,
      source: 'chapter',
      value: [
        north.branEddardDead,
        north.branRickonCrypt,
        north.branLuwinCrypt,
        north.branOshaCrypt,
        north.branSummer,
      ],
    },
    // Stage 2 (#1482): season 2 and A Clash of Kings.
    {
      episode: 11,
      chapter: 78,
      source: 'episode',
      value: [
        winterfell2.brShowLuwin,
        winterfell2.brShowRickon,
        winterfell2.brShowOsha,
        winterfell2.brShowHodor,
        winterfell2.brShowSummer,
      ],
    },
    {
      episode: 16,
      chapter: 120,
      source: 'episode',
      value: [
        winterfell2.brShowTheon,
        winterfell2.brShowRodrik,
        winterfell2.brShowOshaFree,
        winterfell2.brShowRickonFlight,
      ],
    },
    {
      episode: 20,
      chapter: 143,
      source: 'episode',
      value: [
        winterfell2.brShowLuwinDying,
        winterfell2.brShowOshaCrypt,
        winterfell2.brShowRickonCrypt,
        winterfell2.brShowHodorCrypt,
      ],
    },
    {
      episode: 11,
      chapter: 78,
      source: 'chapter',
      value: [
        winterfell2.brBSummer78,
        winterfell2.brBLuwin78,
        winterfell2.brBOsha78,
        winterfell2.brBRickon78,
        winterfell2.brBOldNan78,
      ],
    },
    {
      episode: 13,
      chapter: 102,
      source: 'chapter',
      value: [
        winterfell2.brBJojen102,
        winterfell2.brBMeera102,
        winterfell2.brBSummer102,
        winterfell2.brBHodor102,
        winterfell2.brBLuwin102,
      ],
    },
    {
      episode: 16,
      chapter: 120,
      source: 'chapter',
      value: [
        winterfell2.brBTheon120,
        winterfell2.brBMikken120,
        winterfell2.brBOsha120,
        winterfell2.brBJojen120,
      ],
    },
    {
      episode: 20,
      chapter: 143,
      source: 'chapter',
      value: [
        winterfell2.brBLuwin143,
        winterfell2.brBOsha143,
        winterfell2.brBJojen143,
        winterfell2.brBMeera143,
        winterfell2.brBHodor143,
      ],
    },
  ],
  'benjen-stark': [
    { episode: 1, chapter: 6, value: [north.benJon, north.benEddard] },
    {
      episode: 2,
      chapter: 14,
      value: [north.benJonRoad, north.benEddard, north.benTyrion],
    },
    // Show only: "Lord Snow", the farewells at Castle Black.
    {
      episode: 3,
      chapter: 14,
      source: 'episode',
      value: [
        north.benJonRanging,
        north.benEddard,
        north.benYoren,
        north.benTyrionWall,
      ],
    },
    {
      episode: 9,
      chapter: 66,
      value: [north.benJonRoad, north.benEddardDead, north.benTyrion],
    },
  ],
  // The show names him only in "The Pointy End"; Jon II (chapter 11) does.
  'grey-wind': [
    { episode: 8, chapter: 11, source: 'chapter', value: [north.gwRobb] },
    { episode: 8, chapter: 54, value: [north.gwRobb, north.gwGreatjon] },
    // Stage 3 (#1653). The show kills him at the Twins, "The Rains of
    // Castamere" (29). The books: Catelyn II (158), VI (193) and VII (195);
    // his own death waits for chapter 198.
    {
      episode: 29,
      chapter: 195,
      source: 'episode',
      value: [riverlands3.gwRobb29, riverlands3.gwGreatjon29],
    },
    {
      episode: 23,
      chapter: 158,
      source: 'chapter',
      value: [
        riverlands3.gwRobb158,
        riverlands3.gwJeyne158,
        riverlands3.gwRolph158,
        riverlands3.gwCatelyn158,
      ],
    },
    {
      episode: 29,
      chapter: 193,
      source: 'chapter',
      value: [
        riverlands3.gwRobb193,
        riverlands3.gwRaynald193,
        riverlands3.gwLothar193,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands3.gwRobb195,
        riverlands3.gwRaynald195,
        riverlands3.gwLothar193,
      ],
    },
  ],
  'lady-direwolf': [
    { episode: 1, chapter: 16, value: [north.ladySansa] },
    {
      episode: 2,
      chapter: 17,
      value: [north.ladySansaDead, north.ladyEddard, north.ladyCersei],
    },
  ],
  // The show names her in "The Kingsroad", the episode of the bite, and Arya
  // drives her off with stones. The book names her in Arya I and tells the
  // bite in Sansa I and Eddard III, where she is simply gone.
  'nymeria': [
    { episode: 2, chapter: 8, source: 'chapter', value: [north.nymArya] },
    {
      episode: 2,
      chapter: 8,
      source: 'episode',
      value: [north.nymAryaStones, north.nymJoffrey],
    },
    {
      episode: 2,
      chapter: 17,
      source: 'chapter',
      value: [north.nymAryaGone, north.nymJoffrey],
    },
  ],
  'summer-direwolf': [
    { episode: 4, chapter: 18, value: [north.sumBran, north.sumCatelyn] },
    // Stage 2 (#1482): season 2 and A Clash of Kings.
    {
      episode: 13,
      chapter: 102,
      source: 'episode',
      value: [winterfell2.suShowBran13, winterfell2.suShowHodor13],
    },
    {
      episode: 11,
      chapter: 78,
      source: 'chapter',
      value: [winterfell2.suBBran78, winterfell2.suBShaggydog78],
    },
    {
      episode: 13,
      chapter: 102,
      source: 'chapter',
      value: [
        winterfell2.suBBran102,
        winterfell2.suBJojen102,
        winterfell2.suBMeera102,
      ],
    },
  ],
  'shaggydog': [
    { episode: 10, chapter: 25, source: 'chapter', value: [north.shaRickon] },
    // In the crypts he leaps at Bran and Osha in "Fire and Blood", and bites
    // Maester Luwin in Bran VII.
    {
      episode: 10,
      chapter: 67,
      source: 'episode',
      value: [north.shaRickonCrypt, north.shaBran],
    },
    {
      episode: 10,
      chapter: 67,
      source: 'chapter',
      value: [north.shaRickonCrypt, north.shaLuwin],
    },
    // Stage 2 (#1482): season 2 and A Clash of Kings.
    {
      episode: 16,
      chapter: 120,
      source: 'episode',
      value: [winterfell2.shShowRickon16, winterfell2.shShowOsha16],
    },
    {
      episode: 13,
      chapter: 95,
      source: 'chapter',
      value: [
        winterfell2.shBRickon95,
        winterfell2.shBLittle95,
        winterfell2.shBSummer95,
        winterfell2.shBJojen95,
      ],
    },
    {
      episode: 20,
      chapter: 143,
      source: 'chapter',
      value: [winterfell2.shBRickon143, winterfell2.shBOsha143],
    },
  ],
  'ghost-direwolf': [
    { episode: 4, chapter: 6, value: [north.ghoJon] },
    { episode: 8, chapter: 53, value: [north.ghoJon, north.ghoJeor] },
    {
      episode: 15,
      chapter: 117,
      source: 'episode',
      value: [wall2.ghoJonNorth, wall2.ghoSam, wall2.ghoGilly],
    },
    {
      episode: 11,
      chapter: 97,
      source: 'chapter',
      value: [wall2.ghoJonBook, wall2.ghoGillyBook],
    },
    {
      episode: 17,
      chapter: 127,
      source: 'chapter',
      value: [wall2.ghoJonDream, wall2.ghoQhorin],
    },
  ],
  'theon-greyjoy': [
    { episode: 1, chapter: 2, value: [north.theEddard, north.theRobb] },
    {
      episode: 6,
      chapter: 38,
      value: [north.theBran, north.theRobbAnger, north.theOsha],
    },
    // Show only: "You Win or You Die" and "Fire and Blood".
    {
      episode: 7,
      chapter: 38,
      source: 'episode',
      value: [north.theBran, north.theRobbAnger, north.theOshaLord],
    },
    {
      episode: 10,
      chapter: 38,
      source: 'episode',
      value: [north.theRobbKing, north.theBran, north.theOshaLord],
    },
    // Stage 2 (#1482): season 2 and A Clash of Kings.
    {
      episode: 11,
      chapter: 81,
      source: 'episode',
      value: [winterfell2.thShowRobb11, winterfell2.thShowCatelyn11],
    },
    {
      episode: 12,
      chapter: 85,
      source: 'episode',
      value: [winterfell2.thShowBalon12, winterfell2.thShowAsha12],
    },
    {
      episode: 16,
      chapter: 120,
      source: 'episode',
      value: [
        winterfell2.thShowBran16,
        winterfell2.thShowRodrik16,
        winterfell2.thShowDagmer16,
        winterfell2.thShowOsha16,
      ],
    },
    {
      episode: 20,
      chapter: 143,
      source: 'episode',
      value: [winterfell2.thShowLuwin20, winterfell2.thShowDagmer20],
    },
    {
      episode: 12,
      chapter: 85,
      source: 'chapter',
      value: [winterfell2.thBBalon85, winterfell2.thBAeron85],
    },
    {
      episode: 13,
      chapter: 98,
      source: 'chapter',
      value: [
        winterfell2.thBAsha98,
        winterfell2.thBBalon98,
        winterfell2.thBVictarion98,
        winterfell2.thBWex98,
        winterfell2.thBAeron98,
      ],
    },
    {
      episode: 16,
      chapter: 120,
      source: 'chapter',
      value: [
        winterfell2.thBBran120,
        winterfell2.thBMikken120,
        winterfell2.thBOsha120,
      ],
    },
    {
      episode: 17,
      chapter: 124,
      source: 'chapter',
      value: [
        winterfell2.thBOsha124,
        winterfell2.thBLuwin124,
        winterfell2.thBFarlen124,
        winterfell2.thBWex124,
        winterfell2.thBLorren124,
      ],
    },
    {
      episode: 18,
      chapter: 130,
      source: 'chapter',
      value: [
        winterfell2.thBAsha130,
        winterfell2.thBFarlen130,
        winterfell2.thBDagmer130,
        winterfell2.thBLuwin130,
        winterfell2.thBWex130,
      ],
    },
    {
      episode: 20,
      chapter: 140,
      source: 'chapter',
      value: [
        winterfell2.thBLuwin140,
        winterfell2.thBRodrik140,
        winterfell2.thBRamsay140,
        winterfell2.thBLorren140,
        winterfell2.thBWex140,
      ],
    },
  ],
  'luwin': [
    { episode: 1, chapter: 7, value: [north.luwEddard, north.luwCatelyn] },
    {
      episode: 4,
      chapter: 25,
      value: [north.luwBran, north.luwRobb, north.luwEddard, north.luwCatelyn],
    },
    {
      episode: 8,
      chapter: 54,
      value: [
        north.luwBran,
        north.luwRobbWar,
        north.luwEddard,
        north.luwCatelyn,
      ],
    },
    {
      episode: 9,
      chapter: 66,
      value: [
        north.luwBran,
        north.luwRobbWar,
        north.luwEddardDead,
        north.luwCatelyn,
      ],
    },
    {
      episode: 10,
      chapter: 67,
      value: [
        north.luwBranNews,
        north.luwRickon,
        north.luwEddardDead,
        north.luwRobbWar,
      ],
    },
    // Stage 2 (#1482): season 2 and A Clash of Kings.
    {
      episode: 16,
      chapter: 120,
      source: 'episode',
      value: [
        winterfell2.luShowTheon16,
        winterfell2.luShowBran16,
        winterfell2.luShowRodrik16,
      ],
    },
    {
      episode: 18,
      chapter: 130,
      source: 'episode',
      value: [
        winterfell2.luShowOsha18,
        winterfell2.luShowBran18,
        winterfell2.luShowTheon18,
      ],
    },
    {
      episode: 20,
      chapter: 143,
      source: 'episode',
      value: [
        winterfell2.luShowTheon20,
        winterfell2.luShowBran20,
        winterfell2.luShowOsha20,
      ],
    },
    {
      episode: 13,
      chapter: 90,
      source: 'chapter',
      value: [
        winterfell2.luBBran90,
        winterfell2.luBRodrik90,
        winterfell2.luBWyman90,
        winterfell2.luBDonella90,
        winterfell2.luBLittle90,
      ],
    },
    {
      episode: 17,
      chapter: 124,
      source: 'chapter',
      value: [winterfell2.luBTheon124],
    },
    {
      episode: 20,
      chapter: 143,
      source: 'chapter',
      value: [
        winterfell2.luBBran143,
        winterfell2.luBOsha143,
        winterfell2.luBTheon143,
      ],
    },
  ],
  'rodrik-cassel': [
    { episode: 1, chapter: 8, value: [north.rodEddard] },
    { episode: 2, chapter: 15, value: [north.rodCatelyn, north.rodEddard] },
    {
      episode: 4,
      chapter: 29,
      value: [north.rodCatelynInn, north.rodTyrion, north.rodEddard],
    },
    {
      episode: 5,
      chapter: 36,
      value: [
        north.rodCatelynInn,
        north.rodTyrion,
        north.rodJoryDead,
        north.rodEddard,
      ],
    },
    {
      episode: 9,
      chapter: 66,
      value: [
        north.rodCatelynInn,
        north.rodEddardDead,
        north.rodJoryDead,
        north.rodTyrion,
      ],
    },
    // Stage 2 (#1482): season 2 and A Clash of Kings.
    {
      episode: 11,
      chapter: 81,
      source: 'episode',
      value: [
        winterfell2.rdShowRobb11,
        winterfell2.rdShowBran11,
        winterfell2.rdShowCatelyn11,
      ],
    },
    {
      episode: 16,
      chapter: 120,
      source: 'episode',
      value: [
        winterfell2.rdShowTheon16,
        winterfell2.rdShowBran16,
        winterfell2.rdShowRickon16,
        winterfell2.rdShowDagmer16,
      ],
    },
    {
      episode: 13,
      chapter: 90,
      source: 'chapter',
      value: [
        winterfell2.rdBBran90,
        winterfell2.rdBLuwin90,
        winterfell2.rdBWyman90,
        winterfell2.rdBDonella90,
      ],
    },
    {
      episode: 15,
      chapter: 109,
      source: 'chapter',
      value: [
        winterfell2.rdBDonella109,
        winterfell2.rdBBran109,
        winterfell2.rdBLuwin109,
      ],
    },
    {
      episode: 16,
      chapter: 140,
      source: 'chapter',
      value: [winterfell2.rdBTheon140, winterfell2.rdBRamsay140],
    },
  ],
  // Show: "Lord Snow", her story at Bran's bed. Books: Catelyn III, she
  // bathes Catelyn; her stories for Bran wait for Bran IV.
  'old-nan': [
    { episode: 3, chapter: 15, source: 'episode', value: [north.nanBran] },
    { episode: 3, chapter: 15, source: 'chapter', value: [north.nanCatelyn] },
    {
      episode: 3,
      chapter: 25,
      source: 'chapter',
      value: [north.nanBranBook, north.nanCatelyn],
    },
    // Stage 2 (#1482): season 2 and A Clash of Kings.
    {
      episode: 13,
      chapter: 95,
      source: 'chapter',
      value: [winterfell2.nanBran95, winterfell2.nanHodor95],
    },
  ],
  'hodor': [
    { episode: 4, chapter: 25, value: [north.hodBran] },
    // Stage 2 (#1482): season 2 and A Clash of Kings.
    {
      episode: 16,
      chapter: 120,
      source: 'episode',
      value: [
        winterfell2.hoShowBran16,
        winterfell2.hoShowOsha16,
        winterfell2.hoShowRickon16,
      ],
    },
    {
      episode: 20,
      chapter: 143,
      source: 'episode',
      value: [
        winterfell2.hoShowBran20,
        winterfell2.hoShowOsha16,
        winterfell2.hoShowRickon16,
      ],
    },
    {
      episode: 13,
      chapter: 90,
      source: 'chapter',
      value: [
        winterfell2.hoBBran90,
        winterfell2.hoBLittle90,
        winterfell2.hoBLuwin90,
      ],
    },
    {
      episode: 13,
      chapter: 102,
      source: 'chapter',
      value: [
        winterfell2.hoBBran102,
        winterfell2.hoBJojen102,
        winterfell2.hoBMeera102,
      ],
    },
    {
      episode: 20,
      chapter: 143,
      source: 'chapter',
      value: [
        winterfell2.hoBBran143,
        winterfell2.hoBJojen143,
        winterfell2.hoBMeera143,
        winterfell2.hoBOsha143,
      ],
    },
  ],
  'osha': [
    {
      episode: 6,
      chapter: 38,
      value: [north.oshBran, north.oshRobb, north.oshTheon],
    },
    // Show only: "You Win or You Die", Luwin questions her.
    {
      episode: 7,
      chapter: 38,
      source: 'episode',
      value: [north.oshBran, north.oshRobb, north.oshTheon, north.oshLuwin],
    },
    {
      episode: 8,
      chapter: 54,
      value: [north.oshBranGodswood, north.oshRobbWar, north.oshTheon],
    },
    // "Fire and Blood" and Bran VII: she carries Bran into the crypts.
    {
      episode: 10,
      chapter: 67,
      value: [
        north.oshBranCrypt,
        north.oshRickon,
        north.oshShaggydog,
        north.oshRobbWar,
      ],
    },
    // Stage 2 (#1482): season 2 and A Clash of Kings.
    {
      episode: 16,
      chapter: 120,
      source: 'episode',
      value: [
        winterfell2.osShowTheon16,
        winterfell2.osShowBran16,
        winterfell2.osShowRickon16,
        winterfell2.osShowHodor16,
      ],
    },
    {
      episode: 18,
      chapter: 130,
      source: 'episode',
      value: [
        winterfell2.osShowLuwin18,
        winterfell2.osShowBran18,
        winterfell2.osShowRickon18,
        winterfell2.osShowHodor18,
      ],
    },
    {
      episode: 20,
      chapter: 143,
      source: 'episode',
      value: [
        winterfell2.osShowLuwin20,
        winterfell2.osShowBran18,
        winterfell2.osShowRickon18,
        winterfell2.osShowHodor18,
      ],
    },
    {
      episode: 11,
      chapter: 78,
      source: 'chapter',
      value: [winterfell2.osBBran78, winterfell2.osBLuwin78],
    },
    {
      episode: 16,
      chapter: 120,
      source: 'chapter',
      value: [winterfell2.osBTheon120, winterfell2.osBBran120],
    },
    {
      episode: 17,
      chapter: 124,
      source: 'chapter',
      value: [
        winterfell2.osBTheon124,
        winterfell2.osBBran124,
        winterfell2.osBRickon124,
      ],
    },
    {
      episode: 20,
      chapter: 143,
      source: 'chapter',
      value: [
        winterfell2.osBBran143,
        winterfell2.osBRickon143,
        winterfell2.osBLuwin143,
      ],
    },
  ],
  // Jeyne Poole is the book's alone. The show sends Mordane to face the
  // soldiers in "The Pointy End"; both media tell her death at 10 / 68.
  'mordane': [
    {
      episode: 1,
      chapter: 8,
      source: 'episode',
      value: [north.morSansa, north.morArya],
    },
    {
      episode: 1,
      chapter: 8,
      source: 'chapter',
      value: [north.morSansaBook, north.morArya, north.morJeyne],
    },
    {
      episode: 8,
      chapter: 8,
      source: 'episode',
      value: [north.morSansaFlight, north.morArya],
    },
    {
      episode: 10,
      chapter: 68,
      value: [north.morSansaHeads, north.morAryaPast, north.morEddardDead],
    },
  ],
  // Books only, as his record is. Arya IV (chapter 51) finds him dying.
  'hullen': [
    {
      episode: 1,
      chapter: 2,
      source: 'chapter',
      value: [north.hulEddard, north.hulHarwin],
    },
    {
      episode: 8,
      chapter: 51,
      source: 'chapter',
      value: [north.hulArya, north.hulEddardPast, north.hulHarwin],
    },
  ],
  // Books only, as her record is. Vayon Poole opens at Eddard III
  // (chapter 17), and his death is told in Sansa IV (chapter 52).
  'jeyne-poole': [
    {
      episode: 1,
      chapter: 8,
      source: 'chapter',
      value: [north.jeySansa, north.jeyArya],
    },
    {
      episode: 2,
      chapter: 17,
      source: 'chapter',
      value: [north.jeySansa, north.jeyArya, north.jeyVayon],
    },
    {
      episode: 8,
      chapter: 52,
      source: 'chapter',
      value: [north.jeySansaApart, north.jeyVayonDead, north.jeyArya],
    },
  ],
  // Each medium at its own gate: "The Kingsroad" and Bran VI.
  'mikken': [
    {
      episode: 2,
      chapter: 54,
      source: 'episode',
      value: [north.mikArya, north.mikJon],
    },
    {
      episode: 2,
      chapter: 54,
      source: 'chapter',
      value: [north.mikArya, north.mikJon],
    },
    // Stage 2 (#1482): season 2 and A Clash of Kings.
    {
      episode: 15,
      chapter: 109,
      source: 'chapter',
      value: [winterfell2.miBBran109, winterfell2.miBJojen109],
    },
    {
      episode: 16,
      chapter: 120,
      source: 'chapter',
      value: [
        winterfell2.miBTheon120,
        winterfell2.miBBran120,
        winterfell2.miBJojen120,
      ],
    },
  ],
  'hallis-mollen': [
    {
      episode: 2,
      chapter: 15,
      source: 'chapter',
      value: [north.halCatelyn, north.halRobb],
    },
    // Stage 3 (#1653): Catelyn and Robb in the past tense from Catelyn VII
    // (195).
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [riverlands3.haCatelyn195, riverlands3.haRobb195],
    },
  ],
  // Smalljon opens in the books at Catelyn X (chapter 64) and in the show
  // only in season 6.
  'greatjon-umber': [
    { episode: 8, chapter: 54, value: [north.gjRobb, north.gjGreyWind] },
    {
      episode: 9,
      chapter: 64,
      source: 'chapter',
      value: [north.gjRobb, north.gjGreyWind, north.gjSmalljon],
    },
    {
      episode: 10,
      chapter: 72,
      source: 'episode',
      value: [north.gjRobbKing, north.gjGreyWind],
    },
    {
      episode: 10,
      chapter: 72,
      source: 'chapter',
      value: [north.gjRobbKing, north.gjGreyWind, north.gjSmalljon],
    },
    // Stage 3 (#1653): Robb and Grey Wind in the past tense from the Red
    // Wedding, "The Rains of Castamere" (29) and Catelyn VII (195).
    {
      episode: 29,
      chapter: 195,
      source: 'episode',
      value: [riverlands3.gjRobb29, riverlands3.gjGreyWind29],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands3.gjRobb195,
        riverlands3.gjSmalljon195,
        riverlands3.gjRoslin195,
        north.gjGreyWind,
      ],
    },
  ],
  // The northern lords whose show gates fall after episode 10 keep the
  // book's links alone in stage 1.
  'smalljon-umber': [
    {
      episode: 53,
      chapter: 64,
      source: 'chapter',
      value: [north.sjGreatjon, north.sjRobb],
    },
    {
      episode: 53,
      chapter: 72,
      source: 'chapter',
      value: [north.sjGreatjon, north.sjRobbKing],
    },
    // Stage 3 (#1653): the Red Wedding, Catelyn VII (195), where he dies.
    {
      episode: 53,
      chapter: 195,
      source: 'chapter',
      value: [riverlands3.sjRobb195, riverlands3.sjGreatjon195],
    },
  ],
  'rickard-karstark': [
    { episode: 17, chapter: 54, source: 'chapter', value: [north.rkRobb] },
    { episode: 17, chapter: 72, source: 'chapter', value: [north.rkRobbKing] },
    // Stage 3 (#1653): his first show cards, "Dark Wings, Dark Words" (22)
    // and "Kissed by Fire" (25), where he dies; the books, Catelyn II (158)
    // and III (164), where he dies.
    {
      episode: 22,
      chapter: 146,
      source: 'episode',
      value: [riverlands3.rkRobb22, riverlands3.rkTalisa22],
    },
    {
      episode: 25,
      chapter: 164,
      source: 'episode',
      value: [
        riverlands3.rkRobb25,
        riverlands3.rkWillem25,
        riverlands3.rkMartyn25,
        riverlands3.rkCatelyn25,
        riverlands3.rkBrynden25,
      ],
    },
    {
      episode: 23,
      chapter: 158,
      source: 'chapter',
      value: [
        riverlands3.rkRobb158,
        riverlands3.rkCatelyn158,
        riverlands3.rkJaime158,
      ],
    },
    {
      episode: 25,
      chapter: 164,
      source: 'chapter',
      value: [
        riverlands3.rkRobb164,
        riverlands3.rkWillem164,
        riverlands3.rkJaime164,
        riverlands3.rkCatelyn164,
      ],
    },
  ],
  // Tyrion VIII (chapter 63): the battle on the Green Fork.
  'roose-bolton': [
    { episode: 14, chapter: 54, source: 'chapter', value: [north.rooRobb] },
    {
      episode: 14,
      chapter: 63,
      source: 'chapter',
      value: [north.rooRobbFoot, north.rooTywin],
    },
    // Stage 2 (#1481): the show’s Oxcross and news from the North; the
    // books’ Harrenhal.
    {
      episode: 14,
      chapter: 100,
      source: 'episode',
      value: [riverlands2.rooRobbShow],
    },
    {
      episode: 16,
      chapter: 110,
      source: 'episode',
      value: [riverlands2.rooRobbNews],
    },
    {
      episode: 20,
      chapter: 121,
      source: 'chapter',
      value: [
        riverlands2.rooVargo,
        riverlands2.rooAryaBook,
        riverlands2.rooRobett,
      ],
    },
    {
      episode: 20,
      chapter: 138,
      source: 'chapter',
      value: [
        riverlands2.rooAryaNan,
        riverlands2.rooVargoCastle,
        riverlands2.rooWalder,
      ],
    },
  ],
  // Show: "The Pointy End" gives him the vanguard, and "Fire and Blood" has
  // him among the lords who name Robb king. Books: Catelyn VIII, at the
  // war council, and Catelyn XI, at the proclamation.
  'galbart-glover': [
    {
      episode: 8,
      chapter: 56,
      source: 'episode',
      value: [north.galRobbVanguard, north.galGreatjon],
    },
    { episode: 8, chapter: 56, source: 'chapter', value: [north.galRobb] },
    {
      episode: 10,
      chapter: 72,
      source: 'episode',
      value: [north.galRobbKing, north.galGreatjon],
    },
    { episode: 10, chapter: 72, source: 'chapter', value: [north.galRobbKing] },
    // Stage 3 (#1653): Robb in the past tense from the Red Wedding, "The
    // Rains of Castamere" (29) and Catelyn VII (195).
    {
      episode: 29,
      chapter: 195,
      source: 'episode',
      value: [riverlands3.gaRobb29, north.galGreatjon],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [riverlands3.gaRobb195],
    },
  ],
  'robett-glover': [
    { episode: 57, chapter: 54, source: 'chapter', value: [north.robRobb] },
    // Stage 3 (#1653): Robb in the past tense from Catelyn VII (195).
    {
      episode: 57,
      chapter: 195,
      source: 'chapter',
      value: [riverlands3.roRobb195],
    },
  ],
  // Dacey is the book's alone (Catelyn X). Both media have Maege at the
  // proclamation: "Fire and Blood" and Catelyn XI.
  'maege-mormont': [
    { episode: 8, chapter: 54, value: [north.maeRobb] },
    {
      episode: 8,
      chapter: 64,
      source: 'chapter',
      value: [north.maeRobb, north.maeDacey],
    },
    { episode: 10, chapter: 72, source: 'episode', value: [north.maeRobbKing] },
    {
      episode: 10,
      chapter: 72,
      source: 'chapter',
      value: [north.maeRobbKing, north.maeDacey],
    },
    // Stage 3 (#1653): Robb, and the books' Dacey, in the past tense from
    // the Red Wedding, "The Rains of Castamere" (29) and Catelyn VII (195).
    {
      episode: 29,
      chapter: 195,
      source: 'episode',
      value: [riverlands3.maRobb29],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [riverlands3.maRobb195, riverlands3.maDacey195],
    },
  ],
  'dacey-mormont': [
    {
      episode: 9,
      chapter: 64,
      source: 'chapter',
      value: [north.dacRobb, north.dacMaege],
    },
    // Stage 3 (#1653): the Red Wedding, Catelyn VII (195), where she dies.
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands3.daRobb195,
        riverlands3.daMaege195,
        riverlands3.daRyman195,
      ],
    },
  ],
  'wendel-manderly': [
    {
      episode: 29,
      chapter: 56,
      source: 'chapter',
      value: [north.wenCatelyn, north.wenRobb],
    },
    // Stage 3 (#1653): the Red Wedding, Catelyn VII (195), where he dies.
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [riverlands3.weCatelyn195, riverlands3.weRobb195],
    },
  ],
  // The show opens him at his death in "The Pointy End"; Sansa IV
  // (chapter 52) tells it.
  'vayon-poole': [
    {
      episode: 8,
      chapter: 17,
      source: 'chapter',
      value: [north.vayEddard, north.vayJeyne],
    },
    {
      episode: 8,
      chapter: 52,
      source: 'episode',
      value: [north.vayEddardPast],
    },
    {
      episode: 8,
      chapter: 52,
      source: 'chapter',
      value: [north.vayEddardPast, north.vayJeynePast],
    },
  ],
  // Show: "You Win or You Die", he leaves with the letter for Stannis and
  // lives. Books: Eddard XIV (chapter 50), he dies in the throne room.
  'tomard': [
    { episode: 7, chapter: 23, source: 'chapter', value: [north.tomEddard] },
    {
      episode: 7,
      chapter: 23,
      source: 'episode',
      value: [north.tomEddardLetter],
    },
    {
      episode: 7,
      chapter: 50,
      source: 'chapter',
      value: [north.tomEddardThrone],
    },
    {
      episode: 9,
      chapter: 50,
      source: 'episode',
      value: [north.tomEddardDead],
    },
  ],
  // Books only, as their records are. Eddard sends Harwin, and Alyn at the
  // head of twenty men, with Lord Beric's company. Harwin's entry follows
  // his record's step at chapter 45; Alyn's waits for Eddard XII (46), where
  // Fat Tom commands the guard in his place.
  'harwin': [
    {
      episode: 1,
      chapter: 2,
      source: 'chapter',
      value: [north.harEddard, north.harHullen],
    },
    {
      episode: 6,
      chapter: 45,
      source: 'chapter',
      value: [north.harEddardHand, north.harBeric, north.harHullen],
    },
    // Hullen dies in Arya IV (chapter 51).
    {
      episode: 8,
      chapter: 51,
      source: 'chapter',
      value: [north.harEddardHand, north.harBeric, north.harHullenDead],
    },
    {
      episode: 9,
      chapter: 66,
      source: 'chapter',
      value: [north.harEddardDead, north.harBericPast, north.harHullenDead],
    },
  ],
  'alyn': [
    { episode: 1, chapter: 13, source: 'chapter', value: [north.alyEddard] },
    {
      episode: 6,
      chapter: 46,
      source: 'chapter',
      value: [north.alyEddardBeric, north.alyBeric],
    },
    {
      episode: 9,
      chapter: 66,
      source: 'chapter',
      value: [north.alyEddardDead, north.alyBericPast],
    },
  ],

  // The Night's Watch cast (#1347). Ned dies at 9 / 66, so from there every
  // card that names him is in the past tense.
  'jon-snow': [
    {
      episode: 1,
      chapter: 2,
      value: [links.jonEddard, links.jonRobb, links.jonBran],
    },
    {
      episode: 2,
      chapter: 11,
      value: [
        links.jonEddard,
        links.jonBenjenNorth,
        links.jonArya,
        links.jonRobbFarewell,
        links.jonCatelyn,
      ],
    },
    // The show's Tyrion stops the recruits in the armory; the book's Donal
    // Noye does, and the show has no Noye.
    {
      episode: 3,
      chapter: 20,
      source: 'episode',
      value: [
        links.jonEddard,
        links.jonBenjenRanging,
        links.jonAlliser,
        links.jonTyrionEpisode,
      ],
    },
    {
      episode: 3,
      chapter: 20,
      source: 'chapter',
      value: [
        links.jonEddard,
        links.jonBenjenRanging,
        links.jonAlliser,
        links.jonNoye,
        links.jonTyrionChapter,
      ],
    },
    {
      episode: 4,
      chapter: 27,
      value: [
        links.jonSamwell,
        links.jonGhost,
        links.jonAlliser,
        links.jonBenjenRanging,
        links.jonEddard,
      ],
    },
    {
      episode: 7,
      chapter: 49,
      value: [
        links.jonJeorSteward,
        links.jonSamwellSworn,
        links.jonBenjenMissing,
        links.jonGhost,
        links.jonEddard,
      ],
    },
    {
      episode: 8,
      chapter: 53,
      value: [
        links.jonEddardArrested,
        links.jonJeorSaved,
        links.jonAlliserKnife,
        links.jonOthor,
        links.jonSamwellSworn,
      ],
    },
    // The book gives Longclaw and Aemon's name in Jon VIII (chapter 61); its
    // entry waits for Ned's death at chapter 66, which the show tells in the
    // same episode as Longclaw. The show has Sam bring Jon word of Robb
    // (GOT109). The Jon VIII and Jon IX synopses read for #1352 don't say who
    // tells him; restore the book side with a chapter-cited source.
    {
      episode: 9,
      chapter: 66,
      source: 'episode',
      value: [
        links.jonEddardDead,
        links.jonJeorLongclaw,
        links.jonAemon,
        links.jonSamwellRobb,
        links.jonRobbWar,
      ],
    },
    {
      episode: 9,
      chapter: 66,
      source: 'chapter',
      value: [
        links.jonEddardDead,
        links.jonJeorLongclaw,
        links.jonAemon,
        links.jonSamwellSworn,
        links.jonRobbWar,
      ],
    },
    {
      episode: 10,
      chapter: 71,
      value: [
        links.jonEddardDesert,
        links.jonJeorRanging,
        links.jonSamwellStop,
        links.jonGrenn,
        links.jonPyp,
      ],
    },
    {
      episode: 11,
      chapter: 80,
      source: 'episode',
      value: [
        wall2.jonJeorReprimand,
        wall2.jonCrasterShow,
        wall2.jonSamRanging,
        wall2.jonGrennRanging,
      ],
    },
    {
      episode: 15,
      chapter: 117,
      source: 'episode',
      value: [
        wall2.jonQhorinShow,
        wall2.jonJeorLets,
        wall2.jonSamSteward,
        wall2.jonGillyShow,
        wall2.jonCrasterBeat,
      ],
    },
    {
      episode: 16,
      chapter: 125,
      source: 'episode',
      value: [
        wall2.jonYgritteShow,
        wall2.jonQhorinOrder,
        wall2.jonGhostLost,
        wall2.jonJeorLets,
        wall2.jonSamSteward,
      ],
    },
    {
      episode: 20,
      chapter: 142,
      source: 'episode',
      value: [
        wall2.jonQhorinKilled,
        wall2.jonYgritteCompany,
        wall2.jonSamMissing,
      ],
    },
    {
      episode: 11,
      chapter: 80,
      source: 'chapter',
      value: [
        wall2.jonJeorAemon,
        wall2.jonSamVault,
        wall2.jonRobbKing,
        wall2.jonAemonHand,
      ],
    },
    {
      episode: 11,
      chapter: 97,
      source: 'chapter',
      value: [
        wall2.jonCrasterBook,
        wall2.jonGillyBook,
        wall2.jonJeorCraster,
        wall2.jonSamCraster,
        wall2.jonGhostRabbits,
      ],
    },
    {
      episode: 15,
      chapter: 117,
      source: 'chapter',
      value: [
        wall2.jonQhorinBook,
        wall2.jonJeorFist,
        wall2.jonSamHorn,
        wall2.jonGrennDagger,
        wall2.jonGhostFist,
      ],
    },
    {
      episode: 16,
      chapter: 125,
      source: 'chapter',
      value: [
        wall2.jonYgritteBook,
        wall2.jonStonesnake,
        wall2.jonQhorinPass,
        wall2.jonJeorFist,
        wall2.jonGhostFist,
      ],
    },
    {
      episode: 20,
      chapter: 142,
      source: 'chapter',
      value: [
        wall2.jonQhorinDead,
        wall2.jonLord,
        wall2.jonYgritteHunt,
        wall2.jonGhostWounded,
        wall2.jonEbben,
      ],
    },
  ],
  // Books: Jon III (chapter 20) has him give Jon word of Bran; the show has
  // no such scene, and its Jeor first deals with Jon at the oath.
  'jeor-mormont': [
    {
      episode: 3,
      chapter: 20,
      source: 'chapter',
      value: [links.jeorJonLetter],
    },
    {
      episode: 3,
      chapter: 22,
      source: 'episode',
      value: [links.jeorTyrion, links.jeorAemon, links.jeorAlliser],
    },
    {
      episode: 3,
      chapter: 22,
      source: 'chapter',
      value: [
        links.jeorTyrion,
        links.jeorAemon,
        links.jeorAlliser,
        links.jeorJonLetter,
      ],
    },
    {
      episode: 7,
      chapter: 49,
      value: [links.jeorJonSteward, links.jeorAemon, links.jeorAlliser],
    },
    {
      episode: 8,
      chapter: 53,
      value: [
        links.jeorJonSaved,
        links.jeorOthor,
        links.jeorAemon,
        links.jeorAlliser,
      ],
    },
    // The show has Jeor tell Jon that Longclaw was meant for Jorah (GOT109).
    // The Jon VIII synopsis read for #1352 doesn't name him; restore the book
    // side with a chapter-cited source.
    {
      episode: 9,
      chapter: 61,
      source: 'episode',
      value: [
        links.jeorJonLongclaw,
        links.jeorJorah,
        links.jeorAemon,
        links.jeorAlliserSent,
        links.jeorOthorDead,
      ],
    },
    {
      episode: 9,
      chapter: 61,
      source: 'chapter',
      value: [
        links.jeorJonLongclaw,
        links.jeorAemon,
        links.jeorAlliserSent,
        links.jeorOthorDead,
      ],
    },
    {
      episode: 10,
      chapter: 71,
      source: 'episode',
      value: [
        links.jeorJonRanging,
        links.jeorJorah,
        links.jeorAemon,
        links.jeorAlliserSent,
        links.jeorOthorDead,
      ],
    },
    {
      episode: 10,
      chapter: 71,
      source: 'chapter',
      value: [
        links.jeorJonRanging,
        links.jeorAemon,
        links.jeorAlliserSent,
        links.jeorOthorDead,
      ],
    },
    {
      episode: 11,
      chapter: 80,
      source: 'episode',
      value: [wall2.jeoJonShow, wall2.jeoCrasterShow, wall2.jeoBenjen],
    },
    {
      episode: 15,
      chapter: 117,
      source: 'episode',
      value: [
        wall2.jeoQhorinShow,
        wall2.jeoJonGo,
        wall2.jeoSamSteward,
        wall2.jeoCrasterOut,
      ],
    },
    {
      episode: 11,
      chapter: 80,
      source: 'chapter',
      value: [
        wall2.jeoJonAemon,
        wall2.jeoThoren,
        wall2.jeoSamBook,
        wall2.jeoAemon,
      ],
    },
    {
      episode: 11,
      chapter: 97,
      source: 'chapter',
      value: [
        wall2.jeoCrasterBook,
        wall2.jeoJonCraster,
        wall2.jeoJarman,
        wall2.jeoThorenCraster,
      ],
    },
    {
      episode: 15,
      chapter: 117,
      source: 'chapter',
      value: [
        wall2.jeoQhorinBook,
        wall2.jeoJonQhorin,
        wall2.jeoThorenParty,
        wall2.jeoJarmanParty,
      ],
    },
  ],
  // The two media give his talk with Tyrion different words.
  'aemon': [
    {
      episode: 3,
      chapter: 22,
      source: 'episode',
      value: [links.aemJeor, links.aemTyrionEpisode],
    },
    {
      episode: 3,
      chapter: 22,
      source: 'chapter',
      value: [links.aemJeor, links.aemTyrionChapter],
    },
    // Books only: Jon V (chapter 42) and Chett, whom the show does not have.
    {
      episode: 5,
      chapter: 42,
      source: 'chapter',
      value: [links.aemJeor, links.aemJonSam, links.aemChett],
    },
    {
      episode: 7,
      chapter: 49,
      value: [links.aemJeor, links.aemSamwell, links.aemJon],
    },
    {
      episode: 9,
      chapter: 61,
      value: [links.aemJonTold, links.aemSamwell, links.aemJeor],
    },
  ],
  'samwell-tarly': [
    {
      episode: 4,
      chapter: 27,
      value: [links.samJon, links.samAlliser, links.samRast],
    },
    {
      episode: 7,
      chapter: 49,
      value: [
        links.samJonSworn,
        links.samAemon,
        links.samAlliser,
        links.samRast,
      ],
    },
    {
      episode: 10,
      chapter: 71,
      value: [links.samJonDesert, links.samAemon, links.samGrenn, links.samPyp],
    },
    {
      episode: 11,
      chapter: 80,
      source: 'episode',
      value: [wall2.samJonRanging, wall2.samGrennSledge, wall2.samCrasterShow],
    },
    {
      episode: 15,
      chapter: 117,
      source: 'episode',
      value: [
        wall2.samGillyShow,
        wall2.samJonSteward,
        wall2.samGrennFist,
        wall2.samJeorSteward,
      ],
    },
    {
      episode: 20,
      chapter: 142,
      source: 'episode',
      value: [
        wall2.samGrennCache,
        wall2.samEdd,
        wall2.samGillyShow,
        wall2.samJonMissing,
      ],
    },
    {
      episode: 11,
      chapter: 80,
      source: 'chapter',
      value: [wall2.samJonVault, wall2.samJeorRavens, wall2.samAemonMaps],
    },
    {
      episode: 11,
      chapter: 97,
      source: 'chapter',
      value: [
        wall2.samGillyBook,
        wall2.samJonCraster,
        wall2.samEddBook,
        wall2.samCrasterBook,
      ],
    },
  ],
  // Tyrion mocks him at the officers' table in the book alone.
  'alliser-thorne': [
    { episode: 3, chapter: 20, value: [links.allJon, links.allJeor] },
    {
      episode: 3,
      chapter: 22,
      source: 'chapter',
      value: [links.allJon, links.allJeor, links.allTyrion],
    },
    {
      episode: 4,
      chapter: 27,
      source: 'episode',
      value: [links.allJon, links.allSamwell, links.allJeor],
    },
    {
      episode: 4,
      chapter: 27,
      source: 'chapter',
      value: [links.allJon, links.allSamwell, links.allJeor, links.allTyrion],
    },
    {
      episode: 8,
      chapter: 53,
      value: [links.allJonKnife, links.allSamwell, links.allJeor],
    },
    {
      episode: 9,
      chapter: 61,
      value: [links.allJeorSent, links.allJonKnife, links.allSamwell],
    },
  ],
  // The show names him at Castle Black as he leaves with Tyrion; the book
  // has him join the party on the road north (Tyrion II, chapter 14). Only
  // the show has him take Gendry north within the stage.
  'yoren': [
    {
      episode: 3,
      chapter: 14,
      source: 'chapter',
      value: [links.yorBenjenChapter, links.yorJon, links.yorTyrionChapter],
    },
    {
      episode: 3,
      chapter: 22,
      source: 'episode',
      value: [links.yorBenjenEpisode, links.yorTyrionEpisode],
    },
    {
      episode: 9,
      chapter: 66,
      value: [links.yorArya, links.yorEddard, links.yorTyrion],
    },
    {
      episode: 10,
      chapter: 73,
      source: 'episode',
      value: [
        links.yorAryaArry,
        links.yorGendry,
        links.yorEddard,
        links.yorTyrion,
      ],
    },
    // Stage 2 (#1481): the recruits’ road, until the holdfast.
    {
      episode: 12,
      chapter: 79,
      source: 'episode',
      value: [
        riverlands2.yorAryaShow,
        riverlands2.yorGendryShow,
        riverlands2.yorJaqenCage,
      ],
    },
    {
      episode: 10,
      chapter: 75,
      source: 'chapter',
      value: [riverlands2.yorAryaBook75, riverlands2.yorHotPieBook],
    },
    {
      episode: 11,
      chapter: 79,
      source: 'chapter',
      value: [riverlands2.yorGendryBook, riverlands2.yorJaqenWagon],
    },
    {
      episode: 13,
      chapter: 88,
      source: 'chapter',
      value: [riverlands2.yorAmory, riverlands2.yorAryaTunnel],
    },
    {
      episode: 13,
      chapter: 93,
      source: 'chapter',
      value: [riverlands2.yorAryaDead, riverlands2.yorGendryDead],
    },
  ],
  // The show's Ned beheads Will; the book's beheads Gared (Bran I).
  'will': [
    {
      episode: 1,
      chapter: 1,
      source: 'episode',
      value: [links.willWaymar, links.willGared, links.willEddard],
    },
    {
      episode: 1,
      chapter: 1,
      source: 'chapter',
      value: [links.willWaymar, links.willGared],
    },
  ],
  'gared': [
    { episode: 1, chapter: 1, value: [links.garWaymar, links.garWill] },
    {
      episode: 1,
      chapter: 2,
      source: 'chapter',
      value: [links.garWaymar, links.garWill, links.garEddard],
    },
  ],
  'waymar-royce': [
    { episode: 1, chapter: 1, value: [links.wayWill, links.wayGared] },
  ],
  'grenn': [
    { episode: 3, chapter: 20, value: [links.greJon, links.greAlliser] },
    {
      episode: 4,
      chapter: 27,
      value: [links.greJonFriend, links.greSamwell, links.greAlliser],
    },
    {
      episode: 10,
      chapter: 71,
      value: [links.greJonDesert, links.grePyp, links.greSamwell10],
    },
    {
      episode: 11,
      chapter: 80,
      source: 'episode',
      value: [wall2.greSamSledge, wall2.greJonRanging, wall2.greCraster],
    },
    {
      episode: 20,
      chapter: 142,
      source: 'episode',
      value: [wall2.greSamFist, wall2.greEdd, wall2.greJonMissing],
    },
  ],
  'pypar': [
    { episode: 3, chapter: 20, value: [links.pypJon, links.pypAlliser] },
    {
      episode: 4,
      chapter: 27,
      value: [
        links.pypJonFriend,
        links.pypSamwell,
        links.pypRast,
        links.pypAlliser,
      ],
    },
    {
      episode: 10,
      chapter: 71,
      value: [links.pypJonDesert, links.pypGrenn, links.pypSamwell10],
    },
  ],
  // The show beats and names him in the yard in episode 3; the book opens
  // him in Jon IV (chapter 27), against Sam.
  'rast': [
    {
      episode: 3,
      chapter: 27,
      source: 'episode',
      value: [links.rastJonEpisode, links.rastAlliserTrain],
    },
    {
      episode: 4,
      chapter: 27,
      value: [
        links.rastSamwell,
        links.rastJon,
        links.rastGhost,
        links.rastAlliser,
      ],
    },
  ],
  'dareon': [
    { episode: 7, chapter: 20, source: 'chapter', value: [links.darJon] },
    { episode: 7, chapter: 49, value: [links.darJon, links.darJeor] },
  ],
  // The book has him beaten by Jon over Sam and riding after Jon; the show,
  // within the stage, has him only at the assignments.
  'halder': [
    { episode: 7, chapter: 20, source: 'chapter', value: [links.halJon] },
    {
      episode: 7,
      chapter: 27,
      source: 'chapter',
      value: [links.halJonSam, links.halSamwell, links.halAlliser],
    },
    {
      episode: 7,
      chapter: 49,
      source: 'episode',
      value: [links.halJon, links.halJeor],
    },
    {
      episode: 10,
      chapter: 71,
      source: 'chapter',
      value: [links.halJonDesert, links.halSamwell71],
    },
  ],
  // Books only: his show gate (episode 30) is past the stage.
  'todder': [
    {
      episode: 30,
      chapter: 20,
      source: 'chapter',
      value: [links.todJon, links.todNoye],
    },
    {
      episode: 30,
      chapter: 71,
      source: 'chapter',
      value: [links.todJonDesert, links.todSamwell],
    },
  ],
  // Show only: the book has him at the oath but tells no tie of his.
  'othell-yarwyck': [
    {
      episode: 7,
      chapter: 49,
      source: 'episode',
      value: [links.othlJon, links.othlSamwell],
    },
  ],
  // Books only: his show gate (episode 41) is past the stage.
  'bowen-marsh': [
    {
      episode: 41,
      chapter: 22,
      source: 'chapter',
      value: [links.bowTyrion, links.bowJeor],
    },
    {
      episode: 41,
      chapter: 49,
      source: 'chapter',
      value: [links.bowJon, links.bowSamwell, links.bowJeor, links.bowChett],
    },
  ],
  // The show has him escort Jon and Sam to their vows; only the book kills
  // him within the stage, at the hands of Jafer's corpse (Jon VIII).
  'jaremy-rykker': [
    {
      episode: 7,
      chapter: 22,
      source: 'chapter',
      value: [links.jarAlliser, links.jarJeor],
    },
    {
      episode: 7,
      chapter: 49,
      source: 'episode',
      value: [links.jarJon, links.jarSamwell, links.jarJeor],
    },
    {
      episode: 8,
      chapter: 53,
      value: [links.jarOthor, links.jarJafer, links.jarJeor],
    },
    {
      episode: 8,
      chapter: 61,
      source: 'chapter',
      value: [links.jarJaferKiller, links.jarOthorDead, links.jarJeorDead],
    },
  ],
  // Both media bring him back dead at 8 / 53, where he opens.
  'othor': [
    {
      episode: 8,
      chapter: 53,
      value: [links.otrBenjenLost, links.otrJafer, links.otrJeor, links.otrJon],
    },
  ],
  'jafer-flowers': [
    { episode: 8, chapter: 53, value: [links.jafOthor, links.jafBenjen] },
    {
      episode: 8,
      chapter: 61,
      source: 'chapter',
      value: [
        links.jafOthor,
        links.jafBenjen,
        links.jafJaremy,
        links.jafAlliser,
      ],
    },
  ],
  // Books only.
  'donal-noye': [
    {
      episode: 3,
      chapter: 20,
      source: 'chapter',
      value: [links.noyJon, links.noyGrenn],
    },
  ],
  // Books only: Jon V (chapter 42), then Sam takes his place (Jon VI).
  'chett': [
    {
      episode: 5,
      chapter: 42,
      source: 'chapter',
      value: [links.cheAemon, links.cheJon],
    },
    {
      episode: 7,
      chapter: 49,
      source: 'chapter',
      value: [links.cheSamwell, links.cheAemonFormer, links.cheJon],
    },
  ],
  // King's Landing, the riverlands and the Vale (#1346). A death a card
  // outlives gets a snapshot in the past tense at its pin: Mycah 2 / 17,
  // Vardis 6 / 41, Robert 7 / 50 and Eddard 9 / 66. Cards that only tell what
  // Eddard did, not what he is, carry on past his arrest and death.
  'tyrion-lannister': [
    {
      episode: 1,
      chapter: 5,
      source: 'chapter',
      value: [crown.tyrJaime, crown.tyrCersei],
    },
    // Show: "Winter Is Coming". Books: Jon I (chapter 6).
    {
      episode: 1,
      chapter: 6,
      value: [crown.tyrJon, crown.tyrJaime, crown.tyrCersei],
    },
    // Show: "The Kingsroad". Books: Tyrion I (chapter 10).
    {
      episode: 2,
      chapter: 10,
      value: [
        crown.tyrJoffrey,
        crown.tyrJonWall,
        crown.tyrJaime,
        crown.tyrCersei,
      ],
    },
    {
      episode: 4,
      chapter: 29,
      value: [
        crown.tyrCatelyn,
        crown.tyrJonWall,
        crown.tyrJoffrey,
        crown.tyrJaime,
        crown.tyrCersei,
      ],
    },
    {
      episode: 6,
      chapter: 41,
      value: [
        crown.tyrBronn,
        crown.tyrLysa,
        crown.tyrCatelynFreed,
        crown.tyrJaime,
        crown.tyrCersei,
      ],
    },
    // Show: "The Pointy End" has the clans and his father; the books meet
    // Shagga in Tyrion VI (chapter 43) and Tywin in Tyrion VII (chapter 57).
    {
      episode: 8,
      chapter: 57,
      value: [
        crown.tyrTywin,
        crown.tyrShagga,
        crown.tyrBronnSword,
        crown.tyrJaime,
        crown.tyrCersei,
      ],
    },
    {
      episode: 9,
      chapter: 63,
      value: [
        crown.tyrShae,
        crown.tyrBronnSword,
        crown.tyrTywin,
        crown.tyrShagga,
        crown.tyrJaime,
      ],
    },
    {
      episode: 10,
      chapter: 70,
      value: [
        crown.tyrTywinHand,
        crown.tyrShaeCourt,
        crown.tyrJaimeCaptive,
        crown.tyrCerseiRegent,
        crown.tyrBronnSword,
      ],
    },
    // Stage 2 (#1479): season 2 and A Clash of Kings.
    // The show: Janos goes to the Wall and Bronn takes the City Watch,
    // "The Night Lands".
    {
      episode: 12,
      chapter: 82,
      source: 'episode',
      value: [
        kingsLanding2.tyrBronnWatch,
        kingsLanding2.tyrJanosShow,
        kingsLanding2.tyrVarysShow,
        crown.tyrShaeCourt,
      ],
    },
    // The books: Tyrion II.
    {
      episode: 12,
      chapter: 82,
      source: 'chapter',
      value: [
        kingsLanding2.tyrJanosBook,
        kingsLanding2.tyrJacelynBook,
        kingsLanding2.tyrVarysHand,
        kingsLanding2.tyrBronnGuard,
      ],
    },
    // The Blackwater: his squire saves him (Tyrion XIV, chapter 135).
    {
      episode: 19,
      chapter: 135,
      value: [kingsLanding2.tyrPodSaves, kingsLanding2.tyrMandonAttack],
    },
    // "Valar Morghulis": his father takes the Hand's place.
    {
      episode: 20,
      chapter: 141,
      source: 'episode',
      value: [
        kingsLanding2.tyrTywinHandShow,
        kingsLanding2.tyrVarysAfter,
        kingsLanding2.tyrShaeLeave,
        kingsLanding2.tyrBronnRelieved,
      ],
    },
    // Tyrion XV.
    {
      episode: 20,
      chapter: 141,
      source: 'chapter',
      value: [
        kingsLanding2.tyrTywinHandBook,
        kingsLanding2.tyrPodSilent,
        kingsLanding2.tyrBronnCalled,
      ],
    },
    // Stage 3 (#1651): season 3 and A Storm of Swords through chapter 52.
    // The show: "Valar Dohaeris" (21), "Kissed by Fire" (25), "Second
    // Sons" (28) and "Mhysa" (30).
    {
      episode: 21,
      chapter: 148,
      source: 'episode',
      value: [
        kingsLanding3.tyrTywinDisowns,
        kingsLanding3.tyrBronnKnight,
        kingsLanding3.tyrShaeHidden,
        kingsLanding2.tyrVarysAfter,
      ],
    },
    {
      episode: 25,
      chapter: 163,
      source: 'episode',
      value: [
        kingsLanding3.tyrTywinSansa,
        kingsLanding3.tyrSansaBride,
        kingsLanding3.tyrOlenna,
        kingsLanding3.tyrCerseiGloats,
        kingsLanding3.tyrShaeSansa,
      ],
    },
    {
      episode: 28,
      chapter: 172,
      source: 'episode',
      value: [
        kingsLanding3.tyrSansaWife,
        kingsLanding3.tyrJoffreyThreat,
        kingsLanding3.tyrTywinWedding,
        kingsLanding3.tyrShaeEnds,
        kingsLanding3.tyrBronnAdvice,
      ],
    },
    {
      episode: 30,
      chapter: 196,
      source: 'episode',
      value: [
        kingsLanding3.tyrTywinRedWedding,
        kingsLanding3.tyrSansaGrief,
        kingsLanding3.tyrJoffreyHead,
        kingsLanding3.tyrShaeEnds,
      ],
    },
    // The books: Tyrion I (148), II (156), III (163), Sansa III (172) and
    // Tyrion V (182, with Tyrion IV's orders at 176).
    {
      episode: 21,
      chapter: 148,
      source: 'chapter',
      value: [
        kingsLanding3.tyrTywinRock,
        kingsLanding3.tyrBronnNews,
        kingsLanding3.tyrPodDress,
        kingsLanding3.tyrCerseiMandon,
      ],
    },
    {
      episode: 22,
      chapter: 156,
      source: 'chapter',
      value: [
        kingsLanding3.tyrShaeStays,
        kingsLanding3.tyrVarysOnce,
        kingsLanding3.tyrBronnSinger,
        kingsLanding3.tyrPodDress,
        kingsLanding3.tyrTywinRock,
      ],
    },
    {
      episode: 23,
      chapter: 163,
      source: 'chapter',
      value: [
        kingsLanding3.tyrTywinSansaBook,
        kingsLanding3.tyrSansaPromised,
        kingsLanding3.tyrPetyrWary,
        kingsLanding3.tyrCerseiWillas,
        kingsLanding3.tyrShaeStays,
      ],
    },
    {
      episode: 28,
      chapter: 172,
      source: 'chapter',
      value: [
        kingsLanding3.tyrSansaWifeBook,
        kingsLanding3.tyrJoffreyBedding,
        kingsLanding3.tyrTywinSansaBook,
        kingsLanding3.tyrShaeStays,
        kingsLanding3.tyrCerseiWillas,
      ],
    },
    {
      episode: 31,
      chapter: 182,
      source: 'chapter',
      value: [
        kingsLanding3.tyrOberyn,
        kingsLanding3.tyrTywinConsummate,
        kingsLanding3.tyrSansaWifeBook,
        kingsLanding3.tyrShaeStays,
        kingsLanding3.tyrBronnKill,
      ],
    },
  ],
  'cersei-lannister': [
    {
      episode: 1,
      chapter: 5,
      source: 'chapter',
      value: [
        crown.cerRobert,
        crown.cerJaime,
        crown.cerJoffrey,
        crown.cerTyrion,
      ],
    },
    // Show: the tower in "Winter Is Coming". Books: Bran II (chapter 9).
    {
      episode: 1,
      chapter: 9,
      value: [
        crown.cerJaimeLover,
        crown.cerRobert,
        crown.cerJoffrey,
        crown.cerTyrion,
      ],
    },
    {
      episode: 2,
      chapter: 17,
      value: [
        crown.cerJaimeLover,
        crown.cerRobert,
        crown.cerJoffrey,
        crown.cerLady,
        crown.cerTyrion,
      ],
    },
    {
      episode: 7,
      chapter: 50,
      value: [
        crown.cerNed,
        crown.cerJaimeFather,
        crown.cerJoffreyKing,
        crown.cerRobertDead,
        crown.cerTyrion,
      ],
    },
    {
      episode: 9,
      chapter: 66,
      value: [
        crown.cerNedDead,
        crown.cerJaimeCaptive,
        crown.cerJoffreyKing,
        crown.cerRobertDead,
        crown.cerTyrion,
      ],
    },
    {
      episode: 10,
      chapter: 73,
      source: 'episode',
      value: [
        crown.cerLancel,
        crown.cerJaimeCaptive,
        crown.cerJoffreyKing,
        crown.cerNedDead,
        crown.cerRobertDead,
      ],
    },
    // Stage 2 (#1479): she has the woman she takes for Tyrion's lover
    // seized.
    {
      episode: 18,
      chapter: 128,
      source: 'episode',
      value: [
        kingsLanding2.cerTyrionHand,
        kingsLanding2.cerRosCaptive,
        crown.cerJoffreyKing,
        crown.cerJaimeCaptive,
        crown.cerLancel,
      ],
    },
    {
      episode: 18,
      chapter: 128,
      source: 'chapter',
      value: [
        kingsLanding2.cerTyrionBook,
        kingsLanding2.cerAlayaya,
        kingsLanding2.cerOsmund,
        crown.cerJoffreyKing,
        crown.cerJaimeCaptive,
      ],
    },
    // Stage 3 (#1651). The show: "Valar Dohaeris" (21), "Kissed by Fire"
    // (25, with Tywin's rebuke of 24), "Second Sons" (28) and "Mhysa" (30).
    {
      episode: 21,
      chapter: 150,
      source: 'episode',
      value: [
        kingsLanding3.cerMargaeryCharity,
        kingsLanding3.cerJoffreyDefies,
        kingsLanding3.cerJaimeMissing,
      ],
    },
    {
      episode: 25,
      chapter: 163,
      source: 'episode',
      value: [
        kingsLanding3.cerTywinMarry,
        kingsLanding3.cerLorasBetrothed,
        kingsLanding3.cerPetyrSpy,
        kingsLanding3.cerTyrionGloat,
        kingsLanding3.cerMargaeryCharity,
      ],
    },
    {
      episode: 28,
      chapter: 172,
      source: 'episode',
      value: [
        kingsLanding3.cerMargaeryThreat,
        kingsLanding3.cerJoffreyFeast,
        kingsLanding3.cerTywinMarry,
        kingsLanding3.cerLorasBetrothed,
        kingsLanding3.cerJaimeMissing,
      ],
    },
    {
      episode: 30,
      chapter: 196,
      source: 'episode',
      value: [
        kingsLanding3.cerJaimeBack,
        kingsLanding3.cerJoffreyBed,
        kingsLanding3.cerTywinMarry,
        kingsLanding3.cerLorasBetrothed,
        kingsLanding3.cerMargaeryThreat,
      ],
    },
    // The books: Tyrion III (163) and Sansa III (172).
    {
      episode: 23,
      chapter: 163,
      source: 'chapter',
      value: [
        kingsLanding3.cerTywinWillas,
        kingsLanding3.cerTyrionSansa,
        crown.cerJoffreyKing,
        crown.cerJaimeCaptive,
        kingsLanding2.cerOsmund,
      ],
    },
    {
      episode: 28,
      chapter: 172,
      source: 'chapter',
      value: [
        kingsLanding3.cerSansaWed,
        kingsLanding3.cerTywinWillas,
        kingsLanding3.cerTyrionSansa,
        crown.cerJoffreyKing,
        crown.cerJaimeCaptive,
      ],
    },
  ],
  'jaime-lannister': [
    {
      episode: 1,
      chapter: 5,
      source: 'chapter',
      value: [crown.jaiCersei, crown.jaiTyrion, crown.jaiRobert],
    },
    {
      episode: 1,
      chapter: 9,
      value: [
        crown.jaiCerseiLover,
        crown.jaiBran,
        crown.jaiTyrion,
        crown.jaiRobert,
      ],
    },
    {
      episode: 5,
      chapter: 36,
      value: [
        crown.jaiNed,
        crown.jaiJory,
        crown.jaiCerseiLover,
        crown.jaiTyrionPrisoner,
        crown.jaiBran,
      ],
    },
    {
      episode: 9,
      chapter: 64,
      value: [
        crown.jaiRobb,
        crown.jaiTywin,
        crown.jaiCerseiLover,
        crown.jaiTyrionPrisoner,
        crown.jaiBran,
      ],
    },
    // Stage 2 (#1481).
    {
      episode: 11,
      chapter: 81,
      source: 'episode',
      value: [riverlands2.jaiRobb11, riverlands2.jaiGreyWind11],
    },
    {
      episode: 17,
      chapter: 112,
      source: 'episode',
      value: [
        riverlands2.jaiAlton,
        riverlands2.jaiRickard,
        riverlands2.jaiCatelyn17,
      ],
    },
    {
      episode: 18,
      chapter: 129,
      source: 'episode',
      value: [
        riverlands2.jaiCatelyn18,
        riverlands2.jaiBrienne18,
        riverlands2.jaiRobb18,
      ],
    },
    {
      episode: 20,
      chapter: 137,
      source: 'episode',
      value: [riverlands2.jaiBrienne20],
    },
    {
      episode: 13,
      chapter: 113,
      source: 'chapter',
      value: [riverlands2.jaiEdmure113, riverlands2.jaiCleos113],
    },
    {
      episode: 14,
      chapter: 129,
      source: 'chapter',
      value: [
        riverlands2.jaiCatelyn129,
        riverlands2.jaiBrienne129,
        riverlands2.jaiRickard129,
      ],
    },
  ],
  'tywin-lannister': [
    {
      episode: 7,
      chapter: 57,
      source: 'episode',
      value: [crown.tywJaimeRiverrun, crown.tywTyrionCaptive, crown.tywCersei],
    },
    {
      episode: 7,
      chapter: 57,
      source: 'chapter',
      value: [
        crown.tywTyrionReturn,
        crown.tywKevan,
        crown.tywJaimeWar,
        crown.tywCersei,
      ],
    },
    {
      episode: 8,
      chapter: 57,
      source: 'episode',
      value: [
        crown.tywTyrionReturn,
        crown.tywKevan,
        crown.tywJaimeRiverrun,
        crown.tywCersei,
      ],
    },
    {
      episode: 10,
      chapter: 70,
      value: [
        crown.tywTyrionHand,
        crown.tywJaimeCaptive,
        crown.tywKevan,
        crown.tywCersei,
      ],
    },
    // Stage 2 (#1481): Harrenhal.
    {
      episode: 14,
      chapter: 100,
      source: 'episode',
      value: [
        riverlands2.tywAryaHarrenhal,
        riverlands2.tywGregor,
        riverlands2.tywPolliver,
        riverlands2.tywGendry,
      ],
    },
    {
      episode: 16,
      chapter: 104,
      source: 'episode',
      value: [
        riverlands2.tywAryaWar,
        riverlands2.tywAmory,
        riverlands2.tywPetyr,
      ],
    },
    {
      episode: 18,
      chapter: 138,
      source: 'episode',
      value: [
        riverlands2.tywAryaLeft,
        riverlands2.tywGregorCastellan,
        riverlands2.tywKevan,
      ],
    },
    {
      episode: 14,
      chapter: 104,
      source: 'chapter',
      value: [riverlands2.tywVargo, riverlands2.tywAmoryBook],
    },
    {
      episode: 14,
      chapter: 112,
      source: 'chapter',
      value: [
        riverlands2.tywAmoryCastellan,
        riverlands2.tywGregorVan,
        riverlands2.tywKevanBook,
      ],
    },
    // Stage 3 (#1651). The show: "Valar Dohaeris" (21), "Walk of
    // Punishment" (23), "The Climb" (26, with the orders of "Kissed by
    // Fire") and "Mhysa" (30).
    {
      episode: 21,
      chapter: 148,
      source: 'episode',
      value: [kingsLanding3.tywTyrionDisown, kingsLanding3.tywShae],
    },
    {
      episode: 23,
      chapter: 163,
      source: 'episode',
      value: [
        kingsLanding3.tywPetyr,
        kingsLanding3.tywVarys,
        kingsLanding3.tywPycelle,
        kingsLanding3.tywCerseiChair,
        kingsLanding3.tywTyrionCoin,
      ],
    },
    {
      episode: 26,
      chapter: 172,
      source: 'episode',
      value: [
        kingsLanding3.tywOlenna,
        kingsLanding3.tywCerseiMarry,
        kingsLanding3.tywTyrionMarry,
        kingsLanding3.tywSansaKey,
        kingsLanding3.tywLoras,
      ],
    },
    {
      episode: 30,
      chapter: 196,
      source: 'episode',
      value: [
        kingsLanding3.tywJoffreyBed,
        kingsLanding3.tywTyrionFrey,
        kingsLanding3.tywWalder,
        kingsLanding3.tywRobbDead,
        kingsLanding3.tywCerseiBed,
      ],
    },
    // The books: Tyrion I (148), III (163) and IV (176).
    {
      episode: 21,
      chapter: 148,
      source: 'chapter',
      value: [
        kingsLanding3.tywTyrionBook,
        kingsLanding3.tywPetyrBook,
        kingsLanding3.tywGregorBook,
      ],
    },
    {
      episode: 23,
      chapter: 163,
      source: 'chapter',
      value: [
        kingsLanding3.tywTyrionSansaBook,
        kingsLanding3.tywCerseiWillas,
        kingsLanding3.tywPetyrVale,
        kingsLanding3.tywSansaBook,
        kingsLanding3.tywKevan,
      ],
    },
    {
      episode: 28,
      chapter: 176,
      source: 'chapter',
      value: [
        kingsLanding3.tywTyrionBed,
        kingsLanding3.tywMace,
        kingsLanding3.tywPycelleBook,
        kingsLanding3.tywCerseiWillas,
        kingsLanding3.tywSansaBook,
      ],
    },
  ],
  'joffrey-baratheon': [
    {
      episode: 1,
      chapter: 5,
      value: [
        crown.jofRobert,
        crown.jofCersei,
        crown.jofSansa,
        crown.jofTyrion,
      ],
    },
    {
      episode: 2,
      chapter: 17,
      value: [
        crown.jofSansaRiver,
        crown.jofArya,
        crown.jofMycah,
        crown.jofCersei,
        crown.jofTyrionSlap,
      ],
    },
    // The queen admits the children are Jaime's in "You Win or You Die" and
    // before Robert's death in the books.
    {
      episode: 7,
      chapter: 50,
      value: [
        crown.jofRobertDead,
        crown.jofCerseiKing,
        crown.jofNed,
        crown.jofJaime,
        crown.jofSansaKing,
      ],
    },
    {
      episode: 8,
      chapter: 58,
      value: [
        crown.jofSansaPlea,
        crown.jofNed,
        crown.jofCerseiKing,
        crown.jofJaime,
        crown.jofRobertDead,
      ],
    },
    {
      episode: 9,
      chapter: 66,
      value: [
        crown.jofNedDead,
        crown.jofSansaPlea,
        crown.jofCerseiKing,
        crown.jofJaime,
        crown.jofRobertDead,
      ],
    },
    // Stage 2 (#1479): the show's name-day gift; the books' court of
    // rewards (Sansa VIII, chapter 139).
    {
      episode: 14,
      chapter: 103,
      source: 'episode',
      value: [
        kingsLanding2.jofRosShow,
        kingsLanding2.jofDaisyShow,
        kingsLanding2.jofTyrionShow,
      ],
    },
    {
      episode: 14,
      chapter: 110,
      source: 'chapter',
      value: [kingsLanding2.jofMargaeryProposed, kingsLanding2.jofTyrionMatch],
    },
    {
      episode: 20,
      chapter: 139,
      source: 'chapter',
      value: [
        kingsLanding2.jofSansaVoid,
        kingsLanding2.jofMargaery,
        kingsLanding2.jofGarlan,
        kingsLanding2.jofHallyne,
      ],
    },
    {
      episode: 20,
      chapter: 139,
      source: 'episode',
      value: [
        kingsLanding2.jofSansaShow,
        kingsLanding2.jofMargaeryShow,
        kingsLanding2.jofCerseiShow,
      ],
    },
    // Stage 3 (#1651). The show: "Valar Dohaeris" (21), "The Climb" (26,
    // with Margaery's visit of 22), "Second Sons" (28, with Tywin at the
    // throne in 27) and "Mhysa" (30).
    {
      episode: 21,
      chapter: 150,
      source: 'episode',
      value: [
        kingsLanding3.jofMargaeryCharmed,
        kingsLanding3.jofCerseiChided,
        kingsLanding2.jofSansaShow,
      ],
    },
    {
      episode: 26,
      chapter: 163,
      source: 'episode',
      value: [
        kingsLanding3.jofRos,
        kingsLanding3.jofMargaeryCrossbow,
        kingsLanding3.jofCerseiChided,
        kingsLanding2.jofSansaShow,
      ],
    },
    {
      episode: 28,
      chapter: 172,
      source: 'episode',
      value: [
        kingsLanding3.jofTyrionThreat,
        kingsLanding3.jofSansaWed,
        kingsLanding3.jofTywinThrone,
        kingsLanding3.jofMargaeryCrossbow,
        kingsLanding3.jofRos,
      ],
    },
    {
      episode: 30,
      chapter: 196,
      source: 'episode',
      value: [
        kingsLanding3.jofTywinBed,
        kingsLanding3.jofRobbHead,
        kingsLanding3.jofTyrionForbids,
        kingsLanding3.jofSansaWed,
        kingsLanding3.jofRos,
      ],
    },
    // The books: Sansa III (172).
    {
      episode: 28,
      chapter: 172,
      source: 'chapter',
      value: [
        kingsLanding3.jofTyrionBook,
        kingsLanding3.jofSansaBook,
        kingsLanding2.jofMargaery,
        kingsLanding2.jofGarlan,
      ],
    },
  ],
  'myrcella-baratheon': [
    {
      episode: 1,
      chapter: 6,
      value: [
        crown.myrCersei,
        crown.myrRobert,
        crown.myrJoffrey,
        crown.myrTommen,
      ],
    },
    {
      episode: 7,
      chapter: 50,
      value: [
        crown.myrCersei,
        crown.myrRobertDead,
        crown.myrJaime,
        crown.myrJoffreyKing,
        crown.myrTommen,
      ],
    },
    // Stage 2 (#1479): sent to Dorne.
    {
      episode: 16,
      chapter: 115,
      value: [kingsLanding2.myrTyrionDorne, kingsLanding2.myrCerseiStays],
    },
  ],
  'tommen-baratheon': [
    {
      episode: 1,
      chapter: 6,
      value: [
        crown.tomCersei,
        crown.tomRobert,
        crown.tomJoffrey,
        crown.tomMyrcella,
      ],
    },
    {
      episode: 7,
      chapter: 50,
      value: [
        crown.tomCersei,
        crown.tomRobertDead,
        crown.tomJaime,
        crown.tomJoffreyKing,
        crown.tomMyrcella,
      ],
    },
  ],
  'robert-baratheon': [
    {
      episode: 1,
      chapter: 5,
      value: [crown.robNed, crown.robCersei, crown.robJoffrey, crown.robJaime],
    },
    // Show: "The Wolf and the Lion". Books: Eddard VIII (chapter 34), the
    // chapter the episode adapts, where Boros's record sits at the council.
    {
      episode: 5,
      chapter: 34,
      value: [
        crown.robDaenerys,
        crown.robNedResigns,
        crown.robCersei,
        crown.robJoffrey,
        crown.robJaime,
      ],
    },
    // His dying words are pinned to his death, which is later and safe.
    {
      episode: 7,
      chapter: 50,
      value: [
        crown.robNedProtector,
        crown.robLancel,
        crown.robJoffreyHeir,
        crown.robCersei,
        crown.robDaenerysRecall,
      ],
    },
  ],
  'renly-baratheon': [
    { episode: 3, chapter: 21, value: [crown.renRobert, crown.renNed] },
    {
      episode: 5,
      chapter: 21,
      source: 'episode',
      value: [crown.renLoras, crown.renRobert, crown.renNed],
    },
    {
      episode: 7,
      chapter: 50,
      source: 'episode',
      value: [
        crown.renRobertDead,
        crown.renNedOffer,
        crown.renLorasFledEpisode,
      ],
    },
    {
      episode: 7,
      chapter: 50,
      source: 'chapter',
      value: [
        crown.renRobertDead,
        crown.renNedOffer,
        crown.renLorasFledChapter,
      ],
    },
    {
      episode: 9,
      chapter: 66,
      source: 'episode',
      value: [crown.renRobertDead, crown.renNedDead, crown.renLorasFledEpisode],
    },
    {
      episode: 9,
      chapter: 66,
      source: 'chapter',
      value: [crown.renRobertDead, crown.renNedDead, crown.renLorasFledChapter],
    },
    // Stage 2 (#1480): the stormlands. The show: Renly's camp at Bitterbridge.
    {
      episode: 13,
      chapter: 96,
      source: 'episode',
      value: [
        stormlands2.renLorasHeir,
        stormlands2.renMargaeryBed,
        stormlands2.renBrienneChampion,
        stormlands2.renCatelynArmy,
      ],
    },
    // Stannis comes to the camp in "Garden of Bones".
    {
      episode: 14,
      chapter: 105,
      source: 'episode',
      value: [
        stormlands2.renStannisDemand,
        stormlands2.renPetyrEnvoy,
        stormlands2.renCatelynArmy,
      ],
    },
    // The shadow kills him in "The Ghost of Harrenhal".
    {
      episode: 15,
      chapter: 107,
      source: 'episode',
      value: [
        stormlands2.renStannisShadow,
        stormlands2.renCatelynAlliance,
        stormlands2.renBrienneBlamed,
        stormlands2.renLorasRevenge,
        stormlands2.renMargaeryWidow,
      ],
    },
    // The books: Catelyn II, the tourney and the feast at Bitterbridge.
    {
      episode: 13,
      chapter: 96,
      source: 'chapter',
      value: [
        stormlands2.renCatelynTerms,
        stormlands2.renMargaeryFeast,
        stormlands2.renBrienneRainbow,
        stormlands2.renLorasJests,
        stormlands2.renStannisAppalling,
      ],
    },
    // Catelyn III: the parley outside Storm's End.
    {
      episode: 14,
      chapter: 105,
      source: 'chapter',
      value: [
        stormlands2.renStannisParley,
        stormlands2.renCatelynWatch,
        stormlands2.renBrienneBanner,
        stormlands2.renLorasVan,
      ],
    },
    // Catelyn IV: he dies the night before the battle.
    {
      episode: 15,
      chapter: 107,
      source: 'chapter',
      value: [
        stormlands2.renCatelynNoTalk,
        stormlands2.renBrienneArming,
        stormlands2.renLorasPray,
      ],
    },
  ],
  'lysa-arryn': [
    // Show: "The Wolf and the Lion" (GOT105) has her nurse him. The pages
    // read do not place it in Catelyn VI, so the books wait for Tyrion V
    // (chapter 39), which is later and safe.
    {
      episode: 5,
      chapter: 35,
      source: 'episode',
      value: [crown.lysCatelyn, crown.lysRobin, crown.lysTyrion],
    },
    {
      episode: 5,
      chapter: 35,
      source: 'chapter',
      value: [crown.lysCatelyn, crown.lysRobinChapter, crown.lysTyrion],
    },
    {
      episode: 5,
      chapter: 39,
      source: 'chapter',
      value: [crown.lysCatelyn, crown.lysRobin, crown.lysTyrion],
    },
    {
      episode: 6,
      chapter: 41,
      value: [
        crown.lysTyrionFreed,
        crown.lysVardis,
        crown.lysBronn,
        crown.lysCatelyn,
        crown.lysRobin,
      ],
    },
    // Stage 3 (#1653): Catelyn in the past tense from the Red Wedding, "The
    // Rains of Castamere" (29) and Catelyn VII (195).
    {
      episode: 29,
      chapter: 195,
      value: [
        crown.lysTyrionFreed,
        crown.lysVardis,
        crown.lysBronn,
        riverlands3.lyCatelyn,
        crown.lysRobin,
      ],
    },
  ],
  'robin-arryn': [
    // The same split as Lysa's: the show has the nursing and the fly line in
    // episode 5 (GOT105); the books wait for Tyrion V (chapter 39).
    {
      episode: 5,
      chapter: 35,
      source: 'episode',
      value: [crown.rbnLysa, crown.rbnCatelyn, crown.rbnTyrion],
    },
    {
      episode: 5,
      chapter: 35,
      source: 'chapter',
      value: [crown.rbnLysaChapter, crown.rbnCatelyn, crown.rbnTyrionChapter],
    },
    {
      episode: 5,
      chapter: 39,
      source: 'chapter',
      value: [crown.rbnLysa, crown.rbnCatelyn, crown.rbnTyrion],
    },
    {
      episode: 6,
      chapter: 41,
      value: [crown.rbnLysa, crown.rbnCatelyn, crown.rbnTyrionFreed],
    },
    // Stage 3 (#1653): as Lysa's.
    {
      episode: 29,
      chapter: 195,
      value: [crown.rbnLysa, riverlands3.rnCatelyn, crown.rbnTyrionFreed],
    },
  ],
  // Show: Bronn joins Catelyn's party between "Cripples, Bastards, and
  // Broken Things" and "The Wolf and the Lion"; episode 5 is the first to
  // show him in it. Books: Tyrion IV (chapter 32).
  'bronn': [
    { episode: 5, chapter: 32, value: [crown.brnTyrion, crown.brnCatelyn] },
    {
      episode: 6,
      chapter: 41,
      value: [crown.brnTyrionChampion, crown.brnVardis, crown.brnCatelynPast],
    },
    {
      episode: 9,
      chapter: 63,
      value: [crown.brnTyrionChampion, crown.brnShae, crown.brnVardis],
    },
    // Stage 2 (#1479): season 2 and A Clash of Kings.
    {
      episode: 12,
      chapter: 82,
      source: 'episode',
      value: [kingsLanding2.brnTyrionWatch, kingsLanding2.brnJanosShow],
    },
    {
      episode: 13,
      chapter: 99,
      source: 'episode',
      value: [kingsLanding2.brnTyrionWatch, kingsLanding2.brnPycelle],
    },
    {
      episode: 12,
      chapter: 82,
      source: 'chapter',
      value: [kingsLanding2.brnTyrionGuard],
    },
    // Stage 3 (#1651). The show: "Valar Dohaeris" (21) and "The Bear and
    // the Maiden Fair" (27, with Podrick's night of 23). The books: Tyrion
    // I (148) and IV (176).
    {
      episode: 21,
      chapter: 148,
      source: 'episode',
      value: [kingsLanding3.brnTyrionKnight],
    },
    {
      episode: 27,
      chapter: 172,
      source: 'episode',
      value: [kingsLanding3.brnTyrionAdvice, kingsLanding3.brnPodShow],
    },
    {
      episode: 21,
      chapter: 148,
      source: 'chapter',
      value: [kingsLanding3.brnTyrionNews, kingsLanding3.brnPodBook],
    },
    {
      episode: 28,
      chapter: 176,
      source: 'chapter',
      value: [kingsLanding3.brnTyrionSinger, kingsLanding3.brnPodBook],
    },
  ],
  'shae': [
    { episode: 9, chapter: 63, value: [crown.shaTyrion, crown.shaBronn] },
    {
      episode: 10,
      chapter: 70,
      value: [crown.shaTyrionCourt, crown.shaTywin, crown.shaBronn],
    },
    // Stage 2 (#1479): season 2 and A Clash of Kings. The show gives her to
    // Sansa in "What Is Dead May Never Die"; the books offer her a place in
    // Lollys Stokeworth's household in Tyrion X (chapter 118).
    {
      episode: 13,
      chapter: 99,
      source: 'episode',
      value: [
        kingsLanding2.shaTyrionTower,
        kingsLanding2.shaSansa,
        kingsLanding2.shaVarysShow,
      ],
    },
    {
      episode: 13,
      chapter: 118,
      source: 'chapter',
      value: [
        kingsLanding2.shaTyrionBook,
        kingsLanding2.shaLollys,
        kingsLanding2.shaVarysBook,
      ],
    },
    // Stage 3 (#1651). The show: "Dark Wings, Dark Words" (22, with Ros's
    // request of 21), "The Climb" (26, where Ros dies), "The Bear and the
    // Maiden Fair" (27) and "Mhysa" (30). The books: Tyrion II (156).
    {
      episode: 22,
      chapter: 150,
      source: 'episode',
      value: [
        kingsLanding3.shaSansaWarns,
        kingsLanding3.shaTyrionFavour,
        kingsLanding3.shaPetyr,
        kingsLanding3.shaRos,
        kingsLanding2.shaVarysShow,
      ],
    },
    {
      episode: 26,
      chapter: 163,
      source: 'episode',
      value: [
        kingsLanding3.shaTyrionApology,
        kingsLanding3.shaSansaWarns,
        kingsLanding3.shaPetyr,
        kingsLanding3.shaRosDead,
        kingsLanding2.shaVarysShow,
      ],
    },
    {
      episode: 27,
      chapter: 172,
      source: 'episode',
      value: [
        kingsLanding3.shaTyrionEnds,
        kingsLanding3.shaSansaWarns,
        kingsLanding3.shaPetyr,
        kingsLanding3.shaRosDead,
        kingsLanding2.shaVarysShow,
      ],
    },
    {
      episode: 30,
      chapter: 196,
      source: 'episode',
      value: [
        kingsLanding3.shaVarysDiamonds,
        kingsLanding3.shaTyrionEnds,
        kingsLanding3.shaSansaCares,
        kingsLanding3.shaPetyr,
        kingsLanding3.shaRosDead,
      ],
    },
    {
      episode: 22,
      chapter: 156,
      source: 'chapter',
      value: [
        kingsLanding3.shaTyrionStays,
        kingsLanding3.shaVarysBrings,
        kingsLanding2.shaLollys,
      ],
    },
  ],
  'walder-frey': [
    {
      episode: 9,
      chapter: 60,
      value: [crown.walCatelyn, crown.walRobb, crown.walArya, crown.walStevron],
    },
    // Stage 3 (#1653). The show: "The Rains of Castamere" (29) and "Mhysa"
    // (30). The books: Catelyn VI (193) and VII (195).
    {
      episode: 29,
      chapter: 195,
      source: 'episode',
      value: [
        riverlands3.wfRobb29,
        riverlands3.wfCatelyn29,
        riverlands3.wfTalisa29,
        riverlands3.wfRoslin29,
        riverlands3.wfEdmure29,
      ],
    },
    {
      episode: 30,
      chapter: 197,
      source: 'episode',
      value: [
        riverlands3.wfRoose30,
        riverlands3.wfRobb30,
        riverlands3.wfCatelyn30,
        riverlands3.wfBrynden30,
        riverlands3.wfTywin30,
      ],
    },
    {
      episode: 29,
      chapter: 193,
      source: 'chapter',
      value: [
        riverlands3.wfRobb193,
        riverlands3.wfCatelyn193,
        riverlands3.wfEdmure193,
        riverlands3.wfRoslin193,
        riverlands3.wfLothar193,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands3.wfRobb195,
        riverlands3.wfCatelyn195,
        riverlands3.wfAegon195,
        riverlands3.wfEdmure195,
        riverlands3.wfRoslin195,
      ],
    },
  ],
  // Show only, as her record is. Her chapters only order her.
  'ros': [
    {
      episode: 4,
      chapter: 25,
      source: 'episode',
      value: [crown.rosTheon, crown.rosTyrion],
    },
    {
      episode: 7,
      chapter: 48,
      source: 'episode',
      value: [crown.rosPetyr, crown.rosTheonLeft, crown.rosTyrion],
    },
    {
      episode: 10,
      chapter: 73,
      source: 'episode',
      value: [
        crown.rosPycelle,
        crown.rosPetyr,
        crown.rosTheonLeft,
        crown.rosTyrion,
      ],
    },
    // Stage 2 (#1479): season 2.
    {
      episode: 14,
      chapter: 103,
      source: 'episode',
      value: [
        kingsLanding2.rosJoffrey,
        kingsLanding2.rosDaisy,
        kingsLanding2.rosTyrionSent,
        crown.rosPetyr,
      ],
    },
    {
      episode: 18,
      chapter: 128,
      source: 'episode',
      value: [kingsLanding2.rosCerseiCaptive, kingsLanding2.rosTyrionCaptive],
    },
    {
      episode: 20,
      chapter: 141,
      source: 'episode',
      value: [kingsLanding2.rosVarys, kingsLanding2.rosPetyrFear],
    },
    // Stage 3 (#1651): "Valar Dohaeris" (21), "And Now His Watch Is Ended"
    // (24) and "The Climb" (26), where she dies.
    {
      episode: 21,
      chapter: 150,
      source: 'episode',
      value: [
        kingsLanding3.rosPetyrAide,
        kingsLanding3.rosSansa,
        kingsLanding3.rosShae,
        kingsLanding2.rosVarys,
      ],
    },
    {
      episode: 24,
      chapter: 160,
      source: 'episode',
      value: [
        kingsLanding3.rosVarysSpy,
        kingsLanding3.rosPetyrWatched,
        kingsLanding3.rosSansa,
        kingsLanding3.rosShae,
      ],
    },
    {
      episode: 26,
      chapter: 175,
      source: 'episode',
      value: [
        kingsLanding3.rosPetyrBetrayed,
        kingsLanding3.rosJoffreyKilled,
        kingsLanding3.rosVarysPast,
      ],
    },
  ],
  'ilyn-payne': [
    { episode: 2, chapter: 16, value: [crown.ilySansa, crown.ilyRobert] },
    { episode: 7, chapter: 50, value: [crown.ilySansa, crown.ilyRobertDead] },
    {
      episode: 9,
      chapter: 66,
      value: [crown.ilyNed, crown.ilyJoffrey, crown.ilyRobertDead],
    },
    {
      episode: 10,
      chapter: 73,
      source: 'episode',
      value: [
        crown.ilyMarillion,
        crown.ilyNed,
        crown.ilyJoffrey,
        crown.ilyRobertDead,
      ],
    },
  ],
  'barristan-selmy': [
    { episode: 3, chapter: 16, value: [crown.barRobert] },
    // Show: "The Wolf and the Lion". Books: Eddard VII (chapter 31).
    {
      episode: 5,
      chapter: 31,
      value: [crown.barRobert, crown.barHugh, crown.barNed],
    },
    {
      episode: 7,
      chapter: 50,
      value: [
        crown.barRobertDead,
        crown.barNedProtector,
        crown.barJoffrey,
        crown.barHugh,
      ],
    },
    {
      episode: 8,
      chapter: 58,
      value: [
        crown.barJoffreyDismissal,
        crown.barJaime,
        crown.barRobertDead,
        crown.barHugh,
      ],
    },
    // Stage 3 (#1650), the show's alone: "Valar Dohaeris", "Walk of
    // Punishment" and "Second Sons". The books bring him to Daenerys as
    // Arstan Whitebeard and say who he is only in Daenerys V (chapter 201),
    // which orders these entries.
    {
      episode: 21,
      chapter: 201,
      source: 'episode',
      value: [
        essos3.barDaenerysSworn,
        essos3.barJorahKnown,
        crown.barJoffreyDismissal,
        crown.barRobertDead,
      ],
    },
    {
      episode: 23,
      chapter: 201,
      source: 'episode',
      value: [
        essos3.barDaenerysRebuke,
        essos3.barJorahRival,
        crown.barJoffreyDismissal,
        crown.barRobertDead,
      ],
    },
    {
      episode: 28,
      chapter: 201,
      source: 'episode',
      value: [
        essos3.barDaenerysMero,
        essos3.barMeroDead,
        essos3.barDaario,
        essos3.barJorahRival,
      ],
    },
  ],
  'syrio-forel': [
    { episode: 3, chapter: 23, value: [crown.syrArya, crown.syrNed] },
    {
      episode: 8,
      chapter: 51,
      value: [crown.syrMeryn, crown.syrArya, crown.syrNed],
    },
  ],
  // The books bring Eddard to Petyr's council in Eddard IV (chapter 21),
  // two chapters after Catelyn IV; the show has both in "Lord Snow".
  'petyr-baelish': [
    {
      episode: 3,
      chapter: 19,
      source: 'chapter',
      value: [crown.petCatelyn, crown.petTyrion, crown.petVarys],
    },
    {
      episode: 3,
      chapter: 21,
      value: [crown.petNed, crown.petCatelyn, crown.petTyrion, crown.petVarys],
    },
    {
      episode: 7,
      chapter: 50,
      value: [
        crown.petNedBetrayed,
        crown.petJanos,
        crown.petCatelyn,
        crown.petVarys,
      ],
    },
    // Stage 2 (#1479): Tyrion IV (chapter 91), then the court of rewards.
    {
      episode: 13,
      chapter: 91,
      source: 'chapter',
      value: [kingsLanding2.petTyrionHarrenhal, kingsLanding2.petLysaScheme],
    },
    {
      episode: 14,
      chapter: 110,
      source: 'chapter',
      value: [kingsLanding2.petTyrionTyrells],
    },
    {
      episode: 20,
      chapter: 139,
      source: 'episode',
      value: [
        kingsLanding2.petJoffreyHarrenhal,
        kingsLanding2.petSansaHelp,
        kingsLanding2.petRosFear,
      ],
    },
    {
      episode: 20,
      chapter: 139,
      source: 'chapter',
      value: [kingsLanding2.petJoffreyHarrenhal],
    },
    // Stage 3 (#1651). The show: "Valar Dohaeris" (21), "Walk of
    // Punishment" (23) and "The Climb" (26, with Cersei's request of 25).
    {
      episode: 21,
      chapter: 150,
      source: 'episode',
      value: [
        kingsLanding3.petSansaDocks,
        kingsLanding3.petRosAide,
        kingsLanding2.petJoffreyHarrenhal,
      ],
    },
    {
      episode: 23,
      chapter: 163,
      source: 'episode',
      value: [
        kingsLanding3.petTywin,
        kingsLanding3.petLysa,
        kingsLanding3.petTyrionCoin,
        kingsLanding3.petSansaDocks,
        kingsLanding3.petRosAide,
      ],
    },
    {
      episode: 26,
      chapter: 172,
      source: 'episode',
      value: [
        kingsLanding3.petVarys,
        kingsLanding3.petRosGiven,
        kingsLanding3.petSansaLeft,
        kingsLanding3.petCersei,
        kingsLanding3.petLysa,
      ],
    },
    // The books: Tyrion III (163).
    {
      episode: 23,
      chapter: 163,
      source: 'chapter',
      value: [
        kingsLanding3.petTywinBook,
        kingsLanding3.petLysaBook,
        kingsLanding3.petTyrionBook,
        kingsLanding3.petSansaBook,
        kingsLanding2.petJoffreyHarrenhal,
      ],
    },
  ],
  // The show's Varys meets Illyrio and hears from Jorah; the books never
  // name the man Arya overhears and bring Jorah's reports to the council in
  // Eddard VIII (chapter 34).
  'varys': [
    {
      episode: 3,
      chapter: 19,
      source: 'chapter',
      value: [crown.varPetyr, crown.varCatelyn],
    },
    {
      episode: 3,
      chapter: 21,
      value: [crown.varNed, crown.varPetyr, crown.varCatelyn],
    },
    {
      episode: 5,
      chapter: 31,
      source: 'episode',
      value: [
        crown.varNedWarned,
        crown.varIllyrio,
        crown.varJorahEpisode,
        crown.varPetyr,
        crown.varCatelyn,
      ],
    },
    {
      episode: 5,
      chapter: 31,
      source: 'chapter',
      value: [crown.varNedWarned, crown.varPetyr, crown.varCatelyn],
    },
    {
      episode: 5,
      chapter: 34,
      source: 'chapter',
      value: [
        crown.varNedWarned,
        crown.varJorahChapter,
        crown.varPetyr,
        crown.varCatelyn,
      ],
    },
    // Books: Eddard XV (chapter 59). The show's visit that urges a
    // confession is in "Baelor", the episode of the execution.
    {
      episode: 9,
      chapter: 59,
      source: 'chapter',
      value: [crown.varNedCell, crown.varJorahChapter, crown.varPetyr],
    },
    {
      episode: 9,
      chapter: 66,
      value: [crown.varNedDead, crown.varJoffrey, crown.varPetyr],
    },
    // Stage 2 (#1479): Tyrion II (chapter 82) and "Valar Morghulis".
    {
      episode: 12,
      chapter: 82,
      source: 'chapter',
      value: [
        kingsLanding2.varTyrionHand,
        kingsLanding2.varJacelyn,
        kingsLanding2.varGendry,
        kingsLanding2.varCerseiBastards,
      ],
    },
    {
      episode: 20,
      chapter: 141,
      source: 'episode',
      value: [kingsLanding2.varTyrionWounded, kingsLanding2.varRos],
    },
    // Stage 3 (#1651). The show: "And Now His Watch Is Ended" (24), "The
    // Climb" (26) and "Mhysa" (30).
    {
      episode: 24,
      chapter: 160,
      source: 'episode',
      value: [
        kingsLanding3.varTyrionSorcerer,
        kingsLanding3.varRosSpy,
        kingsLanding3.varOlenna,
        kingsLanding3.varPetyrFear,
        kingsLanding3.varSansa,
      ],
    },
    {
      episode: 26,
      chapter: 172,
      source: 'episode',
      value: [
        kingsLanding3.varPetyrLadder,
        kingsLanding3.varRosDead,
        kingsLanding3.varTyrionSorcerer,
        kingsLanding3.varOlenna,
        kingsLanding3.varSansa,
      ],
    },
    {
      episode: 30,
      chapter: 196,
      source: 'episode',
      value: [
        kingsLanding3.varShae,
        kingsLanding3.varTyrionHope,
        kingsLanding3.varJoffrey,
        kingsLanding3.varPetyrLadder,
        kingsLanding3.varRosDead,
      ],
    },
    // The books: Tyrion II (156).
    {
      episode: 22,
      chapter: 156,
      source: 'chapter',
      value: [
        kingsLanding3.varTyrionBook,
        kingsLanding3.varShaeBook,
        kingsLanding3.varPycelleBook,
        kingsLanding3.varCerseiOsmund,
        kingsLanding3.varTywinBook,
      ],
    },
  ],
  'pycelle': [
    {
      episode: 3,
      chapter: 21,
      value: [crown.pycNed, crown.pycRobert, crown.pycVarys, crown.pycPetyr],
    },
    {
      episode: 7,
      chapter: 50,
      value: [
        crown.pycRobertDead,
        crown.pycNedSeized,
        crown.pycJoffrey,
        crown.pycCersei,
        crown.pycVarys,
      ],
    },
    {
      episode: 9,
      chapter: 66,
      value: [
        crown.pycNedDead,
        crown.pycJoffrey,
        crown.pycCersei,
        crown.pycRobertDead,
        crown.pycVarys,
      ],
    },
    {
      episode: 10,
      chapter: 73,
      source: 'episode',
      value: [
        crown.pycRos,
        crown.pycNedDead,
        crown.pycJoffrey,
        crown.pycCersei,
        crown.pycRobertDead,
      ],
    },
    // Stage 2 (#1479): arrested for passing Tyrion's secret to the queen.
    {
      episode: 13,
      chapter: 99,
      source: 'episode',
      value: [
        kingsLanding2.pycTyrionShow,
        kingsLanding2.pycCersei,
        kingsLanding2.pycBronn,
        kingsLanding2.pycDaisy,
      ],
    },
    {
      episode: 13,
      chapter: 99,
      source: 'chapter',
      value: [
        kingsLanding2.pycTyrionBook,
        kingsLanding2.pycCersei,
        kingsLanding2.pycShagga,
        kingsLanding2.pycVarys,
      ],
    },
    // Stage 3 (#1651). The show: "Walk of Punishment" (23). The books:
    // Tyrion III (163).
    {
      episode: 23,
      chapter: 163,
      source: 'episode',
      value: [
        kingsLanding3.pycTywinShow,
        kingsLanding3.pycPetyrShow,
        kingsLanding3.pycTyrionCoin,
        kingsLanding3.pycCerseiChair,
      ],
    },
    {
      episode: 23,
      chapter: 163,
      source: 'chapter',
      value: [
        kingsLanding3.pycTywinBook,
        kingsLanding3.pycTyrionCoin,
        kingsLanding3.pycMace,
      ],
    },
  ],
  // The show names him only in episode 4; the books at Eddard I (chapter 5).
  'sandor-clegane': [
    { episode: 4, chapter: 5, source: 'chapter', value: [crown.sanJoffrey] },
    { episode: 4, chapter: 17, value: [crown.sanJoffrey, crown.sanMycah] },
    {
      episode: 5,
      chapter: 31,
      value: [
        crown.sanJoffrey,
        crown.sanGregor,
        crown.sanLoras,
        crown.sanMycah,
      ],
    },
    {
      episode: 7,
      chapter: 50,
      value: [
        crown.sanJoffreyKing,
        crown.sanGregor,
        crown.sanLoras,
        crown.sanMycah,
      ],
    },
    {
      episode: 10,
      chapter: 68,
      value: [
        crown.sanSansa,
        crown.sanJoffreyKing,
        crown.sanGregor,
        crown.sanLoras,
        crown.sanMycah,
      ],
    },
    // Stage 2 (#1479): he leaves the battle for Sansa's room.
    {
      episode: 19,
      chapter: 136,
      value: [kingsLanding2.sdrSansa, kingsLanding2.sdrJoffrey],
    },
  ],
  'janos-slynt': [
    { episode: 4, chapter: 28, value: [crown.janNed] },
    {
      episode: 7,
      chapter: 50,
      value: [crown.janNedBetrayed, crown.janPetyr, crown.janJoffrey],
    },
    {
      episode: 8,
      chapter: 58,
      value: [crown.janJoffreyReward, crown.janNedBetrayed, crown.janPetyr],
    },
    // Stage 2 (#1479): sent to the Wall.
    {
      episode: 12,
      chapter: 82,
      source: 'episode',
      value: [kingsLanding2.janTyrionShow, kingsLanding2.janBronn],
    },
    {
      episode: 12,
      chapter: 82,
      source: 'chapter',
      value: [kingsLanding2.janTyrionBook, kingsLanding2.janJacelyn],
    },
  ],
  'gendry': [
    {
      episode: 4,
      chapter: 28,
      value: [crown.genTobho, crown.genNed, crown.genRobert],
    },
    {
      episode: 7,
      chapter: 50,
      value: [crown.genTobho, crown.genNed, crown.genRobertDead],
    },
    {
      episode: 10,
      chapter: 66,
      source: 'episode',
      value: [
        crown.genArya,
        crown.genYoren,
        crown.genTobhoDismissal,
        crown.genHotPie,
        crown.genRobertDead,
      ],
    },
    // Stage 2 (#1481): Harrenhal and the escape.
    {
      episode: 14,
      chapter: 100,
      source: 'episode',
      value: [
        riverlands2.genAryaHarrenhal,
        riverlands2.genGregor,
        riverlands2.genTywin,
        riverlands2.genPolliver,
        riverlands2.genHotPieCaptive,
      ],
    },
    {
      episode: 20,
      chapter: 138,
      source: 'episode',
      value: [
        riverlands2.genAryaEscape,
        riverlands2.genHotPieEscape,
        riverlands2.genJaqenCliff,
      ],
    },
    {
      episode: 10,
      chapter: 75,
      source: 'chapter',
      value: [
        riverlands2.genAryaBook75,
        riverlands2.genHotPieBook,
        riverlands2.genLommyBook,
        riverlands2.genYorenBook,
      ],
    },
    {
      episode: 13,
      chapter: 93,
      source: 'chapter',
      value: [
        riverlands2.genAryaBook93,
        riverlands2.genHotPieBook93,
        riverlands2.genLommyBook93,
        riverlands2.genGregorBook,
        riverlands2.genYorenBuried,
      ],
    },
    {
      episode: 18,
      chapter: 138,
      source: 'chapter',
      value: [riverlands2.genAryaBook138, riverlands2.genHotPieBook138],
    },
  ],
  'gregor-clegane': [
    { episode: 4, chapter: 30, value: [crown.greHugh, crown.greSandor] },
    // Show: "The Wolf and the Lion". Books: Eddard VII (chapter 31).
    {
      episode: 5,
      chapter: 31,
      value: [crown.greLoras, crown.greSandorFight, crown.greHugh],
    },
    {
      episode: 6,
      chapter: 44,
      value: [
        crown.greNed,
        crown.greBeric,
        crown.greLoras,
        crown.greSandorFight,
        crown.greHugh,
      ],
    },
    // Stage 2 (#1481): Harrenhal.
    {
      episode: 14,
      chapter: 100,
      source: 'episode',
      value: [
        riverlands2.gregPolliver,
        riverlands2.gregTywin,
        riverlands2.gregGendry,
        riverlands2.gregArya,
      ],
    },
    {
      episode: 18,
      chapter: 138,
      source: 'episode',
      value: [
        riverlands2.gregTywinCastellan,
        riverlands2.gregAryaLeft,
        riverlands2.gregAmory,
      ],
    },
    {
      episode: 13,
      chapter: 93,
      source: 'chapter',
      value: [
        riverlands2.gregHotPieBook,
        riverlands2.gregGendryBook,
        riverlands2.gregAryaBook,
        riverlands2.gregLommy,
      ],
    },
    {
      episode: 14,
      chapter: 100,
      source: 'chapter',
      value: [
        riverlands2.gregTickler,
        riverlands2.gregChiswyck,
        riverlands2.gregPolliverBook,
        riverlands2.gregAryaBook,
      ],
    },
  ],
  // The rose is Sansa II (chapter 30); the fight with Gregor is the next
  // day, Eddard VII (chapter 31). The show has both, and Renly, in "The Wolf
  // and the Lion".
  'loras-tyrell': [
    { episode: 5, chapter: 30, source: 'chapter', value: [crown.lorSansa] },
    {
      episode: 5,
      chapter: 31,
      source: 'episode',
      value: [crown.lorSansa, crown.lorGregor, crown.lorSandor, crown.lorRenly],
    },
    {
      episode: 5,
      chapter: 31,
      source: 'chapter',
      value: [crown.lorSansa, crown.lorGregor, crown.lorSandor],
    },
    {
      episode: 7,
      chapter: 50,
      source: 'episode',
      value: [
        crown.lorRenlyFledEpisode,
        crown.lorSansa,
        crown.lorGregor,
        crown.lorSandor,
      ],
    },
    {
      episode: 7,
      chapter: 50,
      source: 'chapter',
      value: [
        crown.lorRenlyFledChapter,
        crown.lorSansa,
        crown.lorGregor,
        crown.lorSandor,
      ],
    },
    // Stage 2 (#1480): the stormlands. The show: Renly's camp at Bitterbridge.
    {
      episode: 13,
      chapter: 96,
      source: 'episode',
      value: [
        stormlands2.lorRenlyHeir,
        stormlands2.lorBrienneMelee,
        stormlands2.lorMargaeryFetch,
      ],
    },
    // Renly dies in "The Ghost of Harrenhal".
    {
      episode: 15,
      chapter: 107,
      source: 'episode',
      value: [
        stormlands2.lorRenlyDeadShow,
        stormlands2.lorPetyr,
        stormlands2.lorMargaeryWidow,
      ],
    },
    // He wears Renly's armor in "Blackwater".
    {
      episode: 19,
      chapter: 132,
      source: 'episode',
      value: [
        stormlands2.lorRenlyArmor,
        stormlands2.lorTywin,
        stormlands2.lorMargaeryWidow,
      ],
    },
    // "Valar Morghulis": he asks Joffrey for his sister's hand.
    {
      episode: 20,
      chapter: 139,
      source: 'episode',
      value: [
        stormlands2.lorMargaeryHand,
        stormlands2.lorJoffrey,
        stormlands2.lorRenlyArmor,
      ],
    },
    // The books: Catelyn II, the tourney at Bitterbridge.
    {
      episode: 13,
      chapter: 96,
      source: 'chapter',
      value: [stormlands2.lorRenlyKing, stormlands2.lorBrienneYield],
    },
    {
      episode: 15,
      chapter: 107,
      source: 'chapter',
      value: [stormlands2.lorRenlyDeadBook],
    },
    // Sansa VIII: he joins the Kingsguard.
    {
      episode: 20,
      chapter: 139,
      source: 'chapter',
      value: [stormlands2.lorMace, stormlands2.lorJoffreyBook],
    },
    // Stage 3 (#1651). The show: "Dark Wings, Dark Words" (22) and "The
    // Climb" (26). The books: Sansa I (150).
    {
      episode: 22,
      chapter: 150,
      source: 'episode',
      value: [
        kingsLanding3.lorSansaEscort,
        kingsLanding3.lorOlenna,
        stormlands2.lorMargaeryHand,
        stormlands2.lorJoffrey,
        kingsLanding3.lorRenlyDead,
      ],
    },
    {
      episode: 26,
      chapter: 172,
      source: 'episode',
      value: [
        kingsLanding3.lorSansaPlans,
        kingsLanding3.lorOlenna,
        stormlands2.lorMargaeryHand,
        stormlands2.lorJoffrey,
        kingsLanding3.lorRenlyDead,
      ],
    },
    {
      episode: 22,
      chapter: 150,
      source: 'chapter',
      value: [
        kingsLanding3.lorSansaBook,
        kingsLanding3.lorMargaeryBook,
        stormlands2.lorRenlyDeadBook,
        stormlands2.lorMace,
        stormlands2.lorJoffreyBook,
      ],
    },
  ],
  // The Hound is named in the show only in episode 4.
  'mycah': [
    { episode: 2, chapter: 16, value: [crown.mycArya, crown.mycJoffrey] },
    {
      episode: 4,
      chapter: 17,
      value: [crown.mycArya, crown.mycJoffrey, crown.mycSandor],
    },
  ],
  'meryn-trant': [
    { episode: 8, chapter: 51, value: [crown.merArya, crown.merSyrio] },
    {
      episode: 10,
      chapter: 68,
      value: [crown.merSansa, crown.merJoffrey, crown.merArya, crown.merSyrio],
    },
  ],
  // Boros and Mandon open in the show at episode 19, Arys never: their
  // stage-1 links are the books'.
  'boros-blount': [
    {
      episode: 19,
      chapter: 58,
      source: 'chapter',
      value: [
        crown.kgJoffrey,
        crown.kgBarristanLaugh,
        crown.kgJaime,
        crown.kgRobertDead,
      ],
    },
  ],
  'mandon-moore': [
    { episode: 19, chapter: 52, source: 'chapter', value: [crown.manSansa] },
    {
      episode: 19,
      chapter: 58,
      source: 'chapter',
      value: [
        crown.kgJoffrey,
        crown.kgBarristanLaugh,
        crown.kgJaime,
        crown.manSansa,
      ],
    },
  ],
  'arys-oakheart': [
    {
      episode: 8,
      chapter: 58,
      source: 'chapter',
      value: [crown.kgJoffrey, crown.kgBarristan, crown.kgJaime],
    },
  ],
  'lancel-lannister': [
    { episode: 3, chapter: 31, value: [crown.lanRobert] },
    { episode: 7, chapter: 50, value: [crown.lanRobertDead] },
    {
      episode: 10,
      chapter: 73,
      source: 'episode',
      value: [crown.lanCersei, crown.lanRobertDead],
    },
    // Stage 2 (#1479): Tyrion VII (chapter 103).
    {
      episode: 14,
      chapter: 103,
      source: 'chapter',
      value: [kingsLanding2.lanTyrionSpy],
    },
  ],
  // At his book gate, Sansa V (chapter 58), he is only drunk at court; Sansa
  // saves him at the name-day tourney, in Sansa I of A Clash of Kings
  // (chapter 76) (#1424).
  'dontos-hollard': [
    {
      episode: 11,
      chapter: 58,
      source: 'chapter',
      value: [crown.donSansaAtCourt, crown.donJoffreyAtCourt],
    },
    {
      episode: 11,
      chapter: 76,
      source: 'chapter',
      value: [crown.donSansa, crown.donJoffrey],
    },
  ],
  'hugh-of-the-vale': [
    { episode: 4, chapter: 30, value: [crown.hugGregor, crown.hugJory] },
    {
      episode: 5,
      chapter: 31,
      value: [crown.hugGregor, crown.hugBarristan, crown.hugJory],
    },
  ],
  'tobho-mott': [
    { episode: 4, chapter: 28, value: [crown.tobGendry, crown.tobNed] },
    {
      episode: 10,
      chapter: 66,
      source: 'episode',
      value: [crown.tobGendryDismissed, crown.tobNed],
    },
  ],
  // Show only, as her record is.
  'mhaegen': [
    {
      episode: 5,
      chapter: 36,
      source: 'episode',
      value: [crown.mhaNed, crown.mhaPetyr, crown.mhaRobert],
    },
    {
      episode: 7,
      chapter: 50,
      source: 'episode',
      value: [crown.mhaNed, crown.mhaPetyr, crown.mhaRobertDead],
    },
  ],
  // The books name Thoros in Beric's company; the show's Thoros opens in
  // season 3.
  'beric-dondarrion': [
    {
      episode: 6,
      chapter: 44,
      source: 'episode',
      value: [crown.berNed, crown.berGregor],
    },
    {
      episode: 6,
      chapter: 44,
      source: 'chapter',
      value: [crown.berNed, crown.berGregor, crown.berThoros],
    },
  ],
  'thoros-of-myr': [
    {
      episode: 22,
      chapter: 44,
      source: 'chapter',
      value: [crown.thoBeric, crown.thoNed, crown.thoGregor],
    },
  ],
  'balon-swann': [
    { episode: 4, chapter: 30, source: 'chapter', value: [crown.balGregor] },
  ],
  'robar-royce': [
    {
      episode: 4,
      chapter: 30,
      source: 'chapter',
      value: [crown.rbrLoras, crown.rbrYohn],
    },
  ],
  'yohn-royce': [
    { episode: 38, chapter: 30, source: 'chapter', value: [crown.yohRobar] },
  ],
  'stiv': [
    {
      episode: 6,
      chapter: 38,
      value: [crown.stvBran, crown.stvTheon, crown.stvRobb, crown.stvOsha],
    },
  ],
  // Robb kills him in the show, Grey Wind in the books.
  'wallen': [
    {
      episode: 6,
      chapter: 38,
      source: 'episode',
      value: [crown.wlnRobb, crown.wlnBran, crown.wlnStiv, crown.wlnOsha],
    },
    {
      episode: 6,
      chapter: 38,
      source: 'chapter',
      value: [crown.wlnGreyWind, crown.wlnBran, crown.wlnStiv, crown.wlnOsha],
    },
  ],
  'jason-mallister': [
    { episode: 4, chapter: 29, source: 'chapter', value: [crown.jasCatelyn] },
    // Stage 3 (#1653): Catelyn V (189), and Robb and Catelyn in the past
    // tense from Catelyn VII (195).
    {
      episode: 27,
      chapter: 189,
      source: 'chapter',
      value: [riverlands3.jaCatelyn189, riverlands3.jaRobb189],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [riverlands3.jaCatelyn195, riverlands3.jaRobb195],
    },
  ],
  'masha-heddle': [
    { episode: 4, chapter: 29, value: [crown.masCatelyn, crown.masTyrion] },
    {
      episode: 8,
      chapter: 57,
      source: 'chapter',
      value: [crown.masTywin, crown.masCatelyn, crown.masTyrion],
    },
    // Stage 3 (#1653): Catelyn in the past tense from "The Rains of
    // Castamere" (29). The books' Masha is dead by then.
    {
      episode: 29,
      chapter: 195,
      source: 'episode',
      value: [riverlands3.msCatelyn29, crown.masTyrion],
    },
  ],
  'kevan-lannister': [
    { episode: 8, chapter: 57, value: [crown.kevTywin, crown.kevTyrion] },
    {
      episode: 10,
      chapter: 70,
      value: [crown.kevTywin, crown.kevJaime, crown.kevTyrionHand],
    },
  ],
  'addam-marbrand': [{ episode: 10, chapter: 63, value: [crown.addTywin] }],
  'podrick-payne': [
    {
      episode: 19,
      chapter: 63,
      source: 'chapter',
      value: [crown.podTyrion, crown.podKevan],
    },
  ],
  'stevron-frey': [
    { episode: 9, chapter: 60, value: [crown.steWalder, crown.steCatelyn] },
    {
      episode: 9,
      chapter: 72,
      source: 'chapter',
      value: [crown.steRobb, crown.steWalder, crown.steCatelyn],
    },
    // Stage 3 (#1653): Catelyn in the past tense from "The Rains of
    // Castamere" (29). The books' Stevron is dead by then.
    {
      episode: 29,
      chapter: 195,
      source: 'episode',
      value: [crown.steWalder, riverlands3.stCatelyn29],
    },
  ],
  // Edmure, Hoster and Brynden open in the show at episode 23: their
  // stage-1 links are the books'.
  'edmure-tully': [
    {
      episode: 23,
      chapter: 72,
      source: 'chapter',
      value: [
        crown.edmCatelyn,
        crown.edmHoster,
        crown.edmRobb,
        crown.edmBrynden,
      ],
    },
    // Stage 2 (#1481): Catelyn I and Catelyn V.
    {
      episode: 23,
      chapter: 81,
      source: 'chapter',
      value: [
        riverlands2.edmRobb,
        riverlands2.edmCatelyn,
        riverlands2.edmRickard,
      ],
    },
    {
      episode: 23,
      chapter: 113,
      source: 'chapter',
      value: [
        riverlands2.edmCatelynRiverrun,
        riverlands2.edmJaime,
        riverlands2.edmRoose,
        riverlands2.edmTywin,
      ],
    },
    // Stage 3 (#1653): his first show cards, "Walk of Punishment" (23) to
    // "The Rains of Castamere" (29); the books, Catelyn I to VII (146 to
    // 195).
    {
      episode: 23,
      chapter: 146,
      source: 'episode',
      value: [
        riverlands3.edHoster23,
        riverlands3.edBrynden23,
        riverlands3.edRobb23,
        riverlands3.edWillem23,
        riverlands3.edMartyn23,
      ],
    },
    {
      episode: 25,
      chapter: 164,
      source: 'episode',
      value: [
        riverlands3.edRobb25,
        riverlands3.edRickard25,
        riverlands3.edWillem25,
        riverlands3.edMartyn25,
        riverlands3.edCatelyn25,
      ],
    },
    {
      episode: 26,
      chapter: 179,
      source: 'episode',
      value: [
        riverlands3.edRoslin26,
        riverlands3.edWalder26,
        riverlands3.edRobb26,
        riverlands3.edBrynden26,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'episode',
      value: [
        riverlands3.edRoslin29,
        riverlands3.edWalder29,
        riverlands3.edRobb29,
        riverlands3.edCatelyn29,
        riverlands3.edBrynden29,
      ],
    },
    {
      episode: 23,
      chapter: 146,
      source: 'chapter',
      value: [
        riverlands3.edCatelyn146,
        riverlands3.edHoster146,
        riverlands3.edJaime146,
        riverlands3.edRoose146,
      ],
    },
    {
      episode: 23,
      chapter: 158,
      source: 'chapter',
      value: [
        riverlands3.edRobb158,
        riverlands3.edBrynden158,
        riverlands3.edCatelyn158,
        riverlands3.edHoster158,
      ],
    },
    {
      episode: 25,
      chapter: 164,
      source: 'chapter',
      value: [
        riverlands3.edRickard164,
        riverlands3.edWillem164,
        riverlands3.edRobb164,
        riverlands3.edBrynden164,
        riverlands3.edCatelyn164,
      ],
    },
    {
      episode: 26,
      chapter: 179,
      source: 'chapter',
      value: [
        riverlands3.edHoster179,
        riverlands3.edBrynden179,
        riverlands3.edRoslin179,
        riverlands3.edLothar179,
        riverlands3.edRobb179,
      ],
    },
    {
      episode: 29,
      chapter: 193,
      source: 'chapter',
      value: [
        riverlands3.edRoslin193,
        riverlands3.edWalder193,
        riverlands3.edRobb193,
        riverlands3.edCatelyn193,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands3.edRoslin195,
        riverlands3.edRobb195,
        riverlands3.edCatelyn195,
        riverlands3.edWalder195,
      ],
    },
  ],
  'hoster-tully': [
    {
      episode: 23,
      chapter: 72,
      source: 'chapter',
      value: [
        crown.hosCatelyn,
        crown.hosEdmure,
        crown.hosRobb,
        crown.hosLysa,
        crown.hosBrynden,
      ],
    },
    // Stage 3 (#1653). The show opens him dead: his cards are told at his
    // funeral, "Walk of Punishment" (23). The books: Catelyn I (146), and
    // his death in Catelyn IV (179).
    {
      episode: 23,
      chapter: 179,
      source: 'episode',
      value: [
        riverlands3.hoBrynden23,
        riverlands3.hoCatelyn23,
        riverlands3.hoEdmure23,
        riverlands3.hoRobb23,
      ],
    },
    {
      episode: 23,
      chapter: 146,
      source: 'chapter',
      value: [
        riverlands3.hoCatelyn146,
        crown.hosEdmure,
        crown.hosLysa,
        crown.hosBrynden,
        crown.hosRobb,
      ],
    },
    {
      episode: 23,
      chapter: 179,
      source: 'chapter',
      value: [
        riverlands3.hoCatelyn179,
        riverlands3.hoEdmure179,
        riverlands3.hoBrynden179,
        riverlands3.hoRobb179,
        riverlands3.hoLysa179,
      ],
    },
  ],
  // Books: he leaves the Vale with Catelyn and joins Robb's host in
  // Catelyn VIII (chapter 56), his own dated affiliation. Hoster's book
  // record opens only at Catelyn XI (chapter 72).
  'brynden-tully': [
    {
      episode: 23,
      chapter: 35,
      source: 'chapter',
      value: [crown.bryCatelyn, crown.bryLysa],
    },
    {
      episode: 23,
      chapter: 56,
      source: 'chapter',
      value: [crown.bryRobb, crown.bryCatelynLeaves, crown.bryLysaRefuses],
    },
    // Stage 3 (#1653): his first show cards, "Walk of Punishment" (23) to
    // "The Rains of Castamere" (29); the books, Catelyn II to IV (158 to
    // 179), and Robb's and Catelyn's deaths in Catelyn VII (195).
    {
      episode: 23,
      chapter: 158,
      source: 'episode',
      value: [
        riverlands3.brHoster23,
        riverlands3.brCatelyn23,
        riverlands3.brEdmure23,
        riverlands3.brRobb23,
      ],
    },
    {
      episode: 25,
      chapter: 164,
      source: 'episode',
      value: [
        riverlands3.brRickard25,
        riverlands3.brRobb25,
        riverlands3.brCatelyn25,
        riverlands3.brEdmure25,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'episode',
      value: [
        riverlands3.brRobb29,
        riverlands3.brCatelyn29,
        riverlands3.brEdmure29,
        riverlands3.brWalder29,
      ],
    },
    {
      episode: 23,
      chapter: 158,
      source: 'chapter',
      value: [
        riverlands3.brCatelyn158,
        riverlands3.brRobb158,
        riverlands3.brEdmure158,
        riverlands3.brLysa158,
      ],
    },
    {
      episode: 25,
      chapter: 164,
      source: 'chapter',
      value: [
        riverlands3.brRickard164,
        riverlands3.brRobb164,
        riverlands3.brEdmure164,
        riverlands3.brCatelyn164,
      ],
    },
    {
      episode: 26,
      chapter: 179,
      source: 'chapter',
      value: [
        riverlands3.brHoster179,
        riverlands3.brEdmure179,
        riverlands3.brRobb179,
        riverlands3.brCatelyn179,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [
        riverlands3.brRobb195,
        riverlands3.brCatelyn195,
        riverlands3.brEdmure179,
        riverlands3.brHoster179,
        riverlands3.brLysa195,
      ],
    },
  ],
  // Hot Pie's book record opens after stage 1 (chapter 75). Lommy's show
  // record opens at episode 31, past stage 2, where his name is first said
  // (#1457): his show-side cards, and Hot Pie's card for him, wait for stage 4;
  // his book-side cards (from chapter 75) belong to stage 2 (#1481).
  'hot-pie': [
    {
      episode: 10,
      chapter: 75,
      source: 'episode',
      value: [crown.hotArya, crown.hotGendry, crown.hotYoren],
    },
    // Stage 2 (#1481): Harrenhal and the escape.
    {
      episode: 14,
      chapter: 100,
      source: 'episode',
      value: [riverlands2.hotAryaHarrenhal, riverlands2.hotGendryCaptive],
    },
    {
      episode: 20,
      chapter: 138,
      source: 'episode',
      value: [
        riverlands2.hotAryaEscape,
        riverlands2.hotGendryEscape,
        riverlands2.hotJaqenGate,
      ],
    },
    {
      episode: 10,
      chapter: 75,
      source: 'chapter',
      value: [
        riverlands2.hotAryaBook75,
        riverlands2.hotLommyBook,
        riverlands2.hotGendryBook,
        riverlands2.hotYorenBook,
      ],
    },
    {
      episode: 13,
      chapter: 93,
      source: 'chapter',
      value: [
        riverlands2.hotGregorBook,
        riverlands2.hotLommyBook93,
        riverlands2.hotGendryBook93,
        riverlands2.hotAryaBook93,
      ],
    },
    {
      episode: 18,
      chapter: 138,
      source: 'chapter',
      value: [riverlands2.hotAryaBook138, riverlands2.hotGendryBook138],
    },
  ],
  'marillion': [
    { episode: 4, chapter: 29, value: [crown.marCatelyn, crown.marTyrion] },
    {
      episode: 10,
      chapter: 73,
      source: 'episode',
      value: [
        crown.marJoffrey,
        crown.marIlyn,
        crown.marCatelyn,
        crown.marTyrion,
      ],
    },
    // Stage 3 (#1653): Catelyn in the past tense from the Red Wedding, "The
    // Rains of Castamere" (29) and Catelyn VII (195).
    {
      episode: 29,
      chapter: 195,
      source: 'episode',
      value: [
        crown.marJoffrey,
        crown.marIlyn,
        riverlands3.mrCatelyn,
        crown.marTyrion,
      ],
    },
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [riverlands3.mrCatelyn, crown.marTyrion],
    },
  ],
  'willis-wode': [
    { episode: 4, chapter: 29, value: [crown.wilCatelyn, crown.wilTyrion] },
    // Stage 3 (#1653): the books' Willis lives, and Catelyn turns to the
    // past tense in Catelyn VII (195). The show's dies in episode 5.
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [riverlands3.wwCatelyn195, crown.wilTyrion],
    },
  ],
  // Donnel opens in the show at episode 35: his stage-1 links are the
  // books'.
  'donnel-waynwood': [
    {
      episode: 35,
      chapter: 35,
      source: 'chapter',
      value: [crown.dnlCatelyn, crown.dnlTyrion],
    },
    // Stage 3 (#1653): Catelyn in the past tense from Catelyn VII (195).
    {
      episode: 35,
      chapter: 195,
      source: 'chapter',
      value: [riverlands3.dnCatelyn195, crown.dnlTyrion],
    },
  ],
  'nestor-royce': [
    {
      episode: 5,
      chapter: 35,
      source: 'chapter',
      value: [crown.nesCatelyn, crown.nesLysa],
    },
    // Stage 3 (#1653): Catelyn in the past tense from Catelyn VII (195).
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [riverlands3.neCatelyn195, crown.nesLysa],
    },
  ],
  'mya-stone': [
    { episode: 5, chapter: 35, source: 'chapter', value: [crown.myaCatelyn] },
    // Stage 3 (#1653): Catelyn in the past tense from Catelyn VII (195).
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [riverlands3.myCatelyn195],
    },
  ],
  'vardis-egen': [
    {
      episode: 6,
      chapter: 35,
      source: 'chapter',
      value: [crown.vrdLysa, crown.vrdCatelyn],
    },
    {
      episode: 6,
      chapter: 41,
      value: [crown.vrdLysaChampion, crown.vrdBronn, crown.vrdTyrion],
    },
  ],
  'mord': [
    { episode: 6, chapter: 39, value: [crown.morTyrion, crown.morLysa] },
  ],
  // Books: the hearing is Tyrion V (chapter 39). The chapter that has him
  // turned down and sent down the mountain with Tyrion is not named by the
  // pages read; Tyrion VI (chapter 43), on the road from the Vale, is later
  // and safe.
  'lyn-corbray': [
    { episode: 6, chapter: 39, source: 'chapter', value: [crown.lynTyrion] },
    {
      episode: 6,
      chapter: 43,
      source: 'chapter',
      value: [crown.lynLysa, crown.lynTyrionEscort, crown.lynBronn],
    },
  ],
  'anya-waynwood': [
    { episode: 38, chapter: 39, source: 'chapter', value: [crown.anyTyrion] },
  ],
  'shagga': [
    {
      episode: 8,
      chapter: 43,
      source: 'chapter',
      value: [crown.shgTyrion, crown.shgBronn],
    },
    {
      episode: 8,
      chapter: 57,
      value: [
        crown.shgTyrion,
        crown.shgBronn,
        crown.clanTywin,
        crown.shgTimett,
        crown.shgChella,
      ],
    },
  ],
  'timett': [
    {
      episode: 8,
      chapter: 57,
      value: [
        crown.clanTyrion,
        crown.clanShagga,
        crown.clanTywin,
        crown.shgChella,
      ],
    },
  ],
  'chella': [
    {
      episode: 8,
      chapter: 57,
      value: [
        crown.clanTyrion,
        crown.clanShagga,
        crown.clanTywin,
        crown.shgTimett,
      ],
    },
  ],
  // Show and books both have him ask Arya for water at 12 / 79; Rorge and
  // Biter are named only in the books, and Chiswyck and Weese, where the
  // show has the Tickler and Amory Lorch.
  'jaqen-hghar': [
    {
      episode: 12,
      chapter: 79,
      source: 'episode',
      value: [riverlands2.jaqArya, riverlands2.jaqYoren],
    },
    {
      episode: 12,
      chapter: 79,
      source: 'chapter',
      value: [
        riverlands2.jaqAryaBook,
        riverlands2.jaqRorge,
        riverlands2.jaqBiter,
        riverlands2.jaqYoren,
      ],
    },
    {
      episode: 16,
      chapter: 104,
      source: 'episode',
      value: [
        riverlands2.jaqAryaDebt,
        riverlands2.jaqTickler,
        riverlands2.jaqAmory,
      ],
    },
    {
      episode: 16,
      chapter: 104,
      source: 'chapter',
      value: [
        riverlands2.jaqAryaChiswyck,
        riverlands2.jaqChiswyck,
        riverlands2.jaqAmoryHarrenhal,
        riverlands2.jaqRorgeMen,
        riverlands2.jaqBiterMen,
      ],
    },
    {
      episode: 18,
      chapter: 112,
      source: 'chapter',
      value: [
        riverlands2.jaqAryaWeese,
        riverlands2.jaqWeese,
        riverlands2.jaqAmoryCastellan,
        riverlands2.jaqRorgeMen,
        riverlands2.jaqBiterMen,
      ],
    },
    {
      episode: 18,
      chapter: 138,
      source: 'episode',
      value: [
        riverlands2.jaqAryaName,
        riverlands2.jaqGendry,
        riverlands2.jaqHotPie,
      ],
    },
    {
      episode: 18,
      chapter: 121,
      source: 'chapter',
      value: [
        riverlands2.jaqAryaFarewell,
        riverlands2.jaqRobett,
        riverlands2.jaqRorgeFree,
        riverlands2.jaqBiterFree,
      ],
    },
  ],
  // Books only (#1457).
  'rorge': [
    {
      episode: 12,
      chapter: 79,
      source: 'chapter',
      value: [
        riverlands2.rorArya,
        riverlands2.rorYoren,
        riverlands2.rorJaqen,
        riverlands2.rorBiter,
      ],
    },
    {
      episode: 12,
      chapter: 112,
      source: 'chapter',
      value: [
        riverlands2.rorAryaHarrenhal,
        riverlands2.rorAmory,
        riverlands2.rorJaqenMen,
        riverlands2.rorBiterMen,
      ],
    },
    {
      episode: 12,
      chapter: 121,
      source: 'chapter',
      value: [
        riverlands2.rorRobett,
        riverlands2.rorJaqenFree,
        riverlands2.rorBiterFree,
      ],
    },
  ],
  // Books only (#1457).
  'biter': [
    {
      episode: 12,
      chapter: 79,
      source: 'chapter',
      value: [
        riverlands2.bitArya,
        riverlands2.bitJaqen,
        riverlands2.bitRorge,
        riverlands2.bitYoren,
      ],
    },
    {
      episode: 12,
      chapter: 121,
      source: 'chapter',
      value: [
        riverlands2.bitRobett,
        riverlands2.bitJaqenFree,
        riverlands2.bitRorgeFree,
      ],
    },
  ],
  // The show names him at episode 31, past the stage and dead; his
  // book-side cards are the stage's, until Raff kills him in Arya V.
  'lommy': [
    {
      episode: 31,
      chapter: 75,
      source: 'chapter',
      value: [
        riverlands2.lomArya,
        riverlands2.lomHotPie,
        riverlands2.lomGendry,
        riverlands2.lomYoren,
      ],
    },
    {
      episode: 31,
      chapter: 93,
      source: 'chapter',
      value: [
        riverlands2.lomArya93,
        riverlands2.lomHotPie93,
        riverlands2.lomGendry93,
        riverlands2.lomGregor,
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
