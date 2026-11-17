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

**Holds today:**

- The bar is pinned at every width and sets the height everything else pins
  under: two rows on a phone, one from 40rem, or from 56rem on a series page.
- The wordmark leads to the hub; on a series page the series' name follows it.
- The language switch is a native `<select>` under a drawn face. It navigates
  to the same page in the other language.
- `Button` is the shared button and `SearchField` the listings' search field.
  Both are
  at least 44px tall, with the focus ring reserved at rest.
- The footer is one block of body-size type in Muted: what the site is, one line of notice
  with one link to the legal page, and the repository link.
