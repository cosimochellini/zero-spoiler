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
| `storms-end`                  | 14      | 105     | book only; the episode orders it      |
| `oxcross`                     | 14      | 106     | the show visits it; the book names it |
| `garden-of-bones`             | 14      | 101     | show only; the chapter orders it      |
| `guildhall-of-the-alchemists` | 15      | 94      | both media                            |
| `fist-of-the-first-men`       | 15      | 108     | both media                            |
| `skirling-pass`               | 16      | 125     | both media                            |
| `acorn-water`                 | 16      | 130     | book only; the episode orders it      |
| `blackwater-bay`              | 18      | 132     | both media                            |
| `house-of-the-undying`        | 20      | 122     | both media                            |

Sixteen places, under the issue's split point of about 25.

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
  ends with the khalasar at the waste's margins (Ice and Fire Wiki); the first
  book's chapters were not checked for the name (owner check).
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
- Filed here: none. Quaithe meets Daenerys here (owner, 2026-11-22), but her
  record still opens at chapter 114 in Qarth; #1477 moves her gate, and may move
  her here.

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

- Book only: Catelyn III (105) is set in Renly's camp under the castle, and
  Davos II (116) at its walls and in the cave beneath them. The show's "What Is
  Dead May Never Die" notes say Storm's End "wasn't introduced"; the Storm's End
  page sets the episode 14 parley "near Storm's End" (owner check). Episode 14
  orders it. A later season's naming of the castle is not checked.
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

#### `acorn-water`

- Book only: Theon V (130) is set at the mill on the Acorn Water, which Theon IV
  (124) names. The show's farm in episode 16 is never named. Episode 16 orders
  it.
- Italian "Acqua della Ghianda" is assumed, not checked against the Mondadori
  edition.

#### `blackwater-bay`

- Show: Salladhor names it in episode 12 ("the bottom of Blackwater Bay",
  quoted); Stannis's fleet sails into it in episode 18. Book 132, Davos III.
  Gate 18 / 132.
- The Blackwater Rush, where the river meets the bay and the chain is raised, is
  folded into the bay. The battle on it is the stage's battlefield, filed as the
  water it is fought on, as the Whispering Wood was.
- Italian "Baia delle Acque Nere", Italian Wikipedia's places page.

#### `house-of-the-undying`

- Show: Pyat Pree invites Daenerys to it in episode 15 (reported speech); she
  enters it in episode 20. Book: named in Daenerys III (114), entered in
  Daenerys IV (122). Gate 20 / 122.
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
  II). Filed here: Xaro Xhoan Daxos, Pyat Pree, Quaithe, Malakho, Strong Belwas
  and Arstan Whitebeard.

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
- The Kingsroad: roads are not filed.
- Mance Rayder's camp: the show's episode 20 marches Jon towards it; the book
  reaches it in the third book.
- Chataya's: a house inside King's Landing, as Littlefinger's brothel was in
  season 1.
