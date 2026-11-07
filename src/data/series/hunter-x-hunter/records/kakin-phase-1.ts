import type { Relationship } from '~/data/types'

import type { HunterSaga } from './saga'

type Dossier = HunterSaga['dossiers'][string]
type Link = Relationship
type Name = Record<'en' | 'it', string>

// One gate for the chapter 349 roster, one for the chapter 350 bodyguard hires.
const ROSTER = { episode: 148, chapter: 349, source: 'chapter' } as const
const HIRES = { episode: 148, chapter: 350, source: 'chapter' } as const
const ROYAL_FAMILY = { it: 'Famiglia reale di Cakin', en: 'Kakin royal family' }

const SIBLING: Link = {
  character: 'tserriednich-hui-guo-rou',
  type: { it: 'Fratello o sorella', en: 'Sibling' },
  summary: {
    it: 'È un altro dei quattordici figli del re.',
    en: 'Is another of the king’s fourteen children.',
  },
}

function mother(character: string, name: Name): Link {
  return {
    character,
    type: { it: 'Madre', en: 'Mother' },
    summary: {
      it: `${name.it} è sua madre.`,
      en: `${name.en} is their mother.`,
    },
  }
}

function bodyguard(character: string, name: Name): Link {
  return {
    character,
    type: { it: 'Guardia del corpo', en: 'Bodyguard' },
    summary: {
      it: `${name.it} accetta il lavoro di scorta per il viaggio.`,
      en: `${name.en} takes the bodyguard job for the voyage.`,
    },
  }
}

function child(character: string, name: Name): Link {
  return {
    character,
    type: { it: 'Figlio o figlia', en: 'Child' },
    summary: {
      it: `Ha avuto ${name.it} dal re.`,
      en: `${name.en} is her child with the king.`,
    },
  }
}

/** A prince named in the chapter 349 roster, and their chapter 350 bodyguard. */
function prince(role: Name, mom: Link | undefined, guard?: Link): Dossier {
  const family = mom === undefined ? [SIBLING] : [mom, SIBLING]
  return {
    role,
    log: {
      it: 'I figli delle mogli legittime del re possono partecipare alla successione. Devono salire sulla nave e prendere parte alla cerimonia di partenza.',
      en: 'The children of the king’s legal wives may compete for the succession. They must board the ship and attend the departure ceremony.',
    },
    affiliation: [{ ...ROSTER, value: ROYAL_FAMILY }],
    status: [{ ...ROSTER, value: 'alive' }],
    relationships: [
      { ...ROSTER, value: family },
      ...(guard === undefined ? [] : [{ ...HIRES, value: [...family, guard] }]),
    ],
  }
}

/** One of the king's legal wives, named with her children at chapter 349. */
function queen(role: Name, children: Link[]): Dossier {
  return {
    role,
    log: {
      it: 'È una delle otto mogli legittime del re. I suoi figli possono partecipare alla successione.',
      en: 'She is one of the king’s eight legal wives. Her children may take part in the succession contest.',
    },
    affiliation: [{ ...ROSTER, value: ROYAL_FAMILY }],
    status: [{ ...ROSTER, value: 'alive' }],
    relationships: [{ ...ROSTER, value: children }],
  }
}

