import type { PlaceDossier } from '~/data/types'

import type { HunterSaga, HunterVocabulary } from './saga'

/** Chapters 384–400: only explicit naming scenes in the phase inventory. */
export const KAKIN_PHASE_4: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  entries: [
    {
      id: 'tajao',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 384,
      name: { it: 'Tajao', en: 'Tajao' },
      summary: {
        it: 'Il vicecapo dei Cha-R valuta una collaborazione con la Brigata Fantasma.',
        en: 'The Cha-R underboss considers working with the Phantom Troupe.',
      },
      visual: { art: 'tajao', tint: 'violet' },
    },
    {
      id: 'famule',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 389,
      name: { it: 'Famule', en: 'Famule' },
      summary: {
        it: 'Una guardia nella stanza del settimo principe. Viene interrogata sul colpo di pistola nel corridoio.',
        en: 'A guard in the Seventh Prince’s quarters who is questioned about the gunshot in the corridor.',
      },
      visual: { art: 'famule', tint: 'violet' },
    },
    {
      id: 'fukataki',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 389,
      name: { it: 'Fukataki', en: 'Fukataki' },
      summary: {
        it: 'La maggiordoma valuta il tempo necessario per colpire i principi con una maledizione.',
        en: 'The majordomo assesses how long a curse would take to affect the princes.',
      },
      visual: { art: 'fukataki', tint: 'violet' },
    },
    {
      id: 'taler',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 389,
      name: { it: 'Taler', en: 'Taler' },
      summary: {
        it: 'Una guardia incaricata di maledire il tredicesimo principe.',
        en: 'A guard assigned to curse the Thirteenth Prince.',
      },
      visual: { art: 'taler', tint: 'violet' },
    },
    {
      id: 'zakuro-custard',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 390,
      name: { it: 'Zakuro Custard', en: 'Zakuro Custard' },
      summary: {
        it: 'Un membro degli Xi-Yu incaricato di cercare Hisoka. Muove il proprio sangue con il Nen.',
        en: 'A Xi-Yu member sent to find Hisoka. He moves his own blood with Nen.',
      },
      visual: { art: 'zakuro-custard', tint: 'violet' },
    },
    {
      id: 'lynch-fullbokko',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 390,
      name: { it: 'Lynch Fullbokko', en: 'Lynch Fullbokko' },
      summary: {
        it: 'Una membro degli Xi-Yu che cerca Hisoka. I suoi pugni fanno rispondere la voce interiore delle persone.',
        en: 'A Xi-Yu member searching for Hisoka. Her punches make people’s inner voices answer.',
      },
      visual: { art: 'lynch-fullbokko', tint: 'violet' },
    },
    {
      id: 'tevelares',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 391,
      name: { it: 'Tevelares', en: 'Tevelares' },
      summary: {
        it: 'Un ingegnere civile degli Heil-Ly che cerca di colpire il vicecapo rivale.',
        en: 'A Heil-Ly civil engineer who tries to attack the rival underboss.',
      },
      visual: { art: 'tevelares', tint: 'violet' },
    },
    {
      id: 'quorolle',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 391,
      name: { it: 'Quorolle', en: 'Quorolle' },
      summary: {
        it: 'Un riparatore degli Heil-Ly che partecipa a un agguato nei corridoi della nave.',
        en: 'A Heil-Ly repairman who takes part in an ambush in the ship’s corridors.',
      },
      visual: { art: 'quorolle', tint: 'violet' },
    },
    {
      id: 'padaille',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 391,
      name: { it: 'Padaille', en: 'Padaille' },
      summary: {
        it: 'Un membro degli Heil-Ly che trasforma la mano in armi. Il suo agguato gli costa la vita.',
        en: 'A Heil-Ly member who turns his hand into weapons. His ambush costs him his life.',
      },
      visual: { art: 'padaille', tint: 'violet' },
    },
    {
      id: 'misha-hao',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 392,
      name: { it: 'Misha Hao', en: 'Misha Hao' },
      summary: {
        it: 'Una becchina degli Xi-Yu morta prima del viaggio. Il suo Nen continua a far sparire le vittime della famiglia.',
        en: 'A Xi-Yu undertaker who died before the voyage. Her Nen continues to dispose of the family’s victims.',
      },
      visual: { art: 'misha-hao', tint: 'violet' },
    },
    {
      id: 'maizan',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 393,
      name: { it: 'Maizan', en: 'Maizan' },
      summary: {
        it: 'Un caporale vende alla mafia informazioni su una stanza nascosta della nave.',
        en: 'A corporal sells the mafia information about a hidden room on the ship.',
      },
      visual: { art: 'maizan', tint: 'violet' },
    },
    {
      id: 'daemon',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 393,
      name: { it: 'Daemon', en: 'Daemon' },
      summary: {
        it: 'Un membro degli Heil-Ly che discute come continuare la caccia dopo la perdita di un compagno.',
        en: 'A Heil-Ly member discussing how to continue hunting after losing a fellow member.',
      },
      visual: { art: 'daemon', tint: 'violet' },
    },
    {
      id: 'gelato',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 393,
      name: { it: 'Gelato', en: 'Gelato' },
      summary: {
        it: 'Una giocatrice professionista degli Heil-Ly. Avverte i compagni che i soldati sono in allerta.',
        en: 'A Heil-Ly professional gamer who warns the others that the soldiers are on alert.',
      },
      visual: { art: 'gelato', tint: 'violet' },
    },
    {
      id: 'perigord',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 393,
      name: { it: 'Perigord', en: 'Perigord' },
      summary: {
        it: 'Un membro degli Heil-Ly che propone di ricreare il potere di un compagno perduto.',
        en: 'A Heil-Ly member who proposes recreating a lost member’s ability.',
      },
      visual: { art: 'perigord', tint: 'violet' },
    },
    {
      id: 'bille',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 393,
      name: { it: 'Bille', en: 'Bille' },
      summary: {
        it: 'Un addetto a una sala giochi degli Heil-Ly che ha già deciso quale potere sviluppare.',
        en: 'A Heil-Ly arcade employee who has already decided what ability to develop.',
      },
      visual: { art: 'bille', tint: 'violet' },
    },
    {
      id: 'voconte',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 393,
      name: { it: 'Voconte', en: 'Voconte' },
      summary: {
        it: 'Un membro degli Heil-Ly che propone di attirare vittime attraverso una porta.',
        en: 'A Heil-Ly member who proposes luring victims through a door.',
      },
      visual: { art: 'voconte', tint: 'violet' },
    },
    {
      id: 'matvere',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 393,
      name: { it: 'Matvere', en: 'Matvere' },
      summary: {
        it: 'Uno studente degli Heil-Ly che vuole creare un’arma da fuoco con il Nen.',
        en: 'A Heil-Ly college student who wants to create a firearm with Nen.',
      },
      visual: { art: 'matvere', tint: 'violet' },
    },
    {
      id: 'tassi',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 394,
      name: { it: 'Tassi', en: 'Tassi' },
      summary: {
        it: 'Un membro degli Xi-Yu entra in una stanza per recuperare un coltello e cade in una trappola mortale.',
        en: 'A Xi-Yu member enters a room to retrieve a knife and falls into a fatal trap.',
      },
      visual: { art: 'tassi', tint: 'violet' },
    },
    {
      id: 'terebellum',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 394,
      name: { it: 'Terebellum', en: 'Terebellum' },
      summary: {
        it: 'Un membro degli Heil-Ly che trasporta i corpi nell’area di smaltimento.',
        en: 'A Heil-Ly member who carries bodies to the disposal area.',
      },
      visual: { art: 'terebellum', tint: 'violet' },
    },
    {
      id: 'chiffon-toto',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 394,
      name: { it: 'Chiffon Toto', en: 'Chiffon Toto' },
      summary: {
        it: 'Una sarta degli Heil-Ly che si occupa dei corpi insieme a un’altra membro della famiglia.',
        en: 'A Heil-Ly seamstress who handles bodies with another member of the family.',
      },
      visual: { art: 'chiffon-toto', tint: 'violet' },
    },
    {
      id: 'montblanc-toto',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 394,
      name: { it: 'Montblanc Toto', en: 'Montblanc Toto' },
      summary: {
        it: 'Una membro degli Heil-Ly incaricata di smaltire i corpi nel rifugio.',
        en: 'A Heil-Ly member responsible for disposing of bodies in the hideout.',
      },
      visual: { art: 'montblanc-toto', tint: 'violet' },
    },
    {
      id: 'sodom',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 394,
      name: { it: 'Sodom', en: 'Sodom' },
      summary: {
        it: 'Un membro degli Heil-Ly si offre per catturare una guardia del quarto principe.',
        en: 'A Heil-Ly member volunteers to capture one of the Fourth Prince’s guards.',
      },
      visual: { art: 'sodom', tint: 'violet' },
    },
    {
      id: 'borksen',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 394,
      name: { it: 'Borksen', en: 'Borksen' },
      summary: {
        it: 'Una soldatessa viene trasferita ai livelli inferiori dopo aver condiviso notizie sul Nen.',
        en: 'A soldier is transferred to the lower tiers after sharing information about Nen.',
      },
      visual: { art: 'borksen', tint: 'violet' },
    },
    {
      id: 'otocin',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 394,
      name: { it: 'Otocin', en: 'Otocin' },
      summary: {
        it: 'Un soldato cerca informazioni sul Nen mentre la sua unità cerca la mafia.',
        en: 'A soldier seeks information about Nen while his unit searches for the mafia.',
      },
      visual: { art: 'otocin', tint: 'violet' },
    },
    {
      id: 'gipper',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 394,
      name: { it: 'Gipper', en: 'Gipper' },
      summary: {
        it: 'Un caporale guida la ricerca della mafia nei livelli inferiori della nave.',
        en: 'A corporal leads the search for the mafia in the ship’s lower tiers.',
      },
      visual: { art: 'gipper', tint: 'violet' },
    },
    {
      id: 'momolly',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 394,
      name: { it: 'Momolly', en: 'Momolly' },
      summary: {
        it: 'Una soldatessa discute con i compagni di come sopravvivere alla ricerca della mafia.',
        en: 'A soldier discusses with her comrades how to survive the search for the mafia.',
      },
      visual: { art: 'momolly', tint: 'violet' },
    },
    {
      id: 'lisores',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 395,
      name: { it: 'Lisores', en: 'Lisores' },
      summary: {
        it: 'Un sacerdote accoglie i bambini della Meteor City nella chiesa e li avverte dei rapimenti.',
        en: 'A priest welcomes Meteor City’s children into the church and warns them about kidnappings.',
      },
      visual: { art: 'lisores', tint: 'violet' },
    },
    {
      id: 'sarasa',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 395,
      name: { it: 'Sarasa', en: 'Sarasa' },
      summary: {
        it: 'Una bambina della Meteor City accetta di doppiare un personaggio per gli amici.',
        en: 'A Meteor City child agrees to voice a character for her friends.',
      },
      visual: { art: 'sarasa', tint: 'violet' },
    },
    {
      id: 'sheila',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 395,
      name: { it: 'Sheila', en: 'Sheila' },
      summary: {
        it: 'Una bambina della Meteor City legge sempre lo stesso libro e vuole diventare Hunter.',
        en: 'A Meteor City child keeps reading the same book and wants to become a Hunter.',
      },
      visual: { art: 'sheila', tint: 'violet' },
    },
    {
      id: 'renko',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 397,
      name: { it: 'Renko', en: 'Renko' },
      summary: {
        it: 'Un’imbalsamatrice usa il Nen per ricomporre il corpo di una bambina.',
        en: 'An embalmer uses Nen to restore a child’s body.',
      },
      visual: { art: 'renko', tint: 'violet' },
    },
    {
      id: 'yokotani',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 399,
      name: { it: 'Yokotani', en: 'Yokotani' },
      summary: {
        it: 'L’avvocato degli Heil-Ly affronta due intrusi nel rifugio della famiglia.',
        en: 'The Heil-Ly lawyer confronts two intruders in the family’s hideout.',
      },
      visual: { art: 'yokotani', tint: 'violet' },
    },
    {
      id: 'madwig',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 400,
      name: { it: 'Madwig', en: 'Madwig' },
      summary: {
        it: 'Un dipendente di Tyson interpreta un sicario che ha perso la memoria.',
        en: 'A Tyson employee plays a hitman who has lost his memory.',
      },
      visual: { art: 'madwig', tint: 'violet' },
    },
    {
      id: 'himonce',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 400,
      name: { it: 'Himoncé', en: 'Himoncé' },
      summary: {
        it: 'Un dipendente di Tyson si presenta come la più grande star del mondo.',
        en: 'A Tyson employee presents himself as the world’s biggest star.',
      },
      visual: { art: 'himonce', tint: 'violet' },
    },
    {
      id: 'anzel',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 400,
      name: { it: 'Anzel', en: 'Anzel' },
      summary: {
        it: 'Un dipendente di Tyson interpreta il ruolo del fratello minore del principe.',
        en: 'A Tyson employee plays the prince’s younger brother.',
      },
      visual: { art: 'anzel', tint: 'violet' },
    },
    {
      id: 'hyuga',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 400,
      name: { it: 'Hyuga', en: 'Hyuga' },
      summary: {
        it: 'Un dipendente di Tyson si presenta come un insegnante leggendario.',
        en: 'A Tyson employee presents himself as a legendary tutor.',
      },
      visual: { art: 'hyuga', tint: 'violet' },
    },
    {
      id: 'kaiser',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 400,
      name: { it: 'Kaiser', en: 'Kaiser' },
      summary: {
        it: 'Un funzionario protegge due giovani principi e prepara un piano con Melody.',
        en: 'An official protects two young princes and prepares a plan with Melody.',
      },
      visual: { art: 'kaiser', tint: 'violet' },
    },
    {
      id: 'all-faiths-church',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 395,
      name: { it: 'All-Faiths Church', en: 'All-Faiths Church' },
      summary: {
        it: 'La chiesa della Meteor City ha una sala video e un auditorium per i bambini.',
        en: 'Meteor City’s church has a video room and an auditorium for the children.',
      },
      visual: { art: 'all-faiths-church', tint: 'sand' },
    },
    {
      id: 'uga-forest',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 148,
      revealedAtChapter: 396,
      name: { it: 'Uga Forest', en: 'Uga Forest' },
      summary: {
        it: 'Una foresta vicino alla discarica dove una bambina cerca videocassette.',
        en: 'A forest near the dump where a child searches for videotapes.',
      },
      visual: { art: 'uga-forest', tint: 'sand' },
    },
  ],
  dossiers: {
    'tajao': {
      role: { it: 'Vicecapo dei Cha-R', en: 'Cha-R underboss' },
      log: {
        it: 'Il vicecapo dei Cha-R valuta una collaborazione con la Brigata Fantasma.',
        en: 'The Cha-R underboss considers working with the Phantom Troupe.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 384,
          source: 'chapter',
          value: { it: 'Famiglia Cha-R', en: 'Cha-R Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 384, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 384,
          source: 'chapter',
          value: [
            {
              character: 'phinks',
              type: { it: 'Interlocutore', en: 'Negotiating partner' },
              summary: {
                it: 'Phinks offre di eliminare il sicario in cambio dell’accesso al quarto livello.',
                en: 'Phinks offers to eliminate the hitman in exchange for access to Tier 4.',
              },
            },
          ],
        },
      ],
    },
    'famule': {
      role: { it: 'Guardia reale', en: 'Royal bodyguard' },
      log: {
        it: 'Una guardia nella stanza del settimo principe. Viene interrogata sul colpo di pistola nel corridoio.',
        en: 'A guard in the Seventh Prince’s quarters who is questioned about the gunshot in the corridor.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 389,
          source: 'chapter',
          value: {
            it: 'Guardie della regina Duazul',
            en: 'Queen Duazul’s guards',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 389, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 389,
          source: 'chapter',
          value: [
            {
              character: 'basho',
              type: { it: 'Collega nella scorta', en: 'Fellow guard' },
              summary: {
                it: 'Basho è presente nella stessa stanza durante l’incidente nel corridoio.',
                en: 'Basho is in the same quarters during the incident in the corridor.',
              },
            },
          ],
        },
      ],
    },
    'fukataki': {
      role: { it: 'Maggiordoma di Camilla', en: 'Camilla’s majordomo' },
      log: {
        it: 'La maggiordoma valuta il tempo necessario per colpire i principi con una maledizione.',
        en: 'The majordomo assesses how long a curse would take to affect the princes.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 389,
          source: 'chapter',
          value: { it: 'Personale di Camilla', en: 'Camilla’s staff' },
        },
      ],
      status: [
        { episode: 148, chapter: 389, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 389,
          source: 'chapter',
          value: [
            {
              character: 'camilla-hui-guo-rou',
              type: { it: 'Datore di lavoro', en: 'Employer' },
              summary: {
                it: 'Dirige il personale di Camilla e valuta come usare le maledizioni per lei.',
                en: 'She oversees Camilla’s staff and assesses how to use curses for her.',
              },
            },
          ],
        },
      ],
    },
    'taler': {
      role: { it: 'Guardia di Camilla', en: 'Camilla’s guard' },
      log: {
        it: 'Una guardia incaricata di maledire il tredicesimo principe.',
        en: 'A guard assigned to curse the Thirteenth Prince.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 389,
          source: 'chapter',
          value: { it: 'Guardie di Camilla', en: 'Camilla’s guards' },
        },
      ],
      status: [
        { episode: 148, chapter: 389, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 389,
          source: 'chapter',
          value: [
            {
              character: 'fukataki',
              type: {
                it: 'Consulente sulle maledizioni',
                en: 'Adviser on curses',
              },
              summary: {
                it: 'Fukataki avverte che le bestie dei principi rendono difficile la maledizione.',
                en: 'Fukataki warns that the princes’ beasts make cursing them difficult.',
              },
            },
          ],
        },
      ],
    },
    'zakuro-custard': {
      role: { it: 'Membro degli Xi-Yu', en: 'Xi-Yu member' },
      log: {
        it: 'Un membro degli Xi-Yu incaricato di cercare Hisoka. Muove il proprio sangue con il Nen.',
        en: 'A Xi-Yu member sent to find Hisoka. He moves his own blood with Nen.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 390,
          source: 'chapter',
          value: { it: 'Famiglia Xi-Yu', en: 'Xi-Yu Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 390, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 390,
          source: 'chapter',
          value: [
            {
              character: 'lynch-fullbokko',
              type: { it: 'Compagna nella ricerca', en: 'Search partner' },
              summary: {
                it: 'Cerca Hisoka insieme a Lynch dopo aver ricevuto gli ordini del vicecapo.',
                en: 'He searches for Hisoka with Lynch after receiving the underboss’s orders.',
              },
            },
          ],
        },
      ],
    },
    'lynch-fullbokko': {
      role: { it: 'Membro degli Xi-Yu', en: 'Xi-Yu member' },
      log: {
        it: 'Una membro degli Xi-Yu che cerca Hisoka. I suoi pugni fanno rispondere la voce interiore delle persone.',
        en: 'A Xi-Yu member searching for Hisoka. Her punches make people’s inner voices answer.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 390,
          source: 'chapter',
          value: { it: 'Famiglia Xi-Yu', en: 'Xi-Yu Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 390, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 390,
          source: 'chapter',
          value: [
            {
              character: 'zakuro-custard',
              type: { it: 'Compagno nella ricerca', en: 'Search partner' },
              summary: {
                it: 'Lavora con Zakuro per trovare Hisoka tra i passeggeri.',
                en: 'She works with Zakuro to find Hisoka among the passengers.',
              },
            },
          ],
        },
      ],
    },
    'tevelares': {
      role: { it: 'Ingegnere civile', en: 'Civil engineer' },
      log: {
        it: 'Un ingegnere civile degli Heil-Ly che cerca di colpire il vicecapo rivale.',
        en: 'A Heil-Ly civil engineer who tries to attack the rival underboss.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 391,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 391, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 391,
          source: 'chapter',
          value: [
            {
              character: 'quorolle',
              type: { it: 'Complice', en: 'Accomplice' },
              summary: {
                it: 'Attacca insieme a Quorolle, ma i due si ritirano davanti ai piccioni di Nen.',
                en: 'He attacks with Quorolle, but they retreat from the Nen pigeons.',
              },
            },
          ],
        },
      ],
    },
    'quorolle': {
      role: { it: 'Riparatore', en: 'Repairman' },
      log: {
        it: 'Un riparatore degli Heil-Ly che partecipa a un agguato nei corridoi della nave.',
        en: 'A Heil-Ly repairman who takes part in an ambush in the ship’s corridors.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 391,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 391, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 391,
          source: 'chapter',
          value: [
            {
              character: 'tevelares',
              type: { it: 'Complice', en: 'Accomplice' },
              summary: {
                it: 'Spara insieme a Tevelares contro i piccioni di Nen, poi si ritira con lui.',
                en: 'He fires at the Nen pigeons with Tevelares, then retreats with him.',
              },
            },
          ],
        },
      ],
    },
    'padaille': {
      role: { it: 'Addetto alle demolizioni', en: 'Demolition worker' },
      log: {
        it: 'Un membro degli Heil-Ly che trasforma la mano in armi. Il suo agguato gli costa la vita.',
        en: 'A Heil-Ly member who turns his hand into weapons. His ambush costs him his life.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 391,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 391, source: 'chapter', value: 'deceased' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 391,
          source: 'chapter',
          value: [
            {
              character: 'tevelares',
              type: {
                it: 'Complice nell’agguato',
                en: 'Accomplice in the ambush',
              },
              summary: {
                it: 'Si lancia all’attacco mentre Tevelares cerca un’apertura.',
                en: 'He attacks while Tevelares looks for an opening.',
              },
            },
          ],
        },
      ],
    },
    'misha-hao': {
      role: { it: 'Becchina degli Xi-Yu', en: 'Xi-Yu undertaker' },
      log: {
        it: 'Una becchina degli Xi-Yu morta prima del viaggio. Il suo Nen continua a far sparire le vittime della famiglia.',
        en: 'A Xi-Yu undertaker who died before the voyage. Her Nen continues to dispose of the family’s victims.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 392,
          source: 'chapter',
          value: { it: 'Famiglia Xi-Yu', en: 'Xi-Yu Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 392, source: 'chapter', value: 'deceased' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 392,
          source: 'chapter',
          value: [
            {
              character: 'padaille',
              type: { it: 'Corpo che rimuove', en: 'Body she removes' },
              summary: {
                it: 'Il suo Nen muove il corpo di Padaille per allontanarlo dalla folla.',
                en: 'Her Nen moves Padaille’s body away from the crowd.',
              },
            },
          ],
        },
      ],
    },
    'maizan': {
      role: { it: 'Caporale', en: 'Corporal' },
      log: {
        it: 'Un caporale vende alla mafia informazioni su una stanza nascosta della nave.',
        en: 'A corporal sells the mafia information about a hidden room on the ship.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 393,
          source: 'chapter',
          value: { it: 'Esercito di Cakin', en: 'Kakin military' },
        },
      ],
      status: [
        { episode: 148, chapter: 393, source: 'chapter', value: 'alive' },
      ],
    },
    'daemon': {
      role: { it: 'Muratore', en: 'Construction worker' },
      log: {
        it: 'Un membro degli Heil-Ly che discute come continuare la caccia dopo la perdita di un compagno.',
        en: 'A Heil-Ly member discussing how to continue hunting after losing a fellow member.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 393,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 393, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 393,
          source: 'chapter',
          value: [
            {
              character: 'gelato',
              type: {
                it: 'Compagna nella famiglia',
                en: 'Fellow family member',
              },
              summary: {
                it: 'Discute con Gelato dei pericoli di uscire dal rifugio.',
                en: 'He discusses the dangers of leaving the hideout with Gelato.',
              },
            },
          ],
        },
      ],
    },
    'gelato': {
      role: { it: 'Giocatrice professionista', en: 'Professional gamer' },
      log: {
        it: 'Una giocatrice professionista degli Heil-Ly. Avverte i compagni che i soldati sono in allerta.',
        en: 'A Heil-Ly professional gamer who warns the others that the soldiers are on alert.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 393,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 393, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 393,
          source: 'chapter',
          value: [
            {
              character: 'matvere',
              type: {
                it: 'Compagno nella famiglia',
                en: 'Fellow family member',
              },
              summary: {
                it: 'Gli ricorda che non può scegliere liberamente la propria categoria di Nen.',
                en: 'She reminds him that he cannot freely choose his Nen category.',
              },
            },
          ],
        },
      ],
    },
    'perigord': {
      role: { it: 'Assistente investigatore', en: 'Investigator’s assistant' },
      log: {
        it: 'Un membro degli Heil-Ly che propone di ricreare il potere di un compagno perduto.',
        en: 'A Heil-Ly member who proposes recreating a lost member’s ability.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 393,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 393, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 393,
          source: 'chapter',
          value: [
            {
              character: 'voconte',
              type: {
                it: 'Compagno nella famiglia',
                en: 'Fellow family member',
              },
              summary: {
                it: 'Ascolta la proposta di Voconte di usare una porta per catturare le vittime.',
                en: 'He hears Voconte propose using a door to catch victims.',
              },
            },
          ],
        },
      ],
    },
    'bille': {
      role: { it: 'Addetto a una sala giochi', en: 'Arcade employee' },
      log: {
        it: 'Un addetto a una sala giochi degli Heil-Ly che ha già deciso quale potere sviluppare.',
        en: 'A Heil-Ly arcade employee who has already decided what ability to develop.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 393,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 393, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 393,
          source: 'chapter',
          value: [
            {
              character: 'matvere',
              type: {
                it: 'Compagno nella famiglia',
                en: 'Fellow family member',
              },
              summary: {
                it: 'Discute con Matvere e gli altri membri delle capacità da sviluppare.',
                en: 'He discusses abilities to develop with Matvere and the other members.',
              },
            },
          ],
        },
      ],
    },
    'voconte': {
      role: { it: 'Trafficante di persone', en: 'Human trafficker' },
      log: {
        it: 'Un membro degli Heil-Ly che propone di attirare vittime attraverso una porta.',
        en: 'A Heil-Ly member who proposes luring victims through a door.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 393,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 393, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 393,
          source: 'chapter',
          value: [
            {
              character: 'perigord',
              type: {
                it: 'Compagno nella famiglia',
                en: 'Fellow family member',
              },
              summary: {
                it: 'Risponde alla proposta di Perigord offrendo il proprio potere della porta.',
                en: 'He answers Perigord’s proposal by offering his own door ability.',
              },
            },
          ],
        },
      ],
    },
    'matvere': {
      role: { it: 'Studente universitario', en: 'College student' },
      log: {
        it: 'Uno studente degli Heil-Ly che vuole creare un’arma da fuoco con il Nen.',
        en: 'A Heil-Ly college student who wants to create a firearm with Nen.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 393,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 393, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 393,
          source: 'chapter',
          value: [
            {
              character: 'gelato',
              type: {
                it: 'Compagna nella famiglia',
                en: 'Fellow family member',
              },
              summary: {
                it: 'Gelato gli ricorda che la categoria di Nen non si sceglie.',
                en: 'Gelato reminds him that Nen category is not a choice.',
              },
            },
          ],
        },
      ],
    },
    'tassi': {
      role: { it: 'Membro degli Xi-Yu', en: 'Xi-Yu member' },
      log: {
        it: 'Un membro degli Xi-Yu entra in una stanza per recuperare un coltello e cade in una trappola mortale.',
        en: 'A Xi-Yu member enters a room to retrieve a knife and falls into a fatal trap.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: { it: 'Famiglia Xi-Yu', en: 'Xi-Yu Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 394, source: 'chapter', value: 'deceased' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: [
            {
              character: 'bille',
              type: { it: 'Assassino', en: 'Killer' },
              summary: {
                it: 'Bille lo colpisce al collo appena arriva oltre la porta.',
                en: 'Bille stabs him in the neck as soon as he arrives beyond the door.',
              },
            },
          ],
        },
      ],
    },
    'terebellum': {
      role: { it: 'Contrabbandiere e sicario', en: 'Smuggler and hitman' },
      log: {
        it: 'Un membro degli Heil-Ly che trasporta i corpi nell’area di smaltimento.',
        en: 'A Heil-Ly member who carries bodies to the disposal area.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 394, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: [
            {
              character: 'chiffon-toto',
              type: {
                it: 'Compagna nello smaltimento',
                en: 'Fellow disposal worker',
              },
              summary: {
                it: 'Consegna il corpo di Tassi alle due donne incaricate di smaltirlo.',
                en: 'He delivers Tassi’s body to the two women responsible for disposing of it.',
              },
            },
          ],
        },
      ],
    },
    'chiffon-toto': {
      role: { it: 'Sarta', en: 'Seamstress' },
      log: {
        it: 'Una sarta degli Heil-Ly che si occupa dei corpi insieme a un’altra membro della famiglia.',
        en: 'A Heil-Ly seamstress who handles bodies with another member of the family.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 394, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: [
            {
              character: 'montblanc-toto',
              type: {
                it: 'Compagna nello smaltimento',
                en: 'Fellow disposal worker',
              },
              summary: {
                it: 'Le due si occupano del corpo portato da Terebellum.',
                en: 'The two handle the body brought by Terebellum.',
              },
            },
          ],
        },
      ],
    },
    'montblanc-toto': {
      role: {
        it: 'Operaia in una fabbrica di mangimi',
        en: 'Animal feed factory worker',
      },
      log: {
        it: 'Una membro degli Heil-Ly incaricata di smaltire i corpi nel rifugio.',
        en: 'A Heil-Ly member responsible for disposing of bodies in the hideout.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 394, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: [
            {
              character: 'chiffon-toto',
              type: {
                it: 'Compagna nello smaltimento',
                en: 'Fellow disposal worker',
              },
              summary: {
                it: 'Lavora con Chiffon sul corpo portato nel rifugio.',
                en: 'She works with Chiffon on the body brought into the hideout.',
              },
            },
          ],
        },
      ],
    },
    'sodom': {
      role: {
        it: 'Medico clandestino e sicario',
        en: 'Back-alley doctor and hitman',
      },
      log: {
        it: 'Un membro degli Heil-Ly si offre per catturare una guardia del quarto principe.',
        en: 'A Heil-Ly member volunteers to capture one of the Fourth Prince’s guards.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 394, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: [
            {
              character: 'matvere',
              type: {
                it: 'Compagno nella famiglia',
                en: 'Fellow family member',
              },
              summary: {
                it: 'Si offre per la missione dopo che Matvere preferisce un altro compito.',
                en: 'He volunteers for the mission after Matvere prefers another task.',
              },
            },
          ],
        },
      ],
    },
    'borksen': {
      role: {
        it: 'Soldatessa del quarto principe',
        en: 'Fourth Prince’s soldier',
      },
      log: {
        it: 'Una soldatessa viene trasferita ai livelli inferiori dopo aver condiviso notizie sul Nen.',
        en: 'A soldier is transferred to the lower tiers after sharing information about Nen.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: {
            it: 'Guardie del quarto principe',
            en: 'Fourth Prince’s guards',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 394, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: [
            {
              character: 'otocin',
              type: { it: 'Amico e collega', en: 'Friend and fellow soldier' },
              summary: {
                it: 'Gli rimprovera di averla fatta trasferire parlando con il caporale.',
                en: 'She rebukes him for getting her transferred by speaking to the corporal.',
              },
            },
          ],
        },
      ],
    },
    'otocin': {
      role: {
        it: 'Soldato del quarto principe',
        en: 'Fourth Prince’s soldier',
      },
      log: {
        it: 'Un soldato cerca informazioni sul Nen mentre la sua unità cerca la mafia.',
        en: 'A soldier seeks information about Nen while his unit searches for the mafia.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: {
            it: 'Guardie del quarto principe',
            en: 'Fourth Prince’s guards',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 394, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: [
            {
              character: 'borksen',
              type: { it: 'Amica e collega', en: 'Friend and fellow soldier' },
              summary: {
                it: 'Condivide con il caporale le informazioni che ha ricevuto da Borksen.',
                en: 'He shares the information he received from Borksen with the corporal.',
              },
            },
          ],
        },
      ],
    },
    'gipper': {
      role: {
        it: 'Caporale del quarto principe',
        en: 'Fourth Prince’s corporal',
      },
      log: {
        it: 'Un caporale guida la ricerca della mafia nei livelli inferiori della nave.',
        en: 'A corporal leads the search for the mafia in the ship’s lower tiers.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: {
            it: 'Guardie del quarto principe',
            en: 'Fourth Prince’s guards',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 394, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: [
            {
              character: 'otocin',
              type: { it: 'Soldato subordinato', en: 'Subordinate soldier' },
              summary: {
                it: 'Rimprovera Otocin e gli chiede da dove vengano le informazioni sul Nen.',
                en: 'He reprimands Otocin and asks where his information about Nen came from.',
              },
            },
          ],
        },
      ],
    },
    'momolly': {
      role: {
        it: 'Soldatessa del quarto principe',
        en: 'Fourth Prince’s soldier',
      },
      log: {
        it: 'Una soldatessa discute con i compagni di come sopravvivere alla ricerca della mafia.',
        en: 'A soldier discusses with her comrades how to survive the search for the mafia.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: {
            it: 'Guardie del quarto principe',
            en: 'Fourth Prince’s guards',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 394, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 394,
          source: 'chapter',
          value: [
            {
              character: 'borksen',
              type: { it: 'Amica e collega', en: 'Friend and fellow soldier' },
              summary: {
                it: 'Chiede a Borksen di preparare un piano nel caso uno di loro venga catturato.',
                en: 'She asks Borksen to prepare a plan in case one of them is captured.',
              },
            },
          ],
        },
      ],
    },
    'lisores': {
      role: { it: 'Sacerdote', en: 'Priest' },
      log: {
        it: 'Un sacerdote accoglie i bambini della Meteor City nella chiesa e li avverte dei rapimenti.',
        en: 'A priest welcomes Meteor City’s children into the church and warns them about kidnappings.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 395,
          source: 'chapter',
          value: { it: 'Chiesa della Meteor City', en: 'Meteor City’s church' },
        },
      ],
      status: [
        { episode: 148, chapter: 395, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 395,
          source: 'chapter',
          value: [
            {
              character: 'chrollo',
              type: { it: 'Bambino che accoglie', en: 'Child he welcomes' },
              summary: {
                it: 'Permette a Quoll di usare la sala video della chiesa.',
                en: 'He lets Chrollo use the church’s video room.',
              },
            },
          ],
        },
      ],
    },
    'sarasa': {
      role: {
        it: 'Doppiatrice nel gruppo di bambini',
        en: 'Voice actor in the children’s group',
      },
      log: {
        it: 'Una bambina della Meteor City accetta di doppiare un personaggio per gli amici.',
        en: 'A Meteor City child agrees to voice a character for her friends.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 395,
          source: 'chapter',
          value: {
            it: 'Gruppo di bambini della Meteor City',
            en: 'Meteor City children’s group',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 395, source: 'chapter', value: 'alive' },
        { episode: 148, chapter: 397, source: 'chapter', value: 'deceased' },
      ],
      origin: [
        {
          episode: 148,
          chapter: 395,
          source: 'chapter',
          value: { it: 'Meteor City', en: 'Meteor City' },
          place: 'meteor-city',
        },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 395,
          source: 'chapter',
          value: [
            {
              character: 'pakunoda',
              type: { it: 'Amica', en: 'Friend' },
              summary: {
                it: 'Accetta la proposta di Pakunoda di partecipare al doppiaggio.',
                en: 'She accepts Pakunoda’s invitation to join the dubbing project.',
              },
            },
          ],
        },
      ],
    },
    'sheila': {
      role: { it: 'Aspirante Hunter', en: 'Aspiring Hunter' },
      log: {
        it: 'Una bambina della Meteor City legge sempre lo stesso libro e vuole diventare Hunter.',
        en: 'A Meteor City child keeps reading the same book and wants to become a Hunter.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 395,
          source: 'chapter',
          value: {
            it: 'Gruppo di bambini della Meteor City',
            en: 'Meteor City children’s group',
          },
        },
        {
          episode: 148,
          chapter: 397,
          source: 'chapter',
          value: {
            it: 'Lascia il gruppo dei bambini',
            en: 'Leaves the children’s group',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 395, source: 'chapter', value: 'alive' },
      ],
      origin: [
        {
          episode: 148,
          chapter: 395,
          source: 'chapter',
          value: { it: 'Meteor City', en: 'Meteor City' },
          place: 'meteor-city',
        },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 395,
          source: 'chapter',
          value: [
            {
              character: 'sarasa',
              type: { it: 'Amica', en: 'Friend' },
              summary: {
                it: 'Accetta di partecipare al doppiaggio se lo fa anche Sarasa.',
                en: 'She agrees to join the dubbing project if Sarasa does too.',
              },
            },
          ],
        },
      ],
    },
    'renko': {
      role: { it: 'Imbalsamatrice', en: 'Embalmer' },
      log: {
        it: 'Un’imbalsamatrice usa il Nen per ricomporre il corpo di una bambina.',
        en: 'An embalmer uses Nen to restore a child’s body.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 397,
          source: 'chapter',
          value: { it: 'Imbalsamatrice', en: 'Embalmer' },
        },
      ],
      status: [
        { episode: 148, chapter: 397, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 397,
          source: 'chapter',
          value: [
            {
              character: 'machi',
              type: {
                it: 'Bambina che vuole imparare',
                en: 'Child who wants to learn',
              },
              summary: {
                it: 'Machi le chiede di imparare il suo lavoro. Renko la invita a farle visita.',
                en: 'Machi asks to learn her craft. Renko invites her to visit.',
              },
            },
          ],
        },
      ],
    },
    'yokotani': {
      role: { it: 'Avvocato degli Heil-Ly', en: 'Heil-Ly lawyer' },
      log: {
        it: 'L’avvocato degli Heil-Ly affronta due intrusi nel rifugio della famiglia.',
        en: 'The Heil-Ly lawyer confronts two intruders in the family’s hideout.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 399,
          source: 'chapter',
          value: { it: 'Famiglia Heil-Ly', en: 'Heil-Ly Family' },
        },
      ],
      status: [
        { episode: 148, chapter: 399, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 399,
          source: 'chapter',
          value: [
            {
              character: 'nobunaga',
              type: { it: 'Intruso che espelle', en: 'Intruder he expels' },
              summary: {
                it: 'Le sue guardie di Nen trascinano Nobunaga fuori dal rifugio.',
                en: 'His Nen guards drag Nobunaga out of the hideout.',
              },
            },
          ],
        },
      ],
    },
    'madwig': {
      role: { it: 'Dipendente di Tyson', en: 'Tyson’s employee' },
      log: {
        it: 'Un dipendente di Tyson interpreta un sicario che ha perso la memoria.',
        en: 'A Tyson employee plays a hitman who has lost his memory.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 400,
          source: 'chapter',
          value: { it: 'Personale di Tyson', en: 'Tyson’s staff' },
        },
      ],
      status: [
        { episode: 148, chapter: 400, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 400,
          source: 'chapter',
          value: [
            {
              character: 'tyson-hui-guo-rou',
              type: { it: 'Datore di lavoro', en: 'Employer' },
              summary: {
                it: 'Tyson gli assegna un ruolo da interpretare davanti ai colleghi.',
                en: 'Tyson gives him a role to perform in front of his colleagues.',
              },
            },
          ],
        },
      ],
    },
    'himonce': {
      role: { it: 'Dipendente di Tyson', en: 'Tyson’s employee' },
      log: {
        it: 'Un dipendente di Tyson si presenta come la più grande star del mondo.',
        en: 'A Tyson employee presents himself as the world’s biggest star.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 400,
          source: 'chapter',
          value: { it: 'Personale di Tyson', en: 'Tyson’s staff' },
        },
      ],
      status: [
        { episode: 148, chapter: 400, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 400,
          source: 'chapter',
          value: [
            {
              character: 'tyson-hui-guo-rou',
              type: { it: 'Datore di lavoro', en: 'Employer' },
              summary: {
                it: 'Tyson gli assegna un ruolo da interpretare davanti ai colleghi.',
                en: 'Tyson gives him a role to perform in front of his colleagues.',
              },
            },
          ],
        },
      ],
    },
    'anzel': {
      role: { it: 'Dipendente di Tyson', en: 'Tyson’s employee' },
      log: {
        it: 'Un dipendente di Tyson interpreta il ruolo del fratello minore del principe.',
        en: 'A Tyson employee plays the prince’s younger brother.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 400,
          source: 'chapter',
          value: { it: 'Personale di Tyson', en: 'Tyson’s staff' },
        },
      ],
      status: [
        { episode: 148, chapter: 400, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 400,
          source: 'chapter',
          value: [
            {
              character: 'tyson-hui-guo-rou',
              type: { it: 'Datore di lavoro', en: 'Employer' },
              summary: {
                it: 'Tyson gli assegna un ruolo da interpretare davanti ai colleghi.',
                en: 'Tyson gives him a role to perform in front of his colleagues.',
              },
            },
          ],
        },
      ],
    },
    'hyuga': {
      role: { it: 'Dipendente di Tyson', en: 'Tyson’s employee' },
      log: {
        it: 'Un dipendente di Tyson si presenta come un insegnante leggendario.',
        en: 'A Tyson employee presents himself as a legendary tutor.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 400,
          source: 'chapter',
          value: { it: 'Personale di Tyson', en: 'Tyson’s staff' },
        },
      ],
      status: [
        { episode: 148, chapter: 400, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 400,
          source: 'chapter',
          value: [
            {
              character: 'tyson-hui-guo-rou',
              type: { it: 'Datore di lavoro', en: 'Employer' },
              summary: {
                it: 'Tyson gli assegna un ruolo da interpretare davanti ai colleghi.',
                en: 'Tyson gives him a role to perform in front of his colleagues.',
              },
            },
          ],
        },
      ],
    },
    'kaiser': {
      role: {
        it: 'Funzionario dell’Ufficio di Giustizia',
        en: 'Justice Bureau official',
      },
      log: {
        it: 'Un funzionario protegge due giovani principi e prepara un piano con Melody.',
        en: 'An official protects two young princes and prepares a plan with Melody.',
      },
      affiliation: [
        {
          episode: 148,
          chapter: 400,
          source: 'chapter',
          value: {
            it: 'Ufficio di Giustizia di Cakin',
            en: 'Kakin Justice Bureau',
          },
        },
      ],
      status: [
        { episode: 148, chapter: 400, source: 'chapter', value: 'alive' },
      ],
      relationships: [
        {
          episode: 148,
          chapter: 400,
          source: 'chapter',
          value: [
            {
              character: 'melody',
              type: { it: 'Alleata nel piano', en: 'Ally in the plan' },
              summary: {
                it: 'Propone a Melody un piano per proteggere Fugetsu eliminando i principi maggiori.',
                en: 'He proposes a plan to Melody to protect Fugetsu by eliminating the higher princes.',
              },
            },
          ],
        },
      ],
    },
  },
}

export const KAKIN_PHASE_4_PLACES: Record<
  string,
  PlaceDossier<HunterVocabulary>
> = {
  'all-faiths-church': {
    arc: 'kakin-arc',
    form: 'building',
    region: 'mainland',
    landmark: { it: 'La sala video', en: 'The video room' },
    log: {
      it: 'La chiesa della Meteor City ha una sala video e un auditorium per i bambini.',
      en: 'Meteor City’s church has a video room and an auditorium for the children.',
    },
    filedHere: ['chrollo', 'pakunoda', 'lisores', 'sarasa', 'sheila'],
  },
  'uga-forest': {
    arc: 'kakin-arc',
    form: 'forest',
    region: 'mainland',
    landmark: {
      it: 'La discarica vicina alla foresta',
      en: 'The dump near the forest',
    },
    log: {
      it: 'Una foresta vicino alla discarica dove una bambina cerca videocassette.',
      en: 'A forest near the dump where a child searches for videotapes.',
    },
    filedHere: ['sarasa'],
  },
}
