/**
 * The copy every series shares, in English: the site, its pages and its
 * controls, and the source of truth for the shared key set.
 *
 * It is named `enDictionary` rather than `en` for one blunt reason: Vitest
 * puts `it` in global scope, and a dictionary exported as `it` shadows it in
 * every test file that imports one. The pair is named symmetrically so the
 * trap is not reintroduced later.
 *
 * `SharedKey` is derived from this object, so adding a key here is what makes
 * the Italian dictionary fail to typecheck until it catches up. Keys are flat
 * and dotted rather than nested: a flat record gives an exact key union, where
 * a nested one would need a recursive path type for no gain.
 *
 * Placeholders are `{name}` and are filled by `t()`; `{series}` is the name of
 * the series the page belongs to. The wording follows the `tone-of-voice`
 * skill in `.claude/skills`.
 *
 * Each series' own words are in its folder (`./one-piece/en.ts`,
 * `./hunter-x-hunter/en.ts`): the keys every series words for itself
 * (`CommonKey`) and those of its own features. They stay on the server and
 * reach a page with the series' pages only, so no reader downloads another
 * series' copy.
 */
export const enDictionary = {
  'site.name': 'Zero Spoiler',
  'site.title': 'Zero Spoiler | The {series} wiki without spoilers',
  'hub.title': 'Zero Spoiler | Wikis without spoilers',
  'hub.description':
    'Spoiler-free wikis, one per series. Each series keeps its own bookmark, and every entry past it stays under fog.',
  'hub.headline': 'Wikis without spoilers',
  'hub.lede':
    'One wiki per series, each with its own bookmark. Entries past your bookmark stay under fog.',
  'hub.count': '{count} entries',
  'hub.countOpen': '{open} of {count} open',
  'hub.noBookmark': 'No bookmark yet',
  'hub.coming': 'Coming later',
  'hub.request': 'Request a new wiki',
  'hub.requestHint': 'Opens a form on GitHub',
  'hub.how': 'How it works',
  'hub.tour.title': 'How it works',
  'hub.tour.lede':
    'Scroll, and the screen follows the text. You can also move the bookmark by hand.',
  'hub.tour.bookmark.title': 'One bookmark per series',
  'hub.tour.bookmark.body':
    'You set the last episode you watched or the last chapter you read. Each entry opens when your bookmark reaches it.',
  'hub.tour.fog.title': 'The rest is under fog',
  'hub.tour.fog.body':
    'Of an entry under fog you see only where it opens. Past your bookmark, a series’ pages do not even contain its name, drawing or text.',
  'hub.tour.anyway.title': 'Show anyway',
  'hub.tour.anyway.body':
    'You can open a single entry by hand. The others stay under fog, and your bookmark does not move.',
  'hub.tour.grows.title': 'Each entry follows your bookmark',
  'hub.tour.grows.body':
    'Role, affiliation, bounty and drawing change when you reach the change. Until then you see the version you know.',
  'hub.tour.groups.title': 'Crews and houses',
  'hub.tour.groups.body':
    'Crews, houses and factions follow your bookmark too. When someone changes side, you see it once you reach that episode.',
  'hub.tour.bonds.title': 'Relationships and Nen',
  'hub.tour.bonds.body':
    'The relationships between characters change with your bookmark. Nen abilities you have not reached stay under fog.',
  'hub.tour.end': 'Pick your series',
  'hub.tour.screen': 'Preview of {series}',
  'hub.tour.past': '{count} more entries after episode {last}, all under fog',
  'hub.tour.anywayDone': 'Opened by hand',
  'hub.tour.nen': 'Nen abilities',
  'hub.tour.bondsOf': 'Relationships of {name}',
  'seo.imageAlt':
    'The Zero Spoiler card: the logo above a route that disappears into fog.',

  'nav.skip': 'Skip to content',
  'nav.characters': 'Characters',
  'nav.places': 'Places',
  'nav.label': 'Pages',
  'nav.hub': 'All series',

  'hero.headline': 'The {series} wiki without spoilers',
  'hero.setBookmark': 'Set your bookmark',
  'hero.changeBookmark': 'Change bookmark · {threshold}',

  'onboarding.dial': 'Point in the story',
  'onboarding.unitEpisode': 'Episode',
  'onboarding.unitChapter': 'Chapter',
  'onboarding.unitBook': 'Book {book}, chapter',
  'onboarding.here': 'I’m here',
  'onboarding.further': 'I’m further on',
  'onboarding.start': 'Starting now · EP 1',
  'onboarding.cast': 'Characters',
  'onboarding.tryHint':
    'Open an entry to see its page at this point. Your bookmark is not saved.',
  'onboarding.tail':
    '{count} more entries stay under fog until your bookmark reaches them.',

  'trial.episode': 'Trying episode {threshold}. Nothing is saved.',
  'trial.chapter': 'Trying chapter {threshold}. Nothing is saved.',
  'trial.book': 'Trying book {book}, chapter {chapter}. Nothing is saved.',
  'trial.save': 'Save this point',
  'trial.leave': 'Leave the trial',

  'visitor.record':
    'You are seeing {name} as first seen ({at}). The rest stays under fog.',
  'visitor.list':
    'Without a bookmark, only the start of the story is open. The rest stays under fog.',
  'visitor.listEmpty':
    'Without a bookmark, only the start of the story is open. Nothing on this page appears that early, so all of it stays under fog.',

  'status.set': 'Bookmark set: {point}.',
  'status.moved': 'Bookmark moved: {point}.',
  'status.cleared': 'Bookmark cleared.',
  'status.opened': '{count} more entries are open.',
  'status.openedOne': '1 more entry is open.',
  'status.fogged': '{count} entries went back under fog.',
  'status.foggedOne': '1 entry went back under fog.',
  'status.undo': 'Undo',

  'welcome.title': 'What you can do now',
  'welcome.lede':
    'Your bookmark is saved. Every page shows what you have reached and keeps the rest under fog.',
  'welcome.dismiss': 'Close',

  'home.point.episode': 'Episode {threshold}',
  'home.point.season': 'Season {season} · episode {episode}',
  'home.point.chapter': 'Chapter {threshold}',
  'home.point.book': 'Book {book}, chapter {chapter}',
  'home.recent': 'Just happened',
  'home.before': 'Just before',
  'home.noStories': 'No stories yet.',
  'home.storyAt.episode': 'Episode {threshold}',
  'home.storyAt.season': '{threshold}',
  'home.storyAt.chapter': 'About chapter {threshold}',
  'home.storyAt.book': 'About book {book}, chapter {chapter}',
  'home.more': 'More stories',
  'home.cast': 'Who matters now',

  'mark.unset': 'Set episode',
  'mark.unsetShort': 'EP ?',
  'mark.episode': 'EP {threshold}',
  'mark.season': '{threshold}',
  'mark.chapter': 'CH {threshold}',
  'mark.book': 'B{book} · CH {chapter}',
  'mark.change': 'Change bookmark ({threshold})',
  'mark.trial': 'Trying',
  'mark.trialHint': 'Trying {threshold}, not saved',

  'dialog.title': 'Where are you up to?',
  'dialog.lede': 'Everything after that point stays under fog.',
  'dialog.modeLabel': 'Count by',
  'dialog.modeEpisode': 'Episode',
  'dialog.modeSeason': 'Season',
  'dialog.modeChapter': 'Chapter',
  'dialog.modeBook': 'Book',
  'dialog.episodeLabel': 'Last episode you watched',
  'dialog.chapterLabel': 'Last chapter you read',
  'dialog.seasonLabel': 'Season',
  'dialog.seasonPlaceholder': 'Choose a season',
  'dialog.seasonOption': 'Season {season} · episodes {first}–{last}',
  'dialog.seasonOptionOpen': 'Season {season} · episode {first} onwards',
  'dialog.seasonEpisodeLabel': 'Episode in that season',
  'dialog.bookLabel': 'Book',
  'dialog.bookPlaceholder': 'Choose a book',
  'dialog.bookOption': 'Book {book} · {count} chapters',
  'dialog.bookChapterLabel': 'Chapter in that book',
  'dialog.hint': 'From 1 to {max}.',
  'dialog.errorEmpty': 'Enter a number.',
  'dialog.errorRange': 'Enter a number from 1 to {max}.',
  'dialog.errorSeason': 'Choose a season first.',
  'dialog.errorBook': 'Choose a book first.',
  'dialog.decrease': 'One less',
  'dialog.increase': 'One more',
  'dialog.save': 'Save',
  'dialog.forget': 'Clear bookmark',
  'dialog.cancel': 'Cancel',
  'dialog.loading': 'Loading…',
  'dialog.loadFailed': 'Loading failed. Check your connection and try again.',
  'dialog.retry': 'Try again',
  'sync.pageTitle': 'Sync bookmarks | Zero Spoiler',

  'veil.locked.episode': 'Under fog until episode {threshold}',
  'veil.locked.season': 'Under fog until {threshold}',
  'veil.locked.chapter': 'Under fog until chapter {threshold}',
  'veil.locked.book': 'Under fog until book {book}, chapter {chapter}',
  'veil.reveal': 'Show anyway',
  'veil.revealShort': 'Show',
  'veil.ask': 'Show it anyway?',
  'veil.confirm': 'Yes, show',
  'veil.revealing': 'Loading…',
  'veil.peekFailed': 'Could not load it. Try again.',
  'veil.entry': 'Entry under fog',

  'chart.opensAt.episode': 'Episode {threshold}',
  'chart.opensAt.season': '{threshold}',
  'chart.opensAt.chapter': 'Chapter {threshold}',
  'chart.opensAt.book': 'Book {book}, chapter {chapter}',
  'chart.hereSet.episode': 'You are here · episode {threshold}',
  'chart.hereSet.season': 'You are here · {threshold}',
  'chart.hereSet.chapter': 'You are here · chapter {threshold}',
  'chart.hereSet.book': 'You are here · book {book}, chapter {chapter}',
  'chart.hereUnset': 'No bookmark set · everything is under fog',
  'chart.title': 'Map of the places',
  'chart.fog': '{count} stops under fog',
  'chart.fogOne': '1 stop under fog',
  'chart.peekOpen': 'Open the entry',
  'chart.peekClose': 'Close',
  'chart.zoom': 'Zoom',
  'chart.zoomIn': 'Zoom in',
  'chart.zoomOut': 'Zoom out',
  'chart.seeAll': 'See all',
  'chart.seeSaga': 'Your saga',
  'chart.zoomHint': 'Ctrl or ⌘ with the wheel to zoom, drag to move.',

  'faq.bookmarkQ': 'Where is my bookmark stored?',
  'faq.peekQ': 'Can I see a hidden entry?',
  'faq.peekA':
    'Yes. On the other pages of the wiki, press “Show anyway” on it. The choice is not saved, and every other entry stays under fog.',

  'legal.title': 'Legal notice',
  'legal.pageTitle': 'Legal notice | Zero Spoiler',
  'legal.description':
    'The unofficial project notice, rights contact, privacy and cookies, sources and licenses.',

  'footer.lead': 'A {series} wiki that hides what comes after your bookmark.',
  'footer.colophon':
    'All the drawings are made for this site; no official artwork is used. Your bookmark is saved in a cookie on this device, and in a shared record if you connect other devices.',

  'footer.unofficial':
    'Unofficial fan project, not endorsed by the {series} rights holders.',
  'footer.sharedLead': 'Wikis that hide what comes after your bookmark.',
  'footer.sharedColophon':
    'All the drawings are made for this site; no official artwork is used. Your bookmarks are saved in cookies on this device, one for each series, and in a shared record if you connect other devices.',
  'footer.sharedUnofficial':
    'Unofficial fan project, not endorsed by the rights holders of the series.',
  'footer.openSource': 'Zero Spoiler is open source: if you find it useful,',
  'footer.star': 'star it on GitHub',

  'report.question': 'Something wrong on this page?',
  'report.link': 'Report it on GitHub',

  'characters.title': 'Characters',
  'characters.searchLabel': 'Search characters',
  'characters.searchClear': 'Clear search',
  'characters.searchOpen': 'Search',
  'characters.shown': 'Showing {count} of {total} open characters',
  'characters.noMatch': 'No open character matches “{query}”.',
  'characters.foggedTitle': '{count} under fog',
  'characters.foggedHint':
    'Their names are hidden, so search does not find them. Move your bookmark forward to see them.',
  'characters.foggedHintUnset':
    'Their names are hidden, so search does not find them. Set your bookmark to see them.',
  'characters.foggedTitleOne': '1 under fog',
  'characters.allOpen': 'Nothing is under fog. You can see every character.',
  'characters.pageTitle': 'Characters | {series} | Zero Spoiler',
  'characters.pageDescription':
    '{series} characters, each hidden until the episode where they first appear.',
  'characters.featuredTitle': 'Main characters',
  'characters.bookTitle': 'All characters',
  'characters.loading': 'Loading characters…',
  'characters.sectionOpensAt.episode': 'From episode {threshold}',
  'characters.sectionOpensAt.season': 'From {threshold}',
  'characters.sectionOpensAt.chapter': 'From chapter {threshold}',
  'characters.sectionOpensAt.book': 'From book {book}, chapter {chapter}',
  'characters.sectionCount': '{count} characters',
  'characters.sectionCountOne': '1 character',

  'character.opensAt.episode': 'First appears in episode {threshold}',
  'character.opensAt.season': 'First appears in {threshold}',
  'character.opensAt.chapter': 'First appears in chapter {threshold}',
  'character.opensAt.book': 'First appears in book {book}, chapter {chapter}',
  'character.foggedName': 'A character under fog',
  'character.foggedTitle': 'A character under fog | {series} | Zero Spoiler',
  'character.foggedDescription.episode':
    'A {series} character who first appears in episode {threshold}. Set your bookmark to read this page.',
  'character.foggedDescription.season':
    'A {series} character who first appears in {threshold}. Set your bookmark to read this page.',
  'character.foggedDescription.chapter':
    'A {series} character who first appears in chapter {threshold}. Set your bookmark to read this page.',
  'character.foggedDescription.book':
    'A {series} character who first appears in book {book}, chapter {chapter}. Set your bookmark to read this page.',
  'character.pageTitle': '{name} | {series} | Zero Spoiler',
  'character.back': 'All characters',
  'character.relationshipHistoryFor': 'Relationship history with {name}',
  'character.relationshipHistory': 'Relationship history',
  'character.relationshipAt.episode': 'Available from episode {threshold}',
  'character.relationshipAt.chapter': 'Available from chapter {threshold}',
  'character.relationshipAt.book':
    'Available from book {book}, chapter {chapter}',
  'character.relationshipAt.season': 'Available from {threshold}',
  'character.relationshipsTitle': 'Relationships',
  'character.relationshipsLede':
    'The important people connected to this character, up to your bookmark.',
  'character.status': 'Status',
  'character.epithet': 'Epithet',
  'character.affiliation': 'Affiliation',
  'character.origin': 'Origin',
  'character.factsLabel': 'Facts up to your bookmark',
  'character.chronicleTitle': 'Story so far',
  'character.chronicleMore': 'Show more',
  'character.chronicleMoreError':
    'Could not load the other stories. Try again.',

  'notFound.title': 'Page not found',
  'notFound.body': 'There is no page at this address.',
  'notFound.pageTitle': 'Page not found | Zero Spoiler',
  'error.title': 'Something went wrong',
  'error.body': 'This page could not be loaded.',

  'character.notFoundTitle': 'Character not found',
  'character.notFoundBody':
    'There is no character at this address. The characters page lists all of them.',

  'places.title': 'Places',
  'places.pageTitle': 'Places | {series} | Zero Spoiler',
  'places.stage': 'Stop {index} of {total}',
  'places.foggedName': 'A place under fog',
  'places.foggedDescription.episode':
    'A {series} place that first appears in episode {threshold}. Set your bookmark to read about it.',
  'places.foggedDescription.season':
    'A {series} place that first appears in {threshold}. Set your bookmark to read about it.',
  'places.foggedDescription.chapter':
    'A {series} place that first appears in chapter {threshold}. Set your bookmark to read about it.',
  'places.foggedDescription.book':
    'A {series} place that first appears in book {book}, chapter {chapter}. Set your bookmark to read about it.',
  'places.firstSeen.episode': 'First seen in episode {threshold}',
  'places.firstSeen.season': 'First seen in {threshold}',
  'places.firstSeen.chapter': 'First seen in chapter {threshold}',
  'places.firstSeen.book': 'First seen in book {book}, chapter {chapter}',
  'places.form': 'Type',
  'places.landmark': 'Landmark',
  'places.filedHere': 'Found here',
  'places.searchLabel': 'Search places',
  'places.searchPlaceholder': 'Name of a place',
  'places.searchClear': 'Clear search',
  'places.searchOpen': 'Search',
  'places.controls': 'Filters',
  'places.shown': 'Showing {count} of {total} open places',
  'places.noMatch': 'No open place matches “{query}”.',
  'places.noneShown': 'No open place matches these filters.',
  'places.showAll': 'Show all',
  'places.allForms': 'All types',
  'places.groupCount': '{count} places',
  'places.groupCountOne': '1 place',

  'place.pageTitle': '{name} | {series} | Zero Spoiler',
  'place.foggedTitle': 'A place under fog | {series} | Zero Spoiler',
  'place.back': 'All places',
  'place.mapTitle': 'On the map',
  'place.mapLede':
    'Where this place comes in the story, with the stops just before and after.',
  'place.nativesTitle': 'From here',
  'place.visitsTitle': 'Later visits',
  'place.drawingsTitle': 'How the drawing changes',
  'place.drawingsLede':
    'Every drawing of this place up to your bookmark, oldest first.',
  'place.notFoundTitle': 'Place not found',
  'place.notFoundBody':
    'There is no place at this address. The places page lists all of them.',

  'form.village': 'Village',
  'form.town': 'Town',
  'form.restaurant': 'Floating restaurant',
  'form.island': 'Island',
  'form.region': 'Region',
  'form.city': 'City',
  'form.archipelago': 'Archipelago',
  'form.sea': 'Stretch of sea',
  'form.ship': 'Ship',
  'form.prison': 'Prison',
  'form.fortress': 'Fortress',

  'status.alive': 'Alive',
  'status.deceased': 'Deceased',
  'status.presumed-dead': 'Presumed dead',
  'status.captured': 'Captured',
  'status.imprisoned': 'Imprisoned',
  'status.missing': 'Missing',
  'status.unknown': 'Fate unknown',

  'kind.character': 'Character',
  'kind.place': 'Place',

  'locale.label': 'Language',
  'locale.it': 'Italiano',
  'locale.en': 'English',
} as const
