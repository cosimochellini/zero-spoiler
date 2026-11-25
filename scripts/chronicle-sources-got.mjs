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
// The Essos and Qarth cast of the second stage (#1478): Daenerys I to V of
// A Clash of Kings, site chapters 86, 101, 114, 122 and 137.
const ACOK_12 = `${ACOK_AWOIAF}12`
const ACOK_27 = `${ACOK_AWOIAF}27`
const ACOK_40 = `${ACOK_AWOIAF}40`
const ACOK_48 = `${ACOK_AWOIAF}48`
const ACOK_63 = `${ACOK_AWOIAF}63`
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
      note: 'Tyrion X (site 118): Shae asking to be his lady at court and to kill Cersei, the kitchens refused, the mockery about Tywin, the slap, the story of Tysha, and Varys’s plan of Lollys’s household and the secret passage. Her role step “Lollys Stokeworth’s maid” stays at 19/131, so the story tells only the proposal.',
    },
    '18:128': {
      source: KL_128,
      note: 'Tyrion XII (site 128): Alayaya brought in beaten, Tyrion relieved that Cersei has not found Shae, and Shae in his room through the secret passage, blindfolded by Varys.',
    },
    '19:131': {
      source: KL_131,
      note: 'Sansa V (site 131): Sansa helping Tanda and Shae guide Lollys inside, the Queen’s Ballroom, and Ser Ilyn there for treasonous guards and the women’s defence. Her role step “Lollys Stokeworth’s maid” is at 19/131; Tyrion XI (site 123) already says she has entered Lollys’s service, an owner check.',
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
    '10:75': {
      source: `${SHOW}Hot_Pie`,
      note: 'Season 1, citing GOT110: with another recruit he bullies Arry for Needle, claims he kicked a boy to death, Arya threatens him, he backs into Gendry, who scares him off. Show only: in the books Hot Pie opens at chapter 75, so the chapter only orders it.',
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
  },
  'hodor': {
    '4:25': {
      source: EPISODE_4,
      note: 'The synopsis: the stableboy who can only say “Hodor” carries Bran down to Robb’s meeting with Tyrion, who brings the saddle design. Book side: Bran IV (Ice and Fire Wiki chapter page, chapter 25): Hodor carries him downstairs to the hall where Tyrion shares the design.',
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
  },
  'mikken': {
    '2:54': {
      source: `${SHOW}Mikken`,
      note: 'Season 1, citing episode 2: Mikken forges Needle for Arya. The episode synopsis has Jon’s gift, the name Needle and “Stick them with the pointy end.” Book side: the Ice and Fire Wiki’s Mikken page (the bravo’s blade made for Jon, given to Arya) and Jon II. Filed at chapter 54, his book gate.',
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
  },
  'rhaegal': {
    '41:86': {
      source: ACOK_12,
      note: 'Daenerys I (site 86): seared meat for all three, the green-and-bronze one named Rhaegal after Rhaegar, and Irri and Jhiqui carrying two dragons in a cage while one rides on her shoulder each night. Episode 41 is his show gate.',
    },
  },
  'viserion': {
    '41:86': {
      source: ACOK_12,
      note: 'Daenerys I (site 86): Viserys’s words that only men and dragons eat cooked meat, the dragons thriving, names after those the gods have taken, and the cream-and-gold one named Viserion after Viserys. Episode 41 is his show gate.',
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
}
