/**
 * Which wiki page settles each Game of Thrones chronicle story, and what was
 * read there (#1360). Keyed by character id and then by `episode:chapter`;
 * where a character tells the same pair twice, once per medium, the two use
 * `episode:source` keys so each medium cites its own evidence. Show facts come
 * from the Game of Thrones Wiki, book facts from the Ice and Fire Wiki and the
 * book notes on the Game of Thrones Wiki. The Ice and Fire Wiki has chapter
 * pages only up to site chapter 33, so a book pin past it rests on the
 * episode page's list of the chapters it adapts and on the reviewed pins of
 * `season-1.relationships.ts`; the note says so. Of *A Clash of Kings* it has
 * a few chapter pages (the prologue, Arya I and Sansa I among them, #1456);
 * the rest are A Wiki of Ice and Fire's, read only through the Firecrawl tool.
 * Of *A Storm of Swords* it has none (#1627): every chapter page is A Wiki of
 * Ice and Fire's, cached in the main checkout's `.gate/firecrawl/`.
 */

const SHOW = 'https://gameofthrones.fandom.com/wiki/'
const BOOKS = 'https://iceandfire.fandom.com/wiki/'
const AWOIAF = 'https://awoiaf.westeros.org/index.php/'

const EPISODE_1 = `${SHOW}Winter_Is_Coming`
const EPISODE_2 = `${SHOW}The_Kingsroad`
const EPISODE_3 = `${SHOW}Lord_Snow`
const EPISODE_4 = `${SHOW}Cripples,_Bastards,_and_Broken_Things`
const EPISODE_5 = `${SHOW}The_Wolf_and_the_Lion`
const EPISODE_6 = `${SHOW}A_Golden_Crown`
const EPISODE_7 = `${SHOW}You_Win_or_You_Die`
const EPISODE_8 = `${SHOW}The_Pointy_End`
const EPISODE_9 = `${SHOW}Baelor`
const EPISODE_10 = `${SHOW}Fire_and_Blood`
// Season 2 (#1456). Episode 14's page carries "(episode)": the bare title is
// the place outside Qarth.
const EPISODE_11 = `${SHOW}The_North_Remembers`
const EPISODE_12 = `${SHOW}The_Night_Lands`
const EPISODE_13 = `${SHOW}What_Is_Dead_May_Never_Die`
const EPISODE_14 = `${SHOW}Garden_of_Bones_(episode)`
const EPISODE_15 = `${SHOW}The_Ghost_of_Harrenhal`
const EPISODE_16 = `${SHOW}The_Old_Gods_and_the_New`
const EPISODE_17 = `${SHOW}A_Man_Without_Honor`
const EPISODE_18 = `${SHOW}The_Prince_of_Winterfell`
const EPISODE_19 = `${SHOW}Blackwater`
const EPISODE_20 = `${SHOW}Valar_Morghulis`
// Season 3 (#1627). Episodes 23, 27, 28 and 29 carry "(episode)": their bare
// titles are a place, a song, a sellsword company and a song.
/* eslint-disable @typescript-eslint/no-unused-vars -- cited by the season-3 chronicles of #1633 */
const EPISODE_21 = `${SHOW}Valar_Dohaeris`
const EPISODE_22 = `${SHOW}Dark_Wings,_Dark_Words`
const EPISODE_23 = `${SHOW}Walk_of_Punishment_(episode)`
const EPISODE_24 = `${SHOW}And_Now_His_Watch_Is_Ended`
const EPISODE_25 = `${SHOW}Kissed_by_Fire`
const EPISODE_26 = `${SHOW}The_Climb`
const EPISODE_27 = `${SHOW}The_Bear_and_the_Maiden_Fair_(episode)`
const EPISODE_28 = `${SHOW}Second_Sons_(episode)`
const EPISODE_29 = `${SHOW}The_Rains_of_Castamere_(episode)`
const EPISODE_30 = `${SHOW}Mhysa`
/* eslint-enable @typescript-eslint/no-unused-vars -- back on after the season-3 episodes */
const DANY_I = `${BOOKS}Daenerys_I_-_A_Game_of_Thrones`
const DANY_II = `${BOOKS}Daenerys_II_-_A_Game_of_Thrones`
const DANY_III = `${BOOKS}Daenerys_III_-_A_Game_of_Thrones`
const EDDARD_I = `${BOOKS}Eddard_I_-_A_Game_of_Thrones`
const JON_I = `${BOOKS}Jon_I_-_A_Game_of_Thrones`
const ARYA_I = `${BOOKS}Arya_I_-_A_Game_of_Thrones`
const BRAN_II = `${BOOKS}Bran_II_-_A_Game_of_Thrones`
const TYRION_I = `${BOOKS}Tyrion_I_-_A_Game_of_Thrones`
const SANSA_I = `${BOOKS}Sansa_I_-_A_Game_of_Thrones`
const EDDARD_III = `${BOOKS}Eddard_III_-_A_Game_of_Thrones`
const EDDARD_IV = `${BOOKS}Eddard_IV_-_A_Game_of_Thrones`
const SANSA_II = `${BOOKS}Sansa_II_-_A_Game_of_Thrones`
const EDDARD_VII = `${BOOKS}Eddard_VII_-_A_Game_of_Thrones`
const EDDARD_VIII = `${AWOIAF}A_Game_of_Thrones-Chapter_33`
const EDDARD_X = `${AWOIAF}A_Game_of_Thrones-Chapter_39`
const EDDARD_XII = `${AWOIAF}A_Game_of_Thrones-Chapter_45`
const EDDARD_XIII = `${AWOIAF}A_Game_of_Thrones-Chapter_47`
const EDDARD_XIV = `${AWOIAF}A_Game_of_Thrones-Chapter_49`
const CATELYN_IV = `${BOOKS}Catelyn_IV_-_A_Game_of_Thrones`
const ARYA_II = `${BOOKS}Arya_II_-_A_Game_of_Thrones`
const EDDARD_V = `${BOOKS}Eddard_V_-_A_Game_of_Thrones`
const CATELYN_V = `${BOOKS}Catelyn_V_-_A_Game_of_Thrones`

// The Night’s Watch cast (#1363): its book chapters on the Ice and Fire Wiki
// up to site 27, and on A Wiki of Ice and Fire past it.
const WALL_AWOIAF =
  'https://awoiaf.westeros.org/index.php/A_Game_of_Thrones-Chapter_'
const WALL_PROLOGUE = `${BOOKS}Prologue_-_A_Game_of_Thrones`
const WALL_BRAN_I = `${BOOKS}Bran_I_-_A_Game_of_Thrones`
const WALL_JON_I = `${BOOKS}Jon_I_-_A_Game_of_Thrones`
const WALL_JON_II = `${BOOKS}Jon_II_-_A_Game_of_Thrones`
const WALL_TYRION_II = `${BOOKS}Tyrion_II_-_A_Game_of_Thrones`
const WALL_JON_III = `${BOOKS}Jon_III_-_A_Game_of_Thrones`
const WALL_TYRION_III = `${BOOKS}Tyrion_III_-_A_Game_of_Thrones`
const WALL_JON_IV = `${BOOKS}Jon_IV_-_A_Game_of_Thrones`
const WALL_AGOT_41 = `${WALL_AWOIAF}41`
const WALL_AGOT_48 = `${WALL_AWOIAF}48`
const WALL_AGOT_52 = `${WALL_AWOIAF}52`
const WALL_AGOT_60 = `${WALL_AWOIAF}60`
const WALL_AGOT_70 = `${WALL_AWOIAF}70`

// A Clash of Kings (#1456). An Ice and Fire Wiki chapter page is
// `${BOOKS}<POV>_<numeral>_-_A_Clash_of_Kings`, its `chapter_number` counting
// the prologue as 1, so the site chapter is 73 + chapter_number. A Wiki of Ice
// and Fire's page is `${ACOK_AWOIAF}N`, N counting from the chapter after the
// prologue, so the site chapter is 74 + N; the prologue is site chapter 74.
/* eslint-disable @typescript-eslint/no-unused-vars -- cited by the season-2 chronicles of #1462 */
const ACOK_PROLOGUE = `${BOOKS}Prologue_-_A_Clash_of_Kings`
const ACOK_AWOIAF = `${AWOIAF}A_Clash_of_Kings-Chapter_`
/* eslint-enable @typescript-eslint/no-unused-vars -- back on after the A Clash of Kings pattern */
// A Storm of Swords (#1627). The Ice and Fire Wiki has no chapter page of
// it. A Wiki of Ice and Fire's page is `${ASOS_AWOIAF}N`, N counting from the
// chapter after the prologue, so the site chapter is 144 + N; the prologue
// is site chapter 144. The third stage ends at chapter 52, Arya XI (site 196).
/* eslint-disable @typescript-eslint/no-unused-vars -- cited by the season-3 chronicles of #1633 */
const ASOS_PROLOGUE = `${AWOIAF}A_Storm_of_Swords-Prologue`
const ASOS_AWOIAF = `${AWOIAF}A_Storm_of_Swords-Chapter_`
/* eslint-enable @typescript-eslint/no-unused-vars -- back on after the A Storm of Swords pattern */
// The Essos and Qarth cast of the second stage (#1478): Daenerys I to V of
// A Clash of Kings, site chapters 86, 101, 114, 122 and 137.
const ACOK_12 = `${ACOK_AWOIAF}12`
const ACOK_27 = `${ACOK_AWOIAF}27`
const ACOK_40 = `${ACOK_AWOIAF}40`
const ACOK_48 = `${ACOK_AWOIAF}48`
const ACOK_63 = `${ACOK_AWOIAF}63`
// The Stannis, Renly and stormlands cast of the second stage (#1485): the
// prologue, Davos I to III and the Catelyn, Tyrion and Sansa chapters they
// cross, by site chapter, and the Matthos Seaworth page.
const ST_74 = `${AWOIAF}A_Clash_of_Kings-Prologue`
const ST_84 = `${ACOK_AWOIAF}10`
const ST_96 = `${ACOK_AWOIAF}22`
const ST_105 = `${ACOK_AWOIAF}31`
const ST_107 = `${ACOK_AWOIAF}33`
const ST_110 = `${ACOK_AWOIAF}36`
const ST_113 = `${ACOK_AWOIAF}39`
const ST_116 = `${ACOK_AWOIAF}42`
const ST_118 = `${ACOK_AWOIAF}44`
const ST_129 = `${ACOK_AWOIAF}55`
const ST_132 = `${ACOK_AWOIAF}58`
const ST_133 = `${ACOK_AWOIAF}59`
const ST_135 = `${ACOK_AWOIAF}61`
const ST_136 = `${ACOK_AWOIAF}62`
const ST_139 = `${ACOK_AWOIAF}65`
const ST_MATTHOS = `${AWOIAF}Matthos_Seaworth`
// The King’s Landing and Blackwater cast of the second stage (#1484):
// Tyrion I to XV and Sansa I to VIII of A Clash of Kings, by site chapter.
const KL_76 = `${ACOK_AWOIAF}2`
const KL_77 = `${ACOK_AWOIAF}3`
const KL_82 = `${ACOK_AWOIAF}8`
const KL_89 = `${ACOK_AWOIAF}15`
const KL_91 = `${ACOK_AWOIAF}17`
const KL_92 = `${ACOK_AWOIAF}18`
const KL_94 = `${ACOK_AWOIAF}20`
const KL_99 = `${ACOK_AWOIAF}25`
const KL_103 = `${ACOK_AWOIAF}29`
const KL_106 = `${ACOK_AWOIAF}32`
const KL_110 = `${ACOK_AWOIAF}36`
const KL_115 = `${ACOK_AWOIAF}41`
const KL_118 = `${ACOK_AWOIAF}44`
const KL_123 = `${ACOK_AWOIAF}49`
const KL_126 = `${ACOK_AWOIAF}52`
const KL_128 = `${ACOK_AWOIAF}54`
const KL_131 = `${ACOK_AWOIAF}57`
const KL_133 = `${ACOK_AWOIAF}59`
const KL_134 = `${ACOK_AWOIAF}60`
const KL_135 = `${ACOK_AWOIAF}61`
const KL_136 = `${ACOK_AWOIAF}62`
const KL_139 = `${ACOK_AWOIAF}65`
const KL_141 = `${ACOK_AWOIAF}67`
// The Winterfell and Iron Islands cast of the second stage (#1487): Bran I to
// VII and Theon I to VI of A Clash of Kings.
const WF_BRAN_I = `${ACOK_AWOIAF}4`
const WF_THEON_I = `${ACOK_AWOIAF}11`
const WF_BRAN_II = `${ACOK_AWOIAF}16`
const WF_BRAN_III = `${ACOK_AWOIAF}21`
const WF_THEON_II = `${ACOK_AWOIAF}24`
const WF_BRAN_IV = `${ACOK_AWOIAF}28`
const WF_BRAN_V = `${ACOK_AWOIAF}35`
const WF_THEON_III = `${ACOK_AWOIAF}37`
const WF_BRAN_VI = `${ACOK_AWOIAF}46`
const WF_THEON_IV = `${ACOK_AWOIAF}50`
const WF_THEON_V = `${ACOK_AWOIAF}56`
const WF_THEON_VI = `${ACOK_AWOIAF}66`
const WF_BRAN_VII = `${ACOK_AWOIAF}69`
// The Wall and beyond cast of the second stage (#1488): Jon I to VIII of A
// Clash of Kings, site chapters 80, 87, 97, 108, 117, 125, 127 and 142.
const WL_JON_I = `${ACOK_AWOIAF}6`
const WL_JON_II = `${ACOK_AWOIAF}13`
const WL_JON_III = `${ACOK_AWOIAF}23`
const WL_JON_IV = `${ACOK_AWOIAF}34`
const WL_JON_V = `${ACOK_AWOIAF}43`
const WL_JON_VI = `${ACOK_AWOIAF}51`
const WL_JON_VII = `${ACOK_AWOIAF}53`
const WL_JON_VIII = `${ACOK_AWOIAF}68`
// The Essos cast of the third stage (#1659): Daenerys I to IV of A Storm of
// Swords, site chapters 152, 167, 171 and 186.
const ESSOS_152 = `${ASOS_AWOIAF}8`
const ESSOS_167 = `${ASOS_AWOIAF}23`
const ESSOS_171 = `${ASOS_AWOIAF}27`
const ESSOS_186 = `${ASOS_AWOIAF}42`

/** The note on a book pin past the Ice and Fire Wiki's chapter pages. */
const PAST_CHAPTER_PAGES =
  'No chapter page exists past site chapter 33, so the pin rests on the episode page’s adaptation list and the reviewed relationship pins; unverified on the chapter text.'

export const GAME_OF_THRONES_SOURCES = {
  'daenerys-targaryen': {
    '1:episode': {
      source: EPISODE_1,
      note: 'The Pentos synopsis has Drogo looking her over without dismounting, her refusal and Viserys’s answer about forty thousand men and their horses, the gifts (Jorah’s books, the eggs turned to stone, a white mare) and the consummation on the shore at sunset.',
    },
    '1:chapter': {
      source: DANY_I,
      note: 'Chapter 4: the bath by two of Illyrio’s servants, Viserys finding her too thin, Illyrio’s claim of support in Westeros that she does not trust, Jorah pointed out as the knight who sold poachers to a slaver, and the threat after her refusal; she dries her tears to meet the khal.',
    },
    '2:chapter': {
      source: DANY_II,
      note: 'Chapter 12: the wedding outside the walls, a man killed over a woman, the three handmaidens from Viserys, Jorah’s books, the eggs from beyond Asshai, the refused weapons, the silver filly. The Game of Thrones Wiki’s Drogo page, In the books, has him asking and her answering yes.',
    },
    '2:episode': {
      source: EPISODE_2,
      note: 'The Dothraki Sea synopsis: fear and injury, Jorah’s comfort, Doreah’s second-moon story, the lesson with “you are no slave”, and Drogo responding once she speaks Dothraki.',
    },
    '3:chapter': {
      source: DANY_III,
      note: 'Corrected after review: Jhogo’s question was dropped, and Irri, not Jhiqui, notices the pregnancy (Ice and Fire Wiki, Irri page). Chapter 24 synopsis: she adapts, drifts from Viserys and acknowledges the pregnancy. Jhogo’s whip and his release at Irri’s word are on the Ice and Fire Wiki’s Jhogo page and the reviewed relationship pin at 3/24; Jorah taking the horse is on its Aggo page, his poor-king remark on its Jorah page. Doreah’s lesson is on its Drogo page, during the ride, and chapter 24 is the only ride chapter.',
    },
    '3:episode': {
      source: EPISODE_3,
      note: 'The synopsis has the halt on a whim, Rakharo’s whip, the walk, Irri revealing the pregnancy and the talk with Drogo about a boy.',
    },
    '4:37': {
      source: EPISODE_4,
      note: `Episode 4 has the arrival, Doreah dragged in with the invitation, the belt and the warning about his hands. The book side is Daenerys IV, which the episode adapts; the relationship pin for Doreah at 4/37 holds in both media. ${PAST_CHAPTER_PAGES}`,
    },
    '6:47': {
      source: EPISODE_6,
      note: `The synopsis has the stallion’s heart, the crones’ prophecy, the name Rhaego, the sword drawn at the feast, the threat to the child, the molten gold and “no true dragon”, said aloud on screen and thought in the book, so the story states it without saying which. The Ice and Fire Wiki’s Daenerys page tells the same feast in the book; the episode adapts Daenerys V. ${PAST_CHAPTER_PAGES}`,
    },
    '7:55': {
      source: EPISODE_7,
      note: `The synopsis has the wine merchant, Jorah stopping her, the capture, the horse for Jorah, the vow to cross the poison water and the merchant walking behind her horse. The relationship pins at 7/55 hold the poison and the horse in both media; the episode adapts Daenerys VI. ${PAST_CHAPTER_PAGES}`,
    },
    '8:episode': {
      source: EPISODE_8,
      note: 'The Lhazar synopsis: slaves to pay for ships, the claimed women, Drogo siding with her, Mago’s insult and death, the chest wound and Mirri Maz Duur treating it while the bloodriders call her maegi.',
    },
    '8:chapter': {
      source: `${SHOW}Mago`,
      note: `In the books: Drogo is wounded in a battle against another khalasar, not by Mago, who only complains and is denied (Mago and Drogo pages); corrected after review: Mago complains to Haggo, and Drogo sends word back. Quaro’s remark, Mirri’s offer and Drogo’s consent are the reviewed relationship pins at 8/62; the episode adapts Daenerys VII. ${PAST_CHAPTER_PAGES}`,
    },
    '9:65': {
      source: EPISODE_9,
      note: `The synopsis has the fall, Jorah’s advice to leave, the life for a life, the stallion, Qotho killed by Jorah and Jorah carrying her into the tent in labor. The relationship pins at 9/65 hold the stallion, Qotho and the tent in both media; Corrected after review: Qotho turns on Daenerys and the rite, since only the show has him shove her. The episode adapts Daenerys VIII. ${PAST_CHAPTER_PAGES}`,
    },
    '10:69': {
      source: `${SHOW}Mago`,
      note: `Book only: the son born dead, Drogo empty, Mirri’s revenge and binding, and the smothering are the relationship pins at 10/69; Mago’s page, In the books, has Eroeh seized, raped and killed by Jhaqo’s bloodriders, and Daenerys swearing to make Mago and Jhaqo pay (corrected after review: the oath names both men). The episode adapts Daenerys IX. ${PAST_CHAPTER_PAGES}`,
    },
    '10:73': {
      source: EPISODE_10,
      note: `The synopsis has the son dead, the smothering, the pyre, the eggs, Mirri bound, Jorah’s plea, the walk into the flames and the three dragons at dawn. The relationship pins at 10/73 hold the pyre, Mirri and Jorah kneeling in both media; the episode adapts Daenerys X. ${PAST_CHAPTER_PAGES}`,
    },
    '11:episode': {
      source: EPISODE_11,
      note: 'The Red Waste synopsis: east into the Red Waste to avoid her rivals, Jorah’s warning that her enemies would kill her and take her dragons, the dragons refusing the meat, starvation, the white mare’s death, and the three bloodriders sent out on the last horses; the names are Daenerys’s line quoted on the Aggo (The North Remembers) page (GOT201).',
    },
    '11:chapter': {
      source: ACOK_12,
      note: 'Daenerys I (site 86): the red comet, Jorah’s warning about the other khalasars, the seared meat after Viserys’s words, the dragons named for Rhaegar, Viserys and Drogo, the deaths on the march and Doreah’s death holding her hand, the dead city, Jorah’s story of Lynesse Hightower, her realizing that he loves her, and Jhogo’s return with three strangers from Qarth seeking dragons. The three are left unnamed: Xaro and Pyat Pree open in the books at 114 and Quaithe at 86, where she gives her own name.',
    },
    '12:86': {
      source: EPISODE_12,
      note: 'The Red Waste synopsis: the wait in the heat, the water dwindling, Rakharo’s riderless horse, his head and braid in the saddlebag, Jorah surmising a rival khalasar, Irri’s fear for the Night Lands, and the promised funeral; the Daenerys Targaryen page adds the burning of his body (GOT202).',
    },
    '14:101': {
      source: EPISODE_14,
      note: 'The Qarth synopsis: Kovarro’s return with the Thirteen’s invitation, Jorah on the Garden of Bones, the Thirteen demanding to see the dragons, her refusal until her people are fed and sheltered, the vow of fire and blood, and Sumai. Xaro opens on screen only at episode 15, so the story leaves the one who vouches for her unnamed (GOT204).',
    },
    '15:114': {
      source: EPISODE_15,
      note: 'The Qarth synopsis: the dragons breathing fire on command, Xaro’s hospitality and feast, the warlock’s tricks and his invitation, Xaro’s proposal, Jorah’s advice about a single ship and his feelings unanswered; the Daenerys Targaryen page has “dracarys”, Doreah sent to learn about Xaro, the vault and the news of Robert’s death (GOT205). Pyat Pree is the books’ record, so the warlock stays unnamed. Chapter 114, Xaro’s book gate, orders it.',
    },
    '16:episode': {
      source: EPISODE_16,
      note: 'The Qarth synopsis: the Spice King refusing ships to a queen with no army and no open supporters, the return to Xaro’s mansion with him, the guards dead, Irri strangled and the dragons gone; Doreah missing is on the Daenerys Targaryen page (GOT206).',
    },
    '16:chapter': {
      source: ACOK_40,
      note: 'Daenerys III (site 114): the Pureborn refuse her, Xaro has no warships and asks her again to marry him, she refuses, the Qartheen wedding gift that cannot be refused, Quaithe’s warning at the bazaar and the firemage’s ladder of fire, Jorah urging her toward Pyat Pree, and Xaro’s warning against the warlocks.',
    },
    '17:114': {
      source: EPISODE_17,
      note: 'The Qarth synopsis: Jorah sent to find the dragons, Daenerys with Kovarro before the Thirteen, the warlock’s confession, Xaro proclaimed King of Qarth, the doubles slitting the throats of the Thirteen, the flight and the invitation to the House of the Undying (GOT207). The Daenerys Targaryen page has the meeting at Xaro’s house.',
    },
    '18:114': {
      source: EPISODE_18,
      note: 'The Qarth synopsis: Jorah’s advice to leave the dragons, the passage booked to Astapor, and her asking him to lead her to the House of the Undying; the courtyard and the shared certainty of a trap are on the Daenerys Targaryen and Kovarro pages (GOT208).',
    },
    '20:episode': {
      source: EPISODE_20,
      note: 'The Qarth synopsis: parted from Jorah and Kovarro, the ruined throne room under snow, Drogo and the son she lost in his tent, the chained dragons, the warlock chaining her, “dracarys”, Xaro in bed with Doreah, the empty vault, both locked inside and enough salvaged to buy a ship (GOT210). The son is left unnamed: Rhaego has no record.',
    },
    '20:122': {
      source: ACOK_48,
      note: 'Daenerys IV (site 122): she enters alone with Drogon, Pyat Pree’s rules (the door on the right, stairs up only, no room entered), the visions of past and future, the Undying’s three fires, three mounts and three treasons, Drogon tearing the heart, the burning house, Pyat Pree’s dagger, Jhogo’s whip, Rakharo striking him down and Jorah comforting her. The visions are not described one by one.',
    },
    '20:chapter': {
      source: ACOK_63,
      note: 'Daenerys V (site 137): Xaro’s warning about the warlocks and two of the merchant consortiums, the refused proposal, ten ships for a dragon, the Sorrowful Man’s box with the manticore knocked away by the old man, Arstan Whitebeard and Strong Belwas sent by Illyrio, and the three ships renamed Balerion, Meraxes and Vhagar. The old man’s recognition of Jorah is left out: it hints at the books’ later reveal.',
    },
    '15:101': {
      source: ACOK_27,
      note: 'Daenerys II (site 101): the entry into Qarth with Drogon on her shoulder, the three carved walls, a wing of Xaro’s palace, ships and swords instead of gifts, Jorah’s return from the docks with the Summer Islander captain Quhuru Mo, Robert dead, Joffrey on the throne, Robert’s brothers fled, the Seven Kingdoms flying to pieces like Drogo’s khalasar, and “dragons die, but so do dragon-slayers”. Xaro and Pyat Pree open in the books at 114, so the story leaves them unnamed.',
    },
    '21:episode': {
      source: EPISODE_21,
      note: 'Show (21/167): the Astapor synopsis: the dragons roasting fish but still too small for war, Jorah on the Unsullied as the finest soldiers, Kraznys’s tour with Missandei translating and leaving his insults untranslated, the nipple cut off, the newborn killed at the end of training, eight thousand for sale, the manticore in the child’s ball, and Barristan kneeling to ask for a place in her Queensguard (GOT301). Kraznys is the books’ record and Missandei opens at 23, so neither is named. Daenerys II (site 167), which the episode adapts, orders it.',
    },
    '23:171': {
      source: EPISODE_23,
      note: 'Show: the Astapor synopsis: Jorah and Barristan on the Walk of Punishment, Rhaegar loved by his men and called the last dragon, Daenerys saying he was not, all eight thousand and those in training for her largest dragon, Missandei demanded as a token, both knights objecting, and the warning never to question her in public (GOT303). Kraznys is the books’ record, so he is the Good Master. Daenerys III (site 171) orders it, Missandei’s book gate.',
    },
    '24:episode': {
      source: EPISODE_24,
      note: 'Show: the Astapor synopsis: Drogon handed over on a chain for the harpy whip, the Valyrian commands to Missandei’s surprise, “a dragon is not a slave”, the order to kill the masters, their soldiers and every man holding a whip, spare the children and free the slaves, Kraznys burned, the Unsullied freed and staying (GOT304). The dragon is left unnamed: Drogon opens on screen at episode 40. Daenerys III (site 171) orders it.',
    },
    '25:186': {
      source: EPISODE_25,
      note: 'Show: the Slaver’s Bay synopsis: the Unsullied officers choosing a leader, Grey Worm’s name, Missandei on the color-and-vermin names, the order to choose new names or take back their birth names, and Grey Worm keeping his as the name he had when she freed him (GOT305). Daenerys IV (site 186) orders it, Grey Worm’s book gate.',
    },
    '27:186': {
      source: EPISODE_27,
      note: 'Show: the Yunkai synopsis: Jorah’s warning that Yunkai will hide behind its walls and that taking it does not bring her closer to Westeros, Grey Worm sending the message, Razdal mo Eraz announced, gold and ships offered for peace, her counter-offer of freedom and payment, the threat of powerful friends, the dragons, and the gold kept (GOT307). Daenerys IV (site 186) orders it, Grazdan’s book gate.',
    },
    '28:186': {
      source: EPISODE_28,
      note: 'Show: the Yunkai synopsis: the Second Sons, two thousand mounted, Mero’s insults and groping of Missandei, two days and a barrel of wine, the order to Barristan to kill Mero first, Missandei in the bath, and Daario with the heads of Mero and Prendahl swearing his sword, his men and his heart (GOT308). Prendahl is the books’ record, so he is the other captain. Daenerys IV (site 186) orders it.',
    },
    '29:186': {
      source: EPISODE_29,
      note: 'Show: the Yunkai synopsis: Daario’s back-gate plan, Jorah’s doubt, Grey Worm saying he trusts Daario, Barristan asking to go and reminded that a Queensguard stays at the queen’s side, Daenerys pacing and asking how long a sack takes, Jorah and Grey Worm returning grinning, and Daario last with Yunkai’s torn flag (GOT309). Daenerys IV (site 186) orders it.',
    },
    '30:episode': {
      source: EPISODE_30,
      note: 'Show: the Yunkai synopsis: the fear that better-treated slaves may not want freedom, the gates opening, Missandei’s speech cut short, “mhysa” taken up by the crowd, Missandei’s explanation, the Unsullied told to stand down, and the crowd lifting her up, as the Daario Naharis page tells it (GOT310). Corrected after review: the commanders hear of the night attack before Daario returns, and he returns before it. Daenerys IV (site 186) orders it.',
    },
    '21:152': {
      source: ESSOS_152,
      note: 'Daenerys I (site 152), cached A Wiki of Ice and Fire synopsis: Illyrio’s three ships, the dragons over the sea, Arstan on the Dragonpit and on Rhaegar the bookish boy turned warrior, Jorah warning against Belwas, Arstan and Illyrio and urging Slaver’s Bay and the Unsullied instead of Pentos, the captain made to change course, and Jorah’s kiss, which she tells him he should not have given. The captain, Groleo, has no record and stays unnamed. Episode 21 adapts the chapter (its page’s adaptation list).',
    },
    '21:chapter': {
      source: ESSOS_167,
      note: 'Daenerys II (site 167), cached synopsis: the slaver showing the Unsullied through a translator, Daenerys pretending not to know High Valyrian, the eunuchs obeying and hardly feeling pain, eight thousand for sale, Arstan for sellswords over a slave army that Westeros would oppose, Daenerys too proud to go back to Pentos as a beggar after what it did to her brother, Jorah on the Unsullied not raping or sacking unless ordered, and her doubt about loyalty that is bought. Kraznys and Missandei open at 171, so neither is named. Episode 21 adapts the chapter.',
    },
    '24:chapter': {
      source: ESSOS_171,
      note: 'Daenerys III (site 171), cached synopsis: all eight thousand and the boys in training, the three ships and Drogon in payment, Missandei freed and taken into service in High Valyrian, Quaithe’s night visit with “to go north, you must journey south”, the whip in Kraznys’s face, “Drogon! Dracarys!”, her followers attacking the slavers, the Unsullied obeying her and the slaves joining in, and Astapor conquered. The Ice and Fire Wiki’s Daenerys page has the ships, Drogon and the slaves freed. Drogon is named but not linked: his record opens on screen at 40. Episode 24, Kraznys’s show gate, orders it.',
    },
    '30:chapter': {
      source: ESSOS_186,
      note: 'Daenerys IV (site 186), cached synopsis: two sellsword companies, the three Stormcrow captains refusing and Daario smiling, the Second Sons’ captain laughing but taking a wagonload of wine, the slaver sent off with his gold and a warning of three days, the commanders told they attack that night, Daario returning before the attack with the heads of the other two captains and swearing his company, the Second Sons too drunk to fight, those who yield spared, the slaves freed and calling her “Mother”. The envoy is Grazdan mo Eraz on the Game of Thrones Wiki’s Razdal mo Eraz page (In the books). Episode 30 adapts the last scene.',
    },
  },
  'viserys-targaryen': {
    '1:4': {
      source: EPISODE_1,
      note: 'Both media: exile in Pentos as Illyrio’s guests, the claim to their father’s throne, the forty thousand riders and the threat after her refusal (episode 1 synopsis; Daenerys I, site chapter 4, on the Ice and Fire Wiki).',
    },
    '2:chapter': {
      source: DANY_II,
      note: 'Chapter 12: impatience at dinner, Illyrio and Jorah saying she must first go to the sacred city, the seat below the bloodriders, the three handmaidens and the hint about Doreah. The reminder to keep her husband pleased is the reviewed relationship pin at 2/12.',
    },
    '2:episode': {
      source: EPISODE_2,
      note: 'The synopsis has him riding with the khalasar against Jorah’s advice, Jorah’s account of the poachers and Eddard Stark, and Viserys laughing it off. Illyrio’s page places the advice: wait at Illyrio’s estate. Jorah’s fealty is episode 1.',
    },
    '3:24': {
      source: EPISODE_3,
      note: 'Both media, told without the guard’s name: the show gives the whip to Rakharo, the books to Jhogo (Ice and Fire Wiki, Jhogo page; Daenerys III, site chapter 24). Jorah not obeying and the lost horse are in both (Jorah pages of both wikis). Corrected after review: the Italian names Daenerys’s guards, not his.',
    },
    '4:37': {
      source: EPISODE_4,
      note: `The synopsis has the invitation, Doreah dragged in, the belt, the warning about his hands and Viserys stunned. The book side is Daenerys IV, which the episode adapts, and the Doreah pin at 4/37. ${PAST_CHAPTER_PAGES}`,
    },
    '6:47': {
      source: EPISODE_6,
      note: `Corrected after review: the egg theft is dropped, as no book source places it. The synopsis has the drawn sword in the sacred city, the threat, “a golden crown that men will tremble to behold”, the broken arm and the molten gold. Book: the Ice and Fire Wiki’s Cohollo page has the bloodriders seizing him; which of them breaks the arm is not on the pages read (#1355). The episode adapts Daenerys V. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'drogo': {
    '1:episode': {
      source: EPISODE_1,
      note: 'The synopsis: forty thousand warriors, the look without dismounting, Illyrio’s reassurance, the duels at the wedding, the white mare and the shore at sunset.',
    },
    '1:chapter': {
      source: DANY_I,
      note: 'Chapter 4: the feast at Drogo’s manse in Pentos, Viserys’s plan for his forty thousand men, and Illyrio leaving to bring Drogo to them.',
    },
    '2:chapter': {
      source: DANY_II,
      note: 'Chapter 12: the wedding outside the walls, the bloodriders below the couple, the whip, arakh and bow that go to Drogo, the silver filly, the braid. The question and her yes are on the Game of Thrones Wiki’s Drogo page, In the books.',
    },
    '2:episode': {
      source: EPISODE_2,
      note: 'The synopsis has the drinking with his warriors, the rough nights, Doreah’s lessons and Drogo responding once she speaks Dothraki.',
    },
    '6:47': {
      source: EPISODE_6,
      note: `The synopsis has the heart, the prophecy, the drawn sword, the crown promised, the belt of medallions melted and poured. The book side is Daenerys V and the reviewed pin at 6/47. ${PAST_CHAPTER_PAGES}`,
    },
    '7:55': {
      source: EPISODE_7,
      note: `The synopsis has the poison, the horse for Jorah and the vow to cross the poison water “as no khalasar has done” and take the Iron Throne; corrected after review: the Italian and the English now both say the Iron Throne. The relationship pins at 7/55 hold the poison and the horse in both media; the episode adapts Daenerys VI. ${PAST_CHAPTER_PAGES}`,
    },
    '8:episode': {
      source: `${SHOW}Mago`,
      note: 'Mago’s page, citing episode 8: the insult, Drogo disarming himself and taking the cut, the throat cut and the tongue. The episode synopsis has the claimed women and Mirri treating the wound.',
    },
    '8:chapter': {
      source: `${SHOW}Drogo`,
      note: `In the books: wounded in a battle against another khalasar by a rival bloodrider, an arrow through the arm; Mago is only denied. Corrected after review: Mago complains to Haggo and Drogo sends word back; Haggo’s offer to carry him is dropped, as it may belong to the fall at site chapter 65. ${PAST_CHAPTER_PAGES}`,
    },
    '9:65': {
      source: EPISODE_9,
      note: `The synopsis has the festering wound, the fall, the halt, Mirri’s blood magic and the stallion killed in the tent, and the warriors turning on Daenerys. The relationship pins at 9/65 hold the stallion and the fight in both media. ${PAST_CHAPTER_PAGES}`,
    },
    '10:69': {
      source: EPISODE_10,
      note: `The synopsis has Drogo catatonic, the khalasar gone, the son born dead and the smothering; Mirri’s page quotes the sun rising in the west. Book: the relationship pins at 10/69 and his status there; the episode adapts Daenerys IX. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'jorah-mormont': {
    '1:episode': {
      source: `${SHOW}Jorah_Mormont`,
      note: 'Season 1, citing episode 1: the books from Westeros, his Northern origin, the fealty sworn to Viserys and accepted, and his fluency in Dothraki.',
    },
    '1:chapter': {
      source: DANY_I,
      note: 'Chapter 4: Illyrio points him out as a knight who sold poachers to a Tyroshi slaver and ran from punishment; Viserys means to speak with him before the night is done. Daenerys’s surprise is on the Ice and Fire Wiki’s Jorah page.',
    },
    '2:chapter': {
      source: DANY_II,
      note: 'Chapter 12: Viserys’s latest companion, the assurance with Illyrio that the Dothraki will fight once she is presented, the seat on the level below, and the books as a bride gift.',
    },
    '2:episode': {
      source: EPISODE_2,
      note: 'The synopsis has the comfort for Daenerys, the advice to Viserys, the poachers and Eddard Stark’s sentence, and Viserys laughing.',
    },
    '2:13': {
      source: `${BOOKS}Eddard_II_-_A_Game_of_Thrones`,
      note: 'Added after review: chapter 13 has Eddard and Robert riding apart and discussing Daenerys. That the news of her marriage comes from Jorah’s reports to the small council is the verifier’s reading; the chapter page has no synopsis, so it is unverified on the chapter text.',
    },
    '3:chapter': {
      source: `${BOOKS}Jorah_Mormont`,
      note: 'He sides with Daenerys after the confrontation on the Dothraki Sea, wants to go home and thinks Viserys a poor king; the Aggo page has him taking Viserys’s horse, the relationship pin at 3/24 the order to punish her. Daenerys III, site chapter 24.',
    },
    '3:episode': {
      source: `${SHOW}Jorah_Mormont`,
      note: 'Season 1, citing episode 3: the ignored order to kill her men, the talk with Rakharo about arms and his father, and the ride to Qohor once he learns of the pregnancy.',
    },
    '4:37': {
      source: `${SHOW}Jorah_Mormont`,
      note: 'Season 1, citing episode 4: the Dothraki and the sea, stone walls, the poachers sold for his wife’s tastes and “with another man in another place”. The episode synopsis has Viserys never becoming king.',
    },
    '5:47': {
      source: `${SHOW}Jorah_Mormont`,
      note: 'Season 1, citing episode 5: the report to Varys sent from Qohor, Eddard calling him a traitor who will say anything for a pardon, and the council ordering the killing. Corrected after review: lower-case “re Robert” in the Italian.',
    },
    '6:47': {
      source: EPISODE_6,
      note: 'Corrected after review: show only, since in the book Jorah stops the theft off the page. The synopsis has Jorah finding Viserys at the eggs, the feast, and Jorah telling her to look away while she watches.',
    },
    '7:episode': {
      source: EPISODE_7,
      note: 'The synopsis has the boy, the pardon from Varys, Jorah realizing what it means, the wine stopped and the horse he may choose.',
    },
    '7:chapter': {
      source: `${SHOW}Jorah_Mormont`,
      note: `Book side: Illyrio’s warning of a price on her head is the relationship pin at 7/55 (chapter); the poison and the horse hold in both media. The episode adapts Daenerys VI. ${PAST_CHAPTER_PAGES}`,
    },
    '9:65': {
      source: `${SHOW}Jorah_Mormont`,
      note: `Season 1, citing episode 9: the warning that the son will be killed, the advice to leave, the armor, Qotho killed and Daenerys carried in; corrected after review, with Daenerys’s story: Qotho turns on her and the rite. The relationship pins at 9/65 hold the fight and the tent in both media. ${PAST_CHAPTER_PAGES}`,
    },
    '10:73': {
      source: EPISODE_10,
      note: `The synopsis has Mirri bound, Jorah’s plea, the walk into the flames and Jorah kneeling at dawn. The relationship pin at 10/73 holds the plea, the binding and the kneeling in both media. ${PAST_CHAPTER_PAGES}`,
    },
    '12:86': {
      source: EPISODE_12,
      note: 'Jorah Mormont page: Lhazar or the Dothraki Sea would mean death and the loss of her dragons, and she must stay strong (GOT201); the riderless horse, the bleeding saddlebag, Rakharo’s head and braid, his warning not to look and Khal Pono or Khal Jhaqo, opposed to a woman leading a khalasar (GOT202).',
    },
    '15:114': {
      source: EPISODE_15,
      note: 'Jorah Mormont page: he stops the Dothraki stealing from their host, the masked woman’s warning about those who lust after the dragons, his counsel against Xaro’s money, a single ship and his feelings unreturned (GOT205); the lords calling it Xaro’s conquest is on the Xaro Xhoan Daxos page (GOT205). Quaithe is the books’ record, so she stays unnamed.',
    },
    '17:114': {
      source: EPISODE_17,
      note: 'Jorah Mormont page: away seeking a ship when the dragons are stolen (GOT206), sent to find them, the masked woman’s warning that the thief is with Daenerys, the Thirteen, the warlock’s confession, the double stabbed and the escape with Kovarro (GOT207); the episode synopsis has her knowing he once spied on Daenerys.',
    },
    '20:episode': {
      source: EPISODE_20,
      note: 'Jorah Mormont page and the episode 18 synopsis: the advice to flee, passage booked to Astapor (GOT208); calling for her outside the House of the Undying, Xaro and Doreah found in bed and locked in the empty vault, the gold and jewels real enough to buy a ship and his order to take them (GOT210).',
    },
    '11:86': {
      source: ACOK_12,
      note: 'Daenerys I (site 86): Jorah’s “go where no one else does”, the wound from Qotho not yet healed, the peach in the dead city, Lynesse Hightower won at the Lannisport tourney, his ruin, the flight to Lys, her leaving him for the merchant prince Tregar Ormollen, “she looked a bit like you”, and Daenerys tending his hip wound until it heals.',
    },
    '15:101': {
      source: ACOK_27,
      note: 'Daenerys II (site 101): his muttered warning against both the merchant prince and the warlock, the docks, the captain with the news of Robert’s death, his doubt that Eddard betrayed him, and the reminder of gold, armies, ships and Robert’s warhammer. The “crow calls the raven black” line is paraphrased.',
    },
    '16:114': {
      source: ACOK_40,
      note: 'Daenerys III (site 114): no help in Qarth, the Qartheen wedding gift that cannot be refused, Xaro after a dragon, Illyrio caring only for himself, the man Robert sent to kill her, and his urging her to go to Pyat Pree.',
    },
    '20:chapter': {
      source: ACOK_63,
      note: 'Daenerys IV (site 122) has him comfort her after the House of the Undying. Daenerys V (site 137): the ride to the port with her questions about the visions, his answers, his warning about the scarred man and the old man with a staff, the manticore, and the two sent by Illyrio.',
    },
    '21:episode': {
      source: EPISODE_21,
      note: 'Show (21/167): the Astapor synopsis and the Jorah Mormont page: the Unsullied among the finest soldiers, other Dothraki joining her only if she is strong, the urging after the tour that they will live better in her service, the struggle with the hooded stranger, the manticore killed and Jorah recognizing Barristan Selmy (GOT301). Daenerys II (site 167) orders it.',
    },
    '23:171': {
      source: EPISODE_23,
      note: 'Show: the Astapor synopsis and the Jorah Mormont page: the debate with Barristan, the Unsullied who will not rape or kill unless ordered, honor not winning battles, Rhaegar fighting nobly and dying, both knights objecting to the dragon deal, and Daenerys’s rebuke (GOT303). Daenerys III (site 171) orders it, Missandei’s book gate, as for the rest of the episode’s stories.',
    },
    '25:186': {
      source: EPISODE_25,
      note: 'Show: the Slaver’s Bay synopsis and the Jorah Mormont page: Jorah knighted by Robert at the Siege of Pyke, Barristan’s warning about the taint of selling slaves, Jorah’s careful questions about the small council, Barristan never admitted to its meetings, and the bickering over months of service and Lord Commander (GOT305). Thoros of Myr, ahead of him through the breach, is left out. Daenerys IV (site 186) orders it.',
    },
    '29:episode': {
      source: EPISODE_29,
      note: 'Show: the Yunkai synopsis and the Jorah Mormont page: Jorah skeptical of Daario’s plan and loyalty, the reminder to Barristan that a Queensguard’s place is at the queen’s side, the three fighting through more soldiers than Daario expected, the gates opened, and Jorah distraught when her attention goes to Daario (GOT309). Daenerys IV (site 186) orders it.',
    },
    '21:152': {
      source: ESSOS_152,
      note: 'Daenerys I (site 152), cached synopsis: Jorah warning her against Strong Belwas, Arstan and Illyrio, Arstan more than he seems, Slaver’s Bay and the Unsullied instead of Pentos, the Three Thousand of Qohor against a huge khalasar, the eunuchs trained to obey and feeling no pain, the kiss, her rebuke, and the vision of the three-headed dragon meaning two more husbands. Episode 21 adapts the chapter.',
    },
    '21:chapter': {
      source: ESSOS_167,
      note: 'Daenerys II (site 167), cached synopsis: Daenerys snapping at him in the morning, her contempt for Astapor and the Unsullied though they are too useful to pass up, the Unsullied not raping or sacking unless ordered, Astapor never sacked because an attacker would face its whole garrison of Unsullied, and Rhaegar’s honor not saving him at the Trident. Episode 21 adapts the chapter.',
    },
    '29:chapter': {
      source: ESSOS_186,
      note: 'Daenerys IV (site 186), cached synopsis: the commanders, Daario’s return with the heads of the other two Stormcrow captains, Jorah warning her not to trust the Tyroshi, the battle as planned and won. Grey Worm placed under Jorah’s tutelage is A Wiki of Ice and Fire’s Grey Worm page (cached), citing Chapter 42. Episode 29, which shows the night attack, orders it.',
    },
  },
  'illyrio-mopatis': {
    '1:4': {
      source: `${SHOW}Illyrio_Mopatis`,
      note: 'Season 1, citing episode 1: he brokers the match and reassures Viserys when Drogo rides off. In the book (Daenerys I, site chapter 4) he reassures Viserys that she is old and beautiful enough; the story keeps to the reassurance both tell. Corrected after review: the order of events is no longer the show’s.',
    },
    '2:12': {
      source: DANY_II,
      note: 'Chapter 12: the wedding outside the walls, Illyrio’s saying about three deaths (corrected after review: given as his, not as something he told her), the eggs from the Shadow Lands beyond Asshai. The show has all of it in episode 1; the story waits for episode 2 because episodes must rise.',
    },
    '5:47': {
      source: `${SHOW}Illyrio_Mopatis`,
      note: 'Season 1, citing episode 5: the secret meeting with Varys under the Red Keep, the war coming too soon, Drogo waiting for his son, the suggestion about Eddard refused, and Arya overhearing. The book never names the man Arya hears.',
    },
  },
  'irri': {
    '2:episode': {
      source: `${SHOW}Irri`,
      note: 'Season 1, citing episode 2: she helps Daenerys to the tent, says dragons are gone, calls the moon a goddess; Jhiqui sides with her and both are sent away.',
    },
    '2:chapter': {
      source: DANY_II,
      note: 'Chapter 12: the three handmaidens as Viserys’s gift, Irri and Jhiqui Dothraki, Doreah from Lys. The tasks are the reviewed relationship pins at 2/12 (riding, the tongue) and the Ice and Fire Wiki’s Doreah page (the arts of love).',
    },
    '3:chapter': {
      source: `${BOOKS}Irri`,
      note: 'Added after review: Irri is the first to notice the pregnancy; Viserys gave her to teach Daenerys to ride (Ice and Fire Wiki, Irri page). Daenerys III, site chapter 24.',
    },
    '3:episode': {
      source: `${SHOW}Irri`,
      note: 'Season 1, citing episode 3: translating for Rakharo, the shared puzzlement at the mercy, working out the pregnancy, telling Jorah and demanding something other than horseflesh.',
    },
    '6:47': {
      source: EPISODE_6,
      note: 'The synopsis has the egg on the brazier and Irri’s burned hands, and Irri translating Viserys’s threat to Drogo.',
    },
    '12:86': {
      source: EPISODE_12,
      note: 'Irri page: Rakharo’s horse returns, his severed head, her fear that without cremation he cannot reach the Night Lands, and Daenerys comforting her (GOT202); the funeral promise is the episode synopsis.',
    },
    '16:114': {
      source: EPISODE_16,
      note: 'Irri page: the mended clothes, Daenerys calling her a friend, khaleesi against Doreah’s princess, the dress worn as a courtesy to Xaro (GOT205), and her body found strangled in Xaro’s mansion (GOT206). Chapter 114 orders it, after Xaro’s book gate.',
    },
    '21:167': {
      source: ESSOS_167,
      note: 'Daenerys II (site 167), cached synopsis: lonely since her husband’s death and confused by Jorah’s advances, Daenerys takes Irri as a lover one night; Irri is more than willing, but Daenerys finds no release, only guilt at treating her handmaid as a bedslave, and snaps at Jorah the next morning. Episode 21 adapts the chapter; Irri is dead on screen.',
    },
  },
  'doreah': {
    '3:24': {
      source: `${BOOKS}Doreah`,
      note: 'Added after review: the tale of the second moon and the further lessons in the arts of love, on the ride east (Ice and Fire Wiki, Doreah page). Daenerys III, site chapter 24, the only ride chapter; unverified on the chapter text.',
    },
    '2:episode': {
      source: EPISODE_2,
      note: 'The synopsis has the second moon and the thousands of dragons, the other handmaidens dismissing it, the lesson and “no slave”.',
    },
    '2:chapter': {
      source: DANY_II,
      note: 'Chapter 12: Doreah from Lys among Viserys’s three gifts, and his hint that he and Illyrio have bedded her. Her task, the arts of love, is on the Ice and Fire Wiki’s Doreah page.',
    },
    '4:37': {
      source: EPISODE_4,
      note: `The synopsis has the invitation, Viserys dragging Doreah to the tent, the belt and the warning. The relationship pin at 4/37 holds the dragging in both media; the episode adapts Daenerys IV. ${PAST_CHAPTER_PAGES}`,
    },
    '11:86': {
      source: ACOK_12,
      note: 'Daenerys I (site 86): Doreah’s warning that only grim red lands lie that way, her illness, the fever, too weak to mount, and Daenerys holding her hand until she dies. The Ice and Fire Wiki’s Doreah page has the same death.',
    },
    '15:114': {
      source: EPISODE_15,
      note: 'Doreah page: Daenerys teaching Drogon to cook his meat with “dracarys” on the balcony, “the dragon loves you”, Xaro the wealthiest man in Qarth, the seduction of Xaro’s fellow citizens and her charming guests at the reception (GOT205). Drogon’s name is left out: the show says it only at episode 40.',
    },
    '20:137': {
      source: EPISODE_20,
      note: 'Doreah page: missing after the theft (GOT206), believed dead (GOT207), found asleep in Xaro’s bed, her betrayal, her pleas and the vault (GOT210).',
    },
  },
  'rakharo': {
    '3:24': {
      source: `${SHOW}Rakharo`,
      note: 'Season 1, citing episode 3: the whip around the throat, sparing Viserys at her request, the horse taken, the talk with Jorah and the argument with Irri over dinner. The book’s whip is Jhogo’s.',
    },
    '7:55': {
      source: EPISODE_7,
      note: 'The synopsis has Rakharo tangling the wine merchant’s ankles with his whip, Drogo’s vow and the merchant tied to Daenerys’s saddle.',
    },
    '9:65': {
      source: `${SHOW}Haggo`,
      note: `In the books Haggo is killed by Rakharo and Jhogo; the relationship pin at 9/65 (chapter) has Jhogo’s whip and Rakharo’s blow. The episode adapts Daenerys VIII. ${PAST_CHAPTER_PAGES}`,
    },
    '10:episode': {
      source: `${SHOW}Rakharo`,
      note: 'Season 1, citing episode 10: he places the eggs on the pyre at her order and joins Jorah in declaring his loyalty at dawn.',
    },
    '10:chapter': {
      source: `${SHOW}Rakharo`,
      note: `In the books: the arakh from her bride gifts, named her ko, the promise to ride with her only as far as Vaes Dothrak and the dosh khaleen, and the oath after the fire. ${PAST_CHAPTER_PAGES}`,
    },
    '11:episode': {
      source: EPISODE_11,
      note: 'Rakharo page: named a bloodrider, sent northeast on the last horses, Daenerys’s goodbye, “you have never failed me” and his answer (GOT201).',
    },
    '12:86': {
      source: EPISODE_12,
      note: 'Rakharo page and the Jorah Mormont page: the riderless horse in red war paint, the head and braid, a rival khalasar, Irri’s fear for the Night Lands, and the funeral promise in the episode synopsis (GOT202).',
    },
    '11:chapter': {
      source: ACOK_12,
      note: 'Daenerys I (site 86): Aggo, Jhogo and Rakharo scout the dead city, then each rides out with three horses; Rakharo returns first, the waste running south to the ocean, and is set to pulling up the plaza for grass.',
    },
    '20:122': {
      source: ACOK_48,
      note: 'Daenerys IV (site 122): outside the burning House of the Undying, after Jhogo’s whip knocks Pyat Pree’s knife aside, Rakharo slaps the warlock to the ground. The synopsis lists Jorah, Jhogo, Aggo and Xaro among her companions at the door.',
    },
  },
  'mirri-maz-duur': {
    '8:62': {
      source: `${SHOW}Mirri_Maz_Duur`,
      note: 'Season 1, citing episode 8: the raid, the women handed to Daenerys, the offer to heal as a godswife, Qotho calling her maegi. Book side: Daenerys saves her and she treats the wound (Ice and Fire Wiki, Mirri page; relationship pin at 8/62).',
    },
    '9:65': {
      source: EPISODE_9,
      note: `The synopsis has the life in exchange, the stallion in the tent and the warning not to interrupt (Mirri’s page). The book’s “only death can pay for life” and the stallion are the relationship pin at 9/65. ${PAST_CHAPTER_PAGES}`,
    },
    '10:69': {
      source: `${SHOW}Mirri_Maz_Duur`,
      note: `Book side: Drogo without a mind, the son dead, the revenge for her people and the binding are the relationship pin at 10/69, and her captured status there (added after review); the sun in the west is quoted on Mirri’s page. The episode adapts Daenerys IX. ${PAST_CHAPTER_PAGES}`,
    },
    '10:73': {
      source: EPISODE_10,
      note: `The synopsis has the revenge, the smothering, Mirri bound to the pyre by Jorah and Daenerys unharmed at dawn. The relationship pin at 10/73 holds the binding and the burning in both media. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'qotho': {
    '6:12': {
      source: DANY_II,
      note: 'The synopsis names the bloodriders Cohollo, Haggo and Qotho below the khal at the wedding, Viserys on the level beneath them and upset by it, the bloodriders’ gifts of a whip, an arakh and a double-curved dragonbone bow, refused as custom requires and given to Drogo. The Ice and Fire Wiki’s Qotho page gives him the bow, taller than she is. Books only: the show names him at episode 6 (#1355).',
    },
    '6:62': {
      source: EPISODE_6,
      note: 'The synopsis has Qotho seizing Viserys, breaking his arm so he drops the sword, and Drogo pouring the gold. Show only: the wikis read do not say which bloodrider breaks the arm in the books.',
    },
    '8:62': {
      source: `${SHOW}Qotho`,
      note: `Season 1, citing episode 8: he objects to Mirri treating the wound and calls her maegi. The relationship pins at 8/62 have the same distrust in the books. ${PAST_CHAPTER_PAGES}`,
    },
    '9:65': {
      source: `${SHOW}Qotho`,
      note: `Corrected after review: his motive is now distrust of Mirri, whom he calls a maegi. Season 1, citing episode 9: he objects to the rite, pushes Daenerys to the ground and is killed by Jorah. The book note on the same page has Jorah killing him too; the relationship pin at 9/65 has him shoving her aside. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'cohollo': {
    '4:37': {
      source: `${BOOKS}Cohollo`,
      note: `The oldest bloodrider, kind to Daenerys, the arakh chased in gold as his wedding gift. Corrected after review: the claim that he has guarded Drogo since his birth is dropped. The episode adapts Daenerys IV. ${PAST_CHAPTER_PAGES}`,
    },
    '6:47': {
      source: `${BOOKS}Cohollo`,
      note: `At a feast in Vaes Dothrak he and the other bloodriders seize and disarm Viserys, and Drogo pours the gold. The episode adapts Daenerys V. ${PAST_CHAPTER_PAGES}`,
    },
    '9:65': {
      source: `${SHOW}Cohollo`,
      note: `In the books Aggo kills him when the bloodriders try to stop the rite; the relationship pin at 9/65 has him spitting in her face and nearly killing her. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'haggo': {
    '8:62': {
      source: `${BOOKS}Haggo`,
      note: `A tall bloodrider; the distrust of Mirri is the relationship pin at 8/62. Corrected for #1355: the broken arm is dropped, as no page read gives it to him. Corrected after review: Mago complains to him, and the offer to carry Drogo is dropped, as it may belong to the fall at site chapter 65. ${PAST_CHAPTER_PAGES}`,
    },
    '9:65': {
      source: `${SHOW}Haggo`,
      note: `In the books he is killed by Rakharo and Jhogo when the bloodriders try to stop the rite; the relationship pin at 9/65 has him striking Mirri and Jhogo’s whip. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'jhiqui': {
    '2:episode': {
      source: `${SHOW}Irri`,
      note: 'Season 1, citing episode 2: Jhiqui sides with Irri against Doreah’s second moon, and Daenerys sends them away. The episode synopsis has both calling the moon a goddess.',
    },
    '2:chapter': {
      source: DANY_II,
      note: 'Chapter 12: Irri and Jhiqui, Dothraki, and Doreah, from Lys, as Viserys’s gift. Teaching the tongue is the relationship pin at 2/12 and the Ice and Fire Wiki’s Jhiqui page.',
    },
    '11:86': {
      source: ACOK_12,
      note: 'Daenerys I (site 86): Irri and Jhiqui carry two dragons in a cage between their horses, and Jhiqui insists the dead city is haunted and best avoided before Daenerys leads the khalasar in.',
    },
  },
  'aggo': {
    '11:62': {
      source: `${BOOKS}Aggo`,
      note: `Assigned to her guard by Drogo; nearly cutting Mirri’s throat is the relationship pin at 62. The show names him only at episode 11, so the story is the books’ alone. ${PAST_CHAPTER_PAGES}`,
    },
    '11:65': {
      source: `${SHOW}Cohollo`,
      note: `In the books Cohollo is killed by Aggo during the rite; the relationship pin at 65 has the arrow. ${PAST_CHAPTER_PAGES}`,
    },
    '11:73': {
      source: `${BOOKS}Aggo`,
      note: `Later her bloodrider; the refusal because only a man can lead a khalasar and the kneeling are the relationship pin at 73. Which bride gift he receives is not checked, so the story does not say. ${PAST_CHAPTER_PAGES}`,
    },
    '11:episode': {
      source: EPISODE_11,
      note: 'Aggo (The North Remembers) page: loyal when Drogo’s khalasar fractures, named a bloodrider with Rakharo and Kovarro, and sent southeast on the last horses (GOT201). The story leaves the bloodrider title out: his role stays the guard until 12, the pin of the Essos test.',
    },
    '11:chapter': {
      source: ACOK_12,
      note: 'Daenerys I (site 86): Aggo calls the black dragon Balerion reborn, scouts the dead city with Jhogo and Rakharo, returns from his ride with only two smaller deserted cities found, and is set to repairing the gates.',
    },
  },
  'jhogo': {
    '3:24': {
      source: `${BOOKS}Jhogo`,
      note: 'His whip pulls Viserys away, and he lets go once Irri tells him in Dothraki at Daenerys’s word; the relationship pin at 3/24 has the throat and the question whether to kill or mark him. Daenerys III, site chapter 24.',
    },
    '7:55': {
      source: `${BOOKS}Jhogo`,
      note: `Corrected after review: the horse reward is cut, and Jhogo brings the fleeing wine seller down with his whip, the verifier’s reading of the chapter; unverified on the chapter text. ${PAST_CHAPTER_PAGES}`,
    },
    '9:65': {
      source: `${SHOW}Haggo`,
      note: `In the books Haggo is killed by Rakharo and Jhogo; the relationship pin at 9/65 has Jhogo begging her to refuse the blood magic and his whip on Haggo’s throat. ${PAST_CHAPTER_PAGES}`,
    },
    '10:73': {
      source: `${BOOKS}Jhogo`,
      note: `Later her bloodrider; the refusal because it would shame him and the kneeling are the relationship pin at 10/73. ${PAST_CHAPTER_PAGES}`,
    },
    '11:86': {
      source: ACOK_12,
      note: 'Daenerys I (site 86): the scouting of the dead city, the ride out with three horses, his return last and long after, with three strangers from Qarth seeking dragons. The three are left unnamed: Xaro and Pyat Pree open in the books at 114 and Quaithe at 86.',
    },
    '20:122': {
      source: ACOK_48,
      note: 'Daenerys IV (site 122): Jorah, Jhogo, Aggo and Xaro tell her to turn back, Drogon distracts Pyat Pree, Jhogo’s whip knocks the knife aside, and Rakharo slaps him to the ground.',
    },
  },
  'quaro': {
    '8:62': {
      source: `${BOOKS}Quaro`,
      note: `One of the young warriors of her guard; the remark that the girl should feel honored is the relationship pin at 8/62. ${PAST_CHAPTER_PAGES}`,
    },
    '9:65': {
      source: `${BOOKS}Quaro`,
      note: `Holding the stallion and dying at Qotho’s hand when she calls her guard are the relationship pin at 9/65, and his status there. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'mago': {
    '8:episode': {
      source: `${SHOW}Mago`,
      note: 'Corrected after review: filed at chapter 63, beside his show death. Season 1, citing episode 8: “a foreign whore”, the challenge, Drogo disarming himself, the cut, the throat and the tongue.',
    },
    '8:chapter': {
      source: `${SHOW}Mago`,
      note: `In the books: a rider under the ko Jhaqo who complains that Daenerys took his victim and is denied; corrected after review: he complains to Haggo, and Drogo sends word back. ${PAST_CHAPTER_PAGES}`,
    },
    '10:69': {
      source: `${SHOW}Mago`,
      note: `In the books: Jhaqo’s bloodrider after Drogo falls, Eroeh seized, raped and handed to Jhaqo, whose other bloodriders rape her and cut her throat, and Daenerys’s oath to make Mago and Jhaqo pay (corrected after review: Jhaqo is plain text, not a record). ${PAST_CHAPTER_PAGES}`,
    },
  },
  'eroeh': {
    '10:69': {
      source: `${SHOW}Mago`,
      note: `In the books: the Lhazareen girl Daenerys took from Mago, seized again, raped and killed by Jhaqo’s bloodriders. Doreah tending her is the relationship pin at 10/69. ${PAST_CHAPTER_PAGES}`,
    },
  },
  // The Night’s Watch cast (#1363). Book chapters past site 33 were read on A
  // Wiki of Ice and Fire through Firecrawl: Jon V to Jon IX and Arya V.
  'jon-snow': {
    '1:2': {
      source: WALL_BRAN_I,
      note: 'Site chapter 2: the ride to the execution with Eddard, Robb, Bran and Theon, Jon telling Bran not to look away, Jon calling Theon an ass when he kicks the head, the five pups for the five trueborn children and the albino sixth pup with red eyes that Jon keeps.',
    },
    '1:episode': {
      source: EPISODE_1,
      note: 'Show only, filed at chapter 6 so it may link Benjen and Tyrion. The North synopsis: Will beheaded, Jon praising Bran for not flinching, the pups, the albino runt, Catelyn not wanting a bastard at the feast, Jon at sword practice outside, Benjen agreeing to consider his request, and Tyrion’s advice to wear it like armor.',
    },
    '1:chapter': {
      source: WALL_JON_I,
      note: 'Site chapter 6: Jon with the squires because Catelyn forbade him the family table, Ghost under the table, Benjen refusing him as too young and telling him to father bastards first, Jon stumbling out amid laughter, and Tyrion in the yard telling him never to forget what he is.',
    },
    '2:episode': {
      source: EPISODE_2,
      note: 'Show only, split from the book story after review: the sword for Arya and her first lesson, the farewell kiss for Bran and Catelyn’s cold request, the embrace with Robb, Eddard telling Jon he has his blood if not his name and promising to tell him of his mother, and the ride north with Benjen and Tyrion.',
    },
    '2:chapter': {
      source: WALL_JON_II,
      note: 'Book only, Jon II (site 11): Catelyn at Bran’s bedside, cruel to Jon, the goodbye to Bran, the embrace with Robb, the sword for Arya with her first lesson, and Jon heading north with his uncle.',
    },
    '3:episode': {
      source: EPISODE_3,
      note: 'The Wall synopsis: Jon besting the recruits, Alliser calling him Lord Snow, the recruits ganging up until Tyrion steps in and tells Jon they never had a master-at-arms, Benjen refusing him on top of the Wall. Grenn and Pyp in the armory and Jon starting to train them are on their character pages, citing GOT103.',
    },
    '3:chapter': {
      source: WALL_JON_III,
      note: 'Site chapter 20: Grenn beaten, Alliser’s taunts, Benjen gone on a ranging, Grenn, Todder and the two rapers in the armory, the fight, Donal Noye’s lesson, Mormont’s news of Bran, the offer to help Grenn and the joke that makes Alliser an enemy.',
    },
    '4:27': {
      source: EPISODE_4,
      note: 'Both media: Sam arrives, Alliser sets the others on him, Jon stands in the way, Sam calls himself a coward, his father’s threat of a hunting accident, the plan to go easy and Rast frightened with Ghost (episode 4 synopsis; Jon IV, site 27, on the Ice and Fire Wiki). Grenn and Pyp with Jon at night are on the Rast pages of both wikis.',
    },
    '5:42': {
      source: WALL_AGOT_41,
      note: 'Book only, Jon V (site 42): Alliser passes eight recruits but not Sam, Jon’s fear for him, the late visit, Chett at the door and the foot in it, the request that Sam serve Aemon because he can read, write and do sums, and Aemon saying he will think on it.',
    },
    '7:49': {
      source: EPISODE_7,
      note: 'Both media: the assignments, Jon made the Lord Commander’s own steward, Sam’s view that Mormont means to groom him, the vows together before a heart tree beyond the Wall and Ghost bringing back a hand. Jon VI (site 49) on A Wiki of Ice and Fire tells the same; the show-only horse of Benjen is left out.',
    },
    '8:53': {
      source: EPISODE_8,
      note: 'Both media: the two bodies brought back, burning urged and refused for Aemon to examine them, the arrest for treason and the warning, the knife at Alliser after the taunt, friends holding Jon back, Ghost waking him and Othor’s corpse destroyed with fire. Jon VII (site 53) on A Wiki of Ice and Fire tells the same; the two media burn it differently, so the story says only fire.',
    },
    '9:61': {
      source: EPISODE_9,
      note: 'Both media: Longclaw for saving Mormont’s life, Alliser sent to King’s Landing with the hand, Aemon’s duty and family talk, his birth as son and brother of kings, and his refusal to choose for Jon (episode 9 synopsis; Jon VIII, site 61, on A Wiki of Ice and Fire). Jorah and Sam’s news of Robb are the show’s alone and left out.',
    },
    '10:71': {
      source: EPISODE_10,
      note: 'Both media: news of his father’s death, the horse saddled to join Robb, Sam unable to stop him, friends including Grenn and Pyp reciting the vows, Mormont letting it pass and the ranging in force to find Benjen. Jon IX (site 71) on A Wiki of Ice and Fire tells the same; who rides after him differs, so the story names only Grenn and Pyp.',
    },
    '11:80': {
      source: WL_JON_I,
      note: 'Jon I (site 80): Sam in the vaults finding maps for Mormont, Sam sent in Aemon’s place to tend the ravens, Smallwood arguing that the Lord Commander’s place is at Castle Black and dismissed, Aemon’s refusal of the crown, Robb a king, and Jon’s answer that he will be troubled and keep his vows. No season-2 episode adapts Jon I, so episode 11 orders it.',
    },
    '11:87': {
      source: WL_JON_II,
      note: 'Jon II (site 87): the weirwood of Whitetree with bones in its mouth, the second skull under the first, Jon sure he knows why the dead are burned, the search with Eddison Tollett, the fourth empty village, Smallwood’s wildlings of a year ago, Sam’s ravens saying snow, the vanished game and Jon wondering if they will be found instead. Edd is named unlinked: his show gate is 20. No season-2 episode adapts Jon II, so episode 11 orders it.',
    },
    '11:chapter': {
      source: WL_JON_III,
      note: 'Jon III (site 97): the six days of rain, Craster in the only chair, Benjen not seen for three years, the escort refused as free folk, Craster taking Jon for a bastard, Ghost and the caged rabbits of the girl who is now his wife, Gilly’s plea at dawn, her child and the sons given to the gods, Jon saying they go the other way and it is for the old crow to decide, and Mormont on the ride: the rangers know, the Watch needs Craster, Mance gathering at the Frostfangs. Gilly is named unlinked: her show gate is 15.',
    },
    '11:episode': {
      source: EPISODE_11,
      note: 'At Craster’s Keep: the abandoned villages, Craster’s daughter-wives and no sons, Benjen not seen, the wildlings gathering under Mance Rayder, Jon challenging Craster over “southerners” and Jeor’s reprimand that the Watch needs him; the Jon Snow and Jeor Mormont pages have “learn how to follow” (GOT201).',
    },
    '12:97': {
      source: EPISODE_12,
      note: 'At Craster’s Keep: Sam bringing Gilly to Jon, her fear for her unborn child if it is a boy, her plea to come, Jon refusing and the argument after she leaves, Craster taking a baby into the woods, a White Walker taking it, and Craster knocking Jon out; the Jon Snow page has that Jon does not recognize the creature (GOT202). Gilly is not named: her show gate is 15.',
    },
    '13:97': {
      source: EPISODE_13,
      note: 'At Craster’s Keep: Jon dragged back beaten, the Watch ordered out and Jon blamed, Jeor having known all along, Craster too valuable to offend, Jon forbidden to interfere, the thing that took the child and Jeor saying Jon will see it again; the Craster page has Longclaw handed back with the warning not to lose it again (GOT203).',
    },
    '15:108': {
      source: WL_JON_IV,
      note: 'Jon IV (site 108): the ringfort on the Fist, waiting for the Shadow Tower’s men, the rangers kept close, one man finding two hundred more easily than the reverse, Benjen who may return as a wight, Dywen smelling cold at the stew, Ghost leading Jon outside the ring to a freshly dug mound, and the Night’s Watch cloak with dragonglass and an old warhorn.',
    },
    '15:chapter': {
      source: WL_JON_V,
      note: 'Jon V (site 117): Qhorin’s hundred from the Shadow Tower, his knowing Eddard and Rickard, the dragonglass daggers for Jon, Grenn and Jeor, the horn given to Sam, the captive’s wargs, mammoths and the plan to breach the Wall, the advice to scout the mountains, the three parties, and Qhorin choosing Jon because the old gods are still strong beyond the Wall. In the books Jon stays Mormont’s steward, lent to Qhorin.',
    },
    '15:episode': {
      source: `${SHOW}Qhorin`,
      note: 'Qhorin page (GOT205): the rendezvous at the Fist, the wildlings organizing under Mance, the lookouts and the small party Qhorin offers to lead, Jon asking to join, Jeor’s objections (not a ranger, beaten by Craster), Qhorin defending him, and Sam taking on his duties; the Eddison Tollett page has the single horn blast and Jon naming the Halfhand (GOT205). Jon’s role step sits at 15/117.',
    },
    '16:chapter': {
      source: WL_JON_VI,
      note: 'Jon VI (site 125): the watchers in the Skirling Pass, the climb with Stonesnake, the horn watcher and the man by the fire, the sleeping spearwife Ygritte who yields, Stonesnake’s warning, the tale of Bael the Bard and the shared blood Jon does not believe, Qhorin’s men wanting her killed, Jon left alone with her, Mance accepting him if he ran off with her, and Jon stopping and telling her to run.',
    },
    '16:episode': {
      source: `${SHOW}Jon_Snow`,
      note: 'Jon Snow page (GOT206): the ambush on the watchers, the hesitation before a young woman, Ygritte, Qhorin leaving Jon to execute her, Jon unable to, her escape and recapture, the party lost, the cold night and her advances rejected to keep his oath; the episode synopsis has the rest going on up the mountain (GOT206).',
    },
    '17:chapter': {
      source: WL_JON_VII,
      note: 'Jon VII (site 127): Jon telling Qhorin what Ygritte said, Qhorin knowing he let her go and saying he would have had Ebben do it, the night marches, the dream through Ghost’s eyes, the three-eyed weirwood with his brother’s face, the host and the giants on mammoths, the eagle, Qhorin taking the wolf dream seriously, the eagle watching them at dusk, Ghost found wounded, the turn back to the Fist for fear they have been seen, and Dalbridge staying behind with all the arrows. No season-2 episode adapts Jon VII; episode 17 orders it, as it orders Ebben’s and Dalbridge’s gates.',
    },
    '17:episode': {
      source: `${SHOW}Jon_Snow`,
      note: 'Jon Snow page (GOT207): Ygritte’s legs untied and hands bound, the search for the raiders, the taunt about his virginity, why the Watch hates the wildlings, the First Men and the wrong side of the Wall, the urging to forget his oath, the hand to his sword, the trip with the rope, the ambush and capture, and “should have taken her when he had the chance” (GOT207). Jon’s captured status sits at 17/127.',
    },
    '18:142': {
      source: `${SHOW}Jon_Snow`,
      note: 'Jon Snow page (GOT208): Ygritte bringing Jon to the Lord of Bones, persuading him that Mance will want to question him, Qhorin his prisoner, the men killed searching for Jon, the plan to make him a spy, and the feigned anger until Qhorin is restrained; the Lord of Bones page has the order to execute him and the Stark blood (GOT208). The leader stays unnamed: his record is the books’.',
    },
    '20:chapter': {
      source: WL_JON_VIII,
      note: 'Jon VIII (site 142): Ebben sent east with the last garron, Stonesnake sent on foot after his mare breaks a leg, the oath recited together, the order to yield and not balk, the hunters with the Lord of Bones, Ygritte and Ebben’s head, “I was warned bastard blood is craven”, the command to kill Qhorin, Ghost biting his calf, the wildlings accepting Jon, and Mance marching on the Wall. Jon’s role step sits at 20/142.',
    },
    '20:episode': {
      source: EPISODE_20,
      note: 'Beyond the Wall synopsis: the march to Mance’s camp, Qhorin stunning a captor and taking a sword, the Lord of Bones letting them fight, Ygritte giving Jon back his sword, the insult to his parentage, the killing, “We are the watchers on the Wall”, the bonds cut, and the army in the valley (GOT210). Jon’s role step and his freedom sit at 20/142. The leader stays unnamed: his record is the books’.',
    },
  },
  'jeor-mormont': {
    '3:20': {
      source: WALL_JON_III,
      note: 'Site chapter 20: Jon runs to the Lord Commander’s chambers and learns that Bran has woken but is crippled, then swings Tyrion in the air. The Ice and Fire Wiki’s Jeor page has Jon too happy to take in the crippling.',
    },
    '3:episode': {
      source: EPISODE_3,
      note: 'Show only: Jeor watching the recruits with Tyrion, wanting Alliser only to make men of thieves and runaways, then with Aemon asking Tyrion to get the Watch more men, and Tyrion agreeing to take word to the queen.',
    },
    '3:chapter': {
      source: WALL_TYRION_III,
      note: 'Book only, site chapter 22: the officers’ supper, Mormont asking Tyrion to speak to the king, his father and brother, wildlings fleeing south and fisherfolk near Eastwatch seeing the Others. His composure at the jibes is on the Jeor Mormont page; his regret over Waymar and disbelief at Gared turning are on the Gared page, citing this chapter.',
    },
    '7:49': {
      source: EPISODE_7,
      note: 'Both media: the recruits taken into the Watch, the posts handed out, Jon made Mormont’s own steward (at Mormont’s request in Jon VI, site 49, on A Wiki of Ice and Fire), Jon’s anger, Sam’s grooming remark and the vows before a heart tree beyond the Wall.',
    },
    '8:53': {
      source: EPISODE_8,
      note: 'Both media: the bodies found and carried back, Mormont wanting Aemon to examine them, the news of Eddard’s arrest and the warning not to do anything stupid, Othor’s corpse coming for Mormont and Jon burning it (episode 8 synopsis; Jon VII, site 53, on A Wiki of Ice and Fire).',
    },
    '9:episode': {
      source: EPISODE_9,
      note: 'Show only: Longclaw for saving his life, meant for Jorah who disgraced himself and fled into exile, Jon reinstated, and Alliser sent to King’s Landing with the wight’s hand to ask for aid. Jorah is the show’s alone (#1352).',
    },
    '9:chapter': {
      source: WALL_AGOT_60,
      note: 'Book only, Jon VIII (site 61): Longclaw, five centuries in House Mormont, the pommel remade as a white wolf’s head after the fire in the tower, Jon’s attempt to refuse, the sword earned by the quick thinking with fire, and Alliser sent with a dead man’s hand, a thousand leagues from Jon. Corrected after review: the hand is not named Jafer’s here, since only A Clash of Kings says so.',
    },
    '10:71': {
      source: EPISODE_10,
      note: 'Both media: the desertion let pass because the Watch would have no men left otherwise, the war of Starks and Lannisters set below the threat beyond the Wall, and the ranging in force to find Benjen (episode 10 synopsis; Jon IX, site 71, on A Wiki of Ice and Fire).',
    },
    '11:80': {
      source: WL_JON_I,
      note: 'Jon I (site 80): Smallwood arguing that the Lord Commander’s place is at Castle Black, Mormont refusing to wait on a third lost ranging, Benjen First Ranger until his death is confirmed, the complaint that Smallwood called him too old, the maps, Aemon’s refusal of the crown and the question of what Jon will do. No season-2 episode adapts Jon I, so episode 11 orders it.',
    },
    '11:chapter': {
      source: WL_JON_III,
      note: 'Jon III (site 97): the order to leave Craster’s wives alone, the empty villages and the wights told in the hall, the escort refused, the axe as a guest gift, the ride where Mormont says Craster gives his sons to the wood and all the rangers know, the keep that has saved rangers’ lives, Craster having sworn no vows, and Mance gathering at the Frostfangs to be found and stopped.',
    },
    '11:episode': {
      source: `${SHOW}Jeor_Mormont`,
      note: 'Jeor Mormont page (GOT201): months of travel and the abandoned villages, Craster’s Keep, Benjen not seen in years, the wildlings under Mance, the reprimand outside and “learn how to follow”; the Craster page has the axe handed over, Mance marching south, the offer to stay accepted and the rule about his wives (GOT201).',
    },
    '13:97': {
      source: EPISODE_13,
      note: 'At Craster’s Keep: Jon dragged back, the Watch ordered out, Jeor having known all along, the disgust and the value of Craster’s shelter and information, Benjen among those helped, Jon forbidden to interfere and told he will see it again; the Craster page has Longclaw handed to the Lord Commander and given back to Jon (GOT203).',
    },
    '15:108': {
      source: WL_JON_IV,
      note: 'Jon IV (site 108): the Fist as good, defensible ground, the wait for the Shadow Tower’s men, Buckwell and Locke on the roads to the Frostfangs, Mormont unwilling to risk them, the wildlings outnumbering the Watch and needing food, the rangers kept close, one man finding two hundred, and Benjen perhaps returning as a wight.',
    },
    '15:chapter': {
      source: WL_JON_V,
      note: 'Jon V (site 117): in Jeor’s tent, the captive’s wargs and mammoths, the breach of the Wall, Mance seeking a power in the Frostfangs, the advice to send scouts, Buckwell with four men to the Giant’s Stair, Smallwood to probe the Milkwater, Qhorin to the Skirling Pass, and Jon chosen. The pass stays unnamed here: its book gate is 125.',
    },
    '15:episode': {
      source: `${SHOW}Jeor_Mormont`,
      note: 'Jeor Mormont page (GOT205): the camp on the Fist awaiting Qhorin, the lookouts, Mance’s past as a deserter of the Watch, the shift to wildling tactics with a small group, Jon’s request accepted with Qhorin’s encouragement and Sam’s promise; the Qhorin page has the objections (not a ranger, beaten by Craster) (GOT205).',
    },
  },
  'aemon': {
    '3:episode': {
      source: EPISODE_3,
      note: 'Show only: Aemon as Mormont’s ancient, blind chief adviser, warning Tyrion that the Stark words are right, that the winter will be worse than any in living memory and that worse than wildlings may come, and Tyrion agreeing to take word to his queen.',
    },
    '3:chapter': {
      source: WALL_TYRION_III,
      note: 'Book only, site chapter 22: the officers’ supper, Alliser storming out under Tyrion’s taunts, and Aemon calling Tyrion a giant. The Ice and Fire Wiki’s Aemon page has Tyrion calling him kind in return.',
    },
    '5:42': {
      source: WALL_AGOT_41,
      note: 'Book only, Jon V (site 42): Chett at the door, Aemon receiving Jon by the fire, the request for Sam, Aemon leaving training to Alliser, Chett’s objection about cowards, Sam’s reading, writing and sums, and the promise to think on it.',
    },
    '7:49': {
      source: EPISODE_7,
      note: 'Both media: Sam made Aemon’s steward, Jon’s complaint about being made a steward meeting no sympathy, and the vows before a heart tree. In Jon VI (site 49) on A Wiki of Ice and Fire, Aemon answers that they took him for a man of the Watch.',
    },
    '9:61': {
      source: EPISODE_9,
      note: 'Both media: Aemon sees Jon torn, reveals that he is the son of a king and brother of another, recalls staying at the Wall, old and blind, while his house was destroyed, and leaves the choice to Jon (episode 9 synopsis; Jon VIII, site 61, on A Wiki of Ice and Fire).',
    },
  },
  'samwell-tarly': {
    '4:27': {
      source: EPISODE_4,
      note: 'Both media: the arrival, Alliser’s mockery and the others set on him, Jon in the way, the confession of cowardice, Lord Randyll’s choice of the black or a hunting accident, the plan to go easy and Rast frightened with Ghost (episode 4 synopsis; Jon IV, site 27, and the Samwell Tarly page on the Ice and Fire Wiki).',
    },
    '7:49': {
      source: EPISODE_7,
      note: 'Both media: Sam made Aemon’s steward, his grooming remark to Jon, the vows beside Jon before a heart tree beyond the Wall because the Seven never answered him, and Ghost with the hand (episode 7 synopsis; Jon VI, site 49, on A Wiki of Ice and Fire).',
    },
    '8:53': {
      source: EPISODE_8,
      note: 'Both media: Sam with the party that brings the bodies back, noting they look long dead yet have not rotted (corrected after review to what both media tell), Mormont wanting Aemon to examine them, and Othor’s corpse burned by Jon (episode 8 synopsis; Jon VII, site 53, on A Wiki of Ice and Fire, where Sam goes as Aemon’s eyes).',
    },
    '9:61': {
      source: EPISODE_9,
      note: 'Show only: the brothers fussing over Longclaw while Sam keeps apart, Sam telling Jon that Robb has led an army south to war, and Aemon, after speaking of the vows, saying he cannot make Jon stay or go (corrected after review to agree with the Aemon and Jon stories). Sam’s news is the show’s alone (#1352).',
    },
    '10:episode': {
      source: EPISODE_10,
      note: 'Show only: Sam’s plea, the pursuit with Grenn and Pyp, Sam knocked from his horse by a branch and Jon turning back for him, and the vows recited until Jon returns.',
    },
    '10:chapter': {
      source: WALL_AGOT_70,
      note: 'Book only, Jon IX (site 71): Sam in the stable doorway, Jon spurring the mare so Sam has to leap aside, Sam waking his friends rather than the Lord Commander, and Grenn, Pyp, Toad, Halder and Matthar bringing Jon back an hour before dawn.',
    },
    '11:80': {
      source: WL_JON_I,
      note: 'Jon I (site 80): Sam in the vaults all night, the maps and the treasures of the library, “if we return”, going in Maester Aemon’s place to tend the two cages of ravens, Jon saying they are all scared and what matters is how they face it, and Mormont wanting the best ravens so that his successor knows where and how, leaving Sam speechless. Sam’s role step sits at 11/80; no season-2 episode adapts Jon I.',
    },
    '11:87': {
      source: WL_JON_II,
      note: 'Jon II (site 87): Sam watering the horses that carry the raven cages, three ravens taught to say snow, the report on Whitetree sent with the wish that it could carry him back, Sam less frightened now that he knows there are no wildlings around, and Jon’s thought that only the self-confessed coward is growing less afraid. No season-2 episode adapts Jon II, so episode 11 orders it.',
    },
    '11:chapter': {
      source: WL_JON_III,
      note: 'Jon III (site 97): Sam with the baggage repeating what Eddison Tollett and Dywen say of Craster, Craster asking for a man who can draw maps, Jon naming Sam, Gilly wearing Sam’s cloak at dawn, Sam behind the hall with her, his hope to do something for her and to take her when they come back. Gilly is named unlinked: her show gate is 15.',
    },
    '11:episode': {
      source: `${SHOW}Grenn`,
      note: 'Grenn page (GOT201): the sledge pushed through the mud, Sam’s weight, the offered ride and the blisters, the women around the keep, Craster marrying his daughters and breeding more daughters, Sam and Grenn’s disgust; the Samwell Tarly page has Craster’s news of Mance (GOT201). Edd, who explains, is not named: his show gate is 20.',
    },
    '12:97': {
      source: `${SHOW}Gilly`,
      note: 'Gilly page (GOT202): Ghost drawn by her dead rabbit, Sam telling him to get away, Gilly noting his courage and asking to be taken away, Jon refusing and her silence on what Craster does; the Grenn page has the potatoes, Violet the milkmaid and Sam wishing he grew up on a farm, and the episode synopsis the argument (GOT202). Gilly is not named: her show gate is 15.',
    },
    '13:97': {
      source: `${SHOW}Gilly`,
      note: 'Gilly page (GOT203): the Watch expelled after Jon is caught, Sam finding Gilly at her chores, his mother’s thimble, the reading while she sewed ended by his father, the only possession he has from her, and the promise to return for her (GOT203). Gilly is not named: her show gate is 15.',
    },
    '15:chapter': {
      source: WL_JON_V,
      note: 'Jon V (site 117): the cracked warhorn given to Sam because it makes no sound and he likes ancient things, the dragonglass spearhead and dozen arrowheads, the daggers for Jon, Grenn and Jeor, Qhorin’s arrival from the Shadow Tower and Jon chosen for his party; the find itself is Jon IV (site 108).',
    },
    '15:episode': {
      source: `${SHOW}Samwell_Tarly`,
      note: 'Samwell Tarly page (GOT205): Sam amazed at the Fist and assuming Jon’s duties as steward so that Jon can go with Qhorin; the Grenn page has the First Men, the horn blasts, three for White Walkers after a thousand years and the book mocked (GOT205). Sam’s role step sits at 15/117.',
    },
    '18:142': {
      source: `${SHOW}Eddison_Tollett`,
      note: 'Eddison Tollett page (GOT208): digging latrines, Jon and the Halfhand perhaps dead, Grenn lifting the stone tablet with runes, the cache of mostly spearheads and a horn in a Night’s Watch cloak, and Sam identifying dragonglass; the Samwell Tarly page has Sam refusing to give up hope (GOT208). Edd is not named: his show gate is 20.',
    },
    '20:142': {
      source: `${SHOW}Samwell_Tarly`,
      note: 'Samwell Tarly page (GOT210): collecting dung, the three horn blasts, the panic, Sam tripping and left behind, the blizzard, the rock, the wights and White Walkers, the mounted White Walker that notices and ignores him and orders the wights on; the Eddison Tollett page has the talk of Gilly and Edd’s snark, and the episode synopsis the spear raised with a shriek (GOT210).',
    },
  },
  'alliser-thorne': {
    '3:20': {
      source: EPISODE_3,
      note: 'Both media: the master-at-arms who trains the recruits with contempt, has no praise for Jon and calls him Lord Snow (episode 3 synopsis; Jon III, site 20, and the Alliser Thorne page on the Ice and Fire Wiki, which says he gave Jon the name).',
    },
    '3:22': {
      source: WALL_TYRION_III,
      note: 'Book only, site chapter 22: Tyrion angers Alliser, who storms out, and Jaremy says Tyrion’s father gave him and Alliser the choice of execution or the Watch after the sack of King’s Landing. The challenge before he leaves is on the Ice and Fire Wiki’s Alliser page.',
    },
    '4:27': {
      source: EPISODE_4,
      note: 'Both media: Sam humiliated and set upon, Jon defending him, more recruits sent against Jon, and Alliser angry when the recruits stop hurting Sam (episode 4 synopsis; Jon IV, site 27, and the Alliser page on the Ice and Fire Wiki).',
    },
    '8:53': {
      source: EPISODE_8,
      note: 'Both media: the arrest of Eddard, Mormont’s warning, the traitor’s bastard taunt, the knife and the friends holding Jon back (episode 8 synopsis; Jon VII, site 53, on A Wiki of Ice and Fire).',
    },
    '9:61': {
      source: EPISODE_9,
      note: 'Both media: Mormont sends Alliser to King’s Landing with the hand of the wight to ask the king for aid (episode 9 synopsis; Jon VIII, site 61, on A Wiki of Ice and Fire).',
    },
  },
  'yoren': {
    '3:14': {
      source: WALL_TYRION_II,
      note: 'Book only, site chapter 14: Yoren, a wandering crow, joins the party with two rapers. The Ice and Fire Wiki’s Yoren page has the squirrel for the stew and the choice of the Wall over castration; its Jon page has Jon disillusioned by Yoren and his recruits on the way north.',
    },
    '3:22': {
      source: `${SHOW}Yoren`,
      note: 'Show only, Season 1, citing GOT103: Tyrion befriending him for his humor, the strangest things eaten, the farewell to his friend Benjen, his presence when Mormont asks for help, and the trip south with Tyrion for recruits from the dungeons.',
    },
    '5:33': {
      source: `${SHOW}Yoren`,
      note: 'Both media: Yoren at the inn when Catelyn takes Tyrion (GOT104) and riding to warn Eddard (GOT105). In the books he is at the inn in Catelyn V (site 29) and tells Eddard in Arya III (site 33), as the Ice and Fire Wiki’s Yoren page and the check for #1352 confirm; Corrected after review: the request for recruits is dropped, since no page dates it by chapter 33.',
    },
    '9:66': {
      source: `${SHOW}Yoren`,
      note: 'Both media: at the execution Yoren grabs Arya as she pushes toward her father with her sword and keeps her from seeing it (GOT109; Arya V, site 66, on A Wiki of Ice and Fire, where he holds her tight and tells her not to look).',
    },
    '10:73': {
      source: `${SHOW}Yoren`,
      note: 'Show only, citing GOT110: Arya’s hair cut, Arry the orphan boy, the plan to take her to Winterfell among the recruits and the warning about them. Gendry among the recruits is the relationship pin at 10/73.',
    },
    '10:75': {
      source: `${ACOK_AWOIAF}1`,
      note: 'Arya I (site 75): out of King’s Landing with the recruits and the three men from the black cells, Arya beating Hot Pie, Yoren whipping her with her own stick and warning she will get twice what she gives, and his having waited to take Lord Eddard to the Wall. Episode 10 orders it.',
    },
    '12:episode': {
      source: `${SHOW}Yoren`,
      note: 'Yoren page, Season 2: the warning about the caged prisoners, two gold cloaks with a warrant for Gendry, the dagger at the leader’s groin, the sword taken (“good steel”), the promise to return with more men (GOT202).',
    },
    '12:chapter': {
      source: `${ACOK_AWOIAF}5`,
      note: 'Arya II (site 79): six gold cloaks with the queen’s warrant for a boy, “That’s no law, just a sword. Happens I got one too.”, the recruits behind him, his sword at the officer’s throat, the ride through the night and the order to Gendry and Arya to flee for the Wall.',
    },
    '13:episode': {
      source: `${SHOW}Yoren`,
      note: 'Yoren page: the story of Willem and the name said every night, the horns, the refusal to give up Gendry, the quarrel in the shoulder, the crossbowman killed, Yoren overwhelmed and killed by the knight leading them (Amory Lorch, unnamed here: his show gate is 16) (GOT203).',
    },
    '13:chapter': {
      source: `${ACOK_AWOIAF}14`,
      note: 'Arya IV (site 88): the burnt bridge, the empty town and the holdfast, Ser Amory Lorch in Lord Tywin’s and King Joffrey’s name, Yoren showing his black cloak and refusing, the storm of the walls, Yoren sending Arya to the tunnel and going back to the fight; there is no sign of him when she returns.',
    },
    '13:93': {
      source: `${ACOK_AWOIAF}19`,
      note: 'Arya V (site 93): the return to the holdfast the next night, Yoren found beside four Lannister men-at-arms, Arya wondering how many it took, her insistence on a grave, the burial; Cutjack, Kurz and Tarber from the towerhouse, who later leave them. Arya IV (site 88) only has no sign of him. Episode 13 orders it.',
    },
  },
  'will': {
    '1:1': {
      source: WALL_PROLOGUE,
      note: 'Book only, the Prologue: Will reports the wildlings dead with no blood, leads Waymar back to find the bodies gone, is sent up a sentinel tree, watches the Others kill Waymar and is strangled by Waymar risen with a blue eye.',
    },
    '1:2': {
      source: `${SHOW}Will`,
      note: 'Show only, filed at chapter 2 so it may link Eddard. Season 1, citing GOT101: the wildling corpses arranged in a pattern, the bodies gone, the dead girl walking, Gared beheaded by a White Walker, the flight south, capture near Winterfell, the plea about his mother and the execution.',
    },
  },
  'gared': {
    '1:chapter': {
      source: WALL_PROLOGUE,
      note: 'Book only, the Prologue: the oldest of the three, decades in the Watch, wanting to turn back, mocked by Waymar, left with the horses and forbidden a fire.',
    },
    '1:episode': {
      source: `${SHOW}Gared`,
      note: 'Show only, Season 1, citing GOT101: the ranging into the Haunted Forest, Gared advising a return, the bodies gone, the bloody clothing, Waymar killed by a White Walker and Gared caught and beheaded.',
    },
    '1:2': {
      source: WALL_BRAN_I,
      note: 'Book only, site chapter 2: the deserter with ears and a finger lost to frostbite, questioned and beheaded by Eddard, the head kicked by Theon and Jon calling Theon an ass. The Ice and Fire Wiki’s Gared page names him as the deserter, caught near Winterfell; the record files his death here.',
    },
  },
  'waymar-royce': {
    '1:chapter': {
      source: WALL_PROLOGUE,
      note: 'Book only, the Prologue: a highborn youth of eighteen on his first ranging, mocking Gared, sending Will up a tree, facing the Other, the sword shattering, the Others cutting him down, and Waymar risen with his remaining eye blue, strangling Will.',
    },
    '1:episode': {
      source: `${SHOW}Waymar_Royce`,
      note: 'Show only, Season 1, citing GOT101: the ranging, Will finding the corpses, Gared’s advice overridden, the bodies gone and Waymar slain by a White Walker in front of Gared.',
    },
  },
  'grenn': {
    '3:20': {
      source: `${SHOW}Grenn`,
      note: 'Both media: Jon beats and hurts him (his nose in GOT103, his wrist in Jon III on the Ice and Fire Wiki), Grenn and others go after Jon in the armory and are stopped (Tyrion on screen, Donal Noye in the book), and Jon offers to teach him. The relationship pin at 3/20 holds this in both media.',
    },
    '4:27': {
      source: `${SHOW}Grenn`,
      note: 'Both media: Grenn scorning Sam’s cowardice, agreeing to go easy on him, and Rast frightened with Ghost (GOT104; the Ice and Fire Wiki’s Grenn page for Jon IV, site 27, and its Alliser page for Alliser’s anger).',
    },
    '10:71': {
      source: EPISODE_10,
      note: 'Both media: Grenn among the rangers (GOT107; Jon VI), riding after Jon with Pyp, reciting the vows and bringing him back (episode 10 synopsis; Jon IX, site 71, on A Wiki of Ice and Fire).',
    },
    '7:49': {
      source: EPISODE_7,
      note: 'Both media, added after review: the recruits taken in, Grenn to the rangers (GOT107, on his page; Jon VI, site 49, on A Wiki of Ice and Fire) and Jon to the stewards.',
    },
    '11:97': {
      source: `${SHOW}Grenn`,
      note: 'Grenn page (GOT201): the sledge, Sam’s weight, the offered ride and the blisters, the warning not to speak to the women, Grenn’s question about Craster’s daughters, the answer that they are also his wives, and Sam and Grenn’s disgust (GOT201). Edd, who gives the warning, is not named: his show gate is 20.',
    },
    '15:117': {
      source: WL_JON_V,
      note: 'Jon V (site 117): the dragonglass daggers for Jon, Grenn and Jeor, the rest shared among his friends, and Qhorin choosing Jon; Jon IV (site 108) has Grenn at the stew with Dywen smelling cold and Ghost leading Jon to the cache.',
    },
    '18:142': {
      source: `${SHOW}Eddison_Tollett`,
      note: 'Eddison Tollett page (GOT208): the latrines, the talk of Jon and the others perhaps dead, Grenn finding the tablet with runes of the First Men, told to leave it and lifting it anyway, the spearheads and horn in a Night’s Watch cloak, and Sam identifying dragonglass; the Grenn page has the same (GOT208). Edd is not named: his show gate is 20.',
    },
    '20:142': {
      source: `${SHOW}Eddison_Tollett`,
      note: 'Eddison Tollett page (GOT210): the frozen dung, the first and second blasts, Grenn drawing his sword, Edd telling them to return to the Fist, the third blast and the scream to run, and Sam left behind unnoticed; the Grenn page has the complaint about wildlings and burning droppings (GOT210).',
    },
  },
  'pypar': {
    '3:20': {
      source: EPISODE_3,
      note: 'Both media: Pyp a recruit under Alliser, Jon beating the others in the yard and his castle training (episode 3 synopsis and the Pypar page, GOT103; Jon III, site 20, where Pypar is on the Appearing list, and the Ice and Fire Wiki’s Jon page).',
    },
    '4:27': {
      source: `${SHOW}Pypar`,
      note: 'Both media: Pyp at first holding Jon back from interfering, going along with the plan, and Rast warned off with Ghost (GOT104; the Ice and Fire Wiki’s Pypar page for Jon IV, site 27).',
    },
    '7:episode': {
      source: `${SHOW}Pypar`,
      note: 'Show only, citing GOT107: Pyp sent to the stewards with Jon and Sam, his confession about the lord he refused instead of the cheese, Sam’s request for a song and Pyp walking off. In the book he goes to the rangers.',
    },
    '10:71': {
      source: EPISODE_10,
      note: 'Both media: Pyp riding after Jon with Grenn, reciting the vows and bringing him back (episode 10 synopsis; Jon IX, site 71, on A Wiki of Ice and Fire).',
    },
    '7:chapter': {
      source: WALL_AGOT_48,
      note: 'Book only, added after review: Jon V (site 42) has Alliser passing eight recruits and Pyp squirting the wineskin in Jon’s face; Jon VI (site 49) names him to the rangers with Grenn, Todder and Matthar, and Jon to the stewards (A Wiki of Ice and Fire).',
    },
  },
  'rast': {
    '3:27': {
      source: `${SHOW}Rast`,
      note: 'Show only, filed at chapter 27, the book gate. Season 1: a rapist joining the party with Yoren (GOT102), beaten with Grenn and Pyp, the threat in the armory ended by Tyrion, and no respect for Jon (GOT103).',
    },
    '4:chapter': {
      source: WALL_JON_IV,
      note: 'Book only, site chapter 27, filed at episode 4 so it may link Sam: Rast and Albett sent to help Halder, beaten by Jon with Grenn and Pyp, Rast refusing to go easy, and the night visit. The Ice and Fire Wiki’s Rast page has Ghost nipping his neck and the shaving excuse.',
    },
    '4:episode': {
      source: `${SHOW}Rast`,
      note: 'Show only, citing GOT104: Rast humiliating Sam on Alliser’s orders, the side of bacon, waking pinned down with Ghost on his chest, and refusing to beat Sam afterwards.',
    },
    '7:49': {
      source: `${SHOW}Rast`,
      note: 'Show only, added after review, citing GOT107: Rast assigned to the rangers. Jon warning him off Sam with Ghost is GOT104.',
    },
  },
  'dareon': {
    '7:20': {
      source: WALL_JON_III,
      note: 'Book only, site chapter 20: Dareon on the Appearing list of the recruits. Jon beating each of them and earning their ire and Alliser’s is on the Ice and Fire Wiki’s Jon page for this chapter.',
    },
    '7:episode': {
      source: `${SHOW}Dareon`,
      note: 'Show only, citing GOT107: present at the speech, assigned to the stewards, and sent by Aemon to Eastwatch to present himself to Borcas.',
    },
    '7:chapter': {
      source: WALL_AGOT_48,
      note: 'Book only, Jon VI (site 49): Dareon to the stewards with Sam and Jon, sent by Bowen Marsh to Eastwatch to work with the merchants, and angered by Jon’s tantrum because he was sent to the Wall on a false accusation.',
    },
  },
  'halder': {
    '7:20': {
      source: WALL_JON_III,
      note: 'Book only, site chapter 20: Halder on the Appearing list, Alliser’s contempt, Jon beating the others and Donal Noye’s lesson about their lack of training.',
    },
    '7:27': {
      source: WALL_JON_IV,
      note: 'Book only, site chapter 27: Halder, a stonemason’s apprentice, sent against Sam and told to keep hitting him with the flat of his blade, then beaten with Rast and Albett. The Ice and Fire Wiki’s Halder page has his blow to Jon’s shoulder and his quick agreement to protect Sam.',
    },
    '7:episode': {
      source: `${SHOW}Halder`,
      note: 'Show only, citing GOT107: present at the speech and assigned to the builders.',
    },
    '10:71': {
      source: WALL_AGOT_70,
      note: 'Book only, Jon IX (site 71): Halder with Grenn, Pyp, Toad and Matthar, hearing the mare and asking the others to be quiet, the vows recited and the return before dawn. He is a builder since Jon VI (site 49).',
    },
    '7:chapter': {
      source: WALL_AGOT_48,
      note: 'Book only, added after review: Jon V (site 42) has Alliser passing eight recruits, Halder among them; Jon VI (site 49) names Halder and Albett to the builders and Jon to the stewards (A Wiki of Ice and Fire).',
    },
  },
  'todder': {
    '30:20': {
      source: WALL_JON_III,
      note: 'Book only, at the show gate (episode 30): Toad, Grenn and the two rapers confronting Jon, the fight and Donal Noye breaking it up. Corrected after review: A Wiki of Ice and Fire tells the fight differently from the Ice and Fire Wiki, so the story no longer says who pins whom. Fed up with being beaten is on the Ice and Fire Wiki’s Todder page.',
    },
    '30:71': {
      source: WALL_AGOT_70,
      note: 'Book only, Jon IX (site 71): Toad with Grenn, Pyp, Halder and Matthar bringing Jon back.',
    },
    '31:49': {
      source: WALL_AGOT_48,
      note: 'Book only, at the episode after his show gate, where his sworn role steps: added after review. Jon V (site 42, A Wiki of Ice and Fire) has Alliser passing eight recruits, Todder and Jon among them; Jon VI (site 49) names Grenn, Pypar, Todder and Matthar to the rangers and Jon to the stewards.',
    },
  },
  'othell-yarwyck': {
    '7:49': {
      source: `${SHOW}Othell_Yarwyck`,
      note: 'Both media: the First Builder, among the officers at the induction (GOT107; the Ice and Fire Wiki’s Othell page for Jon VI, site 49). Halder to the builders in both (GOT107; Jon VI). Corrected after review: the vows are left out, since the Jon VI synopsis on A Wiki of Ice and Fire sends Bowen Marsh, not Othell, to the grove; the show’s Othell at the heart tree is in his 8/53 story.',
    },
    '8:53': {
      source: `${SHOW}Othell_Yarwyck`,
      note: 'Show only, citing GOT107 and GOT108: witnessing the vows at the heart tree, congratulating Jon and Sam, his party bringing back the bodies, confirming they do not smell, and wanting them burned before Mormont overrules him. The book does not send him to the grove.',
    },
  },
  'bowen-marsh': {
    '41:22': {
      source: WALL_TYRION_III,
      note: 'Book only, at the show gate (episode 41): Bowen at the Lord Commander’s table with Aemon and Jaremy. His remark on how much Tyrion drinks is the relationship pin at 41/22, from a full read of the chapter for #1350; his defense of Alliser is on the Ice and Fire Wiki’s Bowen page.',
    },
    '41:49': {
      source: WALL_AGOT_48,
      note: 'Book only, Jon VI (site 49): Bowen assigns Sam to the library and rookery because Chett goes to the kennels, Dareon to Eastwatch and Jon to Mormont at his request, unlocks the three gates under the Wall, and declares Jon and Sam men of the Watch at the grove.',
    },
  },
  'jaremy-rykker': {
    '7:22': {
      source: WALL_TYRION_III,
      note: 'Book only, site chapter 22: Jaremy at the supper says Tyrion’s father gave him and Alliser the choice of execution or the Watch after the sack of King’s Landing. That he fought for Aerys is on the Ice and Fire Wiki’s Jaremy page.',
    },
    '7:49': {
      source: `${SHOW}Jaremy_Rykker`,
      note: 'Show only, citing GOT107: acting First Ranger in Benjen’s absence, summoning the rangers after the speech, leading the escort for Jon and Sam to the godswood and embracing them after their vows.',
    },
    '8:53': {
      source: WALL_AGOT_52,
      note: 'Book only, Jon VII (site 53): Ghost leading the rangers to the bodies, Jaremy naming Othor and Jafer, his complaint about too few men, the blame on wildlings, a day dead at most, Sam’s dry blood and no rot, and Mormont’s order to search ten leagues around.',
    },
    '8:61': {
      source: WALL_AGOT_60,
      note: 'Book only, Jon VIII (site 61): the other wight hacked to pieces after killing Jaremy and four men. The Game of Thrones Wiki’s Jaremy page, In the books, citing this chapter, has the head hacked off and his own dagger in his bowels; his death is the record’s book status at 8/61.',
    },
  },
  'othor': {
    '8:53': {
      source: EPISODE_8,
      note: 'Both media: one of Benjen’s missing party (the 8/20 book story was dropped after review, since no page places a chapter 20 scene of his, and its bawdy songs are the books’ alone, so they stay out of this story), the body found beside Jafer’s and brought back, Mormont wanting Aemon to examine it, the corpse rising and attacking Mormont, the arm cut off without stopping it, and Jon burning it (episode 8 synopsis and the Othor page, GOT108; Jon VII, site 53, on A Wiki of Ice and Fire).',
    },
  },
  'jafer-flowers': {
    '8:episode': {
      source: `${SHOW}Jafer_Flowers`,
      note: 'Show only, citing GOT107 and GOT108: Ghost finding his severed hand, the bodies found by Othell’s party and brought back, Mormont wanting Aemon to examine them, the corpses rising and Jafer causing trouble elsewhere before he is put down and burned.',
    },
    '8:chapter': {
      source: WALL_AGOT_52,
      note: 'Book only, Jon VII (site 53): the hand from the grove was Jafer’s right hand, Jaremy names the bodies, the axe blow to the neck, Dywen recalling Othor’s axe, the black hands and blue eyes, and the bodies carried back for Aemon.',
    },
    '8:61': {
      source: WALL_AGOT_60,
      note: 'Book only, Jon VIII (site 61): the other wight kills Jaremy and four men before it is hacked apart, and Alliser takes a dead man’s hand to King’s Landing to get the king’s attention; corrected after review, the hand is not named Jafer’s here, since only A Clash of Kings says so. The headless body and the dagger are on the Jafer Flowers page of the Game of Thrones Wiki, In the books.',
    },
  },
  'donal-noye': {
    '3:20': {
      source: `${BOOKS}Donal_Noye`,
      note: 'Book only, site chapter 20: the one-armed armorer who breaks up the armory fight and tells Jon he had castle training the others never had and is making enemies. The warhammer is the chapter line the page quotes; sending the others away is in Jon III on the same wiki.',
    },
  },
  'chett': {
    '5:42': {
      source: WALL_AGOT_41,
      note: 'Book only, Jon V (site 42): Chett and Clydas at Aemon’s door, Chett saying the maester is asleep, the foot in the door, and Chett holding that Alliser will make a man of Sam or kill him and that a steward’s work is not for cowards.',
    },
    '8:53': {
      source: WALL_AGOT_52,
      note: 'Book only, Jon VII (site 53): Mormont orders Chett to bring a hound closer and it fights to stay away. Sam replacing him and the kennels are Bowen Marsh’s words in Jon VI (site 49).',
    },
  },
  // King’s Landing, the riverlands and the Vale (#1362).
  'tyrion-lannister': {
    '1:5': {
      source: EPISODE_1,
      note: 'Show only; chapter 5 only shows him riding in behind Jaime, so the book side opens at chapter 6. The synopsis has Cersei sending Jaime to find him in the brothel in the town outside Winterfell, the feast that night, and his talk with Jon: wear it like armour, and “all dwarfs are bastards in their father’s eyes” (GOT101 on the Tyrion page).',
    },
    '1:6': {
      source: `${BOOKS}Jon_I_-_A_Game_of_Thrones`,
      note: 'Chapter 6 (Jon I): Jon intrigued by the dwarf of Casterly Rock at the feast, Jon stumbling out of the hall, Tyrion in the courtyard wanting to stroke Ghost, who mistrusts him, and his counsel not to forget what he is and not to let the word bastard hurt him, before he returns to the hall. The armour image is on the Ice and Fire Wiki’s Tyrion page.',
    },
    '2:episode': {
      source: EPISODE_2,
      note: 'Show only: Tyrion slaps Joffrey three times until he accepts (the book has two slaps and no agreement). Synopsis: breakfast, Bran expected to live, the guarded reactions; the Tyrion page (GOT102) has the wish to piss off the Wall and the speechless arrival; the reading talk with Jon and the Watch no longer noble are in the synopsis.',
    },
    '2:chapter': {
      source: `${BOOKS}Tyrion_I_-_A_Game_of_Thrones`,
      note: 'Chapter 10 (Tyrion I): the wolf’s howl, Joffrey not having visited the Starks, two slaps and dismissal, breakfast with Jaime, Cersei, Tommen and Myrcella, Bran may wake but never walk, riding north with Benjen to urinate off the edge of the world, Jaime questioning his motives and Tyrion claiming to love his family.',
    },
    '3:episode': {
      source: EPISODE_3,
      note: 'Show only (the book dinner and Thorne’s exit are not in the episode). Synopsis: watching the training with Jeor, defusing the recruits and the master-at-arms point, Benjen’s scolding, Jeor and Aemon asking for men, his scepticism and promise to bring word to the queen, and urinating off the top before leaving with Yoren.',
    },
    '3:chapter': {
      source: `${BOOKS}Tyrion_III_-_A_Game_of_Thrones`,
      note: 'Chapter 22 (Tyrion III): dinner with Mormont and the officers, Thorne storming out, Aemon calling him a giant, Mormont’s plea with wildlings fleeing south and White Walker sightings near Eastwatch, and the last visit to the top of the Wall, where Jon on duty promises to find Benjen.',
    },
    '4:25': {
      source: `${BOOKS}Bran_IV_-_A_Game_of_Thrones`,
      note: 'Chapter 25 (Bran IV): Robb in his father’s seat with Theon, the frosty reception, Tyrion with four brothers of the Watch (Yoren among them), the saddle design, the direwolves called off one by one, the refused hospitality and his departure the next day. Episode 4 tells the saddle; the chapter is adapted there.',
    },
    '4:episode': {
      source: EPISODE_4,
      note: 'Show only: the saddle and the arrest share one episode, and the line about cripples, bastards and broken things, the brothel and the sellsword selling his room are the show’s. Synopsis: Robb’s pointed welcome, the saddle, the inn, Marillion offering a song of his father’s victories, Tyrion ending Catelyn’s anonymity, her accusation and the armed men.',
    },
    '4:chapter': {
      source: `${BOOKS}Catelyn_V_-_A_Game_of_Thrones`,
      note: 'Chapter 29 (Catelyn V): Masha Heddle’s inn, Tyrion with his two guardsmen and Yoren, the room bought from another patron, the rejected serenade, Catelyn recognised and named, the men sworn to her father’s vassals called to her aid, and Tyrion shocked. The capture is his status at 4/29.',
    },
    '5:32': {
      source: `${BOOKS}Catelyn_Stark`,
      note: `Chapter 32 (Tyrion IV) has no synopsis on its page beyond the journey towards the Eyrie and Tyrion finding a flaw in Littlefinger’s dagger story. The Catelyn page has the announced return to Winterfell, the high road, Littlefinger’s boast, Tyrion armed in the clan attack and saving her, and the bet he would never have made against Jaime; the Bronn page has him joining for a reward. The fight is pinned here because the dagger flaw follows it; unverified on the chapter text.`,
    },
    '5:35': {
      source: EPISODE_5,
      note: 'Show only. Synopsis: blindfold removed on the road to the Vale, the reward that interests Bronn, the idiot remark about his own blade, the hill tribe attack, his first kill saving Catelyn, Lysa holding court for Robin and the sky cell; the accusation over Jon Arryn’s death is on the Tyrion page (GOT105).',
    },
    '6:episode': {
      source: EPISODE_6,
      note: 'Show only. Synopsis: nearly rolling out of the cell, the bargain with Mord, the confession of being a liar and a whoremonger, the trial by combat, Vardis for Lysa, Jaime refused, Bronn stepping forward, the Moon Door, Mord paid, and “This little man is going home.”',
    },
    '6:chapter': {
      source: `${BOOKS}Vardis_Egen`,
      note: `Italian corrected after review (giubba for coat). The Vardis Egen page has Tyrion demanding a trial by combat after being accused of murdering Jon Arryn, Vardis chosen and reluctant because of Tyrion’s stature, Bronn answering, the heavy plate, the toppled statue and Lysa letting them leave by the high road; the Mord page has the gaoler taking his coat. Filed at chapter 41 (Catelyn VII), with his release (status alive at 6/41). ${PAST_CHAPTER_PAGES}`,
    },
    '8:43': {
      source: `${BOOKS}Bronn`,
      note: `Chapter 43 (Tyrion VI): the Bronn page has Bronn entering his service on the road back, the truth about Tysha, and the clansmen won round; the episode 9 page lists this chapter for Tyrion telling Bronn about Tysha. The crofter’s daughter, the age of thirteen and the annulment are on the Game of Thrones Wiki’s Tyrion page, In the books. Shagga and the promise of weapons and wealth are the relationship pin at 8/43. ${PAST_CHAPTER_PAGES}`,
    },
    '8:57': {
      source: EPISODE_8,
      note: 'Show only. The Tyrion page (GOT108) has the pay-more promise to Bronn, Shagga’s order to kill them and the alliance for the Vale, and Tywin agreeing that he fight with the tribes, to his dismay; the Kevan page (GOT108) has Tywin telling him Robert is dead and Eddard imprisoned. Timett and Chella arrive with him (Tywin page).',
    },
    '9:episode': {
      source: EPISODE_9,
      note: 'Show only (in the book he is not knocked out). Synopsis: the vanguard order and his accusation, Shae found by Bronn, the drinking game, the Tysha story with Jaime made to call her a whore he had paid, the accidental war hammer blow, and Bronn telling him the battle was a feint while the main army marched on Jaime.',
    },
    '9:chapter': {
      source: `${SHOW}Tyrion_Lannister`,
      note: `Corrected after review: Tywin’s trap plan moved to the 10:chapter story, since Tyrion IX tells it. Chapter 63 (Tyrion VIII), In the books: he holds the line at the Green Fork in the vanguard under Gregor, and Tywin had hoped he and the clans would break and run into a trap. The Bronn page (Ice and Fire Wiki) has Bronn taking Shae from a knight; the season-1 records’ gate notes have the inn at the crossroads (Tyrion VII) and Kevan giving him a squire (Tyrion VIII). That Tywin’s reasoning is told in this chapter, not the next, is unverified. ${PAST_CHAPTER_PAGES}`,
    },
    '10:episode': {
      source: EPISODE_10,
      note: `Synopsis: Jaime captured, Tywin ordering him to King’s Landing as acting Hand in his stead to control Cersei and Joffrey, the order to leave his whore behind, and Tyrion taking Shae anyway. The book side (Tyrion IX) rests on the relationship pins at 10/70 (sent as Hand in his father’s place, forbidden Shae, sent to keep Cersei and her son in check) and Tywin’s role as Hand from 10/58. ${PAST_CHAPTER_PAGES}`,
    },
    '10:chapter': {
      source: `${SHOW}Tyrion_Lannister`,
      note: `Added after review, the book side of the 10/70 story: Tyrion IX (site 70) tells that his father put him and the clans in the vanguard hoping they would break and draw the Starks into a trap, and that holding his ground spoiled it. The rest repeats the show story. ${PAST_CHAPTER_PAGES}`,
    },
    '11:episode': {
      source: EPISODE_11,
      note: 'The King’s Landing synopsis: Tommen and Myrcella glad he is alive, Joffrey’s disdain, Tywin’s letter naming him acting Hand, Cersei livid, his rebuke over Joffrey’s rule and Ned Stark’s execution, the war they are losing, Arya’s escape and the lost hostage, and Shae hidden in the Tower of the Hand against his father’s order (GOT201). Chapter 77, Tyrion I, orders it.',
    },
    '12:episode': {
      source: EPISODE_12,
      note: 'The King’s Landing synopsis: Varys discovers Shae and hints at revealing her, the dinner with Janos, his admission and silence on who gave the order, his exile to the Night’s Watch, Bronn made commander, Cersei warned she is losing the people, and Tyrion concluding that Joffrey ordered the massacre (GOT202). Chapter 82, Tyrion II, orders it.',
    },
    '13:episode': {
      source: EPISODE_13,
      note: 'The King’s Landing synopsis: the three marriage plans for Myrcella, Pycelle exposed when Cersei confronts Tyrion about the Dornish plan, Bronn arresting him, the Martell match kept over Cersei’s protests, and Petyr furious and placated with the mission to Renly and Catelyn; the Pycelle page has the black cells (GOT203). Chapter 99, Tyrion VI, orders it.',
    },
    '14:episode': {
      source: EPISODE_14,
      note: 'The King’s Landing synopsis: Sansa beaten and stripped, Tyrion stopping it, “halfwit” and the Mad King, his offer to end the engagement and her refusal, Lancel’s late message to free Pycelle, the lavender oil, the knighting question, the threat to tell Joffrey, Lancel made his spy, and Pycelle freed but kept off the council (GOT204). Chapter 103, Tyrion VII, orders it.',
    },
    '15:episode': {
      source: EPISODE_15,
      note: 'The King’s Landing synopsis: the news of Renly’s death, Cersei keeping her plans secret, Lancel’s report on the Alchemists’ Guild, the stockpile of wildfire, Bronn’s warning, the guild made to answer to Tyrion, and the street protest blaming him (GOT205). The pyromancer stays unnamed: Hallyne is the books’ record. Chapter 110, Tyrion VIII, orders it.',
    },
    '16:episode': {
      source: EPISODE_16,
      note: 'The King’s Landing synopsis: Myrcella seen off at the docks, Cersei’s refusal to forgive him, the dung, Joffrey’s order to kill the crowd, the riot, Tyrion slapping the king, Sansa lost and Joffrey refusing to send men, Sandor saving her, and his blunt answer to Tyrion’s thanks (GOT206). Chapter 115, Tyrion IX, orders it.',
    },
    '17:126': {
      source: EPISODE_17,
      note: 'The King’s Landing synopsis: Cersei’s regret at having children by Jaime, Joffrey’s cruelty as the price of their sins, Tyrion on Myrcella and Tommen, and the moment of sympathy (GOT207). Chapter 126, Sansa IV, orders it.',
    },
    '18:episode': {
      source: EPISODE_18,
      note: 'The King’s Landing synopsis: the history books, Bronn’s and Varys’s advice and the wildfire, Joffrey to fight, Ros kidnapped as collateral, Tyrion hiding his relief that Shae is safe and vowing revenge; the Ros page has her shown to him beaten, Joffrey on the walls as Tyrion plans, and his vow to free her (GOT208). Chapter 128, Tyrion XII, orders it.',
    },
    '19:episode': {
      source: EPISODE_19,
      note: 'The King’s Landing synopsis: the night with Shae and her choice to stay, the single wildfire ship, Bronn’s flaming arrow, Joffrey leaving and the gold cloaks’ broken morale, Tyrion’s rallying speech, the sortie through the tunnels and the ram at the Mud Gate, Mandon’s slash and Podrick killing him (GOT209). Chapter 135, Tyrion XIV, orders it, after Mandon’s and Podrick’s book gates.',
    },
    '20:episode': {
      source: EPISODE_20,
      note: 'The King’s Landing synopsis: the shabby quarters, Pycelle gloating that Tywin has returned to take over as Hand, Varys on Bronn’s lost command and the tribesmen gone home, his thanks for the defence, and Shae’s plea to leave for Pentos, refused (GOT210). Chapter 141, Tyrion XV, orders it.',
    },
    '11:chapter': {
      source: KL_77,
      note: 'Tyrion I (site 77): Tywin’s letter and the Hand’s chair, the promise to free Jaime for Cersei’s support, Lancel’s strongwine, the slaps over Jaime, the heads of Eddard and his household taken down, Varys waiting with Shae at the Broken Anvil, and the riddle of the king, the priest, the rich man and the sellsword.',
    },
    '12:chapter': {
      source: KL_82,
      note: 'Tyrion II (site 82): the dinner with Janos, Allar Deem and the whore and her infant daughter, Janos sent to the Wall, Jacelyn introduced as the new commander, Varys concealing that Cersei sent the gold cloaks, “power resides where men believe it resides”, and Bronn’s “I’d ask how much”.',
    },
    '13:91': {
      source: KL_91,
      note: 'Tyrion IV (site 91): the sealed letter for Doran Martell kept from the queen, Littlefinger sent to Lysa with Myrcella for Robert Arryn and Harrenhal as his reward, Varys guessing Tommen, and the man who told Cersei named his certain enemy; Tyrion counts the three as he goes.',
    },
    '15:94': {
      source: KL_94,
      note: 'Tyrion V (site 94): Hallyne quoting Wisdom Munciter’s morning count of 7,840 jars and the promised ten thousand, spare jars to the gates, Jacelyn to train spitfire crews, Cersei furious about the Dornish match, Trystane Martell, her tears, and the informer’s identity as “the plum in his pudding”.',
    },
    '13:chapter': {
      source: KL_99,
      note: 'Tyrion VI (site 99): the powder in Cersei’s wine, the audience held alone, Vylarr’s guardsmen sent as Cleos’s escort, the traitor’s moon, Shagga’s axe on the door and the beard, the letters to Doran and to Cersei, Pycelle’s confession about Jon Arryn and the incest, and the black cell.',
    },
    '14:chapter': {
      source: KL_103,
      note: 'Tyrion VII (site 103): Lancel’s late visit with the warrant, Jacelyn’s defiance, the knighting question, the threat to tell Joffrey, Lancel turned spy, the ride to Chataya’s, the tunnel and the manse where Shae is guarded.',
    },
    '15:chapter': {
      source: KL_110,
      note: 'Tyrion VIII (site 110): Varys’s report of Renly’s murder and the lords gone over to Stannis, the Tyrells to be won, the Margaery match over Cersei’s objection that Joffrey is promised to Sansa, Littlefinger volunteering for Bitterbridge, Cersei’s kiss on the brow, and Bronn told to find out what she is up to.',
    },
    '16:chapter': {
      source: KL_115,
      note: 'Tyrion IX (site 115): Myrcella’s departure, the dung, Sandor sent after the culprit, the riot, the slap that sends the crown flying, Sansa saved by Sandor, the High Septon, Preston Greenfield and Aron Santagar dead, Lollys raped, Tyrek missing, Jacelyn’s warning, and Bronn’s hint about Tommen. Lollys opens at 118, so she is Lady Tanda’s daughter here.',
    },
    '13:118': {
      source: KL_118,
      note: 'Tyrion X (site 118): Lancel on the plan to hide Tommen at Rosby, Jacelyn sent to take the party, Varys arriving as a begging brother with the fall of Storm’s End and sent to wait at the stables, Shae asking to be his lady, the slap and Tysha, and Varys’s proposal of Shae as Lollys’s maid with the passage to the Tower of the Hand.',
    },
    '18:chapter': {
      source: KL_128,
      note: 'Tyrion XII (site 128): the supper, Cersei’s warning about Varys, Joffrey’s small command away from the main fighting, Alayaya brought in beaten by the Kettleblacks, Tyrion’s relief and his bluff about Tommen, the threat to pay her back, and Shae in his room through the secret passage.',
    },
    '19:chapter': {
      source: KL_135,
      note: 'Tyrion XIII and XIV (sites 133 and 135): half of Stannis’s fleet ablaze, the chain raised behind it, Sandor refusing a sortie at the King’s Gate, Tyrion shaming the holdouts and leading it, the fighting along the river and over the wrecked ships, Mandon’s blow and Podrick pushing him into the water. Site 135, the later chapter, holds it all.',
    },
    '20:chapter': {
      source: KL_141,
      note: 'Tyrion XV (site 141): the fever dreams, the bandages, Ballabar and the queen’s orders, the nose, lip, rib and arrow wound, Tywin as Hand in the Tower of the Hand and Tyrion moved to Maegor’s Holdfast, dreamwine from Frenken, Bronn sent for, and Pod sworn to silence about the docks.',
    },
    '12:89': {
      source: KL_89,
      note: 'Tyrion III (site 89): Stannis’s letters, Tyrion’s advice to let them whisper, Littlefinger’s rumour about Shireen and Patchface, the thousand links ordered from Ironbelly and the smiths, the little chain for Joffrey, Chataya’s brothel behind Rhaenys’s Hill, the shaft, Varys in the tunnel and the disguised ride to Shae’s manse. No episode lists Tyrion III among the chapters it adapts; episode 12, between Tyrion II and IV, orders it. Alayaya opens at 128 and Shireen on screen at episode 25, so neither is named.',
    },
    '18:123': {
      source: KL_123,
      note: 'Tyrion XI (site 123): the clansmen sent across the Blackwater Rush, the houses by the quay burned, Osmund chosen over Tyrion’s disapproval in place of Boros, stripped for surrendering Tommen to Jacelyn’s men, Hallyne’s thirteen thousand jars, and the merchants’ plot to seize the Old Gate, with the arrest order. Boros opens on screen only at episode 19, so he stays unlinked.',
    },
  },
  'jaime-lannister': {
    '1:5': {
      source: EPISODE_1,
      note: 'Show only; chapter 5 only shows him riding in beside the prince, so the book side opens at chapter 9. Synopsis: Cersei’s fear over Jon Arryn and “if the King knew the truth they’d be dead already”, fetching Tyrion from the brothel, the broken tower, Bran at the window, the question about his age and “The things I do for love.” The twins’ incest opens at episode 1.',
    },
    '1:9': {
      source: `${BOOKS}Bran_II_-_A_Game_of_Thrones`,
      note: 'Chapter 9 (Bran II): the voices in the tower talking about Eddard as Hand, the queen with a man revealed as her brother Jaime, Bran slipping and pulled up, the question about his age, “the things we do for love”, and the throw. The Ice and Fire Wiki’s Jaime page calls it the abandoned tower. The incest opens at chapter 9.',
    },
    '3:21': {
      source: EPISODE_3,
      note: 'Show only. Synopsis: the throne room meeting with Eddard over the Mad King, Jaime unrepentant, comforting Cersei at the news of Bran’s recovery, and Robert with Barristan asking about Aerys’s last words, answered with “Burn them all” (GOT103 on the Jaime page). The chapter only orders it.',
    },
    '5:36': {
      source: EPISODE_5,
      note: `Corrected after review: Jaime rides away, as both media tell, rather than leaving the city. Episode 5 synopsis: the ambush as Eddard leaves the brothel, Eddard taking the arrest on himself and warning Tyrion would die too, Eddard’s men killed, Jory’s death, the spear in Eddard’s leg and Jaime leaving. Book side (Eddard IX): the Ice and Fire Wiki’s Jaime page has the argument, the order to kill the northern guards, Eddard badly hurt and Jaime fleeing the city; the relationship pins at 5/36 (Eddard, Jory) hold in both media. The story says only that Eddard is wounded in the leg. ${PAST_CHAPTER_PAGES}`,
    },
    '7:57': {
      source: EPISODE_7,
      note: 'Show only. Synopsis and the Jaime page (GOT107): Tywin skinning the stag, the reproach for letting Eddard live because the win was not clean, the dynasty of a thousand years or extinction like the Targaryens, and thirty thousand men to besiege Catelyn’s family seat (named in the story only as the Tullys’ castle).',
    },
    '8:58': {
      source: EPISODE_8,
      note: `Synopsis: Barristan dismissed before Joffrey’s court and his post as Lord Commander given to Jaime; Jaime’s role turns to Lord Commander at 8/58. Book side (Sansa V): the reviewed relationship pins at 19/58 for Boros (Barristan dismissed, Jaime named in his place) and Tywin’s chapter-57 pin (Jaime leading an army against the Tullys in the riverlands). ${PAST_CHAPTER_PAGES}`,
    },
    '9:episode': {
      source: EPISODE_9,
      note: 'Show only. The Jaime page (GOT109): the feint against Tywin, Jaime drawn out against what seems a small scouting party and captured, the offer of single combat refused by Robb. The capture is his status at 9/64.',
    },
    '9:chapter': {
      source: `${BOOKS}Jaime_Lannister`,
      note: `Chapter 64 (Catelyn X): the Jaime page has the battle of the Whispering Wood, his attempt to cut down Robb, Eddard and Torrhen Karstark killed, his capture, and the bannermen, Rickard Karstark above all, kept from him. The capture is his status at 9/64. ${PAST_CHAPTER_PAGES}`,
    },
    '10:72': {
      source: EPISODE_10,
      note: 'Show only (the book places this scene in A Clash of Kings). Synopsis: Catelyn’s visit, the taunts and offer, the rock, the gods, “There are no men like me, only me”, and the admission that he pushed Bran without saying why.',
    },
    '8:56': {
      source: `${BOOKS}Jaime_Lannister`,
      note: `Added after review: the Golden Tooth, the Tully army defeated beneath the castle walls, its commander taken and the siege, as Catelyn VIII (site 56) reports them to Catelyn and Robb on the march south. Riverrun and Edmure are not named, since both open at 72. ${PAST_CHAPTER_PAGES}`,
    },
    '11:81': {
      source: `${SHOW}Jaime_Lannister`,
      note: 'Jaime Lannister page, Season 2: chained in the camp so no bannerman can be bribed, his taunts, Stannis’s letters and his answer that Stannis would be heir, frightened by Grey Wind (GOT201); Robb’s questions about Bran are the episode synopsis.',
    },
    '17:113': {
      source: `${ACOK_AWOIAF}39`,
      note: 'Catelyn V (site 113): four men from Cleos Frey’s party nearly freeing Jaime, hanged, Jaime moved to the deep dungeons and chained to the wall. Tyrion VI (site 99, ACOK_AWOIAF 25) has Tyrion hiding four men in crimson cloaks in Cleos’s escort. Episode 17, Jaime’s show escape, orders it.',
    },
    '17:episode': {
      source: `${SHOW}Jaime_Lannister`,
      note: 'Jaime Lannister page and Alton Lannister page: Alton in his cell, the tourney where Alton squired for him, Alton beaten to death, Torrhen Karstark strangled, the recapture, Catelyn and Brienne, his conflicting vows, Cersei the only one, Ned’s bastard (GOT207).',
    },
    '17:chapter': {
      source: `${ACOK_AWOIAF}55`,
      note: 'Catelyn VII (site 129): the flagon sent ahead, the midnight visit, questions traded, the children and Bran’s fall admitted, “if I wanted your Bran dead I would have slain him myself”, the Mad King and the Starks, reviled for his finest act, the mockery of Ned, Brienne’s sword.',
    },
    '18:129': {
      source: `${SHOW}Jaime_Lannister`,
      note: 'Jaime Lannister page: Catelyn’s deal and his release, Brienne smuggling him out on horseback and by rowboat, his taunts and failed goading (GOT208).',
    },
    '20:137': {
      source: `${SHOW}Jaime_Lannister`,
      note: 'Jaime Lannister page: her childhood, the three hanged women, then his mockery of her service and her answer that she serves Catelyn, the three Stark soldiers killed, his question and her loyalty to Catelyn’s task (GOT210).',
    },
  },
  'tywin-lannister': {
    '7:57': {
      source: EPISODE_7,
      note: 'Show only. Synopsis: sixty thousand men on the borders of the riverlands to punish Catelyn’s capture of Tyrion, the stag, the dynasty speech, thirty thousand men sent with Jaime to besiege the Tullys’ seat, and Tyrion the least worthy but still a Lannister.',
    },
    '8:57': {
      source: `${SHOW}Tywin_Lannister`,
      note: `Chapter 57 (Tyrion VII): the record’s gate note has Tyrion finding Tywin at the inn at the crossroads with his army; the relationship pins at 7/57 and 8/57 have Kevan commanding at his side, Jaime leading an army against the Tullys, and the clans, won with weapons and wealth, joining his army with Shagga of the Stone Crows, Timett of the Burned Men and Chella of the Black Ears. Filed at episode 8, Kevan’s and the clan leaders’ show gate. ${PAST_CHAPTER_PAGES}`,
    },
    '9:episode': {
      source: `${SHOW}Tywin_Lannister`,
      note: 'Show only. Tywin page: the alliance with the tribes and his amusement at their condition, the green boy prediction (GOT108), the vanguard order, the victory against a far smaller Stark force and Jaime captured in the meantime (GOT109).',
    },
    '9:chapter': {
      source: `${SHOW}Tyrion_Lannister`,
      note: `Corrected after review: the trap plan and its failure are told only in Tyrion IX (site 70), so they moved to the 10:chapter story. Tyrion VIII (site 63): Tyrion arrives with the clans, the vanguard under Gregor, and Kevan at Tywin’s side giving Tyrion a squire. ${PAST_CHAPTER_PAGES}`,
    },
    '10:episode': {
      source: EPISODE_10,
      note: `Synopsis: the council after Jaime’s capture with Kevan and the commanders, Tyrion sent to King’s Landing as acting Hand in Tywin’s stead to control Cersei and Joffrey, and the order to leave his whore behind. Book side (Tyrion IX): the relationship pins at 10/70 for Tyrion, Shae, Kevan and Cersei; Tywin is Hand from 10/58. ${PAST_CHAPTER_PAGES}`,
    },
    '8:58': {
      source: `${SHOW}Tywin_Lannister`,
      note: `Added after review, since Tywin’s role becomes Hand at 10/58 with no story. Sansa V (site 58), Joffrey’s first court: Tywin is named Hand in his absence; Robert’s death and Eddard held as a traitor are the 7/50 statuses. Filed at episode 8, which adapts Sansa V. ${PAST_CHAPTER_PAGES}`,
    },
    '10:chapter': {
      source: `${SHOW}Tyrion_Lannister`,
      note: `Added after review, the book side of the 10/70 story: Tyrion IX (site 70) tells that Tywin placed Tyrion and the clans in the vanguard hoping they would break and draw the Starks into a trap, and that Tyrion holding his ground spoiled it. The rest repeats the show story, which both media tell. ${PAST_CHAPTER_PAGES}`,
    },
    '14:100': {
      source: `${SHOW}Tywin_Lannister`,
      note: 'Tywin Lannister page, Season 2: after Oxcross, the courtyard of prisoners, the torture halted as a waste, the smith spared, the girl dressed as a boy made cupbearer (GOT204); calling Polliver an idiot is on the Polliver page (GOT204). Chapter 100 orders it, so Oxcross is not named (its book gate is 106).',
    },
    '15:104': {
      source: `${ACOK_AWOIAF}30`,
      note: 'Arya VII (site 104): Tywin’s war council, his face reminding Arya of her father’s, the Brave Companions’ first-night brawl and the two hanged with Lord Lydden’s archer, and the rumour that he ordered Maester Tothmure to burn a letter calling Joffrey a bastard.',
    },
    '16:112': {
      source: `${SHOW}Tywin_Lannister`,
      note: 'Tywin Lannister page: Amory berated for the misdirected letter, Arya reading better, her literacy questioned, his father recalled, Baelish’s proposal of the Tyrell alliance, Amory dying at his chambers (GOT206). The order follows the episode: Baelish’s visit before the talk of his father. His belief that he was the target is episode 17’s.',
    },
    '17:112': {
      source: `${SHOW}Tywin_Lannister`,
      note: 'Tywin Lannister page: his own men tortured and executed, Gregor blaming the Brotherhood, the talk of legacy and Harrenhal’s ruin by dragons (GOT207). Gregor sent to burn villages and the “my lord” suspicion are the episode synopsis.',
    },
    '18:episode': {
      source: `${SHOW}Tywin_Lannister`,
      note: 'Tywin Lannister page and the episode synopsis: Stannis sailing on King’s Landing, the war council, Kevan’s warning, Robb the greater threat, Gregor left castellan with Arya, her escape unknown to him (GOT208).',
    },
    '18:chapter': {
      source: `${ACOK_AWOIAF}38`,
      note: 'Arya VIII (site 112): Addam Marbrand riding out first, Amory left castellan with the Brave Companions to forage, Gregor commanding the van, Tywin and Kevan passing, and Arya’s regret at not naming him. Episode 18, where the show’s Tywin leaves Harrenhal, orders it.',
    },
    '19:136': {
      source: `${SHOW}Tywin_Lannister`,
      note: 'Tywin Lannister page and the episode synopsis: the Lannister-Tyrell host at the Blackwater, the knight in Renly’s armour, the rout, the victory announced as Cersei sits with Tommen, Loras revealed (GOT209).',
    },
    '20:episode': {
      source: `${SHOW}Tywin_Lannister`,
      note: 'Tywin Lannister page and the episode synopsis: riding into the throne room, the horse’s dung, Savior of the City and Hand, Tyrion no longer acting Hand, Harrenhal for Baelish, Joffrey’s betrothal to Sansa set aside for Margaery (GOT210).',
    },
    '20:chapter': {
      source: `${ACOK_AWOIAF}65`,
      note: 'Sansa VII (site 136, ACOK_AWOIAF 62) has Tywin on the right wing; Sansa VIII (site 139) has the warhorse’s dung before the Iron Throne, Joffrey naming him Hand until he comes of age, the knight who called Joffrey an abomination killed by Meryn on Tywin’s order, and Tywin staying to hear the captives.',
    },
    '18:119': {
      source: `${ACOK_AWOIAF}45`,
      note: 'Catelyn VI (site 119): the probes at the fords held by the river lords, Lefford drowned, Crakehall taken, Marbrand thrice driven back, Gregor held off at the Stone Mill, Tywin marching southeast, and Catelyn at the map seeing the road to the headwaters of the Blackwater Rush. Episode 18 orders it, after his 18/112 story.',
    },
  },
  'kevan-lannister': {
    '8:57': {
      source: `${SHOW}Kevan_Lannister`,
      note: `Episode 8 (GOT108, Kevan page): with Tywin in the command tent when Tyrion arrives with the hill tribesmen. Chapter 57 (Tyrion VII): the record’s gate note puts him with Tywin at the inn at the crossroads. The relationship pins at 8/57 (Kevan, Tywin, Shagga, Timett, Chella) hold the arrival, Bronn and the clans’ promise of weapons and wealth in both media. ${PAST_CHAPTER_PAGES}`,
    },
    '10:70': {
      source: EPISODE_10,
      note: 'Show only. Synopsis and the Kevan page (GOT110): the war called a catastrophe, Stannis and Renly both claiming the throne, the Stark and Tully armies joined, half their forces destroyed and a truce suggested, Tyrion’s answer about Eddard, and the retreat to Harrenhal.',
    },
  },
  'cersei-lannister': {
    '1:5': {
      source: EDDARD_I,
      note: 'Chapter 5: the arrival, Ned kissing the queen’s ring while Robert embraces Catelyn, the children introduced, and Robert’s request to visit the crypts to her consternation. Her brothers ride in the party (the same chapter).',
    },
    '1:episode': {
      source: EPISODE_1,
      note: 'Show only at this point: the King’s Landing scene over Jon Arryn’s body with Jaime (GOT101), and the broken tower where Bran sees the twins, Cersei spots him and Jaime pushes him out. The show tells the incest in episode 1.',
    },
    '1:chapter': {
      source: BRAN_II,
      note: 'Chapter 9: Bran overhears the queen and her brother talk of Eddard’s appointment, sees them together, and Jaime throws him from the window. The Ice and Fire Wiki’s Cersei page adds the talk of Lysa Arryn. The books tell the incest here.',
    },
    '2:episode': {
      source: `${SHOW}Cersei_Lannister`,
      note: 'Season 1, citing GOT102: Cersei takes the children from Tyrion’s talk at breakfast, tells Catelyn of her black-haired first son who died of a fever, and has Lady killed when Nymeria cannot be found.',
    },
    '2:chapter': {
      source: EDDARD_III,
      note: 'Chapter 17: Cersei demands the wolf be killed and skinned, Lady dies in Nymeria’s place, Cersei calls for Ser Ilyn and Ned kills Lady himself and sends the pelt north. Breakfast and her exit are Tyrion I, chapter 10. Reviewed relationship pin at 2/17.',
    },
    '3:21': {
      source: `${SHOW}Cersei_Lannister`,
      note: 'Show only, GOT103: Joffrey’s plans for the North, the North too vast to conquer, be kind to Sansa, “anyone who isn’t us is an enemy”, and Jaime calming her at the news that Bran has woken. The chapter only orders it.',
    },
    '4:30': {
      source: `${SHOW}Cersei_Lannister`,
      note: 'Show only, GOT104: Robert embarrasses her at the tourney and she leaves, then visits Ned, who is not at his own tourney; Brandon was born to lead, Ned to follow.',
    },
    '5:31': {
      source: EDDARD_VII,
      note: 'Books only. Chapter 30 (Sansa II) has Robert shouting at her at the first-day feast and her leaving; chapter 31 has Ned and Barristan talking him out of the melee and Varys telling Ned the queen had plotted his death there and will try again.',
    },
    '5:34': {
      source: EPISODE_5,
      note: 'Show only, GOT105: the drink with Robert after Ned resigns, the Dothraki without ships, Lyanna, the lost first boy, and his answer that their marriage never had a chance.',
    },
    '6:40': {
      source: EDDARD_X,
      note: 'Chapter 40 (Eddard X) and episode 6 (A Golden Crown) both have the visit to the wounded Ned, Cersei’s demand over Tyrion, the taunt on Robert’s manhood, the blow, the bruise worn with honour and Ned restored as Hand. The taunt’s wording differs, so the story gives neither.',
    },
    '7:50': {
      source: EPISODE_7,
      note: `Episode 7 has the confrontation (her children are Jaime’s, the wedding night and Lyanna, flee before the king returns, win or die), Robert’s death, the torn letter and the arrest. Book side: the confrontation is ${EDDARD_XII}, the throne room ${EDDARD_XIV}. Reviewed relationship pin at 7/50.`,
    },
    '8:52': {
      source: `${SHOW}Cersei_Lannister`,
      note: 'Show only, GOT108: with Pycelle, Varys and Littlefinger she has Sansa write to Robb; the episode synopsis (The Pointy End) has Cersei dismissing Barristan, Jaime taking his post and Sansa’s plea. The chapter only orders it.',
    },
    '9:66': {
      source: EPISODE_9,
      note: `Episode 9 and the Ice and Fire Wiki’s Joffrey page (Arya V, chapter 66): the confession at the sept, Joffrey citing his mother’s wish to let Eddard take the black and Sansa’s plea, soft hearts of women, Ilyn Payne and Ice. Reviewed relationship pin at 9/66. ${PAST_CHAPTER_PAGES}`,
    },
    '10:73': {
      source: `${SHOW}Lancel_Lannister`,
      note: 'Show only, GOT110: Lancel, newly knighted, in Cersei’s bed; the letter with Jaime’s capture; she tells him to get back into bed. Reviewed relationship pin at 10/73 episode.',
    },
    '11:episode': {
      source: EPISODE_11,
      note: 'The King’s Landing synopsis: the gates closed to refugees, Tyrion’s letter and her anger, Petyr’s “knowledge is power”, the guards ordered to cut his throat and called off, “power is power”, Joffrey’s questions about his parentage, the slap and his threat (GOT201). Chapter 77, Tyrion I, orders it.',
    },
    '12:82': {
      source: EPISODE_12,
      note: 'The King’s Landing synopsis: Robb’s terms rejected, Cersei confronting Tyrion over Janos, the people she does not care about, the joke about Jaime and her barb about their mother (GOT202). Chapter 82, Tyrion II, orders it.',
    },
    '16:115': {
      source: EPISODE_16,
      note: 'The King’s Landing synopsis: Myrcella’s departure, Cersei heartbroken and unforgiving, the ignored warnings about the starving peasants, the riot and the narrow escape to the castle (GOT206). Chapter 115, Tyrion IX, orders it.',
    },
    '17:episode': {
      source: EPISODE_17,
      note: 'The King’s Landing synopsis: Sansa brought to Cersei, Robert hunting at each birth and Jaime at her side, Sansa never loving Joffrey but loving their children, “the more people you love, the weaker you are”, and her regret to Tyrion about Joffrey and Jaime (GOT207). Chapter 126, Sansa IV, orders it.',
    },
    '18:episode': {
      source: EPISODE_18,
      note: 'The King’s Landing synopsis: Cersei worried about letting Joffrey fight, Ros kidnapped as collateral, Tyrion’s vow of revenge; the Ros page has the beating, her belief that Tyrion plots to kill Joffrey, the walls, and the threat of a gruesome death (GOT208). Chapter 128, Tyrion XII, orders it.',
    },
    '19:episode': {
      source: EPISODE_19,
      note: 'The King’s Landing synopsis: Maegor’s Holdfast, Ser Ilyn at her side, Pycelle’s essence of nightshade, the wine, the descriptions of rape, Shae questioned, Lancel sent for Joffrey, his wound struck, the throne room with Tommen, the story of the lion and the poison, and Tywin’s entrance with Loras (GOT209). Chapter 136, Sansa VII, orders it.',
    },
    '20:139': {
      source: EPISODE_20,
      note: 'The King’s Landing synopsis: Tywin named Hand, Littlefinger given Harrenhal, Loras asking that Joffrey wed Margaery, Cersei and Pycelle making a show of persuading Joffrey to set Sansa aside for her house’s treachery, and his agreement (GOT210). Chapter 139, Sansa VIII, orders it.',
    },
    '11:chapter': {
      source: KL_77,
      note: 'Tyrion I (site 77): Cersei’s disbelief and distaste, the letter called absurd, Arya’s escape, Joffrey taking Eddard’s death on himself, her consent to threats against Joffrey as long as Tyrion does nothing without her, the slaps over Jaime, and then Lancel’s strongwine.',
    },
    '15:94': {
      source: KL_94,
      note: 'Tyrion V (site 94): Cersei waiting in his solar, the Dornish match and Trystane, her fear for Elia’s revenge, the slap, Myrcella’s head beside hers, her tears, Jaime captured and Tywin at Harrenhal, and Tyrion sensing her agreement.',
    },
    '15:110': {
      source: KL_110,
      note: 'Tyrion VIII (site 110): Cersei’s objection that Joffrey is promised to Sansa, the fifty thousand swords, her warning, the envoy no one of them will be, Littlefinger volunteering, and her praise and kiss on the brow.',
    },
    '17:chapter': {
      source: KL_126,
      note: 'Sansa IV (site 126): the maids catching her, Cersei comforting her, Joffrey’s birth and Robert hunting, loving the children if not the husband, the lie Stannis will not like, Robert and Tyrion wanting love, and “Love is poison”.',
    },
    '18:chapter': {
      source: KL_128,
      note: 'Tyrion XII (site 128): Cersei’s warning about Varys, Osney and Osfryd Kettleblack bringing in Alayaya, the debt a Lannister pays, the girl safe as long as her sons are, Tyrion’s bluff about Tommen, and Cersei shouting at him to get out.',
    },
    '19:134': {
      source: KL_134,
      note: 'Sansa VI (site 134): the Queen’s Ballroom, the wine, the warning about rape, the horse thieves beheaded, the smallfolk refused, Joffrey ordered back, the godswood visits she does not believe are for Joffrey, and Ser Ilyn there so that Stannis will not take them alive.',
    },
    '19:chapter': {
      source: KL_136,
      note: 'Sansa VII (site 136): Lancel’s report, Tyrion and Mandon believed dead, Sandor vanished, the gold cloaks breaking when Joffrey was brought back, the drawbridge, Lancel’s plea and the blow to his wound.',
    },
    '13:99': {
      source: EPISODE_13,
      note: 'The King’s Landing synopsis: the awkward dinner with her children and Sansa, Cersei confronting Tyrion about the plan fed to Pycelle, Pycelle exposed and arrested, and the Martell match pursued over her protests (GOT203). Chapter 99 orders it.',
    },
  },
  'joffrey-baratheon': {
    '1:5': {
      source: EDDARD_I,
      note: 'Chapter 5 and episode 1: Joffrey arrives with the court, Robert offers Ned the Hand and the betrothal of Sansa to Joffrey, and Ned asks for time. Reviewed relationship pin at 1/5.',
    },
    '1:8': {
      source: ARYA_I,
      note: 'Books only. Chapter 8: Rodrik calls Robb and Joffrey, Joffrey wants sharp steel, Sandor reminds Rodrik he is a prince, the taunts to the Lannister men’s laughter, Theon holding Robb back.',
    },
    '2:17': {
      source: EPISODE_2,
      note: 'Episode 2 has the slaps, the river with Mycah, Nymeria’s bite, the sword in the river, the lie and Lady. Book side: slaps in Tyrion I (chapter 10), the river in Sansa I (chapter 16), the judgment and Mycah cut down by Sandor in Eddard III (chapter 17). Reviewed relationship pin at 2/17.',
    },
    '3:21': {
      source: EPISODE_3,
      note: 'Show only (Lord Snow synopsis): double taxes, a standing army, crushing objectors and installing someone loyal; Cersei’s answer and her advice about Sansa. The chapter only orders it.',
    },
    '4:30': {
      source: SANSA_II,
      note: 'Books only. Chapter 30: at the first-day feast Joffrey feeds Sansa and explains Moon Boy’s jokes, turns cold after the queen leaves, and has Sandor take her back to the Red Keep.',
    },
    '6:45': {
      source: EPISODE_6,
      note: 'Show only (A Golden Crown synopsis, and the Game of Thrones Wiki’s Joffrey page citing GOT106): the apology, the necklace, Cersei behind it, and Sansa refusing to leave him when Ned plans to send her home.',
    },
    '7:50': {
      source: EDDARD_XIV,
      note: `Chapter 50: Robert dead, Joffrey on the Iron Throne demanding oaths and a coronation within the fortnight, the torn will, Ned denying his right, the gold cloaks killing Ned’s men. Episode 7 tells the same. The parentage is told by ${EDDARD_XII} and GOT107; reviewed relationship pin at 7/50.`,
    },
    '8:58': {
      source: `${BOOKS}Joffrey_Baratheon`,
      note: `In A Game of Thrones: Janos Slynt made Lord of Harrenhal, Barristan removed and Jaime named Lord Commander, Sansa’s plea and the promise of mercy if Eddard confesses. Episode 8 has the same. Reviewed relationship pin at 8/58. ${PAST_CHAPTER_PAGES}`,
    },
    '9:66': {
      source: EPISODE_9,
      note: `Episode 9 and the Ice and Fire Wiki’s Joffrey page: the confession, mother and betrothed asking mercy, soft hearts of women, Ilyn Payne ordered to bring the head; Ice in both. Reviewed relationship pin at 9/66. ${PAST_CHAPTER_PAGES}`,
    },
    '10:68': {
      source: `${BOOKS}Joffrey_Baratheon`,
      note: `In A Game of Thrones: Meryn Trant strikes Sansa, the heads of her father and Septa Mordane on the battlements, the promise of Robb’s head, Sansa’s thought of pushing him and Sandor stopping her. Episode 10 (GOT110) has the same in another order, so the story gives none. The episode adapts Sansa VI, chapter 68. ${PAST_CHAPTER_PAGES}`,
    },
    '11:77': {
      source: EPISODE_11,
      note: 'The King’s Landing synopsis: the name-day tournament on the walls, Dontos late and drunk, the barrel of wine, Sansa’s plea of bad luck, Sandor seconding her, Dontos made fool, the rumours about his parentage, the slap and his threat (GOT201). Chapter 77, Tyrion I, orders it.',
    },
    '14:episode': {
      source: EPISODE_14,
      note: 'The King’s Landing synopsis: Robb’s victory, Sansa threatened with the crossbow, Meryn ordered to beat and strip her but leave her face, Tyrion’s intervention, “halfwit” and the Mad King, and Ros forced at crossbow point to beat Daisy as a message to Tyrion (GOT204). Chapter 106, Sansa III, orders it.',
    },
    '16:episode': {
      source: EPISODE_16,
      note: 'The King’s Landing synopsis: the dung, the order to kill the crowd, the riot, the escape to the castle, Joffrey shrieking, Tyrion’s slap unanswered, and his refusal to send men after Sansa (GOT206). Chapter 115, Tyrion IX, orders it.',
    },
    '19:135': {
      source: EPISODE_19,
      note: 'The King’s Landing synopsis: Joffrey berating Tyrion over the fleet, Sandor’s curse in the presence of the king, Lancel sent by Cersei, Joffrey leaving willingly and charging Mandon and Boros to fight in his name, and the gold cloaks’ broken morale (GOT209). Chapter 135 orders it, after Mandon’s book gate.',
    },
    '20:episode': {
      source: EPISODE_20,
      note: 'The King’s Landing synopsis: Tywin named Hand and Savior of the City, Harrenhal for Littlefinger, Loras’s request, Cersei and Pycelle’s show of persuasion, Sansa set aside and Margaery accepted (GOT210). Chapter 139, Sansa VIII, orders it.',
    },
    '11:76': {
      source: KL_76,
      note: 'Sansa I (site 76): the poor tourney, Dontos drunk and the cask of wine, Sansa’s name-day curse, Sandor’s agreement, the fool’s motley, Tommen unhorsed by the quintain, Tyrion’s arrival, his wits as a gift and Joffrey’s wish for Robb’s head.',
    },
    '14:chapter': {
      source: KL_106,
      note: 'Sansa III (site 106): the lower bailey, Lancel’s report of Oxcross, the crossbow and Cersei’s warning about Jaime, the order to Sandor, Dontos’s melon, Boros’s blows and the torn bodice, Tyrion on Aerys and on ears and mouth. Boros opens on screen only at episode 19, so this book story, ordered at episode 14, names him unlinked.',
    },
    '16:chapter': {
      source: KL_115,
      note: 'Tyrion IX (site 115): the dung on the Hook, Sandor ordered to bring the culprit, the crowd’s insults and the stampede, Joffrey ranting at the gates, the slap that knocks off his crown, the shove, and the dog he set on them.',
    },
    '19:133': {
      source: KL_133,
      note: 'Sansa V (site 131) has Sansa kissing Hearteater and his promise to kill Stannis and Robb; Tyrion XIII (site 133) has Joffrey lamenting the Kingslander, Queen Cersei and Loyal Man, the Antler Men catapulted with antlers nailed to their heads, and Tyrion’s order to Osmund to keep him safe among the defenders. The plot to seize the Old Gate is Tyrion XI (site 123).',
    },
    '20:chapter': {
      source: KL_139,
      note: 'Sansa VIII (site 139): Tywin named Hand, Garlan’s request for Margaery, the High Septon voiding the betrothal, Littlefinger granted Harrenhal, Hallyne named lord with no lands, the knight who calls Joffrey an abomination, and the cut on the Iron Throne.',
    },
  },
  'robert-baratheon': {
    '1:5': {
      source: EDDARD_I,
      note: 'Chapter 5 and episode 1: the arrival, the embrace, the crypts and Lyanna to the queen’s impatience, the nightly dream of killing Rhaegar, the offer of the Hand, the betrothal of Sansa and Joffrey, Ned asking for time.',
    },
    '2:17': {
      source: EDDARD_III,
      note: 'Chapter 17 and episode 2: Joffrey lies, Sansa does not back Arya, each father disciplines his child, Cersei demands a wolf, Lady in Nymeria’s place, Ned does it himself. Reviewed relationship pin at 2/17.',
    },
    '3:31': {
      source: `${SHOW}Robert_Baratheon`,
      note: 'Show only, GOT103: the tourney ordered while the crown is in debt, war stories with Barristan, Lancel mocked and sent for wine, Jaime on the Mad King’s last words. The chapter only orders it.',
    },
    '5:31': {
      source: EDDARD_VII,
      note: 'Books only. Chapter 31: the two Lannister squires, too fat for the armour, the breastplate stretcher joke, Ned and Barristan dissuading him from the melee, and Robert stopping the Clegane brothers. The shouting at Cersei is chapter 30 (Sansa II).',
    },
    '5:34': {
      source: EDDARD_VIII,
      note: 'Chapter 34 (Eddard VIII) and episode 5: news of the pregnancy, Robert wants her dead, Ned calls it dishonourable, the council (all but Barristan in the book) sides with the king, Ned refuses and resigns. Reviewed relationship pin at 5/34.',
    },
    '6:40': {
      source: EDDARD_X,
      note: 'Chapter 40 and episode 6: the visit with Cersei, the blow, Ned restored as Hand and told to make peace, the threat to give the badge to Jaime, the hunt.',
    },
    '7:50': {
      source: EDDARD_XIII,
      note: `Chapter 48 and episode 7: Lancel’s wine, the boar faced alone, the will naming Ned Protector until the heir comes of age, written without Joffrey’s name, the call to stop the killers. The death is announced in ${EDDARD_XIV}; his status is deceased at 7/50.`,
    },
  },
  'renly-baratheon': {
    '3:16': {
      source: SANSA_I,
      note: 'Books only. Chapter 16: Sansa meets Barristan and Renly, riding out as honour guard for the king’s return, after Joffrey rescues her from Ilyn and Sandor. The Ice and Fire Wiki’s Renly page has him near twenty and riding with Barristan and Ilyn.',
    },
    '3:21': {
      source: EDDARD_IV,
      note: 'Chapter 21 and episode 3: Ned’s first council with Renly, Littlefinger, Pycelle and Varys, the crown in debt and the tourney Robert ordered; Ned wants to speak to the king first.',
    },
    '5:30': {
      source: `${SHOW}Renly_Baratheon`,
      note: 'Show only, GOT105: the bet with Littlefinger on Loras, backing the plan to kill Daenerys, and Loras urging him to claim the crown (fourth in line, kind, no joy in violence). The show calls Loras his lover; reviewed relationship pin at 5/21 episode, filed at chapter 30 to link Loras.',
    },
    '5:34': {
      source: EDDARD_VIII,
      note: 'Books only. Chapter 34: Renly says it was a mistake to let Viserys and Daenerys live and suggests Jorah Mormont, who craves a pardon; Ned resigns.',
    },
    '6:40': {
      source: `${SHOW}Renly_Baratheon`,
      note: 'Show only, GOT106: the hunt with Barristan and Lancel, Robert’s nostalgia and needling, Renly calling him a fool and leaving. The chapter only orders it.',
    },
    '7:50': {
      source: EDDARD_XIII,
      note: `Chapter 48 and episode 7: the hundred swords to seize the queen’s children, Ned’s refusal while Robert lives. Varys reports the flight with Loras and fifty retainers in ${EDDARD_XIV}; the Game of Thrones Wiki’s Renly page has some fifty retainers (GOT107). Reviewed relationship pin at 7/50.`,
    },
    '10:70': {
      source: EPISODE_10,
      note: `Episode 10: at Tywin’s council Kevan reports that Renly has claimed the throne. Book side is Tyrion IX, chapter 70, where his role turns to claimant; ${PAST_CHAPTER_PAGES}`,
    },
    '13:episode': {
      source: `${SHOW}Renly_Baratheon`,
      note: 'Renly Baratheon page: crowned with the Tyrells and married to Margaery, Loras’s sister; Brienne named champion and Kingsguard, Catelyn welcomed and promised justice, the camp tour and the hundred thousand men, Loras on Brienne and the gossip about a virgin bride, and Margaery’s offer to bring Loras in (GOT201, GOT203).',
    },
    '14:episode': {
      source: `${SHOW}Renly_Baratheon`,
      note: 'Renly Baratheon page: Petyr distrusted and his offer to open the gates, the parley, the banner and the late faith mocked, nobody wanting Stannis, a man without friends a man without power, the night to submit for a council seat and heirship, and his asking whether they believe he loved Stannis once (GOT204). Chapter 105 orders it.',
    },
    '15:episode': {
      source: `${SHOW}Renly_Baratheon`,
      note: 'Renly Baratheon page and the episode’s quotes: the terms for Robb as King in the North sworn to him as Eddard was to Robert, Brienne taking his cloak, Catelyn urging talks, “better luck debating the wind”, a fortnight together, the gust, the smoke with Stannis’s face in the mirror, the stab and his death in Brienne’s arms (GOT205).',
    },
    '13:chapter': {
      source: ST_96,
      note: 'Catelyn II (site 96): Bitterbridge, Margaery his queen, Brienne champion and of the Rainbow Guard, Catelyn welcomed with the vow of Cersei’s head, the roof and the campfires, Stannis an appalling king, the terms for Robb to bend the knee, and the messenger: Stannis at the gates of Storm’s End, calling himself king. Storm’s End stays unnamed before its book gate, 105. Episode 13 adapts the chapter.',
    },
    '14:chapter': {
      source: ST_105,
      note: 'Catelyn III (site 105): the demand to kneel, the peach because life is short, Storm’s End offered and refused, a son by Margaery within a year, the jibe at Stannis’s wife, the terms until dawn, the laugh at his strength in banners, the decision to fight, the van to Loras with Brienne, and Loras kept to help him pray. Episode 14 adapts the chapter.',
    },
    '15:chapter': {
      source: ST_107,
      note: 'Catelyn IV (site 107): Brienne arming him, Stannis’s body to be respected and Barristan spared, Catelyn on the attempt on Bran and a Great Council, the time for talk done, and the shadow cutting his throat as Brienne belts on his sword. Episode 15 adapts the chapter.',
    },
  },
  'myrcella-baratheon': {
    '1:6': {
      source: JON_I,
      note: 'Chapter 6 (the feast, the royal family entering) and episode 1 (GOT101, the arrival and the feast). Reviewed relationship pin at 1/6.',
    },
    '2:10': {
      source: TYRION_I,
      note: 'Chapter 10 and episode 2 (GOT102): breakfast with Cersei, Jaime and Tommen, concern for Bran, Tyrion saying he may live, the queen’s and Jaime’s reaction, the trip north and Cersei taking the children away. The answer about Bran differs in detail, so the story keeps only that he may live.',
    },
    '16:episode': {
      source: EPISODE_16,
      note: 'The King’s Landing synopsis: the court at the docks, the ship bound for Dorne, House Martell until she comes of age to marry Trystane, the High Septon’s blessing, and Cersei heartbroken (GOT206). Chapter 115, Tyrion IX, orders it; the role step “Princess sent to Dorne” is at 16/115.',
    },
    '16:chapter': {
      source: KL_115,
      note: 'Tyrion IX (site 115): the harbour, Arys Oakheart as sworn shield, the Seaswift and the fleet to Braavos, Braavosi ships to Dorne, and Doran’s banners to the high passes once she is at Sunspear; the ward and the marriage to Trystane are Tyrion V (site 94).',
    },
  },
  'tommen-baratheon': {
    '1:6': {
      source: JON_I,
      note: 'Chapter 6 (the feast, the royal family entering) and episode 1 (GOT101, the arrival and the feast). Reviewed relationship pin at 1/6.',
    },
    '1:8': {
      source: ARYA_I,
      note: 'Books only. Chapter 8: Arya and Jon watch Bran beat Tommen with wooden swords; Tommen padded and round; then Rodrik calls Robb and Joffrey.',
    },
    '2:10': {
      source: TYRION_I,
      note: 'Chapter 10 and episode 2 (GOT102): breakfast with Cersei, Jaime and Myrcella, Tyrion saying Bran may live, the queen’s and Jaime’s reaction, the trip north, and Cersei taking the children away.',
    },
  },
  'lancel-lannister': {
    '3:31': {
      source: `${SHOW}Lancel_Lannister`,
      note: 'Show only, GOT103: pouring wine during the war stories with Barristan, the jibe about his father’s stutter, sent for more wine. Filed at his chapter gate, which only orders it.',
    },
    '5:31': {
      source: EDDARD_VII,
      note: 'Corrected after review: the media differ in the order of the scene and only the book has Robert laughing, so the story keeps what both tell. Chapter 31 and episode 5 (GOT105): the armour that will not fit, Ned telling the king he is too fat, and Lancel sent for the breastplate stretcher. The Ice and Fire Wiki’s Lancel page has the same.',
    },
    '7:50': {
      source: EDDARD_XIII,
      note: `Chapter 48 and episode 7 (GOT107): Lancel keeps the king in wine on the hunt, the boar, and Varys asking Barristan about the wine in front of Ned. The death is in ${EDDARD_XIV}. Reviewed relationship pin at 7/50.`,
    },
    '10:73': {
      source: `${SHOW}Lancel_Lannister`,
      note: 'Show only, GOT110: newly knighted, in Cersei’s bed, excited by the war, told to be quiet. Reviewed relationship pin at 10/73 episode.',
    },
    '14:episode': {
      source: EPISODE_14,
      note: 'The King’s Landing synopsis: Lancel’s late message to free Pycelle, “Imp”, the trap of the prompt messenger, Cersei’s lavender oil, the knighting question, his plea on his knees and his agreement to report on Cersei (GOT204). Chapter 103, Tyrion VII, orders it; his role step “Knight in the queen’s service” is at 14/103.',
    },
    '19:episode': {
      source: EPISODE_19,
      note: 'The King’s Landing synopsis: Lancel in Sandor’s sortie and the arrow, Cersei’s order to bring Joffrey back and his protest about morale, his return to warn her, and the push that strikes his injured side (GOT209). Chapter 136, Sansa VII, orders it.',
    },
    '14:chapter': {
      source: KL_103,
      note: 'Tyrion VII (site 103): the warrant, the hand on the sword, the knighting question, the threat about Joffrey, Lord Tywin’s command to obey Cersei, Lancel turned spy, and the message of Tyrion’s apology. His role step “Knight in the queen’s service” is at 14/103.',
    },
    '16:118': {
      source: KL_118,
      note: 'Sansa III (site 106): Lancel’s tale of wargs and cannibal northmen and Tyrion’s correction; Tyrion IX (site 115): Lancel’s report on the hedge knight and his brothers; Tyrion X (site 118): the plan to hide Tommen at Rosby. Site 118 holds it all. Episode 16, after the warg tale’s episode 14 and Lancel’s turn as spy at 14/103, orders it. Osmund opens at 123, so the Kettleblacks stay unnamed.',
    },
    '19:chapter': {
      source: KL_136,
      note: 'Sansa VII (site 136): the wounded Lancel’s report, his plea for Joffrey to stay at the gatehouse, Cersei striking his wound, and Sansa sending for Maester Frenken.',
    },
    '20:139': {
      source: KL_139,
      note: 'Sansa VIII (site 139): Lancel named Lord of Darry with the Darry lands, absent like Tyrion for his wounds, the honours to the lords sworn to Casterly Rock and Highgarden, and Harrenhal for Littlefinger.',
    },
  },
  'barristan-selmy': {
    '3:16': {
      source: `${SHOW}Barristan_Selmy`,
      note: 'Season 1, citing GOT103: the war stories with Robert and Jaime, the Tyroshi killed with a lance through the heart, Simon Toyne slain in single combat and Jaime’s first kill as a squire.',
    },
    '3:17': {
      source: EDDARD_III,
      note: 'Sansa I (16): he rides out with Renly as an honour guard and meets Sansa at the inn. Eddard III (17): Arya brought before the king. The Ice and Fire Wiki’s Barristan page has his grave look and Robert sending him to lead the laughing Renly out, so the story sits at 17.',
    },
    '5:31': {
      source: EDDARD_VII,
      note: 'Eddard VII: Ned and Barristan over the body of Hugh, killed by Gregor the day before. Episode 5 (GOT105 on the Barristan page): he stood the vigil because Hugh had no one, and Ned questions him about the death. The reviewed relationship pin at 5/31 holds the vigil in both media.',
    },
    '5:34': {
      source: `${BOOKS}Barristan_Selmy`,
      note: `Book only: at the council on Daenerys’s pregnancy he is the only other councillor to side with Eddard, finding it lacks honour. Eddard giving up his office is the reviewed pin for Robert at 5/34. Chapter 34 is Eddard VIII. ${PAST_CHAPTER_PAGES}`,
    },
    '7:50': {
      source: EPISODE_7,
      note: `Episode 7: Ned hands Barristan the proclamation, Cersei tears up the paper shield, orders him to seize Ned, he balks, the Watch kills Ned’s men (Barristan page, GOT107). A Wiki of Ice and Fire’s Eddard XIV page (book chapter 49, site 50): Barristan is entrusted with the writ, Cersei tears it, orders him to seize Ned, he hesitates, the gold cloaks kill Ned’s guards.`,
    },
    '8:58': {
      source: EPISODE_8,
      note: `Episode 8 (GOT108): dismissed though the post is for life, Jaime named Lord Commander, Sandor admitted though no knight, Barristan storms out. The book side keeps only what the Ice and Fire Wiki Barristan page and the reviewed pins at 8/58 state: removed despite life vows, Jaime Lord Commander, Sandor in the Kingsguard. ${PAST_CHAPTER_PAGES}`,
    },
    '21:201': {
      source: EPISODE_21,
      note: 'Show only: the Astapor synopsis and the Barristan Selmy page: the hooded stranger who knocks the ball away, the manticore killed with his dagger, Jorah’s recognition, the plea for forgiveness after Joffrey dismissed him, the failure of House Targaryen in the rebellion, and the request for a place in her Queensguard (GOT301). The books bring him as Arstan Whitebeard and reveal him in Daenerys V (site 201), so 201 orders his show stories, as it does his show steps (#852).',
    },
    '23:201': {
      source: EPISODE_23,
      note: 'Show only: the Astapor synopsis and the Barristan Selmy page: no honor in a slave army, men fighting for Rhaegar out of love, Barristan beside him at the Trident, the finest man and the last dragon, Daenerys saying he was not, the plea to win with dragons not slaves, and the rebuke of both knights (GOT303). Ordered at 201, as above.',
    },
    '25:201': {
      source: EPISODE_25,
      note: 'Show only: the Slaver’s Bay synopsis and the Barristan Selmy page: Robert a good man and warrior but a terrible king, vows kept to a drunk and a lunatic, the wish to serve someone he believes in, the warning about Jorah’s taint of slaving, and Robert never trusting him on the small council (GOT305). Ordered at 201, as above.',
    },
  },
  'syrio-forel': {
    '3:23': {
      source: ARYA_II,
      note: 'Arya II: Syrio, once First Sword of Braavos, becomes her dancing master and starts with a wooden stick. Episode 3 (GOT103 on the Syrio page): hired by Eddard, the water dance, lessons hidden as dancing lessons. Needle from Jon in both.',
    },
    '6:44': {
      source: `${SHOW}Syrio_Forel`,
      note: 'Show only. Season 1: balancing on the stairs (GOT104), chasing cats (GOT105), and the lesson where she is distracted by Mycah’s death and her father’s wound, “with her trouble” (GOT106). The chapter only orders it.',
    },
    '8:51': {
      source: EPISODE_8,
      note: `Episode 8 (GOT108): Meryn and the Lannister guards, the wooden sword, the guards disabled, the sword broken by Meryn, Arya told to flee. The Game of Thrones Wiki’s In the books section says the book fight is much the same and that Syrio fights on with his broken sword; the reviewed pin and status at 8/51. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'petyr-baelish': {
    '3:episode': {
      source: EPISODE_3,
      note: 'Show version (GOT103 on the Petyr page): the six million in debt, Catelyn spotted and brought to his brothel with Varys waiting, the dagger lost to Tyrion, and his promise of help for the affection he bore Catelyn.',
    },
    '3:chapter': {
      source: CATELYN_IV,
      note: 'Catelyn IV: the City Watch brings her to the Red Keep, talk of their childhood, her lie about why she came, Varys joining, the dagger lost at a tourney to Tyrion. The Ice and Fire Wiki’s Petyr page has him moving her to one of his brothels.',
    },
    '3:21': {
      source: EDDARD_IV,
      note: 'Eddard IV: the sparring with Renly, the debt, the climb down the niches beneath the castle to the horses, the brothel, Ned accosting him until Rodrik shows Catelyn is there, and the promise to help investigate Jon Arryn’s death.',
    },
    '4:26': {
      source: EDDARD_V,
      note: 'Eddard V: Littlefinger tells Ned of people with more to tell, including Jon Arryn’s squire. The Ice and Fire Wiki’s Petyr page adds the three spies and his remark that not trusting him was the smartest thing Ned had done. Hugh is not named, since his record opens at chapter 30.',
    },
    '4:30': {
      source: EPISODE_4,
      note: 'Show only (GOT104 on the Petyr page): the advice to keep the inquiry low, the gardener, urchin and septa, Hugh knighted for the tourney, the armorer; at the tourney he tells Sansa of Gregor and the fire. The chapter is the tourney’s, for the links.',
    },
    '5:36': {
      source: EPISODE_5,
      note: 'Episode 5: after Ned resigns, Littlefinger takes him to a brothel where a woman has Robert’s baby (Barra, GOT105 on the Mhaegen page), then Jaime’s men stop them and Petyr rides for the City Watch. The Ice and Fire Wiki’s Petyr page tells the same in Eddard IX. The mother is not named, since only the show names her.',
    },
    '7:50': {
      source: EPISODE_7,
      note: `Episode 7 (GOT107): Littlefinger proposes keeping Joffrey, Ned refuses and asks him to win the City Watch, which then turns on Ned while Petyr holds a dagger to his throat. The Ice and Fire Wiki’s Petyr page has the same in the book: advising Joffrey over Stannis, the gold cloaks hired. A Wiki of Ice and Fire’s Eddard XIV page (site 50) has the dagger and “I did warn you not to trust me”.`,
    },
    '11:77': {
      source: EPISODE_11,
      note: 'The King’s Landing synopsis: Cersei tasking Petyr with finding Arya, his love for Catelyn, the reference to Jaime, “knowledge is power”, the guards ordered to seize him and cut his throat and the order rescinded, and “power is power” (GOT201). Chapter 77, Tyrion I, orders it.',
    },
    '12:82': {
      source: EPISODE_12,
      note: 'The King’s Landing synopsis: Ros unable to work after Barra’s murder, Petyr’s tale of the unhappy girl sold to a depraved customer, and the night off; the Ros page has the Lyseni pleasure house and her smile (GOT202). Chapter 82, Tyrion II, orders it.',
    },
    '14:106': {
      source: EPISODE_14,
      note: 'The Stormlands synopsis: Petyr at Renly’s camp as envoy, his hint of help from within, Margaery already knowing about Renly, Catelyn’s dagger, the exchange of Sansa and Arya for Jaime with the lie about Arya, and Ned’s bones (GOT204); his fury at Tyrion’s deception and the mission are episode 13 (GOT203). Chapter 106 orders it, after Margaery’s book gate.',
    },
    '16:115': {
      source: EPISODE_16,
      note: 'The Stormlands synopsis: Petyr accompanying the Tyrell faction after Renly’s death (GOT205); the Harrenhal synopsis: Petyr meeting Tywin, Arya hiding her face, the stormlords gone to Stannis, the Tyrells’ army back at Highgarden, and the proposed Lannister-Tyrell alliance (GOT206). Chapter 115 orders it.',
    },
    '20:episode': {
      source: EPISODE_20,
      note: 'The King’s Landing synopsis: Harrenhal for brokering the Lannister-Tyrell alliance, Sansa overjoyed, his warning that Joffrey will still torment her, the promise to help her escape for her mother’s sake (GOT210). Chapter 139 orders it; his role step “Master of coin and Lord of Harrenhal” is at 20/139.',
    },
    '13:91': {
      source: KL_91,
      note: 'Tyrion IV (site 91): Littlefinger at the window with Joffrey’s hares, the dagger offered and refused, the boast about the Tully girls, the offer to Lysa (Jon Arryn’s killer, Warden of the East, Myrcella for Robert Arryn), Harrenhal and the riverlands as his reward, and the fortnight asked.',
    },
    '15:110': {
      source: KL_110,
      note: 'Tyrion VI (site 99): Littlefinger’s complaint that Myrcella cannot wed both Robert Arryn and Trystane Martell, and “leave me out of the next deception”; Tyrion VIII (site 110): the Margaery match, her body against fifty thousand swords, Littlefinger volunteering for Bitterbridge, the escort, horses, gold, Hobber Redwyne and the reward he will name later.',
    },
    '20:chapter': {
      source: KL_139,
      note: 'Sansa VIII (site 139): Harrenhal and Lord Paramount of the Trident for the Tyrell treaty, the Tyrells presented, Garlan’s request for Margaery, and the High Septon voiding the betrothal. His role step “Master of coin and Lord of Harrenhal” is at 20/139.',
    },
  },
  'varys': {
    '3:19': {
      source: CATELYN_IV,
      note: 'Catelyn IV: Varys joins Petyr and Catelyn, commiserates over Bran and asks to see the knife, which Petyr says he lost to Tyrion. The Ice and Fire Wiki’s Varys page says it was Varys who knew of her arrival and the dagger.',
    },
    '3:21': {
      source: EPISODE_3,
      note: 'Show version (GOT103 on the Varys page): the prayers for Joffrey and Ned’s retort about the butcher’s boy, the word to Littlefinger that Catelyn is coming, and the meeting at the brothel over the dagger. The chapter is Eddard IV, Ned’s first council.',
    },
    '5:31': {
      source: EDDARD_VII,
      note: 'Eddard VII: the stranger at night who is Varys, the queen’s plan to kill Robert in the melee, the tears of Lys, and Hugh as the likely poisoner, killed before he could speak to Ned.',
    },
    '5:33': {
      source: EPISODE_5,
      note: 'Show only (GOT105 on the Varys page and the episode synopsis): Robert a fool soon dead, the tears of Lys after Jon Arryn asked questions, Hugh implicated, the meeting with Illyrio beneath the castle about the lion and the wolf and Drogo waiting for his son, overheard by Arya.',
    },
    '5:34': {
      source: `${BOOKS}Varys`,
      note: `Book only: at a later council Varys brings word that Daenerys is pregnant, names Jorah as the source, and favours assassins. Eddard giving up his office is the reviewed pin for Robert at 5/34, and the Jorah link is the reviewed pin at 5/34. ${PAST_CHAPTER_PAGES}`,
    },
    '8:59': {
      source: EPISODE_8,
      note: 'Show only. The episode synopsis: the visit to the cell, why Ned warned Cersei, mercy that killed Robert, Tyrion no longer held, and Varys serving the realm. The chapter is Eddard XV, the book’s dungeon visit.',
    },
    '9:66': {
      source: EPISODE_9,
      note: `Corrected after review: Sansa’s life is the show’s wording, the book says his daughters, so the story says his family. Episode 9: Varys urges a confession for Sansa’s sake with the Wall as the price, the confession at the Great Sept, Joffrey’s order, Varys and Cersei trying to intervene, Ilyn beheading Ned with Ice. The Ice and Fire Wiki’s Varys page has the dungeon visit, the Night’s Watch offer and his warning to Joffrey; the reviewed pins at 9/66. ${PAST_CHAPTER_PAGES}`,
    },
    '12:episode': {
      source: EPISODE_12,
      note: 'The King’s Landing synopsis: Varys discovering Shae in the Tower of the Hand and his implied threats, Tyrion’s warning; the Pycelle page has the raven from Castle Black and Varys on the wildlings organizing behind one king (GOT202). Chapter 82, Tyrion II, orders it.',
    },
    '19:133': {
      source: EPISODE_19,
      note: 'The King’s Landing synopses: Tyrion taking advice from Bronn and Varys (GOT208), the map of the tunnel network beneath the city and “he is all that stands between them and defeat” (GOT209). Chapter 133, Tyrion XIII, orders it.',
    },
    '20:141': {
      source: EPISODE_20,
      note: 'The King’s Landing synopsis: Varys’s visit to Tyrion with Bronn’s lost command and the tribesmen gone, his thanks, and the visit to Ros, who learns he is a eunuch and admits she fears Littlefinger, and his protection of those who work for him (GOT210). Chapter 141 orders it.',
    },
    '11:77': {
      source: KL_77,
      note: 'Tyrion I (site 77): Varys pronouncing the seal genuine, Shae found at the Broken Anvil, the veiled threats, the Red Messenger “to warn of fire and blood to follow”, and the riddle of the king, the priest, the rich man and the sellsword.',
    },
    '12:chapter': {
      source: KL_82,
      note: 'Tyrion II (site 82): Varys’s praise, Jacelyn as the man he vouched for, the bastard killed in the brothel and the older boy he saved, “I serve the realm, the king, and you”, and the answer to the riddle, the shadow on the wall cast by a very small man.',
    },
    '13:91': {
      source: KL_91,
      note: 'Tyrion IV (site 91): the taunt about Pycelle, Dorne kept from the other factions, the council seat and Elia’s killer, Gregor Clegane, Tommen as the token, Cersei’s objection to losing both children, the certain enemy, and Varys’s giggle.',
    },
    '13:118': {
      source: KL_118,
      note: 'Tyrion X (site 118): the begging brother recognized by Shae, the fall of Storm’s End, Lollys’s household and the secret passage, and the tale of the mummer boy cut by a sorcerer in Myr, the blue flame and his hatred of magic.',
    },
    '15:110': {
      source: KL_110,
      note: 'Tyrion VIII (site 110): Varys’s report of Renly’s throat cut, the rumoured killers (Stannis with a magic sword, a Rainbow Guard knight, a maid, a spurned woman, Lady Catelyn), the lords gone over to Stannis, Loras leaving with a fifth of the knights, gold not enough for Highgarden, and the needs of the realm before the king’s desires.',
    },
    '18:128': {
      source: `${SHOW}Varys`,
      note: 'Varys page: helping Tyrion plan the defence, the two disparaging Joffrey, the compliment on his play of the game and his work as Hand, Daenerys alive with three dragons and her enemies with nowhere to hide, and “One Game at a time” (GOT208). Chapter 128 orders it.',
    },
  },
  'pycelle': {
    '3:21': {
      source: EDDARD_IV,
      note: 'Eddard IV: Ned greets Pycelle at his first council, the tourney Robert wants, the debt. Episode 3 (GOT103 on the Pycelle page): the same meeting, with Petyr, Varys and Renly.',
    },
    '4:26': {
      source: EDDARD_V,
      note: 'Eddard V: Ned interviews Pycelle about Jon Arryn’s death; the Ice and Fire Wiki’s Pycelle page: the illness not suspicious, suspicion turned on Varys when poison is raised. Episode 4 (GOT104 on the Pycelle page): the same, with poison the weapon of a woman or a eunuch.',
    },
    '7:50': {
      source: EPISODE_7,
      note: `Corrected after review: Pycelle keeping his council seat is first told at 8/52, so it is cut here. Episode 7 (GOT107 on the Pycelle page): he tends the dying Robert. The Ice and Fire Wiki’s Pycelle page has him tending Robert’s wounds; A Wiki of Ice and Fire’s Eddard XIV page (site 50) has him bringing word of Robert’s death and the arrest in the throne room.`,
    },
    '10:73': {
      source: EPISODE_10,
      note: 'Show only (GOT110 on the Pycelle page): Ros, the ramble about Aerys, Robert and Joffrey, and the stretching before he puts his frail manner back on. Ros’s brothel is Petyr’s, the reviewed pin for Ros at 7/48.',
    },
    '13:episode': {
      source: `${SHOW}Pycelle`,
      note: 'Pycelle page: the laxatives and the Dornish plan kept from the queen, his telling Cersei, Tyrion, Bronn and Timett bursting in on him with Daisy, his loyalty since the Mad King, Jon Arryn, the beard cut off and the black cells (GOT203). Chapter 99, Tyrion VI, orders it; the status step “imprisoned” is at 13/99.',
    },
    '20:139': {
      source: `${SHOW}Pycelle`,
      note: 'Pycelle page: the essence of nightshade she requests (GOT209), his gloating visit to Tyrion, Tywin returned as Hand, and his show with Cersei of persuading Joffrey to set Sansa aside, with the new High Septon’s approval (GOT210). Chapter 139 orders it.',
    },
    '13:91': {
      source: KL_91,
      note: 'Tyrion IV (site 91): the serving girl sent away, the two sealed copies for Doran Martell, the single raven, the message kept from the council and the queen and her “frailty”, and the bottle stolen from the high shelf.',
    },
    '13:chapter': {
      source: KL_99,
      note: 'Tyrion VI (site 99): Shagga’s axe on the door, the serving girl, the two letters, Pycelle blaming Varys and Littlefinger, the beard, the gates opened to Aerys’s enemies, the confession about Jon Arryn and the incest, and the black cell. The status step “imprisoned” is at 13/99.',
    },
    '14:103': {
      source: EPISODE_14,
      note: 'The King’s Landing synopsis: Lancel’s message to free Pycelle, and Tyrion agreeing to let Cersei have him as a pet but not back on the Small Council; the Pycelle page has the demand that he be released and reinstated, and Tyrion’s refusal of the council seat (GOT204). Chapter 103 orders it; the show’s status step “alive” is at 14/103.',
    },
  },
  'sandor-clegane': {
    '4:5': {
      source: EDDARD_I,
      note: 'Eddard I: Ned spots Jaime, Sandor Clegane riding with Joffrey, and Tyrion behind them as the king’s party arrives. The Ice and Fire Wiki’s Sandor page: he rides north when Robert means to make Ned his Hand. The episode only orders it; the show names him at episode 4.',
    },
    '4:17': {
      source: EDDARD_III,
      note: 'Eddard III: Ned meets Sandor on his return, after he has cut down Mycah. The Ice and Fire Wiki’s Sandor page: he leads one of the Lannister search parties north of the Trident, finds no Arya, runs Mycah down. The reviewed pin at 4/17.',
    },
    '4:episode': {
      source: EPISODE_4,
      note: 'Show version, at his show gate (Sandor page, citing GOT102 and GOT104): Mycah killed and the reply to Ned that the boy ran, Hugh killed by Gregor, and Littlefinger telling Sansa of the face held over a fire.',
    },
    '4:chapter': {
      source: SANSA_II,
      note: 'Sansa II: the final four of the first day, Joffrey sending Sandor to escort Sansa, the burns from the brazier at seven, the father’s lie so Gregor could be knighted, and the threat. Riding well comes from the Ice and Fire Wiki’s Sandor page.',
    },
    '5:31': {
      source: EDDARD_VII,
      note: 'Eddard VII: the mare in heat, Gregor attacking Loras, Sandor protecting him until Robert commands them to stop, Loras giving Sandor the victory. Episode 5 (GOT105 on the Sandor page) tells the same; the reviewed pin at 5/31.',
    },
    '7:50': {
      source: EPISODE_7,
      note: `Episode 7 (GOT107 on the Sandor page): he guards Joffrey on the throne and joins in cutting down Ned’s guards. A Wiki of Ice and Fire’s Eddard XIV page (site 50): Joffrey on the Iron Throne guarded by Sandor, who draws his sword with the Lannister guards at Cersei’s command before the gold cloaks kill Ned’s men.`,
    },
    '8:58': {
      source: EPISODE_8,
      note: `Episode 8 (GOT108 on the Barristan and Sandor pages): Barristan dismissed, Jaime Lord Commander, Sandor made a sworn brother though he refuses knighthood. The Ice and Fire Wiki’s Sandor page has the same refusal; his role step at 8/58. ${PAST_CHAPTER_PAGES}`,
    },
    '10:68': {
      source: `${BOOKS}Sandor_Clegane`,
      note: `The Ice and Fire Wiki’s Sandor page: when Joffrey shows Sansa her father’s head, Sandor cleans the blood from her face. Meryn’s blow is on the Meryn pages of both wikis (GOT110 for the show), and the reviewed pin at 10/68 holds the story in both media. Chapter 68 is Sansa VI. ${PAST_CHAPTER_PAGES}`,
    },
    '11:episode': {
      source: EPISODE_11,
      note: 'The King’s Landing synopsis: the tournament, Dontos’s punishment, Sansa’s plea, Joffrey’s dismissal of it as superstition, Sandor seconding her, and Dontos made court fool (GOT201). Chapter 76, Sansa I, orders it.',
    },
    '14:episode': {
      source: EPISODE_14,
      note: 'The King’s Landing synopsis: Meryn’s beating of Sansa, a disgusted Sandor, no one intervening, Tyrion’s order and Sandor’s cloak; the Ros page has Ros and Daisy waiting in Joffrey’s chamber, guarded by Sandor (GOT204). Chapter 106, Sansa III, orders it.',
    },
    '16:episode': {
      source: EPISODE_16,
      note: 'The King’s Landing synopsis: Sansa dragged away and about to be raped, Sandor slaying her assailants, carrying her to the castle and ordering the handmaids to care for her, Tyrion’s thanks and Sandor’s answer (GOT206). Chapter 115, Tyrion IX, orders it.',
    },
    '17:126': {
      source: EPISODE_17,
      note: 'The King’s Landing synopsis: Sansa’s thanks, “very brave”, the dog that needs no courage against rats, the day his violence will stand between her and Joffrey, and the sheets Shae tries to hide and Sandor finds (GOT207). Chapter 126, Sansa IV, orders it.',
    },
    '19:episode': {
      source: EPISODE_19,
      note: 'The King’s Landing synopsis: the confrontation with Bronn, the sortie beyond the Mud Gate with Lancel, his terror at the burning men, Bronn saving him, half his men lost, the refusal, the curse on the Kingsguard, the city and the king, and the offer to take Sansa north (GOT209). Chapter 136, Sansa VII, orders it; his role step “Deserter from the Kingsguard” is at 19/136.',
    },
    '11:chapter': {
      source: KL_76,
      note: 'Sansa I (site 76): the tourney of gnats, Sandor never ordered to hit Sansa, the name-day saying about sowing and reaping, the report of Tyrion’s death, and the warning to guard his tongue.',
    },
    '20:92': {
      source: KL_92,
      note: 'Sansa II (site 92): the serpentine steps, the catch, the disbelieved prayer, the little bird, the walk back past Ser Boros, the kennelmaster grandfather and Lord Tytos’s lion, the dog that never lies, and the song he will have. Episode 20, whose adaptation list names Sansa II, orders it.',
    },
    '14:chapter': {
      source: KL_106,
      note: 'Sansa III (site 106): Sandor fetching her and calling her little bird, pulling her up not ungently, his “Enough” during Boros’s beating, the order to strip her, and the cloak he tosses her. Boros stays unlinked: his show gate is episode 19.',
    },
    '16:chapter': {
      source: KL_115,
      note: 'Tyrion IX (site 115): Sandor ordered to bring the culprit, the riot, Sansa returned by Sandor covered in blood, the fire in Flea Bottom, and the fear Tyrion sees in his eyes.',
    },
    '19:133': {
      source: KL_133,
      note: 'Tyrion XIII (site 133): the gash on his forehead and the sheared helm, the refused sortie, the sellsword’s count of half the men lost, the curses and the wine, the fear Tyrion sees and its spread to the men, and the contemptuous laugh.',
    },
    '19:chapter': {
      source: KL_136,
      note: 'Sansa VII (site 136): Sandor hiding in her chambers, drunk and battered, his loss, his wish to see Tyrion burned, the road north, the protection he offers, the song, the Mother’s hymn, the tears, and the white cloak stripped off. His role step “Deserter from the Kingsguard” is at 19/136.',
    },
  },
  'janos-slynt': {
    '4:28': {
      source: EPISODE_4,
      note: `Episode 4 (GOT104 on the Janos page): the tourney trouble, too few men, twenty of Ned’s guards and fifty more watchmen. The Ice and Fire Wiki’s Janos page tells the same council; the record’s gate puts it in Eddard VI, whose page has no synopsis.`,
    },
    '7:50': {
      source: EPISODE_7,
      note: `Corrected after review: the show has the queen and her son, the book the queen and her children, so the story says the queen. Episode 7 (GOT107 on the Janos page): Littlefinger to buy the Watch, Ned commanding Slynt to take the queen and her son, the Watch killing Ned’s men. A Wiki of Ice and Fire’s Eddard XIV page (site 50): Ned orders Janos to take the queen and her children, and the gold cloaks kill Ned’s men; the Ice and Fire Wiki’s Janos page has Petyr hiring them.`,
    },
    '8:58': {
      source: EPISODE_8,
      note: `Episode 8 (GOT108 on the Janos page): made Lord of Harrenhal for his loyalty, at the court that dismisses Barristan. The Ice and Fire Wiki’s Janos page names him lord of Harrenhal for the arrest; his role step at 8/58. ${PAST_CHAPTER_PAGES}`,
    },
    '11:77': {
      source: EPISODE_11,
      note: 'The King’s Landing synopsis: Janos leading the massacre of Robert’s bastards, Barra killed in Petyr’s brothel before Mhaegen and Ros, and Tobho Mott revealing that Gendry left as a Night’s Watch recruit; the Ros page has the orders from someone who does not care what Petyr thinks and Janos killing the baby himself (GOT201). Chapter 77 orders it.',
    },
    '12:episode': {
      source: EPISODE_12,
      note: 'The King’s Landing synopsis: the dinner, the questions about the massacre, his admission and his silence about who ordered it, the arrest and exile to the Night’s Watch, and Bronn installed in his place (GOT202). Chapter 82, Tyrion II, orders it; his role step “Exiled to the Wall” is at 12/82.',
    },
    '12:chapter': {
      source: KL_82,
      note: 'Tyrion I (site 77) has Janos at the council; Tyrion II (site 82): the dinner, the Dornish wine, Allar Deem and the whore and her daughter, the silence about who gave the order, the bloody spear, “you have no honor”, Morros to inherit but not Harrenhal, the Summer’s Dream to the Wall, and Jacelyn at the door.',
    },
  },
  'gendry': {
    '4:28': {
      source: EPISODE_4,
      note: 'Episode 4 (GOT104 on the Gendry page): the smithy, Jon Arryn asking about the apprentice, the helm Gendry made for himself, Ned seeing Robert in him. The Ice and Fire Wiki’s Gendry page has Jon Arryn and Eddard visiting him; the reviewed pins and log at 4/28 hold the helm and the features in both media.',
    },
    '10:75': {
      source: EPISODE_10,
      note: 'Show only (GOT110 on the Gendry page): one of Yoren’s recruits, Arya as Arry, Hot Pie bumping into him, the threat that sends the boys off, and that none of them matters now. His master sending him away is on the Tobho Mott page (GOT110). Chapter 75 only orders it, for Hot Pie’s gate.',
    },
    '12:79': {
      source: `${ACOK_AWOIAF}5`,
      note: 'Arya II (site 79): Praed’s longsword given to the Bull, Gendry leading Arya away from the wagon (“They scare me.”), the gold cloaks’ warrant for him, his name given as Gendry, Yoren’s order to ride for the Wall.',
    },
    '12:93': {
      source: `${SHOW}Gendry`,
      note: 'Gendry page, Season 2: the gold cloaks sent off by Yoren, Gendry seeing through Arya’s disguise, her identity confided and his embarrassment (GOT202). Jon Arryn and Eddard questioning him is on the Arya Stark page (GOT202). Chapter 93, Arya V, where the books tell the reveal, orders it.',
    },
    '13:chapter': {
      source: `${ACOK_AWOIAF}19`,
      note: 'Arya V (site 93): carrying Lommy, Gendry thinking he will die and knowing she is a girl, Arya naming herself, “m’lady” until she knocks him down, Gendry caught and beaten at the village and shoved into the storehouse, Arya and Hot Pie taken. Episode 13 orders it.',
    },
    '14:100': {
      source: `${SHOW}Gendry`,
      note: 'Gendry page: the prisoners at Harrenhal, Gendry chosen, Tywin arriving and asking if he has a trade, the smith put to work (GOT204); Polliver standing guard is on the Polliver page (GOT204).',
    },
    '18:episode': {
      source: `${SHOW}Gendry`,
      note: 'Gendry page and Hot Pie page: Tywin leaving, Arya arranging the escape with Jaqen, the guarded gate at midnight and the guards found dead (GOT208). Chapter 138 orders it.',
    },
    '18:chapter': {
      source: `${ACOK_AWOIAF}64`,
      note: 'Arya IX (site 121) has Gendry refusing to help free the northmen; Arya X (site 138) has the lie that Vargo will cut off a foot from each servant, swords and Hot Pie fetched, the meeting near the Tower of Ghosts, the guard killed, the ride out. Episode 18 orders it.',
    },
    '13:episode': {
      source: `${SHOW}Gendry`,
      note: 'Gendry page, Season 2: the gold cloaks back with Lannister soldiers, Yoren killed, Gendry captured, Arya passing off the dead recruit with the bull’s head helm as Gendry (GOT203); the prisoners taken to Harrenhal is the episode synopsis. Amory and Polliver stay unnamed: their show gates are 16 and 14. Chapter 93, where the books tell the capture, orders it.',
    },
  },
  'ilyn-payne': {
    '2:16': {
      source: SANSA_I,
      note: 'Sansa I: Sansa is frightened when she comes upon Ser Ilyn Payne at the inn. Episode 2 (GOT102 on the Ilyn page): the same meeting, his tongue removed by the Mad King, the king’s executioner. The record’s log holds the tongue at the gate in both media.',
    },
    '9:66': {
      source: EPISODE_9,
      note: `Episode 9 (GOT109 on the Ilyn page): Ned’s confession at the Great Sept, Joffrey’s order, Ilyn beheading him with Ice. Lady: Cersei calls for him and Ned does it himself (Eddard III, and GOT102). The Ice and Fire Wiki’s Ilyn page has him taking Ice and executing Ned with it. ${PAST_CHAPTER_PAGES}`,
    },
    '10:73': {
      source: EPISODE_10,
      note: 'Show only (GOT110 on the Ilyn page): Marillion brought before Joffrey for a song mocking Robert and Cersei, and Ilyn ordered to cut out his tongue; the reviewed pin at 10/73.',
    },
  },
  'mycah': {
    '2:16': {
      source: SANSA_I,
      note: 'Book version at his gate. Sansa I: the wine Sansa and Joffrey share, Arya playfighting with Mycah, Joffrey threatening him with Lion’s Tooth, Arya attacking the prince, Nymeria wounding his sword hand, the sword thrown into the Trident. The Ice and Fire Wiki’s Mycah page: his friendship with Arya on the ride south.',
    },
    '2:17': {
      source: EDDARD_III,
      note: 'Corrected after review: the Hound’s name is cut, since Sandor opens at episode 4. Eddard III: Ned encounters Sandor Clegane, who has cut down Mycah (the quarrel is in Sansa I). Episode 2 (GOT102 on the Mycah page): the quarrel by the stream, then killed by the Hound, who answers Ned. The show’s cheek cut is left out. The Hound is not linked or named in full, since his record opens at episode 4.',
    },
  },
  'ros': {
    '4:25': {
      source: `${SHOW}Ros`,
      note: 'Show only. Season 1: Tyrion her client (GOT101); Theon recommending her to Tyrion on his way back from the Wall, and Jon telling Sam he once declined her (GOT104), where she is named. The chapter only orders it.',
    },
    '7:48': {
      source: `${SHOW}Ros`,
      note: 'Show only. Season 1: the lion pendant from Tyrion that angers Theon (GOT105), leaving Winterfell on a cart with war coming (GOT106), and Littlefinger’s lesson to her and Armeca with his duel story and “Oh, everything.” (GOT107).',
    },
    '10:73': {
      source: `${SHOW}Ros`,
      note: 'Show only. Season 1 (GOT110): Pycelle’s client, his ramble about Aerys, Robert and Joffrey, her impatience, and her refusal of his offer to escort her.',
    },
    '12:82': {
      source: EPISODE_12,
      note: 'The Ros page: Janos killing Barra before Mhaegen and Ros (GOT201), Ros falling apart before a client, Petyr’s tale of the Lyseni girl sold to a depraved lord, the day off and her smile (GOT202). Her witnessing Barra’s murder in episode 11 is told here with its aftermath rather than in a story of its own. Chapter 82 orders it.',
    },
    '14:103': {
      source: EPISODE_14,
      note: 'The Ros page: Tyrion hiring Ros and Daisy as a late name-day present, the belt, the stag’s-head sceptre, the loaded crossbow, and the order to take Daisy to Tyrion’s chambers (GOT204). Chapter 103 orders it.',
    },
    '18:128': {
      source: EPISODE_18,
      note: 'The Ros page: captured by Cersei for the Lannister pendant from Winterfell, beaten and held, shown to Tyrion with the threat of a gruesome death if harm comes to Joffrey, both keeping Shae’s secret, his vow and her plea (GOT208). Chapter 128 orders it; her status step “captured” is at 18/128.',
    },
    '20:141': {
      source: EPISODE_20,
      note: 'The Ros page: freed some time after the Battle of the Blackwater, Varys’s visit, the eunuch discovered, her fear of Littlefinger admitted, and his protection of those who work for him (GOT210). Chapter 141 orders it; her status step “alive” is at 20/141.',
    },
  },
  'mhaegen': {
    '5:36': {
      source: EPISODE_5,
      note: 'Show only. The episode synopsis: Littlefinger brings Ned to one of his brothels, Mhaegen shows Barra (GOT105 on her page) with Robert’s nose and black hair, and Littlefinger says he does not know why Jon Arryn sought the bastards.',
    },
  },
  'tobho-mott': {
    '4:28': {
      source: EPISODE_4,
      note: 'Episode 4 (GOT104 on the Tobho and Gendry pages): Jon Arryn visited the smithy and wanted to see the apprentice, Ned admires Gendry’s helm and sees Robert in him. The Ice and Fire Wiki’s Tobho page: the shop, Gendry, and the visits of both Hands. Eddard VI has no synopsis there; the record’s gate holds chapter 28.',
    },
  },
  'meryn-trant': {
    '8:30': {
      source: `${BOOKS}Meryn_Trant`,
      note: 'Book version at his book gate. The Ice and Fire Wiki’s Meryn page: north with Robert, in the Hand’s tourney he unhorses Harwin and is beaten by Loras. Sansa II (chapter 30) is the tourney’s first day; which chapter tells his jousts is unverified.',
    },
    '8:51': {
      source: EPISODE_8,
      note: `Episode 8 (GOT108 on the Meryn page): sent with Lannister guards for Arya, Syrio’s wooden sword, Meryn drawing his own and fighting him while Arya flees. The Ice and Fire Wiki’s Meryn page has the same in the book; the reviewed pin at 8/51. ${PAST_CHAPTER_PAGES}`,
    },
    '10:68': {
      source: EPISODE_10,
      note: `Episode 10 (GOT110 on the Meryn page): Joffrey shows Sansa her father’s head, she answers that Robb may bring her his, and Meryn strikes her on his order. The Ice and Fire Wiki’s Meryn page: he beats Sansa on Joffrey’s orders; the reviewed pins at 10/68. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'boros-blount': {
    '19:34': {
      source: `${BOOKS}Boros_Blount`,
      note: `Corrected after review: Boros and Meryn guard the king when he rides away from the party with Eddard, not when he rides alone. Book only. The Ice and Fire Wiki’s Boros page: north with Robert, guarding the king with Meryn when Robert rides off with Ned, the Hand’s tourney, standing by the king during the Clegane fight. The gate puts him at Eddard VIII (34); that chapter’s own content is unverified. ${PAST_CHAPTER_PAGES}`,
    },
    '19:58': {
      source: `${BOOKS}Boros_Blount`,
      note: `Book only. The Ice and Fire Wiki’s Boros page: after Barristan’s removal, Sansa says the rest of the order laughs at his shame; the reviewed pins at 19/58. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'mandon-moore': {
    '19:52': {
      source: `${BOOKS}Mandon_Moore`,
      note: `Book only. The Ice and Fire Wiki’s Mandon page: the Hand’s tourney and standing by the king during the Clegane fight. The reviewed pin at 19/52 has him walking Sansa back from the council chamber in Sansa IV. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'arys-oakheart': {
    '8:58': {
      source: `${BOOKS}Arys_Oakheart`,
      note: `Book only. The Ice and Fire Wiki’s Arys page: the Hand’s tourney, standing by Robert during the Clegane fight. The reviewed pin at 8/58 puts him in the throne room for Barristan’s dismissal. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'dontos-hollard': {
    '11:58': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_57`,
      note: 'Corrected after review: the rescue at the name-day tourney is A Clash of Kings. Sansa V (site 58): at Joffrey’s court a drunken Dontos starts to hail Sansa as she comes to plead for her father, Ser Balon Swann warns him away, and Sansa sees Littlefinger chatting with Dontos and Balon. Book only: his show gate is episode 11.',
    },
  },
  'balon-swann': {
    '4:30': {
      source: `${BOOKS}Balon_Swann`,
      note: 'Book only. The Ice and Fire Wiki’s Balon page: Sansa and Jeyne think him a legendary knight to be, he unhorses Alyn of Winterfell and is bested by Gregor. Placed at Sansa II, the tourney’s first day, by the record’s gate; the archery with Anguy is left out.',
    },
  },
  'loras-tyrell': {
    '5:30': {
      source: SANSA_II,
      note: 'Sansa II: his victory over Robar Royce and the favour Sansa takes from him, and his place in the final four. The Ice and Fire Wiki’s Loras page: a white flower to a maiden after each joust, and a red rose to Sansa.',
    },
    '5:episode': {
      source: EPISODE_5,
      note: 'Show version (GOT105 on the Loras and Petyr pages): the flower to Sansa, the Renly and Littlefinger wager, the mare in heat, Gregor’s attack, Sandor saving him and named champion. Renly as his lover who he urges to claim the crown is the reviewed show-only pin at 5/31.',
    },
    '5:chapter': {
      source: EDDARD_VII,
      note: 'Eddard VII: the mare in heat, Gregor killing his horse and attacking Loras, Sandor protecting him until Robert stops them, Loras awarding Sandor the victory. Barristan calling it a trick is on the Ice and Fire Wiki’s Barristan page.',
    },
    '6:44': {
      source: `${BOOKS}Loras_Tyrell`,
      note: `Book only. The Ice and Fire Wiki’s Loras page: he asks to be sent against Gregor and Eddard sends Beric instead, seeing he wants vengeance. Filed at Eddard XI (44), adapted by episode 6, where the show sends Beric; the chapter is unverified. ${PAST_CHAPTER_PAGES}`,
    },
    '7:50': {
      source: EPISODE_7,
      note: `Episode 7: Varys tells Eddard that Renly has fled with Ser Loras and retainers before the throne room. The book has Varys bring the same news to the council the morning after Robert’s death (A Wiki of Ice and Fire’s Eddard XIV page, site 50: Renly gone with Loras and fifty retainers); the reviewed pins at 7/50.`,
    },
    '13:episode': {
      source: `${SHOW}Loras_Tyrell`,
      note: 'Loras Tyrell page: the bout lost to the woman who steps under his swing, Brienne made Kingsguard, Robb who should have come himself, the humiliation, “Brienne the Beauty”, the gossip about a virgin bride and fetching Margaery (GOT203).',
    },
    '14:105': {
      source: `${SHOW}Loras_Tyrell`,
      note: 'Loras Tyrell and Renly Baratheon pages: Margaery walked to Renly’s tent where Petyr waits, the parley with Renly, Catelyn and Brienne, no compromise, the night to reconsider and Renly asking if they believe he loved Stannis once (GOT204). Chapter 105 orders it.',
    },
    '15:episode': {
      source: `${SHOW}Loras_Tyrell`,
      note: 'Loras Tyrell page: the vigil, Petyr ordered out, Stannis an hour away, the drawn sword, Brienne not believed guilty, Stannis the one to gain, the vow of revenge, Petyr’s advice to be smart, Margaery’s plea that he cannot avenge Renly from the grave, and the horses (GOT205).',
    },
    '19:136': {
      source: `${SHOW}Loras_Tyrell`,
      note: 'Loras Tyrell page: the alliance arranged, Renly’s armor at the Blackwater, his forces arriving at the River Gate and routing Stannis’s men, and the helm removed in the throne room beside Tywin (GOT206, GOT209). Chapter 136 orders it.',
    },
    '20:episode': {
      source: `${SHOW}Loras_Tyrell`,
      note: 'Loras Tyrell page and the Valar Morghulis synopsis: the summons for the king’s reward, the request that Joffrey wed Margaery to join their houses, and Joffrey consenting once the small council persuades him the betrothal to Sansa is no longer needed (GOT210).',
    },
    '13:chapter': {
      source: ST_96,
      note: 'Catelyn II (site 96): king and commons favoring Loras in silver mail and a rainbow cloak, the blue knight disarmed and then forcing his yield with a dirk, Catelyn startled by his youth and beauty, Brienne named, and Loras sharing most in Renly’s jests at the feast. Episode 13 adapts the chapter.',
    },
    '15:chapter': {
      source: ST_105,
      note: `Catelyn III (site 105): the van given to Loras, the stag and rose side by side with Brienne, and Loras kept to help Renly pray. Catelyn IV (${ST_107}): Renly sure Loras will break Stannis’s first lines, and the shadow cutting his throat as Brienne arms him. Episode 15 adapts the second chapter, his role’s pin.`,
    },
    '15:110': {
      source: ST_110,
      note: 'Tyrion VIII (site 110): Varys’s report to the small council that Loras, Tarly and Rowan did not go over to Stannis, that Loras killed three of Renly’s guards in anger, Emmon Cuy and Robar Royce among them, and left with a fifth of the knights, likely for Bitterbridge and Margaery; Tyrion sees the chance to win the Tyrells. Episode 15 adapts the chapter.',
    },
    '20:chapter': {
      source: ST_139,
      note: 'Sansa VIII (site 139): Mace with Garlan and Loras presented among the heroes, Loras named to the Kingsguard, Mace on the small council, Garlan asking for Margaery and the betrothal to Sansa voided. Episode 20, Garlan’s show gate, orders it.',
    },
  },
  'masha-heddle': {
    '4:29': {
      source: CATELYN_V,
      note: 'Chapter 29: Catelyn and Rodrik stop at the inn Masha runs, posing as travellers; Tyrion arrives with Yoren, there is no room, he recognises Catelyn and she calls on the men present to seize him for the attempt on Bran. Episode 4 (Masha Heddle page, GOT104) has the same scene. The story leaves out who gives up a room and whether Masha knows Catelyn, where the media differ.',
    },
    '8:57': {
      source: `${SHOW}Masha_Heddle`,
      note: `In the books: Tywin takes the inn for his quarters and hangs Masha from a gibbet for letting his son be taken; Tyrion, at his father’s camp, looks at what is left of her and remembers asking only for a room, a meal and a flagon of wine. Her status entry is 8/57 chapter. The chapter is Tyrion VII, which the relationship pin dates to 57. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'jason-mallister': {
    '4:29': {
      source: CATELYN_V,
      note: 'Chapter 29: Lord Jason’s retinue passes Catelyn and Rodrik on the kingsroad and he does not recognise her, though she knows him from childhood. The Ice and Fire Wiki’s Jason Mallister page adds the son Patrek, the cursory nod and the Hand’s tourney as his destination.',
    },
    '9:64': {
      source: `${BOOKS}Jason_Mallister`,
      note: `Added after review. Ice and Fire Wiki, Jason Mallister, A Game of Thrones: he captures Lord Gawen Westerling at the Battle of the Whispering Wood, which Catelyn X (site 64) tells with Jaime’s capture. The war council at Riverrun is left out, since no page names him there. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'willis-wode': {
    '4:29': {
      source: CATELYN_V,
      note: 'Chapter 29: an old knight with the bat of House Whent answers Catelyn’s call; the Ice and Fire Wiki’s Willis Wode page names him among the first to back her. Episode 4 (Willis Wode page, GOT104): sworn to House Whent of Harrenhal, he draws his sword on Tyrion after Catelyn calls on her father’s bannermen.',
    },
    '5:episode': {
      source: `${SHOW}Willis_Wode`,
      note: 'Season 1, citing GOT105: he rides east into the Vale with Catelyn’s party (Tyrion, Rodrik, Bronn, Marillion), the hill tribes attack, and he dies defending Catelyn; the survivors go on to the Eyrie. Show only: in the books he survives the journey. His status is 5/35 episode.',
    },
  },
  'gregor-clegane': {
    '4:30': {
      source: SANSA_II,
      note: 'Chapter 30: Gregor kills Hugh of the Vale in the Hand’s tourney, and the brazier story of Sandor’s face. Episode 4 (Gregor Clegane page, GOT104): the lance kills Hugh, and the face pushed into a fire over a toy. The story leaves out who tells the burn story, Sandor in the book and Littlefinger on screen. The toy is in the dossier log at 4/30.',
    },
    '5:31': {
      source: EDDARD_VII,
      note: 'Chapter 31: Loras rides a mare in heat, Gregor is unhorsed, kills his own horse and attacks Loras, Sandor protects him, Robert commands them to stop and Gregor storms away. Episode 5 (Gregor Clegane page, GOT105) has the same sequence. Relationship pin 5/31.',
    },
    '6:44': {
      source: `${SHOW}Gregor_Clegane`,
      note: `Season 1, citing GOT106: riverlands refugees at court, Eddard strips Gregor of ranks, titles and lands and sends Beric to bring him to justice. The book side is Eddard XI, adapted by episode 6; the reviewed relationship pin and the role step at 6/44 hold the stripping and the company in both media. ${PAST_CHAPTER_PAGES}`,
    },
    '10:70': {
      source: EPISODE_10,
      note: 'Show only (Gregor Clegane page, season 1, citing GOT110): after Robb’s victory over Jaime, Tywin withdraws towards Harrenhal and orders Gregor to take five hundred men and set the riverlands on fire, from the Gods Eye to the Red Fork. The chapter only orders it.',
    },
    '13:93': {
      source: `${ACOK_AWOIAF}19`,
      note: 'Arya V (site 93): the village under the lion and three dogs, the gibbet and the storehouse, Gendry caught, Arya and Hot Pie taken, Arya remembering the Hound’s brother, Gregor sending the captives to lead his men, a spearman killing Lommy. Episode 13 orders it.',
    },
    '14:episode': {
      source: `${SHOW}Gregor_Clegane`,
      note: 'Gregor Clegane page, Season 2: raiding from Harrenhal, torture for valuables and the Brotherhood, prisoners chosen by him, Tywin arriving a day early, the full cells, the prisoners put to work (GOT204). Arya adding him to her list is on the Arya Stark page (GOT204).',
    },
    '14:chapter': {
      source: `${ACOK_AWOIAF}26`,
      note: 'Arya VI (site 100): the prisoner picked each morning and the Tickler’s questioning until death, about valuables and Beric Dondarrion, “Obey, serve, and live”, stragglers killed, the girl who struck a guard beheaded before the others. The Tickler is named unlinked: his show gate is 15.',
    },
    '17:112': {
      source: `${SHOW}Gregor_Clegane`,
      note: 'Gregor Clegane page: tasked with finding Amory’s killer, thirty of their own men hanged, the Brotherhood infiltrator suggested, sent to press the smallfolk (GOT207); the burning of villages and farms is the episode synopsis.',
    },
    '18:episode': {
      source: `${SHOW}Gregor_Clegane`,
      note: 'Gregor Clegane page: Tywin marching west and leaving him castellan (GOT208); Arya left as cupbearer and the escape through the gate are on the Tywin Lannister and Arya Stark pages (GOT208).',
    },
    '18:chapter': {
      source: `${ACOK_AWOIAF}38`,
      note: 'Arya VIII (site 112): Gregor to command Tywin’s van, out of Arya’s reach with Polliver and the rest, riding out last behind the lords with Polliver wearing Gendry’s helm. Episode 18 orders it.',
    },
    '18:119': {
      source: `${ACOK_AWOIAF}45`,
      note: 'Catelyn VI (site 119): Edmure holding off Gregor in fierce fighting at the Stone Mill, Leo Lefford drowned, Tywin marching away southeast, the news brought by Edmure’s messenger. Edmure is unlinked: his show gate is 23. Episode 18 orders it.',
    },
  },
  'beric-dondarrion': {
    '6:28': {
      source: `${BOOKS}Beric_Dondarrion`,
      note: 'In the books: Eddard spots Beric arriving in King’s Landing for the Hand’s tourney on his way to the Street of Steel to visit Tobho Mott (Ice and Fire Wiki, Beric Dondarrion page); chapter 28 is his first appearance on the Eddard VI page. Blackhaven, a small castle on the Dornish Marches, is from the In the books section of his Game of Thrones Wiki page and his record summary.',
    },
    '6:44': {
      source: `${SHOW}Gregor_Clegane`,
      note: `Season 1, citing GOT106: refugees report the raids, Eddard strips Gregor and sends Beric with men to bring him to justice. The book side is Eddard XI, adapted by episode 6, and the reviewed relationship pin at 6/44 covers both media. Thoros, in the book company only, is left out. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'thoros-of-myr': {
    '22:30': {
      source: `${BOOKS}Thoros_of_Myr`,
      note: 'In the books: at the Hand’s tourney Sansa and Jeyne Poole giggle at his appearance until Septa Mordane tells them of his prowess and his feats at Pyke; he unhorses Beric. Chapter 30 (Sansa II) lists him and Beric as appearing and is his first appearance.',
    },
    '22:44': {
      source: `${SHOW}Thoros_of_Myr`,
      note: `In the books section: Eddard orders Thoros to accompany Beric to arrest Gregor; he won the melee the day after the joust (chapter 31, Eddard VII synopsis). Relationship pin 22/44 chapter. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'walder-frey': {
    '9:episode': {
      source: EPISODE_9,
      note: 'Walder Frey page, season 1, citing GOT109: he has delayed joining until he sees which side wins; Catelyn bargains; Robb is to marry a daughter or granddaughter, Arya the son Waldron when she is found, and Olyvar becomes Robb’s squire; Robb agrees.',
    },
    '9:chapter': {
      source: `${BOOKS}Walder_Frey`,
      note: `In the books: slow to answer Edmure’s call to arms, he lets Robb cross for two marriage pacts, Robb to a daughter and Arya to the youngest son, Elmar; Big Walder and Little Walder go to Winterfell as wards and Olyvar becomes Robb’s squire. The chapter is Catelyn IX, which episode 9 adapts. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'stevron-frey': {
    '9:episode': {
      source: `${SHOW}Stevron_Frey`,
      note: 'Season 1, citing GOT109: he reminds his father of his courtesies to Catelyn, Walder says he is not lord yet, kisses her hand reluctantly and dismisses the family to talk in private.',
    },
    '9:chapter': {
      source: `${BOOKS}Stevron_Frey`,
      note: `Corrected after review: the age is Stevron’s, not his father’s. In the books: he parleys with Robb outside the Twins, shows courtesy and deference to Lady Stark, and marches south with Robb after the agreement; a man in his sixties (In the books section of his Game of Thrones Wiki page). ${PAST_CHAPTER_PAGES}`,
    },
    '10:72': {
      source: `${BOOKS}Stevron_Frey`,
      note: `In the books: at the Riverrun war council he advises letting the Baratheons and Lannisters weaken each other and ransoming Jaime; the Game of Thrones Wiki adds the truce he proposes. The northern lords crown Robb instead. Relationship pin 9/72 chapter; the chapter is Catelyn XI. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'edmure-tully': {
    '23:72': {
      source: `${BOOKS}Edmure_Tully`,
      note: `In the books: he commands the riverlands armies, spreads them along the border, sends envoys to King’s Landing on his father’s advice, is taken by Jaime and freed when Robb lifts the siege, and is at the council that declares Robb King in the North. Relationship pin 23/72 chapter. The story does not say where he was taken, since the two wikis disagree. ${PAST_CHAPTER_PAGES}`,
    },
    '23:81': {
      source: `${ACOK_AWOIAF}7`,
      note: 'Catelyn I (site 81): urging Robb on Harrenhal, Robb lacking the strength, Catelyn blaming him for sending the river lords home, “the boy” and Robb’s roar, the comet as a Tully fish. Episode 23, his show gate, orders it.',
    },
    '23:113': {
      source: `${ACOK_AWOIAF}39`,
      note: 'Catelyn V (site 113): left to hold Riverrun, Cleos’s men hanged, Jaime in the deep dungeons, smallfolk admitted, Roose ordered to take Harrenhal, the Red Fork plan to trap Tywin, Catelyn’s dissent. Episode 23 orders it.',
    },
    '23:119': {
      source: `${ACOK_AWOIAF}45`,
      note: 'Catelyn VI (site 119): the host leaving for the fords, the Mallister archers, Jason Mallister’s ford, the victory: Leo Lefford drowned, Lyle Crakehall taken, Addam Marbrand thrice driven back, Gregor held at the Stone Mill, Tywin marching southeast. Episode 23 orders it.',
    },
  },
  'hoster-tully': {
    '23:72': {
      source: `${BOOKS}Hoster_Tully`,
      note: `In the books: he hides his illness from his vassals, insists the plea for aid be made before the king, delegates to Edmure, and asks Catelyn to his chambers on her arrival; the Game of Thrones Wiki’s In the books section says he is still lucid then. Relationship pin 23/72 chapter. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'brynden-tully': {
    '23:35': {
      source: `${BOOKS}Brynden_Tully`,
      note: `In the books: he meets Catelyn after she rides through the mountains to the Vale with Tyrion as her captive. Relationship pin 23/35 chapter, which also holds Lysa’s service. The chapter is Catelyn VI, which episode 5 adapts. ${PAST_CHAPTER_PAGES}`,
    },
    '23:56': {
      source: `${BOOKS}Brynden_Tully`,
      note: `In the books: Lysa will not aid the riverlands, so he resigns his post, sails with Catelyn to White Harbor and on to Moat Cailin, meets Robb, and is named leader of the outriders with a seat on the war council. Relationship pin 23/56 chapter. ${PAST_CHAPTER_PAGES}`,
    },
    '23:64': {
      source: `${BOOKS}Brynden_Tully`,
      note: `In the books: he fights the Lannister outriders under Addam Marbrand and keeps Robb’s crossing hidden, so that Robb surprises Jaime in the Whispering Wood; Jaime’s capture is his status at 9/64. The chapter is Catelyn X, which episode 9 adapts. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'bronn': {
    '4:episode': {
      source: EPISODE_4,
      note: 'Bronn page, season 1, citing GOT104, and the Masha Heddle page: told there are no rooms, Tyrion holds up a gold coin, Bronn gives up his room and Tyrion throws him the coin; Catelyn has Tyrion taken before he gets it.',
    },
    '4:chapter': {
      source: `${BOOKS}Bronn`,
      note: 'In the books: he and Chiggen answer Catelyn at the inn and ride in the escort; Tyrion notes he joins hoping for a reward; he fights the clansmen and takes Jyck’s fine boots from the dead. Chapter 32 (Tyrion IV) is his gate; its page has no synopsis, so the pin of the fight and the boots is unverified.',
    },
    '6:41': {
      source: `${BOOKS}Vardis_Egen`,
      note: `In the books: Tyrion demands a trial by combat, Vardis is the house’s champion in heavy plate, Bronn moves quickly to tire him and kills him, and Lysa lets them go. Episode 6 (Bronn page, GOT106): speed against the armoured knight, the kill, the departure. The story leaves out the statue and the Moon Door, where the media differ. Relationship pin 6/41. ${PAST_CHAPTER_PAGES}`,
    },
    '8:43': {
      source: `${BOOKS}Bronn`,
      note: `Corrected after review: the record hires him at 6/41 in both media, so the story no longer reads as a later hire. In the books: on the road back he enters Tyrion’s service as a hired sword, Tyrion tells him about Tysha, and Tyrion wins over the clansmen who approach them. The Baelor episode page lists Tyrion VI for the Tysha talk; site chapter 43 is that chapter, and Shagga’s gate. ${PAST_CHAPTER_PAGES}`,
    },
    '8:57': {
      source: EPISODE_8,
      note: 'Show only (Bronn page, season 1, citing GOT108): his terms, no friend and no sworn sword; Tyrion promises to beat any offer; Shagga’s Stone Crows catch them and Tyrion wins them over with weapons; at Tywin’s camp the quip about Tywin’s father, which amuses Kevan but not Tywin. The chapter orders it after Tywin’s and Kevan’s gates.',
    },
    '9:episode': {
      source: EPISODE_9,
      note: 'Bronn page, season 1, citing GOT109: he finds Shae among the camp followers, the drinking game, his parents beat him, his first kill before twelve, he wakes Tyrion, Tyrion is knocked out and told they won. The Shae page (GOT109) has the knight he persuades to give her up.',
    },
    '9:chapter': {
      source: `${BOOKS}Bronn`,
      note: `In the books: after they join Tywin’s host he finds Shae for Tyrion, taking her from a knight, and both fight in the Battle on the Green Fork. Relationship pin 9/63; the chapter is Tyrion VIII. ${PAST_CHAPTER_PAGES}`,
    },
    '5:35': {
      source: EPISODE_5,
      note: 'Added after review. Synopsis and the Bronn page (GOT105): Bronn rides with Catelyn’s party on the high road, Tyrion offers a reward to whoever helps him, Bronn kills several hill tribesmen in the attack, and Tyrion and Catelyn both notice his skill. Show only: the book’s version of the attack is the 4/32 story.',
    },
    '12:episode': {
      source: EPISODE_12,
      note: 'The King’s Landing synopsis: Janos arrested and exiled, Bronn installed as Commander of the City Watch (GOT202); the relationship card at 12/82 has the reward for his loyalty and the question about killing an infant. Chapter 82, Tyrion II, orders it; his role step is at 12/82.',
    },
    '14:103': {
      source: EPISODE_14,
      note: 'The Pycelle page: Bronn cutting off the beard and the arrest with Daisy in the bed (GOT203); the King’s Landing synopsis of episode 14: Bronn ordered to kill Meryn if he speaks again, and his suggestion of a prostitute for Joffrey (GOT204). Chapter 103 orders it.',
    },
    '19:135': {
      source: EPISODE_19,
      note: 'The King’s Landing synopsis: Bronn drinking and the confrontation with Sandor, his post on the shore of the bay, Tyrion’s torch, the flaming arrow and the explosion, and Bronn saving the petrified Sandor (GOT209). Chapter 135 orders it.',
    },
    '20:141': {
      source: EPISODE_20,
      note: 'The King’s Landing synopsis: Tywin back to take over as Hand, Varys telling Tyrion that Bronn has been relieved of his command and the hill tribesmen have gone home with their plunder, and Tyrion’s lost power (GOT210). Chapter 141 orders it; his role step “Former commander of the City Watch” is at 20/141.',
    },
    '12:chapter': {
      source: KL_82,
      note: 'Tyrion II (site 82): the recruiting by duel, the man who kills Bronn being one Tyrion wants, “Without question? No. I’d ask how much”, and Tyrion’s hundred such men.',
    },
    '13:91': {
      source: KL_91,
      note: 'Tyrion IV (site 91): Bronn armoured as captain of the Hand’s guard, Ser Tallad’s rhythm, the thirty supplicants (Lady Tanda’s page, the Braavosi moneylender, the river lordling, the food merchants), Alliser Thorne with his rotten hand, and the dirty cell.',
    },
    '19:133': {
      source: KL_133,
      note: 'Tyrion XI (site 123): Bronn ordered to burn the houses along the wall by the quay; Tyrion XIII (site 133): Bronn’s position under the Red Keep, the oxen and the winches, the chain raised once Stannis’s flagship has passed, and the ships trapped in the wildfire.',
    },
    '18:128': {
      source: `${SHOW}Bronn`,
      note: 'Bronn page: crime cut by culling the known thieves, the clash with Tyrion over the brutality, the defence planning, his dismissal of Tyrion’s books, food as the key in a siege, and the thieves rounded up to protect the stores (GOT208). Chapter 128 orders it.',
    },
  },
  'shae': {
    '9:episode': {
      source: `${SHOW}Shae`,
      note: 'Season 1, citing GOT109: attached to a ginger-haired knight until Bronn persuades him, Tyrion asks for the truth and for her to act as if she wants him, the drinking game, she deflects and learns of Tysha, the girl Jaime paid and the guards Tywin set on her.',
    },
    '9:chapter': {
      source: `${BOOKS}Bronn`,
      note: `In the books: Bronn takes her from a knight for Tyrion (Ice and Fire Wiki, Bronn page); she spends the night before the battle with him (relationship pin 9/63). Small, slender, dark eyes and black hair are from the In the books section of her Game of Thrones Wiki page, not checked against the chapter. ${PAST_CHAPTER_PAGES}`,
    },
    '10:70': {
      source: `${SHOW}Shae`,
      note: `Season 1, citing GOT110: Tywin names Tyrion acting Hand, forbids him to take Shae to court, and Tyrion defies him; Bronn goes with him (Bronn page, GOT110). In the books she goes with him though Tywin forbade it (Ice and Fire Wiki, Shae page). Relationship pin 10/70 in both media. ${PAST_CHAPTER_PAGES}`,
    },
    '13:99': {
      source: EPISODE_13,
      note: 'The King’s Landing synopses: Shae hidden in the Tower of the Hand against Tywin’s order (GOT201), Varys discovering her (GOT202), her complaint about her confinement, Tyrion and Varys finding her a job, and her report as Sansa’s handmaiden (GOT203). Chapter 99 orders it; her role step “Sansa Stark’s handmaiden” is at 13/99.',
    },
    '16:115': {
      source: EPISODE_16,
      note: 'The King’s Landing synopsis: Sansa dragged away in the riot and saved by Sandor; the Shae page has Sansa, injured and almost raped, coming to trust Shae and confiding her hatred of Joffrey, and Shae’s warning to trust no one (GOT206). No page says Shae tends the wounds, so the story leaves it out. Chapter 115 orders it.',
    },
    '17:126': {
      source: EPISODE_17,
      note: 'The King’s Landing synopsis: the first period, Sansa’s panic over the marriage and the son expected, Shae helping her flip the mattress and hide the sheets, Sandor finding them, and Sansa brought before Cersei (GOT207). Chapter 126 orders it.',
    },
    '19:136': {
      source: EPISODE_19,
      note: 'The King’s Landing synopsis: the night with Tyrion and her loyalty, Cersei questioning the unlikely handmaiden, and Shae’s advice to Sansa to lock herself in and await Stannis rather than Ser Ilyn (GOT209). Chapter 136 orders it.',
    },
    '20:141': {
      source: EPISODE_20,
      note: 'The King’s Landing synopsis: the shabby quarters, the scar Shae uncovers, Tywin taking over as Hand, Varys on his lost power, and her plea to leave for Pentos, refused (GOT210). Chapter 141 orders it.',
    },
    '11:77': {
      source: KL_77,
      note: 'Tyrion I (site 77): Shae at the Broken Anvil with Varys and the Black Ears, Tyrion’s irritation at how quickly she was found, her guess that the rich man lives, her teasing about the Tower of the Hand, his “Shae is a whore” and “I’ll do… justice”.',
    },
    '14:103': {
      source: KL_103,
      note: 'Tyrion VII (site 103): the manse arranged by Varys, the guards Tyrion asked for (a Braavosi daggerman, a eunuch strangler and two Ibbenese), the clansmen kept away to keep the secret, the shaft from Chataya’s turret room, and “the sweetest dream”.',
    },
    '13:118': {
      source: KL_118,
      note: 'Tyrion X (site 118): Shae asking to be his lady at court and to kill Cersei, the kitchens refused, the mockery about Tywin, the slap, the story of Tysha, and Varys’s plan of Lollys’s household and the secret passage. Her role step “Lollys Stokeworth’s maid” sits at 18/123 (Tyrion XI), so the story tells only the proposal.',
    },
    '18:123': {
      source: KL_123,
      note: 'Tyrion XI (site 123): during the Kingsguard investiture in the royal sept Tyrion recalls that Shae has entered House Stokeworth’s service as Lollys’s bedmaid, Tyrion letting her take only a few dresses and keeping her finer clothes and jewels in his own chambers. Varys’s proposal and the hiding from Cersei are Tyrion X (site 118). Her role step “Lollys Stokeworth’s maid” is at 18/123 (#1617, owner ruling on #1489); the Queen’s Ballroom scene of Sansa V (site 131) stays in Lollys’s own story.',
    },
    '18:128': {
      source: KL_128,
      note: 'Tyrion XII (site 128): Alayaya brought in beaten, Tyrion relieved that Cersei has not found Shae, and Shae in his room through the secret passage, blindfolded by Varys.',
    },
  },
  'podrick-payne': {
    '19:63': {
      source: `${SHOW}Podrick_Payne`,
      note: `In the books section: a shy member of a cadet branch of House Payne, assigned by Kevan to Tyrion as squire shortly before the battle on the Green Fork. Relationship pin 19/63 chapter: the show's gate moved to episode 19, where the wiki first has his name said (#1457). Tyrion going into battle with the clansmen follows Tywin’s agreement in the Bronn page; unverified on the chapter text. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'addam-marbrand': {
    '10:63': {
      source: `${SHOW}Addam_Marbrand`,
      note: 'Season 1, citing GOT108 for his outriders and GOT110 for the council after the Stark victory: he asks about Stannis and Renly, Kevan confirms they have declared against the Lannisters, he dismisses suing for a truce and proposes to march, and Tywin announces the move to Harrenhal. Show story at his gate; the chapter only orders it.',
    },
    '10:70': {
      source: `${SHOW}Addam_Marbrand`,
      note: `In the books section: at Tywin’s council after the Whispering Wood and the Camps he says two battles do not make a war and offers his steel against the Stark boy; Tywin orders the host to Harrenhal with Addam’s outriders screening. Filed at Tyrion IX, which episode 10 adapts. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'hot-pie': {
    '10:episode': {
      source: `${SHOW}Hot_Pie`,
      note: 'Season 1, citing GOT110: with another recruit he bullies Arry for Needle, claims he kicked a boy to death, Arya threatens him, he backs into Gendry, who scares him off. Show only: in the books Hot Pie opens at chapter 75, so the chapter only orders it.',
    },
    '10:chapter': {
      source: `${ACOK_AWOIAF}1`,
      note: 'Arya I (site 75): Hot Pie and Lommy mocking Needle, his threat to beat Arry as he beat another boy, thrown from his donkey, his nose broken, Yoren pulling Arya off, days lying in a wagon. Episode 10 orders it: his gate.',
    },
    '13:88': {
      source: `${SHOW}Hot_Pie`,
      note: 'Hot Pie page, Season 2: the boast about battles and the two men in armour outside a Flea Bottom tavern (GOT202), hiding in the bushes and yielding, the wounded recruit killed after asking to be carried (GOT203). Lommy stays unnamed: his show gate is 31.',
    },
    '13:93': {
      source: `${ACOK_AWOIAF}19`,
      note: 'Arya IV (site 88) has him on the wall beside Arya, saying he cannot fight; Arya V (site 93) has his wish to yield and beg food, the crow on his back, his “I yield”, telling Gregor’s men about the others and promising pies. Episode 13 orders it.',
    },
    '18:episode': {
      source: `${SHOW}Hot_Pie`,
      note: 'Hot Pie page: the Tickler’s corpse found (GOT205), recipes with Gendry, food stolen from the kitchens, the walk to the gate at midnight and the dead guards (GOT208). Chapter 138 orders it.',
    },
    '18:chapter': {
      source: `${ACOK_AWOIAF}64`,
      note: 'Arya VI (site 100) has Chiswyck’s “join the ghosts or become one”; Arya IX (site 121) the tarts and his preferring the castle; Arya X (site 138) Gendry fetching him, the meeting near the Tower of Ghosts and the sally port. Episode 18 orders it.',
    },
  },
  // Yoren’s prisoners and Lommy, first told in the second stage (#1486).
  'lommy': {
    '31:75': {
      source: `${ACOK_AWOIAF}1`,
      note: 'Arya I (site 75): Lommy Greenhands naming her for her hair, mocking Needle with Hot Pie and egging him on, cowering when Arya turns on him, keeping away afterwards. Episode 31, his show gate, orders it.',
    },
    '31:88': {
      source: `${ACOK_AWOIAF}14`,
      note: 'Arya IV (site 88): Lommy smashing the head of the man wrestling Dobber, Dobber dead, Lommy found bleeding from a spear wound in his calf; that he escapes with the others is told at 93, so the story stops at the wound. Episode 31 orders it.',
    },
    '31:93': {
      source: `${ACOK_AWOIAF}19`,
      note: 'Arya V (site 93): carried on a litter, his talk of yielding, Gendry thinking he will die, Gregor’s men led back to him, his yielding, “Think so?” and the spear through his throat. Episode 31 orders it.',
    },
  },
  'jaqen-hghar': {
    '12:episode': {
      source: `${SHOW}Jaqen_H'ghar`,
      note: 'Jaqen H’ghar page, Season 2: water asked of Arry, whom he calls a boy, speaking of himself as “a man”, his apology for his company, his introduction and Lorath, “more courage than sense” (GOT202). The black cells are on the Arya Stark page (GOT202).',
    },
    '12:chapter': {
      source: `${ACOK_AWOIAF}5`,
      note: 'Arya II (site 79): the youngest prisoner, hair red on one side and white on the other, beer asked of Arry as a boy, himself as “a man”, his introduction with Rorge and Biter, Biter struck, “more courage than sense”. Lorath is left out: it opens in the books at chapter 121.',
    },
    '13:episode': {
      source: `${SHOW}Jaqen_H'ghar`,
      note: 'Jaqen H’ghar page: the dropped torch, his call for help as flames reach the bars, the axe from Arya, his not fighting the Lannister men and his surprise (GOT203). That the three prisoners survive is told only in episode 15, so the story stops before it.',
    },
    '13:chapter': {
      source: `${ACOK_AWOIAF}14`,
      note: 'Arya IV (site 88): Jaqen calling to be freed to fight, Arya ignoring him, the burning barn, Rorge and Biter struggling, his friendly voice, the axe thrown in, Rorge hacking at the wagon.',
    },
    '15:episode': {
      source: `${SHOW}Jaqen_H'ghar`,
      note: 'Jaqen H’ghar page: in Lannister uniform, always knew she was a girl, three lives taken from the Red God and three deaths owed, the Tickler named and found dead, the finger to his cheek (GOT205).',
    },
    '15:chapter': {
      source: `${ACOK_AWOIAF}30`,
      note: 'Arya VII (site 104): at the end of Amory’s column with Rorge and Biter, the hand over her mouth, the boy become a girl, three lives for the Red God and nothing more, Riverrun refused, Chiswyck’s name in the Barracks Hall, the fall on the third day.',
    },
    '16:episode': {
      source: `${SHOW}Jaqen_H'ghar`,
      note: 'Jaqen H’ghar page and Amory Lorch page: Arya’s urgent second name, his reluctance, the wolfsbane dart seconds before Amory reaches Tywin (GOT206). Tywin’s belief that he was the target is episode 17’s and is left out.',
    },
    '16:chapter': {
      source: `${ACOK_AWOIAF}38`,
      note: 'Arya VIII (site 112): staying with Amory, the bathhouse, “clever girls go barefoot”, Weese’s name, Weese dead under his dog after the host leaves, two fingers across his cheek.',
    },
    '18:episode': {
      source: `${SHOW}Jaqen_H'ghar`,
      note: 'Jaqen H’ghar page: on patrol when Tywin leaves, the refused escape, his oath, his own name, the plea and the bargain, the guards killed and pinned with spears (GOT208).',
    },
    '18:chapter': {
      source: `${ACOK_AWOIAF}47`,
      note: 'Arya IX (site 121): the godswood, Arya Stark by name, his own name given, the kettles of soup with Rorge and Biter, the northmen freed, the debt paid, the hand over his face, the coin and “valar morghulis”. Episode 18, where the show adapts the name, orders it.',
    },
    '20:121': {
      source: `${SHOW}Jaqen_H'ghar`,
      note: 'Jaqen H’ghar page: waiting on a cliff, Braavos and the Faceless Men offered, her refusal, the coin and “valar morghulis”, Jaqen H’ghar declared dead, the new face, “Farewell, Arya Stark” (GOT210).',
    },
  },
  'rorge': {
    '12:79': {
      source: `${ACOK_AWOIAF}5`,
      note: 'Arya II (site 79): the noseless prisoner introduced by Jaqen, his mockery, the thrown tankard, the demand for beer, his threat, his laughter as Gendry leads her away; the black cells are Arya I (site 75).',
    },
    '13:88': {
      source: `${ACOK_AWOIAF}14`,
      note: 'Arya IV (site 88): Rorge and Biter struggling in the burning barn, the axe thrown in, Rorge catching it and hacking at the wagon, the wood splintering before the barn falls.',
    },
    '18:121': {
      source: `${ACOK_AWOIAF}47`,
      note: 'Arya VII (site 104) brings him in with Amory’s column; Arya VIII (site 112) has his threat and the fear when she asks for Jaqen; Arya IX (site 121) has the kettle carried alone and the cells unlocked for Robett Glover’s men. Episode 18 orders it.',
    },
  },
  'biter': {
    '12:79': {
      source: `${ACOK_AWOIAF}5`,
      note: 'Arya II (site 79): the hiss and the stump of his tongue, the name Jaqen gave him for his filed teeth, the lunge, the blow between the eyes, the chains holding.',
    },
    '13:88': {
      source: `${ACOK_AWOIAF}14`,
      note: 'Arya IV (site 88): Biter’s screams in the burning barn, Arya crawling towards them, the axe thrown in, Rorge hacking the wagon open.',
    },
    '18:121': {
      source: `${ACOK_AWOIAF}47`,
      note: 'Arya VII (site 104): his half-healed wounds in Amory’s column; Arya IX (site 121): two kettles carried at once to the cells beneath the Widow’s Tower and the soup thrown over the guards. Episode 18 orders it.',
    },
  },
  'lysa-arryn': {
    '5:35': {
      source: `${SHOW}Lysa_Arryn`,
      note: 'Season 1: the flight to the Eyrie and the letter blaming the Lannisters cite GOT101; the fury at Catelyn, the scorned threats, the sky cells and the breastfeeding cite GOT105. The episode page has the Eyrie as impregnable. Chapter 35 only orders it.',
    },
    '6:episode': {
      source: EPISODE_6,
      note: 'The Eyrie synopsis: the confession of petty sins, the demand for a trial and then a trial by combat, Vardis agreeing to be her champion, Jaime refused because he is absent, Bronn stepping forward, the Moon Door and the exchange about honour; Tyrion and Bronn are allowed to go.',
    },
    '6:chapter': {
      source: `${BOOKS}Vardis_Egen`,
      note: `The accusation of Jon Arryn’s murder, the choice of Vardis, Bronn wearing him down and the reluctant release by the high road are on the Vardis page; the nursing at the hearing is the relationship pin at 5/39, and Jon Arryn’s greatsword is on the Game of Thrones Wiki’s Vardis page, In the books. Catelyn VII is site 41. ${PAST_CHAPTER_PAGES}`,
    },
    '8:56': {
      source: `${SHOW}Lysa_Arryn`,
      note: 'Season 1, citing GOT108: the letter about Robert’s death and Eddard’s arrest, which she delays showing, and her refusal to send the knights of the Vale, who must defend Robin. Chapter 56 only orders it.',
    },
  },
  'robin-arryn': {
    '5:35': {
      source: `${SHOW}Robin_Arryn`,
      note: 'Season 1, citing GOT105: still breastfed though too old, prone to histrionics, demanding to see “the bad man fly”; Lysa calls him a strong ruler and Catelyn is sceptical.',
    },
    '6:episode': {
      source: EPISODE_6,
      note: 'The Eyrie synopsis and the Robin Arryn page (GOT106): intrigued by the confession, the trial won by Bronn over Vardis, the question about making the little man fly and the answer that he is going home, the denied Moon Door execution.',
    },
    '6:chapter': {
      source: `${BOOKS}Robert_Arryn`,
      note: `A sickly child for whom his mother rules and whom she still nurses. Asking to see Tyrion fly is the relationship pin at 5/39; the trial and Vardis’s death are the pins at 6/41. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'hugh-of-the-vale': {
    '4:30': {
      source: `${SHOW}Hugh_of_the_Vale`,
      note: 'Season 1 (GOT104): Jory sent to question him and refused, the death in the joust with Gregor. In the books the same: Littlefinger names him (site 26), Jory questions him off the page (site 28), and the lance kills him at the tourney Sansa watches (site 30, Sansa II synopsis).',
    },
    '5:episode': {
      source: EPISODE_5,
      note: 'The synopsis: Barristan stood vigil because Hugh had no family or friends, and Eddard asks how he could afford new armour. Barristan’s guess about Jon Arryn’s money, Eddard’s suspicion and Varys agreeing that the Lannisters had him killed are on the Hugh of the Vale page, citing GOT105.',
    },
    '5:chapter': {
      source: `${BOOKS}Hugh_of_the_Vale`,
      note: 'Sandor’s view of the badly fastened gorget (site 30). The Eddard VII synopsis, site 31: Eddard and Barristan over the body, then Varys naming the tears of Lys and suggesting Hugh did it and was killed by a Lannister bannerman. The mother in the Vale and the armour are on the Game of Thrones Wiki’s Hugh page, In the books (AGOT 30).',
    },
  },
  'robar-royce': {
    '4:30': {
      source: `${BOOKS}Robar_Royce`,
      note: 'Robar comes with his father and brother to the Hand’s tourney, beats Ser Lothor Brune and loses to Loras, who so reaches the last four. The Sansa II synopsis (site 30) has the loss to Loras; the brother’s name Andar is on the Yohn Royce page.',
    },
  },
  'yohn-royce': {
    '38:30': {
      source: `${BOOKS}Yohn_Royce`,
      note: 'Yohn rides to the Hand’s tourney with his sons Andar and Robar, and is unhorsed in the jousts (by whom is not said). The Game of Thrones Wiki’s Yohn page, In the books, cites AGOT 29, site 30. Sworn to House Arryn is his record’s log.',
    },
  },
  'nestor-royce': {
    '5:35': {
      source: `${BOOKS}Mya_Stone`,
      note: `No page for Nestor on either wiki. The Mya Stone page, citing AGOT 34 (site 35), has Catelyn at the Gates of the Moon, Lysa ordering her up and Mya guiding her; his office and his receiving Catelyn are his record’s log and the relationship pin at 5/35. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'mya-stone': {
    '5:35': {
      source: `${BOOKS}Mya_Stone`,
      note: 'Citing AGOT 34, site 35: Lysa orders Catelyn up, Mya takes her up with mules, and she tells Catelyn of her love for the squire Mychel Redfort; Catelyn thinks it unlikely because Mya is baseborn. The night climb and the supplies are her record’s log.',
    },
  },
  'vardis-egen': {
    '6:35': {
      source: `${BOOKS}Vardis_Egen`,
      note: `A Game of Thrones: he greets Catelyn at the Eyrie and takes her to her sister (the relationship pin at 6/35). Taking Tyrion to the sky cells is left out, since no page dates it to Catelyn VI. Captain of the guard under Jon Arryn as Hand is on the Game of Thrones Wiki’s page, In the books. ${PAST_CHAPTER_PAGES}`,
    },
    '6:episode': {
      source: EPISODE_6,
      note: 'The synopsis: Vardis agrees to be Lysa’s champion but finds killing so outmatched a man dishonourable, Bronn waits for him to tire in full armour, wounds and kills him, and the body rolls out of the Moon Door. Leading the knights who meet Catelyn cites GOT105 on his page.',
    },
    '6:chapter': {
      source: `${BOOKS}Vardis_Egen`,
      note: `Chosen over other volunteers, reluctant to fight so small a man, heavy plate, Bronn moving to tire him, a toppled statue and the kill. Jon Arryn’s heavier greatsword is on the Game of Thrones Wiki’s page, In the books, which also says there is no Moon Door push. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'mord': {
    '6:episode': {
      source: `${SHOW}Mord`,
      note: 'Tyrion is put in his care (GOT105); the beating for want of money, the message to Lysa on the promise that “a Lannister always pays his debts”, and the purse tossed to him after the trial cite GOT106, as does the episode synopsis.',
    },
    '6:chapter': {
      source: `${SHOW}Mord`,
      note: `In the books: cruel and dim, he taunts prisoners with the fall to the rocks and takes Tyrion’s coat though the nights are freezing. The promise of gold for a message to Lysa that he will confess is his record’s log and the relationship pin at 6/39 (Tyrion V). ${PAST_CHAPTER_PAGES}`,
    },
  },
  'lyn-corbray': {
    '6:39': {
      source: `${BOOKS}Lyn_Corbray`,
      note: `One of Lysa’s suitors, at the Eyrie when Tyrion asks for a trial by combat, and putting himself forward as champion; his record files the offer at Tyrion V, site 39. ${PAST_CHAPTER_PAGES}`,
    },
    '6:43': {
      source: `${BOOKS}Lyn_Corbray`,
      note: `Rebuffed for Vardis; after Bronn kills Vardis he escorts Tyrion and Bronn down to the Bloody Gate and tells them never to return. The relationship pin at 6/43 (Tyrion VI) holds the escort. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'anya-waynwood': {
    '38:39': {
      source: `${SHOW}Anya_Waynwood`,
      note: `In the books: Lady of Ironoaks, a widow with three sons, present in the High Hall surrounded by her sons when Tyrion demands a trial by combat. The Ice and Fire Wiki’s page says the same; her record files it at Tyrion V, site 39. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'donnel-waynwood': {
    '35:35': {
      source: `${BOOKS}Donnel_Waynwood`,
      note: `He leads the sortie that saves Catelyn and Tyrion in the Mountains of the Moon. Serving at the Bloody Gate is on the Game of Thrones Wiki’s page, In the books; questioning travellers is his record’s log, and the rescue is the relationship pin at 35/35 (Catelyn VI). ${PAST_CHAPTER_PAGES}`,
    },
  },
  'marillion': {
    '4:29': {
      source: `${BOOKS}Catelyn_V_-_A_Game_of_Thrones`,
      note: 'Site 29: Catelyn and Rodrik incognito, Marillion trying to charm her, the serenade Tyrion rejects, the accusation about Bran and the men who help her. The show is the same (Marillion page, GOT104: offers rebuffed, he witnesses the capture). Following the party is left to the next stories, since the show tells it an episode later.',
    },
    '5:episode': {
      source: `${SHOW}Marillion`,
      note: 'Season 1, citing GOT105: he decides to go with the party for a song, works on it on the way, survives the hill tribe attack and reaches the Eyrie. Tyrion fighting and saving Catelyn is the episode synopsis.',
    },
    '5:chapter': {
      source: `${SHOW}Marillion`,
      note: `In the books he goes with the party to the Eyrie and composes a song on the way, to Tyrion’s irritation. The clan attack and the sortie from the Bloody Gate are on the Ice and Fire Wiki’s Donnel Waynwood page (Catelyn VI, site 35). ${PAST_CHAPTER_PAGES}`,
    },
    '10:73': {
      source: `${SHOW}Marillion`,
      note: 'Season 1, citing GOT110: the tavern song mocking Robert, “every man needs hands”, and Ilyn Payne cutting out his tongue before the court. Show only: the book’s singer is unnamed. Chapter 73 only orders it.',
    },
  },
  'stiv': {
    '6:38': {
      source: `${BOOKS}Bran_V_-_A_Game_of_Thrones`,
      note: 'Site 38: outlaws ambush Bran in the wolfswood, Robb returns, Stiv nearly kills Bran and Theon shoots him, Osha surrenders, Luwin names two dead men as deserters. The Game of Thrones Wiki’s Stiv page (GOT106) has the knife at Bran’s throat and Theon’s arrow. Who kills the others and what Stiv demands differ, so the story leaves them out.',
    },
  },
  'wallen': {
    '6:38': {
      source: `${BOOKS}Wallen`,
      note: 'Book: part of the band that tries to rob Bran, killed during the fighting (by Grey Wind; Bran V, site 38). Show: Robb kills him (Wallen page, GOT106). The story says only that he dies in the fight, which both tell.',
    },
  },
  'shagga': {
    '8:43': {
      source: `${SHOW}Shagga`,
      note: `In the books: Bronn catches a goat, a dozen Stone Crows with Gunthor and Shagga surround them, Gunthor leads and silences Shagga after Tyrion’s taunt. The promise of weapons and wealth and the clan following Tyrion are the relationship pin at 8/43 (Tyrion VI). ${PAST_CHAPTER_PAGES}`,
    },
    '8:episode': {
      source: `${SHOW}Shagga`,
      note: 'Season 1, citing GOT108: Shagga leads the band, means to rob them and keep Tyrion as a fool, the alliance against the Arryns and Starks for gold and weapons, Timett and Chella joining, Tywin accepting and Shagga insisting they fight beside Tyrion.',
    },
    '8:chapter': {
      source: `${SHOW}Hill_tribes`,
      note: `In the books Tyrion brings about three hundred clansmen to his father while Gunthor stays to raise more clans. The entrance into the room with Tyrion, Tywin and Kevan, the captain thrown at the hearth and the sword snapped are on the Shagga page, In the books. ${PAST_CHAPTER_PAGES}`,
    },
    '9:episode': {
      source: `${SHOW}Shagga`,
      note: 'Season 1, citing GOT109: the sausage killing, Bronn restraining Shagga, the blood money refused with Gunthor, Tywin’s reproach, the two axes to Kevan’s chagrin, the clans’ good fight and looting, and Tyrion knocked out by his own men. The Green Fork is not named, since its record is the books’ alone.',
    },
    '10:70': {
      source: `${SHOW}Hill_tribes`,
      note: `In the books the clansmen fight well on the Green Fork and about half die; afterwards Tywin says his savages may plunder as they like, and Tyrion keeps them. Filed at Tyrion IX, site 70, the safe chapter, since no page dates the offer to Tyrion VIII. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'timett': {
    '8:episode': {
      source: `${SHOW}Timett`,
      note: 'Season 1, citing GOT108: the offer of weapons, gold and freedom from the Eyrie, Timett escorting Tyrion to the camp with Chella, and being presented to Tywin, who accepts the alliance.',
    },
    '8:chapter': {
      source: `${SHOW}Timett`,
      note: `In the books: the most feared of the Burned Men, the most savage clan; the eye burned out in the rite of manhood and the name Red Hand; he follows Tyrion to the Lannister camp, the relationship pin at 8/57. ${PAST_CHAPTER_PAGES}`,
    },
    '10:70': {
      source: `${SHOW}Hill_tribes`,
      note: `In the books Timett fights on the Green Fork (Timett page); about half the clansmen die, and Tywin’s offer to let them plunder is declined. Filed at site 70, the safe chapter. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'chella': {
    '8:episode': {
      source: `${SHOW}Chella`,
      note: 'Season 1, citing GOT108: she goes with Shagga, Timett, Tyrion and Bronn to the camp after the promise of weapons and freedom from the Eyrie, and Tywin agrees to honour the bargain.',
    },
    '8:chapter': {
      source: `${SHOW}Chella`,
      note: `In the books: a small dark woman with a necklace of forty-six ears, her sons boasting fifty; the Black Ears take the ears of defeated foes; she follows Tyrion to the Lannister camp, the relationship pin at 8/57. ${PAST_CHAPTER_PAGES}`,
    },
    '10:70': {
      source: `${SHOW}Chella`,
      note: `In the books she fights on the Green Fork and takes four ears; about half the clansmen die (Hill tribes page). Filed at site 70, the safe chapter. ${PAST_CHAPTER_PAGES}`,
    },
  },
  // End of #1362.
  // Winterfell and the North (#1361).
  'eddard-stark': {
    '1:2': {
      source: `${BOOKS}Bran_I_-_A_Game_of_Thrones`,
      note: 'Chapter 2: Theon brings Ice, Eddard beheads the deserter, explains the First Men’s custom that the man who passes the sentence should carry it out, and lets the pups be kept when Jon points out five pups for five trueborn children.',
    },
    '1:5': {
      source: EPISODE_1,
      note: 'Show only: the episode tells the execution, the pups, the news of Jon Arryn’s death, the offer in the crypts with the betrothal, and Lysa’s letter after which Eddard accepts; the book splits these over chapters 2, 5 and 7.',
    },
    '1:7': {
      source: `${BOOKS}Catelyn_II_-_A_Game_of_Thrones`,
      note: 'Eddard I (chapter 5) has the crypts, Lyanna’s tomb, the offer and the betrothal; Catelyn II (chapter 7) has Luwin’s hidden letter from Lysa naming the queen, and Eddard agreeing to go south with Sansa, Arya and Bran.',
    },
    '2:17': {
      source: EPISODE_2,
      note: 'The episode and Eddard III (Ice and Fire Wiki, chapter 17) agree on the bite, Sansa’s claim not to remember, Cersei’s demand, Robert giving way and Eddard killing Lady himself. The weapon and when Mycah’s body is seen differ, so the story leaves both out.',
    },
    '3:21': {
      source: EPISODE_3,
      note: 'The episode and Eddard IV (chapter 21) share the council, the debt, the tourney in his honour, Littlefinger leading him to Catelyn at a brothel and his promise of help. The sum of the debt differs (six million on screen, three in the book), so no figure is given.',
    },
    '4:30': {
      source: EPISODE_4,
      note: 'Gendry at Tobho Mott’s and Ned skipping the first day are on screen; in the book Gendry is Eddard VI (chapter 28) and Hugh’s death Sansa II (chapter 30). The Ice and Fire Wiki’s Eddard page has Ned skip “the first day of the tourney in his honour”.',
    },
    '5:36': {
      source: EPISODE_5,
      note: `The episode has the Tears of Lys, the order to kill Daenerys, the resignation, the brothel and the ambush in which Jory dies and Eddard’s leg is speared. The Ice and Fire Wiki’s Eddard page tells the same in the book (Eddard VII, VIII, IX), where a horse falls on the leg, so the story only says it is badly hurt. ${PAST_CHAPTER_PAGES}`,
    },
    '6:46': {
      source: EPISODE_6,
      note: `The episode has Robert restoring him, the peasants, Beric sent against Gregor, the decision to send the girls home and the black-haired Baratheons. The Ice and Fire Wiki’s Eddard page has the same order in the book, with a remark of Sansa’s about Joffrey leading him to the truth; chapter 46 (Eddard XII) is the safe later pin. ${PAST_CHAPTER_PAGES}`,
    },
    '7:50': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_49`,
      note: 'Chapter 50 synopsis: Cersei tears up the will, Ned declares Joffrey has no right, the gold cloaks kill his guards and Littlefinger holds his dagger to his throat. The warning to Cersei, the boar, the letter without Joffrey’s name and Renly’s offer are on episode 7 and the Ice and Fire Wiki’s Eddard page.',
    },
    '8:episode': {
      source: EPISODE_8,
      note: 'Show only: Varys in the cell, the warning to Cersei, “his mercy is what killed King Robert”, Tyrion no longer held, and the answer that he serves the realm.',
    },
    '8:chapter': {
      source: `${BOOKS}Eddard_Stark`,
      note: `Books only: in the black cells Varys urges him to confess to protect his daughters, with the promise that he may join the Night’s Watch (Ice and Fire Wiki, Eddard page; Eddard XV, which episode 8 adapts). ${PAST_CHAPTER_PAGES}`,
    },
    '9:66': {
      source: EPISODE_9,
      note: `The episode has the confession naming Joffrey king, Joffrey’s order, Arya held back by Yoren, Sansa present and Ilyn Payne using Ice. The Ice and Fire Wiki’s Eddard page has the same on the steps of the Great Sept, with Ice; the episode adapts Arya V. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'sansa-stark': {
    '1:5': {
      source: `${BOOKS}Eddard_I_-_A_Game_of_Thrones`,
      note: 'Chapter 5: the royal party arrives, the children are introduced, and in the crypts Sansa is betrothed to Joffrey. Episode 1 has the same greeting in the yard and the offer in the crypts.',
    },
    '2:17': {
      source: `${BOOKS}Sansa_I_-_A_Game_of_Thrones`,
      note: 'Sansa I (chapter 16) and Eddard III (chapter 17): Mycah, the bite, Joffrey pushing her away, her claim not to remember and Lady’s death; episode 2 tells the same. On screen they walk, in the book they ride, so the story says neither.',
    },
    '4:30': {
      source: EPISODE_4,
      note: 'Show only: Hugh killed by a lance splinter in the first tilt, and Littlefinger telling Sansa how Gregor burned Sandor’s face, with the advice not to spread it.',
    },
    '5:30': {
      source: `${BOOKS}Sansa_II_-_A_Game_of_Thrones`,
      note: 'Books only, chapter 30: Jeyne and Mordane beside her, Hugh’s death, her admiration for Loras, Joffrey kind then cold, and the Hound telling her himself about the brazier and threatening her. Filed at episode 5, where Loras opens on screen.',
    },
    '6:46': {
      source: EPISODE_6,
      note: 'Show only: Joffrey’s apology and necklace, which the queen put him up to, and Sansa’s protest at being sent home: “lots of golden-haired babies”.',
    },
    '8:52': {
      source: `${SHOW}Mordane`,
      note: `Books only: the In the books section of the Mordane page has Sansa telling Cersei of the ship, being locked in a tower room, and Jeyne pushed in for three days. Chapter 52 is Sansa IV, which episode 8 adapts; unverified on the chapter text. ${PAST_CHAPTER_PAGES}`,
    },
    '8:58': {
      source: EPISODE_8,
      note: `The episode has the letter to Robb before the council and the plea that Joffrey answers with mercy if Eddard confesses. In the book the letter is Sansa IV and the plea Sansa V (chapter 58), both adapted by episode 8; unverified on the chapter text. ${PAST_CHAPTER_PAGES}`,
    },
    '9:66': {
      source: EPISODE_9,
      note: `The episode has Sansa at the Sept as her father confesses and is beheaded despite the mercy Joffrey promised her. The reviewed relationship pin at 9/66 holds it in both media (“before her eyes”). Corrected after review: on screen she faints before the blow, and the book’s order is unverified, so the story keeps only her scream and the beheading, in no stated order. ${PAST_CHAPTER_PAGES}`,
    },
    '10:68': {
      source: EPISODE_10,
      note: `The episode has the head on the spike, Meryn Trant striking her, her move to push Joffrey and the Hound’s handkerchief. The reviewed relationship pins at 10/68 hold Mordane’s head and the Hound’s part in both media; the episode adapts Sansa VI. ${PAST_CHAPTER_PAGES}`,
    },
    '11:episode': {
      source: EPISODE_11,
      note: 'The King’s Landing synopsis: the name-day tournament, Dontos late and drunk, the wine, Sansa’s plea of bad luck, Joffrey calling it superstition, Sandor seconding her, Dontos made fool and grateful, and Tyrion’s return (GOT201). Chapter 76, Sansa I, orders it.',
    },
    '13:99': {
      source: EPISODE_13,
      note: 'The King’s Landing synopsis: the awkward dinner with Myrcella, Tommen and Sansa, her façade of loyalty, Shae reporting as her new handmaiden through Tyrion and Varys, and Sansa venting at her inexperience (GOT203). Chapter 99 orders it, with the relationship card at 13/99.',
    },
    '14:episode': {
      source: EPISODE_14,
      note: 'The King’s Landing synopsis: Robb’s victory, the crossbow, her pledges of loyalty, Meryn’s beating and the torn gown, Tyrion’s intervention, Sandor’s cloak, the offer to end the engagement, her answer, and “Lady Stark” (GOT204). Chapter 106, Sansa III, orders it.',
    },
    '16:episode': {
      source: EPISODE_16,
      note: 'The King’s Landing synopsis: Sansa lost in the riot, dragged away and nearly raped, Sandor killing the men and carrying her to the castle; the Shae page has Sansa confiding her hatred of Joffrey after she is injured, and Shae’s warning to trust no one (GOT206). Chapter 115, Tyrion IX, orders it.',
    },
    '17:episode': {
      source: EPISODE_17,
      note: 'The King’s Landing synopsis: Sansa’s thanks and the dog and the rats, the nightmare and the bloody sheets, the marriage and son expected of her, Shae’s help, Sandor finding the sheets, and Cersei’s advice to love only her children (GOT207). Chapter 126, Sansa IV, orders it.',
    },
    '19:episode': {
      source: EPISODE_19,
      note: 'The King’s Landing synopsis: Maegor’s Holdfast, Cersei’s drinking and talk of rape, her departure, Sansa leading the Mother’s hymn, Shae’s advice to lock herself in, Sandor in her room, his offer to take her to Winterfell and her fear (GOT209). Chapter 136, Sansa VII, orders it.',
    },
    '20:episode': {
      source: EPISODE_20,
      note: 'The King’s Landing synopsis: the betrothal set aside, Margaery accepted, Sansa overjoyed in private, Littlefinger’s warning that Joffrey will still torment her, and his promise to help her escape for her mother’s sake (GOT210). Chapter 139, Sansa VIII, orders it.',
    },
    '11:chapter': {
      source: KL_76,
      note: 'Sansa I (site 76): the long sleeves over the bruises from Boros, the tourney, Dontos saved by the name-day curse and the fool’s motley, Tyrion’s arrival, the deer among wolves, “Lions”, the little lion, and her resolve never to trust a Lannister. Boros opens on screen only at episode 19, so he stays unlinked here.',
    },
    '20:92': {
      source: KL_92,
      note: 'Sansa II (site 92): the note, the godswood, Dontos’s oath to the old gods and “my Florian”, the time and coin escape needs, the visits to the godswood, and the drunk Sandor on the serpentine steps with his little bird, his dogs and the song he will have. Episode 20, the one whose adaptation list names Sansa II, orders it.',
    },
    '14:chapter': {
      source: KL_106,
      note: 'Sansa III (site 106): Oxcross, Boros’s blows and the torn bodice, Tyrion’s arrival, Sandor’s cloak, the Tower of the Hand, Tyrion’s account of the battle, her declared love for the king, then his intent that she not marry Joffrey, the offered guard refused, and her own bed. Boros stays unlinked: his show gate is episode 19.',
    },
    '17:chapter': {
      source: KL_126,
      note: 'Sansa IV (site 126): Stannis’s vanguard, Dontos and the escape not yet ripe, Sandor on the roof of Maegor’s Holdfast who enjoys killing and denies true knights, the flowering and the burned sheets, the maids, and Cersei’s “Love is poison”.',
    },
    '19:134': {
      source: KL_134,
      note: 'Sansa V (site 131): the kiss on Hearteater, the candles in the royal sept and the silent prayer for Joffrey’s defeat, the Queen’s Ballroom; Sansa VI (site 134): Cersei’s wine and warning, the godswood visits she disbelieves, and Ser Ilyn there so they are not taken alive.',
    },
    '19:chapter': {
      source: KL_136,
      note: 'Sansa VII (site 136): Cersei striking Lancel’s wound, Sansa calming the guests and sending Lancel to Frenken, Sandor in her room, his offer, the song, the verse of the Mother’s hymn, the tears, the white cloak left behind, and Dontos at dawn with the Tyrells and Lord Tywin.',
    },
    '20:chapter': {
      source: KL_139,
      note: 'Sansa VIII (site 139): the gallery, Garlan’s request, the High Septon voiding the betrothal, her delight, Dontos in the godswood on Cersei’s plans and Joffrey, the escape during the wedding in about a month, and the silver hair net with amethysts.',
    },
    '16:chapter': {
      source: KL_115,
      note: 'Tyrion IX (site 115): the riot on the way back from the harbour, Sansa among the missing, Boros and Meryn ordered back to find her, Sandor returning her covered in blood, and the High Septon, Preston Greenfield and Aron Santagar dead.',
    },
  },
  'arya-stark': {
    '1:5': {
      source: `${BOOKS}Eddard_I_-_A_Game_of_Thrones`,
      note: 'Chapter 5: the children are introduced to the royal party in the yard; Bran I gives the five trueborn children one pup each. Episode 1 has the same greeting and her pup.',
    },
    '1:8': {
      source: `${BOOKS}Arya_I_-_A_Game_of_Thrones`,
      note: 'Books only, chapter 8: crooked stitches, the talk of Joffrey’s compliments, her flight to Nymeria, watching with Jon, Theon holding Robb back, and Mordane and her mother waiting in her room.',
    },
    '2:17': {
      source: EPISODE_2,
      note: 'The episode and the Ice and Fire Wiki (Arya page, Sansa I, Eddard III) agree on Needle from Jon, Mycah, the bite, the sword thrown in the river, the stones, Sansa’s claim, Lady and the Hound killing Mycah.',
    },
    '3:23': {
      source: `${BOOKS}Arya_II_-_A_Game_of_Thrones`,
      note: 'Chapter 23: Eddard finds Needle, lets her keep it, and Syrio Forel, once First Sword of Braavos, begins her lessons. Episode 3 has the same, with the sisters still at odds.',
    },
    '4:28': {
      source: EPISODE_4,
      note: 'Show only: balancing on one leg, the talk about Bran and the Kingsguard, and her answer “that’s not me”.',
    },
    '5:33': {
      source: EPISODE_5,
      note: 'The episode and Arya III (chapter 33) share the cats, the dragon skulls, two men plotting about her father and the queen, and her warning not taken seriously. The Ice and Fire Wiki page Arya III - A Game of Thrones (chapter_number 33) lists Yoren and Eddard Stark as appearing, which supports Yoren’s arrival in the chapter; the closing detail is still unverified on the chapter text.',
    },
    '8:51': {
      source: EPISODE_8,
      note: `The episode has Meryn Trant, Syrio’s wooden sword, the dead men in the stables, Needle in the trunk, the stableboy and her escape by the cats’ tunnel. The Ice and Fire Wiki’s Arya page has the same escape in the book; the episode adapts Arya IV. ${PAST_CHAPTER_PAGES}`,
    },
    '9:66': {
      source: EPISODE_9,
      note: `The episode has the pigeons, the statue, the confession and Yoren holding her back. The Ice and Fire Wiki’s Arya page has her catching pigeons and Yoren saving her from the sight of the execution; the episode adapts Arya V. ${PAST_CHAPTER_PAGES}`,
    },
    '10:66': {
      source: EPISODE_10,
      note: 'Show only: Yoren calls her boy, cuts her hair, plans to take her to Winterfell as a recruit, and she joins Gendry, Hot Pie and another boy as Arry (Lommy is first named on screen at episode 31, #1457).',
    },
    '10:75': {
      source: `${ACOK_AWOIAF}1`,
      note: 'Arya I (site 75): Lommy’s nickname for her hair, Lommy and Hot Pie mocking Needle, Hot Pie thrown from his donkey, his nose broken, Yoren whipping her with her stick and saying hitting the boys will not bring her father back, Gendry (“the Bull”) calling the comet a sword. Episode 10 orders it: Hot Pie’s gate.',
    },
    '12:episode': {
      source: `${SHOW}Arya_Stark`,
      note: 'Arya Stark page, Season 2: drawn to Jaqen in the wagon, Rorge and Biter threatening her (unnamed on screen), the gold cloaks with a warrant for Gendry, Yoren sending them off, and Arya confessing her identity to Gendry (GOT202).',
    },
    '12:chapter': {
      source: `${ACOK_AWOIAF}5`,
      note: 'Arya II (site 79): refugees heading south, Jaqen introducing himself, Rorge and Biter at the ivy-covered inn, Arya hitting Biter between the eyes, six gold cloaks with the queen’s warrant, Arya joining the recruits with Needle, the officer wanting Gendry, Yoren’s sword at his throat.',
    },
    '13:episode': {
      source: `${SHOW}Arya_Stark`,
      note: 'Arya Stark page: Yoren’s story of Willem, the attack, Yoren killed, the axe for Jaqen and his companions, Polliver taking Needle (unnamed here: his gate is episode 14), Lommy’s body passed off as Gendry because of the helm (GOT203). The episode synopsis has the prisoners taken to Harrenhal. Lommy and Amory stay unnamed: their show gates are 31 and 16.',
    },
    '13:chapter': {
      source: `${ACOK_AWOIAF}14`,
      note: 'Arya IV (site 88): the town on the Gods Eye, the holdfast, Ser Amory Lorch as Lord Tywin’s bannerman demanding the gate in King Joffrey’s name, Yoren’s refusal, Arya on the wall shouting “Winterfell”, Yoren sending her to the tunnel under the barn, the axe thrown to the prisoners. Amory is named unlinked: his show gate is 16.',
    },
    '13:93': {
      source: `${ACOK_AWOIAF}19`,
      note: 'Arya V (site 93): Yoren buried, the group along the Gods Eye with the wounded Lommy and the crying girl, Gendry guessing she is a girl and Arya naming herself, Gendry caught at the village under Gregor Clegane’s banner, Hot Pie yielding, Needle taken, a spearman killing Lommy. Episode 13 orders it: the capture is adapted there.',
    },
    '14:episode': {
      source: `${SHOW}Arya_Stark`,
      note: 'Arya Stark page: the prisoners at Harrenhal, one tortured each day, the nightly list with the Mountain and Polliver, Tywin halting it before Gendry is killed, seeing she is a girl and making her his cupbearer (GOT204). The Brotherhood is in the episode synopsis. The Tickler stays unnamed: his gate is episode 15.',
    },
    '14:chapter': {
      source: `${ACOK_AWOIAF}26`,
      note: 'Arya VI (site 100): eight days at the village, the Tickler questioning with Chiswyck’s help, the march to Harrenhal to serve Lord Tywin, Polliver wearing Needle, the names whispered each night, and Arya hiding her name at the bathhouse before being given to the understeward. Weese is left unnamed: his gate is chapter 104.',
    },
    '15:episode': {
      source: `${SHOW}Arya_Stark`,
      note: 'Arya Stark page: Tywin’s war council, “anyone can be killed”, Jaqen as a Lannister man-at-arms owing three deaths, the Tickler named and found dead, Jaqen’s finger to his face (GOT205).',
    },
    '15:chapter': {
      source: `${ACOK_AWOIAF}30`,
      note: 'Arya VII (site 104): errands for Weese and his name on her list, Ser Amory’s column with Jaqen, Rorge and Biter, Jaqen waking her with the debt to the Red God, Chiswyck’s tale of the brewer’s girl, his name whispered, and a man falling from the wallwalk on the third day. Amory is named unlinked: his show gate is 16.',
    },
    '16:episode': {
      source: `${SHOW}Arya_Stark`,
      note: 'Arya Stark page and Amory Lorch page: Tywin berating Amory, “my cupbearer reads better than you”, Baelish’s visit, the letter about Robb taken while Tywin talks of his father, Amory catching her, the second name, Amory dead at Tywin’s door with a dart (GOT206).',
    },
    '16:chapter': {
      source: `${ACOK_AWOIAF}38`,
      note: 'Arya VIII (site 112): the host preparing to march, Amory to be castellan with Jaqen staying, Rorge’s threat and the look in his eyes, Weese’s name whispered in the bathhouse, Arya realising she should have named Tywin, Weese dead under his dog, Jaqen’s two fingers.',
    },
    '18:episode': {
      source: `${SHOW}Arya_Stark`,
      note: 'Arya Stark page: Tywin leaving her to serve Gregor, Jaqen away on patrol, his refusal, his own name given and taken back, the guards killed, the walk out with Gendry and Hot Pie (GOT208).',
    },
    '18:chapter': {
      source: `${ACOK_AWOIAF}47`,
      note: 'Arya IX (site 121): the northern prisoners brought by the Brave Companions, Jaqen in the godswood calling her Arya Stark, his own name given, the soup thrown over the guards with Rorge and Biter, the debt paid, the face changed and the coin, Roose Bolton making her his cupbearer. Episode 18 orders it: the name scene is adapted there.',
    },
    '18:138': {
      source: `${ACOK_AWOIAF}64`,
      note: 'Arya X (site 138): cupbearer to Roose, Tywin’s victory at the Blackwater and the news that Winterfell has fallen and her brothers are dead, Harrenhal to go to Vargo Hoat with Arya in it, the map and dagger stolen, the coin dropped and the guard’s throat cut, the three riding out. Episode 18, the show’s escape, orders it.',
    },
    '20:121': {
      source: `${SHOW}Arya_Stark`,
      note: 'Arya Stark page: Jaqen waiting, the offer to take her to Braavos, her refusal to find her family, the coin and “valar morghulis”, the changed face and the farewell by name (GOT210).',
    },
    '17:112': {
      source: EPISODE_17,
      note: 'Episode synopsis and Tywin Lannister page: Tywin hunting Amory’s killer, the meal and Harrenhal burned by Aegon’s dragons, “my lord” instead of “m’lord”, her mother said to have served royalty and taught her to speak (GOT207). Chapter 112 orders it, as Tywin’s episode-17 story.',
    },
  },
  'jory-cassel': {
    '1:2': {
      source: `${SHOW}Jory_Cassel`,
      note: 'Season 1, citing GOT101: he rides to the execution and is with the group that finds the pups. The Ice and Fire Wiki’s Jory page and Bran I (chapter 2) have the same.',
    },
    '2:17': {
      source: `${BOOKS}Eddard_III_-_A_Game_of_Thrones`,
      note: 'Books only, chapter 17: Jory finds Arya, Lannister men take her to the king first (Jory page), he brings Ice and arranges for the pelt to go to Winterfell.',
    },
    '4:30': {
      source: `${SHOW}Jory_Cassel`,
      note: 'Show only, citing GOT103 and GOT104: rebuffed by Ser Hugh, and remembering Pyke with Jaime at the king’s door. The page says both scenes are inventions of the show. Filed at chapter 30 because Hugh opens there.',
    },
    '5:36': {
      source: EPISODE_5,
      note: `The episode has the brothel and the ambush. On screen Jaime kills Jory himself; in the book Lannister guardsmen do (Jory Cassel page, In the books), so the story only says he dies. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'mordane': {
    '1:8': {
      source: `${SHOW}Mordane`,
      note: 'Season 1, citing GOT101: the needlework lesson, Sansa praised, Arya’s grudging efforts. In the books section: Sansa an able pupil, Arya hates needlework and runs off. Arya I (chapter 8) is the book side.',
    },
    '4:30': {
      source: `${BOOKS}Mordane`,
      note: 'Books only, chapter 30 (Sansa II): she sits with Sansa and Jeyne, takes Jeyne back after Hugh’s death, and falls asleep drunk at the feast, so Joffrey offers an escort.',
    },
    '8:52': {
      source: `${SHOW}Mordane`,
      note: 'Show only, citing GOT108: she hears the fighting, sends Sansa to bar her door and stays to face the Lannister guards. In the book Sansa is not with her then.',
    },
    '10:68': {
      source: `${SHOW}Mordane`,
      note: `Citing GOT110, Joffrey had her beheaded and her head set next to Eddard’s; In the books has the same head on a spike. Her death is her status at 10/68. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'jeyne-poole': {
    '1:8': {
      source: `${BOOKS}Jeyne_Poole`,
      note: 'Books only, chapter 8 (Arya I): she talks with Sansa about how handsome Joffrey is and laughs when Mordane mocks Arya’s work.',
    },
    '4:30': {
      source: `${BOOKS}Jeyne_Poole`,
      note: 'Books only, chapter 30 (Sansa II): her wish to wed Beric Dondarrion, her tears at Hugh’s death, and Mordane taking her back.',
    },
    '8:52': {
      source: `${SHOW}Jeyne_Poole`,
      note: `Books only: In the books has her detained with Sansa and crying, Sansa telling Cersei, and Littlefinger taking her away. Her father’s death and the shared room are the reviewed relationship pins at 8/52. Her detention needs a captured status at this pin. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'vayon-poole': {
    '8:17': {
      source: `${BOOKS}Eddard_III_-_A_Game_of_Thrones`,
      note: 'Books only, chapter 17: Vayon brings word that Jory found Arya; the Vayon Poole page adds that he brought Sansa before the king on Eddard’s orders. Filed at episode 8, his show gate.',
    },
    '8:52': {
      source: `${SHOW}Vayon_Poole`,
      note: `Citing GOT108, he is killed in the purge of the Stark household; In the books says his death is the same. His death is his status at 8/52. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'tomard': {
    '7:episode': {
      source: `${SHOW}Tomard`,
      note: 'Show only, citing GOT107: with Eddard when Renly brings news of the hunt, sent with a letter to Stannis, and absent when Eddard’s guard is killed.',
    },
    '7:chapter': {
      source: `${BOOKS}Tomard`,
      note: 'Books only: one of the fifty men brought south, on guard at the Tower of the Hand during the supper, Arya sliding under him and fooling him at her door; that is Arya II (chapter 23), his chapter gate.',
    },
    '7:50': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_49`,
      note: 'Chapter 50: Fat Tom brings the summons, Eddard has him assemble an escort, and a gold cloak shoves a spear through his back. The letter for Stannis and its taking from his body are on the Tomard page, In the books. His death is his status at 7/50.',
    },
  },
  'harwin': {
    '1:2': {
      source: `${BOOKS}Harwin`,
      note: 'Books only, chapter 2 (Bran I): he rides to the execution and, when Robb asks to keep the pups, says it would be impossible to keep them.',
    },
    '6:44': {
      source: `${BOOKS}Harwin`,
      note: `Books only: dispatched by Eddard under Lord Beric and Thoros of Myr. Corrected after review: filed at Eddard XI (chapter 44), the dispatch #1355 puts Alyn’s twenty men in, and his affiliation step moved there with it. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'alyn': {
    '1:13': {
      source: `${BOOKS}Alyn`,
      note: 'Books only, chapter 13 (Eddard II): Alyn wakes Eddard because the king wants to ride with him; the chapter page says they discuss Daenerys.',
    },
    '5:31': {
      source: `${BOOKS}Alyn`,
      note: 'Books only: on guard for Littlefinger’s visit, unhorsed by Balon Swann, sent to Anguy who refuses, and on the stairs during Varys’s visit, all in Eddard VII (chapter 31) per the chapter page.',
    },
    '6:44': {
      source: `${BOOKS}Alyn`,
      note: `Books only: twenty of Eddard’s men under Alyn go with Beric’s company. Corrected after #1355: filed at Eddard XI (chapter 44), where his role step now sits, and no longer called captain of the Hand’s guard, a post Fat Tom holds. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'hullen': {
    '1:2': {
      source: `${BOOKS}Hullen`,
      note: 'Books only, chapter 2 (Bran I): present at the dead direwolf and says it bodes ill; Harwin is his son.',
    },
    '8:51': {
      source: `${BOOKS}Hullen`,
      note: `Books only: killed in King’s Landing when Eddard is arrested. Arya finding him dying and his words are the reviewed relationship pin at 8/51 (Arya IV), and his death is his status there. ${PAST_CHAPTER_PAGES}`,
    },
  },
  'lady-direwolf': {
    '1:episode': {
      source: EPISODE_1,
      note: 'Show only: the pups by their dead mother, Jon’s argument about the five trueborn children, and Sansa naming hers Lady. The chapter only orders it; Lady opens at chapter 16.',
    },
    '1:chapter': {
      source: `${BOOKS}Lady`,
      note: 'Books only, chapter 16 (Sansa I): named by Sansa, fed under the table to Mordane’s disapproval, and left behind when Joffrey asks Sansa to ride.',
    },
    '2:17': {
      source: `${BOOKS}Eddard_III_-_A_Game_of_Thrones`,
      note: 'Chapter 17 and episode 2: Nymeria missing, Cersei demanding Lady instead, Robert allowing it, and Eddard doing the deed himself. Her death is her status at 2/17.',
    },
  },
  'nymeria': {
    '2:chapter': {
      source: `${BOOKS}Nymeria_(direwolf)`,
      note: 'Books only, chapter 8 (Arya I): given to Arya, not allowed at the needlework lesson, and with Arya and Jon’s white pup watching the training.',
    },
    '2:episode': {
      source: EPISODE_2,
      note: 'Show only: Joffrey cuts Mycah, Nymeria bites his arm, and Arya makes her flee with a rock. Filed at chapter 8, her chapter gate, only to order it.',
    },
    '2:17': {
      source: `${BOOKS}Sansa_I_-_A_Game_of_Thrones`,
      note: 'Books only: Nymeria wounds Joffrey’s sword hand (Sansa I, chapter 16); Arya drives her off with rocks (Arya page), and she is absent when Lady is condemned (Eddard III, chapter 17).',
    },
  },
  'bran-stark': {
    '1:episode': {
      source: EPISODE_1,
      note: 'The North synopsis: the archery practice, the execution of Will with Robb, Jon, Theon and the Cassels, “the man who passes the sentence should swing the sword”, the direwolf litter, and the broken tower, where Jaime grabs Bran, asks his age and pushes him out. The chapter only orders it; the fall’s book side is Bran II at chapter 9.',
    },
    '1:chapter': {
      source: `${BOOKS}Bran_I_-_A_Game_of_Thrones`,
      note: 'Chapter 2: his first execution, Theon bringing Ice, Jon telling him not to look away, the single stroke, the First Men’s custom explained on the ride home, Robb and Jon finding the direwolf with antler in her throat, Theon offering to kill the pups and Bran protesting, the pups kept on condition they raise them.',
    },
    '1:9': {
      source: `${BOOKS}Bran_II_-_A_Game_of_Thrones`,
      note: 'Chapter 9: the farewell before his departure south, the climb to the broken tower, two voices talking of Robert’s choice of Eddard as Hand, the gargoyle, the queen and her brother Jaime naked, the slip, Jaime pulling him up, asking his age and throwing him from the window. The outcome of the fall is not stated, so the story stops at the throw.',
    },
    '2:15': {
      source: EPISODE_2,
      note: 'The synopsis has Catelyn by his side, Robb offering to work with Luwin, the fire as a distraction, the assassin and the direwolf tearing out his throat. The book side is Catelyn III (Ice and Fire Wiki chapter page, chapter 15): the fire in the library tower, the assassin, Summer arriving; the episode adapts it. The wolf is not named, since Summer opens at 4/18.',
    },
    '2:18': {
      source: `${BOOKS}Bran_III_-_A_Game_of_Thrones`,
      note: 'Chapter 18: the falling dream, the crow telling him to fly or die, the realm seen from above (Luwin, Robb, Catelyn sailing into a storm, Eddard arguing with the king, Sansa, Arya, Jon at the Wall), the spikes of ice, the peck in the forehead, the wolf on his bed and the name Summer told to Robb.',
    },
    '3:18': {
      source: EPISODE_3,
      note: 'At Winterfell: awake with no memory of the accident, bedridden and “unlikely to walk again”, Old Nan’s story of the Long Night and the White Walkers instead of the knights, Robb confirming he will not walk, Bran saying he would rather be dead. Show only; the chapter orders it after Bran III.',
    },
    '4:25': {
      source: EPISODE_4,
      note: 'The synopsis has Hodor carrying Bran down, Robb’s cold reception of Tyrion, the saddle design and Robb then offering him a stay, which Tyrion declines. Book side: Bran IV (Ice and Fire Wiki chapter page, chapter 25): Hodor carries him down, the saddle design, Tyrion refusing Robb’s offer of hospitality.',
    },
    '6:38': {
      source: EPISODE_6,
      note: 'The synopsis: the ride with Robb and Theon on Tyrion’s saddle, Bran wandering off, the wildlings, a knife to his throat, Theon’s arrow angering Robb, Osha yielding and taken prisoner. Book side: Bran V (Ice and Fire Wiki chapter page): the outlaws, Theon shooting Stiv, Osha taken prisoner; corrected after review: the reason for Robb’s anger, the risky shot, is the show’s (the book gives betrayal and his men’s failure), so the story says only that he is furious. Kept to what both tell: the wolves fight only in the book, and the book page does not say outright that Bran was alone.',
    },
    '8:54': {
      source: EPISODE_8,
      note: `The synopsis has the banners called after Eddard’s arrest, the Greatjon and Grey Wind’s bite, Robb’s farewell to Bran and Rickon, and Osha in the godswood: giants and worse beyond the Wall, the army marching the wrong way. Book side: Bran VI on A Wiki of Ice and Fire, its Chapter_53 page: the gathering, the Greatjon’s fingers, Robb’s farewell, Osha’s “north, not south”.`,
    },
    '10:episode': {
      source: EPISODE_10,
      note: 'At Winterfell: the three-eyed raven flying into the crypts, Osha taking him down, the histories, Shaggydog leaping from Eddard’s empty tomb, Rickon’s same dream, and Luwin outside with a letter that tells them of Eddard’s death.',
    },
    '10:chapter': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_66`,
      note: 'Bran VII (site chapter 67): the crow’s dream of his father in the crypts, Luwin taking him down to show him he is not there, Osha carrying him, Shaggydog savaging Luwin’s arm, Summer knocking him off, Rickon’s same dream, Luwin’s tale of the children of the forest in his turret, and the raven with the news.',
    },
    '11:episode': {
      source: EPISODE_11,
      note: 'At Winterfell: the vassals’ complaints, Luwin guiding him, the dream of Summer in the godswood and the wolf’s reflection, Osha and Hodor taking him to the pool, his own reflection, and the red comet as the return of dragons; the Bran Stark page has his answer that the dragons are dead (GOT201).',
    },
    '11:chapter': {
      source: WF_BRAN_I,
      note: 'Bran I (site 78): the wolf dreams, the wolves confined to the godswood after Shaggydog bit Little Walder, the answers about the howling, the red comet, Bran howling until Luwin comes, turning into a wolf when he sleeps, the sleeping draught, and the dream of the godswood walls, which his brother circles while Summer has learned it does no good. The Frey wards stay unnamed: their book gate is 90.',
    },
    '11:90': {
      source: WF_BRAN_II,
      note: 'Bran II (site 90): playing the prince for the harvest feast, Rodrik and Luwin beside him, Lord Wyman welcomed, condolences to Lady Hornwood and her fear of Ramsay, Hodor defended against the Walders, and the three-eyed crow pecking through his skull to the golden man and the fall. Bran’s lord step sits at 11/90; the guests are named unlinked, their gates falling after episode 11.',
    },
    '13:95': {
      source: WF_BRAN_III,
      note: 'Bran III (site 95): Dancer in the great hall, the cheers of Stark and Winterfell, Rickon at his right, the toast to Robb’s victories, everyone gone, the Reeds’ arrival and oath, and the wolf dream with Jojen’s touch. The episode orders a chapter no episode adapts; the Reeds are named unlinked, their show gate being 22.',
    },
    '13:episode': {
      source: `${SHOW}Luwin`,
      note: 'Luwin page (GOT203): Bran’s questions about his dreams, the Valyrian steel link and the higher mysteries, and magic long gone from the world; the Hodor page has the dream of following Hodor and looking down on his own face (GOT203).',
    },
    '13:chapter': {
      source: WF_BRAN_IV,
      note: 'Bran IV (site 102): Jojen’s greensight, the winged wolf in chains and the three-eyed crow, the third eye, the question about falling, Summer and Shaggydog driven off by Hodor, and Luwin saying no living man has that power. The Reeds are named unlinked: their show gate is 22.',
    },
    '15:episode': {
      source: `${SHOW}Bran_Stark`,
      note: 'Bran Stark page (GOT205): the three-eyed raven, the dream of the sea drowning Winterfell and Rodrik, the two orphans given to a farmer, the siege of Torrhen’s Square and the garrison sent; the Rickon Stark page has the shepherd with three sons in the south, and the Rodrik Cassel page the two hundred men (GOT205).',
    },
    '15:chapter': {
      source: WF_BRAN_V,
      note: 'Bran V (site 109): the bellows for Mikken, the raven with Oxcross, Jojen’s drowning dream and the three named, the warnings nobody heeds, Rodrik back with Reek, the longship raiders on the Stony Shore, and the dream of Bran and Rickon dead at Reek’s feet. Jojen is named unlinked: his show gate is 22.',
    },
    '16:episode': {
      source: `${SHOW}Bran_Stark`,
      note: 'Bran Stark page (GOT206): awoken by Theon, the public surrender to protect his people, Rodrik captured and executed despite Bran’s pleas, the botched beheading, and the escape with Osha, Rickon, the direwolves and Hodor; the Rodrik Cassel page has Bran protesting Theon’s promise that nobody would be harmed (GOT206).',
    },
    '16:chapter': {
      source: WF_BRAN_VI,
      note: 'Bran VI (site 120): Summer’s fall from the sentinel tree, Rodrik gone eight days to Torrhen’s Square, Theon calling himself a prince, the ironmen swimming the moat, the people gathered, Jojen’s dream come true with Mikken drowning on his own blood, Osha and Reek joining Theon, Bran’s disappointment and his persuading the rest not to fight. Jojen is named unlinked: his show gate is 22.',
    },
    '17:episode': {
      source: `${SHOW}Rickon_Stark`,
      note: 'Rickon Stark page (GOT207): the shepherd’s farm, Rickon remembering the boys Bran sent there and wanting food, Bran cautious about putting them in danger, Theon losing the scent and the charred corpses claimed as Bran and Rickon; the Bran Stark page has the same (GOT207).',
    },
    '17:chapter': {
      source: WF_THEON_IV,
      note: 'Added after review. Theon IV (site 124): the silence of the direwolves, Wex finding Bran and Rickon gone, the wolves gone, Squint and Drennan dead at the Hunter’s Gate, Reek naming the six missing, the hunt into the wolfswood and the scent lost at a brook; Bran’s status turns free at 17/124.',
    },
    '18:130': {
      source: EPISODE_18,
      note: 'The Winterfell synopsis: Luwin following Osha into the crypts, the doubling back to mask their scent, Luwin urging her not to tell the boys, and Bran listening; the Bran Stark and Hodor pages have the orphans Bran sent to the shepherd and the bread (GOT208).',
    },
    '20:episode': {
      source: `${SHOW}Bran_Stark`,
      note: 'Bran Stark page (GOT210): the hiding through the siege, the sacked castle, Luwin dying in the godswood, the Wall and Jon at Castle Black, and the tearful farewell; the Hodor page has Jon getting word to Catelyn and Robb, and the Summer page the wolves going north with them (GOT210).',
    },
    '20:chapter': {
      source: WF_BRAN_VII,
      note: 'Bran VII (site 143): three days as Summer watching the sack from the wolfswood, Jojen waking him in the crypts, Brandon’s blade taken from the tomb, Hodor moving the stone, the ashes, Luwin dying in the godswood, the parting with Osha and Rickon, and Winterfell not dead, just broken. The Reeds are named unlinked: their show gate is 22.',
    },
  },
  'rickon-stark': {
    '1:5': {
      source: EPISODE_1,
      note: 'The synopsis has the household gathered in the yard for the king, the offer of the Hand and the match of Sansa and Joffrey. Book side: Eddard I (Ice and Fire Wiki chapter page, chapter 5): the children introduced to Robert, the offer of the Hand and the betrothal.',
    },
    '8:54': {
      source: `${SHOW}Rickon_Stark`,
      note: `Season 1, citing episode 8: Rickon nowhere to be found when Robb says goodbye, then “No, they won’t”. Book side: Bran VI on A Wiki of Ice and Fire, its Chapter_53 page: Rickon refuses to say goodbye, claiming no one ever comes back. Kept to the common ground: no farewell, the certainty that they do not return.`,
    },
    '10:episode': {
      source: `${SHOW}Rickon_Stark`,
      note: 'Season 1, citing episode 10: the dream of his father in the crypts, going down with Shaggydog, meeting Bran, who had the same dream, and Luwin’s news outside. The episode page adds Shaggydog leaping out and Rickon calling him off.',
    },
    '10:chapter': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_66`,
      note: 'Bran VII (site chapter 67): Rickon at the mouth of Eddard’s tomb telling Luwin to leave his father be, saying he saw him last night and he is coming home, refusing to have Shaggydog chained, following them to the turret, and the raven.',
    },
    '13:95': {
      source: WF_BRAN_III,
      note: 'Bran III (site 95): Rickon at Bran’s right, his hair uncut since their mother left because he bit the last girl who tried, screaming happily with the Walders, and his answer that the wolves are in the godswood because Shaggydog was bad. Bran I (site 78) has Rickon taking to the Walders after Shaggydog’s bite.',
    },
    '16:episode': {
      source: `${SHOW}Rickon_Stark`,
      note: 'Rickon Stark page (GOT206): the feint and the castle seized, Bran forced to surrender, Rickon distraught at the public execution and pleading with Bran for Rodrik, and Osha freeing them and leading them out; the Shaggydog and Summer pages have the wolves fleeing with them (GOT206).',
    },
    '16:chapter': {
      source: WF_BRAN_VI,
      note: 'Added after review. Bran VI (site 120): Rodrik gone to Torrhen’s Square, the ironmen swimming the moat and unlocking the postern gate, Theon calling himself a prince, the people gathered, and Mikken dying as he refuses to kneel; Rickon’s captivity is his status pin at 16/120, the summary not naming him in the hall.',
    },
    '17:episode': {
      source: `${SHOW}Rickon_Stark`,
      note: 'Rickon Stark page (GOT207): the shepherd’s farm, the two boys Bran sent there, Rickon wanting food and Bran’s caution, Theon losing the scent, and the charred corpses claimed as Bran and Rickon; the Dagmer page has the cracked walnut shells, a favourite of Rickon (GOT207).',
    },
    '17:chapter': {
      source: WF_THEON_IV,
      note: 'Added after review. Theon IV (site 124): the silent wolves, Bran and Rickon gone, the wolves gone, the dead guards at the Hunter’s Gate, Theon realizing Osha would need to carry Rickon on foot, the hunt and the brook; Rickon’s status turns free at 17/124.',
    },
    '20:episode': {
      source: `${SHOW}Rickon_Stark`,
      note: 'Rickon Stark page (GOT210): the crypt, Winterfell in ruins, Luwin under the willow, the offer of medicine refused, warm clothing and Castle Black, Jon, and the journey north with Bran, Osha, Hodor and the two direwolves.',
    },
    '20:chapter': {
      source: WF_BRAN_VII,
      note: 'Bran VII (site 143): the hiding in the crypts, Luwin dying in the godswood, the boys as Robb’s heirs who must be separated, Bran north with the Reeds, Hodor and Summer, and Osha taking Rickon and Shaggydog.',
    },
  },
  'theon-greyjoy': {
    '1:2': {
      source: `${BOOKS}Bran_I_-_A_Game_of_Thrones`,
      note: 'Chapter 2: Eddard’s ward at the execution, the litter, and Theon claiming the albino will die quicker. Show side: episode 1 and the Theon page (GOT101): he rides to the execution and calls the albino the runt that belongs to Jon. The two versions of his remark differ, so the story says only that he is scornful of the pup.',
    },
    '4:25': {
      source: `${SHOW}Theon_Greyjoy`,
      note: 'Season 1, citing episode 4, and the episode synopsis: Theon summons Hodor, condescendingly recommends Ros, and Tyrion mocks “a stupid rebellion” and the son reduced to a lackey of his captors, which infuriates Theon. Show only.',
    },
    '6:38': {
      source: EPISODE_6,
      note: 'The synopsis: the ride with Robb and Bran on the new saddle, the knife at Bran’s throat, Theon’s arrow and Robb’s anger, Osha yielding. Book side: Bran V (Ice and Fire Wiki chapter page): Theon shoots Stiv just in time, Osha surrenders; corrected after review: the reason for Robb’s anger is the show’s alone, so the story says only that he is furious.',
    },
    '10:72': {
      source: `${SHOW}Theon_Greyjoy`,
      note: 'Season 1, citing episodes 9 and 10: the ravens shot down at the Twins, the battle where Jaime is taken, Theon proposing to send Jaime’s head to Tywin, and after the proclamation “brothers, now and always” and the sword sworn. Show only; the chapter orders it.',
    },
    '11:81': {
      source: `${SHOW}Theon_Greyjoy`,
      note: 'Theon Greyjoy page (GOT201): Theon appealing to Robb for an alliance with Balon, the fleet needed for King’s Landing, his confidence that Balon will listen, Catelyn’s reservations and Robb sending him home as envoy. Balon is named unlinked: his show gate is 12.',
    },
    '12:85': {
      source: WF_THEON_I,
      note: 'Theon I (site 85): the voyage on the Myraham, ten years a ward, Robb’s letter as good as a crown, no honour guard, Aeron’s seawater and his warning, Balon’s scorn for the gold chain, the burned letter, the backhand, and the kingdom Balon means to carve out. Aeron is named unlinked: his show gate is 55.',
    },
    '12:98': {
      source: EPISODE_12,
      note: 'The Iron Islands synopsis: no one at Lordsport, the woman’s ride to Pyke and the seduction, Balon questioning his loyalty, Robb’s letter, Yara greeted warmly, the proposal rejected, and Balon having no intention of fighting the Lannisters; the clasp is on the Balon Greyjoy page (GOT202).',
    },
    '13:episode': {
      source: EPISODE_13,
      note: 'The Iron Islands synopsis: the war council, the plan for the North, one ship for the Stony Shore and thirty for Yara against Deepwood Motte, Theon’s plea and the reminder that he was given up as a ward, the blow, the thought of warning Robb, and the baptism by a Drowned Man.',
    },
    '13:chapter': {
      source: WF_THEON_II,
      note: 'Theon II (site 98): Esgred on the docks, the ride double with his hands on her, the stableboy naming Asha, her seat at Balon’s right and the hall laughing at the axe, and the solar plan of eight ships with Aeron while Asha takes Deepwood Motte. Aeron is named unlinked: his show gate is 55.',
    },
    '15:episode': {
      source: EPISODE_15,
      note: 'The Lordsport synopsis: the insubordinate crew, Dagmer’s advice to prove himself, the raid on Torrhen’s Square to draw the Stark forces from Winterfell, and Rodrik leading two hundred men to relieve the siege; the Yara Greyjoy page has her mockery on the way to her fleet (GOT205).',
    },
    '15:chapter': {
      source: WF_THEON_III,
      note: 'Theon III (site 111): the Wild Hares beaten, Benfred drowned at Aeron’s insistence, the arrow meant for Todric’s ale horn hitting his belly and Todric silenced, and the plan told to Dagmer aboard Foamdrinker: siege engines at Torrhen’s Square to bring Rodrik out of Winterfell. Aeron is named unlinked: his show gate is 55.',
    },
    '16:episode': {
      source: EPISODE_16,
      note: 'The Winterfell synopsis: the castle taken with grappling claws, Bran’s submission, Rodrik captured and spitting in Theon’s face, Dagmer insisting, the botched beheading, and Osha sleeping with Theon and freeing the boys; the Luwin page has the ravens to Balon and Yara, and the Rodrik Cassel page the sentence and the sword (GOT206).',
    },
    '16:chapter': {
      source: WF_BRAN_VI,
      note: 'Bran VI (site 120): Rodrik gone to Torrhen’s Square, Theon calling himself a prince, the ironmen swimming the moat and unlocking the postern gate, no one hurt if they concede, Mikken dying as he refuses to kneel, and Reek and Osha joining his service.',
    },
    '17:episode': {
      source: EPISODE_17,
      note: 'The Winterfell synopsis: Osha gone with Hodor, Bran, Rickon and the direwolves, Lorren beaten for blaming Theon, the hounds, the shepherd’s farm, the lost scent, Luwin sent back, mercy exhausted, and two burned children hoisted beside the gate. The man stays unnamed: Black Lorren is the books’ record.',
    },
    '17:chapter': {
      source: WF_THEON_IV,
      note: 'Theon IV (site 124): the silence of the wolves, Wex finding the Starks gone, Reek reporting the six missing, Urzen and Black Lorren with the dead guards, the hunt into the wolfswood with Luwin, Farlen and twelve dogs, mercy promised, the brook, Reek’s mill by the Acorn Water and his sack, and mercy was for this morning.',
    },
    '18:episode': {
      source: `${SHOW}Theon_Greyjoy`,
      note: 'Theon Greyjoy page (GOT208): twenty men instead of the five hundred (GOT206), everyone in the North wanting him dead for the Stark boys, too far from the sea, the plea to come home, the refused prize, the payment for the farmer’s grief and Dagmer having murdered the farmer and his wife.',
    },
    '18:chapter': {
      source: WF_THEON_V,
      note: 'Theon V (site 130): the nightmares since the mill, the three ironborn killed by Reek, Farlen executed, Asha’s twenty men and her counsel, the refusal, Reek’s offer of two hundred men, the feast with the dead, and the heads that belong to the miller’s sons, faces flayed, Bran and Rickon never found.',
    },
    '20:episode': {
      source: `${SHOW}Theon_Greyjoy`,
      note: 'Theon Greyjoy page (GOT210): the siege and the horn all night, his anguish at being called lucky, Luwin’s advice to take the black, too late and Jon Snow likely to kill him, the rousing speech, Dagmer knocking him out and the cloth bag. Ramsay is left unnamed: his show gate is 32.',
    },
    '20:chapter': {
      source: WF_THEON_VI,
      note: 'Theon VI (site 140): Luwin’s counsel to yield and to take the black, Wex first to step over, Lorren and Beth on the walls during Rodrik’s parley, the Dreadfort men and the corpses, Reek unmasked as Ramsay Snow, the punch and the sack. Ramsay is named unlinked: his show gate is 32.',
    },
  },
  'luwin': {
    '1:7': {
      source: EPISODE_1,
      note: 'The synopsis has the letter from Lysa delivered to Luwin, its claim that the Lannisters murdered Jon Arryn, and Luwin’s counsel to accept. Book side: Catelyn II (Ice and Fire Wiki chapter page, chapter 7): the letter in a box with a false bottom, the charge against the queen, Eddard agreeing “upon insistence from Catelyn and Luwin”.',
    },
    '2:15': {
      source: EPISODE_2,
      note: 'The synopsis and the Luwin page (GOT102): Luwin goes to Catelyn about finances and replacements, she refuses, Robb agrees to work with him; then the fire and the assassin. Book side: Catelyn III (Ice and Fire Wiki chapter page, chapter 15): the castle books and appointments, Catelyn’s temper, Robb taking them on, the library tower on fire.',
    },
    '10:episode': {
      source: `${SHOW}Luwin`,
      note: 'Season 1, citing episodes 9 and 10: left to care for Bran when Robb marches, and telling Bran and Rickon of their father’s death. The episode synopsis has him outside the crypts holding a letter.',
    },
    '10:chapter': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_66`,
      note: 'Bran VII (site chapter 67): Luwin takes Bran down to show his father is not there, Shaggydog savages his arm in the tomb, Osha bandages it, dreams are just dreams, the children of the forest and the dragonglass, and the raven read in tears.',
    },
    '13:episode': {
      source: `${SHOW}Luwin`,
      note: 'Luwin page (GOT201, GOT203): counsel to Bran as acting lord, the Valyrian steel link and the higher mysteries, magic long gone from the world; the Bran Stark page has the beings who could enter the minds of animals (GOT203), and the episode synopsis his dismissal of the dreams.',
    },
    '13:chapter': {
      source: WF_BRAN_IV,
      note: 'Bran IV (site 102): greenseers seeing through the weirwoods and controlling animals, the dream of the crypts that came true, the maester’s chain, the Valyrian steel link for the higher mysteries, Valyria the last ember, and no living man with that power. Jojen is named unlinked: his show gate is 22.',
    },
    '16:120': {
      source: `${SHOW}Luwin`,
      note: 'Luwin page (GOT206): word sent to Robb before his capture, the ravens to Balon and Yara, the oath to serve the Lord of Winterfell whatever his family name, Rodrik worth more alive than dead, Theon’s threat, and the horror at the execution.',
    },
    '17:episode': {
      source: `${SHOW}Luwin`,
      note: 'Luwin page (GOT207): made to accompany the hunt, begging Theon to spare them, the scent lost at a farm, sent home, the burned corpses claimed as Bran and Rickon, and his scream of anguish the loudest.',
    },
    '17:chapter': {
      source: WF_THEON_IV,
      note: 'Theon IV (site 124): Luwin taken along because Theon dares not leave him, his plea for mercy for the Starks and the Reeds as hostages against Howland Reed, Theon sparing all but Osha, the crannogmen and the children of the forest, and mercy was for this morning.',
    },
    '18:130': {
      source: `${SHOW}Luwin`,
      note: 'Luwin page (GOT208): Osha sneaking into the catacombs, the stream masking their scent, the corpses realized to be Jack and Billy, the two orphans Bran sent to the shepherd, the plea not to tell the boys, and Bran overhearing.',
    },
    '20:140': {
      source: WF_THEON_VI,
      note: 'Theon VI (site 140): Luwin bound to serve whoever holds Winterfell, the counsel to yield, the walls climbed within days, the suggestion to take the black as a way to live with dignity and honour, Kromm’s interruption with the Dreadfort men, and Luwin cut down in the sack.',
    },
    '20:episode': {
      source: EPISODE_20,
      note: 'The Winterfell synopsis: Luwin suggesting the Night’s Watch, the men betraying Theon, Dagmer stabbing Luwin with a spear, the boys finding him dying in the godswood, the Wall and Jon, and the quick death asked of Osha; the Luwin page has Theon not the ruthless man he pretends to be (GOT210).',
    },
    '20:chapter': {
      source: WF_BRAN_VII,
      note: 'Bran VII (site 143): Summer leading them to Luwin near death, his knowing the bodies were not Bran and Rickon and never telling Theon, Robb’s heirs to be separated, ironmen west and the Bastard of Bolton east, Bran his father’s son, and the boon that sends the others away; that Osha gives him a quick death follows his status pin at 20/143 and the show’s telling, the chapter leaving the boon unspoken.',
    },
  },
  'old-nan': {
    '3:episode': {
      source: EPISODE_3,
      note: 'At Winterfell, and the Old Nan page (GOT103): by Bran’s bed after Catelyn leaves, the offered Duncan the Tall story refused, the Long Night that lasted a generation and the White Walkers coming south. Show only; the chapter is her book gate.',
    },
    '4:25': {
      source: `${BOOKS}Bran_IV_-_A_Game_of_Thrones`,
      note: 'Added after review. Chapter 25: Rickon plays with the direwolves in the yard, Bran says he hates her stories until she tells of the Others, the Long Night and the Last Hero, Luwin comes with Hodor, and she says “stories can wait, but visitors rarely do”.',
    },
    '3:chapter': {
      source: `${BOOKS}Old_Nan`,
      note: 'A Game of Thrones section: after Catelyn is attacked by the assassin, Old Nan helps her wash away the blood. Catelyn III (chapter 15) has the fight and her being treated for her wounds. Her storytelling is the page’s history section.',
    },
    '11:78': {
      source: WF_BRAN_I,
      note: 'Bran I (site 78): the direwolves howling, everyone’s answers, Old Nan unable to see the comet but smelling it and saying it foretold dragons, and the Starks’ wolf blood, stronger in some than others. Episode 11 adapts the comet.',
    },
  },
  'hodor': {
    '4:25': {
      source: EPISODE_4,
      note: 'The synopsis: the stableboy who can only say “Hodor” carries Bran down to Robb’s meeting with Tyrion, who brings the saddle design. Book side: Bran IV (Ice and Fire Wiki chapter page, chapter 25): Hodor carries him downstairs to the hall where Tyrion shares the design.',
    },
    '11:90': {
      source: WF_BRAN_II,
      note: 'Bran II (site 90): Hodor helping Bran dress, his deftness and strength, a great knight had the gods left him his wits, the basket, Little Walder’s ugly horse and the bumping, and Luwin reminding the Walders that good lords protect the weak. Little Walder is named unlinked: his book-only record is ordered at episode 13.',
    },
    '13:102': {
      source: WF_BRAN_IV,
      note: 'Bran IV (site 102): Bran unable to call off the wolves, remembering he is not alone, Hodor gleefully chasing them away, Jojen back on the ground, and Hodor bringing Bran to Luwin. The Reeds are named unlinked: their show gate is 22.',
    },
    '16:120': {
      source: `${SHOW}Hodor`,
      note: 'Hodor page (GOT206): Hodor looking on as Theon declares himself Prince of Winterfell, the castle seized, and Osha killing a guard and leading Hodor, Bran and Rickon out of the gate; the Summer page has the wolves fleeing too (GOT206).',
    },
    '16:124': {
      source: WF_THEON_IV,
      note: 'Added after review. Theon IV (site 124): Hodor among the six missing, his tracks found with the Reeds’, Dancer in the stables, Bran in the basket on Hodor’s back as Theon reckons, Hodor among those Theon agrees to spare, and the brook. Ordered at 16/124 with Osha’s pin.',
    },
    '20:episode': {
      source: `${SHOW}Hodor`,
      note: 'Hodor page (GOT208, GOT210): the hiding in the crypts with Hodor asleep beside Rickon, the burned castle, Luwin badly wounded in the godswood, the Wall and Jon Snow, and Hodor pushing Bran in a wheelbarrow while Osha carries Rickon.',
    },
    '20:chapter': {
      source: WF_BRAN_VII,
      note: 'Bran VII (site 143): the hiding in the crypts, Hodor moving the massive stone from the door, Winterfell in ashes, Luwin dying in the godswood, and Hodor going north with Bran, the Reeds and Summer. Theon IV (site 124) has Bran in the basket on Hodor’s back. The Reeds are named unlinked: their show gate is 22.',
    },
  },
  'osha': {
    '6:38': {
      source: `${SHOW}Osha`,
      note: 'Season 1, citing episode 6: the wildlings in the wolfswood trying to steal Bran’s horse, Robb intervening, Stiv killed by Theon, Osha surrendering and taken to Winterfell. Book side: Bran V (Ice and Fire Wiki chapter page): Osha among the six outlaws, surrendering and taken prisoner.',
    },
    '7:38': {
      source: `${SHOW}Osha`,
      note: 'Season 1, citing episode 7: a servant now, refusing to call Theon “my lord” while his father lives, Luwin sending Theon away and asking why she came south, and things under the ice that are not sleeping any more. Show only.',
    },
    '8:54': {
      source: EPISODE_8,
      note: `The synopsis: Osha in the godswood with Bran, the southern weirwoods cut down, naked Hodor and giant blood, giants beyond the Wall, the army marching the wrong way. Book side: Bran VI on A Wiki of Ice and Fire, its Chapter_53 page, with the same points.`,
    },
    '10:episode': {
      source: EPISODE_10,
      note: 'At Winterfell, and the Shaggydog page (GOT110): Osha takes Bran down, the histories, Shaggydog leaping from Eddard’s empty tomb so that they fall over, Rickon’s same dream, “it could be a coincidence”, and Luwin outside with the news.',
    },
    '10:chapter': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_66`,
      note: 'Bran VII (site chapter 67): chains removed but the shackles kept, Luwin calling her to carry Bran, “winter has no king”, helping Luwin and bandaging his wound, telling him Bran is the lord, some dreams not just dreams, and telling Bran he knows what the raven brings.',
    },
    '11:78': {
      source: `${SHOW}Hodor`,
      note: 'Hodor page (GOT201): the godswood, the pain-relieving plant, Bran denying more dreams, the comet as an omen for Robb, Osha stroking his hair, stars not falling for men and the red comet meaning dragons; the Osha page has the insistence on the pool (GOT201).',
    },
    '11:90': {
      source: WF_BRAN_II,
      note: 'Bran II (site 90): Osha exploding naked out of the pool by the heart tree, her scars from fighting men, mostly Night’s Watch, one killed, Little Walder big outside and little inside, the denied wolf dreams, a prince should lie better, and back to the kitchens. Little Walder is named unlinked: the story’s episode is 11, his book-only record is ordered at 13.',
    },
    '15:109': {
      source: `${SHOW}Rodrik_Cassel`,
      note: 'Rodrik Cassel page (GOT205): Osha listening intently as she lights candles while Rodrik reports the siege and his two hundred men; the Osha and Bran Stark pages have the three-eyed raven, no explanation, the dream of the sea drowning Rodrik, and her leaving abruptly (GOT205).',
    },
    '16:episode': {
      source: `${SHOW}Osha`,
      note: 'Osha page (GOT206): her offer to fight for Theon refused on suspicion, Rodrik’s execution and the dream come true, the seduction for her freedom, and the escape with Bran, Rickon, Summer, Shaggydog and Hodor, killing Drennan; the Bran Stark page has the sea as the Iron Islands (GOT206).',
    },
    '16:chapter': {
      source: WF_BRAN_VI,
      note: 'Bran VI (site 120): the household gathered, most defying Theon, Mikken killed refusing to bend the knee, Reek and Osha joining his service, Bran’s disappointment and his persuading the rest not to fight.',
    },
    '16:124': {
      source: WF_THEON_IV,
      note: 'Added after review. Theon IV (site 124): Osha among the six missing, Drennan killed by the woman as Theon surmises, the day-long hunt, and mercy for all but Osha, who took an oath and broke it. Ordered at 16/124, her role and status pin.',
    },
    '18:130': {
      source: `${SHOW}Osha`,
      note: 'Osha page (GOT208): the doubling back through a stream, the crypts, Luwin seeing her smuggle bread, the bodies of the orphan farmhands, her promise not to tell the boys, who have suffered enough; the Luwin page has Bran overhearing (GOT208).',
    },
    '20:episode': {
      source: `${SHOW}Osha`,
      note: 'Osha page (GOT210): hiding in the crypts during the sack, the dying Luwin, the instruction to take the boys to Jon at the Wall, her agreement, the gift of mercy at his request, and leaving with Hodor, Bran, Rickon and the direwolves; the Rickon Stark page has the boys leaving first (GOT210).',
    },
    '20:chapter': {
      source: WF_BRAN_VII,
      note: 'Bran VII (site 143): the wolves sent on while the humans doubled back to the crypts, the sword Mikken made for Eddard’s tomb, Luwin dying and the boys to be separated, the boon, and Osha taking Rickon and Shaggydog while Bran goes north. Theon IV (site 124) has the oath she took and broke.',
    },
  },
  'mikken': {
    '2:54': {
      source: `${SHOW}Mikken`,
      note: 'Season 1, citing episode 2: Mikken forges Needle for Arya. The episode synopsis has Jon’s gift, the name Needle and “Stick them with the pointy end.” Book side: the Ice and Fire Wiki’s Mikken page (the bravo’s blade made for Jon, given to Arya) and Jon II. Filed at chapter 54, his book gate.',
    },
    '15:109': {
      source: WF_BRAN_V,
      note: 'Bran V (site 109): Bran at Mikken’s bellows when Robb’s raven comes, Jojen’s dream naming Mikken among the drowned, and Mikken finding it funny and saying he always wanted to see the sea. Jojen is named unlinked: his show gate is 22.',
    },
    '16:120': {
      source: WF_BRAN_VI,
      note: 'Bran VI (site 120): the people gathered in the Great Hall, Mikken drowning on his own blood as he refuses to bend the knee, and Jojen’s dream of the sea come true. Jojen is named unlinked: his show gate is 22.',
    },
  },
  'hallis-mollen': {
    '2:15': {
      source: `${BOOKS}Catelyn_III_-_A_Game_of_Thrones`,
      note: 'Chapter 15: Hallis Mollen, the new captain of the guard, meets Catelyn with Robb, Theon and Ser Rodrik; the assassin was a stranger, likely of the royal party, hidden in the stables; he leaves with orders to protect Bran. His page has him replacing Jory.',
    },
  },
  'summer-direwolf': {
    '4:18': {
      source: `${SHOW}Summer`,
      note: 'Season 1, citing episode 2: the assassin killed and Summer lying next to Bran; episode 4 has him by Bran’s side. Book side: Catelyn III (chapter 15) for the killing and Bran III (chapter 18) for the wolf on his bed and the name Summer. The reviewed relationship pin at 4/18 holds both media.',
    },
    '6:38': {
      source: `${BOOKS}Bran_V_-_A_Game_of_Thrones`,
      note: 'Bran V: Robb leaves to fetch the direwolves, the outlaws ambush Bran, Robb, Grey Wind and Summer fight them off, most attackers die, Theon shoots Stiv, Osha surrenders. Book only; the show’s ride has no wolves.',
    },
    '10:67': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_66`,
      note: 'Bran VII (site chapter 67): Summer uneasy and refusing to leave the steps, then slamming into Shaggydog when Bran calls, knocking him off Luwin. Book only.',
    },
    '11:78': {
      source: EPISODE_11,
      note: 'At Winterfell: the dream of being Summer in the godswood, Summer’s reflection in the pool, Osha and Hodor taking Bran there, and his own waking reflection; the Summer page has the wolf kept in the godswood and Bran experiencing its movements (GOT201).',
    },
    '13:95': {
      source: WF_BRAN_III,
      note: 'Bran III (site 95): Summer left in the godswood on Rodrik’s orders, the wolf dream, the intruders with no taint of fear, Meera’s voice, Shaggydog full of fear and rage and Summer stronger than he knows, and Jojen’s touch. The Reeds are named unlinked: their show gate is 22.',
    },
    '13:episode': {
      source: `${SHOW}Hodor`,
      note: 'Hodor page (GOT203): Summer following Hodor as he comes to wake Bran, jumping onto the bed, Bran looking down at his own face and waking into Summer’s eyes with Hodor looking on; the episode synopsis has Luwin dismissive.',
    },
    '13:102': {
      source: WF_BRAN_IV,
      note: 'Bran IV (site 102): Summer past the frog spear and entangled in the net, never drawing blood, the growl at the falling question, Meera naming Bran’s anger and the two part of each other, Shaggydog’s arrival, and Hodor chasing the wolves away. The Reeds are named unlinked: their show gate is 22.',
    },
    '20:143': {
      source: WF_BRAN_VII,
      note: 'Bran VII (site 143): Summer and Shaggydog watching the sack from the edge of the wolfswood, the wolf dream of three days, the ruins of the winter town, the wolves rejoining them near the broken tower, Summer leading them to Luwin, and Summer going north with Bran.',
    },
  },
  'shaggydog': {
    '10:54': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_53`,
      note: 'Added after review. Bran VI (chapter 54): Rickon grown wild since he learned Robb was leaving; found in the crypts, he slashes at men with a sword, Shaggydog bites Gage’s arm and takes a chunk out of Mikken’s thigh, Robb and Grey Wind master him, and he is chained in the kennels. Read through Firecrawl’s condensed synopsis.',
    },
    '10:25': {
      source: `${BOOKS}Bran_IV_-_A_Game_of_Thrones`,
      note: 'Chapter 25: Rickon playing with the direwolves in the yard while Bran watches jealous, and in the hall “the three direwolves” confronting Tyrion until called away by their masters. That Shaggydog is one of the three is inferred from the chapter page; unverified on the chapter text. Filed at episode 10, his show gate.',
    },
    '10:episode': {
      source: `${SHOW}Shaggydog`,
      note: 'Season 1, citing episode 10: Shaggydog leaps out at Bran and Osha in the crypt so that they fall over, and it is said he should be tied up but does not like it. The episode synopsis has Rickon calling him off.',
    },
    '10:chapter': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_66`,
      note: 'Bran VII (site chapter 67): Shaggydog springs out of Eddard’s future tomb and savages Luwin’s arm, Summer knocks him off, Rickon does not like him chained, and Luwin calls him “the third man” savaged.',
    },
    '13:102': {
      source: WF_BRAN_IV,
      note: 'Bran IV (site 102): Shaggydog’s arrival and lunge, Summer reacting to Bran’s anger, Jojen up the tree and Meera after him, and Hodor chasing the wolves away; Bran I (site 78) has the wolves confined to the godswood after Shaggydog bit Little Walder. The Reeds are named unlinked: their show gate is 22.',
    },
    '16:120': {
      source: `${SHOW}Shaggydog`,
      note: 'Shaggydog page (GOT206): Theon capturing Winterfell and Shaggydog and Summer fleeing with Osha, Bran, Rickon and Hodor; the episode synopsis has Rodrik’s execution, Osha leaving Theon asleep and the guard killed.',
    },
    '20:episode': {
      source: `${SHOW}Shaggydog`,
      note: 'Shaggydog page (GOT210): Shaggydog and Summer reuniting with the boys after the sack and going north to Jon at the Wall; the episode synopsis has Luwin dying and sending them north.',
    },
    '20:chapter': {
      source: WF_BRAN_VII,
      note: 'Bran VII (site 143): the direwolves sent on to make a trail, watching the sack from the wolfswood, rejoining the others near the broken tower, and Osha taking Rickon and Shaggydog while Bran goes north with Summer.',
    },
  },
  'ghost-direwolf': {
    '4:6': {
      source: `${BOOKS}Jon_I_-_A_Game_of_Thrones`,
      note: 'Chapter 6: Jon sits with the squires and feeds Ghost under the table; in the courtyard Ghost is mistrustful of Tyrion, who wants to stroke him. The finding of the white pup with red eyes, apart and first to open his eyes, is Bran I and the Ice and Fire Wiki’s Ghost page. Filed at episode 4, his show gate.',
    },
    '4:27': {
      source: `${SHOW}Ghost`,
      note: 'Season 1, citing episode 4: Ghost helps Jon threaten Rast at night, standing over him snarling; the synopsis adds that no one will fight Sam the next day. Book side: Jon IV (Ice and Fire Wiki chapter page, chapter 27): Rast visited by Jon, Grenn, Pyp and Ghost, and Sam treated well afterwards.',
    },
    '7:49': {
      source: `${SHOW}Ghost`,
      note: 'Added after review. Season 1, citing episode 7: while Jon and Sam swear their vows before a heart tree north of the Wall, Ghost finds two rangers’ corpses and brings back a severed hand. Book side: Jon VI (chapter 49), the vows in a weirwood grove beyond the Wall; unverified on the chapter text. Othor and Jafer are left unnamed, since both open at episode 8.',
    },
    '8:53': {
      source: `${SHOW}Ghost`,
      note: 'Season 1, citing episodes 7 and 8: Othor and Jafer Flowers found dead, Ghost whining at Jon’s door at night, the wight in the Lord Commander’s quarters, and fire. Book side: the reviewed relationship pin at 8/53 (Ghost rouses Jon at his door, a dead man risen in Mormont’s rooms) and the Game of Thrones Wiki’s Jon page, In the books (Othor killed by fire to save Mormont). Jon VII is unverified on the chapter text.',
    },
    '11:97': {
      source: WL_JON_III,
      note: 'Jon III (site 97): Craster’s dogs and Ghost ignoring them, the caged rabbits, Jon finding Ghost before a frightened girl and promising he will not hurt her, Lark and Chett taunting him as a coward without his wolf, the second rabbit given to Jon, Ghost finding Sam, the rabbit cooked, and Ghost gone at dawn. Gilly is named unlinked: her show gate is 15.',
    },
    '12:97': {
      source: `${SHOW}Ghost`,
      note: 'Ghost page (GOT202): the ranging deep in wildling territory, Gilly frightened when Ghost approaches for her dead rabbit, Sam shooing him away, the baleful look and Ghost slinking off (GOT202). Gilly is not named: her show gate is 15.',
    },
    '15:108': {
      source: WL_JON_IV,
      note: 'Jon IV (site 108): Ghost running off on the climb, coming inside the ring he had refused, sniffing the air, Jon remembering that Ghost knew when the dead came walking, the chase around the Fist, the freshly dug mound, the body Jon expects, and the cloak with dragonglass and the warhorn.',
    },
    '16:125': {
      source: `${SHOW}Ghost`,
      note: 'Ghost page (GOT205, GOT206): Ghost climbing the Fist with the black brothers, following Jon when he joins Qhorin’s raiders, separating from the group and disappearing despite Jon’s calls (GOT206).',
    },
    '17:127': {
      source: WL_JON_VII,
      note: 'Jon VII (site 127): the dream through Ghost’s eyes, the weirwood with his brother’s face and three eyes, the clifftop over thousands training and giants on mammoths, the eagle, Jon waking with Ghost’s name, Qhorin’s wolf dream, and Ghost found wounded after they set out at dusk. No season-2 episode adapts Jon VII; episode 17 orders it.',
    },
    '20:142': {
      source: WL_JON_VIII,
      note: 'Jon VIII (site 142): the hunters with the Lord of Bones, Jon yielding as ordered, the command to kill Qhorin, Ghost biting the man’s calf to give Jon an opening, Longclaw, and the wildlings accepting Jon.',
    },
  },
  'benjen-stark': {
    '1:6': {
      source: `${SHOW}Benjen_Stark`,
      note: 'Season 1, citing episode 1: he comes for the feast, and Jon asks to join the Watch despite his warning. The synopsis has Benjen agreeing to consider it; Jon I (Ice and Fire Wiki chapter page, chapter 6) has him refuse because Jon is too young. The story says only that he does not say yes.',
    },
    '2:14': {
      source: EPISODE_2,
      note: 'The synopsis: Jon, Tyrion and Benjen ride north, joined by rapers who chose the black rather than be gelded, and Jon learns the Watch is not what he believed. Book side: Tyrion II (Ice and Fire Wiki chapter page, chapter 14): Benjen leading the party, Yoren’s two rapers joining, Jon admitting the Watch is not what he thought.',
    },
    '3:20': {
      source: `${SHOW}Benjen_Stark`,
      note: 'Season 1, citing episode 3: the ranging north of the Wall, Jon asking to come, “he is not ready”. Book side: Jon III (Ice and Fire Wiki chapter page, chapter 20): Benjen left on a ranging a few days after Jon arrived and refused to take him.',
    },
    '7:25': {
      source: `${SHOW}Benjen_Stark`,
      note: 'Season 1, citing episode 7: his horse returns to Castle Black without him. Corrected after review: the book tells it at Bran IV (chapter 25), where Yoren says he has gone missing north of the Wall (Ice and Fire Wiki, Bran IV), so the story and his status moved from 7/42 to 7/25. The horse, Yoren and “a few rangers” are left out, as each is one medium’s alone or unsourced.',
    },
  },
  'catelyn-stark': {
    '1:episode': {
      source: `${SHOW}Catelyn_Stark`,
      note: 'Season 1, citing GOT101: the raven with Jon Arryn’s death, the king riding north, Bran caught climbing and lying, the cordial words with Cersei, Lysa’s letter brought by Luwin, Catelyn preferring that Eddard stay, and his acceptance.',
    },
    '1:chapter': {
      source: `${BOOKS}Catelyn_I_-_A_Game_of_Thrones`,
      note: 'Chapter 3: the godswood, Eddard cleaning Ice under the heart tree, the talk of the children and pups, Bran’s bravery, the letter in Robert’s hand with his seal, the queen’s brothers coming, and Eddard’s mood lifted by the visit.',
    },
    '1:7': {
      source: `${BOOKS}Catelyn_II_-_A_Game_of_Thrones`,
      note: 'Chapter 7: Luwin’s box with the false bottom, Lysa’s letter naming Cersei, Catelyn urging him south, Catelyn to rule the North and train Robb, Rickon too young, Sansa, Arya and Bran to go, her refusal to keep Jon, and Luwin’s suggestion of the Night’s Watch.',
    },
    '2:15': {
      source: `${BOOKS}Catelyn_III_-_A_Game_of_Thrones`,
      note: 'Both media: the vigil, the fire, the killer and the direwolf, the council with Robb, Theon, Rodrik and Luwin, the ride south with Rodrik (chapter 15; GOT102 on the Game of Thrones Wiki’s Catelyn page). Jon’s cold farewell is Jon II (chapter 11) and GOT102. The book’s Hallis Mollen and the show’s blonde hair are left out.',
    },
    '3:19': {
      source: EPISODE_3,
      note: 'Show only: the attempt to sneak in, Littlefinger’s man, his brothel, Varys’s “little birds”, the dagger lost to Tyrion, and Eddard fetched; the Catelyn page (GOT103) has him sending her back to Winterfell.',
    },
    '3:21': {
      source: `${BOOKS}Eddard_IV_-_A_Game_of_Thrones`,
      note: 'Books only. Catelyn IV (chapter 19): the ship, Rodrik’s shaved whiskers, the City Watch, Baelish and their shared childhood, Varys, the dagger lost at a tourney to Tyrion. Eddard IV (chapter 21): Baelish takes Eddard to a brothel to meet her, the inquiry into Jon Arryn’s death, and orders to reinforce the North.',
    },
    '4:29': {
      source: `${BOOKS}Catelyn_V_-_A_Game_of_Thrones`,
      note: 'Both media: the inn, Marillion trying to charm her and Rodrik disliking him, Tyrion arriving with Yoren and recognising her, the men sworn to her father’s bannermen, the accusation and the seizure (chapter 29; GOT104 on the Catelyn and Rodrik pages). Tyrion’s captured status is at 4/29.',
    },
    '5:35': {
      source: `${SHOW}Catelyn_Stark`,
      note: 'Both media: the announced ride to Winterfell, the turn east, the clansmen, Tyrion freed to fight saving her and her lasting distrust (GOT105; the Ice and Fire Wiki’s Catelyn page tells the same in the book), and Lysa taking Tyrion into her custody (relationship pin at 5/35).',
    },
    '6:41': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_40`,
      note: 'Books only, Catelyn VII: Rodrik’s news of Jaime’s army, Brynden resigning after Lysa refuses him a thousand men, Catelyn claiming Tyrion as her prisoner, Bronn killing Vardis Egen, and Lysa admitting the gods found Tyrion innocent and sending him down the high road. Tyrion’s alive status is at 6/41.',
    },
    '8:episode': {
      source: EPISODE_8,
      note: 'Show only: Catelyn furious with Lysa over the delayed news and the knights of the Vale, meeting Robb’s army in the Neck, the delayed embrace, “he cannot lose” for fear of Tywin, and the crossing held by Walder Frey, who is not named here because his show gate is episode 9.',
    },
    '8:chapter': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_55`,
      note: 'Books only, Catelyn VIII: White Harbor, Brynden and the Manderly sons, Rodrik sent back as castellan, Sansa’s letter read as Cersei’s, the choice between kneeling, going home and winning, and Roose Bolton given the foot. The sea passage is on the Ice and Fire Wiki’s Catelyn page.',
    },
    '9:64': {
      source: `${SHOW}Catelyn_Stark`,
      note: 'Both media: Catelyn bargaining alone with Walder Frey (Robb to wed a daughter, Arya a son, Olyvar as squire), the split host, the attack on Jaime’s army at the siege, her wait, and Jaime brought back captive (GOT109; Catelyn IX and X on A Wiki of Ice and Fire, chapters 59 and 63 there). Jaime’s captured status is at 9/64.',
    },
    '10:episode': {
      source: EPISODE_10,
      note: 'Show only: Catelyn walking through the camp, weeping in the woods, Robb hacking the tree and “ruining his sword”, revenge after the girls are freed, the rock thrown at Jaime and his admission about Bran.',
    },
    '10:chapter': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_71`,
      note: 'Books only, Catelyn XI: the boat to Riverrun, news of Eddard’s death already received, Hoster dying, her self-blame for seizing Tyrion, her plea for peace refused by the lords, and the Greatjon’s proclamation taken up by the hall.',
    },
    '11:episode': {
      source: `${SHOW}Catelyn_Stark`,
      note: 'Catelyn Stark page, Season 2: her warning about the Greyjoys, the exchange of Jaime for her daughters refused, Rodrik sent to Winterfell, her errand to Renly (GOT201); her remark on the excess of kings is on the Robb Stark page (GOT201).',
    },
    '11:chapter': {
      source: `${ACOK_AWOIAF}7`,
      note: 'Catelyn I (site 81): the terms she finds harsh, Cersei never trading the girls for cousins, Robb’s lords unmaking him, her dying father, Theon and Pyke, and with the Blackfish the idea of seeking Renly’s help. Brynden is unlinked: his show gate is 23.',
    },
    '13:episode': {
      source: `${SHOW}Catelyn_Stark`,
      note: 'Catelyn Stark page: Renly’s tournament, Brienne winning a place in his Kingsguard, Robb’s message and her rebuke, Margaery’s welcome (GOT203). Brienne’s defeat of Loras is the episode synopsis.',
    },
    '13:chapter': {
      source: `${ACOK_AWOIAF}22`,
      note: 'Catelyn II (site 96): the camp at Bitterbridge, the melee Brienne wins against Loras and her place in the Rainbow Guard, the feast of summer knights, Renly’s offer that Robb may keep his title if he kneels, and word that Stannis besieges Storm’s End, written “Renly’s castle”: that name opens at chapter 105.',
    },
    '14:episode': {
      source: `${SHOW}Catelyn_Stark`,
      note: 'Catelyn Stark page and the episode synopsis: Baelish’s overture and her dagger, Tyrion’s offer of the girls for Jaime, Ned’s remains, the parley with Stannis and the brothers like sulking children (GOT204).',
    },
    '14:chapter': {
      source: `${ACOK_AWOIAF}31`,
      note: 'Catelyn III (site 105): the parley near Storm’s End, her warning of the Lannister hosts, Stannis calling Robb a traitor and revealing the incest, the peach, the deadline at dawn, Renly deciding to fight and keeping her to watch.',
    },
    '15:episode': {
      source: `${SHOW}Catelyn_Stark`,
      note: 'Catelyn Stark page: the alliance agreed, Renly killed by a shadow, Brienne blamed, their flight, Brienne’s fealty, the army splintering to Highgarden and Stannis (GOT205).',
    },
    '15:chapter': {
      source: `${ACOK_AWOIAF}33`,
      note: 'Catelyn IV (site 107): prayer in the village sept and the realisation about Bran, her plea for a great council, the shadow cutting Renly’s throat as Brienne arms him, Robar Royce told it was sorcery, Emmon Cuy struck with a brazier, the flight with Brienne.',
    },
    '16:episode': {
      source: `${SHOW}Catelyn_Stark`,
      note: 'Catelyn Stark page: Robb found in the westerlands talking to Talisa, the warning that he is not free to follow his heart, Roose’s news of Winterfell, her request to treat with Theon refused (GOT206); the Frey agreement is on the Robb Stark page (GOT206).',
    },
    '16:chapter': {
      source: `${ACOK_AWOIAF}39`,
      note: 'Catelyn V (site 113): Brienne taken as sworn sword, Edmure holding Riverrun, Cleos’s men hanged for trying to free Jaime, her dissent from Edmure’s plan against Tywin, Ned’s bones from the silent sisters, the Imp’s doing, sent to Winterfell. Episode 16, her return, orders it.',
    },
    '17:119': {
      source: `${ACOK_AWOIAF}45`,
      note: 'Catelyn VI (site 119): Edmure leaving for the Red Fork, the Mallister archers at the ford, the drunken Cleos who saw only Sansa, looking drawn, the victory with Gregor held off at the Stone Mill and Tywin marching southeast, her fear. Episode 17, where the show adapts the envoy questioned, orders it.',
    },
    '17:episode': {
      source: `${SHOW}Catelyn_Stark`,
      note: 'Catelyn Stark page: Jaime’s escape and recapture with Robb away, Karstark demanding his head, her fear for the night, the visit with Brienne, “a man without honor”, Cersei the only one, Jon Snow thrown at her (GOT207). Asking for Brienne’s sword is the episode synopsis.',
    },
    '17:chapter': {
      source: `${ACOK_AWOIAF}55`,
      note: 'Catelyn VII (site 129): the raven about Bran and Rickon, the midnight visit with Brienne outside, the traded answers, the incest and Bran’s fall admitted, the assassin denied, the Mad King’s killing of Rickard and Brandon Stark, the mockery of Ned, her call for Brienne’s sword.',
    },
    '18:129': {
      source: `${SHOW}Catelyn_Stark`,
      note: 'Catelyn Stark page: Jaime released to be exchanged for her daughters, Brienne escorting him out and down the river by rowboat, Robb’s fury, her betrayal and weakened position, the guard on her (GOT208).',
    },
    '20:141': {
      source: `${SHOW}Catelyn_Stark`,
      note: 'Catelyn Stark page: Robb in her tent about breaking the Frey betrothal for Talisa, her marriage to Eddard and their love built over time, “no right to call anyone reckless”, the secret wedding (GOT210).',
    },
  },
  'robb-stark': {
    '1:2': {
      source: `${BOOKS}Bran_I_-_A_Game_of_Thrones`,
      note: 'Both media: the execution, the party with Bran, Jon and Theon, the dead direwolf and pups, Jon’s argument about the trueborn children and Eddard’s condition that they raise the pups themselves (chapter 2; GOT101 on the Robb page). The pup’s name is left out until its gate.',
    },
    '2:15': {
      source: `${SHOW}Robb_Stark`,
      note: 'Both media: Robb running the castle with Luwin, the fire that draws him away, and command of Winterfell once Catelyn leaves (GOT102; Catelyn III, chapter 15). The embrace with Jon is Jon II (chapter 11) and the episode 2 synopsis.',
    },
    '3:25': {
      source: EPISODE_3,
      note: 'Show only: Bran awake with no memory of the fall, bedridden; Robb reluctantly confirms he will never walk, and Bran would rather be dead (also the Robb page, GOT103).',
    },
    '4:25': {
      source: `${BOOKS}Bran_IV_-_A_Game_of_Thrones`,
      note: 'Both media: Tyrion and the men of the Watch with Yoren, the cold reception, Hodor carrying Bran, the saddle design, and Tyrion refusing Robb’s hospitality (chapter 25; GOT104 on the Robb page).',
    },
    '6:38': {
      source: `${BOOKS}Bran_V_-_A_Game_of_Thrones`,
      note: 'Both media: the news of Tyrion’s seizure, Jory’s death and Eddard’s injury, the ride with the new saddle, the outlaws, Stiv shot by Theon, Robb’s anger and Osha taken (chapter 38; GOT106 on the Robb page). The reason for the anger, a shot that could have hit Bran, is the show’s alone and is left out. Stiv’s death is at 6/38. Benjen’s absence, a book detail here, is left out.',
    },
    '8:54': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_53`,
      note: 'Both media: the banners called after Eddard’s capture, the Greatjon reaching for steel, Grey Wind’s bite and his loyalty after, and Rickon sure no one comes back (Bran VI; GOT108 on the Robb page). The order of Sansa’s letter differs, so the letter is left out.',
    },
    '8:56': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_55`,
      note: 'Books only, Catelyn VIII: Grey Wind noticing her first, Sansa’s letter read as Cersei’s, “he will not lose”, the foot down the kingsroad and the horse across the Green Fork, and Roose Bolton chosen over the Greatjon.',
    },
    '9:64': {
      source: `${SHOW}Robb_Stark`,
      note: 'Both media: Catelyn bargaining in his place, Robb’s promised Frey marriage, the split host, the victory and Jaime kept alive as a prisoner (GOT109; Catelyn IX and X on A Wiki of Ice and Fire). The show’s single-combat offer and the book’s Karstark sons are left out.',
    },
    '10:episode': {
      source: EPISODE_10,
      note: 'Split after review. Season 1, citing episode 10: Renly’s claim, Robb holding that Stannis comes first, the Greatjon’s speech about the dragons and the proclamation (GOT110 on the Robb and Greatjon pages). The vengeance line was dropped: in the book Catelyn XI gives it to Edmure. Robb’s role is King in the North from 10/72.',
    },
    '10:chapter': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_71`,
      note: 'Split after review to add the Battle of the Camps. Catelyn XI (chapter 72): Riverrun freed, Hoster dying, the news of Eddard’s death already received, the council over Renly and Stannis, the Greatjon’s speech about the dragons and the river lords taking up the cry. Read through Firecrawl’s condensed synopsis.',
    },
    '11:episode': {
      source: `${SHOW}Robb_Stark`,
      note: 'Robb Stark page, Season 2: “the Young Wolf”, Jaime kept chained and questioned with Grey Wind, Stannis’s letter, Alton sent with the terms, Theon sent to Pyke against Catelyn’s counsel, Catelyn sent to Renly (GOT201). The Greyjoys are not named on screen until episode 12, so only the house is.',
    },
    '11:chapter': {
      source: `${ACOK_AWOIAF}7`,
      note: 'Catelyn I (site 81): the new crown, Cleos sent to Cersei with an exchange of hostages save Jaime, Ned’s bones and Ice, the north and the Trident, “another Whispering Wood” with Grey Wind, the lords who would not let him free Jaime, Theon to Pyke against her advice.',
    },
    '11:96': {
      source: `${ACOK_AWOIAF}22`,
      note: 'Catelyn II (site 96): Robb insisting she go to Renly, Hoster too ill, Brynden for the scouts and Edmure to hold Riverrun when he marches, waiting would look afraid, Lysa refusing support, “nothing of Harrenhal”, the threat to send the Greatjon. Episode 11 orders it: it adapts the chapter’s errand.',
    },
    '14:106': {
      source: `${SHOW}Robb_Stark`,
      note: 'Robb Stark page: the night assault at Oxcross with Grey Wind first, Roose’s advice on prisoners and torture refused for his sisters’ sake, the amputation he helps with, the healer’s answer that the men were conscript boys, not Tywin’s army (GOT204). She is unnamed: Talisa’s gate is episode 16. Chapter 106, where the books name Oxcross, orders it.',
    },
    '14:113': {
      source: `${ACOK_AWOIAF}39`,
      note: 'Catelyn V (site 113): Edmure left to hold Riverrun, Stafford Lannister’s levies crushed at Oxcross by a trail Grey Wind found around the Golden Tooth, the Greatjon’s three gold mines, Tywin marching on Riverrun. Episode 14, the show’s Oxcross, orders it.',
    },
    '16:113': {
      source: `${SHOW}Robb_Stark`,
      note: 'Robb Stark page and the episode synopsis: Talisa introduced to Catelyn, Roose with news of Winterfell, Bran and Rickon held, Roose’s bastard to retake it, Theon to be brought alive and asked why (GOT206).',
    },
    '17:129': {
      source: `${ACOK_AWOIAF}55`,
      note: 'Catelyn VII (site 129): Riverrun celebrating Edmure’s victory at the fords and Robb’s storming of the Crag, the raven from Castle Cerwyn about Bran and Rickon, and Catelyn telling Jaime that Robb took the Crag from the Westerlings. Episode 17, Robb at the Crag, orders it.',
    },
    '18:129': {
      source: `${SHOW}Robb_Stark`,
      note: 'Robb Stark page: back from the Crag with Talisa, Jaime freed by Catelyn, his fury and her guard, the plan of mercy for Theon’s men sent through Roose, Talisa’s past and the night together despite the Frey betrothal (GOT207, GOT208).',
    },
    '20:141': {
      source: `${SHOW}Robb_Stark`,
      note: 'Robb Stark page: his love for Talisa confessed to Catelyn, her warning about the Frey oath and her marriage to Ned, “no right to call anyone reckless” after Jaime’s release, the secret marriage before a septon (GOT210).',
    },
  },
  'rodrik-cassel': {
    '1:episode': {
      source: `${SHOW}Rodrik_Cassel`,
      note: 'Show only: he tells Eddard of the caught deserter during the archery (Catelyn page, GOT101), rides to the execution and sees the pups found (Rodrik page, GOT101).',
    },
    '1:chapter': {
      source: `${BOOKS}Arya_I_-_A_Game_of_Thrones`,
      note: 'Books only, chapter 8: Bran beats Tommen with wooden swords, Joffrey asks for live steel against Robb, Rodrik forbids it and does not give way to Sandor Clegane.',
    },
    '2:15': {
      source: `${SHOW}Rodrik_Cassel`,
      note: 'Both media: Rodrik identifies the Valyrian steel dagger and offers to ride with Catelyn (GOT102; the Ice and Fire Wiki’s Rodrik page for the book). “So that she need not travel alone” follows the relationship pin at 2/15.',
    },
    '4:29': {
      source: `${BOOKS}Catelyn_V_-_A_Game_of_Thrones`,
      note: 'Both media: the inn, Rodrik’s dislike of Marillion (he tries to dismiss him on screen, GOT104), Tyrion recognising Catelyn, and Rodrik with her at the seizure.',
    },
    '8:56': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_55`,
      note: 'Books only. Catelyn VII (chapter 41): Rodrik’s news of Jaime’s army, his pallor at another sea voyage, the trial by combat. Catelyn VIII (chapter 56): sent back to Winterfell as castellan to help Luwin in military matters; his role changes at 8/56.',
    },
    '10:72': {
      source: `${SHOW}Rodrik_Cassel`,
      note: 'Show only: with Catelyn to Robb’s army, greeting the Greatjon “like a longtime friend” (GOT108), advising her against the Twins (GOT109), and among those proclaiming Robb (GOT110).',
    },
    '11:81': {
      source: `${SHOW}Rodrik_Cassel`,
      note: 'Rodrik Cassel page (GOT201): present when Robb gives Alton his peace terms, sent back to Winterfell to keep Bran and Rickon safe while Catelyn goes to treat with Renly; the episode synopsis has Catelyn asking to return to her younger sons.',
    },
    '11:90': {
      source: WF_BRAN_II,
      note: 'Bran II (site 90): Rodrik beside Bran at the audiences, his promise to Lady Hornwood and her hint, his discomfort and too old a knight, Benfred ordered to remain at Torrhen’s Square, and only his daughter Beth despite three marriages. Lady Hornwood is named unlinked: her book-only record is ordered at episode 13.',
    },
    '15:109': {
      source: WF_BRAN_V,
      note: 'Bran V (site 109): Rodrik back with Reek, named by Hayhead, the murder of Lady Hornwood as Bran is told it, the Bastard shot as he rode away, Reek kept for Robb’s judgement, Manderly and Bolton fighting in the Hornwood, the raiders on the Stony Shore, and the promise to leave Alebelly behind. Bran IV (site 102) has his ride east.',
    },
    '15:111': {
      source: `${SHOW}Rodrik_Cassel`,
      note: 'Rodrik Cassel page (GOT205): the siege of Torrhen’s Square barely forty leagues away, the Mountain or sellswords, Bran on protecting their bannermen, two hundred decent men, his smile at the boy’s wisdom and southerners faring badly in the North; the episode synopsis has Theon’s plan to draw the forces away.',
    },
    '16:120': {
      source: `${SHOW}Rodrik_Cassel`,
      note: 'Rodrik Cassel page (GOT206): caught returning from Torrhen’s Square after cutting down two men, the fury and the spit, the sentence, the man who passes the sentence swinging the sword, “I’m off to see your father”, and the botched beheading with three more strikes and a kick; the Theon Greyjoy page has him calling Theon a traitor (GOT206).',
    },
    '20:140': {
      source: WF_THEON_VI,
      note: 'Theon VI (site 140): the parley in the winter town, Rodrik’s demands, Beth with a noose on the walls at Theon’s signal to Lorren, sunset, craven, Rodrik’s offer to take her place declined, and the Dreadfort men, taken for allies, presenting his corpse.',
    },
  },
  'grey-wind': {
    '8:11': {
      source: `${BOOKS}Jon_II_-_A_Game_of_Thrones`,
      note: 'Books only. The pups and Eddard’s condition are Bran I (chapter 2); Robb and Jon embrace in the courtyard in Jon II (chapter 11), where the record files Grey Wind in the yard. Unverified on the chapter text.',
    },
    '8:54': {
      source: `${SHOW}Grey_Wind`,
      note: 'Both media: at Robb’s side as the lords gather, knocking the Greatjon off his feet and biting off two fingers, the Greatjon laughing it off (GOT108 on the Greatjon page; Bran VI on A Wiki of Ice and Fire, chapter 53 there).',
    },
    '10:episode': {
      source: `${SHOW}Grey_Wind`,
      note: 'Show only: Leo Lefford reports a dozen men and as many horses killed (GOT110). Kevan calling the war a catastrophe is the episode 10 synopsis.',
    },
    '10:chapter': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_71`,
      note: 'Books only. Catelyn X (chapter 64): Grey Wind shadowing Robb into the battle. Catelyn XI (chapter 72): Theon telling how Grey Wind tore off a man’s arm and drove the Lannister horses mad.',
    },
  },
  'greatjon-umber': {
    '8:54': {
      source: `${SHOW}Greatjon_Umber`,
      note: 'Both media: his men brought to Winterfell, the demand to lead, the steel drawn, Grey Wind and the two fingers, his laugh and loyalty (GOT108; Bran VI on A Wiki of Ice and Fire). The show’s quarrel over the Glover vanguard is left out.',
    },
    '8:56': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_55`,
      note: 'Books only. Bran VI (chapter 54): “staunchest supporter”. Catelyn VIII (chapter 56): Robb meant him to lead the foot, Catelyn’s point that Eddard is brave rather than fearless, and the foot given to Roose Bolton.',
    },
    '9:60': {
      source: `${SHOW}Greatjon_Umber`,
      note: 'Show only: his objection to freeing the Lannister scout (GOT108), his warning about Walder Frey and going in alone, and his presence when Catelyn brings the terms (GOT109).',
    },
    '10:72': {
      source: EPISODE_10,
      note: 'Both media: the debate after Renly’s claim, the speech about southern kings and dead dragons, and “The King in the North” taken up by the lords (episode 10 quotes; Catelyn XI on A Wiki of Ice and Fire, chapter 71 there).',
    },
  },
  'smalljon-umber': {
    '53:64': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_63`,
      note: 'Books only, Catelyn X: Jaime charging Robb’s party and Lord Karstark’s sons dying for him. The Smalljon in Robb’s guard and son of the Greatjon is the relationship pin at 53/64 and the Game of Thrones Wiki’s Greatjon page, In the books; unverified on the chapter text.',
    },
  },
  'rickard-karstark': {
    '17:54': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_53`,
      note: 'Books only, Bran VI: the Karstarks the last to arrive, three hundred horse and near two thousand foot, Lord Rickard with Harrion, Eddard and Torrhen, the Stark blood, and Bran hosting them in the Great Hall.',
    },
    '17:72': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_71`,
      note: 'Books only. Catelyn X (chapter 64): Torrhen and Eddard dead defending Robb, Jaime guarded partly against Karstark vengeance. Catelyn XI (chapter 72): praying in the godswood, grief-stricken, asking what their sacrifices were worth, and the proclamation.',
    },
  },
  'roose-bolton': {
    '14:54': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_53`,
      note: 'Books only, Bran VI: Robb finds him the most frightening bannerman, silent, only looking; the room in the Dreadfort with the skins of enemies, which Bran calls one of Old Nan’s stories.',
    },
    '14:63': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_55`,
      note: 'Books only. Catelyn VIII (chapter 56): the question about Tyrion as hostage and “cold cunning”. Catelyn IX (chapter 60): the foot staying on the east bank. Tyrion VIII (chapter 63): the battle by the Green Fork and “Lord Roose Bolton has escaped”; the battle is the relationship pin at 14/63.',
    },
    '14:106': {
      source: `${SHOW}Roose_Bolton`,
      note: 'Roose Bolton page, Season 2: Oxcross, five for one, the prisoners they cannot feed, the officers he would torture, flaying outlawed, “the high road is very pretty”, the healer who says the northmen are not her men (GOT204). Chapter 106 orders it, where the books name Oxcross.',
    },
    '16:113': {
      source: `${SHOW}Roose_Bolton`,
      note: 'Roose Bolton page: Winterfell taken by Theon, no news of the brothers, Rodrik killed, everything lost by turning back, his bastard to raise men, Theon wanted alive (GOT206). The Dreadfort is the episode synopsis.',
    },
    '18:121': {
      source: `${ACOK_AWOIAF}47`,
      note: 'Arya IX (site 121): Vargo’s captives a ruse, Roose having bought his service, his arrival at evenfall, Shagwell presenting the girl who made the soup, “Nymeria, Nan”, the leeches and the cupbearer, the flayed man and the direwolf over the gatehouse. Episode 18 orders it: his role step.',
    },
    '18:129': {
      source: `${SHOW}Roose_Bolton`,
      note: 'Roose Bolton page: after Jaime’s release, Robb’s plan of mercy for Theon’s men, Roose confident it will work, his leaving as Talisa arrives (GOT208); the orders sent through Roose are on the Robb Stark page (GOT208).',
    },
    '18:138': {
      source: `${ACOK_AWOIAF}64`,
      note: 'Arya X (site 138): leeched while the Freys urge peace after the Blackwater, “not a man to be undone”, the order to burn Darry and kill the captives in King Robb’s name, the wolf hunt, the burnt book, Harrenhal for Vargo with Arya to serve him. Episode 18 orders it.',
    },
    '17:113': {
      source: `${ACOK_AWOIAF}39`,
      note: 'Catelyn V (site 113): Roose, who took the ruby ford and the crossroads, ordered by Edmure to take Harrenhal with Helman Tallhart’s levies from the Twins, his marriage to one of Lord Walder’s daughters, Catelyn’s objection that Robb left those men to keep Walder Frey faithful. Episode 17 orders it.',
    },
  },
  'galbart-glover': {
    '8:episode': {
      source: `${SHOW}Galbart_Glover`,
      note: 'Split after review to add the show’s vanguard. Season 1, citing episode 8: Robb gives Galbart the vanguard at the feast, the Greatjon will not march behind a Glover until Grey Wind bites off two fingers, and Galbart sits at the war council cut short when Catelyn asks to speak with her son alone.',
    },
    '8:chapter': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_55`,
      note: 'Books only: lord of Deepwood Motte, at Robb’s war council when Catelyn arrives and sends the bannermen away to speak with her son alone (Catelyn VIII); unverified beyond the condensed synopsis and the reviewed relationship pin at 8/56.',
    },
    '10:72': {
      source: `${SHOW}Galbart_Glover`,
      note: 'Both media: at the debate after Renly’s claim, Robb holding that Renly is the younger brother, and Galbart joining the proclamation (GOT110; Catelyn XI, where he sits at the council).',
    },
  },
  'robett-glover': {
    '57:54': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_53`,
      note: 'Books only, Bran VI: lords testing Robb with demands, and Robb denying supreme command to all who ask, as his father would. Robett coming to Winterfell and asking for a command is the record’s gate note and the relationship pin at 57/54; unverified on the chapter text.',
    },
  },
  'maege-mormont': {
    '8:54': {
      source: `${SHOW}Maege_Mormont`,
      note: 'Both media: lady of Bear Island, bringing her people to Winterfell after the banners are called (GOT108; the relationship pin at 8/54 and the record’s Bran VI gate).',
    },
    '10:72': {
      source: `${SHOW}Maege_Mormont`,
      note: 'Both media: with the host and among the lords who proclaim Robb (GOT110; Catelyn XI on A Wiki of Ice and Fire, chapter 71 there, where she prays with Robb and sits at the council).',
    },
  },
  'dacey-mormont': {
    '9:64': {
      source: `${SHOW}Maege_Mormont`,
      note: 'Books only: Maege’s eldest daughter and heir, in Robb’s personal guard (In the books section; relationship pin at 9/64). Jaime’s charge and capture are Catelyn X on A Wiki of Ice and Fire; her place in the guard there is unverified on the chapter text.',
    },
  },
  'wendel-manderly': {
    '29:64': {
      source: `${BOOKS}Robb_Stark`,
      note: `Added after review. Books only: Ser Wendel rides in Robb’s battle guard, among its older men, when the host falls on Jaime’s army in the Whispering Wood, and Robb takes Jaime (Ice and Fire Wiki, Robb Stark’s battle guard; Catelyn X). ${PAST_CHAPTER_PAGES}`,
    },
    '29:56': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_55`,
      note: 'Books only, Catelyn VIII: Lord Wyman, too fat to sit a horse, keeps White Harbor and sends Ser Wylis and Ser Wendel with fifteen hundred men, riding with Catelyn and Brynden to Moat Cailin.',
    },
  },
  'kovarro': {
    '11:86': {
      source: `${SHOW}Kovarro`,
      note: 'Kovarro page: his loyalty sworn after the dragons hatch, one of three bloodriders, sent east on the last horses (GOT201).',
    },
    '14:101': {
      source: `${SHOW}Kovarro`,
      note: 'Kovarro page: the only one to return so far, Qarth three days east on the sea, the new horse from the Thirteen, their invitation on hearing of the dragons, and leading the khalasar to the city (GOT204); Aggo’s fate unknown is on the Daenerys Targaryen page (GOT204).',
    },
    '20:137': {
      source: `${SHOW}Kovarro`,
      note: 'Kovarro page: guarding Daenerys before the Thirteen and ushering her out (GOT207), the House of the Undying and his watch outside, Xaro found with Doreah, and the raid on the palace for a ship (GOT210).',
    },
  },
  'malakho': {
    '15:114': {
      source: `${SHOW}Malakho`,
      note: 'Malakho and Kovarro pages: an aged Dothraki who stayed (GOT201), the jeweled golden peacock at Xaro’s reception, “too heavy to carry”, Kovarro calling him an idiot and his plan to pry out the jewels, and Daenerys’s rebuke (GOT205). Chapter 114 orders it, after Xaro’s book gate.',
    },
    '20:137': {
      source: EPISODE_20,
      note: 'Malakho and Xaro Xhoan Daxos pages: Xaro found in bed with Doreah, his vault opened and found empty, Malakho forcing him inside, both locked in (GOT210). Chapter 137 orders it, after Xaro’s book gate.',
    },
  },
  'xaro-xhoan-daxos': {
    '15:114': {
      source: EPISODE_15,
      note: 'Xaro Xhoan Daxos page: Sumai at the gates (GOT204), the reception, the vault opened only with the key at his neck, the offer to share his fortune in marriage, and the news of Robert’s death and the war (GOT205).',
    },
    '17:114': {
      source: EPISODE_17,
      note: 'Xaro Xhoan Daxos page: his feigned distress, the council of the Thirteen at his home, the warlock’s coup proclaiming him King of Qarth and the eleven killed (GOT207); the secret alliance is the episode synopsis. Pyat Pree stays unnamed on screen.',
    },
    '20:episode': {
      source: EPISODE_20,
      note: 'Xaro Xhoan Daxos and Malakho pages: found in bed with Doreah, his promise of ships, the vault opened with his key and found empty, Malakho forcing him in, both locked inside, and the house ransacked (GOT210).',
    },
    '16:114': {
      source: ACOK_40,
      note: 'Daenerys II (site 101) has him ride beside her into Qarth, offer anything she sees, give her a wing of his palace and warn her against warlocks; Daenerys III (site 114) has the Pureborn’s refusal, no warships, the renewed proposal and refusal, his warning against the warlocks and his agreeing with her bloodriders not to trust Quaithe. A Wiki of Ice and Fire, Chapter 27 and Chapter 40.',
    },
    '20:chapter': {
      source: ACOK_63,
      note: 'Daenerys V (site 137): the warlocks gathering their power, two consortiums wanting her expelled or killed, the refused proposal, ten ships for one dragon, and a third of all the ships in the world.',
    },
  },
  'pyat-pree': {
    '14:114': {
      source: ACOK_40,
      note: 'Daenerys II (site 101): beside her as she rides into Qarth, “Qarth itself is hers” and the invitation to drink wisdom and truth at the House of the Undying; Daenerys III (site 114): Jorah implores her to go to Pyat Pree. Xaro and Quaithe are named unlinked: their show gate is 15, after this story’s episode.',
    },
    '20:122': {
      source: ACOK_48,
      note: 'Daenerys IV (site 122): alone or not at all, the door to the right, stairs leading up, no room entered; outside the burning house his dagger, Jhogo’s whip and Rakharo striking him down.',
    },
  },
  'quaithe': {
    '15:86': {
      source: ACOK_12,
      note: 'Daenerys I (site 86): Jhogo returns last with three strangers from Qarth seeking the dragons, and the masked woman gives her name, the explicit signal that sets her book gate at 86 (owner, 2026-11-22; the Ice and Fire Wiki’s Quaithe page and Daenerys I synopsis have the masked woman among the three emissaries). The other two are left unnamed and unlinked: Xaro and Pyat Pree open in the books at 114. Episode 15 is her order marker.',
    },
    '15:114': {
      source: ACOK_40,
      note: 'Daenerys II (site 101): the shadowbinder’s warning to beware of everyone, for they all lust for the dragons’ power; Daenerys III (site 114): the firemage’s ladder of fire no trick, his power grown because of Daenerys, “You must leave this city soon”, truth to be found in Asshai, and Xaro’s counsel not to trust her. The 101 warning sits in this story because its other facts are not told before 114 and Xaro’s book gate is 114.',
    },
  },
  'drogon': {
    '40:86': {
      source: ACOK_12,
      note: 'Daenerys I (site 86): the dragons refuse raw meat until she sears it, then eat several times their weight a day; Aggo calls the black one Balerion reborn; she names the black-and-scarlet one Drogon after her husband, among those the gods have taken from her. Episode 40 is his show gate.',
    },
    '40:122': {
      source: ACOK_48,
      note: 'Daenerys IV (site 122): Drogon hisses at the ruin, enters with her, tears the Undying’s heart to pieces, and distracts Pyat Pree outside.',
    },
    '40:152': {
      source: ESSOS_152,
      note: 'Daenerys I (site 152), cached synopsis: the dragons over the sea, Rhaegal and Viserion often playing while Drogon prefers to hunt, Jorah and Arstan on the behavior of dragons and Balerion’s age, and the cabin demonstration of “dracarys”, High Valyrian for dragonfire. Rhaegal and Viserion are named but not linked: they open on screen at 41. Ordered at episode 40, his show gate.',
    },
    '40:171': {
      source: ESSOS_171,
      note: 'Daenerys III (site 171), cached synopsis and A Wiki of Ice and Fire’s Kraznys mo Nakloz page (cached): Drogon offered with the three ships, handed to Kraznys on the plaza, refusing to obey, “a dragon is no slave”, the jet of flame into Kraznys’s face, and the Unsullied not lifting a finger for their old masters. Ordered at episode 40.',
    },
    '40:186': {
      source: ESSOS_186,
      note: 'Daenerys IV (site 186) and the Game of Thrones Wiki’s Drogon and Razdal mo Eraz pages (In the books): Grazdan’s threat to sell her as a bedslave, Drogon burning his tokar at “dracarys”, the safe conduct, the arrows, and “Harder than to kill a slaver.” Ordered at episode 40.',
    },
  },
  'rhaegal': {
    '41:86': {
      source: ACOK_12,
      note: 'Daenerys I (site 86): seared meat for all three, the green-and-bronze one named Rhaegal after Rhaegar, and Irri and Jhiqui carrying two dragons in a cage while one rides on her shoulder each night. Episode 41 is his show gate.',
    },
    '41:152': {
      source: ESSOS_152,
      note: 'Daenerys I (site 152), cached synopsis: the dragons flying over the sea, Rhaegal and Viserion often playing while Drogon prefers to hunt, Jorah and Arstan on dragons and Balerion two hundred years old, and the cabin demonstration of “dracarys”. Ordered at episode 41, his show gate.',
    },
  },
  'viserion': {
    '41:86': {
      source: ACOK_12,
      note: 'Daenerys I (site 86): Viserys’s words that only men and dragons eat cooked meat, the dragons thriving, names after those the gods have taken, and the cream-and-gold one named Viserion after Viserys. Episode 41 is his show gate.',
    },
    '41:152': {
      source: ESSOS_152,
      note: 'Daenerys I (site 152), cached synopsis: the dragons flying over the ships, Rhaegal and Viserion often playing while Drogon prefers to hunt (corrected after review: not alone), and the cabin demonstration of “dracarys”, High Valyrian for dragonfire, with Jorah there. Ordered at episode 41, his show gate.',
    },
  },
  'strong-belwas': {
    '20:137': {
      source: ACOK_63,
      note: 'Daenerys V (site 137): the big scarred man following them, his squire knocking away the manticore, the huge scarred eunuch and pit fighter Strong Belwas, sent by Illyrio with three ships to bring her back to Pentos.',
    },
  },
  'arstan-whitebeard': {
    '20:137': {
      source: ACOK_63,
      note: 'Daenerys V (site 137): the old man with a staff following them, the manticore knocked out of her hands, Arstan Whitebeard, Belwas’s squire, from the Seven Kingdoms, sent by Illyrio. His past as a squire is left out: it hints at who he is.',
    },
    '21:152': {
      source: ESSOS_152,
      note: 'Daenerys I (site 152), cached synopsis: Arstan on the Dragonpit and Balerion dead at two hundred, Rhaegar bookish until he read something in a scroll, a great warrior who won no battles, Arstan leaving to attend Strong Belwas and Jorah’s caution. That he served in Aerys’s reign is left out: it hints at the books’ later reveal (as #1559 left out House Swann). Episode 21 adapts the chapter.',
    },
    '21:167': {
      source: ESSOS_167,
      note: 'Daenerys II (site 167), cached synopsis: Arstan horrified by the Unsullied’s conditions and training, against slaves when sellswords can be bought in the Free Cities, a slave army turning the realm against her, Daenerys too proud to return to Pentos as a beggar, and Arstan and Jorah comparing her to Rhaegar. Episode 21 adapts the chapter.',
    },
    '29:186': {
      source: ESSOS_186,
      note: 'Daenerys IV (site 186), cached synopsis: during the fight she asks Arstan about Rhaegar, the melancholy and sense of doom, born in grief with that shadow over him all his days, Summerhall, and word of the easy victory with the Stormcrows and the drunk Second Sons. Italian “Sala dell’Estate” assumed from the Mondadori edition, unverified. Episode 29, the night attack, orders it.',
    },
  },
  // Robb’s war, the riverlands and Harrenhal (#1486): A Clash of Kings chapters
  // on A Wiki of Ice and Fire, read from the shared Firecrawl cache, as
  // `${ACOK_AWOIAF}N` for site chapter 74 + N.
  'alton-lannister': {
    '11:81': {
      source: `${SHOW}Alton_Lannister`,
      note: 'Alton Lannister page: captured fighting the northern army (GOT201), sent with the terms, the honourable demands and his doubt, “Is he?” (GOT201). Cersei’s reply is left to his next story: it is episode 12’s.',
    },
    '17:113': {
      source: `${SHOW}Alton_Lannister`,
      note: 'Alton Lannister page: Cersei’s rejection (GOT202), housed with Jaime because the pens are full, the tourney and the better squire, “die”, the headbutt and the chains (GOT207). Chapter 113 orders it, as his status does.',
    },
  },
  'cleos-frey': {
    '11:81': {
      source: `${ACOK_AWOIAF}7`,
      note: 'Catelyn I (site 81): son of Lady Genna, Lord Tywin’s sister, captured in the Whispering Wood, scrambling from Grey Wind, the Greatjon’s “Your Grace”, counted a Lannister, sworn on his knighthood to return.',
    },
    '12:99': {
      source: `${ACOK_AWOIAF}25`,
      note: 'Tyrion VI (site 99): Pycelle refusing the terms, Tyrion’s own terms and Ned’s bones, the sisters for Jaime, the escort of a hundred Lannister guardsmen, Tyrion’s four men hidden in it.',
    },
    '17:119': {
      source: `${ACOK_AWOIAF}45`,
      note: 'Catelyn V (site 113) has his men hanged; Catelyn VI (site 119) has the wine sent, the drunken prisoner of little use, Sansa alone at court looking drawn, Catelyn wondering whether Arya is hidden or dead. Episode 17 orders it.',
    },
  },
  'talisa-maegyr': {
    '16:100': {
      source: `${SHOW}Talisa_Stark`,
      note: 'Talisa Stark page: the amputation with Robb’s help and the conscripted boys (GOT204), following the camp, introduced to Catelyn, the name Maegyr (GOT206); her neutrality is the record’s note; Robb guessing she is highborn and Catelyn’s reminder of the Frey agreement are on the Robb Stark page (GOT206).',
    },
    '18:129': {
      source: `${SHOW}Talisa_Stark`,
      note: 'Talisa Stark page: medical supplies and the trip to the Crag (GOT207), Robb’s father and the engagement, the news about Jaime, the slave who saved her brother, the night together (GOT208).',
    },
    '20:141': {
      source: `${SHOW}Talisa_Stark`,
      note: 'Talisa Stark page: Robb telling Catelyn of his love, the secret marriage before a septon, their lives pledged (GOT210).',
    },
  },
  'amory-lorch': {
    '16:episode': {
      source: `${SHOW}Amory_Lorch`,
      note: 'Amory Lorch page: leading the attack and killing Yoren (GOT203), the misdirected letter and Tywin’s rebuke, Arya caught with the stolen letter, the wolfsbane dart at Tywin’s door (GOT206). Chapter 88 orders it: his book gate.',
    },
    '16:chapter': {
      source: `${ACOK_AWOIAF}14`,
      note: 'Arya IV (site 88): the stout man with a manticore on his shield, bannerman to Lord Tywin, the true king Joffrey, Yoren’s refusals, the order to storm the walls and kill everyone. Episode 16, his show gate, orders it.',
    },
    '18:112': {
      source: `${ACOK_AWOIAF}38`,
      note: 'Arya VII (site 104): fewer men, many wounded, after chasing Beric around the Gods Eye, Jaqen, Rorge and Biter at the end of the column; Arya VIII (site 112): castellan of Harrenhal with the Brave Companions left to forage. Episode 18 orders it, as his castellan role step does.',
    },
    '16:121': {
      source: `${ACOK_AWOIAF}47`,
      note: 'Arya IX (site 121): the northern prisoners and Robett Glover locked beneath the Widow’s Tower, Jaqen and Rorge freeing them, the Brave Companions turning, Roose taking the castle, Amory paraded naked and fed to a bear. Episode 16 orders it, as his status does.',
    },
  },
  'polliver': {
    '14:episode': {
      source: `${SHOW}Polliver`,
      note: 'Polliver page: Needle taken in the attack and the wounded boy stabbed with it (GOT203), the old woman beaten, Gendry guarded, “the boy” told to kneel, Tywin calling him an idiot (GOT204). Lommy stays unnamed: his show gate is 31.',
    },
    '14:chapter': {
      source: `${ACOK_AWOIAF}26`,
      note: 'Arya VI (site 100): the black-bearded, balding Polliver wearing Needle at his hip, one of the Mountain’s men on the march with Chiswyck and the Tickler, Arya hating him for the sword.',
    },
  },
  'tickler': {
    '15:episode': {
      source: `${SHOW}Tickler`,
      note: 'Tickler page: the rat and the heated bucket, gold, jewels and the Brotherhood, prisoners chosen by Gregor, Gendry saved by Tywin (GOT204), the first name given to Jaqen and the broken neck (GOT205). Chapter 104 orders it, as his show status does.',
    },
    '15:chapter': {
      source: `${ACOK_AWOIAF}26`,
      note: 'Arya VI (site 100): the ordinary-looking man who questions, helped by Chiswyck, about food, valuables and Beric Dondarrion until the prisoner dies, quieter than most on the march, almost too scary to hate. Episode 15, his show gate, orders it.',
    },
  },
  'chiswyck': {
    '14:100': {
      source: `${ACOK_AWOIAF}26`,
      note: 'Arya VI (site 100): the old stoop-shouldered man who smashed Arya’s head, helping the Tickler, hated for thinking he is funny, “join the ghosts or become one” to Hot Pie.',
    },
    '15:104': {
      source: `${ACOK_AWOIAF}30`,
      note: 'Arya VII (site 104): the tale of Layna, the brewer’s girl, raped by Gregor for a silver and then by Chiswyck, overheard by Arya, his name whispered two days later, the fall from the wallwalk on the third day.',
    },
  },
  'weese': {
    '14:104': {
      source: `${ACOK_AWOIAF}30`,
      note: 'Arya VI (site 100) introduces the understeward and his “fear”; Arya VII (site 104) names him on her list, the errands, the beatings, the threat to feed her tongue to his dog, the beating over the mending. Episode 14, his gate, orders it.',
    },
    '16:112': {
      source: `${ACOK_AWOIAF}38`,
      note: 'Arya VIII (site 112): unsealed messages, the threat of Vargo Hoat, the slaps for slowness and staring at the capon, his name whispered, found dead with his dog on his chest the day the host leaves.',
    },
  },
  'vargo-hoat': {
    '15:104': {
      source: `${ACOK_AWOIAF}30`,
      note: 'Arya VII (site 104): the very tall, stick-thin leader of the Brave Companions, housed in the Widow’s Tower, the first-night brawl, the two hanged by Tywin, Weese’s warning, the company soon riding out.',
    },
    '18:121': {
      source: `${ACOK_AWOIAF}47`,
      note: 'Arya IX (site 121): a hundred northmen and Robett Glover, Roose said to have fled, Amory locking them up, the westermen attacked, the castle turned over to Roose who had bought him, Amory fed to the bear. Episode 18 orders it, as his affiliation step does.',
    },
    '18:138': {
      source: `${ACOK_AWOIAF}64`,
      note: 'Arya X (site 138): the staked heads of servants, Harrenhal to go to Vargo when Roose goes north, Arya to serve “the goat”, the lie to Gendry about the feet. Episode 18 orders it.',
    },
  },
  // Stannis, Renly and the stormlands (#1485).
  'stannis-baratheon': {
    '11:episode': {
      source: `${SHOW}Stannis_Baratheon`,
      note: 'Stannis Baratheon page: his conversion, the Seven burned, Cressen dismissed, the flaming sword from a statue and the prophesied hero; the letter on Joffrey’s incest, Davos urging peace with Renly or Robb, both called thieves, and Cressen dying of his own poison (GOT201). Melisandre page: the sword from the statue of the Mother. Chapter 84, Davos I, orders it.',
    },
    '12:84': {
      source: `${SHOW}Stannis_Baratheon`,
      note: 'Stannis Baratheon and Melisandre pages: Davos reporting Salladhor won over, Stannis doubting pirates and promising his share; Renly’s hundred thousand men, the path to victory in the flames, the marriage vow, the stillborn sons, the promised son, and Stannis taking her on the Painted Table (GOT202). His wife stays unnamed: the show names her at episode 25.',
    },
    '14:episode': {
      source: `${SHOW}Stannis_Baratheon`,
      note: 'Stannis Baratheon and Renly Baratheon pages: the parley on the coast, Renly’s companions, the mockery, the night to reconsider for their mother’s sake, the council seat and heirship until a son, the threat, and Davos ordered to smuggle Melisandre into the caves beneath Renly’s camp and never speak of it (GOT204). Chapter 116, Davos II, orders it.',
    },
    '15:116': {
      source: EPISODE_15,
      note: 'Episode synopsis and Stannis Baratheon page: Renly killed, most of his army swearing to Stannis, the Tyrells going home, Davos asking to keep Melisandre out of the battle because of the rumors, Stannis angry at the broken order but agreeing, Davos given the fleet, and Stannis fighting back tears alone in his tent (GOT205).',
    },
    '18:128': {
      source: `${SHOW}Davos_Seaworth`,
      note: 'Davos Seaworth and Stannis Baratheon pages: the fleet a day’s sail from the city, Stannis’s admiration for his loyalty and his bearing among the highborn, the siege of Storm’s End with rats and the onion ship, and the promise of the Handship, to Davos’s surprise (GOT208). Chapter 128 orders it.',
    },
    '19:135': {
      source: `${SHOW}Stannis_Baratheon`,
      note: 'Stannis Baratheon page: the wildfire destroying many ships with Davos’s, the order to land, Imry’s warning of hundreds and the answer “Thousands”, first ashore and on the walls without helm or shield, the ram at the River Gate, Tywin and Loras arriving, the rout, and his guards dragging him away shouting to stand and fight (GOT209). Chapter 135, Tyrion XIV, orders it.',
    },
    '20:139': {
      source: `${SHOW}Stannis_Baratheon`,
      note: 'Stannis Baratheon and Melisandre pages: the return to Dragonstone with a fraction of his forces, the accusation, the strangling stopped when she recalls the spell that killed Renly, his remorse, worse betrayals to come, the promise he will be king, and the vision in the flames (GOT210). Chapter 139 orders it.',
    },
    '11:74': {
      source: ST_74,
      note: 'Prologue (site 74): Davos back with the storm lords gone to Renly, Renly a thieving boy, the alliance with Robb refused, Shireen to be sent to Lysa Arryn, Selyse against begging, Renly’s army if he died and Melisandre seeing him dead in the flames, Cressen dismissed, his duties given to Pylos at the feast, and Cressen’s death. Selyse and Shireen stay unlinked: the show opens them at episode 25.',
    },
    '11:chapter': {
      source: ST_84,
      note: 'Davos I (site 84): the Seven burned, the near-molten sword from the statue of the Mother, Lightbringer and Azor Ahai come again; the letter on the incest of Joffrey, Tommen and Myrcella, Davos sent north with it, his advice to drop the Lord of Light, Stannis’s loss of faith the day the Windproud sank, Melisandre’s power and the red hawk. Episode 11 adapts the chapter.',
    },
    '14:105': {
      source: ST_105,
      note: 'Catelyn III (site 105): the siege, Melisandre as his standard bearer, condolences and justice to Catelyn but Robb a traitor, Renly’s demand to kneel, the peach and Storm’s End refused, the mockery of his wife, the drawn sword and Brienne between them, and the terms until dawn: Storm’s End, a council seat and heirship until a son. Episode 14 adapts the chapter.',
    },
    '14:chapter': {
      source: ST_116,
      note: 'Davos II (site 116): Renly’s lords come over, Stannis aged, his nightmares soothed by Melisandre in his pavilion, Cortnay refusing to yield Storm’s End and Edric Storm and challenging him, the refusal, his grief and love for Renly and the peach, the castle not to be left behind, Melisandre’s vision of Cortnay’s death, and Davos ordered to take her beneath the castle. Episode 14 adapts the chapter, Cortnay’s gate.',
    },
    '19:132': {
      source: ST_132,
      note: 'Davos III (site 132): the fleet under Imry Florent entering Blackwater Bay, Stannis waiting with his host on the south shore, Melisandre sent back to Dragonstone lest the sorceress be credited, the river fight, the Swordfish ramming a wildfire barge, the green blaze, the Black Betha burning and the chain raised behind them. Episode 19 adapts the chapter.',
    },
    '19:136': {
      source: ST_136,
      note: `Sansa VII (site 136): at dawn Dontos tells Sansa the battle is over and the city saved by Tywin and the Tyrells, the vanguard said to be led by Renly’s ghost. Tyrion XIII (${ST_133}) has half of Stannis’s fleet ablaze; Tyrion XIV (${ST_135}) has the sortie against his men at the King’s Gate and a great battle with Stannis’s men on the south shore. Episode 19 adapts them.`,
    },
  },
  'melisandre': {
    '11:episode': {
      source: `${SHOW}Melisandre`,
      note: 'Melisandre page: the Seven burned on the beach, darkness after the long summer and the dead rising in the north, Cressen interrupting and dismissed as old and fearful, Stannis drawing the flaming sword from the Mother, the Lord of Light behind him at the council, and the poisoned cup she drinks anyway while Cressen dies and her jewel glows (GOT201). Chapter 84 orders it.',
    },
    '12:84': {
      source: `${SHOW}Melisandre`,
      note: 'Melisandre page: the whisper to Matthos, “death by fire is the purest death”, told to Stannis; Renly’s hundred thousand men, the path to victory in the flames, giving all of himself, the wife who disgusts him and the stillborn sons, the promised son, and the Painted Table (GOT202). Matthos stays unlinked: his book gate is 132.',
    },
    '14:episode': {
      source: `${SHOW}Melisandre`,
      note: 'Melisandre page: the fiery heart of the Lord of Light, Renly told to kneel, the warning to look to his sins; Davos rowing her ashore, a champion of light and life, shadows as servants of the light, the barred passage, the robe opened, the pregnancy and the shadow passing between the bars (GOT204). Chapter 116 orders it.',
    },
    '20:139': {
      source: `${SHOW}Melisandre`,
      note: 'Melisandre and Stannis Baratheon pages: the defeat at the Blackwater, the confrontation on Dragonstone, the strangling stopped at the reminder of the spell that killed Renly, worse betrayals to come, fighting on because he will be king, and the vision in the flames (GOT209, GOT210). Chapter 139 orders it.',
    },
    '11:74': {
      source: ST_74,
      note: 'Prologue (site 74): Cressen falling with Patchface and lifted by Melisandre, “the night is dark and full of terrors”, the antlered helm placed on his head, her seat at Stannis’s right, the toast to her god, her offer to let him back out, her drinking most of the cup, the glowing ruby and Cressen’s death. Episode 11 adapts the chapter.',
    },
    '11:chapter': {
      source: ST_84,
      note: 'Davos I (site 84): the Seven burned outside the gates, the prayer in three tongues, the prophecy of Azor Ahai and Lightbringer, the near-molten sword drawn from the statue of the Mother, Stannis proclaimed Azor Ahai come again; later Stannis tells Davos half his men fear to speak her name and he means to see what more she can do. Episode 11 adapts the chapter.',
    },
    '14:105': {
      source: ST_105,
      note: 'Catelyn III (site 105): Melisandre as Stannis’s standard bearer, her answer that the sigil is the fiery heart of the Lord of Light, Renly’s remark that one banner would confuse a battle, the parley failing and the terms until dawn, Catelyn present as peacemaker. Episode 14 adapts the chapter.',
    },
    '14:chapter': {
      source: ST_116,
      note: 'Davos II (site 116): she shares Stannis’s pavilion and alone soothes his nightmares; Davos rows her beneath Storm’s End, asks if she is good or evil, “A champion of light and life”, calls her a liar for Cressen and Renly; Cressen poisoned himself, the walls warded against shadows from outside; she disrobes, pregnant, and births a shadow through a portcullis. Episode 14 adapts the chapter.',
    },
  },
  'davos-seaworth': {
    '11:84': {
      source: `${SHOW}Davos_Seaworth`,
      note: 'Davos Seaworth and Cressen pages: watching the burning beside Matthos, a devoted convert; Cressen asking his help and his answer that it is not the time; peace with Renly or Robb urged, the Lannisters the true enemy (Melisandre page), refused; the poison seen, the silent attempt to stop Cressen, and Cressen’s death (GOT201). Matthos stays unlinked: his book gate is 132.',
    },
    '12:episode': {
      source: `${SHOW}Salladhor_Saan`,
      note: 'Salladhor Saan and Matthos Seaworth pages: the beach meeting with Matthos, gold and glory, Stannis a proven commander and the most honorable man, Cersei wanted and not promised, thirty ships; Matthos urging him to read the holy books and Davos’s faith in Stannis; thirty years known and never trusted (GOT202). Chapter 84 orders it.',
    },
    '14:episode': {
      source: `${SHOW}Davos_Seaworth`,
      note: 'Davos Seaworth and Melisandre pages: the parley, the order to smuggle Melisandre into the caves beneath Renly’s camp without a reason, good and bad mixed, the rotten onion, the bars, the pregnancy and the shadow born while he cowers (GOT204). Chapter 116 orders it.',
    },
    '15:107': {
      source: `${SHOW}Davos_Seaworth`,
      note: 'Davos Seaworth page: Renly’s army going over, the plan for King’s Landing, Melisandre to be kept out because of the rumors, Stannis angry at the broken order but agreeing, Davos given the fleet and his worry about the bannermen’s respect for a man of his origins (GOT205).',
    },
    '18:128': {
      source: `${SHOW}Davos_Seaworth`,
      note: 'Davos Seaworth page: a day’s sail from the city, Stannis admiring his loyalty and honesty, the siege of Storm’s End, the rats, the onions, potatoes, fish and beef, and the Handship promised once the Iron Throne is taken, to Davos’s surprise (GOT208). Chapter 128 orders it.',
    },
    '19:episode': {
      source: `${SHOW}Davos_Seaworth`,
      note: 'Davos Seaworth and Matthos Seaworth pages: the night approach, the plan, the absent royal fleet, the lone ship leaking wildfire, the trap seen too late, Bronn’s flaming arrow at Tyrion’s signal, the vanguard and his ship destroyed, Matthos killed and Davos thrown overboard (GOT209). Chapter 132 orders it.',
    },
    '11:74': {
      source: ST_74,
      note: 'Prologue (site 74): Davos back in the night, the storm lords gone to Renly, Cressen on the stairs recalling the onions and salt fish carried to Stannis’s starving garrison, the knighthood and the shortened fingers; at the feast the fool’s business and Melisandre’s vision of victory, the only seat offered to Cressen, the poison in Davos’s cup and his attempt to stop him. Episode 11 adapts the chapter.',
    },
    '12:chapter': {
      source: ST_84,
      note: 'Davos I (site 84): the burning watched with his sons, Salladhor at an inn in the port, a partner from smuggling days whom Davos recruited, gold not words, the burnt sword not the true Lightbringer, his god King Stannis; the letter he cannot read, and the voyage north as far as White Harbor. Episode 12, Salladhor’s show gate, orders it.',
    },
    '14:chapter': {
      source: ST_116,
      note: 'Davos II (site 116): back with the fleet after carrying the king’s message, Cortnay’s refusal and Davos’s respect for Cortnay’s faith, the advice to strike King’s Landing at once, the order to take Melisandre beneath the castle as some fifteen years before, the liar, and the shadow whose maker he recognizes. Episode 14 adapts the chapter.',
    },
    '19:chapter': {
      source: ST_132,
      note: `Davos III (site 132): the Black Betha in the second line on the right, his doubts about Imry’s headlong attack, the chain seen but not raised, the fleets fighting in the river, the wildfire barge rammed, Davos overboard and the chain raised as the wrecks drift. Matthos killed on the Black Betha: ${ST_MATTHOS}, citing this chapter. Episode 19 adapts it.`,
    },
  },
  'cressen': {
    '11:episode': {
      source: `${SHOW}Cressen`,
      note: 'Cressen page: his fear of Melisandre’s influence, the interruption at the burning, named in the light of the Seven, dismissed, Davos refusing to act; at the council the poison, the apology and toast, drinking first, the bleeding nose, Melisandre drinking anyway and his death (GOT201). Melisandre page: he hangs his head and walks away.',
    },
    '11:chapter': {
      source: ST_74,
      note: 'Prologue (site 74): the red comet from his balcony, the white raven shown to Shireen, Davos back without allies, alliances with Renly or Robb urged, Selyse on Melisandre’s vision of Renly dead, Cressen dismissed, his resolve to poison her, his duties given to Pylos, the crystal in Davos’s cup, the toast and his death. Episode 11 adapts the chapter.',
    },
  },
  'matthos-seaworth': {
    '11:132': {
      source: `${SHOW}Matthos_Seaworth`,
      note: 'Matthos Seaworth page: the burning and the chanted praises, the letter he has prepared read at the Painted Table, Stannis objecting to “beloved brother”, Jaime to be called Kingslayer with his knighthood, and copies sent to every corner of the realm (GOT201). Chapter 132, his book gate, orders it.',
    },
    '12:132': {
      source: `${SHOW}Matthos_Seaworth`,
      note: 'Matthos Seaworth page: the beach meeting with Salladhor, Cersei wanted and Matthos’s retort that they do not fight so he can rape the queen, Stannis’s divine right, his urging his father to read the holy books, and Melisandre’s whisper as he leaves the Painted Table (GOT202). Chapter 132, his book gate, orders it.',
    },
    '19:episode': {
      source: `${SHOW}Matthos_Seaworth`,
      note: 'Matthos Seaworth page: ships ten to one and soldiers five to one, faith in the Lord of Light, their cause and his captain despite his father’s warnings, the absent royal fleet, Bronn igniting the wildfire at Tyrion’s signal, and the blast killing him on deck (GOT209).',
    },
    '19:chapter': {
      source: ST_MATTHOS,
      note: 'A Wiki of Ice and Fire’s Matthos Seaworth page, citing Davos III (site 132): Imry’s place for the Seaworth ships in the second line on the starboard wing, Allard’s honor and Davos’s peril, the sons’ pity for his nervousness, Matthos second on the Black Betha, and the wildfire explosion on the Blackwater Rush that destroys her and kills him. Episode 19 adapts the chapter.',
    },
  },
  'salladhor-saan': {
    '12:episode': {
      source: `${SHOW}Salladhor_Saan`,
      note: 'Salladhor Saan page: the beach near Dragonstone, gold promised, the smallest army of the claimants, the irony of a smuggler vouching for honor, an excellent pirate, Cersei wanted, thirty ships, and Davos the most honest smuggler he has met (GOT202). Chapter 84 orders it.',
    },
    '12:chapter': {
      source: ST_84,
      note: 'Davos I (site 84): the burning skipped as common in Lys, Tyrion in charge and Janos Slynt driven out, too few gold cloaks, gold not words and a swift strike, Renly gone from Highgarden with his army and new queen, the burnt sword not the true Lightbringer, and thirty thousand dragons more due. Episode 12, his show gate, orders it.',
    },
  },
  'selyse-baratheon': {
    '25:74': {
      source: ST_74,
      note: 'Prologue (site 74): Selyse arguing he should not beg, converted to R’hllor by Melisandre, the comet as the Lord of Light’s sign, Renly’s army if he died, Melisandre seeing him dead in the flames; at the feast she commands Cressen to put the crown back on and suggests he sing. Episode 25, her show gate, orders it.',
    },
    '25:84': {
      source: ST_84,
      note: 'Davos I (site 84): the sept wrecked by the queen’s men, the statues burning before the gates, Selyse echoing the prayer, the queen and her men chanting praises, Stannis impatiently escorting her inside, and Davos refusing to court her favor through the new god. Episode 25, her show gate, orders it.',
    },
  },
  'shireen-baratheon': {
    '25:74': {
      source: ST_74,
      note: 'Prologue (site 74): almost ten, scarred by greyscale, a princess now her father is king, the white raven from the Citadel with Patchface, dreams of dragons, the red woman’s dragon’s breath, the talking raven, the shadow song that frightens her, and Cressen’s proposal to send her to the Eyrie. Episode 25, her show gate, orders it.',
    },
  },
  'brienne-of-tarth': {
    '13:episode': {
      source: `${SHOW}Renly_Baratheon`,
      note: 'Renly Baratheon and Brienne of Tarth pages: Loras disarming the opponent who steps under his swing and holds a knife to his face, the woman revealed, the Kingsguard asked and granted, Catelyn’s “My Lord” corrected to Your Grace and kneeling, and Brienne asking to be called just Brienne (GOT203).',
    },
    '14:episode': {
      source: `${SHOW}Brienne_of_Tarth`,
      note: 'Brienne of Tarth and Renly Baratheon pages: Littlefinger as Joffrey’s envoy, her loyalty without charge, the offer to open the gates, and Brienne guarding Renly at the failed parley where Stannis threatens him (GOT204). Chapter 105 orders it.',
    },
    '15:episode': {
      source: `${SHOW}Brienne_of_Tarth`,
      note: 'Brienne of Tarth and Renly Baratheon pages: helping him out of his cloak, the shadow running him through, Stannis’s likeness, catching him in his blood, two of his Kingsguard blaming her and killed, Catelyn persuading her to flee, and the oath to Catelyn (GOT205). Robar Royce is the books’ record, so the show story names neither knight. Chapter 113 orders it.',
    },
    '16:113': {
      source: EPISODE_16,
      note: 'Episode synopsis: Catelyn back from the stormlands with Brienne, Robb introducing Talisa, Roose bringing word of Theon’s betrayal, Robb wanting to march north and agreeing to Roose’s plan; the Brienne page has the boys as Theon’s captives (GOT206). Chapter 113 orders it.',
    },
    '17:episode': {
      source: `${SHOW}Brienne_of_Tarth`,
      note: 'Brienne of Tarth page: Jaime’s escape and Torrhen Karstark killed, the recapture, Rickard demanding his head, Brienne guarding Catelyn as she persuades him to wait, the Karstarks growing violent, and her warning that Jaime will not live until Robb returns (GOT207). Chapter 129 orders it.',
    },
    '18:129': {
      source: `${SHOW}Brienne_of_Tarth`,
      note: 'Brienne of Tarth page: Catelyn freeing Jaime to trade for her daughters, Brienne ordered to smuggle him to King’s Landing, horse and rowboat, and Jaime’s taunts about her looks and her history with men (GOT208). Chapter 129 orders it.',
    },
    '20:139': {
      source: `${SHOW}Brienne_of_Tarth`,
      note: 'Brienne of Tarth page: the three hanged tavern girls, the returning Stark men, the prisoner and the stolen pig, the laughter, Jaime recognized, two killed quickly and the third slowly, her loyalty to Catelyn and not the Starks, and the burial (GOT210). Riverrun stays unnamed: the show opens it at episode 23. Chapter 139 orders it.',
    },
    '13:chapter': {
      source: ST_96,
      note: 'Catelyn II (site 96): the knight of Tarth in blue, disarmed by Loras, charging into him and forcing his yield with a dirk, Brienne the Beauty, Lord Selwyn’s daughter, last of 116, the Rainbow Guard, the cloak and her pledge, and her telling Catelyn to kneel and say Your Grace. Episode 13 adapts the chapter.',
    },
    '14:chapter': {
      source: ST_105,
      note: 'Catelyn III (site 105): Brienne bearing Renly’s banner, stepping between the brothers, Loras given the van and asking for one of Renly’s knights, Brienne chosen, her wish to fight beside the king, the request to arm him and the snigger. Episode 14 adapts the chapter.',
    },
    '15:107': {
      source: ST_107,
      note: 'Catelyn IV (site 107): Brienne arming Renly, the shadow cutting his throat as she belts on his sword, Robar and Emmon assuming her guilt, the fight, Catelyn’s brazier, the slashed tent, the flight, and her oath to kill Stannis with Renly’s sword though she saw nothing. Episode 15 adapts the chapter.',
    },
    '15:chapter': {
      source: ST_113,
      note: 'Catelyn V (site 113): Catelyn taking Brienne as her sworn sword to keep her from folly, Martyn Rivers’s outrider on Robb’s victories and Tywin’s march, the Lannister men hanged for trying to free Jaime, and Jaime chained in the deep dungeons by Edmure. Episode 15 adapts the chapter.',
    },
    '17:chapter': {
      source: ST_129,
      note: 'Catelyn VII (site 129): Riverrun celebrating, Catelyn alone with Brienne, the message of her sons’ deaths at Theon’s hands, the wine sent to Jaime, Brienne left outside the cell at midnight, and Catelyn calling for her sword when Jaime mocks Eddard. Episode 17 adapts the chapter.',
    },
  },
  'margaery-tyrell': {
    '13:episode': {
      source: `${SHOW}Margaery_Tyrell`,
      note: 'Margaery Tyrell page: married to Renly, Loras’s lover, knowing it; disappointed at Loras’s defeat by Brienne, the warm greeting to Catelyn, the failed night with Renly, the offer to bring Loras in, and an heir to thwart their enemies (GOT203). Renly page: the condolences for Eddard.',
    },
    '14:105': {
      source: `${SHOW}Loras_Tyrell`,
      note: 'Loras Tyrell and Margaery Tyrell pages: Loras leaving her at Renly’s tent, Petyr waiting, his knowledge of Renly and Loras, the provocation about her husband, and her loyalty to Renly (GOT204). Chapter 105 orders it.',
    },
    '15:episode': {
      source: EPISODE_15,
      note: 'Episode page and Loras Tyrell page: Loras’s vigil, the need to go home, Petyr’s warning that Stannis is an hour away, the sword pushed aside, no vengeance from the grave, the horses; her lines that if Renly was no king she was no queen, and “I want to be the Queen”; Petyr going with the Tyrells to Highgarden (GOT205).',
    },
    '20:episode': {
      source: `${SHOW}Margaery_Tyrell`,
      note: 'Margaery Tyrell page: the Tyrells sided with the Lannisters and the Blackwater won, Loras asking the king to wed her, her love from afar for Joffrey’s courage, his balking at setting aside Sansa, and his courtiers persuading him (GOT209, GOT210).',
    },
    '13:chapter': {
      source: ST_96,
      note: 'Catelyn II (site 96): a girl of Robb’s age with curly brown hair and a shy smile, the marriage as the mortar of the southron alliance, the Tyrell colors, laughing beside Renly, the condolences to Catelyn, and the feast where Renly feeds and kisses her but shares most with Loras. Episode 13 adapts the chapter.',
    },
    '15:chapter': {
      source: ST_105,
      note: `Catelyn III (site 105): Stannis calling the wedding a farce and Margaery meant for one of Robert’s whores, Renly meaning to make her queen and a son within a year. Catelyn IV (${ST_107}): the shadow cutting Renly’s throat before dawn as he arms, the flight, and Catelyn’s thought that all his power passes to Stannis. Episode 15 adapts the second chapter.`,
    },
    '20:chapter': {
      source: ST_139,
      note: 'Sansa VIII (site 139): Mace and his sons Garlan and Loras presented among the heroes, Garlan asking Joffrey to wed Margaery, the betrothal to Sansa declared void by the High Septon, and Sansa delighted. Episode 20, Garlan’s show gate, orders it.',
    },
  },
  'mace-tyrell': {
    '32:139': {
      source: ST_139,
      note: `Sansa VIII (site 139): Mace and his sons Garlan and Loras presented among the heroes of the Blackwater, Loras named to the Kingsguard, Mace given a small council seat, Garlan asking for Margaery, the High Septon voiding the betrothal. Mace commanding the left: Sansa VII (${ST_136}). Episode 32, his show gate, orders it.`,
    },
  },
  'cortnay-penrose': {
    '14:116': {
      source: ST_116,
      note: 'Davos II (site 116): Cortnay riding out to parley, scorning Stannis and his new allies once sworn to Renly, mocking Alester Florent for changing sides and gods, naming Loras among those who did not join, refusing Storm’s End and Edric Storm, the gauntlet and the challenge, and the castle’s name. Episode 14, his record’s gate, orders it.',
    },
    '16:118': {
      source: ST_118,
      note: 'Tyrion X (site 118): Varys bringing word that Storm’s End has fallen, his attempt to tell how Cortnay died and his hint of magic, Tyrion’s disbelief, Varys’s hatred of magic since a sorcerer gelded him, and then Tyrion suspecting an assassin from the Free Cities. Episode 16, his status pin, orders it.',
    },
  },
  'daisy': {
    '11:77': {
      source: `${SHOW}Daisy`,
      note: 'Daisy page: the new prostitute learning about the brothel from Ros, impressed by the decor, and present when Janos kills Barra before Mhaegen (GOT201); the Ros page has Haystack Hall and the gold cloaks bursting in (GOT201). Chapter 77 orders it, her record’s pair.',
    },
    '13:99': {
      source: `${SHOW}Daisy`,
      note: 'Daisy page: in bed with Pycelle when Tyrion arrests him, paid for her trouble (GOT203); the Pycelle page has Bronn and Timett, the spying for Cersei, and the second coin for the struggle (GOT203). Chapter 99 orders it.',
    },
    '14:103': {
      source: `${SHOW}Daisy`,
      note: 'Daisy page: Ros and Daisy hired as a late name-day present, the belt, the stag’s head sceptre, the scream, the crossbow and the order to show Tyrion (GOT204). Chapter 103 orders it.',
    },
  },
  'jacelyn-bywater': {
    '12:82': {
      source: KL_82,
      note: 'Tyrion II (site 82): Jacelyn as Tyrion’s choice, “rigid” and too proud of his honour in Janos’s words, the meeting at the door, the list of successors to accompany Janos to Eastwatch, and the man Varys claims him to be. Episode 12, his record’s show pair, orders it.',
    },
    '15:94': {
      source: KL_94,
      note: 'Tyrion V (site 94): Jacelyn’s urgent summons, Cleos Frey at the Gate of the Gods with Robb’s terms, Cleos kept outside the walls with every hospitality, the spitfire crews trained with paint and burning oil, and his dislike of “alchemist’s piss”.',
    },
    '18:123': {
      source: KL_123,
      note: 'Tyrion X (site 118): Jacelyn ordered to take Rosby’s party and keep Tommen safe; Tyrion XI (site 123): Boros surrendering Tommen and stripped of his cloak, Jacelyn back with the Rosby spearmen, Tommen and his fawn, and the plans he keeps from Tyrion. Boros opens on screen only at episode 19, so he stays unlinked.',
    },
    '14:103': {
      source: KL_103,
      note: 'Tyrion VII (site 103): Lancel reporting that Jacelyn defied a command in the king’s name, Tyrion reading it as Cersei’s order to free Pycelle rebuffed, the demand that Jacelyn be removed and charged with treason, and Lancel told to assure the queen he can win Jacelyn away from Tyrion.',
    },
    '19:133': {
      source: KL_133,
      note: 'Tyrion X (site 118): the lordship promised for securing Tommen; Tyrion XIII (site 133): Lord Jacelyn’s warning that the city’s forces may break, and Tyrion’s order for another sortie against the soldiers among the charred wharves.',
    },
  },
  'hallyne': {
    '15:94': {
      source: KL_94,
      note: 'Tyrion V (site 94): the vaults under Rhaenys’s Hill, the substance that cannot be quenched, Aerys’s volatile old stock, Munciter’s count of 7,840 jars and the promised ten thousand, the feast put off and the demonstration at the Red Keep allowed.',
    },
    '18:123': {
      source: KL_123,
      note: 'Tyrion XI (site 123): Hallyne’s visit, the thirteen thousand jars ahead of schedule, the more potent spells, the question about dragons, and the saying that magic began to fail when the last dragon died.',
    },
    '20:139': {
      source: KL_139,
      note: 'Sansa VIII (site 139): the surviving captains honoured, “Hallyne the Pyromancer” named lord with no lands, and Tyrion absent for his wounds; the wildfire on the Blackwater is Tyrion XIII (site 133).',
    },
  },
  'lollys-stokeworth': {
    '13:118': {
      source: KL_118,
      note: 'Tyrion IV (site 91): Lady Tanda’s suppers and the soft, dimwitted Lollys she wants Tyrion to marry; Tyrion IX (site 115): Lollys found alive outside a tanner’s shop, raped by fifty men; Tyrion X (site 118): Varys proposing Shae as her maidservant, with the secret passage. Episode 13, her record’s show pair, orders it.',
    },
    '19:131': {
      source: KL_131,
      note: 'Sansa V (site 131): Sansa helping Tanda and Shae guide Lollys inside, the Queen’s Ballroom with almost every highborn woman in the city, and Ser Ilyn there for treasonous guards and their defence. Shae’s role step as Lollys’s maid is at this chapter.',
    },
  },
  'osmund-kettleblack': {
    '18:123': {
      source: KL_123,
      note: 'Tyrion IX (site 115): Lancel’s report that Cersei consorts with the hedge knight Osmund Kettleblack and his brothers to raise sellswords, and Bronn matching every copper; Tyrion XI (site 123): Osmund chosen over Tyrion’s disapproval in Boros’s place, Balon Swann for Preston Greenfield, and the white cloaks given in the royal sept. Boros stays unlinked: his show gate is episode 19.',
    },
    '19:133': {
      source: KL_133,
      note: 'Tyrion XIII (site 133): the Antler Men to be catapulted, Tyrion’s order to Osmund to keep Joffrey safe under any circumstance but among the defenders, and his wonder whether Cersei will keep her promise about Alayaya.',
    },
    '20:139': {
      source: KL_139,
      note: 'Sansa VIII (site 139): over six hundred new knights made by Balon Swann, Meryn Trant and Osmund Kettleblack, Loras named to the Kingsguard, and the betrothal to Sansa voided in favour of Margaery.',
    },
  },
  'alayaya': {
    '18:128': {
      source: KL_128,
      note: 'Tyrion III and VII (sites 89 and 103): Chataya’s daughter, the turret room, the wardrobe and the shaft, her sleeping while he is gone; Tyrion XII (site 128): Osney and Osfryd bringing her in beaten, Cersei taking her for his whore, Alayaya keeping his secret, and the promise tied to Joffrey and Tommen. Her record opens at 128, so the story is told from there.',
    },
  },
  'garlan-tyrell': {
    '20:139': {
      source: KL_139,
      note: 'Sansa VIII (site 139): Mace Tyrell and his sons Garlan and Loras among the heroes of the Blackwater, Loras to the Kingsguard, Mace to the small council, Garlan’s request that Joffrey wed Margaery, and the High Septon declaring the betrothal void for House Stark’s rebellion. Mace opens on screen only at episode 32, so he stays unlinked.',
    },
  },
  // Winterfell and the Iron Islands (#1487).
  'balon-greyjoy': {
    '12:85': {
      source: WF_THEON_I,
      note: 'Theon I (site 85): the banners called, Aeron bringing Theon to the castle, the gold chain bought with gold, Robb’s offer of a crown for Lannisport and Casterly Rock, the letter burned, the backhand, what is given can be taken away, and the iron price. Aeron is named unlinked: his show gate is 55.',
    },
    '12:98': {
      source: `${SHOW}Balon_Greyjoy`,
      note: 'Balon Greyjoy page (GOT202): the nine years, what the Starks gave back, Robb’s proposal shown, then the interruption about his clothes and the clasp torn off for not paying the iron price, Yara greeted warmly and set above Theon, the letter burned and no one giving him a crown. Chapter 98 orders it, at Asha’s book gate.',
    },
    '13:episode': {
      source: `${SHOW}Balon_Greyjoy`,
      note: 'Balon Greyjoy page (GOT203): the plan to attack the poorly defended North, thirty longships for Yara to take Deepwood Motte, one ship for Theon to raid the Stony Shore, Theon’s plea for the Stark alliance, the reminder that Balon gave him away, the blow, and Balon and Yara watching the baptism.',
    },
    '13:chapter': {
      source: WF_THEON_II,
      note: 'Theon II (site 98): the feast of four hundred lords and captains, the solar with Victarion and Aeron, Theon’s suggestions refused, eight ships to harry the coast with Aeron, thirty ships and picked men for Asha against Deepwood Motte, Victarion’s thrust at Moat Cailin, and Winterfell holding a year while the rest falls. The Stony Shore is left unnamed (its book gate is 111) and Aeron unlinked (his show gate is 55).',
    },
  },
  'asha-greyjoy': {
    '12:98': {
      source: `${SHOW}Yara_Greyjoy`,
      note: 'Yara Greyjoy page (GOT202): posing as a commoner, the ride up to Pyke, Theon’s relentless seduction, Balon comparing him unfavourably to her and naming her to lead the assault; the Balon Greyjoy page (GOT202) has her walking in, the warm greeting and the homecoming she will tell her grandchildren about.',
    },
    '13:episode': {
      source: `${SHOW}Balon_Greyjoy`,
      note: 'Balon Greyjoy page (GOT203): thirty long ships for Yara to take Deepwood Motte, one ship for Theon, Yara twisting the knife with its name, her accusation about his other family, and the baptism she watches with Balon.',
    },
    '13:chapter': {
      source: WF_THEON_II,
      note: 'Theon II (site 98): Esgred, daughter of Ambrode and wife of Sigrin the shipwright, the flirting and the ride double to Pyke, the stableboy naming her, her wish to see who he was first, the seat at Balon’s right, the axe caught from a dancer splitting his trencher as her husband, and thirty ships for Deepwood Motte.',
    },
    '15:111': {
      source: `${SHOW}Yara_Greyjoy`,
      note: 'Yara Greyjoy page (GOT205): the ships assembled, the ride to Lordsport to reach her fleet, Theon struggling with his unruly crew, the mockery, her men waiting a year for her and Theon’s crew not loyal to him. Chapter 111 orders it.',
    },
    '18:episode': {
      source: EPISODE_18,
      note: 'The Winterfell synopsis: twenty men instead of reinforcements, too far from the sea, the North rising, the plea to come home and the refusal; the Yara Greyjoy page has Deepwood Motte taken and the five hundred men asked for (GOT206), and the reported killing of Bran and Rickon (GOT208); the Theon Greyjoy page has her memory of him as a child and not dying far from home (GOT208).',
    },
    '18:chapter': {
      source: WF_THEON_V,
      note: 'Theon V (site 130): Asha in the high seat with twenty men, the scolding for the heads on the gates, Dagmer’s defeat already known and the survivors led back to the Stony Shore, the castle to be razed and the princes taken to Pyke, the return to Deepwood Motte refused, and the castle held for the rest of his life.',
    },
  },
  'aeron-greyjoy': {
    '55:85': {
      source: WF_THEON_I,
      note: 'Theon I (site 85): no honour guard, the grim priest who is his uncle Aeron, gone down in a storm and turned holy, the kneeling in the mud and the seawater, the secrecy Balon commanded, the fool who thinks Balon will hand the isles to a Stark, and his leaving at once at sunset. Episode 55 is his show gate.',
    },
    '55:98': {
      source: WF_THEON_II,
      note: 'Theon II (site 98): the ship to be blessed by his uncle Aeron the next day, the solar with Balon and Victarion, eight ships for Theon with Aeron and Dagmer, which Theon reads as distrust, Asha to Deepwood Motte and Victarion to Moat Cailin. Dagmer is left out: his book gate is 111.',
    },
    '55:111': {
      source: WF_THEON_III,
      note: 'Theon III (site 111): the Wild Hares beaten and Benfred taken, Aeron insisting on the drowning, Theon giving in but declining to be in charge of it, Benfred’s body dragged from the water, and six ships for Aeron while Dagmer marches on Torrhen’s Square.',
    },
  },
  'victarion-greyjoy': {
    '13:98': {
      source: WF_THEON_II,
      note: 'Theon II (site 98): Victarion lending Theon his steersman Rymolf Stormdrunk, Theon calling him tireless and dutiful, the solar with Balon and Aeron, the main thrust up the Saltspear and the Fever River to Moat Cailin so that Robb cannot return north, and Asha to Deepwood Motte. Aeron is named unlinked: his show gate is 55.',
    },
  },
  'dagmer': {
    '15:episode': {
      source: `${SHOW}Dagmer`,
      note: 'Dagmer page (GOT205): first mate of the ship, the crew’s respect to be earned, ironborn and orders, the fishing villages of the Stony Shore, Torrhen’s Square as the seat of House Tallhart and a worthy prize, and Winterfell sending men to take it back.',
    },
    '15:chapter': {
      source: WF_THEON_III,
      note: 'Theon III (site 111): Dagmer left to guard the ships, the talk in his cabin aboard Foamdrinker, always Balon’s best man, Balon relying on Asha who never failed him, the march on Torrhen’s Square with siege engines in the open, Ser Rodrik riding to Leobald’s aid, and Torrhen’s Square not the prize.',
    },
    '16:120': {
      source: `${SHOW}Dagmer`,
      note: 'Dagmer page (GOT206): the feint and the castle seized, Rodrik captured on his return and spitting in Theon’s face, Theon suggesting prison, Dagmer insisting on execution to keep the crew’s respect, and four blows and a kick; the iron price is the Rodrik Cassel page (GOT206).',
    },
    '17:124': {
      source: `${SHOW}Dagmer`,
      note: 'Dagmer page (GOT207): Osha’s escape, Theon beating Lorren as Dagmer looks on with approval, the hunt with hounds to the shepherd’s farm, the cracked walnut shells Rickon favours, the lost scent, and the two charred corpses claimed as Bran and Rickon. The ironman stays unnamed: Black Lorren is the books’ record.',
    },
    '18:episode': {
      source: `${SHOW}Theon_Greyjoy`,
      note: 'Theon Greyjoy page (GOT208): Dagmer murdering the two farm boys, Yara’s twenty men and her plea, Theon’s guilt and the payment for the farmer’s grief, and Dagmer having also murdered the farmer and his wife; the Dagmer page (GOT208) has the same.',
    },
    '18:chapter': {
      source: WF_THEON_V,
      note: 'Theon V (site 130): Dagmer lost the fight at Torrhen’s Square, Asha unsurprised and already aware he is leading the survivors back to the Stony Shore, Theon seeing she is better informed, Leobald Tallhart joined with Ser Rodrik, Manderly’s barges and the Umbers gathering. Bran VI (site 120) has Rodrik leaving to deal with Dagmer’s threat.',
    },
    '20:140': {
      source: EPISODE_20,
      note: 'The Winterfell synopsis: the siege under Roose Bolton’s bastard son, twenty men, Theon rallying them, Dagmer knocking him out to deliver him to the Bolton army, Luwin stabbed with a spear and the bag over Theon’s head; the Dagmer page has his admiring the rhetoric (GOT210). Ramsay is left unnamed: his show gate is 32.',
    },
  },
  'black-lorren': {
    '17:124': {
      source: WF_THEON_IV,
      note: 'Theon IV (site 124): Urzen and Black Lorren showing Theon Squint and Drennan dead at the Hunter’s Gate, the direwolves’ work on Squint, Drennan killed by the woman with help from someone who freed the wolves. Theon III (site 111) has Dagmer name Black Lorren among the best fighters.',
    },
    '20:140': {
      source: WF_THEON_VI,
      note: 'Theon VI (site 140): the choice to leave or die, Wex stepping over first and Black Lorren among those who follow, his counsel to put the castle folk to the sword, his fetching Beth Cassel despite his disapproval, and her shown on the walls with a noose at Theon’s signal.',
    },
    '20:143': {
      source: WF_BRAN_VII,
      note: 'Bran VII (site 143): Theon’s ironmen found dead in the ruins alongside men with the Dreadfort’s badge, and Black Lorren listed among the characters appearing; Theon VI (site 140) has him stay and the Dreadfort men turn on the ironborn. That his body is among the dead follows the status pin at 20/143.',
    },
  },
  'wex-pyke': {
    '13:98': {
      source: WF_THEON_II,
      note: 'Theon II (site 98): Wex Pyke at Otter Gimpknee’s inn, ordered to saddle Smiler, the ride to Pyke with Esgred, the stableboy naming Asha, and Theon taking his anger out on the smirking Wex. The horse bargain is the record’s log.',
    },
    '17:124': {
      source: WF_THEON_IV,
      note: 'Theon IV (site 124): Wex woken by the bed and sent to check the Starks, the news that they are gone, the hunt, and Wex alerting them at the muddy brook that only pawprints show, so the wolves entered the water alone. Episode 17 adapts the hunt.',
    },
    '20:140': {
      source: WF_THEON_VI,
      note: 'Theon VI (site 140): the ironborn assembled, the choice of leaving or dying beside him, no reply until Wex steps over, Black Lorren and the others following, the rest leaving with Urzen and Stygg, and the Dreadfort men’s sack and fire.',
    },
  },
  'farlen': {
    '16:124': {
      source: WF_THEON_IV,
      note: 'Theon IV (site 124): the hunt with twelve dogs, the young elk eaten by the wolves, Theon asking Farlen whether the dogs track the wrong wolves and his denial, the brook, and Farlen’s party downstream with the same bad news. Bran I (site 78) has Farlen’s answer that the wolves howl for freedom. Episode 16 is his show gate.',
    },
    '18:130': {
      source: WF_THEON_V,
      note: 'Theon V (site 130): Gelmarr, Aggar and Gynir Rednose killed by Reek with Theon’s permission to keep the mill secret, Farlen executed to have someone to blame, beheaded by Theon himself as Eddard would have done, four difficult blows, and Farlen among the dead at the dream feast.',
    },
  },
  'meera-reed': {
    '22:95': {
      source: WF_BRAN_III,
      note: 'Bran III (site 95): Meera and Jojen Reed of Greywater Watch announced at the feast, the children of Howland Reed, Eddard’s companion in the rebellion, her net, bronze knife and frog spear, the oath by earth and water, bronze and iron, ice and fire, the gifts of fish, frog and fowl, and Bran’s blush. Episode 22 is her show gate.',
    },
    '22:102': {
      source: WF_BRAN_IV,
      note: 'Bran IV (site 102): Summer entangled in her net, her father teaching her, Jojen’s greensight, Meera stepping between Summer and her brother and naming Bran’s fear, Shaggydog’s lunge, Jojen up the tree with Meera after him, and Jojen’s dream of the Walders’ grey meat brought at dusk.',
    },
    '22:109': {
      source: WF_BRAN_V,
      note: 'Bran V (site 109): the drowning dream and the warnings nobody believes, Meera agreeing prophecies can be changed and angry when Jojen disagrees, both Alebelly and Bran to fight their fates, the dream of Bran and Rickon dead at Reek’s feet, her offer to kill Reek in the dungeons, and Jojen saying she would not succeed.',
    },
    '22:143': {
      source: WF_BRAN_VII,
      note: 'Bran VII (site 143): the wolves sent on to make a trail while the others doubled back to the crypts, Meera taking Rickard Stark’s sword, Hodor shifting the stone, Winterfell in ashes, Luwin’s last advice, and Bran going north with Jojen, Meera, Hodor and Summer.',
    },
  },
  'jojen-reed': {
    '22:95': {
      source: WF_BRAN_III,
      note: 'Bran III (site 95): Jojen unarmed and dressed all in green, the oath with Meera, his asking at once where the direwolves are, and in the wolf dream Summer stronger than he knows, not the day he dies, the touch and Bran falling. Episode 22 is his show gate.',
    },
    '22:102': {
      source: WF_BRAN_IV,
      note: 'Bran IV (site 102): the winged wolf bound by chains, the three-eyed crow pecking at them, greywater fever, the crow north beyond the Wall, their father sending them, the third eye, Bran felt in Summer at the touch, and the growl at the question whether he falls every night.',
    },
    '22:109': {
      source: WF_BRAN_V,
      note: 'Bran V (site 109): the sea lapping round Winterfell and drowned men in the yard, recognised as Alebelly, Septon Chayle and Mikken, warnings that will not save them, being called a warg, the dream of Bran and Rickon dead at Reek’s feet, and green dreams that do not lie.',
    },
    '22:120': {
      source: WF_BRAN_VI,
      note: 'Bran VI (site 120): Rodrik gone to Torrhen’s Square, the ironmen swimming the moat, the people gathered, all those Jojen saw in his dream dying, Mikken drowning on his own blood as he refuses to kneel, and all of the crannogman’s words come true. Added after review. Episode 22 is his show gate.',
    },
    '22:143': {
      source: WF_BRAN_VII,
      note: 'Bran VII (site 143): Jojen waking Bran from three days as Summer, the wolf eating while Bran does not, the hiding in the crypts, Bran’s vision of the burning, the ashes, and Bran going north with Jojen, Meera, Hodor and Summer.',
    },
  },
  'ramsay-snow': {
    '32:140': {
      source: WF_THEON_VI,
      note: 'Theon VI (site 140): the Dreadfort men fighting Rodrik’s army, which took them for allies, the corpses of Rodrik, Cley Cerwyn and Leobald Tallhart, the gates opened, the helm off, Reek dead and the name Ramsay Snow, six hundred men from his father’s garrison, Kyra preferred to Palla, the punch, and the order to burn it all. Episode 32 is his show gate.',
    },
  },
  'big-walder-frey': {
    '13:90': {
      source: WF_BRAN_II,
      note: 'Bran II (site 90): the Walders jousting at the quintains, Big Walder sitting his horse better, Little Walder mocking Hodor, Luwin’s rebuke and Big Walder looking ashamed. Bran I (site 78) has the names explained, fifty-two days older and half a foot shorter, and all the Walders named for their grandfather.',
    },
    '15:109': {
      source: WF_BRAN_V,
      note: 'Bran V (site 109): the raven with the victory at Oxcross, Big Walder saying only Lord Tywin matters, the Walders unmoved by Ser Stevron’s death, old and always tired, the line of succession from Ser Ryman, and Luwin telling them to be ashamed.',
    },
  },
  'little-walder-frey': {
    '13:90': {
      source: WF_BRAN_II,
      note: 'Bran II (site 90): Hodor called an ugly horse and bumped, the threat of Summer, the armour and the wolfskin cloak, Luwin’s rebuke and Little Walder staying haughty. Bran I (site 78) has him tall and stout, often lord of the crossing, and bitten by Shaggydog after hitting Rickon with the stick.',
    },
    '15:109': {
      source: WF_BRAN_V,
      note: 'Bran V (site 109): Ser Stevron’s death taken lightly, the question about Ser Emmon, Big Walder’s line of succession, Ryman too old, the question whether Little Walder will be lord, and Luwin telling them to be ashamed.',
    },
  },
  'wyman-manderly': {
    '60:90': {
      source: WF_BRAN_II,
      note: 'Bran II (site 90): Lord Wyman welcomed from the high seat, no prince ever late, White Harbor to mint coin and build a fleet, the widowed cousin and the offer of himself or Ser Wendel, and Tywin’s ransom offer for Ser Wylis refused. Episode 60 is his show gate.',
    },
    '60:109': {
      source: WF_BRAN_V,
      note: 'Bran IV (site 102): Lady Hornwood forced to wed and Lord Manderly taking her castle to protect it; Bran V (site 109): Rodrik back with the prisoner held for her murder, Manderly and Bolton fighting in the Hornwood, and Rodrik without the strength to stop them.',
    },
  },
  'donella-hornwood': {
    '13:90': {
      source: WF_BRAN_II,
      note: 'Bran II (site 90): husband dead on the Green Fork and son in the Whispering Wood, the grieving widow’s arrival, Roose Bolton’s bastard massing men at the Dreadfort, Reek, the hunting not for deer, her fear for her lands, marriage if commanded, Lord Manderly turned down, and her hint about Ser Rodrik. Roose Bolton and Wyman Manderly are named unlinked: their show gates (14 and 60) fall after the story’s episode.',
    },
    '14:102': {
      source: WF_BRAN_IV,
      note: 'Bran IV (site 102): the Bastard of Bolton forcibly taking Lady Hornwood as his wife after the harvest feast, Lord Manderly taking her castle to protect it, and Ser Rodrik gone east to settle the uprising and see justice done. Wyman Manderly is named unlinked: his show gate is 60. Episode 14 orders it, as her status does.',
    },
    '15:109': {
      source: WF_BRAN_V,
      note: 'Bran V (site 109): Rodrik back with Reek, servant of the now-dead Bastard of Bolton, the forced marriage and the will naming him heir, the murder, the bastard shot as he rode away, Reek kept for Robb’s judgement, and Manderly and Bolton fighting in the Hornwood. Hayhead tells Bran who the prisoner is; the bastard’s death is what Winterfell is told, as the chapter tells it.',
    },
  },
  'thoren-smallwood': {
    '11:80': {
      source: WL_JON_I,
      note: 'Jon I (site 80): Smallwood arguing that the Lord Commander’s place is at Castle Black and that the command should be his, Mormont refusing, the two rangings already lost, Benjen First Ranger until his death is confirmed, and the complaint that Smallwood called him too old. No season-2 episode adapts Jon I, so episode 11 orders it.',
    },
    '11:87': {
      source: WL_JON_II,
      note: 'Jon II (site 87): Smallwood on why men feared the heart trees and cut them down, his armour and cloak more lordly than Mormont’s, the wildlings of a year ago, Buckwell’s answer, and the order of march with Buckwell’s scouts first and Smallwood’s vanguard after. The armour is Ser Jaremy Rykker’s; left unnamed. No season-2 episode adapts Jon II, so episode 11 orders it.',
    },
    '15:117': {
      source: WL_JON_V,
      note: 'Jon V (site 117): Qhorin’s report of wargs, mammoths and the power Mance seeks, his advice, and the three parties: Buckwell with four men to the Giant’s Stair, Smallwood to probe the Milkwater, Qhorin to the Skirling Pass. The river and the pass stay unnamed (the pass opens at 125).',
    },
  },
  'eddison-tollett': {
    '20:87': {
      source: WL_JON_II,
      note: 'Jon II (site 87): Jon paired with Eddison Tollett, nicknamed Dolorous Edd, the dead walking and now talking, the grey-haired squire’s complaints, the dismal house he was born in before he fell on hard times, and his not wanting to imagine what happened. Ordered at episode 20, his show gate. Italian “Edd l’Addolorato”: Italian Wikipedia, Guardiani della notte, Eddison Tollett.',
    },
    '20:97': {
      source: WL_JON_III,
      note: 'Jon III (site 97): Edd holding Mormont’s mount and keeping the wolf outside, the axe returned buried in a skull, the drunk Craster cutting off only an ear, and wildling friends burying you in secret graves; Sam also reports Edd saying Craster marries his daughters. Ordered at episode 20, his show gate.',
    },
    '20:142': {
      source: `${SHOW}Eddison_Tollett`,
      note: 'Eddison Tollett page (GOT210): the frozen feces, the snark about Gilly, Sam finding nothing interesting about Edd, the first and second blasts, the order to return to the Fist, the third blast and the scream to run, and Sam left behind (GOT210). Episode 20 is his show gate.',
    },
  },
  'jarman-buckwell': {
    '11:87': {
      source: WL_JON_II,
      note: 'Jon II (site 87): Buckwell’s answer to Smallwood that much can change in a year, the march to the lake, and his scouts riding out first ahead of the vanguard, of two hundred men in all. No season-2 episode adapts Jon II, so episode 11 orders it.',
    },
    '11:97': {
      source: WL_JON_III,
      note: 'Jon III (site 97): Buckwell’s horn meaning people at Craster’s Keep after seven villages, his question about Mance and Craster’s answer that free folk need no kings, and his advice to Jon to keep a good edge on his sword.',
    },
    '15:117': {
      source: WL_JON_V,
      note: 'Jon V (site 117): Buckwell to take four men up the Giant’s Stair; Jon IV (site 108) has his view that following the Milkwater is the easiest road to the Frostfangs but Mance will know of their approach. The names of the stair and the river are left out.',
    },
  },
  'mallador-locke': {
    '11:87': {
      source: WL_JON_II,
      note: 'Jon II (site 87): Smallwood and Buckwell on the wildlings of a year ago, Locke’s “fewer wildlings means fewer worries”, and the baggage train under him behind Mormont’s main force. No season-2 episode adapts Jon II, so episode 11 orders it.',
    },
    '15:108': {
      source: WL_JON_IV,
      note: 'Jon IV (site 108): the officers and the hot spiced wine, Buckwell on the Milkwater and Mance knowing their approach, Locke recommending the Giant’s Stair or the Skirling Pass, and Mormont staying on the Fist to strengthen its defences. The two passes stay unnamed: the Skirling Pass opens at 125.',
    },
  },
  'craster': {
    '11:chapter': {
      source: WL_JON_III,
      note: 'Jon III (site 97): Craster alone in a chair, Benjen not seen for three years, feigned ignorance of the wights, the escort refused as free folk, Mance’s messenger sent back without his tongue, food for twenty, the wine, the hand of any man who touches his wives, and his scorn when he hears the name Snow.',
    },
    '11:episode': {
      source: `${SHOW}Craster`,
      note: 'Craster page (GOT201): Benjen not seen for three years, the wine, Jon taking offence at “southerners”, the bastard surname and the real north, the axe tested on the floor, Mance gathering an army to march south, the daughter-wife made to say they are content, and the hand of any man who touches his wives (GOT201). Gilly is not named: her show gate is 15.',
    },
    '12:97': {
      source: `${SHOW}Craster`,
      note: 'Craster page (GOT202): the baby carried into the woods at night and left on the ground, Craster turning back, then finding Jon watching a White Walker pick it up, and the blow that knocks Jon out (GOT202).',
    },
    '13:97': {
      source: `${SHOW}Craster`,
      note: 'Craster page (GOT203): Jon brought back bound and bloodied, kicked, the men roused and told to get out, Jon blamed for meddling, Longclaw handed to the Lord Commander with the demand to make things right, and the departure at dawn (GOT203).',
    },
  },
  'gilly': {
    '15:97': {
      source: WL_JON_III,
      note: 'Jon III (site 97): the fifteen-year-old girl, Craster’s daughter and now his wife, the rabbits, the Watch making good, Sam’s cloak at dawn, the child, the boys given to the gods, the white cold at night, the plea to be taken to the Wall, the other direction and the old crow’s decision, and Sam’s hope for the return. Episode 15, her show gate, orders it.',
    },
    '15:108': {
      source: `${SHOW}Gilly`,
      note: 'Gilly page (GOT201–GOT203): the wine served, the rehearsed speech that they are protected by Craster, Ghost and the rabbit, Sam’s help and her plea, Jon’s refusal, and the thimble with the promise to return; the Grenn and Eddison Tollett pages have Sam saying Gilly would love the Fist (GOT205). Her show gate is 15, so earlier episodes are told here.',
    },
  },
  'qhorin-halfhand': {
    '15:chapter': {
      source: WL_JON_V,
      note: 'Jon V (site 117): the hundred from the Shadow Tower, Alfyn Crowkiller’s band met along the Wall, its leader killed and captives taken for four men lost, Qhorin knowing Eddard and Rickard, the captive’s wargs and mammoths, the breach of the Wall, the power Mance seeks in the Frostfangs, the advice to send scouts, and Jon chosen for the old gods of the First Men and the Starks.',
    },
    '15:episode': {
      source: `${SHOW}Qhorin`,
      note: 'Qhorin page (GOT205): the force from the Shadow Tower, the rendezvous at the Fist, Mance organizing the wildlings, the lookouts, the scouting party he offers to lead, Jeor arguing against Jon (not a ranger, beaten by Craster), Qhorin defending him, and Jon let go; the Jeor Mormont page has Mance’s past in the Watch and the shift to wildling tactics (GOT205).',
    },
    '16:chapter': {
      source: WL_JON_VI,
      note: 'Jon VI (site 125): the watchers in the Skirling Pass, Qhorin’s warning about the horn, Stonesnake and Jon volunteering and climbing, Ygritte recognizing the Halfhand and confirming the wildlings would kill him if he yielded, his men saying she should be killed, and Jon left alone with her to do it.',
    },
    '16:episode': {
      source: `${SHOW}Qhorin`,
      note: 'Qhorin page (GOT206): the lookouts found and ambushed, Jon hesitating before a woman, Qhorin questioning her and leaving Jon to execute her; the Ygritte page has the bodies to be burned and the suspected fire, and the episode synopsis the party going on up the mountain (GOT206).',
    },
    '17:127': {
      source: WL_JON_VII,
      note: 'Jon VII (site 127): Qhorin confirming Mance would accept Jon, Mance a wildling captured as a child, the best ranger, gone back to his roots, the suspicion that Jon let Ygritte go, Ebben, knowing his men, the eagle feared to be a skinchanger, the return through the pass, and Dalbridge staying behind with all the arrows. No season-2 episode adapts Jon VII; episode 17 orders it.',
    },
    '18:142': {
      source: `${SHOW}Qhorin`,
      note: 'Qhorin page (GOT208): Qhorin searching for Jon and following his tracks, the ambush, his men killed and Qhorin taken, Jon joining him in captivity, the deaths not to be meaningless, the spy, and the feigned anger to make Jon look like a traitor (GOT208). His captured status sits at 18/142.',
    },
    '20:chapter': {
      source: WL_JON_VIII,
      note: 'Jon VIII (site 142): Ebben sent east, Stonesnake sent on foot, the oath recited, the order to yield and not balk, the mission to learn what the wildlings plan and return, the promise to tell Mormont, the hunters with the Lord of Bones, Jon yielding, “bastard blood is craven”, the order to kill Qhorin, his death and the pyre. His death sits at 20/142, so the story is told in the past tense.',
    },
    '20:episode': {
      source: `${SHOW}Qhorin`,
      note: 'Qhorin page (GOT210): the sacrifice for the ruse, the captor stunned and the sword taken, the attack on Jon, the Lord of Bones letting them fight, the insult to his parentage, the killing per Qhorin’s instructions, “We are the watchers on the Wall”, the wildlings believing Jon a traitor, and the body burned so it will not return as a wight (GOT210). His death sits at 20/142; the leader stays unnamed, his record being the books’.',
    },
  },
  'stonesnake': {
    '15:125': {
      source: WL_JON_VI,
      note: 'Jon VI (site 125): Stonesnake and Jon volunteering, the lesson in climbing a sheer cliff, the watcher with the horn killed before he can sound it, Jon cutting down the man by the fire, Ygritte yielding, Stonesnake’s warning that she should be killed, and Bael called a murderer and robber. Ordered at episode 15, his show gate, rather than 16, which adapts Jon VI: a new record’s first story opens at its gate episode (the FIRST test of thronesSeason2Chronicle.test.ts).',
    },
    '20:142': {
      source: WL_JON_VIII,
      note: 'Jon VIII (site 142): Stonesnake’s mare breaking a leg, Qhorin sending him on foot by the high passes to the Fist, and the message for Mormont: giants and wargs and worse, and the trees have eyes again. His fate is not told in the stage.',
    },
  },
  'ygritte': {
    '16:chapter': {
      source: WL_JON_VI,
      note: 'Jon VI (site 125): the sleeper who turns out to be a spearwife, Ygritte, yielding and taken captive, the tale of Bael the Bard and the daughter of Winterfell, the shared blood, Ygritte recognizing the Halfhand, Jon left alone to kill her, Mance accepting Jon if he ran off with her, and Jon telling her to run. Italian “Bael il Bardo”: Italian Wikipedia, Casa Stark, and the Italian Game of Thrones Wiki’s Bael page.',
    },
    '16:episode': {
      source: `${SHOW}Ygritte`,
      note: 'Ygritte page (GOT206): the sole survivor of the watchpost, the bodies to be burned, Qhorin suspecting a fire, Jon told to execute her, her plea to get it over with, the hesitation and escape, the recapture and isolation, the cold night and the advances rebuffed (GOT206).',
    },
    '17:127': {
      source: `${SHOW}Ygritte`,
      note: 'Ygritte page (GOT207): still a prisoner, the talk of his virginity, the search for Qhorin, the North before the Andals, the shared descent from the First Men, the seduction that throws him off his guard, the escape and the ambush; the Jon Snow page has the trip with the rope and “should have taken her” (GOT207).',
    },
    '18:142': {
      source: `${SHOW}Ygritte`,
      note: 'Ygritte page (GOT208): Jon brought to the Lord of Bones, the order to execute him, Mance wanting to question him for his Stark blood, Qhorin presented as a captive, his open blame for his men’s deaths, Ygritte intrigued, and the plan she does not know of; the Lord of Bones page has “a present” (GOT208). The leader stays unnamed: his record is the books’.',
    },
    '20:chapter': {
      source: WL_JON_VIII,
      note: 'Jon VIII (site 142): the fourteen hunters with eight dogs, the Lord of Bones their leader and Ygritte among them, Jon yielding and killing Qhorin, the wildlings accepting him, the eagle once the man Jon killed when they captured her, the pyre, and Mance marching on the Wall.',
    },
    '20:episode': {
      source: `${SHOW}Ygritte`,
      note: 'Ygritte page (GOT210): toying with Jon on the way to Mance, the fight, the band stunned but accepting Jon and freeing his hands; the Jon Snow page has the flat of Longclaw on his head and the crest over the encampment, and the episode synopsis Ygritte giving Jon back his sword (GOT210).',
    },
  },
  'ebben': {
    '17:127': {
      source: WL_JON_VII,
      note: 'Jon VII (site 127): Qhorin saying he would have had Ebben kill the girl, the wolf dream of giants and the eagle, Jon waking with Ghost’s name, Ebben calling him a skinchanger, the eagle watching them, the turn back, and Dalbridge staying behind. Italian “metamorfo” for skinchanger: Italian Wikipedia, Mondo delle Cronache del ghiaccio e del fuoco and the season 3 episode list. No season-2 episode adapts Jon VII; episode 17 orders it.',
    },
    '20:142': {
      source: WL_JON_VIII,
      note: 'Jon VIII (site 142): Ebben sent east with the last garron to reach the Lord Commander with all haste, and the hunters arriving with his head. His death sits at 20/142, so the story is told in the past tense.',
    },
  },
  'dalbridge': {
    '17:127': {
      source: WL_JON_VII,
      note: 'Jon VII (site 127): the eagle, the fear of a skinchanger, the return through the Skirling Pass without fires, the enemy gaining, and Squire Dalbridge remaining behind with all the arrows where the wildlings were killed. The summary’s “sacrificing himself” is not told as a death: his status stays alive in the stage. No season-2 episode adapts Jon VII; episode 17 orders it.',
    },
  },
  'lord-of-bones': {
    '18:142': {
      source: WL_JON_VIII,
      note: 'Jon VIII (site 142): fourteen hunters and eight dogs, the Lord of Bones their leader, Ygritte among them, Ebben’s head, the order to kill them, Jon yielding, the command to kill Qhorin, the wildlings accepting Jon despite Rattleshirt’s misgivings, the pyre and the charred bones. Ordered at episode 18, his show gate, though episode 20 tells the killing on screen: a new record’s first story opens at its gate episode (the FIRST test of thronesSeason2Chronicle.test.ts).',
    },
  },
  'missandei': {
    '23:171': {
      source: EPISODE_23,
      note: 'Show: the Missandei page: interpreting for Kraznys and leaving out his insults (GOT301), struggling to put them politely, demanded as a gift and token of good faith, no family, the warning of war and death, “Valar morghulis” and “we are not men” (GOT303). Daenerys III (site 171) orders it, her book gate.',
    },
    '28:186': {
      source: EPISODE_28,
      note: 'Show: the Missandei page and the Yunkai synopsis: Mero groping her and slapping her backside, the nineteen languages, the corrected Dothraki, and Daario’s knife at her throat before he shows the heads (GOT308). Daenerys IV (site 186) orders it.',
    },
    '30:186': {
      source: EPISODE_30,
      note: 'Show: the Missandei page and the Yunkai synopsis: waiting with Daenerys for the infiltration (GOT309), the gates opening, her prepared speech interrupted, “mhysa” and its meaning, mother, in Old Ghiscari, and the crowd lifting Daenerys (GOT310). Daenerys IV (site 186) orders it.',
    },
    '24:171': {
      source: ESSOS_171,
      note: 'Daenerys II and III (sites 167 and 171), cached synopses, and A Wiki of Ice and Fire’s Kraznys mo Nakloz page (cached): the slave girl translating for Kraznys, Daenerys pretending not to know High Valyrian, Missandei freed and taken into service as Daenerys reveals she speaks it, and “valar morghulis”, all men must die, as her answer to the dangers ahead (her log, from A Wiki of Ice and Fire’s Missandei page as #1674 read it, citing Chapter 27). Ordered at episode 24, Kraznys’s show gate.',
    },
  },
  'kraznys-mo-nakloz': {
    '24:171': {
      source: ESSOS_171,
      note: 'Books only: A Wiki of Ice and Fire’s Kraznys mo Nakloz page (cached), citing Chapters 23 and 27: the Unsullied shown through Missandei, the insults he thinks she cannot understand, the bargain of every Unsullied for a dragon, Drogon refusing him on the plaza, “a dragon is no slave”, the jet of flame into his face, and the Unsullied doing nothing as they are ordered to eliminate the slavers; Kraznys dies there (his status, deceased at 171). The eight thousand, the eunuchs’ obedience and the boys in training are the cached Daenerys II and III synopses; the three ships the Ice and Fire Wiki’s Daenerys page. His record opens at 171, so the story tells chapter 167 from there. Episode 24 orders it.',
    },
  },
  'grey-worm': {
    '25:episode': {
      source: EPISODE_25,
      note: 'Show: the Slaver’s Bay synopsis and the Grey Worm page: the Unsullied choosing one leader, Missandei on the names of a color and a vermin, the order to choose new names or reclaim birth names, his birth name cursed and Grey Worm lucky, the name he had when Daenerys Stormborn set him free (GOT305). Daenerys IV (site 186) orders it, his book gate.',
    },
    '29:186': {
      source: EPISODE_29,
      note: 'Show: the Grey Worm page: the messenger to the gates (GOT307), the offer to cut out Mero’s tongue and Daenerys standing him down (GOT308), slow to give an opinion, trusting Daario, the infiltration with Jorah and Daario, the spear, and coming back battered but uninjured (GOT309). Daenerys IV (site 186) orders it.',
    },
    '25:chapter': {
      source: ESSOS_186,
      note: 'Daenerys IV (site 186): A Wiki of Ice and Fire’s Grey Worm page (cached), citing Chapter 42: chosen by the Unsullied as one of the most able for an officer, placed under Jorah to learn to command, Daenerys abolishing the daily names, and his choice to keep the one he had when freed. The names drawn by lot each day are the Game of Thrones Wiki’s Grey Worm page (In the books). Episode 25 adapts his choice.',
    },
  },
  'grazdan-mo-eraz': {
    '27:episode': {
      source: EPISODE_27,
      note: 'Show: the Yunkai synopsis and the Razdal mo Eraz page: the litter, Missandei announcing him as one of the Wise Masters, the dragons snarling, gold and ships for peace, her demand that every slave be freed and paid, the powerful friends who will enslave the survivors and her, the dragons hissing, and the gold left behind (GOT307). Daenerys IV (site 186) orders it, his book gate.',
    },
    '27:chapter': {
      source: ESSOS_186,
      note: 'Daenerys IV (site 186): the Game of Thrones Wiki’s Razdal mo Eraz and Drogon pages (In the books): a chest of gold coins, the threat to enslave the survivors and to sell her as a bedslave in the Free Cities, Drogon setting his tokar on fire at her command, the safe conduct, the arrows, “Harder than to kill a slaver”, and the gold sent back with him. The cached synopsis has the chest of gold and the dismissal. Episode 27 adapts it.',
    },
  },
  'mero': {
    '28:episode': {
      source: EPISODE_28,
      note: 'Show: the Mero page and the Yunkai synopsis: with his co-captain and Daario, the lewd remarks, the whore in Lys, Missandei groped, the offer refused, the barrel of wine, the plan to kill her, the three coins handed out by a slave, the Braavosi coin to Daario, and his head brought to Daenerys (GOT308). His co-captain, Prendahl, is the books’ record and stays unnamed. Daenerys IV (site 186) orders it; the show record is dead from 28.',
    },
    '28:chapter': {
      source: ESSOS_186,
      note: 'Daenerys IV (site 186), cached synopsis: the captain of the Second Sons laughs at her offer but accepts a wagonload of wine for his men, the attack that night when Yunkai’s defenders will not expect it, the Stormcrows’ help and the Second Sons too drunk to fight. The Second Sons are one of two companies (the same synopsis). The books keep him alive through the stage. Episode 28 orders it, his show gate.',
    },
  },
  'daario-naharis': {
    '28:episode': {
      source: EPISODE_28,
      note: 'Show: the Daario Naharis page: with Mero and Prendahl, the bluff of ten thousand Unsullied, the Braavosi coin, the Unsullied armor, the knife at Missandei’s throat, the heads of his captains, and the Second Sons, his sword, his life and his heart sworn to her (GOT308). Daenerys IV (site 186) orders it, his book gate.',
    },
    '29:186': {
      source: EPISODE_29,
      note: 'Show: the Yunkai synopsis and the Daario Naharis page: the back-gate plan, Jorah’s skepticism, Grey Worm’s trust, more soldiers than Daario anticipated, Jorah and Grey Worm back first, and Daario kneeling with Yunkai’s torn flag (GOT309). Daenerys IV (site 186) orders it.',
    },
    '28:chapter': {
      source: ESSOS_186,
      note: 'Daenerys IV (site 186): A Wiki of Ice and Fire’s Daario Naharis page (cached), citing Chapter 42: one of the Stormcrow captains at the parley, gold and plunder offered, Prendahl’s refusal, the smile (the cached synopsis), the vote put to each man, Prendahl and Sallor the Bald killed, their heads as proof, Jorah’s distrust and the Stormcrows’ part in the victory. Episode 28 orders it, his show gate.',
    },
  },
  'prendahl-na-ghezn': {
    '28:186': {
      source: ESSOS_186,
      note: 'Books only: Daenerys IV (site 186), cached synopsis (the three Stormcrow captains first to arrive, spurning her offer) and A Wiki of Ice and Fire’s Daario Naharis page (cached): gold and plunder offered, rebuffed by Prendahl, the question put to each man of a company of freedmen, Daario killing Prendahl and Sallor the Bald and bringing their heads. Ghiscari is the Game of Thrones Wiki’s Prendahl na Ghezn page (In the books). Episode 28 orders it.',
    },
  },
}
