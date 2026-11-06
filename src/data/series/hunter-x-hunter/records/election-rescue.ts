import { electionChronicles } from './election.chronicle'
import type { HunterSaga } from './saga'

const links = {
  allukaKillua: {
    character: 'killua',
    type: { it: 'Fratello maggiore', en: 'Older brother' },
    summary: {
      it: 'Chiede di vedere sua sorella perché crede che possa aiutare il suo amico.',
      en: 'He asks to see his sister because he believes she can help his friend.',
    },
  },
  allukaSilva: {
    character: 'silva',
    type: { it: 'Padre', en: 'Father' },
    summary: {
      it: 'Silva tiene sua figlia in una stanza chiusa a chiave. Accetta di accompagnare Killua da lei.',
      en: 'Silva keeps his daughter in a locked room. He agrees to take Killua to her.',
    },
  },
  nanikaAlluka: {
    character: 'alluka-zoldyck',
    type: { it: 'Condivide il corpo con lei', en: 'Shares a body with her' },
    summary: {
      it: 'Può prendere il controllo dello stesso corpo per esaudire desideri.',
      en: 'She can take control of the same body to grant wishes.',
    },
  },
  nanikaKillua: {
    character: 'killua',
    type: { it: 'Persona che la riconosce', en: 'Person who recognizes her' },
    summary: {
      it: 'Killua riconosce chi gli sta parlando quando le due si alternano.',
      en: 'Killua can tell who is speaking to him when the two take turns.',
    },
  },
  nanikaGon: {
    character: 'gon-freecss',
    type: { it: 'Paziente che guarisce', en: 'Patient she heals' },
    summary: {
      it: 'Su richiesta di Killua, prende la mano di Gon e lo guarisce.',
      en: 'At Killua’s request, she takes Gon’s hand and heals him.',
    },
  },
  tsuboneAmane: {
    character: 'amane',
    type: { it: 'Collega di scorta', en: 'Fellow escort' },
    summary: {
      it: 'Silva le assegna alla stessa scorta.',
      en: 'Silva assigns them to the same escort.',
    },
  },
  tsuboneKillua: {
    character: 'killua',
    type: { it: 'Ragazzo che scorta', en: 'Person she escorts' },
    summary: {
      it: 'Avverte Killua che lo riporterà a casa se infrange le regole della scorta.',
      en: 'She warns Killua she will take him home if he breaks the rules of the escort.',
    },
  },
  amaneTsubone: {
    character: 'tsubone',
    type: { it: 'Collega di scorta', en: 'Fellow escort' },
    summary: {
      it: 'Silva incarica entrambe di accompagnare Killua e sua sorella.',
      en: 'Silva assigns the two of them to accompany Killua and his sister.',
    },
  },
  amaneCanary: {
    character: 'canary',
    type: { it: 'Collega', en: 'Fellow servant' },
    summary: {
      it: 'Amane si presenta prima che partano.',
      en: 'Amane introduces herself before they set out.',
    },
  },
}

