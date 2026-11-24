---
version: 1
slug: "src-components-sitebar-tsx"
primary_target: "src/components/SiteBar.tsx"
related_targets: ["src/components/SiteFooter.tsx","src/components/LocaleSwitch.tsx","src/components/SearchField.tsx","src/components/ChoiceGroup.tsx","src/components/ui/Button.tsx","src/routes/-LocaleShell.tsx"]
---

# Site chrome

**Mode:** Operate.

**For:** moving between a series' pages, reaching the bookmark from anywhere,
and changing language.

**Where:** every page. `SiteBar`, `SiteFooter`, `LocaleSwitch`, `SearchField`,
`ChoiceGroup`, `ui/Button` and the shell that holds them (`-LocaleShell`).

**Must not break:**

- The bar's height is the `pin.bar` token, and what pins under it reads the
  same token (`src/styles/sticky.ts`, `src/styles/tokens.stylex.ts`).
- The language switch goes to the same page in the other language
  (`LocaleSwitch.tsx`).
- The skip link stays focusable and above every other layer
  (`-LocaleShell.tsx`).
- The footer carries one line of notice and one link to the legal page (owner;
  `SiteFooter.tsx`).
- On a phone the series' name keeps its width and the pages scroll sideways
  beside it; the bar's glass runs to both edges of the window.
- Where large text leaves no room for the wordmark beside the bookmark and the
  language, it takes a row of its own above them (owner, #1558); at the
  default text size the bar is as it was.
