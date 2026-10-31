import type { Relationship, Timeline } from '~/data/types'

/**
 * Facts and threshold revisions: docs/content-provenance/hunter-x-hunter-relationships.json.
 * Every entry pins an episode and the chapter it adapts, and its wording is
 * what both pages show; where the media differ (Gido's steel or prosthetic
 * leg, the length of Wing's ban, who stands by at Zushi's capture, whose
 * match the ticket seller sells) the cards keep to what they share.
 */
const links = {
  // Zushi
  zushiWing: {
    character: 'wing',
    type: { en: 'Teacher', it: 'Maestro' },
    summary: {
      en: 'Wing teaches Zushi Shingen-ryu kung fu. After the match with Killua, Zushi apologizes for using Ren, which he was told not to use yet, and Wing tells him he has to get used to losing many times.',
      it: 'Wing insegna a Zooci il kung fu Shingen-ryu. Dopo l’incontro con Killua, Zooci si scusa per aver usato il Ren, che non doveva ancora usare, e Wing gli dice che deve abituarsi a perdere molte volte.',
    },
  },
  zushiKillua: {
    character: 'killua',
    type: { en: 'Opponent who beats him', it: 'Avversario che lo batte' },
    summary: {
      en: 'On the 57th floor Killua strikes Zushi on the back of the neck twice, and twice Zushi gets back up. Killua wins, but cannot knock him out.',
      it: 'Al 57º piano Killua colpisce Zooci due volte alla nuca, e due volte Zooci si rialza. Killua vince, ma non riesce a metterlo KO.',
    },
  },
  zushiGon: {
    character: 'gon-freecss',
    type: {
      en: 'Boy he meets at the arena',
      it: 'Ragazzo conosciuto all’arena',
    },
    summary: {
      en: 'Zushi rides up to the 50th floor with Gon and Killua, introduces himself and tells them he studies Shingen-ryu kung fu.',
      it: 'Zooci sale al 50º piano con Gon e Killua, si presenta e racconta che studia il kung fu Shingen-ryu.',
    },
  },
  zushiGonPupil: {
    character: 'gon-freecss',
    type: { en: 'Fellow pupil', it: 'Compagno di allenamento' },
    summary: {
      en: 'Two months after Gon’s match with Gido, Gon and Killua start training with Zushi under Wing.',
      it: 'Due mesi dopo l’incontro di Gon con Ghido, Gon e Killua cominciano ad allenarsi con Zooci sotto la guida di Wing.',
    },
  },
  zushiKilluaPupil: {
    character: 'killua',
    type: {
      en: 'Fellow pupil who gets him back',
      it: 'Compagno che lo riporta indietro',
    },
    summary: {
      en: 'Killua trains with Zushi under Wing and, when Sadaso seizes Zushi, steps in and promises to let them all win in exchange for the boy.',
      it: 'Killua si allena con Zooci sotto la guida di Wing e, quando Sadaso afferra Zooci, interviene e promette di lasciarli vincere tutti in cambio del ragazzo.',
    },
  },
  zushiSadaso: {
    character: 'sadaso',
    type: {
      en: 'Fighter who takes him hostage',
      it: 'Lottatore che lo prende in ostaggio',
    },
    summary: {
      en: 'On Zushi’s way back after practice, Sadaso seizes him with an arm made of aura, to force Gon and Killua into matches.',
      it: 'Mentre Zooci torna indietro dopo l’allenamento, Sadaso lo afferra con un braccio fatto di aura, per costringere Gon e Killua a combattere.',
    },
  },
  // Wing
  wingZushi: {
    character: 'zushi',
    type: { en: 'Pupil', it: 'Allievo' },
    summary: {
      en: 'Wing teaches Zushi Shingen-ryu kung fu and, when Zushi takes a new stance against Killua, shouts his name from the stands so loudly that the people around him cover their ears.',
      it: 'Wing insegna a Zooci il kung fu Shingen-ryu e, quando Zooci assume una nuova posizione contro Killua, grida il suo nome dagli spalti così forte che chi gli sta intorno si tappa le orecchie.',
    },
  },
  wingGon: {
    character: 'gon-freecss',
    type: { en: 'Boy he meets with Zushi', it: 'Ragazzo conosciuto con Zooci' },
    summary: {
      en: 'Wing meets Gon and Killua with Zushi on the 50th floor and tells them that, skilled as they are, they must be careful from now on.',
      it: 'Wing incontra Gon e Killua insieme a Zooci al 50º piano e dice loro che, bravi come sono, da ora in poi devono stare attenti.',
    },
  },
  wingKillua: {
    character: 'killua',
    type: {
      en: 'Boy who fights his pupil',
      it: 'Ragazzo che affronta il suo allievo',
    },
    summary: {
      en: 'Wing meets Killua with Zushi on the 50th floor, then watches him beat his pupil on the 57th.',
      it: 'Wing conosce Killua insieme a Zooci al 50º piano, poi lo guarda battere il suo allievo al 57º.',
    },
  },
  wingGonNen: {
    character: 'gon-freecss',
    type: { en: 'Boy he teaches Nen', it: 'Ragazzo a cui insegna il Nen' },
    summary: {
      en: 'When Hisoka’s Nen stops Gon and Killua on the 200th floor, Wing forces open the points their aura flows from, so they learn Ten before midnight and walk through Hisoka’s barrier.',
      it: 'Quando il Nen di Hisoka blocca Gon e Killua al 200º piano, Wing apre a forza i punti da cui esce la loro aura, così imparano il Ten prima di mezzanotte e attraversano la barriera di Hisoka.',
    },
  },
  wingKilluaNen: {
    character: 'killua',
    type: { en: 'Boy he teaches Nen', it: 'Ragazzo a cui insegna il Nen' },
    summary: {
      en: 'Killua sees through Wing’s first, false lesson. When Hisoka’s Nen stops him and Gon on the 200th floor, Wing forces open the points their aura flows from, and they learn Ten before midnight.',
      it: 'Killua non crede alla prima lezione, falsa, di Wing. Quando il Nen di Hisoka blocca lui e Gon al 200º piano, Wing apre a forza i punti da cui esce la loro aura, e i due imparano il Ten prima di mezzanotte.',
    },
  },
  // Neutral on the ban: two months in chapter 51, until he heals in episode
  // 30; the slap is the manga's alone.
  wingGonPromise: {
    character: 'gon-freecss',
    type: {
      en: 'Pupil he holds to a promise',
      it: 'Allievo che vincola a una promessa',
    },
    summary: {
      en: 'Gon fights Gido against Wing’s advice and comes out of it with a broken arm. Wing makes him promise to stay away from Nen for a while and ties a thread around his finger as a reminder.',
      it: 'Gon affronta Ghido contro il consiglio di Wing e ne esce con un braccio rotto. Wing gli fa promettere di stare lontano dal Nen per un po’ e gli lega un filo al dito perché se ne ricordi.',
    },
  },
  wingKilluaTalk: {
    character: 'killua',
    type: { en: 'Boy who speaks for Gon', it: 'Ragazzo che parla per Gon' },
    summary: {
      en: 'After Gon’s match with Gido, Killua tells Wing that Gon was enjoying the fight, and that if Wing stopped teaching them they would find another teacher or learn on their own.',
      it: 'Dopo l’incontro di Gon con Ghido, Killua dice a Wing che Gon si stava divertendo, e che se Wing smettesse di insegnare loro troverebbero un altro maestro o imparerebbero da soli.',
    },
  },
  wingGonPassed: {
    character: 'gon-freecss',
    type: {
      en: 'Pupil who passes the secret exam',
      it: 'Allievo che supera l’esame segreto',
    },
    summary: {
      en: 'Wing teaches Gon Water Divination, which shows that he is an Enhancer, and after weeks of training tells him that he has passed the secret Hunter Exam.',
      it: 'Wing insegna a Gon il Test dell’Acqua, che lo rivela del Potenziamento, e dopo settimane di allenamento gli dice che ha superato l’esame segreto da Hunter.',
    },
  },
  wingKilluaExam: {
    character: 'killua',
    type: {
      en: 'Pupil he urges to retake the exam',
      it: 'Allievo che spinge a ripresentarsi all’esame',
    },
    summary: {
      en: 'Water Divination shows that Killua is a Transmuter, and Wing tells him that he is more than ready to take the Hunter Exam again.',
      it: 'Il Test dell’Acqua rivela che Killua appartiene alla Trasformazione, e Wing gli dice che è più che pronto per ripresentarsi all’Esame Hunter.',
    },
  },
  wingNetero: {
    character: 'netero',
    type: { en: 'Head of his school', it: 'Capo della sua scuola' },
    summary: {
      en: 'Wing tells his pupils that Netero is the head of Shingen-ryu, his school.',
      it: 'Wing racconta ai suoi allievi che Netero è a capo dello Shingen-ryu, la sua scuola.',
    },
  },
  // Gido
  gidoGon: {
    character: 'gon-freecss',
    type: {
      en: 'Newcomer he asks for a match',
      it: 'Nuovo arrivato a cui chiede un incontro',
    },
    summary: {
      en: 'Gido and two other fighters come to Gon, just arrived on the 200th floor, to ask for a match. In Gon’s first match on that floor, one of Gido’s tops strikes him in the back.',
      it: 'Ghido e altri due lottatori si presentano a Gon, appena arrivato al 200º piano, per chiedere un incontro. Nel primo incontro di Gon a quel piano, una trottola di Ghido lo colpisce alla schiena.',
    },
  },
  gidoGonWin: {
    character: 'gon-freecss',
    type: { en: 'Opponent he beats', it: 'Avversario che sconfigge' },
    summary: {
      en: 'Gido’s tops keep hitting Gon in Gon’s first match on the 200th floor, and Gido wins. Gon comes out of it with a broken arm.',
      it: 'Le trottole di Ghido continuano a colpire Gon nel suo primo incontro al 200º piano, e Ghido vince. Gon ne esce con un braccio rotto.',
    },
  },
  gidoGonThreat: {
    character: 'gon-freecss',
    type: {
      en: 'Boy he threatens with Zushi',
      it: 'Ragazzo che minaccia usando Zooci',
    },
    summary: {
      en: 'Gido beats Gon in Gon’s first match on the 200th floor, and Gon comes out of it with a broken arm. Two months later Gido phones him and threatens him with Zushi.',
      it: 'Ghido batte Gon nel suo primo incontro al 200º piano, e Gon ne esce con un braccio rotto. Due mesi dopo Ghido gli telefona e lo minaccia usando Zooci.',
    },
  },
  // Gon's warning about Zushi after the rematch is the manga's alone.
  gidoGonRematch: {
    character: 'gon-freecss',
    type: { en: 'Opponent who beats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Gido beats Gon in their first match and later threatens him with Zushi. In the rematch Gon blocks his tops and breaks his artificial leg with one blow.',
      it: 'Ghido batte Gon nel loro primo incontro e poi lo minaccia usando Zooci. Nella rivincita Gon respinge le sue trottole e gli spezza la gamba artificiale con un solo colpo.',
    },
  },
  gidoSadaso: {
    character: 'sadaso',
    type: { en: 'Partner', it: 'Compagno' },
    summary: {
      en: 'With Sadaso and a third fighter, Gido goes after fighters new to the 200th floor for easy wins.',
      it: 'Con Sadaso e un terzo lottatore, Ghido cerca vittorie facili contro chi è appena arrivato al 200º piano.',
    },
  },
  gidoSadasoLeaves: {
    character: 'sadaso',
    type: { en: 'Partner who leaves', it: 'Compagno che se ne va' },
    summary: {
      en: 'Gido goes after newcomers for easy wins with Sadaso, until Sadaso warns his companions by phone that the boys are dangerous and leaves Heavens Arena.',
      it: 'Ghido cerca vittorie facili contro i nuovi arrivati insieme a Sadaso, finché Sadaso non avverte per telefono i compagni che i ragazzi sono pericolosi e lascia l’Arena Celeste.',
    },
  },
  gidoZushi: {
    character: 'zushi',
    type: {
      en: 'Boy he uses as a threat',
      it: 'Ragazzo che usa come minaccia',
    },
    summary: {
      en: 'After Sadaso seizes Zushi, Gido uses the boy to threaten Gon into a match.',
      it: 'Dopo che Sadaso ha afferrato Zooci, Ghido usa il ragazzo per costringere Gon a un incontro.',
    },
  },
  gidoKillua: {
    character: 'killua',
    type: { en: 'Boy who warns him', it: 'Ragazzo che lo avverte' },
    summary: {
      en: 'After Sadaso leaves, Killua appears in the room and warns Gido and Riehlvelt to play by the rules.',
      it: 'Dopo che Sadaso se n’è andato, Killua compare nella stanza e avverte Ghido e Liroubert di rispettare le regole.',
    },
  },
  gidoRiehlvelt: {
    character: 'riehlvelt',
    type: { en: 'Partner', it: 'Compagno' },
    summary: {
      en: 'With Riehlvelt and Sadaso, Gido goes after fighters new to the 200th floor for easy wins.',
      it: 'Con Liroubert e Sadaso, Ghido cerca vittorie facili contro chi è appena arrivato al 200º piano.',
    },
  },
  // Sadaso
  sadasoZushi: {
    character: 'zushi',
    type: { en: 'Boy he takes hostage', it: 'Ragazzo che prende in ostaggio' },
    summary: {
      en: 'Sadaso seizes Zushi in a giant hand made of his aura, to force Gon and Killua into matches.',
      it: 'Sadaso afferra Zooci con una mano gigante fatta della sua aura, per costringere Gon e Killua a combattere.',
    },
  },
  sadasoKillua: {
    character: 'killua',
    type: { en: 'Boy who threatens him', it: 'Ragazzo che lo minaccia' },
    summary: {
      en: 'Killua promises Sadaso a win by default in exchange for Zushi. When the group breaks the deal, Killua gets to Sadaso unseen before their match and threatens to kill him if he ever shows his face again.',
      it: 'Killua promette a Sadaso una vittoria a tavolino in cambio di Zooci. Quando il gruppo rompe il patto, Killua raggiunge Sadaso di nascosto prima del loro incontro e lo minaccia di morte se si farà vedere ancora.',
    },
  },
  sadasoKilluaLeave: {
    character: 'killua',
    type: { en: 'Boy who drives him out', it: 'Ragazzo che lo caccia' },
    summary: {
      en: 'Killua threatens to kill Sadaso if he ever shows his face again. Sadaso does not fight, warns his companions by phone that the boys are dangerous and leaves Heavens Arena.',
      it: 'Killua minaccia Sadaso di morte se si farà vedere ancora. Sadaso non si presenta all’incontro, avverte per telefono i compagni che i ragazzi sono pericolosi e lascia l’Arena Celeste.',
    },
  },
  sadasoGido: {
    character: 'gido',
    type: { en: 'Partner', it: 'Compagno' },
    summary: {
      en: 'With Gido and a third fighter, Sadaso goes after fighters new to the 200th floor for easy wins.',
      it: 'Con Ghido e un terzo lottatore, Sadaso cerca vittorie facili contro chi è appena arrivato al 200º piano.',
    },
  },
  sadasoGon: {
    character: 'gon-freecss',
    type: {
      en: 'Boy he presses for a match',
      it: 'Ragazzo a cui impone un incontro',
    },
    summary: {
      en: 'Two months after Gon’s match with Gido, Sadaso’s group stops Gon again and presses him for a match, then uses Zushi to force one.',
      it: 'Due mesi dopo l’incontro di Gon con Ghido, il gruppo di Sadaso ferma di nuovo Gon e insiste per combattere, poi usa Zooci per costringerlo.',
    },
  },
  sadasoGonDefault: {
    character: 'gon-freecss',
    type: { en: 'Boy who wins by default', it: 'Ragazzo che vince a tavolino' },
    summary: {
      en: 'Sadaso’s group uses Zushi to force a match with Gon, and Gon wins it by default once Sadaso has left.',
      it: 'Il gruppo di Sadaso usa Zooci per imporre un incontro a Gon, e Gon lo vince a tavolino dopo che Sadaso se n’è andato.',
    },
  },
  // Riehlvelt
  riehlveltKillua: {
    character: 'killua',
    type: { en: 'Opponent who beats him', it: 'Avversario che lo sconfigge' },
    summary: {
      en: 'Killua warns Riehlvelt and Gido to play by the rules. In their match he catches both of Riehlvelt’s whips despite the electricity, throws him into the air and catches him with the whips still in his hands.',
      it: 'Killua avverte Liroubert e Ghido di rispettare le regole. Nel loro incontro afferra entrambe le fruste di Liroubert nonostante la scarica elettrica, lo scaraventa in aria e lo prende con le fruste ancora in mano.',
    },
  },
  riehlveltGon: {
    character: 'gon-freecss',
    type: {
      en: 'Opponent who makes him faint',
      it: 'Avversario che lo fa svenire',
    },
    summary: {
      en: 'Gon hurls a flagstone at Riehlvelt, takes his whips and wraps them around his neck, and Riehlvelt faints from fear.',
      it: 'Gon scaglia una lastra del pavimento contro Liroubert, gli toglie le fruste e gliele stringe al collo, e Liroubert sviene per la paura.',
    },
  },
  riehlveltSadaso: {
    character: 'sadaso',
    type: { en: 'Partner who leaves', it: 'Compagno che se ne va' },
    summary: {
      en: 'Sadaso phones to warn Riehlvelt that the boys are dangerous and leaves the arena, but Riehlvelt still means to become a Floor Master.',
      it: 'Sadaso telefona per avvertire Liroubert che i ragazzi sono pericolosi e lascia l’arena, ma Liroubert vuole comunque diventare Maestro di piano.',
    },
  },
  riehlveltGido: {
    character: 'gido',
    type: { en: 'Partner', it: 'Compagno' },
    summary: {
      en: 'With Gido and Sadaso, Riehlvelt goes after fighters new to the 200th floor for easy wins.',
      it: 'Con Ghido e Sadaso, Liroubert cerca vittorie facili contro chi è appena arrivato al 200º piano.',
    },
  },
  // Kastro
  kastroHisoka: {
    character: 'hisoka',
    type: { en: 'Rival he challenges again', it: 'Rivale che sfida di nuovo' },
    summary: {
      en: 'Two years ago Kastro lost a match to Hisoka, yet scored more points against him than anyone else. He thanks Hisoka for making him stronger and opens the rematch with a hit.',
      it: 'Due anni fa Kastro ha perso un incontro contro Hisoka, ma gli ha tolto più punti di chiunque altro. Lo ringrazia per averlo reso più forte e apre la rivincita con un colpo a segno.',
    },
  },
  kastroHisokaDeath: {
    character: 'hisoka',
    type: { en: 'Rival who kills him', it: 'Rivale che lo uccide' },
    summary: {
      en: 'In the rematch Kastro and his Double cut off both of Hisoka’s arms, but Hisoka picks out the real Kastro and kills him with his cards.',
      it: 'Nella rivincita Kastro e il suo Doppelgänger staccano a Hisoka entrambe le braccia, ma Hisoka riconosce il vero Kastro e lo uccide con le sue carte.',
    },
  },
  kastroKillua: {
    character: 'killua',
    type: {
      en: 'Boy he catches creeping up',
      it: 'Ragazzo che sorprende di nascosto',
    },
    summary: {
      en: 'Killua creeps up to Kastro’s room using Zetsu, but Kastro is suddenly behind him. He praises Killua’s Zetsu but says he started it too late.',
      it: 'Killua si avvicina alla stanza di Kastro usando lo Zetsu, ma all’improvviso Kastro è alle sue spalle. Gli fa i complimenti per lo Zetsu, ma gli dice che l’ha usato troppo tardi.',
    },
  },
} satisfies Record<string, Relationship>

