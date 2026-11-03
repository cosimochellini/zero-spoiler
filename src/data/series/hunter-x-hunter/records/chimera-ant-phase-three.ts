import type { HunterSaga } from './saga'

const CHIMERA_ANTS = { it: 'Formichimere', en: 'Chimera Ants' }

/** Ants who answer to the King once the Queen is dead. */
const KINGS_SERVICE = {
  it: 'Formichimere, al servizio del re',
  en: 'Chimera Ants, in the King’s service',
}

/** The relationship rows more than one entry repeats. */
const rows = {
  ikalgoFlutter: {
    character: 'flutter',
    type: { it: 'Compagno', en: 'Comrade' },
    summary: {
      it: 'Gli passa per telepatia le coordinate di Killua, perché possa colpirlo da lontano.',
      en: 'Passes him Killua’s coordinates by telepathy, so he can hit him from afar.',
    },
  },
  meleoronGon: {
    character: 'gon-freecss',
    type: { it: 'Partner', en: 'Partner' },
    summary: {
      it: 'Lo segue senza farsi vedere, poi gli si presenta e gli chiede di fare squadra contro il re.',
      en: 'Follows him unseen, then introduces himself and asks him to team up against the King.',
    },
  },
}

/**
 * The third phase's new records, chapters 223–260 and episodes 95–109.
 * Each opens at the first scene that says its name in each medium: an
 * introduction, the name in speech or a printed thought, a caption, or an
 * episode's title card. Narration alone opens nothing, so a medium that
 * only narrates a name waits, and the record is the other medium's alone.
 */
