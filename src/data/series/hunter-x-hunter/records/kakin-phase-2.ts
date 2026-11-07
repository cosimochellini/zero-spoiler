import type { HunterSaga } from './saga'

type Dossier = HunterSaga['dossiers'][string]
type Name = Record<'en' | 'it', string>

interface Pair {
  log: Name
  role: Name
  staff: Name
  together: Name
}

// The class at chapter 370: every attendee's facts open at their introduction.
const CLASS = { episode: 148, chapter: 370, source: 'chapter' } as const

const ELEVENTH_MAIDS: Pair = {
  role: {
    it: 'Domestica dell’undicesimo principe',
    en: 'Eleventh Prince’s maid',
  },
  log: {
    it: 'Viene mandata al corso di Nen al posto delle guardie. Si presenta insieme agli altri partecipanti.',
    en: 'She is sent to the Nen class instead of the guards. She introduces herself with the other participants.',
  },
  staff: {
    it: 'Personale dell’undicesimo principe',
    en: 'Eleventh Prince’s staff',
  },
  together: {
    it: 'Vengono mandate insieme al corso di Nen al posto delle guardie.',
    en: 'They are sent to the Nen class together instead of the guards.',
  },
}

const NINTH_GUARDS: Pair = {
  role: { it: 'Guardia del nono principe', en: 'Ninth Prince’s guard' },
  log: {
    it: 'Partecipa al corso per conoscere le bestie di Nen. Porta sulla mano un segno a forma di piuma.',
    en: 'He attends the class to learn about Nen beasts. He has a feather-shaped mark on his hand.',
  },
  staff: { it: 'Personale del nono principe', en: 'Ninth Prince’s staff' },
  together: {
    it: 'Partecipa con lui al corso per conoscere le bestie di Nen.',
    en: 'He attends the class with him to learn about Nen beasts.',
  },
}

/** One of two attendees sent to the class together, each the other's colleague. */
function classmate(pair: Pair, partner: string): Dossier {
  return {
    role: pair.role,
    log: pair.log,
    affiliation: [{ ...CLASS, value: pair.staff }],
    status: [{ ...CLASS, value: 'alive' }],
    relationships: [
      {
        ...CLASS,
        value: [
          {
            character: partner,
            type: { it: 'Collega', en: 'Colleague' },
            summary: pair.together,
          },
        ],
      },
    ],
  }
}

