# Kakin chronicle, chapters 401–420 (#1159)

Written on 7 November 2026, part of #918 and its last chronicle piece. Covers
chapters 401–420, the fifth Kakin record phase (#1138) and the last published
chapter: 79 bilingual stories, at least one for each of the 22 characters filed
in that window and major new beats for 37 returning characters. The series now
has 989 stories for 289 characters.

## Sources and method

The writer read the English Hunter x Hunter Wiki's chapter pages 401–420 through
the MediaWiki API (`action=parse&prop=wikitext`): each synopsis and, where the
page has them, its notes. Character pages settled single details: Lynch
Fullbokko (her killing cited to chapter 405), Hisoka Morow (the casino of
chapter 420), Bonolenov Ndongo, Shikaku and Sumidori (the swap experiment of
chapters 382–386), Vict (the earlier experiment), Fukataki (deceased) and the
status fields of the phase 5 records. Names and gates come from the
[phase 5 inventory](hunter-x-hunter-kakin-phase-5.md). The per-story source and
note are in `scripts/chronicle-sources-hxh.mjs`; `npm run docs:chronicle`
regenerates the full report.

- [Chapter 401](https://hunterxhunter.fandom.com/wiki/Chapter_401) through
  [Chapter 420](https://hunterxhunter.fandom.com/wiki/Chapter_420).

Prose was written for each story in IT and EN, with no dialogue, quotations or
copied paragraphs. Licensed manga pages were not inspected. This is a fact-check
record, not a rights finding. AI assistance: Claude Opus 5.5, for writing,
assembly and tests. An independent verifier pass follows on the pull request;
its corrections are listed below.

## Rules applied

- Every story is the manga's alone (`source: 'chapter'`) at episode 148, which
  only orders it: an anime reader never sees it, in the chronicle or at home.
- Each story sits at the first chapter by whose end the reader knows all of it.
  Where a story gathers several chapters, the note lists each. Cliffhangers are
  not filed: Benjamin's shot at Tserriednich (416) and the stomping Salkov
  doubts (417) are told at 418, where the staged death is explained; Borksen's
  Yes (409) is told at 410, where the cheat and the forced answer are.
- A story names only characters filed by its chapter, each with a marker.
  Records that open later in the window are described before their gate: the
  soldier signing to Balsamilco (Vict, 404), Benjamin's soldier who sees
  Tubeppa's beast (Rihan, 413), the soldier hiding the first coin (Coventoba,
  417). Names the wiki gives that have no record are left out too: Salkov,
  Theta, Vantine, Babimyna, Butch, Steiner, Dogman, Orarge, Sarahell, Moswana,
  Ridge, Rice, Heisen, Nugui, Sevanti and the king.
- Major beats only (owner, 2026-11-07). A returning character with only an
  appearance in the window gets no story: Leorio, Gel, Kanzai, Saiyu, Marayam,
  Seiko, Duazul, Satobi, Maor, Gipper, Otocin, Taler, Yokotani, Voconte, Gelato,
  Bille, Sodom, Tevelares, Daemon, Quorolle, Vergei, Pyon, Gon, Killua,
  Shalnark, Kortopi and Feitan. Most are named in another character's story.
- The fake Hisoka of chapters 392–393 is Bonolenov, revealed at 405. The 390–393
  stories tell the scene from the witnesses' side and stay true. The real
  Hisoka's first appearance since chapter 357 is 405 (chapter notes); he gets
  stories at 405 and 420.
- A story that implies a status change carries it, manga-only: Oito is
  `captured` at 415 (detention, indictment deferred, not a sentence) and Danjin
  at 416 (taken for questioning, to be detained at the Justice Bureau). Two
  deaths the stories tell move to #1158, because a death status and its drawing
  stage are filed together and both records have real drawings since #1168:
  Lynch's `deceased` pin (406 → 405, where Bonolenov's thoughts and flashback
  tell her killing; her character page cites 405 and the body is found at 406)
  and Fukataki's `deceased` at 416 (shot by Benjamin). Not added: Tserriednich's
  staged death, Benjamin's, Camilla's, Tubeppa's and Tyson's infections (all
  alive at 420), Halkenburg bound in Balsamilco's body (already deceased at
  404), and the princes confined to their quarters under martial law.

## Stories per character

| Character                  | Chapters           |
| -------------------------- | ------------------ |
| `makaha`                   | 401                |
| `oito-hui-guo-rou`         | 401, 415           |
| `hashito`                  | 404                |
| `sakata`                   | 412                |
| `musse`                    | 413                |
| `balsamilco`               | 403, 417           |
| `worio-bay`                | 403                |
| `vict`                     | 404                |
| `shikaku`                  | 404                |
| `sumidori`                 | 404                |
| `cleapatro`                | 412                |
| `hinrigh`                  | 406                |
| `morena`                   | 405, 408           |
| `risnorth`                 | 405                |
| `onior`                    | 417                |
| `kako`                     | 411                |
| `bill`                     | 412, 414           |
| `shimanu`                  | 414                |
| `rihan`                    | 415                |
| `saquelle`                 | 415                |
| `kanjidol`                 | 415                |
| `coventoba`                | 417                |
| `longhi`                   | 401                |
| `tenftory`                 | 402                |
| `tubeppa-hui-guo-rou`      | 402, 417           |
| `melody`                   | 402                |
| `fugetsu-hui-guo-rou`      | 402                |
| `kaiser`                   | 402                |
| `luzurus-hui-guo-rou`      | 402, 417           |
| `basho`                    | 402                |
| `halkenburg-hui-guo-rou`   | 403, 404, 413      |
| `unma-hui-guo-rou`         | 403                |
| `benjamin-hui-guo-rou`     | 403, 410, 413, 417 |
| `kacho-hui-guo-rou`        | 403                |
| `zhang-lei-hui-guo-rou`    | 404, 410           |
| `kurapika`                 | 404, 412, 414      |
| `cheadle-yorkshire`        | 404                |
| `tserriednich-hui-guo-rou` | 404, 418, 419, 420 |
| `hisoka`                   | 405, 420           |
| `bonolenov`                | 405                |
| `lynch-fullbokko`          | 405                |
| `nobunaga`                 | 405                |
| `ken-i-wang`               | 405                |
| `zakuro-custard`           | 406                |
| `chrollo`                  | 406                |
| `phinks`                   | 406                |
| `tajao`                    | 406                |
| `momolly`                  | 407                |
| `borksen`                  | 407, 410           |
| `mizaistom-nana`           | 410                |
| `woble-hui-guo-rou`        | 412                |
| `slakka`                   | 412                |
| `beyond-netero`            | 412                |
| `furykov`                  | 413, 415           |
| `biscuit-krueger`          | 415                |
| `camilla-hui-guo-rou`      | 416                |
| `fukataki`                 | 416                |
| `danjin`                   | 416                |
| `tyson-hui-guo-rou`        | 417                |

## Independent verifier corrections

Pending.
