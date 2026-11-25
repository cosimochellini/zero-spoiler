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
