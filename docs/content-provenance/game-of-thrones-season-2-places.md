# Game of Thrones, season 2 places: research notes

Research for the places of the second stage (#1459): season 2 of the show
(episodes 11–20) and _A Clash of Kings_ (site chapters 74–143). Each issue that
files places adds its own section. Each place's pages are under its key in
`game-of-thrones.json`, and every wiki page read is pinned in `sources.json`. No
text is copied from the sources.

## Visited places (#1469)

Places a scene of season 2 or _A Clash of Kings_ is set in. The rules are the
season 1 ones (`game-of-thrones-season-1-places.md`), restated for the stage:

- **What is filed.** A place a scene is set in, in either medium. Roads are not
  filed (2026-11-02). Rooms, towers and gates inside a filed place fold into it,
  as they did in season 1.
- **Gates.** A place opens in each medium at the first scene set there, once the
  place has been named in that medium. A place one medium visits and the other
  only names opens in the other at its naming (#1252); a place the other medium
  neither visits nor names in the stage is a `source` record, its other number
  only ordering it. Chapters are site chapters: _A Clash of Kings_' chapter N
  (prologue 0) is site chapter 74 + N.
- **Named-only places visited.** A place season 1 filed as named only and the
  stage visits keeps its record; the visit is a dated `visits` entry on its
  dossier, and the characters first met there join its `filedHere`.
- **Filed here.** Each character is filed at one place. When the two media first
  show a character in different places, the show's place is used; when the
  show's place is not filed (an unnamed camp), the book's is.
- **Not viewed.** Neither the episodes nor the books were viewed. Show gates
  follow the Game of Thrones Wiki's synopses and place pages; book gates follow
  its episodes' "In the books" chapter lists, the Ice and Fire Wiki and A Wiki
  of Ice and Fire (read through the Firecrawl tool). Every open point is in
  `game-of-thrones.json` under `unverified`, and below.

### Filed

| Place                         | Episode | Chapter | Note                                  |
| ----------------------------- | ------- | ------- | ------------------------------------- |
| `crasters-keep`               | 11      | 97      | both media                            |
| `red-waste`                   | 11      | 86      | both media                            |
| `whitetree`                   | 11      | 87      | book only; the episode orders it      |
| `vaes-tolorro`                | 11      | 86      | book only; the episode orders it      |
| `lordsport`                   | 12      | 85      | both media                            |
| `stony-shore`                 | 13      | 111     | the show names it; the book visits it |
| `bitterbridge`                | 13      | 96      | book only; the episode orders it      |
| `oxcross`                     | 14      | 106     | the show visits it; the book names it |
| `garden-of-bones`             | 14      | 101     | show only; the chapter orders it      |
| `guildhall-of-the-alchemists` | 15      | 94      | both media                            |
| `fist-of-the-first-men`       | 15      | 108     | both media                            |
| `skirling-pass`               | 16      | 125     | both media                            |
| `storms-end`                  | 18      | 105     | the show names it; the book visits it |
| `blackwater-bay`              | 18      | 132     | both media                            |
| `house-of-the-undying`        | 20      | 122     | both media                            |

Fifteen places, under the issue's split point of about 25.

### Visits to named-only places

| Place         | Episode | Chapter | Note                               |
| ------------- | ------- | ------- | ---------------------------------- |
| `dragonstone` | 11      | 74      | Stannis's court                    |
| `pyke`        | 12      | 85      | Theon comes home                   |
| `gods-eye`    | 13      | 88      | book only: Yoren's band ambushed   |
| `harrenhal`   | 14      | 100     | the captives brought to the castle |
| `qarth`       | 14      | 101     | Daenerys let into the city         |

### New words

- Forms: `hill` (the Fist), `pass` (the Skirling Pass), `desert` (the Red Waste,
  the Garden of Bones), `coast` (the Stony Shore) and `bay` (Blackwater Bay).
  Italian labels Collina, Passo, Deserto, Costa, Baia: plain words, not checked
  against the dub.
- Region: `the-stormlands`, with Storm's End, "Terre della Tempesta" as Italian
  Wikipedia's places page heads the region.

### Open points

#### `crasters-keep`

- Show 11, "The North Remembers": the ranging arrives at the keep. Book 97, Jon
  III. Both media name Craster before the visit; whether the keep's own name is
  said in episode 11 is not checked (owner check).
- Italian "Fortezza di Craster" from Italian Wikipedia's season 3 and 4 episode
  lists ("la fortezza di Craster"); the dub form is unconfirmed.
- Filed here: Craster, Gilly and Eddison Tollett (the show first has Edd at the
  keep in episode 11; the book meets him at Whitetree).

#### `red-waste`

- Show 11: Jorah tells Daenerys he has not been as far east as the Red Waste
  (the Red Waste page, reported speech). Book 86, Daenerys I. A Game of Thrones
  ends with the khalasar at the waste's margins (Ice and Fire Wiki), and A Wiki
  of Ice and Fire says its chapter 72 (site 73) already names the waste. The
  gate stays 86, the first scene set there.
- Italian "Desolazione Rossa", Italian Wikipedia's places page.
- Filed here: Kovarro (show only), sent out from the waste in episode 11.

#### `whitetree`

- Book only: Jon II (87) is set in the empty village; the show passes "several
  abandoned wildling villages" in episode 11 and names none. Episode 11 orders
  it.
- Italian "Albero Bianco" is assumed, not checked against the Mondadori edition.
- Filed here: Jarman Buckwell and Mallador Locke, both books only.

#### `vaes-tolorro`

- Book only: Daenerys I (86) finds and names the ruined city. The show has no
  ruined city. Episode 11 orders it.
- Italian "Vaes Tolorro", as Italian Wikipedia's Jorah Mormont page writes it.
- Filed here: Quaithe, who introduces herself to Daenerys here (Daenerys I, 86;
  owner, 2026-11-22, filed by #1477).

#### `lordsport`

- Show 12, "The Night Lands": Theon disembarks at Lordsport (synopsis; the line
  that names the town is not quoted, owner check). Book 85, Theon I.
- Italian "Lordsport", the Italian Game of Thrones Wiki's page.
- Filed here: Aeron Greyjoy (books: the priest on the strand at Lordsport) and
  Dagmer (show: he introduces himself to Theon at Lordsport in episode 15).

#### `stony-shore`

- The show names it in episode 13, "What Is Dead May Never Die": Balon gives
  Theon one ship to raid its fishing villages (reported speech). The show never
  sets a scene there: Theon's raid in episode 15 is on Torrhen's Square, off
  screen. The book names it in Theon II (98) and sets Theon III (111) there.
  Gate 13 / 111 (#1252).
- Italian "Costa Pietrosa", the Italian Game of Thrones Wiki's page.

#### `bitterbridge`

- Book only: Catelyn II (96), Renly's host and his tourney at Bitterbridge. The
  show's camp in episode 13 is "in the Stormlands" and never named. Episode 13
  orders it.
- Italian "Ponte Amaro", the Italian Game of Thrones Wiki's page.
- Filed here: Brienne of Tarth and Margaery Tyrell. The show meets both at
  Renly's camp, which is not filed, so the book's place has them.

#### `storms-end`

- The show names it in episode 18, "The Prince of Winterfell": the Storm's End
  page cites that episode (GOT208) for the castle's name, and the episode's
  notes say Stannis relates the siege of Storm's End (the line is not quoted).
  The show sets no scene there in season 2: the "What Is Dead May Never Die"
  notes say Storm's End "wasn't introduced", and the episode 14 parley is only
  "near" it. The book sets Catelyn III (105) in Renly's camp under the castle,
  and Davos II (116) at its walls. Gate 18 / 105 (#1252).
- Its log tells what both media tell by the gate: Stannis's old siege and the
  smuggler's onions (Davos I, 84, in the books).
- Italian "Capo Tempesta", Italian Wikipedia's places page.
- Filed here: Cortnay Penrose, books only.

#### `oxcross`

- Show 14, "Garden of Bones": the episode opens on the field after Robb's
  victory (synopsis section "At Oxcross"). Whether the name is said in the
  episode is not checked (owner check). The book never visits it: Sansa III
  (106) names the battle when Joffrey learns of it. Gate 14 / 106 (#1252).
- Robb's battle itself is a battlefield, as the Whispering Wood was; the record
  is the village.
- Italian "Oxcross", the Italian Game of Thrones Wiki's page.
- Filed here: Talisa Maegyr (show only), met tending the wounded.

#### `garden-of-bones`

- Show only: Jorah names the desert before Qarth's walls in episode 14, and the
  khalasar waits there for the city's answer. A Wiki of Ice and Fire has no page
  for it. Chapter 101, where Daenerys II lets her into Qarth, orders it.
- Italian "Giardino delle Ossa" is assumed; the dub form is unconfirmed.

#### `guildhall-of-the-alchemists`

- Show 15, "The Ghost of Harrenhal": Lancel reports Cersei's meetings with the
  Alchemists' Guild, and Tyrion visits Hallyne at the Guildhall. Book 94, Tyrion
  V: Tyrion inspects the guild's wildfire with Hallyne.
- Italian "Palazzo dell’Ordine degli Alchimisti", Italian Wikipedia's places
  page heading.
- Filed here: Hallyne, books only.

#### `fist-of-the-first-men`

- Show 15: the ranging arrives at the Fist (the Fist of the First Men page,
  GOT205). Book 108, Jon IV. Whether episode 15 says the name is not quoted
  (owner check).
- Italian "Pugno dei Primi Uomini", Italian Wikipedia's places page.
- Filed here: Qhorin Halfhand and Stonesnake. Qhorin arrives at the Fist in both
  media; the show has Qhorin pick Stonesnake there in episode 15.
- The Fist's attack falls in the third season and book, past the stage.

#### `skirling-pass`

- Show: Jeor names the pass in episode 15; Qhorin's party rides through it in
  episode 16 (the episode's gallery caption). Book 125, Jon VI: Jon and
  Stonesnake climb to the watchers in the pass. Gate 16 / 125.
- The Frostfangs, the range the pass crosses, are folded into it: the scenes are
  in the pass.
- Italian "Passo Skirling", Italian Wikipedia's Lo scontro dei re page.
- Filed here: Ygritte, Ebben, Dalbridge and the Lord of Bones.

#### `blackwater-bay`

- Show: Salladhor names it in episode 12 ("the bottom of Blackwater Bay",
  quoted); Stannis's fleet sails into it in episode 18. Book 132, Davos III.
  Gate 18 / 132. Tyrion IX (115) was considered: it is a scene at the King's
  Landing harbour, not on the bay.
- The Blackwater Rush, where the river meets the bay and the chain is raised, is
  folded into the bay. The battle on it is the stage's battlefield, filed as the
  water it is fought on, as the Whispering Wood was.
- Italian "Baia delle Acque Nere", Italian Wikipedia's places page.

#### `house-of-the-undying`

- Show: Pyat Pree invites Daenerys to it in episode 15 (reported speech); she
  enters it in episode 20. Book: named in Daenerys II (101), Pyat Pree's
  invitation, entered in Daenerys IV (122). Gate 20 / 122.
- `nameSaidAt` 14: the book's naming in Daenerys II (101) orders at episode 14,
  as Qarth's visit does; the Essos relationship cards of chapter 114 (#1477)
  need it.
- Its burning: the book's Drogon sets it alight in the chapter that opens it,
  and the show's in the episode that opens it, so the first drawing shows the
  house as she enters it and no stage follows in this stage.
- Italian "Casa degli Eterni", Italian Wikipedia's Daenerys Targaryen and Jorah
  Mormont pages.

#### Visits

- `dragonstone` 11 / 74: "The North Remembers" and the prologue, Stannis's
  court; his old maester dies trying to poison the red priestess. Filed here:
  Stannis, Melisandre, Davos, Cressen, Matthos, Salladhor Saan, Selyse and
  Shireen.
- `pyke` 12 / 85: Theon comes home to his father, who receives him coldly ("The
  Night Lands"; Theon I). Filed here: Balon, Asha, Victarion and Wex.
- `gods-eye` 13 / 88, books only: Yoren's band shelters in an abandoned town on
  the lake's southern shore and is attacked there (A Wiki of Ice and Fire, Gods
  Eye, citing Arya IV). The show's holdfast in episode 13 is not tied to the
  lake; episode 13 orders the visit.
- `harrenhal` 14 / 100: Arya, Gendry and Hot Pie are brought to the castle with
  the other captives ("Garden of Bones"; Arya VI). Filed here: the Tickler,
  Chiswyck, Weese and Vargo Hoat.
- `qarth` 14 / 101: Daenerys is let into the city ("Garden of Bones"; Daenerys
  II). Filed here: Xaro Xhoan Daxos, Pyat Pree, Malakho, Strong Belwas and
  Arstan Whitebeard.

### Omitted

- Renly's camp, Stannis's camp, Robb's camp in the Westerlands "close to an
  unidentified keep", the abandoned holdfast of episode 13 and the farm of
  episode 16: unnamed camps and buildings.
- The Frostfangs: folded into the Skirling Pass.
- The Blackwater Rush: folded into Blackwater Bay.
- The Tower of the Hand, Maegor's Holdfast, the throne room and the Mud Gate:
  inside the Red Keep and King's Landing, filed in season 1.
- Torrhen's Square, Deepwood Motte, the Crag: the stage names them, but its
  scenes there are off the page and off screen; #1476 decides them as named
  places.
- The Acorn Water: named only (Bran VI, 120), never visited; the show never
  names it, so #1476's both-media rule leaves it out too. Theon IV (124) has
  Reek mention the mill, and Theon V (130), set in Winterfell, has Theon
  remember the night there (A Wiki of Ice and Fire, chapters 50 and 56).
- The Kingsroad: roads are not filed.
- Mance Rayder's camp: the show's episode 20 marches Jon towards it; the book
  reaches it in the third book.
- Chataya's: a house inside King's Landing, as Littlefinger's brothel was in
  season 1.

## Named-only places (#1476)

Places that season 2 and _A Clash of Kings_ both name and neither sets a scene
in, under the owner's rulings of 2026-11-13, restated for the stage:

- **Gate.** The first explicit naming signal in each medium: quoted or reported
  speech, a caption or a title card in the show; speech or a POV character's
  thought in the book, close-third POV narration included. Chapters are site
  chapters (_A Clash of Kings_' chapter N, prologue 0, is 74 + N).
- **Scope.** Only places both media name inside the stage (episodes 11–20,
  chapters 74–143). A name only one medium gives there is omitted, with its
  reason. Places season 1 and #1469 filed are not filed again. Roads are not
  filed, and a region or a land stays a region, as in season 1 (#1248, #1250,
  #1251). No one is filed at a named-only place (`filedHere: []`), and each has
  a drawing of its own in `art/places.ts`.
- **Sources.** Show namings come from the Game of Thrones Wiki: each season 2
  episode's Appearances page, the place pages that cite a season 2 episode, and
  the lines those pages quote. Book namings come from A Wiki of Ice and Fire's
  footnotes, read through the Firecrawl tool until its credits ran out, and from
  the Ice and Fire Wiki after that (owner, 2026-11-23). The footnotes cite
  claims, not first namings: each book gate is the earliest _A Clash of Kings_
  chapter they cite, and where an earlier chapter may name the place first, the
  safe later chapter is kept. Neither the episodes nor the books were viewed.
- **Split.** Eleven places survive the book check, under the issue's split point
  of about 15, so they are filed together (owner, 2026-11-23).
- **New words.** Form `district` (Flea Bottom, filed as the Street of Steel is),
  Italian "Quartiere", a plain word not checked against the dub. The Summer
  Isles take the form `island` in the region the Seas (owner, 2026-11-23).

### Filed (#1476)

| Place             | Episode | Chapter | Region          | Naming (show; book)                                     |
| ----------------- | ------- | ------- | --------------- | ------------------------------------------------------- |
| `torrhens-square` | 11      | 90      | the North       | a northern lord at Winterfell; Bran II                  |
| `flea-bottom`     | 11      | 84      | the Crownlands  | Ros: Armeca is from Flea Bottom; Davos I                |
| `lorath`          | 12      | 79      | Essos           | Jaqen says he is from Lorath; Arya II                   |
| `deepwood-motte`  | 13      | 98      | the North       | Balon sends Yara to take it; Theon II                   |
| `highgarden`      | 13      | 84      | the Reach       | Margaery shouts "Highgarden!"; Davos I                  |
| `summer-isles`    | 14      | 85      | the Seas        | Xaro was born there; Theon I                            |
| `dreadfort`       | 16      | 90      | the North       | word of Winterfell reaches it; Bran II                  |
| `the-crag`        | 18      | 129     | the Westerlands | Robb rides there in 17, scenes there in 18; Catelyn VII |
| `tarth`           | 18      | 74      | the Stormlands  | Brienne's house and island; the prologue                |
| `seagard`         | 20      | 81      | the Riverlands  | Theon's speech to his men; Catelyn I                    |
| `ashemark`        | 20      | 109     | the Westerlands | "You've been to Ashemark?" (Jaime); Bran V              |

`nameSaidAt`, for text that names a place before its show gate: Galbart Glover's
record (episode 8) names Deepwood Motte, Roose Bolton's (14) the Dreadfort,
Jason Mallister's (4) Seagard, a story of Loras Tyrell's (5) Highgarden, and
Brienne's name (13) Tarth.

### Open points

- `torrhens-square`: show 11, "The North Remembers": a northern lord at
  Winterfell's audience cites a new tower at Torrhen's Square (the place page's
  `GOT201` ref); "The Ghost of Harrenhal" (15) names it again. Book: Bran II
  (90), Leobald Tallhart brings a party from Torrhen's Square to the harvest
  feast. #1469 left it to this issue: its scenes are off screen and off the
  page. Italian "Piazza di Torrhen", Italian Wikipedia's places page.
- `flea-bottom`: show 11: Ros tells Daisy that Armeca is from Flea Bottom. Book:
  Davos I (84), Davos begged in Flea Bottom as a boy. Italian "Fondo delle
  Pulci", Italian Wikipedia's places page.
- `lorath`: show 12, "The Night Lands": Jaqen claims to be from Lorath. Book:
  Arya II (79); A Wiki of Ice and Fire says he "claims to be Lorathi", and the
  Ice and Fire Wiki that he is "allegedly from Lorath", so whether the city's
  own name is in the chapter, not only the demonym, needs the text (owner
  check). Italian "Lorath", Italian Wikipedia.
- `deepwood-motte`: show 13, "What Is Dead May Never Die": Balon sends Yara with
  thirty ships to seize it. Book: Theon II (98) names it in Balon's plan. Bran
  II (90) is cited for its steward at the harvest feast and may name it first;
  the safe later chapter is kept (owner check). Italian "Deepwood Motte", the
  Italian Game of Thrones Wiki's page.
- `highgarden`: show 13: Margaery shouts "Highgarden!" at Renly's tourney. Book:
  Davos I (84), Renly marches from Highgarden. The prologue (74) may name it
  first (not checked). Italian "Alto Giardino", Italian Wikipedia.
- `summer-isles`: show 14, "Garden of Bones": Xaro was born there. Book: Theon I
  (85), the Myraham's cargo has feathers from the Summer Isles; Tyrion II (82)
  gives Shae a bird from the islands and may name them first. Italian "Isole
  dell’Estate", Italian Wikipedia.
- `dreadfort`: show 16, "The Old Gods and the New", per the place page's lead
  ref; the line is not quoted (owner check). Book: Bran II (90), Lady Hornwood
  learns that men are massing at the Dreadfort. Italian "Forte Terrore", Italian
  Wikipedia.
- `the-crag`: the Game of Thrones Wiki lists the Crag among the locations of
  "The Prince of Winterfell" (18), and "A Man Without Honor" (17) has Robb ride
  there to settle its surrender. If the show sets a scene there, it is a place
  one medium visits and the other only names (#1252); the gate is 18 / 129
  either way (owner check). Book: Catelyn VII (129), word at Riverrun that Robb
  has taken it; Catelyn VI (119) is cited for his raids and may name it first.
  Italian "Crag", as the Italian Game of Thrones Wiki's Casa Westerling page
  writes it.
- `tarth`: show 18, "The Prince of Winterfell": Brienne's house is cited to the
  episode, and Tyrion hears that Stannis's fleet is past Tarth (the Shipbreaker
  Bay page); neither line is quoted (owner check). Whether episode 13 says
  "Brienne of Tarth" is not checked. Book: the prologue (74), Davos's report of
  his meeting with Lord Tarth; the Ice and Fire Wiki's prologue page lists House
  Tarth. Italian "Tarth", Italian Wikipedia.
- `seagard`: show 20, "Valar Morghulis": Theon's speech names "the shores of
  Seagard and Faircastle" (quoted on the Faircastle page). Book: Catelyn I (81).
  Italian "Seagard", the Italian Game of Thrones Wiki's page.
- `ashemark`: show 20: Jaime asks the Stark patrol "You've been to Ashemark?".
  Book: Bran V (109), Robb takes Ashemark. Italian "Ashemark", the Italian Game
  of Thrones Wiki's page.

### Omitted (#1476)

- Maidenpool (episode 15, Arya's lie to Tywin), Barrowton (episode 15, her
  second answer), Meereen (episode 15, a guest at Xaro's feast), the Rhoyne
  (episode 18, Talisa), Astapor (episode 18, Jorah's ship), Faircastle (episode
  20, Theon's speech) and Haystack Hall (episode 11, Daisy): the book's naming
  in the stage is not confirmed (Ice and Fire Wiki; AWOIAF not read: Firecrawl
  credits exhausted). The Ice and Fire Wiki's sections on Maidenpool's Lord
  Mooton tell later books' events, its House Errol page names Haystack Hall only
  in the appendix's list of houses, and A Wiki of Ice and Fire cites Maidenpool
  only on the book's map and the barrowlands, not Barrowton, in Bran VI (120).
- Castamere: the book names it in the stage (the Greatjon takes its gold mines,
  chapter 39, site 113, the Ice and Fire Wiki's Jon Umber page), but the show's
  naming is not confirmed. The song's title is not said in episode 19, and
  whether a verse Bronn sings there names it is not checked; the episode's end
  credits do not count.
- The Acorn Water: the show never names it (#1469).
- Red Harbor (episode 15, Yara), Salt Rock (episode 20, the Stark patrol) and
  the Yellow Fork (episode 17, Robb's battle): the show only; the Game of
  Thrones Wiki says the books have no such places.
- Silverhill: written on a letter on Tywin's table in episode 16, never said.
- Shipbreaker Bay: the show's parley in episode 14 is on a cliff over it, but no
  line is cited as naming it; the book names it.
- The Smoking Sea: Quaithe's sailor must sail within sight of Valyria (episode
  17); the sea is not named.
- Oldtown: the book names it (Theon I, the Myraham sails from Oldtown); the
  season does not (the Game of Thrones Wiki cites its first naming in season 5).
- Dorne: a region; Myrcella is sent there in both media, but no Dornish place is
  named in season 2, so nothing brings the region in (#1250).
- The Westerlands, the Reach, the Stormlands, the Riverlands, the Iron Islands:
  regions already filed.
- Places only the book names in the stage, among them Duskendale, Rosby,
  Driftmark, Sunspear, the Stepstones, Hornwood, Karhold, Last Hearth, Greywater
  Watch, the Shadow Tower, Hardhome, the Milkwater, Saltpans, Raventree Hall,
  Stoney Sept, Mummer's Ford, the Isle of Faces, Great Wyk, Harlaw, Old Wyk, Ten
  Towers, Yi Ti and the Jade Sea: the Game of Thrones Wiki cites no season 2
  naming for any of them.
- Lhazar, Volantis, Qohor, Asshai, Lys, Pentos, Braavos, Valyria, Casterly Rock,
  Lannisport, the Golden Tooth, the Arbor, White Harbor, Moat Cailin, the
  Kingswood, the Trident and the Whispering Wood: season 2 names them again, but
  season 1 filed them.
- The Frostfangs: folded into the Skirling Pass (#1469).
