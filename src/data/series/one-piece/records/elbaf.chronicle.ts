import type { Story, Timeline } from '~/data/types'

/**
 * The dated stories for the characters the Elbaph arc introduces, episodes
 * 1160 to 1180. Each first story sits at its character's own episode, and
 * every later one at the first episode, and the chapter it adapts, by whose
 * end a viewer knows all of it: episode N adapts chapter N − 30 here.
 */
export const elbafChronicles = {
  'scopper-gaban': [
    {
      episode: 1169,
      chapter: 1139,
      value: {
        title: { it: 'Mr. Ya prende la chiave', en: 'Mr. Ya takes the key' },
        body: {
          it: 'Nella sala del trono del castello una voce chiama [[monkey-d-luffy|Rufy]], e un’ascia lanciata contro [[road|Lord]] gli fa lasciar cadere tutti quelli che porta. Sul trono siede un uomo che i giganti chiamano Mr. Ya, un ex pirata umano, marito di [[ripley|Ripley]] e padre di [[colon|Collon]], che si definisce un “Predicatore dell’Amore”. Dice a Rufy che solo [[shanks|Shanks]] è mai riuscito a rinchiudere [[loki|Loki]], poi fa spingere via il trono a Lord. Dietro c’è una camera nascosta con la chiave delle manette di Loki, e Mr. Ya la prende e dice a Rufy di strapparla dalle sue mani con la forza. Al villaggio i giganti spiegano a [[usopp|Usop]] chi è davvero: Scopper Gabin, il Mangiamontagne, la Mano Sinistra del Re dei Pirati.',
          en: 'In the castle’s throne room a voice calls out to [[monkey-d-luffy|Luffy]], and an axe thrown at [[road|Road]] makes him drop everyone he is carrying. On the throne sits a man the giants call Mr. Ya, a human former pirate who is [[ripley|Ripley]]’s husband and [[colon|Colon]]’s father, and who calls himself a Preacher of Love. He tells Luffy that only [[shanks|Shanks]] ever managed to lock [[loki|Loki]] up, then has Road push the throne aside. A hidden chamber behind it holds the key to Loki’s cuffs, and Mr. Ya takes it and tells Luffy to take it from him by force. In the village the giants tell [[usopp|Usopp]] who he really is: Scopper Gaban, the Mountain-Eater, the Left Hand of the Pirate King.',
        },
      },
    },
    {
      episode: 1170,
      chapter: 1140,
      value: {
        title: { it: 'La chiave cambia mano', en: 'The key changes hands' },
        body: {
          it: 'Gabin schiva tutto quello che [[monkey-d-luffy|Rufy]] gli lancia contro e gli cala addosso la chiave, rivestita di Haki. Quando risponde con una raffica di colpi d’ascia, [[roronoa-zoro|Zoro]] si mette in mezzo e li ferma con le spade, e una parte del castello crolla. Poi Rufy passa al Gear 5, e Gabin dice che si arrende. La chiave è per terra accanto a lui, quindi è loro, spiega, e se ne va. Prima di uscire dice che, se Erbaf sarà ancora in piedi quando partiranno, devono andare a trovarlo.',
          en: 'Gaban dodges everything [[monkey-d-luffy|Luffy]] throws at him and brings the key down on him, coated in Haki. When he answers with a flurry of axe blows, [[roronoa-zoro|Zoro]] steps in and blocks them with his swords, and part of the castle comes down. Then Luffy goes into Gear 5, and Gaban says he gives up. The key is lying on the ground next to him, so it is theirs, he tells them, and he walks off. On his way out he says they should visit him if Elbaph is still in one piece by the time they leave.',
        },
      },
    },
    {
      episode: 1179,
      chapter: 1149,
      value: {
        title: { it: 'Gabin si arrende', en: 'Gaban gives up' },
        body: {
          it: 'Dopo che Gabin ha tagliato in due [[shepherd-sommers|Sommers]], la ferita non si richiude, e lui corre a salvare i bambini. [[manmayer-gunko|Gunko]] sente [[colon|Collon]] chiamarlo padre e prende Collon in ostaggio, con la punta di una freccia contro il collo. Gabin dice al figlio di resistere ancora un secondo, ma con l’Haki dell’osservazione vede che non riuscirà a salvarlo in tempo. Lascia cadere le asce e si arrende. Gunko lo riempie di frecce, lo chiama debole e lo getta giù dai rami. Lui cade chiedendo scusa al figlio e a Erbaf.',
          en: 'After Gaban cuts [[shepherd-sommers|Sommers]] in half, the wound will not close, and he runs on to save the children. [[manmayer-gunko|Gunko]] hears [[colon|Colon]] call him father and takes Colon hostage with an arrow held to his neck. Gaban tells his son to hold on for one more second, but his Observation Haki shows him that he cannot save Colon in time. He drops his axes and gives up. Gunko fills him with arrows, calls him weak and throws him off the branches. He falls apologising to his son and to Elbaph.',
        },
      },
    },
  ],
  'loki': [
    {
      episode: 1160,
      chapter: 1130,
      value: {
        title: { it: 'Il Principe Maledetto', en: 'The Accursed Prince' },
        body: {
          it: 'Al largo, [[dorry|Dori]] e [[brogy|Brogi]] raccontano alla ciurma del Principe Maledetto di Erbaf. È incatenato da anni, dicono, e ha ucciso il re suo padre per ottenere il frutto del diavolo che la famiglia reale si tramanda. Se mai si libererà, sarà la fine di Erbaf. Intanto [[monkey-d-luffy|Rufy]] lascia il ponte per seguire una presenza potente e lo trova incatenato e bendato. Loki sente Rufy lo stesso e gli fa dire il suo nome. Dice che sono a Erbaf, la terra da cui nascono le guerre, e si definisce il Dio del Sole che porterà la fine del mondo.',
          en: 'Out at sea, [[dorry|Dorry]] and [[brogy|Brogy]] tell the crew about the Accursed Prince of Elbaph. He has been chained up for years, they say, and killed the king, his father, to get the devil fruit the royal family hands down. If he ever breaks free, it will be the end of Elbaph. Meanwhile [[monkey-d-luffy|Luffy]] leaves the bridge to follow a powerful presence and finds him chained and blindfolded. Loki senses Luffy anyway and has him give his name. He says they are in Elbaph, the land where wars come from, and calls himself the Sun God who will bring the end of the world.',
        },
      },
    },
    {
      episode: 1171,
      chapter: 1141,
      value: {
        title: { it: 'Una sola manetta', en: 'One cuff left' },
        body: {
          it: 'Nel Mondo Sotterraneo [[monkey-d-luffy|Rufy]] e [[roronoa-zoro|Zoro]] trovano Loki privo di sensi tra i suoi animali feriti. Rufy vuole liberarlo e farlo curare. Zoro non si fida ancora, e accetta di aprire le catene solo a una condizione: una manetta di agalmatolite resta chiusa, così Loki non potrà usare il suo frutto del diavolo se si sveglia. [[hajrudin|Hajrudin]] e i Nuovi Pirati Guerrieri Giganti arrivano per fermarli, ma Zoro ha già finito. Loki apre gli occhi, si rimette in piedi e afferra il suo martello, [[ragnir|Ragnir]].',
          en: 'In the Underworld [[monkey-d-luffy|Luffy]] and [[roronoa-zoro|Zoro]] find Loki unconscious among his beaten animals. Luffy wants to free him and have his wounds treated. Zoro does not trust him yet, so he agrees to unlock the chains on one condition: one Seastone cuff stays on, so Loki cannot use his devil fruit if he wakes. [[hajrudin|Hajrudin]] and the New Giant Warrior Pirates arrive to stop them, but Zoro has already finished. Loki opens his eyes, gets to his feet and takes hold of his hammer, [[ragnir|Ragnir]].',
        },
      },
    },
    {
      episode: 1172,
      chapter: 1142,
      value: {
        title: { it: 'Il fulmine di Loki', en: 'Loki’s lightning' },
        body: {
          it: 'Loki dice ai Cappello di Paglia che lasciargli una manetta di agalmatolite non lo priva del suo potere. Pretende che tolgano anche l’ultima, altrimenti distruggerà Erbaf. Per mostrare che non scherza colpisce l’albero gigante con [[ragnir|Ragnir]] e fa cadere un fulmine. Sul lato sud dell’isola scoppia un incendio, e i giganti che stanno banchettando si muovono per spegnerlo.',
          en: 'Loki tells the Straw Hats that leaving one Seastone cuff on him does not leave him powerless. He demands that the last one come off, or he will destroy Elbaph. To show them what he means, he strikes the great tree with [[ragnir|Ragnir]] and calls down a bolt of lightning. A fire breaks out on the south side of the island, and the giants at the feast move to put it out.',
        },
      },
    },
    {
      episode: 1173,
      chapter: 1143,
      value: {
        title: {
          it: 'Voleva davvero uccidere il re?',
          en: 'Did he mean to kill the king?',
        },
        body: {
          it: 'Loki ferito minaccia di uccidere tutti nel Regno del Sole se non gli tolgono l’ultima manetta. [[monkey-d-luffy|Rufy]] lo atterra con un colpo debole, e [[gerd|Gerd]] comincia a curargli le ferite. [[hajrudin|Hajrudin]] impugna l’ascia per vendicare il loro padre, [[harald|Harald]], ma Loki gli dice di guardare la situazione per quella che è. Poi gli chiede se crede davvero che abbia ucciso il re di proposito.',
          en: 'The wounded Loki threatens to kill everyone in the Sun World unless the last cuff comes off. [[monkey-d-luffy|Luffy]] knocks him down with one weak blow, and [[gerd|Gerd]] starts treating his wounds. [[hajrudin|Hajrudin]] draws his axe to avenge their father, [[harald|Harald]], but Loki tells him to see the situation for what it is. Then he asks Hajrudin whether he truly believes he killed the king on purpose.',
        },
      },
    },
  ],
  'kiba': [
    {
      episode: 1172,
      chapter: 1142,
      value: {
        title: { it: 'Il preside corre fuori', en: 'The principal runs out' },
        body: {
          it: 'Alla Scuola Walrus un serpente gigante del Mondo Sotterraneo sventra l’edificio. Il preside Kiba dice che bisogna chiamare i capi, ma [[ange|Ange]] chiede chi proteggerà i bambini nel frattempo. Lui esce di corsa con il martello e colpisce il serpente da solo, mentre [[jaguar-d-saul|Sauro]] corre su un ramo sopra la bestia e le dà il colpo di grazia. I bambini restano a bocca aperta: la voce che Kiba sia stato un guerriero è vera. Poco dopo si vedono i bambini camminare nel sonno verso la spiaggia, e Kiba fa suonare il corno per avvertire tutto il paese.',
          en: 'At the Walrus School a giant snake from the Underworld tears into the building. Principal Kiba says the chiefs must be called, but [[ange|Ange]] asks who will protect the children until then. He runs out with his hammer and hits the snake himself, and [[jaguar-d-saul|Saul]] runs along a branch above it to deal the final blow. The children are amazed that the rumour is true: Kiba was a warrior once. Soon after, the children are seen sleepwalking toward the beach, and Kiba has the horn blown to warn the whole country.',
        },
      },
    },
  ],
  'manmayer-gunko': [
    {
      episode: 1166,
      chapter: 1137,
      value: {
        title: { it: 'Unisciti ai Cavalieri', en: 'Join the Knights' },
        body: {
          it: 'Due intrusi raggiungono [[loki|Loki]] e gli chiedono di unirsi ai Cavalieri di Dio. Lui ride loro in faccia e risponde che è ancora no: non sprecherà l’unica vita che ha facendo la spazzatura. Gunko, che si dichiara una Cavaliera di Dio, vuole ucciderlo per l’insolenza, ma il suo compagno le dice di non precipitarsi. Loki le scaglia contro un lupo gigante, e lei lo uccide senza fatica. Aveva già messo fuori combattimento le due guardie del castello.',
          en: 'Two intruders reach [[loki|Loki]] and ask him to join the Knights of God. He laughs in their faces and tells them his answer is still no: he will not waste his one life as trash. Gunko, who says she is a Knight of God, wants to kill him for his insolence, but her companion tells her not to jump the gun. Loki sets a giant wolf on her, and she kills it with ease. She has already put the castle’s two guards out of action.',
        },
      },
    },
    {
      episode: 1170,
      chapter: 1140,
      value: {
        title: {
          it: 'Due cavalieri al posto di uno',
          en: 'Two knights instead of one',
        },
        body: {
          it: 'Nel Regno del Sole, con la Scuola Walrus sotto di loro, [[figarland-shamrock|Shamrock]] e Gunko guardano i bambini. Gunko apre un cerchio magico per chiamare un rinforzo, ma ne escono due altri Cavalieri di Dio. Nessuno dei due si aspettava di essere evocato. Dicono a Shamrock che lo vogliono di nuovo a Marijoa, dove da un po’ tutto va a rotoli. Shamrock dà ai tre i loro ordini: prendere i bambini dei giganti, portarli a Marijoa e trasformare tutto in un gioco.',
          en: 'In the Sun World, with the Walrus School below them, [[figarland-shamrock|Shamrock]] and Gunko look down at the children. Gunko opens a magic circle to call in a reinforcement, but two other Knights of God come through it. Neither expected to be summoned. They tell Shamrock that he is wanted back at Mary Geoise, where everything has been falling apart. Shamrock gives the three of them their orders: take the giants’ children, bring them to Mary Geoise, and make a game of it.',
        },
      },
    },
    {
      episode: 1176,
      chapter: 1146,
      value: {
        title: { it: 'Gunko prende Collon', en: 'Gunko takes Colon' },
        body: {
          it: 'Gunko compare a prua della nave di [[colon|Collon]] e si definisce una divinità, non un’umana. Dice a [[nami|Nami]], [[jinbe|Jinbe]], [[usopp|Usop]] e [[brook|Brook]] che i bambini andranno a Marijoa, ed è Brook a capire che è una Cavaliera di Dio. I Cappello di Paglia l’attaccano, ma lei rimanda indietro ogni colpo e li abbatte tutti. Quando Collon si fa avanti per combattere, gli avvolge una freccia intorno al collo e lo porta via.',
          en: 'Gunko appears on the bow of [[colon|Colon]]’s ship and calls herself a god, not a human. She tells [[nami|Nami]], [[jinbe|Jinbe]], [[usopp|Usopp]] and [[brook|Brook]] that the children are going to Mary Geoise, and Brook is the one who works out that she is a Knight of God. The Straw Hats attack, and she turns each attack back on them and knocks them all down. When Colon steps forward to fight, she wraps an arrow around his neck and carries him off.',
        },
      },
    },
    {
      episode: 1179,
      chapter: 1149,
      value: {
        title: { it: 'Imu prende il controllo', en: 'Imu takes control' },
        body: {
          it: 'Gunko sente [[colon|Collon]] gridare verso il padre e comincia a ricordare un episodio legato a Brook. Capisce che il Soul King è [[brook|Brook]] e si dirige dritta verso di lui. Prima che lo raggiunga, Imu parla ai tre cavalieri e chiede perché reclutare i giganti richieda così tanto tempo. Poi Imu prende il controllo del corpo di Gunko e dice che mostrerà a Erbaf il potere di un dio.',
          en: 'Gunko hears [[colon|Colon]] cry out for his father and begins to recall a memory of Brook. She works out that the Soul King is [[brook|Brook]] and heads straight for him. Before she reaches him, Imu speaks to all three knights and asks why recruiting the giants is taking so long. Then Imu takes control of Gunko’s body and says they will show Elbaph the power of a god.',
        },
      },
    },
  ],
  'shepherd-sommers': [
    {
      episode: 1170,
      chapter: 1143,
      value: {
        title: { it: 'Ancora in mutande', en: 'Still in his underwear' },
        body: {
          it: 'Un cerchio magico trascina Sommers su Erbaf mentre è ancora in mutande, e lui si lamenta della carenza di cibo a Marijoa. Mentre si veste chiede a [[figarland-shamrock|Shamrock]] se è venuto a visitare la tomba di [[harald|Harald]], e Shamrock gli spiega perché sono lì. Sommers obietta che i bambini dei giganti non entreranno in un sacco. Shamrock risponde che con le loro capacità i tre possono farne un gioco.',
          en: 'A magic circle drops Sommers on Elbaph while he is still in his underwear, complaining about the food shortage at Mary Geoise. While he gets dressed he asks [[figarland-shamrock|Shamrock]] whether he has come to visit [[harald|Harald]]’s grave, and Shamrock explains why they are there. Sommers objects that the giants’ children will not fit in a bag. Shamrock answers that with their abilities the three of them can make a game of it.',
        },
      },
    },
    {
      episode: 1177,
      chapter: 1147,
      value: {
        title: { it: 'Le richieste di Sommers', en: 'Sommers’s demands' },
        body: {
          it: 'Sommers parla a tutta Erbaf attraverso la sua rete di lumacofoni. Dice di essere uno dei Cavalieri di Dio di Marijoa, che dietro quello che sta succedendo ci sono loro, e che tengono in ostaggio dieci bambini dei giganti, mentre [[jaguar-d-saul|Sauro]] è ferito gravemente per aver tentato di fermarli. [[ange|Ange]] deve leggere i nomi dei bambini perché i genitori li sappiano. Poi Sommers si rivolge a [[jarul|Jarl]], che guida i giganti ora che non hanno un re, e gli ordina di distruggere la scuola e la biblioteca. Ange risponde che sono entrambe sacre, e Sommers le dice di calmarsi.',
          en: 'Sommers speaks to all of Elbaph over its own Den Den Mushi system. He says he is one of the Knights of God from Mary Geoise, that the knights are behind what is happening, and that they hold ten of the giants’ children, while [[jaguar-d-saul|Saul]] is badly hurt for trying to stop them. [[ange|Ange]] is made to read out the children’s names so their parents know. Sommers then turns to [[jarul|Jarul]], who leads the giants now that they have no king, and orders him to destroy the school and the library. Ange answers that both are sacred, and Sommers tells her to calm down.',
        },
      },
    },
  ],
} satisfies Record<string, Timeline<Story>>
