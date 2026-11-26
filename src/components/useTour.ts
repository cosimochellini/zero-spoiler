import { useEffect, useState } from 'react'

import type { Locale } from '~/i18n/locales'
import type { TourView } from '~/lib/view/tour'

/** The tour's records of one series, as the hub's route asks the server. */
export type LoadTour = (series: string, locale: Locale) => Promise<TourView>

/** One request per series and locale, kept for the page's life. */
const tours = new Map<string, Promise<TourView>>()

/** One series' tour, once it has come; a failed request is asked again later. */
export function useTour(
  load: LoadTour,
  series: string,
  locale: Locale,
): TourView | undefined {
  const key = `${series}:${locale}`
  const [loaded, setLoaded] = useState<Partial<Record<string, TourView>>>({})

  useEffect(() => {
    let live = true
    async function fetchTour(): Promise<void> {
      const pending = tours.get(key) ?? load(series, locale)
      tours.set(key, pending)
      let view: TourView
      try {
        view = await pending
      } catch {
        tours.delete(key)
        return
      }
      if (live) {
        setLoaded((before) => ({ ...before, [key]: view }))
      }
    }
    void fetchTour()
    return () => {
      live = false
    }
  }, [key, load, locale, series])

  return loaded[key]
}
