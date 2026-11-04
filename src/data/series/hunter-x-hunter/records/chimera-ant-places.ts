import type { PlaceDossier } from '~/data/types'

import type { HunterEntity, HunterVocabulary } from './saga'

const NGL_RECORD: HunterEntity = {
  id: 'ngl',
  kind: 'place',
  revealedAtEpisode: 79,
  revealedAtChapter: 189,
  // Banana and Spinner name it in episode 78, as the team works out where
  // the ant came ashore.
  nameSaidAt: 78,
  name: { it: 'NGL', en: 'NGL' },
  summary: {
    it: 'Nel paese di Neo-Green Life non si entra con macchine o dispositivi elettronici.',
    en: 'No machines or electronic devices may cross into Neo-Green Life.',
  },
  visual: { art: 'ngl', tint: 'green' },
}

/**
 * The Chimera Ant arc's places, NGL first. All lie in the Mitene Union, on
 * the Balsa Islands. Rokario, its two cities and the hotel are named in the
 * manga alone: the episodes of the same scenes (93 and 94) show them but
 * never say their names, so those numbers only order them.
 */
export const CHIMERA_ANT_PLACE_RECORDS: HunterEntity[] = [
  NGL_RECORD,
  // Named in chapter 102 / episode 24 but first visited in chapter 224 /
  // episode 96, when the Phantom Troupe returns to it.
  {
    id: 'meteor-city',
    kind: 'place',
    revealedAtEpisode: 96,
    revealedAtChapter: 224,
    name: { it: 'Meteor City', en: 'Meteor City' },
    summary: {
      it: 'Una città che non compare nei registri ufficiali.',
      en: 'A city outside official records.',
    },
    visual: { art: 'meteor-city', tint: 'ocher' },
  },
  {
    id: 'peijin',
    kind: 'place',
    // Gon names the capital in episode 116, which adapts a later chapter.
    revealedAtEpisode: 116,
    revealedAtChapter: 243,
    unanchored: true,
    name: { it: 'Peijin', en: 'Peijin' },
    summary: {
      it: 'La capitale del Golt Orientale.',
      en: 'The capital of East Gorteau.',
    },
    visual: { art: 'peijin', tint: 'ocher' },
  },
  {
    id: 'mandai-city',
    kind: 'place',
    revealedAtEpisode: 102,
    revealedAtChapter: 243,
    name: { it: 'Mandai City', en: 'Mandai City' },
    summary: {
      it: 'Una città scelta come punto di ritrovo.',
      en: 'A city chosen as a rendezvous.',
    },
    visual: { art: 'mandai-city', tint: 'ocher' },
  },
  {
    id: 'luonton-city',
    kind: 'place',
    revealedAtEpisode: 100,
    revealedAtChapter: 235,
    name: { it: 'Luonton', en: 'Luonton City' },
    summary: {
      it: 'Una città del Golt Orientale dove Killua cerca di avvertire gli abitanti.',
      en: 'A city in East Gorteau where Killua tries to warn the residents.',
    },
    visual: { art: 'luonton-city', tint: 'ocher' },
  },
  // The caption of chapter 188 and the narrator of episode 78 tell how the
  // worker ants build it; the cave of chapter 187 / episode 77 is not yet it.
  {
    id: 'chimera-ant-nest',
    kind: 'place',
    revealedAtEpisode: 78,
    revealedAtChapter: 188,
    name: { it: 'Nido delle formichimere', en: 'Chimera Ant Nest' },
    summary: {
      it: 'Il nido che le formiche operaie costruiscono per la loro regina, che ci resta fino alla morte.',
      en: 'The nest the worker ants build for their Queen, who stays in it until her death.',
    },
    visual: { art: 'chimera-ant-nest', tint: 'ocher' },
  },
  // Kite works out what the caves hold in chapter 192; Killua calls it a
  // drug factory in episode 82, the episode that reaches it.
  {
    id: 'd2-manufacturing-plant',
    kind: 'place',
    revealedAtEpisode: 82,
    revealedAtChapter: 192,
    name: { it: 'Fabbrica di D²', en: 'D² Manufacturing Plant' },
    summary: {
      it: 'Una fabbrica di droga ricavata nelle grotte di una parete di roccia, in NGL.',
      en: 'A drug factory in the caves of a rock face in NGL.',
    },
    visual: { art: 'd2-manufacturing-plant', tint: 'violet' },
  },
  // Killua checks the country's map during the news in chapter 218. Episode
  // 79 says the name in narration only.
  {
    id: 'republic-of-rokario',
    kind: 'place',
    source: 'chapter',
    revealedAtEpisode: 93,
    revealedAtChapter: 218,
    name: { it: 'Repubblica di Rokario', en: 'Republic of Rokario' },
    summary: {
      it: 'Il paese di Doli City e Pata City, dove si trovano Gon e Killua.',
      en: 'The country of Doli City and Pata City, where Gon and Killua are staying.',
    },
    visual: { art: 'republic-of-rokario', tint: 'azure' },
  },
  // Gon and Killua stay here from chapter 199 / episode 85, where it is only
  // the city nearest to NGL; the map of chapter 218 names it. The wiki's
  // page is Doli City, though the manga's translation prints "Doli".
  {
    id: 'doli-city',
    kind: 'place',
    source: 'chapter',
    revealedAtEpisode: 93,
    revealedAtChapter: 218,
    name: { it: 'Doli City', en: 'Doli City' },
    summary: {
      it: 'La città più vicina a NGL, dove Gon e Killua vivono e si allenano.',
      en: 'The city nearest to NGL, where Gon and Killua live and train.',
    },
    visual: { art: 'doli-city', tint: 'teal' },
  },
  // Cheetu reaches an unnamed town in chapter 217; the news report of
  // chapter 218 names it. Episode 93 names it in narration only.
  {
    id: 'pata-city',
    kind: 'place',
    source: 'chapter',
    revealedAtEpisode: 93,
    revealedAtChapter: 218,
    name: { it: 'Pata City', en: 'Pata City' },
    summary: {
      it: 'Una piccola città vicina a NGL, dove Jeedo attacca gli abitanti e la polizia.',
      en: 'A small city near NGL, where Cheetu attacks the people and the police.',
    },
    visual: { art: 'pata-city', tint: 'blue' },
  },
  // Named beside NGL in chapter 188 and episode 78; the King reaches it in
  // chapter 216 and episode 92.
  {
    id: 'republic-of-east-gorteau',
    kind: 'place',
    revealedAtEpisode: 92,
    revealedAtChapter: 216,
    name: {
      it: 'Repubblica del Golt Orientale',
      en: 'Republic of East Gorteau',
    },
    summary: {
      it: 'Un paese della Federazione di Mitene, che il re e le sue guardie reali raggiungono dopo aver lasciato il nido.',
      en: 'A country of the Mitene Union, which the King and his Royal Guards reach after leaving the nest.',
    },
    visual: { art: 'republic-of-east-gorteau', tint: 'red' },
  },
  // The King lands in its courtyard in chapter 216. Episode 92 shows him
  // flying towards it; he enters it in episode 93.
  {
    id: 'royal-palace-of-east-gorteau',
    kind: 'place',
    revealedAtEpisode: 93,
    revealedAtChapter: 216,
    name: {
      it: 'Palazzo reale del Golt Orientale',
      en: 'Royal Palace of East Gorteau',
    },
    summary: {
      it: 'Il palazzo del capo del Golt Orientale, dove atterrano il re e le sue guardie reali.',
      en: 'The palace of East Gorteau’s ruler, where the King and his Royal Guards land.',
    },
    visual: { art: 'royal-palace-of-east-gorteau', tint: 'orange' },
  },
  // Knov gives its name in chapter 220. Episode 94 shows only a hotel by
  // the station.
  {
    id: 'tri-orb-hotel',
    kind: 'place',
    source: 'chapter',
    revealedAtEpisode: 94,
    revealedAtChapter: 220,
    name: { it: 'Tri-Orb Hotel', en: 'Tri-Orb Hotel' },
    summary: {
      it: 'Un albergo vicino alla stazione di Doli City.',
      en: 'A hotel by the train station in Doli City.',
    },
    visual: { art: 'tri-orb-hotel', tint: 'lavender' },
  },
]

