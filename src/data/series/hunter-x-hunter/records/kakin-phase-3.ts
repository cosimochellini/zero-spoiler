import type { HunterSaga } from './saga'

/** Manga-only naming scenes in chapters 371–383. */
export const KAKIN_PHASE_THREE: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  entries: [
    {
      id: 'vergei',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 373,
      name: { it: 'Vergei', en: 'Vergei' },
      summary: {
        it: 'Si presenta a Kurapika al telefono. Vuole informazioni su ciò che accade negli alloggi del principe che protegge.',
        en: 'He introduces himself to Kurapika over the phone. He wants information about what is happening in the quarters of the prince he guards.',
      },
      visual: { art: 'vergei', tint: 'violet' },
    },
    {
      id: 'ken-i-wang',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 379,
      name: { it: "Ken'i Wang", en: "Ken'i Wang" },
      summary: {
        it: 'Si presenta a tre membri della Brigata e chiede se abbiano attaccato i custodi del magazzino. Propone poi una collaborazione.',
        en: 'He introduces himself to three Troupe members and asks whether they attacked the warehouse keepers. He then proposes cooperation.',
      },
      visual: { art: 'ken-i-wang', tint: 'violet' },
    },
    {
      id: 'cashew',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 379,
      name: { it: 'Cashew', en: 'Cashew' },
      summary: {
        it: 'Si presenta come testimone di una strage. Mescola verità e menzogne per ostacolare l’indagine.',
        en: 'She poses as a witness to a massacre. She mixes truth and lies to obstruct the investigation.',
      },
      visual: { art: 'cashew', tint: 'violet' },
    },
    {
      id: 'keeney',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 381,
      name: { it: 'Keeney', en: 'Keeney' },
      summary: {
        it: 'Uno degli Hunter di guardia a Kachow. Un messaggio in codice gli affida un incarico.',
        en: 'One of Kacho’s Hunter guards. A coded message puts him in charge of an assignment.',
      },
      visual: { art: 'keeney', tint: 'violet' },
    },
  ],
  dossiers: {
    'vergei': {
      role: {
        it: 'Guardia del tredicesimo principe',
        en: 'Thirteenth Prince’s guard',
      },
      log: {
        it: 'Si presenta a Kurapika al telefono. Vuole informazioni su ciò che accade negli alloggi del principe che protegge.',
        en: 'He introduces himself to Kurapika over the phone. He wants information about what is happening in the quarters of the prince he guards.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 373,
          source: 'chapter',
          value: {
            it: 'Personale del tredicesimo principe',
            en: 'Thirteenth Prince’s staff',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 373, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 373,
          source: 'chapter',
          value: [
            {
              character: 'kurapika',
              type: { it: 'Hunter che interroga', en: 'Hunter he questions' },
              summary: {
                it: 'Lo contatta per chiedergli informazioni sulla situazione negli alloggi del principe.',
                en: 'He contacts him to ask about the situation in the prince’s quarters.',
              },
            },
          ],
        },
        {
          episode: 148,
          chapter: 375,
          source: 'chapter',
          value: [
            {
              character: 'biscuit-krueger',
              type: { it: 'Insegnante di Nen', en: 'Nen teacher' },
              summary: {
                it: 'Dopo aver visto il suo vero aspetto, le chiede di insegnargli il Nen.',
                en: 'After seeing her true appearance, he asks her to teach him Nen.',
              },
            },
            {
              character: 'kurapika',
              type: { it: 'Hunter che interroga', en: 'Hunter he questions' },
              summary: {
                it: 'Lo contatta per chiedergli informazioni sulla situazione negli alloggi del principe.',
                en: 'He contacts him to ask about the situation in the prince’s quarters.',
              },
            },
          ],
        },
      ],
    },
    'ken-i-wang': {
      role: {
        it: 'Sottocapo della famiglia Cha-R',
        en: 'Cha-R Family underboss',
      },
      log: {
        it: 'Si presenta a tre membri della Brigata e chiede se abbiano attaccato i custodi del magazzino. Propone poi una collaborazione.',
        en: 'He introduces himself to three Troupe members and asks whether they attacked the warehouse keepers. He then proposes cooperation.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 379,
          source: 'chapter',
          value: { it: 'Famiglia Cha-R', en: 'Cha-R Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 379, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 379,
          source: 'chapter',
          value: [
            {
              character: 'nobunaga',
              type: { it: 'Interlocutore', en: 'Person he negotiates with' },
              summary: {
                it: 'Chiede ai tre membri della Brigata se abbiano attaccato i custodi del suo magazzino, poi propone di collaborare.',
                en: 'He asks the three Troupe members whether they attacked his warehouse keepers, then proposes cooperation.',
              },
            },
          ],
        },
      ],
    },
    'cashew': {
      role: {
        it: 'Membro della famiglia Heil-Ly',
        en: 'Heil-Ly Family member',
      },
      log: {
        it: 'Si presenta come testimone di una strage. Mescola verità e menzogne per ostacolare l’indagine.',
        en: 'She poses as a witness to a massacre. She mixes truth and lies to obstruct the investigation.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 379,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 379, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 379,
          source: 'chapter',
          value: [
            {
              character: 'mizaistom-nana',
              type: {
                it: 'Investigatore che inganna',
                en: 'Investigator she deceives',
              },
              summary: {
                it: 'Gli racconta una versione alterata della strage e del modo in cui l’assassino è fuggito.',
                en: 'She gives him an altered account of the massacre and the killer’s escape.',
              },
            },
          ],
        },
      ],
    },
    'keeney': {
      role: {
        it: 'Hunter e guardia del decimo principe',
        en: 'Hunter and Tenth Prince’s guard',
      },
      log: {
        it: 'Uno degli Hunter di guardia a Kachow. Un messaggio in codice gli affida un incarico.',
        en: 'One of Kacho’s Hunter guards. A coded message puts him in charge of an assignment.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 381,
          source: 'chapter',
          value: {
            it: 'Associazione Hunter; personale del decimo principe',
            en: 'Hunter Association; Tenth Prince’s staff',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 381, source: 'chapter', value: 'alive' },
        { episode: 148, chapter: 383, source: 'chapter', value: 'deceased' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 383,
          source: 'chapter',
          value: [
            {
              character: 'melody',
              type: {
                it: 'Complice nel piano di fuga',
                en: 'Accomplice in the escape plan',
              },
              summary: {
                it: 'Mentre lei suona per distrarre i presenti, accompagna i principi alla scialuppa.',
                en: 'While she plays to distract the audience, he escorts the princes to the lifeboat.',
              },
            },
          ],
        },
      ],
    },
  },
}
