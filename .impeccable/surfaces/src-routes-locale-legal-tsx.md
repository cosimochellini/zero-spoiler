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

**Where:** `/<locale>/legal`. `/<locale>/privacy` redirects to its privacy
section. The page belongs to no series, so it is in Blackout.

**Holds today:**

- Legal notices live on this page (owner decision). The footer carries one
  line of notice and one link to it, and no other page repeats them.
- The privacy notice does not depend on the reader's bookmark. The source credits do:
  they list only references open at the bookmark.
- Links here keep their underline; `src/styles/themes.test.tsx` fails when an
  accent link loses it.
