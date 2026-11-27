/** Reading the router's matches for a 404. */

/** What a router match says about being found. */
interface MatchState {
  _notFound?: boolean
  status: string
}

/**
 * Whether the address answers 404: no route matches it past one of these
 * (`_notFound`, the router's mark on the route that renders the not-found
 * page), or a route's guard or loader threw the signal.
 * @param matches The routes the address matched.
 */
export function isMissing(matches: Iterable<MatchState>): boolean {
  return [...matches].some(
    (match) => match.status === 'notFound' || match._notFound === true,
  )
}
