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
- Greenbeard: role sellsword of the Brotherhood Without Banners, alive. Filed
  under the name the chapters use; he calls himself Pello of Tyrosh. Italian
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
- **Background outlaws,** each listed as appearing with no scene of their own:
  Dennet, Kyle, Melly (Arya VI, 178), Notch, Merrit o' Moontown, Mudge, Watty
  the Miller and Beardless Dick (Arya VII and VIII, 183 and 187).
- **Show descriptors:** the Brotherhood member of "Dark Wings, Dark Words", the
  innkeeper who hires Hot Pie in "Walk of Punishment", and the Frey soldiers of
  "Mhysa".
- **Descriptors:** the bent-backed man (Arya IX, 191), the guard at Harrenhal.
- **Only mentioned:** Wylla, Ashara Dayne, Allyria Dayne, Sedgekins, Fern, Old
  Pate.
