import type { Locale } from '~/i18n/locales'
import { translate } from '~/i18n/translate'
import type { TranslationParams } from '~/i18n/types'

/**
 * The words of bookmark sync (#1560): "More devices?" in the bookmark dialog
 * and the `/sync` page. Kept out of the shared dictionaries every page
 * downloads, like the privacy notice: they ship only in the chunks of the
 * dialog's form and of the page, which a reader fetches when they open one.
 * The page's title stays shared, because the route's head is in every page's
 * code. English is the source of the keys; the Italian is typed against it.
 */
const syncEn = {
  'dialog.devices': 'More devices?',
  'dialog.devicesTitle': 'More devices',
  'dialog.devicesBack': 'Back',
  'dialog.devicesHelp':
    'Scan this code with another device, or open the link there. Both then keep the same bookmarks.',
  'dialog.devicesWarning':
    'Anyone with this link can see and change your bookmarks.',
  'dialog.devicesCode': 'QR code of the link',
  'dialog.devicesCopy': 'Copy link',
  'dialog.devicesCopied': 'Link copied.',
  'dialog.devicesCopyFailed': 'Copying failed. Try again.',
  'dialog.devicesDisconnect': 'Disconnect this device',

  'sync.title': 'Same bookmarks on this device',
  'sync.lede':
    'This device and the one the link comes from will keep the same bookmarks, this device’s own included. A bookmark you move on one is usually on the other at its next page load.',
  'sync.change': 'Your {series} bookmark becomes {point}.',
  'sync.add': 'Your {series} bookmark is set to {point}.',
  'sync.connect': 'Connect this device',
  'sync.incomplete':
    'This link is incomplete. Copy it again on the other device, from “More devices?” in the bookmark dialog.',
  'sync.unknown':
    'This link does not work any more. Open “More devices?” in the bookmark dialog on the other device and copy it again.',
  'sync.already': 'This device already has these bookmarks.',
  'sync.toHub': 'All series',
} as const

/** A key of the sync copy. */
export type SyncKey = keyof typeof syncEn

const syncIt: Record<SyncKey, string> = {
  'dialog.devices': 'Altri dispositivi?',
  'dialog.devicesTitle': 'Altri dispositivi',
  'dialog.devicesBack': 'Indietro',
  'dialog.devicesHelp':
    'Inquadra questo codice con un altro dispositivo, o apri lì il link. Da quel momento hanno gli stessi segnalibri.',
  'dialog.devicesWarning':
    'Chi ha questo link può vedere e cambiare i tuoi segnalibri.',
  'dialog.devicesCode': 'Codice QR del link',
  'dialog.devicesCopy': 'Copia link',
  'dialog.devicesCopied': 'Link copiato.',
  'dialog.devicesCopyFailed': 'Copia non riuscita. Riprova.',
  'dialog.devicesDisconnect': 'Scollega questo dispositivo',

  'sync.title': 'Gli stessi segnalibri su questo dispositivo',
  'sync.lede':
    'Questo dispositivo e quello da cui arriva il link avranno gli stessi segnalibri, compresi quelli di questo dispositivo. Un segnalibro che sposti su uno di solito si ritrova sull’altro al caricamento successivo di una pagina.',
  'sync.change': '{series}: il segnalibro diventa {point}.',
  'sync.add': '{series}: il segnalibro viene impostato su {point}.',
  'sync.connect': 'Collega questo dispositivo',
  'sync.incomplete':
    'Questo link è incompleto. Copialo di nuovo sull’altro dispositivo, da “Altri dispositivi?” nella finestra del segnalibro.',
  'sync.unknown':
    'Questo link non funziona più. Apri “Altri dispositivi?” nella finestra del segnalibro sull’altro dispositivo e copialo di nuovo.',
  'sync.already': 'Questo dispositivo ha già questi segnalibri.',
  'sync.toHub': 'Tutte le serie',
}

export const SYNC_COPY: Record<Locale, Record<SyncKey, string>> = {
  en: syncEn,
  it: syncIt,
}

/** Translate for the sync copy, in one locale. */
export function syncTranslator(
  locale: Locale,
): (key: SyncKey, params?: TranslationParams) => string {
  return (key, params) => translate(SYNC_COPY[locale], key, params)
}
