import type { FiledAbilities } from '~/data/sagaArchive'
import type { Entity } from '~/data/types'

function ability(
  [id, name]: [string, string],
  [episode, chapter, tint]: [number, number, Entity['visual']['tint']],
  summary: Entity['summary'],
): Entity {
  return {
    id,
    kind: 'ability',
    name: { en: name, it: name },
    revealedAtEpisode: episode,
    revealedAtChapter: chapter,
    summary,
    visual: { art: id, tint },
  }
}

export const NEN_ABILITIES: FiledAbilities = {
  nen: { 'emperor-time': 'specialist' },
  records: [
    ability(['battle-waltz', 'Battle Waltz'], [29, 49, 'violet'], {
      en: 'A cluster of aura-wrapped tops ricochets around the ring. Even the fighter who set them spinning cannot predict where they will strike.',
      it: 'Un gruppo di trottole avvolte dall’aura rimbalza sul ring. Nemmeno chi le ha lanciate sa dove colpiranno.',
    }),
    ability(['tornado-top', 'Tornado Top'], [30, 50, 'violet'], {
      en: 'The fighter spins on the tip of his peg leg. The turn keeps an attacker from closing in.',
      it: 'Il lottatore ruota sulla punta della gamba di legno. La rotazione impedisce all’avversario di avvicinarsi.',
    }),
    ability(['shotgun-blues', 'Shotgun Blues'], [34, 58, 'violet'], {
      en: 'Several spinning tops fly straight at the opponent in a single volley.',
      it: 'Più trottole partono insieme in una raffica diretta contro l’avversario.',
    }),
    ability(['tiger-bite-fist', 'Tiger Bite Fist'], [31, 53, 'violet'], {
      en: 'The fighter raises two clawed hands for a strike that closes like a pair of jaws.',
      it: 'Il lottatore alza le mani ad artiglio per un colpo che si chiude come un paio di mascelle.',
    }),
    ability(['aura-burst', 'Aura Burst'], [34, 59, 'violet'], {
      en: 'A blast of aura propels a wheelchair across the ring in a sudden dash.',
      it: 'Un getto d’aura spinge di colpo la sedia a rotelle attraverso il ring.',
    }),
    ability(['nen-stitches', 'Nen Stitches'], [32, 55, 'violet'], {
      en: 'Fine threads of aura draw the edges of a wound together.',
      it: 'Sottili fili d’aura accostano i lembi di una ferita.',
    }),
    ability(['bungee-gum', 'Bungee Gum'], [32, 54, 'violet'], {
      en: 'Playing cards scatter across the ring. A moment later, they fly across it again.',
      it: 'Le carte da gioco si spargono sul ring. Poco dopo lo attraversano di nuovo in volo.',
    }),
    ability(['texture-surprise', 'Texture Surprise'], [32, 54, 'violet'], {
      en: 'During the bout, the fighter covers his injured arm with a handkerchief.',
      it: 'Durante l’incontro, il lottatore copre il braccio ferito con un fazzoletto.',
    }),
    ability(
      ['eleven-black-children', 'Eleven Black Children'],
      [39, 67, 'ice'],
      {
        en: 'A group of black-clad figures moves together and opens fire.',
        it: 'Un gruppo di figure vestite di nero avanza e apre il fuoco.',
      },
    ),
    ability(['instant-lover', 'Instant Lover'], [39, 68, 'ice'], {
      en: 'A kiss puts the person who receives it under the user’s command.',
      it: 'Con un bacio chi usa l’abilità può dare ordini a chi lo riceve.',
    }),
    ability(['great-hiker', 'Great Hiker'], [40, 68, 'ice'], {
      en: 'What the user writes in verse can come true. A few lines set a chair on fire.',
      it: 'Ciò che il suo autore scrive in versi può avverarsi. Bastano poche righe per incendiare una sedia.',
    }),
    ability(['dowsing-chain', 'Dowsing Chain'], [40, 68, 'ice'], {
      en: 'A weighted chain swings like a pendulum in the user’s hand. Its movement helps him judge an answer.',
      it: 'Una catena con un peso oscilla come un pendolo. Dal suo movimento chi la regge può valutare una risposta.',
    }),
    ability(['lovely-ghostwriter', 'Lovely Ghostwriter'], [41, 71, 'ice'], {
      en: 'A pen moves across the page without its holder guiding it. It writes out fortunes.',
      it: 'La penna scorre sul foglio senza che chi la tiene la guidi. Sul foglio compaiono i responsi.',
    }),
    ability(['double-machine-gun', 'Double Machine Gun'], [43, 73, 'ice'], {
      en: 'The user fires a rapid volley of aura from the tips of his fingers.',
      it: 'Dalle punte delle dita parte una raffica di proiettili d’aura.',
    }),
    ability(['blinky', 'Blinky'], [43, 73, 'ice'], {
      en: 'A vacuum cleaner with a mouth takes in objects through its nozzle.',
      it: 'Un aspirapolvere con la bocca inghiotte gli oggetti che avvicina al tubo.',
    }),
    ability(['big-bang-impact', 'Big Bang Impact'], [44, 76, 'ice'], {
      en: 'The user gathers aura in one fist and strikes. The blow tears a crater into the ground.',
      it: 'Chi usa l’abilità concentra l’aura in un pugno. Il colpo apre un cratere nel terreno.',
    }),
    ability(['chain-jail', 'Chain Jail'], [44, 77, 'ice'], {
      en: 'A chain coils around its target and holds them in place.',
      it: 'Una catena si avvolge attorno al bersaglio e lo immobilizza.',
    }),
    ability(['fun-fun-cloth', 'Fun Fun Cloth'], [45, 77, 'ice'], {
      en: 'A cloth wraps around its target and shrinks the bundle to a size the user can carry.',
      it: 'Una stoffa avvolge il bersaglio e riduce il fagotto a una misura che si può portare a mano.',
    }),
    ability(['emperor-time', 'Emperor Time'], [47, 83, 'ice'], {
      en: 'When the user’s eyes turn scarlet, he can use every Nen category at full efficiency for the techniques he has learned.',
      it: 'Quando gli occhi diventano scarlatti, chi usa l’abilità può usare al massimo dell’efficienza ogni categoria Nen nelle tecniche che ha appreso.',
    }),
    ability(['holy-chain', 'Holy Chain'], [47, 84, 'ice'], {
      en: 'A chain tipped with a cross speeds up healing. The user lays it over a broken arm.',
      it: 'Una catena con una croce all’estremità accelera la guarigione. Chi la usa la posa su un braccio fratturato.',
    }),
    ability(['judgment-chain', 'Judgment Chain'], [47, 84, 'ice'], {
      en: 'A chain puts a blade around the target’s heart. If the target breaks the rule the user sets, the blade pierces it.',
      it: 'Una catena stringe una lama attorno al cuore del bersaglio. Se il bersaglio infrange la regola imposta, la lama lo trafigge.',
    }),
    ability(['skill-hunter', 'Skill Hunter'], [51, 97, 'ice'], {
      en: 'The user holds an open book while pale fish swim through the air in a closed room.',
      it: 'Chi usa l’abilità tiene in mano un libro aperto mentre pesci pallidi nuotano nell’aria di una stanza chiusa.',
    }),
    ability(['indoor-fish', 'Indoor Fish'], [51, 97, 'ice'], {
      en: 'Pale fish swim through the air inside a sealed room. They can feed on someone inside while the room stays closed.',
      it: 'Pesci pallidi nuotano nell’aria di una stanza chiusa. Finché la stanza resta chiusa, possono nutrirsi di chi si trova all’interno.',
    }),
    ability(['dragon-head', 'Dragon Head'], [52, 99, 'ice'], {
      en: 'Aura takes the shape of a dragon’s head, with a body that follows the user’s movements.',
      it: 'L’aura prende la forma della testa di un drago. Il corpo segue i movimenti di chi lo evoca.',
    }),
    ability(['dragon-lance', 'Dragon Lance'], [52, 99, 'ice'], {
      en: 'The aura dragon surges across the room after its target, following the user’s direction as it turns.',
      it: 'Il drago d’aura scatta attraverso la stanza all’inseguimento del bersaglio e cambia direzione sotto la guida di chi lo evoca.',
    }),
    ability(['black-voice', 'Black Voice'], [53, 98, 'ice'], {
      en: 'The user directs another person’s movements from a phone.',
      it: 'Dal telefono, chi usa l’abilità dirige i movimenti di un’altra persona.',
    }),
    ability(['gallery-fake', 'Gallery Fake'], [53, 100, 'ice'], {
      en: 'The user makes an exact copy of a porcelain vase.',
      it: 'Chi usa l’abilità produce una copia identica di un vaso di porcellana.',
    }),
    ability(['memory-bomb', 'Memory Bomb'], [56, 112, 'ice'], {
      en: 'A bullet fired from a revolver can carry a memory. The person it hits receives that memory.',
      it: 'Un proiettile sparato da una rivoltella può trasportare un ricordo. Chi viene colpito riceve quel ricordo.',
    }),
  ],
}
