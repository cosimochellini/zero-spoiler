import type { PlaceDossier } from '~/data/types'

import type { HunterEntity, HunterVocabulary } from './saga'

export const NGL_RECORD: HunterEntity = {
  id: 'ngl',
  kind: 'place',
  revealedAtEpisode: 79,
  revealedAtChapter: 189,
  name: { it: 'NGL', en: 'NGL' },
  summary: {
    it: 'Nel paese di Neo-Green Life non si entra con macchine o dispositivi elettronici.',
    en: 'No machines or electronic devices may cross into Neo-Green Life.',
  },
  visual: { art: 'ngl', tint: 'green' },
}

export const CHIMERA_ANT_PLACES: Record<
  string,
  PlaceDossier<HunterVocabulary>
> = {
  ngl: {
    form: 'country',
    region: 'islands',
    arc: 'chimera-ant-arc',
    landmark: {
      it: 'I due alberi cavi al confine',
      en: 'The two hollow trees at the border',
    },
    log: {
      it: 'I funzionari controllano chi entra al confine. Oltre il posto di controllo, la squadra prosegue a cavallo.',
      en: 'Officials screen visitors at the border. Beyond the checkpoint, the party continues on horseback.',
    },
    filedHere: [],
  },
}
