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

**Open points:** the page's measure is 76ch, over the 52 to 66ch rule
(`LegalNotice.styles.ts`).
