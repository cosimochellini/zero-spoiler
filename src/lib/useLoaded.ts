import { useEffect, useState } from 'react'

/**
 * What `ask` answers, `null` until it has. It asks as the component mounts
 * and again whenever `ask` changes, so a caller keeps it steady with
 * `useCallback`. An answer that comes after the next asking has begun, or
 * after the component has gone, is dropped.
 */
export function useLoaded<T>(ask: () => Promise<T>): null | T {
  const [answer, setAnswer] = useState<null | T>(null)

  useEffect(() => {
    let live = true
    const settle = async (): Promise<void> => {
      const next = await ask()
      if (live) {
        setAnswer(next)
      }
    }
    void settle()

    return () => {
      live = false
    }
  }, [ask])

  return answer
}
