/**
 * Which wiki page settles each Game of Thrones chronicle story, and what was
 * read there (#1360). Keyed by character id and then by `episode:chapter`;
 * where a character tells the same pair twice, once per medium, the two use
 * `episode:source` keys so each medium cites its own evidence. Show facts come
 * from the Game of Thrones Wiki, book facts from the Ice and Fire Wiki and the
 * book notes on the Game of Thrones Wiki. The Ice and Fire Wiki has chapter
 * pages only up to site chapter 33, so a book pin past it rests on the
 * episode page's list of the chapters it adapts and on the reviewed pins of
 * `season-1.relationships.ts`; the note says so.
 */

const SHOW = 'https://gameofthrones.fandom.com/wiki/'
const BOOKS = 'https://iceandfire.fandom.com/wiki/'

const EPISODE_1 = `${SHOW}Winter_Is_Coming`
const EPISODE_2 = `${SHOW}The_Kingsroad`
const EPISODE_3 = `${SHOW}Lord_Snow`
const EPISODE_4 = `${SHOW}Cripples,_Bastards,_and_Broken_Things`
const EPISODE_6 = `${SHOW}A_Golden_Crown`
const EPISODE_7 = `${SHOW}You_Win_or_You_Die`
const EPISODE_8 = `${SHOW}The_Pointy_End`
const EPISODE_9 = `${SHOW}Baelor`
const EPISODE_10 = `${SHOW}Fire_and_Blood`
const DANY_I = `${BOOKS}Daenerys_I_-_A_Game_of_Thrones`
const DANY_II = `${BOOKS}Daenerys_II_-_A_Game_of_Thrones`
const DANY_III = `${BOOKS}Daenerys_III_-_A_Game_of_Thrones`

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
      note: 'Show only, split from the book story after review: the sword for Arya and the pointy end, the farewell kiss for Bran and Catelyn’s cold request, the embrace with Robb, Eddard telling Jon he has his blood if not his name and promising to tell him of his mother, and the ride north with Benjen and Tyrion.',
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
      note: 'Show only: the brothers fussing over Longclaw while Sam keeps apart, Sam telling Jon that Robb has led an army south to war, and Aemon telling Jon that their duty comes first. Sam’s news is the show’s alone (#1352).',
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
      note: 'Both media: the First Builder, present at the induction (GOT107) and, in the book, present as First Builder when the new brothers swear (Ice and Fire Wiki, Othell page; Jon VI, site 49). Halder to the builders in both (GOT107; Jon VI).',
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
}