/** The dossiers of the places after NGL, each at its record's gate. */
const CHIMERA_ANT_NEW_PLACES: Record<string, PlaceDossier<HunterVocabulary>> = {
  'chimera-ant-nest': {
    form: 'nest',
    region: 'islands',
    arc: 'chimera-ant-arc',
    landmark: {
      it: 'L’alto cumulo del nido',
      en: 'The tall mound of the nest',
    },
    log: {
      it: 'Le formiche soldato portano qui gli umani catturati e li ammucchiano per nutrire la regina. La regina riunisce i comandanti di divisione e annuncia che d’ora in poi penserà solo a dare alla luce il re. In una camera pendono dal soffitto tre grandi uova, destinate alle sue guardie reali.',
      en: 'Soldier ants bring the captured humans here and pile them up to feed the Queen. She calls her squadron leaders together and tells them she will now give all her strength to bearing the King. In one chamber, three large eggs for her Royal Guards hang from the ceiling.',
    },
    // Shaiapouf meets Neferpitou outside the nest and names Menthuthuyoupi,
    // still in his egg, in chapter 202 / episode 86; the King is born here
    // and named at the Queen's death in chapter 215 / episode 92.
    filedHere: ['shaiapouf', 'menthuthuyoupi', 'meruem'],
  },
  'd2-manufacturing-plant': {
    form: 'building',
    region: 'islands',
    arc: 'chimera-ant-arc',
    landmark: {
      it: 'I tre tunnel nella parete di roccia',
      en: 'The three tunnels into the rock face',
    },
    log: {
      it: 'Gon scambia le grotte per il nido delle formiche, ma Kaito gli spiega che le formiche non fanno il nido nelle buche. Dentro c’è una fabbrica di droga, che si pensa sia nota solo ai capi di NGL. Le formiche l’hanno scoperta e hanno ucciso chi ci lavorava.',
      en: 'Gon takes the caves for the ants’ nest, but Kite tells him the ants do not nest in holes. Inside is a drug factory, which only NGL’s leaders are thought to know about. The ants have found it and killed the people who worked there.',
    },
    filedHere: [],
  },
  'republic-of-rokario': {
    form: 'country',
    region: 'islands',
    arc: 'chimera-ant-arc',
    landmark: {
      it: 'La mappa che Killua controlla durante il notiziario',
      en: 'The map Killua checks during the news',
    },
    log: {
      it: 'Un notiziario riferisce che una formichimera ha ucciso sette persone a Pata City ed è fuggita sui monti Miera. Killua controlla la mappa del paese: Pata City è a due città di distanza da Doli City, dove vive con Gon, e pensa che siano al sicuro.',
      en: 'A news report says a Chimera Ant has killed seven people in Pata City and fled into the Miera Mountains. Killua checks the map of the country: Pata City is two towns away from Doli City, where he and Gon are staying, so he thinks they are safe.',
    },
    filedHere: [],
  },
  'doli-city': {
    form: 'city',
    region: 'islands',
    arc: 'chimera-ant-arc',
    landmark: { it: 'La bacheca della città', en: 'The message board in town' },
    log: {
      it: 'Killua porta qui Gon dopo che Netero gli ha detto che due assassini li aspettano in questa città. Un messaggio su una bacheca della città sfida i ragazzi, e lì Pahm si presenta a loro. Gon e Killua si allenano qui e dividono un appartamento con Pahm.',
      en: 'Killua brings Gon here after Netero tells him that two assassins are waiting for them in this city. A message on a board in town challenges the boys, and Palm introduces herself to them there. Gon and Killua train here and share an apartment with Palm.',
    },
    filedHere: [],
  },
  'pata-city': {
    form: 'city',
    region: 'islands',
    arc: 'chimera-ant-arc',
    landmark: {
      it: 'Le auto della polizia che corrono in periferia',
      en: 'The police cars racing through the suburbs',
    },
    log: {
      it: 'Jeedo uccide qui sette persone. Quando la polizia apre il fuoco, schiva i proiettili e strappa le dita agli agenti. Fugge sui monti Miera dicendo di mandare qualcuno più veloce il giorno dopo, e il governo chiede all’Associazione Hunter di catturarlo.',
      en: 'Cheetu kills seven people here. When the police open fire, he dodges the bullets and tears off the officers’ fingers. He flees into the Miera Mountains, telling them to bring someone faster the next day, and the government asks the Hunter Association to capture him.',
    },
    filedHere: [],
  },
  'republic-of-east-gorteau': {
    form: 'country',
    region: 'islands',
    arc: 'chimera-ant-arc',
    landmark: {
      it: 'Il palazzo in aperta campagna',
      en: 'The palace in the open country',
    },
    log: {
      it: 'Se ne parla insieme a NGL quando il gruppo di Kaito cerca il punto in cui la formica è arrivata a riva. Dopo aver lasciato il nido, il re e le sue guardie reali lo raggiungono.',
      en: 'It comes up beside NGL when Kite’s group works out where the ant came ashore. After leaving the nest, the King and his Royal Guards reach it.',
    },
    filedHere: [],
  },
  'royal-palace-of-east-gorteau': {
    form: 'building',
    region: 'islands',
    arc: 'chimera-ant-arc',
    landmark: {
      it: 'Il palazzo e il suo cortile',
      en: 'The palace and its courtyard',
    },
    log: {
      it: 'Il re atterra nel cortile e uccide i soldati che lo minacciano. All’interno, il capo del paese liquida una telefonata sugli intrusi. Un soldato che sa usare il Nen si para davanti al re e alle sue guardie reali.',
      en: 'The King lands in the courtyard and kills the soldiers who threaten him. Inside, the country’s leader waves off a call about intruders. A soldier who can use Nen stands in the way of the King and his Royal Guards.',
    },
    filedHere: [],
  },
  'tri-orb-hotel': {
    form: 'building',
    region: 'islands',
    arc: 'chimera-ant-arc',
    landmark: {
      it: 'L’albergo accanto alla stazione',
      en: 'The hotel beside the station',
    },
    log: {
      it: 'Killua porta qui Gon mentre fugge da Pahm. Pahm li trova con la sua sfera di cristallo, e Knov riferisce il nome dell’albergo a Morau. Qui Schult tiene d’occhio i ragazzi.',
      en: 'Killua carries Gon here while running from Palm. Palm finds them with her crystal ball, and Knov passes the hotel’s name on to Morel. Shoot watches the boys here.',
    },
    filedHere: [],
  },
}

