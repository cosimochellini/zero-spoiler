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
