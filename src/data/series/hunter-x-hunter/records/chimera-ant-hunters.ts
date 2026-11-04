import type { LocalizedText, Relationship } from '~/data/types'

import type { HunterSaga } from './saga'

/** Where Netero's Hunters stand, as their dossiers say it. */
const NETERO_TEAM: LocalizedText = {
  it: 'Associazione Hunter, squadra di Netero',
  en: 'Hunter Association, Netero’s team',
}

/** Morel's two students, until they cross into NGL. */
const MOREL_STUDENT: LocalizedText = {
  it: 'Allievo di Morau',
  en: 'Morel’s student',
}

/** Knuckle and Shoot from the NGL border, chapter 214 / episode 91. */
const IN_NGL: LocalizedText = {
  it: 'Squadra di Netero in NGL',
  en: 'Netero’s team in NGL',
}

/** The relationship rows more than one entry repeats. */
const rows = {
  knovPalm: {
    character: 'palm-siberia',
    type: { it: 'Allieva', en: 'Student' },
    summary: {
      it: 'La sua allieva, che insiste per seguirlo in NGL.',
      en: 'His student, who insists on following him to NGL.',
    },
  },
  palmKnov: {
    character: 'knov',
    type: { it: 'Maestro', en: 'Teacher' },
    summary: {
      it: 'Il suo maestro, di cui parla senza sosta. Vuole raggiungerlo in NGL.',
      en: 'Her teacher, whom she talks about at length. She wants to join him in NGL.',
    },
  },
  palmGon: {
    character: 'gon-freecss',
    type: { it: 'Alleato', en: 'Ally' },
    summary: {
      it: 'Gli dice che lui e Killua devono battere Nackul e Schult perché anche lei possa andare in NGL.',
      en: 'Tells him that he and Killua must beat Knuckle and Shoot so that she can go to NGL too.',
    },
  },
  morelNetero: {
    character: 'netero',
    type: { it: 'Capo della squadra', en: 'Team leader' },
    summary: {
      it: 'Arriva con lui per sterminare le formichimere.',
      en: 'Arrives with him to exterminate the Chimera Ants.',
    },
  },
  morelKnov: {
    character: 'knov',
    type: { it: 'Compagno di squadra', en: 'Teammate' },
    summary: {
      it: 'Lavora con lui agli ordini di Netero.',
      en: 'Works with him under Netero.',
    },
  },
  morelKnuckle: {
    character: 'knuckle-bine',
    type: { it: 'Allievo', en: 'Student' },
    summary: {
      it: 'Uno dei suoi due allievi, che Gon e Killua devono battere.',
      en: 'One of his two students, whom Gon and Killua must beat.',
    },
  },
  morelShoot: {
    character: 'shoot-mcmahon',
    type: { it: 'Allievo', en: 'Student' },
    summary: {
      it: 'L’altro dei suoi due allievi, che Gon e Killua devono battere.',
      en: 'The other of his two students, whom Gon and Killua must beat.',
    },
  },
  studentMorel: {
    character: 'morel-mackernasey',
    type: { it: 'Maestro', en: 'Teacher' },
    summary: {
      it: 'Il suo maestro, nella squadra di Netero.',
      en: 'His teacher, on Netero’s team.',
    },
  },
  knuckleShoot: {
    character: 'shoot-mcmahon',
    type: { it: 'Compagno', en: 'Partner' },
    summary: {
      it: 'L’altro allievo di Morau, con cui deve tenersi i gettoni.',
      en: 'Morel’s other student, with whom he must keep the tokens.',
    },
  },
  shootKnuckle: {
    character: 'knuckle-bine',
    type: { it: 'Compagno', en: 'Partner' },
    summary: {
      it: 'L’altro allievo di Morau, che vuole cercare gli avversari e batterli per primo.',
      en: 'Morel’s other student, who wants to find their opponents and beat them first.',
    },
  },
  shootKillua: {
    character: 'killua',
    type: { it: 'Avversario', en: 'Opponent' },
    summary: {
      it: 'Lo batte nel duello per i gettoni, poi entra in NGL con Nackul.',
      en: 'Beats him in their duel for the tokens, then enters NGL with Knuckle.',
    },
  },
} satisfies Record<string, Relationship>

