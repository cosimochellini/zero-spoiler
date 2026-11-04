import type { Relationship } from '~/data/types'

import type { HunterSaga } from './saga'

/** A Royal Guard's side, before and after the King is born. */
const QUEENS_GUARD = { it: 'Guardia della regina', en: 'Queen’s guard' }
const KINGS_GUARD = { it: 'Guardia del re', en: 'King’s guard' }
const ROYAL_GUARD = { it: 'Guardia reale', en: 'Royal Guard' }
const SQUADRON_LEADER = { it: 'Comandante di divisione', en: 'Squadron Leader' }
const SERVING_THE_QUEEN = {
  it: 'Formichimere, al servizio della regina',
  en: 'Chimera Ants, serving the Queen',
}

/**
 * The rows each record's relationships repeat as the story adds to them.
 * Every row holds in both media at its entry, except those naming Peggy,
 * whom the anime never names, and Kurt, whom the manga only narrates.
 */
const links = {
  poufPitou: {
    character: 'neferpitou',
    type: { it: 'Altra guardia reale', en: 'Fellow Royal Guard' },
    summary: {
      it: 'Shawapf compare accanto a Neferpito in cima al formicaio e risponde a ciò che Neferpito sta pensando prima che lo dica. Poi si presenta come guardia reale.',
      en: 'Shaiapouf appears beside Neferpitou at the top of the nest and answers what Neferpitou is thinking before it is said. Then he introduces himself as a fellow Royal Guard.',
    },
  },
  poufYoupi: {
    character: 'menthuthuyoupi',
    type: { it: 'Altra guardia reale', en: 'Fellow Royal Guard' },
    summary: {
      it: 'Shawapf annuncia che Montowtoyupih si sveglierà presto. Quando l’ultima guardia esce dal bozzolo, Shawapf la accoglie con Neferpito suonando il violino.',
      en: 'Shaiapouf says that Menthuthuyoupi will soon awaken. When the last Guard comes out of his cocoon, Shaiapouf greets him with Neferpitou, playing his violin.',
    },
  },
  poufKing: {
    character: 'meruem',
    type: { it: 'Re che serve', en: 'King he serves' },
    summary: {
      it: 'Appena nato il re, Shawapf va da lui con le altre due guardie e lo porta al pasto che hanno preparato in cima al formicaio. Poi lascia il formicaio con lui.',
      en: 'When the King is born, Shaiapouf comes to him with the other two Guards and takes him to the meal they have laid out at the top of the nest. Then he leaves the nest with him.',
    },
  },
  youpiPitou: {
    character: 'neferpitou',
    type: { it: 'Altra guardia reale', en: 'Fellow Royal Guard' },
    summary: {
      it: 'Quando Montowtoyupih esce dal bozzolo, ultima delle tre guardie, Neferpito è lì ad accoglierlo.',
      en: 'When Menthuthuyoupi comes out of his cocoon, the last of the three Guards, Neferpitou is there to greet him.',
    },
  },
  youpiPouf: {
    character: 'shaiapouf',
    type: { it: 'Altra guardia reale', en: 'Fellow Royal Guard' },
    summary: {
      it: 'Quando Montowtoyupih esce dal bozzolo, Shawapf lo accoglie insieme a Neferpito suonando il violino.',
      en: 'When Menthuthuyoupi comes out of his cocoon, Shaiapouf greets him with Neferpitou, playing his violin.',
    },
  },
  youpiKing: {
    character: 'meruem',
    type: { it: 'Re che serve', en: 'King he serves' },
    summary: {
      it: 'Appena nato il re, Montowtoyupih va da lui con le altre due guardie. Per seguirlo lungo la parete esterna del formicaio si fa crescere le ali, perde l’equilibrio e finisce contro il muro: deve esercitarsi.',
      en: 'When the King is born, Menthuthuyoupi comes to him with the other two Guards. To follow him up the outside of the nest he grows wings, loses his balance and crashes into the wall: he needs practice.',
    },
  },
  kingPitou: {
    character: 'neferpitou',
    type: ROYAL_GUARD,
    summary: {
      it: 'Neferpito gli fa servire il primo pasto in cima al formicaio e lo accompagna a caccia. Quando Neferpito comincia a spiegargli come riconoscere gli umani rari, il re colpisce Neferpito con la coda: lo sa già.',
      en: 'Neferpitou has his first meal served at the top of the nest and goes hunting with him. When Neferpitou starts explaining how to tell rare humans apart, the King strikes them with his tail: he already knows.',
    },
  },
  kingPouf: {
    character: 'shaiapouf',
    type: ROYAL_GUARD,
    summary: {
      it: 'Shawapf va da lui con le altre due guardie appena è nato e lo segue in cima al formicaio, poi fuori dal formicaio.',
      en: 'Shaiapouf comes to him with the other two Guards as soon as he is born and follows him to the top of the nest, then away from it.',
    },
  },
  kingYoupi: {
    character: 'menthuthuyoupi',
    type: ROYAL_GUARD,
    summary: {
      it: 'Montowtoyupih va da lui con le altre due guardie appena è nato. Provando a seguirlo in volo lungo la parete del formicaio, finisce contro il muro.',
      en: 'Menthuthuyoupi comes to him with the other two Guards as soon as he is born. Trying to fly after him up the wall of the nest, he crashes into it.',
    },
  },
  coltPeggy: {
    character: 'peggy',
    type: { it: 'Altro comandante di divisione', en: 'Fellow Squadron Leader' },
    summary: {
      it: 'Coluto e Pegyi esaminano insieme i soldati uccisi e, mentre le squadre smettono di tornare, contano quante ne restano. Quando il re appena nato uccide Pegyi, corso dalla regina invece di obbedirgli, Coluto guarda terrorizzato.',
      en: 'Colt and Peggy examine the dead soldiers together and, as squads stop coming back, count how many are left. When the newborn King kills Peggy for running to the Queen instead of obeying, Colt looks on in terror.',
    },
  },
  coltMorel: {
    character: 'morel-mackernasey',
    type: { it: 'Hunter da cui va', en: 'Hunter he goes to' },
    summary: {
      it: 'Coluto vola da Morau e Nobu con una bandiera bianca e li supplica di salvare la regina. Morau gli chiede come si chiama e accetta di portarlo dal loro capo, senza promettergli che il capo lo risparmierà.',
      en: 'Colt flies to Morel and Knov under a white flag and begs them to save the Queen. Morel asks his name and agrees to take him to their leader, without promising that the leader will spare him.',
    },
  },
  coltMorelOath: {
    character: 'morel-mackernasey',
    type: {
      it: 'Hunter che giura di proteggerlo',
      en: 'Hunter who swears to protect him',
    },
    summary: {
      it: 'Morta la regina, Coluto tira fuori dal suo ventre un neonato minuscolo e giura di proteggerlo. Morau gli punta la pipa alla testa e gli fa giurare che né lui né il neonato mangeranno mai un umano; in cambio li proteggerà finché vive.',
      en: 'After the Queen dies, Colt takes a tiny baby out of her womb and swears to protect it. Morel holds his pipe to Colt’s head and makes him swear that neither he nor the baby will ever eat a human; in return he will protect them both for as long as he lives.',
    },
  },
  coltKurt: {
    character: 'kurt',
    type: { it: 'La sua vita da umano', en: 'His human life' },
    summary: {
      it: 'Una formichimera spiega che Coluto ricorda ancora la sua vita da umano. Con il neonato in mano, Coluto ripensa a sua madre e a sua sorella.',
      en: 'An ant explains that Colt still remembers his human life. Holding the baby, Colt thinks back to his mother and sister.',
    },
  },
  kingKomugi: {
    character: 'komugi',
    type: { it: 'Avversaria', en: 'Opponent' },
    summary: {
      it: 'La campionessa cieca di gungi contro cui gioca una partita dopo l’altra senza riuscire a batterla.',
      en: 'The blind gungi champion he plays game after game and cannot beat.',
    },
  },
  peggyCheetu: {
    character: 'cheetu',
    type: { it: 'Altro comandante di divisione', en: 'Fellow Squadron Leader' },
    summary: {
      it: 'Quando Jeedo ammette di lasciare che i suoi soldati facciano ciò che vogliono degli umani catturati, Pegyi fa notare che così si spreca il cibo destinato alla regina.',
      en: 'When Cheetu admits he lets his soldiers do as they please with the humans they catch, Peggy points out that this wastes food meant for the Queen.',
    },
  },
  peggyColt: {
    character: 'colt',
    type: { it: 'Altro comandante di divisione', en: 'Fellow Squadron Leader' },
    summary: {
      it: 'Pegyi esamina con Coluto i soldati uccisi e lo avverte che gli umani imparano in fretta e verranno per la regina. Mentre le squadre smettono di tornare, i due contano quanti comandanti restano.',
      en: 'Peggy examines the dead soldiers with Colt and warns him that humans learn fast and will come for the Queen. As squads stop coming back, the two count how many Squadron Leaders are left.',
    },
  },
  cheetuMorel: {
    character: 'morel-mackernasey',
    type: {
      it: 'Hunter che gli tende un agguato',
      en: 'Hunter who ambushes him',
    },
    summary: {
      it: 'Su una strada deserta Morau cerca di colpire Jeedo con la sua pipa. Jeedo schiva il colpo e tempesta di pugni lui e Nackul.',
      en: 'On a deserted road Morel swings his pipe at Cheetu. Cheetu dodges it and rains blows on him and Knuckle.',
    },
  },
  cheetuMorelSmoke: {
    character: 'morel-mackernasey',
    type: {
      it: 'Hunter che gli tende un agguato',
      en: 'Hunter who ambushes him',
    },
    summary: {
      it: 'Morau riempie la strada di fumo. Quando Jeedo corre dietro a Nackul, Morau gli fa lo sgambetto e sparisce con lui; Jeedo resta solo.',
      en: 'Morel fills the road with smoke. When Cheetu goes after Knuckle, Morel trips him and vanishes with Knuckle, leaving Cheetu alone.',
    },
  },
  cheetuKnuckle: {
    character: 'knuckle-bine',
    type: {
      it: 'Hunter che gli tende un agguato',
      en: 'Hunter who ambushes him',
    },
    summary: {
      it: 'Nackul aspetta Jeedo su una strada deserta e sferra il primo pugno, che Jeedo schiva. Insieme a Morau, incassa un colpo dopo l’altro.',
      en: 'Knuckle waits for Cheetu on a deserted road and throws the first punch, which Cheetu dodges. With Morel, he takes blow after blow.',
    },
  },
  cheetuKnuckleCurse: {
    character: 'knuckle-bine',
    type: {
      it: 'Hunter che gli lascia addosso il suo Nen',
      en: 'Hunter who leaves his Nen on him',
    },
    summary: {
      it: 'Nel fumo di Morau, tra copie di se stesso, Nackul mette a segno un pugno. Accanto a Jeedo compare la creatura della sua abilità, che conta gli interessi, e Jeedo non riesce a seminarla correndo.',
      en: 'In Morel’s smoke, among copies of himself, Knuckle lands one punch. The creature of his ability appears at Cheetu’s side, counting interest, and Cheetu cannot outrun it.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * The King, the Royal Guards and the Squadron Leaders closest to the Queen,
 * Chimera Ant phase 2 (#1021). Spread into the Chimera Ant saga in
 * `./chimera-ant`. Every gate is the first chapter and episode whose
 * English-wiki synopsis names the record explicitly (owner ruling, #1021).
 *
 * Peggy is the manga's alone: the anime only ever speaks to him or about
 * him in narration, and kills him in episode 91 before anyone names him.
 * Menthuthuyoupi opens on Shaiapouf's mention, still in his cocoon, and
 * hatches in chapter 206 / episode 88. Colt's past as a human boy opens with
 * the scene that shows it, chapter 215 / episode 92, and never names him.
 */
const KING_KOMUGI_GUEST: Relationship = {
  ...links.kingKomugi,
  summary: {
    it: 'La campionessa cieca di gungi che non riesce a battere. Va per ucciderla, invece la salva da un’aquila e la chiama ospite importante.',
    en: 'The blind gungi champion he cannot beat. He sets out to kill her, saves her from an eagle instead and calls her an important guest.',
  },
}

export const CHIMERA_ANT_ROYALS: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  dossiers: {
    cheetu: {
      relationships: [
        {
          episode: 94,
          chapter: 220,
          value: [links.cheetuMorel, links.cheetuKnuckle],
        },
        {
          episode: 95,
          chapter: 221,
          value: [links.cheetuMorelSmoke, links.cheetuKnuckleCurse],
        },
      ],
      role: [
        { episode: 79, chapter: 192, value: SQUADRON_LEADER },
        // He leaves the nest and kills the guards of the border stop,
        // chapter 216 and episode 92.
        {
          episode: 92,
          chapter: 216,
          value: {
            it: 'Ex comandante di divisione',
            en: 'Former Squadron Leader',
          },
        },
        // He kills seven people in a city, dodges the police's bullets and
        // escapes, chapter 218 and episode 93.
        {
          episode: 93,
          chapter: 218,
          value: { it: 'Assassino in fuga', en: 'Killer on the run' },
        },
        // He agrees to swear loyalty to the King for a new ability,
        // chapter 235 and episode 100.
        {
          episode: 100,
          chapter: 235,
          value: {
            it: 'Ex comandante di divisione, al servizio del re',
            en: 'Former Squadron Leader, in the King’s service',
          },
        },
      ],
      log: {
        it: 'Guida una delle squadre che cacciano umani per la regina, e la caccia gli piace per se stessa. Quando gli ricordano che sono al servizio della regina, risponde che la sua squadra fa la sua parte.',
        en: 'He leads one of the squads that hunt humans for the Queen, and he enjoys the hunt for its own sake. When he is reminded that they serve the Queen, he answers that his squad does its share.',
      },
      status: [
        { episode: 79, chapter: 192, value: 'alive' },
        { episode: 117, chapter: 278, value: 'deceased' },
      ],
      affiliation: [
        { episode: 79, chapter: 192, value: SERVING_THE_QUEEN },
        {
          episode: 92,
          chapter: 216,
          value: {
            it: 'Nessuna: ha lasciato il formicaio',
            en: 'None: he has left the nest',
          },
        },
        {
          episode: 100,
          chapter: 235,
          value: {
            it: 'Formichimere, al servizio del re',
            en: 'Chimera Ants, in the King’s service',
          },
        },
      ],
    },
    peggy: {
      relationships: [
        { episode: 79, chapter: 192, value: [links.peggyCheetu] },
        {
          episode: 92,
          chapter: 214,
          value: [links.peggyCheetu, links.peggyColt],
        },
      ],
      role: SQUADRON_LEADER,
      log: {
        it: 'L’analista della colonia: esamina i corpi di tre soldati e capisce che uno è stato ucciso da un’arma da fuoco, un altro no. Avverte che gli umani imparano in fretta e che, quando scopriranno che la regina è il punto debole della colonia, verranno al formicaio per ucciderla.',
        en: 'The colony’s analyst, he examines three dead soldiers and works out that a gun killed one of them but not another. He warns that humans learn fast and that, once they find out the Queen is the colony’s weak point, they will come to the nest to kill her.',
      },
      status: [
        { episode: 79, chapter: 189, value: 'alive' },
        // The newborn King beheads him with his tail for running to the
        // Queen instead of obeying, chapter 213.
        { episode: 91, chapter: 213, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [{ episode: 79, chapter: 189, value: SERVING_THE_QUEEN }],
    },
    shaiapouf: {
      relationships: [
        { episode: 86, chapter: 202, value: [links.poufPitou] },
        {
          episode: 88,
          chapter: 206,
          value: [links.poufPitou, links.poufYoupi],
        },
        {
          episode: 92,
          chapter: 215,
          value: [links.poufPitou, links.poufYoupi, links.poufKing],
        },
      ],
      role: ROYAL_GUARD,
      log: {
        it: 'Compare accanto a Neferpito in cima al formicaio mentre si avvicinano i conigli di fumo mandati da Morau, e consiglia di aspettare e osservare. Risponde a ciò che Neferpito sta pensando prima che lo dica, si presenta come guardia reale e annuncia che Montowtoyupih si sveglierà presto.',
        en: 'He appears beside Neferpitou at the top of the nest as Morel’s smoke rabbits draw near, and advises waiting to see what they do. He answers what Neferpitou is thinking before it is said, introduces himself as a fellow Royal Guard and says that Menthuthuyoupi will soon awaken.',
      },
      status: [{ episode: 86, chapter: 202, value: 'alive' }],
      affiliation: [
        { episode: 86, chapter: 202, value: QUEENS_GUARD },
        // The King is born and the Guards kneel to him, chapter 213 and
        // episode 91.
        { episode: 91, chapter: 213, value: KINGS_GUARD },
      ],
    },
    menthuthuyoupi: {
      relationships: [
        {
          episode: 88,
          chapter: 206,
          value: [links.youpiPitou, links.youpiPouf],
        },
        {
          episode: 92,
          chapter: 215,
          value: [links.youpiPitou, links.youpiPouf, links.youpiKing],
        },
        {
          episode: 121,
          chapter: 289,
          value: [
            links.youpiPitou,
            links.youpiPouf,
            links.youpiKing,
            {
              character: 'knuckle-bine',
              type: {
                it: 'Avversario che risparmia',
                en: 'Opponent he spares',
              },
              summary: {
                it: 'Nackul annulla il suo potere per salvare Morau. Montowtoyupih li lascia vivere e se ne va.',
                en: 'Knuckle lifts his ability to save Morel. Menthuthuyoupi lets them live and leaves.',
              },
            },
          ],
        },
      ],
      role: ROYAL_GUARD,
      log: {
        it: 'Non è ancora uscito dal bozzolo, che pende nel formicaio. Shawapf dice a Neferpito che si sveglierà presto.',
        en: 'He has not hatched yet: his cocoon still hangs in the nest. Shaiapouf tells Neferpitou that he will soon awaken.',
      },
      status: [{ episode: 86, chapter: 202, value: 'alive' }],
      affiliation: [
        { episode: 86, chapter: 202, value: QUEENS_GUARD },
        { episode: 91, chapter: 213, value: KINGS_GUARD },
      ],
    },
    colt: {
      relationships: [
        {
          episode: 92,
          chapter: 214,
          source: 'chapter',
          value: [links.coltPeggy, links.coltMorel],
        },
        {
          episode: 92,
          chapter: 215,
          source: 'chapter',
          value: [links.coltPeggy, links.coltMorelOath],
        },
        {
          episode: 92,
          chapter: 215,
          source: 'episode',
          value: [links.coltMorelOath, links.coltKurt],
        },
      ],
      role: SQUADRON_LEADER,
      log: {
        it: 'Guida una squadra di soldati volanti che portano gli umani al formicaio come cibo per la regina, e a un altro comandante di divisione ricorda che conta la qualità, non la quantità. Quando il re appena nato lascia la regina in fin di vita, Coluto deve pulirgli il sangue dalla coda. Poi vola da Morau e Nobu con una bandiera bianca e li supplica di salvarla; i due accettano di portarlo dal loro capo.',
        en: 'He leads a squad of flying soldiers that carry humans back to the nest as food for the Queen, and reminds another Squadron Leader that quality matters more than quantity. When the newborn King leaves the Queen dying, Colt is made to wipe the blood off his tail. Then he flies to Morel and Knov under a white flag and begs them to save her; they agree to take him to their leader.',
      },
      // Small Bear's line in chapter 215 and an ant's in episode 92: he
      // still has memories of a human life. Neither names the boy here.
      origin: [
        {
          episode: 92,
          chapter: 215,
          place: 'ngl',
          value: {
            it: 'Un bambino di un villaggio di NGL mangiato dalla regina',
            en: 'A boy of an NGL village eaten by the Queen',
          },
        },
      ],
      status: [{ episode: 92, chapter: 214, value: 'alive' }],
      affiliation: [
        // Episode 92 tells his naming and the Queen's death together, so the
        // anime reaches only the second entry.
        {
          episode: 92,
          chapter: 214,
          source: 'chapter',
          value: SERVING_THE_QUEEN,
        },
        // Morel swears to protect him and the baby, chapter 215 and
        // episode 92.
        {
          episode: 92,
          chapter: 215,
          value: {
            it: 'Sotto la protezione di Morau',
            en: 'Under Morel’s protection',
          },
        },
      ],
    },
    meruem: {
      relationships: [
        {
          episode: 92,
          chapter: 215,
          value: [links.kingPitou, links.kingPouf, links.kingYoupi],
        },
        // The anime introduces Komugi at chapter 244's scene, episode 103;
        // the manga names her at chapter 257, told in episode 108. Each
        // medium keeps its own snapshot, so neither vouches for a false pair.
        {
          episode: 103,
          chapter: 244,
          source: 'episode',
          value: [
            links.kingPitou,
            links.kingPouf,
            links.kingYoupi,
            links.kingKomugi,
          ],
        },
        {
          episode: 108,
          chapter: 257,
          source: 'chapter',
          value: [
            links.kingPitou,
            links.kingPouf,
            links.kingYoupi,
            links.kingKomugi,
          ],
        },
        // He comes to kill her, saves her from an eagle instead and calls
        // her an important guest, chapter 258 / episode 108.
        {
          episode: 108,
          chapter: 258,
          value: [
            links.kingPitou,
            links.kingPouf,
            links.kingYoupi,
            KING_KOMUGI_GUEST,
          ],
        },
        {
          episode: 126,
          chapter: 298,
          value: [
            links.kingPitou,
            links.kingPouf,
            links.kingYoupi,
            KING_KOMUGI_GUEST,
            {
              character: 'netero',
              type: { it: 'Avversario', en: 'Opponent' },
              summary: {
                it: 'Combatte contro Netero, che gli rivela il nome scelto per lui dalla regina prima di far esplodere una bomba.',
                en: 'He fights Netero, who tells him the name the Queen chose for him before detonating a bomb.',
              },
            },
          ],
        },
      ],
      role: { it: 'Re delle formichimere', en: 'King of the Chimera Ants' },
      log: {
        it: 'Nato prima del tempo, si apre la strada squarciando il ventre della regina e la lascia in fin di vita. Uccide un comandante di divisione che corre da lei invece di obbedirgli, fa pulire a Coluto il sangue dalla coda e lascia il formicaio con le tre guardie reali, in cerca di umani rari da mangiare. Prima di morire, la regina rivela il nome che ha scelto per lui e chiede che gli venga detto.',
        en: 'Born early, he tears his way out of the Queen’s womb and leaves her dying. He kills a Squadron Leader who runs to her instead of obeying him, makes Colt wipe the blood off his tail and leaves the nest with the three Royal Guards, in search of rare humans to eat. Before she dies, the Queen gives the name she chose for him and asks that he be told it.',
      },
      status: [{ episode: 92, chapter: 215, value: 'alive' }],
      affiliation: [
        {
          episode: 92,
          chapter: 215,
          value: {
            it: 'Formichimere, con le sue guardie reali',
            en: 'Chimera Ants, with his Royal Guards',
          },
        },
      ],
    },
  },
  entries: [
    // Rammot names his squad in chapter 192; Peggy names him in episode 79.
    {
      id: 'cheetu',
      kind: 'character',
      revealedAtEpisode: 79,
      revealedAtChapter: 192,
      name: { it: 'Jeedo', en: 'Cheetu' },
      summary: {
        it: 'Un comandante di divisione delle formichimere dall’aspetto di ghepardo.',
        en: 'A cheetah-like Squadron Leader of the Chimera Ants.',
      },
      visual: { art: 'cheetu', tint: 'blue' },
    },
    // Named in chapter 189, where Cheetu tells Colt he is examining the
    // bodies. Episode 79 only orders him.
    {
      id: 'peggy',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 79,
      revealedAtChapter: 189,
      name: { it: 'Pegyi', en: 'Peggy' },
      summary: {
        it: 'Un comandante di divisione delle formichimere, l’analista della colonia.',
        en: 'A Squadron Leader of the Chimera Ants and the colony’s analyst.',
      },
      visual: { art: 'peggy', tint: 'yellow' },
    },
    // He introduces himself to Neferpitou, chapter 202 and episode 86.
    {
      id: 'shaiapouf',
      kind: 'character',
      revealedAtEpisode: 86,
      revealedAtChapter: 202,
      name: { it: 'Shawapf', en: 'Shaiapouf' },
      summary: {
        it: 'Una guardia reale delle formichimere che sembra leggere i pensieri degli altri.',
        en: 'A Royal Guard of the Chimera Ants who seems to read others’ thoughts.',
      },
      visual: { art: 'shaiapouf', tint: 'lavender' },
    },
    // Shaiapouf names him before he hatches, chapter 202 and episode 86.
    {
      id: 'menthuthuyoupi',
      kind: 'character',
      revealedAtEpisode: 86,
      revealedAtChapter: 202,
      name: { it: 'Montowtoyupih', en: 'Menthuthuyoupi' },
      summary: {
        it: 'La terza guardia reale delle formichimere, ancora nel suo bozzolo.',
        en: 'The third Royal Guard of the Chimera Ants, still in his cocoon.',
      },
      visual: { art: 'menthuthuyoupi', tint: 'wine' },
    },
    // Morel asks his name in chapter 214; in episode 92 an ant names him
    // while explaining his memories.
    {
      id: 'colt',
      kind: 'character',
      revealedAtEpisode: 92,
      revealedAtChapter: 214,
      name: { it: 'Coluto', en: 'Colt' },
      summary: {
        it: 'Un comandante di divisione delle formichimere, devoto alla regina.',
        en: 'A Squadron Leader of the Chimera Ants, devoted to the Queen.',
      },
      visual: { art: 'colt', tint: 'ice' },
    },
    // The dying Queen gives his name, chapter 215 and episode 92.
    {
      id: 'meruem',
      kind: 'character',
      revealedAtEpisode: 92,
      revealedAtChapter: 215,
      name: { it: 'Meruem', en: 'Meruem' },
      summary: {
        it: 'Il re delle formichimere. Morendo, la regina rivela il nome che ha scelto per lui.',
        en: 'The King of the Chimera Ants. The dying Queen gives the name she chose for him.',
      },
      visual: { art: 'meruem', tint: 'teal' },
    },
  ],
}
