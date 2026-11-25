import type { PlaceDossier } from '~/data/types'

import type { ThronesSaga, ThronesVocabulary } from './saga'
import { season3Chronicles } from './season-3.chronicle'
import { season3Relationships } from './season-3.relationships'

/**
 * Season 3 of the show and the first part of *A Storm of Swords*: the third
 * stage (#1626), episodes 21 to 30 and site chapters 144 to 196 (the book's
 * prologue to Arya XI). Each cast group's filing child adds its new
 * characters here. A character an earlier season filed keeps
 * its dossier and its new dated steps in the module that filed it. Chapters
 * are site chapters: A Storm of Swords' prologue is chapter 144, so its
 * chapter N (prologue 0) is 144 + N.
 *
 * The heading opens with the season's first record in each medium, so its
 * summary names only the season and the book, as the earlier seasons' do.
 * Its `visual.art` names the season's own drawing, which the home page's
 * frame draws (#1601); it goes in `../art/seasons.ts` with the season's first
 * records, since a drawing no record uses fails the drawing tests.
 */
export const season3: ThronesSaga = {
  name: { it: 'Stagione 3', en: 'Season 3' },
  heading: {
    id: 'season-3',
    summary: {
      it: 'La terza stagione della serie e la prima parte del terzo libro, A Storm of Swords.',
      en: 'The show’s third season and the first part of the third book, A Storm of Swords.',
    },
    visual: { art: 'season-3', tint: 'ocher' },
  },
  dossiers: {
    // #1639: Essos.
    // Both media tell the whole log at her gate: "Walk of Punishment" has
    // Daenerys ask her name and warn her of war, and she answers "Valar
    // morghulis" (Game of Thrones Wiki, Missandei, GOT303); Daenerys III has
    // Daenerys ask her name to free her, and she answers the fear of danger
    // and death with "valar morghulis" (A Wiki of Ice and Fire, Missandei,
    // citing Chapter 27).
    'missandei': {
      relationships: season3Relationships.missandei,
      role: { it: 'Interprete di Daenerys', en: 'Daenerys’s interpreter' },
      log: {
        it: 'Traduce per lo schiavista che vende gli Immacolati a Daenerys, e ne addolcisce gli insulti. Daenerys la ottiene dal suo padrone nell’accordo e la prende al suo servizio. Quando le chiede il nome e la avverte dei pericoli che correrà, lei risponde “Valar morghulis”.',
        en: 'She translates for the slaver who sells the Unsullied to Daenerys, and softens his insults. Daenerys gets her from her master as part of the deal and takes her into her service. When Daenerys asks her name and warns her of the dangers ahead, she answers “Valar morghulis”.',
      },
      status: [{ episode: 23, chapter: 171, value: 'alive' }],
      affiliation: [
        {
          episode: 23,
          chapter: 171,
          value: { it: 'Al servizio di Daenerys', en: 'Daenerys’s service' },
        },
      ],
      chronicle: season3Chronicles.missandei,
    },
    'kraznys-mo-nakloz': {
      relationships: season3Relationships['kraznys-mo-nakloz'],
      role: { it: 'Buon Padrone di Astapor', en: 'Good Master of Astapor' },
      log: {
        it: 'Mostra gli Immacolati a Daenerys e la insulta in valyriano tramite la sua interprete, convinto che lei non capisca. Le vende tutti gli Immacolati della città in cambio di uno dei suoi draghi. Concluso l’accordo, il drago non gli obbedisce e, a un ordine di lei, lo brucia.',
        en: 'He shows Daenerys the Unsullied and insults her in Valyrian through his interpreter, sure she does not understand. He sells her every Unsullied in the city for one of her dragons. Once the deal is done the dragon will not obey him, and at her word it burns him.',
      },
      status: [
        { episode: 24, chapter: 171, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 24,
          chapter: 171,
          source: 'chapter',
          value: { it: 'Buoni Padroni', en: 'Good Masters' },
        },
      ],
      chronicle: season3Chronicles['kraznys-mo-nakloz'],
    },
    'grey-worm': {
      relationships: season3Relationships['grey-worm'],
      role: { it: 'Ufficiale degli Immacolati', en: 'Unsullied officer' },
      log: {
        it: 'Quando Daenerys libera gli Immacolati, loro scelgono i propri ufficiali, e lui è tra questi. Gli schiavisti davano agli Immacolati nomi da schiavi; Daenerys li lascia scegliere, e lui tiene il nome che aveva il giorno in cui lei lo ha liberato.',
        en: 'When Daenerys frees the Unsullied, they choose their own officers, and he is one of them. Their masters gave the Unsullied slave names; Daenerys lets them choose, and he keeps the name he had the day she set him free.',
      },
      status: [{ episode: 25, chapter: 186, value: 'alive' }],
      affiliation: [
        {
          episode: 25,
          chapter: 186,
          value: { it: 'Immacolati', en: 'Unsullied' },
        },
      ],
      chronicle: season3Chronicles['grey-worm'],
    },
    // Both media tell the log at his gate: in "The Bear and the Maiden
    // Fair" he says the Yunkai'i will enslave the survivors, Daenerys too,
    // and her dragons hiss him away (Game of Thrones Wiki, Razdal mo Eraz);
    // in Daenerys IV he threatens to sell her as a bedslave, and Drogon sets
    // his tokar alight (the same page, "In the books").
    'grazdan-mo-eraz': {
      relationships: season3Relationships['grazdan-mo-eraz'],
      role: {
        it: 'Inviato dei Saggi Padroni',
        en: 'Envoy of the Wise Masters',
      },
      log: {
        it: 'Arriva all’accampamento di Daenerys fuori Yunkai con dell’oro, perché lasci in pace la città, e minaccia di ridurla in schiavitù se rifiuta. I draghi di lei lo spaventano, e Daenerys lo rimanda indietro.',
        en: 'He comes to Daenerys’s camp outside Yunkai with gold to make her leave the city in peace, and threatens to enslave her if she does not. Her dragons frighten him, and she sends him back.',
      },
      status: [{ episode: 27, chapter: 186, value: 'alive' }],
      affiliation: [
        {
          episode: 27,
          chapter: 186,
          value: { it: 'Saggi Padroni', en: 'Wise Masters' },
        },
      ],
      chronicle: season3Chronicles['grazdan-mo-eraz'],
    },
    'mero': {
      relationships: season3Relationships.mero,
      role: {
        it: 'Capitano dei Secondi Figli',
        en: 'Captain of the Second Sons',
      },
      log: {
        it: 'I Secondi Figli sono al soldo di Yunkai, contro Daenerys. All’accampamento di lei la deride e rifiuta la sua offerta di cambiare parte, poi riporta ai suoi uomini il vino che lei gli regala.',
        en: 'The Second Sons are paid by Yunkai to fight Daenerys. At her camp he mocks her and refuses her offer to change sides, then takes the wine she gives him back to his men.',
      },
      status: [
        { episode: 28, chapter: 186, source: 'chapter', value: 'alive' },
        // Show only: Daario Naharis kills him in "Second Sons" (episode 28),
        // the episode that first names him, so the show record opens dead.
        // The books keep him alive through the stage; Daenerys V (chapter
        // 201), where they end him, only orders it.
        { episode: 28, chapter: 201, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 28,
          chapter: 186,
          value: { it: 'Secondi Figli', en: 'Second Sons' },
        },
      ],
      chronicle: season3Chronicles.mero,
    },
    'daario-naharis': {
      relationships: season3Relationships['daario-naharis'],
      role: { it: 'Capitano mercenario', en: 'Sellsword captain' },
      log: {
        it: 'La sua compagnia è al soldo di Yunkai, contro Daenerys. Va al suo accampamento con gli altri capi della compagnia, poi li uccide e le porta le loro teste. Le giura fedeltà con la sua spada, e i suoi uomini con lui.',
        en: 'His company is paid by Yunkai to fight Daenerys. He comes to her camp with the company’s other leaders, then kills them and brings her their heads. He swears his sword to her, and his men with it.',
      },
      status: [{ episode: 28, chapter: 186, value: 'alive' }],
      // The show makes him an officer of the Second Sons; the books, a
      // captain of the Stormcrows (Game of Thrones Wiki, "Second Sons").
      affiliation: [
        {
          episode: 28,
          chapter: 186,
          source: 'episode',
          value: { it: 'Secondi Figli', en: 'Second Sons' },
        },
        {
          episode: 28,
          chapter: 186,
          source: 'chapter',
          value: { it: 'Corvi della Tempesta', en: 'Stormcrows' },
        },
      ],
      chronicle: season3Chronicles['daario-naharis'],
    },
    'prendahl-na-ghezn': {
      relationships: season3Relationships['prendahl-na-ghezn'],
      role: {
        it: 'Capitano dei Corvi della Tempesta',
        en: 'Captain of the Stormcrows',
      },
      log: {
        it: 'Va all’accampamento di Daenerys fuori Yunkai con gli altri capitani dei Corvi della Tempesta e respinge la sua offerta di cambiare parte. Daario Naharis lo uccide e porta la sua testa a Daenerys.',
        en: 'He comes to Daenerys’s camp outside Yunkai with the other captains of the Stormcrows and refuses her offer to change sides. Daario Naharis kills him and brings his head to Daenerys.',
      },
      status: [
        { episode: 28, chapter: 186, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 28,
          chapter: 186,
          source: 'chapter',
          value: { it: 'Corvi della Tempesta', en: 'Stormcrows' },
        },
      ],
      chronicle: season3Chronicles['prendahl-na-ghezn'],
    },
    // #1634: King's Landing.
    'olenna-tyrell': {
      role: {
        it: 'Nonna di Margaery Tyrell',
        en: 'Margaery Tyrell’s grandmother',
      },
      log: {
        it: 'Invita Sansa Stark a mangiare con lei e con Margaery, e la incalza perché dica la verità su re Joffrey. Sansa le confida a bassa voce che è un mostro.',
        en: 'She asks Sansa Stark to eat with her and Margaery, and presses her to tell the truth about King Joffrey. Sansa whispers that he is a monster.',
      },
      // Her death at Highgarden, "The Queen's Justice" (episode 63), is the
      // show's alone; the books leave her alive (#1642).
      status: [
        { episode: 22, chapter: 150, value: 'alive' },
        { episode: 63, chapter: 344, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 22,
          chapter: 150,
          value: { it: 'Casa Tyrell', en: 'House Tyrell' },
        },
      ],
    },
    'megga-tyrell': {
      role: {
        it: 'Cugina e compagna di Margaery Tyrell',
        en: 'Margaery Tyrell’s cousin and companion',
      },
      log: {
        it: 'Sansa Stark la conosce a cena con Margaery e con lady Olenna, insieme alle altre cugine.',
        en: 'Sansa Stark meets her at supper with Margaery and Lady Olenna, with the other cousins.',
      },
      status: [
        { episode: 22, chapter: 150, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 22,
          chapter: 150,
          source: 'chapter',
          value: { it: 'Casa Tyrell', en: 'House Tyrell' },
        },
      ],
    },
    'alla-tyrell': {
      role: {
        it: 'Cugina e compagna di Margaery Tyrell',
        en: 'Margaery Tyrell’s cousin and companion',
      },
      log: {
        it: 'Sansa Stark la conosce a cena con Margaery e con lady Olenna, insieme alle altre cugine.',
        en: 'Sansa Stark meets her at supper with Margaery and Lady Olenna, with the other cousins.',
      },
      status: [
        { episode: 22, chapter: 150, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 22,
          chapter: 150,
          source: 'chapter',
          value: { it: 'Casa Tyrell', en: 'House Tyrell' },
        },
      ],
    },
    'elinor-tyrell': {
      role: {
        it: 'Cugina e compagna di Margaery Tyrell',
        en: 'Margaery Tyrell’s cousin and companion',
      },
      log: {
        it: 'Sansa Stark la conosce a cena con Margaery e con lady Olenna, insieme alle cugine più giovani.',
        en: 'Sansa Stark meets her at supper with Margaery and Lady Olenna, with the younger cousins.',
      },
      status: [
        { episode: 22, chapter: 150, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 22,
          chapter: 150,
          source: 'chapter',
          value: { it: 'Casa Tyrell', en: 'House Tyrell' },
        },
      ],
    },
    'oberyn-martell': {
      role: {
        it: 'Fratello del principe di Dorne',
        en: 'Brother of the Prince of Dorne',
      },
      log: {
        it: 'Arriva ad Approdo del Re per le nozze del re, al posto del fratello Doran. Dice a Tyrion che vuole giustizia per la sorella Elia.',
        en: 'He comes to King’s Landing for the king’s wedding, in his brother Doran’s place. He tells Tyrion he wants justice for his sister Elia.',
      },
      // Killed by the Mountain as Tyrion's champion, "The Mountain and the
      // Viper" (episode 38) and Tyrion X of A Storm of Swords (site chapter
      // 214, #1642).
      status: [
        { episode: 31, chapter: 182, value: 'alive' },
        { episode: 38, chapter: 214, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 31,
          chapter: 182,
          value: { it: 'Casa Martell', en: 'House Martell' },
        },
      ],
    },
    'ellaria-sand': {
      role: { it: 'Amante di Oberyn Martell', en: 'Oberyn Martell’s paramour' },
      log: {
        it: 'Segue il principe Oberyn ad Approdo del Re per le nozze del re.',
        en: 'She comes with Prince Oberyn to King’s Landing for the king’s wedding.',
      },
      status: [{ episode: 32, chapter: 182, value: 'alive' }],
      affiliation: [
        {
          episode: 32,
          chapter: 182,
          value: { it: 'Casa Martell', en: 'House Martell' },
        },
      ],
    },
    // #1635: Robb's war and the Riverlands.
    'jeyne-westerling': {
      role: { it: 'Moglie di Robb Stark', en: 'Robb Stark’s wife' },
      log: {
        it: 'Ha curato Robb Stark dalla ferita che lui ha preso espugnando il Crag, il castello della sua famiglia, e lo ha consolato la notte in cui lui ha saputo della morte dei fratelli. Robb l’ha sposata il mattino dopo, rompendo la promessa di sposare una Frey.',
        en: 'She nursed Robb Stark through the wound he took storming the Crag, her family’s castle, and comforted him the night he heard his brothers were dead. Robb married her the next morning, breaking his promise to marry a Frey.',
      },
      status: [
        { episode: 23, chapter: 158, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 23,
          chapter: 158,
          source: 'chapter',
          value: { it: 'Casa Westerling', en: 'House Westerling' },
        },
      ],
    },
    'rolph-spicer': {
      role: { it: 'Zio di Jeyne Westerling', en: 'Jeyne Westerling’s uncle' },
      log: {
        it: 'Arriva a Delta delle Acque al seguito di Robb Stark, con la sorella lady Sybell e i figli di lei. Vento Grigio ringhia ogni volta che lui si avvicina, e Catelyn Stark convince Robb ad allontanarlo con un incarico.',
        en: 'He comes to Riverrun in Robb Stark’s company with his sister, Lady Sybell, and her children. Grey Wind growls whenever he comes near, and Catelyn Stark persuades Robb to send him away on an errand.',
      },
      status: [
        { episode: 23, chapter: 158, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 23,
          chapter: 158,
          source: 'chapter',
          value: { it: 'Casa Spicer', en: 'House Spicer' },
        },
      ],
    },
    'raynald-westerling': {
      role: [
        {
          episode: 23,
          chapter: 158,
          source: 'chapter',
          value: {
            it: 'Fratello di Jeyne Westerling',
            en: 'Jeyne Westerling’s brother',
          },
        },
        // He alone of the Westerlings rides to the Twins with Robb, and
        // bears his banner there, in Catelyn VI (chapter 193).
        {
          episode: 29,
          chapter: 193,
          source: 'chapter',
          value: {
            it: 'Portastendardo di Robb Stark',
            en: 'Robb Stark’s banner-bearer',
          },
        },
      ],
      log: {
        it: 'Cavalca con Robb Stark, che ha sposato sua sorella Jeyne, e arriva con lui a Delta delle Acque insieme alla madre e alle sorelle.',
        en: 'He rides with Robb Stark, who has married his sister Jeyne, and comes with him to Riverrun with his mother and sisters.',
      },
      status: [
        { episode: 23, chapter: 158, source: 'chapter', value: 'alive' },
        // Edwyn Frey tells Jaime that he loosed Grey Wind at the Twins and
        // was never found, in Jaime VII of A Feast for Crows (site chapter
        // 270, #1643). Episode 58, where the show's Jaime takes Riverrun,
        // only orders it.
        {
          episode: 58,
          chapter: 270,
          source: 'chapter',
          value: 'presumed-dead',
        },
      ],
      affiliation: [
        {
          episode: 23,
          chapter: 158,
          source: 'chapter',
          value: { it: 'Casa Westerling', en: 'House Westerling' },
        },
      ],
    },
    'willem-lannister': {
      role: {
        it: 'Scudiero di Casa Lannister',
        en: 'Squire of House Lannister',
      },
      log: {
        it: 'È stato fatto prigioniero in guerra e portato nelle celle di Delta delle Acque.',
        en: 'He was taken prisoner in the war and brought to the cells of Riverrun.',
      },
      status: [
        // Show only: Edmure's men took him at the fords, and he is a
        // hostage at Riverrun when his record opens. The books' record opens
        // on his body; chapter 164 only orders the entry.
        { episode: 23, chapter: 164, source: 'episode', value: 'captured' },
        // Rickard Karstark and his men kill him in his cell, in "Kissed by
        // Fire" (episode 25) and Catelyn III (chapter 164), the chapter that
        // first names him, so the books' record opens dead.
        { episode: 25, chapter: 164, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 23,
          chapter: 164,
          value: { it: 'Casa Lannister', en: 'House Lannister' },
        },
      ],
    },
    'martyn-lannister': {
      role: {
        it: 'Scudiero di Casa Lannister',
        en: 'Squire of House Lannister',
      },
      log: {
        it: 'Lui e il fratello Willem sono stati catturati quando gli uomini di Edmure Tully hanno respinto i Lannister ai guadi. Talisa gli medica la mano nella sua cella a Delta delle Acque.',
        en: 'He and his brother Willem were taken prisoner when Edmure Tully’s men drove back the Lannisters at the fords. Talisa tends his hand in his cell at Riverrun.',
      },
      status: [
        { episode: 23, chapter: 164, source: 'episode', value: 'captured' },
        // Rickard Karstark stabs him in his cell, in "Kissed by Fire"
        // (episode 25). The books' Martyn lives; chapter 164 only orders it.
        { episode: 25, chapter: 164, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 23,
          chapter: 164,
          source: 'episode',
          value: { it: 'Casa Lannister', en: 'House Lannister' },
        },
      ],
    },
    'lothar-frey': {
      role: { it: 'Figlio di lord Walder Frey', en: 'Son of Lord Walder Frey' },
      log: {
        it: 'Lui e il fratellastro Walder Rivers portano a Delta delle Acque le condizioni del padre per una nuova alleanza con Robb Stark: delle scuse, e le nozze tra Edmure Tully e una delle figlie di lord Walder.',
        en: 'He and his half-brother Walder Rivers bring his father’s terms for a new alliance with Robb Stark to Riverrun: an apology, and a marriage between Edmure Tully and one of Lord Walder’s daughters.',
      },
      status: [
        { episode: 60, chapter: 179, source: 'chapter', value: 'alive' },
        // Arya kills him and bakes him into a pie, in "The Winds of Winter"
        // (episode 60), the episode that first names him, so the show record
        // opens dead. The books leave him alive; chapter 344, their last,
        // only orders it.
        { episode: 60, chapter: 344, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 60,
          chapter: 179,
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
    },
    'walder-rivers': {
      role: { it: 'Figlio di lord Walder Frey', en: 'Son of Lord Walder Frey' },
      log: {
        it: 'Arriva a Delta delle Acque con il fratellastro Lothar per portare a Robb Stark le condizioni di lord Walder Frey, e le espone senza giri di parole.',
        en: 'He comes to Riverrun with his half-brother Lothar to carry Lord Walder Frey’s terms to Robb Stark, and states them bluntly.',
      },
      status: [
        { episode: 60, chapter: 179, source: 'chapter', value: 'alive' },
        // Arya kills him with Lothar, in "The Winds of Winter" (episode 60),
        // the episode that first names him, so the show record opens dead.
        // The books leave him alive; chapter 344 only orders it.
        { episode: 60, chapter: 344, source: 'episode', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 60,
          chapter: 179,
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
    },
    'roslin-frey': {
      role: [
        {
          episode: 26,
          chapter: 179,
          value: {
            it: 'Figlia di lord Walder Frey',
            en: 'Daughter of Lord Walder Frey',
          },
        },
        // She and Edmure marry at the Twins, in "The Rains of Castamere"
        // (episode 29) and before the feast of Catelyn VII (chapter 195).
        {
          episode: 29,
          chapter: 195,
          value: { it: 'Moglie di Edmure Tully', en: 'Edmure Tully’s wife' },
        },
      ],
      log: {
        it: 'Per ricucire l’alleanza con Robb Stark, lord Walder chiede che Edmure Tully la sposi. I suoi fratelli portano la richiesta a Delta delle Acque.',
        en: 'To restore his alliance with Robb Stark, Lord Walder demands that Edmure Tully marry her. Her brothers carry the demand to Riverrun.',
      },
      status: [{ episode: 26, chapter: 179, value: 'alive' }],
      affiliation: [
        {
          episode: 26,
          chapter: 179,
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
    },
    'ryman-frey': {
      role: {
        it: 'Nipote di lord Walder Frey',
        en: 'Lord Walder Frey’s grandson',
      },
      log: {
        it: 'Esce dalle Torri Gemelle con tre dei suoi figli per accogliere l’esercito di Robb Stark, che arriva per le nozze di Edmure Tully.',
        en: 'He rides out from the Twins with three of his sons to meet Robb Stark’s host as it arrives for Edmure Tully’s wedding.',
      },
      status: [
        { episode: 29, chapter: 193, source: 'chapter', value: 'alive' },
        // Outlaws hang him near Fairmarket, as Edwyn tells Jaime in Jaime
        // VII of A Feast for Crows (site chapter 270, #1643). Episode 58
        // only orders it.
        { episode: 58, chapter: 270, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 29,
          chapter: 193,
          source: 'chapter',
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
    },
    'aegon-frey': {
      role: {
        it: 'Nipote di lord Walder Frey',
        en: 'Lord Walder Frey’s grandson',
      },
      log: {
        it: 'Alle nozze di Edmure Tully, Catelyn Stark gli punta un coltello alla gola per trattare la vita di Robb. Quando Robb viene ucciso, gli taglia la gola.',
        en: 'At Edmure Tully’s wedding, Catelyn Stark holds a knife to his throat to bargain for Robb’s life. When Robb is killed, she cuts it.',
      },
      status: [
        // Killed in Catelyn VII (chapter 195), the chapter that first names
        // him, so the record opens dead.
        { episode: 29, chapter: 195, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 29,
          chapter: 195,
          source: 'chapter',
          value: { it: 'Casa Frey', en: 'House Frey' },
        },
      ],
    },
    // #1638: the Wall and beyond.
    'mance-rayder': {
      role: { it: 'Re oltre la Barriera', en: 'King-Beyond-the-Wall' },
      log: {
        it: 'Jon Snow viene portato nella sua tenda e all’inizio scambia un altro uomo per il re. Mance sa che Jon ha ucciso Qhorin il Monco, e gli chiede perché vuole lasciare i Guardiani della notte.',
        en: 'Jon Snow is brought into his tent and at first takes another man for the king. Mance knows that Jon killed Qhorin Halfhand, and asks him why he wants to leave the Night’s Watch.',
      },
      status: [{ episode: 21, chapter: 151, value: 'alive' }],
      affiliation: [
        { episode: 21, chapter: 151, value: { it: 'Bruti', en: 'Wildlings' } },
      ],
    },
    'tormund': {
      role: {
        it: 'Capo dei bruti nell’esercito di Mance Rayder',
        en: 'Wildling chief in Mance Rayder’s host',
      },
      log: {
        it: 'È nella tenda di Mance Rayder quando Jon Snow viene portato davanti al Re oltre la Barriera.',
        en: 'He is in Mance Rayder’s tent when Jon Snow is brought before the King-Beyond-the-Wall.',
      },
      status: [{ episode: 23, chapter: 151, value: 'alive' }],
      affiliation: [
        { episode: 23, chapter: 151, value: { it: 'Bruti', en: 'Wildlings' } },
      ],
    },
    'orell': {
      role: { it: 'Warg dei bruti', en: 'Wildling warg' },
      log: {
        it: 'La sua aquila esplora il terreno davanti all’esercito di Mance Rayder.',
        en: 'His eagle scouts ahead of Mance Rayder’s host.',
      },
      status: [
        // The show's alone: alive at his gate, "Dark Wings, Dark Words"
        // (episode 22). The books open on him dead, killed by Jon in the
        // Skirling Pass before they name him.
        { episode: 22, chapter: 151, source: 'episode', value: 'alive' },
        // Jon kills him at Queenscrown in "The Rains of Castamere" (episode
        // 29). In the books he is dead from his gate, chapter 151.
        { episode: 29, chapter: 151, value: 'deceased' },
      ],
      affiliation: [
        { episode: 22, chapter: 151, value: { it: 'Bruti', en: 'Wildlings' } },
      ],
    },
    'styr': {
      role: { it: 'Magnar di Thenn', en: 'Magnar of Thenn' },
      log: {
        it: 'È nella tenda di Mance Rayder quando vi viene portato Jon Snow, che all’inizio lo scambia per il re.',
        en: 'He is in Mance Rayder’s tent when Jon Snow is brought in, and Jon at first takes him for the king.',
      },
      status: [
        { episode: 21, chapter: 151, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 151,
          source: 'chapter',
          value: { it: 'Bruti', en: 'Wildlings' },
        },
      ],
    },
    'dalla': {
      role: { it: 'Moglie di Mance Rayder', en: 'Mance Rayder’s wife' },
      log: {
        it: 'È nella tenda di Mance Rayder, incinta, quando Jon Snow viene portato davanti al re.',
        en: 'She is in Mance Rayder’s tent, with child, when Jon Snow is brought before the king.',
      },
      status: [
        { episode: 21, chapter: 151, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 151,
          source: 'chapter',
          value: { it: 'Bruti', en: 'Wildlings' },
        },
      ],
    },
    'val': {
      role: { it: 'Sorella di Dalla', en: 'Dalla’s sister' },
      log: {
        it: 'È nella tenda di Mance Rayder con la sorella Dalla e con Jarl, il suo amante, quando Jon Snow viene portato davanti al re.',
        en: 'She is in Mance Rayder’s tent with her sister Dalla and Jarl, her lover, when Jon Snow is brought before the king.',
      },
      status: [
        { episode: 21, chapter: 151, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 151,
          source: 'chapter',
          value: { it: 'Bruti', en: 'Wildlings' },
        },
      ],
    },
    'jarl': {
      role: { it: 'Razziatore dei bruti', en: 'Wildling raider' },
      log: {
        it: 'È nella tenda di Mance Rayder quando Jon Snow viene portato davanti al re, e Mance lo presenta come l’amante di Val.',
        en: 'He is in Mance Rayder’s tent when Jon Snow is brought before the king, and Mance names him as Val’s lover.',
      },
      status: [
        { episode: 21, chapter: 151, source: 'chapter', value: 'alive' },
        // He falls to his death as his band climbs the Wall, in Jon IV
        // (chapter 174). Episode 26, where the show's climb is, only
        // orders it.
        { episode: 26, chapter: 174, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 151,
          source: 'chapter',
          value: { it: 'Bruti', en: 'Wildlings' },
        },
      ],
    },
    'small-paul': {
      role: {
        it: 'Confratello dei Guardiani della notte',
        en: 'Brother of the Night’s Watch',
      },
      log: {
        it: 'Va a caccia con Chett vicino al Pugno dei Primi Uomini ed è tra i confratelli che tramano con lui di disertare. Vuole per sé il corvo del lord comandante.',
        en: 'He hunts with Chett near the Fist of the First Men and is one of the brothers plotting with him to desert. He wants the Lord Commander’s raven for himself.',
      },
      status: [
        { episode: 21, chapter: 144, source: 'chapter', value: 'alive' },
        // An Other kills him in the snow as he carries Samwell Tarly, in
        // Samwell I (chapter 162). Episode 21 only orders it.
        { episode: 21, chapter: 162, source: 'chapter', value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 144,
          source: 'chapter',
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'dirk': {
      role: [
        {
          episode: 21,
          chapter: 144,
          source: 'chapter',
          value: {
            it: 'Ranger dei Guardiani della notte',
            en: 'Ranger of the Night’s Watch',
          },
        },
        // He slits Craster's throat when the mutiny breaks out, in Samwell
        // II (chapter 177). Episode 24, where the show's mutiny is, only
        // orders it.
        {
          episode: 24,
          chapter: 177,
          source: 'chapter',
          value: {
            it: 'Ammutinato alla Fortezza di Craster',
            en: 'Mutineer at Craster’s Keep',
          },
        },
      ],
      log: {
        it: 'È tra i confratelli che tramano con Chett di uccidere il lord comandante e disertare.',
        en: 'He is one of the brothers plotting with Chett to kill the Lord Commander and desert.',
      },
      status: [
        { episode: 21, chapter: 144, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 144,
          source: 'chapter',
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'ollo-lophand': {
      role: [
        {
          episode: 21,
          chapter: 144,
          source: 'chapter',
          value: {
            it: 'Confratello dei Guardiani della notte',
            en: 'Brother of the Night’s Watch',
          },
        },
        // He stabs the Lord Commander when the mutiny breaks out, in Samwell
        // II (chapter 177). Episode 24 only orders it.
        {
          episode: 24,
          chapter: 177,
          source: 'chapter',
          value: {
            it: 'Ammutinato alla Fortezza di Craster',
            en: 'Mutineer at Craster’s Keep',
          },
        },
      ],
      log: {
        it: 'È tra i confratelli che tramano con Chett di disertare durante la spedizione oltre la Barriera.',
        en: 'He is one of the brothers plotting with Chett to desert on the ranging beyond the Wall.',
      },
      status: [
        { episode: 21, chapter: 144, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 144,
          source: 'chapter',
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    'clubfoot-karl': {
      role: [
        {
          episode: 21,
          chapter: 144,
          source: 'chapter',
          value: {
            it: 'Attendente dei Guardiani della notte',
            en: 'Steward of the Night’s Watch',
          },
        },
        // Craster goes for him first when the mutiny breaks out, in Samwell
        // II (chapter 177). Episode 24 only orders it.
        {
          episode: 24,
          chapter: 177,
          source: 'chapter',
          value: {
            it: 'Ammutinato alla Fortezza di Craster',
            en: 'Mutineer at Craster’s Keep',
          },
        },
      ],
      log: {
        it: 'Chett lo conta tra i confratelli che diserteranno con lui.',
        en: 'Chett counts him among the brothers who will desert with him.',
      },
      status: [
        { episode: 21, chapter: 144, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 21,
          chapter: 144,
          source: 'chapter',
          value: { it: 'Guardiani della notte', en: 'Night’s Watch' },
        },
      ],
    },
    // #1636: Arya, the Brotherhood Without Banners and the Hound.
    'anguy': {
      role: {
        it: 'Arciere della Fratellanza senza vessilli',
        en: 'Archer of the Brotherhood Without Banners',
      },
      log: {
        it: 'Con Tom di Settecorrenti e Lem trova Arya Stark, Gendry e Frittella vicino al fiume, e i fuorilegge li portano a una locanda.',
        en: 'With Tom of Sevenstreams and Lem he comes upon Arya Stark, Gendry and Hot Pie by the river, and the outlaws take them to an inn.',
      },
      status: [
        { episode: 22, chapter: 157, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 22,
          chapter: 157,
          source: 'chapter',
          value: {
            it: 'Fratellanza senza vessilli',
            en: 'Brotherhood Without Banners',
          },
        },
      ],
    },
    'tom-of-sevenstreams': {
      role: {
        it: 'Cantante della Fratellanza senza vessilli',
        en: 'Singer of the Brotherhood Without Banners',
      },
      log: {
        it: 'Con Lem e Anguy trova Arya Stark, Gendry e Frittella vicino al fiume e li porta a una locanda, cantando lungo la strada. Lì dà ad Arya un foglio che promette di pagare i loro cavalli dopo la guerra.',
        en: 'With Lem and Anguy he comes upon Arya Stark, Gendry and Hot Pie by the river and takes them to an inn, singing on the way. There he gives Arya a paper that promises to pay for their horses after the war.',
      },
      status: [
        { episode: 22, chapter: 157, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 22,
          chapter: 157,
          source: 'chapter',
          value: {
            it: 'Fratellanza senza vessilli',
            en: 'Brotherhood Without Banners',
          },
        },
      ],
    },
    'lem': {
      role: {
        it: 'Fuorilegge della Fratellanza senza vessilli',
        en: 'Outlaw of the Brotherhood Without Banners',
      },
      log: {
        it: 'Con Tom di Settecorrenti e Anguy trova Arya Stark, Gendry e Frittella vicino al fiume. Alla locanda Arya prova a scappare e lo colpisce in faccia con un boccale.',
        en: 'With Tom of Sevenstreams and Anguy he comes upon Arya Stark, Gendry and Hot Pie by the river. At the inn Arya tries to run and hits him in the face with a tankard.',
      },
      status: [
        { episode: 22, chapter: 157, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 22,
          chapter: 157,
          source: 'chapter',
          value: {
            it: 'Fratellanza senza vessilli',
            en: 'Brotherhood Without Banners',
          },
        },
      ],
    },
    'jack-be-lucky': {
      role: {
        it: 'Fuorilegge della Fratellanza senza vessilli',
        en: 'Outlaw of the Brotherhood Without Banners',
      },
      log: {
        it: 'Cavalca con i fuorilegge che portano Arya Stark da lord Beric. In un villaggio che sembra abbandonato suona il corno, e gli abitanti escono ad accogliere la banda.',
        en: 'He rides with the outlaws who are taking Arya Stark to Lord Beric. At a village that looks abandoned he blows his horn, and its people come out to greet the band.',
      },
      status: [
        { episode: 22, chapter: 161, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 22,
          chapter: 161,
          source: 'chapter',
          value: {
            it: 'Fratellanza senza vessilli',
            en: 'Brotherhood Without Banners',
          },
        },
      ],
    },
    'greenbeard': {
      role: {
        it: 'Fuorilegge della Fratellanza senza vessilli',
        en: 'Outlaw of the Brotherhood Without Banners',
      },
      log: {
        it: 'Cavalca con i fuorilegge che portano Arya Stark da lord Beric. Con Tom e Lem ascolta in disparte i sogni di una vecchia nana.',
        en: 'He rides with the outlaws who are taking Arya Stark to Lord Beric. With Tom and Lem he listens in private to the dreams of an old dwarf woman.',
      },
      status: [
        { episode: 22, chapter: 166, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 22,
          chapter: 166,
          source: 'chapter',
          value: {
            it: 'Fratellanza senza vessilli',
            en: 'Brotherhood Without Banners',
          },
        },
      ],
    },
    'mad-huntsman': {
      role: { it: 'Cacciatore', en: 'Huntsman' },
      log: {
        it: 'Cattura gli uomini del nord che hanno saccheggiato le terre intorno e li lascia morire di fame nelle gabbie. Una notte porta in città in catene un nuovo prigioniero, Sandor Clegane.',
        en: 'He catches the northmen who have plundered the lands around and leaves them to starve in cages. One night he brings a new prisoner into the town in chains: Sandor Clegane.',
      },
      status: [
        { episode: 24, chapter: 173, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        // At his gate he keeps his own cages and his own prisoner. He hands
        // Sandor over to the outlaws and stands with them at the hollow hill
        // in Arya VI (chapter 178); episode 25 only orders it.
        {
          episode: 24,
          chapter: 173,
          source: 'chapter',
          value: { it: 'Nessuna fedeltà', en: 'No allegiance' },
        },
        {
          episode: 25,
          chapter: 178,
          source: 'chapter',
          value: {
            it: 'Fratellanza senza vessilli',
            en: 'Brotherhood Without Banners',
          },
        },
      ],
    },
    'edric-dayne': {
      role: {
        it: 'Lord di Stelle al Tramonto, scudiero di Beric Dondarrion',
        en: 'Lord of Starfall, squire to Beric Dondarrion',
      },
      log: {
        it: 'È lo scudiero di lord Beric e lo chiamano Ned, come il padre di Arya. Le racconta di aver visto Eddard Stark al torneo del Primo Cavaliere, e che il padre di Arya amava sua zia Ashara. Harwin non lo smentisce.',
        en: 'He is Lord Beric’s squire, and he is called Ned, like Arya’s father. He tells Arya he saw Eddard Stark at the Hand’s tourney, and that her father loved his aunt Ashara. Harwin does not deny it.',
      },
      status: [
        { episode: 27, chapter: 187, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 27,
          chapter: 187,
          source: 'chapter',
          value: {
            it: 'Fratellanza senza vessilli',
            en: 'Brotherhood Without Banners',
          },
        },
      ],
    },
    'ghost-of-high-heart': {
      role: { it: 'Veggente di Cuore Alto', en: 'Seer of High Heart' },
      log: {
        it: 'Quando i fuorilegge tornano a Cuore Alto, racconta i suoi sogni a lord Beric e chiede una canzone in cambio. Caccia via Arya, poi dice loro di cercare sua madre alle Torri Gemelle, dove ci sarà un matrimonio.',
        en: 'When the outlaws come back to High Heart, she tells Lord Beric her dreams and asks for a song in payment. She sends Arya away, then tells them to seek her mother at the Twins, where there is to be a wedding.',
      },
      status: [
        { episode: 27, chapter: 187, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 27,
          chapter: 187,
          source: 'chapter',
          value: { it: 'Nessuna fedeltà', en: 'No allegiance' },
        },
      ],
    },
    // #1637: Jaime, Brienne and Harrenhal.
    'qyburn': {
      // The gate texts hold what both media tell at his gates: the show's
      // 21 has him give his name to Robb while Talisa tends his wound, the
      // books' 175 has Roose Bolton set him to clean Jaime's stump. What he
      // is comes as dated steps, by medium.
      role: [
        {
          episode: 21,
          chapter: 175,
          value: {
            it: 'Con gli uomini del Nord a Harrenhal',
            en: 'With the northmen at Harrenhal',
          },
        },
        // Books only: Roose Bolton has him cleanse and bandage Jaime's
        // stump, in Jaime IV (chapter 175), his gate. Episode 21 only orders
        // it. That he was a maester is not in the cached chapters through
        // 196, so no step tells it.
        {
          episode: 21,
          chapter: 175,
          source: 'chapter',
          value: {
            it: 'Guaritore al servizio di Roose Bolton',
            en: 'Healer in Roose Bolton’s service',
          },
        },
        // Show only: he treats Jaime's stump, and tells him the Citadel
        // stripped him of his chain for his experiments, in "Kissed by Fire"
        // (episode 25). Chapter 175 only orders it.
        {
          episode: 25,
          chapter: 175,
          source: 'episode',
          value: {
            it: 'Guaritore privato della catena di maestro',
            en: 'Healer stripped of his maester’s chain',
          },
        },
      ],
      log: {
        it: 'Si trova a Harrenhal mentre il castello è in mano agli uomini del Nord.',
        en: 'He is at Harrenhal while the northmen hold the castle.',
      },
      status: [{ episode: 21, chapter: 175, value: 'alive' }],
      affiliation: [
        // Show only: the northmen find him alive among the prisoners Ser
        // Gregor's men put to the sword, and he gives Robb his name, in
        // "Valar Dohaeris" (episode 21).
        {
          episode: 21,
          chapter: 175,
          source: 'episode',
          value: { it: 'Nessuna fedeltà', en: 'No allegiance' },
        },
        // Roose Bolton has him tend Jaime's stump, in "Kissed by Fire"
        // (episode 25; the show's Qyburn stays at Harrenhal when Robb leaves
        // Roose in command) and Jaime IV (chapter 175), the books' gate.
        {
          episode: 25,
          chapter: 175,
          value: {
            it: 'Al servizio di Roose Bolton',
            en: 'In Roose Bolton’s service',
          },
        },
      ],
    },
    'steelshanks-walton': {
      role: {
        it: 'Capitano al servizio di Roose Bolton',
        en: 'Captain in Roose Bolton’s service',
      },
      log: {
        it: 'Guida i duecento uomini di Forte Terrore che scortano Jaime Lannister ad Approdo del Re. Quando Jaime lo costringe a tornare a Harrenhal per Brienne, i suoi uomini abbattono l’orso con le balestre.',
        en: 'He leads the two hundred Dreadfort men who escort Jaime Lannister to King’s Landing. When Jaime makes him turn back to Harrenhal for Brienne, his men bring down the bear with their crossbows.',
      },
      status: [
        { episode: 27, chapter: 188, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 27,
          chapter: 188,
          source: 'chapter',
          value: { it: 'Casa Bolton', en: 'House Bolton' },
        },
      ],
    },
    // #1640: Dragonstone. The three are the books' alone, and each opens at
    // Davos IV (chapter 180), the first chapter whose synopsis has his name
    // in speech (see the entries).
    'axell-florent': {
      role: {
        it: 'Castellano di Roccia del Drago',
        en: 'Castellan of Dragonstone',
      },
      log: {
        it: 'Zio della regina Selyse, è tra gli uomini della regina, i seguaci del Signore della Luce. Quando Davos Seaworth torna a Roccia del Drago lo arresta per aver tramato contro Melisandre. Vuole diventare Primo Cavaliere del re, e minaccia Davos se non lo aiuta.',
        en: 'Queen Selyse’s uncle, he is one of the queen’s men, the followers of the Lord of Light. When Davos Seaworth comes back to Dragonstone he arrests him for plotting against Melisandre. He wants to be the king’s Hand, and threatens Davos if he does not help him.',
      },
      status: [
        { episode: 28, chapter: 180, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 28,
          chapter: 180,
          source: 'chapter',
          value: { it: 'Casa Florent', en: 'House Florent' },
        },
      ],
    },
    'alester-florent': {
      role: {
        it: 'Ex Primo Cavaliere di re Stannis',
        en: 'Former Hand of King Stannis',
      },
      log: {
        it: 'Dopo la battaglia delle Acque Nere Stannis lo nomina suo Primo Cavaliere. Scrive a Tywin Lannister per offrire la pace a nome di Stannis, e per questo è gettato in prigione come traditore. Stannis lo condanna a morte.',
        en: 'After the battle on the Blackwater Stannis makes him his Hand. He writes to Tywin Lannister to offer peace in Stannis’s name, and is thrown in the dungeon as a traitor for it. Stannis condemns him to death.',
      },
      status: [
        { episode: 28, chapter: 180, source: 'chapter', value: 'imprisoned' },
      ],
      affiliation: [
        {
          episode: 28,
          chapter: 180,
          source: 'chapter',
          value: { it: 'Casa Florent', en: 'House Florent' },
        },
      ],
    },
    'edric-storm': {
      role: {
        it: 'Figlio bastardo di re Robert',
        en: 'King Robert’s bastard son',
      },
      log: {
        it: 'Vive a Roccia del Drago e gioca con la principessa Shireen e il suo giullare. Melisandre vuole bruciarlo, perché nel suo sangue c’è il potere di un re. Stannis rifiuta, ma getta nel fuoco tre sanguisughe piene del suo sangue, nominando i tre re rivali.',
        en: 'He lives on Dragonstone and plays with Princess Shireen and her fool. Melisandre wants to burn him for the power of a king’s blood in him. Stannis refuses, but throws three leeches full of his blood into the fire, naming the three rival kings.',
      },
      status: [
        { episode: 28, chapter: 180, source: 'chapter', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 28,
          chapter: 180,
          source: 'chapter',
          value: { it: 'Casa Baratheon', en: 'House Baratheon' },
        },
      ],
    },
    // #1641: Bran's road and Theon.
    // The show alone, so chapter 284 (Reek I of A Dance with Dragons, the
    // chapter the scene adapts) only orders every entry. Episode 27 shows
    // only the scene: whom she serves and her bond with Ramsay are told in
    // season 4, steps for the stage that reaches it.
    'myranda': {
      role: {
        it: 'Giovane donna nella prigione di Theon',
        en: 'Young woman at Theon’s prison',
      },
      log: {
        it: 'Con un’altra ragazza, Violet, libera Theon dalla croce a cui è legato, lo stende su un letto e lo seduce. Poi entra il suo carceriere, che fa tenere fermo Theon per evirarlo.',
        en: 'With another young woman, Violet, she frees Theon from the cross he is bound to, lays him on a bed and seduces him. Then his captor comes in and has Theon held down to geld him.',
      },
      status: [
        { episode: 27, chapter: 284, source: 'episode', value: 'alive' },
      ],
      affiliation: [
        {
          episode: 27,
          chapter: 284,
          source: 'episode',
          value: { it: 'Nessuna fedeltà', en: 'No allegiance' },
        },
      ],
    },
  },
  entries: [
    // #1639: Essos, Daenerys at Astapor and Yunkai.
    // Show: in "Walk of Punishment" (episode 23) Daenerys takes her from the
    // slaver as part of the deal and asks her name (Game of Thrones Wiki,
    // Missandei); "Valar Dohaeris" (episode 21), where she first translates
    // for him, names her in narration only. Books: Daenerys III (chapter
    // 171), Daenerys asks her name in High Valyrian to proclaim her free
    // (A Wiki of Ice and Fire, Missandei); in Daenerys II (chapter 167) she
    // is only the slave girl who translates.
    {
      id: 'missandei',
      kind: 'character',
      revealedAtEpisode: 23,
      revealedAtChapter: 171,
      name: { it: 'Missandei', en: 'Missandei' },
      summary: {
        it: 'Una giovane interprete di Astapor, presa al suo servizio da Daenerys.',
        en: 'A young interpreter from Astapor, taken into Daenerys’s service.',
      },
      visual: { art: 'missandei', tint: 'violet' },
    },
    // Books only: the slaver who sells Daenerys the Unsullied, in Daenerys
    // II and III (chapters 167 and 171). A Wiki of Ice and Fire's synopses
    // name him in narration; no quoted line seen says his name, so he takes
    // the later chapter, 171, where he strikes the bargain and dies (an
    // owner check: if Daenerys II names him in speech, 167). The show has
    // him in "Valar Dohaeris", "Walk of Punishment" and "And Now His Watch
    // Is Ended" (episodes 21, 23 and 24), but no quote on the Game of
    // Thrones Wiki has his name said ("Tell the Good Master"), so he is the
    // books' alone (an owner check). Episode 24, where the show burns him,
    // only orders him.
    {
      id: 'kraznys-mo-nakloz',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 24,
      revealedAtChapter: 171,
      name: { it: 'Kraznys mo Nakloz', en: 'Kraznys mo Nakloz' },
      summary: {
        it: 'Uno schiavista di Astapor, dei Buoni Padroni, che addestra e vende gli Immacolati.',
        en: 'A slaver of Astapor, one of the Good Masters, who trains and sells the Unsullied.',
      },
      visual: { art: 'kraznys-mo-nakloz', tint: 'yellow' },
    },
    // Show: in "Kissed by Fire" (episode 25) the Unsullied pick him as their
    // leader, and when Daenerys asks his name he introduces himself as Grey
    // Worm (quoted on the Game of Thrones Wiki). Books: Daenerys IV (chapter
    // 186), the Unsullied choose him as an officer, and he keeps his name:
    // "Grey Worm is the name this one drew the day Daenerys Stormborn set
    // him free" (quoted on A Wiki of Ice and Fire's Grey Worm page).
    {
      id: 'grey-worm',
      kind: 'character',
      revealedAtEpisode: 25,
      revealedAtChapter: 186,
      name: { it: 'Verme Grigio', en: 'Grey Worm' },
      summary: {
        it: 'Un Immacolato, scelto dai suoi compagni come ufficiale.',
        en: 'One of the Unsullied, chosen by his brothers as an officer.',
      },
      visual: { art: 'grey-worm', tint: 'ocher' },
    },
    // Show: in "The Bear and the Maiden Fair" (episode 27) Missandei
    // announces the Yunkish envoy as Razdal mo Eraz, one of the Wise
    // Masters. Books: Daenerys IV (chapter 186), the Wise Masters' envoy to
    // her camp is Grazdan mo Eraz (A Wiki of Ice and Fire's synopsis and
    // Appearing list; no quote seen). The show renamed him (Game of Thrones
    // Wiki, Razdal mo Eraz) and never says Grazdan, and the books never say
    // Razdal, so an episode reader gets the show's name (`episodeName`, past
    // the last chapter).
    {
      id: 'grazdan-mo-eraz',
      kind: 'character',
      episodeName: {
        name: { it: 'Razdal mo Eraz', en: 'Razdal mo Eraz' },
        chapter: 345,
      },
      revealedAtEpisode: 27,
      revealedAtChapter: 186,
      name: { it: 'Grazdan mo Eraz', en: 'Grazdan mo Eraz' },
      summary: {
        it: 'Uno schiavista di Yunkai, dei Saggi Padroni, mandato a trattare con Daenerys.',
        en: 'A slaver of Yunkai, one of the Wise Masters, sent to treat with Daenerys.',
      },
      visual: { art: 'grazdan-mo-eraz', tint: 'lavender' },
    },
    // Show: in "Second Sons" (episode 28) he invites Daenerys to "come sit on
    // Mero's lap" (quoted on the Game of Thrones Wiki). Books: Daenerys IV
    // (chapter 186), the captain of the Second Sons comes to her camp
    // (A Wiki of Ice and Fire's synopsis and Appearing list; no quote seen).
    {
      id: 'mero',
      kind: 'character',
      revealedAtEpisode: 28,
      revealedAtChapter: 186,
      name: { it: 'Mero', en: 'Mero' },
      summary: {
        it: 'Un mercenario, capitano dei Secondi Figli.',
        en: 'A sellsword, captain of the Second Sons.',
      },
      visual: { art: 'mero', tint: 'orange' },
    },
    // Show: in "Second Sons" (episode 28) he swears to Daenerys that "the
    // Second Sons are yours, and so is Daario Naharis" (quoted on the Game
    // of Thrones Wiki). Books: Daenerys IV (chapter 186), Jorah warns her
    // that "Daario Naharis is not one of them", the men worthy of trust
    // (quoted on A Wiki of Ice and Fire's Daario page).
    {
      id: 'daario-naharis',
      kind: 'character',
      revealedAtEpisode: 28,
      revealedAtChapter: 186,
      name: { it: 'Daario Naharis', en: 'Daario Naharis' },
      summary: {
        it: 'Un mercenario di Tyrosh, che a Yunkai passa dalla parte di Daenerys.',
        en: 'A Tyroshi sellsword who goes over to Daenerys at Yunkai.',
      },
      visual: { art: 'daario-naharis', tint: 'cyan' },
    },
    // Books only: Daenerys IV (chapter 186), one of the three captains of
    // the Stormcrows, who refuses Daenerys's offer at the parley (A Wiki of
    // Ice and Fire's synopsis and Appearing list; no quote seen). The show
    // has him in "Second Sons" (episode 28), but its synopsis names him in
    // narration and no quote has his name said, so he is the books' alone
    // (an owner check). Episode 28 only orders him.
    {
      id: 'prendahl-na-ghezn',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 28,
      revealedAtChapter: 186,
      name: { it: 'Prendahl na Ghezn', en: 'Prendahl na Ghezn' },
      summary: {
        it: 'Un mercenario ghiscariano, uno dei tre capitani dei Corvi della Tempesta.',
        en: 'A Ghiscari sellsword, one of the three captains of the Stormcrows.',
      },
      visual: { art: 'prendahl-na-ghezn', tint: 'sand' },
    },
    // #1634: King's Landing.
    //
    // Show: "Dark Wings, Dark Words" (episode 22), Loras brings Sansa to the
    // gardens and Margaery introduces their grandmother, Lady Olenna. Books:
    // Sansa I (site chapter 150), Margaery's invitation asks Sansa to sup
    // with her and her grandmother, the Lady Olenna Tyrell.
    {
      id: 'olenna-tyrell',
      kind: 'character',
      revealedAtEpisode: 22,
      revealedAtChapter: 150,
      name: { it: 'Olenna Tyrell', en: 'Olenna Tyrell' },
      summary: {
        it: 'La nonna di Margaery e Loras Tyrell, matriarca di Casa Tyrell.',
        en: 'The grandmother of Margaery and Loras Tyrell, matriarch of House Tyrell.',
      },
      visual: { art: 'olenna-tyrell', tint: 'green' },
    },
    // Books: Sansa I (site chapter 150), Sansa is introduced to all of
    // Margaery's cousins at the supper in the Maidenvault. The show's
    // cousins are unnamed; episode 22 only orders the three records.
    {
      id: 'megga-tyrell',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 150,
      name: { it: 'Megga Tyrell', en: 'Megga Tyrell' },
      summary: {
        it: 'Una cugina di Margaery Tyrell, tra le sue compagne ad Approdo del Re.',
        en: 'A cousin of Margaery Tyrell, one of her companions in King’s Landing.',
      },
      visual: { art: 'megga-tyrell', tint: 'yellow' },
    },
    {
      id: 'alla-tyrell',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 150,
      name: { it: 'Alla Tyrell', en: 'Alla Tyrell' },
      summary: {
        it: 'Una cugina di Margaery Tyrell, tra le sue compagne ad Approdo del Re.',
        en: 'A cousin of Margaery Tyrell, one of her companions in King’s Landing.',
      },
      visual: { art: 'alla-tyrell', tint: 'pink' },
    },
    {
      id: 'elinor-tyrell',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 150,
      name: { it: 'Elinor Tyrell', en: 'Elinor Tyrell' },
      summary: {
        it: 'Una cugina di Margaery Tyrell che le fa compagnia ad Approdo del Re, con le cugine più giovani.',
        en: 'A cousin of Margaery Tyrell who keeps her company in King’s Landing, with the younger cousins.',
      },
      visual: { art: 'elinor-tyrell', tint: 'teal' },
    },
    // Books: Tyrion V (site chapter 182), Tyrion rides out to greet the
    // Dornishmen and finds them led by Prince Oberyn, not Prince Doran. The
    // show meets him in season 4: in "Two Swords" (episode 31) the Dornish
    // lords tell Tyrion that Oberyn has come in Doran's place.
    {
      id: 'oberyn-martell',
      kind: 'character',
      revealedAtEpisode: 31,
      revealedAtChapter: 182,
      name: { it: 'Oberyn Martell', en: 'Oberyn Martell' },
      summary: {
        it: 'Un principe di Dorne, fratello minore del principe Doran Martell.',
        en: 'A prince of Dorne, the younger brother of Prince Doran Martell.',
      },
      visual: { art: 'oberyn-martell', tint: 'orange' },
    },
    // Books: Tyrion V (site chapter 182), Oberyn tells Tyrion that "Ellaria
    // is curious". The show meets her in season 4: Oberyn introduces her to
    // Tywin and Cersei at the wedding of "The Lion and the Rose" (episode
    // 32). In "Two Swords" (31) no quote read has her name said.
    {
      id: 'ellaria-sand',
      kind: 'character',
      revealedAtEpisode: 32,
      revealedAtChapter: 182,
      name: { it: 'Ellaria Sand', en: 'Ellaria Sand' },
      summary: {
        it: 'L’amante del principe Oberyn Martell, che lo segue da Dorne.',
        en: 'Prince Oberyn Martell’s paramour, who travels with him from Dorne.',
      },
      visual: { art: 'ellaria-sand', tint: 'wine' },
    },
    // #1635: Robb's war and the Riverlands.
    //
    // Books only: Catelyn II (site chapter 158), Robb introduces her at
    // Riverrun as his lady wife. The show gives Robb Talisa instead;
    // episode 23, where he comes to Riverrun with his wife, only orders her.
    {
      id: 'jeyne-westerling',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 23,
      revealedAtChapter: 158,
      name: { it: 'Jeyne Westerling', en: 'Jeyne Westerling' },
      summary: {
        it: 'Una giovane nobile di Casa Westerling, la moglie di Robb Stark.',
        en: 'A young lady of House Westerling, Robb Stark’s wife.',
      },
      visual: { art: 'jeyne-westerling', tint: 'flamingo' },
    },
    // Books only: Catelyn II (site chapter 158), Robb introduces him to his
    // mother with Lady Sybell and her children. The show has no Westerlings;
    // episode 23 only orders him.
    {
      id: 'rolph-spicer',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 23,
      revealedAtChapter: 158,
      name: { it: 'Rolph Spicer', en: 'Rolph Spicer' },
      summary: {
        it: 'Un cavaliere di Casa Spicer, zio di Jeyne Westerling.',
        en: 'A knight of House Spicer, Jeyne Westerling’s uncle.',
      },
      visual: { art: 'rolph-spicer', tint: 'sand' },
    },
    // Books only: Catelyn II (site chapter 158), in the same introduction as
    // his sister Jeyne. Episode 23 only orders him.
    {
      id: 'raynald-westerling',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 23,
      revealedAtChapter: 158,
      name: { it: 'Raynald Westerling', en: 'Raynald Westerling' },
      summary: {
        it: 'Un cavaliere di Casa Westerling, fratello di Jeyne Westerling.',
        en: 'A knight of House Westerling, Jeyne Westerling’s brother.',
      },
      visual: { art: 'raynald-westerling', tint: 'azure' },
    },
    // Show: "Walk of Punishment" (episode 23), Edmure names the hostages he
    // took, "Willem Lannister, Martyn Lannister". Books: Catelyn III (site
    // chapter 164), his body and Tion Frey's are laid before Robb; earlier
    // books only mention him, so the books' record opens dead.
    {
      id: 'willem-lannister',
      kind: 'character',
      revealedAtEpisode: 23,
      revealedAtChapter: 164,
      name: { it: 'Willem Lannister', en: 'Willem Lannister' },
      summary: {
        it: 'Un giovane scudiero di Casa Lannister, fatto prigioniero dalla parte di Robb Stark.',
        en: 'A young squire of House Lannister, taken prisoner by Robb Stark’s side.',
      },
      visual: { art: 'willem-lannister', tint: 'ivory' },
    },
    // Show only: "Walk of Punishment" (episode 23), in the same line as his
    // brother Willem. The books' Martyn is only mentioned, a captive at
    // Riverrun who is exchanged and never seen; chapter 164 only orders him.
    {
      id: 'martyn-lannister',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 23,
      revealedAtChapter: 164,
      name: { it: 'Martyn Lannister', en: 'Martyn Lannister' },
      summary: {
        it: 'Un giovane scudiero di Casa Lannister, prigioniero a Delta delle Acque con il fratello Willem.',
        en: 'A young squire of House Lannister, held prisoner at Riverrun with his brother Willem.',
      },
      visual: { art: 'martyn-lannister', tint: 'yellow' },
    },
    // Books: Catelyn IV (site chapter 179), he and Walder Rivers come to
    // Riverrun with Lord Walder's terms, and Robb asks him to help launch
    // Lord Hoster's funeral boat. Show: "The Winds of Winter" (episode 60),
    // Lord Walder asks where "Black Walder and Lothar" are; "The Climb"
    // (episode 26) and "The Rains of Castamere" name him only in narration
    // (owner check). He dies in episode 60, so the show record opens dead.
    {
      id: 'lothar-frey',
      kind: 'character',
      revealedAtEpisode: 60,
      revealedAtChapter: 179,
      name: { it: 'Lothar Frey', en: 'Lothar Frey' },
      summary: {
        it: 'Uno dei figli di lord Walder Frey, che parla a nome del padre nelle trattative con Robb Stark.',
        en: 'One of Lord Walder Frey’s sons, who speaks for his father in his dealings with Robb Stark.',
      },
      visual: { art: 'lothar-frey', tint: 'teal' },
    },
    // Books: Catelyn IV (site chapter 179), he comes to Riverrun with his
    // half-brother Lothar. Show: "The Winds of Winter" (episode 60), in the
    // same line, as "Black Walder", the show's name for him (it joins him
    // with the books' Black Walder Frey, a grandson of Lord Walder);
    // episodes 26 and 29 name him only in narration (owner check). He dies
    // in episode 60, so the show record opens dead.
    {
      id: 'walder-rivers',
      kind: 'character',
      revealedAtEpisode: 60,
      revealedAtChapter: 179,
      name: { it: 'Walder Rivers', en: 'Walder Rivers' },
      summary: {
        it: 'Uno dei figli di lord Walder Frey, mandato a Delta delle Acque con il fratellastro Lothar.',
        en: 'One of Lord Walder Frey’s sons, sent to Riverrun with his half-brother Lothar.',
      },
      visual: { art: 'walder-rivers', tint: 'violet' },
    },
    // Show: "The Climb" (episode 26), Lothar brings his father's terms,
    // "Our father requires Lord Edmure to wed one of his daughters.
    // Roslin." Books: Catelyn IV (site chapter 179), Lothar's terms are
    // that Edmure marry Roslin Frey. She is first seen at the Twins, in
    // "The Rains of Castamere" (episode 29) and Catelyn VI (193).
    {
      id: 'roslin-frey',
      kind: 'character',
      revealedAtEpisode: 26,
      revealedAtChapter: 179,
      name: { it: 'Roslin Frey', en: 'Roslin Frey' },
      summary: {
        it: 'Una figlia di lord Walder Frey, che il padre vuole dare in sposa a Edmure Tully.',
        en: 'A daughter of Lord Walder Frey, whom her father means to marry to Edmure Tully.',
      },
      visual: { art: 'roslin-frey', tint: 'lavender' },
    },
    // Books only: Catelyn VI (site chapter 193), he leads the party that
    // rides out from the Twins to meet Robb's host. A Clash of Kings only
    // mentions him. The show has no Ryman; episode 29 only orders him.
    {
      id: 'ryman-frey',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 29,
      revealedAtChapter: 193,
      name: { it: 'Ryman Frey', en: 'Ryman Frey' },
      summary: {
        it: 'Un nipote di lord Walder Frey, il figlio maggiore di ser Stevron.',
        en: 'A grandson of Lord Walder Frey, Ser Stevron’s eldest son.',
      },
      visual: { art: 'ryman-frey', tint: 'orange' },
    },
    // Books only: Catelyn VII (site chapter 195), Catelyn seizes Jinglebell
    // and bargains with his life for Robb's, and kills him, so the record
    // opens dead. Catelyn VI (193) has him in Lord Walder's hall but its
    // synopsis does not name him: the safe later pin. A Clash of Kings only
    // mentions him. The show gives his part at the wedding to Lord Walder's
    // wife; episode 29 only orders him.
    {
      id: 'aegon-frey',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 29,
      revealedAtChapter: 195,
      name: { it: 'Aegon Frey', en: 'Aegon Frey' },
      summary: {
        it: 'Un nipote di lord Walder Frey, detto Campanello, che faceva da giullare alle Torri Gemelle.',
        en: 'A grandson of Lord Walder Frey, called Jinglebell, who played the fool at the Twins.',
      },
      visual: { art: 'aegon-frey', tint: 'acid' },
    },
    // #1638: the Wall and beyond. Mance Rayder's host and its chiefs, the
    // Fist of the First Men and the mutiny at Craster's Keep.
    //
    // Show: "Valar Dohaeris" (episode 21), Jon Snow is brought into his tent
    // and Mance introduces himself. Books: Jon I (site chapter 151), the man
    // singing in the tent is the king, and he introduces his companions. The
    // show says his name from "Cripples, Bastards, and Broken Things"
    // (episode 4), where Alliser Thorne speaks of the wildlings under him.
    {
      id: 'mance-rayder',
      kind: 'character',
      revealedAtEpisode: 21,
      revealedAtChapter: 151,
      nameSaidAt: 4,
      name: { it: 'Mance Rayder', en: 'Mance Rayder' },
      summary: {
        it: 'Il Re oltre la Barriera, un disertore dei Guardiani della notte che guida i bruti.',
        en: 'The King-Beyond-the-Wall, a deserter of the Night’s Watch who leads the wildlings.',
      },
      visual: { art: 'mance-rayder', tint: 'red' },
    },
    // Show: "Walk of Punishment" (episode 23), Mance orders Tormund to take
    // twenty men and Jon over the Wall. Episodes 21 and 22 name him only in
    // narration (an owner check). Books: Jon I (site chapter 151), Mance
    // introduces him to Jon as Tormund Giantsbane.
    {
      id: 'tormund',
      kind: 'character',
      revealedAtEpisode: 23,
      revealedAtChapter: 151,
      name: { it: 'Tormund', en: 'Tormund' },
      summary: {
        it: 'Un capo dei bruti, uno dei condottieri di Mance Rayder.',
        en: 'A wildling chief, one of Mance Rayder’s war leaders.',
      },
      visual: { art: 'tormund', tint: 'orange' },
    },
    // Show: "Dark Wings, Dark Words" (episode 22), Mance explains to Jon that
    // Orell is a warg and asks him what he has seen, as the Game of Thrones
    // Wiki's Mance Rayder page reports it; no page read quotes the name said
    // in season 3 (an owner check). Books: Jon I (site chapter 151) names him
    // (A Wiki of Ice and Fire lists him as mentioned; the line is
    // unverified). In the books he is the watcher Jon killed in the Skirling
    // Pass (A Clash of Kings, Jon VI, chapter 125), so he opens dead there:
    // his summary and log say only what holds in both media.
    {
      id: 'orell',
      kind: 'character',
      revealedAtEpisode: 22,
      revealedAtChapter: 151,
      name: { it: 'Orell', en: 'Orell' },
      summary: {
        it: 'Un warg dei bruti, legato a un’aquila.',
        en: 'A wildling warg, bound to an eagle.',
      },
      visual: { art: 'orell', tint: 'sand' },
    },
    // Books: Jon I (site chapter 151), Mance introduces him as Styr, the
    // Magnar of Thenn, whom Jon has taken for the king. The show's Styr
    // comes in season 4, and no page read has his name said there (an owner
    // check), so the record is the books'; episode 21 only orders it.
    {
      id: 'styr',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 21,
      revealedAtChapter: 151,
      name: { it: 'Styr', en: 'Styr' },
      summary: {
        it: 'Il Magnar di Thenn, signore di uno dei popoli dei bruti.',
        en: 'The Magnar of Thenn, lord of one of the wildling peoples.',
      },
      visual: { art: 'styr', tint: 'ice' },
    },
    // Books: Jon I (site chapter 151), Mance introduces the pregnant Dalla.
    // The show has no Dalla: episode 21 only orders her. Her name is an
    // Italian word ("dalla", from the), so plain text is not scanned for it.
    {
      id: 'dalla',
      kind: 'character',
      source: 'chapter',
      commonWord: true,
      revealedAtEpisode: 21,
      revealedAtChapter: 151,
      name: { it: 'Dalla', en: 'Dalla' },
      summary: {
        it: 'La moglie di Mance Rayder, che aspetta un figlio da lui.',
        en: 'Mance Rayder’s wife, who is carrying his child.',
      },
      visual: { art: 'dalla', tint: 'lavender' },
    },
    // Books: Jon I (site chapter 151), Mance introduces Dalla's sister Val.
    // The show has no Val: episode 21 only orders her.
    {
      id: 'val',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 21,
      revealedAtChapter: 151,
      name: { it: 'Val', en: 'Val' },
      summary: {
        it: 'La sorella di Dalla, nella tenda di Mance Rayder.',
        en: 'Dalla’s sister, in Mance Rayder’s tent.',
      },
      visual: { art: 'val', tint: 'yellow' },
    },
    // Books: Jon I (site chapter 151), Mance introduces him as Val's lover.
    // The show has no Jarl: episode 21 only orders him.
    {
      id: 'jarl',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 21,
      revealedAtChapter: 151,
      name: { it: 'Jarl', en: 'Jarl' },
      summary: {
        it: 'Un giovane razziatore dei bruti, l’amante di Val.',
        en: 'A young wildling raider, Val’s lover.',
      },
      visual: { art: 'jarl', tint: 'teal' },
    },
    // Books: the prologue (site chapter 144), he hunts with Chett near the
    // Fist and is one of the brothers in Chett's plot. The show has no
    // Small Paul: episode 21 only orders him.
    {
      id: 'small-paul',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 21,
      revealedAtChapter: 144,
      name: { it: 'Small Paul', en: 'Small Paul' },
      summary: {
        it: 'Un confratello enorme dei Guardiani della notte, nella spedizione oltre la Barriera.',
        en: 'A huge brother of the Night’s Watch, on the ranging beyond the Wall.',
      },
      visual: { art: 'small-paul', tint: 'azure' },
    },
    // Books: the prologue (site chapter 144), he is one of the brothers in
    // Chett's plot to desert. The show gives his deed at Craster's Keep to
    // Karl Tanner: episode 21 only orders him.
    {
      id: 'dirk',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 21,
      revealedAtChapter: 144,
      name: { it: 'Dirk', en: 'Dirk' },
      summary: {
        it: 'Un ranger dei Guardiani della notte, nella spedizione oltre la Barriera.',
        en: 'A ranger of the Night’s Watch, on the ranging beyond the Wall.',
      },
      visual: { art: 'dirk', tint: 'cyan' },
    },
    // Books: the prologue (site chapter 144), he is one of the brothers in
    // Chett's plot to desert. The show gives his deed at Craster's Keep to
    // Rast: episode 21 only orders him.
    {
      id: 'ollo-lophand',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 21,
      revealedAtChapter: 144,
      name: { it: 'Ollo Lophand', en: 'Ollo Lophand' },
      summary: {
        it: 'Un confratello dei Guardiani della notte, nella spedizione oltre la Barriera.',
        en: 'A brother of the Night’s Watch, on the ranging beyond the Wall.',
      },
      visual: { art: 'ollo-lophand', tint: 'acid' },
    },
    // Books: the prologue (site chapter 144), Chett counts him among the
    // brothers of his plot. The show's Karl Tanner is a character of its
    // own, named only in season 4: episode 21 only orders this record.
    {
      id: 'clubfoot-karl',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 21,
      revealedAtChapter: 144,
      name: { it: 'Karl Piededuro', en: 'Clubfoot Karl' },
      summary: {
        it: 'Un attendente dei Guardiani della notte con un piede deforme.',
        en: 'A steward of the Night’s Watch with a club foot.',
      },
      visual: { art: 'clubfoot-karl', tint: 'violet' },
    },
    // #1636: Arya, the Brotherhood Without Banners and the Hound. Every
    // record here is the books' alone: the show's outlaws are Thoros, Beric
    // and Anguy, and no quote read has Anguy's name said on screen (owner
    // check). Each one's episode only orders it.
    //
    // Books: Arya II (site chapter 157), three outlaws come upon Arya,
    // Gendry and Hot Pie by the Trident, and Hot Pie gives his name while
    // the other two give false ones. Anguy wins the archery at the Hand's
    // tourney in Eddard VII of A Game of Thrones (chapter 31), where Alyn's
    // chronicle names him (`nameSaidAt`); the record opens where he is next
    // seen, later and so safe (owner check: 31). The show's Anguy rides with
    // Thoros from "Dark Wings, Dark Words" (episode 22), which orders him.
    {
      id: 'anguy',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 157,
      nameSaidAt: 5,
      name: { it: 'Anguy', en: 'Anguy' },
      summary: {
        it: 'Un arciere della Fratellanza senza vessilli, i fuorilegge che combattono in nome del defunto re Robert.',
        en: 'An archer of the Brotherhood Without Banners, outlaws who fight in the name of the late King Robert.',
      },
      visual: { art: 'anguy', tint: 'wine' },
    },
    // Books: Arya II (site chapter 157), the same scene; he sings on the
    // road to the inn and gives Arya a paper for their horses.
    {
      id: 'tom-of-sevenstreams',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 157,
      name: { it: 'Tom di Settecorrenti', en: 'Tom of Sevenstreams' },
      summary: {
        it: 'Un cantante, uno dei fuorilegge della Fratellanza senza vessilli.',
        en: 'A singer, one of the outlaws of the Brotherhood Without Banners.',
      },
      visual: { art: 'tom-of-sevenstreams', tint: 'ocher' },
    },
    // Books: Arya II (site chapter 157), the same scene; Arya hits him in
    // the face with a tankard at the inn. The show's Lem appears only in
    // season 6, where no line says his name; episode 22 orders him.
    {
      id: 'lem',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 157,
      name: { it: 'Lem', en: 'Lem' },
      summary: {
        it: 'Un fuorilegge grande e grosso dal mantello giallo, uno della Fratellanza senza vessilli.',
        en: 'A big outlaw in a yellow cloak, one of the Brotherhood Without Banners.',
      },
      visual: { art: 'lem', tint: 'yellow' },
    },
    // Books: Arya III (site chapter 161), he blows his horn at a village
    // that looks abandoned, and its people come out to greet the outlaws.
    // Arya II (157) lists him among the men who come into the inn, with no
    // line read that names him (owner check).
    {
      id: 'jack-be-lucky',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 161,
      name: { it: 'Jack Fortunello', en: 'Jack-Be-Lucky' },
      summary: {
        it: 'Un fuorilegge della Fratellanza senza vessilli, quello che suona il corno della banda.',
        en: 'An outlaw of the Brotherhood Without Banners, the one who blows the band’s horn.',
      },
      visual: { art: 'jack-be-lucky', tint: 'sand' },
    },
    // Books: Arya IV (site chapter 166), an old dwarf woman speaks in
    // private to Lem, Tom and Greenbeard. Arya II and III (157, 161) list
    // him among the outlaws, with no line read that names him (owner
    // check).
    {
      id: 'greenbeard',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 166,
      name: { it: 'Barbaverde', en: 'Greenbeard' },
      summary: {
        it: 'Un uomo dalla barba verde, uno dei fuorilegge della Fratellanza senza vessilli.',
        en: 'A man with a green beard, one of the outlaws of the Brotherhood Without Banners.',
      },
      visual: { art: 'greenbeard', tint: 'green' },
    },
    // Books: Arya V (site chapter 173), the northmen starving in cages were
    // caught by the Mad Huntsman, and in the night he brings Sandor Clegane
    // into the town in chains. Episode 24 orders him.
    {
      id: 'mad-huntsman',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 24,
      revealedAtChapter: 173,
      name: { it: 'Cacciatore Pazzo', en: 'Mad Huntsman' },
      summary: {
        it: 'Un cacciatore delle Terre dei Fiumi che dà la caccia agli uomini e li lascia nelle gabbie.',
        en: 'A huntsman of the riverlands who hunts down men and leaves them in cages.',
      },
      visual: { art: 'mad-huntsman', tint: 'orange' },
    },
    // Books: Arya VIII (site chapter 187), Arya talks with Edric Dayne,
    // called Ned, the young Lord of Starfall. Arya VI and VII (178, 183)
    // list him at the hollow hill, with no line read that gives his name
    // (owner check). Episode 27 orders him.
    {
      id: 'edric-dayne',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 27,
      revealedAtChapter: 187,
      name: { it: 'Edric Dayne', en: 'Edric Dayne' },
      summary: {
        it: 'Il giovane lord di Stelle al Tramonto, scudiero di lord Beric Dondarrion tra i fuorilegge.',
        en: 'The young Lord of Starfall, Lord Beric Dondarrion’s squire among the outlaws.',
      },
      visual: { art: 'edric-dayne', tint: 'lavender' },
    },
    // Books: Arya VIII (site chapter 187), the outlaws come back to High
    // Heart and the ghost of High Heart tells Lord Beric her dreams. Arya
    // IV (166) has her as an old dwarf woman, with no line read that calls
    // her by the name (owner check). Episode 27 orders her.
    {
      id: 'ghost-of-high-heart',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 27,
      revealedAtChapter: 187,
      name: { it: 'Fantasma di Cuore Alto', en: 'Ghost of High Heart' },
      summary: {
        it: 'Una minuscola vecchia che vive tra i ceppi degli alberi del cuore di Cuore Alto e sogna quello che verrà.',
        en: 'A tiny old woman who lives among the weirwood stumps of High Heart and dreams of what is to come.',
      },
      visual: { art: 'ghost-of-high-heart', tint: 'ivory' },
    },
    // #1637: Jaime, Brienne and Harrenhal.
    //
    // Show: "Valar Dohaeris" (episode 21), the northmen find him alive at
    // Harrenhal and he gives Robb his name. Books: Jaime IV (site chapter
    // 175), Roose Bolton has Qyburn clean and bind Jaime's stump.
    {
      id: 'qyburn',
      kind: 'character',
      revealedAtEpisode: 21,
      revealedAtChapter: 175,
      // Episode 21 adapts chapters up to about 167; Jaime IV (175) is
      // adapted in episode 25, so the pair vouches for no chapter table row.
      unanchored: true,
      name: { it: 'Qyburn', en: 'Qyburn' },
      summary: {
        it: 'Un uomo a Harrenhal, mentre il castello è in mano agli uomini del Nord.',
        en: 'A man at Harrenhal while the northmen hold the castle.',
      },
      visual: { art: 'qyburn', tint: 'ivory' },
    },
    // Books only: Jaime VI (site chapter 188), he leads Jaime's escort out
    // of Harrenhal. Jaime IV (175) lists him in the hall without naming him
    // in its synopsis. The show's Steelshanks is named only in narration in
    // the pages read, so episode 27 only orders him, as Rorge's record does.
    {
      id: 'steelshanks-walton',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 27,
      revealedAtChapter: 188,
      name: { it: 'Steelshanks Walton', en: 'Steelshanks Walton' },
      summary: {
        it: 'Un capitano al servizio di Roose Bolton.',
        en: 'A captain in Roose Bolton’s service.',
      },
      visual: { art: 'steelshanks-walton', tint: 'red' },
    },
    // #1640: Dragonstone, the books' new cast. The show has none of the
    // three in season 3: its Gendry takes Edric's part, and its Axell is
    // first seen at his burning in "The Lion and the Rose" (episode 32),
    // named in narration only. "Second Sons" (episode 28), which adapts
    // Davos IV, only orders them.
    //
    // Davos II (chapter 154): Axell takes Davos into custody on his return,
    // and Davos meets Edric playing with Shireen; the synopsis names both in
    // narration only (owner checks). Davos III (chapter 169): Axell throws
    // Alester into Davos's cell, also in narration. Davos IV (chapter 180)
    // is the first chapter whose synopsis has their names in speech:
    // Stannis has Axell tell Davos his plan and proclaims that Alester will
    // die for treason, and Melisandre asks for Edric to be burned (A Wiki of
    // Ice and Fire, A Storm of Swords-Chapters 10, 25 and 36). Axell and
    // Alester are seen in A Clash of Kings too, where the second stage left
    // them out as bit parts.
    {
      id: 'axell-florent',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 28,
      revealedAtChapter: 180,
      name: { it: 'Axell Florent', en: 'Axell Florent' },
      summary: {
        it: 'Uno zio della regina Selyse, castellano di Roccia del Drago.',
        en: 'An uncle of Queen Selyse, castellan of Dragonstone.',
      },
      visual: { art: 'axell-florent', tint: 'red' },
    },
    // A Clash of Kings' Davos II (site chapter 116) has Cortnay Penrose mock
    // him at the parley, a story only the books tell, ordered at episode 14.
    {
      id: 'alester-florent',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 28,
      revealedAtChapter: 180,
      nameSaidAt: 14,
      name: { it: 'Alester Florent', en: 'Alester Florent' },
      summary: {
        it: 'Il capo di Casa Florent, zio della regina Selyse.',
        en: 'The head of House Florent, Queen Selyse’s uncle.',
      },
      visual: { art: 'alester-florent', tint: 'teal' },
    },
    {
      id: 'edric-storm',
      kind: 'character',
      source: 'chapter',
      revealedAtEpisode: 28,
      revealedAtChapter: 180,
      name: { it: 'Edric Storm', en: 'Edric Storm' },
      summary: {
        it: 'Un figlio bastardo di re Robert, cresciuto a Capo Tempesta.',
        en: 'A bastard son of King Robert, raised at Storm’s End.',
      },
      visual: { art: 'edric-storm', tint: 'yellow' },
    },
    // #1641: Bran's road and Theon.
    //
    // Show only: in "The Bear and the Maiden Fair" (episode 27) Violet
    // tells Theon that "Myranda knows what she's doing" (quoted on the Game
    // of Thrones Wiki). The books' only Myranda is Myranda Royce of the
    // Vale, another person; Reek I of A Dance with Dragons (chapter 284),
    // the chapter the scene adapts, only orders her.
    {
      id: 'myranda',
      kind: 'character',
      source: 'episode',
      revealedAtEpisode: 27,
      revealedAtChapter: 284,
      name: { it: 'Myranda', en: 'Myranda' },
      summary: {
        it: 'Una giovane donna che, con Violet, seduce Theon Greyjoy prigioniero.',
        en: 'A young woman who, with Violet, seduces the captive Theon Greyjoy.',
      },
      visual: { art: 'myranda', tint: 'pink' },
    },
    // #1630: the places a scene of the stage is set in, each at its first
    // scene in each medium, and the places both media name and neither
    // visits, each at its first naming in the stage, as
    // `game-of-thrones-season-3-places.md` lists them.
    // Show: "Valar Dohaeris", Daenerys's ship arrives at Astapor and Kraznys
    // shows her the Unsullied. Books: Daenerys I (site chapter 152), Jorah
    // advises sailing to Astapor to buy Unsullied; Daenerys II (167) is the
    // first chapter set in the city. A place named, then visited, opens at
    // the naming (filing-records §2).
    {
      id: 'astapor',
      kind: 'place',
      // The show names Astapor in "The Prince of Winterfell" (episode 18),
      // where Jorah finds Daenerys a ship (#1476's inventory), which
      // Daenerys's and Jorah's season-2 stories tell.
      nameSaidAt: 18,
      revealedAtEpisode: 21,
      revealedAtChapter: 152,
      name: { it: 'Astapor', en: 'Astapor' },
      summary: {
        it: 'Una città sulla costa della Baia degli Schiavisti, in Essos, dove gli schiavisti addestrano e vendono gli Immacolati.',
        en: 'A city on the coast of Slaver’s Bay, in Essos, where slavers train and sell the Unsullied.',
      },
      visual: { art: 'astapor', tint: 'vermilion' },
    },
    // Show: "The Bear and the Maiden Fair", Daenerys's army marches on Yunkai
    // and she receives its envoy before the walls. Books: Daenerys I (site
    // chapter 152), A Wiki of Ice and Fire's chapter page listing it among
    // the places mentioned with Astapor and Meereen; Daenerys IV (186) brings
    // the army to it.
    {
      id: 'yunkai',
      kind: 'place',
      revealedAtEpisode: 27,
      revealedAtChapter: 152,
      name: { it: 'Yunkai', en: 'Yunkai' },
      summary: {
        it: 'Una città di schiavisti sulla Baia degli Schiavisti, in Essos.',
        en: 'A slaver city on Slaver’s Bay, in Essos.',
      },
      visual: { art: 'yunkai', tint: 'yellow' },
    },
    // Show: "The Rains of Castamere", Sam names the castle to Gilly as the
    // way through the Wall (filing-records §2: a place named, then visited,
    // opens at the naming); "Mhysa" sets Bran's party there. Books: never visited in the
    // stage (Bran IV, site chapter 200, is the next stage's); Jon III (site
    // chapter 170) names it, A Wiki of Ice and Fire's chapter page listing it
    // among the places mentioned (#1252).
    {
      id: 'nightfort',
      kind: 'place',
      revealedAtEpisode: 29,
      revealedAtChapter: 170,
      name: { it: 'Forte della Notte', en: 'the Nightfort' },
      summary: {
        it: 'Un castello abbandonato dei Guardiani della Notte, sulla Barriera.',
        en: 'An abandoned castle of the Night’s Watch, on the Wall.',
      },
      visual: { art: 'nightfort', tint: 'lavender' },
    },
    // Books only. Jaime II (site chapter 155), Jaime, Brienne and Cleos stop
    // at the inn; Arya II (157) is set there too. The show's outlaws take
    // Arya to the Inn at the Crossroads instead ("Walk of Punishment");
    // episode 22, where Jaime and Brienne's road opens, orders it.
    {
      id: 'inn-of-the-kneeling-man',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 155,
      name: {
        it: 'Locanda dell’Uomo in Ginocchio',
        en: 'the Inn of the Kneeling Man',
      },
      summary: {
        it: 'Una locanda sulla strada lungo il fiume, nelle Terre dei Fiumi.',
        en: 'An inn on the road along the river, in the Riverlands.',
      },
      visual: { art: 'inn-of-the-kneeling-man', tint: 'ocher' },
    },
    // Books only. The prologue (site chapter 144), Chett hunts a bear near
    // the river, which Mance Rayder's host is coming down; Jon I (151) meets
    // Mance in the camp along it, a dated step. The
    // show sets Mance's camp in the Frostfangs and never names the river;
    // episode 21 orders it.
    {
      id: 'milkwater',
      kind: 'place',
      source: 'chapter',
      // A Clash of Kings names the river at the Fist (Jon IV, site chapter
      // 108); the books-only relationships of Thoren Smallwood that say it
      // order at episode 15.
      nameSaidAt: 15,
      revealedAtEpisode: 21,
      revealedAtChapter: 144,
      name: { it: 'Fiumelatte', en: 'the Milkwater' },
      summary: {
        it: 'Un fiume oltre la Barriera, che scende dalle montagne.',
        en: 'A river beyond the Wall, running down out of the mountains.',
      },
      visual: { art: 'milkwater', tint: 'cyan' },
    },
    // Books only. Jaime II (site chapter 155), the cook at the inn warns
    // against following the Trident to Maidenpool; Jaime III (165), a dated
    // step, has Brienne and Jaime find the town sacked and empty. Season 3
    // neither visits nor names it; episode 22, where Jaime and Brienne's road
    // opens, orders it.
    {
      id: 'maidenpool',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 22,
      revealedAtChapter: 155,
      name: { it: 'Maidenpool', en: 'Maidenpool' },
      summary: {
        it: 'Un borgo delle Terre dei Fiumi sulla strada per Approdo del Re.',
        en: 'A town of the Riverlands on the road to King’s Landing.',
      },
      visual: { art: 'maidenpool', tint: 'blue' },
    },
    // Books only. Arya IV (site chapter 166), the outlaws climb the hill and
    // Arya overhears the old woman's dreams. The show has no such hill;
    // episode 23, where the outlaws lead Arya on, orders it.
    {
      id: 'high-heart',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 23,
      revealedAtChapter: 166,
      name: { it: 'Cuore Alto', en: 'High Heart' },
      summary: {
        it: 'Un’alta collina nelle Terre dei Fiumi, coronata dai ceppi di antichi alberi-diga.',
        en: 'A tall hill in the Riverlands, crowned by the stumps of ancient weirwoods.',
      },
      visual: { art: 'high-heart', tint: 'sand' },
    },
    // Books only. Arya IV (site chapter 166), the outlaws stop at Lady
    // Smallwood's castle. The show names Acorn Hall in season 1 and never
    // sets a scene there; episode 23 orders it.
    {
      id: 'acorn-hall',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 23,
      revealedAtChapter: 166,
      name: { it: 'Sala delle Ghiande', en: 'Acorn Hall' },
      summary: {
        it: 'Un castello nelle Terre dei Fiumi, la sede di Casa Smallwood.',
        en: 'A castle in the Riverlands, the seat of House Smallwood.',
      },
      visual: { art: 'acorn-hall', tint: 'ocher' },
    },
    // Books only. Arya IV (site chapter 166), A Wiki of Ice and Fire's
    // chapter page listing it among the places mentioned; Arya V (173), a
    // dated step, has the outlaws spend the night in the town. The show never
    // goes there; episode 23 orders it.
    {
      id: 'stoney-sept',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 23,
      revealedAtChapter: 166,
      name: { it: 'Tempio di Pietra', en: 'Stoney Sept' },
      summary: {
        it: 'Una città nelle Terre dei Fiumi.',
        en: 'A town in the Riverlands.',
      },
      visual: { art: 'stoney-sept', tint: 'orange' },
    },
    // Books only. Arya VI (site chapter 178), Arya is brought blindfolded to
    // the brotherhood's hidden base. The show's brotherhood holds its trial
    // in a cave it never names ("And Now His Watch Is Ended"); episode 24
    // orders it.
    {
      id: 'hollow-hill',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 24,
      revealedAtChapter: 178,
      name: { it: 'la collina cava', en: 'the hollow hill' },
      summary: {
        it: 'Una collina delle Terre dei Fiumi con delle grotte sotto, il rifugio segreto della fratellanza senza vessilli.',
        en: 'A hill in the Riverlands with caves beneath it, the hidden base of the brotherhood without banners.',
      },
      visual: { art: 'hollow-hill', tint: 'flamingo' },
    },
    // Books only. Bran III (site chapter 184), Bran's party reaches the
    // village and spends the night in the tower. The show's tower in "The
    // Rains of Castamere" is never named; episode 29 orders it.
    {
      id: 'queenscrown',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 29,
      revealedAtChapter: 184,
      name: { it: 'Corona della Regina', en: 'Queenscrown' },
      summary: {
        it: 'Un villaggio abbandonato sulla riva di un lago a sud della Barriera, con una torre su un’isola.',
        en: 'An empty village on a lake south of the Wall, with a tower on an island.',
      },
      visual: { art: 'queenscrown', tint: 'yellow' },
    },
    // Books only. Catelyn V (site chapter 189), Robb's host stops at the
    // ruins on the way to the Twins. The show never goes there; episode 29
    // orders it.
    {
      id: 'oldstones',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 29,
      revealedAtChapter: 189,
      name: { it: 'Vecchie Pietre', en: 'Oldstones' },
      summary: {
        it: 'Le rovine di un antico castello su una collina, nelle Terre dei Fiumi.',
        en: 'The ruins of an old castle on a hill, in the Riverlands.',
      },
      visual: { art: 'oldstones', tint: 'violet' },
    },
    // Books only. Arya IX (site chapter 191), the Hound brings Arya to the
    // flooded town to cross the Trident. The show names the town only in
    // season 7; episode 29, where the Hound takes Arya to the Twins, orders
    // it.
    {
      id: 'lord-harroways-town',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 29,
      revealedAtChapter: 191,
      name: { it: 'Città di Lord Harroway', en: 'Lord Harroway’s Town' },
      summary: {
        it: 'Un borgo sul Tridente, nelle Terre dei Fiumi.',
        en: 'A town on the Trident, in the Riverlands.',
      },
      visual: { art: 'lord-harroways-town', tint: 'teal' },
    },
    // Named only. Show: "Second Sons", Mero hands out three coins, one each
    // from Volantis, Meereen and Braavos (synopsis; the line is not quoted).
    // Books: Daenerys I (site chapter 152), A Wiki of Ice and Fire's chapter
    // page listing it among the places mentioned.
    {
      id: 'meereen',
      kind: 'place',
      revealedAtEpisode: 28,
      revealedAtChapter: 152,
      name: { it: 'Meereen', en: 'Meereen' },
      summary: { it: 'Una città di Essos.', en: 'A city in Essos.' },
      visual: { art: 'meereen', tint: 'pink' },
    },
    // Named only. Show: "Kissed by Fire", Robb: "Rickard Karstark, Lord of
    // Karhold". Books: Bran I (site chapter 153), Bran thinks of castles he
    // could go to, Karhold among them.
    {
      id: 'karhold',
      kind: 'place',
      revealedAtEpisode: 25,
      revealedAtChapter: 153,
      name: { it: 'Karhold', en: 'Karhold' },
      summary: { it: 'Un castello del Nord.', en: 'A castle in the North.' },
      visual: { art: 'karhold', tint: 'ice' },
    },
    // Named only. Show: "The Climb", Theon guesses "Last Hearth?" when asked
    // where he is held. Books: Jon I (site chapter 151), A Wiki of Ice and
    // Fire's chapter page listing it among the places mentioned; Bran I
    // (153) has Bran think of it too.
    {
      id: 'last-hearth',
      kind: 'place',
      // The show names it in episode 4 (the Game of Thrones Wiki's place
      // page cites GOT104), so the Umbers' season-1 texts may name it.
      nameSaidAt: 4,
      revealedAtEpisode: 26,
      revealedAtChapter: 151,
      name: { it: 'Ultimo Focolare', en: 'Last Hearth' },
      summary: { it: 'Un castello del Nord.', en: 'A castle in the North.' },
      visual: { art: 'last-hearth', tint: 'green' },
    },
    // Named only. Show: "And Now His Watch Is Ended", the Hound points out
    // that he was not at Mummer's Ford. Books: Arya III (site chapter 161),
    // A Wiki of Ice and Fire's chapter page listing it among the places
    // mentioned.
    {
      id: 'mummers-ford',
      kind: 'place',
      revealedAtEpisode: 24,
      revealedAtChapter: 161,
      name: { it: 'Mummer’s Ford', en: 'Mummer’s Ford' },
      summary: {
        it: 'Un guado nelle Terre dei Fiumi.',
        en: 'A ford in the Riverlands.',
      },
      visual: { art: 'mummers-ford', tint: 'azure' },
    },
    // Named only. Show: "Kissed by Fire", Jon tells Orell that the Watch
    // still mans Castle Black, Eastwatch and the Shadow Tower. Books: the
    // prologue (site chapter 144), A Wiki of Ice and Fire's chapter page
    // listing it among the places mentioned.
    {
      id: 'shadow-tower',
      kind: 'place',
      // "The Ghost of Harrenhal" (episode 15) has Qhorin Halfhand lead his
      // men north from the Shadow Tower (the Game of Thrones Wiki's Qhorin
      // page cites GOT205), so season 2's texts may name it.
      nameSaidAt: 15,
      revealedAtEpisode: 25,
      revealedAtChapter: 144,
      name: { it: 'Torre delle Ombre', en: 'the Shadow Tower' },
      summary: {
        it: 'Uno dei castelli dei Guardiani della Notte sulla Barriera.',
        en: 'One of the Night’s Watch’s castles on the Wall.',
      },
      visual: { art: 'shadow-tower', tint: 'blue' },
    },
    // Named only. Show: "The Rains of Castamere", whose Appearances page
    // lists it among the places mentioned; the line is not quoted. Books:
    // Jon IV (site chapter 174), A Wiki of Ice and Fire's chapter page
    // listing it among the places mentioned.
    {
      id: 'bay-of-seals',
      kind: 'place',
      revealedAtEpisode: 29,
      revealedAtChapter: 174,
      name: { it: 'Baia delle Foche', en: 'the Bay of Seals' },
      summary: {
        it: 'Una baia sulla costa del Nord.',
        en: 'A bay on the coast of the North.',
      },
      visual: { art: 'bay-of-seals', tint: 'teal' },
    },
    // Named only. Show: "Second Sons", Cersei asks Margaery, "So you know the
    // story of House Reyne of Castamere?". Books: Tyrion III (site chapter
    // 163), A Wiki of Ice and Fire's chapter page listing it among the places
    // mentioned.
    {
      id: 'castamere',
      kind: 'place',
      revealedAtEpisode: 28,
      revealedAtChapter: 163,
      name: { it: 'Castamere', en: 'Castamere' },
      summary: {
        it: 'Un castello nelle Terre dell’Ovest.',
        en: 'A castle in the Westerlands.',
      },
      visual: { art: 'castamere', tint: 'lavender' },
    },
  ],
}

/**
 * The log entry of every season-3 place, by the place's id, in its own words
 * (`../placeWords`), as `SEASON_2_PLACES` has season 2's (#1630).
 * `filedHere` names the characters first met there; where the two media
 * meet one at different places, the show's place has them, and the book's
 * when the show's is not filed (a road or a camp). A cast group filed later
 * adds its own characters here.
 */
export const SEASON_3_PLACES: Record<
  string,
  PlaceDossier<ThronesVocabulary>
> = {
  'astapor': {
    form: 'city',
    region: 'essos',
    landmark: {
      it: 'Piramidi a gradoni di mattoni rossi sopra le mura sul mare',
      en: 'Stepped pyramids of red brick above the walls on the sea',
    },
    log: {
      it: 'Daenerys Targaryen fa vela verso la città in cerca di un esercito: qui si comprano gli Immacolati, soldati schiavi addestrati fin da bambini a obbedire.',
      en: 'Daenerys Targaryen sails for the city looking for an army: the Unsullied are bought here, slave soldiers trained from boyhood to obey.',
    },
    filedHere: ['missandei', 'kraznys-mo-nakloz'],
    // "And Now His Watch Is Ended" and Daenerys III (site chapter 171): the
    // deal and the sack in the same episode and chapter.
    visits: [
      {
        episode: 24,
        chapter: 171,
        value: {
          it: 'Daenerys cede uno dei suoi draghi nell’accordo per tutti gli Immacolati. Appena concluso l’accordo, ordina loro di uccidere i padroni della città, e il drago brucia lo schiavista che glieli ha venduti.',
          en: 'Daenerys gives one of her dragons in the deal for all the Unsullied. As soon as the deal is done she orders them to kill the city’s masters, and the dragon burns the slaver who sold them to her.',
        },
      },
    ],
  },
  'yunkai': {
    form: 'city',
    region: 'essos',
    landmark: {
      it: 'Mura e un grande portone, con una piramide alle spalle',
      en: 'Walls and a great gate, with a pyramid behind them',
    },
    log: {
      it: 'È una delle città di schiavisti della Baia degli Schiavisti.',
      en: 'It is one of the slaver cities of Slaver’s Bay.',
    },
    filedHere: [
      'grey-worm',
      'grazdan-mo-eraz',
      'mero',
      'daario-naharis',
      'prendahl-na-ghezn',
    ],
    // Daenerys IV (site chapter 186) brings the army to the walls, where a
    // master offers gold ("The Bear and the Maiden Fair", the place's own
    // episode), and takes the city that night ("The Rains of Castamere").
    // The show's siege and fall run past the place's episode, so one step at
    // 29 / 186 carries both.
    visits: [
      {
        episode: 29,
        chapter: 186,
        value: {
          it: 'Daenerys porta il suo esercito sotto le mura e rifiuta l’oro che uno dei padroni le offre perché se ne vada. Poi le sue forze prendono la città con un attacco notturno.',
          en: 'Daenerys brings her army to the walls and refuses the gold one of the masters offers her to go away. Then her forces take the city in a night attack.',
        },
      },
    ],
  },
  'nightfort': {
    form: 'castle',
    region: 'the-north',
    landmark: {
      it: 'Torri in rovina ai piedi della Barriera',
      en: 'Ruined towers below the Wall',
    },
    log: {
      it: 'È uno dei castelli che i Guardiani della Notte hanno abbandonato lungo la Barriera.',
      en: 'It is one of the castles along the Wall that the Night’s Watch has abandoned.',
    },
    filedHere: [],
    // "Mhysa" (episode 30) sets Bran's party there; the books do the same in
    // Bran IV (A Storm of Swords 56, site chapter 200), past the stage (#852).
    visits: [
      {
        episode: 30,
        chapter: 200,
        value: {
          it: 'Bran Stark e i suoi compagni passano la notte tra le rovine, sulla strada per oltrepassare la Barriera, e Bran racconta la storia del Cuoco Ratto.',
          en: 'Bran Stark and his companions spend the night in the ruins on their way through the Wall, and Bran tells the tale of the Rat Cook.',
        },
      },
    ],
  },
  'inn-of-the-kneeling-man': {
    form: 'inn',
    region: 'the-riverlands',
    landmark: {
      it: 'Una locanda lungo la strada, con una stalla accanto',
      en: 'An inn by the road, with a stable at its side',
    },
    log: {
      it: 'Jaime Lannister, Brienne di Tarth e Cleos Frey si fermano qui lungo la strada per il sud, poi riprendono il viaggio.',
      en: 'Jaime Lannister, Brienne of Tarth and Cleos Frey stop here on the road south, then go on their way.',
    },
    filedHere: [],
  },
  'milkwater': {
    form: 'river',
    region: 'beyond-the-wall',
    landmark: {
      it: 'Un fiume chiaro tra montagne innevate',
      en: 'A pale river between snowy mountains',
    },
    log: {
      it: 'Il grande esercito di bruti di Mance Rayder scende lungo il fiume. Dei confratelli dei Guardiani della Notte vanno a caccia sulle sue rive.',
      en: 'Mance Rayder’s great host of wildlings is coming down the river. Brothers of the Night’s Watch hunt along its banks.',
    },
    // Jon I (site chapter 151); episode 22 orders it, after the place's own.
    visits: [
      {
        episode: 22,
        chapter: 151,
        value: {
          it: 'Il grande accampamento dei bruti di Mance Rayder si stende lungo le sue rive. Jon Snow viene portato qui davanti a lui.',
          en: 'Mance Rayder’s great camp of wildlings stretches along its banks. Jon Snow is brought before him here.',
        },
      },
    ],
    // Mance's host (#1638): the show's camp in the Frostfangs is not filed,
    // so they are filed at the book's, Jon I (site chapter 151).
    filedHere: [
      'mance-rayder',
      'tormund',
      'orell',
      'styr',
      'dalla',
      'val',
      'jarl',
    ],
  },
  'maidenpool': {
    form: 'town',
    region: 'the-riverlands',
    landmark: {
      it: 'Un castello su una collina sopra le case e uno stagno',
      en: 'A castle on a hill above houses and a pool',
    },
    log: {
      it: 'Si trova seguendo il Tridente verso valle, sulla via da Delta delle Acque ad Approdo del Re.',
      en: 'It lies down the Trident, on the way from Riverrun to King’s Landing.',
    },
    filedHere: [],
    // Jaime III (site chapter 165); episode 23 orders it.
    visits: [
      {
        episode: 23,
        chapter: 165,
        value: {
          it: 'Jaime Lannister e Brienne di Tarth lo attraversano diretti ad Approdo del Re, e lo trovano saccheggiato e senza più nessuno.',
          en: 'Jaime Lannister and Brienne of Tarth ride through it on their way to King’s Landing, and find it sacked and empty.',
        },
      },
    ],
  },
  'high-heart': {
    form: 'hill',
    region: 'the-riverlands',
    landmark: {
      it: 'Un cerchio di ceppi bianchi in cima a una collina',
      en: 'A ring of white stumps on top of a hill',
    },
    log: {
      it: 'Era una collina sacra ai figli della foresta. I fuorilegge che tengono con sé Arya Stark vi si fermano, e una vecchia che dorme tra i ceppi racconta loro i suoi sogni.',
      en: 'The hill was sacred to the children of the forest. The outlaws who have Arya Stark with them stop there, and an old woman who sleeps among the stumps tells them her dreams.',
    },
    filedHere: [],
  },
  'acorn-hall': {
    form: 'castle',
    region: 'the-riverlands',
    landmark: {
      it: 'Una sala dietro un muro basso, accanto a una grande quercia',
      en: 'A hall behind a low wall, beside a great oak',
    },
    log: {
      it: 'I fuorilegge portano qui Arya Stark, e Lady Smallwood li accoglie. Dà ad Arya un vestito, e quando lei lo strappa le dà gli abiti di suo figlio morto.',
      en: 'The outlaws bring Arya Stark here, and Lady Smallwood takes them in. She gives Arya a gown, and when Arya tears it, the clothes of her dead son.',
    },
    filedHere: [],
  },
  'stoney-sept': {
    form: 'town',
    region: 'the-riverlands',
    landmark: {
      it: 'Mura attorno a un tempio con le sue campane',
      en: 'Walls around a sept and its bells',
    },
    log: {
      it: 'È una città delle Terre dei Fiumi.',
      en: 'It is a town in the Riverlands.',
    },
    filedHere: [],
    // Arya V (site chapter 173); episode 24 orders it.
    visits: [
      {
        episode: 24,
        chapter: 173,
        value: {
          it: 'I fuorilegge vi passano la notte con Arya Stark, e Harwin le racconta che durante la ribellione di Robert suo padre vinse qui la Battaglia delle Campane, per le strade. Nella notte il Cacciatore Pazzo porta in città un prigioniero in catene.',
          en: 'The outlaws spend the night here with Arya Stark, and Harwin tells her that her father won the Battle of the Bells in its streets during Robert’s Rebellion. In the night the Mad Huntsman brings a prisoner into the town in chains.',
        },
      },
    ],
  },
  'hollow-hill': {
    form: 'hill',
    region: 'the-riverlands',
    landmark: {
      it: 'L’ingresso di una grotta tra le radici, con un fuoco dentro',
      en: 'A cave mouth among roots, with a fire inside',
    },
    log: {
      it: 'Arya Stark viene portata qui bendata. Nella grotta sotto la collina Beric Dondarrion e Thoros di Myr giudicano il Mastino, e Beric lo affronta in un processo per combattimento.',
      en: 'Arya Stark is brought here blindfolded. In the cave under the hill, Beric Dondarrion and Thoros of Myr judge the Hound, and Beric fights him in a trial by combat.',
    },
    filedHere: [],
  },
  'queenscrown': {
    form: 'ruin',
    region: 'the-north',
    landmark: {
      it: 'Una torre su un’isola in mezzo a un lago',
      en: 'A tower on an island in a lake',
    },
    log: {
      it: 'Si racconta che la regina Alysanne abbia dormito nella torre. Bran Stark e i suoi compagni vi si riparano durante un temporale, mentre degli uomini arrivano al villaggio sulla riva.',
      en: 'Queen Alysanne once stayed in the tower, the story goes. Bran Stark and his companions shelter in it during a storm, while men come to the village on the shore.',
    },
    filedHere: [],
  },
  'oldstones': {
    form: 'ruin',
    region: 'the-riverlands',
    landmark: {
      it: 'Muri spezzati e un arco su una collina',
      en: 'Broken walls and an arch on a hill',
    },
    log: {
      it: 'Era una sede degli antichi re dei fiumi e delle colline. Robb Stark si ferma tra le rovine diretto alle Torri Gemelle, e dice a sua madre chi intende nominare suo erede.',
      en: 'It was once a seat of the old kings of the rivers and the hills. Robb Stark stops among the ruins on his way to the Twins, and tells his mother whom he means to name as his heir.',
    },
    filedHere: [],
  },
  'lord-harroways-town': {
    form: 'town',
    region: 'the-riverlands',
    landmark: {
      it: 'Case nell’acqua di un fiume in piena, e un traghetto',
      en: 'Houses in a flooded river, and a ferry',
    },
    log: {
      it: 'Sandor Clegane porta qui Arya Stark per attraversare il Tridente, ma il borgo è allagato. Contratta con i traghettatori per farsi portare sull’altra riva.',
      en: 'Sandor Clegane brings Arya Stark here to cross the Trident, but the town is flooded. He bargains with the ferrymen to take them across.',
    },
    filedHere: [],
  },
  'meereen': {
    form: 'city',
    region: 'essos',
    landmark: {
      it: 'Mura e torri di una città lontana',
      en: 'The walls and towers of a far city',
    },
    log: { it: 'È una città di Essos.', en: 'It is a city in Essos.' },
    filedHere: [],
  },
  'karhold': {
    form: 'castle',
    region: 'the-north',
    landmark: {
      it: 'Un castello sotto uno stendardo con il sole',
      en: 'A castle under a banner with a sun',
    },
    log: { it: 'È un castello del Nord.', en: 'It is a castle in the North.' },
    filedHere: [],
  },
  'last-hearth': {
    form: 'castle',
    region: 'the-north',
    landmark: {
      it: 'Una sala con le finestre accese e il fumo dal camino',
      en: 'A hall with lit windows and smoke from its chimney',
    },
    log: { it: 'È un castello del Nord.', en: 'It is a castle in the North.' },
    filedHere: [],
  },
  'mummers-ford': {
    form: 'river',
    region: 'the-riverlands',
    landmark: {
      it: 'Un guado di pietre tra due rive con delle case',
      en: 'A ford of stones between two banks with houses',
    },
    log: {
      it: 'All’inizio della guerra gli uomini di Beric Dondarrion vi caddero in un’imboscata dei soldati Lannister.',
      en: 'Early in the war, Beric Dondarrion’s men were ambushed here by Lannister soldiers.',
    },
    filedHere: [],
  },
  'shadow-tower': {
    form: 'castle',
    region: 'the-north',
    landmark: {
      it: 'Un’alta torre davanti alla Barriera, tra le montagne',
      en: 'A tall tower before the Wall, among mountains',
    },
    log: {
      it: 'È uno dei tre castelli sulla Barriera che i Guardiani della Notte presidiano ancora, con il Castello Nero e il Forte Orientale.',
      en: 'It is one of the three castles on the Wall that the Night’s Watch still holds, with Castle Black and Eastwatch.',
    },
    filedHere: [],
  },
  'bay-of-seals': {
    form: 'bay',
    region: 'the-north',
    landmark: {
      it: 'Un’ampia baia tra alte scogliere',
      en: 'A wide bay between high cliffs',
    },
    log: {
      it: 'È una baia sulla costa del Nord.',
      en: 'It is a bay on the coast of the North.',
    },
    filedHere: [],
  },
  'castamere': {
    form: 'castle',
    region: 'the-westerlands',
    landmark: {
      it: 'Le torri di un castello su una collina',
      en: 'A castle’s towers on a hill',
    },
    log: {
      it: 'È un castello nelle Terre dell’Ovest.',
      en: 'It is a castle in the Westerlands.',
    },
    filedHere: [],
  },
}
