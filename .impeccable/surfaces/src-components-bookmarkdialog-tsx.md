---
version: 1
slug: "src-components-bookmarkdialog-tsx"
primary_target: "src/components/BookmarkDialog.tsx"
related_targets: ["src/components/BookmarkForm.tsx","src/components/BookmarkCounter.tsx","src/components/OnboardingLanding.tsx","src/components/OnboardingDial.tsx","src/components/OnboardingWake.tsx","src/components/TrialStrip.tsx","src/components/EpisodeMark.tsx","src/components/ControlBar.tsx"]
---

# Bookmark and progress

**Mode:** Operate. **Owner priority:** 1 of 3.

**For:** the reader says how far they have got, and sees what that changes.

**Where:** the mark in the site bar of a series page and the dialog it opens;
the dial and its preview on a series' landing page with no bookmark; the
visitor banner on any other series page opened with no bookmark
(`VisitorBanner.tsx`, #1432); the strip under the bar during a trial. `ControlBar` is a listing's pinned controls.

**Must not break:**

- An edit reaches the cookie only on Save; the line that forgets the bookmark
  writes at once (`BookmarkForm.tsx`).
- The dialog stays a native `<dialog>` opened with `showModal()`: the browser
  supplies Escape, the inert page and the return of focus
  (`BookmarkDialog.tsx`).
- The arc named under the number is public by design (`PRODUCT.md`).

**Open points:**

- The dialog's number shows focus on its underline and has no outline
  (`BookmarkCounter.styles.ts`). This pass judges whether that is visible
  enough.
- What the reader is shown right after moving the bookmark: the line under
  the bar (`BookmarkStatus.tsx`, #1375) says where the bookmark is and, on a
  listing, how many entries opened or went back under fog. It counts open
  entries only. `docs/homepage.md` leaves a summary of what opened out of
  scope.
