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

**Open points:**

- On the hub and the legal page the bar has one row and still pins at 6rem
  below 40rem (audit finding S3-06).
- The wordmark link is under the 44px the other controls keep.
