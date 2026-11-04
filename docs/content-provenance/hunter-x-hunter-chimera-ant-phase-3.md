# Chimera Ant phase 3 inventory

Chapters 223–260 and episodes 95–109 (#1022). Episode 95 carries over the Cheetu
fight and the captive Kite scene, then adapts chapter 223 from the rally
broadcast and Netero's call. Every page was read through the English wiki's
MediaWiki API and is pinned in `sources.json`; Italian names come from Italian
Wikipedia's API. Manga panels, episode timestamps and Italian dub audio are
unviewed.

A gate is the first chapter or episode whose synopsis gives an explicit naming
signal: an introduction, "named", the name in quoted or reported speech or in a
printed thought, or a caption. Narration alone never counts, and a medium that
only narrates a name waits. A name only one medium gives makes a source-only
record.

## Filed

| Candidate    | Gate               | Disposition                                                                                                                                                                                                                                             |
| ------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tsukuma      | ch 224, manga only | The news interview identifies the officer. No relationship (omitted with reason).                                                                                                                                                                       |
| Pell         | ep 96, anime only  | Episode 96 reveals his name; chapter 226 uses it only editorially. Shalnark kills him in the same episode, so the record opens deceased and keeps its first drawing (the death exception).                                                              |
| Bihorn       | ch 227, manga only | Pike names him in a boast during his fight. Seen at the nest earlier, unnamed. No exchange with a filed character in the window: relationships omitted.                                                                                                 |
| Flutter      | ch 235 / ep 100    | His warning identifies him. Italian name Flatta (Formichimere#Flatta).                                                                                                                                                                                  |
| Ikalgo       | ch 238 / ep 101    | Chapter 238: Killua puzzles over the squid word in his name. Episode 101: its title card, "Ikalgo × And × Lightning"; no synopsis of episodes 100–109 reports the name in speech. Italian name Calamaro. **Owner decision**: a title card as a caption. |
| Remora       | ch 238, manga only | Chapter 238 names "a small fish-like Ant named Remora". Episode 101 only narrates that the siblings plan to share meat with him, so the anime evidence does not hold: the record is now the manga's alone.                                              |
| Meleoron     | ch 241, manga only | He gives Gon a false name, then introduces himself. Episodes 100–102 show him with Gon, but no synopsis reports his name said. Italian name Meleolon (Formichimere#Meleolon).                                                                           |
| Welfin       | ch 246 / ep 104    | Named in Leol's thought: he plans to have Welfin and Bloster chase off the Hunters' foot soldiers. Neferpitou repeats "Welfin reported" in chapter 256. Italian name Welfang.                                                                           |
| Bloster      | ch 246 / ep 104    | Named in the same thought. Seen unnamed at the nest (ch 188 / ep 78) and in news footage (ch 224). Italian name Bloburda.                                                                                                                               |
| Bizeff       | ch 250, manga only | "A director named Bizeff", read as a caption. Episode 105 gives the name only in its narrator's list of the palace's humans, as episode 81 did for Hagya, so the anime waits. Italian Wikipedia has "Bizef" in passing only: English name kept.         |
| Komugi       | ch 257 / ep 103    | She introduces herself in both.                                                                                                                                                                                                                         |
| Meteor City  | ch 224 / ep 96     | Named in chapter 102 / episode 24, first visited when the Troupe returns. The gate is the visit; no text names it earlier, so it needs no `nameSaidAt`.                                                                                                 |
| Luonton City | ch 235 / ep 100    | Pitou reports the location, and Killua tries to warn the residents.                                                                                                                                                                                     |
| Peijin       | ch 243, manga only | Episode 102 calls it the capital.                                                                                                                                                                                                                       |
| Mandai City  | ch 243 / ep 102    | Knuckle names the rendezvous. The planning scene visits it at chapter 256 / episode 108.                                                                                                                                                                |

Hagya keeps one record. The anime never says his manga name (episode 81 only
narrates it) and introduces him to Morel as Leol in episode 106, so the anime
opens the record at 106 under `episodeName` "Leol". The manga gives the name
Leol in his role at chapter 240. No chapter text says "Leol" before 240, and the
leak scan holds every text to that (`animeNamesOf` in `src/data/leaks.test.ts`).
Morel kills him with carbon dioxide in a flooded chapel: Leol's page and chapter
254 call it his death, and episode 107 shows the same scene. His status and
drawing change at chapter 254 / episode 107.

## Returning dossiers

| Character                                    | Change in the window                                                                                                                                                          |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gon                                          | Nen back after the 30 days and matched with Killua against Neferpitou, ch 223 / ep 95.                                                                                        |
| Killua                                       | Matched with Gon against Neferpitou, ch 223 / ep 95.                                                                                                                          |
| Morel                                        | Matched with Knov against Shaiapouf, ch 223 / ep 95 (the manga adds Palm). Kills Hagya, ch 254 / ep 107 (relationship).                                                       |
| Knuckle, Shoot                               | Matched together against Menthuthuyoupi, ch 223 / ep 95.                                                                                                                      |
| Netero                                       | Sets the matchups and keeps the King for himself, ch 223 / ep 95 (affiliation).                                                                                               |
| Knov                                         | Matched with Morel against Shaiapouf, ch 223 / ep 95 (affiliation). Withdraws from the assault, ch 251 / ep 106 (role).                                                       |
| Palm                                         | Matched with Knov and Morel against Shaiapouf, ch 223, manga only: episode 95 leaves her out (affiliation). Rides into the palace in Bizeff's trucks, ch 252 / ep 106 (role). |
| Zazan                                        | Killed by Feitan, ch 229 / ep 97.                                                                                                                                             |
| Pike                                         | Killed by Shizuku, ch 228 (manga-only record), with a death drawing.                                                                                                          |
| Cheetu                                       | Swears loyalty to the King for a new ability, ch 235 / ep 100 (role and affiliation). Alive through the window.                                                               |
| Meruem                                       | Komugi as the opponent he cannot beat, ch 257 / ep 103; he sets out to kill her, saves her and calls her an important guest, ch 258 / ep 108 (relationships).                 |
| Neferpitou                                   | Ordered by the King to guard Komugi, ch 259 / ep 109 (relationship).                                                                                                          |
| Kite                                         | Recovered under enemy control, ch 217 / ep 93 (role, filed in phase 2's window).                                                                                              |
| Shaiapouf, Menthuthuyoupi                    | No material change: they hand out abilities, watch the games and guard.                                                                                                       |
| Colt                                         | No material change: still under Morel's protection, which is filed; his report on the Squadron Leaders (ch 234 / ep 99) is information, not a change of side.                 |
| Peggy                                        | No change to the manga record. See the owner decisions on his anime name.                                                                                                     |
| Shizuku, Phinks, Bonolenov, Feitan, Shalnark | No material change: they fight at Meteor City, and the kills are filed on the victims (Zazan, Pike, Pell).                                                                    |
| Kalluto                                      | No new dated fact. Chapter 229 gives his reason for joining the Troupe, which episode 97 does not, and the brother is unnamed there.                                          |
| Alluka, Milluki, Kikyo, Illumi               | Family photograph at ch 229 / ep 97, mention only. Alluka is the unnamed sibling there.                                                                                       |
| Chrollo, Nobunaga, Genthru, Zeno             | Mentioned only (ch 229–230 / ep 97–98). Netero recruits Zeno at ch 262–263, phase 4.                                                                                          |
| Kurapika, Leorio                             | Chapter 255 cover only.                                                                                                                                                       |
| Welfin, Bloster                              | Filed above. Their affiliation, the King's service, holds from their gate.                                                                                                    |

## Pending: named after the window

| Candidate            | Reason                                                                                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Taragetter           | Knov kills an unnamed ant at ch 251 / ep 106; Welfin names him in chapter 261 (phase 4).                                                                                       |
| Hina (Hirin)         | The wiki cites "Hirin" to chapter 245 and episode 103 has "Hina" in Leol's reasoning, but both synopses read as narration. "Hina" in speech is cited to chapter 261 (phase 4). |
| Pariston Hill        | The Election. Phase 3 refers to the office only.                                                                                                                               |
| Marcos               | Seen from ch 231 / ep 98, but every synopsis in the window names him editorially (ch 231, 234, 250, 252; ep 98, 105). Carried to #1023's inventory to find the scene.          |
| Gyro (relationships) | No exchange with a filed character in the window; his ties to Ikalgo and Welfin are told in chapter 309, so the registry now points at #1024.                                  |

## Omitted

| Candidate                                                                                                                                       | Reason                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Likke, Grachan                                                                                                                                  | Mention only. Grachan's name is on the Rental Pod and in Morel's line, but he is never seen.                                                           |
| Ortho Siblings                                                                                                                                  | A collective name; neither sibling is named.                                                                                                           |
| Hollow                                                                                                                                          | A personal name on the wiki (ホロウ), but the synopses of ch 231–233, 243 and ep 98–102 use it only editorially, and Viz omits it. No explicit signal. |
| Dog, Gun-toting Ant, Gorilla, Longhorn Beetle, Small Beetle, Snake, Bat, Carabid Beetle, Shark                                                  | Species labels from the credits ("Dog-Type", "Shark-Type"); no personal name in the window.                                                            |
| Ming Jol-ik's Double, Meteor City Residents, Chimera Ant Queen, East Gorteau Shogi Champion, East Gorteau Go Champion, Underground Clinic Nurse | Collective labels, titles or descriptions.                                                                                                             |
| Nebaska                                                                                                                                         | Mention only, in the newscast.                                                                                                                         |
| Zazan's Palace, Underground Lake, Underground Clinic                                                                                            | Visited (ch 224 / ep 96, ch 237 / ep 100, ch 255 / ep 107), but the story gives no proper name; the clinic's title is the wiki's own.                  |

## Owner decisions

- **Ikalgo's anime gate** is the title card of episode 101, read as a caption.
  If a title card does not count, the record becomes the manga's alone
  (`source: 'chapter'`) until a later phase finds the scene.
- **Peggy's anime name.** Meleoron names him to Gon in episode 102. Under the
  gate rule that makes Peggy a record of both media from episode 102, but the
  anime kills him in episode 91, so the record would open dead there, his
  relationships and death drawing (pinned at 91) would move to 102, and his
  first drawing would show a dead character. The record stays the manga's alone
  pending a ruling.
- **An in-show narrator** does not open a name in the anime (Bizeff at episode
  105), following Hagya at episode 81.
- **Morel's relationship snapshot** holds five people at most; at chapter 254
  Colt gives way to the Hagya fight.

## Owner checks

The lower inferred points and frames this phase rests on:

- Ch 238: the line that gives Ikalgo's name; ep 101: the title card on screen.
- Ch 246 / ep 104: Leol's thought naming Welfin and Bloster; ch 245 / ep 103:
  whether Hirin or Hina is said.
- Ch 250: the caption naming Bizeff; ep 105: whether anyone but the narrator
  says it; ep 106: Palm's arrival.
- Ch 224: the caption or line that identifies Tsukuma.
- Ch 227: Pike's line naming Bihorn; ep 96: the line that reveals Pell's name.
- Ch 238 and ep 101: Remora's name; whether the anime says "Coburn".
- Ch 241: Meleoron's self-introduction; ep 100–102: whether the anime has it.
- Ch 231, 234 and ep 98: whether Marcos's name is said or shown.
- Ch 254 / ep 107: Leol's death.
- Ch 235 / ep 100: Cheetu's allegiance to the King.
- Every drawing of this phase against its threshold frame.

Flutter's biography (revision 424825) dates his killing to chapter 246 and
identifies the body in chapter 248. The chapter 248 synopsis calls him
unconscious, and episode 104 calls him defeated. His death waits for phase 4,
against the Living Dead Dolls scene in chapter 262 and its anime counterpart.
The manga reveal of Netero's orders falls in phase 4. The anime commander's
identity as Gyro is unverified.
