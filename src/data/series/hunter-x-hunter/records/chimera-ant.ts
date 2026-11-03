import type { LocalizedText, Relationship } from '~/data/types'

import { NGL_RECORD } from './chimera-ant-places'
import type { HunterEntity, HunterSaga } from './saga'

type Dossier = HunterSaga['dossiers'][string]

const surveyDossier: Dossier = {
  relationships: [
    {
      episode: 77,
      chapter: 186,
      value: [
        {
          character: 'kite',
          type: { it: 'Compagno di ricerca', en: 'Survey teammate' },
          summary: {
            it: 'Lavora con Kaito alla ricerca di nuove specie.',
            en: 'Works with Kite to find new species.',
          },
        },
      ],
    },
  ],
  role: { it: 'Ricerca sul campo', en: 'Field surveyor' },
  log: {
    it: 'Si presenta a Gon e Killua quando si uniscono alla squadra di ricerca.',
    en: 'Introduces themself to Gon and Killua when they join the survey team.',
  },
  status: [{ episode: 77, chapter: 186, value: 'alive' }],
  affiliation: [
    {
      episode: 77,
      chapter: 186,
      value: { it: 'Squadra di ricerca', en: 'Survey team' },
    },
  ],
}

/**
 * Lin and Podungo introduce themselves in chapter 186, but episode 77 has
 * the others name them as two more surveyors, so their log says only what
 * both media show.
 */
const namedSurveyorDossier: Dossier = {
  ...surveyDossier,
  log: {
    it: 'Fa parte della squadra di ricerca di Kaito, a cui si uniscono Gon e Killua.',
    en: 'A member of Kite’s survey team, which Gon and Killua join.',
  },
}

const CHIMERA_ANTS: LocalizedText = { it: 'Formichimere', en: 'Chimera Ants' }
const POKKLE_TEAM: LocalizedText = {
  it: 'Spedizione di Pockul in NGL',
  en: 'Pokkle’s expedition in NGL',
}
const SQUADRON_LEADER: LocalizedText = {
  it: 'Comandante di divisione',
  en: 'Squadron Leader',
}
const ANT_SOLDIER: LocalizedText = {
  it: 'Soldato delle formichimere',
  en: 'Chimera Ant soldier',
}
const EXPEDITION_MEMBER: LocalizedText = {
  it: 'Membro della spedizione',
  en: 'Expedition member',
}

const PEGGY_RAMMOT: Relationship = {
  character: 'rammot',
  type: { it: 'Soldato che studia', en: 'Soldier he studies' },
  summary: {
    it: 'Pegyi vede Rammot risvegliarsi con un nuovo potere dopo la sconfitta.',
    en: 'Peggy watches Rammot wake with a new power after his defeat.',
  },
}
const RAMMOT_BEATEN: Relationship[] = [
  {
    character: 'gon-freecss',
    type: { it: 'Hunter che lo batte', en: 'Hunter who beats him' },
    summary: {
      it: 'Un pugno di Gon fa volare via Rammot, che giura di mangiarlo.',
      en: 'Gon’s punch sends Rammot flying, and Rammot swears to eat him.',
    },
  },
  {
    character: 'killua',
    type: { it: 'Hunter che lo batte', en: 'Hunter who beats him' },
    summary: {
      it: 'Killua stordisce Rammot con un fulmine, e Rammot giura di mangiarlo.',
      en: 'Killua stuns Rammot with lightning, and Rammot swears to eat him.',
    },
  },
]

/** An ant's affiliation from its gate. */
function ant(episode: number, chapter: number): Dossier['affiliation'] {
  return [{ episode, chapter, value: CHIMERA_ANTS }]
}

/** A character entry of this arc, drawn by the drawing of its id. */
function character(
  id: HunterEntity['visual']['art'],
  tint: HunterEntity['visual']['tint'],
  fields: Pick<
    HunterEntity,
    'name' | 'revealedAtChapter' | 'revealedAtEpisode' | 'source' | 'summary'
  >,
): HunterEntity {
  return { id, kind: 'character', ...fields, visual: { art: id, tint } }
}

