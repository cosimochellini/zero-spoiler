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
