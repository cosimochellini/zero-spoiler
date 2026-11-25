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
  name him. Italian kept.
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
