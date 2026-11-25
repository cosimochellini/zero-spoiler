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
    // #1637: Jaime, Brienne and Harrenhal.
    'qyburn': {
      role: { it: 'Guaritore a Harrenhal', en: 'Healer at Harrenhal' },
      log: {
        it: 'Si è formato come maestro e sa curare le ferite. Si trova a Harrenhal mentre il castello è in mano agli uomini del Nord.',
        en: 'He trained as a maester and knows how to treat wounds. He is at Harrenhal while the northmen hold the castle.',
      },
      status: [{ episode: 21, chapter: 175, value: 'alive' }],
      affiliation: [
        // Show only: the northmen find him alive among the prisoners Ser
        // Gregor's men put to the sword, and he names himself to Robb, in
        // "Valar Dohaeris" (episode 21).
        {
          episode: 21,
          chapter: 175,
          source: 'episode',
          value: { it: 'Nessuna fedeltà', en: 'No allegiance' },
        },
        // Books only: one of Vargo Hoat's sellswords, who serve Roose Bolton
        // at Harrenhal when the Goat brings Jaime in, in Jaime IV (chapter
        // 175). Episode 21 only orders it.
        {
          episode: 21,
          chapter: 175,
          source: 'chapter',
          value: {
            it: 'Bravi Camerati, al servizio di Roose Bolton',
            en: 'Brave Companions, in Roose Bolton’s service',
          },
        },
        // Show only: he stays at Harrenhal when Robb leaves Roose Bolton in
        // command there, and Lord Bolton has him treat Jaime's stump, in
        // "Kissed by Fire" (episode 25).
        {
          episode: 25,
          chapter: 175,
          source: 'episode',
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
    // #1637: Jaime, Brienne and Harrenhal.
    //
    // Show: "Valar Dohaeris" (episode 21), the northmen find him alive at
    // Harrenhal and he names himself to Robb. Books: Jaime IV (site chapter
    // 175), Roose Bolton has Qyburn clean and bind Jaime's stump.
    {
      id: 'qyburn',
      kind: 'character',
      revealedAtEpisode: 21,
      revealedAtChapter: 175,
      name: { it: 'Qyburn', en: 'Qyburn' },
      summary: {
        it: 'Un guaritore formatosi come maestro, a Harrenhal.',
        en: 'A healer trained as a maester, at Harrenhal.',
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
  ],
}

/**
 * The log entry of every season-3 place, by the place's id, in its own words
 * (`../placeWords`), as `SEASON_2_PLACES` has season 2's. Empty until the
 * stage's places are filed.
 */
export const SEASON_3_PLACES: Record<
  string,
  PlaceDossier<ThronesVocabulary>
> = {}
