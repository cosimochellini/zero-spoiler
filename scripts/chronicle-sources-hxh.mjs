/**
 * Which wiki page settles each Hunter x Hunter chronicle story's episode, and
 * what the verification passes found there (#762). Keyed by character id and
 * then by episode, like `CHRONICLE_SOURCES`; the title and the episode come
 * from the chronicle data. Mutually exclusive stories in the same episode
 * use `episode:source` keys so each medium cites its own evidence.
 */
export const HUNTER_X_HUNTER_SOURCES = {
  'gon-freecss': {
    1: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_1_(2011)',
      note: "Checked on the episode page: the swamp fish, Mito's night-before talk, the storm warning by smell and birds, and the dive for Katzo with the two holding his legs all fall in this episode.",
    },
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: 'The episode page has Gon waiting for Leorio, the shared reasons, and the race to the exit where Satotz rules a tie.',
    },
    16: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_16_(2011)',
      note: "The page covers the badge hooked from Hisoka, the dart paralysis, Hisoka killing the thief and handing back both badges, and the punch with the condition. Gon's two days of rod practice come from episode 15, so the story is not early.",
    },
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: 'The match runs from the arm break through the leg and death threats to Hanzo conceding, then knocking Gon out; Gon is the first to pass.',
    },
    21: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_21_(2011)',
      note: "Gon breaks Illumi's arm in front of the examinees, then outside gets the answer that Killua is at Kukuroo Mountain; he leaves with Kurapika and Leorio the same day.",
    },
    29: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_29_(2011)',
      note: 'Arrival, the one-push first match and the rooms at the 100th floor are in episode 27 and chapters 44 and 46; the barrier is in episode 28 and chapter 47; the opened nodes, Ten, the walk through the barrier and Hisoka’s one-win condition close episode 29 and chapter 48.',
    },
    30: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_30_(2011)',
      note: 'Corrected after review: the ban is not until he heals: it outlasts his healing in Chapter 52 and Episode 31. The next-day booking and Wing’s advice to wait are in episode 29 and chapter 49; the tops hitting anything in their path, Tornado Top, Zetsu without knowing it, the broken arm, and the ban on Nen with the thread on his finger are in episode 30 and chapters 50 and 51. Chapter 51 sets the ban at two months, so the story gives it no length.',
    },
    36: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_36_(2011)',
      note: 'Corrected after review: the rock tied to Hisoka’s aura and the blow to the head are Chapter 63 only, reworded. Water Divination and the July 10 booking are in episode 35 and chapter 60; the unmoving dodges and the punch behind the shattered tile in chapter 61; the returned badge, Gyo and Bungee Gum in chapter 62; the rock, the loss and the promise of a fight to the death in chapter 63, all through episode 36.',
    },
    37: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_37_(2011)',
      note: 'Corrected after review: in Italian, “alla sua età” became “alla stessa età di Gon”. Episode 37 and chapters 64-65: the talk by the fire, Mito showing the box and telling what she knows, the grandmother on whose parents died, Gon calling his father Ging, the Nen and license boxes, the ring, memory card and cassette, and the tape’s question. Also read: Chapter 64, Chapter 65.',
    },
    38: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_38_(2011)',
      note: 'Episode 38 adapts chapter 66 and chapter 69, pages 1-16: the tape, the stop at his mother, the Nen that records over it, the console, the game’s price in billions, and Killua trading a copy of the card to Milluki for leads, among them copies at a Yorknew auction. Leaving the island is not in chapter 69 and is left out. Also read: Chapter 66, Chapter 69.',
    },
    42: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_42_(2011)',
      note: 'Corrected after review: “use all his strength” became “try for real to win”, as chapter 72 says only that Gon is forced to actually try. The Hunter website (seven copies, 8.9 billion) and the failed reselling are episode 41 and chapter 70; the phone, Leorio, the diamond worth 3 million and Shizuku forcing him to try for real are episode 42 and chapters 71-72. Also read: Episode 41 (2011), Chapter 70, Chapter 71, Chapter 72.',
    },
    48: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_48_(2011)',
      note: 'Corrected after review: “pawns his Hunter license” became “uses his Hunter license to raise money”: episode 48 does not adapt the pawn shop of chapter 84. The Southernpiece place log now says the same. The pawned license is chapter 84; the knife, the bids, the vault and the lunch are chapters 85-88, all by the end of episode 48. The second man who challenges Zepile at the dealer’s is anime-only. Checked on the episode page and the chapter pages.',
    },
    50: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_50_(2011)',
      note: 'Corrected after review: Gon refuses to tell them anything, as both media have him, without ordering the refusal and the question. “kick through” is one medium’s; they break out through the walls, as in Nobunaga’s story. Chapters 91-94 and episode 50. Checked on the episode page and the chapter pages.',
    },
    55: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_55_(2011)',
      note: 'Chapters 107-108 and episode 55. Why Gon asks for the chain differs between the media and is left out. Checked on the episode page and the chapter pages.',
    },
    59: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_59_(2011)',
      note: 'Episode 59 and Chapters 121–124 (opening pages): rejection, Wing’s advice and fist training. Corrected during authoring: chapter 124 completes the concentration; anime-only knockback omitted.',
    },
    60: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_60_(2011)',
      note: 'Episode 60 and Chapter 127: Entry and recorded message are chapter 127; the unnamed receptionist remains unnamed.',
    },
    61: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_61_(2011)',
      note: 'Episode 61 and Chapter 131: Chapters 128–131 cover first spells, restaurant and refusal; unnamed alliance members not named.',
    },
    63: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_63_(2011)',
      note: 'Episode 63 and Chapter 140: Chapter 140 completes digging/Shu; Binolt training chapters 138–139.',
    },
    65: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_65_(2011)',
      note: 'Episode 65 and Chapters 145–146: Rock, failed Paper and proposed Scissors. Independent verifier corrected chapter 145 to 146 because Scissors is explained in chapter 146.',
    },
    71: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_71_(2011)',
      note: 'Episode 71 and Chapter 169: Chapters 160–169: dodgeball concludes in chapter 169; no earlier gate covers victory.',
    },
    74: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_74_(2011)',
      note: 'Episode 74 and Chapter 182: Chapters 179–182 complete trap and healing; earlier chapter 181 alone lacks healing. Personal name of the Bomber is omitted because his record is manga-only.',
    },
    75: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_75_(2011)',
      note: 'Episode 75 and Chapter 185: Chapters 183–185 complete quiz, castle and exit. Destination identity not disclosed.',
    },
    77: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_77_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 77 (2011), Chapter 186. Independent verifier correction: narrowed to introductions and biological research supported by both Chapter 186 and Episode 77; omitted the manga-only night survey and observations of animal skills.',
    },
    81: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_81_(2011)',
      note: 'Read Episode 81 (2011) and Chapter 191. Author correction: leave Rammot unnamed because his manga naming gate is Chapter192. Independent verifier correction: the title leaves the rabbit-like ant unnamed before the Chapter 192 naming gate.',
    },
    82: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_82_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 82 (2011), Chapter 193. Independent verifier correction: prepares another attack; Chapter 193 has Kite shoot before the planned bite.',
    },
    83: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_83_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 83 (2011), Chapter 195.',
    },
    85: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_85_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 85 (2011), Chapter 198, Chapter 199.',
    },
    86: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_86_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 86 (2011), Chapter 201.',
    },
    87: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_87_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 87 (2011), Chapter 203.',
    },
    89: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_89_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 89 (2011), Chapter 207, Chapter 208, Chapter 209.',
    },
    91: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_90_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 90 (2011), Episode 91 (2011), Chapter 210, Chapter 211, Chapter 214.',
    },
    94: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_93_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 93 (2011), Episode 94 (2011), Chapter 217, Chapter 218.',
    },
    95: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_95_(2011)',
      note: 'Checked Chapter 222, Chapter 223, Episode 95 (2011).',
    },
    98: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_98_(2011)',
      note: 'Checked Chapter 230, Episode 98 (2011).',
    },
    99: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_99_(2011)',
      note: 'Checked Chapter 231, Chapter 232, Chapter 233, Episode 99 (2011). Independent verifier correction: Corrected finishing tactic: fallen tree and gust disable flying opponent, rather than one enemy used against the other.',
    },
    102: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_102_(2011)',
      note: 'Checked Chapter 241, Chapter 242, Episode 102 (2011).',
    },
    116: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_116_(2011)',
      note: 'Checked Chapter 273, Chapter 274, Chapter 275, Episode 116 (2011).',
    },
  },
  'mito-freecss': {
    1: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_1_(2011)',
      note: "Corrected after review: 'speechless' was invented, the page says she is dismayed; also linked Gon. Fish condition, night talk and the morning farewell with her grandmother are all in this episode.",
    },
    26: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_26_(2011)',
      note: 'Corrected after review: linked Gon. The recap letter (passed, unhappy about the final match, Kukuroo Mountain trip, one more piece of business, the framed photo) is all in this episode; kept at chapter 43 as an anime-only recap.',
    },
    37: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_37_(2011)',
      note: 'Episode 37 and chapters 64-65: the bath, the meal with her grandmother, Mito behind the boys with food while Gon calls her his mother, the month at home, the box, Ging leaving at Gon’s age and the accident that killed her parents. Her crying is anime-only; the condition on the box is not on the episode page. Also read: Chapter 64, Chapter 65.',
    },
  },
  'leorio-paradinight': {
    1: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_1_(2011)',
      note: "The captain's question, Leorio's money answer, the clan insult, the duel on deck and the rescue of Katzo are all in this episode; they make up the next day.",
    },
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: "Corrected after review: 'faster than anyone' became running past Gon and Killua, as the page says. The jacket, friend's death from a treatable illness and the wish to treat poor children for free are all here.",
    },
    5: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_5_(2011)',
      note: 'Leorio and Kurapika watch Hisoka wipe out the applicants, split up, Leorio returns, is knocked out by an uppercut and carried off by Hisoka.',
    },
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: "The page has Leroute's bets, the heartbeat check, dragging Majtani to the edge, his eye movements read from medical study, the 40 hours lost and the 2-1 lead.",
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "Satotz's account on the page covers Illumi's lecture, Leorio's shout at Killua, Leorio, Kurapika and Hanzo blocking the door, Killua's surrender and the killing of Bodoro.",
    },
    42: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_42_(2011)',
      note: 'Corrected after review: “use all his strength” became “try for real to win”, as chapter 72 says only that Gon is forced to actually try. Episode 42 and chapters 71-72: meeting Gon and Killua at the phone stall, talk of Nen and the game, his idea, the arm-wrestling contest for a 3-million diamond and the one challenger who makes Gon try for real. The haggling and the entry fee are chapter-only. Also read: Chapter 71, Chapter 72.',
    },
    49: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_49_(2011)',
      note: 'Corrected after review: the “so” is dropped: not being able to use Zetsu is not given as the reason for the split. The tip is chapter 88 and episode 48; the watch from a distance is chapter 89 and the split chapter 90, both in episode 49. Who pays the informants differs between the media and is left out. Checked on the episode page and the chapter pages.',
    },
    53: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_53_(2011)',
      note: 'Chapter 101 and episode 53. Who drinks at what age differs between the media and is left out. Checked on the episode page and the chapter pages.',
    },
    57: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_57_(2011)',
      note: 'Corrected after review: the order follows both media: he drives Kurapika after the Troupe until traffic stops him, and the boys are caught. The traffic is chapter 111 and episode 56; the lobby is chapter 112 and episode 57. The time on the radio is chapter-only. Checked on the episode page and the chapter pages.',
    },
    60: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_60_(2011)',
      note: 'Episode 60 and Chapters 124–126: departure, money to reclaim the license and farewell meal. Corrected during authoring: the money handover differs between media, so no handover person is claimed.',
    },
  },
  'kurapika': {
    1: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_1_(2011)',
      note: "On the page Kurapika states his Phantom Troupe motive and the license's access, then the duel and Katzo rescue.",
    },
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: 'The Scarlet Eyes, the seven most beautiful colors, the black-market plan and the pride exchange with Leorio are all in this episode.',
    },
    9: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_9_(2011)',
      note: 'The deathmatch with Majtani, the heart tattoos, the spider on his back, the scarlet eyes, the single punch and the three points are all here; he then sits alone.',
    },
    21: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_21_(2011)',
      note: "Corrected after review: he no longer 'asks the committee to review', the page only has him defending Killua as manipulated by Illumi. Pokkle's doubt about the Hisoka win, his refusal to answer and the departure for Kukuroo Mountain are here; the Hisoka forfeit and door block are recounted in episode 20.",
    },
    39: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_39_(2011)',
      note: 'Only the beats chapter 67 shares with episode 39: back at the agency after learning Nen, three employers tied to the auction, the collector of human body parts, the butler, the man on the screen, the month and the item, the locked door and the armed figures in black. The teacher and Water Divination are chapter 83 and wait for episode 47; Melody at the agency is anime-only. Also read: Chapter 67.',
    },
    40: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_40_(2011)',
      note: 'Corrected after review: “reveals the plan” is episode 40 only; chapter 68 has him reveal how he used his Nen, so he only talks, as Squala’s record log says. Episode 40 and chapter 68: the chandelier, the dagger and the count to three, Tocino’s test and the four who can leave, the Dowsing Chain reacting at Squala, Melody, Basho’s haiku and Baise’s kiss. Italian: Catena della Pressione (Italian Wikipedia, Kurapika). Also read: Chapter 68.',
    },
    44: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_44_(2011)',
      note: 'Corrected after review: he moves only after the fight, as both media show. Chapter 77 (pages 1-11) and episode 44. Italian: Catena della Prigionia (Italian Wikipedia, Kurapika Kurata). Checked on the episode page and the chapter pages.',
    },
    46: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_46_(2011)',
      note: 'Corrected after review: “the Nostrade family’s rooms” became where they are staying. Hisoka is chapters 78-79, the call to Light and the Hunter website chapter 79, Uvogin at the door chapter 80, all by the end of episode 46. Checked on the episode page and the chapter pages.',
    },
    47: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_47_(2011)',
      note: 'Corrected after review: “before the auction” dropped from the teacher’s lesson. “truthfully” dropped; episode 47 says only that the rule is to answer his questions. The teacher and Water Divination are chapter 83 and episodes 39 and 47; the fight is chapters 81-84 and episode 47. Italian: Materializzazione, Specializzazione, Test dell’Acqua (Italian Wikipedia). Checked on the episode page and the chapter pages.',
    },
    53: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_53_(2011)',
      note: 'Corrected after review: the leader’s death and the bodies are what Kurapika hears and the Mafia reports, not facts: both media have shown the leader alive by then (chapter 100, episode 53). “he no longer needs their help” is chapter-only; he calls Gon to tell him the members are dead. Chapters 100-101 and episode 53. Whether Kurapika sees the leader’s body himself differs between the pages and is left out. Checked on the episode page and the chapter pages.',
    },
    55: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_55_(2011)',
      note: 'The reunion, the message from Hisoka and Melody’s call are chapters 102-105 and episode 54; the plan and the chains are chapters 107-108 and episode 55. Meteor City is left unnamed. Checked on the episode page and the chapter pages.',
    },
    58: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_58_(2011)',
      note: 'Corrected after review: “unharmed” dropped (episode 58 only), as in Pakunoda’s story; Melody confirms that Killua is not being controlled. Chapters 117-119 and episode 58. His words on the airship after the exchange are chapter-only. Checked on the episode page and the chapter pages.',
    },
    59: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_59_(2011)',
      note: 'Episode 59 and Chapter 123: Chapter 123 contains the advice; no later departure details.',
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 149: Chapter 149 and episode 66 include phone call and Nostrade household.',
    },
  },
  'katzo': {
    1: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_1_(2011)',
      note: "Corrected after review: 'a wave' was invented and became the storm. Bullied by the crew, helped by Gon, hurried by the captain, saved by Gon with the two holding his legs, thanks them next day.",
    },
  },
  'kiriko': {
    2: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_2_(2011)',
      note: "Corrected after review: Gon's line was reversed; the page has him telling the Kiriko cornering him it is not the one he was chasing, then the Kiriko calls its partner and the couple reveal themselves as the offspring. The tattoo, the fake Leorio and the flight to the site are all here.",
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 148: Kiriko encounter begins episode 65/chapter 147 and ends at directions in episode 66/chapter 148.',
    },
  },
  'tonpa': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: "Tonpa's offer of help, the warning about Hisoka, the laxative juice, Kurapika pouring it out and his recalling Hanzo and Nicholas are all on the page.",
    },
    8: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_8_(2011)',
      note: 'Corrected after the PR review: the join, the vote against opening the door, the surrender and his admission to Leorio are all in the episode 8 summary; episode 9 only repeats them at its start.',
    },
    15: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_15_(2011)',
      note: 'Tonpa teams with Sommy, Leorio and Kurapika tie him to a rock with the sign, Kurapika takes his badge for six points and Leorio gets his own back.',
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 148: Chapter 148 and episode 66: return and total defeat, no invented individual attack.',
    },
  },
  'hisoka': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: "Tonpa's warning about the examiner Hisoka nearly killed, and the applicant whose arms disappear after bumping into him, are on the page.",
    },
    5: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_5_(2011)',
      note: "Hisoka plays examiner and sweeps the applicants, then Gon's rod hit, the neck hold, 'worthy of continuing' and carrying Leorio off.",
    },
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: 'Togari waiting with a grudge, the curved knives, Hisoka catching two blades and decapitating him, and being first through in six hours seventeen minutes.',
    },
    16: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_16_(2011)',
      note: "Gon's hook on the badge, Hisoka's smile, killing the thief, returning both badges, the punch and the condition are all in this episode.",
    },
    21: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_21_(2011)',
      note: 'Corrected after review: linked Killua. Hisoka appears behind Illumi, says the Zoldyck home is common knowledge and warns him off Gon, all in this episode.',
    },
    29: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_29_(2011)',
      note: 'The aura that stops them and the warning that they are not ready are in episode 28 and chapter 47; the walk through his aura with Ten, the welcome, the guess about Gon’s training, the shapes of aura between his fingers and the one-win condition are in episode 29 and chapter 48.',
    },
    32: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_32_(2011)',
      note: 'Corrected after review: he peels the tattoo off while drying himself after the shower; the meeting reminder was cut for length. Kastro’s hits, the severed right arm and the double are in episode 31 and chapters 52 and 53; the card trick, the reattached right arm, the flying arm and Kastro’s death in episode 32 and chapter 54; the woman’s stitches, Bungee Gum, Texture Surprise, the August 30 meeting and the fake spider tattoo in episode 32 and chapter 55.',
    },
    36: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_36_(2011)',
      note: 'Corrected after review: the rock tied to his aura and the blow to the head are Chapter 63 only, reworded. The punch from behind the tile is in episode 35 and chapter 61; the badge, the Enhancer guess and the personality talk in episode 36 and chapter 62; the Bungee Gum quiz, his thrill, the rock and the farewell about a fight to the death in episode 36 and chapter 63.',
    },
    41: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_41_(2011)',
      note: 'Corrected after review: “the newest member” and the title “The new member” are episode 41 only; chapter 71 says only that members No. 4 and 8 have changed, so the four talk about him and the members who have changed, as in Machi’s story. The fake tattoo and Machi’s call for noon on August 30 are episode 32 and chapter 55; the four members talking about him on the road and the leader’s order are episode 41 and chapter 71. Also read: Episode 32 (2011), Chapter 55, Chapter 71.',
    },
    46: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_46_(2011)',
      note: 'The leave to go is chapter 76 and episode 45; the meeting is chapter 78 and episode 45, the call and the Scarlet Eyes chapter 79 and episode 46. The leader is not named before episode 54. Checked on the episode page and the chapter pages.',
    },
    50: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_50_(2011)',
      note: 'Corrected after review: Feitan grabs only Gon; Killua steps forward on his own. Chapters 91-92 and episode 50. Gon’s surprise at seeing him is chapter-only. Checked on the episode page and the chapter pages.',
    },
    55: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_55_(2011)',
      note: 'Corrected after review: staying in Yorknew only might give him his chance. His fortune is chapter 105 and episode 54; the fake and what he has told Kurapika are chapter 106 and episode 55. His real fortune is told only at chapter 119 and episode 58. Italian: Tela Fantasma (Italian Wikipedia, as in #973). Checked on the episode page and the chapter pages.',
    },
    58: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_58_(2011)',
      note: 'Corrected after review: the text to Illumi says he no longer needs his help, since the stand-in it ends is left out. he does not reach Kurapika’s airship: he turns up at the airport as Pakunoda and the boys board. In Italian, “mentre il capo è in ostaggio”. The call to Illumi is chapter 115 and episode 57; the airship, the challenge and the text are chapters 118-119 and episode 58. The stand-in at the hideout and the removed tattoo are on the chapter pages only. Checked on the episode page and the chapter pages.',
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 149: Chapter 149 reveals alias and motive; participants left unspecified to avoid adaptation differences.',
    },
    68: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_68_(2011)',
      note: 'Episode 68 and Chapter 159: Chapters 157–159 cover encounter, deceptive account and altered binder.',
    },
    71: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_71_(2011)',
      note: 'Episode 71 and Chapter 169: Chapters 164–169; final rebound and victory in chapter 169.',
    },
    72: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_72_(2011)',
      note: 'Episode 72 and Chapter 170: Chapter 170 and episode 72: surveillance, replacement and negotiation. Exorcist unnamed because excluded record.',
    },
  },
  'hanzo': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: 'The juice scene: Gon and Leorio sense something wrong, Kurapika pours it out, Tonpa apologizes, leaves and remembers the applicants who did not take his bait, Hanzo and Nicholas. Corrected after the PR review: the ninja and scroll details, which the episode page does not show, were cut.',
    },
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: "Hanzo's requests to give up, the broken arm, the leg and death threats, Gon's answer about his father, his concession and the knockout punch.",
    },
  },
  'nicholas': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: 'Same scene as Hanzo: the episode page names Nicholas among those who did not take the bait, after the laxative juice. Corrected after the PR review: the laptop detail, which only his character page gives, was cut.',
    },
  },
  'satotz': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_3_(2011)',
      note: 'The episode page has the numbers handed out, Tonpa offering the juice, then Satotz introducing himself as the first examiner and telling them to follow him through the tunnel. Corrected after the PR review: closing registration, the life warning and the quickened pace were cut.',
    },
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: "At the swamp he is warned by the false examiner and a man dragging an ape, Hisoka's cards, Satotz catching them and the warning not to attack again.",
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "Satotz beside Gon's bed offers the handshake and license, Gon declines then accepts, and Killua is the only failure, with the matches recounted up to the Bodoro killing.",
    },
  },
  'killua': {
    4: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_4_(2011)',
      note: 'Corrected after review: it was not stated who proposed the race, so it now says they agree on it. Skateboard, same age, waiting for Leorio, reasons, the tie called by Satotz and the juice from episode 3 are here.',
    },
    7: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_7_(2011)',
      note: 'The page has the assassin family, the attack on his mother and brother, the ball game with Netero, hitting the leg and hurting himself, and killing the two examinees.',
    },
    11: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_11_(2011)',
      note: 'Johness removes his face cover, Leorio is alarmed, Killua tears out his heart, the score goes to 3-2 and a path opens.',
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: 'Corrected after review: it was ambiguous who Illumi threatens; the page says he decides to kill Gon and Killua surrenders. Pokkle forfeit, Illumi revealed as his brother and the Bodoro kill are all here.',
    },
    25: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_25_(2011)',
      note: "Episode 23 shows Killua chained and whipped by Milluki; episode 24 has Zeno freeing him and Silva's promise deal; episode 25 has him rejoining Gon, Kurapika and Leorio, so the story completes in 25 (chapter 43).",
    },
    27: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_27_(2011)',
      note: 'Episode 27 and chapters 44 and 45 have the empty wallet, his father leaving him there at six, the two years, the 180th-floor offer, the two neck strikes, the stance that makes him leap back, the win without a knockout, the brother comparison, the name Ren and the new goal of the top floor.',
    },
    29: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_29_(2011)',
      note: 'Wing’s Ren and Killua’s claim that he lied are in episode 28 and chapter 46; the barrier and the clerk’s midnight rule for his second chance in episode 28 and chapter 47; the opened nodes, the comparison with Illumi’s Nen, Ten and the walk through the barrier in episode 29 and chapter 48.',
    },
    34: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_34_(2011)',
      note: 'Corrected after review: Zushi knocked out, Killua behind Sadaso in the locker room and Riehlvelt fainting are chapter-only, reworded. The aura hand on Zushi, the free wins, the shoe at Gon’s door, the warning to Sadaso and the default win are in episode 33 and chapter 57; the warning to Gido and Riehlvelt and the main event (whips caught, the shock he is trained for, Riehlvelt thrown from the chair and caught) are in episode 34 and chapters 58 and 59.',
    },
    37: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_37_(2011)',
      note: 'Corrected after review: the episode and the chapter place the information-gathering differently, so Gon only goes to Yorknew City to start looking for his father. Episode 37 and chapter 64: the fire in the forest, Gon’s plan for Yorknew, Killua with no goal, the offer to travel together, and Gon’s answer about his mother. The family business and the mother like Mito are chapter-only. Also read: Chapter 64.',
    },
    49: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_49_(2011)',
      note: 'Corrected after review: in Italian, “per un lavoro” added, as in the English. His father’s words are chapter 80 (pages 17-18) and episode 49; the tail and the capture are chapters 89-91 and episode 49. Silva is linked only from chapter 95. Checked on the episode page and the chapter pages.',
    },
    50: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_50_(2011)',
      note: 'Corrected after review: Illumi’s voice now says he cannot win, as both media have it (“do not fight anyone stronger” is episode-only), and the two escape “both” rather than together. Chapters 92-94 and episode 50. Checked on the episode page and the chapter pages.',
    },
    55: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_55_(2011)',
      note: 'Chapters 107-108 and episode 55. Checked on the episode page and the chapter pages.',
    },
    57: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_57_(2011)',
      note: 'Chapters 112-114 and episode 57. Checked on the episode page and the chapter pages.',
    },
    60: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_60_(2011)',
      note: 'Episode 60 and Chapters 125–126: electrical demonstration and both boys passing. Independent verifier corrected chapter 125 to 126 to include Gon’s successful test.',
    },
    63: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_63_(2011)',
      note: 'Episode 63 and Chapter 140: Chapters 138–140 cover Binolt and Shu.',
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 148: Chapter 148 and episode 66 complete the exam, with all named participants already filed.',
    },
    67: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_67_(2011)',
      note: 'Episode 67 and Chapter 153: necklace dispels curse on villagers’ cards and yields reward. Corrected during authoring: removed later alliance meeting, which belongs to chapter 154.',
    },
    71: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_71_(2011)',
      note: 'Episode 71 and Chapter 169: Chapters 165–169 include hands, refusal of substitute, formation and victory.',
    },
    73: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_73_(2011)',
      note: 'Episode 73 and Chapter 178: Chapter 178 completes Killua’s fight; opponent excluded from filed cast, not named. Personal name of the Bomber is omitted because his record is manga-only.',
    },
    75: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_75_(2011)',
      note: 'Episode 75 and Chapter 185: Chapters 183–185: travel preparation, selected cards and departure; arrival identity omitted.',
    },
    77: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_77_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 77 (2011), Chapter 186. Independent verifier correction: narrowed to introductions and biological research supported by both Chapter 186 and Episode 77; omitted the manga-only night survey and observations of animal skills.',
    },
    81: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_81_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 81 (2011), Chapter 191.',
    },
    82: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_82_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 82 (2011), Chapter 193. Independent verifier correction: one arm is cut off, as Chapter 193 states; no claim of multiple severed limbs.',
    },
    83: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_83_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 83 (2011), Chapter 196.',
    },
    85: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_85_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 85 (2011), Chapter 198, Chapter 199.',
    },
    86: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_86_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 86 (2011), Chapter 201.',
    },
    89: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_89_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 89 (2011), Chapter 209, Chapter 210.',
    },
    91: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_90_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 90 (2011), Episode 91 (2011), Chapter 212, Chapter 214.',
    },
    94: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_94_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 94 (2011), Chapter 219.',
    },
    98: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_98_(2011)',
      note: 'Checked Chapter 230, Episode 98 (2011).',
    },
    101: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_101_(2011)',
      note: 'Checked Chapter 238, Chapter 239, Chapter 240, Chapter 241, Episode 101 (2011).',
    },
    107: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_107_(2011)',
      note: 'Checked Chapter 255, Episode 107 (2011).',
    },
    113: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_113_(2011)',
      note: 'Authoring correction: checked Chapter 269, Episode 113 (2011). Anime/chapter order differs here.',
    },
    116: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_116_(2011)',
      note: 'Checked Chapter 274, Chapter 275, Episode 116 (2011).',
    },
    119: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_119_(2011)',
      note: 'Checked Chapter 280, Chapter 281, Episode 119 (2011).',
    },
    124: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_124_(2011)',
      note: 'Checked Chapter 293, Chapter 294, Episode 124 (2011).',
    },
  },
  'menchi': {
    6: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_6_(2011)',
      note: 'Corrected after review: the page has Menchi asking Netero to take the applicants to Split Mountain, so the text no longer has her leading them. The roast pork test, failing everyone, admitting her temper and the egg demonstration are here.',
    },
  },
  'buhara': {
    6: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_6_(2011)',
      note: 'The roast pork order, the Great Stamp hunt, knocking out the applicant who attacks Menchi and saying she would have killed him are in this episode and on his page.',
    },
  },
  'netero': {
    6: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_6_(2011)',
      note: "Corrected after review: 'alone' was invented and removed, and Netero now tells Menchi to design a new task rather than simply agreeing. Airship, crater landing and her admission are here.",
    },
    7: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_7_(2011)',
      note: 'Corrected after review: he appears from the opposite direction in the corridor, not behind them. The introduction, the ball challenge, and Gon forcing the other arm are here.',
    },
    21: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_21_(2011)',
      note: 'Both defences of Killua, Netero calling them guesses, his agreeing Killua would pass again and declaring the seven Hunters are all in this episode.',
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 148: Chapter 148 and episode 66: examiner’s phone call and decision.',
    },
    85: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_85_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 85 (2011), Chapter 199.',
    },
    86: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_86_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 86 (2011), Chapter 201, Chapter 202.',
    },
    88: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_88_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 88 (2011), Chapter 205.',
    },
    92: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_92_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 92 (2011), Chapter 215.',
    },
    111: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_111_(2011)',
      note: 'Checked Chapter 265, Episode 111 (2011).',
    },
    122: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_122_(2011)',
      note: 'Checked Chapter 287, Chapter 290, Episode 122 (2011).',
    },
    126: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_126_(2011)',
      note: 'Checked Chapter 291, Chapter 292, Chapter 296, Chapter 297, Chapter 298, Episode 126 (2011).',
    },
  },
  'lippo': {
    8: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_8_(2011)',
      note: 'Checked against the episode page: the warden explains majority rule and the fifth member, sends the prisoners to their positions, then states the three-win, no-draw and year-per-hour rules before the first match.',
    },
  },
  'bendot': {
    8: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_8_(2011)',
      note: 'Checked: Bendot is the first prisoner (199 years, robbery and murder); Tonpa volunteers, gives up at once and says he only wants to screw people over; Leorio is upset.',
    },
  },
  'sedokan': {
    8: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_8_(2011)',
      note: 'Checked: Sedokan is introduced as the second prisoner (149 years, serial bombings), Gon volunteers, and 39 of 40 applicants remain. Corrected after review: Bendot is now linked, since he is filed at the same episode.',
    },
    9: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_9_(2011)',
      note: "Checked: candle match, Gon takes the longer oil-soaked candle, it burns fast, he sets it down, sprints and blows out Sedokan's.",
    },
  },
  'majtani': {
    9: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_9_(2011)',
      note: "Checked: no-weapons deathmatch, multiple heart tattoos counting his kills, spider on his back, Kurapika's scarlet eyes, one-punch knockout and the three things he tells him. Corrected after review: removed the invented 'on his chest' and 'one for each victim' (the wiki only says hearts that number his kills).",
    },
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: "Checked: the opponent says the match is not over, Majtani is faking on a note's orders, Leorio drags him to the platform edge, he bolts, admits the loss and says he is safer in prison. Chapter 20 is where the wager and the fall happen.",
    },
  },
  'leroute': {
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: 'Checked: she objects that the match is unfinished, Lippo gives her 112 years for animal trafficking and gambling, 10-hour bet lost, 20 then 40-hour bet won, Leorio leads 2-1. Corrected after review: Majtani is now linked.',
    },
    11: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_11_(2011)',
      note: 'Checked: she bets on her own gender and lets Leorio check, stakes 80 hours on rock-paper-scissors, Leorio throws rock twice and loses; the wiki gives his group a 50-hour penalty.',
    },
  },
  'johness': {
    11: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_11_(2011)',
      note: 'Checked: Lippo removes his handcuffs, the other prisoners step back, Leorio recognizes him, Killua takes his heart, he dies, score 3-2.',
    },
  },
  'togari': {
    10: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_10_(2011)',
      note: 'Checked: ex-examiner waiting for Hisoka over the scars from last year, curved knives, Hisoka catches two and decapitates him, first through the Third Phase. Chapter 19 contains the whole fight.',
    },
  },
  'khara': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_14_(2011)',
      note: "Checked: steamboat to Zevil Island, 24 applicants, two-hour trip, invitation to next year's exam, silence, landing order two minutes apart starting with Hisoka, one week, six points.",
    },
  },
  'amori': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Amori',
      note: 'Checked: Tonpa points out the brothers as regulars (chapter 5 names them collectively as the Amori Brothers; the gate table has episode 3 name each). Dated 3 / 29: the names are told at chapter 29 in the manga. Warning about Hisoka from the Episode 3 (2011) page.',
    },
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: 'Checked: Amori and Umori come to see if the youngest has taken the badge, scold him, form up, Killua appears behind Amori and holds him hostage (chapter 29).',
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 148: Chapter 148 and episode 66 explicitly show boast and brothers abandoning future attempts.',
    },
  },
  'umori': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Amori',
      note: 'Checked: Tonpa, on his 35th attempt (Chapter 5 page), points out the three brothers (their teamwork is left out, being chapter 5’s alone); the trio has just received badges from Beans (Episode 3 (2011) page). Dated 3 / 29 for the manga naming.',
    },
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: "Checked: Umori hands over the badge when Amori is held hostage and Killua throws the other badges far away. Corrected after review: dropped the unsupported 'che ha in mano / he is holding'.",
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 148: Chapter 148 and episode 66 explicitly show boast and brothers abandoning future attempts.',
    },
  },
  'imori': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Amori',
      note: 'Checked: Tonpa introduces the regulars he knows, the three brothers among them, who take the exam together (teamwork left out, being chapter 5’s alone); the Hisoka warning is on the Episode 3 (2011) page. Dated 3 / 29 for the manga naming.',
    },
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: "Checked: Imori has stalked Killua planning to strike while he sleeps, is forced forward by his brothers, kicks him, and Killua pulls Imori's own badge from his pocket (not his target).",
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 148: Chapter 148 and episode 66 explicitly show boast and brothers abandoning future attempts.',
    },
  },
  'ponzu': {
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: "Checked: Leorio seeks #246 Ponzu, Gon tracks her chemicals to a cave, Leorio is bitten, Ponzu explains Bourbon's snake trap and says he is dead (chapter 30).",
    },
    18: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_18_(2011)',
      note: "Checked: she explains the bee fight, waits for the tracker rescue, trades sleeping gas for Bourbon's badge, Gon holds his breath, returns it and keeps hers. Corrected after review: chapter 32 to 31, since the cave scene is complete in chapter 31 and chapter 32 is the airship.",
    },
    80: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_80_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 80 (2011), Chapter 190.',
    },
  },
  'bourbon': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Bourbon',
      note: 'Checked: Tonpa introduces Bourbon as a snake charmer and veteran who has taken the exam many times (chapter 5; “never gives up” left out, being chapter 5’s alone; the gate table has episode 3 name him as a snake charmer). The Hisoka warning is in both.',
    },
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_17_(2011)',
      note: 'Checked: the snake trap in the cave, Leorio bitten, Gon and Kurapika run in, Ponzu says Bourbon is already dead yet the trap holds (chapter 30).',
    },
  },
  'gittarackur': {
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: 'Checked: needles kill Goz as he charges Hisoka, features change when he pulls the pins, hands Hisoka a badge, sleeps in a hole, reaches the nine finalists. Events are from episode 15 and are known by the end of 19.',
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "Checked: Satotz recounts the match; Gittarackur is Illumi, Killua's older brother; says Killua should be an assassin; threatens Gon; blocked at the door by Hanzo, Kurapika and Leorio; Killua yields and he says he lied.",
    },
  },
  'pokkle': {
    '18': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_14_(2011)',
      note: 'Checked: Pokkle stalks an applicant in tall grass with Gon watching, the arrow only cuts him, the tranquilizer drops him, the water remark and the badge taken (episode 14, chapter 24); Gon resolves to stalk Hisoka the same way. Dated 18 / 24: his name is first said in the episode 18 roll call.',
    },
    '19': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: 'Checked: the nine finalists, three days of rest, the hotel as the Final Phase venue, the one-on-one bracket where one win passes, winners leave and only one fails (chapter 33). Corrected after review (#833): the arrow scene moved to the 18 / 24 story.',
    },
    '20': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "Checked: Satotz's account has Hanzo beat him with the same tactic and Killua forfeit the fifth match. Corrected after review: removed 'becomes a Hunter', since the dossier files that at episode 21.",
    },
    '80': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_80_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 80 (2011), Chapter 190.',
    },
    '84:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_197',
      note: 'Read the MediaWiki API synopses: Chapter 197, Chapter 198.',
    },
    '84:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_84_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 84 (2011). The episode synopsis does not establish his death, so the anime story stops at the interrogation.',
    },
  },
  'bodoro': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Bodoro',
      note: 'Checked: anime only (source episode). The Bodoro page has Tonpa introduce him as the kung fu master in Episode 3 (2011); chapter 5 does not name him, so the story is not told to manga readers.',
    },
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: "Checked: Bodoro refuses to fight children in Netero's interview (episode 18), and the bracket rules are explained in episode 19.",
    },
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: 'Checked: Hisoka whispers and Bodoro yields, the Leorio match is postponed for his injuries, Killua kills him from behind. Corrected after review: it is Killua, not Bodoro, who is disqualified.',
    },
  },
  'coco-loo': {
    22: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_22_(2011)',
      note: 'Bus ride, her warning at the gate, two intruders killed, tourists fleeing while the three friends stay and meet Zebro.',
    },
  },
  'zebro': {
    22: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_22_(2011)',
      note: 'Zebro refuses the key, is revealed as the cleaner, opens the first door, phones a butler, and escorts them in calling the dog.',
    },
    23: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_23_(2011)',
      note: 'Zebro leads them to the quarters, sets the 50 kg vests, apologizes for his colleague, and the three open the gate; he admits never having gone up the mountain.',
    },
  },
  'mike': {
    22: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_22_(2011)',
      note: 'Zebro calls the dog after the gate opens; the earlier warning explains its orders; the trio freeze, Gon insists on going on.',
    },
  },
  'seaquant': {
    23: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_23_(2011)',
      note: 'Introduced by Zebro, scoffs and warns, later gives tips and doubts they will win.',
    },
  },
  'canary': {
    24: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_24_(2011)',
      note: 'Ep 23 wiki page covers the line, the blows, the punched block and her tears; the apple and friendship flashback is on ep 24. Corrected after review: dropped the claim that she refused friendship because she served him.',
    },
  },
  'milluki': {
    23: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_23_(2011)',
      note: 'Whips the chained Killua, reports him unrepentant to the mother, is stopped by her.',
    },
    24: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_24_(2011)',
      note: "Whipping, apology for the stabbing, mother's phone call, Zeno freeing Killua, Milluki's talent remarks and the mosquito bomb. Corrected after review: made clear he accuses Zeno of spoiling Killua.",
    },
    40: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_40_(2011)',
      note: 'The call and the deal are episode 38 and chapter 69, pages 1-16; the address sent by bird (an eagle in the episode, a hawk in chapter 70) closes episode 40. Also read: Episode 38 (2011), Chapter 69, Chapter 70.',
    },
    60: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_60_(2011)',
      note: 'Episode 60 and Chapter 124: Chapter 124 concludes auction and Milluki’s meal; episode 60 completes the sequence.',
    },
  },
  'zeno': {
    24: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_24_(2011)',
      note: 'Zeno enters the cell, frees Killua, exchange with Milluki about talent.',
    },
    52: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_52_(2011)',
      note: 'Corrected after review: Silva warns Zeno, by name, so that “him” cannot be read as the leader. as in Silva’s story, Silva warns that the leader can steal abilities, and Zeno works out the book and its conditions. The warning is chapter 98, the fight chapters 98-99, both in episode 52. His dragon is chapter-only on the pages, so the story says only that he fights with his aura. Checked on the episode page and the chapter pages.',
    },
    53: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_53_(2011)',
      note: 'Corrected after review: “if they had kept fighting” is episode wording; the leader only asks who would have won. Chapter 100 and episode 53. Checked on the episode page and the chapter pages.',
    },
    111: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_111_(2011)',
      note: 'Checked Chapter 263, Chapter 264, Episode 111 (2011).',
    },
    114: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_114_(2011)',
      note: 'Authoring correction: checked Chapter 268, Chapter 271, Episode 114 (2011). Anime/chapter order differs here.',
    },
    117: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_117_(2011)',
      note: 'Checked Chapter 278, Episode 117 (2011).',
    },
  },
  'silva': {
    24: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_24_(2011)',
      note: 'Unanchored, chapter 95 pinned. Ep 24 and ch. 42 both have the question about his friends, the difference he saw when Killua ran away, the promise never to betray them, letting him go, and the mother told he will come back. Corrected after the verifier pass: the seat beside him, the Hunter Exam question, the bitten thumb and the father-and-son words are ch. 42 only and were cut.',
    },
    52: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_52_(2011)',
      note: 'Corrected after review: Silva is the one who warns that the leader can steal abilities; Zeno works out the book and its conditions. The hire is chapter 95 and episode 51; the fight is chapters 98-99 and episode 52. The leader is not named before episode 54. Checked on the episode page and the chapter pages.',
    },
    53: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_53_(2011)',
      note: 'Chapter 100 and episode 53. Checked on the episode page and the chapter pages.',
    },
    117: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_117_(2011)',
      note: 'Checked Chapter 278, Episode 117 (2011).',
    },
  },
  'kalluto': {
    24: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_24_(2011)',
      note: 'Ep 23 shows him entering the cell room and watching from the bushes; ep 24 has his mother introduce him and him asking Gon who he is before leaving. Filed at the later episode.',
    },
    72: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_72_(2011)',
      note: 'Episode 72 and Chapter 170: Chapter 170 and episode 72 establish membership and finding exorcist, not later motives.',
    },
    97: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_97_(2011)',
      note: 'Authoring correction: checked Chapter 225, Chapter 226, Chapter 227, Chapter 228, Episode 97 (2011). Anime/chapter order differs here.',
    },
  },
  'gotoh': {
    25: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_25_(2011)',
      note: "The coin guessing game, the rules and threat, Gon's final round and the butlers' apology.",
    },
  },
  'masta': {
    19: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_19_(2011)',
      note: "Ep 19 page: the nine remaining applicants, one win being enough, the losers moving up the bracket, Netero explaining and the first match being Gon against Hanzo; Masta's refereeing is from his page (ch. 33), which ep 19 adapts. Corrected after the PR review: his lines to Hanzo, which the episode page does not show, were cut.",
    },
  },
  'illumi': {
    20: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_20_(2011)',
      note: "Satotz recounts the match, Illumi's reveal, threat, blockade at the door, Killua's forfeit.",
    },
    21: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_21_(2011)',
      note: "Gon breaks his arm, demands Killua's whereabouts, Illumi gives in, Hisoka's warning.",
    },
    53: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_53_(2011)',
      note: 'Chapter 100 and episode 53. Maha is manga-only; the leader is not named before episode 54. Checked on the episode page and the chapter pages.',
    },
    94: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_94_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 94 (2011), Chapter 219.',
    },
  },
  'kite': {
    76: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_76_(2011)',
      note: "Ep 76 flashback and the Kite page (ch. 1): Whale Island, foxbear mother killed, scolding, Gon stopping the cub's killing, Kite asking if Ging is his father. Corrected after review: removed the claim that he tells Gon his father is a living Hunter, which the wiki dates later.",
    },
    77: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_77_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 77 (2011), Chapter 186. Independent verifier correction: narrowed to introductions and biological research supported by both Chapter 186 and Episode 77; omitted the manga-only night survey and observations of animal skills.',
    },
    80: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_80_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 80 (2011), Chapter 190.',
    },
    82: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_82_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 82 (2011), Chapter 192, Chapter 193, Chapter 194.',
    },
    83: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_83_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 83 (2011), Chapter 196.',
    },
    85: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_85_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 85 (2011), Chapter 198, Chapter 199.',
    },
    95: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_95_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 95 (2011), Chapter 222.',
    },
  },
  'kon': {
    76: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_76_(2011)',
      note: 'Debut in the ep 76 flashback; Kon page (ch. 1): mother killed, Kite wants to put the cub down, Gon vows to raise it. Corrected after review: removed the invented arm scratch and the pick-up.',
    },
  },
  'ging-freecss': {
    37: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_37_(2011)',
      note: "Checked against the episode page and chapters 64-65: the only children on the island, the village searching for Mito and Ging finding her, leaving at Gon's age, the return ten years later carrying Gon, the grandmother and the separation, the Nen and license boxes, the ring, memory card and cassette, and the tape's question. Corrected after review: 'cousin', 'baby', 'only' and the box's hand-over condition are not on the episode page; 'breaks' became neutral 'comes off'. Manga-only lines left out: Mito taking the boy, the steel sticks, the ring warning. Also read: Chapter 64, Chapter 65, Chapter 66.",
    },
    60: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_60_(2011)',
      note: 'Episode 60 and Chapter 127: Chapter 127 contains the recorded message; no later game-master identities named.',
    },
    75: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_75_(2011)',
      note: 'Episode 75 and Chapter 184: castle friends explain creators’ initials and Ging changing a companion’s name to make the title fit. Added after independent verification to cover Ging’s later creation flashback separately from his recorded message.',
    },
  },
  'todo': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_5',
      note: "Checked: Tonpa points out the regulars to the trio, Todo among them as a strong wrestler (chapter 5; Episode 3 (2011) per the gate table). Tonpa's remark on his wits is left out, being manga-only.",
    },
    6: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_6_(2011)',
      note: "Checked: Menchi fails everyone, Todo berates her (the table he smashes is left out, since only the episode page gives it), she dismisses him, he charges, Buhara knocks him away and says Menchi would have killed him, Netero sets the egg retest, Todo tastes Gon's egg and vows to return next year. Also read: Chapter 12.",
    },
  },
  'geretta': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_5',
      note: 'Checked: Tonpa, on his 35th attempt, names Geretta among the regulars and warns the trio about Hisoka. The blowdart and club description is left out of the story and the dossier, being chapter 5’s alone.',
    },
    16: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_16_(2011)',
      note: "Checked: Geretta paralyzes Gon with a dart after Gon hooks Hisoka's badge, says how often he could have struck, praises his training, takes both badges; Hisoka comes back having killed him, his target. The severed head (manga) and the body (anime) are not described. Also read: Chapter 28.",
    },
  },
  'cherry': {
    3: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_5',
      note: 'Checked: manga only. Tonpa lists Cherry (#76) as a martial artist and the best at unarmed combat among the regulars.',
    },
    5: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_10',
      note: 'Checked: Hisoka attacks the group, Cherry, Kurapika and Leorio flee in three directions; chapter 10 opens on his body hanging upside down from a tree with cards in neck and forehead as birds approach. Manga only. Also read: the Cherry page (chapter 9).',
    },
  },
  'goz': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_23',
      note: "Checked: Lippo's lottery in finishing order, cards with target badge numbers, badges hidden and silence on the boat, one week and six points. Goz's spear is on the Goz page (chapter 23). Manga only.",
    },
    15: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_26',
      note: 'Checked: the wounded Goz challenges Hisoka, cuts trees, Hisoka dodges and says the dead do not interest him, needles kill Goz, the needle man says he let him escape and takes badge #371 while Gon hides. Manga only.',
    },
  },
  'agon': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_23',
      note: 'Checked: lottery outside the tower, landing in finishing order two minutes apart starting with Hisoka, Agon seventh ashore, one week and six points, the target worth three. Manga only.',
    },
    16: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_28',
      note: "Checked: bloodlust Hisoka picks Agon, card in hand; Agon draws his sword; Gon hooks the badge as they pass; the wound opens on Agon's shoulder (death per the Agon page). Manga only. Also read: Chapter 27.",
    },
  },
  'siper': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_23',
      note: "Checked: Khara's congratulations and the invitation to next year, barely any reaction, badges hidden and eyes avoided. The square sunglasses follow her design on the Siper page; the rifle is held back to chapter 26. Manga only.",
    },
    15: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_26',
      note: 'Checked: after killing Goz, the needle man offers Hisoka badge #80 from one of the snipers he killed over the use of a gun; Hisoka keeps it and still needs two points. The death is reported, not shown. Manga only.',
    },
  },
  'ryu': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_23',
      note: 'Checked: the lottery and the scoring (target 3, own badge 3, others 1, six to pass). The broadsword is on the Ryu page (chapter 23). Manga only.',
    },
    18: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_32',
      note: "Checked: the end announcement, one hour to return, no trading at the landing, nine finalists by the water. Ryu's lost fight with Bodoro (not named before chapter 33) is on the Ryu page, cited to chapter 32. Manga only.",
    },
  },
  'kyu': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_24',
      note: "Checked: Kyu senses a follower, Pokkle's arrow grazes his arm, he drops his sword and collapses, weak for days, water nearby, badge #105 taken, Gon watching from a tree. Dated 14 / 24 because chapter 23 shares episode 14. Manga only. Also read: the Kyu and Pokkle pages.",
    },
    15: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_25',
      note: 'Checked: Gon follows two butterflies on a line toward the wounded Hisoka, finds Kyu still drugged, helps him sit up against a tree and wishes him luck next year. Manga only.',
    },
  },
  'shishito': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_23',
      note: 'Checked: on the boat he wonders who has his number; cards with target numbers, badges hidden, silence. Manga only. Also read: the Shishito page.',
    },
    18: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_32',
      note: "Checked: Amori and Umori took his badge (chapter 29), Hanzo takes the brothers' two remaining badges (chapter 32), nine finalists at the landing. Manga only. Also read: the Shishito and Amori pages.",
    },
  },
  'kenmi': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_23',
      note: "Checked: Khara's congratulations, two-hour trip, the invitation to next year, no reaction. The shaved head is on the Kenmi page. Manga only.",
    },
    17: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_29',
      note: 'Checked: while Imori stalks Killua, Amori and Umori hunt Shishito and Kenmi and take their badges (chapter 29 per the Kenmi page), then they find Imori still hiding. Manga only. Also read: the Kenmi and Amori pages.',
    },
  },
  'sommy': {
    14: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_23',
      note: 'Checked: lottery in finishing order starting with Hisoka, cards may be thrown away once recorded, badges hidden on the boat. Manga only.',
    },
    15: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_25',
      note: "Checked: Tonpa shows card #191 and trades the information for medicine, Sommy strikes with a branch, his monkey grabs Leorio's badge, the cards were swapped, Sommy escapes up a tree; Kurapika and Leorio tie him up and recover the badge plus Sommy's. Manga only. Also read: Chapter 26.",
    },
  },
  'zushi': {
    27: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_27_(2011)',
      note: 'The episode page and Chapter 45 both have the elevator talk about Shingen-ryu, the 57th-floor match with the crowd favoring Zushi, the two neck strikes, the stance that sends Killua back, Wing’s shout, Killua winning without a knockout and the flashback apology over Ren. The bow to the floor is the manga’s prostration and the anime’s hands and knees.',
    },
    28: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_28_(2011)',
      note: 'Zushi lists the four principles at the end of Episode 27; the unsteady Ten, his question about the lie, the real Nen only for pupils and the page that cuts the can are in Episode 28 and Chapter 46. Zushi’s complaint about his book and juice is manga-only and left out.',
    },
    33: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_33_(2011)',
      note: 'Episode 33 and Chapters 56–57 have the start of the joint training two months after the Gido match, Zushi’s tiring Gyo, Sadaso’s aura arm, Killua’s promise of free wins and his overnight Gyo the next day. Who left the shoe differs between the pages, so the shoe is left out.',
    },
  },
  'wing': {
    27: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_27_(2011)',
      note: 'Corrected after review: the reason for the praise differs between the pages, so it is left out. Episode 27 and Chapter 45 both have Wing praising Zushi, introducing himself surprised to see other boys, the advice to be careful and the shout from the stands; the four principles, Killua linking Ren to his brother and the invitation close Episode 27 and open Chapter 46.',
    },
    29: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_29_(2011)',
      note: 'The false lesson, Hisoka’s barrier, the offer and the damaged wall are Episode 28 and Chapters 46–47; the reason about the 200th-floor initiation, the forced opening, the instant Ten, the hostile-aura test and the walk through the barrier are Episode 29 and Chapter 48.',
    },
    35: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_35_(2011)',
      note: 'Episode 35 and Chapter 60 both have the six types with Hisoka, Gido and Kastro as examples, Water Divination with the three results, the secret Hunter Exam, Netero heading Shingen-ryu and the advice to Killua. Wing’s own type and Gon’s cracked glass are only on the chapter page and are left out.',
    },
    59: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_59_(2011)',
      note: 'Episode 59 and Chapter 123: Chapter 123 phone call; no unsupported later ability interpretation.',
    },
  },
  'gido': {
    29: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_29_(2011)',
      note: 'The three fighters asking the newcomers for a match are Chapter 48 and Episode 29; the next-day booking, the four-and-one record, the tops on the cane, Battle Waltz, the clean hit in the back and the tops spinning for hours beyond his own control are Chapter 49 and the end of Episode 29.',
    },
    30: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_30_(2011)',
      note: 'Corrected after review: Tornado Top throwing Gon out of the ring is Chapter 50 only, reworded; Gon falls into Zetsu without knowing it. Battle Waltz opens the match in Episode 29 and Chapter 49; the hits, the top outside the ring, Tornado Top, Gon’s Zetsu, Killua’s warning and the broken arm are Episode 30 and Chapters 50–51. The hour of dodging and the fifty tops are only in Chapter 51 and are left out.',
    },
  },
  'kastro': {
    31: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_31_(2011)',
      note: "Episode 31 and chapter 52 both have the loss two years earlier, the nine wins one short of the Floor Masters, Killua's Zetsu visit with Kastro appearing behind him and keeping his trick secret, the thanks before the match and the first hit Hisoka seems to dodge. The three-of-four points and the agreed date are chapter-only, so the story says only that he scored the most.",
    },
    32: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_32_(2011)',
      note: 'The knockdown, the Tiger Bite Fist on the right arm and the Double reveal are in episode 31 and chapter 53; the card trick, the left arm, the reattached right arm, the spotless double, the flying arm and the cards that kill him are in episode 32 and chapter 54. Machi and the explanation of the trick (chapter 55) are left out.',
    },
  },
  'sadaso': {
    33: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_33_(2011)',
      note: "Episode 33 covers chapters 56–57: the trio pressing Gon and Killua two months after the Gido match, the aura-hand ambush on Zushi, Killua's offer of default wins and warning, and Gido's threatening call to Gon. The trio's habit of picking on newcomers is in episode 29 and chapters 48–49 and in chapter 56.",
    },
    34: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_34_(2011)',
      note: "The ticket seller and Killua's threat are in episode 33 and chapter 57; the call warning his companions closes episode 33 and opens chapter 58; his withdrawal and Gon's default win are in episode 34 and chapter 58. The knife and the mirror are chapter-only and left out.",
    },
  },
  'riehlvelt': {
    34: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_34_(2011)',
      note: "Corrected after review: linked Killua. Episode 34 covers chapters 58–59: Sadaso's call, Killua's warning in the room, the match with Killua (Aura Burst, whips caught, electricity endured, the catch) and the match with Gon (flagstone, Aura Burst, whips around the neck, fainting from fear). Both matches end in chapter 59.",
    },
  },
  'melody': {
    40: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_40_(2011)',
      note: 'Episode 40 and chapter 68: the chain at Squala, his heart speeding up, the rhythm of a liar, his distrust of Kurapika and Melody, Basho’s haiku and the confession. Also read: Chapter 68.',
    },
    42: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_42_(2011)',
      note: 'Episode 42 adapts chapter 73, pages 1-9: the front entrance, the rage in Kurapika’s heart, his people’s eyes, the devil’s sonata, the arm, the friend who played it on the flute and died, her hearing, and her wish to destroy it. Also read: Chapter 73.',
    },
    44: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_44_(2011)',
      note: 'Chapter 77 (pages 1-11) and episode 44. Her finding Machi’s needle is chapter-only. Checked on the episode page and the chapter pages.',
    },
    56: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_56_(2011)',
      note: 'Chapters 109-111 and episode 56. What she says to calm Kurapika differs between the pages. Checked on the episode page and the chapter pages.',
    },
  },
  'basho': {
    40: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_40_(2011)',
      note: 'Corrected after review: the Italian second haiku reworded. Episode 40 and chapter 68: the punch that tells him the figures are aura, the haiku that sets a chair alight at his touch, the second haiku against liars and Squala’s confession. Also read: Chapter 68.',
    },
    51: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_51_(2011)',
      note: 'Neon’s escape is chapter 94 and episode 51; the call and the chain are chapter 95 and episode 51. Checked on the episode page and the chapter pages.',
    },
  },
  'baise': {
    40: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_40_(2011)',
      note: 'Corrected after review: “reveals the plan” is episode 40 only; chapter 68 has him reveal how he used his Nen, so he only talks, as Squala’s record log says. Episode 40 and chapter 68: Squala refusing to give his orders even under torture, and the kiss that makes him her servant. Also read: Chapter 68.',
    },
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'The attack on the auction is chapter 73 (pages 10-19) and episode 43. Feitan and Franklin are named only from chapters 74 and 76, so the two on the stage stay unnamed. Checked on the episode page and the chapter pages.',
    },
  },
  'squala': {
    40: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_40_(2011)',
      note: 'Corrected after review: “reveals the plan” is episode 40 only; chapter 68 has him reveal how he used his Nen, so he only talks, as Squala’s record log says. Episode 40 and chapter 68: the chain, Melody hearing his heart, his denial and distrust, Basho’s haiku, his confession and introduction, the refusal under torture and Baise’s kiss. Also read: Chapter 68.',
    },
    46: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_46_(2011)',
      note: 'Chapter 79 and episode 46. The hotel is not named before episode 57. Checked on the episode page and the chapter pages.',
    },
    56: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_56_(2011)',
      note: 'Corrected after review: the traffic is chapter 111 only (episode 56 has Nobunaga in front of his car), so the Troupe members just stop his car; he leaves with the eyes Neon bought, which the Troupe’s copies lead to. Chapters 109-112 (pages 1-8) and episode 56. The hotel is not named before episode 57. Checked on the episode page and the chapter pages.',
    },
  },
  'shachmono-tocino': {
    40: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_40_(2011)',
      note: 'The locked door and the armed figures are episode 39 and chapter 67; Kurapika exposing him, the dagger and the count, his test and the four who can leave are episode 40 and chapter 68. Also read: Episode 39 (2011), Chapter 67, Chapter 68.',
    },
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'Chapter 73 (pages 10-19) and episode 43. Checked on the episode page and the chapter pages.',
    },
  },
  'dalzollene': {
    41: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_41_(2011)',
      note: 'Corrected after review: in Italian “la loro protetta” became “il loro capo”, the boss of both media. The screen and the item from a list are episode 39 and chapter 67; the hiring, the escort to a hotel in Yorknew, the question about enemies, the figure in the frame and the girl on the bed are episode 41 and chapter 70. Also read: Episode 39 (2011), Chapter 67, Chapter 70.',
    },
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'Kurapika’s report is chapter 74, the canyon and Worm chapter 75 (pages 1-16), both in episode 43. Checked on the episode page and the chapter pages.',
    },
    45: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_45_(2011)',
      note: 'Corrected after review: episode 45 names no single killer, so Phinks and the other members kill him together. Chapter 78 and episode 45. Checked on the episode page and the chapter pages.',
    },
  },
  'neon-nostrade': {
    41: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_41_(2011)',
      note: 'Corrected after review: “the auction is too dangerous for her” is episode 41 only; both media show her father having her kept away from it. The escort and the fortunes for her father’s friends are episode 41 and chapter 71; Dalzollene’s call to her father and the order to keep her away are chapter 72, pages 4-6, in episode 41. Also read: Chapter 71, Chapter 72.',
    },
    51: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_51_(2011)',
      note: 'Corrected after review: “checkpoints” became “security”. the famous fortune-teller she saw as a child, later a fraud, is what both media give; she became a fortune-teller anyway. Chapters 94-96 and episode 51. The leader is not named before episode 54; the fortune’s lines differ between the media and are left out. Checked on the episode page and the chapter pages.',
    },
    53: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_53_(2011)',
      note: 'Corrected after review: “at the auction” dropped from the knockout. Chapters 100-101 and episode 53. Checked on the episode page and the chapter pages.',
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 149: Chapter 149 and episode 66 confirm continuing loss; does not claim Neon understands the theft.',
    },
  },
  'machi': {
    41: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_41_(2011)',
      note: 'Corrected after review: “a new member” became the members who have changed, as chapter 71 says. The Nen threads on Hisoka’s arms and the call for noon on August 30 are episode 32 and chapter 55; the four on the road, the first gathering in over three years, the talk of Hisoka and the order are episode 41 and chapter 71. Also read: Episode 32 (2011), Chapter 55, Chapter 71.',
    },
    45: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_45_(2011)',
      note: 'Corrected after review: episode 45 names no single killer, so the members kill Dalzollene together with Phinks; Owl is no longer said to survive, and no killers named: chapter 78 only reports the Shadow Beasts all dead, from a caller, and the Troupe is first named as the killer in chapter 79, page 1. The story says only that other Shadow Beasts arrive. The needle and the cloth are chapter 77 (pages 12-19), the rescue chapter 78, both in episode 45. Owl’s torture is left out.',
    },
    49: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_49_(2011)',
      note: 'Chapters 89-91 and episode 49. Checked on the episode page and the chapter pages.',
    },
    57: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_57_(2011)',
      note: 'Chapters 113-114 and episode 57. Her broken ribs are chapter-only. Checked on the episode page and the chapter pages.',
    },
    72: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_72_(2011)',
      note: 'Episode 72 and Chapter 170: Chapter 170 and episode 72 show surveillance and warning; original wording, no quoted dialogue.',
    },
  },
  'ivlenkov': {
    42: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_42_(2011)',
      note: 'Corrected after review: “the auction is too dangerous for her” is episode 41 only; both media show her father having her kept away from it. The escort is episode 41 and chapter 71; the posts (three inside, two at the back, Kurapika and Melody at the front) are episode 42 and chapter 72. Who goes where is named only in chapter 72; the episode 42 appearance list orders the bodyguards the same way, as the #900 records do. Also read: Episode 41 (2011), Chapter 71, Chapter 72.',
    },
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'Chapter 73 (pages 10-19) and episode 43. Checked on the episode page and the chapter pages.',
    },
  },
  'linssen': {
    42: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_42_(2011)',
      note: 'Corrected after review: “the auction is too dangerous for her” is episode 41 only; both media show her father having her kept away from it. The escort is episode 41 and chapter 71; the posts are episode 42 and chapter 72. Who goes where is named only in chapter 72; the episode 42 appearance list orders the bodyguards the same way, as the #900 records do. The other bodyguard at the back (Basho) is named only in the chapter and is left out. Also read: Episode 41 (2011), Chapter 71, Chapter 72.',
    },
  },
  'shizuku': {
    42: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_42_(2011)',
      note: 'Corrected after review: the members gather outside Yorknew City, the match is before the auction (not “that night”), and Gon has to try for real rather than use all his strength. The gathering and the order are episode 41 and chapter 71; the match with Gon and her return to the other members are episode 42 and chapter 72. The left arm is chapter-only. Also read: Episode 41 (2011), Chapter 71, Chapter 72.',
    },
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'Chapter 73 (pages 10-19) and episode 43. Checked on the episode page and the chapter pages.',
    },
    50: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_50_(2011)',
      note: 'Corrected after review: the time clause is dropped: Franklin also says that Gon reminds him of Uvogin. Killua pointing her out and the rule are chapters 91-92, Franklin’s words about Gon chapter 93, all in episode 50. That she does not remember the match is chapter-only. Checked on the episode page and the chapter pages.',
    },
    54: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_54_(2011)',
      note: 'Corrected after review: the fortune is framed as what the verses say. Chapter 104 and episode 54. Checked on the episode page and the chapter pages.',
    },
    62: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_62_(2011)',
      note: 'Episode 62 and Chapter 134: Chapter 134: vacuum restrictions and Shalnark’s hypothesis.',
    },
    65: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_65_(2011)',
      note: 'Episode 65 and Chapter 145: Chapter 145 and episode 65: six Troupe members expelled by game master. His name is deliberately omitted because his anime record opens only at episode 67.',
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 149: Chapter 149 and episode 66 share these four Troupe participants. Feitan and Kortopi omitted from this scene because their presence is anime-only.',
    },
    97: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_97_(2011)',
      note: 'Checked Chapter 227, Chapter 228, Episode 97 (2011).',
    },
  },
  'feitan': {
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'The stage is chapter 73 and episode 43, the balloon chapter 74, the ledge above the canyon chapter 75 (pages 1-16), all in episode 43. Franklin is named only from chapter 76. His torture of the auctioneer is chapter-only, and of Owl left out. Checked on the episode page and the chapter pages.',
    },
    50: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_50_(2011)',
      note: 'Chapters 91-92 and episode 50. His threat to Gon’s fingernails is chapter-only. Checked on the episode page and the chapter pages.',
    },
    59: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_59_(2011)',
      note: 'Episode 59 and Chapter 123: Chapters 122–123 show theft and entry; scene complete by episode 59. Independent verifier removed premature claims about using techniques on the island, retaining only theft and entry order.',
    },
    62: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_62_(2011)',
      note: 'Episode 62 and Chapter 134: Chapter 134: murder, card theft and one-week rendezvous; victim remains anonymous.',
    },
    65: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_65_(2011)',
      note: 'Episode 65 and Chapter 145: Chapter 145 and episode 65: six Troupe members expelled by game master. His name is deliberately omitted because his anime record opens only at episode 67.',
    },
    97: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_97_(2011)',
      note: 'Checked Chapter 228, Chapter 229, Episode 97 (2011).',
    },
  },
  'uvogin': {
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'Corrected after review: the phone is chapter 74 only, while episode 43 says he informs the leader, so he tells him from the balloon; the leader convinces him because a traitor would gain nothing; the Shadow Beast who emptied the vault is what Uvogin reports, not the leader’s reason (chapter 74, episode 43). “The Mafia’s best fighters” became “the Mafia’s elite”, true in both. The call is chapter 74, the fight with the Mafia chapter 75 (pages 1-16), both in episode 43. The leader is not named before episode 54. Checked on the episode page and the chapter pages.',
    },
    44: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_44_(2011)',
      note: 'Corrected after review: in Italian, the skull fragment is named as Leech’s. The fight is chapters 75-76, the chain and the car chapter 77 (pages 1-11), all in episode 44. Porcupine’s fate stays open. Italian: Colpo del Big Bang (Italian Wikipedia, Brigata Fantasma). Checked on the episode page and the chapter pages.',
    },
    45: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_45_(2011)',
      note: 'The questioning and the rescue are chapter 78; his words for the leader open chapter 79 (page 1), all in episode 45. Checked on the episode page and the chapter pages.',
    },
    46: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_46_(2011)',
      note: 'The beer and the website are chapter 79, the door chapter 80, both in episode 46. The chain user’s job, learned from a man he tortures, is chapter-only. Checked on the episode page and the chapter pages.',
    },
    47: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_47_(2011)',
      note: 'Corrected after review: “truthfully” dropped; episode 47 says only that the rule is to answer his questions. Zetsu leaves him no aura, so only his bare strength is left, and it is not enough: the sentence now says so. Chapters 81-84 and episode 47. Italian: Catena del Giudizio (Italian Wikipedia, Kurapika Kurata). Checked on the episode page and the chapter pages.',
    },
  },
  'worm': {
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'Corrected after review: “they will deal with the Troupe themselves” is episode 43 wording; both media have them tell the bodyguards to stay out of the fight. Chapter 75 (pages 1-16) and episode 43. Leech and Porcupine are named only from chapter 76. Checked on the episode page and the chapter pages.',
    },
    45: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_45_(2011)',
      note: 'Corrected after review: his call asks for everyone against the Troupe; the Italian arm is “glielo”; Owl is no longer said to survive, and no killers named: chapter 78 only reports the Shadow Beasts all dead, from a caller, and the Troupe is first named as the killer in chapter 79, page 1. Worm is among the Shadow Beasts reported dead. Episode 45 shows them killed, so his status is deceased there; for chapter readers it is presumed dead at chapter 78 and deceased at chapter 89, where Light counts nine bodies. The punches and the blast are chapters 75-76 and episode 44; his call closes chapter 76 (page 19) and opens episode 45 (the episode 44 page’s image shows it too).',
    },
  },
  'rabid-dog': {
    43: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_43_(2011)',
      note: 'Corrected after review: the four first speak to the Nostrade bodyguards, telling them to stay out of the fight (not that they will deal with the Troupe, which is episode 43 wording), then go to face Uvogin. The Shadow Beasts are explained in chapter 74 and episode 43; the four arrive in chapter 75 (pages 1-16), the end of episode 43. Checked on the episode page and the chapter pages. His question to Uvogin is chapter 75, pages 17-19, in episode 44, and is left out.',
    },
    44: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_44_(2011)',
      note: 'Chapter 76 and episode 44. Checked on the episode page and the chapter pages.',
    },
  },
  'porcupine': {
    44: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_44_(2011)',
      note: 'Chapter 76 and episode 44. Episode 44 leaves his fate open and chapter 76 does not, so the story says only that Uvogin is free of him. Checked on the episode page and the chapter pages.',
    },
  },
  'leech': {
    44: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_44_(2011)',
      note: 'Chapter 76 and episode 44. Checked on the episode page and the chapter pages.',
    },
  },
  'franklin': {
    44: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_44_(2011)',
      note: 'The auction is chapter 73 and episode 43; the cards, the fight and Shizuku’s answer are chapters 75-76 and episode 44. Checked on the episode page and the chapter pages.',
    },
    50: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_50_(2011)',
      note: 'Corrected after review: the time clause is dropped: he says that Gon reminds him of Uvogin, without tying it to the pictures or the pairing. The standoff and Pakunoda’s answer are chapter 92, his words about Uvogin chapter 93, both in episode 50. Checked on the episode page and the chapter pages.',
    },
    58: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_58_(2011)',
      note: 'Chapter 118 and episode 58. Checked on the episode page and the chapter pages.',
    },
    65: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_65_(2011)',
      note: 'Episode 65 and Chapter 145: Chapter 145 and episode 65: six Troupe members expelled by game master. His name is deliberately omitted because his anime record opens only at episode 67.',
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 149: Chapter 149 and episode 66 share these four Troupe participants. Feitan and Kortopi omitted from this scene because their presence is anime-only.',
    },
  },
  'nobunaga': {
    45: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_45_(2011)',
      note: 'Corrected after review: Owl is no longer said to survive, and no killers named: chapter 78 only reports the Shadow Beasts all dead, from a caller, and the Troupe is first named as the killer in chapter 79, page 1. The story stops when other Shadow Beasts arrive, all chapter 77 (pages 12-19) in episode 45, so it is now pinned at chapter 77.',
    },
    49: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_49_(2011)',
      note: 'Corrected after review: “Nobunaga is behind him” and “who taught him Nen” are episode wording; he appears, and asks who taught him. Chapters 89-91 and episode 49. Checked on the episode page and the chapter pages.',
    },
    50: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_50_(2011)',
      note: 'Corrected after review: “on the table” (Italian) and “kick through” are each one medium’s; he slams Gon’s hand down, and the boys break out through the walls. Chapters 91-94 and episode 50. Checked on the episode page and the chapter pages.',
    },
    54: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_54_(2011)',
      note: 'Corrected after review: the English names Nobunaga where “his” was unclear. the fortune is what it says, not a fact, as in Chrollo’s and Shizuku’s stories. Chapters 102-104 and episode 54. Checked on the episode page and the chapter pages.',
    },
    56: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_56_(2011)',
      note: 'Corrected after review: the traffic is chapter 111 only (episode 56 has him in front of the car), so he catches Squala in his car; in Italian, it is clear that Pakunoda fires the image into Nobunaga’s head. Chapters 109-112 (pages 1-8) and episode 56. Checked on the episode page and the chapter pages.',
    },
    72: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_72_(2011)',
      note: 'Episode 72 and Chapter 170: Chapter 170 and episode 72: newcomer and negotiation; no mechanism invented.',
    },
    97: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_97_(2011)',
      note: 'Final returning-cast coverage audit: Chapter 229 and Episode 97 show Nobunaga calling Shalnark for help with an undisclosed job after the Meteor City fighting. Phinks first hopes Chrollo is calling. No job details or outcome are inferred. Chapter endpoint: https://hunterxhunter.fandom.com/wiki/Chapter_229. Independent correction: Phinks complains about waiting, without anger attributed to the caller’s identity.',
    },
  },
  'owl': {
    45: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_45_(2011)',
      note: 'Corrected after review: the story stops when Nobunaga is trapped and the other Shadow Beasts arrive (chapter 77, pages 12-19, in episode 45), so it is now pinned at chapter 77. The Shadow Beasts’ deaths no longer name Owl as the one who lives: chapter 78 reports them all dead and shows Owl held only in chapter 84, so the line said too early, for chapter readers, that he survives. For chapter readers his status is now presumed dead from chapter 78, like Worm’s on the same report, and captured from chapter 84. His torture is left out.',
    },
  },
  'phinks': {
    45: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_45_(2011)',
      note: 'Corrected after review: episode 45 names no single killer, so the members kill Dalzollene together. Chapter 78 and episode 45. Checked on the episode page and the chapter pages.',
    },
    49: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_49_(2011)',
      note: 'Corrected after review: “Nobunaga is behind him” is episode wording; he appears and stops Killua. Chapters 90-91 and episode 49. How Killua breaks free differs between the media; the story says only that he twists free. Checked on the episode page and the chapter pages.',
    },
    58: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_58_(2011)',
      note: 'Corrected after review: Gon says that Pakunoda and Machi want their leader back. “controls them” became “controls Pakunoda and Machi”. Chapter 118 and episode 58. His meeting with the boys at the auction is chapter 120 and is left out. Checked on the episode page and the chapter pages.',
    },
    59: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_59_(2011)',
      note: 'Episode 59 and Chapter 123: Chapters 122–123 show theft and entry; scene complete by episode 59. Independent verifier removed premature claims about using techniques on the island, retaining only theft and entry order.',
    },
    62: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_62_(2011)',
      note: 'Episode 62 and Chapter 134: Chapter 134: murder, card theft and one-week rendezvous; victim remains anonymous.',
    },
    65: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_65_(2011)',
      note: 'Episode 65 and Chapter 145: Chapter 145 and episode 65: six Troupe members expelled by game master. His name is deliberately omitted because his anime record opens only at episode 67.',
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 149: Chapter 149 and episode 66 share these four Troupe participants. Feitan and Kortopi omitted from this scene because their presence is anime-only.',
    },
    96: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_96_(2011)',
      note: 'Checked Chapter 224, Chapter 226, Episode 96 (2011).',
    },
    97: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_97_(2011)',
      note: 'Checked Chapter 229, Episode 97 (2011).',
    },
  },
  'light-nostrade': {
    46: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_46_(2011)',
      note: 'Corrected after review: the relay of his orders through Dalzollene is chapter 79 only and is dropped; episode 46 says only that he hired them. Chapter 79 and episode 46. Checked on the episode page and the chapter pages.',
    },
    49: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_49_(2011)',
      note: 'Chapter 89 and episode 49. Checked on the episode page and the chapter pages.',
    },
    53: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_53_(2011)',
      note: 'Chapters 100-101 and episode 53. His thoughts on the price are chapter-only. Checked on the episode page and the chapter pages.',
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 149: Chapter 149 and episode 66 show distressed Light and missing fortunes; no claims about later outcome.',
    },
  },
  'shalnark': {
    46: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_46_(2011)',
      note: 'Chapter 79 and episode 46. Franklin bringing the beer is anime-only. Checked on the episode page and the chapter pages.',
    },
    50: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_50_(2011)',
      note: 'Corrected after review: in Italian, it is the chain user who works for the Nostrade family. Chapter 92 and episode 50. Checked on the episode page and the chapter pages.',
    },
    53: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_53_(2011)',
      note: 'Corrected after review: in Italian, the ability’s name comes before “la sua abilità Nen”. Chapter 100 and episode 53. Italian: Voce Nera, il Cellulare del Destino (Italian Wikipedia, Brigata Fantasma). Checked on the episode page and the chapter pages.',
    },
    62: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_62_(2011)',
      note: 'Episode 62 and Chapter 134: Chapter 134 explains deduction from copies, vacuum and disappearing bodies.',
    },
    65: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_65_(2011)',
      note: 'Episode 65 and Chapter 145: Chapter 145 and episode 65: six Troupe members expelled by game master. His name is deliberately omitted because his anime record opens only at episode 67.',
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 149: Chapter 149 and episode 66 share these four Troupe participants. Feitan and Kortopi omitted from this scene because their presence is anime-only.',
    },
    96: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_96_(2011)',
      note: 'Authoring correction: checked Chapter 225, Chapter 226, Chapter 227, Episode 96 (2011). Anime/chapter order differs here.',
    },
  },
  'zepile': {
    48: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_48_(2011)',
      note: 'Chapters 86-88 and episode 48. Checked on the episode page and the chapter pages.',
    },
    53: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_53_(2011)',
      note: 'The sale left to him is chapter 89 and episode 48; the drinks and Gon’s thanks are chapter 101 and episode 53. Checked on the episode page and the chapter pages.',
    },
    60: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_60_(2011)',
      note: 'Episode 60 and Chapter 124: Chapter 124 and episode 60 establish money and decision; organ collateral is manga-only and omitted.',
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and Chapter 148: Chapter 148 and episode 66 show greeting, knockout and exam result.',
    },
  },
  'pakunoda': {
    49: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_49_(2011)',
      note: 'Corrected after review: the escape attempt and the call come in a different order in the two media, so neither is put first. Chapters 90-91 and episode 49. Her arm around Killua waits for her 50/92 story, since the chapters show it in 92. Checked on the episode page and the chapter pages.',
    },
    50: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_50_(2011)',
      note: 'Corrected after review: in Italian, “sono quasi venuti alle mani”. Her arm around Killua is episode 49 and chapter 92 (his memory of the drive); the report and his deduction are chapter 92 and episode 50. Checked on the episode page and the chapter pages.',
    },
    56: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_56_(2011)',
      note: 'Chapters 111-112 (pages 1-8) and episode 56. Italian: Proiettile Mnemonico (Italian Wikipedia, Brigata Fantasma). Checked on the episode page and the chapter pages.',
    },
    57: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_57_(2011)',
      note: 'The blackout is chapters 113-114, the call chapter 115, all in episode 57. Her reading of the note and her memory of the Troupe’s founding are chapter-only. Checked on the episode page and the chapter pages.',
    },
    58: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_58_(2011)',
      note: 'Corrected after review: “unharmed” dropped (episode 58 only); she must free the boys by midnight without tricks. Chapters 117-119 and episode 58. Italian: Proiettile Mnemonico (Italian Wikipedia, Brigata Fantasma). Checked on the episode page and the chapter pages.',
    },
  },
  'zenji': {
    51: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_51_(2011)',
      note: 'Corrected after review: the order follows chapter 95 and episode 51: he meets the assassins, gives them the job once Light and Kurapika arrive, then mocks Light. Chapter 95 and episode 51. Checked on the episode page and the chapter pages.',
    },
    53: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_53_(2011)',
      note: 'Corrected after review: he raises the bid to 1 billion and drives the price up (Kurapika wins at 2.9 billion); and Kurapika hears of the leader’s death before Zenji mocks him. Chapters 100-101 and episode 53. Checked on the episode page and the chapter pages.',
    },
  },
  'kortopi': {
    53: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_53_(2011)',
      note: 'Chapter 100 and episode 53. The copies of the members’ bodies are told in episode 53 but explained in the chapters only later, so they are left out. Italian: La Mano Sinistra di Dio e la Mano Destra del Diavolo (Italian Wikipedia, Brigata Fantasma). Checked on the episode page and the chapter pages.',
    },
    55: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_55_(2011)',
      note: 'Chapter 108 and episode 55. Checked on the episode page and the chapter pages.',
    },
    62: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_62_(2011)',
      note: 'Episode 62 and Chapter 134: Chapter 134: failed copied Rock card and shared deduction.',
    },
    65: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_65_(2011)',
      note: 'Episode 65 and Chapter 145: Chapter 145 and episode 65: six Troupe members expelled by game master. His name is deliberately omitted because his anime record opens only at episode 67.',
    },
  },
  'chrollo': {
    54: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_54_(2011)',
      note: 'Corrected after review: in Italian, “ingaggiato da lui”; the fortune is what it says, not a fact. His record opens at episode 54 (unanchored), so his chronicle opens here and looks back over episodes 41-53: the order (chapter 71), Neon and the requiem (chapters 95-97), the Zoldycks and Illumi (chapters 98-100), the fake bodies (chapter 104). The fortunes are chapters 102-104 and episode 54. His book, the Indoor Fish and the copies he ordered are told differently by the two media and are left out. Checked on the episode page and the chapter pages.',
    },
    55: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_55_(2011)',
      note: 'Corrected after review: the order follows both media, as in Hisoka’s 55/106 story: Nobunaga draws his sword, Hisoka says only that the first verse is true, and when Nobunaga attacks, Chrollo moves him away. The fake fortune is chapter 106, the groups and the copies chapter 108, all in episode 55. Checked on the episode page and the chapter pages.',
    },
    56: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_56_(2011)',
      note: 'Corrected after review: “where they are” became “where his copies are”, so it cannot be read as the original eyes. Chapters 109-111 and episode 56. The hotel is not named before episode 57; Chrollo’s words to Gon differ between the pages, so the story says only that he gives no clear answer. Checked on the episode page and the chapter pages.',
    },
    57: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_57_(2011)',
      note: 'Corrected after review: the lights go out just as Pakunoda reads the boys’ memories; the chains are on the chapter pages only, as episode 57 says only that he is gone, so the story says only that Kurapika has taken him. Chapters 112-114 and episode 57. His words in the car and as a hostage are chapter-only. Checked on the episode page and the chapter pages.',
    },
    58: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_58_(2011)',
      note: 'Chapters 117-119 and episode 58. Looking east for the last part of his fortune is chapter-only. Checked on the episode page and the chapter pages.',
    },
  },
  'bonolenov': {
    55: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_55_(2011)',
      note: 'Chapter 108 and episode 55. His bandages and the members who stay at the hideout are on the chapter pages only. Checked on the episode page and the chapter pages.',
    },
    96: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_96_(2011)',
      note: 'Checked Chapter 225, Chapter 227, Episode 96 (2011). Independent verifier correction: Removed unverified attribution of tribal exposition to direct speech; describe visible music-producing movements.',
    },
  },
  'eliza': {
    56: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_56_(2011)',
      note: 'Corrected after review: “a better future” is the episode’s phrasing; Squala thinks about their future together. Chapters 109 and 112 (pages 1-8) and episode 56. Her strange feeling when Squala dies is anime-only. Checked on the episode page and the chapter pages.',
    },
  },
  'battera': {
    '59:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_120',
      note: 'Split by medium after verification: Chapter 120 contains the interview and love answer; episode 59 instead shows the purchase, Gon and Killua’s request, the memory card and ring, and the Ren examination (chapter 121). The chapter-only opening stays at 120; the episode-only opening contains no interview claim.',
    },
    '59:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_59_(2011)',
      note: 'Split by medium after verification: Chapter 120 contains the interview and love answer; episode 59 instead shows the purchase, Gon and Killua’s request, the memory card and ring, and the Ren examination (chapter 121). The chapter-only opening stays at 120; the episode-only opening contains no interview claim.',
    },
    '60': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_60_(2011)',
      note: 'Episode 60 and chapters 124-126 show the remaining purchases, the successful second screening, the 50-billion reward and entry through the mansion consoles. The chapter is 126 so the complete entry sequence is reached.',
    },
    '73': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_73_(2011)',
      note: 'Episode 73 and chapter 174 reveal that his lover died after being in a coma and that the desired game card was meant to heal her; the canceled project is chapter 173. The lover remains unnamed.',
    },
  },
  'tsezguerra': {
    59: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_59_(2011)',
      note: 'Episode 59 and chapter 121 show Battera calling him, the boys’ Ren demonstration and his rejection. The story avoids later details from chapter 122.',
    },
    60: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_60_(2011)',
      note: 'Episode 60 and chapters 125-126 show Killua’s electricity, Gon’s fist, admission, contract and the mansion’s order of entry. The full story waits for chapter 126.',
    },
    67: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_67_(2011)',
      note: 'Episode 67 and chapter 153 contain the actual trade, distraction, concealed accomplices, Levy theft and escape. Corrected from chapter 152, which only sets up the deal.',
    },
    69: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_69_(2011)',
      note: 'Chapter 160 contains recruitment and the jump comparison; episode 69 begins with the recruited team before the return to the pirates. No dodgeball result is included.',
    },
    71: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_71_(2011)',
      note: 'The match spans chapters 161-169 and episodes 69-71. Chapter 169 and episode 71 complete the team’s victory, so this retrospective waits until the result is known.',
    },
    72: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_72_(2011)',
      note: 'Chapters 170-173 and episode 72 show the delaying deal, pursuit with travel cards, escape to the real world and discovery that Battera has canceled the project. No lover explanation appears before chapter 174 / episode 73.',
    },
    73: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_73_(2011)',
      note: 'Episode 73 and chapter 174 show the team staying out beyond the limit and Battera explaining his lover’s death. Removed the location claim: the manga’s conversation occurs at a hotel, not necessarily the mansion.',
    },
  },
  'puhat': {
    60: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_60_(2011)',
      note: 'Episode 60 and chapter 125 show him seated behind Gon and Killua, explaining why rushing is unnecessary, approving Gon’s reasoning and introducing himself before the test.',
    },
    62: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_62_(2011)',
      note: 'Chapter 131 supplies joining the alliance; chapter 132 and episode 62 supply the Fortress / Angel’s Breath briefing. Removed the memorization quiz because the episode synopsis does not establish that anime scene.',
    },
    64: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_64_(2011)',
      note: 'Episode 64 and chapter 143 show the revelation of Countdown, Puhat recalling the contact and threat, his attempt to mediate outside the game, and his killing. The Bomber stays anonymous because his record has no anime reach.',
    },
  },
  'biscuit-krueger': {
    62: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_62_(2011)',
      note: 'Episode 62 ends with the Gyo demonstration, introduction and forty years of Nen; chapter 137 contains this introduction. The opening avoids later acceptance, Wing or Blue Planet disclosures.',
    },
    63: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_63_(2011)',
      note: 'Episode 63 and chapters 138-140 include Binolt’s defeat, the training agreement, shovel purchase and Shu exercise. Corrected from chapter 139 to 140 because the digging and Shu lesson occur later.',
    },
    64: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_64_(2011)',
      note: 'Episode 64 and chapters 141-142 cover studying monster weaknesses, Ken against Ko and then Ryu. Chapter 142 is required for the full aura-distribution lesson.',
    },
    66: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_66_(2011)',
      note: 'Episode 66 and chapters 149-151 show Killua’s return, collecting and the beginning of trading. Corrected from chapter 150 to 151 because trading begins there.',
    },
    69: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_69_(2011)',
      note: 'Recruitment and sports victories occur in chapters 157-160; chapter 161 and episode 69 introduce the eight-player dodgeball challenge. The whole story waits for chapter 161.',
    },
    71: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_71_(2011)',
      note: 'Chapters 164-169 and episodes 70-71 show her dress elimination, exposure of Killua’s injured hands during the timeout, and tending them after the team wins.',
    },
    72: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_72_(2011)',
      note: 'Episode 72 and chapter 171 show Killua asking for her ability and Biscuit materializing her Nen beautician and explaining massage and recovery. The beautician remains unnamed because she has no filed record.',
    },
    73: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_73_(2011)',
      note: 'Episode 73 and chapter 177 show separating an accomplice, letting him strike her, revealing her muscular form and winning with one punch. The accomplice is anonymous in both languages (#1032).',
    },
    75: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_75_(2011)',
      note: 'Chapter 184 selects Blue Planet; chapter 185 and episode 75 show using it outside the game and the farewell before Gon and Killua travel. No identity at their destination is disclosed.',
    },
    86: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_86_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 86 (2011), Chapter 201.',
    },
    89: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_89_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 89 (2011), Chapter 209, Chapter 210.',
    },
  },
  'binolt': {
    '63:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_138',
      note: 'Split by medium after verification: the chapter-only opening at 138 stops at capture and training. The episode-only opening at episode 63 / chapter 139 includes the release already completed by that episode, with Gon thanking Binolt. This avoids withholding the anime’s completed event or leaking manga chapter 139 at 138.',
    },
    '63:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_63_(2011)',
      note: 'Split by medium after verification: the chapter-only opening at 138 stops at capture and training. The episode-only opening at episode 63 / chapter 139 includes the release already completed by that episode, with Gon thanking Binolt. This avoids withholding the anime’s completed event or leaking manga chapter 139 at 138.',
    },
    '64': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_139',
      note: 'Chapter 139 shows Gon stopping the final blow, thanking Binolt, Biscuit letting him go and Binolt promising to turn himself in. This chapter-only entry has episode 64 solely for ordering; anime release is included in the episode-63 opening.',
    },
  },
  'kosofftro': {
    62: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_132',
      note: 'Chapter 132 and Kosofftro’s character page show the travel-card checkpoint, his introduction and request to memorize his name, and the recruits’ movement to the hideout. He is absent from the 2011 anime; this is chapter-only. No inferred death is authored.',
    },
  },
  'genthru': {
    65: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_144',
      note: 'Chapters 142-144 show Countdown’s revelation, Jispa’s attack and reported death, Puhat’s killing and detonation after the card handover. His verified naming gate is chapter 144; the chronicle remains manga-only.',
    },
    67: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_153',
      note: 'Chapter 153 shows the completed trade, Genthru’s false protest and his accomplices’ Risky Dice / Levy theft. Corrected from chapter 152, which only plans the trick. The accomplices stay anonymous.',
    },
    71: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_170',
      note: 'Chapter 170 contains the threat after obtaining the beach card, the claimed killing of the original fifteen-person team, Gon’s challenge and Tsezguerra’s delaying deal. Manga-only naming restriction preserved.',
    },
    72: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_173',
      note: 'Chapters 171-173 show harassment to replenish travel cards, the pursuit and following the Hunters to Battera’s mansion. The story avoids naming either accomplice.',
    },
    74: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_181',
      note: 'Chapters 178-181 show Little Flower, Gon’s sacrificed hand, gasoline, pitfall, large rock and final punch. Chapter 181 completes the trap and defeat; no chapter-182 healing is pulled forward.',
    },
    75: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_183',
      note: 'Chapter 182 heals the captured Bombers; chapter 183 shows the surviving exorcist touching Genthru, saying the disarming phrase and losing his Nen beast. The exorcist is anonymous (#1032).',
    },
  },
  'jispa': {
    65: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_144',
      note: 'Chapters 131-132 show escort and instruction, chapter 143 shows the failed attack and explosion, and chapter 144 reports his death. The opening waits for his personal-name gate at 144 and remains manga-only.',
    },
  },
  'razor': {
    67: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_67_(2011)',
      note: 'Chapter 145 and episode 65 show expulsion of the boat intruders and destruction of their boat. The retrospective opening waits for the record’s verified anime personal-name gate at episode 67. It does not claim the expulsion happens in episode 67.',
    },
    71: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_71_(2011)',
      note: 'Chapters 161-169 and episodes 69-71 show Nen-created dodgeball players, the team’s victory and Razor’s account of Ging capturing and recruiting him. The completed story waits for chapter 169 / episode 71.',
    },
  },
  'jeitsari': {
    59: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_121',
      note: 'Chapter 121 and Jeitsari’s character page establish the seven copies and consoles entrusted to the auction under a contract with his lawyer. The story omits the disputed calendar year and makes no claim about his current fate. Manga-only naming restriction preserved.',
    },
  },
  'jitonoda': {
    61: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_129',
      note: 'Chapter 129 contains the named mayor’s assurances and the attendance figure. Corrected after verification: attendance falls to 60 percent of normal, not by 60 percent. The report is absent from both anime and his name is omitted in Viz; the existing manga-only record policy is preserved.',
    },
  },
  'dwun': {
    75: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_75_(2011)',
      note: 'Chapter 184 and episode 75 show the messy room, the final card and three-card case, and Ging changing his name for the game title. No source-only co-creator is named in this shared story.',
    },
  },
  'list': {
    75: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_184',
      note: 'Chapter 184 introduces List, escorts Gon to Dwun, explains the eleven creators and title initials, then celebrates completion. His name is not proven in the anime, so the complete story remains chapter-only.',
    },
  },
  'eta': {
    75: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_184',
      note: 'Chapters 127,182-184 and Eta’s character page establish her entrance explanation, final quiz and identification as Elena’s twin and a co-creator. The retrospective waits for her named record at chapter 184 and remains chapter-only.',
    },
  },
  'elena': {
    75: {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_184',
      note: 'Chapters 146,184 and Elena’s character page establish the exit attendant, Killua’s earlier departure, twin/co-creator identification and Gon choosing three cards. The retrospective waits for chapter 184 and remains chapter-only.',
    },
  },
  'neferpitou': {
    84: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_84_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 84 (2011), Chapter 198. Opening stops before Pokkle’s disposal and Kite’s encounter, which the anime has not shown at episode84.',
    },
    85: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_85_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 85 (2011), Chapter 198, Chapter 199.',
    },
    88: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_86_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 86 (2011), Episode 88 (2011), Chapter 204, Chapter 206.',
    },
    91: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_91_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 91 (2011), Chapter 213, Chapter 214.',
    },
    93: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_93_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 93 (2011), Chapter 216, Chapter 217.',
    },
    109: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_109_(2011)',
      note: 'Checked Chapter 259, Episode 109 (2011). Independent verifier correction: Corrected to explicit En monitoring and response to danger, without inferring same care as King or repositioning.',
    },
    111: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_111_(2011)',
      note: 'Checked Chapter 263, Chapter 264, Episode 111 (2011).',
    },
    112: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_112_(2011)',
      note: 'Checked Chapter 267, Chapter 268, Episode 112 (2011).',
    },
    116: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_116_(2011)',
      note: 'Checked Chapter 273, Chapter 274, Chapter 275, Episode 116 (2011).',
    },
  },
  'baro': {
    '83:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_195',
      note: 'Read the MediaWiki API synopses: Chapter 195.',
    },
  },
  'yunju': {
    '79:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_79_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 79 (2011).',
    },
    '79:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_192',
      note: 'Read the MediaWiki API synopses: Chapter 192, Chapter 193.',
    },
    '82:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_82_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 82 (2011).',
    },
  },
  'rammot': {
    '84': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_82_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 82 (2011), Episode 83 (2011), Episode 84 (2011), Chapter 194, Chapter 197, Chapter 198.',
    },
    '79:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_79_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 79 (2011).',
    },
    '79:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_191',
      note: 'Read the MediaWiki API synopses: Chapter 191, Chapter 192. Separate opening from the earlier anime raid; chapter 192 is his manga naming gate.',
    },
    '81:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_81_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 81 (2011).',
    },
    '94': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_94_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 94 (2011), Chapter 219.',
    },
  },
  'hagya': {
    '106:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_192',
      note: 'Read the MediaWiki API synopses: Chapter 192.',
    },
    '107:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_214',
      note: 'Read Chapter214. Episode107 is ordering only: the anime equivalent91 precedes the anime naming gate106; the manga opening already uses ordering number106.',
    },
    '106:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_106_(2011)',
      note: 'Anime-only opening at the verified episode 106 naming gate; the earlier manga opening belongs to phase 1. The church confrontation begins by episode 106; no borrowed surfing ability or outcome is revealed here.',
    },
    '107:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_107_(2011)',
      note: 'Checked Chapter 253, Chapter 254, Episode 107 (2011). Independent verification: split by medium to retain the earlier manga departure at ordering episode 107/chapter 214; anime battle 107/chapter 254, manga battle ordering 108/chapter 254.',
    },
    '108:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_107_(2011)',
      note: 'Checked Chapter 253, Chapter 254, Episode 107 (2011). Independent verification: split by medium to retain the earlier manga departure at ordering episode 107/chapter 214; anime battle 107/chapter 254, manga battle ordering 108/chapter 254.',
    },
  },
  'pike': {
    '80:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_190',
      note: 'Read the MediaWiki API synopses: Chapter 190. Integration correction: no Zazan marker because her episode gate is 84, after this entry’s ordering coordinate. The commander remains unnamed in the prose.',
    },
    '97:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_228',
      note: 'Manga-only subject: the name Pike is not established in the anime.',
    },
  },
  'zazan': {
    '84:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_189',
      note: 'Read the MediaWiki API synopses: Chapter 189.',
    },
    '84:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_80_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 80 (2011), Episode 84 (2011). Recap delayed until Zazan’s anime naming gate; the manga has its own earlier opening.',
    },
    '91': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_91_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 91 (2011), Chapter 214.',
    },
    '96': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_96_(2011)',
      note: 'Checked Chapter 224, Episode 96 (2011).',
    },
    '97': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_97_(2011)',
      note: 'Checked Chapter 228, Chapter 229, Episode 97 (2011).',
    },
  },
  'cheetu': {
    79: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_79_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 79 (2011), Chapter 192.',
    },
    93: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_92_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 92 (2011), Episode 93 (2011), Chapter 216, Chapter 217, Chapter 218.',
    },
    95: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_94_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 94 (2011), Episode 95 (2011), Chapter 220, Chapter 221.',
    },
    104: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_104_(2011)',
      note: 'Checked Chapter 244, Chapter 245, Chapter 246, Chapter 247, Chapter 248, Episode 104 (2011).',
    },
    117: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_117_(2011)',
      note: 'Checked Chapter 278, Episode 117 (2011).',
    },
  },
  'peggy': {
    '79:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_189',
      note: 'Read the MediaWiki API synopses: Chapter 189.',
    },
    '91:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_213',
      note: 'Read the MediaWiki API synopses: Chapter 213.',
    },
  },
  'balda': {
    80: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_80_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 80 (2011), Chapter 190. Opening death story; Pike and Zazan remain unnamed because their episode gates are later or source-restricted.',
    },
  },
  'pekuba': {
    '79:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_79_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 79 (2011).',
    },
    '80:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_80_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 80 (2011).',
    },
  },
  'reina': {
    80: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_77_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 77 (2011), Episode 80 (2011), Chapter 187, Chapter 189. Reina’s opening is a recap delayed to her naming gate. The unnamed commander is not linked before Colt’s gate.',
    },
  },
  'haruna': {
    '77:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_77_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 77 (2011).',
    },
    '78:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_78_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 78 (2011).',
    },
  },
  'kurt': {
    '77:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_77_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 77 (2011).',
    },
    '92:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_92_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 92 (2011).',
    },
  },
  'wong': {
    '77:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_77_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 77 (2011).',
    },
  },
  'podungo-lapoy': {
    77: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_77_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 77 (2011), Chapter 186. The anime identifies Podungo among the absent surveyors; no physical self-introduction is claimed there. Independent verifier correction: narrowed to introductions and biological research supported by both Chapter 186 and Episode 77; omitted the manga-only night survey and observations of animal skills.',
    },
    80: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_80_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 80 (2011), Chapter 190.',
    },
  },
  'lin-koshi': {
    77: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_77_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 77 (2011), Chapter 186. The anime names Lin among the two absent surveyors; this paragraph does not claim he personally introduces himself in the anime. Independent verifier correction: narrowed to introductions and biological research supported by both Chapter 186 and Episode 77; omitted the manga-only night survey and observations of animal skills.',
    },
  },
  'stick-dinner': {
    77: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_77_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 77 (2011), Chapter 186. Independent verifier correction: narrowed to introductions and biological research supported by both Chapter 186 and Episode 77; omitted the manga-only night survey and observations of animal skills.',
    },
    80: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_80_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 80 (2011), Chapter 190.',
    },
  },
  'monta-yuras': {
    77: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_77_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 77 (2011), Chapter 186. Independent verifier correction: narrowed to introductions and biological research supported by both Chapter 186 and Episode 77; omitted the manga-only night survey and observations of animal skills.',
    },
  },
  'banana-kavaro': {
    77: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_77_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 77 (2011), Chapter 186. Independent verifier correction: narrowed to introductions and biological research supported by both Chapter 186 and Episode 77; omitted the manga-only night survey and observations of animal skills.',
    },
  },
  'spinner-clow': {
    77: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_77_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 77 (2011), Chapter 186. Independent verifier correction: narrowed to introductions and biological research supported by both Chapter 186 and Episode 77; omitted the manga-only night survey and observations of animal skills.',
    },
    92: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_92_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 92 (2011), Chapter 216.',
    },
  },
  'colt': {
    '92:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_213',
      note: 'Read the MediaWiki API synopses: Chapter 213, Chapter 214.',
    },
    '92:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_92_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 92 (2011).',
    },
    '93:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_215',
      note: 'Read the MediaWiki API synopses: Chapter 215. Chapter215 continuation. Episode93 is ordering only, not an anime date: the anime92 source-specific opening contains this entire scene. The separate manga opening preserves the earlier naming gate214.',
    },
  },
  'meruem': {
    92: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_91_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 91 (2011), Episode 92 (2011), Chapter 213, Chapter 215.',
    },
    93: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_93_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 93 (2011), Chapter 216, Chapter 217.',
    },
    103: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_103_(2011)',
      note: 'Checked Chapter 243, Chapter 244, Chapter 245, Episode 103 (2011).',
    },
    105: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_105_(2011)',
      note: 'Checked Chapter 249, Episode 105 (2011).',
    },
    108: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_108_(2011)',
      note: 'Checked Chapter 257, Chapter 258, Episode 108 (2011). Independent verifier correction: Corrected to important guest; protection promise is not asserted before Chapter 259/Episode 109.',
    },
    114: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_114_(2011)',
      note: 'Authoring correction: checked Chapter 267, Chapter 268, Chapter 271, Episode 114 (2011). Anime/chapter order differs here.',
    },
    122: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_122_(2011)',
      note: 'Checked Chapter 287, Chapter 290, Episode 122 (2011).',
    },
    126: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_126_(2011)',
      note: 'Checked Chapter 296, Chapter 297, Chapter 298, Episode 126 (2011).',
    },
  },
  'dr-lee': {
    '92:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_215',
      note: 'Read the MediaWiki API synopses: Chapter 215.',
    },
  },
  'baital': {
    '88:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_205',
      note: 'Read the MediaWiki API synopses: Chapter 205.',
    },
  },
  'gyro': {
    '80': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_80_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 80 (2011), Chapter 204.',
    },
    '78:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_78_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 78 (2011).',
    },
    '78:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_203',
      note: 'Read the MediaWiki API synopses: Chapter 203. Gyro is unanchored78/203. The manga-only rebirth is not disclosed in the anime opening.',
    },
  },
  'menthuthuyoupi': {
    86: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_86_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 86 (2011), Chapter 202.',
    },
    88: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_88_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 88 (2011), Chapter 206.',
    },
    91: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_91_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 91 (2011), Chapter 213.',
    },
    114: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_114_(2011)',
      note: 'Checked Chapter 266, Chapter 267, Chapter 269, Chapter 272, Episode 114 (2011).',
    },
    117: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_117_(2011)',
      note: 'Checked Chapter 278, Episode 117 (2011).',
    },
    121: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_121_(2011)',
      note: 'Checked Chapter 287, Chapter 288, Chapter 289, Episode 121 (2011).',
    },
  },
  'shaiapouf': {
    86: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_86_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 86 (2011), Chapter 202.',
    },
    91: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_91_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 91 (2011), Chapter 213.',
    },
    93: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_93_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 93 (2011), Chapter 216, Chapter 217. Independent verifier correction: shared explanation uses king as a title, omitting inheritance and personal connections not explicit in the episode synopsis.',
    },
    108: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_108_(2011)',
      note: 'Checked Chapter 255, Chapter 256, Chapter 257, Chapter 258, Episode 108 (2011).',
    },
    109: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_109_(2011)',
      note: 'Checked Chapter 259, Chapter 260, Episode 109 (2011).',
    },
    114: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_114_(2011)',
      note: 'Authoring correction: checked Chapter 273, Episode 114 (2011). Anime/chapter order differs here.',
    },
    120: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_120_(2011)',
      note: 'Checked Chapter 283, Chapter 284, Episode 120 (2011). Independent verifier/root source correction: Shared Chapter 284/Episode 120 story omits the cocoon-core explanation revealed at Chapter 286.',
    },
  },
  'shoot-mcmahon': {
    86: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_86_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 86 (2011), Chapter 200.',
    },
    88: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_88_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 88 (2011), Chapter 205.',
    },
    91: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_90_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 90 (2011), Episode 91 (2011), Chapter 212, Chapter 214.',
    },
    95: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_95_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 95 (2011), Chapter 222.',
    },
    114: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_114_(2011)',
      note: 'Checked Chapter 266, Chapter 269, Chapter 272, Episode 114 (2011).',
    },
  },
  'knuckle-bine': {
    86: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_86_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 86 (2011), Chapter 200.',
    },
    87: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_87_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 87 (2011), Chapter 203. Independent verifier correction: final sentence narrowed to the repeated challenges supported by both endpoint summaries; anti-extermination explanation not asserted in the shared story.',
    },
    89: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_89_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 89 (2011), Chapter 207, Chapter 208, Chapter 209.',
    },
    91: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_90_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 90 (2011), Episode 91 (2011), Chapter 210, Chapter 211, Chapter 214.',
    },
    95: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_94_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 94 (2011), Episode 95 (2011), Chapter 220, Chapter 221.',
    },
    112: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_112_(2011)',
      note: 'Authoring correction: checked Chapter 267, Chapter 268, Episode 112 (2011). Anime/chapter order differs here.',
    },
    115: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_115_(2011)',
      note: 'Checked Chapter 272, Chapter 273, Episode 115 (2011). Independent verifier/root source correction: Drawing Youpi away and the pursuit are in Chapter 276, not 273; anime Episode 115 remains correct.',
    },
    118: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_118_(2011)',
      note: 'Checked Chapter 280, Episode 118 (2011).',
    },
    121: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_121_(2011)',
      note: 'Checked Chapter 288, Chapter 289, Episode 121 (2011).',
    },
  },
  'palm-siberia': {
    86: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_86_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 86 (2011), Chapter 200.',
    },
    88: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_88_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 88 (2011), Chapter 205.',
    },
    94: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_94_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 94 (2011), Chapter 218, Chapter 220.',
    },
    106: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_106_(2011)',
      note: 'Checked Chapter 250, Chapter 251, Chapter 252, Episode 106 (2011).',
    },
    107: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_107_(2011)',
      note: 'Checked Chapter 254, Episode 107 (2011).',
    },
    124: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_124_(2011)',
      note: 'Checked Chapter 293, Chapter 294, Episode 124 (2011).',
    },
  },
  'knov': {
    86: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_85_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 85 (2011), Episode 86 (2011), Chapter 199, Chapter 200.',
    },
    88: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_88_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 88 (2011), Chapter 205.',
    },
    94: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_94_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 94 (2011), Chapter 220.',
    },
    106: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_106_(2011)',
      note: 'Checked Chapter 250, Chapter 251, Chapter 252, Episode 106 (2011).',
    },
    121: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_121_(2011)',
      note: 'Checked Chapter 286, Chapter 289, Episode 121 (2011). Independent verifier/root source correction: Knov return, extraction and Palm question are Chapter 290, not 289; anime Episode 121 includes them.',
    },
  },
  'morel-mackernasey': {
    86: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_85_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 85 (2011), Episode 86 (2011), Chapter 199. Recap delayed to Morel’s anime naming gate86; Knov remains unnamed before his manga gate200.',
    },
    88: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_88_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 88 (2011), Chapter 205.',
    },
    92: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_92_(2011)',
      note: 'Read the MediaWiki API synopses: Episode 92 (2011), Chapter 215. Independent verifier correction: shared promise narrowed to non-human-eating condition and protection of Colt; lifetime and both-beneficiary scope omitted because episode synopsis compresses them.',
    },
    95: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_95_(2011)',
      note: 'Checked Chapter 223, Episode 95 (2011).',
    },
    104: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_104_(2011)',
      note: 'Checked Chapter 244, Chapter 245, Chapter 246, Chapter 247, Chapter 248, Episode 104 (2011).',
    },
    107: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_107_(2011)',
      note: 'Checked Chapter 253, Chapter 254, Episode 107 (2011).',
    },
    113: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_113_(2011)',
      note: 'Checked Chapter 270, Episode 113 (2011).',
    },
    120: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_120_(2011)',
      note: 'Checked Chapter 283, Chapter 284, Chapter 285, Episode 120 (2011).',
    },
    121: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_121_(2011)',
      note: 'Checked Chapter 288, Chapter 289, Episode 121 (2011). Independent verifier/root source correction: Knov extraction completes in Chapter 290, not 289; anime Episode 121 includes it.',
    },
  },
  'bizeff': {
    '135:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_250',
      note: 'Checked Chapter 250.',
    },
  },
  'bloster': {
    104: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_104_(2011)',
      note: 'Checked Chapter 246, Episode 104 (2011).',
    },
    119: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_119_(2011)',
      note: 'Checked Chapter 279, Chapter 282, Chapter 283, Episode 119 (2011).',
    },
  },
  'welfin': {
    104: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_104_(2011)',
      note: 'Checked Chapter 246, Episode 104 (2011).',
    },
    110: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_110_(2011)',
      note: 'Checked Chapter 261, Episode 110 (2011).',
    },
    115: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_115_(2011)',
      note: 'Checked Chapter 269, Chapter 271, Chapter 273, Episode 115 (2011).',
    },
    123: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_123_(2011)',
      note: 'Checked Chapter 295, Chapter 296, Episode 123 (2011).',
    },
  },
  'komugi': {
    103: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_103_(2011)',
      note: 'Checked Chapter 244, Chapter 245, Chapter 257, Episode 103 (2011).',
    },
    108: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_108_(2011)',
      note: 'Chapter 257 has Nen and the exchange of names; chapter 258 adds the bird rescue. All occur by episode 108. Corrected the combined story’s chapter to 258.',
    },
    105: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_105_(2011)',
      note: 'Episode 105 and Chapter 249 show the wager, the King’s apology and Komugi refusing to play until he receives treatment. The manga recap opens at Chapter 257, behind her personal naming gate; the anime opens at Episode 105. Komugi’s unanchored record prevents this delayed recap from becoming a conversion anchor.',
    },
    112: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_112_(2011)',
      note: 'Checked Chapter 267, Chapter 268, Episode 112 (2011).',
    },
  },
  'ikalgo': {
    '107': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_107_(2011)',
      note: 'Checked Chapter 255, Episode 107 (2011).',
    },
    '102:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_241',
      note: 'Checked Chapter 241.',
    },
    '101:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_101_(2011)',
      note: 'Episode 101 ends with the rescue; Chapter 241 has Ikalgo carrying Killua. Separate medium entries avoid combining the anime rescue with the earlier shared opening at episode 101.',
    },
    '101:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_238',
      note: 'Manga opening at chapter 238; anime combines this rescue from the water and the later rescue of Killua in episode 101.',
    },
    '115': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_115_(2011)',
      note: 'Checked Chapter 271, Chapter 273, Episode 115 (2011).',
    },
    '119': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_119_(2011)',
      note: 'Checked Chapter 279, Chapter 282, Chapter 283, Episode 119 (2011).',
    },
    '123': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_123_(2011)',
      note: 'Checked Chapter 295, Chapter 296, Episode 123 (2011).',
    },
  },
  'remora': {
    '101:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_238',
      note: 'Checked Chapter 238.',
    },
  },
  'flutter': {
    100: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_100_(2011)',
      note: 'Checked Chapter 235, Chapter 236, Episode 100 (2011).',
    },
    104: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_104_(2011)',
      note: 'Checked Chapter 246, Chapter 248, Episode 104 (2011).',
    },
  },
  'meleoron': {
    98: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_98_(2011)',
      note: 'Checked Chapter 231, Chapter 232, Chapter 233, Chapter 241, Episode 98 (2011). Independent verifier correction: Opening motive narrowed to observable concealed watching.',
    },
    102: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_102_(2011)',
      note: 'Checked Chapter 241, Chapter 242, Episode 102 (2011). Independent verifier correction: Shared text keeps foster father unnamed because Peggy is a manga-only record.',
    },
    108: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_108_(2011)',
      note: 'Checked Chapter 256, Episode 108 (2011).',
    },
    112: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_112_(2011)',
      note: 'Checked Chapter 267, Episode 112 (2011).',
    },
    118: {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_118_(2011)',
      note: 'Checked Chapter 280, Episode 118 (2011).',
    },
  },
  'bihorn': {
    '97:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_227',
      note: 'Checked Chapter 227.',
    },
  },
  'pell': {
    '96:episode': {
      source: 'https://hunterxhunter.fandom.com/wiki/Episode_96_(2011)',
      note: 'Authoring correction: episode 96 includes the capture and autopilot deaths. Combined into one anime opening; manga Pell remains unnamed and has no chronicle.',
    },
  },
  'tsukuma': {
    '96:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_224',
      note: 'Checked Chapter 224.',
    },
  },
  'taragetter': {
    '110:chapter': {
      source: 'https://hunterxhunter.fandom.com/wiki/Chapter_261',
      note: 'Checked Chapter 251, Chapter 261.',
    },
  },
}
