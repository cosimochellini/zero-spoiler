# Game of Thrones, season 3 characters: research notes

Research for #1629, the characters of the third stage: HBO season 3 (episodes
21–30) and _A Storm of Swords_ through chapter 52, Arya XI (site chapters
144–196). One section per cast group (#1626); each group's filing child adds its
own.

- **Gates.** A character opens at the first explicit naming signal in each
  medium: an introduction, the name in quoted or reported speech or printed
  thought, a caption or a title card (owner, 2026-11-21). Narration and the
  credits never count. Each gate cites its naming scene (#1425).
- **Chapters.** Site chapter = 144 + the book's chapter N, prologue 0 (A Wiki of
  Ice and Fire's "A Storm of Swords-Chapter N" is site 144 + N).
- **Dated steps** pin both numbers and stop at episode 30 / chapter 196. A step
  one medium alone tells carries `source`. A record the other medium meets later
  keeps that later gate, even past the stage (#852).
- **Not viewed.** Neither the episodes nor the books were viewed. Book facts
  come from A Wiki of Ice and Fire's chapter pages in the shared cache
  (`.gate/firecrawl/`), its character pages read through Firecrawl, and the Ice
  and Fire Wiki; show facts from the Game of Thrones Wiki's episode and
  character pages. Every open point is under `unverified` in
  `game-of-thrones.json`.

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
  of Sansa III (172). Elinor is the eldest (Ice and Fire Wiki). No Italian page;
  the names stay as they are until the Mondadori forms are checked.
- Oberyn Martell: role brother of the Prince of Dorne, House Martell, alive. His
  log: he leads the Dornishmen to King's Landing for the king's wedding and asks
  Tyrion when justice will be done for his sister Elia, told in both media at
  the gate. Italian "Oberyn Martell" (Casa Martell).
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
  of Tyrion V (182).
- **Offices and descriptors:** the High Septon of Tyrion III and of "Second
  Sons", the sorcerer in Varys's crate, Margaery Tyrell's handmaiden, the Tyrell
  servant and Tyrell lady, the orphans of Flea Bottom, the old seamstress.
- **Only mentioned:** Willas Tyrell, Doran and Elia Martell, Tysha, Alanna (the
  cousin of Margaery's joke), Joanna Lannister.
