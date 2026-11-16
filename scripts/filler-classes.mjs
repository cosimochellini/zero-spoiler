/**
 * The class of every episode row on the AnimeFillerList page. The page lags
 * the broadcast: the episodes aired past its last row count as canon, so the
 * Italian `tipo` alone decides them.
 * @param {string} html The page.
 * @param {number} [aired] The last episode aired.
 * @returns {Map<number, string>} Episode to class.
 */
export function classesOf(html, aired = 0) {
  const rows = html.split('<tr class="').slice(1)
  const classes = new Map(
    rows.map((row) => {
      const [classes = '', , eps = ''] = row.split('"', 3)

      return [Number(eps.slice(4)), classes.split(' ', 1)[0] ?? '']
    }),
  )
  for (
    let next = Math.max(0, ...classes.keys()) + 1;
    next <= aired;
    next += 1
  ) {
    classes.set(next, 'anime_canon')
  }

  return classes
}
