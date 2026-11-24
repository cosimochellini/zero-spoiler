import type { Locale } from '~/i18n/locales'
import { translate } from '~/i18n/translate'
import type { TranslationParams } from '~/i18n/types'

/**
 * The legal page's own copy: its project notice, its licenses and its
 * sources. Only that page prints it, so it is kept out of the shared
 * dictionaries every page downloads, like the privacy notice, and ships with
 * the page alone (#1574). The page's title (`legal.title`, in the footer of
 * every page) and its head (`legal.pageTitle`, `legal.description`, which
 * every page's code reads) stay shared. English is the source of the keys;
 * the Italian is typed against it.
 */
const legalEn = {
  'legal.projectTitle': 'An unofficial project',
  'legal.unofficial':
    'Zero Spoiler is an unofficial, nonprofit fan project. It is not affiliated with or endorsed by the rights holders of the series in the wiki.',
  'legal.contents': 'On this page',
  'legal.creditSource': 'Official credit source for {series}',
  'legal.contact': 'Rights inquiries and corrections on GitHub',
  'legal.contactHelp':
    'Include the page URL, the material concerned and the rights inquiry or correction requested. Keep spoilers out of the title. GitHub issues are public and require an account. Do not post confidential information.',

  'credits.title': 'Sources and licenses',
  'credits.intro':
    'Sources used for documented checks and the licenses that apply to the project and its sources.',
  'credits.licensesTitle': 'Project licenses',
  'credits.software':
    'The MIT license covers the software and original technical documentation, within the rights held by contributors. Existing notices remain valid.',
  'credits.scopeNotice': 'License scope and content notices',
  'credits.content':
    'Archive text, drawings and branding are outside the general MIT grant. No new blanket content license is assigned. Third-party rights and existing permissions remain in force.',
  'credits.sourcesTitle': 'Source terms',
  'credits.external':
    'External pages may contain later story information, including in their titles. Opening a source leaves this wiki’s spoiler protection.',
  'credits.fandomTerms': 'Fandom licensing and attribution',
  'credits.fandomTermsIt': 'Fandom licensing in Italian',
  'credits.wikipediaTerms': 'Wikipedia terms of use',
  'credits.referencesTitle': 'Documented references',
  'credits.bookmark':
    'Only references to material open at your bookmark are listed. The license beside a source refers to its text, not to the whole archive.',
  'credits.empty':
    'No entry references are open at your bookmark. You can still read the general source and license notices above.',
  'credits.episode': 'Episode {episode}',
  'credits.scope.dossier': 'Character fields in the reviewed sample',
  'credits.scope.chronicle': 'Story entry in the reviewed sample',
  'credits.scope.title': 'Release title only',
  'credits.scope.summary': 'Replacement summary',
  'credits.factCheck':
    'Reference for the documented comparison or fact check. The historical writing process is not established; no claim of independent authorship or new content license is made.',
  'credits.replacement':
    'Both summaries were replaced with brief accounts of facts checked against the official synopsis. The synopsis was not translated in full. No new content license is assigned.',
  'credits.noOpenLicense': 'No open-content permission established.',
} as const

/** A key of the legal page's own copy. */
export type LegalKey = keyof typeof legalEn

const legalIt: Record<LegalKey, string> = {
  'legal.projectTitle': 'Un progetto non ufficiale',
  'legal.unofficial':
    'Zero Spoiler è un progetto amatoriale non ufficiale e senza scopo di lucro. Non è affiliato né approvato dai titolari dei diritti delle serie presenti nella wiki.',
  'legal.contents': 'In questa pagina',
  'legal.creditSource': 'Fonte ufficiale dei crediti: {series}',
  'legal.contact': 'Richieste sui diritti e correzioni su GitHub',
  'legal.contactHelp':
    'Indica l’URL della pagina, il materiale interessato e la richiesta sui diritti o la correzione. Evita spoiler nel titolo. Le issue GitHub sono pubbliche e richiedono un account. Non inserire informazioni riservate.',

  'credits.title': 'Fonti e licenze',
  'credits.intro':
    'Le fonti delle verifiche documentate e le licenze applicabili al progetto e alle fonti.',
  'credits.licensesTitle': 'Licenze del progetto',
  'credits.software':
    'La licenza MIT copre il software e la documentazione tecnica originale, nei limiti dei diritti detenuti dai contributori. Gli avvisi esistenti restano validi.',
  'credits.scopeNotice': 'Ambito della licenza e avvisi sui contenuti',
  'credits.content':
    'Testi delle voci, disegni e identità visiva sono esclusi dalla concessione MIT generale. Non viene assegnata una nuova licenza generale ai contenuti. Restano validi i diritti di terzi e le autorizzazioni esistenti.',
  'credits.sourcesTitle': 'Condizioni delle fonti',
  'credits.external':
    'Le pagine esterne possono anticipare fatti successivi, anche nei titoli. Aprendo una fonte esci dalla protezione dagli spoiler di questa wiki.',
  'credits.fandomTerms': 'Licenze e attribuzioni Fandom',
  'credits.fandomTermsIt': 'Licenze Fandom in italiano',
  'credits.wikipediaTerms': 'Condizioni d’uso di Wikipedia',
  'credits.referencesTitle': 'Riferimenti documentati',
  'credits.bookmark':
    'Sono elencati solo i riferimenti a materiali visibili al tuo segnalibro. La licenza accanto a una fonte riguarda il suo testo, non l’intero archivio.',
  'credits.empty':
    'Al tuo segnalibro non sono ancora visibili riferimenti alle singole voci. Puoi leggere gli avvisi generali sulle fonti e sulle licenze qui sopra.',
  'credits.episode': 'Episodio {episode}',
  'credits.scope.dossier': 'Campi della scheda nel campione verificato',
  'credits.scope.chronicle': 'Voce della storia nel campione verificato',
  'credits.scope.title': 'Solo il titolo dell’opera',
  'credits.scope.summary': 'Riassunto sostitutivo',
  'credits.factCheck':
    'Riferimento per il confronto o la verifica dei fatti documentati. Il processo di scrittura storico non è accertato: non si dichiarano testi indipendenti né nuove licenze sui contenuti.',
  'credits.replacement':
    'Entrambi i riassunti sono stati sostituiti con brevi testi basati su fatti verificati nella sinossi ufficiale. La sinossi non è stata tradotta per intero. Non viene assegnata una nuova licenza ai contenuti.',
  'credits.noOpenLicense': 'Nessuna autorizzazione aperta accertata.',
}

export const LEGAL: Record<Locale, Record<LegalKey, string>> = {
  en: legalEn,
  it: legalIt,
}

/** Translate for the legal copy, in one locale. */
export function legalTranslator(
  locale: Locale,
): (key: LegalKey, params?: TranslationParams) => string {
  return (key, params) => translate(LEGAL[locale], key, params)
}
