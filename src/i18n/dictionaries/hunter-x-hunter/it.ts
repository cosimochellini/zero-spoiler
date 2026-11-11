import type { SeriesWords } from '~/i18n/types'

/**
 * Hunter x Hunter's own copy, in Italian, typed against `./en.ts`. Names
 * follow the 2011 Italian dub, as Italian Wikipedia gives them.
 */
export const hunterXHunterIt: SeriesWords<'hunter-x-hunter'> = {
  // The categories as Italian Wikipedia names them, the names the chronicles
  // already use.
  'character.nen': 'Tipo di Nen',
  'nen.conjurer': 'Materializzazione',
  'nen.emitter': 'Emissione',
  'nen.enhancer': 'Potenziamento',
  'nen.manipulator': 'Manipolazione',
  'nen.specialist': 'Specializzazione',
  'nen.transmuter': 'Trasformazione',
  'nen.unknown': 'Non ancora noto',
  // Le abilità Nen (#923). Nessun nome di abilità: arrivano con i loro record.
  'nav.abilities': 'Abilità',
  'kind.ability': 'Abilità',
  'character.abilities': 'Abilità',
  'abilities.title': 'Abilità Nen',
  'abilities.count':
    '{count} abilità Nen, divise per tipo di Nen e nell’ordine in cui la storia le mostra. Quelle nella nebbia non compaiono nei risultati della ricerca.',
  'abilities.countOne':
    '1 abilità Nen, divisa per tipo di Nen. Quelle nella nebbia non compaiono nei risultati della ricerca.',
  'abilities.pageTitle': 'Abilità Nen | {series} | Zero Spoiler',
  'abilities.pageDescription':
    'Le abilità Nen di Hunter x Hunter, divise per tipo di Nen, ognuna nascosta fino all’episodio in cui viene mostrata per la prima volta.',
  'abilities.searchLabel': 'Cerca un’abilità',
  'abilities.searchClear': 'Cancella la ricerca',
  'abilities.searchPlaceholder': 'Abilità o personaggio',
  'abilities.searchOpen': 'Cerca',
  'abilities.controls': 'Filtri',
  'abilities.typeLegend': 'Tipo di Nen',
  'abilities.all': 'Tutte',
  'abilities.shown': 'Risultati: {count} su {total} abilità visibili',
  'abilities.noMatch': 'Nessuna abilità visibile corrisponde a “{query}”.',
  'abilities.noType': 'Tipo non rivelato',
  'abilities.noTypeLede':
    'Abilità che la storia mostra prima di dirne il tipo di Nen.',
  'abilities.bandCount': '{count} abilità',
  'abilities.bandCountOne': '1 abilità',
  'abilities.specimen': 'Abilità {index}',
  'abilities.foggedTitle': '{count} nella nebbia',
  'abilities.foggedTitleOne': '1 nella nebbia',
  'abilities.foggedHint':
    'I loro nomi e i tipi di Nen sono nascosti, quindi la ricerca non le trova. Sposta avanti il segnalibro per vederle.',
  'abilities.allOpen': 'Nessuna abilità è nella nebbia.',
  'abilities.moreUsers': 'e altri {count} personaggi che la usano',
  'abilities.moreUsersOne': 'e un altro personaggio che la usa',
  'ability.opensAt.episode':
    'Mostrata per la prima volta nell’episodio {threshold}',
  'ability.opensAt.season': 'Mostrata per la prima volta in {threshold}',
  'ability.opensAt.chapter':
    'Mostrata per la prima volta nel capitolo {threshold}',
  'ability.opensAt.book':
    'Mostrata per la prima volta nel libro {book}, capitolo {chapter}',
  'ability.foggedName': 'Un’abilità nella nebbia',
  'ability.foggedTitle': 'Un’abilità nella nebbia | {series} | Zero Spoiler',
  'ability.foggedDescription.episode':
    'Un’abilità Nen di Hunter x Hunter mostrata per la prima volta nell’episodio {threshold}. Imposta il segnalibro per leggere la pagina.',
  'ability.foggedDescription.season':
    'Un’abilità Nen di Hunter x Hunter mostrata per la prima volta in {threshold}. Imposta il segnalibro per leggere la pagina.',
  'ability.foggedDescription.chapter':
    'Un’abilità Nen di Hunter x Hunter mostrata per la prima volta nel capitolo {threshold}. Imposta il segnalibro per leggere la pagina.',
  'ability.foggedDescription.book':
    'Un’abilità Nen di Hunter x Hunter mostrata per la prima volta nel libro {book}, capitolo {chapter}. Imposta il segnalibro per leggere la pagina.',
  'ability.pageTitle': '{name} | {series} | Zero Spoiler',
  'ability.back': 'Tutte le abilità Nen',
  'ability.usersTitle': 'Chi la usa',
  'ability.usersLede':
    'I personaggi a cui sei arrivato che usano questa abilità.',
  'ability.usersNone': 'Nessun personaggio a cui sei arrivato la usa.',
  'ability.notFoundTitle': 'Abilità non trovata',
  'ability.notFoundBody':
    'A questo indirizzo non c’è nessuna abilità. Le trovi tutte nella pagina Abilità Nen.',
  'characters.bookLede':
    'Tutti i personaggi della wiki, divisi per la saga in cui compaiono per la prima volta.',
  'dialog.saga': 'Saga · {name}',
  'onboarding.arcs': 'Saghe',
  'characters.sectionFogged': 'Saga nella nebbia',
  'kind.arc': 'Saga',
  'places.allSagas': 'Tutte le saghe',
  'places.arc': 'Saga',
  'places.saga': 'Saga',
  'characters.count':
    '{count} personaggi, nell’ordine in cui compaiono nell’anime. Quelli nella nebbia non compaiono nei risultati della ricerca.',
  'characters.featuredLede': 'I personaggi chiave della storia.',
  'credits.coverage':
    'Nessuna voce di Hunter x Hunter ha ancora una verifica documentata delle fonti, quindi qui sotto non ne compare nessuna. I numeri di episodio e di capitolo sono confrontati con la Hunter x Hunter Wiki inglese, i nomi italiani con Wikipedia in italiano.',
  'credits.otherTerms':
    'I fatti e le citazioni presi da una fonte non autorizzano a copiarne testi, immagini o un’intera raccolta. I titoli ufficiali e il materiale di Hunter x Hunter non vengono offerti come contenuti di proprietà del progetto.',
  'credits.source.wiki-en':
    'Contributori della Hunter x Hunter Wiki inglese: revisione della fonte',
  'credits.source.wiki-it':
    'Contributori di Wikipedia in italiano: revisione della fonte',
  'credits.wikiEn': 'Hunter x Hunter Wiki inglese',
  'credits.wikiIt': 'Wikipedia in italiano',
  'credits.wikiTerms':
    'La Hunter x Hunter Wiki inglese dichiara CC BY-SA 3.0 Unported come licenza predefinita dei testi della comunità, Wikipedia in italiano CC BY-SA 4.0. Eccezioni, materiali importati e immagini possono avere condizioni diverse. Entrambe consentono di attribuire gli autori tramite collegamenti agli articoli a cui hanno contribuito.',
  'faq.animeA':
    'Tutti e due. Puoi contare per episodio dell’anime, per stagione ed episodio o per capitolo del manga. Ogni voce ha un numero di episodio e uno di capitolo. Quando il punto esatto è incerto si usa quello più avanti, così è più facile che una voce si apra tardi che presto.',
  'faq.animeQ': 'Anime o manga?',
  'faq.bookmarkA':
    'In un cookie su questo dispositivo. Il server lo legge prima di generare la pagina, quindi le voci dopo il segnalibro non sono nella pagina che ricevi. Senza segnalibro, questa pagina contiene l’Esame Hunter per il cursore e niente dopo. Non serve un account e non c’è nessun tracciamento.',
  'legal.credits':
    'Hunter x Hunter è un’opera di Yoshihiro Togashi. Crediti dell’anime del 2011: © POT (Yoshihiro Togashi) 1998-2011 © VAP・NTV・Madhouse/Shueisha per gli episodi 1–100 e © POT (Yoshihiro Togashi) 1998-2011 © VAP・NTV・Madhouse per gli episodi 101–148.',
  'onboarding.lede':
    'Sposta il cursore lungo l’Esame Hunter. Le voci fino a quel punto sono visibili, quelle dopo restano nella nebbia. Quando imposti il segnalibro, ogni pagina della wiki funziona così.',
  'onboarding.places': 'Luoghi',
  'onboarding.tailTitle': 'Dopo l’Esame Hunter',
  'places.count':
    '{count} luoghi, raggruppati per regione. Ognuno si apre all’episodio in cui compare per la prima volta.',
  'places.pageDescription':
    'I luoghi di Hunter x Hunter, raggruppati per regione, ognuno nascosto fino all’episodio in cui compare per la prima volta.',
  'site.description':
    'Una wiki di Hunter x Hunter che nasconde personaggi, saghe e luoghi oltre l’ultimo episodio visto o l’ultimo capitolo letto.',
}
