import { vi } from 'vitest'

import type { BookmarkFormProps } from '~/components/BookmarkForm'

/** What the dialog gives the form, for a test that renders it without one. */
export function formProps(onDone: () => void): BookmarkFormProps {
  return {
    devices: false,
    ledeId: 'lede',
    onDevices: vi.fn<(open: boolean) => void>(),
    onDone,
    titleId: 'title',
  }
}
