/**
 * The line the page's one live region holds (`Announcer`), as a small
 * external store for `useSyncExternalStore`, like the intro's.
 */
const voice = { line: '' }
const hearers = new Set<() => void>()

/**
 * Says a line aloud through the page's one live region. The empty string
 * clears it, so the same line can be said again later.
 */
export function say(line: string): void {
  voice.line = line
  for (const hear of hearers) {
    hear()
  }
}

/** The line being said, or the empty string. */
export function saying(): string {
  return voice.line
}

/** Subscribes the live region to the line changing. */
export function hearSaid(hear: () => void): () => void {
  hearers.add(hear)

  return () => {
    hearers.delete(hear)
  }
}
