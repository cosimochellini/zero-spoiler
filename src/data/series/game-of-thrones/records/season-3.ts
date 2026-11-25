import type { PlaceDossier } from '~/data/types'

import type { ThronesSaga, ThronesVocabulary } from './saga'

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
    },
    'kraznys-mo-nakloz': {
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
    },
    'grey-worm': {
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
    },
    // Both media tell the log at his gate: in "The Bear and the Maiden
    // Fair" he says the Yunkai'i will enslave the survivors, Daenerys too,
    // and her dragons hiss him away (Game of Thrones Wiki, Razdal mo Eraz);
    // in Daenerys IV he threatens to sell her as a bedslave, and Drogon sets
    // his tokar alight (the same page, "In the books").
    'grazdan-mo-eraz': {
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
    },
    'mero': {
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
    },
    'daario-naharis': {
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
    },
    'prendahl-na-ghezn': {
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
      status: [{ episode: 22, chapter: 150, value: 'alive' }],
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
      status: [{ episode: 31, chapter: 182, value: 'alive' }],
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
    // #1630: the places a scene of the stage is set in, each at its first
    // scene in each medium, and the places both media name and neither
    // visits, each at its first naming in the stage, as
    // `game-of-thrones-season-3-places.md` lists them.
    // Show: "Valar Dohaeris", Daenerys's ship arrives at Astapor and Kraznys
    // shows her the Unsullied. Books: Daenerys II (site chapter 167), the
    // first chapter set in the city; Daenerys I (152) names it as the ship's
    // destination.
    {
      id: 'astapor',
      kind: 'place',
      // The show names Astapor in "The Prince of Winterfell" (episode 18),
      // where Jorah finds Daenerys a ship (#1476's inventory), which
      // Daenerys's and Jorah's season-2 stories tell.
      nameSaidAt: 18,
      revealedAtEpisode: 21,
      revealedAtChapter: 167,
      name: { it: 'Astapor', en: 'Astapor' },
      summary: {
        it: 'Una città sulla costa della Baia degli Schiavisti, in Essos, dove gli schiavisti addestrano e vendono gli Immacolati.',
        en: 'A city on the coast of Slaver’s Bay, in Essos, where slavers train and sell the Unsullied.',
      },
      visual: { art: 'astapor', tint: 'vermilion' },
    },
    // Show: "The Bear and the Maiden Fair", Daenerys's army marches on Yunkai
    // and she receives its envoy before the walls. Books: Daenerys IV (site
    // chapter 186), the army reaches the city.
    {
      id: 'yunkai',
      kind: 'place',
      revealedAtEpisode: 27,
      revealedAtChapter: 186,
      name: { it: 'Yunkai', en: 'Yunkai' },
      summary: {
        it: 'Una città di schiavisti sulla Baia degli Schiavisti, in Essos.',
        en: 'A slaver city on Slaver’s Bay, in Essos.',
      },
      visual: { art: 'yunkai', tint: 'yellow' },
    },
    // Show: "Mhysa", Bran's party shelters in the abandoned castle, which Sam
    // names to Gilly in "The Rains of Castamere". Books: never visited in the
    // stage (Bran IV, site chapter 200, is the next stage's); Jon III (site
    // chapter 170) names it, A Wiki of Ice and Fire's chapter page listing it
    // among the places mentioned (#1252).
    {
      id: 'nightfort',
      kind: 'place',
      revealedAtEpisode: 30,
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
    // Books only. Jon I (site chapter 151), Jon meets Mance Rayder in the
    // wildlings' camp along the river, which the prologue (144) names. The
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
      revealedAtChapter: 151,
      name: { it: 'Fiumelatte', en: 'the Milkwater' },
      summary: {
        it: 'Un fiume oltre la Barriera, che scende dalle montagne.',
        en: 'A river beyond the Wall, running down out of the mountains.',
      },
      visual: { art: 'milkwater', tint: 'cyan' },
    },
    // Books only. Jaime III (site chapter 165), Brienne and Jaime ride
    // through the town and find it sacked and empty. Season 3 neither visits
    // nor names it; episode 23, where Jaime's captors take him, orders it.
    {
      id: 'maidenpool',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 23,
      revealedAtChapter: 165,
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
    // Books only. Arya V (site chapter 173), the outlaws spend the night in
    // the town. The show never goes there; episode 24, where the Hound is
    // brought before the brotherhood, orders it.
    {
      id: 'stoney-sept',
      kind: 'place',
      source: 'chapter',
      revealedAtEpisode: 24,
      revealedAtChapter: 173,
      name: { it: 'Tempio di Pietra', en: 'Stoney Sept' },
      summary: {
        it: 'Una città cinta da mura nelle Terre dei Fiumi.',
        en: 'A walled town in the Riverlands.',
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
      it: 'Daenerys Targaryen arriva qui in cerca di un esercito. I padroni della città le mostrano gli Immacolati, soldati schiavi addestrati fin da bambini a obbedire, e le propongono di venderglieli.',
      en: 'Daenerys Targaryen comes here looking for an army. The city’s masters show her the Unsullied, slave soldiers trained from boyhood to obey, and offer to sell them to her.',
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
      it: 'Daenerys Targaryen porta il suo esercito sotto le mura della città. I padroni hanno assoldato dei mercenari per difenderla, e uno di loro viene a offrirle dell’oro perché se ne vada. Lei lo rimanda indietro.',
      en: 'Daenerys Targaryen brings her army to the city’s walls. Its masters have hired sellswords to defend it, and one of them comes to offer her gold to go away. She sends him back.',
    },
    filedHere: [
      'grey-worm',
      'grazdan-mo-eraz',
      'mero',
      'daario-naharis',
      'prendahl-na-ghezn',
    ],
    // "The Rains of Castamere" takes the city by night. Daenerys IV (site
    // chapter 186), the chapter the place opens in, tells the same night,
    // so the visit waits for the next chapter.
    visits: [
      {
        episode: 29,
        chapter: 187,
        value: {
          it: 'Le forze di Daenerys prendono la città con un attacco notturno.',
          en: 'Daenerys’s forces take the city in a night attack.',
        },
      },
    ],
  },
  'nightfort': {
    form: 'castle',
    region: 'the-north',
    landmark: {
      it: 'Torri in rovina ai piedi della Barriera, attorno a un pozzo',
      en: 'Ruined towers below the Wall, around a well',
    },
    log: {
      it: 'È uno dei castelli che i Guardiani della Notte hanno abbandonato lungo la Barriera.',
      en: 'It is one of the castles along the Wall that the Night’s Watch has abandoned.',
    },
    filedHere: [],
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
      it: 'Il grande accampamento dei bruti di Mance Rayder si stende lungo le sue rive. Jon Snow viene portato qui davanti a lui.',
      en: 'Mance Rayder’s great camp of wildlings stretches along its banks. Jon Snow is brought before him here.',
    },
    filedHere: [],
  },
  'maidenpool': {
    form: 'town',
    region: 'the-riverlands',
    landmark: {
      it: 'Case senza tetto sotto un castello, e uno stagno',
      en: 'Roofless houses below a castle, and a pool',
    },
    log: {
      it: 'Jaime Lannister e Brienne di Tarth lo attraversano diretti ad Approdo del Re, e lo trovano saccheggiato e senza più nessuno.',
      en: 'Jaime Lannister and Brienne of Tarth ride through it on their way to King’s Landing, and find it sacked and empty.',
    },
    filedHere: [],
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
      it: 'Durante la ribellione di Robert, Eddard Stark vinse qui la Battaglia delle Campane, combattuta per le strade. I fuorilegge vi passano la notte con Arya Stark, e vedono il Cacciatore Pazzo portare in città un prigioniero in catene.',
      en: 'In Robert’s Rebellion, Eddard Stark won the Battle of the Bells here, fought in its streets. The outlaws spend the night here with Arya Stark, and see the Mad Huntsman bring a prisoner into the town in chains.',
    },
    filedHere: [],
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
      it: 'Una grande piramide sormontata da un’arpia',
      en: 'A great pyramid crowned with a harpy',
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
    form: 'town',
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
      it: 'Foche sugli scogli tra le scogliere',
      en: 'Seals on the rocks between cliffs',
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
      it: 'Torri di un castello sotto la pioggia',
      en: 'A castle’s towers in the rain',
    },
    log: {
      it: 'È un castello nelle Terre dell’Ovest.',
      en: 'It is a castle in the Westerlands.',
    },
    filedHere: [],
  },
}
