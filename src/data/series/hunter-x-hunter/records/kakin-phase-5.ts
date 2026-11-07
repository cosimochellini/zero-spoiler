import type { ArtId } from '~/data/series/hunter-x-hunter/art'
import type { Relationship } from '~/data/types'
import type { CharacterStatus } from '~/lib/view/records'

import type { HunterSaga } from './saga'

type Dossier = HunterSaga['dossiers'][string]
type Name = Record<'en' | 'it', string>

interface Dated {
  chapter: number
  episode: 148
  source: 'chapter'
}

/** A dated fact of this phase: manga-only, episode 148 only orders it. */
function at(chapter: number): Dated {
  return { episode: 148, chapter, source: 'chapter' }
}

function link(character: string, type: Name, summary: Name): Relationship {
  return { character, type, summary }
}

/** One record of the phase: its gate, its first facts and its exchanges. */
interface Filing {
  affiliation: Name
  chapter: number
  id: ArtId
  /** Dated changes after the gate. */
  later?: Pick<Dossier, 'status'>
  links: Relationship[]
  /** The chapter of its exchanges, when it is later than the gate. */
  met?: number
  name: Name
  role: Name
  status?: CharacterStatus
  summary: Name
}

const BENJAMIN_ARMY = {
  it: 'Esercito privato di Benjamin',
  en: 'Benjamin’s private army',
}
const BENJAMIN_SOLDIER = {
  it: 'Soldato privato di Benjamin',
  en: 'Benjamin’s private soldier',
}
const GUARDED = { it: 'Principe che sorveglia', en: 'Prince he guards' }
const COMMANDER = { it: 'Comandante', en: 'Commander' }
const ZHANG_LEI_GUARDS = { it: 'Guardie di Chowrai', en: 'Zhang Lei’s guards' }
const LENT_GUARD = {
  it: 'Guardia prestata al quattordicesimo principe',
  en: 'Guard lent to the Fourteenth Prince',
}
const LENT_BY = { it: 'Principe che lo ha prestato', en: 'Prince who lent him' }

/**
 * Chapters 401–420, the last phase of Kakin (#1138). Every gate is an
 * explicit naming scene in the phase inventory,
 * `docs/content-provenance/hunter-x-hunter-kakin-phase-5.md`.
 */
