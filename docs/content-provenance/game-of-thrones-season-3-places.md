# Game of Thrones, season 3 places: research notes

Research for the places of the third stage (#1630): season 3 of the show
(episodes 21–30) and _A Storm of Swords_ from its prologue through chapter 52,
Arya XI (site chapters 144–196; site = 144 + the chapter, prologue 144). Each
place's pages are under its key in `game-of-thrones.json`, and every Game of
Thrones Wiki page read is pinned in `sources.json`. A Wiki of Ice and Fire's
chapter pages were read from the shared cache (`.gate/firecrawl/`), unpinned. No
text is copied from the sources.

## Rules

The stage-2 rules (`game-of-thrones-season-2-places.md`, #1469 and #1476),
restated for the stage:

- **What is filed.** A place a scene is set in, in either medium, and a place
  both media name in the stage and neither visits (#1035, #1476). Roads and
  camps are not filed; rooms, towers and gates inside a filed place fold into
  it; regions stay regions.
- **Gates.** A visited place opens in each medium at the first scene set there,
  once named in that medium. A place one medium visits and the other only names
  in the stage opens in the other at its naming (#1252); a place the other
  medium neither visits nor names in the stage is a `source` record, its other
  number only ordering it. A named-only place opens at each medium's first
  naming in the stage. The naming signal for places is the 2026-11-13 rule: a
  POV character's close-third narration counts as thought.
- **Dated steps.** A place filed earlier that the stage visits for the first
  time (a named-only place), or that the stage takes, sacks or overruns, gets a
  dated `visits` entry with both pins; a destroyed, badly damaged or taken place
  also gets a drawing stage. A place filed earlier and only visited again gets
  nothing, as in stage 2.
- **Filed here.** Each character is filed at one place: the show's when it is
  filed, the book's when the show's is a road or a camp. Characters a cast group
  has not filed yet are added by that group.
- **Not viewed.** Neither the episodes nor the books were viewed. Show gates
  follow the Game of Thrones Wiki's synopses, Appearances pages and place pages;
  book gates follow A Wiki of Ice and Fire's chapter pages (the Place row of the
  infobox, the synopsis and the "Mentions: Places" list). A naming that rests
  only on a Mentions list or an Appearances list is an owner check below.

## Visited places

| Place                     | Episode | Chapter | Note                                     |
| ------------------------- | ------- | ------- | ---------------------------------------- |
| `astapor`                 | 21      | 167     | both media                               |
| `yunkai`                  | 27      | 186     | both media                               |
| `nightfort`               | 29      | 170     | the show visits it; the book names it    |
| `inn-of-the-kneeling-man` | 22      | 155     | book only; the episode orders it         |
| `milkwater`               | 21      | 151     | book only                                |
| `maidenpool`              | 23      | 165     | book only                                |
| `high-heart`              | 23      | 166     | book only                                |
| `acorn-hall`              | 23      | 166     | book only                                |
| `stoney-sept`             | 24      | 173     | book only                                |
| `hollow-hill`             | 24      | 178     | book only; the show's cave is not named  |
| `queenscrown`             | 29      | 184     | book only; the show's tower is not named |
| `oldstones`               | 29      | 189     | book only                                |
| `lord-harroways-town`     | 29      | 191     | book only                                |

## Named-only places

| Place          | Episode | Chapter | Naming                                                    |
| -------------- | ------- | ------- | --------------------------------------------------------- |
| `meereen`      | 28      | 152     | Mero's coins; Daenerys I (Mentions)                       |
| `karhold`      | 25      | 153     | "Rickard Karstark, Lord of Karhold"; Bran I               |
| `last-hearth`  | 26      | 151     | Theon, "Last Hearth?"; Jon I (Mentions)                   |
| `mummers-ford` | 24      | 161     | the Hound was not at Mummer's Ford; Arya III (Mentions)   |
| `shadow-tower` | 25      | 144     | Jon names the three manned castles; prologue (Mentions)   |
| `bay-of-seals` | 29      | 174     | episode 29's Appearances page; Jon IV (Mentions)          |
| `castamere`    | 28      | 163     | Cersei, "House Reyne of Castamere"; Tyrion III (Mentions) |

## Dated steps on earlier places

| Place                   | Episode | Chapter | Step                                                  |
| ----------------------- | ------- | ------- | ----------------------------------------------------- |
| `harrenhal`             | 22      | 121     | taken: the northmen hold it for Robb; drawing stage   |
| `fist-of-the-first-men` | 21      | 162     | overrun: the attack and the flight south              |
| `crasters-keep`         | 24      | 177     | taken by the mutineers; no drawing stage              |
| `dreadfort`             | 30      | 284     | visited: Theon held there and renamed (#852)          |
| `flea-bottom`           | 21      | 150     | visited, the show alone: Margaery and the orphans     |
| `astapor`               | 24      | 171     | sacked: the Unsullied bought and the masters killed   |
| `yunkai`                | 29      | 187     | taken by night; the book's chapter is the place's own |

Drawing stages: `fist-of-the-first-men` 21 / 159 (Jon II, the dead horses on the
slope), `harrenhal` 22 / 121 (the banners over the gatehouse), `astapor` 24 /
171 (smoke over the city, the gate open, the whip dropped), `yunkai` 29 / 187
(the gate open).

## Open points

### Visited

- `astapor`: show 21, "Valar Dohaeris", the ship arrives and Kraznys shows
  Daenerys the Unsullied. Book 167, Daenerys II; Daenerys I (152) names the city
  as the ship's destination and is set at sea. The sack's smoke in the drawing
  is the show's; the book chapter page says only that the city is conquered.
  Filed here: Missandei and Kraznys mo Nakloz. Italian "Astapor", Italian
  Wikipedia's section.
- `yunkai`: show 27, "The Bear and the Maiden Fair". Book 186, Daenerys IV,
  which also tells the night attack and the freed slaves; the visit and the
  stage take chapter 187. Filed here: Grey Worm, Grazdan mo Eraz, Mero, Daario
  Naharis, Prendahl na Ghezn. Owner check: the issue counts a taken place as a
  drawing stage; the city is not damaged, so the stage only opens the gate.
- `nightfort`: show 29, Sam names it to Gilly in "The Rains of Castamere"
  (quoted on the episode page), and "Mhysa" (30) sets the first scene there; the
  gate is the naming (filing-records §2, review round 1). Owner check: stage 2
  gated the Skirling Pass at its visit, not its naming. Book 170, Jon III: the
  chapter page lists it among the places mentioned, the line not read (owner
  check). The books set a scene there in Bran IV (site 200), the next stage.
  Italian "Forte della Notte", the Italian Game of Thrones Wiki.
- `inn-of-the-kneeling-man`: Jaime II (155), the chapter's Place row; Arya II
  (157). The show's outlaws take Arya to the Inn at the Crossroads ("Walk of
  Punishment"), already filed, so the book's inn is the book's alone. Episode 22
  orders it. Italian "Locanda dell'Uomo in Ginocchio", the Italian Game of
  Thrones Wiki.
- `milkwater`: Jon I (151), "along the Milkwater"; the prologue names it. The
  show sets Mance's camp in the Frostfangs, folded into the Skirling Pass in
  stage 2. Italian "Fiumelatte". Filed here: Mance Rayder, Tormund, Orell, Styr,
  Dalla, Val and Jarl (#1638), met in Mance's camp.
- `maidenpool`: Jaime III (165), the town deserted and sacked. The show named it
  in episode 15; season 3 does not.
- `high-heart`, `acorn-hall`: Arya IV (166). The show named Acorn Hall in season
  1 (GOT107) and never sets a scene there; season 3 does not name it.
- `stoney-sept`: Arya V (173).
- `hollow-hill`: Arya VI (178). Name as A Wiki of Ice and Fire writes it, in
  lower case. Italian "la collina cava" is assumed.
- `queenscrown`: Bran III (184) and Jon V (185). The Game of Thrones Wiki says
  the show's ruin in episode 29 is never named on screen. The drawing's gilded
  merlons follow its "In the books" note.
- `oldstones`: Catelyn V (189). The show names Oldstones in season 7.
- `lord-harroways-town`: Arya IX (191). The show names it in season 7.

### Named only

- `meereen`: show 28, Mero's three coins (synopsis; the line is not quoted).
  Episode 23's "Meereenese Knot" is a lower point, an adjective (owner check).
  Book 152, Daenerys I (Mentions). Its summary and log say only "a city in
  Essos": nothing more is told in both media by the gate.
- `karhold`: show 25 (quoted); book 153, Bran I's synopsis.
- `last-hearth`: show 26 (quoted); the show first named it in episode 4, before
  _A Game of Thrones_ did (#1248). Book 151, Jon I (Mentions); Bran I (153)
  names it in the synopsis.
- `mummers-ford`: show 24, reported speech in the synopsis; book 161, Arya III
  (Mentions).
- `shadow-tower`: show 25, the synopsis; book 144, the prologue (Mentions).
- `bay-of-seals`: show 29 rests on the episode's Appearances page and the place
  page's citation; no line is quoted (owner check, as the Dreadfort was in stage
  2). Book 174, Jon IV (Mentions).
- `castamere`: show 28 (quoted). Book 163, Tyrion III (Mentions); the books name
  it in _A Clash of Kings_ (site 113), but a named-only place opens at the
  stage's own naming, as Oldtown did. The drawing keeps the castle whole.

### Dated steps

- `harrenhal` 22 / 121: Robb's host finds the castle abandoned in "Valar
  Dohaeris" (21) and leaves Roose Bolton in command in "Dark Wings, Dark Words"
  (22). In Arya IX (_A Clash of Kings_, site 121) the freed northmen and the
  Brave Companions take it, Roose arrives, and the flayed man and the direwolf
  go up over the gatehouse. The book's pin is stage 2's; neither stage-2 PR
  filed it. The show's banners are not checked.
- `fist-of-the-first-men` 21 / 162: "Valar Dohaeris" opens after the attack;
  Samwell I (162) tells the fight and the flight. The prologue (144) is set on
  the hill before the attack; it carries no step of its own, because the show
  has no matching scene and a visit needs a distinct episode. The drawing stage
  takes Jon II (159), where Jon sees the dead horses.
- `crasters-keep` 24 / 177: the survivors reach the keep in "Walk of Punishment"
  (23) and mutiny in "And Now His Watch Is Ended" (24); Samwell II (177) has
  both. A place's visits need distinct chapters, so one visit carries both, at
  the mutiny. The keep is taken but not damaged: no drawing stage (owner check).
- `dreadfort` 30 / 284: the show's captivity scenes from episode 22 never name
  the place (the episode page's note); "Mhysa" names it in Yara's speech and has
  Ramsay name Theon Reek. The books tell the same in Reek I (_A Dance with
  Dragons_, site 284), past the stage (#852).
- `flea-bottom` 21, the show alone: Margaery and the orphanage. Sansa I (150),
  where the book's Margaery is met at court, orders it.

### Earlier texts

The leak scan reads every text against the new records, so texts filed before
this stage that name a new place before it opens are either reworded or covered
by a `nameSaidAt`:

- `karhold`: Rickard Karstark's summary, role, log and season-1 story no longer
  name Karhold, which the show first names in episode 25 (the place page cites
  GOT305). His role is now "Head of House Karstark", as #1476 did for Roose
  Bolton.
- `last-hearth`: `nameSaidAt: 4`, the show's naming in episode 4 (GOT104), for
  the Umbers' season-1 texts.
- `shadow-tower`: `nameSaidAt: 15`, "The Ghost of Harrenhal", where Qhorin leads
  his men from the Shadow Tower (the Qhorin page cites GOT205), for season 2's
  texts. Stage 2 could have filed it at 15 / 80; it opens at this stage's own
  naming, as Highgarden did (owner check).
- `astapor`: `nameSaidAt: 18`, "The Prince of Winterfell" (#1476's inventory),
  for Daenerys's and Jorah's season-2 stories.
- `milkwater`: `nameSaidAt: 15`, the order of Thoren Smallwood's books-only
  relationships, which say the name after _A Clash of Kings_ does (Jon IV, site
  108). Their Italian texts now say "Fiumelatte", the record's Italian name.

### Omitted

- Slaver's Bay: a region; its cities are filed.
- The Frostfangs and Mance Rayder's camp: folded into the Skirling Pass in stage
  2, and a camp.
- Onion Rock (Davos I, 149): the rock in Blackwater Bay Davos is stranded on;
  the show's rock is unnamed, and the bay is filed.
- The Summer Sea: Daenerys I (152) is set aboard the _Balerion_; the scene is
  the ship, and the show never names the sea (owner check).
- Tumbledown Tower (Bran I, 153): a ruined watchtower in the wolfswood, folded
  into it; the wolfswood is a visited place, so it takes no step.
- Greyguard and the cave near it (Jon III, Jon IV): the climb is on the Wall's
  face, folded into the Wall; the Wall is a visited place.
- The Duskendale road, the small sept of Jaime III, the septry of Arya VII, Lord
  Goodbrook's village, the village near Harrenhal, Old Pate's cottage: roads and
  unnamed buildings.
- The abandoned village of Samwell III (190): Sam takes it for Whitetree, then
  sees that the heart tree's face is not the same; it is not named.
- Hag's Mire (Catelyn V): the host's stop on the road, where it camps.
- The Stone Mill: both media name it (episode 23; Catelyn II, 158), but it is a
  mill on the Red Fork whose fords the battle was fought at; folded into the Red
  Fork (owner check).
- The Red Fork, the Trident, the Green Fork, the Whispering Wood, Riverrun, the
  Twins, Castle Black, the Wall, Mole's Town, the Inn at the Crossroads, Pyke,
  Dragonstone, King's Landing, Blackwater Bay: places filed earlier that the
  stage visits again with no change to them (the Red Wedding, Jon's return and
  Davos's rescue included). Their scenes belong to the characters' steps.
- Saltcliffe (episode 24), the Weeping Water and Rook's Rest (episode 30): the
  show names them; no chapter of the stage does.
- The streets and hills of King's Landing (episode 30), the Tower of the Hand,
  the throne room, the Painted Table, the Walk of Punishment and the Plaza of
  Pride: inside filed places.
- The Gift, Brandon's Gift and the New Gift: lands, not places.
- Duskendale, Sunspear, Dorne, the Stepstones, Greywater Watch, the Isle of
  Faces and the other places only the book names in the stage: the Game of
  Thrones Wiki's season 3 Appearances pages list none of them.
