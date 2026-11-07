# Kakin chronicle, chapters 340–370 (#1155)

Written on 7 November 2026, part of #918. Covers chapters 340–370, the two first
Kakin record phases (#1134, #1135): 97 bilingual stories for all 45 characters
filed in that window and 20 returning characters. The series now has 788 stories
for 227 characters. Chapters 371 on are #1157 and #1159.

## Sources and method

The writer read the English Hunter x Hunter Wiki's chapter pages 340–370 through
the MediaWiki API (`action=parse&prop=wikitext`): each synopsis and its chapter
notes. Names come from the phase 1 and phase 2 inventories
([phase 1](hunter-x-hunter-kakin-phase-1.md),
[phase 2](hunter-x-hunter-kakin-phase-2.md)), whose Italian forms were read from
Italian Wikipedia. The per-story source and note are in
`scripts/chronicle-sources-hxh.mjs`; `npm run docs:chronicle` regenerates the
full report.

- [Chapter 340](https://hunterxhunter.fandom.com/wiki/Chapter_340) through
  [Chapter 370](https://hunterxhunter.fandom.com/wiki/Chapter_370).

Prose was written for each story in IT and EN, with no dialogue, quotations or
copied paragraphs. Licensed manga pages were not inspected. This is a fact-check
record, not a rights finding. AI assistance: Claude Opus 5.5, for writing,
assembly and tests. An independent verifier pass follows on the pull request.

## Rules applied

- Every story is the manga's alone (`source: 'chapter'`) at episode 148, which
  only orders it: an anime reader never sees it, in the chronicle or at home.
- Each story sits at the first chapter by whose end the reader knows all of it.
  Where a story gathers several chapters, the note lists each.
- A story names only characters filed by its chapter, each with a marker. People
  whose records open later (the fourteenth prince's mother, the Hunter guarding
  her, the servants and guards of chapters 358–369, Theta, Babimyna, Balsamilco)
  are described, not named. Names the wiki gives that have no record (Nasubi,
  Don Freecss, Muherr, Usamen) are left out too.
- Major beats only (owner, 2026-11-07). A returning character with only an
  appearance in the window gets no story: Gel, Kanzai, Saccho, Botobai, Pyon,
  Ginta, Cluck, Knov, Morel, Killua, Linne, Linssen. Knov, Morel and Gel are
  named in Tokarine's story.
- Kakin's stories all sit at episode 148, so a character's two stories in the
  window share an episode. The home ledger's React key and the data test that
  files every story once now key a story by its chapter too, and the source
  notes use `148:<chapter>` keys.

## Corrections during authoring

1. Tserriednich, chapter 343: Mizaistom's warning about the prince's darker side
   is chapter 344, so the sentence was cut.
2. Seiko, chapter 349: the twins are called twins only at chapter 359, so the
   story says "her children".
3. Izunavi, chapter 350: "Nen teacher" waits for the chapter-361 flashback.
4. Kacho and Fugetsu, chapter 359: the synopsis says both would be spared, the
   chapter notes only Fugetsu; the stories say the sister.
5. Hisoka, chapter 356: the synopsis and the notes disagree on which leg he
   loses, so the story names none.
6. Beyond, chapter 342 ("during the voyage"), Cheadle, chapter 341 (whose
   assignment), Chrollo and Hisoka, chapter 356 (how the bomb went off) and
   Marayam, chapter 367 (the beasts in his quarters, not the whole ship) were
   tightened to the synopsis on a second read.

## Coverage

All gates are chapters at episode 148.

| Character                   | Story chapters                         |
| --------------------------- | -------------------------------------- |
| `beyond-netero`             | 340, 341, 342, 345                     |
| `tserriednich-hui-guo-rou`  | 343, 345, 349, 362, 368                |
| `zigg-zoldyck`              | 344                                    |
| `mark`                      | 345                                    |
| `curly`                     | 346                                    |
| `golem`                     | 347                                    |
| `benjamin-hui-guo-rou`      | 349, 363                               |
| `unma-hui-guo-rou`          | 349                                    |
| `tang-zhao-li-hui-guo-rou`  | 349                                    |
| `katrono-hui-guo-rou`       | 349                                    |
| `seiko-hui-guo-rou`         | 349                                    |
| `woble-hui-guo-rou`         | 350, 360                               |
| `izunavi`                   | 350, 361                               |
| `tokarine`                  | 359                                    |
| `kacho-hui-guo-rou`         | 359                                    |
| `fugetsu-hui-guo-rou`       | 359                                    |
| `halkenburg-hui-guo-rou`    | 361, 366                               |
| `momoze-hui-guo-rou`        | 361, 368                               |
| `camilla-hui-guo-rou`       | 363, 366                               |
| `zhang-lei-hui-guo-rou`     | 363, 366                               |
| `vincent`                   | 363, 364                               |
| `tubeppa-hui-guo-rou`       | 365                                    |
| `tyson-hui-guo-rou`         | 366                                    |
| `luzurus-hui-guo-rou`       | 366                                    |
| `sale-sale-hui-guo-rou`     | 366                                    |
| `swinko-swinko-hui-guo-rou` | 366                                    |
| `duazul-hui-guo-rou`        | 366                                    |
| `marayam-hui-guo-rou`       | 367                                    |
| `slakka`                    | 367                                    |
| the sixteen class attendees | 370 each                               |
| `kurapika`                  | 343, 348, 350, 360, 361, 367, 369, 370 |
| `leorio-paradinight`        | 343                                    |
| `ging-freecss`              | 343, 344, 347                          |
| `pariston-hill`             | 345, 347                               |
| `cheadle-yorkshire`         | 341, 346                               |
| `mizaistom-nana`            | 343, 349                               |
| `saiyu`                     | 349                                    |
| `beans`                     | 341                                    |
| `netero`                    | 341                                    |
| `gon-freecss`               | 345                                    |
| `mito-freecss`              | 345                                    |
| `hisoka`                    | 351, 356, 357                          |
| `chrollo`                   | 352, 356, 357                          |
| `shalnark`                  | 357                                    |
| `kortopi`                   | 357                                    |
| `machi`                     | 357                                    |
| `biscuit-krueger`           | 350                                    |
| `basho`                     | 350                                    |
| `hanzo`                     | 350, 368                               |
| `melody`                    | 360                                    |

The sixteen attendees are `barrigen`, `belerainte`, `danjin`, `furykov`,
`illardia`, `ladiolus`, `loberry`, `longhi`, `maor`, `mushaho`, `myuhan`,
`satobi`, `shedule`, `tenftory`, `yuhirai` and `yuri`.
