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

## Dragonstone (#1640)

Stannis's court after the Blackwater. Candidates come from the Game of Thrones
Wiki's season-3 episode pages (Dragonstone synopses, cast, "In the books"), its
Davos Seaworth, Stannis Baratheon, Melisandre, Shireen Baratheon, Selyse
Florent, Salladhor Saan and Axell Florent pages, and A Wiki of Ice and Fire's
synopses and character lists of _A Storm of Swords_ chapters 5, 10, 25 and 36
(Davos I to IV, site chapters 149, 154, 169 and 180), with the Ice and Fire
Wiki's Edric Storm, Axell Florent and Alester Florent pages. Davos V (chapter
54, site 198) is past the stage. Firecrawl was not used: no character page of A
Wiki of Ice and Fire was read, so every book gate rests on the chapter synopses.

Counts: 3 filed, 0 pending, 17 omitted; 1 earlier record stepped.

### Filed

All three are the books' alone. The show has none of them in season 3: its
Gendry takes Edric's part (Game of Thrones Wiki, "Second Sons", "In the books"),
and its Axell is first seen at his burning in "The Lion and the Rose" (episode
32). "Second Sons" (episode 28), which adapts Davos IV, orders them.

| Record                         | Show                                                                                                                  | Books                                                                                                                                               |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `axell-florent` (books only)   | none in the stage: seen at his burning in episode 32, named in the synopsis and credits only (owner check); 28 orders | 180, Davos IV: Stannis has Axell tell Davos of the Claw Isle plan, then dismisses him (safe later pin; Davos II and III name him in narration only) |
| `alester-florent` (books only) | none; 28 orders                                                                                                       | 180, Davos IV: Stannis proclaims that Alester will die for treason (Davos III, 169, names him in narration only)                                    |
| `edric-storm` (books only)     | none: the show's Gendry takes his part; 28 orders                                                                     | 180, Davos IV: Stannis takes three leeches fat with Edric Storm's blood, and Melisandre asks to burn him (safe later pin; see below)                |

- Axell Florent: role castellan of Dragonstone, House Florent, alive. Selyse's
  uncle in the books (Ice and Fire Wiki; the show makes him her brother), one of
  the queen's men. His log tells Davos II (154), where he takes Davos into
  custody for plotting against Melisandre, and Davos IV (180), where he wants to
  be Hand and threatens Davos if he does not help. Owner checks: Davos II and
  Davos III (169) name him in narration only; A Clash of Kings has him at the
  prologue's feast and in Davos I, where the second stage left him out as a bit
  part; if the show says his name in episode 32, the record becomes both media's
  at 32, dead in the show from its gate. Italian "Axell Florent" (the Italian
  Game of Thrones Wiki; "castellano di Roccia del Drago").
- Alester Florent: role "Former Hand of King Stannis", House Florent,
  `imprisoned` from his gate: Davos III has Axell throw him into Davos's cell
  for the letter he wrote to Tywin offering peace, and Davos IV, the chapter
  that opens him, has Stannis condemn him and make Davos Hand. Khorane
  Sathmantes tells Davos in Davos II (154) that Lord Alester Florent is
  Stannis's Hand, before he is seen in the stage. `nameSaidAt: 14` lets Cortnay
  Penrose's books-only story of the parley (A Clash of Kings, Davos II, 116,
  ordered at episode 14) name him. His death is after the stage. Italian
  "Alester Florent" (Italian Wikipedia, in Salladhor Saan's section).
- Edric Storm: role King Robert's bastard son, House Baratheon, alive. Owner
  check: Davos II (154), where Davos meets him playing monsters and maidens with
  Shireen and Patchface and he talks of his father, names him in narration only;
  if a line there says his name, the gate is 154. A Game of Thrones and A Clash
  of Kings only mention him. His log (Melisandre wants his king's blood burned;
  Stannis refuses but burns three leeches with it, naming Joffrey, Balon and
  Robb) is Davos IV's. Italian "Edric Storm" (Italian Wikipedia, in Melisandre's
  section).

### Earlier records stepped

- Davos Seaworth (`season-2.ts`):
  - status `alive` at 149, the books' alone (Davos I: a Lysene galley of
    Salladhor's picks him off his rock); the show rescues and jails him in the
    same episode, so 21 only orders it;
  - `imprisoned` at 21 / 154: Stannis sends him to the dungeon after he draws a
    knife on Melisandre ("Valar Dohaeris", GOT301); Axell takes him into custody
    for plotting to kill her (Davos II);
  - `alive` at 28 / 180: Stannis frees him ("Second Sons", GOT308; Davos IV,
    where Axell brings him before the king);
  - role "Knight in King Stannis's service" again at 21, the show's alone: the
    fleet he commanded burned on the Blackwater, and Salladhor brings him back
    with no command; Davos II (154) orders it;
  - role "Hand of King Stannis" at 180, the books' alone (Davos IV: Lord of the
    Rainwood, Admiral of the Narrow Sea and Hand). The show's Stannis only
    promises him the Handship in season 2 ("The Prince of Winterfell"); 28
    orders it.
  - He is a lead of `leads['season-3']`. In "Mhysa" (30) Stannis sentences him
    to death and spares him, which changes no field.

Not stepped: Stannis (no field changes; the leech ritual at 28 / 180 is a
chronicle and relationship matter), Melisandre (she leaves Dragonstone for
Gendry in the show, which changes no field), Selyse and Shireen (no field
changes; Shireen teaching Davos to read in "Kissed by Fire", 25, is a
relationship card), Salladhor Saan (Alester names him Lord of Blackwater Bay in
the books, Davos II, 154: a title in prose, not a change of his service; owner
check), Gendry (the Brotherhood group, #1636, files his Dragonstone steps:
Melisandre's prisoner at 26, freed at 30, the show's alone).

### Pending

None: Davos V (site 198), where Davos sends Edric away, and the burning of
Alester are past the stage and step records already filed.

### Omitted

- **Bit parts, one scene in the stage:** Khorane Sathmantes, captain of
  _Shayala's Dance_, and Meizo Mahr, Salladhor's eunuch (Davos II, 154);
  Patchface (Davos II, 154; the show has no Patchface, and the second stage left
  him out too); Maester Pylos (Davos III, 169, where he treats Davos's fever;
  the show gives his teaching of Davos to Shireen, and in the books it comes in
  Davos V, 198).
- **Descriptors:** Porridge and Lamprey, the gaolers Davos names after their
  meals in his thoughts (Davos III, 169); the guards who drag Davos to the
  dungeon ("Valar Dohaeris"); the crossbowman at the castle gate (Davos II).
- **Collectives:** the queen's men and the king's men, the men burned as
  traitors on Dragonstone ("Valar Dohaeris"; Davos II).
- **Only mentioned:** Devan Seaworth, alive with Stannis (Davos II and III; the
  show has no Devan); Lord Guncer Sunglass and Ser Hubard Rambton's sons, burned
  before Davos returns (Davos II); Imry Florent, dead on the Blackwater (Davos
  III); Andrew Estermont and Lord Estermont (Davos IV).