const SURVEY_SUMMARY: LocalizedText = {
  it: 'Partecipa a una ricerca sulle specie animali.',
  en: 'Takes part in a survey of animal species.',
}

/**
 * Chimera Ant: episodes 76–136 of the 2011 anime and chapters 186–318, as the
 * English Hunter x Hunter Wiki's arc page gives them. Italian Wikipedia calls
 * the insects formichimere. The summary leaves out their aggression: the
 * owner's #796 check puts it in chapter 187, pages 6–8, not at 186 (page
 * references follow the owner's digital edition).
 *
 * Each gate is the first scene whose chapter or episode page reports the name
 * in speech, thought or writing; an episode that adapts a manga naming scene
 * names it there unless an earlier episode already does. The evidence and the
 * names still waiting for a later phase are in
 * docs/content-provenance/hunter-x-hunter-chimera-ant-phase-1.md (#1020).
 */
export const chimeraAnt: HunterSaga = {
  name: { it: 'Formichimere', en: 'Chimera Ant' },
  dossiers: {
    'stick-dinner': surveyDossier,
    'monta-yuras': surveyDossier,
    'banana-kavaro': surveyDossier,
    'spinner-clow': surveyDossier,
    'lin-koshi': namedSurveyorDossier,
    'podungo-lapoy': namedSurveyorDossier,
    'neferpitou': {
      relationships: [
        {
          episode: 85,
          chapter: 198,
          value: [
            {
              character: 'kite',
              type: { it: 'Hunter che affronta', en: 'Hunter they fight' },
              summary: {
                it: 'Affronta Kaito per mettere alla prova la propria forza.',
                en: 'Fights Kite to test their strength.',
              },
            },
          ],
        },
      ],
      role: { it: 'Guardia reale', en: 'Royal Guard' },
      log: {
        it: 'Si presenta con il nome che gli ha dato la regina. Nella prova dell’acqua, la foglia reagisce al suo Nen.',
        en: 'Introduces themself by the name the Queen gave them. In the water test, the leaf reacts to their Nen.',
      },
      status: [{ episode: 84, chapter: 198, value: 'alive' }],
      affiliation: [
        {
          episode: 84,
          chapter: 198,
          value: { it: 'Guardia della regina', en: 'Queen’s guard' },
        },
      ],
    },
    // The manga's Wong receives the survey's results for the government
    // that commissioned it; the anime's tells the team about the ant. Both
    // hire them, so the text says that much and names no country.
    'wong': {
      relationships: [
        {
          episode: 77,
          chapter: 187,
          value: [
            {
              character: 'kite',
              type: { it: 'Hunter che ingaggia', en: 'Hunter he hires' },
              summary: {
                it: 'Wong ingaggia la squadra di Kaito e le parla dei resti di una creatura sconosciuta.',
                en: 'Wong hires Kite’s team and tells them about the remains of an unknown creature.',
              },
            },
          ],
        },
      ],
      role: { it: 'Committente della ricerca', en: 'Survey client' },
      log: {
        it: 'Racconta alla squadra di Kaito che sono stati trovati i resti di una creatura sconosciuta.',
        en: 'He tells Kite’s team that the remains of an unknown creature have been found.',
      },
      status: [{ episode: 77, chapter: 187, value: 'alive' }],
      affiliation: [
        {
          episode: 77,
          chapter: 187,
          value: {
            it: 'Committente della squadra di ricerca',
            en: 'Client of the survey team',
          },
        },
      ],
    },
    // Kurt's journal names both children in chapter 187; episode 77 names
    // them in its opening scene. Both media end the scene with the two
    // eaten, so their records open dead and keep one drawing.
    'kurt': {
      relationships: [
        {
          episode: 77,
          chapter: 187,
          value: [
            {
              character: 'reina',
              type: { it: 'Sorella minore', en: 'Younger sister' },
              summary: {
                it: 'Kurt veglia su Reina e affronta la formica che li attacca.',
                en: 'Kurt watches over Reina and stands up to the ant that attacks them.',
              },
            },
          ],
        },
      ],
      role: { it: 'Fratello maggiore di Reina', en: 'Reina’s older brother' },
      log: {
        it: 'Mentre torna dalla pesca con Reina, affronta una formichimera simile a un granchio per proteggerla. La formica li porta entrambi alla regina.',
        en: 'On the way home from fishing with Reina, he stands up to a crab-like chimera ant to protect her. The ant takes them both to the Queen.',
      },
      status: [{ episode: 77, chapter: 187, value: 'deceased' }],
      affiliation: [
        {
          episode: 77,
          chapter: 187,
          value: { it: 'Famiglia di Reina', en: 'Reina’s family' },
        },
      ],
    },
    'reina': {
      relationships: [
        {
          episode: 77,
          chapter: 187,
          value: [
            {
              character: 'kurt',
              type: { it: 'Fratello maggiore', en: 'Older brother' },
              summary: {
                it: 'Reina si affida a Kurt, che cerca di proteggerla dalla formica.',
                en: 'Reina relies on Kurt, who tries to shield her from the ant.',
              },
            },
          ],
        },
      ],
      role: { it: 'Sorella minore di Kurt', en: 'Kurt’s younger sister' },
      log: {
        it: 'Una formichimera simile a un granchio cattura lei e Kurt mentre tornano dalla pesca, e li porta alla regina.',
        en: 'A crab-like chimera ant catches her and Kurt on their way home from fishing and takes them to the Queen.',
      },
      status: [{ episode: 77, chapter: 187, value: 'deceased' }],
      affiliation: [
        {
          episode: 77,
          chapter: 187,
          value: { it: 'Famiglia di Kurt', en: 'Kurt’s family' },
        },
      ],
    },
    // Only the anime names her (episode 77). The manga first shows her,
    // unnamed, in chapter 215, which only orders her record.
    'haruna': {
      relationships: [
        {
          episode: 77,
          chapter: 215,
          source: 'episode',
          value: [
            {
              character: 'kurt',
              type: { it: 'Figlio', en: 'Son' },
              summary: {
                it: 'Kurt promette ad Haruna di proteggere lei e Reina.',
                en: 'Kurt promises Haruna to keep her and Reina safe.',
              },
            },
            {
              character: 'reina',
              type: { it: 'Figlia', en: 'Daughter' },
              summary: {
                it: 'Haruna cena a casa con Reina e Kurt.',
                en: 'Haruna has dinner at home with Reina and Kurt.',
              },
            },
          ],
        },
      ],
      role: { it: 'Madre', en: 'Mother' },
      log: {
        it: 'Cena a casa con Kurt e Reina. Kurt promette di proteggerle entrambe.',
        en: 'She has dinner at home with Kurt and Reina. Kurt promises to keep them both safe.',
      },
      status: [
        { episode: 77, chapter: 215, source: 'episode', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 77,
          chapter: 215,
          source: 'episode',
          value: {
            it: 'Famiglia di Kurt e Reina',
            en: 'Kurt and Reina’s family',
          },
        },
      ],
    },
    // Only the anime names him, in episode 79; the manga's companion of
    // chapters 189–190 is never named.
    'pekuba': {
      relationships: [
        {
          episode: 79,
          chapter: 189,
          source: 'episode',
          value: [
            {
              character: 'pokkle',
              type: { it: 'Capo della spedizione', en: 'Expedition leader' },
              summary: {
                it: 'Pekuba segue Pockul in NGL alla ricerca degli insetti giganti.',
                en: 'Pekuba follows Pokkle into NGL to look for the giant insects.',
              },
            },
          ],
        },
      ],
      role: EXPEDITION_MEMBER,
      log: {
        it: 'Aiuta Pockul a indagare sull’ultimo messaggio di un reporter che parla di insetti giganti in NGL.',
        en: 'He helps Pokkle follow up a reporter’s last message about giant insects in NGL.',
      },
      status: [
        { episode: 79, chapter: 189, source: 'episode', value: 'alive' },
        { episode: 80, chapter: 190, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        { episode: 79, chapter: 189, source: 'episode', value: POKKLE_TEAM },
      ],
    },
    // Pokkle tells him to run in chapter 190, the chapter he dies in; the
    // episode that adapts it, 80, is the one he dies in too.
    'balda': {
      relationships: [
        {
          episode: 80,
          chapter: 190,
          value: [
            {
              character: 'pokkle',
              type: { it: 'Capo della spedizione', en: 'Expedition leader' },
              summary: {
                it: 'Balda segue Pockul in NGL. Quando le formiche attaccano, Pockul dice a lui e a Ponzu di scappare.',
                en: 'Balda follows Pokkle in NGL. When the ants attack, Pokkle tells him and Ponzu to run.',
              },
            },
          ],
        },
      ],
      role: EXPEDITION_MEMBER,
      log: {
        it: 'Esplora NGL con Pockul e Ponzu. Pike lo cattura con la ragnatela e lo uccide.',
        en: 'He searches NGL with Pokkle and Ponzu. Pike catches him in his web and kills him.',
      },
      status: [{ episode: 80, chapter: 190, value: 'deceased' }],
      affiliation: [{ episode: 80, chapter: 190, value: POKKLE_TEAM }],
    },
    'pike': {
      relationships: [
        {
          episode: 80,
          chapter: 190,
          value: [
            {
              character: 'zazan',
              type: {
                it: 'Comandante di divisione che serve',
                en: 'Squadron Leader he serves',
              },
              summary: {
                it: 'Zazan arriva mentre Pike sta perdendo contro Pockul e paralizza l’Hunter.',
                en: 'Zazan arrives as Pike is losing to Pokkle and paralyses the Hunter.',
              },
            },
            {
              character: 'pokkle',
              type: { it: 'Hunter che affronta', en: 'Hunter he fights' },
              summary: {
                it: 'Pike afferra le frecce di Pockul, uccide Balda per errore e incassa i pugni dell’Hunter.',
                en: 'Pike catches Pokkle’s arrows, kills Balda by mistake and takes a beating from the Hunter.',
              },
            },
          ],
        },
      ],
      role: {
        it: 'Membro della divisione di Zazan',
        en: 'Member of Zazan’s squad',
      },
      log: {
        it: 'Tende un agguato alla squadra di Pockul e uccide Balda, rimasto nella sua ragnatela. Poi Zazan paralizza Pockul.',
        en: 'He ambushes Pokkle’s team and kills Balda, caught in his web. Zazan then paralyses Pokkle.',
      },
      status: [{ episode: 80, chapter: 190, value: 'alive' }],
      affiliation: ant(80, 190),
    },
    // Cheetu names her in chapter 189; episode 80 adapts that scene.
    'zazan': {
      relationships: [
        {
          episode: 80,
          chapter: 190,
          value: [
            {
              character: 'pokkle',
              type: { it: 'Hunter che cattura', en: 'Hunter she captures' },
              summary: {
                it: 'Zazan paralizza Pockul con il pungiglione e lo fa portare alla regina.',
                en: 'Zazan paralyses Pokkle with her stinger and has him taken to the Queen.',
              },
            },
            {
              character: 'pike',
              type: {
                it: 'Soldato della sua divisione',
                en: 'Soldier of her squad',
              },
              summary: {
                it: 'Zazan interviene quando Pike sta per perdere contro Pockul.',
                en: 'Zazan steps in when Pike is about to lose to Pokkle.',
              },
            },
          ],
        },
      ],
      role: SQUADRON_LEADER,
      log: {
        it: 'Comanda una divisione di formichimere a caccia di esseri umani in NGL.',
        en: 'She leads a Chimera Ant squad that hunts humans in NGL.',
      },
      status: [{ episode: 80, chapter: 189, value: 'alive' }],
      affiliation: ant(80, 189),
    },
    'peggy': {
      relationships: [
        { episode: 82, chapter: 194, value: [PEGGY_RAMMOT] },
        {
          episode: 85,
          chapter: 198,
          value: [
            PEGGY_RAMMOT,
            {
              character: 'neferpitou',
              type: { it: 'Guardia reale', en: 'Royal Guard' },
              summary: {
                it: 'Pegyi legge la prova dell’acqua di Neferpito, che poi gli lascia il comando del nido.',
                en: 'Peggy reads Neferpitou’s water test, and Neferpitou leaves him in charge of the nest.',
              },
            },
          ],
        },
      ],
      role: SQUADRON_LEADER,
      log: {
        it: 'Esamina i corpi dei soldati colpiti dagli esseri umani e avverte che gli umani imparano in fretta.',
        en: 'He examines the bodies of soldiers shot by humans and warns that humans learn fast.',
      },
      status: [{ episode: 80, chapter: 189, value: 'alive' }],
      affiliation: ant(80, 189),
    },
    // Relationships omitted: through chapter 198 and episode 85 his
    // exchanges are with Colt and Hagya, whose names this phase leaves
    // under fog.
    'cheetu': {
      role: SQUADRON_LEADER,
      log: {
        it: 'Lascia che la sua divisione cacci esseri umani per divertimento, ma assicura che raggiunge comunque la quota per la regina.',
        en: 'He lets his squad hunt humans for sport, while claiming it still meets its quota for the Queen.',
      },
      status: [{ episode: 81, chapter: 192, value: 'alive' }],
      affiliation: ant(81, 192),
    },
    'rammot': {
      relationships: [
        { episode: 81, chapter: 192, value: [...RAMMOT_BEATEN] },
        {
          episode: 84,
          chapter: 198,
          value: [
            ...RAMMOT_BEATEN,
            {
              character: 'neferpitou',
              type: {
                it: 'Guardia reale che segue',
                en: 'Royal Guard he follows',
              },
              summary: {
                it: 'Rammot rinuncia al sogno di diventare re e segue Neferpito, che gli fa fare la prova dell’acqua.',
                en: 'Rammot gives up his dream of becoming King and follows Neferpitou, who has him take the water test.',
              },
            },
          ],
        },
      ],
      role: ANT_SOLDIER,
      log: {
        it: 'Gon e Killua lo battono quando difende la sua preda. Al nido giura di ucciderli e mangiarli.',
        en: 'Gon and Killua beat him when he guards his prey. Back at the nest he swears to kill and eat them.',
      },
      status: [{ episode: 81, chapter: 192, value: 'alive' }],
      affiliation: ant(81, 192),
    },
    // Named and shot in chapter 193 and episode 82, so his record opens
    // dead and keeps one drawing.
    'yunju': {
      relationships: [
        {
          episode: 82,
          chapter: 193,
          value: [
            {
              character: 'kite',
              type: { it: 'Hunter che lo uccide', en: 'Hunter who kills him' },
              summary: {
                it: 'Yunju vuole fare di Kaito il suo nuovo cane. Kaito gli spara alla testa.',
                en: 'Yunju means to make Kite his new dog. Kite shoots him through the head.',
              },
            },
          ],
        },
      ],
      role: SQUADRON_LEADER,
      log: {
        it: 'Tiene come cani gli esseri umani catturati nella fabbrica di droga di cui si è impadronito. Manda due soldati contro Kaito, Gon e Killua, e Kaito gli spara.',
        en: 'He keeps captured humans as dogs at the drug factory he has taken. He sends two soldiers at Kite, Gon and Killua, and Kite shoots him.',
      },
      status: [{ episode: 82, chapter: 193, value: 'deceased' }],
      affiliation: ant(82, 193),
    },
    // Named and killed in chapter 195 and episode 83: one drawing.
    'baro': {
      relationships: [
        {
          episode: 83,
          chapter: 195,
          value: [
            {
              character: 'gon-freecss',
              type: { it: 'Hunter che lo uccide', en: 'Hunter who kills him' },
              summary: {
                it: 'Gon offre a Baro di risparmiarlo se smette di mangiare umani. Baro rifiuta e Gon lo schiaccia.',
                en: 'Gon offers to spare Baro if he stops eating humans. Baro refuses and Gon crushes him.',
              },
            },
          ],
        },
      ],
      role: ANT_SOLDIER,
      log: {
        it: 'Estratto a sorte per affrontare Gon in un duello, dice di uccidere gli umani per divertimento. Gon lo schiaccia.',
        en: 'Drawn by lot to fight Gon one on one, he says he kills humans for fun. Gon crushes him.',
      },
      status: [{ episode: 83, chapter: 195, value: 'deceased' }],
      affiliation: ant(83, 195),
    },
  },
  entries: [
    {
      id: 'chimera-ant-arc',
      kind: 'arc',
      revealedAtEpisode: 76,
      revealedAtChapter: 186,
      name: { it: 'Formichimere', en: 'Chimera Ant' },
      summary: {
        it: 'Gon e Killua lasciano Greed Island per raggiungere un giocatore che sperano sia Ging. Dove arrivano si muovono le formichimere.',
        en: 'Gon and Killua leave Greed Island to meet a player they hope is Ging. Where they land, chimera ants are on the move.',
      },
      visual: { art: 'chimera-ant-arc', tint: 'vermilion' },
    },
    character('neferpitou', 'vermilion', {
      revealedAtEpisode: 84,
      revealedAtChapter: 198,
      name: { it: 'Neferpito', en: 'Neferpitou' },
      summary: {
        it: 'Una guardia reale delle formichimere.',
        en: 'A Royal Guard of the Chimera Ants.',
      },
    }),
    character('spinner-clow', 'ocher', {
      revealedAtEpisode: 77,
      revealedAtChapter: 186,
      name: { it: 'Spinner Clow', en: 'Spinner Clow' },
      summary: SURVEY_SUMMARY,
    }),
    character('banana-kavaro', 'ocher', {
      revealedAtEpisode: 77,
      revealedAtChapter: 186,
      name: { it: 'Banana Kavaro', en: 'Banana Kavaro' },
      summary: SURVEY_SUMMARY,
    }),
    character('monta-yuras', 'ocher', {
      revealedAtEpisode: 77,
      revealedAtChapter: 186,
      name: { it: 'Monta Yuras', en: 'Monta Yuras' },
      summary: SURVEY_SUMMARY,
    }),
    character('stick-dinner', 'ocher', {
      revealedAtEpisode: 77,
      revealedAtChapter: 186,
      name: { it: 'Stick Dinner', en: 'Stick Dinner' },
      summary: SURVEY_SUMMARY,
    }),
    character('lin-koshi', 'ocher', {
      revealedAtEpisode: 77,
      revealedAtChapter: 186,
      name: { it: 'Lin Koshi', en: 'Lin Koshi' },
      summary: SURVEY_SUMMARY,
    }),
    character('podungo-lapoy', 'ocher', {
      revealedAtEpisode: 77,
      revealedAtChapter: 186,
      name: { it: 'Podungo Lapoy', en: 'Podungo Lapoy' },
      summary: SURVEY_SUMMARY,
    }),
    character('wong', 'sand', {
      revealedAtEpisode: 77,
      revealedAtChapter: 187,
      name: { it: 'Wong', en: 'Wong' },
      summary: {
        it: 'Ingaggia la squadra di ricerca di Kaito e le parla di una creatura sconosciuta.',
        en: 'Hires Kite’s survey team and tells them of an unknown creature.',
      },
    }),
    character('kurt', 'blue', {
      revealedAtEpisode: 77,
      revealedAtChapter: 187,
      name: { it: 'Kurt', en: 'Kurt' },
      summary: {
        it: 'Un bambino che protegge la sorellina Reina.',
        en: 'A boy who looks after his little sister Reina.',
      },
    }),
    character('reina', 'yellow', {
      revealedAtEpisode: 77,
      revealedAtChapter: 187,
      name: { it: 'Reina', en: 'Reina' },
      summary: {
        it: 'Una bambina che vive con il fratello maggiore Kurt.',
        en: 'A little girl who lives with her older brother Kurt.',
      },
    }),
    character('haruna', 'pink', {
      revealedAtEpisode: 77,
      revealedAtChapter: 215,
      source: 'episode',
      name: { it: 'Haruna', en: 'Haruna' },
      summary: {
        it: 'La madre di Kurt e Reina.',
        en: 'The mother of Kurt and Reina.',
      },
    }),
    character('pekuba', 'magenta', {
      revealedAtEpisode: 79,
      revealedAtChapter: 189,
      source: 'episode',
      name: { it: 'Pekuba', en: 'Pekuba' },
      summary: {
        it: 'Membro della squadra di Pockul in NGL.',
        en: 'A member of Pokkle’s team in NGL.',
      },
    }),
    character('balda', 'ice', {
      revealedAtEpisode: 80,
      revealedAtChapter: 190,
      name: { it: 'Balda', en: 'Balda' },
      summary: {
        it: 'Membro della squadra di Pockul in NGL.',
        en: 'A member of Pokkle’s team in NGL.',
      },
    }),
    character('pike', 'lavender', {
      revealedAtEpisode: 80,
      revealedAtChapter: 190,
      name: { it: 'Pike', en: 'Pike' },
      summary: {
        it: 'Una formichimera simile a un ragno, della divisione di Zazan.',
        en: 'A spider-like Chimera Ant of Zazan’s squad.',
      },
    }),
    character('zazan', 'red', {
      revealedAtEpisode: 80,
      revealedAtChapter: 189,
      name: { it: 'Zazan', en: 'Zazan' },
      summary: {
        it: 'Comandante di una divisione di formichimere.',
        en: 'A Chimera Ant Squadron Leader.',
      },
    }),
    character('peggy', 'orange', {
      revealedAtEpisode: 80,
      revealedAtChapter: 189,
      name: { it: 'Pegyi', en: 'Peggy' },
      summary: {
        it: 'Un comandante delle formichimere che studia le armi degli esseri umani.',
        en: 'A Chimera Ant Squadron Leader who studies human weapons.',
      },
    }),
    character('cheetu', 'violet', {
      revealedAtEpisode: 81,
      revealedAtChapter: 192,
      name: { it: 'Jeedo', en: 'Cheetu' },
      summary: {
        it: 'Un comandante delle formichimere la cui divisione caccia per divertimento.',
        en: 'A Chimera Ant Squadron Leader whose squad hunts for sport.',
      },
    }),
    character('rammot', 'teal', {
      revealedAtEpisode: 81,
      revealedAtChapter: 192,
      name: { it: 'Rammot', en: 'Rammot' },
      summary: {
        it: 'Una formichimera sconfitta da Gon e Killua.',
        en: 'A Chimera Ant whom Gon and Killua defeat.',
      },
    }),
    character('yunju', 'cyan', {
      revealedAtEpisode: 82,
      revealedAtChapter: 193,
      name: { it: 'Yunju', en: 'Yunju' },
      summary: {
        it: 'Un comandante delle formichimere simile a un centauro, che tiene gli esseri umani come cani.',
        en: 'A centaur-like Chimera Ant Squadron Leader who keeps humans as dogs.',
      },
    }),
    character('baro', 'azure', {
      revealedAtEpisode: 83,
      revealedAtChapter: 195,
      name: { it: 'Baro', en: 'Baro' },
      summary: {
        it: 'Una formichimera simile a un armadillo che affronta Gon.',
        en: 'An armadillo-like Chimera Ant who fights Gon.',
      },
    }),
    NGL_RECORD,
  ],
}
