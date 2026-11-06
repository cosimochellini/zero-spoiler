import { electionChronicles } from './election.chronicle'
import type { HunterSaga } from './saga'

const SHORTLIST_AFFILIATION = [
  {
    episode: 141,
    chapter: 326,
    value: { it: 'Associazione Hunter', en: 'Hunter Association' },
  },
]
const SHORTLIST_STATUS = { episode: 141, chapter: 326, value: 'alive' as const }
const SHORTLIST_WITHDRAWAL = [
  {
    episode: 141,
    chapter: 326,
    value: { it: 'Candidata alla presidenza', en: 'Candidate for chairman' },
  },
  { episode: 143, chapter: 329, value: { it: 'Hunter', en: 'Hunter' } },
]
const INTRODUCED_BY_BEANS = [
  {
    episode: 141,
    chapter: 326,
    value: [
      {
        character: 'beans',
        type: {
          it: 'Presenta la sua candidatura',
          en: 'Introduces her candidacy',
        },
        summary: {
          it: 'Il segretario la presenta tra i sedici Hunter rimasti in corsa.',
          en: 'The secretary introduces her as one of the sixteen Hunters still in the running.',
        },
      },
    ],
  },
]

export const ELECTION_POLITICS: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  entries: [
    {
      id: 'beans',
      kind: 'character',
      revealedAtEpisode: 137,
      revealedAtChapter: 319,
      name: { it: 'Beans', en: 'Beans' },
      summary: {
        it: 'Segretario dell’Associazione Hunter. Lo Zodiaco gli affida il sorteggio delle regole per l’elezione.',
        en: 'The Hunter Association’s secretary. The Zodiacs have him draw the rules for the election.',
      },
      visual: { art: 'beans', tint: 'lavender' },
    },
    {
      id: 'botobai-gigante',
      kind: 'character',
      revealedAtEpisode: 137,
      revealedAtChapter: 319,
      name: { it: 'Botobai Gigante', en: 'Botobai Gigante' },
      summary: {
        it: 'Un membro dello Zodiaco. Gli viene offerto di presiedere la riunione per l’elezione.',
        en: 'A Zodiac who is offered the chair at the meeting to set the election rules.',
      },
      visual: { art: 'botobai-gigante', tint: 'lavender' },
    },
    {
      id: 'cheadle-yorkshire',
      kind: 'character',
      revealedAtEpisode: 137,
      revealedAtChapter: 319,
      name: { it: 'Cheadle Yorkshire', en: 'Cheadle Yorkshire' },
      summary: {
        it: 'Membro dello Zodiaco. Propone di scegliere a sorte le regole per eleggere il nuovo presidente.',
        en: 'A Zodiac who proposes drawing lots to choose the rules for the election.',
      },
      visual: { art: 'cheadle-yorkshire', tint: 'lavender' },
    },
    {
      id: 'cluck',
      kind: 'character',
      revealedAtEpisode: 137,
      revealedAtChapter: 320,
      source: 'episode',
      name: { it: 'Clook', en: 'Cluck' },
      summary: {
        it: 'Membro dello Zodiaco. Manda le schede elettorali a tutti gli Hunter.',
        en: 'The Zodiac who sends ballots to all the Hunters.',
      },
      visual: { art: 'cluck', tint: 'lavender' },
    },
    {
      id: 'gel',
      kind: 'character',
      revealedAtEpisode: 137,
      revealedAtChapter: 321,
      unanchored: true,
      name: { it: 'Gell', en: 'Gel' },
      summary: {
        it: 'Membro dello Zodiaco. Si oppone alla proposta di scegliere il presidente senza votare.',
        en: 'A Zodiac who opposes choosing the chairman without an election.',
      },
      visual: { art: 'gel', tint: 'lavender' },
    },
    {
      id: 'ginta',
      kind: 'character',
      revealedAtEpisode: 137,
      revealedAtChapter: 320,
      name: { it: 'Ginta', en: 'Ginta' },
      summary: {
        it: 'Membro dello Zodiaco. Sorveglia il primo turno dell’elezione.',
        en: 'A Zodiac who helps oversee the first round of voting.',
      },
      visual: { art: 'ginta', tint: 'lavender' },
    },
    {
      id: 'kanzai',
      kind: 'character',
      revealedAtEpisode: 137,
      revealedAtChapter: 320,
      name: { it: 'Kanzai', en: 'Kanzai' },
      summary: {
        it: 'Membro dello Zodiaco. Contesta l’obbligo di firmare le schede.',
        en: 'A Zodiac who objects to requiring signed ballots.',
      },
      visual: { art: 'kanzai', tint: 'lavender' },
    },
    {
      id: 'mizaistom-nana',
      kind: 'character',
      revealedAtEpisode: 137,
      revealedAtChapter: 326,
      unanchored: true,
      name: { it: 'Mizaistom Nana', en: 'Mizaistom Nana' },
      summary: {
        it: 'Membro dello Zodiaco. Fa parte del comitato elettorale e riceve voti per la presidenza.',
        en: 'A Zodiac who serves on the election committee and receives votes for chairman.',
      },
      visual: { art: 'mizaistom-nana', tint: 'lavender' },
    },
    {
      id: 'pariston-hill',
      kind: 'character',
      revealedAtEpisode: 137,
      revealedAtChapter: 321,
      unanchored: true,
      name: { it: 'Pariston Hill', en: 'Pariston Hill' },
      summary: {
        it: 'Vicepresidente dell’Associazione Hunter. Si candida alla presidenza.',
        en: 'The Hunter Association’s vice chairman. He puts himself forward for chairman.',
      },
      visual: { art: 'pariston-hill', tint: 'lavender' },
    },
    {
      id: 'pyon',
      kind: 'character',
      revealedAtEpisode: 137,
      revealedAtChapter: 320,
      name: { it: 'Piyon', en: 'Pyon' },
      summary: {
        it: 'Membro dello Zodiaco. Sorveglia il voto al seggio dell’Associazione Hunter.',
        en: 'A Zodiac who monitors voting at the Hunter Association’s polling place.',
      },
      visual: { art: 'pyon', tint: 'lavender' },
    },
    {
      id: 'saccho-kobayakawa',
      kind: 'character',
      revealedAtEpisode: 137,
      revealedAtChapter: 326,
      unanchored: true,
      name: { it: 'Saccho Kobayakawa', en: 'Saccho Kobayakawa' },
      summary: {
        it: 'Membro dello Zodiaco. Partecipa alla riunione che decide le regole dell’elezione.',
        en: 'A Zodiac who attends the meeting to choose the election rules.',
      },
      visual: { art: 'saccho-kobayakawa', tint: 'lavender' },
    },
    {
      id: 'saiyu',
      kind: 'character',
      revealedAtEpisode: 137,
      revealedAtChapter: 321,
      unanchored: true,
      name: { it: 'Saiyu', en: 'Saiyu' },
      summary: {
        it: 'Membro dello Zodiaco. Partecipa al voto per il nuovo presidente.',
        en: 'A Zodiac taking part in the election for the new chairman.',
      },
      visual: { art: 'saiyu', tint: 'lavender' },
    },
    {
      id: 'bushidora-ambitious',
      kind: 'character',
      revealedAtEpisode: 141,
      revealedAtChapter: 326,
      name: { it: 'Bushidora Ambitious', en: 'Bushidora Ambitious' },
      summary: {
        it: 'Hunter che riceve voti per la presidenza dell’Associazione.',
        en: 'A Hunter who receives votes for chairman of the Association.',
      },
      visual: { art: 'bushidora-ambitious', tint: 'lavender' },
    },
    {
      id: 'cutie-beauty',
      kind: 'character',
      revealedAtEpisode: 141,
      revealedAtChapter: 326,
      name: { it: 'Cutie Beauty', en: 'Cutie Beauty' },
      summary: {
        it: 'Hunter che riceve voti per la presidenza dell’Associazione.',
        en: 'A Hunter who receives votes for chairman of the Association.',
      },
      visual: { art: 'cutie-beauty', tint: 'lavender' },
    },
    {
      id: 'ickshonpe-katocha',
      kind: 'character',
      revealedAtEpisode: 141,
      revealedAtChapter: 326,
      name: { it: 'Ickshonpai Kattouger', en: 'Ickshonpe Katocha' },
      summary: {
        it: 'Hunter che riceve voti per la presidenza dell’Associazione.',
        en: 'A Hunter who receives votes for chairman of the Association.',
      },
      visual: { art: 'ickshonpe-katocha', tint: 'lavender' },
    },
    {
      id: 'linne-horsdoeuvre',
      kind: 'character',
      revealedAtEpisode: 141,
      revealedAtChapter: 326,
      name: { it: 'Rinne Hors D’Oeuvre', en: 'Linne Horsdoeuvre' },
      summary: {
        it: 'Hunter che riceve voti per la presidenza dell’Associazione.',
        en: 'A Hunter who receives votes for chairman of the Association.',
      },
      visual: { art: 'linne-horsdoeuvre', tint: 'lavender' },
    },
    {
      id: 'loupe-highland',
      kind: 'character',
      revealedAtEpisode: 141,
      revealedAtChapter: 326,
      name: { it: 'Lupe Highland', en: 'Loupe Highland' },
      summary: {
        it: 'Hunter che riceve voti per la presidenza dell’Associazione.',
        en: 'A Hunter who receives votes for chairman of the Association.',
      },
      visual: { art: 'loupe-highland', tint: 'lavender' },
    },
    {
      id: 'sanbica-norton',
      kind: 'character',
      revealedAtEpisode: 141,
      revealedAtChapter: 326,
      name: { it: 'Sanbika Norton', en: 'Sanbica Norton' },
      summary: {
        it: 'Hunter che riceve voti per la presidenza dell’Associazione.',
        en: 'A Hunter who receives votes for chairman of the Association.',
      },
      visual: { art: 'sanbica-norton', tint: 'lavender' },
    },
    {
      id: 'teradein-neutral',
      kind: 'character',
      revealedAtEpisode: 141,
      revealedAtChapter: 326,
      name: { it: 'Teradain Neutral', en: 'Teradein Neutral' },
      summary: {
        it: 'Hunter che riceve voti per la presidenza dell’Associazione.',
        en: 'A Hunter who receives votes for chairman of the Association.',
      },
      visual: { art: 'teradein-neutral', tint: 'lavender' },
    },
  ],
  dossiers: {
    'beans': {
      chronicle: electionChronicles.beans,
      role: {
        it: 'Segretario dell’Associazione Hunter',
        en: 'Hunter Association secretary',
      },
      log: {
        it: 'Estrae a sorte la proposta che stabilisce come si vota. Ne legge la prima regola ai presenti.',
        en: 'He draws the proposal that determines how the vote works and reads its first rule to the room.',
      },
      affiliation: [
        {
          episode: 137,
          chapter: 319,
          value: { it: 'Associazione Hunter', en: 'Hunter Association' },
        },
      ],
      status: [{ episode: 137, chapter: 319, value: 'alive' }],
      relationships: [
        {
          episode: 137,
          chapter: 319,
          value: [
            {
              character: 'cheadle-yorkshire',
              type: { it: 'Propone il sorteggio', en: 'Proposes the draw' },
              summary: {
                it: 'Chiede che sia una persona fuori dallo Zodiaco a estrarre una delle proposte. Il segretario esegue il sorteggio.',
                en: 'She asks for someone outside the Zodiacs to draw a proposal. The secretary makes the draw.',
              },
            },
          ],
        },
      ],
    },
    'botobai-gigante': {
      chronicle: electionChronicles['botobai-gigante'],
      role: { it: 'Membro dello Zodiaco', en: 'Member of the Zodiacs' },
      log: {
        it: 'Rinuncia a condurre la riunione. Partecipa al sorteggio per scegliere le regole del voto.',
        en: 'He declines to lead the meeting and takes part in the draw for the voting rules.',
      },
      affiliation: [
        {
          episode: 137,
          chapter: 319,
          value: {
            it: 'Associazione Hunter, Zodiaco',
            en: 'Hunter Association, Zodiacs',
          },
        },
      ],
      status: [{ episode: 137, chapter: 319, value: 'alive' }],
      epithet: [
        { episode: 137, chapter: 319, value: { it: 'Drago', en: 'Dragon' } },
      ],
      relationships: [
        {
          episode: 137,
          chapter: 319,
          value: [
            {
              character: 'cheadle-yorkshire',
              type: { it: 'Collega dello Zodiaco', en: 'Fellow Zodiac' },
              summary: {
                it: 'Entrambi rinunciano a presiedere la riunione che deve fissare le regole del voto.',
                en: 'Both decline to lead the meeting to set the voting rules.',
              },
            },
          ],
        },
      ],
    },
    'cheadle-yorkshire': {
      chronicle: electionChronicles['cheadle-yorkshire'],
      role: [
        {
          episode: 137,
          chapter: 319,
          value: { it: 'Membro dello Zodiaco', en: 'Member of the Zodiacs' },
        },
        {
          episode: 146,
          chapter: 335,
          value: {
            it: 'Vicepresidente dell’Associazione Hunter',
            en: 'Hunter Association vice chairman',
          },
        },
      ],
      log: {
        it: 'Fa scrivere una proposta a ciascuno. Chiede che a estrarla sia qualcuno che non fa parte dello Zodiaco.',
        en: 'She has each member write a proposal and asks for someone outside the Zodiacs to draw one.',
      },
      affiliation: [
        {
          episode: 137,
          chapter: 319,
          value: {
            it: 'Associazione Hunter, Zodiaco',
            en: 'Hunter Association, Zodiacs',
          },
        },
      ],
      status: [{ episode: 137, chapter: 319, value: 'alive' }],
      epithet: [
        { episode: 137, chapter: 319, value: { it: 'Cane', en: 'Dog' } },
      ],
      relationships: [
        {
          episode: 137,
          chapter: 319,
          value: [
            {
              character: 'beans',
              type: {
                it: 'Segretario che estrae la proposta',
                en: 'Secretary who draws a proposal',
              },
              summary: {
                it: 'Affida al segretario l’estrazione delle regole dell’elezione.',
                en: 'She has the secretary draw the election rules.',
              },
            },
          ],
        },
        {
          episode: 144,
          chapter: 332,
          value: [
            {
              character: 'mizaistom-nana',
              type: {
                it: 'Candidato che la sostiene',
                en: 'Candidate who endorses her',
              },
              summary: {
                it: 'Lui invita gli Hunter a votare per lei. Lei chiede loro di votare per Leolio.',
                en: 'He asks the Hunters to vote for her. She asks them to vote for Leorio.',
              },
            },
          ],
        },
        {
          episode: 146,
          chapter: 335,
          value: [
            {
              character: 'pariston-hill',
              type: {
                it: 'Presidente dimissionario',
                en: 'Resigning chairman',
              },
              summary: {
                it: 'Lui la nomina vicepresidente e si dimette subito dopo.',
                en: 'He appoints her vice chairman and resigns immediately.',
              },
            },
          ],
        },
      ],
    },
    'cluck': {
      chronicle: electionChronicles.cluck,
      role: { it: 'Membro dello Zodiaco', en: 'Member of the Zodiacs' },
      log: {
        it: 'Contesta l’obbligo di firmare la scheda. Poi usa i suoi uccelli per consegnare le schede.',
        en: 'She objects to requiring signatures on the ballots. She then has her birds deliver the ballots.',
      },
      affiliation: [
        {
          episode: 137,
          chapter: 320,
          value: {
            it: 'Associazione Hunter, Zodiaco',
            en: 'Hunter Association, Zodiacs',
          },
        },
      ],
      status: [{ episode: 137, chapter: 320, value: 'alive' }],
      epithet: [
        { episode: 137, chapter: 320, value: { it: 'Gallo', en: 'Chicken' } },
      ],
      relationships: [
        {
          episode: 137,
          chapter: 320,
          source: 'episode',
          value: [
            {
              character: 'ging-freecss',
              type: {
                it: 'Collega di cui contesta le regole',
                en: 'Colleague whose rules she challenges',
              },
              summary: {
                it: 'Lei contesta l’obbligo di firmare le schede scritto nella sua proposta.',
                en: 'She objects to the rule in his proposal that requires voters to sign their ballots.',
              },
            },
          ],
        },
      ],
    },
    'gel': {
      chronicle: electionChronicles.gel,
      role: { it: 'Membro dello Zodiaco', en: 'Member of the Zodiacs' },
      log: {
        it: 'Fa parte del comitato elettorale. Dice al vicepresidente che non voterà per lui.',
        en: 'She serves on the election committee. She tells the vice chairman she will not vote for him.',
      },
      affiliation: [
        {
          episode: 137,
          chapter: 321,
          value: {
            it: 'Associazione Hunter, Zodiaco',
            en: 'Hunter Association, Zodiacs',
          },
        },
      ],
      status: [{ episode: 137, chapter: 321, value: 'alive' }],
      epithet: [
        { episode: 137, chapter: 321, value: { it: 'Serpente', en: 'Snake' } },
      ],
      relationships: [
        {
          episode: 138,
          chapter: 321,
          value: [
            {
              character: 'kanzai',
              type: {
                it: 'Collega che trattiene',
                en: 'Colleague she restrains',
              },
              summary: {
                it: 'Interviene quando lui cerca di aggredire il vicepresidente.',
                en: 'She intervenes when he tries to attack the vice chairman.',
              },
            },
          ],
        },
      ],
    },
    'ginta': {
      chronicle: electionChronicles.ginta,
      role: { it: 'Membro dello Zodiaco', en: 'Member of the Zodiacs' },
      log: {
        it: 'Sorveglia le urne con due colleghi. Si accorge che un Hunter osserva chi viene a votare.',
        en: 'He watches the ballot box with two colleagues and notices a Hunter watching the other voters.',
      },
      affiliation: [
        {
          episode: 137,
          chapter: 320,
          value: {
            it: 'Associazione Hunter, Zodiaco',
            en: 'Hunter Association, Zodiacs',
          },
        },
      ],
      status: [{ episode: 137, chapter: 320, value: 'alive' }],
      epithet: [
        { episode: 137, chapter: 320, value: { it: 'Pecora', en: 'Sheep' } },
      ],
      relationships: [
        {
          episode: 137,
          chapter: 320,
          value: [
            {
              character: 'hisoka',
              type: {
                it: 'Elettore che osserva il seggio',
                en: 'Voter who watches the polling place',
              },
              summary: {
                it: 'Si accorge che l’Hunter resta a osservare chi viene a votare.',
                en: 'He notices the Hunter lingering to watch the other voters.',
              },
            },
          ],
        },
      ],
    },
    'kanzai': {
      chronicle: electionChronicles.kanzai,
      role: { it: 'Membro dello Zodiaco', en: 'Member of the Zodiacs' },
      log: {
        it: 'Sorveglia il primo turno. Chiede a un Hunter con la scheda in bianco perché si trattiene al seggio.',
        en: 'He oversees the first vote and challenges a Hunter who lingers at the polling place with a blank ballot.',
      },
      affiliation: [
        {
          episode: 137,
          chapter: 320,
          value: {
            it: 'Associazione Hunter, Zodiaco',
            en: 'Hunter Association, Zodiacs',
          },
        },
      ],
      status: [{ episode: 137, chapter: 320, value: 'alive' }],
      epithet: [
        { episode: 137, chapter: 320, value: { it: 'Tigre', en: 'Tiger' } },
      ],
      relationships: [
        {
          episode: 137,
          chapter: 320,
          value: [
            {
              character: 'hisoka',
              type: { it: 'Elettore che sorveglia', en: 'Voter he watches' },
              summary: {
                it: 'Gli chiede perché si trattiene al seggio dopo aver portato una scheda in bianco.',
                en: 'He challenges the Hunter who lingers at the polling place after bringing a blank ballot.',
              },
            },
          ],
        },
      ],
    },
    'mizaistom-nana': {
      chronicle: electionChronicles['mizaistom-nana'],
      role: { it: 'Membro dello Zodiaco', en: 'Member of the Zodiacs' },
      log: {
        it: 'Alla riunione solleva il caso degli Hunter scomparsi. Siede nel comitato che organizza il voto.',
        en: 'He raises the case of the missing Hunters at the meeting and serves on the committee that runs the vote.',
      },
      affiliation: [
        {
          episode: 137,
          chapter: 326,
          value: {
            it: 'Associazione Hunter, Zodiaco',
            en: 'Hunter Association, Zodiacs',
          },
        },
      ],
      status: [{ episode: 137, chapter: 326, value: 'alive' }],
      epithet: [{ episode: 137, chapter: 326, value: { it: 'Bue', en: 'Ox' } }],
      relationships: [
        {
          episode: 144,
          chapter: 332,
          value: [
            {
              character: 'cheadle-yorkshire',
              type: {
                it: 'Candidata che sostiene',
                en: 'Candidate he endorses',
              },
              summary: {
                it: 'Invita gli Hunter a votare per lei durante i discorsi dei finalisti.',
                en: 'He asks the Hunters to vote for her during the finalists’ speeches.',
              },
            },
          ],
        },
      ],
    },
    'pariston-hill': {
      chronicle: electionChronicles['pariston-hill'],
      role: [
        {
          episode: 137,
          chapter: 321,
          value: {
            it: 'Vicepresidente dell’Associazione Hunter',
            en: 'Hunter Association vice chairman',
          },
        },
        {
          episode: 146,
          chapter: 335,
          value: {
            it: 'Ex presidente dell’Associazione Hunter',
            en: 'Former Hunter Association chairman',
          },
        },
      ],
      log: {
        it: 'Prende la parola alla riunione dello Zodiaco e propone di scegliere il presidente senza votare. Arriva primo al primo scrutinio.',
        en: 'He takes the floor at the Zodiac meeting and proposes picking a chairman without a vote. He leads the first count.',
      },
      affiliation: [
        {
          episode: 137,
          chapter: 321,
          value: {
            it: 'Associazione Hunter, Zodiaco',
            en: 'Hunter Association, Zodiacs',
          },
        },
      ],
      status: [{ episode: 137, chapter: 321, value: 'alive' }],
      epithet: [
        { episode: 137, chapter: 321, value: { it: 'Topo', en: 'Rat' } },
      ],
      relationships: [
        {
          episode: 137,
          chapter: 321,
          value: [
            {
              character: 'cheadle-yorkshire',
              type: { it: 'Collega e rivale', en: 'Colleague and rival' },
              summary: {
                it: 'Le offre di condurre la riunione. Lei rifiuta e propone di sorteggiare le regole del voto.',
                en: 'He offers her the chair at the meeting. She declines and proposes drawing the voting rules by lot.',
              },
            },
          ],
        },
        {
          episode: 146,
          chapter: 335,
          value: [
            {
              character: 'cheadle-yorkshire',
              type: {
                it: 'Vicepresidente che nomina',
                en: 'Vice chairman he appoints',
              },
              summary: {
                it: 'La nomina vicepresidente subito prima di dimettersi dalla presidenza.',
                en: 'He appoints her vice chairman just before resigning as chairman.',
              },
            },
          ],
        },
      ],
    },
    'pyon': {
      chronicle: electionChronicles.pyon,
      role: { it: 'Membro dello Zodiaco', en: 'Member of the Zodiacs' },
      log: {
        it: 'È tra i membri del comitato presenti al primo turno. Il voto è valido solo se al seggio siedono almeno tre di loro.',
        en: 'She is one of the committee members present for the first round. At least three of them must be there for voting to count.',
      },
      affiliation: [
        {
          episode: 137,
          chapter: 320,
          value: {
            it: 'Associazione Hunter, Zodiaco',
            en: 'Hunter Association, Zodiacs',
          },
        },
      ],
      status: [{ episode: 137, chapter: 320, value: 'alive' }],
      epithet: [
        { episode: 137, chapter: 320, value: { it: 'Coniglio', en: 'Rabbit' } },
      ],
      relationships: [
        {
          episode: 137,
          chapter: 320,
          value: [
            {
              character: 'ginta',
              type: { it: 'Collega al seggio', en: 'Fellow polling inspector' },
              summary: {
                it: 'Sorveglia con lui le urne al primo turno.',
                en: 'She watches the ballot box with him in the first round.',
              },
            },
          ],
        },
      ],
    },
    'saccho-kobayakawa': {
      chronicle: electionChronicles['saccho-kobayakawa'],
      role: { it: 'Membro dello Zodiaco', en: 'Member of the Zodiacs' },
      log: {
        it: 'Partecipa al sorteggio e riceve voti già al primo scrutinio.',
        en: 'He takes part in the draw and receives votes in the first count.',
      },
      affiliation: [
        {
          episode: 137,
          chapter: 326,
          value: {
            it: 'Associazione Hunter, Zodiaco',
            en: 'Hunter Association, Zodiacs',
          },
        },
      ],
      status: [{ episode: 137, chapter: 326, value: 'alive' }],
      epithet: [
        { episode: 137, chapter: 326, value: { it: 'Cavallo', en: 'Horse' } },
      ],
      relationships: [
        {
          episode: 137,
          chapter: 326,
          value: [
            {
              character: 'cheadle-yorkshire',
              type: {
                it: 'Collega del comitato',
                en: 'Fellow committee member',
              },
              summary: {
                it: 'Partecipa al sorteggio delle regole che lei propone allo Zodiaco.',
                en: 'He takes part in the draw she proposes to the Zodiacs.',
              },
            },
          ],
        },
      ],
    },
    'saiyu': {
      chronicle: electionChronicles.saiyu,
      role: { it: 'Membro dello Zodiaco', en: 'Member of the Zodiacs' },
      log: {
        it: 'Alla riunione accetta che sia il vicepresidente a presiedere. Lo Zodiaco sceglie poi le regole per il voto.',
        en: 'He accepts the vice chairman as the chair of the meeting. The Zodiacs then choose the voting rules.',
      },
      affiliation: [
        {
          episode: 137,
          chapter: 321,
          value: {
            it: 'Associazione Hunter, Zodiaco',
            en: 'Hunter Association, Zodiacs',
          },
        },
      ],
      status: [{ episode: 137, chapter: 321, value: 'alive' }],
      epithet: [
        { episode: 137, chapter: 321, value: { it: 'Scimmia', en: 'Monkey' } },
      ],
      relationships: [
        {
          episode: 138,
          chapter: 321,
          value: [
            {
              character: 'kanzai',
              type: { it: 'Collega che ferma', en: 'Colleague he stops' },
              summary: {
                it: 'Lo ferma quando cerca di aggredire il vicepresidente durante la riunione.',
                en: 'He helps stop him from attacking the vice chairman at the meeting.',
              },
            },
          ],
        },
      ],
    },
    'bushidora-ambitious': {
      chronicle: electionChronicles['bushidora-ambitious'],
      role: { it: 'Candidato alla presidenza', en: 'Candidate for chairman' },
      log: {
        it: 'Al primo scrutinio ottiene otto voti.',
        en: 'He receives eight votes in the first count.',
      },
      affiliation: SHORTLIST_AFFILIATION,
      status: [
        SHORTLIST_STATUS,
        { episode: 143, chapter: 329, value: 'deceased' },
      ],
      relationships: [
        {
          episode: 142,
          chapter: 328,
          value: [
            {
              character: 'teradein-neutral',
              type: { it: 'Alleato nella ricerca', en: 'Ally in the search' },
              summary: {
                it: 'Si accordano per cercare l’Hunter che controlla altre persone con gli aghi.',
                en: 'They work together to find the Hunter who controls people with needles.',
              },
            },
          ],
        },
      ],
    },
    'cutie-beauty': {
      chronicle: electionChronicles['cutie-beauty'],
      role: SHORTLIST_WITHDRAWAL,
      log: {
        it: 'Al primo scrutinio ottiene dieci voti e condivide l’undicesimo posto.',
        en: 'She receives ten votes and ties for eleventh in the first count.',
      },
      affiliation: SHORTLIST_AFFILIATION,
      status: [SHORTLIST_STATUS],
      relationships: [
        {
          episode: 143,
          chapter: 329,
          value: [
            {
              character: 'pariston-hill',
              type: { it: 'Candidato che sostiene', en: 'Candidate she backs' },
              summary: {
                it: 'Dopo essere uscita dalla corsa, dice che lui realizzerà il suo progetto per l’Associazione.',
                en: 'After dropping out of the race, she says he will carry out her plans for the Association.',
              },
            },
          ],
        },
      ],
    },
    'ickshonpe-katocha': {
      chronicle: electionChronicles['ickshonpe-katocha'],
      role: [
        {
          episode: 141,
          chapter: 326,
          value: {
            it: 'Candidato alla presidenza',
            en: 'Candidate for chairman',
          },
        },
        { episode: 143, chapter: 330, value: { it: 'Hunter', en: 'Hunter' } },
      ],
      log: {
        it: 'Al primo scrutinio arriva terzo con ventisei voti.',
        en: 'He places third with twenty-six votes in the first count.',
      },
      affiliation: SHORTLIST_AFFILIATION,
      status: [SHORTLIST_STATUS],
      relationships: [
        {
          episode: 144,
          chapter: 331,
          value: [
            {
              character: 'ging-freecss',
              type: {
                it: 'Hunter con cui vuole fare uno scambio',
                en: 'Hunter he offers a trade',
              },
              summary: {
                it: 'Gli propone di scambiare due oggetti mentre parla ai presenti prima del voto.',
                en: 'He offers him a trade for two items while addressing the voters.',
              },
            },
          ],
        },
      ],
    },
    'linne-horsdoeuvre': {
      chronicle: electionChronicles['linne-horsdoeuvre'],
      role: SHORTLIST_WITHDRAWAL,
      log: {
        it: 'Al primo scrutinio ottiene sei voti.',
        en: 'She receives six votes in the first count.',
      },
      affiliation: SHORTLIST_AFFILIATION,
      status: [SHORTLIST_STATUS],
      relationships: INTRODUCED_BY_BEANS,
    },
    'loupe-highland': {
      chronicle: electionChronicles['loupe-highland'],
      role: [
        {
          episode: 141,
          chapter: 326,
          value: {
            it: 'Candidato alla presidenza',
            en: 'Candidate for chairman',
          },
        },
        { episode: 143, chapter: 329, value: { it: 'Hunter', en: 'Hunter' } },
      ],
      log: {
        it: 'Al primo scrutinio ottiene cinque voti e condivide il diciannovesimo posto.',
        en: 'He receives five votes and ties for nineteenth in the first count.',
      },
      affiliation: SHORTLIST_AFFILIATION,
      status: [SHORTLIST_STATUS],
      relationships: [
        {
          episode: 142,
          chapter: 328,
          value: [
            {
              character: 'teradein-neutral',
              type: { it: 'Alleato nella ricerca', en: 'Ally in the search' },
              summary: {
                it: 'Si accordano per cercare l’Hunter che controlla altre persone con gli aghi.',
                en: 'They work together to find the Hunter who controls people with needles.',
              },
            },
          ],
        },
      ],
    },
    'sanbica-norton': {
      chronicle: electionChronicles['sanbica-norton'],
      role: SHORTLIST_WITHDRAWAL,
      log: {
        it: 'Al primo scrutinio ottiene dieci voti e condivide l’undicesimo posto.',
        en: 'She receives ten votes and ties for eleventh in the first count.',
      },
      affiliation: SHORTLIST_AFFILIATION,
      status: [SHORTLIST_STATUS],
      relationships: INTRODUCED_BY_BEANS,
    },
    'teradein-neutral': {
      chronicle: electionChronicles['teradein-neutral'],
      role: { it: 'Candidato alla presidenza', en: 'Candidate for chairman' },
      log: {
        it: 'Al primo scrutinio ottiene nove voti e si piazza tredicesimo.',
        en: 'He places thirteenth with nine votes in the first count.',
      },
      affiliation: SHORTLIST_AFFILIATION,
      status: [
        SHORTLIST_STATUS,
        { episode: 143, chapter: 330, value: 'deceased' },
      ],
      relationships: [
        {
          episode: 142,
          chapter: 328,
          value: [
            {
              character: 'loupe-highland',
              type: { it: 'Alleato nella ricerca', en: 'Ally in the search' },
              summary: {
                it: 'Si accordano per cercare l’Hunter che controlla altre persone con gli aghi.',
                en: 'They work together to find the Hunter who controls people with needles.',
              },
            },
          ],
        },
      ],
    },
  },
}
