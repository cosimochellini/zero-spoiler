import type { Story, Timeline } from '~/data/types'

/** Greed Island stories; source-only records retain their manga restrictions (#906). */
export const greedIslandChronicles = {
  'battera': [
    // The manga has the interview; the anime opens with the auction purchase.
    {
      episode: 59,
      chapter: 120,
      value: {
        title: { it: 'Il collezionista', en: 'The collector' },
        body: {
          it: 'Battera arriva all’asta di York Shin City per comprare Greed Island. Un giornalista gli chiede perché desideri questo videogioco così raro. Il miliardario risponde che lo fa per amore. La sua presenza attira l’attenzione prima che cominci la vendita delle copie del gioco.',
          en: 'Battera attends the Yorknew auction to buy Greed Island. A reporter asks why he wants the rare video game. The billionaire answers that his reason is love. His interest in the game becomes part of the news coverage as the auction prepares to sell its copies.',
        },
      },
      source: 'chapter',
    },
    {
      episode: 59,
      chapter: 121,
      value: {
        title: { it: 'L’acquisto di Greed Island', en: 'Buying Greed Island' },
        body: {
          it: 'Battera partecipa all’asta di York Shin City e compra una copia di Greed Island. [[gon-freecss|Gon]] e [[killua|Killua]] gli chiedono di poter giocare. Il miliardario si interessa a loro quando scopre che hanno già un anello e una scheda di memoria del gioco. Chiama [[tsezguerra|Tsezugera]] per esaminare il loro Ren.',
          en: 'Battera attends the Yorknew auction and buys a copy of Greed Island. [[gon-freecss|Gon]] and [[killua|Killua]] ask him to let them play. The billionaire becomes interested when he learns that they already have a ring and a memory card for the game. He calls [[tsezguerra|Tsezguerra]] to examine their Ren.',
        },
      },
      source: 'episode',
    },
    {
      episode: 60,
      chapter: 126,
      value: {
        title: { it: 'I giocatori assunti', en: 'The hired players' },
        body: {
          it: 'Battera compra le copie di Greed Island messe all’asta e affida a [[tsezguerra|Tsezugera]] la selezione dei giocatori. [[gon-freecss|Gon]] e [[killua|Killua]], respinti al primo tentativo, superano la nuova prova. Chi completa il gioco riceverà cinquanta miliardi di jeni. Le console sono custodite nella villa di Battera, dove i candidati ammessi entrano nel gioco uno alla volta.',
          en: 'Battera buys the copies of Greed Island offered at auction and has [[tsezguerra|Tsezguerra]] select the players. [[gon-freecss|Gon]] and [[killua|Killua]], rejected on their first attempt, pass the new test. Whoever clears the game will receive fifty billion Jenny. The consoles are kept in Battera’s mansion, where the successful applicants enter the game one at a time.',
        },
      },
    },
    {
      episode: 73,
      chapter: 174,
      value: {
        title: { it: 'La ragione del premio', en: 'The reason for the reward' },
        body: {
          it: 'Quando [[tsezguerra|Tsezugera]] torna dal gioco, Battera ha interrotto il finanziamento e vuole restare solo. Una fotografia spinge l’Hunter a chiedergli della giovane donna ritratta. Battera racconta che era la sua compagna, rimasta in coma dopo un incidente. Cercava nel gioco una carta capace di guarirla. La donna è morta e completare Greed Island non gli interessa più.',
          en: 'When [[tsezguerra|Tsezguerra]] returns from the game, Battera has withdrawn his support and wants to be alone. A photograph prompts the Hunter to ask about the young woman in it. Battera explains that she was his lover, left in a coma after an accident. He sought a card in the game that could heal her. She has died, and clearing Greed Island no longer matters to him.',
        },
      },
    },
  ],
  'tsezguerra': [
    {
      episode: 59,
      chapter: 121,
      value: {
        title: { it: 'La prova del Ren', en: 'The Ren test' },
        body: {
          it: '[[battera|Battera]] chiama Tsezugera quando [[gon-freecss|Gon]] e [[killua|Killua]] si offrono di completare Greed Island. I ragazzi mostrano il loro Ren, ma Tsezugera li respinge. Non basta saper usare il Nen per sopravvivere nel gioco. Il suo giudizio costringe i due a prepararsi prima di poter entrare.',
          en: '[[battera|Battera]] calls Tsezguerra when [[gon-freecss|Gon]] and [[killua|Killua]] offer to clear Greed Island. The boys demonstrate their Ren, but Tsezguerra rejects them. Being able to use Nen is not enough to survive in the game. His assessment forces the two to prepare before they can enter.',
        },
      },
    },
    {
      episode: 60,
      chapter: 126,
      value: {
        title: { it: 'La seconda selezione', en: 'The second screening' },
        body: {
          it: 'Alla nuova selezione [[killua|Killua]] mostra a Tsezugera l’elettricità prodotta con il Nen. [[gon-freecss|Gon]] concentra invece l’aura nel pugno e danneggia il muro. Tsezugera ammette entrambi e spiega ai candidati il contratto di [[battera|Battera]]. Nella villa accompagna il gruppo alle console, poi lascia che siano i giocatori a decidere l’ordine d’ingresso.',
          en: 'At the new screening, [[killua|Killua]] shows Tsezguerra the electricity he produces with Nen. [[gon-freecss|Gon]] instead gathers aura in his fist and damages the wall. Tsezguerra accepts both and explains [[battera|Battera]]’s contract to the successful applicants. At the mansion he takes the group to the consoles, then lets the players decide their order of entry.',
        },
      },
    },
    {
      episode: 67,
      chapter: 153,
      value: {
        title: { it: 'Lo scambio e il furto', en: 'The trade and the theft' },
        body: {
          it: 'Tsezugera organizza uno scambio di carte con il Boomer. Dopo lo scambio l’avversario protesta per le condizioni, mentre i suoi complici si avvicinano senza farsi notare. Usano un incantesimo per sottrarre altre carte alla squadra di Tsezugera e fuggono. Gli Hunter capiscono di essere stati ingannati e cercano un modo per impedirgli di completare il gioco.',
          en: 'Tsezguerra arranges a card trade with the Bomber. After the exchange, his opponent complains about the terms while his accomplices approach unnoticed. They cast a spell to take more cards from Tsezguerra’s team and escape. The Hunters realize that they have been tricked and look for a way to keep them from clearing the game.',
        },
      },
    },
    {
      episode: 69,
      chapter: 160,
      value: {
        title: {
          it: 'La squadra contro i pirati',
          en: 'The team against the pirates',
        },
        body: {
          it: 'Tsezugera e i suoi compagni si uniscono a [[gon-freecss|Gon]], [[killua|Killua]] e [[biscuit-krueger|Biscuit]] per affrontare i pirati. Per ottenere una carta rara serve un gruppo di quindici persone. La forza dei ragazzi lo sorprende: quando si confrontano saltando con il Nen, superano la sua altezza. La nuova squadra torna a sfidare i pirati.',
          en: 'Tsezguerra and his companions join [[gon-freecss|Gon]], [[killua|Killua]] and [[biscuit-krueger|Biscuit]] to challenge the pirates. Obtaining a rare card requires a group of fifteen people. The boys’ strength surprises him: when they compare their Nen-powered jumps, they exceed his height. The new team returns to challenge the pirates.',
        },
      },
    },
    {
      episode: 71,
      chapter: 169,
      value: {
        title: {
          it: 'La vittoria a palla avvelenata',
          en: 'The dodgeball victory',
        },
        body: {
          it: 'Tsezugera partecipa alla partita di palla avvelenata contro [[razor|Razer]]. I colpi del creatore del gioco mettono fuori combattimento diversi partecipanti, ma [[gon-freecss|Gon]], [[killua|Killua]] e [[hisoka|Hisoka]] continuano a giocare. La squadra riesce a vincere. Tsezugera vede quanto siano cresciuti i ragazzi che aveva respinto alla prima selezione per Greed Island.',
          en: 'Tsezguerra takes part in the dodgeball match against [[razor|Razor]]. The game creator’s throws put several players out of action, but [[gon-freecss|Gon]], [[killua|Killua]] and [[hisoka|Hisoka]] keep playing. Their team wins. Tsezguerra sees how far the boys have come since he rejected them at the first Greed Island screening.',
        },
      },
    },
    {
      episode: 72,
      chapter: 173,
      value: {
        title: { it: 'Guadagnare tempo', en: 'Buying time' },
        body: {
          it: 'Tsezugera tiene occupato il Boomer per dare a [[gon-freecss|Gon]] il tempo di prepararsi. La sua squadra colpisce e fugge con le carte di viaggio, mentre gli avversari consumano le proprie per inseguirla. Alla fine gli Hunter escono dal gioco. Nella villa scoprono che [[battera|Battera]] ha rinunciato a completarlo, ma Tsezugera pretende una spiegazione.',
          en: 'Tsezguerra keeps the Bomber occupied to give [[gon-freecss|Gon]] time to prepare. His team attacks and escapes with travel cards, making their opponents spend their own cards in pursuit. The Hunters eventually leave the game. At the mansion they discover that [[battera|Battera]] has given up on clearing it, but Tsezguerra demands an explanation.',
        },
      },
    },
    {
      episode: 73,
      chapter: 174,
      value: {
        title: { it: 'Fuori dal gioco', en: 'Outside the game' },
        body: {
          it: 'Tsezugera rimane fuori da Greed Island con i suoi compagni. Il Boomer aspetta il loro ritorno, ma la squadra non rientra entro il limite previsto dal gioco. [[battera|Battera]] racconta a Tsezugera della donna che voleva guarire con una carta. La sua morte ha tolto al miliardario ogni ragione per continuare.',
          en: 'Tsezguerra stays outside Greed Island with his companions. The Bomber waits for their return, but the team does not come back within the game’s time limit. [[battera|Battera]] tells Tsezguerra about the woman he hoped to heal with a card. Her death has taken away the billionaire’s reason to continue.',
        },
      },
    },
  ],
  'puhat': [
    {
      episode: 60,
      chapter: 125,
      value: {
        title: {
          it: 'Aspettare prima della prova',
          en: 'Waiting before the test',
        },
        body: {
          it: 'Puhat resta seduto dietro [[gon-freecss|Gon]] e [[killua|Killua]] mentre gli altri candidati si mettono in fila. Spiega che non serve affrettarsi: [[battera|Battera]] non assegnerà tutti i posti se mancano persone capaci. Gon risponde che l’ordine non conta se sono abbastanza forti. Puhat apprezza il ragionamento, si presenta e va a sostenere la prova.',
          en: 'Puhat stays seated behind [[gon-freecss|Gon]] and [[killua|Killua]] while the other applicants line up. He explains that there is no need to rush: [[battera|Battera]] will leave places empty if there are not enough capable people. Gon answers that their turn does not matter if they are strong enough. Puhat approves of his reasoning, introduces himself and goes to take the test.',
        },
      },
    },
    {
      episode: 62,
      chapter: 132,
      value: {
        title: { it: 'L’alleanza dei giocatori', en: 'The player alliance' },
        body: {
          it: 'Puhat accetta di entrare in un’alleanza che promette di completare Greed Island in tre mesi. Nel nascondiglio riceve istruzioni sulle carte incantesimo. Le nuove reclute devono raccoglierle per sostenere il gruppo. Una carta difensiva particolarmente importante serve a proteggere una carta rara, ottenuta scambiando una serie completa di incantesimi.',
          en: 'Puhat joins an alliance that promises to clear Greed Island in three months. At the hideout he receives instructions about spell cards. The new recruits must collect them to support the group. One particularly important defensive card is needed to protect a rare card obtained by exchanging a complete set of spells.',
        },
      },
    },
    {
      episode: 64,
      chapter: 143,
      value: {
        title: { it: 'La trattativa fallita', en: 'The failed negotiation' },
        body: {
          it: 'Il Boomer rivela di aver messo bombe Nen ai membri dell’alleanza e pretende le loro carte. Puhat si rende conto che anche lui è stato toccato e minacciato senza capire il pericolo. Raggiunge il Boomer fuori dal gioco e si offre come intermediario. L’uomo rifiuta la proposta e lo uccide con un’esplosione.',
          en: 'The Bomber reveals that he has planted Nen bombs on the alliance members and demands their cards. Puhat realizes that he too was touched and threatened without understanding the danger. He meets the Bomber outside the game and offers to act as an intermediary. The man rejects his proposal and kills him with an explosion.',
        },
      },
    },
  ],
  'biscuit-krueger': [
    {
      episode: 62,
      chapter: 137,
      value: {
        title: {
          it: 'Una maestra per i ragazzi',
          en: 'A teacher for the boys',
        },
        body: {
          it: 'Biscuit segue [[gon-freecss|Gon]] e [[killua|Killua]] verso la città dove si vendono gli incantesimi. Li osserva affrontare i mostri senza capire come superarli. Alla fine interviene e ordina loro di usare Gyo: l’armatura che li minaccia è controllata a distanza da un piccolo animale. Biscuit si presenta e propone di allenarli. Studia il Nen da quarant’anni.',
          en: 'Biscuit follows [[gon-freecss|Gon]] and [[killua|Killua]] toward the town that sells spells. She watches them fight monsters without understanding how to overcome them. She finally intervenes and tells them to use Gyo: the armor threatening them is controlled from a distance by a small animal. Biscuit introduces herself and proposes to train them. She has studied Nen for forty years.',
        },
      },
    },
    {
      episode: 63,
      chapter: 140,
      value: {
        title: { it: 'Il primo allenamento', en: 'The first training' },
        body: {
          it: 'Biscuit attira in trappola [[binolt|Binolt]], che segue il gruppo, e lo sconfigge senza usare il Nen. [[gon-freecss|Gon]] le chiede di rimandare la ricerca della gemma che desidera per allenare lui e [[killua|Killua]]. Biscuit usa il prigioniero come avversario dei ragazzi. Poi compra degli attrezzi e fa scavare loro un passaggio tra le rocce, insegnandogli a estendere l’aura agli oggetti.',
          en: 'Biscuit lures [[binolt|Binolt]], who is following the group, into a trap and defeats him without Nen. [[gon-freecss|Gon]] asks her to postpone her search for the gem she wants and train him and [[killua|Killua]]. Biscuit uses the prisoner as the boys’ opponent. She then buys tools and makes them dig a path through the rocks, teaching them to extend aura into objects.',
        },
      },
    },
    {
      episode: 64,
      chapter: 142,
      value: {
        title: { it: 'Distribuire l’aura', en: 'Distributing aura' },
        body: {
          it: 'Dopo gli scavi Biscuit insegna a [[gon-freecss|Gon]] e [[killua|Killua]] a studiare i mostri prima di attaccarli. Passa poi alla difesa: il Ken deve proteggerli dai suoi colpi concentrati con Ko. Quando riescono a mantenerlo abbastanza a lungo, insegna loro a spostare l’aura tra le parti del corpo durante il combattimento.',
          en: 'After the digging, Biscuit teaches [[gon-freecss|Gon]] and [[killua|Killua]] to study monsters before attacking them. She then turns to defense: Ken must protect them from her Ko-focused punches. Once they can maintain it long enough, she teaches them to shift aura between parts of their bodies during combat.',
        },
      },
    },
    {
      episode: 66,
      chapter: 151,
      value: {
        title: {
          it: 'Le carte dopo l’allenamento',
          en: 'Cards after training',
        },
        body: {
          it: 'Biscuit continua ad allenare [[gon-freecss|Gon]] mentre [[killua|Killua]] lascia il gioco per sostenere l’esame Hunter. Al suo ritorno i tre riprendono a raccogliere carte e a scambiarle con altri giocatori. Le capacità acquisite rendono più semplice affrontare le prove di Greed Island. L’obiettivo di Biscuit resta la gemma che può ottenere completando il gioco.',
          en: 'Biscuit continues training [[gon-freecss|Gon]] while [[killua|Killua]] leaves the game to take the Hunter Exam. When he returns, the three resume collecting cards and trading with other players. Their new skills make the challenges of Greed Island easier to overcome. Biscuit’s goal remains the gem she can obtain by clearing the game.',
        },
      },
    },
    {
      episode: 69,
      chapter: 161,
      value: {
        title: {
          it: 'La squadra contro i pirati',
          en: 'The team against the pirates',
        },
        body: {
          it: 'Biscuit accompagna [[gon-freecss|Gon]] e [[killua|Killua]] nella ricerca di una squadra capace di affrontare i pirati. Il gruppo trova [[hisoka|Hisoka]] e recluta [[tsezguerra|Tsezugera]] con i suoi compagni. Dopo una settimana di preparazione torna alla base dei pirati. Le prime vittorie convincono [[razor|Razer]] a cambiare la sfida: propone una partita di palla avvelenata.',
          en: 'Biscuit accompanies [[gon-freecss|Gon]] and [[killua|Killua]] as they seek a team capable of challenging the pirates. The group finds [[hisoka|Hisoka]] and recruits [[tsezguerra|Tsezguerra]] with his companions. After a week of preparation they return to the pirates’ base. Their early victories prompt [[razor|Razor]] to change the challenge: he proposes a dodgeball match.',
        },
      },
    },
    {
      episode: 71,
      chapter: 169,
      value: {
        title: { it: 'Le mani di Killua', en: 'Killua’s hands' },
        body: {
          it: 'Biscuit partecipa alla partita di palla avvelenata contro [[razor|Razer]]. Evita un tiro, ma la palla sfiora il suo vestito e viene eliminata. Durante una pausa mostra quanto siano ferite le mani di [[killua|Killua]], che tiene la palla per i colpi di [[gon-freecss|Gon]]. Dopo la vittoria della squadra si occupa delle sue mani mentre Gon parla con Razer.',
          en: 'Biscuit takes part in the dodgeball match against [[razor|Razor]]. She dodges a throw, but the ball brushes her dress and she is eliminated. During a timeout she reveals how badly [[killua|Killua]]’s hands are injured from holding the ball for [[gon-freecss|Gon]]’s punches. After their team wins, she attends to his hands while Gon speaks with Razor.',
        },
      },
    },
    {
      episode: 72,
      chapter: 171,
      value: {
        title: { it: 'Il potere per recuperare', en: 'The power for recovery' },
        body: {
          it: 'Mentre [[gon-freecss|Gon]] si prepara a combattere il Boomer, [[killua|Killua]] chiede a Biscuit di mostrargli il suo potere. Lei crea con il Nen un’estetista capace di massaggiare il corpo e favorire il recupero. Killua sperava in una tecnica utile per il combattimento, ma Biscuit apprezza i massaggi e la possibilità di alleviare la fatica.',
          en: 'While [[gon-freecss|Gon]] prepares to fight the Bomber, [[killua|Killua]] asks Biscuit to show him her ability. She creates a Nen beautician who can massage the body and aid recovery. Killua hoped for a technique useful in battle, but Biscuit values the massages and the relief from fatigue.',
        },
      },
    },
    {
      episode: 73,
      chapter: 177,
      value: {
        title: { it: 'La forma nascosta', en: 'The hidden form' },
        body: {
          it: 'Biscuit affronta da sola uno dei complici del Boomer, separandolo dagli altri con una carta di viaggio. All’inizio conserva l’aspetto di bambina e lascia che l’avversario la colpisca. Poi mostra il suo vero corpo, molto più grande e muscoloso, e lo mette fuori combattimento con un pugno. Spiega che non le piace assumere quella forma.',
          en: 'Biscuit fights one of the Bomber’s accomplices alone, separating him from the others with a travel card. At first she keeps her childlike appearance and lets her opponent strike her. She then reveals her much larger, muscular body and knocks him out with a punch. She explains that she dislikes taking that form.',
        },
      },
    },
    {
      episode: 75,
      chapter: 185,
      value: {
        title: { it: 'La gemma e il saluto', en: 'The gem and the farewell' },
        body: {
          it: 'Completato Greed Island con [[gon-freecss|Gon]] e [[killua|Killua]], Biscuit sceglie Blue Planet tra le tre carte da portare fuori. Quando tornano nel mondo esterno, la trasforma nella gemma che cercava. Gon e Killua usano un’altra carta per cercare [[ging-freecss|Ging]]. Biscuit li saluta e rimane con la pietra ottenuta alla fine del gioco.',
          en: 'After clearing Greed Island with [[gon-freecss|Gon]] and [[killua|Killua]], Biscuit chooses Blue Planet as one of the three cards to take outside. Back in the outside world, she turns it into the gem she sought. Gon and Killua use another card to search for [[ging-freecss|Ging]]. Biscuit says goodbye and stays behind with the stone obtained at the end of the game.',
        },
      },
    },
  ],
  'binolt': [
    // Episode 63 completes both capture and release; the manga can stop at 138.
    {
      episode: 63,
      chapter: 138,
      value: {
        title: { it: 'Nella conca', en: 'In the hollow' },
        body: {
          it: 'Binolt segue [[gon-freecss|Gon]] e [[killua|Killua]], poi prende di mira [[biscuit-krueger|Biscuit]] quando si allontana. Le taglia una ciocca di capelli e la mangia per conoscere il suo corpo. Scoperta la sua forza, le chiede un combattimento senza Nen. Biscuit lo sconfigge e lo costringe a restare in una conca, dove i due ragazzi lo affrontano per allenarsi.',
          en: 'Binolt follows [[gon-freecss|Gon]] and [[killua|Killua]], then targets [[biscuit-krueger|Biscuit]] when she leaves them. He cuts off a lock of her hair and eats it to learn about her body. Discovering her strength, he asks to fight without Nen. Biscuit defeats him and makes him stay in a hollow, where the two boys fight him as training.',
        },
      },
      source: 'chapter',
    },
    {
      episode: 63,
      chapter: 139,
      value: {
        title: { it: 'Nella conca', en: 'In the hollow' },
        body: {
          it: 'Binolt segue [[gon-freecss|Gon]] e [[killua|Killua]], poi prende di mira [[biscuit-krueger|Biscuit]] quando si allontana. Le taglia una ciocca di capelli e la mangia per conoscere il suo corpo. Scoperta la sua forza, le chiede un combattimento senza Nen. Biscuit lo sconfigge e lo costringe a restare in una conca, dove i due ragazzi lo affrontano per allenarsi. Dopo dieci giorni Binolt si arrende. Gon lo ringrazia per averli aiutati a migliorare e Biscuit lo lascia andare. Binolt promette di consegnarsi alle autorità.',
          en: 'Binolt follows [[gon-freecss|Gon]] and [[killua|Killua]], then targets [[biscuit-krueger|Biscuit]] when she leaves them. He cuts off a lock of her hair and eats it to learn about her body. Discovering her strength, he asks to fight without Nen. Biscuit defeats him and makes him stay in a hollow, where the two boys fight him as training. After ten days Binolt surrenders. Gon thanks him for helping them improve, and Biscuit lets him go. Binolt promises to turn himself in to the authorities.',
        },
      },
      source: 'episode',
    },
    {
      // Episode 64 only orders this manga step; anime release is already above.
      episode: 64,
      chapter: 139,
      source: 'chapter',
      value: {
        title: { it: 'La resa', en: 'Surrender' },
        body: {
          it: 'Dopo giorni di combattimenti [[gon-freecss|Gon]] e [[killua|Killua]] riescono a tenere testa a Binolt. Non lo uccidono e gli lasciano il tempo di recuperare tra gli scontri. Binolt si arrende prima della scadenza imposta da [[biscuit-krueger|Biscuit]]. Gon lo ringrazia per averli aiutati a migliorare. Binolt decide di consegnarsi alle autorità, poi lascia il gruppo.',
          en: 'After days of fighting, [[gon-freecss|Gon]] and [[killua|Killua]] can hold their own against Binolt. They do not kill him and give him time to recover between bouts. Binolt surrenders before [[biscuit-krueger|Biscuit]]’s deadline. Gon thanks him for helping them improve. Binolt decides to turn himself in to the authorities, then leaves the group.',
        },
      },
    },
  ],
  'kosofftro': [
    {
      episode: 62,
      chapter: 132,
      source: 'chapter',
      value: {
        title: {
          it: 'Un nome per raggiungere la base',
          en: 'A name for reaching the base',
        },
        body: {
          it: 'Kosofftro accoglie le nuove reclute di un’alleanza di Greed Island, arrivate con una carta di viaggio. Chiede loro di ricordare il suo nome: serve per raggiungerlo senza indicare il nascondiglio del gruppo. Tra i nuovi arrivati c’è [[puhat|Puhat]]. Dopo il trasferimento, le reclute vengono accompagnate alla base per ricevere istruzioni sulle carte.',
          en: 'Kosofftro welcomes new recruits to a Greed Island alliance, brought there by a travel card. He asks them to remember his name: it lets them reach him without naming the group’s hideout. [[puhat|Puhat]] is among the newcomers. After the transfer, the recruits are taken to the base to receive instructions about cards.',
        },
      },
    },
  ],
  'genthru': [
    {
      episode: 65,
      chapter: 144,
      source: 'chapter',
      value: {
        title: { it: 'Il ricatto del Boomer', en: 'The Bomber’s blackmail' },
        body: {
          it: 'Gensul rivela ai membri dell’alleanza di essere il Boomer. Ha piazzato bombe Nen su di loro mentre si fingeva un compagno e ora pretende tutte le carte rare del gruppo. [[jispa|Jispa]] prova ad attaccarlo e viene ferito mortalmente. [[puhat|Puhat]] cerca una trattativa fuori dal gioco, ma Gensul lo uccide. Dopo aver ottenuto le carte, il Boomer fa esplodere le altre vittime.',
          en: 'Genthru reveals to the alliance that he is the Bomber. He planted Nen bombs on its members while pretending to be their companion and now demands all the group’s rare cards. [[jispa|Jispa]] tries to attack him and is fatally wounded. [[puhat|Puhat]] seeks a negotiation outside the game, but Genthru kills him. After receiving the cards, the Bomber detonates the other victims.',
        },
      },
    },
    {
      episode: 67,
      chapter: 153,
      source: 'chapter',
      value: {
        title: { it: 'Lo scambio truccato', en: 'The rigged trade' },
        body: {
          it: 'Gensul accetta uno scambio con la squadra di [[tsezguerra|Tsezugera]], poi protesta sostenendo che l’accordo non è equo. Mentre distrae gli Hunter, i suoi complici usano i Dadi del Rischio e un incantesimo per sottrarre altre carte al gruppo. I tre fuggono subito dopo il furto, avvicinandosi ancora al completamento di Greed Island.',
          en: 'Genthru accepts a trade with [[tsezguerra|Tsezguerra]]’s team, then complains that the agreement is unfair. While he distracts the Hunters, his accomplices use Risky Dice and cast a spell to take more cards from the group. The three escape immediately after the theft, moving closer to completing Greed Island.',
        },
      },
    },
    {
      episode: 71,
      chapter: 170,
      source: 'chapter',
      value: {
        title: {
          it: 'La minaccia dopo la partita',
          en: 'The threat after the match',
        },
        body: {
          it: 'Dopo la vittoria contro [[razor|Razer]], la squadra di [[gon-freecss|Gon]] ottiene la carta della spiaggia. Gensul contatta [[tsezguerra|Tsezugera]] e pretende che gliela consegni. Rivela di aver ucciso i membri della precedente squadra che aveva cercato di affrontare i pirati. Gon lo sfida, ma Tsezugera vuole allontanare il Boomer per lasciare ai ragazzi il tempo di prepararsi.',
          en: 'After defeating [[razor|Razor]], [[gon-freecss|Gon]]’s team obtains the beach card. Genthru contacts [[tsezguerra|Tsezguerra]] and demands that he hand it over. He reveals that he killed the members of the earlier team that tried to challenge the pirates. Gon challenges him, but Tsezguerra wants to draw the Bomber away and give the boys time to prepare.',
        },
      },
    },
    {
      episode: 72,
      chapter: 173,
      source: 'chapter',
      value: {
        title: { it: 'L’inseguimento', en: 'The pursuit' },
        body: {
          it: 'Gensul e i suoi due complici inseguono la squadra di [[tsezguerra|Tsezugera]], che li attacca e fugge con le carte di viaggio. Per continuare la caccia costringono altri giocatori a procurargli nuovi incantesimi. Tsezugera finisce per uscire dal gioco. Il Boomer lo segue fino alla villa di [[battera|Battera]], per affrontarlo fuori dal gioco.',
          en: 'Genthru and his two accomplices pursue [[tsezguerra|Tsezguerra]]’s team, which attacks them and escapes with travel cards. To continue the chase, they force other players to obtain new spells for them. Tsezguerra eventually leaves the game. The Bomber follows him to [[battera|Battera]]’s mansion, to confront him outside the game.',
        },
      },
    },
    {
      episode: 74,
      chapter: 181,
      source: 'chapter',
      value: {
        title: { it: 'La trappola di Gon', en: 'Gon’s trap' },
        body: {
          it: 'Gensul affronta [[gon-freecss|Gon]] e cerca di costringerlo alla resa con le esplosioni delle sue mani. Il ragazzo continua a combattere anche dopo aver perso una mano. Usa della benzina per impedirgli di far esplodere altro, poi rompe il terreno e lo fa cadere in una trappola. Una grande roccia gli blocca la fuga e Gon lo colpisce con il pugno carico di aura.',
          en: 'Genthru fights [[gon-freecss|Gon]] and tries to force him to surrender with explosions from his hands. The boy keeps fighting even after losing a hand. He uses gasoline to stop further explosions, then breaks the ground and drops him into a trap. A large rock blocks his escape, and Gon strikes him with an aura-charged punch.',
        },
      },
    },
    {
      episode: 75,
      chapter: 183,
      source: 'chapter',
      value: {
        title: {
          it: 'Le cure e la bomba rimossa',
          en: 'Healing and the removed bomb',
        },
        body: {
          it: 'Dopo la sconfitta Gensul viene legato insieme ai suoi complici. [[gon-freecss|Gon]] e i suoi compagni usano le carte per curare anche i nemici, oltre alle proprie ferite. Un giocatore sopravvissuto al ricatto si avvicina al Boomer e lo tocca, pronunciando la frase necessaria a rimuovere la bomba. La creatura Nen che lo accompagnava scompare.',
          en: 'After his defeat, Genthru is tied up with his accomplices. [[gon-freecss|Gon]] and his companions use cards to heal their enemies as well as their own injuries. A player who survived the blackmail approaches the Bomber and touches him, saying the phrase needed to remove the bomb. The Nen creature accompanying that player disappears.',
        },
      },
    },
  ],
  'jispa': [
    {
      episode: 65,
      chapter: 144,
      source: 'chapter',
      value: {
        title: { it: 'L’attacco al Boomer', en: 'Attacking the Bomber' },
        body: {
          it: 'Jispa accompagna le nuove reclute dell’alleanza al nascondiglio e spiega come funzionano le carte di viaggio. Quando [[genthru|Gensul]] rivela di essere il Boomer, Jispa cerca di attaccarlo alle spalle. Il Boomer lo colpisce con un’esplosione al volto. Prima che il gruppo consegni le carte richieste, i compagni annunciano che Jispa è morto.',
          en: 'Jispa takes the alliance’s new recruits to the hideout and explains how travel cards work. When [[genthru|Genthru]] reveals that he is the Bomber, Jispa tries to attack him from behind. The Bomber strikes him with an explosion to the face. Before the group hands over the demanded cards, the other members report that Jispa has died.',
        },
      },
    },
  ],
  'razor': [
    {
      episode: 67,
      chapter: 145,
      value: {
        title: { it: 'Gli intrusi sull’isola', en: 'Intruders on the island' },
        body: {
          it: 'Razer ferma i membri della Brigata Fantasma arrivati a Greed Island in barca. Si presenta come uno dei creatori del gioco e spiega di occuparsi dei sistemi a Emissione. Gli intrusi non sono entrati come giocatori: Razer usa una carta riservata ai creatori per allontanarli, poi distrugge la loro imbarcazione con una palla d’aura.',
          en: 'Razor stops the Phantom Troupe members who reach Greed Island by boat. He introduces himself as one of the game’s creators and explains that he handles its Emissive systems. The intruders have not entered as players: Razor uses a card reserved for the creators to remove them, then destroys their boat with a ball of aura.',
        },
      },
    },
    {
      episode: 71,
      chapter: 169,
      value: {
        title: {
          it: 'La partita con il figlio di Ging',
          en: 'The match with Ging’s son',
        },
        body: {
          it: 'Razer affronta la squadra di [[gon-freecss|Gon]] a palla avvelenata. Con il Nen crea altri giocatori e lancia la palla con una forza che mette in difficoltà gli avversari. Gon, [[killua|Killua]] e [[hisoka|Hisoka]] riescono a batterlo. Dopo la partita Razer racconta a Gon che [[ging-freecss|Ging]] lo ha catturato quando era un criminale e gli ha affidato un ruolo nel gioco. Ging gli ha chiesto di non risparmiare suo figlio.',
          en: 'Razor faces [[gon-freecss|Gon]]’s team at dodgeball. He creates additional players with Nen and throws the ball with a force that troubles his opponents. Gon, [[killua|Killua]] and [[hisoka|Hisoka]] defeat him. After the match, Razor tells Gon that [[ging-freecss|Ging]] captured him when he was a criminal and gave him a role in the game. Ging asked him not to go easy on his son.',
        },
      },
    },
  ],
  'jeitsari': [
    {
      episode: 59,
      chapter: 121,
      source: 'chapter',
      value: {
        title: {
          it: 'Le sette copie all’asta',
          en: 'The seven copies at auction',
        },
        body: {
          it: 'Jeitsari possiede sette copie di Greed Island. Lascia al proprio avvocato un contratto che stabilisce quando affidarle all’asta insieme alle console: se nessuno completa il gioco entro la data indicata, devono essere vendute. Le sue copie arrivano così all’asta di York Shin City, dove il gioco attira l’interesse dei compratori.',
          en: 'Jeitsari owns seven copies of Greed Island. He leaves his lawyer a contract specifying when to entrust them and their consoles to the auction: if nobody clears the game by the stated date, they are to be sold. His copies thus reach the Yorknew auction, where the game attracts the buyers’ interest.',
        },
      },
    },
  ],
  'jitonoda': [
    {
      episode: 61,
      chapter: 129,
      source: 'chapter',
      value: {
        title: {
          it: 'Le rassicurazioni del sindaco',
          en: 'The mayor’s assurances',
        },
        body: {
          it: 'Jitonoda cerca di rassicurare i visitatori dell’asta di York Shin City dopo gli attentati. Un notiziario riferisce che il sindaco considera eliminati i responsabili e presenta la città come sicura. Le sue parole non bastano a riportare il pubblico degli anni precedenti: l’affluenza all’asta scende al sessanta per cento di quella abituale.',
          en: 'Jitonoda tries to reassure visitors to the Yorknew auction after the attacks. A news report says that the mayor considers the attackers eliminated and presents the city as safe. These assurances fail to bring back the crowds of previous years: attendance at the auction falls to sixty percent of its usual level.',
        },
      },
    },
  ],
  'dwun': [
    {
      episode: 75,
      chapter: 184,
      value: {
        title: { it: 'L’ultima carta', en: 'The final card' },
        body: {
          it: 'Dwun accoglie [[gon-freecss|Gon]] nella sua stanza piena di giochi e rifiuti. Gli consegna l’ultima carta di Greed Island e una custodia per portarne tre fuori dal gioco. È un amico di [[ging-freecss|Ging]], che ha cambiato il suo nome per adattarne l’iniziale al titolo del gioco. Dwun se ne lamenta ancora mentre Gon ascolta i racconti su suo padre.',
          en: 'Dwun receives [[gon-freecss|Gon]] in his room full of games and rubbish. He gives him the final Greed Island card and a case for taking three cards outside the game. He is a friend of [[ging-freecss|Ging]], who changed his name so that its initial would fit the game’s title. Dwun still complains about it as Gon listens to stories about his father.',
        },
      },
    },
  ],
  'list': [
    {
      episode: 75,
      chapter: 184,
      source: 'chapter',
      value: {
        title: { it: 'I nomi dei creatori', en: 'The creators’ names' },
        body: {
          it: 'List accoglie [[gon-freecss|Gon]] nel castello e lo accompagna da [[dwun|Dwun]] per ricevere l’ultima carta. Si presenta come amico di [[ging-freecss|Ging]] e spiega che undici persone hanno creato Greed Island. Le iniziali dei loro nomi formano il titolo. Dopo la consegna della carta, una festa in città celebra il vincitore del gioco.',
          en: 'List welcomes [[gon-freecss|Gon]] to the castle and takes him to [[dwun|Dwun]] to receive the final card. He introduces himself as a friend of [[ging-freecss|Ging]] and explains that eleven people created Greed Island. Their initials form its title. After the card is handed over, a celebration in town honors the game’s winner.',
        },
      },
    },
  ],
  'eta': [
    {
      episode: 75,
      chapter: 184,
      source: 'chapter',
      value: {
        title: { it: 'L’ingresso e il quiz', en: 'The entrance and the quiz' },
        body: {
          it: 'Eeta accoglie [[gon-freecss|Gon]] quando entra a Greed Island e gli spiega come usare il libro e le carte. Alla fine conduce il quiz per assegnare l’ultima carta del gioco. [[list|List]] rivela che lei e [[elena|Elena]] sono gemelle e fanno parte degli undici creatori: anche le loro iniziali compongono il titolo di Greed Island.',
          en: 'Eta welcomes [[gon-freecss|Gon]] when he enters Greed Island and explains how to use the book and cards. At the end she runs the quiz that awards the game’s final card. [[list|List]] reveals that she and [[elena|Elena]] are twins and belong to its eleven creators: their initials also form part of the title Greed Island.',
        },
      },
    },
  ],
  'elena': [
    {
      episode: 75,
      chapter: 184,
      source: 'chapter',
      value: {
        title: { it: 'L’uscita dal gioco', en: 'Leaving the game' },
        body: {
          it: 'Elena si occupa dei giocatori che lasciano Greed Island. [[killua|Killua]] passa da lei quando esce per sostenere l’esame Hunter. Alla fine del gioco [[list|List]] rivela che Elena ed [[eta|Eeta]] sono gemelle e hanno contribuito a crearlo. Quando arriva il vincitore, Elena si congratula con [[gon-freecss|Gon]] e gli chiede di scegliere le tre carte da portare fuori.',
          en: 'Elena handles players leaving Greed Island. [[killua|Killua]] passes through when he leaves to take the Hunter Exam. At the end of the game [[list|List]] reveals that Elena and [[eta|Eta]] are twins who helped create it. When the winner arrives, Elena congratulates [[gon-freecss|Gon]] and asks him to choose the three cards he will take outside.',
        },
      },
    },
  ],
} satisfies Record<string, Timeline<Story>>
