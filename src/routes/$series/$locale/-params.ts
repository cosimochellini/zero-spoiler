import { useLocation, useNavigate } from '@tanstack/react-router'

import type { AbilityParams } from '~/lib/search/abilityParams'
import type { FruitParams } from '~/lib/search/fruitParams'

/**
 * A listing's picks, read from the address by the page's own parser, and the
 * way to move them: the fruits page's and the abilities page's.
 *
 * Read from the location rather than `Route.useSearch()`: the location
 * changes in the same event as the navigation, the match a few ticks later,
 * and a search field bound to the later one drops the letters typed in
 * between. The test beside this file holds it to that.
 */
export function useAddressParams<P extends AbilityParams | FruitParams>(
  parse: (search: Record<string, unknown>) => P,
): [P, (next: P, replace: boolean) => void] {
  const params = parse(useLocation({ select: (at) => at.search }))
  const navigate = useNavigate()
  const onParams = (next: P, replace: boolean): void => {
    void navigate({ replace, resetScroll: false, search: next, to: '.' })
  }

  return [params, onParams]
}
