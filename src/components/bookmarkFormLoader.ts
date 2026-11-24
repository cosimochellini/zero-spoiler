import { lazy } from 'react'

import { chunkOf } from '~/components/chunkOf'

/*
 * The bookmark form's code, fetched apart from the page: every page carries
 * the mark, few readers open the dialog.
 */

const form = chunkOf(async () => import('~/components/BookmarkForm'))

/** Whether the form's code is already here, so the dialog can skip the skeleton. */
export const formHasLanded = form.hasLanded

/**
 * Fetches the form's code, and says whether it is here. The mark calls it as
 * soon as it is pointed at or focused, so the form is often in before the
 * press.
 */
export const preloadBookmarkForm = form.preload

// Rendered only once the form's code has landed, so the lazy loader never
// sees a failed fetch: React would cache that rejection and throw it into
// the page.
export const LazyBookmarkForm = lazy(async () => {
  const module = await form.get()
  return { default: module.BookmarkForm }
})
