import type { Story, Timeline } from '~/data/types'

/** Election stories, episodes 137–148 and chapters 319–339 (#914). */
export const electionChronicles = {
  'beans': [
    {
      episode: 137,
      chapter: 319,
      value: {
        title: { it: 'Il sorteggio delle regole', en: 'Drawing the rules' },
        body: {
          it: 'Beans viene chiamato alla riunione dello Zodiaco per estrarre le regole dell’elezione. Ogni membro ha presentato una proposta. Prima di scegliere un foglio, guarda [[ging-freecss|Ging]]. Estrae proprio la sua proposta e comincia a leggerla: tutti gli Hunter possono votare e sono anche candidati alla presidenza.',
          en: 'Beans is called into the Zodiacs’ meeting to draw the rules for the election. Each member has submitted a proposal. Before choosing a slip, he looks at [[ging-freecss|Ging]]. He draws Ging’s proposal and begins reading it: every Hunter is both a voter and a candidate for chairman.',
        },
      },
    },
  ],
  'botobai-gigante': [
    {
      episode: 137,
      chapter: 319,
      value: {
        title: { it: 'La riunione dello Zodiaco', en: 'The Zodiacs’ meeting' },
        body: {
          it: 'Botobai partecipa alla riunione convocata dopo la morte di [[netero|Netero]]. Si chiede perché il presidente non abbia chiesto il loro aiuto. Il vicepresidente gli propone di dirigere la discussione, ma Botobai rifiuta. Resta al tavolo mentre i membri cercano un modo per stabilire le regole dell’elezione.',
          en: 'Botobai attends the meeting called after [[netero|Netero]]’s death. He questions why the chairman did not ask for their help. The vice chairman offers to let him lead the discussion, but Botobai declines. He remains at the table as the members seek a way to decide the election rules.',
        },
      },
    },
    {
      episode: 144,
      chapter: 331,
      value: {
        title: { it: 'Il sostegno a Cheadle', en: 'Backing Cheadle' },
        body: {
          it: 'Botobai non è più tra i candidati rimasti in corsa. Prima del nuovo scrutinio invita gli Hunter ad affidare la presidenza a [[cheadle-yorkshire|Cheadle]]. Il comitato chiede ai presenti di non lasciare la sala finché non sarà stato scelto il presidente e mette a disposizione il necessario per proseguire il voto.',
          en: 'Botobai is no longer among the remaining candidates. Before the next count, he asks the Hunters to entrust the chairmanship to [[cheadle-yorkshire|Cheadle]]. The committee asks everyone to stay in the hall until a chairman has been chosen and provides what they need to continue the voting without leaving.',
        },
      },
    },
  ],
  'cheadle-yorkshire': [
    {
      episode: 137,
      chapter: 319,
      value: {
        title: { it: 'Una proposta a sorte', en: 'Choosing a proposal by lot' },
        body: {
          it: 'Cheadle partecipa alla riunione per eleggere il successore di [[netero|Netero]]. Quando la discussione non porta a una decisione, propone che ogni membro scriva le proprie regole e che una terza persona ne estragga una. Le proposte devono rispettare la partecipazione minima del novantacinque per cento richiesta dal presidente.',
          en: 'Cheadle attends the meeting to elect [[netero|Netero]]’s successor. When the discussion fails to produce a decision, she proposes that each member write down a set of rules and a third party draw one. Every proposal must respect the chairman’s requirement for at least ninety-five percent participation.',
        },
      },
    },
    {
      episode: 144,
      chapter: 332,
      value: {
        title: { it: 'Sostenere Leorio', en: 'Supporting Leorio' },
        body: {
          it: 'Cheadle chiede a [[ging-freecss|Ging]] come battere [[pariston-hill|Pariston]]. Lui le spiega che il vicepresidente non cerca semplicemente di vincere o perdere. Quando restano quattro candidati, [[mizaistom-nana|Mizaistom]] invita a votare per lei. Cheadle usa invece il proprio discorso per sostenere [[leorio-paradinight|Leorio]], il cui obiettivo è trovare una cura per [[gon-freecss|Gon]].',
          en: 'Cheadle asks [[ging-freecss|Ging]] how to defeat [[pariston-hill|Pariston]]. He explains that the vice chairman is not simply trying to win or lose. When four candidates remain, [[mizaistom-nana|Mizaistom]] asks the voters to support her. Cheadle instead uses her speech to back [[leorio-paradinight|Leorio]], whose goal is to find a cure for [[gon-freecss|Gon]].',
        },
      },
    },
    {
      episode: 146,
      chapter: 335,
      value: {
        title: {
          it: 'La nomina e le dimissioni',
          en: 'The appointment and resignation',
        },
        body: {
          it: '[[pariston-hill|Pariston]] vince l’elezione, nomina Cheadle vicepresidente e si dimette subito. Lei lo segue e gli chiede spiegazioni. Pariston dice che aveva accettato il vecchio incarico per giocare contro [[netero|Netero]] e che avrebbe voluto continuare. Le lascia cambiare le regole, ma promette di ostacolarla se renderà noiosa l’Associazione.',
          en: '[[pariston-hill|Pariston]] wins the election, appoints Cheadle vice chairman, and immediately resigns. She follows him and demands an explanation. Pariston says that he took his old position to play against [[netero|Netero]] and wishes they could have continued. He lets her change the rules but promises trouble if she makes the Association boring.',
        },
      },
    },
  ],
  'cluck': [
    {
      episode: 137,
      chapter: 320,
      source: 'episode',
      value: {
        title: { it: 'Le schede agli Hunter', en: 'Ballots for the Hunters' },
        body: {
          it: 'Clook partecipa alla discussione sulle regole dell’elezione e contesta l’obbligo di firmare le schede. Dopo la scelta delle regole, invia le schede ai seicentosessantuno Hunter dell’Associazione. Ogni elettore deve presentarsi con la propria scheda e far verificare la propria identità prima di poter votare.',
          en: 'Cluck takes part in the discussion of the election rules and objects to requiring signed ballots. Once the rules are chosen, she sends ballots to all six hundred and sixty-one Hunters in the Association. Each voter must bring a ballot and have their identity checked before casting a vote.',
        },
      },
    },
  ],
  'gel': [
    {
      episode: 137,
      chapter: 321,
      value: {
        title: {
          it: 'L’opposizione al vicepresidente',
          en: 'Opposing the vice chairman',
        },
        body: {
          it: 'Gell prende parte alla riunione dello Zodiaco dopo la morte di [[netero|Netero]]. Quando il vicepresidente propone di diventare presidente senza tenere l’elezione, gli risponde che nessuno dei presenti voterà per lui. La discussione continua e i membri scelgono di affidare a un sorteggio le regole del voto.',
          en: 'Gel takes part in the Zodiacs’ meeting after [[netero|Netero]]’s death. When the vice chairman proposes becoming chairman without an election, she replies that nobody in the room will vote for him. The discussion continues, and the members agree to choose the voting rules by drawing lots.',
        },
      },
    },
  ],
  'ginta': [
    {
      episode: 137,
      chapter: 320,
      value: {
        title: {
          it: 'Il controllo al seggio',
          en: 'Supervising the polling place',
        },
        body: {
          it: 'Ginta piange la morte di [[netero|Netero]] durante la riunione dello Zodiaco. Quando comincia l’elezione, controlla il seggio con gli altri membri incaricati. [[hisoka|Hisoka]] si presenta con una scheda bianca e Ginta gli chiede perché sia venuto. Capisce poi che sta osservando gli altri elettori per valutarne la forza.',
          en: 'Ginta mourns [[netero|Netero]] during the Zodiacs’ meeting. When the election begins, he helps supervise the polling place. [[hisoka|Hisoka]] arrives with a blank ballot, and Ginta asks why he has come. He later realizes that Hisoka is watching the other voters to assess how strong they are.',
        },
      },
    },
  ],
  'kanzai': [
    {
      episode: 137,
      chapter: 320,
      value: {
        title: { it: 'La firma sulle schede', en: 'Signing the ballots' },
        body: {
          it: 'Kanzai contesta la proposta di [[ging-freecss|Ging]] che obbliga gli elettori a firmare le schede. Ging risponde che conoscere il voto di ciascuno renderà l’elezione più divertente. In seguito Kanzai sorveglia il seggio e rimprovera [[hisoka|Hisoka]], che rimane a osservare gli altri Hunter dopo aver consegnato una scheda bianca.',
          en: 'Kanzai objects to [[ging-freecss|Ging]]’s rule requiring voters to sign their ballots. Ging replies that knowing how everyone voted will make the election more entertaining. Later, Kanzai supervises the polling place and tells [[hisoka|Hisoka]] to leave after he submits a blank ballot and stays to watch the other Hunters.',
        },
      },
    },
  ],
  'mizaistom-nana': [
    {
      episode: 137,
      chapter: 326,
      value: {
        title: {
          it: 'Le domande sui dispersi',
          en: 'Questions about missing Hunters',
        },
        body: {
          it: 'Mizaistom partecipa alla riunione dello Zodiaco per preparare l’elezione. Chiede spiegazioni al vicepresidente sui diciotto Hunter scomparsi nei tre anni del suo mandato. Ritiene insolito che tanti Hunter spariscano senza lasciare tracce. La discussione non risolve il problema e prosegue con la scelta delle regole elettorali.',
          en: 'Mizaistom joins the Zodiacs’ meeting to prepare the election. He questions the vice chairman about the eighteen Hunters who have disappeared during his three years in office. He considers so many unexplained disappearances unusual. The discussion does not settle the issue and moves on to choosing the election rules.',
        },
      },
    },
    {
      episode: 144,
      chapter: 332,
      value: {
        title: { it: 'I voti per Cheadle', en: 'Votes for Cheadle' },
        body: {
          it: 'Mizaistom arriva tra gli ultimi quattro candidati insieme a [[cheadle-yorkshire|Cheadle]], [[leorio-paradinight|Leorio]] e [[pariston-hill|Pariston]]. Durante il discorso rinuncia a chiedere voti per sé e invita gli Hunter a scegliere Cheadle. Lei, però, usa il proprio intervento per sostenere Leorio. I due cercano così di impedire la vittoria del vicepresidente.',
          en: 'Mizaistom reaches the final four with [[cheadle-yorkshire|Cheadle]], [[leorio-paradinight|Leorio]], and [[pariston-hill|Pariston]]. During his speech, he gives up asking for votes himself and urges the Hunters to choose Cheadle. She instead uses her own speech to support Leorio. Both are trying to prevent the vice chairman from winning.',
        },
      },
    },
  ],
  'pariston-hill': [
    {
      episode: 137,
      chapter: 321,
      value: {
        title: {
          it: 'La candidatura del vicepresidente',
          en: 'The vice chairman’s candidacy',
        },
        body: {
          it: 'Pariston arriva in ritardo alla riunione dello Zodiaco e si siede a capotavola. Propone di diventare presidente senza tenere l’elezione, provocando le proteste degli altri. Accetta poi di discutere le regole del voto. Al primo scrutinio ottiene più voti di tutti, ma il risultato non permette di concludere l’elezione.',
          en: 'Pariston arrives late to the Zodiacs’ meeting and takes the head of the table. He proposes becoming chairman without an election, drawing protests from the others. He then agrees to discuss voting rules. He leads the first count, but the result does not allow the election to conclude.',
        },
      },
    },
    {
      episode: 138,
      chapter: 321,
      value: {
        title: {
          it: 'Le nuove condizioni del voto',
          en: 'New conditions for voting',
        },
        body: {
          it: 'Dopo due scrutini senza risultato, Pariston propone che [[beans|Beans]] controlli le schede prima della consegna. Vuole anche confiscare temporaneamente le licenze a chi si astiene o vota in modo non valido. Gli altri membri discutono la proposta. Pariston precisa che perdere la licenza non toglierà a un Hunter il diritto di voto.',
          en: 'After two unsuccessful counts, Pariston proposes having [[beans|Beans]] check ballots before submission. He also wants to confiscate the licenses of Hunters who abstain or cast invalid votes. The other members debate his proposal. Pariston specifies that losing a license will not remove a Hunter’s right to vote.',
        },
      },
    },
    {
      episode: 145,
      chapter: 334,
      value: {
        title: {
          it: 'Aspettare il ritorno di Gon',
          en: 'Waiting for Gon’s return',
        },
        body: {
          it: 'Pariston resta in corsa contro [[leorio-paradinight|Leorio]] e continua il confronto fino all’arrivo di [[gon-freecss|Gon]], ormai guarito. [[cheadle-yorkshire|Cheadle]] capisce che Leorio ha perso la ragione per candidarsi. Pariston spiega di aver creduto alla fiducia di [[ging-freecss|Ging]] negli amici del figlio e di aver cercato di guadagnare tempo fino al suo ritorno.',
          en: 'Pariston remains in the race against [[leorio-paradinight|Leorio]] and continues the debate until a healed [[gon-freecss|Gon]] arrives. [[cheadle-yorkshire|Cheadle]] realizes that Leorio has lost his reason for running. Pariston explains that he believed [[ging-freecss|Ging]]’s confidence in his son’s friends and tried to buy time until Gon’s return.',
        },
      },
    },
    {
      episode: 146,
      chapter: 335,
      value: {
        title: { it: 'Vincere e dimettersi', en: 'Winning and resigning' },
        body: {
          it: 'Pariston riceve il voto di [[gon-freecss|Gon]] e vince contro [[leorio-paradinight|Leorio]]. Durante il discorso nomina [[cheadle-yorkshire|Cheadle]] vicepresidente e si dimette immediatamente. Quando lei lo affronta, parla di [[netero|Netero]] e del piacere di contrastarlo. Le dice che potrà cambiare le regole, ma la ostacolerà se l’Associazione diventerà noiosa.',
          en: 'Pariston receives [[gon-freecss|Gon]]’s vote and defeats [[leorio-paradinight|Leorio]]. During his speech, he appoints [[cheadle-yorkshire|Cheadle]] vice chairman and immediately resigns. When she confronts him, he speaks of [[netero|Netero]] and the enjoyment of opposing him. He says she can change the rules but promises to interfere if the Association becomes boring.',
        },
      },
    },
  ],
  'pyon': [
    {
      episode: 137,
      chapter: 320,
      value: {
        title: {
          it: 'Gli elettori al seggio',
          en: 'Voters at the polling place',
        },
        body: {
          it: 'Piyon partecipa alla riunione dello Zodiaco e poi controlla il seggio dell’Associazione. [[hisoka|Hisoka]] chiede di [[ging-freecss|Ging]], ma lei gli risponde che è già andato via. Gli dice di prendere la scheda e andarsene. I membri del comitato verificano l’identità degli Hunter che si presentano per votare.',
          en: 'Pyon attends the Zodiacs’ meeting and later supervises the Association’s polling place. [[hisoka|Hisoka]] asks about [[ging-freecss|Ging]], but she tells him that he has already left. She tells Hisoka to take his ballot and leave. The committee members check the identities of the Hunters who come to vote.',
        },
      },
    },
    {
      episode: 144,
      chapter: 332,
      value: {
        title: {
          it: 'Presentare i quattro candidati',
          en: 'Introducing the final four',
        },
        body: {
          it: 'Piyon conduce la riunione con gli ultimi quattro candidati alla presidenza. Presenta gli interventi e chiama [[leorio-paradinight|Leorio]], che è ancora assorto nei propri pensieri. Il comitato ha chiesto agli Hunter di restare finché l’elezione non sarà conclusa. I candidati espongono le proprie posizioni davanti al pubblico riunito nella sala.',
          en: 'Pyon hosts the meeting with the final four candidates for chairman. She introduces the speeches and calls [[leorio-paradinight|Leorio]], who is still lost in thought. The committee has asked the Hunters to stay until the election concludes. The candidates present their positions to the audience gathered in the hall.',
        },
      },
    },
  ],
  'saccho-kobayakawa': [
    {
      episode: 137,
      chapter: 326,
      value: {
        title: { it: 'In attesa del sorteggio', en: 'Waiting for the draw' },
        body: {
          it: 'Saccho partecipa alla riunione convocata per scegliere il successore di [[netero|Netero]]. Ricorda agli altri che il presidente voleva riunirli per questo compito e invita ad aspettare l’ultimo membro. Quando viene proposto il sorteggio delle regole, considera la possibilità che molte proposte penalizzino i due candidati meno graditi al gruppo.',
          en: 'Saccho attends the meeting to choose [[netero|Netero]]’s successor. He reminds the others that the chairman wanted them together for this task and asks them to wait for the last member. When drawing the rules is proposed, he considers how several submissions could disadvantage the group’s two least welcome candidates.',
        },
      },
    },
  ],
  'saiyu': [
    {
      episode: 137,
      chapter: 321,
      value: {
        title: { it: 'Discutere le regole', en: 'Debating the rules' },
        body: {
          it: 'Saiyu prende parte alla riunione dello Zodiaco dopo la morte di [[netero|Netero]]. Provoca [[ging-freecss|Ging]] ricordando le sue frequenti assenze. Durante la discussione invita il vicepresidente a dirigere la riunione, ma contesta l’idea di affidarsi al caso per scegliere il capo. Gli altri precisano che il sorteggio riguarda le regole.',
          en: 'Saiyu attends the Zodiacs’ meeting after [[netero|Netero]]’s death. He provokes [[ging-freecss|Ging]] by remarking on his frequent absences. During the discussion, he tells the vice chairman to lead the meeting, but objects to choosing their leader by chance. The proposal concerns drawing the rules for the election.',
        },
      },
    },
  ],
  'bushidora-ambitious': [
    {
      episode: 141,
      chapter: 326,
      value: {
        title: {
          it: 'Tra i sedici candidati',
          en: 'Among the sixteen candidates',
        },
        body: {
          it: '[[beans|Beans]] presenta Bushidora tra i sedici Hunter rimasti in corsa per la presidenza. Al primo scrutinio ha ricevuto otto voti. Il comitato trasmette una presentazione dei candidati con i loro risultati e obiettivi. L’elezione continua: il prossimo scrutinio deve ridurre il numero degli Hunter ancora in gara.',
          en: '[[beans|Beans]] introduces Bushidora as one of the sixteen Hunters still running for chairman. He received eight votes in the first count. The committee broadcasts introductions covering the candidates’ achievements and aims. The election continues, with the next count set to reduce the number of Hunters remaining in the race.',
        },
      },
    },
    {
      episode: 142,
      chapter: 328,
      value: {
        title: { it: 'La ricerca dell’Hunter', en: 'Searching for the Hunter' },
        body: {
          it: '[[morel-mackernasey|Morel]] avverte Bushidora del pericolo rappresentato da [[illumi|Illumi]] e dalle persone che controlla con gli aghi. Bushidora si accorda con [[teradein-neutral|Teradain]] e [[loupe-highland|Lupe]] per cercarlo e recuperare le vittime. I tre affidano agli Hunter il controllo dei dirigibili e sostengono che l’esame debba impedire l’ingresso di persone come Illumi.',
          en: '[[morel-mackernasey|Morel]] warns Bushidora about [[illumi|Illumi]] and the people controlled by his needles. Bushidora works with [[teradein-neutral|Teradein]] and [[loupe-highland|Loupe]] to find him and recover his victims. They assign Hunters to watch the airships and argue that the exam should prevent people like Illumi from joining the Association.',
        },
      },
    },
    {
      episode: 143,
      chapter: 329,
      value: {
        title: {
          it: 'La ricerca finisce con la sua morte',
          en: 'The search ends in his death',
        },
        body: {
          it: 'Gli Hunter mandati a seguire i dirigibili non rispondono più. Bushidora decide di affrontare personalmente [[illumi|Illumi]]. In seguito [[loupe-highland|Lupe]] comunica a [[teradein-neutral|Teradain]] che anche Bushidora è stato ucciso insieme agli altri uomini inviati. La ricerca organizzata per fermare chi usa gli aghi ha provocato nuove perdite tra gli Hunter.',
          en: 'The Hunters sent to follow the airships stop responding. Bushidora decides to confront [[illumi|Illumi]] himself. [[loupe-highland|Loupe]] later tells [[teradein-neutral|Teradein]] that Bushidora has also been killed with the other men they sent. The search organized to stop the needle user has caused further losses among the Hunters taking part.',
        },
      },
    },
  ],
  'cutie-beauty': [
    {
      episode: 141,
      chapter: 326,
      value: {
        title: {
          it: 'Tra i sedici candidati',
          en: 'Among the sixteen candidates',
        },
        body: {
          it: '[[beans|Beans]] presenta Cutie tra i sedici Hunter rimasti in corsa per la presidenza. Al primo scrutinio ha ricevuto dieci voti, condividendo l’undicesimo posto. Il comitato trasmette una presentazione dei candidati con i loro risultati e obiettivi. L’elezione continua: il prossimo scrutinio deve ridurre il numero degli Hunter ancora in gara.',
          en: '[[beans|Beans]] introduces Cutie as one of the sixteen Hunters still running for chairman. She received ten votes in the first count, tying for eleventh place. The committee broadcasts introductions covering the candidates’ achievements and aims. The election continues, with the next count set to reduce the number of Hunters remaining in the race.',
        },
      },
    },
    {
      episode: 143,
      chapter: 329,
      value: {
        title: { it: 'Il sostegno a Pariston', en: 'Backing Pariston' },
        body: {
          it: 'Cutie non entra tra gli otto candidati rimasti alla presidenza. Nel messaggio dopo l’eliminazione invita gli Hunter a sostenere [[pariston-hill|Pariston]]. Afferma che porterà avanti i suoi progetti per l’Associazione. La corsa continua senza di lei, mentre gli altri candidati eliminati trasmettono a loro volta i propri messaggi agli elettori.',
          en: 'Cutie fails to reach the eight candidates remaining in the election. In her message after elimination, she asks the Hunters to support [[pariston-hill|Pariston]]. She says that he will carry out her plans for the Association. The race continues without her as the other eliminated candidates also address the voters.',
        },
      },
    },
  ],
  'ickshonpe-katocha': [
    {
      episode: 141,
      chapter: 326,
      value: {
        title: {
          it: 'Tra i sedici candidati',
          en: 'Among the sixteen candidates',
        },
        body: {
          it: '[[beans|Beans]] presenta Ickshonpai tra i sedici Hunter rimasti in corsa per la presidenza. Al primo scrutinio si è classificato terzo con ventisei voti. Il comitato trasmette una presentazione dei candidati con i loro risultati e obiettivi. L’elezione continua: il prossimo scrutinio deve ridurre il numero degli Hunter ancora in gara.',
          en: '[[beans|Beans]] introduces Ickshonpe as one of the sixteen Hunters still running for chairman. He placed third with twenty-six votes in the first count. The committee broadcasts introductions covering the candidates’ achievements and aims. The election continues, with the next count set to reduce the number of Hunters remaining in the race.',
        },
      },
    },
    {
      episode: 144,
      chapter: 331,
      value: {
        title: { it: 'Uno scambio con Ging', en: 'A trade with Ging' },
        body: {
          it: 'Ickshonpai è fuori dalla corsa per la presidenza. Quando prende la parola prima dello scrutinio, si rivolge a [[ging-freecss|Ging]] per proporgli uno scambio di oggetti. La sua attenzione si sposta così dalla candidatura ai propri interessi. Gli Hunter rimangono nella sala per ascoltare i quattro candidati ancora in gara.',
          en: 'Ickshonpe is out of the race for chairman. When he speaks before the next count, he addresses [[ging-freecss|Ging]] to propose an exchange of items. His attention turns from the election to his own interests. The Hunters remain in the hall to hear the four candidates who are still running.',
        },
      },
      source: 'chapter',
    },
  ],
  'linne-horsdoeuvre': [
    {
      episode: 141,
      chapter: 326,
      value: {
        title: {
          it: 'Tra i sedici candidati',
          en: 'Among the sixteen candidates',
        },
        body: {
          it: '[[beans|Beans]] presenta Rinne tra i sedici Hunter rimasti in corsa per la presidenza. Al primo scrutinio ha ricevuto sei voti. Il comitato trasmette una presentazione dei candidati con i loro risultati e obiettivi. L’elezione continua: il prossimo scrutinio deve ridurre il numero degli Hunter ancora in gara.',
          en: '[[beans|Beans]] introduces Linne as one of the sixteen Hunters still running for chairman. She received six votes in the first count. The committee broadcasts introductions covering the candidates’ achievements and aims. The election continues, with the next count set to reduce the number of Hunters remaining in the race.',
        },
      },
    },
  ],
  'loupe-highland': [
    {
      episode: 141,
      chapter: 326,
      value: {
        title: {
          it: 'Tra i sedici candidati',
          en: 'Among the sixteen candidates',
        },
        body: {
          it: '[[beans|Beans]] presenta Lupe tra i sedici Hunter rimasti in corsa per la presidenza. Al primo scrutinio ha ricevuto cinque voti, condividendo il diciannovesimo posto. Il comitato trasmette una presentazione dei candidati con i loro risultati e obiettivi. L’elezione continua: il prossimo scrutinio deve ridurre il numero degli Hunter ancora in gara.',
          en: '[[beans|Beans]] introduces Loupe as one of the sixteen Hunters still running for chairman. He received five votes in the first count, tying for nineteenth place. The committee broadcasts introductions covering the candidates’ achievements and aims. The election continues, with the next count set to reduce the number of Hunters remaining in the race.',
        },
      },
    },
    {
      episode: 142,
      chapter: 328,
      value: {
        title: { it: 'Organizzare la ricerca', en: 'Organizing the search' },
        body: {
          it: 'Lupe si unisce a [[teradein-neutral|Teradain]] e [[bushidora-ambitious|Bushidora]] dopo l’avvertimento di [[morel-mackernasey|Morel]]. Devono cercare [[illumi|Illumi]] e recuperare le persone controllate dai suoi aghi. Il gruppo manda altri Hunter presso i dirigibili e discute la necessità di rendere più severo l’esame, per evitare che simili aggressori ottengano la licenza.',
          en: 'Loupe joins [[teradein-neutral|Teradein]] and [[bushidora-ambitious|Bushidora]] after [[morel-mackernasey|Morel]]’s warning. They must find [[illumi|Illumi]] and recover the people controlled by his needles. The group sends other Hunters to the airships and discusses making the exam stricter to prevent attackers like him from obtaining a license.',
        },
      },
    },
    {
      episode: 143,
      chapter: 329,
      value: {
        title: { it: 'Le perdite della squadra', en: 'The team’s losses' },
        body: {
          it: 'Quando gli uomini inviati non rispondono, Lupe propone di assumere altri Hunter dal gruppo legato a [[pariston-hill|Pariston]]. Pensa che eventuali perdite ridurrebbero anche i voti del vicepresidente. Deve poi comunicare a [[teradein-neutral|Teradain]] che le squadre e [[bushidora-ambitious|Bushidora]] sono state annientate. Intanto la sua candidatura non supera lo scrutinio.',
          en: 'When the men they sent stop responding, Loupe proposes hiring more Hunters from the pool connected to [[pariston-hill|Pariston]]. He thinks casualties could also reduce the vice chairman’s votes. He later has to tell [[teradein-neutral|Teradein]] that the teams and [[bushidora-ambitious|Bushidora]] have been wiped out. His own candidacy also fails to survive the count.',
        },
      },
    },
  ],
  'sanbica-norton': [
    {
      episode: 141,
      chapter: 326,
      value: {
        title: {
          it: 'Tra i sedici candidati',
          en: 'Among the sixteen candidates',
        },
        body: {
          it: '[[beans|Beans]] presenta Sanbika tra i sedici Hunter rimasti in corsa per la presidenza. Al primo scrutinio ha ricevuto dieci voti, condividendo l’undicesimo posto. Il comitato trasmette una presentazione dei candidati con i loro risultati e obiettivi. L’elezione continua: il prossimo scrutinio deve ridurre il numero degli Hunter ancora in gara.',
          en: '[[beans|Beans]] introduces Sanbica as one of the sixteen Hunters still running for chairman. She received ten votes in the first count, tying for eleventh place. The committee broadcasts introductions covering the candidates’ achievements and aims. The election continues, with the next count set to reduce the number of Hunters remaining in the race.',
        },
      },
    },
  ],
  'teradein-neutral': [
    {
      episode: 141,
      chapter: 326,
      value: {
        title: {
          it: 'Tra i sedici candidati',
          en: 'Among the sixteen candidates',
        },
        body: {
          it: '[[beans|Beans]] presenta Teradain tra i sedici Hunter rimasti in corsa per la presidenza. Al primo scrutinio si è classificato tredicesimo con nove voti. Il comitato trasmette una presentazione dei candidati con i loro risultati e obiettivi. L’elezione continua: il prossimo scrutinio deve ridurre il numero degli Hunter ancora in gara.',
          en: '[[beans|Beans]] introduces Teradein as one of the sixteen Hunters still running for chairman. He placed thirteenth with nine votes in the first count. The committee broadcasts introductions covering the candidates’ achievements and aims. The election continues, with the next count set to reduce the number of Hunters remaining in the race.',
        },
      },
    },
    {
      episode: 142,
      chapter: 328,
      value: {
        title: {
          it: 'Fermare chi usa gli aghi',
          en: 'Stopping the needle user',
        },
        body: {
          it: 'Teradain riceve da [[morel-mackernasey|Morel]] le informazioni su [[illumi|Illumi]] e sulle persone controllate dagli aghi. Con [[bushidora-ambitious|Bushidora]] e [[loupe-highland|Lupe]] organizza la ricerca, dando priorità al recupero delle vittime. Il gruppo manda altri Hunter a controllare i dirigibili e collega il caso alla propria richiesta di cambiare l’esame dell’Associazione.',
          en: 'Teradein receives [[morel-mackernasey|Morel]]’s information about [[illumi|Illumi]] and the people controlled by needles. With [[bushidora-ambitious|Bushidora]] and [[loupe-highland|Loupe]], he organizes a search that prioritizes recovering the victims. The group sends Hunters to watch the airships and links the case to its demand for changes to the Association’s exam.',
        },
      },
    },
    {
      episode: 143,
      chapter: 330,
      value: {
        title: {
          it: 'L’attacco durante l’annuncio',
          en: 'The attack during the announcement',
        },
        body: {
          it: 'Teradain perde il contatto con gli Hunter inviati alla ricerca. [[loupe-highland|Lupe]] gli comunica che le squadre e [[bushidora-ambitious|Bushidora]] sono state annientate. Teradain annuncia che Bushidora è morto mentre inseguiva un Hunter criminale. Durante l’annuncio, [[hisoka|Hisoka]] raggiunge la sua stanza e lo uccide, ponendo fine anche alla sua candidatura.',
          en: 'Teradein loses contact with the Hunters sent on the search. [[loupe-highland|Loupe]] tells him that the teams and [[bushidora-ambitious|Bushidora]] have been wiped out. Teradein announces that Bushidora died while pursuing a criminal Hunter. During the announcement, [[hisoka|Hisoka]] reaches his room and kills him, also ending his candidacy for chairman.',
        },
      },
    },
  ],
  'alluka-zoldyck': [
    {
      episode: 138,
      chapter: 321,
      value: {
        title: { it: 'La stanza chiusa', en: 'The locked room' },
        body: {
          it: 'Alluka vive rinchiusa in una stanza della tenuta degli Zoldick. [[killua|Killua]] torna a casa e chiede a [[silva|Silva]] di poterla vedere: crede che il suo potere sia l’unico modo per salvare [[gon-freecss|Gon]]. Il padre cerca di dissuaderlo, ma Killua insiste nel riconoscerla come parte della famiglia e ottiene di raggiungerla.',
          en: 'Alluka is confined to a room on the Zoldyck estate. [[killua|Killua]] returns home and asks [[silva|Silva]] to let him see her. He believes her power is the only way to save [[gon-freecss|Gon]]. His father tries to dissuade him, but Killua insists that she is family and is allowed to approach her room.',
        },
      },
    },
    {
      episode: 139,
      chapter: 324,
      value: {
        title: { it: 'Uscire dalla tenuta', en: 'Leaving the estate' },
        body: {
          it: 'Alluka ritrova [[killua|Killua]] e gioca con lui nella stanza sorvegliata dalla famiglia. Quando [[silva|Silva]] rifiuta di lasciarli uscire, Killua formula un desiderio con due possibili esiti, mettendo in pericolo la madre se non partono in tempo. Il padre apre la porta e Alluka lascia la tenuta con il fratello.',
          en: 'Alluka is reunited with [[killua|Killua]] and plays with him in the room watched by the family. When [[silva|Silva]] refuses to let them leave, Killua states a wish with two possible outcomes, placing their mother in danger if they fail to leave in time. Their father opens the door, and Alluka leaves with her brother.',
        },
      },
    },
    {
      episode: 146,
      chapter: 336,
      value: {
        title: { it: 'Proteggere anche Cosa', en: 'Protecting Nanika too' },
        body: {
          it: 'Quando [[killua|Killua]] ordina a [[nanika|Cosa]] di non mostrarsi più, Alluka si arrabbia con lui. Gli dice che Cosa sta piangendo e pretende che si scusi. Se vuole proteggerla, deve proteggere anche Cosa. Killua riconosce l’errore e Alluka lascia che l’altra presenza torni per ascoltare le sue scuse.',
          en: 'When [[killua|Killua]] orders [[nanika|Nanika]] never to appear again, Alluka becomes angry with him. She tells him that Nanika is crying and demands an apology. If he wants to protect her, he must protect Nanika too. Killua recognizes his mistake, and Alluka lets Nanika return to hear him apologize.',
        },
      },
    },
    {
      episode: 147,
      chapter: 338,
      value: {
        title: { it: 'Il viaggio con Killua', en: 'Traveling with Killua' },
        body: {
          it: 'Alluka accompagna [[killua|Killua]] e [[gon-freecss|Gon]] fino alla città vicina all’Albero del Mondo. I tre fanno una foto insieme. Killua spiega all’amico chi lo ha guarito e dice che vuole viaggiare con sua sorella. Alluka saluta Gon e parte con il fratello, che promette di restare in contatto con lui.',
          en: 'Alluka accompanies [[killua|Killua]] and [[gon-freecss|Gon]] to the town near the World Tree. The three take a photograph together. Killua tells his friend who healed him and says that he intends to travel with his sister. Alluka says goodbye to Gon and leaves with her brother, who promises to keep in touch.',
        },
      },
    },
  ],
  'nanika': [
    {
      episode: 139,
      chapter: 332,
      value: {
        title: { it: 'L’altra presenza', en: 'The other presence' },
        body: {
          it: 'Cosa condivide il corpo con [[alluka-zoldyck|Alluka]]. [[killua|Killua]] distingue le due dal modo in cui si rivolgono a lui: Alluka lo chiama fratello, mentre Cosa usa il suo nome. Sa che per guarire una persona deve toccarla. Per questo vuole portare sua sorella fino all’ospedale dove si trova [[gon-freecss|Gon]].',
          en: 'Nanika shares [[alluka-zoldyck|Alluka]]’s body. [[killua|Killua]] distinguishes them by how they address him: Alluka calls him her brother, while Nanika uses his name. He knows that healing requires physical contact. He therefore intends to take his sister to the hospital where [[gon-freecss|Gon]] is being treated.',
        },
      },
    },
    {
      episode: 145,
      chapter: 333,
      value: {
        title: { it: 'La guarigione di Gon', en: 'Healing Gon' },
        body: {
          it: '[[killua|Killua]] porta [[alluka-zoldyck|Alluka]] nella stanza di [[gon-freecss|Gon]] e chiede a Cosa di guarirlo. Lei vuole toccargli la mano. Killua solleva il braccio dell’amico e vede quanto sia ridotto male. Cosa comincia la cura e una grande quantità di aura si diffonde dall’ospedale, facendosi sentire anche dagli Hunter riuniti per l’elezione.',
          en: '[[killua|Killua]] brings [[alluka-zoldyck|Alluka]] into [[gon-freecss|Gon]]’s room and asks Nanika to heal him. She needs to touch his hand. Killua lifts his friend’s arm and sees how badly damaged it is. Nanika begins the treatment, and a great surge of aura spreads from the hospital, reaching the Hunters gathered for the election.',
        },
      },
    },
    {
      episode: 146,
      chapter: 336,
      value: {
        title: { it: 'Le scuse di Killua', en: 'Killua’s apology' },
        body: {
          it: 'Su ordine di [[killua|Killua]], Cosa rimanda [[illumi|Illumi]] alla tenuta. Killua le dice poi di non mostrarsi mai più e lei accetta piangendo. [[alluka-zoldyck|Alluka]] interviene e chiede al fratello di scusarsi. Quando Cosa torna, Killua promette di proteggerla e di restare con lei. Lei lo perdona e lo abbraccia.',
          en: 'At [[killua|Killua]]’s command, Nanika sends [[illumi|Illumi]] back to the estate. Killua then tells her never to appear again, and she agrees through tears. [[alluka-zoldyck|Alluka]] intervenes and demands an apology. When Nanika returns, Killua promises to protect her and stay with her. She forgives him, and they embrace.',
        },
      },
    },
  ],
  'mitsuba': [
    {
      episode: 138,
      chapter: 322,
      value: {
        title: { it: 'Le richieste rifiutate', en: 'Refusing the requests' },
        body: {
          it: 'Mitsuba si occupa di [[alluka-zoldyck|Alluka]] da piccola. Dopo aver esaudito tre richieste, vede cambiare il volto della bambina e cerca aiuto. [[killua|Killua]] interviene e le chiede di mantenere il segreto, ma lei ha già parlato con sua madre. In un esperimento successivo, rifiuta quattro richieste consecutive e muore.',
          en: 'Mitsuba looks after [[alluka-zoldyck|Alluka]] as a child. After fulfilling three requests, she sees the girl’s face change and seeks help. [[killua|Killua]] intervenes and asks her to keep it secret, but she has already told his mother. In a later experiment, she refuses four consecutive requests and dies.',
        },
      },
    },
  ],
  'kasuga': [
    {
      episode: 138,
      chapter: 322,
      value: {
        title: { it: 'Il prezzo del desiderio', en: 'The price of a wish' },
        body: {
          it: '[[illumi|Illumi]] incarica Kasuga di esaudire le richieste di [[alluka-zoldyck|Alluka]] e promette di ignorare la sua relazione sentimentale se riesce. La bambina le chiede parti del corpo, tra cui il fegato e il cervello. Kasuga rifiuta quattro volte e muore. L’esperimento mostra che le richieste possono mettere in pericolo chi le riceve.',
          en: '[[illumi|Illumi]] assigns Kasuga to fulfill [[alluka-zoldyck|Alluka]]’s requests and promises to overlook her romantic relationship if she succeeds. The girl asks for parts of her body, including her liver and brain. Kasuga refuses four times and dies. The experiment shows that the requests can endanger the person receiving them.',
        },
      },
    },
  ],
  'yasuha': [
    {
      episode: 139,
      chapter: 323,
      value: {
        title: { it: 'Il denaro dal cielo', en: 'Money from the sky' },
        body: {
          it: 'Yasuha si occupa di [[alluka-zoldyck|Alluka]] dopo la morte della domestica precedente. Quando può esprimere un desiderio, chiede di diventare ricca e il denaro cade da un dirigibile. L’episodio viene discusso dalla famiglia. Il prezzo del desiderio ricade su [[kasuga|Kasuga]], che riceve richieste impossibili da esaudire senza morire.',
          en: 'Yasuha looks after [[alluka-zoldyck|Alluka]] after the previous attendant dies. When she can make a wish, she asks to become rich, and money falls from an airship. The family investigates the incident. The price of her wish falls on [[kasuga|Kasuga]], who receives requests she cannot fulfill without dying.',
        },
      },
    },
  ],
  'muna': [
    {
      episode: 139,
      chapter: 323,
      value: {
        title: { it: 'La visita alla tenuta', en: 'A visit to the estate' },
        body: {
          it: 'Muna visita la tenuta degli Zoldick e fotografa il paesaggio. [[milluki|Milluki]] lo accompagna insieme a [[alluka-zoldyck|Alluka]]. Quando la bambina gli rivolge delle richieste, Milluki gli dice di rispondere sempre di no. La visita fa parte degli esperimenti con cui la famiglia cerca di capire il funzionamento del suo potere.',
          en: 'Muna visits the Zoldyck estate and takes photographs of the scenery. [[milluki|Milluki]] accompanies him with [[alluka-zoldyck|Alluka]]. When the girl makes requests, Milluki tells him to keep saying no. The visit is part of the family’s experiments to understand how her power works and what happens when requests are refused.',
        },
      },
    },
  ],
  'tsubone': [
    {
      episode: 140,
      chapter: 324,
      value: {
        title: {
          it: 'Una scorta con condizioni',
          en: 'An escort with conditions',
        },
        body: {
          it: '[[silva|Silva]] incarica Tsubone e [[amane|Amane]] di accompagnare [[killua|Killua]] e [[alluka-zoldyck|Alluka]]. Se Killua infrange le regole, devono riportarlo a casa. Alluka chiede a Tsubone un’unghia e lei gliela consegna. Poi si nasconde, impedendo alla bambina di completare le altre richieste e a Killua di esprimere un nuovo desiderio.',
          en: '[[silva|Silva]] assigns Tsubone and [[amane|Amane]] to accompany [[killua|Killua]] and [[alluka-zoldyck|Alluka]]. They must take Killua home if he breaks the rules. Alluka asks Tsubone for a fingernail, which she gives her. Tsubone then hides, preventing the girl from completing her requests and Killua from making another wish.',
        },
      },
    },
    {
      episode: 142,
      chapter: 328,
      value: {
        title: { it: 'Raggiungere Killua', en: 'Catching up with Killua' },
        body: {
          it: 'Tsubone segue [[killua|Killua]] e [[alluka-zoldyck|Alluka]] mentre fuggono dalla scorta. Quando la velocità del ragazzo diventa troppo alta, chiama [[amane|Amane]] e [[canary|Canary]] e si trasforma in una motocicletta alimentata dalla loro aura. Lo raggiungono sulla strada, ma Killua torna nel bosco e le costringe a prevedere la sua destinazione.',
          en: 'Tsubone follows [[killua|Killua]] and [[alluka-zoldyck|Alluka]] as they escape the escort. When the boy becomes too fast, she calls [[amane|Amane]] and [[canary|Canary]] and transforms into a motorcycle powered by their aura. They catch up on the road, but Killua returns to the forest, forcing them to predict his destination.',
        },
      },
    },
    {
      episode: 143,
      chapter: 330,
      value: {
        title: { it: 'Le altre due unghie', en: 'Two more fingernails' },
        body: {
          it: 'Tsubone scopre che [[illumi|Illumi]] ha usato le immagini del suo monocolo per seguire [[killua|Killua]]. Quando [[alluka-zoldyck|Alluka]] le chiede altre due unghie, gliele consegna e completa le tre richieste. Killua usa il desiderio per farle guarire la mano. La bambina si addormenta per la stanchezza dopo averla curata.',
          en: 'Tsubone learns that [[illumi|Illumi]] has used the images from her monocle to track [[killua|Killua]]. When [[alluka-zoldyck|Alluka]] asks for two more fingernails, she gives them and completes the three requests. Killua uses the wish to have her hand healed. The girl falls asleep from exhaustion after treating her.',
        },
      },
    },
  ],
  'amane': [
    {
      episode: 140,
      chapter: 324,
      value: {
        title: { it: 'L’incarico di scorta', en: 'The escort assignment' },
        body: {
          it: 'Amane si presenta a [[canary|Canary]] prima della partenza. [[silva|Silva]] incarica lei e [[tsubone|Tsubone]] di accompagnare [[killua|Killua]] e [[alluka-zoldyck|Alluka]]. La scorta deve rispettare le restrizioni imposte dalla famiglia e riportare Killua a casa se le viola. Anche [[gotoh|Gotoh]] e Canary partecipano al viaggio verso l’ospedale.',
          en: 'Amane introduces herself to [[canary|Canary]] before they leave. [[silva|Silva]] assigns her and [[tsubone|Tsubone]] to accompany [[killua|Killua]] and [[alluka-zoldyck|Alluka]]. The escort must enforce the family’s restrictions and take Killua home if he breaks them. [[gotoh|Gotoh]] and Canary also join the journey toward the hospital where his friend is being treated.',
        },
      },
    },
    {
      episode: 142,
      chapter: 328,
      value: {
        title: {
          it: 'L’inseguimento fino all’aeroporto',
          en: 'The pursuit to the airport',
        },
        body: {
          it: 'Con [[canary|Canary]], Amane usa la propria aura per alimentare [[tsubone|Tsubone]], trasformata in motocicletta. Raggiungono [[killua|Killua]], ma lui si sottrae ancora alla scorta. Lo aspettano all’aeroporto e ricevono l’ordine di preparare più dirigibili. Killua parte con [[alluka-zoldyck|Alluka]] mentre loro si occupano delle prenotazioni, provocando la rabbia di Amane.',
          en: 'With [[canary|Canary]], Amane uses her aura to power [[tsubone|Tsubone]]’s motorcycle form. They catch up with [[killua|Killua]], but he escapes the escort again. They wait at the airport and receive orders to prepare several airships. Killua leaves with [[alluka-zoldyck|Alluka]] while they handle the bookings, angering Amane.',
        },
      },
    },
    {
      episode: 148,
      chapter: 339,
      value: {
        title: { it: 'Davanti alla tomba', en: 'At the graveside' },
        body: {
          it: 'Amane si trova con [[canary|Canary]] alla tomba di [[gotoh|Gotoh]]. Vede poi il maggiordomo comparire vivo davanti a loro e non capisce come sia possibile. L’uomo rivela di essere il figlio dei [[kiriko|Kiriko]], che ne ha assunto l’aspetto. La morte di Gotoh può così restare nascosta a [[killua|Killua]] e [[alluka-zoldyck|Alluka]].',
          en: 'Amane stands with [[canary|Canary]] at [[gotoh|Gotoh]]’s grave. She then sees the butler appear alive before them and cannot understand how this is possible. The man reveals that he is the [[kiriko|Kiriko]] son, wearing Gotoh’s appearance. The death can therefore remain hidden from [[killua|Killua]] and [[alluka-zoldyck|Alluka]].',
        },
      },
    },
  ],
  'hishita': [
    {
      episode: 143,
      chapter: 329,
      value: {
        title: { it: 'L’autista controllato', en: 'The controlled driver' },
        body: {
          it: '[[killua|Killua]] chiede a [[canary|Canary]] di far preparare delle auto a Hishita. Quando arriva con [[alluka-zoldyck|Alluka]], lo trova in attesa per condurli in ospedale. Il veicolo viene circondato dalle persone controllate con gli aghi. Hishita rifiuta di ripartire senza l’ordine di [[illumi|Illumi]], rivelando di essere caduto sotto il suo controllo.',
          en: '[[killua|Killua]] asks [[canary|Canary]] to have Hishita prepare cars. When he arrives with [[alluka-zoldyck|Alluka]], Hishita is waiting to drive them to the hospital. People controlled by needles surround the vehicle. Hishita refuses to move without [[illumi|Illumi]]’s permission, revealing that he too has fallen under Illumi’s control.',
        },
      },
    },
  ],
  'ging-freecss': [
    {
      episode: 137,
      chapter: 320,
      value: {
        title: {
          it: 'Le regole preparate in anticipo',
          en: 'Preparing the rules in advance',
        },
        body: {
          it: 'Ging prevede che lo Zodiaco sceglierà le regole elettorali con un sorteggio e consegna in anticipo il proprio foglio a [[beans|Beans]]. Inserisce anche la propria nomina a capo del comitato. Quando gli altri la contestano, rinuncia subito a quella clausola, ottenendo che accettino le altre regole della sua proposta.',
          en: 'Ging predicts that the Zodiacs will choose the election rules by drawing lots and gives his slip to [[beans|Beans]] beforehand. He includes his own appointment as committee chairman. When the others object, he immediately gives up that clause, securing their acceptance of the other rules in his proposal.',
        },
      },
    },
    {
      episode: 140,
      chapter: 325,
      value: {
        title: { it: 'Il pugno di Leorio', en: 'Leorio’s punch' },
        body: {
          it: 'Ging assiste alla riunione elettorale quando [[leorio-paradinight|Leorio]] gli chiede perché non sia andato a trovare [[gon-freecss|Gon]]. Non offre la risposta che Leorio si aspetta. Il giovane colpisce il podio con il Nen e il pugno raggiunge Ging al volto. Ging riceve il colpo mentre gli Hunter presenti applaudono Leorio.',
          en: 'Ging attends the election meeting when [[leorio-paradinight|Leorio]] asks why he has not visited [[gon-freecss|Gon]]. He does not give the answer Leorio expects. The young Hunter strikes the podium with Nen, and the punch reaches Ging’s face. Ging takes the blow while the assembled Hunters applaud Leorio.',
        },
      },
    },
    {
      episode: 146,
      chapter: 335,
      value: {
        title: { it: 'L’incontro con suo figlio', en: 'Meeting his son' },
        body: {
          it: '[[gon-freecss|Gon]] raggiunge Ging e gli parla di [[kite|Kaito]], convinto di essere responsabile della sua morte. Ging gli dice che Kaito si è fidato di lui e che deve scusarsi direttamente con lui. Gli spiega anche di avergli insegnato il Nen e che una delle sue tecniche può avergli permesso di sopravvivere.',
          en: '[[gon-freecss|Gon]] reaches Ging and talks about [[kite|Kite]], believing himself responsible for his death. Ging says that Kite trusted him and that he must apologize to Kite directly. He also explains that he taught Kite Nen and that one of his techniques may have allowed him to survive.',
        },
      },
    },
    {
      episode: 148,
      chapter: 339,
      value: {
        title: {
          it: 'Il racconto della spedizione',
          en: 'The story of the expedition',
        },
        body: {
          it: 'In cima all’Albero del Mondo, Ging racconta a [[gon-freecss|Gon]] perché è diventato Hunter. Per esplorare una tomba ha riunito persone interessate alla ricerca, costruendo legami che considera più importanti del risultato. Gli parla poi del mondo esterno e dei requisiti per raggiungerlo. Gon gli restituisce la licenza e i due continuano a raccontarsi le proprie esperienze.',
          en: 'At the top of the World Tree, Ging tells [[gon-freecss|Gon]] why he became a Hunter. To explore a tomb, he gathered people interested in the research, forming bonds he values more than the discovery itself. He then describes the outside world and the conditions for reaching it. Gon returns his license, and they continue sharing their experiences.',
        },
      },
    },
  ],
  'killua': [
    {
      episode: 138,
      chapter: 322,
      value: {
        title: { it: 'Tornare da sua sorella', en: 'Returning for his sister' },
        body: {
          it: 'Killua torna alla tenuta e chiede a [[silva|Silva]] di vedere [[alluka-zoldyck|Alluka]]. Crede che il suo potere possa salvare [[gon-freecss|Gon]]. Il padre gli ricorda i rischi, ma Killua insiste. Davanti alla stanza ripercorre gli esperimenti della famiglia: tre richieste esaudite permettono un desiderio, mentre quattro rifiuti consecutivi provocano delle morti.',
          en: 'Killua returns to the estate and asks [[silva|Silva]] to let him see [[alluka-zoldyck|Alluka]]. He believes her power can save [[gon-freecss|Gon]]. His father warns him of the risks, but Killua insists. Outside her room, he reviews the family’s experiments: fulfilling three requests permits a wish, while four consecutive refusals cause deaths.',
        },
      },
    },
    {
      episode: 139,
      chapter: 324,
      value: {
        title: {
          it: 'Il desiderio con due esiti',
          en: 'A wish with two outcomes',
        },
        body: {
          it: '[[silva|Silva]] vuole che Killua esprima il desiderio nella stanza di [[alluka-zoldyck|Alluka]]. Killua ordina invece che sua madre muoia se non lasciano la tenuta entro mezz’ora, oppure che Alluka gli dia un bacio se riescono. Silva apre la porta. Killua parte deciso a salvare sia sua sorella sia [[gon-freecss|Gon]].',
          en: '[[silva|Silva]] wants Killua to make his wish in [[alluka-zoldyck|Alluka]]’s room. Killua instead orders that his mother die if they fail to leave the estate within half an hour, or that Alluka kiss him if they succeed. Silva opens the door. Killua leaves determined to save both his sister and [[gon-freecss|Gon]].',
        },
      },
    },
    {
      episode: 142,
      chapter: 328,
      value: {
        title: {
          it: 'Gli Hunter contro gli aghi',
          en: 'Hunters against the needles',
        },
        body: {
          it: 'Killua raggiunge l’aeroporto e chiede più dirigibili per confondere [[illumi|Illumi]]. Parte con [[alluka-zoldyck|Alluka]] e telefona a [[morel-mackernasey|Morel]]. Prevede che Illumi userà persone controllate dagli aghi e propone di coinvolgere gli Hunter che vogliono cambiare le regole dell’Associazione. Morel accetta di contattarli e organizzare la ricerca.',
          en: 'Killua reaches the airport and requests several airships to confuse [[illumi|Illumi]]. He leaves with [[alluka-zoldyck|Alluka]] and calls [[morel-mackernasey|Morel]]. He predicts that Illumi will use people controlled by needles and suggests involving Hunters who want to change the Association’s rules. Morel agrees to contact them and arrange a search.',
        },
      },
    },
    {
      episode: 143,
      chapter: 330,
      value: {
        title: {
          it: 'Guarire la mano di Tsubone',
          en: 'Healing Tsubone’s hand',
        },
        body: {
          it: '[[illumi|Illumi]] circonda Killua e [[alluka-zoldyck|Alluka]] con persone controllate dagli aghi. [[tsubone|Tsubone]] si mostra e completa le richieste della bambina consegnandole altre due unghie. Killua chiede di guarire la sua mano. Spiega che le richieste dopo una guarigione non sono crudeli, ma Illumi continua a sospettare che gli stia nascondendo altre regole.',
          en: '[[illumi|Illumi]] surrounds Killua and [[alluka-zoldyck|Alluka]] with people controlled by needles. [[tsubone|Tsubone]] appears and completes the girl’s requests by giving her two more fingernails. Killua asks for Tsubone’s hand to be healed. He explains that requests after healing are not cruel, but Illumi still suspects that he is hiding other rules.',
        },
      },
    },
    {
      episode: 145,
      chapter: 333,
      value: {
        title: {
          it: 'Chiedere la guarigione di Gon',
          en: 'Asking for Gon to be healed',
        },
        body: {
          it: 'Nella stanza separata, Killua spiega a [[alluka-zoldyck|Alluka]] che [[gon-freecss|Gon]] ha bisogno di aiuto. Le promette che resteranno insieme e chiede a [[nanika|Cosa]] di riportare l’amico alla normalità. Quando deve prendergli la mano, vede le condizioni del suo braccio. Cosa lo cura e dall’ospedale si sprigiona un’enorme quantità di aura.',
          en: 'In the separate room, Killua explains to [[alluka-zoldyck|Alluka]] that [[gon-freecss|Gon]] needs help. He promises that they will stay together and asks [[nanika|Nanika]] to restore his friend. When he must take Gon’s hand, he sees the condition of his arm. Nanika heals him, releasing an enormous surge of aura from the hospital.',
        },
      },
    },
    {
      episode: 146,
      chapter: 336,
      value: {
        title: { it: 'La promessa a entrambe', en: 'A promise to both' },
        body: {
          it: 'Killua ordina a [[nanika|Cosa]] di rimandare [[illumi|Illumi]] a casa. Poi cerca di impedirle di mostrarsi ancora, pensando di liberare [[alluka-zoldyck|Alluka]]. Sua sorella protesta e gli impone di proteggere entrambe. Killua capisce di aver sbagliato, richiama Cosa e si scusa. Promette che resteranno insieme e che non dovrà più esaudire i desideri degli altri.',
          en: 'Killua orders [[nanika|Nanika]] to send [[illumi|Illumi]] home. He then tries to stop her from appearing again, believing this will free [[alluka-zoldyck|Alluka]]. His sister protests and insists that he protect them both. Killua recognizes his mistake, calls Nanika back, and apologizes. He promises that they will stay together and she will no longer have to grant other people’s wishes.',
        },
      },
    },
    {
      episode: 147,
      chapter: 338,
      value: {
        title: {
          it: 'Viaggiare con sua sorella',
          en: 'Traveling with his sister',
        },
        body: {
          it: 'Killua incontra [[gon-freecss|Gon]] presso l’Albero del Mondo e gli spiega che [[alluka-zoldyck|Alluka]] lo ha guarito. Gli racconta del potere di [[nanika|Cosa]] e della decisione di proteggerle entrambe. Gon si scusa per averlo escluso durante lo scontro. Killua parte con sua sorella e promette di mantenere i contatti con l’amico.',
          en: 'Killua meets [[gon-freecss|Gon]] near the World Tree and explains that [[alluka-zoldyck|Alluka]] healed him. He tells him about [[nanika|Nanika]]’s power and his decision to protect them both. Gon apologizes for shutting him out during the battle. Killua leaves with his sister and promises to keep in contact with his friend.',
        },
      },
    },
  ],
  'silva': [
    {
      episode: 138,
      chapter: 322,
      value: {
        title: { it: 'L’accesso alla stanza', en: 'Access to the room' },
        body: {
          it: '[[killua|Killua]] chiede a Silva di raggiungere [[alluka-zoldyck|Alluka]] per salvare [[gon-freecss|Gon]]. Silva sostiene che il suo potere non possa essere controllato. Il figlio gli ricorda la promessa di non tradire gli amici e insiste nel considerarla parte della famiglia. Silva lo accompagna alla stanza e gli chiede di ripetere le regole note.',
          en: '[[killua|Killua]] asks Silva to let him reach [[alluka-zoldyck|Alluka]] to save [[gon-freecss|Gon]]. Silva argues that her power cannot be controlled. His son reminds him of the promise not to betray his friends and insists that she is family. Silva takes him to her room and asks him to repeat the known rules.',
        },
      },
    },
  ],
  'milluki': [
    {
      episode: 139,
      chapter: 324,
      value: {
        title: {
          it: 'Il computer e le regole',
          en: 'The computer and the rules',
        },
        body: {
          it: 'Milluki osserva [[killua|Killua]] e [[alluka-zoldyck|Alluka]] attraverso le telecamere. Ha usato il potere della sorella per ottenere un computer e ripete a [[silva|Silva]] le regole che conosce. Quando Killua formula un desiderio con due esiti, Milluki ammette di non sapere che fosse possibile e vede il padre lasciarli partire.',
          en: 'Milluki watches [[killua|Killua]] and [[alluka-zoldyck|Alluka]] through the cameras. He has used his sister’s power to obtain a computer and repeats the rules he knows to [[silva|Silva]]. When Killua states a wish with two possible outcomes, Milluki admits that he did not know this was possible and sees his father let them leave.',
        },
      },
    },
  ],
  'illumi': [
    {
      episode: 139,
      chapter: 323,
      value: {
        title: { it: 'Il rischio del desiderio', en: 'The risk of the wish' },
        body: {
          it: 'Illumi spiega a [[hisoka|Hisoka]] gli esperimenti sul potere di [[alluka-zoldyck|Alluka]]. Le morti dipendono dalla grandezza del desiderio precedente e dai legami di chi rifiuta le richieste. Teme che [[killua|Killua]], cercando di salvare [[gon-freecss|Gon]], provochi conseguenze per tutta la famiglia. Vuole impedire che il fratello proceda senza rivelargli ciò che sa.',
          en: 'Illumi explains the experiments with [[alluka-zoldyck|Alluka]]’s power to [[hisoka|Hisoka]]. The deaths depend on the size of the previous wish and the relationships of whoever refuses the requests. He fears that [[killua|Killua]]’s attempt to save [[gon-freecss|Gon]] could endanger the entire family. He wants to stop his brother from acting without revealing what he knows.',
        },
      },
    },
    {
      episode: 143,
      chapter: 330,
      value: {
        title: { it: 'La regola della guarigione', en: 'The healing rule' },
        body: {
          it: 'Illumi raggiunge [[killua|Killua]] grazie alle immagini trasmesse dal monocolo di [[tsubone|Tsubone]]. Lo circonda con le persone controllate dagli aghi e lo avverte delle possibili vittime del desiderio. Killua fa guarire la mano di Tsubone e rivela che le richieste successive a una guarigione non sono crudeli. Illumi lo lascia proseguire, pur sospettando altri segreti.',
          en: 'Illumi tracks [[killua|Killua]] through the images transmitted by [[tsubone|Tsubone]]’s monocle. He surrounds him with people controlled by needles and warns of possible victims of the wish. Killua has Tsubone’s hand healed and reveals that requests following healing are not cruel. Illumi lets him continue but suspects further secrets.',
        },
      },
    },
    {
      episode: 146,
      chapter: 336,
      value: {
        title: {
          it: 'L’ordine senza prezzo',
          en: 'The command without a price',
        },
        body: {
          it: 'Illumi deduce che gli ordini di [[killua|Killua]] a [[nanika|Cosa]] non seguono le condizioni dei normali desideri. Propone di controllare il potere insieme a lui. Killua rifiuta e ordina a Cosa di rimandarlo alla tenuta. Illumi compare davanti alla famiglia e considera ora il controllo del fratello un mezzo per ottenere quel potere.',
          en: 'Illumi deduces that [[killua|Killua]]’s commands to [[nanika|Nanika]] do not follow the conditions of ordinary wishes. He proposes controlling the power with him. Killua refuses and orders Nanika to send him back to the estate. Illumi appears before the family and now considers controlling his brother a way to obtain that power.',
        },
      },
    },
  ],
  'hisoka': [
    {
      episode: 137,
      chapter: 320,
      value: {
        title: { it: 'La scheda bianca', en: 'The blank ballot' },
        body: {
          it: 'Hisoka si presenta al seggio con una scheda bianca e osserva gli Hunter per valutarne la forza. Chiede di [[ging-freecss|Ging]], che è già andato via. Riconosce [[illumi|Illumi]] sotto il suo travestimento. In seguito viene a sapere che [[gon-freecss|Gon]] è in fin di vita e che [[killua|Killua]] è tornato dalla famiglia.',
          en: 'Hisoka arrives at the polling place with a blank ballot and watches the Hunters to assess their strength. He asks about [[ging-freecss|Ging]], who has already left. He recognizes [[illumi|Illumi]] beneath his disguise. He later learns that [[gon-freecss|Gon]] is near death and [[killua|Killua]] has returned to his family.',
        },
      },
    },
    {
      episode: 142,
      chapter: 327,
      value: {
        title: { it: 'L’agguato a Gotoh', en: 'The ambush on Gotoh' },
        body: {
          it: 'Hisoka attacca [[gotoh|Gotoh]] e le altre persone della scorta nel bosco. Gotoh manda avanti le compagne e lo affronta con monete lanciate come proiettili. Hisoka sfrutta la propria aura elastica per sottrarsi ai colpi e restituire le monete da più direzioni. Durante quella distrazione, raggiunge Gotoh e gli taglia la gola.',
          en: 'Hisoka attacks [[gotoh|Gotoh]] and the other escorts in the forest. Gotoh sends his companions ahead and fights with coins fired like bullets. Hisoka uses his elastic aura to evade the attacks and return the coins from several directions. During that distraction, he reaches Gotoh and cuts his throat.',
        },
      },
    },
  ],
  'leorio-paradinight': [
    {
      episode: 140,
      chapter: 325,
      value: {
        title: { it: 'Il pugno contro Ging', en: 'Punching Ging' },
        body: {
          it: 'Leorio cerca notizie di [[gon-freecss|Gon]] e parla con [[gotoh|Gotoh]] delle condizioni per le cure. Poi raggiunge la riunione degli Hunter e chiede a [[ging-freecss|Ging]] perché non abbia visitato suo figlio. Le risposte lo fanno arrabbiare: colpisce il podio e il pugno attraversa la distanza fino al volto di Ging. I presenti applaudono.',
          en: 'Leorio seeks news of [[gon-freecss|Gon]] and speaks with [[gotoh|Gotoh]] about the conditions for his treatment. He then goes to the Hunters’ meeting and asks [[ging-freecss|Ging]] why he has not visited his son. Angered by the answers, he strikes the podium, sending a punch across the room into Ging’s face. The audience applauds.',
        },
      },
    },
    {
      episode: 144,
      chapter: 332,
      value: {
        title: { it: 'Salvare Gon prima di tutto', en: 'Saving Gon first' },
        body: {
          it: 'Leorio arriva tra gli ultimi quattro candidati alla presidenza. Nel discorso dichiara che userà l’Associazione per il proprio obiettivo: salvare [[gon-freecss|Gon]]. Chiede a chiunque conosca una cura di farsi avanti. [[cheadle-yorkshire|Cheadle]] invita gli elettori a sostenerlo e il pubblico applaude, sorprendendolo con la propria reazione.',
          en: 'Leorio reaches the final four candidates for chairman. In his speech, he declares that he will use the Association for his own goal: saving [[gon-freecss|Gon]]. He asks anyone who knows a cure to come forward. [[cheadle-yorkshire|Cheadle]] urges the voters to support him, and the audience’s applause takes him by surprise.',
        },
      },
    },
    {
      episode: 145,
      chapter: 334,
      value: {
        title: { it: 'Il ritorno di Gon', en: 'Gon returns' },
        body: {
          it: 'Leorio resta in corsa contro [[pariston-hill|Pariston]] e ribadisce che vuole salvare [[gon-freecss|Gon]]. [[morel-mackernasey|Morel]] entra nella sala e Gon appare guarito insieme agli amici. Leorio corre ad abbracciarlo. La ragione che lo aveva spinto a candidarsi viene meno, mentre gli Hunter applaudono il ragazzo e festeggiano il suo ritorno.',
          en: 'Leorio remains in the race against [[pariston-hill|Pariston]] and repeats that he wants to save [[gon-freecss|Gon]]. [[morel-mackernasey|Morel]] enters the hall, and a healed Gon appears with his friends. Leorio runs to embrace him. The reason that drove him to stand for chairman falls away as the Hunters applaud Gon’s return.',
        },
      },
    },
    {
      episode: 146,
      chapter: 335,
      value: {
        title: {
          it: 'La fine della candidatura',
          en: 'The end of his candidacy',
        },
        body: {
          it: '[[gon-freecss|Gon]] sceglie [[pariston-hill|Pariston]] perché Leorio vuole diventare medico e non presidente. Anche Leorio vota per il suo avversario e lascia la sala con Gon. Arriva secondo nello scrutinio finale. Quando l’amico chiede di [[killua|Killua]], gli spiega che cercava un modo per guarirlo e che presto potranno parlarsi.',
          en: '[[gon-freecss|Gon]] chooses [[pariston-hill|Pariston]] because Leorio wants to become a doctor rather than chairman. Leorio also votes for his opponent and leaves the hall with Gon. He finishes second in the final count. When Gon asks about [[killua|Killua]], Leorio explains that he was seeking a way to heal him and they will talk soon.',
        },
      },
    },
    {
      episode: 148,
      chapter: 339,
      source: 'episode',
      value: {
        title: { it: 'Di nuovo sui libri', en: 'Returning to his studies' },
        body: {
          it: 'Dopo la fine dell’elezione e la guarigione di [[gon-freecss|Gon]], Leorio riprende a studiare medicina. Il suo obiettivo resta diventare medico. Prova anche a contattare [[kurapika|Kurapika]], che non risponde alla chiamata. Gli amici hanno ripreso strade diverse dopo la crisi che li aveva riuniti attorno all’ospedale.',
          en: 'After the election ends and [[gon-freecss|Gon]] recovers, Leorio returns to studying medicine. Becoming a doctor remains his goal. He also tries to contact [[kurapika|Kurapika]], who does not answer the call. Their friends have taken different paths again after the crisis that brought them together around the hospital.',
        },
      },
    },
  ],
  'morel-mackernasey': [
    {
      episode: 140,
      chapter: 325,
      value: {
        title: { it: 'Una stanza per le cure', en: 'A room for treatment' },
        body: {
          it: '[[gotoh|Gotoh]] chiede di svuotare l’ospedale per mantenere segreto il potere di [[alluka-zoldyck|Alluka]]. Morel interviene nella telefonata e propone una stanza separata nel parcheggio per [[gon-freecss|Gon]]. Chiama [[knov|Nobu]] per organizzare lo spazio. I due non conoscono ancora il funzionamento del potere, ma decidono di fidarsi di [[killua|Killua]].',
          en: '[[gotoh|Gotoh]] asks for the hospital to be evacuated to keep [[alluka-zoldyck|Alluka]]’s power secret. Morel takes over the call and proposes a separate room in the parking lot for [[gon-freecss|Gon]]. He calls [[knov|Knov]] to arrange the space. They do not yet understand the power but decide to trust [[killua|Killua]].',
        },
      },
    },
    {
      episode: 148,
      chapter: 339,
      value: {
        title: { it: 'Il brindisi per Netero', en: 'A toast to Netero' },
        body: {
          it: 'Dopo la guarigione di [[gon-freecss|Gon]], Morel ritrova [[knov|Nobu]] nella sede dell’Associazione. Riprendono la questione della scommessa fatta prima dell’ingresso nell’NGL e usano il denaro per comprare una bottiglia di champagne. Insieme brindano davanti all’immagine di [[netero|Netero]], ricordando il presidente che hanno accompagnato nella missione contro le formichimere.',
          en: 'After [[gon-freecss|Gon]]’s recovery, Morel meets [[knov|Knov]] at the Association’s headquarters. They return to the bet made before entering NGL and use the money to buy a bottle of champagne. Together they raise a toast before [[netero|Netero]]’s image, remembering the chairman they accompanied on the mission against the Chimera Ants.',
        },
      },
    },
  ],
  'knov': [
    {
      episode: 140,
      chapter: 325,
      value: {
        title: {
          it: 'Preparare lo spazio per Gon',
          en: 'Preparing space for Gon',
        },
        body: {
          it: '[[morel-mackernasey|Morel]] chiama Nobu per organizzare una stanza separata in cui curare [[gon-freecss|Gon]]. La scorta di [[killua|Killua]] vuole mantenere segreto il potere di [[alluka-zoldyck|Alluka]], ma svuotare l’intero ospedale non è praticabile. I due Hunter discutono come usare il parcheggio e scelgono di fidarsi del tentativo di Killua.',
          en: '[[morel-mackernasey|Morel]] calls Knov to arrange a separate room for [[gon-freecss|Gon]]’s treatment. [[killua|Killua]]’s escort wants to keep [[alluka-zoldyck|Alluka]]’s power secret, but evacuating the entire hospital is impractical. The two Hunters discuss using the parking lot and choose to trust Killua’s attempt to save his friend.',
        },
      },
    },
    {
      episode: 148,
      chapter: 339,
      value: {
        title: {
          it: 'La bottiglia per il presidente',
          en: 'A bottle for the chairman',
        },
        body: {
          it: 'Nobu incontra [[morel-mackernasey|Morel]] alla sede dell’Associazione dopo la guarigione di [[gon-freecss|Gon]]. Il denaro della scommessa fatta prima della missione viene usato per comprare una costosa bottiglia di champagne. I due la aprono davanti all’immagine di [[netero|Netero]] e brindano al presidente morto durante lo scontro con le formichimere.',
          en: 'Knov meets [[morel-mackernasey|Morel]] at the Association’s headquarters after [[gon-freecss|Gon]] recovers. The money from the bet made before the mission is used to buy an expensive bottle of champagne. They open it before [[netero|Netero]]’s image and raise a toast to the chairman who died during the battle against the Chimera Ants.',
        },
      },
    },
  ],
  'canary': [
    {
      episode: 140,
      chapter: 324,
      value: {
        title: {
          it: 'Accompagnare i due fratelli',
          en: 'Accompanying the siblings',
        },
        body: {
          it: '[[killua|Killua]] chiede che Canary accompagni lui e [[alluka-zoldyck|Alluka]] perché vuole affidare la sorella alle sue cure. [[gotoh|Gotoh]] accetta la sua presenza nella scorta. Si uniscono anche [[tsubone|Tsubone]] e [[amane|Amane]], incaricate da [[silva|Silva]] di sorvegliare il viaggio e riportare Killua a casa se viola le restrizioni della famiglia.',
          en: '[[killua|Killua]] asks Canary to accompany him and [[alluka-zoldyck|Alluka]] because he wants her to look after his sister. [[gotoh|Gotoh]] accepts her place in the escort. [[tsubone|Tsubone]] and [[amane|Amane]] also join them under [[silva|Silva]]’s orders to supervise the journey and take Killua home if he breaks the family’s restrictions.',
        },
      },
    },
    {
      episode: 148,
      chapter: 339,
      value: {
        title: { it: 'La tomba di Gotoh', en: 'Gotoh’s grave' },
        body: {
          it: 'Canary e [[amane|Amane]] si recano alla tomba di [[gotoh|Gotoh]] nella tenuta degli Zoldick. Quando un uomo con il suo aspetto compare davanti a loro, Amane rimane sorpresa. Si tratta del figlio dei [[kiriko|Kiriko]], capace di cambiare forma. La sostituzione permette di non rivelare la morte del maggiordomo a [[killua|Killua]] e [[alluka-zoldyck|Alluka]].',
          en: 'Canary and [[amane|Amane]] visit [[gotoh|Gotoh]]’s grave at the Zoldyck estate. When a man with his appearance stands before them, Amane is surprised. He is the shapeshifting [[kiriko|Kiriko]] son. The replacement allows the butler’s death to remain concealed from [[killua|Killua]] and [[alluka-zoldyck|Alluka]] after they have left the estate.',
        },
      },
    },
  ],
  'gotoh': [
    {
      episode: 141,
      chapter: 327,
      value: {
        title: {
          it: 'Lasciare passare la scorta',
          en: 'Sending the escort ahead',
        },
        body: {
          it: 'Durante il viaggio, [[killua|Killua]] si allontana con [[alluka-zoldyck|Alluka]] per sfuggire al controllo della scorta. [[hisoka|Hisoka]] raggiunge Gotoh, [[canary|Canary]] e [[amane|Amane]] e attacca con le carte. Gotoh le respinge lanciando monete. Ordina alle due donne di seguire Killua, assumendosi il compito di affrontare da solo l’avversario.',
          en: 'During the journey, [[killua|Killua]] escapes the escort with [[alluka-zoldyck|Alluka]]. [[hisoka|Hisoka]] reaches Gotoh, [[canary|Canary]], and [[amane|Amane]] and attacks with his cards. Gotoh knocks them aside with coins. He orders the two women to follow Killua, taking responsibility for fighting the attacker alone while they continue their mission.',
        },
      },
    },
    {
      episode: 142,
      chapter: 327,
      value: {
        title: { it: 'Lo scontro nel bosco', en: 'The fight in the forest' },
        body: {
          it: 'Gotoh affronta [[hisoka|Hisoka]] con le monete, aggiungendo rotazione ai colpi per torcergli le braccia. L’avversario usa la propria aura elastica per liberarsi e spostarsi tra gli alberi. Rimanda indietro le monete da più direzioni. Mentre Gotoh le respinge, Hisoka gli appare sopra la testa e lo uccide tagliandogli la gola.',
          en: 'Gotoh fights [[hisoka|Hisoka]] with coins, adding spin to twist his opponent’s arms. Hisoka uses his elastic aura to break free and move between the trees. He sends the coins back from several directions. While Gotoh knocks them away, Hisoka appears above him and kills him by cutting his throat.',
        },
      },
    },
  ],
  'gon-freecss': [
    {
      episode: 145,
      chapter: 334,
      value: {
        title: { it: 'Di nuovo tra gli amici', en: 'Back among his friends' },
        body: {
          it: '[[nanika|Cosa]] guarisce Gon su richiesta di [[killua|Killua]]. Tornato in forze, Gon raggiunge la sala dell’elezione insieme agli amici che erano in ospedale. [[leorio-paradinight|Leorio]] corre ad abbracciarlo e il pubblico applaude. Tra i presenti Gon riconosce finalmente [[ging-freecss|Ging]], seduto accanto ad altri Hunter.',
          en: '[[nanika|Nanika]] heals Gon at [[killua|Killua]]’s request. Restored to health, Gon reaches the election hall with the friends who were at the hospital. [[leorio-paradinight|Leorio]] runs to embrace him, and the audience applauds. Among those present, Gon finally recognizes [[ging-freecss|Ging]], sitting beside other Hunters.',
        },
      },
    },
    {
      episode: 146,
      chapter: 335,
      value: {
        title: { it: 'Parlare con Ging', en: 'Talking to Ging' },
        body: {
          it: 'Gon racconta a [[ging-freecss|Ging]] ciò che è accaduto a [[kite|Kaito]] e si rimprovera per non averlo salvato. Ging gli dice di rivolgere le scuse a Kaito, che si è fidato di lui. Gon vota per [[pariston-hill|Pariston]] perché [[leorio-paradinight|Leorio]] vuole fare il medico, poi lascia la sala per raggiungere Kaito.',
          en: 'Gon tells [[ging-freecss|Ging]] what happened to [[kite|Kite]] and blames himself for failing to save him. Ging tells him to apologize to Kite, who trusted him. Gon votes for [[pariston-hill|Pariston]] because [[leorio-paradinight|Leorio]] wants to become a doctor, then leaves the hall to go and see Kite.',
        },
      },
    },
    {
      episode: 147,
      chapter: 338,
      value: {
        title: { it: 'Le scuse e il saluto', en: 'An apology and a farewell' },
        body: {
          it: 'Gon raggiunge [[kite|Kaito]] e si scusa per non aver potuto combattere al suo fianco. Poi ritrova [[killua|Killua]] e [[alluka-zoldyck|Alluka]] presso l’Albero del Mondo. Ringrazia chi lo ha guarito e si scusa anche con Killua per averlo allontanato durante lo scontro. I due si separano promettendo di restare in contatto.',
          en: 'Gon visits [[kite|Kite]] and apologizes for failing to fight alongside him. He later meets [[killua|Killua]] and [[alluka-zoldyck|Alluka]] near the World Tree. He thanks those who healed him and apologizes to Killua for shutting him out during the battle. The two part ways, promising to stay in contact wherever they go.',
        },
      },
    },
    {
      episode: 148,
      chapter: 339,
      value: {
        title: {
          it: 'In cima all’Albero del Mondo',
          en: 'At the top of the World Tree',
        },
        body: {
          it: 'Gon scala l’Albero del Mondo e raggiunge [[ging-freecss|Ging]] in cima. Gli chiede che cosa cerchi e ascolta il racconto della sua prima spedizione. Ging descrive un mondo più vasto di quello conosciuto e lo invita a dare valore anche alle deviazioni dal proprio obiettivo. Gon gli restituisce la licenza Hunter e continua a parlare con lui.',
          en: 'Gon climbs the World Tree and reaches [[ging-freecss|Ging]] at the top. He asks what his father is seeking and listens to the account of his first expedition. Ging describes a world beyond the known one and encourages him to value the detours along the way. Gon returns his Hunter license and continues talking with him.',
        },
      },
    },
  ],
  'kite': [
    {
      episode: 147,
      chapter: 337,
      value: {
        title: {
          it: 'La confessione e le scuse',
          en: 'A confession and an apology',
        },
        body: {
          it: 'Kaito ascolta la confessione di una formichimera dall’aspetto di un koala, che ha ucciso una bambina dai capelli rossi. Kaito ora ha l’aspetto di quella bambina. Gli impone di restare e vivere assumendosi le proprie responsabilità. Poi riceve [[gon-freecss|Gon]], che si scusa per non aver potuto combattere al suo fianco. Kaito gli dice che entrambi devono allenarsi e lo rimanda da [[ging-freecss|Ging]].',
          en: 'Kite listens to a koala-like Chimera Ant confess that he killed the girl whose appearance Kite now has. Kite tells him to stay and live with responsibility for his actions. [[gon-freecss|Gon]] then arrives and apologizes for failing to fight alongside Kite. Kite says that they both need training and sends him back to [[ging-freecss|Ging]].',
        },
      },
    },
  ],
  'kiriko': [
    {
      episode: 148,
      chapter: 339,
      value: {
        title: { it: 'L’aspetto di Gotoh', en: 'Taking Gotoh’s appearance' },
        body: {
          it: 'Alla tenuta degli Zoldick, [[canary|Canary]] e [[amane|Amane]] si trovano davanti alla tomba di [[gotoh|Gotoh]]. Amane resta sorpresa quando lo vede comparire vivo. È invece il figlio dei Kiriko, che ne assume l’aspetto. La sua presenza permette di mantenere nascosta la morte del maggiordomo a [[killua|Killua]] e [[alluka-zoldyck|Alluka]].',
          en: 'At the Zoldyck estate, [[canary|Canary]] and [[amane|Amane]] stand at [[gotoh|Gotoh]]’s grave. Amane is startled when he appears alive. He is actually the Kiriko son, taking the butler’s appearance. His presence allows Gotoh’s death to remain hidden from [[killua|Killua]] and [[alluka-zoldyck|Alluka]] after their departure from the estate.',
        },
      },
    },
  ],
  'kurapika': [
    {
      episode: 148,
      chapter: 339,
      value: {
        title: {
          it: 'Davanti agli occhi del suo clan',
          en: 'Before his clan’s eyes',
        },
        body: {
          it: '[[leorio-paradinight|Leorio]] tenta di chiamare Kurapika, ma non riceve risposta. Kurapika rimane seduto davanti agli occhi scarlatti del suo clan che ha raccolto. Mentre gli amici si scambiano notizie dopo il ritorno di [[gon-freecss|Gon]], lui resta separato da loro, concentrato sulle reliquie delle persone che sta cercando di riportare a casa.',
          en: '[[leorio-paradinight|Leorio]] tries to call Kurapika but receives no answer. Kurapika remains seated before the scarlet eyes he has collected from his clan. While his friends exchange news after [[gon-freecss|Gon]]’s return, he stays apart from them, facing the remains of the people whose eyes he has been trying to recover.',
        },
      },
    },
  ],
} satisfies Record<string, Timeline<Story>>