/** Manga-only records whose naming scenes fall in chapters 358–370. */
export const KAKIN_PHASE_TWO: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  entries: [
    {
      id: 'tokarine',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 359,
      name: { it: 'Tokarine', en: 'Tokarine' },
      summary: {
        it: 'Partecipa alla riunione sui trasporti della spedizione. La sua capacità non permette il teletrasporto e trasporta poche persone.',
        en: 'She joins the expedition transport meeting. Her ability cannot teleport and has a small capacity.',
      },
      visual: { art: 'tokarine', tint: 'violet' },
    },
    {
      id: 'vincent',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 363,
      name: { it: 'Vincent', en: 'Vincent' },
      summary: {
        it: 'Si presenta alla porta degli alloggi del principe più giovane. Entra e uccide una domestica, sostenendo di essersi difeso.',
        en: 'He introduces himself at the youngest prince’s door. He enters and kills an attendant, claiming self-defense.',
      },
      visual: { art: 'vincent', tint: 'violet' },
    },
    {
      id: 'barrigen',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Barrigen', en: 'Barrigen' },
      summary: {
        it: 'Si presenta al corso di Nen. Durante la lezione viene attaccato da serpenti che gli prosciugano il sangue.',
        en: 'He introduces himself at the Nen class. During the lesson, snakes attack him and drain his blood.',
      },
      visual: { art: 'barrigen', tint: 'violet' },
    },
    {
      id: 'belerainte',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Belerainte', en: 'Belerainte' },
      summary: {
        it: 'Si presenta al corso e dichiara di saper già usare il Nen. Deve controllare che l’insegnamento sia corretto.',
        en: 'He introduces himself at the class and declares that he already uses Nen. He is there to check that the teaching is correct.',
      },
      visual: { art: 'belerainte', tint: 'violet' },
    },
    {
      id: 'danjin',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Danjin', en: 'Danjin' },
      summary: {
        it: 'Partecipa al corso di Nen e cerca di fermare il collega che provoca l’insegnante. Si scusa per il suo comportamento.',
        en: 'He attends the Nen class and restrains the colleague provoking the teacher. He apologizes for his behavior.',
      },
      visual: { art: 'danjin', tint: 'violet' },
    },
    {
      id: 'furykov',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Furykov', en: 'Furykov' },
      summary: {
        it: 'Si presenta al corso pur sapendo già usare il Nen. Studia l’aura degli altri partecipanti e dell’insegnante.',
        en: 'He introduces himself at the class despite already knowing Nen. He studies the aura of the other participants and the teacher.',
      },
      visual: { art: 'furykov', tint: 'violet' },
    },
    {
      id: 'illardia',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Illardia', en: 'Illardia' },
      summary: {
        it: 'Viene mandata al corso di Nen al posto delle guardie. Si presenta insieme agli altri partecipanti.',
        en: 'She is sent to the Nen class instead of the guards. She introduces herself with the other participants.',
      },
      visual: { art: 'illardia', tint: 'violet' },
    },
    {
      id: 'ladiolus',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Ladiolus', en: 'Ladiolus' },
      summary: {
        it: 'Viene mandata al corso di Nen al posto delle guardie. Si presenta insieme agli altri partecipanti.',
        en: 'She is sent to the Nen class instead of the guards. She introduces herself with the other participants.',
      },
      visual: { art: 'ladiolus', tint: 'violet' },
    },
    {
      id: 'loberry',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Loberry', en: 'Loberry' },
      summary: {
        it: 'Durante il corso di Nen vede una donna che gli altri non riescono a vedere. Il suo grido distrae i presenti.',
        en: 'During the Nen class, she sees a woman nobody else can see. Her shout distracts the participants.',
      },
      visual: { art: 'loberry', tint: 'violet' },
    },
    {
      id: 'longhi',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Longhi', en: 'Longhi' },
      summary: {
        it: 'Partecipa al corso di Nen con l’incarico di reclutare l’insegnante. Discute con il collega come trattare in segreto.',
        en: 'She attends the Nen class with orders to recruit the teacher. She discusses how to negotiate secretly with her colleague.',
      },
      visual: { art: 'longhi', tint: 'violet' },
    },
    {
      id: 'maor',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Maor', en: 'Maor' },
      summary: {
        it: 'Partecipa al corso di Nen con l’incarico di reclutare l’insegnante. Discute con la collega come trattare in segreto.',
        en: 'He attends the Nen class with orders to recruit the teacher. He discusses how to negotiate secretly with his colleague.',
      },
      visual: { art: 'maor', tint: 'violet' },
    },
    {
      id: 'mushaho',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Mushaho', en: 'Mushaho' },
      summary: {
        it: 'Si presenta al corso di Nen dopo aver riconosciuto l’importanza dell’incarico. Assiste alla morte di un partecipante.',
        en: 'He introduces himself at the Nen class after recognizing the importance of the assignment. He witnesses a participant’s death.',
      },
      visual: { art: 'mushaho', tint: 'violet' },
    },
    {
      id: 'myuhan',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Myuhan', en: 'Myuhan' },
      summary: {
        it: 'Dà il proprio nome quando l’insegnante glielo chiede. Supera apposta il limite segnato sul pavimento per provocarlo.',
        en: 'He gives his name when the teacher asks. He deliberately crosses the line on the floor to provoke him.',
      },
      visual: { art: 'myuhan', tint: 'violet' },
    },
    {
      id: 'satobi',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Satobi', en: 'Satobi' },
      summary: {
        it: 'Partecipa al corso per imparare il Nen e parlare con le altre guardie. Teme che l’insegnante li stia manipolando.',
        en: 'He attends the class to learn Nen and speak with the other guards. He worries that the teacher is manipulating them.',
      },
      visual: { art: 'satobi', tint: 'violet' },
    },
    {
      id: 'shedule',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Shedule', en: 'Shedule' },
      summary: {
        it: 'Partecipa al corso per conoscere le bestie di Nen. Porta sulla mano un segno a forma di piuma.',
        en: 'He attends the class to learn about Nen beasts. He has a feather-shaped mark on his hand.',
      },
      visual: { art: 'shedule', tint: 'violet' },
    },
    {
      id: 'tenftory',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Tenftory', en: 'Tenftory' },
      summary: {
        it: 'Partecipa al corso di Nen con l’incarico di osservare chi parla con l’insegnante. Tiene d’occhio le altre delegazioni.',
        en: 'He attends the Nen class with orders to watch who speaks with the teacher. He keeps an eye on the other delegations.',
      },
      visual: { art: 'tenftory', tint: 'violet' },
    },
    {
      id: 'yuhirai',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Yuhirai', en: 'Yuhirai' },
      summary: {
        it: 'Partecipa al corso per conoscere le bestie di Nen. Porta sulla mano un segno a forma di piuma.',
        en: 'He attends the class to learn about Nen beasts. He has a feather-shaped mark on his hand.',
      },
      visual: { art: 'yuhirai', tint: 'violet' },
    },
    {
      id: 'yuri',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 370,
      name: { it: 'Yuri', en: 'Yuri' },
      summary: {
        it: 'Partecipa al corso di Nen. Non vede la donna che spaventa la collega e cerca di capire cosa stia succedendo.',
        en: 'She attends the Nen class. She cannot see the woman frightening her colleague and tries to understand what is happening.',
      },
      visual: { art: 'yuri', tint: 'violet' },
    },
    {
      id: 'slakka',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 366,
      name: { it: 'Slakka', en: 'Slakka' },
      summary: {
        it: 'Viene assegnato alla scorta del principe più giovane. Si presenta a un altro soldato e concorda con lui come sorvegliare le guardie.',
        en: 'He is assigned to guard the youngest prince. He introduces himself to another soldier and agrees how to watch the guards.',
      },
      visual: { art: 'slakka', tint: 'violet' },
    },
  ],
  dossiers: {
    tokarine: {
      role: { it: 'Hunter addetta ai trasporti', en: 'Transport Hunter' },
      log: {
        it: 'Partecipa alla riunione sui trasporti della spedizione. La sua capacità non permette il teletrasporto e trasporta poche persone.',
        en: 'She joins the expedition transport meeting. Her ability cannot teleport and has a small capacity.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 359,
          source: 'chapter',
          value: { it: 'Associazione Hunter', en: 'Hunter Association' },
        },
      ],
      status: [
        { episode: 148, chapter: 359, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 359,
          source: 'chapter',
          value: [
            {
              character: 'gel',
              type: { it: 'Collega', en: 'Colleague' },
              summary: {
                it: 'Chiede a Gel di trovare altri Hunter addetti ai trasporti.',
                en: 'She asks Gel to find more transport Hunters.',
              },
            },
          ],
        },
      ],
    },
    vincent: {
      role: { it: 'Guardia del primo principe', en: 'First Prince’s guard' },
      log: {
        it: 'Si presenta alla porta degli alloggi del principe più giovane. Entra e uccide una domestica, sostenendo di essersi difeso.',
        en: 'He introduces himself at the youngest prince’s door. He enters and kills an attendant, claiming self-defense.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 363,
          source: 'chapter',
          value: {
            it: 'Soldati del primo principe',
            en: 'First Prince’s soldiers',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 363, source: 'chapter', value: 'alive' },
        { episode: 148, chapter: 364, source: 'chapter', value: 'deceased' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 363,
          source: 'chapter',
          value: [
            {
              character: 'kurapika',
              type: { it: 'Avversario', en: 'Opponent' },
              summary: {
                it: 'Si presenta dove Kurapika presta servizio e sostiene di aver ucciso una domestica per difendersi.',
                en: 'He arrives where Kurapika is stationed and claims to have killed an attendant in self-defense.',
              },
            },
          ],
        },
      ],
    },
    barrigen: {
      role: {
        it: 'Guardia del tredicesimo principe',
        en: 'Thirteenth Prince’s guard',
      },
      log: {
        it: 'Si presenta al corso di Nen. Durante la lezione viene attaccato da serpenti che gli prosciugano il sangue.',
        en: 'He introduces himself at the Nen class. During the lesson, snakes attack him and drain his blood.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: {
            it: 'Personale del tredicesimo principe',
            en: 'Thirteenth Prince’s staff',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 370, source: 'chapter', value: 'deceased' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: [
            {
              character: 'kurapika',
              type: { it: 'Insegnante', en: 'Teacher' },
              summary: {
                it: 'Partecipa al corso di Nen tenuto da Kurapika.',
                en: 'He attends Kurapika’s Nen class.',
              },
            },
          ],
        },
      ],
    },
    belerainte: {
      role: {
        it: 'Hunter e guardia del tredicesimo principe',
        en: 'Hunter and Thirteenth Prince’s guard',
      },
      log: {
        it: 'Si presenta al corso e dichiara di saper già usare il Nen. Deve controllare che l’insegnamento sia corretto.',
        en: 'He introduces himself at the class and declares that he already uses Nen. He is there to check that the teaching is correct.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: {
            it: 'Associazione Hunter; personale del tredicesimo principe',
            en: 'Hunter Association; Thirteenth Prince’s staff',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 370, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: [
            {
              character: 'kurapika',
              type: {
                it: 'Insegnante che tiene d’occhio',
                en: 'Teacher he observes',
              },
              summary: {
                it: 'Dichiara di conoscere il Nen durante il corso di Kurapika.',
                en: 'He declares his knowledge of Nen during Kurapika’s class.',
              },
            },
          ],
        },
      ],
    },
    danjin: {
      role: { it: 'Guardia del quarto principe', en: 'Fourth Prince’s guard' },
      log: {
        it: 'Partecipa al corso di Nen e cerca di fermare il collega che provoca l’insegnante. Si scusa per il suo comportamento.',
        en: 'He attends the Nen class and restrains the colleague provoking the teacher. He apologizes for his behavior.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: {
            it: 'Personale del quarto principe',
            en: 'Fourth Prince’s staff',
          },
        },
      ],
      // Benjamin has him taken for questioning under martial law (#1159).
      status: [
        { episode: 148, chapter: 370, source: 'chapter', value: 'alive' },
        { episode: 148, chapter: 416, source: 'chapter', value: 'captured' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: [
            {
              character: 'myuhan',
              type: { it: 'Collega', en: 'Colleague' },
              summary: {
                it: 'Lo ferma quando provoca l’insegnante e si scusa per lui.',
                en: 'He restrains him when he provokes the teacher and apologizes for him.',
              },
            },
          ],
        },
      ],
    },
    furykov: {
      role: { it: 'Soldato del primo principe', en: 'First Prince’s soldier' },
      log: {
        it: 'Si presenta al corso pur sapendo già usare il Nen. Studia l’aura degli altri partecipanti e dell’insegnante.',
        en: 'He introduces himself at the class despite already knowing Nen. He studies the aura of the other participants and the teacher.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: {
            it: 'Soldati del primo principe',
            en: 'First Prince’s soldiers',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 370, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: [
            {
              character: 'kurapika',
              type: {
                it: 'Insegnante che sta studiando',
                en: 'Teacher he studies',
              },
              summary: {
                it: 'Osserva la sua aura e i suoi gesti per dedurne le capacità.',
                en: 'He observes his aura and movements to deduce his abilities.',
              },
            },
          ],
        },
      ],
    },
    illardia: classmate(ELEVENTH_MAIDS, 'ladiolus'),
    ladiolus: classmate(ELEVENTH_MAIDS, 'illardia'),
    loberry: {
      role: { it: 'Domestica del decimo principe', en: 'Tenth Prince’s maid' },
      log: {
        it: 'Durante il corso di Nen vede una donna che gli altri non riescono a vedere. Il suo grido distrae i presenti.',
        en: 'During the Nen class, she sees a woman nobody else can see. Her shout distracts the participants.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: {
            it: 'Personale del decimo principe',
            en: 'Tenth Prince’s staff',
          },
        },
      ],
      // Detained and arrested by the royal army for Barrigen's murder (371, #1157).
      status: [
        { episode: 148, chapter: 370, source: 'chapter', value: 'alive' },
        { episode: 148, chapter: 371, source: 'chapter', value: 'captured' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: [
            {
              character: 'yuri',
              type: { it: 'Collega', en: 'Colleague' },
              summary: {
                it: 'Le chiede chi sia la donna che vede in fondo alla stanza, ma Yuri non riesce a vederla.',
                en: 'She asks her about the woman at the back of the room, but Yuri cannot see her.',
              },
            },
          ],
        },
      ],
    },
    longhi: {
      role: { it: 'Guardia del quinto principe', en: 'Fifth Prince’s guard' },
      log: {
        it: 'Partecipa al corso di Nen con l’incarico di reclutare l’insegnante. Discute con il collega come trattare in segreto.',
        en: 'She attends the Nen class with orders to recruit the teacher. She discusses how to negotiate secretly with her colleague.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: {
            it: 'Personale del quinto principe',
            en: 'Fifth Prince’s staff',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 370, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: [
            {
              character: 'maor',
              type: { it: 'Collega', en: 'Colleague' },
              summary: {
                it: 'Discutono come reclutare l’insegnante attraverso un messaggio riservato.',
                en: 'They discuss recruiting the teacher through a private message.',
              },
            },
          ],
        },
      ],
    },
    maor: {
      role: { it: 'Guardia del quinto principe', en: 'Fifth Prince’s guard' },
      log: {
        it: 'Partecipa al corso di Nen con l’incarico di reclutare l’insegnante. Discute con la collega come trattare in segreto.',
        en: 'He attends the Nen class with orders to recruit the teacher. He discusses how to negotiate secretly with his colleague.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: {
            it: 'Personale del quinto principe',
            en: 'Fifth Prince’s staff',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 370, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: [
            {
              character: 'longhi',
              type: { it: 'Collega', en: 'Colleague' },
              summary: {
                it: 'Discutono come reclutare l’insegnante attraverso un messaggio riservato.',
                en: 'They discuss recruiting the teacher through a private message.',
              },
            },
          ],
        },
      ],
    },
    mushaho: {
      role: { it: 'Guardia dell’ottavo principe', en: 'Eighth Prince’s guard' },
      log: {
        it: 'Si presenta al corso di Nen dopo aver riconosciuto l’importanza dell’incarico. Assiste alla morte di un partecipante.',
        en: 'He introduces himself at the Nen class after recognizing the importance of the assignment. He witnesses a participant’s death.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: {
            it: 'Personale dell’ottavo principe',
            en: 'Eighth Prince’s staff',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 370, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: [
            {
              character: 'kurapika',
              type: { it: 'Insegnante', en: 'Teacher' },
              summary: {
                it: 'Partecipa al corso di Nen tenuto da Kurapika.',
                en: 'He attends Kurapika’s Nen class.',
              },
            },
          ],
        },
      ],
    },
    myuhan: {
      // Found killed by Silent Majority the morning after the class (376, #1136).
      role: { it: 'Guardia del quarto principe', en: 'Fourth Prince’s guard' },
      log: {
        it: 'Dà il proprio nome quando l’insegnante glielo chiede. Supera apposta il limite segnato sul pavimento per provocarlo.',
        en: 'He gives his name when the teacher asks. He deliberately crosses the line on the floor to provoke him.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: {
            it: 'Personale del quarto principe',
            en: 'Fourth Prince’s staff',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 370, source: 'chapter', value: 'alive' },
        { episode: 148, chapter: 376, source: 'chapter', value: 'deceased' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: [
            {
              character: 'danjin',
              type: { it: 'Collega', en: 'Colleague' },
              summary: {
                it: 'Il collega lo ferma quando provoca l’insegnante e si scusa per lui.',
                en: 'His colleague restrains him when he provokes the teacher and apologizes for him.',
              },
            },
          ],
        },
      ],
    },
    satobi: {
      role: {
        it: 'Guardia del settimo principe',
        en: 'Seventh Prince’s guard',
      },
      log: {
        it: 'Partecipa al corso per imparare il Nen e parlare con le altre guardie. Teme che l’insegnante li stia manipolando.',
        en: 'He attends the class to learn Nen and speak with the other guards. He worries that the teacher is manipulating them.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: {
            it: 'Personale del settimo principe',
            en: 'Seventh Prince’s staff',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 370, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: [
            {
              character: 'kurapika',
              type: {
                it: 'Insegnante di cui diffida',
                en: 'Teacher he distrusts',
              },
              summary: {
                it: 'Partecipa al suo corso, ma teme di essere manipolato.',
                en: 'He attends his class but worries that he is being manipulated.',
              },
            },
          ],
        },
      ],
    },
    shedule: classmate(NINTH_GUARDS, 'yuhirai'),
    tenftory: {
      role: { it: 'Guardia del terzo principe', en: 'Third Prince’s guard' },
      log: {
        it: 'Partecipa al corso di Nen con l’incarico di osservare chi parla con l’insegnante. Tiene d’occhio le altre delegazioni.',
        en: 'He attends the Nen class with orders to watch who speaks with the teacher. He keeps an eye on the other delegations.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: {
            it: 'Personale del terzo principe',
            en: 'Third Prince’s staff',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 370, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: [
            {
              character: 'kurapika',
              type: {
                it: 'Insegnante che tiene d’occhio',
                en: 'Teacher he observes',
              },
              summary: {
                it: 'Deve osservare chi gli si avvicina durante il corso di Nen.',
                en: 'He must watch who approaches him during the Nen class.',
              },
            },
          ],
        },
      ],
    },
    yuhirai: classmate(NINTH_GUARDS, 'shedule'),
    yuri: {
      role: { it: 'Domestica del decimo principe', en: 'Tenth Prince’s maid' },
      log: {
        it: 'Partecipa al corso di Nen. Non vede la donna che spaventa la collega e cerca di capire cosa stia succedendo.',
        en: 'She attends the Nen class. She cannot see the woman frightening her colleague and tries to understand what is happening.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: {
            it: 'Personale del decimo principe',
            en: 'Tenth Prince’s staff',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 370, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 370,
          source: 'chapter',
          value: [
            {
              character: 'loberry',
              type: { it: 'Collega', en: 'Colleague' },
              summary: {
                it: 'Cerca di capire quale donna la collega stia indicando durante il corso.',
                en: 'She tries to understand which woman her colleague is pointing at during the class.',
              },
            },
          ],
        },
      ],
    },
    slakka: {
      role: { it: 'Guardia del terzo principe', en: 'Third Prince’s guard' },
      log: {
        it: 'Viene assegnato alla scorta del principe più giovane. Si presenta a un altro soldato e concorda con lui come sorvegliare le guardie.',
        en: 'He is assigned to guard the youngest prince. He introduces himself to another soldier and agrees how to watch the guards.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 366,
          source: 'chapter',
          value: {
            it: 'Personale del terzo principe; informatore della seconda regina',
            en: 'Third Prince’s staff; Second Queen’s informant',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 366, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 366,
          source: 'chapter',
          value: [
            {
              character: 'kurapika',
              type: { it: 'Collega di scorta', en: 'Fellow bodyguard' },
              summary: {
                it: 'Viene mandato negli alloggi dove Kurapika presta servizio come guardia.',
                en: 'He is sent to the quarters where Kurapika serves as a bodyguard.',
              },
            },
          ],
        },
      ],
    },
  },
}
