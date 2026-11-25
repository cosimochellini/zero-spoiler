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

| Record                       | Show                                                                                                                                                | Books                                                                                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `qyburn`                     | 21, "Valar Dohaeris": found alive among the slain prisoners at Harrenhal, he identifies himself to Robb while Talisa tends his throat (Qyburn page) | 175, Jaime IV: Roose Bolton has Qyburn clean and bandage Jaime's stump; A Clash of Kings lists him among the Brave Companions with no scene (#1465) |
| `steelshanks-walton` (books) | none: the show's Steelshanks is named only in narration in the pages read (owner check); 27 orders him                                              | 188, Jaime VI: he leads the two hundred Dreadfort men who escort Jaime, and Jaime forces him back to Harrenhal; 175 lists him unnamed (safe later)  |

- Qyburn: role healer at Harrenhal, alive. Summary and log say he trained as a
  maester and is at Harrenhal while the northmen hold it, true at both gates.
  Affiliation by medium: the show's no allegiance at 21, then in Roose Bolton's
  service at 25 ("Kissed by Fire", Lord Bolton has him treat Jaime); the books'
  Brave Companions in Roose Bolton's service at 175. His chain, stripped by the
  Citadel (told at 25 in the show), is in no field. He leaves Harrenhal with
  Jaime at 27 / 188 and reaches King's Landing in "Mhysa" (30); neither changes
  a field. Italian "Qyburn" (Personaggi).
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