/** Manga-only introductions; chapter 349 prints the fourteen-prince roster. */
export const KAKIN_PHASE_ONE: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  entries: [
    {
      id: 'beyond-netero',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 340,
      source: 'chapter',
      name: { it: 'Beyond Netero', en: 'Beyond Netero' },
      summary: {
        it: 'Il figlio di Netero. Viene presentato come guida della spedizione di Cakin verso il Continente Oscuro.',
        en: 'Netero’s son. He is introduced as the leader of Kakin’s expedition to the Dark Continent.',
      },
      visual: { art: 'beyond-netero', tint: 'violet' },
    },
    {
      id: 'golem',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 347,
      source: 'chapter',
      name: { it: 'Golem', en: 'Golem' },
      summary: {
        it: 'Un mercenario della squadra di Beyond. Crea le armi usate dagli altri soldati.',
        en: 'A mercenary in Beyond’s team who creates the weapons used by the other soldiers.',
      },
      visual: { art: 'golem', tint: 'violet' },
    },
    {
      id: 'benjamin-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Benjamin Hoicoro', en: 'Benjamin Hui Guo Rou' },
      summary: {
        it: 'Primo principe di Cakin, uno dei quattordici figli del re.',
        en: 'First Prince of Kakin, one of the king’s fourteen children.',
      },
      visual: { art: 'benjamin-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'camilla-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Camilla Hoicoro', en: 'Camilla Hui Guo Rou' },
      summary: {
        it: 'Secondo principe di Cakin, uno dei quattordici figli del re.',
        en: 'Second Prince of Kakin, one of the king’s fourteen children.',
      },
      visual: { art: 'camilla-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'zhang-lei-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Chowrai Hoicoro', en: 'Zhang Lei Hui Guo Rou' },
      summary: {
        it: 'Terzo principe di Cakin, uno dei quattordici figli del re.',
        en: 'Third Prince of Kakin, one of the king’s fourteen children.',
      },
      visual: { art: 'zhang-lei-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'tserriednich-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 343,
      source: 'chapter',
      name: { it: 'Tserriednich Hoicoro', en: 'Tserriednich Hui Guo Rou' },
      summary: {
        it: 'Il quarto principe di Cakin. Mizaistom lo identifica come il proprietario di una collezione di occhi scarlatti.',
        en: 'The Fourth Prince of Kakin. Mizaistom identifies him as the owner of a collection of Scarlet Eyes.',
      },
      visual: { art: 'tserriednich-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'tubeppa-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Tsubeppa Hoicoro', en: 'Tubeppa Hui Guo Rou' },
      summary: {
        it: 'Quinto principe di Cakin, uno dei quattordici figli del re.',
        en: 'Fifth Prince of Kakin, one of the king’s fourteen children.',
      },
      visual: { art: 'tubeppa-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'tyson-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Tyson Hoicoro', en: 'Tyson Hui Guo Rou' },
      summary: {
        it: 'Sesto principe di Cakin, uno dei quattordici figli del re.',
        en: 'Sixth Prince of Kakin, one of the king’s fourteen children.',
      },
      visual: { art: 'tyson-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'luzurus-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Loozlus Hoicoro', en: 'Luzurus Hui Guo Rou' },
      summary: {
        it: 'Settimo principe di Cakin, uno dei quattordici figli del re.',
        en: 'Seventh Prince of Kakin, one of the king’s fourteen children.',
      },
      visual: { art: 'luzurus-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'sale-sale-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Saresare Hoicoro', en: 'Salé-salé Hui Guo Rou' },
      summary: {
        it: 'Ottavo principe di Cakin, uno dei quattordici figli del re.',
        en: 'Eighth Prince of Kakin, one of the king’s fourteen children.',
      },
      visual: { art: 'sale-sale-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'halkenburg-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Harkenburg Hoicoro', en: 'Halkenburg Hui Guo Rou' },
      summary: {
        it: 'Nono principe di Cakin, uno dei quattordici figli del re.',
        en: 'Ninth Prince of Kakin, one of the king’s fourteen children.',
      },
      visual: { art: 'halkenburg-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'kacho-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Kachow Hoicoro', en: 'Kacho Hui Guo Rou' },
      summary: {
        it: 'Decimo principe di Cakin, uno dei quattordici figli del re.',
        en: 'Tenth Prince of Kakin, one of the king’s fourteen children.',
      },
      visual: { art: 'kacho-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'fugetsu-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Fugetsu Hoicoro', en: 'Fugetsu Hui Guo Rou' },
      summary: {
        it: 'Undicesimo principe di Cakin, uno dei quattordici figli del re.',
        en: 'Eleventh Prince of Kakin, one of the king’s fourteen children.',
      },
      visual: { art: 'fugetsu-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'momoze-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Momoze Hoicoro', en: 'Momoze Hui Guo Rou' },
      summary: {
        it: 'Dodicesimo principe di Cakin, uno dei quattordici figli del re.',
        en: 'Twelfth Prince of Kakin, one of the king’s fourteen children.',
      },
      visual: { art: 'momoze-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'marayam-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Marayam Hoicoro', en: 'Marayam Hui Guo Rou' },
      summary: {
        it: 'Tredicesimo principe di Cakin, uno dei quattordici figli del re.',
        en: 'Thirteenth Prince of Kakin, one of the king’s fourteen children.',
      },
      visual: { art: 'marayam-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'woble-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Woble Hoicoro', en: 'Woble Hui Guo Rou' },
      summary: {
        it: 'Quattordicesimo principe di Cakin, uno dei quattordici figli del re.',
        en: 'Fourteenth Prince of Kakin, one of the king’s fourteen children.',
      },
      visual: { art: 'woble-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'izunavi',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 350,
      source: 'chapter',
      name: { it: 'Izunabi', en: 'Izunavi' },
      summary: {
        it: 'Il maestro di Nen di Kurapika. Accetta un lavoro di scorta per il viaggio di Cakin.',
        en: 'Kurapika’s Nen teacher. He takes a bodyguard job for Kakin’s voyage.',
      },
      visual: { art: 'izunavi', tint: 'violet' },
    },
    {
      id: 'unma-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Unma Hoicoro', en: 'Unma Hui Guo Rou' },
      summary: {
        it: 'Prima regina di Cakin, una delle otto mogli del re.',
        en: 'First Queen of Kakin, one of the king’s eight wives.',
      },
      visual: { art: 'unma-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'duazul-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Duazul Hoicoro', en: 'Duazul Hui Guo Rou' },
      summary: {
        it: 'Seconda regina di Cakin, una delle otto mogli del re.',
        en: 'Second Queen of Kakin, one of the king’s eight wives.',
      },
      visual: { art: 'duazul-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'tang-zhao-li-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Towchowrai Hoicoro', en: 'Tang Zhao Li Hui Guo Rou' },
      summary: {
        it: 'Terza regina di Cakin, una delle otto mogli del re.',
        en: 'Third Queen of Kakin, one of the king’s eight wives.',
      },
      visual: { art: 'tang-zhao-li-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'katrono-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Katrono Hoicoro', en: 'Katrono Hui Guo Rou' },
      summary: {
        it: 'Quarta regina di Cakin, una delle otto mogli del re.',
        en: 'Fourth Queen of Kakin, one of the king’s eight wives.',
      },
      visual: { art: 'katrono-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'swinko-swinko-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Swinko-swinko Hoicoro', en: 'Swinko-swinko Hui Guo Rou' },
      summary: {
        it: 'Quinta regina di Cakin, una delle otto mogli del re.',
        en: 'Fifth Queen of Kakin, one of the king’s eight wives.',
      },
      visual: { art: 'swinko-swinko-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'seiko-hui-guo-rou',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 349,
      source: 'chapter',
      name: { it: 'Seiko Hoicoro', en: 'Seiko Hui Guo Rou' },
      summary: {
        it: 'Sesta regina di Cakin, una delle otto mogli del re.',
        en: 'Sixth Queen of Kakin, one of the king’s eight wives.',
      },
      visual: { art: 'seiko-hui-guo-rou', tint: 'violet' },
    },
    {
      id: 'zigg-zoldyck',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 344,
      source: 'chapter',
      name: { it: 'Zigg Zoldick', en: 'Zigg Zoldyck' },
      summary: {
        it: 'Un membro della famiglia Zoldick che accompagna Netero in una spedizione al Continente Oscuro.',
        en: 'A member of the Zoldyck family who accompanies Netero on an expedition to the Dark Continent.',
      },
      visual: { art: 'zigg-zoldyck', tint: 'violet' },
    },
    {
      id: 'curly',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 346,
      source: 'chapter',
      name: { it: 'Curly', en: 'Curly' },
      summary: {
        it: 'Un professore della squadra di Beyond. Sfida Ging nella conoscenza di una lingua antica.',
        en: 'A professor in Beyond’s team who challenges Ging’s knowledge of an ancient language.',
      },
      visual: { art: 'curly', tint: 'violet' },
    },
    {
      id: 'mark',
      kind: 'character',
      revealedAtEpisode: 148,
      revealedAtChapter: 345,
      source: 'chapter',
      name: { it: 'Mark', en: 'Mark' },
      summary: {
        it: 'Un assistente del quarto principe di Cakin che invita due donne nel suo hotel.',
        en: 'An assistant to the Fourth Prince of Kakin who invites two women to his hotel.',
      },
      visual: { art: 'mark', tint: 'violet' },
    },
  ],
  dossiers: {
    'benjamin-hui-guo-rou': prince(
      { it: 'Primo principe di Cakin', en: 'First Prince of Kakin' },
      mother('unma-hui-guo-rou', { it: 'Unma', en: 'Unma' }),
    ),
    'camilla-hui-guo-rou': {
      ...prince(
        { it: 'Secondo principe di Cakin', en: 'Second Prince of Kakin' },
        mother('duazul-hui-guo-rou', { it: 'Duazul', en: 'Duazul' }),
      ),
      // Arrested and put in solitary confinement (373); after the trial she is
      // back in her quarters, only watched (376, #1157).
      status: [
        { ...ROSTER, value: 'alive' },
        { ...ROSTER, chapter: 373, value: 'imprisoned' },
        { ...ROSTER, chapter: 376, value: 'alive' },
      ],
    },
    'zhang-lei-hui-guo-rou': prince(
      { it: 'Terzo principe di Cakin', en: 'Third Prince of Kakin' },
      mother('tang-zhao-li-hui-guo-rou', {
        it: 'Towchowrai',
        en: 'Tang Zhao Li',
      }),
    ),
    'tserriednich-hui-guo-rou': {
      role: { it: 'Quarto principe di Cakin', en: 'Fourth Prince of Kakin' },
      log: {
        it: 'Mizaistom mostra la sua immagine a Kurapika. Ha trovato il proprietario degli occhi durante i controlli sui passeggeri della spedizione.',
        en: 'Mizaistom shows Kurapika his picture. He found the owner of the eyes while checking the expedition’s passengers.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 343,
          source: 'chapter',
          value: { it: 'Famiglia reale di Cakin', en: 'Kakin royal family' },
        },
      ],
      status: [
        { episode: 148, chapter: 343, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 349,
          source: 'chapter',
          value: [
            {
              character: 'unma-hui-guo-rou',
              type: { it: 'Madre', en: 'Mother' },
              summary: { it: 'Unma è sua madre.', en: 'Unma is their mother.' },
            },
            {
              character: 'woble-hui-guo-rou',
              type: { it: 'Fratello o sorella', en: 'Sibling' },
              summary: {
                it: 'È un altro dei quattordici figli del re.',
                en: 'Is another of the king’s fourteen children.',
              },
            },
          ],
        },
      ],
    },
    'tubeppa-hui-guo-rou': prince(
      { it: 'Quinto principe di Cakin', en: 'Fifth Prince of Kakin' },
      mother('duazul-hui-guo-rou', { it: 'Duazul', en: 'Duazul' }),
    ),
    'tyson-hui-guo-rou': prince(
      { it: 'Sesto principe di Cakin', en: 'Sixth Prince of Kakin' },
      mother('katrono-hui-guo-rou', { it: 'Katrono', en: 'Katrono' }),
      bodyguard('izunavi', { it: 'Izunabi', en: 'Izunavi' }),
    ),
    'luzurus-hui-guo-rou': prince(
      { it: 'Settimo principe di Cakin', en: 'Seventh Prince of Kakin' },
      mother('duazul-hui-guo-rou', { it: 'Duazul', en: 'Duazul' }),
      bodyguard('basho', { it: 'Basho', en: 'Basho' }),
    ),
    'sale-sale-hui-guo-rou': {
      ...prince(
        { it: 'Ottavo principe di Cakin', en: 'Eighth Prince of Kakin' },
        mother('swinko-swinko-hui-guo-rou', {
          it: 'Swinko-swinko',
          en: 'Swinko-swinko',
        }),
      ),
      // Killed by Yushohi’s ability (382, #1136).
      status: [
        { ...ROSTER, value: 'alive' },
        { ...ROSTER, chapter: 382, value: 'deceased' },
      ],
    },
    'halkenburg-hui-guo-rou': {
      ...prince(
        { it: 'Nono principe di Cakin', en: 'Ninth Prince of Kakin' },
        mother('duazul-hui-guo-rou', { it: 'Duazul', en: 'Duazul' }),
      ),
      // Taken into custody by a special task force (389, #1157); his body dies
      // in the Tier 3 hospital and the ship is told (404, #1138).
      status: [
        { ...ROSTER, value: 'alive' },
        { ...ROSTER, chapter: 389, value: 'imprisoned' },
        { ...ROSTER, chapter: 404, value: 'deceased' },
      ],
    },
    'kacho-hui-guo-rou': {
      ...prince(
        { it: 'Decimo principe di Cakin', en: 'Tenth Prince of Kakin' },
        mother('seiko-hui-guo-rou', { it: 'Seiko', en: 'Seiko' }),
        bodyguard('melody', { it: 'Melody', en: 'Melody' }),
      ),
      // Dies escaping with Fugetsu (383, #1136); the figure beside Fugetsu afterwards is her Nen beast.
      status: [
        { ...ROSTER, value: 'alive' },
        { ...ROSTER, chapter: 383, value: 'deceased' },
      ],
    },
    'fugetsu-hui-guo-rou': prince(
      { it: 'Undicesimo principe di Cakin', en: 'Eleventh Prince of Kakin' },
      mother('seiko-hui-guo-rou', { it: 'Seiko', en: 'Seiko' }),
    ),
    'momoze-hui-guo-rou': {
      ...prince(
        { it: 'Dodicesimo principe di Cakin', en: 'Twelfth Prince of Kakin' },
        undefined,
        bodyguard('hanzo', { it: 'Hanzo', en: 'Hanzo' }),
      ),
      // Suffocated in her room in chapter 368 (phase 2, #1135).
      status: [
        { ...ROSTER, value: 'alive' },
        { ...ROSTER, chapter: 368, value: 'deceased' },
      ],
    },
    'marayam-hui-guo-rou': prince(
      { it: 'Tredicesimo principe di Cakin', en: 'Thirteenth Prince of Kakin' },
      undefined,
      bodyguard('biscuit-krueger', { it: 'Biscuit', en: 'Biscuit' }),
    ),
    'woble-hui-guo-rou': {
      ...prince(
        {
          it: 'Quattordicesimo principe di Cakin',
          en: 'Fourteenth Prince of Kakin',
        },
        undefined,
        bodyguard('kurapika', { it: 'Kurapika', en: 'Kurapika' }),
      ),
      // The baby in Room 1014 is Oito’s nephew; she does not know where her
      // daughter is (412, #1138).
      status: [
        { ...ROSTER, value: 'alive' },
        { ...ROSTER, chapter: 412, value: 'missing' },
      ],
    },
    'beyond-netero': {
      role: { it: 'Capo della spedizione', en: 'Expedition leader' },
      log: {
        it: 'Nel video annuncia che accoglierà chiunque voglia partecipare al viaggio. I membri dello Zodiaco non sapevano che Netero avesse un figlio.',
        en: 'In the video he invites anyone who wants to join the voyage. The Zodiacs did not know Netero had a son.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 340,
          source: 'chapter',
          value: { it: 'Spedizione di Cakin', en: 'Kakin expedition' },
        },
      ],
      status: [
        { episode: 148, chapter: 340, source: 'chapter', value: 'alive' },
        { episode: 148, chapter: 341, source: 'chapter', value: 'captured' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 340,
          source: 'chapter',
          value: [
            {
              character: 'netero',
              type: { it: 'Padre', en: 'Father' },
              summary: {
                it: 'Il re presenta Beyond come figlio del precedente presidente dell’Associazione Hunter.',
                en: 'The king introduces Beyond as the son of the Hunter Association’s former chairman.',
              },
            },
            {
              character: 'pariston-hill',
              type: { it: 'Membro della spedizione', en: 'Expedition member' },
              summary: {
                it: 'Pariston si trova con i suoi collaboratori quando Beyond parla del viaggio.',
                en: 'Pariston stands with his associates as Beyond speaks about the voyage.',
              },
            },
          ],
        },
        {
          episode: 148,
          chapter: 341,
          source: 'chapter',
          value: [
            {
              character: 'netero',
              type: { it: 'Padre', en: 'Father' },
              summary: {
                it: 'Il re presenta Beyond come figlio del precedente presidente dell’Associazione Hunter.',
                en: 'The king introduces Beyond as the son of the Hunter Association’s former chairman.',
              },
            },
            {
              character: 'pariston-hill',
              type: { it: 'Membro della spedizione', en: 'Expedition member' },
              summary: {
                it: 'Pariston si trova con i suoi collaboratori quando Beyond parla del viaggio.',
                en: 'Pariston stands with his associates as Beyond speaks about the voyage.',
              },
            },
            {
              character: 'cheadle-yorkshire',
              type: {
                it: 'Presidente a cui si consegna',
                en: 'Chairman he surrenders to',
              },
              summary: {
                it: 'Beyond si presenta allo Zodiaco e chiede di annunciare la sua cattura.',
                en: 'Beyond appears before the Zodiacs and asks them to announce his capture.',
              },
            },
          ],
        },
      ],
    },
    'golem': {
      role: { it: 'Mercenario della spedizione', en: 'Expedition mercenary' },
      log: {
        it: 'Dice a Ging che i compagni usano il nome Golem e rifiuta altre domande su chi ci sia dentro. Le sue armi sparano i proiettili prodotti da un altro utilizzatore di Nen.',
        en: 'Tells Ging that the comrades use the name Golem and refuses further questions about who is inside. Its weapons fire bullets produced by another Nen user.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 347,
          source: 'chapter',
          value: {
            it: 'Squadra di Beyond, unità Stone Wall',
            en: 'Beyond’s team, Stone Wall unit',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 347, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 347,
          source: 'chapter',
          value: [
            {
              character: 'beyond-netero',
              type: { it: 'Capo della spedizione', en: 'Expedition leader' },
              summary: {
                it: 'Fa parte della squadra riunita per il viaggio di Beyond.',
                en: 'Belongs to the team assembled for Beyond’s voyage.',
              },
            },
            {
              character: 'ging-freecss',
              type: { it: 'Nuovo numero due', en: 'New number two' },
              summary: {
                it: 'Ging esamina il funzionamento delle sue armi e accetta che gli ordini sul campo restino ai soldati.',
                en: 'Ging examines how its weapons work and accepts that battlefield orders remain with the soldiers.',
              },
            },
          ],
        },
      ],
    },
    'izunavi': {
      role: {
        it: 'Maestro di Nen e guardia del corpo',
        en: 'Nen teacher and bodyguard',
      },
      log: {
        it: 'Kurapika lo riunisce con altri Hunter per cercare informazioni sul quarto principe. Viene assunto dal sesto principe.',
        en: 'Kurapika brings him together with other Hunters to seek information about the Fourth Prince. The Sixth Prince hires him.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 350,
          source: 'chapter',
          value: { it: 'Scorta di Tyson', en: 'Tyson’s bodyguards' },
        },
      ],
      status: [
        { episode: 148, chapter: 350, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 350,
          source: 'chapter',
          value: [
            {
              character: 'kurapika',
              type: { it: 'Allievo', en: 'Student' },
              summary: {
                it: 'Kurapika gli chiede di prendere parte al lavoro di scorta.',
                en: 'Kurapika asks him to take part in the bodyguard assignment.',
              },
            },
            {
              character: 'tyson-hui-guo-rou',
              type: { it: 'Datore di lavoro', en: 'Employer' },
              summary: {
                it: 'Il sesto principe lo assume per il viaggio.',
                en: 'The Sixth Prince hires him for the voyage.',
              },
            },
          ],
        },
      ],
    },
    'unma-hui-guo-rou': queen(
      { it: 'Prima regina di Cakin', en: 'First Queen of Kakin' },
      [
        child('benjamin-hui-guo-rou', { it: 'Benjamin', en: 'Benjamin' }),
        child('tserriednich-hui-guo-rou', {
          it: 'Tserriednich',
          en: 'Tserriednich',
        }),
      ],
    ),
    'duazul-hui-guo-rou': queen(
      { it: 'Seconda regina di Cakin', en: 'Second Queen of Kakin' },
      [
        child('camilla-hui-guo-rou', { it: 'Camilla', en: 'Camilla' }),
        child('tubeppa-hui-guo-rou', { it: 'Tsubeppa', en: 'Tubeppa' }),
        child('luzurus-hui-guo-rou', { it: 'Loozlus', en: 'Luzurus' }),
        child('halkenburg-hui-guo-rou', { it: 'Harkenburg', en: 'Halkenburg' }),
      ],
    ),
    'tang-zhao-li-hui-guo-rou': queen(
      { it: 'Terza regina di Cakin', en: 'Third Queen of Kakin' },
      [child('zhang-lei-hui-guo-rou', { it: 'Chowrai', en: 'Zhang Lei' })],
    ),
    'katrono-hui-guo-rou': queen(
      { it: 'Quarta regina di Cakin', en: 'Fourth Queen of Kakin' },
      [child('tyson-hui-guo-rou', { it: 'Tyson', en: 'Tyson' })],
    ),
    'swinko-swinko-hui-guo-rou': queen(
      { it: 'Quinta regina di Cakin', en: 'Fifth Queen of Kakin' },
      [child('sale-sale-hui-guo-rou', { it: 'Saresare', en: 'Salé-salé' })],
    ),
    'seiko-hui-guo-rou': queen(
      { it: 'Sesta regina di Cakin', en: 'Sixth Queen of Kakin' },
      [
        child('kacho-hui-guo-rou', { it: 'Kachow', en: 'Kacho' }),
        child('fugetsu-hui-guo-rou', { it: 'Fugetsu', en: 'Fugetsu' }),
      ],
    ),
    'zigg-zoldyck': {
      role: {
        it: 'Compagno di spedizione di Netero',
        en: 'Netero’s expedition companion',
      },
      log: {
        it: 'Ging racconta il viaggio di Netero, Linne e Zigg. I tre si trovano davanti a creature molto più grandi di loro.',
        en: 'Ging recounts Netero, Linne and Zigg’s journey. The three face creatures much larger than themselves.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 344,
          source: 'chapter',
          value: { it: 'Famiglia Zoldick', en: 'Zoldyck family' },
        },
      ],
      status: [
        { episode: 148, chapter: 344, source: 'chapter', value: 'unknown' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 344,
          source: 'chapter',
          value: [
            {
              character: 'netero',
              type: {
                it: 'Compagno di spedizione',
                en: 'Expedition companion',
              },
              summary: {
                it: 'Partecipa con lui al viaggio di cui Ging racconta.',
                en: 'He joins him on the journey Ging describes.',
              },
            },
            {
              character: 'linne-horsdoeuvre',
              type: {
                it: 'Compagna di spedizione',
                en: 'Expedition companion',
              },
              summary: {
                it: 'Linne viaggia con lui e Netero nel Continente Oscuro.',
                en: 'Linne travels with him and Netero in the Dark Continent.',
              },
            },
          ],
        },
      ],
    },
    'curly': {
      role: {
        it: 'Professore universitario e Hunter a contratto',
        en: 'University professor and Temp Hunter',
      },
      log: {
        it: 'Perde la gara linguistica contro Ging e accetta il suo denaro, destinandolo a un fondo per borse di studio.',
        en: 'He loses the language contest against Ging and accepts his money, directing it to a scholarship fund.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 346,
          source: 'chapter',
          value: {
            it: 'Università di Varvard, squadra di Beyond',
            en: 'Varvard University, Beyond’s team',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 346, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 346,
          source: 'chapter',
          value: [
            {
              character: 'beyond-netero',
              type: { it: 'Capo della spedizione', en: 'Expedition leader' },
              summary: {
                it: 'Fa parte della squadra di specialisti riunita per il suo viaggio.',
                en: 'He belongs to the team of specialists assembled for his voyage.',
              },
            },
            {
              character: 'ging-freecss',
              type: { it: 'Vincitore della sfida', en: 'Contest winner' },
              summary: {
                it: 'Ging lo batte nella gara e gli trasferisce il denaro promesso.',
                en: 'Ging beats him in the contest and transfers the promised money.',
              },
            },
          ],
        },
      ],
    },
    'mark': {
      role: { it: 'Assistente personale', en: 'Personal assistant' },
      log: {
        it: 'Il principe lo chiama dopo l’incontro e gli ordina di trovare altre due donne.',
        en: 'The prince calls him after the meeting and orders him to find two more women.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 345,
          source: 'chapter',
          value: {
            it: 'Personale di Tserriednich',
            en: 'Tserriednich’s staff',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 345, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 345,
          source: 'chapter',
          value: [
            {
              character: 'tserriednich-hui-guo-rou',
              type: { it: 'Datore di lavoro', en: 'Employer' },
              summary: {
                it: 'Invita le donne a incontrare il principe e riceve i suoi ordini al telefono.',
                en: 'He invites the women to meet the prince and receives his orders over the phone.',
              },
            },
          ],
        },
      ],
    },
  },
}
