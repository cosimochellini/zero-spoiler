/**
 * Which wiki page settles each Game of Thrones chronicle story, and what was
 * read there (#1360). Keyed by character id and then by `episode:chapter`;
 * where a character tells the same pair twice, once per medium, the two use
 * `episode:source` keys so each medium cites its own evidence. Show facts come
 * from the Game of Thrones Wiki, book facts from the Ice and Fire Wiki and the
 * book notes on the Game of Thrones Wiki. The Ice and Fire Wiki has chapter
 * pages only up to site chapter 33, so a book pin past it rests on the
 * episode page's list of the chapters it adapts and on the reviewed pins of
 * `season-1.relationships.ts`; the note says so. From #1361 a book pin past
 * chapter 33 cites the chapter's synopsis on A Wiki of Ice and Fire instead,
 * where it was read.
 */

const SHOW = 'https://gameofthrones.fandom.com/wiki/'
const BOOKS = 'https://iceandfire.fandom.com/wiki/'
/** A Wiki of Ice and Fire, whose chapter pages number the prologue 0 (#1361). */
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
const DANY_I = `${BOOKS}Daenerys_I_-_A_Game_of_Thrones`
const DANY_II = `${BOOKS}Daenerys_II_-_A_Game_of_Thrones`
const DANY_III = `${BOOKS}Daenerys_III_-_A_Game_of_Thrones`

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
      note: `Corrected after review: the egg theft is dropped, as no book source places it. The synopsis has the drawn sword in the sacred city, the threat, “a golden crown that men will tremble to behold”, the broken arm and the molten gold. Book: the Ice and Fire Wiki’s Cohollo page has the bloodriders seizing him, Haggo’s record log the broken arm; the episode adapts Daenerys V. ${PAST_CHAPTER_PAGES}`,
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
    '6:62': {
      source: EPISODE_6,
      note: 'The synopsis has Qotho seizing Viserys, breaking his arm so he drops the sword, and Drogo pouring the gold. Show only: the books name him at site chapter 62, after Viserys is dead.',
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
      note: `A tall bloodrider; the broken arm is his record log, the distrust of Mirri the relationship pin at 8/62. Corrected after review: Mago complains to him, and the offer to carry Drogo is dropped, as it may belong to the fall at site chapter 65. ${PAST_CHAPTER_PAGES}`,
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
      note: `The episode has Sansa at the Sept as her father confesses and is beheaded despite the mercy Joffrey promised her. The reviewed relationship pin at 9/66 holds it in both media (“before her eyes”). ${PAST_CHAPTER_PAGES}`,
    },
    '10:68': {
      source: EPISODE_10,
      note: `The episode has the head on the spike, Meryn Trant striking her, her move to push Joffrey and the Hound’s handkerchief. The reviewed relationship pins at 10/68 hold Mordane’s head and the Hound’s part in both media; the episode adapts Sansa VI. ${PAST_CHAPTER_PAGES}`,
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
      note: 'The episode and Arya III (chapter 33) share the cats, the dragon skulls, two men plotting about her father and the queen, and her warning not taken seriously. Yoren’s arrival at the end of the book chapter rests on the episode’s adaptation list; unverified on the chapter text.',
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
      note: 'Show only: Yoren calls her boy, cuts her hair, plans to take her to Winterfell as a recruit, and she joins Gendry, Hot Pie and Lommy as Arry.',
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
    '6:45': {
      source: `${BOOKS}Harwin`,
      note: `Books only: dispatched by Eddard under Lord Beric and Thoros of Myr; chapter 45 is the reviewed relationship pin. ${PAST_CHAPTER_PAGES}`,
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
    '6:46': {
      source: `${BOOKS}Alyn`,
      note: `Books only: twenty of Eddard’s men under Alyn go with Beric’s company; the Tomard page names Alyn as Jory’s replacement. Chapter 46 is the reviewed relationship pin and his role. ${PAST_CHAPTER_PAGES}`,
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
      note: 'The synopsis: the ride with Robb and Theon on Tyrion’s saddle, Bran wandering off, the wildlings, a knife to his throat, Theon’s arrow angering Robb, Osha yielding and taken prisoner. Book side: Bran V (Ice and Fire Wiki chapter page): the outlaws, Theon shooting Stiv, Osha taken prisoner; Robb’s anger at the risky shot is the reviewed relationship pin at 6/38. Kept to what both tell: the wolves fight only in the book, and the book page does not say outright that Bran was alone.',
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
      note: 'The synopsis: the ride with Robb and Bran on the new saddle, the knife at Bran’s throat, Theon’s arrow and Robb’s anger, Osha yielding. Book side: Bran V (Ice and Fire Wiki chapter page): Theon shoots Stiv just in time, Osha surrenders; Robb’s anger at the shot is the reviewed relationship pin at 6/38.',
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
    '7:42': {
      source: `${SHOW}Benjen_Stark`,
      note: 'Season 1, citing episode 7: his horse returns to Castle Black without him. Book side: the Ice and Fire Wiki’s Benjen page has him go missing beyond the Wall; the pin follows his status entry at 7/42 (Jon V), unverified on the chapter text. The horse is left out because only the show page states it.',
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
      note: 'Both media: the news of Tyrion’s seizure, Jory’s death and Eddard’s injury, the ride with the new saddle, the outlaws, Stiv shot by Theon, Robb’s anger and Osha taken (chapter 38; GOT106 on the Robb page). Stiv’s death is at 6/38. Benjen’s absence, a book detail here, is left out.',
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
    '10:72': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_71`,
      note: 'Both media: vengeance sworn on the Lannisters, Renly’s claim, Robb holding that Stannis comes first, the Greatjon’s speech about the dragons and the proclamation (Catelyn XI; GOT110 on the Robb and Greatjon pages). Robb’s role is King in the North from 10/72.',
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
    '8:56': {
      source: `${SHOW}Galbart_Glover`,
      note: 'Both media: lord of Deepwood Motte, at Robb’s war council when Catelyn arrives and asks to speak with her son alone (GOT108; Catelyn VIII on A Wiki of Ice and Fire, where she sends the bannermen away). The show’s vanguard quarrel is left out.',
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
    '29:56': {
      source: `${AWOIAF}A_Game_of_Thrones-Chapter_55`,
      note: 'Books only, Catelyn VIII: Lord Wyman, too fat to sit a horse, keeps White Harbor and sends Ser Wylis and Ser Wendel with fifteen hundred men, riding with Catelyn and Brynden to Moat Cailin.',
    },
  },
}
