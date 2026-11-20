---
version: 1
slug: "src-routes-locale-legal-tsx"
primary_target: "src/routes/$locale/legal.tsx"
related_targets: ["src/routes/$locale/privacy.tsx","src/components/LegalPage.tsx","src/components/PrivacyNotice.tsx"]
---

# Legal and privacy

**Mode:** Read.

**For:** every notice in one place: the unofficial project notice, the rights
contact, privacy and cookies, sources and licenses.

**Where:** `/<locale>/legal` (`LegalPage`, `PrivacyNotice`).
`/<locale>/privacy` redirects to its privacy section.

**Must not break:**

- Legal notices live on this page; the footer carries one line of notice and
  one link to the legal page (owner decision; `LegalPage.tsx`,
  `SiteFooter.tsx`).
- An accent link keeps its underline (`src/styles/themes.test.tsx`).
- Every section and part has an id the list under the title links to
  (`SECTIONS` in `LegalPage.tsx`); `/<locale>/privacy` lands on `#privacy`.

**Measure:** paragraphs and list items are capped at 48ch, about 67 characters a
line (`LegalNotice.styles.ts`). The list under the title uses the full column.