export const CHIMERA_ANT_PHASE_THREE: Pick<HunterSaga, 'dossiers' | 'entries'> =
  {
    entries: [
      {
        id: 'meleoron',
        kind: 'character',
        revealedAtEpisode: 101,
        revealedAtChapter: 241,
        source: 'chapter',
        name: { it: 'Meleolon', en: 'Meleoron' },
        summary: {
          it: 'Un ex comandante di divisione.',
          en: 'A former Squadron Leader.',
        },
        visual: { art: 'meleoron', tint: 'green' },
      },
      {
        id: 'bihorn',
        kind: 'character',
        revealedAtEpisode: 97,
        revealedAtChapter: 227,
        source: 'chapter',
        name: { it: 'Bihorn', en: 'Bihorn' },
        summary: { it: 'Formichimera.', en: 'Chimera Ant.' },
        visual: { art: 'bihorn', tint: 'ocher' },
      },
      {
        id: 'flutter',
        kind: 'character',
        revealedAtEpisode: 100,
        revealedAtChapter: 235,
        name: { it: 'Flatta', en: 'Flutter' },
        summary: { it: 'Formichimera.', en: 'Chimera Ant.' },
        visual: { art: 'flutter', tint: 'ocher' },
      },
      {
        id: 'pell',
        kind: 'character',
        revealedAtEpisode: 96,
        revealedAtChapter: 226,
        source: 'episode',
        name: { it: 'Pell', en: 'Pell' },
        summary: {
          it: 'Una formichimera che Shalnark uccide a Meteor City.',
          en: 'A Chimera Ant whom Shalnark kills in Meteor City.',
        },
        visual: { art: 'pell', tint: 'ocher' },
      },
      {
        id: 'komugi',
        kind: 'character',
        revealedAtEpisode: 103,
        revealedAtChapter: 257,
        name: { it: 'Komugi', en: 'Komugi' },
        summary: { it: 'Campionessa di gungi.', en: 'Gungi champion.' },
        visual: { art: 'komugi', tint: 'ocher' },
      },
      // Named in chapter 238; the anime only narrates the name, so episode
      // 101 only orders him.
      {
        id: 'remora',
        kind: 'character',
        revealedAtEpisode: 101,
        revealedAtChapter: 238,
        source: 'chapter',
        name: { it: 'Remora', en: 'Remora' },
        summary: { it: 'Formichimera.', en: 'Chimera Ant.' },
        visual: { art: 'remora', tint: 'ocher' },
      },
      {
        id: 'tsukuma',
        kind: 'character',
        revealedAtEpisode: 96,
        revealedAtChapter: 224,
        source: 'chapter',
        name: { it: 'Tsukuma', en: 'Tsukuma' },
        summary: { it: 'Ufficiale.', en: 'Officer.' },
        visual: { art: 'tsukuma', tint: 'ocher' },
      },
      // Killua puzzles over the squid word in his name, chapter 238; the
      // title card of episode 101 names him.
      {
        id: 'ikalgo',
        kind: 'character',
        revealedAtEpisode: 101,
        revealedAtChapter: 238,
        name: { it: 'Calamaro', en: 'Ikalgo' },
        summary: {
          it: 'Un capitano delle formichimere dall’aspetto di polpo, che spara pulci con il suo fucile.',
          en: 'An octopus-like Chimera Ant captain who shoots fleas from his rifle.',
        },
        visual: { art: 'ikalgo', tint: 'flamingo' },
      },
      // Leol plans to have the two of them chase off the Hunters' foot
      // soldiers, chapter 246 / episode 104.
      {
        id: 'welfin',
        kind: 'character',
        revealedAtEpisode: 104,
        revealedAtChapter: 246,
        name: { it: 'Welfang', en: 'Welfin' },
        summary: {
          it: 'Una formichimera dall’aspetto di lupo al servizio del re.',
          en: 'A wolf-like Chimera Ant in the King’s service.',
        },
        visual: { art: 'welfin', tint: 'teal' },
      },
      {
        id: 'bloster',
        kind: 'character',
        revealedAtEpisode: 104,
        revealedAtChapter: 246,
        name: { it: 'Bloburda', en: 'Bloster' },
        summary: {
          it: 'Una formichimera dall’aspetto di aragosta al servizio del re.',
          en: 'A lobster-like Chimera Ant in the King’s service.',
        },
        visual: { art: 'bloster', tint: 'vermilion' },
      },
      // A caption names the director in chapter 250. Episode 105 gives his
      // name only in narration, so it only orders him.
      {
        id: 'bizeff',
        kind: 'character',
        revealedAtEpisode: 105,
        revealedAtChapter: 250,
        source: 'chapter',
        name: { it: 'Bizeff', en: 'Bizeff' },
        summary: {
          it: 'Il direttore che governa il Golt Orientale per conto del re, uno dei pochi umani rimasti nel palazzo.',
          en: 'The director who runs East Gorteau for the King, one of the few humans left in the palace.',
        },
        visual: { art: 'bizeff', tint: 'sand' },
      },
    ],
    dossiers: {
      meleoron: {
        relationships: [
          {
            episode: 101,
            chapter: 241,
            source: 'chapter',
            value: [rows.meleoronGon],
          },
          {
            episode: 102,
            chapter: 242,
            source: 'chapter',
            value: [
              rows.meleoronGon,
              {
                character: 'peggy',
                type: { it: 'Padre adottivo', en: 'Foster father' },
                summary: {
                  it: 'Nella sua vita da umano Pegyi lo aveva cresciuto. Vuole vendicarne la morte per mano del re.',
                  en: 'In his human life Peggy raised him. He wants to avenge Peggy’s death at the King’s hands.',
                },
              },
            ],
          },
        ],
        role: {
          it: 'Ex comandante di divisione',
          en: 'Former Squadron Leader',
        },
        log: {
          it: 'Segue Gon e gli chiede di collaborare.',
          en: 'Follows Gon and asks to work with him.',
        },
        affiliation: [{ episode: 101, chapter: 241, value: CHIMERA_ANTS }],
        status: [{ episode: 101, chapter: 241, value: 'alive' }],
      },
      bihorn: {
        role: { it: 'Formichimera', en: 'Chimera Ant' },
        log: {
          it: 'Pike lo cita durante uno scontro.',
          en: 'Pike mentions him during a fight.',
        },
        affiliation: [{ episode: 97, chapter: 227, value: CHIMERA_ANTS }],
        status: [{ episode: 97, chapter: 227, value: 'alive' }],
      },
      flutter: {
        // He spies for Hagya's squad from chapter 235 and guides Ikalgo's
        // shots in chapter 238; one entry from the later of the two, since
        // the anime opens Hagya only at 106.
        relationships: [
          {
            episode: 106,
            chapter: 238,
            value: [
              {
                character: 'hagya',
                type: { it: 'Comandante di divisione', en: 'Squadron Leader' },
                summary: {
                  it: 'Serve nella sua divisione: sorveglia la zona con le sue libellule e gli riferisce ciò che vede.',
                  en: 'Serves in his squad, watching the area through his dragonflies and reporting what he sees.',
                },
              },
              {
                character: 'ikalgo',
                type: { it: 'Compagno', en: 'Comrade' },
                summary: {
                  it: 'Gli passa le coordinate di Killua perché possa colpirlo da lontano.',
                  en: 'Gives him Killua’s coordinates so he can hit him from afar.',
                },
              },
            ],
          },
        ],
        role: { it: 'Formichimera', en: 'Chimera Ant' },
        log: {
          it: 'Avverte un compagno del pericolo.',
          en: 'Warns an ally of danger.',
        },
        affiliation: [{ episode: 100, chapter: 235, value: CHIMERA_ANTS }],
        status: [{ episode: 100, chapter: 235, value: 'alive' }],
      },
      pell: {
        relationships: [
          {
            episode: 96,
            chapter: 226,
            source: 'episode',
            value: [
              {
                character: 'shalnark',
                type: { it: 'Nemico che lo uccide', en: 'Enemy who kills him' },
                summary: {
                  it: 'Lo stringe nella sua presa finché Shalnark non usa su sé stesso la propria abilità e lo schiaccia.',
                  en: 'Holds him in his grip until Shalnark turns his own ability on himself and crushes him.',
                },
              },
            ],
          },
        ],
        role: { it: 'Formichimera', en: 'Chimera Ant' },
        log: {
          it: 'Combatte contro Shalnark, che lo uccide.',
          en: 'Fights Shalnark, who kills him.',
        },
        affiliation: [{ episode: 96, chapter: 226, value: CHIMERA_ANTS }],
        // Shalnark kills him in the episode that names him, episode 96, so
        // the record opens on his death and keeps its first drawing.
        status: [{ episode: 96, chapter: 226, value: 'deceased' }],
      },
      komugi: {
        relationships: [
          {
            episode: 103,
            chapter: 257,
            value: [
              {
                character: 'meruem',
                type: { it: 'Avversario', en: 'Opponent' },
                summary: {
                  it: 'Gioca a gungi contro il re una partita dopo l’altra, e lui non riesce a batterla.',
                  en: 'Plays gungi against the King game after game, and he cannot beat her.',
                },
              },
            ],
          },
        ],
        role: { it: 'Campionessa di gungi', en: 'Gungi champion' },
        log: {
          it: 'Si presenta al re durante una partita.',
          en: 'Introduces herself to the King during a game.',
        },
        affiliation: [
          {
            episode: 103,
            chapter: 257,
            value: { it: 'Giocatrici di gungi', en: 'Gungi players' },
          },
        ],
        status: [{ episode: 103, chapter: 257, value: 'alive' }],
      },
      remora: {
        relationships: [
          {
            episode: 101,
            chapter: 238,
            source: 'chapter',
            value: [
              {
                character: 'killua',
                type: { it: 'Bersaglio', en: 'Target' },
                summary: {
                  it: 'Mentre Killua combatte una formichimera squalo, gli attacca sulla schiena una spilla per il gioco di altre due formichimere.',
                  en: 'While Killua fights a shark-like ant, he fixes a pin to Killua’s back for two other Chimera Ants’ game.',
                },
              },
            ],
          },
        ],
        role: { it: 'Formichimera', en: 'Chimera Ant' },
        log: {
          it: 'Aiuta due formichimere a prendere di mira Killua.',
          en: 'Helps two Chimera Ants target Killua.',
        },
        affiliation: [{ episode: 101, chapter: 238, value: CHIMERA_ANTS }],
        status: [{ episode: 101, chapter: 238, value: 'alive' }],
      },
      ikalgo: {
        relationships: [
          {
            episode: 101,
            chapter: 238,
            value: [
              {
                character: 'killua',
                type: {
                  it: 'Nemico che lo risparmia',
                  en: 'Enemy who spares him',
                },
                summary: {
                  it: 'Lo colpisce da lontano con le pulci, poi lo affronta nel lago sotterraneo. Killua lo salva dai pesci e gli dice che lo trova forte.',
                  en: 'Shoots him from afar with fleas, then fights him in the underground lake. Killua saves him from the fish and tells him he finds him cool.',
                },
              },
              rows.ikalgoFlutter,
            ],
          },
          // At the clinic, chapter 255 / episode 107.
          {
            episode: 107,
            chapter: 255,
            value: [
              {
                character: 'killua',
                type: { it: 'Amico', en: 'Friend' },
                summary: {
                  it: 'Tradisce i suoi compagni per salvargli la vita e lo porta in una clinica segreta. Killua lo invita a conoscere gli altri Hunter.',
                  en: 'Betrays his comrades to save his life and takes him to a secret clinic. Killua invites him to meet the other Hunters.',
                },
              },
              {
                ...rows.ikalgoFlutter,
                type: { it: 'Ex compagno', en: 'Former comrade' },
              },
            ],
          },
        ],
        role: [
          {
            episode: 101,
            chapter: 238,
            value: { it: 'Capitano', en: 'Officer' },
          },
          {
            episode: 107,
            chapter: 255,
            value: {
              it: 'Ex capitano, alleato degli Hunter',
              en: 'Former officer, allied with the Hunters',
            },
          },
        ],
        log: {
          it: 'Colpisce Killua da lontano con pulci a forma di proiettile, seguendo le coordinate di Flatta, poi lo attira in un lago sotterraneo. Killua gli taglia i tentacoli. Il suo nome gli ricorda un calamaro, ma lui è un polpo: non vuole sentirselo dire.',
          en: 'He hits Killua from afar with bullet-shaped fleas, following Flutter’s coordinates, then lures him into an underground lake. Killua cuts off his tentacles. His name says squid, though he is an octopus, and he will not be called one.',
        },
        status: [{ episode: 101, chapter: 238, value: 'alive' }],
        affiliation: [
          { episode: 101, chapter: 238, value: CHIMERA_ANTS },
          {
            episode: 107,
            chapter: 255,
            value: {
              it: 'Ha lasciato le formichimere per seguire Killua',
              en: 'Has left the Chimera Ants to follow Killua',
            },
          },
        ],
      },
      welfin: {
        relationships: [
          {
            episode: 104,
            chapter: 246,
            value: [
              {
                character: 'bloster',
                type: { it: 'Compagno', en: 'Comrade' },
                summary: {
                  it: 'Lasciano insieme il palazzo per dare man forte nella caccia agli Hunter, parlando del re e delle sue partite.',
                  en: 'They leave the palace together to help hunt the Hunters, talking about the King and his games.',
                },
              },
            ],
          },
        ],
        role: { it: 'Formichimera', en: 'Chimera Ant' },
        log: {
          it: 'Dice che il re è così preso dal gungi da saltare i pasti, e che le guardie reali sono su un altro livello. Ferma Bloburda quando propone di rubare il cibo del re.',
          en: 'He says the King is so taken with gungi that he skips meals, and that the Royal Guards are on another level. He stops Bloster when he suggests stealing the King’s food.',
        },
        status: [{ episode: 104, chapter: 246, value: 'alive' }],
        affiliation: [{ episode: 104, chapter: 246, value: KINGS_SERVICE }],
      },
      bloster: {
        relationships: [
          {
            episode: 104,
            chapter: 246,
            value: [
              {
                character: 'welfin',
                type: { it: 'Compagno', en: 'Comrade' },
                summary: {
                  it: 'Lasciano insieme il palazzo per dare man forte nella caccia agli Hunter. Welfang lo ferma quando propone di rubare il cibo del re.',
                  en: 'They leave the palace together to help hunt the Hunters. Welfin stops him when he suggests stealing the King’s food.',
                },
              },
            ],
          },
        ],
        role: { it: 'Formichimera', en: 'Chimera Ant' },
        log: {
          it: 'Si preoccupa del cibo sprecato perché il re salta i pasti, e propone di prenderlo. Poi ammette che le guardie reali sono su un altro livello.',
          en: 'He worries about the food going to waste while the King skips meals, and suggests taking it. Then he agrees that the Royal Guards are on another level.',
        },
        status: [{ episode: 104, chapter: 246, value: 'alive' }],
        affiliation: [{ episode: 104, chapter: 246, value: KINGS_SERVICE }],
      },
      bizeff: {
        relationships: [
          {
            episode: 105,
            chapter: 250,
            source: 'chapter',
            value: [
              {
                character: 'meruem',
                type: { it: 'Re che serve', en: 'King he serves' },
                summary: {
                  it: 'Il re lo lascia vivere perché nessun altro sa mandare avanti il paese, e lo tiene al suo fianco.',
                  en: 'The King lets him live because no one else can run the country, and keeps him at his side.',
                },
              },
              {
                character: 'palm-siberia',
                type: { it: 'Donna che sceglie', en: 'Woman he picks' },
                summary: {
                  it: 'La sceglie tra le foto delle donne che gli offrono, senza sapere che è una Hunter.',
                  en: 'Picks her from the pictures of women he is offered, unaware that she is a Hunter.',
                },
              },
            ],
          },
        ],
        role: { it: 'Direttore', en: 'Director' },
        log: {
          it: 'Dal palazzo tratta con gli altri paesi e con le organizzazioni del Golt Orientale. Stremato dal lavoro, sceglie cinque donne da farsi mandare.',
          en: 'From the palace he deals with other countries and with East Gorteau’s organisations. Worn out by the work, he picks five women to be sent to him.',
        },
        status: [
          { episode: 105, chapter: 250, source: 'chapter', value: 'alive' },
        ],
        affiliation: [
          {
            episode: 105,
            chapter: 250,
            source: 'chapter',
            value: {
              it: 'Repubblica del Golt Orientale, al servizio del re',
              en: 'Republic of East Gorteau, in the King’s service',
            },
          },
        ],
      },
      tsukuma: {
        role: { it: 'Ufficiale', en: 'Officer' },
        log: {
          it: 'Parla in un servizio televisivo.',
          en: 'Speaks in a television report.',
        },
        affiliation: [
          { episode: 96, chapter: 224, value: { it: 'Polizia', en: 'Police' } },
        ],
        status: [{ episode: 96, chapter: 224, value: 'alive' }],
      },
    },
  }
