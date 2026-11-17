---
version: 1
slug: "src-components-bookmarkdialog-tsx"
primary_target: "src/components/BookmarkDialog.tsx"
related_targets: ["src/components/BookmarkForm.tsx","src/components/BookmarkCounter.tsx","src/components/IntroDialog.tsx","src/components/OnboardingLanding.tsx","src/components/OnboardingDial.tsx","src/components/OnboardingWake.tsx","src/components/TrialStrip.tsx","src/components/EpisodeMark.tsx","src/components/ControlBar.tsx"]
---

# Bookmark and progress

**Mode:** Operate. **Owner priority:** 1 of 3.

**For:** the reader says how far they have got, and sees what that changes.

**Where:** the mark in the site bar of every series page and the dialog it
opens; the dial and its preview on a series' landing page with no bookmark; the
intro on a series page opened with no bookmark, once per session; the strip
under the bar during a trial. `ControlBar` is a listing's pinned controls, which
fold to one row on a phone.

**Holds today:**

- Nothing is saved until Save. Save is filled with the accent, as the landing
  page's primary buttons are, and is disabled until the draft is a real
  bookmark. The line that clears the bookmark is absent, not disabled, when
  there is none.
- The dialog is a native `<dialog>`, a bottom sheet below 40rem. Its number is
  its largest element, in mono between two round steppers.
- The dial covers the series' demo span only; the server sends nothing past it.
- Saving a bookmark writes the cookie and re-reads the pages.

**Unresolved:**

- The dialog's number shows focus on its underline, which takes Focus and is
  doubled by a `box-shadow`; it has no outline (`BookmarkCounter.styles.ts`).
  This pass judges whether that is visible enough.
- What the reader is shown right after moving the bookmark.
  `docs/homepage.md` leaves a summary of what opened out of scope.
