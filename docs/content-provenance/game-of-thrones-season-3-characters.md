# Game of Thrones, season 3 characters: research notes

Research for #1629, the characters of the third stage: HBO season 3 (episodes
21–30) and _A Storm of Swords_ from its prologue through chapter 52, Arya XI
(site chapters 144–196). One section per cast group (#1626); each group's filing
child adds its own.

- **Gates.** A character opens at the first explicit naming signal in each
  medium: an introduction, the name in quoted or reported speech or printed
  thought, a caption or a title card (owner, 2026-11-21). Narration and the
  credits never count. Each gate cites its naming scene (#1425).
- **Chapters.** Site chapter = 144 + A Wiki of Ice and Fire's chapter N,
  prologue 144. Every _A Storm of Swords_ chapter page of that wiki is cached in
  `.gate/firecrawl/` of the main checkout; the Ice and Fire Wiki has no chapter
  pages for the book (#1627).
- **Dated steps** pin both numbers. Nothing past episode 30 or chapter 196 is
  told as reached, but a fact the other medium tells later keeps its later pin
  (#852).
- **Not viewed.** Neither the episodes nor the books were viewed. Book scenes
  come from A Wiki of Ice and Fire's cached chapter synopses and character
  lists, show scenes from the Game of Thrones Wiki's episode and character
  pages. Every open point is under `unverified` in `game-of-thrones.json`.

## Robb's war and the Riverlands (#1635)

Robb, Catelyn and Edmure at Riverrun, the Westerlings, Lord Hoster's funeral,
the Karstark murders, the Frey envoys and the wedding at the Twins. Candidates
come from the Game of Thrones Wiki's season-3 episode pages (synopses, Firsts,
Deaths, cast lists, "In the books") and character pages, A Wiki of Ice and
Fire's cached pages for Catelyn I to VII (site chapters 146, 158, 164, 179, 189,
193, 195) and the Ice and Fire Wiki's character pages. Bit parts and background
figures are omitted, as in season 2 (owner, 2026-11-03 and 2026-11-07).

Counts: 10 filed, 0 pending, 64 omitted, 3 left to other groups; 3 season-1
records stepped.

### Filed

Gates as episode / site chapter. `source` records give the other number only to
order them.

| Record                       | Show                                                                                                                                                         | Books                                                                                                                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `jeyne-westerling` (books)   | none: the show gives Robb Talisa; 23 orders her                                                                                                              | 158, Catelyn II: Robb introduces her to his mother as his lady wife                                                                                                           |
| `rolph-spicer` (books)       | none: no Westerlings in the show; 23 orders him                                                                                                              | 158, Catelyn II: in the same introduction, with Lady Sybell and her children                                                                                                  |
| `raynald-westerling` (books) | none; 23 orders him                                                                                                                                          | 158, Catelyn II: in the same introduction                                                                                                                                     |
| `willem-lannister`           | 23, "Walk of Punishment": Edmure, "We took hostages. Willem Lannister, Martyn Lannister." (quoted on Martyn's page)                                          | 164, Catelyn III: his body is laid before Robb beside Tion Frey's; earlier books only mention him, so the books' record opens dead                                            |
| `martyn-lannister` (show)    | 23, "Walk of Punishment": in the same line                                                                                                                   | none: only mentioned (captured at Oxcross, exchanged for Robett Glover), never seen; 164 orders him                                                                           |
| `lothar-frey`                | 60, "The Winds of Winter": Lord Walder, "Black Walder and Lothar promised to be here by midday!"; he dies in the same episode, so the show record opens dead | 179, Catelyn IV: he and Walder Rivers come to Riverrun with Lord Walder's terms, and help launch Lord Hoster's funeral boat                                                   |
| `walder-rivers`              | 60, "The Winds of Winter": in the same line, as "Black Walder"; he dies in the same episode                                                                  | 179, Catelyn IV: with Lothar                                                                                                                                                  |
| `roslin-frey`                | 26, "The Climb": Lothar, "Our father requires Lord Edmure to wed one of his daughters. Roslin." (quoted on his page); first seen at 29                       | 179, Catelyn IV: Lothar's terms, that Edmure marry Roslin Frey; first seen at 193 (Catelyn VI)                                                                                |
| `ryman-frey` (books)         | none: no such character in the Game of Thrones Wiki; 29 orders him                                                                                           | 193, Catelyn VI: he heads the party that rides out to meet Robb's host                                                                                                        |
| `aegon-frey` (books)         | none: the show gives his death to Lord Walder's wife; 29 orders him                                                                                          | 195, Catelyn VII: Catelyn seizes Jinglebell and kills him, so the record opens dead; Catelyn VI (193) has him in the hall but its synopsis does not name him (safe later pin) |

- Jeyne Westerling: role Robb Stark's wife, House Westerling, alive. Her log
  holds Catelyn II: she nursed Robb after the Crag and he married her the next
  morning, breaking the Frey pact. Italian "Jeyne Westerling" (Casa Stark).
- Rolph Spicer: role Jeyne Westerling's uncle, House Spicer, alive. Grey Wind
  growls at him and Catelyn has Robb send him on an errand (Catelyn II); his
  errand to the Golden Tooth (Catelyn V) changes no field. Italian kept.
- Raynald Westerling: role Jeyne Westerling's brother, then Robb Stark's
  banner-bearer at 193 (Catelyn VI), books only. His fate at the Twins is told
  only in _A Feast for Crows_ and is not filed. Italian kept.
- Willem Lannister: role squire of House Lannister. Show: `captured` at 23,
  `deceased` at 25 ("Kissed by Fire", Rickard Karstark's men). Books: opens dead
  at 164. Summary and log say only that he was taken prisoner and brought to
  Riverrun, in the past tense, so they hold at both gates (review round 1).
  Italian "Willem Lannister" (Casa Lannister).
- Martyn Lannister: show only. Role squire of House Lannister, `captured` at 23,
  `deceased` at 25. Italian "Martyn Lannister" (Casa Lannister).
- Lothar Frey: role son of Lord Walder Frey, House Frey. Books alive from 179.
  Show: opens dead at 60 (Arya's Frey pie). Owner check: "The Climb" (26) and
  "The Rains of Castamere" (29) name him only in narration; "Blood of My Blood"
  (56) has Lord Walder recall his part at the wedding without a quoted line.
  Lower the show gate to 26 if the name is said on screen. Italian "Lothar Frey"
  (TV cast list).
- Walder Rivers: role son of Lord Walder Frey, House Frey; as Lothar. One record
  for both media (owner check): the show's Black Walder Rivers joins the books'
  Walder Rivers, the bastard envoy to Riverrun, and Black Walder Frey, Ser
  Ryman's son who hamstrings a Vance at the wedding. The record follows the
  envoy, the part both media share, under the name both wikis title him by, so
  the show's "Black Walder" is not used in any text. Owner check: episodes 26
  and 29 name him only in narration. Italian "Walder Rivers" (TV cast list).
- Roslin Frey: role daughter of Lord Walder Frey, then Edmure Tully's wife at 29
  / 195; House Frey, alive. Gated at the terms Lothar brings, which name her in
  speech, before she is seen (review round 1). Both wikis title her Roslin
  Tully, her married name. Italian "Roslin Frey" (Personaggi).
- Ryman Frey: role Lord Walder Frey's grandson, House Frey, alive. He kills
  Dacey Mormont at the wedding (195), which changes no field of his. Catelyn II
  and _A Clash of Kings_ only mention him. Italian "Ryman Frey" (Personaggi).
- Aegon Frey: role Lord Walder Frey's grandson, called Jinglebell, House Frey;
  opens `deceased` at 195 (Catelyn VII: Catelyn cuts his throat). Italian "Aegon
  Frey", detto Campanello (Personaggi).

### Pending

None: every candidate named in the stage is filed or omitted.

### Season-1 records stepped

Steps in `season-1.ts`, as episode / site chapter.

- Edmure Tully: role Lord of Riverrun at 26 / 179. Books: Lord Hoster dies and
  Edmure is lord at the funeral (Catelyn IV). Show: Hoster is dead when Edmure's
  record opens at 23, so a step there cannot be told apart from the first; it
  takes "The Climb" (26), where Edmure calls himself Lord Walder's liege lord.
  Owner check: "Dark Wings, Dark Words" (22) has Robb call him lord of Riverrun,
  synopsis only. `captured` at 30 / 197: Lord Walder says he spent his wedding
  night in a dungeon ("Mhysa"); Lord Tywin tells Tyrion that Lord Frey keeps him
  hostage (Tyrion VI, chapter 53), past the stage, the books' own later pin.
- Walder Frey: affiliation House Frey, allied with House Lannister at 29 / 195,
  the Red Wedding (the drawing's allegiance stage, #1286). Role Lord of the
  Crossing and of Riverrun at 30, show only ("I'm lord of Riverrun!", "Mhysa");
  the books give Riverrun to Ser Emmon Frey (Tyrion VI, 197), which only orders
  it.
- Roose Bolton: affiliation House Bolton, allied with House Lannister at 29 /
  195 (he kills Robb with the Lannisters' regards, the drawing's Red Wedding
  stage, #1288). Role Warden of the North at 30 / 197 ("Mhysa"; Tyrion VI). His
  show command at Harrenhal is #1637's.

Not stepped, with the deaths already filed: Robb, Catelyn, Talisa, Grey Wind,
Hoster, Rickard Karstark, Dacey Mormont, Wendel Manderly and the Smalljon.
Catelyn's confinement at Riverrun (Catelyn I, 146) is house arrest by her own
family's men, not a capture, as stage 2 ruled for the show's episode 18. Rickard
Karstark is imprisoned and beheaded in the same episode and chapter (25 / 164),
so no `captured` step fits between. Brynden Tully leaves the wedding feast
before the killing in the show and stays at Riverrun in the books: no field
changes. The Greatjon's capture at the wedding is told only after the stage and
he has no season-3 scene in the show. Talisa's pregnancy and Edmure's marriage
change no field.

### Omitted

- **No explicit naming in either medium:** Joyeuse Erenford, Lord Walder's
  eighth wife. The show names her only in narration and the credits ("Baelor",
  episode 9, and "The Rains of Castamere", where Catelyn kills her), and the
  books' chapter pages name her only in narration (A Game of Thrones Catelyn IX,
  Catelyn VI). Owner check: file her if either medium says her name.
- **Bit parts, one scene in the stage:** Lady Sybell Spicer, Eleyna and Rollam
  Westerling (Catelyn II; Rollam again at the funeral), Tion Frey (his body, in
  Catelyn III), Long Lew (hands Robb the axe), the Karstark watcher, the captain
  of the _Myraham_ (unnamed), Maester Brenett, the show's Merry Frey and Lord
  Walder's daughters and granddaughters named in his line-up (Arwaya, Walda,
  Derwa, Waldra, Janeya, Neyela, Serra, Sarra, Marianne, Freya, Shirei), the
  septon and the drummer.
- **The Freys at the wedding, an act or a line each:** Edwyn Frey (pushes Dacey
  away and wears mail under his clothes), Black Walder Frey (hamstrings a Vance;
  his name would also clash with the show's name for Walder Rivers), Petyr
  Pimple (thrown by his horse), Hosteen, Raymund, Benfrey, Merrett, Whalen,
  Danwell and Aenys Frey, Fair Walda and Fat Walda, and the Frey women of Lord
  Walder's line-up in Catelyn VI.
- **Robb's bannermen with no scene of their own:** Tytos Blackwood, Jonos
  Bracken, Marq Piper, Karyl Vance, Patrek Mallister, Lymond Goodbrook, Robin
  Flint, Lucas Blackwood, Owen Norrey, Donnel Locke, the Haighs and the Vypren
  knights; Perwyn Frey and Martyn Rivers, who leave Riverrun before Robb
  returns.
- **Riverrun's household:** Ser Desmond Grell, Utherydes Wayn, Maester Vyman and
  Ser Robin Ryger, as in season 2.
- **Only mentioned:** Alys and Harrion Karstark, Olyvar Frey, Tansy, Lord Gawen
  Westerling, Ser Emmon Frey, Kyle Condon and Ronnel Stout.
- **Other groups:** Roose Bolton's Harrenhal and Jaime's release (#1637), Arya
  and the Hound at the Twins (#1636), Theon's captor (#1641).
