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
      it: 'Suo padre, ora Primo Cavaliere del re, che ha preso la Torre del Primo Cavaliere. Tyrion giace ferito nella fortezza di Maegor.',
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
      it: 'Il Primo Cavaliere in carica, che interviene quando Joffrey la fa picchiare davanti alla corte e le offre di sciogliere il fidanzamento. Lei mantiene la facciata di lealtà, e lui ne è colpito.',
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
      en: 'His squire, who saves his life in the fighting at the chain.',
      it: 'Il suo scudiero, che gli salva la vita negli scontri alla catena.',
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
  ],
  'ghost-direwolf': [
    { episode: 4, chapter: 6, value: [north.ghoJon] },
    { episode: 8, chapter: 53, value: [north.ghoJon, north.ghoJeor] },
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
  ],
  'hodor': [{ episode: 4, chapter: 25, value: [north.hodBran] }],
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
  ],
  'hallis-mollen': [
    {
      episode: 2,
      chapter: 15,
      source: 'chapter',
      value: [north.halCatelyn, north.halRobb],
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
  ],
  'rickard-karstark': [
    { episode: 17, chapter: 54, source: 'chapter', value: [north.rkRobb] },
    { episode: 17, chapter: 72, source: 'chapter', value: [north.rkRobbKing] },
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
  ],
  'robett-glover': [
    { episode: 57, chapter: 54, source: 'chapter', value: [north.robRobb] },
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
  ],
  'dacey-mormont': [
    {
      episode: 9,
      chapter: 64,
      source: 'chapter',
      value: [north.dacRobb, north.dacMaege],
    },
  ],
  'wendel-manderly': [
    {
      episode: 29,
      chapter: 56,
      source: 'chapter',
      value: [north.wenCatelyn, north.wenRobb],
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
  ],
  'walder-frey': [
    {
      episode: 9,
      chapter: 60,
      value: [crown.walCatelyn, crown.walRobb, crown.walArya, crown.walStevron],
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
  ],
  'masha-heddle': [
    { episode: 4, chapter: 29, value: [crown.masCatelyn, crown.masTyrion] },
    {
      episode: 8,
      chapter: 57,
      source: 'chapter',
      value: [crown.masTywin, crown.masCatelyn, crown.masTyrion],
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
  ],
  'willis-wode': [
    { episode: 4, chapter: 29, value: [crown.wilCatelyn, crown.wilTyrion] },
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
  ],
  'nestor-royce': [
    {
      episode: 5,
      chapter: 35,
      source: 'chapter',
      value: [crown.nesCatelyn, crown.nesLysa],
    },
  ],
  'mya-stone': [
    { episode: 5, chapter: 35, source: 'chapter', value: [crown.myaCatelyn] },
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
} satisfies Record<string, Timeline<Relationship[]>>