const FILINGS: Filing[] = [
  {
    id: 'oito-hui-guo-rou',
    chapter: 401,
    name: { it: 'Oito Hoicoro', en: 'Oito Hui Guo Rou' },
    summary: {
      it: 'Ottava regina di Cakin, una delle otto mogli del re.',
      en: 'Eighth Queen of Kakin, one of the king’s eight wives.',
    },
    role: { it: 'Ottava regina di Cakin', en: 'Eighth Queen of Kakin' },
    affiliation: { it: 'Famiglia reale di Cakin', en: 'Kakin royal family' },
    links: [
      link(
        'woble-hui-guo-rou',
        { it: 'Figlio o figlia', en: 'Child' },
        {
          it: 'Ha avuto Woble dal re.',
          en: 'Woble is her child with the king.',
        },
      ),
      link(
        'kurapika',
        { it: 'Guardia del corpo', en: 'Bodyguard' },
        {
          it: 'Kurapika la protegge nella stanza 1014 e ascolta con lei il racconto di Longhi.',
          en: 'Kurapika guards her in Room 1014 and hears Longhi’s account with her.',
        },
      ),
    ],
    // Detained under martial law until the real Woble is found (#1159).
    later: {
      status: [
        { ...at(401), value: 'alive' },
        { ...at(415), value: 'captured' },
      ],
    },
  },
  {
    id: 'makaha',
    chapter: 401,
    name: { it: 'Makaha', en: 'Makaha' },
    summary: {
      it: 'Una soldatessa di Cakin, sorellastra di Longhi. Scopre che i figli di Beyond portano una maledizione che si attiva alla loro morte.',
      en: 'A Kakin soldier and Longhi’s half-sister. She finds out that Beyond’s children carry a curse that is released when they die.',
    },
    role: { it: 'Soldatessa di Cakin', en: 'Kakin soldier' },
    affiliation: { it: 'Esercito di Cakin', en: 'Kakin military' },
    links: [
      link(
        'longhi',
        { it: 'Sorellastra', en: 'Half-sister' },
        {
          it: 'Longhi racconta a Kurapika che è stata Makaha a scoprire il segno che hanno in comune.',
          en: 'Longhi tells Kurapika that Makaha found the seal they share.',
        },
      ),
      link(
        'beyond-netero',
        { it: 'Padre biologico', en: 'Biological father' },
        {
          it: 'È una dei figli che Beyond ha fatto crescere da coppie di ufficiali.',
          en: 'She is one of the children Beyond had raised by couples of officers.',
        },
      ),
    ],
  },
  {
    id: 'hashito',
    chapter: 402,
    name: { it: 'Hashito', en: 'Hashito' },
    summary: {
      it: 'Una guardia che Chowrai ha prestato alla stanza 1014. Woble chiede che resti con Sakata a tempo indeterminato.',
      en: 'A guard Zhang Lei lent to Room 1014. Woble’s side asks for him and Sakata to stay on for good.',
    },
    role: LENT_GUARD,
    affiliation: ZHANG_LEI_GUARDS,
    links: [
      link('zhang-lei-hui-guo-rou', LENT_BY, {
        it: 'Tenftory chiede a Chowrai di lasciare Hashito e Sakata al quattordicesimo principe.',
        en: 'Tenftory asks Zhang Lei to leave Hashito and Sakata with the Fourteenth Prince.',
      }),
    ],
  },
  {
    id: 'sakata',
    chapter: 402,
    name: { it: 'Sakata', en: 'Sakata' },
    summary: {
      it: 'Una guardia che Chowrai ha prestato alla stanza 1014. Bussa alla porta quando il colloquio con Longhi si prolunga.',
      en: 'A guard Zhang Lei lent to Room 1014. He knocks on the door when the talk with Longhi runs long.',
    },
    role: LENT_GUARD,
    affiliation: ZHANG_LEI_GUARDS,
    links: [
      link('zhang-lei-hui-guo-rou', LENT_BY, {
        it: 'Tenftory chiede a Chowrai che Sakata e Hashito continuino a sostenere Woble.',
        en: 'Tenftory asks Zhang Lei for Sakata and Hashito to keep supporting Woble.',
      }),
    ],
  },
  {
    id: 'musse',
    chapter: 402,
    name: { it: 'Musse', en: 'Musse' },
    summary: {
      it: 'Un soldato di Benjamin ucciso dal potere di Camilla. Benjamin chiede a Kaiser se è stato ritrovato.',
      en: 'One of Benjamin’s soldiers, killed by Camilla’s ability. Benjamin asks Kaiser whether he has been found.',
    },
    role: BENJAMIN_SOLDIER,
    affiliation: BENJAMIN_ARMY,
    status: 'deceased',
    links: [
      link('benjamin-hui-guo-rou', COMMANDER, {
        it: 'Benjamin chiede a Kaiser a che punto è la ricerca di Musse.',
        en: 'Benjamin asks Kaiser how the search for Musse is going.',
      }),
    ],
  },
  {
    id: 'balsamilco',
    chapter: 403,
    name: { it: 'Balsamilco', en: 'Balsamilco' },
    summary: {
      it: 'Il capitano delle guardie di Benjamin. Porta in tribunale Harkenburg, il cui potere prende il controllo del suo corpo.',
      en: 'The captain of Benjamin’s guards. He takes Halkenburg to court, and Halkenburg’s ability takes over his body.',
    },
    role: {
      it: 'Capitano delle guardie di Benjamin',
      en: 'Captain of Benjamin’s guards',
    },
    affiliation: BENJAMIN_ARMY,
    links: [
      link(
        'halkenburg-hui-guo-rou',
        { it: 'Avversario in tribunale', en: 'Opponent in court' },
        {
          it: 'È l’attore nella causa contro Harkenburg. L’anima del principe entra nel suo corpo.',
          en: 'He is the plaintiff in the case against Halkenburg. The prince’s soul enters his body.',
        },
      ),
    ],
  },
  {
    id: 'worio-bay',
    chapter: 403,
    name: { it: 'Worio Bay', en: 'Worio Bay' },
    summary: {
      it: 'Un dipendente dell’Ufficio di Giustizia con il segno a forma di piuma di Harkenburg sulla mano. Dice a Kaiser che il principe morirà presto.',
      en: 'A Justice Bureau staff member with Halkenburg’s feather-shaped mark on his hand. He tells Kaiser that the prince will die soon.',
    },
    role: {
      it: 'Dipendente dell’Ufficio di Giustizia',
      en: 'Justice Bureau staff member',
    },
    affiliation: {
      it: 'Ufficio di Giustizia di Cakin',
      en: 'Kakin Justice Bureau',
    },
    links: [
      link(
        'kaiser',
        {
          it: 'Funzionario che lo interroga',
          en: 'Official who questions him',
        },
        {
          it: 'Kaiser lo interroga sullo svenimento, e lui gli riferisce il messaggio di Harkenburg.',
          en: 'Kaiser questions him about his fainting, and he passes on Halkenburg’s message.',
        },
      ),
      link(
        'halkenburg-hui-guo-rou',
        { it: 'Principe che lo ha segnato', en: 'Prince who marked him' },
        {
          it: 'Harkenburg gli ha detto di raccontare tutto a Kaiser se lui avesse parlato del Nen.',
          en: 'Halkenburg told him to tell Kaiser everything if Kaiser raised Nen himself.',
        },
      ),
    ],
  },
  {
    id: 'vict',
    chapter: 404,
    name: { it: 'Vict', en: 'Vict' },
    summary: {
      it: 'Un soldato di Benjamin assegnato a Harkenburg. Gli uomini del principe hanno provato su di lui il loro potere.',
      en: 'One of Benjamin’s soldiers, posted with Halkenburg. The prince’s men tested their ability on him.',
    },
    role: BENJAMIN_SOLDIER,
    affiliation: BENJAMIN_ARMY,
    links: [
      link('halkenburg-hui-guo-rou', GUARDED, {
        it: 'Harkenburg ricorda di aver provato il suo potere su Vict prima di colpire Balsamilco.',
        en: 'Halkenburg recalls testing his ability on Vict before he struck Balsamilco.',
      }),
    ],
  },
  {
    id: 'shikaku',
    chapter: 404,
    name: { it: 'Shikaku', en: 'Shikaku' },
    summary: {
      it: 'Un soldato di Benjamin assegnato a Harkenburg. Muore dopo che il potere del principe ha preso il controllo del suo corpo.',
      en: 'One of Benjamin’s soldiers, posted with Halkenburg. He dies after the prince’s ability takes over his body.',
    },
    role: BENJAMIN_SOLDIER,
    affiliation: BENJAMIN_ARMY,
    status: 'deceased',
    links: [
      link('halkenburg-hui-guo-rou', GUARDED, {
        it: 'Harkenburg spiega il suo potere a partire dalla prova fatta con Shikaku e Sumidori.',
        en: 'Halkenburg explains his ability from the test with Shikaku and Sumidori.',
      }),
    ],
  },
  {
    id: 'sumidori',
    chapter: 404,
    name: { it: 'Sumidori', en: 'Sumidori' },
    summary: {
      it: 'Uno degli uomini di Harkenburg. La sua mente ha occupato il corpo di Shikaku durante la prova del potere del principe.',
      en: 'One of Halkenburg’s men. His mind took over Shikaku’s body in the test of the prince’s ability.',
    },
    role: { it: 'Soldato di Harkenburg', en: 'Halkenburg’s soldier' },
    affiliation: { it: 'Uomini di Harkenburg', en: 'Halkenburg’s men' },
    links: [
      link(
        'shikaku',
        { it: 'Corpo che ha occupato', en: 'Body he took over' },
        {
          it: 'Dopo la prova si sveglia e dà il numero di matricola di Shikaku.',
          en: 'After the test he wakes and gives Shikaku’s service number.',
        },
      ),
    ],
  },
  {
    id: 'cleapatro',
    chapter: 404,
    name: { it: 'Cleapatro', en: 'Cleapatro' },
    summary: {
      it: 'Presiede la Corte suprema della nave. Benjamin fa sapere alla Corte che tutte le accuse vengono ritirate.',
      en: 'The ship’s Supreme Magistrate. Benjamin has the court told that all the charges are dropped.',
    },
    role: { it: 'Giudice della Corte suprema', en: 'Supreme Magistrate' },
    affiliation: { it: 'Corte suprema di Cakin', en: 'Kakin Supreme Court' },
    links: [
      link(
        'benjamin-hui-guo-rou',
        { it: 'Parte in causa', en: 'Party to the case' },
        {
          it: 'Benjamin fa sapere alla Corte che le accuse sono ritirate, così le guardie di Harkenburg possono raggiungerlo.',
          en: 'Benjamin has the court told that the charges are dropped, so Halkenburg’s guards can join him.',
        },
      ),
    ],
  },
  {
    id: 'hinrigh',
    chapter: 404,
    name: { it: 'Hinrigh', en: 'Hinrigh' },
    summary: {
      it: 'Il vicecapo degli Xi-Yu. Guida la ricerca di Hisoka da parte della famiglia.',
      en: 'The Xi-Yu underboss. He leads the family’s search for Hisoka.',
    },
    role: { it: 'Vicecapo degli Xi-Yu', en: 'Xi-Yu underboss' },
    affiliation: { it: 'Famiglia Xi-Yu', en: 'Xi-Yu Family' },
    met: 406,
    links: [
      link(
        'zakuro-custard',
        { it: 'Sottoposto', en: 'Subordinate' },
        {
          it: 'Spiega a Zakuro che la Lynch che lo ha svegliato era un’impostora e promette di vendicarla.',
          en: 'He tells Zakuro that the Lynch who woke him was an impostor and promises to avenge her.',
        },
      ),
    ],
  },
  {
    id: 'morena',
    chapter: 405,
    name: { it: 'Morena', en: 'Morena' },
    summary: {
      it: 'La giovane a capo degli Heil-Ly. Per i Cha-R è una discendente reale senza diritti di successione.',
      en: 'The young head of the Heil-Ly. The Cha-R describe her as a royal descendant with no right to the succession.',
    },
    role: { it: 'Capo degli Heil-Ly', en: 'Heil-Ly boss' },
    affiliation: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
    met: 407,
    links: [
      link(
        'borksen',
        { it: 'Prigioniera da reclutare', en: 'Captive she recruits' },
        {
          it: 'Quando Borksen si sveglia nel rifugio, le propone un gioco di carte per decidere se unirsi agli Heil-Ly.',
          en: 'When Borksen wakes in the hideout, she offers her a card game to decide whether she joins the Heil-Ly.',
        },
      ),
    ],
  },
  {
    id: 'risnorth',
    chapter: 405,
    name: { it: 'Risnorth', en: 'Risnorth' },
    summary: {
      it: 'Il presidente di Mom’s Help, un’associazione benefica per i bambini. Un notiziario sulla nave ricorda i dieci anni dal suo omicidio.',
      en: 'The chairman of Mom’s Help, a charity for children. A newscast on the ship marks ten years since his murder.',
    },
    role: {
      it: 'Presidente di un’associazione benefica',
      en: 'Charity chairman',
    },
    affiliation: { it: 'Mom’s Help', en: 'Mom’s Help' },
    status: 'deceased',
    links: [],
  },
  {
    id: 'onior',
    chapter: 410,
    name: { it: 'Onior', en: 'Onior' },
    summary: {
      it: 'Il capo degli Xi-Yu. Chowrai passa al secondo livello dalla sua residenza poco prima della legge marziale.',
      en: 'The Xi-Yu boss. Zhang Lei crosses to Tier 2 from his residence just before martial law.',
    },
    role: { it: 'Capo degli Xi-Yu', en: 'Xi-Yu boss' },
    affiliation: { it: 'Famiglia Xi-Yu', en: 'Xi-Yu Family' },
    links: [
      link(
        'zhang-lei-hui-guo-rou',
        {
          it: 'Principe passato per la sua residenza',
          en: 'Prince who crossed through his residence',
        },
        {
          it: 'Un soldato riferisce che Chowrai è passato al secondo livello dall’interno della sua residenza.',
          en: 'A soldier reports that Zhang Lei crossed to Tier 2 from inside his residence.',
        },
      ),
    ],
    // The soldiers take the Xi-Yu and Cha-R bosses to the Ministry of Justice (417).
    later: {
      status: [
        { ...at(410), value: 'alive' },
        { ...at(417), value: 'captured' },
      ],
    },
  },
  {
    id: 'kako',
    chapter: 411,
    name: { it: 'Kako', en: 'Kako' },
    summary: {
      it: 'Una delle guardie di Camilla. La capitana delle guardie chiede a Fukataki che Kako prenda il suo posto.',
      en: 'One of Camilla’s guards. The captain of the guards asks Fukataki to have Kako take over from her.',
    },
    role: { it: 'Guardia di Camilla', en: 'Camilla’s guard' },
    affiliation: { it: 'Guardie di Camilla', en: 'Camilla’s guards' },
    links: [
      link(
        'fukataki',
        { it: 'Maggiordoma', en: 'Majordomo' },
        {
          it: 'Fukataki dovrà dire a Kako di prendere il posto della capitana.',
          en: 'Fukataki is to tell Kako to take over from the captain.',
        },
      ),
    ],
  },
  {
    id: 'bill',
    chapter: 412,
    name: { it: 'Bill', en: 'Bill' },
    summary: {
      it: 'Un Hunter che protegge la stanza 1014 con Kurapika. Nota che Oito pronuncia il nome di Woble in due modi.',
      en: 'A Hunter who guards Room 1014 with Kurapika. He notices that Oito says Woble’s name two ways.',
    },
    role: { it: 'Guardia del corpo di Woble', en: 'Woble’s bodyguard' },
    affiliation: { it: 'Associazione Hunter', en: 'Hunter Association' },
    links: [
      link(
        'kurapika',
        { it: 'Collega di scorta', en: 'Fellow bodyguard' },
        {
          it: 'Sussurra a Kurapika ciò che ha notato nella pronuncia di Oito.',
          en: 'He whispers to Kurapika what he noticed in Oito’s pronunciation.',
        },
      ),
    ],
  },
  {
    id: 'shimanu',
    chapter: 412,
    name: { it: 'Shimanu', en: 'Shimanu' },
    summary: {
      it: 'La domestica della regina Oito. Corregge Kurapika: il suo nome è Shimanu, non Shimano.',
      en: 'Queen Oito’s maid. She tells Kurapika that her name is Shimanu, not Shimano.',
    },
    role: { it: 'Domestica della regina Oito', en: 'Queen Oito’s maid' },
    affiliation: {
      it: 'Personale della regina Oito',
      en: 'Queen Oito’s staff',
    },
    links: [
      link(
        'oito-hui-guo-rou',
        { it: 'Datrice di lavoro', en: 'Employer' },
        {
          it: 'Serve Oito nella stanza 1014 e prepara i pasti del bambino.',
          en: 'She serves Oito in Room 1014 and prepares the baby’s meals.',
        },
      ),
    ],
  },
  {
    id: 'rihan',
    chapter: 413,
    name: { it: 'Rihan', en: 'Rihan' },
    summary: {
      it: 'Un soldato di Benjamin assegnato a Tsubeppa. Benjamin lo manderà se i principi non arrivano nella stanza 1001.',
      en: 'One of Benjamin’s soldiers, posted with Tubeppa. Benjamin will send him in if the princes do not come to Room 1001.',
    },
    role: BENJAMIN_SOLDIER,
    affiliation: BENJAMIN_ARMY,
    links: [
      link('benjamin-hui-guo-rou', COMMANDER, {
        it: 'Benjamin ordina di mandarlo se i principi non arrivano nella stanza 1001 entro le 14:30.',
        en: 'Benjamin orders him sent in if the princes have not reached Room 1001 by 2:30 p.m.',
      }),
    ],
  },
  {
    id: 'saquelle',
    chapter: 413,
    name: { it: 'Saquelle', en: 'Saquelle' },
    summary: {
      it: 'Un soldato di Benjamin assegnato a Marayam. Benjamin gli affida il principe, che nessuno sa dove sia.',
      en: 'One of Benjamin’s soldiers, posted with Marayam. Benjamin leaves the missing prince to him.',
    },
    role: BENJAMIN_SOLDIER,
    affiliation: BENJAMIN_ARMY,
    links: [
      link('benjamin-hui-guo-rou', COMMANDER, {
        it: 'Benjamin gli lascia il compito di trovare Marayam.',
        en: 'Benjamin leaves the matter of Marayam’s whereabouts to him.',
      }),
    ],
  },
  {
    id: 'kanjidol',
    chapter: 415,
    name: { it: 'Kanjidol', en: 'Kanjidol' },
    summary: {
      it: 'Un soldato di Benjamin assegnato a Loozlus. Uccide le guardie del principe prima della legge marziale e finisce legato.',
      en: 'One of Benjamin’s soldiers, posted with Luzurus. He kills the prince’s guards before martial law and ends up tied up.',
    },
    role: BENJAMIN_SOLDIER,
    affiliation: BENJAMIN_ARMY,
    status: 'captured',
    links: [
      link('luzurus-hui-guo-rou', GUARDED, {
        it: 'Uccide le guardie di Loozlus nelle stanze della servitù prima della legge marziale.',
        en: 'He kills Luzurus’ guards in the servants’ quarters before martial law.',
      }),
    ],
  },
  {
    id: 'coventoba',
    chapter: 417,
    name: { it: 'Coventoba', en: 'Coventoba' },
    summary: {
      it: 'Un soldato di Benjamin assegnato a Chowrai. Un altro soldato riferisce che la bestia del principe lo ha manipolato e che ha chiesto di essere trattenuto.',
      en: 'One of Benjamin’s soldiers, posted with Zhang Lei. Another soldier reports that the prince’s beast manipulated him and that he asked to be held.',
    },
    role: BENJAMIN_SOLDIER,
    affiliation: BENJAMIN_ARMY,
    links: [
      link('zhang-lei-hui-guo-rou', GUARDED, {
        it: 'La bestia di Chowrai lo ha manipolato.',
        en: 'Zhang Lei’s beast manipulated him.',
      }),
    ],
  },
]

function dossierOf(filing: Filing): Dossier {
  const opened = at(filing.chapter)
  return {
    role: filing.role,
    log: filing.summary,
    affiliation: [{ ...opened, value: filing.affiliation }],
    status: [{ ...opened, value: filing.status ?? 'alive' }],
    ...(filing.links.length > 0 && {
      relationships: [
        { ...at(filing.met ?? filing.chapter), value: filing.links },
      ],
    }),
    ...filing.later,
  }
}

export const KAKIN_PHASE_5: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  entries: FILINGS.map(({ id, chapter, name, summary }) => ({
    id,
    kind: 'character',
    source: 'chapter',
    revealedAtEpisode: 148,
    revealedAtChapter: chapter,
    name,
    summary,
    visual: { art: id, tint: 'violet' },
  })),
  dossiers: Object.fromEntries(
    FILINGS.map((filing) => [filing.id, dossierOf(filing)]),
  ),
}
