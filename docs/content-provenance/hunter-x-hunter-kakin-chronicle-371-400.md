# Kakin chronicle, chapters 371–400 (#1157)

Written on 7 November 2026, part of #918. Covers chapters 371–400, the third and
fourth Kakin record phases (#1136, #1137): 118 bilingual stories, at least one
for each of the 40 characters filed in that window and major new beats for 45
returning characters. The series now has 908 stories for 267 characters.
Chapters 401 on are #1159.

## Sources and method

The writer read the English Hunter x Hunter Wiki's chapter pages 371–400 through
the MediaWiki API (`action=parse&prop=wikitext`): each synopsis and, where the
page has them, its chapter notes. A few character pages settled single details:
Kaiser (appearance 372, name 400), Famule (his part in chapter 386), Loberry
(custody in 372), Hanzo (guarding Marayam from 361), Camilla and Halkenburg
(custody), Padaille (his death in 391), Voconte (the Room 3101 trap), Momolly
(the academy friendship), Longhi (what chapter 400 shows of her contract) and
Neon Nostrade ("Unknown, presumed deceased"). Names come from the phase 3 and
phase 4 inventories ([phase 3](hunter-x-hunter-kakin-phase-3.md),
[phase 4](hunter-x-hunter-kakin-phase-4.md)). The per-story source and note are
in `scripts/chronicle-sources-hxh.mjs`; `npm run docs:chronicle` regenerates the
full report.

- [Chapter 371](https://hunterxhunter.fandom.com/wiki/Chapter_371) through
  [Chapter 400](https://hunterxhunter.fandom.com/wiki/Chapter_400).

Prose was written for each story in IT and EN, with no dialogue, quotations or
copied paragraphs. Licensed manga pages were not inspected. This is a fact-check
record, not a rights finding. AI assistance: Claude Opus 5.5, for writing,
assembly and tests. An independent verifier pass follows on the pull request;
its corrections are listed below.

## Rules applied

- Every story is the manga's alone (`source: 'chapter'`) at episode 148, which
  only orders it: an anime reader never sees it, in the chronicle or at home.
- Each story sits at the first chapter by whose end the reader knows all of it.
  Where a story gathers several chapters, the note lists each.
- A story names only characters filed by its chapter, each with a marker.
  Records that open after 400 are described, not named: Woble's mother (401),
  the Xi-Yu underboss (404), the Heil-Ly boss (405), the Xi-Yu boss (410), the
  Hunter guarding Woble (412), the maid of chapter 371 (412), Zhang Lei's two
  guards (402), Benjamin's soldiers and guard captain (402–417) and the Supreme
  Magistrate (404). Names the wiki gives that have no record are left out too:
  Tserriednich's bodyguard and her colleague, the Heil-Ly hitman of chapters
  378–393, Momoze's killer, the king and his butler, the Cha-R boss, consigliere
  and men, Camilla's curse leader, Tyson's flirtatious guard, the old man of
  Room 3101 and the Heil-Ly members named only in passing.
- Major beats only (owner, 2026-11-07). A returning character with only an
  appearance in the window gets no story: Luzurus, Marayam, Woble, Duazul, Unma,
  Tang Zhao Li, Vincent, Kalluto, Killua, Botobai and Ginta. Kalluto, Botobai
  and Ginta are named in Illumi's chapter-380 story.
- A story that implies a status change carries it: Loberry is taken into custody
  (372), Camilla is confined (373) and back in her quarters under watch after
  the trial (376), Halkenburg is taken into custody (389), and Neon is presumed
  dead when her ability vanishes from Chrollo's book (377), all manga-only.
  Hanzo's record gains the affiliation the chapter-372 story relies on: since
  chapter 361 he guards Marayam.

## Corrections during authoring

1. Mizaistom's coded message (381) is only readable once chapter 383 explains
   the Hunters' code, and Keeney is filed at 383, so the story waits for 383.
2. Fukataki and Taler (389): Kacho is already dead at 383, so the stories say
   the twins are "reported to be in custody", as Camilla's soldiers believe.
3. Kurapika and Longhi (400): the terms of Longhi's contract are chapter 401;
   the stories stop at her offer and his agreement.
4. Chrollo's coin-toss scene (371) is told once, as Machi's story.
5. Kaiser's earlier appearances (372, 381, 386) are told in his chapter-400
   story, when he is named; before that he is "an investigator" or "an
   official".
6. Padaille (391): his death follows his character page and the record's
   chapter-391 status; Tevelares reports it in chapter 393.

## Corrections from independent verification

Pending.

## Coverage

All gates are chapters at episode 148. New records:

| Character         | Story chapters |
| ----------------- | -------------- |
| `vergei`          | 374, 375       |
| `cashew`          | 379            |
| `ken-i-wang`      | 379, 393       |
| `keeney`          | 383            |
| `tajao`           | 384            |
| `famule`          | 389            |
| `fukataki`        | 389            |
| `taler`           | 389            |
| `zakuro-custard`  | 390, 393       |
| `lynch-fullbokko` | 390, 393       |
| `tevelares`       | 391            |
| `quorolle`        | 393            |
| `padaille`        | 391            |
| `misha-hao`       | 392            |
| `maizan`          | 393            |
| `daemon`          | 393            |
| `gelato`          | 393            |
| `perigord`        | 393, 399       |
| `bille`           | 394            |
| `voconte`         | 394            |
| `matvere`         | 394            |
| `tassi`           | 394            |
| `terebellum`      | 399            |
| `chiffon-toto`    | 394            |
| `montblanc-toto`  | 394            |
| `sodom`           | 394            |
| `borksen`         | 394            |
| `otocin`          | 394            |
| `gipper`          | 394            |
| `momolly`         | 394            |
| `lisores`         | 395            |
| `sarasa`          | 396, 397       |
| `sheila`          | 395, 397       |
| `renko`           | 397            |
| `yokotani`        | 399            |
| `madwig`          | 400            |
| `himonce`         | 400            |
| `anzel`           | 400            |
| `hyuga`           | 400            |
| `kaiser`          | 400            |

Returning characters:

| Character                  | Story chapters          |
| -------------------------- | ----------------------- |
| `kurapika`                 | 371, 376, 386, 388, 400 |
| `machi`                    | 371, 397                |
| `chrollo`                  | 377, 395, 396, 397      |
| `phinks`                   | 371, 398                |
| `nobunaga`                 | 378, 393, 395, 399      |
| `feitan`                   | 400                     |
| `franklin`                 | 379                     |
| `shizuku`                  | 377                     |
| `bonolenov`                | 377                     |
| `illumi`                   | 377, 380                |
| `uvogin`                   | 397                     |
| `shalnark`                 | 397                     |
| `pakunoda`                 | 396                     |
| `neon-nostrade`            | 377                     |
| `hisoka`                   | 393                     |
| `mizaistom-nana`           | 380, 383                |
| `melody`                   | 377, 383, 400           |
| `kacho-hui-guo-rou`        | 383, 400                |
| `fugetsu-hui-guo-rou`      | 376, 381, 400           |
| `seiko-hui-guo-rou`        | 400                     |
| `hanzo`                    | 372                     |
| `biscuit-krueger`          | 375                     |
| `camilla-hui-guo-rou`      | 373, 376                |
| `benjamin-hui-guo-rou`     | 373, 389                |
| `halkenburg-hui-guo-rou`   | 382, 386, 389           |
| `tserriednich-hui-guo-rou` | 376, 387                |
| `zhang-lei-hui-guo-rou`    | 376, 390                |
| `tyson-hui-guo-rou`        | 389, 400                |
| `izunavi`                  | 400                     |
| `tubeppa-hui-guo-rou`      | 388                     |
| `sale-sale-hui-guo-rou`    | 382                     |
| `basho`                    | 389                     |
| `danjin`                   | 376                     |
| `myuhan`                   | 376                     |
| `maor`                     | 388                     |
| `satobi`                   | 386                     |
| `longhi`                   | 400                     |
| `yuri`                     | 388                     |
| `ladiolus`                 | 388                     |
| `furykov`                  | 373                     |
| `belerainte`               | 376                     |
| `shedule`                  | 372                     |
| `yuhirai`                  | 372                     |
| `loberry`                  | 372                     |
| `tenftory`                 | 389                     |
