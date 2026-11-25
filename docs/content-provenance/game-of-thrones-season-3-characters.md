# Game of Thrones, season 3 characters: research notes

Research for #1629, the characters of the third stage: HBO season 3 (episodes
21–30) and _A Storm of Swords_ from its prologue through chapter 52, Arya XI
(site chapters 144–196). One section per cast group (#1626); each group's filing
child adds its own.

- **Gates.** A character opens at the first explicit naming signal in each
  medium: an introduction, the name in quoted or reported speech or printed
  thought, a caption or a title card (owner, 2026-11-21). Narration and the
  credits never count. Each gate cites its naming scene (#1425).
- **Chapters.** Site chapter = 144 + the book's chapter N, prologue 0 (A Wiki of
  Ice and Fire's `A_Storm_of_Swords-Chapter_N`). The order is the Ice and Fire
  Wiki's chapter navigation (`Template:A Storm of Swords`).
- **Dated steps** pin both numbers and stop at episode 30 / chapter 196. A step
  one medium alone tells carries `source`. A fact the other medium tells later
  keeps that later number, even past the stage (#852).
- **Not viewed.** Neither the episodes nor the books were viewed. Book facts
  come from A Wiki of Ice and Fire's chapter pages, cached in the main
  checkout's `.gate/firecrawl/`, and the character pages read through the
  Firecrawl tool; show facts from the Game of Thrones Wiki. Every open point is
  under `unverified` in `game-of-thrones.json`.

## Essos (#1639)

Daenerys at Astapor and Yunkai. Candidates come from the Game of Thrones Wiki's
season-3 episode pages (Essos synopses, cast, "In the books"), its character
pages and quotes, and A Wiki of Ice and Fire's synopses and Appearing lists of
_A Storm of Swords_ chapters 8, 23, 27 and 42 (Daenerys I to IV, site chapters
152, 167, 171 and 186), with its Kraznys mo Nakloz, Missandei, Grey Worm and
Daario Naharis pages read through the Firecrawl tool. Daenerys V (chapter 57,
site 201) is past the stage. The Firecrawl credits ran out before the Mero,
Prendahl na Ghezn and Grazdan mo Eraz pages, so their book gates rest on the
chapter synopsis and Appearing list alone.

Counts: 7 filed, 2 pending, 25 omitted; 2 earlier records stepped.

### Filed

Gates as episode / site chapter. `source` records give the other number only to
order them.

| Record                                   | Show                                                                                                                                           | Books                                                                                                                                               |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `missandei`                              | 23, "Walk of Punishment": Daenerys takes her as part of the deal and asks her name (Missandei page, GOT303)                                    | 171, Daenerys III: Daenerys asks her name in High Valyrian to proclaim her free (A Wiki of Ice and Fire's Missandei page)                           |
| `kraznys-mo-nakloz` (books only)         | none: episodes 21, 23 and 24 name him in narration and the credits only; the one quoted line to him says "Tell the Good Master"; 24 orders him | 171, Daenerys III: the bargain and the plaza (safe later pin; see below)                                                                            |
| `grey-worm`                              | 25, "Kissed by Fire": Daenerys asks the chosen leader his name and he introduces himself as Grey Worm (episode synopsis; his quoted line)      | 186, Daenerys IV: "Grey Worm is the name this one drew the day Daenerys Stormborn set him free" (quoted on A Wiki of Ice and Fire's Grey Worm page) |
| `grazdan-mo-eraz` (show: Razdal mo Eraz) | 27, "The Bear and the Maiden Fair": Missandei announces him as Razdal mo Eraz, one of the Wise Masters (episode synopsis)                      | 186, Daenerys IV: the Wise Masters' envoy (synopsis and Appearing list; no quote seen)                                                              |
| `mero`                                   | 28, "Second Sons": "come sit on Mero's lap" (quoted on the Mero page)                                                                          | 186, Daenerys IV: the captain of the Second Sons at the parley (synopsis and Appearing list; no quote seen)                                         |
| `daario-naharis`                         | 28, "Second Sons": "The Second Sons are yours, and so is Daario Naharis" (quoted on the Daario page)                                           | 186, Daenerys IV: Jorah, "Daario Naharis is not one of them" (quoted on A Wiki of Ice and Fire's Daario page)                                       |
| `prendahl-na-ghezn` (books only)         | none: "Second Sons" (episode 28) names him in narration only; 28 orders him                                                                    | 186, Daenerys IV: the Stormcrow captain who refuses Daenerys's offer (synopsis and Appearing list; no quote seen)                                   |

- Missandei: role Daenerys's interpreter, Daenerys's service, alive. Owner
  check: "Valar Dohaeris" (episode 21), where she translates for the slaver,
  names her in narration only. Her log's last sentence (Daenerys asks her name
  and warns her, and she answers "Valar morghulis") is both media's at her gate:
  the Game of Thrones Wiki's Missandei page (GOT303) and A Wiki of Ice and
  Fire's (citing Chapter 27) both tell it; the cached Chapter 27 synopsis does
  not. Italian "Missandei" (Italian Wikipedia, its own section of the
  characters' list).
- Kraznys mo Nakloz: role Good Master of Astapor, Good Masters, `deceased` from
  his gate: Drogon burns him at the plaza in the chapter that names him. The
  books' alone. Owner checks: if Daenerys II (167) names him in speech, the book
  gate is 167; if the show says his name in episodes 21–24, the record becomes
  both media's, with his show death at 24. Italian "Kraznys mo Nakloz" (Italian
  Wikipedia's TV cast list); "Buoni Padroni" not checked against Mondadori.
- Grey Worm: role Unsullied officer, the Unsullied, alive. The show makes him
  the Unsullied's one commander and the books one of their officers; the role
  says only what both tell. Italian "Verme Grigio" (Italian Wikipedia, its own
  section).
- Grazdan mo Eraz: role envoy of the Wise Masters, alive. Filed under the books'
  name with the show's Razdal mo Eraz as his `episodeName`, as Asha Greyjoy is
  with Yara: the show renamed him, as it renamed Grazdan mo Ullhor (Game of
  Thrones Wiki, Razdal mo Eraz). Italian "Razdal mo Eraz" (Italian Wikipedia's
  TV cast list); "Grazdan mo Eraz" and "Saggi Padroni" assumed. His log (the
  threat to enslave Daenerys, the dragons that frighten him) is both media's:
  the Razdal page's season-3 section and its "In the books" section, where
  Grazdan threatens to sell her as a bedslave and Drogon sets his tokar alight;
  the cached Chapter 42 synopsis does not tell it.
- Mero: role captain of the Second Sons, the Second Sons. The show's Daario
  kills him in "Second Sons" (episode 28), the episode that names him, so the
  show record opens `deceased`, ordered at 201, where the books end him; the
  books keep him alive through the stage. His summary says only "a sellsword,
  captain of the Second Sons": the Braavosi Titan's Bastard is confirmed for the
  books only in Daenerys V (201) and on the show's Mero page, so it waits for a
  later stage. Italian "Mero", "Secondi Figli" (Italian Wikipedia).
- Daario Naharis: role sellsword captain, alive. His company differs by medium
  (Game of Thrones Wiki, "Second Sons", "In the books"): the Second Sons in the
  show, the Stormcrows in the books, two affiliation entries with their
  `source`. His log says only that he kills the company's other leaders and
  swears to Daenerys, which both media tell at his gate. Italian "Daario
  Naharis", "Corvi della Tempesta" (Italian Wikipedia).
- Prendahl na Ghezn: role captain of the Stormcrows, `deceased` from his gate:
  Daario kills him in the chapter that names him. The books' alone (owner check:
  if the show says his name in episode 28, the record becomes both media's, dead
  at 28 in both). Italian "Prendahl na Ghezn" (Italian Wikipedia).

### Earlier records stepped

- Daenerys Targaryen (`season-1.ts`): role "Khaleesi at the head of her khalasar
  and the Unsullied" and affiliation "House Targaryen, her khalasar and the
  Unsullied" at 24 / 171, where she takes the Unsullied and turns them on
  Astapor's masters ("And Now His Watch Is Ended"; Daenerys III). She is a lead
  of `leads['season-3']`.
- Barristan Selmy (`season-1.ts`): role "Knight in Daenerys's service" and
  affiliation "Daenerys Targaryen's service" at 23, the show's alone: in "Valar
  Dohaeris" (21) he saves Daenerys from the manticore in Astapor, gives his name
  and offers his service; "Walk of Punishment" (23) first shows him in it,
  advising her with Jorah until she tells them both how to advise her (Barristan
  page, GOT303). The books bring him to her as Arstan Whitebeard, his own record
  (owner, 2026-11-22), and say who he is only in Daenerys V (chapter 57, site
  201), the scene episode 21 adapts, which orders both steps.

Not stepped: Jorah Mormont (no field changes; the books' reveal of his spying is
in Daenerys V, 201, the show's in episode 40), Arstan Whitebeard and Strong
Belwas (no field changes in the stage), Irri, Jhiqui, Jhogo, Aggo and Rakharo
(no change), Quaithe (her visit in Daenerys III is a relationship card), the
dragons (Drogon's sale and return in Daenerys III and episode 24 change no
field; the show gates stay 40 and 41).

### Pending

- **Oznak zo Pahl**, the Meereenese champion Strong Belwas kills in Daenerys V
  (site 201); the show's champion in "Breaker of Chains" (episode 33) is
  unnamed.
- **Arstan Whitebeard's reveal** as Barristan Selmy, Daenerys V (201): the stage
  that reaches it folds his record into Barristan's (owner, 2026-11-22).

### Omitted

- **Bit parts with no naming signal found:** Greizhen mo Ullhor, the show's Good
  Master who doubts the half-trained boys in "Walk of Punishment" (23) and dies
  at 24, and his book counterpart Grazdan mo Ullhor (Daenerys III, 171, killed
  by Rakharo): no quote has either name said, and the synopses name them in
  narration only. Groleo, the captain of Illyrio's ships (Daenerys I and II, 152
  and 167): named in narration only in the synopses (owner check: if a line says
  "Captain Groleo", 152).
- **Bit parts, one scene in the stage:** Sallor the Bald, the third Stormcrow
  captain (186), whose head Daario brings with Prendahl's.
- **Titles and descriptors:** the other Good Masters at the plaza ("the fat
  one", "the tall one", "spiked beard", A Wiki of Ice and Fire's Grazdans), the
  warlock child with the manticore ("Valar Dohaeris"), the tortured slave on the
  Walk of Punishment ("Walk of Punishment"), the master torturer of Astapor
  ("Walk of Punishment", unnamed), the Unsullied soldier Kraznys cuts to show
  that they feel no pain ("Valar Dohaeris", unnamed), the Yunkish bedslave
  ("Second Sons"), Daenerys's silver mare.
- **Collectives:** the Unsullied, the Good Masters, the Wise Masters, the Second
  Sons, the Stormcrows, the Yunkai'i, the freed slaves of Yunkai, and the slaves
  and citizens of Yunkai who come out to Daenerys in "Mhysa" (30) and Daenerys
  IV (186), none of them named.
- **Only mentioned:** Mossador and Marselen, Missandei's brothers among the
  Unsullied, and Eroeh and Mago (Daenerys III, 171).

## King's Landing (#1634)

The court under Tywin as Hand, Olenna and the Tyrells, the two marriage pacts
and, at the close of the book's stage, the Dornishmen who ride in for the king's
wedding. The book's King's Landing chapters in the stage are Tyrion I (148),
Sansa I (150), Tyrion II (156), Sansa II (160), Tyrion III (163), Sansa III
(172), Tyrion IV (176) and Tyrion V (182). Candidates come from their
"Appearing" lists on A Wiki of Ice and Fire and from the Firsts, cast lists and
King's Landing synopses of the ten season-3 episode pages. Bit parts with one
scene in the stage, background courtiers and descriptors are omitted, as in
seasons 1 and 2 (owner, 2026-11-03 and 2026-11-07).

Counts: 6 filed, 0 pending, 1 owner check left unfiled, the rest omitted by
class below; 6 stage-1 records stepped.

### Filed

Gates as episode / site chapter. `source` records give the other number only to
order them.

| Record                       | Show                                                                                                                                                                              | Books                                                                                                                                                                        |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `olenna-tyrell`              | 22, "Dark Wings, Dark Words": Loras brings Sansa to the gardens, where Margaery introduces her grandmother, Lady Olenna (the episode's synopsis and its Olenna dialogue)          | 150, Sansa I: Margaery's invitation asks Sansa to sup with her and her grandmother, the Lady Olenna Tyrell; at the Maidenvault Olenna presses her about Joffrey              |
| `megga-tyrell` (books only)  | none: the show's cousins are unnamed ("Tyrell lady", episode 24); 22 orders her                                                                                                   | 150, Sansa I: at the Maidenvault supper Sansa is introduced to all of Margaery's cousins and companions (A Wiki of Ice and Fire, Chapter 6; Ice and Fire Wiki, Megga Tyrell) |
| `alla-tyrell` (books only)   | none, as Megga; 22 orders her                                                                                                                                                     | 150, Sansa I: introduced with the other cousins (Chapter 6 lists her appearing; the Ice and Fire Wiki has no page)                                                           |
| `elinor-tyrell` (books only) | none, as Megga; 22 orders her                                                                                                                                                     | 150, Sansa I: introduced with the other cousins (Chapter 6; Ice and Fire Wiki, Elinor Tyrell)                                                                                |
| `oberyn-martell`             | 31, "Two Swords", past the stage: the Dornish lords tell Tyrion that Oberyn, not Doran, comes for the wedding (Game of Thrones Wiki, Oberyn Martell)                              | 182, Tyrion V: Tyrion rides out to greet the Dornishmen and finds them led by Prince Oberyn, not Prince Doran (Chapter 38)                                                   |
| `ellaria-sand`               | 32, "The Lion and the Rose", past the stage: Oberyn introduces her to Tywin and Cersei at the wedding (Game of Thrones Wiki, Oberyn Martell); 31 has her only with no name quoted | 182, Tyrion V: Oberyn tells Tyrion that "Ellaria is curious" about a blonde woman (A Wiki of Ice and Fire, Ellaria Sand, through Firecrawl, quoting Chapter 38)              |

- Olenna Tyrell: role Margaery Tyrell's grandmother, House Tyrell, alive. Her
  log holds what both media tell at the gate: she calls Sansa to eat with her
  and Margaery, and Sansa whispers that Joffrey is a monster. The match she
  offers Sansa differs by medium (Loras in the show, Willas in the books) and is
  left out. Her summary does not name her son Mace, whose show record opens only
  at episode 32. Italian: Italian Wikipedia heads her entry by her maiden name,
  "Olenna Redwyne" (Casa Tyrell); the record keeps the name both media use, as
  Selyse's does.
- Megga, Alla and Elinor Tyrell: role Margaery's cousins and companions, House
  Tyrell, alive. Each also has scenes in Sansa II (160) and at the wedding feast
  of Sansa III (172). Elinor is a flowered maiden who rules the younger cousins
  by right of womanhood (Ice and Fire Wiki); no page read calls her the eldest,
  so her summary says only that. No Italian page; the names stay as they are
  until the Mondadori forms are checked.
- Oberyn Martell: role brother of the Prince of Dorne, House Martell, alive. His
  log: he comes to King's Landing for the king's wedding in his brother Doran's
  place and tells Tyrion he wants justice for his sister Elia, told in both
  media at the gate. That he rides at the head of the Dornishmen is the book's
  alone (in "Two Swords" he rides ahead of the embassy and is first seen in a
  brothel), so the log leaves it out. Italian "Oberyn Martell" (Casa Martell).
- Ellaria Sand: role Oberyn Martell's paramour, House Martell, alive. Italian
  "Ellaria Sand" (Casa Martell).

### Stage-1 records stepped

Steps in `season-1.ts`, as episode / site chapter.

- Tyrion Lannister: role master of coin, 23 / 163 ("Walk of Punishment"; Tyrion
  III, where Tywin names him as Littlefinger leaves for the Vale).
- Petyr Baelish: role Lord of Harrenhal and suitor to Lysa Arryn, 23 / 163, the
  same council, where he agrees to go to the Vale to wed her.
- Bronn: role knight in Tyrion's pay, 21 / 148 ("Valar Dohaeris", where Podrick
  confirms to Meryn Trant that he is Ser Bronn of the Blackwater; Tyrion I,
  where Bronn tells Tyrion he has been knighted).
- Sansa Stark: role Tyrion Lannister's wife, 28 / 172 ("Second Sons"; Sansa
  III).
- Boros Blount, books only: role dismissed from the Kingsguard and affiliation
  House Blount, 123 (A Clash of Kings, Tyrion XI, where Osmund Kettleblack takes
  his white cloak; A Wiki of Ice and Fire, A Clash of Kings-Chapter 49); role
  knight of the Kingsguard and affiliation Kingsguard again, 156 (Tyrion II,
  where Varys tells Tyrion he has been restored). Episodes 19 and 21 only order
  them. #1463 left both waiting; they go in here because the return falls in
  this stage.
- Addam Marbrand, books only: role commander of the City Watch, 148 (Tyrion I,
  where Bronn tells Tyrion that Ser Addam has replaced Jacelyn Bywater). The
  show never gives him the Watch; episode 21 only orders it.

Not stepped: Cersei (the show's betrothal to Loras and the books' proposed match
with Willas change no field), Tywin (Hand since season 1), Joffrey, Margaery
(betrothed to Joffrey since 20 / 139), Loras (the show's two betrothals change
no field; his book Kingsguard step is at 139), Varys, Pycelle, Shae (the books
make her Sansa's maid only after the stage), Podrick, Kevan, Meryn Trant, Mace
Tyrell (his place at the council of Tyrion III, 163, is not told as a seat in
the pages read), Garlan Tyrell (named Lord of Brightwater Keep at 163, left for
a later step until the Italian name is checked), Balon Swann, Osmund
Kettleblack, Tommen, Dontos Hollard, Lollys Stokeworth. Ros's death at 26 was
filed before this stage.

### Owner check, not filed

- **Olyvar** (show only). "Kissed by Fire" (episode 25): Littlefinger's man
  poses as Loras's squire, beds him and carries the Tyrell plan back. No
  synopsis or quote read has his name said in season 3 (the Game of Thrones
  Wiki's quotes are from season 4). If episode 25 says it, he is filed at 25
  with `source: 'episode'`.

### Omitted

- **Bit parts, one scene in the stage:** Marei, Genna and Kayla (the three women
  Tyrion pays for Podrick in "Walk of Punishment"; Marei is named there, the
  others only in the credits), Mirelle (Bronn's woman in "Valar Dohaeris"),
  Symon Silver Tongue (Tyrion IV, 176), Frenken (Tyrion I, 148), Butterbumps
  (Olenna's fool, Sansa I).
- **Background courtiers and guards:** Arryk and Erryk (Olenna's guards), Alerie
  Hightower, Leonette and Janna Fossoway, Taena and Orton Merryweather, Meredyth
  Crane, Alysanne Bulwer, Alyce Graceford, Kennos of Kayce, Nysterica, Tallad,
  Alyn Ambrose (Sansa I and III), Paxter Redwyne and Mathis Rowan (the council
  of Tyrion III and the feast of Sansa III), Desmond Crakehall and Eldrick
  Sarsfield (the sniggering lords of "Mhysa"), Daemon Sand and the Dornish lords
  of Tyrion V (182), Morros Slynt (Sansa I, 150), Philip Foote (Sansa III, 172,
  and Tyrion V, 182), Ermesande Hayford (Sansa III, 172), Moon Boy (the fool at
  the feast of Sansa III, 172) and Gyles Rosby (Sansa III, 172, and Tyrion V,
  182). Each is listed as appearing with no scene of their own in the stage.
- **Bit parts, not filed in stage 2 either:** Osney and Osfryd Kettleblack
  (Sansa I, 150, among the queen's men). Neither has a record: #1463 omitted
  both as bit parts, and Sansa I gives neither a scene of his own.
- **Offices and descriptors:** the High Septon of Tyrion III and of "Second
  Sons", the sorcerer in Varys's crate, Margaery Tyrell's handmaiden, the Tyrell
  servant and Tyrell lady, the orphans of Flea Bottom, the old seamstress.
- **Only mentioned:** Willas Tyrell, Doran and Elia Martell, Tysha, Alanna (the
  cousin of Margaery's joke), Joanna Lannister.

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

## The Wall and beyond (#1638)

Mance Rayder's host and Jon Snow among the wildlings, the retreat from the Fist
of the First Men, the mutiny at Craster's Keep, Sam and Gilly's flight, and
Castle Black. The book's chapters in the stage are the prologue (144), Jon I
(151), Jon II (159), Samwell I (162), Jon III (170), Jon IV (174), Samwell II
(177), Jon V (185), Samwell III (190) and Jon VI (192). Candidates come from
their synopses and Appearing and Mentioned lists on A Wiki of Ice and Fire (the
shared cache), and from the Beyond the Wall and At the Wall synopses, Firsts and
cast lists of the ten season-3 episode pages. Show gates take the first naming
the pages report as said (an introduction, a quote, reported speech); book gates
the first chapter whose synopsis names the character in a scene of their own or
in a POV character's thought, the naming line itself unquoted, as the stage-2
groups did. Bit parts with one scene of their own, collectives and descriptors
are omitted (owner, 2026-11-07).

Counts: 11 filed, 2 pending, the rest omitted by class below; 5 earlier records
stepped.

Jon Snow and Mance Rayder join the season's cast row (`leads['season-3']`).

### Filed

Gates as episode / site chapter. `source` records give the other number only to
order them.

| Record                  | Show                                                                                                                                                            | Books                                                                                                                                                |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mance-rayder`          | 21, "Valar Dohaeris": Jon kneels to Tormund, and Mance, sitting in a corner, introduces himself                                                                 | 151, Jon I: Jon takes the Magnar of Thenn for the king, but the man singing in the tent is Mance, who introduces his companions                      |
| `tormund`               | 23, "Walk of Punishment": Mance orders Tormund to take twenty men and Jon over the Wall (reported speech; 21 and 22 name him only in narration, an owner check) | 151, Jon I: Mance introduces him as Tormund Giantsbane                                                                                               |
| `orell`                 | 22, "Dark Wings, Dark Words": Mance explains to Jon that Orell is a warg and asks him what he saw (Game of Thrones Wiki, Mance Rayder)                          | 151, Jon I, a safe later pin: listed as mentioned (Jon II, 159: "the eagle that was once Orell"); A Clash of Kings' Jon VIII (142) is an owner check |
| `styr` (books)          | none: the show's Styr comes in season 4 ("Two Swords", 31) and no page read has his name said; 21 orders him                                                    | 151, Jon I: Mance introduces Styr, the Magnar of Thenn                                                                                               |
| `dalla` (books)         | none: the show has no Dalla; 21 orders her                                                                                                                      | 151, Jon I: Mance introduces "the pregnant Dalla"                                                                                                    |
| `val` (books)           | none: the show has no Val; 21 orders her                                                                                                                        | 151, Jon I: Mance introduces Dalla's sister Val                                                                                                      |
| `jarl` (books)          | none: the show has no Jarl; 21 orders him                                                                                                                       | 151, Jon I: Mance introduces him as Val's lover                                                                                                      |
| `small-paul` (books)    | none: the show has no Small Paul; 21 orders him                                                                                                                 | 144, the prologue: he hunts with Chett and Lark, is in Chett's plot and wants Mormont's raven                                                        |
| `dirk` (books)          | none: the show gives his deed to Karl Tanner; 21 orders him                                                                                                     | 144, the prologue: named among the fourteen brothers of Chett's plot                                                                                 |
| `ollo-lophand` (books)  | none: the show gives his deed to Rast; 21 orders him                                                                                                            | 144, the prologue: named among the brothers of Chett's plot                                                                                          |
| `clubfoot-karl` (books) | none: the show's Karl Tanner is a character of his own, named only in season 4 (pending below); 21 orders him                                                   | 144, the prologue: Chett counts him among his plotters (mentioned there; an owner check, the safe later gate being Samwell II, 177)                  |

- Mance Rayder: role King-Beyond-the-Wall, Wildlings, alive. His log holds what
  both media tell at the gate: Jon takes another man for the king (Tormund in
  the show, Styr in the books), and Mance, who knows Jon killed Qhorin, asks why
  he wants to leave the Night's Watch. `nameSaidAt: 4`: the show says his name
  from "Cripples, Bastards, and Broken Things", where Alliser Thorne speaks of
  the wildlings under him, and earlier texts (Craster's log, season-2
  relationships and chronicles) name him. Italian "Mance Rayder".
- Tormund: role wildling chief in Mance Rayder's host, Wildlings, alive. Named
  "Tormund" in both media and locales; "Giantsbane" (Italian "Veleno dei
  Giganti") waits for a show line that says it. Owner check: episodes 21 and 22
  name him only in narration.
- Orell: role wildling warg, Wildlings. Status: alive at 22 in the show, dead at
  Queenscrown at 29 (Jon kills him); the books open on him dead, since Jon
  killed him in the Skirling Pass (A Clash of Kings, Jon VI, 125) before they
  name him, so his summary and log say only what holds in both: a warg bound to
  an eagle that scouts ahead of Mance's host. Owner check (review round 1): the
  show gate at 22 rests on the Mance Rayder page's report that Mance explains
  Orell is a warg and asks him what he saw, which may be the narrator's naming;
  no page read quotes the name said in season 3, and making him books-only, as
  Stonesnake in stage 2, would hide a six-episode show character. Italian kept.
- Styr, books only: role Magnar of Thenn, Wildlings, alive. Owner check: the
  show's Styr (season 4); if a line there says his name, the record takes that
  show gate (#852). Italian "Styr".
- Dalla, Val and Jarl, books only: Mance's wife, her sister and Val's lover,
  Wildlings. Jarl dies in the climb of the Wall, Jon IV (174). Dalla is
  `commonWord` ("dalla" is an Italian word). Italian "Dalla" and "Val" (Italian
  Wikipedia); Jarl kept.
- Small Paul, books only: role brother of the Night's Watch; dead at 162
  (Samwell I: the Other kills him as he carries Sam). Italian kept.
- Dirk, Ollo Lophand and Clubfoot Karl, books only: roles ranger, brother and
  steward of the Night's Watch, then mutineers at Craster's Keep from Samwell II
  (177), where Craster attacks Karl, Dirk slits Craster's throat and Ollo stabs
  the Lord Commander. All alive in the stage. Italian "Dirk" and "Karl
  Piededuro" (Italian Wikipedia, Guardiani della notte); Ollo Lophand kept.

### Earlier records stepped

Steps as episode / site chapter, in the module that filed each record.

- Jon Snow (`season-1.ts`): role sworn brother back at Castle Black, 30 / 192
  ("Mhysa"; Jon VI, where Maester Aemon cleans his wound). The books' escape at
  Queenscrown is Jon V (185).
- Rast (`season-1.ts`), show only: role mutineer at Craster's Keep, 24 ("And Now
  His Watch Is Ended", where he stabs Mormont in the back); 177 orders it.
- Chett (`season-1.ts`), books only: role kennel hand on the ranging beyond the
  Wall, leading a plot to desert, 144 (the prologue, his own chapter); 21 orders
  it.
- Ygritte (`season-2.ts`): role raider of the band that climbs the Wall, 26 /
  174 ("The Climb", Tormund's band; Jon IV, Styr and Jarl's).
- Gilly (`season-2.ts`): role Craster's daughter, fleeing south with Samwell
  Tarly, 24 / 190 ("And Now His Watch Is Ended"; Samwell III, where they travel
  together; Samwell II, 177, has her only ask Sam to take her).

Not stepped: Jeor Mormont and Craster (their deaths at 24 / 177 are filed),
Samwell Tarly (he kills a White Walker at 28 / 162 and reaches Castle Black at
30, the books' after the stage; no field changes), Grenn, Eddison Tollett and
Pypar (survivors, no field changes), Thoren Smallwood (his death at 21 / 162 is
filed), Mallador Locke and Jarman Buckwell (no fate or role told in the synopses
read; Jarman is back at Castle Black in Jon VI), Lord of Bones (with Mance's
host, no field changes; the show names him only in narration at 21), Maester
Aemon and Donal Noye (no field changes), Bowen Marsh and Jaremy Rykker (only
mentioned in the stage), Ghost (sent away in Jon III, no field for it), Bran's
party at Queenscrown and the Nightfort (their own group's child).

### Pending

- Coldhands (books only): the rider in black who saves Sam and Gilly in Samwell
  III (190) is unnamed there; in Bran IV (chapter 56, site 200) Gilly asks
  Bran's party whether they are the ones Coldhands was sent to find. No show
  counterpart.
- Karl Tanner (show only): first seen in "Walk of Punishment" (23), he kills
  Craster in "And Now His Watch Is Ended" (24), named there only in narration;
  his first quote with his name is "Oathkeeper" (34), "Karl Tanner from Gin
  Alley". If a season-3 line says it, he is filed at 23 or 24 with
  `source: 'episode'`.

### Omitted

- **Bit parts, one scene of their own:** Bannen (a ranger whose funeral Mormont
  leads in "And Now His Watch Is Ended"; dies at Craster's Keep in Samwell II),
  Lark the Sisterman (left out in stage 2 too; Chett's companion in the
  prologue, a wight in Samwell III), Ottyn Wythers (left out in stage 2; argues
  for a retreat in the prologue), Dywen (left out before; one line in the
  prologue), Bedwyck "Giant", Softfoot, Sweet Donnel Hill, Sawwood, Maslyn
  (named in Chett's plot), Longspear Ryk (Jon's guard with Ygritte in Jon I and
  II, no scene of his own), the Weeper, Harma Dogshead, Varamyr, Mag Mar Tun Doh
  Weg, Toregg, Dormund and Tormund's war band (Jon I and II), Lenyl and Ragwyle
  (Rattleshirt's band), Grigg the Goat, Errok, Del, Quort, Big Boil, Bodger,
  Hempen Dan and Lenn (the raiders of Jon IV and V), Ryles and Hake (wights in
  Samwell III).
- **Survivors at Craster's Keep, named in Samwell II only:** Alan of Rosby,
  Ferny, Byam Flint, Fornio, Garth of Greenaway, Garth of Oldtown, Ronnel
  Harclay, Orphan Oss, Rolley of Sisterton, Tim Stone, Ulmer of the Kingswood.
- **Collectives and descriptors:** Craster's wives, Gilly's son and Gilly's
  mother (the boy is unnamed in the stage in both media), the old man at
  Queenscrown (the show's horse breeder), the Other that Sam kills, the White
  Walker of "Second Sons", the Thenns, the Night's Watch officer.
- **Only mentioned:** Cotter Pyke, Denys Mallister, Lord Commander Qorgyle,
  Gendel and Gorne, Joramun, Bael the Bard.

## Arya, the Brotherhood Without Banners and the Hound (#1636)

Arya, Gendry and Hot Pie on the road from Harrenhal, the outlaws who take them,
their holdfasts and their leaders, and the Hound, who ends the stage with Arya
at the Twins. The book's chapters in the stage are Arya I to XI (147, 157, 161,
166, 173, 178, 183, 187, 191, 194, 196). Candidates come from their "Appearing"
lists on A Wiki of Ice and Fire (the shared cache) and from the Firsts, cast
lists and Riverlands synopses of the season-3 episode pages. No A Wiki of Ice
and Fire character page was read: the Firecrawl credits had run out, so every
book gate rests on the chapter synopses, and the naming lines are not quoted.
Bit parts with one scene in the stage, background outlaws and descriptors are
omitted, as in seasons 1 and 2 (owner, 2026-11-03 and 2026-11-07).

Counts: 8 filed, all the books' alone; 0 pending; the rest omitted by class
below; 7 earlier records stepped.

### Filed

Gates as episode / site chapter. Every record here is `source: 'chapter'`: its
episode only orders it.

| Record                | Show                                                                                                                                                 | Books                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `anguy`               | none: in six episodes from "Dark Wings, Dark Words" (22), but no quote or synopsis read has his name said (owner check); 22 orders him               | 157, Arya II: with Tom and Lem he comes upon Arya, Gendry and Hot Pie, and a shot of his bow makes them come along (Chapter 13)                         |
| `tom-of-sevenstreams` | none: the show has no Tom; 22 orders him                                                                                                             | 157, Arya II: the same scene; he sings on the road and gives Arya a paper for the horses (Chapter 13)                                                   |
| `lem`                 | none: the show's Lem is in season 6 only ("The Broken Man", 57, notes him unnamed in dialogue; "No One", 58, has no quote naming him); 22 orders him | 157, Arya II: the same scene; Arya slams a tankard in his face at the inn (Chapter 13)                                                                  |
| `jack-be-lucky`       | none; 22 orders him                                                                                                                                  | 161, Arya III: he blows his horn at a village that looks abandoned, and its people come out (Chapter 17); Chapter 13 lists him with no scene of his own |
| `greenbeard`          | none; 22 orders him                                                                                                                                  | 166, Arya IV: the old woman of High Heart speaks in private to Lem, Tom and Greenbeard (Chapter 22); Chapters 13 and 17 list him with no scene read     |
| `mad-huntsman`        | none; 24 orders him                                                                                                                                  | 173, Arya V: the caged northmen were caught by the Mad Huntsman, who brings Sandor Clegane into town in chains (Chapter 29)                             |
| `edric-dayne`         | none (the show's Edric Storm is another character); 27 orders him                                                                                    | 187, Arya VIII: Arya talks with Edric Dayne, called Ned, the young Lord of Starfall (Chapter 43); Chapters 34 and 39 list him with no name read         |
| `ghost-of-high-heart` | none; 27 orders her                                                                                                                                  | 187, Arya VIII: the ghost of High Heart tells the outlaws her dreams and sends Arya away (Chapter 43); Chapter 22 calls her only an old dwarf woman     |

- Anguy: role archer of the Brotherhood Without Banners, alive. He wins the
  archery at the Hand's tourney in Eddard VII of _A Game of Thrones_ (site 31),
  and Alyn's stage-1 chronicle names him there, so the record carries
  `nameSaidAt: 5` (the episode that orders that chronicle entry). The record
  opens at 157, where he is next seen, later and so safe. Italian "Anguy".
- Tom of Sevenstreams: role singer of the Brotherhood Without Banners, alive.
  Italian "Tom di Settecorrenti", the Italian Game of Thrones Wiki's title.
- Lem: role outlaw of the Brotherhood Without Banners, alive. Filed as "Lem",
  the name the chapter gives; "Lemoncloak" is his nickname. Italian "Lem".
- Jack-Be-Lucky: role outlaw of the Brotherhood Without Banners, alive. Italian
  "Jack Fortunello".
- Greenbeard: role outlaw of the Brotherhood Without Banners, alive. Filed under
  the name the chapters use; he calls himself Pello of Tyrosh. Italian
  "Barbaverde".
- Mad Huntsman: role huntsman, no allegiance at 173, then Brotherhood Without
  Banners at 178 (Arya VI, where he has handed Sandor to the outlaws), alive.
  Italian "Cacciatore Pazzo".
- Edric Dayne: role Lord of Starfall and squire to Beric Dondarrion, Brotherhood
  Without Banners, alive. Italian "Edric Dayne"; Starfall is "Stelle al
  Tramonto".
- Ghost of High Heart: role seer of High Heart, no allegiance, alive. Italian
  "Fantasma di Cuore Alto".

Every new record shows the shared `PERSON` placeholder until its drawing child
(#1631), and is under `pending` for #1654 in
`game-of-thrones-relationships.json`.

### Earlier records stepped

Steps in `season-1.ts`, as episode / site chapter.

- Arya Stark, status `captured`, split by medium: 157, the books' alone (Arya
  II, where the outlaws take her; the Hound takes her from them in Arya VIII,
  187, with no change); 27, the show's alone ("The Bear and the Maiden Fair",
  where the Hound snatches her as she runs). In "Walk of Punishment" (23) Thoros
  tells her she is no prisoner, so the show's pin is the kidnapping (owner
  check: 22 or 25).
- Sandor Clegane, status `captured` 22 / 173 ("Dark Wings, Dark Words"; Arya V,
  the Mad Huntsman) and `alive` 25 / 183 ("Kissed by Fire"; Arya VII, where
  Beric has let him go, the safe later pin after the trial of Arya VI, 178).
- Gendry: role smith of the Brotherhood Without Banners and affiliation
  Brotherhood Without Banners, 25 / 183 ("Kissed by Fire"; Arya VII, where Beric
  also knights him, which the shared role leaves out). The show's alone:
  `captured`, affiliation "No allegiance" and role "Melisandre's prisoner" at 26
  ("The Climb", the outlaws hand him to Melisandre for gold), `alive` and role
  "Escaped from Dragonstone" at 30 ("Mhysa", Davos frees him); chapter 196 only
  orders them. These cover his Dragonstone scenes too, which the Dragonstone
  group (#1640) shares.
- Hot Pie: role baker at an inn and affiliation "An inn in the riverlands", 23 /
  161 ("Walk of Punishment"; Arya III, where Arya misses him, now that he has
  stayed with Sharna). The shared text names neither medium's inn.
- Beric Dondarrion: role leader of the Brotherhood Without Banners and
  affiliation Brotherhood Without Banners, 24 / 161 ("And Now His Watch Is
  Ended"; Arya III, Harwin's tale). His death and return at the trial (25 / 178)
  change no status.
- Thoros of Myr: affiliation Brotherhood Without Banners, 23 / 166. His show
  gate (22) already holds his first affiliation, so the show step takes the next
  episode. Arya III (161) has him only in Harwin's tale; Arya IV (166) is the
  first to tie him to the band.
- Harwin, the books' alone: affiliation Brotherhood Without Banners, 161 (Arya
  III); episode 22 only orders it.

Not stepped: Arya's role and affiliation (unchanged), Sandor's role (deserter
from the Kingsguard since 19 / 136), Thoros's role (red priest), Melisandre (the
Dragonstone group). The Hound's later status (`presumed-dead` at 40 / 218) was
filed before this stage.

### Owner checks, not filed

- **Anguy, show.** Restore a show gate if an episode says his name; the record
  is the books' alone until then.
- **Sharna** and **Husband** (Arya II, 157): the keepers of the Inn of the
  Kneeling Man, where Hot Pie stays. One scene each in the stage; Sharna is
  mentioned again in Arya VIII and X. File Sharna if Hot Pie's inn should have
  its keeper.
- **Ravella Smallwood**, Lady Smallwood (Arya IV, 166): one scene at Acorn Hall,
  where she gives Arya her dead son's clothes.

### Omitted

- **Bit parts, one scene in the stage:** Utt (Arya VII, 183, hanged by the
  outlaws), Bella (Arya V, 173), Tansy, Helly, Cass, Jyzene and Lanna of the
  Peach (Arya V), Lymond Lychester and Maester Roone (Arya IV, 166), Donnel
  Haigh (Arya X, 194), Iggo (Arya I, 147, seen only in Arya's wolf dream), the
  boy at the Inn of the Kneeling Man (Arya II).
- **Animals with no record:** Stranger, Sandor Clegane's horse (Arya VIII to XI,
  187–196), never a character of his own.
- **Background outlaws,** each listed as appearing with no scene of their own:
  Dennet, Kyle, Melly (Arya VI, 178), Notch, Merrit o' Moontown, Mudge, Watty
  the Miller and Beardless Dick (Arya VII and VIII, 183 and 187).
- **Show descriptors:** the Brotherhood member of "Dark Wings, Dark Words", the
  innkeeper who hires Hot Pie in "Walk of Punishment", and the Frey soldiers of
  "Mhysa".
- **Descriptors:** the bent-backed man (Arya IX, 191), the guard at Harrenhal.
- **Only mentioned:** Wylla, Ashara Dayne, Allyria Dayne, Sedgekins, Fern, Old
  Pate.

## Jaime, Brienne and Harrenhal (#1637)

Jaime and Brienne's road to King's Landing, their captors (the show's Locke and
the books' Vargo Hoat and his Brave Companions), Harrenhal under Roose Bolton,
and Qyburn. Candidates come from the Game of Thrones Wiki's season-3 episode
pages ("Valar Dohaeris", "Dark Wings, Dark Words", "Walk of Punishment", "And
Now His Watch Is Ended", "Kissed by Fire", "The Bear and the Maiden Fair",
"Mhysa") and the pages of Qyburn, Locke, Steelshanks, Roose Bolton, Jaime
Lannister and Brienne of Tarth; A Wiki of Ice and Fire's cached pages for Jaime
I to VI (site chapters 145, 155, 165, 175, 181, 188); and the Ice and Fire
Wiki's pages of Qyburn, Vargo Hoat, Urswyck, Zollo, Timeon, Shagwell, Pyg, Robin
Ryger, Elmar Frey, Rorge, Cleos Frey and the Brave Companions. Bit parts and
background figures are omitted, as in season 2 (owner, 2026-11-03 and
2026-11-07).

Counts: 2 filed, 1 pending, 22 omitted; 3 season-1 and 2 season-2 records
stepped.

### Filed

Gates as episode / site chapter. `source` records give the other number only to
order them.

| Record                       | Show                                                                                                                                        | Books                                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `qyburn`                     | 21, "Valar Dohaeris": found alive among the slain prisoners at Harrenhal, he gives Robb his name while Talisa tends his wound (Qyburn page) | 175, Jaime IV: Roose Bolton has Qyburn clean and bandage the stump; A Clash of Kings lists him with no scene (#1465)                               |
| `steelshanks-walton` (books) | none: the show's Steelshanks is named only in narration in the pages read (owner check); 27 orders him                                      | 188, Jaime VI: he leads the two hundred Dreadfort men who escort Jaime, and Jaime forces him back to Harrenhal; 175 lists him unnamed (safe later) |

- Qyburn: alive. The summary, the log and the first role step ("With the
  northmen at Harrenhal") hold only what both media tell at the gates: he is at
  Harrenhal while the northmen hold it (review round 1). Role steps by medium:
  the books' healer in Roose Bolton's service at 175 (Jaime IV, the stump); the
  show's healer stripped of his maester's chain at 25 ("Kissed by Fire").
  Affiliation: the show's no allegiance at 21, then in Roose Bolton's service at
  25 / 175, shared. The books' maester background and Brave Companions are in
  none of the cached chapter synopses through 196 and are not filed. He leaves
  Harrenhal with Jaime at 27 / 188 and reaches King's Landing in "Mhysa" (30);
  neither changes a field. Italian "Qyburn" (Personaggi).
- Steelshanks Walton: books only, role captain in Roose Bolton's service, House
  Bolton, alive. His log holds Jaime VI: the escort, the turn back for Brienne,
  his men's crossbows against the bear. Italian kept: Italian Wikipedia has no
  entry and the Mondadori form was not checked.

### Pending

- Locke (show only): the Game of Thrones Wiki names him in narration from "Dark
  Wings, Dark Words" (22, "riders from House Bolton arrive led by a man named
  Locke"), where he takes Jaime and Brienne, and his page has Roose call him his
  "best hunter" (GOT301), but no synopsis or quote read through "First of His
  Name" (35), his last episode, has his name said on screen. He waits for a
  source that confirms the naming. Owner check: file him at 22 (or 21, if Roose
  names him there) if the name is said on screen; his steps would be Roose
  Bolton's man and the castellan of Harrenhal after Roose leaves (27). The books
  give his part to Vargo Hoat.

### Season-1 and season-2 records stepped

Steps in `season-1.ts` and `season-2.ts`, as episode / site chapter.

- Jaime Lannister: stays `captured` through Brienne's escort and the capture by
  Roose Bolton's men (Locke at 22; the Brave Companions at 165); `alive` at 27 /
  188, when Roose lets him go and he rides out for King's Landing with Bolton's
  escort ("The Bear and the Maiden Fair"; Jaime VI). His hand (Locke at 23;
  Zollo on Vargo Hoat's order at 165) is in no field. His arrival in King's
  Landing ("Mhysa", 30; Jaime VII, 206) changes no field.
- Brienne of Tarth: `captured` at 22 / 165 with Jaime ("Dark Wings, Dark Words";
  Jaime III), `alive` at 27 / 188, when Jaime pulls her from the bear pit and
  she leaves with him. Her role stays Catelyn's sworn sword.
- Roose Bolton: the Harrenhal command, books only at 18 / 121 since #1465, is
  shared at 22 / 121: Robb leaves him in command of Harrenhal in "Dark Wings,
  Dark Words". His Red Wedding and wardenship steps are #1635's.
- Vargo Hoat, books only: role leader of the Brave Companions and Lord of
  Harrenhal at 165, where Urswyck tells Jaime that Roose has named him lord
  (Jaime III; Roose says so himself in Jaime V, 181).
- Rorge, books only: affiliation Brave Companions at 165, among the Companions
  who take Jaime and Brienne (Jaime III); his join in Arya IX (121) rests on one
  page and stays unfiled, so 165 is a safe later pin.

Not stepped: Cleos Frey (his death on the Duskendale road at 165 was filed by
#1472), Biter (only mentioned in Jaime III), Tywin and Cersei (their meeting
with Jaime is past the stage in the books), Robb and Catelyn (#1635).

### Omitted

- **The Brave Companions, bit parts:** Urswyck (leads the party that takes Jaime
  and Brienne, Jaime III and IV), Zollo (cuts off Jaime's hand on Vargo's order,
  Jaime III), Timeon, Shagwell, Pyg, Nage (carries the escort's peace banner),
  Three Toes. Owner check: file Urswyck and Zollo if their acts in Jaime III
  should have records of their own; their deeds are told on Vargo Hoat's and
  Jaime's steps.
- **Harrenhal's background:** Aenys, Danwell and Hosteen Frey (Jaime IV), Elmar
  Frey (Jaime V), Amabel (Jaime IV) and Pia (only mentioned, Jaime VI), as in
  season 2.
- **On the road:** Ser Robin Ryger (the Riverrun galley, Jaime I; omitted with
  Riverrun's household in season 2), the boy and the cook of the Inn of the
  Kneeling Man (Jaime II), the hanged women (Jaime I), the show's farmer and the
  Bolton soldiers with Locke.
- **Only mentioned:** Lord Selwyn Tarth (his ransom offer, Jaime VI and "The
  Bear and the Maiden Fair"), Walda Frey (Roose's bride, Jaime V).
- **Not a character:** the bear in Harrenhal's pit.
- **Dream figures and backstory names only:** the Kingsguard and others in
  Jaime's dream in Jaime VI (188), among them Gerold Hightower, Arthur Dayne,
  Oswell Whent, Jonothor Darry, Lewyn Martell and Rhaegar Targaryen, and the
  pyromancers and others Jaime names in Jaime V (181): Rossart, Garigus, Belis
  and Chelsted. None has a scene of their own in the stage.