/**
 * The Hunters of Chimera Ant phase 2 (#1021): Netero's team, its students,
 * the doctor he calls in, and NGL's hidden ruler. Spread into the Chimera Ant
 * saga in `./chimera-ant`. Every gate is the first chapter and episode whose
 * English-wiki synopsis names the record explicitly (owner ruling, #1021).
 */
export const CHIMERA_ANT_HUNTERS: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  dossiers: {
    'palm-siberia': {
      relationships: [
        { episode: 86, chapter: 200, value: [rows.palmKnov, rows.palmGon] },
        // The date: Gon keeps his promise the day after she asks, chapter
        // 218 / episode 93.
        {
          episode: 93,
          chapter: 218,
          value: [
            rows.palmKnov,
            {
              character: 'gon-freecss',
              type: { it: 'Appuntamento', en: 'Date' },
              summary: {
                it: 'Gli chiede di uscire con lei, e il giorno dopo si presenta all’appuntamento con un aspetto tutto nuovo.',
                en: 'Asks him out, and turns up the next day for their date looking completely different.',
              },
            },
          ],
        },
        {
          episode: 124,
          chapter: 294,
          value: [
            rows.palmKnov,
            {
              character: 'gon-freecss',
              type: { it: 'Compagno di missione', en: 'Teammate' },
              summary: {
                it: 'Dopo essere uscita dal bozzolo, cerca Gon e dice a Killua che Gon ha bisogno di lui.',
                en: 'After leaving the cocoon, she looks for Gon and tells Killua that Gon needs him.',
              },
            },
            {
              character: 'killua',
              type: {
                it: 'Le fa tornare la memoria',
                en: 'Helps her regain her memories',
              },
              summary: {
                it: 'Mentre combattono, Killua le parla di Gon. Palm recupera i ricordi e lo ringrazia.',
                en: 'During their fight, Killua talks to her about Gon. Palm regains her memories and thanks him.',
              },
            },
          ],
        },
      ],
      role: [
        {
          episode: 86,
          chapter: 200,
          value: { it: 'Allieva di Nobu', en: 'Knov’s student' },
        },
        // She rides into the palace in Bizeff's trucks, chapter 252 /
        // episode 106.
        {
          episode: 106,
          chapter: 252,
          value: { it: 'Infiltrata nel palazzo', en: 'Palace infiltrator' },
        },
        {
          episode: 123,
          chapter: 293,
          value: {
            it: 'Hunter trasformata in formichimera',
            en: 'Hunter transformed into a Chimera Ant',
          },
        },
      ],
      log: {
        it: 'Si presenta a Gon e Killua e, seduta al tavolo con loro, parla a lungo del suo maestro. Quando nomina Nackul e Schult, il suo Nen fa traboccare la tazza che ha in mano.',
        en: 'She introduces herself to Gon and Killua and, sitting at a table with them, talks at length about her teacher. When she names Knuckle and Shoot, her Nen makes the cup in her hand overflow.',
      },
      status: [{ episode: 86, chapter: 200, value: 'alive' }],
      affiliation: [
        {
          episode: 86,
          chapter: 200,
          value: { it: 'Allieva di Nobu', en: 'Knov’s student' },
        },
        // Only the manga's matchups add her to Knov and Morel's,
        // chapter 223; episode 95 leaves her out.
        {
          episode: 95,
          chapter: 223,
          source: 'chapter',
          value: {
            it: 'Allieva di Nobu; deve tenere Shawapf lontano dal re con Nobu e Morau',
            en: 'Knov’s student; is to keep Shaiapouf away from the King with Knov and Morel',
          },
        },
      ],
    },
    'knov': {
      relationships: [
        {
          episode: 86,
          chapter: 200,
          value: [
            rows.knovPalm,
            rows.morelNetero,
            {
              character: 'morel-mackernasey',
              type: { it: 'Compagno di squadra', en: 'Teammate' },
              summary: {
                it: 'Lavora con lui agli ordini di Netero.',
                en: 'Works with him under Netero.',
              },
            },
          ],
        },
      ],
      role: [
        { episode: 86, chapter: 200, value: { it: 'Hunter', en: 'Hunter' } },
        {
          episode: 106,
          chapter: 251,
          value: {
            it: 'Hunter ritirato dall’assalto',
            en: 'Hunter withdrawn from the assault',
          },
        },
        {
          episode: 120,
          chapter: 286,
          value: {
            it: 'Hunter addetto all’evacuazione',
            en: 'Hunter evacuating the wounded',
          },
        },
      ],
      log: {
        it: 'Arriva con Netero e Morau per sterminare le formichimere, in giacca e cravatta. La sua allieva Pahm vuole unirsi a loro, anche se lui non voleva.',
        en: 'He arrives with Netero and Morel, in a suit and tie, to exterminate the Chimera Ants. His student Palm wants to join them, although he did not want her to.',
      },
      status: [{ episode: 86, chapter: 200, value: 'alive' }],
      affiliation: [
        { episode: 86, chapter: 200, value: NETERO_TEAM },
        {
          episode: 95,
          chapter: 223,
          value: {
            it: 'Associazione Hunter, squadra di Netero; deve tenere Shawapf lontano dal re con Morau',
            en: 'Hunter Association, Netero’s team; is to keep Shaiapouf away from the King with Morel',
          },
        },
      ],
    },
    'morel-mackernasey': {
      relationships: [
        {
          episode: 86,
          chapter: 200,
          value: [
            rows.morelNetero,
            rows.morelKnov,
            rows.morelKnuckle,
            rows.morelShoot,
          ],
        },
        // Colt surrenders and begs for the Queen, chapter 214 / episode 91;
        // Morel makes him swear never to eat a human, chapter 215 / episode 92.
        {
          episode: 92,
          chapter: 215,
          value: [
            rows.morelNetero,
            rows.morelKnov,
            rows.morelKnuckle,
            rows.morelShoot,
            {
              character: 'colt',
              type: { it: 'Formichimera protetta', en: 'Ant he protects' },
              summary: {
                it: 'Promette di proteggere Coluto se giura che non mangerà mai un essere umano.',
                en: 'Promises to protect Colt if he swears never to eat a human.',
              },
            },
          ],
        },
        // He drowns the Squadron Leader in carbon dioxide in a flooded
        // chapel, chapter 254 / episode 107. Five people at most, so Colt
        // gives way to the fight of the phase.
        {
          episode: 107,
          chapter: 254,
          value: [
            rows.morelNetero,
            rows.morelKnov,
            rows.morelKnuckle,
            rows.morelShoot,
            {
              character: 'hagya',
              type: { it: 'Nemico che uccide', en: 'Enemy he kills' },
              summary: {
                it: 'Lo affronta in una cappella sotterranea allagata e lo uccide riempiendola di anidride carbonica.',
                en: 'Fights him in a flooded underground chapel and kills him by filling it with carbon dioxide.',
              },
            },
          ],
        },
        {
          episode: 121,
          chapter: 289,
          value: [
            rows.morelNetero,
            rows.morelKnov,
            rows.morelShoot,
            {
              character: 'knuckle-bine',
              type: { it: 'Allievo che lo salva', en: 'Student who saves him' },
              summary: {
                it: 'Ferito da Montowtoyupih, gli chiede di non cedere. Nackul annulla il suo potere per salvargli la vita.',
                en: 'Wounded by Menthuthuyoupi, he asks Knuckle to hold out. Knuckle lifts his ability to save his life.',
              },
            },
            {
              character: 'menthuthuyoupi',
              type: {
                it: 'Avversario che lo risparmia',
                en: 'Opponent who spares him',
              },
              summary: {
                it: 'Lo ferisce. Quando Nackul annulla il suo potere, lo lascia vivere.',
                en: 'Wounds him. When Knuckle lifts his ability, he lets Morel live.',
              },
            },
          ],
        },
      ],
      role: { it: 'Hunter', en: 'Hunter' },
      log: {
        it: 'Arriva con Netero e prende in giro Gon e Killua perché sono bambini. Poi spiega a Killua che uno scontro di Nen non si decide da chi ha più aura, perché nessuno conosce l’abilità dell’altro.',
        en: 'He arrives with Netero and mocks Gon and Killua for being children. Then he tells Killua that a Nen fight is not decided by who has more aura, since no one knows the other’s ability.',
      },
      status: [{ episode: 86, chapter: 199, value: 'alive' }],
      affiliation: [
        { episode: 86, chapter: 199, value: NETERO_TEAM },
        // The matchups against the Royal Guards, chapter 223 / episode 95.
        {
          episode: 95,
          chapter: 223,
          value: {
            it: 'Associazione Hunter, squadra di Netero; deve tenere Shawapf lontano dal re con Nobu',
            en: 'Hunter Association, Netero’s team; is to keep Shaiapouf away from the King with Knov',
          },
        },
      ],
    },
    'knuckle-bine': {
      relationships: [
        {
          episode: 86,
          chapter: 200,
          value: [rows.studentMorel, rows.knuckleShoot],
        },
        // Gon goes bankrupt to Hakoware and, at the NGL border, makes him
        // promise to bring Kite back, chapter 214 / episode 91.
        {
          episode: 91,
          chapter: 214,
          value: [
            rows.studentMorel,
            rows.knuckleShoot,
            {
              character: 'gon-freecss',
              type: { it: 'Rivale', en: 'Rival' },
              summary: {
                it: 'Lo affronta più volte per il gettone e alla fine gli blocca il Nen per 30 giorni. Al confine di NGL gli promette di riportare indietro Kaito.',
                en: 'Fights him again and again for the token and in the end seals his Nen for 30 days. At the NGL border he promises him to bring Kite back.',
              },
            },
          ],
        },
        {
          episode: 121,
          chapter: 289,
          value: [
            {
              character: 'morel-mackernasey',
              type: { it: 'Maestro che salva', en: 'Teacher he saves' },
              summary: {
                it: 'Quando Montowtoyupih ferisce Morau, Nackul annulla il suo potere perché lo lasci vivere.',
                en: 'When Menthuthuyoupi wounds Morel, Knuckle lifts his ability so the guard will let him live.',
              },
            },
            rows.knuckleShoot,
            {
              character: 'menthuthuyoupi',
              type: {
                it: 'Avversario con cui tratta',
                en: 'Opponent he bargains with',
              },
              summary: {
                it: 'Gli toglie il vincolo del suo Nen in cambio della vita di Morau. La guardia li lascia entrambi vivi.',
                en: 'He lifts his Nen ability in exchange for Morel’s life. The guard lets both of them live.',
              },
            },
          ],
        },
      ],
      role: { it: 'Allievo di Morau', en: 'Morel’s student' },
      log: {
        it: 'Deve tenersi il suo gettone di legno per un mese contro due avversari di cui non sa il nome. Decide di cercarli e di batterli per primo.',
        en: 'He must keep his wooden token for a month against two opponents whose names he does not know. He decides to find them and beat them first.',
      },
      status: [{ episode: 86, chapter: 200, value: 'alive' }],
      affiliation: [
        { episode: 86, chapter: 200, value: MOREL_STUDENT },
        { episode: 91, chapter: 214, value: IN_NGL },
        {
          episode: 95,
          chapter: 223,
          value: {
            it: 'Squadra di Netero; deve tenere Montowtoyupih lontano dal re con Schult',
            en: 'Netero’s team; is to keep Menthuthuyoupi away from the King with Shoot',
          },
        },
      ],
    },
    'shoot-mcmahon': {
      relationships: [
        {
          episode: 86,
          chapter: 200,
          value: [rows.studentMorel, rows.shootKnuckle],
        },
        // Killua loses their duel: the four reach the NGL border with both
        // tokens on Knuckle and Shoot's side, chapter 214 / episode 91.
        {
          episode: 91,
          chapter: 214,
          value: [rows.studentMorel, rows.shootKnuckle, rows.shootKillua],
        },
        // Kite in Hotel Rafflesia's cage, chapter 222 / episode 95.
        {
          episode: 95,
          chapter: 222,
          value: [
            rows.studentMorel,
            rows.shootKnuckle,
            rows.shootKillua,
            {
              character: 'kite',
              type: { it: 'Prigioniero', en: 'Captive' },
              summary: {
                it: 'Tiene Kaito, ancora sotto il controllo del nemico, chiuso nella sua gabbia.',
                en: 'Keeps Kite, still under the enemy’s control, shut in his cage.',
              },
            },
          ],
        },
      ],
      role: { it: 'Allievo di Morau', en: 'Morel’s student' },
      log: {
        it: 'Si preoccupa di dover tenere i gettoni per un mese, e Nackul gli risponde che cercheranno gli avversari e li batteranno.',
        en: 'He worries about keeping their tokens for a month, and Knuckle answers that they will find their opponents and beat them.',
      },
      status: [{ episode: 86, chapter: 200, value: 'alive' }],
      affiliation: [
        { episode: 86, chapter: 200, value: MOREL_STUDENT },
        { episode: 91, chapter: 214, value: IN_NGL },
        {
          episode: 95,
          chapter: 223,
          value: {
            it: 'Squadra di Netero; deve tenere Montowtoyupih lontano dal re con Nackul',
            en: 'Netero’s team; is to keep Menthuthuyoupi away from the King with Knuckle',
          },
        },
      ],
    },
    // The gunmen name him as their king in episode 78, which the anime
    // invents; the manga's caption names him as NGL's kingpin in chapter 203.
    // The frozen texts keep to what both tell.
    'gyro': {
      role: { it: 'Capo nascosto di NGL', en: 'Hidden ruler of NGL' },
      log: {
        it: 'Gli uomini armati di NGL prendevano ordini da lui.',
        en: 'NGL’s gunmen took their orders from him.',
      },
      // Episode 79's commander found dead at his desk is tied to him only by
      // the wiki's link, and the manga has him reborn as an ant, so no death
      // is filed until an owner check of the episode settles it.
      status: [{ episode: 78, chapter: 203, value: 'alive' }],
      affiliation: [
        {
          episode: 78,
          chapter: 203,
          source: 'episode',
          value: { it: 'NGL', en: 'NGL' },
        },
        // The manga alone, at its gate: eaten by the Queen, reborn as one of
        // her soldiers, he keeps his memories and leaves the nest.
        {
          episode: 78,
          chapter: 203,
          source: 'chapter',
          value: {
            it: 'Formichimera che ha lasciato la regina',
            en: 'Chimera Ant who left the Queen',
          },
        },
      ],
    },
    'dr-lee': {
      relationships: [
        {
          episode: 92,
          chapter: 215,
          source: 'chapter',
          value: [
            {
              character: 'colt',
              type: { it: 'Donatore respinto', en: 'Donor she turns down' },
              summary: {
                it: 'Rifiuta gli organi che Coluto offre per la regina: ogni generazione di formichimere è diversa.',
                en: 'Turns down the organs Colt offers for the Queen: each generation of Chimera Ants is different.',
              },
            },
            {
              character: 'netero',
              type: { it: 'Chi la fa chiamare', en: 'Calls her in' },
              summary: {
                it: 'La fa chiamare con una squadra di chirurghi per salvare la regina.',
                en: 'Calls her in with a team of surgeons to save the Queen.',
              },
            },
          ],
        },
      ],
      role: { it: 'Medico', en: 'Doctor' },
      log: {
        it: 'Con la sua squadra impianta organi artificiali nella regina morente. Quando Coluto offre i propri, spiega che ogni generazione di formichimere è diversa e che non si possono usare.',
        en: 'She and her team fit artificial organs into the dying Queen. When Colt offers his own, she explains that each generation of Chimera Ants is different, so they cannot be used.',
      },
      status: [{ episode: 92, chapter: 215, value: 'alive' }],
      affiliation: [
        {
          episode: 92,
          chapter: 215,
          value: {
            it: 'Medici chiamati da Netero',
            en: 'Doctors Netero calls in',
          },
        },
      ],
    },
  },
  entries: [
    // Introduces herself to Gon and Killua at the station, chapter 200 /
    // episode 86. Only her first name is said there.
    {
      id: 'palm-siberia',
      kind: 'character',
      revealedAtEpisode: 86,
      revealedAtChapter: 200,
      name: { it: 'Pahm', en: 'Palm' },
      summary: {
        it: 'Un’allieva di Nobu che vuole andare in NGL. Dice a Gon e Killua che prima devono battere Nackul e Schult.',
        en: 'A student of Knov who wants to go to NGL. She tells Gon and Killua they must first beat Knuckle and Shoot.',
      },
      visual: { art: 'palm-siberia', tint: 'wine' },
    },
    // Unnamed in a black suit beside Netero in chapter 199 / episode 85;
    // Palm names him as her teacher in chapter 200 / episode 86.
    {
      id: 'knov',
      kind: 'character',
      revealedAtEpisode: 86,
      revealedAtChapter: 200,
      name: { it: 'Nobu', en: 'Knov' },
      summary: {
        it: 'Un Hunter arrivato con Netero per sterminare le formichimere. Pahm è sua allieva.',
        en: 'A Hunter who comes with Netero to exterminate the Chimera Ants. Palm is his student.',
      },
      visual: { art: 'knov', tint: 'blue' },
    },
    // Knov says his name in chapter 199; in the anime, Palm's line in
    // episode 86 is the first to say it.
    {
      id: 'morel-mackernasey',
      kind: 'character',
      revealedAtEpisode: 86,
      revealedAtChapter: 199,
      name: { it: 'Morau', en: 'Morel' },
      summary: {
        it: 'Un Hunter arrivato con Netero per sterminare le formichimere.',
        en: 'A Hunter who comes with Netero to exterminate the Chimera Ants.',
      },
      visual: { art: 'morel-mackernasey', tint: 'red' },
    },
    // Palm names both of Morel's students, chapter 200 / episode 86.
    {
      id: 'knuckle-bine',
      kind: 'character',
      revealedAtEpisode: 86,
      revealedAtChapter: 200,
      name: { it: 'Nackul', en: 'Knuckle' },
      summary: {
        it: 'Uno dei due allievi di Morau, in coppia con Schult. Gon e Killua devono batterlo per andare in NGL.',
        en: 'One of Morel’s two students, paired with Shoot. Gon and Killua must beat him to go to NGL.',
      },
      visual: { art: 'knuckle-bine', tint: 'ocher' },
    },
    {
      id: 'shoot-mcmahon',
      kind: 'character',
      revealedAtEpisode: 86,
      revealedAtChapter: 200,
      name: { it: 'Schult', en: 'Shoot' },
      summary: {
        it: 'L’altro allievo di Morau, in coppia con Nackul. Gon e Killua devono batterlo per andare in NGL.',
        en: 'Morel’s other student, paired with Knuckle. Gon and Killua must beat him to go to NGL.',
      },
      visual: { art: 'shoot-mcmahon', tint: 'violet' },
    },
    // Named by the gunmen as their king in episode 78, and by the caption
    // that opens his story in chapter 203. Chapter 203 is episode 87's, so the
    // pair says nothing about how far a chapter reaches: as an anchor it
    // would hold every chapter below 203 at episode 77.
    {
      id: 'gyro',
      kind: 'character',
      revealedAtEpisode: 78,
      revealedAtChapter: 203,
      unanchored: true,
      name: { it: 'Giairo', en: 'Gyro' },
      summary: {
        it: 'Il capo nascosto di NGL, i cui uomini armati hanno affrontato le formichimere.',
        en: 'NGL’s hidden ruler, whose armed men took on the Chimera Ants.',
      },
      visual: { art: 'gyro', tint: 'sand' },
    },
    // Netero asks for her by name in chapter 215. Episode 92 shows a
    // surgeon and never names her; it only orders the record.
    {
      id: 'dr-lee',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 92,
      revealedAtChapter: 215,
      name: { it: 'Dr. Lee', en: 'Dr. Lee' },
      summary: {
        it: 'Una dottoressa che Netero fa chiamare, con una squadra di chirurghi, per salvare la regina delle formichimere.',
        en: 'A doctor Netero calls in, with a team of surgeons, to save the Chimera Ant Queen.',
      },
      visual: { art: 'dr-lee', tint: 'teal' },
    },
  ],
}