export const ELECTION_RESCUE: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  entries: [
    {
      id: 'yasuha',
      kind: 'character',
      revealedAtEpisode: 139,
      revealedAtChapter: 323,
      name: { it: 'Yasuha', en: 'Yasuha' },
      summary: {
        it: 'Una maggiordoma degli Zoldick. Chiede di diventare ricca mentre si occupa di Alluka.',
        en: 'A Zoldyck butler who asks to become rich while looking after Alluka.',
      },
      visual: { art: 'yasuha', tint: 'sand' },
    },
    {
      id: 'alluka-zoldyck',
      kind: 'character',
      revealedAtEpisode: 138,
      revealedAtChapter: 321,
      name: { it: 'Alluka Zoldick', en: 'Alluka Zoldyck' },
      summary: {
        it: 'La sorella minore di Killua. La sua famiglia la tiene in una stanza chiusa a chiave nella tenuta.',
        en: 'Killua’s younger sister. Her family keeps her in a locked room on its estate.',
      },
      visual: { art: 'alluka-zoldyck', tint: 'lavender' },
    },
    {
      id: 'nanika',
      kind: 'character',
      revealedAtEpisode: 139,
      revealedAtChapter: 332,
      unanchored: true,
      name: { it: 'Cosa', en: 'Nanika' },
      summary: {
        it: 'Una presenza che condivide il corpo di Alluka e può esaudire desideri.',
        en: 'A presence that shares Alluka’s body and can grant wishes.',
      },
      visual: { art: 'nanika', tint: 'lavender' },
    },
    {
      id: 'mitsuba',
      kind: 'character',
      revealedAtEpisode: 138,
      revealedAtChapter: 322,
      name: { it: 'Mitsuba', en: 'Mitsuba' },
      summary: {
        it: 'Una domestica incaricata di accudire Alluka da piccola.',
        en: 'A servant assigned to look after Alluka when she was younger.',
      },
      visual: { art: 'mitsuba', tint: 'lavender' },
    },
    {
      id: 'kasuga',
      kind: 'character',
      revealedAtEpisode: 138,
      revealedAtChapter: 322,
      name: { it: 'Kasuga', en: 'Kasuga' },
      summary: {
        it: 'Una domestica scelta da Illumi per accudire Alluka.',
        en: 'A servant chosen by Illumi to look after Alluka.',
      },
      visual: { art: 'kasuga', tint: 'lavender' },
    },
    {
      id: 'muna',
      kind: 'character',
      revealedAtEpisode: 139,
      revealedAtChapter: 323,
      name: { it: 'Muna', en: 'Muna' },
      summary: {
        it: 'Un turista che scatta fotografie nella tenuta degli Zoldick.',
        en: 'A tourist who takes photographs on the Zoldyck estate.',
      },
      visual: { art: 'muna', tint: 'lavender' },
    },
    {
      id: 'tsubone',
      kind: 'character',
      revealedAtEpisode: 140,
      revealedAtChapter: 324,
      name: { it: 'Tsubone', en: 'Tsubone' },
      summary: {
        it: 'Una domestica mandata da Silva a scortare Killua e sua sorella.',
        en: 'A servant sent by Silva to escort Killua and his sister.',
      },
      visual: { art: 'tsubone', tint: 'lavender' },
    },
    {
      id: 'amane',
      kind: 'character',
      revealedAtEpisode: 140,
      revealedAtChapter: 324,
      name: { it: 'Amane', en: 'Amane' },
      summary: {
        it: 'Una delle domestiche incaricate da Silva di scortare Killua e sua sorella.',
        en: 'One of the servants Silva assigns to escort Killua and his sister.',
      },
      visual: { art: 'amane', tint: 'lavender' },
    },
    {
      id: 'hishita',
      kind: 'character',
      revealedAtEpisode: 143,
      revealedAtChapter: 329,
      name: { it: 'Hishita', en: 'Hishita' },
      summary: {
        it: 'Un domestico della famiglia Zoldick che guida un’auto per Killua.',
        en: 'A servant of the Zoldyck family who drives a car for Killua.',
      },
      visual: { art: 'hishita', tint: 'lavender' },
    },
  ],
  dossiers: {
    'yasuha': {
      chronicle: electionChronicles.yasuha,
      role: { it: 'Al servizio di Alluka', en: 'Alluka’s attendant' },
      log: {
        it: 'Dopo aver portato Alluka sulle spalle, le chiede di diventare ricca. In seguito si scusa per aver espresso quel desiderio.',
        en: 'After giving Alluka a piggyback ride, she asks to become rich. She later apologizes for making the wish.',
      },
      affiliation: [
        {
          episode: 139,
          chapter: 323,
          value: {
            it: 'Personale della tenuta Zoldick',
            en: 'Zoldyck household staff',
          },
        },
      ],
      status: [{ episode: 139, chapter: 323, value: 'unknown' }],
      relationships: [
        {
          episode: 139,
          chapter: 323,
          value: [
            {
              character: 'alluka-zoldyck',
              type: {
                it: 'Bambina affidata alle sue cure',
                en: 'Child in her care',
              },
              summary: {
                it: 'La porta sulle spalle quando glielo chiede. Poi le chiede di diventare ricca.',
                en: 'Gives her a piggyback ride when asked. Then she asks to become rich.',
              },
            },
          ],
        },
      ],
    },
    'alluka-zoldyck': {
      chronicle: electionChronicles['alluka-zoldyck'],
      role: { it: 'Sorella di Killua', en: 'Killua’s sister' },
      log: {
        it: 'Killua chiede al padre di poter vedere sua sorella. Crede che lei possa aiutare il suo amico. Silva accetta di accompagnarlo nella sua stanza.',
        en: 'Killua asks his father to let him see his sister. He believes she can help his friend. Silva agrees to take him to her room.',
      },
      affiliation: [
        {
          episode: 138,
          chapter: 321,
          value: { it: 'Famiglia Zoldick', en: 'Zoldyck family' },
        },
      ],
      status: [
        { episode: 138, chapter: 321, value: 'imprisoned' },
        { episode: 140, chapter: 324, value: 'alive' },
      ],
      relationships: [
        {
          episode: 138,
          chapter: 321,
          value: [links.allukaKillua, links.allukaSilva],
        },
        {
          episode: 145,
          chapter: 332,
          value: [
            links.allukaKillua,
            {
              character: 'nanika',
              type: { it: 'Condivide il suo corpo', en: 'Shares her body' },
              summary: {
                it: 'Si alternano nel controllo dello stesso corpo.',
                en: 'They take turns in control of the same body.',
              },
            },
            links.allukaSilva,
          ],
        },
        {
          episode: 146,
          chapter: 336,
          value: [
            {
              character: 'killua',
              type: {
                it: 'Fratello che promette di proteggerla',
                en: 'Brother who promises to protect her',
              },
              summary: {
                it: 'Quando gli chiede di proteggerle entrambe, lui si scusa e promette di farlo.',
                en: 'When she asks him to protect them both, he apologizes and promises to do so.',
              },
            },
            {
              character: 'nanika',
              type: { it: 'Compagna che difende', en: 'Companion she defends' },
              summary: {
                it: 'Chiede a Killua di avere la stessa cura per entrambe.',
                en: 'She insists that Killua treat both of them with the same care.',
              },
            },
            links.allukaSilva,
          ],
        },
      ],
    },
    'nanika': {
      chronicle: electionChronicles.nanika,
      role: { it: 'Esaudisce desideri', en: 'Grants wishes' },
      log: {
        it: 'Killua la distingue da Alluka dal modo in cui si rivolge a lui.',
        en: 'Killua can distinguish her from Alluka by the way she addresses him.',
      },
      affiliation: [
        {
          episode: 139,
          chapter: 332,
          value: {
            it: 'Condivide il corpo con Alluka',
            en: 'Shares a body with Alluka',
          },
        },
      ],
      status: [{ episode: 139, chapter: 332, value: 'alive' }],
      relationships: [
        {
          episode: 139,
          chapter: 332,
          value: [links.nanikaAlluka, links.nanikaKillua],
        },
        {
          episode: 145,
          chapter: 333,
          value: [links.nanikaAlluka, links.nanikaKillua, links.nanikaGon],
        },
        {
          episode: 146,
          chapter: 336,
          value: [
            {
              character: 'alluka-zoldyck',
              type: {
                it: 'Compagna che la difende',
                en: 'Companion who defends her',
              },
              summary: {
                it: 'Alluka protesta quando Killua le ordina di non mostrarsi più.',
                en: 'Alluka objects when Killua tells her to stay hidden.',
              },
            },
            {
              character: 'killua',
              type: { it: 'Persona che la protegge', en: 'Protector' },
              summary: {
                it: 'Killua ritira l’ordine di non mostrarsi più e promette di proteggere lei e Alluka.',
                en: 'Killua takes back his order to stay hidden and promises to protect her as well as Alluka.',
              },
            },
            links.nanikaGon,
          ],
        },
      ],
    },
    'mitsuba': {
      chronicle: electionChronicles.mitsuba,
      role: { it: 'Al servizio di Alluka', en: 'Alluka’s attendant' },
      log: {
        it: 'Prende Alluka in braccio e la porta di sopra. Allarmata da un cambiamento nel volto della bambina, si rivolge a Killua.',
        en: 'She carries Alluka and takes her upstairs. Alarmed by a change in the child’s face, she turns to Killua.',
      },
      affiliation: [
        {
          episode: 138,
          chapter: 322,
          value: {
            it: 'Personale della tenuta Zoldick',
            en: 'Zoldyck household staff',
          },
        },
      ],
      status: [{ episode: 138, chapter: 322, value: 'deceased' }],
      relationships: [
        {
          episode: 138,
          chapter: 322,
          value: [
            {
              character: 'alluka-zoldyck',
              type: {
                it: 'Bambina affidata alle sue cure',
                en: 'Child in her care',
              },
              summary: {
                it: 'Mitsuba accoglie le prime richieste della bambina. Su ordine della madre, in seguito ne rifiuta quattro di fila.',
                en: 'Mitsuba follows the child’s first requests. On the mother’s orders, she later refuses four requests in a row.',
              },
            },
            {
              character: 'killua',
              type: {
                it: 'Persona a cui chiede aiuto',
                en: 'Person she asks for help',
              },
              summary: {
                it: 'Si rivolge a Killua dopo aver visto cambiare il volto della bambina.',
                en: 'She turns to Killua after seeing the child’s face change.',
              },
            },
          ],
        },
      ],
    },
    'kasuga': {
      chronicle: electionChronicles.kasuga,
      role: { it: 'Al servizio di Alluka', en: 'Alluka’s attendant' },
      log: {
        it: 'Illumi le ordina di accogliere le richieste di Alluka. In cambio si offre di sorvolare su una relazione vietata dalle regole della tenuta.',
        en: 'Illumi tells her to comply with Alluka’s requests. He offers to overlook a relationship that breaks the household’s rules.',
      },
      affiliation: [
        {
          episode: 138,
          chapter: 322,
          value: {
            it: 'Personale della tenuta Zoldick',
            en: 'Zoldyck household staff',
          },
        },
      ],
      status: [{ episode: 138, chapter: 322, value: 'deceased' }],
      relationships: [
        {
          episode: 138,
          chapter: 322,
          value: [
            {
              character: 'illumi',
              type: {
                it: 'Persona che le affida l’incarico',
                en: 'Person who gives her the assignment',
              },
              summary: {
                it: 'Le chiede di accogliere le richieste della bambina in cambio del suo silenzio sulla relazione.',
                en: 'He asks her to comply with the child’s requests in exchange for overlooking her relationship.',
              },
            },
            {
              character: 'alluka-zoldyck',
              type: {
                it: 'Bambina affidata alle sue cure',
                en: 'Child in her care',
              },
              summary: {
                it: 'Kasuga rifiuta le richieste della bambina quando le vengono chieste parti del proprio corpo.',
                en: 'Kasuga refuses the child’s requests when she is asked to give up parts of her own body.',
              },
            },
          ],
        },
      ],
    },
    'muna': {
      chronicle: electionChronicles.muna,
      role: { it: 'Turista', en: 'Tourist' },
      log: {
        it: 'Milki gli mostra la tenuta. Alluka e il fratello minore li accompagnano.',
        en: 'Milluki shows him around the estate. Alluka and her younger brother come with them.',
      },
      affiliation: [
        {
          episode: 139,
          chapter: 323,
          value: {
            it: 'Visitatore della tenuta degli Zoldick',
            en: 'Visitor to the Zoldyck estate',
          },
        },
      ],
      status: [
        { episode: 139, chapter: 323, source: 'episode', value: 'unknown' },
        { episode: 139, chapter: 323, source: 'chapter', value: 'deceased' },
      ],
      relationships: [
        {
          episode: 139,
          chapter: 323,
          value: [
            {
              character: 'milluki',
              type: { it: 'Guida', en: 'Guide' },
              summary: {
                it: 'Milki gli mostra la tenuta.',
                en: 'Milluki shows him around the estate.',
              },
            },
            {
              character: 'alluka-zoldyck',
              type: {
                it: 'Bambina durante la visita',
                en: 'Child on the tour',
              },
              summary: {
                it: 'Accompagna lui e la guida durante la visita alla tenuta.',
                en: 'She accompanies him and his guide while he visits the estate.',
              },
            },
          ],
        },
      ],
    },
    'tsubone': {
      chronicle: electionChronicles.tsubone,
      role: { it: 'Al servizio degli Zoldick', en: 'Zoldyck servant' },
      log: {
        it: 'Ha l’ordine di riportare Killua a casa se infrange le regole della scorta.',
        en: 'She is under orders to take Killua home if he breaks the rules of the escort.',
      },
      affiliation: [
        {
          episode: 140,
          chapter: 324,
          value: {
            it: 'Personale della tenuta Zoldick',
            en: 'Zoldyck household staff',
          },
        },
      ],
      status: [{ episode: 140, chapter: 324, value: 'alive' }],
      relationships: [
        {
          episode: 140,
          chapter: 324,
          value: [
            links.tsuboneKillua,
            links.tsuboneAmane,
            {
              character: 'alluka-zoldyck',
              type: {
                it: 'Ragazza affidata alle sue cure',
                en: 'Girl in her care',
              },
              summary: {
                it: 'Accoglie una richiesta della ragazza e si allontana perché non possa fargliene altre.',
                en: 'She grants one of the girl’s requests and stays out of reach so the girl cannot make another.',
              },
            },
          ],
        },
        {
          episode: 143,
          chapter: 330,
          value: [
            links.tsuboneKillua,
            links.tsuboneAmane,
            {
              character: 'alluka-zoldyck',
              type: {
                it: 'Ragazza di cui accoglie le richieste',
                en: 'Girl whose requests she accepts',
              },
              summary: {
                it: 'Torna e lascia che la ragazza completi le sue richieste.',
                en: 'She returns and lets the girl finish making her requests.',
              },
            },
          ],
        },
      ],
    },
    'amane': {
      chronicle: electionChronicles.amane,
      role: { it: 'Al servizio degli Zoldick', en: 'Zoldyck servant' },
      log: {
        it: 'Si unisce alla scorta prima che Killua lasci la tenuta e viaggia con gli altri domestici.',
        en: 'She joins the escort before Killua leaves the estate and travels with the other servants.',
      },
      affiliation: [
        {
          episode: 140,
          chapter: 324,
          value: {
            it: 'Personale della tenuta Zoldick',
            en: 'Zoldyck household staff',
          },
        },
      ],
      status: [{ episode: 140, chapter: 324, value: 'alive' }],
      relationships: [
        {
          episode: 140,
          chapter: 324,
          value: [links.amaneTsubone, links.amaneCanary],
        },
        {
          episode: 141,
          chapter: 326,
          value: [
            links.amaneTsubone,
            links.amaneCanary,
            {
              character: 'killua',
              type: {
                it: 'Ragazzo che ha l’ordine di proteggere',
                en: 'Person she is ordered to protect',
              },
              summary: {
                it: 'Dice a Killua che la sua missione è proteggerlo. La risposta non lo rassicura.',
                en: 'She tells Killua that her mission is to protect him. Her answer does not reassure him.',
              },
            },
          ],
        },
      ],
    },
    'hishita': {
      chronicle: electionChronicles.hishita,
      role: { it: 'Al servizio degli Zoldick', en: 'Zoldyck servant' },
      log: {
        it: 'Aspetta con un’auto nel luogo in cui atterra Killua. Quando la strada viene bloccata, dice che ripartirà solo per ordine di Illumi.',
        en: 'He waits with a car where Killua lands. When the road is blocked, he says he will only drive on Illumi’s orders.',
      },
      affiliation: [
        {
          episode: 143,
          chapter: 329,
          value: {
            it: 'Personale della tenuta Zoldick',
            en: 'Zoldyck household staff',
          },
        },
      ],
      status: [{ episode: 143, chapter: 329, value: 'alive' }],
      relationships: [
        {
          episode: 143,
          chapter: 329,
          value: [
            {
              character: 'killua',
              type: { it: 'Passeggero', en: 'Passenger' },
              summary: {
                it: 'Killua gli chiede di guidare fino all’ospedale.',
                en: 'Killua asks him to drive to the hospital.',
              },
            },
            {
              character: 'illumi',
              type: {
                it: 'Persona che lo controlla',
                en: 'Person controlling him',
              },
              summary: {
                it: 'Si rifiuta di superare il blocco senza il permesso di Illumi.',
                en: 'He refuses to drive through the blockade without Illumi’s permission.',
              },
            },
          ],
        },
      ],
    },
  },
}