export const heavensArenaRelationships = {
  zushi: [
    {
      episode: 27,
      chapter: 45,
      value: [links.zushiWing, links.zushiKillua, links.zushiGon],
    },
    // The joint training is chapter 56, the capture chapter 57; episode 33
    // adapts both.
    {
      episode: 33,
      chapter: 57,
      value: [
        links.zushiWing,
        links.zushiGonPupil,
        links.zushiKilluaPupil,
        links.zushiSadaso,
      ],
    },
  ],
  wing: [
    {
      episode: 27,
      chapter: 45,
      value: [links.wingZushi, links.wingGon, links.wingKillua],
    },
    // Hisoka's barrier is chapter 47 and episode 28; the nodes are opened in
    // chapter 48, which episode 29 adapts.
    {
      episode: 29,
      chapter: 48,
      value: [links.wingZushi, links.wingGonNen, links.wingKilluaNen],
    },
    {
      episode: 30,
      chapter: 51,
      value: [links.wingZushi, links.wingGonPromise, links.wingKilluaTalk],
    },
    {
      episode: 35,
      chapter: 60,
      value: [
        links.wingZushi,
        links.wingGonPassed,
        links.wingKilluaExam,
        links.wingNetero,
      ],
    },
  ],
  gido: [
    { episode: 29, chapter: 49, value: [links.gidoGon] },
    { episode: 30, chapter: 51, value: [links.gidoGonWin] },
    {
      episode: 33,
      chapter: 57,
      value: [links.gidoGonThreat, links.gidoSadaso, links.gidoZushi],
    },
    // The rematch and Killua's warning are chapter 58; Riehlvelt is named in
    // chapter 59, and episode 34 adapts both.
    {
      episode: 34,
      chapter: 59,
      value: [
        links.gidoGonRematch,
        links.gidoKillua,
        links.gidoRiehlvelt,
        links.gidoSadasoLeaves,
        links.gidoZushi,
      ],
    },
  ],
  sadaso: [
    {
      episode: 33,
      chapter: 57,
      value: [
        links.sadasoZushi,
        links.sadasoKillua,
        links.sadasoGido,
        links.sadasoGon,
      ],
    },
    // His call and Gon's default win are chapter 58 and episode 34.
    {
      episode: 34,
      chapter: 58,
      value: [
        links.sadasoKilluaLeave,
        links.sadasoZushi,
        links.sadasoGido,
        links.sadasoGonDefault,
      ],
    },
  ],
  riehlvelt: [
    {
      episode: 34,
      chapter: 59,
      value: [
        links.riehlveltKillua,
        links.riehlveltGon,
        links.riehlveltSadaso,
        links.riehlveltGido,
      ],
    },
  ],
  kastro: [
    {
      episode: 31,
      chapter: 52,
      value: [links.kastroHisoka, links.kastroKillua],
    },
    // The match ends with his death in chapter 54 and episode 32.
    {
      episode: 32,
      chapter: 54,
      value: [links.kastroHisokaDeath, links.kastroKillua],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
