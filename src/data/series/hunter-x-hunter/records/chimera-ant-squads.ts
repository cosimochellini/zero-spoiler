import { chimeraAntPhase1Chronicles } from './chimera-ant-phase-1.chronicle'
import type { HunterSaga } from './saga'

const SQUADRON_LEADER = { it: 'Comandante di divisione', en: 'Squadron Leader' }
const OFFICER = { it: 'Capitano', en: 'Officer' }
const CHIMERA_ANTS = { it: 'Formichimere', en: 'Chimera Ants' }

/**
 * The squad leaders and officers of the colony, Chimera Ant phase 2 (#1021).
 * Spread into the Chimera Ant saga in `./chimera-ant`. Every gate is the
 * first chapter and episode whose English-wiki synopsis names the record
 * explicitly (owner ruling, #1021).
 */
export const CHIMERA_ANT_SQUADS: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  dossiers: {
    zazan: {
      chronicle: chimeraAntPhase1Chronicles.zazan,
      relationships: [
        // Pike is the manga's alone, so the anime keeps only Pokkle.
        {
          episode: 84,
          chapter: 190,
          source: 'chapter',
          value: [
            {
              character: 'pokkle',
              type: { it: 'Hunter che cattura', en: 'Hunter she captures' },
              summary: {
                it: 'Lo paralizza con il pungiglione e lo fa portare alla regina.',
                en: 'Paralyses him with her stinger and has him taken to the Queen.',
              },
            },
            {
              character: 'pike',
              type: {
                it: 'Capitano della sua divisione',
                en: 'Officer in her squad',
              },
              summary: {
                it: 'Lo rimprovera perché ha rischiato di perdere contro un Hunter, poi lo loda per la preda.',
                en: 'Scolds him for nearly losing to a Hunter, then praises him for the catch.',
              },
            },
          ],
        },
        {
          episode: 84,
          chapter: 190,
          source: 'episode',
          value: [
            {
              character: 'pokkle',
              type: { it: 'Hunter che cattura', en: 'Hunter she captures' },
              summary: {
                it: 'Lo paralizza con il pungiglione e lo fa portare alla regina.',
                en: 'Paralyses him with her stinger and has him taken to the Queen.',
              },
            },
          ],
        },
      ],
      role: SQUADRON_LEADER,
      log: {
        it: 'Guida una delle divisioni della colonia. Alcuni dei suoi soldati vengono uccisi da umani.',
        en: 'She leads one of the colony’s squads. Some of its soldiers are killed by humans.',
      },
      status: [
        { episode: 84, chapter: 189, value: 'alive' },
        { episode: 97, chapter: 229, value: 'deceased' },
      ],
      affiliation: [
        { episode: 84, chapter: 189, value: CHIMERA_ANTS },
        // The Squadron Leaders set off on their own, chapter 216.
        {
          episode: 92,
          chapter: 216,
          value: {
            it: 'Formichimere, lontano dal nido',
            en: 'Chimera Ants, away from the nest',
          },
        },
      ],
    },
    pike: {
      chronicle: chimeraAntPhase1Chronicles.pike,
      relationships: [
        {
          episode: 84,
          chapter: 190,
          source: 'chapter',
          value: [
            {
              character: 'zazan',
              type: SQUADRON_LEADER,
              summary: {
                it: 'La ringrazia più volte quando lei loda la sua preda.',
                en: 'Thanks her again and again when she praises his catch.',
              },
            },
            {
              character: 'pokkle',
              type: { it: 'Hunter che affronta', en: 'Hunter he fights' },
              summary: {
                it: 'Afferra la sua freccia di Nen e cerca di catturarlo con la ragnatela.',
                en: 'Catches his Nen arrow and tries to snare him in his web.',
              },
            },
          ],
        },
      ],
      role: OFFICER,
      log: {
        it: 'Scala una parete per tendere un agguato alla squadra di Pockul. La sua ragnatela prende uno dei compagni di Pockul al posto suo, e Pike gli stacca la testa con un morso. Zazan lo rimprovera perché ha rischiato di perdere, poi lo loda per aver catturato un umano raro.',
        en: 'He climbs a cliff to ambush Pokkle’s team. His web catches one of Pokkle’s companions instead of Pokkle, and he bites off the man’s head. Zazan scolds him for nearly losing, then praises him for catching a rare human.',
      },
      status: [
        { episode: 80, chapter: 190, source: 'chapter', value: 'alive' },
        { episode: 97, chapter: 228, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 80,
          chapter: 190,
          source: 'chapter',
          value: {
            it: 'Formichimere, divisione di Zazan',
            en: 'Chimera Ants, Zazan’s squad',
          },
        },
      ],
    },
    hagya: {
      chronicle: chimeraAntPhase1Chronicles.hagya,
      relationships: [
        {
          episode: 106,
          chapter: 214,
          source: 'chapter',
          value: [
            {
              character: 'colt',
              type: {
                it: 'Altro comandante di divisione',
                en: 'Fellow Squadron Leader',
              },
              summary: {
                it: 'Gli conferma che la sua divisione uccide gli umani per divertimento, poi gli dà dell’idiota alle spalle.',
                en: 'Confirms that his squad kills humans for fun, then calls him an idiot behind his back.',
              },
            },
          ],
        },
      ],
      role: [
        { episode: 106, chapter: 192, value: SQUADRON_LEADER },
        {
          episode: 106,
          chapter: 240,
          source: 'chapter',
          value: {
            it: 'Comandante di divisione, ora Leol',
            en: 'Squadron Leader, now Leol',
          },
        },
      ],
      log: {
        it: 'Ammette con un altro comandante di divisione che la sua divisione caccia gli umani per divertimento e ne lascia i corpi. Promette di tenere per la regina gli umani rari, poi dice ai suoi compagni che li mangeranno loro.',
        en: 'He admits to another Squadron Leader that his squad hunts humans for fun and leaves the bodies. He promises to save any rare humans for the Queen, then tells his comrades they will eat them themselves.',
      },
      // Morel suffocates him with carbon dioxide in the flooded chapel,
      // chapter 254 / episode 107.
      status: [
        { episode: 106, chapter: 192, value: 'alive' },
        { episode: 107, chapter: 254, value: 'deceased' },
      ],
      // The anime's nest scenes (episodes 91 and 92) come before it opens
      // him, and a timeline takes one entry per episode, so the two later
      // steps stay the manga's.
      affiliation: [
        { episode: 106, chapter: 192, value: CHIMERA_ANTS },
        // With the Queen unable to lay eggs, he proposes that each of them
        // try to become a king, chapter 214; he sets off, chapter 216.
        {
          episode: 106,
          chapter: 214,
          source: 'chapter',
          value: {
            it: 'Formichimere, perché ognuno diventi re',
            en: 'Chimera Ants, for each to become a king',
          },
        },
        {
          episode: 106,
          chapter: 216,
          source: 'chapter',
          value: {
            it: 'Ha lasciato il nido per diventare re',
            en: 'Left the nest to become a king',
          },
        },
        // He reports back to the Royal Guards with Flutter and Hina and takes
        // Neferpitou's job, chapter 234.
        {
          episode: 106,
          chapter: 234,
          source: 'chapter',
          value: {
            it: 'Formichimere, al servizio del re',
            en: 'Chimera Ants, in the King’s service',
          },
        },
      ],
    },
    rammot: {
      chronicle: chimeraAntPhase1Chronicles.rammot,
      relationships: [
        // Gon and Killua beat him in chapter 191 / episode 81; his record
        // opens for chapter readers at 192.
        {
          episode: 81,
          chapter: 192,
          value: [
            {
              character: 'killua',
              type: {
                it: 'Ragazzo su cui vuole vendicarsi',
                en: 'Boy he wants revenge on',
              },
              summary: {
                it: 'Dopo che Killua e Gon lo battono, giura di ucciderli e mangiarli lui stesso.',
                en: 'After Killua and Gon beat him, he swears to kill and eat them himself.',
              },
            },
          ],
        },
        {
          episode: 84,
          chapter: 198,
          value: [
            {
              character: 'killua',
              type: {
                it: 'Ragazzo su cui vuole vendicarsi',
                en: 'Boy he wants revenge on',
              },
              summary: {
                it: 'Dopo che Killua e Gon lo battono, giura di ucciderli e mangiarli lui stesso.',
                en: 'After Killua and Gon beat him, he swears to kill and eat them himself.',
              },
            },
            {
              character: 'neferpitou',
              type: { it: 'Guardia reale', en: 'Royal Guard' },
              summary: {
                it: 'Segue la guardia reale, che gli fa provare la prova dell’acqua.',
                en: 'Follows the Royal Guard, who has him try the water test.',
              },
            },
          ],
        },
        {
          episode: 92,
          chapter: 214,
          value: [
            {
              character: 'killua',
              type: {
                it: 'Ragazzo su cui vuole vendicarsi',
                en: 'Boy he wants revenge on',
              },
              summary: {
                it: 'Dopo che Killua e Gon lo battono, giura di ucciderli e mangiarli lui stesso.',
                en: 'After Killua and Gon beat him, he swears to kill and eat them himself.',
              },
            },
            {
              character: 'neferpitou',
              type: { it: 'Guardia reale', en: 'Royal Guard' },
              summary: {
                it: 'Segue la guardia reale, che gli fa provare la prova dell’acqua.',
                en: 'Follows the Royal Guard, who has him try the water test.',
              },
            },
            {
              character: 'colt',
              type: SQUADRON_LEADER,
              summary: {
                it: 'Lo porta via dallo scontro con Gon e Killua e gli vieta di mangiarli.',
                en: 'Carries him away from the fight with Gon and Killua, and forbids him to eat them.',
              },
            },
          ],
        },
        {
          episode: 94,
          chapter: 219,
          value: [
            {
              character: 'killua',
              type: {
                it: 'Avversario che lo uccide',
                en: 'Opponent who kills him',
              },
              summary: {
                it: 'Lo trova da solo e vuole vendicarsi, ma Killua lo uccide con un solo colpo.',
                en: 'Finds him alone and comes for revenge, but Killua kills him in one move.',
              },
            },
            {
              character: 'neferpitou',
              type: { it: 'Guardia reale', en: 'Royal Guard' },
              summary: {
                it: 'Segue la guardia reale, che gli fa provare la prova dell’acqua.',
                en: 'Follows the Royal Guard, who has him try the water test.',
              },
            },
            {
              character: 'colt',
              type: SQUADRON_LEADER,
              summary: {
                it: 'Lo porta via dallo scontro con Gon e Killua e gli vieta di mangiarli.',
                en: 'Carries him away from the fight with Gon and Killua, and forbids him to eat them.',
              },
            },
          ],
        },
      ],
      role: OFFICER,
      log: {
        it: 'Vorrebbe mangiare gli umani che cattura, ma il suo comandante di divisione glielo vieta.',
        en: 'He wants to eat the humans he catches, and his Squadron Leader forbids it.',
      },
      status: [
        { episode: 79, chapter: 192, value: 'alive' },
        // Killua tears his head off when he comes back for revenge.
        { episode: 94, chapter: 219, value: 'deceased' },
      ],
      affiliation: [{ episode: 79, chapter: 192, value: CHIMERA_ANTS }],
    },
    yunju: {
      chronicle: chimeraAntPhase1Chronicles.yunju,
      relationships: [
        {
          episode: 82,
          chapter: 193,
          value: [
            {
              character: 'kite',
              type: { it: 'Hunter che lo uccide', en: 'Hunter who kills him' },
              summary: {
                it: 'Vuole farne uno dei suoi cani e viene ucciso da lui.',
                en: 'Means to make him one of his dogs, and is killed by him.',
              },
            },
          ],
        },
      ],
      role: SQUADRON_LEADER,
      log: {
        it: 'Va a caccia di umani con due soldati della sua divisione, per tenere come animali domestici quelli che cattura.',
        en: 'He hunts humans with two soldiers of his squad, to keep the ones he catches as pets.',
      },
      status: [
        { episode: 79, chapter: 193, value: 'alive' },
        // Kite shoots him through the head in the drug factory, episode 82;
        // chapter 193, his gate, shows the body.
        { episode: 82, chapter: 193, value: 'deceased' },
      ],
      affiliation: [{ episode: 79, chapter: 193, value: CHIMERA_ANTS }],
    },
    baro: {
      chronicle: chimeraAntPhase1Chronicles.baro,
      relationships: [
        {
          episode: 83,
          chapter: 195,
          source: 'chapter',
          value: [
            {
              character: 'gon-freecss',
              type: {
                it: 'Avversario che lo uccide',
                en: 'Opponent who kills him',
              },
              summary: {
                it: 'Rifiuta la sua offerta di risparmiarlo se si arrende e viene schiacciato da lui.',
                en: 'Refuses his offer to spare him if he gives up, and is crushed by him.',
              },
            },
          ],
        },
      ],
      role: OFFICER,
      log: {
        it: 'Estratto a sorte per affrontare Gon da solo, si chiude a palla e lo carica. Dice a Gon che uccide gli umani perché gli piace. Gon ferma la sua carica a mani nude e lo schiaccia.',
        en: 'Drawn by lot to fight Gon one on one, he rolls into a ball and charges him. He tells Gon that he kills humans because he enjoys it. Gon stops his charge with his hands and crushes him.',
      },
      // Gon crushes him in the chapter that names him.
      status: [
        { episode: 83, chapter: 195, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 83,
          chapter: 195,
          source: 'chapter',
          value: {
            it: 'Formichimere, divisione di Hagya',
            en: 'Chimera Ants, Hagya’s squad',
          },
        },
      ],
    },
    baital: {
      relationships: [
        {
          episode: 88,
          chapter: 205,
          source: 'chapter',
          value: [
            {
              character: 'morel-mackernasey',
              type: {
                it: 'Hunter che lo isola',
                en: 'Hunter who cuts him off',
              },
              summary: {
                it: 'Il suo fumo isola la divisione di Baital dal resto della colonia.',
                en: 'His smoke cuts Baital’s squad off from the rest of the colony.',
              },
            },
          ],
        },
      ],
      role: SQUADRON_LEADER,
      log: {
        it: 'Perso in un fumo denso intorno al nido, non riesce a contattare con la telepatia un altro comandante di divisione. Fa muovere insieme in formazione la sua divisione e altre due. La sua divisione non torna al nido.',
        en: 'Lost in a dense smoke around the nest, he cannot reach another Squadron Leader by telepathy. He has his squad and two others move together in formation. His squad does not return to the nest.',
      },
      // The chapter says only that his squad has not come back.
      status: [
        { episode: 88, chapter: 205, source: 'chapter', value: 'missing' },
      ],
      affiliation: [
        { episode: 88, chapter: 205, source: 'chapter', value: CHIMERA_ANTS },
      ],
    },
  },
  entries: [
    // Cheetu's report names her squad in chapter 189; the anime has her
    // named in speech first in episode 84.
    {
      id: 'zazan',
      kind: 'character',
      revealedAtEpisode: 84,
      revealedAtChapter: 189,
      name: { it: 'Zazan', en: 'Zazan' },
      summary: {
        it: 'Una comandante di divisione delle formichimere. Alcuni soldati della sua divisione sono stati uccisi da umani.',
        en: 'A Squadron Leader of the Chimera Ants. Some of the soldiers in her squad have been killed by humans.',
      },
      visual: { art: 'zazan', tint: 'red' },
    },
    // Zazan names him in chapter 190; the anime gives his name only in
    // narration, so episode 80 only orders him.
    {
      id: 'pike',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 80,
      revealedAtChapter: 190,
      name: { it: 'Pike', en: 'Pike' },
      summary: {
        it: 'Un capitano della divisione di Zazan dall’aspetto di ragno. Uccide uno dei compagni di Pockul rimasto impigliato nella sua ragnatela.',
        en: 'A spider-like officer in Zazan’s squad. He kills one of Pokkle’s companions caught in his web.',
      },
      visual: { art: 'pike', tint: 'ice' },
    },
    // Hagya is named at the nest in chapter 192. Leol introduces himself
    // to Morel in episode 106.
    {
      id: 'hagya',
      kind: 'character',
      // 106 / 192 is a reordered pair: too far out of step to anchor the
      // chapter table.
      unanchored: true,
      // The manga gives the name Leol in chapter 240.
      episodeName: { name: { it: 'Leol', en: 'Leol' }, chapter: 240 },
      revealedAtEpisode: 106,
      revealedAtChapter: 192,
      name: { it: 'Hagya', en: 'Hagya' },
      summary: {
        it: 'Un comandante di divisione delle formichimere dall’aspetto di leone, la cui divisione uccide gli umani per divertimento.',
        en: 'A lion-like Squadron Leader of the Chimera Ants, whose squad kills humans for fun.',
      },
      visual: { art: 'hagya', tint: 'orange' },
    },
    {
      id: 'rammot',
      kind: 'character',
      revealedAtEpisode: 79,
      revealedAtChapter: 192,
      name: { it: 'Rammot', en: 'Rammot' },
      summary: {
        it: 'Un capitano delle formichimere dall’aspetto di coniglio, con le piume sulle braccia.',
        en: 'A rabbit-like officer of the Chimera Ants, with feathers on his arms.',
      },
      visual: { art: 'rammot', tint: 'teal' },
    },
    {
      id: 'yunju',
      kind: 'character',
      revealedAtEpisode: 79,
      revealedAtChapter: 193,
      name: { it: 'Yunju', en: 'Yunju' },
      summary: {
        it: 'Un comandante di divisione delle formichimere dall’aspetto di centauro, che caccia gli umani per tenerli come animali domestici.',
        en: 'A centaur-like Squadron Leader of the Chimera Ants, who hunts humans to keep as pets.',
      },
      visual: { art: 'yunju', tint: 'blue' },
    },
    // Named in chapter 195, where he dies; the anime names him only in
    // narration, so episode 83 only orders him.
    {
      id: 'baro',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 83,
      revealedAtChapter: 195,
      name: { it: 'Baro', en: 'Baro' },
      summary: {
        it: 'Un capitano delle formichimere dall’aspetto di armadillo, che affronta Gon in uno scontro all’ultimo sangue e viene ucciso da lui.',
        en: 'An armadillo-like officer of the Chimera Ants who fights Gon to the death and is killed by him.',
      },
      visual: { art: 'baro', tint: 'azure' },
    },
    // Named in chapter 205; episode 88 shows him unnamed, so it only orders
    // him.
    {
      id: 'baital',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 88,
      revealedAtChapter: 205,
      name: { it: 'Baital', en: 'Baital' },
      summary: {
        it: 'Un comandante di divisione delle formichimere che nel fumo di Morau perde il contatto con le altre divisioni.',
        en: 'A Squadron Leader of the Chimera Ants who loses touch with the other squads in Morel’s smoke.',
      },
      visual: { art: 'baital', tint: 'violet' },
    },
  ],
}
