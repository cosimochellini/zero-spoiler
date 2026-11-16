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
  // Show only: "A Golden Crown". The books give the arm to Haggo.
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
      en: 'The head of the Night’s Watch. To thank Jon for saving his life, he gives him Longclaw, his family’s Valyrian steel sword.',
      it: 'Il capo dei Guardiani della notte. Per ringraziare Jon di avergli salvato la vita, gli regala Lungo Artiglio, la spada di acciaio di Valyria della sua famiglia.',
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
      en: 'His steward, who saved his life. Jeor gives him Longclaw, his family’s Valyrian steel sword.',
      it: 'Il suo attendente, che gli ha salvato la vita. Jeor gli regala Lungo Artiglio, la spada di acciaio di Valyria della sua famiglia.',
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
      en: 'His steward, who looks after him and the ravens. He tries to turn Jon away from Aemon’s door.',
      it: 'Il suo attendente, che si occupa di lui e dei corvi. Cerca di mandare via Jon dalla porta di Aemon.',
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
  otrBenjen: {
    character: 'benjen-stark',
    type: { en: 'Ranger he rides with', it: 'Ranger al cui seguito parte' },
    summary: {
      en: 'The ranger at the head of the party Othor rides out with.',
      it: 'Il ranger alla guida del gruppo con cui Othor parte in perlustrazione.',
    },
  },
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
      en: 'The master of coin who promised him the City Watch, then held a knife to his throat when the guards turned on him.',
      it: 'Il maestro del conio che gli aveva promesso la Guardia cittadina e poi gli ha puntato un pugnale alla gola quando le guardie gli si sono rivoltate contro.',
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
      en: 'Her younger sister, the widow of the Hand. Catelyn brings Tyrion to her and finds her changed.',
      it: 'Sua sorella minore, vedova del Primo Cavaliere. Catelyn le porta Tyrion e la trova cambiata.',
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
      en: 'His brother’s bastard son. Jon asks to join the Night’s Watch, and Benjen warns him the life is hard.',
      it: 'Il figlio bastardo di suo fratello. Jon chiede di unirsi ai Guardiani della notte, e Benjen lo avverte che è una vita dura.',
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
      en: 'The lady of Winterfell, whom he escorts. He helps her seize Tyrion at the inn.',
      it: 'La signora di Grande Inverno, che scorta. La aiuta a catturare Tyrion alla locanda.',
    },
  },
  rodTyrion: {
    character: 'tyrion-lannister',
    type: { en: 'Captive', it: 'Prigioniero' },
    summary: {
      en: 'The queen’s brother, whom Catelyn accuses of sending a killer after Bran. Rodrik helps take him.',
      it: 'Il fratello della regina, che Catelyn accusa di aver mandato un sicario da Bran. Rodrik la aiuta a catturarlo.',
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
      en: 'Lord Eddard’s heir, who has called the banners. Robett comes to Winterfell and asks him for a command.',
      it: 'L’erede di lord Eddard, che ha chiamato a raccolta i vessilli. Robett viene a Grande Inverno e gli chiede un comando.',
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
  alyEddardCaptain: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'Lord Eddard, whom he followed south. After Jory’s death Alyn led his guard, until Eddard sent him away with Lord Beric’s company.',
      it: 'Lord Eddard, che ha seguito al sud. Dopo la morte di Jory Alyn ha guidato la sua guardia, finché Eddard non lo ha mandato via con la compagnia di lord Beric.',
    },
  },
  alyEddardDead: {
    character: 'eddard-stark',
    type: { en: 'Lord', it: 'Signore' },
    summary: {
      en: 'Lord Eddard, whose guard Alyn led after Jory’s death. Eddard was beheaded in the capital.',
      it: 'Lord Eddard, di cui Alyn ha guidato la guardia dopo la morte di Jory. Eddard è stato decapitato nella capitale.',
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
    // Luwin leads them and Shaggydog bites him.
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
  // Books only, as their records are. Harwin joins Lord Beric's company at
  // Sansa III (chapter 45); Alyn takes the Hand's guard at Eddard XII
  // (chapter 46).
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
      value: [north.harEddardDead, north.harBeric, north.harHullenDead],
    },
  ],
  'alyn': [
    { episode: 1, chapter: 13, source: 'chapter', value: [north.alyEddard] },
    {
      episode: 6,
      chapter: 46,
      source: 'chapter',
      value: [north.alyEddardCaptain],
    },
    {
      episode: 9,
      chapter: 66,
      source: 'chapter',
      value: [north.alyEddardDead],
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
    // The book gives Longclaw and Aemon's name in Jon VIII (chapter 61); the
    // entry waits for Ned's death at chapter 66, which the show tells in the
    // same episode as Longclaw.
    {
      episode: 9,
      chapter: 66,
      value: [
        links.jonEddardDead,
        links.jonJeorLongclaw,
        links.jonAemon,
        links.jonSamwellRobb,
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
    {
      episode: 9,
      chapter: 61,
      value: [
        links.jeorJonLongclaw,
        links.jeorJorah,
        links.jeorAemon,
        links.jeorAlliserSent,
        links.jeorOthorDead,
      ],
    },
    {
      episode: 10,
      chapter: 71,
      value: [
        links.jeorJonRanging,
        links.jeorJorah,
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
  // Books: he rides out with Benjen in Jon III (chapter 20). Both media
  // bring him back dead at 8 / 53.
  'othor': [
    { episode: 8, chapter: 20, source: 'chapter', value: [links.otrBenjen] },
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
} satisfies Record<string, Timeline<Relationship[]>>