export const CHIMERA_ANT_PLACES: Record<
  string,
  PlaceDossier<HunterVocabulary>
> = {
  ...CHIMERA_ANT_NEW_PLACES,
  'meteor-city': {
    form: 'city',
    region: 'mainland',
    arc: 'chimera-ant-arc',
    landmark: { it: 'La città', en: 'The city' },
    log: {
      it: 'Una città che non compare nei registri ufficiali.',
      en: 'A city outside official records.',
    },
    filedHere: [],
  },
  'peijin': {
    form: 'city',
    region: 'islands',
    arc: 'chimera-ant-arc',
    landmark: { it: 'La città', en: 'The city' },
    log: {
      it: 'La capitale del Golt Orientale.',
      en: 'The capital of East Gorteau.',
    },
    filedHere: [],
  },
  'mandai-city': {
    form: 'city',
    region: 'islands',
    arc: 'chimera-ant-arc',
    landmark: { it: 'La città', en: 'The city' },
    log: {
      it: 'Una città scelta come punto di ritrovo.',
      en: 'A city chosen as a rendezvous.',
    },
    filedHere: [],
  },
  'luonton-city': {
    form: 'city',
    region: 'islands',
    arc: 'chimera-ant-arc',
    landmark: { it: 'Le strade della città', en: 'The city streets' },
    log: {
      it: 'Killua cerca di avvertire gli abitanti del pericolo. Gli abitanti gli tirano degli oggetti.',
      en: 'Killua tries to warn the residents of danger. They throw things at him.',
    },
    filedHere: [],
  },
  'ngl': {
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
